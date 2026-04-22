/**
 * POST /api/font-playground/match
 *
 * Haiku-powered font matcher. Input: { query, scripts }. Output:
 *   { picks: [{id, reason_ko}] } — exactly 3 picks from the catalog
 * Errors:
 *   400  invalid body / query too long / empty
 *   429  rate-limited (10 req / 60s / IP)
 *   503  API key missing — client should fall back to deterministic matcher
 *   502  upstream error — client should fall back
 *
 * Abuse prevention:
 *   - Query length cap: 500 chars, trimmed
 *   - IP-based sliding-window rate limit (in-memory, 10/min)
 *   - Strict JSON response validation against catalog ids (the model can
 *     hallucinate — we filter out anything it invents)
 */

import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { FONT_CATALOG, FONT_BY_ID } from "@/lib/fonts/catalog";
import type { FontScript } from "@/lib/fonts/types";
import { checkRateLimit } from "@/lib/fonts/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const IS_DEV = process.env.NODE_ENV !== "production";
const MODEL = "claude-haiku-4-5-20251001";
const MAX_QUERY = 500;

interface Pick {
  id: string;
  reason_ko: string;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "anon";
}

/** Build a compact catalog payload for the model — strips fields Haiku
 *  doesn't need (cssFamily, axes, weights, loader, source). Keeps payload
 *  small enough that Haiku can scan the full set and still have room to
 *  reason in a short response. */
function compactCatalog() {
  return FONT_CATALOG.map((f) => ({
    id: f.id,
    name: f.name,
    family: f.family,
    scripts: f.scripts,
    description: f.description,
    tags: {
      mood: f.tags.mood,
      era: f.tags.era,
      use: f.tags.use,
      personality: f.tags.personality,
    },
  }));
}

const SYSTEM_PROMPT = `You are a typography curator for a Korean + English design tool. You receive a user's short description of the vibe they want, a required-scripts list, and a catalog of ~60 curated fonts. Pick EXACTLY 3 fonts from the catalog that best match.

Rules:
- Each pick's id MUST be one of the catalog ids — never invent.
- HARD FILTER: every pick's "scripts" array MUST include EVERY entry in the user's "requiredScripts". If requiredScripts is ["hangul","latin"], the font must support both. If requiredScripts is empty, no script filter.
- Honor family hints in the description (세리프/serif/mono/code/handwritten).
- Brand/style references (토스/카카오/배민/당근/Geist 같은 느낌) are interpretive — pick fonts that match the brand's typographic register. Reason shouldn't mention "대체" for these; treat them as style descriptions, not exact-font requests.
- Specific font names NOT in the catalog: if the user names an exact typeface that isn't in the catalog (e.g. "Montserrat", "Noto Sans JP", "배민 도현"), pick the closest available analog and EXPLICITLY note the substitution in reason_ko using the pattern "원본 X는 없어 ~" or "X 대신 ~". This is only for exact font-name requests, not brand-style references.
- Specific font names that ARE in the catalog: use them naturally, don't apologize.
- Order picks best → less good.
- reason_ko: concise Korean (20–40자), cites a concrete attribute (weight/counter/curvature/era/mood) — don't just say "정확히 맞습니다".
- Respond with ONLY a JSON object. No prose, no markdown fences.

Response shape:
{"picks":[{"id":"<catalog_id>","reason_ko":"<한국어 한 줄>"},...]}`;

function sanitizeQuery(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  if (trimmed.length > MAX_QUERY) return null;
  return trimmed;
}

function sanitizeScripts(raw: unknown): FontScript[] {
  if (!Array.isArray(raw)) return [];
  const out: FontScript[] = [];
  for (const v of raw) {
    if (v === "hangul" || v === "latin") {
      if (!out.includes(v)) out.push(v);
    }
  }
  return out;
}

function parsePicks(text: string): Pick[] {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end < 0) return [];
  try {
    const parsed = JSON.parse(text.slice(start, end + 1)) as unknown;
    if (!parsed || typeof parsed !== "object") return [];
    const picks = (parsed as { picks?: unknown }).picks;
    if (!Array.isArray(picks)) return [];
    const out: Pick[] = [];
    for (const p of picks) {
      if (!p || typeof p !== "object") continue;
      const id = (p as { id?: unknown }).id;
      const reason_ko = (p as { reason_ko?: unknown }).reason_ko;
      if (typeof id !== "string" || typeof reason_ko !== "string") continue;
      if (!FONT_BY_ID[id]) continue;
      out.push({ id, reason_ko: reason_ko.slice(0, 120) });
      if (out.length >= 3) break;
    }
    return out;
  } catch {
    return [];
  }
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  const rl = checkRateLimit(`fp-match:${ip}`);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "rate_limited", retryAfterSec: rl.retryAfterSec },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const query = sanitizeQuery((body as { query?: unknown })?.query);
  if (!query) {
    return NextResponse.json({ error: "invalid_query" }, { status: 400 });
  }

  const requiredScripts = sanitizeScripts(
    (body as { scripts?: unknown })?.scripts,
  );

  const apiKey = process.env.OMD_ANTHROPIC_API_KEY;
  if (IS_DEV) {
    // eslint-disable-next-line no-console
    console.log(
      `[fp-match] key=${apiKey ? `set (${apiKey.slice(0, 7)}…, len=${apiKey.length})` : "MISSING"}`,
    );
  }
  if (!apiKey) {
    return NextResponse.json({ error: "no_api_key" }, { status: 503 });
  }

  const client = new Anthropic({ apiKey });

  let text = "";
  try {
    const res = await client.messages.create({
      model: MODEL,
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: `Description: ${query}\nRequired scripts: ${
            requiredScripts.length > 0 ? JSON.stringify(requiredScripts) : "[] (no filter)"
          }\n\nCatalog:\n${JSON.stringify(compactCatalog())}`,
        },
      ],
    });
    for (const block of res.content) {
      if (block.type === "text") text += block.text;
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "upstream_error";
    return NextResponse.json(
      { error: "upstream_error", detail: message },
      { status: 502 },
    );
  }

  const picks = parsePicks(text);
  // Enforce the script filter server-side too — don't trust the model.
  const filtered =
    requiredScripts.length === 0
      ? picks
      : picks.filter((p) => {
          const f = FONT_BY_ID[p.id];
          return f && requiredScripts.every((s) => f.scripts.includes(s));
        });
  if (filtered.length === 0) {
    return NextResponse.json(
      { error: "no_picks", raw: text.slice(0, 200) },
      { status: 502 },
    );
  }

  return NextResponse.json({ picks: filtered });
}

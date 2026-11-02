import { after } from "next/server";
import { dayBucket, getRedis } from "@/lib/kv";

/**
 * The catalog MCP transport is retired (v1, 2026-07-14). Reference collection and
 * reverify now run through skills plus the deterministic browser evidence pipeline.
 * v2 returns on this same path (docs/MCP_V2_SPEC_2026-10-29.md, owner decisions
 * D1–D6 approved 2026-11-02).
 *
 * Phase 0 (spec §7): every request still gets the 410, and is counted so we can see
 * whether old connector configs keep calling. One hash per UTC day, fields = the
 * method and a coarse client family read from the User-Agent. Nothing that
 * identifies a person is stored: no IP, no raw User-Agent, no request body. The
 * response is no-store so the CDN does not answer repeats and hide them.
 */
export const dynamic = "force-dynamic";

export const MCP410_TTL_SECONDS = 60 * 60 * 24 * 400;
export const mcp410DayKey = (yyyymmdd: string) => `omd:mcp410:${yyyymmdd}`;

const FAMILIES: readonly (readonly [string, RegExp])[] = [
  ["claude", /claude|anthropic/i],
  ["cursor", /cursor/i],
  ["openai", /openai|chatgpt|codex/i],
  ["vscode", /vscode|copilot/i],
  ["browser", /mozilla/i],
  ["library", /node|undici|axios|python|httpx|aiohttp|go-http|curl|okhttp|java/i],
];

/** A coarse client family; never the User-Agent itself. */
export function clientFamily(ua: string | null): string {
  if (!ua) return "none";
  for (const [family, re] of FAMILIES) if (re.test(ua)) return family;
  return "other";
}

type Counter = Pick<NonNullable<ReturnType<typeof getRedis>>, "hincrby" | "expire">;

export async function countRetiredCall(method: string, ua: string | null, redis: Counter | null = getRedis()): Promise<void> {
  if (!redis) return;
  const key = mcp410DayKey(dayBucket());
  try {
    await Promise.all([
      redis.hincrby(key, method.toLowerCase(), 1),
      redis.hincrby(key, `ua:${clientFamily(ua)}`, 1),
      redis.expire(key, MCP410_TTL_SECONDS),
    ]);
  } catch {
    // Counting is best-effort; the 410 never depends on it.
  }
}

function retired(request: Request): Response {
  after(() => countRetiredCall(request.method, request.headers.get("user-agent")));
  return Response.json(
    {
      error: "gone",
      message: "The oh-my-design MCP connector is retired. Use skills or fetch /<id>/design.md directly.",
      docs: "https://oh-my-design.kr/docs",
    },
    { status: 410, headers: { "cache-control": "no-store" } },
  );
}

export { retired as GET, retired as POST };

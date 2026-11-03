/**
 * Build the MCP search_references descriptor index: per reference, short search
 * terms in English, Korean, Japanese and Chinese, written by Claude from that
 * reference's own Overview and Colors text.
 *
 * Replaces the OpenRouter embeddings (2026-11-03): the Claude API has no
 * embeddings endpoint, and terms written once at build time let the runtime stay
 * a plain keyword match with no outside call and no query leaving the server.
 *
 * Local, on demand (not part of `npm run build`): the output is committed.
 *   node --env-file=.env.local scripts/build-search-descriptors.mjs [--dry-run] [--limit N]
 * Only references whose input changed since the last run are sent (sha256 of
 * model + prompt version + input text). Uses the Message Batches API (50% price).
 * Optional: OMD_DESCRIPTOR_MODEL (default claude-sonnet-5-5).
 *
 * The terms are search metadata only: never shown as brand facts, never exported
 * as tokens. A reference without terms is still found by its keywords.
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import { readReferenceSource } from "./lib/reference-source.mjs";
import { sectionsOf } from "../src/lib/mcp/search-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REFS_DIR = path.resolve(__dirname, "..", "references");
const OUT = path.resolve(__dirname, "..", "src", "data", "search-descriptors.generated.json");
const MODEL = process.env.OMD_DESCRIPTOR_MODEL ?? "claude-sonnet-5-5";
const PROMPT_VERSION = 1;
const LOCALES = ["en", "ko", "ja", "zh"];
const arg = (name) => process.argv.includes(`--${name}`);
const LIMIT = (() => { const i = process.argv.indexOf("--limit"); return i === -1 ? Infinity : Number(process.argv[i + 1]); })();

const SYSTEM = `You write search terms for a catalog of real companies' design systems. A developer will type a vague request such as "calm blue fintech", "토스 같은 차분한 앱", "落ち着いた銀行アプリ" or "簡潔的新聞網站", and your terms decide whether this reference is found.

Write terms only from the reference text you are given. Cover: what kind of product or service it is and who it serves; the look and feel the text describes (mood, density, shape, tone); the colour families the palette actually contains; notable interface traits the text states. Do not use any company or product name, do not compare with other brands, do not praise, and do not add anything the text does not support. If the text says little, write fewer terms.

Each locale gets its own natural terms, not a word-for-word translation: en (lowercase), ko (Korean), ja (Japanese), zh (Traditional Chinese). 4 to 14 terms per locale, each 1 to 4 words.`;

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: LOCALES,
  properties: Object.fromEntries(LOCALES.map((locale) => [locale, { type: "array", items: { type: "string" } }])),
};

/** The text Claude sees: identity, Overview, and the start of Colors. Capped so one reference stays small. */
export function descriptorInput(entry, markdown) {
  const sections = sectionsOf(markdown);
  const pick = (title, max) => (sections.find((s) => s.title === title)?.markdown ?? "").slice(0, max);
  return [
    `Category: ${entry.category}`,
    `Country: ${entry.country}`,
    pick("Overview", 5000),
    pick("Colors", 2500),
  ].filter(Boolean).join("\n\n");
}

/** Keep only well-formed, de-duplicated short strings; null when a locale is missing. */
export function cleanTerms(value) {
  if (!value || typeof value !== "object") return null;
  const out = {};
  for (const locale of LOCALES) {
    const list = value[locale];
    if (!Array.isArray(list)) return null;
    const seen = new Set();
    out[locale] = list
      .filter((term) => typeof term === "string")
      .map((term) => term.normalize("NFKC").trim().replace(/\s+/g, " "))
      .filter((term) => term.length > 0 && term.length <= 40 && !seen.has(term.toLowerCase()) && seen.add(term.toLowerCase()))
      .slice(0, 14);
    if (!out[locale].length) return null;
  }
  return out;
}

const hashOf = (text) => createHash("sha256").update(`${MODEL}\n${PROMPT_VERSION}\n${text}`).digest("hex").slice(0, 16);

async function main() {
  const { REGISTRY } = await import("../src/data/registry.generated.ts");
  const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : { entries: {} };
  const items = REGISTRY.map((entry) => {
    // readReferenceSource, not the file: it handles every on-disk shape (check-reader-blindness).
    const text = descriptorInput(entry, readReferenceSource(path.join(REFS_DIR, entry.id)).markdown);
    return { id: entry.id, text, hash: hashOf(text) };
  });
  const todo = items.filter((item) => previous.entries?.[item.id]?.hash !== item.hash).slice(0, LIMIT);
  console.log(`[search-descriptors] ${items.length} references, ${todo.length} to (re)write with ${MODEL}`);

  const entries = {};
  for (const item of items) if (previous.entries?.[item.id]?.hash === item.hash) entries[item.id] = previous.entries[item.id];

  if (todo.length && !arg("dry-run")) {
    if (!process.env.ANTHROPIC_API_KEY) {
      console.log("[search-descriptors] ANTHROPIC_API_KEY not set — nothing sent, file left as is.");
      return;
    }
    const client = new Anthropic();
    const batch = await client.messages.batches.create({
      // custom_id allows only [a-zA-Z0-9_-]{1,64}; some reference ids have dots, so send the position.
      requests: todo.map((item, i) => ({
        custom_id: `r${i}`,
        params: {
          model: MODEL,
          max_tokens: 2000,
          system: SYSTEM,
          output_config: { effort: "low", format: { type: "json_schema", schema: SCHEMA } },
          messages: [{ role: "user", content: item.text }],
        },
      })),
    });
    console.log(`[search-descriptors] batch ${batch.id} submitted`);
    let status = batch;
    while (status.processing_status !== "ended") {
      await new Promise((resolve) => setTimeout(resolve, 30_000));
      status = await client.messages.batches.retrieve(batch.id);
      console.log(`[search-descriptors] ${status.processing_status}: ${status.request_counts.succeeded} done, ${status.request_counts.processing} processing`);
    }
    const byId = new Map(todo.map((item, i) => [`r${i}`, item]));
    let failed = 0;
    for await (const result of await client.messages.batches.results(batch.id)) {
      const item = byId.get(result.custom_id);
      if (!item) continue;
      if (result.result.type !== "succeeded") { failed++; continue; }
      const text = result.result.message.content.find((block) => block.type === "text")?.text ?? "";
      let terms = null;
      try { terms = cleanTerms(JSON.parse(text)); } catch { terms = null; }
      if (!terms) { failed++; continue; }
      entries[item.id] = { hash: item.hash, terms };
    }
    console.log(`[search-descriptors] wrote ${todo.length - failed}, failed ${failed} (failed ones keep no terms and are retried next run)`);
  }

  const sorted = Object.fromEntries(Object.keys(entries).sort().map((id) => [id, entries[id]]));
  writeFileSync(OUT, `${JSON.stringify({ model: MODEL, prompt_version: PROMPT_VERSION, entries: sorted }, null, 1)}\n`);
  console.log(`[search-descriptors] ${Object.keys(sorted).length}/${items.length} references have terms → ${path.relative(process.cwd(), OUT)}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    // SDK errors carry a status and message, never the key.
    console.error(`[search-descriptors] failed: ${error?.status ?? ""} ${error?.message ?? error}`);
    process.exitCode = 1;
  });
}

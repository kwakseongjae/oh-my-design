/**
 * Precompute corpus embeddings for semantic `search_by_vibe` (MCP v2).
 *
 * Build-time, one-time, OUR cost (~$0.005 for the whole catalog on bge-m3).
 * Writes src/data/embeddings.generated.json — the runtime (catalog.ts) reads it
 * and switches search_by_vibe from keyword to cosine-similarity. If this file is
 * the empty placeholder, the runtime falls back to keyword (zero regression).
 *
 * Usage:
 *   OPENROUTER_API_KEY=sk-or-... node scripts/build-embeddings.mjs
 * Optional:
 *   OMD_EMBED_MODEL  (default "baai/bge-m3" — multilingual, $0.01/M, OSS)
 *
 * No key? It skips cleanly (leaves the placeholder) so normal builds never fail.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REFS_DIR = path.resolve(__dirname, "..", "references");
const OUT = path.resolve(__dirname, "..", "src", "data", "embeddings.generated.json");

const KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.OMD_EMBED_MODEL ?? "baai/bge-m3";
const BATCH = 50;

function frontmatterField(block, key) {
  const m = block.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, "m"));
  return m ? m[1].trim() : "";
}

// The text we embed per reference: identity + meta + the most semantically
// dense prose (Visual Theme / atmosphere lives at the top of the body) + the
// section titles. Keep it compact to hold token cost down.
function embedTextFor(id, raw) {
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const block = fmMatch ? fmMatch[1] : "";
  const body = fmMatch ? fmMatch[2] : raw;
  const name = frontmatterField(block, "displayName") || frontmatterField(block, "name") || id;
  const category = frontmatterField(block, "category");
  const country = frontmatterField(block, "country");
  const sections = body
    .split(/\r?\n/)
    .map((l) => l.match(/^##\s+(.+?)\s*$/))
    .filter(Boolean)
    .map((m) => m[1])
    .join(", ");
  const prose = body.replace(/^#.*$/gm, "").replace(/\s+/g, " ").trim().slice(0, 1200);
  return `${name}. Category: ${category}. Country: ${country}. Sections: ${sections}. ${prose}`;
}

async function embedBatch(inputs) {
  const res = await fetch("https://openrouter.ai/api/v1/embeddings", {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: MODEL, input: inputs }),
  });
  if (!res.ok) {
    throw new Error(`OpenRouter ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  const json = await res.json();
  // OpenAI-compatible: data[].embedding, ordered by data[].index
  return json.data.sort((a, b) => a.index - b.index).map((d) => d.embedding);
}

async function main() {
  if (!KEY) {
    console.log("[build-embeddings] OPENROUTER_API_KEY not set — skipping (runtime stays on keyword search).");
    return;
  }
  if (!existsSync(REFS_DIR)) {
    console.warn(`[build-embeddings] references dir missing: ${REFS_DIR} — skipping (keyword fallback).`);
    return;
  }

  const ids = readdirSync(REFS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory() && existsSync(path.join(REFS_DIR, e.id ?? e.name, "DESIGN.md")))
    .map((e) => e.name)
    .sort();

  const items = ids.map((id) => ({
    id,
    text: embedTextFor(id, readFileSync(path.join(REFS_DIR, id, "DESIGN.md"), "utf-8")),
  }));

  const vectors = {};
  let dim = 0;
  for (let i = 0; i < items.length; i += BATCH) {
    const slice = items.slice(i, i + BATCH);
    const embs = await embedBatch(slice.map((s) => s.text));
    slice.forEach((s, j) => {
      vectors[s.id] = embs[j];
      dim = embs[j].length;
    });
    console.log(`[build-embeddings] ${Math.min(i + BATCH, items.length)}/${items.length}`);
  }

  const payload = {
    model: MODEL,
    dim,
    generated: new Date().toISOString().slice(0, 10),
    vectors,
  };
  writeFileSync(OUT, JSON.stringify(payload));
  console.log(`[build-embeddings] wrote ${Object.keys(vectors).length} vectors (dim ${dim}, ${MODEL}) → ${OUT}`);
}

// Non-fatal by design: a missing key, wrong model slug, or API hiccup must
// never break a deploy — the runtime falls back to keyword search. Exit 0 always.
main().catch((e) => {
  console.warn(`[build-embeddings] skipped (${e.message}) — runtime stays on keyword search.`);
  process.exit(0);
});

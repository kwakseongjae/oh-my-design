/**
 * Precompute the MCP v2 search_references corpus (one vector per registry id).
 *
 * Build-time, one-time, OUR cost (~$0.005 for the whole catalog on bge-m3).
 * Writes src/data/embeddings.generated.json with the model, dimension and the
 * current MCP catalog's reference_ast hash. Runtime ignores stale/empty files.
 *
 * Usage:
 *   node scripts/build-embeddings.mjs (with OPENROUTER_API_KEY set)
 * Optional:
 *   OMD_EMBED_MODEL  (default "baai/bge-m3" — multilingual, $0.01/M, OSS)
 *
 * No key? It skips cleanly (leaves the placeholder) so normal builds never fail.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { readReferenceSource } from "./lib/reference-source.mjs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isEmbeddingVector, searchFields, sectionsOf } from "../src/lib/mcp/search-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REFS_DIR = path.resolve(__dirname, "..", "references");
const OUT = path.resolve(__dirname, "..", "src", "data", "embeddings.generated.json");

const BATCH = 50;

/** Our own failure reasons: safe to print (no provider body, no headers). */
class EmbedError extends Error {}

/** Same fields and first Overview paragraph as keyword search; no token guesses. */
export function embedTextFor(entry, markdown) {
  const overview = sectionsOf(markdown).find((section) => section.title === "Overview")?.markdown ?? "";
  return Object.values(searchFields(entry, overview)).filter(Boolean).join("\n");
}

/** Generate and validate everything before replacing the output file. */
export async function embedCatalog(items, { model, reference_ast, key, request = fetch }) {
  const vectors = {};
  let dim = 0;
  for (let i = 0; i < items.length; i += BATCH) {
    const slice = items.slice(i, i + BATCH);
    const response = await request("https://openrouter.ai/api/v1/embeddings", {
      method: "POST", signal: AbortSignal.timeout(30_000),
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model, input: slice.map((item) => item.text) }),
    });
    if (!response.ok) throw new EmbedError(`Embedding request failed (HTTP ${response.status})`);
    const payload = await response.json();
    if (!Array.isArray(payload.data) || payload.data.length !== slice.length) throw new EmbedError("Incomplete embedding response");
    const ordered = [...payload.data].sort((a, b) => a.index - b.index);
    const dimension = dim || ordered[0]?.embedding?.length;
    if (!Number.isInteger(dimension) || dimension <= 0
      || !ordered.every((item, index) => item.index === index && isEmbeddingVector(item.embedding, dimension))) {
      throw new EmbedError("Invalid embedding vectors");
    }
    dim = dimension;
    slice.forEach((item, index) => { vectors[item.id] = ordered[index].embedding; });
    console.log(`[build-embeddings] ${Math.min(i + BATCH, items.length)}/${items.length}`);
  }
  return { model, dim, reference_ast, generated: new Date().toISOString().slice(0, 10), vectors };
}

async function main() {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) {
    console.log("[build-embeddings] OPENROUTER_API_KEY not set — skipping (runtime stays on keyword search).");
    return;
  }
  const { REGISTRY } = await import("../src/data/registry.generated.ts");
  const { reference_ast } = JSON.parse(readFileSync(path.resolve(__dirname, "..", "src", "lib", "mcp", "catalog.generated.json"), "utf8"));
  if (typeof reference_ast !== "string" || !reference_ast) throw new EmbedError("Missing catalog hash");
  const items = REGISTRY.map((entry) => ({
    id: entry.id,
    // readReferenceSource, not the file: it handles every on-disk shape (check-reader-blindness).
    text: embedTextFor(entry, readReferenceSource(path.join(REFS_DIR, entry.id)).markdown),
  }));
  const payload = await embedCatalog(items, { model: process.env.OMD_EMBED_MODEL ?? "baai/bge-m3", reference_ast, key });
  writeFileSync(OUT, JSON.stringify(payload));
  console.log(`[build-embeddings] wrote ${Object.keys(payload.vectors).length} vectors (dim ${payload.dim}, ${payload.model}) → ${OUT}`);
}

// Non-fatal by design: a missing key, wrong model slug, or API hiccup must
// never break a deploy — the runtime falls back to keyword search. Exit 0 always.
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    // Print only our own reasons (an HTTP status at most); a provider body or a foreign error may echo request headers.
    const reason = error instanceof EmbedError ? error.message : error?.name ?? "unknown error";
    console.warn(`[build-embeddings] generation failed (${reason}) — skipping (keyword fallback if no matching corpus).`);
  });
}

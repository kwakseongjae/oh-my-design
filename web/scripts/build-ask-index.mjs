#!/usr/bin/env node
/**
 * Writes src/data/ask-index.generated.json, the lexical index behind the landing's question box
 * (/api/ask, docs/REDESIGN_R11_PLAN_2026-10-20.md W4). Runs in the `dev` and `build` chains after
 * build-registry, so the index follows the registry, docs and FAQ it is built from; the README
 * files live at the repo root, which the build already reads (../scripts/gen-llms-full.cjs).
 *
 *   node --no-warnings --experimental-strip-types scripts/build-ask-index.mjs [--check]
 *
 * The assembly lives in src/lib/ask/build-index.ts so tests use the same code. That module
 * imports through the `@/` alias and extensionless relative paths, which Node's type stripping
 * does not resolve on its own, so a small resolve hook maps them to the .ts files first.
 * Output is deterministic (registry and source order, no timestamps). --check exits 1 when the
 * committed file is stale.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { register } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = resolve(WEB, "..");
const OUT = join(WEB, "src", "data", "ask-index.generated.json");

const LOADER = `
import { statSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
let SRC = "";
export async function initialize(data) { SRC = data.src; }
function file(p) {
  for (const c of [p, p + ".ts", p + "/index.ts"]) {
    try { if (statSync(c).isFile()) return c; } catch {}
  }
  return null;
}
export async function resolve(specifier, context, next) {
  if (specifier.startsWith("@/")) {
    const f = file(SRC + "/" + specifier.slice(2));
    if (f) return next(pathToFileURL(f).href, context);
  } else if (/^\\.\\.?\\//.test(specifier) && context.parentURL && context.parentURL.startsWith("file:") && context.parentURL.endsWith(".ts")) {
    const f = file(fileURLToPath(new URL(specifier, context.parentURL)));
    if (f) return next(pathToFileURL(f).href, context);
  }
  return next(specifier, context);
}
`;
register(`data:text/javascript,${encodeURIComponent(LOADER)}`, { data: { src: join(WEB, "src") } });

const { buildAskIndex, serializeAskIndex, README_FILES, GUIDE_FILE } = await import("../src/lib/ask/build-index.ts");

const readmes = README_FILES.flatMap(({ path, loc }) => {
  const file = join(ROOT, path);
  if (!existsSync(file)) {
    console.warn(`build-ask-index: ${path} not found, skipped`);
    return [];
  }
  return [{ path, loc, markdown: readFileSync(file, "utf8") }];
});
const guidePath = join(ROOT, GUIDE_FILE);
const guide = existsSync(guidePath) ? readFileSync(guidePath, "utf8") : null;

const index = buildAskIndex({ readmes, guide });
const text = serializeAskIndex(index);

if (process.argv.includes("--check")) {
  const current = existsSync(OUT) ? readFileSync(OUT, "utf8") : "";
  if (current !== text) {
    console.error("build-ask-index: src/data/ask-index.generated.json is stale; run `node --no-warnings --experimental-strip-types scripts/build-ask-index.mjs` in web/.");
    process.exit(1);
  }
  console.log(`build-ask-index: up to date (${index.chunks.length} chunks)`);
} else {
  writeFileSync(OUT, text);
  const by = {};
  for (const c of index.chunks) by[c.src] = (by[c.src] ?? 0) + 1;
  console.log(`build-ask-index: ${index.chunks.length} chunks (${Object.entries(by).map(([k, v]) => `${k} ${v}`).join(", ")}), ${(text.length / 1024).toFixed(0)} KB → src/data/ask-index.generated.json`);
}

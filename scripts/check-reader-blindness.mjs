#!/usr/bin/env node
/**
 * Every reader that opens a reference's DESIGN.md must know that the file may
 * be an adopted Core v2 canonical.
 *
 * An adopted reference keeps no YAML frontmatter. Its canonical is the Core v2
 * body and the catalog metadata — country, category, verified date, tokens, the
 * whole `verification_v2` evidence graph — moves into `.omd/system/`, where
 * `readReferenceSource` rebuilds it byte for byte from the migration extension.
 * A reader that calls `readFileSync(<ref>/DESIGN.md)` and parses frontmatter
 * therefore does not error. It succeeds, and returns nothing.
 *
 * That has now happened twice, both times found by hand rather than by a gate:
 *
 *   - `measure-surface-drift.mjs` read the raw file and reported krds and toss
 *     as having no evidence sources at all, so the drift sweep skipped 22
 *     sources and two references sat behind a wall they had already cleared.
 *   - `packages/mcp/scripts/sync-data.mjs` copied raw bytes into the bundle, so
 *     MCP served toss with an empty frontmatter map: 0 keys against 12 for every
 *     unadopted peer, no country, no tier, no tokens. Only the display name
 *     survived, because the portable AST carries it separately.
 *
 * Two references are adopted today. The whole catalog is going that way, and
 * the failure is silent in both directions — the reader reports success and the
 * output is merely empty. So the rule is not "use the right helper", it is
 * **every reader in the pipeline has to have made a choice, in writing**.
 *
 * A file passes by being package-aware (it imports `readReferenceSource`, or
 * branches on `isCoreV2Markdown` / `isCoreV2Document`) or by being listed in
 * ALLOWED below with the reason it is correct as written. A new blind reader in
 * the pipeline fails this gate and has to pick one.
 *
 * Scope is derived, not listed: a file is in the pipeline if some package.json
 * script or husky hook invokes it, or if it is product code under `web/src/`
 * or `packages/mcp/src/`. Tests are out — a test that reads a fixture raw is
 * usually asserting something about the bytes.
 *
 * ## What this layer does not catch
 *
 * It checks pipeline entry points, not what they import. A script that reads
 * through a new `./lib/<helper>.mjs` doing `readFileSync(designPath)` passes
 * here, because the helper is out of scope unless some package.json script
 * invokes it directly. The behavioural half in
 * `web/__tests__/catalog-integrity.test.ts` is the backstop for that: whatever
 * route a reader takes, an adopted reference has to come out of every generated
 * artifact shaped like an unadopted one.
 *
 *   node scripts/check-reader-blindness.mjs          # exit 1 on an unlisted blind reader
 *   node scripts/check-reader-blindness.mjs --list   # show every reader and its verdict
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const LIST = process.argv.includes("--list");

/**
 * Correct as written, each for its own reason. A path earns a line here by
 * being examined, not by being noisy.
 */
const ALLOWED = new Map([
  ["web/src/lib/references/repository.server.ts",
    "the Core path: branches on isCoreV2Document and serves the package directly, which is the point of adopting"],
  ["packages/mcp/src/data.ts",
    "reads the synced bundle, not the canonical tree; sync-data.mjs writes the legacy source into it"],
  ["web/src/app/r/[id]/route.ts",
    "serves the canonical file as text/markdown — for an adopted reference the Core body IS the canonical, so raw is correct"],
  ["web/src/app/api/references/route.ts",
    "registry-first: tokens come from registry.generated.ts (built through readReferenceSource) and the prose regex is a fallback that no adopted reference reaches. Verified 2026-09-20; if an adopted reference ever lacks registry tokens this becomes a real bug"],
  ["web/src/app/qa-references/page.tsx",
    "dev-only diagnostic page, prose regexes over the body by design; degrades for adopted references and is not a product surface"],
  ["web/scripts/retire-template-motion.mjs",
    "writer: rewrites DESIGN.md in place, so it must see the bytes it will overwrite. Reading the reconstructed legacy body and writing it back would silently un-adopt the reference — it refuses on isCoreV2Markdown instead"],
  ["scripts/gen-llms-full.cjs",
    "publishes the canonical body to llms-full.txt, so raw is what should be published; it drops the Core section marker before picking the catalog one-liner. Reading the reconstruction would publish the pre-adoption text instead of the shipped file"],
  ["scripts/check-counts.mjs",
    "counts directories that contain a DESIGN.md; never reads one"],
]);

/**
 * A path expression that lands on a *reference's* DESIGN.md. The qualifier
 * matters: `join(root, "DESIGN.md")` is the consuming project's own design
 * system, which has nothing to do with the catalog and must not be flagged.
 * So the expression has to name a references tree — the canonical dir, a
 * mirror, or the MCP bundle.
 */
const REFERENCE_TREE = /REFS|references|refDir|DATA_DIR|CANONICAL|MIRROR/;
const JOIN_DESIGN_MD = /(?:path\.)?join\(([^)]{0,200}?["']DESIGN\.md["'])\)/;

/**
 * The raw reads of a reference's DESIGN.md, by line.
 *
 * This is deliberately about the *call site*, not the file. The first version
 * asked whether the file imported `readReferenceSource` anywhere, and a check
 * of that shape is trivially fooled: a builder that reads through the helper in
 * one place and `readFileSync(designPath)` in another passes while being exactly
 * as blind. Confirmed by reintroducing that bug into
 * `web/scripts/build-reference-quality.mjs` — a file-level check waved it
 * through. So each read is resolved instead: either the path is inline, or it is
 * an identifier assigned a reference-DESIGN.md join earlier in the same file.
 *
 * Constructing the path is fine on its own — `existsSync` and error messages do
 * it constantly. Only reading it counts.
 */
function rawReads(source) {
  // A join can name the tree indirectly — `path.join(dir, id, "DESIGN.md")`
  // where `dir` came from a list of reference roots. `gen-llms-full.cjs` reads
  // exactly that way, and the first version of this check, which only matched
  // the tree inside the join expression itself, lost a published surface
  // silently. So the file naming a references tree anywhere is enough to make
  // its DESIGN.md joins count; anything that catches is a decision to record,
  // not noise to suppress.
  const fileNamesTree = REFERENCE_TREE.test(source);
  const bound = new Set();
  for (const [, name, expression] of source.matchAll(
    /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*((?:path\.)?join\([^)]{0,200}?["']DESIGN\.md["']\))/g,
  )) {
    if (fileNamesTree || REFERENCE_TREE.test(expression)) bound.add(name);
  }
  const hits = [];
  const lines = source.split("\n");
  for (const [index, line] of lines.entries()) {
    for (const [, argument] of line.matchAll(/\b(?:await\s+)?readFileSync?\s*\(\s*([^,)]+)/g)) {
      const arg = argument.trim();
      const inlineJoin = JOIN_DESIGN_MD.test(line) && (fileNamesTree || REFERENCE_TREE.test(line));
      if (bound.has(arg) || (inlineJoin && /DESIGN\.md/.test(line))) hits.push(index + 1);
    }
    // `readFileSync(join(REFS, id, "DESIGN.md"), "utf8")` — the argument capture
    // above stops at the first comma inside join(), so match the whole line too.
    if (/\breadFile(?:Sync)?\s*\(/.test(line) && JOIN_DESIGN_MD.test(line)
      && (fileNamesTree || REFERENCE_TREE.test(line))) {
      if (!hits.includes(index + 1)) hits.push(index + 1);
    }
  }
  return [...new Set(hits)].sort((a, b) => a - b);
}

/**
 * Blank out comments, keeping line numbers intact.
 *
 * Without this the checker flagged its own documentation, and it would flag any
 * reader whose header comment quotes the pattern it is careful *not* to use —
 * punishing the files that explain themselves. Prose is not a read.
 */
function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, (block) => block.replace(/[^\n]/g, " "))
    .replace(/(^|[^:\\])\/\/[^\n]*/g, (line, lead) => lead + " ".repeat(line.length - lead.length));
}

/** True when the file touches a reference DESIGN.md path at all — the scope filter. */
function touchesAReference(source) {
  const fileNamesTree = REFERENCE_TREE.test(source);
  for (const [, expression] of source.matchAll(new RegExp(JOIN_DESIGN_MD, "g"))) {
    if (fileNamesTree || REFERENCE_TREE.test(expression)) return true;
  }
  return false;
}

/** Script paths any package.json or husky hook actually invokes. */
function pipelineScripts() {
  const out = new Set();
  const manifests = [
    ["package.json", "."],
    ["web/package.json", "web"],
    ["packages/mcp/package.json", "packages/mcp"],
  ];
  for (const [manifest, base] of manifests) {
    const path = join(ROOT, manifest);
    if (!existsSync(path)) continue;
    const scripts = JSON.parse(readFileSync(path, "utf8")).scripts ?? {};
    for (const command of Object.values(scripts)) {
      for (const [, spec] of String(command).matchAll(/(?:^|\s)((?:\.\.\/)*[\w./[\]-]+\.(?:mjs|cjs|ts|tsx))(?=\s|$)/g)) {
        out.add(relative(ROOT, resolve(ROOT, base, spec)));
      }
    }
  }
  for (const hook of existsSync(join(ROOT, ".husky")) ? readdirSync(join(ROOT, ".husky")) : []) {
    const path = join(ROOT, ".husky", hook);
    if (!existsSync(path) || readdirSync(join(ROOT, ".husky"), { withFileTypes: true })
      .find((e) => e.name === hook)?.isDirectory()) continue;
    for (const [, spec] of readFileSync(path, "utf8").matchAll(/(?:^|\s)([\w./[\]-]+\.(?:mjs|cjs|ts))(?=\s|$)/g)) {
      out.add(relative(ROOT, resolve(ROOT, spec)));
    }
  }
  return out;
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", "dist", "build"].includes(entry.name)) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, out);
    else if (/\.(mjs|cjs|ts|tsx|js)$/.test(path)) out.push(path);
  }
  return out;
}

const invoked = pipelineScripts();
const PRODUCT = ["web/src/app", "web/src/lib", "packages/mcp/src"];
const candidates = [...new Set([
  ...walk(join(ROOT, "scripts")), ...walk(join(ROOT, "web", "scripts")),
  ...PRODUCT.flatMap((dir) => walk(join(ROOT, dir))),
])].map((path) => relative(ROOT, path)).sort();

const readers = [];
for (const path of candidates) {
  if (/\.(test|spec)\.[a-z]+$/.test(path)) continue;
  const inPipeline = invoked.has(path) || PRODUCT.some((dir) => path.startsWith(`${dir}/`));
  if (!inPipeline) continue;
  const source = stripComments(readFileSync(join(ROOT, path), "utf8"));
  if (!touchesAReference(source)) continue;
  const raw = rawReads(source);
  const verdict = raw.length === 0 ? "aware" : ALLOWED.has(path) ? "allowed" : "BLIND";
  readers.push({ path, verdict, raw });
}

if (LIST) {
  for (const { path, verdict, raw } of readers) {
    const where = raw.length > 0 ? `  (raw read at line ${raw.join(", ")})` : "";
    console.log(`${verdict.padEnd(7)} ${path}${where}`
      + (verdict === "allowed" ? `\n          — ${ALLOWED.get(path)}` : ""));
  }
}

const blind = readers.filter((reader) => reader.verdict === "BLIND");
const stale = [...ALLOWED.keys()].filter((path) => !readers.some((reader) => reader.path === path));
if (blind.length === 0 && stale.length === 0) {
  console.log(`✓ check-reader-blindness: ${readers.length} pipeline reader(s) of DESIGN.md — `
    + `${readers.filter((r) => r.verdict === "aware").length} never read one raw, `
    + `${readers.filter((r) => r.verdict === "allowed").length} reviewed as correct raw`);
  process.exit(0);
}
if (blind.length > 0) {
  console.error(`✗ check-reader-blindness: ${blind.length} pipeline reader(s) open a reference's DESIGN.md `
    + "without accounting for an adopted Core v2 canonical:\n");
  for (const { path, raw } of blind) console.error(`    ${path}:${raw.join(",")}`);
  console.error("\n  An adopted reference has no frontmatter — such a reader returns empty, not an error.");
  console.error("  Either read through `readReferenceSource(referenceDir)`, or add the path to ALLOWED");
  console.error(`  in ${relative(ROOT, fileURLToPath(import.meta.url))} with the reason it is correct as written.`);
}
if (stale.length > 0) {
  console.error(`\n✗ ${stale.length} ALLOWED entr(y|ies) no longer match a pipeline reader — delete them:\n`);
  for (const path of stale) console.error(`    ${path}`);
}
process.exit(1);

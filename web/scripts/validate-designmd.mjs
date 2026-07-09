/**
 * `omd validate` (issue #37) — deterministic DESIGN.md schema gate.
 *
 *   node validate-designmd.mjs <DESIGN.md ...>           # validate given files
 *   node validate-designmd.mjs --catalog                 # validate every web/references/<id>/DESIGN.md
 *
 * Exits non-zero if any file has errors. Engine lives in lib/omd-core.mjs (shared).
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { validateDesignMd } from "./lib/omd-core.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
let files = [];
if (args.includes("--catalog")) {
  const refs = resolve(HERE, "..", "references");
  if (existsSync(refs)) files = readdirSync(refs, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(refs, d.name, "DESIGN.md")))
    .map((d) => join(refs, d.name, "DESIGN.md"));
} else {
  files = args.filter((a) => !a.startsWith("--")).map((a) => resolve(a));
}
if (!files.length) { console.error("usage: validate-designmd.mjs <DESIGN.md ...> | --catalog"); process.exit(2); }

const ICON = { error: "✗", warn: "▲", info: "·" };
const verbose = args.includes("-v") || files.length <= 3;
let totalErr = 0, totalWarn = 0, failed = 0;

for (const file of files) {
  let res;
  try { res = validateDesignMd(readFileSync(file, "utf8")); }
  catch (e) { console.log(`✗ ${file}\n    parse error: ${e.message}`); totalErr++; failed++; continue; }
  totalErr += res.errors; totalWarn += res.findings.filter((x) => x.level === "warn").length;
  if (!res.ok) failed++;
  const short = file.replace(resolve(HERE, "..", ".."), "").replace(/^\//, "");
  if (verbose || !res.ok) {
    console.log(`${res.ok ? "✓" : "✗"} ${short}`);
    for (const x of res.findings) if (verbose || x.level !== "info") console.log(`    ${ICON[x.level]} [${x.rule}] ${x.msg}`);
  }
}

console.log(`\n${files.length} file(s) · ${failed} with errors · ${totalErr} error(s) · ${totalWarn} warning(s)`);
process.exit(totalErr > 0 ? 1 : 0);

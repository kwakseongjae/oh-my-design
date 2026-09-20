#!/usr/bin/env node
/**
 * author-native-core-reference — turn an authored reference into a Core v2 draft.
 *
 * Spec §10 stage 5 is "future references written directly as Core v2", and the
 * chain that seals one has existed all along: `prepare-design-md-core-review`
 * → owner approval → `compile-design-md-core --adopt`, with no
 * `--migration-report` because nothing is being migrated. What it wants is a
 * *draft graph* plus provenance and coverage, and nothing produced those from
 * research output. This does.
 *
 * ## It does not map anything itself
 *
 * `migrate-design-md-core.cjs` already turns a 15-section reference body into a
 * Core graph, and it is the tested mapper. Writing a second one is exactly the
 * mistake that made the drift probe and the MCP bundle go blind. So this runs
 * the migrator, then converts what it emits from a *migration* into an
 * *authorship*:
 *
 *   1. run the migrator over the authored file          (mapping — not ours)
 *   2. translate its provenance and coverage into the   (also not ours)
 *      compiler's shape via build-core-compiler-provenance
 *   3. replace `dev.oh-my-design.migration` with        (the conversion)
 *      `dev.oh-my-design.catalog`
 *   4. strip `projection.sha256`                        (the compiler seals)
 *
 * ### Why replace rather than keep both
 *
 * `readReferenceSource` prefers a migration extension whenever it is present,
 * because rebuilding original bytes and checking a hash beats any projection.
 * Keep both and the catalog extension is dead weight and every native reference
 * reports `reconstructed: true` — indistinguishable from the migrated 440 in the
 * one field that exists to tell them apart. The authored file is a build input,
 * not a published version, and a bytes-faithful guarantee to a document nobody
 * ever saw is not a guarantee.
 *
 * ## What it refuses
 *
 * Replacing the extension discards `original_segments`, so anything the migrator
 * could not map stops being recoverable. For a migrated reference that is a
 * recorded loss; here it would be a silent one. Hence:
 *
 *   - `dropped_segments !== 0` — the same bar the adoption gate holds.
 *   - a `section` that did not map. The two segments that legitimately do not
 *     map are `frontmatter` (which becomes the catalog extension) and `preamble`
 *     (the title, which the projection renders). A *section* that did not map is
 *     body content about to vanish, and the author has to fold it into one of
 *     the seven before sealing.
 *   - `source_reconstruction_equal` or `projection_roundtrip_equal` false.
 *   - frontmatter the registry would reject — checked here against the exact
 *     list in `web/scripts/build-registry.mjs` `validate()`, so a bad hex or a
 *     missing country fails at authoring time and not three steps later.
 *
 * `added` is required, though the registry treats it as optional. 244 of the
 * first 440 have no `added` and therefore no record of when or why they entered
 * the catalog; new references do not get to repeat that.
 *
 * The migration report is copied into the output directory either way, so the
 * mapping is auditable after the extension it came from is gone.
 *
 * usage:
 *   node scripts/author-native-core-reference.mjs --input <authored.md> --out-dir <dir>
 *
 * then:
 *   node scripts/prepare-design-md-core-review.cjs <dir>/graph.json \
 *     --provenance <dir>/provenance.json --coverage <dir>/coverage.json --out-dir <review>
 *   (owner reads <review>/DESIGN.md and approves)
 *   node scripts/compile-design-md-core.cjs <review>/input-graph.json ... --adopt
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseReferenceFrontmatter } from "../web/scripts/lib/reference-quality.mjs";

const require = createRequire(import.meta.url);
/**
 * The migrator and the compiler both write a `provenance.json` and they are not
 * the same document: the migrator records what it did to the source
 * (`authority_status`, `segments`, `unresolved`), the compiler wants
 * `decisions[]`. Same for coverage. `build-core-compiler-provenance.cjs` is the
 * translation, written when the toss adoption needed three passes at doing it by
 * hand. Its CLI reads `web/references/<id>/DESIGN.md`, which a reference that
 * does not exist yet cannot satisfy, so the functions are called directly with
 * the authored bytes.
 */
const { build: buildProvenance, buildCoverage } = require("./build-core-compiler-provenance.cjs");

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CATALOG_EXTENSION = "dev.oh-my-design.catalog";
const MIGRATION_EXTENSION = "dev.oh-my-design.migration";
const CATALOG_EXTENSION_VERSION = "1.0.0";

/** Exactly `web/scripts/build-registry.mjs` `validate()`, plus `added`. */
const REQUIRED_STRINGS = ["id", "name", "country", "category", "homepage", "primary_color", "verified"];
const VALID_COUNTRIES = new Set(["KR", "US", "JP", "TW", "CN", "UK", "DE", "FR", "IT"]);
const VALID_LOGO_TYPES = new Set(["favicon", "simpleicons", "github"]);
const DATE = /^\d{4}-\d{2}-\d{2}$/;

const argv = process.argv.slice(2);
const flag = (name) => (argv.indexOf(name) >= 0 ? argv[argv.indexOf(name) + 1] : null);
const input = flag("--input");
const outDir = flag("--out-dir");

function fail(message, detail = []) {
  console.error(`author-native: ${message}`);
  for (const line of detail) console.error(`    ${line}`);
  process.exit(1);
}

if (!input || !outDir) {
  fail("usage: --input <authored.md> --out-dir <dir>");
}
if (!existsSync(input)) fail(`input does not exist: ${input}`);

/**
 * The catalog plane, lifted out of the authored file's frontmatter.
 *
 * Validated here rather than left to the registry three steps downstream: the
 * author is standing in front of the file right now.
 */
const authored = readFileSync(input, "utf8");
if (!authored.startsWith("---\n")) {
  fail("the authored file needs YAML frontmatter — it carries the catalog plane "
    + "(country, category, verified, tokens, verification_v2) that Core v2 does not model. "
    + "The sealed canonical will not have it; this input is what declares it.");
}
let frontmatter;
try {
  frontmatter = parseReferenceFrontmatter(authored, input);
} catch (error) {
  fail(`frontmatter does not parse: ${error.message}`);
}

const problems = [];
for (const key of REQUIRED_STRINGS) {
  if (typeof frontmatter[key] !== "string" || !frontmatter[key].trim()) problems.push(`missing or empty '${key}'`);
}
if (!VALID_COUNTRIES.has(frontmatter.country)) {
  problems.push(`country '${frontmatter.country}' is not one of ${[...VALID_COUNTRIES].join("|")}`);
}
if (!/^#[0-9a-fA-F]{6}$/.test(String(frontmatter.primary_color))) {
  problems.push(`primary_color '${frontmatter.primary_color}' is not #rrggbb`);
}
if (!DATE.test(String(frontmatter.verified))) problems.push(`verified '${frontmatter.verified}' is not YYYY-MM-DD`);
// Required here, optional in the registry. 244 of the first 440 have no `added`,
// so there is no record of when or why more than half the catalog arrived.
if (!DATE.test(String(frontmatter.added ?? ""))) {
  problems.push("added is required for a new reference (YYYY-MM-DD) — it is the only record of when this entered the catalog");
}
if (!frontmatter.logo || typeof frontmatter.logo !== "object") problems.push("missing 'logo' object");
else {
  if (!VALID_LOGO_TYPES.has(frontmatter.logo.type)) problems.push(`logo.type '${frontmatter.logo.type}' is not one of ${[...VALID_LOGO_TYPES].join("|")}`);
  if (typeof frontmatter.logo.slug !== "string" || !frontmatter.logo.slug.trim()) problems.push("logo.slug is missing");
}
if (problems.length > 0) {
  fail(`${problems.length} problem(s) in the authored frontmatter — the registry would reject this:`, problems);
}

// --- mapping: the migrator's job, not ours ------------------------------------
// The migrator refuses to publish into a directory that already exists, so the
// parent is created and the staging directory is left for it to make.
const staging = join(outDir, ".migrator-staging");
mkdirSync(outDir, { recursive: true });
rmSync(staging, { recursive: true, force: true });
const migrated = spawnSync(process.execPath, [
  join(ROOT, "scripts", "migrate-design-md-core.cjs"),
  "--input", resolve(input), "--write", "--out-dir", staging,
], { encoding: "utf8" });
if (migrated.status !== 0) {
  fail("the migrator refused the authored file:", `${migrated.stderr || migrated.stdout}`.trim().split("\n"));
}

const report = JSON.parse(readFileSync(join(staging, "migration-report.json"), "utf8"));
const graph = JSON.parse(readFileSync(join(staging, ".omd", "system", "graph.json"), "utf8"));
const segments = graph.extensions?.[MIGRATION_EXTENSION]?.original_segments ?? [];

// --- refusals: everything that would become a silent loss ---------------------
const losses = [];
if (report.dropped_segments !== 0) losses.push(`${report.dropped_segments} dropped segment(s): ${JSON.stringify(report.dropped)}`);
if (report.source_reconstruction_equal !== true) losses.push("source_reconstruction_equal is not true");
if (report.projection_roundtrip_equal !== true) losses.push("projection_roundtrip_equal is not true");

// `frontmatter` becomes the catalog extension and `preamble` is the title the
// projection renders; both legitimately do not map. An unmapped *section* is
// body content that would disappear with `original_segments`.
const mappedCount = Number(report.mapped_segments ?? 0);
const sections = segments.filter((segment) => segment.kind === "section");
const unmappedSections = sections.length - mappedCount;
if (unmappedSections > 0) {
  losses.push(`${unmappedSections} section(s) did not map to a Core section. `
    + "A migrated reference keeps them in original_segments; a native one has nowhere to keep them. "
    + "Fold the content into one of the seven sections and re-run.");
}
if (losses.length > 0) {
  writeFileSync(join(outDir, "migration-report.json"), `${JSON.stringify(report, null, 2)}\n`);
  fail(`refusing to author a package that loses content (report written to ${join(outDir, "migration-report.json")}):`, losses);
}

// --- conversion: migration -> authorship --------------------------------------
delete graph.extensions[MIGRATION_EXTENSION];
graph.extensions[CATALOG_EXTENSION] = { schema_version: CATALOG_EXTENSION_VERSION, frontmatter };
// The draft asserts content; the compiler owns every final binding.
if (graph.projection) delete graph.projection.sha256;

mkdirSync(outDir, { recursive: true });
const write = (name, value) => writeFileSync(join(outDir, name), `${JSON.stringify(value, null, 2)}\n`);
write("graph.json", graph);
write("provenance.json", buildProvenance(frontmatter.id, graph, authored));
write("coverage.json", buildCoverage(frontmatter.id, graph, report));
// Kept so the mapping stays auditable after the extension it describes is gone.
write("migration-report.json", report);
rmSync(staging, { recursive: true, force: true });

console.log(`author-native: draft for '${frontmatter.id}' in ${outDir}`);
console.log(`  ${mappedCount} section(s) mapped · ${report.merged_segments ?? 0} merged · 0 dropped`);
if (report.unsupported_claims_review_required) {
  console.log("  note: the migrator flagged unsupported claims for review — read migration-report.json");
}
console.log("\nnext:");
console.log(`  node scripts/prepare-design-md-core-review.cjs ${join(outDir, "graph.json")} \\`);
console.log(`    --provenance ${join(outDir, "provenance.json")} --coverage ${join(outDir, "coverage.json")} \\`);
console.log(`    --out-dir <review-dir>`);
console.log("  then have the owner read <review-dir>/DESIGN.md before approving.");

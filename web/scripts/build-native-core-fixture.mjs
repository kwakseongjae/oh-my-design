/**
 * Build the native Core v2 package fixture from krds's adopted package.
 *
 * A *native* reference is one written as Core v2 from the start: no migration,
 * so no `original_segments` to rebuild legacy catalog metadata from. It declares
 * that metadata in `extensions["dev.oh-my-design.catalog"]` instead.
 *
 * Derived from a real package rather than hand-written so the seal is genuine —
 * the artifacts chain by hash (graph → provenance/coverage → manifest → receipt)
 * and a hand-built fixture would only prove the verifier can be fooled.
 *
 * Re-run after any change to krds's package:
 *   node web/scripts/build-native-core-fixture.mjs
 */
import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readReferenceSource } from "./lib/reference-source.mjs";
import { parseReferenceFrontmatter } from "./lib/reference-quality.mjs";

const WEB_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(WEB_ROOT, "references", "krds");
const DST = join(WEB_ROOT, "__tests__", "fixtures", "native-core-reference");
const sha = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");
const S = (f) => join(SRC, ".omd/system", f);
const D = (f) => join(DST, ".omd/system", f);

copyFileSync(join(SRC, "DESIGN.md"), join(DST, "DESIGN.md"));

const graph = JSON.parse(readFileSync(S("graph.json"), "utf8"));
const frontmatter = parseReferenceFrontmatter(readReferenceSource(SRC).markdown, "krds");
delete graph.extensions["dev.oh-my-design.migration"];
graph.extensions["dev.oh-my-design.catalog"] = { schema_version: "1.0.0", frontmatter };
writeFileSync(D("graph.json"), `${JSON.stringify(graph, null, 2)}\n`);

// The artifacts chain by hash, so rebind in dependency order.
const oldGraph = sha(S("graph.json")), newGraph = sha(D("graph.json"));
for (const f of ["provenance.json", "coverage.json"]) {
  writeFileSync(D(f), readFileSync(S(f), "utf8").split(oldGraph).join(newGraph));
}
const manifest = JSON.parse(readFileSync(S("manifest.json"), "utf8"));
manifest.artifacts.graph.sha256 = newGraph;
manifest.artifacts.provenance.sha256 = sha(D("provenance.json"));
manifest.artifacts.coverage.sha256 = sha(D("coverage.json"));
writeFileSync(D("manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

// No `migration` block: nothing was migrated. The schema makes it optional, and
// `status: "adopted"` still holds — the graph is the adopted canonical.
const receipt = JSON.parse(readFileSync(S("adoption-receipt.json"), "utf8"));
delete receipt.migration;
delete receipt.inputs.migration_report_sha256;
receipt.inputs.graph_sha256 = newGraph;
receipt.inputs.provenance_sha256 = sha(D("provenance.json"));
receipt.inputs.coverage_sha256 = sha(D("coverage.json"));
for (const [key, rel] of [["design_md", "DESIGN.md"], ["graph", ".omd/system/graph.json"],
  ["provenance", ".omd/system/provenance.json"], ["coverage", ".omd/system/coverage.json"],
  ["manifest", ".omd/system/manifest.json"]]) receipt.outputs[key].sha256 = sha(join(DST, rel));
writeFileSync(D("adoption-receipt.json"), `${JSON.stringify(receipt, null, 2)}\n`);
console.log(`native fixture sealed at ${DST}; graph ${newGraph.slice(0, 12)}`);

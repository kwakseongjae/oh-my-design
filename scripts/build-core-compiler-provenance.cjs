#!/usr/bin/env node
/**
 * build-core-compiler-provenance — migration provenance → compiler provenance.
 *
 * The migrator and the compiler both emit a file called `provenance.json` and
 * they are not the same document. The migrator writes what it did to the source:
 * `authority_status`, `source`, `segments`, `unresolved`. The compiler's schema
 * (`spec/schema/design-system-provenance-v2.schema.json`) admits four keys and
 * none of those are among them — it wants `schema_version`, `design_md_sha256`,
 * `graph_sha256`, and a non-empty `decisions` array.
 *
 * So every adoption needs a translation step, and until now it was done by hand.
 * The toss adoption took three passes at it (r2 rejected, r3 repackaged, r4
 * regenerated), and the reasoning had to be written into a WHY_R3.md beside the
 * artifacts because the receipt records hashes and not intent. Doing that 440
 * times by hand is how a catalogue acquires quietly inconsistent provenance.
 *
 * What a decision records: an authored path in the graph, the class of source
 * behind it, and the evidence for it. `repository-fact` is the only class a
 * migration can honestly claim — the fact came from a file in this repository,
 * not from a fresh observation. Evidence is the reference's own
 * `verification_v2` sources where the path is a token those sources back, and
 * the migrated segment otherwise.
 *
 * The two hashes are all-zero placeholders, which is what `prepare` requires:
 * the compiler owns final bindings and rejects a provenance that pre-declares
 * them.
 *
 * Writes one file. Grants no authority: the output still has to go through
 * prepare, owner approval, compile, and the adoption checkpoint.
 *
 * `coverage.json` has the same two-document problem and is translated here too:
 * the migrator writes a migration report, the compiler wants `groups` and
 * `checks`. The four checks a migration can honestly assert come from the
 * migration report itself. The other seven are false, because contrast,
 * responsive behaviour, reduced motion and licence coverage are measurements
 * nobody made — asserting them from a text migration would be inventing
 * evidence, which is the one thing this pipeline exists to prevent.
 *
 * usage:
 *   node scripts/build-core-compiler-provenance.cjs <reference-id> \
 *     --graph <graph.json> --report <migration-report.json> \
 *     --out <provenance.json> [--coverage-out <coverage.json>]
 */
const fs = require('node:fs');
const path = require('node:path');

const ZERO_SHA = '0'.repeat(64);

/** Graph containers whose authored contents each earn a decision. */
const LEAF_CONTAINERS = new Set(['rules', 'roles', 'assets', 'voice', 'primary_tasks', 'decisions']);

/** Every authored path in the graph, in the shape the compiler records. */
function authoredPaths(node, prefix = '') {
  if (node === null || node === undefined) return [];
  if (Array.isArray(node)) return node.length ? [prefix] : [];
  if (typeof node !== 'object') return prefix ? [prefix] : [];
  const out = [];
  for (const [key, value] of Object.entries(node)) {
    if (key === 'extensions' || key === '$schema' || key === 'schema_version') continue;
    const next = prefix ? `${prefix}.${key}` : key;
    if (LEAF_CONTAINERS.has(key)) { if (Array.isArray(value) ? value.length : value) out.push(next); continue; }
    out.push(...authoredPaths(value, next));
  }
  return out;
}

/** `verification_v2` sources, which are the evidence behind token decisions. */
function verificationSources(markdown) {
  const out = [];
  const block = /^\s{2}sources:\s*\n((?:\s{4}-[^\n]*\n)+)/m.exec(markdown);
  if (!block) return out;
  for (const line of block[1].split('\n')) {
    const entry = /id:\s*([A-Za-z0-9._-]+).*?url:\s*"([^"]+)"/.exec(line);
    if (entry) out.push(`verification_v2 source ${entry[1]}: ${entry[2]}`);
  }
  return out;
}

function build(referenceId, graph, markdown) {
  const sources = verificationSources(markdown);
  const designPath = `web/references/${referenceId}/DESIGN.md`;
  const decisions = authoredPaths(graph).sort().map((claimPath) => ({
    path: claimPath,
    source_class: 'repository-fact',
    // A token is only as good as the surfaces the reference says it observed, so
    // token paths carry those sources. Everything else carries the segment it
    // was migrated from, which is the whole of what a migration can attest.
    evidence: claimPath.startsWith('foundations.tokens') && sources.length
      ? sources
      : [`${designPath} (migrated segment for ${claimPath})`],
  }));
  if (decisions.length === 0) throw new Error(`${referenceId}: graph has no authored paths`);
  return { schema_version: '2.0.0', design_md_sha256: ZERO_SHA, graph_sha256: ZERO_SHA, decisions };
}

/** Checks a text migration cannot speak to, and therefore does not claim. */
const UNMEASURED_CHECKS = [
  'token_reference_closure', 'contrast', 'component_state_coverage',
  'responsive_320_200', 'reduced_motion', 'assets_fonts_licenses',
  'implementation_contract_complete',
];

function buildCoverage(referenceId, graph, report) {
  const designPath = `web/references/${referenceId}/DESIGN.md`;
  const sections = Array.isArray(report?.core_section_ids) && report.core_section_ids.length
    ? report.core_section_ids
    : ['experience', 'foundations', 'typography-assets', 'components-states',
       'layout-platforms', 'content-locales', 'governance'];
  const groups = Object.fromEntries(sections.map((section) => [section, {
    status: 'covered',
    evidence: [
      `migrated from ${designPath} into core section '${section}'`,
      `migration report: dropped_segments=${report?.dropped_segments ?? 0}, `
        + `roundtrip_equal=${report?.projection_roundtrip_equal ? 'True' : 'False'}`,
    ],
  }]));
  const method = 'controller-computed-system-graph-v2';
  const checks = {
    portable_core_structure: { pass: Boolean(report?.conformance?.portable_core), method },
    bound_system_authority: { pass: Boolean(report?.source_reconstruction_equal), method },
    ...Object.fromEntries(UNMEASURED_CHECKS.map((name) => [name, { pass: false, method }])),
    unknown_absence: { pass: (report?.dropped_segments ?? 1) === 0, method },
    opaque_extension_preservation: { pass: Boolean(report?.opaque_extension_preserved), method },
  };
  return { schema_version: '2.0.0', groups, checks };
}

module.exports = { authoredPaths, build, buildCoverage, verificationSources };

if (require.main === module) {
  const argv = process.argv.slice(2);
  const referenceId = argv[0];
  const graphAt = argv[argv.indexOf('--graph') + 1];
  const outAt = argv[argv.indexOf('--out') + 1];
  if (!referenceId || argv.indexOf('--graph') < 0 || argv.indexOf('--out') < 0) {
    console.error('usage: build-core-compiler-provenance <reference-id> --graph <graph.json> --out <provenance.json>');
    process.exit(2);
  }
  const graph = JSON.parse(fs.readFileSync(graphAt, 'utf8'));
  const markdown = fs.readFileSync(path.join('web', 'references', referenceId, 'DESIGN.md'), 'utf8');
  const provenance = build(referenceId, graph, markdown);
  fs.writeFileSync(outAt, `${JSON.stringify(provenance, null, 2)}\n`);
  console.log(`wrote ${provenance.decisions.length} decisions → ${outAt}`);

  const coverageOutAt = argv.indexOf('--coverage-out') >= 0 ? argv[argv.indexOf('--coverage-out') + 1] : null;
  if (coverageOutAt) {
    const reportAt = argv[argv.indexOf('--report') + 1];
    if (argv.indexOf('--report') < 0) throw new Error('--coverage-out requires --report');
    const coverage = buildCoverage(referenceId, graph, JSON.parse(fs.readFileSync(reportAt, 'utf8')));
    fs.writeFileSync(coverageOutAt, `${JSON.stringify(coverage, null, 2)}\n`);
    const passing = Object.entries(coverage.checks).filter(([, v]) => v.pass).map(([k]) => k);
    console.log(`wrote coverage (${passing.length}/11 checks pass: ${passing.join(', ')}) → ${coverageOutAt}`);
  }
}

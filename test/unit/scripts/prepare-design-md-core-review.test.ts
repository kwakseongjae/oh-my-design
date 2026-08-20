import { afterEach, describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  symlinkSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const core = require('../../../scripts/design-md-core.cjs') as {
  MIGRATION_EXTENSION: string;
  renderCore(graph: Record<string, any>): string;
};
const reviewTool = resolve(process.cwd(), 'scripts/prepare-design-md-core-review.cjs');
const compiler = resolve(process.cwd(), 'scripts/compile-design-md-core.cjs');
const fixture = resolve(process.cwd(), 'spec/fixtures/design-md-core-v2/.omd/system/graph.json');
const roots: string[] = [];
const zeroSha = '0'.repeat(64);
const sectionIds = [
  'experience',
  'foundations',
  'typography-assets',
  'components-states',
  'layout-platforms',
  'content-locales',
  'governance',
];
const sectionFragments: Record<string, string> = {
  experience: '1-experience',
  foundations: '2-foundations',
  'typography-assets': '3-typography-assets',
  'components-states': '4-components-states',
  'layout-platforms': '5-layout-platforms',
  'content-locales': '6-content-locales',
  governance: '7-governance',
};
const checkIds = [
  'portable_core_structure',
  'bound_system_authority',
  'token_reference_closure',
  'contrast',
  'component_state_coverage',
  'responsive_320_200',
  'reduced_motion',
  'assets_fonts_licenses',
  'implementation_contract_complete',
  'unknown_absence',
  'opaque_extension_preservation',
];

function sha256(value: string | Buffer): string {
  return createHash('sha256').update(value).digest('hex');
}

function stableJson(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stableJson);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.keys(value as Record<string, unknown>)
      .sort()
      .map((key) => [key, stableJson((value as Record<string, unknown>)[key])]),
  );
}

function jsonBytes(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function tempRoot(): string {
  const root = mkdtempSync(join(tmpdir(), 'omd-core-review-'));
  roots.push(root);
  return root;
}

function validGraph(): Record<string, any> {
  const graph = JSON.parse(readFileSync(fixture, 'utf8'));
  delete graph.projection;
  graph.governance.decisions[0].path = 'typography_assets.roles.0.family';
  delete graph.extensions;
  return graph;
}

function validProvenance(): Record<string, any> {
  return {
    schema_version: '2.0.0',
    decisions: [{
      path: 'typography_assets.roles.0.family',
      source_class: 'unresolved',
      evidence: [],
    }],
  };
}

function validCoverage(): Record<string, any> {
  return {
    schema_version: '2.0.0',
    groups: Object.fromEntries(sectionIds.map((id) => [id, {
      status: 'covered',
      evidence: [`DESIGN.md#${sectionFragments[id]}`],
    }])),
    checks: Object.fromEntries(checkIds.map((id) => [id, {
      pass: true,
      method: 'controller-computed-system-graph-v2',
    }])),
  };
}

type InputOptions = {
  graph?: Record<string, any>;
  provenance?: Record<string, any>;
  coverage?: Record<string, any>;
  migrationReport?: Record<string, any> | ((graphBytes: string) => Record<string, any>);
};

function writeInputs(root: string, options: InputOptions = {}) {
  const graphPath = join(root, 'draft-graph.json');
  const provenancePath = join(root, 'draft-provenance.json');
  const coveragePath = join(root, 'draft-coverage.json');
  const reportPath = options.migrationReport ? join(root, 'migration-report-input.json') : null;
  const graphBytes = jsonBytes(options.graph ?? validGraph());
  const provenanceBytes = jsonBytes(options.provenance ?? validProvenance());
  const coverageBytes = jsonBytes(options.coverage ?? validCoverage());
  writeFileSync(graphPath, graphBytes);
  writeFileSync(provenancePath, provenanceBytes);
  writeFileSync(coveragePath, coverageBytes);
  let reportBytes: string | null = null;
  if (options.migrationReport) {
    const report = typeof options.migrationReport === 'function'
      ? options.migrationReport(graphBytes)
      : options.migrationReport;
    reportBytes = jsonBytes(report);
    writeFileSync(reportPath!, reportBytes);
  }
  return {
    graphPath,
    provenancePath,
    coveragePath,
    reportPath,
    before: { graphBytes, provenanceBytes, coverageBytes, reportBytes },
  };
}

function runPrepare(inputs: ReturnType<typeof writeInputs>, outDir: string) {
  const args = [
    reviewTool,
    inputs.graphPath,
    '--provenance', inputs.provenancePath,
    '--coverage', inputs.coveragePath,
    '--out-dir', outDir,
  ];
  if (inputs.reportPath) args.push('--migration-report', inputs.reportPath);
  return spawnSync(process.execPath, args, { encoding: 'utf8' });
}

function runApprove(reviewDir: string, receipt: string, approved = true, reviewer = 'owner@example.test') {
  const args = [
    reviewTool,
    '--approve', join(reviewDir, 'review-request.json'),
    '--reviewer', reviewer,
    '--out', receipt,
  ];
  if (approved) args.push('--authority-transition-approved');
  return spawnSync(process.execPath, args, { encoding: 'utf8' });
}

function runCompile(reviewDir: string, receipt: string, outDir: string, migration = false) {
  const args = [
    compiler,
    join(reviewDir, 'input-graph.json'),
    '--provenance', join(reviewDir, 'provenance.json'),
    '--coverage', join(reviewDir, 'coverage.json'),
    '--review-receipt', receipt,
  ];
  if (migration) args.push('--migration-report', join(reviewDir, 'migration-report.json'));
  args.push('--out-dir', outDir, '--adopt');
  return spawnSync(process.execPath, args, { encoding: 'utf8' });
}

function expectInputsUnchanged(inputs: ReturnType<typeof writeInputs>) {
  expect(readFileSync(inputs.graphPath, 'utf8')).toBe(inputs.before.graphBytes);
  expect(readFileSync(inputs.provenancePath, 'utf8')).toBe(inputs.before.provenanceBytes);
  expect(readFileSync(inputs.coveragePath, 'utf8')).toBe(inputs.before.coverageBytes);
  if (inputs.reportPath) expect(readFileSync(inputs.reportPath, 'utf8')).toBe(inputs.before.reportBytes);
}

function projectionStateSha(graph: Record<string, any>): string {
  return sha256(JSON.stringify(stableJson({
    identity: graph.identity,
    experience: graph.experience,
    foundations: graph.foundations,
    typography_assets: graph.typography_assets,
    components_states: graph.components_states,
    layout_platforms: graph.layout_platforms,
    content_locales: graph.content_locales,
    governance: graph.governance,
  })));
}

function migrationCandidate() {
  const graph = validGraph();
  graph.projection = { path: 'DESIGN.md', sha256: zeroSha };
  const source = core.renderCore(graph);
  graph.projection.sha256 = sha256(source);
  const segment = {
    id: 'source-0',
    kind: 'document',
    order: 0,
    start: 0,
    end: source.length,
    content: source,
    sha256: sha256(source),
  };
  graph.extensions = {
    [core.MIGRATION_EXTENSION]: {
      source_sha256: sha256(source),
      input_format: 'core-v2',
      original_segments: [segment],
      mapped_segment_ids: ['source-0'],
      partially_mapped_segment_ids: [],
      unmapped_segment_ids: [],
      preservation: {
        dropped_segments: 0,
        opaque_preserved: true,
        projection_roundtrip_equal: true,
        source_reconstruction_equal: true,
      },
      projection_observation_graph_sha256: '',
    },
  };
  graph.extensions[core.MIGRATION_EXTENSION].projection_observation_graph_sha256 = projectionStateSha(graph);
  expect(core.renderCore(graph)).toBe(source);
  return {
    graph,
    source,
    report: (graphBytes: string) => ({
      schema_version: '2.0.0',
      status: 'pass',
      input: { path: 'DESIGN.md', sha256: sha256(source), format: 'core-v2' },
      output: {
        format: 'core-v2',
        design_md_sha256: sha256(source),
        graph_sha256: sha256(graphBytes),
      },
      adoption_status: 'staged-non-authoritative',
      authoritative_adoption_ready: false,
      dropped_segments: 0,
      dropped: [],
      unsupported_claims_promoted: null,
      unsupported_claims_review_required: true,
      synthetic_product_values_added: 0,
      projection_roundtrip_equal: true,
      source_reconstruction_equal: true,
      opaque_extension_preserved: true,
    }),
  };
}

afterEach(() => {
  while (roots.length) rmSync(roots.pop()!, { recursive: true, force: true });
});

describe('DESIGN.md Core v2 exact review preparation', () => {
  it('previews before approval, binds the exact review, and compiles byte-identically without changing inputs', () => {
    const root = tempRoot();
    const graph = validGraph();
    graph.identity.name = '아틀라스';
    const inputs = writeInputs(root, { graph });
    const reviewDir = join(root, 'review');
    const prepared = runPrepare(inputs, reviewDir);

    expect(prepared.status, `${prepared.stderr}\n${prepared.stdout}`).toBe(0);
    expect(prepared.stdout).toContain('review required');
    expectInputsUnchanged(inputs);
    expect(readFileSync(join(reviewDir, 'input-graph.json'), 'utf8')).toBe(inputs.before.graphBytes);
    expect(readFileSync(join(reviewDir, 'provenance.json'), 'utf8')).toBe(inputs.before.provenanceBytes);
    expect(readFileSync(join(reviewDir, 'coverage.json'), 'utf8')).toBe(inputs.before.coverageBytes);

    const candidateGraphBytes = readFileSync(join(reviewDir, 'candidate-graph.json'), 'utf8');
    const candidateGraph = JSON.parse(candidateGraphBytes);
    const preview = readFileSync(join(reviewDir, 'DESIGN.md'), 'utf8');
    const requestBytes = readFileSync(join(reviewDir, 'review-request.json'), 'utf8');
    const request = JSON.parse(requestBytes);
    expect(candidateGraph.projection).toEqual({ path: 'DESIGN.md', sha256: zeroSha, locale: 'en' });
    expect(core.renderCore(candidateGraph)).toBe(preview);
    expect(request).toMatchObject({
      kind: 'design-md-core-review-request',
      status: 'review-required',
      authority: {
        state: 'non-authoritative-candidate',
        canonical: false,
        authority_transition_approved: false,
      },
      inputs: {
        graph_sha256: sha256(inputs.before.graphBytes),
        provenance_sha256: sha256(inputs.before.provenanceBytes),
        coverage_sha256: sha256(inputs.before.coverageBytes),
      },
      candidate: {
        normalized_graph_sha256: sha256(candidateGraphBytes),
        design_md_sha256: sha256(preview),
      },
      loss_evidence: {
        source: { exact_input_bytes_preserved: true },
        migration: { required: false },
      },
    });
    expect(request.artifacts.input_graph.bytes).toBe(Buffer.byteLength(inputs.before.graphBytes, 'utf8'));
    expect(readFileSync(join(reviewDir, 'review-request.sha256'), 'utf8'))
      .toBe(`${sha256(requestBytes)}  review-request.json\n`);
    expect(readdirSync(reviewDir).sort()).toEqual([
      'DESIGN.md',
      'candidate-graph.json',
      'coverage.json',
      'input-graph.json',
      'provenance.json',
      'review-request.json',
      'review-request.sha256',
    ]);
    expect(request).not.toHaveProperty('profile');
    expect(requestBytes).not.toContain('"profile": "portable-core"');
    expect(requestBytes).not.toContain('"canonical": "system-graph"');

    const receiptPath = join(root, 'owner-review.json');
    const approved = runApprove(reviewDir, receiptPath);
    expect(approved.status, `${approved.stderr}\n${approved.stdout}`).toBe(0);
    const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
    expect(receipt).toMatchObject({
      kind: 'design-md-core-adoption-review',
      decision: 'approved',
      authority_transition_approved: true,
      reviewer: { role: 'project-owner', identifier: 'owner@example.test' },
      inputs: {
        graph_sha256: sha256(inputs.before.graphBytes),
        provenance_sha256: sha256(inputs.before.provenanceBytes),
        coverage_sha256: sha256(inputs.before.coverageBytes),
        review_request_sha256: sha256(requestBytes),
        normalized_candidate_graph_sha256: sha256(candidateGraphBytes),
        candidate_design_md_sha256: sha256(preview),
      },
      candidate: {
        normalized_graph_sha256: sha256(candidateGraphBytes),
        design_md_sha256: sha256(preview),
        exact_preview_reviewed: true,
      },
    });

    const adoptedDir = join(root, 'adopted');
    const compiled = runCompile(reviewDir, receiptPath, adoptedDir);
    expect(compiled.status, `${compiled.stderr}\n${compiled.stdout}`).toBe(0);
    expect(readFileSync(join(adoptedDir, 'DESIGN.md'), 'utf8')).toBe(preview);
    expectInputsUnchanged(inputs);
    expect(readFileSync(join(reviewDir, 'DESIGN.md'), 'utf8')).toBe(preview);
  });

  it('requires a separate explicit owner authority transition and a fresh regular receipt', () => {
    const root = tempRoot();
    const inputs = writeInputs(root);
    const reviewDir = join(root, 'review');
    expect(runPrepare(inputs, reviewDir).status).toBe(0);
    const receipt = join(root, 'receipt.json');

    const missingFlag = runApprove(reviewDir, receipt, false);
    expect(missingFlag.status).toBe(1);
    expect(missingFlag.stderr).toContain('--authority-transition-approved is required');
    expect(existsSync(receipt)).toBe(false);

    writeFileSync(receipt, '{}\n');
    const existing = runApprove(reviewDir, receipt);
    expect(existing.status).toBe(1);
    expect(existing.stderr).toContain('must be fresh');
    expect(readFileSync(receipt, 'utf8')).toBe('{}\n');
  });

  it('schema-gates the generated approval before publishing sentinel owner identity', () => {
    const root = tempRoot();
    const inputs = writeInputs(root);
    const reviewDir = join(root, 'review');
    expect(runPrepare(inputs, reviewDir).status).toBe(0);
    const receipt = join(root, 'sentinel-owner-receipt.json');

    const result = runApprove(reviewDir, receipt, true, 'TBD');

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('adoption review schema');
    expect(result.stderr).toContain('/reviewer/identifier');
    expect(existsSync(receipt)).toBe(false);
  });

  it.each([
    ['preview tamper', (reviewDir: string) => {
      writeFileSync(join(reviewDir, 'DESIGN.md'), '# changed\n');
    }, /candidate_design_md binding is stale|candidate is stale/],
    ['candidate graph tamper', (reviewDir: string) => {
      const file = join(reviewDir, 'candidate-graph.json');
      const graph = JSON.parse(readFileSync(file, 'utf8'));
      graph.identity.name = 'Changed';
      writeFileSync(file, jsonBytes(graph));
    }, /candidate_graph binding is stale|candidate is stale/],
    ['request tamper', (reviewDir: string) => {
      const file = join(reviewDir, 'review-request.json');
      const request = JSON.parse(readFileSync(file, 'utf8'));
      request.status = 'approved';
      writeFileSync(file, jsonBytes(request));
    }, /exact-byte hash is stale/],
    ['missing request', (reviewDir: string) => {
      unlinkSync(join(reviewDir, 'review-request.json'));
    }, /review request does not exist/],
    ['symlinked request', (reviewDir: string) => {
      const file = join(reviewDir, 'review-request.json');
      const backup = join(reviewDir, 'request-backup.json');
      renameSync(file, backup);
      symlinkSync(backup, file, 'file');
    }, /review request must be a regular, non-symlink file/],
    ['stale provenance', (reviewDir: string) => {
      writeFileSync(join(reviewDir, 'provenance.json'), '{}\n');
    }, /provenance binding is stale/],
    ['missing candidate', (reviewDir: string) => {
      unlinkSync(join(reviewDir, 'candidate-graph.json'));
    }, /candidate graph does not exist/],
    ['symlinked candidate', (reviewDir: string) => {
      const file = join(reviewDir, 'candidate-graph.json');
      const backup = join(reviewDir, 'candidate-backup.json');
      renameSync(file, backup);
      symlinkSync(backup, file, 'file');
    }, /regular, non-symlink file/],
  ] as const)('rejects %s before emitting approval', (_label, mutate, error) => {
    const root = tempRoot();
    const inputs = writeInputs(root);
    const reviewDir = join(root, 'review');
    expect(runPrepare(inputs, reviewDir).status).toBe(0);
    mutate(reviewDir);
    const receipt = join(root, 'receipt.json');

    const result = runApprove(reviewDir, receipt);

    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(error);
    expect(existsSync(receipt)).toBe(false);
    expectInputsUnchanged(inputs);
  });

  it('rejects invalid or symlinked preparation inputs and never publishes a partial directory', () => {
    const root = tempRoot();
    const provenance = validProvenance();
    provenance.decisions[0].value = 'invented';
    let inputs = writeInputs(root, { provenance });
    let reviewDir = join(root, 'invalid-review');
    let result = runPrepare(inputs, reviewDir);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('unresolved provenance must not carry a value');
    expect(existsSync(reviewDir)).toBe(false);

    const second = join(root, 'second');
    mkdirSync(second);
    inputs = writeInputs(second);
    const linked = join(second, 'linked-provenance.json');
    symlinkSync(inputs.provenancePath, linked, 'file');
    inputs.provenancePath = linked;
    reviewDir = join(root, 'symlink-review');
    result = runPrepare(inputs, reviewDir);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('regular, non-symlink file');
    expect(existsSync(reviewDir)).toBe(false);
  });

  it('carries exact migration loss review fields and compiles the reviewed preview byte-identically', () => {
    const root = tempRoot();
    const migration = migrationCandidate();
    const inputs = writeInputs(root, {
      graph: migration.graph,
      migrationReport: migration.report,
    });
    const reviewDir = join(root, 'review');
    const prepared = runPrepare(inputs, reviewDir);
    expect(prepared.status, `${prepared.stderr}\n${prepared.stdout}`).toBe(0);
    const preview = readFileSync(join(reviewDir, 'DESIGN.md'), 'utf8');
    const candidateGraphBytes = readFileSync(join(reviewDir, 'candidate-graph.json'), 'utf8');
    const requestBytes = readFileSync(join(reviewDir, 'review-request.json'), 'utf8');
    const request = JSON.parse(requestBytes);
    expect(request.loss_evidence.migration).toMatchObject({
      required: true,
      report_sha256: sha256(inputs.before.reportBytes!),
      source_sha256: sha256(migration.source),
      candidate_input_graph_sha256: sha256(inputs.before.graphBytes),
      candidate_input_design_md_sha256: sha256(migration.source),
      adoption_preview_graph_sha256: sha256(candidateGraphBytes),
      adoption_preview_design_md_sha256: sha256(preview),
      dropped_segments: 0,
      source_reconstruction_equal: true,
      opaque_extension_preserved: true,
      unsupported_claims_review_required: true,
      unsupported_claims_approved: false,
    });

    const receiptPath = join(root, 'migration-owner-review.json');
    const approved = runApprove(reviewDir, receiptPath);
    expect(approved.status, `${approved.stderr}\n${approved.stdout}`).toBe(0);
    const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
    expect(receipt.inputs).toMatchObject({
      review_request_sha256: sha256(requestBytes),
      normalized_candidate_graph_sha256: sha256(candidateGraphBytes),
      candidate_design_md_sha256: sha256(preview),
      migration_report_sha256: sha256(inputs.before.reportBytes!),
    });
    expect(receipt.migration_review).toEqual({
      source_sha256: sha256(migration.source),
      candidate_graph_sha256: sha256(inputs.before.graphBytes),
      candidate_design_md_sha256: sha256(migration.source),
      dropped_segments: 0,
      source_reconstruction_equal: true,
      unsupported_claims_reviewed: true,
      unsupported_claims_approved: true,
    });

    const adoptedDir = join(root, 'adopted');
    const compiled = runCompile(reviewDir, receiptPath, adoptedDir, true);
    expect(compiled.status, `${compiled.stderr}\n${compiled.stdout}`).toBe(0);
    expect(readFileSync(join(adoptedDir, 'DESIGN.md'), 'utf8')).toBe(preview);
    expectInputsUnchanged(inputs);
  });
});

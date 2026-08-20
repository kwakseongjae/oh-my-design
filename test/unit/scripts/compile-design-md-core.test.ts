import { afterEach, describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const core = require('../../../scripts/design-md-core.cjs') as {
  MIGRATION_EXTENSION: string;
  graphFromCoreProjection(markdown: string): Record<string, any>;
  inspectDesignMd(markdown: string): Record<string, any>;
  renderCore(graph: Record<string, any>): string;
  semanticCoreDigest(markdown: string): string;
};
const { GOVERNANCE_COPY } = require('../../../scripts/design-md-core-conformance.cjs') as {
  GOVERNANCE_COPY: Record<string, {
    authority: Record<string, string>;
    priority: string[];
    unknowns: string;
    changes: string;
  }>;
};
const compiler = resolve(process.cwd(), 'scripts/compile-design-md-core.cjs');
const reviewTool = resolve(process.cwd(), 'scripts/prepare-design-md-core-review.cjs');
const projectValidator = resolve(process.cwd(), 'scripts/validate-project-design-system.cjs');
const fixture = resolve(process.cwd(), 'spec/fixtures/design-md-core-v2/.omd/system/graph.json');
const roots: string[] = [];
const sectionIds = [
  'experience',
  'foundations',
  'typography-assets',
  'components-states',
  'layout-platforms',
  'content-locales',
  'governance',
];
const sectionFragments = {
  experience: '1-experience',
  foundations: '2-foundations',
  'typography-assets': '3-typography-assets',
  'components-states': '4-components-states',
  'layout-platforms': '5-layout-platforms',
  'content-locales': '6-content-locales',
  governance: '7-governance',
} as const;
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
  const root = mkdtempSync(join(tmpdir(), 'omd-core-compile-'));
  roots.push(root);
  return root;
}

function validGraph(): Record<string, any> {
  const graph = JSON.parse(readFileSync(fixture, 'utf8'));
  graph.projection.sha256 = '0'.repeat(64);
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
      evidence: [`DESIGN.md#${sectionFragments[id as keyof typeof sectionFragments]}`],
    }])),
    checks: Object.fromEntries(checkIds.map((id) => [id, {
      pass: true,
      method: 'controller-computed-system-graph-v2',
    }])),
  };
}

type BundleOptions = {
  provenance?: Record<string, any>;
  coverage?: Record<string, any>;
  migrationReport?: Record<string, any> | ((graphBytes: string) => Record<string, any>);
  mutateReview?: (review: Record<string, any>) => void;
};

function writeBundle(root: string, graph = validGraph(), options: BundleOptions = {}) {
  const graphPath = join(root, 'draft-graph.json');
  const provenancePath = join(root, 'provenance.json');
  const coveragePath = join(root, 'coverage.json');
  const reviewPath = join(root, 'review-receipt.json');
  const reportPath = options.migrationReport ? join(root, 'migration-report.json') : null;
  const graphBytes = jsonBytes(graph);
  const provenanceBytes = jsonBytes(options.provenance ?? validProvenance());
  const coverageBytes = jsonBytes(options.coverage ?? validCoverage());
  writeFileSync(graphPath, graphBytes, 'utf8');
  writeFileSync(provenancePath, provenanceBytes, 'utf8');
  writeFileSync(coveragePath, coverageBytes, 'utf8');
  let reportBytes: string | null = null;
  if (options.migrationReport) {
    const report = typeof options.migrationReport === 'function'
      ? options.migrationReport(graphBytes)
      : options.migrationReport;
    reportBytes = jsonBytes(report);
    writeFileSync(reportPath!, reportBytes, 'utf8');
  }
  const review: Record<string, any> = {
    schema_version: '2.0.0',
    kind: 'design-md-core-adoption-review',
    decision: 'approved',
    authority_transition_approved: true,
    reviewer: { role: 'project-owner', identifier: 'owner@example.test' },
    inputs: {
      graph_sha256: sha256(graphBytes),
      provenance_sha256: sha256(provenanceBytes),
      coverage_sha256: sha256(coverageBytes),
      ...(reportBytes ? { migration_report_sha256: sha256(reportBytes) } : {}),
    },
  };
  if (reportBytes) {
    const report = JSON.parse(reportBytes);
    review.migration_review = {
      source_sha256: report.input.sha256,
      candidate_graph_sha256: report.output.graph_sha256,
      candidate_design_md_sha256: report.output.design_md_sha256,
      dropped_segments: 0,
      source_reconstruction_equal: true,
      unsupported_claims_reviewed: true,
      unsupported_claims_approved: true,
    };
  }
  options.mutateReview?.(review);
  const reviewDir = join(root, 'prepared-review');
  const prepareArgs = [
    reviewTool, graphPath, '--provenance', provenancePath, '--coverage', coveragePath,
    '--out-dir', reviewDir,
  ];
  if (reportPath) prepareArgs.push('--migration-report', reportPath);
  const prepared = spawnSync(process.execPath, prepareArgs, { encoding: 'utf8' });
  if (prepared.status === 0) {
    const approval = spawnSync(process.execPath, [
      reviewTool,
      '--approve', join(reviewDir, 'review-request.json'),
      '--reviewer', 'owner@example.test',
      '--out', reviewPath,
      '--authority-transition-approved',
    ], { encoding: 'utf8' });
    if (approval.status !== 0) throw new Error(approval.stderr);
    const approvedReview = JSON.parse(readFileSync(reviewPath, 'utf8'));
    options.mutateReview?.(approvedReview);
    writeFileSync(reviewPath, jsonBytes(approvedReview), 'utf8');
    return {
      graphPath: join(reviewDir, 'input-graph.json'),
      provenancePath: join(reviewDir, 'provenance.json'),
      coveragePath: join(reviewDir, 'coverage.json'),
      reviewPath,
      reportPath: reportPath ? join(reviewDir, 'migration-report.json') : null,
    };
  }
  writeFileSync(reviewPath, jsonBytes(review), 'utf8');
  return { graphPath, provenancePath, coveragePath, reviewPath, reportPath };
}

function runCompile(
  bundle: ReturnType<typeof writeBundle>,
  outDir: string,
  options: { adopt?: boolean; omit?: 'provenance' | 'coverage' | 'review' | 'report' } = {},
) {
  const args = [compiler, bundle.graphPath];
  if (options.omit !== 'provenance') args.push('--provenance', bundle.provenancePath);
  if (options.omit !== 'coverage') args.push('--coverage', bundle.coveragePath);
  if (options.omit !== 'review') args.push('--review-receipt', bundle.reviewPath);
  if (bundle.reportPath && options.omit !== 'report') args.push('--migration-report', bundle.reportPath);
  args.push('--out-dir', outDir);
  if (options.adopt !== false) args.push('--adopt');
  return spawnSync(process.execPath, args, {
    cwd: process.cwd(),
    encoding: 'utf8',
  });
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

describe('DESIGN.md Core v2 adopted package compiler', () => {
  it('accepts an authority-neutral graph without projection metadata and creates every final binding', () => {
    const root = tempRoot();
    const graph = validGraph();
    delete graph.projection;
    const bundle = writeBundle(root, graph);
    const sourceBefore = readFileSync(bundle.graphPath, 'utf8');
    const outDir = join(root, 'adopted');

    const result = runCompile(bundle, outDir);

    expect(result.status, result.stderr).toBe(0);
    expect(result.stdout).toContain('six-artifact transaction integrity passed');
    expect(readFileSync(bundle.graphPath, 'utf8')).toBe(sourceBefore);
    const designMd = readFileSync(join(outDir, 'DESIGN.md'), 'utf8');
    const graphBytes = readFileSync(join(outDir, '.omd/system/graph.json'), 'utf8');
    const compiledGraph = JSON.parse(graphBytes);
    const provenanceBytes = readFileSync(join(outDir, '.omd/system/provenance.json'), 'utf8');
    const coverageBytes = readFileSync(join(outDir, '.omd/system/coverage.json'), 'utf8');
    const provenance = JSON.parse(provenanceBytes);
    const coverage = JSON.parse(coverageBytes);
    const manifestBytes = readFileSync(join(outDir, '.omd/system/manifest.json'), 'utf8');
    const manifest = JSON.parse(manifestBytes);
    const receipt = JSON.parse(readFileSync(join(outDir, '.omd/system/adoption-receipt.json'), 'utf8'));
    expect(compiledGraph.projection).toEqual({ path: 'DESIGN.md', sha256: sha256(designMd), locale: 'en' });
    expect(core.renderCore(compiledGraph)).toBe(designMd);
    expect(provenance).toMatchObject({ design_md_sha256: sha256(designMd), graph_sha256: sha256(graphBytes) });
    expect(coverage).toMatchObject({ design_md_sha256: sha256(designMd), graph_sha256: sha256(graphBytes) });
    expect(manifest.artifacts).toEqual({
      coverage: { path: '.omd/system/coverage.json', sha256: sha256(coverageBytes) },
      design_md: { path: 'DESIGN.md', sha256: sha256(designMd) },
      graph: { path: '.omd/system/graph.json', sha256: sha256(graphBytes) },
      provenance: { path: '.omd/system/provenance.json', sha256: sha256(provenanceBytes) },
    });
    expect(receipt).toMatchObject({
      kind: 'design-md-core-adoption-receipt',
      status: 'adopted',
      authority: 'system-graph',
      outputs: {
        design_md: { sha256: sha256(designMd) },
        graph: { sha256: sha256(graphBytes) },
        provenance: { sha256: sha256(provenanceBytes) },
        coverage: { sha256: sha256(coverageBytes) },
        manifest: { sha256: sha256(manifestBytes) },
      },
    });
    expect(Object.keys(receipt.outputs)).toHaveLength(5);
  });

  it('preserves table-edge facts and typed interaction applicability through the exact compile round trip', () => {
    const root = tempRoot();
    const graph = validGraph();
    const edgeFact = 'Primary | alternate \\ path\r\n<script data-label="&copy;">literal</script>\n&amp; stays literal';
    const encodedEdgeFact = 'Primary &#124; alternate &#92; path<br>&lt;script data-label="&amp;copy;"&gt;literal&lt;/script&gt;<br>&amp;amp; stays literal';
    graph.typography_assets.roles[0].usage = edgeFact;
    graph.typography_assets.assets = [{
      id: 'brand | mark',
      kind: 'logo',
      source_status: 'project-owned',
      license_status: 'verified',
      source: edgeFact,
      notes: edgeFact,
    }];
    graph.content_locales.terminology = { [edgeFact]: edgeFact };
    graph.components_states.components[0].states = ['default', 'focus-visible', 'disabled', 'loading'];
    graph.components_states.components[0].interaction = {
      kind: 'interactive',
      state_applicability: {
        default: { applicability: 'applicable' },
        hover: { applicability: 'not-applicable', reason: edgeFact },
        'focus-visible': { applicability: 'applicable' },
        disabled: { applicability: 'applicable' },
        loading: { applicability: 'applicable' },
        error: { applicability: 'not-applicable', reason: 'The containing form owns validation errors.' },
        success: { applicability: 'not-applicable', reason: 'Completion navigates to the resulting record.' },
      },
    };
    graph.components_states.components.push({
      id: 'status-copy',
      anatomy: ['text'],
      states: ['default'],
      semantics: 'Communicates the current record status.',
      interaction: {
        kind: 'non-interactive',
        reason: 'This component communicates status and has no user action.',
      },
    });

    const preview = core.renderCore(graph);
    expect(preview.match(new RegExp(encodedEdgeFact.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'))).toHaveLength(6);
    expect(preview).not.toContain('<script');
    expect(preview).not.toContain('&copy;');
    expect(preview).not.toContain('\r');
    expect(preview).toContain('| brand &#124; mark | logo | project-owned | verified |');
    expect(preview).toContain('#### State applicability\n\n| State | Applicability | Reason |');
    expect(preview).toContain(`| hover | not-applicable | ${encodedEdgeFact} |`);
    expect(preview).toContain('- Interaction kind: non-interactive');
    expect(preview).toContain('- Interaction reason: This component communicates status and has no user action.');
    expect(core.inspectDesignMd(preview).sourceValidation).toEqual({ valid: true, errors: [] });

    const bundle = writeBundle(root, graph);
    const outDir = join(root, 'table-edge-adopted');
    const compiled = runCompile(bundle, outDir);
    expect(compiled.status, `${compiled.stderr}\n${compiled.stdout}`).toBe(0);
    const designMd = readFileSync(join(outDir, 'DESIGN.md'), 'utf8');
    const compiledGraph = JSON.parse(readFileSync(join(outDir, '.omd/system/graph.json'), 'utf8'));
    expect(designMd).toBe(preview);
    expect(compiledGraph.typography_assets.roles[0].usage).toBe(edgeFact);
    expect(compiledGraph.components_states.components[0].interaction.state_applicability.hover.reason).toBe(edgeFact);
    expect(core.renderCore(compiledGraph)).toBe(designMd);
    expect(core.semanticCoreDigest(core.renderCore(compiledGraph))).toBe(core.semanticCoreDigest(designMd));
  });

  it.each([
    ['en', ['Experience', 'Foundations', 'Typography & Assets', 'Components & States', 'Layout & Platforms', 'Content & Locales', 'Governance']],
    ['ko', ['경험', '기반', '타이포그래피와 에셋', '컴포넌트와 상태', '레이아웃과 플랫폼', '콘텐츠와 로케일', '거버넌스']],
    ['ja', ['エクスペリエンス', '基盤', 'タイポグラフィとアセット', 'コンポーネントと状態', 'レイアウトとプラットフォーム', 'コンテンツとロケール', 'ガバナンス']],
    ['zh-cn', ['体验', '基础', '字体与资产', '组件与状态', '布局与平台', '内容与本地化', '治理']],
    ['zh-tw', ['體驗', '基礎', '字型與資產', '元件與狀態', '版面與平台', '內容與在地化', '治理']],
  ] as const)('preserves the %s projection through review, compile, inspect, and semantic re-render', (locale, headings) => {
    const root = tempRoot();
    const graph = validGraph();
    const productName = 'Atlas 상품 Ω';
    graph.identity.name = productName;
    graph.projection.locale = locale;
    const bundle = writeBundle(root, graph);
    const reviewedDesignMd = readFileSync(join(dirname(bundle.graphPath), 'DESIGN.md'), 'utf8');
    const outDir = join(root, `adopted-${locale}`);

    const compiled = runCompile(bundle, outDir);

    expect(compiled.status, `${compiled.stderr}\n${compiled.stdout}`).toBe(0);
    const designMd = readFileSync(join(outDir, 'DESIGN.md'), 'utf8');
    const compiledGraph = JSON.parse(readFileSync(join(outDir, '.omd/system/graph.json'), 'utf8'));
    expect(reviewedDesignMd).toBe(designMd);
    expect(compiledGraph.projection).toEqual({
      path: 'DESIGN.md',
      sha256: sha256(designMd),
      locale,
    });
    expect(designMd).toContain(`# ${productName} Design System\n`);
    expect([...designMd.matchAll(/^## \d+\. (.+)$/gm)].map((match) => match[1])).toEqual(headings);
    expect(designMd.match(new RegExp(`^<!-- design-md:claim [^\\n]+ lang=${locale} -->$`, 'gm'))).toHaveLength(7);
    expect(designMd).toContain(GOVERNANCE_COPY[locale].authority['project-system']);
    expect(designMd).toContain(GOVERNANCE_COPY[locale].unknowns);
    expect(designMd).toContain(GOVERNANCE_COPY[locale].changes);
    for (const priority of GOVERNANCE_COPY[locale].priority) expect(designMd).toContain(priority);

    const inspection = core.inspectDesignMd(designMd);
    expect(inspection).toMatchObject({
      name: productName,
      projectionLocale: locale,
      sourceValidation: { valid: true, errors: [] },
      conformance: { portable_core: true, reasons: [] },
    });
    const reparsed = core.graphFromCoreProjection(designMd);
    expect(reparsed.identity.name).toBe(productName);
    expect(reparsed.projection.locale).toBe(locale);
    expect(core.semanticCoreDigest(core.renderCore(reparsed))).toBe(core.semanticCoreDigest(designMd));
  });

  it('publishes provenance and coverage in the exact Core shape consumed by project proof', () => {
    const root = tempRoot();
    const bundle = writeBundle(root);
    const outDir = join(root, 'adopted');
    expect(runCompile(bundle, outDir).status).toBe(0);
    const runDir = join(outDir, '.omd/runs/run-test');
    mkdirSync(join(runDir, 'system'), { recursive: true });
    writeFileSync(join(runDir, 'design-system-decision.json'), jsonBytes({
      strategy: 'establish',
      implementation_owner: 'main-agent',
      root_design_md_write_allowed: true,
      required_system_authority: 'core-v2-project-system',
    }));

    const proof = spawnSync(process.execPath, [projectValidator, outDir, runDir], { encoding: 'utf8' });

    const proofBytes = readFileSync(join(runDir, 'system/proof.json'), 'utf8');
    expect(proof.status, `${proof.stderr}\n${proof.stdout}\n${proofBytes}`).toBe(0);
    expect(JSON.parse(proofBytes)).toMatchObject({
      pass: true,
      authority_mode: 'core-v2-project-system',
      profile: 'portable-core',
    });
  });

  it.each([
    ['provenance', '--provenance <json> is required'],
    ['coverage', '--coverage <json> is required'],
    ['review', '--review-receipt <json> is required'],
  ] as const)('requires the %s adoption input and leaves no partial output', (omit, message) => {
    const root = tempRoot();
    const bundle = writeBundle(root);
    const outDir = join(root, `missing-${omit}`);
    const result = runCompile(bundle, outDir, { omit });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain(message);
    expect(existsSync(outDir)).toBe(false);
  });

  it('requires --adopt in addition to an owner review receipt', () => {
    const root = tempRoot();
    const bundle = writeBundle(root);
    const outDir = join(root, 'adopted');
    const result = runCompile(bundle, outDir, { adopt: false });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('--adopt is required');
    expect(existsSync(outDir)).toBe(false);
  });

  it('rejects an otherwise valid approval receipt when the prepared request chain is absent', () => {
    const root = tempRoot();
    const bundle = writeBundle(root);
    rmSync(join(dirname(bundle.graphPath), 'review-request.json'));
    const outDir = join(root, 'receipt-only-bypass');

    const result = runCompile(bundle, outDir);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('review request does not exist');
    expect(existsSync(outDir)).toBe(false);
  });

  it('rejects forged review hashes and a non-owner authority transition', () => {
    const root = tempRoot();
    const bundle = writeBundle(root, validGraph(), {
      mutateReview(review) {
        review.inputs.graph_sha256 = 'f'.repeat(64);
        review.reviewer.role = 'agent';
      },
    });
    const outDir = join(root, 'adopted');
    const result = runCompile(bundle, outDir);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/project-owner|input hashes/);
    expect(existsSync(outDir)).toBe(false);
  });

  it('rejects stale non-placeholder projection and sidecar hashes instead of silently rebinding authority claims', () => {
    const root = tempRoot();
    const graph = validGraph();
    graph.projection.sha256 = 'a'.repeat(64);
    let bundle = writeBundle(root, graph);
    let result = runCompile(bundle, join(root, 'graph-stale'));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('authority-neutral draft graph');

    const second = join(root, 'second');
    mkdirSync(second);
    const provenance = validProvenance();
    provenance.graph_sha256 = 'b'.repeat(64);
    bundle = writeBundle(second, validGraph(), { provenance });
    result = runCompile(bundle, join(root, 'provenance-stale'));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('compiler owns final bindings');
  });

  it('rejects invalid provenance and incomplete coverage before publishing', () => {
    const root = tempRoot();
    const provenance = validProvenance();
    provenance.decisions[0].value = 'Invented family';
    let bundle = writeBundle(root, validGraph(), { provenance });
    let result = runCompile(bundle, join(root, 'bad-provenance'));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('unresolved provenance must not carry a value');

    const second = join(root, 'second');
    mkdirSync(second);
    const coverage = validCoverage();
    delete coverage.checks.contrast;
    bundle = writeBundle(second, validGraph(), { coverage });
    result = runCompile(bundle, join(root, 'bad-coverage'));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('coverage check contrast');
  });

  it('schema-gates review and compiler-bound sidecars against extra keys and sentinel authority', () => {
    const root = tempRoot();
    const provenance = validProvenance();
    provenance.injected = true;
    let bundle = writeBundle(root, validGraph(), { provenance });
    let outDir = join(root, 'extra-provenance');
    let result = runCompile(bundle, outDir);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('provenance schema additionalProperties at /injected');
    expect(existsSync(outDir)).toBe(false);

    const second = join(root, 'second');
    mkdirSync(second);
    const coverage = validCoverage();
    coverage.injected = true;
    bundle = writeBundle(second, validGraph(), { coverage });
    outDir = join(root, 'extra-coverage');
    result = runCompile(bundle, outDir);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('coverage schema additionalProperties at /injected');
    expect(existsSync(outDir)).toBe(false);

    const third = join(root, 'third');
    mkdirSync(third);
    bundle = writeBundle(third, validGraph(), {
      mutateReview(review) {
        review.injected = true;
      },
    });
    outDir = join(root, 'extra-review');
    result = runCompile(bundle, outDir);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('adoption review schema additionalProperties at /injected');
    expect(existsSync(outDir)).toBe(false);

    const fourth = join(root, 'fourth');
    mkdirSync(fourth);
    bundle = writeBundle(fourth, validGraph(), {
      mutateReview(review) {
        review.reviewer.identifier = 'UNKNOWN';
      },
    });
    outDir = join(root, 'sentinel-reviewer');
    result = runCompile(bundle, outDir);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('/reviewer/identifier');
    expect(existsSync(outDir)).toBe(false);
  });

  it('rejects schema-invalid graphs and graphs that cannot declare Portable Core', () => {
    const root = tempRoot();
    const unresolved = validGraph();
    unresolved.foundations.tokens['color.action.primary'].$value = '[FILL IN]';
    let bundle = writeBundle(root, unresolved);
    let result = runCompile(bundle, join(root, 'schema-invalid'));
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/failed Core v2 validation|resolved/);

    const second = join(root, 'second');
    mkdirSync(second);
    const unusable = validGraph();
    delete unusable.experience.primary_tasks;
    bundle = writeBundle(second, unusable);
    result = runCompile(bundle, join(root, 'not-portable'));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('Portable Core declaration conformance failed');
    expect(result.stderr).toContain('missing-primary-task');
  });

  it('preserves the complete migration ledger while disabling only its exact-source observation key', () => {
    const root = tempRoot();
    const candidate = migrationCandidate();
    const originalExtension = JSON.parse(JSON.stringify(candidate.graph.extensions[core.MIGRATION_EXTENSION]));
    const bundle = writeBundle(root, candidate.graph, { migrationReport: candidate.report });
    const outDir = join(root, 'adopted');

    const result = runCompile(bundle, outDir);

    expect(result.status, result.stderr).toBe(0);
    const designMd = readFileSync(join(outDir, 'DESIGN.md'), 'utf8');
    const compiledGraph = JSON.parse(readFileSync(join(outDir, '.omd/system/graph.json'), 'utf8'));
    const compiledExtension = compiledGraph.extensions[core.MIGRATION_EXTENSION];
    const receipt = JSON.parse(readFileSync(join(outDir, '.omd/system/adoption-receipt.json'), 'utf8'));
    delete originalExtension.projection_observation_graph_sha256;
    expect(compiledExtension).toEqual(originalExtension);
    expect(compiledExtension.original_segments.map((segment: any) => segment.content).join('')).toBe(candidate.source);
    expect(compiledExtension).not.toHaveProperty('projection_observation_graph_sha256');
    expect(core.renderCore(compiledGraph)).toBe(designMd);
    expect(receipt.migration).toMatchObject({
      source_sha256: sha256(candidate.source),
      candidate_design_md_sha256: sha256(candidate.source),
      observation_fast_path_disabled: true,
      dropped_segments: 0,
      source_reconstruction_equal: true,
      unsupported_claims_reviewed: true,
      unsupported_claims_approved: true,
    });
  });

  it('requires an exact migration report and exact owner approval for a candidate', () => {
    const root = tempRoot();
    const candidate = migrationCandidate();
    let bundle = writeBundle(root, candidate.graph);
    let result = runCompile(bundle, join(root, 'missing-report'));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('--migration-report <json> is required');

    const second = join(root, 'second');
    mkdirSync(second);
    bundle = writeBundle(second, candidate.graph, {
      migrationReport(graphBytes) {
        const report = candidate.report(graphBytes);
        report.dropped_segments = 1;
        report.dropped = ['source-0'];
        return report;
      },
    });
    result = runCompile(bundle, join(root, 'lossy'));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('dropped=0');

    const third = join(root, 'third');
    mkdirSync(third);
    bundle = writeBundle(third, candidate.graph, {
      migrationReport: candidate.report,
      mutateReview(review) {
        review.migration_review.unsupported_claims_approved = false;
      },
    });
    result = runCompile(bundle, join(root, 'unreviewed'));
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('unsupported-claim review');
  });

  it.each(['graphPath', 'provenancePath', 'coveragePath', 'reviewPath'] as const)(
    'rejects a symlinked %s input before staging',
    (key) => {
      const root = tempRoot();
      const bundle = writeBundle(root);
      const original = bundle[key];
      const linked = join(root, `linked-${basename(original)}`);
      symlinkSync(original, linked, 'file');
      bundle[key] = linked;
      const outDir = join(root, 'adopted');
      const result = runCompile(bundle, outDir);
      expect(result.status).toBe(1);
      expect(result.stderr).toContain('regular, non-symlink JSON file');
      expect(existsSync(outDir)).toBe(false);
    },
  );

  it('rejects a symlinked migration report input before staging', () => {
    const root = tempRoot();
    const candidate = migrationCandidate();
    const bundle = writeBundle(root, candidate.graph, { migrationReport: candidate.report });
    const linked = join(root, 'linked-migration-report.json');
    symlinkSync(bundle.reportPath!, linked, 'file');
    bundle.reportPath = linked;
    const outDir = join(root, 'adopted');
    const result = runCompile(bundle, outDir);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('migration report must be a regular, non-symlink JSON file');
    expect(existsSync(outDir)).toBe(false);
  });

  it('fails closed for existing, symlinked, and input-aliased output paths', () => {
    const root = tempRoot();
    const bundle = writeBundle(root);
    const existing = join(root, 'existing');
    mkdirSync(existing);
    expect(runCompile(bundle, existing).status).toBe(1);

    const target = join(root, 'target');
    mkdirSync(target);
    const symlink = join(root, 'linked-output');
    symlinkSync(target, symlink, 'dir');
    const linked = runCompile(bundle, symlink);
    expect(linked.status).toBe(1);
    expect(linked.stderr).toContain('must not be a symlink');

    const sourceBefore = readFileSync(bundle.graphPath, 'utf8');
    const aliased = runCompile(bundle, bundle.graphPath);
    expect(aliased.status).toBe(1);
    expect(aliased.stderr).toContain('must not alias an input artifact');
    expect(readFileSync(bundle.graphPath, 'utf8')).toBe(sourceBefore);
    expect(readdirSync(dirname(bundle.graphPath)).filter((entry) => (
      entry.startsWith(`.${basename(bundle.graphPath)}.tmp-`)
    ))).toEqual([]);
  });

  it('documents every authority input and migration-only requirement in --help', () => {
    const result = spawnSync(process.execPath, [compiler, '--help'], { encoding: 'utf8' });
    expect(result.status).toBe(0);
    expect(result.stdout).toContain('--provenance <json>');
    expect(result.stdout).toContain('--coverage <json>');
    expect(result.stdout).toContain('--review-receipt <json>');
    expect(result.stdout).toContain('--migration-report <json>');
    expect(result.stdout).toContain('regular non-symlink');
    expect(result.stdout).toContain('six-artifact');
  });
});

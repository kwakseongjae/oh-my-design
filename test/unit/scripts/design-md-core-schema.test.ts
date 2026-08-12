import { describe, expect, it } from 'vitest';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(import.meta.url);
const validator = require(resolve(import.meta.dirname, '../../../scripts/design-md-core-schema.cjs'));

function richGraph(): any {
  return {
    $schema: 'https://oh-my-design.kr/schema/design-system-graph-v2.schema.json',
    schema_version: '2.0.0',
    identity: { name: 'Acme', kind: 'project-system', scope: 'Operations web surface' },
    projection: { path: 'DESIGN.md', sha256: 'a'.repeat(64), locale: 'zh-tw' },
    experience: {
      summary: 'Resolve time-sensitive records without losing context.',
      primary_tasks: ['Review a record'],
      design_direction: ['Calm and direct'],
      principles: ['Show consequence before commitment'],
      avoid: ['Decorative urgency'],
    },
    foundations: {
      tokens: {
        'color.action': { $type: 'color', $value: '#2457e6', $description: 'Action emphasis' },
      },
      rules: ['Reserve blue for action.'],
      contrast_pairs: [{ foreground: 'color.text', background: 'color.surface', minimum_ratio: 4.5 }],
      reduced_motion: true,
    },
    typography_assets: {
      roles: [{
        id: 'body', usage: 'Product reading text', family: 'Acme Sans', size: '16px',
        weight: '400', line_height: '1.5', tracking: '0em',
      }],
      assets: [{
        id: 'logo', kind: 'logo', source_status: 'official', license_status: 'verified',
        source: 'Project asset repository', notes: 'Use the primary lockup.',
      }],
      rules: ['Do not substitute unresolved assets.'],
    },
    components_states: {
      components: [{
        id: 'primary-action', anatomy: ['label'], variants: ['default'],
        states: ['focus-visible'], token_refs: ['color.action'],
        semantics: 'Commits the explicit action.',
      }],
      rules: ['Prevent duplicate submission while loading.'],
    },
    layout_platforms: {
      rules: ['Preserve reading order.'],
      platforms: [{ id: 'web', rules: ['Stack evidence before actions.'] }],
    },
    content_locales: {
      voice: ['Concise and specific'],
      terminology: { record: 'Record' },
      locales: [{ locale: 'en', status: 'supported', rules: ['Name the affected object.'] }],
    },
    governance: {
      priority: ['Direct scoped user instruction'],
      unknown_policy: 'absent-at-smallest-unresolved-boundary',
      change_policy: ['Update graph and projection atomically.'],
      decisions: [
        {
          path: 'foundations.tokens.color.action', source_class: 'repository-fact',
          value: '#2457e6', evidence: ['src/styles/tokens.css'],
        },
        { path: 'typography_assets.roles.body.family', source_class: 'unresolved', evidence: [] },
      ],
    },
  };
}

function interactiveStateContract(): any {
  return {
    kind: 'interactive',
    state_applicability: {
      default: { applicability: 'applicable' },
      hover: { applicability: 'not-applicable', reason: 'This surface has no pointer-only affordance.' },
      'focus-visible': { applicability: 'applicable' },
      disabled: { applicability: 'applicable' },
      loading: { applicability: 'applicable' },
      error: { applicability: 'not-applicable', reason: 'Validation errors belong to the containing form.' },
      success: { applicability: 'not-applicable', reason: 'Completion navigates to the resulting record.' },
    },
  };
}

describe('dependency-free Core v2 schema validator', () => {
  it('loads every final authority schema and rejects extra keys, sentinels, and missing bindings', () => {
    const sha = (character: string) => character.repeat(64);
    const groups = Object.fromEntries([
      'experience', 'foundations', 'typography-assets', 'components-states',
      'layout-platforms', 'content-locales', 'governance',
    ].map((id) => [id, { status: 'covered', evidence: [`DESIGN.md#${id}`] }]));
    const checks = Object.fromEntries([
      'portable_core_structure', 'bound_system_authority', 'token_reference_closure',
      'contrast', 'component_state_coverage', 'responsive_320_200', 'reduced_motion',
      'assets_fonts_licenses', 'implementation_contract_complete', 'unknown_absence',
      'opaque_extension_preservation',
    ].map((id) => [id, { pass: true, method: 'controller-computed-system-graph-v2' }]));
    const provenance = {
      schema_version: '2.0.0',
      design_md_sha256: sha('a'),
      graph_sha256: sha('b'),
      decisions: [{ path: '/missing/value', source_class: 'unresolved', evidence: [] }],
    };
    const coverage = {
      schema_version: '2.0.0',
      design_md_sha256: sha('a'),
      graph_sha256: sha('b'),
      groups,
      checks,
    };
    const review = {
      schema_version: '2.0.0',
      kind: 'design-md-core-adoption-review',
      decision: 'approved',
      authority_transition_approved: true,
      reviewer: { role: 'project-owner', identifier: 'owner@example.test' },
      inputs: {
        graph_sha256: sha('b'),
        provenance_sha256: sha('c'),
        coverage_sha256: sha('d'),
        review_request_sha256: sha('e'),
        normalized_candidate_graph_sha256: sha('b'),
        candidate_design_md_sha256: sha('a'),
      },
      review_request: { path: 'review-request.json', sha256: sha('e'), status_reviewed: 'review-required' },
      candidate: { normalized_graph_sha256: sha('b'), design_md_sha256: sha('a'), exact_preview_reviewed: true },
    };
    const receipt = {
      schema_version: '2.0.0',
      kind: 'design-md-core-adoption-receipt',
      status: 'adopted',
      authority: 'system-graph',
      review: {
        receipt_sha256: sha('e'),
        reviewer: { role: 'project-owner', identifier: 'owner@example.test' },
        authority_transition_approved: true,
      },
      inputs: {
        graph_sha256: sha('b'),
        provenance_sha256: sha('c'),
        coverage_sha256: sha('d'),
      },
      outputs: {
        design_md: { path: 'DESIGN.md', sha256: sha('a') },
        graph: { path: '.omd/system/graph.json', sha256: sha('b') },
        provenance: { path: '.omd/system/provenance.json', sha256: sha('c') },
        coverage: { path: '.omd/system/coverage.json', sha256: sha('d') },
        manifest: { path: '.omd/system/manifest.json', sha256: sha('f') },
      },
    };
    const checkpoint = {
      schema_version: '2.0.0',
      kind: 'design-md-core-project-adoption-checkpoint',
      request: {
        schema_version: '2.0.0',
        kind: 'design-md-core-project-adoption-checkpoint-request',
        status: 'approval-required',
        source_package_tree_sha256: sha('f'),
        source_package: {
          design_md_sha256: sha('a'), graph_sha256: sha('b'), provenance_sha256: sha('c'),
          coverage_sha256: sha('d'), manifest_sha256: sha('e'), adoption_receipt_sha256: sha('f'),
        },
      },
      attestation: {
        request_sha256: sha('f'),
        decision: 'approved',
        authority_transition_approved: true,
        authority: { role: 'project-owner', identifier: 'owner@example.test' },
      },
    };

    expect(validator.validateCoreProvenance(provenance)).toEqual([]);
    expect(validator.validateCoreCoverage(coverage)).toEqual([]);
    expect(validator.validateCoreAdoptionReview(review)).toEqual([]);
    expect(validator.validateCoreAdoptionReceipt(receipt)).toEqual([]);
    expect(validator.validateCoreProjectCheckpoint(checkpoint)).toEqual([]);

    expect(validator.validateCoreProvenance({ ...provenance, injected: true }))
      .toEqual(expect.arrayContaining([expect.objectContaining({ path: '/injected', keyword: 'additionalProperties' })]));
    expect(validator.validateCoreCoverage({ ...coverage, graph_sha256: undefined }))
      .toEqual(expect.arrayContaining([expect.objectContaining({ path: '/graph_sha256', keyword: 'type' })]));
    expect(validator.validateCoreAdoptionReview({
      ...review,
      reviewer: { role: 'project-owner', identifier: 'TBD' },
    })).toEqual(expect.arrayContaining([expect.objectContaining({ path: '/reviewer/identifier', keyword: 'not' })]));
    const missingCheckpointBinding = structuredClone(checkpoint);
    delete missingCheckpointBinding.request.source_package.coverage_sha256;
    expect(validator.validateCoreProjectCheckpoint(missingCheckpointBinding))
      .toEqual(expect.arrayContaining([expect.objectContaining({ path: '/request/source_package/coverage_sha256', keyword: 'required' })]));
    expect(validator.validateCoreAdoptionReceipt({ ...receipt, sentinel: 'UNKNOWN' }))
      .toEqual(expect.arrayContaining([expect.objectContaining({ path: '/sentinel', keyword: 'additionalProperties' })]));

    const impossibleMigrationReview = {
      ...review,
      migration_review: {
        source_sha256: sha('a'), candidate_graph_sha256: sha('b'), candidate_design_md_sha256: sha('c'),
        dropped_segments: 0, source_reconstruction_equal: true,
        unsupported_claims_reviewed: true, unsupported_claims_approved: true,
      },
    };
    expect(validator.validateCoreAdoptionReview(impossibleMigrationReview))
      .toEqual(expect.arrayContaining([expect.objectContaining({ keyword: 'not' })]));
  });

  it('enforces required, enum, type, and additionalProperties recursively', () => {
    const graph = {
      $schema: 'https://oh-my-design.kr/schema/design-system-graph-v2.schema.json',
      schema_version: '2.0.0',
      identity: { name: 'Acme', kind: 'project-system', scope: 'Web' },
      projection: { path: 'DESIGN.md', sha256: 'a'.repeat(64) },
      experience: {}, foundations: {}, typography_assets: {}, components_states: {},
      layout_platforms: {}, content_locales: {}, governance: {},
    };
    expect(validator.validateCoreGraph(graph)).toEqual([]);

    graph.projection.locale = 'zh-hk';
    expect(validator.validateCoreGraph(graph)).toEqual(expect.arrayContaining([
      expect.objectContaining({ path: '/projection/locale', keyword: 'enum' }),
    ]));
    delete graph.projection.locale;

    graph.identity.kind = 'vendor-only';
    graph.identity.generator = 'omd';
    graph.projection.sha256 = 42;
    delete graph.content_locales;
    const failures = validator.validateCoreGraph(graph);
    expect(failures).toEqual(expect.arrayContaining([
      expect.objectContaining({ path: '/identity/kind', keyword: 'enum' }),
      expect.objectContaining({ path: '/identity/generator', keyword: 'additionalProperties' }),
      expect.objectContaining({ path: '/projection/sha256', keyword: 'type' }),
      expect.objectContaining({ path: '/content_locales', keyword: 'required' }),
    ]));
  });

  it('keeps interaction optional for structural imports but requires typed closure for a coverage claim', () => {
    const structural = richGraph();
    expect(validator.validateCoreGraph(structural)).toEqual([]);
    expect(validator.validateCoreGraph(structural, { requireComponentStateCoverage: true }))
      .toEqual(expect.arrayContaining([
        expect.objectContaining({
          path: '/components_states/components/0/interaction',
          keyword: 'componentStateCoverage',
          message: 'interaction-model-missing:primary-action',
        }),
      ]));

    const closed = richGraph();
    closed.components_states.components[0].states = ['default', 'focus-visible', 'disabled', 'loading'];
    closed.components_states.components[0].interaction = interactiveStateContract();
    expect(validator.validateCoreGraph(closed, { requireComponentStateCoverage: true })).toEqual([]);
  });

  it('rejects incomplete, contradictory, and unexplained component-state applicability', () => {
    const missingApplicableState = richGraph();
    missingApplicableState.components_states.components[0].states = ['default', 'focus-visible', 'disabled'];
    missingApplicableState.components_states.components[0].interaction = interactiveStateContract();
    expect(validator.validateCoreGraph(missingApplicableState, { requireComponentStateCoverage: true }))
      .toEqual(expect.arrayContaining([
        expect.objectContaining({
          keyword: 'componentStateCoverage',
          message: 'applicable-state-missing:primary-action:loading',
        }),
      ]));

    const unexplained = richGraph();
    unexplained.components_states.components[0].states = ['default', 'focus-visible', 'disabled', 'loading'];
    unexplained.components_states.components[0].interaction = interactiveStateContract();
    delete unexplained.components_states.components[0].interaction.state_applicability.hover.reason;
    expect(validator.validateCoreGraph(unexplained, { requireComponentStateCoverage: true }))
      .toEqual(expect.arrayContaining([
        expect.objectContaining({
          path: '/components_states/components/0/interaction/state_applicability/hover/reason',
          keyword: 'componentStateCoverage',
          message: 'not-applicable-reason-missing:primary-action:hover',
        }),
      ]));

    const contradictory = richGraph();
    contradictory.components_states.components[0].states = ['default', 'hover', 'focus-visible', 'disabled', 'loading'];
    contradictory.components_states.components[0].interaction = interactiveStateContract();
    contradictory.components_states.components[0].interaction.state_applicability.default = {
      applicability: 'not-applicable', reason: 'No default state.',
    };
    expect(validator.validateCoreGraph(contradictory, { requireComponentStateCoverage: true }))
      .toEqual(expect.arrayContaining([
        expect.objectContaining({ message: 'not-applicable-state-declared:primary-action:hover' }),
        expect.objectContaining({ message: 'not-applicable-state-declared:primary-action:default' }),
        expect.objectContaining({ message: 'required-interactive-state-not-applicable:primary-action:default' }),
      ]));
  });

  it('enforces conditional unresolved-value absence and extension key shape', () => {
    const graph = {
      $schema: 'https://oh-my-design.kr/schema/design-system-graph-v2.schema.json',
      schema_version: '2.0.0',
      identity: { name: 'Acme', kind: 'project-system', scope: 'Web' },
      projection: { path: 'DESIGN.md', sha256: 'a'.repeat(64) },
      experience: {}, foundations: {}, typography_assets: {}, components_states: {},
      layout_platforms: {}, content_locales: {}, governance: {
        decisions: [{ path: '/typography_assets/roles/0/family', source_class: 'unresolved', evidence: [], value: 'Inter' }],
      },
      extensions: { invalid: true },
    };
    const failures = validator.validateCoreGraph(graph);
    expect(failures).toEqual(expect.arrayContaining([
      expect.objectContaining({ path: '/governance/decisions/0', keyword: 'not' }),
      expect.objectContaining({ path: '/extensions/invalid', keyword: 'pattern' }),
    ]));
  });

  it('rejects empty, placeholder, and recursively unresolved token values', () => {
    const base = {
      $schema: 'https://oh-my-design.kr/schema/design-system-graph-v2.schema.json',
      schema_version: '2.0.0',
      identity: { name: 'Acme', kind: 'project-system', scope: 'Web' },
      projection: { path: 'DESIGN.md', sha256: 'a'.repeat(64) },
      experience: {}, typography_assets: {}, components_states: {},
      layout_platforms: {}, content_locales: {}, governance: {},
    };
    for (const value of [null, '', 'TBD', 'UNKNOWN', [], {}, { color: null }]) {
      const graph = {
        ...base,
        foundations: { tokens: { 'color.action': { $type: 'color', $value: value } } },
      };
      expect(validator.validateCoreGraph(graph), JSON.stringify(value)).toEqual(expect.arrayContaining([
        expect.objectContaining({ keyword: 'resolvedTokenValue' }),
      ]));
    }

    const structured = {
      ...base,
      foundations: {
        tokens: {
          'shadow.focus': {
            $type: 'shadow',
            $value: { color: '#2457e680', offset: { x: '0px', y: '0px' }, blur: '0px' },
          },
        },
      },
    };
    expect(validator.validateCoreGraph(structured)).toEqual([]);
  });

  it('fails closed on blank and unresolved sentinels in every prescriptive semantic field', () => {
    expect(validator.validateCoreGraph(richGraph())).toEqual([]);
    const sentinels = [
      '', '   ', 'TBD', 'todo', '[UNKNOWN]', '[TODO add later]', 'UNRESOLVED — pending',
      'NOT_SPECIFIED', 'fill-in: later', 'TBD later', 'unknown pending',
      '미정', '미확정', '알 수 없음', '[미정: 사용자 확인 필요]',
      '未確定', '未定', '不明', '未知', '未确定', '未指定', '待定',
    ];
    const cases: Array<[string, string, (graph: ReturnType<typeof richGraph>, value: string) => void]> = [
      ['identity.name', '/identity/name', (graph, value) => { graph.identity.name = value; }],
      ['identity.scope', '/identity/scope', (graph, value) => { graph.identity.scope = value; }],
      ['experience.summary', '/experience/summary', (graph, value) => { graph.experience.summary = value; }],
      ['experience.primary_tasks', '/experience/primary_tasks/0', (graph, value) => { graph.experience.primary_tasks[0] = value; }],
      ['foundations.rules', '/foundations/rules/0', (graph, value) => { graph.foundations.rules[0] = value; }],
      ['token description', '/foundations/tokens/color.action/$description', (graph, value) => { graph.foundations.tokens['color.action'].$description = value; }],
      ['contrast foreground', '/foundations/contrast_pairs/0/foreground', (graph, value) => { graph.foundations.contrast_pairs[0].foreground = value; }],
      ['contrast background', '/foundations/contrast_pairs/0/background', (graph, value) => { graph.foundations.contrast_pairs[0].background = value; }],
      ['type usage', '/typography_assets/roles/0/usage', (graph, value) => { graph.typography_assets.roles[0].usage = value; }],
      ['type family', '/typography_assets/roles/0/family', (graph, value) => { graph.typography_assets.roles[0].family = value; }],
      ['type size', '/typography_assets/roles/0/size', (graph, value) => { graph.typography_assets.roles[0].size = value; }],
      ['type weight', '/typography_assets/roles/0/weight', (graph, value) => { graph.typography_assets.roles[0].weight = value; }],
      ['type line height', '/typography_assets/roles/0/line_height', (graph, value) => { graph.typography_assets.roles[0].line_height = value; }],
      ['type tracking', '/typography_assets/roles/0/tracking', (graph, value) => { graph.typography_assets.roles[0].tracking = value; }],
      ['asset source', '/typography_assets/assets/0/source', (graph, value) => { graph.typography_assets.assets[0].source = value; }],
      ['asset notes', '/typography_assets/assets/0/notes', (graph, value) => { graph.typography_assets.assets[0].notes = value; }],
      ['component anatomy', '/components_states/components/0/anatomy/0', (graph, value) => { graph.components_states.components[0].anatomy[0] = value; }],
      ['component variants', '/components_states/components/0/variants/0', (graph, value) => { graph.components_states.components[0].variants[0] = value; }],
      ['component states', '/components_states/components/0/states/0', (graph, value) => { graph.components_states.components[0].states[0] = value; }],
      ['component token refs', '/components_states/components/0/token_refs/0', (graph, value) => { graph.components_states.components[0].token_refs[0] = value; }],
      ['component semantics', '/components_states/components/0/semantics', (graph, value) => { graph.components_states.components[0].semantics = value; }],
      ['platform rules', '/layout_platforms/platforms/0/rules/0', (graph, value) => { graph.layout_platforms.platforms[0].rules[0] = value; }],
      ['voice', '/content_locales/voice/0', (graph, value) => { graph.content_locales.voice[0] = value; }],
      ['terminology value', '/content_locales/terminology/record', (graph, value) => { graph.content_locales.terminology.record = value; }],
      ['locale rule', '/content_locales/locales/0/rules/0', (graph, value) => { graph.content_locales.locales[0].rules[0] = value; }],
      ['governance priority', '/governance/priority/0', (graph, value) => { graph.governance.priority[0] = value; }],
      ['governance change policy', '/governance/change_policy/0', (graph, value) => { graph.governance.change_policy[0] = value; }],
      ['governance evidence', '/governance/decisions/0/evidence/0', (graph, value) => { graph.governance.decisions[0].evidence[0] = value; }],
      ['resolved decision value', '/governance/decisions/0/value', (graph, value) => { graph.governance.decisions[0].value = value; }],
    ];

    for (const [label, expectedPath, mutate] of cases) {
      for (const sentinel of sentinels) {
        const graph = richGraph();
        mutate(graph, sentinel);
        const failures = validator.validateCoreGraph(graph);
        expect(
          failures.some((failure: { path: string }) => failure.path.startsWith(expectedPath)),
          `${label} accepted ${JSON.stringify(sentinel)}: ${JSON.stringify(failures)}`,
        ).toBe(true);
      }
    }

    for (const sentinel of sentinels) {
      const graph = richGraph();
      graph.content_locales.terminology = { [sentinel]: 'Record' };
      expect(
        validator.validateCoreGraph(graph).some((failure: { path: string }) => failure.path.startsWith('/content_locales/terminology/')),
        `terminology key accepted ${JSON.stringify(sentinel)}`,
      ).toBe(true);
    }
  });

  it('rejects unresolved values nested inside structured decisions', () => {
    for (const value of [null, [], {}, { foreground: 'TODO' }, ['valid', { nested: '[UNRESOLVED]' }]]) {
      const graph = richGraph();
      graph.governance.decisions[0].value = value;
      expect(validator.validateCoreGraph(graph), JSON.stringify(value)).toEqual(expect.arrayContaining([
        expect.objectContaining({ path: '/governance/decisions/0/value' }),
      ]));
    }
  });

  it('does not treat identifiers, paths, enums, hashes, or opaque extensions as semantic copy', () => {
    const graph = richGraph();
    graph.foundations.tokens = { todo: { $type: 'UNKNOWN', $value: '#2457e6' } };
    graph.typography_assets.roles[0].id = '미정';
    graph.typography_assets.assets[0].id = '未確定';
    graph.typography_assets.assets[0].source_status = 'unresolved';
    graph.typography_assets.assets[0].license_status = 'unresolved';
    delete graph.typography_assets.assets[0].source;
    delete graph.typography_assets.assets[0].notes;
    graph.components_states.components[0].id = '待定';
    graph.governance.decisions[1].path = '/legacy/미정/TBD';
    graph.extensions = {
      'com.example.private': { source: '미정', notes: '未確定', nested: { value: 'unknown pending' } },
    };
    expect(validator.validateCoreGraph(graph)).toEqual([]);
  });

  it('allows unknown vocabulary inside legitimate policy prose while rejecting multilingual fact placeholders', () => {
    const graph = richGraph();
    graph.experience.summary = 'Unknown values remain absent until the owner provides evidence.';
    graph.typography_assets.rules = ['Do not substitute unresolved assets.'];
    graph.governance.change_policy = ['Review pending changes before adoption.'];
    expect(validator.validateCoreGraph(graph)).toEqual([]);

    for (const sentinel of ['미정', '未定', '不明', '未知', '未确定', '未指定', '待定', 'TBD later', 'unknown pending']) {
      const provenance = {
        schema_version: '2.0.0',
        design_md_sha256: 'a'.repeat(64),
        graph_sha256: 'b'.repeat(64),
        decisions: [{ path: `/legacy/${sentinel}`, source_class: 'repository-fact', value: sentinel, evidence: [`evidence/${sentinel}`] }],
      };
      expect(
        validator.validateCoreProvenance(provenance).some((failure: { path: string }) => failure.path === '/decisions/0/value'),
        `provenance accepted ${JSON.stringify(sentinel)}`,
      ).toBe(true);

      provenance.decisions[0].value = '#2457e6';
      expect(validator.validateCoreProvenance(provenance), `path/evidence rejected ${JSON.stringify(sentinel)}`).toEqual([]);
    }
  });
});

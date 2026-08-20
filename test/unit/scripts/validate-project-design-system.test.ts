import { afterEach, describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const helper = resolve(import.meta.dirname, '../../../scripts/validate-project-design-system.cjs');
const roots: string[] = [];
const groups = [
  'product-scope', 'color-contrast', 'typography', 'spacing-density-layout', 'responsive',
  'component-states', 'motion-reduced-motion', 'voice-locale', 'assets-fonts-licenses',
  'provenance-unresolved',
];
const checks = [
  'token_reference_closure', 'contrast', 'component_state_coverage', 'responsive_320_200',
  'reduced_motion', 'assets_fonts_licenses', 'implementation_contract_complete', 'unknown_absence',
  'sections_11_13_honesty',
];
const coreSections = [
  ['experience', '1. Experience'],
  ['foundations', '2. Foundations'],
  ['typography-assets', '3. Typography & Assets'],
  ['components-states', '4. Components & States'],
  ['layout-platforms', '5. Layout & Platforms'],
  ['content-locales', '6. Content & Locales'],
  ['governance', '7. Governance'],
];
const coreChecks = [
  'portable_core_structure', 'bound_system_authority', 'token_reference_closure', 'contrast',
  'component_state_coverage', 'responsive_320_200', 'reduced_motion', 'assets_fonts_licenses',
  'implementation_contract_complete', 'unknown_absence', 'opaque_extension_preservation',
];

function stableJson(value: any): any {
  if (Array.isArray(value)) return value.map(stableJson);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stableJson(value[key])]));
}

function sha256Bytes(value: string | Buffer) {
  return createHash('sha256').update(value).digest('hex');
}

function stableJsonSha(value: any) {
  return sha256Bytes(`${JSON.stringify(stableJson(value), null, 2)}\n`);
}

function fixture(mutate?: (artifacts: { provenance: any; coverage: any; spec: any; designPath: string }) => void) {
  const root = mkdtempSync(join(tmpdir(), 'omd-system-proof-'));
  roots.push(root);
  const run = join(root, '.omd/runs/run-test');
  mkdirSync(join(run, 'system'), { recursive: true });
  const design = `# Project DESIGN.md

## 1. Product scope
Project-specific proposal.

## 2. Color contrast
text #111111 on surface #ffffff.

## 3. Typography
Typography proposal.

## 4. Spacing density layout
Layout proposal.

## 5. Responsive
Responsive proposal.

## 6. Component states
State proposal.

## 7. Motion reduced motion
Motion proposal.

## 8. Voice locale
Voice proposal.

## 9. Assets fonts licenses
No external assets.

## 10. Provenance unresolved
Unknown means absent.

## 11. Brand narrative
[FILL IN]

## 12. Principles
[FILL IN]

## 13. Personas
[FILL IN]
`;
  const designPath = join(root, 'DESIGN.md');
  writeFileSync(designPath, design);
  writeFileSync(join(run, 'task.md'), '# Task\n\nCreate a project-specific design system.\n');
  const sha = createHash('sha256').update(design).digest('hex');
  writeFileSync(join(run, 'design-system-decision.json'), `${JSON.stringify({
    strategy: 'establish', implementation_owner: 'main-agent', root_design_md_write_allowed: true,
    compatibility_epoch: 'legacy-direct-validator-fixture-v0.1',
  })}\n`);
  const provenance = {
    schema_version: '0.1', design_md_sha256: sha,
    decisions: [{ path: 'tokens.color.action', source_class: 'agent-proposed-greenfield-decision', value: '#2457e6', evidence: ['task.md'] }],
  };
  const coverage = {
    schema_version: '0.1', design_md_sha256: sha,
    groups: Object.fromEntries(groups.map((id, index) => [id, { status: 'covered', evidence: [`DESIGN.md#${index + 1}-${id}`] }])),
    checks: Object.fromEntries(checks.map((id) => [id, { pass: true, method: 'controller-computed-system-spec-v1' }])),
  };
  const spec = {
    schema_version: '0.1', design_md_sha256: sha,
    tokens: {
      colors: { text: '#111111', surface: '#ffffff' },
      color_pairs: [{ foreground: 'text', background: 'surface', min_ratio: 4.5 }],
      typography: { body: 'Body role', heading: 'Heading role' },
      spacing: { 'space-1': '4px', 'space-2': '8px', 'space-3': '16px' },
    },
    components: [{
      id: 'primary-action', interactive: true,
      states: ['default', 'hover', 'focus-visible', 'disabled', 'loading', 'error', 'success'],
      token_refs: ['colors.text', 'colors.surface', 'spacing.space-2'],
    }],
    responsive: { minimum_width_px: 320, reflow_zoom_percent: 200, rules: ['Preserve task order.'] },
    motion: { reduced_motion: true },
    assets: [{ id: 'none', source_status: 'none', license_status: 'not-required' }],
    voice_locale: { locales: ['en'] }, unresolved: [],
  };
  mutate?.({ provenance, coverage, spec, designPath });
  writeFileSync(join(run, 'system/provenance.json'), `${JSON.stringify(provenance)}\n`);
  writeFileSync(join(run, 'system/coverage.json'), `${JSON.stringify(coverage)}\n`);
  writeFileSync(join(run, 'system/spec.json'), `${JSON.stringify(spec)}\n`);
  const result = spawnSync(process.execPath, [helper, root, run], { encoding: 'utf8' });
  return { run, result };
}

function coreFixture(mutate?: (artifacts: { design: { value: string }; manifest: any; graph: any; provenance: any; coverage: any }) => void) {
  const root = mkdtempSync(join(tmpdir(), 'omd-core-system-proof-'));
  roots.push(root);
  const run = join(root, '.omd/runs/run-test');
  const system = join(root, '.omd/system');
  mkdirSync(join(run, 'system'), { recursive: true });
  mkdirSync(system, { recursive: true });
  const graph = {
    $schema: 'https://oh-my-design.kr/schema/design-system-graph-v2.schema.json',
    schema_version: '2.0.0',
    identity: { name: 'Acme', kind: 'project-system', scope: 'Primary web product surface.' },
    projection: { path: 'DESIGN.md', sha256: '' },
    experience: {
      summary: 'Acme lets an operator review the current record and complete its primary action.', primary_tasks: ['Complete the primary task'],
      design_direction: ['Direct and calm'], principles: ['Make state visible'], avoid: ['Unsupported facts'],
    },
    foundations: {
      tokens: {
        'color.text': { $type: 'color', $value: '#111111' },
        'color.surface': { $type: 'color', $value: '#ffffff' },
      },
      rules: ['Use semantic roles.'],
      contrast_pairs: [{ foreground: 'color.text', background: 'color.surface', minimum_ratio: 4.5 }],
      reduced_motion: true,
    },
    typography_assets: {
      roles: [{ id: 'body', usage: 'Product body copy', size: '16px', line_height: 1.5 }],
      assets: [], rules: ['Unknown fonts and assets remain absent.'],
    },
    components_states: {
      components: [{
        id: 'primary-action', anatomy: ['label'], states: ['default', 'focus-visible', 'disabled'],
        token_refs: ['color.text', 'color.surface'], semantics: 'Starts the primary task.',
        interaction: {
          kind: 'interactive',
          state_applicability: {
            default: { applicability: 'applicable' },
            hover: { applicability: 'not-applicable', reason: 'The control does not depend on pointer hover.' },
            'focus-visible': { applicability: 'applicable' },
            disabled: { applicability: 'applicable' },
            loading: { applicability: 'not-applicable', reason: 'This action completes without an asynchronous wait.' },
            error: { applicability: 'not-applicable', reason: 'Errors are presented by the containing task form.' },
            success: { applicability: 'not-applicable', reason: 'Completion navigates to the resulting record.' },
          },
        },
      }],
      rules: ['Declare only applicable states.'],
    },
    layout_platforms: {
      minimum_width_px: 320, reflow_zoom_percent: 200, rules: ['Preserve task order.'],
      platforms: [{ id: 'web', rules: ['Use semantic HTML.'] }],
    },
    content_locales: {
      voice: ['Direct and actionable'], terminology: { action: 'Continue' },
      locales: [{ locale: 'en', status: 'supported', rules: ['Use concise labels.'] }],
    },
    governance: {
      priority: ['User instruction', 'Project system'],
      unknown_policy: 'absent-at-smallest-unresolved-boundary',
      change_policy: ['Update graph before projection.'],
      decisions: [{ path: 'identity.name', source_class: 'prompt-fact', value: 'Acme', evidence: ['task.md'] }],
    },
  };
  const coreEngine = require('../../../scripts/design-md-core.cjs');
  let design = { value: coreEngine.renderCore(graph) };
  writeFileSync(join(run, 'task.md'), '# Task\n\nCreate Acme as an accessible project system.\n');
  writeFileSync(join(run, 'design-system-decision.json'), `${JSON.stringify({
    strategy: 'establish', implementation_owner: 'main-agent', root_design_md_write_allowed: true,
    required_system_authority: 'core-v2-project-system',
  })}\n`);
  const provenance = {
    schema_version: '2.0.0', design_md_sha256: '', graph_sha256: '',
    decisions: [{ path: 'identity.name', source_class: 'prompt-fact', value: 'Acme', evidence: ['task.md'] }],
  };
  const coverage = {
    schema_version: '2.0.0', design_md_sha256: '', graph_sha256: '',
    groups: Object.fromEntries(coreSections.map(([id]) => [id, { status: 'covered', evidence: [`DESIGN.md#${id}`] }])),
    checks: Object.fromEntries(coreChecks.map((id) => [id, { pass: true, method: 'controller-computed-system-graph-v2' }])),
  };
  const manifest = {
    $schema: 'https://oh-my-design.kr/schema/design-md-core-manifest-v2.schema.json',
    schema_version: '2.0.0', format: 'design-md-core', format_version: '2.0.0', profile: 'portable-core',
    section_order: coreSections.map(([id]) => id),
    authority: { canonical: 'system-graph', graph_path: '.omd/system/graph.json', projection_path: 'DESIGN.md' },
    artifacts: {},
  };
  mutate?.({ design, manifest, graph, provenance, coverage });
  // Tests that mutate graph authority must recompile the projection through
  // the same canonical renderer before binding hashes. Tests that explicitly
  // mutate `design.value` retain those adversarial bytes.
  const initialDesign = coreEngine.renderCore({ ...graph, projection: { ...graph.projection, sha256: '' } });
  if (design.value === initialDesign) design = { value: coreEngine.renderCore(graph) };
  writeFileSync(join(root, 'DESIGN.md'), design.value);
  const designSha = createHash('sha256').update(design.value).digest('hex');
  graph.projection.sha256 = designSha;
  writeFileSync(join(system, 'graph.json'), `${JSON.stringify(graph)}\n`);
  const graphSha = createHash('sha256').update(readFileSync(join(system, 'graph.json'))).digest('hex');
  provenance.design_md_sha256 = designSha;
  provenance.graph_sha256 = graphSha;
  coverage.design_md_sha256 = designSha;
  coverage.graph_sha256 = graphSha;
  writeFileSync(join(system, 'provenance.json'), `${JSON.stringify(provenance)}\n`);
  writeFileSync(join(system, 'coverage.json'), `${JSON.stringify(coverage)}\n`);
  manifest.artifacts = {
    design_md: { path: 'DESIGN.md', sha256: designSha },
    graph: { path: '.omd/system/graph.json', sha256: graphSha },
    provenance: { path: '.omd/system/provenance.json', sha256: createHash('sha256').update(readFileSync(join(system, 'provenance.json'))).digest('hex') },
    coverage: { path: '.omd/system/coverage.json', sha256: createHash('sha256').update(readFileSync(join(system, 'coverage.json'))).digest('hex') },
  };
  writeFileSync(join(system, 'manifest.json'), `${JSON.stringify(manifest)}\n`);
  const receipt = {
    schema_version: '2.0.0',
    kind: 'design-md-core-adoption-receipt',
    status: 'adopted',
    authority: 'system-graph',
    review: {
      receipt_sha256: 'a'.repeat(64),
      reviewer: { role: 'project-owner', identifier: 'owner@example.test' },
      authority_transition_approved: true,
    },
    inputs: {
      graph_sha256: 'b'.repeat(64),
      provenance_sha256: 'c'.repeat(64),
      coverage_sha256: 'd'.repeat(64),
    },
    outputs: {
      design_md: { path: 'DESIGN.md', sha256: designSha },
      graph: { path: '.omd/system/graph.json', sha256: graphSha },
      provenance: { path: '.omd/system/provenance.json', sha256: sha256Bytes(readFileSync(join(system, 'provenance.json'))) },
      coverage: { path: '.omd/system/coverage.json', sha256: sha256Bytes(readFileSync(join(system, 'coverage.json'))) },
      manifest: { path: '.omd/system/manifest.json', sha256: sha256Bytes(readFileSync(join(system, 'manifest.json'))) },
    },
  } as any;
  const migration = graph.extensions?.['dev.oh-my-design.migration'];
  if (migration) {
    receipt.inputs.migration_report_sha256 = 'e'.repeat(64);
    receipt.migration = {
      source_sha256: migration.source_sha256,
      candidate_graph_sha256: receipt.inputs.graph_sha256,
      candidate_design_md_sha256: designSha,
      preserved_extension_sha256: stableJsonSha(migration),
      observation_fast_path_disabled: true,
      dropped_segments: 0,
      source_reconstruction_equal: true,
      unsupported_claims_reviewed: true,
      unsupported_claims_approved: true,
    };
  }
  writeFileSync(join(system, 'adoption-receipt.json'), `${JSON.stringify(receipt)}\n`);
  const result = spawnSync(process.execPath, [helper, root, run], { encoding: 'utf8' });
  return { root, run, system, result };
}

function rerunCore(root: string, run: string) {
  rmSync(join(run, 'system/proof.json'), { force: true });
  return spawnSync(process.execPath, [helper, root, run], { encoding: 'utf8' });
}

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('validate-project-design-system', () => {
  it('passes a clean-top, stable-order Core v2 system and reports canonical authority', () => {
    const { root, run, result } = coreFixture();
    expect(result.status, `${result.stderr}\n${readFileSync(join(run, 'system/proof.json'), 'utf8')}`).toBe(0);
    expect(readFileSync(join(root, 'DESIGN.md'), 'utf8')).toMatch(/^# Acme Design System\n/);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof).toMatchObject({
      pass: true, authority_mode: 'core-v2-project-system', format: 'design-md-core',
      format_version: '2.0.0', profile: 'portable-core', core_section_ids: coreSections.map(([id]) => id),
      system_authority: {
        manifest_path: '.omd/system/manifest.json', graph_path: '.omd/system/graph.json',
        projection_path: 'DESIGN.md', provenance_path: '.omd/system/provenance.json',
        coverage_path: '.omd/system/coverage.json', adoption_receipt_path: '.omd/system/adoption-receipt.json',
      },
    });
    expect(proof.manifest_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(proof.graph_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(proof.adoption_receipt_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(proof.spec_sha256).toBeNull();
  });

  it('refuses a claimed component-state pass without typed applicability closure', () => {
    const missing = coreFixture(({ graph }) => {
      delete graph.components_states.components[0].interaction;
    });
    expect(missing.result.status).not.toBe(0);
    let proof = JSON.parse(readFileSync(join(missing.run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.component_state_coverage.observations)
      .toContain('interaction-model-missing:primary-action');

    const contradictory = coreFixture(({ graph }) => {
      const contract = graph.components_states.components[0].interaction.state_applicability;
      contract.success = { applicability: 'applicable' };
      delete contract.hover.reason;
    });
    expect(contradictory.result.status).not.toBe(0);
    proof = JSON.parse(readFileSync(join(contradictory.run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.component_state_coverage.observations).toEqual(expect.arrayContaining([
      'applicable-state-missing:primary-action:success',
      'not-applicable-reason-missing:primary-action:hover',
    ]));
    expect(proof.computed_checks.bound_system_authority.observations).toContain(
      'graph-schema:/components_states/components/0/interaction/state_applicability/hover/reason:required',
    );
  });

  it('allows non-interactive status variants without inventing focusability', () => {
    const fixture = coreFixture(({ graph, design }) => {
      graph.components_states.components.push({
        id: 'status-message',
        anatomy: ['status title', 'detail'],
        states: ['default', 'error', 'success'],
        token_refs: ['color.text', 'color.surface'],
        semantics: 'Announced task feedback; it is not a control.',
        interaction: { kind: 'non-interactive', reason: 'The status is announced feedback and cannot receive input.' },
      });
      design.value = require('../../../scripts/design-md-core.cjs').renderCore(graph);
    });
    const proof = JSON.parse(readFileSync(join(fixture.run, 'system/proof.json'), 'utf8'));
    expect(fixture.result.status, `${fixture.result.stderr}\n${JSON.stringify(proof, null, 2)}`).toBe(0);
    expect(proof.computed_checks.component_state_coverage).toMatchObject({ pass: true, observations: [] });
  });

  it('fails Core authority when the adoption receipt is deleted or replaced by a symlink', () => {
    const missing = coreFixture();
    rmSync(join(missing.system, 'adoption-receipt.json'));
    let retried = rerunCore(missing.root, missing.run);
    expect(retried.status).not.toBe(0);
    let proof = JSON.parse(readFileSync(join(missing.run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.bound_system_authority.observations)
      .toContain('adoption-receipt-missing');
    expect(proof.findings).toContainEqual({
      code: 'adoption-receipt-invalid', detail: 'adoption-receipt-missing',
    });

    const linked = coreFixture();
    const receiptPath = join(linked.system, 'adoption-receipt.json');
    const targetPath = join(linked.system, 'receipt-target.json');
    writeFileSync(targetPath, readFileSync(receiptPath));
    rmSync(receiptPath);
    symlinkSync(targetPath, receiptPath);
    retried = rerunCore(linked.root, linked.run);
    expect(retried.status).not.toBe(0);
    proof = JSON.parse(readFileSync(join(linked.run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.bound_system_authority.observations)
      .toContain('adoption-receipt-not-regular-file');
    expect(proof.adoption_receipt_sha256).toBeNull();
  });

  it('rejects stale output bindings and an unidentified or unapproved owner review', () => {
    const { root, run, system } = coreFixture();
    const receiptPath = join(system, 'adoption-receipt.json');
    const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
    receipt.outputs.design_md.sha256 = '0'.repeat(64);
    receipt.kind = 'unreviewed-package';
    receipt.review.reviewer.identifier = '   ';
    receipt.review.authority_transition_approved = false;
    writeFileSync(receiptPath, `${JSON.stringify(receipt)}\n`);
    const retried = rerunCore(root, run);
    expect(retried.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.bound_system_authority.observations).toEqual(expect.arrayContaining([
      'adoption-receipt-identity-invalid',
      'adoption-receipt-owner-review-invalid',
      'adoption-receipt-output-binding-invalid:design_md',
    ]));
    expect(proof.next_state).toBe('SYSTEM_REPAIR');
  });

  it('binds a reviewed migration receipt to the preserved lossless ledger', () => {
    const source = 'legacy source bytes\n';
    const valid = coreFixture(({ graph }) => {
      graph.extensions = {
        'dev.oh-my-design.migration': {
          source_sha256: sha256Bytes(source),
          original_segments: [{ id: 'source-0', content: source, sha256: sha256Bytes(source) }],
          preservation: {
            dropped_segments: 0,
            opaque_preserved: true,
            projection_roundtrip_equal: true,
            source_reconstruction_equal: true,
          },
        },
      };
    });
    expect(valid.result.status, valid.result.stderr).toBe(0);

    const receiptPath = join(valid.system, 'adoption-receipt.json');
    const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
    receipt.migration.preserved_extension_sha256 = '0'.repeat(64);
    receipt.migration.dropped_segments = 1;
    receipt.migration.unsupported_claims_reviewed = false;
    writeFileSync(receiptPath, `${JSON.stringify(receipt)}\n`);
    const retried = rerunCore(valid.root, valid.run);
    expect(retried.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(valid.run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.bound_system_authority.observations)
      .toContain('adoption-receipt-migration-binding-invalid');
  });

  it('rejects a migration ledger that retains the exact-source observation fast path', () => {
    const source = 'legacy source bytes\n';
    const { run, result } = coreFixture(({ graph }) => {
      graph.extensions = {
        'dev.oh-my-design.migration': {
          source_sha256: sha256Bytes(source),
          original_segments: [{ id: 'source-0', content: source, sha256: sha256Bytes(source) }],
          preservation: {
            dropped_segments: 0,
            opaque_preserved: true,
            projection_roundtrip_equal: true,
            source_reconstruction_equal: true,
          },
          projection_observation_graph_sha256: 'f'.repeat(64),
        },
      };
    });
    expect(result.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.bound_system_authority.observations)
      .toContain('migration-observation-fast-path-present');
  });

  it('rejects Core v2 frontmatter and unstable section ordering', () => {
    const { run, result } = coreFixture(({ design }) => {
      design.value = `---\nomd: 2.0\n---\n${design.value}`
        .replace('<!-- design-md:section experience -->\n## 1. Experience', '<!-- core-swap -->')
        .replace('<!-- design-md:section foundations -->\n## 2. Foundations', '<!-- design-md:section experience -->\n## 1. Experience')
        .replace('<!-- core-swap -->', '<!-- design-md:section foundations -->\n## 2. Foundations');
    });
    expect(result.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.portable_core_structure.pass).toBe(false);
    expect(proof.findings.some((item: any) => item.code === 'core-projection-invalid')).toBe(true);
  });

  it('rejects a hash-bound structural Core that is not useful as standalone context', () => {
    const { run, result } = coreFixture(({ design }) => {
      design.value = design.value.replace(
        /<!-- design-md:section experience -->[\s\S]*?(?=<!-- design-md:section foundations -->)/,
        '<!-- design-md:section experience -->\n## 1. Experience\n\nCalm and modern.\n\n',
      );
    });
    expect(result.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.portable_core_structure.pass).toBe(false);
    expect(proof.computed_checks.portable_core_structure.observations).toEqual(expect.arrayContaining([
      'portable-core:missing-product-surface-scope',
      'portable-core:missing-primary-task',
    ]));
  });

  it('rejects graph-to-Markdown semantic drift even when manifest hashes are refreshed', () => {
    const { run, result } = coreFixture(({ design }) => {
      design.value = design.value.replace('Use semantic roles.', 'Use decorative roles everywhere.');
    });
    expect(result.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.bound_system_authority.pass).toBe(false);
    expect(proof.computed_checks.bound_system_authority.observations)
      .toContain('graph-projection-semantic-mismatch');
  });

  it('rejects a refactor whose opaque migration bytes no longer match their ledger', () => {
    const { run, result } = coreFixture(({ graph }) => {
      graph.extensions = {
        'dev.oh-my-design.migration': {
          source_sha256: createHash('sha256').update('original legacy bytes').digest('hex'),
          original_segments: [{
            id: 'source-001', content: 'tampered legacy bytes',
            sha256: createHash('sha256').update('original legacy bytes').digest('hex'),
          }],
          preservation: { dropped_segments: 0, opaque_preserved: true, roundtrip_equal: true },
        },
      };
    });
    expect(result.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.opaque_extension_preservation.pass).toBe(false);
    expect(proof.computed_checks.opaque_extension_preservation.observations)
      .toContain('migration-segment-invalid:source-001');
  });

  it('rejects schema-closure mutations before semantic proof can pass', () => {
    const { run, result } = coreFixture(({ graph, manifest }) => {
      graph.identity.generator = 'vendor-tool';
      graph.layout_platforms.minimum_width_px = '320';
      manifest.authority.fallback_path = 'legacy.json';
    });
    expect(result.status).not.toBe(0);
    const observations = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'))
      .computed_checks.bound_system_authority.observations;
    expect(observations).toEqual(expect.arrayContaining([
      'graph-schema:/identity/generator:additionalProperties',
      'graph-schema:/layout_platforms/minimum_width_px:type',
      'manifest-schema:/authority/fallback_path:additionalProperties',
    ]));
  });

  it('fails final project proof on exact sidecar and compiler-receipt schema drift', () => {
    const sidecars = coreFixture(({ provenance, coverage }) => {
      provenance.injected = true;
      coverage.groups.experience.injected = 'UNKNOWN';
    });
    expect(sidecars.result.status).not.toBe(0);
    let proof = JSON.parse(readFileSync(join(sidecars.run, 'system/proof.json'), 'utf8'));
    expect(proof.findings).toEqual(expect.arrayContaining([
      { code: 'provenance-schema-invalid', detail: '/injected:additionalProperties' },
      { code: 'coverage-schema-invalid', detail: '/groups/experience/injected:additionalProperties' },
    ]));

    const receiptCase = coreFixture();
    const receiptPath = join(receiptCase.system, 'adoption-receipt.json');
    const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
    receipt.injected = true;
    writeFileSync(receiptPath, `${JSON.stringify(receipt)}\n`);
    expect(rerunCore(receiptCase.root, receiptCase.run).status).not.toBe(0);
    proof = JSON.parse(readFileSync(join(receiptCase.run, 'system/proof.json'), 'utf8'));
    expect(proof.findings).toContainEqual({
      code: 'adoption-receipt-invalid',
      detail: 'adoption-receipt-schema:/injected:additionalProperties',
    });
  });

  it('normalizes decision paths, rejects duplicates, and forbids unresolved consumption', () => {
    const { run, result } = coreFixture(({ graph, provenance }) => {
      graph.governance.decisions.push(
        { path: '/identity/name', source_class: 'prompt-fact', value: 'Acme', evidence: ['task.md'] },
        { path: '/foundations/tokens/color.action', source_class: 'unresolved', evidence: [] },
      );
      graph.components_states.components[0].token_refs.push('color.action');
      provenance.decisions.push({ path: '/identity/name', source_class: 'prompt-fact', value: 'Acme', evidence: ['task.md'] });
    });
    expect(result.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.unknown_absence.observations).toEqual(expect.arrayContaining([
      'governance-decision-path-duplicate:/identity/name',
      'unresolved-path-consumed:/foundations/tokens/color.action:/foundations/tokens/color.action',
    ]));
    expect(proof.computed_checks.token_reference_closure.observations).toEqual(expect.arrayContaining([
      'unresolved-authority-consumed:/foundations/tokens/color.action:/foundations/tokens/color.action',
    ]));
    expect(proof.findings).toContainEqual({ code: 'provenance-normalized-path-duplicate', detail: '/identity/name' });
  });

  it('rejects an unresolved decision when the graph already carries that value', () => {
    const { run, result } = coreFixture(({ graph }) => {
      graph.governance.decisions[0] = {
        path: '/identity/name', source_class: 'unresolved', evidence: [],
      };
    });
    expect(result.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.unknown_absence.observations)
      .toContain('unresolved-path-coexists-with-value:/identity/name');
  });

  it('passes a hash-bound, provenance-complete project system', () => {
    const { run, result } = fixture();
    expect(result.status, result.stderr).toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof).toMatchObject({
      status: 'passed', pass: true, strategy: 'establish',
      implementation_owner: 'main-agent', authority_mode: 'legacy-run-scoped-v0.1',
      findings: [], next_state: 'PRODUCT_BUILD',
    });
    expect(proof).not.toHaveProperty('adoption_receipt_sha256');
    expect(proof.system_authority).not.toHaveProperty('adoption_receipt_path');
  });

  it('keeps direct legacy validation only behind the explicit fixture epoch', () => {
    const { run, result } = fixture(({ provenance }) => {
      provenance.decisions[0].path = 'tokens.color.action';
    });
    expect(result.status).toBe(0);
    const decisionPath = join(run, 'design-system-decision.json');
    const decision = JSON.parse(readFileSync(decisionPath, 'utf8'));
    delete decision.compatibility_epoch;
    writeFileSync(decisionPath, JSON.stringify(decision));
    rmSync(join(run, 'system/proof.json'));
    const retried = spawnSync(process.execPath, [helper, run.replace('/.omd/runs/run-test', ''), run], { encoding: 'utf8' });
    expect(retried.status).not.toBe(0);
    expect(JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8')).findings)
      .toContainEqual({
        code: 'legacy-validator-compatibility-epoch-missing',
        detail: 'legacy-direct-validator-fixture-v0.1',
      });
  });

  it('fails on unsupported provenance and a promoted unresolved value', () => {
    const { run, result } = fixture(({ provenance }) => {
      provenance.decisions[0].source_class = 'brand-fact';
      provenance.decisions.push({ path: 'personas.primary', source_class: 'unresolved', value: 'Busy parent', evidence: [] });
    });
    expect(result.status).not.toBe(0);
    const codes = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8')).findings.map((item: any) => item.code);
    expect(codes).toContain('provenance-source-class-invalid');
    expect(codes).toContain('unresolved-value-promoted');
  });

  it('fails when contrast or responsive proof is absent', () => {
    const { run, result } = fixture(({ spec, coverage }) => {
      spec.tokens.colors.text = '#777777';
      coverage.checks.contrast.pass = false;
      delete coverage.groups.responsive;
    });
    expect(result.status).not.toBe(0);
    const findings = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8')).findings;
    expect(findings).toContainEqual({ code: 'system-check-failed', detail: 'contrast' });
    expect(findings).toContainEqual({ code: 'coverage-group-invalid', detail: 'responsive' });
  });

  it('computes contrast and component-state failures instead of trusting declared pass booleans', () => {
    const { run, result } = fixture(({ spec }) => {
      spec.tokens.colors.text = '#777777';
      spec.components[0].states = ['default', 'hover'];
    });
    expect(result.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof.schema_version).toBe('0.2');
    expect(proof.computed_checks.contrast.pass).toBe(false);
    expect(proof.computed_checks.component_state_coverage.pass).toBe(false);
    expect(proof.findings).toContainEqual({ code: 'system-check-declaration-drift', detail: 'contrast' });
    expect(proof.findings).toContainEqual({ code: 'system-check-failed', detail: 'component_state_coverage' });
  });

  it('rejects unresolved component tokens and incomplete responsive authority', () => {
    const { run, result } = fixture(({ spec }) => {
      spec.components[0].token_refs.push('colors.unknown');
      spec.responsive.minimum_width_px = 375;
    });
    expect(result.status).not.toBe(0);
    const proof = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'));
    expect(proof.computed_checks.token_reference_closure.observations)
      .toContain('unresolved-component-token:primary-action:colors.unknown');
    expect(proof.computed_checks.responsive_320_200.observations)
      .toContain('exact-320-and-200pct-contract-required');
  });

  it('rejects stale sidecars after DESIGN.md changes', () => {
    const { run, result } = fixture(({ coverage }) => {
      coverage.design_md_sha256 = '0'.repeat(64);
    });
    expect(result.status).not.toBe(0);
    expect(JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8')).findings)
      .toContainEqual({ code: 'coverage-design-md-hash-mismatch', detail: '0'.repeat(64) });
  });

  it('rejects missing sections, invented evidence paths, and stale check receipts', () => {
    const { run, result } = fixture(({ provenance, coverage, designPath }) => {
      provenance.decisions[0].evidence = ['missing-task.md'];
      coverage.groups.typography.evidence = ['DESIGN.md#not-a-real-heading'];
      coverage.checks.contrast.method = 'self-declared';
      const changed = readFileSync(designPath, 'utf8')
        .replace('## 10. Provenance unresolved\nUnknown means absent.\n\n', '');
      writeFileSync(designPath, changed);
      const changedSha = createHash('sha256').update(changed).digest('hex');
      provenance.design_md_sha256 = changedSha;
      coverage.design_md_sha256 = changedSha;
    });
    expect(result.status).not.toBe(0);
    const findings = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8')).findings;
    expect(findings).toContainEqual({
      code: 'provenance-evidence-unresolvable', detail: 'tokens.color.action:missing-task.md',
    });
    expect(findings).toContainEqual({
      code: 'coverage-group-evidence-unresolvable', detail: 'typography:DESIGN.md#not-a-real-heading',
    });
    expect(findings).toContainEqual({ code: 'system-check-method-invalid', detail: 'contrast' });
    expect(findings).toContainEqual({ code: 'design-md-section-missing', detail: '10' });
  });

  it('rejects authored sections 11–13 without product-authority provenance', () => {
    const { run, result } = fixture(({ provenance, coverage, designPath }) => {
      provenance.decisions.push({
        path: 'personas.primary', source_class: 'agent-proposed-greenfield-decision',
        value: 'Busy parent', evidence: ['DESIGN.md#13-personas'],
      });
      const changed = readFileSync(designPath, 'utf8')
        .replace('## 13. Personas\n[FILL IN]', '## 13. Personas\nBusy parent');
      writeFileSync(designPath, changed);
      const changedSha = createHash('sha256').update(changed).digest('hex');
      provenance.design_md_sha256 = changedSha;
      coverage.design_md_sha256 = changedSha;
    });
    expect(result.status).not.toBe(0);
    const findings = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8')).findings;
    expect(findings).toContainEqual({ code: 'sections-11-13-unsupported-content', detail: '13' });
  });
});

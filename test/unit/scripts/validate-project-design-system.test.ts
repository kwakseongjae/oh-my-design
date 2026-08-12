import { afterEach, describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
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

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('validate-project-design-system', () => {
  it('passes a hash-bound, provenance-complete project system', () => {
    const { run, result } = fixture();
    expect(result.status, result.stderr).toBe(0);
    expect(JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8'))).toMatchObject({
      status: 'passed', pass: true, strategy: 'establish',
      implementation_owner: 'main-agent', findings: [], next_state: 'PRODUCT_BUILD',
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

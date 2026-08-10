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
  'reduced_motion', 'assets_fonts_licenses', 'code_conformance', 'unknown_absence',
  'sections_11_13_honesty',
];

function fixture(mutate?: (artifacts: { provenance: any; coverage: any }) => void) {
  const root = mkdtempSync(join(tmpdir(), 'omd-system-proof-'));
  roots.push(root);
  const run = join(root, '.omd/runs/run-test');
  mkdirSync(join(run, 'system'), { recursive: true });
  const design = '# Project DESIGN.md\n\n## Tokens\n\nProject-specific proposal.\n';
  writeFileSync(join(root, 'DESIGN.md'), design);
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
    groups: Object.fromEntries(groups.map((id) => [id, { status: 'covered', evidence: [`DESIGN.md#${id}`] }])),
    checks: Object.fromEntries(checks.map((id) => [id, { pass: true, evidence: [`system/checks/${id}.json`] }])),
  };
  mutate?.({ provenance, coverage });
  writeFileSync(join(run, 'system/provenance.json'), `${JSON.stringify(provenance)}\n`);
  writeFileSync(join(run, 'system/coverage.json'), `${JSON.stringify(coverage)}\n`);
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
    const { run, result } = fixture(({ coverage }) => {
      coverage.checks.contrast.pass = false;
      delete coverage.groups.responsive;
    });
    expect(result.status).not.toBe(0);
    const findings = JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8')).findings;
    expect(findings).toContainEqual({ code: 'system-check-failed', detail: 'contrast' });
    expect(findings).toContainEqual({ code: 'coverage-group-invalid', detail: 'responsive' });
  });

  it('rejects stale sidecars after DESIGN.md changes', () => {
    const { run, result } = fixture(({ coverage }) => {
      coverage.design_md_sha256 = '0'.repeat(64);
    });
    expect(result.status).not.toBe(0);
    expect(JSON.parse(readFileSync(join(run, 'system/proof.json'), 'utf8')).findings)
      .toContainEqual({ code: 'coverage-design-md-hash-mismatch', detail: '0'.repeat(64) });
  });
});

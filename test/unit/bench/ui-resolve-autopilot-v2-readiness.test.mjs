import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { evaluateAutopilotV2Readiness } from '../../../benchmarks/ui-resolve-bench/scripts/audit-autopilot-v2-readiness.mjs';

const repoRoot = resolve(import.meta.dirname, '../../..');
const manifest = JSON.parse(readFileSync(resolve(repoRoot, 'benchmarks/ui-resolve-bench/autopilot-v2-readiness.json'), 'utf8'));
const evidence = JSON.parse(readFileSync(resolve(repoRoot, manifest.machine_evidence), 'utf8'));
const clone = (value) => JSON.parse(JSON.stringify(value));

describe('Autopilot 2.0 readiness authority', () => {
  it('reports the current three pass gates without promoting 2.0', () => {
    const report = evaluateAutopilotV2Readiness(manifest, evidence, repoRoot);
    expect(report).toMatchObject({
      target_version: '2.0.0',
      counts: { pass: 3, partial: 3, open: 3, external: 1 },
      promotion_allowed: false,
      decision: 'BLOCK_2_0_PROMOTION',
      provider_calls: 0,
      model_calls: 0,
      cursor_calls: 0,
    });
    expect(report.unresolved_gate_ids).toHaveLength(7);
    expect(report.external_gate_ids).toEqual(['blind-practitioner-review']);
  });

  it('rejects promotion language when machine evidence is false', () => {
    const changed = clone(manifest);
    changed.gates.find((gate) => gate.id === 'greenfield-reliability').status = 'pass';
    expect(() => evaluateAutopilotV2Readiness(changed, evidence, repoRoot)).toThrow(/cannot pass without machine evidence/);
  });

  it('rejects a stale or forged source binding', () => {
    const changed = clone(evidence);
    changed.source_bindings[0].sha256 = '0'.repeat(64);
    expect(() => evaluateAutopilotV2Readiness(manifest, changed, repoRoot)).toThrow(/source binding drift/);
  });

  it('rejects legacy gate substitution and denominator inflation', () => {
    const changedManifest = clone(manifest);
    changedManifest.gates[0].id = 'verified-skill-lift';
    expect(() => evaluateAutopilotV2Readiness(changedManifest, evidence, repoRoot)).toThrow(/gate IDs or order drift/);
    const changedEvidence = clone(evidence);
    changedEvidence.calibration.targeted_mutant_cell_count = 73;
    expect(() => evaluateAutopilotV2Readiness(manifest, changedEvidence, repoRoot)).toThrow(/calibration acceptance is incomplete/);
  });
});

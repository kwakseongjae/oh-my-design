import { afterEach, describe, expect, it } from 'vitest';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = resolve(import.meta.dirname, '../../..');
const runner = join(repoRoot, 'benchmarks/ui-resolve-bench/scripts/run-autopilot-clean-dir-canary.mjs');
let parent;

afterEach(() => {
  if (parent && existsSync(parent)) rmSync(parent, { recursive: true, force: true });
});

describe('Autopilot clean-directory provider-zero canary', () => {
  it('reaches HANDOFF with zero questions and hash-bound system/product proof', () => {
    parent = mkdtempSync(join(tmpdir(), 'omd-autopilot-clean-'));
    const root = join(parent, 'result');
    const result = spawnSync(process.execPath, [runner, root], { encoding: 'utf8' });
    expect(result.status, result.stderr).toBe(0);
    const summary = JSON.parse(readFileSync(join(root, 'SUMMARY.json'), 'utf8'));
    expect(summary).toMatchObject({
      execution_mode: 'provider-zero-valid-oracle', provider_calls: 0, model_calls: 0, cursor_calls: 0,
      question_batches: 0, system_strategy: 'establish', final_state: 'HANDOFF',
      repair_rounds_used: 1,
      claim_boundary: 'calibration-oracle-not-model-or-skill-performance-evidence',
    });
    expect(Object.values(summary.checks).every(Boolean)).toBe(true);
    expect(summary.design_md_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(summary.product_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(summary.acceptance_plan_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(summary.product_build_admission_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(summary.repair_receipt_sha256).toMatch(/^[a-f0-9]{64}$/);
    expect(existsSync(join(root, 'workspace/DESIGN.md'))).toBe(true);
    expect(existsSync(join(root, 'workspace/index.html'))).toBe(true);
    expect(existsSync(join(root, 'workspace/.omd/runs/run-greenfield-family-planner/acceptance-plan.json'))).toBe(true);
    expect(existsSync(join(root, 'workspace/.omd/runs/run-greenfield-family-planner/product-build-admission.json'))).toBe(true);
    expect(existsSync(join(root, 'workspace/.omd/runs/run-greenfield-family-planner/repairs/round-0.json'))).toBe(true);
    expect(JSON.parse(readFileSync(join(root, 'workspace/.omd/runs/run-greenfield-family-planner/mission-state.json'), 'utf8')).state).toBe('HANDOFF');
    expect(JSON.parse(readFileSync(join(root, 'workspace/.omd/autopilot-active.json'), 'utf8')).status).toBe('completed');
  });

  it('refuses to overwrite an existing canary root', () => {
    parent = mkdtempSync(join(tmpdir(), 'omd-autopilot-fresh-'));
    const result = spawnSync(process.execPath, [runner, parent], { encoding: 'utf8' });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('fresh output root required');
  });
});

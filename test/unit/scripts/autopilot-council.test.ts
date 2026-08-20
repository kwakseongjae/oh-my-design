import { afterEach, describe, expect, it } from 'vitest';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';

const planScript = resolve(import.meta.dirname, '../../../scripts/autopilot-council-plan.cjs');
const reconcileScript = resolve(import.meta.dirname, '../../../scripts/autopilot-council-reconcile.cjs');
let root = '';
let roots: string[] = [];
const sha = (value: Buffer) => createHash('sha256').update(value).digest('hex');

function fixture(task = 'Create a new dashboard and establish a project-owned design system.') {
  root = mkdtempSync(join(tmpdir(), 'omd-autopilot-council-'));
  roots.push(root);
  const runDir = join(root, '.omd/runs/run-1');
  mkdirSync(join(runDir, 'council'), { recursive: true });
  mkdirSync(join(runDir, 'handoff'), { recursive: true });
  writeFileSync(join(runDir, 'task.md'), task);
  writeFileSync(join(runDir, 'mission.json'), JSON.stringify({
    council_lane_budget: 3, council_lane_attempt_budget: 1, council_result_repair_budget: 0,
  }));
  const ledger = { decisions: [{ id: 'design-system-disposition', proposed_value: 'establish' }] };
  writeFileSync(join(runDir, 'council/decision-ledger.json'), JSON.stringify(ledger));
  writeFileSync(join(runDir, 'handoff/.handoff.json'), JSON.stringify({
    state: 'PROPOSE_PLAN', ledger_sha256: sha(readFileSync(join(runDir, 'council/decision-ledger.json'))),
  }));
  return runDir;
}

afterEach(() => {
  for (const item of roots) if (existsSync(item)) rmSync(item, { recursive: true, force: true });
  roots = [];
});

describe('Autopilot bounded council', () => {
  it('selects evidence-required read-only lanes within the mission budget', () => {
    const runDir = fixture();
    const result = spawnSync(process.execPath, [planScript, root, runDir], { encoding: 'utf8' });
    expect(result.status, result.stderr).toBe(0);
    const plan = JSON.parse(readFileSync(join(runDir, 'council/plan.json'), 'utf8'));
    expect(plan.lanes.map((lane: { role: string }) => lane.role)).toEqual([
      'omd-design-system-architect', 'omd-ux-engineer',
    ]);
    expect(plan.lanes.every((lane: { product_write_allowed: boolean; design_md_write_allowed: boolean }) => !lane.product_write_allowed && !lane.design_md_write_allowed)).toBe(true);
    expect(plan.lane_count).toBeLessThanOrEqual(plan.lane_budget);
    expect(plan).toMatchObject({ schema_version: '0.2', lane_attempt_budget: 1, result_repair_budget: 0, coordination_call_budget: 4 });
  });

  it('adds research only when the task explicitly needs external evidence', () => {
    const runDir = fixture('Create a dashboard using an official brand reference and establish a project-owned design system.');
    expect(spawnSync(process.execPath, [planScript, root, runDir], { encoding: 'utf8' }).status).toBe(0);
    const plan = JSON.parse(readFileSync(join(runDir, 'council/plan.json'), 'utf8'));
    expect(plan.lanes.map((lane: { role: string }) => lane.role)).toEqual([
      'omd-design-system-architect', 'omd-ux-engineer', 'omd-ux-researcher',
    ]);
    expect(plan.coordination_call_budget).toBe(6);
  });

  it('uses the locale-copy adviser when the task needs locale judgment', () => {
    const runDir = fixture('Create a five-locale surface and establish a project-owned design system.');
    expect(spawnSync(process.execPath, [planScript, root, runDir], { encoding: 'utf8' }).status).toBe(0);
    const plan = JSON.parse(readFileSync(join(runDir, 'council/plan.json'), 'utf8'));
    expect(plan.lanes.at(-1).role).toBe('omd-ux-writer');
  });

  it('reconciles exact adviser receipts and rejects a product-write claim', () => {
    const runDir = fixture();
    expect(spawnSync(process.execPath, [planScript, root, runDir], { encoding: 'utf8' }).status).toBe(0);
    const plan = JSON.parse(readFileSync(join(runDir, 'council/plan.json'), 'utf8'));
    for (const lane of plan.lanes) {
      const output = join(runDir, lane.output);
      mkdirSync(dirname(output), { recursive: true });
      writeFileSync(output, JSON.stringify({
        schema_version: '0.1', lane_id: lane.lane_id, role: lane.role, status: 'complete',
        findings: [], proposals: [], unresolved: [], product_files_written: 0, design_md_written: false,
      }));
    }
    expect(spawnSync(process.execPath, [reconcileScript, root, runDir], { encoding: 'utf8' }).status).toBe(0);
    expect(JSON.parse(readFileSync(join(runDir, 'council/reconciled.json'), 'utf8'))).toMatchObject({
      status: 'reconciled', lane_count: 2, lane_attempts_per_lane: 1,
      result_repair_calls: 0, coordination_calls_max: 4, product_write_authority_granted: false,
    });

    const badRun = fixture();
    expect(spawnSync(process.execPath, [planScript, root, badRun], { encoding: 'utf8' }).status).toBe(0);
    const badPlan = JSON.parse(readFileSync(join(badRun, 'council/plan.json'), 'utf8'));
    for (const lane of badPlan.lanes) {
      const output = join(badRun, lane.output);
      mkdirSync(dirname(output), { recursive: true });
      writeFileSync(output, JSON.stringify({
        schema_version: '0.1', lane_id: lane.lane_id, role: lane.role, status: 'complete', findings: [], proposals: [], unresolved: [],
        product_files_written: lane === badPlan.lanes[0] ? 1 : 0, design_md_written: false,
      }));
    }
    const rejected = spawnSync(process.execPath, [reconcileScript, root, badRun], { encoding: 'utf8' });
    expect(rejected.status).not.toBe(0);
    expect(rejected.stderr).toContain('adviser write-boundary violation');
  });

  it('rejects a council execution budget that could retry advisers', () => {
    const runDir = fixture();
    expect(spawnSync(process.execPath, [planScript, root, runDir], { encoding: 'utf8' }).status).toBe(0);
    const planPath = join(runDir, 'council/plan.json');
    const plan = JSON.parse(readFileSync(planPath, 'utf8'));
    plan.result_repair_budget = 1;
    writeFileSync(planPath, JSON.stringify(plan));
    const rejected = spawnSync(process.execPath, [reconcileScript, root, runDir], { encoding: 'utf8' });
    expect(rejected.status).not.toBe(0);
    expect(rejected.stderr).toContain('council execution budget drift');
  });
});

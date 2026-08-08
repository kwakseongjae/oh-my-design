import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = resolve(import.meta.dirname, '../../..');
const prime = join(repoRoot, 'scripts/design-council-prime.cjs');
const reconcile = join(repoRoot, 'scripts/design-council-reconcile.cjs');
const roots: string[] = [];

function preparedRun(task = '새 서비스 화면을 디자인해줘') {
  const root = mkdtempSync(join(tmpdir(), 'omd-council-reconcile-'));
  roots.push(root);
  const run = join(root, '.omd/runs/run-test');
  mkdirSync(run, { recursive: true });
  writeFileSync(join(run, 'task.md'), `# Harness Task\n\n${task}\n\n---\n- run_id: test\n`);
  writeFileSync(join(run, 'ctx-prime.json'), JSON.stringify({
    surface_inventory: [],
    wow_moment_candidates: [{ label: 'Generic hero', evidence: 'greenfield default' }],
  }));
  const result = spawnSync(process.execPath, [prime, root, run], { encoding: 'utf8' });
  expect(result.status, result.stderr).toBe(0);
  return { root, run };
}

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('design-council-reconcile', () => {
  it('accepts cited advisory claims and rejects any promotion toward auto', () => {
    const { root, run } = preparedRun();
    const councilDir = join(run, 'council');
    const plan = JSON.parse(readFileSync(join(councilDir, 'dispatch-plan.json'), 'utf8'));
    const ledger = JSON.parse(readFileSync(join(councilDir, 'decision-ledger.json'), 'utf8'));
    const byId = new Map(ledger.decisions.map((item: { id: string }) => [item.id, item]));
    const lanesDir = join(councilDir, 'lanes');
    mkdirSync(lanesDir, { recursive: true });

    for (const lane of plan.selected_lanes) {
      const decision = byId.get(lane.decision_ids[0]) as { id: string; disposition: string };
      const allowedRecommendation = decision.disposition === 'interview'
        ? 'interview'
        : decision.disposition === 'blocked' ? 'blocked' : 'defer';
      const claims = [{
        decision_id: decision.id,
        decision_mode: allowedRecommendation === 'defer' ? 'preserve-existing' : 'choose-new',
        recommendation: allowedRecommendation,
        evidence: ['task.md'],
        reason: 'Task evidence preserves the existing disposition.',
      }];
      if (lane === plan.selected_lanes[0]) claims.push({
        decision_id: decision.id,
        decision_mode: 'choose-new',
        recommendation: 'auto',
        evidence: ['task.md'],
        reason: 'Forbidden promotion attempt.',
      });
      writeFileSync(join(lanesDir, `${lane.id}.json`), JSON.stringify({ lane_id: lane.id, claims }));
    }

    const result = spawnSync(process.execPath, [reconcile, root, run], { encoding: 'utf8' });
    expect(result.status, result.stderr).toBe(0);
    const debate = JSON.parse(readFileSync(join(councilDir, 'debate.json'), 'utf8'));
    const reconciled = JSON.parse(readFileSync(join(councilDir, 'reconciled-ledger.json'), 'utf8'));
    expect(debate.accepted_claims).toHaveLength(plan.selected_lanes.length);
    expect(debate.rejected_claims).toHaveLength(1);
    expect(debate.rejected_claims[0].rejection).toBe('forbidden-disposition-expansion');
    expect(reconciled.council_summary).toMatchObject({
      automatic_dispositions_changed: 0,
      rejected_claim_count: 1,
    });
    expect(reconciled.decisions.every((item: { disposition: string; effective_disposition: string }) =>
      item.disposition !== 'auto' || item.effective_disposition === 'auto')).toBe(true);
  });

  it('rejects a defer recommendation that does not prove preservation mode', () => {
    const { root, run } = preparedRun();
    const councilDir = join(run, 'council');
    const plan = JSON.parse(readFileSync(join(councilDir, 'dispatch-plan.json'), 'utf8'));
    const lanesDir = join(councilDir, 'lanes');
    mkdirSync(lanesDir, { recursive: true });

    for (const lane of plan.selected_lanes) {
      writeFileSync(join(lanesDir, `${lane.id}.json`), JSON.stringify({
        lane_id: lane.id,
        claims: [{
          decision_id: lane.decision_ids[0],
          decision_mode: 'unknown',
          recommendation: 'defer',
          evidence: ['task.md'],
          reason: 'Unsupported deferral mode.',
        }],
      }));
    }

    const result = spawnSync(process.execPath, [reconcile, root, run], { encoding: 'utf8' });
    expect(result.status, result.stderr).toBe(0);
    const debate = JSON.parse(readFileSync(join(councilDir, 'debate.json'), 'utf8'));
    expect(debate.accepted_claims).toHaveLength(0);
    expect(debate.rejected_claims).toHaveLength(plan.selected_lanes.length);
    expect(debate.rejected_claims.every((claim: { rejection: string }) => claim.rejection === 'forbidden-disposition-expansion')).toBe(true);
  });

  it('fails closed when an automatic decision changes after planning', () => {
    const { root, run } = preparedRun('개발자용 단일 앱 화면. 시작하기가 주 행동이야.');
    const ledgerPath = join(run, 'council/decision-ledger.json');
    const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'));
    const auto = ledger.decisions.find((item: { disposition: string }) => item.disposition === 'auto');
    auto.proposed_value = 'tampered';
    writeFileSync(ledgerPath, JSON.stringify(ledger));
    const result = spawnSync(process.execPath, [reconcile, root, run], { encoding: 'utf8' });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('automatic decision snapshot changed');
  });
});

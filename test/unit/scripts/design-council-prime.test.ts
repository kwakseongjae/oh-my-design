import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = resolve(import.meta.dirname, '../../..');
const helper = join(repoRoot, 'scripts/design-council-prime.cjs');
const roots: string[] = [];

function fixture(task: string, ctx: Record<string, unknown>) {
  const root = mkdtempSync(join(tmpdir(), 'omd-council-'));
  roots.push(root);
  const run = join(root, '.omd/runs/run-test');
  mkdirSync(run, { recursive: true });
  writeFileSync(join(run, 'task.md'), `# Harness Task\n\n${task}\n\n---\n- run_id: test\n`);
  writeFileSync(join(run, 'ctx-prime.json'), `${JSON.stringify(ctx)}\n`);
  const result = spawnSync(process.execPath, [helper, root, run], { encoding: 'utf8' });
  expect(result.status, result.stderr).toBe(0);
  return {
    packet: JSON.parse(readFileSync(join(run, 'council/context-packet.json'), 'utf8')),
    ledger: JSON.parse(readFileSync(join(run, 'council/decision-ledger.json'), 'utf8')),
    dispatch: JSON.parse(readFileSync(join(run, 'council/dispatch-plan.json'), 'utf8')),
  };
}

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('design-council-prime', () => {
  it('auto-decides explicit user intent and keeps one implementation owner', () => {
    const { packet, ledger, dispatch } = fixture(
      '개발자용 CLI 풀 랜딩. GitHub star를 primary CTA로 사용해줘.',
      {
        surface_inventory: [{ path: 'app/page.tsx', kind: 'landing' }],
        audience_hypothesis: [{ label: '외부 사용자', confidence: 0.8, evidence: 'landing' }],
        wow_moment_candidates: [{ label: 'CLI demo', evidence: 'app/page.tsx' }],
      },
    );

    expect(packet.lanes).toHaveLength(6);
    expect(packet.evidence_policy.one_implementation_owner).toBe('omd-master');
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'primary-audience')).toMatchObject({
      proposed_value: '개발자·기술 사용자', disposition: 'auto', authority: 'user-stated',
      confidence_basis: 'user-explicit',
    });
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'primary-cta')).toMatchObject({
      proposed_value: 'GitHub star / View source', disposition: 'auto',
    });
    expect(ledger.summary.interview_required).toBe(false);
    expect(dispatch).toMatchObject({
      dispatch_required: false,
      selected_lanes: [],
      max_pre_intake_calls: 2,
      retry_budget: 0,
    });
  });

  it('escalates product decisions but never promotes a generic wow fallback', () => {
    const { ledger, dispatch } = fixture('새 서비스 화면을 디자인해줘', {
      surface_inventory: [],
      audience_hypothesis: [
        { label: '신규 사용자', confidence: 0.6, evidence: 'surface inventory empty' },
      ],
      wow_moment_candidates: [
        { label: '깔끔한 minimal hero — first impression', evidence: 'greenfield default' },
      ],
    });

    expect(ledger.decisions.find((item: { id: string }) => item.id === 'primary-audience').disposition).toBe('interview');
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'exit-scope').disposition).toBe('interview');
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'primary-cta').disposition).toBe('interview');
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'wow-moment')).toMatchObject({
      proposed_value: null, disposition: 'defer', evidence: [], confidence_basis: 'generic-default-rejected',
    });
    expect(ledger.summary).toMatchObject({ interview: 3, defer: 2, question_budget: 3 });
    expect(dispatch.dispatch_required).toBe(true);
    expect(dispatch.selected_lanes.length).toBeLessThanOrEqual(2);
    expect(dispatch.selected_lanes.map((lane: { id: string }) => lane.id)).toContain('ambiguity_contrarian');
    expect(dispatch.transition_policy.interview).not.toContain('auto');
  });

  it('defers settled audience and scope for repository-backed maintenance work', () => {
    const { ledger, dispatch } = fixture('기존 CLI docs 설치 카드를 개선해줘', {
      surface_inventory: [{ path: 'docs/getting-started.tsx', kind: 'docs' }],
      audience_hypothesis: [{ label: '개발자', confidence: 0.88, evidence: 'product brief' }],
      wow_moment_candidates: [{ label: 'Install flow', evidence: 'docs/getting-started.tsx' }],
    });
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'primary-audience')).toMatchObject({
      disposition: 'defer', proposed_value: null, confidence_basis: 'existing-surface-preservation',
    });
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'exit-scope')).toMatchObject({
      disposition: 'defer', proposed_value: null, confidence_basis: 'existing-surface-preservation',
    });
    expect(dispatch.selected_lanes.flatMap((lane: { decision_ids: string[] }) => lane.decision_ids)).not.toContain('primary-audience');
    expect(dispatch.selected_lanes.flatMap((lane: { decision_ids: string[] }) => lane.decision_ids)).not.toContain('exit-scope');
  });
});

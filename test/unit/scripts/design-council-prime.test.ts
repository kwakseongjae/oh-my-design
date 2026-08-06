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
  };
}

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('design-council-prime', () => {
  it('auto-decides explicit user intent and keeps one implementation owner', () => {
    const { packet, ledger } = fixture(
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
  });

  it('escalates product decisions but never promotes a generic wow fallback', () => {
    const { ledger } = fixture('새 서비스 화면을 디자인해줘', {
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
    expect(ledger.summary).toMatchObject({ interview: 3, defer: 1, question_budget: 3 });
  });
});

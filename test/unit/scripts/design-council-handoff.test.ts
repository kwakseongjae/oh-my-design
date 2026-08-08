import { afterEach, describe, expect, it } from 'vitest';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = resolve(import.meta.dirname, '../../..');
const helper = join(repoRoot, 'scripts/design-council-handoff.cjs');
const prime = join(repoRoot, 'scripts/design-council-prime.cjs');
const roots: string[] = [];

type Decision = {
  id: string;
  slot: string;
  disposition: 'auto' | 'defer' | 'interview' | 'blocked';
  effective_disposition?: 'auto' | 'defer' | 'interview' | 'blocked';
  proposed_value?: string | null;
  reason: string;
  authority?: string;
  evidence?: string[];
  options?: Array<{ label: string; description: string }>;
};

function fixture(decisions: Decision[]) {
  const root = mkdtempSync(join(tmpdir(), 'omd-council-handoff-'));
  roots.push(root);
  const run = join(root, '.omd/runs/run-test');
  mkdirSync(join(run, 'council'), { recursive: true });
  writeFileSync(join(run, 'council/decision-ledger.json'), `${JSON.stringify({ decisions })}\n`);
  const result = spawnSync(process.execPath, [helper, root, run, 'prepare'], { encoding: 'utf8' });
  expect(result.status, result.stderr).toBe(0);
  return {
    root,
    run,
    handoff: JSON.parse(readFileSync(join(run, 'handoff/.handoff.json'), 'utf8')),
    checkpoint: JSON.parse(readFileSync(join(run, 'council/intake-checkpoint.json'), 'utf8')),
  };
}

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe('design-council-handoff', () => {
  it('materializes ready, interview, and blocked shapes from fresh prime run directories', () => {
    const cases = [
      {
        name: 'ready',
        task: '기존 CLI 설치 카드를 개선해줘',
        ctx: {
          surface_inventory: [{ path: 'docs/getting-started.tsx', kind: 'docs' }],
          audience_hypothesis: [{ label: '개발자', confidence: 0.88, evidence: 'product brief' }],
          wow_moment_candidates: [{ label: 'Install flow', evidence: 'docs/getting-started.tsx' }],
        },
        expected: { state: 'PROPOSE_PLAN' },
      },
      {
        name: 'interview',
        task: '새 서비스 화면을 디자인하고 가격을 알아서 결정해줘.',
        ctx: { surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [] },
        expected: { state: 'AWAIT_USER', status: 'ask_user', checkpoint_kind: 'product-authority' },
      },
      {
        name: 'blocked',
        task: 'Create a single screen exactly matching the official Acme design system.',
        ctx: { surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [] },
        expected: { state: 'CONTEXT_DETECT', status: 'blocked', checkpoint_kind: 'external-evidence' },
      },
    ];

    for (const item of cases) {
      const root = mkdtempSync(join(tmpdir(), `omd-council-handoff-${item.name}-`));
      roots.push(root);
      const run = join(root, '.omd/runs/run-test');
      mkdirSync(run, { recursive: true });
      writeFileSync(join(run, 'task.md'), `# Harness Task\n\n${item.task}\n\n---\n- run_id: test\n`);
      writeFileSync(join(run, 'ctx-prime.json'), `${JSON.stringify(item.ctx)}\n`);
      const primed = spawnSync(process.execPath, [prime, root, run], { encoding: 'utf8' });
      expect(primed.status, primed.stderr).toBe(0);
      const materialized = spawnSync(process.execPath, [helper, root, run, 'prepare'], { encoding: 'utf8' });
      expect(materialized.status, materialized.stderr).toBe(0);
      const handoff = JSON.parse(readFileSync(join(run, 'handoff/.handoff.json'), 'utf8'));
      expect(handoff, item.name).toMatchObject(item.expected);
      if (item.name === 'interview') {
        const questions = JSON.parse(readFileSync(handoff.questions_file, 'utf8'));
        expect(questions.questions).toHaveLength(4);
      }
      if (item.name === 'blocked') {
        expect(handoff.blocking_items.map((entry: { id: string }) => entry.id)).toContain('brand-reference-commitment');
        expect(existsSync(join(run, 'checkpoints/council-intake.questions.json'))).toBe(false);
      }
    }
  });

  it('prefills only grounded auto values and preserves defer without inventing a value', () => {
    const { handoff, checkpoint } = fixture([
      { id: 'audience', slot: 'audience', disposition: 'auto', proposed_value: 'Operators', reason: 'Explicit.' },
      { id: 'cta', slot: 'cta_primary', disposition: 'defer', proposed_value: null, reason: 'Preserve existing CTA.' },
    ]);

    expect(handoff).toMatchObject({
      state: 'PROPOSE_PLAN',
      prefilled_slots: { audience: 'Operators' },
      deferred_slots: [{ id: 'cta', slot: 'cta_primary', reason: 'Preserve existing CTA.' }],
    });
    expect(handoff.prefilled_slots).not.toHaveProperty('cta_primary');
    expect(checkpoint).toMatchObject({ may_proceed: true, questions: [] });
  });

  it('materializes only product-authority interviews and applies answers before planning', () => {
    const { root, run, handoff } = fixture([
      {
        id: 'pricing', slot: 'pricing', disposition: 'interview', reason: 'Choose the launch price.',
        options: [
          { label: 'Free', description: 'No paid plan.' },
          { label: 'Paid', description: 'Paid launch.' },
        ],
      },
      { id: 'wow', slot: 'wow_moment', disposition: 'defer', reason: 'No grounded visual opportunity.' },
    ]);
    const questionsPath = handoff.questions_file;
    const packet = JSON.parse(readFileSync(questionsPath, 'utf8'));

    expect(handoff).toMatchObject({
      state: 'AWAIT_USER', status: 'ask_user', checkpoint_kind: 'product-authority',
    });
    expect(packet.questions).toHaveLength(1);
    expect(packet.questions[0]).toMatchObject({ id: 'pricing', slot: 'pricing' });
    expect(packet.pending_interview_ids).toEqual([]);

    const answersPath = join(run, 'checkpoints/council-intake.answers.json');
    writeFileSync(answersPath, `${JSON.stringify({ answers: { pricing: 'Paid' } })}\n`);
    const applied = spawnSync(process.execPath, [helper, root, run, 'apply', answersPath], { encoding: 'utf8' });
    expect(applied.status, applied.stderr).toBe(0);
    const finalHandoff = JSON.parse(readFileSync(join(run, 'handoff/.handoff.json'), 'utf8'));
    expect(finalHandoff).toMatchObject({
      state: 'PROPOSE_PLAN',
      prefilled_slots: { pricing: 'Paid' },
      answered_decisions: [{ id: 'pricing', slot: 'pricing', value: 'Paid' }],
    });
    expect(finalHandoff.deferred_slots).toEqual([
      { id: 'wow', slot: 'wow_moment', reason: 'No grounded visual opportunity.' },
    ]);
  });

  it('lets an external evidence blocker suppress every interview checkpoint', () => {
    const { run, handoff, checkpoint } = fixture([
      { id: 'pricing', slot: 'pricing', disposition: 'interview', reason: 'Choose pricing.' },
      {
        id: 'brand-source', slot: 'brand_reference', disposition: 'blocked', reason: 'Official source missing.',
        authority: 'brand', evidence: ['task.md'],
      },
    ]);

    expect(handoff).toMatchObject({
      state: 'CONTEXT_DETECT', status: 'blocked', checkpoint_kind: 'external-evidence',
      blocking_items: [{ id: 'brand-source', reason: 'Official source missing.' }],
    });
    expect(checkpoint).toMatchObject({ may_proceed: false, questions: [] });
    expect(existsSync(join(run, 'checkpoints/council-intake.questions.json'))).toBe(false);
  });

  it('fails closed when more mandatory interviews exist than the four-question budget', () => {
    const decisions = Array.from({ length: 5 }, (_, index): Decision => ({
      id: `decision-${index + 1}`,
      slot: `slot_${index + 1}`,
      disposition: 'interview',
      reason: `Decision ${index + 1} requires product authority.`,
    }));
    const root = mkdtempSync(join(tmpdir(), 'omd-council-handoff-budget-'));
    roots.push(root);
    const run = join(root, '.omd/runs/run-test');
    mkdirSync(join(run, 'council'), { recursive: true });
    writeFileSync(join(run, 'council/decision-ledger.json'), `${JSON.stringify({ decisions })}\n`);
    const prepared = spawnSync(process.execPath, [helper, root, run, 'prepare'], { encoding: 'utf8' });
    expect(prepared.status).not.toBe(0);
    expect(prepared.stderr).toContain('question budget exceeded');
    expect(existsSync(join(run, 'handoff/.handoff.json'))).toBe(false);
  });
});

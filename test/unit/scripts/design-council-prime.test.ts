import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = resolve(import.meta.dirname, '../../..');
const helper = join(repoRoot, 'scripts/design-council-prime.cjs');
const roots: string[] = [];

function fixture(task: string, ctx: Record<string, unknown>, options: { designMd?: string } = {}) {
  const root = mkdtempSync(join(tmpdir(), 'omd-council-'));
  roots.push(root);
  const run = join(root, '.omd/runs/run-test');
  mkdirSync(run, { recursive: true });
  writeFileSync(join(run, 'task.md'), `# Harness Task\n\n${task}\n\n---\n- run_id: test\n`);
  writeFileSync(join(run, 'ctx-prime.json'), `${JSON.stringify(ctx)}\n`);
  if (options.designMd) writeFileSync(join(root, 'DESIGN.md'), options.designMd);
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
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'design-system-disposition')).toMatchObject({
      proposed_value: null,
      disposition: 'interview',
      confidence_basis: 'greenfield-system-authority-missing',
    });
    expect(ledger.summary).toMatchObject({ interview: 4, defer: 2, question_budget: 4 });
    expect(dispatch.dispatch_required).toBe(true);
    expect(dispatch.selected_lanes.length).toBeLessThanOrEqual(2);
    expect(dispatch.selected_lanes.map((lane: { id: string }) => lane.id)).toContain('ambiguity_contrarian');
    expect(dispatch.transition_policy.interview).not.toContain('auto');
  });

  it('defers settled audience and scope for repository-backed maintenance work', () => {
    const { ledger, dispatch } = fixture('기존 CLI 설치 카드를 개선해줘', {
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
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'primary-cta')).toMatchObject({
      disposition: 'defer', proposed_value: null, confidence_basis: 'existing-surface-preservation',
      evidence: ['docs/getting-started.tsx'],
    });
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'design-system-disposition')).toMatchObject({
      disposition: 'auto', proposed_value: 'surface-local-only',
      confidence_basis: 'narrow-maintenance-preservation',
    });
    expect(dispatch.selected_lanes.flatMap((lane: { decision_ids: string[] }) => lane.decision_ids)).not.toContain('primary-audience');
    expect(dispatch.selected_lanes.flatMap((lane: { decision_ids: string[] }) => lane.decision_ids)).not.toContain('exit-scope');
    expect(dispatch.selected_lanes.flatMap((lane: { decision_ids: string[] }) => lane.decision_ids)).not.toContain('primary-cta');
  });

  it('reuses an existing project design system without reopening it', () => {
    const { ledger } = fixture('새 결제 화면을 구현해줘', {
      surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [],
    }, { designMd: '# Project DESIGN.md\n' });
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'design-system-disposition')).toMatchObject({
      disposition: 'auto', proposed_value: 'reuse', evidence: ['DESIGN.md'],
      confidence_basis: 'project-design-md-present',
    });
  });

  it('establishes a system without a follow-up when the prompt grants authority', () => {
    const { ledger } = fixture(
      '새 가족 식단 앱을 처음부터 만들어줘. 필요하면 DESIGN.md와 디자인 시스템까지 알아서 구축해.',
      { surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [] },
    );
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'design-system-disposition')).toMatchObject({
      disposition: 'auto', proposed_value: 'establish', authority: 'user-stated',
      confidence_basis: 'user-explicit-establish',
    });
  });

  it.each([
    {
      task: 'From scratch, create a landing page for a neighborhood tool library. Establish a project-owned design system. Help residents understand borrowing and make the primary action Reserve a tool. Do not invent inventory counts, prices, testimonials, or partner logos.',
      audience: '지역 주민·커뮤니티 사용자', scope: '풀 랜딩', cta: 'Reserve a tool',
    },
    {
      task: 'From scratch, create a dense cold-chain exception queue for warehouse operators. Establish a project-owned design system. Operators must filter urgent shipments, inspect one exception, and assign an owner. Label all records as sample data and do not invent regulatory claims.',
      audience: 'B2B 운영자·관리자', scope: '단일 화면',
      cta: 'Complete required journey: filter urgent shipments, inspect one exception, and assign an owner',
    },
    {
      task: 'From scratch, create a clinic visit preparation checklist with locale switching for Korean, English, Japanese, Simplified Chinese, and Traditional Chinese. Establish a project-owned design system. A user must switch locale, review fictional preparation items, mark progress, and see completion. Do not provide medical advice or infer a diagnosis.',
      audience: '일반 사용자', scope: '단일 화면',
      cta: 'Complete required journey: switch locale, review fictional preparation items, mark progress, and see completion',
    },
  ])('treats the fully specified smoke prompt as zero-interview authority: $scope', ({ task, audience, scope, cta }) => {
    const { ledger } = fixture(task, {
      surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [],
    });
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'primary-audience')).toMatchObject({
      proposed_value: audience, disposition: 'auto', authority: 'user-stated',
    });
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'exit-scope')).toMatchObject({
      proposed_value: scope, disposition: 'auto', authority: 'user-stated',
    });
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'primary-cta')).toMatchObject({
      proposed_value: cta, disposition: 'auto', authority: 'user-stated',
    });
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'design-system-disposition')).toMatchObject({
      proposed_value: 'establish', disposition: 'auto', authority: 'user-stated',
    });
    expect(ledger.summary.interview).toBe(0);
    expect(ledger.summary.interview_required).toBe(false);
  });

  it('keeps explicitly declined systems local to the requested surface', () => {
    const { ledger } = fixture(
      '새 온보딩 화면을 처음부터 만들되 디자인 시스템 없이 이번 화면만 완성해줘.',
      { surface_inventory: [], audience_hypothesis: [], wow_moment_candidates: [] },
    );
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'design-system-disposition')).toMatchObject({
      disposition: 'auto', proposed_value: 'surface-local-only',
      confidence_basis: 'user-explicit-skip',
    });
  });

  it('suppresses advisory dispatch while a deterministic blocker is unresolved', () => {
    const { ledger, dispatch } = fixture('Create a single screen exactly matching the official Acme design system.', {
      surface_inventory: [],
      audience_hypothesis: [],
      wow_moment_candidates: [],
    });
    expect(ledger.decisions.find((item: { id: string }) => item.id === 'brand-reference-commitment')).toMatchObject({
      disposition: 'blocked',
    });
    expect(dispatch).toMatchObject({
      dispatch_required: false,
      dispatch_suppressed_by_blocked: true,
      blocking_decision_ids: ['brand-reference-commitment'],
      selected_lanes: [],
    });
  });
});

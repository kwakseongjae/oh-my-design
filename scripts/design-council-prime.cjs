#!/usr/bin/env node
// Build a deterministic, run-scoped intake ledger for omd-harness.
// This helper does not claim that model agents have debated. It prepares the
// evidence packet and classifies which decisions may be made automatically,
// which must be asked, and which should be deferred.

const fs = require('node:fs');
const path = require('node:path');

const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = path.resolve(process.argv[3] || path.join(cwd, '.omd'));
const taskPath = path.join(runDir, 'task.md');
const ctxPath = path.join(runDir, 'ctx-prime.json');

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return null; }
}

function readTask() {
  try {
    return fs.readFileSync(taskPath, 'utf8')
      .replace(/^# Harness Task\s*/i, '')
      .split('\n---\n')[0]
      .trim();
  } catch {
    return '';
  }
}

function decision(input) {
  return {
    id: input.id,
    slot: input.slot,
    proposed_value: input.proposed_value ?? null,
    evidence: input.evidence ?? [],
    confidence: input.confidence ?? 0,
    confidence_basis: input.confidence_basis,
    impact: input.impact,
    reversibility: input.reversibility,
    authority: input.authority,
    disposition: input.disposition,
    reason: input.reason,
    options: input.options ?? [],
  };
}

const task = readTask();
const taskLower = task.toLowerCase();
const ctx = readJson(ctxPath) || {};
const surfaces = Array.isArray(ctx.surface_inventory) ? ctx.surface_inventory : [];
const audiences = Array.isArray(ctx.audience_hypothesis) ? ctx.audience_hypothesis : [];
const wowCandidates = Array.isArray(ctx.wow_moment_candidates) ? ctx.wow_moment_candidates : [];

const explicitAudience = [
  { pattern: /(b2b|enterprise|admin|operator|운영자|관리자|기업 고객)/i, value: 'B2B 운영자·관리자' },
  { pattern: /(developer|개발자|engineer|엔지니어)/i, value: '개발자·기술 사용자' },
  { pattern: /(family|가족|parent|부모|아이|children)/i, value: '가족·보호자 사용자' },
  { pattern: /(consumer|일반 사용자|고객|쇼핑객)/i, value: '일반 소비자' },
].find((item) => item.pattern.test(task));

const scopeSignals = [
  { pattern: /(multi[- ]?surface|다중 surface|여러 화면|전체 플로우|end[- ]?to[- ]?end)/i, value: '다중 surface' },
  { pattern: /(full landing|풀 랜딩|landing page|랜딩페이지|hero.+footer)/i, value: '풀 랜딩' },
  { pattern: /(single screen|단일 화면|한 화면|one screen|component only|컴포넌트만)/i, value: '단일 화면' },
].find((item) => item.pattern.test(task));

const ctaSignals = [
  { pattern: /(github|star|view source|오픈소스|깃허브)/i, value: 'GitHub star / View source' },
  { pattern: /(docs|documentation|문서|가이드)/i, value: 'View docs / Read more' },
  { pattern: /(sign[ -]?up|get started|시작하기|가입)/i, value: 'Sign-up / Get started' },
  { pattern: /(book demo|contact sales|문의|데모 예약)/i, value: 'Book demo / Contact sales' },
].find((item) => item.pattern.test(task));

const decisions = [];

decisions.push(explicitAudience
  ? decision({
      id: 'primary-audience', slot: 'audience', proposed_value: explicitAudience.value,
      evidence: ['task.md'], confidence: 0.95, impact: 'high', reversibility: 'moderate',
      confidence_basis: 'user-explicit',
      authority: 'user-stated', disposition: 'auto',
      reason: 'The task explicitly names the audience; no factual question is needed.',
    })
  : decision({
      id: 'primary-audience', slot: 'audience', proposed_value: audiences[0]?.label ?? null,
      evidence: audiences[0] ? ['ctx-prime.json#/audience_hypothesis/0'] : [],
      confidence: audiences[0]?.confidence ?? 0, impact: 'high', reversibility: 'moderate',
      confidence_basis: audiences[0] ? 'ctx-prime-hypothesis' : 'no-evidence',
      authority: 'product', disposition: 'interview',
      reason: 'Audience changes hierarchy, copy, and success criteria; repository heuristics cannot own it.',
      options: audiences.slice(0, 3).map((item) => ({ label: item.label, description: item.evidence })),
    }));

decisions.push(scopeSignals
  ? decision({
      id: 'exit-scope', slot: 'exit_scope', proposed_value: scopeSignals.value,
      evidence: ['task.md'], confidence: 0.95, impact: 'high', reversibility: 'moderate',
      confidence_basis: 'user-explicit',
      authority: 'user-stated', disposition: 'auto',
      reason: 'The requested delivery scope is explicit in the task.',
    })
  : decision({
      id: 'exit-scope', slot: 'exit_scope', proposed_value: null,
      evidence: surfaces.length ? ['ctx-prime.json#/surface_inventory'] : [],
      confidence: 0, impact: 'high', reversibility: 'moderate', authority: 'product',
      confidence_basis: 'no-explicit-scope',
      disposition: 'interview',
      reason: 'Scope materially changes time and deliverables and is not explicit.',
      options: [
        { label: '단일 화면', description: '한 surface를 깊게 완성합니다.' },
        { label: '풀 랜딩', description: 'hero부터 footer까지 한 흐름을 만듭니다.' },
        { label: '다중 surface', description: '핵심 여정을 여러 화면으로 연결합니다.' },
      ],
    }));

const strongestWow = wowCandidates[0];
const wowIsGrounded = strongestWow && strongestWow.evidence !== 'greenfield default';
decisions.push(decision({
  id: 'wow-moment', slot: 'wow_moment',
  proposed_value: wowIsGrounded ? strongestWow.label : null,
  evidence: wowIsGrounded ? ['ctx-prime.json#/wow_moment_candidates/0'] : [],
  confidence: wowIsGrounded ? 0.78 : 0,
  confidence_basis: wowIsGrounded ? 'ctx-prime-observation' : 'generic-default-rejected',
  impact: 'low', reversibility: 'easy', authority: 'design',
  disposition: wowIsGrounded ? 'auto' : 'defer',
  reason: wowIsGrounded
    ? 'A repository-backed visual opportunity is reversible and may be proposed automatically.'
    : 'No grounded visual opportunity exists; do not turn a generic default into product fact.',
}));

decisions.push(ctaSignals
  ? decision({
      id: 'primary-cta', slot: 'cta_primary', proposed_value: ctaSignals.value,
      evidence: ['task.md'], confidence: 0.92, impact: 'high', reversibility: 'moderate',
      confidence_basis: 'user-explicit',
      authority: 'user-stated', disposition: 'auto',
      reason: 'The task explicitly identifies the primary action.',
    })
  : decision({
      id: 'primary-cta', slot: 'cta_primary', proposed_value: null,
      evidence: [], confidence: 0, impact: 'high', reversibility: 'moderate',
      confidence_basis: 'no-explicit-cta',
      authority: 'product', disposition: 'interview',
      reason: 'A primary CTA encodes the product outcome and cannot be inferred from visual style.',
      options: [
        { label: 'Sign-up / Get started', description: '제품 시작·가입을 주 행동으로 둡니다.' },
        { label: 'Book demo / Contact sales', description: '영업 전환을 주 행동으로 둡니다.' },
        { label: 'Docs / GitHub', description: '학습·오픈소스 탐색을 주 행동으로 둡니다.' },
      ],
    }));

const marketingSurface = /(landing|랜딩|marketing|홈|home)/i.test(task)
  || surfaces.some((item) => item.kind === 'landing' || item.kind === 'marketing');
decisions.push(decision({
  id: 'visual-grounding', slot: 'visual_grounding',
  proposed_value: marketingSurface ? 'Live reference capture' : 'Catalog-only',
  evidence: marketingSurface ? ['task.md', 'ctx-prime.json#/surface_inventory'] : ['ctx-prime.json'],
  confidence: 0.8, impact: 'low', reversibility: 'easy', authority: 'process',
  confidence_basis: 'deterministic-surface-policy',
  disposition: 'auto',
  reason: marketingSurface
    ? 'Marketing composition benefits from live evidence; the choice changes process, not product facts.'
    : 'Catalog grounding is the smallest sufficient process for the detected surface.',
}));

const councilDir = path.join(runDir, 'council');
fs.mkdirSync(councilDir, { recursive: true });

const lanes = [
  ['code_context', 'Stack, routes, protected behavior, reusable components'],
  ['product_context', 'Audience, task, outcome, and CTA implications'],
  ['reference_evidence', 'DESIGN.md provenance, live evidence, assets, and unknowns'],
  ['ux_quality', 'Hierarchy, usability, accessibility, locale, and responsive risk'],
  ['architecture_implications', 'Scope, states, components, and system impact'],
  ['ambiguity_contrarian', 'Unsupported assumptions and wrong-problem checks'],
].map(([id, remit]) => ({ id, remit, mode: 'read-only', status: 'not-dispatched' }));

const contextPacket = {
  schema_version: '0.1',
  task,
  ctx_prime_ref: path.relative(runDir, ctxPath),
  lanes,
  evidence_policy: {
    citations_required: true,
    unknown_means_absent: true,
    one_implementation_owner: 'omd-master',
  },
  created_at: new Date().toISOString(),
};

const counts = decisions.reduce((acc, item) => {
  acc[item.disposition] = (acc[item.disposition] || 0) + 1;
  return acc;
}, { auto: 0, interview: 0, defer: 0, blocked: 0 });

for (const item of decisions) {
  if (item.disposition === 'auto') {
    const grounded = item.proposed_value !== null && item.evidence.length > 0;
    const userOwned = item.authority === 'user-stated';
    const safelyReversible = item.confidence >= 0.75 && item.impact === 'low' && item.reversibility === 'easy';
    if (!grounded || (!userOwned && !safelyReversible)) {
      throw new Error(`unsafe auto decision: ${item.id}`);
    }
  }
  if (item.disposition === 'defer' && item.proposed_value !== null) {
    throw new Error(`deferred decision promoted a value: ${item.id}`);
  }
}
const ledger = {
  schema_version: '0.1',
  policy: 'council-first-interview-gate',
  decisions,
  summary: {
    ...counts,
    interview_required: counts.interview > 0,
    question_budget: Math.min(counts.interview, 4),
  },
  created_at: new Date().toISOString(),
};

const packetPath = path.join(councilDir, 'context-packet.json');
const ledgerPath = path.join(councilDir, 'decision-ledger.json');
fs.writeFileSync(packetPath, `${JSON.stringify(contextPacket, null, 2)}\n`, 'utf8');
fs.writeFileSync(ledgerPath, `${JSON.stringify(ledger, null, 2)}\n`, 'utf8');
process.stdout.write(`${ledgerPath}\n`);

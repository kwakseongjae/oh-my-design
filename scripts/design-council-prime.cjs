#!/usr/bin/env node
// Build a deterministic, run-scoped intake ledger for omd-harness.
// This helper does not claim that model agents have debated. It prepares the
// evidence packet and classifies which decisions may be made automatically,
// which must be asked, and which should be deferred.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

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
const parsedCtx = readJson(ctxPath);
const ctxAvailable = parsedCtx !== null;
const ctx = parsedCtx || {};
const surfaces = Array.isArray(ctx.surface_inventory) ? ctx.surface_inventory : [];
const audiences = Array.isArray(ctx.audience_hypothesis) ? ctx.audience_hypothesis : [];
const wowCandidates = Array.isArray(ctx.wow_moment_candidates) ? ctx.wow_moment_candidates : [];

function matchedSignals(signals) {
  return signals.filter((item) => item.pattern.test(task)).map((item) => {
    const match = task.match(item.pattern);
    const index = match?.index ?? -1;
    const before = index >= 0 ? task.slice(Math.max(0, index - 24), index) : '';
    const after = index >= 0 ? task.slice(index + (match?.[0]?.length ?? 0), index + (match?.[0]?.length ?? 0) + 24) : '';
    const negated = /(not(?:\s+for)?|말고|아니고|제외|ではなく|使わない|不要|不是|別用|不要用)\s*$/i.test(before)
      || /^\s*(?:말고|아니고|쓰지\s*마|사용하지\s*마|제외|ではなく|なし|は使わない|不要|不是|別用)/i.test(after);
    return { ...item, negated };
  });
}

const audienceMatches = matchedSignals([
  { pattern: /(b2b|enterprise|admin|operator|운영자|관리자|기업 고객|管理者|運営者|管理员|管理員|运营者|營運者|企業客戶|企业客户)/i, value: 'B2B 운영자·관리자' },
  { pattern: /(developer|개발자|engineer|엔지니어|開発者|エンジニア|开发者|開發者|工程师|工程師)/i, value: '개발자·기술 사용자' },
  { pattern: /(family|가족|parent|부모|아이|children|家族|保護者|家庭|家人|父母|儿童|兒童)/i, value: '가족·보호자 사용자' },
  { pattern: /(consumer|일반 사용자|고객|쇼핑객|一般ユーザー|消費者|消费者|一般使用者|一般用户)/i, value: '일반 소비자' },
]);
const explicitAudience = audienceMatches.length === 1 && !audienceMatches[0].negated ? audienceMatches[0] : null;

const scopeMatches = matchedSignals([
  { pattern: /(multi[- ]?surface|다중 surface|여러 화면|전체 플로우|end[- ]?to[- ]?end|複数画面|複数サーフェス|多頁面|多页面|多个页面|多個畫面)/i, value: '다중 surface' },
  { pattern: /(full landing|풀 랜딩|landing page|랜딩페이지|hero.+footer|フルランディング|ランディングページ|完整落地頁|完整落地页|完整着陆页)/i, value: '풀 랜딩' },
  { pattern: /(single screen|단일 화면|한 화면|one screen|component only|컴포넌트만|単一画面|一画面|單一畫面|单一页面|單一頁面)/i, value: '단일 화면' },
]);
const scopeSignal = scopeMatches.length === 1 && !scopeMatches[0].negated ? scopeMatches[0] : null;

const ctaMatches = matchedSignals([
  { pattern: /(github|\bstar\b|view source|오픈소스|깃허브|ソースを見る|查看源码|檢視原始碼)/i, value: 'GitHub star / View source' },
  { pattern: /(docs|documentation|문서|가이드|ドキュメント|ガイド|文件|文档|指南)/i, value: 'View docs / Read more' },
  { pattern: /(sign[ -]?up|get started|시작하기|가입|始める|新規登録|立即開始|立即开始|開始使用|开始使用|註冊|注册)/i, value: 'Sign-up / Get started' },
  { pattern: /(book demo|contact sales|문의|데모 예약|デモ予約|お問い合わせ|聯絡銷售|联系销售|預約示範|预约演示)/i, value: 'Book demo / Contact sales' },
]);
const ctaSignal = ctaMatches.length === 1 && !ctaMatches[0].negated ? ctaMatches[0] : null;
const existingSurfaceMaintenance = ctxAvailable && surfaces.length > 0
  && /(existing|current|preserve|improve|update|기존|현재|개선|유지|修正|改善|既存|現有|改进|優化|优化)/i.test(task);
const backedAudience = audiences[0]
  && typeof audiences[0].label === 'string'
  && typeof audiences[0].evidence === 'string'
  && audiences[0].evidence.trim()
  && Number(audiences[0].confidence) >= 0.75;

const decisions = [];

decisions.push(explicitAudience
  ? decision({
      id: 'primary-audience', slot: 'audience', proposed_value: explicitAudience.value,
      evidence: ['task.md'], confidence: 0.95, impact: 'high', reversibility: 'moderate',
      confidence_basis: 'user-explicit',
      authority: 'user-stated', disposition: 'auto',
      reason: 'The task explicitly names the audience; no factual question is needed.',
    })
  : existingSurfaceMaintenance && backedAudience
  ? decision({
      id: 'primary-audience', slot: 'audience', proposed_value: null,
      evidence: ['ctx-prime.json#/audience_hypothesis/0'],
      confidence: audiences[0].confidence, impact: 'high', reversibility: 'easy',
      confidence_basis: 'existing-surface-preservation', authority: 'product',
      disposition: 'defer',
      reason: 'The task improves an existing surface and repository evidence identifies its audience; preserve it without reopening product direction.',
    })
  : decision({
      id: 'primary-audience', slot: 'audience', proposed_value: audiences[0]?.label ?? null,
      evidence: audiences[0] ? ['ctx-prime.json#/audience_hypothesis/0'] : [],
      confidence: audiences[0]?.confidence ?? 0, impact: 'high', reversibility: 'moderate',
      confidence_basis: audiences[0] ? 'ctx-prime-hypothesis' : 'no-evidence',
      authority: 'product', disposition: 'interview',
      reason: audienceMatches.some((item) => item.negated)
        ? 'The task contains a negated audience signal; do not promote a keyword match.'
        : audienceMatches.length > 1
        ? 'The task names multiple audience groups without choosing a primary audience.'
        : 'Audience changes hierarchy, copy, and success criteria; repository heuristics cannot own it.',
      options: audienceMatches.length > 1
        ? audienceMatches.map((item) => ({ label: item.value, description: '요청에 명시됐지만 primary 여부는 미확정입니다.' }))
        : audiences.slice(0, 3).map((item) => ({ label: item.label, description: item.evidence })),
    }));

decisions.push(scopeSignal
  ? decision({
      id: 'exit-scope', slot: 'exit_scope', proposed_value: scopeSignal.value,
      evidence: ['task.md'], confidence: 0.95, impact: 'high', reversibility: 'moderate',
      confidence_basis: 'user-explicit',
      authority: 'user-stated', disposition: 'auto',
      reason: 'The requested delivery scope is explicit in the task.',
    })
  : existingSurfaceMaintenance && backedAudience && surfaces.length === 1
  ? decision({
      id: 'exit-scope', slot: 'exit_scope', proposed_value: null,
      evidence: ['ctx-prime.json#/surface_inventory/0'], confidence: 0.8,
      impact: 'high', reversibility: 'easy', authority: 'product',
      confidence_basis: 'existing-surface-preservation', disposition: 'defer',
      reason: 'The task improves one existing surface; preserve that boundary without reopening delivery scope.',
    })
  : decision({
      id: 'exit-scope', slot: 'exit_scope', proposed_value: null,
      evidence: surfaces.length ? ['ctx-prime.json#/surface_inventory'] : [],
      confidence: 0, impact: 'high', reversibility: 'moderate', authority: 'product',
      confidence_basis: 'no-explicit-scope',
      disposition: 'interview',
      reason: scopeMatches.some((item) => item.negated)
        ? 'The task contains a negated scope signal; do not promote a keyword match.'
        : scopeMatches.length > 1
        ? 'The task names conflicting delivery scopes without choosing one.'
        : 'Scope materially changes time and deliverables and is not explicit.',
      options: scopeMatches.length > 1 ? scopeMatches.map((item) => ({
        label: item.value, description: '요청에 함께 명시된 범위입니다.',
      })) : [
        { label: '단일 화면', description: '한 surface를 깊게 완성합니다.' },
        { label: '풀 랜딩', description: 'hero부터 footer까지 한 흐름을 만듭니다.' },
        { label: '다중 surface', description: '핵심 여정을 여러 화면으로 연결합니다.' },
      ],
    }));

const groundedWowCandidates = wowCandidates.filter((item) => {
  const evidence = typeof item?.evidence === 'string' ? item.evidence.trim() : '';
  return Boolean(item?.label && evidence && evidence !== 'greenfield default');
});
const strongestWow = groundedWowCandidates.length === 1 ? groundedWowCandidates[0] : null;
const wowEvidence = typeof strongestWow?.evidence === 'string' ? strongestWow.evidence.trim() : '';
const wowIsGrounded = Boolean(strongestWow?.label && wowEvidence && wowEvidence !== 'greenfield default');
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
    : groundedWowCandidates.length > 1
      ? 'Multiple grounded visual opportunities conflict; defer selection to the bounded council.'
      : 'No grounded visual opportunity exists; do not turn a generic default into product fact.',
}));

decisions.push(ctaSignal
  ? decision({
      id: 'primary-cta', slot: 'cta_primary', proposed_value: ctaSignal.value,
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
      reason: ctaMatches.some((item) => item.negated)
        ? 'The task contains a negated CTA signal; do not promote a keyword match.'
        : ctaMatches.length > 1
        ? 'The task names multiple actions without selecting the primary CTA.'
        : 'A primary CTA encodes the product outcome and cannot be inferred from visual style.',
      options: ctaMatches.length > 1 ? ctaMatches.map((item) => ({
        label: item.value, description: '요청에 함께 명시된 행동입니다.',
      })) : [
        { label: 'Sign-up / Get started', description: '제품 시작·가입을 주 행동으로 둡니다.' },
        { label: 'Book demo / Contact sales', description: '영업 전환을 주 행동으로 둡니다.' },
        { label: 'Docs / GitHub', description: '학습·오픈소스 탐색을 주 행동으로 둡니다.' },
      ],
    }));

const marketingSurfaceMatches = matchedSignals([{ pattern: /(landing|랜딩|marketing|홈|home|ランディング|ホーム|落地頁|落地页|首頁|首页)/i }]);
const nonMarketingSurfaceMatches = matchedSignals([{ pattern: /(dashboard|app|settings|console|admin|docs|documentation|onboarding|대시보드|앱|설정|관리|문서|온보딩|ダッシュボード|設定|ドキュメント|オンボーディング|儀表板|仪表板|设置|文件|文档|註冊|注册)/i }]);
const explicitMarketingSurface = marketingSurfaceMatches.some((item) => !item.negated);
const explicitNonMarketingSurface = nonMarketingSurfaceMatches.some((item) => !item.negated);
const ctxMarketingSurface = surfaces.some((item) => item.kind === 'landing' || item.kind === 'marketing');
const surfaceConflict = explicitMarketingSurface && explicitNonMarketingSurface;
const hasSurfaceEvidence = !surfaceConflict && (explicitMarketingSurface || explicitNonMarketingSurface || (ctxAvailable && surfaces.length > 0));
const marketingSurface = explicitMarketingSurface || (!explicitNonMarketingSurface && ctxMarketingSurface);
decisions.push(decision({
  id: 'visual-grounding', slot: 'visual_grounding',
  proposed_value: hasSurfaceEvidence ? (marketingSurface ? 'Live reference capture' : 'Catalog-only') : null,
  evidence: explicitMarketingSurface || explicitNonMarketingSurface
    ? ['task.md']
    : ctxAvailable && surfaces.length > 0 ? ['ctx-prime.json#/surface_inventory'] : [],
  confidence: hasSurfaceEvidence ? 0.8 : 0, impact: 'low', reversibility: 'easy', authority: 'process',
  confidence_basis: hasSurfaceEvidence ? 'deterministic-surface-policy' : 'no-surface-evidence',
  disposition: hasSurfaceEvidence ? 'auto' : 'defer',
  reason: surfaceConflict
    ? 'The task mixes marketing and product/docs surface signals; defer capture mode instead of choosing a side.'
    : !hasSurfaceEvidence
    ? 'No surface evidence exists; leave the capture mode unresolved instead of inventing a process default.'
    : marketingSurface
    ? 'Marketing composition benefits from live evidence; the choice changes process, not product facts.'
    : 'Catalog grounding is the smallest sufficient process for the detected surface.',
}));

const designMdPresent = fs.existsSync(path.join(cwd, 'DESIGN.md'));
const requiresExactOfficialReference = /(official|exact|identical|정확히|공식|그대로|完全一致|公式|官方|完全相同|一模一樣|一模一样)/i.test(task)
  && /(brand|reference|design system|브랜드|레퍼런스|디자인 시스템|ブランド|リファレンス|デザインシステム|品牌|參考|参考|設計系統|设计系统)/i.test(task);
if (requiresExactOfficialReference) {
  decisions.push(decision({
    id: 'brand-reference-commitment', slot: 'brand_reference_commitment',
    proposed_value: designMdPresent ? 'Use project DESIGN.md as ground truth' : null,
    evidence: designMdPresent ? ['DESIGN.md', 'task.md'] : ['task.md'],
    confidence: designMdPresent ? 0.98 : 0, impact: 'high', reversibility: 'hard',
    confidence_basis: designMdPresent ? 'project-design-md-present' : 'required-source-missing',
    authority: designMdPresent ? 'user-stated' : 'brand',
    disposition: designMdPresent ? 'auto' : 'blocked',
    reason: designMdPresent
      ? 'The task explicitly requires the project design system and the source exists.'
      : 'An exact official brand/reference commitment requires a source; proceeding would fabricate it.',
  }));
}

const asksAgentToOwnRegulatedCommitment = /(decide|choose|set|알아서|정해|결정해|決めて|決定して|决定|決定)/i.test(task)
  && /(security|privacy|personal data|retention|pricing|price|보안|개인정보|데이터 보존|가격|요금|セキュリティ|個人情報|保持期間|価格|安全|隐私|隱私|个人资料|個人資料|数据保留|資料保留|价格|價格)/i.test(task);
if (asksAgentToOwnRegulatedCommitment) {
  decisions.push(decision({
    id: 'regulated-commitment', slot: 'regulated_commitment', proposed_value: null,
    evidence: ['task.md'], confidence: 0, impact: 'high', reversibility: 'hard',
    confidence_basis: 'user-authority-required', authority: 'security-data-pricing',
    disposition: 'interview',
    reason: 'Security, data, privacy, and pricing commitments require explicit user authority.',
  }));
}

const requiresUnknownMetric = /(actual|exact|real|실제|정확한|実際|正確な|真实|真實|准确|準確)/i.test(task)
  && /(conversion rate|customer count|revenue|전환율|고객 수|매출|コンバージョン率|顧客数|売上|转化率|轉換率|客户数|客戶數|营收|營收)/i.test(task);
if (requiresUnknownMetric) {
  decisions.push(decision({
    id: 'required-factual-claim', slot: 'required_factual_claim', proposed_value: null,
    evidence: ['task.md'], confidence: 0, impact: 'high', reversibility: 'hard',
    confidence_basis: 'required-fact-source-missing', authority: 'product-data',
    disposition: 'blocked',
    reason: 'The task requires an exact product fact that is not present in repository evidence.',
  }));
}

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

const laneReasons = new Map();
function requestLane(laneId, decisionId) {
  const ids = laneReasons.get(laneId) || [];
  if (!ids.includes(decisionId)) ids.push(decisionId);
  laneReasons.set(laneId, ids);
}

for (const item of decisions) {
  if (item.disposition === 'auto') continue;
  if (item.confidence_basis === 'existing-surface-preservation') continue;
  requestLane('ambiguity_contrarian', item.id);
  if (['audience', 'cta_primary', 'regulated_commitment', 'required_factual_claim'].includes(item.slot)) {
    requestLane('product_context', item.id);
  }
  if (item.slot === 'exit_scope') {
    requestLane('code_context', item.id);
    requestLane('architecture_implications', item.id);
  }
  if (['wow_moment', 'visual_grounding', 'brand_reference_commitment'].includes(item.slot)) {
    requestLane('reference_evidence', item.id);
  }
  if (['wow_moment', 'visual_grounding'].includes(item.slot)) {
    requestLane('ux_quality', item.id);
  }
}

const lanePriority = [
  'ambiguity_contrarian',
  'product_context',
  'reference_evidence',
  'code_context',
  'architecture_implications',
  'ux_quality',
];
const selectedLanes = lanePriority
  .filter((laneId) => laneReasons.has(laneId))
  .slice(0, 2)
  .map((laneId) => ({
    ...lanes.find((lane) => lane.id === laneId),
    decision_ids: laneReasons.get(laneId),
    role: laneId === 'ambiguity_contrarian'
      ? 'omd-critic'
      : laneId === 'reference_evidence' || laneId === 'product_context'
        ? 'omd-ux-researcher'
        : 'omd-ux-engineer',
    output: `council/lanes/${laneId}.json`,
  }));
const autoSnapshot = decisions
  .filter((item) => item.disposition === 'auto')
  .map((item) => ({ id: item.id, proposed_value: item.proposed_value, evidence: item.evidence }));
const autoSnapshotSha256 = crypto.createHash('sha256').update(JSON.stringify(autoSnapshot)).digest('hex');
const dispatchPlan = {
  schema_version: '0.1',
  policy: 'bounded-advisory-frozen-auto',
  dispatch_required: selectedLanes.length > 0,
  max_pre_intake_calls: 2,
  max_pre_ship_contrarian_calls: 1,
  retry_budget: 0,
  auto_snapshot_sha256: autoSnapshotSha256,
  selected_lanes: selectedLanes,
  transition_policy: {
    auto: ['keep'],
    interview: ['interview', 'defer', 'blocked'],
    defer: ['defer', 'interview', 'blocked'],
    blocked: ['blocked'],
    auto_promotion_requires: 'fresh-user-stated-evidence',
  },
  claim_contract: {
    evidence_required: true,
    uncited_claims: 'reject',
    unknown_means_absent: true,
    sole_implementation_owner: 'omd-master',
  },
};

const packetPath = path.join(councilDir, 'context-packet.json');
const ledgerPath = path.join(councilDir, 'decision-ledger.json');
const dispatchPath = path.join(councilDir, 'dispatch-plan.json');
fs.writeFileSync(packetPath, `${JSON.stringify(contextPacket, null, 2)}\n`, 'utf8');
fs.writeFileSync(ledgerPath, `${JSON.stringify(ledger, null, 2)}\n`, 'utf8');
fs.writeFileSync(dispatchPath, `${JSON.stringify(dispatchPlan, null, 2)}\n`, 'utf8');
process.stdout.write(`${ledgerPath}\n`);

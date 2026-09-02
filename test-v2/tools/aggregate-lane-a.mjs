#!/usr/bin/env node
/**
 * aggregate-lane-a.mjs — T3-3 레인 A 집계 (RUBRIC §4·§4.5·§3.7·§7·§8, 2인 패널 2026-09-01 개정).
 *
 * 채점 결과를 보기 전에 쓰여 커밋된다 — 집계 규칙을 결과에 맞춰 고르지 않기 위해서다.
 * 루브릭이 말로만 정한 자리는 여기서 한 가지로 고정하고 헤더에 적는다(아래 「운영 고정」).
 * 이 파일이 루브릭과 다르면 루브릭이 정본이고 이 파일이 버그다.
 *
 * 입력
 *   90-comparison/sessions/lane-a/<evaluator>/chunk-<k>/responses.jsonl   (평가자 2 × 청크 3)
 *   90-comparison/sessions/keys/<evaluator>-chunk-<k>.json                 (슬롯→arm)
 *   90-comparison/sessions/lane-a/<evaluator>/rescore/responses.jsonl      (선택 — 단독 표기 결함 재채점)
 *   90-comparison/captures/lane-a/<brand>/<arm>/rep-N/verify.json           (§4.2 수치부)
 *   03-runs/lane-a/<brand>/<arm>/rep-N/render.html 부재 = abandon (§7)
 *
 * 운영 고정 (루브릭이 정하지 않은 기계적 세부, 2026-09-02 사전 선언)
 *   - 결함 동일성: (code, regionId)가 같고 viewport 집합이 겹치면 같은 결함. 증상의 "같은 시각적
 *     연속체" 판단은 기계가 못 하므로 두 증상을 병기해 리포트에 남긴다.
 *   - 단독 표기 결함: rescore 응답에서 표기하지 않았던 평가자가 같은 동일성으로 표기하면 확정,
 *     아니면 disputed(계수 제외·병기). rescore가 없으면 pending으로 남기고 총점은 계산하되 "partial" 표시.
 *   - 평가자 한쪽 결측 축: 있는 쪽만으로 평균하지 않는다 — 그 칸·축은 미채점(§7 결측)이고
 *     리포트에 열거한다. 총점은 그 축을 빼고 재정규화하지 않는다(재정규화는 N/A-ceiling·N/A-evidence 전용).
 *   - 식별력 정답: identification.brand가 대상 브랜드 id와 같으면 1, "모름"·다른 브랜드는 0.
 *   - α: Krippendorff (2 관측자). 존재 여부 = 두 평가자 결함 동일성 합집합을 단위로 한 nominal(1/0);
 *     severity = 확정 결함의 ordinal(P0<P1<P2 → 0<1<2); 0–4 평정 = ordinal; 9지선다 = nominal.
 *
 * usage: node aggregate-lane-a.mjs [--out <dir>] [--bootstrap 10000] [--seed 20260823]
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const CMP = join(ROOT, "test-v2/90-comparison");
const RUNS = join(ROOT, "test-v2/03-runs/lane-a");
const CAPS = join(CMP, "captures/lane-a");
const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf("--" + n); return i >= 0 ? argv[i + 1] : d; };
const OUT = resolve(opt("out", join(CMP, "reports/lane-a")));
const NBOOT = Number(opt("bootstrap", 10000));
const SEED = Number(opt("seed", 20260823));

const EVALS = ["grok-4.6", "sonnet5"];
const ARMS = ["omd", "hallmark", "uiuxpromax"];
const BRANDS = ["apple", "baemin", "coupang", "figma", "karrot", "musinsa", "naver", "toss", "wanted"];
const W = { defects: 0.20, evidence: 0.40, identification: 0.25, document: 0.15 }; // 레인 A
const DOC_W = [0.25, 0.25, 0.20, 0.15, 0.15];
const Q = 1 / 9;
const SEV = { P0: 0, P1: 1, P2: 2 };
const read = (p) => readFileSync(p, "utf8");
const ceilingManifest = JSON.parse(read(join(CMP, "ceiling/manifest.json")));
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);

// ---------------------------------------------------------------- 응답 적재
const partial = [];
const R = {}; // R[evaluator][brand|rep|arm][axis] = entry ; ceiling answers separate
const CEIL = {}; // CEIL[evaluator][brand][stimulus] = brand answered
const RESCORE = {};
function loadSession(ev, file, keyFile, into) {
  if (!existsSync(file) || !existsSync(keyFile)) { partial.push(`missing ${file}`); return; }
  const key = JSON.parse(read(keyFile));
  for (const line of read(file).split("\n").filter((l) => l.trim())) {
    if (/^SCORING_DONE\b/.test(line.trim())) continue; // 종료 표지(validate-responses.mjs 와 동일 취급) — 데이터가 아니다
    let j; try { j = JSON.parse(line); } catch { partial.push(`unparsable line in ${file}`); continue; }
    // 천장 자극 답(§4.3)은 브랜드 단위라 rep 이 없다 — 행 조회보다 먼저 받는다. (2026-09-03: 행 조회를 먼저 해서 전부
    // 버려지고 모든 브랜드가 CEILING_UNAVAILABLE 로 집계되던 결함을 고쳤다. 규칙 변경 아님 — 적재 순서만.)
    if (j.axis === "identification" && j.identification?.stimulus) {
      if (!(key.ceilingBrands || []).includes(j.brand)) continue;
      ((CEIL[ev] ||= {})[j.brand] ||= {})[j.identification.stimulus] = j.identification.brand;
      continue;
    }
    const row = key.rows.find((r) => r.brand === j.brand && Number(r.rep) === Number(j.rep));
    if (!row) continue;
    if (j.postHocGuess) continue;
    const arm = row.slots[j.slot];
    if (!arm) continue;
    ((into[ev] ||= {})[`${j.brand}|${j.rep}|${arm}`] ||= {})[j.axis] = j;
  }
}
for (const ev of EVALS) {
  for (const k of [1, 2, 3]) loadSession(ev, join(CMP, "sessions/lane-a", ev, `chunk-${k}`, "responses.jsonl"), join(CMP, "sessions/keys", `${ev}-chunk-${k}.json`), R);
  const rs = join(CMP, "sessions/lane-a", ev, "rescore", "responses.jsonl");
  if (existsSync(rs)) loadSession(ev, rs, join(CMP, "sessions/keys", `${ev}-rescore.json`), RESCORE);
}

// ---------------------------------------------------------------- 축 1 — 결함 합의
const vpSet = (d) => new Set(Array.isArray(d.viewport) ? d.viewport : [d.viewport]);
const same = (a, b) => a.code === b.code && a.regionId === b.regionId && [...vpSet(a)].some((v) => vpSet(b).has(v));
function defectsFor(cellKey) {
  const per = EVALS.map((ev) => R[ev]?.[cellKey]?.defects?.defects ?? null);
  if (per.some((p) => p === null)) return { missing: true };
  const [A, B] = per;
  const counted = [], single = [], disputed = [], severityDisagree = [];
  const usedB = new Set();
  for (const a of A) {
    const bi = B.findIndex((b, i) => !usedB.has(i) && same(a, b));
    if (bi >= 0) {
      usedB.add(bi);
      const b = B[bi];
      let sev = a.severity;
      if (a.severity !== b.severity) { sev = SEV[a.severity] > SEV[b.severity] ? a.severity : b.severity; severityDisagree.push({ ...a, severities: [a.severity, b.severity], adopted: sev }); }
      counted.push({ ...a, severity: sev, symptoms: [a.symptom, b.symptom] });
    } else single.push({ by: EVALS[0], d: a });
  }
  B.forEach((b, i) => { if (!usedB.has(i)) single.push({ by: EVALS[1], d: b }); });
  // 단독 표기 → 재채점 대조
  const pending = [];
  for (const s of single) {
    const other = EVALS.find((e) => e !== s.by);
    const re = RESCORE[other]?.[cellKey]?.defects?.defects;
    if (!re) { pending.push(s); continue; }
    if (re.some((d) => same(d, s.d))) counted.push({ ...s.d, symptoms: [s.d.symptom], viaRescore: true });
    else disputed.push(s);
  }
  const n = { P0: 0, P1: 0, P2: 0 };
  for (const d of counted) n[d.severity]++;
  const score = Math.max(0, 100 - 40 * n.P0 - 10 * n.P1 - 3 * n.P2);
  return { score, n, counted, pending, disputed, severityDisagree };
}

// ---------------------------------------------------------------- 축 2·3·4
function evidenceFor(brand, arm, rep, cellKey) {
  const vp = join(CAPS, brand, arm, `rep-${rep}`, "verify.json");
  let numeric = 0, usable = false;
  if (existsSync(vp)) { const v = JSON.parse(read(vp)); usable = v.usable !== false; numeric = usable ? Number(v.numericScore) || 0 : 0; }
  // §4.2: eligible 수치 필드 <2 인 스냅샷은 "비교 입력 불충분"이다. naver는 첫 캡처에 대표 이미지가 없어(C-NAVER-H1) verify가
  // 0필드로 unusable — 이 축을 0점으로 세면 세 arm을 같이 깎는 것이 아니라 스냅샷 결손을 arm에 전가하는 것이다. 처리(재정규화 N/A
  // vs 0점)는 재봉인 판정 사안이므로 판정 전까지 이 칸·축은 미채점(total null)으로 두고 리포트에 이유를 남긴다(2026-09-02).
  // 판정 2026-09-02 (docs/reviews/t3-naver-evidence-axis-2026-09-02.md, q1=a): 근거 축 N/A-evidence — §4.5식 재정규화, B_k에서 제외.
  if (existsSync(vp) && !usable) return { na: true, reason: "N/A-evidence (snapshot has <2 eligible numeric fields; C-NAVER-H1)" };
  const ratings = EVALS.map((ev) => R[ev]?.[cellKey]?.evidence?.evidenceSemantic?.rating);
  if (ratings.some((r) => !Number.isInteger(r))) return { missing: true, numeric };
  const semantic = mean(ratings.map((r) => r * 25));
  return { score: 0.7 * numeric + 0.3 * semantic, numeric, semantic, ratings };
}
function ceilingC(brand) {
  // §4.3: C_b 분모는 manifest.usedForCb(4개)뿐. 평가자가 그 밖의 자극에 답했더라도 세지 않는다.
  const used = new Set((Object.values(ceilingManifest.results).find((r) => r.brand === brand)?.usedForCb || []).flatMap((l) => [l, `${l}.png`]));
  const stimuli = new Set();
  for (const ev of EVALS) for (const s of Object.keys(CEIL[ev]?.[brand] || {})) if (used.has(s)) stimuli.add(s);
  if (!stimuli.size) return null;
  let correct = 0, total = 0;
  for (const s of stimuli) for (const ev of EVALS) { const a = CEIL[ev]?.[brand]?.[s]; if (a === undefined) continue; total++; if (a === brand) correct++; }
  return { C: total ? correct / total : null, stimuli: [...stimuli], answered: total, expected: 4 * EVALS.length };
}
function identificationFor(brand, cellKey, ceiling) {
  if (!ceiling || ceiling.C === null) return { na: true, reason: "CEILING_UNAVAILABLE" };
  if (ceiling.C <= Q + 0.10) return { na: true, reason: "N/A-ceiling (C_b <= q+0.10)", C: ceiling.C };
  const xs = EVALS.map((ev) => R[ev]?.[cellKey]?.identification?.identification?.brand);
  if (xs.some((x) => x === undefined)) return { missing: true };
  const g = mean(xs.map((x) => (x === brand ? 1 : 0)));
  const I = 100 * Math.min(1, Math.max(0, (g - Q) / (ceiling.C - Q)));
  return { score: I, g, C: ceiling.C, answers: xs };
}
function documentFor(cellKey) {
  const per = EVALS.map((ev) => R[ev]?.[cellKey]?.document?.document?.items);
  if (per.some((p) => !Array.isArray(p) || p.length !== 5)) return { missing: true };
  const scores = per.map((items) => 25 * items.reduce((acc, it, i) => acc + DOC_W[i] * (Number(it.rating) || 0), 0));
  return { score: mean(scores), perEvaluator: scores, ratings: per.map((items) => items.map((it) => it.rating)) };
}

// ---------------------------------------------------------------- 칸별 총점
const cells = [];
const ceilings = Object.fromEntries(BRANDS.map((b) => [b, ceilingC(b)]));
for (const brand of BRANDS) for (const arm of ARMS) for (let rep = 1; rep <= 4; rep++) {
  const cellKey = `${brand}|${rep}|${arm}`;
  const abandon = !existsSync(join(RUNS, brand, arm, `rep-${rep}`, "render.html"));
  const cell = { brand, arm, rep, abandon, axes: {} };
  if (abandon) { cell.total = 0; cells.push(cell); continue; }
  cell.axes.defects = defectsFor(cellKey);
  cell.axes.evidence = evidenceFor(brand, arm, rep, cellKey);
  cell.axes.identification = identificationFor(brand, cellKey, ceilings[brand]);
  cell.axes.document = documentFor(cellKey);
  const avail = Object.entries(W).filter(([k]) => !cell.axes[k].na);
  const missing = avail.filter(([k]) => cell.axes[k].missing);
  cell.missingAxes = missing.map(([k]) => k + (cell.axes[k].reason ? ` (${cell.axes[k].reason.split(" — ")[0]})` : ""));
  if (missing.length) { cell.total = null; cells.push(cell); continue; }
  const num = avail.reduce((a, [k, w]) => a + w * cell.axes[k].score, 0);
  const den = avail.reduce((a, [, w]) => a + w, 0);
  cell.total = num / den;
  cells.push(cell);
}

// ---------------------------------------------------------------- 브랜드·arm 집계 + PASS
const byArm = {};
for (const arm of ARMS) {
  const a = { arm, brands: {}, macro: {}, abandons: 0, P0runs: 0, totalMean: null, pass: {}, incomplete: [] };
  for (const brand of BRANDS) {
    const runs = cells.filter((c) => c.arm === arm && c.brand === brand);
    a.abandons += runs.filter((r) => r.abandon).length;
    a.P0runs += runs.filter((r) => r.axes.defects?.n?.P0 > 0).length;
    const totals = runs.map((r) => r.total);
    if (totals.some((t) => t === null)) a.incomplete.push(brand);
    a.brands[brand] = { Tbar: totals.every((t) => t !== null) ? mean(totals) : null, allAbandon: runs.every((r) => r.abandon) };
    for (const k of Object.keys(W)) {
      const s = runs.map((r) => (r.abandon ? 0 : r.axes[k]?.na ? null : r.axes[k]?.score ?? null));
      a.brands[brand][k] = s.every((x) => x === null) ? null : s.some((x) => x === null) ? null : mean(s);
    }
  }
  const Tb = BRANDS.map((b) => a.brands[b].Tbar);
  a.totalMean = Tb.every((t) => t !== null) ? mean(Tb) : null;
  for (const k of Object.keys(W)) {
    // B_k = 그 축이 성립하는 브랜드. 아직 채점되지 않은 칸(axes[k] 부재)은 "성립 안 함"도 "성립"도 아니므로 분모에서 뺀다 —
    // 부분 집계에서 미채점 브랜드가 |B_k|로 잡히던 것을 고쳤다(2026-09-02).
    const Bk = BRANDS.filter((b) => cells.some((c) => c.arm === arm && c.brand === b && !c.abandon && c.axes[k] && !c.axes[k].na));
    const vals = Bk.map((b) => a.brands[b][k]);
    a.macro[k] = { Bk: Bk.length, M: vals.length && vals.every((v) => v !== null) ? mean(vals) : null };
  }
  a.pass = {
    total75: a.totalMean !== null && a.totalMean >= 75,
    axes60: Object.values(a.macro).every((m) => m.Bk === 0 || (m.M !== null && m.M >= 60)),
    abandon: a.abandons <= 3 && !BRANDS.some((b) => a.brands[b].allAbandon),
    p0: a.P0runs <= 1,
  };
  byArm[arm] = a;
}

// ---------------------------------------------------------------- bootstrap (paired, 브랜드→run)
function mulberry32(s) { return () => { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function bootstrap() {
  const complete = ARMS.every((arm) => byArm[arm].totalMean !== null);
  if (!complete) return { skipped: "incomplete totals" };
  const rnd = mulberry32(SEED);
  const ranked = [...ARMS].sort((x, y) => byArm[y].totalMean - byArm[x].totalMean);
  const [top, second] = ranked;
  const diffs = [];
  for (let i = 0; i < NBOOT; i++) {
    const acc = { [top]: [], [second]: [] };
    for (let bi = 0; bi < BRANDS.length; bi++) {
      const brand = BRANDS[Math.floor(rnd() * BRANDS.length)];
      for (let ri = 0; ri < 4; ri++) {
        const rep = 1 + Math.floor(rnd() * 4);
        for (const arm of [top, second]) acc[arm].push(cells.find((c) => c.brand === brand && c.arm === arm && c.rep === rep).total);
      }
    }
    diffs.push(mean(acc[top]) - mean(acc[second]));
  }
  diffs.sort((x, y) => x - y);
  const lo = diffs[Math.floor(0.025 * NBOOT)], hi = diffs[Math.floor(0.975 * NBOOT)];
  const observed = byArm[top].totalMean - byArm[second].totalMean;
  const allPass = Object.values(byArm[top].pass).every(Boolean);
  return { top, second, observed, ci95: [lo, hi], soleWinner: allPass && observed >= 5 && lo > 0, verdict: allPass && observed >= 5 && lo > 0 ? `${top} 단독 우승` : "NO DECISIVE WINNER" };
}

// ---------------------------------------------------------------- Krippendorff α (2 관측자)
function alpha(units, metric) {
  // units: [[v1, v2], ...] 값 쌍 (둘 다 있어야 함)
  const pairs = units.filter((u) => u[0] !== undefined && u[1] !== undefined && u[0] !== null && u[1] !== null);
  if (pairs.length < 2) return null;
  const vals = [...new Set(pairs.flat())].sort((a, b) => a - b);
  const idx = Object.fromEntries(vals.map((v, i) => [v, i]));
  const k = vals.length; const O = Array.from({ length: k }, () => Array(k).fill(0));
  for (const [a, b] of pairs) { O[idx[a]][idx[b]] += 1; O[idx[b]][idx[a]] += 1; }
  const n = 2 * pairs.length; const nc = O.map((r) => r.reduce((x, y) => x + y, 0));
  const delta = (i, j) => { if (metric === "nominal") return i === j ? 0 : 1; let s = 0; for (let g = Math.min(i, j); g <= Math.max(i, j); g++) s += nc[g]; s -= (nc[i] + nc[j]) / 2; return s * s; };
  let Do = 0, De = 0;
  for (let i = 0; i < k; i++) for (let j = 0; j < k; j++) { Do += O[i][j] * delta(i, j); De += nc[i] * nc[j] * delta(i, j); }
  Do /= n; De /= n * (n - 1);
  return De === 0 ? (Do === 0 ? 1 : 0) : 1 - Do / De;
}
const agreement = (() => {
  const exist = [], sev = [], ratings = [], brand9 = [];
  for (const c of cells) {
    if (c.abandon) continue;
    const key = `${c.brand}|${c.rep}|${c.arm}`;
    const A = R[EVALS[0]]?.[key]?.defects?.defects, B = R[EVALS[1]]?.[key]?.defects?.defects;
    if (A && B) {
      const union = []; for (const a of A) union.push(a); for (const b of B) if (!union.some((u) => same(u, b))) union.push(b);
      for (const u of union) exist.push([A.some((d) => same(d, u)) ? 1 : 0, B.some((d) => same(d, u)) ? 1 : 0]);
      for (const a of A) { const b = B.find((x) => same(x, a)); if (b) sev.push([SEV[a.severity], SEV[b.severity]]); }
    }
    const ev = EVALS.map((e) => R[e]?.[key]?.evidence?.evidenceSemantic?.rating); if (ev.every(Number.isInteger)) ratings.push(ev);
    const docs = EVALS.map((e) => R[e]?.[key]?.document?.document?.items); if (docs.every((d) => Array.isArray(d) && d.length === 5)) for (let i = 0; i < 5; i++) ratings.push([docs[0][i].rating, docs[1][i].rating]);
    const ids = EVALS.map((e) => R[e]?.[key]?.identification?.identification?.brand); if (ids.every((x) => x !== undefined)) brand9.push(ids.map((x) => BRANDS.indexOf(x) >= 0 ? BRANDS.indexOf(x) : 9));
  }
  for (const b of BRANDS) for (const s of ceilings[b]?.stimuli || []) { const ids = EVALS.map((e) => CEIL[e]?.[b]?.[s]); if (ids.every((x) => x !== undefined)) brand9.push(ids.map((x) => BRANDS.indexOf(x) >= 0 ? BRANDS.indexOf(x) : 9)); }
  const out = {
    existence: { alpha: alpha(exist, "nominal"), units: exist.length, threshold: 0.67 },
    severityAndRatings: { alpha: alpha([...sev, ...ratings], "ordinal"), units: sev.length + ratings.length, threshold: 0.80 },
    brand9: { alpha: alpha(brand9, "nominal"), units: brand9.length, threshold: 0.67 },
  };
  for (const v of Object.values(out)) v.status = v.alpha === null ? "N/A" : v.alpha >= v.threshold ? "OK" : "INCONCLUSIVE";
  return out;
})();

// ---------------------------------------------------------------- 출력
const pendingDefects = cells.flatMap((c) => (c.axes.defects?.pending || []).map((p) => ({ cell: `${c.brand}/${c.arm}/rep-${c.rep}`, by: p.by, d: p.d })));
const disputedDefects = cells.flatMap((c) => (c.axes.defects?.disputed || []).map((p) => ({ cell: `${c.brand}/${c.arm}/rep-${c.rep}`, by: p.by, d: p.d })));
const report = {
  generatedAt: new Date().toISOString(), lane: "A", evaluators: EVALS, weights: W, seed: SEED, bootstrapN: NBOOT,
  partial: partial.length ? partial : null,
  conditions: [
    "arm 호스트 grok-4.6 (grok build CLI) · 이미지 채널 Grok Imagine · 평가자 2계열(xai·anthropic)의 독립성 한계 §3.2a-2",
    "첫 렌더 = 제출 render.html (run.json outputs.firstRender) — 라이브 하네스 캡처 아님",
    "레인 B 부재 — 레인 A 단독 결론. 교차 레인·종합 총점 없음 (§1)",
    "파일럿 기계 검증기(SHA 73d13200…)의 §7.1.8 탐지기는 절차가 이미 적은 D-*와 UIUX Pro Max 변형 가운데 D-P2-1과 ui-ux-pro-max를 놓쳤으므로 그 기간의 도구 PASS는 해당 표지의 부재를 보증하지 않으며, 개정기(SHA ae588ca3…)로 기존 23건을 재검증한 결과 20건은 잔존이 없었고 잔존이 확인된 apple/omd rep-2·3·4는 채점 제출 전에 재전사했다 (grok 판정 2026-09-02 Q3)",
    "α 미달 축은 INCONCLUSIVE — 원점수 병기, 합의점수 대체 없음 (§3.7)",
  ],
  ceilings, cells, byArm, bootstrap: bootstrap(), agreement, pendingDefects, disputedDefects,
  cellsMissingAxes: cells.filter((c) => c.missingAxes?.length).map((c) => ({ cell: `${c.brand}/${c.arm}/rep-${c.rep}`, missing: c.missingAxes })),
};
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "aggregate.json"), JSON.stringify(report, null, 1) + "\n");
const f = (x) => (x === null || x === undefined ? "—" : typeof x === "number" ? x.toFixed(1) : String(x));
const md = [
  `# 레인 A 집계 — ${report.generatedAt}${partial.length ? " (PARTIAL)" : ""}`, "",
  "## 조건부", "", ...report.conditions.map((c) => `- ${c}`), "",
  "## arm별", "", "| arm | 총점 | 결함 M | 근거 M | 식별 M (|B_k|) | 문서 M | abandon | P0 run | PASS |", "|---|---:|---:|---:|---:|---:|---:|---:|---|",
  ...ARMS.map((a) => { const x = byArm[a]; return `| ${a} | ${f(x.totalMean)} | ${f(x.macro.defects.M)} | ${f(x.macro.evidence.M)} | ${f(x.macro.identification.M)} (${x.macro.identification.Bk}) | ${f(x.macro.document.M)} | ${x.abandons} | ${x.P0runs} | ${Object.values(x.pass).every(Boolean) ? "PASS" : "FAIL"} ${JSON.stringify(x.pass)} |`; }), "",
  `## 동률·우승 (§7)`, "", "```", JSON.stringify(report.bootstrap), "```", "",
  "## 평가자 일치도 (§3.7)", "", ...Object.entries(agreement).map(([k, v]) => `- ${k}: α=${v.alpha === null ? "N/A" : v.alpha.toFixed(3)} (n=${v.units}, 임계 ${v.threshold}) → ${v.status}`), "",
  `## 결함 합의`, "", `- 확정 결함 ${cells.reduce((n, c) => n + (c.axes.defects?.counted?.length || 0), 0)} · 재채점 대기 ${pendingDefects.length} · disputed ${disputedDefects.length}`, "",
  `## 미채점 칸·축`, "", ...(report.cellsMissingAxes.length ? report.cellsMissingAxes.map((m) => `- ${m.cell}: ${m.missing.join(",")}`) : ["- 없음"]), "",
].join("\n");
writeFileSync(join(OUT, "aggregate.md"), md);
console.log(md);
console.log(`AGGREGATE_DONE cells=${cells.length} partial=${partial.length}`);

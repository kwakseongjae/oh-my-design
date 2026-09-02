#!/usr/bin/env node
/**
 * wave-run.mjs — T2-1 마이그레이션 웨이브 러너 (브랜드 단위 파이프라인, 공유 동시성 예산)
 *
 * 왜 있나 (2026-09-02, 웨이브 45 실측): 워커 15분 · F3 14분 · 검토 12분 · 개정 8분 — 브랜드당
 * ≈49분의 LLM 시간을 **층 단위로 5브랜드 직렬** 실행해 웨이브 벽시계가 4시간 25분이었다
 * (03:10→07:35). 층 사이는 오케스트레이터가 손으로 이어 붙였고, 그 손이 사고를 냈다:
 *   - 같은 브랜드에 검토와 개정을 동시에 투입 (웨이브 44 megabox — 검토 폐기)
 *   - 전경 `&` 실행 → 완료 알림 없이 파이프라인 정지
 *   - 프롬프트 조립 드리프트: README 레시피는 worker-addendum **전문** 부착인데, 웨이브
 *     44–46 워커 프롬프트에는 마지막 절만 들어갔다 — 예방 조항 여덟 개가 빠진 채 돌았다.
 *
 * 이 러너는 브랜드마다 워커 → 게이트 → F3 → 기계검사 → 검토 → (개정 → 재실측) 체인을
 * 독립 실행하고, 동시 실행 수만 예산(scripts/agent-budget.sh)으로 묶는다. 한 브랜드에
 * 두 호출이 겹치는 일은 구조상 불가능하다. 프롬프트는 prompts/ 파일에서만 조립한다.
 *
 * usage:
 *   node scripts/wave-run.mjs --wave 46 --brands microsoft,mikan,mildang,millie,minimax \
 *        --scratch <DIR> [--concurrency auto|N] [--max N] [--rereview scoped|always]
 *        [--effort xhigh|high] [--set brand=stage,...] [--dry-run] [--print <brand>:<stage>]
 *
 * 브랜드 종료 상태:
 *   done            검토 PASS + 기계검사 전부 OK
 *   human:scoped    검토 FAIL ≤2 → 개정 → 재실측표 생성. 오케스트레이터가 remeasure-<b>.md로 판정
 *   human:fix-cap   개정 2회 상한 (검토 비전수성 — 나머지는 판정문에 기록하고 닫는다)
 *   human:gate*     게이트 FAIL — 워커/F3 산출 자체가 거부됨
 *   human:mech      기계검사(1:1·use·적합성) 자동 정정 1회 후에도 불일치
 *   blocked:grok    402/인증/비정상 종료. 두 번 연속이면 새 호출을 멈춘다. 같은 명령으로 재개.
 *
 * 상태는 <scratch>/state.json. 호출별 실측(초·USD·턴)은 docs/design-md-weight/metrics/wave-<N>.jsonl
 * 에 누적된다 — "왜 오래 걸리나"는 그 파일로 답한다.
 */
import { spawn, spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync, appendFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MIGRATED = join(ROOT, "docs/design-md-weight/migrated");
const PROMPTS = join(ROOT, "docs/design-md-weight/prompts");
const TOOL = join(ROOT, "test-v2/tools/migrate-reference.mjs");
const MODEL = "grok-4.6";
const MAX_FIX = 2;

// ---------------------------------------------------------------- args
const argv = process.argv.slice(2);
const opt = (name, def) => { const i = argv.indexOf("--" + name); return i >= 0 ? (argv[i + 1] ?? true) : def; };
const flag = (name) => argv.includes("--" + name);
const WAVE = opt("wave", null);
const BRANDS = String(opt("brands", "")).split(",").map((s) => s.trim()).filter(Boolean);
const SCRATCH = resolve(String(opt("scratch", join(tmpdir(), `omd-wave-${WAVE}`))));
const CONC = String(opt("concurrency", "auto"));
const MAX = Number(opt("max", 5));
const REREVIEW = String(opt("rereview", "scoped"));
const EFFORT = opt("effort", null);
// 스테이지별 effort (없으면 --effort). 워커는 기본 유지, F3·검토만 낮추는 실험이 가능하게.
const EFFORT_BY = { worker: opt("effort-worker", null), f3: opt("effort-f3", null), review: opt("effort-review", null), fix: opt("effort-fix", null), mechfix: opt("effort-fix", null), gatefix: opt("effort-fix", null) };
// 마라톤 내구성: 402/429/5xx·비정상 종료는 백오프 후 재시도, 소진되면 claude -p(opus) 폴백(옵션).
const RETRIES = Number(opt("retries", 3));
const BACKOFF = String(opt("backoff", "300,900,1800")).split(",").map((s) => Number(s.trim()) || 300);
const FALLBACK = String(opt("fallback", "none")); // none | claude
const FALLBACK_MODEL = String(opt("fallback-model", "opus"));
const DRY = flag("dry-run");
const PRINT = opt("print", null);
const SET = String(opt("set", ""));

if (!WAVE || (!BRANDS.length && !PRINT)) {
  console.error("usage: wave-run.mjs --wave N --brands a,b,c [--scratch DIR] [--concurrency auto|N] [--dry-run] [--print brand:stage]");
  process.exit(1);
}

// ---------------------------------------------------------------- helpers
const now = () => new Date().toISOString();
const hhmm = () => new Date().toTimeString().slice(0, 5);
const log = (m) => console.log(`[${hhmm()}] ${m}`);
const read = (p) => readFileSync(p, "utf8");
const sh = (cmd, args, opts = {}) => spawnSync(cmd, args, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, ...opts });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const P = (f) => read(join(PROMPTS, f));
const paths = (b) => ({
  dir: join(MIGRATED, b),
  orig: join(ROOT, "web/references", b, "DESIGN.md"),
  sib: join(ROOT, "web/references", b, ".verification.md"),
});

// ---------------------------------------------------------------- prompts (단일 조립 지점)
function basePrompt(brand, kind) {
  const r = sh("node", [TOOL, "--brand", brand, "--print-prompt", kind]);
  if (r.status !== 0) throw new Error(`print-prompt ${kind} ${brand}: ${r.stderr}`);
  return r.stdout;
}

function prompt(brand, stage, extra = {}) {
  const diet = "\n" + P("diet.md");
  const target = `\n대상: ${brand}\nsibling(dotfile, 경로 직접): web/references/${brand}/.verification.md\n`;
  switch (stage) {
    case "worker":
      return basePrompt(brand, "worker") + "\n" + P("worker-addendum.md") + diet;
    case "f3":
      return basePrompt(brand, "auditor") + "\n" + P("f3-conditions.md") + target + diet;
    case "review":
      return (
        P("review-header.md") +
        `\n대상: ${brand}\n산출물: ${MIGRATED}/${brand}/{DESIGN.md,provenance.md,migration-log.md,audit-log.md}\n` +
        `원본: ${ROOT}/web/references/${brand}/DESIGN.md\nsibling(dotfile, 경로 직접): ${ROOT}/web/references/${brand}/.verification.md\n` +
        diet
      );
    case "fix":
      return P("fix-template.md").replaceAll("{{brand}}", brand).replace("{{verdict}}", () => extra.verdict ?? "") + diet;
    case "mechfix":
      return P("mechfix-template.md").replaceAll("{{brand}}", brand).replace("{{report}}", () => extra.report ?? "") + diet;
    case "gatefix":
      return P("gatefix-template.md").replaceAll("{{brand}}", brand).replace("{{report}}", () => extra.report ?? "") + diet;
    default:
      throw new Error(`unknown stage ${stage}`);
  }
}

// ---------------------------------------------------------------- mechanical checks
function mech(brand) {
  const gateRes = sh("node", [TOOL, "--brand", brand, "--gate-only"]);
  let gate = { verdict: "ERROR", problems: [] };
  try { gate = JSON.parse(gateRes.stdout); } catch { /* 출력이 JSON이 아니면 ERROR로 남긴다 */ }
  const lim = sh("node", [join(ROOT, "scripts/check-limiter-ledger.mjs"), brand]);
  const use = sh("node", [join(ROOT, "scripts/check-yaml-use-landing.mjs"), "--list", brand]);
  const conf = sh("node", [
    "-e",
    "const fs=require('fs');const{inspectDesignMd}=require(process.argv[1]);" +
      "const c=inspectDesignMd(fs.readFileSync(process.argv[2],'utf8')).conformance;" +
      "console.log(JSON.stringify({portable_core:c.portable_core,structurally_valid:c.structurally_valid," +
      "failed:Object.entries(c.checks||{}).filter(([,v])=>!v.pass).map(([k])=>k)}))",
    join(ROOT, "scripts/design-md-core.cjs"),
    join(MIGRATED, brand, "DESIGN.md"),
  ]);
  let conformance = { portable_core: false, failed: ["parse-error"] };
  try { conformance = JSON.parse(conf.stdout); } catch { /* 위와 같다 */ }
  const r = {
    gate: gate.verdict,
    gateProblems: (gate.problems || []).map((p) => p.check || String(p)),
    gateProblemsFull: gate.problems || [],
    limiter: { ok: lim.status === 0, line: (lim.stdout || lim.stderr).trim() },
    use: { ok: use.status === 0, line: (use.stdout || use.stderr).trim() },
    conformance,
  };
  r.ok = r.gate === "PASS" && r.limiter.ok && r.use.ok && conformance.portable_core === true;
  r.report = [
    `gate: ${r.gate}${r.gateProblems.length ? " " + r.gateProblems.join(",") : ""}`,
    `limiter: ${r.limiter.line}`,
    `use-landing: ${r.use.line}`,
    `conformance: portable_core=${conformance.portable_core}${conformance.failed?.length ? " failed=" + conformance.failed.join(",") : ""}`,
  ].join("\n");
  return r;
}

// ---------------------------------------------------------------- grok
// 러너가 죽으면 자식 grok도 같이 죽인다 — 전경 타임아웃으로 러너만 죽고 grok이 고아로
// 남아 산출물을 계속 고치는 상황을 막는다 (2026-09-02 첫 실행에서 실제로 겪었다).
const children = new Set();
for (const sig of ["SIGINT", "SIGTERM", "SIGHUP"]) {
  process.on(sig, () => {
    for (const c of children) { try { c.kill("SIGTERM"); } catch { /* 이미 죽었다 */ } }
    process.exit(130);
  });
}

function grokCall(brand, label, text, { approve, effort }) {
  const pf = join(SCRATCH, `${label}-${brand}.txt`);
  const oj = join(SCRATCH, `${label}-${brand}.out.json`);
  const ot = join(SCRATCH, `${label}-${brand}.out`);
  writeFileSync(pf, text);
  const args = ["--prompt-file", pf, "-m", MODEL, "--cwd", ROOT, "--output-format", "json"];
  if (approve) args.push("--always-approve");
  const eff = effort ?? EFFORT;
  if (eff) args.push("--reasoning-effort", String(eff));
  const t0 = Date.now();
  return new Promise((res) => {
    const child = spawn("grok", args, { cwd: ROOT, stdio: ["ignore", "pipe", "pipe"] });
    children.add(child);
    child.on("exit", () => children.delete(child));
    let out = "", err = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (err += d));
    child.on("error", (e) => { err += String(e); });
    child.on("close", (code) => {
      writeFileSync(oj, out + (err ? "\n--- stderr ---\n" + err : ""));
      let j = null;
      try { j = JSON.parse(out); } catch { /* 402 등은 JSON이 아닐 수 있다 */ }
      const textOut = j?.text ?? out;
      writeFileSync(ot, textOut);
      const http = (out + err).match(/"http_status":\s*(\d{3})/);
      res({
        code, sec: Math.round((Date.now() - t0) / 1000), text: textOut,
        cost: typeof j?.total_cost_usd === "number" ? j.total_cost_usd : null,
        turns: j?.num_turns ?? null, http: http ? Number(http[1]) : null, outFile: ot,
      });
    });
  });
}

// claude -p 폴백 — grok이 재시도 후에도 죽었을 때만. 같은 프롬프트, 같은 sentinel. 쓰기 단계는
// 권한 생략(프롬프트가 범위를 제한한다), 검토는 "고치지 마라"가 프롬프트에 있다.
// 비용은 Claude OAuth 주간 한도에서 나간다 — 사용자 80% 가드 대상. 마라톤은 옵션으로만 켠다.
function claudeCall(brand, label, text) {
  const oj = join(SCRATCH, `${label}-${brand}.claude.out.json`);
  const ot = join(SCRATCH, `${label}-${brand}.out`);
  const bin = process.env.CLAUDE_BIN || "claude";
  const args = ["-p", "--model", FALLBACK_MODEL, "--output-format", "json", "--dangerously-skip-permissions"];
  const t0 = Date.now();
  return new Promise((res) => {
    const child = spawn(bin, args, { cwd: ROOT, stdio: ["pipe", "pipe", "pipe"] });
    children.add(child);
    child.on("exit", () => children.delete(child));
    let out = "", err = "";
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (err += d));
    child.on("error", (e) => { err += String(e); });
    child.stdin.end(text);
    child.on("close", (code) => {
      writeFileSync(oj, out + (err ? "\n--- stderr ---\n" + err : ""));
      let j = null;
      try { j = JSON.parse(out); } catch { /* 비정상 출력 */ }
      const textOut = j?.result ?? out;
      writeFileSync(ot, textOut);
      res({ code, sec: Math.round((Date.now() - t0) / 1000), text: textOut, cost: typeof j?.total_cost_usd === "number" ? j.total_cost_usd : null, turns: j?.num_turns ?? null, http: null, outFile: ot, via: `claude:${FALLBACK_MODEL}` });
    });
  });
}

const SENT = { worker: /DONE migrated=1/, f3: /AUDIT_DONE/, review: /REVIEW_DONE/, fix: /FIX_DONE/, mechfix: /FIX_DONE/, gatefix: /FIX_DONE/ };
const RETRYABLE = new Set([402, 408, 425, 429, 500, 502, 503, 504, 529]);

const METRICS = join(ROOT, "docs/design-md-weight/metrics", `wave-${WAVE}.jsonl`);
function metric(o) {
  mkdirSync(dirname(METRICS), { recursive: true });
  appendFileSync(METRICS, JSON.stringify({ ts: now(), wave: WAVE, ...o }) + "\n");
}

// ---------------------------------------------------------------- verdict + remeasure
function parseVerdict(text) {
  const m = [...text.matchAll(/REVIEW_DONE\s+\S+\s+(PASS|FAIL)\s*(\d+)?/g)].pop();
  if (m) return { verdict: m[1], n: m[1] === "FAIL" ? Number(m[2] || 0) || 1 : 0 };
  const f = [...text.matchAll(/\bFAIL\s+(\d+)/g)].pop();
  if (f) return { verdict: "FAIL", n: Number(f[1]) };
  if (/\bPASS\b/.test(text)) return { verdict: "PASS", n: 0 };
  return { verdict: "UNKNOWN", n: 0 };
}

function verdictBody(outFile, text) {
  const r = sh("zsh", [join(ROOT, "scripts/extract-verdict.sh"), outFile]);
  return r.status === 0 && r.stdout.trim() ? r.stdout : text;
}

const countIn = (file, needle) => (existsSync(file) ? read(file).split(needle).length - 1 : "-");

function remeasure(brand, verdict) {
  const p = paths(brand);
  const files = {
    ORIG: p.orig, DEST: join(p.dir, "DESIGN.md"), PROV: join(p.dir, "provenance.md"),
    LOG: join(p.dir, "migration-log.md"), AUDIT: join(p.dir, "audit-log.md"), SIB: p.sib,
  };
  const rows = [];
  const re = /^\|\s*`([^`]+)`\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|/gm;
  for (const m of verdict.matchAll(re)) {
    const [, s, o, de, pr, lo, au, si] = m;
    const after = Object.fromEntries(Object.entries(files).map(([k, f]) => [k, countIn(f, s)]));
    rows.push({ s, before: { ORIG: +o, DEST: +de, PROV: +pr, LOG: +lo, AUDIT: +au, SIB: +si }, after });
  }
  const lines = [
    `# 재실측 — ${brand} (개정 후, ${now()})`, "",
    "| 문자열 | ORIG | DEST 전→후 | PROV 전→후 | LOG 전→후 | AUDIT 전→후 |", "|---|---:|---:|---:|---:|---:|",
  ];
  for (const r of rows)
    lines.push(`| \`${r.s}\` | ${r.after.ORIG} | ${r.before.DEST}→${r.after.DEST} | ${r.before.PROV}→${r.after.PROV} | ${r.before.LOG}→${r.after.LOG} | ${r.before.AUDIT}→${r.after.AUDIT} |`);
  if (!rows.length) lines.push("(판정문에 실측표가 없어 자동 재실측 불가 — 판정문 원문으로 판정)");
  const changed = rows.filter((r) => r.before.DEST !== r.after.DEST || r.before.PROV !== r.after.PROV || r.before.LOG !== r.after.LOG).length;
  lines.push("", `변한 행 ${changed}/${rows.length}. 판정 규칙: 소실형은 DEST 0→≥1 · 발명/승격형은 DEST→0(원장 유지) · 융합형은 원본 표기 복귀. LOG dest가 새 수와 맞는지(E2) 같이 본다.`);
  const md = lines.join("\n") + "\n";
  writeFileSync(join(SCRATCH, `remeasure-${brand}.md`), md);
  return { rows: rows.length, changed, md };
}

// ---------------------------------------------------------------- print mode
if (PRINT) {
  const [b, s] = String(PRINT).split(":");
  process.stdout.write(prompt(b, s, { verdict: "<판정문 전문이 여기 들어간다>", report: "<기계검사 출력이 여기 들어간다>" }));
  process.exit(0);
}

// ---------------------------------------------------------------- state + scheduler
mkdirSync(SCRATCH, { recursive: true });
const STATE = join(SCRATCH, "state.json");
const state = existsSync(STATE) ? JSON.parse(read(STATE)) : { wave: WAVE, startedAt: now(), brands: {} };
const save = () => writeFileSync(STATE, JSON.stringify(state, null, 1));

let running = 0, abort = false, consecutiveGrokFail = 0;
function budget() {
  if (CONC !== "auto") return Math.max(1, Number(CONC) || 1);
  const r = sh("zsh", [join(ROOT, "scripts/agent-budget.sh"), String(MAX)]);
  return Math.max(1, Number(String(r.stdout).trim()) || 1);
}
async function withSlot(label, fn) {
  while (running >= budget()) await sleep(15000);
  running++;
  log(`▶ ${label} (동시 ${running})`);
  try { return await fn(); } finally { running--; }
}

function detectStart(brand) {
  const d = join(MIGRATED, brand);
  const has = (f) => existsSync(join(d, f));
  if (has("DESIGN.md") && has("provenance.md") && has("migration-log.md")) {
    if (has("audit-log.md")) return "gate2";
    return "gate1";
  }
  return "worker";
}

const terminalRe = /^(done|human:|blocked:|paused)/;

async function runBrand(brand) {
  const st = (state.brands[brand] ||= { stage: detectStart(brand), fixes: 0, reviews: 0, history: [], cost: 0, sec: 0 });
  // 재개: 차단·일시정지는 마지막 시도 단계로 되돌린다. human:*는 --set으로만 푼다.
  if (/^(blocked:|paused)/.test(st.stage) && st.lastAttempt) st.stage = st.lastAttempt;
  save();

  const rec = (stage, r, note) => {
    st.history.push({ stage, at: now(), sec: r?.sec, cost: r?.cost, note });
    if (typeof r?.cost === "number") st.cost += r.cost;
    if (r?.sec) st.sec += r.sec;
    save();
  };
  const call = async (stage, label, text, approve) => {
    st.lastAttempt = stage; save();
    const isOk = (r) => r.code === 0 && SENT[stage].test(r.text) && !(r.http && r.http >= 400);
    let r, ok = false, via = "grok";
    for (let attempt = 0; attempt <= RETRIES; attempt++) {
      if (abort && attempt > 0) break;
      const lab = attempt ? `${label}.retry${attempt}` : label;
      r = await withSlot(`${brand} ${lab}`, () => grokCall(brand, lab, text, { approve, effort: EFFORT_BY[stage] }));
      ok = isOk(r);
      metric({ brand, stage: lab, via: "grok", sec: r.sec, cost: r.cost, turns: r.turns, ok, http: r.http, code: r.code });
      rec(lab, r, ok ? "ok" : `fail code=${r.code} http=${r.http ?? "-"}`);
      log(`${ok ? "✓" : "✗"} ${brand} ${lab} ${Math.round(r.sec / 60)}분${r.cost != null ? ` $${r.cost.toFixed(2)}` : ""}${r.http ? ` http=${r.http}` : ""}`);
      if (ok) break;
      // 산출물이 이미 완성돼 있는데 종료 코드만 이상한 경우(millie: code=1, 33턴, 파일 3종 존재)는
      // 재시도로 $1을 태우지 말고 게이트가 판단하게 둔다 — 워커 단계만.
      if (stage === "worker" && r.code !== 0 && !r.http && ["DESIGN.md", "provenance.md", "migration-log.md"].every((f) => existsSync(join(MIGRATED, brand, f)))) {
        log(`  ${brand} worker 종료 코드 ${r.code}이지만 산출 3종이 있다 — 게이트로 넘긴다`); ok = true; break;
      }
      const retryable = (r.http && RETRYABLE.has(r.http)) || (r.code !== 0 && !r.http);
      if (!retryable || attempt === RETRIES) break;
      const wait = BACKOFF[Math.min(attempt, BACKOFF.length - 1)];
      log(`  ${brand} ${label} ${wait}s 뒤 재시도 (${attempt + 1}/${RETRIES})`);
      await sleep(wait * 1000);
    }
    if (!ok && FALLBACK === "claude") {
      log(`  ${brand} ${label} → claude -p ${FALLBACK_MODEL} 폴백`);
      r = await withSlot(`${brand} ${label}.claude`, () => claudeCall(brand, label, text));
      ok = isOk(r); via = r.via;
      metric({ brand, stage: `${label}.claude`, via, sec: r.sec, cost: r.cost, turns: r.turns, ok, http: null, code: r.code });
      rec(`${label}.claude`, r, ok ? "ok" : `fail code=${r.code}`);
      log(`${ok ? "✓" : "✗"} ${brand} ${label}.claude ${Math.round(r.sec / 60)}분${r.cost != null ? ` $${r.cost.toFixed(2)}` : ""}`);
    }
    if (!ok) { consecutiveGrokFail++; if (consecutiveGrokFail >= 2 && !abort) { abort = true; log("⛔ 호출 2회 연속 실패(재시도·폴백 포함) — 새 호출을 멈춘다 (진행 중인 호출은 마친다)"); } }
    else consecutiveGrokFail = 0;
    return { ...r, ok, via };
  };
  const mechStages = new Set(["gate1", "gate2", "gate3", "remeasure"]);

  while (!terminalRe.test(st.stage)) {
    if (abort && !mechStages.has(st.stage)) { st.stage = "paused"; save(); break; }
    if (DRY) { log(`[dry] ${brand}: 다음 단계 ${st.stage}`); break; }
    switch (st.stage) {
      case "worker": {
        const r = await call("worker", "worker", prompt(brand, "worker"), true);
        st.stage = r.ok ? "gate1" : "blocked:grok"; break;
      }
      case "gate1": {
        const m = mech(brand); st.gate1 = m.report; st.gateProblems = m.gateProblemsFull;
        log(`${brand} gate1 ${m.gate}${m.gateProblems.length ? " " + m.gateProblems.join(",") : ""} · ${m.limiter.line.split("\n")[0].trim()}`);
        if (m.gate === "PASS") st.stage = "f3";
        else if (!st.gatefixed) { st.gatefixReturn = "gate1"; st.stage = "gatefix"; }
        else st.stage = "human:gate1";
        break;
      }
      case "gatefix": {
        st.gatefixed = true;
        const report = JSON.stringify(st.gateProblems ?? [], null, 1);
        const r = await call("gatefix", "gatefix", prompt(brand, "gatefix", { report }), true);
        st.stage = r.ok ? (st.gatefixReturn || "gate1") : "blocked:grok"; break;
      }
      case "f3": {
        const r = await call("f3", "f3", prompt(brand, "f3"), true);
        st.stage = r.ok ? "gate2" : "blocked:grok"; break;
      }
      case "gate2": {
        const m = mech(brand); st.gate2 = m.report;
        log(`${brand} gate2 ${m.ok ? "OK" : "FAIL"}\n${m.report.replace(/^/gm, "      ")}`);
        st.gateProblems = m.gateProblemsFull;
        if (m.ok) st.stage = "review";
        else if (m.gate !== "PASS") { if (!st.gatefixed) { st.gatefixReturn = "gate2"; st.stage = "gatefix"; } else st.stage = "human:gate2"; }
        else if (!st.mechfixed) st.stage = "mechfix";
        else st.stage = "human:mech";
        break;
      }
      case "mechfix": {
        st.mechfixed = true;
        const r = await call("mechfix", "mechfix", prompt(brand, "mechfix", { report: st.gate2 }), true);
        st.stage = r.ok ? "gate2" : "blocked:grok"; break;
      }
      case "review": {
        st.reviews++;
        const label = st.reviews > 1 ? `review${st.reviews}` : "review";
        const r = await call("review", label, prompt(brand, "review"), false);
        if (!r.ok) { st.stage = "blocked:grok"; break; }
        const v = parseVerdict(r.text); st.verdict = v; st.verdictBody = verdictBody(r.outFile, r.text);
        log(`${brand} 검토 ${v.verdict}${v.n ? " " + v.n : ""}`);
        if (v.verdict === "PASS") st.stage = "done";
        else if (v.verdict === "UNKNOWN") st.stage = "human:verdict";
        else st.stage = st.fixes >= MAX_FIX ? "human:fix-cap" : "fix";
        break;
      }
      case "fix": {
        st.fixes++;
        const label = st.fixes > 1 ? `fix${st.fixes}` : "fix";
        const r = await call("fix", label, prompt(brand, "fix", { verdict: st.verdictBody }), true);
        st.stage = r.ok ? "gate3" : "blocked:grok"; break;
      }
      case "gate3": {
        const m = mech(brand); st.gate3 = m.report;
        if (!m.ok) { log(`${brand} gate3 FAIL\n${m.report.replace(/^/gm, "      ")}`); st.stage = "human:mech-after-fix"; break; }
        st.stage = "remeasure"; break;
      }
      case "remeasure": {
        const rm = remeasure(brand, st.verdictBody || "");
        st.remeasure = { rows: rm.rows, changed: rm.changed };
        log(`${brand} 재실측 ${rm.changed}/${rm.rows} 변함 → ${join(SCRATCH, `remeasure-${brand}.md`)}`);
        st.stage = REREVIEW === "always" || (st.verdict?.n ?? 0) > 2 ? "review" : "human:scoped";
        break;
      }
      default:
        st.stage = `human:unknown-stage(${st.stage})`;
    }
    save();
  }
  log(`■ ${brand} → ${st.stage} (누적 ${Math.round(st.sec / 60)}분 · $${st.cost.toFixed(2)})`);
}

// ---------------------------------------------------------------- main
for (const kv of SET.split(",").filter(Boolean)) {
  const [b, s] = kv.split("=");
  if (b && s) { (state.brands[b] ||= { fixes: 0, reviews: 0, history: [], cost: 0, sec: 0 }).stage = s; log(`--set ${b} → ${s}`); }
}
const doneSet = new Set(read(join(MIGRATED, "DONE.txt")).split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#")));
const targets = BRANDS.filter((b) => {
  if (doneSet.has(b)) { log(`SKIP ${b} — DONE.txt 등재 (승인본 보호)`); return false; }
  if (!existsSync(paths(b).orig)) { log(`SKIP ${b} — 원본 없음`); return false; }
  return true;
});
log(`웨이브 ${WAVE} · ${targets.length}브랜드 · 동시성 ${CONC}(최대 ${MAX}) · 재검토 ${REREVIEW}${EFFORT ? ` · effort ${EFFORT}` : ""} · scratch ${SCRATCH}`);
const t0 = Date.now();
await Promise.all(targets.map(runBrand));
save();

const wall = Math.round((Date.now() - t0) / 60000);
const rows = targets.map((b) => {
  const s = state.brands[b];
  return `| ${b} | ${s.stage} | ${s.verdict ? `${s.verdict.verdict}${s.verdict.n ? " " + s.verdict.n : ""}` : "-"} | ${s.fixes} | ${Math.round(s.sec / 60)} | ${s.cost.toFixed(2)} |`;
});
const total = targets.reduce((a, b) => ({ sec: a.sec + state.brands[b].sec, cost: a.cost + state.brands[b].cost }), { sec: 0, cost: 0 });
const summary = [
  `# 웨이브 ${WAVE} 러너 요약 (${now()})`, "",
  `벽시계 ${wall}분 · LLM 합계 ${Math.round(total.sec / 60)}분 · $${total.cost.toFixed(2)} · 동시성 ${CONC}`, "",
  "| 브랜드 | 상태 | 검토 | 개정 | LLM분 | USD |", "|---|---|---|---:|---:|---:|", ...rows, "",
  ...targets.filter((b) => /^human:/.test(state.brands[b].stage)).map((b) => `- ${b}: ${state.brands[b].stage} — ${state.brands[b].stage === "human:scoped" ? `remeasure-${b}.md` : (state.brands[b].gate3 || state.brands[b].gate2 || state.brands[b].gate1 || "").split("\n")[0]}`),
].join("\n") + "\n";
writeFileSync(join(SCRATCH, "summary.md"), summary);
console.log("\n" + summary);
console.log(`WAVE_RUN_DONE wave=${WAVE} done=${targets.filter((b) => state.brands[b].stage === "done").length}/${targets.length} abort=${abort}`);

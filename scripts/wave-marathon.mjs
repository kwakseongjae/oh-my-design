#!/usr/bin/env node
/**
 * wave-marathon.mjs — 연속 웨이브 드라이버 (무인). wave-run.mjs를 웨이브마다 부르고, 마감·기록·커밋까지 한다.
 *
 * 왜 있나 (2026-09-02): 사용자 지시 "가능하면 오늘 안에 전 웨이브". 잔여 211본을 사람이 웨이브마다
 * 손으로 열고 닫으면(프롬프트 조립·마감·판정문·커밋) 그 손이 병목이고 사고 지점이다. 이 드라이버는
 *   1. 대기열: WAVES-36-50.md의 남은 웨이브(표 구성 유지) → 그 뒤 알파벳순 잔여(--size씩)
 *   2. 웨이브마다 wave-run.mjs 실행(재검토 always = 사람 손 없이 수렴), blocked/paused가 남으면
 *      grok 프로브로 복구를 기다렸다가 같은 명령으로 재개(최대 --max-wait 분)
 *   3. 마감: human:* 브랜드는 DEFERRED.txt에 사유와 함께 적고(DONE 아님), check-done-ledger --fix,
 *      wave-close, 러너 요약 기반 판정문(자동 생성 표시), CURRENT_STATE 한 줄, git commit
 *   4. <scratch>/STOP 파일이 있으면 웨이브 경계에서 멈춘다.
 *
 * usage:
 *   node scripts/wave-marathon.mjs --scratch <DIR> [--start-wave 46] [--size 10] [--concurrency 8]
 *        [--effort-f3 high --effort-review high] [--fallback none|claude] [--first-set brand=stage,...]
 *        [--max-wait 360] [--dry-run]
 */
import { spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync, appendFileSync, readdirSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const MIGRATED = join(ROOT, "docs/design-md-weight/migrated");
const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf("--" + n); return i >= 0 ? (argv[i + 1] ?? true) : d; };
const SCRATCH = resolve(String(opt("scratch", join(ROOT, ".omd/marathon"))));
const START = Number(opt("start-wave", 46));
const SIZE = Number(opt("size", 10));
const CONC = String(opt("concurrency", "8"));
const EFF_F3 = opt("effort-f3", null), EFF_REVIEW = opt("effort-review", null);
const FALLBACK = String(opt("fallback", "none"));
const FIRST_SET = String(opt("first-set", ""));
const MAX_WAIT_MIN = Number(opt("max-wait", 360));
const DRY = argv.includes("--dry-run");

mkdirSync(SCRATCH, { recursive: true });
const LOG = join(SCRATCH, "marathon.log");
const log = (m) => { const line = `[${new Date().toTimeString().slice(0, 8)}] ${m}`; console.log(line); appendFileSync(LOG, line + "\n"); };
const sh = (cmd, args, opts = {}) => spawnSync(cmd, args, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, ...opts });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const today = () => new Date().toISOString().slice(0, 10);
const readList = (p) => (existsSync(p) ? readFileSync(p, "utf8").split("\n").map((l) => l.trim().split(/\s+/)[0]).filter((l) => l && !l.startsWith("#")) : []);

// ---------------------------------------------------------------- 대기열
const done = new Set(readList(join(MIGRATED, "DONE.txt")));
const deferred = new Set(readList(join(MIGRATED, "DEFERRED.txt")));
const golden = new Set(existsSync(join(ROOT, "docs/design-md-weight/golden-samples")) ? readdirSync(join(ROOT, "docs/design-md-weight/golden-samples")) : []);
const tableWaves = [];
for (const line of readFileSync(join(ROOT, "docs/design-md-weight/WAVES-36-50.md"), "utf8").split("\n")) {
  const m = line.match(/^\|\s*(\d+)\s*\|\s*(.+?)\s*\|\s*$/);
  if (!m) continue;
  const n = Number(m[1]);
  if (n < START) continue;
  tableWaves.push({ n, brands: m[2].split("·").map((s) => s.trim()).filter(Boolean) });
}
const queued = new Set(tableWaves.flatMap((w) => w.brands));
const rest = readdirSync(join(ROOT, "web/references"))
  .filter((id) => existsSync(join(ROOT, "web/references", id, "DESIGN.md")))
  .filter((id) => !done.has(id) && !deferred.has(id) && !golden.has(id) && !queued.has(id))
  .sort();
const waves = [...tableWaves];
let n = waves.length ? waves[waves.length - 1].n + 1 : START;
for (let i = 0; i < rest.length; i += SIZE) waves.push({ n: n++, brands: rest.slice(i, i + SIZE) });
log(`대기열: 표 웨이브 ${tableWaves.length}개 + 알파벳 ${rest.length}본/${SIZE} = 총 ${waves.length}웨이브, 브랜드 ${waves.reduce((a, w) => a + w.brands.filter((b) => !done.has(b)).length, 0)}본 (DONE ${done.size} · DEFERRED ${deferred.size})`);
if (DRY) { for (const w of waves) console.log(`  w${w.n}: ${w.brands.join(", ")}`); process.exit(0); }

// ---------------------------------------------------------------- grok 프로브
function grokAlive() {
  const r = sh("grok", ["-p", "reply with the single word OK", "-m", "grok-4.6", "--output-format", "json"], { timeout: 120000 });
  return r.status === 0 && /"text":\s*"OK/.test(r.stdout || "");
}

// ---------------------------------------------------------------- 웨이브 1회 실행 (재개 포함)
function runWave(w, extraArgs) {
  const scratch = join(SCRATCH, `w${w.n}`);
  const args = ["scripts/wave-run.mjs", "--wave", String(w.n), "--brands", w.brands.join(","), "--scratch", scratch,
    "--concurrency", CONC, "--max", CONC === "auto" ? "8" : CONC, "--rereview", "always", "--retries", "3", "--fallback", FALLBACK, ...extraArgs];
  if (EFF_F3) args.push("--effort-f3", String(EFF_F3));
  if (EFF_REVIEW) args.push("--effort-review", String(EFF_REVIEW));
  return new Promise((res) => {
    const logFile = join(scratch, "run.log");
    mkdirSync(scratch, { recursive: true });
    const child = spawn("node", args, { cwd: ROOT, stdio: ["ignore", "pipe", "pipe"] });
    let tail = "";
    const sink = (d) => { const s = String(d); appendFileSync(logFile, s); tail = (tail + s).slice(-4000); };
    child.stdout.on("data", sink); child.stderr.on("data", sink);
    child.on("close", (code) => {
      const m = tail.match(/WAVE_RUN_DONE wave=\S+ done=(\d+)\/(\d+) abort=(\w+)/);
      res({ code, done: m ? Number(m[1]) : 0, total: m ? Number(m[2]) : w.brands.length, abort: m ? m[3] === "true" : true, scratch });
    });
  });
}

const stagesOf = (scratch) => { const p = join(scratch, "state.json"); return existsSync(p) ? Object.fromEntries(Object.entries(JSON.parse(readFileSync(p, "utf8")).brands).map(([b, s]) => [b, s])) : {}; };

// ---------------------------------------------------------------- 마감
function closeWave(w, scratch) {
  const st = stagesOf(scratch);
  const brands = w.brands.filter((b) => st[b]);
  const doneB = brands.filter((b) => st[b].stage === "done");
  const humanB = brands.filter((b) => /^human:/.test(st[b].stage));
  const otherB = brands.filter((b) => !doneB.includes(b) && !humanB.includes(b));
  if (humanB.length) {
    appendFileSync(join(MIGRATED, "DEFERRED.txt"), humanB.map((b) => `${b}  # wave ${w.n} ${today()} ${st[b].stage} — 오케스트레이터 판정 대기`).join("\n") + "\n");
    log(`  DEFERRED += ${humanB.join(", ")}`);
  }
  if (otherB.length) log(`  ⚠ 미종료 브랜드 (DONE·DEFERRED 어디에도 안 넣음): ${otherB.map((b) => `${b}:${st[b].stage}`).join(", ")}`);
  const ledger = sh("node", ["scripts/check-done-ledger.mjs", "--fix"]);
  log(`  done-ledger: ${ledger.stdout.replace(/\s+/g, " ").slice(0, 160)}`);
  const close = sh("node", ["scripts/wave-close.mjs"]);
  let closeOk = false; try { closeOk = JSON.parse(close.stdout).ok !== false && !/"status":\s*"FAIL"/.test(close.stdout); } catch { /* 형식 불명 */ }
  log(`  wave-close: ${closeOk ? "OK" : "FAIL"} ${close.stdout.replace(/\s+/g, " ").slice(0, 200)}`);
  // 판정문 (러너 자동 생성 — 오케스트레이터 검수 전)
  const metricsPath = join(ROOT, "docs/design-md-weight/metrics", `wave-${w.n}.jsonl`);
  const metrics = existsSync(metricsPath) ? readFileSync(metricsPath, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l)) : [];
  const cost = metrics.reduce((a, m) => a + (m.cost || 0), 0), secs = metrics.reduce((a, m) => a + (m.sec || 0), 0);
  const rows = brands.map((b) => {
    const s = st[b];
    const f3 = (() => { const p = join(scratch, `f3-${b}.out`); const m = existsSync(p) && readFileSync(p, "utf8").match(/AUDIT_DONE fixes=(\d+)/); return m ? m[1] : "-"; })();
    const reviews = readdirSync(scratch).filter((f) => /^review\d*-/.test(f) && f === `review-${b}.out` || f.match(new RegExp(`^review\\d+-${b}\\.out$`))).sort()
      .map((f) => (readFileSync(join(scratch, f), "utf8").match(/REVIEW_DONE\s+\S+\s+(PASS|FAIL\s*\d*)/) || [, "?"])[1].trim());
    const g = (s.gate3 || s.gate2 || s.gate1 || "").split("\n");
    const lim = (g.find((l) => l.startsWith("limiter:")) || "").replace(/.*본문=\s*(\d+).*원장=\s*(\d+).*/, "$1=$2");
    const use = (g.find((l) => l.startsWith("use-landing:")) || "").replace(/.*use\s+(\S+).*/, "$1");
    return `| ${b} | ${(g.find((l) => l.startsWith("gate:")) || "gate: ?").slice(6)} | ${f3} | ${lim || "-"} | ${use || "-"} | ${reviews.join(" → ") || "-"} | ${s.fixes} | ${s.stage} |`;
  });
  const doc = [
    `# T2-1 웨이브 ${w.n} 판정 — ${w.brands.join(" · ")}`, "",
    `- 일자: ${today()} · 채널: grok build CLI · **마라톤 러너 자동 생성** (scripts/wave-marathon.mjs; 오케스트레이터 검수 전 — 검수 후 이 줄을 지운다)`,
    `- 동시성 ${CONC} · 재검토 always${EFF_F3 || EFF_REVIEW ? ` · effort f3=${EFF_F3 || "기본"} review=${EFF_REVIEW || "기본"}` : ""} · LLM ${Math.round(secs / 60)}분 · $${cost.toFixed(2)} · 호출 ${metrics.length}(실패 ${metrics.filter((m) => !m.ok).length})`, "",
    "## 판정", "", "| 브랜드 | 게이트 | F3 | 1:1 | use | 검토 | 개정 | 상태 |", "|---|---|---:|---|---|---|---:|---|", ...rows, "",
    `done ${doneB.length} · deferred ${humanB.length}${otherB.length ? ` · 미종료 ${otherB.length}` : ""}. deferred는 \`migrated/DEFERRED.txt\`에 사유와 함께 있고 DONE이 아니다.`, "",
  ].join("\n");
  const docPath = join(ROOT, "docs/reviews", `t2-1-wave${w.n}-${today()}-grok.md`);
  writeFileSync(docPath, doc);
  // CURRENT_STATE 한 줄
  const csPath = join(ROOT, "docs/CURRENT_STATE.md");
  const cs = readFileSync(csPath, "utf8");
  const lineEntry = `- 갱신: ${today()} · **웨이브 ${w.n} 마감(마라톤)** — done ${doneB.length}/${brands.length}${humanB.length ? ` · deferred ${humanB.join(",")}` : ""} · $${cost.toFixed(2)} · LLM ${Math.round(secs / 60)}분 · 판정문 \`docs/reviews/t2-1-wave${w.n}-${today()}-grok.md\`(자동 생성, 검수 전).\n`;
  const idx = cs.indexOf("\n- 갱신:");
  writeFileSync(csPath, idx >= 0 ? cs.slice(0, idx + 1) + lineEntry + cs.slice(idx + 1) : cs + lineEntry);
  // 커밋
  const add = ["add", "--", ...brands.map((b) => `docs/design-md-weight/migrated/${b}`), "docs/design-md-weight/migrated/DONE.txt", docPath, "docs/CURRENT_STATE.md", `docs/design-md-weight/metrics/wave-${w.n}.jsonl`];
  if (existsSync(join(MIGRATED, "DEFERRED.txt"))) add.push("docs/design-md-weight/migrated/DEFERRED.txt");
  const a = sh("git", add.filter((p) => !p.includes("/migrated/") || existsSync(join(ROOT, p))));
  if (a.status !== 0) log(`  git add 실패: ${a.stderr.slice(0, 200)}`);
  const msg = `t2-1: wave ${w.n} — ${w.brands.join(", ")} (marathon)\n\nRunner-driven wave: done ${doneB.length}/${brands.length}${humanB.length ? `, deferred ${humanB.join(", ")}` : ""}; $${cost.toFixed(2)}, ${Math.round(secs / 60)} LLM-min; verdict doc auto-generated, pending orchestrator review.\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_015mrW14Tf4C4Dv1ugHq6HNG`;
  const c = sh("git", ["commit", "-q", "-m", msg]);
  log(`  commit: ${c.status === 0 ? sh("git", ["rev-parse", "--short", "HEAD"]).stdout.trim() : "FAIL " + (c.stderr || c.stdout).replace(/\s+/g, " ").slice(0, 200)}`);
  return { done: doneB.length, deferred: humanB.length, cost };
}

// ---------------------------------------------------------------- 메인
let totalCost = 0, totalDone = 0, totalDeferred = 0;
const t0 = Date.now();
for (let wi = 0; wi < waves.length; wi++) {
  const w = waves[wi];
  if (existsSync(join(SCRATCH, "STOP"))) { log("STOP 파일 — 웨이브 경계에서 멈춘다"); break; }
  const pending = w.brands.filter((b) => !done.has(b) && !deferred.has(b));
  if (!pending.length) { log(`w${w.n}: 전부 DONE/DEFERRED — 건너뜀`); continue; }
  log(`▶ 웨이브 ${w.n} 시작: ${w.brands.join(", ")}`);
  let extra = wi === 0 && FIRST_SET ? ["--set", FIRST_SET] : [];
  let waited = 0, result;
  for (let round = 0; ; round++) {
    result = await runWave(w, extra); extra = [];
    const st = stagesOf(result.scratch);
    const stuck = Object.entries(st).filter(([b, s]) => w.brands.includes(b) && /^(blocked:|paused)/.test(s.stage)).map(([b]) => b);
    log(`  라운드 ${round + 1}: done ${result.done}/${result.total} abort=${result.abort} stuck=[${stuck.join(",")}]`);
    if (!stuck.length) break;
    // 복구 대기
    while (waited < MAX_WAIT_MIN) {
      await sleep(15 * 60 * 1000); waited += 15;
      if (existsSync(join(SCRATCH, "STOP"))) break;
      if (grokAlive()) { log(`  grok 복구 확인 (${waited}분 대기) — 재개`); break; }
      log(`  grok 아직 불가 (${waited}분)`);
    }
    if (waited >= MAX_WAIT_MIN || existsSync(join(SCRATCH, "STOP"))) { log(`  대기 한도/STOP — 웨이브 ${w.n} 미완으로 마감`); break; }
  }
  const r = closeWave(w, result.scratch);
  totalCost += r.cost; totalDone += r.done; totalDeferred += r.deferred;
  for (const b of w.brands) done.add(b);
  log(`■ 웨이브 ${w.n} 마감: done ${r.done} · deferred ${r.deferred} · 누적 $${totalCost.toFixed(2)} · 경과 ${Math.round((Date.now() - t0) / 60000)}분`);
}
log(`MARATHON_DONE waves=${waves.length} done=${totalDone} deferred=${totalDeferred} cost=$${totalCost.toFixed(2)} wall=${Math.round((Date.now() - t0) / 60000)}min`);

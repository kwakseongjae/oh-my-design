#!/usr/bin/env node
/**
 * build-rescore.mjs — 단독 표기 결함의 1회 재채점 세션(예비 청크)을 조립한다.
 *
 * RUBRIC §4.1 2인 합의 규칙(2026-09-01 사전 선언): 1인만 표기한 결함은 예비 청크에서 **동일 봉인 조건(온도 0·시드·표시순서)**
 * 으로 1회 재채점하고, 재채점 후에도 불일치면 disputed로 별도 집계한다. run-config scoring.chunking.reserve.
 *
 * 입력: aggregate-lane-a.mjs 가 낸 aggregate.json 의 pendingDefects — {cell, by, d}. 표기하지 **않은** 평가자가 그 칸의
 * 축 1을 블라인드로 다시 채점한다(무엇이 표기됐는지는 알려주지 않는다 — 동일성은 집계기가 code·regionId·viewport로 대조).
 * 슬롯 문자·arm 대응은 원 청크 키와 동일하게 유지하고(표시순서 보존), 재채점이 필요한 슬롯만 넣는다.
 *
 * 산출: sessions/lane-a/<evaluator>/rescore/{packet.md, manifest.json, rows/, .gitignore} + sessions/keys/<evaluator>-rescore.json
 *       (키 rows 형식은 청크 키와 같다 — aggregate-lane-a.mjs 가 그대로 적재한다.)
 *
 * usage: node build-rescore.mjs --from <aggregate.json> [--evaluator grok-4.6|sonnet5] [--check] [--out-root <dir>]
 */
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const CMP = join(ROOT, "test-v2/90-comparison");
const CAPS = join(CMP, "captures/lane-a");
const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf("--" + n); return i >= 0 ? argv[i + 1] : undefined; };
const FROM = opt("from"); const onlyEval = opt("evaluator"); const checkOnly = argv.includes("--check");
const OUT_ROOT = resolve(opt("out-root") || CMP);
const SESS = join(OUT_ROOT, "sessions/lane-a"); const KEYS = join(OUT_ROOT, "sessions/keys");
if (!FROM) { console.error("usage: build-rescore.mjs --from <aggregate.json> [--evaluator e] [--check] [--out-root d]"); process.exit(1); }
const EVALS = ["grok-4.6", "sonnet5"];
const sha = (buf) => "sha256:" + createHash("sha256").update(buf).digest("hex");
const read = (p) => readFileSync(p, "utf8");

// 프롬프트·앵커·잠금표는 build-packets.mjs 와 같은 봉인 출처에서 같은 방식으로 뽑는다.
const promptsMd = read(join(CMP, "scoring-prompts.md"));
function fenced(afterHeading) {
  const i = promptsMd.indexOf(afterHeading); if (i < 0) throw new Error(`scoring-prompts.md: 제목 없음 — ${afterHeading}`);
  const m = promptsMd.slice(i).match(/```(?:\w+)?\n([\s\S]*?)```/); if (!m) throw new Error(`scoring-prompts.md: 펜스 없음 — ${afterHeading}`);
  return m[1].trimEnd();
}
const PROMPT = { common: fenced("## 공통 머리말"), axis1: fenced("## 축 1"), viewportNote: promptsMd.slice(promptsMd.indexOf("### viewport 표기")).trim() };
const rubric = read(join(CMP, "RUBRIC.md"));
const lockStart = rubric.indexOf("##### 잠금표 — 9개 화면");
const lockEnd = rubric.indexOf("| 잠금 필드 |", lockStart);
if (lockStart < 0 || lockEnd < 0) throw new Error("RUBRIC §4.1 잠금표를 찾지 못했다");
const lockText = rubric.slice(lockStart, lockEnd);
function lockBlock(brand) {
  const re = new RegExp(`^\\*\\*${brand}\\*\\*[^\\n]*\\n(?:(?!^\\*\\*[a-z]+\\*\\*)[\\s\\S])*`, "m");
  const m = lockText.match(re);
  if (!m) throw new Error(`잠금표에 ${brand} 블록이 없다`);
  return m[0].trim();
}

const sevStart = rubric.search(/^- `P0`/m);
const sevEnd = rubric.indexOf("max(0, 100", sevStart);
const SEVERITY = rubric.slice(sevStart, rubric.indexOf("\n", sevEnd)).trim();
if (!SEVERITY.includes("P2")) throw new Error("severity 앵커 추출 실패");

// 원 청크 키에서 슬롯 대응을 복원한다(표시순서 보존).
const slotOf = {}; // slotOf[ev][brand|rep][arm] = slot
for (const ev of EVALS) for (const k of [1, 2, 3]) {
  const kp = join(CMP, "sessions/keys", `${ev}-chunk-${k}.json`); if (!existsSync(kp)) continue;
  for (const r of JSON.parse(read(kp)).rows) for (const [slot, arm] of Object.entries(r.slots)) (((slotOf[ev] ||= {})[`${r.brand}|${r.rep}`] ||= {})[arm] = slot);
}

const agg = JSON.parse(read(FROM));
const pending = agg.pendingDefects || [];
const work = {}; // work[targetEval][brand|rep] = Set(arm)
for (const p of pending) {
  const target = EVALS.find((e) => e !== p.by); if (!target) continue;
  const [brand, arm, repS] = p.cell.split("/"); const rep = Number(repS.replace("rep-", ""));
  ((work[target] ||= {})[`${brand}|${rep}`] ||= new Set()).add(arm);
}

const report = [];
for (const ev of EVALS) {
  if (onlyEval && ev !== onlyEval) continue;
  const cellsByRow = work[ev] || {};
  const rowKeys = Object.keys(cellsByRow).sort();
  const nCells = rowKeys.reduce((n, k) => n + cellsByRow[k].size, 0);
  const tag = `${ev} rescore — 행 ${rowKeys.length} · 칸 ${nCells} (단독 표기 ${pending.filter((p) => p.by !== ev).length}건)`;
  if (!rowKeys.length) { report.push(`EMPTY ${tag}`); continue; }
  // 입력 점검
  const missing = [];
  for (const rk of rowKeys) { const [brand, rep] = rk.split("|"); for (const arm of cellsByRow[rk]) for (const f of ["desktop-1440.png", "mobile-390.png"]) if (!existsSync(join(CAPS, brand, arm, `rep-${rep}`, f))) missing.push(`${brand}/${arm}/rep-${rep}: ${f}`); if (!slotOf[ev]?.[rk]) missing.push(`${brand}/rep-${rep}: 원 청크 키 없음`); }
  if (missing.length) { report.push(`NOT READY ${tag}\n    ` + missing.join("\n    ")); continue; }
  if (checkOnly) { report.push(`READY ${tag}`); continue; }

  const dir = join(SESS, ev, "rescore");
  if (existsSync(join(dir, "responses.jsonl"))) { report.push(`SKIP ${tag} — responses.jsonl 존재(봉인 세션 재조립 금지)`); continue; }
  mkdirSync(join(dir, "rows"), { recursive: true }); mkdirSync(KEYS, { recursive: true });
  const key = { evaluator: ev, lane: "A", chunk: "rescore", axes: ["defects"], postHoc: false, rows: [] };
  const manifest = { builtAt: new Date().toISOString(), evaluator: ev, chunk: "rescore", from: FROM.replace(ROOT + "/", ""), files: {} };
  const lines = [];
  lines.push(`# 재채점 세션 — 레인 A · 평가자 ${ev} · 예비 청크(축 1만)`, "");
  lines.push("이 디렉터리 안의 파일만 연다. 여기 적히지 않은 경로(레포의 다른 디렉터리·이전 청크 세션 포함)는 열지 않는다.",
    "이 세션은 RUBRIC §4.1 2인 합의 규칙의 **1회 재채점**이다: 아래 칸들의 축 1(첫 렌더 결함)을 처음 보는 것처럼 다시 채점한다.",
    "어느 결함이 재채점 대상인지는 알려주지 않는다 — 두 첫 캡처에서 보이는 결함을 전부, 같은 프롬프트·같은 앵커로 적는다.",
    "결과는 이 디렉터리의 `responses.jsonl`에 한 줄에 JSON 하나 — 행(brand, rep)마다 **적힌 슬롯만** `defects` 축 객체 하나씩.",
    "다른 축·postHocGuess는 내지 않는다. 다 쓰면 마지막 줄에 `SCORING_DONE rows=<n>`을 출력한다.", "");
  lines.push("## 공통 머리말", "", "```", PROMPT.common, "```", "");
  lines.push("## 축 1 — 첫 렌더 결함 (두 첫 캡처만: desktop-1440.png · mobile-390.png)", "", "```", PROMPT.axis1, "```", "",
    "severity 앵커 (RUBRIC §4.1 전문):", "", "```", SEVERITY, "```", "");
  lines.push("## 응답 스키마 (축 1만)", "", "```json",
    JSON.stringify({ brand: "<brand>", rep: 1, slot: "A", axis: "defects", defects: [{ code: "CLIP", viewport: ["desktop-1440"], regionId: "K1", severity: "P0", symptom: "<관찰>" }] }, null, 1),
    "```", "", PROMPT.viewportNote, "");
  const brands = [...new Set(rowKeys.map((k) => k.split("|")[0]))];
  for (const brand of brands) {
    lines.push(`## 브랜드 ${brand}`, "", "잠금표 (RUBRIC §4.1, 동결):", "", lockBlock(brand), "");
    for (const rk of rowKeys.filter((k) => k.startsWith(brand + "|"))) {
      const rep = Number(rk.split("|")[1]);
      const rowDir = `rows/${brand}-rep${rep}`;
      const keyRow = { brand, rep, slots: {} };
      const slots = [...cellsByRow[rk]].map((arm) => [slotOf[ev][rk][arm], arm]).sort();
      lines.push(`### 행 ${brand} · rep ${rep} — 슬롯 ${slots.map(([s]) => s).join(" · ")}`, "");
      for (const [slot, arm] of slots) {
        keyRow.slots[slot] = arm;
        const sdir = join(dir, rowDir, `slot-${slot}`); mkdirSync(sdir, { recursive: true });
        for (const f of ["desktop-1440.png", "mobile-390.png"]) { const src = join(CAPS, brand, arm, `rep-${rep}`, f); copyFileSync(src, join(sdir, f)); manifest.files[`${rowDir}/slot-${slot}/${f}`] = sha(readFileSync(src)); }
        lines.push(`- 슬롯 ${slot}: \`${rowDir}/slot-${slot}/\` — desktop-1440.png · mobile-390.png`);
      }
      lines.push(""); key.rows.push(keyRow);
    }
  }
  lines.push("## 끝", "", "적힌 행·슬롯마다 `defects` 객체 1개. 결함이 없으면 빈 배열로 낸다(생략 아님 — 재채점에서는 「없음」도 답이다).", "`responses.jsonl`을 다 쓴 뒤 마지막 줄에 `SCORING_DONE rows=<n>`.", "");
  const packet = lines.join("\n");
  const leak = packet.match(/\b(hallmark|uiuxpromax|03-runs|omd)\b/);
  if (leak) throw new Error(`패킷에 arm 단서 유출: ${leak[0]}`);
  writeFileSync(join(dir, "packet.md"), packet); manifest.files["packet.md"] = sha(Buffer.from(packet));
  writeFileSync(join(dir, "manifest.json"), JSON.stringify(manifest, null, 1) + "\n");
  writeFileSync(join(dir, ".gitignore"), "rows/\n");
  writeFileSync(join(KEYS, `${ev}-rescore.json`), JSON.stringify(key, null, 1) + "\n");
  report.push(`BUILT ${tag} · 파일 ${Object.keys(manifest.files).length} · ${dir.replace(ROOT + "/", "")}`);
}
console.log(report.join("\n"));

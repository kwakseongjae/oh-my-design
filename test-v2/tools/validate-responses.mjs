#!/usr/bin/env node
/**
 * validate-responses.mjs — 채점 세션의 responses.jsonl을 봉인 스키마(scoring-prompts.md)와
 * 세션 키(rows × slots)에 대조한다. 점수는 계산하지 않는다 — 그건 집계기의 일이고, 이 파일은
 * "집계기가 파싱할 수 있는가 · 무엇이 결측인가"만 답한다(RUBRIC §7: 결측은 미채점이지 0점이 아니다).
 *
 * usage: node validate-responses.mjs --session <dir> --key <keys/<evaluator>-chunk-<n>.json> [--json]
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf("--" + n); return i >= 0 ? argv[i + 1] : undefined; };
const dir = opt("session"); const keyPath = opt("key"); const asJson = argv.includes("--json");
if (!dir || !keyPath) { console.error("usage: validate-responses.mjs --session <dir> --key <key.json> [--json]"); process.exit(1); }

const key = JSON.parse(readFileSync(keyPath, "utf8"));
const rp = join(dir, "responses.jsonl");
if (!existsSync(rp)) { console.log(`NO responses.jsonl in ${dir}`); process.exit(2); }

const CODES = new Set(["LOAD", "TASK", "CLIP", "OVERLAP", "H-OVERFLOW", "STATE", "CONTRAST", "FOCUS", "KEYBOARD", "HERO", "BRAND-MARK", "LOCAL"]);
const VIEWPORTS = new Set(["desktop-1440", "mobile-390"]);
const AXES = ["defects", "evidence", "identification", "document"];
const lines = readFileSync(rp, "utf8").split("\n").filter((l) => l.trim());
const problems = [];
const seen = {}; // `${brand}|${rep}|${slot}` -> Set(axis)
const posthoc = new Set();
let parsed = 0;

let footer = null;
lines.forEach((l, i) => {
  // 평가자가 마지막 줄에 SCORING_DONE 을 파일에도 쓰는 경우가 있다(grok chunk-1). 데이터가 아니라 종료 표지이므로
  // 오류로 세지 않고 기록만 한다. 그 밖의 비JSON 줄은 여전히 문제다.
  if (/^SCORING_DONE\b/.test(l.trim())) { footer = l.trim(); return; }
  let j;
  try { j = JSON.parse(l); } catch { problems.push(`L${i + 1}: JSON 파싱 실패`); return; }
  parsed++;
  const row = key.rows.find((r) => r.brand === j.brand && Number(r.rep) === Number(j.rep));
  if (!row) { problems.push(`L${i + 1}: 키에 없는 행 ${j.brand}/${j.rep}`); return; }
  if (j.postHocGuess) { posthoc.add(`${j.brand}|${j.rep}`); return; }
  if (!["A", "B", "C"].includes(j.slot)) { problems.push(`L${i + 1}: slot 값 이상 ${j.slot}`); return; }
  if (!AXES.includes(j.axis)) { problems.push(`L${i + 1}: axis 값 이상 ${j.axis}`); return; }
  const k = `${j.brand}|${j.rep}|${j.slot}`;
  (seen[k] ||= new Set()).add(j.axis);
  if (j.axis === "defects") {
    if (!Array.isArray(j.defects)) problems.push(`L${i + 1}: defects 배열 아님`);
    else j.defects.forEach((d, di) => {
      if (!CODES.has(d.code)) problems.push(`L${i + 1}#${di}: 고정 코드 밖 ${d.code}`);
      const vps = Array.isArray(d.viewport) ? d.viewport : [d.viewport];
      if (!vps.every((v) => VIEWPORTS.has(v))) problems.push(`L${i + 1}#${di}: viewport 표기 이상 ${JSON.stringify(d.viewport)}`);
      if (!/^P[012]$/.test(d.severity || "")) problems.push(`L${i + 1}#${di}: severity 이상 ${d.severity}`);
      if (!d.regionId) problems.push(`L${i + 1}#${di}: regionId 없음`);
      if (!d.symptom) problems.push(`L${i + 1}#${di}: symptom 없음`);
    });
  }
  if (j.axis === "evidence") {
    const r = j.evidenceSemantic?.rating;
    if (!(Number.isInteger(r) && r >= 0 && r <= 4)) problems.push(`L${i + 1}: evidenceSemantic.rating 0–4 아님`);
    if (!j.evidenceSemantic?.why) problems.push(`L${i + 1}: evidence 근거 없음`);
  }
  if (j.axis === "identification") {
    const c = j.identification?.confidence;
    if (!j.identification?.brand) problems.push(`L${i + 1}: identification.brand 없음`);
    if (!(typeof c === "number" && c >= 0 && c <= 100)) problems.push(`L${i + 1}: confidence 0–100 아님`);
  }
  if (j.axis === "document") {
    const items = j.document?.items;
    if (!Array.isArray(items) || items.length !== 5) problems.push(`L${i + 1}: document.items 5개 아님`);
    else items.forEach((it) => { if (!(Number.isInteger(it.rating) && it.rating >= 0 && it.rating <= 4)) problems.push(`L${i + 1}: 항목 ${it.n} rating 0–4 아님`); if (!it.why) problems.push(`L${i + 1}: 항목 ${it.n} 근거 없음`); });
  }
});

// 커버리지: 행×슬롯마다 어느 축이 결측인가 (identification은 천장 있는 브랜드만 기대)
const coverage = [];
for (const r of key.rows) for (const slot of ["A", "B", "C"]) {
  const k = `${r.brand}|${r.rep}|${slot}`;
  const have = seen[k] || new Set();
  const expected = ["defects", "evidence", "document", ...(key.ceilingBrands?.includes(r.brand) ? ["identification"] : [])];
  const missing = expected.filter((a) => !have.has(a));
  coverage.push({ brand: r.brand, rep: r.rep, slot, missing });
}
const missingPosthoc = key.rows.filter((r) => !posthoc.has(`${r.brand}|${r.rep}`)).map((r) => `${r.brand}/${r.rep}`);
const out = { lines: lines.length, parsed, problems, coverage: coverage.filter((c) => c.missing.length), missingPosthoc, ok: problems.length === 0 && coverage.every((c) => !c.missing.length) };
if (asJson) console.log(JSON.stringify(out, null, 1));
else {
  console.log(`lines ${out.lines} · parsed ${parsed} · schema 문제 ${problems.length} · 결측 슬롯 ${out.coverage.length} · postHoc 결측 ${missingPosthoc.length}`);
  for (const p of problems.slice(0, 30)) console.log("  ✗ " + p);
  for (const c of out.coverage.slice(0, 30)) console.log(`  · ${c.brand}/rep${c.rep}/${c.slot} 결측: ${c.missing.join(",")}`);
  console.log(`VALIDATE_${out.ok ? "OK" : "FAIL"}`);
}
process.exit(out.ok ? 0 : 1);

#!/usr/bin/env node
/**
 * quality-gate.mjs — 릴리즈 전 **스킬 산출물의 품질**을 결정론적으로 확인한다.
 *
 * 왜 있나 (2026-09-03, T3-3 Phase 6 §4.2-7): 2.0.1 도그푸딩은 네 경로가 「돌아간다」까지만 확인했다.
 * 결과물의 대비·뷰포트 이탈·브랜드 일치는 사람이 따로 봐야 했고, 같은 종류의 결함이 벤치에서 반복됐다.
 * 이 게이트는 등록된 산출물마다 같은 검사기를 돌리고, **없는 칸은 MISSING 으로 드러낸다** — 있는 것만
 * 검사해 통과시키면 커버리지 부족이 숨는다.
 *
 * 오래됨(STALE) 판정: 산출물이 그 스킬 파일보다 오래됐으면, 지금 통과해도 지금 스킬을 검증한 것이 아니다.
 * 스킬을 고쳤으면 픽스처를 다시 만들어야 한다 — 그것이 이 게이트가 존재하는 이유다.
 *
 * usage: node quality-gate.mjs [--json] [--strict] [--only <id,...>]
 *        --strict  MISSING·STALE 도 실패로 센다 (릴리즈 게이트 기본값은 --strict)
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const argv = process.argv.slice(2);
const asJson = argv.includes("--json");
const strict = argv.includes("--strict");
const onlyIdx = argv.indexOf("--only");
const only = onlyIdx >= 0 ? new Set(String(argv[onlyIdx + 1] || "").split(",").map((s) => s.trim())) : null;

const cfg = JSON.parse(readFileSync(join(ROOT, "test-v2/content-runs/fixtures.json"), "utf8"));
const mtime = (p) => (existsSync(p) ? statSync(p).mtimeMs : 0);
const newestSkillFile = (skill) => {
  const files = cfg.sourceSkills[skill] || [];
  let newest = 0, which = null;
  for (const f of files) { const m = mtime(join(ROOT, f)); if (m > newest) { newest = m; which = f; } }
  return { newest, which };
};

function run(tool, args) {
  try {
    const out = execFileSync("node", [join(ROOT, "test-v2/tools", tool), ...args], { encoding: "utf8", timeout: 180000, stdio: ["ignore", "pipe", "pipe"] });
    return { ok: true, out };
  } catch (e) {
    // 검사기는 결함이 있으면 non-zero 로 끝난다 — 출력은 살아 있다.
    return { ok: false, out: String(e.stdout || "") + String(e.stderr || "") };
  }
}

const rows = [];
for (const f of cfg.fixtures) {
  if (only && !only.has(f.id)) continue;
  const abs = join(ROOT, f.artifact);
  const row = { id: f.id, skill: f.skill, brand: f.brand, artifact: f.artifact, checks: {} };
  if (!existsSync(abs)) { row.status = "MISSING"; row.note = "산출물이 없다 — 이 칸은 한 번도 만들어지지 않았다"; rows.push(row); continue; }
  const { newest, which } = newestSkillFile(f.skill);
  const age = mtime(abs);
  if (newest && age < newest) { row.stale = { skillFile: which, skillMtime: new Date(newest).toISOString(), artifactMtime: new Date(age).toISOString() }; }
  for (const c of f.checks) {
    if (c === "render") row.checks.render = run("render-integrity.mjs", [abs]);
    if (c === "contrast") row.checks.contrast = run("text-contrast.mjs", [abs]);
    if (c === "landing") row.checks.landing = run("landing-integrity.mjs", [abs]);
  }
  const failed = Object.entries(row.checks).filter(([, v]) => !v.ok).map(([k]) => k);
  row.status = failed.length ? "FAIL" : row.stale ? "STALE" : "PASS";
  row.failedChecks = failed;
  rows.push(row);
}

const counts = rows.reduce((a, r) => ((a[r.status] = (a[r.status] || 0) + 1), a), {});
const hardFail = rows.filter((r) => r.status === "FAIL").length;
const softFail = rows.filter((r) => r.status === "MISSING" || r.status === "STALE").length;
const verdict = hardFail || (strict && softFail) ? "BLOCKED" : "OK";

if (asJson) console.log(JSON.stringify({ verdict, counts, strict, rows }, null, 1));
else {
  console.log(`품질 게이트 — 픽스처 ${rows.length}개 · ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(" · ")}\n`);
  for (const r of rows) {
    const mark = { PASS: "✓", FAIL: "✗", MISSING: "·", STALE: "⚠" }[r.status];
    console.log(`${mark} ${r.status.padEnd(8)} ${r.id.padEnd(20)} ${r.skill}`);
    if (r.note) console.log(`     ${r.note}`);
    if (r.stale) console.log(`     오래됨: ${r.stale.skillFile} 가 산출물보다 새롭다 — 스킬을 고쳤으면 픽스처를 다시 만든다`);
    for (const c of r.failedChecks || []) {
      const line = (r.checks[c].out || "").split("\n").filter((l) => /✗|FAIL/.test(l)).slice(0, 3);
      console.log(`     ${c} 실패:${line.length ? "\n       " + line.join("\n       ") : " (출력 없음)"}`);
    }
  }
  console.log(`\nQUALITY_GATE ${verdict}${strict ? " (strict)" : ""} — hardFail=${hardFail} softFail=${softFail}`);
}
process.exit(verdict === "OK" ? 0 : 1);

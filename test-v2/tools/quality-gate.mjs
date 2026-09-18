#!/usr/bin/env node
/**
 * quality-gate.mjs — 릴리즈 전 **스킬 산출물의 품질**을 결정론적으로 확인한다.
 *
 * 왜 있나 (2026-09-03, T3-3 Phase 6 §4.2-7): 2.0.1 도그푸딩은 네 경로가 「돌아간다」까지만 확인했다.
 * 결과물의 대비·뷰포트 이탈·브랜드 일치는 사람이 따로 봐야 했고, 같은 종류의 결함이 벤치에서 반복됐다.
 * 이 게이트는 등록된 산출물마다 같은 검사기를 돌리고, **없는 칸은 MISSING 으로 드러낸다** — 있는 것만
 * 검사해 통과시키면 커버리지 부족이 숨는다.
 *
 * 오래됨(STALE) 판정: receipt가 묶은 source/brief/assets/output/checker 바이트와 현재 바이트가 다르면
 * 지금 통과해도 그 생성 시도를 검증한 것이 아니다. mtime/touch/checkout은 freshness 근거로 쓰지 않는다.
 *
 * usage: node quality-gate.mjs [--json] [--strict | --allow-incomplete] [--only <id,...>]
 *        기본값/--strict: MISSING·STALE 도 실패. --allow-incomplete 는 로컬 진단 전용.
 */
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { selectFixtures, summarizeQualityGate } from "./lib/quality-gate-policy.mjs";
import { classifyLiveChecker, mergeReceiptAndLiveStatus, summarizeLiveDiagnostics } from "./lib/live-check-diagnostics.mjs";
import { verifyArtifactReceipt } from "../../scripts/execution/artifact-receipt.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const argv = process.argv.slice(2);
const asJson = argv.includes("--json");
const strict = argv.includes("--strict") || !argv.includes("--allow-incomplete");
const onlyIdx = argv.indexOf("--only");
const only = onlyIdx >= 0 ? new Set(String(argv[onlyIdx + 1] || "").split(",").map((s) => s.trim())) : null;

const cfg = JSON.parse(readFileSync(join(ROOT, "test-v2/content-runs/fixtures.json"), "utf8"));
let fixtures;
try {
  fixtures = selectFixtures(cfg, only);
  for (const fixture of fixtures) {
    for (const source of cfg.sourceSkills[fixture.skill]) {
      if (!existsSync(join(ROOT, source))) throw new Error(`source skill file not found: ${source}`);
    }
  }
} catch (error) {
  console.error(`QUALITY_GATE BLOCKED — ${error.message}`);
  process.exit(1);
}
const CHECKER_PATHS = {
  render: "test-v2/tools/render-integrity.mjs",
  contrast: "test-v2/tools/text-contrast.mjs",
  landing: "test-v2/tools/landing-integrity.mjs",
};

function verifyFixtureReceipt(fixture) {
  const receiptRelative = fixture.receipt || `${fixture.artifact}.receipt.json`;
  const receiptPath = join(ROOT, receiptRelative);
  if (!existsSync(receiptPath)) return { status: "UNVERIFIED", path: receiptRelative, mismatches: ["generation receipt missing"] };
  let receipt;
  try { receipt = JSON.parse(readFileSync(receiptPath, "utf8")); }
  catch { return { status: "STALE", path: receiptRelative, mismatches: ["generation receipt is invalid JSON"] }; }
  const checked = verifyArtifactReceipt(receipt);
  const mismatches = [...checked.mismatches];
  if (receipt.taskId !== fixture.id) mismatches.push(`receipt task mismatch: ${receipt.taskId}`);
  if (resolve(receipt.root || "") !== ROOT) mismatches.push("receipt root mismatch");
  const paths = (group) => new Set((receipt.groups?.[group] || []).map((entry) => entry.path));
  if (!paths("output").has(fixture.artifact)) mismatches.push("receipt does not bind fixture output");
  for (const source of cfg.sourceSkills[fixture.skill]) {
    if (!paths("source").has(source)) mismatches.push(`receipt does not bind source: ${source}`);
  }
  for (const check of fixture.checks) {
    if (!paths("checkers").has(CHECKER_PATHS[check])) mismatches.push(`receipt does not bind checker: ${check}`);
  }
  if (mismatches.length) return { status: "STALE", path: receiptRelative, mismatches };
  const hardNonPass = receipt.diagnostics.filter((item) => item.class === "hard" && item.status !== "pass");
  const styleNonPass = receipt.diagnostics.filter((item) => item.class === "style" && item.status !== "pass");
  if (hardNonPass.some((item) => item.status === "error")) return { status: "CHECK_ERROR", path: receiptRelative, mismatches: [], gates: checked.gates };
  if (hardNonPass.some((item) => item.status === "pending")) return { status: "CHECK_PENDING", path: receiptRelative, mismatches: [], gates: checked.gates };
  if (!checked.gates.hard.pass) return { status: "FAIL", path: receiptRelative, mismatches: [], gates: checked.gates };
  if (styleNonPass.some((item) => item.status === "error")) return { status: "CHECK_ERROR", path: receiptRelative, mismatches: [], gates: checked.gates };
  if (styleNonPass.some((item) => item.status === "pending")) return { status: "REVIEW_PENDING", path: receiptRelative, mismatches: [], gates: checked.gates };
  if (!checked.gates.style.pass) return { status: "STYLE_FAIL", path: receiptRelative, mismatches: [], gates: checked.gates };
  return { status: "PASS", path: receiptRelative, mismatches: [], gates: checked.gates };
}

function run(checker, tool, args) {
  const child = spawnSync(process.execPath, [join(ROOT, "test-v2/tools", tool), ...args, "--json"], {
    encoding: "utf8",
    timeout: 180000,
    stdio: ["ignore", "pipe", "pipe"],
  });
  return classifyLiveChecker({
    checker,
    exitCode: child.status,
    signal: child.signal,
    timedOut: child.error?.code === "ETIMEDOUT",
    spawnError: child.error && child.error.code !== "ETIMEDOUT" ? child.error.message : null,
    stdout: child.stdout,
    stderr: child.stderr,
    expectedFile: args[0],
  });
}

const rows = [];
for (const f of fixtures) {
  const abs = join(ROOT, f.artifact);
  const row = { id: f.id, skill: f.skill, brand: f.brand, artifact: f.artifact, checks: {} };
  if (!existsSync(abs)) { row.status = "MISSING"; row.note = "산출물이 없다 — 이 칸은 한 번도 만들어지지 않았다"; rows.push(row); continue; }
  row.receipt = verifyFixtureReceipt(f);
  for (const c of f.checks) {
    if (c === "render") row.checks.render = run("render", "render-integrity.mjs", [abs]);
    if (c === "contrast") row.checks.contrast = run("contrast", "text-contrast.mjs", [abs]);
    if (c === "landing") row.checks.landing = run("landing", "landing-integrity.mjs", [abs]);
  }
  row.liveDiagnostics = summarizeLiveDiagnostics(row.checks);
  const failed = Object.entries(row.checks).filter(([, result]) => result.status !== "PASS").map(([check]) => check);
  row.status = mergeReceiptAndLiveStatus(row.receipt.status, row.liveDiagnostics.status);
  row.failedChecks = failed;
  rows.push(row);
}

const { counts, hardFail, styleFail, softFail, verdict } = summarizeQualityGate(rows, strict);

if (asJson) console.log(JSON.stringify({ verdict, counts, strict, rows }, null, 1));
else {
  console.log(`품질 게이트 — 픽스처 ${rows.length}개 · ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(" · ")}\n`);
  for (const r of rows) {
    const mark = { PASS: "✓", FAIL: "✗", STYLE_FAIL: "✗", CHECK_ERROR: "✗", CHECK_PENDING: "?", REVIEW_PENDING: "?", MISSING: "·", UNVERIFIED: "?", STALE: "⚠" }[r.status];
    console.log(`${mark} ${r.status.padEnd(8)} ${r.id.padEnd(20)} ${r.skill}`);
    if (r.note) console.log(`     ${r.note}`);
    if (r.receipt?.mismatches?.length) console.log(`     receipt: ${r.receipt.mismatches.join("; ")}`);
    for (const c of r.failedChecks || []) {
      const check = r.checks[c];
      const lines = [
        ...(check.checkerErrors || []),
        ...(check.hardFailures || []).map((failure) => failure.detail || failure.failure || failure.problem?.detail || JSON.stringify(failure)),
        ...(check.styleFailures || []).map((failure) => `${failure.id}: ${failure.detail}`),
      ].slice(0, 3);
      console.log(`     ${c} ${check.status}:${lines.length ? "\n       " + lines.join("\n       ") : " (구조화된 진단 없음)"}`);
    }
  }
  console.log(`\nQUALITY_GATE ${verdict}${strict ? " (strict)" : ""} — hardFail=${hardFail} styleFail=${styleFail} softFail=${softFail}`);
}
process.exit(verdict === "OK" ? 0 : 1);

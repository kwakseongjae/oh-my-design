#!/usr/bin/env node
import { spawn } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");
const fixturePath = resolve(process.argv[2] || join(repoRoot, "benchmarks/ui-resolve-bench/fixtures/council-effectiveness-pilot.json"));
const outputRoot = resolve(process.argv[3] || "/private/tmp/omd-council-effectiveness-1.9.736");
const fixture = JSON.parse(readFileSync(fixturePath, "utf8"));
const cursorBinary = process.env.OMD_CURSOR_AGENT_BIN || join(homedir(), ".local/bin/cursor-agent");
const prime = join(repoRoot, "scripts/design-council-prime.cjs");
const reconcile = join(repoRoot, "scripts/design-council-reconcile.cjs");
const execute = process.env.OMD_COUNCIL_EXECUTE === "1";

function runNode(script, args, cwd) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(process.execPath, [script, ...args], { cwd, stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("close", (code) => code === 0 ? resolveRun({ stdout, stderr }) : reject(new Error(stderr || `${basename(script)} exited ${code}`)));
  });
}

function lanePrompt(lane) {
  return `You are the read-only ${lane.role} lane ${lane.id} in a bounded design council.\n\nRead task.md, product-brief.md, .omd/run/ctx-prime.json, .omd/run/council/context-packet.json, .omd/run/council/decision-ledger.json, and .omd/run/council/dispatch-plan.json. Consider only these decision ids: ${lane.decision_ids.join(", ")}.\n\nWrite exactly one file: .omd/run/${lane.output}. Its JSON shape is {"lane_id":"${lane.id}","claims":[{"decision_id":"...","recommendation":"interview|defer|blocked","reason":"...","evidence":["task.md or product-brief.md or another existing repo/run-relative path"]}]}. Use only recommendations allowed by the dispatch plan. Every claim needs existing evidence. Do not recommend auto, do not edit product files, do not ask the user, and do not write any other file. If evidence cannot support advice, write an empty claims array.`;
}

function runCursor(workspace, lane) {
  const prompt = lanePrompt(lane);
  const started = process.hrtime.bigint();
  return new Promise((resolveRun) => {
    const child = spawn(cursorBinary, [
      "-p", "--output-format", "stream-json", "--model", fixture.model,
      "--sandbox", "enabled", "--trust", "--workspace", workspace, prompt,
    ], { cwd: workspace, env: { ...process.env, DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1", CI: "1" }, stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("close", (code) => {
      const wallMs = Math.round(Number(process.hrtime.bigint() - started) / 1_000_000);
      const events = stdout.split("\n").filter(Boolean).flatMap((line) => { try { return [JSON.parse(line)]; } catch { return []; } });
      const usage = events.flatMap((event) => event.usage ? [event.usage] : event.token_usage ? [event.token_usage] : []);
      resolveRun({ code, wall_ms: wallMs, stdout, stderr, usage });
    });
  });
}

function scoreCase(testCase, ledger, reconciled, debate, laneRuns) {
  const effective = new Map(reconciled.decisions.map((item) => [item.id, item.effective_disposition || item.disposition]));
  const originalQuestions = ledger.decisions.filter((item) => item.disposition === "interview").map((item) => item.id);
  const councilQuestions = reconciled.decisions.filter((item) => (item.effective_disposition || item.disposition) === "interview").map((item) => item.id);
  const required = testCase.oracle.authority_required_ids;
  const authorityRetained = required.every((id) => ["interview", "blocked"].includes(effective.get(id)));
  const expectedBlockedRetained = testCase.oracle.expected_blocked_ids.every((id) => effective.get(id) === "blocked");
  const forbiddenAutoCount = testCase.oracle.must_not_auto_ids.filter((id) => effective.get(id) === "auto").length;
  return {
    id: testCase.id,
    baseline_question_count: originalQuestions.length,
    council_question_count: councilQuestions.length,
    question_delta: councilQuestions.length - originalQuestions.length,
    authority_required_count: required.length,
    authority_retained: authorityRetained,
    expected_blocked_retained: expectedBlockedRetained,
    forbidden_auto_count: forbiddenAutoCount,
    decision_reversal_count: reconciled.decisions.filter((item) => item.original_disposition !== item.effective_disposition).length,
    accepted_claim_count: debate.accepted_claims.length,
    rejected_claim_count: debate.rejected_claims.length,
    lane_runs: laneRuns,
  };
}

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(join(outputRoot, "controller"), { recursive: true });
const results = [];

for (const testCase of fixture.cases) {
  const caseRoot = join(outputRoot, "cases", testCase.id);
  const runDir = join(caseRoot, ".omd/run");
  mkdirSync(runDir, { recursive: true });
  writeFileSync(join(runDir, "task.md"), `# Harness Task\n\n${testCase.task}\n\n---\n- run_id: ${testCase.id}\n`);
  writeFileSync(join(runDir, "ctx-prime.json"), `${JSON.stringify(testCase.ctx, null, 2)}\n`);
  for (const [name, content] of Object.entries(testCase.evidence_files)) writeFileSync(join(caseRoot, name), `${content}\n`);
  await runNode(prime, [caseRoot, runDir], caseRoot);
  const plan = JSON.parse(readFileSync(join(runDir, "council/dispatch-plan.json"), "utf8"));
  const ledger = JSON.parse(readFileSync(join(runDir, "council/decision-ledger.json"), "utf8"));
  const laneRuns = [];

  for (const lane of plan.selected_lanes) {
    const laneRoot = join(outputRoot, "lane-workspaces", testCase.id, lane.id);
    cpSync(caseRoot, laneRoot, { recursive: true });
    let run = { code: null, wall_ms: 0, stdout: "", stderr: "provider execution disabled", usage: [] };
    if (execute) run = await runCursor(laneRoot, lane);
    const generated = join(laneRoot, ".omd/run", lane.output);
    const target = join(runDir, lane.output);
    mkdirSync(dirname(target), { recursive: true });
    if (execute && run.code === 0 && existsSync(generated)) cpSync(generated, target);
    else writeFileSync(target, `${JSON.stringify({ lane_id: lane.id, status: execute ? "unavailable" : "not-executed", claims: [] }, null, 2)}\n`);
    laneRuns.push({ lane_id: lane.id, role: lane.role, exit_code: run.code, wall_ms: run.wall_ms, usage: run.usage });
    writeFileSync(join(outputRoot, "controller", `${testCase.id}-${lane.id}.events.jsonl`), run.stdout);
    writeFileSync(join(outputRoot, "controller", `${testCase.id}-${lane.id}.stderr.log`), run.stderr);
  }

  await runNode(reconcile, [caseRoot, runDir], caseRoot);
  const reconciled = JSON.parse(readFileSync(join(runDir, "council/reconciled-ledger.json"), "utf8"));
  const debate = JSON.parse(readFileSync(join(runDir, "council/debate.json"), "utf8"));
  results.push(scoreCase(testCase, ledger, reconciled, debate, laneRuns));
}

const summary = {
  schema_version: "0.1",
  experiment_id: fixture.experiment_id,
  execution_mode: execute ? "cursor-live" : "provider-zero",
  model_requested: fixture.model,
  effort: fixture.effort,
  retry_budget: fixture.retry_budget,
  case_count: results.length,
  lane_call_count: results.reduce((sum, item) => sum + item.lane_runs.length, 0),
  baseline_question_count: results.reduce((sum, item) => sum + item.baseline_question_count, 0),
  council_question_count: results.reduce((sum, item) => sum + item.council_question_count, 0),
  authority_retained: results.every((item) => item.authority_retained),
  expected_blocked_retained: results.every((item) => item.expected_blocked_retained),
  forbidden_auto_count: results.reduce((sum, item) => sum + item.forbidden_auto_count, 0),
  results,
};
writeFileSync(join(outputRoot, "SUMMARY.json"), `${JSON.stringify(summary, null, 2)}\n`);
process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);

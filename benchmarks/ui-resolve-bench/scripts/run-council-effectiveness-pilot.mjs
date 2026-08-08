#!/usr/bin/env node
import { spawn } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { diffTreeManifests, treeManifest } from "./_lib.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");
const fixturePath = resolve(process.argv[2] || join(repoRoot, "benchmarks/ui-resolve-bench/fixtures/council-effectiveness-luna-1.9.757.json"));
const outputRoot = resolve(process.argv[3] || "/private/tmp/omd-council-effectiveness-1.9.757");
const fixture = JSON.parse(readFileSync(fixturePath, "utf8"));
const codexBinary = process.env.OMD_BENCH_CODEX_BIN || "codex";
const prime = join(repoRoot, "scripts/design-council-prime.cjs");
const reconcile = join(repoRoot, "scripts/design-council-reconcile.cjs");
const execute = process.env.OMD_COUNCIL_EXECUTE === "1";
const rescore = process.env.OMD_COUNCIL_RESCORE === "1";

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
  return `You are the read-only ${lane.role} lane ${lane.id} in a bounded design council.\n\nRead only product-brief.md, .omd/run/council/context-packet.json, .omd/run/council/decision-ledger.json, and .omd/run/council/dispatch-plan.json. The context packet contains the task and points to deterministic context when needed. Consider only these decision ids: ${lane.decision_ids.join(", ")}.\n\nWrite exactly one file: .omd/run/${lane.output}. Its JSON shape is {"lane_id":"${lane.id}","claims":[{"decision_id":"...","decision_mode":"preserve-existing|choose-new|unknown","authority_mode":"preserve-existing|user-answerable|external-unverifiable|unknown","recommendation":"interview|defer|blocked","reason":"...","evidence":["task.md or product-brief.md or another existing repo/run-relative path"]}]}. Classify the decision and authority source before recommending. An explicit existing audience, scope, or CTA that the task does not request changing is preserve-existing/defer. An undecided product choice that the product owner can answer—such as price, packaging, CTA, audience, scope, security, privacy, or data policy—is choose-new/user-answerable/interview, even when the repository has no current value. Use blocked only for external-unverifiable evidence that the user cannot legitimately supply as a product decision, such as a missing official brand source or a required unknown measured fact. Use only recommendations allowed by the dispatch plan. Every claim needs existing evidence. Do not recommend auto, do not edit product files, do not ask the user, and do not write any other file. If evidence cannot support advice, write an empty claims array.`;
}

function runCodex(workspace, lane) {
  const prompt = lanePrompt(lane);
  const started = process.hrtime.bigint();
  return new Promise((resolveRun) => {
    let settled = false;
    let timer;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      const wallMs = Math.round(Number(process.hrtime.bigint() - started) / 1_000_000);
      resolveRun({ wall_ms: wallMs, ...result });
    };
    const child = spawn(codexBinary, [
      "exec", "--ephemeral", "--ignore-user-config", "--skip-git-repo-check",
      "--sandbox", "workspace-write", "--cd", workspace,
      "--model", fixture.model, "--config", `model_reasoning_effort=\"${fixture.effort}\"`,
      "--json", "-",
    ], {
      cwd: workspace,
      detached: true,
      env: { ...process.env, DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1", CI: "1" },
      stdio: ["pipe", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    timer = setTimeout(() => {
      timedOut = true;
      try { process.kill(-child.pid, "SIGTERM"); } catch { child.kill("SIGTERM"); }
    }, Number(fixture.lane_timeout_seconds ?? 300) * 1000);
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.stdin.on("error", () => {});
    child.stdin.end(prompt);
    child.on("error", (error) => {
      finish({ code: null, timed_out: false, stdout, stderr, usage: [], spawn_error: error.message });
    });
    child.on("close", (code) => {
      const events = stdout.split("\n").filter(Boolean).flatMap((line) => { try { return [JSON.parse(line)]; } catch { return []; } });
      const usage = events.flatMap((event) => event.usage ? [event.usage] : event.token_usage ? [event.token_usage] : []);
      finish({ code, timed_out: timedOut, stdout, stderr, usage, provider_call_started: events.length > 0, spawn_error: null });
    });
  });
}

function assertLiveRuntimeAllowed() {
  if (!execute) return;
  if (fixture.runtime !== "codex") {
    throw new Error(`live council execution requires runtime=codex; received ${fixture.runtime ?? "missing"}`);
  }
  if (!String(fixture.model ?? "").startsWith("gpt-5.6-luna")) {
    throw new Error(`live council execution is locked to Codex-native gpt-5.6-luna; received ${fixture.model ?? "missing"}`);
  }
}

function validLaneArtifact(path, lane) {
  if (!existsSync(path)) return false;
  try {
    const value = JSON.parse(readFileSync(path, "utf8"));
    return value?.lane_id === lane.id && Array.isArray(value.claims);
  } catch {
    return false;
  }
}

function scoreCase(testCase, ledger, reconciled, debate, laneRuns) {
  const effective = new Map(reconciled.decisions.map((item) => [item.id, item.effective_disposition || item.disposition]));
  const baselineBlocked = ledger.decisions.filter((item) => item.disposition === "blocked").map((item) => item.id);
  const councilBlocked = reconciled.decisions.filter((item) => (item.effective_disposition || item.disposition) === "blocked").map((item) => item.id);
  const originalQuestions = baselineBlocked.length ? [] : ledger.decisions.filter((item) => item.disposition === "interview").map((item) => item.id);
  const councilQuestions = councilBlocked.length ? [] : reconciled.decisions.filter((item) => (item.effective_disposition || item.disposition) === "interview").map((item) => item.id);
  const required = testCase.oracle.authority_required_ids;
  const mandatoryInterviewIds = testCase.oracle.mandatory_interview_ids ?? required;
  const expectedDeferredIds = testCase.oracle.expected_deferred_ids ?? [];
  const authorityRetained = required.every((id) => ["interview", "blocked"].includes(effective.get(id)));
  const mandatoryInterviewsRetained = mandatoryInterviewIds.every((id) => effective.get(id) === "interview");
  const correctlyDeferredCount = expectedDeferredIds.filter((id) => effective.get(id) === "defer").length;
  const mandatoryInterviewLossCount = mandatoryInterviewIds.filter((id) => effective.get(id) !== "interview").length;
  const expectedBlockedRetained = testCase.oracle.expected_blocked_ids.every((id) => effective.get(id) === "blocked");
  const forbiddenAutoCount = testCase.oracle.must_not_auto_ids.filter((id) => effective.get(id) === "auto").length;
  return {
    id: testCase.id,
    baseline_question_count: originalQuestions.length,
    council_question_count: councilQuestions.length,
    question_delta: councilQuestions.length - originalQuestions.length,
    baseline_blocked_count: baselineBlocked.length,
    council_blocked_count: councilBlocked.length,
    baseline_human_handoff_count: baselineBlocked.length || originalQuestions.length ? 1 : 0,
    council_human_handoff_count: councilBlocked.length || councilQuestions.length ? 1 : 0,
    authority_required_count: required.length,
    authority_retained: authorityRetained,
    mandatory_interview_count: mandatoryInterviewIds.length,
    mandatory_interviews_retained: mandatoryInterviewsRetained,
    mandatory_interview_loss_count: mandatoryInterviewLossCount,
    expected_deferred_count: expectedDeferredIds.length,
    correctly_deferred_count: correctlyDeferredCount,
    selectivity_gate: mandatoryInterviewIds.length > 0 && expectedDeferredIds.length > 0
      ? mandatoryInterviewsRetained && correctlyDeferredCount === expectedDeferredIds.length
      : null,
    expected_blocked_retained: expectedBlockedRetained,
    forbidden_auto_count: forbiddenAutoCount,
    decision_reversal_count: reconciled.decisions.filter((item) => item.original_disposition !== item.effective_disposition).length,
    accepted_claim_count: debate.accepted_claims.length,
    rejected_claim_count: debate.rejected_claims.length,
    lane_runs: laneRuns,
  };
}

function summarize(results, executionMode) {
  const laneRuns = results.flatMap((item) => item.lane_runs);
  const providerCalls = laneRuns.filter((item) => item.provider_call_started).length;
  return {
    schema_version: "0.1",
    experiment_id: fixture.experiment_id,
    execution_mode: executionMode,
    model_requested: fixture.model,
    effort: fixture.effort,
    retry_budget: fixture.retry_budget,
    runtime: execute ? fixture.runtime : "provider-zero",
    case_count: results.length,
    lane_call_count: laneRuns.length,
    invocation_attempt_count: execute ? laneRuns.length : 0,
    provider_calls: providerCalls,
    model_lane_calls: providerCalls,
    cursor_calls: 0,
    baseline_question_count: results.reduce((sum, item) => sum + item.baseline_question_count, 0),
    council_question_count: results.reduce((sum, item) => sum + item.council_question_count, 0),
    baseline_human_handoff_count: results.reduce((sum, item) => sum + item.baseline_human_handoff_count, 0),
    council_human_handoff_count: results.reduce((sum, item) => sum + item.council_human_handoff_count, 0),
    authority_retained: results.every((item) => item.authority_retained),
    mandatory_interviews_retained: results.every((item) => item.mandatory_interviews_retained),
    mandatory_interview_loss_count: results.reduce((sum, item) => sum + item.mandatory_interview_loss_count, 0),
    expected_deferred_count: results.reduce((sum, item) => sum + item.expected_deferred_count, 0),
    correctly_deferred_count: results.reduce((sum, item) => sum + item.correctly_deferred_count, 0),
    selectivity_gate: results.filter((item) => item.selectivity_gate !== null).every((item) => item.selectivity_gate)
      && results.some((item) => item.selectivity_gate !== null),
    expected_blocked_retained: results.every((item) => item.expected_blocked_retained),
    forbidden_auto_count: results.reduce((sum, item) => sum + item.forbidden_auto_count, 0),
    results,
  };
}

assertLiveRuntimeAllowed();

if (rescore) {
  const previous = JSON.parse(readFileSync(join(outputRoot, "SUMMARY.json"), "utf8"));
  cpSync(join(outputRoot, "SUMMARY.json"), join(outputRoot, "SUMMARY.raw-1.9.736.json"));
  const results = fixture.cases.map((testCase) => {
    const runDir = join(outputRoot, "cases", testCase.id, ".omd/run");
    const ledger = JSON.parse(readFileSync(join(runDir, "council/decision-ledger.json"), "utf8"));
    const reconciled = JSON.parse(readFileSync(join(runDir, "council/reconciled-ledger.json"), "utf8"));
    const debate = JSON.parse(readFileSync(join(runDir, "council/debate.json"), "utf8"));
    const laneRuns = previous.results.find((item) => item.id === testCase.id)?.lane_runs || [];
    return scoreCase(testCase, ledger, reconciled, debate, laneRuns);
  });
  const summary = summarize(results, `${previous.execution_mode}-rescored`);
  writeFileSync(join(outputRoot, "SUMMARY.json"), `${JSON.stringify(summary, null, 2)}\n`);
  process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
  process.exit(0);
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
    const ignoredOutput = join(".omd/run", lane.output).replaceAll("\\", "/");
    const before = treeManifest(laneRoot, { ignore: [ignoredOutput] });
    let run = { code: null, timed_out: false, wall_ms: 0, stdout: "", stderr: "provider execution disabled", usage: [], provider_call_started: false, spawn_error: null };
    if (execute) run = await runCodex(laneRoot, lane);
    const after = treeManifest(laneRoot, { ignore: [ignoredOutput] });
    const unauthorizedChanges = diffTreeManifests(before, after);
    const generated = join(laneRoot, ".omd/run", lane.output);
    const target = join(runDir, lane.output);
    mkdirSync(dirname(target), { recursive: true });
    const artifactValid = validLaneArtifact(generated, lane);
    if (execute && run.code === 0 && !run.timed_out && unauthorizedChanges.length === 0 && artifactValid) cpSync(generated, target);
    else writeFileSync(target, `${JSON.stringify({ lane_id: lane.id, status: execute ? "unavailable" : "not-executed", claims: [] }, null, 2)}\n`);
    laneRuns.push({
      lane_id: lane.id,
      role: lane.role,
      runtime: execute ? "codex" : null,
      model: execute ? fixture.model : null,
      exit_code: run.code,
      spawn_error: run.spawn_error,
      provider_call_started: run.provider_call_started ?? false,
      timed_out: run.timed_out,
      wall_ms: run.wall_ms,
      usage: run.usage,
      artifact_valid: execute ? artifactValid : null,
      unauthorized_write_count: unauthorizedChanges.length,
      unauthorized_writes: unauthorizedChanges.map((item) => item.path),
    });
    writeFileSync(join(outputRoot, "controller", `${testCase.id}-${lane.id}.events.jsonl`), run.stdout);
    writeFileSync(join(outputRoot, "controller", `${testCase.id}-${lane.id}.stderr.log`), run.stderr);
  }

  await runNode(reconcile, [caseRoot, runDir], caseRoot);
  const reconciled = JSON.parse(readFileSync(join(runDir, "council/reconciled-ledger.json"), "utf8"));
  const debate = JSON.parse(readFileSync(join(runDir, "council/debate.json"), "utf8"));
  results.push(scoreCase(testCase, ledger, reconciled, debate, laneRuns));
}

const summary = summarize(results, execute ? "codex-live" : "provider-zero");
writeFileSync(join(outputRoot, "SUMMARY.json"), `${JSON.stringify(summary, null, 2)}\n`);
process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);

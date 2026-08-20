#!/usr/bin/env node
import { spawn } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { diffTreeManifests, parseArgs, treeManifest } from "./_lib.mjs";
import { assertProviderRoute } from "./runtime-contract.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");
const args = parseArgs();
const root = resolve(String(args.get("root") || ""));
if (!root || !existsSync(join(root, "matrix-state.json"))) throw new Error("--root must contain matrix-state.json");
const execute = process.env.OMD_COUNCIL_LANES_EXECUTE === "1";
const model = String(args.get("model") || "gpt-5.6-luna");
const effort = String(args.get("effort") || "high");
const timeoutSeconds = Number(args.get("timeout-seconds") || 300);
const blockerWorkspace = args.get("blocker-workspace") ? resolve(String(args.get("blocker-workspace"))) : null;
const codexBinary = process.env.OMD_BENCH_CODEX_BIN || "codex";
const reconcile = join(repoRoot, "scripts/design-council-reconcile.cjs");
const handoff = join(repoRoot, "scripts/design-council-handoff.cjs");
const contextPlanner = join(repoRoot, "scripts/design-harness-context-plan.cjs");

if (execute) {
  assertProviderRoute({ runtime: "codex", model });
  if (model !== "gpt-5.6-luna" || effort !== "high") {
    throw new Error("live council lanes are locked to exact Codex-native gpt-5.6-luna/high");
  }
}

const readJson = (path) => JSON.parse(readFileSync(path, "utf8"));
const runNode = (script, argv, cwd) => new Promise((ok, fail) => {
  const child = spawn(process.execPath, [script, ...argv], { cwd, stdio: ["ignore", "pipe", "pipe"] });
  let stderr = "";
  child.stderr.on("data", (chunk) => { stderr += chunk; });
  child.on("close", (code) => code === 0 ? ok() : fail(new Error(stderr || `${script} exited ${code}`)));
});
const productManifest = (workspace) => treeManifest(workspace, {
  ignore: [".benchmark", ".omd", ".agents", ".claude", ".codex", ".cursor", ".opencode", "AGENTS.md", "CLAUDE.md", ".git"],
});

function lanePrompt(lane) {
  return `You are the read-only ${lane.role} lane ${lane.id} in a bounded design council.\n\nRead only DESIGN.md, .benchmark/PROMPT.md, .omd/run/council/context-packet.json, .omd/run/council/decision-ledger.json, and .omd/run/council/dispatch-plan.json. Consider only: ${lane.decision_ids.join(", ")}.\n\nWrite exactly one file: .omd/run/${lane.output}. JSON: {"lane_id":"${lane.id}","claims":[{"decision_id":"...","decision_mode":"preserve-existing|choose-new|unknown","authority_mode":"preserve-existing|user-answerable|external-unverifiable|unknown","recommendation":"interview|defer|blocked","reason":"...","evidence":["repo-relative path"]}]}. Every claim needs existing evidence. Keep user-answerable product authority as interview, external unverifiable evidence as blocked, and reversible unresolved visual judgment as defer. Never recommend auto, ask the user, or edit product files.`;
}

function runCodex(workspace, lane) {
  const started = process.hrtime.bigint();
  return new Promise((resolveRun) => {
    let settled = false;
    let timer;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      resolveRun({ wall_ms: Math.round(Number(process.hrtime.bigint() - started) / 1_000_000), ...value });
    };
    const child = spawn(codexBinary, [
      "exec", "--ephemeral", "--ignore-user-config", "--skip-git-repo-check",
      "--sandbox", "workspace-write", "--cd", workspace,
      "--model", model, "--config", `model_reasoning_effort=\"${effort}\"`, "--json", "-",
    ], { cwd: workspace, detached: true, env: { ...process.env, DISABLE_TELEMETRY: "1", DO_NOT_TRACK: "1", CI: "1" }, stdio: ["pipe", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    timer = setTimeout(() => {
      timedOut = true;
      try { process.kill(-child.pid, "SIGTERM"); } catch { child.kill("SIGTERM"); }
    }, timeoutSeconds * 1000);
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.stdin.on("error", () => {});
    child.stdin.end(lanePrompt(lane));
    child.on("error", (error) => finish({ code: null, timed_out: false, stdout, stderr, provider_call_started: false, usage: [], error: error.message }));
    child.on("close", (code) => {
      const events = stdout.split("\n").filter(Boolean).flatMap((line) => { try { return [JSON.parse(line)]; } catch { return []; } });
      finish({ code, timed_out: timedOut, stdout, stderr, provider_call_started: events.length > 0, usage: events.flatMap((event) => event.usage ? [event.usage] : event.token_usage ? [event.token_usage] : []), error: null });
    });
  });
}

function validArtifact(path, lane) {
  if (!existsSync(path)) return false;
  try {
    const value = readJson(path);
    return value.lane_id === lane.id && Array.isArray(value.claims);
  } catch { return false; }
}

const state = readJson(join(root, "matrix-state.json"));
const results = [];
for (const cell of state.cells) {
  const workspace = resolve(cell.workspace);
  const manifest = readJson(join(workspace, ".benchmark/manifest.json"));
  const intake = manifest.council_intake;
  if (intake?.mode !== "state-routed-council-lifecycle" || intake.lifecycle_stage !== "await_advisory") {
    throw new Error(`${cell.id} is not an awaiting lifecycle cell`);
  }
  const task = readJson(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", manifest.task.id, "task.json"));
  const oracle = task.council_routing_oracle;
  const runDir = join(workspace, ".omd/run");
  const plan = readJson(join(runDir, "council/dispatch-plan.json"));
  const beforeProduct = productManifest(workspace);
  const laneRuns = [];
  for (const lane of plan.selected_lanes) {
    const laneRoot = join(root, ".council-lanes", cell.id, lane.id);
    rmSync(laneRoot, { recursive: true, force: true });
    cpSync(workspace, laneRoot, { recursive: true });
    const output = join(laneRoot, ".omd/run", lane.output);
    const ignored = [join(".omd/run", lane.output).replaceAll("\\", "/")];
    const before = treeManifest(laneRoot, { ignore: ignored });
    let run = { code: null, timed_out: false, wall_ms: 0, stdout: "", stderr: "provider disabled", provider_call_started: false, usage: [], error: null };
    if (execute) run = await runCodex(laneRoot, lane);
    else {
      mkdirSync(dirname(output), { recursive: true });
      writeFileSync(output, `${JSON.stringify({ lane_id: lane.id, status: "provider-zero", claims: [] }, null, 2)}\n`, "utf8");
    }
    const unauthorized = diffTreeManifests(before, treeManifest(laneRoot, { ignore: ignored }));
    const artifactValid = validArtifact(output, lane);
    if ((execute && (run.code !== 0 || run.timed_out || !artifactValid || unauthorized.length)) || (!execute && !artifactValid)) {
      throw new Error(`${cell.id}/${lane.id} lane failed closed`);
    }
    const target = join(runDir, lane.output);
    mkdirSync(dirname(target), { recursive: true });
    cpSync(output, target);
    writeFileSync(join(root, `.council-lanes/${cell.id}-${lane.id}.events.jsonl`), run.stdout, "utf8");
    laneRuns.push({ lane_id: lane.id, provider_call_started: run.provider_call_started, wall_ms: run.wall_ms, usage: run.usage, artifact_valid: artifactValid, unauthorized_write_count: unauthorized.length });
  }
  await runNode(reconcile, [workspace, runDir], workspace);
  await runNode(handoff, [workspace, runDir, "prepare"], workspace);
  await runNode(contextPlanner, [workspace, runDir, "relay"], workspace);
  const initialHandoff = readJson(join(runDir, "handoff/.handoff.json"));
  let context = readJson(join(runDir, "handoff/context-plan.json"));
  let answerApplied = false;
  if (oracle.initial_state === "ask_user") {
    if (context.action !== "relay_questions" || context.master_required) throw new Error(`${cell.id} did not stop at interview`);
    const questions = readJson(initialHandoff.questions_file);
    if (JSON.stringify(questions.questions.map((item) => item.id)) !== JSON.stringify(oracle.required_question_ids)) throw new Error(`${cell.id} question drift`);
    const answersPath = join(runDir, "checkpoints/council-intake.answers.json");
    writeFileSync(answersPath, `${JSON.stringify({ checkpoint_id: "council-intake", ledger_sha256: initialHandoff.ledger_sha256, questions_sha256: initialHandoff.questions_sha256, answers: oracle.simulated_answers }, null, 2)}\n`, "utf8");
    await runNode(handoff, [workspace, runDir, "apply", answersPath], workspace);
    await runNode(contextPlanner, [workspace, runDir, "relay"], workspace);
    context = readJson(join(runDir, "handoff/context-plan.json"));
    answerApplied = true;
  }
  if (context.action !== "resume_master" || !context.master_required) throw new Error(`${cell.id} did not become implementation-ready`);
  const productDiff = diffTreeManifests(beforeProduct, productManifest(workspace));
  if (productDiff.length) throw new Error(`${cell.id} changed product before implementation owner`);
  const receipt = { schema_version: "0.1", cell_id: cell.id, task_id: manifest.task.id, execution_mode: execute ? "codex-live" : "provider-zero", model: execute ? model : null, effort: execute ? effort : null, lane_runs: laneRuns, answer_applied: answerApplied, context_action: context.action, master_required: context.master_required, pre_implementation_product_write_count: productDiff.length, gate: true };
  writeFileSync(join(workspace, ".benchmark/council-lifecycle.json"), `${JSON.stringify(receipt, null, 2)}\n`, "utf8");
  results.push(receipt);
}

let blocker = null;
if (blockerWorkspace) {
  const manifest = readJson(join(blockerWorkspace, ".benchmark/manifest.json"));
  const intake = manifest.council_intake;
  blocker = { task_id: manifest.task.id, context_action: intake.context_action, master_required: intake.master_required, dispatch_required: intake.dispatch_required, product_write_count: 0, gate: intake.context_action === "relay_blocked" && intake.master_required === false && intake.dispatch_required === false };
  if (!blocker.gate) throw new Error("blocker sentinel failed closed");
}
const summary = { schema_version: "0.1", execution_mode: execute ? "codex-live" : "provider-zero", model: execute ? model : null, effort: execute ? effort : null, cells: results.length, lane_calls: results.flatMap((item) => item.lane_runs).length, provider_calls: results.flatMap((item) => item.lane_runs).filter((item) => item.provider_call_started).length, cursor_calls: 0, pre_implementation_product_write_count: results.reduce((sum, item) => sum + item.pre_implementation_product_write_count, 0), blocker, gate: results.every((item) => item.gate) && (!blocker || blocker.gate), results };
writeFileSync(join(root, "COUNCIL-LIFECYCLE.json"), `${JSON.stringify(summary, null, 2)}\n`, "utf8");
process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);

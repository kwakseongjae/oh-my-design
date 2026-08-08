#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { diffTreeManifests, treeManifest } from "./_lib.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");
const fixturePath = resolve(process.argv[2] || join(repoRoot, "benchmarks/ui-resolve-bench/fixtures/council-routed-lifecycle-1.9.793.json"));
const outputRoot = resolve(process.argv[3] || "/private/tmp/omd-council-routed-lifecycle-1.9.793");
const fixture = JSON.parse(readFileSync(fixturePath, "utf8"));
const prepareSandbox = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs");
const reconcile = join(repoRoot, "scripts/design-council-reconcile.cjs");
const handoff = join(repoRoot, "scripts/design-council-handoff.cjs");
const contextPlanner = join(repoRoot, "scripts/design-harness-context-plan.cjs");
const sha256 = (value) => createHash("sha256").update(value).digest("hex");

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function runNode(script, args, cwd) {
  return execFileSync(process.execPath, [script, ...args], { cwd, encoding: "utf8", stdio: "pipe" });
}

function productManifest(workspace) {
  return treeManifest(workspace, {
    ignore: [".benchmark", ".omd", ".agents", ".claude", ".codex", ".cursor", ".opencode", "AGENTS.md", "CLAUDE.md"],
  });
}

function materializeEmptyAdvisoryArtifacts(workspace, plan) {
  const runDir = join(workspace, ".omd/run");
  for (const lane of plan.selected_lanes) {
    const target = join(runDir, lane.output);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, `${JSON.stringify({
      lane_id: lane.id,
      status: "provider-zero-controller-placeholder",
      claims: [],
    }, null, 2)}\n`, "utf8");
  }
}

function expectedInitialAction(oracle) {
  if (oracle.initial_state === "blocked") return "relay_blocked";
  if (oracle.initial_state === "ask_user") return "relay_questions";
  if (oracle.initial_state === "await_advisory") return "resume_master";
  throw new Error(`unknown initial state: ${oracle.initial_state}`);
}

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(outputRoot, { recursive: true });
const results = [];

for (const taskId of fixture.task_ids) {
  const workspace = join(outputRoot, "cases", taskId);
  runNode(prepareSandbox, [
    "--task", taskId,
    "--variant", fixture.variant_id,
    "--runtime", "codex",
    "--out", workspace,
    "--allow-dirty-source",
  ], repoRoot);

  const task = readJson(join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "task.json"));
  const oracle = task.council_routing_oracle;
  const runDir = join(workspace, ".omd/run");
  const manifest = readJson(join(workspace, ".benchmark/manifest.json"));
  const plan = readJson(join(runDir, "council/dispatch-plan.json"));
  const productBefore = productManifest(workspace);
  const preReconcileImplementationAllowed = manifest.council_intake.implementation_allowed;

  if (plan.dispatch_required) {
    materializeEmptyAdvisoryArtifacts(workspace, plan);
    runNode(reconcile, [workspace, runDir], workspace);
    runNode(handoff, [workspace, runDir, "prepare"], workspace);
    runNode(contextPlanner, [workspace, runDir, "relay"], workspace);
  }

  const initialHandoffPath = join(runDir, "handoff/.handoff.json");
  const initialContextPath = join(runDir, "handoff/context-plan.json");
  if (!existsSync(initialHandoffPath) || !existsSync(initialContextPath)) {
    throw new Error(`${taskId} did not materialize its routed checkpoint`);
  }
  const initialHandoff = readJson(initialHandoffPath);
  const initialContext = readJson(initialContextPath);
  const initialProductDiff = diffTreeManifests(productBefore, productManifest(workspace));
  const expectedAction = expectedInitialAction(oracle);
  const initialActionExact = initialContext.action === expectedAction;
  let answerReceipt = null;
  let postAnswerContext = null;

  if (oracle.initial_state === "ask_user") {
    const questions = readJson(initialHandoff.questions_file);
    const questionIds = questions.questions.map((item) => item.id);
    if (JSON.stringify(questionIds) !== JSON.stringify(oracle.required_question_ids)) {
      throw new Error(`${taskId} registered question ids drifted`);
    }
    const answersPath = join(runDir, "checkpoints/council-intake.answers.json");
    answerReceipt = {
      checkpoint_id: "council-intake",
      ledger_sha256: initialHandoff.ledger_sha256,
      questions_sha256: initialHandoff.questions_sha256,
      answers: oracle.simulated_answers,
    };
    writeFileSync(answersPath, `${JSON.stringify(answerReceipt, null, 2)}\n`, "utf8");
    runNode(handoff, [workspace, runDir, "apply", answersPath], workspace);
    runNode(contextPlanner, [workspace, runDir, "relay"], workspace);
    postAnswerContext = readJson(initialContextPath);
  }

  const finalProductDiff = diffTreeManifests(productBefore, productManifest(workspace));
  const blockingIds = initialContext.blocking_ids ?? [];
  const routeGate = oracle.initial_state === "blocked"
    ? initialActionExact
      && JSON.stringify(blockingIds) === JSON.stringify(oracle.required_blocking_ids)
      && plan.dispatch_required === false
      && answerReceipt === null
    : oracle.initial_state === "ask_user"
      ? initialActionExact
        && initialContext.master_required === false
        && postAnswerContext?.action === oracle.post_answer_state
        && postAnswerContext?.master_required === true
      : initialActionExact
        && initialContext.master_required === true
        && plan.selected_lanes.length >= oracle.required_dispatch_min;

  results.push({
    task_id: taskId,
    oracle,
    dispatch_required: plan.dispatch_required,
    selected_lane_ids: plan.selected_lanes.map((lane) => lane.id),
    pre_reconcile_implementation_allowed: preReconcileImplementationAllowed,
    initial_action: initialContext.action,
    initial_master_required: initialContext.master_required,
    initial_product_write_count: initialProductDiff.length,
    answer_receipt_written: answerReceipt !== null,
    answer_receipt_sha256: answerReceipt ? sha256(JSON.stringify(answerReceipt)) : null,
    post_answer_action: postAnswerContext?.action ?? null,
    post_answer_master_required: postAnswerContext?.master_required ?? null,
    final_product_write_count: finalProductDiff.length,
    route_gate: routeGate,
  });
}

const summary = {
  schema_version: "0.1",
  experiment_id: fixture.experiment_id,
  execution_mode: "provider-zero",
  variant_id: fixture.variant_id,
  task_lock_ref: fixture.task_lock_ref,
  task_count: results.length,
  provider_calls: 0,
  model_calls: 0,
  cursor_calls: 0,
  route_gate: results.every((item) => item.route_gate),
  implementation_before_checkpoint_count: results.reduce((sum, item) => sum + item.initial_product_write_count, 0),
  total_product_write_count: results.reduce((sum, item) => sum + item.final_product_write_count, 0),
  results,
};
writeFileSync(join(outputRoot, "SUMMARY.json"), `${JSON.stringify(summary, null, 2)}\n`, "utf8");
process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);

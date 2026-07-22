#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, treeManifest, writeJson } from "./_lib.mjs";

const MAX_BUFFER = 64 * 1024 * 1024;

export function preregisteredStopReason(cell, manifest, run) {
  if (!run) return "missing-run-result";
  if (run.process?.timed_out === true) return "timeout";
  if (run.process?.exit_code !== 0 || run.process?.child_exit_code !== 0) return "process-failure";
  if (run.output?.final_message_present !== true) return "missing-final-response";
  if (Number(run.output?.infrastructure_tool_error_count ?? 0) > 0) return "infrastructure-tool-error";
  if (Number(run.output?.sandbox_error_count ?? 0) > 0) return "sandbox-error";
  if (Number(run.output?.sandbox_cwd_error_count ?? 0) > 0) return "sandbox-cwd-error";
  if (run.runtime?.model !== cell.model_id) return "parent-model-mismatch";
  if (!(run.output?.model_usage ?? []).some((usage) => usage.model === cell.model_id)) {
    return "observed-model-mismatch";
  }

  if (manifest.variant?.kind === "agent-harness") {
    const requiredIds = (manifest.agents?.installed ?? []).map((agent) => agent.id).sort();
    const requestedIds = [...new Set(run.output?.requested_agent_ids ?? [])].sort();
    if (JSON.stringify(requiredIds) !== JSON.stringify(requestedIds)) return "specialist-set-mismatch";
    if (Number(run.output?.agent_tool_error_count ?? 0) > 0) return "specialist-agent-error";
    const requiredModel = manifest.agents?.required_model;
    const calls = run.output?.agent_calls ?? [];
    for (const id of requiredIds) {
      const matching = calls.filter((call) => call.agent_id === id);
      if (matching.length !== 1 || matching[0].requested_model !== requiredModel) {
        return "specialist-model-or-cardinality-mismatch";
      }
    }
  }
  return null;
}

const SUSPICIOUS_SCRIPT_VERIFIER_PATH = /(?:^|[/\\])(?:verify|verifier|verification)(?:[-_.][^/\\\s"']*)?\.(?:[cm]?js|ts|py)\b/i;
const EXPLICIT_SHIM_PATH = /(?:^|[/\\._-])(?:dom[-_]?shim|mock[-_]?browser)(?:[/\\._-]|$)/i;
const SHELL_OR_SCRIPT_WRITE = /(?:^|[\s;&|])(?:cat|tee)\b[^\n]*(?:>|>>)|(?:>|>>)\s*[^\s]+|\b(?:writeFile|writeFileSync)\s*\(|\bopen\s*\([^\n]*["']w["']/i;
const DOM_OR_BROWSER_SHIM = /\bclass\s+(?:Element|Document|Node|Window)\b|\bglobalThis\.(?:document|window)\s*=|\b(?:document|window)\s*=\s*(?:new\b|\{)|\bmock(?:Document|Window|Browser)\b/i;

function toolUses(event) {
  if (event?.type !== "assistant" || !Array.isArray(event.message?.content)) return [];
  return event.message.content.filter((block) => block?.type === "tool_use");
}

export function replacementVerifierAuthorship(events) {
  for (const [eventIndex, event] of events.entries()) {
    for (const block of toolUses(event)) {
      const name = String(block.name ?? "");
      const input = block.input ?? {};
      const path = String(input.file_path ?? input.path ?? input.filename ?? "");
      const command = String(input.command ?? "");
      const content = String(input.content ?? input.new_string ?? "");
      const payload = `${path}\n${command}\n${content}`;
      const writes = name === "Write" || name === "Edit" || SHELL_OR_SCRIPT_WRITE.test(command);
      if (!writes) continue;
      if (
        SUSPICIOUS_SCRIPT_VERIFIER_PATH.test(path)
        || SUSPICIOUS_SCRIPT_VERIFIER_PATH.test(command)
        || EXPLICIT_SHIM_PATH.test(path)
        || EXPLICIT_SHIM_PATH.test(command)
      ) {
        return { detected: true, event_index: eventIndex, tool: name, reason: "suspicious-verifier-path" };
      }
      if (DOM_OR_BROWSER_SHIM.test(payload)) {
        return { detected: true, event_index: eventIndex, tool: name, reason: "dom-or-browser-shim" };
      }
    }
  }
  return { detected: false };
}

export function harnessDeliveryStopReason(manifest, run, gates, events = []) {
  if (manifest.variant?.kind !== "agent-harness" || gates === undefined) return null;
  const firstWrite = run.output?.milestones?.first_builtin_product_write_ms;
  if (!Number.isFinite(firstWrite)) return "missing-first-product-write-milestone";
  if (firstWrite > gates.first_product_write_ms_max) return "late-first-product-write";
  if (gates.forbid_replacement_verifier && replacementVerifierAuthorship(events).detected) {
    return "replacement-verifier-authored";
  }
  return null;
}

function readEvents(path) {
  if (!existsSync(path)) return [];
  return readFileSync(path, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

export function runArgsForCell(cell, workspace) {
  return [
    "--workspace", workspace,
    "--model", cell.model_id,
    "--effort", cell.effort,
    "--timeout-ms", String(cell.timeout_seconds * 1000),
  ];
}

function runNode(script, args, cwd) {
  return spawnSync(process.execPath, [script, ...args], {
    cwd,
    encoding: "utf8",
    maxBuffer: MAX_BUFFER,
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function upsertCell(state, value) {
  const index = state.cells.findIndex((cell) => cell.id === value.id);
  if (index === -1) state.cells.push(value);
  else state.cells[index] = value;
}

function assertUnstartedWorkspace(workspace, manifest) {
  const benchmarkDir = join(workspace, ".benchmark");
  if (existsSync(join(benchmarkDir, "events.jsonl")) || existsSync(join(benchmarkDir, "stderr.log"))) {
    throw new Error(`unresolved prior execution artifact exists without run-result: ${workspace}`);
  }
  const current = treeManifest(workspace, {
    ignore: [...new Set([...(manifest.workspace?.product_ignore ?? [".benchmark"]), ".t"])],
  });
  if (current.sha256 !== manifest.workspace?.product_initial_sha256) {
    throw new Error(`unstarted workspace product tree drifted: ${workspace}`);
  }
}

export function executePreparedMatrix(root) {
  const matrixRoot = resolve(root);
  const lockedPlanPath = join(matrixRoot, "RUN-MATRIX.locked.json");
  const preparationStatePath = join(matrixRoot, "matrix-state.json");
  const executionStatePath = join(matrixRoot, "execution-state.json");
  if (!existsSync(lockedPlanPath) || !existsSync(preparationStatePath)) {
    throw new Error("matrix root is missing locked plan or preparation state");
  }
  const plan = readJson(lockedPlanPath);
  const preparation = readJson(preparationStatePath);
  if (preparation.status !== "prepared" || preparation.prepared_cells !== plan.cells.length) {
    throw new Error("matrix preparation is incomplete");
  }

  const existing = existsSync(executionStatePath) ? readJson(executionStatePath) : null;
  if (existing?.status === "stopped-preregistered") {
    throw new Error(`matrix is frozen after preregistered stop: ${existing.stop_reason}`);
  }
  const state = existing ?? {
    schema_version: "0.1",
    experiment_id: plan.experiment_id,
    status: "running",
    scheduled_cells: plan.cells.length,
    completed_cells: 0,
    current_cell: null,
    cells: [],
  };
  state.status = "running";
  writeJson(executionStatePath, state);

  const repo = resolve(fileURLToPath(new URL("../../..", import.meta.url)));
  const runScript = resolve(fileURLToPath(new URL("./run-claude.mjs", import.meta.url)));
  const evaluateScript = resolve(fileURLToPath(new URL("./evaluate-run.mjs", import.meta.url)));
  const exportScript = resolve(fileURLToPath(new URL("./export-run-record.mjs", import.meta.url)));

  for (const [index, cell] of plan.cells.entries()) {
    const workspace = join(matrixRoot, cell.id);
    const benchmarkDir = join(workspace, ".benchmark");
    const manifest = readJson(join(benchmarkDir, "manifest.json"));
    const resultPath = join(benchmarkDir, "run-result.json");
    const eventsPath = join(benchmarkDir, "events.jsonl");
    const scorePath = join(benchmarkDir, "score.json");
    const recordPath = join(benchmarkDir, "run-record.json");

    state.current_cell = cell.id;
    upsertCell(state, { id: cell.id, order: index + 1, status: "running", workspace });
    writeJson(executionStatePath, state);
    console.log(JSON.stringify({ event: "cell-start", order: index + 1, total: plan.cells.length, id: cell.id }));

    if (!existsSync(resultPath)) {
      assertUnstartedWorkspace(workspace, manifest);
      const executed = runNode(runScript, runArgsForCell(cell, workspace), repo);
      if (!existsSync(resultPath)) {
        const reason = `runner-no-result:${executed.error?.message ?? executed.stderr?.trim() ?? `exit-${executed.status}`}`;
        state.status = "stopped-preregistered";
        state.stop_reason = reason;
        upsertCell(state, { id: cell.id, order: index + 1, status: "stopped", workspace, reason });
        writeJson(executionStatePath, state);
        throw new Error(reason);
      }
    }

    const run = readJson(resultPath);
    const stopReason = preregisteredStopReason(cell, manifest, run)
      ?? harnessDeliveryStopReason(manifest, run, plan.harness_delivery_gates, readEvents(eventsPath));
    if (stopReason) {
      state.status = "stopped-preregistered";
      state.stop_reason = stopReason;
      upsertCell(state, { id: cell.id, order: index + 1, status: "stopped", workspace, reason: stopReason });
      writeJson(executionStatePath, state);
      throw new Error(`preregistered stop at ${cell.id}: ${stopReason}`);
    }

    if (!existsSync(scorePath)) {
      const evaluated = runNode(evaluateScript, ["--workspace", workspace], repo);
      if (evaluated.status !== 0 || !existsSync(scorePath)) {
        const reason = `evaluator-failure:${evaluated.stderr?.trim() || `exit-${evaluated.status}`}`;
        state.status = "stopped-preregistered";
        state.stop_reason = reason;
        upsertCell(state, { id: cell.id, order: index + 1, status: "stopped", workspace, reason });
        writeJson(executionStatePath, state);
        throw new Error(reason);
      }
    }

    if (!existsSync(recordPath)) {
      const exported = runNode(exportScript, [
        "--workspace", workspace,
        "--family", plan.family,
        "--system", cell.system_id,
        "--trial", String(cell.trial_index),
        "--suite-version", "1.9.7",
        "--budget-tier", cell.effort,
      ], repo);
      if (exported.status !== 0 || !existsSync(recordPath)) {
        const reason = `export-failure:${exported.stderr?.trim() || `exit-${exported.status}`}`;
        state.status = "stopped-preregistered";
        state.stop_reason = reason;
        upsertCell(state, { id: cell.id, order: index + 1, status: "stopped", workspace, reason });
        writeJson(executionStatePath, state);
        throw new Error(reason);
      }
    }

    const score = readJson(scorePath);
    const record = readJson(recordPath);
    const summary = {
      id: cell.id,
      order: index + 1,
      status: "complete",
      workspace,
      validity: record.validity,
      ui_resolved: record.ui_resolved,
      objective_score: record.objective_score,
      objective_max: record.objective_max,
      wall_time_ms: record.wall_time_ms,
      tokens: record.tokens,
      recoverable_tool_errors: record.runtime_diagnostics?.recoverable_tool_error_count ?? 0,
      agent_tool_calls: record.runtime_diagnostics?.agent_tool_call_count ?? 0,
      evidence_and_unknown_pass: score.critical_gates?.evidence_honesty === true,
      first_product_write_ms: record.runtime_diagnostics?.milestones?.first_builtin_product_write_ms ?? null,
      replacement_verifier_authored: replacementVerifierAuthorship(readEvents(eventsPath)).detected,
    };
    upsertCell(state, summary);
    state.completed_cells = state.cells.filter((entry) => entry.status === "complete").length;
    state.current_cell = null;
    writeJson(executionStatePath, state);
    console.log(JSON.stringify({ event: "cell-complete", ...summary }));
  }

  state.status = "complete";
  state.current_cell = null;
  writeJson(executionStatePath, state);
  console.log(JSON.stringify({ event: "matrix-complete", completed_cells: state.completed_cells }));
  return state;
}

async function main() {
  const args = parseArgs();
  const root = args.get("root") ? resolve(String(args.get("root"))) : null;
  if (!root) {
    console.error("usage: run-prepared-matrix.mjs --root <prepared-matrix-root>");
    process.exitCode = 2;
    return;
  }
  executePreparedMatrix(root);
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}

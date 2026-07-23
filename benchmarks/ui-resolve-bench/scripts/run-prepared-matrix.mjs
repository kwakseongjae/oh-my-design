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
const DIRECT_HEADLESS_BROWSER = /(?:"[^"\n]*(?:Google Chrome|Chromium)[^"\n]*"|'[^'\n]*(?:Google Chrome|Chromium)[^'\n]*'|(?:[^\s;&|]|\\\s)*(?:google-chrome(?:-stable)?|chromium(?:-browser)?|Google\\ Chrome|Chromium)(?:[^\s;&|]|\\\s)*)(?:\s+[^;&|\n]*?)*?\s+--headless(?:=[^\s;&|]+)?/gi;

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

export function directBrowserCommandCount(events) {
  let count = 0;
  for (const event of events) {
    for (const block of toolUses(event)) {
      if (block.name !== "Bash") continue;
      const command = String(block.input?.command ?? "");
      count += [...command.matchAll(DIRECT_HEADLESS_BROWSER)].length;
    }
  }
  return count;
}

export function lastAdvisoryToFirstProductWriteMs(run, events = []) {
  const startedAt = Date.parse(run?.started_at ?? "");
  const firstWrite = run?.output?.milestones?.first_builtin_product_write_ms;
  if (!Number.isFinite(startedAt) || !Number.isFinite(firstWrite)) return null;

  const advisoryIds = new Set();
  for (const event of events) {
    for (const block of toolUses(event)) {
      if (block.name === "Agent" && typeof block.id === "string") advisoryIds.add(block.id);
    }
  }
  if (!advisoryIds.size) return null;

  const resultTimes = [];
  for (const event of events) {
    if (event?.type !== "user" || !Array.isArray(event.message?.content)) continue;
    for (const block of event.message.content) {
      if (block?.type !== "tool_result" || !advisoryIds.has(block.tool_use_id)) continue;
      const resultAt = Date.parse(event.timestamp ?? "");
      if (Number.isFinite(resultAt)) resultTimes.push(resultAt);
    }
  }
  if (resultTimes.length !== advisoryIds.size) return null;
  const lastAdvisoryMs = Math.max(...resultTimes) - startedAt;
  return firstWrite - lastAdvisoryMs;
}

export function firstProductWriteTransaction(run, events = []) {
  const changedPaths = (run?.workspace?.changed_product_files ?? [])
    .map((entry) => entry?.path)
    .filter((path) => typeof path === "string" && path.length > 0);
  if (!changedPaths.length) return null;

  for (const [eventIndex, event] of events.entries()) {
    for (const block of toolUses(event)) {
      if (block.name !== "Edit" && block.name !== "Write") continue;
      const input = block.input ?? {};
      const toolPath = String(input.file_path ?? input.path ?? "");
      const productPath = changedPaths.find((path) => toolPath === path || toolPath.endsWith(`/${path}`));
      if (!productPath) continue;
      return {
        event_index: eventIndex,
        tool: block.name,
        path: productPath,
        no_op: block.name === "Edit" && String(input.old_string ?? "") === String(input.new_string ?? ""),
      };
    }
  }
  return null;
}

export function harnessDeliveryStopReason(manifest, run, gates, events = []) {
  if (gates === undefined) return null;
  const variantKinds = gates.variant_kinds ?? ["agent-harness"];
  if (!variantKinds.includes(manifest.variant?.kind)) return null;
  const firstWrite = run.output?.milestones?.first_builtin_product_write_ms;
  if (!Number.isFinite(firstWrite)) return "missing-first-product-write-milestone";
  if (firstWrite > gates.first_product_write_ms_max) return "late-first-product-write";
  if (gates.last_advisory_to_first_product_write_ms_max !== undefined) {
    const advisoryToWrite = lastAdvisoryToFirstProductWriteMs(run, events);
    if (!Number.isFinite(advisoryToWrite)) return "missing-advisory-to-first-write-milestone";
    if (advisoryToWrite < 0) return "product-write-before-last-advisory";
    if (advisoryToWrite > gates.last_advisory_to_first_product_write_ms_max) {
      return "late-advisory-to-first-product-write";
    }
  }
  if (gates.require_targeted_first_product_edit === true) {
    const transaction = firstProductWriteTransaction(run, events);
    if (!transaction) return "missing-first-product-write-transaction";
    if (transaction.tool !== "Edit") return "non-targeted-first-product-write";
    if (transaction.no_op) return "no-op-first-product-edit";
  }
  if (gates.forbid_replacement_verifier && replacementVerifierAuthorship(events).detected) {
    return "replacement-verifier-authored";
  }
  if (
    gates.max_direct_browser_commands !== undefined &&
    directBrowserCommandCount(events) > gates.max_direct_browser_commands
  ) {
    return "direct-browser-command-budget-exceeded";
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
      last_advisory_to_first_product_write_ms: lastAdvisoryToFirstProductWriteMs(
        run,
        readEvents(eventsPath),
      ),
      first_product_write_transaction: firstProductWriteTransaction(run, readEvents(eventsPath)),
      replacement_verifier_authored: replacementVerifierAuthorship(readEvents(eventsPath)).detected,
      direct_browser_command_count: directBrowserCommandCount(readEvents(eventsPath)),
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

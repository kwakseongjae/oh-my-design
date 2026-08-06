#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import {
  closeSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  openSync,
  readFileSync,
  rmSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { performance } from "node:perf_hooks";
import { isDeepStrictEqual } from "node:util";
import { fileURLToPath } from "node:url";
import {
  parseArgs,
  readJson,
  sha256,
  treeManifest,
  writeJson,
} from "./_lib.mjs";
import {
  runnerSpecForCell,
  runtimeAttributionStopReason,
} from "./runtime-contract.mjs";
import {
  inspectPreparedHostPolicy,
  summarizeHostPolicyStates,
} from "./host-policy-contract.mjs";
import {
  codexAuthDoctorSpec,
  codexBrowserDoctorSpec,
  prepareIsolatedCodexHome,
} from "./codex-browser-sandbox-contract.mjs";
import {
  inspectCodexModelToolMode,
  inspectCodexCliRuntime,
  installedCodexPolicyToolModeStopReason,
} from "./codex-tool-mode-contract.mjs";
import { validateLocalBrowserEvidence } from "./validate-local-browser-evidence.mjs";
import {
  assertObjectiveMethodologyPin,
  currentObjectiveMethodology,
} from "./objective-methodology-contract.mjs";

const MAX_BUFFER = 64 * 1024 * 1024;
const PACING_MAX_OVERSHOOT_MS = 5_000;
const PACING_MAX_CLOCK_DISAGREEMENT_MS = 5_000;
const STOP_SENTINEL = "STOP";
const INVOCATION_LEASE = ".matrix-execution.lock";
const REPO_ROOT = resolve(fileURLToPath(new URL("../../..", import.meta.url)));
const BENCHMARK_RUNTIME_IGNORE = ["browser-harness", "codex-home"];

export function assertPreparedObjectiveMethodology(matrixRoot) {
  const root = resolve(matrixRoot);
  const plan = readJson(join(root, "RUN-MATRIX.locked.json"));
  const preparation = readJson(join(root, "matrix-state.json"));
  assertObjectiveMethodologyPin(plan.objective_evaluator, "locked-plan");
  assertObjectiveMethodologyPin(preparation.objective_evaluator, "preparation-state");
  for (const cell of plan.cells ?? []) {
    const workspace = join(root, cell.id);
    const manifest = readJson(join(workspace, ".benchmark", "manifest.json"));
    const matrixCell = readJson(join(workspace, ".benchmark", "matrix-cell.json"));
    assertObjectiveMethodologyPin(manifest.objective_evaluator, `${cell.id}:manifest`);
    assertObjectiveMethodologyPin(matrixCell.objective_evaluator, `${cell.id}:matrix-cell`);
  }
  return currentObjectiveMethodology();
}

export function validateLocalBrowserEvidenceAdmission(
  plan,
  { evidenceRoot = REPO_ROOT } = {},
) {
  const validationId = plan?.browser_execution_contract?.local_in_app_preflight;
  if (!validationId) return { status: "not-required", transfer_claim_allowed: false };
  const reportPath = join(
    resolve(evidenceRoot),
    "benchmarks/ui-resolve-bench/reports",
    validationId,
    "LOCAL-BROWSER-VALIDATION.json",
  );
  if (!existsSync(reportPath)) {
    throw new Error(`runtime-preflight-failure:local-in-app-evidence-missing:${validationId}`);
  }
  const result = validateLocalBrowserEvidence(readJson(reportPath));
  if (result.validation_id !== validationId) {
    throw new Error(`runtime-preflight-failure:local-in-app-evidence-id-mismatch:${validationId}`);
  }
  return { status: "ready", report_path: reportPath, ...result };
}

export function remoteExecutionHoldReason(plan) {
  return String(plan?.status ?? "").includes("remote-execution-deferred")
    ? "matrix-execution-hold:remote-execution-deferred"
    : null;
}

export function benchmarkArtifactManifest(benchmarkDir) {
  return treeManifest(benchmarkDir, { ignore: BENCHMARK_RUNTIME_IGNORE });
}

export function preflightRuntimeEnvironment(
  plan,
  {
    cursorProjectsRoot = process.env.OMD_BENCH_CURSOR_PROJECTS_ROOT
      ?? join(homedir(), ".cursor", "projects"),
    workspaceRoot = process.cwd(),
    browserProbe,
    codexProbe,
    codexToolModeProbe = inspectCodexModelToolMode,
    codexCliProbe = inspectCodexCliRuntime,
    browserEnv = process.env,
  } = {},
) {
  const runtimes = [...new Set((plan?.cells ?? []).map((cell) => cell.runtime))].sort();
  const checks = [];
  const browserProofRequired = plan?.browser_execution_contract?.require_browser_proof === true
    || plan?.shared_host_policy?.require_browser_attempt === true
    || plan?.host_policy_comparison?.require_browser_attempt === true;
  const installedPolicyRequested = plan?.shared_host_policy?.mode === "installed-opt-in"
    || (plan?.host_policy_comparison && (plan?.cells ?? []).some(
      (cell) => cell.host_policy_mode === "installed-opt-in",
    ));
  const controllerContract = plan?.controller_observation_contract;
  if (controllerContract && runtimes.includes("codex")) {
    const observed = codexCliProbe();
    if (!observed?.ready || observed.version !== controllerContract.codex_cli_version) {
      throw new Error(
        `runtime-preflight-failure:codex-cli-version-mismatch:${controllerContract.codex_cli_version ?? "missing"}:${observed?.version ?? "unavailable"}`,
      );
    }
    if (controllerContract.model_profile_policy !== "post-run-execution-home-observed") {
      throw new Error("runtime-preflight-failure:codex-model-profile-policy-invalid");
    }
    checks.push({
      runtime: "codex",
      resource: "cli-runtime",
      status: "ready",
      version: observed.version,
      model_profile_policy: controllerContract.model_profile_policy,
    });
  }
  if (installedPolicyRequested) {
    const modelIds = [...new Set((plan?.cells ?? [])
      .filter((cell) => cell.runtime === "codex" && cell.host_policy_mode === "installed-opt-in")
      .map((cell) => cell.model_id))].sort();
    for (const modelId of modelIds) {
      const observation = codexToolModeProbe(modelId, browserEnv);
      const stopReason = installedCodexPolicyToolModeStopReason(observation);
      if (stopReason) throw new Error(`runtime-preflight-failure:${stopReason}`);
      checks.push({
        runtime: "codex",
        resource: "installed-proof-policy-tool-mode",
        status: "eligible",
        model_id: modelId,
        tool_mode: observation.tool_mode,
        cache_sha256: observation.cache_sha256 ?? null,
        model_profile_sha256: observation.model_profile_sha256 ?? null,
      });
    }
  }
  if (browserProofRequired) {
    const spec = codexBrowserDoctorSpec({ workspace: workspaceRoot, env: browserEnv });
    if (!browserProbe) {
      mkdirSync(spec.env.BH_TMP_DIR, { recursive: true });
      mkdirSync(spec.codex_home, { recursive: true });
    }
    const probe = browserProbe
      ? browserProbe(spec)
      : spawnSync(spec.executable, spec.args, {
          cwd: resolve(workspaceRoot),
          env: spec.env,
          encoding: "utf8",
          maxBuffer: MAX_BUFFER,
          timeout: 30_000,
        });
    const output = String(probe?.stdout ?? "");
    const daemonAlive = probe?.ready === true || /\[ok\s*\]\s+daemon alive\b/i.test(output);
    const activeConnection = probe?.ready === true
      || /\[ok\s*\]\s+active browser connections\b/i.test(output);
    const isolatedName = String(spec.env.BU_NAME ?? "").trim();
    const isolatedEndpoint = String(browserEnv.BU_CDP_URL ?? browserEnv.BU_CDP_WS ?? "").trim();
    const namedConnection = isolatedName
      && new RegExp(
        `^\\s*${isolatedName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s+—\\s+active(?:\\s+page:\\s*.*)?\\s*$`,
        "mi",
      ).test(output);
    if (
      probe?.error
      || !daemonAlive
      || !activeConnection
      || !isolatedName
      || !isolatedEndpoint
      || !namedConnection
    ) {
      const detail = String(probe?.stderr || probe?.stdout || probe?.error?.message || "unavailable")
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 240);
      throw new Error(`runtime-preflight-failure:isolated-browser-harness-not-ready:${detail || "unavailable"}`);
    }
    checks.push({
      runtime: "shared-host-policy",
      resource: "browser-harness",
      status: "ready",
      sandbox: spec.sandbox,
      connection: isolatedName,
    });

    if (!browserProbe) prepareIsolatedCodexHome(workspaceRoot, browserEnv);

    const authSpec = codexAuthDoctorSpec({ workspace: workspaceRoot, env: browserEnv });
    const authProbe = codexProbe
      ? codexProbe(authSpec)
      : spawnSync(authSpec.executable, authSpec.args, {
          cwd: resolve(workspaceRoot),
          env: authSpec.env,
          encoding: "utf8",
          maxBuffer: MAX_BUFFER,
          timeout: 30_000,
        });
    const authOutput = `${String(authProbe?.stdout ?? "")}\n${String(authProbe?.stderr ?? "")}`;
    if (authProbe?.error || authProbe?.status !== 0 || !/logged in/i.test(authOutput)) {
      const detail = String(authProbe?.stderr || authProbe?.stdout || authProbe?.error?.message || "unavailable")
        .trim()
        .replace(/\s+/g, " ")
        .slice(0, 240);
      throw new Error(`runtime-preflight-failure:codex-auth-not-ready:${detail || "unavailable"}`);
    }
    checks.push({
      runtime: "shared-host-policy",
      resource: "codex-auth",
      status: "ready",
      sandbox: authSpec.sandbox,
    });
  }

  if (!runtimes.includes("cursor")) {
    return { status: "complete", runtimes, checks };
  }

  let probeRoot = null;
  try {
    probeRoot = mkdtempSync(join(resolve(cursorProjectsRoot), ".omd-runtime-preflight-"));
    const probeFile = join(probeRoot, "write-probe");
    writeFileSync(probeFile, "ok", { encoding: "utf8", flag: "wx" });
    unlinkSync(probeFile);
    checks.push({
      runtime: "cursor",
      resource: "project-cache",
      status: "writable",
    });
  } catch (error) {
    const code = typeof error?.code === "string" ? error.code : "unknown";
    throw new Error(`runtime-preflight-failure:cursor-project-cache-not-writable:${code}`);
  } finally {
    if (probeRoot) rmSync(probeRoot, { recursive: true, force: true });
  }
  return { status: "complete", runtimes, checks };
}

const HOST_POLICY_INFRASTRUCTURE_REASONS = new Set([
  "installed-policy-not-ready",
  "installed-policy-state-missing",
  "installed-policy-state-invalid",
  "native-browser-unintercepted",
  "proof-trace-not-analyzable",
]);

export function hostPolicyAdmissionDisposition(plan, summary) {
  if (!plan?.shared_host_policy) return { disposition: "admit", reason: null };
  if (summary?.run_status === "timed_out" && summary?.validity === "valid") {
    return {
      disposition: "valid-system-failure",
      reason: "preregistered-valid-timeout",
    };
  }
  const hostPolicy = summary?.host_policy;
  const gate = summary?.host_policy_gate;
  if (gate?.pass === true) return { disposition: "admit", reason: null };
  if (!hostPolicy || !gate) {
    return { disposition: "invalid-infrastructure", reason: "installed-host-policy-gate-missing" };
  }
  const installation = hostPolicy.installation;
  const observed = hostPolicy.observed;
  const proofTrace = summary?.proof_trace;
  const reasons = Array.isArray(gate.reasons) ? gate.reasons : [];
  const inconsistentInstallation = installation?.ready !== true
    || observed?.available !== true
    || Number(observed?.state_files ?? 0) < 1
    || Number(observed?.valid_state_files ?? 0) !== Number(observed?.state_files ?? 0)
    || proofTrace?.analyzable !== true
    || reasons.some((reason) => (
      HOST_POLICY_INFRASTRUCTURE_REASONS.has(reason)
      || String(reason).endsWith("-unblocked-limit")
    ));
  if (inconsistentInstallation) {
    return { disposition: "invalid-infrastructure", reason: "installed-host-policy-gate-failed" };
  }
  return {
    disposition: "valid-system-failure",
    reason: "installed-host-policy-rejected-system-output",
  };
}

export function hostPolicyAdmissionStopReason(plan, summary) {
  const admission = hostPolicyAdmissionDisposition(plan, summary);
  return admission.disposition === "invalid-infrastructure" ? admission.reason : null;
}

export function preregisteredStopReason(
  cell,
  manifest,
  run,
  { schemaVersion = "0.1", timeoutPolicy = null } = {},
) {
  if (!run) return "missing-run-result";
  const validTimeout = (
    run.process?.timed_out === true
    && timeoutPolicy === "count-as-valid-failure"
  );
  if (run.process?.timed_out === true && !validTimeout) return "timeout";
  if (
    !validTimeout
    && (run.process?.exit_code !== 0 || run.process?.child_exit_code !== 0)
  ) return "process-failure";
  if (!validTimeout && run.output?.final_message_present !== true) return "missing-final-response";
  if (Number(run.output?.infrastructure_tool_error_count ?? 0) > 0) return "infrastructure-tool-error";
  if (Number(run.output?.sandbox_error_count ?? 0) > 0) return "sandbox-error";
  if (Number(run.output?.sandbox_cwd_error_count ?? 0) > 0) return "sandbox-cwd-error";
  if (schemaVersion === "0.2" || schemaVersion === "0.3") {
    const attributionReason = runtimeAttributionStopReason(cell, manifest, run);
    if (attributionReason && !(validTimeout && attributionReason === "incomplete-usage-attribution")) {
      return attributionReason;
    }
  } else {
    if (run.runtime?.model !== cell.model_id) return "parent-model-mismatch";
    if (!(run.output?.model_usage ?? []).some((usage) => usage.model === cell.model_id)) {
      return "observed-model-mismatch";
    }
  }

  if (validTimeout) return null;

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
  return runnerSpecForCell(cell, workspace).args;
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

function freezeRemainingCells(state, plan, stoppedIndex, matrixRoot, reason) {
  for (const [index, cell] of plan.cells.entries()) {
    if (index <= stoppedIndex) continue;
    upsertCell(state, {
      id: cell.id,
      order: index + 1,
      status: "not-started",
      workspace: join(matrixRoot, cell.id),
      reason: `matrix-frozen-after:${plan.cells[stoppedIndex].id}:${reason}`,
    });
  }
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

export function interCellDelayMs(plan, index) {
  if (index <= 0 || index >= (plan.cells?.length ?? 0)) return 0;
  const pacing = plan.control_contract?.pacing;
  if (pacing?.policy !== "fixed-inter-cell") return 0;
  return Number(pacing.inter_cell_delay_seconds) * 1000;
}

function waitSynchronously(milliseconds) {
  if (milliseconds <= 0) return;
  const signal = new Int32Array(new SharedArrayBuffer(4));
  Atomics.wait(signal, 0, 0, milliseconds);
}

function acquireInvocationLease(matrixRoot) {
  const path = join(matrixRoot, INVOCATION_LEASE);
  const token = randomUUID();
  let descriptor;
  try {
    descriptor = openSync(path, "wx", 0o600);
  } catch (error) {
    if (error?.code === "EEXIST") {
      throw new Error("matrix invocation lease exists (contention or stale)");
    }
    throw error;
  }
  const value = {
    token,
    pid: process.pid,
    acquired_at: new Date().toISOString(),
  };
  try {
    writeFileSync(descriptor, `${JSON.stringify(value)}\n`, "utf8");
  } catch (error) {
    closeSync(descriptor);
    try {
      if (readFileSync(path, "utf8") === `${JSON.stringify(value)}\n`) unlinkSync(path);
    } catch {
      // A failed acquisition remains fail-closed when ownership cannot be proven.
    }
    throw error;
  }
  return { path, descriptor, serialized: `${JSON.stringify(value)}\n` };
}

function releaseInvocationLease(lease) {
  closeSync(lease.descriptor);
  try {
    if (readFileSync(lease.path, "utf8") === lease.serialized) {
      unlinkSync(lease.path);
    }
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}

function fileSha256(path) {
  return sha256(readFileSync(path));
}

function cellArtifactHashes(benchmarkDir) {
  const resultPath = join(benchmarkDir, "run-result.json");
  const scorePath = join(benchmarkDir, "score.json");
  const recordPath = join(benchmarkDir, "run-record.json");
  const proofTracePath = join(benchmarkDir, "proof-trace.json");
  const hostPolicyStatePath = join(benchmarkDir, "host-policy-state.json");
  return {
    run_result_sha256: fileSha256(resultPath),
    score_sha256: fileSha256(scorePath),
    run_record_sha256: fileSha256(recordPath),
    ...(existsSync(proofTracePath) ? { proof_trace_sha256: fileSha256(proofTracePath) } : {}),
    ...(existsSync(hostPolicyStatePath) ? { host_policy_state_sha256: fileSha256(hostPolicyStatePath) } : {}),
    benchmark_tree_sha256: benchmarkArtifactManifest(benchmarkDir).sha256,
  };
}

export function completedCellSummary(
  cell,
  index,
  workspace,
  { completedInInvocation, includeArtifactHashes = true } = {},
) {
  const benchmarkDir = join(workspace, ".benchmark");
  const resultPath = join(benchmarkDir, "run-result.json");
  const scorePath = join(benchmarkDir, "score.json");
  const recordPath = join(benchmarkDir, "run-record.json");
  const run = readJson(resultPath);
  const score = readJson(scorePath);
  const record = readJson(recordPath);
  const events = readEvents(join(benchmarkDir, "events.jsonl"));
  const summary = {
    id: cell.id,
    order: index + 1,
    status: "complete",
    workspace,
    validity: record.validity,
    run_status: record.run_status,
    ui_resolved: record.ui_resolved,
    objective_score: record.objective_score,
    objective_max: record.objective_max,
    wall_time_ms: record.wall_time_ms,
    tokens: record.tokens,
    recoverable_tool_errors: record.runtime_diagnostics?.recoverable_tool_error_count ?? null,
    agent_tool_calls: record.runtime_diagnostics?.agent_tool_call_count ?? null,
    evidence_and_unknown_pass: score.critical_gates?.evidence_honesty === true,
    first_product_write_ms: record.runtime_diagnostics?.milestones?.first_builtin_product_write_ms ?? null,
    last_advisory_to_first_product_write_ms: lastAdvisoryToFirstProductWriteMs(run, events),
    first_product_write_transaction: firstProductWriteTransaction(run, events),
    replacement_verifier_authored: replacementVerifierAuthorship(events).detected,
    direct_browser_command_count: directBrowserCommandCount(events),
    proof_trace: record.runtime_diagnostics?.proof_trace ?? null,
    proof_execution_gate: record.runtime_diagnostics?.proof_execution_gate ?? null,
    host_policy: record.runtime_diagnostics?.host_policy ?? null,
    host_policy_gate: record.runtime_diagnostics?.host_policy?.gate ?? null,
    host_policy_admission: record.runtime_diagnostics?.host_policy_admission ?? null,
    candidate_preflight: record.runtime_diagnostics?.candidate_preflight ?? null,
  };
  if (includeArtifactHashes) summary.artifact_hashes = cellArtifactHashes(benchmarkDir);
  if (completedInInvocation !== undefined) {
    summary.completed_in_invocation = completedInInvocation;
  }
  return summary;
}

export function candidatePreflightStopReason(plan, record) {
  if (plan?.candidate_preflight_contract?.required !== true) return null;
  const preflight = record?.runtime_diagnostics?.candidate_preflight;
  if (!preflight?.receipt_present) return "candidate-preview-receipt-missing";
  if (!preflight.receipt_valid || preflight.receipt_state !== "passed") {
    return "candidate-preview-receipt-failed";
  }
  if (!preflight.source_contract_sha256_match) return "candidate-preview-source-contract-mismatch";
  if (!preflight.sealed_inventory_sha256_match) return "candidate-preview-inventory-mismatch";
  if (!preflight.product_present || !preflight.candidate_final_bytes_match) {
    return "candidate-final-byte-mismatch";
  }
  return null;
}

export function reliabilityHardStopReason(plan, summary) {
  const hardStops = new Set(plan?.reliability_contract?.contract_hard_stop ?? []);
  if (hardStops.size === 0) return null;
  const proof = summary?.proof_trace;
  const candidate = summary?.candidate_preflight;
  const success = plan?.cell_success_contract ?? {};
  if (
    hardStops.has("sealed-inventory-drift")
    && candidate
    && candidate.sealed_inventory_sha256_match !== true
  ) return "sealed-inventory-drift";
  if (
    hardStops.has("second-product-edit")
    && Number(proof?.product_edit_count ?? proof?.product_revision_count ?? 0)
      > Number(success.product_revision_count ?? 1)
  ) return "second-product-edit";
  if (
    hardStops.has("failed-static-closure")
    && Number(proof?.failed_static_closure_count ?? 0)
      > Number(success.failed_static_closure_count ?? 0)
  ) return "failed-static-closure";
  if (
    hardStops.has("contract-proof-noncompliance")
    && proof?.compliance_pass !== true
  ) return "contract-proof-noncompliance";
  if (
    hardStops.has("candidate-preview-receipt-missing-or-failed")
    && (!candidate?.receipt_present || !candidate?.receipt_valid || candidate?.receipt_state !== "passed")
  ) return "candidate-preview-receipt-missing-or-failed";
  if (
    hardStops.has("candidate-final-byte-mismatch")
    && candidate?.candidate_final_bytes_match !== true
  ) return "candidate-final-byte-mismatch";
  return null;
}

function positiveIntegerOrThrow(value, label = "maxNewCells") {
  if (!Number.isSafeInteger(value) || value < 1) {
    throw new Error(`${label} must be a positive integer`);
  }
  return value;
}

function untouchedCellPaths(workspace) {
  const benchmarkDir = join(workspace, ".benchmark");
  return [
    join(benchmarkDir, "run-result.json"),
    join(benchmarkDir, "score.json"),
    join(benchmarkDir, "run-record.json"),
    join(benchmarkDir, "events.jsonl"),
    join(benchmarkDir, "stderr.log"),
    join(benchmarkDir, "final-message.txt"),
    join(benchmarkDir, "proof-trace.json"),
    join(benchmarkDir, "host-policy-state.json"),
  ];
}

function preparedCellAttestation(workspace) {
  const manifest = readJson(join(workspace, ".benchmark", "manifest.json"));
  const currentProduct = treeManifest(workspace, {
    ignore: [...new Set([...(manifest.workspace?.product_ignore ?? [".benchmark"]), ".t"])],
  });
  return {
    benchmark_tree_sha256: benchmarkArtifactManifest(join(workspace, ".benchmark")).sha256,
    product_tree_sha256: currentProduct.sha256,
    ...(manifest.host_policy
      ? { host_policy: inspectPreparedHostPolicy(REPO_ROOT, workspace, manifest.host_policy.mode) }
      : {}),
  };
}

export function validPreparedCellAttestation(value, { hostPolicy = false } = {}) {
  const expectedKeys = [
    "benchmark_tree_sha256",
    "product_tree_sha256",
    ...(hostPolicy ? ["host_policy"] : []),
  ].sort();
  return Boolean(
    value
    && typeof value === "object"
    && !Array.isArray(value)
    && isDeepStrictEqual(Object.keys(value).sort(), expectedKeys)
    && /^[a-f0-9]{64}$/.test(value.benchmark_tree_sha256)
    && /^[a-f0-9]{64}$/.test(value.product_tree_sha256)
    && (
      !hostPolicy
      || (
        value.host_policy
        && value.host_policy.schema_version === "0.1"
        && value.host_policy.target === "codex"
        && ["controller-observation", "installed-opt-in"].includes(value.host_policy.mode)
        && value.host_policy.git_root === true
        && value.host_policy.ready === true
      )
    )
  );
}

function assertUntouchedCell(workspace, expectedAttestation = undefined) {
  const manifest = readJson(join(workspace, ".benchmark", "manifest.json"));
  if (untouchedCellPaths(workspace).some((path) => existsSync(path))) {
    throw new Error(`untouched checkpoint cell has execution artifacts: ${workspace}`);
  }
  assertUnstartedWorkspace(workspace, manifest);
  if (
    expectedAttestation !== undefined
    && !isDeepStrictEqual(preparedCellAttestation(workspace), expectedAttestation)
  ) {
    throw new Error(`untouched checkpoint cell preparation drifted: ${workspace}`);
  }
}

function assertCompletedCell(entry, cell, index, matrixRoot) {
  const workspace = join(matrixRoot, cell.id);
  if (
    entry?.id !== cell.id
    || entry.order !== index + 1
    || entry.status !== "complete"
    || entry.workspace !== workspace
  ) {
    throw new Error(`checkpoint completed prefix is invalid at cell ${cell.id}`);
  }
  const benchmarkDir = join(workspace, ".benchmark");
  const resultPath = join(benchmarkDir, "run-result.json");
  const scorePath = join(benchmarkDir, "score.json");
  const recordPath = join(benchmarkDir, "run-record.json");
  if (![resultPath, scorePath, recordPath].every((path) => existsSync(path))) {
    throw new Error(`checkpoint completed cell is missing run, score, or record: ${cell.id}`);
  }
  const hashes = cellArtifactHashes(benchmarkDir);
  if (entry.artifact_hashes?.benchmark_tree_sha256 !== hashes.benchmark_tree_sha256) {
    throw new Error(`checkpoint completed cell benchmark tree drifted: ${cell.id}`);
  }
  if (!isDeepStrictEqual(entry.artifact_hashes, hashes)) {
    throw new Error(`checkpoint completed cell artifact drifted: ${cell.id}`);
  }
  const derivedSummary = completedCellSummary(cell, index, workspace, {
    completedInInvocation: entry.completed_in_invocation,
  });
  if (!isDeepStrictEqual(entry, derivedSummary)) {
    throw new Error(`checkpoint completed cell summary drifted: ${cell.id}`);
  }
  const manifest = readJson(join(benchmarkDir, "manifest.json"));
  const run = readJson(resultPath);
  const currentProduct = treeManifest(workspace, {
    ignore: [...new Set([...(manifest.workspace?.product_ignore ?? [".benchmark"]), ".t"])],
  });
  if (currentProduct.sha256 !== run.workspace?.product_final_sha256) {
    throw new Error(`checkpoint completed cell product tree drifted: ${cell.id}`);
  }
}

function expectedCompletedPacing(plan, completedCells) {
  const expected = [];
  for (let index = 1; index < completedCells; index += 1) {
    if (interCellDelayMs(plan, index) <= 0) continue;
    expected.push({
      index,
      after_cell_id: plan.cells[index - 1].id,
      before_cell_id: plan.cells[index].id,
      delay_ms: interCellDelayMs(plan, index),
    });
  }
  return expected;
}

function validTimestampRange(startedAt, finishedAt) {
  const started = Date.parse(startedAt);
  const finished = Date.parse(finishedAt);
  return Number.isFinite(started) && Number.isFinite(finished) && finished >= started;
}

function assertInvocationHistory(state) {
  const invocations = state.invocation_history;
  let completed = 0;
  let priorFinishedAt = null;
  for (const [index, invocation] of invocations.entries()) {
    const expectedNumber = index + 1;
    const startedAt = Date.parse(invocation.started_at);
    if (
      invocation.invocation !== expectedNumber
      || invocation.status !== "checkpointed"
      || !Number.isInteger(invocation.max_new_cells)
      || invocation.max_new_cells < 1
      || invocation.max_new_cells !== state.execution_contract?.max_new_cells
      || invocation.completed_cells_before !== completed
      || !Number.isInteger(invocation.new_cells_completed)
      || invocation.new_cells_completed < 1
      || invocation.new_cells_completed > invocation.max_new_cells
      || invocation.completed_cells_after !== completed + invocation.new_cells_completed
      || !validTimestampRange(invocation.started_at, invocation.finished_at)
      || (priorFinishedAt !== null && startedAt < priorFinishedAt)
    ) {
      throw new Error("checkpoint invocation history is invalid");
    }
    const invocationCells = state.cells.slice(completed, invocation.completed_cells_after);
    if (
      invocationCells.length !== invocation.new_cells_completed
      || invocationCells.some((cell) => cell.completed_in_invocation !== expectedNumber)
    ) {
      throw new Error("checkpoint invocation history is invalid");
    }
    completed = invocation.completed_cells_after;
    priorFinishedAt = Date.parse(invocation.finished_at);
  }
  if (completed !== state.completed_cells) {
    throw new Error("checkpoint invocation history is invalid");
  }
}

function assertCheckpointHistory(state, plan) {
  if (state.checkpoint_history.length !== state.invocation_history.length) {
    throw new Error("checkpoint history chain is invalid");
  }
  for (const [index, checkpoint] of state.checkpoint_history.entries()) {
    const invocation = state.invocation_history[index];
    if (
      checkpoint.checkpoint !== index + 1
      || checkpoint.invocation !== invocation.invocation
      || checkpoint.status !== "checkpointed"
      || checkpoint.completed_cells !== invocation.completed_cells_after
      || checkpoint.after_cell_id !== plan.cells[checkpoint.completed_cells - 1]?.id
      || checkpoint.created_at !== invocation.finished_at
    ) {
      throw new Error("checkpoint history chain is invalid");
    }
  }
  if (!isDeepStrictEqual(state.checkpoint, state.checkpoint_history.at(-1))) {
    throw new Error("checkpoint history chain is invalid");
  }
}

function assertPreflightHistory(state) {
  if (state.evaluator_preflight_history.length !== state.invocation_history.length) {
    throw new Error("checkpoint preflight history is invalid");
  }
  for (const [index, preflight] of state.evaluator_preflight_history.entries()) {
    const invocation = state.invocation_history[index];
    const preflightStartedAt = Date.parse(preflight.started_at);
    const preflightFinishedAt = Date.parse(preflight.finished_at);
    if (
      preflight.invocation !== index + 1
      || preflight.status !== "complete"
      || !validTimestampRange(preflight.started_at, preflight.finished_at)
      || preflightStartedAt < Date.parse(invocation.started_at)
      || preflightFinishedAt > Date.parse(invocation.finished_at)
      || !isDeepStrictEqual(preflight.dependencies, ["playwright-core", "axe-core"])
    ) {
      throw new Error("checkpoint preflight history is invalid");
    }
  }
  if (!isDeepStrictEqual(state.evaluator_preflight, state.evaluator_preflight_history.at(-1))) {
    throw new Error("checkpoint preflight history is invalid");
  }
}

function invocationFinishContainsEvidence(state, invocation, finishedAt) {
  if (!validTimestampRange(invocation.started_at, finishedAt)) return false;
  const evidenceFinishedAt = [
    ...state.evaluator_preflight_history
      .filter((entry) => entry.invocation === invocation.invocation)
      .map((entry) => entry.finished_at),
    ...state.pacing_history
      .filter((entry) => entry.invocation === invocation.invocation)
      .map((entry) => entry.finished_at),
  ];
  return evidenceFinishedAt.every((timestamp) => (
    Number.isFinite(Date.parse(timestamp))
    && Date.parse(timestamp) <= Date.parse(finishedAt)
  ));
}

function validCompletedPacingEntry(entry, expected, state, plan) {
  const wallFromTimestamps = Date.parse(entry.finished_at) - Date.parse(entry.started_at);
  const monotonicFromTimestamps = entry.monotonic_finished_ms - entry.monotonic_started_ms;
  const expectedDisagreement = Math.abs(entry.monotonic_elapsed_ms - entry.wall_elapsed_ms);
  const invocation = state.invocation_history[entry.invocation - 1];
  return (
    entry.policy === plan.control_contract.pacing.policy
    && entry.after_cell_id === expected.after_cell_id
    && entry.before_cell_id === expected.before_cell_id
    && entry.delay_seconds === expected.delay_ms / 1000
    && entry.counts_toward_cell_wall_time === false
    && entry.status === "complete"
    && entry.invocation === state.cells[expected.index].completed_in_invocation
    && invocation?.invocation === entry.invocation
    && validTimestampRange(entry.started_at, entry.finished_at)
    && Date.parse(entry.started_at) >= Date.parse(invocation.started_at)
    && Date.parse(entry.finished_at) <= Date.parse(invocation.finished_at)
    && entry.wall_elapsed_ms === wallFromTimestamps
    && entry.monotonic_elapsed_ms === monotonicFromTimestamps
    && entry.clock_disagreement_ms === expectedDisagreement
    && entry.clock_difference_ms === expectedDisagreement
    && isDeepStrictEqual(entry.acceptance_window_ms, {
      min: expected.delay_ms,
      max: expected.delay_ms + PACING_MAX_OVERSHOOT_MS,
      max_clock_disagreement: PACING_MAX_CLOCK_DISAGREEMENT_MS,
    })
    && pacingStopReason(
      entry.monotonic_elapsed_ms,
      entry.wall_elapsed_ms,
      expected.delay_ms,
    ) === null
  );
}

function assertCheckpointedResume(state, plan, matrixRoot, planSha, preparationSha) {
  if (state.status !== "checkpointed") {
    throw new Error(`matrix execution state is not resumable: ${state.status ?? "unknown"}`);
  }
  if (
    state.experiment_id !== plan.experiment_id
    || state.scheduled_cells !== plan.cells.length
    || state.locked_plan_sha256 !== planSha
    || state.preparation_state_sha256 !== preparationSha
  ) {
    throw new Error("checkpoint execution metadata drifted");
  }
  if (state.current_cell !== null || state.pacing !== null) {
    throw new Error("checkpoint contains incomplete running work");
  }
  if (
    !Number.isInteger(state.completed_cells)
    || state.completed_cells < 1
    || state.completed_cells >= plan.cells.length
    || !Array.isArray(state.cells)
    || state.cells.length !== state.completed_cells
  ) {
    throw new Error("checkpoint completed prefix is invalid");
  }
  if (
    !Array.isArray(state.invocation_history)
    || state.invocation_history.length < 1
    || !Array.isArray(state.checkpoint_history)
    || state.checkpoint_history.length < 1
    || !Array.isArray(state.evaluator_preflight_history)
    || state.evaluator_preflight_history.length < 1
    || !Array.isArray(state.pacing_history)
  ) {
    throw new Error("checkpoint evidence history is incomplete");
  }
  const expectedAttestationIds = plan.cells.map((cell) => cell.id).sort();
  const receivedAttestationIds = Object.keys(state.prepared_cell_attestations ?? {}).sort();
  if (
    !isDeepStrictEqual(receivedAttestationIds, expectedAttestationIds)
    || expectedAttestationIds.some(
      (id) => !validPreparedCellAttestation(
        state.prepared_cell_attestations[id],
        { hostPolicy: plan.host_policy_comparison !== undefined || plan.shared_host_policy !== undefined },
      ),
    )
  ) {
    throw new Error("checkpoint preparation attestations are incomplete");
  }

  for (let index = 0; index < state.completed_cells; index += 1) {
    assertCompletedCell(state.cells[index], plan.cells[index], index, matrixRoot);
  }
  for (let index = state.completed_cells; index < plan.cells.length; index += 1) {
    const cell = plan.cells[index];
    assertUntouchedCell(
      join(matrixRoot, cell.id),
      state.prepared_cell_attestations[cell.id],
    );
  }

  assertInvocationHistory(state);
  assertCheckpointHistory(state, plan);
  assertPreflightHistory(state);

  const completedPacing = state.pacing_history;
  const expectedPacing = expectedCompletedPacing(plan, state.completed_cells);
  if (
    completedPacing.length !== expectedPacing.length
    || expectedPacing.some((expected, index) => (
      !validCompletedPacingEntry(completedPacing[index], expected, state, plan)
    ))
  ) {
    throw new Error("checkpoint pacing prefix is invalid");
  }
  return state.completed_cells;
}

function stopBeforeProvider(
  state,
  plan,
  index,
  matrixRoot,
  reason,
  executionStatePath,
  invocation,
  finishedAt,
) {
  state.status = "stopped-preregistered";
  state.stop_reason = reason;
  state.current_cell = null;
  for (let cursor = index; cursor < plan.cells.length; cursor += 1) {
    const cell = plan.cells[cursor];
    upsertCell(state, {
      id: cell.id,
      order: cursor + 1,
      status: "not-started",
      workspace: join(matrixRoot, cell.id),
      reason,
    });
  }
  if (invocation) {
    invocation.status = "stopped-preregistered";
    invocation.stop_reason = reason;
    invocation.finished_at = finishedAt;
  }
  writeJson(executionStatePath, state);
  throw new Error(reason);
}

function pacingStopReason(monotonicElapsedMs, wallElapsedMs, requestedDelayMs) {
  if (!Number.isFinite(monotonicElapsedMs) || monotonicElapsedMs < 0) {
    return "pacing-monotonic-clock-invalid";
  }
  if (!Number.isFinite(wallElapsedMs) || wallElapsedMs < 0) {
    return "pacing-wall-clock-invalid";
  }
  if (
    monotonicElapsedMs < requestedDelayMs
    || monotonicElapsedMs > requestedDelayMs + PACING_MAX_OVERSHOOT_MS
  ) {
    return `pacing-window-violation:monotonic-${monotonicElapsedMs}:wall-${wallElapsedMs}`;
  }
  if (Math.abs(monotonicElapsedMs - wallElapsedMs) > PACING_MAX_CLOCK_DISAGREEMENT_MS) {
    return `pacing-clock-disagreement:monotonic-${monotonicElapsedMs}:wall-${wallElapsedMs}`;
  }
  return null;
}

function executePreparedMatrixWithLease(root, {
  waitFn = waitSynchronously,
  nowFn = () => new Date().toISOString(),
  monotonicNowFn = () => performance.now(),
  maxNewCells,
  runtimePreflightOptions,
} = {}) {
  const matrixRoot = resolve(root);
  const lockedPlanPath = join(matrixRoot, "RUN-MATRIX.locked.json");
  const preparationStatePath = join(matrixRoot, "matrix-state.json");
  const executionStatePath = join(matrixRoot, "execution-state.json");
  const bounded = maxNewCells !== undefined;
  if (bounded) positiveIntegerOrThrow(maxNewCells);
  if (!existsSync(lockedPlanPath) || !existsSync(preparationStatePath)) {
    throw new Error("matrix root is missing locked plan or preparation state");
  }
  assertPreparedObjectiveMethodology(matrixRoot);
  const plan = readJson(lockedPlanPath);
  const preparation = readJson(preparationStatePath);
  validateLocalBrowserEvidenceAdmission(plan);
  const executionHold = remoteExecutionHoldReason(plan);
  if (executionHold) throw new Error(executionHold);
  const lockedPlanSha256 = fileSha256(lockedPlanPath);
  const preparationStateSha256 = fileSha256(preparationStatePath);
  if (preparation.status !== "prepared" || preparation.prepared_cells !== plan.cells.length) {
    throw new Error("matrix preparation is incomplete");
  }
  const existing = existsSync(executionStatePath) ? readJson(executionStatePath) : null;
  const freshPreparedCellAttestations = {};
  const existingCheckpointBounded = existing?.execution_contract?.mode === "checkpoint-bounded";
  if (existingCheckpointBounded && !bounded) {
    throw new Error("checkpoint-bounded matrix requires maxNewCells on every continuation");
  }
  if (
    existingCheckpointBounded
    && existing.execution_contract.max_new_cells !== maxNewCells
  ) {
    throw new Error(
      `checkpoint-bounded matrix maxNewCells is immutable: ${existing.execution_contract.max_new_cells}`,
    );
  }
  if (bounded && existing && !existingCheckpointBounded) {
    throw new Error("cannot change an existing matrix to checkpoint-bounded execution");
  }
  if (bounded && existing) {
    assertCheckpointedResume(
      existing,
      plan,
      matrixRoot,
      lockedPlanSha256,
      preparationStateSha256,
    );
    const priorReliabilityStop = existing.cells
      .map((entry) => reliabilityHardStopReason(plan, entry))
      .find(Boolean);
    if (priorReliabilityStop) {
      stopBeforeProvider(
        existing,
        plan,
        existing.completed_cells,
        matrixRoot,
        priorReliabilityStop,
        executionStatePath,
        null,
        nowFn(),
      );
    }
  } else if (existing?.status === "stopped-preregistered") {
    throw new Error(`matrix is frozen after preregistered stop: ${existing.stop_reason}`);
  } else if (bounded) {
    for (const cell of plan.cells) {
      const workspace = join(matrixRoot, cell.id);
      assertUntouchedCell(workspace);
      freshPreparedCellAttestations[cell.id] = preparedCellAttestation(workspace);
    }
  }
  const runtimePreflight = preflightRuntimeEnvironment(plan, {
    ...runtimePreflightOptions,
    workspaceRoot: runtimePreflightOptions?.workspaceRoot
      ?? join(matrixRoot, plan.cells[existing?.completed_cells ?? 0]?.id ?? ""),
  });
  console.log(JSON.stringify({ event: "runtime-preflight-complete", ...runtimePreflight }));
  const state = existing ?? {
    schema_version: plan.schema_version ?? "0.1",
    experiment_id: plan.experiment_id,
    suite_version: plan.suite_version ?? null,
    product_version: plan.product_version ?? null,
    execution_purpose: plan.execution_purpose ?? null,
    status: "running",
    scheduled_cells: plan.cells.length,
    completed_cells: 0,
    current_cell: null,
    cells: [],
  };
  if (bounded && !existing) {
    state.execution_contract = {
      mode: "checkpoint-bounded",
      max_new_cells: maxNewCells,
    };
    state.locked_plan_sha256 = lockedPlanSha256;
    state.preparation_state_sha256 = preparationStateSha256;
    state.invocation_history = [];
    state.checkpoint_history = [];
    state.evaluator_preflight_history = [];
    state.pacing_history = [];
    state.pacing = null;
    state.prepared_cell_attestations = freshPreparedCellAttestations;
  }
  const startingCompletedCells = bounded ? state.completed_cells : 0;
  const invocationStartedAt = bounded ? nowFn() : null;
  const priorInvocation = bounded ? state.invocation_history.at(-1) : null;
  if (
    bounded
    && (
      !Number.isFinite(Date.parse(invocationStartedAt))
      || (
        priorInvocation
        && Date.parse(invocationStartedAt) < Date.parse(priorInvocation.finished_at)
      )
    )
  ) {
    throw new Error("checkpoint invocation clock regressed");
  }
  const invocation = bounded ? {
    invocation: state.invocation_history.length + 1,
    max_new_cells: maxNewCells,
    started_at: invocationStartedAt,
    finished_at: null,
    status: "running",
    completed_cells_before: startingCompletedCells,
    completed_cells_after: startingCompletedCells,
    new_cells_completed: 0,
  } : null;
  if (invocation) state.invocation_history.push(invocation);
  const stopCurrentInvocation = (reason) => {
    if (!invocation) return;
    invocation.status = "stopped-preregistered";
    invocation.stop_reason = reason;
    invocation.completed_cells_after = state.completed_cells;
    invocation.finished_at = nowFn();
  };
  state.status = "running";
  delete state.stop_reason;
  writeJson(executionStatePath, state);

  const repo = REPO_ROOT;
  const evaluateScript = (
    plan.execution_purpose === "runtime-contract-calibration"
    && process.env.OMD_BENCH_CALIBRATION_EVALUATOR
  )
    ? resolve(process.env.OMD_BENCH_CALIBRATION_EVALUATOR)
    : resolve(fileURLToPath(new URL("./evaluate-run.mjs", import.meta.url)));
  const exportScript = resolve(fileURLToPath(new URL("./export-run-record.mjs", import.meta.url)));
  const preflightStartedAt = nowFn();
  const evaluatorPreflight = runNode(evaluateScript, ["--preflight"], repo);
  const preflightFinishedAt = nowFn();
  state.evaluator_preflight = {
    status: evaluatorPreflight.status === 0 ? "complete" : "failed",
    started_at: preflightStartedAt,
    finished_at: preflightFinishedAt,
    dependencies: ["playwright-core", "axe-core"],
  };
  if (bounded) {
    state.evaluator_preflight.invocation = invocation.invocation;
    state.evaluator_preflight_history.push({ ...state.evaluator_preflight });
  }
  const preflightClockInvalid = bounded && (
    !validTimestampRange(preflightStartedAt, preflightFinishedAt)
    || Date.parse(preflightStartedAt) < Date.parse(invocation.started_at)
  );
  if (evaluatorPreflight.status !== 0 || preflightClockInvalid) {
    const reason = preflightClockInvalid
      ? "evaluator-preflight-clock-invalid"
      : `evaluator-preflight-failure:${evaluatorPreflight.stderr?.trim() || `exit-${evaluatorPreflight.status}`}`;
    state.status = "stopped-preregistered";
    state.stop_reason = reason;
    state.current_cell = null;
    if (bounded) {
      invocation.status = "stopped-preregistered";
      invocation.stop_reason = reason;
      invocation.finished_at = nowFn();
      for (let index = startingCompletedCells; index < plan.cells.length; index += 1) {
        const cell = plan.cells[index];
        upsertCell(state, {
          id: cell.id,
          order: index + 1,
          status: "not-started",
          workspace: join(matrixRoot, cell.id),
          reason,
        });
      }
    } else {
      state.cells = plan.cells.map((cell, index) => ({
        id: cell.id,
        order: index + 1,
        status: "not-started",
        workspace: join(matrixRoot, cell.id),
        reason,
      }));
    }
    writeJson(executionStatePath, state);
    throw new Error(reason);
  }
  writeJson(executionStatePath, state);

  for (let index = startingCompletedCells; index < plan.cells.length; index += 1) {
    const cell = plan.cells[index];
    const pacingDelayMs = interCellDelayMs(plan, index);
    if (pacingDelayMs > 0) {
      const pacingEntry = {
        policy: plan.control_contract.pacing.policy,
        after_cell_id: plan.cells[index - 1].id,
        before_cell_id: cell.id,
        delay_seconds: plan.control_contract.pacing.inter_cell_delay_seconds,
        counts_toward_cell_wall_time: false,
        status: "waiting",
        started_at: nowFn(),
        finished_at: null,
      };
      const pacingMonotonicStartedAt = bounded ? monotonicNowFn() : null;
      if (bounded) {
        pacingEntry.invocation = invocation.invocation;
        pacingEntry.monotonic_started_ms = pacingMonotonicStartedAt;
      }
      state.current_cell = null;
      state.pacing = pacingEntry;
      state.pacing_history ??= [];
      state.pacing_history.push(pacingEntry);
      writeJson(executionStatePath, state);
      console.log(JSON.stringify({ event: "pacing-wait-start", ...pacingEntry }));
      if (
        bounded
        && (
          !Number.isFinite(Date.parse(pacingEntry.started_at))
          || Date.parse(pacingEntry.started_at) < Date.parse(invocation.started_at)
        )
      ) {
        const reason = "pacing-invocation-clock-invalid";
        pacingEntry.status = "failed";
        pacingEntry.reason = reason;
        state.pacing = null;
        stopBeforeProvider(
          state,
          plan,
          index,
          matrixRoot,
          reason,
          executionStatePath,
          invocation,
          nowFn(),
        );
      }
      if (!bounded) {
        waitFn(pacingDelayMs);
      } else {
        try {
          waitFn(pacingDelayMs);
        } catch (error) {
          const reason = `pacing-wait-failure:${error instanceof Error ? error.message : String(error)}`;
          pacingEntry.status = "failed";
          pacingEntry.reason = reason;
          pacingEntry.finished_at = nowFn();
          state.pacing = null;
          stopBeforeProvider(
            state,
            plan,
            index,
            matrixRoot,
            reason,
            executionStatePath,
            invocation,
            nowFn(),
          );
        }
      }
      pacingEntry.status = "complete";
      pacingEntry.finished_at = nowFn();
      if (bounded) {
        pacingEntry.monotonic_finished_ms = monotonicNowFn();
        pacingEntry.monotonic_elapsed_ms = (
          pacingEntry.monotonic_finished_ms - pacingEntry.monotonic_started_ms
        );
        pacingEntry.wall_elapsed_ms = (
          Date.parse(pacingEntry.finished_at) - Date.parse(pacingEntry.started_at)
        );
        pacingEntry.clock_disagreement_ms = Math.abs(
          pacingEntry.monotonic_elapsed_ms - pacingEntry.wall_elapsed_ms
        );
        // Retained for schema compatibility with accepted 1.9.53 pacing evidence.
        pacingEntry.clock_difference_ms = pacingEntry.clock_disagreement_ms;
        const reason = pacingStopReason(
          pacingEntry.monotonic_elapsed_ms,
          pacingEntry.wall_elapsed_ms,
          pacingDelayMs,
        );
        if (reason) {
          pacingEntry.status = "failed";
          pacingEntry.reason = reason;
          state.pacing = null;
          stopBeforeProvider(
            state,
            plan,
            index,
            matrixRoot,
            reason,
            executionStatePath,
            invocation,
            nowFn(),
          );
        }
        pacingEntry.acceptance_window_ms = {
          min: pacingDelayMs,
          max: pacingDelayMs + PACING_MAX_OVERSHOOT_MS,
          max_clock_disagreement: PACING_MAX_CLOCK_DISAGREEMENT_MS,
        };
      }
      state.pacing = null;
      writeJson(executionStatePath, state);
      console.log(JSON.stringify({ event: "pacing-wait-complete", ...pacingEntry }));
      if (bounded && existsSync(join(matrixRoot, STOP_SENTINEL))) {
        stopBeforeProvider(
          state,
          plan,
          index,
          matrixRoot,
          "cancellation-sentinel",
          executionStatePath,
          invocation,
          nowFn(),
        );
      }
    }

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
      if (manifest.host_policy) {
        const currentPolicy = inspectPreparedHostPolicy(repo, workspace, manifest.host_policy.mode);
        if (!isDeepStrictEqual(currentPolicy, manifest.host_policy)) {
          stopBeforeProvider(
            state,
            plan,
            index,
            matrixRoot,
            "host-policy-preparation-drift",
            executionStatePath,
            invocation,
            nowFn(),
          );
        }
        if (summarizeHostPolicyStates(workspace).available) {
          stopBeforeProvider(
            state,
            plan,
            index,
            matrixRoot,
            "host-policy-state-exists-before-provider",
            executionStatePath,
            invocation,
            nowFn(),
          );
        }
      }
      const runnerSpec = runnerSpecForCell(cell, workspace);
      if (bounded && existsSync(join(matrixRoot, STOP_SENTINEL))) {
        stopBeforeProvider(
          state,
          plan,
          index,
          matrixRoot,
          "cancellation-sentinel",
          executionStatePath,
          invocation,
          nowFn(),
        );
      }
      const executed = runNode(runnerSpec.runner, runnerSpec.args, repo);
      if (!existsSync(resultPath)) {
        const reason = `runner-no-result:${executed.error?.message ?? executed.stderr?.trim() ?? `exit-${executed.status}`}`;
        state.status = "stopped-preregistered";
        state.stop_reason = reason;
        stopCurrentInvocation(reason);
        upsertCell(state, { id: cell.id, order: index + 1, status: "stopped", workspace, reason });
        freezeRemainingCells(state, plan, index, matrixRoot, reason);
        writeJson(executionStatePath, state);
        throw new Error(reason);
      }
    }

    const run = readJson(resultPath);
    const stopReason = preregisteredStopReason(cell, manifest, run, {
      schemaVersion: plan.schema_version ?? "0.1",
      timeoutPolicy: plan.control_contract?.timeout_policy ?? null,
    })
      ?? harnessDeliveryStopReason(manifest, run, plan.harness_delivery_gates, readEvents(eventsPath));
    if (stopReason) {
      state.status = "stopped-preregistered";
      state.stop_reason = stopReason;
      stopCurrentInvocation(stopReason);
      upsertCell(state, { id: cell.id, order: index + 1, status: "stopped", workspace, reason: stopReason });
      freezeRemainingCells(state, plan, index, matrixRoot, stopReason);
      writeJson(executionStatePath, state);
      throw new Error(`preregistered stop at ${cell.id}: ${stopReason}`);
    }

    if (!existsSync(scorePath)) {
      const evaluated = runNode(evaluateScript, ["--workspace", workspace], repo);
      if (evaluated.status !== 0 || !existsSync(scorePath)) {
        const reason = `evaluator-failure:${evaluated.stderr?.trim() || `exit-${evaluated.status}`}`;
        state.status = "stopped-preregistered";
        state.stop_reason = reason;
        stopCurrentInvocation(reason);
        upsertCell(state, { id: cell.id, order: index + 1, status: "stopped", workspace, reason });
        freezeRemainingCells(state, plan, index, matrixRoot, reason);
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
        "--suite-version", plan.suite_version ?? "1.9.7",
        "--budget-tier", cell.effort,
      ], repo);
      if (exported.status !== 0 || !existsSync(recordPath)) {
        const reason = `export-failure:${exported.stderr?.trim() || `exit-${exported.status}`}`;
        state.status = "stopped-preregistered";
        state.stop_reason = reason;
        stopCurrentInvocation(reason);
        upsertCell(state, { id: cell.id, order: index + 1, status: "stopped", workspace, reason });
        freezeRemainingCells(state, plan, index, matrixRoot, reason);
        writeJson(executionStatePath, state);
        throw new Error(reason);
      }
    }

    const candidatePreflightReason = candidatePreflightStopReason(plan, readJson(recordPath));
    if (candidatePreflightReason) {
      state.status = "stopped-preregistered";
      state.stop_reason = candidatePreflightReason;
      state.current_cell = null;
      stopCurrentInvocation(candidatePreflightReason);
      upsertCell(state, {
        id: cell.id,
        order: index + 1,
        status: "stopped",
        workspace,
        reason: candidatePreflightReason,
      });
      freezeRemainingCells(state, plan, index, matrixRoot, candidatePreflightReason);
      writeJson(executionStatePath, state);
      throw new Error(`preregistered stop at ${cell.id}: ${candidatePreflightReason}`);
    }

    const summary = completedCellSummary(
      cell,
      index,
      workspace,
      bounded
        ? { completedInInvocation: invocation.invocation }
        : { includeArtifactHashes: false },
    );
    const hostPolicyAdmission = hostPolicyAdmissionDisposition(plan, summary);
    const hostPolicyStopReason = hostPolicyAdmission.disposition === "invalid-infrastructure"
      ? hostPolicyAdmission.reason
      : null;
    if (hostPolicyStopReason) {
      const record = readJson(recordPath);
      record.validity = "invalid-infrastructure";
      record.runtime_diagnostics = {
        ...(record.runtime_diagnostics ?? {}),
        infrastructure_invalid_reason: hostPolicyStopReason,
      };
      writeJson(recordPath, record);
      const invalidSummary = completedCellSummary(
        cell,
        index,
        workspace,
        bounded
          ? { completedInInvocation: invocation.invocation }
          : { includeArtifactHashes: false },
      );
      invalidSummary.status = "stopped";
      invalidSummary.reason = hostPolicyStopReason;
      state.status = "stopped-preregistered";
      state.stop_reason = hostPolicyStopReason;
      state.current_cell = null;
      stopCurrentInvocation(hostPolicyStopReason);
      upsertCell(state, invalidSummary);
      freezeRemainingCells(state, plan, index, matrixRoot, hostPolicyStopReason);
      writeJson(executionStatePath, state);
      throw new Error(`preregistered stop at ${cell.id}: ${hostPolicyStopReason}`);
    }
    let admittedSummary = summary;
    if (hostPolicyAdmission.disposition === "valid-system-failure") {
      const record = readJson(recordPath);
      record.ui_resolved = false;
      record.runtime_diagnostics = {
        ...(record.runtime_diagnostics ?? {}),
        host_policy_admission: hostPolicyAdmission,
      };
      writeJson(recordPath, record);
      admittedSummary = completedCellSummary(
        cell,
        index,
        workspace,
        bounded
          ? { completedInInvocation: invocation.invocation }
          : { includeArtifactHashes: false },
      );
    }
    const reliabilityStopReason = reliabilityHardStopReason(plan, admittedSummary);
    if (reliabilityStopReason) {
      upsertCell(state, admittedSummary);
      state.completed_cells = state.cells.filter((entry) => entry.status === "complete").length;
      state.status = "stopped-preregistered";
      state.stop_reason = reliabilityStopReason;
      state.current_cell = null;
      stopCurrentInvocation(reliabilityStopReason);
      freezeRemainingCells(state, plan, index, matrixRoot, reliabilityStopReason);
      writeJson(executionStatePath, state);
      console.log(JSON.stringify({ event: "cell-complete", ...admittedSummary }));
      throw new Error(`preregistered stop at ${cell.id}: ${reliabilityStopReason}`);
    }
    upsertCell(state, admittedSummary);
    state.completed_cells = state.cells.filter((entry) => entry.status === "complete").length;
    state.current_cell = null;
    if (bounded) {
      invocation.new_cells_completed += 1;
      invocation.completed_cells_after = state.completed_cells;
    }
    writeJson(executionStatePath, state);
    console.log(JSON.stringify({ event: "cell-complete", ...admittedSummary }));

    if (
      bounded
      && invocation.new_cells_completed >= maxNewCells
      && state.completed_cells < plan.cells.length
    ) {
      const checkpointedAt = nowFn();
      if (!invocationFinishContainsEvidence(state, invocation, checkpointedAt)) {
        const reason = "checkpoint-invocation-clock-invalid";
        state.status = "stopped-preregistered";
        state.stop_reason = reason;
        invocation.status = "stopped-preregistered";
        invocation.stop_reason = reason;
        invocation.finished_at = checkpointedAt;
        freezeRemainingCells(state, plan, index, matrixRoot, reason);
        writeJson(executionStatePath, state);
        throw new Error(reason);
      }
      const checkpoint = {
        checkpoint: state.checkpoint_history.length + 1,
        invocation: invocation.invocation,
        status: "checkpointed",
        after_cell_id: cell.id,
        completed_cells: state.completed_cells,
        created_at: checkpointedAt,
      };
      state.status = "checkpointed";
      state.checkpoint = checkpoint;
      state.checkpoint_history.push(checkpoint);
      invocation.status = "checkpointed";
      invocation.finished_at = checkpointedAt;
      writeJson(executionStatePath, state);
      console.log(JSON.stringify({ event: "matrix-checkpointed", ...checkpoint }));
      return state;
    }
  }

  state.status = "complete";
  state.current_cell = null;
  const proofGatedCells = state.cells.filter((entry) => entry.proof_execution_gate !== null);
  state.proof_execution_gate = proofGatedCells.length
    ? {
        enforcement: "promotion-report",
        applicable_cells: proofGatedCells.length,
        passed_cells: proofGatedCells.filter((entry) => entry.proof_execution_gate.pass).length,
        failed_cell_ids: proofGatedCells.filter((entry) => !entry.proof_execution_gate.pass).map((entry) => entry.id),
        pass: proofGatedCells.every((entry) => entry.proof_execution_gate.pass),
      }
    : null;
  const hostPolicyCells = state.cells.filter((entry) => entry.host_policy_gate !== null);
  state.host_policy_gate = hostPolicyCells.length
    ? {
        applicable_cells: hostPolicyCells.length,
        passed_cells: hostPolicyCells.filter((entry) => entry.host_policy_gate.pass).length,
        failed_cell_ids: hostPolicyCells
          .filter((entry) => !entry.host_policy_gate.pass)
          .map((entry) => entry.id),
        pass: hostPolicyCells.every((entry) => entry.host_policy_gate.pass),
      }
    : null;
  if (bounded) {
    const finishedAt = nowFn();
    if (!invocationFinishContainsEvidence(state, invocation, finishedAt)) {
      const reason = "complete-invocation-clock-invalid";
      state.status = "stopped-preregistered";
      state.stop_reason = reason;
      invocation.status = "stopped-preregistered";
      invocation.stop_reason = reason;
      invocation.finished_at = finishedAt;
      writeJson(executionStatePath, state);
      throw new Error(reason);
    }
    invocation.status = "complete";
    invocation.completed_cells_after = state.completed_cells;
    invocation.finished_at = finishedAt;
  }
  writeJson(executionStatePath, state);
  console.log(JSON.stringify({ event: "matrix-complete", completed_cells: state.completed_cells }));
  return state;
}

export function executePreparedMatrix(root, options = {}) {
  const matrixRoot = resolve(root);
  assertPreparedObjectiveMethodology(matrixRoot);
  const lease = acquireInvocationLease(matrixRoot);
  try {
    return executePreparedMatrixWithLease(matrixRoot, options);
  } finally {
    releaseInvocationLease(lease);
  }
}

export function validateRunPreparedMatrixCliArgs(args) {
  const allowed = new Set(["root", "max-new-cells"]);
  const unknown = [...args.keys()].filter((key) => !allowed.has(key));
  if (unknown.length) {
    throw new Error(`unknown option(s): ${unknown.map((key) => `--${key}`).join(", ")}`);
  }
  return args;
}

async function main() {
  const args = validateRunPreparedMatrixCliArgs(parseArgs());
  const root = args.get("root") ? resolve(String(args.get("root"))) : null;
  if (!root) {
    console.error(
      "usage: run-prepared-matrix.mjs --root <prepared-matrix-root> [--max-new-cells <positive-integer>]",
    );
    process.exitCode = 2;
    return;
  }
  const maxNewCellsArg = args.get("max-new-cells");
  let maxNewCells;
  if (maxNewCellsArg !== undefined) {
    const raw = String(maxNewCellsArg);
    if (!/^[1-9]\d*$/.test(raw)) {
      throw new Error("--max-new-cells must be a positive integer");
    }
    maxNewCells = positiveIntegerOrThrow(Number(raw), "--max-new-cells");
  }
  executePreparedMatrix(root, maxNewCells === undefined ? undefined : { maxNewCells });
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}

import { spawnSync } from "node:child_process";
import {
  chmodSync,
  mkdtempSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { prepareRunMatrix } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";
import {
  executePreparedMatrix,
  hostPolicyAdmissionStopReason,
  preflightRuntimeEnvironment,
} from "../../../benchmarks/ui-resolve-bench/scripts/run-prepared-matrix.mjs";
import {
  runnerSpecForCell,
  runtimeAttributionStopReason,
} from "../../../benchmarks/ui-resolve-bench/scripts/runtime-contract.mjs";

const ORIGINAL_ENV = {
  claude: process.env.OMD_BENCH_CLAUDE_BIN,
  codex: process.env.OMD_BENCH_CODEX_BIN,
  fake: process.env.OMD_BENCH_FAKE_RUNTIME,
  evaluator: process.env.OMD_BENCH_CALIBRATION_EVALUATOR,
};
const ORIGINAL_EXEC_PATH = process.execPath;

afterEach(() => {
  process.execPath = ORIGINAL_EXEC_PATH;
  for (const [key, value] of Object.entries({
    OMD_BENCH_CLAUDE_BIN: ORIGINAL_ENV.claude,
    OMD_BENCH_CODEX_BIN: ORIGINAL_ENV.codex,
    OMD_BENCH_FAKE_RUNTIME: ORIGINAL_ENV.fake,
    OMD_BENCH_CALIBRATION_EVALUATOR: ORIGINAL_ENV.evaluator,
  })) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

function executable(path, body) {
  writeFileSync(path, `#!/usr/bin/env node\n${body}`, "utf8");
  chmodSync(path, 0o755);
  return path;
}

function calibrationPlan(root, cells = null) {
  return {
    schema_version: "0.2",
    suite_version: "ui-resolve-v0.1",
    product_version: "1.9.39",
    execution_purpose: "runtime-contract-calibration",
    experiment_id: "provider-neutral-fake-calibration",
    output_root: root,
    family: "model",
    cells: cells ?? [
      {
        id: "fake-claude",
        task_id: "pricing-conversion-v0.1",
        variant_id: "omd-portable",
        system_id: "fake-claude",
        runtime: "claude-code",
        model_id: "claude-fake-5",
        effort: "high",
        allow_dirty_source: true,
        timeout_seconds: 20,
        trial_index: 1,
      },
      {
        id: "fake-codex",
        task_id: "pricing-conversion-v0.1",
        variant_id: "omd-portable",
        system_id: "fake-codex",
        runtime: "codex",
        model_id: "gpt-fake-grok-4-5",
        effort: "xhigh",
        allow_dirty_source: true,
        timeout_seconds: 20,
        trial_index: 1,
      },
    ],
  };
}

function pacedCalibrationPlan(root) {
  const plan = calibrationPlan(root);
  plan.control_contract = {
    pacing: {
      policy: "fixed-inter-cell",
      inter_cell_delay_seconds: 120,
      applies_between_cells_only: true,
      counts_toward_cell_wall_time: false,
    },
  };
  return plan;
}

function threeCellPacedPlan(root) {
  const plan = pacedCalibrationPlan(root);
  plan.cells.push({
    ...plan.cells[0],
    id: "fake-claude-2",
    system_id: "fake-claude-2",
    trial_index: 2,
  });
  return plan;
}

function injectedClock({
  wallStart = "2026-07-28T00:00:00.000Z",
  monotonicStart = 10_000,
  wallAdvanceMs = 120_000,
  monotonicAdvanceMs = 120_000,
  afterWait = null,
} = {}) {
  let wallMs = Date.parse(wallStart);
  let monotonicMs = monotonicStart;
  const waits = [];
  return {
    waits,
    nowFn: () => new Date(wallMs).toISOString(),
    monotonicNowFn: () => monotonicMs,
    waitFn: (milliseconds) => {
      waits.push(milliseconds);
      wallMs += wallAdvanceMs;
      monotonicMs += monotonicAdvanceMs;
      afterWait?.();
    },
  };
}

function invocationCount(root, cellId, runtime) {
  const path = join(root, cellId, ".benchmark", `fake-${runtime}-invocation-count.txt`);
  try {
    return Number(readFileSync(path, "utf8"));
  } catch {
    return 0;
  }
}

function evaluatorInvocationCount(root, cellId) {
  return numericFile(
    join(root, cellId, ".benchmark", "fake-evaluator-invocation-count.txt"),
  );
}

function exporterInvocationCount(root, cellId) {
  return numericFile(
    join(root, cellId, ".benchmark", "fake-exporter-invocation-count.txt"),
  );
}

function artifactSnapshot(root, cellId) {
  const benchmarkDir = join(root, cellId, ".benchmark");
  return Object.fromEntries([
    "run-result.json",
    "score.json",
    "run-record.json",
    "fake-claude-invocation.json",
    "fake-claude-invocation-count.txt",
  ].map((name) => [name, readFileSync(join(benchmarkDir, name), "utf8")]));
}

function durableArtifactSnapshot(root, cellId) {
  const benchmarkDir = join(root, cellId, ".benchmark");
  return Object.fromEntries([
    "run-result.json",
    "score.json",
    "run-record.json",
  ].map((name) => [name, readFileSync(join(benchmarkDir, name), "utf8")]));
}

function artifactMtimeSnapshot(root, cellId) {
  const benchmarkDir = join(root, cellId, ".benchmark");
  return Object.fromEntries([
    "run-result.json",
    "score.json",
    "run-record.json",
  ].map((name) => [name, statSync(join(benchmarkDir, name)).mtimeMs]));
}

function numericFile(path) {
  try {
    return Number(readFileSync(path, "utf8"));
  } catch {
    return 0;
  }
}

function continuationSnapshot(temp, root) {
  return {
    claude_invocations: invocationCount(root, "fake-claude", "claude"),
    codex_invocations: invocationCount(root, "fake-codex", "codex"),
    evaluator_preflights: numericFile(join(temp, "fake-evaluator-preflight-count.txt")),
    cell1_evaluations: evaluatorInvocationCount(root, "fake-claude"),
    cell1_exports: exporterInvocationCount(root, "fake-claude"),
    cell1_artifacts: artifactSnapshot(root, "fake-claude"),
    cell1_artifact_mtimes: artifactMtimeSnapshot(root, "fake-claude"),
  };
}

function checkpointFixture(prefix = "omd-provider-integrity-") {
  const temp = mkdtempSync(join(tmpdir(), prefix));
  const root = join(temp, "matrix");
  installFakeRuntimes(temp);
  prepareRunMatrix(pacedCalibrationPlan(root));
  const state = executePreparedMatrix(root, {
    maxNewCells: 1,
    ...injectedClock(),
  });
  expect(state.status).toBe("checkpointed");
  return { temp, root, state };
}

function mutateExecutionState(root, mutate) {
  const path = join(root, "execution-state.json");
  const state = JSON.parse(readFileSync(path, "utf8"));
  mutate(state);
  writeFileSync(path, JSON.stringify(state), "utf8");
}

function expectGuardedContinuationFailure(temp, root, expected) {
  const before = continuationSnapshot(temp, root);
  const clock = injectedClock();
  expect(() => executePreparedMatrix(root, {
    maxNewCells: 1,
    waitFn: clock.waitFn,
    nowFn: clock.nowFn,
    monotonicNowFn: clock.monotonicNowFn,
  })).toThrow(expected);
  expect(clock.waits).toEqual([]);
  expect(continuationSnapshot(temp, root)).toEqual(before);
}

function runMatrixCli(root, extraArgs = []) {
  return spawnSync(process.execPath, [
    join(process.cwd(), "benchmarks", "ui-resolve-bench", "scripts", "run-prepared-matrix.mjs"),
    "--root",
    root,
    ...extraArgs,
  ], {
    cwd: process.cwd(),
    env: process.env,
    encoding: "utf8",
  });
}

function installCountingNodeWrapper(temp) {
  const wrapper = executable(join(temp, "counting-node-wrapper.mjs"), `
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
const [script, ...args] = process.argv.slice(2);
if (path.basename(script) === "export-run-record.mjs") {
  const workspace = args[args.indexOf("--workspace") + 1];
  const countPath = path.join(workspace, ".benchmark", "fake-exporter-invocation-count.txt");
  const count = fs.existsSync(countPath) ? Number(fs.readFileSync(countPath, "utf8")) : 0;
  fs.writeFileSync(countPath, String(count + 1));
}
const child = spawnSync(${JSON.stringify(ORIGINAL_EXEC_PATH)}, [script, ...args], {
  stdio: "inherit",
});
if (child.error) throw child.error;
process.exit(child.status ?? 1);
`);
  process.execPath = wrapper;
  return wrapper;
}

function installFakeRuntimes(root, { emptyClaude = false, slowClaude = false } = {}) {
  const claude = executable(join(root, "fake-claude.mjs"), `
import fs from "node:fs";
import path from "node:path";
const argv = process.argv.slice(2);
const benchmarkDir = path.join(process.cwd(), ".benchmark");
const invocationPath = path.join(benchmarkDir, "fake-claude-invocation.json");
const countPath = path.join(benchmarkDir, "fake-claude-invocation-count.txt");
const count = fs.existsSync(countPath) ? Number(fs.readFileSync(countPath, "utf8")) : 0;
fs.writeFileSync(invocationPath, JSON.stringify(argv));
fs.writeFileSync(countPath, String(count + 1));
${slowClaude ? "await new Promise((resolve) => setTimeout(resolve, 5_000));" : ""}
const model = argv[argv.indexOf("--model") + 1];
console.log(JSON.stringify({type:"system",subtype:"init",model}));
console.log(JSON.stringify({
  type:"result", subtype:"success", is_error:false, model,
  result:${emptyClaude ? '""' : '"fake claude complete"'},
  modelUsage:{[model]:{inputTokens:11,cacheCreationInputTokens:0,cacheReadInputTokens:2,outputTokens:3,costUSD:0}}
}));
`);
  const codex = executable(join(root, "fake-codex.mjs"), `
import fs from "node:fs";
import path from "node:path";
const argv = process.argv.slice(2);
const benchmarkDir = path.join(process.cwd(), ".benchmark");
const invocationPath = path.join(benchmarkDir, "fake-codex-invocation.json");
const countPath = path.join(benchmarkDir, "fake-codex-invocation-count.txt");
const count = fs.existsSync(countPath) ? Number(fs.readFileSync(countPath, "utf8")) : 0;
fs.writeFileSync(invocationPath, JSON.stringify(argv));
fs.writeFileSync(countPath, String(count + 1));
const model = argv[argv.indexOf("--model") + 1];
const finalPath = argv[argv.indexOf("--output-last-message") + 1];
fs.writeFileSync(finalPath, "fake codex complete");
console.log(JSON.stringify({type:"runtime.init",model}));
console.log(JSON.stringify({type:"usage",model,usage:{input_tokens:13,cached_input_tokens:4,output_tokens:5}}));
`);
  const evaluator = executable(join(root, "fake-evaluator.mjs"), `
import fs from "node:fs";
import path from "node:path";
const argv = process.argv.slice(2);
function increment(file) {
  const count = fs.existsSync(file) ? Number(fs.readFileSync(file, "utf8")) : 0;
  fs.writeFileSync(file, String(count + 1));
}
if (argv.includes("--preflight")) {
  increment(path.join(path.dirname(process.argv[1]), "fake-evaluator-preflight-count.txt"));
  console.log(JSON.stringify({event:"fake-evaluator-preflight-complete"}));
  process.exit(0);
}
const workspace = argv[argv.indexOf("--workspace") + 1];
increment(path.join(workspace, ".benchmark", "fake-evaluator-invocation-count.txt"));
fs.writeFileSync(path.join(workspace, ".benchmark", "score.json"), JSON.stringify({
  status:{automated_gate_pass:false},
  points:{deterministic_total:0,deterministic_max:85},
  critical_gates:{evidence_honesty:true}
}));
`);
  process.env.OMD_BENCH_CLAUDE_BIN = claude;
  process.env.OMD_BENCH_CODEX_BIN = codex;
  process.env.OMD_BENCH_FAKE_RUNTIME = "1";
  process.env.OMD_BENCH_CALIBRATION_EVALUATOR = evaluator;
}

describe("provider-neutral prepared matrix contract", () => {
  it("preflights required browser proof before any provider execution", () => {
    const plan = calibrationPlan("/tmp/provider-neutral-browser-preflight");
    plan.shared_host_policy = { require_browser_attempt: true };
    expect(() => preflightRuntimeEnvironment(plan, {
      browserProbe: () => ({ status: 1, stdout: "[FAIL] daemon alive" }),
      codexProbe: () => ({ status: 0, stderr: "Logged in using ChatGPT" }),
    })).toThrow("runtime-preflight-failure:browser-harness-not-ready");

    expect(preflightRuntimeEnvironment(plan, {
      browserProbe: () => ({
        status: 1,
        stdout: "[ok  ] daemon alive\n[FAIL] Chrome process list unavailable\n[ok  ] active browser connections — 1",
      }),
      codexProbe: () => ({ status: 0, stderr: "Logged in using ChatGPT" }),
    }).checks).toContainEqual({
      runtime: "shared-host-policy",
      resource: "browser-harness",
      status: "ready",
      sandbox: "external-workspace-openai-browser",
    });
    expect(preflightRuntimeEnvironment(plan, {
      browserProbe: () => ({
        status: 0,
        stdout: "[ok  ] daemon alive\n[ok  ] active browser connections — 1",
      }),
      codexProbe: () => ({ status: 0, stderr: "Logged in using ChatGPT" }),
    }).checks).toContainEqual({
      runtime: "shared-host-policy",
      resource: "codex-auth",
      status: "ready",
      sandbox: "external-workspace-openai-browser",
    });
    expect(() => preflightRuntimeEnvironment(plan, {
      browserProbe: () => ({
        status: 0,
        stdout: "[ok  ] daemon alive\n[FAIL] active browser connections — 0",
      }),
      codexProbe: () => ({ status: 0, stderr: "Logged in using ChatGPT" }),
    })).toThrow("runtime-preflight-failure:browser-harness-not-ready");
    expect(() => preflightRuntimeEnvironment(plan, {
      browserProbe: () => ({
        status: 0,
        stdout: "[ok  ] daemon alive\n[ok  ] active browser connections — 1",
      }),
      codexProbe: () => ({ status: 1, stderr: "Not logged in" }),
    })).toThrow("runtime-preflight-failure:codex-auth-not-ready");
  });

  it("keeps a ready host rejection as a scored system failure", () => {
    const plan = calibrationPlan("/tmp/provider-neutral-host-policy");
    plan.shared_host_policy = { require_browser_attempt: true };
    expect(hostPolicyAdmissionStopReason(plan, {
      proof_trace: { analyzable: true },
      host_policy: {
        installation: { ready: true },
        observed: { available: true, state_files: 1, valid_state_files: 1 },
      },
      host_policy_gate: { pass: false, reasons: ["installed-policy-delivery-incomplete"] },
    })).toBeNull();
    expect(hostPolicyAdmissionStopReason(plan, {
      proof_trace: { analyzable: false },
      host_policy: {
        installation: { ready: true },
        observed: { available: true, state_files: 1, valid_state_files: 1 },
      },
      host_policy_gate: { pass: false, reasons: ["proof-trace-not-analyzable"] },
    })).toBe("installed-host-policy-gate-failed");
    expect(hostPolicyAdmissionStopReason(plan, {
      host_policy_gate: { pass: true },
    })).toBeNull();
    expect(hostPolicyAdmissionStopReason(calibrationPlan("/tmp/no-policy"), {
      host_policy_gate: null,
    })).toBeNull();
  });
  it("maps each runtime to only its native runner and effort flag", () => {
    const claude = runnerSpecForCell(calibrationPlan("/tmp/x").cells[0], "/tmp/claude");
    const codex = runnerSpecForCell(calibrationPlan("/tmp/x").cells[1], "/tmp/codex");
    expect(claude.runner.endsWith("run-claude.mjs")).toBe(true);
    expect(claude.expected_agent).toBe("claude-code");
    expect(claude.args).toContain("--effort");
    expect(claude.args).not.toContain("--reasoning");
    expect(codex.runner.endsWith("run-codex.mjs")).toBe(true);
    expect(codex.expected_agent).toBe("codex-cli");
    expect(codex.args).toContain("--reasoning");
    expect(codex.args).not.toContain("--effort");
    expect(() => runnerSpecForCell({ runtime: "unknown" }, "/tmp/x")).toThrow("unsupported runtime");
  });

  it("fails closed on every frozen attribution boundary", () => {
    const cell = calibrationPlan("/tmp/x").cells[1];
    const manifest = { runtime_target: "codex" };
    const valid = {
      runtime: {
        runtime_target: "codex",
        agent: "codex-cli",
        model_requested: cell.model_id,
        model_reported: cell.model_id,
        model_evidence_mode: "provider-observed",
        effort_requested: cell.effort,
        auth_mode: null,
        provider_route: null,
      },
      process: { child_exit_code: 0, spawn_error: null },
      output: {
        usage_attribution: { available: true, evidence_mode: "provider-event" },
        usage_events: [{ usage: { input_tokens: 3, output_tokens: 1 } }],
        diagnostic_availability: { available: false, fields: [], reason: "unsupported" },
      },
    };
    expect(runtimeAttributionStopReason(cell, manifest, valid)).toBeNull();
    for (const [mutate, expected] of [
      [(m, r) => { m.runtime_target = "claude-code"; }, "prepared-runtime-mismatch"],
      [(m, r) => { r.runtime.runtime_target = "claude-code"; }, "executed-runtime-mismatch"],
      [(m, r) => { r.runtime.agent = "claude-code"; }, "runtime-agent-mismatch"],
      [(m, r) => { r.runtime.model_requested = "wrong"; }, "requested-model-mismatch"],
      [(m, r) => { r.runtime.model_reported = "wrong"; }, "reported-model-mismatch"],
      [(m, r) => { r.runtime.effort_requested = "low"; }, "requested-effort-mismatch"],
      [(m, r) => { delete r.runtime.model_evidence_mode; }, "incomplete-runtime-attribution"],
      [(m, r) => { r.output.usage_attribution.available = false; }, "incomplete-usage-attribution"],
      [(m, r) => { r.output.usage_events = [{ usage: { input_tokens: "bad" } }]; }, "incomplete-usage-attribution"],
    ]) {
      const nextManifest = structuredClone(manifest);
      const nextRun = structuredClone(valid);
      mutate(nextManifest, nextRun);
      expect(runtimeAttributionStopReason(cell, nextManifest, nextRun)).toBe(expected);
    }
  });

  it("executes a fake Claude/Codex matrix and preserves exact provenance", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-neutral-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(calibrationPlan(root));
    const waits = [];
    const state = executePreparedMatrix(root, {
      waitFn: (milliseconds) => waits.push(milliseconds),
    });
    expect(state.status).toBe("complete");
    expect(waits).toEqual([]);

    const claudeArgs = JSON.parse(readFileSync(join(root, "fake-claude", ".benchmark", "fake-claude-invocation.json")));
    const codexArgs = JSON.parse(readFileSync(join(root, "fake-codex", ".benchmark", "fake-codex-invocation.json")));
    expect(claudeArgs).toContain("--effort");
    expect(claudeArgs).not.toContain("--reasoning");
    expect(codexArgs.some((value) => String(value).includes("model_reasoning_effort"))).toBe(true);

    const claudeRecord = JSON.parse(readFileSync(join(root, "fake-claude", ".benchmark", "run-record.json")));
    const codexRecord = JSON.parse(readFileSync(join(root, "fake-codex", ".benchmark", "run-record.json")));
    const codexProofTrace = JSON.parse(readFileSync(join(root, "fake-codex", ".benchmark", "proof-trace.json")));
    expect(claudeRecord).toMatchObject({
      suite_version: "ui-resolve-v0.1",
      model_id: "claude-fake-5",
      attribution: { runtime: {
        runtime_target: "claude-code",
        model_requested: "claude-fake-5",
        model_reported: "claude-fake-5",
        effort_requested: "high",
      } },
    });
    expect(codexRecord).toMatchObject({
      suite_version: "ui-resolve-v0.1",
      model_id: "gpt-fake-grok-4-5",
      runtime_diagnostics: {
        diagnostic_availability: { available: false },
        tool_error_count: null,
        sandbox_error_count: null,
        proof_trace: {
          runtime: null,
          analyzable: false,
          compliance_pass: false,
        },
      },
      attribution: { runtime: {
        runtime_target: "codex",
        model_requested: "gpt-fake-grok-4-5",
        model_reported: "gpt-fake-grok-4-5",
        effort_requested: "xhigh",
      } },
    });
    expect(codexProofTrace).toEqual(codexRecord.runtime_diagnostics.proof_trace);
    expect(readFileSync(join(root, "fake-claude", ".benchmark", "events.jsonl"), "utf8"))
      .not.toBe(readFileSync(join(root, "fake-codex", ".benchmark", "events.jsonl"), "utf8"));
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(1);
  });

  it("scores and checkpoints a preregistered timeout without replaying its provider", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-valid-timeout-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp, { slowClaude: true });
    const plan = calibrationPlan(root);
    plan.control_contract = { timeout_policy: "count-as-valid-failure" };
    plan.cells[0].timeout_seconds = 1;
    prepareRunMatrix(plan);
    installCountingNodeWrapper(temp);
    const first = join(root, "fake-claude");

    const checkpoint = executePreparedMatrix(root, { maxNewCells: 1 });
    expect(checkpoint.status).toBe("checkpointed");
    expect(checkpoint.completed_cells).toBe(1);
    expect(checkpoint.cells[0]).toMatchObject({
      id: "fake-claude",
      status: "complete",
      validity: "valid",
      run_status: "timed_out",
      ui_resolved: false,
      tokens: null,
    });
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(evaluatorInvocationCount(root, "fake-claude")).toBe(1);
    expect(exporterInvocationCount(root, "fake-claude")).toBe(1);

    const complete = executePreparedMatrix(root, { maxNewCells: 1 });
    expect(complete.status).toBe("complete");
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(1);
    const timeoutRecord = JSON.parse(readFileSync(
      join(first, ".benchmark", "run-record.json"),
      "utf8",
    ));
    expect(timeoutRecord).toMatchObject({
      run_status: "timed_out",
      validity: "valid",
      ui_resolved: false,
      tokens: null,
    });
  });

  it("reports a preregistered proof gate verdict after completing every cell", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-proof-gate-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    const current = calibrationPlan(root);
    current.proof_execution_gates = {
      system_ids: ["fake-codex"],
      enforcement: "promotion-report",
      require_analyzable: true,
      max_browser_recovery_count: 0,
      max_duplicate_static_closure_count: 0,
      max_verification_after_ready_count: 0,
    };
    prepareRunMatrix(current);
    const state = executePreparedMatrix(root);
    expect(state.status).toBe("complete");
    expect(state.proof_execution_gate).toEqual({
      enforcement: "promotion-report",
      applicable_cells: 1,
      passed_cells: 0,
      failed_cell_ids: ["fake-codex"],
      pass: false,
    });
    expect(state.cells.find((cell) => cell.id === "fake-codex").proof_execution_gate)
      .toMatchObject({ pass: false, reasons: ["proof-trace-not-analyzable"] });
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(1);
  });

  it("checkpoints one new cell, resumes once, and never replays a completed matrix", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-checkpoint-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    installCountingNodeWrapper(temp);
    prepareRunMatrix(pacedCalibrationPlan(root));

    const firstClock = injectedClock();
    const first = executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: firstClock.waitFn,
      nowFn: firstClock.nowFn,
      monotonicNowFn: firstClock.monotonicNowFn,
    });
    expect(first.status).toBe("checkpointed");
    expect(first.completed_cells).toBe(1);
    expect(first.current_cell).toBeNull();
    expect(firstClock.waits).toEqual([]);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);
    expect(evaluatorInvocationCount(root, "fake-claude")).toBe(1);
    expect(exporterInvocationCount(root, "fake-claude")).toBe(1);
    expect(first.invocation_history).toHaveLength(1);
    expect(first.invocation_history[0]).toMatchObject({
      invocation: 1,
      status: "checkpointed",
      completed_cells_before: 0,
      completed_cells_after: 1,
      new_cells_completed: 1,
    });
    expect(first.checkpoint_history).toEqual([expect.objectContaining({
      checkpoint: 1,
      invocation: 1,
      status: "checkpointed",
      after_cell_id: "fake-claude",
      completed_cells: 1,
    })]);
    const firstArtifacts = artifactSnapshot(root, "fake-claude");
    const firstArtifactMtimes = artifactMtimeSnapshot(root, "fake-claude");

    expect(() => executePreparedMatrix(root, {
      waitFn: () => {
        throw new Error("omitted bound attempted to wait");
      },
    })).toThrow(/requires maxNewCells/i);
    expect(() => executePreparedMatrix(root, {
      maxNewCells: 2,
      waitFn: () => {
        throw new Error("changed bound attempted to wait");
      },
    })).toThrow(/immutable/i);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);
    expect(evaluatorInvocationCount(root, "fake-claude")).toBe(1);
    expect(exporterInvocationCount(root, "fake-claude")).toBe(1);
    expect(artifactSnapshot(root, "fake-claude")).toEqual(firstArtifacts);
    expect(artifactMtimeSnapshot(root, "fake-claude")).toEqual(firstArtifactMtimes);

    const secondClock = injectedClock({
      wallStart: "2026-07-28T00:01:00.000Z",
      monotonicStart: 200_000,
    });
    const second = executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: secondClock.waitFn,
      nowFn: secondClock.nowFn,
      monotonicNowFn: secondClock.monotonicNowFn,
    });
    expect(second.status).toBe("complete");
    expect(second.completed_cells).toBe(2);
    expect(second.current_cell).toBeNull();
    expect(secondClock.waits).toEqual([120000]);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(1);
    expect(evaluatorInvocationCount(root, "fake-claude")).toBe(1);
    expect(exporterInvocationCount(root, "fake-claude")).toBe(1);
    expect(evaluatorInvocationCount(root, "fake-codex")).toBe(1);
    expect(exporterInvocationCount(root, "fake-codex")).toBe(1);
    expect(artifactSnapshot(root, "fake-claude")).toEqual(firstArtifacts);
    expect(artifactMtimeSnapshot(root, "fake-claude")).toEqual(firstArtifactMtimes);
    expect(second.invocation_history).toHaveLength(2);
    expect(second.invocation_history.map((entry) => entry.status)).toEqual([
      "checkpointed",
      "complete",
    ]);
    expect(second.checkpoint_history).toEqual(first.checkpoint_history);
    expect(second.pacing_history).toHaveLength(1);
    expect(second.pacing_history[0]).toMatchObject({
      after_cell_id: "fake-claude",
      before_cell_id: "fake-codex",
      status: "complete",
      wall_elapsed_ms: 120000,
      monotonic_elapsed_ms: 120000,
      clock_disagreement_ms: 0,
    });

    expect(() => executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: () => {
        throw new Error("complete matrix attempted to wait");
      },
    })).toThrow(/complete/i);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(1);
    expect(evaluatorInvocationCount(root, "fake-claude")).toBe(1);
    expect(exporterInvocationCount(root, "fake-claude")).toBe(1);
    expect(artifactSnapshot(root, "fake-claude")).toEqual(firstArtifacts);
    expect(artifactMtimeSnapshot(root, "fake-claude")).toEqual(firstArtifactMtimes);
  });

  it("retains two checkpoints and executes each three-cell cooldown boundary once", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-three-cell-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(threeCellPacedPlan(root));

    const firstClock = injectedClock();
    const first = executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: firstClock.waitFn,
      nowFn: firstClock.nowFn,
      monotonicNowFn: firstClock.monotonicNowFn,
    });
    expect(first.status).toBe("checkpointed");
    expect(firstClock.waits).toEqual([]);
    const cell1Artifacts = durableArtifactSnapshot(root, "fake-claude");

    const secondClock = injectedClock({
      wallStart: "2026-07-28T00:01:00.000Z",
      monotonicStart: 200_000,
    });
    const second = executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: secondClock.waitFn,
      nowFn: secondClock.nowFn,
      monotonicNowFn: secondClock.monotonicNowFn,
    });
    expect(second.status).toBe("checkpointed");
    expect(secondClock.waits).toEqual([120000]);
    expect(durableArtifactSnapshot(root, "fake-claude")).toEqual(cell1Artifacts);
    const cell2Artifacts = durableArtifactSnapshot(root, "fake-codex");

    const thirdClock = injectedClock({
      wallStart: "2026-07-28T00:04:00.000Z",
      monotonicStart: 400_000,
    });
    const third = executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: thirdClock.waitFn,
      nowFn: thirdClock.nowFn,
      monotonicNowFn: thirdClock.monotonicNowFn,
    });
    expect(third.status).toBe("complete");
    expect(third.completed_cells).toBe(3);
    expect(thirdClock.waits).toEqual([120000]);
    expect(durableArtifactSnapshot(root, "fake-claude")).toEqual(cell1Artifacts);
    expect(durableArtifactSnapshot(root, "fake-codex")).toEqual(cell2Artifacts);
    expect(third.invocation_history.map((entry) => entry.status)).toEqual([
      "checkpointed",
      "checkpointed",
      "complete",
    ]);
    for (let index = 1; index < third.invocation_history.length; index += 1) {
      expect(Date.parse(third.invocation_history[index].started_at))
        .toBeGreaterThanOrEqual(Date.parse(third.invocation_history[index - 1].finished_at));
    }
    expect(third.checkpoint_history.map((entry) => entry.after_cell_id)).toEqual([
      "fake-claude",
      "fake-codex",
    ]);
    expect(third.pacing_history.map((entry) => [
      entry.after_cell_id,
      entry.before_cell_id,
    ])).toEqual([
      ["fake-claude", "fake-codex"],
      ["fake-codex", "fake-claude-2"],
    ]);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(1);
    expect(invocationCount(root, "fake-claude-2", "claude")).toBe(1);
  });

  it("rejects backward invocation wall-clock history before the third provider", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-backward-history-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(threeCellPacedPlan(root));
    executePreparedMatrix(root, {
      maxNewCells: 1,
      ...injectedClock(),
    });
    executePreparedMatrix(root, {
      maxNewCells: 1,
      ...injectedClock({
        wallStart: "2026-07-28T00:01:00.000Z",
        monotonicStart: 200_000,
      }),
    });
    mutateExecutionState(root, (state) => {
      state.invocation_history[1].started_at = "2026-07-27T23:59:59.000Z";
    });
    const clock = injectedClock({
      wallStart: "2026-07-28T00:04:00.000Z",
      monotonicStart: 400_000,
    });
    expect(() => executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: clock.waitFn,
      nowFn: clock.nowFn,
      monotonicNowFn: clock.monotonicNowFn,
    })).toThrow(/invocation history is invalid/i);
    expect(clock.waits).toEqual([]);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(1);
    expect(invocationCount(root, "fake-claude-2", "claude")).toBe(0);
  });

  it("fails closed on a pre-existing root execution lease before any provider or evaluator", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-lock-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(pacedCalibrationPlan(root));
    const lockPath = join(root, ".matrix-execution.lock");
    const lock = JSON.stringify({
      token: "other-controller",
      pid: 4242,
      acquired_at: "2026-07-28T00:00:00.000Z",
    });
    writeFileSync(lockPath, lock, "utf8");
    const clock = injectedClock();

    expect(() => executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: clock.waitFn,
      nowFn: clock.nowFn,
      monotonicNowFn: clock.monotonicNowFn,
    })).toThrow(/matrix invocation lease exists|contention|stale/i);
    expect(clock.waits).toEqual([]);
    expect(readFileSync(lockPath, "utf8")).toBe(lock);
    expect(numericFile(join(temp, "fake-evaluator-preflight-count.txt"))).toBe(0);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(0);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);
  });

  it("rejects a reentrant controller while the outer invocation holds the execution lease", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-contention-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(pacedCalibrationPlan(root));
    let contentionError;
    const outer = executePreparedMatrix(root, {
      waitFn: () => {
        try {
          executePreparedMatrix(root, {
            waitFn: () => {
              throw new Error("contending controller reached cooldown");
            },
          });
        } catch (error) {
          contentionError = error;
        }
      },
    });

    expect(contentionError).toBeInstanceOf(Error);
    expect(contentionError.message).toMatch(/matrix invocation lease exists|contention|stale/i);
    expect(outer.status).toBe("complete");
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(1);
    expect(numericFile(join(temp, "fake-evaluator-preflight-count.txt"))).toBe(1);
  });

  it.each([
    [
      "completed product tree",
      (_temp, root) => writeFileSync(
        join(root, "fake-claude", "changed-after-checkpoint.txt"),
        "drift\n",
        "utf8",
      ),
      /completed cell product tree drifted|product tree drifted/i,
    ],
    [
      "completed score artifact",
      (_temp, root) => {
        const path = join(root, "fake-claude", ".benchmark", "score.json");
        writeFileSync(path, `${readFileSync(path, "utf8")}\n`, "utf8");
      },
      /completed cell (?:artifact|benchmark tree) drifted|artifact drifted/i,
    ],
    [
      "completed benchmark artifact tree",
      (_temp, root) => writeFileSync(
        join(root, "fake-claude", ".benchmark", "unexpected-after-checkpoint.txt"),
        "drift\n",
        "utf8",
      ),
      /completed cell benchmark tree drifted/i,
    ],
    [
      "objective score summary",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.cells[0].objective_score += 1;
      }),
      /completed cell summary drifted/i,
    ],
    [
      "token summary",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.cells[0].tokens += 1;
      }),
      /completed cell summary drifted/i,
    ],
    [
      "invocation history",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.invocation_history[0].new_cells_completed = 2;
      }),
      /invocation history is invalid/i,
    ],
    [
      "invocation bound history",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.invocation_history[0].max_new_cells = 2;
      }),
      /invocation history is invalid/i,
    ],
    [
      "checkpoint history",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.checkpoint_history[0].checkpoint = 2;
      }),
      /checkpoint history chain is invalid/i,
    ],
    [
      "evaluator preflight history",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.evaluator_preflight_history[0].invocation = 99;
      }),
      /preflight history is invalid/i,
    ],
    [
      "evaluator preflight interval",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.evaluator_preflight_history[0].started_at = "2026-07-27T23:59:59.000Z";
      }),
      /preflight history is invalid/i,
    ],
    [
      "pacing history",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.pacing_history.push({
          status: "complete",
          after_cell_id: "fake-claude",
          before_cell_id: "fake-codex",
        });
      }),
      /pacing prefix is invalid/i,
    ],
    [
      "null pacing history",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.pacing_history = null;
      }),
      /evidence history is incomplete|pacing prefix is invalid/i,
    ],
    [
      "prepared attestation key set",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.prepared_cell_attestations.bogus = state.prepared_cell_attestations["fake-codex"];
        delete state.prepared_cell_attestations["fake-codex"];
      }),
      /preparation attestations are incomplete/i,
    ],
    [
      "null prepared attestation",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.prepared_cell_attestations["fake-codex"] = null;
      }),
      /preparation attestations are incomplete/i,
    ],
    [
      "changed prepared attestation hash",
      (_temp, root) => mutateExecutionState(root, (state) => {
        state.prepared_cell_attestations["fake-codex"].benchmark_tree_sha256 = "0".repeat(64);
      }),
      /preparation drifted/i,
    ],
  ])("rejects changed checkpoint %s before continuation work", (_label, mutate, expected) => {
    const { temp, root } = checkpointFixture();
    mutate(temp, root);
    expectGuardedContinuationFailure(temp, root, expected);
  });

  it.each([
    ["events.jsonl", "{\"type\":\"partial\"}\n"],
    ["stderr.log", "partial stderr\n"],
    ["final-message.txt", "partial final response\n"],
  ])("rejects remaining-suffix %s dirtiness before cooldown or provider", (name, content) => {
    const { temp, root } = checkpointFixture();
    const dirtyPath = join(root, "fake-codex", ".benchmark", name);
    writeFileSync(dirtyPath, content, "utf8");
    expectGuardedContinuationFailure(
      temp,
      root,
      /unresolved prior execution artifact|untouched checkpoint cell has execution artifacts/i,
    );
    expect(readFileSync(dirtyPath, "utf8")).toBe(content);
  });

  it.each([
    [
      "product tree drift",
      (root) => writeFileSync(
        join(root, "fake-codex", "changed-before-continuation.txt"),
        "drift\n",
        "utf8",
      ),
      /unstarted workspace product tree drifted/i,
    ],
    [
      "unexpected benchmark artifact",
      (root) => writeFileSync(
        join(root, "fake-codex", ".benchmark", "unexpected-before-continuation.txt"),
        "drift\n",
        "utf8",
      ),
      /preparation drifted/i,
    ],
  ])("rejects remaining-suffix %s before cooldown or provider", (_label, mutate, expected) => {
    const { temp, root } = checkpointFixture();
    mutate(root);
    expectGuardedContinuationFailure(temp, root, expected);
  });

  it("waits exactly once between two cells and retains pacing evidence", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-pacing-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(pacedCalibrationPlan(root));
    const clock = injectedClock();
    const state = executePreparedMatrix(root, {
      waitFn: clock.waitFn,
      nowFn: clock.nowFn,
      monotonicNowFn: clock.monotonicNowFn,
    });
    expect(clock.waits).toEqual([120000]);
    expect(state.pacing).toBeNull();
    expect(state.pacing_history).toEqual([{
      policy: "fixed-inter-cell",
      after_cell_id: "fake-claude",
      before_cell_id: "fake-codex",
      delay_seconds: 120,
      counts_toward_cell_wall_time: false,
      status: "complete",
      started_at: "2026-07-28T00:00:00.000Z",
      finished_at: "2026-07-28T00:02:00.000Z",
    }]);
  });

  it("preserves the legacy unbounded raw waitFn throw behavior", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-legacy-wait-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(pacedCalibrationPlan(root));
    const rawError = new Error("legacy-unbounded-wait-error");
    let caught;
    try {
      executePreparedMatrix(root, {
        waitFn: () => {
          throw rawError;
        },
      });
    } catch (error) {
      caught = error;
    }
    expect(caught).toBe(rawError);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);
    const state = JSON.parse(readFileSync(join(root, "execution-state.json"), "utf8"));
    expect(state.status).toBe("running");
    expect(state.stop_reason).toBeUndefined();
    expect(state.pacing).toMatchObject({ status: "waiting" });
  });

  it.each([
    ["early return", 119999, 119999],
    ["the retained 659462ms overshoot", 659462, 659462],
    ["greater-than-5s clock disagreement", 120000, 126000],
  ])("freezes after %s before invoking the next provider", (_label, wallAdvanceMs, monotonicAdvanceMs) => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-pacing-reject-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(pacedCalibrationPlan(root));
    executePreparedMatrix(root, {
      maxNewCells: 1,
      ...injectedClock(),
    });

    const clock = injectedClock({ wallAdvanceMs, monotonicAdvanceMs });
    expect(() => executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: clock.waitFn,
      nowFn: clock.nowFn,
      monotonicNowFn: clock.monotonicNowFn,
    })).toThrow(/pacing/i);
    expect(clock.waits).toEqual([120000]);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);
    const state = JSON.parse(readFileSync(join(root, "execution-state.json"), "utf8"));
    expect(state.status).toBe("stopped-preregistered");
    expect(state.stop_reason).toMatch(/pacing/i);
    expect(state.pacing_history.at(-1)).toMatchObject({
      status: "failed",
      wall_elapsed_ms: wallAdvanceMs,
      monotonic_elapsed_ms: monotonicAdvanceMs,
      clock_disagreement_ms: Math.abs(wallAdvanceMs - monotonicAdvanceMs),
    });
  });

  it("uses monotonic duration when the wall clock steps back inside the disagreement bound", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-pacing-wall-step-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(pacedCalibrationPlan(root));
    executePreparedMatrix(root, {
      maxNewCells: 1,
      ...injectedClock(),
    });

    const clock = injectedClock({
      wallAdvanceMs: 119998,
      monotonicAdvanceMs: 120002,
    });
    const state = executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: clock.waitFn,
      nowFn: clock.nowFn,
      monotonicNowFn: clock.monotonicNowFn,
    });
    expect(state.status).toBe("complete");
    expect(clock.waits).toEqual([120000]);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(1);
    expect(state.pacing_history.at(-1)).toMatchObject({
      status: "complete",
      wall_elapsed_ms: 119998,
      monotonic_elapsed_ms: 120002,
      clock_disagreement_ms: 4,
    });
  });

  it("honors a root STOP written during cooldown before the next provider", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-stop-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(pacedCalibrationPlan(root));
    executePreparedMatrix(root, {
      maxNewCells: 1,
      ...injectedClock(),
    });

    const clock = injectedClock({
      afterWait: () => writeFileSync(join(root, "STOP"), "operator requested stop\n", "utf8"),
    });
    expect(() => executePreparedMatrix(root, {
      maxNewCells: 1,
      waitFn: clock.waitFn,
      nowFn: clock.nowFn,
      monotonicNowFn: clock.monotonicNowFn,
    })).toThrow(/cancel|stop/i);
    expect(clock.waits).toEqual([120000]);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);
    const state = JSON.parse(readFileSync(join(root, "execution-state.json"), "utf8"));
    expect(state.status).toBe("stopped-preregistered");
    expect(state.stop_reason).toMatch(/cancel|stop/i);
  });

  it("rejects invalid maxNewCells values before invoking a provider", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-bound-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(calibrationPlan(root));
    for (const maxNewCells of [
      0,
      -1,
      1.5,
      "1",
      null,
      Infinity,
      Number.MAX_SAFE_INTEGER + 1,
    ]) {
      expect(() => executePreparedMatrix(root, { maxNewCells })).toThrow(/maxNewCells|positive integer/i);
    }
    expect(invocationCount(root, "fake-claude", "claude")).toBe(0);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);
  });

  it("validates CLI bounds and preserves the bound across CLI continuation", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-cli-bound-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    prepareRunMatrix(calibrationPlan(root));

    for (const args of [
      ["--max-new-cells"],
      ["--max-new-cells", "0"],
      ["--max-new-cells", "1.5"],
      ["--max-new-cells", "9007199254740992"],
    ]) {
      const invalid = runMatrixCli(root, args);
      expect(invalid.status).not.toBe(0);
      expect(invalid.stderr).toMatch(/max-new-cells.*positive integer/i);
    }
    expect(invocationCount(root, "fake-claude", "claude")).toBe(0);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);

    const first = runMatrixCli(root, ["--max-new-cells", "1"]);
    expect(first.status, first.stderr).toBe(0);
    expect(JSON.parse(readFileSync(join(root, "execution-state.json"), "utf8")).status)
      .toBe("checkpointed");
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);

    const omitted = runMatrixCli(root);
    expect(omitted.status).not.toBe(0);
    expect(omitted.stderr).toMatch(/requires maxNewCells/i);
    const changed = runMatrixCli(root, ["--max-new-cells", "2"]);
    expect(changed.status).not.toBe(0);
    expect(changed.stderr).toMatch(/maxNewCells is immutable/i);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);

    const second = runMatrixCli(root, ["--max-new-cells", "1"]);
    expect(second.status, second.stderr).toBe(0);
    const state = JSON.parse(readFileSync(join(root, "execution-state.json"), "utf8"));
    expect(state.status).toBe("complete");
    expect(state.completed_cells).toBe(2);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(1);
  });

  it("rejects an incomplete running checkpoint before invoking a provider", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-running-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    const plan = calibrationPlan(root);
    prepareRunMatrix(plan);
    writeFileSync(join(root, "execution-state.json"), JSON.stringify({
      schema_version: plan.schema_version,
      experiment_id: plan.experiment_id,
      suite_version: plan.suite_version,
      product_version: plan.product_version,
      execution_purpose: plan.execution_purpose,
      execution_contract: {
        mode: "checkpoint-bounded",
        max_new_cells: 1,
      },
      status: "running",
      scheduled_cells: plan.cells.length,
      completed_cells: 0,
      current_cell: "fake-claude",
      cells: [{
        id: "fake-claude",
        order: 1,
        status: "running",
        workspace: join(root, "fake-claude"),
      }],
    }), "utf8");
    expect(() => executePreparedMatrix(root, {
      maxNewCells: 1,
      ...injectedClock(),
    })).toThrow(/running|incomplete/i);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(0);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);
  });

  it("fails evaluator preflight before invoking any provider runtime", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-preflight-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp);
    process.env.OMD_BENCH_CALIBRATION_EVALUATOR = executable(join(temp, "missing-dependency-evaluator.mjs"), `
if (process.argv.includes("--preflight")) {
  console.error("missing axe-core");
  process.exit(1);
}
`);
    prepareRunMatrix(calibrationPlan(root));
    expect(() => executePreparedMatrix(root)).toThrow("evaluator-preflight-failure:missing axe-core");
    expect(readFileSync(join(root, "execution-state.json"), "utf8")).toContain('"status": "not-started"');
    expect(() => readFileSync(join(root, "fake-claude", ".benchmark", "fake-claude-invocation.json")))
      .toThrow();
    expect(() => readFileSync(join(root, "fake-codex", ".benchmark", "fake-codex-invocation.json")))
      .toThrow();
  });

  it("freezes later cells as not-started after the first fake runtime failure", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-freeze-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp, { emptyClaude: true });
    prepareRunMatrix(calibrationPlan(root));
    expect(() => executePreparedMatrix(root, { maxNewCells: 1 })).toThrow("missing-final-response");
    const state = JSON.parse(readFileSync(join(root, "execution-state.json"), "utf8"));
    expect(state.status).toBe("stopped-preregistered");
    expect(state.cells[0]).toMatchObject({ id: "fake-claude", status: "stopped" });
    expect(state.cells[1]).toMatchObject({ id: "fake-codex", status: "not-started" });
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(() => executePreparedMatrix(root, { maxNewCells: 1 }))
      .toThrow(/frozen|stopped|missing-final-response/i);
    expect(invocationCount(root, "fake-claude", "claude")).toBe(1);
    expect(invocationCount(root, "fake-codex", "codex")).toBe(0);
  });
});

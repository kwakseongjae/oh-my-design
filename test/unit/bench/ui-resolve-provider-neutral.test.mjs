import {
  chmodSync,
  mkdtempSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { prepareRunMatrix } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";
import { executePreparedMatrix } from "../../../benchmarks/ui-resolve-bench/scripts/run-prepared-matrix.mjs";
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

afterEach(() => {
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

function installFakeRuntimes(root, { emptyClaude = false } = {}) {
  const claude = executable(join(root, "fake-claude.mjs"), `
import fs from "node:fs";
import path from "node:path";
const argv = process.argv.slice(2);
fs.writeFileSync(path.join(process.cwd(), ".benchmark", "fake-claude-invocation.json"), JSON.stringify(argv));
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
fs.writeFileSync(path.join(process.cwd(), ".benchmark", "fake-codex-invocation.json"), JSON.stringify(argv));
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
const workspace = argv[argv.indexOf("--workspace") + 1];
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
    const state = executePreparedMatrix(root);
    expect(state.status).toBe("complete");

    const claudeArgs = JSON.parse(readFileSync(join(root, "fake-claude", ".benchmark", "fake-claude-invocation.json")));
    const codexArgs = JSON.parse(readFileSync(join(root, "fake-codex", ".benchmark", "fake-codex-invocation.json")));
    expect(claudeArgs).toContain("--effort");
    expect(claudeArgs).not.toContain("--reasoning");
    expect(codexArgs.some((value) => String(value).includes("model_reasoning_effort"))).toBe(true);

    const claudeRecord = JSON.parse(readFileSync(join(root, "fake-claude", ".benchmark", "run-record.json")));
    const codexRecord = JSON.parse(readFileSync(join(root, "fake-codex", ".benchmark", "run-record.json")));
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
      },
      attribution: { runtime: {
        runtime_target: "codex",
        model_requested: "gpt-fake-grok-4-5",
        model_reported: "gpt-fake-grok-4-5",
        effort_requested: "xhigh",
      } },
    });
    expect(readFileSync(join(root, "fake-claude", ".benchmark", "events.jsonl"), "utf8"))
      .not.toBe(readFileSync(join(root, "fake-codex", ".benchmark", "events.jsonl"), "utf8"));
  });

  it("freezes later cells as not-started after the first fake runtime failure", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-provider-freeze-"));
    const root = join(temp, "matrix");
    installFakeRuntimes(temp, { emptyClaude: true });
    prepareRunMatrix(calibrationPlan(root));
    expect(() => executePreparedMatrix(root)).toThrow("missing-final-response");
    const state = JSON.parse(readFileSync(join(root, "execution-state.json"), "utf8"));
    expect(state.status).toBe("stopped-preregistered");
    expect(state.cells[0]).toMatchObject({ id: "fake-claude", status: "stopped" });
    expect(state.cells[1]).toMatchObject({ id: "fake-codex", status: "not-started" });
  });
});

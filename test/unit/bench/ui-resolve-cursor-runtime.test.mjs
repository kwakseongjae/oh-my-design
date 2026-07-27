import {
  chmodSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { prepareRunMatrix } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";
import {
  executePreparedMatrix,
  preregisteredStopReason,
} from "../../../benchmarks/ui-resolve-bench/scripts/run-prepared-matrix.mjs";
import {
  CURSOR_LIVE_MODEL_ALLOWLIST,
  CURSOR_RUNTIME_DISPLAY_LABELS,
  cursorModelEvidenceMode,
  isCursorLiveModelAllowed,
  runnerSpecForCell,
} from "../../../benchmarks/ui-resolve-bench/scripts/runtime-contract.mjs";

const ORIGINAL_ENV = {
  cursor: process.env.OMD_CURSOR_AGENT_BIN,
  fake: process.env.OMD_BENCH_FAKE_RUNTIME,
  evaluator: process.env.OMD_BENCH_CALIBRATION_EVALUATOR,
};

afterEach(() => {
  for (const [key, value] of Object.entries({
    OMD_CURSOR_AGENT_BIN: ORIGINAL_ENV.cursor,
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

function cell(id = "fake-cursor", model = "cursor-fake-4-5") {
  return {
    id,
    task_id: "pricing-conversion-v0.1",
    variant_id: "raw-design-md",
    system_id: id,
    runtime: "cursor",
    model_id: model,
    effort: "high",
    timeout_seconds: 20,
    trial_index: 1,
    allow_dirty_source: true,
  };
}

function plan(root, cells = [cell()]) {
  return {
    schema_version: "0.2",
    suite_version: "ui-resolve-v0.1",
    product_version: "1.9.40",
    execution_purpose: "runtime-contract-calibration",
    experiment_id: "cursor-fake-calibration",
    output_root: root,
    family: "model",
    cells,
  };
}

function installFakeCursor(root, { reportedModel = null } = {}) {
  const cursor = executable(join(root, "fake-cursor-agent.mjs"), `
import fs from "node:fs";
import path from "node:path";
const argv = process.argv.slice(2);
if (argv.includes("--version")) {
  console.log("fake-cursor-agent 1.9.40");
  process.exit(0);
}
fs.writeFileSync(path.join(process.cwd(), ".benchmark", "fake-cursor-invocation.json"), JSON.stringify(argv));
const requested = argv[argv.indexOf("--model") + 1];
const model = ${reportedModel ? JSON.stringify(reportedModel) : "requested"};
console.log(JSON.stringify({type:"system",subtype:"init",model}));
console.log(JSON.stringify({type:"usage",model,usage:{input_tokens:17,cached_input_tokens:5,output_tokens:6}}));
console.log(JSON.stringify({type:"result",model,result:"fake cursor complete"}));
`);
  const evaluator = executable(join(root, "fake-evaluator.mjs"), `
import fs from "node:fs";
import path from "node:path";
const argv = process.argv.slice(2);
if (argv.includes("--preflight")) {
  console.log(JSON.stringify({event:"fake-evaluator-preflight-complete"}));
  process.exit(0);
}
const workspace = argv[argv.indexOf("--workspace") + 1];
fs.writeFileSync(path.join(workspace, ".benchmark", "score.json"), JSON.stringify({
  status:{automated_gate_pass:false},
  points:{deterministic_total:0,deterministic_max:85},
  critical_gates:{evidence_honesty:true}
}));
`);
  process.env.OMD_CURSOR_AGENT_BIN = cursor;
  process.env.OMD_BENCH_FAKE_RUNTIME = "1";
  process.env.OMD_BENCH_CALIBRATION_EVALUATOR = evaluator;
}

describe("Cursor Agent fake runtime contract", () => {
  it("selects only the Cursor adapter and does not expose a provider effort flag", () => {
    const spec = runnerSpecForCell(cell(), "/tmp/fake-cursor");
    expect(spec.runner.endsWith("run-cursor.mjs")).toBe(true);
    expect(spec.expected_agent).toBe("cursor-agent");
    expect(spec.provider_effort_flag).toBeNull();
    expect(spec.args).toContain("--effort");
    expect(spec.args).not.toContain("--reasoning");
    expect(CURSOR_LIVE_MODEL_ALLOWLIST).toEqual(["cursor-grok-4.5-high", "composer-2.5"]);
    expect(isCursorLiveModelAllowed("gpt-5.3-codex-xhigh")).toBe(false);
    expect(isCursorLiveModelAllowed("auto")).toBe(false);
    expect(CURSOR_RUNTIME_DISPLAY_LABELS["cursor-grok-4.5-high"]).toBe("Cursor Grok 4.5 High");
    expect(cursorModelEvidenceMode("composer-2.5", "Composer 2.5"))
      .toBe("runtime-reported-display-name");
  });

  it("uses the provider-neutral attribution contract for schema 0.3", () => {
    const liveCell = cell("cursor-schema-03", "cursor-grok-4.5-high");
    const liveManifest = { runtime_target: "cursor", variant: { kind: "local-skill" } };
    const liveRun = {
      runtime: {
        runtime_target: "cursor",
        agent: "cursor-agent",
        model_requested: "cursor-grok-4.5-high",
        model_reported: "Cursor Grok 4.5 High",
        model_evidence_mode: "runtime-reported-display-name",
        effort_requested: "high",
        auth_mode: "cursor-account",
        provider_route: "cursor",
      },
      process: {
        exit_code: 0,
        child_exit_code: 0,
        timed_out: false,
        spawn_error: null,
      },
      output: {
        final_message_present: true,
        infrastructure_tool_error_count: null,
        sandbox_error_count: null,
        sandbox_cwd_error_count: null,
        usage_attribution: { available: true, evidence_mode: "provider-event" },
        usage_events: [{
          usage: { inputTokens: 100, cacheReadTokens: 20, outputTokens: 10 },
        }],
        diagnostic_availability: { available: false, fields: [], reason: "unsupported" },
      },
    };

    expect(preregisteredStopReason(
      liveCell,
      liveManifest,
      liveRun,
      { schemaVersion: "0.3" },
    )).toBeNull();
  });

  it("retains exact Cursor runtime, binary, model, and effort provenance", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-cursor-runtime-"));
    const root = join(temp, "matrix");
    installFakeCursor(temp);
    prepareRunMatrix(plan(root));
    const state = executePreparedMatrix(root);
    expect(state.status).toBe("complete");

    const invocation = JSON.parse(readFileSync(join(root, "fake-cursor", ".benchmark", "fake-cursor-invocation.json")));
    expect(invocation).toEqual(expect.arrayContaining([
      "-p",
      "--output-format", "stream-json",
      "--model", "cursor-fake-4-5",
      "--sandbox", "enabled",
      "--trust",
      "--workspace", realpathSync(join(root, "fake-cursor")),
    ]));
    expect(invocation).not.toContain("--effort");
    expect(invocation).not.toContain("--reasoning");

    const record = JSON.parse(readFileSync(join(root, "fake-cursor", ".benchmark", "run-record.json")));
    expect(record).toMatchObject({
      suite_version: "ui-resolve-v0.1",
      model_id: "cursor-fake-4-5",
      runtime_diagnostics: {
        diagnostic_availability: { available: false },
        tool_error_count: null,
      },
      attribution: { runtime: {
        runtime_target: "cursor",
        agent: "cursor-agent",
        agent_version: "fake-cursor-agent 1.9.40",
        model_requested: "cursor-fake-4-5",
        model_reported: "cursor-fake-4-5",
        model_evidence_mode: "provider-observed",
        effort_requested: "high",
        provider_effort_argument: null,
      } },
    });
    expect(record.attribution.runtime.binary_sha256).toMatch(/^[a-f0-9]{64}$/);
  });

  it("freezes a wrong reported model and retains the later Cursor cell as not-started", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-cursor-mismatch-"));
    const root = join(temp, "matrix");
    installFakeCursor(temp, { reportedModel: "cursor-wrong-model" });
    prepareRunMatrix(plan(root, [
      cell("cursor-first", "cursor-fake-4-5"),
      { ...cell("cursor-later", "composer-fake-2-5"), trial_index: 2 },
    ]));
    expect(() => executePreparedMatrix(root)).toThrow("reported-model-mismatch");
    const state = JSON.parse(readFileSync(join(root, "execution-state.json"), "utf8"));
    expect(state.cells[0]).toMatchObject({ id: "cursor-first", status: "stopped" });
    expect(state.cells[1]).toMatchObject({ id: "cursor-later", status: "not-started" });
  });
});

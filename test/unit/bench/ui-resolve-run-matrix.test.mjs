import { describe, expect, it } from "vitest";
import {
  preregisteredStopReason,
  runArgsForCell,
} from "../../../benchmarks/ui-resolve-bench/scripts/run-prepared-matrix.mjs";

const cell = {
  model_id: "claude-opus-4-8",
  effort: "xhigh",
  timeout_seconds: 900,
};
const manifest = {
  variant: { kind: "agent-harness" },
  agents: {
    required_model: "opus",
    installed: [{ id: "omd-ux-writer" }, { id: "omd-ux-engineer" }],
  },
};
const validRun = {
  process: { exit_code: 0, child_exit_code: 0, timed_out: false },
  runtime: { model: "claude-opus-4-8" },
  output: {
    final_message_present: true,
    model_usage: [{ model: "claude-opus-4-8" }],
    infrastructure_tool_error_count: 0,
    sandbox_error_count: 0,
    sandbox_cwd_error_count: 0,
    agent_tool_error_count: 0,
    requested_agent_ids: ["omd-ux-engineer", "omd-ux-writer"],
    agent_calls: [
      { agent_id: "omd-ux-writer", requested_model: "opus" },
      { agent_id: "omd-ux-engineer", requested_model: "opus" },
    ],
  },
};

describe("UI-Resolve prepared matrix execution", () => {
  it("accepts an exact, complete harness attribution", () => {
    expect(preregisteredStopReason(cell, manifest, validRun)).toBeNull();
  });

  it("stops on specialist model or cardinality mismatch", () => {
    const run = structuredClone(validRun);
    run.output.agent_calls[0].requested_model = "sonnet";
    expect(preregisteredStopReason(cell, manifest, run)).toBe("specialist-model-or-cardinality-mismatch");
  });

  it("keeps recoverable verifier failures outside the stop class", () => {
    const run = structuredClone(validRun);
    run.output.recoverable_tool_error_count = 3;
    expect(preregisteredStopReason(cell, manifest, run)).toBeNull();
  });

  it("stops on timeout, sandbox failure, or observed parent-model mismatch", () => {
    const timeout = structuredClone(validRun);
    timeout.process.timed_out = true;
    expect(preregisteredStopReason(cell, manifest, timeout)).toBe("timeout");

    const sandbox = structuredClone(validRun);
    sandbox.output.sandbox_error_count = 1;
    expect(preregisteredStopReason(cell, manifest, sandbox)).toBe("sandbox-error");

    const model = structuredClone(validRun);
    model.output.model_usage = [{ model: "claude-sonnet-4-6" }];
    expect(preregisteredStopReason(cell, manifest, model)).toBe("observed-model-mismatch");
  });

  it("maps the frozen cell budget to the Claude runner", () => {
    expect(runArgsForCell(cell, "/tmp/u197/pricing-t1-harness")).toEqual([
      "--workspace", "/tmp/u197/pricing-t1-harness",
      "--model", "claude-opus-4-8",
      "--effort", "xhigh",
      "--timeout-ms", "900000",
    ]);
  });
});


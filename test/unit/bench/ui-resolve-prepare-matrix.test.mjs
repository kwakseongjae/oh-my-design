import { describe, expect, it } from "vitest";
import {
  prepareArgsForCell,
  validateRunMatrixPlan,
} from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";

function plan(overrides = {}) {
  return {
    schema_version: "0.1",
    experiment_id: "harness-efficiency-1.9.7",
    output_root: "/tmp/u197",
    cells: [
      {
        id: "pricing-t1-portable",
        task_id: "pricing-conversion-v0.1",
        variant_id: "omd-portable",
        system_id: "omd-portable",
        runtime: "claude-code",
        model_id: "claude-opus-4-8",
        effort: "xhigh",
        timeout_seconds: 900,
        trial_index: 1,
      },
    ],
    ...overrides,
  };
}

describe("UI-Resolve run matrix preparation", () => {
  it("accepts a frozen, unique matrix plan", () => {
    expect(validateRunMatrixPlan(plan()).cells).toHaveLength(1);
  });

  it("rejects duplicate task/trial/system cells", () => {
    const value = plan();
    value.cells.push({ ...value.cells[0], id: "pricing-t1-portable-copy" });
    expect(() => validateRunMatrixPlan(value)).toThrow("duplicate task/trial/system cell");
  });

  it("rejects relative output roots and unsupported effort labels", () => {
    expect(() => validateRunMatrixPlan(plan({ output_root: "tmp/u197" }))).toThrow("absolute path");
    const value = plan();
    value.cells[0].effort = "ultra";
    expect(() => validateRunMatrixPlan(value)).toThrow("effort is invalid");
  });

  it("validates optional harness delivery gates before workspace preparation", () => {
    const value = plan({
      harness_delivery_gates: {
        first_product_write_ms_max: 450000,
        forbid_replacement_verifier: true,
      },
    });
    expect(validateRunMatrixPlan(value).harness_delivery_gates.first_product_write_ms_max).toBe(450000);

    expect(() => validateRunMatrixPlan(plan({
      harness_delivery_gates: {
        first_product_write_ms_max: 0,
        forbid_replacement_verifier: true,
      },
    }))).toThrow("first_product_write_ms_max");
  });

  it("maps a cell to the isolated sandbox preparer without provider execution", () => {
    expect(prepareArgsForCell(plan().cells[0], "/tmp/u197/pricing-t1-portable")).toEqual([
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-portable",
      "--runtime", "claude-code",
      "--out", "/tmp/u197/pricing-t1-portable",
    ]);
  });
});

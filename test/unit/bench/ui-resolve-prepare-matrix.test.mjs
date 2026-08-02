import { describe, expect, it } from "vitest";
import {
  prepareArgsForCell,
  validateControlContract,
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

function controlContract(overrides = {}) {
  return {
    comparison_mode: "native-capability",
    effort_semantics: "runtime-native-ordinal-not-cross-provider-equivalent",
    temperature_policy: "runtime-default-frozen",
    timeout_seconds: 900,
    max_concurrency: 1,
    latency_comparison: "eligible",
    retry_policy: "none-primary",
    timeout_policy: "count-as-valid-failure",
    infrastructure_policy: "retain-freeze-and-repreregister",
    task_order_policy: "balanced-rotation",
    token_budget: {
      mode: "observed-only",
      limit_tokens: null,
      usage_required: true,
      account_components: ["input", "cached_input", "output", "reasoning_output"],
      cached_input_separate: true,
      cost_policy: "provider-reported-or-pinned-price-equivalent",
    },
    step_budget: {
      mode: "observed-only",
      limit_steps: null,
    },
    ...overrides,
  };
}

describe("UI-Resolve run matrix preparation", () => {
  it("accepts a frozen, unique matrix plan", () => {
    expect(validateRunMatrixPlan(plan()).cells).toHaveLength(1);
  });

  it("validates optional installed host-policy completion gates", () => {
    const common = {
      task_id: "caption-cue-timing-review-v0.1",
      variant_id: "omd-portable-proof-close-latch-candidate",
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "high",
      timeout_seconds: 900,
      trial_index: 1,
    };
    const current = plan({
      host_policy_comparison: {
        target_runtime: "codex",
        sole_arm_delta: "project-proof-policy-installation",
        require_installed_state: true,
        require_delivery_ready: true,
        require_browser_attempt: true,
        max_unblocked_browser_recovery_count: 0,
        max_unblocked_duplicate_static_closure_count: 0,
        max_unblocked_verification_after_ready_count: 0,
      },
      cells: [
        { ...common, id: "controller", system_id: "controller", host_policy_mode: "controller-observation" },
        { ...common, id: "policy", system_id: "policy", host_policy_mode: "installed-opt-in" },
      ],
    });
    expect(validateRunMatrixPlan(current).host_policy_comparison).toMatchObject({
      require_delivery_ready: true,
      require_browser_attempt: true,
    });
    current.host_policy_comparison.require_delivery_ready = "yes";
    expect(() => validateRunMatrixPlan(current)).toThrow("require_delivery_ready must be boolean");
  });

  it("installs one equal proof policy across skill-comparison cells", () => {
    const shared = {
      target_runtime: "codex",
      mode: "installed-opt-in",
      require_installed_state: true,
      require_delivery_ready: true,
      require_browser_attempt: true,
      max_unblocked_browser_recovery_count: 0,
      max_unblocked_duplicate_static_closure_count: 0,
      max_unblocked_verification_after_ready_count: 0,
    };
    const common = {
      task_id: "spectrum-allocation-review-v0.1",
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "high",
      timeout_seconds: 900,
      trial_index: 1,
      host_policy_mode: "installed-opt-in",
    };
    const current = plan({
      shared_host_policy: shared,
      cells: [
        { ...common, id: "close", system_id: "close", variant_id: "omd-portable-proof-close-latch-candidate" },
        { ...common, id: "readable", system_id: "readable", variant_id: "omd-portable-readable-reflow-candidate" },
      ],
    });
    expect(validateRunMatrixPlan(current).shared_host_policy).toEqual(shared);

    current.cells[1].host_policy_mode = "controller-observation";
    expect(() => validateRunMatrixPlan(current)).toThrow("must match shared_host_policy.mode");
  });

  it("accepts schema 0.2 only with suite, product, and purpose provenance", () => {
    const current = plan({
      schema_version: "0.2",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.39",
      execution_purpose: "runtime-contract-calibration",
    });
    expect(validateRunMatrixPlan(current).product_version).toBe("1.9.39");
    delete current.execution_purpose;
    expect(() => validateRunMatrixPlan(current)).toThrow("execution_purpose");
  });

  it("requires a compute-control contract for cross-runtime schema 0.3", () => {
    const current = plan({
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.45",
      execution_purpose: "internal-model-comparison",
      family: "model",
      control_contract: controlContract(),
    });
    expect(validateRunMatrixPlan(current).control_contract.comparison_mode)
      .toBe("native-capability");
    expect(validateControlContract(current).latency_comparison).toBe("eligible");

    const missing = structuredClone(current);
    delete missing.control_contract;
    expect(() => validateRunMatrixPlan(missing)).toThrow("control_contract");
  });

  it("rejects false effort equivalence and unenforceable budget claims", () => {
    const current = plan({
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.45",
      execution_purpose: "internal-model-comparison",
      family: "model",
      control_contract: controlContract(),
    });

    current.control_contract.effort_semantics = "high-is-equal-everywhere";
    expect(() => validateRunMatrixPlan(current)).toThrow("cross-provider effort equivalence");

    current.control_contract = controlContract({
      token_budget: {
        ...controlContract().token_budget,
        mode: "hard-cap",
        limit_tokens: null,
      },
    });
    expect(() => validateRunMatrixPlan(current)).toThrow("limit_tokens");

    current.control_contract = controlContract({ max_concurrency: 2 });
    expect(() => validateRunMatrixPlan(current)).toThrow("max_concurrency 1");
  });

  it("validates explicit inter-cell pacing without changing per-cell wall time", () => {
    const current = plan({
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.53",
      execution_purpose: "cursor-capacity-pacing-calibration",
      family: "skill",
      control_contract: controlContract({
        pacing: {
          policy: "fixed-inter-cell",
          inter_cell_delay_seconds: 120,
          applies_between_cells_only: true,
          counts_toward_cell_wall_time: false,
        },
      }),
    });
    expect(validateControlContract(current).pacing.inter_cell_delay_seconds).toBe(120);

    current.control_contract.pacing.inter_cell_delay_seconds = 0;
    expect(() => validateRunMatrixPlan(current)).toThrow("positive delay");

    current.control_contract.pacing.inter_cell_delay_seconds = 120;
    current.control_contract.pacing.counts_toward_cell_wall_time = true;
    expect(() => validateRunMatrixPlan(current)).toThrow("outside per-cell wall time");

    current.control_contract.pacing = {
      policy: "none",
      inter_cell_delay_seconds: 1,
      applies_between_cells_only: true,
      counts_toward_cell_wall_time: false,
    };
    expect(() => validateRunMatrixPlan(current)).toThrow("requires zero delay");
  });

  it("rejects duplicate task/trial/system cells", () => {
    const value = plan();
    value.cells.push({ ...value.cells[0], id: "pricing-t1-portable-copy" });
    expect(() => validateRunMatrixPlan(value)).toThrow("duplicate task/trial/system cell");
  });

  it("rejects relative output roots and unsupported effort labels", () => {
    expect(() => validateRunMatrixPlan(plan({ output_root: "tmp/u197" }))).toThrow("absolute path");
    expect(() => validateRunMatrixPlan(plan({ vendors_root: "tmp/vendors" }))).toThrow("vendors_root");
    expect(() => validateRunMatrixPlan(plan({ attribution_scope: "public-display-name" })))
      .toThrow("attribution_scope");
    expect(validateRunMatrixPlan(plan({
      attribution_scope: "internal-registered-display-name",
    })).attribution_scope).toBe("internal-registered-display-name");
    const value = plan();
    value.cells[0].effort = "ultra";
    expect(() => validateRunMatrixPlan(value)).toThrow("effort is invalid");
  });

  it("validates optional harness delivery gates before workspace preparation", () => {
    const value = plan({
      harness_delivery_gates: {
        variant_kinds: ["agent-harness"],
        first_product_write_ms_max: 450000,
        last_advisory_to_first_product_write_ms_max: 90000,
        require_targeted_first_product_edit: true,
        forbid_replacement_verifier: true,
      },
    });
    expect(validateRunMatrixPlan(value).harness_delivery_gates.variant_kinds).toEqual(["agent-harness"]);
    expect(validateRunMatrixPlan(value).harness_delivery_gates.first_product_write_ms_max).toBe(450000);
    expect(validateRunMatrixPlan(value).harness_delivery_gates.last_advisory_to_first_product_write_ms_max).toBe(90000);
    expect(validateRunMatrixPlan(value).harness_delivery_gates.require_targeted_first_product_edit).toBe(true);

    expect(() => validateRunMatrixPlan(plan({
      harness_delivery_gates: {
        first_product_write_ms_max: 0,
        forbid_replacement_verifier: true,
      },
    }))).toThrow("first_product_write_ms_max");

    expect(() => validateRunMatrixPlan(plan({
      harness_delivery_gates: {
        first_product_write_ms_max: 450000,
        last_advisory_to_first_product_write_ms_max: 0,
        forbid_replacement_verifier: true,
      },
    }))).toThrow("last_advisory_to_first_product_write_ms_max");

    expect(() => validateRunMatrixPlan(plan({
      harness_delivery_gates: {
        first_product_write_ms_max: 450000,
        require_targeted_first_product_edit: "yes",
        forbid_replacement_verifier: true,
      },
    }))).toThrow("require_targeted_first_product_edit");

    expect(() => validateRunMatrixPlan(plan({
      harness_delivery_gates: {
        variant_kinds: [],
        first_product_write_ms_max: 450000,
        forbid_replacement_verifier: true,
      },
    }))).toThrow("variant_kinds");
  });

  it("validates report-only proof execution gates for supported runtimes", () => {
    const value = plan({
      proof_execution_gates: {
        system_ids: ["omd-portable"],
        enforcement: "promotion-report",
        require_analyzable: true,
        max_browser_recovery_count: 0,
        max_duplicate_static_closure_count: 0,
        max_verification_after_ready_count: 0,
      },
    });
    value.cells[0].runtime = "codex";
    expect(validateRunMatrixPlan(value).proof_execution_gates.max_browser_recovery_count).toBe(0);

    const unsupported = structuredClone(value);
    unsupported.cells[0].runtime = "claude-code";
    expect(() => validateRunMatrixPlan(unsupported)).toThrow("only codex or cursor");

    const unknown = structuredClone(value);
    unknown.proof_execution_gates.system_ids = ["missing-system"];
    expect(() => validateRunMatrixPlan(unknown)).toThrow(/target at least one|unknown system/);

    const malformed = structuredClone(value);
    malformed.proof_execution_gates.max_browser_recovery_count = -1;
    expect(() => validateRunMatrixPlan(malformed)).toThrow("non-negative integer");
  });

  it("maps a cell to the isolated sandbox preparer without provider execution", () => {
    expect(prepareArgsForCell(plan().cells[0], "/tmp/u197/pricing-t1-portable")).toEqual([
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-portable",
      "--runtime", "claude-code",
      "--out", "/tmp/u197/pricing-t1-portable",
    ]);
    expect(prepareArgsForCell(
      plan().cells[0],
      "/tmp/u197/pricing-t1-portable",
      { vendorsRoot: "/tmp/pinned-vendors" },
    )).toEqual([
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-portable",
      "--runtime", "claude-code",
      "--vendors", "/tmp/pinned-vendors",
      "--out", "/tmp/u197/pricing-t1-portable",
    ]);
  });
});

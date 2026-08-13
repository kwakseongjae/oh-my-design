import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const planPath = path.join(
  root,
  "benchmarks/ui-resolve-bench/plans/luna-max-2.0-release-v0.1.json",
);
const docPath = path.join(root, "docs/OMD_2_0_LUNA_MAX_RELEASE_PLAN.md");
const routingPath = path.join(
  root,
  "benchmarks/ui-resolve-bench/config/omd-2.0-model-role-routing-v0.1.json",
);

describe("Luna Max 2.0 release plan", () => {
  it("fails closed before a clean source seal and public schema liveness", () => {
    const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));

    expect(plan.status).toBe("blocked-pending-clean-commit-and-schema-liveness");
    expect(plan.provider_execution_allowed).toBe(false);
    expect(plan.primary_model).toEqual(expect.objectContaining({
      runtime: "codex",
      selector: "gpt-5.6-luna",
      effort: "max",
      fallback_allowed: false,
      attribution_preflight_required: true,
    }));
    expect(plan.hard_release_gates).toEqual(expect.objectContaining({
      clean_exact_committed_source: true,
      seven_public_core_schemas_live_and_byte_identical: true,
      unsupported_product_facts: 0,
      fully_authorized_follow_up_questions: 0,
      unplanned_human_interventions: 0,
      all_failures_and_timeouts_published: true,
    }));
  });

  it("keeps portable ranking, harness cost and model transfer separate", () => {
    const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));

    expect(plan.portable_arms).toEqual([
      "model-only",
      "anthropic-frontend-design",
      "impeccable-prompt-only",
      "ui-ux-pro-max",
      "taste-eligible-scope-only",
      "omd-autopilot-v2",
    ]);
    expect(plan.stages.wow_preview).toEqual(expect.objectContaining({
      task_count: 3,
      trials_per_arm: 3,
      maximum_primary_cells: 54,
      blind_practitioners_min: 5,
      omd_ui_resolved_cells_min: 8,
    }));
    expect(plan.stages.release_qualification).toEqual(expect.objectContaining({
      hidden_task_families: 12,
      trials_per_arm: 5,
      maximum_primary_cells: 360,
      blind_practitioners_min: 10,
      scheduled_ui_resolved_rate_min: 0.8,
      reliability_at_5_task_count_min: 8,
    }));
    expect(plan.stages.harness_pareto.ranked_with_portable_arms).toBe(false);
    expect(plan.stages.transfer.pool_model_results).toBe(false);
    expect(plan.fairness).toEqual(expect.objectContaining({
      same_user_task_packet_bytes: true,
      native_activation_prefix_is_only_arm_specific_prompt_delta: true,
      activation_prefix_and_invocation_hash_public: true,
      arm_specific_design_or_task_facts_forbidden: true,
      same_blank_starter: true,
    }));
    expect(plan.fairness).not.toHaveProperty("same_prompt_bytes");
  });

  it("blocks release and preserves failures when OmD does not clear the gate", () => {
    const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
    const doc = fs.readFileSync(docPath, "utf8");

    expect(plan.failure_policy).toEqual(expect.objectContaining({
      release_decision: "hold-2.0.0",
      preserve_failed_experiment: true,
      repair_scope: "smallest-recurrent-product-failure-cluster",
    }));
    expect(plan.global_best_claim_allowed).toBe(false);
    expect(doc).toContain("If any release gate fails, 2.0.0 remains blocked.");
    expect(doc).toContain("Where OmD lost");
    expect(doc).toContain("Reproduce it");
  });

  it("separates Sol planning and implementation from Luna Max benchmark cells", () => {
    const plan = JSON.parse(fs.readFileSync(planPath, "utf8"));
    const routing = JSON.parse(fs.readFileSync(routingPath, "utf8"));

    expect(plan.model_role_contract).toEqual({
      path: "benchmarks/ui-resolve-bench/config/omd-2.0-model-role-routing-v0.1.json",
      sha256: "cb004c8f9799c00098964342d377b33b356b0a9204ef52bfbdce02ff98b436d0",
      required: true,
      activation_phrase: "ㄱㄱ",
    });
    expect(routing.status).toBe("provider-zero-ready-awaiting-user-go");
    expect(routing.provider_execution_allowed_before_activation).toBe(false);
    expect(routing.roles.planning_review_roadmap).toEqual(expect.objectContaining({
      model: "gpt-5.6-sol",
      effort: "xhigh",
      benchmark_cell_eligible: false,
    }));
    expect(routing.roles.implementation).toEqual(expect.objectContaining({
      model: "gpt-5.6-sol",
      effort: "medium",
      benchmark_cell_eligible: false,
    }));
    expect(routing.roles.benchmark_generation).toEqual(expect.objectContaining({
      model: "gpt-5.6-luna",
      effort: "max",
      workspace_policy: "fresh-preregistered-isolated-cell-only",
    }));
    expect(routing.separation).toEqual(expect.objectContaining({
      model_substitution_allowed: false,
      effort_substitution_allowed: false,
      failed_cell_retry_allowed: false,
      failed_cell_replacement_allowed: false,
      cross_model_score_pooling_allowed: false,
    }));
    expect(routing.provider_calls).toBe(0);
    expect(routing.model_calls).toBe(0);
    expect(routing.browser_calls).toBe(0);
    expect(createHash("sha256").update(fs.readFileSync(routingPath)).digest("hex"))
      .toBe(plan.model_role_contract.sha256);
  });
});

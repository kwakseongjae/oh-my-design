import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const planPath = path.join(
  root,
  "benchmarks/ui-resolve-bench/plans/luna-max-2.0-release-v0.1.json",
);
const docPath = path.join(root, "docs/OMD_2_0_LUNA_MAX_RELEASE_PLAN.md");

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
});

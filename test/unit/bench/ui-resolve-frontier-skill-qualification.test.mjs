import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { validateRunMatrixPlan } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const readJson = (path) => JSON.parse(readFileSync(resolve(repoRoot, path), "utf8"));

describe("frontier skill Stage A qualification", () => {
  const plan = readJson("benchmarks/ui-resolve-bench/reports/frontier-skill-qualification-luna-1.9.799/RUN-MATRIX.json");
  const competitors = readJson("benchmarks/ui-resolve-bench/competitors.json");
  const result = readJson("benchmarks/ui-resolve-bench/reports/frontier-skill-qualification-luna-1.9.799/RESULT.json");

  it("locks a valid four-arm by three-task Luna/high matrix", () => {
    expect(() => validateRunMatrixPlan(plan, competitors)).not.toThrow();
    expect(plan.cells).toHaveLength(12);
    expect(new Set(plan.cells.map((cell) => cell.task_id)).size).toBe(3);
    expect(new Set(plan.cells.map((cell) => cell.variant_id)).size).toBe(4);
    for (const taskId of new Set(plan.cells.map((cell) => cell.task_id))) {
      expect(new Set(plan.cells.filter((cell) => cell.task_id === taskId).map((cell) => cell.variant_id)).size).toBe(4);
    }
    expect(plan.cells.every((cell) => (
      cell.runtime === "codex"
      && cell.model_id === "gpt-5.6-luna"
      && cell.effort === "high"
      && cell.timeout_seconds === 720
      && cell.trial_index === 1
    ))).toBe(true);
  });

  it("keeps qualification separate from promotion and Cursor", () => {
    expect(plan.qualification_contract).toMatchObject({
      stage: "A",
      required_cells: 12,
      promotion_effect: "none",
    });
    expect(plan.provider_routing_contract).toMatchObject({
      cursor_allowed: false,
      allowed_runtime: "codex",
      allowed_model_id: "gpt-5.6-luna",
      allowed_effort: "high",
      fail_closed: true,
    });
    expect(plan.comparison_claim_contract.forbid_claims).toContain("best-ui-skill");
    expect(plan.comparison_claim_contract.forbid_claims).toContain("statistical-superiority");
  });

  it("records all cells and advances only the proof-compliant arm", () => {
    expect(result).toMatchObject({
      status: "COMPLETE",
      completed_cells: 12,
      valid_cells: 12,
      provider_calls: 12,
      cursor_calls: 0,
    });
    expect(result.qualification).toMatchObject({
      eligible_arms: ["omd-portable-1.9.799-current"],
      promotion_effect: "none",
    });
    expect(result.arms["omd-portable-1.9.799-current"]).toMatchObject({
      tasks: 3,
      ui_resolved: 3,
      proof_compliant: 3,
      scores: [85, 85, 85],
      stage_a_eligible: true,
    });
    for (const arm of result.qualification.ineligible_arms) {
      expect(result.arms[arm].ui_resolved).toBe(0);
      expect(result.arms[arm].proof_compliant).toBe(0);
      expect(result.arms[arm].stage_a_eligible).toBe(false);
    }
    expect(result.forbidden_claims).toContain("best-ui-skill");
    expect(result.forbidden_claims).toContain("2.0-release-gate");
  });
});

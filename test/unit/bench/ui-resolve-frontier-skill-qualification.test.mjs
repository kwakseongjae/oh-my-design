import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { validateRunMatrixPlan } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const readJson = (path) => JSON.parse(readFileSync(resolve(repoRoot, path), "utf8"));

describe("frontier skill Stage A qualification", () => {
  const plan = readJson("benchmarks/ui-resolve-bench/reports/frontier-skill-qualification-luna-1.9.799/RUN-MATRIX.json");
  const competitors = readJson("benchmarks/ui-resolve-bench/competitors.json");

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
});

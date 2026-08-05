import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { auditFrontierExecutionBoundary } from "../../../benchmarks/ui-resolve-bench/scripts/audit-frontier-execution-boundary.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const boundary = JSON.parse(readFileSync(resolve(repoRoot, "benchmarks/ui-resolve-bench/frontier-execution-boundary.json"), "utf8"));
const readiness = JSON.parse(readFileSync(resolve(repoRoot, "benchmarks/ui-resolve-bench/frontier-readiness.json"), "utf8"));

describe("frontier non-local execution boundary", () => {
  it("halts local patch churn when all unresolved gates require non-local evidence", () => {
    const report = auditFrontierExecutionBoundary(boundary, readiness, repoRoot);
    expect(report).toMatchObject({
      unresolved_gate_count: 9,
      locally_closable_gate_ids: [],
      local_preparation_counts: { complete: 7, partial: 2 },
      hard_pause_required: true,
      decision: "PAUSE_LOCAL_PATCH_TRAIN_FOR_NON_LOCAL_EVIDENCE",
    });
    expect(report.non_local_action_classes["remote-model-execution"]).toHaveLength(4);
    expect(report.non_local_action_classes["external-practitioner-panel"]).toEqual(["practitioner-blind-review"]);
  });

  it("rejects missing, duplicate, or local-only gate mappings", () => {
    const missing = structuredClone(boundary);
    missing.gates.pop();
    expect(() => auditFrontierExecutionBoundary(missing, readiness, repoRoot)).toThrow(/map every unresolved/);

    const duplicate = structuredClone(boundary);
    duplicate.gates[1].id = duplicate.gates[0].id;
    expect(() => auditFrontierExecutionBoundary(duplicate, readiness, repoRoot)).toThrow(/IDs must equal/);

    const local = structuredClone(boundary);
    local.gates[0].next_action_class = "local-implementation";
    expect(() => auditFrontierExecutionBoundary(local, readiness, repoRoot)).toThrow(/unsupported or local/);
  });
});

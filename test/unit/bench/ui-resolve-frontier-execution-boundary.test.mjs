import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { auditFrontierExecutionBoundary } from "../../../benchmarks/ui-resolve-bench/scripts/audit-frontier-execution-boundary.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const boundary = JSON.parse(readFileSync(resolve(repoRoot, "benchmarks/ui-resolve-bench/frontier-execution-boundary.json"), "utf8"));
const readiness = JSON.parse(readFileSync(resolve(repoRoot, "benchmarks/ui-resolve-bench/frontier-readiness.json"), "utf8"));

describe("frontier non-local execution boundary", () => {
  it("admits only the explicitly authorized non-local gate", () => {
    const report = auditFrontierExecutionBoundary(boundary, readiness, repoRoot);
    expect(report).toMatchObject({
      unresolved_gate_count: 10,
      locally_closable_gate_ids: [],
      local_preparation_counts: { complete: 8, partial: 2 },
      local_only_mode: false,
      authorized_action_classes: ["remote-model-execution"],
      active_gate_ids: ["verified-skill-lift"],
      hard_pause_required: false,
      decision: "RUN_AUTHORIZED_NON_LOCAL_GATE_EVIDENCE",
    });
    expect(report.non_local_action_classes["remote-model-execution"]).toHaveLength(5);
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
    local.gates[0].next_action_class = "made-up-action";
    expect(() => auditFrontierExecutionBoundary(local, readiness, repoRoot)).toThrow(/unsupported/);

    const unauthorized = structuredClone(boundary);
    unauthorized.active_gate_ids = ["three-model-positive-lift"];
    expect(() => auditFrontierExecutionBoundary(unauthorized, readiness, repoRoot)).toThrow(/not authorized/);
  });

  it("retains the historical local-only hard pause semantics", () => {
    const localOnly = structuredClone(boundary);
    localOnly.local_only_mode = true;
    delete localOnly.authorized_action_classes;
    delete localOnly.active_gate_ids;
    expect(auditFrontierExecutionBoundary(localOnly, readiness, repoRoot)).toMatchObject({
      hard_pause_required: true,
      decision: "PAUSE_LOCAL_PATCH_TRAIN_FOR_NON_LOCAL_EVIDENCE",
    });
  });
});

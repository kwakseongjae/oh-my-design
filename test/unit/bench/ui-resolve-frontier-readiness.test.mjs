import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { evaluateFrontierReadiness } from "../../../benchmarks/ui-resolve-bench/scripts/audit-frontier-readiness.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const manifest = JSON.parse(readFileSync(resolve(repoRoot, "benchmarks/ui-resolve-bench/frontier-readiness.json"), "utf8"));

describe("2.0 frontier readiness audit", () => {
  it("fails closed while any normative gate remains unresolved", () => {
    const report = evaluateFrontierReadiness(manifest, repoRoot);
    expect(report).toMatchObject({
      required_gate_count: 9,
      promotion_allowed: false,
      decision: "BLOCK_2_0_PROMOTION",
      counts: { open: 4, partial: 3, external: 2, pass: 0 },
    });
    expect(report.unresolved_gate_ids).toHaveLength(9);
    expect(report.external_gate_ids).toEqual(["practitioner-blind-review", "independent-task-audit"]);
    expect(report.evidence_refs_checked).toBeGreaterThanOrEqual(14);
  });

  it("allows a release decision only when all nine evidence-backed gates pass", () => {
    const complete = structuredClone(manifest);
    complete.gates.forEach((gate) => { gate.status = "pass"; });
    const report = evaluateFrontierReadiness(complete, repoRoot);
    expect(report.promotion_allowed).toBe(true);
    expect(report.decision).toBe("READY_FOR_USER_RELEASE_DECISION");
    expect(report.unresolved_gate_ids).toEqual([]);
  });

  it("rejects missing or repository-escaping evidence", () => {
    const missing = structuredClone(manifest);
    missing.gates[0].evidence_refs = ["benchmarks/ui-resolve-bench/reports/does-not-exist"];
    expect(() => evaluateFrontierReadiness(missing, repoRoot)).toThrow(/missing evidence/);

    const escaping = structuredClone(manifest);
    escaping.gates[0].evidence_refs = ["../outside"];
    expect(() => evaluateFrontierReadiness(escaping, repoRoot)).toThrow(/repository-relative/);
  });
});

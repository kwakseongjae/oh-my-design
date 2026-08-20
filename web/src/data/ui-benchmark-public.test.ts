import { describe, expect, it } from "vitest";
import benchmark from "./ui-benchmark-public.generated.json";

describe("public UI benchmark data", () => {
  it("keeps the first public slice explicitly internal and unranked", () => {
    expect(benchmark.publication.status).toBe("internal");
    expect(benchmark.publication.isLeaderboard).toBe(false);
    expect(benchmark.publication.verifiedPublicMinimum).toEqual({
      tasks: 24,
      runsPerTask: 10,
      practitionerReviewers: 10,
    });
  });

  it("preserves the exact Harness Track denominator, uncertainty, and loss", () => {
    expect(benchmark.harnessCheckpoint.completedCells).toBe(18);
    expect(benchmark.harnessCheckpoint.uiResolved.baseline).toMatchObject({
      passed: 5,
      total: 9,
    });
    expect(benchmark.harnessCheckpoint.uiResolved.candidate).toMatchObject({
      passed: 8,
      total: 9,
    });
    expect(benchmark.harnessCheckpoint.uiResolved.confidence95[0]).toBeLessThanOrEqual(0);
    expect(benchmark.harnessCheckpoint.knownLoss).toMatchObject({
      cellId: "operations-t3-harness",
      score: 77,
      max: 85,
    });
  });

  it("publishes only the policy-approved 51-cell effort checkpoint", () => {
    expect(benchmark.schemaVersion).toBe("0.2");
    expect(benchmark.effortCheckpoint).toMatchObject({
      experimentId: "codex-all-effort-sweep-1.9.826",
      policyId: "codex-effort-routing-public-claims-1.9.827",
      attribution: "Codex configuration-routed Luna/Terra/Sol",
      taskCount: 3,
      trialsPerCell: 1,
      terminal: { passed: 51, total: 51 },
      objective: { passed: 38, total: 51 },
      objectiveAndProof: { passed: 34, total: 51 },
      observedTokens: { total: 36890716, cells: 50, scheduledCells: 51 },
      publicModelAttributionEligibleCells: 0,
      twoPointZeroPromotionEffect: "none",
    });
    expect(benchmark.effortCheckpoint.effortRows.map((row) => row.effort)).toEqual([
      "low",
      "medium",
      "high",
      "xhigh",
      "max",
      "ultra",
    ]);
    expect(benchmark.effortCheckpoint.effortRows.find((row) => row.effort === "high")).toMatchObject({
      objective: { passed: 8, total: 9 },
      objectiveAndProof: { passed: 8, total: 9 },
      observedTokens: 5511792,
    });
  });

  it("shows the locale failure, contract calibration, and fresh recovery separately", () => {
    expect(benchmark.learningTimeline.map((entry) => entry.state)).toEqual([
      "failed",
      "contract",
      "passed",
    ]);
    expect(benchmark.localeCheckpoint).toMatchObject({
      completedCells: 1,
      score: 85,
      max: 85,
      browserCommands: 0,
      replacementVerifier: false,
    });
  });
});

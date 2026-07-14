import { describe, expect, it } from "vitest";
import { buildReverifyQueue, type ReverifyCandidate } from "./queue";

function candidate(
  id: string,
  status: ReverifyCandidate["status"],
  overrides: Partial<ReverifyCandidate> = {},
): ReverifyCandidate {
  return {
    id,
    name: id,
    category: "saas",
    status,
    verifiedAt: "2026-07-01",
    tokensExtractedAt: "2026-07-01",
    nextReverifyAt: null,
    tokenSource: "live-extract",
    claimCount: 10,
    evidenceClaimCount: 10,
    evidenceCoverage: 1,
    surfaceCount: 2,
    sourceCount: 2,
    conflictCount: 0,
    tier1SourceCount: 2,
    reasonCodes: [],
    ...overrides,
  };
}

describe("reverify queue", () => {
  it("defaults subscription-style queues to high reasoning", () => {
    const queue = buildReverifyQueue([
      candidate("toss", "partial", { reasonCodes: ["proof_incomplete"] }),
    ], { asOf: "2026-07-11", modelProfile: "gpt-5.6-terra" });
    expect(queue.modelPolicy.reasoningEffort).toBe("high");
  });

  it("prioritizes unresolved conflicts over ordinary legacy backfill", () => {
    const queue = buildReverifyQueue([
      candidate("legacy", "legacy_snapshot", { reasonCodes: ["verification_v2_missing"] }),
      candidate("conflict", "partial", { reasonCodes: ["conflict_unresolved"] }),
    ], { asOf: "2026-07-11" });
    expect(queue.tasks.map((task) => task.id)).toEqual(["conflict", "legacy"]);
  });

  it("queues a verified reference only when its next check enters the horizon", () => {
    const queue = buildReverifyQueue([
      candidate("fresh", "verified_v2", { nextReverifyAt: "2026-10-01" }),
      candidate("due", "verified_v2", { nextReverifyAt: "2026-07-20" }),
    ], { asOf: "2026-07-11", horizonDays: 30 });
    expect(queue.tasks.map((task) => task.id)).toEqual(["due"]);
  });

  it("emits a provider-neutral evidence-worker contract", () => {
    const queue = buildReverifyQueue([
      candidate("toss", "partial", { reasonCodes: ["proof_incomplete"] }),
    ], { asOf: "2026-07-11", modelProfile: "opus-class", reasoningEffort: "xhigh" });
    expect(queue.modelPolicy).toEqual({
      profile: "opus-class",
      reasoningEffort: "xhigh",
      authority: "evidence_worker_only",
    });
    expect(queue.tasks[0].worker.invocation).toBe("/omd:add-reference toss --mode update");
    expect(queue.tasks[0].worker.captureInvocation).toBe(
      "npm --prefix web run capture:reference -- toss --max-routes 3",
    );
    expect(queue.tasks[0].worker.captureCommand).toEqual({
      executable: "npm",
      args: ["--prefix", "web", "run", "capture:reference", "--", "toss", "--max-routes", "3"],
    });
    expect(queue.tasks[0].worker.evidenceArtifact).toBe(
      "artifacts/reference-evidence/toss.json",
    );
    expect(queue.tasks[0].acceptanceCommands[0]).toEqual({
      executable: "node",
      args: ["web/scripts/verify-reference.mjs", "toss"],
    });
  });

  it("preserves a per-reference capture surface budget", () => {
    const queue = buildReverifyQueue([
      candidate("krds", "partial", { reasonCodes: ["proof_incomplete"] }),
    ], { asOf: "2026-07-11", captureMaxRoutesById: { krds: 8 } });
    expect(queue.tasks[0].worker.captureInvocation).toContain("--max-routes 8");
    expect(queue.tasks[0].worker.captureCommand.args.at(-1)).toBe("8");
  });
});

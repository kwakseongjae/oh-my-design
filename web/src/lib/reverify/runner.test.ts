import { describe, expect, it } from "vitest";
import { buildReverifyQueue, type ReverifyCandidate } from "./queue";
import { buildReverifyPacket, renderAdapterCommand, selectReverifyTask, validateRunnerAdapter } from "./runner";

const candidate: ReverifyCandidate = {
  id: "toss",
  name: "Toss",
  category: "fintech",
  status: "partial",
  verifiedAt: "2026-07-01",
  tokensExtractedAt: "2026-07-01",
  nextReverifyAt: null,
  tokenSource: "reconciled",
  claimCount: 10,
  evidenceClaimCount: 9,
  evidenceCoverage: 0.9,
  surfaceCount: 2,
  sourceCount: 2,
  conflictCount: 0,
  tier1SourceCount: 2,
  reasonCodes: ["claim_evidence_missing"],
};

describe("reverify runner adapter", () => {
  const adapter = validateRunnerAdapter({
    schemaVersion: 1,
    name: "fixture",
    command: { executable: "worker", args: ["--packet", "{packet}", "--model", "{modelProfile}", "--budget", "{budgetUsd}"] },
    limits: { maxTasksPerRun: 1, maxPullRequestsPerRun: 1, maxRetries: 1, timeoutMinutes: 30, maxBudgetUsd: 5 },
  });

  it("renders a shell-free command template", () => {
    expect(renderAdapterCommand(adapter, {
      packet: "/tmp/packet.md",
      referenceId: "toss",
      modelProfile: "opus-class",
      reasoningEffort: "xhigh",
      budgetUsd: "3",
      workspace: "/repo",
      evidenceArtifact: "/repo/artifacts/toss.json",
    })).toEqual({ executable: "worker", args: ["--packet", "/tmp/packet.md", "--model", "opus-class", "--budget", "3"] });
  });

  it("builds an evidence-worker packet and selects exactly one queued task", () => {
    const queue = buildReverifyQueue([candidate], { asOf: "2026-07-11", modelProfile: "opus-class", reasoningEffort: "xhigh" });
    const task = selectReverifyTask(queue, "toss");
    const packet = buildReverifyPacket(queue, task);
    expect(packet).toContain("evidence_worker_only");
    expect(packet).toContain("artifacts/reference-evidence/toss.json");
    expect(() => selectReverifyTask(queue, "missing")).toThrow(/not present/);
  });

  it("rejects adapters without enforceable limits", () => {
    expect(() => validateRunnerAdapter({ schemaVersion: 1, name: "bad", command: { executable: "worker", args: [] } })).toThrow(/limits/);
  });

  it("accepts a zero-dollar ChatGPT subscription adapter", () => {
    const subscription = validateRunnerAdapter({
      schemaVersion: 1,
      name: "codex-subscription",
      billingMode: "subscription",
      command: { executable: "codex", args: ["exec", "--model", "{modelProfile}"] },
      limits: { maxTasksPerRun: 1, maxPullRequestsPerRun: 1, maxRetries: 0, timeoutMinutes: 60, maxBudgetUsd: 0 },
    });
    expect(subscription.billingMode).toBe("subscription");
  });

  it("still requires a positive cap for usage-billed adapters", () => {
    expect(() => validateRunnerAdapter({
      schemaVersion: 1,
      name: "usage",
      billingMode: "usage",
      command: { executable: "worker", args: [] },
      limits: { maxTasksPerRun: 1, maxPullRequestsPerRun: 1, maxRetries: 0, timeoutMinutes: 30, maxBudgetUsd: 0 },
    })).toThrow(/positive for usage/);
  });
});

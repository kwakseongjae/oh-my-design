import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { aggregateTokensToTarget } from "../../../benchmarks/ui-resolve-bench/scripts/aggregate-tokens-to-target.mjs";

const script = resolve("benchmarks/ui-resolve-bench/scripts/aggregate-tokens-to-target.mjs");

function run(role, provider_tokens, status = "valid", components) {
  return { role, provider_tokens, status, ...(components ? { components } : {}) };
}

describe("UI-Resolve tokens-to-target accounting", () => {
  it("counts all scheduled spend through the first passing patch", () => {
    const summary = aggregateTokensToTarget({
      goal_id: "frontier-ui-skill-v2",
      target_contract: "promotion gate passes",
      attempts: [
        {
          order: 1,
          patch_version: "1.9.10",
          goal_passed: false,
          runs: [run("candidate", 180), run("control", 100)],
        },
        {
          order: 2,
          patch_version: "1.9.11",
          goal_passed: true,
          runs: [run("candidate", 200), run("control", 120)],
        },
        {
          order: 3,
          patch_version: "1.9.12",
          goal_passed: false,
          runs: [run("candidate", 999)],
        },
      ],
    });

    expect(summary.achieved).toBe(true);
    expect(summary.first_pass_patch).toBe("1.9.11");
    expect(summary.attempts_to_target).toBe(2);
    expect(summary.tokens_to_target).toEqual({
      candidate: 380,
      control: 220,
      total_experimental: 600,
      invalid_or_timeout: 0,
    });
    expect(summary.excluded_post_target_attempts).toEqual([{ order: 3, patch_version: "1.9.12" }]);
  });

  it("right-censors an unmet goal and retains timeout spend", () => {
    const summary = aggregateTokensToTarget({
      goal_id: "frontier-ui-skill-v2",
      target_contract: "promotion gate passes",
      attempts: [{
        order: 1,
        patch_version: "1.9.10",
        goal_passed: false,
        runs: [run("candidate", 300, "timed_out"), run("control", 90)],
      }],
    });

    expect(summary.achieved).toBe(false);
    expect(summary.censoring).toBe("right-censored");
    expect(summary.attempts_to_target).toBeNull();
    expect(summary.tokens_to_target.total_experimental).toBe(390);
    expect(summary.tokens_to_target.invalid_or_timeout).toBe(300);
  });

  it("reports missing component telemetry instead of converting it to zero", () => {
    const summary = aggregateTokensToTarget({
      goal_id: "frontier-ui-skill-v2",
      target_contract: "promotion gate passes",
      attempts: [{
        order: 1,
        patch_version: "1.9.10",
        goal_passed: true,
        runs: [run("candidate", 100, "valid", { fresh_input: 60, output: 40 })],
      }],
    });

    expect(summary.component_telemetry.fresh_input).toMatchObject({ coverage: 1, tokens: 60 });
    expect(summary.component_telemetry.cached_input).toMatchObject({ coverage: 0, tokens: null });
    expect(summary.component_telemetry.reasoning_output).toMatchObject({ coverage: 0, tokens: null });
  });

  it("accepts the documented CLI input and output flags", () => {
    const root = mkdtempSync(join(tmpdir(), "ui-resolve-ttt-"));
    const input = join(root, "ledger.json");
    const output = join(root, "summary.json");
    try {
      writeFileSync(input, JSON.stringify({
        goal_id: "frontier-ui-skill-v2",
        target_contract: "promotion gate passes",
        attempts: [{
          order: 1,
          patch_version: "1.9.10",
          goal_passed: false,
          runs: [run("candidate", 100)],
        }],
      }));
      execFileSync(process.execPath, [script, "--input", input, "--out", output]);
      expect(JSON.parse(readFileSync(output, "utf8")).tokens_to_target.candidate).toBe(100);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

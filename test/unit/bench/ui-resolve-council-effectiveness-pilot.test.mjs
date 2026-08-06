import { afterEach, describe, expect, it } from "vitest";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const repoRoot = resolve(import.meta.dirname, "../../..");
const runner = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/run-council-effectiveness-pilot.mjs");
const fixture = join(repoRoot, "benchmarks/ui-resolve-bench/fixtures/council-effectiveness-pilot.json");
const roots = [];

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

describe("council effectiveness pilot", () => {
  it("prepares a provider-zero denominator without inventing council lift", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-council-pilot-"));
    roots.push(root);
    const result = spawnSync(process.execPath, [runner, fixture, root], {
      cwd: repoRoot,
      encoding: "utf8",
      env: { ...process.env, OMD_COUNCIL_EXECUTE: "0" },
    });
    expect(result.status, result.stderr).toBe(0);
    const summary = JSON.parse(readFileSync(join(root, "SUMMARY.json"), "utf8"));
    expect(summary).toMatchObject({
      execution_mode: "provider-zero",
      model_requested: "cursor-grok-4.5-high",
      retry_budget: 0,
      case_count: 3,
      authority_retained: true,
      expected_blocked_retained: true,
      forbidden_auto_count: 0,
    });
    expect(summary.lane_call_count).toBeGreaterThan(0);
    expect(summary.lane_call_count).toBeLessThanOrEqual(12);
    expect(summary.council_question_count).toBe(summary.baseline_question_count);
    expect(summary.results.every((item) => item.lane_runs.every((run) => run.exit_code === null))).toBe(true);
  });
});

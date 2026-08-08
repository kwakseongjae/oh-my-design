import { afterEach, describe, expect, it } from "vitest";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const repoRoot = resolve(import.meta.dirname, "../../..");
const runner = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/run-council-effectiveness-pilot.mjs");
const fixture = join(repoRoot, "benchmarks/ui-resolve-bench/fixtures/council-effectiveness-pilot.json");
const lunaFixture = join(repoRoot, "benchmarks/ui-resolve-bench/fixtures/council-effectiveness-luna-1.9.757.json");
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
      baseline_question_count: 1,
      council_question_count: 1,
      baseline_human_handoff_count: 2,
      council_human_handoff_count: 2,
      authority_retained: true,
      expected_blocked_retained: true,
      forbidden_auto_count: 0,
    });
    expect(summary.lane_call_count).toBeGreaterThan(0);
    expect(summary.lane_call_count).toBeLessThanOrEqual(12);
    expect(summary.results.every((item) => item.lane_runs.every((run) => run.exit_code === null))).toBe(true);
    expect(summary.cursor_calls).toBe(0);
    expect(summary.provider_calls).toBe(0);
    expect(summary.model_lane_calls).toBe(0);
  });

  it("prepares the Codex-native Luna denominator with explicit zero-call accounting", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-council-luna-"));
    roots.push(root);
    const result = spawnSync(process.execPath, [runner, lunaFixture, root], {
      cwd: repoRoot,
      encoding: "utf8",
      env: { ...process.env, OMD_COUNCIL_EXECUTE: "0" },
    });
    expect(result.status, result.stderr).toBe(0);
    const summary = JSON.parse(readFileSync(join(root, "SUMMARY.json"), "utf8"));
    expect(summary).toMatchObject({
      execution_mode: "provider-zero",
      runtime: "provider-zero",
      model_requested: "gpt-5.6-luna",
      effort: "high",
      retry_budget: 0,
      case_count: 3,
      provider_calls: 0,
      model_lane_calls: 0,
      cursor_calls: 0,
      authority_retained: true,
      expected_blocked_retained: true,
      forbidden_auto_count: 0,
    });
  });

  it("fails closed before spawning when a live fixture is not Codex-native Luna", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-council-cursor-block-"));
    roots.push(root);
    const result = spawnSync(process.execPath, [runner, fixture, root], {
      cwd: repoRoot,
      encoding: "utf8",
      env: { ...process.env, OMD_COUNCIL_EXECUTE: "1" },
    });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("live council execution requires runtime=codex");
    expect(existsSync(root)).toBe(true);
    expect(existsSync(join(root, "cases"))).toBe(false);
  });

  it("records unavailable lanes instead of hanging when the Codex runtime cannot spawn", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-council-codex-missing-"));
    roots.push(root);
    const result = spawnSync(process.execPath, [runner, lunaFixture, root], {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        OMD_COUNCIL_EXECUTE: "1",
        OMD_BENCH_CODEX_BIN: "/definitely/missing/codex",
      },
    });
    expect(result.status, result.stderr).toBe(0);
    const summary = JSON.parse(readFileSync(join(root, "SUMMARY.json"), "utf8"));
    expect(summary).toMatchObject({
      execution_mode: "codex-live",
      runtime: "codex",
      provider_calls: 4,
      model_lane_calls: 4,
      cursor_calls: 0,
    });
    const laneRuns = summary.results.flatMap((item) => item.lane_runs);
    expect(laneRuns).toHaveLength(4);
    expect(laneRuns.every((run) => run.exit_code === null && run.spawn_error?.includes("ENOENT"))).toBe(true);
    expect(laneRuns.every((run) => run.artifact_valid === false)).toBe(true);
  });
});

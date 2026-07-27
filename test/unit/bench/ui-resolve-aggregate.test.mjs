import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const aggregate = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/aggregate-results.mjs");

function record({
  system,
  task,
  trial,
  resolved,
  score,
  status = "complete",
  validity = "valid",
  suffix = "",
}) {
  return {
    run_id: `${system}-${task}-${trial}${suffix}`,
    benchmark_family: "skill",
    suite_version: "0.2-dev",
    system_id: system,
    model_id: "anchor-model-v1",
    skill_id: system === "no-skill" ? null : system,
    budget_tier: "standard",
    task_id: task,
    trial_index: trial,
    run_status: status,
    validity,
    ...(validity === "valid" ? { ui_resolved: resolved } : {}),
    ...(score == null ? {} : { objective_score: score, objective_max: 100 }),
    wall_time_ms: 1000 + trial,
    tokens: 2000 + trial,
    token_usage: {
      input_tokens: 1500 + trial,
      cached_input_tokens: 700 + trial,
      output_tokens: 500,
      reasoning_output_tokens: 0,
      total_tokens: 2000 + trial,
      observed_components: ["cached_input_tokens", "input_tokens", "output_tokens"],
      input_output_complete: true,
    },
    usage_completeness: {
      evidence_mode: "provider-event",
      available: true,
      input_output_complete: true,
      observed_components: ["cached_input_tokens", "input_tokens", "output_tokens"],
      reasoning_visibility: "not-reported",
      cached_input_visibility: "reported",
    },
    provider_cost_equivalent_usd: 0.5,
    execution_control: {
      comparison_mode: "native-capability",
      effort_semantics: "runtime-native-ordinal-not-cross-provider-equivalent",
      temperature_policy: "runtime-default-frozen",
      timeout_seconds: 900,
      max_concurrency: 1,
      latency_comparison: "eligible",
      retry_policy: "none-primary",
      timeout_policy: "count-as-valid-failure",
      infrastructure_policy: "retain-freeze-and-repreregister",
    },
    tool_calls: 10 + trial,
    human_interventions: 0,
  };
}

describe("UI-Resolve aggregate statistics", () => {
  it("keeps failed trials, reports distributions, reliability, representatives, and paired lift", () => {
    const dir = mkdtempSync(join(tmpdir(), "ui-resolve-aggregate-"));
    const input = join(dir, "runs.json");
    const out = join(dir, "summary.json");
    const records = [
      record({ system: "no-skill", task: "a", trial: 1, resolved: true, score: 60 }),
      record({ system: "no-skill", task: "a", trial: 2, resolved: false, score: 62 }),
      record({ system: "no-skill", task: "a", trial: 3, resolved: true, score: 64 }),
      record({ system: "no-skill", task: "b", trial: 1, resolved: false, score: 55 }),
      record({ system: "no-skill", task: "b", trial: 2, resolved: false, score: 57 }),
      record({ system: "no-skill", task: "b", trial: 3, resolved: true, score: 59 }),
      record({ system: "omd", task: "a", trial: 1, resolved: false, score: null, validity: "invalid-infrastructure", suffix: "-invalid" }),
      record({ system: "omd", task: "a", trial: 1, resolved: true, score: 80 }),
      record({ system: "omd", task: "a", trial: 2, resolved: true, score: 82 }),
      record({ system: "omd", task: "a", trial: 3, resolved: true, score: 84 }),
      record({ system: "omd", task: "b", trial: 1, resolved: true, score: 76 }),
      record({ system: "omd", task: "b", trial: 2, resolved: false, score: null, status: "timed_out" }),
      record({ system: "omd", task: "b", trial: 3, resolved: true, score: 78 }),
    ];
    writeFileSync(input, `${JSON.stringify(records, null, 2)}\n`, "utf8");

    execFileSync(process.execPath, [
      aggregate,
      "--input", input,
      "--out", out,
      "--baseline-system", "no-skill",
      "--bootstrap", "300",
      "--seed", "41",
      "--reliability", "3",
    ], { cwd: repoRoot, encoding: "utf8" });

    const summary = JSON.parse(readFileSync(out, "utf8"));
    const baseline = summary.groups.find((group) => group.system_id === "no-skill");
    const omd = summary.groups.find((group) => group.system_id === "omd");
    expect(baseline.ui_resolved).toMatchObject({ passed: 3, rate: 0.5 });
    expect(omd.runs).toMatchObject({
      scheduled_trials: 6,
      valid_trials: 6,
      complete: 5,
      timed_out: 1,
      invalid_attempts: 1,
      unreplaced_invalid_trials: [],
      completion_rate: 0.8333,
    });
    expect(omd.ui_resolved).toMatchObject({ passed: 5, rate: 0.8333 });
    expect(omd.reliability).toEqual({ k: 3, eligible_tasks: 2, passed_tasks: 1, rate: 0.5 });
    expect(omd.objective_percent).toMatchObject({ count: 5, min: 76, median: 80, max: 84 });
    expect(omd.tokens.count).toBe(6);
    expect(omd.provider_cost_equivalent_usd).toMatchObject({
      count: 6,
      total: 3,
      per_resolved_run: 0.6,
    });
    expect(omd.usage_telemetry).toMatchObject({
      scheduled_valid_runs: 6,
      available_runs: 6,
      input_output_complete_runs: 6,
      input_output_complete_rate: 1,
      reasoning_reported_runs: 0,
      cached_input_reported_runs: 6,
    });
    expect(omd.execution_control).toEqual({
      complete: true,
      consistent: true,
      latency_comparable: true,
    });
    expect(omd.efficiency_publication_ready).toBe(true);
    expect(omd.representative_runs).toEqual({
      worst_run_id: "omd-b-1",
      median_run_id: "omd-a-1",
      best_run_id: "omd-a-3",
    });
    expect(omd.publication_ready).toBe(true);

    expect(summary.paired_comparisons).toHaveLength(1);
    expect(summary.paired_comparisons[0]).toMatchObject({
      candidate_system_id: "omd",
      baseline_system_id: "no-skill",
      matched_pairs: 6,
      resolved_lift_percentage_points: 33.3333,
      win_tie_loss: { wins: 2, ties: 4, losses: 0 },
    });
    expect(summary.paired_comparisons[0].resolved_lift_confidence_95.samples).toBe(300);
    expect(readFileSync(out.replace(/\.json$/, ".md"), "utf8")).toContain("| skill | omd | 6/6 | 83.3%");
  });

  it("fails closed on malformed valid records and duplicate valid attempts", () => {
    const dir = mkdtempSync(join(tmpdir(), "ui-resolve-aggregate-invalid-"));
    const input = join(dir, "runs.json");
    const out = join(dir, "summary.json");
    const malformed = record({ system: "omd", task: "a", trial: 1, resolved: true, score: 80 });
    delete malformed.ui_resolved;
    writeFileSync(input, `${JSON.stringify([malformed])}\n`, "utf8");
    expect(() => execFileSync(process.execPath, [aggregate, "--input", input, "--out", out], {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: "pipe",
    })).toThrow(/ui_resolved must be boolean/i);

    const duplicate = record({ system: "omd", task: "a", trial: 1, resolved: true, score: 80 });
    writeFileSync(input, `${JSON.stringify([duplicate, { ...duplicate, run_id: "duplicate-run" }])}\n`, "utf8");
    expect(() => execFileSync(process.execPath, [aggregate, "--input", input, "--out", out], {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: "pipe",
    })).toThrow(/multiple valid attempts/i);
  });

  it("reports invalid-only systems without crashing paired aggregation", () => {
    const dir = mkdtempSync(join(tmpdir(), "ui-resolve-aggregate-invalid-only-"));
    const input = join(dir, "runs.json");
    const out = join(dir, "summary.json");
    const records = [
      record({
        system: "raw",
        task: "a",
        trial: 1,
        resolved: false,
        score: 81,
        validity: "invalid-attribution",
      }),
      record({
        system: "omd",
        task: "a",
        trial: 1,
        resolved: false,
        score: 85,
        validity: "invalid-attribution",
      }),
    ];
    writeFileSync(input, `${JSON.stringify(records, null, 2)}\n`, "utf8");

    execFileSync(process.execPath, [
      aggregate,
      "--input", input,
      "--out", out,
      "--baseline-system", "raw",
      "--reliability", "1",
    ], { cwd: repoRoot, encoding: "utf8" });

    const summary = JSON.parse(readFileSync(out, "utf8"));
    expect(summary.groups).toHaveLength(2);
    expect(summary.groups.every((group) => (
      group.runs.valid_trials === 0
      && group.runs.invalid_attempts === 1
      && group.publication_ready === false
    ))).toBe(true);
    expect(summary.paired_comparisons).toEqual([]);
  });
});

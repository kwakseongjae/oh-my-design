import { describe, expect, it } from "vitest";
import {
  buildRunRecord,
  classifyRunStatus,
  classifyValidity,
  summarizeTokenUsage,
} from "../../../benchmarks/ui-resolve-bench/scripts/export-run-record.mjs";

const manifest = {
  task: { id: "pricing-conversion-v0.1", version: "0.1.0" },
  variant: {
    id: "omd-portable",
    activation_delta_sha256: "activation-sha",
    track_eligibility: { eligible: true, off_label: false },
  },
  skill: {
    declared_name: "omd:apply",
    source_commit: "abc123",
    source_attestation: { publishable: true, dirty: false },
  },
};

const run = {
  runtime: { model: "gpt-5.6-terra" },
  process: { exit_code: 0, timed_out: false, wall_ms: 1200 },
  output: {
    usage_events: [{ usage: { input_tokens: 100, cached_input_tokens: 60, output_tokens: 25, reasoning_output_tokens: 5 } }],
    total_cost_usd: 1.25,
    model_usage: [{
      model: "gpt-5.6-terra",
      input_tokens: 100,
      cached_input_tokens: 60,
      output_tokens: 25,
      cost_usd: 1.25,
      context_window: 1000000,
      max_output_tokens: 128000,
    }],
    milestones: {
      first_builtin_product_write_ms: 400,
      last_builtin_product_write_ms: 900,
      final_result_ms: 1180,
    },
  },
  workspace: {
    product_changed: true,
    changed_product_files: [{ path: "index.html", status: "modified" }],
  },
};

const score = {
  status: { automated_gate_pass: true },
  points: { deterministic_total: 81, deterministic_max: 85 },
};

describe("UI-Resolve normalized run exporter", () => {
  it("exports a valid skill-family record with delivery evidence", () => {
    const record = buildRunRecord({
      workspace: "/tmp/run-001",
      manifest,
      run,
      score,
      family: "skill",
      systemId: "omd-portable",
      trialIndex: 2,
      suiteVersion: "0.2.0",
      budgetTier: "standard",
    });
    expect(record).toMatchObject({
      run_id: "run-001",
      benchmark_family: "skill",
      system_id: "omd-portable",
      model_id: "gpt-5.6-terra",
      skill_id: "omd:apply",
      harness_id: null,
      task_id: "pricing-conversion-v0.1",
      trial_index: 2,
      run_status: "complete",
      validity: "valid",
      ui_resolved: true,
      objective_score: 81,
      tokens: 125,
      token_usage: {
        input_tokens: 100,
        cached_input_tokens: 60,
        output_tokens: 25,
        reasoning_output_tokens: 5,
        total_tokens: 125,
      },
      provider_cost_equivalent_usd: 1.25,
      runtime_model_usage: [{
        model: "gpt-5.6-terra",
        input_tokens: 100,
        cached_input_tokens: 60,
        output_tokens: 25,
      }],
      runtime_diagnostics: {
        child_exit_code: 0,
        tool_error_count: 0,
        sandbox_error_count: 0,
        sandbox_cwd_error_count: 0,
        milestones: {
          first_builtin_product_write_ms: 400,
          last_builtin_product_write_ms: 900,
          final_result_ms: 1180,
        },
      },
      delivery: {
        product_changed: true,
        changed_product_files: [{ path: "index.html", status: "modified" }],
      },
    });
  });

  it("sums usage without double-counting cached input or reasoning subsets", () => {
    expect(summarizeTokenUsage({
      output: {
        usage_events: [
          { usage: { input_tokens: 10, cached_input_tokens: 7, output_tokens: 4, reasoning_output_tokens: 2 } },
          { token_usage: { input_tokens: 6, cached_input_tokens: 3, output_tokens: 2, reasoning_output_tokens: 1 } },
        ],
      },
    })).toEqual({
      input_tokens: 16,
      cached_input_tokens: 10,
      output_tokens: 6,
      reasoning_output_tokens: 3,
      total_tokens: 22,
    });
  });

  it("invalidates dirty attribution and off-label tasks without hiding run status", () => {
    const dirty = structuredClone(manifest);
    dirty.skill.source_attestation.publishable = false;
    expect(classifyValidity(dirty, "complete", score)).toBe("invalid-attribution");

    const offLabel = structuredClone(manifest);
    offLabel.variant.track_eligibility.off_label = true;
    expect(classifyValidity(offLabel, "complete", score)).toBe("invalid-task");
    expect(classifyRunStatus({ process: { timed_out: true } }, null)).toBe("timed_out");
    expect(classifyRunStatus({ process: { exit_code: 1 } }, null)).toBe("failed");
    expect(classifyRunStatus({
      process: { exit_code: 0 },
      output: { sandbox_error_count: 1 },
    }, score)).toBe("failed");
  });

  it("does not count an unchanged starter as a resolved product delivery", () => {
    const unchangedRun = structuredClone(run);
    unchangedRun.workspace.product_changed = false;
    unchangedRun.workspace.changed_product_files = [];
    const record = buildRunRecord({
      workspace: "/tmp/run-noop",
      manifest,
      run: unchangedRun,
      score,
      family: "skill",
      systemId: "omd-portable",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "standard",
    });
    expect(record.validity).toBe("valid");
    expect(record.delivery.product_changed).toBe(false);
    expect(record.ui_resolved).toBe(false);
  });
});

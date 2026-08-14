import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const CONFIG_PATH = "benchmarks/ui-resolve-bench/config/omd-grok46-wow-preview-score-gate-v0.2.json";

function loadConfig() {
  return JSON.parse(readFileSync(resolve(CONFIG_PATH), "utf8"));
}

describe("grok-4.6 wow-preview score-gate config", () => {
  it("exists and parses as valid JSON", () => {
    expect(existsSync(resolve(CONFIG_PATH))).toBe(true);
    const config = loadConfig();
    expect(config.gate_id).toBe("omd-grok46-wow-preview-score-gate-v0.2");
    expect(config.experiment_id).toBe("omd-grok46-wow-preview-2.0.0-v0.2");
  });

  it("pins the model under test to exactly grok-4.6 with zero retry, replacement, fallback, and substitution", () => {
    const { runtime_contract: runtime } = loadConfig();
    expect(runtime.model).toBe("grok-4.6");
    expect(runtime.provider).toBe("grok-build-cli");
    expect(runtime.retry_count).toBe(0);
    expect(runtime.replacement_count).toBe(0);
    expect(runtime.fallback_count).toBe(0);
    expect(runtime.model_substitution_count).toBe(0);
    expect(runtime.effort_substitution_count).toBe(0);
  });

  it("excludes capacity and usage-limit cells from quality comparison and reports them separately", () => {
    const rule = loadConfig().missing_data_rules.capacity_exclusion;
    expect(rule.status_values).toContain("capacity-exhausted");
    expect(rule.status_values).toContain("usage-limit");
    expect(rule.reporting).toBe("separate");
    expect(rule.scope).toBe("quality_denominator_not_counted");
  });

  it("marks the epoch inconclusive on a second capacity event", () => {
    const rule = loadConfig().missing_data_rules.epoch_inconclusive;
    expect(rule.threshold).toBe(2);
    expect(rule.event_type).toBe("capacity_or_usage_limit");
    expect(rule.consequence).toContain("inconclusive");
  });

  it("treats an arm×task axis with fewer than 2 valid trials as undecidable, never a win or a loss", () => {
    const rule = loadConfig().missing_data_rules.minimum_n_per_axis;
    expect(rule.minimum_valid_trials).toBe(2);
    expect(rule.axis).toBe("arm_x_task");
    expect(rule.consequence).toContain("not_win");
    expect(rule.consequence).toContain("not_loss");
  });

  it("executes in serial round waves r1 then r2 then r3", () => {
    const { wave_execution_rules: waves } = loadConfig();
    expect(waves.execution_pattern).toBe("serial");
    expect(waves.waves.map((wave) => wave.wave_id)).toEqual(["r1", "r2", "r3"]);
  });

  it("re-affirms the missing-data rules in the release gates and forbids Luna caf0 comparison", () => {
    const config = loadConfig();
    expect(config.release_gates.capacity_events_excluded_from_quality_comparison).toBe(true);
    expect(config.release_gates.epoch_inconclusive_if_second_capacity_event).toBe(true);
    expect(config.release_gates.undecidable_arms_excluded_from_release_decision).toBe(true);
    expect(config.claim_policy.public_claim_scope).toContain("grok-4.6");
    expect(config.claim_policy.luna_caf0_comparison_forbidden).toBe(true);
    expect(config.claim_policy.cross_model_score_comparison_allowed).toBe(false);
  });
});

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
        observed_components: [
          "cached_input_tokens",
          "input_tokens",
          "output_tokens",
          "reasoning_output_tokens",
        ],
        input_output_complete: true,
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
        recoverable_tool_error_count: 0,
        infrastructure_tool_error_count: 0,
        optional_verifier_environment_error_count: 0,
        recovered_temp_path_error_count: 0,
        sandbox_error_count: 0,
        sandbox_cwd_error_count: 0,
        agent_tool_call_count: 0,
        agent_tool_error_count: 0,
        requested_agent_ids: [],
        agent_calls: [],
        milestones: {
          first_builtin_product_write_ms: 400,
          last_builtin_product_write_ms: 900,
          final_result_ms: 1180,
        },
      },
      usage_completeness: {
        available: true,
        input_output_complete: true,
        reasoning_visibility: "reported",
        cached_input_visibility: "reported",
      },
      delivery: {
        product_changed: true,
        changed_product_files: [{ path: "index.html", status: "modified" }],
      },
    });
  });

  it("embeds an externally classified proof trace in diagnostics and evidence", () => {
    const proofTrace = {
      schema_version: "0.1",
      runtime: "codex",
      analyzable: true,
      compliance_pass: false,
      browser_recovery_count: 1,
      duplicate_static_closure_count: 0,
      verification_after_ready_count: 0,
    };
    const record = buildRunRecord({
      workspace: "/tmp/run-proof",
      manifest,
      run,
      score,
      family: "skill",
      systemId: "omd-portable",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "standard",
      proofTrace,
    });
    expect(record.runtime_diagnostics.proof_trace).toEqual(proofTrace);
    expect(record.evidence.proof_trace).toBe(".benchmark/proof-trace.json");
  });

  it("embeds the preregistered proof promotion verdict", () => {
    const verdict = {
      enforcement: "promotion-report",
      pass: false,
      reasons: ["browser-recovery-limit"],
    };
    const record = buildRunRecord({
      workspace: "/tmp/run-proof-gate",
      manifest,
      run,
      score,
      family: "skill",
      systemId: "omd-portable",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "standard",
      proofExecutionGate: verdict,
    });
    expect(record.runtime_diagnostics.proof_execution_gate).toEqual(verdict);
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
      observed_components: [
        "cached_input_tokens",
        "input_tokens",
        "output_tokens",
        "reasoning_output_tokens",
      ],
      input_output_complete: true,
    });
  });

  it("normalizes Cursor camelCase usage without counting cached input twice", () => {
    expect(summarizeTokenUsage({
      output: {
        usage_events: [
          {
            usage: {
              inputTokens: 40_435,
              cacheReadTokens: 500_992,
              outputTokens: 16_383,
            },
          },
        ],
      },
    })).toEqual({
      input_tokens: 40_435,
      cached_input_tokens: 500_992,
      output_tokens: 16_383,
      reasoning_output_tokens: 0,
      total_tokens: 56_818,
      observed_components: [
        "cached_input_tokens",
        "input_tokens",
        "output_tokens",
      ],
      input_output_complete: true,
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
    expect(classifyRunStatus({
      process: { exit_code: 0 },
      output: { infrastructure_tool_error_count: 1 },
    }, score)).toBe("failed");

    const displayNameOnly = structuredClone(run);
    displayNameOnly.runtime = {
      ...displayNameOnly.runtime,
      runtime_target: "cursor",
      model_requested: "cursor-grok-4.5-high",
      model_reported: "Cursor Grok 4.5 High",
      model_evidence_mode: "runtime-reported-display-name",
    };
    expect(classifyValidity(manifest, "complete", score, displayNameOnly))
      .toBe("invalid-attribution");
    expect(classifyValidity(
      manifest,
      "complete",
      score,
      displayNameOnly,
      { attributionScope: "internal-registered-display-name" },
    )).toBe("valid");

    const driftedDisplayName = structuredClone(displayNameOnly);
    driftedDisplayName.runtime.model_reported = "Grok 4.5";
    expect(classifyValidity(
      manifest,
      "complete",
      score,
      driftedDisplayName,
      { attributionScope: "internal-registered-display-name" },
    )).toBe("invalid-attribution");
  });

  it("surfaces Internal attribution scope without making it public-eligible", () => {
    const displayNameOnly = structuredClone(run);
    displayNameOnly.runtime = {
      ...displayNameOnly.runtime,
      runtime_target: "cursor",
      model_requested: "cursor-grok-4.5-high",
      model_reported: "Cursor Grok 4.5 High",
      model_evidence_mode: "runtime-reported-display-name",
    };
    const record = buildRunRecord({
      workspace: "/tmp/internal-display-name",
      manifest,
      run: displayNameOnly,
      score,
      family: "skill",
      systemId: "omd-portable",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "high",
      attributionScope: "internal-registered-display-name",
    });
    expect(record.validity).toBe("valid");
    expect(record.attribution_scope).toBe("internal-registered-display-name");
    expect(record.public_model_attribution_eligible).toBe(false);
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

  it("fails closed when an agent harness skips a preregistered specialist", () => {
    const harnessManifest = structuredClone(manifest);
    harnessManifest.variant.kind = "agent-harness";
    harnessManifest.agents = {
      installed: [{ id: "omd-ux-writer" }, { id: "omd-ux-engineer" }],
      required_model: "opus",
      sha256: "agent-bundle-sha",
    };
    const partialHarnessRun = structuredClone(run);
    partialHarnessRun.output.requested_agent_ids = ["omd-ux-writer"];
    partialHarnessRun.output.agent_tool_call_count = 1;
    partialHarnessRun.output.agent_tool_error_count = 0;
    partialHarnessRun.output.agent_calls = [{ agent_id: "omd-ux-writer", requested_model: "opus" }];
    expect(classifyValidity(harnessManifest, "complete", score, partialHarnessRun))
      .toBe("invalid-attribution");

    partialHarnessRun.output.requested_agent_ids.push("omd-ux-engineer");
    partialHarnessRun.output.agent_tool_call_count = 2;
    partialHarnessRun.output.agent_calls.push({ agent_id: "omd-ux-engineer", requested_model: "sonnet" });
    expect(classifyValidity(harnessManifest, "complete", score, partialHarnessRun))
      .toBe("invalid-attribution");
    partialHarnessRun.output.agent_calls[1].requested_model = "opus";
    expect(classifyValidity(harnessManifest, "complete", score, partialHarnessRun)).toBe("valid");
  });
});

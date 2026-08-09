import { describe, expect, it } from "vitest";
import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import {
  buildCodexRoutingAttestation,
  buildRunRecord,
  classifyRunStatus,
  classifyValidity,
  inspectCandidatePreflight,
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
  schema_version: "0.6",
  methodology_epoch: "ui-resolve-objective-2026q3-passive-scroll-v1",
  status: { automated_gate_pass: true },
  points: { deterministic_total: 81, deterministic_max: 85 },
};

function completeBlockFixture({ cellId = "task-a-luna-high", systemId = "luna-high" } = {}) {
  const executionControl = {
    comparison_mode: "effort-scaling",
    admission_normalization_policy: "complete-block-effort-scaling",
  };
  const matrixCell = {
    id: cellId,
    task_id: manifest.task.id,
    variant_id: manifest.variant.id,
    system_id: systemId,
    trial_index: 1,
    runtime: "codex",
    model_id: "gpt-5.6-luna",
    effort: "high",
    execution_control: executionControl,
  };
  return {
    matrixCell,
    lockedPlan: {
      experiment_id: "codex-effort-sweep-fixture",
      cells: [matrixCell],
      effort_sweep_contract: {
        task_set_sha256: "a".repeat(64),
        schedule_sha256: "f".repeat(64),
      },
      lock_manifest: { objective_evaluator_contract_sha256: "1".repeat(64) },
      task_lock_contract: {
        tasks: [{
          task_id: manifest.task.id,
          source_commit: "2".repeat(40),
          git_tree_oid: "3".repeat(40),
          task_tree_sha256: "4".repeat(64),
          source_contract_sha256: "5".repeat(64),
        }],
      },
      skill_lock_contract: {
        source_commit: "6".repeat(40),
        source_tree_sha256: "7".repeat(64),
        skill_tree_sha256: "8".repeat(64),
      },
      provider_routing_contract: {
        cursor_allowed: false,
        allowed_runtime: "codex",
        allowed_model_ids: ["gpt-5.6-luna"],
        allowed_model_effort_pairs: [{ model_id: "gpt-5.6-luna", effort: "high" }],
        fail_closed: true,
      },
      codex_model_effort_contract: {
        cache_sha256: "c".repeat(64),
        models: [{
          model_id: "gpt-5.6-luna",
          model_profile_sha256: "d".repeat(64),
          default_effort: "medium",
          supported_efforts: ["low", "medium", "high"],
        }],
      },
      codex_catalog_snapshot_contract: {
        model_catalog_source_path: "/tmp/catalog/model_catalog.json",
        model_catalog_sha256: "9".repeat(64),
        model_catalog_bytes: 2048,
        model_catalog_source_mode: "immutable-snapshot-only",
        model_catalog_mode: "isolated-copy-before-provider-execution",
        model_catalog_role: "execution-model-authority",
        mutable_model_catalog_fallback_allowed: false,
      },
    },
  };
}

function modelCatalogAuthority(workspace, {
  modelId = "gpt-5.6-luna",
  profileSha256 = "d".repeat(64),
  defaultEffort = "medium",
  supportedEfforts = ["low", "medium", "high"],
} = {}) {
  return {
    schema_version: "0.1",
    mode: "immutable-local-model-catalog-json",
    config_key: "model_catalog_json",
    source: {
      path: "/tmp/catalog/model_catalog.json",
      sha256: "9".repeat(64),
      bytes: 2048,
      source_mode: "immutable-snapshot-only",
    },
    isolated_copy: {
      path: join(workspace, ".benchmark", "codex-home", "model_catalog.json"),
      sha256: "9".repeat(64),
      bytes: 2048,
      copy_mode: "isolated-regular-file",
    },
    selected_profile: {
      model_id: modelId,
      model_profile_sha256: profileSha256,
      default_effort: defaultEffort,
      supported_efforts: supportedEfforts,
    },
    verified_before_provider_execution: true,
    mutable_fallback_allowed: false,
  };
}

describe("UI-Resolve normalized run exporter", () => {
  it("omits sweep-only metadata for legacy direct exports", () => {
    const record = buildRunRecord({
      workspace: "/tmp/run-legacy",
      manifest,
      run,
      score,
      family: "skill",
      systemId: "omd-portable",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "standard",
    });
    expect(record.budget_tier).toBe("standard");
    expect(record).not.toHaveProperty("effort");
    expect(record).not.toHaveProperty("experiment_id");
    expect(record).not.toHaveProperty("task_set_sha256");
    expect(record).not.toHaveProperty("matrix_sha256");
    expect(record.attribution.runtime).not.toHaveProperty("routing_attestation");
  });

  it("emits locked sweep identity and exact Codex routing evidence", () => {
    const { matrixCell, lockedPlan } = completeBlockFixture();
    const codexRun = structuredClone(run);
    codexRun.runtime = {
      runtime_target: "codex",
      agent: "codex-cli",
      model_requested: "gpt-5.6-luna",
      model_reported: "gpt-5.6-luna",
      model_evidence_mode: "provider-observed",
      effort_requested: "high",
      reasoning: "high",
      provider_route: null,
      model_tool_mode_evidence: {
        cache_sha256: "c".repeat(64),
        model_profile_sha256: "d".repeat(64),
      },
      model_catalog_authority: modelCatalogAuthority("/tmp/task-a-luna-high"),
    };
    const record = buildRunRecord({
      workspace: "/tmp/task-a-luna-high",
      manifest,
      run: codexRun,
      score,
      family: "model",
      systemId: "luna-high",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "high",
      executionControl: matrixCell.execution_control,
      matrixCell,
      lockedPlan,
      executionState: { locked_plan_sha256: "b".repeat(64) },
    });
    expect(record).toMatchObject({
      experiment_id: "codex-effort-sweep-fixture",
      task_set_sha256: "a".repeat(64),
      matrix_sha256: "b".repeat(64),
      cell_id: "task-a-luna-high",
      record_kind: "codex-complete-block-effort-scaling-v2",
      variant_id: "omd-portable",
      budget_tier: "high",
      effort: "high",
      sweep_identity: {
        experiment_id: "codex-effort-sweep-fixture",
        locked_plan_sha256: "b".repeat(64),
        schedule_sha256: "f".repeat(64),
        system_id: "luna-high",
        variant_id: "omd-portable",
        skill_id: "omd:apply",
        task_tree_sha256: "4".repeat(64),
      },
      attribution: {
        runtime: {
          routing_attestation: {
            schema_version: "0.2",
            runtime: "codex",
            model_id: "gpt-5.6-luna",
            effort: "high",
            provider_route: "codex",
            provider_effort_argument: "high",
            checks: {
              locked_cell_exact: true,
              runtime_codex: true,
              model_requested_exact: true,
              effort_requested_exact: true,
              provider_effort_argument_exact: true,
              provider_route_accepted: true,
              pinned_profile_supports_effort: true,
              model_catalog_authority_present: true,
              model_catalog_schema_version_exact: true,
              model_catalog_mode_exact: true,
              model_catalog_config_key_exact: true,
              model_catalog_source_path_exact: true,
              model_catalog_source_sha256_exact: true,
              model_catalog_source_bytes_exact: true,
              model_catalog_source_mode_exact: true,
              model_catalog_isolated_path_exact: true,
              model_catalog_isolated_sha256_exact: true,
              model_catalog_isolated_bytes_exact: true,
              model_catalog_copy_mode_exact: true,
              model_catalog_selected_model_exact: true,
              model_catalog_selected_profile_sha256_exact: true,
              model_catalog_selected_default_effort_exact: true,
              model_catalog_selected_effort_order_exact: true,
              model_catalog_selected_effort_supported: true,
              model_catalog_verified_before_provider_execution: true,
              model_catalog_mutable_fallback_forbidden: true,
            },
            pass: true,
          },
        },
      },
      complete_block_outcome: {
        disposition: "success",
        reason: null,
      },
    });
    expect(record.validity).toBe("valid");
  });

  it("normalizes complete-block candidate byte drift as a terminal provider failure", () => {
    const { matrixCell, lockedPlan } = completeBlockFixture();
    const codexRun = structuredClone(run);
    codexRun.runtime = {
      runtime_target: "codex",
      model_requested: "gpt-5.6-luna",
      model_reported: "gpt-5.6-luna",
      model_evidence_mode: "provider-observed",
      effort_requested: "high",
      reasoning: "high",
      provider_route: null,
      model_tool_mode_evidence: {
        cache_sha256: "c".repeat(64),
        model_profile_sha256: "d".repeat(64),
      },
      model_catalog_authority: modelCatalogAuthority("/tmp/task-a-luna-high"),
    };
    const record = buildRunRecord({
      workspace: "/tmp/task-a-luna-high",
      manifest,
      run: codexRun,
      score,
      family: "model",
      systemId: "luna-high",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "high",
      executionControl: matrixCell.execution_control,
      matrixCell,
      lockedPlan,
      executionState: { locked_plan_sha256: "b".repeat(64) },
      candidatePreflight: {
        required: true,
        receipt_present: true,
        receipt_valid: true,
        receipt_state: "passed",
        source_contract_sha256_match: true,
        sealed_inventory_sha256_match: true,
        product_present: true,
        candidate_final_bytes_match: false,
        pass: false,
      },
    });
    expect(record).toMatchObject({
      validity: "valid",
      ui_resolved: false,
      complete_block_outcome: {
        disposition: "terminal-provider-failure",
        reason: "candidate-final-byte-mismatch",
      },
    });
  });

  it("keeps top-level plan hashes as backward-compatible metadata fallbacks", () => {
    const record = buildRunRecord({
      workspace: "/tmp/run-legacy-hashes",
      manifest,
      run,
      score,
      family: "model",
      systemId: "legacy",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "standard",
      lockedPlan: {
        task_set_sha256: "e".repeat(64),
        matrix_sha256: "f".repeat(64),
      },
    });
    expect(record.task_set_sha256).toBe("e".repeat(64));
    expect(record.matrix_sha256).toBe("f".repeat(64));
  });

  it("labels controller score authority separately from the workspace compatibility copy", () => {
    const record = buildRunRecord({
      workspace: "/tmp/matrix/cell-a",
      manifest,
      run,
      score,
      family: "model",
      systemId: "terra-high",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "high",
      scoreEvidence: {
        authority_path: "../.controller-artifacts/cell-a/score.json",
        authority_role: "controller-authority",
        compatibility_path: ".benchmark/score.json",
      },
    });
    expect(record.evidence).toMatchObject({
      score: "../.controller-artifacts/cell-a/score.json",
      score_authority_role: "controller-authority",
      score_compatibility: ".benchmark/score.json",
    });
  });

  it("cannot mark a required failed candidate preflight UI-Resolved", () => {
    const record = buildRunRecord({
      workspace: "/tmp/candidate-outcome",
      manifest,
      run,
      score,
      family: "model",
      systemId: "terra-low",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "low",
      candidatePreflight: { required: true, pass: false, receipt_present: false },
    });
    expect(record.validity).toBe("valid");
    expect(record.ui_resolved).toBe(false);
  });

  it("surfaces an explicitly requested runtime effort without replacing budget_tier", () => {
    const requestedRun = structuredClone(run);
    requestedRun.runtime.effort_requested = "xhigh";
    const record = buildRunRecord({
      workspace: "/tmp/run-explicit-effort",
      manifest,
      run: requestedRun,
      score,
      family: "model",
      systemId: "terra-xhigh",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "legacy-xhigh-label",
    });
    expect(record.effort).toBe("xhigh");
    expect(record.budget_tier).toBe("legacy-xhigh-label");
  });

  it("fails the Codex attestation when requested effort drifts", () => {
    const matrixCell = {
      id: "cell",
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "high",
    };
    const driftedRun = {
      runtime: {
        runtime_target: "codex",
        model_requested: "gpt-5.6-luna",
        effort_requested: "medium",
        reasoning: "medium",
      },
    };
    const attestation = buildCodexRoutingAttestation({
      matrixCell,
      run: driftedRun,
      lockedPlan: {
        cells: [matrixCell],
        provider_routing_contract: {
          cursor_allowed: false,
          allowed_runtime: "codex",
          allowed_model_ids: ["gpt-5.6-luna"],
          allowed_model_effort_pairs: [{ model_id: "gpt-5.6-luna", effort: "high" }],
          fail_closed: true,
        },
        codex_model_effort_contract: {
          cache_sha256: "a".repeat(64),
          models: [{
            model_id: "gpt-5.6-luna",
            model_profile_sha256: "b".repeat(64),
            default_effort: "medium",
            supported_efforts: ["high"],
          }],
        },
      },
    });
    expect(attestation.checks.effort_requested_exact).toBe(false);
    expect(attestation.checks.provider_effort_argument_exact).toBe(false);
    expect(attestation.pass).toBe(false);
  });

  it("fails fresh routing authority on catalog SHA, selected-profile, or effort-order drift", () => {
    const workspace = "/tmp/task-a-luna-high";
    const { matrixCell, lockedPlan } = completeBlockFixture();
    const baselineRuntime = {
      runtime_target: "codex",
      model_requested: matrixCell.model_id,
      effort_requested: matrixCell.effort,
      reasoning: matrixCell.effort,
      model_catalog_authority: modelCatalogAuthority(workspace),
    };
    const mutations = [
      ["model_catalog_source_sha256_exact", (authority) => {
        authority.source.sha256 = "0".repeat(64);
      }],
      ["model_catalog_selected_profile_sha256_exact", (authority) => {
        authority.selected_profile.model_profile_sha256 = "0".repeat(64);
      }],
      ["model_catalog_selected_effort_order_exact", (authority) => {
        authority.selected_profile.supported_efforts.reverse();
      }],
      ["model_catalog_config_key_exact", (authority) => {
        authority.config_key = "models_cache_json";
      }],
    ];
    for (const [check, mutate] of mutations) {
      const runtime = structuredClone(baselineRuntime);
      mutate(runtime.model_catalog_authority);
      const attestation = buildCodexRoutingAttestation({
        workspace,
        matrixCell,
        run: { runtime },
        lockedPlan,
      });
      expect(attestation.schema_version).toBe("0.2");
      expect(attestation.checks[check]).toBe(false);
      expect(attestation.pass).toBe(false);
    }
  });

  it("marks effort-scaling attribution invalid when routing attestation is missing or fails", () => {
    const { matrixCell, lockedPlan } = completeBlockFixture({ cellId: "cell" });
    const driftedRun = structuredClone(run);
    driftedRun.runtime = {
      runtime_target: "codex",
      model_requested: "gpt-5.6-luna",
      effort_requested: "medium",
      reasoning: "medium",
    };
    const record = buildRunRecord({
      workspace: "/tmp/cell",
      manifest,
      run: driftedRun,
      score,
      family: "model",
      systemId: "luna-high",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "high",
      executionControl: {
        comparison_mode: "effort-scaling",
        admission_normalization_policy: "complete-block-effort-scaling",
      },
      matrixCell,
      lockedPlan,
      executionState: { locked_plan_sha256: "b".repeat(64) },
    });
    expect(record.validity).toBe("invalid-attribution");
    expect(record.attribution.runtime.routing_attestation.pass).toBe(false);

    expect(classifyValidity(
      manifest,
      "complete",
      score,
      run,
      {
        executionControl: {
          comparison_mode: "effort-scaling",
          admission_normalization_policy: "complete-block-effort-scaling",
        },
      },
    )).toBe("invalid-attribution");
  });

  it("keeps the effort-scaling schema conditional and historical records optional", () => {
    const schema = JSON.parse(readFileSync(
      resolve("benchmarks/ui-resolve-bench/run-record.schema.json"),
      "utf8",
    ));
    expect(schema.required).not.toContain("effort");
    expect(schema.required).not.toContain("experiment_id");
    const conditional = schema.allOf.find(
      (item) => item.if?.anyOf?.some(
        (branch) => branch.properties?.record_kind?.const
          === "codex-complete-block-effort-scaling-v1",
      ),
    );
    expect(conditional.then.required).toEqual(expect.arrayContaining([
      "experiment_id",
      "task_set_sha256",
      "matrix_sha256",
      "effort",
      "cell_id",
      "attribution",
    ]));
    expect(conditional.then.properties.attribution.properties.runtime.required)
      .toContain("routing_attestation");

    const routingSchema = conditional.then.properties.attribution.properties.runtime
      .properties.routing_attestation;
    const passConditional = routingSchema.allOf.find(
      (item) => item.if?.properties?.pass?.const === true,
    );
    expect(passConditional.then.properties.checks.properties).toMatchObject({
      locked_cell_exact: { const: true },
      pinned_profile_supports_effort: { const: true },
      model_catalog_source_sha256_exact: { const: true },
      model_catalog_selected_profile_sha256_exact: { const: true },
      model_catalog_selected_effort_order_exact: { const: true },
    });
    const freshConditional = schema.allOf.find(
      (item) => item.if?.properties?.record_kind?.const
        === "codex-complete-block-effort-scaling-v2",
    );
    expect(freshConditional.then.properties.attribution.properties.runtime.required)
      .toEqual(expect.arrayContaining(["routing_attestation", "model_catalog_authority"]));
    expect(freshConditional.then.properties.attribution.properties.runtime.properties
      .routing_attestation.properties.schema_version).toEqual({ const: "0.2" });
  });

  it("binds a passed provider-sealed candidate receipt to the final product bytes", () => {
    const workspace = mkdtempSync(join(tmpdir(), "omd-candidate-preflight-"));
    mkdirSync(join(workspace, ".omd"));
    const productPath = join(workspace, "index.html");
    const product = "<!doctype html><title>bound</title>\n";
    writeFileSync(productPath, product);
    const productSha = createHash("sha256").update(product).digest("hex");
    writeFileSync(join(workspace, ".omd", "static-preview-receipt.json"), JSON.stringify({
      schema_version: "0.2",
      kind: "omd-static-preview-receipt",
      guard_version: "locked-typography-source-v1",
      guard_scope: "locked-typography-direct-declarations",
      state: "passed",
      candidate_sha256: productSha,
      source_contract_sha256: "source-sha",
      inventory_sha256: "inventory-sha",
    }));
    expect(inspectCandidatePreflight(workspace, {
      source_contract: { state: "provider-sealed", sha256: "source-sha" },
      inventory: { sha256: "inventory-sha" },
      static_closure_manifest: { product_path: "index.html" },
    })).toMatchObject({
      required: true,
      receipt_present: true,
      receipt_valid: true,
      source_contract_sha256_match: true,
      sealed_inventory_sha256_match: true,
      candidate_final_bytes_match: true,
      pass: true,
    });
  });

  it("keeps frozen v0.1 preview receipts legacy-unverifiable and promotion-ineligible", () => {
    const workspace = mkdtempSync(join(tmpdir(), "omd-candidate-preflight-legacy-"));
    mkdirSync(join(workspace, ".omd"));
    writeFileSync(join(workspace, "index.html"), "<!doctype html><title>legacy</title>\n");
    writeFileSync(join(workspace, ".omd", "static-preview-receipt.json"), JSON.stringify({
      schema_version: "0.1",
      kind: "omd-static-preview-receipt",
      state: "passed",
    }));
    expect(inspectCandidatePreflight(workspace, {
      source_contract: { state: "provider-sealed", sha256: "source-sha" },
      inventory: { sha256: "inventory-sha" },
      static_closure_manifest: { product_path: "index.html" },
    })).toMatchObject({
      required: true,
      receipt_present: true,
      receipt_trust: "legacy-unverifiable",
      receipt_valid: false,
      pass: false,
    });
  });

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
      objective_methodology_epoch: "ui-resolve-objective-2026q3-passive-scroll-v1",
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
    const timedOut = structuredClone(run);
    timedOut.process.timed_out = true;
    timedOut.workspace.product_changed = false;
    expect(classifyValidity(manifest, "timed_out", score, timedOut)).toBe("invalid-infrastructure");
    expect(classifyValidity(
      manifest,
      "timed_out",
      score,
      timedOut,
      { executionControl: { timeout_policy: "count-as-valid-failure" } },
    )).toBe("valid");
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

  it("records a preregistered timeout as valid, unresolved, and usage-unavailable", () => {
    const timedOut = structuredClone(run);
    timedOut.process.timed_out = true;
    timedOut.output.usage_events = [];
    timedOut.output.usage_attribution = {
      available: false,
      evidence_mode: "unavailable",
      reason: "provider-stream-contained-no-usage",
    };
    timedOut.workspace.product_changed = false;
    timedOut.workspace.changed_product_files = [];
    const record = buildRunRecord({
      workspace: "/tmp/run-timeout",
      manifest,
      run: timedOut,
      score,
      family: "skill",
      systemId: "omd-portable",
      trialIndex: 1,
      suiteVersion: "0.2.0",
      budgetTier: "high",
      executionControl: { timeout_policy: "count-as-valid-failure" },
    });
    expect(record.run_status).toBe("timed_out");
    expect(record.validity).toBe("valid");
    expect(record.ui_resolved).toBe(false);
    expect(record.tokens).toBeNull();
    expect(record.usage_completeness.available).toBe(false);
  });

  it("finalizes host-policy admission before the authoritative record is written", () => {
    const record = buildRunRecord({
      workspace: "/tmp/export-host-policy-finalization",
      manifest,
      run,
      score,
      family: "model",
      systemId: "terra-high",
      trialIndex: 1,
      suiteVersion: "1.9.8",
      budgetTier: "high",
      proofTrace: { analyzable: true },
      hostPolicy: {
        installation: { ready: true },
        observed: { available: true, state_files: 1, valid_state_files: 0 },
        gate: { pass: false, reasons: ["installed-policy-state-invalid"] },
      },
      lockedPlan: { shared_host_policy: { require_delivery_ready: true } },
    });
    expect(record.validity).toBe("invalid-infrastructure");
    expect(record.ui_resolved).toBe(false);
    expect(record.runtime_diagnostics.infrastructure_invalid_reason)
      .toBe("installed-host-policy-gate-failed");
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

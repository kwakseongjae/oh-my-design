import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  COMPLETE_BLOCK_BASE_PAIR_ORDER,
  COMPLETE_BLOCK_SCHEDULE_WAVES,
  completeBlockScheduleSha256,
  completeBlockTaskSetSha256,
  observeTaskSourceAuthority,
  prepareArgsForCell,
  validateCodexModelEffortContract,
  validateControlContract,
  validateRunMatrixPlan,
} from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";
import { sha256 } from "../../../benchmarks/ui-resolve-bench/scripts/_lib.mjs";
import { currentObjectiveMethodology } from "../../../benchmarks/ui-resolve-bench/scripts/objective-methodology-contract.mjs";

const immutableAuthFixtureRoot = mkdtempSync(join(tmpdir(), "omd-auth-snapshot-"));
const immutableAuthFixturePath = join(immutableAuthFixtureRoot, "auth.json");
const immutableAuthFixtureBytes = Buffer.from('{"fixture":"immutable-auth"}\n');
writeFileSync(immutableAuthFixturePath, immutableAuthFixtureBytes);

function plan(overrides = {}) {
  return {
    schema_version: "0.1",
    experiment_id: "harness-efficiency-1.9.7",
    output_root: "/tmp/u197",
    cells: [
      {
        id: "pricing-t1-portable",
        task_id: "pricing-conversion-v0.1",
        variant_id: "omd-portable",
        system_id: "omd-portable",
        runtime: "claude-code",
        model_id: "claude-opus-4-8",
        effort: "xhigh",
        timeout_seconds: 900,
        trial_index: 1,
      },
    ],
    ...overrides,
  };
}

function controlContract(overrides = {}) {
  return {
    comparison_mode: "native-capability",
    effort_semantics: "runtime-native-ordinal-not-cross-provider-equivalent",
    temperature_policy: "runtime-default-frozen",
    timeout_seconds: 900,
    max_concurrency: 1,
    latency_comparison: "eligible",
    retry_policy: "none-primary",
    timeout_policy: "count-as-valid-failure",
    infrastructure_policy: "retain-freeze-and-repreregister",
    task_order_policy: "balanced-rotation",
    token_budget: {
      mode: "observed-only",
      limit_tokens: null,
      usage_required: true,
      account_components: ["input", "cached_input", "output", "reasoning_output"],
      cached_input_separate: true,
      cost_policy: "provider-reported-or-pinned-price-equivalent",
    },
    step_budget: {
      mode: "observed-only",
      limit_steps: null,
    },
    ...overrides,
  };
}

function completeBlockEffortPlan() {
  const models = [
    ["gpt-5.6-luna", "medium", ["low", "medium", "high", "xhigh", "max"]],
    ["gpt-5.6-terra", "medium", ["low", "medium", "high", "xhigh", "max", "ultra"]],
    ["gpt-5.6-sol", "low", ["low", "medium", "high", "xhigh", "max", "ultra"]],
  ].map(([model_id, default_effort, supported_efforts], index) => ({
    model_id,
    model_profile_sha256: String(index + 1).repeat(64),
    default_effort,
    supported_efforts,
  }));
  const orderedPairs = models.flatMap((model) => model.supported_efforts.map((effort) => ({
    model_id: model.model_id,
    effort,
  })));
  const tasks = ["task-alpha-v0.1", "task-beta-v0.1", "task-gamma-v0.1"];
  const locks = tasks.map((task_id, index) => {
    const digest = String(index + 4).repeat(64);
    const task_tree_files = [{ path: "task.json", mode: 0o644, bytes: 2, sha256: digest }];
    const task_tree_sha256 = sha256(`task.json\0${0o644}\0${digest}`);
    return {
      task_id,
      source_commit: "b".repeat(40),
      git_tree_oid: String(index + 7).repeat(40),
      observed_task_tree_sha256: task_tree_sha256,
      task_tree_sha256,
      task_tree_files,
      prompt_sha256: digest,
      starter_sha256: digest,
      baseline_evidence_sha256: digest,
      baseline_provenance_sha256: digest,
      baseline_methodology: currentObjectiveMethodology(),
      source_contract_sha256: digest,
    };
  });
  const taskByLabel = new Map(["A", "B", "C"].map((label, index) => [label, tasks[index]]));
  const cells = COMPLETE_BLOCK_SCHEDULE_WAVES.flatMap((wave, waveIndex) => {
    const pairs = [
      ...COMPLETE_BLOCK_BASE_PAIR_ORDER.slice(wave.rotation),
      ...COMPLETE_BLOCK_BASE_PAIR_ORDER.slice(0, wave.rotation),
    ];
    return pairs.map((key, position) => {
      const [model_id, effort] = key.split("/");
      const taskLabel = wave.task_assignments[position];
      return {
        id: `wave-${waveIndex + 1}-position-${position + 1}`,
        task_id: taskByLabel.get(taskLabel),
        variant_id: "omd-portable-current",
        system_id: "omd-apply-current",
        runtime: "codex",
        model_id,
        effort,
        timeout_seconds: 720,
        trial_index: 1,
        schedule_wave: waveIndex + 1,
        schedule_position: position + 1,
        schedule_task_label: taskLabel,
      };
    });
  });
  const taskSetSha256 = completeBlockTaskSetSha256(locks);
  const scheduleSha256 = completeBlockScheduleSha256(cells);
  const snapshot = {
    enforcement_mode: "exact-runtime-per-invocation",
    auth_json_source_path: immutableAuthFixturePath,
    auth_json_source_mode: "immutable-snapshot-only",
    auth_json_sha256: sha256(immutableAuthFixtureBytes),
    auth_json_bytes: immutableAuthFixtureBytes.length,
    auth_json_mode: "isolated-copy-before-provider-execution",
    mutable_auth_fallback_allowed: false,
    models_cache_source_path: "/private/tmp/omd-auth-fixture/models_cache.json",
    models_cache_sha256: "a".repeat(64),
    models_cache_source_mode: "immutable-snapshot-only",
    mutable_models_cache_fallback_allowed: false,
    codex_cli: {
      executable_path: "/private/tmp/omd-cli-fixture/codex",
      native_executable_path: "/private/tmp/omd-cli-fixture/codex-native",
      version: "0.147.0",
      binary_sha256: "e".repeat(64),
      native_binary_sha256: "f".repeat(64),
    },
    cli_cache_client_version_policy: "require-exact-match",
    cli_cache_client_version_mismatch_justification: null,
  };
  return plan({
    schema_version: "0.3",
    suite_version: "ui-resolve-v0.2",
    product_version: "fixture",
    execution_purpose: "complete-block-effort-scaling",
    preregistration_authority_contract: {
      schema_version: "0.1",
      receipt_ref: "PREREGISTRATION.receipt.json",
      binding: "exact-plan-file-bytes-sha256",
      receipt_required_before_preparation: true,
      plan_mutation_allowed_after_receipt: false,
    },
    family: "model",
    control_contract: controlContract({
      comparison_mode: "effort-scaling",
      task_order_policy: "fixed-preregistered",
      admission_normalization_policy: "complete-block-effort-scaling",
      timeout_seconds: 720,
      latency_comparison: "descriptive-only",
      replacement_policy: "none",
      fallback_policy: "none",
      model_substitution_policy: "none",
      effort_substitution_policy: "none",
      task_substitution_policy: "none",
      pacing: {
        policy: "fixed-inter-cell",
        inter_cell_delay_seconds: 30,
        applies_between_cells_only: true,
        counts_toward_cell_wall_time: false,
      },
    }),
    codex_model_effort_contract: {
      cache_sha256: "a".repeat(64),
      cache_fetched_at: "2026-08-09T04:32:08Z",
      cache_client_version: "0.147.0",
      models,
    },
    codex_catalog_snapshot_contract: snapshot,
    effort_sweep_contract: {
      required_cells: 51,
      tasks: 3,
      trials_per_task_pair: 1,
      complete_block_required: true,
      reliability_metric: null,
      ordered_model_effort_pairs: orderedPairs,
      task_set_sha256: taskSetSha256,
      schedule_sha256: scheduleSha256,
    },
    provider_routing_contract: {
      cursor_allowed: false,
      claude_code_allowed: false,
      allowed_runtime: "codex",
      allowed_model_ids: models.map((model) => model.model_id),
      allowed_model_effort_pairs: orderedPairs,
      aliases_allowed: false,
      retry_allowed: false,
      replacement_allowed: false,
      fallback_allowed: false,
      model_substitution_allowed: false,
      effort_substitution_allowed: false,
      task_substitution_allowed: false,
      fail_closed: true,
    },
    task_lock_contract: { source_commit: "b".repeat(40), task_set_sha256: taskSetSha256, tasks: locks },
    skill_lock_contract: {
      source_commit: "b".repeat(40),
      source_tree_sha256: "c".repeat(64),
      skill_tree_sha256: "d".repeat(64),
    },
    schedule_contract: {
      schema_version: "0.1",
      policy: "balanced-three-wave-interleaved",
      canonicalization: "sha256-json-stringify-ordered-cell-schedule-v1",
      task_labels: { A: tasks[0], B: tasks[1], C: tasks[2] },
      base_model_effort_pair_order: [...COMPLETE_BLOCK_BASE_PAIR_ORDER],
      wave_rotations: COMPLETE_BLOCK_SCHEDULE_WAVES.map((wave) => wave.rotation),
      wave_task_assignments: COMPLETE_BLOCK_SCHEDULE_WAVES.map((wave) => [...wave.task_assignments]),
      schedule_sha256: scheduleSha256,
    },
    checkpoint_continuation_contract: {
      max_new_cells_per_invocation: 1,
      preserve_completed_cells: true,
      completed_root_not_resumable: true,
    },
    comparison_claim_contract: {
      claim: "internal-effort-scaling-compatibility",
      publication_tier: "internal-effort-scaling-compatibility",
      descriptive_only: true,
      requires_complete_51_cell_block: true,
      cross_model_pooling_allowed: false,
      forbid_claims: [
        "model-superiority",
        "model-ranking",
        "cross-model-effort-equivalence",
        "statistical-superiority",
        "industry-leader",
        "2.0-release-gate-from-this-test-alone",
      ],
    },
    interpretation_contract: {
      mode: "complete-block-only",
      interpretation_allowed_before_all_51_terminal: false,
      incomplete_block_disposition: "freeze-without-comparative-claim",
      unit_of_analysis: "task-specific-model-effort-cell",
      cross_model_pooling_allowed: false,
      reliability_interpretation_allowed: false,
    },
    exposure_evidence_contract: {
      scope: "generator-invocation-only",
      evidence: "generation_attestation",
      historical_task_exposure: "unknown-not-asserted",
      prior_task_exposure_claim_made: false,
    },
    lock_manifest: {
      task_set_sha256: taskSetSha256,
      schedule_sha256: scheduleSha256,
      codex_catalog_snapshot_contract_sha256: sha256(JSON.stringify(snapshot)),
    },
    cells,
  });
}

describe("UI-Resolve run matrix preparation", () => {
  it("accepts a frozen, unique matrix plan", () => {
    expect(validateRunMatrixPlan(plan()).cells).toHaveLength(1);
  });

  it("validates optional installed host-policy completion gates", () => {
    const common = {
      task_id: "caption-cue-timing-review-v0.1",
      variant_id: "omd-portable-proof-close-latch-candidate",
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "high",
      timeout_seconds: 900,
      trial_index: 1,
    };
    const current = plan({
      host_policy_comparison: {
        target_runtime: "codex",
        sole_arm_delta: "project-proof-policy-installation",
        require_installed_state: true,
        require_delivery_ready: true,
        require_browser_attempt: true,
        max_unblocked_browser_recovery_count: 0,
        max_unblocked_duplicate_static_closure_count: 0,
        max_unblocked_verification_after_ready_count: 0,
      },
      cells: [
        { ...common, id: "controller", system_id: "controller", host_policy_mode: "controller-observation" },
        { ...common, id: "policy", system_id: "policy", host_policy_mode: "installed-opt-in" },
      ],
    });
    expect(validateRunMatrixPlan(current).host_policy_comparison).toMatchObject({
      require_delivery_ready: true,
      require_browser_attempt: true,
    });
    current.host_policy_comparison.require_delivery_ready = "yes";
    expect(() => validateRunMatrixPlan(current)).toThrow("require_delivery_ready must be boolean");
  });

  it("installs one equal proof policy across skill-comparison cells", () => {
    const shared = {
      target_runtime: "codex",
      mode: "installed-opt-in",
      require_installed_state: true,
      require_delivery_ready: true,
      require_browser_attempt: true,
      max_unblocked_browser_recovery_count: 0,
      max_unblocked_duplicate_static_closure_count: 0,
      max_unblocked_verification_after_ready_count: 0,
    };
    const common = {
      task_id: "spectrum-allocation-review-v0.1",
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "high",
      timeout_seconds: 900,
      trial_index: 1,
      host_policy_mode: "installed-opt-in",
    };
    const current = plan({
      shared_host_policy: shared,
      cells: [
        { ...common, id: "close", system_id: "close", variant_id: "omd-portable-proof-close-latch-candidate" },
        { ...common, id: "readable", system_id: "readable", variant_id: "omd-portable-readable-reflow-candidate" },
      ],
    });
    expect(validateRunMatrixPlan(current).shared_host_policy).toEqual(shared);

    current.cells[1].host_policy_mode = "controller-observation";
    expect(() => validateRunMatrixPlan(current)).toThrow("must match shared_host_policy.mode");
  });

  it("allows browser proof without claiming installed host enforcement", () => {
    const current = plan({
      browser_execution_contract: {
        require_browser_proof: true,
        runtime_dir_shared: true,
        exact_named_socket: true,
      },
      cells: [{
        ...plan().cells[0],
        runtime: "codex",
        model_id: "gpt-5.6-luna",
        effort: "high",
      }],
    });
    expect(validateRunMatrixPlan(current).browser_execution_contract.require_browser_proof).toBe(true);
    expect(current.cells[0]).not.toHaveProperty("host_policy_mode");
    current.browser_execution_contract.exact_named_socket = false;
    expect(() => validateRunMatrixPlan(current)).toThrow("shared runtime and exact named socket");
  });

  it("accepts schema 0.2 only with suite, product, and purpose provenance", () => {
    const current = plan({
      schema_version: "0.2",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.39",
      execution_purpose: "runtime-contract-calibration",
    });
    expect(validateRunMatrixPlan(current).product_version).toBe("1.9.39");
    delete current.execution_purpose;
    expect(() => validateRunMatrixPlan(current)).toThrow("execution_purpose");
  });

  it("requires a compute-control contract for cross-runtime schema 0.3", () => {
    const current = plan({
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.45",
      execution_purpose: "internal-model-comparison",
      family: "model",
      control_contract: controlContract(),
    });
    expect(validateRunMatrixPlan(current).control_contract.comparison_mode)
      .toBe("native-capability");
    expect(validateControlContract(current).latency_comparison).toBe("eligible");

    const missing = structuredClone(current);
    delete missing.control_contract;
    expect(() => validateRunMatrixPlan(missing)).toThrow("control_contract");
  });

  it("rejects false effort equivalence and unenforceable budget claims", () => {
    const current = plan({
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.45",
      execution_purpose: "internal-model-comparison",
      family: "model",
      control_contract: controlContract(),
    });

    current.control_contract.effort_semantics = "high-is-equal-everywhere";
    expect(() => validateRunMatrixPlan(current)).toThrow("cross-provider effort equivalence");

    current.control_contract = controlContract({
      token_budget: {
        ...controlContract().token_budget,
        mode: "hard-cap",
        limit_tokens: null,
      },
    });
    expect(() => validateRunMatrixPlan(current)).toThrow("limit_tokens");

    current.control_contract = controlContract({ max_concurrency: 2 });
    expect(() => validateRunMatrixPlan(current)).toThrow("max_concurrency 1");
  });

  it("validates explicit inter-cell pacing without changing per-cell wall time", () => {
    const current = plan({
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.53",
      execution_purpose: "cursor-capacity-pacing-calibration",
      family: "skill",
      control_contract: controlContract({
        pacing: {
          policy: "fixed-inter-cell",
          inter_cell_delay_seconds: 120,
          applies_between_cells_only: true,
          counts_toward_cell_wall_time: false,
        },
      }),
    });
    expect(validateControlContract(current).pacing.inter_cell_delay_seconds).toBe(120);

    current.control_contract.pacing.inter_cell_delay_seconds = 0;
    expect(() => validateRunMatrixPlan(current)).toThrow("positive delay");

    current.control_contract.pacing.inter_cell_delay_seconds = 120;
    current.control_contract.pacing.counts_toward_cell_wall_time = true;
    expect(() => validateRunMatrixPlan(current)).toThrow("outside per-cell wall time");

    current.control_contract.pacing = {
      policy: "none",
      inter_cell_delay_seconds: 1,
      applies_between_cells_only: true,
      counts_toward_cell_wall_time: false,
    };
    expect(() => validateRunMatrixPlan(current)).toThrow("requires zero delay");
  });

  it("preserves legacy task/trial/system uniqueness outside effort scaling", () => {
    const value = plan();
    value.cells.push({ ...value.cells[0], id: "pricing-t1-portable-copy" });
    expect(() => validateRunMatrixPlan(value)).toThrow("duplicate task/trial/system cell");

    value.cells[1].effort = "high";
    expect(() => validateRunMatrixPlan(value)).toThrow("duplicate task/trial/system cell");
  });

  it("rejects relative output roots and supports every current Codex effort label", () => {
    expect(() => validateRunMatrixPlan(plan({ output_root: "tmp/u197" }))).toThrow("absolute path");
    expect(() => validateRunMatrixPlan(plan({ vendors_root: "tmp/vendors" }))).toThrow("vendors_root");
    expect(() => validateRunMatrixPlan(plan({ attribution_scope: "public-display-name" })))
      .toThrow("attribution_scope");
    expect(validateRunMatrixPlan(plan({
      attribution_scope: "internal-registered-display-name",
    })).attribution_scope).toBe("internal-registered-display-name");
    const value = plan();
    value.cells[0].effort = "ultra";
    expect(validateRunMatrixPlan(value).cells[0].effort).toBe("ultra");
    value.cells[0].effort = "extreme";
    expect(() => validateRunMatrixPlan(value)).toThrow("effort is invalid");
  });

  it("pins every schema 0.3 Codex cell to an exact model-effort profile", () => {
    const contract = {
      cache_sha256: "a".repeat(64),
      cache_fetched_at: "2026-08-09T04:32:08Z",
      cache_client_version: "0.146.1",
      models: [{
        model_id: "gpt-5.6-terra",
        model_profile_sha256: "b".repeat(64),
        default_effort: "medium",
        supported_efforts: ["low", "medium", "high", "xhigh", "max", "ultra"],
      }],
    };
    const current = plan({
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.812",
      execution_purpose: "codex-model-effort-validation",
      family: "model",
      control_contract: controlContract(),
      codex_model_effort_contract: contract,
      cells: [{
        ...plan().cells[0],
        id: "terra-ultra",
        runtime: "codex",
        model_id: "gpt-5.6-terra",
        effort: "ultra",
      }],
    });
    expect(validateCodexModelEffortContract(current)).toEqual(contract);
    expect(validateRunMatrixPlan(current).cells[0].effort).toBe("ultra");

    const absent = structuredClone(current);
    absent.cells[0].model_id = "gpt-5.6-sol";
    expect(() => validateRunMatrixPlan(absent)).toThrow("Codex model is absent");

    const unsupported = structuredClone(current);
    unsupported.codex_model_effort_contract.models[0].supported_efforts = ["low", "medium"];
    expect(() => validateRunMatrixPlan(unsupported)).toThrow("Codex effort is unsupported");

    const legacy = plan({ codex_model_effort_contract: contract });
    expect(() => validateRunMatrixPlan(legacy)).toThrow("requires schema 0.3");
  });

  it("does not impose Codex profile pins on non-Codex cells", () => {
    const current = plan({
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.812",
      execution_purpose: "non-codex-control",
      family: "model",
      control_contract: controlContract(),
    });
    expect(validateRunMatrixPlan(current).cells[0].runtime).toBe("claude-code");
  });

  it("validates one repeated reliability arm across identical task trial sets", () => {
    const digestFields = (taskId, digit) => ({
      task_id: taskId,
      task_tree_sha256: digit.repeat(64),
      prompt_sha256: digit.repeat(64),
      starter_sha256: digit.repeat(64),
      baseline_evidence_sha256: digit.repeat(64),
      source_contract_sha256: digit.repeat(64),
    });
    const tasks = ["task-alpha-v0.1", "task-beta-v0.1"];
    const cells = tasks.flatMap((taskId, taskIndex) => [1, 2, 3].map((trialIndex) => ({
      id: `task-${taskIndex + 1}-trial-${trialIndex}`,
      task_id: taskId,
      variant_id: "omd-portable",
      system_id: "omd-portable",
      runtime: "codex",
      model_id: "gpt-5.6-luna",
      effort: "high",
      timeout_seconds: 900,
      trial_index: trialIndex,
    })));
    const current = plan({
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.1",
      product_version: "1.9.812",
      execution_purpose: "multi-task-repeated-reliability",
      family: "skill",
      control_contract: controlContract({
        task_order_policy: "fixed-preregistered",
        admission_normalization_policy: "multi-task-repeated-reliability",
      }),
      task_lock_contract: {
        tasks: [digestFields(tasks[0], "a"), digestFields(tasks[1], "b")],
      },
      cells,
    });
    expect(validateRunMatrixPlan(current).cells).toHaveLength(6);

    const uneven = structuredClone(current);
    uneven.cells.pop();
    expect(() => validateRunMatrixPlan(uneven)).toThrow("identical positive trial sets");

    const secondArm = structuredClone(current);
    secondArm.cells[5].effort = "xhigh";
    expect(() => validateRunMatrixPlan(secondArm)).toThrow("one shared arm");

    const wrongLockOrder = structuredClone(current);
    wrongLockOrder.task_lock_contract.tasks.reverse();
    expect(() => validateRunMatrixPlan(wrongLockOrder)).toThrow("first task occurrence order");
  });

  it("validates the exact 3-task × 17-pair complete effort block without Reliability semantics", () => {
    const current = completeBlockEffortPlan();
    expect(validateRunMatrixPlan(current).cells).toHaveLength(51);

    const mismatchedCliCache = structuredClone(current);
    mismatchedCliCache.codex_catalog_snapshot_contract.codex_cli.version = "0.146.1";
    mismatchedCliCache.codex_catalog_snapshot_contract.cli_cache_client_version_policy =
      "explicit-locked-mismatch";
    mismatchedCliCache.codex_catalog_snapshot_contract
      .cli_cache_client_version_mismatch_justification =
        "independently pinned without a compatibility claim";
    mismatchedCliCache.lock_manifest.codex_catalog_snapshot_contract_sha256 = sha256(
      JSON.stringify(mismatchedCliCache.codex_catalog_snapshot_contract),
    );
    expect(() => validateRunMatrixPlan(mismatchedCliCache))
      .toThrow("exact catalog/auth/cache/CLI binding drift");

    const missingPair = structuredClone(current);
    missingPair.cells.pop();
    expect(() => validateRunMatrixPlan(missingPair)).toThrow("3 tasks × 17 pairs = 51 cells");

    const interleaved = structuredClone(current);
    const taskIds = interleaved.task_lock_contract.tasks.map((task) => task.task_id);
    const taskGroups = taskIds.map((taskId, taskIndex) => {
      const group = interleaved.cells.filter((cell) => cell.task_id === taskId);
      return [...group.slice(taskIndex), ...group.slice(0, taskIndex)];
    });
    interleaved.cells = Array.from({ length: 17 }, (_, pairIndex) => (
      taskGroups.map((group) => group[pairIndex])
    )).flat();
    expect(() => validateRunMatrixPlan(interleaved)).toThrow("exact ordered schedule blueprint");

    const exactDuplicate = structuredClone(current);
    exactDuplicate.cells[1] = {
      ...exactDuplicate.cells[0],
      id: exactDuplicate.cells[1].id,
    };
    expect(() => validateRunMatrixPlan(exactDuplicate))
      .toThrow("duplicate task/trial/system/model/effort cell");

    const semanticDrift = structuredClone(current);
    semanticDrift.cells.at(-1).system_id = "model-specific-system";
    expect(() => validateRunMatrixPlan(semanticDrift)).toThrow("semantic arm field system_id");

    const reliability = structuredClone(current);
    reliability.reliability_contract = { required_cells: 51 };
    expect(() => validateRunMatrixPlan(reliability)).toThrow("forbids a Reliability contract");

    const routingAlias = structuredClone(current);
    routingAlias.provider_routing_contract.allowed_model_ids[0] = "gpt-5.6-luna-preview";
    expect(() => validateRunMatrixPlan(routingAlias)).toThrow("provider routing must exactly forbid");

    const pairExpansionDrift = structuredClone(current);
    pairExpansionDrift.effort_sweep_contract.ordered_model_effort_pairs.reverse();
    expect(() => validateRunMatrixPlan(pairExpansionDrift)).toThrow("ordered Codex model-effort expansion");
  });

  it("validates optional harness delivery gates before workspace preparation", () => {
    const value = plan({
      harness_delivery_gates: {
        variant_kinds: ["agent-harness"],
        first_product_write_ms_max: 450000,
        last_advisory_to_first_product_write_ms_max: 90000,
        require_targeted_first_product_edit: true,
        forbid_replacement_verifier: true,
      },
    });
    expect(validateRunMatrixPlan(value).harness_delivery_gates.variant_kinds).toEqual(["agent-harness"]);
    expect(validateRunMatrixPlan(value).harness_delivery_gates.first_product_write_ms_max).toBe(450000);
    expect(validateRunMatrixPlan(value).harness_delivery_gates.last_advisory_to_first_product_write_ms_max).toBe(90000);
    expect(validateRunMatrixPlan(value).harness_delivery_gates.require_targeted_first_product_edit).toBe(true);

    expect(() => validateRunMatrixPlan(plan({
      harness_delivery_gates: {
        first_product_write_ms_max: 0,
        forbid_replacement_verifier: true,
      },
    }))).toThrow("first_product_write_ms_max");

    expect(() => validateRunMatrixPlan(plan({
      harness_delivery_gates: {
        first_product_write_ms_max: 450000,
        last_advisory_to_first_product_write_ms_max: 0,
        forbid_replacement_verifier: true,
      },
    }))).toThrow("last_advisory_to_first_product_write_ms_max");

    expect(() => validateRunMatrixPlan(plan({
      harness_delivery_gates: {
        first_product_write_ms_max: 450000,
        require_targeted_first_product_edit: "yes",
        forbid_replacement_verifier: true,
      },
    }))).toThrow("require_targeted_first_product_edit");

    expect(() => validateRunMatrixPlan(plan({
      harness_delivery_gates: {
        variant_kinds: [],
        first_product_write_ms_max: 450000,
        forbid_replacement_verifier: true,
      },
    }))).toThrow("variant_kinds");
  });

  it("validates report-only proof execution gates for supported runtimes", () => {
    const value = plan({
      proof_execution_gates: {
        system_ids: ["omd-portable"],
        enforcement: "promotion-report",
        require_analyzable: true,
        max_browser_recovery_count: 0,
        max_duplicate_static_closure_count: 0,
        max_verification_after_ready_count: 0,
        require_closed_reflow_artifact: true,
        require_measured_browser_attempt: true,
        require_exact_named_consumer_attachment: true,
        shipped_runner_system_ids: ["omd-portable"],
        shipped_runner_command_suffix: "scripts/reflow-browser.py",
      },
    });
    value.cells[0].runtime = "codex";
    expect(validateRunMatrixPlan(value).proof_execution_gates.max_browser_recovery_count).toBe(0);

    const unsupported = structuredClone(value);
    unsupported.cells[0].runtime = "claude-code";
    expect(() => validateRunMatrixPlan(unsupported)).toThrow("only codex or cursor");

    const unknown = structuredClone(value);
    unknown.proof_execution_gates.system_ids = ["missing-system"];
    expect(() => validateRunMatrixPlan(unknown)).toThrow(/target at least one|unknown system/);

    const malformed = structuredClone(value);
    malformed.proof_execution_gates.max_browser_recovery_count = -1;
    expect(() => validateRunMatrixPlan(malformed)).toThrow("non-negative integer");

    const malformedArtifactGate = structuredClone(value);
    malformedArtifactGate.proof_execution_gates.require_closed_reflow_artifact = "yes";
    expect(() => validateRunMatrixPlan(malformedArtifactGate)).toThrow("must be boolean");

    const malformedRunnerIds = structuredClone(value);
    malformedRunnerIds.proof_execution_gates.shipped_runner_system_ids = [];
    expect(() => validateRunMatrixPlan(malformedRunnerIds)).toThrow("non-empty string array");
  });

  it("maps a cell to the isolated sandbox preparer without provider execution", () => {
    expect(prepareArgsForCell(plan().cells[0], "/tmp/u197/pricing-t1-portable")).toEqual([
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-portable",
      "--runtime", "claude-code",
      "--out", "/tmp/u197/pricing-t1-portable",
    ]);
    expect(prepareArgsForCell(
      plan().cells[0],
      "/tmp/u197/pricing-t1-portable",
      { vendorsRoot: "/tmp/pinned-vendors" },
    )).toEqual([
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-portable",
      "--runtime", "claude-code",
      "--vendors", "/tmp/pinned-vendors",
      "--out", "/tmp/u197/pricing-t1-portable",
    ]);
    expect(prepareArgsForCell(
      plan().cells[0],
      "/tmp/u197/pricing-t1-portable",
      {
        taskSourceCommit: "b".repeat(40),
        authSnapshot: {
          auth_json_source_path: immutableAuthFixturePath,
          auth_json_sha256: sha256(immutableAuthFixtureBytes),
          auth_json_bytes: immutableAuthFixtureBytes.length,
        },
      },
    )).toEqual([
      "--task", "pricing-conversion-v0.1",
      "--variant", "omd-portable",
      "--runtime", "claude-code",
      "--task-source-commit", "b".repeat(40),
      "--auth-json-source", immutableAuthFixturePath,
      "--auth-json-sha256", sha256(immutableAuthFixtureBytes),
      "--auth-json-bytes", String(immutableAuthFixtureBytes.length),
      "--out", "/tmp/u197/pricing-t1-portable",
    ]);
  });

  it("copies the immutable auth snapshot as exact regular-file bytes into isolated CODEX_HOME", () => {
    const out = join(mkdtempSync(join(tmpdir(), "omd-auth-copy-")), "workspace");
    const prepareSandbox = resolve(
      "benchmarks/ui-resolve-bench/scripts/prepare-sandbox.mjs",
    );
    execFileSync(process.execPath, [
      prepareSandbox,
      "--task", "pricing-conversion-v0.1",
      "--variant", "raw-design-md",
      "--runtime", "codex",
      "--auth-json-source", immutableAuthFixturePath,
      "--auth-json-sha256", sha256(immutableAuthFixtureBytes),
      "--auth-json-bytes", String(immutableAuthFixtureBytes.length),
      "--out", out,
    ]);
    expect(readFileSync(join(out, ".codex/auth.json"))).toEqual(immutableAuthFixtureBytes);
    expect(JSON.parse(readFileSync(join(out, ".benchmark/manifest.json"), "utf8")))
      .toMatchObject({
        runtime_auth_snapshot: {
          source_mode: "immutable-snapshot-only",
          copy_mode: "isolated-regular-file",
          sha256: sha256(immutableAuthFixtureBytes),
          bytes: immutableAuthFixtureBytes.length,
          mutable_fallback_allowed: false,
          verified_before_provider_execution: true,
        },
      });
  });

  it("independently observes task-root bytes and modes against the source commit", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-task-authority-"));
    const taskRoot = join(root, "tasks", "task-alpha-v0.1");
    mkdirSync(join(taskRoot, "starter"), { recursive: true });
    writeFileSync(join(taskRoot, "task.json"), "{}\n");
    writeFileSync(join(taskRoot, "PROMPT.md"), "Prompt\n");
    writeFileSync(join(taskRoot, "starter", "index.html"), "<main>alpha</main>\n");
    execFileSync("git", ["-C", root, "init", "--quiet"]);
    execFileSync("git", ["-C", root, "config", "user.name", "OmD Test"]);
    execFileSync("git", ["-C", root, "config", "user.email", "omd-test@local.invalid"]);
    execFileSync("git", ["-C", root, "add", "."]);
    execFileSync("git", ["-C", root, "commit", "--quiet", "-m", "task authority"]);
    const commit = execFileSync("git", ["-C", root, "rev-parse", "HEAD"], {
      encoding: "utf8",
    }).trim();

    const clean = observeTaskSourceAuthority(taskRoot, commit);
    expect(clean).toMatchObject({
      source_commit: commit,
      source_commit_ancestor_of_current_head: true,
      exact_working_tree_match: true,
    });
    expect(clean.working_tree).toEqual(clean.committed_tree);

    writeFileSync(
      join(taskRoot, "task.json"),
      `${readFileSync(join(taskRoot, "task.json"), "utf8").trim()} \n`,
    );
    const mutated = observeTaskSourceAuthority(taskRoot, commit);
    expect(mutated.exact_working_tree_match).toBe(false);
    expect(mutated.working_tree.sha256).not.toBe(mutated.committed_tree.sha256);
  });
});

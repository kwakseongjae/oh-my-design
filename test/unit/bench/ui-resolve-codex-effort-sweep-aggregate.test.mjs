import { createHash } from "node:crypto";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { aggregateCodexEffortSweep } from "../../../benchmarks/ui-resolve-bench/scripts/aggregate-codex-effort-sweep.mjs";

const script = resolve("benchmarks/ui-resolve-bench/scripts/aggregate-codex-effort-sweep.mjs");
const tasks = ["task-a", "task-b", "task-c"];
const experimentId = "codex-effort-sweep-fixture";
const taskSourceCommit = "a".repeat(40);
const matrixLock = "b".repeat(64);
const recordKind = "codex-complete-block-effort-scaling-v2";
const legacyRecordKind = "codex-complete-block-effort-scaling-v1";
const fixtureOutputRoot = "/tmp/codex-effort-sweep-fixture";

function hash(value) {
  return createHash("sha256").update(value).digest("hex");
}

function canonicalHash(value) {
  return hash(JSON.stringify(value));
}

function contract() {
  return {
    cache_sha256: "c".repeat(64),
    cache_fetched_at: "2026-08-09T00:00:00Z",
    cache_client_version: "0.147.0",
    models: [
      {
        model_id: "gpt-5.6-luna",
        model_profile_sha256: "d".repeat(64),
        default_effort: "medium",
        supported_efforts: ["low", "medium", "high", "xhigh", "max"],
      },
      {
        model_id: "gpt-5.6-terra",
        model_profile_sha256: "e".repeat(64),
        default_effort: "medium",
        supported_efforts: ["low", "medium", "high", "xhigh", "max", "ultra"],
      },
      {
        model_id: "gpt-5.6-sol",
        model_profile_sha256: "f".repeat(64),
        default_effort: "low",
        supported_efforts: ["low", "medium", "high", "xhigh", "max", "ultra"],
      },
    ],
  };
}

function control() {
  return {
    comparison_mode: "effort-scaling",
    effort_semantics: "runtime-native-ordinal-not-cross-provider-equivalent",
    temperature_policy: "runtime-default-frozen",
    timeout_seconds: 720,
    max_concurrency: 1,
    latency_comparison: "descriptive-only",
    retry_policy: "none-primary",
    replacement_policy: "none",
    fallback_policy: "none",
    model_substitution_policy: "none",
    effort_substitution_policy: "none",
    task_substitution_policy: "none",
    timeout_policy: "count-as-valid-failure",
    infrastructure_policy: "retain-freeze-and-repreregister",
    task_order_policy: "fixed-preregistered",
    admission_normalization_policy: "complete-block-effort-scaling",
    pacing: {
      policy: "fixed-inter-cell",
      inter_cell_delay_seconds: 30,
      applies_between_cells_only: true,
      counts_toward_cell_wall_time: false,
    },
    token_budget: {
      mode: "observed-only",
      limit_tokens: null,
      usage_required: true,
      account_components: ["input", "cached_input", "output", "reasoning_output"],
      cached_input_separate: true,
      cost_policy: "provider-reported-or-pinned-price-equivalent",
    },
    step_budget: { mode: "observed-only", limit_steps: null },
  };
}

function cells() {
  let order = 0;
  return contract().models.flatMap((profile) => profile.supported_efforts.flatMap((effort) => (
    tasks.map((task, taskIndex) => {
      const current = order;
      order += 1;
      return {
        id: `${profile.model_id}-${effort}-${task}`,
        task_id: task,
        variant_id: "omd-portable-fixture",
        system_id: "codex-all-effort-omd-current",
        runtime: "codex",
        model_id: profile.model_id,
        effort,
        timeout_seconds: 720,
        trial_index: 1,
        schedule_wave: taskIndex + 1,
        schedule_position: Math.floor(current / 3) + 1,
        schedule_task_label: ["A", "B", "C"][taskIndex],
      };
    })
  )));
}

function taskLocks() {
  return tasks.map((task, index) => ({
    task_id: task,
    task_tree_sha256: String(index + 1).repeat(64),
    observed_task_tree_sha256: String(index + 1).repeat(64),
    task_tree_files: [{
      path: "task.json",
      mode: 420,
      bytes: 100 + index,
      sha256: ["1", "2", "3"][index].repeat(64),
    }],
    prompt_sha256: String(index + 4).repeat(64),
    starter_sha256: String(index + 7).repeat(64),
    baseline_evidence_sha256: ["a", "b", "c"][index].repeat(64),
    baseline_provenance_sha256: ["4", "5", "6"][index].repeat(64),
    baseline_methodology: {
      score_schema_version: "0.7",
      epoch: "ui-resolve-objective-2026q3-entry-identity-v1",
      evaluator_source_sha256: "8".repeat(64),
      contract_source_sha256: "9".repeat(64),
    },
    source_contract_sha256: ["d", "e", "f"][index].repeat(64),
    source_commit: taskSourceCommit,
    git_tree_oid: ["1", "2", "3"][index].repeat(40),
  }));
}

function plan() {
  const allCells = cells();
  const lockedTasks = taskLocks();
  const taskProjection = lockedTasks.map((task) => ({
    task_id: task.task_id,
    task_tree_sha256: task.task_tree_sha256,
    task_tree_files: task.task_tree_files,
    prompt_sha256: task.prompt_sha256,
    starter_sha256: task.starter_sha256,
    baseline_evidence_sha256: task.baseline_evidence_sha256,
    baseline_provenance_sha256: task.baseline_provenance_sha256,
    baseline_methodology: task.baseline_methodology,
    source_contract_sha256: task.source_contract_sha256,
  }));
  const scheduleProjection = allCells.map((cell) => ({
    id: cell.id,
    wave: cell.schedule_wave,
    position: cell.schedule_position,
    task_label: cell.schedule_task_label,
    task_id: cell.task_id,
    model_id: cell.model_id,
    effort: cell.effort,
    trial_index: cell.trial_index,
  }));
  const taskSetSha256 = canonicalHash(taskProjection);
  const scheduleSha256 = canonicalHash(scheduleProjection);
  const skillLock = {
    skill_id: "omd-apply-current-fixture",
    variant_id: "omd-portable-fixture",
    declared_name: "omd:apply",
    source_commit: "9".repeat(40),
    source_tree_sha256: "8".repeat(64),
    skill_tree_sha256: "7".repeat(64),
  };
  const evaluator = {
    score_schema_version: "0.6",
    epoch: "ui-resolve-objective-2026q3-passive-scroll-v1",
    evaluator_source_sha256: "6".repeat(64),
    contract_source_sha256: "5".repeat(64),
  };
  const pairs = contract().models.flatMap((profile) => (
    profile.supported_efforts.map((effort) => ({ model_id: profile.model_id, effort }))
  ));
  const catalogSnapshot = {
    model_catalog_source_path: "/tmp/codex-effort-catalog/model_catalog.json",
    model_catalog_sha256: "9".repeat(64),
    model_catalog_bytes: 4096,
    model_catalog_source_mode: "immutable-snapshot-only",
    model_catalog_mode: "isolated-copy-before-provider-execution",
    mutable_model_catalog_fallback_allowed: false,
    model_catalog_role: "execution-model-authority",
    cli_cache_client_version_policy: "require-exact-match",
    cli_cache_client_version_mismatch_justification: null,
    codex_cli: { version: contract().cache_client_version },
  };
  return {
    schema_version: "0.3",
    suite_version: "ui-resolve-v0.2",
    execution_purpose: "complete-block-effort-scaling",
    experiment_id: experimentId,
    output_root: fixtureOutputRoot,
    family: "model",
    control_contract: control(),
    checkpoint_continuation_contract: {
      max_new_cells_per_invocation: 1,
      preserve_completed_cells: true,
      completed_root_not_resumable: true,
    },
    codex_model_effort_contract: contract(),
    codex_catalog_snapshot_contract: catalogSnapshot,
    provider_routing_contract: {
      cursor_allowed: false,
      claude_code_allowed: false,
      allowed_runtime: "codex",
      allowed_model_ids: contract().models.map((profile) => profile.model_id),
      allowed_model_effort_pairs: pairs,
      aliases_allowed: false,
      retry_allowed: false,
      replacement_allowed: false,
      fallback_allowed: false,
      model_substitution_allowed: false,
      effort_substitution_allowed: false,
      task_substitution_allowed: false,
      fail_closed: true,
    },
    effort_sweep_contract: {
      required_cells: 51,
      tasks: 3,
      trials_per_task_pair: 1,
      complete_block_required: true,
      ordered_model_effort_pairs: pairs,
      task_set_sha256: taskSetSha256,
      schedule_sha256: scheduleSha256,
    },
    interpretation_contract: {
      mode: "complete-block-only",
      interpretation_allowed_before_all_51_terminal: false,
      cross_model_pooling_allowed: false,
    },
    schedule_contract: { schedule_sha256: scheduleSha256 },
    task_lock_contract: {
      source_commit: taskSourceCommit,
      task_set_sha256: taskSetSha256,
      tasks: lockedTasks,
    },
    skill_lock_contract: skillLock,
    objective_evaluator: evaluator,
    lock_manifest: {
      task_set_sha256: taskSetSha256,
      schedule_sha256: scheduleSha256,
      skill_source_contract_sha256: canonicalHash(skillLock),
      objective_evaluator_contract_sha256: canonicalHash(evaluator),
      model_catalog_file_sha256: catalogSnapshot.model_catalog_sha256,
      codex_catalog_snapshot_contract_sha256: canonicalHash(catalogSnapshot),
    },
    cells: allCells,
  };
}

function sweepIdentity(lockedPlan, cell, lockedPlanSha256) {
  const task = lockedPlan.task_lock_contract.tasks.find((candidate) => candidate.task_id === cell.task_id);
  return {
    schema_version: "0.1",
    experiment_id: lockedPlan.experiment_id,
    locked_plan_sha256: lockedPlanSha256,
    schedule_sha256: lockedPlan.schedule_contract.schedule_sha256,
    suite_version: lockedPlan.suite_version,
    objective_methodology_epoch: lockedPlan.objective_evaluator.epoch,
    objective_evaluator_contract_sha256: lockedPlan.lock_manifest.objective_evaluator_contract_sha256,
    system_id: cell.system_id,
    variant_id: cell.variant_id,
    skill_id: lockedPlan.skill_lock_contract.declared_name,
    skill_source_commit: lockedPlan.skill_lock_contract.source_commit,
    skill_source_tree_sha256: lockedPlan.skill_lock_contract.source_tree_sha256,
    skill_tree_sha256: lockedPlan.skill_lock_contract.skill_tree_sha256,
    task_source_commit: task.source_commit,
    task_git_tree_oid: task.git_tree_oid,
    task_tree_sha256: task.task_tree_sha256,
    task_source_contract_sha256: task.source_contract_sha256,
  };
}

function record({ lockedPlan, cell, lockedPlanSha256 = matrixLock, index = 0 }) {
  const profile = contract().models.find((item) => item.model_id === cell.model_id);
  const modelCatalogAuthority = {
    schema_version: "0.1",
    mode: "immutable-local-model-catalog-json",
    config_key: "model_catalog_json",
    source: {
      path: lockedPlan.codex_catalog_snapshot_contract.model_catalog_source_path,
      sha256: lockedPlan.codex_catalog_snapshot_contract.model_catalog_sha256,
      bytes: lockedPlan.codex_catalog_snapshot_contract.model_catalog_bytes,
      source_mode: "immutable-snapshot-only",
    },
    isolated_copy: {
      path: join(
        lockedPlan.output_root,
        cell.id,
        ".benchmark",
        "codex-home",
        "model_catalog.json",
      ),
      sha256: lockedPlan.codex_catalog_snapshot_contract.model_catalog_sha256,
      bytes: lockedPlan.codex_catalog_snapshot_contract.model_catalog_bytes,
      copy_mode: "isolated-regular-file",
    },
    selected_profile: {
      model_id: cell.model_id,
      model_profile_sha256: profile.model_profile_sha256,
      default_effort: profile.default_effort,
      supported_efforts: profile.supported_efforts,
    },
    verified_before_provider_execution: true,
    mutable_fallback_allowed: false,
  };
  return {
    record_kind: recordKind,
    run_id: cell.id,
    benchmark_family: "model",
    suite_version: lockedPlan.suite_version,
    experiment_id: experimentId,
    task_set_sha256: lockedPlan.effort_sweep_contract.task_set_sha256,
    matrix_sha256: lockedPlanSha256,
    cell_id: cell.id,
    objective_methodology_epoch: lockedPlan.objective_evaluator.epoch,
    system_id: cell.system_id,
    variant_id: cell.variant_id,
    model_id: cell.model_id,
    skill_id: null,
    harness_id: null,
    effort: cell.effort,
    budget_tier: cell.effort,
    task_id: cell.task_id,
    trial_index: cell.trial_index,
    run_status: "complete",
    validity: "valid",
    ui_resolved: index % 3 !== 0,
    objective_score: 75 + (index % 10),
    objective_max: 85,
    wall_time_ms: 100 + index,
    execution_control: structuredClone(lockedPlan.control_contract),
    complete_block_outcome: {
      schema_version: "0.1",
      disposition: index % 3 === 0 ? "terminal-provider-failure" : "success",
      reason: index % 3 === 0 ? "objective-gate-failed" : null,
      tool_diagnostics: {
        availability: null,
        tool_error_count: null,
        recoverable_tool_error_count: null,
        agent_tool_call_count: null,
        agent_tool_error_count: null,
      },
    },
    sweep_identity: sweepIdentity(lockedPlan, cell, lockedPlanSha256),
    token_usage: {
      input_tokens: 1000 + index,
      cached_input_tokens: 700 + index,
      output_tokens: 100 + index,
      reasoning_output_tokens: 10 + index,
      total_tokens: 1100 + (index * 2),
      observed_components: [
        "input_tokens", "cached_input_tokens", "output_tokens", "reasoning_output_tokens",
      ],
      input_output_complete: true,
    },
    public_model_attribution_eligible: false,
    attribution: {
      runtime: {
        runtime_target: "codex",
        model_requested: cell.model_id,
        model_reported: null,
        model_evidence_mode: "cli-argument",
        effort_requested: cell.effort,
        provider_effort_argument: cell.effort,
        model_catalog_authority: modelCatalogAuthority,
        routing_attestation: {
          schema_version: "0.2",
          runtime: "codex",
          model_id: cell.model_id,
          effort: cell.effort,
          provider_route: "codex",
          pinned_profile: {
            model_profile_sha256: profile.model_profile_sha256,
            cache_sha256: contract().cache_sha256,
            default_effort: profile.default_effort,
            supported_efforts: profile.supported_efforts,
          },
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
    runtime_diagnostics: { proof_trace: { compliance_pass: index % 3 !== 0 } },
  };
}

function fixture({ complete = true, authority = complete } = {}) {
  const lockedPlan = plan();
  const records = lockedPlan.cells.map((cell, index) => record({ lockedPlan, cell, index }));
  const observed = complete ? records : records.slice(0, 6);
  return {
    matrix: lockedPlan,
    matrix_locks: {
      experiment_id: experimentId,
      task_set_sha256: lockedPlan.effort_sweep_contract.task_set_sha256,
      locked_plan_sha256: matrixLock,
    },
    execution_state: {
      experiment_id: experimentId,
      status: complete ? "complete" : "checkpointed",
      scheduled_cells: 51,
      completed_cells: complete ? 51 : 6,
      locked_plan_sha256: matrixLock,
    },
    model_effort_contract: contract(),
    run_records: observed,
    ...(authority ? {
      interpretation_authority: {
        source: "separate-locked-artifacts-v1",
        plan_sha256: matrixLock,
        plan_contract_valid: true,
        execution_state_separate: true,
        execution_state_sha256: "4".repeat(64),
        run_record_artifacts: {
          expected: 51,
          verified: 51,
          all_available: true,
          all_hashes_match: true,
        },
      },
    } : {}),
  };
}

describe("Codex all-effort sweep aggregate authority", () => {
  it("keeps historical records compatible while giving sweep records an explicit strict branch", () => {
    const schema = JSON.parse(readFileSync(
      resolve("benchmarks/ui-resolve-bench/run-record.schema.json"),
      "utf8",
    ));
    expect(schema.required).not.toContain("record_kind");
    expect(schema.required).not.toContain("sweep_identity");
    expect(schema.properties.record_kind.enum).toEqual(
      expect.arrayContaining([legacyRecordKind, recordKind]),
    );
    const branch = schema.allOf.find((item) => item.if?.anyOf?.some(
      (candidate) => candidate.properties?.record_kind?.const === recordKind,
    ));
    expect(branch.then.required).toEqual(expect.arrayContaining([
      "record_kind", "experiment_id", "task_set_sha256", "matrix_sha256",
      "cell_id", "variant_id", "sweep_identity", "execution_control", "attribution",
      "complete_block_outcome",
    ]));
    expect(branch.then.properties.execution_control).toMatchObject({
      additionalProperties: false,
      properties: {
        comparison_mode: { const: "effort-scaling" },
        timeout_seconds: { const: 720 },
        max_concurrency: { const: 1 },
        retry_policy: { const: "none-primary" },
        replacement_policy: { const: "none" },
        fallback_policy: { const: "none" },
        model_substitution_policy: { const: "none" },
        effort_substitution_policy: { const: "none" },
        task_substitution_policy: { const: "none" },
      },
    });
    expect(schema.properties.sweep_identity.required).toEqual(expect.arrayContaining([
      "locked_plan_sha256", "schedule_sha256", "objective_methodology_epoch",
      "system_id", "variant_id", "skill_source_tree_sha256", "task_tree_sha256",
    ]));
  });

  it("keeps incomplete or self-contained input coverage-only", () => {
    const partial = aggregateCodexEffortSweep(fixture({ complete: false, authority: false }));
    expect(partial.interpretation_allowed).toBe(false);
    expect(partial.interpretation_gate.reasons).toEqual(expect.arrayContaining([
      "observed-record-count-not-51",
      "execution-state-not-complete",
      "separate-locked-artifact-authority-missing",
    ]));
    expect(partial).not.toHaveProperty("within_model_default_effort_comparisons");
    expect(partial.groups).toHaveLength(17);

    const selfAsserted = aggregateCodexEffortSweep(fixture({ complete: true, authority: false }));
    expect(selfAsserted.interpretation_allowed).toBe(false);
    expect(selfAsserted.interpretation_gate.reasons).toContain("separate-locked-artifact-authority-missing");
  });

  it("interprets only the exact valid 51-cell block with separate artifact authority", () => {
    const summary = aggregateCodexEffortSweep(fixture());
    expect(summary.interpretation_allowed).toBe(true);
    expect(summary.interpretation_gate).toMatchObject({
      observed_records: 51,
      terminal_records: 51,
      valid_records: 51,
      exact_cell_identity_records: 51,
      exact_semantic_identity_records: 51,
      exact_execution_control_records: 51,
      explicit_exact_effort_records: 51,
      exact_sweep_lock_records: 51,
      declared_passing_routing_attestation_records: 51,
      exact_routing_attestation_records: 51,
      observed_model_catalog_authority_records: 51,
      exact_model_catalog_authority_records: 51,
      reasons: [],
    });
    expect(summary.within_model_default_effort_comparisons).toHaveLength(3);
  });

  it("counts a valid timeout as valid terminal evidence", () => {
    const value = fixture();
    value.run_records[0].run_status = "timed_out";
    value.run_records[0].ui_resolved = false;
    expect(aggregateCodexEffortSweep(value).interpretation_allowed).toBe(true);
  });

  it("blocks interpretation for any invalid record", () => {
    const value = fixture();
    value.run_records[0].validity = "invalid-infrastructure";
    const summary = aggregateCodexEffortSweep(value);
    expect(summary.interpretation_allowed).toBe(false);
    expect(summary.interpretation_gate.reasons).toContain("not-all-records-valid");
    expect(summary).not.toHaveProperty("within_model_default_effort_comparisons");
  });

  it("requires declared pass and independently recomputes every routing check", () => {
    const declaredFailure = fixture();
    declaredFailure.run_records[0].attribution.runtime.routing_attestation.pass = false;
    let summary = aggregateCodexEffortSweep(declaredFailure);
    expect(summary.interpretation_allowed).toBe(false);
    expect(summary.interpretation_gate.reasons).toEqual(expect.arrayContaining([
      "not-all-routing-attestations-declare-pass",
      "not-all-routing-attestations-exact",
    ]));

    const forgedPass = fixture();
    forgedPass.run_records[0].attribution.runtime.routing_attestation.checks.runtime_codex = false;
    summary = aggregateCodexEffortSweep(forgedPass);
    expect(summary.interpretation_allowed).toBe(false);
    expect(summary.interpretation_gate.exact_routing_attestation_records).toBe(50);
  });

  it("rejects forged pass booleans when catalog bytes or selected profile drift", () => {
    const catalogShaDrift = fixture();
    catalogShaDrift.run_records[0].attribution.runtime.model_catalog_authority.source.sha256 =
      "0".repeat(64);
    let summary = aggregateCodexEffortSweep(catalogShaDrift);
    expect(catalogShaDrift.run_records[0].attribution.runtime.routing_attestation.pass).toBe(true);
    expect(summary.interpretation_allowed).toBe(false);
    expect(summary.interpretation_gate).toMatchObject({
      exact_model_catalog_authority_records: 50,
      exact_routing_attestation_records: 50,
    });
    expect(summary.interpretation_gate.reasons).toEqual(expect.arrayContaining([
      "not-all-model-catalog-authorities-exact",
      "not-all-routing-attestations-exact",
    ]));

    const profileDrift = fixture();
    profileDrift.run_records[0].attribution.runtime.model_catalog_authority
      .selected_profile.model_profile_sha256 = "0".repeat(64);
    summary = aggregateCodexEffortSweep(profileDrift);
    expect(summary.interpretation_gate.exact_model_catalog_authority_records).toBe(50);

    const orderDrift = fixture();
    orderDrift.run_records[0].attribution.runtime.model_catalog_authority
      .selected_profile.supported_efforts.reverse();
    summary = aggregateCodexEffortSweep(orderDrift);
    expect(summary.interpretation_gate.exact_model_catalog_authority_records).toBe(50);
  });

  it("keeps 1.9.824-era v1 records schema-readable but excludes them from a fresh v2 sweep", () => {
    const historical = fixture();
    historical.run_records.forEach((item) => {
      item.record_kind = legacyRecordKind;
      item.attribution.runtime.routing_attestation.schema_version = "0.1";
      delete item.attribution.runtime.model_catalog_authority;
    });
    expect(() => aggregateCodexEffortSweep(historical))
      .toThrow(/record_kind must be codex-complete-block-effort-scaling-v2/i);
  });

  it("blocks copied metadata, epoch drift, and omitted execution control", () => {
    const copied = fixture();
    copied.run_records[0].sweep_identity = structuredClone(copied.run_records[1].sweep_identity);
    expect(aggregateCodexEffortSweep(copied).interpretation_gate.reasons)
      .toContain("not-all-record-semantic-identities-exact");

    const epoch = fixture();
    epoch.run_records[0].objective_methodology_epoch = "older-epoch";
    expect(aggregateCodexEffortSweep(epoch).interpretation_gate.reasons)
      .toContain("not-all-record-semantic-identities-exact");

    const omitted = fixture();
    delete omitted.run_records[0].execution_control;
    expect(() => aggregateCodexEffortSweep(omitted)).toThrow(/execution_control is required/i);
  });

  it("blocks execution-control substitutions even when labels are copied", () => {
    const value = fixture();
    value.run_records[0].execution_control.timeout_seconds = 900;
    const summary = aggregateCodexEffortSweep(value);
    expect(summary.interpretation_allowed).toBe(false);
    expect(summary.interpretation_gate.reasons).toEqual(expect.arrayContaining([
      "not-all-record-semantic-identities-exact",
      "not-all-execution-controls-exact",
    ]));
  });

  it("rejects non-exact model profiles and schedule/task lock mutations", () => {
    const profile = fixture();
    profile.model_effort_contract.models[0].supported_efforts.push("ultra");
    expect(() => aggregateCodexEffortSweep(profile)).toThrow(/Luna5\/Terra6\/Sol6/i);

    const schedule = fixture();
    schedule.matrix.cells[0].schedule_position = 17;
    expect(() => aggregateCodexEffortSweep(schedule)).toThrow(/schedule lock/i);

    const task = fixture();
    task.matrix.task_lock_contract.tasks[0].task_tree_sha256 = "0".repeat(64);
    expect(() => aggregateCodexEffortSweep(task)).toThrow(/task source\/tree authority drift/i);

    const taskManifest = fixture();
    taskManifest.matrix.task_lock_contract.tasks[0].task_tree_files[0].sha256 = "0".repeat(64);
    expect(() => aggregateCodexEffortSweep(taskManifest)).toThrow(/task set lock/i);
  });

  it("rejects --interpret with self-contained input", () => {
    const root = mkdtempSync(join(tmpdir(), "codex-effort-self-input-"));
    const inputPath = join(root, "input.json");
    const outputPath = join(root, "summary.json");
    writeFileSync(inputPath, `${JSON.stringify(fixture())}\n`);
    const rejected = spawnSync(process.execPath, [
      script, "--input", inputPath, "--interpret", "--out", outputPath,
    ], { encoding: "utf8" });
    expect(rejected.status).not.toBe(0);
    expect(rejected.stderr).toMatch(/self-contained --input is coverage-only/i);
  });

  it("emits coverage-only output for self-contained CLI input", () => {
    const root = mkdtempSync(join(tmpdir(), "codex-effort-coverage-input-"));
    const inputPath = join(root, "input.json");
    const outputPath = join(root, "summary.json");
    writeFileSync(inputPath, `${JSON.stringify(fixture())}\n`);
    execFileSync(process.execPath, [script, "--input", inputPath, "--out", outputPath]);
    const summary = JSON.parse(readFileSync(outputPath, "utf8"));
    expect(summary.interpretation_allowed).toBe(false);
    expect(summary.interpretation_gate.reasons)
      .toContain("separate-locked-artifact-authority-missing");
    expect(summary).not.toHaveProperty("within_model_default_effort_comparisons");
  });

  it("verifies each actual run-record byte hash from separate execution-state artifacts", () => {
    const root = mkdtempSync(join(tmpdir(), "codex-effort-authority-"));
    const lockedPlan = plan();
    const matrixPath = join(root, "RUN-MATRIX.locked.json");
    writeFileSync(matrixPath, `${JSON.stringify(lockedPlan, null, 2)}\n`);
    const lockedPlanSha256 = hash(readFileSync(matrixPath));
    const stateCells = lockedPlan.cells.map((cell, index) => {
      const workspace = join(root, cell.id);
      const benchmark = join(workspace, ".benchmark");
      mkdirSync(benchmark, { recursive: true });
      const value = record({ lockedPlan, cell, lockedPlanSha256, index });
      const path = join(benchmark, "run-record.json");
      writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
      const controller = join(root, ".controller-artifacts", cell.id, "run-record.json");
      mkdirSync(join(root, ".controller-artifacts", cell.id), { recursive: true });
      writeFileSync(controller, readFileSync(path));
      const recordSha256 = hash(readFileSync(path));
      return {
        id: cell.id,
        status: "complete",
        workspace,
        artifact_hashes: {
          run_record_sha256: recordSha256,
          controller_run_record_sha256: recordSha256,
        },
      };
    });
    const statePath = join(root, "execution-state.json");
    writeFileSync(statePath, `${JSON.stringify({
      experiment_id: experimentId,
      status: "complete",
      scheduled_cells: 51,
      completed_cells: 51,
      locked_plan_sha256: lockedPlanSha256,
      cells: stateCells,
    }, null, 2)}\n`);
    const outputPath = join(root, "summary.json");
    execFileSync(process.execPath, [
      script,
      "--matrix", matrixPath,
      "--execution-state", statePath,
      "--out", outputPath,
    ]);
    const summary = JSON.parse(readFileSync(outputPath, "utf8"));
    expect(summary.interpretation_allowed).toBe(true);
    expect(summary.interpretation_gate.authority.run_record_artifacts).toEqual({
      expected: 51,
      verified: 51,
      all_available: true,
      all_hashes_match: true,
    });

    const tamperedPath = join(stateCells[0].workspace, ".benchmark", "run-record.json");
    const tampered = JSON.parse(readFileSync(tamperedPath, "utf8"));
    tampered.objective_score = 0;
    writeFileSync(tamperedPath, `${JSON.stringify(tampered, null, 2)}\n`);
    execFileSync(process.execPath, [
      script,
      "--matrix", matrixPath,
      "--execution-state", statePath,
      "--out", outputPath,
    ]);
    const blocked = JSON.parse(readFileSync(outputPath, "utf8"));
    expect(blocked.interpretation_allowed).toBe(false);
    expect(blocked.interpretation_gate.reasons)
      .toContain("run-record-artifact-hash-authority-incomplete");

    writeFileSync(tamperedPath, readFileSync(
      join(root, ".controller-artifacts", stateCells[0].id, "run-record.json"),
    ));
    unlinkSync(join(root, ".controller-artifacts", stateCells[0].id, "run-record.json"));
    execFileSync(process.execPath, [
      script,
      "--matrix", matrixPath,
      "--execution-state", statePath,
      "--out", outputPath,
    ]);
    const compatibilityOnly = JSON.parse(readFileSync(outputPath, "utf8"));
    expect(compatibilityOnly.interpretation_allowed).toBe(false);
    expect(compatibilityOnly.interpretation_gate.reasons)
      .toContain("run-record-artifact-hash-authority-incomplete");

    const sourceCell = stateCells[1];
    const state = JSON.parse(readFileSync(statePath, "utf8"));
    state.cells[1].artifact_hashes.controller_run_record_sha256 = "f".repeat(64);
    writeFileSync(statePath, `${JSON.stringify(state, null, 2)}\n`);
    execFileSync(process.execPath, [
      script,
      "--matrix", matrixPath,
      "--execution-state", statePath,
      "--out", outputPath,
    ]);
    const stateHashDrift = JSON.parse(readFileSync(outputPath, "utf8"));
    expect(sourceCell.artifact_hashes.controller_run_record_sha256)
      .toBe(sourceCell.artifact_hashes.run_record_sha256);
    expect(stateHashDrift.interpretation_allowed).toBe(false);
    expect(stateHashDrift.interpretation_gate.reasons)
      .toContain("run-record-artifact-hash-authority-incomplete");
  });
});

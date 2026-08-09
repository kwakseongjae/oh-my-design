#!/usr/bin/env node
import { existsSync, lstatSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";

const TOKEN_COMPONENTS = [
  "input_tokens",
  "cached_input_tokens",
  "output_tokens",
  "reasoning_output_tokens",
  "total_tokens",
];
const SWEEP_METADATA_FIELDS = ["experiment_id", "task_set_sha256", "matrix_sha256"];
const RUN_STATUSES = new Set(["complete", "failed", "timed_out", "incomplete"]);
const TERMINAL_RUN_STATUSES = new Set(["complete", "failed", "timed_out"]);
const VALIDITIES = new Set(["valid", "invalid-infrastructure", "invalid-attribution", "invalid-task"]);
const ROUTING_CHECKS = [
  "locked_cell_exact",
  "runtime_codex",
  "model_requested_exact",
  "effort_requested_exact",
  "provider_effort_argument_exact",
  "provider_route_accepted",
  "pinned_profile_supports_effort",
  "model_catalog_authority_present",
  "model_catalog_schema_version_exact",
  "model_catalog_mode_exact",
  "model_catalog_config_key_exact",
  "model_catalog_source_path_exact",
  "model_catalog_source_sha256_exact",
  "model_catalog_source_bytes_exact",
  "model_catalog_source_mode_exact",
  "model_catalog_isolated_path_exact",
  "model_catalog_isolated_sha256_exact",
  "model_catalog_isolated_bytes_exact",
  "model_catalog_copy_mode_exact",
  "model_catalog_selected_model_exact",
  "model_catalog_selected_profile_sha256_exact",
  "model_catalog_selected_default_effort_exact",
  "model_catalog_selected_effort_order_exact",
  "model_catalog_selected_effort_supported",
  "model_catalog_verified_before_provider_execution",
  "model_catalog_mutable_fallback_forbidden",
];
const SHA256_PATTERN = /^[a-f0-9]{64}$/;
const SWEEP_RECORD_KIND = "codex-complete-block-effort-scaling-v2";
const INTERPRETATION_AUTHORITY_SOURCE = "separate-locked-artifacts-v1";
const EXPECTED_MODEL_PROFILES = Object.freeze([
  Object.freeze({
    model_id: "gpt-5.6-luna",
    default_effort: "medium",
    supported_efforts: Object.freeze(["low", "medium", "high", "xhigh", "max"]),
  }),
  Object.freeze({
    model_id: "gpt-5.6-terra",
    default_effort: "medium",
    supported_efforts: Object.freeze(["low", "medium", "high", "xhigh", "max", "ultra"]),
  }),
  Object.freeze({
    model_id: "gpt-5.6-sol",
    default_effort: "low",
    supported_efforts: Object.freeze(["low", "medium", "high", "xhigh", "max", "ultra"]),
  }),
]);

function canonicalSha256(value) {
  return sha256(JSON.stringify(value));
}

function jsonEqual(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function exactObjectKeys(value, expected) {
  return Boolean(
    value
    && typeof value === "object"
    && !Array.isArray(value)
    && jsonEqual(Object.keys(value).sort(), [...expected].sort()),
  );
}

function requiredString(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${label} is required`);
  return value;
}

function requiredSha256(value, label) {
  requiredString(value, label);
  if (!SHA256_PATTERN.test(value)) throw new Error(`${label} must be a lowercase SHA-256`);
  return value;
}

function optionalFinite(value, label) {
  if (value == null) return null;
  if (typeof value !== "number" || !Number.isFinite(value)) throw new Error(`${label} must be finite`);
  return value;
}

function optionalNonNegativeInteger(value, label) {
  if (value == null) return null;
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new Error(`${label} must be a non-negative safe integer`);
  }
  return value;
}

function pairKey(modelId, effort) {
  return `${modelId}\u0000${effort}`;
}

function taskPairKey(modelId, effort, taskId) {
  return `${pairKey(modelId, effort)}\u0000${taskId}`;
}

function recordEffort(record) {
  return record?.effort ?? record?.budget_tier ?? null;
}

function sweepLocks(input, matrix, scheduledCells) {
  const explicit = input?.matrix_locks;
  const executionState = input?.execution_state;
  if (!explicit || typeof explicit !== "object" || Array.isArray(explicit)) {
    throw new Error("matrix_locks with all three sweep locks is required");
  }
  if (!executionState || typeof executionState !== "object" || Array.isArray(executionState)) {
    throw new Error("execution_state is required");
  }
  const values = {
    experiment_id: explicit.experiment_id ?? null,
    task_set_sha256: explicit.task_set_sha256 ?? null,
    // A plan cannot truthfully contain its own byte hash. Accept only the
    // immutable hash supplied by execution-state and repeated by the caller.
    matrix_sha256: explicit.locked_plan_sha256 ?? null,
  };
  for (const field of SWEEP_METADATA_FIELDS) {
    requiredString(values[field], `matrix lock ${field}`);
  }
  if (!SHA256_PATTERN.test(values.task_set_sha256)) {
    throw new Error("matrix lock task_set_sha256 must be a lowercase SHA-256");
  }
  if (!SHA256_PATTERN.test(values.matrix_sha256)) {
    throw new Error("matrix lock locked_plan_sha256 must be a lowercase SHA-256");
  }
  if (matrix?.experiment_id !== values.experiment_id) {
    throw new Error("matrix experiment_id disagrees with matrix lock");
  }
  if (matrix?.effort_sweep_contract?.task_set_sha256 !== values.task_set_sha256) {
    throw new Error("matrix task_set_sha256 disagrees with matrix lock");
  }
  if (executionState.experiment_id !== values.experiment_id) {
    throw new Error("execution_state experiment_id disagrees with matrix lock");
  }
  if (executionState.locked_plan_sha256 !== values.matrix_sha256) {
    throw new Error("execution_state locked_plan_sha256 disagrees with authoritative matrix lock");
  }
  if (executionState.scheduled_cells !== scheduledCells) {
    throw new Error("execution_state scheduled_cells disagrees with matrix");
  }
  return { values, executionState };
}

function asCells(matrix) {
  const cells = Array.isArray(matrix) ? matrix : matrix?.cells;
  if (!Array.isArray(cells) || cells.length === 0) throw new Error("matrix.cells must be a non-empty array");
  return cells;
}

function asRecords(records) {
  const output = Array.isArray(records) ? records : records?.runs ?? records?.records;
  if (!Array.isArray(output)) throw new Error("run records must be an array");
  return output;
}

function asContract(contract) {
  const value = contract?.codex_model_effort_contract ?? contract;
  if (!value || !Array.isArray(value.models) || value.models.length === 0) {
    throw new Error("model effort contract must contain models");
  }
  const profiles = new Map();
  for (const [index, profile] of value.models.entries()) {
    const label = `model effort contract.models[${index}]`;
    const modelId = requiredString(profile?.model_id, `${label}.model_id`);
    if (profiles.has(modelId)) throw new Error(`duplicate model effort profile: ${modelId}`);
    const efforts = profile.supported_efforts;
    if (!Array.isArray(efforts) || efforts.length === 0 || new Set(efforts).size !== efforts.length) {
      throw new Error(`${label}.supported_efforts must be a non-empty unique array`);
    }
    efforts.forEach((effort, effortIndex) => requiredString(effort, `${label}.supported_efforts[${effortIndex}]`));
    const defaultEffort = requiredString(profile.default_effort, `${label}.default_effort`);
    if (!efforts.includes(defaultEffort)) throw new Error(`${label}.default_effort must be supported`);
    profiles.set(modelId, {
      model_id: modelId,
      default_effort: defaultEffort,
      supported_efforts: [...efforts],
      model_profile_sha256: profile.model_profile_sha256 ?? null,
    });
  }
  if (profiles.size !== EXPECTED_MODEL_PROFILES.length) {
    throw new Error("complete-block effort sweep requires exact Luna5/Terra6/Sol6 profiles");
  }
  for (const [index, expected] of EXPECTED_MODEL_PROFILES.entries()) {
    const observed = [...profiles.values()][index];
    if (!observed
      || observed.model_id !== expected.model_id
      || observed.default_effort !== expected.default_effort
      || !jsonEqual(observed.supported_efforts, expected.supported_efforts)) {
      throw new Error("complete-block effort sweep requires exact ordered Luna5/Terra6/Sol6 profiles");
    }
    if (!SHA256_PATTERN.test(observed.model_profile_sha256 ?? "")) {
      throw new Error(`complete-block effort sweep model profile SHA is invalid: ${expected.model_id}`);
    }
  }
  if (!SHA256_PATTERN.test(value.cache_sha256 ?? "")
    || typeof value.cache_fetched_at !== "string" || !value.cache_fetched_at
    || typeof value.cache_client_version !== "string" || !value.cache_client_version) {
    throw new Error("complete-block effort sweep requires an exact immutable Codex catalog identity");
  }
  return {
    profiles,
    orderedProfiles: [...profiles.values()],
    cache_sha256: value.cache_sha256 ?? null,
    cache_fetched_at: value.cache_fetched_at ?? null,
    cache_client_version: value.cache_client_version ?? null,
  };
}

function validateModelCatalogSnapshot(plan, contract) {
  const snapshot = plan?.codex_catalog_snapshot_contract;
  if (!snapshot || typeof snapshot !== "object" || Array.isArray(snapshot)) {
    throw new Error("complete-block effort sweep requires a locked local model catalog snapshot");
  }
  if (!isAbsolute(snapshot.model_catalog_source_path ?? "")) {
    throw new Error("model catalog snapshot source path must be absolute");
  }
  requiredSha256(snapshot.model_catalog_sha256, "model catalog snapshot SHA");
  if (!Number.isSafeInteger(snapshot.model_catalog_bytes) || snapshot.model_catalog_bytes < 1) {
    throw new Error("model catalog snapshot bytes must be a positive safe integer");
  }
  if (snapshot.model_catalog_source_mode !== "immutable-snapshot-only"
    || snapshot.model_catalog_mode !== "isolated-copy-before-provider-execution"
    || snapshot.mutable_model_catalog_fallback_allowed !== false
    || snapshot.model_catalog_role !== "execution-model-authority") {
    throw new Error("model catalog snapshot execution authority contract is invalid");
  }
  if (snapshot.cli_cache_client_version_policy !== "require-exact-match"
    || snapshot.cli_cache_client_version_mismatch_justification !== null
    || snapshot.codex_cli?.version !== contract.cache_client_version) {
    throw new Error("model catalog snapshot CLI/client authority is not exact");
  }
  if (plan.lock_manifest?.model_catalog_file_sha256 !== snapshot.model_catalog_sha256
    || plan.lock_manifest?.codex_catalog_snapshot_contract_sha256
      !== canonicalSha256(snapshot)) {
    throw new Error("model catalog snapshot lock drift");
  }
  if (!isAbsolute(plan.output_root ?? "")) {
    throw new Error("complete-block effort sweep output_root must be absolute");
  }
  return snapshot;
}

function validateCells(matrix) {
  const ids = new Set();
  const pairTasks = new Set();
  const cells = asCells(matrix).map((cell, index) => {
    const label = `matrix.cells[${index}]`;
    const normalized = {
      id: requiredString(cell?.id, `${label}.id`),
      task_id: requiredString(cell?.task_id, `${label}.task_id`),
      variant_id: requiredString(cell?.variant_id, `${label}.variant_id`),
      system_id: requiredString(cell?.system_id, `${label}.system_id`),
      model_id: requiredString(cell?.model_id, `${label}.model_id`),
      effort: requiredString(cell?.effort, `${label}.effort`),
      runtime: requiredString(cell?.runtime, `${label}.runtime`),
      trial_index: cell?.trial_index,
      timeout_seconds: cell?.timeout_seconds,
      schedule_wave: cell?.schedule_wave,
      schedule_position: cell?.schedule_position,
      schedule_task_label: cell?.schedule_task_label,
    };
    if (normalized.runtime !== "codex") throw new Error(`${label}.runtime must be codex`);
    if (normalized.trial_index !== 1) throw new Error(`${label}.trial_index must be exactly 1`);
    if (normalized.timeout_seconds !== 720) throw new Error(`${label}.timeout_seconds must be exactly 720`);
    if (!Number.isInteger(normalized.schedule_wave) || normalized.schedule_wave < 1 || normalized.schedule_wave > 3) {
      throw new Error(`${label}.schedule_wave must be 1, 2, or 3`);
    }
    if (!Number.isInteger(normalized.schedule_position)
      || normalized.schedule_position < 1 || normalized.schedule_position > 17) {
      throw new Error(`${label}.schedule_position must be 1 through 17`);
    }
    if (!["A", "B", "C"].includes(normalized.schedule_task_label)) {
      throw new Error(`${label}.schedule_task_label must be A, B, or C`);
    }
    if (ids.has(normalized.id)) throw new Error(`duplicate matrix cell id: ${normalized.id}`);
    ids.add(normalized.id);
    const key = taskPairKey(normalized.model_id, normalized.effort, normalized.task_id);
    if (pairTasks.has(key)) {
      throw new Error(`duplicate scheduled model-effort-task cell: ${normalized.model_id}/${normalized.effort}/${normalized.task_id}`);
    }
    pairTasks.add(key);
    return normalized;
  });
  const tasks = [...new Set(cells.map((cell) => cell.task_id))].sort();
  if (tasks.length !== 3) throw new Error(`effort sweep must contain exactly three distinct tasks; found ${tasks.length}`);
  const groups = new Map();
  for (const cell of cells) {
    const key = pairKey(cell.model_id, cell.effort);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(cell);
  }
  for (const group of groups.values()) {
    const scheduled = [...new Set(group.map((cell) => cell.task_id))].sort();
    if (group.length !== 3 || scheduled.join("\u0000") !== tasks.join("\u0000")) {
      throw new Error(`${group[0].model_id}/${group[0].effort} must schedule each of the three tasks exactly once`);
    }
  }
  return { cells, tasks, groups };
}

function validateAllSupportedPairs(matrix, contract) {
  const expected = contract.orderedProfiles.flatMap((profile) => (
    profile.supported_efforts.map((effort) => pairKey(profile.model_id, effort))
  ));
  const actual = [...matrix.groups.keys()];
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);
  const missing = expected.filter((key) => !actualSet.has(key));
  const unsupported = actual.filter((key) => !expectedSet.has(key));
  if (missing.length || unsupported.length) {
    const display = (keys) => keys.map((key) => key.replace("\u0000", "/")).join(", ") || "none";
    throw new Error(`all-effort sweep pair mismatch; missing supported: ${display(missing)}; unsupported scheduled: ${display(unsupported)}`);
  }
}

function taskLockProjection(task) {
  return {
    task_id: task.task_id,
    task_tree_sha256: task.task_tree_sha256,
    prompt_sha256: task.prompt_sha256,
    starter_sha256: task.starter_sha256,
    baseline_evidence_sha256: task.baseline_evidence_sha256,
    source_contract_sha256: task.source_contract_sha256,
  };
}

function scheduleProjection(cells) {
  return cells.map((cell) => ({
    id: cell.id,
    wave: cell.schedule_wave,
    position: cell.schedule_position,
    task_label: cell.schedule_task_label,
    task_id: cell.task_id,
    model_id: cell.model_id,
    effort: cell.effort,
    trial_index: cell.trial_index,
  }));
}

function validateExactPlanContract(plan, matrix, contract) {
  if (plan?.schema_version !== "0.3"
    || plan.suite_version !== "ui-resolve-v0.2"
    || plan.execution_purpose !== "complete-block-effort-scaling"
    || plan.family !== "model") {
    throw new Error("matrix is not the exact complete-block effort-scaling plan");
  }
  const control = plan.control_contract;
  if (control?.comparison_mode !== "effort-scaling"
    || control.effort_semantics !== "runtime-native-ordinal-not-cross-provider-equivalent"
    || control.temperature_policy !== "runtime-default-frozen"
    || control.timeout_seconds !== 720
    || control.max_concurrency !== 1
    || control.latency_comparison !== "descriptive-only"
    || control.retry_policy !== "none-primary"
    || control.replacement_policy !== "none"
    || control.fallback_policy !== "none"
    || control.model_substitution_policy !== "none"
    || control.effort_substitution_policy !== "none"
    || control.task_substitution_policy !== "none"
    || control.timeout_policy !== "count-as-valid-failure"
    || control.infrastructure_policy !== "retain-freeze-and-repreregister"
    || control.task_order_policy !== "fixed-preregistered"
    || control.admission_normalization_policy !== "complete-block-effort-scaling"
    || control.pacing?.policy !== "fixed-inter-cell"
    || control.pacing.inter_cell_delay_seconds !== 30
    || control.pacing.applies_between_cells_only !== true
    || control.pacing.counts_toward_cell_wall_time !== false) {
    throw new Error("matrix control contract is not the exact complete-block execution policy");
  }
  if (plan.checkpoint_continuation_contract?.max_new_cells_per_invocation !== 1
    || plan.checkpoint_continuation_contract.preserve_completed_cells !== true
    || plan.checkpoint_continuation_contract.completed_root_not_resumable !== true) {
    throw new Error("matrix checkpoint contract must freeze one new cell per invocation");
  }
  if (plan.effort_sweep_contract?.required_cells !== 51
    || plan.effort_sweep_contract.tasks !== 3
    || plan.effort_sweep_contract.trials_per_task_pair !== 1
    || plan.effort_sweep_contract.complete_block_required !== true
    || plan.interpretation_contract?.mode !== "complete-block-only"
    || plan.interpretation_contract.interpretation_allowed_before_all_51_terminal !== false
    || plan.interpretation_contract.cross_model_pooling_allowed !== false) {
    throw new Error("matrix interpretation contract is not complete-block-only");
  }
  const provider = plan.provider_routing_contract;
  if (provider?.allowed_runtime !== "codex"
    || provider.cursor_allowed !== false
    || provider.claude_code_allowed !== false
    || provider.aliases_allowed !== false
    || provider.retry_allowed !== false
    || provider.replacement_allowed !== false
    || provider.fallback_allowed !== false
    || provider.model_substitution_allowed !== false
    || provider.effort_substitution_allowed !== false
    || provider.task_substitution_allowed !== false
    || provider.fail_closed !== true) {
    throw new Error("matrix provider route must forbid Cursor, aliases, retries, and substitutions");
  }
  const expectedPairs = contract.orderedProfiles.flatMap((profile) => (
    profile.supported_efforts.map((effort) => ({ model_id: profile.model_id, effort }))
  ));
  if (!jsonEqual(provider.allowed_model_ids, contract.orderedProfiles.map((profile) => profile.model_id))
    || !jsonEqual(provider.allowed_model_effort_pairs, expectedPairs)
    || !jsonEqual(plan.effort_sweep_contract.ordered_model_effort_pairs, expectedPairs)) {
    throw new Error("matrix model/effort authority is not the exact Luna5/Terra6/Sol6 block");
  }
  const modelCatalogSnapshot = validateModelCatalogSnapshot(plan, contract);

  const taskContract = plan.task_lock_contract;
  if (!taskContract || !Array.isArray(taskContract.tasks) || taskContract.tasks.length !== 3) {
    throw new Error("matrix must contain exactly three task source locks");
  }
  const taskById = new Map();
  for (const task of taskContract.tasks) {
    requiredString(task?.task_id, "task lock task_id");
    for (const field of [
      "task_tree_sha256", "prompt_sha256", "starter_sha256",
      "baseline_evidence_sha256", "source_contract_sha256",
    ]) requiredSha256(task?.[field], `task lock ${task?.task_id ?? "unknown"}.${field}`);
    requiredString(task?.source_commit, `task lock ${task?.task_id ?? "unknown"}.source_commit`);
    requiredString(task?.git_tree_oid, `task lock ${task?.task_id ?? "unknown"}.git_tree_oid`);
    if (task.source_commit !== taskContract.source_commit
      || task.observed_task_tree_sha256 !== task.task_tree_sha256) {
      throw new Error(`task source/tree authority drift: ${task.task_id}`);
    }
    if (taskById.has(task.task_id)) throw new Error(`duplicate task lock: ${task.task_id}`);
    taskById.set(task.task_id, task);
  }
  const taskSetSha256 = canonicalSha256(taskContract.tasks.map(taskLockProjection));
  if (taskContract.task_set_sha256 !== taskSetSha256
    || plan.effort_sweep_contract.task_set_sha256 !== taskSetSha256
    || plan.lock_manifest?.task_set_sha256 !== taskSetSha256) {
    throw new Error("matrix task set lock does not match its exact task/source projections");
  }
  if (!jsonEqual(matrix.tasks, [...taskById.keys()].sort())) {
    throw new Error("matrix cells and task source locks disagree");
  }
  const scheduleSha256 = canonicalSha256(scheduleProjection(matrix.cells));
  if (plan.schedule_contract?.schedule_sha256 !== scheduleSha256
    || plan.effort_sweep_contract.schedule_sha256 !== scheduleSha256
    || plan.lock_manifest?.schedule_sha256 !== scheduleSha256) {
    throw new Error("matrix schedule lock does not match the exact 51-cell schedule");
  }
  const objectiveEpoch = requiredString(plan.objective_evaluator?.epoch, "objective evaluator epoch");
  const objectiveContractSha256 = canonicalSha256(plan.objective_evaluator);
  const skillContractSha256 = canonicalSha256(plan.skill_lock_contract);
  if (plan.lock_manifest?.objective_evaluator_contract_sha256 !== objectiveContractSha256
    || plan.lock_manifest?.skill_source_contract_sha256 !== skillContractSha256) {
    throw new Error("matrix evaluator/skill source lock drift");
  }
  for (const field of ["skill_id", "variant_id", "declared_name", "source_commit"]) {
    requiredString(plan.skill_lock_contract?.[field], `skill_lock_contract.${field}`);
  }
  requiredSha256(plan.skill_lock_contract.source_tree_sha256, "skill_lock_contract.source_tree_sha256");
  requiredSha256(plan.skill_lock_contract.skill_tree_sha256, "skill_lock_contract.skill_tree_sha256");
  return {
    taskById,
    objectiveEpoch,
    objectiveContractSha256,
    skillContractSha256,
    taskSetSha256,
    scheduleSha256,
    modelCatalogSnapshot,
  };
}

function expectedSweepIdentity(plan, planAuthority, cell, matrixSha256) {
  const task = planAuthority.taskById.get(cell.task_id);
  return {
    schema_version: "0.1",
    experiment_id: plan.experiment_id,
    locked_plan_sha256: matrixSha256,
    schedule_sha256: planAuthority.scheduleSha256,
    suite_version: plan.suite_version,
    objective_methodology_epoch: planAuthority.objectiveEpoch,
    objective_evaluator_contract_sha256: planAuthority.objectiveContractSha256,
    system_id: cell.system_id,
    variant_id: cell.variant_id,
    skill_id: plan.skill_lock_contract.declared_name,
    skill_source_commit: plan.skill_lock_contract.source_commit,
    skill_source_tree_sha256: plan.skill_lock_contract.source_tree_sha256,
    skill_tree_sha256: plan.skill_lock_contract.skill_tree_sha256,
    task_source_commit: task.source_commit,
    task_git_tree_oid: task.git_tree_oid,
    task_tree_sha256: task.task_tree_sha256,
    task_source_contract_sha256: task.source_contract_sha256,
  };
}

function validateRecord(record, index) {
  const label = `run records[${index}]`;
  requiredString(record?.run_id, `${label}.run_id`);
  if (record?.record_kind !== SWEEP_RECORD_KIND) {
    throw new Error(`${label}.record_kind must be ${SWEEP_RECORD_KIND}`);
  }
  if (record?.benchmark_family !== "model") throw new Error(`${label}.benchmark_family must be model`);
  requiredString(record?.suite_version, `${label}.suite_version`);
  requiredString(record?.objective_methodology_epoch, `${label}.objective_methodology_epoch`);
  requiredString(record?.system_id, `${label}.system_id`);
  requiredString(record?.variant_id, `${label}.variant_id`);
  requiredString(record?.task_id, `${label}.task_id`);
  requiredString(record?.model_id, `${label}.model_id`);
  requiredString(record?.effort, `${label}.effort`);
  requiredString(record?.cell_id, `${label}.cell_id`);
  if (record?.trial_index !== 1) throw new Error(`${label}.trial_index must be exactly 1`);
  if (record.budget_tier != null) requiredString(record.budget_tier, `${label}.budget_tier`);
  for (const field of SWEEP_METADATA_FIELDS) {
    if (record[field] != null) requiredString(record[field], `${label}.${field}`);
  }
  if (!RUN_STATUSES.has(record.run_status)) throw new Error(`${label}.run_status is invalid`);
  if (!VALIDITIES.has(record.validity)) throw new Error(`${label}.validity is invalid`);
  if (!record.execution_control || typeof record.execution_control !== "object"
    || Array.isArray(record.execution_control)) {
    throw new Error(`${label}.execution_control is required`);
  }
  if (!record.sweep_identity || typeof record.sweep_identity !== "object"
    || Array.isArray(record.sweep_identity)) {
    throw new Error(`${label}.sweep_identity is required`);
  }
  if (!record.complete_block_outcome || typeof record.complete_block_outcome !== "object"
    || !["success", "terminal-provider-failure"].includes(
      record.complete_block_outcome.disposition,
    )) {
    throw new Error(`${label}.complete_block_outcome must be a terminal admitted disposition`);
  }
  if (record.ui_resolved != null && typeof record.ui_resolved !== "boolean") {
    throw new Error(`${label}.ui_resolved must be boolean when reported`);
  }
  const score = optionalFinite(record.objective_score, `${label}.objective_score`);
  const max = optionalFinite(record.objective_max, `${label}.objective_max`);
  if ((score == null) !== (max == null)) throw new Error(`${label} objective score and max must be reported together`);
  if (score != null && (max <= 0 || score < 0 || score > max)) throw new Error(`${label} objective range is invalid`);
  optionalFinite(record.wall_time_ms, `${label}.wall_time_ms`);
  for (const component of TOKEN_COMPONENTS) {
    optionalNonNegativeInteger(record.token_usage?.[component], `${label}.token_usage.${component}`);
  }
  return record;
}

function indexRecords(records, cells, locks) {
  const sourceRecords = asRecords(records);
  const byCellId = new Map();
  const seenPairTasks = new Set();
  const cellById = new Map(cells.map((cell) => [cell.id, cell]));
  const scheduledIds = new Set(cells.map((cell) => cell.id));
  const metadataObservations = Object.fromEntries(SWEEP_METADATA_FIELDS.map((field) => [field, []]));
  for (const [index, raw] of sourceRecords.entries()) {
    const record = validateRecord(raw, index);
    const directId = record.cell_id;
    const key = taskPairKey(record.model_id, record.effort, record.task_id);
    if (!scheduledIds.has(directId)) {
      throw new Error(`run record is not scheduled by the matrix: ${record.run_id}`);
    }
    if (seenPairTasks.has(key)) {
      throw new Error(`multiple run records for model-effort-task: ${key.replaceAll("\u0000", "/")}`);
    }
    seenPairTasks.add(key);
    const cell = cellById.get(directId);
    if (key !== taskPairKey(cell.model_id, cell.effort, cell.task_id)) {
      throw new Error(`run record does not match its matrix cell: ${record.run_id}`);
    }
    if (byCellId.has(directId)) throw new Error(`multiple run records for matrix cell: ${directId}`);
    byCellId.set(directId, record);
    for (const field of SWEEP_METADATA_FIELDS) {
      if (record[field] == null) continue;
      metadataObservations[field].push({ run_id: record.run_id, value: record[field] });
      if (locks[field] != null && record[field] !== locks[field]) {
        throw new Error(`run record ${field} disagrees with matrix lock: ${record.run_id}`);
      }
    }
  }
  const metadataEvidence = Object.fromEntries(SWEEP_METADATA_FIELDS.map((field) => {
    const observations = metadataObservations[field];
    const values = [...new Set(observations.map((item) => item.value))];
    if (values.length > 1) throw new Error(`observed run records disagree on ${field}`);
    return [field, {
      matrix_lock: locks[field],
      scheduled_cells: cells.length,
      observed_records: sourceRecords.length,
      observed_non_null_records: observations.length,
      observed_value: values[0] ?? null,
      null_observed_records: sourceRecords.length - observations.length,
      missing_scheduled_or_null: cells.length - observations.length,
    }];
  }));
  return {
    recordFor: (cell) => byCellId.get(cell.id) ?? null,
    metadataEvidence,
    sourceRecords,
  };
}

function recordSemanticIdentityMatches({ record, cell, plan, planAuthority, matrixSha256 }) {
  const expectedIdentity = expectedSweepIdentity(plan, planAuthority, cell, matrixSha256);
  return Boolean(
    record.record_kind === SWEEP_RECORD_KIND
    && record.benchmark_family === plan.family
    && record.suite_version === plan.suite_version
    && record.objective_methodology_epoch === planAuthority.objectiveEpoch
    && record.system_id === cell.system_id
    && record.variant_id === cell.variant_id
    && record.model_id === cell.model_id
    && record.effort === cell.effort
    && record.task_id === cell.task_id
    && record.trial_index === cell.trial_index
    && record.cell_id === cell.id
    && record.run_id === cell.id
    && jsonEqual(record.execution_control, plan.control_contract)
    && jsonEqual(record.sweep_identity, expectedIdentity)
  );
}

function interpretationGate({
  plan,
  planAuthority,
  matrix,
  indexed,
  locks,
  executionState,
  contract,
  interpretationAuthority,
}) {
  const reasons = [];
  if (matrix.cells.length !== 51) reasons.push("scheduled-cell-count-not-51");
  if (indexed.sourceRecords.length !== 51) reasons.push("observed-record-count-not-51");
  if (executionState.status !== "complete") reasons.push("execution-state-not-complete");
  if (executionState.completed_cells !== 51) reasons.push("execution-state-completed-cells-not-51");
  if (interpretationAuthority?.source !== INTERPRETATION_AUTHORITY_SOURCE) {
    reasons.push("separate-locked-artifact-authority-missing");
  }
  if (interpretationAuthority?.plan_sha256 !== locks.matrix_sha256
    || interpretationAuthority?.plan_contract_valid !== true) {
    reasons.push("locked-plan-byte-authority-failed");
  }
  if (interpretationAuthority?.execution_state_separate !== true) {
    reasons.push("separate-execution-state-authority-missing");
  }
  if (interpretationAuthority?.run_record_artifacts?.expected !== 51
    || interpretationAuthority?.run_record_artifacts?.verified !== 51
    || interpretationAuthority?.run_record_artifacts?.all_available !== true
    || interpretationAuthority?.run_record_artifacts?.all_hashes_match !== true) {
    reasons.push("run-record-artifact-hash-authority-incomplete");
  }

  let terminalRecords = 0;
  let validRecords = 0;
  let exactCellIdentities = 0;
  let exactSemanticIdentities = 0;
  let exactExecutionControls = 0;
  let explicitExactEfforts = 0;
  let exactSweepLocks = 0;
  let declaredPassingRoutingAttestations = 0;
  let exactRoutingAttestations = 0;
  let observedModelCatalogAuthorities = 0;
  let exactModelCatalogAuthorities = 0;
  for (const cell of matrix.cells) {
    const record = indexed.recordFor(cell);
    if (!record) continue;
    if (TERMINAL_RUN_STATUSES.has(record.run_status)) terminalRecords += 1;
    if (record.validity === "valid") validRecords += 1;
    if (record.cell_id === cell.id) exactCellIdentities += 1;
    if (recordSemanticIdentityMatches({
      record,
      cell,
      plan,
      planAuthority,
      matrixSha256: locks.matrix_sha256,
    })) exactSemanticIdentities += 1;
    if (jsonEqual(record.execution_control, plan.control_contract)) exactExecutionControls += 1;
    if (typeof record.effort === "string" && record.effort === cell.effort) {
      explicitExactEfforts += 1;
    }
    if (SWEEP_METADATA_FIELDS.every((field) => record[field] === locks[field])) {
      exactSweepLocks += 1;
    }
    const profile = contract.profiles.get(cell.model_id);
    if (record?.attribution?.runtime?.routing_attestation?.pass === true) {
      declaredPassingRoutingAttestations += 1;
    }
    if (record?.attribution?.runtime?.model_catalog_authority != null) {
      observedModelCatalogAuthorities += 1;
    }
    if (recomputeModelCatalogAuthority(cell, record, profile, plan, planAuthority)) {
      exactModelCatalogAuthorities += 1;
    }
    if (recomputeRoutingAttestation(cell, record, profile, contract, plan, planAuthority)) {
      exactRoutingAttestations += 1;
    }
  }
  const expected = matrix.cells.length;
  if (terminalRecords !== expected) reasons.push("not-all-records-terminal");
  if (validRecords !== expected) reasons.push("not-all-records-valid");
  if (exactCellIdentities !== expected) reasons.push("not-all-cell-identities-exact");
  if (exactSemanticIdentities !== expected) reasons.push("not-all-record-semantic-identities-exact");
  if (exactExecutionControls !== expected) reasons.push("not-all-execution-controls-exact");
  if (explicitExactEfforts !== expected) reasons.push("not-all-records-have-explicit-exact-effort");
  if (exactSweepLocks !== expected) reasons.push("not-all-record-sweep-locks-exact");
  if (declaredPassingRoutingAttestations !== expected) reasons.push("not-all-routing-attestations-declare-pass");
  if (exactRoutingAttestations !== expected) reasons.push("not-all-routing-attestations-exact");
  if (observedModelCatalogAuthorities !== expected) reasons.push("not-all-model-catalog-authorities-present");
  if (exactModelCatalogAuthorities !== expected) reasons.push("not-all-model-catalog-authorities-exact");
  return {
    interpretation_allowed: reasons.length === 0,
    required_terminal_exact_records: 51,
    observed_records: indexed.sourceRecords.length,
    terminal_records: terminalRecords,
    valid_records: validRecords,
    exact_cell_identity_records: exactCellIdentities,
    exact_semantic_identity_records: exactSemanticIdentities,
    exact_execution_control_records: exactExecutionControls,
    explicit_exact_effort_records: explicitExactEfforts,
    exact_sweep_lock_records: exactSweepLocks,
    declared_passing_routing_attestation_records: declaredPassingRoutingAttestations,
    exact_routing_attestation_records: exactRoutingAttestations,
    observed_model_catalog_authority_records: observedModelCatalogAuthorities,
    exact_model_catalog_authority_records: exactModelCatalogAuthorities,
    execution_state: {
      status: executionState.status ?? null,
      scheduled_cells: executionState.scheduled_cells ?? null,
      completed_cells: executionState.completed_cells ?? null,
      locked_plan_sha256: executionState.locked_plan_sha256,
    },
    authority: interpretationAuthority ?? null,
    reasons,
  };
}

function tokenComponents(record) {
  if (!record) return Object.fromEntries(TOKEN_COMPONENTS.map((field) => [field, null]));
  const usage = record.token_usage;
  if (!usage) return Object.fromEntries(TOKEN_COMPONENTS.map((field) => [field, null]));
  const observed = Array.isArray(usage.observed_components)
    ? new Set(usage.observed_components)
    : null;
  return Object.fromEntries(TOKEN_COMPONENTS.map((field) => {
    if (field === "total_tokens") {
      const complete = usage.input_output_complete === true
        || (observed?.has("input_tokens") && observed.has("output_tokens"));
      return [field, observed && !complete ? null : usage[field] ?? null];
    }
    return [field, observed && !observed.has(field) ? null : usage[field] ?? null];
  }));
}

function recomputeModelCatalogAuthority(cell, record, profile, plan, planAuthority) {
  const authority = record?.attribution?.runtime?.model_catalog_authority;
  const snapshot = planAuthority?.modelCatalogSnapshot;
  if (!authority || !profile || !snapshot) return false;
  const expectedIsolatedPath = join(
    resolve(plan.output_root),
    cell.id,
    ".benchmark",
    "codex-home",
    "model_catalog.json",
  );
  return Boolean(
    exactObjectKeys(authority, [
      "schema_version", "mode", "config_key", "source", "isolated_copy",
      "selected_profile", "verified_before_provider_execution", "mutable_fallback_allowed",
    ])
    && authority.schema_version === "0.1"
    && authority.mode === "immutable-local-model-catalog-json"
    && authority.config_key === "model_catalog_json"
    && exactObjectKeys(authority.source, ["path", "sha256", "bytes", "source_mode"])
    && authority.source.path === snapshot.model_catalog_source_path
    && authority.source.sha256 === snapshot.model_catalog_sha256
    && authority.source.bytes === snapshot.model_catalog_bytes
    && authority.source.source_mode === snapshot.model_catalog_source_mode
    && authority.source.source_mode === "immutable-snapshot-only"
    && exactObjectKeys(authority.isolated_copy, ["path", "sha256", "bytes", "copy_mode"])
    && authority.isolated_copy.path === expectedIsolatedPath
    && authority.isolated_copy.sha256 === snapshot.model_catalog_sha256
    && authority.isolated_copy.bytes === snapshot.model_catalog_bytes
    && authority.isolated_copy.copy_mode === "isolated-regular-file"
    && exactObjectKeys(authority.selected_profile, [
      "model_id", "model_profile_sha256", "default_effort", "supported_efforts",
    ])
    && authority.selected_profile.model_id === cell.model_id
    && authority.selected_profile.model_profile_sha256 === profile.model_profile_sha256
    && authority.selected_profile.default_effort === profile.default_effort
    && jsonEqual(authority.selected_profile.supported_efforts, profile.supported_efforts)
    && authority.selected_profile.supported_efforts.includes(cell.effort)
    && authority.verified_before_provider_execution === true
    && authority.mutable_fallback_allowed === false
    && snapshot.mutable_model_catalog_fallback_allowed === false
  );
}

function recomputeRoutingAttestation(cell, record, profile, contract, plan, planAuthority) {
  const runtime = record?.attribution?.runtime;
  const attestation = runtime?.routing_attestation;
  if (!attestation || !profile) return false;
  const pinnedProfile = attestation.pinned_profile;
  return Boolean(
    record.record_kind === SWEEP_RECORD_KIND
    && attestation.schema_version === "0.2"
    && attestation.pass === true
    && attestation.runtime === "codex"
    && attestation.model_id === cell.model_id
    && attestation.effort === cell.effort
    && attestation.provider_route === "codex"
    && runtime.runtime_target === "codex"
    && runtime.model_requested === cell.model_id
    && runtime.effort_requested === cell.effort
    && runtime.provider_effort_argument === cell.effort
    && ROUTING_CHECKS.every((check) => attestation.checks?.[check] === true)
    && pinnedProfile
    && pinnedProfile.cache_sha256 === contract.cache_sha256
    && pinnedProfile.model_profile_sha256 === profile.model_profile_sha256
    && pinnedProfile.default_effort === profile.default_effort
    && Array.isArray(pinnedProfile.supported_efforts)
    && JSON.stringify(pinnedProfile.supported_efforts) === JSON.stringify(profile.supported_efforts)
    && pinnedProfile.supported_efforts.includes(cell.effort)
    && recomputeModelCatalogAuthority(cell, record, profile, plan, planAuthority)
  );
}

function evidenceFor(cell, record, locks, profile, contract, plan, planAuthority) {
  const runtime = record?.attribution?.runtime ?? {};
  const routingAttestation = runtime.routing_attestation ?? null;
  const modelCatalogAuthority = runtime.model_catalog_authority ?? null;
  const recomputedModelCatalogAuthority = record
    ? recomputeModelCatalogAuthority(cell, record, profile, plan, planAuthority)
    : null;
  const recomputedRoutingPass = recomputeRoutingAttestation(
    cell,
    record,
    profile,
    contract,
    plan,
    planAuthority,
  );
  const modelConfigMatch = record
    ? record.model_id === cell.model_id && runtime.model_requested === cell.model_id
    : null;
  const modelReportMatch = record
    ? runtime.model_reported == null ? null : runtime.model_reported === cell.model_id
    : null;
  const providerObservedModelMatch = record
    ? runtime.model_evidence_mode === "provider-observed" && modelReportMatch === true
    : null;
  const publicEligible = record?.public_model_attribution_eligible ?? null;
  return {
    scheduled: {
      model_id: cell.model_id,
      configured_effort: cell.effort,
      ...locks,
    },
    observed: record ? {
      model_id: record.model_id,
      record_effort: recordEffort(record),
      legacy_budget_tier: record.budget_tier ?? null,
      model_requested: runtime.model_requested ?? null,
      model_reported: runtime.model_reported ?? null,
      model_evidence_mode: runtime.model_evidence_mode ?? null,
      effort_requested: runtime.effort_requested ?? null,
      provider_effort_argument: runtime.provider_effort_argument ?? null,
      public_model_attribution_eligible: publicEligible,
      routing_attestation: routingAttestation,
      model_catalog_authority: modelCatalogAuthority,
      experiment_id: record.experiment_id ?? null,
      task_set_sha256: record.task_set_sha256 ?? null,
      matrix_sha256: record.matrix_sha256 ?? null,
    } : null,
    attribution_scope: !record
      ? null
      : providerObservedModelMatch === true && publicEligible === true
        ? "provider-observed"
        : modelConfigMatch === true
          ? "configuration-only"
          : "unverified",
    exact_model_config_match: modelConfigMatch,
    exact_model_report_match: modelReportMatch,
    provider_observed_model_match: providerObservedModelMatch,
    exact_passing_routing_attestation: !record || !routingAttestation
      ? null
      : recomputedRoutingPass,
    routing_attestation_declared_pass: routingAttestation?.pass ?? null,
    exact_model_catalog_authority: recomputedModelCatalogAuthority,
    exact_effort_config_match: record
      ? recordEffort(record) === cell.effort && runtime.effort_requested === cell.effort
      : null,
    sweep_metadata_matches: Object.fromEntries(SWEEP_METADATA_FIELDS.map((field) => [
      field,
      !record || record[field] == null || locks[field] == null
        ? null
        : record[field] === locks[field],
    ])),
  };
}

function taskResult(cell, record, locks, profile, contract, plan, planAuthority) {
  return {
    task_id: cell.task_id,
    cell_id: cell.id,
    run_id: record?.run_id ?? null,
    validity: record?.validity ?? null,
    run_status: record?.run_status ?? null,
    ui_resolved: record?.validity === "valid" && typeof record.ui_resolved === "boolean"
      ? record.ui_resolved
      : null,
    objective: record?.objective_score != null
      ? { score: record.objective_score, max: record.objective_max }
      : null,
    proof: record?.runtime_diagnostics?.proof_trace ?? null,
    wall_time_ms: record?.wall_time_ms ?? null,
    token_components: tokenComponents(record),
    configuration_evidence: evidenceFor(
      cell,
      record,
      locks,
      profile,
      contract,
      plan,
      planAuthority,
    ),
  };
}

function coverageSummary(results, valueFor) {
  const values = results.map(valueFor);
  const reported = values.filter((value) => value != null);
  return {
    reported_tasks: reported.length,
    scheduled_tasks: results.length,
    values,
    total: reported.length === results.length ? reported.reduce((sum, value) => sum + value, 0) : null,
  };
}

function rawCoverage(results, valueFor) {
  const values = results.map(valueFor);
  return {
    reported_tasks: values.filter((value) => value != null).length,
    scheduled_tasks: results.length,
    values,
  };
}

function summarizeGroup(
  cells,
  recordFor,
  profile,
  locks,
  contract,
  plan,
  planAuthority,
  interpretationAllowed,
) {
  const orderedCells = [...cells].sort((left, right) => left.task_id.localeCompare(right.task_id));
  const results = orderedCells.map((cell) => taskResult(
    cell,
    recordFor(cell),
    locks,
    profile,
    contract,
    plan,
    planAuthority,
  ));
  const records = orderedCells.map((cell) => recordFor(cell)).filter(Boolean);
  const valid = records.filter((record) => record.validity === "valid");
  const resolved = results.filter((result) => result.ui_resolved === true).length;
  const configuredModelMatches = results.filter(
    (result) => result.configuration_evidence.exact_model_config_match === true,
  ).length;
  const configuredEffortMatches = results.filter(
    (result) => result.configuration_evidence.exact_effort_config_match === true,
  ).length;
  const reportedModelMatches = results.filter(
    (result) => result.configuration_evidence.exact_model_report_match === true,
  ).length;
  const providerObservedModelMatches = results.filter(
    (result) => result.configuration_evidence.provider_observed_model_match === true,
  ).length;
  const publiclyEligible = results.filter(
    (result) => result.configuration_evidence.observed?.public_model_attribution_eligible === true,
  ).length;
  const routingAttestations = results.filter(
    (result) => result.configuration_evidence.observed?.routing_attestation != null,
  ).length;
  const passingRoutingAttestations = results.filter(
    (result) => result.configuration_evidence.exact_passing_routing_attestation === true,
  ).length;
  const exactModelCatalogAuthorities = results.filter(
    (result) => result.configuration_evidence.exact_model_catalog_authority === true,
  ).length;
  const summary = {
    model_id: cells[0].model_id,
    effort: cells[0].effort,
    is_catalog_default_effort: profile?.default_effort === cells[0].effort,
    dispatch_compatibility: {
      model_profile_found: Boolean(profile),
      effort_supported_by_pinned_profile: profile?.supported_efforts.includes(cells[0].effort) ?? false,
      model_profile_sha256: profile?.model_profile_sha256 ?? null,
    },
    runs: {
      scheduled: cells.length,
      observed: records.length,
      valid: valid.length,
      complete: records.filter((record) => record.run_status === "complete").length,
      failed: records.filter((record) => record.run_status === "failed").length,
      timed_out: records.filter((record) => record.run_status === "timed_out").length,
      incomplete: records.filter((record) => record.run_status === "incomplete").length,
      invalid: records.filter((record) => record.validity !== "valid").length,
    },
    configuration_evidence: {
      observed_runs: records.length,
      exact_model_matches: configuredModelMatches,
      exact_model_report_matches: reportedModelMatches,
      provider_observed_model_matches: providerObservedModelMatches,
      public_model_attribution_eligible_runs: publiclyEligible,
      exact_configured_effort_matches: configuredEffortMatches,
      complete_exact_model_evidence: records.length === 3 && configuredModelMatches === 3,
      complete_provider_observed_model_evidence: records.length === 3 && providerObservedModelMatches === 3,
      complete_exact_effort_evidence: records.length === 3 && configuredEffortMatches === 3,
      routing_attestation_records: routingAttestations,
      exact_passing_routing_attestation_records: passingRoutingAttestations,
      complete_exact_passing_routing_attestation: records.length === 3 && passingRoutingAttestations === 3,
      exact_model_catalog_authority_records: exactModelCatalogAuthorities,
      complete_exact_model_catalog_authority:
        records.length === 3 && exactModelCatalogAuthorities === 3,
      attribution_scope: records.length === 0
        ? null
        : publiclyEligible === records.length && providerObservedModelMatches === records.length
          ? "provider-observed"
          : configuredModelMatches === records.length
            ? "configuration-only"
            : "incomplete-or-unverified",
    },
    raw_task_results: results,
    raw_measurement_coverage: {
      objective_score: rawCoverage(results, (result) => result.objective?.score ?? null),
      proof_compliance: rawCoverage(results, (result) => (
        typeof result.proof?.compliance_pass === "boolean" ? Number(result.proof.compliance_pass) : null
      )),
      wall_time_ms: coverageSummary(results, (result) => result.wall_time_ms),
      token_components: Object.fromEntries(TOKEN_COMPONENTS.map((component) => [
        component,
        coverageSummary(results, (result) => result.token_components[component]),
      ])),
    },
  };
  if (interpretationAllowed) {
    summary.ui_resolved_tasks = {
      resolved,
      scheduled: 3,
      label: `${resolved}/3`,
      valid_observations: results.filter((result) => typeof result.ui_resolved === "boolean").length,
      missing_or_invalid: results.filter((result) => result.ui_resolved == null).length,
    };
  }
  return summary;
}

function delta(left, right) {
  return left == null || right == null ? null : left - right;
}

function compareToDefault(group, baseline) {
  const byTask = new Map(baseline.raw_task_results.map((result) => [result.task_id, result]));
  const taskDeltas = group.raw_task_results.map((result) => {
    const control = byTask.get(result.task_id);
    const validPair = result.validity === "valid" && control?.validity === "valid";
    const comparableObjective = validPair && result.objective && control?.objective
      && result.objective.max === control.objective.max;
    return {
      task_id: result.task_id,
      ui_resolved_delta: validPair
        && typeof result.ui_resolved === "boolean" && typeof control?.ui_resolved === "boolean"
        ? Number(result.ui_resolved) - Number(control.ui_resolved)
        : null,
      objective_score_delta: comparableObjective
        ? result.objective.score - control.objective.score
        : null,
      objective_max: comparableObjective ? result.objective.max : null,
      proof_compliance_delta: (
        validPair
        && typeof result.proof?.compliance_pass === "boolean"
        && typeof control?.proof?.compliance_pass === "boolean"
      ) ? Number(result.proof.compliance_pass) - Number(control.proof.compliance_pass) : null,
      wall_time_ms_delta: validPair ? delta(result.wall_time_ms, control?.wall_time_ms) : null,
      token_component_deltas: Object.fromEntries(TOKEN_COMPONENTS.map((component) => [
        component,
        validPair
          ? delta(result.token_components[component], control?.token_components?.[component])
          : null,
      ])),
    };
  });
  const quality = taskDeltas.map((item) => item.ui_resolved_delta).filter((value) => value != null);
  const bothResolved = group.raw_task_results.filter((result) => {
    const control = byTask.get(result.task_id);
    return result.validity === "valid" && control?.validity === "valid"
      && result.ui_resolved === true && control.ui_resolved === true;
  }).length;
  const bothUnresolved = group.raw_task_results.filter((result) => {
    const control = byTask.get(result.task_id);
    return result.validity === "valid" && control?.validity === "valid"
      && result.ui_resolved === false && control.ui_resolved === false;
  }).length;
  const summarizeDeltas = (values) => {
    const reported = values.filter((value) => value != null);
    return {
      paired_tasks: reported.length,
      values,
      total: reported.length === 3 ? reported.reduce((sum, value) => sum + value, 0) : null,
      mean: reported.length ? reported.reduce((sum, value) => sum + value, 0) / reported.length : null,
    };
  };
  return {
    effort: group.effort,
    default_effort: baseline.effort,
    matched_quality_tasks: quality.length,
    ui_resolved_win_tie_loss: {
      wins: quality.filter((value) => value > 0).length,
      ties: quality.filter((value) => value === 0).length,
      losses: quality.filter((value) => value < 0).length,
      tie_breakdown: { both_resolved: bothResolved, both_unresolved: bothUnresolved },
    },
    task_deltas: taskDeltas,
    descriptive_deltas: {
      ui_resolved_tasks: summarizeDeltas(taskDeltas.map((item) => item.ui_resolved_delta)),
      objective_score: summarizeDeltas(taskDeltas.map((item) => item.objective_score_delta)),
      proof_compliance_tasks: summarizeDeltas(taskDeltas.map((item) => item.proof_compliance_delta)),
      wall_time_ms: summarizeDeltas(taskDeltas.map((item) => item.wall_time_ms_delta)),
      token_components: Object.fromEntries(TOKEN_COMPONENTS.map((component) => [
        component,
        summarizeDeltas(taskDeltas.map((item) => item.token_component_deltas[component])),
      ])),
    },
  };
}

export function aggregateCodexEffortSweep(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("input must be an object");
  const contract = asContract(
    input.model_effort_contract
      ?? input.contract
      ?? input.matrix?.codex_model_effort_contract,
  );
  const matrix = validateCells(input.matrix);
  validateAllSupportedPairs(matrix, contract);
  const planAuthority = validateExactPlanContract(input.matrix, matrix, contract);
  const lockState = sweepLocks(input, input.matrix, matrix.cells.length);
  const locks = lockState.values;
  const indexed = indexRecords(input.run_records ?? input.records, matrix.cells, locks);
  const recordFor = indexed.recordFor;
  const gate = interpretationGate({
    plan: input.matrix,
    planAuthority,
    matrix,
    indexed,
    locks,
    executionState: lockState.executionState,
    contract,
    interpretationAuthority: input.interpretation_authority ?? null,
  });

  const groupSummaries = [...matrix.groups.values()].map((cells) => (
    summarizeGroup(
      cells,
      recordFor,
      contract.profiles.get(cells[0].model_id),
      locks,
      contract,
      input.matrix,
      planAuthority,
      gate.interpretation_allowed,
    )
  ));
  const profileOrder = new Map(contract.orderedProfiles.map((profile, index) => [profile.model_id, index]));
  const effortOrder = new Map(contract.orderedProfiles.flatMap((profile) => (
    profile.supported_efforts.map((effort, index) => [`${profile.model_id}\u0000${effort}`, index])
  )));
  groupSummaries.sort((left, right) => (
    (profileOrder.get(left.model_id) ?? Number.MAX_SAFE_INTEGER) - (profileOrder.get(right.model_id) ?? Number.MAX_SAFE_INTEGER)
    || left.model_id.localeCompare(right.model_id)
    || (effortOrder.get(pairKey(left.model_id, left.effort)) ?? Number.MAX_SAFE_INTEGER)
      - (effortOrder.get(pairKey(right.model_id, right.effort)) ?? Number.MAX_SAFE_INTEGER)
    || left.effort.localeCompare(right.effort)
  ));

  const byModel = new Map();
  for (const group of groupSummaries) {
    if (!byModel.has(group.model_id)) byModel.set(group.model_id, []);
    byModel.get(group.model_id).push(group);
  }
  const defaultEffortComparisons = gate.interpretation_allowed
    ? contract.orderedProfiles.map((profile) => {
        const groups = byModel.get(profile.model_id) ?? [];
        const baseline = groups.find((group) => group.effort === profile.default_effort) ?? null;
        return {
          model_id: profile.model_id,
          default_effort: profile.default_effort,
          default_effort_scheduled: Boolean(baseline),
          comparisons: baseline
            ? groups.filter((group) => group !== baseline).map((group) => (
                compareToDefault(group, baseline)
              ))
            : [],
        };
      })
    : null;

  const scheduledByModel = new Map();
  for (const group of groupSummaries) {
    if (!scheduledByModel.has(group.model_id)) scheduledByModel.set(group.model_id, []);
    scheduledByModel.get(group.model_id).push(group.effort);
  }
  const dispatchCompatibility = contract.orderedProfiles.map((profile) => {
    const scheduled = scheduledByModel.get(profile.model_id) ?? [];
    return {
      model_id: profile.model_id,
      default_effort: profile.default_effort,
      supported_efforts: profile.supported_efforts,
      scheduled_efforts: profile.supported_efforts.filter((effort) => scheduled.includes(effort)),
      unscheduled_supported_efforts: profile.supported_efforts.filter((effort) => !scheduled.includes(effort)),
      unsupported_scheduled_efforts: scheduled.filter((effort) => !profile.supported_efforts.includes(effort)).sort(),
    };
  });

  const summary = {
    schema_version: "0.1",
    kind: "codex-all-effort-sweep-descriptive",
    interpretation_allowed: gate.interpretation_allowed,
    interpretation_gate: gate,
    task_ids: matrix.tasks,
    analysis_contract: {
      sweep_record_kind: SWEEP_RECORD_KIND,
      exact_model_effort_groups: true,
      task_count_per_group: 3,
      cross_model_pooling: false,
      missing_values: "reported-as-null-with-coverage",
      dispatch_compatibility_separate_from_quality: true,
      complete_block_interpretation_requires_valid_records: true,
      valid_timeout_is_terminal_evidence: true,
      interpretation_requires_separate_locked_artifacts: true,
      interpretation_requires_execution_state_record_hashes: true,
    },
    catalog_evidence: {
      cache_sha256: contract.cache_sha256,
      cache_fetched_at: contract.cache_fetched_at,
      cache_client_version: contract.cache_client_version,
      execution_model_authority: {
        mode: "immutable-local-model-catalog-json",
        config_key: "model_catalog_json",
        source_path: planAuthority.modelCatalogSnapshot.model_catalog_source_path,
        sha256: planAuthority.modelCatalogSnapshot.model_catalog_sha256,
        bytes: planAuthority.modelCatalogSnapshot.model_catalog_bytes,
        mutable_fallback_allowed:
          planAuthority.modelCatalogSnapshot.mutable_model_catalog_fallback_allowed,
      },
    },
    sweep_metadata_evidence: indexed.metadataEvidence,
    dispatch_compatibility: dispatchCompatibility,
    groups: groupSummaries,
  };
  if (gate.interpretation_allowed) {
    summary.within_model_default_effort_comparisons = defaultEffortComparisons;
  }
  return summary;
}

function recordsByCellId(value) {
  const records = asRecords(value);
  return new Map(records.map((record) => [record.cell_id, record]));
}

function loadRecordArtifactAuthority(executionState, recordsFileValue = null, { matrixRoot } = {}) {
  const stateCells = Array.isArray(executionState?.cells) ? executionState.cells : [];
  const explicitRecords = recordsFileValue == null ? null : recordsByCellId(recordsFileValue);
  const records = [];
  let verified = 0;
  let allAvailable = stateCells.length === 51;
  let allHashesMatch = stateCells.length === 51;
  for (const stateCell of stateCells) {
    const expectedControllerSha256 = stateCell?.artifact_hashes?.controller_run_record_sha256 ?? null;
    const expectedCompatibilitySha256 = stateCell?.artifact_hashes?.run_record_sha256 ?? null;
    const workspace = stateCell?.workspace ?? null;
    const compatibilityPath = typeof workspace === "string"
      ? resolve(workspace, ".benchmark", "run-record.json")
      : null;
    const exactMatrixRoot = typeof matrixRoot === "string" ? resolve(matrixRoot) : null;
    const expectedWorkspace = exactMatrixRoot && typeof stateCell?.id === "string"
      ? resolve(exactMatrixRoot, stateCell.id)
      : null;
    const workspaceIsBound = Boolean(
      expectedWorkspace
      && typeof workspace === "string"
      && resolve(workspace) === expectedWorkspace
      && dirname(expectedWorkspace) === exactMatrixRoot,
    );
    const controllerRoot = exactMatrixRoot && typeof stateCell?.id === "string"
      ? resolve(exactMatrixRoot, ".controller-artifacts", stateCell.id)
      : null;
    const controllerPath = controllerRoot ? join(controllerRoot, "run-record.json") : null;
    const controllerPathIsBound = Boolean(
      exactMatrixRoot
      && controllerRoot
      && dirname(dirname(controllerRoot)) === exactMatrixRoot,
    );
    if (!SHA256_PATTERN.test(expectedControllerSha256 ?? "")
      || !SHA256_PATTERN.test(expectedCompatibilitySha256 ?? "")
      || expectedControllerSha256 !== expectedCompatibilitySha256
      || !workspaceIsBound
      || !controllerPathIsBound
      || !controllerPath
      || !compatibilityPath
      || !existsSync(controllerPath)
      || !existsSync(compatibilityPath)
      || lstatSync(controllerPath).isSymbolicLink()
      || !lstatSync(controllerPath).isFile()
      || lstatSync(compatibilityPath).isSymbolicLink()
      || !lstatSync(compatibilityPath).isFile()) {
      allAvailable = false;
      allHashesMatch = false;
      continue;
    }
    const controllerBytes = readFileSync(controllerPath);
    const compatibilityBytes = readFileSync(compatibilityPath);
    if (sha256(controllerBytes) !== expectedControllerSha256
      || sha256(compatibilityBytes) !== expectedCompatibilitySha256
      || !controllerBytes.equals(compatibilityBytes)) {
      allHashesMatch = false;
      continue;
    }
    const record = JSON.parse(controllerBytes.toString("utf8"));
    if (record.cell_id !== stateCell.id) {
      allHashesMatch = false;
      continue;
    }
    const explicit = explicitRecords?.get(record.cell_id) ?? null;
    if (explicitRecords && (!explicit || !jsonEqual(explicit, record))) {
      throw new Error(`records file disagrees with execution-state-bound artifact: ${record.cell_id}`);
    }
    records.push(record);
    verified += 1;
  }
  if (explicitRecords && explicitRecords.size !== records.length && verified === stateCells.length) {
    throw new Error("records file contains copied, omitted, or extra metadata outside the artifact set");
  }
  return {
    records,
    authority: {
      expected: 51,
      verified,
      all_available: allAvailable,
      all_hashes_match: allHashesMatch && verified === 51,
    },
  };
}

function buildSeparateArtifactInput({ matrixPath, executionStatePath, recordsPath, contractPath }) {
  const exactMatrixPath = resolve(String(matrixPath));
  const exactExecutionStatePath = resolve(String(executionStatePath));
  const matrixBytes = readFileSync(exactMatrixPath);
  const matrix = JSON.parse(matrixBytes.toString("utf8"));
  const executionState = readJson(exactExecutionStatePath);
  const matrixSha256 = sha256(matrixBytes);
  if (executionState.locked_plan_sha256 !== matrixSha256) {
    throw new Error("execution-state lock does not match exact RUN-MATRIX.locked.json bytes");
  }
  const externalContract = contractPath ? readJson(resolve(String(contractPath))) : null;
  const contract = externalContract?.codex_model_effort_contract ?? externalContract
    ?? matrix.codex_model_effort_contract;
  if (externalContract && !jsonEqual(contract, matrix.codex_model_effort_contract)) {
    throw new Error("external model effort contract disagrees with locked plan bytes");
  }
  const recordsFileValue = recordsPath ? readJson(resolve(String(recordsPath))) : null;
  const artifacts = loadRecordArtifactAuthority(executionState, recordsFileValue, {
    matrixRoot: dirname(exactMatrixPath),
  });
  return {
    matrix,
    run_records: artifacts.records,
    model_effort_contract: contract,
    execution_state: executionState,
    matrix_locks: {
      experiment_id: matrix.experiment_id,
      task_set_sha256: matrix.effort_sweep_contract?.task_set_sha256,
      locked_plan_sha256: matrixSha256,
    },
    interpretation_authority: {
      source: INTERPRETATION_AUTHORITY_SOURCE,
      plan_sha256: matrixSha256,
      plan_contract_valid: true,
      execution_state_separate: true,
      execution_state_sha256: sha256(readFileSync(exactExecutionStatePath)),
      run_record_artifacts: artifacts.authority,
    },
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const inputPath = args.get("input");
  const matrixPath = args.get("matrix");
  const recordsPath = args.get("records");
  const contractPath = args.get("contract");
  const executionStatePath = args.get("execution-state");
  const outPath = args.get("out");
  if (!outPath || (!inputPath && !(matrixPath && executionStatePath))) {
    throw new Error("Usage: aggregate-codex-effort-sweep.mjs (--input <sweep.json> [--interpret] | --matrix <RUN-MATRIX.locked.json> [--records <run-records.json>] --execution-state <execution-state.json> [--contract <CATALOG-LOCK.json>]) --out <summary.json>");
  }
  if (inputPath && args.get("interpret")) {
    throw new Error("self-contained --input is coverage-only; interpretation requires separate locked matrix, execution-state, and artifact-bound run records");
  }
  const input = inputPath
    ? { ...readJson(resolve(String(inputPath))), interpretation_authority: null }
    : buildSeparateArtifactInput({ matrixPath, executionStatePath, recordsPath, contractPath });
  writeJson(resolve(String(outPath)), aggregateCodexEffortSweep(input));
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) main();

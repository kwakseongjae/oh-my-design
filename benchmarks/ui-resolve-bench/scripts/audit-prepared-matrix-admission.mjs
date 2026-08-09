#!/usr/bin/env node
import {
  closeSync,
  existsSync,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
} from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { benchRoot, parseArgs, readJson, sha256, treeManifest, writeJson } from "./_lib.mjs";
import { assertPreparedObjectiveMethodology } from "./run-prepared-matrix.mjs";
import {
  observeTaskSourceAuthority,
  validateCompleteBlockEffortScalingPlan,
  validatePreregisteredPlanReceipt,
} from "./prepare-run-matrix.mjs";

function allEqual(values) {
  return values.length > 0 && new Set(values.map((value) => JSON.stringify(value))).size === 1;
}

function authorizedControllerLeaseObservation(matrixRoot, authorization) {
  const path = join(matrixRoot, ".matrix-execution.lock");
  if (!existsSync(path)) return { present: false, authorized: false, receipt: null };
  const before = lstatSync(path);
  if (!before.isFile() || before.isSymbolicLink()) {
    return { present: true, authorized: false, receipt: null };
  }
  let descriptor = null;
  let info;
  let bytes;
  let after;
  try {
    descriptor = openSync(path, "r");
    info = fstatSync(descriptor);
    bytes = readFileSync(descriptor);
    after = lstatSync(path);
  } catch {
    return { present: true, authorized: false, receipt: null };
  } finally {
    if (descriptor !== null) closeSync(descriptor);
  }
  let value = null;
  try {
    value = JSON.parse(bytes.toString("utf8"));
  } catch {
    // Invalid lease bytes remain an unauthorized execution artifact.
  }
  const digest = sha256(bytes);
  const authorized = Boolean(
    authorization
    && info.isFile()
    && String(before.dev) === String(info.dev)
    && String(before.ino) === String(info.ino)
    && after.isFile()
    && !after.isSymbolicLink()
    && String(after.dev) === String(info.dev)
    && String(after.ino) === String(info.ino)
    && digest === authorization.sha256
    && String(info.dev) === authorization.dev
    && String(info.ino) === authorization.ino
    && value?.token === authorization.token
    && String(value?.pid) === authorization.pid
  );
  return {
    present: true,
    authorized,
    receipt: authorized ? {
      schema_version: "0.1",
      sha256: digest,
      token_sha256: sha256(String(value.token)),
      pid: Number(value.pid),
      dev: String(info.dev),
      ino: String(info.ino),
    } : null,
  };
}

export function auditPreparedMatrixAdmission(root, {
  authorizedControllerLease = null,
} = {}) {
  const matrixRoot = resolve(root);
  const planPath = join(matrixRoot, "RUN-MATRIX.locked.json");
  const statePath = join(matrixRoot, "matrix-state.json");
  const planBytes = readFileSync(planPath);
  const plan = JSON.parse(planBytes.toString("utf8"));
  const state = readJson(statePath);
  const lockedPlanSha256 = sha256(planBytes);
  if (state.locked_plan_sha256 !== lockedPlanSha256) {
    throw new Error("prepared-matrix-admission:locked-plan-sha256-drift");
  }
  const completeBlockEffortScaling = validateCompleteBlockEffortScalingPlan(plan);
  let preregistrationAuthority = null;
  if (completeBlockEffortScaling) {
    const receiptPath = join(
      matrixRoot,
      plan.preregistration_authority_contract.receipt_ref,
    );
    const receiptBytes = readFileSync(receiptPath);
    preregistrationAuthority = validatePreregisteredPlanReceipt(plan, planBytes, receiptBytes);
    if (state.preregistration_plan_sha256 !== preregistrationAuthority.plan_sha256
      || state.preregistration_receipt_sha256 !== preregistrationAuthority.receipt_sha256) {
      throw new Error("prepared-matrix-admission:preregistration-authority-drift");
    }
  }
  if (completeBlockEffortScaling
    && (state.task_set_sha256 !== completeBlockEffortScaling.task_set_sha256
      || state.schedule_sha256 !== completeBlockEffortScaling.schedule_sha256)) {
    throw new Error("prepared-matrix-admission:complete-block-authority-hash-drift");
  }
  const objectiveEvaluator = assertPreparedObjectiveMethodology(matrixRoot);
  if (state.status !== "prepared" || state.prepared_cells !== plan.cells.length) {
    throw new Error("prepared-matrix-admission:incomplete-preparation");
  }

  const independentTaskAuthority = completeBlockEffortScaling
    ? new Map(plan.task_lock_contract.tasks.map((taskLock) => {
        const taskRoot = join(benchRoot, "tasks", taskLock.task_id);
        return [
          taskLock.task_id,
          observeTaskSourceAuthority(taskRoot, taskLock.source_commit),
        ];
      }))
    : new Map();

  const cells = plan.cells.map((cell) => {
    const workspace = join(matrixRoot, cell.id);
    const manifest = readJson(join(workspace, ".benchmark", "manifest.json"));
    const matrixCell = readJson(join(workspace, ".benchmark", "matrix-cell.json"));
    for (const field of [
      "id", "task_id", "variant_id", "system_id", "runtime", "model_id",
      "effort", "timeout_seconds", "trial_index",
    ]) {
      if (matrixCell[field] !== cell[field]) {
        throw new Error(`prepared-matrix-admission:cell-contract-drift:${cell.id}:${field}`);
      }
    }
    if (manifest.task.id !== cell.task_id || manifest.variant.id !== cell.variant_id
      || manifest.runtime_target !== cell.runtime) {
      throw new Error(`prepared-matrix-admission:manifest-contract-drift:${cell.id}`);
    }
    const taskLock = plan.task_lock_contract?.tasks?.find((task) => task.task_id === cell.task_id)
      ?? null;
    if (completeBlockEffortScaling && (
      !taskLock
      || !independentTaskAuthority.has(cell.task_id)
      || matrixCell.observed_task_tree_sha256 !== taskLock.task_tree_sha256
      || manifest.task.observed_task_tree_sha256 !== taskLock.task_tree_sha256
      || matrixCell.task_source_commit !== taskLock.source_commit
      || manifest.task.source_commit !== taskLock.source_commit
      || matrixCell.task_git_tree_oid !== taskLock.git_tree_oid
      || manifest.task.git_tree_oid !== taskLock.git_tree_oid
      || matrixCell.baseline_provenance_sha256 !== taskLock.baseline_provenance_sha256
      || manifest.task.baseline_provenance?.sha256 !== taskLock.baseline_provenance_sha256
      || JSON.stringify(matrixCell.baseline_methodology)
        !== JSON.stringify(taskLock.baseline_methodology)
      || JSON.stringify(manifest.task.baseline_provenance?.methodology)
        !== JSON.stringify(taskLock.baseline_methodology)
    )) {
      throw new Error(`prepared-matrix-admission:task-tree-authority-drift:${cell.id}`);
    }
    if (completeBlockEffortScaling) {
      const independent = independentTaskAuthority.get(cell.task_id);
      const preparedObservation = manifest.task.source_observation;
      const authContract = plan.codex_catalog_snapshot_contract;
      const preparedAuthPath = join(workspace, ".codex", "auth.json");
      const preparedAuthInfo = lstatSync(preparedAuthPath);
      const preparedAuthBytes = readFileSync(preparedAuthPath);
      if (independent.source_commit !== taskLock.source_commit
        || independent.git_tree_oid !== taskLock.git_tree_oid
        || independent.exact_working_tree_match !== true
        || independent.working_tree.sha256 !== taskLock.task_tree_sha256
        || independent.committed_tree.sha256 !== taskLock.task_tree_sha256
        || JSON.stringify(independent.working_tree.files)
          !== JSON.stringify(taskLock.task_tree_files)
        || JSON.stringify(independent.committed_tree.files)
          !== JSON.stringify(taskLock.task_tree_files)
        || preparedObservation?.observer
          !== "prepare-sandbox-independent-task-root-byte-mode-v1"
        || preparedObservation?.working_tree?.sha256 !== independent.working_tree.sha256
        || preparedObservation?.committed_tree?.sha256 !== independent.committed_tree.sha256
        || JSON.stringify(preparedObservation?.working_tree?.files)
          !== JSON.stringify(independent.working_tree.files)
        || JSON.stringify(preparedObservation?.committed_tree?.files)
          !== JSON.stringify(independent.committed_tree.files)
        || preparedObservation?.git_tree_oid !== independent.git_tree_oid
        || preparedObservation?.source_commit !== independent.source_commit
        || preparedObservation?.exact_working_tree_match !== true) {
        throw new Error(`prepared-matrix-admission:independent-task-source-drift:${cell.id}`);
      }
      if (preparedAuthInfo.isSymbolicLink() || !preparedAuthInfo.isFile()
        || sha256(preparedAuthBytes) !== authContract.auth_json_sha256
        || preparedAuthBytes.length !== authContract.auth_json_bytes
        || manifest.runtime_auth_snapshot?.sha256 !== authContract.auth_json_sha256
        || manifest.runtime_auth_snapshot?.bytes !== authContract.auth_json_bytes
        || manifest.runtime_auth_snapshot?.source_mode !== "immutable-snapshot-only"
        || manifest.runtime_auth_snapshot?.copy_mode !== "isolated-regular-file"
        || manifest.runtime_auth_snapshot?.mutable_fallback_allowed !== false
        || manifest.runtime_auth_snapshot?.verified_before_provider_execution !== true) {
        throw new Error(`prepared-matrix-admission:isolated-auth-snapshot-drift:${cell.id}`);
      }
    }
    const product = treeManifest(workspace, {
      ignore: manifest.workspace.product_ignore,
    });
    const untouched = product.sha256 === manifest.workspace.product_initial_sha256;
    if (!untouched) throw new Error(`prepared-matrix-admission:product-drift:${cell.id}`);
    let deterministicReflow = null;
    if (manifest.task.deterministic_reflow_required || manifest.deterministic_reflow) {
      const sealed = manifest.deterministic_reflow;
      if (!sealed || sealed.mode !== "provider-sealed-source-contract" || sealed.provider_mutable !== false) {
        throw new Error(`prepared-matrix-admission:deterministic-reflow-contract-missing:${cell.id}`);
      }
      const artifactPath = join(workspace, sealed.artifact_path ?? "");
      if (!existsSync(artifactPath) || sha256(readFileSync(artifactPath)) !== sealed.artifact_sha256) {
        throw new Error(`prepared-matrix-admission:deterministic-reflow-artifact-drift:${cell.id}`);
      }
      const artifact = readJson(artifactPath);
      if (artifact.source_contract?.state !== "provider-sealed"
        || artifact.source_contract?.sha256 !== sealed.source_contract_sha256
        || artifact.inventory?.sha256 !== sealed.inventory_sha256) {
        throw new Error(`prepared-matrix-admission:deterministic-reflow-inventory-drift:${cell.id}`);
      }
      const baselineCoverage = sealed.baseline_critical_gate_coverage;
      if (artifact.source_contract?.schema_version === "0.2") {
        if (baselineCoverage?.complete !== true
          || baselineCoverage.sha256 !== artifact.source_contract.baseline_evidence_sha256
          || JSON.stringify(baselineCoverage.covered_critical_gates) !==
            JSON.stringify(artifact.source_contract.covered_critical_gates)) {
          throw new Error(`prepared-matrix-admission:deterministic-reflow-debt-coverage-drift:${cell.id}`);
        }
      }
      deterministicReflow = {
        mode: sealed.mode,
        artifact_sha256: sealed.artifact_sha256,
        source_contract_sha256: sealed.source_contract_sha256,
        inventory_sha256: sealed.inventory_sha256,
        provider_mutable: false,
        baseline_critical_gate_coverage: baselineCoverage,
        attested: true,
      };
    }
    return {
      id: cell.id,
      task_id: cell.task_id,
      variant_id: cell.variant_id,
      system_id: cell.system_id,
      runtime: cell.runtime,
      model_id: cell.model_id,
      effort: cell.effort,
      timeout_seconds: cell.timeout_seconds,
      trial_index: cell.trial_index,
      observed_task_tree_sha256: matrixCell.observed_task_tree_sha256 ?? null,
      task_source_commit: matrixCell.task_source_commit ?? null,
      task_git_tree_oid: matrixCell.task_git_tree_oid ?? null,
      baseline_provenance_sha256: matrixCell.baseline_provenance_sha256 ?? null,
      baseline_methodology: matrixCell.baseline_methodology ?? null,
      runtime_auth_sha256: manifest.runtime_auth_snapshot?.sha256 ?? null,
      runtime_auth_bytes: manifest.runtime_auth_snapshot?.bytes ?? null,
      task_prompt_sha256: matrixCell.task_prompt_sha256,
      starter_sha256: matrixCell.starter_sha256,
      product_initial_sha256: manifest.workspace.product_initial_sha256,
      skill_sha256: matrixCell.skill_sha256,
      source_commit: matrixCell.source_commit,
      source_publishable: matrixCell.source_publishable,
      objective_evaluator: matrixCell.objective_evaluator,
      deterministic_reflow: deterministicReflow,
      untouched,
    };
  });
  const normalizationPolicy = plan.control_contract?.admission_normalization_policy
    ?? "exact-task-cross-arm";
  const deterministicReflowContract = (sealed) => sealed && ({
    mode: sealed.mode,
    provider_mutable: sealed.provider_mutable,
    failed_critical_gates: sealed.baseline_critical_gate_coverage?.failed_critical_gates,
    covered_critical_gates: sealed.baseline_critical_gate_coverage?.covered_critical_gates,
    coverage_complete: sealed.baseline_critical_gate_coverage?.complete,
    attested: sealed.attested,
  });
  const taskLocks = new Map((plan.task_lock_contract?.tasks ?? [])
    .map((task) => [task.task_id, task]));
  const taskOrder = [...new Set(cells.map((cell) => cell.task_id))];
  const declaredTaskLocks = plan.task_lock_contract?.tasks ?? [];
  const taskLockExactUniqueOrder = Array.isArray(declaredTaskLocks)
    && declaredTaskLocks.length === taskOrder.length
    && new Set(declaredTaskLocks.map((task) => task?.task_id)).size === taskOrder.length
    && JSON.stringify(declaredTaskLocks.map((task) => task?.task_id)) === JSON.stringify(taskOrder);
  const taskLockAttested = cells.every((cell) => {
    const lock = taskLocks.get(cell.task_id);
    const taskBytesMatch = lock
      && lock.prompt_sha256 === cell.task_prompt_sha256
      && lock.starter_sha256 === cell.starter_sha256
      && (!completeBlockEffortScaling || (
        lock.task_tree_sha256 === cell.observed_task_tree_sha256
        && lock.baseline_provenance_sha256 === cell.baseline_provenance_sha256
        && JSON.stringify(lock.baseline_methodology) === JSON.stringify(cell.baseline_methodology)
      ));
    if (!taskBytesMatch) return false;
    if (!cell.deterministic_reflow) return true;
    return lock.baseline_evidence_sha256
      === cell.deterministic_reflow.baseline_critical_gate_coverage?.sha256
      && lock.source_contract_sha256 === cell.deterministic_reflow.source_contract_sha256;
  });
  const skillLock = plan.skill_lock_contract ?? null;
  const skillLockAttested = !skillLock || cells
    .filter((cell) => cell.system_id !== "raw-design-md")
    .every((cell) => (
      skillLock.source_commit === cell.source_commit
      && skillLock.skill_tree_sha256 === cell.skill_sha256
    ));
  const pairedGroups = new Map();
  for (const cell of cells) {
    const key = `${cell.task_id}\0${plan.cells.find((planned) => planned.id === cell.id)?.trial_index}`;
    if (!pairedGroups.has(key)) pairedGroups.set(key, []);
    pairedGroups.get(key).push(cell);
  }
  const pairedTaskContracts = [...pairedGroups.values()].every((group) => [
    "task_prompt_sha256",
    "starter_sha256",
    "product_initial_sha256",
    "runtime",
    "model_id",
    "effort",
    "timeout_seconds",
    "objective_evaluator",
  ].every((field) => allEqual(group.map((cell) => cell[field]))));
  const pairedArmSets = [...pairedGroups.values()].map((group) => group
    .map((cell) => `${cell.variant_id}\0${cell.system_id}`)
    .sort());
  const repeatedTaskGroups = taskOrder.map((taskId) => cells
    .filter((cell) => cell.task_id === taskId));
  const repeatedTrialSets = repeatedTaskGroups.map((group) => group
    .map((cell) => cell.trial_index)
    .sort((left, right) => left - right));
  const identicalRepeatedTrialSets = taskOrder.length >= 2
    && repeatedTrialSets.every((trials) => (
      trials.length >= 2 && new Set(trials).size === trials.length
    ))
    && allEqual(repeatedTrialSets);
  const withinTaskRepeatedContracts = repeatedTaskGroups.every((group) => [
    "task_prompt_sha256",
    "starter_sha256",
    "product_initial_sha256",
    "deterministic_reflow",
  ].every((field) => allEqual(group.map((cell) => cell[field]))));
  const equality = {
    cell_contract: true,
    task_id: allEqual(cells.map((cell) => cell.task_id)),
    task_id_distinct: new Set(cells.map((cell) => cell.task_id)).size === cells.length,
    task_prompt_sha256: allEqual(cells.map((cell) => cell.task_prompt_sha256)),
    starter_sha256: allEqual(cells.map((cell) => cell.starter_sha256)),
    product_initial_sha256: allEqual(cells.map((cell) => cell.product_initial_sha256)),
    variant_id: allEqual(cells.map((cell) => cell.variant_id)),
    system_id: allEqual(cells.map((cell) => cell.system_id)),
    runtime: allEqual(cells.map((cell) => cell.runtime)),
    model_id: allEqual(cells.map((cell) => cell.model_id)),
    effort: allEqual(cells.map((cell) => cell.effort)),
    timeout_seconds: allEqual(cells.map((cell) => cell.timeout_seconds)),
    skill_sha256: allEqual(cells.map((cell) => cell.skill_sha256)),
    source_commit: allEqual(cells.map((cell) => cell.source_commit)),
    source_publishable: cells.every((cell) => cell.source_publishable === true),
    objective_evaluator: allEqual(cells.map((cell) => cell.objective_evaluator)),
    deterministic_reflow: allEqual(cells.map((cell) => cell.deterministic_reflow)),
    deterministic_reflow_contract: allEqual(cells
      .map((cell) => deterministicReflowContract(cell.deterministic_reflow))),
    task_lock_attested: taskLockAttested,
    task_lock_exact_unique_order: taskLockExactUniqueOrder,
    skill_lock_attested: skillLockAttested,
    paired_task_contracts: pairedTaskContracts,
    paired_arm_rotation: pairedArmSets.length > 0
      && allEqual(pairedArmSets)
      && pairedArmSets[0].length >= 2
      && new Set(pairedArmSets[0]).size === pairedArmSets[0].length,
    repeated_task_count_at_least_two: taskOrder.length >= 2,
    repeated_trial_sets_identical: identicalRepeatedTrialSets,
    repeated_within_task_contracts: withinTaskRepeatedContracts,
    complete_block_task_count_three: completeBlockEffortScaling
      ? taskOrder.length === 3
      : false,
    complete_block_single_trial: completeBlockEffortScaling
      ? new Set(cells.map((cell) => cell.trial_index)).size === 1
      : false,
    complete_block_exact_pair_expansion: completeBlockEffortScaling
      ? taskOrder.every((taskId) => {
        const observed = cells
          .filter((cell) => cell.task_id === taskId)
          .map((cell) => `${cell.model_id}\0${cell.effort}`)
          .sort();
        const expected = completeBlockEffortScaling.ordered_model_effort_pairs
          .map((pair) => `${pair.model_id}\0${pair.effort}`)
          .sort();
        return observed.length === expected.length
          && new Set(observed).size === observed.length
          && JSON.stringify(observed) === JSON.stringify(expected);
      })
      : false,
    complete_block_within_task_contracts: completeBlockEffortScaling
      ? repeatedTaskGroups.every((group) => [
        "task_prompt_sha256",
        "starter_sha256",
        "product_initial_sha256",
        "variant_id",
        "system_id",
        "runtime",
        "timeout_seconds",
        "skill_sha256",
        "source_commit",
        "source_publishable",
        "objective_evaluator",
        "deterministic_reflow",
      ].every((field) => allEqual(group.map((cell) => cell[field]))))
      : false,
    complete_block_task_tree_authority: completeBlockEffortScaling
      ? cells.every((cell) => {
        const lock = taskLocks.get(cell.task_id);
        return lock
          && cell.observed_task_tree_sha256 === lock.task_tree_sha256
          && cell.task_source_commit === lock.source_commit
          && cell.task_git_tree_oid === lock.git_tree_oid;
      })
      : false,
    complete_block_isolated_auth_snapshot: completeBlockEffortScaling
      ? cells.every((cell) => (
        cell.runtime_auth_sha256 === plan.codex_catalog_snapshot_contract.auth_json_sha256
        && cell.runtime_auth_bytes === plan.codex_catalog_snapshot_contract.auth_json_bytes
      ))
      : false,
  };
  const requiredNormalization = normalizationPolicy === "cross-task-reliability"
    ? [
      "cell_contract",
      "task_id_distinct",
      "variant_id",
      "system_id",
      "runtime",
      "model_id",
      "effort",
      "timeout_seconds",
      "skill_sha256",
      "source_publishable",
      "objective_evaluator",
      "deterministic_reflow_contract",
      "task_lock_attested",
      "skill_lock_attested",
    ]
    : normalizationPolicy === "multi-task-repeated-reliability"
      ? [
        "cell_contract",
        "variant_id",
        "system_id",
        "runtime",
        "model_id",
        "effort",
        "timeout_seconds",
        "skill_sha256",
        "source_publishable",
        "objective_evaluator",
        "deterministic_reflow_contract",
        "task_lock_attested",
        "task_lock_exact_unique_order",
        "skill_lock_attested",
        "repeated_task_count_at_least_two",
        "repeated_trial_sets_identical",
        "repeated_within_task_contracts",
      ]
    : normalizationPolicy === "complete-block-effort-scaling"
      ? [
        "cell_contract",
        "variant_id",
        "system_id",
        "runtime",
        "timeout_seconds",
        "skill_sha256",
        "source_commit",
        "source_publishable",
        "objective_evaluator",
        "deterministic_reflow_contract",
        "task_lock_attested",
        "task_lock_exact_unique_order",
        "skill_lock_attested",
        "complete_block_task_count_three",
        "complete_block_single_trial",
        "complete_block_exact_pair_expansion",
        "complete_block_within_task_contracts",
        "complete_block_task_tree_authority",
        "complete_block_isolated_auth_snapshot",
      ]
    : normalizationPolicy === "paired-cross-task-comparison"
      ? [
        "cell_contract",
        "runtime",
        "model_id",
        "effort",
        "timeout_seconds",
        "source_publishable",
        "objective_evaluator",
        "task_lock_attested",
        "skill_lock_attested",
        "paired_task_contracts",
        "paired_arm_rotation",
      ]
      : [
      "cell_contract",
      "task_id",
      "task_prompt_sha256",
      "starter_sha256",
      "product_initial_sha256",
      "runtime",
      "model_id",
      "effort",
      "timeout_seconds",
      "objective_evaluator",
      "deterministic_reflow",
      ];
  if (!requiredNormalization.every((field) => equality[field])) {
    throw new Error("prepared-matrix-admission:normalization-mismatch");
  }
  if (cells.some((cell) => cell.system_id !== "raw-design-md" && !cell.source_publishable)) {
    throw new Error("prepared-matrix-admission:non-publishable-source");
  }

  const blockedByPlan = String(plan.status ?? "").includes("remote-execution-deferred");
  const runtimeAdmissionRequired = Boolean(completeBlockEffortScaling);
  const leaseObservation = authorizedControllerLeaseObservation(
    matrixRoot,
    authorizedControllerLease,
  );
  const executionArtifactsAbsent = !existsSync(join(matrixRoot, "execution-state.json"))
    && (!leaseObservation.present || leaseObservation.authorized)
    && cells.every((cell) => !existsSync(join(matrixRoot, cell.id, ".benchmark", "run-result.json")));
  if (!executionArtifactsAbsent) throw new Error("prepared-matrix-admission:execution-artifact-present");

  return {
    schema_version: "0.1",
    experiment_id: plan.experiment_id,
    status: blockedByPlan
      ? "PREPARED_PROVIDER_ZERO_EXECUTION_DEFERRED"
      : runtimeAdmissionRequired
        ? "PREPARATION_ONLY_PROVIDER_ZERO_RUNTIME_ADMISSION_REQUIRED"
        : "PREPARED_PROVIDER_ZERO",
    provider_calls: 0,
    model_exposures: 0,
    scheduled_cells: plan.cells.length,
    prepared_cells: state.prepared_cells,
    locked_plan_sha256: lockedPlanSha256,
    preregistration_plan_sha256: preregistrationAuthority?.plan_sha256 ?? null,
    preregistration_receipt_sha256: preregistrationAuthority?.receipt_sha256 ?? null,
    preparation_state_sha256: sha256(readFileSync(statePath)),
    objective_evaluator: objectiveEvaluator,
    normalization_policy: normalizationPolicy,
    required_normalization: requiredNormalization,
    normalization: equality,
    systems: [...new Set(cells.map((cell) => cell.system_id))],
    trials: [...new Set(plan.cells.map((cell) => cell.trial_index))].sort((a, b) => a - b),
    model_effort_pairs: completeBlockEffortScaling?.ordered_model_effort_pairs ?? null,
    effort_sweep_contract: completeBlockEffortScaling ? plan.effort_sweep_contract : null,
    provider_routing_contract: completeBlockEffortScaling ? plan.provider_routing_contract : null,
    task_set_sha256: completeBlockEffortScaling?.task_set_sha256 ?? null,
    schedule_sha256: completeBlockEffortScaling?.schedule_sha256 ?? null,
    interpretation_contract: completeBlockEffortScaling ? plan.interpretation_contract : null,
    exposure_evidence_contract: completeBlockEffortScaling ? plan.exposure_evidence_contract : null,
    source_attestation: Object.fromEntries(cells
      .filter((cell) => cell.skill_sha256)
      .map((cell) => [cell.system_id, {
        source_commit: cell.source_commit,
        skill_sha256: cell.skill_sha256,
        publishable: cell.source_publishable,
      }])),
    execution_admission: {
      allowed: !blockedByPlan && !runtimeAdmissionRequired,
      preparation_only: runtimeAdmissionRequired,
      runtime_admission_required: runtimeAdmissionRequired,
      reason: blockedByPlan
        ? "locked-plan-remote-execution-deferred"
        : runtimeAdmissionRequired
          ? "immutable-codex-runtime-admission-required"
          : null,
      execution_artifacts_absent: executionArtifactsAbsent,
      authorized_controller_lease: leaseObservation.receipt,
      reprepare_on_objective_methodology_drift: true,
    },
    cells,
  };
}

async function main() {
  const args = parseArgs();
  const root = args.get("root") ? resolve(String(args.get("root"))) : null;
  const out = args.get("out") ? resolve(String(args.get("out"))) : null;
  if (!root) {
    console.error("usage: audit-prepared-matrix-admission.mjs --root <prepared-root> [--out <report.json>]");
    process.exitCode = 2;
    return;
  }
  const leaseKeys = [
    "authorized-controller-lease-token",
    "authorized-controller-lease-sha256",
    "authorized-controller-lease-pid",
    "authorized-controller-lease-dev",
    "authorized-controller-lease-ino",
  ];
  const suppliedLeaseKeys = leaseKeys.filter((key) => args.has(key));
  if (suppliedLeaseKeys.length !== 0 && suppliedLeaseKeys.length !== leaseKeys.length) {
    throw new Error("authorized controller lease arguments must be supplied together");
  }
  const authorizedControllerLease = suppliedLeaseKeys.length === 0 ? null : {
    token: String(args.get("authorized-controller-lease-token")),
    sha256: String(args.get("authorized-controller-lease-sha256")),
    pid: String(args.get("authorized-controller-lease-pid")),
    dev: String(args.get("authorized-controller-lease-dev")),
    ino: String(args.get("authorized-controller-lease-ino")),
  };
  const report = auditPreparedMatrixAdmission(root, { authorizedControllerLease });
  if (out) writeJson(out, report);
  console.log(JSON.stringify(report, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}

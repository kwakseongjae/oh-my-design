#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, sha256, treeManifest, writeJson } from "./_lib.mjs";
import { assertPreparedObjectiveMethodology } from "./run-prepared-matrix.mjs";

function allEqual(values) {
  return values.length > 0 && new Set(values.map((value) => JSON.stringify(value))).size === 1;
}

export function auditPreparedMatrixAdmission(root) {
  const matrixRoot = resolve(root);
  const planPath = join(matrixRoot, "RUN-MATRIX.locked.json");
  const statePath = join(matrixRoot, "matrix-state.json");
  const plan = readJson(planPath);
  const state = readJson(statePath);
  const objectiveEvaluator = assertPreparedObjectiveMethodology(matrixRoot);
  if (state.status !== "prepared" || state.prepared_cells !== plan.cells.length) {
    throw new Error("prepared-matrix-admission:incomplete-preparation");
  }

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
  const taskLockAttested = cells.every((cell) => {
    const lock = taskLocks.get(cell.task_id);
    const taskBytesMatch = lock
      && lock.prompt_sha256 === cell.task_prompt_sha256
      && lock.starter_sha256 === cell.starter_sha256;
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
    source_publishable: cells.every((cell) => cell.source_publishable === true),
    objective_evaluator: allEqual(cells.map((cell) => cell.objective_evaluator)),
    deterministic_reflow: allEqual(cells.map((cell) => cell.deterministic_reflow)),
    deterministic_reflow_contract: allEqual(cells
      .map((cell) => deterministicReflowContract(cell.deterministic_reflow))),
    task_lock_attested: taskLockAttested,
    skill_lock_attested: skillLockAttested,
    paired_task_contracts: pairedTaskContracts,
    paired_arm_rotation: pairedArmSets.length > 0
      && allEqual(pairedArmSets)
      && pairedArmSets[0].length >= 2
      && new Set(pairedArmSets[0]).size === pairedArmSets[0].length,
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
  const executionArtifactsAbsent = !existsSync(join(matrixRoot, "execution-state.json"))
    && !existsSync(join(matrixRoot, ".matrix-execution.lock"))
    && cells.every((cell) => !existsSync(join(matrixRoot, cell.id, ".benchmark", "run-result.json")));
  if (!executionArtifactsAbsent) throw new Error("prepared-matrix-admission:execution-artifact-present");

  return {
    schema_version: "0.1",
    experiment_id: plan.experiment_id,
    status: blockedByPlan ? "PREPARED_PROVIDER_ZERO_EXECUTION_DEFERRED" : "PREPARED_PROVIDER_ZERO",
    provider_calls: 0,
    model_exposures: 0,
    scheduled_cells: plan.cells.length,
    prepared_cells: state.prepared_cells,
    locked_plan_sha256: sha256(readFileSync(planPath)),
    preparation_state_sha256: sha256(readFileSync(statePath)),
    objective_evaluator: objectiveEvaluator,
    normalization_policy: normalizationPolicy,
    required_normalization: requiredNormalization,
    normalization: equality,
    systems: [...new Set(cells.map((cell) => cell.system_id))],
    trials: [...new Set(plan.cells.map((cell) => cell.trial_index))].sort((a, b) => a - b),
    source_attestation: Object.fromEntries(cells
      .filter((cell) => cell.skill_sha256)
      .map((cell) => [cell.system_id, {
        source_commit: cell.source_commit,
        skill_sha256: cell.skill_sha256,
        publishable: cell.source_publishable,
      }])),
    execution_admission: {
      allowed: !blockedByPlan,
      reason: blockedByPlan ? "locked-plan-remote-execution-deferred" : null,
      execution_artifacts_absent: executionArtifactsAbsent,
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
  const report = auditPreparedMatrixAdmission(root);
  if (out) writeJson(out, report);
  console.log(JSON.stringify(report, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}

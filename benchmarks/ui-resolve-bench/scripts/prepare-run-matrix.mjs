#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, treeManifest, writeJson } from "./_lib.mjs";
import {
  HOST_POLICY_MODES,
  prepareHostPolicyCell,
} from "./host-policy-contract.mjs";
import {
  assertObjectiveMethodologyPin,
  currentObjectiveMethodology,
} from "./objective-methodology-contract.mjs";

const VALID_RUNTIMES = new Set(["codex", "claude-code", "cursor"]);
const VALID_EFFORTS = new Set(["low", "medium", "high", "xhigh"]);
const VALID_BENCHMARK_FAMILIES = new Set(["model", "skill", "harness", "prompt-arena", "factorial"]);
const VALID_COMPARISON_MODES = new Set(["native-capability", "iso-external-budget", "effort-scaling"]);
const VALID_BUDGET_MODES = new Set(["hard-cap", "observed-only"]);
const VALID_PACING_POLICIES = new Set(["none", "fixed-inter-cell"]);
const VALID_ADMISSION_NORMALIZATION_POLICIES = new Set([
  "exact-task-cross-arm",
  "cross-task-reliability",
]);
const VALID_ATTRIBUTION_SCOPES = new Set([
  "provider-observed-only",
  "internal-registered-display-name",
]);

function validateBudgetControl(value, label, limitField) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`matrix control_contract.${label} must be an object`);
  }
  if (!VALID_BUDGET_MODES.has(value.mode)) {
    throw new Error(`matrix control_contract.${label}.mode is invalid`);
  }
  if (value.mode === "hard-cap") {
    if (!Number.isInteger(value[limitField]) || value[limitField] < 1) {
      throw new Error(`matrix control_contract.${label}.${limitField} must be a positive integer for hard-cap`);
    }
  } else if (value[limitField] !== null) {
    throw new Error(`matrix control_contract.${label}.${limitField} must be null for observed-only`);
  }
}

export function validateControlContract(plan) {
  const control = plan?.control_contract;
  if (!control || typeof control !== "object" || Array.isArray(control)) {
    throw new Error("matrix control_contract is required for schema 0.3");
  }
  if (!VALID_COMPARISON_MODES.has(control.comparison_mode)) {
    throw new Error("matrix control_contract.comparison_mode is invalid");
  }
  if (control.effort_semantics !== "runtime-native-ordinal-not-cross-provider-equivalent") {
    throw new Error("matrix control_contract.effort_semantics must reject cross-provider effort equivalence");
  }
  if (!["explicit-fixed", "runtime-default-frozen"].includes(control.temperature_policy)) {
    throw new Error("matrix control_contract.temperature_policy is invalid");
  }
  if (!Number.isInteger(control.timeout_seconds) || control.timeout_seconds < 1) {
    throw new Error("matrix control_contract.timeout_seconds must be a positive integer");
  }
  if (!Number.isInteger(control.max_concurrency) || control.max_concurrency < 1) {
    throw new Error("matrix control_contract.max_concurrency must be a positive integer");
  }
  if (!["eligible", "descriptive-only"].includes(control.latency_comparison)) {
    throw new Error("matrix control_contract.latency_comparison is invalid");
  }
  if (control.latency_comparison === "eligible" && control.max_concurrency !== 1) {
    throw new Error("matrix latency comparison is eligible only with max_concurrency 1");
  }
  if (control.retry_policy !== "none-primary") {
    throw new Error("matrix control_contract.retry_policy must be none-primary");
  }
  if (control.timeout_policy !== "count-as-valid-failure") {
    throw new Error("matrix control_contract.timeout_policy must count timeouts as valid failures");
  }
  if (control.infrastructure_policy !== "retain-freeze-and-repreregister") {
    throw new Error("matrix control_contract.infrastructure_policy must retain, freeze, and repreregister");
  }
  if (!["balanced-rotation", "fixed-preregistered"].includes(control.task_order_policy)) {
    throw new Error("matrix control_contract.task_order_policy is invalid");
  }
  const admissionNormalizationPolicy = control.admission_normalization_policy
    ?? "exact-task-cross-arm";
  if (!VALID_ADMISSION_NORMALIZATION_POLICIES.has(admissionNormalizationPolicy)) {
    throw new Error("matrix control_contract.admission_normalization_policy is invalid");
  }
  if (
    admissionNormalizationPolicy === "cross-task-reliability"
    && control.task_order_policy !== "fixed-preregistered"
  ) {
    throw new Error("matrix cross-task reliability requires fixed-preregistered task order");
  }
  if (control.pacing !== undefined) {
    const pacing = control.pacing;
    if (!pacing || typeof pacing !== "object" || Array.isArray(pacing)) {
      throw new Error("matrix control_contract.pacing must be an object");
    }
    if (!VALID_PACING_POLICIES.has(pacing.policy)) {
      throw new Error("matrix control_contract.pacing.policy is invalid");
    }
    if (!Number.isInteger(pacing.inter_cell_delay_seconds) || pacing.inter_cell_delay_seconds < 0) {
      throw new Error("matrix control_contract.pacing.inter_cell_delay_seconds must be a non-negative integer");
    }
    if (pacing.policy === "none" && pacing.inter_cell_delay_seconds !== 0) {
      throw new Error("matrix control_contract.pacing none policy requires zero delay");
    }
    if (pacing.policy === "fixed-inter-cell" && pacing.inter_cell_delay_seconds < 1) {
      throw new Error("matrix control_contract.pacing fixed-inter-cell policy requires a positive delay");
    }
    if (pacing.inter_cell_delay_seconds > 3600) {
      throw new Error("matrix control_contract.pacing delay must not exceed 3600 seconds");
    }
    if (pacing.applies_between_cells_only !== true) {
      throw new Error("matrix control_contract.pacing must apply between cells only");
    }
    if (pacing.counts_toward_cell_wall_time !== false) {
      throw new Error("matrix control_contract.pacing must stay outside per-cell wall time");
    }
  }

  validateBudgetControl(control.token_budget, "token_budget", "limit_tokens");
  if (control.token_budget.usage_required !== true) {
    throw new Error("matrix control_contract.token_budget.usage_required must be true");
  }
  const requiredComponents = ["input", "cached_input", "output", "reasoning_output"];
  if (
    !Array.isArray(control.token_budget.account_components)
    || requiredComponents.some((component) => !control.token_budget.account_components.includes(component))
  ) {
    throw new Error("matrix control_contract.token_budget.account_components is incomplete");
  }
  if (control.token_budget.cached_input_separate !== true) {
    throw new Error("matrix control_contract.token_budget.cached_input_separate must be true");
  }
  if (control.token_budget.cost_policy !== "provider-reported-or-pinned-price-equivalent") {
    throw new Error("matrix control_contract.token_budget.cost_policy is invalid");
  }
  validateBudgetControl(control.step_budget, "step_budget", "limit_steps");

  for (const cell of plan.cells ?? []) {
    if (cell.timeout_seconds !== control.timeout_seconds) {
      throw new Error(`cell ${cell.id ?? "<unknown>"}.timeout_seconds must match control_contract`);
    }
  }
  return control;
}

export function validateRunMatrixPlan(plan) {
  if (!["0.1", "0.2", "0.3"].includes(plan?.schema_version)) {
    throw new Error("matrix schema_version must be 0.1, 0.2, or 0.3");
  }
  if (["0.2", "0.3"].includes(plan.schema_version)) {
    for (const field of ["suite_version", "product_version", "execution_purpose"]) {
      if (typeof plan[field] !== "string" || !plan[field]) {
        throw new Error(`matrix ${field} is required for schema ${plan.schema_version}`);
      }
    }
  }
  if (plan.schema_version === "0.3") {
    if (!VALID_BENCHMARK_FAMILIES.has(plan.family)) {
      throw new Error("matrix family is required for schema 0.3");
    }
    validateControlContract(plan);
  }
  if (typeof plan.experiment_id !== "string" || !plan.experiment_id) {
    throw new Error("matrix experiment_id is required");
  }
  if (typeof plan.output_root !== "string" || !isAbsolute(plan.output_root)) {
    throw new Error("matrix output_root must be an absolute path");
  }
  if (
    plan.vendors_root !== undefined
    && (typeof plan.vendors_root !== "string" || !plan.vendors_root || !isAbsolute(plan.vendors_root))
  ) {
    throw new Error("matrix vendors_root must be an absolute path");
  }
  if (
    plan.attribution_scope !== undefined
    && !VALID_ATTRIBUTION_SCOPES.has(plan.attribution_scope)
  ) {
    throw new Error("matrix attribution_scope is invalid");
  }
  if (!Array.isArray(plan.cells) || !plan.cells.length) throw new Error("matrix cells are required");

  if (plan.candidate_preflight_contract !== undefined) {
    const contract = plan.candidate_preflight_contract;
    if (!contract || typeof contract !== "object" || Array.isArray(contract)) {
      throw new Error("matrix candidate_preflight_contract must be an object");
    }
    for (const field of [
      "required",
      "complete_candidate_bytes",
      "same_static_evaluator",
      "passed_receipt_required_before_product_edit",
      "candidate_sha256_must_equal_final_product_sha256",
      "source_contract_sha256_must_match",
      "sealed_inventory_sha256_must_match",
    ]) {
      if (contract[field] !== true) {
        throw new Error(`matrix candidate_preflight_contract.${field} must be true`);
      }
    }
  }

  if (plan.harness_delivery_gates !== undefined) {
    const gates = plan.harness_delivery_gates;
    if (!gates || typeof gates !== "object" || Array.isArray(gates)) {
      throw new Error("matrix harness_delivery_gates must be an object");
    }
    if (!Number.isInteger(gates.first_product_write_ms_max) || gates.first_product_write_ms_max < 1) {
      throw new Error("matrix harness_delivery_gates.first_product_write_ms_max must be a positive integer");
    }
    if (
      gates.variant_kinds !== undefined
      && (
        !Array.isArray(gates.variant_kinds)
        || !gates.variant_kinds.length
        || gates.variant_kinds.some((kind) => typeof kind !== "string" || !kind)
      )
    ) {
      throw new Error("matrix harness_delivery_gates.variant_kinds must be a non-empty string array");
    }
    if (
      gates.last_advisory_to_first_product_write_ms_max !== undefined
      && (
        !Number.isInteger(gates.last_advisory_to_first_product_write_ms_max)
        || gates.last_advisory_to_first_product_write_ms_max < 1
      )
    ) {
      throw new Error("matrix harness_delivery_gates.last_advisory_to_first_product_write_ms_max must be a positive integer");
    }
    if (
      gates.require_targeted_first_product_edit !== undefined
      && typeof gates.require_targeted_first_product_edit !== "boolean"
    ) {
      throw new Error("matrix harness_delivery_gates.require_targeted_first_product_edit must be boolean");
    }
    if (typeof gates.forbid_replacement_verifier !== "boolean") {
      throw new Error("matrix harness_delivery_gates.forbid_replacement_verifier must be boolean");
    }
  }

  if (plan.proof_execution_gates !== undefined) {
    const gates = plan.proof_execution_gates;
    if (!gates || typeof gates !== "object" || Array.isArray(gates)) {
      throw new Error("matrix proof_execution_gates must be an object");
    }
    if (
      !Array.isArray(gates.system_ids)
      || !gates.system_ids.length
      || gates.system_ids.some((id) => typeof id !== "string" || !id)
    ) {
      throw new Error("matrix proof_execution_gates.system_ids must be a non-empty string array");
    }
    if (gates.enforcement !== "promotion-report") {
      throw new Error("matrix proof_execution_gates.enforcement must be promotion-report");
    }
    if (gates.require_analyzable !== true) {
      throw new Error("matrix proof_execution_gates.require_analyzable must be true");
    }
    for (const field of [
      "max_browser_recovery_count",
      "max_duplicate_static_closure_count",
      "max_verification_after_ready_count",
      "max_document_overflow_px",
      "max_passive_protected_text_scroll_containers",
    ]) {
      if (gates[field] !== undefined && (!Number.isInteger(gates[field]) || gates[field] < 0)) {
        throw new Error(`matrix proof_execution_gates.${field} must be a non-negative integer`);
      }
    }
    for (const field of [
      "require_closed_reflow_artifact",
      "require_measured_browser_attempt",
      "require_character_range_line_oracle",
      "require_actual_zoom_observation",
      "require_exact_named_consumer_attachment",
      "forbid_launched_browser",
      "require_locked_typography",
    ]) {
      if (gates[field] !== undefined && typeof gates[field] !== "boolean") {
        throw new Error(`matrix proof_execution_gates.${field} must be boolean`);
      }
    }
    if (
      gates.minimum_inline_fit_reserve_css_px !== undefined
      && (!Number.isFinite(gates.minimum_inline_fit_reserve_css_px) || gates.minimum_inline_fit_reserve_css_px < 0)
    ) throw new Error("matrix proof_execution_gates.minimum_inline_fit_reserve_css_px must be non-negative");
    if (
      gates.shipped_runner_system_ids !== undefined
      && (
        !Array.isArray(gates.shipped_runner_system_ids)
        || !gates.shipped_runner_system_ids.length
        || gates.shipped_runner_system_ids.some((id) => typeof id !== "string" || !id)
      )
    ) throw new Error("matrix proof_execution_gates.shipped_runner_system_ids must be a non-empty string array");
    if (
      gates.shipped_runner_command_suffix !== undefined
      && (typeof gates.shipped_runner_command_suffix !== "string" || !gates.shipped_runner_command_suffix)
    ) throw new Error("matrix proof_execution_gates.shipped_runner_command_suffix must be a non-empty string");
  }

  if (plan.host_policy_comparison !== undefined && plan.shared_host_policy !== undefined) {
    throw new Error("matrix cannot combine host_policy_comparison and shared_host_policy");
  }

  if (plan.browser_execution_contract !== undefined) {
    const browser = plan.browser_execution_contract;
    if (!browser || typeof browser !== "object" || Array.isArray(browser)) {
      throw new Error("matrix browser_execution_contract must be an object");
    }
    if (browser.require_browser_proof !== true) {
      throw new Error("matrix browser_execution_contract.require_browser_proof must be true");
    }
    if (browser.runtime_dir_shared !== true || browser.exact_named_socket !== true) {
      throw new Error("matrix browser_execution_contract must require shared runtime and exact named socket");
    }
  }

  if (plan.host_policy_comparison !== undefined) {
    const comparison = plan.host_policy_comparison;
    if (!comparison || typeof comparison !== "object" || Array.isArray(comparison)) {
      throw new Error("matrix host_policy_comparison must be an object");
    }
    if (comparison.target_runtime !== "codex") {
      throw new Error("matrix host_policy_comparison.target_runtime must be codex");
    }
    if (comparison.sole_arm_delta !== "project-proof-policy-installation") {
      throw new Error("matrix host_policy_comparison.sole_arm_delta is invalid");
    }
    if (comparison.require_installed_state !== true) {
      throw new Error("matrix host_policy_comparison.require_installed_state must be true");
    }
    for (const field of ["require_delivery_ready", "require_browser_attempt"]) {
      if (comparison[field] !== undefined && typeof comparison[field] !== "boolean") {
        throw new Error(`matrix host_policy_comparison.${field} must be boolean`);
      }
    }
    for (const field of [
      "max_unblocked_browser_recovery_count",
      "max_unblocked_duplicate_static_closure_count",
      "max_unblocked_verification_after_ready_count",
    ]) {
      if (!Number.isInteger(comparison[field]) || comparison[field] < 0) {
        throw new Error(`matrix host_policy_comparison.${field} must be a non-negative integer`);
      }
    }
  }

  if (plan.shared_host_policy !== undefined) {
    const shared = plan.shared_host_policy;
    if (!shared || typeof shared !== "object" || Array.isArray(shared)) {
      throw new Error("matrix shared_host_policy must be an object");
    }
    if (shared.target_runtime !== "codex") {
      throw new Error("matrix shared_host_policy.target_runtime must be codex");
    }
    if (shared.mode !== "installed-opt-in") {
      throw new Error("matrix shared_host_policy.mode must be installed-opt-in");
    }
    if (shared.require_installed_state !== true) {
      throw new Error("matrix shared_host_policy.require_installed_state must be true");
    }
    for (const field of ["require_delivery_ready", "require_browser_attempt"]) {
      if (shared[field] !== undefined && typeof shared[field] !== "boolean") {
        throw new Error(`matrix shared_host_policy.${field} must be boolean`);
      }
    }
    for (const field of [
      "max_unblocked_browser_recovery_count",
      "max_unblocked_duplicate_static_closure_count",
      "max_unblocked_verification_after_ready_count",
    ]) {
      if (!Number.isInteger(shared[field]) || shared[field] < 0) {
        throw new Error(`matrix shared_host_policy.${field} must be a non-negative integer`);
      }
    }
  }

  const ids = new Set();
  const pairKeys = new Set();
  for (const [index, cell] of plan.cells.entries()) {
    const label = `cell ${index + 1}`;
    for (const field of ["id", "task_id", "variant_id", "system_id", "runtime", "model_id", "effort"]) {
      if (typeof cell?.[field] !== "string" || !cell[field]) throw new Error(`${label}.${field} is required`);
    }
    if (!/^[a-z0-9][a-z0-9-]*$/.test(cell.id)) throw new Error(`${label}.id is invalid`);
    if (ids.has(cell.id)) throw new Error(`duplicate matrix cell id: ${cell.id}`);
    ids.add(cell.id);
    if (!VALID_RUNTIMES.has(cell.runtime)) throw new Error(`${label}.runtime is invalid`);
    if (!VALID_EFFORTS.has(cell.effort)) throw new Error(`${label}.effort is invalid`);
    if (!Number.isInteger(cell.trial_index) || cell.trial_index < 1) {
      throw new Error(`${label}.trial_index must be a positive integer`);
    }
    if (!Number.isInteger(cell.timeout_seconds) || cell.timeout_seconds < 1) {
      throw new Error(`${label}.timeout_seconds must be a positive integer`);
    }
    if (cell.allow_dirty_source !== undefined && typeof cell.allow_dirty_source !== "boolean") {
      throw new Error(`${label}.allow_dirty_source must be boolean`);
    }
    if (plan.host_policy_comparison) {
      if (!HOST_POLICY_MODES.includes(cell.host_policy_mode)) {
        throw new Error(`${label}.host_policy_mode is invalid`);
      }
      if (cell.runtime !== plan.host_policy_comparison.target_runtime) {
        throw new Error(`${label}.runtime must match host_policy_comparison.target_runtime`);
      }
    } else if (plan.shared_host_policy) {
      if (cell.host_policy_mode !== plan.shared_host_policy.mode) {
        throw new Error(`${label}.host_policy_mode must match shared_host_policy.mode`);
      }
      if (cell.runtime !== plan.shared_host_policy.target_runtime) {
        throw new Error(`${label}.runtime must match shared_host_policy.target_runtime`);
      }
    } else if (cell.host_policy_mode !== undefined) {
      throw new Error(`${label}.host_policy_mode requires matrix host policy configuration`);
    }
    const pairKey = `${cell.task_id}\0${cell.trial_index}\0${cell.system_id}`;
    if (pairKeys.has(pairKey)) throw new Error(`duplicate task/trial/system cell: ${pairKey.replaceAll("\0", "/")}`);
    pairKeys.add(pairKey);
  }
  if (plan.control_contract?.admission_normalization_policy === "cross-task-reliability") {
    const taskIds = plan.cells.map((cell) => cell.task_id);
    if (taskIds.length < 2 || new Set(taskIds).size !== taskIds.length) {
      throw new Error("matrix cross-task reliability requires at least two unique tasks");
    }
    const lockedTasks = plan.task_lock_contract?.tasks;
    if (!Array.isArray(lockedTasks) || lockedTasks.length !== taskIds.length) {
      throw new Error("matrix cross-task reliability requires one task lock per cell");
    }
    const lockedIds = lockedTasks.map((task) => task?.task_id);
    if (JSON.stringify(lockedIds) !== JSON.stringify(taskIds)) {
      throw new Error("matrix cross-task reliability task locks must match fixed cell order");
    }
    for (const [index, task] of lockedTasks.entries()) {
      for (const field of [
        "task_tree_sha256",
        "prompt_sha256",
        "starter_sha256",
        "baseline_evidence_sha256",
        "source_contract_sha256",
      ]) {
        if (typeof task?.[field] !== "string" || !/^[a-f0-9]{64}$/.test(task[field])) {
          throw new Error(`matrix cross-task reliability task lock ${index + 1}.${field} is invalid`);
        }
      }
    }
  }
  if (plan.proof_execution_gates) {
    const targeted = plan.cells.filter((cell) => plan.proof_execution_gates.system_ids.includes(cell.system_id));
    if (!targeted.length) {
      throw new Error("matrix proof_execution_gates must target at least one cell");
    }
    const knownSystems = new Set(plan.cells.map((cell) => cell.system_id));
    if (plan.proof_execution_gates.system_ids.some((id) => !knownSystems.has(id))) {
      throw new Error("matrix proof_execution_gates.system_ids contains an unknown system");
    }
    if (plan.proof_execution_gates.shipped_runner_system_ids?.some((id) => (
      !knownSystems.has(id) || !plan.proof_execution_gates.system_ids.includes(id)
    ))) {
      throw new Error("matrix proof_execution_gates.shipped_runner_system_ids must target known gated systems");
    }
    if (targeted.some((cell) => !["codex", "cursor"].includes(cell.runtime))) {
      throw new Error("matrix proof_execution_gates supports only codex or cursor cells");
    }
  }
  if (plan.host_policy_comparison) {
    const modes = Object.fromEntries(HOST_POLICY_MODES.map((mode) => [
      mode,
      plan.cells.filter((cell) => cell.host_policy_mode === mode),
    ]));
    if (HOST_POLICY_MODES.some((mode) => modes[mode].length === 0)) {
      throw new Error("matrix host_policy_comparison must include both policy modes");
    }
    const pairing = (cell) => JSON.stringify({
      task_id: cell.task_id,
      variant_id: cell.variant_id,
      model_id: cell.model_id,
      effort: cell.effort,
      trial_index: cell.trial_index,
      timeout_seconds: cell.timeout_seconds,
    });
    const observed = modes["controller-observation"].map(pairing).sort();
    const installed = modes["installed-opt-in"].map(pairing).sort();
    if (JSON.stringify(observed) !== JSON.stringify(installed)) {
      throw new Error("matrix host_policy_comparison arms must be exactly paired");
    }
  }
  return plan;
}

export function prepareArgsForCell(cell, workspace, { vendorsRoot = null } = {}) {
  return [
    "--task", cell.task_id,
    "--variant", cell.variant_id,
    "--runtime", cell.runtime,
    ...(vendorsRoot ? ["--vendors", vendorsRoot] : []),
    "--out", workspace,
    ...(cell.allow_dirty_source === true ? ["--allow-dirty-source"] : []),
  ];
}

export function sealPreparedGitBaseline(workspace) {
  const root = resolve(workspace);
  const gitRoot = join(root, ".git");
  if (!existsSync(gitRoot)) throw new Error(`prepared workspace is not a Git root: ${root}`);
  writeFileSync(
    join(gitRoot, "info", "exclude"),
    "\n# OmD benchmark runtime artifacts\n.benchmark/\n.omd/\n.t/\n",
    { encoding: "utf8", flag: "a" },
  );
  execFileSync("git", ["-C", root, "add", "--all"], { stdio: "pipe" });
  execFileSync("git", [
    "-C", root,
    "-c", "user.name=OmD Benchmark",
    "-c", "user.email=benchmark@local.invalid",
    "commit", "--quiet", "--message", "prepared benchmark baseline",
  ], { stdio: "pipe" });
  execFileSync("git", ["-C", root, "checkout", "--quiet", "--detach"], { stdio: "pipe" });
  const status = execFileSync(
    "git",
    ["-C", root, "status", "--porcelain=v1", "--untracked-files=all"],
    { encoding: "utf8" },
  );
  if (status.trim()) throw new Error(`prepared Git baseline is dirty at ${root}`);
  return {
    commit: execFileSync("git", ["-C", root, "rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
    detached: true,
    clean: true,
  };
}

export function prepareRunMatrix(plan, { outputRoot = plan.output_root } = {}) {
  validateRunMatrixPlan(plan);
  const root = resolve(outputRoot);
  if (existsSync(root)) throw new Error(`refusing to overwrite an existing matrix root: ${root}`);
  mkdirSync(root, { recursive: true });

  const objectiveEvaluator = currentObjectiveMethodology();
  const lockedPlan = { ...plan, output_root: root, objective_evaluator: objectiveEvaluator };
  const state = {
    schema_version: plan.schema_version,
    experiment_id: plan.experiment_id,
    suite_version: plan.suite_version ?? null,
    product_version: plan.product_version ?? null,
    execution_purpose: plan.execution_purpose ?? null,
    status: "preparing",
    output_root: root,
    scheduled_cells: plan.cells.length,
    prepared_cells: 0,
    objective_evaluator: objectiveEvaluator,
    cells: [],
  };
  writeJson(join(root, "RUN-MATRIX.locked.json"), lockedPlan);
  writeJson(join(root, "matrix-state.json"), state);

  const prepareScript = resolve(fileURLToPath(new URL("./prepare-sandbox.mjs", import.meta.url)));
  for (const cell of plan.cells) {
    const workspace = join(root, cell.id);
    try {
      execFileSync(process.execPath, [
        prepareScript,
        ...prepareArgsForCell(cell, workspace, { vendorsRoot: plan.vendors_root ?? null }),
      ], {
        cwd: resolve(fileURLToPath(new URL("../../..", import.meta.url))),
        stdio: "pipe",
      });
      const manifest = readJson(join(workspace, ".benchmark", "manifest.json"));
      assertObjectiveMethodologyPin(manifest.objective_evaluator, `${cell.id}:manifest`);
      const hostPolicyConfig = plan.host_policy_comparison ?? plan.shared_host_policy ?? null;
      const hostPolicy = hostPolicyConfig
        ? prepareHostPolicyCell(
            resolve(fileURLToPath(new URL("../../..", import.meta.url))),
            workspace,
            cell.host_policy_mode,
          )
        : null;
      if (hostPolicy) {
        manifest.safety.hooks_enabled = hostPolicy.hooks_enabled;
        manifest.host_policy = hostPolicy;
        manifest.workspace.product_ignore = [
          ...new Set([...(manifest.workspace.product_ignore ?? []), ".git"]),
        ];
        writeJson(join(workspace, ".benchmark", "manifest.json"), manifest);
      }
      const matrixCell = {
        ...cell,
        execution_control: plan.control_contract ?? null,
        proof_execution_gate: plan.proof_execution_gates?.system_ids.includes(cell.system_id)
          ? plan.proof_execution_gates
          : null,
        attribution_scope: plan.attribution_scope ?? "provider-observed-only",
        host_policy: hostPolicy,
        host_policy_gate: hostPolicy ? hostPolicyConfig : null,
        browser_execution: plan.browser_execution_contract ?? null,
        workspace,
        task_version: manifest.task.version,
        task_prompt_sha256: manifest.task.core_prompt_sha256,
        starter_sha256: manifest.task.starter_sha256,
        skill_sha256: manifest.skill?.sha256 ?? null,
        agent_bundle_sha256: manifest.agents?.sha256 ?? null,
        source_commit: manifest.skill?.source_commit ?? null,
        source_publishable: manifest.skill?.source_attestation?.publishable ?? true,
        objective_evaluator: objectiveEvaluator,
      };
      writeJson(join(workspace, ".benchmark", "matrix-cell.json"), matrixCell);
      if (hostPolicy) {
        manifest.workspace.git_baseline = sealPreparedGitBaseline(workspace);
        const preparedTree = treeManifest(workspace, { ignore: [".benchmark"] });
        const preparedProductTree = treeManifest(workspace, {
          ignore: manifest.workspace.product_ignore,
        });
        manifest.workspace.initial_sha256 = preparedTree.sha256;
        manifest.workspace.initial_files = preparedTree.files.length;
        manifest.workspace.product_initial_sha256 = preparedProductTree.sha256;
        manifest.workspace.product_initial_files = preparedProductTree.files;
        writeJson(join(workspace, ".benchmark", "manifest.json"), manifest);
      }
      state.cells.push({ id: cell.id, status: "prepared", workspace });
      state.prepared_cells += 1;
      writeJson(join(root, "matrix-state.json"), state);
    } catch (error) {
      state.status = "failed-preparation";
      state.cells.push({
        id: cell.id,
        status: "failed-preparation",
        workspace,
        error: error instanceof Error ? error.message : String(error),
      });
      writeJson(join(root, "matrix-state.json"), state);
      throw error;
    }
  }

  state.status = "prepared";
  writeJson(join(root, "matrix-state.json"), state);
  return state;
}

async function main() {
  const args = parseArgs();
  const planPath = args.get("plan") ? resolve(String(args.get("plan"))) : null;
  const outputRoot = args.get("out") ? resolve(String(args.get("out"))) : null;
  if (!planPath) {
    console.error("usage: prepare-run-matrix.mjs --plan <matrix.json> [--out <new-root>]");
    process.exitCode = 2;
    return;
  }
  const plan = readJson(planPath);
  const state = prepareRunMatrix(plan, outputRoot ? { outputRoot } : undefined);
  console.log(JSON.stringify(state, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}

#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, writeJson } from "./_lib.mjs";

const VALID_RUNTIMES = new Set(["codex", "claude-code", "cursor"]);
const VALID_EFFORTS = new Set(["low", "medium", "high", "xhigh"]);
const VALID_BENCHMARK_FAMILIES = new Set(["model", "skill", "harness", "prompt-arena", "factorial"]);
const VALID_COMPARISON_MODES = new Set(["native-capability", "iso-external-budget", "effort-scaling"]);
const VALID_BUDGET_MODES = new Set(["hard-cap", "observed-only"]);
const VALID_PACING_POLICIES = new Set(["none", "fixed-inter-cell"]);

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
  if (!Array.isArray(plan.cells) || !plan.cells.length) throw new Error("matrix cells are required");

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
    const pairKey = `${cell.task_id}\0${cell.trial_index}\0${cell.system_id}`;
    if (pairKeys.has(pairKey)) throw new Error(`duplicate task/trial/system cell: ${pairKey.replaceAll("\0", "/")}`);
    pairKeys.add(pairKey);
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

export function prepareRunMatrix(plan, { outputRoot = plan.output_root } = {}) {
  validateRunMatrixPlan(plan);
  const root = resolve(outputRoot);
  if (existsSync(root)) throw new Error(`refusing to overwrite an existing matrix root: ${root}`);
  mkdirSync(root, { recursive: true });

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
    cells: [],
  };
  writeJson(join(root, "RUN-MATRIX.locked.json"), { ...plan, output_root: root });
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
      const matrixCell = {
        ...cell,
        execution_control: plan.control_contract ?? null,
        workspace,
        task_version: manifest.task.version,
        task_prompt_sha256: manifest.task.core_prompt_sha256,
        starter_sha256: manifest.task.starter_sha256,
        skill_sha256: manifest.skill?.sha256 ?? null,
        agent_bundle_sha256: manifest.agents?.sha256 ?? null,
        source_commit: manifest.skill?.source_commit ?? null,
        source_publishable: manifest.skill?.source_attestation?.publishable ?? true,
      };
      writeJson(join(workspace, ".benchmark", "matrix-cell.json"), matrixCell);
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

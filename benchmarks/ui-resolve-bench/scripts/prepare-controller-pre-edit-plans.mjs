#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, sha256, writeJson } from "./_lib.mjs";
import {
  executeControllerPreEditPlan,
  preflightRuntimeEnvironment,
} from "./run-prepared-matrix.mjs";

const REPO_ROOT = resolve(fileURLToPath(new URL("../../..", import.meta.url)));

export function prepareControllerPreEditPlans(root, { env = process.env } = {}) {
  const matrixRoot = resolve(root);
  const planPath = join(matrixRoot, "RUN-MATRIX.locked.json");
  const statePath = join(matrixRoot, "matrix-state.json");
  const executionPath = join(matrixRoot, "execution-state.json");
  const reportPath = join(matrixRoot, "controller-pre-edit-plan-state.json");
  if (!existsSync(planPath) || !existsSync(statePath)) {
    throw new Error("controller-pre-edit-plan-preparation-missing-matrix");
  }
  if (existsSync(executionPath)) {
    throw new Error("controller-pre-edit-plan-preparation-after-provider-boundary-forbidden");
  }
  if (existsSync(reportPath)) {
    throw new Error("controller-pre-edit-plan-preparation-replay-forbidden");
  }
  const plan = readJson(planPath);
  const preparation = readJson(statePath);
  if (preparation.status !== "prepared" || preparation.prepared_cells !== plan.cells.length) {
    throw new Error("controller-pre-edit-plan-preparation-incomplete");
  }
  const runtime_preflight = preflightRuntimeEnvironment(plan, {
    workspaceRoot: join(matrixRoot, plan.cells[0].id),
    browserEnv: env,
  });
  const cells = {};
  for (const cell of plan.cells) {
    cells[cell.id] = executeControllerPreEditPlan(join(matrixRoot, cell.id), plan, { env });
  }
  const report = {
    schema_version: "0.1",
    experiment_id: plan.experiment_id,
    status: "CONTROLLER_PRE_EDIT_PLANS_READY_PROVIDER_ZERO",
    provider_calls: 0,
    model_exposures: 0,
    cursor_calls: 0,
    runtime_preflight,
    cells,
    locked_plan_sha256: sha256(readFileSync(planPath)),
  };
  writeJson(reportPath, report);
  return report;
}

async function main() {
  const args = parseArgs();
  const root = args.get("root") ? resolve(String(args.get("root"))) : null;
  if (!root) {
    console.error("usage: prepare-controller-pre-edit-plans.mjs --root <prepared-matrix-root>");
    process.exitCode = 2;
    return;
  }
  console.log(JSON.stringify(prepareControllerPreEditPlans(root), null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}

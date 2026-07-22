#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, writeJson } from "./_lib.mjs";

const VALID_RUNTIMES = new Set(["codex", "claude-code"]);
const VALID_EFFORTS = new Set(["low", "medium", "high", "xhigh"]);

export function validateRunMatrixPlan(plan) {
  if (plan?.schema_version !== "0.1") throw new Error("matrix schema_version must be 0.1");
  if (typeof plan.experiment_id !== "string" || !plan.experiment_id) {
    throw new Error("matrix experiment_id is required");
  }
  if (typeof plan.output_root !== "string" || !isAbsolute(plan.output_root)) {
    throw new Error("matrix output_root must be an absolute path");
  }
  if (!Array.isArray(plan.cells) || !plan.cells.length) throw new Error("matrix cells are required");

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
    const pairKey = `${cell.task_id}\0${cell.trial_index}\0${cell.system_id}`;
    if (pairKeys.has(pairKey)) throw new Error(`duplicate task/trial/system cell: ${pairKey.replaceAll("\0", "/")}`);
    pairKeys.add(pairKey);
  }
  return plan;
}

export function prepareArgsForCell(cell, workspace) {
  return [
    "--task", cell.task_id,
    "--variant", cell.variant_id,
    "--runtime", cell.runtime,
    "--out", workspace,
  ];
}

export function prepareRunMatrix(plan, { outputRoot = plan.output_root } = {}) {
  validateRunMatrixPlan(plan);
  const root = resolve(outputRoot);
  if (existsSync(root)) throw new Error(`refusing to overwrite an existing matrix root: ${root}`);
  mkdirSync(root, { recursive: true });

  const state = {
    schema_version: "0.1",
    experiment_id: plan.experiment_id,
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
      execFileSync(process.execPath, [prepareScript, ...prepareArgsForCell(cell, workspace)], {
        cwd: resolve(fileURLToPath(new URL("../../..", import.meta.url))),
        stdio: "pipe",
      });
      const manifest = readJson(join(workspace, ".benchmark", "manifest.json"));
      const matrixCell = {
        ...cell,
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


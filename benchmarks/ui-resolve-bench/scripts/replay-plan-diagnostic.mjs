#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { diagnosePlanReconcile } from "../../../skills/omd-apply/scripts/reflow-artifact.mjs";
import { parseArgs } from "./_lib.mjs";

const REPO_ROOT = resolve(fileURLToPath(new URL("../../..", import.meta.url)));

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

export function replayPlanDiagnostic(workspace, { repoRoot = REPO_ROOT } = {}) {
  const root = resolve(workspace);
  const artifactPath = join(root, ".omd", "reflow-closure.json");
  const cellPath = join(root, ".benchmark", "matrix-cell.json");
  if (!existsSync(artifactPath) || !existsSync(cellPath)) {
    return { workspace: root, cell_id: basename(root), status: "not-applicable", reason: "missing-artifact-or-cell" };
  }

  const artifactSource = readFileSync(artifactPath, "utf8");
  const artifact = JSON.parse(artifactSource);
  const cell = JSON.parse(readFileSync(cellPath, "utf8"));
  const starterPath = join(
    resolve(repoRoot),
    "benchmarks/ui-resolve-bench/tasks",
    cell.task_id,
    "starter/index.html",
  );
  if (!existsSync(starterPath)) {
    return { workspace: root, cell_id: basename(root), task_id: cell.task_id, status: "source-not-recoverable", reason: "task-starter-missing" };
  }

  const starterSource = readFileSync(starterPath);
  const starterSha256 = sha256(starterSource);
  const snapshotSha256 = artifact.pre_edit_product_snapshot?.sha256 ?? null;
  if (starterSha256 !== snapshotSha256) {
    return {
      workspace: root,
      cell_id: basename(root),
      task_id: cell.task_id,
      status: "source-not-recoverable",
      reason: "task-starter-does-not-match-pre-edit-snapshot",
      starter_sha256: starterSha256,
      snapshot_sha256: snapshotSha256,
    };
  }

  const productPath = join(root, "index.html");
  const currentProductSha256 = existsSync(productPath) ? sha256(readFileSync(productPath)) : null;
  const base = {
    workspace: root,
    cell_id: basename(root),
    task_id: cell.task_id,
    variant_id: cell.variant_id,
    artifact_sha256: sha256(artifactSource),
    recovered_pre_edit_source_sha256: starterSha256,
    current_product_sha256: currentProductSha256,
    current_product_changed_after_snapshot: currentProductSha256 !== snapshotSha256,
    plan_state: artifact.pre_edit_fit_plan?.state ?? null,
    plan_attempts: artifact.pre_edit_fit_plan?.attempts ?? null,
  };

  if (artifact.pre_edit_fit_plan?.state !== "measured" || artifact.pre_edit_fit_plan?.attempts !== 1) {
    return { ...base, status: "not-diagnosable", reason: "one-persisted-measured-plan-required" };
  }

  try {
    const diagnosis = diagnosePlanReconcile(artifact);
    return {
      ...base,
      status: "diagnosed",
      diagnosis_status: diagnosis.status,
      browser_rerun_allowed: diagnosis.browser_rerun_allowed,
      product_edit_allowed: diagnosis.product_edit_allowed,
      issue_codes: diagnosis.issues.map((issue) => issue.code),
      patch_row_ids: diagnosis.complete_patch.row_groups.map((row) => row.row_id),
      diagnosis,
    };
  } catch (error) {
    return {
      ...base,
      status: "diagnostic-error",
      reason: error instanceof Error ? error.message : String(error),
    };
  }
}

export function replayPlanDiagnosticRoot(matrixRoot, options = {}) {
  const root = resolve(matrixRoot);
  const workspaces = readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(root, entry.name))
    .sort();
  const results = workspaces.map((workspace) => replayPlanDiagnostic(workspace, options));
  const applicable = results.filter((result) => result.status !== "not-applicable");
  const counts = applicable.reduce((summary, result) => {
    const key = result.status === "diagnosed" ? result.diagnosis_status : result.status;
    summary[key] = (summary[key] ?? 0) + 1;
    return summary;
  }, {});
  return {
    schema_version: "0.1",
    matrix_root: root,
    provider_calls: 0,
    model_exposures: 0,
    workspaces_scanned: workspaces.length,
    artifacts_replayed: applicable.length,
    counts,
    results: applicable,
  };
}

export function discoverPlanDiagnosticWorkspaces(parent, { prefix = "u19", maxDepth = 4 } = {}) {
  const root = resolve(parent);
  const matches = [];

  function visit(directory, depth) {
    if (depth > maxDepth) return;
    const artifactPath = join(directory, ".omd", "reflow-closure.json");
    const cellPath = join(directory, ".benchmark", "matrix-cell.json");
    if (existsSync(artifactPath) && existsSync(cellPath)) {
      matches.push(directory);
      return;
    }
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      visit(join(directory, entry.name), depth + 1);
    }
  }

  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory() || !entry.name.startsWith(prefix)) continue;
    visit(join(root, entry.name), 1);
  }
  return matches.sort();
}

export function replayDiscoveredPlanDiagnostics(parent, options = {}) {
  const workspaces = discoverPlanDiagnosticWorkspaces(parent, options);
  const results = workspaces.map((workspace) => replayPlanDiagnostic(workspace, options));
  const counts = results.reduce((summary, result) => {
    const key = result.status === "diagnosed" ? result.diagnosis_status : result.status;
    summary[key] = (summary[key] ?? 0) + 1;
    return summary;
  }, {});
  return {
    schema_version: "0.1",
    scan_parent: resolve(parent),
    scan_prefix: options.prefix ?? "u19",
    provider_calls: 0,
    model_exposures: 0,
    workspaces_scanned: workspaces.length,
    artifacts_replayed: results.length,
    counts,
    results,
  };
}

async function main() {
  const args = parseArgs();
  const root = args.get("root") ? resolve(String(args.get("root"))) : null;
  const scanParent = args.get("scan-parent") ? resolve(String(args.get("scan-parent"))) : null;
  if (!root && !scanParent) {
    console.error("usage: replay-plan-diagnostic.mjs (--root <matrix-root> | --scan-parent <parent> [--prefix <name>])");
    process.exitCode = 2;
    return;
  }
  const result = scanParent
    ? replayDiscoveredPlanDiagnostics(scanParent, { prefix: String(args.get("prefix") ?? "u19") })
    : replayPlanDiagnosticRoot(root);
  console.log(JSON.stringify(result, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}

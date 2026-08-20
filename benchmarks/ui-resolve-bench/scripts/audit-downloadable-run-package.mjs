#!/usr/bin/env node
import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

function sha256(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function resolveArtifact(packageRoot, reference, label) {
  if (typeof reference !== "string" || !reference || isAbsolute(reference) || reference.split(/[\\/]/).includes("..")) {
    throw new Error(`${label} must be a package-relative path`);
  }
  const root = resolve(packageRoot);
  const path = resolve(root, reference);
  if (path !== root && !path.startsWith(`${root}${sep}`)) throw new Error(`${label} escapes package root`);
  if (!existsSync(path) || !statSync(path).isFile()) throw new Error(`${label} is missing: ${reference}`);
  return path;
}

export function auditDownloadableRunPackage(index, packageRoot, contract) {
  if (index?.schema_version !== contract.schema_version) throw new Error("package/contract schema mismatch");
  if (!Array.isArray(index.runs) || !index.runs.length) throw new Error("package index must contain runs");
  const allowed = new Set(contract.allowed_run_statuses);
  const tupleKeys = new Set();
  const auditedRuns = index.runs.map((run) => {
    for (const field of ["run_id", "task_id", "system_id", "run_status"]) {
      if (typeof run[field] !== "string" || !run[field]) throw new Error(`run ${field} is required`);
    }
    if (!Number.isInteger(run.trial_index) || run.trial_index < 1) throw new Error(`${run.run_id} trial_index must be positive`);
    if (!allowed.has(run.run_status)) throw new Error(`${run.run_id} has unsupported run status`);
    const tuple = `${run.task_id}\0${run.system_id}\0${run.trial_index}`;
    if (tupleKeys.has(tuple)) throw new Error(`duplicate task/system/trial tuple: ${run.run_id}`);
    tupleKeys.add(tuple);
    const requiredRoles = [...contract.base_artifact_roles, ...contract.status_artifact_roles[run.run_status]];
    const artifactRoles = Object.keys(run.artifacts ?? {}).sort();
    const missingRoles = requiredRoles.filter((role) => !artifactRoles.includes(role));
    if (missingRoles.length) throw new Error(`${run.run_id} missing artifact roles: ${missingRoles.join(", ")}`);
    const artifacts = Object.fromEntries(artifactRoles.map((role) => {
      const artifact = run.artifacts[role];
      if (!artifact || typeof artifact !== "object" || !/^[a-f0-9]{64}$/.test(artifact.sha256 ?? "")) {
        throw new Error(`${run.run_id}.${role} must declare a sha256`);
      }
      const path = resolveArtifact(packageRoot, artifact.path, `${run.run_id}.${role}`);
      const actual = sha256(path);
      if (actual !== artifact.sha256) throw new Error(`${run.run_id}.${role} hash mismatch`);
      return [role, { path: artifact.path, sha256: actual }];
    }));
    if (run.representative === true && run.run_status !== "complete") {
      throw new Error(`${run.run_id} representative artifact must be a complete run`);
    }
    return { ...run, artifacts, artifact_complete: true };
  });

  const groupMap = new Map();
  for (const run of auditedRuns) {
    const key = `${run.task_id}\0${run.system_id}`;
    const group = groupMap.get(key) ?? { task_id: run.task_id, system_id: run.system_id, runs: [] };
    group.runs.push(run);
    groupMap.set(key, group);
  }
  const groups = [...groupMap.values()].map((group) => {
    const trials = group.runs.map((run) => run.trial_index).sort((a, b) => a - b);
    return {
      task_id: group.task_id,
      system_id: group.system_id,
      run_count: group.runs.length,
      expected_run_count: contract.expected_runs_per_task_system,
      trial_indices: trials,
      ten_run_complete: group.runs.length === contract.expected_runs_per_task_system &&
        trials.every((trial, index) => trial === index + 1),
      representative_complete: group.runs.some((run) => run.representative === true && run.run_status === "complete"),
      status_counts: Object.fromEntries(contract.allowed_run_statuses.map((status) => [status, group.runs.filter((run) => run.run_status === status).length])),
    };
  }).sort((a, b) => `${a.task_id}/${a.system_id}`.localeCompare(`${b.task_id}/${b.system_id}`));
  const verifiedScaleReady = groups.every((group) => group.ten_run_complete && group.representative_complete);
  return {
    schema_version: "0.1",
    package_id: index.package_id,
    suite_version: index.suite_version,
    objective_methodology_epoch: index.objective_methodology_epoch,
    run_count: auditedRuns.length,
    group_count: groups.length,
    artifact_complete: true,
    verified_scale_ready: verifiedScaleReady,
    decision: verifiedScaleReady ? "DOWNLOADABLE_VERIFIED_SCALE_PACKAGE_READY" : "BLOCK_VERIFIED_SCALE_PACKAGE_CLAIM",
    groups,
    observed_statuses: contract.allowed_run_statuses.filter((status) => auditedRuns.some((run) => run.run_status === status)),
    claim_boundary: contract.claim_policy,
  };
}

function parseArgs(argv) {
  const args = new Map();
  for (let index = 0; index < argv.length; index += 2) {
    if (!argv[index]?.startsWith("--") || argv[index + 1] === undefined) throw new Error("arguments must be --key value pairs");
    args.set(argv[index].slice(2), argv[index + 1]);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const packageRoot = args.get("root") ? resolve(args.get("root")) : null;
  if (!packageRoot) throw new Error("usage: audit-downloadable-run-package.mjs --root <package-root> [--out <report.json>]");
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const repoRoot = resolve(scriptDir, "../../..");
  const contract = JSON.parse(readFileSync(resolve(args.get("contract") ?? join(repoRoot, "benchmarks/ui-resolve-bench/downloadable-run-package-contract.json")), "utf8"));
  const index = JSON.parse(readFileSync(resolve(args.get("index") ?? join(packageRoot, "package-index.json")), "utf8"));
  const report = auditDownloadableRunPackage(index, packageRoot, contract);
  const rendered = `${JSON.stringify(report, null, 2)}\n`;
  if (args.get("out")) writeFileSync(resolve(args.get("out")), rendered);
  process.stdout.write(rendered);
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) await main();

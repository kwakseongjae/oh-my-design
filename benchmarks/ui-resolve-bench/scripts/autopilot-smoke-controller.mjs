#!/usr/bin/env node
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  copyFileSync,
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readlinkSync,
  readdirSync,
  renameSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import {
  inspectImmutableModelCatalogSource,
  prepareIsolatedCodexHome,
  preparedExactCodexRuntimeContract,
  verifyExactCodexCliRuntime,
} from "./codex-browser-sandbox-contract.mjs";
import { parseArgs, sha256, treeManifest } from "./_lib.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");
const defaultSmokeConfig = "benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.2.json";
const taskSetPath = join(repoRoot, "benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json");
const runtimeAuthorityPath = join(repoRoot, "benchmarks/ui-resolve-bench/reports/codex-all-effort-sweep-1.9.826/RUN-MATRIX.json");
const controllerPath = relative(repoRoot, fileURLToPath(import.meta.url)).split(sep).join("/");
const evaluatorPath = "benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs";
const validatorPath = "scripts/validate-project-design-system.cjs";
export const CORE_V2_PORTABLE_RUNTIME_PATHS = Object.freeze([
  "scripts/design-md-core-schema.cjs",
  "scripts/design-md-core-conformance.cjs",
  "scripts/design-md-core.cjs",
  "scripts/prepare-design-md-core-review.cjs",
  "scripts/compile-design-md-core.cjs",
  "scripts/adopt-design-md-core.cjs",
  "spec/schema/design-md-core-manifest-v2.schema.json",
  "spec/schema/design-system-graph-v2.schema.json",
  "spec/schema/design-system-provenance-v2.schema.json",
  "spec/schema/design-system-coverage-v2.schema.json",
  "spec/schema/design-md-core-adoption-review-v2.schema.json",
  "spec/schema/design-md-core-adoption-receipt-v2.schema.json",
  "spec/schema/design-md-core-project-checkpoint-v2.schema.json",
]);
const SHA = /^[a-f0-9]{64}$/;
const COMMIT = /^[a-f0-9]{40}$/;
// The greenfield evaluator replays the full journey at four viewports. A real
// landing-page observation currently takes a little over three minutes, so the
// controller must not retain the older two-viewport 180s ceiling.
export const AUTOPILOT_EVALUATOR_TIMEOUT_MS = 360_000;

function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}
const MISSION_PRODUCT_TREE_IGNORES = new Set([".git", ".omd", ".benchmark", "node_modules", "dist", "coverage"]);
export function missionProductTreeManifest(root) {
  const files = [];
  function visit(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const absolute = join(dir, entry.name);
      const rel = relative(root, absolute).split(sep).join("/");
      if (MISSION_PRODUCT_TREE_IGNORES.has(rel.split("/")[0])) continue;
      const info = lstatSync(absolute);
      if (info.isSymbolicLink()) {
        files.push({ path: rel, mode: "symlink", sha256: sha256(readlinkSync(absolute)) });
      } else if (entry.isDirectory()) visit(absolute);
      else if (entry.isFile()) files.push({ path: rel, mode: (info.mode & 0o111) ? "100755" : "100644", sha256: sha256(readFileSync(absolute)) });
    }
  }
  visit(root);
  return { files, sha256: sha256(JSON.stringify(files)) };
}
function readJson(path) { return JSON.parse(readFileSync(path, "utf8")); }
export function effectivePortableBundlePaths(smokeContract) {
  const configured = smokeContract?.authorities?.portable_bundle_files;
  if (!Array.isArray(configured) || configured.some((item) => !item || typeof item.path !== "string" || !item.path)) {
    throw new Error("portable bundle file list is invalid");
  }
  return [...new Set([...configured.map((item) => item.path), ...CORE_V2_PORTABLE_RUNTIME_PATHS])];
}
export function portableRuntimeBundleDigest(files) { return sha256(canonical(files)); }
function copyDesignSystemEvidenceReference(reference, sourceRun, sourceWorkspace, auditRun, auditWorkspace) {
  const filePart = String(reference ?? "").split("#", 1)[0];
  if (!filePart || isAbsolute(filePart) || filePart.split(/[\\/]/).includes("..") || filePart === "DESIGN.md") return;
  const candidates = [
    { source: resolve(sourceRun, filePart), root: sourceRun, targetRoot: auditRun },
    { source: resolve(sourceWorkspace, filePart), root: sourceWorkspace, targetRoot: auditWorkspace },
  ];
  const selected = candidates.find(({ source, root }) =>
    (source === root || source.startsWith(`${root}${sep}`)) && existsSync(source));
  if (!selected) throw new Error(`design-system evidence is missing: ${reference}`);
  const info = lstatSync(selected.source);
  if (!info.isFile() || info.isSymbolicLink()) throw new Error(`design-system evidence must be a regular file: ${reference}`);
  const relativePath = relative(selected.root, selected.source);
  const target = join(selected.targetRoot, relativePath);
  mkdirSync(dirname(target), { recursive: true });
  if (existsSync(target)) {
    if (sha256(readFileSync(target)) !== sha256(readFileSync(selected.source))) {
      throw new Error(`design-system evidence copy collision: ${reference}`);
    }
    return;
  }
  copyFileSync(selected.source, target);
}
export function classifyProviderStreamFailure(jsonl) {
  const messages = String(jsonl ?? "").split(/\r?\n/).filter(Boolean).flatMap((line) => {
    try {
      const event = JSON.parse(line);
      return [event?.message, event?.error?.message].filter((value) => typeof value === "string");
    } catch { return []; }
  });
  const usageLimit = messages.find((message) => /(?:hit|reached).*usage limit|usage limit.*(?:purchase|credits|try again)/i.test(message));
  if (usageLimit) return { kind: "provider-capacity-exhausted", message: usageLimit.slice(0, 1000) };
  return null;
}
export function shouldEvaluateProviderAttempt(run, indexExists) {
  return run?.workspace?.product_changed === true && indexExists === true;
}
function writeJsonExclusive(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
}
function writeJsonAtomic(path, value) {
  const temp = `${path}.tmp-${process.pid}`;
  writeFileSync(temp, `${JSON.stringify(value, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
  renameSync(temp, path);
}
function git(...args) {
  return execFileSync("git", ["-C", repoRoot, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}
function gitBytes(commit, path) {
  return execFileSync("git", ["-C", repoRoot, "show", `${commit}:${path}`], { encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] });
}
function assertRegular(path, label) {
  if (!existsSync(path)) throw new Error(`${label} missing: ${path}`);
  const info = lstatSync(path);
  if (info.isSymbolicLink() || !info.isFile()) throw new Error(`${label} must be a regular non-symlink file: ${path}`);
}
function authorityEntry(path, commit) {
  const absolute = join(repoRoot, path);
  assertRegular(absolute, "source authority");
  const current = readFileSync(absolute);
  const committed = gitBytes(commit, path);
  if (!current.equals(committed)) throw new Error(`source authority differs from commit: ${path}`);
  return { path, bytes: current.length, sha256: sha256(current) };
}
export function smokeConfigRelativePath(requested) {
  const relativePath = String(requested ?? defaultSmokeConfig).split(sep).join("/");
  if (isAbsolute(relativePath)
    || relativePath.split(/[\\/]/).includes("..")
    || !/^benchmarks\/ui-resolve-bench\/config\/autopilot-luna-high-smoke-v0\.\d+\.json$/.test(relativePath)) {
    throw new Error("smoke config must be a repository-relative versioned Autopilot smoke contract");
  }
  return relativePath;
}
export function smokeExperimentId(config, requested) {
  const configured = String(config?.experiment_id ?? "");
  if (!/^autopilot-luna-high-smoke-1\.9\.\d+$/.test(configured)) {
    throw new Error("smoke contract must declare a valid experiment id");
  }
  if (requested !== undefined && String(requested) !== configured) {
    throw new Error("smoke experiment id must match the selected smoke contract");
  }
  return configured;
}
function smokeConfigAuthority(requested, commit) {
  const relativePath = smokeConfigRelativePath(requested);
  const absolute = resolve(repoRoot, relativePath);
  if (absolute !== repoRoot && !absolute.startsWith(`${repoRoot}${sep}`)) {
    throw new Error("smoke config escapes repository");
  }
  assertRegular(absolute, "smoke config");
  const treeEntry = git("ls-tree", commit, "--", relativePath);
  if (!/^100(?:644|755)\s+blob\s+[a-f0-9]+\t/.test(treeEntry)) {
    throw new Error("smoke config must be a regular file in source commit");
  }
  authorityEntry(relativePath, commit);
  return { absolute, relative: relativePath };
}
function assertEntry(entry, commit) {
  if (!entry || !SHA.test(entry.sha256 ?? "") || !Number.isInteger(entry.bytes)) throw new Error("invalid source authority entry");
  const observed = authorityEntry(entry.path, commit);
  if (canonical(observed) !== canonical(entry)) throw new Error(`source authority drift: ${entry.path}`);
}
function promptFor(taskSet, taskId) {
  const task = taskSet.tasks.find((item) => item.id === taskId);
  if (!task) throw new Error(`task missing: ${taskId}`);
  return task.prompt;
}
function lockedRuntimeAuthority() {
  const base = readJson(runtimeAuthorityPath);
  const luna = base.codex_model_effort_contract.models.find((item) => item.model_id === "gpt-5.6-luna");
  if (!luna?.supported_efforts?.includes("high")) throw new Error("locked runtime does not support Luna/high");
  const modelEffort = { ...base.codex_model_effort_contract, models: [luna] };
  const snapshot = structuredClone(base.codex_catalog_snapshot_contract);
  if (snapshot.codex_cli.version !== modelEffort.cache_client_version
    || snapshot.cli_cache_client_version_policy !== "require-exact-match") {
    throw new Error("runtime authority must pin an exact CLI/cache version pair");
  }
  return { snapshot, modelEffort };
}
function assertRuntimeSources(snapshot, modelEffort) {
  for (const [path, digest, bytes, label] of [
    [snapshot.auth_json_source_path, snapshot.auth_json_sha256, snapshot.auth_json_bytes, "auth"],
    [snapshot.models_cache_source_path, snapshot.models_cache_sha256, snapshot.models_cache_bytes, "models cache"],
    [snapshot.model_catalog_source_path, snapshot.model_catalog_sha256, snapshot.model_catalog_bytes, "model catalog"],
  ]) {
    if (!isAbsolute(path)) throw new Error(`${label} source path must be absolute`);
    assertRegular(path, label);
    const data = readFileSync(path);
    if (data.length !== bytes || sha256(data) !== digest) throw new Error(`${label} source snapshot drift`);
  }
  inspectImmutableModelCatalogSource(snapshot.model_catalog_source_path, modelEffort);
  verifyExactCodexCliRuntime({ catalog_snapshot_contract: snapshot, model_effort_contract: modelEffort });
}
function planCommand(args) {
  const outDir = resolve(String(args.get("out") ?? ""));
  const sourceCommit = String(args.get("source-commit") ?? git("rev-parse", "HEAD"));
  if (!outDir || existsSync(outDir)) throw new Error("plan output directory must be fresh");
  if (!COMMIT.test(sourceCommit) || git("merge-base", "--is-ancestor", sourceCommit, "HEAD") !== "") {
    throw new Error("source commit must be a current HEAD ancestor");
  }
  const smokeConfig = smokeConfigAuthority(args.get("config"), sourceCommit);
  const smokeConfigPath = smokeConfig.absolute;
  const config = readJson(smokeConfigPath);
  const taskSet = readJson(taskSetPath);
  const portableRuntimePaths = effectivePortableBundlePaths(config);
  if (config.provider_execution_allowed !== false || config.cells.length !== 3) throw new Error("smoke preregistration template drift");
  if (config.autonomy_contract.initial_turn_soft_budget_ms !== 720000
    || config.autonomy_contract.minimum_controller_handoff_reserve_ms !== 180000
    || config.autonomy_contract.advisory_lane_attempts_per_lane_max !== 1
    || config.autonomy_contract.advisory_result_repair_calls_max !== 0
    || config.autonomy_contract.advisory_coordination_calls_max !== 6
    || config.autonomy_contract.read_only_council_lanes_max !== 3) {
    throw new Error("autopilot execution budget contract drift");
  }
  const paths = [...new Set([
    smokeConfig.relative,
    relative(repoRoot, taskSetPath).split(sep).join("/"),
    controllerPath,
    "benchmarks/ui-resolve-bench/scripts/_lib.mjs",
    "benchmarks/ui-resolve-bench/scripts/run-codex.mjs",
    evaluatorPath,
    validatorPath,
    config.authorities.adapter_set_path,
    config.authorities.evaluator_path,
    config.authorities.starter_path,
    ...portableRuntimePaths,
  ])].sort();
  const sourceAuthority = paths.map((path) => authorityEntry(path, sourceCommit));
  const portableRuntimeFiles = portableRuntimePaths.map((path) => {
    const entry = sourceAuthority.find((item) => item.path === path);
    if (!entry) throw new Error(`portable runtime source authority missing: ${path}`);
    return entry;
  });
  const smokeBytes = readFileSync(smokeConfigPath);
  const taskBytes = readFileSync(taskSetPath);
  if (sha256(smokeBytes) !== config.authorities.smoke_config_sha256 && config.authorities.smoke_config_sha256) {
    throw new Error("smoke config self hash drift");
  }
  if (sha256(taskBytes) !== config.authorities.task_set_sha256) throw new Error("task-set hash drift");
  if (config.schema_version === "0.2" && config.authorities.evaluator_path !== evaluatorPath) {
    throw new Error("Core v2 smoke contract must bind the task-family evaluator");
  }
  for (const [path, digest, label] of [
    [config.authorities.adapter_set_path, config.authorities.adapter_set_sha256, "adapter set"],
    [config.authorities.evaluator_path, config.authorities.evaluator_sha256, "evaluator"],
    [config.authorities.starter_path, config.authorities.starter_sha256, "starter"],
  ]) {
    const bytes = readFileSync(join(repoRoot, path));
    if (sha256(bytes) !== digest) throw new Error(`${label} authority drift`);
  }
  for (const item of config.authorities.portable_bundle_files) {
    const bytes = readFileSync(join(repoRoot, item.path));
    if (bytes.length !== item.bytes || sha256(bytes) !== item.sha256) throw new Error(`portable bundle authority drift: ${item.path}`);
  }
  if (sha256(JSON.stringify(config.authorities.portable_bundle_files)) !== config.authorities.portable_bundle_sha256) {
    throw new Error("portable bundle aggregate drift");
  }
  for (const cell of config.cells) {
    const prompt = promptFor(taskSet, cell.task_id);
    if (sha256(prompt) !== cell.prompt_sha256 || Buffer.byteLength(prompt) !== cell.prompt_bytes) throw new Error(`prompt drift: ${cell.task_id}`);
  }
  const { snapshot, modelEffort } = lockedRuntimeAuthority();
  assertRuntimeSources(snapshot, modelEffort);
  const cells = config.cells.map((cell) => ({
    id: `${cell.task_id}-luna-high-r1-omd-autopilot`, order: cell.order, task_id: cell.task_id,
    variant_id: "omd-autopilot-v2", runtime: "codex", model_id: "gpt-5.6-luna", effort: "high",
    timeout_seconds: config.runtime.timeout_seconds, trial_index: 1,
  }));
  const experimentId = smokeExperimentId(config, args.get("experiment-id"));
  const plan = {
    schema_version: "0.1", kind: "autopilot-greenfield-diagnostic-smoke",
    experiment_id: experimentId, status: "locked-provider-zero",
    claim_state: config.claim_state, source_commit: sourceCommit,
    source_authority: { schema_version: "0.1", files: sourceAuthority, sha256: sha256(canonical(sourceAuthority)) },
    smoke_contract: config,
    portable_runtime_bundle: {
      schema_version: "0.1",
      files: portableRuntimeFiles,
      sha256: portableRuntimeBundleDigest(portableRuntimeFiles),
    },
    codex_catalog_snapshot_contract: snapshot,
    codex_model_effort_contract: modelEffort,
    execution_control: {
      serial: true, max_new_cells_per_invocation: 1, retries: 0, replacements: 0, fallback: 0,
      bounded_repair_model_calls_max: config.runtime.bounded_repair_model_calls_max,
    },
    cells,
  };
  plan.lock_manifest = {
    canonicalization: "sha256-json-stringify-v1",
    source_authority_sha256: plan.source_authority.sha256,
    portable_runtime_bundle_sha256: plan.portable_runtime_bundle.sha256,
    smoke_contract_sha256: sha256(smokeBytes),
    task_set_sha256: sha256(taskBytes),
    schedule_sha256: sha256(canonical(cells)),
    codex_catalog_snapshot_contract_sha256: sha256(JSON.stringify(snapshot)),
    codex_model_effort_contract_sha256: sha256(JSON.stringify(modelEffort)),
  };
  mkdirSync(outDir, { recursive: false });
  const planPath = join(outDir, "RUN-MATRIX.json");
  writeJsonExclusive(planPath, plan);
  const planBytes = readFileSync(planPath);
  writeJsonExclusive(join(outDir, "PREREGISTRATION.receipt.json"), {
    schema_version: "0.1", experiment_id: plan.experiment_id, plan_sha256: sha256(planBytes), plan_bytes: planBytes.length,
    source_commit: sourceCommit, provider_calls: 0, model_calls: 0, cursor_calls: 0,
  });
  console.log(planPath);
}
function installedPath(path) {
  if (path === "skills/omd-autopilot/SKILL.md") return ".agents/skills/omd-autopilot/SKILL.md";
  if (path === "skills/omd-autopilot/references/design-system-contract.md") return ".agents/skills/omd-autopilot/references/design-system-contract.md";
  return path;
}
export function installedPortablePath(path) { return installedPath(path); }
export function assertInstalledPortableRuntimeBundle(plan, workspace) {
  const bundle = plan?.portable_runtime_bundle;
  if (!bundle || bundle.schema_version !== "0.1" || !Array.isArray(bundle.files) || !SHA.test(bundle.sha256 ?? "")) {
    throw new Error("portable runtime bundle authority is missing");
  }
  const expectedPaths = effectivePortableBundlePaths(plan.smoke_contract);
  if (canonical(bundle.files.map((item) => item.path)) !== canonical(expectedPaths)
    || bundle.sha256 !== portableRuntimeBundleDigest(bundle.files)) {
    throw new Error("portable runtime bundle authority drift");
  }
  for (const item of bundle.files) {
    if (!item || !SHA.test(item.sha256 ?? "") || !Number.isInteger(item.bytes)) {
      throw new Error(`invalid portable runtime authority: ${item?.path ?? "unknown"}`);
    }
    const installed = join(workspace, installedPath(item.path));
    assertRegular(installed, `installed portable authority ${item.path}`);
    const bytes = readFileSync(installed);
    if (bytes.length !== item.bytes || sha256(bytes) !== item.sha256) {
      throw new Error(`installed portable authority drift: ${item.path}`);
    }
  }
}
const genericAgents = `# Installed oh-my-design Autopilot\n\nFor broad greenfield UI work, read and follow .agents/skills/omd-autopilot/SKILL.md. The user prompt is the only product brief. Use the installed generic OmD helpers and advisers; do not inspect benchmark fixtures, oracles, mutants, sibling workspaces, or the source repository. The current main agent is the only product and DESIGN.md write owner.\n`;
function validatePlan(plan, receipt, planPath) {
  const bytes = readFileSync(planPath);
  if (receipt.plan_sha256 !== sha256(bytes) || receipt.plan_bytes !== bytes.length) throw new Error("plan receipt drift");
  if (!COMMIT.test(plan.source_commit) || git("merge-base", "--is-ancestor", plan.source_commit, "HEAD") !== "") throw new Error("plan source commit is unavailable");
  for (const entry of plan.source_authority.files) assertEntry(entry, plan.source_commit);
  if (plan.source_authority.sha256 !== sha256(canonical(plan.source_authority.files))) throw new Error("source authority aggregate drift");
  const expectedPortablePaths = effectivePortableBundlePaths(plan.smoke_contract);
  if (plan.portable_runtime_bundle?.schema_version !== "0.1"
    || canonical(plan.portable_runtime_bundle?.files?.map((item) => item.path)) !== canonical(expectedPortablePaths)
    || plan.portable_runtime_bundle?.sha256 !== portableRuntimeBundleDigest(plan.portable_runtime_bundle?.files)) {
    throw new Error("portable runtime bundle lock drift");
  }
  for (const entry of plan.portable_runtime_bundle.files) assertEntry(entry, plan.source_commit);
  if (plan.cells.length !== 3 || plan.execution_control.max_new_cells_per_invocation !== 1
    || plan.execution_control.bounded_repair_model_calls_max !== 2) throw new Error("smoke schedule drift");
  if (plan.lock_manifest.schedule_sha256 !== sha256(canonical(plan.cells))) throw new Error("schedule lock drift");
  if (plan.lock_manifest.portable_runtime_bundle_sha256 !== plan.portable_runtime_bundle.sha256) {
    throw new Error("portable runtime bundle manifest drift");
  }
  if (plan.lock_manifest.codex_catalog_snapshot_contract_sha256 !== sha256(JSON.stringify(plan.codex_catalog_snapshot_contract))
    || plan.lock_manifest.codex_model_effort_contract_sha256 !== sha256(JSON.stringify(plan.codex_model_effort_contract))) throw new Error("runtime lock drift");
  assertRuntimeSources(plan.codex_catalog_snapshot_contract, plan.codex_model_effort_contract);
}
function prepareCommand(args) {
  const planPath = resolve(String(args.get("plan") ?? ""));
  const receiptPath = resolve(String(args.get("receipt") ?? ""));
  const root = resolve(String(args.get("root") ?? ""));
  if (!existsSync(planPath) || !existsSync(receiptPath) || existsSync(root)) throw new Error("prepare requires existing plan/receipt and fresh root");
  const plan = readJson(planPath); const receipt = readJson(receiptPath); validatePlan(plan, receipt, planPath);
  const taskSet = readJson(taskSetPath);
  mkdirSync(root, { recursive: false });
  copyFileSync(planPath, join(root, "RUN-MATRIX.locked.json"));
  copyFileSync(receiptPath, join(root, "PREREGISTRATION.receipt.json"));
  const initialState = { schema_version: "0.1", experiment_id: plan.experiment_id, status: "prepared", completed_cells: 0, cells: [] };
  for (const cell of plan.cells) {
    const workspace = join(root, cell.id); mkdirSync(workspace, { recursive: false });
    copyFileSync(join(repoRoot, plan.smoke_contract.authorities.starter_path), join(workspace, "index.html"));
    for (const item of plan.portable_runtime_bundle.files) {
      const target = join(workspace, installedPath(item.path)); mkdirSync(dirname(target), { recursive: true }); copyFileSync(join(repoRoot, item.path), target);
    }
    writeFileSync(join(workspace, "AGENTS.md"), genericAgents, { encoding: "utf8", flag: "wx" });
    const benchmark = join(workspace, ".benchmark"); mkdirSync(benchmark);
    const prompt = promptFor(taskSet, cell.task_id); writeFileSync(join(benchmark, "PROMPT.md"), prompt, { encoding: "utf8", flag: "wx" });
    writeJsonExclusive(join(benchmark, "controller-verification-policy.json"), {
      schema_version: "0.2", mode: "controller-owned-objective",
      controller: "autopilot-smoke-controller-v0.3", task_id: cell.task_id,
      repair_rounds_max: plan.smoke_contract.autonomy_contract.repair_rounds_max,
      initial_turn_soft_budget_ms: plan.smoke_contract.autonomy_contract.initial_turn_soft_budget_ms,
      minimum_controller_handoff_reserve_ms: plan.smoke_contract.autonomy_contract.minimum_controller_handoff_reserve_ms,
      advisory_lane_attempts_per_lane_max: plan.smoke_contract.autonomy_contract.advisory_lane_attempts_per_lane_max,
      advisory_result_repair_calls_max: plan.smoke_contract.autonomy_contract.advisory_result_repair_calls_max,
      advisory_coordination_calls_max: plan.smoke_contract.autonomy_contract.advisory_coordination_calls_max,
      plan_sha256: sha256(readFileSync(planPath)),
    });
    writeJsonExclusive(join(benchmark, "matrix-cell.json"), { ...cell, browser_execution: { require_browser_proof: false }, host_policy_gate: { require_browser_attempt: false } });
    const productIgnore = [".benchmark", ".agents", ".omd", "AGENTS.md", "agents", "scripts"];
    const product = treeManifest(workspace, { ignore: productIgnore }); const full = treeManifest(workspace);
    writeJsonExclusive(join(benchmark, "manifest.json"), {
      schema_version: "0.1", runtime_target: "codex", task: { id: cell.task_id }, variant: { id: cell.variant_id },
      workspace: { initial_sha256: full.sha256, product_initial_sha256: product.sha256, product_initial_files: product.files, product_ignore: productIgnore },
    });
    prepareIsolatedCodexHome(workspace, process.env, {
      exactRuntimeContract: preparedExactCodexRuntimeContract(workspace), modelId: cell.model_id, effort: cell.effort,
    });
    initialState.cells.push({ id: cell.id, status: "prepared", workspace_sha256: treeManifest(workspace).sha256 });
  }
  writeJsonExclusive(join(root, "execution-state.json"), initialState);
  auditRoot(root, { requireUntouched: true });
  console.log(root);
}
function auditRoot(root, { requireUntouched = false } = {}) {
  const planPath = join(root, "RUN-MATRIX.locked.json"); const receiptPath = join(root, "PREREGISTRATION.receipt.json");
  const plan = readJson(planPath); const receipt = readJson(receiptPath); validatePlan(plan, receipt, planPath);
  const state = readJson(join(root, "execution-state.json"));
  if (state.experiment_id !== plan.experiment_id || state.cells.length !== 3) throw new Error("execution state drift");
  for (const cell of plan.cells) {
    const workspace = join(root, cell.id); const matrixCell = readJson(join(workspace, ".benchmark/matrix-cell.json"));
    assertInstalledPortableRuntimeBundle(plan, workspace);
    if (canonical(matrixCell).includes("oracle") || canonical(matrixCell).includes("mutant")) throw new Error("forbidden calibration artifact reference in workspace");
    if (readFileSync(join(workspace, ".benchmark/PROMPT.md"), "utf8") !== promptFor(readJson(taskSetPath), cell.task_id)) throw new Error(`prompt drift: ${cell.id}`);
    preparedExactCodexRuntimeContract(workspace);
    if (requireUntouched && existsSync(join(workspace, ".benchmark/run-result.json"))) throw new Error(`workspace already executed: ${cell.id}`);
    for (const path of ["oracle-a", "oracle-b", "mutant"]) {
      if (readdirSync(workspace, { recursive: true }).some((item) => String(item).includes(path))) throw new Error(`forbidden calibration artifact in workspace: ${cell.id}`);
    }
  }
  return { pass: true, experiment_id: plan.experiment_id, cells: 3, status: state.status };
}
function auditCommand(args) { console.log(JSON.stringify(auditRoot(resolve(String(args.get("root") ?? ""))), null, 2)); }

function admitBrowserCommand(args) {
  const root = resolve(String(args.get("root") ?? ""));
  const browserId = String(args.get("browser-id") ?? "");
  const session = String(args.get("session") ?? "");
  const tabId = String(args.get("tab-id") ?? "");
  const url = String(args.get("url") ?? "");
  const audited = auditRoot(root, { requireUntouched: true });
  const planPath = join(root, "RUN-MATRIX.locked.json"); const plan = readJson(planPath);
  if (!browserId || session !== plan.experiment_id || !tabId || url !== "about:blank") {
    throw new Error("named in-app browser admission identity drift");
  }
  const planBytes = readFileSync(planPath);
  const receipt = {
    schema_version: "0.1", kind: "provider-zero-named-in-app-browser-admission",
    experiment_id: plan.experiment_id, plan_sha256: sha256(planBytes),
    browser: { type: "iab", browser_id: browserId, session, tab_id: tabId, url },
    prepared_audit: audited, admitted_at: new Date().toISOString(),
  };
  writeJsonExclusive(join(root, "BROWSER-ADMISSION.receipt.json"), receipt);
  console.log(JSON.stringify(receipt, null, 2));
}

function validateBrowserAdmission(root, plan) {
  const path = join(root, "BROWSER-ADMISSION.receipt.json");
  if (!existsSync(path)) throw new Error("named in-app browser admission receipt is required");
  const receipt = readJson(path); const planPath = join(root, "RUN-MATRIX.locked.json");
  if (receipt.schema_version !== "0.1"
    || receipt.kind !== "provider-zero-named-in-app-browser-admission"
    || receipt.experiment_id !== plan.experiment_id
    || receipt.plan_sha256 !== sha256(readFileSync(planPath))
    || receipt.browser?.type !== "iab"
    || receipt.browser?.session !== plan.experiment_id
    || !receipt.browser?.browser_id || !receipt.browser?.tab_id
    || receipt.browser?.url !== "about:blank"
    || receipt.prepared_audit?.pass !== true) throw new Error("named in-app browser admission receipt drift");
  return receipt;
}

function walkFor(root, name, ignored = new Set([".benchmark", ".agents"])) {
  const found = [];
  function visit(current) {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      if (ignored.has(entry.name)) continue;
      const absolute = join(current, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`symlink is forbidden in smoke evidence: ${absolute}`);
      if (entry.isDirectory()) visit(absolute);
      else if (entry.isFile() && entry.name === name) found.push(absolute);
    }
  }
  visit(root);
  return found.sort();
}
export function controllerDesignSystemProof(root, cell, workspace, round = 0) {
  try {
    const omdRoot = join(workspace, ".omd");
    if (!existsSync(omdRoot)) return { pass: false, reason: "autopilot-run-artifacts-missing", eligible_runs: 0 };
    const decisions = walkFor(omdRoot, "design-system-decision.json");
    if (decisions.length !== 1) {
      return { pass: false, reason: "exactly-one-design-system-decision-required", eligible_runs: decisions.length };
    }
    const sourceRun = dirname(decisions[0]);
    const designPath = join(workspace, "DESIGN.md");
    assertRegular(designPath, "Core v2 DESIGN.md projection");
    assertRegular(decisions[0], "Core v2 design-system decision");
    const decision = readJson(decisions[0]);
    if (decision.required_system_authority !== "core-v2-project-system"
      || !["establish", "refresh"].includes(decision.strategy)
      || decision.implementation_owner !== "main-agent") {
      return { pass: false, reason: "fresh-smoke-core-v2-decision-authority-required", eligible_runs: 0 };
    }
    if (existsSync(join(sourceRun, "system/spec.json"))) {
      return { pass: false, reason: "legacy-system-spec-forbidden-in-fresh-smoke", eligible_runs: 0 };
    }
    const sourceSystem = join(workspace, ".omd/system");
    const coreArtifacts = [
      "manifest.json",
      "graph.json",
      "provenance.json",
      "coverage.json",
      "adoption-receipt.json",
    ];
    const missing = coreArtifacts.filter((name) => !existsSync(join(sourceSystem, name)));
    if (missing.length) {
      return { pass: false, reason: "core-v2-project-system-required", missing_artifacts: missing, eligible_runs: 0 };
    }
    for (const name of coreArtifacts) assertRegular(join(sourceSystem, name), `Core v2 ${name}`);

    const auditRoot = join(root, ".controller-artifacts", cell.id, `design-system-audit-round-${round}`);
    const auditWorkspace = join(auditRoot, "workspace"); const auditRun = join(auditWorkspace, ".omd-run");
    const auditSystem = join(auditWorkspace, ".omd/system");
    mkdirSync(join(auditRun, "system"), { recursive: true });
    mkdirSync(auditSystem, { recursive: true });
    copyFileSync(designPath, join(auditWorkspace, "DESIGN.md"));
    copyFileSync(decisions[0], join(auditRun, "design-system-decision.json"));
    for (const name of coreArtifacts) copyFileSync(join(sourceSystem, name), join(auditSystem, name));

    const provenance = readJson(join(sourceSystem, "provenance.json"));
    const coverage = readJson(join(sourceSystem, "coverage.json"));
    const references = [
      ...(provenance.decisions ?? []).flatMap((item) => item.evidence ?? []),
      ...Object.values(coverage.groups ?? {}).flatMap((item) => item.evidence ?? []),
      ...Object.values(coverage.checks ?? {}).flatMap((item) => item.evidence ?? []),
    ];
    for (const reference of [...new Set(references)]) {
      copyDesignSystemEvidenceReference(reference, sourceRun, workspace, auditRun, auditWorkspace);
    }
    const result = spawnSync(process.execPath, [join(repoRoot, validatorPath), auditWorkspace, auditRun], {
      cwd: repoRoot, encoding: "utf8", timeout: 30_000,
    });
    const proofPath = join(auditRun, "system/proof.json");
    if (!existsSync(proofPath)) {
      return { pass: false, reason: "controller-design-system-validator-produced-no-proof", exit_code: result.status };
    }
    assertRegular(proofPath, "controller Core v2 proof");
    const proof = readJson(proofPath);
    const pass = result.status === 0 && proof.pass === true && proof.authority_mode === "core-v2-project-system"
      && proof.format === "design-md-core" && proof.format_version === "2.0.0";
    return {
      pass,
      reason: pass ? null : "controller-core-v2-design-system-proof-failed",
      proof,
      proof_sha256: sha256(readFileSync(proofPath)),
      source_run_relative: relative(workspace, sourceRun).split(sep).join("/"),
    };
  } catch (error) {
    return {
      pass: false,
      reason: error instanceof Error ? error.message : String(error),
      eligible_runs: 0,
    };
  }
}
export function controllerAutopilotProof(plan, cell, workspace) {
  try {
    assertInstalledPortableRuntimeBundle(plan, workspace);
    const omdRoot = join(workspace, ".omd");
    if (!existsSync(omdRoot)) throw new Error("autopilot artifact root is missing");
    const missions = walkFor(omdRoot, "mission.json");
    if (missions.length !== 1) throw new Error(`exactly one mission lineage required; observed ${missions.length}`);
    const runDir = dirname(missions[0]);
    const taskPath = join(runDir, "task.md");
    assertRegular(taskPath, "autopilot task authority");
    const prompt = readFileSync(join(workspace, ".benchmark/PROMPT.md"), "utf8");
    const task = readFileSync(taskPath, "utf8");
    if (!task.includes(prompt)) throw new Error("autopilot task does not retain exact prompt bytes");
    const answerArtifacts = readdirSync(runDir, { recursive: true })
      .map(String).filter((path) => path.endsWith("council-intake.answers.json"));
    if (answerArtifacts.length) throw new Error(`fully authorized smoke forbids answer artifacts; observed ${answerArtifacts.length}`);
    const questionArtifacts = readdirSync(runDir, { recursive: true })
      .map(String).filter((path) => path.endsWith("council-intake.questions.json"));
    for (const relativePath of questionArtifacts) {
      const value = readJson(join(runDir, relativePath));
      if (!Array.isArray(value.questions) || !Array.isArray(value.pending_interview_ids)) {
        throw new Error(`council question artifact shape drift: ${relativePath}`);
      }
      if (value.pending_interview_ids.length !== 0) {
        throw new Error(`fully authorized smoke requires zero pending council questions: ${relativePath}`);
      }
    }
    const audited = spawnSync(process.execPath, [join(repoRoot, "scripts/autopilot-mission.cjs"), workspace, runDir, "audit"], {
      cwd: repoRoot, encoding: "utf8", timeout: 30_000,
    });
    if (audited.status !== 0) throw new Error(`terminal mission audit failed: ${audited.stderr || audited.stdout}`);
    const proof = JSON.parse(audited.stdout);
    if (proof.pass !== true || proof.state !== "HANDOFF") throw new Error("terminal mission audit did not pass");
    return {
      pass: true, reason: null, mission_lineages: 1, question_batches: 0,
      answer_artifacts: 0, question_artifacts: questionArtifacts.length,
      run_dir_relative: relative(workspace, runDir).split(sep).join("/"), proof,
    };
  } catch (error) {
    return {
      pass: false, reason: error instanceof Error ? error.message : String(error),
      mission_lineages: null,
    };
  }
}
function tokenSummary(run) {
  const usage = run?.output?.model_usage ?? [];
  return {
    coverage: usage.length > 0,
    input_tokens: usage.reduce((sum, item) => sum + Number(item.input_tokens ?? 0), 0),
    cached_input_tokens: usage.reduce((sum, item) => sum + Number(item.cached_input_tokens ?? 0), 0),
    output_tokens: usage.reduce((sum, item) => sum + Number(item.output_tokens ?? 0), 0),
  };
}
export function objectiveFailureIds(score) {
  return Object.entries(score?.assertions ?? {}).filter(([, pass]) => pass !== true).map(([id]) => id).sort();
}
export function objectivePassingIds(score) {
  return Object.entries(score?.assertions ?? {}).filter(([, pass]) => pass === true).map(([id]) => id).sort();
}
export function repairContinuationDecision({ attempt, currentScore, previousScore = null, regressedAssertionIds = [] }) {
  if (attempt === 0) return { allowed: true, reason: "initial-attempt-may-enter-bounded-repair" };
  if (regressedAssertionIds.length > 0) {
    return { allowed: false, reason: "protected-assertion-regressed", regressed_assertion_ids: [...regressedAssertionIds].sort() };
  }
  if (!Number.isFinite(currentScore) || !Number.isFinite(previousScore)) {
    return { allowed: false, reason: "objective-score-unavailable" };
  }
  if (currentScore <= previousScore) {
    return { allowed: false, reason: "objective-score-did-not-improve", current_score: currentScore, previous_score: previousScore };
  }
  return { allowed: true, reason: "strict-objective-improvement", current_score: currentScore, previous_score: previousScore };
}
function boundedObservation(value) {
  if (value === null || typeof value === "boolean" || typeof value === "number") return value;
  if (typeof value === "string") return value.slice(0, 500);
  if (Array.isArray(value)) {
    return value.slice(0, 12).map((item) => {
      if (item && typeof item === "object" && !Array.isArray(item)) {
        return Object.fromEntries(Object.entries(item).slice(0, 20).map(([key, nested]) => [key, boundedObservation(nested)]));
      }
      return boundedObservation(item);
    });
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).slice(0, 20).map(([key, nested]) => [key, boundedObservation(nested)]));
  }
  return null;
}
function compactAxeFindings(viewports) {
  const stateKeys = [
    "initial_axe_violations", "filtered_axe_violations", "detail_axe_violations",
    "error_axe_violations", "assigned_axe_violations",
  ];
  const findings = new Map();
  for (const viewport of viewports) {
    for (const stateKey of stateKeys) {
      for (const violation of Array.isArray(viewport?.[stateKey]) ? viewport[stateKey] : []) {
        const nodes = Array.isArray(violation?.nodes) && violation.nodes.length
          ? violation.nodes
          : [{ target: violation?.targets?.[0] ?? [], failure_summary: violation?.description ?? null }];
        for (const node of nodes) {
          const target = Array.isArray(node?.target) ? node.target.slice(0, 3) : [];
          const computed = node?.computed_style && typeof node.computed_style === "object"
            ? Object.fromEntries(["color", "background_color", "font_size", "font_weight", "opacity"]
              .filter((key) => node.computed_style[key] != null)
              .map((key) => [key, String(node.computed_style[key]).slice(0, 120)]))
            : {};
          const key = JSON.stringify([violation?.id ?? null, target, node?.failure_summary ?? null, computed]);
          const current = findings.get(key) ?? {
            id: violation?.id ?? null,
            impact: violation?.impact ?? null,
            target,
            failure_summary: String(node?.failure_summary ?? violation?.description ?? "").slice(0, 300),
            computed_style: computed,
            viewport_ids: [],
            states: [],
          };
          if (!current.viewport_ids.includes(viewport?.id ?? null)) current.viewport_ids.push(viewport?.id ?? null);
          const state = stateKey.replace("_axe_violations", "");
          if (!current.states.includes(state)) current.states.push(state);
          findings.set(key, current);
        }
      }
    }
  }
  return [...findings.values()].slice(0, 12);
}
export function objectiveFailureObservations(score) {
  const failedIds = objectiveFailureIds(score);
  const evidence = score?.evidence && typeof score.evidence === "object" ? score.evidence : {};
  const viewports = Array.isArray(evidence.viewports) ? evidence.viewports : [];
  const compositeObservations = {
    unique_primary_action: {
      pass: evidence.unique_primary_action ?? null,
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        diagnostics: viewport.primary_action_diagnostics ?? null,
      })),
    },
    focus_transfer: {
      pass: evidence.focus_transfer ?? null,
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        focused_after_activation: viewport.primary_action_diagnostics?.focused_after_activation ?? null,
        post_action_aria: viewport.post_action_aria ?? [],
      })),
    },
    unavailable_information_honest: {
      pass: evidence.unavailable_information_honest ?? null,
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        excerpts: viewport.unavailable_information_excerpts ?? [],
      })),
    },
    queue_preconditions: {
      expected: { initial_unfiltered_queue: true, shipment_count_min: 3, urgent_count_min: 2, non_urgent_count_min: 1 },
      shipment_count: evidence.shipment_count ?? null,
      urgent_count: evidence.urgent_count ?? null,
      non_urgent_count: evidence.non_urgent_count ?? evidence.routine_count ?? null,
    },
    filter_selected_and_visible: {
      expected: "The urgent filter is keyboard-operable, programmatically selected, and visibly active. A native select's selected option is sufficient visible state.",
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        filter_kind: viewport.interaction_diagnostics?.filter_kind ?? null,
        filter_keyboard: viewport.interaction_diagnostics?.filter_keyboard ?? null,
        filter_programmatic: viewport.interaction_diagnostics?.filter_programmatic ?? null,
        filter_label: viewport.interaction_diagnostics?.filter_label ?? null,
        filter_selected_option: viewport.interaction_diagnostics?.filter_selected_option ?? null,
        baseline_selected_option: viewport.interaction_diagnostics?.baseline_selected_option ?? null,
        baseline_filter_reset: viewport.interaction_diagnostics?.baseline_filter_reset ?? null,
      })),
    },
    filtered_contents_exact: {
      pass: evidence.filtered_contents_exact ?? null,
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        record_classification: viewport.interaction_diagnostics?.record_classification ?? [],
        urgent_ids: viewport.interaction_diagnostics?.urgent_ids ?? [],
        filtered_record_ids: viewport.interaction_diagnostics?.filtered_record_ids ?? [],
      })),
    },
    keyboard_open_sample: {
      pass: evidence.keyboard_open_sample ?? null,
      accepted_detail_roles: ["dialog", "complementary", "region"],
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        action_reached: viewport.interaction_diagnostics?.action_reached ?? null,
        detail_role: viewport.interaction_diagnostics?.detail_role ?? null,
        detail_after: viewport.interaction_diagnostics?.detail_after ?? null,
      })),
    },
    matching_evidence_detail: {
      pass: evidence.matching_evidence_detail ?? null,
      expected: "The opened record detail keeps the same shipment identity and visibly scopes both sample/demo data and an evidence datum; those labels may be separate within the same detail surface.",
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        detail_role: viewport.interaction_diagnostics?.detail_role ?? null,
        detail_after: viewport.interaction_diagnostics?.detail_after ?? null,
      })),
    },
    assigned_owner_confirmed_and_persistent: {
      pass: evidence.assigned_owner_confirmed_and_persistent ?? null,
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        assigned_status_persistent: viewport.interaction_diagnostics?.assigned_status_persistent ?? null,
        selected_owner: viewport.interaction_diagnostics?.selected_owner ?? null,
        assignment_status_text: viewport.interaction_diagnostics?.assignment_status_text ?? null,
        assigned_source_record_text: viewport.interaction_diagnostics?.assigned_source_record_text ?? null,
        detail_after: viewport.interaction_diagnostics?.detail_after ?? null,
      })),
    },
    owner_error_associated: {
      expected: "Submitting without an owner keeps the action blocked, focuses the owner control, and programmatically associates the visible error with aria-describedby.",
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        owner_error: viewport.interaction_diagnostics?.owner_error ?? null,
      })),
    },
    sample_owner_options: {
      pass: evidence.sample_owner_options ?? null,
      expected: "At least one non-placeholder owner option is explicitly scoped as sample/demo/fictional by its option, optgroup, data marker, label, or described help text.",
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        sample_owner_option_count: viewport.interaction_diagnostics?.sample_owner_option_count ?? null,
        owner_scope_text: viewport.interaction_diagnostics?.owner_scope_text ?? null,
      })),
    },
    fictional_not_medical_advice: {
      expected: "The initial surface visibly identifies the preparation as fictional or sample and states that it is not medical advice or does not infer a diagnosis.",
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        diagnostics: viewport.honesty_diagnostics ?? null,
      })),
    },
    all_five_locales_exact: {
      pass: evidence.all_five_locales_exact ?? null,
      locale_equivalence_policy: "ko/en/ja accept their exact base or a more specific subtag; zh-CN is equivalent to zh-Hans and zh-TW to zh-Hant, but Simplified and Traditional remain distinct.",
      viewports: viewports.map((viewport) => ({ id: viewport.id ?? null, diagnostics: viewport.locale_switch_diagnostics ?? [] })),
    },
    selected_label_lang_script_agree: {
      pass: evidence.selected_label_lang_script_agree ?? null,
      viewports: viewports.map((viewport) => ({ id: viewport.id ?? null, diagnostics: viewport.locale_switch_diagnostics ?? [] })),
    },
    progress_textual_and_persistent: {
      expected: "Visible progress and any progressbar aria-valuenow/aria-valuemax stay synchronized across locale changes and completion.",
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        diagnostics: viewport.progress_diagnostics ?? null,
      })),
    },
    translation_unavailable_honest: {
      pass: evidence.translation_unavailable_honest ?? null,
      viewports: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        diagnostics: viewport.unavailable_translation_diagnostics ?? null,
      })),
    },
    accessibility: {
      expected: "Zero serious or critical Axe violations in every measured state and viewport.",
      findings: compactAxeFindings(viewports),
      viewport_counts: viewports.map((viewport) => ({
        id: viewport.id ?? null,
        initial: viewport.initial_axe_serious_critical ?? viewport.axe_serious_critical ?? null,
        filtered: viewport.filtered_axe_serious_critical ?? null,
        detail: viewport.detail_axe_serious_critical ?? null,
        error: viewport.error_axe_serious_critical ?? null,
        assigned: viewport.assigned_axe_serious_critical ?? null,
      })),
    },
    responsive: viewports.filter((viewport) => viewport.document_overflow_px > 0
      || viewport.critical_fields_reachable === false
      || viewport.controls_horizontally_unclipped === false
      || (viewport.mobile === true && Number(viewport.control_min_dimension_px) < 44)).map((viewport) => ({
      id: viewport.id ?? null,
      mobile: viewport.mobile ?? null,
      document_overflow_px: viewport.document_overflow_px ?? null,
      document_overflow_offenders: viewport.document_overflow_offenders ?? [],
      critical_fields_reachable: viewport.critical_fields_reachable ?? null,
      controls_horizontally_unclipped: viewport.controls_horizontally_unclipped ?? null,
      control_min_dimension_px: viewport.control_min_dimension_px ?? null,
    })),
  };
  const direct = Object.fromEntries(failedIds.map((id) => [id, {
    observed: boundedObservation(Object.hasOwn(compositeObservations, id) ? compositeObservations[id] : evidence[id] ?? null),
    assertion_pass: false,
  }]));
  const supporting = {};
  for (const [key, value] of Object.entries(evidence).sort(([a], [b]) => a.localeCompare(b))) {
    if (["schema_version", "task_id", "task_set_sha256", "adapter_set_sha256", "viewports"].includes(key) || failedIds.includes(key)) continue;
    const bounded = boundedObservation(value);
    if (bounded !== null) supporting[key] = bounded;
  }
  return {
    schema_version: "0.3",
    failed_assertions: direct,
    failed_groups: Object.fromEntries(Object.entries(score?.groups ?? {})
      .filter(([, value]) => value?.pass !== true)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([id, value]) => [id, boundedObservation(value)])),
    supporting_evidence: supporting,
  };
}
function missionRunDir(workspace) {
  const missions = walkFor(join(workspace, ".omd"), "mission.json");
  if (missions.length !== 1) throw new Error(`exactly one mission lineage required for controller repair; observed ${missions.length}`);
  return dirname(missions[0]);
}
function currentMissionState(runDir) {
  const path = join(runDir, "mission-state.json");
  return existsSync(path) ? readJson(path) : null;
}
function currentRepairRound(runDir) {
  const repairs = join(runDir, "repairs");
  if (!existsSync(repairs)) return 0;
  return readdirSync(repairs).filter((name) => /^round-[0-1]\.json$/.test(name)).length;
}
export function buildControllerRepairPrompt({ originalPrompt, feedbackPath, feedbackSha256, repairRound, failedIds, protectedIds = [], regressedIds = [] }) {
  return `${originalPrompt}\n\n---\nCONTROLLER-OWNED BOUNDED REPAIR ${repairRound}/2\nContinue the existing OmD Autopilot mission. Do not bootstrap a new mission, do not ask the user, and do not replace the project design system. Read the hash-bound controller feedback at ${feedbackPath} (SHA-256 ${feedbackSha256}). Treat its objective_observations and protected_assertions as controller measurements, not suggestions or DOM requirements. Fix only the failed objective assertions: ${failedIds.join(", ") || "terminal OmD proof"}. The following assertions are cumulative non-regression invariants and must remain true after this patch: ${protectedIds.join(", ") || "none recorded"}.${regressedIds.length ? ` Restore these previously passing assertions before any other refinement: ${regressedIds.join(", ")}.` : ""} Preserve protected unknowns. Make the smallest product change that satisfies the failures without changing successful journeys, labels, state transitions, or evidence semantics; reverify both the repaired failures and every protected assertion before handing control back. Update the real product, write proof.json for repair_round ${repairRound}, and run the installed autopilot-mission controller until it reaches EXTERNAL_VERIFY or a truthful failed handoff. Do not claim success from prose or from an unavailable browser.\n`;
}
function writeControllerVerification({ workspace, runDir, round, scorePath, evaluatorResultPath, score, designSystemProof }) {
  const proofPath = join(runDir, "proof.json");
  if (!existsSync(proofPath)) return null;
  const proof = readJson(proofPath);
  const failedIds = objectiveFailureIds(score);
  const receipt = {
    schema_version: "0.2", controller: "autopilot-smoke-controller-v0.3",
    task_id: score?.task_id ?? readJson(join(workspace, ".benchmark/matrix-cell.json")).task_id,
    mission_sha256: sha256(readFileSync(join(runDir, "mission.json"))),
    proof_sha256: sha256(readFileSync(proofPath)),
    product_tree_sha256: missionProductTreeManifest(workspace).sha256,
    repair_round: round,
    status: score?.ui_resolved === true ? "pass" : "fail",
    failed_assertion_ids: failedIds,
    task_score_sha256: sha256(readFileSync(scorePath)),
    evaluator_result_sha256: sha256(readFileSync(evaluatorResultPath)),
    design_system_proof_pass: designSystemProof?.pass === true,
    design_system_proof_sha256: designSystemProof?.proof_sha256 ?? null,
  };
  if (proof.repair_round !== round || proof.product_tree_sha256 !== receipt.product_tree_sha256) {
    throw new Error("controller verification proof/product authority drift");
  }
  const out = join(runDir, "controller-verification", `round-${round}.json`);
  writeJsonExclusive(out, receipt);
  return { receipt, path: out, sha256: sha256(readFileSync(out)) };
}
function runCommand(args) {
  const root = resolve(String(args.get("root") ?? ""));
  const maxNew = Number(args.get("max-new-cells") ?? 0);
  if (maxNew !== 1) throw new Error("autopilot smoke requires --max-new-cells 1");
  auditRoot(root);
  const plan = readJson(join(root, "RUN-MATRIX.locked.json"));
  validateBrowserAdmission(root, plan);
  const statePath = join(root, "execution-state.json"); const state = readJson(statePath);
  if (state.status === "complete" || state.status === "stopped-preregistered") throw new Error(`smoke root is not resumable: ${state.status}`);
  const next = plan.cells.find((cell) => state.cells.find((item) => item.id === cell.id)?.status === "prepared");
  if (!next) throw new Error("no prepared smoke cell remains");
  const stateCell = state.cells.find((item) => item.id === next.id);
  state.status = "running"; state.current_cell = next.id; stateCell.status = "running"; stateCell.started_at = new Date().toISOString();
  writeJsonAtomic(statePath, state);
  const workspace = join(root, next.id);
  const controllerDir = join(root, ".controller-artifacts", next.id); mkdirSync(controllerDir, { recursive: true });
  const attempts = [];
  const protectedAssertions = new Map();
  let final = null;
  for (let attempt = 0; attempt <= plan.smoke_contract.autonomy_contract.repair_rounds_max; attempt += 1) {
    const suffix = attempt === 0 ? null : `repair-${attempt}`;
    const runnerArgs = [join(repoRoot, "benchmarks/ui-resolve-bench/scripts/run-codex.mjs"),
      "--workspace", workspace, "--model", next.model_id, "--reasoning", next.effort,
      "--timeout-ms", String(next.timeout_seconds * 1000),
      ...(suffix ? ["--artifact-suffix", suffix] : [])];
    const runner = spawnSync(process.execPath, runnerArgs, {
      cwd: repoRoot, encoding: "utf8", timeout: (next.timeout_seconds + 30) * 1000,
    });
    const artifactDir = suffix ? join(workspace, ".benchmark/attempts", suffix) : join(workspace, ".benchmark");
    const runResultPath = join(artifactDir, "run-result.json");
    if (!existsSync(runResultPath)) {
      state.status = "stopped-preregistered"; state.stop_reason = `provider-controller-result-missing:attempt-${attempt}:exit-${runner.status}`; stateCell.status = "stopped";
      writeJsonAtomic(statePath, state); throw new Error(state.stop_reason);
    }
    const run = readJson(runResultPath);
    const eventsPath = join(artifactDir, "events.jsonl");
    const providerInfrastructureFailure = existsSync(eventsPath)
      ? classifyProviderStreamFailure(readFileSync(eventsPath, "utf8"))
      : null;
    if (providerInfrastructureFailure) {
      state.status = "stopped-preregistered";
      state.stop_reason = providerInfrastructureFailure.kind;
      state.infrastructure_failure = {
        ...providerInfrastructureFailure,
        cell_id: next.id,
        attempt,
        run_result_sha256: sha256(readFileSync(runResultPath)),
        events_sha256: sha256(readFileSync(eventsPath)),
      };
      stateCell.status = "stopped";
      stateCell.finished_at = new Date().toISOString();
      stateCell.stop_reason = providerInfrastructureFailure.kind;
      writeJsonAtomic(statePath, state);
      throw new Error(providerInfrastructureFailure.kind);
    }
    const dsProof = controllerDesignSystemProof(root, next, workspace, attempt);
    const scorePath = join(controllerDir, `task-score-round-${attempt}.json`);
    let evaluator = null;
    if (shouldEvaluateProviderAttempt(run, existsSync(join(workspace, "index.html")))) {
      const evaluated = spawnSync(process.execPath, [join(repoRoot, evaluatorPath), "--task-id", next.task_id, "--workspace", workspace, "--out", scorePath], {
        cwd: repoRoot, encoding: "utf8", timeout: AUTOPILOT_EVALUATOR_TIMEOUT_MS,
      });
      evaluator = { exit_code: evaluated.status, signal: evaluated.signal, stderr: evaluated.stderr?.slice(0, 4000) ?? "" };
    }
    const evaluatorResultPath = join(controllerDir, `evaluator-result-round-${attempt}.json`);
    writeJsonAtomic(evaluatorResultPath, evaluator ?? { exit_code: null, signal: null, stderr: "", reason: "index-html-missing" });
    if (!existsSync(scorePath) && run.process.exit_code === 0 && !run.process.timed_out) {
      state.status = "stopped-preregistered"; state.stop_reason = "controller-task-evaluator-produced-no-score"; stateCell.status = "stopped";
      stateCell.evaluator_result_sha256 = sha256(readFileSync(evaluatorResultPath));
      writeJsonAtomic(statePath, state); throw new Error(state.stop_reason);
    }
    const score = existsSync(scorePath) ? readJson(scorePath) : null;
    const runDir = existsSync(join(workspace, ".omd")) ? missionRunDir(workspace) : null;
    let verification = null;
    if (runDir && score) {
      const proofPath = join(runDir, "proof.json");
      if (existsSync(proofPath) && readJson(proofPath).repair_round === attempt) {
        verification = writeControllerVerification({ workspace, runDir, round: attempt, scorePath, evaluatorResultPath, score, designSystemProof: dsProof });
        if (currentMissionState(runDir)?.state === "EXTERNAL_VERIFY") {
          const advanced = spawnSync(process.execPath, [join(repoRoot, "scripts/autopilot-mission.cjs"), workspace, runDir, "advance"], {
            cwd: repoRoot, encoding: "utf8", timeout: 30_000,
          });
          if (advanced.status !== 0) throw new Error(`controller verification transition failed: ${advanced.stderr || advanced.stdout}`);
        }
      }
    }
    const taskPass = score?.ui_resolved === true;
    const autopilotProof = taskPass ? controllerAutopilotProof(plan, next, workspace) : { pass: false, reason: "objective-task-score-failed" };
    const success = run.process.exit_code === 0 && !run.process.timed_out && dsProof.pass && autopilotProof.pass && taskPass;
    const regressedAssertionIds = [...protectedAssertions.keys()].filter((id) => score?.assertions?.[id] !== true).sort();
    const previousAttempt = attempts.at(-1) ?? null;
    const repairContinuation = repairContinuationDecision({
      attempt,
      currentScore: score?.score,
      previousScore: previousAttempt?.task_score?.score ?? null,
      regressedAssertionIds,
    });
    const attemptRecord = {
      attempt, kind: attempt === 0 ? "initial" : "bounded-repair", run, run_result_path: relative(workspace, runResultPath).split(sep).join("/"),
      run_result_sha256: sha256(readFileSync(runResultPath)), token_usage: tokenSummary(run), design_system_proof: dsProof,
      autopilot_proof: autopilotProof, task_score: score, evaluator, verification,
      task_score_sha256: existsSync(scorePath) ? sha256(readFileSync(scorePath)) : null,
      evaluator_result_sha256: sha256(readFileSync(evaluatorResultPath)),
      protected_assertion_ids_before_attempt: [...protectedAssertions.keys()].sort(),
      regressed_assertion_ids: regressedAssertionIds,
      repair_continuation: repairContinuation,
      success,
    };
    attempts.push(attemptRecord);
    for (const id of objectivePassingIds(score)) {
      if (!protectedAssertions.has(id)) protectedAssertions.set(id, boundedObservation(score?.evidence?.[id] ?? null));
    }
    final = attemptRecord;
    if (success || attempt === plan.smoke_contract.autonomy_contract.repair_rounds_max
      || run.process.exit_code !== 0 || run.process.timed_out || !runDir
      || !repairContinuation.allowed) break;
    const missionState = currentMissionState(runDir);
    const nextRepairRound = currentRepairRound(runDir);
    if (missionState?.state !== "BOUNDED_REVISION" || nextRepairRound !== attempt + 1) break;
    const failedIds = [...new Set([
      ...objectiveFailureIds(score),
      ...regressedAssertionIds,
      ...(missionState.evidence?.failed_requirement_ids ?? []),
      ...(missionState.evidence?.failed_quality_check_ids ?? []),
    ])].sort();
    const feedback = {
      schema_version: "0.3", controller: "autopilot-smoke-controller-v0.3", task_id: next.task_id,
      mission_sha256: sha256(readFileSync(join(runDir, "mission.json"))),
      repair_round: nextRepairRound, prior_attempt: attempt, failed_assertion_ids: failedIds,
      task_score_sha256: existsSync(scorePath) ? sha256(readFileSync(scorePath)) : null,
      evaluator_result_sha256: sha256(readFileSync(evaluatorResultPath)),
      score: score?.score ?? null, deterministic_max: score?.deterministic_max ?? null,
      failed_groups: Object.entries(score?.groups ?? {}).filter(([, value]) => value?.pass !== true).map(([id]) => id).sort(),
      objective_observations: objectiveFailureObservations(score),
      protected_assertion_ids: [...protectedAssertions.keys()].sort(),
      protected_assertions: Object.fromEntries([...protectedAssertions.entries()].sort(([a], [b]) => a.localeCompare(b))
        .map(([id, observed]) => [id, { assertion_pass: true, observed }])),
      regressed_assertion_ids: regressedAssertionIds,
      task_score_path: relative(workspace, scorePath).split(sep).join("/"),
    };
    const feedbackPath = join(workspace, ".benchmark/controller-feedback", `round-${nextRepairRound}.json`);
    writeJsonExclusive(feedbackPath, feedback);
    const feedbackSha = sha256(readFileSync(feedbackPath));
    const promptPath = join(workspace, ".benchmark/repair-prompts", `repair-${nextRepairRound}.md`);
    mkdirSync(dirname(promptPath), { recursive: true });
    writeFileSync(promptPath, buildControllerRepairPrompt({
      originalPrompt: readFileSync(join(workspace, ".benchmark/PROMPT.md"), "utf8"),
      feedbackPath: relative(workspace, feedbackPath).split(sep).join("/"), feedbackSha256: feedbackSha,
      repairRound: nextRepairRound, failedIds,
      protectedIds: [...protectedAssertions.keys()].sort(), regressedIds: regressedAssertionIds,
    }), { encoding: "utf8", flag: "wx" });
  }
  const run = final.run; const dsProof = final.design_system_proof; const autopilotProof = final.autopilot_proof;
  const score = final.task_score; const evaluator = final.evaluator;
  const terminalSuccess = final.success;
  const record = {
    schema_version: "0.1", experiment_id: plan.experiment_id, cell: next,
    validity: "valid", run_status: run.process.timed_out ? "timed_out" : "complete",
    outcome: terminalSuccess ? "success" : "terminal-provider-failure",
    ui_resolved: terminalSuccess,
    provider_process: run.process,
    token_usage: {
      coverage: attempts.every((item) => item.token_usage.coverage),
      input_tokens: attempts.reduce((sum, item) => sum + item.token_usage.input_tokens, 0),
      cached_input_tokens: attempts.reduce((sum, item) => sum + item.token_usage.cached_input_tokens, 0),
      output_tokens: attempts.reduce((sum, item) => sum + item.token_usage.output_tokens, 0),
    },
    model_calls: attempts.length, repair_model_calls: Math.max(0, attempts.length - 1), attempts,
    runtime_authority: run.runtime.model_catalog_authority,
    design_system_proof: dsProof,
    autopilot_proof: autopilotProof,
    task_score: score,
    evaluator,
    hashes: {
      run_result_sha256: final.run_result_sha256,
      task_score_sha256: final.task_score_sha256,
      evaluator_result_sha256: final.evaluator_result_sha256,
      product_tree_sha256: missionProductTreeManifest(workspace).sha256,
      design_md_sha256: existsSync(join(workspace, "DESIGN.md")) ? sha256(readFileSync(join(workspace, "DESIGN.md"))) : null,
    },
    finished_at: new Date().toISOString(),
  };
  writeJsonExclusive(join(controllerDir, "run-record.json"), record);
  stateCell.status = "complete"; stateCell.finished_at = record.finished_at; stateCell.validity = "valid";
  stateCell.run_status = record.run_status; stateCell.outcome = record.outcome; stateCell.ui_resolved = record.ui_resolved;
  stateCell.run_record_sha256 = sha256(readFileSync(join(controllerDir, "run-record.json")));
  state.completed_cells = state.cells.filter((item) => item.status === "complete").length;
  state.current_cell = null; state.status = state.completed_cells === plan.cells.length ? "complete" : "checkpointed";
  state.last_checkpoint = { completed_cells: state.completed_cells, cell_id: next.id, ui_resolved: record.ui_resolved, outcome: record.outcome };
  writeJsonAtomic(statePath, state);
  console.log(JSON.stringify({ state: state.status, checkpoint: state.last_checkpoint, record }, null, 2));
}

export function freezeRunningRootAfterControllerFailure(root, error) {
  const statePath = join(root, "execution-state.json");
  if (!existsSync(statePath)) return;
  const state = readJson(statePath);
  if (state.status !== "running" || !state.current_cell) return;
  const cell = state.cells.find((item) => item.id === state.current_cell);
  if (cell) {
    cell.status = "stopped";
    cell.finished_at = new Date().toISOString();
    cell.stop_reason = "controller-failure-after-cell-start";
  }
  state.status = "stopped-preregistered";
  state.stopped_at = new Date().toISOString();
  state.stop_reason = "controller-failure-after-cell-start";
  state.controller_error = String(error?.message ?? error);
  writeJsonAtomic(statePath, state);
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  const command = process.argv[2];
  const args = parseArgs(process.argv.slice(3));
  if (command === "plan") planCommand(args);
  else if (command === "prepare") prepareCommand(args);
  else if (command === "audit") auditCommand(args);
  else if (command === "admit-browser") admitBrowserCommand(args);
  else if (command === "run") {
    try { runCommand(args); }
    catch (error) {
      freezeRunningRootAfterControllerFailure(resolve(String(args.get("root") ?? "")), error);
      throw error;
    }
  }
  else {
    console.error("usage: autopilot-smoke-controller.mjs plan|prepare|audit|admit-browser|run ...");
    process.exitCode = 2;
  }
}

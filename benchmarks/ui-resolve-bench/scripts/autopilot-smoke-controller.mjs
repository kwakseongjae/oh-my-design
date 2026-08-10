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
  readdirSync,
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
const smokeConfigPath = join(repoRoot, "benchmarks/ui-resolve-bench/config/autopilot-luna-high-smoke-v0.1.json");
const taskSetPath = join(repoRoot, "benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json");
const runtimeAuthorityPath = join(repoRoot, "benchmarks/ui-resolve-bench/reports/codex-all-effort-sweep-1.9.826/RUN-MATRIX.json");
const controllerPath = relative(repoRoot, fileURLToPath(import.meta.url)).split(sep).join("/");
const evaluatorPath = "benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs";
const validatorPath = "scripts/validate-project-design-system.cjs";
const SHA = /^[a-f0-9]{64}$/;
const COMMIT = /^[a-f0-9]{40}$/;

function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}
function readJson(path) { return JSON.parse(readFileSync(path, "utf8")); }
function writeJsonExclusive(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
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
  const config = readJson(smokeConfigPath);
  const taskSet = readJson(taskSetPath);
  if (config.provider_execution_allowed !== false || config.cells.length !== 3) throw new Error("smoke preregistration template drift");
  const paths = [...new Set([
    relative(repoRoot, smokeConfigPath).split(sep).join("/"),
    relative(repoRoot, taskSetPath).split(sep).join("/"),
    controllerPath,
    evaluatorPath,
    validatorPath,
    config.authorities.adapter_set_path,
    config.authorities.starter_path,
    ...config.authorities.portable_bundle_files.map((item) => item.path),
  ])].sort();
  const sourceAuthority = paths.map((path) => authorityEntry(path, sourceCommit));
  const smokeBytes = readFileSync(smokeConfigPath);
  const taskBytes = readFileSync(taskSetPath);
  if (sha256(smokeBytes) !== config.authorities.smoke_config_sha256 && config.authorities.smoke_config_sha256) {
    throw new Error("smoke config self hash drift");
  }
  if (sha256(taskBytes) !== config.authorities.task_set_sha256) throw new Error("task-set hash drift");
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
  const plan = {
    schema_version: "0.1", kind: "autopilot-greenfield-diagnostic-smoke",
    experiment_id: "autopilot-luna-high-smoke-1.9.850", status: "locked-provider-zero",
    claim_state: config.claim_state, source_commit: sourceCommit,
    source_authority: { schema_version: "0.1", files: sourceAuthority, sha256: sha256(canonical(sourceAuthority)) },
    smoke_contract: config,
    codex_catalog_snapshot_contract: snapshot,
    codex_model_effort_contract: modelEffort,
    execution_control: { serial: true, max_new_cells_per_invocation: 1, retries: 0, replacements: 0, fallback: 0 },
    cells,
  };
  plan.lock_manifest = {
    canonicalization: "sha256-json-stringify-v1",
    source_authority_sha256: plan.source_authority.sha256,
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
const genericAgents = `# Installed oh-my-design Autopilot\n\nFor broad greenfield UI work, read and follow .agents/skills/omd-autopilot/SKILL.md. The user prompt is the only product brief. Use the installed generic OmD helpers and advisers; do not inspect benchmark fixtures, oracles, mutants, sibling workspaces, or the source repository. The current main agent is the only product and DESIGN.md write owner.\n`;
function validatePlan(plan, receipt, planPath) {
  const bytes = readFileSync(planPath);
  if (receipt.plan_sha256 !== sha256(bytes) || receipt.plan_bytes !== bytes.length) throw new Error("plan receipt drift");
  if (!COMMIT.test(plan.source_commit) || git("merge-base", "--is-ancestor", plan.source_commit, "HEAD") !== "") throw new Error("plan source commit is unavailable");
  for (const entry of plan.source_authority.files) assertEntry(entry, plan.source_commit);
  if (plan.source_authority.sha256 !== sha256(canonical(plan.source_authority.files))) throw new Error("source authority aggregate drift");
  if (plan.cells.length !== 3 || plan.execution_control.max_new_cells_per_invocation !== 1) throw new Error("smoke schedule drift");
  if (plan.lock_manifest.schedule_sha256 !== sha256(canonical(plan.cells))) throw new Error("schedule lock drift");
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
    for (const item of plan.smoke_contract.authorities.portable_bundle_files) {
      const target = join(workspace, installedPath(item.path)); mkdirSync(dirname(target), { recursive: true }); copyFileSync(join(repoRoot, item.path), target);
    }
    writeFileSync(join(workspace, "AGENTS.md"), genericAgents, { encoding: "utf8", flag: "wx" });
    const benchmark = join(workspace, ".benchmark"); mkdirSync(benchmark);
    const prompt = promptFor(taskSet, cell.task_id); writeFileSync(join(benchmark, "PROMPT.md"), prompt, { encoding: "utf8", flag: "wx" });
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

const command = process.argv[2];
const args = parseArgs(process.argv.slice(3));
if (command === "plan") planCommand(args);
else if (command === "prepare") prepareCommand(args);
else if (command === "audit") auditCommand(args);
else {
  console.error("usage: autopilot-smoke-controller.mjs plan|prepare|audit ...");
  process.exitCode = 2;
}

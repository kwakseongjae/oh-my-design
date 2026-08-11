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
    "benchmarks/ui-resolve-bench/scripts/run-codex.mjs",
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
  const experimentId = String(args.get("experiment-id") ?? "autopilot-luna-high-smoke-1.9.850");
  if (!/^autopilot-luna-high-smoke-1\.9\.\d+$/.test(experimentId)) throw new Error("invalid smoke experiment id");
  const plan = {
    schema_version: "0.1", kind: "autopilot-greenfield-diagnostic-smoke",
    experiment_id: experimentId, status: "locked-provider-zero",
    claim_state: config.claim_state, source_commit: sourceCommit,
    source_authority: { schema_version: "0.1", files: sourceAuthority, sha256: sha256(canonical(sourceAuthority)) },
    smoke_contract: config,
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
  if (plan.cells.length !== 3 || plan.execution_control.max_new_cells_per_invocation !== 1
    || plan.execution_control.bounded_repair_model_calls_max !== 2) throw new Error("smoke schedule drift");
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
    writeJsonExclusive(join(benchmark, "controller-verification-policy.json"), {
      schema_version: "0.1", mode: "controller-owned-objective",
      controller: "autopilot-smoke-controller-v0.2", task_id: cell.task_id,
      repair_rounds_max: plan.smoke_contract.autonomy_contract.repair_rounds_max,
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
function controllerDesignSystemProof(root, cell, workspace, round = 0) {
  const omdRoot = join(workspace, ".omd");
  if (!existsSync(omdRoot)) return { pass: false, reason: "autopilot-run-artifacts-missing", eligible_runs: 0 };
  const decisions = walkFor(omdRoot, "design-system-decision.json");
  const eligible = decisions.filter((decision) => {
    const runDir = dirname(decision);
    return existsSync(join(runDir, "system/provenance.json")) && existsSync(join(runDir, "system/coverage.json"));
  });
  if (eligible.length !== 1 || !existsSync(join(workspace, "DESIGN.md"))) {
    return { pass: false, reason: "exactly-one-verifiable-design-system-run-required", eligible_runs: eligible.length };
  }
  const sourceRun = dirname(eligible[0]);
  const auditRoot = join(root, ".controller-artifacts", cell.id, `design-system-audit-round-${round}`);
  const auditWorkspace = join(auditRoot, "workspace"); const auditRun = join(auditWorkspace, ".omd-run");
  mkdirSync(join(auditRun, "system"), { recursive: true });
  copyFileSync(join(workspace, "DESIGN.md"), join(auditWorkspace, "DESIGN.md"));
  copyFileSync(join(sourceRun, "design-system-decision.json"), join(auditRun, "design-system-decision.json"));
  copyFileSync(join(sourceRun, "system/provenance.json"), join(auditRun, "system/provenance.json"));
  copyFileSync(join(sourceRun, "system/coverage.json"), join(auditRun, "system/coverage.json"));
  const result = spawnSync(process.execPath, [join(repoRoot, validatorPath), auditWorkspace, auditRun], {
    cwd: repoRoot, encoding: "utf8", timeout: 30_000,
  });
  const proofPath = join(auditRun, "system/proof.json");
  if (!existsSync(proofPath)) return { pass: false, reason: "controller-design-system-validator-produced-no-proof", exit_code: result.status };
  const proof = readJson(proofPath);
  return {
    pass: result.status === 0 && proof.pass === true,
    reason: result.status === 0 && proof.pass === true ? null : "controller-design-system-proof-failed",
    proof,
    proof_sha256: sha256(readFileSync(proofPath)),
    source_run_relative: relative(workspace, sourceRun).split(sep).join("/"),
  };
}
export function controllerAutopilotProof(plan, cell, workspace) {
  try {
    for (const item of plan.smoke_contract.authorities.portable_bundle_files) {
      const installed = join(workspace, installedPath(item.path));
      assertRegular(installed, `installed portable authority ${item.path}`);
      const bytes = readFileSync(installed);
      if (bytes.length !== item.bytes || sha256(bytes) !== item.sha256) {
        throw new Error(`installed portable authority drift: ${item.path}`);
      }
    }
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
      if (!Array.isArray(value.questions) || value.questions.length !== 0) {
        throw new Error(`fully authorized smoke requires zero council questions: ${relativePath}`);
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
export function objectiveFailureObservations(score) {
  const failedIds = objectiveFailureIds(score);
  const evidence = score?.evidence && typeof score.evidence === "object" ? score.evidence : {};
  const direct = Object.fromEntries(failedIds.map((id) => [id, {
    observed: boundedObservation(evidence[id] ?? null),
    assertion_pass: false,
  }]));
  const supporting = {};
  for (const [key, value] of Object.entries(evidence).sort(([a], [b]) => a.localeCompare(b))) {
    if (["schema_version", "task_id", "task_set_sha256", "adapter_set_sha256"].includes(key) || failedIds.includes(key)) continue;
    const bounded = boundedObservation(value);
    if (bounded !== null) supporting[key] = bounded;
  }
  return {
    schema_version: "0.2",
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
export function buildControllerRepairPrompt({ originalPrompt, feedbackPath, feedbackSha256, repairRound, failedIds }) {
  return `${originalPrompt}\n\n---\nCONTROLLER-OWNED BOUNDED REPAIR ${repairRound}/2\nContinue the existing OmD Autopilot mission. Do not bootstrap a new mission, do not ask the user, and do not replace the project design system. Read the hash-bound controller feedback at ${feedbackPath} (SHA-256 ${feedbackSha256}). Treat its objective_observations as controller measurements, not suggestions or DOM requirements. Fix only the failed objective assertions: ${failedIds.join(", ") || "terminal OmD proof"}. Preserve already passing behavior and protected unknowns. Update the real product, write proof.json for repair_round ${repairRound}, and run the installed autopilot-mission controller until it reaches EXTERNAL_VERIFY or a truthful failed handoff. Do not claim success from prose or from an unavailable browser.\n`;
}
function writeControllerVerification({ workspace, runDir, round, scorePath, evaluatorResultPath, score }) {
  const proofPath = join(runDir, "proof.json");
  if (!existsSync(proofPath)) return null;
  const proof = readJson(proofPath);
  const failedIds = objectiveFailureIds(score);
  const receipt = {
    schema_version: "0.1", controller: "autopilot-smoke-controller-v0.2",
    task_id: score?.task_id ?? readJson(join(workspace, ".benchmark/matrix-cell.json")).task_id,
    mission_sha256: sha256(readFileSync(join(runDir, "mission.json"))),
    proof_sha256: sha256(readFileSync(proofPath)),
    product_tree_sha256: missionProductTreeManifest(workspace).sha256,
    repair_round: round,
    status: score?.ui_resolved === true ? "pass" : "fail",
    failed_assertion_ids: failedIds,
    task_score_sha256: sha256(readFileSync(scorePath)),
    evaluator_result_sha256: sha256(readFileSync(evaluatorResultPath)),
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
    const dsProof = controllerDesignSystemProof(root, next, workspace, attempt);
    const scorePath = join(controllerDir, `task-score-round-${attempt}.json`);
    let evaluator = null;
    if (existsSync(join(workspace, "index.html"))) {
      const evaluated = spawnSync(process.execPath, [join(repoRoot, evaluatorPath), "--task-id", next.task_id, "--workspace", workspace, "--out", scorePath], {
        cwd: repoRoot, encoding: "utf8", timeout: 180_000,
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
        verification = writeControllerVerification({ workspace, runDir, round: attempt, scorePath, evaluatorResultPath, score });
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
    const attemptRecord = {
      attempt, kind: attempt === 0 ? "initial" : "bounded-repair", run, run_result_path: relative(workspace, runResultPath).split(sep).join("/"),
      run_result_sha256: sha256(readFileSync(runResultPath)), token_usage: tokenSummary(run), design_system_proof: dsProof,
      autopilot_proof: autopilotProof, task_score: score, evaluator, verification,
      task_score_sha256: existsSync(scorePath) ? sha256(readFileSync(scorePath)) : null,
      evaluator_result_sha256: sha256(readFileSync(evaluatorResultPath)), success,
    };
    attempts.push(attemptRecord);
    final = attemptRecord;
    if (success || attempt === plan.smoke_contract.autonomy_contract.repair_rounds_max
      || run.process.exit_code !== 0 || run.process.timed_out || !runDir) break;
    const missionState = currentMissionState(runDir);
    const nextRepairRound = currentRepairRound(runDir);
    if (missionState?.state !== "BOUNDED_REVISION" || nextRepairRound !== attempt + 1) break;
    const failedIds = [...new Set([
      ...objectiveFailureIds(score),
      ...(missionState.evidence?.failed_requirement_ids ?? []),
      ...(missionState.evidence?.failed_quality_check_ids ?? []),
    ])].sort();
    const feedback = {
      schema_version: "0.2", controller: "autopilot-smoke-controller-v0.2", task_id: next.task_id,
      mission_sha256: sha256(readFileSync(join(runDir, "mission.json"))),
      repair_round: nextRepairRound, prior_attempt: attempt, failed_assertion_ids: failedIds,
      task_score_sha256: existsSync(scorePath) ? sha256(readFileSync(scorePath)) : null,
      evaluator_result_sha256: sha256(readFileSync(evaluatorResultPath)),
      score: score?.score ?? null, deterministic_max: score?.deterministic_max ?? null,
      failed_groups: Object.entries(score?.groups ?? {}).filter(([, value]) => value?.pass !== true).map(([id]) => id).sort(),
      objective_observations: objectiveFailureObservations(score),
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

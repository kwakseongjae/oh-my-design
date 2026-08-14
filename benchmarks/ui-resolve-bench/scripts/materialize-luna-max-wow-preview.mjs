#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import {
  assertInside,
  copyReviewedTree,
  parseArgs,
  readJson,
  sha256,
  treeManifest,
} from "./_lib.mjs";
import { validateRunMatrixPlan } from "./prepare-run-matrix.mjs";
import {
  buildCells,
  defaultConfigPath,
  defaultNeutralInputLockPath,
  WORKSPACE_RUNTIME_BOUNDARY,
  OMD_EXTERNAL_STAGING_ACTIVATION,
  validateCompetitorLock,
  validateConfig,
  validateNeutralTaskPacketLock,
  validateTaskPrompts,
} from "./prepare-luna-max-wow-preview.mjs";
import { auditCheckedOutSources } from "./audit-omd-2.0-competitor-source-lock.mjs";

const here = dirname(fileURLToPath(import.meta.url));
export const repoRoot = resolve(here, "../../..");
export const materializerPath = relative(repoRoot, fileURLToPath(import.meta.url)).split(sep).join("/");
const SHA = /^[a-f0-9]{64}$/;
const COMMIT = /^[a-f0-9]{40}$/;
const EXPECTED_ARMS = new Set([
  "model-only",
  "anthropic-frontend-design",
  "impeccable-prompt-only",
  "ui-ux-pro-max",
  "taste-eligible-scope-only",
  "omd-autopilot-v2",
]);
const OMD_RUNTIME_PATHS = Object.freeze([
  "skills/omd-autopilot",
  "scripts/adopt-design-md-core.cjs",
  "scripts/autopilot-council-plan.cjs",
  "scripts/autopilot-council-reconcile.cjs",
  "scripts/autopilot-mission.cjs",
  "scripts/activate-autopilot-design-system.cjs",
  "scripts/compile-design-md-core.cjs",
  "scripts/context.cjs",
  "scripts/ctx-prime.cjs",
  "scripts/design-council-handoff.cjs",
  "scripts/design-council-prime.cjs",
  "scripts/design-council-reconcile.cjs",
  "scripts/design-harness-context-plan.cjs",
  "scripts/design-md-core-conformance.cjs",
  "scripts/design-md-core-schema.cjs",
  "scripts/design-md-core.cjs",
  "scripts/design-system-plan.cjs",
  "scripts/migrate-design-md-core.cjs",
  "scripts/prepare-design-md-core-review.cjs",
  "scripts/rebind-design-md-core-migration.cjs",
  "scripts/validate-project-design-system.cjs",
  "spec/schema",
]);
export const omdRuntimePaths = OMD_RUNTIME_PATHS;

function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function git(root, ...args) {
  return execFileSync("git", ["-C", root, ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

function assertRegular(path, label) {
  invariant(existsSync(path), `${label} missing: ${path}`);
  const info = lstatSync(path);
  invariant(info.isFile() && !info.isSymbolicLink(), `${label} must be a regular non-symlink file: ${path}`);
}

function assertDirectory(path, label) {
  invariant(existsSync(path), `${label} missing: ${path}`);
  const info = lstatSync(path);
  invariant(info.isDirectory() && !info.isSymbolicLink(), `${label} must be a non-symlink directory: ${path}`);
}

function resolveRepoRelative(path, label) {
  invariant(path && !isAbsolute(path) && !String(path).split(/[\\/]/).includes(".."), `${label} must be repository-relative`);
  return assertInside(repoRoot, resolve(repoRoot, path));
}

function writeJsonExclusive(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, { encoding: "utf8", flag: "wx" });
}

function writeExclusive(path, value) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, value, { flag: "wx" });
}

function treeSummary(root) {
  const manifest = treeManifest(root);
  return {
    files: manifest.files.length,
    bytes: manifest.files.reduce((sum, item) => sum + item.bytes, 0),
    sha256: manifest.sha256,
  };
}

function committedTreeSummary(sourceCommit, path) {
  const source = resolveRepoRelative(path, "evaluator fixture authority");
  const current = treeSummary(source);
  const committedFiles = git(repoRoot, "ls-tree", "-r", sourceCommit, "--", path)
    .split("\n").filter(Boolean).map((line) => line.slice(line.indexOf("\t") + 1));
  invariant(committedFiles.length === current.files, `evaluator fixture committed file count drift: ${path}`);
  for (const file of committedFiles) {
    const relativePath = relative(path, file).split(sep).join("/");
    invariant(relativePath && !relativePath.startsWith(".."), `evaluator fixture path escape: ${file}`);
    const currentBytes = readFileSync(resolveRepoRelative(file, "evaluator fixture file"));
    const committedBytes = execFileSync("git", ["-C", repoRoot, "show", `${sourceCommit}:${file}`], { encoding: "buffer" });
    invariant(Buffer.compare(currentBytes, committedBytes) === 0, `evaluator fixture differs from commit: ${file}`);
  }
  return { path, ...current };
}

function assertNoExecutionSecrets(workspace) {
  const forbiddenNames = new Set(["DESIGN.md", ".omd", "oracle", "oracle-a", "oracle-b", "mutant", "mutants", "hidden-examples"]);
  const manifest = treeManifest(workspace);
  for (const item of manifest.files) {
    for (const segment of item.path.split("/")) {
      invariant(!forbiddenNames.has(segment), `forbidden prepared input: ${item.path}`);
    }
  }
}

export function assertExactCommittedBytes(path, current, committed) {
  invariant(Buffer.compare(Buffer.from(current), Buffer.from(committed)) === 0, `source differs from commit: ${path}`);
  return { path, bytes: Buffer.byteLength(current), sha256: sha256(current) };
}

export function validateMaterializedOutput(root, expectedSourceCommit = null) {
  const absolute = resolve(root);
  assertDirectory(absolute, "materialized output");
  const statusPath = join(absolute, "STATUS.json");
  const manifestPath = join(absolute, "MATERIALIZATION.json");
  assertRegular(statusPath, "materialization status");
  assertRegular(manifestPath, "materialization manifest");
  const status = readJson(statusPath);
  const manifest = readJson(manifestPath);
  invariant(status.status === "provider-zero-materialized-admission-required" && status.provider_execution_allowed === false,
    "materialization status drift");
  invariant(manifest.kind === "omd-luna-max-provider-zero-materialization", "materialization identity drift");
  if (expectedSourceCommit) invariant(manifest.source_commit === expectedSourceCommit, "materialization source commit drift");
  invariant(manifest.prepared_cells === 48 && manifest.ineligible_unexecuted_slots === 6 && manifest.cells.length === 48,
    "materialization 48/6 count drift");
  invariant(manifest.provider_calls === 0 && manifest.model_calls === 0 && manifest.browser_calls === 0,
    "provider-zero call accounting drift");
  invariant(manifest.execution?.provider_execution_allowed === false && manifest.execution.model === "gpt-5.6-luna"
    && manifest.execution.effort === "max", "materialization runtime selector drift");
  const arms = new Set(manifest.cells.map((cell) => cell.variant_id));
  invariant(arms.size === 6 && [...EXPECTED_ARMS].every((arm) => arms.has(arm)), "representative six-arm coverage drift");
  const cellsRoot = join(absolute, "prepared-cells");
  const actualTree = treeSummary(cellsRoot);
  invariant(canonical(actualTree) === canonical(manifest.prepared_cells_tree), "prepared matrix tree drift");
  for (const cell of manifest.cells) {
    const workspace = assertInside(cellsRoot, resolve(cellsRoot, cell.id));
    assertDirectory(workspace, `prepared cell ${cell.id}`);
    assertNoExecutionSecrets(workspace);
    invariant(canonical(treeSummary(workspace)) === canonical(cell.workspace_tree), `prepared cell tree drift: ${cell.id}`);
    const metadata = readJson(join(workspace, ".benchmark/cell.json"));
    const prompt = readFileSync(join(workspace, ".benchmark/prompt.txt"));
    const invocation = readFileSync(join(workspace, ".benchmark/invocation-prompt.txt"));
    invariant(metadata.task.prompt_sha256 === sha256(prompt) && metadata.task.prompt_bytes === prompt.length,
      `neutral task bytes drift: ${cell.id}`);
    invariant(metadata.invocation_prompt_sha256 === sha256(invocation), `invocation prompt drift: ${cell.id}`);
    invariant(metadata.runtime.model === "gpt-5.6-luna" && metadata.runtime.effort === "max"
      && metadata.runtime.retry_budget === 0 && metadata.runtime.fallback_budget === 0,
    `cell runtime drift: ${cell.id}`);
  }
  const ineligible = readJson(join(absolute, "INELIGIBLE-SLOTS.json"));
  invariant(ineligible.count === 6 && ineligible.slots.length === 6
    && ineligible.slots.every((cell) => cell.workspace_created === false), "ineligible slot retention drift");
  return { manifest, status };
}

function sameTree(actualRoot, expected) {
  const actual = treeSummary(actualRoot);
  invariant(actual.files === expected.files && actual.bytes === expected.bytes && actual.sha256 === expected.sha256,
    `copied tree readback mismatch: ${actualRoot}`);
  return actual;
}

function renderFrontmatter(frontmatter) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(frontmatter ?? {})) {
    const serialized = /[:"\n]/.test(value) ? `"${value.replace(/"/g, '\\"')}"` : value;
    lines.push(`${key}: ${serialized}`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

function materializeUiUx(checkout, source, skillsRoot) {
  const assets = assertInside(checkout, resolve(checkout, source.source_path));
  const platform = readJson(resolve(assets, source.install.template_config));
  invariant(platform.platform === "codex" && platform.installType === "full", "UI UX official Codex projection drift");
  invariant(`${platform.folderStructure.root}/${platform.folderStructure.skillPath}` === `${source.install.root}/${source.install.directory}`,
    "UI UX official install path drift");
  const template = readFileSync(resolve(assets, "templates/base/skill-content.md"), "utf8");
  const quick = platform.sections?.quickReference
    ? readFileSync(resolve(assets, "templates/base/quick-reference.md"), "utf8")
    : "";
  const rendered = renderFrontmatter(platform.frontmatter) + template
    .replace(/\{\{TITLE\}\}/g, platform.title)
    .replace(/\{\{DESCRIPTION\}\}/g, platform.description)
    .replace(/\{\{SCRIPT_PATH\}\}/g, platform.scriptPath)
    .replace(/\{\{SKILL_OR_WORKFLOW\}\}/g, platform.skillOrWorkflow)
    .replace(/\{\{QUICK_REFERENCE\}\}/g, quick ? `\n${quick}` : "");
  const primary = join(skillsRoot, source.install.directory);
  mkdirSync(primary, { recursive: false });
  writeExclusive(join(primary, "SKILL.md"), rendered);
  copyReviewedTree(resolve(assets, "data"), join(primary, "data"));
  copyReviewedTree(resolve(assets, "scripts"), join(primary, "scripts"));
  for (const bundled of source.install.bundled_skills) {
    copyReviewedTree(resolve(assets, "skills", bundled), join(skillsRoot, bundled));
  }
  copyFileSync(resolve(checkout, source.license.evidence_path), join(primary, "LICENSE"));
  return sameTree(skillsRoot, source.install_projection);
}

function installCompetitor(source, checkoutRoot, workspace) {
  const checkout = assertInside(checkoutRoot, resolve(checkoutRoot, source.checkout_dir));
  assertDirectory(checkout, `${source.id} checkout`);
  const sourceRoot = assertInside(checkout, resolve(checkout, source.source_path));
  assertDirectory(sourceRoot, `${source.id} source`);
  const sourceReadback = sameTree(sourceRoot, source.source_tree);
  const skillsRoot = join(workspace, source.install.root);
  mkdirSync(skillsRoot, { recursive: true });
  let installed;
  if (source.id === "ui-ux-pro-max-2.14.2-2.0") {
    installed = materializeUiUx(checkout, source, skillsRoot);
  } else {
    const target = join(skillsRoot, source.install.directory);
    copyReviewedTree(sourceRoot, target);
    const copiedSource = sameTree(target, source.source_tree);
    if (!source.license.inside_source_boundary) {
      const license = resolve(checkout, source.license.evidence_path);
      assertRegular(license, `${source.id} license`);
      invariant(sha256(readFileSync(license)) === source.license.evidence_sha256, `${source.id} license drift`);
      copyFileSync(license, join(target, "LICENSE"));
    }
    installed = treeSummary(target);
    installed.copied_source_sha256 = copiedSource.sha256;
  }
  return {
    kind: "official-competitor",
    source_id: source.id,
    variant_id: source.benchmark_variant_id,
    commit: source.source_ref.resolved_commit,
    source_tree: sourceReadback,
    install_tree: installed,
    activation_prefix: source.activation.exact_prefix,
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
  };
}

function installOmd(sourceCommit, workspace) {
  const installedPaths = [];
  for (const path of OMD_RUNTIME_PATHS) {
    const source = resolveRepoRelative(path, "OmD runtime source");
    const target = path === "skills/omd-autopilot"
      ? join(workspace, ".agents/skills/omd-autopilot")
      : join(workspace, path);
    const info = lstatSync(source);
    if (info.isDirectory() && !info.isSymbolicLink()) {
      const expected = treeSummary(source);
      copyReviewedTree(source, target);
      installedPaths.push({ source_path: path, install_path: relative(workspace, target).split(sep).join("/"), ...sameTree(target, expected) });
    } else {
      assertRegular(source, path);
      mkdirSync(dirname(target), { recursive: true });
      copyFileSync(source, target);
      const bytes = readFileSync(source);
      invariant(sha256(readFileSync(target)) === sha256(bytes), `OmD runtime copy drift: ${path}`);
      installedPaths.push({ source_path: path, install_path: relative(workspace, target).split(sep).join("/"), files: 1, bytes: bytes.length, sha256: sha256(bytes) });
    }
  }
  return {
    kind: "current-committed-omd-autopilot-runtime",
    variant_id: "omd-autopilot-v2",
    source_commit: sourceCommit,
    paths: installedPaths,
    closure_sha256: sha256(canonical(installedPaths)),
    activation_prefix: "Use the installed $omd-autopilot skill for this task.",
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
  };
}

export function validateOmdRuntimeClosure(paths = OMD_RUNTIME_PATHS) {
  const set = new Set(paths);
  invariant(set.has("skills/omd-autopilot"), "OmD runtime closure must include the canonical complete skill tree");
  invariant(set.has("spec/schema"), "OmD runtime closure must include Core v2 schemas");
  const scriptPaths = paths.filter((path) => path.startsWith("scripts/") && path.endsWith(".cjs"));
  for (const path of scriptPaths) {
    const source = readFileSync(resolveRepoRelative(path, "OmD runtime closure script"), "utf8");
    for (const match of source.matchAll(/require\(['"]\.\/([^'"]+\.cjs)['"]\)/g)) {
      const required = `scripts/${match[1]}`;
      invariant(set.has(required), `OmD runtime closure missing local dependency: ${path} -> ${required}`);
    }
  }
  const skill = readFileSync(resolveRepoRelative("skills/omd-autopilot/SKILL.md", "OmD skill"), "utf8");
  for (const name of [
    "autopilot-mission.cjs", "autopilot-council-plan.cjs", "autopilot-council-reconcile.cjs",
    "design-council-prime.cjs", "design-system-plan.cjs", "prepare-design-md-core-review.cjs",
    "compile-design-md-core.cjs", "validate-project-design-system.cjs",
  ]) {
    invariant(skill.includes(name) && set.has(`scripts/${name}`), `OmD runtime closure missing skill-declared helper: ${name}`);
  }
  return true;
}

function validateLockedInputs({ lockedRoot, config, neutralLock, competitorLock, executionPlan, matrix }) {
  invariant(matrix?.schema_version === "0.1" && matrix.kind === "omd-luna-max-wow-preview", "locked matrix identity drift");
  invariant(matrix.provider_execution_allowed === false, "locked matrix must keep provider execution disabled");
  invariant(matrix.status === "locked-provider-zero-execution-materializer-ready-admission-required", "locked matrix materializer state drift");
  invariant(executionPlan?.schema_version === "0.1" && executionPlan.experiment_id === matrix.experiment_id, "execution plan identity drift");
  validateRunMatrixPlan(executionPlan);
  invariant(sha256(readFileSync(join(lockedRoot, "RUN-MATRIX.execution.json"))) === matrix.execution_adapter.sha256,
    "execution plan hash drift");
  validateConfig(config);
  validateNeutralTaskPacketLock(neutralLock, config);
  validateCompetitorLock(competitorLock, config);
  const expected = buildCells(config);
  invariant(canonical(matrix.cells) === canonical(expected), "locked cell set drift");
  const scheduledIds = expected.filter((cell) => cell.eligible_for_execution_and_scoring).map((cell) => cell.id);
  invariant(canonical(executionPlan.cells.map((cell) => cell.id)) === canonical(scheduledIds), "execution plan scheduled cells drift");
  invariant(executionPlan.cells.length === 48 && expected.filter((cell) => !cell.eligible_for_execution_and_scoring).length === 6,
    "48/6 execution boundary drift");
}

export function materializeCommand(args) {
  const sourceCommit = String(args.get("source-commit") ?? git(repoRoot, "rev-parse", "HEAD"));
  invariant(COMMIT.test(sourceCommit) && git(repoRoot, "rev-parse", "HEAD") === sourceCommit, "source commit must equal current HEAD");
  invariant(git(repoRoot, "status", "--porcelain=v1", "--untracked-files=all") === "", "current source worktree must be clean");

  const lockedRoot = resolve(String(args.get("locked-root") ?? ""));
  const checkoutRoot = resolve(String(args.get("checkout-root") ?? ""));
  const out = resolve(String(args.get("out") ?? ""));
  assertDirectory(lockedRoot, "locked root");
  assertDirectory(checkoutRoot, "official checkout root");
  invariant(!existsSync(out), "materialization output must not already exist");
  invariant(out !== repoRoot && !out.startsWith(`${repoRoot}${sep}`), "materialization output must be outside repository");
  invariant(out !== lockedRoot && !out.startsWith(`${lockedRoot}${sep}`), "materialization output must not overlap locked root");
  invariant(realpathSync(lockedRoot) === lockedRoot, "locked root must use its canonical real path without symlink aliases");
  invariant(realpathSync(checkoutRoot) === checkoutRoot, "checkout root must use its canonical real path without symlink aliases");
  invariant(realpathSync(dirname(out)) === dirname(out), "output parent must use its canonical real path without symlink aliases");
  treeManifest(lockedRoot);

  const configPath = resolveRepoRelative(String(args.get("config") ?? defaultConfigPath), "config");
  const neutralPath = resolveRepoRelative(String(args.get("neutral-input-lock") ?? defaultNeutralInputLockPath), "neutral input lock");
  const competitorPath = resolveRepoRelative(String(args.get("competitor-lock") ?? "benchmarks/ui-resolve-bench/config/omd-2.0-competitor-source-lock-v0.1.json"), "competitor lock");
  const config = readJson(configPath);
  const neutralLock = readJson(neutralPath);
  const competitorLock = readJson(competitorPath);
  const matrix = readJson(join(lockedRoot, "RUN-MATRIX.locked.json"));
  const executionPlan = readJson(join(lockedRoot, "RUN-MATRIX.execution.json"));
  validateLockedInputs({ lockedRoot, config, neutralLock, competitorLock, executionPlan, matrix });
  invariant(matrix.source_commit === sourceCommit, "locked matrix source commit drift");
  invariant(matrix.prerequisite_receipts.neutral_task_packet_lock.sha256 === sha256(readFileSync(neutralPath)), "neutral input lock hash drift");
  invariant(matrix.prerequisite_receipts.competitor_lock.sha256 === sha256(readFileSync(competitorPath)), "competitor lock hash drift");

  const taskSet = readJson(resolveRepoRelative(config.authorities.task_set.path, "task set"));
  validateTaskPrompts(config, taskSet);
  const tasks = new Map(taskSet.tasks.map((task) => [task.id, task]));
  const blankPath = resolveRepoRelative(config.authorities.blank_starter.path, "blank starter");
  assertRegular(blankPath, "blank starter");
  const blankBytes = readFileSync(blankPath);
  invariant(sha256(blankBytes) === config.authorities.blank_starter.sha256, "blank starter drift");
  const competitorAudit = auditCheckedOutSources(competitorLock, checkoutRoot);
  invariant(competitorAudit.status === "pass", "official checkout audit failed");
  const sourcesByVariant = new Map(competitorLock.sources.map((source) => [source.benchmark_variant_id, source]));
  validateOmdRuntimeClosure();

  mkdirSync(out, { recursive: false });
  const cellsRoot = join(out, "prepared-cells");
  mkdirSync(cellsRoot, { recursive: false });
  const cellReceipts = [];
  for (const cell of executionPlan.cells) {
    invariant(EXPECTED_ARMS.has(cell.variant_id), `unexpected arm: ${cell.variant_id}`);
    const lockedCell = matrix.cells.find((candidate) => candidate.id === cell.id);
    invariant(lockedCell?.eligible_for_execution_and_scoring === true, `ineligible cell cannot be materialized: ${cell.id}`);
    invariant(cell.runtime === "codex" && cell.model_id === "gpt-5.6-luna" && cell.effort === "max", `runtime drift: ${cell.id}`);
    const task = tasks.get(cell.task_id);
    invariant(task, `task missing: ${cell.task_id}`);
    const workspace = join(cellsRoot, cell.id);
    mkdirSync(workspace, { recursive: false });
    copyFileSync(blankPath, join(workspace, "index.html"));
    invariant(sha256(readFileSync(join(workspace, "index.html"))) === sha256(blankBytes), `starter copy drift: ${cell.id}`);

    let armReceipt = { kind: "model-only", variant_id: cell.variant_id, activation_prefix: null, provider_calls: 0, model_calls: 0, browser_calls: 0 };
    if (sourcesByVariant.has(cell.variant_id)) armReceipt = installCompetitor(sourcesByVariant.get(cell.variant_id), checkoutRoot, workspace);
    else if (cell.variant_id === "omd-autopilot-v2") armReceipt = installOmd(sourceCommit, workspace);

    if (cell.variant_id === "omd-autopilot-v2") armReceipt = { ...armReceipt, activation_prefix: `${armReceipt.activation_prefix}\n\n${OMD_EXTERNAL_STAGING_ACTIVATION}`, external_staging_activation_sha256: sha256(OMD_EXTERNAL_STAGING_ACTIVATION) };
    const taskAndBoundary = `${task.prompt}\n\n${WORKSPACE_RUNTIME_BOUNDARY}`;
    const invocationPrompt = armReceipt.activation_prefix ? `${armReceipt.activation_prefix}\n\n${taskAndBoundary}` : taskAndBoundary;
    writeExclusive(join(workspace, ".benchmark/prompt.txt"), task.prompt);
    writeExclusive(join(workspace, ".benchmark/invocation-prompt.txt"), invocationPrompt);
    const cellMetadata = {
      schema_version: "0.1",
      kind: "omd-luna-max-prepared-cell",
      experiment_id: matrix.experiment_id,
      cell_id: cell.id,
      order: lockedCell.order,
      task: {
        id: task.id,
        prompt_bytes: Buffer.byteLength(task.prompt),
        prompt_sha256: sha256(task.prompt),
        same_source_facts_sha256: neutralLock.tasks.find((item) => item.task_id === task.id).source_facts_sha256,
      },
      arm: armReceipt,
      activation_prefix: armReceipt.activation_prefix,
      activation_prefix_sha256: armReceipt.activation_prefix === null ? null : sha256(armReceipt.activation_prefix),
      workspace_runtime_boundary_sha256: sha256(WORKSPACE_RUNTIME_BOUNDARY),
      invocation_prompt_sha256: sha256(invocationPrompt),
      runtime: { provider: "codex", model: "gpt-5.6-luna", effort: "max", retry_budget: 0, replacement_budget: 0, fallback_budget: 0 },
      evaluation: {
        eligible_for_execution_and_scoring: true,
        external_browser_owned: true,
        hidden_oracle_available_to_cell: false,
        hidden_mutants_available_to_cell: false,
        score_receipt_preexisting: false,
      },
      provider_execution_allowed: false,
      preparation_calls: { provider_calls: 0, model_calls: 0, browser_calls: 0 },
    };
    writeJsonExclusive(join(workspace, ".benchmark/cell.json"), cellMetadata);
    assertNoExecutionSecrets(workspace);
    const preparedTree = treeSummary(workspace);
    const manifest = {
      schema_version: "0.1",
      cell_id: cell.id,
      source_commit: sourceCommit,
      prepared_tree_before_manifest: preparedTree,
      task_prompt_sha256: cellMetadata.task.prompt_sha256,
      invocation_prompt_sha256: sha256(invocationPrompt),
      arm_closure_sha256: sha256(canonical(armReceipt)),
      provider_execution_allowed: false,
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 0,
    };
    writeJsonExclusive(join(workspace, ".benchmark/manifest.json"), manifest);
    const finalTree = treeSummary(workspace);
    cellReceipts.push({ id: cell.id, task_id: cell.task_id, variant_id: cell.variant_id, trial_index: cell.trial_index, workspace_tree: finalTree });
  }

  const ineligible = matrix.cells.filter((cell) => !cell.eligible_for_execution_and_scoring).map((cell) => ({
    ...cell,
    status: "retained-preregistered-ineligible-unexecuted",
    workspace_created: false,
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
  }));
  invariant(ineligible.length === 6 && ineligible.every((cell) => cell.variant_id === "taste-eligible-scope-only"), "ineligible slot drift");
  writeJsonExclusive(join(out, "INELIGIBLE-SLOTS.json"), { schema_version: "0.1", count: 6, slots: ineligible });
  writeJsonExclusive(join(out, "COMPETITOR-CHECKOUT-AUDIT.json"), competitorAudit);
  const preparedCellsTree = treeSummary(cellsRoot);
  const evaluatorFixtureAuthority = config.tasks.flatMap((task) => ["oracle-a", "oracle-b"].map((oracle) =>
    committedTreeSummary(sourceCommit, `benchmarks/ui-resolve-bench/fixtures/autopilot-greenfield/${task.task_id}/${oracle}`)));
  const manifest = {
    schema_version: "0.1",
    kind: "omd-luna-max-provider-zero-materialization",
    experiment_id: matrix.experiment_id,
    source_commit: sourceCommit,
    locked_root_sha256: treeManifest(lockedRoot).sha256,
    prepared_cells: 48,
    ineligible_unexecuted_slots: 6,
    prepared_cells_tree: preparedCellsTree,
    cell_manifest_sha256: sha256(canonical(cellReceipts)),
    evaluator_authority: {
      source_only_not_copied_to_execution_root: true,
      locked_task_set: config.authorities.task_set,
      selected_task_evaluation_metadata: config.tasks.map((locked) => {
        const task = tasks.get(locked.task_id);
        return {
          task_id: task.id,
          family: task.family,
          primary_journey: task.primary_journey,
          protected_unknowns: task.protected_unknowns,
          required_states: task.required_states,
          targeted_mutants: task.targeted_mutants,
        };
      }),
      adapters: config.authorities.evaluator_adapters,
      evaluator: config.authorities.evaluator,
      task_set_validator: config.authorities.task_set_validator,
      adapter_validator: config.authorities.adapter_validator,
      selected_oracle_fixture_trees: evaluatorFixtureAuthority,
      injection_policy: "Evaluator/oracle bytes remain outside every prepared cell and may be read only by the post-run locked evaluator.",
      evaluation_runtime_receipt: {
        status: "unresolved-required-before-scoring",
        browser_executable: null,
        browser_version: null,
        font_environment_sha256: null,
      },
    },
    cells: cellReceipts,
    execution: {
      runtime: "codex",
      model: "gpt-5.6-luna",
      effort: "max",
      retry_budget: 0,
      replacement_budget: 0,
      fallback_budget: 0,
      provider_execution_allowed: false,
    },
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
  };
  manifest.manifest_sha256 = sha256(canonical(manifest));
  writeJsonExclusive(join(out, "MATERIALIZATION.json"), manifest);
  const status = {
    schema_version: "0.1",
    experiment_id: matrix.experiment_id,
    status: "provider-zero-materialized-admission-required",
    prepared_cells: 48,
    ineligible_unexecuted_slots: 6,
    prepared_cells_tree_sha256: preparedCellsTree.sha256,
    materialization_manifest_sha256: sha256(readFileSync(join(out, "MATERIALIZATION.json"))),
    provider_execution_allowed: false,
    next: "Sol/xhigh must admit schema, runtime attribution, named-browser, source and materialization evidence before the first Luna/max cell.",
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
  };
  writeJsonExclusive(join(out, "STATUS.json"), status);
  validateMaterializedOutput(out, sourceCommit);
  return { out, manifest, status };
}

export function main(argv = process.argv.slice(2)) {
  const [command, ...rest] = argv;
  if (command !== "materialize") {
    throw new Error("usage: materialize-luna-max-wow-preview.mjs materialize --locked-root <provider-zero-locked-root> --checkout-root <official-checkouts> --out <fresh-external-root> --source-commit <HEAD>");
  }
  const result = materializeCommand(parseArgs(rest));
  process.stdout.write(`${JSON.stringify({
    out: result.out,
    prepared_cells: result.status.prepared_cells,
    ineligible_unexecuted_slots: result.status.ineligible_unexecuted_slots,
    tree_sha256: result.status.prepared_cells_tree_sha256,
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
  })}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}

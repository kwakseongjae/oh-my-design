#!/usr/bin/env node
/**
 * materialize-grok46-wow-preview.mjs — Provider-zero materializer for the
 * grok-4.6 wow-preview benchmark lane (WP2/WP4 of omd-grok46-restart-v0.1).
 *
 * Structural equivalent of materialize-luna-max-wow-preview.mjs, adapted for:
 *   Model:    grok-4.6
 *   Provider: grok-build-cli
 *   Effort:   high
 *   Experiment: omd-grok46-wow-preview-2.0.0-v0.2
 *
 * Provider-zero: zero provider_calls, zero model_calls, zero browser_calls.
 * The script creates prepared-cells directories and writes MATERIALIZATION.json
 * and STATUS.json without spawning any model.
 *
 * Usage:
 *   materialize-grok46-wow-preview.mjs materialize \
 *     --locked-root <provider-zero-locked-root> \
 *     --out <fresh-external-root> \
 *     --source-commit <exact-HEAD>
 */

import { execFileSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import {
  assertInside,
  parseArgs,
  readJson,
  sha256,
  treeManifest,
} from "./_lib.mjs";

const here = dirname(fileURLToPath(import.meta.url));
export const repoRoot = resolve(here, "../../..");
export const materializerPath = relative(repoRoot, fileURLToPath(import.meta.url)).split(sep).join("/");

// ─────────────────────────────────────────────────────────────────────────────
// Seed-locked constants — must not be changed without a new preregistration
// ─────────────────────────────────────────────────────────────────────────────
const MODEL = "grok-4.6";
const EFFORT = "high";
const PROVIDER = "grok-build-cli";
const RUNTIME_TARGET = "grok";
const EXPERIMENT_ID = "omd-grok46-wow-preview-2.0.0-v0.2";
const MATRIX_KIND = "omd-grok46-wow-preview";
const MATERIALIZATION_KIND = "omd-grok46-provider-zero-materialization";
const CELL_KIND = "omd-grok46-prepared-cell";
const CELLS_SCHEDULED = 48;
const CELLS_INELIGIBLE = 6;
const MATRIX_STATUS = "locked-provider-zero-execution-materializer-ready-admission-required";
const MATERIALIZATION_STATUS = "provider-zero-materialized-admission-required";

const EXPECTED_ARMS = new Set([
  "model-only",
  "anthropic-frontend-design",
  "impeccable-prompt-only",
  "ui-ux-pro-max",
  "taste-eligible-scope-only",
  "omd-autopilot-v2",
]);

/**
 * Workspace runtime boundary injected at the end of every invocation prompt.
 * Byte-identical to the Luna lane boundary (same evaluator contract).
 */
export const WORKSPACE_RUNTIME_BOUNDARY =
  "Benchmark runtime boundary: keep every generated file and temporary validation artifact inside the current workspace (use .benchmark/tmp when needed), except an exact cell-local staging path explicitly disclosed by the controller for an arm whose native package adopter requires source/destination separation. Do not read or write any other external path, including /tmp, and do not launch or control browsers or use network access; the external evaluator owns browser checks.";

const SHA = /^[a-f0-9]{64}$/;
const COMMIT = /^[a-f0-9]{40}$/;

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

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
  invariant(
    path && !isAbsolute(path) && !String(path).split(/[\\/]/).includes(".."),
    `${label} must be repository-relative`,
  );
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

function assertNoExecutionSecrets(workspace) {
  const forbiddenNames = new Set([
    "DESIGN.md", ".omd", "oracle", "oracle-a", "oracle-b",
    "mutant", "mutants", "hidden-examples",
  ]);
  const manifest = treeManifest(workspace);
  for (const item of manifest.files) {
    for (const segment of item.path.split("/")) {
      invariant(!forbiddenNames.has(segment), `forbidden prepared input: ${item.path}`);
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Validate materialized output (used for self-check and external audit)
// ─────────────────────────────────────────────────────────────────────────────

export function validateMaterializedOutput(root, expectedSourceCommit = null) {
  const absolute = resolve(root);
  assertDirectory(absolute, "materialized output");
  const statusPath = join(absolute, "STATUS.json");
  const manifestPath = join(absolute, "MATERIALIZATION.json");
  assertRegular(statusPath, "materialization status");
  assertRegular(manifestPath, "materialization manifest");
  const status = readJson(statusPath);
  const manifest = readJson(manifestPath);
  invariant(
    status.status === MATERIALIZATION_STATUS && status.provider_execution_allowed === false,
    "materialization status drift",
  );
  invariant(manifest.kind === MATERIALIZATION_KIND, "materialization identity drift");
  if (expectedSourceCommit) {
    invariant(manifest.source_commit === expectedSourceCommit, "materialization source commit drift");
  }
  invariant(
    manifest.prepared_cells === CELLS_SCHEDULED &&
    manifest.ineligible_unexecuted_slots === CELLS_INELIGIBLE &&
    manifest.cells.length === CELLS_SCHEDULED,
    `materialization ${CELLS_SCHEDULED}/${CELLS_INELIGIBLE} count drift`,
  );
  invariant(
    manifest.provider_calls === 0 && manifest.model_calls === 0,
    "provider-zero call accounting drift",
  );
  invariant(
    manifest.execution?.provider_execution_allowed === false &&
    manifest.execution.model === MODEL &&
    manifest.execution.effort === EFFORT,
    "materialization runtime selector drift",
  );
  const cellsRoot = join(absolute, "prepared-cells");
  const actualTree = treeSummary(cellsRoot);
  invariant(
    canonical(actualTree) === canonical(manifest.prepared_cells_tree),
    "prepared matrix tree drift",
  );
  for (const cell of manifest.cells) {
    const cellWorkspace = assertInside(cellsRoot, resolve(cellsRoot, cell.id));
    assertDirectory(cellWorkspace, `prepared cell ${cell.id}`);
    assertNoExecutionSecrets(cellWorkspace);
    invariant(
      canonical(treeSummary(cellWorkspace)) === canonical(cell.workspace_tree),
      `prepared cell tree drift: ${cell.id}`,
    );
  }
  const ineligible = readJson(join(absolute, "INELIGIBLE-SLOTS.json"));
  invariant(
    ineligible.count === CELLS_INELIGIBLE &&
    ineligible.slots.length === CELLS_INELIGIBLE &&
    ineligible.slots.every((cell) => cell.workspace_created === false),
    "ineligible slot retention drift",
  );
  return { manifest, status };
}

// ─────────────────────────────────────────────────────────────────────────────
// materializeCommand — main entry point
// ─────────────────────────────────────────────────────────────────────────────

export function materializeCommand(args) {
  const sourceCommit = String(args.get("source-commit") ?? git(repoRoot, "rev-parse", "HEAD"));
  invariant(
    COMMIT.test(sourceCommit) && git(repoRoot, "rev-parse", "HEAD") === sourceCommit,
    "source commit must equal current HEAD",
  );
  invariant(
    git(repoRoot, "status", "--porcelain=v1", "--untracked-files=all") === "",
    "current source worktree must be clean",
  );

  const lockedRoot = resolve(String(args.get("locked-root") ?? ""));
  const out = resolve(String(args.get("out") ?? ""));
  assertDirectory(lockedRoot, "locked root");
  invariant(!existsSync(out), "materialization output must not already exist");
  invariant(
    out !== repoRoot && !out.startsWith(`${repoRoot}${sep}`),
    "materialization output must be outside repository",
  );
  invariant(
    realpathSync(lockedRoot) === lockedRoot,
    "locked root must use its canonical real path without symlink aliases",
  );
  invariant(
    realpathSync(dirname(out)) === dirname(out),
    "output parent must use its canonical real path without symlink aliases",
  );

  // Read locked matrix
  const matrix = readJson(join(lockedRoot, "RUN-MATRIX.locked.json"));
  invariant(matrix.kind === MATRIX_KIND, "matrix identity drift: wrong kind");
  invariant(matrix.experiment_id === EXPERIMENT_ID, "matrix identity drift: wrong experiment_id");
  invariant(matrix.status === MATRIX_STATUS, "matrix state drift: not materializer-ready");
  invariant(matrix.provider_execution_allowed === false, "locked matrix must keep provider execution disabled");
  invariant(matrix.source_commit === sourceCommit, "locked matrix source commit drift");
  invariant(
    matrix.runtime?.provider === PROVIDER && matrix.runtime.model === MODEL && matrix.runtime.effort === EFFORT,
    "locked matrix runtime drift",
  );

  // Resolve blank starter
  const blankStarterRelPath =
    matrix.config_authority?.blank_starter_path ??
    "benchmarks/ui-resolve-bench/fixtures/autopilot-greenfield/blank-shell/index.html";
  const blankPath = resolveRepoRelative(blankStarterRelPath, "blank starter");
  assertRegular(blankPath, "blank starter");
  const blankBytes = readFileSync(blankPath);
  const blankSha = sha256(blankBytes);

  // Separate eligible and ineligible cells
  const eligibleCells = matrix.cells.filter((cell) => cell.eligible_for_execution_and_scoring === true);
  const ineligibleCells = matrix.cells.filter((cell) => cell.eligible_for_execution_and_scoring !== true);
  invariant(
    eligibleCells.length === CELLS_SCHEDULED,
    `expected ${CELLS_SCHEDULED} eligible cells, got ${eligibleCells.length}`,
  );
  invariant(
    ineligibleCells.length === CELLS_INELIGIBLE,
    `expected ${CELLS_INELIGIBLE} ineligible cells, got ${ineligibleCells.length}`,
  );

  // Build task prompt lookup
  const taskPrompts = new Map((matrix.task_prompts ?? []).map((tp) => [tp.task_id, tp.prompt]));

  // ── Frozen competitor skill packs ──
  // Every non-model-only arm's activation prefix references an INSTALLED
  // skill; the pack must exist inside the isolated cell workspace
  // (.agents/skills/…, byte-identical to the Luna caf0 layout — Grok Build
  // CLI discovers workspace skills there, probed 2026-08-15). Epoch 3b39dee2
  // was frozen because this installation was missing.
  const fixtureRoot = resolveRepoRelative(
    "benchmarks/ui-resolve-bench/fixtures/competitor-skills-2.0",
    "competitor skill fixture",
  );
  const fixtureSums = new Map();
  for (const line of readFileSync(join(fixtureRoot, "SHA256SUMS"), "utf8").split("\n")) {
    const m = line.match(/^([0-9a-f]{64})\s+(?:\*|\s)?(.+)$/);
    if (m) fixtureSums.set(m[2].replace(/^\.\//, ""), m[1]);
  }
  invariant(fixtureSums.size > 0, "competitor skill fixture SHA256SUMS is empty");

  const listFixtureFiles = (root, current = root) => {
    const found = [];
    for (const name of readdirSync(current).sort()) {
      const path = join(current, name);
      const info = lstatSync(path);
      invariant(!info.isSymbolicLink(), `fixture symlink is forbidden: ${path}`);
      if (info.isDirectory()) found.push(...listFixtureFiles(root, path));
      else if (info.isFile()) found.push(relative(root, path).split(sep).join("/"));
    }
    return found;
  };

  const installSkillPack = (workspace, armId, cellId) => {
    const packRoot = join(fixtureRoot, armId);
    invariant(existsSync(packRoot), `skill pack missing for arm: ${armId}`);
    let files = 0;
    let bytes = 0;
    for (const rel of listFixtureFiles(packRoot)) {
      const sourcePath = join(packRoot, rel);
      const sourceBytes = readFileSync(sourcePath);
      const sumKey = `${armId}/${rel}`;
      invariant(
        fixtureSums.get(sumKey) === sha256(sourceBytes),
        `skill pack byte drift vs SHA256SUMS: ${sumKey}`,
      );
      const destination = join(workspace, rel);
      assertInside(workspace, destination, `skill pack install path (${cellId})`);
      mkdirSync(dirname(destination), { recursive: true });
      writeFileSync(destination, sourceBytes, { flag: "wx" });
      files += 1;
      bytes += sourceBytes.length;
    }
    invariant(files > 0, `skill pack for arm ${armId} contained no files`);
    return { arm: armId, files, bytes };
  };

  mkdirSync(out, { recursive: false });
  const cellsRoot = join(out, "prepared-cells");
  mkdirSync(cellsRoot, { recursive: false });
  const cellReceipts = [];

  for (const cell of eligibleCells) {
    invariant(EXPECTED_ARMS.has(cell.variant_id), `unexpected arm: ${cell.variant_id}`);
    invariant(
      cell.runtime === RUNTIME_TARGET && cell.model_id === MODEL,
      `runtime/model drift in cell: ${cell.id}`,
    );

    const workspace = join(cellsRoot, cell.id);
    mkdirSync(workspace, { recursive: false });

    // Install blank starter
    copyFileSync(blankPath, join(workspace, "index.html"));
    invariant(
      sha256(readFileSync(join(workspace, "index.html"))) === blankSha,
      `starter copy drift: ${cell.id}`,
    );

    // Install the arm's frozen skill pack (model-only gets none)
    const skillPack =
      cell.variant_id === "model-only"
        ? null
        : installSkillPack(workspace, cell.variant_id, cell.id);

    // Compose prompts — fail-close on any missing or drifted prompt. A silent
    // placeholder would burn a real provider cell on garbage input.
    const taskPrompt = taskPrompts.get(cell.task_id);
    invariant(
      typeof taskPrompt === "string" && taskPrompt.length > 0,
      `locked matrix carries no prompt for task: ${cell.task_id}`,
    );
    invariant(
      sha256(Buffer.from(taskPrompt, "utf8")) === cell.prompt_sha256,
      `task prompt byte drift vs preregistration: ${cell.task_id}`,
    );
    const taskAndBoundary = `${taskPrompt}\n\n${WORKSPACE_RUNTIME_BOUNDARY}`;
    const armActivation = (cell.variant_id === "model-only")
      ? null
      : (cell.activation_prefix ?? null);
    const invocationPrompt = armActivation
      ? `${armActivation}\n\n${taskAndBoundary}`
      : taskAndBoundary;

    // Write prompt artifacts
    writeExclusive(join(workspace, ".benchmark/PROMPT.md"), taskPrompt);
    writeExclusive(join(workspace, ".benchmark/invocation-prompt.txt"), invocationPrompt);

    // Write cell metadata
    const cellMetadata = {
      schema_version: "0.1",
      kind: CELL_KIND,
      experiment_id: EXPERIMENT_ID,
      cell_id: cell.id,
      order: cell.order ?? null,
      task: {
        id: cell.task_id,
        prompt_bytes: Buffer.byteLength(taskPrompt),
        prompt_sha256: sha256(taskPrompt),
      },
      arm: {
        kind: cell.variant_id,
        variant_id: cell.variant_id,
        activation_prefix: armActivation,
        skill_pack: skillPack,
        provider_calls: 0,
        model_calls: 0,
      },
      activation_prefix: armActivation,
      activation_prefix_sha256: armActivation === null ? null : sha256(armActivation),
      workspace_runtime_boundary_sha256: sha256(WORKSPACE_RUNTIME_BOUNDARY),
      invocation_prompt_sha256: sha256(invocationPrompt),
      runtime: {
        provider: PROVIDER,
        runtime_target: RUNTIME_TARGET,
        model: MODEL,
        effort: EFFORT,
        retry_budget: 0,
        replacement_budget: 0,
        fallback_budget: 0,
      },
      evaluation: {
        eligible_for_execution_and_scoring: true,
        hidden_oracle_available_to_cell: false,
        hidden_mutants_available_to_cell: false,
        score_receipt_preexisting: false,
      },
      provider_execution_allowed: false,
      preparation_calls: { provider_calls: 0, model_calls: 0 },
    };
    writeJsonExclusive(join(workspace, ".benchmark/cell.json"), cellMetadata);

    // Write run-grok.mjs-compatible manifest.json.
    // The initial product tree is recorded AFTER starter + skill-pack install
    // so the runner's product diff (and the usage-limit !productChanged guard)
    // measures the MODEL's writes, not the materializer's. A null initial tree
    // made product_changed always-true and silently disabled that guard.
    const initialProductTree = treeManifest(workspace, { ignore: [".benchmark"] });
    const cellManifest = {
      runtime_target: RUNTIME_TARGET,
      task: { id: cell.task_id },
      variant: { id: cell.variant_id },
      workspace: {
        product_initial_sha256: initialProductTree.sha256,
        product_initial_files: initialProductTree.files,
        product_ignore: [".benchmark"],
      },
    };
    writeJsonExclusive(join(workspace, ".benchmark/manifest.json"), cellManifest);

    assertNoExecutionSecrets(workspace);
    const finalTree = treeSummary(workspace);
    cellReceipts.push({
      id: cell.id,
      task_id: cell.task_id,
      variant_id: cell.variant_id,
      trial_index: cell.trial_index,
      workspace_tree: finalTree,
    });
  }

  // Write ineligible slots record
  const ineligibleRecord = ineligibleCells.map((cell) => ({
    ...cell,
    status: "retained-preregistered-ineligible-unexecuted",
    workspace_created: false,
    provider_calls: 0,
    model_calls: 0,
  }));
  writeJsonExclusive(join(out, "INELIGIBLE-SLOTS.json"), {
    schema_version: "0.1",
    count: CELLS_INELIGIBLE,
    slots: ineligibleRecord,
  });

  // Build MATERIALIZATION.json
  const preparedCellsTree = treeSummary(cellsRoot);
  const materialization = {
    schema_version: "0.1",
    kind: MATERIALIZATION_KIND,
    experiment_id: EXPERIMENT_ID,
    source_commit: sourceCommit,
    locked_root_sha256: treeManifest(lockedRoot).sha256,
    prepared_cells: CELLS_SCHEDULED,
    ineligible_unexecuted_slots: CELLS_INELIGIBLE,
    prepared_cells_tree: preparedCellsTree,
    cell_manifest_sha256: sha256(canonical(cellReceipts)),
    cells: cellReceipts,
    execution: {
      runtime: RUNTIME_TARGET,
      model: MODEL,
      effort: EFFORT,
      retry_budget: 0,
      replacement_budget: 0,
      fallback_budget: 0,
      provider_execution_allowed: false,
    },
    provider_calls: 0,
    model_calls: 0,
  };
  materialization.manifest_sha256 = sha256(canonical(materialization));
  writeJsonExclusive(join(out, "MATERIALIZATION.json"), materialization);

  // Build STATUS.json
  const materializationFileBytes = readFileSync(join(out, "MATERIALIZATION.json"));
  const status = {
    schema_version: "0.1",
    experiment_id: EXPERIMENT_ID,
    status: MATERIALIZATION_STATUS,
    prepared_cells: CELLS_SCHEDULED,
    ineligible_unexecuted_slots: CELLS_INELIGIBLE,
    prepared_cells_tree_sha256: preparedCellsTree.sha256,
    materialization_manifest_sha256: sha256(materializationFileBytes),
    provider_execution_allowed: false,
    next: "Grok-4.6 admission must validate score-gate, static runtime, runtime attribution, grok CLI identity, source and materialization evidence before the first grok-4.6 cell.",
    provider_calls: 0,
    model_calls: 0,
  };
  writeJsonExclusive(join(out, "STATUS.json"), status);

  return { out, materialization, status };
}

export function main(argv = process.argv.slice(2)) {
  const [command, ...rest] = argv;
  if (command !== "materialize") {
    throw new Error(
      "usage: materialize-grok46-wow-preview.mjs materialize " +
      "--locked-root <provider-zero-locked-root> " +
      "--out <fresh-external-root> " +
      "--source-commit <HEAD>",
    );
  }
  const result = materializeCommand(parseArgs(rest));
  process.stdout.write(
    `${JSON.stringify({
      out: result.out,
      prepared_cells: result.status.prepared_cells,
      ineligible_unexecuted_slots: result.status.ineligible_unexecuted_slots,
      tree_sha256: result.status.prepared_cells_tree_sha256,
      provider_calls: 0,
      model_calls: 0,
    })}\n`,
  );
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}

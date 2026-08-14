#!/usr/bin/env node
/**
 * lock-grok46-wow-preview.mjs — Provider-zero lock step for the grok-4.6
 * wow-preview benchmark lane (WP2 of omd-grok46-restart-v0.1).
 *
 * Expands the preregistration contract (omd-grok46-wow-preview-v0.2.json)
 * into the locked 54-cell RUN-MATRIX.locked.json that
 * materialize-grok46-wow-preview.mjs consumes, plus PREREGISTRATION.receipt.json
 * and STATUS.json, in a fresh locked root.
 *
 * Provider-zero: zero provider/model/browser/network calls.
 *
 * Authorities:
 *   - Task prompts come from the in-repo task set
 *     (autopilot-greenfield-tasks-v0.1.json) and every prompt is byte-verified
 *     against the preregistered prompt_sha256 in the matrix config.
 *   - Activation prefixes come from omd-grok46-activation-prefixes-v0.1.json,
 *     byte-identical to the Luna caf0e62d preregistration (fairness contract:
 *     the native activation prefix is the only arm-specific prompt delta).
 *   - source-commit must equal current HEAD of a clean worktree.
 *
 * Usage:
 *   lock-grok46-wow-preview.mjs lock --out <fresh-locked-root>
 *                               [--source-commit <exact-HEAD>]
 */

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");

// ─── Seed-locked constants (must match materialize-grok46-wow-preview.mjs) ───
const EXPERIMENT_ID = "omd-grok46-wow-preview-2.0.0-v0.2";
const MATRIX_KIND = "omd-grok46-wow-preview";
const MATRIX_STATUS =
  "locked-provider-zero-execution-materializer-ready-admission-required";
const MODEL = "grok-4.6";
const EFFORT = "high";
const PROVIDER = "grok-build-cli";
const RUNTIME_TARGET = "grok";
const MATRIX_CONFIG_PATH =
  "benchmarks/ui-resolve-bench/config/omd-grok46-wow-preview-v0.2.json";
const SCORE_GATE_CONFIG_PATH =
  "benchmarks/ui-resolve-bench/config/omd-grok46-wow-preview-score-gate-v0.2.json";
const PREFIXES_CONFIG_PATH =
  "benchmarks/ui-resolve-bench/config/omd-grok46-activation-prefixes-v0.1.json";

const TASK_ORDER = [
  "neighborhood-library-landing",
  "cold-chain-operations",
  "clinic-visit-prep-locales",
];
const ARM_ORDER = [
  "model-only",
  "anthropic-frontend-design",
  "impeccable-prompt-only",
  "ui-ux-pro-max",
  "taste-eligible-scope-only",
  "omd-autopilot-v2",
];

const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

function git(...args) {
  return execFileSync("git", args, { cwd: repoRoot, encoding: "utf8" }).trim();
}

function readRepoJson(rel) {
  const bytes = readFileSync(join(repoRoot, rel));
  return { bytes, json: JSON.parse(bytes.toString("utf8")), sha256: sha256(bytes) };
}

function parseArgs(argv) {
  const map = new Map();
  for (let i = 0; i < argv.length; i += 2) {
    invariant(argv[i]?.startsWith("--"), `unexpected argument: ${argv[i]}`);
    map.set(argv[i].slice(2), argv[i + 1]);
  }
  return map;
}

export function lockCommand(args) {
  const out = resolve(String(args.get("out") ?? ""));
  invariant(args.get("out"), "missing --out");
  invariant(!existsSync(out), `refusing to overwrite existing locked root: ${out}`);

  const sourceCommit = String(args.get("source-commit") ?? git("rev-parse", "HEAD"));
  invariant(
    /^[0-9a-f]{40}$/.test(sourceCommit) && git("rev-parse", "HEAD") === sourceCommit,
    "source commit must equal current HEAD",
  );
  invariant(
    git("status", "--porcelain=v1", "--untracked-files=all") === "",
    "current source worktree must be clean",
  );

  // ── Read and verify authorities ──
  const matrixConfig = readRepoJson(MATRIX_CONFIG_PATH);
  const scoreGate = readRepoJson(SCORE_GATE_CONFIG_PATH);
  const prefixesConfig = readRepoJson(PREFIXES_CONFIG_PATH);
  invariant(
    matrixConfig.json.experiment_id === EXPERIMENT_ID &&
      scoreGate.json.experiment_id === EXPERIMENT_ID &&
      prefixesConfig.json.experiment_id === EXPERIMENT_ID,
    "experiment_id drift across configs",
  );
  invariant(
    matrixConfig.json.provider_execution_allowed === false,
    "matrix config must keep provider execution disabled at lock time",
  );
  const rt = matrixConfig.json.runtime;
  invariant(
    rt.provider === PROVIDER && rt.model === MODEL && rt.effort === EFFORT,
    "matrix config runtime drift",
  );

  // Authorities listed in the config must be byte-identical to HEAD files.
  for (const [name, ref] of Object.entries(matrixConfig.json.authorities ?? {})) {
    if (!ref?.path || !ref?.sha256) continue; // score_gate/runner carry null → bound below
    const actual = sha256(readFileSync(join(repoRoot, ref.path)));
    invariant(
      actual === ref.sha256,
      `authority byte drift: ${name} (${ref.path}) expected ${ref.sha256} got ${actual}`,
    );
  }

  // ── Task prompts from the in-repo task set, byte-verified ──
  const taskSet = readRepoJson(matrixConfig.json.authorities.task_set.path);
  const taskPrompts = [];
  const promptByTask = new Map();
  for (const declared of matrixConfig.json.tasks) {
    const task = (taskSet.json.tasks ?? []).find((t) => t.id === declared.task_id);
    invariant(task, `task missing from task set: ${declared.task_id}`);
    const promptBytes = Buffer.from(task.prompt, "utf8");
    invariant(
      promptBytes.length === declared.prompt_bytes &&
        sha256(promptBytes) === declared.prompt_sha256,
      `task prompt drift vs preregistration: ${declared.task_id}`,
    );
    taskPrompts.push({
      task_id: declared.task_id,
      family: declared.family,
      prompt: task.prompt,
      prompt_bytes: promptBytes.length,
      prompt_sha256: declared.prompt_sha256,
    });
    promptByTask.set(declared.task_id, declared);
  }
  invariant(taskPrompts.length === 3, "expected exactly 3 tasks");

  // ── Activation prefixes ──
  const prefixes = prefixesConfig.json.prefixes;
  for (const arm of ARM_ORDER) {
    invariant(arm in prefixes, `activation prefix entry missing for arm: ${arm}`);
    const entry = prefixes[arm];
    if (arm === "model-only") {
      invariant(entry.prefix === null, "model-only must have no activation prefix");
    } else {
      invariant(
        typeof entry.prefix === "string" &&
          sha256(Buffer.from(entry.prefix, "utf8")) === entry.sha256,
        `activation prefix byte drift for arm: ${arm}`,
      );
    }
  }

  // ── Expand 54 cells, round-major (wave r1 = all trial-1 cells, ...) ──
  const eligibleFamilies =
    matrixConfig.json.arm_eligibility["taste-eligible-scope-only"].eligible_families;
  const cells = [];
  let order = 0;
  for (let trial = 1; trial <= 3; trial += 1) {
    for (const taskId of TASK_ORDER) {
      const declared = promptByTask.get(taskId);
      for (const arm of ARM_ORDER) {
        const eligible =
          arm !== "taste-eligible-scope-only" ||
          eligibleFamilies.includes(declared.family);
        const cell = {
          id: `${taskId}-grok46-r${trial}-${arm}`,
          order: eligible ? (order += 1) : null,
          task_id: taskId,
          prompt_bytes: declared.prompt_bytes,
          prompt_sha256: declared.prompt_sha256,
          variant_id: arm,
          runtime: RUNTIME_TARGET,
          model_id: MODEL,
          effort: EFFORT,
          trial_index: trial,
          wave_id: `r${trial}`,
          eligible_for_execution_and_scoring: eligible,
          eligibility_reason: eligible
            ? null
            : matrixConfig.json.matrix.ineligible_reason,
          retry_budget: 0,
          replacement_budget: 0,
          fallback_budget: 0,
          activation_prefix: arm === "model-only" ? null : prefixes[arm].prefix,
          activation_prefix_sha256:
            arm === "model-only" ? null : prefixes[arm].sha256,
        };
        cells.push(cell);
      }
    }
  }
  const eligibleCount = cells.filter((c) => c.eligible_for_execution_and_scoring).length;
  invariant(cells.length === 54, `expected 54 cells, got ${cells.length}`);
  invariant(eligibleCount === 48, `expected 48 eligible cells, got ${eligibleCount}`);
  invariant(order === 48, `order counter drift: ${order}`);

  // ── Compose locked matrix ──
  const lockedMatrix = {
    schema_version: "0.2",
    kind: MATRIX_KIND,
    experiment_id: EXPERIMENT_ID,
    status: MATRIX_STATUS,
    provider_execution_allowed: false,
    source_commit: sourceCommit,
    source_authority: {
      matrix_config: { path: MATRIX_CONFIG_PATH, sha256: matrixConfig.sha256 },
      score_gate_config: { path: SCORE_GATE_CONFIG_PATH, sha256: scoreGate.sha256 },
      activation_prefixes: { path: PREFIXES_CONFIG_PATH, sha256: prefixesConfig.sha256 },
      task_set: {
        path: matrixConfig.json.authorities.task_set.path,
        sha256: taskSet.sha256,
      },
    },
    runtime: { ...matrixConfig.json.runtime },
    fairness_contract: { ...matrixConfig.json.fairness_contract },
    waves: { ...matrixConfig.json.waves },
    task_count: 3,
    arm_count: 6,
    maximum_cell_slots: 54,
    scheduled_provider_cells: 48,
    ineligible_unexecuted_slots: 6,
    cells,
    task_prompts: taskPrompts,
    config_authority: {
      blank_starter_path: matrixConfig.json.authorities.blank_starter.path,
      blank_starter_sha256: matrixConfig.json.authorities.blank_starter.sha256,
    },
    preparation_calls: { provider_calls: 0, model_calls: 0, browser_calls: 0 },
  };

  mkdirSync(out, { recursive: false });
  const matrixPath = join(out, "RUN-MATRIX.locked.json");
  const matrixBytes = `${JSON.stringify(lockedMatrix, null, 2)}\n`;
  writeFileSync(matrixPath, matrixBytes, { flag: "wx" });

  const receipt = {
    schema_version: "0.2",
    kind: "omd-grok46-wow-preview-preregistration-receipt",
    experiment_id: EXPERIMENT_ID,
    source_commit: sourceCommit,
    locked_matrix_sha256: sha256(Buffer.from(matrixBytes)),
    matrix_config_sha256: matrixConfig.sha256,
    score_gate_config_sha256: scoreGate.sha256,
    activation_prefixes_sha256: prefixesConfig.sha256,
    task_set_sha256: taskSet.sha256,
    missing_data_rules_locked_before_any_cell: true,
    user_execution_authorization: {
      date: "2026-08-15",
      quote:
        "그 다음 셀같은것도 너가 알아서 계속 작업해. 어차피 대부분은 grok 으로 돌리는거잖아.",
      satisfies: "activation_phrase requirement (ㄱㄱ) by explicit delegation",
      note: "provider_execution_allowed stays false until admission passes; execution proceeds wave-gated per score-gate rules.",
    },
    generated_at: new Date().toISOString(),
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
    network_calls: 0,
  };
  writeFileSync(
    join(out, "PREREGISTRATION.receipt.json"),
    `${JSON.stringify(receipt, null, 2)}\n`,
    { flag: "wx" },
  );

  const status = {
    schema_version: "0.2",
    experiment_id: EXPERIMENT_ID,
    status: MATRIX_STATUS,
    locked_matrix_sha256: receipt.locked_matrix_sha256,
    cells_total: 54,
    cells_scheduled: 48,
    cells_ineligible: 6,
    source_commit: sourceCommit,
  };
  writeFileSync(join(out, "STATUS.json"), `${JSON.stringify(status, null, 2)}\n`, {
    flag: "wx",
  });

  return { out, matrixPath, locked_matrix_sha256: receipt.locked_matrix_sha256 };
}

export function main(argv = process.argv.slice(2)) {
  const [command, ...rest] = argv;
  invariant(
    command === "lock",
    "usage: lock-grok46-wow-preview.mjs lock --out <fresh-locked-root> [--source-commit <HEAD>]",
  );
  const result = lockCommand(parseArgs(rest));
  process.stdout.write(
    `${JSON.stringify(
      {
        out: result.out,
        locked_matrix_sha256: result.locked_matrix_sha256,
        provider_calls: 0,
        model_calls: 0,
        browser_calls: 0,
      },
      null,
      2,
    )}\n`,
  );
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  main();
}

import { execFileSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  CODEX_EFFORT_SWEEP_BASE_PAIR_ORDER,
  CODEX_EFFORT_SWEEP_TASKS,
  CODEX_EFFORT_SWEEP_WAVES,
  codexEffortSweepScheduleSha256,
  codexEffortSweepTaskSetSha256,
  createCodexEffortSweepPlan,
  renderCodexEffortSweepPreregistration,
  validateGeneratedCodexEffortSweepPlan,
} from "../../../benchmarks/ui-resolve-bench/scripts/create-codex-effort-sweep-plan.mjs";
import {
  prepareRunMatrix,
  readPreregisteredPlanAuthority,
} from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";
import { sha256 } from "../../../benchmarks/ui-resolve-bench/scripts/_lib.mjs";

const script = resolve(
  "benchmarks/ui-resolve-bench/scripts/create-codex-effort-sweep-plan.mjs",
);
const catalogLockPath = resolve(
  "benchmarks/ui-resolve-bench/reports/codex-model-effort-contract-1.9.815/CATALOG-LOCK.json",
);
const installedSkillSha256 = "76d7116df49a2896f2f22e264287ec66c79764c5b0f6581996df09778ec8e0ad";
const immutableAuthFixtureRoot = mkdtempSync(join(tmpdir(), "omd-effort-auth-snapshot-"));
const immutableAuthFixturePath = join(immutableAuthFixtureRoot, "auth.json");
const immutableAuthFixtureBytes = Buffer.from('{"fixture":"immutable-effort-auth"}\n');
writeFileSync(immutableAuthFixturePath, immutableAuthFixtureBytes);

function createCommittedTaskSource() {
  const root = mkdtempSync(join(tmpdir(), "omd-effort-task-source-"));
  const tasksRoot = join(root, "tasks");
  mkdirSync(tasksRoot, { recursive: true });
  for (const task of CODEX_EFFORT_SWEEP_TASKS) {
    cpSync(
      resolve("benchmarks/ui-resolve-bench/tasks", task.task_id),
      join(tasksRoot, task.task_id),
      { recursive: true },
    );
  }
  execFileSync("git", ["-C", root, "init", "--quiet"]);
  execFileSync("git", ["-C", root, "config", "user.name", "OmD Test"]);
  execFileSync("git", ["-C", root, "config", "user.email", "omd-test@local.invalid"]);
  execFileSync("git", ["-C", root, "add", "tasks"]);
  execFileSync("git", ["-C", root, "commit", "--quiet", "-m", "lock tasks"]);
  return {
    root,
    tasksRoot,
    commit: execFileSync("git", ["-C", root, "rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
  };
}

const taskSource = createCommittedTaskSource();

function options(overrides = {}) {
  return {
    productVersion: "fixture",
    experimentId: "codex-all-effort-sweep-fixture",
    outputRoot: "/private/tmp/omd-codex-all-effort-sweep-fixture",
    vendorsRoot: "/private/tmp/omd-vendors-19797",
    variantId: "omd-portable-1.9.799-current",
    installedSkillSha256,
    taskSourceCommit: taskSource.commit,
    tasksRoot: taskSource.tasksRoot,
    catalogLockPath,
    catalogAuthSourceHome: immutableAuthFixtureRoot,
    catalogAuthJsonSourcePath: immutableAuthFixturePath,
    modelsCacheSourcePath: "/private/tmp/omd-codex-auth-pin-fixture/models_cache.json",
    codexCliExecutablePath: "/private/tmp/omd-codex-cli-fixture/codex",
    codexCliNativeExecutablePath: "/private/tmp/omd-codex-cli-fixture/codex-native",
    codexCliVersion: "0.147.0",
    codexCliBinarySha256: "e".repeat(64),
    codexCliNativeBinarySha256: "f".repeat(64),
    cliCacheClientVersionPolicy: "require-exact-match",
    cliCacheClientVersionMismatchJustification: null,
    browserConnectionName: "omd-effort-fixture",
    browserCdpPort: 9362,
    ...overrides,
  };
}

function pairLabel(cell) {
  return `${cell.model_id.replace("gpt-5.6-", "")}-${cell.effort}`;
}

describe("Codex all-effort sweep preregistration generator", () => {
  it("builds the exact provider-zero 51-cell complete block and lock set", () => {
    const plan = createCodexEffortSweepPlan(options());

    expect(validateGeneratedCodexEffortSweepPlan(plan)).toBe(plan);
    expect(() => prepareRunMatrix(plan)).toThrow(
      "requires planPath and expectedReceiptPath",
    );
    expect(plan).toMatchObject({
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.2",
      execution_purpose: "complete-block-effort-scaling",
      family: "model",
      preregistration_authority_contract: {
        receipt_ref: "PREREGISTRATION.receipt.json",
        binding: "exact-plan-file-bytes-sha256",
        receipt_required_before_preparation: true,
        plan_mutation_allowed_after_receipt: false,
      },
      control_contract: {
        comparison_mode: "effort-scaling",
        timeout_seconds: 720,
        max_concurrency: 1,
        retry_policy: "none-primary",
        replacement_policy: "none",
        fallback_policy: "none",
        model_substitution_policy: "none",
        effort_substitution_policy: "none",
        task_substitution_policy: "none",
        admission_normalization_policy: "complete-block-effort-scaling",
        pacing: {
          policy: "fixed-inter-cell",
          inter_cell_delay_seconds: 30,
          applies_between_cells_only: true,
          counts_toward_cell_wall_time: false,
        },
      },
      effort_sweep_contract: {
        required_cells: 51,
        tasks: 3,
        trials_per_task_pair: 1,
        complete_block_required: true,
        reliability_metric: null,
      },
      checkpoint_continuation_contract: {
        max_new_cells_per_invocation: 1,
        preserve_completed_cells: true,
      },
      comparison_claim_contract: {
        claim: "internal-effort-scaling-compatibility",
        descriptive_only: true,
        requires_complete_51_cell_block: true,
        cross_model_pooling_allowed: false,
      },
      provider_routing_contract: {
        cursor_allowed: false,
        claude_code_allowed: false,
        allowed_runtime: "codex",
        aliases_allowed: false,
        retry_allowed: false,
        replacement_allowed: false,
        fallback_allowed: false,
        model_substitution_allowed: false,
        effort_substitution_allowed: false,
        task_substitution_allowed: false,
        fail_closed: true,
      },
      interpretation_contract: {
        mode: "complete-block-only",
        interpretation_allowed_before_all_51_terminal: false,
        incomplete_block_disposition: "freeze-without-comparative-claim",
        cross_model_pooling_allowed: false,
        reliability_interpretation_allowed: false,
      },
      exposure_evidence_contract: {
        scope: "generator-invocation-only",
        historical_task_exposure: "unknown-not-asserted",
        prior_task_exposure_claim_made: false,
      },
      generation_attestation: {
        provider_calls: 0,
        model_calls: 0,
        browser_calls: 0,
        network_calls: 0,
        cursor_calls: 0,
        claude_calls: 0,
      },
    });
    expect(plan.cells).toHaveLength(51);
    expect(new Set(plan.cells.map((cell) => cell.trial_index))).toEqual(new Set([1]));
    expect(plan.codex_model_effort_contract.models.map((model) => [
      model.model_id,
      model.supported_efforts.length,
    ])).toEqual([
      ["gpt-5.6-luna", 5],
      ["gpt-5.6-terra", 6],
      ["gpt-5.6-sol", 6],
    ]);
    expect(plan.effort_sweep_contract.ordered_model_effort_pairs).toHaveLength(17);
    expect(plan.task_lock_contract.tasks.map((task) => task.task_id)).toEqual(
      CODEX_EFFORT_SWEEP_TASKS.map((task) => task.task_id),
    );
    expect(plan.task_lock_contract.tasks.every((task) => [
      task.task_tree_sha256,
      task.prompt_sha256,
      task.starter_sha256,
      task.baseline_evidence_sha256,
      task.source_contract_sha256,
    ].every((digest) => /^[a-f0-9]{64}$/.test(digest)))).toBe(true);
    expect(plan.task_lock_contract).toMatchObject({
      source_commit: taskSource.commit,
      source_commit_membership: "ancestor-of-generation-head",
      exact_working_tree_match: true,
      provenance: "source-commit-locked-v18",
    });
    expect(plan.task_lock_contract.tasks.every((task) => (
      task.source_commit === taskSource.commit
      && task.observed_task_tree_sha256 === task.task_tree_sha256
      && /^[a-f0-9]{40,64}$/.test(task.git_tree_oid)
    ))).toBe(true);
    expect(plan.generation_attestation.git_source_validation_calls).toBeGreaterThan(0);
    expect(plan.codex_catalog_snapshot_contract).toMatchObject({
      enforcement_mode: "exact-runtime-per-invocation",
      auth_json_source_path: immutableAuthFixturePath,
      auth_json_source_mode: "immutable-snapshot-only",
      auth_json_sha256: sha256(immutableAuthFixtureBytes),
      auth_json_bytes: immutableAuthFixtureBytes.length,
      auth_json_mode: "isolated-copy-before-provider-execution",
      mutable_auth_fallback_allowed: false,
      models_cache_source_path: "/private/tmp/omd-codex-auth-pin-fixture/models_cache.json",
      models_cache_sha256: plan.codex_model_effort_contract.cache_sha256,
      codex_cli: {
        executable_path: "/private/tmp/omd-codex-cli-fixture/codex",
        native_executable_path: "/private/tmp/omd-codex-cli-fixture/codex-native",
        version: "0.147.0",
        binary_sha256: "e".repeat(64),
        native_binary_sha256: "f".repeat(64),
      },
      cli_cache_client_version_policy: "require-exact-match",
      cli_cache_client_version_mismatch_justification: null,
    });
    expect(plan.effort_sweep_contract.task_set_sha256).toBe(
      codexEffortSweepTaskSetSha256(plan.task_lock_contract.tasks),
    );
    expect(plan.effort_sweep_contract.schedule_sha256).toBe(
      codexEffortSweepScheduleSha256(plan.cells),
    );
    expect(plan.lock_manifest).toMatchObject({
      task_set_sha256: plan.effort_sweep_contract.task_set_sha256,
      schedule_sha256: plan.effort_sweep_contract.schedule_sha256,
      catalog_lock_file_sha256: plan.codex_catalog_snapshot_contract.catalog_lock_sha256,
    });
    expect(Object.values(plan.lock_manifest).filter((value) => /^[a-f0-9]{64}$/.test(value)))
      .toHaveLength(9);
    expect(plan).not.toHaveProperty("matrix_sha256");
    expect(JSON.stringify(plan)).not.toContain("locked_matrix_sha256");
    expect(plan).not.toHaveProperty("reliability_contract");
    expect(JSON.stringify(plan)).not.toContain("prior_model_exposures");
  });

  it("uses the exact interleaved three-wave rotations and gives every pair A/B/C once", () => {
    const plan = createCodexEffortSweepPlan(options());
    const waves = [1, 2, 3].map((wave) => plan.cells.filter((cell) => cell.schedule_wave === wave));

    expect(plan.schedule_contract).toMatchObject({
      policy: "balanced-three-wave-interleaved",
      base_model_effort_pair_order: CODEX_EFFORT_SWEEP_BASE_PAIR_ORDER,
      wave_rotations: [0, 6, 12],
      wave_task_assignments: CODEX_EFFORT_SWEEP_WAVES.map((wave) => [...wave.task_assignments]),
    });
    expect(waves.map((wave) => wave.map(pairLabel))).toEqual([
      [
        "luna-medium", "terra-high", "sol-max", "luna-max", "terra-low",
        "sol-medium", "luna-low", "terra-max", "sol-ultra", "luna-xhigh",
        "terra-medium", "sol-low", "luna-high", "terra-ultra", "sol-xhigh",
        "terra-xhigh", "sol-high",
      ],
      [
        "luna-low", "terra-max", "sol-ultra", "luna-xhigh", "terra-medium",
        "sol-low", "luna-high", "terra-ultra", "sol-xhigh", "terra-xhigh",
        "sol-high", "luna-medium", "terra-high", "sol-max", "luna-max",
        "terra-low", "sol-medium",
      ],
      [
        "luna-high", "terra-ultra", "sol-xhigh", "terra-xhigh", "sol-high",
        "luna-medium", "terra-high", "sol-max", "luna-max", "terra-low",
        "sol-medium", "luna-low", "terra-max", "sol-ultra", "luna-xhigh",
        "terra-medium", "sol-low",
      ],
    ]);
    expect(waves.map((wave) => wave.map((cell) => cell.schedule_task_label))).toEqual([
      ["A", "B", "C", "A", "B", "C", "A", "B", "C", "A", "B", "C", "A", "B", "C", "A", "B"],
      ["B", "C", "A", "B", "C", "A", "B", "C", "A", "B", "C", "B", "C", "A", "B", "C", "A"],
      ["C", "A", "B", "C", "A", "C", "A", "B", "C", "A", "B", "C", "A", "B", "C", "A", "B"],
    ]);

    for (const pair of plan.effort_sweep_contract.ordered_model_effort_pairs) {
      const assigned = plan.cells
        .filter((cell) => cell.model_id === pair.model_id && cell.effort === pair.effort)
        .map((cell) => cell.schedule_task_label)
        .sort();
      expect(assigned, `${pair.model_id}/${pair.effort}`).toEqual(["A", "B", "C"]);
    }
    for (const task of CODEX_EFFORT_SWEEP_TASKS) {
      expect(plan.cells.filter((cell) => cell.task_id === task.task_id)).toHaveLength(17);
    }
  });

  it("fails closed on catalog, schedule, task-lock, or provider-zero drift", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-effort-plan-drift-"));
    const catalog = JSON.parse(readFileSync(catalogLockPath, "utf8"));
    const dirtyCatalogPath = join(root, "catalog.json");
    catalog.provider_calls = 1;
    writeFileSync(dirtyCatalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
    expect(() => createCodexEffortSweepPlan(options({ catalogLockPath: dirtyCatalogPath })))
      .toThrow("catalog lock provider_calls must be zero");

    const wrongShape = JSON.parse(readFileSync(catalogLockPath, "utf8"));
    wrongShape.codex_model_effort_contract.models[0].supported_efforts.push("ultra");
    wrongShape.matrix_size = 18;
    writeFileSync(dirtyCatalogPath, `${JSON.stringify(wrongShape, null, 2)}\n`);
    expect(() => createCodexEffortSweepPlan(options({ catalogLockPath: dirtyCatalogPath })))
      .toThrow(/exactly 17 pairs|exact current model-effort shape/);

    const reordered = structuredClone(createCodexEffortSweepPlan(options()));
    [reordered.cells[0], reordered.cells[1]] = [reordered.cells[1], reordered.cells[0]];
    expect(() => validateGeneratedCodexEffortSweepPlan(reordered))
      .toThrow(/first task occurrence order|exact balanced three-wave schedule/);

    const taskDrift = structuredClone(createCodexEffortSweepPlan(options()));
    taskDrift.task_lock_contract.tasks[0].prompt_sha256 = "f".repeat(64);
    expect(() => validateGeneratedCodexEffortSweepPlan(taskDrift))
      .toThrow("task-set hash drift");

    const providerDrift = structuredClone(createCodexEffortSweepPlan(options()));
    providerDrift.generation_attestation.browser_calls = 1;
    expect(() => validateGeneratedCodexEffortSweepPlan(providerDrift))
      .toThrow("fail-closed and provider-zero");

    expect(() => createCodexEffortSweepPlan(options({ taskSourceCommit: "0".repeat(40) })))
      .toThrow("ancestor commit in the tasks repository");

    const treeDriftSource = createCommittedTaskSource();
    const driftPrompt = join(
      treeDriftSource.tasksRoot,
      CODEX_EFFORT_SWEEP_TASKS[0].task_id,
      "PROMPT.md",
    );
    writeFileSync(driftPrompt, `${readFileSync(driftPrompt, "utf8")}\npost-commit drift\n`);
    expect(() => createCodexEffortSweepPlan(options({
      tasksRoot: treeDriftSource.tasksRoot,
      taskSourceCommit: treeDriftSource.commit,
    }))).toThrow(/baseline provenance receipt|working task tree does not exactly match source commit/);

    expect(() => createCodexEffortSweepPlan(options({ codexCliVersion: "0.146.1" })))
      .toThrow("requires exact CLI/cache client version match");
    expect(() => createCodexEffortSweepPlan(options({
      codexCliVersion: "0.146.1",
      cliCacheClientVersionPolicy: "explicit-locked-mismatch",
      cliCacheClientVersionMismatchJustification: "wrapper 0.146.1 is pinned to the immutable 0.147.0 cache snapshot",
    }))).toThrow("requires cliCacheClientVersionPolicy=require-exact-match");

    const authRoot = mkdtempSync(join(tmpdir(), "omd-effort-auth-drift-"));
    const authTarget = join(authRoot, "auth-target.json");
    const authLink = join(authRoot, "auth.json");
    writeFileSync(authTarget, '{"fixture":"auth"}\n');
    symlinkSync(authTarget, authLink);
    expect(() => createCodexEffortSweepPlan(options({
      catalogAuthSourceHome: authRoot,
      catalogAuthJsonSourcePath: authLink,
    }))).toThrow("immutable regular-file snapshot");

    const mutableAuthPath = join(authRoot, "mutable-auth.json");
    writeFileSync(mutableAuthPath, '{"fixture":"before"}\n');
    const authBoundPlan = createCodexEffortSweepPlan(options({
      catalogAuthSourceHome: authRoot,
      catalogAuthJsonSourcePath: mutableAuthPath,
    }));
    writeFileSync(mutableAuthPath, '{"fixture":"after"}\n');
    expect(() => validateGeneratedCodexEffortSweepPlan(authBoundPlan))
      .toThrow(/catalog\/auth\/(?:cache\/)?CLI (?:runtime )?binding drift/);
  });

  it("writes only the plan and preregistration without starting a matrix or provider", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-effort-plan-cli-"));
    const reportRoot = join(root, "report");
    const planPath = join(reportRoot, "RUN-MATRIX.json");
    const preregistrationPath = join(reportRoot, "PREREGISTRATION.md");
    const preparedRoot = join(root, "prepared-matrix");
    const authRoot = join(root, "auth-snapshot");
    const authPath = join(authRoot, "auth.json");
    mkdirSync(authRoot, { recursive: true });
    writeFileSync(authPath, immutableAuthFixtureBytes);
    const stdout = execFileSync(process.execPath, [
      script,
      "--product-version", "fixture",
      "--experiment-id", "codex-all-effort-sweep-fixture-cli",
      "--output-root", preparedRoot,
      "--vendors-root", join(root, "vendors-not-touched"),
      "--variant", "omd-portable-1.9.799-current",
      "--installed-skill-sha256", installedSkillSha256,
      "--task-source-commit", taskSource.commit,
      "--tasks-root", taskSource.tasksRoot,
      "--catalog-lock", catalogLockPath,
      "--catalog-auth-home", authRoot,
      "--catalog-auth-json-source", authPath,
      "--models-cache-source", join(authRoot, "models_cache.json"),
      "--codex-cli-executable", join(root, "codex-not-touched/bin/codex"),
      "--codex-cli-native-executable", join(root, "codex-not-touched/bin/codex-native"),
      "--codex-cli-version", "0.147.0",
      "--codex-cli-binary-sha256", "e".repeat(64),
      "--codex-cli-native-binary-sha256", "f".repeat(64),
      "--cli-cache-client-version-policy", "require-exact-match",
      "--browser-connection", "omd-effort-cli-fixture",
      "--browser-cdp-port", "9363",
      "--out", planPath,
      "--preregistration-out", preregistrationPath,
    ], { encoding: "utf8" });

    const receipt = JSON.parse(stdout);
    const plan = JSON.parse(readFileSync(planPath, "utf8"));
    const preregistration = readFileSync(preregistrationPath, "utf8");
    expect(receipt).toMatchObject({
      schema_version: "0.2",
      status: "PREREGISTERED_PROVIDER_ZERO",
      scheduled_cells: 51,
      provider_calls: 0,
      model_calls: 0,
      browser_calls: 0,
      network_calls: 0,
      cursor_calls: 0,
      claude_calls: 0,
    });
    const receiptPath = join(reportRoot, "PREREGISTRATION.receipt.json");
    const receiptFile = JSON.parse(readFileSync(receiptPath, "utf8"));
    expect(receipt.preregistration_receipt_path).toBe(receiptPath);
    expect(receiptFile.plan_sha256).toBe(sha256(readFileSync(planPath)));
    expect(readPreregisteredPlanAuthority(plan, {
      planPath,
      expectedReceiptPath: receiptPath,
    })).toMatchObject({ plan_sha256: receiptFile.plan_sha256 });
    expect(validateGeneratedCodexEffortSweepPlan(plan)).toBe(plan);
    expect(preregistration).toBe(renderCodexEffortSweepPreregistration(plan));
    expect(preregistration).toContain("internal-effort-scaling-compatibility");
    expect(preregistration).toContain("Provider/model/browser/network/Cursor/Claude calls made by this generator: 0/0/0/0/0/0");
    expect(existsSync(preparedRoot)).toBe(false);
    expect(existsSync(join(root, "vendors-not-touched"))).toBe(false);
    expect(readFileSync(authPath)).toEqual(immutableAuthFixtureBytes);

    writeFileSync(planPath, `${readFileSync(planPath, "utf8")} `);
    expect(() => readPreregisteredPlanAuthority(plan, {
      planPath,
      expectedReceiptPath: receiptPath,
    })).toThrow("does not bind exact plan bytes");

    const source = readFileSync(script, "utf8");
    expect(source).not.toMatch(/\bfetch\s*\(/);
    expect(source).not.toMatch(/\b(?:spawn|spawnSync)\s*\(/);
  });
});

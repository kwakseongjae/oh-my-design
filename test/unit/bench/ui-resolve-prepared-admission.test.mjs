import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  observeTaskSourceAuthority,
  prepareRunMatrix,
} from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";
import { auditPreparedMatrixAdmission } from "../../../benchmarks/ui-resolve-bench/scripts/audit-prepared-matrix-admission.mjs";
import {
  COMPLETE_BLOCK_BASE_PAIR_ORDER,
  COMPLETE_BLOCK_SCHEDULE_WAVES,
  completeBlockScheduleSha256,
  completeBlockTaskSetSha256,
} from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";
import { sha256, treeManifest } from "../../../benchmarks/ui-resolve-bench/scripts/_lib.mjs";
import { currentObjectiveMethodology } from "../../../benchmarks/ui-resolve-bench/scripts/objective-methodology-contract.mjs";

const immutableAuthFixtureRoot = mkdtempSync(join(tmpdir(), "omd-admission-auth-snapshot-"));
const immutableAuthFixturePath = join(immutableAuthFixtureRoot, "auth.json");
const immutableAuthFixtureBytes = Buffer.from('{"fixture":"immutable-admission-auth"}\n');
writeFileSync(immutableAuthFixturePath, immutableAuthFixtureBytes);

function plan(root) {
  return {
    schema_version: "0.1",
    experiment_id: "prepared-admission-fixture",
    output_root: root,
    status: "local-admission-only-remote-execution-deferred",
    cells: [{
      id: "control-r1",
      task_id: "pricing-conversion-v0.1",
      variant_id: "raw-design-md",
      system_id: "raw-design-md",
      runtime: "codex",
      model_id: "gpt-fixture",
      effort: "high",
      timeout_seconds: 20,
      trial_index: 1,
    }],
  };
}

function repeatedReliabilityPlan(root) {
  const baseCell = plan(root).cells[0];
  return {
    ...plan(root),
    schema_version: "0.3",
    suite_version: "ui-resolve-v0.2",
    product_version: "fixture",
    execution_purpose: "multi-task-repeated-reliability-fixture",
    family: "skill",
    status: "locked-diagnostic-only",
    control_contract: {
      comparison_mode: "native-capability",
      effort_semantics: "runtime-native-ordinal-not-cross-provider-equivalent",
      temperature_policy: "runtime-default-frozen",
      timeout_seconds: 20,
      max_concurrency: 1,
      latency_comparison: "descriptive-only",
      retry_policy: "none-primary",
      timeout_policy: "count-as-valid-failure",
      infrastructure_policy: "retain-freeze-and-repreregister",
      task_order_policy: "fixed-preregistered",
      admission_normalization_policy: "multi-task-repeated-reliability",
      token_budget: {
        mode: "observed-only",
        limit_tokens: null,
        usage_required: true,
        account_components: ["input", "cached_input", "output", "reasoning_output"],
        cached_input_separate: true,
        cost_policy: "provider-reported-or-pinned-price-equivalent",
      },
      step_budget: { mode: "observed-only", limit_steps: null },
    },
    task_lock_contract: {
      tasks: [
        {
          task_id: "orbital-optics-transfer-v0.1",
          task_tree_sha256: "9d5c2773344b14b064275b8748d49ad4b5c7dbe527d3d1dbdad2d030d5d75fd8",
          prompt_sha256: "579166df05a6ce574deddb63be05b20fe6e20b19dc45be7698d7832eb894f0a1",
          starter_sha256: "9bc0699e6a21031d805b4bc0a81e5300fd0c461780b156ea7ad5672d897354d5",
          baseline_evidence_sha256: "21deeeda8381833c071160aceaefc1e842bf02a7fe7de9833a3a7a4a5e41aea6",
          source_contract_sha256: "3d5259f353cd2a44ea80139d7ee940d49fb26da614416f6bc0a1f52c789ccc9d",
        },
        {
          task_id: "seed-vault-accession-v0.1",
          task_tree_sha256: "a8884db39170445b429ba24892600e96d5a6e59ffa92d79defa92dbe855ac69c",
          prompt_sha256: "61f5ddf2e9bfe5bdfcdd923e6a8218063001ee2fa445f66121da7ddc9e282922",
          starter_sha256: "581c61546c93eaa05cb6b5cf67e22f2c76cf61c7cfc1d1703329b924dfdacea9",
          baseline_evidence_sha256: "8b928e0f078f7ac170cc403fde3878b27953d6b84cd3d9ef87779268c69f6480",
          source_contract_sha256: "f4c14eb9de8ed9f4a9e02c5ac92c6b3210193c841b7dfc59adb4cdb0a3fcbd6b",
        },
      ],
    },
    cells: [
      ["orbital-r1", "orbital-optics-transfer-v0.1", 1],
      ["orbital-r2", "orbital-optics-transfer-v0.1", 2],
      ["seed-r1", "seed-vault-accession-v0.1", 1],
      ["seed-r2", "seed-vault-accession-v0.1", 2],
    ].map(([id, task_id, trial_index]) => ({
      ...baseCell,
      id,
      task_id,
      trial_index,
      variant_id: "omd-portable",
      system_id: "omd-apply-current",
    })),
  };
}

function mutateJson(path, mutate) {
  const original = readFileSync(path, "utf8");
  const value = JSON.parse(original);
  mutate(value);
  writeFileSync(path, JSON.stringify(value), "utf8");
  if (path.endsWith("RUN-MATRIX.locked.json")) {
    const statePath = join(path, "../matrix-state.json");
    const state = JSON.parse(readFileSync(statePath, "utf8"));
    state.locked_plan_sha256 = sha256(readFileSync(path));
    writeFileSync(statePath, JSON.stringify(state), "utf8");
  }
  return () => {
    writeFileSync(path, original, "utf8");
    if (path.endsWith("RUN-MATRIX.locked.json")) {
      const statePath = join(path, "../matrix-state.json");
      const state = JSON.parse(readFileSync(statePath, "utf8"));
      state.locked_plan_sha256 = sha256(readFileSync(path));
      writeFileSync(statePath, JSON.stringify(state), "utf8");
    }
  };
}

function writeLockedPlan(path, value) {
  writeFileSync(path, JSON.stringify(value), "utf8");
  const statePath = join(path, "../matrix-state.json");
  const state = JSON.parse(readFileSync(statePath, "utf8"));
  state.locked_plan_sha256 = sha256(readFileSync(path));
  writeFileSync(statePath, JSON.stringify(state), "utf8");
}

function prepareCompleteBlockEffortFixture(root) {
  const models = [
    ["gpt-5.6-luna", "medium", ["low", "medium", "high", "xhigh", "max"]],
    ["gpt-5.6-terra", "medium", ["low", "medium", "high", "xhigh", "max", "ultra"]],
    ["gpt-5.6-sol", "low", ["low", "medium", "high", "xhigh", "max", "ultra"]],
  ].map(([model_id, default_effort, supported_efforts], index) => ({
    model_id,
    model_profile_sha256: String(index + 1).repeat(64),
    default_effort,
    supported_efforts,
  }));
  const orderedPairs = models.flatMap((model) => model.supported_efforts.map((effort) => ({
    model_id: model.model_id,
    effort,
  })));
  const tasks = [
    "orbital-optics-transfer-v0.1",
    "seed-vault-accession-v0.1",
    "choreographic-score-return-v0.1",
  ];
  const baseCells = tasks.map((task_id, taskIndex) => ({
    ...plan(root).cells[0],
    id: `task-${taskIndex + 1}-pair-1`,
    task_id,
    variant_id: "raw-design-md",
    system_id: "raw-design-md",
    model_id: orderedPairs[0].model_id,
    effort: orderedPairs[0].effort,
  }));
  prepareRunMatrix({ ...plan(root), status: "locked-diagnostic-only", cells: baseCells });

  const baseLocked = JSON.parse(readFileSync(join(root, "RUN-MATRIX.locked.json"), "utf8"));
  const baseState = JSON.parse(readFileSync(join(root, "matrix-state.json"), "utf8"));
  const sourceCommit = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  const taskAuthority = new Map(tasks.map((task_id) => [
    task_id,
    observeTaskSourceAuthority(
      join("benchmarks/ui-resolve-bench/tasks", task_id),
      sourceCommit,
    ),
  ]));
  const taskLocks = tasks.map((task_id, taskIndex) => {
    const id = `task-${taskIndex + 1}-pair-1`;
    const matrixCell = JSON.parse(readFileSync(
      join(root, id, ".benchmark/matrix-cell.json"), "utf8",
    ));
    const manifest = JSON.parse(readFileSync(
      join(root, id, ".benchmark/manifest.json"), "utf8",
    ));
    const authority = taskAuthority.get(task_id);
    return {
      task_id,
      source_commit: sourceCommit,
      git_tree_oid: authority.git_tree_oid,
      observed_task_tree_sha256: authority.working_tree.sha256,
      task_tree_sha256: authority.working_tree.sha256,
      task_tree_files: authority.working_tree.files,
      prompt_sha256: matrixCell.task_prompt_sha256,
      starter_sha256: matrixCell.starter_sha256,
      baseline_evidence_sha256: manifest.deterministic_reflow?.baseline_critical_gate_coverage?.sha256
        ?? String(taskIndex + 4).repeat(64),
      baseline_provenance_sha256: String(taskIndex + 4).repeat(64),
      baseline_methodology: currentObjectiveMethodology(),
      source_contract_sha256: manifest.deterministic_reflow?.source_contract_sha256
        ?? String(taskIndex + 4).repeat(64),
    };
  });
  const taskByLabel = new Map(["A", "B", "C"].map((label, index) => [label, tasks[index]]));
  const taskIndexById = new Map(tasks.map((taskId, index) => [taskId, index]));
  const cells = COMPLETE_BLOCK_SCHEDULE_WAVES.flatMap((wave, waveIndex) => {
    const pairs = [
      ...COMPLETE_BLOCK_BASE_PAIR_ORDER.slice(wave.rotation),
      ...COMPLETE_BLOCK_BASE_PAIR_ORDER.slice(0, wave.rotation),
    ];
    return pairs.map((key, position) => {
      const [model_id, effort] = key.split("/");
      const taskLabel = wave.task_assignments[position];
      const task_id = taskByLabel.get(taskLabel);
      return {
        ...baseCells[taskIndexById.get(task_id)],
        id: `wave-${waveIndex + 1}-position-${position + 1}`,
        task_id,
        model_id,
        effort,
        timeout_seconds: 720,
        schedule_wave: waveIndex + 1,
        schedule_position: position + 1,
        schedule_task_label: taskLabel,
      };
    });
  });
  for (const cell of cells) {
    const taskIndex = taskIndexById.get(cell.task_id);
    const source = join(root, `task-${taskIndex + 1}-pair-1`);
    cpSync(source, join(root, cell.id), { recursive: true });
    const matrixCellPath = join(root, cell.id, ".benchmark/matrix-cell.json");
    const manifestPath = join(root, cell.id, ".benchmark/manifest.json");
    const matrixCell = JSON.parse(readFileSync(matrixCellPath, "utf8"));
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    const taskLock = taskLocks[taskIndex];
    writeFileSync(matrixCellPath, JSON.stringify({
      ...matrixCell,
      ...cell,
      workspace: join(root, cell.id),
      observed_task_tree_sha256: taskLock.task_tree_sha256,
      task_source_commit: taskLock.source_commit,
      task_git_tree_oid: taskLock.git_tree_oid,
      baseline_provenance_sha256: taskLock.baseline_provenance_sha256,
      baseline_methodology: taskLock.baseline_methodology,
    }), "utf8");
    manifest.task.observed_task_tree_sha256 = taskLock.task_tree_sha256;
    manifest.task.source_commit = taskLock.source_commit;
    manifest.task.git_tree_oid = taskLock.git_tree_oid;
    manifest.task.source_observation = {
      ...taskAuthority.get(cell.task_id),
      observer: "prepare-sandbox-independent-task-root-byte-mode-v1",
    };
    mkdirSync(join(root, cell.id, ".codex"), { recursive: true });
    writeFileSync(
      join(root, cell.id, ".codex/auth.json"),
      immutableAuthFixtureBytes,
      { mode: 0o600 },
    );
    manifest.runtime_auth_snapshot = {
      codex_home: ".codex",
      auth_json_path: ".codex/auth.json",
      source_mode: "immutable-snapshot-only",
      copy_mode: "isolated-regular-file",
      sha256: sha256(immutableAuthFixtureBytes),
      bytes: immutableAuthFixtureBytes.length,
      mutable_fallback_allowed: false,
      verified_before_provider_execution: true,
    };
    const initialTree = treeManifest(join(root, cell.id), { ignore: [".benchmark"] });
    manifest.workspace.initial_sha256 = initialTree.sha256;
    manifest.workspace.initial_files = initialTree.files.length;
    manifest.task.baseline_provenance = {
      sha256: taskLock.baseline_provenance_sha256,
      methodology: taskLock.baseline_methodology,
    };
    writeFileSync(manifestPath, JSON.stringify(manifest), "utf8");
  }
  const taskSetSha256 = completeBlockTaskSetSha256(taskLocks);
  const scheduleSha256 = completeBlockScheduleSha256(cells);
  const snapshot = {
    enforcement_mode: "exact-runtime-per-invocation",
    auth_json_source_path: immutableAuthFixturePath,
    auth_json_source_mode: "immutable-snapshot-only",
    auth_json_sha256: sha256(immutableAuthFixtureBytes),
    auth_json_bytes: immutableAuthFixtureBytes.length,
    auth_json_mode: "isolated-copy-before-provider-execution",
    mutable_auth_fallback_allowed: false,
    models_cache_source_path: "/private/tmp/omd-auth-fixture/models_cache.json",
    models_cache_sha256: "a".repeat(64),
    models_cache_source_mode: "immutable-snapshot-only",
    mutable_models_cache_fallback_allowed: false,
    codex_cli: {
      executable_path: "/private/tmp/omd-cli-fixture/codex",
      native_executable_path: "/private/tmp/omd-cli-fixture/codex-native",
      version: "0.147.0",
      binary_sha256: "e".repeat(64),
      native_binary_sha256: "f".repeat(64),
    },
    cli_cache_client_version_policy: "require-exact-match",
    cli_cache_client_version_mismatch_justification: null,
  };
  const locked = {
    ...baseLocked,
    schema_version: "0.3",
    suite_version: "ui-resolve-v0.2",
    product_version: "fixture",
    execution_purpose: "complete-block-effort-scaling-fixture",
    experiment_id: "complete-block-effort-scaling-fixture",
    family: "model",
    preregistration_authority_contract: {
      schema_version: "0.1",
      receipt_ref: "PREREGISTRATION.receipt.json",
      binding: "exact-plan-file-bytes-sha256",
      receipt_required_before_preparation: true,
      plan_mutation_allowed_after_receipt: false,
    },
    status: "locked-diagnostic-only",
    control_contract: {
      comparison_mode: "effort-scaling",
      effort_semantics: "runtime-native-ordinal-not-cross-provider-equivalent",
      temperature_policy: "runtime-default-frozen",
      timeout_seconds: 720,
      max_concurrency: 1,
      latency_comparison: "descriptive-only",
      retry_policy: "none-primary",
      replacement_policy: "none",
      fallback_policy: "none",
      model_substitution_policy: "none",
      effort_substitution_policy: "none",
      task_substitution_policy: "none",
      timeout_policy: "count-as-valid-failure",
      infrastructure_policy: "retain-freeze-and-repreregister",
      task_order_policy: "fixed-preregistered",
      admission_normalization_policy: "complete-block-effort-scaling",
      pacing: {
        policy: "fixed-inter-cell",
        inter_cell_delay_seconds: 30,
        applies_between_cells_only: true,
        counts_toward_cell_wall_time: false,
      },
      token_budget: {
        mode: "observed-only",
        limit_tokens: null,
        usage_required: true,
        account_components: ["input", "cached_input", "output", "reasoning_output"],
        cached_input_separate: true,
        cost_policy: "provider-reported-or-pinned-price-equivalent",
      },
      step_budget: { mode: "observed-only", limit_steps: null },
    },
    codex_model_effort_contract: {
      cache_sha256: "a".repeat(64),
      cache_fetched_at: "2026-08-09T04:32:08Z",
      cache_client_version: "0.147.0",
      models,
    },
    codex_catalog_snapshot_contract: snapshot,
    effort_sweep_contract: {
      required_cells: 51,
      tasks: 3,
      trials_per_task_pair: 1,
      complete_block_required: true,
      reliability_metric: null,
      ordered_model_effort_pairs: orderedPairs,
      task_set_sha256: taskSetSha256,
      schedule_sha256: scheduleSha256,
    },
    provider_routing_contract: {
      cursor_allowed: false,
      claude_code_allowed: false,
      allowed_runtime: "codex",
      allowed_model_ids: models.map((model) => model.model_id),
      allowed_model_effort_pairs: orderedPairs,
      aliases_allowed: false,
      retry_allowed: false,
      replacement_allowed: false,
      fallback_allowed: false,
      model_substitution_allowed: false,
      effort_substitution_allowed: false,
      task_substitution_allowed: false,
      fail_closed: true,
    },
    task_lock_contract: {
      source_commit: sourceCommit,
      task_set_sha256: taskSetSha256,
      tasks: taskLocks,
    },
    schedule_contract: {
      schema_version: "0.1",
      policy: "balanced-three-wave-interleaved",
      canonicalization: "sha256-json-stringify-ordered-cell-schedule-v1",
      task_labels: { A: tasks[0], B: tasks[1], C: tasks[2] },
      base_model_effort_pair_order: [...COMPLETE_BLOCK_BASE_PAIR_ORDER],
      wave_rotations: COMPLETE_BLOCK_SCHEDULE_WAVES.map((wave) => wave.rotation),
      wave_task_assignments: COMPLETE_BLOCK_SCHEDULE_WAVES.map((wave) => [...wave.task_assignments]),
      schedule_sha256: scheduleSha256,
    },
    checkpoint_continuation_contract: {
      max_new_cells_per_invocation: 1,
      preserve_completed_cells: true,
      completed_root_not_resumable: true,
    },
    comparison_claim_contract: {
      claim: "internal-effort-scaling-compatibility",
      publication_tier: "internal-effort-scaling-compatibility",
      descriptive_only: true,
      requires_complete_51_cell_block: true,
      cross_model_pooling_allowed: false,
      forbid_claims: [
        "model-superiority",
        "model-ranking",
        "cross-model-effort-equivalence",
        "statistical-superiority",
        "industry-leader",
        "2.0-release-gate-from-this-test-alone",
      ],
    },
    interpretation_contract: {
      mode: "complete-block-only",
      interpretation_allowed_before_all_51_terminal: false,
      incomplete_block_disposition: "freeze-without-comparative-claim",
      unit_of_analysis: "task-specific-model-effort-cell",
      cross_model_pooling_allowed: false,
      reliability_interpretation_allowed: false,
    },
    exposure_evidence_contract: {
      scope: "generator-invocation-only",
      evidence: "generation_attestation",
      historical_task_exposure: "unknown-not-asserted",
      prior_task_exposure_claim_made: false,
    },
    lock_manifest: {
      task_set_sha256: taskSetSha256,
      schedule_sha256: scheduleSha256,
      codex_catalog_snapshot_contract_sha256: sha256(JSON.stringify(snapshot)),
    },
    skill_lock_contract: {
      source_commit: "c".repeat(40),
      source_tree_sha256: "d".repeat(64),
      skill_tree_sha256: "e".repeat(64),
    },
    cells,
  };
  const lockedPath = join(root, "RUN-MATRIX.locked.json");
  writeFileSync(lockedPath, JSON.stringify(locked), "utf8");
  const planBytes = readFileSync(lockedPath);
  const receipt = {
    schema_version: "0.2",
    status: "PREREGISTERED_PROVIDER_ZERO",
    binding: "exact-plan-file-bytes-sha256",
    plan_sha256: sha256(planBytes),
    plan_bytes: planBytes.length,
    receipt_ref: "PREREGISTRATION.receipt.json",
    experiment_id: locked.experiment_id,
    scheduled_cells: 51,
    task_set_sha256: taskSetSha256,
    schedule_sha256: scheduleSha256,
    provider_calls: 0,
    model_calls: 0,
    browser_calls: 0,
    network_calls: 0,
    cursor_calls: 0,
    claude_calls: 0,
  };
  const receiptPath = join(root, "PREREGISTRATION.receipt.json");
  writeFileSync(receiptPath, JSON.stringify(receipt), "utf8");
  const receiptBytes = readFileSync(receiptPath);
  writeFileSync(join(root, "matrix-state.json"), JSON.stringify({
    ...baseState,
    schema_version: "0.3",
    experiment_id: locked.experiment_id,
    status: "prepared",
    scheduled_cells: 51,
    prepared_cells: 51,
    locked_plan_sha256: sha256(readFileSync(lockedPath)),
    preregistration_plan_sha256: receipt.plan_sha256,
    preregistration_receipt_sha256: sha256(receiptBytes),
    task_set_sha256: taskSetSha256,
    schedule_sha256: scheduleSha256,
    cells: cells.map((cell) => ({
      id: cell.id,
      status: "prepared",
      workspace: join(root, cell.id),
    })),
  }), "utf8");
  return locked;
}

describe("prepared matrix admission audit", () => {
  it("binds admission to the exact locked-plan bytes captured during preparation", () => {
    const root = join(mkdtempSync(join(tmpdir(), "omd-prepared-plan-sha-")), "matrix");
    prepareRunMatrix(plan(root));
    const lockedPath = join(root, "RUN-MATRIX.locked.json");
    const state = JSON.parse(readFileSync(join(root, "matrix-state.json"), "utf8"));
    expect(state.locked_plan_sha256).toBe(sha256(readFileSync(lockedPath)));

    const locked = JSON.parse(readFileSync(lockedPath, "utf8"));
    locked.status = "tampered-after-preparation";
    writeFileSync(lockedPath, JSON.stringify(locked), "utf8");
    expect(() => auditPreparedMatrixAdmission(root))
      .toThrow("prepared-matrix-admission:locked-plan-sha256-drift");
  });

  it("proves a normalized provider-zero root and rejects cell-contract drift", () => {
    const root = join(mkdtempSync(join(tmpdir(), "omd-prepared-admission-")), "matrix");
    prepareRunMatrix(plan(root));
    expect(auditPreparedMatrixAdmission(root)).toMatchObject({
      status: "PREPARED_PROVIDER_ZERO_EXECUTION_DEFERRED",
      provider_calls: 0,
      model_exposures: 0,
      scheduled_cells: 1,
      prepared_cells: 1,
      normalization: {
        cell_contract: true,
        task_prompt_sha256: true,
        starter_sha256: true,
        objective_evaluator: true,
      },
      execution_admission: {
        allowed: false,
        execution_artifacts_absent: true,
      },
    });

    const cellPath = join(root, "control-r1/.benchmark/matrix-cell.json");
    const cell = JSON.parse(readFileSync(cellPath, "utf8"));
    cell.runtime = "cursor";
    writeFileSync(cellPath, JSON.stringify(cell), "utf8");
    expect(() => auditPreparedMatrixAdmission(root)).toThrow(
      "prepared-matrix-admission:cell-contract-drift:control-r1:runtime",
    );
  });

  it("attests a required provider-sealed reflow artifact and rejects tampering", () => {
    const root = join(mkdtempSync(join(tmpdir(), "omd-prepared-sealed-")), "matrix");
    const sealedPlan = plan(root);
    sealedPlan.status = "locked-diagnostic-only";
    sealedPlan.cells[0] = {
      ...sealedPlan.cells[0],
      id: "sealed-r1",
      task_id: "abyssal-sediment-core-custody-v0.1",
      variant_id: "omd-portable",
      system_id: "omd-apply-current",
    };
    prepareRunMatrix(sealedPlan);
    const admission = auditPreparedMatrixAdmission(root);
    expect(admission.cells[0].deterministic_reflow).toMatchObject({
      mode: "provider-sealed-source-contract",
      provider_mutable: false,
      attested: true,
    });
    expect(admission.normalization.deterministic_reflow).toBe(true);

    const artifactPath = join(root, "sealed-r1/.omd/reflow-closure.json");
    writeFileSync(artifactPath, `${readFileSync(artifactPath, "utf8")}\n`);
    expect(() => auditPreparedMatrixAdmission(root)).toThrow(
      "prepared-matrix-admission:deterministic-reflow-artifact-drift:sealed-r1",
    );
  });

  it("attests schema 0.2 baseline gate coverage and rejects coverage drift", () => {
    const root = join(mkdtempSync(join(tmpdir(), "omd-prepared-debt-coverage-")), "matrix");
    const sealedPlan = plan(root);
    sealedPlan.status = "locked-diagnostic-only";
    sealedPlan.cells[0] = {
      ...sealedPlan.cells[0],
      id: "coverage-r1",
      task_id: "meteorite-section-loan-v0.1",
      variant_id: "omd-portable",
      system_id: "omd-apply-current",
    };
    prepareRunMatrix(sealedPlan);
    const admission = auditPreparedMatrixAdmission(root);
    expect(admission.cells[0].deterministic_reflow).toMatchObject({
      mode: "provider-sealed-source-contract",
      provider_mutable: false,
      baseline_critical_gate_coverage: {
        failed_critical_gates: ["accessibility", "responsive"],
        covered_critical_gates: ["accessibility", "responsive"],
        complete: true,
      },
      attested: true,
    });

    const manifestPath = join(root, "coverage-r1/.benchmark/manifest.json");
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    manifest.deterministic_reflow.baseline_critical_gate_coverage.covered_critical_gates = ["responsive"];
    writeFileSync(manifestPath, JSON.stringify(manifest), "utf8");
    expect(() => auditPreparedMatrixAdmission(root)).toThrow(
      "prepared-matrix-admission:deterministic-reflow-debt-coverage-drift:coverage-r1",
    );
  });

  it("admits locked cross-task reliability while preserving task-specific hashes", () => {
    const root = join(mkdtempSync(join(tmpdir(), "omd-prepared-reliability-")), "matrix");
    const reliabilityPlan = {
      ...plan(root),
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.2",
      product_version: "fixture",
      execution_purpose: "cross-task-reliability-fixture",
      family: "skill",
      status: "locked-diagnostic-only",
      control_contract: {
        comparison_mode: "native-capability",
        effort_semantics: "runtime-native-ordinal-not-cross-provider-equivalent",
        temperature_policy: "runtime-default-frozen",
        timeout_seconds: 20,
        max_concurrency: 1,
        latency_comparison: "descriptive-only",
        retry_policy: "none-primary",
        timeout_policy: "count-as-valid-failure",
        infrastructure_policy: "retain-freeze-and-repreregister",
        task_order_policy: "fixed-preregistered",
        admission_normalization_policy: "cross-task-reliability",
        token_budget: {
          mode: "observed-only",
          limit_tokens: null,
          usage_required: true,
          account_components: ["input", "cached_input", "output", "reasoning_output"],
          cached_input_separate: true,
          cost_policy: "provider-reported-or-pinned-price-equivalent",
        },
        step_budget: { mode: "observed-only", limit_steps: null },
      },
      task_lock_contract: {
        tasks: [
          {
            task_id: "orbital-optics-transfer-v0.1",
            task_tree_sha256: "9d5c2773344b14b064275b8748d49ad4b5c7dbe527d3d1dbdad2d030d5d75fd8",
            prompt_sha256: "579166df05a6ce574deddb63be05b20fe6e20b19dc45be7698d7832eb894f0a1",
            starter_sha256: "9bc0699e6a21031d805b4bc0a81e5300fd0c461780b156ea7ad5672d897354d5",
            baseline_evidence_sha256: "21deeeda8381833c071160aceaefc1e842bf02a7fe7de9833a3a7a4a5e41aea6",
            source_contract_sha256: "3d5259f353cd2a44ea80139d7ee940d49fb26da614416f6bc0a1f52c789ccc9d",
          },
          {
            task_id: "seed-vault-accession-v0.1",
            task_tree_sha256: "a8884db39170445b429ba24892600e96d5a6e59ffa92d79defa92dbe855ac69c",
            prompt_sha256: "61f5ddf2e9bfe5bdfcdd923e6a8218063001ee2fa445f66121da7ddc9e282922",
            starter_sha256: "581c61546c93eaa05cb6b5cf67e22f2c76cf61c7cfc1d1703329b924dfdacea9",
            baseline_evidence_sha256: "8b928e0f078f7ac170cc403fde3878b27953d6b84cd3d9ef87779268c69f6480",
            source_contract_sha256: "f4c14eb9de8ed9f4a9e02c5ac92c6b3210193c841b7dfc59adb4cdb0a3fcbd6b",
          },
        ],
      },
      cells: [
        {
          ...plan(root).cells[0],
          id: "orbital-r1",
          task_id: "orbital-optics-transfer-v0.1",
          variant_id: "omd-portable",
          system_id: "omd-apply-current",
        },
        {
          ...plan(root).cells[0],
          id: "seed-r1",
          task_id: "seed-vault-accession-v0.1",
          variant_id: "omd-portable",
          system_id: "omd-apply-current",
        },
      ],
    };
    prepareRunMatrix(reliabilityPlan);
    const admission = auditPreparedMatrixAdmission(root);
    expect(admission).toMatchObject({
      status: "PREPARED_PROVIDER_ZERO",
      normalization_policy: "cross-task-reliability",
      normalization: {
        task_id: false,
        task_id_distinct: true,
        task_lock_attested: true,
        skill_lock_attested: true,
        deterministic_reflow: false,
        deterministic_reflow_contract: true,
      },
      execution_admission: { allowed: true },
    });

    const lockedPath = join(root, "RUN-MATRIX.locked.json");
    const locked = JSON.parse(readFileSync(lockedPath, "utf8"));
    locked.task_lock_contract.tasks[1].starter_sha256 = "0".repeat(64);
    writeLockedPlan(lockedPath, locked);
    expect(() => auditPreparedMatrixAdmission(root)).toThrow(
      "prepared-matrix-admission:normalization-mismatch",
    );
  });

  it("rejects a declared skill lock that does not match the installed effective skill", () => {
    const root = join(mkdtempSync(join(tmpdir(), "omd-prepared-skill-lock-")), "matrix");
    const reliabilityPlan = {
      ...plan(root),
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.2",
      product_version: "fixture",
      execution_purpose: "skill-lock-fixture",
      family: "skill",
      status: "locked-diagnostic-only",
      control_contract: {
        comparison_mode: "native-capability",
        effort_semantics: "runtime-native-ordinal-not-cross-provider-equivalent",
        temperature_policy: "runtime-default-frozen",
        timeout_seconds: 20,
        max_concurrency: 1,
        latency_comparison: "descriptive-only",
        retry_policy: "none-primary",
        timeout_policy: "count-as-valid-failure",
        infrastructure_policy: "retain-freeze-and-repreregister",
        task_order_policy: "fixed-preregistered",
        admission_normalization_policy: "cross-task-reliability",
        token_budget: {
          mode: "observed-only",
          limit_tokens: null,
          usage_required: true,
          account_components: ["input", "cached_input", "output", "reasoning_output"],
          cached_input_separate: true,
          cost_policy: "provider-reported-or-pinned-price-equivalent",
        },
        step_budget: { mode: "observed-only", limit_steps: null },
      },
      skill_lock_contract: {
        source_commit: "0".repeat(40),
        skill_tree_sha256: "0".repeat(64),
      },
      task_lock_contract: {
        tasks: ["orbital-optics-transfer-v0.1", "seed-vault-accession-v0.1"].map((task_id) => ({
          task_id,
          task_tree_sha256: "1".repeat(64),
          prompt_sha256: "1".repeat(64),
          starter_sha256: "1".repeat(64),
          baseline_evidence_sha256: "1".repeat(64),
          source_contract_sha256: "1".repeat(64),
        })),
      },
      cells: [
        ["orbital-r1", "orbital-optics-transfer-v0.1"],
        ["seed-r1", "seed-vault-accession-v0.1"],
      ].map(([id, task_id]) => ({
        ...plan(root).cells[0], id, task_id,
        variant_id: "omd-portable", system_id: "omd-apply-current",
      })),
    };
    prepareRunMatrix(reliabilityPlan);
    const lockedPath = join(root, "RUN-MATRIX.locked.json");
    const locked = JSON.parse(readFileSync(lockedPath, "utf8"));
    for (const taskLock of locked.task_lock_contract.tasks) {
      const cell = locked.cells.find((entry) => entry.task_id === taskLock.task_id);
      const matrixCell = JSON.parse(readFileSync(
        join(root, cell.id, ".benchmark/matrix-cell.json"), "utf8",
      ));
      const manifest = JSON.parse(readFileSync(
        join(root, cell.id, ".benchmark/manifest.json"), "utf8",
      ));
      taskLock.prompt_sha256 = matrixCell.task_prompt_sha256;
      taskLock.starter_sha256 = matrixCell.starter_sha256;
      taskLock.baseline_evidence_sha256 = manifest.deterministic_reflow.baseline_critical_gate_coverage.sha256;
      taskLock.source_contract_sha256 = manifest.deterministic_reflow.source_contract_sha256;
    }
    writeLockedPlan(lockedPath, locked);

    expect(() => auditPreparedMatrixAdmission(root)).toThrow(
      "prepared-matrix-admission:normalization-mismatch",
    );
  });

  it("admits paired systems across fresh tasks without requiring identical skill artifacts", () => {
    const root = join(mkdtempSync(join(tmpdir(), "omd-prepared-paired-")), "matrix");
    const pairedPlan = {
      ...plan(root),
      schema_version: "0.3",
      suite_version: "ui-resolve-v0.2",
      product_version: "fixture",
      execution_purpose: "paired-cross-task-comparison-fixture",
      family: "skill",
      status: "locked-diagnostic-only",
      control_contract: {
        comparison_mode: "native-capability",
        effort_semantics: "runtime-native-ordinal-not-cross-provider-equivalent",
        temperature_policy: "runtime-default-frozen",
        timeout_seconds: 20,
        max_concurrency: 1,
        latency_comparison: "descriptive-only",
        retry_policy: "none-primary",
        timeout_policy: "count-as-valid-failure",
        infrastructure_policy: "retain-freeze-and-repreregister",
        task_order_policy: "fixed-preregistered",
        admission_normalization_policy: "paired-cross-task-comparison",
        token_budget: {
          mode: "observed-only",
          limit_tokens: null,
          usage_required: true,
          account_components: ["input", "cached_input", "output", "reasoning_output"],
          cached_input_separate: true,
          cost_policy: "provider-reported-or-pinned-price-equivalent",
        },
        step_budget: { mode: "observed-only", limit_steps: null },
      },
      task_lock_contract: {
        tasks: ["cartography-sheet-transfer-v0.1", "numismatics-tray-accession-v0.1"].map((task_id) => ({
          task_id,
          task_tree_sha256: "1".repeat(64),
          prompt_sha256: "1".repeat(64),
          starter_sha256: "1".repeat(64),
          baseline_evidence_sha256: "1".repeat(64),
          source_contract_sha256: "1".repeat(64),
        })),
      },
      cells: [
        ["cartography-a", "cartography-sheet-transfer-v0.1", "raw-design-md", "arm-a"],
        ["cartography-b", "cartography-sheet-transfer-v0.1", "omd-portable", "arm-b"],
        ["numismatics-b", "numismatics-tray-accession-v0.1", "omd-portable", "arm-b"],
        ["numismatics-a", "numismatics-tray-accession-v0.1", "raw-design-md", "arm-a"],
      ].map(([id, task_id, variant_id, system_id]) => ({
        ...plan(root).cells[0], id, task_id, variant_id, system_id,
      })),
    };
    prepareRunMatrix(pairedPlan);

    const lockedPath = join(root, "RUN-MATRIX.locked.json");
    const locked = JSON.parse(readFileSync(lockedPath, "utf8"));
    for (const taskLock of locked.task_lock_contract.tasks) {
      const cells = locked.cells.filter((cell) => cell.task_id === taskLock.task_id);
      const matrixCell = JSON.parse(readFileSync(
        join(root, cells[0].id, ".benchmark/matrix-cell.json"), "utf8",
      ));
      const omdCell = cells.find((cell) => cell.variant_id === "omd-portable");
      const manifest = JSON.parse(readFileSync(
        join(root, omdCell.id, ".benchmark/manifest.json"), "utf8",
      ));
      taskLock.prompt_sha256 = matrixCell.task_prompt_sha256;
      taskLock.starter_sha256 = matrixCell.starter_sha256;
      taskLock.baseline_evidence_sha256 = manifest.deterministic_reflow.baseline_critical_gate_coverage.sha256;
      taskLock.source_contract_sha256 = manifest.deterministic_reflow.source_contract_sha256;
    }
    writeLockedPlan(lockedPath, locked);

    expect(auditPreparedMatrixAdmission(root)).toMatchObject({
      status: "PREPARED_PROVIDER_ZERO",
      normalization_policy: "paired-cross-task-comparison",
      normalization: {
        variant_id: false,
        system_id: false,
        skill_sha256: false,
        paired_task_contracts: true,
        paired_arm_rotation: true,
        task_lock_attested: true,
        complete_block_task_tree_authority: false,
      },
      execution_admission: { allowed: true },
    });
  });

  it("admits repeated trials across multiple locked tasks and fails closed on normalization drift", () => {
    const root = join(mkdtempSync(join(tmpdir(), "omd-prepared-repeated-")), "matrix");
    prepareRunMatrix(repeatedReliabilityPlan(root));

    expect(auditPreparedMatrixAdmission(root)).toMatchObject({
      status: "PREPARED_PROVIDER_ZERO",
      normalization_policy: "multi-task-repeated-reliability",
      trials: [1, 2],
      normalization: {
        task_id: false,
        task_id_distinct: false,
        task_prompt_sha256: false,
        starter_sha256: false,
        variant_id: true,
        system_id: true,
        runtime: true,
        model_id: true,
        effort: true,
        timeout_seconds: true,
        skill_sha256: true,
        objective_evaluator: true,
        deterministic_reflow_contract: true,
        task_lock_attested: true,
        task_lock_exact_unique_order: true,
        repeated_task_count_at_least_two: true,
        repeated_trial_sets_identical: true,
        repeated_within_task_contracts: true,
      },
      execution_admission: { allowed: true },
    });

    const lockedPath = join(root, "RUN-MATRIX.locked.json");
    const cellPath = (id) => join(root, id, ".benchmark/matrix-cell.json");
    const manifestPath = (id) => join(root, id, ".benchmark/manifest.json");
    const scenarios = [
      {
        name: "unequal trial sets",
        mutate: () => [
          mutateJson(lockedPath, (locked) => {
            locked.cells.find((cell) => cell.id === "seed-r2").trial_index = 3;
          }),
          mutateJson(cellPath("seed-r2"), (cell) => { cell.trial_index = 3; }),
        ],
      },
      {
        name: "variant drift",
        mutate: () => [
          mutateJson(lockedPath, (locked) => {
            locked.cells.find((cell) => cell.id === "seed-r2").variant_id = "omd-portable-alt";
          }),
          mutateJson(cellPath("seed-r2"), (cell) => { cell.variant_id = "omd-portable-alt"; }),
          mutateJson(manifestPath("seed-r2"), (manifest) => {
            manifest.variant.id = "omd-portable-alt";
          }),
        ],
      },
      {
        name: "system drift",
        mutate: () => [
          mutateJson(lockedPath, (locked) => {
            locked.cells.find((cell) => cell.id === "seed-r2").system_id = "other-system";
          }),
          mutateJson(cellPath("seed-r2"), (cell) => { cell.system_id = "other-system"; }),
        ],
      },
      {
        name: "runtime drift",
        mutate: () => [
          mutateJson(lockedPath, (locked) => {
            locked.cells.find((cell) => cell.id === "seed-r2").runtime = "cursor";
          }),
          mutateJson(cellPath("seed-r2"), (cell) => { cell.runtime = "cursor"; }),
          mutateJson(manifestPath("seed-r2"), (manifest) => { manifest.runtime_target = "cursor"; }),
        ],
      },
      {
        name: "model drift",
        mutate: () => [
          mutateJson(lockedPath, (locked) => {
            locked.cells.find((cell) => cell.id === "seed-r2").model_id = "gpt-other";
          }),
          mutateJson(cellPath("seed-r2"), (cell) => { cell.model_id = "gpt-other"; }),
        ],
      },
      {
        name: "effort drift",
        mutate: () => [
          mutateJson(lockedPath, (locked) => {
            locked.cells.find((cell) => cell.id === "seed-r2").effort = "low";
          }),
          mutateJson(cellPath("seed-r2"), (cell) => { cell.effort = "low"; }),
        ],
      },
      {
        name: "timeout drift",
        mutate: () => [
          mutateJson(lockedPath, (locked) => {
            locked.cells.find((cell) => cell.id === "seed-r2").timeout_seconds = 21;
          }),
          mutateJson(cellPath("seed-r2"), (cell) => { cell.timeout_seconds = 21; }),
        ],
      },
      {
        name: "skill drift",
        mutate: () => [
          mutateJson(cellPath("seed-r2"), (cell) => { cell.skill_sha256 = "f".repeat(64); }),
        ],
      },
      {
        name: "evaluator drift",
        error: "objective-methodology-drift",
        mutate: () => [
          mutateJson(cellPath("seed-r2"), (cell) => {
            cell.objective_evaluator = { ...cell.objective_evaluator, epoch: "drift" };
          }),
        ],
      },
      {
        name: "within-task prompt drift",
        mutate: () => [
          mutateJson(cellPath("seed-r2"), (cell) => {
            cell.task_prompt_sha256 = "f".repeat(64);
          }),
        ],
      },
      {
        name: "within-task starter drift",
        mutate: () => [
          mutateJson(cellPath("seed-r2"), (cell) => { cell.starter_sha256 = "f".repeat(64); }),
        ],
      },
      {
        name: "source contract shape drift",
        mutate: () => [
          mutateJson(manifestPath("seed-r2"), (manifest) => {
            manifest.deterministic_reflow.baseline_critical_gate_coverage.failed_critical_gates
              = ["accessibility", "responsive", "copy"];
          }),
        ],
      },
      {
        name: "duplicate task lock",
        mutate: () => [
          mutateJson(lockedPath, (locked) => {
            locked.task_lock_contract.tasks.push({ ...locked.task_lock_contract.tasks[0] });
          }),
        ],
      },
    ];

    for (const scenario of scenarios) {
      const restorers = scenario.mutate();
      try {
        expect(
          () => auditPreparedMatrixAdmission(root),
          scenario.name,
        ).toThrow(scenario.error ?? "prepared-matrix-admission:normalization-mismatch");
      } finally {
        for (const restore of restorers.reverse()) restore();
      }
    }
  });

  it("admits an exact provider-zero 51-cell complete effort block and rejects pair loss", () => {
    const root = join(mkdtempSync(join(tmpdir(), "omd-prepared-effort-block-")), "matrix");
    prepareCompleteBlockEffortFixture(root);

    expect(auditPreparedMatrixAdmission(root)).toMatchObject({
      status: "PREPARATION_ONLY_PROVIDER_ZERO_RUNTIME_ADMISSION_REQUIRED",
      scheduled_cells: 51,
      prepared_cells: 51,
      normalization_policy: "complete-block-effort-scaling",
      trials: [1],
      effort_sweep_contract: {
        required_cells: 51,
        tasks: 3,
        trials_per_task_pair: 1,
        complete_block_required: true,
        reliability_metric: null,
      },
      provider_routing_contract: {
        cursor_allowed: false,
        allowed_runtime: "codex",
        fail_closed: true,
      },
      normalization: {
        variant_id: true,
        system_id: true,
        runtime: true,
        skill_sha256: true,
        source_commit: true,
        task_lock_attested: true,
        skill_lock_attested: true,
        complete_block_task_count_three: true,
        complete_block_single_trial: true,
        complete_block_exact_pair_expansion: true,
        complete_block_within_task_contracts: true,
        complete_block_task_tree_authority: true,
      },
      task_set_sha256: expect.stringMatching(/^[a-f0-9]{64}$/),
      schedule_sha256: expect.stringMatching(/^[a-f0-9]{64}$/),
      interpretation_contract: {
        mode: "complete-block-only",
        interpretation_allowed_before_all_51_terminal: false,
      },
      exposure_evidence_contract: {
        scope: "generator-invocation-only",
        historical_task_exposure: "unknown-not-asserted",
      },
      execution_admission: {
        allowed: false,
        preparation_only: true,
        runtime_admission_required: true,
        reason: "immutable-codex-runtime-admission-required",
      },
    });

    const lockedPath = join(root, "RUN-MATRIX.locked.json");
    const restore = mutateJson(lockedPath, (locked) => {
      const finalCell = locked.cells.at(-1);
      finalCell.model_id = "gpt-5.6-sol";
      finalCell.effort = "max";
    });
    try {
      expect(() => auditPreparedMatrixAdmission(root)).toThrow("exact model-effort pair set");
    } finally {
      restore();
    }

    const restoreOrder = mutateJson(lockedPath, (locked) => {
      [locked.cells[0], locked.cells[3]] = [locked.cells[3], locked.cells[0]];
    });
    try {
      expect(() => auditPreparedMatrixAdmission(root)).toThrow("exact ordered schedule blueprint");
    } finally {
      restoreOrder();
    }

    const preparedPlan = JSON.parse(readFileSync(lockedPath, "utf8"));
    const firstCellPath = join(root, preparedPlan.cells[0].id, ".benchmark/matrix-cell.json");
    const restoreTree = mutateJson(firstCellPath, (cell) => {
      cell.observed_task_tree_sha256 = "0".repeat(64);
    });
    try {
      expect(() => auditPreparedMatrixAdmission(root)).toThrow("task-tree-authority-drift");
    } finally {
      restoreTree();
    }

    const firstManifestPath = join(
      root,
      preparedPlan.cells[0].id,
      ".benchmark/manifest.json",
    );
    const restoreObservation = mutateJson(firstManifestPath, (manifest) => {
      manifest.task.source_observation.working_tree.sha256 = "0".repeat(64);
    });
    try {
      expect(() => auditPreparedMatrixAdmission(root)).toThrow(
        "independent-task-source-drift",
      );
    } finally {
      restoreObservation();
    }

    const preparedAuthPath = join(root, preparedPlan.cells[0].id, ".codex/auth.json");
    const preparedAuthBytes = readFileSync(preparedAuthPath);
    writeFileSync(preparedAuthPath, '{"tampered":true}\n');
    try {
      expect(() => auditPreparedMatrixAdmission(root)).toThrow(
        "isolated-auth-snapshot-drift",
      );
    } finally {
      writeFileSync(preparedAuthPath, preparedAuthBytes);
    }

    const restoreStatus = mutateJson(lockedPath, (locked) => {
      locked.status = "tampered-but-otherwise-valid";
    });
    try {
      expect(() => auditPreparedMatrixAdmission(root)).toThrow(
        "preregistration receipt does not bind exact plan bytes",
      );
    } finally {
      restoreStatus();
    }
  });
});

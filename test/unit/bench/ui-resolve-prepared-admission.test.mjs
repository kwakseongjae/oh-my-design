import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { prepareRunMatrix } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-run-matrix.mjs";
import { auditPreparedMatrixAdmission } from "../../../benchmarks/ui-resolve-bench/scripts/audit-prepared-matrix-admission.mjs";

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
  return () => writeFileSync(path, original, "utf8");
}

describe("prepared matrix admission audit", () => {
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
    writeFileSync(lockedPath, JSON.stringify(locked), "utf8");
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
    writeFileSync(lockedPath, JSON.stringify(locked), "utf8");

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
    writeFileSync(lockedPath, JSON.stringify(locked), "utf8");

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
});

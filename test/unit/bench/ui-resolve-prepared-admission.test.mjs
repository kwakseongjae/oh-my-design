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
});

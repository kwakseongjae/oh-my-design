import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  validateOmdReflowBaselineCoverage,
  validateOmdReflowBaselineEvidence,
  validateTaskContract,
} from "../../../benchmarks/ui-resolve-bench/scripts/task-contract.mjs";
import { currentObjectiveMethodology } from "../../../benchmarks/ui-resolve-bench/scripts/objective-methodology-contract.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const tasksRoot = resolve(repoRoot, "benchmarks/ui-resolve-bench/tasks");

function readTask(id) {
  return JSON.parse(readFileSync(resolve(tasksRoot, id, "task.json"), "utf8"));
}

describe("task contract mutation coverage", () => {
  it("admits all current public task contracts with exact directory identity", () => {
    const taskIds = readdirSync(tasksRoot).sort();
    expect(taskIds).toHaveLength(123);
    for (const id of taskIds) expect(validateTaskContract(readTask(id), { expectedId: id })).toBeTruthy();
  });

  it("kills identity, network, entry, viewport, hook, and evidence mutations", () => {
    const original = readTask("investigational-product-depot-release-v0.1");
    const mutations = [
      [{ ...original, id: "bad id" }, /versioned kebab-case/],
      [{ ...original, version: "next" }, /semver/],
      [{ ...original, network: "enabled" }, /network must be disabled/],
      [{ ...original, entry: "../secret.html" }, /repository-relative HTML/],
      [{ ...original, viewports: [...original.viewports, original.viewports[0]] }, /viewport names must be unique/],
      [{ ...original, viewports: [{ ...original.viewports[0], width: 0 }] }, /width must be positive/],
      [{ ...original, protected_hook_counts: { ...original.protected_hook_counts, "[data-bench='extra']": 1 } }, /match protected_selectors exactly/],
      [{ ...original, protected_hook_counts: { ...original.protected_hook_counts, "[data-bench='kit-view-option']": 0 } }, /invalid expectation/],
      [{ ...original, protected_unknown_patterns: [] }, /protected_unknown_patterns/],
      [{ ...original, design_oracle: null }, /design_oracle is required/],
    ];
    for (const [mutant, error] of mutations) expect(() => validateTaskContract(mutant)).toThrow(error);
    expect(() => validateTaskContract(original, { expectedId: "different-v0.1" })).toThrow(/does not match directory/);
  });

  it("admits only structured provider-sealed OmD reflow contracts", () => {
    const original = readTask("investigational-product-depot-release-v0.1");
    const contract = {
      schema_version: "0.1",
      structured_css_only: true,
      product_path: original.entry,
      carriers: [{ id: "carrier" }],
      row_groups: [{ id: "row" }],
      invariants: { same_row_count: true },
      acceptance_debt_ledger: [{
        id: "fit",
        static_guardrail: {
          required_css_declarations: [{
            selector: ".ledger",
            property: "grid-template-columns",
            value: "1fr",
            value_contract: "any-value",
          }],
        },
      }],
    };
    expect(validateTaskContract({ ...original, omd_reflow_source_contract: contract })).toBeTruthy();
    expect(() => validateTaskContract({
      ...original,
      omd_reflow_source_contract: {
        ...contract,
        acceptance_debt_ledger: [{ id: "fit", static_guardrail: { required_css_declarations: [] } }],
      },
    })).toThrow(/structured CSS declaration/);
    expect(() => validateTaskContract({
      ...original,
      omd_reflow_source_contract: { ...contract, product_path: "other.html" },
    })).toThrow(/must match task.entry/);
  });

  it("requires schema 0.2 to cover every failed baseline gate and contain nowrap carriers", () => {
    const original = readTask("investigational-product-depot-release-v0.1");
    const baselineBytes = Buffer.from(JSON.stringify({
      critical_gates: { task_contract: true, responsive: false, accessibility: false },
    }));
    const contract = {
      schema_version: "0.2",
      structured_css_only: true,
      product_path: original.entry,
      baseline_evidence: {
        path: "baseline-score.json",
        sha256: createHash("sha256").update(baselineBytes).digest("hex"),
      },
      critical_gate_debt_coverage: [
        { gate: "responsive", debt_ids: ["fit"] },
        { gate: "accessibility", debt_ids: ["contrast"] },
      ],
      carriers: [{
        id: "carrier",
        binds_row_groups: ["row"],
        containment_guardrail: {
          selector: ".decision > div",
          property: "min-width",
          value: "0",
          value_contract: "exact-value",
        },
      }],
      row_groups: [{ id: "row", decision: "comparison-scroll" }],
      invariants: { same_row_count: true },
      acceptance_debt_ledger: [
        {
          id: "fit",
          static_guardrail: {
            required_css_declarations: [{
              selector: ".ledger",
              property: "grid-template-columns",
              value: "1fr",
              value_contract: "any-value",
            }],
          },
        },
        {
          id: "contrast",
          static_guardrail: {
            required_css_declarations: [{
              selector: "header > p",
              property: "color",
              value: "var(--ink)",
              value_contract: "exact-value",
            }],
          },
        },
      ],
    };
    const task = { ...original, omd_reflow_source_contract: contract };
    expect(validateTaskContract(task)).toBeTruthy();
    expect(validateOmdReflowBaselineCoverage(task, {
      critical_gates: { task_contract: true, responsive: false, accessibility: false },
    })).toEqual({
      failed_critical_gates: ["accessibility", "responsive"],
      covered_critical_gates: ["accessibility", "responsive"],
      complete: true,
    });
    expect(validateOmdReflowBaselineEvidence(task, baselineBytes)).toEqual({
      failed_critical_gates: ["accessibility", "responsive"],
      covered_critical_gates: ["accessibility", "responsive"],
      complete: true,
      path: "baseline-score.json",
      sha256: contract.baseline_evidence.sha256,
    });
    expect(() => validateOmdReflowBaselineEvidence(task, Buffer.from("{}"))).toThrow(/hash mismatch/);
    expect(() => validateOmdReflowBaselineCoverage({
      ...task,
      omd_reflow_source_contract: {
        ...contract,
        critical_gate_debt_coverage: [{ gate: "responsive", debt_ids: ["fit"] }],
      },
    }, {
      critical_gates: { responsive: false, accessibility: false },
    })).toThrow(/critical gate debt coverage mismatch/);
    expect(() => validateTaskContract({
      ...task,
      omd_reflow_source_contract: {
        ...contract,
        carriers: [{ id: "carrier", binds_row_groups: ["row"] }],
      },
    })).toThrow(/containment_guardrail/);
  });

  it("binds every v18 baseline to a repository-local deterministic provenance receipt", () => {
    for (const id of [
      "pollen-slide-accession-v0.1",
      "seismic-core-dispatch-v0.1",
      "oral-history-reel-return-v0.1",
    ]) {
      const root = resolve(tasksRoot, id);
      const receipt = JSON.parse(readFileSync(resolve(root, "baseline-provenance.json"), "utf8"));
      const baselineBytes = readFileSync(resolve(root, "baseline-critical-gates.json"));
      const baseline = JSON.parse(baselineBytes);
      const taskBytes = readFileSync(resolve(root, "task.json"));
      const promptBytes = readFileSync(resolve(root, "PROMPT.md"));
      const hash = (value) => createHash("sha256").update(value).digest("hex");
      const methodology = currentObjectiveMethodology();
      expect(receipt).toMatchObject({
        schema_version: "0.1",
        kind: "provider-free-objective-score-deterministic-equivalent",
        task_id: id,
        variant_id: "raw-design-md",
        raw_score: {
          schema_version: methodology.score_schema_version,
          source_score_sha256: baseline.source_score_sha256,
          source_methodology: {
            evaluator_source_sha256: methodology.evaluator_source_sha256,
          },
        },
        expected: {
          deterministic_total: 75,
          deterministic_max: 85,
          failed_critical_gates: ["accessibility", "responsive"],
        },
        reproduction_contract: {
          provider_calls: 0,
          model_calls: 0,
          evaluator_sha_delta_disposition: "none",
        },
      });
      expect(receipt.methodology).toEqual(methodology);
      expect(receipt.inputs).toMatchObject({
        prompt_sha256: hash(promptBytes),
        baseline_evidence_sha256: hash(baselineBytes),
        task_contract_sha256: hash(taskBytes),
      });
      const projection = {
        schema_version: "0.2",
        task_id: receipt.task_id,
        variant_id: receipt.variant_id,
        source_score_sha256: baseline.source_score_sha256,
        baseline_evidence: baseline,
        inputs: receipt.inputs,
        source_methodology: receipt.raw_score.source_methodology,
        source_evaluator_repository: receipt.raw_score.source_evaluator_repository,
        source_contract_repository: receipt.raw_score.source_contract_repository,
        reproduction_methodology: receipt.methodology,
        expected: receipt.expected,
      };
      expect(receipt.repository_reproduction).toMatchObject({
        canonicalization: "sha256-json-stringify-repository-baseline-projection-v1",
        projection_sha256: hash(JSON.stringify(projection)),
        provider_calls: 0,
        model_calls: 0,
      });
      for (const source of [
        receipt.raw_score.source_evaluator_repository,
        receipt.raw_score.source_contract_repository,
      ]) {
        const sourceBytes = execFileSync("git", [
          "-C", repoRoot, "show", `${source.commit}:${source.path}`,
        ]);
        expect(hash(sourceBytes)).toBe(source.sha256);
      }
      for (const field of [
        receipt.raw_score.checks_sha256,
        receipt.raw_score.observations_sha256,
        receipt.methodology.evaluator_source_sha256,
        receipt.methodology.contract_source_sha256,
        receipt.baseline_manifest_sha256,
      ]) expect(field).toMatch(/^[a-f0-9]{64}$/);
    }
  });
});

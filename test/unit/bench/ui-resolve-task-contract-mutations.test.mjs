import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { validateTaskContract } from "../../../benchmarks/ui-resolve-bench/scripts/task-contract.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const tasksRoot = resolve(repoRoot, "benchmarks/ui-resolve-bench/tasks");

function readTask(id) {
  return JSON.parse(readFileSync(resolve(tasksRoot, id, "task.json"), "utf8"));
}

describe("task contract mutation coverage", () => {
  it("admits all current public task contracts with exact directory identity", () => {
    const taskIds = readdirSync(tasksRoot).sort();
    expect(taskIds).toHaveLength(82);
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
});

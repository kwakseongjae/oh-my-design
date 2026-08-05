import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { validateTaskContract } from "../../../benchmarks/ui-resolve-bench/scripts/task-contract.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const taskRoot = resolve(
  repoRoot,
  "benchmarks/ui-resolve-bench/tasks/investigational-product-depot-release-v0.1",
);
const reportRoot = resolve(
  repoRoot,
  "benchmarks/ui-resolve-bench/reports/investigational-product-depot-task-lock-1.9.679",
);

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function count(source, needle) {
  return source.split(needle).length - 1;
}

describe("investigational-product depot holdout", () => {
  it("locks a valid unseen task contract with exact evidence cardinality", () => {
    const task = readJson(resolve(taskRoot, "task.json"));
    expect(validateTaskContract(task)).toBe(task);
    expect(task).toMatchObject({
      id: "investigational-product-depot-release-v0.1",
      version: "0.1.0",
      track: "repair",
      grounding: "design-md",
      behavior_adapter: "onboarding-v1",
      network: "disabled",
    });
    expect(task.protected_hook_counts).toMatchObject({
      "[data-bench='product-kit-case']": 4,
      "[data-bench='product-kit-id']": 4,
      "[data-bench='temperature-log-id']": 6,
      "[data-bench='depot-lane-id']": 2,
      "[data-bench='kit-view-option']": 3,
    });
    expect(task.protected_known_patterns).toContain("4 kits · 6 logs · 2 depots");
    expect(task.protected_unknown_patterns.join(" ")).toContain("QA released");
    expect(task.protected_unknown_patterns.join(" ")).toContain("dispensation authorized");
  });

  it("keeps the starter behavior and evidence hooks observable", () => {
    const html = readFileSync(resolve(taskRoot, "starter/index.html"), "utf8");
    expect(count(html, "data-bench=\"product-kit-case\"")).toBe(4);
    expect(count(html, "data-bench=\"product-kit-id\"")).toBe(4);
    expect(count(html, "data-bench=\"temperature-log-id\"")).toBe(6);
    expect(count(html, "data-bench=\"depot-lane-id\"")).toBe(2);
    expect(count(html, "data-bench=\"kit-view-option\" data-view=")).toBe(3);
    expect(html).toContain("document.body.dataset.view=button.dataset.view");
    expect(html).toContain("toggle.setAttribute('aria-pressed'");
    expect(html).toContain("Enter a release review name.");
    expect(html).toContain("Saved ${value}.");
  });

  it("records the provider-zero failing baseline without making a comparison claim", () => {
    const baseline = readJson(resolve(reportRoot, "BASELINE.json"));
    expect(baseline).toMatchObject({
      status: "FROZEN_PROVIDER_ZERO_BASELINE",
      provider_calls: 0,
      model_exposures: 0,
      human_judgments: 0,
      deterministic: {
        score: 75,
        max_score: 85,
        automated_gate_pass: false,
      },
      preserved_contract: {
        protected_hooks_exact: true,
        unsupported_claims: 0,
        passive_text_scrollers: 0,
        keyboard_all_viewports: true,
      },
    });
    expect(baseline.failure_classes).toMatchObject({
      mobile_horizontal_overflow: true,
      narrow_320_horizontal_overflow: true,
      css_zoom_surrogate_200_horizontal_overflow: true,
      serious_color_contrast: true,
    });
    expect(baseline.claim_boundary).toContain("not a model or skill result");
  });
});

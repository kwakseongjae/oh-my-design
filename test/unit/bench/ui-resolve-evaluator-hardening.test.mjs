import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  evaluateAcknowledgementObservation,
  evaluateBillingObservation,
  evaluateChoiceObservation,
  evaluateFaqObservations,
  evaluateFilterObservation,
  evaluateFormObservation,
  evaluateFontOracle,
  evaluateKeyboardTraversal,
  evaluateProtectedHookCounts,
  evaluateToggleObservation,
  evaluateViewportGeometry,
  findUnsupportedClaims,
} from "../../../benchmarks/ui-resolve-bench/scripts/evaluate-run.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const taskPath = join(repoRoot, "benchmarks/ui-resolve-bench/tasks/pricing-conversion-v0.1/task.json");
const evaluatorPath = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/evaluate-run.mjs");
const task = JSON.parse(readFileSync(taskPath, "utf8"));

function validBillingObservation() {
  return {
    nodes: [
      { visible: true },
      { visible: true },
      { visible: true },
    ],
    initial: {
      prices: ["$0", "$18", "$32"],
      monthly_pressed: "true",
      annual_pressed: "false",
      body_period: "monthly",
    },
    annual: {
      prices: ["$0", "$14", "$26"],
      monthly_pressed: "false",
      annual_pressed: "true",
      body_period: "annual",
    },
    restored: {
      prices: ["$0", "$18", "$32"],
      monthly_pressed: "true",
      annual_pressed: "false",
      body_period: "monthly",
    },
  };
}

function faqEntry(controls) {
  return {
    controls,
    target_exists: true,
    button_visible: true,
    initial: { expanded: "false", hidden: true },
    opened: { expanded: "true", hidden: false },
    closed: { expanded: "false", hidden: true },
  };
}

function validKeyboardTraversal() {
  const expectedIds = ["0", "1", "2"];
  return {
    expected_count: expectedIds.length,
    expected_ids: expectedIds,
    visited_count: expectedIds.length,
    visited_ids: [...expectedIds],
    stalled: false,
    records: expectedIds.map((id) => ({
      id,
      matches_focus_visible: true,
      focus_style_delta: true,
      focus_visible: true,
      in_view: true,
    })),
  };
}

describe("UI-Resolve benchmark evaluator hardening", () => {
  it("requires exact monthly and annual prices for every plan and a full round trip", () => {
    const passing = evaluateBillingObservation(validBillingObservation(), task.billing_expectations);
    expect(Object.values(passing).every(Boolean)).toBe(true);

    const staleStudio = structuredClone(validBillingObservation());
    staleStudio.annual.prices[2] = "$32";
    expect(evaluateBillingObservation(staleStudio, task.billing_expectations).annual_exact).toBe(false);

    const neverRestored = structuredClone(validBillingObservation());
    neverRestored.restored = neverRestored.annual;
    expect(evaluateBillingObservation(neverRestored, task.billing_expectations).monthly_restored_exact).toBe(false);
  });

  it("requires every FAQ to open and close its own unique answer", () => {
    const passing = evaluateFaqObservations([faqEntry("answer-1"), faqEntry("answer-2")], 2);
    expect(Object.values(passing).every(Boolean)).toBe(true);

    const secondNeverCloses = faqEntry("answer-2");
    secondNeverCloses.closed = { expanded: "true", hidden: false };
    expect(evaluateFaqObservations([faqEntry("answer-1"), secondNeverCloses], 2).every_closes_again).toBe(false);

    expect(evaluateFaqObservations([faqEntry("answer-1")], 2).exact_count).toBe(false);
    expect(evaluateFaqObservations([faqEntry("answer-1"), faqEntry("answer-1")], 2).unique_targets).toBe(false);
    expect(Object.values(evaluateFaqObservations(null, 2)).every((value) => value === false)).toBe(true);
    expect(evaluateFaqObservations([{ controls: "answer-1" }], 1).every_opens).toBe(false);
  });

  it("fails closed when form observations or required nodes are absent", () => {
    expect(Object.values(evaluateFormObservation(null)).every((value) => value === false)).toBe(true);
    expect(Object.values(evaluateFormObservation({
      presence: { form: true, email: true, status: false },
      invalid: null,
      valid: null,
    })).every((value) => value === false)).toBe(true);

    const passing = evaluateFormObservation({
      presence: { form: true, email: true, status: true },
      invalid: { aria_invalid: "true", status: "Enter a complete email.", focused: true },
      valid: { aria_invalid: null, status: "Request received." },
    });
    expect(Object.values(passing).every(Boolean)).toBe(true);
  });

  it("rejects missing, extra, and hidden protected-hook mutants at every viewport", () => {
    const exactProtected = Object.fromEntries(
      Object.entries(task.protected_hook_counts).map(([selector, count]) => [selector, { total: count, visible: count }]),
    );
    const viewports = [
      { name: "desktop", protected: structuredClone(exactProtected) },
      { name: "narrow-320", protected: structuredClone(exactProtected) },
    ];
    expect(evaluateProtectedHookCounts(viewports, task.protected_hook_counts).exact).toBe(true);

    viewports[1].protected["[data-bench='price']"] = { total: 4, visible: 3 };
    const extraHiddenPrice = evaluateProtectedHookCounts(viewports, task.protected_hook_counts);
    expect(extraHiddenPrice.exact).toBe(false);
    expect(extraHiddenPrice.mismatches).toEqual([
      expect.objectContaining({ viewport: "narrow-320", expected: { total: 3, visible: 3 }, total: 4, visible: 3 }),
    ]);
  });

  it("calibrates onboarding choice, toggle, and generic form mutants", () => {
    const choice = {
      nodes: [
        { value: "founder", visible: true },
        { value: "designer", visible: true },
        { value: "engineer", visible: true },
      ],
      initial: {
        selected: "founder",
        body_value: "founder",
        pressed: { founder: "true", designer: "false", engineer: "false" },
      },
      selected: {
        selected: "designer",
        body_value: "designer",
        pressed: { founder: "false", designer: "true", engineer: "false" },
      },
      restored: {
        selected: "founder",
        body_value: "founder",
        pressed: { founder: "true", designer: "false", engineer: "false" },
      },
    };
    const expected = { values: ["founder", "designer", "engineer"], count: 3, initial: "founder", selected: "designer" };
    expect(Object.values(evaluateChoiceObservation(choice, expected)).every(Boolean)).toBe(true);
    const stalePressed = structuredClone(choice);
    stalePressed.selected.pressed.founder = "true";
    expect(evaluateChoiceObservation(stalePressed, expected).selection_exact).toBe(false);

    expect(Object.values(evaluateToggleObservation({ present: true, visible: true, initial: "false", enabled: "true", restored: "false" })).every(Boolean)).toBe(true);
    expect(evaluateToggleObservation({ present: true, visible: true, initial: "false", enabled: "false", restored: "false" }).turns_on).toBe(false);

    const genericForm = evaluateFormObservation({
      presence: { form: true, field: true, status: true },
      invalid: { aria_invalid: "true", status: "Enter a name.", focused: true },
      valid: { aria_invalid: "false", status: "Ready." },
    });
    expect(Object.values(genericForm).every(Boolean)).toBe(true);
  });

  it("calibrates dashboard filter and acknowledgement mutants", () => {
    const filter = {
      nodes: [
        { value: "all", visible: true },
        { value: "critical", visible: true },
        { value: "warning", visible: true },
      ],
      initial: {
        selected: "all",
        body_filter: "all",
        pressed: { all: "true", critical: "false", warning: "false" },
        visible_rows: 4,
      },
      filtered: {
        selected: "critical",
        body_filter: "critical",
        pressed: { all: "false", critical: "true", warning: "false" },
        visible_rows: 2,
      },
      restored: {
        selected: "all",
        body_filter: "all",
        pressed: { all: "true", critical: "false", warning: "false" },
        visible_rows: 4,
      },
    };
    const expected = { count: 3, initial: "all", selected: "critical", initial_visible_rows: 4, selected_visible_rows: 2 };
    expect(Object.values(evaluateFilterObservation(filter, expected)).every(Boolean)).toBe(true);
    const leakyFilter = structuredClone(filter);
    leakyFilter.filtered.visible_rows = 4;
    expect(evaluateFilterObservation(leakyFilter, expected).filtered_exact).toBe(false);

    const acknowledgement = {
      presence: { button: true, status: true },
      initial: { status: "Not acknowledged.", pressed: "false", disabled: false },
      acknowledged: { status: "Acknowledged.", pressed: "true", disabled: true },
    };
    expect(Object.values(evaluateAcknowledgementObservation(acknowledgement)).every(Boolean)).toBe(true);
    acknowledgement.acknowledged.status = acknowledgement.initial.status;
    expect(evaluateAcknowledgementObservation(acknowledgement).status_changes).toBe(false);
  });

  it("records unsupported claims from visible copy, accessible names, and metadata", () => {
    const sources = [
      { source: "text:p", text: "Coordinate releases with the fastest release platform." },
      { source: "aria-label:button", text: "Trusted by 20,000 teams" },
      { source: "meta:description", text: "Ship 10x faster with Relay." },
    ];
    const matches = findUnsupportedClaims(sources, task.protected_unknown_patterns);

    expect(matches.map((match) => match.source)).toEqual(expect.arrayContaining([
      "text:p",
      "aria-label:button",
      "meta:description",
    ]));
    expect(matches.every((match) => match.pattern && match.match && match.excerpt)).toBe(true);
    expect(findUnsupportedClaims([{ source: "text:p", text: "3 saved checklists" }], task.protected_unknown_patterns)).toEqual([]);
    expect(task.protected_unknown_selectors).toEqual(expect.arrayContaining([
      "blockquote",
      "[class*='testimonial' i]",
      "[class*='customer-logo' i]",
    ]));
  });

  it("fails clipped/overlapping geometry and incomplete keyboard traversal", () => {
    expect(evaluateViewportGeometry({
      scroll_width: 320,
      client_width: 320,
      clipped_controls: [],
      overlapping_controls: [],
    })).toEqual({
      no_horizontal_overflow: true,
      no_clipped_controls: true,
      no_overlapping_controls: true,
    });
    expect(evaluateViewportGeometry({
      scroll_width: 321.1,
      client_width: 320,
      clipped_controls: [{ text: "Choose Team" }],
      overlapping_controls: [{ first: "email", second: "submit" }],
    })).toEqual({
      no_horizontal_overflow: false,
      no_clipped_controls: false,
      no_overlapping_controls: false,
    });

    const skippedControl = evaluateKeyboardTraversal({
      expected_count: 3,
      expected_ids: ["0", "1", "2"],
      visited_count: 3,
      visited_ids: ["0", "1", "1"],
      stalled: true,
      records: validKeyboardTraversal().records,
    });
    expect(skippedControl.visits_every_control_once).toBe(false);
    expect(skippedControl.no_stall).toBe(false);

    expect(Object.values(evaluateKeyboardTraversal(validKeyboardTraversal())).every(Boolean)).toBe(true);

    const nullReplacement = validKeyboardTraversal();
    nullReplacement.visited_ids = ["0", null, "2"];
    nullReplacement.records[1].id = null;
    expect(evaluateKeyboardTraversal(nullReplacement).visits_every_control_once).toBe(false);

    const reordered = validKeyboardTraversal();
    reordered.visited_ids = ["1", "0", "2"];
    expect(evaluateKeyboardTraversal(reordered).visits_every_control_once).toBe(false);

    const ambientShadowOnly = validKeyboardTraversal();
    ambientShadowOnly.records[0] = {
      ...ambientShadowOnly.records[0],
      focus_visible: true,
      matches_focus_visible: true,
      focus_style_delta: false,
    };
    expect(evaluateKeyboardTraversal(ambientShadowOnly).focus_visible).toBe(false);

    expect(evaluateViewportGeometry(undefined)).toEqual({
      no_horizontal_overflow: false,
      no_clipped_controls: false,
      no_overlapping_controls: false,
    });
  });

  it("defines 320px and an explicitly labelled CSS-zoom surrogate without claiming reflow", () => {
    expect(task.viewports).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: "narrow-320", width: 320 }),
      expect.objectContaining({ width: 640, zoom: 2 }),
    ]));

    const evaluator = readFileSync(evaluatorPath, "utf8");
    expect(evaluator).toContain("css_zoom_surrogate_200_geometry");
    expect(evaluator).not.toContain("zoom_reflow_geometry");
    expect(evaluator).toContain("automated_gate_pass");
    expect(evaluator).not.toContain("provisional_ui_resolved");
    expect(evaluator).not.toContain("public_ui_resolved");
  });

  it("loads typography expectations from the task-specific oracle", () => {
    expect(evaluateFontOracle({
      body_font: "Arial, sans-serif",
      display_font: "Georgia, serif",
    }, task.design_oracle.font_family)).toEqual({ body: true, display: true });

    expect(evaluateFontOracle({
      body_font: "Inter, sans-serif",
      display_font: "Arial, sans-serif",
    }, task.design_oracle.font_family)).toEqual({ body: false, display: false });

    const evaluator = readFileSync(evaluatorPath, "utf8");
    expect(evaluator).not.toContain("/Arial/i");
    expect(evaluator).not.toContain("/Georgia/i");
  });
});

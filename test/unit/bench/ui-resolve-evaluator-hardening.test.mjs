import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  evaluateAcknowledgementObservation,
  evaluateBillingObservation,
  evaluateChoiceObservation,
  evaluateDecisionHierarchy,
  evaluateDesignObservation,
  evaluateFaqObservations,
  evaluateFilterObservation,
  evaluateFormObservation,
  evaluateFontOracle,
  focusViewportVisibility,
  evaluateKeyboardTraversal,
  evaluateLandmarkObservation,
  evaluateLocaleSwitchObservation,
  evaluateProtectedHookCounts,
  evaluateToggleObservation,
  evaluateViewportGeometry,
  findUnsupportedClaims,
} from "../../../benchmarks/ui-resolve-bench/scripts/evaluate-run.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const taskPath = join(repoRoot, "benchmarks/ui-resolve-bench/tasks/pricing-conversion-v0.1/task.json");
const localeTaskPath = join(repoRoot, "benchmarks/ui-resolve-bench/tasks/locale-cli-handoff-v0.1/task.json");
const incidentTaskPath = join(repoRoot, "benchmarks/ui-resolve-bench/tasks/incident-operations-v0.1/task.json");
const evaluatorPath = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/evaluate-run.mjs");
const task = JSON.parse(readFileSync(taskPath, "utf8"));
const localeTask = JSON.parse(readFileSync(localeTaskPath, "utf8"));
const incidentTask = JSON.parse(readFileSync(incidentTaskPath, "utf8"));

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
  it("uses task-owned landmark requirements instead of a universal nav rule", () => {
    const observation = { h1_count: 1, main_count: 1, nav_count: 0, footer_count: 1 };
    expect(evaluateLandmarkObservation(observation, {
      h1_count: { exact: 1 },
      main_count: { exact: 1 },
      nav_count: { min: 0 },
      footer_count: { min: 1 },
    })).toEqual({ h1_count: true, main_count: true, nav_count: true, footer_count: true });
    expect(evaluateLandmarkObservation(observation, { nav_count: { min: 1 } }).nav_count).toBe(false);
  });

  it("allows only task-owned live counts while retaining unsupported proof detection", () => {
    const patterns = ["\\b\\d[\\d,]*\\+?\\s+(?:customers|companies|teams|users|incidents)\\b"];
    const allowed = ["^(?:Showing all )?4 incidents(?: shown)?\\.?$"];
    expect(findUnsupportedClaims([{ source: "text:p", text: "Showing all 4 incidents." }], patterns, allowed)).toEqual([]);
    expect(findUnsupportedClaims([{ source: "text:p", text: "Trusted by 400 teams" }], patterns, allowed)).toHaveLength(1);
    expect(findUnsupportedClaims([{ source: "text:p", text: "Showing all 400 incidents." }], patterns, allowed)).toHaveLength(1);
  });

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

  it("calibrates five-locale navigation, terminology, protected facts, and handoff mutants", () => {
    const locales = localeTask.journey_oracle.locale_switch.locales;
    const texts = {
      ko: "코딩 에이전트 프로젝트 명령 npx northstar-ui@1.4 setup --agent claude-code 12 3 DESIGN.md",
      en: "coding agent repository command npx northstar-ui@1.4 setup --agent claude-code 12 3 DESIGN.md",
      ja: "コーディングエージェント プロジェクト コマンド npx northstar-ui@1.4 setup --agent claude-code 12 3 DESIGN.md",
      "zh-CN": "AI 编程助手 项目 代码仓库 npx northstar-ui@1.4 setup --agent claude-code 12 3 DESIGN.md",
      "zh-TW": "AI 程式助理 專案 程式碼儲存庫 npx northstar-ui@1.4 setup --agent claude-code 12 3 DESIGN.md",
    };
    const state = (locale) => ({
      locale,
      active: locale,
      body_locale: locale,
      root_lang: locale,
      visible_panels: [locale],
      pressed: Object.fromEntries(locales.map((candidate) => [candidate, String(candidate === locale)])),
    });
    const observation = {
      buttons: locales.map((locale) => ({ locale, visible: true })),
      panels: locales.map((locale) => ({ locale, lang: locale, text: texts[locale] })),
      initial: state("ko"),
      states: locales.map(state),
      restored: state("ko"),
      keyboard_tabs: {
        start_focus: "ko",
        forward: [...locales.slice(1), "ko"].map((locale) => ({
          focused: locale,
          ...state(locale),
        })),
        reverse: {
          focused: "zh-TW",
          ...state("zh-TW"),
        },
      },
      handoffs: locales.map((locale) => ({
        locale,
        action_present: true,
        action_visible: true,
        before: "",
        after: `after-${locale}`,
        clipboard_before: "",
        clipboard_after: "npx northstar-ui@1.4 setup --agent claude-code",
        copied_marker: null,
      })),
    };
    const passing = evaluateLocaleSwitchObservation(
      observation,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    );
    expect(Object.values(passing.navigation).every(Boolean)).toBe(true);
    expect(Object.values(passing.content).every(Boolean)).toBe(true);
    expect(Object.values(passing.handoff).every(Boolean)).toBe(true);

    const naturalAlternatives = structuredClone(observation);
    naturalAlternatives.panels.find((panel) => panel.locale === "en").text =
      naturalAlternatives.panels.find((panel) => panel.locale === "en").text
        .replace("coding agent", "coding assistant")
        .replace("repository", "project folder");
    naturalAlternatives.panels.find((panel) => panel.locale === "ja").text =
      naturalAlternatives.panels.find((panel) => panel.locale === "ja").text
        .replace("コーディングエージェント", "コーディングアシスタント");
    expect(evaluateLocaleSwitchObservation(
      naturalAlternatives,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).content.every_required_pattern).toBe(true);

    const missingRepositoryConcept = structuredClone(naturalAlternatives);
    missingRepositoryConcept.panels.find((panel) => panel.locale === "en").text =
      missingRepositoryConcept.panels.find((panel) => panel.locale === "en").text
        .replace("project folder", "workspace");
    expect(evaluateLocaleSwitchObservation(
      missingRepositoryConcept,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).content.every_required_pattern).toBe(false);

    const missingJapaneseAgentConcept = structuredClone(naturalAlternatives);
    missingJapaneseAgentConcept.panels.find((panel) => panel.locale === "ja").text =
      missingJapaneseAgentConcept.panels.find((panel) => panel.locale === "ja").text
        .replace("コーディングアシスタント", "ツール");
    expect(evaluateLocaleSwitchObservation(
      missingJapaneseAgentConcept,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).content.every_required_pattern).toBe(false);

    const mainlandCopyInTaiwan = structuredClone(observation);
    mainlandCopyInTaiwan.panels.find((panel) => panel.locale === "zh-TW").text += " 用户 项目 AI 编程助手";
    expect(evaluateLocaleSwitchObservation(
      mainlandCopyInTaiwan,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).content.no_forbidden_patterns).toBe(false);

    const changedCommand = structuredClone(observation);
    changedCommand.panels.find((panel) => panel.locale === "ja").text =
      changedCommand.panels.find((panel) => panel.locale === "ja").text.replace("@1.4", "@latest");
    expect(evaluateLocaleSwitchObservation(
      changedCommand,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).content.protected_literals_preserved).toBe(false);

    const leakyPanels = structuredClone(observation);
    leakyPanels.states[2].visible_panels = ["ko", "ja"];
    expect(evaluateLocaleSwitchObservation(
      leakyPanels,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).navigation.every_locale_reachable).toBe(false);

    const staleRootLanguage = structuredClone(observation);
    staleRootLanguage.states[1].root_lang = "ko";
    expect(evaluateLocaleSwitchObservation(
      staleRootLanguage,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).navigation.every_locale_reachable).toBe(false);

    const brokenRovingTabs = structuredClone(observation);
    brokenRovingTabs.keyboard_tabs.forward[0] = {
      focused: "ko",
      ...state("ko"),
    };
    expect(evaluateLocaleSwitchObservation(
      brokenRovingTabs,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).navigation.roving_keyboard_forward).toBe(false);

    const falseCopy = structuredClone(observation);
    falseCopy.handoffs[0].after = falseCopy.handoffs[0].before;
    expect(evaluateLocaleSwitchObservation(
      falseCopy,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).handoff.every_status_changes).toBe(false);

    const noClipboardWrite = structuredClone(observation);
    noClipboardWrite.handoffs[0].clipboard_after = "";
    expect(evaluateLocaleSwitchObservation(
      noClipboardWrite,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).handoff.every_action_copies_exact).toBe(false);

    const wrongClipboardValue = structuredClone(observation);
    wrongClipboardValue.handoffs[0].clipboard_after = "npx northstar-ui@latest setup";
    expect(evaluateLocaleSwitchObservation(
      wrongClipboardValue,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).handoff.every_action_copies_exact).toBe(false);

    const statusOnly = structuredClone(observation);
    statusOnly.handoffs[0].clipboard_after = statusOnly.handoffs[0].clipboard_before;
    statusOnly.handoffs[0].after = "Command copied.";
    expect(evaluateLocaleSwitchObservation(
      statusOnly,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).handoff.every_action_copies_exact).toBe(false);

    const markerOnly = structuredClone(observation);
    markerOnly.handoffs[0].clipboard_after = "";
    markerOnly.handoffs[0].copied_marker = "true";
    expect(evaluateLocaleSwitchObservation(
      markerOnly,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).handoff.every_action_copies_exact).toBe(false);

    const emptyInitialStatus = structuredClone(observation);
    expect(evaluateLocaleSwitchObservation(
      emptyInitialStatus,
      localeTask.journey_oracle.locale_switch,
      localeTask.locale_oracle,
    ).handoff.every_status_changes).toBe(true);
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
    expect(readFileSync(evaluatorPath, "utf8")).toContain("firstElement.contains(secondElement) || secondElement.contains(firstElement)");
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

  it("fails opt-in text fragmentation without changing legacy geometry", () => {
    const base = {
      scroll_width: 390,
      client_width: 390,
      clipped_controls: [],
      overlapping_controls: [],
    };
    expect(evaluateViewportGeometry(base)).toEqual({
      no_horizontal_overflow: true,
      no_clipped_controls: true,
      no_overlapping_controls: true,
    });

    const oracle = {
      scope_selectors: ["[data-bench='approval-row']"],
      max_short_text_chars: 24,
      max_short_text_lines: 1,
    };
    expect(evaluateViewportGeometry({
      ...base,
      text_geometry: {
        fragmented_tokens: [],
        short_atomic_text_wraps: [],
        short_control_label_wraps: [],
        generated_content_overflow: [],
        passive_text_scrollers: [],
        missing_scope_selectors: [],
      },
    }, oracle)).toEqual({
      no_horizontal_overflow: true,
      no_clipped_controls: true,
      no_overlapping_controls: true,
      text_geometry_scope_present: true,
      no_mid_token_fragmentation: true,
      short_atomic_text_within_line_budget: true,
      short_control_labels_within_line_budget: true,
      generated_content_fits_declared_box: true,
      no_passive_text_scrollers: true,
    });

    expect(evaluateViewportGeometry({
      ...base,
      text_geometry: {
        fragmented_tokens: [{ token: "STATUS", lines: 6 }],
        short_atomic_text_wraps: [{ text: "Owner: Amara Singh", lines: 3 }],
        short_control_label_wraps: [{ text: "View evidence", lines: 2 }],
        generated_content_overflow: [{ text: "STATUS", declared_width: 8, required_width: 43 }],
        passive_text_scrollers: [{ tag: "SPAN", text: "STATUS", overflow_x: "auto", overflow_y: "auto" }],
        missing_scope_selectors: [],
      },
    }, oracle)).toEqual({
      no_horizontal_overflow: true,
      no_clipped_controls: true,
      no_overlapping_controls: true,
      text_geometry_scope_present: true,
      no_mid_token_fragmentation: false,
      short_atomic_text_within_line_budget: false,
      short_control_labels_within_line_budget: false,
      generated_content_fits_declared_box: false,
      no_passive_text_scrollers: false,
    });

    expect(evaluateViewportGeometry({
      ...base,
      text_geometry: {
        fragmented_tokens: [],
        short_atomic_text_wraps: [],
        short_control_label_wraps: [],
        generated_content_overflow: [],
        passive_text_scrollers: [],
        missing_scope_selectors: ["[data-bench='approval-row']"],
      },
    }, oracle).text_geometry_scope_present).toBe(false);
  });

  it("requires marker-backed decision hierarchy instead of inferring taste", () => {
    const oracle = {
      roles: {
        container: "[data-bench-decision-role='context']",
        target: "[data-bench-decision-role='target']",
        evidence: "[data-bench-decision-role='evidence']",
        state: "[data-bench-decision-role='state']",
        action: "[data-bench-decision-role='action']",
      },
      minimum_action_gap_px: 8,
    };
    const role = (domIndex, rect, style = {}) => ({
      count: 1,
      visible: true,
      inside_container: true,
      dom_index: domIndex,
      rect,
      style: {
        font_size: "16px",
        font_weight: "400",
        color: "rgb(36, 33, 40)",
        background_color: "rgba(0, 0, 0, 0)",
        border_top_color: "rgb(214, 208, 217)",
        ...style,
      },
    });
    const good = {
      decision_hierarchy: {
        roles: {
          container: role(0, { left: 0, right: 360, top: 0, bottom: 260 }),
          target: role(1, { left: 20, right: 220, top: 20, bottom: 48 }, {
            font_size: "20px",
            font_weight: "700",
          }),
          evidence: role(2, { left: 20, right: 220, top: 68, bottom: 92 }),
          state: role(3, { left: 20, right: 220, top: 108, bottom: 132 }, {
            font_weight: "700",
            color: "rgb(160, 82, 69)",
          }),
          action: role(4, { left: 20, right: 220, top: 164, bottom: 208 }, {
            background_color: "rgb(91, 61, 119)",
          }),
        },
      },
    };
    expect(evaluateDecisionHierarchy(good, oracle)).toEqual({
      exact_role_count: true,
      roles_visible: true,
      roles_inside_container: true,
      target_precedes_supporting_context: true,
      action_follows_context: true,
      target_emphasized: true,
      state_distinct_from_evidence: true,
      action_spatially_separated: true,
    });

    const flat = structuredClone(good);
    flat.decision_hierarchy.roles.target.style.font_size = "16px";
    flat.decision_hierarchy.roles.target.style.font_weight = "400";
    flat.decision_hierarchy.roles.state.style.font_weight = "400";
    flat.decision_hierarchy.roles.state.style.color = flat.decision_hierarchy.roles.evidence.style.color;
    flat.decision_hierarchy.roles.action.dom_index = 1;
    flat.decision_hierarchy.roles.action.rect = { left: 180, right: 280, top: 108, bottom: 132 };
    const flatChecks = evaluateDecisionHierarchy(flat, oracle);
    expect(flatChecks.target_emphasized).toBe(false);
    expect(flatChecks.state_distinct_from_evidence).toBe(false);
    expect(flatChecks.action_follows_context).toBe(false);
    expect(flatChecks.action_spatially_separated).toBe(false);

    const missing = structuredClone(good);
    missing.decision_hierarchy.roles.state = {
      count: 0,
      visible: false,
      inside_container: false,
    };
    expect(evaluateDecisionHierarchy(missing, oracle).exact_role_count).toBe(false);
    expect(Object.values(evaluateViewportGeometry({
      scroll_width: 390,
      client_width: 390,
      clipped_controls: [],
      overlapping_controls: [],
      ...good,
    }, null, oracle)).every(Boolean)).toBe(true);
  });

  it("uses WCAG 2.4.11 partial visibility for the AA focus gate", () => {
    expect(focusViewportVisibility(
      { left: 24, right: 696, top: 120, bottom: 980 },
      { width: 720, height: 700 },
    )).toEqual({
      partially_visible: true,
      fully_visible: false,
    });
    expect(focusViewportVisibility(
      { left: 24, right: 696, top: 701, bottom: 980 },
      { width: 720, height: 700 },
    )).toEqual({
      partially_visible: false,
      fully_visible: false,
    });
  });

  it("defines 320px and an explicitly labelled CSS-zoom surrogate without claiming reflow", () => {
    expect(task.viewports).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: "narrow-320", width: 320 }),
      expect.objectContaining({ width: 640, zoom: 2 }),
    ]));

    const evaluator = readFileSync(evaluatorPath, "utf8");
    expect(evaluator).toContain("css_zoom_surrogate_200_geometry");
    expect(evaluator).toContain("element.tabIndex >= 0");
    expect(evaluator).not.toContain("[tabindex]:not([tabindex='-1'])");
    expect(evaluator).not.toContain("zoom_reflow_geometry");
    expect(evaluator).toContain("automated_gate_pass");
    expect(evaluator).toContain("schema_version: OBJECTIVE_SCORE_SCHEMA_VERSION");
    expect(evaluator).toContain('methodology_epoch: OBJECTIVE_METHODOLOGY_EPOCH');
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

  it("binds incident geometry to one protected main-console role instead of a generic card", () => {
    const marker = "[data-bench-design-role='main-console']";
    expect(incidentTask).toMatchObject({
      version: "0.4.0",
      protected_hook_counts: { [marker]: 1 },
      design_oracle: {
        card_radius_px: 14,
        selectors: { card: marker },
      },
    });

    const prompt = readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks/incident-operations-v0.1/PROMPT.md"),
      "utf8",
    );
    expect(prompt).toContain('exactly one\n`data-bench-design-role="main-console"` marker');
    expect(prompt).toContain("move the marker with that overall role");
    expect(prompt).toContain("do not copy or move it onto a subordinate");

    const starter = readFileSync(
      join(repoRoot, "benchmarks/ui-resolve-bench/tasks/incident-operations-v0.1/starter/index.html"),
      "utf8",
    );
    expect(starter.match(/data-bench-design-role="main-console"/g)).toHaveLength(2);
    expect(starter).not.toContain("data-dashboard-card");

    const exactObservation = {
      page_background: "rgb(13, 20, 18)",
      primary_action: "rgb(70, 199, 142)",
      card_radius_px: 14,
      control_radius_px: 10,
      body_font: "Arial, sans-serif",
      display_font: "Georgia, serif",
    };
    expect(Object.values(
      evaluateDesignObservation(exactObservation, incidentTask.design_oracle),
    ).every(Boolean)).toBe(true);
    expect(evaluateDesignObservation({
      ...exactObservation,
      card_radius_px: 0,
    }, incidentTask.design_oracle).card_radius).toBe(false);

    const exact = [{ name: "desktop", protected: { [marker]: { total: 1, visible: 1 } } }];
    expect(evaluateProtectedHookCounts(exact, { [marker]: 1 }).exact).toBe(true);
    expect(evaluateProtectedHookCounts([
      { name: "desktop", protected: { [marker]: { total: 0, visible: 0 } } },
    ], { [marker]: 1 }).exact).toBe(false);
    expect(evaluateProtectedHookCounts([
      { name: "desktop", protected: { [marker]: { total: 2, visible: 2 } } },
    ], { [marker]: 1 }).exact).toBe(false);
  });
});

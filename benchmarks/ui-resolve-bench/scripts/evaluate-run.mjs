#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson, repoRoot, writeJson } from "./_lib.mjs";

export const normalizeColor = (value) => {
  const numbers = String(value).match(/[\d.]+/g)?.slice(0, 3).map(Number);
  if (!numbers || numbers.length !== 3) return String(value).toUpperCase();
  return `#${numbers.map((number) => Math.round(number).toString(16).padStart(2, "0")).join("")}`.toUpperCase();
};

const exactList = (actual, expected) =>
  Array.isArray(actual) &&
  Array.isArray(expected) &&
  actual.length === expected.length &&
  actual.every((value, index) => value === expected[index]);

export function evaluateBillingObservation(observation, expected) {
  const monthly = expected?.monthly ?? [];
  const annual = expected?.annual ?? [];
  const nodes = observation?.nodes ?? [];
  return {
    exact_price_count: nodes.length === monthly.length && monthly.length === annual.length,
    every_price_visible: nodes.length > 0 && nodes.every((node) => node.visible),
    monthly_initial_exact: exactList(observation?.initial?.prices, monthly),
    annual_exact: exactList(observation?.annual?.prices, annual),
    monthly_restored_exact: exactList(observation?.restored?.prices, monthly),
    selection_state_exact:
      observation?.initial?.monthly_pressed === "true" &&
      observation?.initial?.annual_pressed === "false" &&
      observation?.initial?.body_period === "monthly" &&
      observation?.annual?.monthly_pressed === "false" &&
      observation?.annual?.annual_pressed === "true" &&
      observation?.annual?.body_period === "annual" &&
      observation?.restored?.monthly_pressed === "true" &&
      observation?.restored?.annual_pressed === "false" &&
      observation?.restored?.body_period === "monthly",
  };
}

export function evaluateFaqObservations(entries, expectedCount) {
  const controls = (entries ?? []).map((entry) => entry?.controls);
  return {
    exact_count: Array.isArray(entries) && entries.length === expectedCount,
    unique_targets: controls.length > 0 && controls.length === new Set(controls).size && controls.every(Boolean),
    every_target_exists: (entries?.length ?? 0) > 0 && entries.every((entry) => entry?.target_exists === true),
    every_button_visible: (entries?.length ?? 0) > 0 && entries.every((entry) => entry?.button_visible === true),
    every_initially_closed:
      (entries?.length ?? 0) > 0 &&
      entries.every((entry) => entry?.initial?.expanded === "false" && entry?.initial?.hidden === true),
    every_opens:
      (entries?.length ?? 0) > 0 &&
      entries.every((entry) => entry?.opened?.expanded === "true" && entry?.opened?.hidden === false),
    every_closes_again:
      (entries?.length ?? 0) > 0 &&
      entries.every((entry) => entry?.closed?.expanded === "false" && entry?.closed?.hidden === true),
  };
}

export function evaluateFormObservation(observation) {
  const presence = observation?.presence ?? {};
  return {
    required_elements_present:
      presence.form === true &&
      (presence.field === true || presence.email === true) &&
      presence.status === true,
    invalid_marks_field: observation?.invalid?.aria_invalid === "true",
    invalid_has_status: Boolean(observation?.invalid?.status),
    invalid_focuses_email: observation?.invalid?.focused === true,
    valid_clears_invalid: observation?.valid?.aria_invalid !== undefined && observation?.valid?.aria_invalid !== "true",
    valid_has_status: Boolean(observation?.valid?.status),
    status_changes:
      Boolean(observation?.invalid?.status) &&
      Boolean(observation?.valid?.status) &&
      observation.valid.status !== observation.invalid.status,
  };
}

export function evaluateChoiceObservation(observation, expected = {}) {
  const values = observation?.nodes?.map((node) => node.value) ?? [];
  const allVisible = observation?.nodes?.every((node) => node.visible) ?? false;
  const pressedOnly = (state, value) =>
    state?.selected === value &&
    state?.body_value === value &&
    values.every((candidate) => state?.pressed?.[candidate] === String(candidate === value));
  return {
    exact_count: values.length === expected.count,
    every_choice_visible: values.length > 0 && allVisible,
    values_exact: exactList(values, expected.values ?? []),
    initial_exact: pressedOnly(observation?.initial, expected.initial),
    selection_exact: pressedOnly(observation?.selected, expected.selected),
    restored_exact: pressedOnly(observation?.restored, expected.initial),
  };
}

export function evaluateToggleObservation(observation) {
  return {
    present_and_visible: observation?.present === true && observation?.visible === true,
    initially_off: observation?.initial === "false",
    turns_on: observation?.enabled === "true",
    restores_off: observation?.restored === "false",
  };
}

export function evaluateFilterObservation(observation, expected = {}) {
  const exactPressed = (state, value) =>
    state?.selected === value &&
    state?.body_filter === value &&
    Object.entries(state?.pressed ?? {}).every(([candidate, pressed]) => pressed === String(candidate === value));
  return {
    exact_filter_count: observation?.nodes?.length === expected.count,
    every_filter_visible: observation?.nodes?.length > 0 && observation.nodes.every((node) => node.visible),
    initial_exact:
      exactPressed(observation?.initial, expected.initial) &&
      observation?.initial?.visible_rows === expected.initial_visible_rows,
    filtered_exact:
      exactPressed(observation?.filtered, expected.selected) &&
      observation?.filtered?.visible_rows === expected.selected_visible_rows,
    restored_exact:
      exactPressed(observation?.restored, expected.initial) &&
      observation?.restored?.visible_rows === expected.initial_visible_rows,
  };
}

export function evaluateAcknowledgementObservation(observation) {
  return {
    required_elements_present:
      observation?.presence?.button === true && observation?.presence?.status === true,
    status_changes:
      Boolean(observation?.initial?.status) &&
      Boolean(observation?.acknowledged?.status) &&
      observation.initial.status !== observation.acknowledged.status,
    acknowledgement_state:
      observation?.acknowledged?.pressed === "true" || observation?.acknowledged?.disabled === true,
  };
}

export function evaluateApprovalDecisionObservation(observation) {
  return {
    required_elements_present:
      observation?.presence?.open_button === true &&
      observation?.presence?.dialog === true &&
      observation?.presence?.cancel_button === true &&
      observation?.presence?.confirm_button === true &&
      observation?.presence?.status === true,
    initially_closed:
      observation?.initial?.open === false &&
      observation?.initial?.visible === false,
    opens_and_moves_focus:
      observation?.opened?.open === true &&
      observation?.opened?.visible === true &&
      observation?.opened?.focus_inside === true,
    cancel_closes_and_restores_focus:
      observation?.cancelled?.open === false &&
      observation?.cancelled?.visible === false &&
      observation?.cancelled?.focus_restored === true,
    confirm_changes_status_and_closes:
      observation?.confirmed?.open === false &&
      observation?.confirmed?.visible === false &&
      Boolean(observation?.initial?.status) &&
      Boolean(observation?.confirmed?.status) &&
      observation.initial.status !== observation.confirmed.status &&
      observation?.confirmed?.focus_restored === true,
  };
}

const matchesPattern = (text, pattern) => {
  try {
    return new RegExp(pattern, "iu").test(String(text ?? ""));
  } catch {
    return false;
  }
};

export function evaluateLocaleSwitchObservation(observation, journeyOracle = {}, localeOracle = {}) {
  const locales = journeyOracle.locales ?? [];
  const buttons = observation?.buttons ?? [];
  const panels = observation?.panels ?? [];
  const states = observation?.states ?? [];
  const handoffs = observation?.handoffs ?? [];
  const expectedInitial = journeyOracle.initial;
  const statePasses = (state, locale) =>
    state?.active === locale &&
    state?.body_locale === locale &&
    state?.root_lang?.toLowerCase() === locale.toLowerCase() &&
    exactList(state?.visible_panels, [locale]) &&
    locales.every((candidate) => state?.pressed?.[candidate] === String(candidate === locale));
  const panelByLocale = Object.fromEntries(panels.map((panel) => [panel.locale, panel]));
  const rulesByLocale = localeOracle.locales ?? {};
  const normalizedCopies = panels.map((panel) => String(panel.text ?? "").replace(/\s+/g, " ").trim());

  return {
    navigation: {
      exact_button_locales: exactList(buttons.map((button) => button.locale), locales),
      every_button_visible: buttons.length > 0 && buttons.every((button) => button.visible === true),
      initial_exact: statePasses(observation?.initial, expectedInitial),
      every_locale_reachable:
        states.length === locales.length &&
        locales.every((locale) => statePasses(states.find((state) => state.locale === locale), locale)),
      restored_exact: statePasses(observation?.restored, expectedInitial),
      roving_keyboard_forward:
        observation?.keyboard_tabs?.start_focus === expectedInitial &&
        exactList(
          observation?.keyboard_tabs?.forward?.map((entry) => entry.focused),
          [...locales.slice(1), expectedInitial],
        ) &&
        (observation?.keyboard_tabs?.forward ?? []).every((entry) =>
          statePasses(entry, entry.focused)),
      roving_keyboard_reverse:
        observation?.keyboard_tabs?.reverse?.focused === locales.at(-1) &&
        statePasses(observation?.keyboard_tabs?.reverse, locales.at(-1)),
    },
    content: {
      exact_panel_locales: exactList(panels.map((panel) => panel.locale), locales),
      every_panel_lang_exact:
        panels.length === locales.length &&
        locales.every((locale) => panelByLocale[locale]?.lang?.toLowerCase() === locale.toLowerCase()),
      every_required_pattern:
        locales.length > 0 &&
        locales.every((locale) =>
          (rulesByLocale[locale]?.required_patterns ?? []).every((pattern) =>
            matchesPattern(panelByLocale[locale]?.text, pattern))),
      no_forbidden_patterns:
        locales.length > 0 &&
        locales.every((locale) =>
          (rulesByLocale[locale]?.forbidden_patterns ?? []).every((pattern) =>
            !matchesPattern(panelByLocale[locale]?.text, pattern))),
      protected_literals_preserved:
        locales.length > 0 &&
        locales.every((locale) =>
          (localeOracle.protected_literals ?? []).every((literal) =>
            String(panelByLocale[locale]?.text ?? "").includes(literal))),
      locale_copy_distinct:
        normalizedCopies.length === locales.length &&
        normalizedCopies.every(Boolean) &&
        new Set(normalizedCopies).size === locales.length,
    },
    handoff: {
      exact_count: handoffs.length === locales.length,
      every_action_present: handoffs.length > 0 && handoffs.every((entry) => entry.action_present === true),
      every_action_visible: handoffs.length > 0 && handoffs.every((entry) => entry.action_visible === true),
      every_status_changes:
        handoffs.length > 0 &&
        handoffs.every((entry) =>
          typeof entry.before === "string" &&
          typeof entry.after === "string" &&
          Boolean(entry.after.trim()) &&
          entry.before !== entry.after),
      every_action_copies_exact:
        typeof journeyOracle.clipboard_literal === "string" &&
        Boolean(journeyOracle.clipboard_literal) &&
        handoffs.length > 0 &&
        handoffs.every((entry) =>
          typeof entry.clipboard_before === "string" &&
          entry.clipboard_before !== journeyOracle.clipboard_literal &&
          entry.clipboard_after === journeyOracle.clipboard_literal),
    },
  };
}

export function evaluateProtectedHookCounts(viewports, expectedCounts) {
  const mismatches = [];
  for (const viewport of viewports ?? []) {
    for (const [selector, rawExpected] of Object.entries(expectedCounts ?? {})) {
      const expected = typeof rawExpected === "number"
        ? { total: rawExpected, visible: rawExpected }
        : { total: rawExpected?.total ?? 0, visible: rawExpected?.visible ?? rawExpected?.total ?? 0 };
      const actual = viewport.protected?.[selector] ?? { total: 0, visible: 0 };
      if (actual.total !== expected.total || actual.visible !== expected.visible) {
        mismatches.push({ viewport: viewport.name, selector, expected, ...actual });
      }
    }
  }
  return {
    exact: (viewports?.length ?? 0) > 0 && Object.keys(expectedCounts ?? {}).length > 0 && mismatches.length === 0,
    mismatches,
  };
}

export function findUnsupportedClaims(sources, patterns, allowedPatterns = []) {
  const matches = [];
  const allowed = allowedPatterns.map((pattern) => new RegExp(pattern, "iu"));
  for (const pattern of patterns ?? []) {
    const expression = new RegExp(pattern, "giu");
    for (const source of sources ?? []) {
      if (allowed.some((candidate) => candidate.test(source.text))) continue;
      expression.lastIndex = 0;
      let match;
      while ((match = expression.exec(source.text)) !== null) {
        const start = Math.max(0, match.index - 48);
        const end = Math.min(source.text.length, match.index + match[0].length + 48);
        matches.push({
          pattern,
          match: match[0],
          source: source.source,
          excerpt: source.text.slice(start, end).replace(/\s+/g, " ").trim(),
        });
        if (match[0].length === 0) expression.lastIndex += 1;
      }
    }
  }
  return matches;
}

export function evaluateLandmarkObservation(observation, oracle) {
  const checks = {};
  for (const [field, rule] of Object.entries(oracle ?? {})) {
    const actual = observation?.[field];
    if (!Number.isFinite(actual)) {
      checks[field] = false;
      continue;
    }
    const normalized = typeof rule === "number" ? { exact: rule } : rule;
    checks[field] =
      (normalized?.exact == null || actual === normalized.exact) &&
      (normalized?.min == null || actual >= normalized.min) &&
      (normalized?.max == null || actual <= normalized.max);
  }
  return checks;
}

export function evaluateKeyboardTraversal(traversal) {
  const expectedIds = Array.isArray(traversal?.expected_ids) ? traversal.expected_ids : [];
  const visitedIds = Array.isArray(traversal?.visited_ids) ? traversal.visited_ids : [];
  const records = Array.isArray(traversal?.records) ? traversal.records : [];
  const recordIds = records.map((record) => record?.id ?? null);
  const expectedSet = new Set(expectedIds);
  const visitedSet = new Set(visitedIds);
  const validVisitedIds = visitedIds.every((id) => typeof id === "string" && expectedSet.has(id));
  const exactSet =
    expectedIds.length > 0 &&
    expectedSet.size === expectedIds.length &&
    visitedSet.size === visitedIds.length &&
    expectedSet.size === visitedSet.size &&
    [...expectedSet].every((id) => visitedSet.has(id));
  const exactSequence = exactList(visitedIds, expectedIds);
  return {
    has_focusable_controls:
      expectedIds.length > 0 && traversal?.expected_count === expectedIds.length,
    visits_every_control_once:
      traversal?.visited_count === expectedIds.length &&
      visitedIds.length === expectedIds.length &&
      validVisitedIds &&
      exactSet &&
      exactSequence &&
      exactList(recordIds, expectedIds),
    no_stall:
      traversal?.stalled === false &&
      visitedIds.every((id, index) => index === 0 || id !== visitedIds[index - 1]),
    focus_visible:
      records.length === expectedIds.length &&
      records.every((record) =>
        record?.focus_visible === true &&
        record?.matches_focus_visible === true &&
        record?.focus_style_delta === true),
    focused_control_in_view:
      records.length === expectedIds.length && records.every((record) => record?.in_view === true),
  };
}

export function focusViewportVisibility(rect, viewport) {
  if (!rect || !viewport) return { partially_visible: false, fully_visible: false };
  const partiallyVisible = (
    rect.right > 0
    && rect.left < viewport.width
    && rect.bottom > 0
    && rect.top < viewport.height
  );
  const fullyVisible = (
    rect.left >= -1
    && rect.right <= viewport.width + 1
    && rect.top >= -1
    && rect.bottom <= viewport.height + 1
  );
  return {
    partially_visible: partiallyVisible,
    fully_visible: fullyVisible,
  };
}

const numericFontWeight = (value) => {
  if (value === "normal") return 400;
  if (value === "bold") return 700;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : 400;
};

export function evaluateDecisionHierarchy(viewport, oracle) {
  const observation = viewport?.decision_hierarchy;
  const roles = observation?.roles ?? {};
  const expectedRoles = Object.keys(oracle?.roles ?? {});
  const exactRoleCount =
    expectedRoles.length >= 5 &&
    expectedRoles.every((role) => roles[role]?.count === 1);
  const roleEntries = expectedRoles.map((role) => roles[role]).filter(Boolean);
  const target = roles.target;
  const evidence = roles.evidence;
  const state = roles.state;
  const action = roles.action;
  const contextRoles = [target, evidence, state].filter(Boolean);
  const targetWeight = numericFontWeight(target?.style?.font_weight);
  const evidenceWeight = numericFontWeight(evidence?.style?.font_weight);
  const targetSize = Number.parseFloat(target?.style?.font_size);
  const evidenceSize = Number.parseFloat(evidence?.style?.font_size);
  const targetEmphasized =
    Number.isFinite(targetSize) &&
    Number.isFinite(evidenceSize) &&
    (targetSize >= evidenceSize + 2 || targetWeight >= evidenceWeight + 100);
  const stateDistinct =
    Boolean(state?.style && evidence?.style) &&
    (
      numericFontWeight(state.style.font_weight) >= evidenceWeight + 100 ||
      state.style.color !== evidence.style.color ||
      state.style.background_color !== evidence.style.background_color ||
      state.style.border_top_color !== evidence.style.border_top_color
    );
  const actionSeparated = Boolean(
    action?.rect &&
    contextRoles.every((role) => role?.rect) &&
    contextRoles.every((role) => {
      const horizontalGap = Math.max(
        action.rect.left - role.rect.right,
        role.rect.left - action.rect.right,
      );
      const verticalGap = Math.max(
        action.rect.top - role.rect.bottom,
        role.rect.top - action.rect.bottom,
      );
      return horizontalGap >= (oracle?.minimum_action_gap_px ?? 8) ||
        verticalGap >= (oracle?.minimum_action_gap_px ?? 8);
    }),
  );
  return {
    exact_role_count: exactRoleCount,
    roles_visible:
      exactRoleCount && roleEntries.every((role) => role.visible === true),
    roles_inside_container:
      exactRoleCount &&
      expectedRoles.filter((role) => role !== "container").every((role) => roles[role]?.inside_container === true),
    target_precedes_supporting_context:
      exactRoleCount &&
      target.dom_index < evidence.dom_index &&
      target.dom_index < state.dom_index,
    action_follows_context:
      exactRoleCount &&
      contextRoles.every((role) => role.dom_index < action.dom_index),
    target_emphasized: targetEmphasized,
    state_distinct_from_evidence: stateDistinct,
    action_spatially_separated: actionSeparated,
  };
}

export function evaluateViewportGeometry(viewport, textGeometryOracle, decisionHierarchyOracle) {
  const checks = {
    no_horizontal_overflow:
      Number.isFinite(viewport?.scroll_width) &&
      Number.isFinite(viewport?.client_width) &&
      viewport.scroll_width <= viewport.client_width + 1,
    no_clipped_controls: Array.isArray(viewport?.clipped_controls) && viewport.clipped_controls.length === 0,
    no_overlapping_controls: Array.isArray(viewport?.overlapping_controls) && viewport.overlapping_controls.length === 0,
  };
  if (textGeometryOracle) {
    Object.assign(checks, {
      text_geometry_scope_present:
        Array.isArray(viewport?.text_geometry?.missing_scope_selectors) &&
        viewport.text_geometry.missing_scope_selectors.length === 0,
      no_mid_token_fragmentation:
        Array.isArray(viewport?.text_geometry?.fragmented_tokens) &&
        viewport.text_geometry.fragmented_tokens.length === 0,
      short_atomic_text_within_line_budget:
        Array.isArray(viewport?.text_geometry?.short_atomic_text_wraps) &&
        viewport.text_geometry.short_atomic_text_wraps.length === 0,
      short_control_labels_within_line_budget:
        Array.isArray(viewport?.text_geometry?.short_control_label_wraps) &&
        viewport.text_geometry.short_control_label_wraps.length === 0,
      generated_content_fits_declared_box:
        Array.isArray(viewport?.text_geometry?.generated_content_overflow) &&
        viewport.text_geometry.generated_content_overflow.length === 0,
    });
  }
  if (decisionHierarchyOracle) {
    Object.assign(checks, evaluateDecisionHierarchy(viewport, decisionHierarchyOracle));
  }
  return checks;
}

export function evaluateFontOracle(observation, oracle) {
  const matchesAny = (actual, expected) =>
    typeof actual === "string" &&
    Array.isArray(expected) &&
    expected.length > 0 &&
    expected.some((family) => actual.toLocaleLowerCase().includes(String(family).toLocaleLowerCase()));
  return {
    body: matchesAny(observation?.body_font, oracle?.body_any),
    display: matchesAny(observation?.display_font, oracle?.display_any),
  };
}

export function evaluateDesignObservation(observation, oracle = {}) {
  const fontChecks = evaluateFontOracle(observation, oracle.font_family);
  return {
    page_background:
      typeof observation?.page_background === "string" &&
      normalizeColor(observation.page_background) === String(oracle.page_background ?? "").toUpperCase(),
    primary_action:
      typeof observation?.primary_action === "string" &&
      normalizeColor(observation.primary_action) === String(oracle.primary_action ?? "").toUpperCase(),
    card_radius:
      Number.isFinite(observation?.card_radius_px) &&
      Number.isFinite(oracle.card_radius_px) &&
      Math.abs(observation.card_radius_px - oracle.card_radius_px) <= 1,
    control_radius:
      Number.isFinite(observation?.control_radius_px) &&
      Number.isFinite(oracle.control_radius_px) &&
      Math.abs(observation.control_radius_px - oracle.control_radius_px) <= 1,
    fonts: everyCheckPass(fontChecks),
  };
}

const everyCheckPass = (checks) =>
  Boolean(checks) && Object.values(checks).length > 0 && Object.values(checks).every((value) => value === true);

export function loadEvaluatorDependencies() {
  let playwright;
  let axeCore;
  try {
    playwright = createRequire(import.meta.url)("playwright-core");
  } catch {
    playwright = createRequire(join(repoRoot, "web", "package.json"))("playwright-core");
  }
  try {
    axeCore = createRequire(import.meta.url)("axe-core");
  } catch {
    axeCore = createRequire(join(repoRoot, "web", "package.json"))("axe-core");
  }
  return { playwright, axeCore };
}

async function main() {
  const args = parseArgs();
  const { playwright, axeCore } = loadEvaluatorDependencies();
  if (args.get("preflight") === true || args.get("preflight") === "true") {
    console.log(JSON.stringify({
      event: "evaluator-preflight-complete",
      dependencies: ["playwright-core", "axe-core"],
    }));
    return;
  }
  const { chromium } = playwright;

  const workspace = args.get("workspace") ? resolve(String(args.get("workspace"))) : null;
  if (!workspace) {
    console.error("usage: evaluate-run.mjs --workspace <completed-dir>");
    process.exitCode = 2;
    return;
  }

  const benchmarkDir = join(workspace, ".benchmark");
  const manifest = readJson(join(benchmarkDir, "manifest.json"));
  const taskRoot = resolve(new URL(`../tasks/${manifest.task.id}/`, import.meta.url).pathname);
  const task = readJson(join(taskRoot, "task.json"));
  const behaviorAdapter = task.behavior_adapter ?? "pricing-v1";
  const entry = join(workspace, task.entry);
  if (!existsSync(entry)) throw new Error(`entry file not found: ${entry}`);

  function chromeExecutable() {
    const candidates = [
      process.env.CHROME_PATH,
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      "/Applications/Chromium.app/Contents/MacOS/Chromium",
      "/usr/bin/google-chrome",
      "/usr/bin/chromium",
      "/usr/bin/chromium-browser",
    ].filter(Boolean);
    for (const candidate of candidates) if (existsSync(candidate)) return candidate;
    for (const command of ["google-chrome", "chromium", "chromium-browser"]) {
      try { return execFileSync("which", [command], { encoding: "utf8" }).trim(); } catch { /* continue */ }
    }
    throw new Error("Chrome/Chromium executable not found; set CHROME_PATH");
  }

  const mime = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".woff2": "font/woff2",
  };

  const server = createServer((request, response) => {
    const rawPath = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
    const relativePath = rawPath === "/" ? task.entry : normalize(rawPath).replace(/^[/\\]+/, "");
    const file = resolve(workspace, relativePath);
    if (file !== workspace && !file.startsWith(`${workspace}/`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    try {
      response.writeHead(200, { "content-type": mime[extname(file)] ?? "application/octet-stream" });
      response.end(readFileSync(file));
    } catch {
      response.writeHead(404).end("Not found");
    }
  });
  await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
  const address = server.address();
  const origin = `http://127.0.0.1:${address.port}`;

  const browser = await chromium.launch({
    executablePath: chromeExecutable(),
    headless: true,
    args: ["--disable-background-networking", "--disable-component-update", "--no-first-run"],
  });

  const screenshotsDir = join(benchmarkDir, "screenshots");
  mkdirSync(screenshotsDir, { recursive: true });
  const viewportResults = [];
  let behavior = null;
  let semantics = null;
  let design = null;
  let evidenceSources = [];
  let unsupportedStructures = [];

  try {
    for (const viewport of task.viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        locale: task.browser_locale ?? (task.locale === "en" ? "en-US" : task.locale),
        timezoneId: "UTC",
        colorScheme: "light",
        reducedMotion: "reduce",
        deviceScaleFactor: 1,
      });
      if (behaviorAdapter === "locale-switch-v1") {
        await context.grantPermissions(["clipboard-read", "clipboard-write"], { origin });
      }
      const page = await context.newPage();
      const consoleErrors = [];
      const externalRequests = [];
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      await page.route("**/*", async (route) => {
        const url = new URL(route.request().url());
        if (url.origin !== origin && !["data:", "blob:"].includes(url.protocol)) {
          externalRequests.push(url.href);
          await route.abort("blockedbyclient");
          return;
        }
        await route.continue();
      });
      await page.goto(origin, { waitUntil: "load" });
      await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "light" });
      if (viewport.zoom) {
        await page.evaluate((zoom) => { document.documentElement.style.zoom = String(zoom); }, viewport.zoom);
      }
      await page.addScriptTag({ content: axeCore.source });
      const axe = await page.evaluate(async () => {
        const result = await window.axe.run(document, {
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"] },
        });
        const serious = result.violations.filter((violation) => ["critical", "serious"].includes(violation.impact));
        return {
          violations: result.violations.length,
          serious_or_critical: serious.length,
          serious_or_critical_ids: serious.map((violation) => violation.id),
          serious_or_critical_nodes: serious.flatMap((violation) => violation.nodes.map((node) => ({
            id: violation.id,
            target: node.target,
            html: node.html,
            failure_summary: node.failureSummary,
          }))),
        };
      });

      const snapshot = await page.evaluate(({ protectedSelectors, textGeometryOracle, decisionHierarchyOracle }) => {
        const visible = (element) => {
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          if (typeof element.checkVisibility === "function" && !element.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) return false;
          return style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0" && rect.width > 0 && rect.height > 0;
        };
        const interactiveSelector = "button, a[href], input, select, textarea, [tabindex]";
        const interactiveControls = [...document.querySelectorAll(interactiveSelector)].filter(visible);
        const controls = interactiveControls.filter((element) =>
          element.tabIndex >= 0 &&
          !element.matches(":disabled, [aria-disabled='true']"),
        );
        const measuredControls = interactiveControls.filter((element) =>
          element.matches("button, input, select, textarea, [role='button'], a.button, a[class*='btn'], a[data-primary-action]"),
        );
        const accessibleName = (element) => {
          if (element.getAttribute("aria-label")) return element.getAttribute("aria-label").trim();
          if (element.id) {
            const label = document.querySelector(`label[for="${CSS.escape(element.id)}"]`);
            if (label?.textContent?.trim()) return label.textContent.trim();
          }
          return (element.textContent || element.getAttribute("value") || element.getAttribute("title") || "").trim();
        };
        controls.forEach((element, index) => {
          element.dataset.benchEvaluatorFocusId = String(index);
        });
        const controlDetails = interactiveControls.map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            tag: element.tagName,
            text: accessibleName(element).slice(0, 80),
            left: rect.left,
            right: rect.right,
            top: rect.top,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          };
        });
        const clippedControls = controlDetails.filter((control) => control.left < -1 || control.right > document.documentElement.clientWidth + 1);
        const overlappingControls = [];
        for (let first = 0; first < controlDetails.length; first += 1) {
          for (let second = first + 1; second < controlDetails.length; second += 1) {
            const a = controlDetails[first];
            const b = controlDetails[second];
            const overlapWidth = Math.min(a.right, b.right) - Math.max(a.left, b.left);
            const overlapHeight = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            if (overlapWidth > 1 && overlapHeight > 1) overlappingControls.push({ first: a, second: b });
          }
        }
        const textGeometry = (() => {
          const empty = {
            fragmented_tokens: [],
            short_atomic_text_wraps: [],
            short_control_label_wraps: [],
            generated_content_overflow: [],
            missing_scope_selectors: [],
          };
          if (!textGeometryOracle) return empty;
          const scopeSelectors = Array.isArray(textGeometryOracle.scope_selectors)
            ? textGeometryOracle.scope_selectors
            : [];
          const missingScopeSelectors = scopeSelectors.filter((selector) =>
            [...document.querySelectorAll(selector)].filter(visible).length === 0);
          const roots = [...new Set(
            scopeSelectors.flatMap((selector) => [...document.querySelectorAll(selector)]).filter(visible),
          )];
          if (roots.length === 0) return {
            ...empty,
            missing_scope_selectors: missingScopeSelectors.length ? missingScopeSelectors : scopeSelectors,
          };
          empty.missing_scope_selectors = missingScopeSelectors;
          const maxChars = Number.isFinite(textGeometryOracle.max_short_text_chars)
            ? textGeometryOracle.max_short_text_chars
            : 24;
          const maxLines = Number.isFinite(textGeometryOracle.max_short_text_lines)
            ? textGeometryOracle.max_short_text_lines
            : 1;
          const lineTops = (node, start, end) => {
            const tops = [];
            for (let index = start; index < end; index += 1) {
              if (/\s/u.test(node.data[index] ?? "")) continue;
              const range = document.createRange();
              range.setStart(node, index);
              range.setEnd(node, index + 1);
              const rect = range.getBoundingClientRect();
              if (rect.width > 0 && rect.height > 0) tops.push(Math.round(rect.top * 2) / 2);
            }
            return [...new Set(tops)];
          };
          const textNodes = [];
          for (const root of roots) {
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
              const node = walker.currentNode;
              const parent = node.parentElement;
              if (!parent || !visible(parent) || parent.closest("script, style, [hidden]")) continue;
              if (!node.data.trim()) continue;
              textNodes.push({ node, parent });
            }
          }
          const seenNodes = new Set();
          for (const { node, parent } of textNodes) {
            if (seenNodes.has(node)) continue;
            seenNodes.add(node);
            const raw = node.data;
            const trimmed = raw.trim();
            const leading = raw.indexOf(trimmed);
            const allLines = lineTops(node, leading, leading + trimmed.length);
            if (trimmed.length <= maxChars && allLines.length > maxLines) {
              empty.short_atomic_text_wraps.push({
                text: trimmed.slice(0, 80),
                tag: parent.tagName,
                lines: allLines.length,
              });
            }
            for (const match of raw.matchAll(/[\p{L}\p{N}][\p{L}\p{N}_-]{2,}/gu)) {
              const tokenLines = lineTops(node, match.index, match.index + match[0].length);
              if (tokenLines.length > 1) {
                empty.fragmented_tokens.push({
                  token: match[0].slice(0, 80),
                  tag: parent.tagName,
                  lines: tokenLines.length,
                });
              }
            }
          }
          const controlSelector = textGeometryOracle.control_selector
            ?? "button, a[href], [role='button'], input[type='button'], input[type='submit']";
          const controlsInScope = roots.flatMap((root) => [...root.querySelectorAll(controlSelector)]).filter(visible);
          for (const control of controlsInScope) {
            const label = accessibleName(control);
            if (!label || label.length > maxChars) continue;
            const tops = [];
            const walker = document.createTreeWalker(control, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) {
              const node = walker.currentNode;
              tops.push(...lineTops(node, 0, node.data.length));
            }
            const lines = [...new Set(tops)].length;
            if (lines > maxLines) {
              empty.short_control_label_wraps.push({
                text: label.slice(0, 80),
                tag: control.tagName,
                lines,
              });
            }
          }
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          for (const root of roots) {
            for (const element of [root, ...root.querySelectorAll("[data-label]")]) {
              if (!element.hasAttribute("data-label") || !visible(element)) continue;
              const pseudo = getComputedStyle(element, "::before");
              const content = pseudo.content?.replace(/^['"]|['"]$/g, "");
              const declaredWidth = Number.parseFloat(pseudo.width);
              if (!content || content === "none" || !Number.isFinite(declaredWidth) || !context) continue;
              context.font = pseudo.font;
              const requiredWidth = context.measureText(content).width;
              if (requiredWidth > declaredWidth + 1) {
                empty.generated_content_overflow.push({
                  text: content.slice(0, 80),
                  tag: element.tagName,
                  declared_width: Math.round(declaredWidth * 10) / 10,
                  required_width: Math.round(requiredWidth * 10) / 10,
                });
              }
            }
          }
          return empty;
        })();
        const decisionHierarchy = (() => {
          if (!decisionHierarchyOracle) return null;
          const roleSelectors = decisionHierarchyOracle.roles ?? {};
          const allElements = [...document.querySelectorAll("*")];
          const domIndex = new Map(allElements.map((element, index) => [element, index]));
          const containerSelector = roleSelectors.container;
          const containers = containerSelector ? [...document.querySelectorAll(containerSelector)] : [];
          const container = containers.length === 1 ? containers[0] : null;
          const observe = (selector) => {
            const elements = selector ? [...document.querySelectorAll(selector)] : [];
            const element = elements.length === 1 ? elements[0] : null;
            if (!element) return { count: elements.length, visible: false, inside_container: false };
            const style = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            return {
              count: elements.length,
              visible: visible(element),
              inside_container: element === container || Boolean(container?.contains(element)),
              dom_index: domIndex.get(element) ?? -1,
              rect: {
                left: rect.left,
                right: rect.right,
                top: rect.top,
                bottom: rect.bottom,
                width: rect.width,
                height: rect.height,
              },
              style: {
                font_size: style.fontSize,
                font_weight: style.fontWeight,
                color: style.color,
                background_color: style.backgroundColor,
                border_top_color: style.borderTopColor,
              },
            };
          };
          return {
            roles: Object.fromEntries(
              Object.entries(roleSelectors).map(([role, selector]) => [role, observe(selector)]),
            ),
          };
        })();
        return {
          protected: Object.fromEntries(protectedSelectors.map((selector) => {
            const elements = [...document.querySelectorAll(selector)];
            return [selector, { total: elements.length, visible: elements.filter(visible).length }];
          })),
          scroll_width: document.documentElement.scrollWidth,
          client_width: document.documentElement.clientWidth,
          clipped_controls: clippedControls,
          overlapping_controls: overlappingControls,
          h1_count: document.querySelectorAll("h1").length,
          main_count: document.querySelectorAll("main").length,
          nav_count: document.querySelectorAll("nav").length,
          footer_count: document.querySelectorAll("footer").length,
          lang: document.documentElement.lang,
          unnamed_controls: interactiveControls.filter((element) => !accessibleName(element)).length,
          unlabeled_inputs: [...document.querySelectorAll("input, select, textarea")].filter((element) => !accessibleName(element)).length,
          images_without_alt: [...document.images].filter((image) => !image.hasAttribute("alt")).length,
          small_targets: measuredControls.filter((element) => {
            const rect = element.getBoundingClientRect();
            return rect.width < 24 || rect.height < 24;
          }).length,
          small_recommended_targets: measuredControls.filter((element) => {
            const rect = element.getBoundingClientRect();
            return rect.width < 44 || rect.height < 44;
          }).length,
          small_target_details: measuredControls.filter((element) => {
            const rect = element.getBoundingClientRect();
            return rect.width < 24 || rect.height < 24;
          }).map((element) => {
            const rect = element.getBoundingClientRect();
            return { tag: element.tagName, text: element.textContent?.trim().slice(0, 60), width: Math.round(rect.width), height: Math.round(rect.height) };
          }),
          visible_controls: controls.length,
          text_geometry: textGeometry,
          decision_hierarchy: decisionHierarchy,
        };
      }, {
        protectedSelectors: task.protected_selectors,
        textGeometryOracle:
          task.text_geometry_oracle?.viewports?.includes(viewport.name)
            ? task.text_geometry_oracle
            : null,
        decisionHierarchyOracle:
          task.decision_hierarchy_oracle?.viewports?.includes(viewport.name)
            ? task.decision_hierarchy_oracle
            : null,
      });

      const keyboardBaseline = await page.evaluate(() => {
        const focusStyle = (element) => {
          const style = getComputedStyle(element);
          return {
            outline_style: style.outlineStyle,
            outline_width: style.outlineWidth,
            outline_color: style.outlineColor,
            outline_offset: style.outlineOffset,
            box_shadow: style.boxShadow,
            background_color: style.backgroundColor,
            border_top_color: style.borderTopColor,
            border_right_color: style.borderRightColor,
            border_bottom_color: style.borderBottomColor,
            border_left_color: style.borderLeftColor,
            color: style.color,
            text_decoration_line: style.textDecorationLine,
            text_decoration_color: style.textDecorationColor,
          };
        };
        return [...document.querySelectorAll("[data-bench-evaluator-focus-id]")].map((element) => ({
          id: element.dataset.benchEvaluatorFocusId,
          style: focusStyle(element),
        }));
      });
      const expectedKeyboardIds = keyboardBaseline.map((entry) => entry.id);
      const keyboardBaselineById = Object.fromEntries(keyboardBaseline.map((entry) => [entry.id, entry.style]));
      const expectedKeyboardControls = expectedKeyboardIds.length;
      await page.evaluate(() => {
        document.body.setAttribute("tabindex", "-1");
        document.body.focus();
        document.body.removeAttribute("tabindex");
      });
      const keyboardRecords = [];
      for (let index = 0; index < expectedKeyboardControls; index += 1) {
        await page.keyboard.press("Tab");
        await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(resolve)));
        keyboardRecords.push(await page.evaluate((baselineById) => {
          const element = document.activeElement;
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          const id = element?.dataset?.benchEvaluatorFocusId ?? null;
          const currentStyle = {
            outline_style: style.outlineStyle,
            outline_width: style.outlineWidth,
            outline_color: style.outlineColor,
            outline_offset: style.outlineOffset,
            box_shadow: style.boxShadow,
            background_color: style.backgroundColor,
            border_top_color: style.borderTopColor,
            border_right_color: style.borderRightColor,
            border_bottom_color: style.borderBottomColor,
            border_left_color: style.borderLeftColor,
            color: style.color,
            text_decoration_line: style.textDecorationLine,
            text_decoration_color: style.textDecorationColor,
          };
          const baseline = typeof id === "string" ? baselineById[id] : null;
          const focusStyleDelta = Boolean(baseline) && Object.keys(currentStyle).some((key) => currentStyle[key] !== baseline[key]);
          const matchesFocusVisible = element instanceof Element && element.matches(":focus-visible");
          return {
            id,
            matches_focus_visible: matchesFocusVisible,
            focus_style_delta: focusStyleDelta,
            focus_visible: matchesFocusVisible && focusStyleDelta,
            // WCAG 2.4.11 (AA) requires the focused component to remain at
            // least partially visible. Requiring the full bounding box makes a
            // focusable scroll region taller than the viewport impossible to
            // pass and confuses the AAA enhanced criterion with the AA gate.
            in_view:
              rect.right > 0 &&
              rect.left < document.documentElement.clientWidth &&
              rect.bottom > 0 &&
              rect.top < document.documentElement.clientHeight,
            fully_in_view:
              rect.left >= -1 &&
              rect.right <= document.documentElement.clientWidth + 1 &&
              rect.top >= -1 &&
              rect.bottom <= document.documentElement.clientHeight + 1,
          };
        }, keyboardBaselineById));
      }
      const keyboard = (() => {
        const ids = keyboardRecords.map((record) => record.id);
        return {
          expected_count: expectedKeyboardControls,
          expected_ids: expectedKeyboardIds,
          visited_count: keyboardRecords.length,
          visited_ids: ids,
          unique_visited: new Set(ids).size,
          stalled: ids.some((id, index) => index > 0 && id === ids[index - 1]),
          all_focus_visible: keyboardRecords.every((record) => record.focus_visible),
          all_in_view: keyboardRecords.every((record) => record.in_view),
          all_fully_in_view: keyboardRecords.every((record) => record.fully_in_view),
          records: keyboardRecords,
        };
      })();

      await page.evaluate(() => {
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      });
      await page.screenshot({ path: join(screenshotsDir, `${viewport.name}.png`), fullPage: true });
      viewportResults.push({
        name: viewport.name,
        width: viewport.width,
        height: viewport.height,
        zoom: viewport.zoom ?? 1,
        ...snapshot,
        axe,
        keyboard,
        console_errors: consoleErrors,
        external_requests: externalRequests,
      });

      if (viewport.name === "desktop") {
        if (behaviorAdapter === "pricing-v1") behavior = await page.evaluate(async () => {
          const visible = (element) => {
            const style = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            if (typeof element.checkVisibility === "function" && !element.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) return false;
            return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
          };
          const prices = [...document.querySelectorAll('[data-bench="price"]')];
          const monthly = document.querySelector('[data-period="monthly"]');
          const annual = document.querySelector('[data-period="annual"]');
          const billingState = () => ({
            prices: prices.map((node) => node.textContent.trim()),
            monthly_pressed: monthly?.getAttribute("aria-pressed"),
            annual_pressed: annual?.getAttribute("aria-pressed"),
            body_period: document.body.dataset.billing,
          });
          const billing = {
            nodes: prices.map((node) => ({
              visible: visible(node),
            })),
            initial: billingState(),
          };
          annual?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          billing.annual = billingState();
          monthly?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          billing.restored = billingState();

          const faq = [];
          for (const button of document.querySelectorAll('[data-bench="faq-button"]')) {
            const controls = button.getAttribute("aria-controls");
            const answer = controls ? document.getElementById(controls) : null;
            const state = () => ({ expanded: button.getAttribute("aria-expanded"), hidden: answer?.hidden });
            const entry = {
              controls,
              target_exists: Boolean(answer),
              button_visible: visible(button),
              initial: state(),
            };
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 20));
            entry.opened = state();
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 20));
            entry.closed = state();
            faq.push(entry);
          }

          const form = document.querySelector('[data-bench="signup-form"]');
          const email = document.querySelector('[data-bench="email"]');
          const status = document.querySelector('[data-bench="form-status"]');
          const presence = {
            form: form instanceof HTMLFormElement,
            email: email instanceof HTMLInputElement,
            status: status instanceof HTMLElement,
          };
          if (!Object.values(presence).every(Boolean)) {
            return { billing, faq, form: { presence, invalid: null, valid: null } };
          }
          email.value = "not-an-email";
          form.requestSubmit();
          await new Promise((resolve) => setTimeout(resolve, 20));
          const invalid = {
            aria_invalid: email.getAttribute("aria-invalid"),
            status: status.textContent.trim(),
            focused: document.activeElement === email,
          };
          email.value = "builder@example.com";
          form.requestSubmit();
          await new Promise((resolve) => setTimeout(resolve, 20));
          const valid = {
            aria_invalid: email.getAttribute("aria-invalid"),
            status: status.textContent.trim(),
          };
          return { billing, faq, form: { presence, invalid, valid } };
        });
        else if (behaviorAdapter === "onboarding-v1") behavior = await page.evaluate(async (oracle) => {
          const visible = (element) => {
            const style = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
          };
          const choiceConfig = oracle.choice;
          const choices = [...document.querySelectorAll(choiceConfig.selector)];
          const valueFor = (node) => node.getAttribute(choiceConfig.value_attribute);
          const choiceState = () => ({
            selected: document.body.dataset[choiceConfig.body_dataset],
            body_value: document.body.dataset[choiceConfig.body_dataset],
            pressed: Object.fromEntries(choices.map((node) => [valueFor(node), node.getAttribute("aria-pressed")])),
          });
          const choice = {
            nodes: choices.map((node) => ({ value: valueFor(node), visible: visible(node) })),
            initial: choiceState(),
          };
          choices.find((node) => valueFor(node) === choiceConfig.selected)?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          choice.selected = choiceState();
          choices.find((node) => valueFor(node) === choiceConfig.initial)?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          choice.restored = choiceState();

          const toggleNode = document.querySelector(oracle.toggle.selector);
          const toggle = {
            present: toggleNode instanceof HTMLElement,
            visible: toggleNode ? visible(toggleNode) : false,
            initial: toggleNode?.getAttribute("aria-pressed"),
          };
          toggleNode?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          toggle.enabled = toggleNode?.getAttribute("aria-pressed");
          toggleNode?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          toggle.restored = toggleNode?.getAttribute("aria-pressed");

          const form = document.querySelector(oracle.form.form_selector);
          const field = document.querySelector(oracle.form.field_selector);
          const status = document.querySelector(oracle.form.status_selector);
          const presence = {
            form: form instanceof HTMLFormElement,
            field: field instanceof HTMLInputElement,
            status: status instanceof HTMLElement,
          };
          if (!Object.values(presence).every(Boolean)) {
            return { choice, toggle, form: { presence, invalid: null, valid: null } };
          }
          field.value = oracle.form.invalid_value;
          form.requestSubmit();
          await new Promise((resolve) => setTimeout(resolve, 20));
          const invalid = {
            aria_invalid: field.getAttribute("aria-invalid"),
            status: status.textContent.trim(),
            focused: document.activeElement === field,
          };
          field.value = oracle.form.valid_value;
          form.requestSubmit();
          await new Promise((resolve) => setTimeout(resolve, 20));
          const valid = {
            aria_invalid: field.getAttribute("aria-invalid"),
            status: status.textContent.trim(),
          };
          return { choice, toggle, form: { presence, invalid, valid } };
        }, task.journey_oracle);
        else if (behaviorAdapter === "dashboard-v1") behavior = await page.evaluate(async (oracle) => {
          const visible = (element) => {
            const style = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
          };
          const filterConfig = oracle.filter;
          const filters = [...document.querySelectorAll(filterConfig.selector)];
          const valueFor = (node) => node.getAttribute(filterConfig.value_attribute);
          const filterState = () => ({
            selected: document.body.dataset[filterConfig.body_dataset],
            body_filter: document.body.dataset[filterConfig.body_dataset],
            pressed: Object.fromEntries(filters.map((node) => [valueFor(node), node.getAttribute("aria-pressed")])),
            visible_rows: [...document.querySelectorAll(filterConfig.row_selector)].filter(visible).length,
          });
          const filter = {
            nodes: filters.map((node) => ({ value: valueFor(node), visible: visible(node) })),
            initial: filterState(),
          };
          filters.find((node) => valueFor(node) === filterConfig.selected)?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          filter.filtered = filterState();
          filters.find((node) => valueFor(node) === filterConfig.initial)?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          filter.restored = filterState();

          const disclosure = [];
          for (const button of document.querySelectorAll(oracle.disclosure.selector)) {
            const controls = button.getAttribute("aria-controls");
            const target = controls ? document.getElementById(controls) : null;
            const state = () => ({ expanded: button.getAttribute("aria-expanded"), hidden: target?.hidden });
            const entry = { controls, target_exists: Boolean(target), button_visible: visible(button), initial: state() };
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 20));
            entry.opened = state();
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 20));
            entry.closed = state();
            disclosure.push(entry);
          }

          const button = document.querySelector(oracle.acknowledgement.button_selector);
          const status = document.querySelector(oracle.acknowledgement.status_selector);
          const acknowledgement = {
            presence: { button: button instanceof HTMLButtonElement, status: status instanceof HTMLElement },
            initial: { status: status?.textContent.trim(), pressed: button?.getAttribute("aria-pressed"), disabled: button?.disabled },
          };
          button?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          acknowledgement.acknowledged = {
            status: status?.textContent.trim(),
            pressed: button?.getAttribute("aria-pressed"),
            disabled: button?.disabled,
          };
          return { filter, disclosure, acknowledgement };
        }, task.journey_oracle);
        else if (behaviorAdapter === "approval-v1") behavior = await page.evaluate(async (oracle) => {
          const visible = (element) => {
            const style = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
          };
          const filterConfig = oracle.filter;
          const filters = [...document.querySelectorAll(filterConfig.selector)];
          const valueFor = (node) => node.getAttribute(filterConfig.value_attribute);
          const filterState = () => ({
            selected: document.body.dataset[filterConfig.body_dataset],
            body_filter: document.body.dataset[filterConfig.body_dataset],
            pressed: Object.fromEntries(filters.map((node) => [valueFor(node), node.getAttribute("aria-pressed")])),
            visible_rows: [...document.querySelectorAll(filterConfig.row_selector)].filter(visible).length,
          });
          const filter = {
            nodes: filters.map((node) => ({ value: valueFor(node), visible: visible(node) })),
            initial: filterState(),
          };
          filters.find((node) => valueFor(node) === filterConfig.selected)?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          filter.filtered = filterState();
          filters.find((node) => valueFor(node) === filterConfig.initial)?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          filter.restored = filterState();

          const disclosure = [];
          for (const button of document.querySelectorAll(oracle.disclosure.selector)) {
            const controls = button.getAttribute("aria-controls");
            const target = controls ? document.getElementById(controls) : null;
            const state = () => ({ expanded: button.getAttribute("aria-expanded"), hidden: target?.hidden });
            const entry = { controls, target_exists: Boolean(target), button_visible: visible(button), initial: state() };
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 20));
            entry.opened = state();
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 20));
            entry.closed = state();
            disclosure.push(entry);
          }

          const config = oracle.decision;
          const openButton = document.querySelector(config.open_button_selector);
          const dialog = document.querySelector(config.dialog_selector);
          const cancelButton = document.querySelector(config.cancel_button_selector);
          const confirmButton = document.querySelector(config.confirm_button_selector);
          const status = document.querySelector(config.status_selector);
          const dialogState = () => ({
            open: dialog instanceof HTMLDialogElement ? dialog.open : dialog?.getAttribute("aria-hidden") !== "true",
            visible: dialog ? visible(dialog) : false,
          });
          const decision = {
            presence: {
              open_button: openButton instanceof HTMLButtonElement,
              dialog: dialog instanceof HTMLDialogElement,
              cancel_button: cancelButton instanceof HTMLButtonElement,
              confirm_button: confirmButton instanceof HTMLButtonElement,
              status: status instanceof HTMLElement,
            },
            initial: { ...dialogState(), status: status?.textContent.trim() },
          };
          openButton?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          decision.opened = {
            ...dialogState(),
            focus_inside: dialog instanceof HTMLElement && dialog.contains(document.activeElement),
          };
          cancelButton?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          decision.cancelled = {
            ...dialogState(),
            focus_restored: document.activeElement === openButton,
          };
          openButton?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          confirmButton?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          decision.confirmed = {
            ...dialogState(),
            status: status?.textContent.trim(),
            focus_restored: document.activeElement === openButton,
          };
          return { filter, disclosure, decision };
        }, task.journey_oracle);
        else if (behaviorAdapter === "locale-switch-v1") behavior = await page.evaluate(async (oracle) => {
          const visible = (element) => {
            const style = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            if (typeof element.checkVisibility === "function" &&
              !element.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) return false;
            return style.display !== "none" && style.visibility !== "hidden" &&
              style.opacity !== "0" && rect.width > 0 && rect.height > 0;
          };
          const config = oracle.locale_switch;
          const buttons = [...document.querySelectorAll(config.button_selector)];
          const panels = [...document.querySelectorAll(config.panel_selector)];
          const valueFor = (node) => node.getAttribute(config.value_attribute);
          const panelLocale = (node) => node.getAttribute(config.panel_value_attribute);
          const state = () => ({
            active: document.body.dataset[config.body_dataset],
            body_locale: document.body.dataset[config.body_dataset],
            root_lang: document.documentElement.lang,
            pressed: Object.fromEntries(buttons.map((button) => [
              valueFor(button),
              button.getAttribute("aria-selected") ?? button.getAttribute("aria-pressed"),
            ])),
            visible_panels: panels.filter(visible).map(panelLocale),
          });
          const result = {
            buttons: buttons.map((button) => ({ locale: valueFor(button), visible: visible(button) })),
            panels: panels.map((panel) => ({
              locale: panelLocale(panel),
              lang: panel.getAttribute("lang"),
              text: panel.textContent.replace(/\s+/g, " ").trim(),
            })),
            initial: state(),
            states: [],
            handoffs: [],
          };
          const initialButton = buttons.find((button) => valueFor(button) === config.initial);
          initialButton?.click();
          initialButton?.focus();
          result.keyboard_tabs = {
            start_focus: document.activeElement instanceof Element
              ? valueFor(document.activeElement)
              : null,
            forward: [],
            reverse: null,
          };
          for (let index = 0; index < config.locales.length; index += 1) {
            document.activeElement?.dispatchEvent(new KeyboardEvent("keydown", {
              key: "ArrowRight",
              bubbles: true,
              cancelable: true,
            }));
            await new Promise((resolve) => setTimeout(resolve, 20));
            result.keyboard_tabs.forward.push({
              focused: document.activeElement instanceof Element
                ? valueFor(document.activeElement)
                : null,
              ...state(),
            });
          }
          initialButton?.click();
          initialButton?.focus();
          document.activeElement?.dispatchEvent(new KeyboardEvent("keydown", {
            key: "ArrowLeft",
            bubbles: true,
            cancelable: true,
          }));
          await new Promise((resolve) => setTimeout(resolve, 20));
          result.keyboard_tabs.reverse = {
            focused: document.activeElement instanceof Element
              ? valueFor(document.activeElement)
              : null,
            ...state(),
          };
          for (const locale of config.locales) {
            buttons.find((button) => valueFor(button) === locale)?.click();
            await new Promise((resolve) => setTimeout(resolve, 20));
            result.states.push({ locale, ...state() });
            const panel = panels.find((candidate) => panelLocale(candidate) === locale);
            const action = panel?.querySelector(config.action_selector);
            const status = panel?.querySelector(config.status_selector);
            const before = status?.textContent.trim();
            let clipboardBefore = null;
            let clipboardAfter = null;
            try {
              await navigator.clipboard.writeText("");
              clipboardBefore = await navigator.clipboard.readText();
            } catch {
              clipboardBefore = null;
            }
            action?.click();
            await new Promise((resolve) => setTimeout(resolve, 40));
            try {
              clipboardAfter = await navigator.clipboard.readText();
            } catch {
              clipboardAfter = null;
            }
            result.handoffs.push({
              locale,
              action_present: action instanceof HTMLElement,
              action_visible: action ? visible(action) : false,
              before,
              after: status?.textContent.trim(),
              clipboard_before: clipboardBefore,
              clipboard_after: clipboardAfter,
              copied_marker: action?.getAttribute("data-copied"),
            });
          }
          buttons.find((button) => valueFor(button) === config.initial)?.click();
          await new Promise((resolve) => setTimeout(resolve, 20));
          result.restored = state();
          return result;
        }, task.journey_oracle);
        else throw new Error(`unsupported behavior adapter: ${behaviorAdapter}`);

        semantics = snapshot;
        design = await page.evaluate((selectors) => {
          const primary = document.querySelector(selectors.primary_action);
          const plan = document.querySelector(selectors.card);
          const display = document.querySelector(selectors.display);
          return {
            page_background: getComputedStyle(document.body).backgroundColor,
            primary_action: primary ? getComputedStyle(primary).backgroundColor : null,
            card_radius_px: plan ? parseFloat(getComputedStyle(plan).borderRadius) : null,
            control_radius_px: primary ? parseFloat(getComputedStyle(primary).borderRadius) : null,
            body_font: getComputedStyle(document.body).fontFamily,
            display_font: display ? getComputedStyle(display).fontFamily : null,
          };
        }, task.design_oracle.selectors ?? {
          primary_action: '[data-bench="signup-form"] button[type="submit"], .button.primary, [data-primary-action]',
          card: ".plan",
          display: "h1",
        });
        evidenceSources = await page.evaluate(() => {
          const sources = [];
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
              const parent = node.parentElement;
              if (!parent || parent.closest("script, style, template, noscript")) return NodeFilter.FILTER_REJECT;
              return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            },
          });
          while (walker.nextNode()) {
            const parent = walker.currentNode.parentElement;
            sources.push({
              source: `text:${parent.tagName.toLowerCase()}${parent.id ? `#${parent.id}` : ""}`,
              text: walker.currentNode.textContent.trim(),
            });
          }
          for (const element of document.querySelectorAll("[aria-label], [title], [alt], [placeholder]")) {
            for (const attribute of ["aria-label", "title", "alt", "placeholder"]) {
              const text = element.getAttribute(attribute)?.trim();
              if (text) sources.push({ source: `${attribute}:${element.tagName.toLowerCase()}`, text });
            }
          }
          sources.push({ source: "document:title", text: document.title });
          for (const meta of document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]')) {
            if (meta.content.trim()) sources.push({ source: `meta:${meta.getAttribute("name") ?? meta.getAttribute("property")}`, text: meta.content.trim() });
          }
          return sources;
        });
        unsupportedStructures = await page.evaluate((selectors) => selectors.flatMap((selector) =>
          [...document.querySelectorAll(selector)].map((element) => ({
            selector,
            tag: element.tagName.toLowerCase(),
            excerpt: (element.textContent || element.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim().slice(0, 160),
          })),
        ), task.protected_unknown_selectors);
      }
      await context.close();
    }
  } finally {
    await browser.close();
    await new Promise((resolveClose) => server.close(resolveClose));
  }

  const desktop = viewportResults.find((viewport) => viewport.name === "desktop");
  const mobile = viewportResults.find((viewport) => viewport.name === "mobile");
  const narrow = viewportResults.find((viewport) => viewport.name === "narrow-320");
  const zoomSurrogate = viewportResults.find((viewport) => viewport.name === "css-zoom-surrogate-200") ??
    viewportResults.find((viewport) => viewport.name === "zoom-reflow-200");
  const protectedHooks = evaluateProtectedHookCounts(viewportResults, task.protected_hook_counts);
  let stateChecks;
  let stateDetails;
  if (behaviorAdapter === "pricing-v1") {
    const billingChecks = evaluateBillingObservation(behavior?.billing, task.billing_expectations);
    const faqExpected = task.protected_hook_counts['[data-bench=\'faq-button\']'];
    const faqChecks = evaluateFaqObservations(
      behavior?.faq,
      typeof faqExpected === "number" ? faqExpected : faqExpected?.total,
    );
    const formChecks = evaluateFormObservation(behavior?.form);
    stateChecks = {
      billing: everyCheckPass(billingChecks),
      faq: everyCheckPass(faqChecks),
      form: everyCheckPass(formChecks),
    };
    stateDetails = { billing: billingChecks, faq: faqChecks, form: formChecks };
  } else if (behaviorAdapter === "onboarding-v1") {
    const choiceChecks = evaluateChoiceObservation(behavior?.choice, task.journey_oracle?.choice);
    const toggleChecks = evaluateToggleObservation(behavior?.toggle);
    const formChecks = evaluateFormObservation(behavior?.form);
    stateChecks = {
      choice: everyCheckPass(choiceChecks),
      toggle: everyCheckPass(toggleChecks),
      form: everyCheckPass(formChecks),
    };
    stateDetails = { choice: choiceChecks, toggle: toggleChecks, form: formChecks };
  } else if (behaviorAdapter === "dashboard-v1") {
    const filterChecks = evaluateFilterObservation(behavior?.filter, task.journey_oracle?.filter);
    const disclosureChecks = evaluateFaqObservations(
      behavior?.disclosure,
      task.journey_oracle?.disclosure?.count,
    );
    const acknowledgementChecks = evaluateAcknowledgementObservation(behavior?.acknowledgement);
    stateChecks = {
      filter: everyCheckPass(filterChecks),
      disclosure: everyCheckPass(disclosureChecks),
      acknowledgement: everyCheckPass(acknowledgementChecks),
    };
    stateDetails = {
      filter: filterChecks,
      disclosure: disclosureChecks,
      acknowledgement: acknowledgementChecks,
    };
  } else if (behaviorAdapter === "approval-v1") {
    const filterChecks = evaluateFilterObservation(behavior?.filter, task.journey_oracle?.filter);
    const disclosureChecks = evaluateFaqObservations(
      behavior?.disclosure,
      task.journey_oracle?.disclosure?.count,
    );
    const decisionChecks = evaluateApprovalDecisionObservation(behavior?.decision);
    stateChecks = {
      filter: everyCheckPass(filterChecks),
      disclosure: everyCheckPass(disclosureChecks),
      decision: everyCheckPass(decisionChecks),
    };
    stateDetails = {
      filter: filterChecks,
      disclosure: disclosureChecks,
      decision: decisionChecks,
    };
  } else if (behaviorAdapter === "locale-switch-v1") {
    const localeChecks = evaluateLocaleSwitchObservation(
      behavior,
      task.journey_oracle?.locale_switch,
      task.locale_oracle,
    );
    stateChecks = {
      navigation: everyCheckPass(localeChecks.navigation),
      content: everyCheckPass(localeChecks.content),
      handoff: everyCheckPass(localeChecks.handoff),
    };
    stateDetails = localeChecks;
  } else {
    throw new Error(`unsupported behavior adapter: ${behaviorAdapter}`);
  }
  const geometry = Object.fromEntries(viewportResults.map((viewport) => [
    viewport.name,
    evaluateViewportGeometry(
      viewport,
      task.text_geometry_oracle?.viewports?.includes(viewport.name)
        ? task.text_geometry_oracle
        : null,
      task.decision_hierarchy_oracle?.viewports?.includes(viewport.name)
        ? task.decision_hierarchy_oracle
        : null,
    ),
  ]));
  const keyboard = Object.fromEntries(viewportResults.map((viewport) => [viewport.name, evaluateKeyboardTraversal(viewport.keyboard)]));
  const observationPresence = {
    all_viewports: viewportResults.length === task.viewports.length,
    desktop: Boolean(desktop),
    behavior: Boolean(behavior),
    semantics: Boolean(semantics),
    design: Boolean(design),
  };
  const landmarkChecks = evaluateLandmarkObservation(semantics, task.semantic_oracle?.landmarks);
  const contractChecks = {
    observations_complete: everyCheckPass(observationPresence),
    protected_hooks_exact: protectedHooks.exact,
    landmarks: everyCheckPass(landmarkChecks),
    console_clean:
      viewportResults.length === task.viewports.length &&
      viewportResults.every((viewport) => viewport.console_errors.length === 0),
    localhost_only:
      viewportResults.length === task.viewports.length &&
      viewportResults.every((viewport) => viewport.external_requests.length === 0),
  };
  const responsiveChecks = {
    desktop_geometry: everyCheckPass(geometry.desktop),
    mobile_geometry: everyCheckPass(geometry.mobile),
    narrow_320_geometry: everyCheckPass(geometry["narrow-320"]),
    css_zoom_surrogate_200_geometry: everyCheckPass(
      geometry["css-zoom-surrogate-200"] ?? geometry["zoom-reflow-200"],
    ),
    mobile_minimum_targets:
      mobile?.small_targets === 0 &&
      narrow?.small_targets === 0 &&
      zoomSurrogate?.small_targets === 0,
  };
  const accessibilityChecks = {
    axe_serious_or_critical:
      viewportResults.length === task.viewports.length &&
      viewportResults.every((viewport) => viewport.axe.serious_or_critical === 0),
    named_controls:
      viewportResults.length === task.viewports.length &&
      viewportResults.every((viewport) => viewport.unnamed_controls === 0),
    labelled_inputs:
      viewportResults.length === task.viewports.length &&
      viewportResults.every((viewport) => viewport.unlabeled_inputs === 0),
    image_alt:
      viewportResults.length === task.viewports.length &&
      viewportResults.every((viewport) => viewport.images_without_alt === 0),
    keyboard_traversal:
      Object.keys(keyboard).length === task.viewports.length &&
      Object.values(keyboard).every(everyCheckPass),
    language: typeof semantics?.lang === "string" && semantics.lang.toLowerCase().startsWith(task.locale),
  };
  const oracle = task.design_oracle ?? {};
  const fontChecks = evaluateFontOracle(design, oracle.font_family);
  const designChecks = evaluateDesignObservation(design, oracle);
  const unsupportedClaims = findUnsupportedClaims(
    evidenceSources,
    task.protected_unknown_patterns,
    task.protected_known_patterns,
  );
  const evidenceChecks = {
    evidence_ledger_complete: evidenceSources.length > 0,
    no_protected_unknown_claims: unsupportedClaims.length === 0,
    no_unsupported_proof_structures: unsupportedStructures.length === 0,
  };

  const points = {
    task_contract:
      (contractChecks.protected_hooks_exact ? 10 : 0) +
      (contractChecks.landmarks ? 5 : 0) +
      (contractChecks.console_clean ? 5 : 0) +
      (contractChecks.localhost_only ? 5 : 0),
    design_grounding: Object.values(designChecks).filter(Boolean).length * 4,
    state_journey: Object.values(stateChecks).filter(Boolean).length * 5,
    responsive:
      (responsiveChecks.desktop_geometry ? 2 : 0) +
      (responsiveChecks.mobile_geometry ? 2 : 0) +
      (responsiveChecks.narrow_320_geometry ? 2 : 0) +
      (responsiveChecks.css_zoom_surrogate_200_geometry ? 2 : 0) +
      (responsiveChecks.mobile_minimum_targets ? 2 : 0),
    accessibility:
      (accessibilityChecks.axe_serious_or_critical ? 4 : 0) +
      (accessibilityChecks.named_controls ? 1 : 0) +
      (accessibilityChecks.labelled_inputs ? 1 : 0) +
      (accessibilityChecks.image_alt ? 1 : 0) +
      (accessibilityChecks.keyboard_traversal ? 2 : 0) +
      (accessibilityChecks.language ? 1 : 0),
    evidence_honesty: Object.values(evidenceChecks).every(Boolean) ? 5 : 0,
  };
  const deterministicScore = Object.values(points).reduce((sum, value) => sum + value, 0);
  const criticalGates = {
    task_contract: Object.values(contractChecks).every(Boolean),
    state_journey: Object.values(stateChecks).every(Boolean),
    responsive: Object.values(responsiveChecks).every(Boolean),
    accessibility: points.accessibility === 10,
    design_grounding: points.design_grounding >= 16,
    evidence_honesty: Object.values(evidenceChecks).every(Boolean),
  };

  const score = {
    schema_version: "0.5",
    task_id: task.id,
    variant_id: manifest.variant.id,
    evaluated_at: new Date().toISOString(),
    status: {
      automated_gate_pass: Object.values(criticalGates).every(Boolean),
      visual_review: "not_run",
      reason: "Automated gates cover objective task requirements only; Ship Preference requires a separate blinded practitioner review."
    },
    points: {
      ...points,
      deterministic_total: deterministicScore,
      deterministic_max: 85,
      efficiency: null,
      ship_preference: null,
      final_total: null,
    },
    critical_gates: criticalGates,
    checks: {
      observation_presence: observationPresence,
      contract: contractChecks,
      landmark_details: landmarkChecks,
      states: stateChecks,
      state_details: stateDetails,
      responsive: responsiveChecks,
      geometry,
      accessibility: accessibilityChecks,
      keyboard,
      design: designChecks,
      font_oracle: fontChecks,
      evidence: evidenceChecks,
    },
    observations: {
      viewports: viewportResults,
      behavior,
      computed_design: design,
      protected_hook_mismatches: protectedHooks.mismatches,
      evidence_ledger: {
        sources_scanned: evidenceSources.length,
        sources: evidenceSources,
        unsupported_claims: unsupportedClaims,
        unsupported_structures: unsupportedStructures,
      },
      unsupported_claims: unsupportedClaims,
    },
  };
  writeJson(join(benchmarkDir, "score.json"), score);
  console.log(JSON.stringify(score, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}

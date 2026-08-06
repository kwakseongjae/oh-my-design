import { afterEach, describe, expect, it } from "vitest";
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  applyPlanDecisionPacket,
  createPlanDecisionPacket,
  diagnosePlanReconcile,
  deliveryMarker,
  executeStaticClosure,
  finalizeArtifact,
  hostObservedBrowserAttempt,
  inventoryDigest,
  lockArtifact,
} from "../../../skills/omd-apply/scripts/reflow-artifact.mjs";

const browserRunnerPath = join(process.cwd(), "skills/omd-apply/scripts/reflow-browser.py");

const temporaryRoots = [];

afterEach(() => {
  for (const root of temporaryRoots.splice(0)) rmSync(root, { recursive: true, force: true });
});

function hostState(browser_attempts, browser_proof) {
  const root = mkdtempSync(join(tmpdir(), "omd-reflow-host-"));
  temporaryRoots.push(root);
  mkdirSync(root, { recursive: true });
  writeFileSync(join(root, "state.json"), JSON.stringify({
    state: { browser_attempts, browser_proof },
  }));
  return root;
}

function measuredFitPlan(rows, carriers) {
  return {
    state: "measured",
    attempts: 1,
    mechanism: "browser-harness named consumer CDP attachment",
    connection: {
      transport: "existing-cdp",
      connection_name: "bench-test",
      cdp_url: "http://127.0.0.1:9336",
      attached_existing: true,
      launched_browser: false,
    },
    oracle: "intrinsic-nowrap-text-width",
    conditions: measuredConditions(),
    rows: rows.map((row, rowIndex) => ({
      id: row.id,
      measurements: ["390", "320", "200pct"].map((id, conditionIndex) => ({
        id,
        intrinsic_text_width_css_px: 100 + rowIndex + conditionIndex,
        required_carrier_inner_width_css_px: 116 + rowIndex + conditionIndex,
      })),
    })),
    carriers: carriers.map((carrier, carrierIndex) => ({
      id: carrier.id,
      contained_carrier_ids: [],
      measurements: [
        { id: "390", available: 390 },
        { id: "320", available: 320 },
        { id: "200pct", available: 160 },
      ].map(({ id, available }, conditionIndex) => {
        const intrinsic = 180 + carrierIndex + conditionIndex;
        const required = intrinsic + 16;
        return {
          id,
          intrinsic_outer_width_css_px: intrinsic,
          horizontal_chrome_css_px: 24,
          inter_item_gap_css_px: 8,
          required_outer_width_css_px: required,
          available_document_width_css_px: available,
          available_carrier_inner_width_css_px: available - 32,
          requires_reflow: required > available,
        };
      }),
    })),
  };
}

function draft() {
  const artifact = {
    schema_version: "0.3",
    browser_connection_contract: {
      transport: "existing-cdp",
      connection_name_env: "BU_NAME",
      cdp_url_env: "BU_CDP_URL",
      allow_browser_launch: false,
      mechanism: "browser-harness named consumer CDP attachment",
    },
    acceptance_sequence: {
      source_inspection_complete: true,
      product_edit_transaction: "single-planned-transaction",
      post_edit_commands: ["consolidated-static-closure", "browser-harness-terminal"],
    },
    static_closure_manifest: {
      product_path: "index.html",
      required_literals: ["required-fact"],
      forbidden_literals: ["forbidden-claim"],
      forbidden_patterns: ["word-break\\s*:"],
      forbidden_css_declarations: [
        { selector: ".ledger", property: "min-width", value_contract: "positive-length" },
        { selector: ".decision", property: "grid-template-columns", value_contract: "any-declaration" },
      ],
      count_literals: [{ literal: "data-id=", expected_count: 1 }],
    },
    measurement_conditions: [
      { id: "390", viewport_width: 390, zoom: 1 },
      { id: "320", viewport_width: 320, zoom: 1 },
      { id: "200pct", viewport_width: 640, zoom: 2 },
    ],
    acceptance_debt_ledger: [
      {
        id: "identifier-fit",
        gate: "inline-fit-reserve",
        selector: "[data-id]",
        baseline_evidence: "supplied identifier can overflow the narrow carrier",
        required_correction: "reflow the existing carrier without shrinking or breaking the identifier",
        required_outcome: "all instances retain at least 8 CSS px reserve at 390, 320, and 200pct",
        proof_mode: "browser-row",
        bound_row_group_ids: ["identifier"],
        status: "must-fix-before-static-close",
        static_guardrail: {
          required_literals: ["required-fact"],
          forbidden_literals: [],
          forbidden_patterns: ["word-break\\s*:"],
          forbidden_css_declarations: [
            { selector: ".ledger", property: "min-width", value_contract: "positive-length" },
          ],
        },
      },
    ],
    carriers: [
      { id: "plan", selector: "[data-plan]", expected_count: 1, binds_row_groups: ["identifier"] },
      { id: "handoff", selector: "[data-handoff]", expected_count: 1, binds_row_groups: ["status"] },
    ],
    row_groups: [
      { id: "identifier", selector: "[data-id]", role: "identifier", expected_count: 8, longest_value: "ULD-AKE-73102", line_contract: "single-token", typography_contract: { font_size_px: 14, line_height_px: 20, font_weight: "400" }, required_fit_reserve_css_px: 8, planned_fit_reserve_css_px: 16, decision: "keep" },
      { id: "status", selector: "[role=status]", role: "state", expected_count: 1, longest_value: "Ground review open", line_contract: "single-token", typography_contract: { font_size_px: 14, line_height_px: 20, font_weight: "600" }, required_fit_reserve_css_px: 8, planned_fit_reserve_css_px: 16, decision: "keep" },
    ],
    invariants: {
      same_row_count: true,
      same_decision_boundary: true,
      all_registered_carriers_closed: true,
      no_text_hack: true,
    },
  };
  artifact.pre_edit_fit_plan = measuredFitPlan(artifact.row_groups, artifact.carriers);
  return artifact;
}

function sourceContract({ forbiddenPatterns = [] } = {}) {
  return {
    schema_version: "0.1",
    structured_css_only: true,
    product_path: "index.html",
    required_literals: ["required-fact"],
    forbidden_literals: [],
    forbidden_patterns: forbiddenPatterns,
    forbidden_css_declarations: [],
    count_literals: [{ literal: 'data-bench-decision-role="target"', expected_count: 1 }],
    acceptance_debt_ledger: [{
      id: "target-fit",
      gate: "inline-fit-reserve",
      selector: '[data-bench-decision-role="target"]',
      baseline_evidence: "target relationship can exceed the narrow carrier",
      required_correction: "preserve the relationship in a named horizontal carrier",
      required_outcome: "the target remains intact",
      proof_mode: "browser-row",
      bound_row_group_ids: ["target"],
      status: "must-fix-before-static-close",
      static_guardrail: {
        required_literals: ["required-fact"],
        forbidden_literals: [],
        forbidden_patterns: [],
        required_css_declarations: [{
          selector: ".ledger",
          property: "grid-template-columns",
          value: "1fr",
          value_contract: "any-value",
        }],
        forbidden_css_declarations: [],
      },
    }],
    carriers: [{
      id: "target-carrier",
      selector: "[data-decision] > .target-carrier",
      expected_count: 1,
      binds_row_groups: ["target"],
    }],
    row_groups: [{
      id: "target",
      selector: '[data-bench-decision-role="target"]',
      role: "target",
      expected_count: 1,
      longest_value: "FS-TC-24-017 + BAG-SEAL-884021",
      atomic_parts: ["FS-TC-24-017", "BAG-SEAL-884021"],
      line_contract: "parent-one-line",
      typography_contract: { source: "deterministic-pre-edit-snapshot" },
      required_fit_reserve_css_px: 8,
      planned_fit_reserve_css_px: 16,
      decision: "comparison-scroll",
      scroll_contract: {
        container_selector: "[data-decision] > .target-carrier",
        accessible_name: "Custody target relationship",
        keyboard_reachable: true,
        focus_visible: true,
        passive_text_scroll_container: false,
      },
    }],
    invariants: {
      same_row_count: true,
      same_decision_boundary: true,
      all_registered_carriers_closed: true,
      no_text_hack: true,
    },
  };
}

function staticClosed(artifact, source = '<div data-id="fixture">required-fact</div>') {
  return executeStaticClosure(artifact, {
    productPath: join(process.cwd(), "index.html"),
    source,
  });
}

function replacePreEditSnapshotSource(artifact, source) {
  artifact.pre_edit_product_snapshot = {
    product_path: "index.html",
    sha256: createHash("sha256").update(source).digest("hex"),
    source_base64: Buffer.from(source).toString("base64"),
  };
}

function measuredConditions() {
  return [
    { id: "390", viewport_width: 390, zoom: 1, observed_document_zoom: 1, document_scroll_width: 390, document_client_width: 390, body_scroll_width: 390, body_client_width: 390 },
    { id: "320", viewport_width: 320, zoom: 1, observed_document_zoom: 1, document_scroll_width: 320, document_client_width: 320, body_scroll_width: 320, body_client_width: 320 },
    { id: "200pct", viewport_width: 640, zoom: 2, observed_document_zoom: 2, document_scroll_width: 320, document_client_width: 320, body_scroll_width: 320, body_client_width: 320 },
  ];
}

const browserEnv = { BU_NAME: "bench-test", BU_CDP_URL: "http://127.0.0.1:9336" };

function measuredAttempt(conditions = measuredConditions()) {
  return {
    attempts: 1,
    outcome: "measured",
    mechanism: "browser-harness named consumer CDP attachment",
    connection: { transport: "existing-cdp", connection_name: "bench-test", cdp_url: "http://127.0.0.1:9336", attached_existing: true, launched_browser: false },
    oracle: "character-range-line-tops",
    conditions,
  };
}

function resolvedRowFinal(row) {
  return {
    status: "pass",
    outcome_390: "pass",
    outcome_320: "pass",
    outcome_200pct: "pass",
    measurements: ["390", "320", "200pct"].map((id) => ({
      id,
      observed_font_size_px: row.typography_contract.font_size_px,
      observed_line_height_px: row.typography_contract.line_height_px,
      observed_font_weight: row.typography_contract.font_weight,
      inline_reserve_css_px: 8,
    })),
  };
}

describe("compact reflow artifact helper", () => {
  it("ships a named-CDP browser runner without a browser launch fallback", () => {
    const runner = readFileSync(browserRunnerPath, "utf8");
    expect(runner).toContain('MECHANISM = "browser-harness named consumer CDP attachment"');
    expect(runner).toContain('os.environ.get("BU_NAME")');
    expect(runner).toContain('os.environ.get("BU_CDP_URL")');
    expect(runner).not.toContain("if not connection_name or not cdp_url");
    expect(runner).toContain('"Emulation.setDeviceMetricsOverride"');
    expect(runner).toContain("decision_context: decisionContext");
    expect(runner).toContain("browser_decision_context_script");
    expect(runner).toContain('DESKTOP_DECISION_CONDITION = {"id": "desktop", "viewport_width": 1440, "zoom": 1}');
    expect(runner).toContain('"decision_context_conditions"');
    expect(runner).toContain('"outcome_desktop"');
    expect(runner).toContain("contained_carrier_ids");
    expect(runner).toContain('"scroll_and_focus": carrier_result["scroll_and_focus"]');
    expect(runner).toContain("const contentWidth = context.clientWidth - paddingInline");
    expect(runner).toContain("const carrierWidth = carrier.offsetWidth");
    expect(runner).toContain("OMD_PLAN_MEASURED_RECONCILE_REQUIRED");
    expect(runner).toContain("plan-packet");
    expect(runner).toContain("operator_inputs");
    expect(runner).toContain("If the packet verdict is irreconcilable, abort this run before any product edit");
    expect(runner).toContain("plan-apply");
    expect(runner).toContain("context_content_width_css_px: contentWidth");
    expect(runner).not.toContain("contextRect.width - parseFloat(contextStyle.paddingLeft)");
    expect(runner).toContain("full_row: fullRow");
    expect(runner).toContain("precedes_supporting: precedesSupporting");
    expect(runner).toContain("spatially_separated: spatiallySeparated");
    expect(runner).toContain('ORACLE = "character-range-line-tops"');
    expect(runner).toContain('FIT_PLAN_ORACLE = "intrinsic-nowrap-text-width"');
    expect(runner).toContain('mode = os.environ.get("OMD_REFLOW_MODE", "final")');
    expect(runner).toContain("browser_fit_plan_script");
    expect(runner).toContain("intrinsicCarrierWidth");
    expect(runner).toContain("intrinsic_outer_width_css_px");
    expect(runner).toContain("required_outer_width_css_px");
    expect(runner).toContain("available_document_width_css_px");
    expect(runner).toContain("available_carrier_inner_width_css_px");
    expect(runner).toContain("live_inner_width_css_px");
    expect(runner).toContain("contained_document_budget_css_px");
    expect(runner).toContain("Math.min(liveInnerWidth, containedDocumentBudget)");
    expect(runner).toContain("document.documentElement.clientWidth / zoom - sourceHorizontalChrome - horizontalMargin");
    expect(runner).toContain("width: 'max-content'");
    expect(runner).toContain('"plan-close"');
    expect(runner).toContain('PRE_EDIT_SNAPSHOT_SOURCE = "deterministic-pre-edit-snapshot"');
    expect(runner).toContain("OMD_PLAN_NOT_ATTEMPTED:");
    expect(runner).toContain("the one measured pre-edit fit-plan attempt is already recorded; do not rerun it");
    expect(runner).toContain('["node", str(helper_path), "snapshot", str(artifact_path)]');
    expect(runner.indexOf('["node", str(helper_path), "snapshot", str(artifact_path)]'))
      .toBeLessThan(runner.indexOf("ensure_real_tab()", runner.indexOf('if mode == "plan":')));
    expect(runner).toContain("browser_typography_script");
    expect(runner).toContain("pre_edit_snapshot_sha256");
    expect(runner).toContain("allowedScrollSelectors");
    expect(runner).toContain("focusablesUnclipped");
    expect(runner).toContain("noFocusableDescendants");
    expect(runner).toContain("carrierStyle.borderRightWidth");
    expect(runner).not.toContain("carrierStyle.paddingRight");
    expect(runner).toContain('finalize_command = "finalize" if all_pass else "finalize-measured-unresolved"');
    expect(runner).toContain('["node", str(helper_path), finalize_command, str(artifact_path)]');
    expect(runner).not.toMatch(/chromium\.launch|launch_persistent_context|connect_over_cdp/u);
  });

  it("self-dispatches a mistaken plain-Python runner invocation before artifact access", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-browser-dispatch-"));
    temporaryRoots.push(root);
    const capturePath = join(root, "captured-runner.py");
    const fakeHarness = join(root, "browser-harness");
    writeFileSync(fakeHarness, `#!/bin/sh\ncat > "$OMD_REFLOW_DISPATCH_CAPTURE"\nexit 23\n`);
    chmodSync(fakeHarness, 0o755);

    const result = spawnSync("python3", [browserRunnerPath], {
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${root}:${process.env.PATH}`,
        OMD_REFLOW_DISPATCH_CAPTURE: capturePath,
      },
    });

    expect(result.status).toBe(23);
    expect(result.stderr).toBe("");
    expect(readFileSync(capturePath, "utf8")).toBe(readFileSync(browserRunnerPath, "utf8"));
  });

  it("bootstraps a missing pre-edit snapshot before the measured browser attempt", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-plan-bootstrap-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const runnerPath = join(root, "instrumented-runner.py");
    const browserMarker = join(root, "browser-called");
    const input = draft();
    input.pre_edit_fit_plan = { state: "pending" };
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(
      productPath,
      '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>',
    );
    writeFileSync(
      runnerPath,
      `def ensure_real_tab():\n    Path(os.environ["OMD_TEST_BROWSER_MARKER"]).write_text("called")\n    raise RuntimeError("measured-browser-sentinel")\n\n${readFileSync(browserRunnerPath, "utf8")}`,
    );

    const result = spawnSync("python3", [runnerPath], {
      cwd: root,
      encoding: "utf8",
      env: {
        ...process.env,
        BU_NAME: "bench-test",
        OMD_REFLOW_MODE: "plan",
        OMD_REFLOW_ARTIFACT: artifactPath,
        OMD_REFLOW_PRODUCT: productPath,
        OMD_REFLOW_HELPER: join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
        OMD_TEST_BROWSER_MARKER: browserMarker,
      },
    });

    expect(result.status).toBe(1);
    expect(result.stderr).not.toContain("OMD_PLAN_NOT_ATTEMPTED");
    expect(readFileSync(browserMarker, "utf8")).toBe("called");
    const bootstrapped = JSON.parse(readFileSync(artifactPath, "utf8"));
    expect(bootstrapped.pre_edit_product_snapshot).toMatchObject({
      product_path: "index.html",
      sha256: createHash("sha256").update(readFileSync(productPath, "utf8")).digest("hex"),
    });
    expect(bootstrapped.pre_edit_fit_plan).toMatchObject({
      state: "infrastructure-error",
      attempts: 1,
      error: "measured-browser-sentinel",
    });
  });

  it("does not consume the measured plan attempt when snapshot validation fails before navigation", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-plan-not-attempted-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const runnerPath = join(root, "instrumented-runner.py");
    const browserMarker = join(root, "browser-called");
    const input = draft();
    input.pre_edit_fit_plan = { state: "pending" };
    input.row_groups[0].selector = ".post-edit-only";
    input.row_groups[0].typography_contract = { source: "deterministic-pre-edit-snapshot" };
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(
      productPath,
      '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>',
    );
    writeFileSync(
      runnerPath,
      `def ensure_real_tab():\n    Path(os.environ["OMD_TEST_BROWSER_MARKER"]).write_text("called")\n\n${readFileSync(browserRunnerPath, "utf8")}`,
    );

    const result = spawnSync("python3", [runnerPath], {
      cwd: root,
      encoding: "utf8",
      env: {
        ...process.env,
        BU_NAME: "bench-test",
        OMD_REFLOW_MODE: "plan",
        OMD_REFLOW_ARTIFACT: artifactPath,
        OMD_REFLOW_PRODUCT: productPath,
        OMD_REFLOW_HELPER: join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
        OMD_TEST_BROWSER_MARKER: browserMarker,
      },
    });

    expect(result.status).toBe(1);
    expect(result.stderr).toContain("OMD_PLAN_NOT_ATTEMPTED:");
    expect(result.stderr).toContain("does not consume the one measured plan attempt");
    expect(() => readFileSync(browserMarker, "utf8")).toThrow();
    const unchanged = JSON.parse(readFileSync(artifactPath, "utf8"));
    expect(unchanged.pre_edit_product_snapshot).toBeUndefined();
    expect(unchanged.pre_edit_fit_plan).toEqual({ state: "pending" });
  });

  it("accepts an exact named socket when the controller withholds the raw CDP endpoint", () => {
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) row.final = resolvedRowFinal(row);
    locked.browser_attempt = measuredAttempt();
    locked.browser_attempt.connection.cdp_url = null;

    const result = finalizeArtifact(staticClosed(locked), {
      env: { BU_NAME: "bench-test", BH_RUNTIME_DIR: "/tmp/browser-harness-runtime" },
    });
    expect(result.closure).toEqual({ state: "closed" });
    expect(result.browser_attempt.connection).toMatchObject({
      connection_name: "bench-test",
      cdp_url: null,
      attached_existing: true,
      launched_browser: false,
    });
  });

  it("locks grouped inventory without model-authored hashes", () => {
    const result = lockArtifact(draft());
    expect(result.inventory).toMatchObject({
      state: "locked",
      carrier_ids: ["plan", "handoff"],
      row_group_ids: ["identifier", "status"],
    });
    expect(result.inventory.sha256).toBe(inventoryDigest(result));
    expect(result.closure).toEqual({ state: "open" });
  });

  it("captures the pre-edit product source and hash through the CLI lock", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-snapshot-cli-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const source = '<div data-plan=""><div data-id="fixture">required-fact</div></div><div data-handoff=""></div>';
    writeFileSync(artifactPath, JSON.stringify(draft()));
    writeFileSync(productPath, source);

    execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "lock",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });

    const locked = JSON.parse(readFileSync(artifactPath, "utf8"));
    expect(locked.pre_edit_product_snapshot).toMatchObject({
      product_path: "index.html",
      sha256: createHash("sha256").update(source).digest("hex"),
      source_base64: Buffer.from(source).toString("base64"),
    });
    expect(locked.inventory.sha256).toBe(inventoryDigest(locked));
  });

  it("snapshots first, then locks a browser-measured pre-edit width plan", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-plan-cli-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const input = draft();
    delete input.pre_edit_fit_plan;
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(productPath, '<div data-plan=""><div data-id="fixture">required-fact</div></div><div data-handoff=""></div>');

    execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "snapshot",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    const pending = JSON.parse(readFileSync(artifactPath, "utf8"));
    expect(pending.pre_edit_fit_plan).toEqual({ state: "pending" });
    pending.pre_edit_fit_plan = draft().pre_edit_fit_plan;
    writeFileSync(artifactPath, JSON.stringify(pending));
    const stdout = execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "plan-close",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    const summary = JSON.parse(stdout);
    expect(summary.static_edit_guardrails.pre_edit_fit_plan.rows[0]).toMatchObject({
      id: "identifier",
      required_carrier_inner_width_css_px: { "390": 116, "320": 117, "200pct": 118 },
      fit_strategy_feasibility: {
        carrier_id: "plan",
        decision: "keep",
        intrinsically_carrier_unfit: false,
      },
    });
    expect(summary.static_edit_guardrails.pre_edit_fit_plan.carriers[0]).toMatchObject({
      id: "plan",
      required_outer_width_css_px: { "390": 196, "320": 197, "200pct": 198 },
      available_document_width_css_px: { "390": 390, "320": 320, "200pct": 160 },
      available_carrier_inner_width_css_px: { "390": 358, "320": 288, "200pct": 128 },
      requires_reflow: { "390": false, "320": false, "200pct": true },
    });
    expect(JSON.parse(readFileSync(artifactPath, "utf8")).pre_edit_fit_plan.state).toBe("measured");
    expect(JSON.parse(readFileSync(artifactPath, "utf8")).plan_closure).toMatchObject({
      state: "closed",
      command: "plan-close",
      pre_edit_product_sha256: createHash("sha256")
        .update(readFileSync(productPath, "utf8"))
        .digest("hex"),
    });
  });

  it("reconciles a persisted measured plan without another browser attempt", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-plan-reconcile-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const input = draft();
    input.pre_edit_fit_plan = { state: "pending" };
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(productPath, '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>');

    execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "snapshot",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    const measured = JSON.parse(readFileSync(artifactPath, "utf8"));
    measured.pre_edit_fit_plan = measuredFitPlan(measured.row_groups, measured.carriers);
    measured.pre_edit_fit_plan.rows[0].measurements[1].intrinsic_text_width_css_px = 300;
    measured.pre_edit_fit_plan.rows[0].measurements[1].required_carrier_inner_width_css_px = 316;
    writeFileSync(artifactPath, JSON.stringify(measured));

    const failedClose = spawnSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "plan-close",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    expect(failedClose.status).toBe(1);
    expect(failedClose.stderr).toContain("must declare comparison-scroll before the product edit");
    const persisted = JSON.parse(readFileSync(artifactPath, "utf8"));
    expect(persisted.pre_edit_fit_plan.state).toBe("measured");
    expect(persisted.plan_closure).toBeUndefined();

    persisted.row_groups[0].decision = "comparison-scroll";
    persisted.row_groups[0].scroll_contract = {
      container_selector: "[data-plan]",
      accessible_name: "Identifier comparison",
      keyboard_reachable: true,
      focus_visible: true,
      passive_text_scroll_container: false,
    };
    writeFileSync(artifactPath, JSON.stringify(persisted));
    const stdout = execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "plan-reconcile",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    const summary = JSON.parse(stdout);
    expect(summary).toMatchObject({
      command: "plan-reconcile",
      plan_closure: { state: "closed", command: "plan-reconcile" },
    });
    const reconciled = JSON.parse(readFileSync(artifactPath, "utf8"));
    expect(reconciled.pre_edit_fit_plan.attempts).toBe(1);
    expect(reconciled.pre_edit_fit_plan.fit_strategy_feasibility[0]).toMatchObject({
      id: "identifier",
      decision: "comparison-scroll",
      intrinsically_carrier_unfit: true,
    });
  });

  it("diagnoses every compatible measured row patch at once without mutating the artifact", () => {
    const input = draft();
    for (const [index, row] of input.pre_edit_fit_plan.rows.entries()) {
      row.measurements[1].intrinsic_text_width_css_px = 300 + index;
      row.measurements[1].required_carrier_inner_width_css_px = 316 + index;
    }
    const before = JSON.stringify(input);
    const diagnosis = diagnosePlanReconcile(input);
    expect(diagnosis).toMatchObject({
      status: "patch-required",
      browser_rerun_allowed: false,
      product_edit_allowed: false,
      issues: [],
      complete_patch: {
        row_groups: [
          { row_id: "identifier", carrier_id: "plan", decision: "comparison-scroll", requires_existing_accessible_name: true },
          { row_id: "status", carrier_id: "handoff", decision: "comparison-scroll", requires_existing_accessible_name: true },
        ],
      },
    });
    expect(JSON.stringify(input)).toBe(before);
  });

  it("applies one guarded decision packet without another browser measurement or model guess", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-plan-decision-packet-"));
    temporaryRoots.push(root);
    const productPath = join(root, "index.html");
    const source = '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>';
    writeFileSync(productPath, source);
    const input = draft();
    input.static_closure_manifest.product_path = "index.html";
    input.pre_edit_product_snapshot = {
      product_path: "index.html",
      sha256: createHash("sha256").update(source).digest("hex"),
      source_base64: Buffer.from(source).toString("base64"),
    };
    for (const [index, row] of input.pre_edit_fit_plan.rows.entries()) {
      row.measurements[1].intrinsic_text_width_css_px = 300 + index;
      row.measurements[1].required_carrier_inner_width_css_px = 316 + index;
    }

    const packet = createPlanDecisionPacket(input);
    const inputBeforeRejectedPackets = JSON.stringify(input);
    expect(packet).toMatchObject({
      verdict: "patch-required",
      browser_rerun_allowed: false,
      product_edit_allowed_before_apply: false,
      action: "apply-complete-patch-and-close",
      operator_inputs: { accessible_names: { identifier: null, status: null } },
    });
    expect(() => applyPlanDecisionPacket(input, packet)).toThrow(
      /requires accessible name for row identifier/,
    );

    const surplusRowPacket = structuredClone(packet);
    surplusRowPacket.operator_inputs.accessible_names.unmeasured = "Ignore me";
    expect(() => applyPlanDecisionPacket(input, surplusRowPacket)).toThrow(
      /accessible name rows must exactly match \["identifier","status"\]/,
    );

    const surplusOperatorPacket = structuredClone(packet);
    surplusOperatorPacket.operator_inputs.fit_strategy = "force-scroll";
    expect(() => applyPlanDecisionPacket(input, surplusOperatorPacket)).toThrow(
      /operator inputs must contain only accessible_names/,
    );

    const missingRowPacket = structuredClone(packet);
    delete missingRowPacket.operator_inputs.accessible_names.status;
    expect(() => applyPlanDecisionPacket(input, missingRowPacket)).toThrow(
      /accessible name rows must exactly match \["identifier","status"\]/,
    );
    expect(JSON.stringify(input)).toBe(inputBeforeRejectedPackets);

    packet.operator_inputs.accessible_names = {
      identifier: "Identifier comparison",
      status: "Status comparison",
    };
    const previousCwd = process.cwd();
    try {
      process.chdir(root);
      const closed = applyPlanDecisionPacket(input, packet);
      expect(closed).toMatchObject({
        pre_edit_fit_plan: { state: "measured", attempts: 1 },
        plan_closure: { state: "closed", command: "plan-reconcile" },
        row_groups: [
          { id: "identifier", decision: "comparison-scroll", scroll_contract: { accessible_name: "Identifier comparison" } },
          { id: "status", decision: "comparison-scroll", scroll_contract: { accessible_name: "Status comparison" } },
        ],
      });
      expect(closed.browser_attempt).toMatchObject({ attempts: 0, outcome: "not-run" });
      expect(diagnosePlanReconcile(closed).status).toBe("ready");

      const drifted = structuredClone(input);
      drifted.row_groups[0].longest_value = "changed-after-packet";
      expect(() => applyPlanDecisionPacket(drifted, packet)).toThrow(
        /does not match the current measured artifact/,
      );
    } finally {
      process.chdir(previousCwd);
    }
  });

  it("runs the guarded plan-packet and plan-apply CLI as one provider-free handoff", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-plan-packet-cli-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const packetPath = join(root, "plan-decision.json");
    const productPath = join(root, "index.html");
    const source = '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>';
    writeFileSync(productPath, source);
    const input = draft();
    input.static_closure_manifest.product_path = "index.html";
    input.pre_edit_product_snapshot = {
      product_path: "index.html",
      sha256: createHash("sha256").update(source).digest("hex"),
      source_base64: Buffer.from(source).toString("base64"),
    };
    for (const [index, row] of input.pre_edit_fit_plan.rows.entries()) {
      row.measurements[1].intrinsic_text_width_css_px = 300 + index;
      row.measurements[1].required_carrier_inner_width_css_px = 316 + index;
    }
    writeFileSync(artifactPath, JSON.stringify(input));
    const artifactBeforePacket = readFileSync(artifactPath, "utf8");

    const packetStdout = execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "plan-packet",
      artifactPath,
      packetPath,
    ], { cwd: root, encoding: "utf8" });
    expect(JSON.parse(packetStdout)).toMatchObject({
      command: "plan-packet",
      packet: { verdict: "patch-required", browser_rerun_allowed: false },
    });
    expect(readFileSync(artifactPath, "utf8")).toBe(artifactBeforePacket);
    const packet = JSON.parse(readFileSync(packetPath, "utf8"));
    packet.operator_inputs.accessible_names = {
      identifier: "Identifier comparison",
      status: "Status comparison",
    };
    writeFileSync(packetPath, JSON.stringify(packet));

    const applyStdout = execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "plan-apply",
      artifactPath,
      packetPath,
    ], { cwd: root, encoding: "utf8" });
    expect(JSON.parse(applyStdout)).toMatchObject({
      command: "plan-apply",
      plan_closure: { state: "closed", command: "plan-reconcile" },
    });
    const applied = JSON.parse(readFileSync(artifactPath, "utf8"));
    expect(applied.pre_edit_fit_plan).toMatchObject({ state: "measured", attempts: 1 });
    expect(applied.browser_attempt).toMatchObject({ attempts: 0, outcome: "not-run" });
    expect(applied.row_groups.map((row) => row.decision)).toEqual([
      "comparison-scroll",
      "comparison-scroll",
    ]);
  });

  it("returns one irreconcilable verdict for a measured nested-carrier graph", () => {
    const input = draft();
    input.pre_edit_fit_plan.rows[0].measurements[1].intrinsic_text_width_css_px = 300;
    input.pre_edit_fit_plan.rows[0].measurements[1].required_carrier_inner_width_css_px = 316;
    input.pre_edit_fit_plan.carriers[0].contained_carrier_ids = ["handoff"];
    const diagnosis = diagnosePlanReconcile(input);
    expect(diagnosis).toMatchObject({
      status: "irreconcilable",
      browser_rerun_allowed: false,
      product_edit_allowed: false,
      issues: [{
        code: "nested-registered-carrier",
        row_id: "identifier",
        carrier_id: "plan",
        contained_carrier_ids: ["handoff"],
      }],
      complete_patch: { row_groups: [] },
    });
  });

  it("makes plan-reconcile fail once with the complete deterministic patch", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-plan-complete-patch-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const input = draft();
    input.pre_edit_fit_plan = { state: "pending" };
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(productPath, '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>');
    execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "snapshot",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    const measured = JSON.parse(readFileSync(artifactPath, "utf8"));
    measured.pre_edit_fit_plan = measuredFitPlan(measured.row_groups, measured.carriers);
    for (const [index, row] of measured.pre_edit_fit_plan.rows.entries()) {
      row.measurements[1].intrinsic_text_width_css_px = 300 + index;
      row.measurements[1].required_carrier_inner_width_css_px = 316 + index;
    }
    writeFileSync(artifactPath, JSON.stringify(measured));

    const result = spawnSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "plan-reconcile",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("plan reconciliation patch-required");
    expect(result.stderr).toContain('"row_id":"identifier"');
    expect(result.stderr).toContain('"row_id":"status"');
    expect(readFileSync(artifactPath, "utf8")).toBe(JSON.stringify(measured));
  });

  it("refuses plan reconciliation after the product source changes", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-plan-drift-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const input = draft();
    input.pre_edit_fit_plan = { state: "pending" };
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(productPath, '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>');
    execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "snapshot",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    const measured = JSON.parse(readFileSync(artifactPath, "utf8"));
    measured.pre_edit_fit_plan = measuredFitPlan(measured.row_groups, measured.carriers);
    writeFileSync(artifactPath, JSON.stringify(measured));
    writeFileSync(productPath, `${readFileSync(productPath, "utf8")}<!-- edited -->`);

    const result = spawnSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "plan-reconcile",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("product source changed before successful plan closure");
  });

  it("refuses CLI static closure without a helper-issued plan closure stamp", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-plan-stamp-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    writeFileSync(artifactPath, JSON.stringify(lockArtifact(draft())));
    const preEditSource = '<div data-plan=""><div data-id="fixture">required-fact</div></div><div data-handoff=""><span role="status">Ground review open</span></div>';
    writeFileSync(productPath, preEditSource);

    const result = spawnSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "static-close",
      artifactPath,
      productPath,
    ], { cwd: root, encoding: "utf8" });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("measured plan closure or source fallback opening");
  });

  it("opens one helper-issued source fallback after an unmeasured plan and closes its static contract", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-source-fallback-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const input = draft();
    input.pre_edit_fit_plan = { state: "pending" };
    input.static_closure_manifest.required_css_declarations = [
      { selector: ".intake-strip", property: "grid-template-columns", value: "repeat(4,minmax(0,1fr))", value_contract: "any-value" },
      { selector: ".muted", property: "color", value: "var(--ink)", value_contract: "exact-value" },
    ];
    input.acceptance_debt_ledger[0].static_guardrail.required_css_declarations = structuredClone(
      input.static_closure_manifest.required_css_declarations,
    );
    const preEditSource = '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>';
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(productPath, preEditSource);
    execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"), "snapshot", artifactPath,
    ], { cwd: root, encoding: "utf8" });

    const opened = JSON.parse(execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"), "source-fallback-open", artifactPath,
    ], { cwd: root, encoding: "utf8" }));
    expect(opened.source_fallback_closure).toMatchObject({ state: "opened", command: "source-fallback-open" });
    expect(opened.static_edit_guardrails.source_fallback_patch_contract).toMatchObject({
      canonical_acceptance_css_source: [
        ".intake-strip { grid-template-columns: repeat(4,minmax(0,1fr)); }",
        ".muted { color: var(--ink); }",
      ].join("\n"),
      acceptance_css: input.static_closure_manifest.required_css_declarations,
    });
    expect(opened.static_edit_guardrails.first_edit_checklist).toContainEqual(expect.objectContaining({
      contract: "must-include-css-declaration",
      assertion: expect.objectContaining({ selector: ".intake-strip", value_contract: "any-value" }),
    }));

    writeFileSync(productPath, `<style>.intake-strip{grid-template-columns:repeat(4,minmax(180px,1fr))}.muted{color:var(--ink)}</style>${preEditSource}<!-- bounded source repair -->`);
    const closed = JSON.parse(execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"), "static-close", artifactPath,
    ], { cwd: root, encoding: "utf8" }));
    expect(closed.static_closure).toMatchObject({ state: "passed", attempts: 1, failures: [] });
  });

  it("previews complete candidate bytes without consuming closure or mutating the product", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-static-preview-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const candidatePath = join(root, "candidate.html");
    const helper = join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs");
    const input = draft();
    input.pre_edit_fit_plan = { state: "pending" };
    input.static_closure_manifest.required_css_declarations = [
      { selector: ".ledger > div", property: "min-width", value: "0", value_contract: "exact-value" },
    ];
    input.acceptance_debt_ledger[0].static_guardrail.required_css_declarations = structuredClone(
      input.static_closure_manifest.required_css_declarations,
    );
    const preEditSource = '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>';
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(productPath, preEditSource);
    execFileSync(process.execPath, [helper, "snapshot", artifactPath], { cwd: root, encoding: "utf8" });
    execFileSync(process.execPath, [helper, "source-fallback-open", artifactPath], { cwd: root, encoding: "utf8" });
    const artifactBefore = createHash("sha256").update(readFileSync(artifactPath)).digest("hex");
    const productBefore = createHash("sha256").update(readFileSync(productPath)).digest("hex");

    writeFileSync(candidatePath, `<style>.ledger>div{min-width:0}</style>${preEditSource}`);
    const failed = spawnSync(process.execPath, [
      helper, "static-preview", artifactPath, candidatePath,
    ], { cwd: root, encoding: "utf8" });
    expect(failed.status).toBe(1);
    expect(JSON.parse(failed.stdout).static_preview).toMatchObject({
      state: "failed",
      attempts: 1,
      failures: ["missing required CSS declaration: .ledger > div { min-width }"],
    });
    expect(createHash("sha256").update(readFileSync(artifactPath)).digest("hex")).toBe(artifactBefore);
    expect(createHash("sha256").update(readFileSync(productPath)).digest("hex")).toBe(productBefore);

    const acceptedCandidate = `<style>.ledger > div { min-width: 0; }</style>${preEditSource}`;
    writeFileSync(candidatePath, acceptedCandidate);
    const preview = JSON.parse(execFileSync(process.execPath, [
      helper, "static-preview", artifactPath, candidatePath,
    ], { cwd: root, encoding: "utf8" }));
    expect(preview).toMatchObject({
      artifact_mutated: false,
      product_mutated: false,
      receipt_state: "passed",
      static_preview: { state: "passed", attempts: 1, failures: [] },
    });
    expect(createHash("sha256").update(readFileSync(artifactPath)).digest("hex")).toBe(artifactBefore);
    expect(createHash("sha256").update(readFileSync(productPath)).digest("hex")).toBe(productBefore);

    writeFileSync(productPath, acceptedCandidate);
    const closed = JSON.parse(execFileSync(process.execPath, [
      helper, "static-close", artifactPath,
    ], { cwd: root, encoding: "utf8" }));
    expect(closed.static_closure).toMatchObject({ state: "passed", attempts: 1, failures: [] });
  });

  it("binds a provider-sealed static close to the exact passed candidate bytes", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-preview-binding-"));
    temporaryRoots.push(root);
    const contractPath = join(root, "contract.json");
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const candidatePath = join(root, "candidate.html");
    const helper = join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs");
    const preEditSource = '<section data-decision=""><div class="target-carrier"><strong data-bench-decision-role="target">FS-TC-24-017 + BAG-SEAL-884021</strong></div></section><p>required-fact</p>';
    writeFileSync(contractPath, JSON.stringify(sourceContract()));
    writeFileSync(productPath, preEditSource);
    execFileSync(process.execPath, [helper, "source-seal", contractPath, artifactPath], { cwd: root, encoding: "utf8" });
    const acceptedCandidate = `<style>.ledger { grid-template-columns: 1fr; }\n[data-omd-source-fallback-carrier="target"] { overflow-x: auto; }\n[data-omd-source-fallback-carrier="target"]:focus-visible { outline: 2px solid currentColor; }\n[data-bench-decision-role="target"] { white-space: nowrap; }</style>${preEditSource}`
      .replace(
        '<div class="target-carrier">',
        '<div class="target-carrier" data-omd-source-fallback-carrier="target" aria-label="Custody target relationship" tabindex="0">',
      );
    writeFileSync(candidatePath, acceptedCandidate);
    execFileSync(process.execPath, [helper, "static-preview", artifactPath, candidatePath], { cwd: root, encoding: "utf8" });

    writeFileSync(productPath, `${acceptedCandidate}<!-- drift -->`);
    const rejected = spawnSync(process.execPath, [helper, "static-close", artifactPath], {
      cwd: root,
      encoding: "utf8",
    });
    expect(rejected.status).toBe(1);
    expect(rejected.stderr).toContain("must exactly match the passed static-preview candidate");
    expect(JSON.parse(readFileSync(artifactPath, "utf8")).static_closure).toMatchObject({ state: "open", attempts: 0 });
  });

  it("seals a provider-owned source contract before execution and exposes a read-only patch packet", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-source-sealed-"));
    temporaryRoots.push(root);
    const contractPath = join(root, "contract.json");
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const helper = join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs");
    const preEditSource = '<section data-decision=""><div class="target-carrier"><strong data-bench-decision-role="target">FS-TC-24-017 + BAG-SEAL-884021</strong></div></section><p>required-fact</p>';
    writeFileSync(contractPath, JSON.stringify(sourceContract()));
    writeFileSync(productPath, preEditSource);

    const sealed = JSON.parse(execFileSync(process.execPath, [
      helper, "source-seal", contractPath, artifactPath,
    ], { cwd: root, encoding: "utf8" }));
    expect(sealed.source_contract).toMatchObject({ state: "provider-sealed", schema_version: "0.1" });
    expect(sealed.static_edit_guardrails.source_fallback_patch_contract.acceptance_css).toContainEqual(
      expect.objectContaining({ selector: ".ledger", property: "grid-template-columns" }),
    );
    const beforePacket = createHash("sha256").update(readFileSync(artifactPath)).digest("hex");
    const packet = JSON.parse(execFileSync(process.execPath, [
      helper, "source-packet", artifactPath,
    ], { cwd: root, encoding: "utf8" }));
    expect(packet.source_contract.state).toBe("provider-sealed");
    expect(createHash("sha256").update(readFileSync(artifactPath)).digest("hex")).toBe(beforePacket);

    const edited = `<style>.ledger { grid-template-columns: 1fr; }\n[data-omd-source-fallback-carrier="target"] { overflow-x: auto; }\n[data-omd-source-fallback-carrier="target"]:focus-visible { outline: 2px solid currentColor; }\n[data-bench-decision-role="target"] { white-space: nowrap; }</style>${preEditSource}`
      .replace(
        '<div class="target-carrier">',
        '<div class="target-carrier" data-omd-source-fallback-carrier="target" aria-label="Custody target relationship" tabindex="0">',
      );
    writeFileSync(join(root, "candidate.html"), edited);
    execFileSync(process.execPath, [
      helper, "static-preview", artifactPath, join(root, "candidate.html"),
    ], { cwd: root, encoding: "utf8" });
    writeFileSync(productPath, edited);
    const closed = JSON.parse(execFileSync(process.execPath, [
      helper, "static-close", artifactPath,
    ], { cwd: root, encoding: "utf8" }));
    expect(closed.static_closure).toMatchObject({ state: "passed", attempts: 1, failures: [] });
  });

  it("seals schema 0.2 only with critical-gate coverage and exact carrier containment", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-source-v02-"));
    temporaryRoots.push(root);
    const contractPath = join(root, "contract.json");
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const helper = join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs");
    const contract = sourceContract();
    contract.schema_version = "0.2";
    contract.baseline_evidence = { path: "baseline-score.json", sha256: "a".repeat(64) };
    contract.critical_gate_debt_coverage = [{ gate: "responsive", debt_ids: ["target-fit"] }];
    contract.carriers[0].containment_guardrail = {
      selector: "[data-decision] > div",
      property: "min-width",
      value: "0",
      value_contract: "exact-value",
    };
    const preEditSource = '<section data-decision=""><div><div class="target-carrier"><strong data-bench-decision-role="target">FS-TC-24-017 + BAG-SEAL-884021</strong></div></div></section><p>required-fact</p>';
    writeFileSync(contractPath, JSON.stringify(contract));
    writeFileSync(productPath, preEditSource);

    const sealed = JSON.parse(execFileSync(process.execPath, [
      helper, "source-seal", contractPath, artifactPath,
    ], { cwd: root, encoding: "utf8" }));
    expect(sealed.source_contract).toMatchObject({
      state: "provider-sealed",
      schema_version: "0.2",
      baseline_evidence_sha256: "a".repeat(64),
      covered_critical_gates: ["responsive"],
    });
    expect(sealed.static_edit_guardrails.source_fallback_patch_contract.acceptance_css).toContainEqual({
      selector: "[data-decision] > div",
      property: "min-width",
      value: "0",
      value_contract: "exact-value",
    });

    const invalid = structuredClone(contract);
    delete invalid.carriers[0].containment_guardrail;
    writeFileSync(contractPath, JSON.stringify(invalid));
    const rejected = spawnSync(process.execPath, [helper, "source-seal", contractPath, join(root, "invalid.json")], {
      cwd: root,
      encoding: "utf8",
    });
    expect(rejected.status).toBe(1);
    expect(rejected.stderr).toContain("comparison-scroll containment must require exact min-width: 0");
  });

  it("rejects a source contract that forbids its own canonical fallback CSS", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-source-conflict-"));
    temporaryRoots.push(root);
    const contractPath = join(root, "contract.json");
    const artifactPath = join(root, "artifact.json");
    const helper = join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs");
    writeFileSync(contractPath, JSON.stringify(sourceContract({
      forbiddenPatterns: ["overflow-x\\s*:\\s*(auto|scroll)"],
    })));
    writeFileSync(join(root, "index.html"), '<section data-decision=""><div class="target-carrier"><strong data-bench-decision-role="target">FS-TC-24-017 + BAG-SEAL-884021</strong></div></section><p>required-fact</p>');
    const result = spawnSync(process.execPath, [helper, "source-seal", contractPath, artifactPath], {
      cwd: root,
      encoding: "utf8",
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("forbids its own canonical fallback CSS");
    expect(() => readFileSync(artifactPath)).toThrow();
  });

  it("captures a missing pre-edit snapshot when the browser wrapper failed before running stdin", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-source-no-snapshot-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const input = draft();
    input.pre_edit_fit_plan = { state: "pending" };
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(join(root, "index.html"), '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""></div>');
    const result = JSON.parse(execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"), "source-fallback-open", artifactPath,
    ], { cwd: root, encoding: "utf8" }));
    expect(result.source_fallback_closure).toMatchObject({ state: "opened" });
    const captured = JSON.parse(readFileSync(artifactPath, "utf8"));
    expect(captured.pre_edit_product_snapshot).toMatchObject({
      product_path: "index.html",
      sha256: createHash("sha256").update(readFileSync(join(root, "index.html"), "utf8")).digest("hex"),
    });
  });

  it("fail-closes target and evidence source fallback unless each has a distinct named relationship carrier", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-source-relationships-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const input = draft();
    input.pre_edit_fit_plan = { state: "pending" };
    input.carriers = [
      { id: "target-carrier", selector: "[data-decision] > .target-carrier", expected_count: 1, binds_row_groups: ["target"] },
      { id: "evidence-carrier", selector: "[data-decision] > .evidence-carrier", expected_count: 1, binds_row_groups: ["evidence"] },
    ];
    input.row_groups = [
      {
        id: "target",
        selector: '[data-bench-decision-role="target"]',
        role: "target",
        expected_count: 1,
        longest_value: "FS-TC-24-017 + BAG-SEAL-884021",
        atomic_parts: ["FS-TC-24-017", "BAG-SEAL-884021"],
        line_contract: "parent-one-line",
        typography_contract: { source: "deterministic-pre-edit-snapshot" },
        required_fit_reserve_css_px: 8,
        planned_fit_reserve_css_px: 16,
        decision: "comparison-scroll",
        scroll_contract: {
          container_selector: "[data-decision] > .target-carrier",
          accessible_name: "Custody target relationship",
          keyboard_reachable: true,
          focus_visible: true,
          passive_text_scroll_container: false,
        },
      },
      {
        id: "evidence",
        selector: '[data-bench-decision-role="evidence"]',
        role: "evidence",
        expected_count: 1,
        longest_value: "6 samples · 8 seals · 4 intake windows",
        line_contract: "single-token",
        typography_contract: { source: "deterministic-pre-edit-snapshot" },
        required_fit_reserve_css_px: 8,
        planned_fit_reserve_css_px: 16,
        decision: "comparison-scroll",
        scroll_contract: {
          container_selector: "[data-decision] > .evidence-carrier",
          accessible_name: "Custody evidence relationship",
          keyboard_reachable: true,
          focus_visible: true,
          passive_text_scroll_container: false,
        },
      },
    ];
    input.acceptance_debt_ledger[0].bound_row_group_ids = ["target", "evidence"];
    input.static_closure_manifest.count_literals = [
      { literal: 'data-bench-decision-role="target"', expected_count: 1 },
      { literal: 'data-bench-decision-role="evidence"', expected_count: 1 },
    ];
    const preEditSource = `<section data-decision=""><div class="target-carrier"><strong data-bench-decision-role="target">FS-TC-24-017 + BAG-SEAL-884021</strong></div><div class="evidence-carrier"><span data-bench-decision-role="evidence">6 samples · 8 seals · 4 intake windows</span></div><span data-bench-decision-role="state">Open</span><button data-bench-decision-role="action">Review</button></section><p>required-fact</p>`;
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(productPath, preEditSource);
    execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"), "snapshot", artifactPath,
    ], { cwd: root, encoding: "utf8" });

    const opened = JSON.parse(execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"), "source-fallback-open", artifactPath,
    ], { cwd: root, encoding: "utf8" }));
    expect(opened.static_edit_guardrails.source_fallback_relationships).toHaveLength(2);
    expect(opened.static_edit_guardrails.first_edit_checklist).toContainEqual(expect.objectContaining({
      contract: "must-apply-source-fallback-patch",
      assertion: expect.objectContaining({ role: "target", accessible_name: "Custody target relationship" }),
    }));
    expect(opened.static_edit_guardrails.first_edit_checklist[0]).toMatchObject({
      id: "source-fallback-relationship-1",
      contract: "must-apply-source-fallback-patch",
    });
    expect(opened.static_edit_guardrails.source_fallback_patch_contract).toMatchObject({
      apply_order: expect.stringContaining("single product edit"),
      terminal_failure: expect.stringContaining("stop without another product edit"),
      selector_contract: expect.stringContaining("ancestor prefixes"),
      canonical_css_source: [
        '[data-omd-source-fallback-carrier="target"],[data-omd-source-fallback-carrier="evidence"] { overflow-x: auto; }',
        '[data-omd-source-fallback-carrier="target"]:focus-visible,[data-omd-source-fallback-carrier="evidence"]:focus-visible { outline: 2px solid currentColor; }',
        '[data-bench-decision-role="target"],[data-bench-decision-role="evidence"] { white-space: nowrap; }',
      ].join("\n"),
      html: [
        {
          role: "target",
          existing_carrier_selector: "[data-decision] > .target-carrier",
          required_attributes: {
            "data-omd-source-fallback-carrier": "target",
            "aria-label": "Custody target relationship",
            tabindex: "0",
          },
          must_contain_only_decision_roles: ["target"],
          must_exclude_decision_roles: ["evidence", "state", "action"],
        },
        expect.objectContaining({ role: "evidence" }),
      ],
      css: expect.arrayContaining([
        {
          role: "target",
          selector: '[data-omd-source-fallback-carrier="target"]',
          required_declarations: { "overflow-x": "auto" },
        },
        {
          role: "target",
          selector: '[data-omd-source-fallback-carrier="target"]:focus-visible',
          required_declarations: { outline: "2px solid currentColor" },
        },
        {
          role: "target",
          selector: '[data-bench-decision-role="target"]',
          required_declarations: { "white-space": "nowrap" },
          forbidden_declarations: { "overflow-x": ["auto", "scroll"] },
        },
      ]),
    });

    const validSource = `<style>[data-bench-decision-role="target"], [data-bench-decision-role="evidence"] { white-space: nowrap; }\n[data-omd-source-fallback-carrier="target"], [data-omd-source-fallback-carrier="evidence"] { overflow-x: auto; }\n[data-omd-source-fallback-carrier="target"]:focus-visible, [data-omd-source-fallback-carrier="evidence"]:focus-visible { outline: 2px solid currentColor; }</style>${preEditSource}`
      .replace(
        '<div class="target-carrier">',
        '<div class="target-carrier" data-omd-source-fallback-carrier="target" aria-label="Custody target relationship" tabindex="0">',
      )
      .replace(
        '<div class="evidence-carrier">',
        '<div class="evidence-carrier" data-omd-source-fallback-carrier="evidence" aria-label="Custody evidence relationship" tabindex="0">',
      );
    const valid = executeStaticClosure(JSON.parse(readFileSync(artifactPath, "utf8")), {
      productPath: join(process.cwd(), "index.html"),
      source: validSource,
    });
    expect(valid.static_closure).toMatchObject({ state: "passed", attempts: 1, failures: [] });

    const weakSource = preEditSource.replace("<p>required-fact</p>", "<p>required-fact</p><!-- edited without relationship carriers -->");
    writeFileSync(productPath, weakSource);
    const weak = spawnSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"), "static-close", artifactPath, productPath,
    ], { cwd: root, encoding: "utf8" });
    expect(weak.status).toBe(1);
    const weakArtifact = JSON.parse(readFileSync(artifactPath, "utf8"));
    expect(weakArtifact.static_closure.failures).toContain("source fallback target carrier count 0, expected 1");
    expect(weakArtifact.static_closure.failures).toContain("source fallback evidence carrier count 0, expected 1");
  });

  it("rejects a weak source fallback contract before editing when concise evidence shares a carrier", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-source-weak-contract-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const input = draft();
    input.pre_edit_fit_plan = { state: "pending" };
    input.row_groups[0].role = "evidence";
    input.row_groups[0].decision = "keep";
    const source = '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>';
    writeFileSync(artifactPath, JSON.stringify(input));
    writeFileSync(productPath, source);
    const result = spawnSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"), "source-fallback-open", artifactPath,
    ], { cwd: root, encoding: "utf8" });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("source fallback evidence row requires one distinct named comparison-scroll carrier");
    expect(JSON.parse(readFileSync(artifactPath, "utf8")).pre_edit_product_snapshot).toMatchObject({
      sha256: createHash("sha256").update(source).digest("hex"),
    });
  });

  it("refuses source fallback when a measured plan already exists", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-source-fallback-measured-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    writeFileSync(artifactPath, JSON.stringify(draft()));
    writeFileSync(productPath, '<div data-plan=""><span data-id="fixture">required-fact</span></div><div data-handoff=""><span role="status">Ground review open</span></div>');
    execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"), "snapshot", artifactPath,
    ], { cwd: root, encoding: "utf8" });
    const artifact = JSON.parse(readFileSync(artifactPath, "utf8"));
    artifact.pre_edit_fit_plan = measuredFitPlan(artifact.row_groups, artifact.carriers);
    writeFileSync(artifactPath, JSON.stringify(artifact));

    const result = spawnSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"), "source-fallback-open", artifactPath,
    ], { cwd: root, encoding: "utf8" });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("only after an unmeasured pending fit plan");
  });

  it("rejects a 200pct condition that only widens the viewport without applying zoom", () => {
    const invalid = draft();
    invalid.measurement_conditions[2].zoom = 1;
    expect(() => lockArtifact(invalid)).toThrow(/200pct at 640px with zoom 2/);
  });

  it("requires source inspection to close before one planned edit and terminal acceptance", () => {
    const invalid = draft();
    invalid.acceptance_sequence.source_inspection_complete = false;
    expect(() => lockArtifact(invalid)).toThrow(/acceptance_sequence/);
  });

  it("requires a static-bound acceptance debt ledger before product editing", () => {
    const missing = draft();
    delete missing.acceptance_debt_ledger;
    expect(() => lockArtifact(missing)).toThrow(/acceptance_debt_ledger must enumerate/);

    const unboundGuardrail = draft();
    unboundGuardrail.acceptance_debt_ledger[0].static_guardrail.required_literals = ["not-in-manifest"];
    expect(() => lockArtifact(unboundGuardrail)).toThrow(/must also appear in static_closure_manifest.required_literals/);

    const noBrowserRow = draft();
    noBrowserRow.acceptance_debt_ledger[0].bound_row_group_ids = [];
    expect(() => lockArtifact(noBrowserRow)).toThrow(/browser-row proof requires a bound row group/);
  });

  it("requires a 16px planning margin while preserving the measured 8px gate", () => {
    const missingPlan = draft();
    delete missingPlan.row_groups[0].planned_fit_reserve_css_px;
    expect(() => lockArtifact(missingPlan)).toThrow(/planned_fit_reserve_css_px must be 16/);

    const loweredPlan = draft();
    loweredPlan.row_groups[0].planned_fit_reserve_css_px = 8;
    expect(() => lockArtifact(loweredPlan)).toThrow(/planned_fit_reserve_css_px must be 16/);

    const missingMeasurement = draft();
    delete missingMeasurement.pre_edit_fit_plan;
    expect(() => lockArtifact(missingMeasurement)).toThrow(/pre_edit_fit_plan must be one measured/);

    const invalidArithmetic = draft();
    invalidArithmetic.pre_edit_fit_plan.rows[0].measurements[0].required_carrier_inner_width_css_px = 115;
    expect(() => lockArtifact(invalidArithmetic)).toThrow(/must bind intrinsic width to the 16px planning margin/);

    const invalidCarrierArithmetic = draft();
    invalidCarrierArithmetic.pre_edit_fit_plan.carriers[0].measurements[0].required_outer_width_css_px = 195;
    expect(() => lockArtifact(invalidCarrierArithmetic)).toThrow(/must bind aggregate outer width/);

    const invalidCarrierDecision = draft();
    invalidCarrierDecision.pre_edit_fit_plan.carriers[1].measurements[2].requires_reflow = false;
    expect(() => lockArtifact(invalidCarrierDecision)).toThrow(/must bind aggregate outer width/);
  });

  it("binds every row to exactly one aggregate fit-plan carrier", () => {
    const missing = draft();
    missing.carriers[0].binds_row_groups = ["status"];
    expect(() => lockArtifact(missing)).toThrow(/row group identifier must bind to exactly one aggregate fit-plan carrier; received 0/);

    const duplicated = draft();
    duplicated.carriers[0].binds_row_groups.push("status");
    expect(() => lockArtifact(duplicated)).toThrow(/row group status must bind to exactly one aggregate fit-plan carrier; received 2/);
  });

  it("locks a declarative static closure manifest before product editing", () => {
    const invalid = draft();
    invalid.static_closure_manifest.product_path = "../index.html";
    expect(() => lockArtifact(invalid)).toThrow(/stay inside the product workspace/);

    const invalidPattern = draft();
    invalidPattern.static_closure_manifest.forbidden_patterns = ["["];
    expect(() => lockArtifact(invalidPattern)).toThrow(/forbidden pattern is invalid/);
  });

  it("executes the deterministic static closure exactly once without an authored script", () => {
    const locked = lockArtifact(draft());
    const passed = staticClosed(locked);
    expect(passed.static_closure).toMatchObject({ state: "passed", attempts: 1, failures: [] });
    expect(() => staticClosed(passed)).toThrow(/exactly-once/);

    const failed = staticClosed(lockArtifact(draft()), "required-fact data-id= forbidden-claim");
    expect(failed.static_closure.state).toBe("failed");
    expect(failed.static_closure.failures).toContain("found forbidden literal: forbidden-claim");
    expect(() => staticClosed(failed)).toThrow(/exactly-once/);
  });

  it("forbids positive fixed widths while allowing a zero-width containment reset", () => {
    const locked = lockArtifact(draft());
    const safe = staticClosed(locked, '<style>.ledger { min-width: 0; }</style><div data-id="fixture">required-fact</div>');
    expect(safe.static_closure).toMatchObject({ state: "passed", failures: [] });

    const unsafe = staticClosed(
      lockArtifact(draft()),
      '<style>.ledger { min-width: 1060px; }</style><div data-id="fixture">required-fact</div>',
    );
    expect(unsafe.static_closure.failures).toContain(
      "matched forbidden CSS declaration: .ledger { min-width: 1060px } (positive-length)",
    );

    const forbiddenProperty = staticClosed(
      lockArtifact(draft()),
      '<style>.decision { grid-template-columns: 1fr; }</style><div data-id="fixture">required-fact</div>',
    );
    expect(forbiddenProperty.static_closure.failures).toContain(
      "matched forbidden CSS declaration: .decision { grid-template-columns: 1fr } (any-declaration)",
    );
  });

  it("accepts a semantic CSS value while fail-closing a required exact value", () => {
    const semantic = draft();
    semantic.static_closure_manifest.required_css_declarations = [
      { selector: ".intake-strip", property: "grid-template-columns", value: "repeat(4,minmax(0,1fr))", value_contract: "any-value" },
      { selector: ".muted", property: "color", value: "var(--ink)", value_contract: "exact-value" },
    ];
    semantic.acceptance_debt_ledger[0].static_guardrail.required_css_declarations = structuredClone(
      semantic.static_closure_manifest.required_css_declarations,
    );
    const passed = staticClosed(
      lockArtifact(semantic),
      '<style>.intake-strip{grid-template-columns:repeat(4,minmax(180px,1fr))}.muted{color:var(--ink)}</style><div data-id="fixture">required-fact</div>',
    );
    expect(passed.static_closure).toMatchObject({ state: "passed", failures: [] });

    const wrongExact = staticClosed(
      lockArtifact(semantic),
      '<style>.intake-strip{grid-template-columns:repeat(4,minmax(180px,1fr))}.muted{color:var(--muted)}</style><div data-id="fixture">required-fact</div>',
    );
    expect(wrongExact.static_closure.failures).toContain(
      "required CSS declaration value mismatch: .muted { color: var(--muted) }, expected var(--ink)",
    );
  });

  it("counts actual HTML attributes without counting selector strings in scripts", () => {
    const input = draft();
    input.static_closure_manifest.count_literals = [
      { literal: 'data-bench="review-view-option"', expected_count: 2 },
      { literal: "data-id=", expected_count: 1 },
      { literal: "data-primary-action", expected_count: 1 },
    ];
    const source = `
      <p>required-fact</p>
      <button data-bench="review-view-option" data-id="first" data-primary-action>One</button>
      <button data-bench='review-view-option'>Two</button>
      <script>
        document.querySelectorAll('[data-bench="review-view-option"]');
        const decoy = '<not-a-real-tag data-bench="review-view-option">';
      </script>
    `;
    const result = executeStaticClosure(lockArtifact(input), {
      productPath: join(process.cwd(), "index.html"),
      source,
    });
    expect(result.static_closure).toMatchObject({ state: "passed", attempts: 1, failures: [] });
  });

  it("persists a failed CLI static attempt before returning non-zero", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-static-cli-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    const preEditSource = '<div data-plan=""><div data-id="fixture">required-fact</div></div><div data-handoff=""><span role="status">Ground review open</span></div>';
    writeFileSync(artifactPath, JSON.stringify(draft()));
    writeFileSync(productPath, preEditSource);
    execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "snapshot",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    const snapshotted = JSON.parse(readFileSync(artifactPath, "utf8"));
    snapshotted.pre_edit_fit_plan = measuredFitPlan(snapshotted.row_groups, snapshotted.carriers);
    writeFileSync(artifactPath, JSON.stringify(snapshotted));
    execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "plan-close",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    writeFileSync(productPath, preEditSource.replace("required-fact", "required-fact forbidden-claim"));

    const result = spawnSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "static-close",
      artifactPath,
      productPath,
    ], { cwd: root, encoding: "utf8" });
    expect(result.stderr).toBe("");
    expect(result.status).toBe(1);
    expect(JSON.parse(readFileSync(artifactPath, "utf8")).static_closure).toMatchObject({
      state: "failed",
      attempts: 1,
      failures: ["found forbidden literal: forbidden-claim"],
    });
  });

  it("prints absence semantics for forbidden edit patterns at lock", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-lock-guardrails-"));
    temporaryRoots.push(root);
    const artifactPath = join(root, "artifact.json");
    const productPath = join(root, "index.html");
    writeFileSync(artifactPath, JSON.stringify(draft()));
    writeFileSync(productPath, '<div data-plan=""><div data-id="fixture">required-fact</div></div><div data-handoff=""></div>');

    const stdout = execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "lock",
      artifactPath,
    ], { cwd: root, encoding: "utf8" });
    const summary = JSON.parse(stdout);
    expect(summary.static_edit_guardrails).toMatchObject({
      forbidden_patterns: ["word-break\\s*:"],
      forbidden_pattern_semantics: "absence-required-delete-matching-declaration",
      neutral_values_still_forbidden: ["normal", "initial", "unset", "revert", "inherit"],
      forbidden_css_declarations: [
        { selector: ".ledger", property: "min-width", value_contract: "positive-length" },
        { selector: ".decision", property: "grid-template-columns", value_contract: "any-declaration" },
      ],
      planned_fit_reserve_css_px: 16,
      measured_fit_reserve_css_px: 8,
      acceptance_debts: [{
        id: "identifier-fit",
        gate: "inline-fit-reserve",
        proof_mode: "browser-row",
        bound_row_group_ids: ["identifier"],
      }],
    });
    expect(summary.static_edit_guardrails.first_edit_checklist).toEqual(expect.arrayContaining([
      {
        id: "forbidden-css-declaration-1",
        contract: "must-not-match-css-declaration",
        assertion: { selector: ".ledger", property: "min-width", value_contract: "positive-length" },
      },
      {
        id: "count-literal-1",
        contract: "must-have-exact-count",
        assertion: { literal: "data-id=", expected_count: 1 },
      },
    ]));
    expect(summary.static_edit_guardrails.first_edit_checklist_contract).toMatch(/single product edit/);
  });

  it("closes honest unresolved accounting across expanded instance counts", () => {
    const locked = lockArtifact(draft());
    locked.browser_attempt = {
      attempts: 1,
      outcome: "infrastructure-error",
      mechanism: "browser-harness named consumer CDP attachment",
      connection: { transport: "existing-cdp", connection_name: "bench-test", cdp_url: "http://127.0.0.1:9336", attached_existing: false, launched_browser: false },
      oracle: "character-range-line-tops",
      conditions: measuredConditions(),
    };
    const result = finalizeArtifact(staticClosed(locked), { unresolved: true, env: browserEnv });
    expect(result.closure).toEqual({ state: "unresolved" });
    expect(result.known_failure_closure).toEqual({ state: "unresolved", unresolved: 12 });
    expect(result.closure_manifest).toMatchObject({
      registered_carrier_groups: 2,
      registered_carriers: 2,
      registered_row_groups: 2,
      registered_rows: 9,
      measured_390: 0,
      measured_320: 0,
      measured_200pct: 0,
      unresolved_carriers: 2,
      unresolved_rows: 9,
      registered_acceptance_debts: 1,
      unresolved_acceptance_debts: 1,
      quality_pass: false,
      browser_attempt: locked.browser_attempt,
      inventory_sha256: result.inventory.sha256,
    });
  });

  it("preserves measured failures as terminal unresolved evidence", () => {
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "unresolved", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) row.final = resolvedRowFinal(row);
    locked.row_groups[0].final.status = "unresolved";
    locked.row_groups[0].final.outcome_320 = "unresolved";
    locked.row_groups[0].final.measurements[1].inline_reserve_css_px = 0;
    locked.invariants.all_registered_carriers_closed = false;
    locked.browser_attempt = measuredAttempt();

    const result = finalizeArtifact(staticClosed(locked), {
      measuredUnresolved: true,
      env: browserEnv,
    });
    expect(result.closure).toEqual({ state: "unresolved" });
    expect(result.browser_attempt).toMatchObject({ attempts: 1, outcome: "measured" });
    expect(result.row_groups[0].final).toMatchObject({
      status: "unresolved",
      outcome_320: "unresolved",
      measurements: expect.any(Array),
    });
    expect(deliveryMarker(result)).toBe("OMD_DELIVERY_UNRESOLVED");
  });

  it("rejects unresolved accounting without one real browser infrastructure attempt", () => {
    expect(() => finalizeArtifact(staticClosed(lockArtifact(draft())), { unresolved: true }))
      .toThrow(/one recorded browser infrastructure attempt/);
  });

  it("binds unresolved accounting to a host-observed browser attempt when host state exists", () => {
    const locked = lockArtifact(draft());
    locked.browser_attempt = {
      attempts: 1,
      outcome: "infrastructure-error",
      mechanism: "browser-harness named consumer CDP attachment",
      connection: { transport: "existing-cdp", connection_name: "bench-test", cdp_url: "http://127.0.0.1:9336", attached_existing: false, launched_browser: false },
      oracle: "character-range-line-tops",
      conditions: measuredConditions(),
    };
    const unobserved = hostState(0, "open");
    expect(hostObservedBrowserAttempt(unobserved)).toBe(false);
    expect(() => finalizeArtifact(staticClosed(locked), { unresolved: true, hostStateDir: unobserved, env: browserEnv }))
      .toThrow(/host-observed browser attempt/);

    const observed = hostState(1, "unresolved");
    expect(hostObservedBrowserAttempt(observed)).toBe(true);
    expect(finalizeArtifact(staticClosed(locked), { unresolved: true, hostStateDir: observed, env: browserEnv }).closure)
      .toEqual({ state: "unresolved" });
  });

  it("rejects unknown bindings and changed locked inventory", () => {
    const invalid = draft();
    invalid.carriers[0].binds_row_groups = ["missing"];
    expect(() => lockArtifact(invalid)).toThrow(/unknown row group/);

    const locked = lockArtifact(draft());
    locked.row_groups[0].expected_count = 7;
    expect(() => finalizeArtifact(staticClosed(locked), { unresolved: true })).toThrow(/immutable inventory hash changed/);
  });

  it("requires ordered atomic parts for a compound protected value", () => {
    const missing = draft();
    missing.row_groups[0].longest_value = "ULD-AKE-73102 + ULD-AKE-73103";
    expect(() => lockArtifact(missing)).toThrow(/atomic_parts are required/);

    missing.row_groups[0].atomic_parts = ["ULD-AKE-73102", "ULD-AKE-73103"];
    expect(() => lockArtifact(missing)).toThrow(/line_contract parent-one-line/);
    missing.row_groups[0].line_contract = "parent-one-line";
    expect(lockArtifact(missing).row_groups[0].atomic_parts)
      .toEqual(["ULD-AKE-73102", "ULD-AKE-73103"]);
  });

  it("forbids comparison scrolling on passive atomic text itself", () => {
    const invalid = draft();
    invalid.row_groups[0].decision = "comparison-scroll";
    invalid.row_groups[0].scroll_contract = {
      container_selector: "[data-id]",
      accessible_name: "Container comparison",
      keyboard_reachable: true,
      focus_visible: true,
      passive_text_scroll_container: false,
    };
    expect(() => lockArtifact(invalid)).toThrow(/distinct named, keyboard-reachable/);
  });

  it("requires the registered relationship carrier for comparison scrolling", () => {
    const invalid = draft();
    invalid.row_groups[0].decision = "comparison-scroll";
    invalid.row_groups[0].scroll_contract = {
      container_selector: "[data-compare]",
      accessible_name: "Identifier comparison",
      keyboard_reachable: true,
      focus_visible: true,
      passive_text_scroll_container: false,
    };
    expect(() => lockArtifact(invalid)).toThrow(/registered relationship carrier/);

    invalid.carriers.push({
      id: "identifier-comparison",
      selector: "[data-compare]",
      expected_count: 1,
      binds_row_groups: ["identifier"],
    });
    invalid.carriers[0].binds_row_groups = [];
    invalid.carriers = invalid.carriers.filter((carrier) => carrier.binds_row_groups.length > 0);
    invalid.pre_edit_fit_plan = measuredFitPlan(invalid.row_groups, invalid.carriers);
    expect(lockArtifact(invalid).carriers.at(-1)).toMatchObject({
      id: "identifier-comparison",
      binds_row_groups: ["identifier"],
    });
  });

  it("rejects a stack strategy when measured atomic content cannot fit its bound carrier", () => {
    const invalid = draft();
    invalid.pre_edit_fit_plan.rows[0].measurements[2].intrinsic_text_width_css_px = 180;
    invalid.pre_edit_fit_plan.rows[0].measurements[2].required_carrier_inner_width_css_px = 196;
    expect(() => lockArtifact(invalid)).toThrow(/intrinsically exceeds its bound carrier inner width/);

    invalid.row_groups[0].decision = "comparison-scroll";
    invalid.row_groups[0].scroll_contract = {
      container_selector: "[data-plan]",
      accessible_name: "Identifier register comparison",
      keyboard_reachable: true,
      focus_visible: true,
      passive_text_scroll_container: false,
    };
    const locked = lockArtifact(invalid);
    expect(locked.pre_edit_fit_plan.fit_strategy_feasibility[0]).toMatchObject({
      id: "identifier",
      carrier_id: "plan",
      decision: "comparison-scroll",
      intrinsically_carrier_unfit: true,
    });
  });

  it("rejects a stack strategy when nested carrier chrome makes a document-fitting row impossible", () => {
    const invalid = draft();
    invalid.pre_edit_fit_plan.rows[0].measurements[1].intrinsic_text_width_css_px = 300;
    invalid.pre_edit_fit_plan.rows[0].measurements[1].required_carrier_inner_width_css_px = 316;
    invalid.pre_edit_fit_plan.carriers[0].measurements[1].available_document_width_css_px = 320;
    invalid.pre_edit_fit_plan.carriers[0].measurements[1].available_carrier_inner_width_css_px = 260;
    expect(() => lockArtifact(invalid)).toThrow(/bound carrier inner width/);
  });

  it("allows a shared comparison carrier only for passive identifier rows", () => {
    const shared = draft();
    shared.carriers = [{
      id: "shared-register",
      selector: "[data-register]",
      expected_count: 1,
      binds_row_groups: ["identifier", "status"],
    }];
    shared.row_groups[0].decision = "comparison-scroll";
    shared.row_groups[0].scroll_contract = {
      container_selector: "[data-register]",
      accessible_name: "Shared identifier register",
      keyboard_reachable: true,
      focus_visible: true,
      passive_text_scroll_container: false,
    };
    shared.row_groups[1].role = "identifier";
    shared.pre_edit_fit_plan = measuredFitPlan(shared.row_groups, shared.carriers);
    expect(lockArtifact(shared).carriers[0].binds_row_groups).toEqual(["identifier", "status"]);

    shared.row_groups[1].role = "state";
    expect(() => lockArtifact(shared)).toThrow(/only passive identifier rows/);
  });

  it("rejects nested registered carriers inside a comparison-scroll relationship before edit", () => {
    const invalid = draft();
    invalid.carriers = [
      { id: "plan", selector: "[data-plan]", expected_count: 1, binds_row_groups: ["identifier"] },
      { id: "nested-status", selector: "[data-handoff]", expected_count: 1, binds_row_groups: ["status"] },
    ];
    invalid.row_groups[0].decision = "comparison-scroll";
    invalid.row_groups[0].scroll_contract = {
      container_selector: "[data-plan]",
      accessible_name: "Protected identifier register",
      keyboard_reachable: true,
      focus_visible: true,
      passive_text_scroll_container: false,
    };
    invalid.pre_edit_fit_plan = measuredFitPlan(invalid.row_groups, invalid.carriers);
    invalid.pre_edit_fit_plan.carriers[0].contained_carrier_ids = ["nested-status"];

    expect(() => lockArtifact(invalid)).toThrow(/must not contain nested registered carriers/);
  });

  it("fails closed when a protected decision target is omitted from the pre-edit inventory", () => {
    const input = draft();
    const source = '<div data-plan=""><div data-id="fixture">required-fact</div></div><div data-handoff=""></div><section data-target-carrier=""><strong data-bench-decision-role="target">VALVE-A + VALVE-B</strong></section>';
    replacePreEditSnapshotSource(input, source);

    expect(() => lockArtifact(input)).toThrow(/exactly one target row group/);

    input.row_groups.push({
      id: "decision-target",
      selector: '[data-bench-decision-role="target"]',
      role: "target",
      expected_count: 1,
      longest_value: "VALVE-A + VALVE-B",
      atomic_parts: ["VALVE-A", "VALVE-B"],
      line_contract: "parent-one-line",
      typography_contract: { source: "deterministic-pre-edit-snapshot" },
      required_fit_reserve_css_px: 8,
      planned_fit_reserve_css_px: 16,
      decision: "stack",
    });
    input.carriers.push({
      id: "decision-target-carrier",
      selector: '[data-bench-decision-role="target"]',
      expected_count: 1,
      binds_row_groups: ["decision-target"],
    });
    input.pre_edit_fit_plan = measuredFitPlan(input.row_groups, input.carriers);
    expect(() => lockArtifact(input)).toThrow(/distinct target-only carrier/);

    input.carriers.at(-1).selector = "[data-target-carrier]";
    input.pre_edit_fit_plan = measuredFitPlan(input.row_groups, input.carriers);
    expect(lockArtifact(input).inventory.row_group_ids).toContain("decision-target");
  });

  it("fails closed when protected concise decision evidence is omitted from the row inventory", () => {
    const input = draft();
    const source = '<div data-plan=""><div data-id="fixture">required-fact</div></div><div data-handoff=""></div><div data-evidence-carrier=""><span data-bench-decision-role="evidence">4 reels · 6 labels · 2 bays</span></div>';
    replacePreEditSnapshotSource(input, source);
    expect(() => lockArtifact(input)).toThrow(/protected concise decision evidence requires one evidence row group/);

    input.row_groups.push({
      id: "decision-evidence",
      selector: '[data-bench-decision-role="evidence"]',
      role: "evidence",
      expected_count: 1,
      longest_value: "4 reels · 6 labels · 2 bays",
      line_contract: "single-token",
      typography_contract: { source: "deterministic-pre-edit-snapshot" },
      required_fit_reserve_css_px: 8,
      planned_fit_reserve_css_px: 16,
      decision: "keep",
    });
    input.carriers.push({
      id: "decision-evidence-carrier",
      selector: "[data-evidence-carrier]",
      expected_count: 1,
      binds_row_groups: ["decision-evidence"],
    });
    input.pre_edit_fit_plan = measuredFitPlan(input.row_groups, input.carriers);
    expect(lockArtifact(input).inventory.row_group_ids).toContain("decision-evidence");
  });

  it("compares snapshot-backed typography without trusting model-entered pixel values", () => {
    const input = draft();
    const source = '<div data-plan=""><div data-id="fixture">required-fact</div></div><div data-handoff=""></div>';
    input.pre_edit_product_snapshot = {
      product_path: "index.html",
      sha256: createHash("sha256").update(source).digest("hex"),
      source_base64: Buffer.from(source).toString("base64"),
    };
    input.row_groups[0].typography_contract = { source: "deterministic-pre-edit-snapshot" };
    const locked = lockArtifact(input);
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) row.final = resolvedRowFinal(row);
    locked.row_groups[0].final = {
      status: "pass",
      outcome_390: "pass",
      outcome_320: "pass",
      outcome_200pct: "pass",
      measurements: ["390", "320", "200pct"].map((id) => ({
        id,
        observed_font_size_px: 18,
        observed_line_height_px: 27.9,
        observed_font_weight: "700",
        pre_edit_snapshot_sha256: input.pre_edit_product_snapshot.sha256,
        pre_edit_font_size_px: 18,
        pre_edit_line_height_px: 27.9,
        pre_edit_font_weight: "700",
        inline_reserve_css_px: 8,
      })),
    };
    locked.browser_attempt = measuredAttempt();
    expect(finalizeArtifact(staticClosed(locked), { env: browserEnv }).closure)
      .toEqual({ state: "closed" });

    locked.row_groups[0].final.measurements[1].observed_line_height_px = 21.7;
    expect(() => finalizeArtifact(staticClosed(locked), { env: browserEnv }))
      .toThrow(/deterministic pre-edit typography role/);
  });

  it("rejects a snapshot typography selector introduced only by the product edit", () => {
    const input = draft();
    const source = '<form class="form-card" data-bench="event-log-form"><button>Save</button></form>';
    input.pre_edit_product_snapshot = {
      product_path: "index.html",
      sha256: createHash("sha256").update(source).digest("hex"),
      source_base64: Buffer.from(source).toString("base64"),
    };
    input.row_groups = [{
      ...input.row_groups[0],
      id: "form-save",
      selector: ".event-log-form button",
      expected_count: 1,
      longest_value: "Save",
      typography_contract: { source: "deterministic-pre-edit-snapshot" },
    }];
    input.carriers = [{ id: "form", selector: '[data-bench="event-log-form"]', expected_count: 1, binds_row_groups: ["form-save"] }];
    input.acceptance_debt_ledger[0].selector = '[data-bench="event-log-form"] button';
    input.acceptance_debt_ledger[0].bound_row_group_ids = ["form-save"];
    input.pre_edit_fit_plan = measuredFitPlan(input.row_groups, input.carriers);

    expect(() => lockArtifact(input)).toThrow(/selector is unresolved in the pre-edit snapshot.*class:event-log-form/);
    input.row_groups[0].selector = '[data-bench="event-log-form"] button';
    expect(lockArtifact(input).row_groups[0].selector).toBe('[data-bench="event-log-form"] button');
  });

  it("rejects an aggregate carrier anchor introduced only by the product edit", () => {
    const input = draft();
    const source = '<section data-bench-decision-role="context"><div><strong data-bench-decision-role="target">VALVE-A + VALVE-B</strong></div></section><div data-plan=""></div><div data-handoff=""></div><div data-id="fixture">required-fact</div>';
    replacePreEditSnapshotSource(input, source);
    input.row_groups = [{
      ...input.row_groups[0],
      id: "decision-target",
      selector: '[data-bench-decision-role="target"]',
      role: "target",
      expected_count: 1,
      longest_value: "VALVE-A + VALVE-B",
      atomic_parts: ["VALVE-A", "VALVE-B"],
      line_contract: "parent-one-line",
      typography_contract: { source: "deterministic-pre-edit-snapshot" },
    }];
    input.carriers = [{
      id: "decision-target-carrier",
      selector: '[data-bench-decision-role="context"] > .decision-target-carrier',
      expected_count: 1,
      binds_row_groups: ["decision-target"],
    }];
    input.acceptance_debt_ledger[0].bound_row_group_ids = ["decision-target"];
    input.pre_edit_fit_plan = measuredFitPlan(input.row_groups, input.carriers);

    expect(() => lockArtifact(input)).toThrow(
      /carrier decision-target-carrier selector is unresolved in the pre-edit snapshot.*class:decision-target-carrier/,
    );
    input.carriers[0].selector = '[data-bench-decision-role="context"] > div';
    input.pre_edit_fit_plan = measuredFitPlan(input.row_groups, input.carriers);
    expect(lockArtifact(input).carriers[0].selector).toBe('[data-bench-decision-role="context"] > div');
  });

  it("requires resolved compound rows to prove passive text is not the scroll container", () => {
    const input = {
      ...draft(),
      row_groups: [{
        ...draft().row_groups[0],
        longest_value: "ULD-AKE-73102 + ULD-AKE-73103",
        atomic_parts: ["ULD-AKE-73102", "ULD-AKE-73103"],
        line_contract: "parent-one-line",
        decision: "full-row",
      }],
      carriers: [{
        id: "plan",
        selector: "[data-plan]",
        expected_count: 1,
        binds_row_groups: ["identifier"],
      }],
    };
    input.pre_edit_fit_plan = measuredFitPlan(input.row_groups, input.carriers);
    const locked = lockArtifact(input);
    locked.carriers[0].final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    locked.row_groups[0].final = {
      ...resolvedRowFinal(locked.row_groups[0]),
      status: "pass",
      outcome_390: "pass",
      outcome_320: "pass",
      outcome_200pct: "pass",
      passive_text_scroll_container: true,
    };
    locked.browser_attempt = measuredAttempt();
    expect(() => finalizeArtifact(staticClosed(locked), { env: browserEnv })).toThrow(/passive_text_scroll_container must be false/);
  });

  it("rejects a resolved closure when a relationship invariant is false", () => {
    const locked = lockArtifact(draft());
    locked.invariants.same_decision_boundary = false;
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) {
      row.final = resolvedRowFinal(row);
    }
    locked.browser_attempt = measuredAttempt();
    expect(() => finalizeArtifact(staticClosed(locked), { env: browserEnv })).toThrow(/every invariant to pass/);
  });

  it("rejects a resolved closure while any registered row remains unresolved", () => {
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) {
      row.final = resolvedRowFinal(row);
    }
    locked.browser_attempt = measuredAttempt();
    locked.row_groups[1].final.outcome_320 = "unresolved";
    expect(() => finalizeArtifact(staticClosed(locked), { env: browserEnv })).toThrow(/zero unresolved acceptance debts, carriers, and rows/);
  });

  it("rejects resolved closure without a measured character-range browser attempt", () => {
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) {
      row.final = resolvedRowFinal(row);
    }
    expect(() => finalizeArtifact(staticClosed(locked))).toThrow(/character-range line oracle/);
  });

  it("rejects a measured closure when the actual document zoom was not observed", () => {
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) {
      row.final = resolvedRowFinal(row);
    }
    const conditions = measuredConditions();
    conditions[2].observed_document_zoom = 1;
    locked.browser_attempt = measuredAttempt(conditions);
    expect(() => finalizeArtifact(staticClosed(locked), { env: browserEnv })).toThrow(/must observe document zoom 2/);
  });

  it("rejects a newly launched browser or a different named consumer connection", () => {
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    for (const row of locked.row_groups) row.final = resolvedRowFinal(row);
    locked.browser_attempt = measuredAttempt();
    locked.browser_attempt.connection.launched_browser = true;
    expect(() => finalizeArtifact(staticClosed(locked), { env: browserEnv })).toThrow(/exact named consumer CDP connection/);

    locked.browser_attempt.connection.launched_browser = false;
    locked.browser_attempt.connection.connection_name = "another-browser";
    expect(() => finalizeArtifact(staticClosed(locked), { env: browserEnv })).toThrow(/exact named consumer CDP connection/);
  });

  it("rejects consumer document overflow, typography shrink, and zero-edge fit", () => {
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    for (const row of locked.row_groups) row.final = resolvedRowFinal(row);
    locked.browser_attempt = measuredAttempt();
    locked.browser_attempt.conditions[1].document_scroll_width = 330;
    expect(() => finalizeArtifact(staticClosed(locked), { env: browserEnv })).toThrow(/consumer document overflow/);

    locked.browser_attempt = measuredAttempt();
    locked.row_groups[0].final.measurements[1].observed_font_size_px = 13;
    expect(() => finalizeArtifact(staticClosed(locked), { env: browserEnv })).toThrow(/changed its locked typography role/);

    locked.row_groups[0].final = resolvedRowFinal(locked.row_groups[0]);
    locked.row_groups[0].final.measurements[1].inline_reserve_css_px = 0;
    expect(() => finalizeArtifact(staticClosed(locked), { env: browserEnv })).toThrow(/8px measured inline fit reserve/);
  });

  it("derives the terminal marker from deterministic closure state", () => {
    expect(deliveryMarker({ closure: { state: "closed" } })).toBe("OMD_DELIVERY_READY");
    expect(deliveryMarker({ closure: { state: "unresolved" } })).toBe("OMD_DELIVERY_UNRESOLVED");
  });

  it("prints the terminal marker from the finalize helper process", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-reflow-cli-"));
    temporaryRoots.push(root);
    const path = join(root, "artifact.json");
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) {
      row.final = resolvedRowFinal(row);
    }
    locked.browser_attempt = measuredAttempt();
    writeFileSync(path, JSON.stringify(staticClosed(locked)));
    const output = execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "finalize",
      path,
    ], { encoding: "utf8", env: { ...process.env, ...browserEnv } });
    expect(output.trim().split("\n").at(-1)).toBe("OMD_DELIVERY_READY");
  });
});

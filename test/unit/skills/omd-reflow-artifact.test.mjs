import { afterEach, describe, expect, it } from "vitest";
import { execFileSync, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
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

function draft() {
  return {
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
        },
      },
    ],
    carriers: [
      { id: "plan", selector: "[data-plan]", expected_count: 1, binds_row_groups: ["identifier", "status"] },
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
}

function staticClosed(artifact, source = '<div data-id="fixture">required-fact</div>') {
  return executeStaticClosure(artifact, {
    productPath: join(process.cwd(), "index.html"),
    source,
  });
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
    expect(runner).toContain('ORACLE = "character-range-line-tops"');
    expect(runner).toContain('PRE_EDIT_SNAPSHOT_SOURCE = "deterministic-pre-edit-snapshot"');
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
    const source = '<div data-id="fixture">required-fact</div>';
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
    writeFileSync(artifactPath, JSON.stringify(lockArtifact(draft())));
    writeFileSync(productPath, '<div data-id="fixture">required-fact forbidden-claim</div>');

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
    writeFileSync(productPath, '<div data-id="fixture">required-fact</div>');

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
      planned_fit_reserve_css_px: 16,
      measured_fit_reserve_css_px: 8,
      acceptance_debts: [{
        id: "identifier-fit",
        gate: "inline-fit-reserve",
        proof_mode: "browser-row",
        bound_row_group_ids: ["identifier"],
      }],
    });
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

  it("requires a registered target-only carrier for comparison scrolling", () => {
    const invalid = draft();
    invalid.row_groups[0].decision = "comparison-scroll";
    invalid.row_groups[0].scroll_contract = {
      container_selector: "[data-compare]",
      accessible_name: "Identifier comparison",
      keyboard_reachable: true,
      focus_visible: true,
      passive_text_scroll_container: false,
    };
    expect(() => lockArtifact(invalid)).toThrow(/target-only carrier/);

    invalid.carriers.push({
      id: "identifier-comparison",
      selector: "[data-compare]",
      expected_count: 1,
      binds_row_groups: ["identifier"],
    });
    expect(lockArtifact(invalid).carriers.at(-1)).toMatchObject({
      id: "identifier-comparison",
      binds_row_groups: ["identifier"],
    });
  });

  it("compares snapshot-backed typography without trusting model-entered pixel values", () => {
    const input = draft();
    const source = '<div data-id="fixture">required-fact</div>';
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

    expect(() => lockArtifact(input)).toThrow(/selector is unresolved in the pre-edit snapshot.*class:event-log-form/);
    input.row_groups[0].selector = '[data-bench="event-log-form"] button';
    expect(lockArtifact(input).row_groups[0].selector).toBe('[data-bench="event-log-form"] button');
  });

  it("requires resolved compound rows to prove passive text is not the scroll container", () => {
    const locked = lockArtifact({
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
    });
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

import { afterEach, describe, expect, it } from "vitest";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  deliveryMarker,
  finalizeArtifact,
  hostObservedBrowserAttempt,
  inventoryDigest,
  lockArtifact,
} from "../../../skills/omd-apply/scripts/reflow-artifact.mjs";

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
    schema_version: "0.2",
    acceptance_sequence: {
      source_inspection_complete: true,
      product_edit_transaction: "single-planned-transaction",
      post_edit_commands: ["consolidated-static-closure", "browser-harness-terminal"],
    },
    measurement_conditions: [
      { id: "390", viewport_width: 390, zoom: 1 },
      { id: "320", viewport_width: 320, zoom: 1 },
      { id: "200pct", viewport_width: 640, zoom: 2 },
    ],
    carriers: [
      { id: "plan", selector: "[data-plan]", expected_count: 1, binds_row_groups: ["identifier", "status"] },
      { id: "handoff", selector: "[data-handoff]", expected_count: 1, binds_row_groups: ["status"] },
    ],
    row_groups: [
      { id: "identifier", selector: "[data-id]", role: "identifier", expected_count: 8, longest_value: "ULD-AKE-73102", line_contract: "single-token", decision: "keep" },
      { id: "status", selector: "[role=status]", role: "state", expected_count: 1, longest_value: "Ground review open", line_contract: "single-token", decision: "keep" },
    ],
    invariants: {
      same_row_count: true,
      same_decision_boundary: true,
      all_registered_carriers_closed: true,
      no_text_hack: true,
    },
  };
}

function measuredConditions() {
  return [
    { id: "390", viewport_width: 390, zoom: 1, observed_document_zoom: 1 },
    { id: "320", viewport_width: 320, zoom: 1, observed_document_zoom: 1 },
    { id: "200pct", viewport_width: 640, zoom: 2, observed_document_zoom: 2 },
  ];
}

describe("compact reflow artifact helper", () => {
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

  it("closes honest unresolved accounting across expanded instance counts", () => {
    const locked = lockArtifact(draft());
    locked.browser_attempt = {
      attempts: 1,
      outcome: "infrastructure-error",
      mechanism: "browser-harness named connection",
      oracle: "character-range-line-tops",
      conditions: measuredConditions(),
    };
    const result = finalizeArtifact(locked, { unresolved: true });
    expect(result.closure).toEqual({ state: "unresolved" });
    expect(result.known_failure_closure).toEqual({ state: "unresolved", unresolved: 11 });
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
      quality_pass: false,
      browser_attempt: locked.browser_attempt,
      inventory_sha256: result.inventory.sha256,
    });
  });

  it("rejects unresolved accounting without one real browser infrastructure attempt", () => {
    expect(() => finalizeArtifact(lockArtifact(draft()), { unresolved: true }))
      .toThrow(/one recorded browser infrastructure attempt/);
  });

  it("binds unresolved accounting to a host-observed browser attempt when host state exists", () => {
    const locked = lockArtifact(draft());
    locked.browser_attempt = {
      attempts: 1,
      outcome: "infrastructure-error",
      mechanism: "osascript Google Chrome same-route navigation",
      oracle: "character-range-line-tops",
      conditions: measuredConditions(),
    };
    const unobserved = hostState(0, "open");
    expect(hostObservedBrowserAttempt(unobserved)).toBe(false);
    expect(() => finalizeArtifact(locked, { unresolved: true, hostStateDir: unobserved }))
      .toThrow(/host-observed browser attempt/);

    const observed = hostState(1, "unresolved");
    expect(hostObservedBrowserAttempt(observed)).toBe(true);
    expect(finalizeArtifact(locked, { unresolved: true, hostStateDir: observed }).closure)
      .toEqual({ state: "unresolved" });
  });

  it("rejects unknown bindings and changed locked inventory", () => {
    const invalid = draft();
    invalid.carriers[0].binds_row_groups = ["missing"];
    expect(() => lockArtifact(invalid)).toThrow(/unknown row group/);

    const locked = lockArtifact(draft());
    locked.row_groups[0].expected_count = 7;
    expect(() => finalizeArtifact(locked, { unresolved: true })).toThrow(/immutable inventory hash changed/);
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
      status: "pass",
      outcome_390: "pass",
      outcome_320: "pass",
      outcome_200pct: "pass",
      passive_text_scroll_container: true,
    };
    locked.browser_attempt = {
      attempts: 1,
      outcome: "measured",
      mechanism: "browser-harness same-route measurement",
      oracle: "character-range-line-tops",
      conditions: measuredConditions(),
    };
    expect(() => finalizeArtifact(locked)).toThrow(/passive_text_scroll_container must be false/);
  });

  it("rejects a resolved closure when a relationship invariant is false", () => {
    const locked = lockArtifact(draft());
    locked.invariants.same_decision_boundary = false;
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) {
      row.final = { status: "pass", outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    locked.browser_attempt = {
      attempts: 1,
      outcome: "measured",
      mechanism: "Playwright same-route character range measurement",
      oracle: "character-range-line-tops",
      conditions: measuredConditions(),
    };
    expect(() => finalizeArtifact(locked)).toThrow(/every invariant to pass/);
  });

  it("rejects a resolved closure while any registered row remains unresolved", () => {
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) {
      row.final = { status: "pass", outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    locked.browser_attempt = {
      attempts: 1,
      outcome: "measured",
      mechanism: "Playwright same-route character range measurement",
      oracle: "character-range-line-tops",
      conditions: measuredConditions(),
    };
    locked.row_groups[1].final.outcome_320 = "unresolved";
    expect(() => finalizeArtifact(locked)).toThrow(/zero unresolved carriers and rows/);
  });

  it("rejects resolved closure without a measured character-range browser attempt", () => {
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) {
      row.final = { status: "pass", outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    expect(() => finalizeArtifact(locked)).toThrow(/character-range line oracle/);
  });

  it("rejects a measured closure when the actual document zoom was not observed", () => {
    const locked = lockArtifact(draft());
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) {
      row.final = { status: "pass", outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    const conditions = measuredConditions();
    conditions[2].observed_document_zoom = 1;
    locked.browser_attempt = {
      attempts: 1,
      outcome: "measured",
      mechanism: "browser-harness same-route measurement",
      oracle: "character-range-line-tops",
      conditions,
    };
    expect(() => finalizeArtifact(locked)).toThrow(/must observe document zoom 2/);
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
      row.final = { status: "pass", outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    locked.browser_attempt = {
      attempts: 1,
      outcome: "measured",
      mechanism: "browser-harness same-route measurement",
      oracle: "character-range-line-tops",
      conditions: measuredConditions(),
    };
    writeFileSync(path, JSON.stringify(locked));
    const output = execFileSync(process.execPath, [
      join(process.cwd(), "skills/omd-apply/scripts/reflow-artifact.mjs"),
      "finalize",
      path,
    ], { encoding: "utf8" });
    expect(output.trim().split("\n").at(-1)).toBe("OMD_DELIVERY_READY");
  });
});

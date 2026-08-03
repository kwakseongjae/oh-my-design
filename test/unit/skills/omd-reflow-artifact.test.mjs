import { afterEach, describe, expect, it } from "vitest";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
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
    carriers: [
      { id: "plan", selector: "[data-plan]", expected_count: 1, binds_row_groups: ["identifier", "status"] },
      { id: "handoff", selector: "[data-handoff]", expected_count: 1, binds_row_groups: ["status"] },
    ],
    row_groups: [
      { id: "identifier", selector: "[data-id]", role: "identifier", expected_count: 8, longest_value: "ULD-AKE-73102" },
      { id: "status", selector: "[role=status]", role: "state", expected_count: 1, longest_value: "Ground review open" },
    ],
    invariants: {
      same_row_count: true,
      same_decision_boundary: true,
      all_registered_carriers_closed: true,
      no_text_hack: true,
    },
  };
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

  it("closes honest unresolved accounting across expanded instance counts", () => {
    const locked = lockArtifact(draft());
    locked.browser_attempt = {
      attempts: 1,
      outcome: "infrastructure-error",
      mechanism: "browser-harness named connection",
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

  it("rejects a resolved closure when a relationship invariant is false", () => {
    const locked = lockArtifact(draft());
    locked.invariants.same_decision_boundary = false;
    for (const carrier of locked.carriers) {
      carrier.final = { outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
    for (const row of locked.row_groups) {
      row.final = { status: "pass", outcome_390: "pass", outcome_320: "pass", outcome_200pct: "pass" };
    }
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
    locked.row_groups[1].final.outcome_320 = "unresolved";
    expect(() => finalizeArtifact(locked)).toThrow(/zero unresolved carriers and rows/);
  });
});

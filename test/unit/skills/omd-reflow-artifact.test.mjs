import { describe, expect, it } from "vitest";
import {
  finalizeArtifact,
  inventoryDigest,
  lockArtifact,
} from "../../../skills/omd-apply/scripts/reflow-artifact.mjs";

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
    const result = finalizeArtifact(lockArtifact(draft()), { unresolved: true });
    expect(result.closure).toEqual({ state: "closed" });
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
      inventory_sha256: result.inventory.sha256,
    });
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
});

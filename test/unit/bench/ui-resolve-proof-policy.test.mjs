import { describe, expect, it } from "vitest";
import {
  initialProofPolicyState,
  simulateProofPolicy,
} from "../../../benchmarks/ui-resolve-bench/scripts/proof-policy-state.mjs";

describe("proof policy state machine", () => {
  it("allows one product revision, one static closure, one browser proof, then delivery", () => {
    const state = simulateProofPolicy([
      { type: "product-edit" },
      { type: "static-proof", outcome: "passed" },
      { type: "browser-proof", outcome: "passed" },
      { type: "delivery" },
    ]);
    expect(state).toMatchObject({
      revision: 1,
      static_closure: "closed",
      browser_proof: "closed",
      browser_attempts: 1,
      delivery: "ready",
      violations: {
        browser_recovery: 0,
        duplicate_static_closure: 0,
        verification_after_ready: 0,
      },
    });
    expect(state.decisions.every((item) => item.allow)).toBe(true);
  });

  it("denies duplicate static proof before it executes", () => {
    const state = simulateProofPolicy([
      { type: "product-edit" },
      { type: "static-proof", outcome: "passed" },
      { type: "static-proof", outcome: "passed" },
    ]);
    expect(state.violations.duplicate_static_closure).toBe(1);
    expect(state.decisions.at(-1)).toMatchObject({
      allow: false,
      reason: "duplicate-static-closure",
    });
  });

  it("requires static closure before the browser mechanism", () => {
    const state = simulateProofPolicy([
      { type: "product-edit" },
      { type: "browser-proof", outcome: "passed" },
    ]);
    expect(state.browser_attempts).toBe(0);
    expect(state.decisions.at(-1)).toMatchObject({
      allow: false,
      reason: "static-closure-required",
    });
  });

  it("closes the static attempt budget without claiming success when the host omits outcome", () => {
    const state = simulateProofPolicy([
      { type: "product-edit" },
      { type: "static-proof-start" },
      { type: "static-proof-finish", outcome: "unresolved" },
    ]);
    expect(state).toMatchObject({ static_closure: "closed", delivery: "blocked" });
    expect(state.decisions.at(-1)?.reason).toBe("static-closure-observed");
  });

  it("denies browser recovery and a second browser mechanism", () => {
    const state = simulateProofPolicy([
      { type: "product-edit" },
      { type: "static-proof", outcome: "passed" },
      { type: "browser-proof", outcome: "unresolved" },
      { type: "browser-recovery" },
      { type: "browser-proof", outcome: "passed" },
    ]);
    expect(state.violations).toMatchObject({
      browser_recovery: 2,
      verification_after_ready: 2,
    });
    expect(state.decisions.slice(-2).every((item) => item.allow === false)).toBe(true);
  });

  it("allows a corrective edit and one new static closure without reopening browser proof", () => {
    const state = simulateProofPolicy([
      { type: "product-edit" },
      { type: "static-proof", outcome: "passed" },
      { type: "browser-proof", outcome: "passed" },
      { type: "product-edit" },
      { type: "static-proof", outcome: "passed" },
      { type: "delivery" },
    ]);
    expect(state).toMatchObject({
      revision: 2,
      static_closure: "closed",
      browser_proof: "unresolved",
      browser_attempts: 1,
      delivery: "ready",
    });
    expect(state.decisions.every((item) => item.allow)).toBe(true);
  });

  it("denies proof work after readiness and starts fail-closed", () => {
    expect(simulateProofPolicy([{ type: "static-proof", outcome: "passed" }]))
      .toMatchObject({ revision: 0, delivery: "blocked" });
    const state = simulateProofPolicy([
      { type: "product-edit" },
      { type: "static-proof", outcome: "passed" },
      { type: "browser-proof", outcome: "passed" },
      { type: "static-proof", outcome: "passed" },
    ]);
    expect(state.violations.verification_after_ready).toBe(1);
    expect(state.decisions.at(-1).reason).toBe("verification-after-ready");
  });

  it("returns a fresh immutable seed", () => {
    const seed = initialProofPolicyState();
    const state = simulateProofPolicy([{ type: "product-edit" }], seed);
    expect(seed.revision).toBe(0);
    expect(state.revision).toBe(1);
  });

  it("locks one reflow inventory and refuses a changed carrier set", () => {
    const state = simulateProofPolicy([
      { type: "reflow-inventory-lock", inventory_sha256: "first", carrier_count: 3, row_count: 4 },
      { type: "product-edit" },
      { type: "reflow-inventory-lock", inventory_sha256: "changed", carrier_count: 1, row_count: 1 },
    ]);
    expect(state.reflow_contract).toMatchObject({
      required: true,
      inventory_sha256: "first",
      carrier_count: 3,
      row_count: 4,
      closure: "open",
    });
    expect(state.decisions.at(-1)).toMatchObject({
      allow: false,
      reason: "reflow-inventory-changed",
    });
  });
});

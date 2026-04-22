/**
 * Pure-logic tests for the tweak engine. Covers:
 *   - initialSelection seeds from axis defaults
 *   - applyTweak clamps to axis bounds (never escapes min/max)
 *   - static-font weight walks the weights[] array, not wght axis
 *   - applyTweak is pure (no mutation of inputs)
 *   - distanceFromDefault is 0 at default, grows monotonically with edits
 *   - tweakAvailable gates correctly based on axis / weights[]
 */

import { describe, expect, it } from "vitest";
import type { FontEntry } from "./types";
import {
  applyTweak,
  distanceFromDefault,
  initialSelection,
  tweakAvailable,
} from "./tweaks";

function variableFont(): FontEntry {
  return {
    id: "test-var",
    name: "Test Variable",
    family: "sans",
    scripts: ["latin"],
    cssFamily: `"Test Variable"`,
    variable: true,
    axes: [
      { tag: "wght", name: "Weight", min: 100, max: 900, default: 400 },
      { tag: "CASL", name: "Casual", min: 0, max: 1, default: 0.5 },
    ],
    license: "OFL-1.1",
    source: "https://example.com",
    description: "",
    loader: { kind: "google", family: "Test" },
    tags: { mood: [], era: [], use: [], personality: [] },
    sampleText: { latin: "Aa" },
  };
}

function staticFont(): FontEntry {
  return {
    id: "test-static",
    name: "Test Static",
    family: "sans",
    scripts: ["latin"],
    cssFamily: `"Test Static"`,
    variable: false,
    axes: [],
    weights: [300, 400, 700, 900],
    license: "OFL-1.1",
    source: "https://example.com",
    description: "",
    loader: { kind: "google", family: "Test" },
    tags: { mood: [], era: [], use: [], personality: [] },
    sampleText: { latin: "Aa" },
  };
}

function singleWeight(): FontEntry {
  return {
    ...staticFont(),
    id: "test-single",
    name: "Test Single",
    weights: [400],
  };
}

describe("initialSelection", () => {
  it("seeds variable-font axes to each axis's default", () => {
    const sel = initialSelection(variableFont());
    expect(sel.axisValues.wght).toBe(400);
    expect(sel.axisValues.CASL).toBe(0.5);
  });

  it("picks the middle static weight for non-variable fonts", () => {
    const sel = initialSelection(staticFont());
    expect([400, 700]).toContain(sel.staticWeight);
  });

  it("seeds letter-spacing to 0 and line-height to 1.2", () => {
    const sel = initialSelection(variableFont());
    expect(sel.letterSpacing).toBe(0);
    expect(sel.lineHeight).toBe(1.2);
  });
});

describe("applyTweak — clamping", () => {
  it("thicker stays within wght max", () => {
    const font = variableFont();
    let sel = initialSelection(font);
    // Start near the top, then repeatedly thicken — should never exceed 900
    sel = { ...sel, axisValues: { ...sel.axisValues, wght: 850 } };
    for (let i = 0; i < 10; i++) sel = applyTweak(font, sel, "thicker");
    expect(sel.axisValues.wght).toBe(900);
  });

  it("thinner stays within wght min", () => {
    const font = variableFont();
    let sel = initialSelection(font);
    sel = { ...sel, axisValues: { ...sel.axisValues, wght: 200 } };
    for (let i = 0; i < 10; i++) sel = applyTweak(font, sel, "thinner");
    expect(sel.axisValues.wght).toBe(100);
  });

  it("tighter clamps letter-spacing at -0.1 em", () => {
    const font = variableFont();
    let sel = initialSelection(font);
    for (let i = 0; i < 20; i++) sel = applyTweak(font, sel, "tighter");
    expect(sel.letterSpacing).toBeGreaterThanOrEqual(-0.1);
  });

  it("looser clamps letter-spacing at 0.2 em", () => {
    const font = variableFont();
    let sel = initialSelection(font);
    for (let i = 0; i < 20; i++) sel = applyTweak(font, sel, "looser");
    expect(sel.letterSpacing).toBeLessThanOrEqual(0.2);
  });
});

describe("applyTweak — static-font weight walking", () => {
  it("thicker picks the next entry in weights[]", () => {
    const font = staticFont();
    let sel = initialSelection(font);
    sel = { ...sel, staticWeight: 400 };
    sel = applyTweak(font, sel, "thicker");
    expect(sel.staticWeight).toBe(700);
    sel = applyTweak(font, sel, "thicker");
    expect(sel.staticWeight).toBe(900);
    sel = applyTweak(font, sel, "thicker");
    expect(sel.staticWeight).toBe(900); // clamps at last
  });

  it("thinner picks the previous entry", () => {
    const font = staticFont();
    let sel = initialSelection(font);
    sel = { ...sel, staticWeight: 700 };
    sel = applyTweak(font, sel, "thinner");
    expect(sel.staticWeight).toBe(400);
    sel = applyTweak(font, sel, "thinner");
    expect(sel.staticWeight).toBe(300);
    sel = applyTweak(font, sel, "thinner");
    expect(sel.staticWeight).toBe(300); // clamps at first
  });
});

describe("applyTweak — purity", () => {
  it("does not mutate the input selection", () => {
    const font = variableFont();
    const sel = initialSelection(font);
    const snapshot = JSON.parse(JSON.stringify(sel));
    applyTweak(font, sel, "thicker");
    applyTweak(font, sel, "tighter");
    applyTweak(font, sel, "looser");
    expect(sel).toEqual(snapshot);
  });

  it("preserves lineHeight across tweaks (regression for the back-compat shim)", () => {
    const font = variableFont();
    let sel = initialSelection(font);
    sel = { ...sel, lineHeight: 1.8 };
    const after = applyTweak(font, sel, "thicker");
    expect(after.lineHeight).toBe(1.8);
  });
});

describe("distanceFromDefault", () => {
  it("is 0 for a fresh initial selection", () => {
    const font = variableFont();
    const sel = initialSelection(font);
    expect(distanceFromDefault(font, sel)).toBeCloseTo(0, 5);
  });

  it("grows monotonically as axes move away", () => {
    const font = variableFont();
    let sel = initialSelection(font);
    const d0 = distanceFromDefault(font, sel);
    sel = applyTweak(font, sel, "thicker");
    const d1 = distanceFromDefault(font, sel);
    sel = applyTweak(font, sel, "thicker");
    const d2 = distanceFromDefault(font, sel);
    expect(d1).toBeGreaterThan(d0);
    expect(d2).toBeGreaterThan(d1);
  });

  it("picks up letter-spacing and line-height drift too", () => {
    const font = variableFont();
    const base = initialSelection(font);
    const withTracking = { ...base, letterSpacing: 0.05 };
    const withLeading = { ...base, lineHeight: 1.6 };
    expect(distanceFromDefault(font, withTracking)).toBeGreaterThan(0);
    expect(distanceFromDefault(font, withLeading)).toBeGreaterThan(0);
  });
});

describe("tweakAvailable", () => {
  it("single-weight static fonts disable thicker/thinner", () => {
    const font = singleWeight();
    expect(tweakAvailable(font, "thicker")).toBe(false);
    expect(tweakAvailable(font, "thinner")).toBe(false);
  });

  it("tighter/looser is always available (letter-spacing is universal)", () => {
    expect(tweakAvailable(singleWeight(), "tighter")).toBe(true);
    expect(tweakAvailable(singleWeight(), "looser")).toBe(true);
  });

  it("rounder/sharper requires a CASL, SOFT, or wght axis", () => {
    const bareFont: FontEntry = { ...singleWeight(), axes: [] };
    expect(tweakAvailable(bareFont, "rounder")).toBe(false);
    expect(tweakAvailable(variableFont(), "rounder")).toBe(true);
  });
});

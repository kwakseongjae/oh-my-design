import { describe, expect, it } from "vitest";
import { aggregateReferenceEvidence, type RawElementEvidence } from "./evidence";
import { evaluateEvidenceFixture } from "./evidence-evaluation";

const style = {
  color: "rgb(255, 255, 255)",
  backgroundColor: "rgb(45, 108, 223)",
  borderColor: "rgb(45, 108, 223)",
  borderWidth: "1px",
  borderRadius: "8px",
  boxShadow: "none",
  padding: "12px 20px",
  margin: "0px",
  gap: "8px",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "24px",
  letterSpacing: "0px",
};

function element(overrides: Partial<RawElementEvidence>): RawElementEvidence {
  return {
    surfaceId: "home",
    selector: "home::button",
    tagName: "button",
    role: null,
    inputType: null,
    className: "button",
    ariaHasPopup: null,
    ariaSelected: null,
    ariaChecked: null,
    disabled: false,
    textLength: 6,
    rect: { width: 120, height: 48, top: 10 },
    style,
    ...overrides,
  };
}

describe("reference evidence fixture evaluation", () => {
  it("reports precision, recall, missing, and unexpected observations", () => {
    const button = element({});
    const menu = element({ selector: "home::menu", tagName: "div", role: "menu", className: "menu-content" });
    const bundle = aggregateReferenceEvidence({
      referenceId: "fixture",
      capturedAt: "2026-07-11T00:00:00.000Z",
      tool: "playwright_cli",
      sources: [{ id: "surface-home", url: "https://fixture.test", kind: "product-surface" }],
      surfaces: [{ id: "home", url: "https://fixture.test", viewport: "1440x900", elements: [button, menu] }],
      faces: [],
      stateEvidence: { "home::button": ["hover", "menu-open"] },
      interactions: [{ kind: "menu", surfaceId: "home", triggerSelector: "home::button", targetSelectors: ["home::menu"], states: ["menu-open"] }],
    });
    const report = evaluateEvidenceFixture(bundle, {
      componentTypes: ["button", "menu", "dialog"],
      states: ["hover", "menu-open"],
      fonts: [{ family: "Arial", status: "system" }],
      colors: ["#2d6cdf", "#ffffff"],
    });
    expect(report.componentTypes.recall).toBeCloseTo(2 / 3, 4);
    expect(report.states.recall).toBe(1);
    expect(report.fonts.precision).toBe(1);
    expect(report.missing).toContain("component:dialog");
  });
});

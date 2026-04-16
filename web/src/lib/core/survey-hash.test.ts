import { describe, it, expect } from "vitest";
import { encodeSurveyResult, decodeSurveyResult, type SurveyResult } from "./survey-hash";

describe("survey-hash", () => {
  const sample: SurveyResult = {
    refId: "vercel",
    overrides: {
      primaryColor: "#171717",
      fontFamily: "Inter",
      headingWeight: "600",
      borderRadius: "6px",
      darkMode: false,
    },
    preferences: {
      mood: "",
      typographyChar: "geometric",
      buttonStyle: "sharp",
      inputStyle: "bordered",
      headerStyle: "glass",
      cardStyle: "bordered",
      depthStyle: "flat",
      density: "spacious",
      saturation: "muted",
    },
    components: ["button", "input", "card"],
  };

  it("encodes with OMD- prefix", () => {
    const code = encodeSurveyResult(sample);
    expect(code).toMatch(/^OMD-/);
  });

  it("decode reverses encode", () => {
    const code = encodeSurveyResult(sample);
    const decoded = decodeSurveyResult(code);
    expect(decoded).toEqual(sample);
  });

  it("produces URL-safe base64url output (no /, +, =)", () => {
    const code = encodeSurveyResult(sample);
    const b64part = code.replace(/^OMD-/, "");
    expect(b64part).not.toMatch(/[/+=]/);
  });

  it("handles Unicode in refId", () => {
    const withUnicode: SurveyResult = { ...sample, refId: "linear.app" };
    const code = encodeSurveyResult(withUnicode);
    const decoded = decodeSurveyResult(code);
    expect(decoded.refId).toBe("linear.app");
  });
});

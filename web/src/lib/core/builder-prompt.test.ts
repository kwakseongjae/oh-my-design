import { describe, it, expect } from "vitest";
import { buildBuilderPrompt, DEFAULT_BUILDER_COMPONENTS } from "./builder-prompt";
import type { Overrides } from "./types";

const emptyOverrides: Overrides = {
  primaryColor: "",
  fontFamily: "",
  headingWeight: "",
  borderRadius: "",
  darkMode: false,
};

describe("buildBuilderPrompt", () => {
  it("emits only the base sentence for an as-is config (11st example cfg)", () => {
    // cfg "11st|||||0|button,input,table,card,badge,tabs,dialog" decoded:
    // empty overrides, darkMode off, default component list.
    const prompt = buildBuilderPrompt({
      brandName: "11st",
      overrides: emptyOverrides,
      components: [...DEFAULT_BUILDER_COMPONENTS],
    });
    expect(prompt).toBe("Set up our design system — 11st-style.");
  });

  it("appends provenance URL when given", () => {
    const url = "https://oh-my-design.kr/builder?step=preview&ref=11st&cfg=abc";
    const prompt = buildBuilderPrompt({
      brandName: "11st",
      overrides: emptyOverrides,
      components: [...DEFAULT_BUILDER_COMPONENTS],
      url,
    });
    expect(prompt).toBe(
      `Set up our design system — 11st-style. (builder config: ${url})`,
    );
  });

  it("lists components only when they differ from the default set", () => {
    const trimmed = buildBuilderPrompt({
      brandName: "toss",
      overrides: emptyOverrides,
      components: ["button", "input", "table"],
    });
    expect(trimmed).toContain("Components: button, input, table.");

    // Same set, different order → still default → omitted.
    const reordered = buildBuilderPrompt({
      brandName: "toss",
      overrides: emptyOverrides,
      components: [...DEFAULT_BUILDER_COMPONENTS].reverse(),
    });
    expect(reordered).not.toContain("Components:");
  });

  it("omits overrides equal to the reference-seeded defaults", () => {
    const prompt = buildBuilderPrompt({
      brandName: "toss",
      overrides: { ...emptyOverrides, primaryColor: "#0064ff", borderRadius: "16px" },
      components: [...DEFAULT_BUILDER_COMPONENTS],
      defaults: { primaryColor: "#0064ff", borderRadius: "16px" },
    });
    expect(prompt).toBe("Set up our design system — toss-style.");
  });

  it("includes genuinely customized axes as short sentences", () => {
    const prompt = buildBuilderPrompt({
      brandName: "toss",
      overrides: {
        primaryColor: "#ff5722",
        fontFamily: "Inter",
        headingWeight: "700",
        borderRadius: "2px",
        darkMode: true,
      },
      components: ["button", "card"],
      stylePreferences: { buttonStyle: "rounded", density: "compact" },
      defaults: { primaryColor: "#0064ff", borderRadius: "16px" },
    });
    expect(prompt).toBe(
      "Set up our design system — toss-style. " +
        "Components: button, card. " +
        "Primary color: #ff5722. " +
        "Font: Inter. " +
        "Heading weight: 700. " +
        "Border radius: 2px. " +
        "Dark mode enabled. " +
        "Style preferences: button rounded, density compact.",
    );
  });

  it("stays a single paragraph with no markdown", () => {
    const prompt = buildBuilderPrompt({
      brandName: "linear.app",
      overrides: { ...emptyOverrides, darkMode: true },
      components: ["button"],
      url: "https://oh-my-design.kr/builder?step=preview&ref=linear.app&cfg=x",
    });
    expect(prompt).not.toMatch(/[\n*#`]/);
  });
});

import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { componentsFromTokens, extractComponentSpecs } from "./extract-tokens";

const REFS_DIR = join(process.cwd(), "..", "references");

function readRef(id: string): string {
  return readFileSync(join(REFS_DIR, id, "DESIGN.md"), "utf8");
}

describe("component extraction against current reference contracts", () => {
  it("Toss prefers six verified structured components over the retired speculative prose inventory", () => {
    const blocks = componentsFromTokens(readRef("toss"));
    expect(blocks).not.toBeNull();
    const variants = blocks!.flatMap((block) => block.variants.map((variant) => ({ type: block.type, ...variant })));
    expect(variants).toHaveLength(6);
    expect(variants.find((variant) => variant.name === "tds-button")).toMatchObject({
      type: "button",
      bg: "#3182f6",
      fg: "#ffffff",
      radius: "16px",
    });
    expect(variants.find((variant) => variant.name === "text-field")?.extras.states).toContain("focus");
    expect(variants.find((variant) => variant.name === "agreement")?.extras.states).toContain("unchecked");
    expect(variants.some((variant) => variant.type === "card")).toBe(false);
  });

  it("Apple keeps marketing, Store, and HIG documentation components source-labelled", () => {
    const blocks = componentsFromTokens(readRef("apple"));
    const variants = blocks!.flatMap((block) => block.variants.map((variant) => ({ type: block.type, ...variant })));
    expect(variants).toHaveLength(5);
    expect(variants.find((variant) => variant.name === "marketing-primary")).toMatchObject({
      type: "button",
      bg: "#0071e3",
      fg: "#ffffff",
      radius: "980px",
    });
    expect(variants.find((variant) => variant.name === "product-gallery-tab")?.extras.states).toContain("selected");
    expect(variants.find((variant) => variant.name === "hig-reference-card")?.use).toContain("not a native-platform");
  });

  it("Kakao keeps Login compliance separate from corporate controls", () => {
    const blocks = componentsFromTokens(readRef("kakao"));
    const variants = blocks!.flatMap((block) => block.variants.map((variant) => ({ type: block.type, ...variant })));
    expect(variants).toHaveLength(6);
    expect(variants.find((variant) => variant.name === "kakao-login")).toMatchObject({
      type: "button",
      bg: "#fee500",
      radius: "12px",
    });
    expect(variants.find((variant) => variant.name === "corporate-nav")?.font).toContain("KakaoBig");
    expect(variants.find((variant) => variant.name === "dark-marketing-tag")?.type).toBe("badge");
  });

  it("legacy prose parser remains available for references not yet migrated", () => {
    const legacyFixture = `## 4. Component Stylings

### Buttons
**Primary**
- Background: #000000

### Inputs
**Search**
- Border: 1px solid #cccccc

### Cards
**Feature**
- Background: #ffffff

### Badges
**Status**
- Background: #eeeeee

## 5. Layout Principles
`;
    const types = extractComponentSpecs(legacyFixture).map((block) => block.type);
    for (const required of ["button", "input", "card", "badge"]) {
      expect(types, `legacy fixture missing ${required}`).toContain(required);
    }
  });
});

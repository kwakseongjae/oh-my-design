import { describe, expect, it } from "vitest";
import { buildColorConceptGroups, colorFamilyForHex, isColorFamily, isColorFilter } from "./color-family";

describe("colorFamilyForHex", () => {
  it.each([
    ["#111111", "neutral"],
    ["#FFFFFF", "neutral"],
    ["#E62B1E", "red"],
    ["#FF7A00", "orange"],
    ["#FEE500", "yellow"],
    ["#13BD7E", "green"],
    ["#00B8A9", "teal"],
    ["#3182F6", "blue"],
    ["#7C3AED", "purple"],
    ["#FF3D8D", "pink"],
    ["#0cf", "teal"],
  ])("classifies %s as %s", (hex, family) => {
    expect(colorFamilyForHex(hex)).toBe(family);
  });

  it("keeps missing or malformed primary colors unclassified", () => {
    expect(colorFamilyForHex("")).toBeNull();
    expect(colorFamilyForHex("rgb(49, 130, 246)")).toBeNull();
    expect(colorFamilyForHex("#12zz99")).toBeNull();
  });

  it("accepts only supported URL color-family values", () => {
    expect(isColorFamily("blue")).toBe(true);
    expect(isColorFamily("neutral")).toBe(true);
    expect(isColorFamily("cyan")).toBe(false);
    expect(isColorFamily(null)).toBe(false);
    expect(isColorFilter("etc")).toBe(true);
  });

  it("orders concepts by reference count and combines low-volume families into Etc", () => {
    const colors = [
      ...Array(5).fill("#3182F6"),
      ...Array(4).fill("#111111"),
      ...Array(2).fill("#7C3AED"),
      "#FEE500",
      "#FF3D8D",
    ];
    // Use a small synthetic threshold crossing by repeating the leading groups.
    const groups = buildColorConceptGroups([
      ...Array(6).fill(colors).flat(),
      ...Array(5).fill("#3182F6"),
      ...Array(6).fill("#111111"),
    ]);

    expect(groups.map((group) => group.key)).toEqual(["blue", "neutral", "etc"]);
    expect(groups.map((group) => group.count)).toEqual([35, 30, 24]);
    expect(groups[2].families).toEqual(["yellow", "purple", "pink"]);
  });
});

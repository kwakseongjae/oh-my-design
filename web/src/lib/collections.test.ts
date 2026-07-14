import { describe, expect, it } from "vitest";
import { COLOR_FAMILIES, colorFamilyForHex } from "@/lib/builder/color-family";
import { COLLECTIONS_BY_SLUG, colorCollectionSlug, getCollectionEntries } from "./collections";

describe("color collections", () => {
  it.each(COLOR_FAMILIES)("publishes a non-thin %s collection from canonical primary colors", (family) => {
    const slug = colorCollectionSlug(family);
    expect(COLLECTIONS_BY_SLUG[slug]?.colorFamily).toBe(family);
    const entries = getCollectionEntries(slug);
    expect(entries.length).toBeGreaterThanOrEqual(6);
    expect(entries.every((entry) => colorFamilyForHex(entry.primaryColor) === family)).toBe(true);
  });
});

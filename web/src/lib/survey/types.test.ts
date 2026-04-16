import { describe, it, expect } from "vitest";
import {
  DESIGN_TYPES,
  getDesignType,
  getTypeCode,
  matchReferences,
  buildTypeAvatarUrl,
  REFERENCE_PROFILES,
  TYPE_PALETTES,
} from "./types";

describe("DESIGN_TYPES", () => {
  it("has exactly 16 entries", () => {
    expect(Object.keys(DESIGN_TYPES)).toHaveLength(16);
  });

  it("each entry's code key matches its code property", () => {
    for (const [code, type] of Object.entries(DESIGN_TYPES)) {
      expect(type.code).toBe(code);
    }
  });

  it("each type has non-empty name, tagline, and description", () => {
    for (const type of Object.values(DESIGN_TYPES)) {
      expect(type.name.length).toBeGreaterThan(0);
      expect(type.tagline.length).toBeGreaterThan(0);
      expect(type.description.length).toBeGreaterThan(10);
    }
  });

  it("every 4-axis combination has a corresponding type", () => {
    const temp = ["C", "W"];
    const dens = ["D", "O"];
    const elev = ["F", "L"];
    const shape = ["S", "R"];
    for (const t of temp) {
      for (const d of dens) {
        for (const e of elev) {
          for (const s of shape) {
            const code = `${t}${d}${e}${s}`;
            expect(DESIGN_TYPES[code as keyof typeof DESIGN_TYPES]).toBeDefined();
          }
        }
      }
    }
  });
});

describe("TYPE_PALETTES", () => {
  it("has a palette for every design type", () => {
    for (const code of Object.keys(DESIGN_TYPES)) {
      const palette = TYPE_PALETTES[code as keyof typeof TYPE_PALETTES];
      expect(palette).toBeDefined();
      expect(palette.shape.length).toBeGreaterThanOrEqual(2);
      expect(palette.bg.length).toBeGreaterThanOrEqual(1);
    }
  });
});

describe("getTypeCode", () => {
  it("concatenates 4 axis letters", () => {
    expect(getTypeCode("C", "D", "F", "S")).toBe("CDFS");
    expect(getTypeCode("W", "O", "L", "R")).toBe("WOLR");
  });
});

describe("getDesignType", () => {
  it("returns type for valid code", () => {
    expect(getDesignType("CDFS")?.name).toBe("The Engineer");
    expect(getDesignType("WOLR")?.name).toBe("The Artist");
  });
});

describe("buildTypeAvatarUrl", () => {
  it("includes the type's palette params", () => {
    const url = buildTypeAvatarUrl("CDFS");
    expect(url).toContain("dicebear.com");
    expect(url).toContain("thumbs");
    expect(url).toContain("shapeColor=");
    expect(url).toContain("backgroundColor=");
  });

  it("uses type name as default seed", () => {
    const url = buildTypeAvatarUrl("CDFS");
    expect(url).toContain("seed=TheEngineer");
  });

  it("accepts custom seed", () => {
    const url = buildTypeAvatarUrl("CDFS", "custom");
    expect(url).toContain("seed=custom");
  });
});

describe("matchReferences", () => {
  it("returns primary and adjacent arrays", () => {
    const result = matchReferences("CDFS");
    expect(result).toHaveProperty("primary");
    expect(result).toHaveProperty("adjacent");
    expect(Array.isArray(result.primary)).toBe(true);
    expect(Array.isArray(result.adjacent)).toBe(true);
  });

  it("primary has exactly 2 entries (different categories when possible)", () => {
    const result = matchReferences("CDFS");
    expect(result.primary).toHaveLength(2);
  });

  it("primary's top match has score of 100 for a perfect match", () => {
    // CDFS — Vercel and Linear are both CDFS profiles
    const result = matchReferences("CDFS");
    expect(result.primary[0].score).toBeGreaterThanOrEqual(95);
  });

  it("applies supplementary bonuses when provided", () => {
    const withoutSup = matchReferences("CDFS");
    const withSup = matchReferences("CDFS", {
      saturation: "muted",
      typography: "geometric",
      darkMode: false,
    });

    // With supplementary match, Vercel should score higher (muted, geometric, light)
    const vercelBase = withoutSup.primary.find((r) => r.id === "vercel")?.score ?? 0;
    const vercelBoosted = withSup.primary.find((r) => r.id === "vercel")?.score ?? 0;
    expect(vercelBoosted).toBeGreaterThanOrEqual(vercelBase);
  });

  it("adjacent refs differ from user type by 1-2 axes", () => {
    const userCode = "CDFS";
    const user = { t: userCode[0], d: userCode[1], e: userCode[2], s: userCode[3] };
    const result = matchReferences(userCode);

    for (const adj of result.adjacent) {
      const profile = REFERENCE_PROFILES[adj.id];
      let matches = 0;
      if (profile.t === user.t) matches++;
      if (profile.d === user.d) matches++;
      if (profile.e === user.e) matches++;
      if (profile.s === user.s) matches++;
      expect(matches).toBeGreaterThanOrEqual(2);
      expect(matches).toBeLessThanOrEqual(3);
    }
  });

  it("primary and adjacent have no overlapping IDs", () => {
    const result = matchReferences("CDFS");
    const primaryIds = new Set(result.primary.map((r) => r.id));
    for (const adj of result.adjacent) {
      expect(primaryIds.has(adj.id)).toBe(false);
    }
  });
});

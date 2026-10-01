import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import {
  pickLabelColor,
  resolveCanvas,
  resolvePrimaryColor,
  resolveRadius,
  resolveUiFont,
} from "./brand-tokens";
import { contrastRatio } from "@/lib/contrast";

const byId = (id: string) => {
  const e = REGISTRY.find((r) => r.id === id);
  if (!e) throw new Error(id);
  return e;
};

describe("resolvePrimaryColor", () => {
  it("follows token primary → brand → frontmatter, like the detail page", () => {
    // Toss: token primary #3182f6 wins over the frontmatter #0064ff.
    expect(resolvePrimaryColor(byId("toss"))).toBe("#3182f6");
    // Naver: no token primary, token brand.
    expect(resolvePrimaryColor(byId("naver"))).toBe("#03c75a");
    // Kakao: neither token; frontmatter primary_color.
    expect(resolvePrimaryColor(byId("kakao"))).toBe("#fee500");
  });

  it("matches the expression /api/references used before it was shared, for every reference", () => {
    const drift = REGISTRY.filter((e) => {
      const old = e.tokens?.colors?.primary || e.tokens?.colors?.brand || e.tokens?.color?.primary || e.primaryColor;
      return old !== resolvePrimaryColor(e);
    }).map((e) => e.id);
    expect(drift).toEqual([]);
  });
});

describe("absent stays absent", () => {
  it("returns null rather than a default when a reference lacks the value", () => {
    expect(resolveUiFont(byId("naver"))).toBeNull(); // only "System" + corporate family
    expect(resolveUiFont(byId("toss"))).toBe("Toss Product Sans");
    expect(resolveCanvas(byId("toss"))).toBe("#ffffff");
    expect(resolveRadius(byId("toss"))).toEqual({ key: "md", px: 6 });
  });
});

describe("pickLabelColor", () => {
  it("keeps the reference's on-primary only when it clears the threshold", () => {
    // White on Toss blue is 3.7:1 — passes the large-text bar, fails body.
    expect(pickLabelColor("#3182f6", "#ffffff", 3).source).toBe("on-primary");
    expect(pickLabelColor("#3182f6", "#ffffff", 4.5).source).toBe("measured");
  });

  it("always returns the higher-contrast ink when measuring", () => {
    for (const fill of ["#fee500", "#0cefd3", "#000000", "#ff6f0f"]) {
      const c = pickLabelColor(fill, null, 4.5);
      expect(c.ratio).toBeCloseTo(contrastRatio(c.color, fill));
      expect(c.ratio).toBeGreaterThanOrEqual(Math.max(contrastRatio("#131416", fill), contrastRatio("#ffffff", fill)) - 1e-9);
    }
  });
});

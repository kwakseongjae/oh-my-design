import { describe, expect, it, vi } from "vitest";

// No counter store in tests: getTopBrands must fall back to the dated snapshot.
vi.mock("@/lib/kv", () => ({ getRedis: () => null, counterKey: (e: string) => `omd:counter:${e}` }));
vi.mock("next/cache", () => ({ unstable_cache: <T,>(fn: T) => fn }));

import { REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import { contrastRatio } from "@/lib/contrast";
import { PREVIEW_LABEL_PX, TIER_COUNTS, getEvidenceExample, getHueWall, getTopBrands } from "./data";

describe("landing data", () => {
  it("reads tier counts from the quality manifest", () => {
    expect(TIER_COUNTS.verified + TIER_COUNTS.partial + TIER_COUNTS.legacy).toBe(REFERENCE_QUALITY_COUNTS.total);
  });

  it("labels the snapshot with its date when the live counter is unavailable", async () => {
    const top = await getTopBrands();
    expect(top.snapshotDate).toBe("2026-10-01");
    expect(top.brands.map((b) => b.id).slice(0, 3)).toEqual(["toss", "apple", "karrot"]);
  });

  it("every preview label clears its measured contrast bar", async () => {
    expect(PREVIEW_LABEL_PX).toBeGreaterThanOrEqual(24); // large text → 3:1
    const top = await getTopBrands();
    for (const b of top.brands) {
      expect(contrastRatio(b.label.color, b.primary)).toBeGreaterThanOrEqual(3);
      if (b.screen) expect(contrastRatio(b.screen.foreground, b.screen.canvas)).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("links the verified tier to a real, fully backed evidence example", () => {
    const ex = getEvidenceExample();
    expect(ex).not.toBeNull();
    expect(ex!.href).toBe("/design-systems/toss#evidence");
    expect(ex!.backed).toBeLessThanOrEqual(ex!.claims);
  });

  it("puts every verified reference on the hue wall, once", () => {
    const wall = getHueWall();
    expect(new Set(wall.map((w) => w.id)).size).toBe(wall.length);
    expect(wall.length).toBe(REFERENCE_QUALITY_COUNTS.verified_v2);
  });
});

import { describe, expect, it } from "vitest";
import { dedupeRouteUrls } from "./capture-policy";

describe("capture route dedupe (2026-09-30)", () => {
  it("counts routes that normalize to the same href once", () => {
    expect(dedupeRouteUrls([
      "https://lemonbase.com",
      "https://lemonbase.com/",
      "https://lemonbase.com/pricing",
      "https://LEMONBASE.com/pricing",
      "https://lemonbase.com/products/inquiry",
    ])).toEqual([
      "https://lemonbase.com/",
      "https://lemonbase.com/pricing",
      "https://lemonbase.com/products/inquiry",
    ]);
  });

  it("keeps a different path, query or fragment, and a string that is not a URL", () => {
    expect(dedupeRouteUrls([
      "https://www.goorm.io/",
      "https://www.goorm.io/solution/ai-dev",
      "https://www.goorm.io/?tab=2",
      "https://www.goorm.io/#pricing",
      "not a url",
      "not a url",
    ])).toEqual([
      "https://www.goorm.io/",
      "https://www.goorm.io/solution/ai-dev",
      "https://www.goorm.io/?tab=2",
      "https://www.goorm.io/#pricing",
      "not a url",
    ]);
  });
});

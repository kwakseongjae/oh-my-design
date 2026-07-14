import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import sitemap from "./sitemap";

describe("reference sitemap", () => {
  it("indexes every canonical registry reference", () => {
    const routes = sitemap();
    const references = routes.filter((route) => /\/design-systems\/[^/]+$/.test(route.url));
    expect(references).toHaveLength(REGISTRY.length);
  });

  it("derives crawl priority and freshness from computed quality", () => {
    const toss = sitemap().find((route) => route.url.endsWith("/design-systems/toss"));
    const quality = REFERENCE_QUALITY_BY_ID.toss;
    expect(toss?.priority).toBe(
      quality.status === "verified_v2" ? 0.85 : quality.status === "partial" ? 0.75 : 0.6,
    );
    const expectedDate = quality.tokensExtractedAt ?? quality.verifiedAt;
    expect(toss?.lastModified).toEqual(expectedDate ? new Date(expectedDate) : expect.any(Date));
  });

  it("indexes the collection directory and all collection landings", () => {
    const routes = sitemap().filter((route) => route.url.includes("/collections"));
    expect(routes.some((route) => route.url.endsWith("/collections"))).toBe(true);
    expect(routes.some((route) => route.url.endsWith("/collections/color-blue"))).toBe(true);
  });

  it("indexes the curated verified-evolution artifacts", () => {
    const routes = sitemap().filter((route) => route.url.endsWith("/evolution"));
    expect(routes).toHaveLength(5);
    expect(routes.some((route) => route.url.endsWith("/design-systems/toss/evolution"))).toBe(true);
  });
});

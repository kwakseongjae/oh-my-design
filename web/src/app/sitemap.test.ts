import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import sitemap from "./sitemap";
import { DOC_LOCALES, DOC_PAGES, docsHref } from "@/lib/docs/locales";
import { getAllPosts, getPostLocales } from "@/lib/blog/posts";
import { blogPostUrl } from "@/lib/site";

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

  it("lists merged pages once, at their single surviving URL", () => {
    const urls = sitemap().map((route) => route.url);
    // Collections became a /design-systems filter; changelog versions and
    // comparison slugs became anchors. Their old URLs 308, so none are listed.
    expect(urls.some((url) => url.includes("/collections"))).toBe(false);
    expect(urls.some((url) => /\/changelog\/./.test(url))).toBe(false);
    expect(urls.some((url) => /\/alternatives\/./.test(url))).toBe(false);
    expect(urls).toContain("https://oh-my-design.kr/changelog");
    expect(urls).toContain("https://oh-my-design.kr/alternatives");
  });

  it("does not list deleted pages", () => {
    const urls = new Set(sitemap().map((route) => route.url));
    for (const path of ["/cli", "/presets", "/benchmarks", "/font-playground", "/playground", "/qa-references"]) {
      expect(urls.has(`https://oh-my-design.kr${path}`)).toBe(false);
    }
  });

  it("indexes the curated verified-evolution artifacts", () => {
    const routes = sitemap().filter((route) => route.url.endsWith("/evolution"));
    expect(routes).toHaveLength(5);
    expect(routes.some((route) => route.url.endsWith("/design-systems/toss/evolution"))).toBe(true);
  });

  it("indexes every localized CLI docs route", () => {
    const urls = new Set(sitemap().map((route) => route.url));
    expect(urls.has("https://oh-my-design.kr/docs")).toBe(false);
    for (const locale of DOC_LOCALES) {
      for (const page of DOC_PAGES) {
        expect(urls.has(`https://oh-my-design.kr${docsHref(locale, page)}`)).toBe(true);
      }
    }
  });
});

describe("blog routes in the sitemap", () => {
  it("lists each post at a URL that answers 200, not one that redirects", () => {
    const urls = new Set(sitemap().map((route) => route.url));
    for (const post of getAllPosts()) {
      const locales = getPostLocales(post.slug);
      expect(urls).toContain(blogPostUrl(post.slug, post.locale));
      // A locale the post does not have would redirect or 404.
      for (const locale of ["ko", "en"] as const) {
        if (!locales.includes(locale)) {
          expect(urls).not.toContain(blogPostUrl(post.slug, locale));
        }
      }
    }
  });
});

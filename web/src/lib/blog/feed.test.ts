import { describe, expect, it } from "vitest";
import { buildFeed } from "./feed";
import { getAllPosts } from "./posts";

describe("rss feed", () => {
  it("is well-formed and self-referential", () => {
    const xml = buildFeed("en");
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(xml).toContain('<rss version="2.0"');
    expect(xml).toContain('rel="self"');
    expect(xml).toContain("<language>en</language>");
  });

  it("carries every post of that locale, and only that locale", () => {
    for (const locale of ["ko", "en"] as const) {
      const xml = buildFeed(locale);
      const items = xml.match(/<item>/g)?.length ?? 0;
      expect(items).toBe(getAllPosts(locale).length);
      for (const post of getAllPosts(locale)) {
        expect(xml).toContain(`<guid isPermaLink="true">`);
        expect(xml).toContain(post.slug);
      }
    }
  });

  it("emits RFC 822 dates, which is what readers parse", () => {
    const xml = buildFeed("en");
    const pubDate = /<pubDate>([^<]+)<\/pubDate>/.exec(xml)?.[1];
    expect(pubDate).toBeDefined();
    expect(Number.isNaN(Date.parse(pubDate!))).toBe(false);
    expect(pubDate).toMatch(/GMT$/);
  });

  it("escapes markup in titles rather than emitting it raw", () => {
    const xml = buildFeed("en");
    // Any bare & inside a text node would break the feed.
    expect(/&(?!amp;|lt;|gt;|quot;|#)/.test(xml)).toBe(false);
  });
});

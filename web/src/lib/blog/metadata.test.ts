import { describe, expect, it } from "vitest";
import { blogIndexMetadata, blogPostJsonLd, blogPostMetadata } from "./metadata";
import { getAllPosts, getPost, lastModified } from "./posts";
import { POST_LOCALES } from "./locales";
import { DEFAULT_OG_IMAGE, blogFeedUrl } from "@/lib/site";

/**
 * Runs against the real src/content/blog tree. baemin-typography-decisions is
 * the fixture for a corrected post: published 2026-09-29, corrected 2026-10-21
 * (commit 67e0859b), in both locales.
 */
const CORRECTED = "baemin-typography-decisions";

describe("blog metadata", () => {
  it("reports a correction as the modified date, in JSON-LD and Open Graph", () => {
    for (const locale of POST_LOCALES) {
      const jsonLd = blogPostJsonLd(CORRECTED, locale);
      expect(jsonLd?.datePublished).toBe("2026-09-29");
      expect(jsonLd?.dateModified).toBe("2026-10-21");

      const og = blogPostMetadata(CORRECTED, locale).openGraph as Record<string, unknown>;
      expect(og.publishedTime).toBe("2026-09-29");
      expect(og.modifiedTime).toBe("2026-10-21");
    }
  });

  it("falls back to the publication date for a post never corrected", () => {
    for (const post of getAllPosts()) {
      if (post.updated) continue;
      expect(lastModified(post)).toBe(post.date);
      expect(blogPostJsonLd(post.slug, post.locale)?.dateModified).toBe(post.date);
    }
  });

  it("never reports a modified date before publication", () => {
    for (const locale of POST_LOCALES) {
      for (const post of getAllPosts(locale)) {
        expect(lastModified(post) >= post.date).toBe(true);
      }
    }
  });

  it("points every page at the RSS feed of its own locale", () => {
    for (const locale of POST_LOCALES) {
      expect(blogIndexMetadata(locale).alternates?.types).toEqual({
        "application/rss+xml": blogFeedUrl(locale),
      });
      for (const post of getAllPosts(locale)) {
        expect(blogPostMetadata(post.slug, locale).alternates?.types).toEqual({
          "application/rss+xml": blogFeedUrl(post.locale),
        });
      }
    }
    expect(blogFeedUrl("ko")).toMatch(/^https:\/\/.+\/feed\.xml$/);
    expect(blogFeedUrl("en")).toMatch(/^https:\/\/.+\/en\/feed\.xml$/);
  });

  it("gives each index its own localized share card, not the main site's", () => {
    for (const locale of POST_LOCALES) {
      const meta = blogIndexMetadata(locale);
      const og = meta.openGraph as Record<string, unknown>;
      const twitter = meta.twitter as Record<string, unknown>;
      expect(og.images).toEqual([DEFAULT_OG_IMAGE]);
      expect(twitter.images).toEqual([DEFAULT_OG_IMAGE.url]);
      expect(twitter.card).toBe("summary_large_image");
      expect(twitter.title).toBe(og.title);
      expect(twitter.description).toBe(meta.description);
    }
    const ko = blogIndexMetadata("ko").twitter as Record<string, unknown>;
    const en = blogIndexMetadata("en").twitter as Record<string, unknown>;
    expect(ko.title).not.toBe(en.title);
    expect(String(ko.description)).toMatch(/[가-힣]/);
  });

  it("reads the correction from each locale file on its own", () => {
    expect(getPost(CORRECTED, "ko")?.updated).toBe("2026-10-21");
    expect(getPost(CORRECTED, "en")?.updated).toBe("2026-10-21");
  });
});

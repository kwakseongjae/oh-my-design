import { describe, expect, it } from "vitest";
import { CANONICAL_LOCALE, getAllPosts, getPost, getPostLocales, listPosts } from "./posts";

/**
 * These run against the real src/content/blog tree, so a malformed post fails
 * here before it fails a build.
 */
describe("published posts", () => {
  const posts = getAllPosts();

  it("loads at least one post", () => {
    expect(posts.length).toBeGreaterThan(0);
  });

  it("gives every post a URL-safe slug and a sortable date", () => {
    for (const post of posts) {
      expect(post.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(post.title.length).toBeGreaterThan(0);
      expect(post.description.length).toBeGreaterThan(0);
      expect(post.body.length).toBeGreaterThan(0);
    }
  });

  it("lists newest first", () => {
    const dates = posts.map((post) => post.date);
    expect([...dates].sort((a, b) => b.localeCompare(a))).toEqual(dates);
  });

  it("resolves the same post by slug as the index lists", () => {
    for (const post of posts) {
      expect(getPost(post.slug)).toEqual(post);
    }
    expect(getPost("no-such-post")).toBeUndefined();
  });
});

describe("locale fallback", () => {
  const slugs = [...new Set(getAllPosts().map((post) => post.slug))];

  it("resolves every post to a locale it actually has", () => {
    for (const slug of slugs) {
      const locales = getPostLocales(slug);
      expect(locales.length).toBeGreaterThan(0);
      expect(locales).toContain(getPost(slug)!.locale);
    }
  });

  it("prefers the canonical locale when the post has one", () => {
    for (const slug of slugs) {
      if (getPostLocales(slug).includes(CANONICAL_LOCALE)) {
        expect(getPost(slug)!.locale).toBe(CANONICAL_LOCALE);
      }
    }
  });

  it("lists a post on every index, in its own locale when there is no translation", () => {
    // A reader of one index still sees a post written only in the other —
    // hiding it from half the audience is worse than admitting the gap.
    for (const locale of ["ko", "en"] as const) {
      expect(listPosts(locale).map((post) => post.slug).sort()).toEqual([...slugs].sort());
    }
  });

  it("returns nothing when a locale the post does not have is demanded", () => {
    for (const slug of slugs) {
      for (const locale of ["ko", "en"] as const) {
        if (!getPostLocales(slug).includes(locale)) {
          expect(getPost(slug, locale)).toBeUndefined();
          expect(getAllPosts(locale).map((post) => post.slug)).not.toContain(slug);
        }
      }
    }
  });
});

import { describe, expect, it } from "vitest";
import { CANONICAL_LOCALE, getAllPosts, getPost, getPostLocales } from "./posts";

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
  it("serves a post that has no canonical translation yet", () => {
    // The v2.0.0 post ships in English only until its Korean twin is written;
    // the index must still show it rather than dropping it.
    const post = getPost("v2-a-design-system-your-agent-can-hold");
    expect(post).toBeDefined();
    expect(getAllPosts().map((p) => p.slug)).toContain(post!.slug);
  });

  it("reports the locales a post actually has", () => {
    const locales = getPostLocales("v2-a-design-system-your-agent-can-hold");
    expect(locales).toContain("en");
    expect(getPostLocales("no-such-post")).toEqual([]);
  });

  it("returns nothing when a specific missing locale is demanded", () => {
    const slug = "v2-a-design-system-your-agent-can-hold";
    const has = getPostLocales(slug);
    if (!has.includes(CANONICAL_LOCALE)) {
      expect(getPost(slug, CANONICAL_LOCALE)).toBeUndefined();
      expect(getAllPosts(CANONICAL_LOCALE).map((p) => p.slug)).not.toContain(slug);
    }
  });
});

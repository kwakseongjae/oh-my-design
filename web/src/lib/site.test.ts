import { afterEach, describe, expect, it, vi } from "vitest";

/**
 * The origins are read from the environment at module scope, so each case
 * re-imports the module under a stubbed flag.
 */
async function loadSite(flag: string) {
  vi.resetModules();
  vi.stubEnv("NEXT_PUBLIC_BLOG_SUBDOMAIN", flag);
  return import("./site");
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("before the subdomain is live", () => {
  it("keeps every canonical on the main site", async () => {
    const site = await loadSite("");
    expect(site.BLOG_ON_SUBDOMAIN).toBe(false);
    expect(site.blogIndexUrl()).toBe("https://oh-my-design.kr/blog");
    expect(site.blogIndexUrl("en")).toBe("https://oh-my-design.kr/blog/en");
    expect(site.blogPostUrl("a-post")).toBe("https://oh-my-design.kr/blog/a-post");
    expect(site.blogPostUrl("a-post", "en")).toBe("https://oh-my-design.kr/blog/en/a-post");
    expect(site.blogFeedUrl()).toBe("https://oh-my-design.kr/blog/feed.xml");
  });

  it("links within the blog by path, under /blog", async () => {
    const site = await loadSite("");
    expect(site.blogIndexHref()).toBe("/blog");
    expect(site.blogIndexHref("en")).toBe("/blog/en");
    expect(site.blogPostHref("a-post")).toBe("/blog/a-post");
    expect(site.blogPostHref("a-post", "en")).toBe("/blog/en/a-post");
  });

  it("links to the main site relatively, so navigation stays client-side", async () => {
    const site = await loadSite("");
    expect(site.siteHref("/cli")).toBe("/cli");
  });
});

describe("once the subdomain is live", () => {
  it("moves every canonical to the blog host", async () => {
    const site = await loadSite("1");
    expect(site.BLOG_ON_SUBDOMAIN).toBe(true);
    expect(site.blogIndexUrl()).toBe("https://blog.oh-my-design.kr");
    expect(site.blogIndexUrl("en")).toBe("https://blog.oh-my-design.kr/en");
    expect(site.blogPostUrl("a-post")).toBe("https://blog.oh-my-design.kr/a-post");
    expect(site.blogPostUrl("a-post", "en")).toBe("https://blog.oh-my-design.kr/en/a-post");
    expect(site.blogFeedUrl("en")).toBe("https://blog.oh-my-design.kr/en/feed.xml");
  });

  it("drops the /blog prefix from in-blog links", async () => {
    const site = await loadSite("1");
    expect(site.blogIndexHref()).toBe("/");
    expect(site.blogIndexHref("en")).toBe("/en");
    expect(site.blogPostHref("a-post")).toBe("/a-post");
  });

  it("makes main-site links absolute", async () => {
    // A bare "/cli" on the blog host would be rewritten into /blog/cli and 404.
    const site = await loadSite("1");
    expect(site.siteHref("/cli")).toBe("https://oh-my-design.kr/cli");
  });
});

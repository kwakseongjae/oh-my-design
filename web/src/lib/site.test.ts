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

describe("blog URLs before the subdomain is live", () => {
  it("keeps every canonical on the main site", async () => {
    const site = await loadSite("");
    expect(site.BLOG_ON_SUBDOMAIN).toBe(false);
    expect(site.blogIndexUrl()).toBe("https://oh-my-design.kr/blog");
    expect(site.blogPostUrl("some-post")).toBe("https://oh-my-design.kr/blog/some-post");
  });
});

describe("blog URLs once the subdomain is live", () => {
  it("moves every canonical to the blog host", async () => {
    const site = await loadSite("1");
    expect(site.BLOG_ON_SUBDOMAIN).toBe(true);
    expect(site.blogIndexUrl()).toBe("https://blog.oh-my-design.kr");
    expect(site.blogPostUrl("some-post")).toBe("https://blog.oh-my-design.kr/some-post");
  });
});

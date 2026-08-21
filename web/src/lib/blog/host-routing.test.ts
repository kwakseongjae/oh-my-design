import { describe, expect, it } from "vitest";
import { isBlogHost, resolveBlogHostRouting } from "./host-routing";

const BLOG = "blog.oh-my-design.kr";
const MAIN = "oh-my-design.kr";

describe("blog host detection", () => {
  it("accepts the blog host with a port and in any case", () => {
    expect(isBlogHost(BLOG)).toBe(true);
    expect(isBlogHost("BLOG.Oh-My-Design.KR")).toBe(true);
    expect(isBlogHost("blog.localhost:3000")).toBe(true);
  });

  it("rejects every other host, including a missing one", () => {
    expect(isBlogHost(MAIN)).toBe(false);
    expect(isBlogHost("www.oh-my-design.kr")).toBe(false);
    expect(isBlogHost("oh-my-design-git-preview.vercel.app")).toBe(false);
    expect(isBlogHost(null)).toBe(false);
    expect(isBlogHost("")).toBe(false);
  });
});

describe("routing on the blog host", () => {
  const cases: Array<[string, ReturnType<typeof resolveBlogHostRouting>]> = [
    ["/", { type: "rewrite", pathname: "/blog" }],
    ["/v2-a-design-system-your-agent-can-hold", { type: "rewrite", pathname: "/blog/v2-a-design-system-your-agent-can-hold" }],
    ["/en/some-post", { type: "rewrite", pathname: "/blog/en/some-post" }],
    // Internal links are authored as /blog/... so they also work on the main
    // site; on this host they are duplicates and must consolidate.
    ["/blog", { type: "redirect", pathname: "/" }],
    ["/blog/some-post", { type: "redirect", pathname: "/some-post" }],
    // Framework, API and static assets stay untouched — rewriting these would
    // send the page's own JS and images to /blog/... and 404 the whole render.
    ["/_next/static/chunks/main.js", null],
    ["/api/track", null],
    ["/logo.png", null],
    ["/favicon.ico", null],
    // Reserved: these fall through to the main app until the blog-specific
    // routes exist (A5 sitemap/robots, B4 feed).
    ["/robots.txt", null],
    ["/sitemap.xml", null],
    ["/feed.xml", null],
  ];

  it.each(cases)("maps %s", (pathname, expected) => {
    expect(resolveBlogHostRouting(BLOG, pathname)).toEqual(expected);
  });

  it("behaves identically on the local dev alias", () => {
    expect(resolveBlogHostRouting("blog.localhost:3000", "/some-post")).toEqual({
      type: "rewrite",
      pathname: "/blog/some-post",
    });
  });
});

describe("routing on every other host", () => {
  it("leaves the main site alone", () => {
    expect(resolveBlogHostRouting(MAIN, "/")).toBeNull();
    expect(resolveBlogHostRouting(MAIN, "/blog")).toBeNull();
    expect(resolveBlogHostRouting(MAIN, "/blog/some-post")).toBeNull();
    expect(resolveBlogHostRouting(MAIN, "/builder")).toBeNull();
  });

  it("leaves preview deployments and missing hosts alone", () => {
    expect(resolveBlogHostRouting("oh-my-design-git-preview.vercel.app", "/blog")).toBeNull();
    expect(resolveBlogHostRouting(null, "/")).toBeNull();
  });
});

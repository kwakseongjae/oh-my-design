import { afterEach, describe, expect, it, vi } from "vitest";

/**
 * next.config.ts cannot import src/lib/site.ts (it is loaded outside the
 * tsconfig path aliases), so it keeps its own copy of the blog origin. These
 * assert the copy is right and that the redirect only exists behind the flag —
 * shipping it early would 301 readers into a host that does not resolve yet.
 */

async function loadConfig(flag: string) {
  vi.resetModules();
  vi.stubEnv("NEXT_PUBLIC_BLOG_SUBDOMAIN", flag);
  const [config, site] = await Promise.all([import("../next.config"), import("../src/lib/site")]);
  return { config: config.default, site };
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("blog redirects", () => {
  it("stays off until the subdomain is live", async () => {
    const { config } = await loadConfig("");
    const redirects = await config.redirects!();
    expect(redirects.some((rule) => rule.source.startsWith("/blog"))).toBe(false);
  });

  it("sends both /blog and /blog/* to the blog origin once it is live", async () => {
    const { config, site } = await loadConfig("1");
    const redirects = await config.redirects!();

    const index = redirects.find((rule) => rule.source === "/blog");
    const posts = redirects.find((rule) => rule.source === "/blog/:path*");

    expect(index).toMatchObject({ destination: site.BLOG_ORIGIN, permanent: true });
    expect(posts).toMatchObject({
      destination: `${site.BLOG_ORIGIN}/:path*`,
      permanent: true,
    });
  });

  it("keeps the pre-existing redirects intact", async () => {
    const { config } = await loadConfig("1");
    const redirects = await config.redirects!();
    expect(redirects.map((rule) => rule.source)).toEqual(
      expect.arrayContaining(["/design-systems/:id.md", "/curation", "/result/:typeCode"]),
    );
  });
});

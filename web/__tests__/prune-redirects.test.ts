import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import config from "../next.config";

/**
 * Site pruning, 2026-10-01 (docs/REDESIGN_DECISIONS_2026-10-01.md R4). Every
 * removed or merged URL that drew traffic must keep answering with a permanent
 * redirect to the content it used to hold.
 */
const EXPECTED: Record<string, string> = {
  "/font-playground": "/design-systems",
  "/curation": "/design-systems",
  "/presets": "/docs/en/skills",
  "/benchmarks": "/docs/en",
  "/collections": "/design-systems",
  "/collections/:slug": "/design-systems?collection=:slug",
  "/changelog/:version": "/changelog#v:version",
  "/alternatives/:slug": "/alternatives#:slug",
  "/cli": "/docs/en",
  "/docs/connector": "/docs/en/getting-started#without-cli",
  "/twitter-image.png": "/og-image.png",
  "/api/og/:path*": "/og/:path*",
  "/reference/:id": "/design-systems/:id",
};

describe("pruned-page redirects", () => {
  it("never routes through /builder, which is itself a redirect now", async () => {
    const redirects = await config.redirects!();
    expect(redirects.filter((rule) => rule.destination.startsWith("/builder"))).toEqual([]);
    // A config rule for /builder would shadow the Route Handler that checks the ref.
    expect(redirects.filter((rule) => rule.source.startsWith("/builder"))).toEqual([]);
  });

  it("308s every removed or merged URL to its surviving page", async () => {
    const redirects = await config.redirects!();
    for (const [source, destination] of Object.entries(EXPECTED)) {
      expect(redirects.find((rule) => rule.source === source)).toMatchObject({
        destination,
        permanent: true,
      });
    }
  });

  it("sends old share-card URLs to the /og route handlers, which nothing redirects", async () => {
    // feat/referral-1: robots.txt disallows /api/ for every crawler, so the cards
    // moved to /og/. The handlers must exist at the new path and be gone from the
    // old one, and no rule may bounce /og/ anywhere else.
    const redirects = await config.redirects!();
    const app = join(__dirname, "..", "src", "app");
    for (const kind of ["reference", "blog"]) {
      expect(existsSync(join(app, "og", kind, "route.tsx")), `/og/${kind}`).toBe(true);
      expect(existsSync(join(app, "api", "og", kind)), `/api/og/${kind}`).toBe(false);
    }
    expect(redirects.filter((rule) => rule.source.startsWith("/og"))).toEqual([]);
  });

  it("never points at the docs-for-AI page round 11 removed", async () => {
    // /docs/connector used to land on /docs/en/ai; that page now 308s itself.
    const redirects = await config.redirects!();
    expect(redirects.filter((rule) => /^\/docs\/[^/]+\/ai(?:[#?/]|$)/.test(rule.destination))).toEqual([]);
  });
});

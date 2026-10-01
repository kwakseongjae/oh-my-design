import { describe, expect, it } from "vitest";
import config from "../next.config";

/**
 * Site pruning, 2026-10-01 (docs/REDESIGN_DECISIONS_2026-10-01.md R4). Every
 * removed or merged URL that drew traffic must keep answering with a permanent
 * redirect to the content it used to hold.
 */
const EXPECTED: Record<string, string> = {
  "/font-playground": "/builder",
  "/presets": "/docs/en/skills",
  "/benchmarks": "/docs/en/showcase",
  "/collections": "/design-systems",
  "/collections/:slug": "/design-systems?collection=:slug",
  "/changelog/:version": "/changelog#v:version",
  "/alternatives/:slug": "/alternatives#:slug",
  "/cli": "/docs/en",
  "/docs/connector": "/docs/en/ai",
};

describe("pruned-page redirects", () => {
  it("308s every removed or merged URL to its surviving page", async () => {
    const redirects = await config.redirects!();
    for (const [source, destination] of Object.entries(EXPECTED)) {
      expect(redirects.find((rule) => rule.source === source)).toMatchObject({
        destination,
        permanent: true,
      });
    }
  });
});

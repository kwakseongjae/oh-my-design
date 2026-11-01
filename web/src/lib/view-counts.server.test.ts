import { describe, expect, it } from "vitest";
import { fetchPageViews, getViewCounts, ITEM_PATH_RE, viewsById } from "./view-counts.server";
import { recommendedOrder, type ArchiveRow } from "@/app/(en)/design-systems/archive-rows.server";

const row = (id: string, installs = 0): ArchiveRow =>
  ({ id, name: id, installs, updated: "", region: "other", domain: "saas" }) as unknown as ArchiveRow;

describe("GA4 page views", () => {
  it("is empty without credentials (local and CI builds), so the archive keeps its old order", async () => {
    expect(process.env.GOOGLE_SA_KEY_JSON).toBeUndefined();
    expect(await getViewCounts()).toEqual({});
  });

  it("matches only item pages, in English and Korean", () => {
    for (const p of ["/design-systems/toss", "/ko/design-systems/toss", "/design-systems/cal.com/"]) expect(ITEM_PATH_RE.test(p)).toBe(true);
    for (const p of ["/design-systems", "/design-systems/toss/evolution", "/ja/design-systems/toss", "/r/toss", "/toss/design.md"]) {
      expect(ITEM_PATH_RE.test(p)).toBe(false);
    }
  });

  it("sums locales per id, ignores query strings and drops zero or malformed counts", () => {
    expect(
      viewsById([
        { pagePath: "/design-systems/toss", screenPageViews: 1000 },
        { pagePath: "/ko/design-systems/toss", screenPageViews: 138 },
        { pagePath: "/design-systems/toss?ref=x", screenPageViews: 2 },
        { pagePath: "/design-systems/karrot/", screenPageViews: 339 },
        { pagePath: "/design-systems/apple", screenPageViews: 0 },
        { pagePath: "/design-systems/kakao", screenPageViews: Number.NaN },
        { pagePath: "/design-systems", screenPageViews: 2655 },
      ]),
    ).toEqual({ toss: 1140, karrot: 339 });
  });

  it("reads every page of the report and asks only for item-page paths over 30 complete days", async () => {
    const bodies: Record<string, unknown>[] = [];
    const page = (n: number, from: number) => ({
      rowCount: 10001,
      rows: Array.from({ length: n }, (_, i) => ({ dimensionValues: [{ value: `/design-systems/r${from + i}` }], metricValues: [{ value: "1" }] })),
    });
    const fake = (async (_url: string, init: RequestInit) => {
      const body = JSON.parse(String(init.body));
      bodies.push(body);
      return new Response(JSON.stringify(body.offset === 0 ? page(10000, 0) : page(1, 10000)));
    }) as unknown as typeof fetch;
    const rows = await fetchPageViews("t", "533041908", undefined, fake);
    expect(rows).toHaveLength(10001);
    expect(bodies.map((b) => b.offset)).toEqual([0, 10000]);
    expect(bodies[0]).toMatchObject({ dateRanges: [{ startDate: "30daysAgo", endDate: "yesterday" }], metrics: [{ name: "screenPageViews" }] });
  });

  it("throws on a GA4 error instead of returning a partial list", async () => {
    const fail = (async () => new Response("denied", { status: 403 })) as unknown as typeof fetch;
    await expect(fetchPageViews("t", "1", undefined, fail)).rejects.toThrow("403");
  });
});

describe("recommended order", () => {
  it("ranks by views, then installs, then the incoming order", () => {
    const rows = [row("a", 5), row("b"), row("c", 9), row("d"), row("e")];
    const order = recommendedOrder(rows, { b: 40, d: 40, e: 3 }).map((r) => r.id);
    expect(order).toEqual(["b", "d", "e", "c", "a"]);
  });

  it("without view data keeps the incoming order except where installs rank", () => {
    const rows = [row("a"), row("b", 2), row("c")];
    expect(recommendedOrder(rows, {}).map((r) => r.id)).toEqual(["b", "a", "c"]);
  });

  it("does not reorder the array it was given", () => {
    const rows = [row("a"), row("b")];
    recommendedOrder(rows, { b: 1 });
    expect(rows.map((r) => r.id)).toEqual(["a", "b"]);
  });
});

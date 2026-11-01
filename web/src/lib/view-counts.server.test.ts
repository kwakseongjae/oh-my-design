import { describe, expect, it } from "vitest";
import { readViewCounts, VIEWS_KEY } from "./view-counts.server";
import type { CounterReader } from "./install-counts.server";
import { recommendedOrder, type ArchiveRow } from "@/app/(en)/design-systems/archive-rows.server";
// The sync script is plain ESM outside the app; its parser is pure and shared here.
import { viewsById, ITEM_PATH_RE } from "../../../scripts/analytics/sync-views.mjs";

function fake(flat: (string | number)[] | undefined): CounterReader & { keys: string[] } {
  const keys: string[] = [];
  return {
    keys,
    async zrange<T extends unknown[]>(key: string) {
      keys.push(key);
      return (flat ?? []) as unknown as T;
    },
  };
}

const row = (id: string, installs = 0): ArchiveRow =>
  ({ id, name: id, installs, updated: "", region: "other", domain: "saas" }) as unknown as ArchiveRow;

describe("view counts", () => {
  it("is empty without KV (local and CI builds), so the archive keeps its old order", async () => {
    expect(await readViewCounts(null)).toEqual({});
  });

  it("reads only the 30-day views key and keeps positive whole numbers", async () => {
    const kv = fake(["toss", "1138", "karrot", 339, "zero", 0, "neg", -4, "bad", "x", "frac", 2.6]);
    expect(await readViewCounts(kv)).toEqual({ toss: 1138, karrot: 339, frac: 3 });
    expect(kv.keys).toEqual([VIEWS_KEY]);
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

describe("GA4 → KV views sync", () => {
  const known = new Set(["toss", "karrot", "aws-cloudscape", "cal.com"]);

  it("matches only item pages, in English and Korean", () => {
    for (const p of ["/design-systems/toss", "/ko/design-systems/toss", "/design-systems/cal.com/"]) expect(ITEM_PATH_RE.test(p)).toBe(true);
    for (const p of ["/design-systems", "/design-systems/toss/evolution", "/ja/design-systems/toss", "/r/toss", "/toss/design.md"]) {
      expect(ITEM_PATH_RE.test(p)).toBe(false);
    }
  });

  it("sums locales per id, ignores queries and drops ids that are not references", () => {
    const views = viewsById(
      [
        { pagePath: "/design-systems/toss", screenPageViews: 1000 },
        { pagePath: "/ko/design-systems/toss", screenPageViews: 138 },
        { pagePath: "/design-systems/toss?ref=x", screenPageViews: 2 },
        { pagePath: "/design-systems/karrot/", screenPageViews: 339 },
        { pagePath: "/design-systems/not-a-ref", screenPageViews: 50 },
        { pagePath: "/design-systems/cal.com", screenPageViews: 0 },
      ],
      known,
    );
    expect(Object.fromEntries(views)).toEqual({ toss: 1140, karrot: 339 });
  });
});

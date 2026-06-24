import { describe, it, expect } from "vitest";
import { sortRefs, recommendScore, resolveVisitorCountry, type SortableRef } from "./sort-refs";

const NOW = Date.parse("2026-06-24");

function ref(p: Partial<SortableRef> & { name: string }): SortableRef {
  return { countryCode: "US", hot: false, pop: 0, added: null, quality: 0.5, ...p };
}

describe("sortRefs", () => {
  const apple = ref({ name: "Apple", countryCode: "US", quality: 0.95, pop: 10 });
  const anthropic = ref({ name: "Anthropic", countryCode: "US", quality: 0.9, pop: 4 });
  const toss = ref({ name: "Toss", countryCode: "KR", quality: 0.85, pop: 8 });
  const naver = ref({ name: "Naver", countryCode: "KR", quality: 0.6, pop: 2 });
  const all = [naver, toss, apple, anthropic];

  it("recommend: global visitor surfaces iconic global refs above KR (no blanket KR pin)", () => {
    const out = sortRefs(all, "recommend", "US", NOW);
    // Apple (top quality + locale) leads; the old KR-first pin would have put Toss/Naver first.
    expect(out[0].name).toBe("Apple");
    expect(out.indexOf(apple)).toBeLessThan(out.indexOf(naver));
  });

  it("recommend: KR visitor gives home-region brands their boost", () => {
    const krFirst = sortRefs(all, "recommend", "KR", NOW);
    const usFirst = sortRefs(all, "recommend", "US", NOW);
    // Toss ranks higher for a KR visitor than for a US visitor.
    expect(krFirst.indexOf(toss)).toBeLessThanOrEqual(usFirst.indexOf(toss));
  });

  it("recommend: HOT refs pin to the very top", () => {
    const hotNaver = ref({ name: "Naver", countryCode: "KR", quality: 0.6, pop: 2, hot: true });
    const out = sortRefs([apple, anthropic, hotNaver], "recommend", "US", NOW);
    expect(out[0]).toBe(hotNaver);
  });

  it("popular: orders by pop desc (hot first)", () => {
    const out = sortRefs(all, "popular", "US", NOW);
    expect(out.map((r) => r.name)).toEqual(["Apple", "Toss", "Anthropic", "Naver"]);
  });

  it("az: pure alphabetical, ignores hot/pop", () => {
    const out = sortRefs(all, "az", "US", NOW);
    expect(out.map((r) => r.name)).toEqual(["Anthropic", "Apple", "Naver", "Toss"]);
  });

  it("new: newest added first", () => {
    const a = ref({ name: "A", added: "2026-06-01" });
    const b = ref({ name: "B", added: "2026-06-20" });
    const c = ref({ name: "C", added: null });
    expect(sortRefs([a, b, c], "new", "US", NOW).map((r) => r.name)).toEqual(["B", "A", "C"]);
  });

  it("does not mutate the input array", () => {
    const input = [...all];
    sortRefs(input, "az", "US", NOW);
    expect(input).toEqual(all);
  });
});

describe("recommendScore", () => {
  it("rewards quality, popularity, recency, and locale match", () => {
    const base = ref({ name: "x", quality: 0.5, pop: 0, added: null, countryCode: "US" });
    const opts = { visitorCountry: "US", maxPop: 100, now: NOW };
    const better = recommendScore(ref({ ...base, quality: 0.9 }), opts);
    expect(better).toBeGreaterThan(recommendScore(base, opts));
    // locale match adds a nudge
    const home = recommendScore(ref({ ...base, countryCode: "US" }), opts);
    const away = recommendScore(ref({ ...base, countryCode: "KR" }), opts);
    expect(home).toBeGreaterThan(away);
  });
});

describe("resolveVisitorCountry", () => {
  it("prefers a valid geo country", () => {
    expect(resolveVisitorCountry("kr", "en-US")).toBe("KR");
  });
  it("falls back to language", () => {
    expect(resolveVisitorCountry(null, "ko-KR")).toBe("KR");
    expect(resolveVisitorCountry(null, "ja")).toBe("JP");
    expect(resolveVisitorCountry(undefined, "en-GB")).toBe("GB");
  });
  it("defaults to US (global) when unknown", () => {
    expect(resolveVisitorCountry(null, "")).toBe("US");
  });
});

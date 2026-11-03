import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { searchReferences } from "./catalog";
import { descriptorIndex } from "./search-data.mjs";

// Each test re-imports the catalog (it builds its index at import), which is slow under a full parallel run.
vi.setConfig({ testTimeout: 30_000 });

const mocks = vi.hoisted(() => ({ data: {} as Record<string, unknown> }));
vi.mock("@/data/search-descriptors.generated.json", () => ({ default: mocks.data }));

// Two references get terms; everything else is keyword-only, as in a partly generated index.
const INDEX = {
  model: "test", prompt_version: 1,
  entries: {
    toss: { hash: "h1", terms: { en: ["calm", "blue", "fintech app"], ko: ["차분한", "파란색", "금융 앱"], ja: ["落ち着いた", "金融アプリ"], zh: ["沉穩", "金融應用"] } },
    mercury: { hash: "h2", terms: { en: ["calm", "banking for startups"], ko: ["차분한", "스타트업 뱅킹"], ja: ["落ち着いた"], zh: ["沉穩"] } },
    "not-in-catalog": { hash: "h3", terms: { en: ["calm"], ko: ["차분한"], ja: ["落ち着いた"], zh: ["沉穩"] } },
    tossbank: { hash: "h4", terms: "malformed" },
  },
};

function setIndex(value: Record<string, unknown>) {
  for (const key of Object.keys(mocks.data)) delete mocks.data[key];
  Object.assign(mocks.data, value);
}

beforeEach(async () => {
  setIndex(INDEX);
  vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("search must not call out"); }));
  vi.resetModules(); // the catalog builds its index once at import
});
afterEach(() => { vi.unstubAllGlobals(); vi.restoreAllMocks(); });

async function search(args: Parameters<typeof searchReferences>[0]) {
  const { searchReferences: run } = await import("./catalog");
  return run(args);
}

it("finds references by their written terms in any locale and reports hybrid mode", async () => {
  for (const query of ["calm", "차분한", "落ち着いた", "沉穩"]) {
    const result = await search({ query, limit: 20 });
    expect(result.search_mode).toBe("hybrid");
    const ids = result.results.filter(({ match }) => match.includes("descriptors")).map(({ id }) => id).sort();
    expect(ids).toEqual(["mercury", "toss"]);
  }
  expect(fetch).not.toHaveBeenCalled();
});

it("ranks the reference whose terms cover more of a vague query first", async () => {
  const result = await search({ query: "차분한 금융 앱" });
  expect(result.results[0].id).toBe("toss");
  expect(result.results[0].match).toContain("descriptors");
});

it("keeps keyword matches, filters, verified-first ordering and limits", async () => {
  expect((await search({ query: "토스" })).results.slice(0, 3).map(({ id }) => id).sort()).toEqual(["toss", "toss-securities", "tossbank"]);
  const unfiltered = await search({ query: "calm blue fintech", limit: 20 });
  const firstUnverified = unfiltered.results.findIndex(({ status }) => status !== "verified_v2");
  if (firstUnverified >= 0) expect(unfiltered.results.slice(firstUnverified).every(({ status }) => status !== "verified_v2")).toBe(true);
  expect((await search({ query: "calm blue fintech" })).results).toHaveLength(8);
  const filtered = await search({ query: "calm blue fintech", country: ["kr"], category: ["fintech"], status: "verified", limit: 2 });
  expect(filtered.results).toHaveLength(2);
  expect(filtered.results[0].id).toBe("toss");
  for (const result of filtered.results) expect(result).toMatchObject({ country: "KR", category: "fintech", status: "verified_v2" });
});

it("falls back to keyword mode when the index is missing or empty", async () => {
  setIndex({ model: null, entries: {} });
  const result = await search({ query: "calm blue fintech" });
  expect(result.search_mode).toBe("keyword");
  expect(result.results.every(({ match }) => !match.includes("descriptors"))).toBe(true);
});

it.each([undefined, "", "   ", "!!!"])("lists without scoring for an empty query: %s", async (query) => {
  const result = await search({ query });
  expect(result.results.every(({ match }) => match.length === 0)).toBe(true);
});

it("indexes only current catalog ids with well-formed terms", () => {
  const index = descriptorIndex(INDEX, ["toss", "mercury", "tossbank"]);
  expect([...index.keys()].sort()).toEqual(["mercury", "toss"]);
  expect(index.get("toss")).toContain("落ち着いた");
  expect(descriptorIndex(null, ["toss"]).size).toBe(0);
  expect(descriptorIndex({ entries: [] }, ["toss"]).size).toBe(0);
});

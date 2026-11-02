import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import { searchReferences, summaryFor } from "./catalog";
import { CATALOG, envelope, outputs } from "./contracts";
import { QUERY_EMBEDDING_TIMEOUT_MS } from "./semantic";

const mocks = vi.hoisted(() => ({ embeddings: {} as Record<string, unknown> }));
vi.mock("@/data/embeddings.generated.json", () => ({ default: mocks.embeddings }));

// Captured from the keyword-only implementation before adding semantic search.
const baseline = [
  { query: "토스", rows: [
    ["toss", ["display_name_ko"], 15], ["toss-securities", ["display_name_ko"], 15],
    ["tossbank", ["display_name_ko"], 15], ["sandoll", ["overview"], 6],
  ] },
  { query: "toss", rows: [
    ["toss-securities", ["id", "name", "display_name_ko", "overview"], 36],
    ["toss", ["id", "name", "overview"], 26], ["tossbank", ["id", "name", "overview"], 26],
    ["jandi", ["overview"], 6], ["sandoll", ["overview"], 6], ["ridi", ["overview"], 6],
    ["tada", ["overview"], 6], ["wadiz", ["overview"], 6],
  ] },
  { query: "calm blue fintech", rows: [
    ["coolblue", ["id", "name", "overview"], 26], ["toss", ["overview", "category"], 20],
    ["palantir", ["name", "overview"], 16], ["alipay", ["overview", "category"], 14],
    ["coinone", ["overview", "category"], 14], ["hyundaicard", ["overview", "category"], 14],
    ["kbank", ["overview", "category"], 14], ["n26", ["overview", "category"], 14],
  ] },
  { query: "fintech", rows: [
    ["quotabook", ["category", "overview"], 9], ["smartbank", ["category", "overview"], 9],
    ["3o3", ["category"], 8], ["8percent", ["category"], 8], ["adyen", ["category"], 8],
    ["alipay", ["category"], 8], ["avanza", ["category"], 8], ["banksalad", ["category"], 8],
  ] },
] satisfies { query: string; rows: [string, string[], number][] }[];

function expectedKeyword({ rows }: typeof baseline[number]) {
  return envelope({ results: rows.map(([id, match, score]) => ({ ...summaryFor(id), match, score })), search_mode: "keyword" });
}

beforeEach(() => {
  for (const key of Object.keys(mocks.embeddings)) delete mocks.embeddings[key];
  Object.assign(mocks.embeddings, {
    model: "baai/bge-m3", dim: 2, reference_ast: CATALOG.reference_ast,
    vectors: Object.fromEntries(REGISTRY.map(({ id }) => [id, id === "toss" || id === "mercury" ? [1, 0] : [0, 1]])),
  });
  vi.stubEnv("OPENROUTER_API_KEY", "test-only");
  vi.stubGlobal("fetch", vi.fn(async () => Response.json({ data: [{ index: 0, embedding: [1, 0] }] })));
});
afterEach(() => { vi.useRealTimers(); vi.unstubAllEnvs(); vi.unstubAllGlobals(); vi.restoreAllMocks(); });

describe.each(["no key", "placeholder", "stale file"])("keyword fallback: %s", (reason) => {
  beforeEach(() => {
    if (reason === "no key") vi.stubEnv("OPENROUTER_API_KEY", undefined);
    if (reason === "placeholder") {
      for (const key of Object.keys(mocks.embeddings)) delete mocks.embeddings[key];
      Object.assign(mocks.embeddings, { model: null, dim: 0, generated: null, vectors: {} });
    }
    if (reason === "stale file") mocks.embeddings.reference_ast = "stale-catalog";
  });
  it.each(baseline)("preserves the original result bytes for $query", async (fixture) => {
    const result = await searchReferences({ query: fixture.query });
    expect(result.search_mode).toBe("keyword");
    expect(JSON.stringify(result.results)).toBe(JSON.stringify(expectedKeyword(fixture).results));
    expect(result).toEqual(expectedKeyword(fixture));
    expect(fetch).not.toHaveBeenCalled();
  });
});

it("ranks toss first for calm blue fintech with the closest vector, preserving lexical matches", async () => {
  const result = outputs.search_references.parse(await searchReferences({ query: "calm blue fintech" }));
  expect(result.search_mode).toBe("hybrid");
  expect(result.results[0]).toEqual({ ...summaryFor("toss"), match: ["overview", "category"], score: 70 });
  expect(fetch).toHaveBeenCalledTimes(1);
  const [url, init] = vi.mocked(fetch).mock.calls[0];
  expect(url).toBe("https://openrouter.ai/api/v1/embeddings");
  expect(init).toMatchObject({ method: "POST", cache: "no-store", signal: expect.any(AbortSignal) });
  expect(JSON.parse(init!.body as string)).toEqual({ model: "baai/bge-m3", input: "calm blue fintech" });
});

it("retrieves semantic-only matches while retaining verified-first ordering", async () => {
  const result = await searchReferences({ query: "semanticexclusive", limit: 20 });
  expect(result.results.map(({ id }) => id)).toEqual(["toss", "mercury"]);
  expect(result.results[0]).toMatchObject({ match: [], score: 50, status: "verified_v2" });
  expect(result.results[1]).toMatchObject({ match: [], score: 50, trust: "unverified" });
});

it("uses cosine similarity for non-unit vectors and never penalizes keywords for negative similarity", async () => {
  const vectors = mocks.embeddings.vectors as Record<string, number[]>;
  for (const { id } of REGISTRY) vectors[id] = [-1, -1];
  vectors.toss = [5, 0];
  vectors.coolblue = [0, 7];
  vi.stubGlobal("fetch", vi.fn(async () => Response.json({ data: [{ index: 0, embedding: [3, 4] }] })));
  const result = await searchReferences({ query: "calm blue fintech", limit: 20 });
  expect(result.results.find(({ id }) => id === "toss")!.score).toBeCloseTo(50);
  expect(result.results.find(({ id }) => id === "coolblue")!.score).toBeCloseTo(66);
  vectors.toss = [-2, 0];
  vi.stubGlobal("fetch", vi.fn(async () => Response.json({ data: [{ index: 0, embedding: [1, 0] }] })));
  const negative = await searchReferences({ query: "calm blue fintech", limit: 20 });
  expect(negative.search_mode).toBe("hybrid");
  expect(negative.results.find(({ id }) => id === "toss")!.score).toBe(20);
});

it("keeps filters, verified-first ordering, the default limit and an explicit limit in hybrid mode", async () => {
  const unfiltered = await searchReferences({ query: "calm blue fintech", limit: 20 });
  const firstUnverified = unfiltered.results.findIndex(({ status }) => status !== "verified_v2");
  if (firstUnverified >= 0) expect(unfiltered.results.slice(firstUnverified).every(({ status }) => status !== "verified_v2")).toBe(true);
  expect((await searchReferences({ query: "calm blue fintech" })).results).toHaveLength(8);
  const filtered = await searchReferences({ query: "calm blue fintech", country: ["kr"], category: ["fintech"], status: "verified", limit: 2 });
  expect(filtered.search_mode).toBe("hybrid");
  expect(filtered.results).toHaveLength(2);
  expect(filtered.results[0].id).toBe("toss");
  for (const result of filtered.results) expect(result).toMatchObject({ country: "KR", category: "fintech", status: "verified_v2" });
});

it.each([undefined, "", "   ", "!!!"])("does not embed an empty keyword query: %s", async (query) => {
  expect((await searchReferences({ query })).search_mode).toBe("keyword");
  expect(fetch).not.toHaveBeenCalled();
});

it.each([
  { dim: 0 }, { model: null }, { model: "" }, { vectors: {} },
  { vectors: Object.fromEntries(REGISTRY.map(({ id }) => [id, [0, 0]])) },
  { vectors: Object.fromEntries(REGISTRY.map(({ id }) => [id, [Number.NaN, 1]])) },
])("ignores malformed or incomplete corpora: %j", async (invalid) => {
  Object.assign(mocks.embeddings, invalid);
  expect(await searchReferences({ query: baseline[2].query })).toEqual(expectedKeyword(baseline[2]));
  expect(fetch).not.toHaveBeenCalled();
});

it.each([
  () => Response.json({ error: "unavailable" }, { status: 503 }),
  () => { throw new Error("private query echoed in a network error"); },
  () => new Response("not json"),
  () => Response.json({ data: [] }),
  () => Response.json({ data: [{ index: 1, embedding: [1, 0] }] }),
  () => Response.json({ data: [{ index: 0, embedding: [1, 0, 0] }] }),
  () => Response.json({ data: [{ index: 0, embedding: [0, 0] }] }),
])("falls back on provider HTTP, network, JSON or vector errors without logging", async (response) => {
  const logs = ["log", "warn", "error"].map((method) => vi.spyOn(console, method as "log").mockImplementation(() => {}));
  vi.stubGlobal("fetch", vi.fn(response));
  expect(await searchReferences({ query: baseline[2].query })).toEqual(expectedKeyword(baseline[2]));
  for (const log of logs) expect(log).not.toHaveBeenCalled();
});

it("aborts a timed-out request and returns byte-identical keyword results", async () => {
  vi.useFakeTimers();
  let signal: AbortSignal | undefined;
  vi.stubGlobal("fetch", vi.fn((_url: string, init: RequestInit) => new Promise<Response>((_resolve, reject) => {
    signal = init.signal ?? undefined;
    signal!.addEventListener("abort", () => reject(new DOMException("Timed out", "AbortError")), { once: true });
  })));
  const result = searchReferences({ query: baseline[2].query });
  await vi.advanceTimersByTimeAsync(QUERY_EMBEDDING_TIMEOUT_MS);
  expect(signal?.aborted).toBe(true);
  expect(await result).toEqual(expectedKeyword(baseline[2]));
  expect(vi.getTimerCount()).toBe(0);
});

it("retains no query cache and sends a separate request for each search", async () => {
  await searchReferences({ query: "calm blue fintech" });
  await searchReferences({ query: "calm blue fintech" });
  expect(fetch).toHaveBeenCalledTimes(2);
});

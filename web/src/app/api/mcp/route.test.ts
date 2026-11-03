import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { inputs, outputs, annotations, CATALOG, NOTICE, type ToolName } from "@/lib/mcp/contracts";
import { MAX_RESPONSE_BYTES } from "@/lib/mcp/response";
import { mcpRateLimit } from "@/lib/mcp/operations";
import { REGISTRY } from "@/data/registry.generated";
import { REFERENCE_QUALITY } from "@/data/reference-quality.generated";

const mocks = vi.hoisted(() => ({
  scheduled: [] as (() => unknown)[],
  counters: [] as unknown[][],
  windows: new Map<string, number>(),
  failRedis: false,
  embeddings: {} as Record<string, unknown>,
}));
vi.mock("@/data/embeddings.generated.json", () => ({ default: mocks.embeddings }));
vi.mock("next/server", () => ({ after: (fn: () => unknown) => mocks.scheduled.push(fn) }));
vi.mock("@/lib/kv", async (importOriginal) => ({
  ...await importOriginal<typeof import("@/lib/kv")>(),
  getRedis: () => ({
    hincrby: async (...args: unknown[]) => { mocks.counters.push(["hincrby", ...args]); if (mocks.failRedis) throw new Error("unavailable"); return 1; },
    expire: async (...args: unknown[]) => { mocks.counters.push(["expire", ...args]); if (mocks.failRedis) throw new Error("unavailable"); return 1; },
    eval: async (_script: string, keys: string[], args: unknown[]) => {
      if (mocks.failRedis) throw new Error("unavailable");
      mocks.counters.push(["eval", ...keys, ...args]);
      const count = (mocks.windows.get(keys[0]) ?? 0) + 1;
      mocks.windows.set(keys[0], count);
      return [count, 60];
    },
  }),
}));
const { GET, POST, DELETE, OPTIONS } = await import("./route");

beforeEach(() => {
  mocks.scheduled.length = 0;
  mocks.counters.length = 0;
  mocks.windows.clear();
  mocks.failRedis = false;
  for (const key of Object.keys(mocks.embeddings)) delete mocks.embeddings[key];
  vi.stubEnv("OPENROUTER_API_KEY", undefined);
  vi.stubEnv("OMD_KV_REST_API_TOKEN", "contract-test-secret");
  vi.stubGlobal("fetch", vi.fn(() => { throw new Error("MCP tools must not make external requests"); }));
});
afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); });

async function rpc(method: string, params?: object, headers?: HeadersInit) {
  const request = new Request("http://localhost:3517/api/mcp", {
    method: "POST", headers: { "content-type": "application/json", accept: "application/json, text/event-stream", ...headers },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, ...(params ? { params } : {}) }),
  });
  const response = await POST(request);
  const text = await response.text();
  expect(Buffer.byteLength(text)).toBeLessThanOrEqual(MAX_RESPONSE_BYTES);
  return { response, body: JSON.parse(text) };
}
async function tool(name: ToolName, args: object) {
  const { response, body } = await rpc("tools/call", { name, arguments: args });
  expect(response.status).toBe(200);
  const result = body.result as CallToolResult;
  expect(result).toBeDefined();
  expect(result.structuredContent).toMatchObject({ catalog: CATALOG, notice: NOTICE });
  expect(result.content[0].type).toBe("text");
  expect(JSON.parse((result.content[0] as { text: string }).text)).toEqual(result.structuredContent);
  return result;
}
function noNulls(value: unknown): void {
  expect(value).not.toBeNull();
  if (Array.isArray(value)) value.forEach(noNulls);
  else if (value && typeof value === "object") Object.values(value).forEach(noNulls);
}
async function flushCounters() { await Promise.all(mocks.scheduled.splice(0).map((callback) => callback())); }

it("initializes statelessly and lists exactly six read-only tools with input and output schemas", async () => {
  const init = await rpc("initialize", { protocolVersion: "2025-11-25", capabilities: {}, clientInfo: { name: "contract-test", version: "1" } });
  expect(init.response.status).toBe(200);
  expect(init.response.headers.has("mcp-session-id")).toBe(false);
  expect(init.body.result.serverInfo).toEqual({ name: "oh-my-design", version: "2.0.0" });
  const { body } = await rpc("tools/list");
  expect(body.result.tools.map((item: { name: string }) => item.name)).toEqual(Object.keys(inputs));
  for (const item of body.result.tools) {
    expect(item.annotations).toEqual(annotations);
    expect(item.inputSchema.type).toBe("object");
    expect(item.outputSchema.type).toBe("object");
    expect(item.outputSchema.properties).toHaveProperty("catalog");
    expect(item.outputSchema.properties).toHaveProperty("notice");
  }
});

// Re-verification moves references from partial to verified (skyscanner did on 2026-11-02), so the
// partial example comes from the quality data instead of a fixed name.
const PARTIAL = REFERENCE_QUALITY.find((entry) => entry.status === "partial")!.id;
const LEGACY = REFERENCE_QUALITY.find((entry) => entry.status === "legacy_snapshot")!.id;

describe.each([
  ["toss", "verified_v2"], ["sixt", "verified_v2"], [PARTIAL, "partial"], [LEGACY, "legacy"],
] as const)("real %s (%s)", (id, status) => {
  it("satisfies every tool's output contract and preserves trust", async () => {
    const calls: [ToolName, object][] = [
      ["search_references", { query: id }], ["get_reference", { id }], ["get_design_md", { id }],
      ["get_tokens", { id, groups: ["colors", "rounded"] }], ["get_component_states", { id }],
      ["compare_references", { ids: [id, id === "sixt" ? "toss" : "sixt"], aspects: ["colors", "radius"] }],
    ];
    for (const [name, args] of calls) {
      const result = await tool(name, args);
      expect(result.isError, `${name} returned ${JSON.stringify(result.structuredContent).slice(0, 400)}`).not.toBe(true);
      const data = outputs[name].parse(result.structuredContent);
      noNulls(data);
      const summaries = "reference" in data ? [data.reference] : "references" in data ? data.references : data.results;
      const summary = summaries.find((item) => item.id === id);
      expect(summary?.status).toBe(status);
      expect(summary?.urls.page).toBe(`https://oh-my-design.kr/design-systems/${id}`);
      if (status !== "verified_v2") expect(summary).toMatchObject({ trust: "unverified", reason_codes: expect.arrayContaining(["verification_v2_missing"]) });
      if (name === "get_tokens" && status !== "verified_v2") {
        const values = outputs.get_tokens.parse(data).groups;
        for (const value of Object.values(values).flat()) expect(value).toMatchObject({ trust: "unverified", reason_codes: expect.any(Array), evidence: { status: "unsourced" } });
      }
      if (name === "get_component_states" && status !== "verified_v2") {
        for (const component of outputs.get_component_states.parse(data).components) expect(component).toMatchObject({ trust: "unverified", reason_codes: expect.any(Array) });
      }
    }
  });
});

it.each(["토스", "toss", "calm blue fintech"])("finds toss through keyword search: %s", async (query) => {
  const result = await tool("search_references", { query });
  const data = outputs.search_references.parse(result.structuredContent);
  expect(data.search_mode).toBe("keyword");
  expect(data.results.map((item) => item.id)).toContain("toss");
  const toss = data.results.find((item) => item.id === "toss")!;
  expect(toss.display_name_ko).toBe("토스");
  expect(toss.match).not.toHaveLength(0);
  expect(fetch).not.toHaveBeenCalled();
});

it("ranks verified references ahead of all unverified matches and filters with country/category/status", async () => {
  const result = await tool("search_references", { query: "fintech", limit: 20 });
  const { results } = outputs.search_references.parse(result.structuredContent);
  const firstUnverified = results.findIndex((item) => item.status !== "verified_v2");
  if (firstUnverified >= 0) expect(results.slice(firstUnverified).every((item) => item.status !== "verified_v2")).toBe(true);
  expect(results[0].status).toBe("verified_v2");
  const filtered = outputs.search_references.parse((await tool("search_references", { query: "toss", country: ["kr"], category: ["fintech"], status: "verified" })).structuredContent);
  expect(filtered.results.map((item) => item.id)).toContain("toss");
  for (const reference of filtered.results) expect(reference).toMatchObject({ country: "KR", category: "fintech", status: "verified_v2" });
});

it("serves hybrid results through MCP and keeps query text out of KV counters", async () => {
  Object.assign(mocks.embeddings, {
    model: "baai/bge-m3", dim: 2, reference_ast: CATALOG.reference_ast,
    vectors: Object.fromEntries(REGISTRY.map(({ id }) => [id, id === "toss" ? [1, 0] : [0, 1]])),
  });
  vi.stubEnv("OPENROUTER_API_KEY", "test-only");
  vi.stubGlobal("fetch", vi.fn(async () => Response.json({ data: [{ index: 0, embedding: [1, 0] }] })));
  const query = "private-person@example.test calm blue fintech";
  const result = outputs.search_references.parse((await tool("search_references", { query })).structuredContent);
  expect(result.search_mode).toBe("hybrid");
  expect(result.results[0].id).toBe("toss");
  expect(fetch).toHaveBeenCalledTimes(1);
  const [, init] = vi.mocked(fetch).mock.calls[0];
  expect(JSON.parse(init!.body as string).input).toBe(query);
  await flushCounters();
  const telemetry = JSON.stringify(mocks.counters);
  expect(telemetry).not.toContain(query);
  expect(telemetry).not.toContain("private-person");
  expect(telemetry).not.toContain("example.test");
  expect(telemetry).not.toContain("calm");
  const increments = mocks.counters.filter(([method]) => method === "hincrby");
  expect(increments).toEqual([["hincrby", expect.stringMatching(/^omd:mcp:v2:tools:/), "search_references", 1]]);
});

it("reports absent groups and states without substituting or promoting prose states", async () => {
  const data = outputs.get_tokens.parse((await tool("get_tokens", { id: "sixt", groups: ["spacing", "shadow", "motion", "typography"] })).structuredContent);
  expect(data.absent).toEqual(expect.arrayContaining(["spacing", "shadow", "motion", "fonts.faces", "display_name_ko"]));
  expect(data.groups).not.toHaveProperty("spacing");
  expect(data.reference).not.toHaveProperty("display_name_ko");
  // A partial reference's component whose states exist only in prose: none may be promoted to a measured state.
  let prose: { id: string; component: string } | undefined;
  for (const entry of REFERENCE_QUALITY.filter((item) => item.status === "partial")) {
    const all = outputs.get_component_states.parse((await tool("get_component_states", { id: entry.id })).structuredContent);
    const component = all.components.find((item) => item.not_measured.length === 3);
    if (component) { prose = { id: entry.id, component: component.id }; break; }
  }
  expect(prose).toBeDefined();
  const states = outputs.get_component_states.parse((await tool("get_component_states", { id: prose!.id, component: prose!.component })).structuredContent);
  expect(states.components[0].states).toEqual({});
  expect(states.components[0].not_measured).toEqual(["hover", "pressed", "focus"]);
  expect(states.absent).toContain(`components.${prose!.component}.hover`);
  const missing = outputs.get_component_states.parse((await tool("get_component_states", { id: "toss", component: "zz-nonexistent" })).structuredContent);
  expect(missing.components).toEqual([]);
  expect(missing.absent).toContain("components.zz-nonexistent");
});

it("passes font evidence classes through and attaches measured, per-script substitute labels", async () => {
  const result = await tool("get_tokens", { id: "toss", groups: ["typography"] });
  expect(result.isError).not.toBe(true);
  const data = outputs.get_tokens.parse(result.structuredContent);
  expect(data.fonts?.faces?.["Toss Product Sans"].evidence).toEqual(["official-product-use", "live-surface-use"]);
  expect(data.fonts?.faces?.Tossface.evidence).toEqual(["declared-only"]);
  expect(data.fonts?.substitutes?.map((item) => item.script)).toEqual(["latin", "hangul"]);
  for (const substitute of data.fonts?.substitutes ?? []) {
    expect(substitute.label).toBe("substitute — not the brand face");
    expect(substitute.metrics).toMatchObject({ xHeightRatio: expect.any(Number), avgAdvance: expect.any(Number), classification: expect.any(String), weightRange: expect.any(String) });
  }
  expect(data.fonts?.safe_defaults?.hangul[0].label).toBe("safe default (not the brand face)");
  const family = data.groups.typography.find((value) => value.path === "typography.h1.fontFamily")!;
  expect(family.substitutes).toHaveLength(2);
});

it("serves the default toss token request within the full HTTP budget", async () => {
  const result = await tool("get_tokens", { id: "toss" });
  expect(result.isError).not.toBe(true);
  expect(outputs.get_tokens.parse(result.structuredContent).groups.colors.length).toBeGreaterThan(0);
});

it("returns an actionable tool error instead of truncating a real oversized comparison", async () => {
  const result = await tool("compare_references", { ids: ["toss", "sixt", PARTIAL, LEGACY] });
  expect(result.isError).toBe(true);
  expect(result.structuredContent).toMatchObject({ error: { code: "response_too_large", message: expect.stringContaining("fewer") } });
});

it.each(["toss", "sixt", PARTIAL, LEGACY])("returns canonical UTF-8 bytes for %s, without the raw route footer", async (id) => {
  const data = outputs.get_design_md.parse((await tool("get_design_md", { id })).structuredContent);
  const canonical = readFileSync(join(process.cwd(), "references", id, "DESIGN.md"));
  expect(Buffer.from(data.markdown, "utf8").equals(canonical)).toBe(true);
  const { GET: rawGet } = await import("@/app/r/[id]/route");
  const raw = await (await rawGet(new Request(`https://oh-my-design.kr/${id}/design.md`), { params: Promise.resolve({ id }) })).text();
  expect(raw.startsWith(data.markdown)).toBe(true);
  expect(raw.slice(data.markdown.length)).toMatch(/^\n\n---\nSource:/);
  const colors = outputs.get_design_md.parse((await tool("get_design_md", { id, sections: ["Colors"] })).structuredContent);
  const start = data.markdown.indexOf("## Colors\n");
  expect(colors.markdown).toBe(data.markdown.slice(start, data.markdown.indexOf("## Typography\n", start)));
});

it("rejects unknown ids consistently without guessing a similar brand", async () => {
  for (const name of ["get_reference", "get_design_md", "get_tokens", "get_component_states", "compare_references"] as const) {
    const result = await tool(name, name === "compare_references" ? { ids: ["toss", "toss-bank"] } : { id: "toss-bank" });
    expect(result.isError).toBe(true);
    expect(result.structuredContent).toMatchObject({ error: { code: "unknown_reference", message: expect.stringContaining("search_references") } });
  }
  await flushCounters();
  expect(JSON.stringify(mocks.counters)).not.toContain("toss-bank");
});

it("never writes catalog files, invokes a provider, or records input text/person data; only aggregate counters change", async () => {
  const digest = () => createHash("sha256").update(REGISTRY.map(({ id }) => ["reference.json", "DESIGN.md"].map((name) => readFileSync(join(process.cwd(), "references", id, name))).map((buffer) => buffer.toString("utf8")).join("")).join("")).digest("hex");
  const before = digest();
  const query = "private-person@example.test calm blue fintech";
  await tool("search_references", { query });
  await tool("get_reference", { id: "toss" });
  await tool("get_tokens", { id: PARTIAL });
  await tool("get_design_md", { id: LEGACY });
  await tool("get_component_states", { id: "sixt" });
  await tool("compare_references", { ids: ["toss", "sixt"], aspects: ["radius"] });
  await flushCounters();
  expect(digest()).toBe(before);
  expect(fetch).not.toHaveBeenCalled();
  const telemetry = JSON.stringify(mocks.counters);
  expect(telemetry).not.toContain(query);
  expect(telemetry).not.toContain("private-person");
  for (const [method, key, field] of mocks.counters) {
    expect(["hincrby", "expire", "eval"]).toContain(method);
    expect(key).toMatch(/^omd:mcp:v2:/);
    if (method === "hincrby") expect([...Object.keys(inputs), "toss", "sixt", PARTIAL, LEGACY]).toContain(field);
  }
  expect(mocks.counters.filter(([method, key]) => method === "hincrby" && String(key).includes(":tools:"))).toHaveLength(6);
});

it("rejects the 61st request, never stores the IP and fails open when Redis fails", async () => {
  for (let i = 0; i < 60; i++) expect((await mcpRateLimit("203.0.113.7")).ok).toBe(true);
  const response = await rpc("tools/list", undefined, { "x-forwarded-for": "203.0.113.7, 10.0.0.1" });
  expect(response.response.status).toBe(429);
  expect(response.response.headers.get("retry-after")).toBe("60");
  expect(JSON.stringify(mocks.counters)).not.toContain("203.0.113.7");
  mocks.failRedis = true;
  expect((await rpc("tools/list")).response.status).toBe(200);
});

it.each(["https://evil.test", "null", "https://claude.ai.evil.test", "https://claude.ai/path"])("rejects a foreign or malformed origin: %s", async (origin) => {
  expect((await rpc("tools/list", undefined, { origin })).response.status).toBe(403);
  expect(mocks.counters).toHaveLength(0);
});

it("permits the v1 origins, answers preflight and keeps the Phase 0 non-MCP GET demand signal", async () => {
  for (const origin of ["https://oh-my-design.kr", "https://claude.ai", "https://claude.com"]) expect((await rpc("tools/list", undefined, { origin })).response.status).toBe(200);
  const preflight = await OPTIONS(new Request("https://oh-my-design.kr/api/mcp", { method: "OPTIONS", headers: { origin: "https://claude.ai" } }));
  expect(preflight.status).toBe(204);
  expect(preflight.headers.get("access-control-allow-origin")).toBe("https://claude.ai");
  expect((await GET(new Request("https://oh-my-design.kr/api/mcp"))).status).toBe(405);
  expect((await GET(new Request("https://oh-my-design.kr/api/mcp", { headers: { accept: "text/event-stream" } }))).status).toBe(405);
  expect((await DELETE(new Request("https://oh-my-design.kr/api/mcp", { method: "DELETE" }))).status).toBe(405);
  await flushCounters();
  expect(mocks.counters.filter(([method, key]) => method === "hincrby" && String(key).includes(":non-mcp-get:"))).toHaveLength(1);
});

it("rejects invalid inputs and accepts notifications without retaining sessions", async () => {
  for (const [name, args] of [["search_references", { limit: 21 }], ["compare_references", { ids: ["toss"] }], ["get_tokens", { id: "toss", groups: ["invented"] }]] as const) {
    const { body } = await rpc("tools/call", { name, arguments: args });
    expect(body.result.isError).toBe(true);
    expect(body.result.structuredContent).toMatchObject({ catalog: CATALOG, notice: NOTICE, error: { code: "invalid_tool_input" } });
  }
  const response = await POST(new Request("http://localhost:3517/api/mcp", {
    method: "POST", headers: { "content-type": "application/json", accept: "application/json, text/event-stream" },
    body: JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized" }),
  }));
  expect(response.status).toBe(202);
  expect(await response.text()).toBe("");
});

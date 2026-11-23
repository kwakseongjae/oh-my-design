import { expect, it, vi } from "vitest";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { outputs, type ToolName } from "@/lib/mcp/contracts";

// The shut state: what a checkout holds until the owner publishes (an empty manifest).
vi.mock("@/data/screens-public.generated.json", () => ({ default: { generated: "", base: "", services: [] } }));
vi.mock("next/server", () => ({ after: () => undefined }));
vi.mock("@/lib/kv", async (importOriginal) => ({ ...await importOriginal<typeof import("@/lib/kv")>(), getRedis: () => null }));
const { POST } = await import("./route");

async function call(name: ToolName, args: object): Promise<CallToolResult> {
  const response = await POST(new Request("http://localhost:3517/api/mcp", {
    method: "POST", headers: { "content-type": "application/json", accept: "application/json, text/event-stream" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/call", params: { name, arguments: args } }),
  }));
  expect(response.status).toBe(200);
  return (await response.json()).result;
}

it.each([
  ["list_screen_types", {}], ["search_screens", { type: "sign-in" }],
  ["get_service_screens", { id: "karrot" }], ["get_screen_context", { id: "karrot", key: "home" }],
] as const)("%s answers the shut state with an empty result that says so, not an error", async (name, args) => {
  const result = await call(name, args);
  expect(result.isError).not.toBe(true);
  const data = outputs[name].parse(result.structuredContent) as { screens: { published: boolean; message?: string }; absent: string[] };
  expect(data.screens.published).toBe(false);
  expect(data.screens.message).toContain("not published");
  expect(data.absent).toContain("screens");
});

it("keeps the reference tools working while screens are shut", async () => {
  const result = await call("get_reference", { id: "toss" });
  expect(result.isError).not.toBe(true);
});

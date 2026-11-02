import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { after } from "next/server";
import { errorEnvelope } from "@/lib/mcp/contracts";
import { clientIp, countNonMcpGet, mcpRateLimit, originAllowed } from "@/lib/mcp/operations";
import { MAX_RESPONSE_BYTES, toolResult } from "@/lib/mcp/response";
import { createMcpServer } from "@/lib/mcp/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

function httpError(status: number, message: string, headers?: HeadersInit): Response {
  return Response.json({ jsonrpc: "2.0", id: null, ...errorEnvelope("transport_error", message), error: { code: -32000, message } }, { status, headers });
}

async function handle(request: Request): Promise<Response> {
  const headers = new Headers({ "cache-control": "no-store", Vary: "Origin" });
  if (!originAllowed(request)) return httpError(403, "Forbidden origin", headers);
  const origin = request.headers.get("origin");
  if (origin) headers.set("access-control-allow-origin", origin);
  const rate = await mcpRateLimit(clientIp(request));
  if (!rate.ok) {
    headers.set("retry-after", String(rate.retryAfterSec));
    return httpError(429, "Rate limited", headers);
  }
  if (request.method === "OPTIONS") {
    headers.set("access-control-allow-methods", "GET, POST, DELETE, OPTIONS");
    headers.set("access-control-allow-headers", "content-type, mcp-protocol-version, mcp-session-id, last-event-id");
    return new Response(null, { status: 204, headers });
  }
  // Streamable HTTP permits 405 for GET when no server-initiated SSE is offered.
  if (request.method !== "POST") {
    if (request.method === "GET" && !request.headers.get("accept")?.includes("text/event-stream")) after(() => countNonMcpGet());
    headers.set("allow", "POST, OPTIONS");
    return httpError(405, "Use Streamable HTTP POST with initialize, tools/list or tools/call.", headers);
  }
  // Fresh instances per request: no sessions, retained messages or shared client state.
  const transport = new WebStandardStreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
  const server = createMcpServer();
  try {
    await server.connect(transport);
    const response = await transport.handleRequest(request);
    let body = await response.text();
    if (body && response.headers.get("content-type")?.includes("application/json")) {
      const message = JSON.parse(body);
      // SDK input validation happens before callbacks. Keep those errors on the same data contract.
      if (message.result?.isError && !message.result.structuredContent) {
        message.result = toolResult(errorEnvelope("invalid_tool_input", "Invalid tool name or arguments. Use tools/list for the supported input schemas."), true);
        body = JSON.stringify(message);
      }
    }
    if (Buffer.byteLength(body, "utf8") > MAX_RESPONSE_BYTES) return httpError(413, "Response exceeds 256 KB. Narrow the request.", headers);
    for (const [key, value] of response.headers) headers.set(key, value);
    return new Response(response.status === 202 ? null : body, { status: response.status, headers });
  } finally {
    await server.close();
  }
}

export { handle as GET, handle as POST, handle as DELETE, handle as OPTIONS };

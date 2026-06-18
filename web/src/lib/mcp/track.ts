/**
 * Server-side usage tracking for the `/api/mcp` connector.
 *
 * The connector is invoked by Claude's servers (no browser, no client-side
 * analytics), so usage is counted here, on our side — which is exactly the
 * "see MCP traffic as our traffic" goal. Two sinks:
 *   - KV counters (Upstash) for robust, queryable aggregates — mirrors the
 *     /api/track pattern, namespaced under `omd:mcp:*`.
 *   - Mixpanel server-side /track so MCP events land alongside web events in
 *     the existing dashboard (distinguishable by `surface: "mcp"`).
 *
 * GA4 server-side (Measurement Protocol) is intentionally NOT wired here — per
 * project convention, new GA4 work goes through the /ga4 skill.
 *
 * Fire-and-forget: never throws, never blocks the tool response. Call via
 * Next's `after()` so it runs after the response is flushed.
 *
 * Privacy: no PII, no client IP, no free-text query content, a constant
 * server-side distinct_id. We log only the tool name and (for get_design_md)
 * the public reference id. The local npx package stays zero-telemetry; only
 * this hosted connector measures.
 */
import { getRedis } from "@/lib/kv";

const MCP_TOOL_KEY = "omd:mcp:tool"; // zset: tool name -> call count
const MCP_REF_KEY = "omd:mcp:ref"; // zset: reference id -> fetch count
const MP_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ?? "";

export interface McpEvent {
  tool: string;
  reference?: string;
}

async function kvTrack(ev: McpEvent): Promise<void> {
  const redis = getRedis();
  if (!redis) return;
  const ops: Promise<unknown>[] = [redis.zincrby(MCP_TOOL_KEY, 1, ev.tool)];
  if (ev.reference) ops.push(redis.zincrby(MCP_REF_KEY, 1, ev.reference));
  await Promise.all(ops);
}

async function mixpanelTrack(ev: McpEvent): Promise<void> {
  if (!MP_TOKEN) return;
  const payload = [
    {
      event: "mcp_tool_call",
      properties: {
        token: MP_TOKEN,
        distinct_id: "omd-mcp-server",
        $insert_id: `${ev.tool}:${ev.reference ?? ""}:${Date.now()}:${Math.random()
          .toString(36)
          .slice(2)}`,
        time: Date.now(),
        surface: "mcp",
        tool: ev.tool,
        ...(ev.reference ? { reference: ev.reference } : {}),
      },
    },
  ];
  const body = `data=${encodeURIComponent(
    Buffer.from(JSON.stringify(payload)).toString("base64"),
  )}`;
  await fetch("https://api.mixpanel.com/track", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
}

export async function trackMcp(ev: McpEvent): Promise<void> {
  try {
    await Promise.allSettled([kvTrack(ev), mixpanelTrack(ev)]);
  } catch {
    /* tracking must never break a tool call */
  }
}

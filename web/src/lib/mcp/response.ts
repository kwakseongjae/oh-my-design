import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { errorEnvelope } from "./contracts";

export const MAX_RESPONSE_BYTES = 256 * 1024;

/** Budget for both representations and the surrounding JSON-RPC envelope. */
export function toolResult(data: Record<string, unknown>, isError = false): CallToolResult {
  const result: CallToolResult = {
    structuredContent: data,
    content: [{ type: "text", text: JSON.stringify(data) }],
    ...(isError ? { isError: true } : {}),
  };
  if (Buffer.byteLength(JSON.stringify(result), "utf8") + 512 > MAX_RESPONSE_BYTES) {
    return toolResult(errorEnvelope("response_too_large", "The response exceeds 256 KB. Request fewer sections, groups, components or comparison aspects."), true);
  }
  return result;
}

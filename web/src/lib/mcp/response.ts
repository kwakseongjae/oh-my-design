import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { errorEnvelope } from "./contracts";

export const MAX_RESPONSE_BYTES = 256 * 1024;

function resultOf(data: Record<string, unknown>, isError: boolean): CallToolResult {
  return {
    structuredContent: data,
    content: [{ type: "text", text: JSON.stringify(data) }],
    ...(isError ? { isError: true } : {}),
  };
}
const fits = (result: CallToolResult, budget: number) => Buffer.byteLength(JSON.stringify(result), "utf8") + 512 <= budget;

/** Would this data, sent as a tool result, stay within the budget (both representations and the JSON-RPC envelope)? */
export const fitsResponseBudget = (data: object, budget = MAX_RESPONSE_BYTES) => fits(resultOf(data as Record<string, unknown>, false), budget);

/** Budget for both representations and the surrounding JSON-RPC envelope. */
export function toolResult(data: Record<string, unknown>, isError = false): CallToolResult {
  const result = resultOf(data, isError);
  if (!fits(result, MAX_RESPONSE_BYTES)) {
    return toolResult(errorEnvelope("response_too_large", "The response exceeds 256 KB. Request fewer sections, groups, components or comparison aspects."), true);
  }
  return result;
}

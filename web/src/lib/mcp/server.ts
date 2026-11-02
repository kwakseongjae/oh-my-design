import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { after } from "next/server";
import { compareReferences, getComponentStates, getDesignMd, getReference, getTokens, searchReferences } from "./catalog";
import { annotations, CatalogError, errorEnvelope, inputs, outputs, type ToolName } from "./contracts";
import { countToolCall } from "./operations";
import { toolResult } from "./response";

export function createMcpServer(): McpServer {
  const server = new McpServer({ name: "oh-my-design", version: "2.0.0" }, { capabilities: { tools: {} } });
  async function call(tool: ToolName, run: () => Record<string, unknown> | Promise<Record<string, unknown>>, ids: readonly string[] = []) {
    after(() => countToolCall(tool, ids));
    try { return toolResult(await run()); }
    catch (error) {
      return toolResult(error instanceof CatalogError
        ? errorEnvelope(error.code, error.message)
        : errorEnvelope("catalog_unavailable", "The catalog could not be read. Please try again later."), true);
    }
  }
  server.registerTool("search_references", {
    description: "Search the public catalog by id, name, Hangul display name, country, category or Overview. Mixes keyword and semantic scores when embeddings are available; otherwise uses keywords. Verified references rank first. search_mode reports keyword or hybrid.",
    inputSchema: inputs.search_references, outputSchema: outputs.search_references, annotations,
  }, (args) => call("search_references", () => searchReferences(args)));
  server.registerTool("get_reference", {
    description: "Get an exact reference's identity, verification status, v3 table of contents, token counts and evidence sources.",
    inputSchema: inputs.get_reference, outputSchema: outputs.get_reference, annotations,
  }, (args) => call("get_reference", () => getReference(args), [args.id]));
  server.registerTool("get_design_md", {
    description: "Read canonical DESIGN.md bytes or exact v3 sections, in document order. Unknown ids are errors; absent sections are reported.",
    inputSchema: inputs.get_design_md, outputSchema: outputs.get_design_md, annotations,
  }, (args) => call("get_design_md", () => getDesignMd(args), [args.id]));
  server.registerTool("get_tokens", {
    description: "Get only declared token values with claim paths and joined evidence. Missing groups are absent. Font evidence classes and measured substitutes retain their labels.",
    inputSchema: inputs.get_tokens, outputSchema: outputs.get_tokens, annotations,
  }, (args) => call("get_tokens", () => getTokens(args), [args.id]));
  server.registerTool("get_component_states", {
    description: "Read component types, resting values and evidenced hover/pressed/focus values. Unmeasured states appear only in not_measured and absent.",
    inputSchema: inputs.get_component_states, outputSchema: outputs.get_component_states, annotations,
  }, (args) => call("get_component_states", () => getComponentStates(args), [args.id]));
  server.registerTool("compare_references", {
    description: "Lay 2–4 exact references' measured values side by side by claim path. Missing cells are absent. No score, recommendation or generated values.",
    inputSchema: inputs.compare_references, outputSchema: outputs.compare_references, annotations,
  }, (args) => call("compare_references", () => compareReferences(args), args.ids));
  return server;
}

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { after } from "next/server";
import { compareReferences, getComponentStates, getDesignMd, getReference, getTokens, searchReferences } from "./catalog";
import { annotations, CatalogError, errorEnvelope, inputs, outputs, SCREEN_USE, type ToolName } from "./contracts";
import { getScreenContext, getServiceScreens, listScreenTypes, searchScreens } from "./screens";
import { countToolCall } from "./operations";
import { toolResult } from "./response";

export function createMcpServer(): McpServer {
  const server = new McpServer({ name: "oh-my-design", version: "2.1.0" }, { capabilities: { tools: {} } });
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
    description: "Search the public catalog by id, name, Hangul display name, country, category, Overview, and search terms written ahead of time for each reference in English, Korean, Japanese and Chinese (mood, product type, colour families), so vague requests like \"calm blue fintech\" work. No query leaves the server. Verified references rank first. search_mode is hybrid when the term index is present, otherwise keyword.",
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

  // Screens: real product screens, each beside its service's measured DESIGN.md. Every result names whose the screen
  // is, when and how it was shot, and how to ask for it to be taken down.
  const screens = "Screens of real products, shot signed out, each belonging to a service whose DESIGN.md is in this catalog. Each result carries the service, shot date, whether people were hidden, the rights line, the takedown route, image URLs on oh-my-design.kr and the page that opens the screen. " + SCREEN_USE + " When nothing is published the tools answer with an empty result and say so.";
  server.registerTool("list_screen_types", {
    description: `${screens} Lists the screen types (slug, English and Korean name) with how many screens and services each has per device, and the services that have screens.`,
    inputSchema: inputs.list_screen_types, outputSchema: outputs.list_screen_types, annotations,
  }, (args) => call("list_screen_types", () => listScreenTypes(args)));
  server.registerTool("search_screens", {
    description: `${screens} Finds screens by type (sign-in, search-results, detail…), service id, country, category, device and words over service names (English and Korean), screen titles and types. Each result lists tokens_seen: the service's DESIGN.md colour tokens found with exactly that value on that screen.`,
    inputSchema: inputs.search_screens, outputSchema: outputs.search_screens, annotations,
  }, (args) => call("search_screens", () => searchScreens(args), args.service ? [args.service] : []));
  server.registerTool("get_service_screens", {
    description: `${screens} One service's screens grouped by type, with devices, images, the colours seen on each screen, and the tools to call next for its tokens and component states.`,
    inputSchema: inputs.get_service_screens, outputSchema: outputs.get_service_screens, annotations,
  }, (args) => call("get_service_screens", () => getServiceScreens(args), [args.id]));
  server.registerTool("get_screen_context", {
    description: `${screens} One screen together with the measured values to build something like it: the DESIGN.md colours seen on that screen with their evidence, and, labelled as coming from the service's DESIGN.md rather than from the screen, its type scale, fonts, radii, spacing and components with measured states. not_known_for_this_screen lists what the data cannot say.`,
    inputSchema: inputs.get_screen_context, outputSchema: outputs.get_screen_context, annotations,
  }, (args) => call("get_screen_context", () => getScreenContext(args), [args.id]));
  return server;
}

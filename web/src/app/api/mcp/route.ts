/**
 * Remote MCP connector — Streamable HTTP at /api/mcp.
 *
 * Exposes the oh-my-design catalog (286 brand DESIGN.md references) as 3 read-only
 * tools so Claude users can search / browse / fetch references in-chat without
 * visiting the site. Every result carries a provenance permalink (see catalog.ts),
 * and usage is counted server-side (see track.ts) so MCP traffic shows up as our
 * traffic. Hosted on our own domain (Vercel) — the local npx package stays the
 * separate zero-telemetry distribution.
 *
 * v1 ships keyword search; semantic (embedding) search is the planned v2 upgrade.
 * Per Connectors Directory requirements, every tool is read-only and annotated.
 */
import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { after } from "next/server";
import { listReferences, searchByVibe, getDesignMd } from "@/lib/mcp/catalog";
import { trackMcp } from "@/lib/mcp/track";

// mcp-handler needs the Node runtime (fs + node-redis); not edge.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

function jsonContent(value: unknown) {
  return { content: [{ type: "text" as const, text: JSON.stringify(value, null, 2) }] };
}

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      "list_references",
      {
        title: "List brand design references",
        description:
          "List brand design systems in the oh-my-design catalog. Filter by country (KR/US/JP/TW/...), category (fintech/ecommerce/ai/developer-tools/...), or has_official_ds. Returns id + name + meta + permalink for each — use get_design_md for full content.",
        inputSchema: {
          country: z
            .string()
            .optional()
            .describe('ISO country code, e.g. "KR", "US", "JP". Case-insensitive.'),
          category: z
            .string()
            .optional()
            .describe('Category, e.g. "fintech", "ecommerce", "ai". Case-insensitive.'),
          has_official_ds: z
            .boolean()
            .optional()
            .describe("If true, only brands that publish an official design system."),
          limit: z
            .number()
            .int()
            .min(1)
            .max(286)
            .optional()
            .describe("Max results (default: all)."),
        },
        annotations: { readOnlyHint: true },
      },
      async (args) => {
        const res = listReferences(args);
        after(() => trackMcp({ tool: "list_references" }));
        return jsonContent(res);
      },
    );

    server.registerTool(
      "search_by_vibe",
      {
        title: "Find brands by vibe",
        description:
          "Find brand references matching a mood/vibe. Examples: 'calm B2B fintech', 'playful kids app', 'editorial newspaper', 'developer-first dark CLI'. Use when the user describes what they want without naming a brand. Returns top matches, each with a permalink to cite.",
        inputSchema: {
          description: z.string().min(2).describe("Mood/vibe description."),
          limit: z.number().int().min(1).max(20).optional().describe("Max matches (default 5)."),
        },
        annotations: { readOnlyHint: true },
      },
      async ({ description, limit }) => {
        const res = await searchByVibe(description, limit);
        after(() => trackMcp({ tool: "search_by_vibe", query: description }));
        return jsonContent(res);
      },
    );

    server.registerTool(
      "get_design_md",
      {
        title: "Fetch a brand DESIGN.md",
        description:
          "Fetch the full DESIGN.md for a brand (canonical multi-section spec: Visual Theme, Color, Typography, Components, Spacing, Motion, Voice, Personas). Use for 'build UI like <brand>' / 'extract <brand> tokens'. Includes a provenance block — cite provenance.url.",
        inputSchema: {
          id: z
            .string()
            .min(1)
            .describe('Reference id, e.g. "toss", "stripe", "linear". Use list_references to discover ids.'),
        },
        annotations: { readOnlyHint: true },
      },
      async ({ id }) => {
        const res = getDesignMd(id);
        if (!res.ok) {
          return { content: [{ type: "text" as const, text: res.error }], isError: true as const };
        }
        after(() => trackMcp({ tool: "get_design_md", reference: id }));
        return jsonContent(res.data);
      },
    );
  },
  {},
  { basePath: "/api", maxDuration: 60 },
);

export { handler as GET, handler as POST };

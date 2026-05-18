# MCP Registry Submission

The MCP Registry expects a `server.json` manifest in the source repo.

## Target namespace

`io.github.kwakseongjae/oh-my-design-mcp`

## `server.json` template (place at `packages/mcp/server.json`)

```json
{
  "$schema": "https://static.modelcontextprotocol.io/schemas/2025-09-29/server.schema.json",
  "name": "io.github.kwakseongjae/oh-my-design-mcp",
  "description": "107 brand design systems (Stripe, Toss, Linear, Karrot, Channel Talk, ...) as MCP context. Free, open, zero network at runtime. Give your AI agent design taste.",
  "version": "0.1.0",
  "repository": {
    "url": "https://github.com/kwakseongjae/oh-my-design",
    "source": "github"
  },
  "homepage": "https://oh-my-design.kr",
  "packages": [
    {
      "registryType": "npm",
      "identifier": "oh-my-design-mcp",
      "version": "0.1.0",
      "transport": {
        "type": "stdio"
      }
    }
  ],
  "tools": [
    {
      "name": "list_references",
      "description": "List all available brand design systems. Filter by country (KR/US/JP/...), category (ecommerce/fintech/saas/...), or DS-publication status."
    },
    {
      "name": "get_design_md",
      "description": "Fetch the full DESIGN.md spec for a specific brand (tokens, components, voice, motion, anti-patterns)."
    },
    {
      "name": "search_by_vibe",
      "description": "Find brand references matching a mood/category description. Returns top-N matches with reasoning."
    }
  ],
  "resources": {
    "uriTemplate": "design://{id}",
    "description": "Each of 107 brand DESIGN.md files exposed as a resource. Attach to your chat with `@design:toss`, `@design:stripe`, etc."
  },
  "prompts": [
    {
      "name": "design_from_ref",
      "description": "Generate UI in the style of a specific brand reference. Args: refId (string), task (string)."
    }
  ]
}
```

## Submission via MCP CLI

```bash
# Install MCP CLI
npm install -g @modelcontextprotocol/cli

# Auth via GitHub OAuth (proves ownership of io.github.kwakseongjae/* namespace)
mcp registry login

# Validate manifest
mcp registry validate packages/mcp/server.json

# Submit
mcp registry publish packages/mcp/server.json
```

## Manual submission (if CLI changes)

Fork [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry), add entry to the appropriate index file, open PR with:

**Title**: `Add oh-my-design-mcp — 107 brand design systems as context`

**Body**:
```
## Summary
oh-my-design-mcp is a stdio MCP server that exposes 107 brand design systems as MCP resources and 3 search/fetch tools. Free, open (MIT), zero network at runtime.

## What it provides
- 107 resources: `design://<id>` for each curated brand (Stripe, Toss, Linear, Karrot, Channel Talk, Apple, etc.)
- 3 tools: list_references, get_design_md, search_by_vibe
- 1 prompt: design_from_ref

## Why it belongs
Validates the MCP-for-design pattern (similar positioning to Refero MCP, but free + open). Heavy KR/JP/TW SaaS coverage where existing tools are US-centric.

## Verification
- Repo: https://github.com/kwakseongjae/oh-my-design (MIT)
- npm: https://www.npmjs.com/package/oh-my-design-mcp
- Catalog UI: https://oh-my-design.kr/design-systems
- Smoke test: `npx -y oh-my-design-mcp` starts stdio server, responds to `list_tools` with 3 tools

## Maintenance commitment
Active development since 2025-12. v0.1.0 ships 107 references. v0.2 (Q3 2026) adds live-capture tool + embedding-based search. Catalog grows by ~10 brands per quarterly batch.
```

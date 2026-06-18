# Anthropic Connectors Directory — submission packet (oh-my-design MCP)

Ready-to-paste material for the Connectors Directory form
(`claude.com/docs/connectors/building/submission`). No listing fee; manual
review queue (~1–3 weeks, no published SLA). All three tools are read-only and
unauthenticated, which is the easy approval path.

## Server

| Field | Value |
|---|---|
| Connector name | oh-my-design |
| Type | Remote MCP server (Streamable HTTP) |
| Endpoint URL | `https://oh-my-design.kr/api/mcp` |
| Auth | None (public, read-only) — no OAuth needed (accesses no user data) |
| Transport | Streamable HTTP, stateless |
| Privacy policy URL | `https://oh-my-design.kr/privacy` (KR: `/privacy/ko`) |
| Documentation URL | `https://oh-my-design.kr/docs` |
| Support | GitHub issues: `https://github.com/kwakseongjae/oh-my-design/issues` |

## One-line description

> Search and fetch real company design systems (286 brands) as `DESIGN.md`
> specs — color, typography, components, voice — to build on-brand UI in Claude.

## Tools (all `readOnlyHint: true`)

1. **`list_references`** — List brand design systems. Filter by country
   (KR/US/JP/TW/…), category (fintech/ecommerce/ai/developer-tools/…), or
   `has_official_ds`. Returns id + name + meta + permalink.
2. **`search_by_vibe`** — Find references by mood/vibe ("calm B2B fintech",
   "playful kids app", "editorial newspaper"). Returns top matches, each with a
   permalink to cite.
3. **`get_design_md`** — Fetch a brand's full `DESIGN.md` (Visual Theme, Color,
   Typography, Components, Spacing, Motion, Voice, Personas) + provenance block.

## Example prompts (≥3 required)

1. *"Find a calm, trustworthy B2B fintech design reference and show me its colors and typography."*
2. *"Get the Toss DESIGN.md so I can build a payments screen in that style."*
3. *"List Korean design systems that publish an official design system."*
4. *"I'm building a developer tool with a dark, terminal-first vibe — what brand references match?"*

## Data handling statement

Read-only access to a public catalog of design-system specifications. The
connector stores **no user data**, requires **no authentication**, and collects
**no PII**. Server-side it keeps only anonymous aggregate usage counts (which
tool was called, which reference id was fetched) for product analytics — no IP,
no user identity. The separate `oh-my-design-mcp` npm package (local/stdio) is
fully offline with zero telemetry.

## Pre-submission checklist

- [ ] Endpoint live at `https://oh-my-design.kr/api/mcp` (deploy first)
- [ ] `tools/list` returns all 3 tools with `readOnlyHint: true` ✅ (verified locally)
- [ ] Privacy policy reachable at `/privacy`
- [ ] No WAF / firewall block on `/api/mcp` (Claude's discovery must reach it)
- [ ] Tool descriptions are narrow + non-promotional ✅
- [ ] Org has Directory-management access (Team/Enterprise) **or** use the
      standalone MCP directory submission form
- [ ] (Optional) also publish `server.json` to the official MCP Registry
      (`registry.modelcontextprotocol.io`) for extra reach

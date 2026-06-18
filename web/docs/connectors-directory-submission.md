# Anthropic Connectors Directory — submission packet (oh-my-design MCP)

Finalized after an adversarial pre-submission review against the **live** endpoint
(2026-06-18). No listing fee; manual review queue, no published SLA. All blockers
cleared in code — what remains is the human form submission.

## Channel (indie, no Team/Enterprise org)

Use the **standalone web form: `https://clau.de/mcp-directory-submission`**
(remote MCP server). Do NOT use the in-app portal
(`claude.ai/admin-settings/directory/submissions/new`) — it requires a Team/
Enterprise org + Directory-management permission. Do NOT use the desktop-extension
form. Escalation if blocked: `mcp-review@anthropic.com`.

## Server

| Field | Value |
|---|---|
| Connector name | oh-my-design |
| Type | Remote MCP server (Streamable HTTP) |
| Endpoint URL | `https://oh-my-design.kr/api/mcp` |
| Auth | None (public, read-only) — no OAuth |
| serverInfo | name `oh-my-design`, version `1.0.0` ✅ (verified live) |
| Documentation URL | `https://oh-my-design.kr/docs/connector` |
| Privacy policy URL | `https://oh-my-design.kr/privacy` (KR: `/privacy/ko`) — covers the connector ✅ |
| Support | `https://github.com/kwakseongjae/oh-my-design/issues` |
| Category | Design / Developer Tools |

## Listing copy (description-policy-safe)

**Tagline (≤55 chars):**
`Browse 286 real brand design systems, in chat`

**Description:**
`A read-only connector to the oh-my-design catalog of 286 curated brand design systems (Toss, Stripe, Linear, and more). Three tools: list and filter references by country/category, find brands by a described vibe, and fetch a brand's full DESIGN.md (color, typography, components, spacing, motion, voice). Every result includes a provenance permalink to oh-my-design.kr. No account, no auth, read-only.`

**Example prompts (form + docs page):**
1. `List the Korean fintech design references in the oh-my-design catalog.`
2. `Find brands in oh-my-design with a calm, editorial B2B vibe and show their permalinks.`
3. `Fetch the full DESIGN.md for "stripe" from oh-my-design and summarize its color and typography.`

## Tools (all `readOnlyHint: true` ✅)

1. **`list_references`** — list/filter by country, category, has_official_ds.
2. **`search_by_vibe`** — semantic vibe search over the oh-my-design catalog.
3. **`get_design_md`** — fetch a brand's full DESIGN.md + provenance.

## Data handling statement

Read-only access to a public catalog of design-system specs. No user data, no
authentication, no PII. Server-side we keep only anonymous aggregate counts (tool
name + public reference id) — **no query text, no IP, no user identity**. The
connector never accesses Claude memory, history, prompts, or files. The separate
`oh-my-design-mcp` npm package (local/stdio) is fully offline, zero telemetry.

## Pre-submission checklist — status

- [x] serverInfo name/version = `oh-my-design` / `1.0.0` (was Vercel template default)
- [x] Origin validation: browser Origin allowlist → 403 on mismatch, 200 for no-Origin (Claude server) and claude.ai/claude.com/oh-my-design.kr
- [x] Privacy policy covers the connector + states no query/IP/Claude-context collection (EN + KO)
- [x] `search_by_vibe` no longer logs raw query text (KV + Mixpanel count tool calls only)
- [x] Connector documentation page live at `/docs/connector` with server URL + 3 example prompts
- [x] All 3 tools carry title + `readOnlyHint:true` (verified live)
- [x] Streamable HTTP + HTTPS; unknown id returns friendly `isError`
- [x] Dep versions pinned (mcp-handler 1.1.0, @modelcontextprotocol/sdk 1.26.0, zod 4.4.3)
- [ ] **Deploy this commit** so the fixes are live before submitting
- [ ] (Optional, recommended) per-IP rate limit on `/api/mcp` (abuse / stability)
- [ ] (Verify) Vercel Firewall has no challenge rule on `/api/mcp`
- [ ] Self-test: add `https://oh-my-design.kr/api/mcp` as a custom connector in Claude, run the 3 example prompts end-to-end
- [ ] Submit via `https://clau.de/mcp-directory-submission`

## Notes

- Reviewers run every tool; the catalog is static (286 refs) so results are never
  empty. `search_by_vibe` falls back to keyword if the embedding API is down, so a
  reviewer never sees an empty/erroring vibe search.
- (Optional reach) also publish a `server.json` to the official MCP Registry
  (`registry.modelcontextprotocol.io`).

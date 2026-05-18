# Show HN — oh-my-design MCP

**Title (max 80 chars)**:
> Show HN: oh-my-design MCP – 107 brand design systems as MCP context

**Alt titles** (test these in HN's "show alternatives" if first doesn't land):
1. Show HN: A free open-source alternative to Refero MCP
2. Show HN: Give your AI agent design taste from 107 real brand systems
3. Show HN: I made an MCP server that knows what Toss / Stripe / Linear look like

**URL**: https://github.com/kwakseongjae/oh-my-design (the mcp readme link, not website)

---

## Body (HN doesn't render markdown — plain text formatting)

Hi HN — I've been building oh-my-design for about 4 months. It started as a "DESIGN.md as ground-truth for AI agents" experiment after Google's Stitch launched. It's now an npm CLI + a Next.js catalog at oh-my-design.kr with 107 brand design systems extracted from live sites (Stripe, Toss, Linear, Vercel, Karrot, Channel Talk, etc.) — each one a full 15-section spec with tokens, components, voice, motion.

Today I'm shipping the MCP server.

  npx -y oh-my-design-mcp

Drop the JSON config below into Claude Desktop / Cursor / Cline / Continue / Codex and your agent gets 3 tools and 107 resources:

  • list_references — filter by country/category, see what's available
  • get_design_md — fetch full DESIGN.md by id
  • search_by_vibe — "calm B2B fintech" → top-5 matching brands
  • design://<id> — 107 resources, attach any with @design:toss

The differentiation vs Refero's MCP (which inspired this — they pivoted to MCP last month):
  - Free + open source (MIT) vs paid subscription
  - 107 hand-curated brand SPEC files (philosophy + tokens + voice + motion) vs 130k screen captures
  - Zero network at runtime — all DESIGN.md ship in the npm package
  - Heavy KR/JP/TW SaaS coverage (44 KR brands) where Refero is US-heavy

The actual differentiation I care about: when you say "build a transaction list in the style of Toss," the agent gets the philosophy section ("trust comes from clarity, not depth") not just the hex codes. The hex codes are everywhere; the *why* of #3182f6 isn't.

Installation: one JSON snippet, copy-pasted. Works offline. No env vars.

Repo: https://github.com/kwakseongjae/oh-my-design
Catalog: https://oh-my-design.kr/design-systems
MCP install guide: https://github.com/kwakseongjae/oh-my-design/tree/main/packages/mcp

Feedback wanted on:
1. Tool API shape — what's missing? Should search be embeddings-based in v0.2?
2. Coverage gaps — which brand systems do you want extracted next?
3. Architecture — is shipping 107 files in npm crazy? (Tarball is ~4MB)

---

## When to post

- **Day of week**: Tuesday OR Wednesday (highest density of US engineers awake during KR/EU overlap window)
- **Time**: 09:00 PT / 12:00 ET / 17:00 GMT / 02:00 KST
- **Why**: Front-page algorithm rewards comment velocity in first 90 minutes. US morning = peak HN concurrency.

## After-post moves (first 4 hours)

1. **Reply to every top-level comment within 15 minutes** — engagement signal to algorithm
2. **Don't be defensive about Refero comparison** — they're the validation, not the threat. "Yeah, theirs is paid SaaS with 130k screens — different positioning."
3. **Post a follow-up comment 30 min in**: "If you want to see what a DESIGN.md looks like for a familiar brand: [link to /design-systems/stripe]"
4. **Cross-post to r/ClaudeAI, r/cursor, r/LocalLLaMA at the 2-hour mark** — only if HN is going well (>30 points)
5. **Update post title within HN allowance** if first 30 mins are flat

## Risk responses (anticipated comments + replies)

| Likely critique | Reply |
|---|---|
| "Why MCP not just markdown files in a repo?" | The repo exists too (link). MCP adds: discoverability via tool calls, structured response shape, resources auto-attach with @, agent can search across all 107 vs you having to know the file path. |
| "Refero is better, has 130k screens" | Yes, for design research / inspiration. We're for *generation context* — the agent doesn't need 130k screens; it needs the philosophy of one. |
| "How do you handle IP?" | DESIGN.md captures public observable design patterns (colors, type scale, radius, voice register). No code, no images, no proprietary content. The repo has explicit IP guardrails. |
| "Korean brands aren't relevant to me" | 63 of the 107 are non-Korean. Stripe, Linear, Vercel, Apple, Notion, Airbnb, Figma, Framer, Resend, Cursor, Raycast, Anthropic, Mistral, ElevenLabs, etc. |
| "Will this be paid eventually?" | The MCP server, CLI, and catalog are MIT. Always free. If anything ever ships paid, it'd be team-collaboration features on top, never the core data. |


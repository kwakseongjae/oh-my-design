# PR to awesome-mcp-servers lists

## Target 1 — punkpeye/awesome-mcp-servers (87.1k ⭐)

**Fork → branch → edit README.md**

Find the appropriate section (look for "🎨 Design / Image generation" or similar — if none, add to "🛠️ Developer Tools" or create new "🎨 Design Systems"):

```markdown
- [oh-my-design-mcp](https://github.com/kwakseongjae/oh-my-design) 📇 🏠 - 107 brand design systems (Stripe, Toss, Linear, Karrot, Apple, Channel Talk, etc.) as MCP resources + 3 search/fetch tools. Free, open (MIT), zero network at runtime.
```

Icons used:
- 📇 = TypeScript implementation
- 🏠 = Self-hosted / runs locally

**PR title**: `Add oh-my-design-mcp — 107 brand design systems`

**PR body**:
```
Adds [oh-my-design-mcp](https://github.com/kwakseongjae/oh-my-design) to the catalog.

## What it does
Exposes 107 hand-curated brand design system specs (tokens, components, voice, motion) as MCP resources and 3 tools. Drop-in for Claude Desktop / Cursor / Cline / Continue / Codex via `npx -y oh-my-design-mcp`.

## Why it fits
- MIT, free, self-hosted, runs entirely locally
- Bundles all 107 DESIGN.md files in the npm package (no network calls)
- Validated by 327 vitest catalog-integrity tests
- Active development — quarterly brand batches, v0.2 planned for Q3

## Maintainer commitment
Active since 2025-12. I'll monitor issues and respond within 48 hours.

Demo: https://oh-my-design.kr/design-systems
```

---

## Target 2 — wong2/awesome-mcp-servers

Same pattern as above. Their listing is slightly different — closer to a flat catalog without emoji icons. Check their CONTRIBUTING.md before opening PR.

**Entry**:
```markdown
| oh-my-design-mcp | 107 brand design systems (Stripe / Toss / Linear / Karrot / etc.) as MCP context | TypeScript | npm |
```

---

## Target 3 — appcypher/awesome-mcp-servers

Smaller list (~6k ⭐ at audit time) but well-curated and gets aggregator traffic.

---

## Target 4 — modelcontextprotocol/servers (official, 85.8k ⭐)

This is the OFFICIAL repo. Their README explicitly redirects to the MCP Registry for third-party servers, so the registry submission (see `02-mcp-registry-submission.md`) is the right channel here, NOT a direct PR.

---

## Timing

Submit all 3 unofficial PRs **same day as Show HN** (Tuesday). Logic:
- Show HN drives discovery
- People who Google "MCP servers list" land on awesome-* repos
- If your entry is already merged by the time HN traffic peaks, you capture both wave

If you submit awesome PRs *before* Show HN, you waste the merge timing.
If you submit *after*, you miss the HN-traffic crossover.

## Post-merge follow-up

Each merged PR is worth tweet:
> "🎉 oh-my-design-mcp is now in [list] — 107 brand design systems for your AI agent. Free & open. [link]"

Drives a second discovery wave from list maintainer's followers.

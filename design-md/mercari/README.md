# Mercari Inspired Design System

[DESIGN.md](./DESIGN.md) extracted from the public [Mercari](https://jp.mercari.com) production site, which **exposes 681 semantic CSS custom properties on `:root`** (the `--alias-color-*` namespace). Tokens were extracted directly via Playwright MCP at 1440px viewport on 2026-04-17. Mercari Engineering also publishes extensive design system writeups on Medium and their tech blog. See [_research.md](./_research.md) for source detail and confidence per item.

## Files

| File | Description |
|------|-------------|
| `DESIGN.md` | Complete design system documentation (9 sections) |
| `_research.md` | Sources used, extraction methodology, and confidence per item |

Use [DESIGN.md](./DESIGN.md) as a reference for AI agents (Claude, Cursor, Stitch) to generate UI that looks like the Mercari design language — Japan's largest C2C marketplace with Mercari Red (`#ff333f`) as the `attention` semantic, comprehensive `--alias-color-*` token system, Japanese-first font stack with Hiragino "Custom" variants, sharp `4px` button radii, and explicit z-index hierarchy (1100-1600 named layers).

# LINE Inspired Design System

[DESIGN.md](./DESIGN.md) extracted from the public [LINE](https://line.me) marketing site and the meta-documentation at [designsystem.line.me](https://designsystem.line.me). LINE does not expose runtime design tokens publicly, so this reference reverse-engineers the live production CSS via Playwright MCP at 1440px viewport on 2026-04-17. See [_research.md](./_research.md) for source detail and confidence per item.

## Files

| File | Description |
|------|-------------|
| `DESIGN.md` | Complete design system documentation (9 sections) |
| `_research.md` | Sources used, extraction methodology, and confidence per item |

Use [DESIGN.md](./DESIGN.md) as a reference for AI agents (Claude, Cursor, Stitch) to generate UI that looks like the LINE design language — Japan/Taiwan/Thailand/Indonesia super-app with LINE Green (`#07b53b`) as the brand mark, fully pill-shaped buttons (`border-radius: 50px`), oversized editorial hero typography (40-70px weight 700), and a locale-aware font stack with Noto Sans JP/KR as first-class fallbacks.

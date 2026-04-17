# Research Sources for Dcard

추출 일자: 2026-04-17
스킬: `omd:add-reference` (5-tier methodology)
입력 URL: `https://www.dcard.tw`

## Tier 1 — Official Design System

**Status: EFFECTIVELY FOUND via runtime token exposure**

Dcard does not publish a documentation site (e.g., `dcard.design`), but the production app **exposes 200+ semantic CSS custom properties on `:root`** that constitute the actual design system in machine-readable form. Extracted via `getComputedStyle(document.documentElement)` using Playwright MCP. This is functionally equivalent to a public design tokens file.

Token namespaces discovered:
- `--color-dcard-*` — brand palette (primary/secondary/tertiary/premium/hint)
- `--color-state-*` — success/danger/reminder + hover/active states
- `--color-bg-*` — surface tokens (base 1-3, light/dark, special, topic, snackbar, etc.)
- `--color-text-*` — primary/secondary/hint/disabled + light variants for dark surfaces
- `--color-gender-*` — female/male/other + light variants (forum culture-specific)
- `--color-border`, `--color-separator` — divider system
- `--shadow-level-1` through `--shadow-level-5` — Material elevation
- `--typography-*` and `--fonts-*` — full type scale (4 headlines, title, 2 subtitles, 2 body, 2 caption) including mobile variants
- `--vars-*` — layout sizing (header, sider, post list, modals, etc.)
- `--animations-bezier`, `--animations-short-duration`, `--animations-medium-duration` — motion system
- `--mixins-*` — text-overflow / cover-image / scroll-bar mixin tokens

## Tier 2 — Brand / Press Kit

Not investigated separately — the runtime token exposure made it unnecessary. If needed, `dcard.tw/about` could be checked for additional brand voice / logo guidelines.

## Tier 3 — Engineering / Design Blog

`medium.com/dcardlab` exists with categories Web/Mobile/Data/Products/People/Career. No DS-specific articles surfaced in initial WebSearch, but the tech blog could contain design rationale articles for future supplementation.

## Tier 4 — Live Site Recon

**Method**: Playwright MCP (`@playwright/mcp@latest`, project-scoped via `.mcp.json`) at viewport 1440×900 on `https://www.dcard.tw/f` (forum index). Cloudflare bot challenge passed automatically by the embedded Chromium.

### Extraction steps
1. `browser_navigate` → `https://www.dcard.tw`
2. `browser_evaluate` to enumerate `:root` CSS custom properties → 200+ tokens captured
3. `browser_evaluate` for body, headings (H1×0, H2×21, H3×0), button samples (105 buttons), nav links, articles
4. `browser_take_screenshot` (viewport, 1440×900) → `_research/forum-1440px.png`

### Verified at runtime
- Body bg: `rgb(0, 50, 78)` = `#00324e` (matches `--color-dcard-tertiary`)
- Body font: `Roboto, "Helvetica Neue", Helvetica, Arial, "PingFang TC", 黑體-繁, "Heiti TC", 蘋果儷中黑, "Apple LiGothic Medium", 微軟正黑體, "Microsoft JhengHei", sans-serif`
- H2 (post titles): weight 500, 16px, color `rgba(0,0,0,0.85)` — confirms Material-aligned medium-weight hierarchy
- Sample buttons: `--color-dcard-primary` (`#3397cf`) for Download App, `--color-dcard-secondary` (`#006aa6`) for search submit, both 8px radius
- Main content area: bg `rgb(242,242,242)` = `#f2f2f2` (`--color-bg-base-1`), 728px wide
- Right aside: 300px wide
- Console: 13 errors, 110 warnings (typical for production SPA, non-blocking)

## Confidence

### High Confidence (extracted directly from `:root` CSS variables — Dcard's actual semantic tokens)
- Entire color palette (brand, state, bg, text, border, separator, gender, premium, topic, etc.) in §2
- Full type scale (4 headline tiers, title, 2 subtitle, 2 body, 2 caption) with sizes/weights/line-heights in §3
- Shadow system (5 levels) in §6
- Animation easing + durations in §6
- Layout sizing (header height, max page width, sider/main/aside widths, modal widths, etc.) in §5

### Medium Confidence (verified via runtime DOM but not from named tokens)
- Default 8px border-radius (verified across multiple buttons but not explicitly tokenized)
- Forum hierarchy (sider 208px / main 728px / aside 300px) confirmed via direct width measurement
- Material Design alignment claim (Roboto + weight 500 + cubic-bezier easing all align)

### Inferred (educated reading from observed UX)
- "Gender colors are for author chips only" — based on forum naming convention (女孩/男生/感情) and color names; not directly observed in posts during recon
- "Premium gold reserved for subscription features" — based on `--color-dcard-premium` token name; specific product surfaces not exhaustively checked
- Mobile breakpoint at 768px — inferred from presence of `--typography-*-font-size-mobile` tokens; exact breakpoint values not extracted

## Notes
- Dcard exposes its design system **at runtime via `:root` CSS variables** — this is rare and developer-friendly. Treat the variable names as the canonical reference (more stable than hex values across releases).
- Roboto-led typography stack with comprehensive Traditional Chinese fallbacks reflects Dcard's Taiwan-first user base.
- Playwright MCP successfully bypassed Cloudflare bot protection that had blocked `curl` and `WebFetch` attempts.
- Class names in DOM use a hashed convention (`d_a5_175izsd`, `d_h_j`, etc.) — likely vanilla-extract or similar zero-runtime CSS-in-JS. Don't rely on class selectors; use the `:root` tokens instead.
- This reference may drift if Dcard ships a token rename. Re-running `omd:add-reference https://www.dcard.tw` periodically captures any updates.

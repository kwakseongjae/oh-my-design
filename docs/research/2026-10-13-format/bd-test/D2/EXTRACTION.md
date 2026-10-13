# Extraction working table (DESIGN.md: Toss — TDS Mobile + toss.im marketing)

Read in full: frontmatter (colors, rounded, typography, components), Components, Do's and Don'ts, Agent Prompt Guide, Known Gaps.

| Extract | Value from DESIGN.md |
| --- | --- |
| Canvas and ink | canvas `#ffffff`; foreground `#191f28` (strongest text); body `#4e5968` (emphasized body); muted `#8b95a1` (secondary text) |
| Action color + states | primary `#3182f6`; primary-hover `#2272eb` ("strong blue"); on-primary `#ffffff`. States documented for buttons: loading, disabled, pressed, keyboard focus (no values). No `-active`/`-disabled` colors. |
| Secondary actions | "weak" fill: `#e8f3ff` bg / `#1b64da` text (toss.im marketing primary; TDS "fill or weak"). No border-style secondary. |
| Surfaces | surface `#f2f4f6` (quiet neutral layer). No card fill, no dark product surface. Marketing dark CTA `rgba(0,12,30,0.8)` / `#fff`. |
| Lines | border `#e5e8eb` (light divider/outline). No stated width. |
| Focus | Not specified as a value. "keyboard focus" is a required state only. |
| Type families | Brand: Toss Product Sans (not installable, no licence). Substitute: none chosen. Safe default (fallback, label as such): Noto Sans KR (Hangul), Noto Sans (Latin). Tossface declared-only, not UI. No mono claimed. |
| Type scale | h1 36/700/54px; h2 30/600/45px; h3 24/600/36px; h4 22/600/33px; body 16/400/24px; body-small 14/400/21px; xlarge button label 17/600; marketing CTA 15/600 (40px) and 17/600 (46px). Tracking: none stated. |
| Radius scale | sm 4px, md/default 6px (small surfaces/doc chrome); button-small 8px, medium 10px, large 14px, xlarge 16px; toss.im marketing 7px. |
| Elevation | None promoted. "Use flat color layering." |
| Control heights | TDS button: small 32 / medium 38 / large 48 / xlarge 56 (padding `0 20px` at xlarge). Marketing: 40px (pad 11px 16px) and 46px. Input/icon-button heights: not specified. |
| Hard rules | Keep TDS Mobile and toss.im variants separate and named by surface. Use Toss Product Sans where available, with fallback. Preserve loading/disabled/pressed/focus on buttons. Badge = status metadata, not action. Don't swap logo blue for `#3182f6`. Don't present Tossface as UI font. Don't copy doc-site colors into product tokens. Don't merge 16px TDS radius with 7px marketing radius into an average. Don't invent cards, shadows, tabs, toasts or dialogs from generic fintech conventions. Don't present a fallback as Toss Product Sans. Mark unlisted components as extensions. |
| Known gaps | White on `#3182f6` = 3.71:1 (recorded as measured, not adjusted). No spacing scale, elevation, motion; font licence unresolved; 4 of 43 components measured; marketing hover not captured. |
| Dark mode | Not defined (light only) → derive and disclose. |
| Spacing | Clusters 4, 6, 8, 16, 24, 32px (working scale, no tokens). |

## Mapping plan

- Theme (`app/globals.css`): hex kept verbatim. `--primary-hover` and `--body` added as new tokens. `--secondary` = weak pair. `--muted`/`--accent` = surface. `--border`/`--input` = border. `--ring` = primary. `--destructive` = danger.
- Radius: pinned in `@theme inline`: sm 4, md 6, lg 8, xl 14, 2xl 16, 3xl 16, 4xl 10 (controls); new `--radius-button-{sm,md,lg,xl}` = 8/10/14/16.
- Shadows: all tiers `0 0 #0000` (flat).
- Fonts: Fontsource Noto Sans + Noto Sans KR as fallbacks behind "Toss Product Sans"; Figtree removed from layout.
- Type: `type-h1..h4`, `type-body`, `type-body-small`, `type-button-xl` utilities.
- Components: Button sizes sm 32/8, default 38/10, lg 48/14, new xl 56/16 (17px/600); field controls moved from 36px to 38px to match default button; fields use radius 10.

# Research Sources for Mercari

추출 일자: 2026-04-17
스킬: `omd:add-reference` (5-tier methodology)
입력 URL: `https://jp.mercari.com`

## Tier 1 — Official Design System

**Status: EFFECTIVELY FOUND via runtime token exposure (681 CSS variables on `:root`)**

Mercari does not host a public documentation site comparable to Material Design, but the production app **exposes 681 semantic CSS custom properties on `:root`**, organized into a consistent `--alias-color-{property}-{role}-{state}` namespace. Extracted via `getComputedStyle(document.documentElement)` using Playwright MCP. This is functionally equivalent to a published design tokens file.

Token namespaces discovered:
- `--alias-color-background-{role}-{state}` — surface tokens (primary, secondary, tertiary, attention, attentionThin, accent, accentThin, success, disabled)
- `--alias-color-text-{role}-{state}` — foreground tokens (primary, secondary, accent, attention, success, disabled, placeholder, link, inverse, hint)
- `--alias-color-border-{role}-{state}` — divider system
- `--alias-color-icon-{role}-{state}` — icon foreground
- `--alias-color-overlay-{strength}` — modal backdrops (weak/middle/midStrong/strong + inverse variants)
- `--alias-color-system-static{Tone}-default` — fixed white/black/clear (theme-independent)
- `--mer-z-index-{layer}` — explicit z-index hierarchy (1100-1600)
- `--grid-layout-*` — page padding, gutter, inset
- `--component-*` — per-component overrides (button, radio, avatar, skeleton, etc.)
- `--typography-{role}-{property}` and `--fonts-{role}-{property}` — type scale (mostly hashed token names from Panda CSS, but semantic aliases also present)

Additional public sources:
- [Mercari Engineering blog — design system tag](https://engineering.mercari.com/en/blog/tag/design-system/) — multiple posts on DS architecture
- [GitHub: mercari/fractal](https://github.com/mercari/fractal) — open-source UI patterns library
- [Building Mercari's Design System (Medium)](https://medium.com/mercari-engineering/building-mercaris-design-system-b6789043053d)
- [The Story Behind Mercari Design System Rebuild (2025)](https://engineering.mercari.com/en/blog/entry/20250624-the-story-behind-mercari-design-system-rebuild/)

## Tier 2 — Brand / Press Kit

Not investigated separately; runtime tokens were sufficient.

## Tier 3 — Engineering / Design Blog

[engineering.mercari.com/en/blog/tag/design-system](https://engineering.mercari.com/en/blog/tag/design-system/) — extensive English-language coverage of Mercari Design System architecture and rebuild rationale. Pulled context but not specific token values.

## Tier 4 — Live Site Recon

**Method**: Playwright MCP at viewport 1440×900 on `https://jp.mercari.com/`.

### Verified at runtime
- Body bg: `rgb(255, 255, 255)` = `#ffffff` (matches `--alias-color-background-primary-default`)
- Body text: `rgb(51, 51, 51)` = `#333333` (matches `--alias-color-text-primary-default`)
- Body font: `Helvetica Neue, Arial, "Hiragino Kaku Gothic ProN Custom", "Hiragino Sans Custom", "Meiryo Custom", sans-serif`
- Body size: `15px`
- 681 `:root` CSS custom properties enumerated
- Sample buttons confirm:
  - Attention CTA: bg `#ff333f`, white text, `4px` radius, padding `11px 15px`, weight 700
  - Accent CTA (Shop Now): bg `#ffffff`, text `#0095ee`, `4px` radius, weight 700
  - Login/Signup: bg `#ffffff`, text `#333333`, `4px` radius, weight 400

Screenshot saved: `_research/home-1440px.png`

## Confidence

### High Confidence (extracted directly from `:root` CSS variables)
- All `--alias-color-*` values in §2
- Z-index hierarchy (`--mer-z-index-*`) in §6
- Grid layout values (`--grid-layout-*`) in §5
- Verified live: body bg/text/font, button variants

### Medium Confidence
- Hue family interpretations (e.g., "yellow is for ratings/reviews") — inferred from token names, not verified per-component
- Animation easing curves — extracted from CSS but specific component bindings not enumerated
- Spacing scale tokens — extracted as values but specific semantic uses inferred

### Inferred (verify before relying on)
- "Mercari Red is exclusively for attention/danger" — token naming supports this; product-level usage not exhaustively verified
- Mobile breakpoints — inferred from presence of `--typography-*-font-size-mobile` tokens; exact px values not extracted

## Notes
- Mercari's design system uses **Panda CSS** (the `--made-with-panda: "🐼"` token confirms it). Token names are hashed in production but semantic aliases (`--alias-color-*`) provide a stable layer.
- The "Custom" suffix on Hiragino/Meiryo fonts indicates Mercari deploys optically-tuned variants — same families, adjusted spacing.
- Mercari is a textbook example of mature semantic token architecture for a Japanese-market commerce platform; the system is internal but exposed on `:root` for direct consumption.
- This reference may drift if Mercari ships a token rename. Re-running `omd:add-reference https://jp.mercari.com` periodically captures updates.

# Design System Inspiration of Mercari

## 1. Visual Theme & Atmosphere

Mercari is Japan's largest C2C marketplace (50M+ downloads, 350K daily listings) and its design system is a textbook example of **mature semantic token architecture**. The production site at `jp.mercari.com` exposes **681 CSS custom properties on `:root`**, organized into the well-named `--alias-color-*` namespace: `--alias-color-background-{role}-{state}`, `--alias-color-text-{role}-{state}`, `--alias-color-border-{role}-{state}`, `--alias-color-icon-{role}-{state}`, `--alias-color-overlay-*`. This isn't internal documentation — it's the actual design system surfaced at runtime, ready to read directly from any production page.

The brand color is the famous **Mercari Red** (`#ff333f`) — vivid, attention-grabbing, used as the `attention` semantic role for badges, error states, danger actions, and the iconic price-tag aesthetic. Around it sits a balanced palette: accent blue (`#0095ee`), success green (`#0aa466`), decorative yellow (`#ffb818`). Text hierarchy uses dark gray (`#333333` primary, `#666666` secondary) on a pure white surface (`#ffffff`), with a soft secondary background (`#f5f5f5`) for grouped sections.

Typography is **system-stack with Japanese-first fallbacks**: `Helvetica Neue, Arial, Hiragino Kaku Gothic ProN Custom, Hiragino Sans Custom, Meiryo Custom, sans-serif`. The "Custom" suffix on the Hiragino/Meiryo fonts indicates Mercari's deployment of optically-tuned variants for their production app — same font families, but adjusted spacing/hinting for marketplace UI. Buttons use **weight 700** for primary CTAs at a tight `4px` radius, while body text holds at weight 400.

**Key Characteristics:**
- **681 semantic CSS custom properties** exposed on `:root` — the public design system surface
- **Mercari Red** (`#ff333f`) as the `attention` semantic — used for badges, error/danger states, sale prices, the brand mark
- Japanese-first font stack: `Helvetica Neue → Arial → Hiragino Kaku Gothic ProN Custom → Hiragino Sans Custom → Meiryo Custom`
- Fixed `4px border-radius` on buttons and cards — sharp, commerce-functional
- Weight 700 for primary CTAs; weight 400 for body and secondary controls
- Three-tier color naming: `alias-color-{property}-{role}-{state}` (e.g., `--alias-color-background-attention-default`)
- 1440px max page width with `--grid-layout-gutter: 24px` and `--grid-layout-page-padding-horizontal: 36px`
- 4dp spacing micro-scale (`--bnfXaU: 6px`, `--exLgvR: 8px`, `--fwPfWM: 8px`, etc.) with named alias tokens
- High-density product grid with circular brand thumbnails (`border-radius: 50%`) for category navigation
- Multi-tier z-index system: dialog 1400, modal 1400, snackbar 1500, tooltip 1600

## 2. Color Palette & Roles

All values verified live from `:root` CSS custom properties on `jp.mercari.com`.

### Brand / Attention (the Mercari Red family)
- **Mercari Red** (`#ff333f`): `--alias-color-background-attention-default`, `--alias-color-text-attention-default`. The signature brand red. Used for danger actions, sale price emphasis, the brand mark.
- **Red Highlight** (`#ff6574`): `--alias-color-background-attention-highlight`, `--alias-color-border-attention-highlight`. Lighter variant for hover states.
- **Red Active** (`#e32b36`): `--alias-color-background-attention-active`, `--alias-color-border-attention-active`. Pressed state.
- **Red Thin** (`#fdf1f3`): `--alias-color-background-attentionThin-default`. Very light pink for subtle background emphasis (e.g., error message bg).
- **Red Thin Highlight** (`#ffdcdf`): `--alias-color-background-attentionThin-highlight`.

### Accent (Mercari Blue)
- **Accent Blue** (`#0095ee`): `--alias-color-background-accent-default`, `--alias-color-text-accent-default`, `--alias-color-icon-accent-default`. Links, info badges, accent CTAs.
- **Accent Blue Highlight** (`#63c5ff`): `--alias-color-background-accent-highlight`.
- **Accent Blue Active** (`#0073cc`): `--alias-color-background-accent-active`, `--alias-color-text-accent-active`.
- **Link Default** (`#0073cc`): `--alias-color-text-link-default`, `--alias-color-icon-link-default`.
- **Link Highlight** (`#30b2ff`): `--alias-color-text-link-highlight`.
- **Link Active** (`#0056ab`): `--alias-color-text-link-active`.
- **Accent Thin** (`#e8f8ff`): `--alias-color-background-accentThin-default`. Light blue notification bg.

### Success
- **Success Green** (`#0aa466`): `--alias-color-text-success-default`, `--alias-color-icon-success-default`, `--alias-color-border-success-default`.
- **Success Highlight** (`#0fbf67`): `--alias-color-text-success-highlight`, `--alias-color-icon-success-highlight`.
- **Success Active** (`#078962`): `--alias-color-text-success-active`, `--alias-color-icon-success-active`.
- **Success Thin** (`#e4ffec`): `--alias-color-background-success-default`.
- **Success Thin Highlight** (`#cdfbd2`): `--alias-color-background-success-highlight`.

### Decorative (Yellow)
- **Decorative Yellow** (`#ffb818`): `--alias-color-icon-decorativeYellow-default`. Reviews, ratings, premium markers.
- **Decorative Yellow Highlight** (`#ffdc74`): Lighter yellow for hover.
- **Decorative Yellow Active** (`#db9611`): Darker amber for pressed.

### Text (5-tier scale)
- **Primary** (`#333333`): `--alias-color-text-primary-default`. Default body text and headlines.
- **Primary Highlight** (`#999999`): `--alias-color-text-primary-highlight`.
- **Primary Active** (`#222222`): `--alias-color-text-primary-active`.
- **Secondary** (`#666666`): `--alias-color-text-secondary-default`. Captions, metadata.
- **Secondary Highlight** (`#999999`): `--alias-color-text-secondary-highlight`.
- **Secondary Active** (`#4c4c4c`): `--alias-color-text-secondary-active`.
- **Disabled** (`#cccccc`): `--alias-color-text-disabled-default`.
- **Placeholder** (`#999999`): `--alias-color-text-placeholder-default`.
- **Inverse** (`#ffffff`): `--alias-color-text-inverse-default`. White text on dark surfaces.

### Background / Surface (5-tier scale)
- **Primary** (`#ffffff`): `--alias-color-background-primary-default`. Default page bg.
- **Primary Active** (`#f5f5f5`): `--alias-color-background-primary-active`. Pressed/hover state for white-bg controls.
- **Primary Highlight** (`#f5f5f5`): `--alias-color-background-primary-highlight`.
- **Secondary** (`#f5f5f5`): `--alias-color-background-secondary-default`. Grouped section bg.
- **Secondary Highlight** (`#e5e5e5`): `--alias-color-background-secondary-highlight`.
- **Tertiary** (`#333333`): `--alias-color-background-tertiary-default`. Dark surfaces (e.g., snackbar contrast).
- **Disabled** (`#cccccc`): `--alias-color-background-disabled-default`.

### Border / Separator
- **Primary** (`#cccccc`): `--alias-color-border-primary-default`. Standard component border.
- **Primary Highlight** (`#e5e5e5`): `--alias-color-border-primary-highlight`.
- **Primary Active** (`#999999`): `--alias-color-border-primary-active`.
- **Secondary** (`#333333`): `--alias-color-border-secondary-default`. Strong dividers.
- **Disabled** (`#cccccc`): `--alias-color-border-disabled-default`.

### Overlay (modal backdrops)
- **Weak** (`rgba(34,34,34,0.2)`): `--alias-color-overlay-weak`.
- **Middle** (`rgba(34,34,34,0.4)`): `--alias-color-overlay-middle`.
- **Mid Strong** (`rgba(34,34,34,0.6)`): `--alias-color-overlay-midStrong`.
- **Strong** (`rgba(34,34,34,0.8)`): `--alias-color-overlay-strong`.
- **Inverse Weak** (`rgba(255,255,255,0.2)`): `--alias-color-overlay-inverseWeak`. White overlay on dark surface.

### Icon (separate role from text — important for accessibility)
- **Primary** (`#333333`): `--alias-color-icon-primary-default`.
- **Secondary** (`#cccccc`): `--alias-color-icon-secondary-default`.
- **Tertiary** (`#666666`): `--alias-color-icon-tertiary-default`.
- **Inverse** (`#ffffff`): `--alias-color-icon-inverse-default`.

### System (static)
- **Static White** (`#ffffff`): `--alias-color-system-staticWhite-default`.
- **Static Black** (`#000000`): `--alias-color-system-staticBlack-default`.
- **Static Clear** (`rgba(255,255,255,0)`): `--alias-color-system-staticClear-default`.

## 3. Typography Rules

### Font Stack (verified live)
```
"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN Custom", "Hiragino Sans Custom", "Meiryo Custom", sans-serif
```

For non-Japanese locales the secondary stack adds Traditional Chinese support:
```
Helvetica Neue, Arial, "PingFang TC Custom", "Noto Sans TC Custom", "Microsoft JhengHei", "Hiragino Kaku Gothic ProN Custom", "Hiragino Sans Custom", "Meiryo Custom", sans-serif
```

The "Custom" suffix indicates Mercari runs optically-tuned variants of these system fonts in production — same families, adjusted spacing for marketplace UI density.

### Weights
- **700**: Primary CTAs, prices, badges, "Shop Now" hero CTAs, language toggles.
- **400**: Default body, login/signup buttons, navigation links, secondary CTAs.

Verified: primary attention CTAs (e.g., "コンテンツにスキップ" skip link) use weight 700 with bg `#ff333f` and `4px` radius. Secondary actions (login, signup, language) use weight 400.

### Size Scale
- **Base body**: `15px` (verified `bodySize`)
- **Heading scale** is application-defined (homepage uses `15-20px` for H1/H2 with weight 700)
- Mobile sizes step down via `--typography-*-font-size-mobile` tokens

### Conventions
- **No letter-spacing tweaks** — system defaults trusted.
- **Default line-height ~1.4** (estimated from rendered metrics).
- **Uppercase reserved for the "MERCARI" wordmark only.**

## 4. Component Stylings

### Buttons (verified across variants)
**Primary attention CTA (red)**:
- bg `#ff333f`, text `#ffffff`, `border-radius: 4px`, `padding: 11px 15px`, `font-weight: 700`

**Accent CTA (blue, e.g., "Shop Now")**:
- bg `#ffffff`, text `#0095ee`, `border-radius: 4px`, `padding: 8px 12px`, `font-weight: 700`

**Login / Signup (secondary, neutral)**:
- bg `#ffffff`, text `#333333`, `border-radius: 4px`, `padding: 8px`, `font-weight: 400`

**Icon button**:
- bg `transparent`, color `#000000` or `#333333`, `border-radius: 4px`, `padding: 4px`, `font-weight: 400`

**Language toggle**:
- bg `transparent`, text `#333333`, `border-radius: 4px`, `padding: 8px 16px`, `font-weight: 700`

### Cards (Product Card, Brand Card)
- White bg (`--alias-color-background-primary-default`)
- Subtle `1px solid #e0e0e0` border or no border (image-led cards)
- Brand thumbnails: `border-radius: 50%` (circular) — distinctive Mercari pattern for category navigation
- Image fills top, title + price below
- Price emphasis: weight 700, often in `#ff333f` (Mercari Red) for sale prices

### Search Input
- Full-width bar at top of page, `bg: #f5f5f5` (secondary surface), `border-radius: 4px`, dark gray placeholder `#999999`
- Camera search icon + magnifier icon inside the input on right

### Navigation (top header)
- White sticky bg, height ~50-64px
- Mercari wordmark + heart logo on left
- Search bar centered
- ログイン (Login), 会員登録 (Signup), notification bell, language toggle (日本語) on right
- Tabs row below: おすすめ, マイリスト, ゲーム, etc. — horizontal scroll on mobile

### Chips / Tabs
- Underline-driven active indicator (red underline `#ff333f` for active tab)
- Inactive tabs: text `#333333` weight 400
- Active tab: text `#ff333f` (or `#222222`) weight 700 with `2px` red underline

### Snackbar / Toast
- Dark bg (`--alias-color-background-tertiary-default: #333333`)
- White text (`--alias-color-text-inverse-default: #ffffff`)
- Z-index `--mer-z-index-snackbar: 1500`

### Modal / Dialog
- White surface, `border-radius: 8px`
- Backdrop: `--alias-color-overlay-strong: rgba(34,34,34,0.8)`
- Z-index `--mer-z-index-modal: 1400`

## 5. Layout Principles

### Page Structure
- Max width: `1440px` (`--bqHLTv`, `--gIsGsE`)
- Grid layout page padding: top `40px` (`--grid-layout-page-padding-top`), bottom `64px` (`--grid-layout-page-padding-bottom`), horizontal `36px` (`--grid-layout-page-padding-horizontal`)
- Grid gutter: `24px` (`--grid-layout-gutter`)
- Inner inset: `16px` (`--grid-layout-inset`)

### Spacing Tokens (semantic aliases)
Mercari uses Panda CSS-generated hashed token names alongside semantic aliases. Common values from CSS:
- `4px`, `6px`, `8px`, `12px`, `16px`, `20px`, `24px`, `28px`, `32px`, `36px`, `40px`, `44px`, `48px`, `56px`, `64px`, `80px`, `96px`, `128px`, `164px`

This is a 4dp baseline scale extended with named tokens.

### Density
Mercari is **commerce-density** — tight product grids with minimal card chrome, image-led visual hierarchy. The 6-column product grid on homepage uses `~190-240px` card widths with `12-16px` gutters.

## 6. Depth & Elevation

Mercari has explicit shadow tokens for floating UI:

- **Card lift** (subtle): `0px 2px 4px 0px rgba(0,0,0,.2)` (`--ljPKsT`)
- **Tooltip / popover**: `0px 4px 8px 0px rgba(0,0,0,.2)` (`--coocrY`)
- **Modal / dropdown**: `0px 8px 10px 0px rgba(0,0,0,.2)` (`--jcKRRc`)
- **Strong overlay**: `0px 0px 16px 0px rgba(0,0,0,.2)` (`--gQVqIQ`)

### Z-Index Hierarchy (explicit named tokens)
- Menu: `1100` (`--mer-z-index-menu`)
- Navigation top: `1200` (`--mer-z-index-navigation-top`)
- Navigation bottom: `1200` (`--mer-z-index-navigation-bottom`)
- Autocomplete: `1300` (`--mer-z-index-autocomplete`)
- Dialog: `1400` (`--mer-z-index-dialog`)
- Modal: `1400` (`--mer-z-index-modal`)
- Side sheet: `1400` (`--mer-z-index-side-sheet`)
- Information popup: `1400` (`--mer-z-index-information-popup`)
- Action sheet: `1400` (`--mer-z-index-action-sheet`)
- Snackbar: `1500` (`--mer-z-index-snackbar`)
- Tooltip: `1600` (`--mer-z-index-tooltip`)

### Animation
- Easing curves: `cubic-bezier(0.65, 0, 0.35, 1)` (sheets), `cubic-bezier(0.33, 1, 0.68, 1)` (snackbars/dialogs)
- Standard duration: `0.25s`
- Loading spinner: `1.25s` 8-step rotation

## 7. Do's and Don'ts

- **DO** use the `--alias-color-*` semantic tokens. The 681 variables cover virtually every UI surface — never hardcode hex values when an alias exists.
- **DON'T** invent new color values. Mercari's palette is exhaustive; if you can't find an alias, use the closest one.
- **DO** reserve **Mercari Red** (`#ff333f`) for the `attention` semantic — sale prices, danger actions, the brand mark, error states.
- **DON'T** use red for general "primary" CTAs that aren't attention-grabbing. Mercari's primary actions are often blue-accent (`#0095ee`) or neutral, not red.
- **DO** use weight 700 for primary CTAs and prices. Weight 400 for navigation, secondary actions, body.
- **DON'T** use weight 500 or 600 — they're not part of Mercari's typography rhythm.
- **DO** keep `border-radius: 4px` on buttons and cards. Mercari's commerce voice is sharp and functional.
- **DON'T** use pill-shaped or large-radius buttons — that breaks the marketplace density aesthetic.
- **DO** apply circular thumbnails (`border-radius: 50%`) to brand/category icons in navigation. It's a distinctive Mercari pattern.
- **DON'T** use shadows on flat product cards — let the white card on `#f5f5f5` secondary bg provide separation.
- **DO** use the locale-aware font stack with Hiragino/Meiryo "Custom" variants. The optical tuning matters for Japanese readability.
- **DON'T** load custom web fonts. Mercari's audience is mobile-first across slow connections; system fonts respect that.
- **DO** use the explicit named z-index tokens (`--mer-z-index-*`) — Mercari's stacking order is deliberate.
- **DON'T** use arbitrary z-index values like `9999` — that breaks the layered system.

## 8. Responsive Behavior

### Breakpoints (inferred from `--typography-*-font-size-mobile` tokens and `--vbMobileBoundaryWidth`-style patterns)
| Width | Behavior |
|---|---|
| Desktop `>1440px` | Centered max-width container, full grid |
| Desktop `1024–1440px` | 6-column product grid, full nav |
| Tablet `768–1024px` | 4-column product grid, condensed nav |
| Mobile `<768px` | 2-column grid, hamburger nav, sticky bottom navigation |

### Touch & Mobile
- Mobile bottom navigation: tab bar with icon + label
- Form heights: small `36px`, medium ~`48px`, large ~`56px` (estimated from spacing tokens)
- Touch targets: minimum `44px` per Apple HIG conventions

### Image Behavior
- Product images: square aspect ratio, `4px` corner radius (matches button/card scheme)
- Brand thumbnails: circular (`50%` radius)
- Lazy-load via Next.js Image equivalent
- Placeholder skeleton uses `--color-shimmer-bg` / `--color-shimmer-fg` pattern

## 9. Agent Prompt Guide

### Quick Color Reference
- **Mercari Red** (attention, sale, brand): `#ff333f` (`--alias-color-background-attention-default`)
- Accent Blue (links, info): `#0095ee`
- Success Green: `#0aa466`
- Decorative Yellow (ratings): `#ffb818`
- Primary text: `#333333`
- Secondary text: `#666666`
- Page bg: `#ffffff`
- Secondary bg: `#f5f5f5`
- Border default: `#cccccc`
- Inverse text: `#ffffff` (on dark surfaces)

### Example Component Prompts
- "Create a Mercari-style attention CTA: bg `#ff333f`, white text, `border-radius: 4px`, `padding: 11px 15px`, `font-weight: 700`. Hover: bg darkens to `#ff6574`. Active: `#e32b36`. Use this for danger actions, sale CTAs, the brand-mark button — never for generic 'primary' actions (those use accent blue)."
- "Build a Mercari product card: white bg, no border or `1px solid #e0e0e0`, `4px` radius. Image fills top 70% in `4px` rounded square. Title in 14px weight 400 `#333333` (2-line clamp), price below in 16px weight 700 `#333333` for normal price OR `#ff333f` for sale price. Optional sale badge in top-left corner using `#ff333f` bg + white text + 2px radius."
- "Design a Mercari brand thumbnail (category icon): circular `border-radius: 50%`, ~64-80px diameter, white bg with `1px solid #f5f5f5` border, brand image centered. Below: brand name in 12px weight 400 `#333333`, max 1 line ellipsis."
- "Create a Mercari search bar: full-width, bg `#f5f5f5` (secondary surface), `border-radius: 4px`, padding 12-16px, placeholder `#999999`. Right side: camera icon + magnifier icon, both `#666666`. On focus: bg shifts to white, border becomes `1px solid #cccccc`."
- "Build a Mercari snackbar: bg `#333333` (`--alias-color-background-tertiary-default`), white text, `border-radius: 4px`, `padding: 12px 16px`, fixed at bottom with z-index 1500. Slides in via `cubic-bezier(0.33, 1, 0.68, 1)` over `0.25s`. Auto-dismiss after 3-4s."

### Iteration Guide
1. **Always reference `--alias-color-*` tokens, not raw hex**. Mercari's 681 vars are the canonical source.
2. **Mercari Red (`#ff333f`) is the `attention` role** — destructive, sale-emphasis, brand mark. Not a default primary.
3. **`border-radius: 4px`** is the workhorse. Cards, buttons, badges. Brand thumbnails get `50%` (circular).
4. **Weight 700 for prices and primary CTAs**, weight 400 for everything else. No middle weights.
5. **Use the locale-aware font stack with Hiragino/Meiryo "Custom" variants**. Optical tuning matters.
6. **Z-index uses named tokens** (`--mer-z-index-*`) — never arbitrary numbers.
7. **Animation easing `cubic-bezier(0.65, 0, 0.35, 1)` for sheets**, `cubic-bezier(0.33, 1, 0.68, 1)` for snackbars/dialogs. Duration `0.25s`.
8. **Surface contrast** (`#ffffff` cards on `#f5f5f5` page bg) handles separation — minimal shadow needed on flat layouts.
9. **Body text `#333333`, secondary `#666666`, tertiary `#999999`** — three-tier text hierarchy across the entire system.
10. **Page padding 36px horizontal, 40px top, 64px bottom**, with `24px` gutter — the layout grid is explicit.

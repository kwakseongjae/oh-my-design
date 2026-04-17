# Design System Inspiration of Pinkoi

## 1. Visual Theme & Atmosphere

Pinkoi is Asia's cross-border design marketplace, and its system reflects exactly that — a busy, multi-cultural commerce surface that prioritizes density, legibility, and conversion over minimalist whitespace. The page opens on a near-white canvas (`#f7f7f8` for grouped sections, `#ffffff` for primary surfaces) with dark slate text (`#39393e`) and a confident **teal-navy primary** (`#10567b`) that anchors actions like Login and primary CTAs. This isn't a "designer-chic" pastel palette as the brand name might suggest — the actual product surface is engineered for high-density browsing across Taiwan, Japan, Hong Kong, mainland China, and Thailand.

Typography is **bold-heavy**, with weight 700 dominating across headlines, badges, and key CTAs (37 occurrences in core CSS vs. 16 of weight 400). There is no custom brand typeface; instead, Pinkoi runs a sophisticated locale-aware system stack — `Helvetica Neue, Helvetica, Arial` followed by `PingFang TC, Heiti TC, Microsoft JhengHei` for Traditional Chinese, `PingFang SC, Heiti SC, Microsoft YaHei` for Simplified, `ヒラギノ角ゴ Pro W3, Meiryo` for Japanese, and `Thonburi, Noto Sans Thai` for Thai. Every character renders in the user's native font infrastructure. This is design-as-localization, not design-as-decoration.

What gives Pinkoi its quietly distinctive feel is its **flat semantic button system** with seven named variants. Every button — `--primary`, `--secondary`, `--purchase`, `--danger`, `--green`, `--login`, plus `*-plain` ghost variants — uses the same recipe: `background: <color>; border: 1px solid <same-color>; color: #fff;`. The matched border-and-background gives buttons a crisp "solid block" appearance without any shadow, while the explicit `1px` border ensures visual integrity even on high-DPI displays where pure-fill buttons can look fuzzy. Coral (`#f16c5d`) is reserved for the `--purchase` variant alone — the highest-conversion moment on every product page.

**Key Characteristics:**
- Locale-aware system font stacks — no custom typeface, but explicit per-language fallbacks (TC/SC/JP/TH)
- Weight 700 dominant for headlines, CTAs, and emphasis (verified in CSS: 37x vs. 16x weight 400)
- Conservative `border-radius` — `4px` is the workhorse on buttons and cards, `2px` on badges, `50%` on avatars
- **Flat button system** — every variant uses `border: 1px solid <bg-color>`, giving a crisp solid-block look without shadow
- 7-tier semantic button variants (`primary`, `secondary`, `danger`, `purchase`, `green`, `login`, `*-plain`) with full hover/active state matrices
- Cool teal-navy (`#10567b`) as primary action color — overrides the warm "Pinkoi" naming
- Coral (`#f16c5d`) reserved exclusively for the `--purchase` variant — the highest-conversion CTA
- Skeuomorphic colored shadows reserved for **legacy specialty controls** only (`.m-button-{pink,gray,green,unfav}` — favorite hearts, follow-shop buttons), never on the primary `.m-br-button` system
- High-density grid: 6-column product layout (`16.66%` each) with `12px` total horizontal margin per card
- 12-step neutral gray scale from `#f7f7f8` → `#202026` for surfaces, borders, and text hierarchy

## 2. Color Palette & Roles

### Primary
- **Mid Teal** (`#10567b`): `--primary` and `--login` button **base** background. The default brand action color.
- **Deep Teal** (`#064162`): `--primary` and `--login` **hover** state. Darker for visual press feedback.
- **Darkest Navy** (`#003354`): `--primary` and `--login` **active/pressed** state. The deepest brand blue.
- **Bright Teal** (`#2e90b7`): Link color, `--*-plain` visited state, secondary brand accent (used 22x in core CSS).
- **Pure White** (`#ffffff`): Card surfaces, modal backgrounds, button text on filled buttons, `--secondary` button background.

### Surface & Background
- **Surface Soft** (`#f7f7f8`): Default page background tint, `--secondary` button hover, grouped section background (20x in core).
- **Surface Hover** (`#eeeeef`): `--secondary` button active state, slightly heavier muted surface.
- **Border Light** (`#e5e5e6`): Default thin dividers between rows.
- **Border Mid** (`#d3d3d5`): Standard component border (cards, inputs, button outlines for non-filled variants — used 32x in core).

### Neutral Scale (Text & Iconography)
- **Text Primary** (`#39393e`): Default body and heading color (41 uses in CSS — the dominant text color).
- **Text Secondary** (`#515156`): Slightly lighter for secondary headings and labels (10x).
- **Text Muted** (`#66666a`): Captions, timestamps, descriptive text (26x).
- **Text Subtle** (`#7c7c80`): Disabled-looking tertiary text.
- **Text Faint** (`#929295`): Hints, placeholder, very low-emphasis labels.
- **Text Disabled** (`#a8a8ab`): Disabled states, line-through original prices (`.oprice`), `--secondary` button border.
- **Text Ghost** (`#bfbfc1`): Decorative or low-priority dividers, alternative line-through price color.
- **Text Black** (`#202026`): Reserved for maximum-emphasis moments (overlays, modal titles).

### Purchase (CTA-exclusive)
- **Coral Base** (`#f16c5d`): `--purchase` button **base** background. Used **only** on the most important conversion moment per page (Add to Cart, Buy Now).
- **Coral Hover** (`#e56051`): `--purchase` hover state. Confirmed CSS-exclusive: appears in only 2 places — the `--purchase` button and one decorative bold text rule.
- **Coral Active** (`#da5648`): `--purchase` pressed state.

### Error / Danger
- **Error Red** (`#e63349`): The system's error/danger color (25 uses in core CSS). Used as: `--danger` button base, form validation error label/border/icon, required-field asterisk (`.s-required:after`), warning info text (`.g-info.g-warn b`), `--danger-plain` text hover. **Not** a promotional sale color — it's the validation/destructive red.
- **Error Red Hover** (`#d72136`): `--danger` button hover.
- **Error Red Active** (`#c41428`): `--danger` button pressed.
- **Pink Visited** (`#f86173`): `--danger-plain` visited link state.

### Success
- **Success Green Base** (`#2cac97`): `--green` button base background. Teal-leaning green, not pure forest.
- **Success Green Hover** (`#289c8a`): `--green` hover and active state.

### Decorative / Legacy
- **Brand Pink** (`#c83166`): Used inside the legacy skeuomorphic shadow recipe for pink-themed buttons (`.m-button-pink`). Also appears as accent in promotional decoration.
- **Hot Pink** (`#ff6299`): `.m-button-pink:hover` background — legacy favorite/heart button.
- **Lime Green** (`#7ec527` / `#65a40e` / `#4d9200`): `.m-button-green` legacy palette — applies to specialty controls only.

### Shadow Tints (Layered Shadow Components)
- **Shadow Soft** (`rgba(32,32,38,.12)`): The default soft drop shadow base.
- **Shadow Edge** (`rgba(32,32,38,.2)`): Used in `0 1px 1px 0 rgba(32,32,38,.2)` for subtle row dividers and `.card-discount-badge`.
- **Shadow Modal** (`rgba(32,32,38,.4)`): Stronger overlay shadow for modals and popovers.
- **Shadow Tooltip** (`hsla(240,2%,41%,.8)`): Tooltip outer glow.

## 3. Typography Rules

### Font Stack (Locale-Aware)
Pinkoi runs **per-language font stacks**. Always lead with `Helvetica Neue, Helvetica, Arial`, then append the user's locale stack:

| Locale | Font Stack |
|---|---|
| Default (en) | `Helvetica Neue, Helvetica, Arial, Verdana, sans-serif` |
| Traditional Chinese | `Helvetica Neue, Helvetica, Arial, PingFang TC, Heiti TC, Microsoft JhengHei, sans-serif` |
| Simplified Chinese | `Helvetica Neue, Helvetica, Arial, PingFang SC, Heiti SC, Microsoft YaHei, sans-serif` |
| Japanese | `Helvetica Neue, Helvetica, Arial, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, Meiryo, PingFang TC, sans-serif` |
| Thai | `Helvetica Neue, Helvetica, Arial, Thonburi, Noto Sans Thai, Droid Sans Thai, sans-serif` |

### Weights
- **700**: Headings (H1–H4 verified weight 700 on `/browse`), prices, discount badge children, emphasis spans. Bold-heavy is the brand's typographic posture **for hierarchy and emphasis**.
- **500**: Secondary emphasis — subheads, semi-bold UI labels.
- **400**: Body text, long-form descriptions, **button text** (verified: `.m-br-button .text` renders at weight 400 on product pages — buttons rely on color and border for prominence, not weight), card badges (`s-card-badge`).
- **600**: Reserved for narrow contexts; rarely used (only 2 occurrences in core CSS).

> **Note on buttons**: Despite the bold-heavy headline posture, button labels themselves are weight 400. Visual prominence comes from the colored bg + matched border (e.g., coral `#f16c5d` for purchase) — not from text weight.

### Size Scale (px)
| Use | Size |
|---|---|
| Captions, timestamps | `9–11px` |
| Badge text, small labels, breadcrumbs | `12px` |
| Inline metadata, secondary text | `13px` |
| **Body, button text default, breadcrumbs `g-breadcrumb`** | `14px` |
| Subheadings, stronger labels | `15–16px` |
| Card titles, mid headings | `18–20px` |
| Section headings | `21–22px` |

The scale stays compact — there is no extreme-large display type. Hero headlines on landing surfaces use 22px or scale up via percentage (`100%`, `2.2em`) rather than fixed large pixels.

### Hierarchy is Weight-Driven, Not Size-Driven (verified via Playwright on `/browse`)
Pinkoi's heading hierarchy is unusual: most `<h1>`, `<h2>`, `<h3>` render at **14–16px** — close to body size. The visual hierarchy comes from **weight 700** combined with **color shifts** (e.g., `#39393e` for primary headings, `#66666a` for secondary, `#2cac97` for special emphasis like "Flagship Shops"). This is the opposite of the SaaS convention of using 32–48px headlines. It reflects Pinkoi's commerce-density priority: every pixel of vertical space saved means more browsable inventory above the fold.

### Special Conventions
- **No letter-spacing customization** in the modern core CSS — system defaults are trusted (legacy `.g-breadcrumb` uses `letter-spacing: 1px`; `.g-breadcrumb-v2` removes it).
- **`font-style: italic`** is reserved for testimonials and quoted content.
- **`text-decoration: none`** on `:hover` for `.m-br-button` — buttons never look like links.
- **`text-decoration: line-through`** for `.oprice` (original price before discount), in muted gray (`#a8a8ab` or `#bfbfc1`).
- **Numerals are not tabularized** by default — Pinkoi's product prices flow with prose.

## 4. Component Stylings

### Buttons (`.m-br-button`)
Base: `border-radius: 4px`, `transition: border .1s, color .1s, background .1s`, `outline: 0`, `cursor: pointer`, `text-align: center`, default text size `14px`. Icon `margin-right: 6px`. **Every filled variant uses `border: 1px solid <same-as-bg>` for a crisp solid block.**

Verified state matrices from production CSS:

| Variant | Base | Hover | Active | Use Case |
|---|---|---|---|---|
| `--primary` | bg `#10567b`, border `#10567b`, text `#fff` | bg/border `#064162` | bg/border `#003354` | Primary CTAs |
| `--login` | bg `#10567b`, border `#10567b`, text `#fff` | bg/border `#064162` | (matches primary) | Auth flows |
| `--secondary` | bg `#fff`, border `1px solid #a8a8ab`, text `#39393e` | bg `#f7f7f8` | bg `#eeeeef` | Cancel, dismiss, neutral CTAs |
| `--purchase` | bg `#f16c5d`, border `#f16c5d`, text `#fff` | bg/border `#e56051` | bg/border `#da5648` | Add to Cart, Buy Now (coral, exclusive) |
| `--danger` | bg `#e63349`, border `#e63349`, text `#fff` | bg/border `#d72136` | bg/border `#c41428` | Destructive actions |
| `--green` | bg `#2cac97`, border `#2cac97`, text `#fff` | bg/border `#289c8a` | bg/border `#289c8a` | Confirmations, follow |
| `--*-plain` | transparent, text-only color | text color hover only | bg `#f7f7f8` | Ghost variants |

Buttons sit horizontally with `+ .m-br-button { margin-left: 10px }` for chained CTAs.

### Cards (`.m-card-product`)
- `box-sizing: border-box`, `display: inline-block`, `vertical-align: top`
- `max-width: 190px`, width `calc(16.66667% - 12px)` → 6-column responsive grid
- Horizontal margins: `0 6px` per card → `12px` total gap
- Container `.m-card-container { margin: 0 -6px }` to negate edge gaps
- Cards rely on the product image as the primary visual; chrome around them is minimal

### Card Badges (`.s-card-badge`)
- `border-radius: 2px` (smaller than buttons — sits inside a busy product card)
- `font-size: 12px`, `font-weight: 400`
- `padding: 1px 4px` (very tight)
- `display: inline`, `position: relative`, `top: -1px` for optical alignment

### Discount Badges (`.card-discount-badge`)
- `border-radius: 2px 0 2px 0` — **asymmetric** corners create a folded-ribbon effect (top-right and bottom-left squared)
- `box-shadow: 1px 1px 2px 0 rgba(32,32,38,.2)` — subtle lift to separate from product image
- `position: absolute; top: 0; left: 0` — anchored to product image corner
- Numeric content uses `font-weight: 700` (`.g-item-badge-discount span`)
- Companion `.oprice` shows the original price line-through in muted gray (`#a8a8ab` / `#bfbfc1`)

### Navigation
- Sticky horizontal header on desktop with category dropdowns
- Default text color `#39393e`, link/active state `#2e90b7`
- Logo references `pinkoi_logo_2019.svg` — circular arcs + acute angles per brand identity refresh
- Navigation links remain weight 400 (lighter than headlines) for scannability

### Inputs
- Border-color follows the neutral scale (`#d3d3d5` default, `#bfbfc1` on focus, `#e63349` on error)
- Error state uses `box-shadow: inset 0 0 0 1px #e63349` for emphasized error borders
- Border-radius `4px` to match buttons
- Padding patterns from CSS: common `5px 10px`, `8px 12px`, `9px 14px` depending on size
- Required-field asterisk: `.s-required:after { color: #e63349; content: "*"; margin-left: 4px }`
- No floating-label or pill-shaped inputs — bordered rectangle is the convention

### Tables
- Used sparingly; commerce content is card-grid first
- When used, row dividers via `0 1px 1px 0 rgba(32,32,38,.2)` shadow or `1px solid #e5e5e6` border

## 5. Layout Principles

### Spacing Scale
Pinkoi works in a **5–10px micro-scale** for component padding and a coarser **24px+ rhythm** for section spacing:

| Common Padding Values | Use |
|---|---|
| `0` (15 uses) | Reset, tight columns |
| `2px`, `3px` | Badge insets, icon padding |
| `5px 10px` | Default tight button/cell |
| `4px 10px`, `6px 10px`, `8px 12px`, `9px 14px` | Button size variants S → M → L |
| `14px 0`, `64px 0` | Vertical section rhythm |

### Grid
- 6-column product grid is the dominant pattern (`16.66667%` per card)
- Container max-widths via media queries — content centers on wider viewports
- Negative margins on container (`margin: 0 -6px`) to pull edge cards flush

### Density
Pinkoi is a **high-density** system. Whitespace is rationed; products, prices, badges, and CTAs are stacked tightly to maximize browsable inventory. Don't space components like a SaaS dashboard.

## 6. Depth & Elevation

Pinkoi has a **two-track shadow philosophy**: the modern button/card system stays mostly flat, while a small set of legacy specialty controls retain a skeuomorphic colored-underglow recipe.

### Modern Surface Shadows (the default)
- **Card discount badge** — `1px 1px 2px 0 rgba(32,32,38,.2)` (subtle lift over product image)
- **Outline focus** — `box-shadow: 0 0 0 1px #d3d3d5` (border-as-shadow, often on focused inputs)
- **Inline error** — `box-shadow: inset 0 0 0 1px #e63349` (red inset for invalid form fields)
- **Single-pixel solid bottom** — `0 1px #515156` ("button depth"), `0 1px #d3d3d5` (subtle bottom edge)
- **Tooltip glow** — `0 0 2px hsla(240,2%,41%,.8)`
- **Modal/dialog** — `0 0 4px rgba(32,32,38,.4)`
- **Row divider** — `0 1px 1px 0 rgba(32,32,38,.2)`

The primary `.m-br-button` system has **no shadow at all** — its visual weight comes from the matched bg+border combo, not elevation.

### Legacy Skeuomorphic Shadows (specialty controls only)
A small set of older button classes — `.m-button-pink`, `.m-button-gray`, `.m-button-green`, `.m-button-unfav` — apply a layered colored shadow on `:hover`. These are typically used for favorite/follow-shop heart buttons, not primary CTAs.

Pattern: `0 .2em .2em -.1em <BRAND_MID>, 0 .3em <BRAND_DARK>, 0 .5em .5em -.1em rgba(32,32,38,.12)`

| Class | Hover bg | Mid shadow | Dark shadow |
|---|---|---|---|
| `.m-button-pink` | `#ff6299` | `#c83166` | `#a32252` |
| `.m-button-green` | `#7ec527` | `#65a40e` | `#4d9200` |
| `.m-button-gray` | `#8e9a9f` | `#66666a` | `#535c5f` |
| `.m-button-unfav` | (transparent) | `#d3d3d5` | `#d3d3d5` |

Treat this as a **legacy accent**, not a system-wide pattern. Don't generalize it to the main button system.

### Z-Index Hierarchy
- Sticky header sits above content
- Dropdown menus above sticky header
- Modal overlay above all chrome
- Toast notifications above modals

## 7. Do's and Don'ts

- **DO** use weight 700 for headlines, CTAs, prices, and badges. Bold is the brand's voice.
- **DON'T** apply weight 300 — Pinkoi never goes "airy thin." Headlines are confident and dense.
- **DO** reserve coral (`#f16c5d` / `#e56051` on hover) for the single most important purchase moment per page.
- **DON'T** use coral for navigation, generic CTAs, or info accents — it dilutes the conversion signal.
- **DO** use the locale-aware font stack with the user's language fallback as the second priority.
- **DON'T** load custom web fonts — system fonts respect each market's reading habits and reduce LCP across slow APAC connections.
- **DO** keep the modern button system flat — `border: 1px solid <same-as-bg>` and no shadow. Visual weight comes from color, not elevation.
- **DON'T** apply skeuomorphic shadows to primary CTAs — that recipe is reserved for legacy specialty controls (favorite, follow-shop buttons).
- **DO** keep border-radius in the `2px–8px` range (badges 2px, buttons/cards 4px, occasional 6–8px on featured surfaces).
- **DON'T** use pill-shaped or fully rounded buttons — they break the high-density commerce aesthetic.
- **DO** pack product cards tightly with `12px` total gutters and 6-column grids on desktop.
- **DON'T** overspace on landing pages — Pinkoi users browse a lot of inventory at once.
- **DO** treat `#e63349` (and its hover/active siblings) as the **error/destructive red** — use it for form validation, danger buttons, required-field asterisks, and warnings.
- **DON'T** confuse the error red with a sale-price color — discount badges use the asymmetric-corner ribbon style, not red text.

## 8. Responsive Behavior

### Breakpoints
| Name | Range | Key Changes |
|---|---|---|
| Mobile | `<767px` | 2-column product grid, stacked nav, full-width CTAs |
| Mobile (alt) | `<768px` | Some surfaces use 768px as the cutoff |
| Tablet | `768px–1037px` | 3–4 column product grid, condensed nav |
| Desktop | `1037px–1200px` | 5–6 column product grid, full nav |
| Wide | `>1200px` | 6-column grid with side margins |
| Extra Wide | `>1248px` | Centered max-width container |

### Touch Targets
- Buttons use `5px 10px` to `9px 14px` padding scale — adequate but compact
- Card tap targets cover the entire `.m-card-product` area
- Mobile nav typically expands to a full-screen drawer

### Collapsing Strategy
- 6-column product grid → 4 → 3 → 2 columns on shrinking width
- Horizontal sticky nav → hamburger drawer below 768px
- Multi-column footer → stacked sections below 768px
- Filter sidebar → bottom sheet on mobile
- Inline price + action → stacked below thumbnail on mobile

### Image Behavior
- Product images dominate cards — minimum 190px square
- Hover states may swap to alternate angle on desktop only (no hover on mobile)
- WebP/lazy-load standard practice (CDN: `cdn02.pinkoi.com`)
- Card aspect ratio preserved across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA bg: Mid Teal (`#10567b`); hover `#064162`; active `#003354`
- Purchase CTA bg: Coral (`#f16c5d`); hover `#e56051`; active `#da5648` — **buy actions only**
- Danger/Error: Red (`#e63349`); hover `#d72136`; active `#c41428` — destructive AND form validation
- Success: Teal Green (`#2cac97`); hover `#289c8a`
- Secondary button: white bg, `1px solid #a8a8ab` border, `#39393e` text
- Default text: Slate Dark (`#39393e`)
- Muted text: Slate Mid (`#66666a`)
- Link / mid-brand: Bright Teal (`#2e90b7`)
- Border default: Light Gray (`#d3d3d5`)
- Surface tint: Cool White (`#f7f7f8`)

### Example Component Prompts
- "Create a Pinkoi-style product card: white background, 1px solid #d3d3d5 border, 4px radius, max-width 190px. Image fills the top 75% of the card. Below: title in 14px weight 700 #39393e (2-line clamp), price in 16px weight 700 #39393e, optional discount badge with `border-radius: 2px 0 2px 0` (asymmetric ribbon corners), `1px 1px 2px 0 rgba(32,32,38,.2)` shadow, absolute top-left."
- "Build a Pinkoi primary button: 4px radius, 14px text weight 400, white text, #10567b background, `1px solid #10567b` border, 8px 12px padding. Hover: bg + border to #064162. Active: bg + border to #003354. No shadow — the matched bg+border combo gives the solid-block feel. Transition: `border .1s, color .1s, background .1s`. Note: button labels are weight 400, not 700 — visual weight comes from color + border, not text weight."
- "Design a 'Add to Cart' purchase button: 4px radius, 14px weight 400 white text, #f16c5d background, `1px solid #f16c5d` border, 9px 14px padding. Hover: #e56051. Active: #da5648. This button must be the most visually weighted element on the product page — coral is finite and reserved for this moment only. Verified live: `.m-br-button--purchase` on product detail page exactly matches these values."
- "Create a Pinkoi navigation header: white sticky bar, 14px weight 400 #39393e nav links with #2e90b7 hover, dropdown menus with 4px radius and `0 0 4px rgba(32,32,38,.4)` shadow. Logo (`pinkoi_logo_2019.svg`) on the left, search input center (border #d3d3d5, 4px radius), Login button (`--login` variant: #10567b bg + matched border + white text) on the right."
- "Build a form input with error state: 1px solid #d3d3d5 border default, 4px radius, 8px 12px padding. On error, set border to #e63349 and add `box-shadow: inset 0 0 0 1px #e63349` for a doubled-up red border effect. Helper text below in #e63349 weight 400 12px. Required-field labels get an asterisk via `.s-required:after { color: #e63349; content: '*'; margin-left: 4px }`."

### Iteration Guide
1. **Use weight 700 for headings, prices, and emphasis spans** — but **button labels stay at weight 400**. Visual weight on buttons comes from color + matched border, not text weight.
2. **Use the locale-aware font stack** — never hardcode a single font family. Lead with `Helvetica Neue, Helvetica, Arial`, append the user's language fallback.
3. **`border-radius: 4px`** is the workhorse. `2px` for badges. Discount badges use asymmetric `2px 0 2px 0`. Never go above `10px` except on rare hero overlays.
4. **Filled buttons get `border: 1px solid <same-as-bg>`** — this matched border gives the crisp solid look. Never add a shadow to the modern button system.
5. **Reserve coral (`#f16c5d`) exclusively for the `--purchase` variant**. Using it elsewhere weakens conversion.
6. **Treat `#e63349` as the error red across ALL contexts** — `--danger` button, form validation borders, required-field asterisks, warning text. It's not a sale-price color.
7. **High-density spacing** — micro-padding (`5px 10px` to `9px 14px`) on controls, generous (`24px+`, `64px 0`) only between full sections.
8. **6-column product grid** is the desktop default. Cards are `calc(16.66667% - 12px)` wide with `0 6px` horizontal margins.
9. **Use `#39393e` for body text**, never pure black. The slightly warm dark-gray reads better against the soft `#f7f7f8` surface tint.
10. **Skeuomorphic colored shadows are LEGACY** — only apply them to favorite/follow-shop accent buttons (`.m-button-{pink,gray,green,unfav}`), never to the main `.m-br-button` system.

---
omd: 0.1
brand: Pinkoi
---

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

---

## 10. Voice & Tone

Pinkoi speaks like a well-travelled friend recommending a designer they met at a craft fair: warm, specific, and quietly proud of the maker behind every product. The voice is **curatorial, bilingual, and commerce-forward** — English, Traditional Chinese, Japanese, Simplified Chinese, and Thai all render as first-class (never translated "to English" but authored for each locale, served via the per-language font stack in §3). Sentences avoid hype; they frame objects through the designer's intent. The house tagline "Design the way you are" is declarative, not aspirational — it says *your* taste is already valid, Pinkoi's job is to surface it. No em-dash-heavy marketing voice, no "game-changer" vocabulary, no purple-prose product poetry. Shop copy, on the other hand, is **the designer's voice** — Pinkoi deliberately lets shop owners write listings in their own register, because a ceramicist from Kyoto should not sound like a leather-worker from Taipei.

| Context | Tone |
|---|---|
| Primary CTAs | Short, verb-led, bilingual-parallel (`Sign In / Register`, `Sell on Pinkoi`, `Add to Cart`). Title-case in English, no trailing punctuation. |
| Purchase CTAs (coral `--purchase` button only) | Imperative + concrete object: `Add to Cart`, `Buy Now`. Never generic `Continue` or `Submit`. |
| Product listings (shop-authored) | Designer's own voice preserved. Pinkoi does not normalize tone across shops — variance is the feature. |
| Empty states (browsing / wishlist) | One-line explanation of *why* it is empty, plus one suggested next action. Never `No results`. |
| Error messages (form validation) | Field-specific + blameless. Asterisk-marked required field labels (`.s-required:after { content: "*" }`) carry most of the work; error lines stay short. |
| Success (add-to-cart, wishlist) | Confirmation of what happened, plus immediate next step (View Cart / Continue Browsing). Never celebratory. |
| Editorial / Pinkoi Zine | Longer-form, essayistic. Designer interviews use direct quotation. Contrast with terse storefront chrome is intentional. |
| Founder / corporate ("About") | First-person-plural, plain, slightly formal. `Pinkoi believes…`, `Pinkoi strives…`. |
| Onboarding / seller recruitment | Invitational (`Be a Pinkoist`, `Let's work together`). No countdown urgency, no "limited time" manipulation. |

**Forbidden phrases.** `World-class`, `amazing finds`, `curated for you` (overused across competitors), `Oops!`, `Something went wrong` without a reason, `No items found.` (too terminal — always give a path forward). In Traditional Chinese surfaces avoid `獨家優惠`, `超值` and other aggressive-discount vocabulary; Pinkoi's discount layer is the asymmetric ribbon badge (§4), not shouty copy. No emoji on money or checkout screens. No exclamation marks in error messages. No approximate prices on any surface — listings show exact amounts in the shop currency.

**Voice samples.**

- `"Design the way you are."` — brand line, homepage hero <!-- verified: https://en.pinkoi.com/about, 2026-04 -->
- `"Asia's cross-border design marketplace"` — site header positioning <!-- verified: https://en.pinkoi.com, 2026-04 -->
- `"Sell on Pinkoi"` — designer-recruitment CTA, header + footer <!-- verified: https://en.pinkoi.com, 2026-04 -->
- `"Be a Pinkoist"` — brand-community invitation, about page <!-- cited: https://en.pinkoi.com/about/team -->
- `"Let's work together."` / `"Pinkoi loves collaborating with people. We can't wait to turn your good ideas into great realities."` — partnership CTA <!-- verified: https://en.pinkoi.com/about, 2026-04 -->
- `"Stay up to date on the latest designs"` — newsletter footer <!-- verified: https://en.pinkoi.com, 2026-04 -->
- `"Pinkoi believes that design has a transformative power that can permeate every aspect of our lives."` — about-page lead paragraph <!-- verified: https://en.pinkoi.com/about, 2026-04 -->
- Empty wishlist (illustrative): `"No favorites yet — tap the heart on anything you love and it will live here."` <!-- illustrative: not verified as live Pinkoi copy -->
- Form error (illustrative): `"Please enter a valid email so the shop can reach you about your order."` <!-- illustrative: not verified as live Pinkoi copy -->

## 11. Brand Narrative

Pinkoi was founded in **Taipei in 2011** by **Peter Yen (顏君庭)**, **Mike Lee (李讓)**, and **Maibelle Lin (林怡君)** — three Taiwanese engineers and designers who had watched Asian design culture thrive in craft fairs and boutique storefronts while remaining absent from global e-commerce ([en.pinkoi.com/about](https://en.pinkoi.com/about), [en.pinkoi.com/about/team](https://en.pinkoi.com/about/team)). Peter had spent four years at Yahoo in Sunnyvale leading the Yahoo Answers engineering team; weekends in San Francisco craft fairs seeded the question that became Pinkoi: *why can a potter in Taichung or a leather-worker in Kyoto only sell within a fifty-kilometre radius when the internet exists?* The thesis: build the infrastructure that lets an Asian independent designer sell to a buyer in Tokyo, Hong Kong, Bangkok, or São Paulo without building their own logistics stack, payment layer, or translation pipeline.

The site's mission framing is explicit: *"Pinkoi believes that design has a transformative power that can permeate every aspect of our lives. Embracing great design can bring us closer to our ideal lifestyles"* ([en.pinkoi.com/about](https://en.pinkoi.com/about)). This translates into a refusal — Pinkoi is **not** a generic marketplace competing on SKU count or price. Peter has stated the position plainly: *"E-commerce companies that sell standard products are playing a game of capital, but that's not our game. Pinkoi sells non-standard products"* ([cherubic.com](https://cherubic.com/blog/founder-interview-pinkoi/)). And: *"While the saying 'money talks' may be true in some places, at Pinkoi our decisions are primarily based on providing users with a good experience"* ([cherubic.com](https://cherubic.com/blog/founder-interview-pinkoi/)). Every designer is vetted; every listing is the work of a small maker; the review system is treated as non-negotiable infrastructure, not a line-item to optimize away.

What Pinkoi has become is a design-commerce platform serving **5 primary markets (Taiwan, Hong Kong, Japan, mainland China, Thailand)** with ~6.25M members, 50,000+ active shops across 77 countries, and 95% cross-border sales share <!-- source: en.pinkoi.com/about as of 2026-04; metrics surfaced by Pinkoi, not independently audited -->. The logo is *"designed using circular arcs and acute angles, conveying the brand's core values of diversity, inclusion and respect for the unique"* ([en.pinkoi.com/about](https://en.pinkoi.com/about)). The design language reflected in §1–§9 — high-density 6-column grids, bold-heavy Helvetica Neue + locale stacks, coral coral reserved for a single `--purchase` moment per page, flat matched-border buttons, conservative 4px radii — is the product-surface expression of that thesis: clarity and density serve the designer's work, and the chrome stays out of the way so the object can do the talking.

## 12. Principles

1. **The designer is the voice.** Pinkoi's chrome is the frame; the product and shop copy is the picture. Shop owners author their own listings in their own register; Pinkoi does not homogenize tone across shops. *UI implication:* Shop-owned surfaces (listing description, shop bio, designer story) use body text with minimal chrome. Pinkoi-owned chrome (nav, cart, checkout) uses the tight bold-heavy system. Do not style shop content with site chrome type scale — it will flatten the variance that is the product.
2. **Coral is finite.** `#f16c5d` (`--purchase`) appears on one button per page — the conversion moment. Spending it elsewhere dilutes the one signal users have learned to trust. *UI implication:* A product page has exactly one coral button (Add to Cart or Buy Now). A category page has zero. A checkout page has exactly one (Place Order). Never two coral buttons on the same viewport.
3. **Density is the browse feature.** Pinkoi users cross 6+ categories per session looking for a specific aesthetic, not a specific product. Whitespace hostile to scanning is anti-feature. *UI implication:* Product grid desktop default is 6 columns (`calc(16.66667% - 12px)`). Do not space product cards like a SaaS dashboard. Vertical rhythm between sections is generous (`64px 0`); within sections, micro-padding (`5px 10px` → `9px 14px`).
4. **Locale is infrastructure, not a language toggle.** Every surface ships through 5 font stacks (TC / SC / JP / TH / default). Copy is authored per locale, not translated from English. *UI implication:* Do not use `font-family: 'Helvetica Neue'` alone. Always use the full 5-stack fallback chain from §3. Microcopy strings should route through the locale bundle; do not inline English.
5. **Errors are field-local, blameless, and actionable.** Pinkoi's error convention leans heavily on the required-asterisk (`.s-required:after { color: #e63349 }`) plus an inline field-level message. Global error banners are a last resort. *UI implication:* Form error state sets `1px solid #e63349` border + `box-shadow: inset 0 0 0 1px #e63349` (doubled red) on the invalid input. Error text lives directly beneath the field in 12px `#e63349`. Do not show a dialog. Do not block the page.
6. **Bold is for structure, not buttons.** Weight 700 carries the visual hierarchy (headlines, prices, badges) — but button labels are weight 400. A button's weight comes from the matched bg+border combo, not its text. *UI implication:* `.m-br-button .text { font-weight: 400 }` is load-bearing. Never render a button label in weight 700 — it breaks the color-does-the-work principle and flattens the hierarchy that weight 700 establishes elsewhere.
7. **Shadows are evidence of history, not a depth system.** The primary `.m-br-button` system is flat. The skeuomorphic colored-glow shadow (pink / lime / gray recipes in §6) is **legacy specialty control territory** — favorite hearts, follow-shop — not a system-wide pattern. *UI implication:* When introducing a new component, default to flat + matched `1px solid` border. Do not use the legacy `0 .2em .2em -.1em <color>, 0 .3em <color>, 0 .5em .5em -.1em rgba(32,32,38,.12)` recipe on anything but the existing `.m-button-{pink,gray,green,unfav}` classes.
8. **Metrics are the designer's, not Pinkoi's.** The product lists the shop owner's rating, the shop owner's sales count, the shop owner's reviews — Pinkoi's own platform metrics (MAU, GMV) are absent from customer surfaces. *UI implication:* Card badges, product pages, and shop pages expose shop-level trust signals (rating stars, review count, "ships from <city>"). Do not add platform-level badges like "Trending on Pinkoi" unless they reinforce a shop-level claim.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Pinkoi user segments (Taiwan / Hong Kong / Japan cross-border design buyers), not individual people.*

**Yi-Chen (怡蓁), 29, Taipei.** Product designer, opens Pinkoi 3–4 evenings a week to browse ceramics and stationery, averaging NT$1,200–NT$3,000 per basket twice a month. Re-visits the same 8–10 shops by name before exploring new ones, treating the wishlist as a curated mood board rather than a shopping list.

**Wing-Lam, 34, Hong Kong.** Architect and wishlist-first buyer; discovers Pinkoi via Instagram posts of Japanese stationery shops she cannot reach otherwise, and reads every shop's "about" page before a first-time purchase. Toggles the site between Traditional Chinese and English by shop origin, and will abandon a cart if shipping logistics feel opaque.

**Haruto (陽翔), 42, Tokyo.** Mid-career art director sourcing Taiwanese and Thai ceramics and leather goods that rarely reach Japanese department stores; evaluates photography, dimensions, and materials carefully before adding to cart. Low session frequency (~4x/month) but high basket value (¥15,000+), desktop-only, unlikely to use promotions.

**Ploy, 26, Bangkok.** Early-career graphic designer and lurker-turned-seller — opened her own shop eighteen months ago, still browses daily as a buyer, and uses the platform bilingually (Thai + English). Bookmarks shops whose packaging and photography she admires as craft references, and engages heavily with Pinkoi Zine editorial.

## 14. States

| State | Treatment |
|---|---|
| **Empty (wishlist, first visit)** | One-line `#66666a` body explanation of *why* the list is empty, plus one secondary button (`--secondary` variant — white bg, `1px solid #a8a8ab`, `#39393e` text) suggesting browsing a category. Never `No items`. Never an illustration. |
| **Empty (search no-results)** | Single `#66666a` caption explaining the zero-match in the user's own query terms, plus 3–5 suggested alternate category chips. Never terminal `No results found.` |
| **Empty (cart)** | `#39393e` heading at 16px weight 700, one-line body describing next step, single `--primary` button linking to the last-browsed category. No promotional banner injection — an empty cart is not an upsell moment. |
| **Loading (first paint, product grid)** | Skeleton blocks at `#f7f7f8` (surface-soft) with 4px radius matching final card radius. Image areas are fixed-aspect skeletons; price and title areas are 14px-tall gray bars. Shimmer = 1.2s `linear-gradient` with 8% white highlight. No spinner. |
| **Loading (inline action — add to cart)** | Coral button stays in place at `#f16c5d` bg, text swaps to a 3-dot animation in white. Button width does not change — prevents layout shift and double-tap. |
| **Loading (route transition)** | Top-of-page 2px progress bar in `#2e90b7` (brand mid-teal), no overlay, previous page content stays visible. |
| **Error (form field)** | Input border switches to `1px solid #e63349` plus `box-shadow: inset 0 0 0 1px #e63349` for the doubled-red effect. Helper text below in `#e63349` 12px weight 400. Required-field label gets `*` in `#e63349` via `.s-required:after`. |
| **Error (inline banner — shop or shipping issue)** | Thin horizontal banner, `#e63349` left border (3px), `#f7f7f8` background, `#39393e` body text. One action link on the right. Not a modal. |
| **Error (checkout — payment declined)** | Reserved escalated state: full-width `#e63349` border-left card at checkout top, one sentence describing the decline in blameless language, single retry button in `--primary`. Do not show a generic `Something went wrong`. |
| **Success (add-to-cart)** | Toast at top-right, `#39393e` bg, white 14px weight 400 text, 3s auto-dismiss. Single sentence: confirms the item added, offers View Cart action in `#2e90b7` link color. No checkmark animation; no sound. |
| **Success (order placed)** | Dedicated confirmation screen — not a toast. Order number in 20px weight 700, shop(s) notified list, estimated ship date per shop. `--secondary` button `Continue Browsing`, `--primary` button `View Order`. Never a coral button here — the purchase moment is past. |
| **Skeleton** | `#f0f0f0` blocks at exact product-card dimensions (1:1 image, 2-line title, designer-name line, price). Shimmer 1.2s with 8% white highlight. Price placeholder renders as `—` per currency locale (`NT$ —` / `JP¥ —` / `USD $ —`) — never `$0`. Designer-name placeholder stays blank, never "Loading…" — a made-up designer name would be misleading on a craftsmanship-first marketplace. |
| **Disabled** | Button opacity per default browser disabled treatment; border stays visible so geometry is stable. Disabled form inputs keep their `#d3d3d5` border — no grey-out wash — so re-enabled fields do not shift. |

## 15. Motion & Easing

**Durations** (named tokens, extending the `transition: border .1s, color .1s, background .1s` convention already present in `.m-br-button`):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, radio state changes, reduce-motion fallback |
| `motion-fast` | 100ms | Hover / focus transitions on buttons, links, cards (matches the production `.1s` already in `.m-br-button`) |
| `motion-standard` | 200ms | Dropdown reveals, tooltip fades, cart-count updates |
| `motion-slow` | 300ms | Modal open, filter sidebar slide, image lightbox |
| `motion-page` | 250ms | Route transitions + top progress bar fade |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — modals, dropdowns, toasts |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things dismissing |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — accordion, filter expand |

**Spring / overshoot stance.** **Forbidden.** Pinkoi is a commerce surface populated by handmade designer goods whose value proposition is craftsmanship and restraint; bouncy UI motion reads as a consumer-app tic that fights the product. The closest peer brands (Asian design marketplaces, curated commerce) universally avoid spring; applying it would code Pinkoi closer to a flash-sale app than a curated marketplace. No `cubic-bezier` with y > 1, no overshoot on add-to-cart confirmations, no bouncy modal entries. Where a brand like Toss licenses spring for money-moved checkmarks, Pinkoi does not — the commerce confirmation in §14 is a dedicated screen, and a static checkmark at 300ms `ease-enter` is the whole effect.

**Signature motions.**

1. **Button state transitions.** `transition: border .1s, color .1s, background .1s` (production CSS, literal). Hover/active state changes on all `.m-br-button` variants are simultaneous color + border interpolations at 100ms with `ease-standard`.
2. **Card hover (desktop only).** Product card scales imperceptibly (1.0 → 1.02) over 200ms `ease-standard`, or swaps to an alternate product image. No shadow change — the flat chrome is the brand. Mobile: no hover, no tap-highlight on the card (taps route directly to product page).
3. **Discount-ribbon entry.** When a discount badge renders on a product card, the `0 1px 1px 0 rgba(32,32,38,.2)` shadow fades in over 200ms. The badge itself does not rotate, bounce, or shimmer — it is a static anchor, not an attention grab.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. No exceptions. Hover color transitions still apply (they are not motion per the spec — they are state changes). Modal slide-ins become instant opacity toggles; route-transition progress bar is hidden entirely.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch (2026-04-20):
- https://en.pinkoi.com/about — mission ("Design the way you are."; "Pinkoi believes that
  design has a transformative power…"), founding year (Taipei 2011), market list
  (Shanghai, Hong Kong, Tokyo, Bangkok), logo rationale (circular arcs + acute
  angles → diversity / inclusion / respect for the unique), partnership CTA
  ("Let's work together.", "Pinkoi loves collaborating with people…").
- https://en.pinkoi.com — header positioning ("Asia's cross-border design marketplace"),
  nav labels, seller CTA ("Sell on Pinkoi"), newsletter footer ("Stay up to date
  on the latest designs"), © 2026 Pinkoi footer line.
- https://en.pinkoi.com/about/team — founder names & titles: Peter Yen (顏君庭) Co-Founder/CEO,
  Mike Lee (李讓) Co-Founder/CPTO, Maibelle Lin (林怡君) Co-Founder. "Be a Pinkoist" invitation.

Cited (interview / press — not live product surface):
- https://www.taiwan-panorama.com/en/Articles/Details?Guid=3fb71a67-3e23-4723-8700-115a9afe9a71
  — Peter Yen on Asia-number-one design-platform ambition, designer livelihood thesis.
- https://cherubic.com/blog/founder-interview-pinkoi/
  — Peter Yen direct quotes: "E-commerce companies that sell standard products are
  playing a game of capital, but that's not our game. Pinkoi sells non-standard products."
  "While the saying 'money talks' may be true in some places, at Pinkoi our decisions
  are primarily based on providing users with a good experience."
  "If we abandoned the review system, Pinkoi would lose its advantage."
- Pinkoi founding / background: three co-founders, Peter Yen's Yahoo Sunnyvale background
  + SF craft-fair origin story — cross-confirmed via Taiwan Panorama + TechCrunch 2015
  + SME Business Review profile.

Carried from base DESIGN.md (sections 1–9) — token-level claims:
- Coral #f16c5d reserved for `--purchase`; flat matched-border button system;
  locale font stacks (5); 4px default radius; weight 700 bold-heavy structure;
  6-column product grid; `transition: border .1s, color .1s, background .1s`.
  These were extracted from production CSS bundles (`cdn02.pinkoi.com/media/dist/`)
  during base reference creation and re-verified via Playwright on 2026-04-17.

Metrics used (6.25M members, 50k+ shops, 95% cross-border, 150 countries):
- Surfaced on en.pinkoi.com/about as of 2026-04; Pinkoi-published, not independently audited.
  Marked with `<!-- source: en.pinkoi.com/about as of 2026-04; metrics surfaced by Pinkoi,
  not independently audited -->` inline.

Interpretive / editorial claims (not documented Pinkoi statements):
- "Coral is finite" framing as a principle — inferred from the exclusive `--purchase`
  variant naming + CSS-exclusive hex usage observed during base reference creation.
- Persona behaviors (session frequency, basket range, browse patterns) — fictional
  archetypes informed by publicly described Pinkoi user segments and Asian cross-border
  design-commerce conventions, not individual people. Disclaimer present in §13.
- Spring-forbidden stance — editorial reading; Pinkoi does not publicly declare a motion
  policy. Rationale tied to the brand's curated-commerce positioning, not a Pinkoi statement.

Illustrative voice samples in §10 are explicitly marked; they are placeholders showing
tonal intent, not strings observed on the live Pinkoi surface.
-->


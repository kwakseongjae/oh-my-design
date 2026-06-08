---
id: uniqlo
name: Uniqlo
country: JP
category: ecommerce
homepage: "https://www.uniqlo.com"
primary_color: "#ed1d24"
logo:
  type: simpleicons
  slug: "uniqlo"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#ed1d24"
    primary-hover: "#c8161c"
    canvas: "#ffffff"
    heading: "#1a1a1a"
    body: "#333333"
    secondary: "#666666"
    muted: "#999999"
    error: "#d0021b"
    success: "#1a8917"
    info: "#0070c9"
    gray-50: "#f5f5f5"
    gray-100: "#eeeeee"
    gray-300: "#cccccc"
    border: "#e0e0e0"
    border-strong: "#1a1a1a"
    on-primary: "#ffffff"
  typography:
    family: { sans: "TT Commons Pro", mono: "Helvetica Neue" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.10, tracking: -0.5, use: "Campaign headlines, hero" }
    display-lg:   { size: 36, weight: 700, lineHeight: 1.15, tracking: -0.3, use: "Feature section heads" }
    heading-1:    { size: 28, weight: 700, lineHeight: 1.20, use: "Page titles, category heads" }
    heading-2:    { size: 22, weight: 700, lineHeight: 1.25, use: "Sub-section titles" }
    subtitle:     { size: 16, weight: 600, lineHeight: 1.40, use: "Product names in tiles" }
    body:         { size: 14, weight: 400, lineHeight: 1.50, use: "Standard catalog text" }
    price:        { size: 18, weight: 700, lineHeight: 1.20, use: "Product price, tabular numerals" }
    caption:      { size: 12, weight: 400, lineHeight: 1.40, use: "Metadata, fine print" }
    label:        { size: 11, weight: 700, lineHeight: 1.20, tracking: 0.5, use: "Uppercase tags NEW/SALE" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 2, lg: 4, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#ed1d24", fg: "#ffffff", radius: 2, padding: "14px 24px", font: "15px/700", use: "Primary CTA ADD TO CART; hover #c8161c" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#1a1a1a", radius: 2, padding: "14px 24px", use: "Outlined; 1px #1a1a1a border, hover inverts to #1a1a1a" }
    button-solid-black: { type: button, bg: "#1a1a1a", fg: "#ffffff", radius: 2, padding: "14px 24px", use: "Neutral strong action; hover #333333" }
    button-disabled: { type: button, bg: "#eeeeee", fg: "#999999", radius: 2, use: "Unavailable action" }
    product-tile: { type: card, bg: "#ffffff", radius: 0, padding: "8px", use: "Atomic product tile, grid-gutter separated, no shadow" }
    input: { type: input, bg: "#ffffff", fg: "#1a1a1a", radius: 2, padding: "12px 14px", font: "14px", use: "Text input; 1px #cccccc border, focus #1a1a1a" }
    size-chip: { type: badge, bg: "#ffffff", fg: "#1a1a1a", radius: 2, padding: "8px 14px", use: "Size selector; 1px #cccccc border, selected 2px #1a1a1a" }
    sale-flag: { type: badge, bg: "#ed1d24", fg: "#ffffff", radius: 0, padding: "2px 6px", font: "11px/700", use: "SALE/LIMITED uppercase flag" }
  components_harvested: true
---

# Design System Inspiration of Uniqlo (ユニクロ)

## 1. Visual Theme & Atmosphere

Uniqlo is the global apparel brand of Japan's Fast Retailing, and its design language is the visual translation of one idea: **LifeWear** -- simple, high-quality, everyday clothing "Made for All." The interface mirrors the product philosophy with almost literal fidelity. Where the clothing is engineering disguised as plainness, the website is a precise, gridded, near-monochrome canvas where a single saturated red (`#ed1d24`) does all the talking. The page opens on pure white (`#ffffff`) with near-black text (`#1a1a1a`), and the only chromatic event on most screens is the Uniqlo red -- in the logo, in price tags, in sale flags, in the primary CTA. Color is rationed like a scarce resource, which makes every red mark read as a deliberate signal rather than decoration.

The logo, designed by **Kashiwa Sato** in 2006, is the design system in miniature: a white katakana-inspired wordmark locked into a red square that deliberately echoes the Japanese flag (Hinomaru). That red square is the brand's load-bearing geometry -- a hard-edged rectangle, no rounding, maximum contrast. The whole site inherits that logic: rectangles, hard 90-degree corners, a strict modular grid of product tiles, and typography set in a clean geometric sans (TT Commons Pro on the modern web build, with Helvetica Neue / Arial as the historical fallback, and Hiragino Kaku Gothic for Japanese). Nothing is pill-shaped, nothing is soft, nothing apologizes for being a product catalog.

What defines Uniqlo visually is **catalog rigor**: dense, evenly-spaced grids of garment photography on white, where the product is the hero and the chrome recedes to black-and-white. The aesthetic is closer to a Muji-adjacent Japanese retail clarity than to the aspirational editorial mood of luxury fashion or the chaotic density of fast-fashion competitors. It is fashion presented as infrastructure -- orderly, legible, repeatable at the scale of thousands of SKUs.

**Key Characteristics:**
- Uniqlo Red (`#ed1d24`, Pantone 485 C) as the single brand accent -- rationed, never decorative
- Pure white (`#ffffff`) canvas with near-black (`#1a1a1a`) text -- maximum legibility, no warmth tax
- Hard 90-degree corners everywhere -- the red square logo's geometry inherited site-wide (radius 0-2px)
- TT Commons Pro geometric sans (web), Hiragino Kaku Gothic (Japanese), Helvetica/Arial fallback
- Strict modular product grid -- 2-up mobile, 3-4-up desktop, even gutters, repeating tiles
- Bold uppercase labels and price-forward hierarchy -- the price is a first-class typographic citizen
- Flat, shadowless surfaces -- depth comes from grid and whitespace, not elevation
- Bilingual-native typography -- Japanese and Latin set with equal care, neither subordinate

## 2. Color Palette & Roles

### Primary
- **Uniqlo Red** (`#ed1d24`): The brand color. Pantone 485 C, RGB(237,29,36), CMYK(1,99,97,0). Logo background, primary CTA, sale/price flags, active states, error emphasis. Unchanged since the 2006 Kashiwa Sato rebrand. This is the *only* saturated hue in the entire system.
- **Pure White** (`#ffffff`): Page background, card surfaces, logo wordmark, text on red. The default canvas -- everything sits on white.
- **Near Black** (`#1a1a1a`): Primary text, headings, navigation labels, product names. Not pure `#000000` -- a hair softer to reduce harshness on long catalog scans.

### Brand (Logo / Marketing)
- **Hinomaru Red** (`#ed1d24`): The red square. Same value as primary -- the logo and the UI accent are intentionally the *same* red, unlike brands that split brand-red from UI-red.
- **Logo White** (`#ffffff`): The katakana wordmark, always knocked out of the red square. Never inverted (red text on white square is not the lockup).

### Text Scale
- **Heading** (`#1a1a1a`): Product names, section titles, strong labels.
- **Body** (`#333333`): Standard reading text, descriptions, paragraph copy.
- **Secondary** (`#666666`): Sub-labels, metadata, secondary product info, helper text.
- **Tertiary / Muted** (`#999999`): Placeholder text, disabled labels, fine print, struck-through original prices.

### Semantic
- **Sale / Price Red** (`#ed1d24`): Sale prices, discount flags, "限定" / "LIMITED OFFER" tags. The red doubles as the price-attention color -- there is no separate "sale orange."
- **Error Red** (`#ed1d24` / `#d0021b`): Form errors, validation failures. Reuses brand red; deeper `#d0021b` for error text on white when extra contrast is needed.
- **Success Green** (`#1a8917`): Order confirmation, in-stock indicators, "added to cart." Used sparingly -- green is functional, never decorative.
- **Info Blue** (`#0070c9`): Informational links, size-guide links, shipping notices. Restrained, utilitarian.

### Neutral Scale
- **Gray 50** (`#f5f5f5`): Lightest surface, secondary section backgrounds, hover fills, skeleton base.
- **Gray 100** (`#eeeeee`): Card fills, disabled button surfaces, input backgrounds.
- **Gray 200** (`#e0e0e0`): Default borders, dividers, grid lines, input outlines.
- **Gray 300** (`#cccccc`): Stronger borders, inactive controls.
- **Gray 500** (`#999999`): Muted text, placeholders, struck prices.
- **Gray 700** (`#666666`): Secondary text.
- **Gray 900** (`#1a1a1a`): Primary text, near-black.

### Surface & Borders
- **Border Default** (`#e0e0e0`): Standard dividers, product-tile separators, input borders, table rules.
- **Border Strong** (`#1a1a1a`): Emphasized outlines -- outlined "secondary" buttons, selected swatches, active filter chips.
- **Overlay Scrim** (`rgba(0,0,0,0.5)`): Modal/drawer backdrop. Neutral black, no tint.

## 3. Typography Rules

### Font Family
- **Primary (Latin/web)**: `"TT Commons Pro", "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Japanese**: `"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Noto Sans JP", sans-serif`
- **Logo wordmark**: Custom katakana-inspired geometric sans (Kashiwa Sato, 2006) -- not used for body text, lockup only.
- **Numerals**: Tabular figures for prices and size charts; proportional for running copy.

The system is a clean geometric sans with even stroke weight and open counters -- chosen for maximum legibility at catalog density across Latin, Japanese, and dozens of localized scripts. There are no serifs, no display faces, no decorative type anywhere in the product experience.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | TT Commons Pro | 48px (3.00rem) | 700 | 1.10 | -0.5px | Campaign headlines, hero banners |
| Display Large | TT Commons Pro | 36px (2.25rem) | 700 | 1.15 | -0.3px | Feature section heads |
| Heading 1 | TT Commons Pro | 28px (1.75rem) | 700 | 1.20 | normal | Page titles, category heads |
| Heading 2 | TT Commons Pro | 22px (1.38rem) | 700 | 1.25 | normal | Sub-section titles |
| Heading 3 | TT Commons Pro | 18px (1.13rem) | 600 | 1.33 | normal | Card group titles |
| Subtitle | TT Commons Pro | 16px (1.00rem) | 600 | 1.40 | normal | Product names in tiles |
| Body Large | TT Commons Pro | 16px (1.00rem) | 400 | 1.50 | normal | Descriptions, intro copy |
| Body | TT Commons Pro | 14px (0.88rem) | 400 | 1.50 | normal | Standard catalog text |
| Body Small | TT Commons Pro | 13px (0.81rem) | 400 | 1.46 | normal | Secondary product info |
| Caption | TT Commons Pro | 12px (0.75rem) | 400 | 1.40 | normal | Metadata, fine print |
| Price | TT Commons Pro | 16px-20px | 700 | 1.20 | normal | Product price -- tabular numerals |
| Sale Price | TT Commons Pro | 16px-20px | 700 | 1.20 | normal | `#ed1d24`, tabular numerals |
| Label / Tag | TT Commons Pro | 11px (0.69rem) | 700 | 1.20 | 0.5px | UPPERCASE -- "NEW", "LIMITED", "SALE" |
| Nav Link | TT Commons Pro | 13px (0.81rem) | 600 | 1.20 | normal | Top-nav category links |

### Principles
- **Price is typography.** Prices use 700 weight and tabular numerals, sized as large as a subtitle. The price never inherits body weight -- it is a headline-class element in every product tile.
- **Uppercase for tags, sentence case for content.** Status tags and category labels ("NEW", "LIMITED OFFER", "MEN") are uppercase with +0.5px tracking; product names and descriptions are sentence case for readability.
- **Two weights do the work.** 400 (body) and 700 (headings, prices, tags) carry ~90% of the UI; 600 is the bridge for subtitles and nav. No light weights -- legibility over elegance.
- **Bilingual parity.** Japanese (Hiragino) and Latin (TT Commons Pro) are weighted to sit harmoniously on the same line; neither script is treated as the fallback. Localized scripts inherit the same hierarchy.
- **Tight tracking on display only.** Negative letter-spacing appears at 36px+ to tighten campaign headlines; body and UI text use normal tracking.

## 4. Component Stylings

### Buttons

Uniqlo buttons are rectangular, hard-cornered, and high-contrast. The system is deliberately small: a red primary, a black/outlined secondary, and a disabled state. Radius stays at 0-2px -- the red-square logo geometry inherited.

**Primary (Red)**
- Background: `#ed1d24`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 14px 24px
- Font: 15px / 700 / TT Commons Pro
- Hover: background darkens to `#c8161c`
- Use: Primary CTA -- "ADD TO CART" (カートに入れる), "BUY NOW", "CHECKOUT"
- Height: ~48px, often full-width on mobile

**Secondary (Outlined Black)**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#1a1a1a`
- Radius: 2px
- Padding: 14px 24px
- Font: 15px / 700 / TT Commons Pro
- Hover: background `#1a1a1a`, text `#ffffff` (inverts)
- Use: Secondary action -- "ADD TO WISHLIST", "FIND IN STORE", "CONTINUE SHOPPING"

**Solid Black**
- Background: `#1a1a1a`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 14px 24px
- Font: 15px / 700 / TT Commons Pro
- Hover: background `#333333`
- Use: Neutral strong action where red would over-signal -- account/settings CTAs, "SIGN IN"

**Tertiary / Text Link**
- Background: transparent
- Text: `#1a1a1a` with underline
- Border: none
- Font: 14px / 600 / TT Commons Pro
- Hover: text `#ed1d24`
- Use: Inline links -- "View size guide", "See details", "More colors"

**Disabled**
- Background: `#eeeeee`
- Text: `#999999`
- Border: none
- Radius: 2px
- Use: Unavailable action (out of stock, incomplete form). Geometry identical to active so layout is stable.

### Product Tiles (Cards)

The product tile is the atomic unit of the entire site -- the design system exists primarily to render thousands of these in a grid.

**Standard Product Tile**
- Background: `#ffffff`
- Border: none (separated by grid gutter, not borders)
- Radius: 0px on image, 0px on tile
- Image: 1:1.33 (3:4 portrait) garment photo on white or `#f5f5f5`
- Padding: 0 on image, 8px-12px on text block below
- Product name: 14px / 600 / `#1a1a1a`
- Price: 16px / 700 / `#1a1a1a` (or `#ed1d24` if on sale, with struck `#999999` original)
- Color swatches: row of 16px hard-edged squares below price
- Tag (optional): top-left "NEW" / "LIMITED" / "SALE" flag in `#ed1d24` or `#1a1a1a`
- Hover: subtle image swap (alternate view), no shadow lift

**Content / Feature Card**
- Background: `#ffffff` or `#f5f5f5`
- Border: none
- Radius: 0px
- Padding: 24px-32px
- Use: LifeWear story blocks, fabric-technology features, campaign tiles

### Inputs & Forms

**Text Input**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#cccccc`
- Radius: 2px
- Padding: 12px 14px
- Font: 14px / 400 / TT Commons Pro
- Placeholder: `#999999`
- Focus: border `#1a1a1a` (1px), no glow
- Error: border `#ed1d24`, helper text `#ed1d24` 12px below

**Select / Dropdown**
- Same geometry as text input
- Chevron indicator `#666666`, right-aligned
- Use: Size, quantity, country/region pickers

### Swatches (Color / Size Selectors)

**Color Swatch**
- Shape: hard-edged square, ~24px
- Border: 1px solid `#e0e0e0` (unselected)
- Selected: 2px solid `#1a1a1a` outline with 2px white inset gap
- Radius: 0px

**Size Chip**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#cccccc`
- Radius: 2px
- Padding: 8px 14px
- Selected: border `#1a1a1a` (2px), background `#ffffff`
- Disabled (out of stock): `#cccccc` text, diagonal strike, `#eeeeee` bg

### Tags / Flags

**Sale Flag**
- Background: `#ed1d24`
- Text: `#ffffff`
- Border: none
- Radius: 0px
- Padding: 2px 6px
- Font: 11px / 700 / TT Commons Pro, UPPERCASE, +0.5px tracking
- Use: "SALE", "LIMITED OFFER", "限定価格"

**New / Neutral Flag**
- Background: `#1a1a1a`
- Text: `#ffffff`
- Border: none
- Radius: 0px
- Padding: 2px 6px
- Font: 11px / 700 / TT Commons Pro, UPPERCASE
- Use: "NEW", "ONLINE EXCLUSIVE"

### Navigation

- Top bar: white background, `#1a1a1a` text, red square logo top-left
- Category links: 13px / 600 / `#1a1a1a`, generous horizontal spacing, hover underline
- Mega-menu: full-width white drawer, columned category lists, no shadow (1px `#e0e0e0` bottom border separates from content)
- Utility icons (search, account, wishlist, cart): `#1a1a1a` line icons, ~20px
- Sticky on scroll with a subtle 1px `#e0e0e0` bottom border, no blur

### Tabs / Filters

**Filter Chip**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#cccccc`
- Radius: 2px
- Padding: 8px 14px
- Active: border `#1a1a1a` (2px) or filled `#1a1a1a` bg with white text
- Use: Category/attribute filters on listing pages

### Toasts / Notifications

**Default**
- Background: `#1a1a1a`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 14px 18px
- Font: 14px / 600 / TT Commons Pro
- Use: "Added to cart", "Saved to wishlist" -- brief, auto-dismiss

---

**Verified:** 2026-06-06
**Tier 1 sources:** uniqlo.com (live catalog — grid geometry, white canvas, red CTA, hard-cornered tiles); Kashiwa Sato 2006 logo system (red square + katakana wordmark). Web build typeface TT Commons Pro confirmed via Fonts In Use / TypeType records; Japanese rendered in Hiragino Kaku Gothic. · https://www.uniqlo.com (live production site)
**Tier 2 sources:** brandpalettes.com/uniqlo-colors (Uniqlo Red `#ed1d24`, Pantone 485 C, RGB 237/29/36 — unchanged since 2006); color-name.com (`#ED1D24`); brandyhq.com (`#ed1d24`, `#ffffff` palette).
**Conflicts resolved:** Hint suggested `#FF0000`-ish + Helvetica; corrected to verified `#ed1d24` (Pantone 485 C) and TT Commons Pro / Hiragino (Helvetica Neue retained only as historical fallback). Brand-red and UI-red are intentionally the same value.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Product-tile internal text spacing: tight 8-12px
- Section spacing: generous 48-64px between content blocks
- Grid gutters: 8-16px on mobile, 16-24px on desktop

### Grid & Container
- Max content width: ~1280px (centered, with side margins on large screens)
- Product grid: 2 columns mobile, 3 columns tablet, 4 columns desktop (sometimes 3-up for larger imagery)
- Even gutters, no per-tile borders -- whitespace is the divider
- Hero banners: full-bleed edge-to-edge, often with overlaid red/white typography
- The grid is **strict and repeating** -- the catalog reads as a uniform module system, deliberately un-editorial

### Whitespace Philosophy
- **Product as hero, chrome as silence.** The garment photo gets the space; navigation, filters, and labels recede to small black-on-white. Whitespace exists to isolate each product so it can be judged on its own.
- **Even rhythm over drama.** Unlike luxury fashion's asymmetric editorial layouts, Uniqlo uses an even, predictable grid. The lack of layout surprise *is* the brand -- order, reliability, scale.
- **Generous between, tight within.** Big gaps between sections (48-64px); tight, efficient spacing inside a tile (8-12px). The macro feels calm; the micro feels dense and practical.

### Border Radius Scale
- Sharp (0px): Product images, swatches, tags, hero banners -- the default
- Minimal (2px): Buttons, inputs, chips -- a barely-there softening for tap affordance
- Nothing above 2px. No pills, no rounded cards. Hard corners are the brand's geometry.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Product tiles, grid, page background — the default |
| Border (Level 1) | `1px solid #e0e0e0` | Separation where needed — nav bottom edge, input outlines |
| Subtle (Level 2) | `0px 1px 3px rgba(0,0,0,0.08)` | Dropdowns, sticky add-to-cart bar |
| Floating (Level 3) | `0px 2px 8px rgba(0,0,0,0.12)` | Mega-menu, mini-cart drawer, popovers |
| Modal (Level 4) | `0px 4px 16px rgba(0,0,0,0.16)` + scrim `rgba(0,0,0,0.5)` | Size guide, quick-view, dialogs |

**Shadow Philosophy**: Uniqlo is fundamentally a **flat, shadowless system**. Depth is communicated through the grid, whitespace, and hard borders -- not elevation. The product grid has zero shadow; tiles separate by gutter alone. Shadows appear *only* on truly floating UI (menus, drawers, modals) and even then they are minimal, neutral black, single-layer. There are no brand-tinted shadows, no multi-layer depth stacks, no glassmorphism. The aesthetic is print-catalog flatness: everything sits on the same plane until it explicitly floats above the page. This restraint reinforces the "honest, no-tricks" product positioning -- the clothing isn't dramatized, and neither is the UI.

### No Blur
- Sticky nav uses a solid white background, not backdrop blur
- Modal scrims are flat black at 50% opacity, no blur on the underlying content

## 7. Do's and Don'ts

### Do
- Use Uniqlo Red (`#ed1d24`) only for brand, primary CTA, prices/sale, and errors -- ration it
- Keep the canvas pure white (`#ffffff`) with near-black (`#1a1a1a`) text
- Use hard corners -- radius 0px on images/tags/swatches, max 2px on buttons/inputs
- Make the price a first-class element: 700 weight, tabular numerals, subtitle-sized
- Lay products on a strict, even, repeating grid (2/3/4-up) with whitespace gutters
- Use uppercase + tracking for tags ("NEW", "SALE", "LIMITED OFFER")
- Set Japanese in Hiragino Kaku Gothic and Latin in TT Commons Pro with equal weight
- Keep surfaces flat -- borders and whitespace over shadows

### Don't
- Don't use `#ff0000` -- the verified brand red is `#ed1d24` (Pantone 485 C)
- Don't introduce a second accent color -- red is the only saturated hue
- Don't use pill or large-radius shapes -- the brand geometry is the hard-edged red square
- Don't add shadows to product tiles -- the grid is flat by design
- Don't use brand-tinted or multi-layer shadows -- shadows are minimal, neutral, floating-UI only
- Don't make the price visually subordinate to the product name -- price is headline-class
- Don't use light font weights -- the system is 400 / 600 / 700 only
- Don't dramatize -- no gradients, no glass, no editorial asymmetry; order is the aesthetic

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | 2-column product grid, full-width CTAs, hamburger nav, sticky add-to-cart bar |
| Tablet | 768-1024px | 3-column grid, condensed top nav, side filter drawer |
| Desktop | 1024-1440px | 4-column grid, full horizontal nav with mega-menu, inline filters |
| Large Desktop | >1440px | Centered ~1280px content, generous side margins, larger hero imagery |

### Touch Targets
- Buttons: ~48px height, full-width on mobile
- Size/color chips: minimum 40x40px tap area
- Nav and utility icons: ~44px tap target with padding
- Product tiles: entire tile is tappable

### Collapsing Strategy
- Top nav: full horizontal mega-menu → hamburger drawer on mobile
- Filters: inline filter bar → bottom-sheet / side-drawer on mobile
- Product grid: 4-up → 3-up → 2-up (never 1-up — pairs preserve catalog scanning)
- Add-to-cart: inline button → sticky bottom bar on mobile PDP
- Hero typography: 48px → 28px, maintaining 700 weight and red/white contrast

### Image Behavior
- Garment photos maintain 3:4 portrait aspect at all breakpoints
- Hero banners go full-bleed edge-to-edge; text reflows but stays high-contrast
- Lazy-loaded grid images fade in over a `#f5f5f5` placeholder
- Zoom on PDP: pinch/hover magnify, image stays sharp on white

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / Brand: Uniqlo Red (`#ed1d24`)
- CTA Hover: Dark Red (`#c8161c`)
- Background: Pure White (`#ffffff`)
- Secondary surface: Gray 50 (`#f5f5f5`)
- Heading text: Near Black (`#1a1a1a`)
- Body text: Dark Gray (`#333333`)
- Secondary text: Gray (`#666666`)
- Muted / placeholder: Gray (`#999999`)
- Border: Gray 200 (`#e0e0e0`)
- Sale / Error: Uniqlo Red (`#ed1d24`)
- Success: Green (`#1a8917`)
- Strong neutral button: Near Black (`#1a1a1a`)

### Example Component Prompts
- "Create a product tile: white bg, 3:4 portrait garment photo (no radius), product name 14px weight 600 #1a1a1a, price 16px weight 700 #1a1a1a tabular numerals, row of 16px hard-edged color swatches below, optional top-left 'NEW' flag (#1a1a1a bg, white 11px uppercase). No shadow — separated by grid gutter."
- "Build an add-to-cart button: #ed1d24 bg, white text, 15px weight 700, 2px radius, 14px 24px padding, full-width on mobile, ~48px tall. Hover darkens to #c8161c."
- "Design a secondary button: white bg, #1a1a1a text, 1px solid #1a1a1a border, 2px radius, 15px weight 700. Hover inverts to #1a1a1a bg with white text. Use for 'FIND IN STORE'."
- "Create a sale price block: original price 14px #999999 strikethrough, sale price 18px weight 700 #ed1d24 tabular numerals, small 'SALE' flag #ed1d24 bg white 11px uppercase 0.5px tracking."
- "Lay out a product grid: white bg, 4 columns desktop / 2 mobile, even 16px gutters, no tile borders or shadows. Each tile is a tappable product card."
- "Design a size selector: row of size chips, white bg, #1a1a1a text, 1px #cccccc border, 2px radius, 8px 14px padding. Selected chip gets 2px #1a1a1a border. Out-of-stock chips are #cccccc with a diagonal strike."

### Iteration Guide
1. The canvas is always pure white `#ffffff`; text is near-black `#1a1a1a` — never pure black, never tinted backgrounds for primary content
2. Red `#ed1d24` is rationed — brand, primary CTA, price/sale, error. If two reds are competing on a screen, remove one
3. Hard corners: 0px on images/tags/swatches, 2px max on buttons/inputs. No pills, ever
4. Price is headline-class: 700 weight, tabular numerals, sized like a subtitle
5. Product grid is strict and even (2/3/4-up), separated by whitespace gutters, zero shadow
6. Two-to-three weights only: 400 body, 600 subtitle/nav, 700 headings/prices/tags
7. Japanese in Hiragino Kaku Gothic, Latin in TT Commons Pro — equal weight, neither is a fallback
8. Flat by default; shadows only on floating UI (menus, drawers, modals), minimal and neutral

---

## 10. Voice & Tone

Uniqlo's voice is plain, functional, and quietly confident -- the verbal equivalent of a well-made white T-shirt. It describes what a garment *does* (fabric technology, fit, care) before how it makes you *feel*. There is no hype, no seasonal urgency theater beyond honest sale labeling, no aspirational lifestyle fantasy. The register is the same in Japanese and in every localized market: clear, respectful, practical. The brand line -- **"LifeWear"** and **"Made for All"** -- sets the tone: clothing as a universal daily utility, not a status signal.

| Context | Tone |
|---|---|
| Product names | Descriptive and functional. "Ultra Light Down Jacket", "AIRism Cotton Crew Neck T-Shirt", "HEATTECH". The technology *is* the name. |
| Product descriptions | Plain, benefit-first. "Lightweight warmth that packs into its own pouch." Never "Elevate your winter wardrobe." |
| CTAs | Direct imperatives, often uppercase. "ADD TO CART", "FIND IN STORE", "CHECKOUT" (カートに入れる). |
| Sale labels | Honest and specific. "LIMITED OFFER", "¥1,990", a struck original price. Never fake countdown pressure. |
| LifeWear / brand copy | Calm, almost philosophical. "Simple made better." "Clothing that makes your life better." Earnest, not grandiose. |
| Fabric / technology | Educational. Explains HEATTECH/AIRism/Ultra Light Down like a spec sheet a customer can trust. |
| Empty / error states | Practical and blameless. "This item is sold out in your size." plus an alternative, never an apology theater. |
| Legal / care | Formal, precise — care instructions and policy read like clear documentation. |

**Forbidden phrases.** "Revolutionary", "must-have", "game-changer", aspirational lifestyle fantasy ("live your best life"), false scarcity ("only 2 left — hurry!"), exclamation-stacked hype. Uniqlo sells utility honestly; manufactured urgency contradicts the LifeWear thesis.

## 11. Brand Narrative

Uniqlo (ユニクロ) is the flagship brand of **Fast Retailing**, founded by **Tadashi Yanai (柳井正)**, who opened the first "Unique Clothing Warehouse" store in **Hiroshima in 1984** (the contracted name "Uni-Qlo" came from a registration typo that stuck). Yanai inherited his father's roadside men's tailoring business and reimagined it as something radical for Japanese retail: a self-service, warehouse-style store selling well-made basics at honest prices, free of the formality and markup of department-store fashion.

The brand's modern identity dates to **2006**, when Yanai commissioned designer **Kashiwa Sato** to create the global visual system: the red square logo with its white katakana-inspired wordmark, deliberately evoking the Japanese flag (Hinomaru) to signal a Japanese brand thinking globally from the start. That same year Uniqlo opened its New York and London flagships, and the red-and-white system has been unchanged since.

The organizing philosophy is **LifeWear** -- articulated by Yanai as "simple, high-quality, everyday clothing designed to improve everyone's life." LifeWear is explicitly **"Made for All"**: clothing engineered to transcend age, gender, ethnicity, and trend. Uniqlo's competitive position is the inverse of fast fashion -- not chasing micro-trends, but perfecting timeless basics through textile engineering (HEATTECH thermal base layers, AIRism breathable fabric, Ultra Light Down). The product is innovation disguised as plainness, and the design system performs the same trick: it looks like a plain catalog, but every grid measure, every rationed red mark, and every hard corner is deliberate.

What Uniqlo refuses: the aspirational fantasy of luxury fashion, the disposable trend-churn of fast fashion, the visual chaos of overcrowded retail. What it embraces: Japanese retail clarity, honest pricing, function-first storytelling, and an order so consistent it reads as trust. The red square is a flag planted on that idea.

## 12. Principles

1. **Ration the red.** `#ed1d24` is the only saturated color in the system, so every appearance is a signal -- brand, CTA, price, error. Decorative red dilutes the signal and is forbidden. If red competes with red on a screen, one of them is wrong.
2. **Product as hero, chrome as silence.** The garment gets the space and the light; navigation, filters, and labels recede to small black-on-white. The UI's job is to disappear so the product can be judged honestly.
3. **Order is the aesthetic.** A strict, even, repeating grid is not boring -- it is the brand. Predictability communicates reliability and scale. Editorial asymmetry belongs to luxury fashion; Uniqlo is infrastructure.
4. **Hard corners, always.** The red-square logo's geometry governs the whole system. Radius stays at 0-2px. Pills and soft cards contradict the brand's planted-flag rectangularity.
5. **Price is headline-class.** A price set in 700-weight tabular numerals at subtitle size respects the customer's reason for being there. Demoting the price to fine print is a betrayal of an honest-value brand.
6. **Flat over deep.** Depth comes from grid and whitespace, not elevation. Shadows appear only when something genuinely floats. A flat catalog says "no tricks" -- which is the product promise.
7. **Bilingual by birth.** Japanese and Latin are co-equal, set with equal care. Localized markets inherit the same hierarchy; no script is a second-class fallback. The brand was global from its 2006 rebrand onward.
8. **Honesty over urgency.** Sales are labeled plainly with real prices; there is no manufactured scarcity. The voice describes what clothing *does*, not the life it promises. LifeWear is a utility claim, and the UI keeps that promise.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Uniqlo customer segments (value-conscious everyday shoppers, function-first buyers, global basics-wardrobe builders), not individual people.*

**Aiko Tanaka, 34, Tokyo.** Working mother, shops Uniqlo online during her commute. Buys HEATTECH for the whole family every autumn and AIRism in summer. Reads fabric descriptions carefully -- she trusts Uniqlo precisely because the site explains *why* a fabric is warm or breathable rather than just calling it "cozy." Expects the size chart to be accurate and the price to be exactly what the tag says. Annoyed by any retailer that buries the real price under fake "was/now" theater. Reads the site in Japanese; the Hiragino type and clean grid feel like home.

**Marcus Hale, 41, Chicago.** Software manager who has standardized his wardrobe on Uniqlo basics -- the same Supima T-shirt and chino in multiple colors. Values the strict grid: he can scan a category page in seconds because every tile is identical in structure. Does not want to be sold a lifestyle; wants to find the gray crewneck, confirm it's in stock in M, and check out in under a minute. The flat, shadowless, no-nonsense UI is exactly why he shops here instead of trend-chasing competitors.

**Priya Nair, 27, London.** Design-conscious shopper who appreciates Uniqlo as "Muji for clothes" -- minimal, honest, well-engineered. Follows the LifeWear collaborations (the brand's restraint makes the occasional designer collab feel meaningful). Notices and respects the typography and the rationed red. Would immediately distrust a redesign that added gradients, shadows, or a second accent color -- to her the flatness *is* the credibility.

**Mr. Sato, 58, Osaka.** Long-time customer since the warehouse-store days. Buys reliable basics -- socks, undershirts, the same down vest -- and values that Uniqlo's pricing and product names are plain and consistent year to year. Uses the website occasionally but mostly to check store stock. The clear, large price and the "FIND IN STORE" button matter more to him than any campaign imagery.

## 14. States

| State | Treatment |
|---|---|
| **Empty (cart)** | White canvas, single near-black line at 16px: "Your cart is empty." One red primary CTA: "CONTINUE SHOPPING". No illustration, no upsell theater. |
| **Empty (search no results)** | Gray (`#666666`) single line: "No items found." Suggested categories listed below as plain text links. Filter summary stays visible so the user can widen scope. |
| **Empty (wishlist)** | Plain line "Your wishlist is empty." plus a link to "Browse new arrivals". Honest about the empty state. |
| **Loading (grid first paint)** | Skeleton tiles at exact final dimensions, `#f5f5f5` base with 1.2s shimmer. Image blocks at 3:4, name/price as short bars. Prices never skeleton wider than a real price. |
| **Loading (in-place refresh)** | Subtle red 2px progress bar at top of the listing; previous tiles stay visible. No blocking overlay. |
| **Error (form validation)** | Field-level. `#ed1d24` border on the input, 12px `#ed1d24` helper text below stating exactly what is wrong ("Enter a valid postal code"). Never just "Invalid". |
| **Error (out of stock)** | Size chip shows `#cccccc` text with a diagonal strike; PDP swaps "ADD TO CART" for a `#1a1a1a` "GET STOCK ALERT" or "FIND IN STORE" secondary button. |
| **Error (page-level)** | White screen, single near-black line at 18px stating what failed, red retry button below. No illustration. |
| **Success (added to cart)** | Brief `#1a1a1a` toast, white 14px text: "Added to cart." Mini-cart drawer slides in from right showing the item. No exclamation, no emoji. |
| **Success (order placed)** | Dedicated confirmation screen: green (`#1a8917`) check, order number in tabular numerals, item summary, single "CONTINUE SHOPPING" button. |
| **Skeleton** | `#f5f5f5` blocks at final dimensions, 1.2s neutral shimmer, hard corners matching the flat grid. |
| **Disabled** | Button becomes `#eeeeee` bg with `#999999` text; geometry unchanged so re-enabling is stable. Inputs keep their `#cccccc` border. |
| **Sale** | Original price `#999999` strikethrough, sale price `#ed1d24` 700 weight, "LIMITED OFFER" / "SALE" flag in red. Always shows the real numbers. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection states, swatch picks, focus |
| `motion-fast` | 150ms | Hover image swap, button hover, chip selection |
| `motion-standard` | 250ms | Drawer slide, mini-cart, dropdown, mega-menu reveal |
| `motion-slow` | 350ms | Modal/quick-view open, page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Arriving — drawers, menus, modals |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals — closing drawers, toasts |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — accordions, tabs |

**Explicitly restrained.** No spring, no bounce, no overshoot. Motion is functional and brief, matching the no-tricks product positioning. Nothing animates just to delight; transitions exist to clarify spatial relationships (where the cart drawer came from, what a filter did).

**Signature motions.**

1. **Product image swap.** On hover (desktop) or as a secondary thumbnail (mobile), the tile's primary photo cross-fades to an alternate garment view over `motion-fast`. The tile never lifts or casts a shadow -- the image *changes*, the geometry stays flat.
2. **Mini-cart drawer.** "Add to cart" slides a drawer in from the right edge over `motion-standard / ease-enter`, with a synchronized `rgba(0,0,0,0.5)` scrim fade. Dismissal slides back over `motion-fast / ease-exit`.
3. **Mega-menu reveal.** Hovering a top-nav category drops a full-width white panel over `motion-standard`. The panel appears flat against the page (1px `#e0e0e0` separator), not floating with heavy shadow.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Image swaps become instant cuts, drawers appear without sliding. The catalog stays fully functional; nothing is gated behind animation.

<!--
OmD v0.1 Sources — Uniqlo

Token-level verification:
- Uniqlo Red #ed1d24 (Pantone 485 C, RGB 237/29/36, CMYK 1/99/97/0) — brandpalettes.com/uniqlo-colors,
  color-name.com/uniqlo-red.color, brandyhq.com/brand-guidelines/uniqlo. Palette unchanged since 2006.
- Palette is intentionally minimal: "official colors of Uniqlo are Uniqlo red and white."
- Web typeface TT Commons Pro confirmed via Fonts In Use (fontsinuse.com/uses/73945/uniqlo-website)
  and TypeType (typetype.org/font-in-use/uniqlo). Japanese text in Hiragino Kaku Gothic.
  Helvetica Neue / Arial retained only as historical/fallback stack.
- Logo: red square + white katakana-inspired wordmark designed by Kashiwa Sato (2006),
  evoking the Japanese flag (Hinomaru) — widely documented brand history.

Brand narrative facts (widely documented):
- Fast Retailing founder/CEO Tadashi Yanai; first "Unique Clothing Warehouse" store Hiroshima 1984.
- LifeWear philosophy "simple, high-quality clothing designed to improve everyone's life";
  "Made for All" positioning (uniqlo.com LifeWear content, Wallpaper*, Fast Retailing materials).
- HEATTECH / AIRism / Ultra Light Down as signature textile-technology product lines.

Hint correction: brief suggested #FF0000-ish red + Helvetica. Corrected to verified #ed1d24
(Pantone 485 C) and TT Commons Pro / Hiragino Kaku Gothic. Brand-red and UI-red are the same value
by design.

Personas (§13) are fictional archetypes informed by publicly described Uniqlo customer segments,
not real individuals.

Interpretive claims (e.g., "ration the red", "hard corners inherited from the red-square logo",
"flat catalog says no tricks") are editorial readings connecting Uniqlo's stated LifeWear philosophy
to its visual system, not directly sourced Uniqlo statements.
-->

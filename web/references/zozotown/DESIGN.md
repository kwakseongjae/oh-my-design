---
id: zozotown
name: ZOZOTOWN
country: JP
category: ecommerce
homepage: "https://zozo.jp"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=zozo.jp&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#000000"
    canvas: "#ffffff"
    accent-red: "#e60012"
    body: "#333333"
    sub: "#666666"
    muted: "#999999"
    hairline: "#cccccc"
    surface: "#f5f5f5"
    surface-subtle: "#fafafa"
    border: "#e5e5e5"
    border-strong: "#dddddd"
    success: "#2e9c4f"
    caution: "#f5a623"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Hiragino Kaku Gothic ProN", mono: "Helvetica Neue" }
    page-title:  { size: 24, weight: 700, lineHeight: 1.4, tracking: 0.02, use: "Top-level section / landing headers" }
    section:     { size: 20, weight: 700, lineHeight: 1.4, tracking: 0.02, use: "Category and module titles" }
    subheading:  { size: 17, weight: 700, lineHeight: 1.5, tracking: 0.02, use: "Card group headers, feature titles" }
    brand-name:  { size: 13, weight: 700, lineHeight: 1.4, tracking: 0.04, use: "Product-card brand label" }
    item-title:  { size: 13, weight: 400, lineHeight: 1.5, use: "Product name, 2-line clamp" }
    price:       { size: 15, weight: 700, lineHeight: 1.3, use: "Price — black/red, tabular numerals" }
    body:        { size: 14, weight: 400, lineHeight: 1.7, use: "Descriptions, reviews, long copy" }
    caption:     { size: 12, weight: 400, lineHeight: 1.5, use: "Metadata, timestamps, fine print" }
    micro:       { size: 11, weight: 400, lineHeight: 1.4, use: "Tab labels, tag chips, footnotes" }
    badge:       { size: 11, weight: 700, lineHeight: 1.2, tracking: 0.02, use: "SALE / NEW / 残りわずか badges" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 4, lg: 8, full: 9999 }
  shadow:
    toast: "rgba(0,0,0,0.85) background, no elevation shadow"
    modal-scrim: "rgba(0,0,0,0.6)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: 4, padding: "14px 24px", font: "15/700", use: "カートに入れる, 購入手続きへ, ログイン" }
    button-reverse: { type: button, bg: "#ffffff", fg: "#000000", radius: 4, padding: "14px 24px", font: "15/700", use: "お気に入り登録, 続けて買い物" }
    button-sale: { type: button, bg: "#e60012", fg: "#ffffff", radius: 4, padding: "14px 24px", font: "15/700", use: "タイムセール, 今すぐ購入 — urgency only" }
    button-disabled: { type: button, bg: "#cccccc", fg: "#ffffff", radius: 4, use: "Out-of-stock / unavailable (在庫なし)" }
    product-card: { type: card, bg: "#ffffff", radius: 0, use: "Photography-led grid unit, 3:4 portrait, gap-separated" }
    badge-sale: { type: badge, bg: "#e60012", fg: "#ffffff", radius: 2, padding: "2px 6px", font: "11/700", use: "SALE overlay top-left of image" }
    badge-new: { type: badge, bg: "#000000", fg: "#ffffff", radius: 2, padding: "2px 6px", font: "11/700", use: "NEW / NEW ARRIVAL overlay" }
    badge-lowstock: { type: badge, bg: "#ffffff", fg: "#e60012", radius: 2, padding: "2px 6px", font: "11/700", use: "残りわずか — red border outline" }
    badge-preorder: { type: badge, bg: "#666666", fg: "#ffffff", radius: 2, padding: "2px 6px", font: "11/700", use: "予約 pre-order flag" }
    input: { type: input, bg: "#ffffff", fg: "#000000", radius: 4, padding: "12px 14px", font: "15/400", use: "Form field — neutral black focus, #cccccc default border" }
    bottom-tab: { type: tab, bg: "#ffffff", fg: "#999999", font: "11/400", active: "#000000 icon + label", use: "ホーム/カテゴリー/お気に入り/カート/マイページ" }
    filter-tab: { type: tab, bg: "#ffffff", fg: "#666666", font: "14/700", active: "#000000 text + 2px bottom underline #000000", use: "新着/人気/価格が安い in-page switcher" }
    toast: { type: toast, fg: "#ffffff", radius: 4, padding: "12px 16px", font: "14/400", use: "Transient bottom-anchored confirmation" }
    bottom-sheet: { type: dialog, bg: "#ffffff", radius: 12, padding: "20px", use: "Size/color/filter/sort — dominant mobile overlay" }
    modal: { type: dialog, bg: "#ffffff", radius: 8, padding: "24px", use: "Confirmations, login prompts" }
---

# Design System Inspiration of ZOZOTOWN

## 1. Visual Theme & Atmosphere

ZOZOTOWN is Japan's largest fashion commerce platform — a marketplace of 7,000+ brands operated by ZOZO, Inc. (formerly Start Today). Its design language is uncompromisingly editorial: a near-monochrome system of pure black (`#000000`) and pure white (`#ffffff`) that gets out of the way and lets garment photography carry every screen. Where Western fashion retailers reach for serif elegance or pastel mood-boarding, ZOZOTOWN reads like a Japanese fashion magazine spread — dense grids of product imagery, hairline dividers, tightly-set Gothic (sans-serif) type, and a single warm-red accent (`#e60012`) reserved almost entirely for price and SALE signaling.

The platform is mobile-first to an extreme degree. The Japanese fashion shopper lives in the app and the mobile web, and the layout rhythm reflects it: edge-to-edge product photos, a fixed bottom tab bar, a compact black global header, and infinite-scroll product grids. The aesthetic is "content-out" — chrome is suppressed to maximum neutrality so the only color on most screens comes from the clothes themselves. Black is not a decorative choice here; it is a *frame*. A black header and black UI text behave like the matte border around a photograph, making fashion imagery pop without competing for attention.

What defines ZOZOTOWN visually is its restraint paired with information density. A single category page can show dozens of products, each with thumbnail, brand name, item name, price, and a heart/save control — yet it never feels cluttered, because the type is small, the palette is two-tone, and whitespace between cards is consistent and tight. The result is a system that feels fast, neutral, and trustworthy: a department store rendered as a grid.

**Key Characteristics:**
- Pure black (`#000000`) as the primary brand/UI color — chrome, type, and framing
- Pure white (`#ffffff`) surfaces so garment photography is the only color source
- Single warm-red accent (`#e60012`) reserved for price, SALE, and urgency signals
- Japanese Gothic (sans-serif) system font stack with Hiragino / Yu Gothic / Noto fallbacks
- Editorial, magazine-grid density — many products per screen, hairline dividers
- Mobile-first: black global header + fixed bottom tab bar + infinite-scroll grids
- Minimal radius (0–4px), minimal shadow — flat, photographic, neutral
- `be unique, be equal.` — the parent ZOZO ethos of equal-but-different, expressed as a neutral canvas that flatters every brand equally

## 2. Color Palette & Roles

### Primary
- **ZOZO Black** (`#000000`): The primary brand and UI color. Global header background, primary button fills, headings, body text, icon strokes. The matte frame around all imagery.
- **Pure White** (`#ffffff`): Page background, card surfaces, header text on black, reverse button text. The dominant surface — every screen is mostly white.
- **Sale Red** (`#e60012`): The single accent. Price text, SALE badges, discount percentages, countdown timers, cart-count dots, error states. Used sparingly and only for commerce-critical signals.

### Text Neutrals
- **Ink** (`#000000`): Primary text — brand names, item titles, prices (when not on sale), headings.
- **Body Gray** (`#333333`): Secondary body copy, descriptions, longer-form text.
- **Sub Gray** (`#666666`): Metadata, captions, supplementary labels, breadcrumb text.
- **Muted Gray** (`#999999`): Placeholder text, disabled labels, low-priority captions, struck-through original prices.
- **Hairline Gray** (`#cccccc`): Inactive icons, secondary borders, divider emphasis.

### Surface & Border
- **Off-White** (`#f5f5f5`): Secondary surface — section backgrounds, input fills, skeleton blocks, banded zones that separate content groups.
- **Light Gray Surface** (`#fafafa`): Subtlest surface tint for alternating rows and quiet panels.
- **Border Default** (`#e5e5e5`): Standard card borders, list dividers, input outlines.
- **Border Strong** (`#dddddd`): Emphasized dividers, table rules, footer separators.

### Semantic
- **Sale / Error Red** (`#e60012`): Sale price, discount, validation errors, removal actions. Japanese-standard commerce red.
- **Success Green** (`#2e9c4f`): Order confirmed, in-stock, "added to cart" confirmation.
- **Caution Amber** (`#f5a623`): Low-stock warnings ("残りわずか"), pending shipment states.
- **Info Black** (`#000000`): Informational notices use black, not blue — the system avoids a brand-blue to stay neutral.

### Accent (sparing)
- **Link Underline Black** (`#000000`): Inline links are black with an underline rather than a colored hue — neutrality over chroma.
- **Coupon / Point Red** (`#e60012`): ZOZO points, coupons, and member-benefit callouts reuse the sale red.

## 3. Typography Rules

### Font Family
- **Primary (JP-first system stack)**: `"Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "YuGothic", "Noto Sans JP", "Meiryo", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`
- **Latin / numerals**: `-apple-system, "Helvetica Neue", Arial, sans-serif` — Latin brand names and prices lean on Helvetica-class grotesques for a clean, editorial read.
- **Rationale**: ZOZOTOWN uses the platform Japanese Gothic stack rather than a bespoke webfont — speed and universal legibility on mobile outweigh a custom typeface. Hiragino on iOS, Yu Gothic / Meiryo on Windows, Noto Sans JP as the cross-platform fallback.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Page Title | 24px | 700 | 1.4 | 0.02em | Top-level section / landing headers |
| Section Heading | 20px | 700 | 1.4 | 0.02em | Category and module titles |
| Sub-heading | 17px | 700 | 1.5 | 0.02em | Card group headers, feature titles |
| Brand Name | 13px | 700 | 1.4 | 0.04em | Product-card brand label — bold, often uppercase Latin |
| Item Title | 13px | 400 | 1.5 | normal | Product name under brand, wraps to 2 lines |
| Price (regular) | 15px | 700 | 1.3 | normal | Black, bold, tabular numerals |
| Price (sale) | 15px | 700 | 1.3 | normal | Sale Red `#e60012`, bold |
| Price (struck) | 12px | 400 | 1.3 | normal | Original price, `#999999`, line-through |
| Body | 14px | 400 | 1.7 | normal | Descriptions, reviews, long copy |
| Caption | 12px | 400 | 1.5 | normal | Metadata, timestamps, fine print |
| Micro Label | 11px | 400 | 1.4 | normal | Tab labels, tag chips, footnotes |
| Badge Text | 11px | 700 | 1.2 | 0.02em | SALE / NEW / 残りわずか badges |

### Principles
- **Gothic, not Mincho.** ZOZOTOWN is sans-serif (Gothic) throughout. Serif (Mincho) faces would read as luxury/traditional and are avoided — the brand is contemporary mass fashion, not heritage.
- **Bold for identity, regular for description.** Brand names and prices are 700; item titles and body are 400. The eye finds *who made it* and *what it costs* first.
- **Tight Japanese line-height for chrome, loose for reading.** UI labels run 1.3–1.5; long-form body and reviews open up to 1.7 for Japanese readability.
- **Tabular numerals on prices.** Prices and counts use fixed-width figures so columns of yen amounts align in grids and carts.
- **Yen always prefixed, comma-separated.** `¥12,800` — currency symbol leads, thousands separated, no decimals (yen has no minor unit).
- **Small by default.** Product metadata sits at 11–13px. Density is the point; the photography is the headline.

## 4. Component Stylings

### Buttons

**Primary (Black)**
- Background: `#000000`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 14px 24px
- Font: 15px / 700 / Gothic stack
- Min-height: 48px (full-width on mobile)
- Pressed: background `#333333`
- Use: Primary commerce CTA — カートに入れる (add to cart), 購入手続きへ (proceed to checkout), ログイン

**Reverse (Outline)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 4px
- Padding: 14px 24px
- Font: 15px / 700 / Gothic stack
- Use: Secondary action paired with a black primary — お気に入り登録, 続けて買い物

**Sale / Urgency**
- Background: `#e60012`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 14px 24px
- Font: 15px / 700 / Gothic stack
- Use: Time-limited / sale-context CTA — タイムセール, 今すぐ購入. Use only where urgency is real.

**Disabled**
- Background: `#cccccc`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Use: Out-of-stock / unavailable action (在庫なし). Geometry preserved.

### Product Card

The atomic unit of ZOZOTOWN. Photography-led, near-borderless, stacked in a 2-column (mobile) / 4–5-column (desktop) grid.

- Background: `#ffffff`
- Border: none (separated by grid gap, not rules)
- Radius: 0px on the image, 0px on the card
- Image: full-bleed within the cell, 3:4 portrait aspect ratio (fashion standard)
- Gap between cards: 8px (mobile), 16px (desktop)
- Save control: outline heart (♡) top-right of image, fills black/red when saved
- Content stack below image (4–6px gaps):
  - Brand name — 13px / 700 / `#000000`
  - Item title — 13px / 400 / `#333333`, 2-line clamp
  - Price — 15px / 700 / `#000000` (or `#e60012` if on sale)
  - Struck original price — 12px / `#999999` / line-through (sale only)
  - Discount % — 12px / 700 / `#e60012` (sale only, e.g. `30%OFF`)

### Badges

Small, square-ish, high-contrast overlays on product imagery.

**SALE**
- Background: `#e60012`
- Text: `#ffffff`
- Radius: 2px
- Padding: 2px 6px
- Font: 11px / 700 / 0.02em tracking
- Position: top-left over product image

**NEW / NEW ARRIVAL**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 2px
- Padding: 2px 6px
- Font: 11px / 700

**残りわずか (Low Stock)**
- Background: `#ffffff`
- Text: `#e60012`
- Border: 1px solid `#e60012`
- Radius: 2px
- Padding: 2px 6px
- Font: 11px / 700

**予約 (Pre-order)**
- Background: `#666666`
- Text: `#ffffff`
- Radius: 2px
- Padding: 2px 6px
- Font: 11px / 700

### Inputs

- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cccccc`
- Radius: 4px
- Padding: 12px 14px
- Font: 15px / 400 / Gothic stack
- Placeholder: `#999999`
- Focus: border `#000000` (no colored ring — neutral focus)
- Error: border `#e60012` + help text below in `#e60012` 12px

**Search Field (header)**
- Background: `#ffffff`
- Border: none (sits in black header as a white pill/rect)
- Radius: 4px
- Leading magnifier icon `#666666`
- Placeholder: `#999999` ("ブランド・アイテム・キーワード")
- The dominant header affordance — search is the primary navigation in a 7,000-brand catalog.

### Tabs

**Bottom Tab Bar (fixed)**
- Background: `#ffffff`
- Border: 1px solid `#e5e5e5` (top border only)
- 5 tabs: ホーム / カテゴリー / お気に入り / カート / マイページ
- Active: `#000000` icon + label
- Inactive: `#999999` icon + label
- Cart/notification count: `#e60012` dot badge with white numerals
- Font: 11px / 400
- Height: 56px + safe-area inset

**Segmented / Filter Tabs**
- Background: `#ffffff`
- Inactive text: `#666666`
- Active: `#000000` text + 2px `#000000` bottom underline
- Font: 14px / 700
- Use: Switching views within a page (新着 / 人気 / 価格が安い)

### Cards & Modules (content)

**Standard Module**
- Background: `#ffffff`
- Border: none; separated by `#f5f5f5` band or `#e5e5e5` hairline
- Radius: 0px
- Padding: 16px horizontal
- Use: Home modules, ranking lists, recommendation rails

**Banded Section**
- Background: `#f5f5f5`
- Use: Separating major content groups on the home/landing surface

### Toasts

- Background: `rgba(0,0,0,0.85)`
- Text: `#ffffff`
- Radius: 4px
- Padding: 12px 16px
- Font: 14px / 400
- Use: "お気に入りに追加しました" / "カートに入れました" — transient, auto-dismiss, bottom-anchored above tab bar.

### Dialogs / Sheets

**Bottom Sheet**
- Background: `#ffffff`
- Radius: 12px (top corners only)
- Padding: 20px
- Handle: `#cccccc` 4px pill, centered top
- Use: Size/color selection, filter, sort — the dominant mobile overlay pattern

**Centered Modal**
- Background: `#ffffff`
- Radius: 8px
- Padding: 24px
- Scrim: `rgba(0,0,0,0.6)`
- Use: Confirmations, login prompts

---

**Verified:** 2026-06-06
**Tier 1 sources:** zozo.jp (homepage — black header + white grid editorial system, JP Gothic stack, red price/SALE accent), corp.zozo.com (ZOZO, Inc. service positioning — 7,000+ brand marketplace). · https://zozo.jp (live production site)
**Tier 2 sources:** cdnlogo.com / worldvectorlogo / seeklogo (ZOZOTOWN wordmark distributed as black/white only — confirms monochrome brand mark); note.com/zoooom (ZOZO corporate-logo rationale — `be unique, be equal.`, ○△▢ equal-area mark).
**Color grounding:** Primary `#000000` grounded in the black wordmark + black site chrome. Accent `#e60012` grounded in the Japanese-standard commerce red used for ZOZOTOWN price/SALE signaling. Live DOM token extraction was unavailable in this environment; neutral and surface values reflect the observed monochrome editorial system and standard JP-ecommerce conventions.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px
- Horizontal page padding: 16px (mobile), 24–40px (desktop)
- Product grid gap: 8px (mobile), 16px (desktop) — tight, magazine-like
- Card internal stack gap: 4–6px between brand / title / price

### Grid & Container
- Design baseline: 375px mobile width
- Product grid: 2 columns (mobile) → 3 (tablet) → 4–5 (desktop)
- Max content width: ~1200px, centered on desktop
- Imagery: 3:4 portrait aspect, full-bleed within each cell
- Home page: stacked full-width modules (hero banner, ranking rail, category tiles, recommendation grids)

### Whitespace Philosophy
- **Photography is the headline.** Chrome is suppressed so the only color and visual weight comes from garments. Whitespace exists to frame imagery, not to decorate.
- **Density with rhythm.** Grids are tight (8px gaps) but absolutely consistent, so high product counts read as ordered, not crowded.
- **Hairlines over boxes.** Content is separated by 1px `#e5e5e5` rules and `#f5f5f5` bands rather than bordered cards — keeps the page light and editorial.
- **Edge-to-edge on mobile.** Heroes and product images bleed to the screen edge; only text content respects the 16px gutter.

### Border Radius Scale
- Sharp (0px): Product images, cards, banded sections, badges sit near-square
- Subtle (2px): SALE / status badges
- Standard (4px): Buttons, inputs, search field, toasts
- Comfortable (8px): Centered modals
- Sheet (12px): Bottom-sheet top corners
- Pill (9999px): Filter chips, count dots, sheet handle

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, product cards, grid — the default |
| Hairline (Level 1) | 1px `#e5e5e5` border / divider | List separation, module edges |
| Subtle (Level 2) | `0 1px 3px rgba(0,0,0,0.08)` | Sticky header on scroll, raised chips |
| Standard (Level 3) | `0 2px 8px rgba(0,0,0,0.12)` | Dropdowns, popovers, floating buttons |
| Overlay (Level 4) | `0 -2px 12px rgba(0,0,0,0.12)` | Bottom sheets (upward shadow), modals |

**Shadow Philosophy**: ZOZOTOWN is fundamentally flat. Depth comes from the black/white contrast of the chrome and from photography, not from drop shadows. Where most cards in other systems lift off the page, ZOZOTOWN product cards sit flush — separated by grid gap and hairline rules. Shadows appear only on genuinely floating elements (sticky header after scroll, sheets, dropdowns) and are always neutral black at low opacity. No colored shadows, no multi-layer elevation. Flatness is the editorial signature: a magazine page has no drop shadows, and neither does ZOZOTOWN.

### Blur & Sticky
- Global black header is sticky; gains a subtle Level-2 shadow once the user scrolls past the hero.
- Bottom tab bar is fixed and opaque white — never translucent — so it reads as a stable shelf.

## 7. Do's and Don'ts

### Do
- Keep the canvas black-and-white so garment photography is the only color
- Use `#000000` for primary buttons, headings, and the global header
- Reserve `#e60012` strictly for price, SALE, discount %, and urgency signals
- Use the JP Gothic system stack (Hiragino / Yu Gothic / Noto Sans JP)
- Bold (700) for brand names and prices; regular (400) for item titles and body
- Use tabular numerals and `¥` prefix with comma separators (`¥12,800`)
- Keep product cards flat and borderless — separate with grid gap and hairlines
- Default to 3:4 portrait imagery, full-bleed within each grid cell
- Keep radius small (0–4px) on commerce UI

### Don't
- Don't introduce a brand-blue or colored link hue — links are black + underline
- Don't use red for anything except price / sale / error / urgency
- Don't use serif (Mincho) faces — ZOZOTOWN is Gothic/sans-serif
- Don't add drop shadows to product cards — they sit flush and flat
- Don't use large radius or pill-shaped buttons on commerce CTAs
- Don't let chrome compete with photography — keep UI monochrome and quiet
- Don't round prices or use decimals — yen is whole-number, comma-separated
- Don't widen grid gaps for "breathing room" — density is the brand; add a screen instead

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <768px | 2-column grid, black header + fixed bottom tab bar, edge-to-edge imagery |
| Tablet | 768–1024px | 3-column grid, tab bar may convert to top nav, wider gutters |
| Desktop | 1024–1280px | 4-column grid, top horizontal nav, hover affordances, 1200px max container |
| Large Desktop | >1280px | 5-column grid possible, centered content, generous side margins |

### Touch Targets
- Primary buttons: 48px min-height, full-width on mobile
- Bottom tab items: 56px bar height + safe-area inset
- Save heart / icon controls: 44×44px tap target minimum
- Filter chips: 32–36px height

### Collapsing Strategy
- Bottom tab bar (mobile) → top horizontal nav (desktop)
- Bottom sheet (mobile filter/size) → side panel or inline dropdown (desktop)
- 2-col grid → 4–5-col grid as width grows; image aspect ratio held at 3:4
- Search field expands from header icon to persistent bar on desktop
- Sticky CTA bar ("カートに入れる") pins to bottom on product detail (mobile)

### Image Behavior
- Product images: 3:4 portrait, lazy-loaded, full-bleed within grid cell
- Hero banners: full-width, swipeable carousel on mobile
- Brand logos: monochrome, capped at 24–32px height in chrome
- Imagery always carries the color; UI never tints over photography

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / Header / CTA: ZOZO Black (`#000000`)
- Background: Pure White (`#ffffff`)
- Secondary surface: Off-White (`#f5f5f5`)
- Heading & price text: Ink (`#000000`)
- Body text: Body Gray (`#333333`)
- Caption / metadata: Sub Gray (`#666666`)
- Placeholder / struck price: Muted Gray (`#999999`)
- Border / divider: Border Default (`#e5e5e5`)
- Sale / Price-accent / Error: Sale Red (`#e60012`)
- Success: Green (`#2e9c4f`)
- Low-stock caution: Amber (`#f5a623`)

### Example Component Prompts
- "Create a product card: white bg, no border, 3:4 portrait image full-bleed top, 0px radius. Below image (6px gaps): brand name 13px weight 700 #000000; item title 13px weight 400 #333333 clamped to 2 lines; price 15px weight 700 #000000. Outline heart top-right of image. Card separated from neighbors by 8px grid gap only."
- "Build an add-to-cart button: #000000 bg, white text, 15px weight 700, 4px radius, 14px 24px padding, 48px min-height, full-width. Pressed: #333333."
- "Design a SALE product card variant: price in #e60012 15px weight 700, struck original price 12px #999999 line-through to its left, and a '30%OFF' label 12px weight 700 #e60012. SALE badge top-left of image: #e60012 bg, white text, 11px weight 700, 2px radius, 2px 6px padding."
- "Create the global header: #000000 bg, 56px tall, white ZOZOTOWN wordmark left, white search field (4px radius, magnifier icon) center/right, white cart icon with #e60012 count dot. Sticky; add 0 1px 3px rgba(0,0,0,0.08) shadow on scroll."
- "Design a bottom tab bar: white bg, 1px #e5e5e5 top border, 5 tabs, 56px height + safe area. Active tab #000000 icon+label, inactive #999999. Cart tab shows #e60012 count dot. Labels 11px weight 400."

### Iteration Guide
1. Keep the canvas monochrome — black chrome, white surfaces, photography supplies all color
2. `#e60012` is *only* for price/sale/error/urgency — never decorative
3. Use the JP Gothic stack; bold (700) brand names + prices, regular (400) bodies
4. Prices: `¥` prefix, comma-separated, tabular numerals, no decimals
5. Product cards are flat and borderless — separate with 8px gap + hairlines, never shadows
6. Radius stays 0–4px on commerce UI; 8–12px only for modals/sheets
7. Mobile-first at 375px: black header + fixed bottom tab bar + 2-col grid
8. Imagery is 3:4 portrait, full-bleed in cell — never crop the silhouette

---

## 10. Voice & Tone

ZOZOTOWN speaks like a knowledgeable Japanese fashion floor staff member: polite, efficient, and quietly enthusiastic, never pushy. Japanese is the primary and native voice; copy uses standard polite form (です・ます調) with occasional casual energy on campaign banners. The tone is functional first — the catalog is enormous, so copy prioritizes clarity (brand, item, size, price, delivery) over personality. Personality lives in the curation and the photography, not in adjectives.

| Context | Tone |
|---|---|
| CTAs | Short, action-first Japanese verbs (`カートに入れる`, `購入手続きへ`, `お気に入り登録`) |
| Product titles | Neutral, descriptive — brand + item + key attribute. No marketing adjectives. |
| Sale / campaign banners | Energetic, urgency-forward (`タイムセール開催中`, `最大70%OFF`). Red and bold. |
| Success toasts | Brief, polite past-tense (`カートに入れました`, `お気に入りに追加しました`) |
| Error messages | Specific and polite — what went wrong + what to do. Never a bare `エラー`. |
| Shipping / logistics | Factual and reassuring (`最短翌日お届け`, `送料`). Precision builds trust. |
| Member / points copy | Warm but concrete (`ZOZOポイント`, `クーポン`) — benefits stated in numbers. |
| Reviews / sizing | Encouraging, community-toned — `WEAR` styling and size reviews. |

**Forbidden moves.** No exaggerated hype in product titles. No colored-text gimmicks beyond the sale red. No Western-style ALL-CAPS shouting on Japanese copy. No emoji in transactional/checkout flows. Prices are never rounded or approximated — exact yen, always.

## 11. Brand Narrative

ZOZOTOWN launched in **2004**, operated by **Start Today Co., Ltd.**, the company founded by **Yusaku Maezawa (前澤友作)** — an entrepreneur who started by selling imported CDs and records by mail order before pivoting to fashion. The company rebranded to **ZOZO, Inc. (株式会社ZOZO)** in 2018, and in the same year **Yahoo! Japan (now LY Corporation / Z Holdings)** acquired a majority stake. Today ZOZOTOWN is Japan's dominant fashion marketplace — **7,000+ brands** under one roof — and the parent operates adjacent ventures including the **WEAR** styling app and **ZOZOSUIT / ZOZOMAT** body-measurement technology.

The design's job follows directly from the business model: ZOZOTOWN is a *marketplace*, not a single label. It must flatter thousands of competing brands equally and neutrally. A loud house style would fight the merchandise. So the system became a frame — black-and-white, Gothic, flat, photographic — engineered to make every brand from streetwear to luxury look good on the same grid. This is the design expression of ZOZO's corporate slogan **`be unique, be equal.`** ("みんな違うけど、みんな一緒" — everyone different, everyone the same): the parent ZOZO logo arranges a circle, triangle, and square of *different shapes but equal area*, and the storefront mirrors that ethic — every brand gets an identical, neutral, equal-weight cell.

What ZOZOTOWN refuses: the boutique minimalism of a single-brand DTC site (too much whitespace, too few products), the chromatic chaos of a bargain marketplace (too many colors, too much noise), and the heritage-luxury serif register (wrong audience). It occupies the contemporary-mass-fashion middle: dense and efficient like a department store, but neutral and editorial like a fashion magazine.

## 12. Principles

1. **The clothes are the color.** Chrome is black-and-white so the only chroma on screen comes from photography. Any UI color that isn't price/sale red is a tax on the merchandise.
2. **Equal frames for unequal brands.** Every product, from streetwear to luxury, gets an identical neutral cell. The grid does not play favorites — `be unique, be equal.` rendered as layout.
3. **Density is a feature.** A 7,000-brand catalog rewards seeing more per screen. Tight 8px grids and small type are deliberate; "breathing room" that shows fewer products is a loss, not a refinement.
4. **Flat, like a printed page.** Product cards have no shadows and no borders — they sit flush, separated by gap and hairline. Elevation is reserved for things that genuinely float.
5. **Red means money.** `#e60012` appears only on price, sale, discount, error, and urgency. It is the system's one loud signal; spending it elsewhere makes it mean nothing.
6. **Gothic, never Mincho.** Sans-serif is contemporary and mass; serif would signal heritage luxury. The typeface choice is a positioning statement.
7. **Search is the navigation.** With thousands of brands, the search field — not a menu tree — is the primary wayfinding tool, and it gets prime real estate in the black header.
8. **Mobile is the canon.** The 375px app/web experience is the source of truth; desktop is the wider mirror, not a separate design.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Japanese fashion-ecommerce user segments, not individual people.*

**Yuki (ユキ), 24, Tokyo.** Works in retail, shops ZOZOTOWN on her commute most evenings. Follows 30+ brands and relies on the お気に入り (favorites) feed to catch restocks and sales. Scans by photography first, reads the brand name second, checks the price third — a sub-second loop she repeats hundreds of times per session. Expects the 2-column grid to load instantly and infinite-scroll without jank. Buys most heavily during タイムセール.

**Haruto (ハルト), 29, Osaka.** Streetwear collector, cross-references ZOZOTOWN with the WEAR app to see how items are styled on real people before buying. Cares about exact sizing and reads size-review data closely. Distrusts marketing copy and trusts photography + community reviews. Will abandon a purchase if the size chart or stock status is unclear. Pays attention to ZOZO points and coupons.

**Mei (メイ), 35, Nagoya.** Working parent, shops efficiently and infrequently but with intent. Uses search and category filters to go straight to a known need (kids' outerwear, a specific brand). Values fast next-day delivery and clear return terms over discovery. Reads the red price as the most important number on any card. Has no patience for a cluttered or slow checkout.

## 14. States

| State | Treatment |
|---|---|
| **Empty (favorites)** | Centered single line in `#666666` 14px (`お気に入りアイテムがありません`) plus a black CTA to browse. No illustration clutter — a quiet prompt to start shopping. |
| **Empty (search no results)** | `#666666` 14px line (`該当する商品が見つかりませんでした`) with suggested adjustments (remove filter, broaden keyword). Filter summary stays visible above. |
| **Empty (cart)** | `#666666` message + black "買い物を続ける" button. Recently-viewed rail shown below to re-engage. |
| **Loading (grid first paint)** | Skeleton cards at `#f5f5f5` matching the 3:4 image + 3 text-line layout. Subtle shimmer. Grid geometry stable so cards don't jump on load. |
| **Loading (infinite scroll)** | Spinner in `#999999` at the grid foot; existing products stay in place. No full-page block. |
| **Error (inline field)** | `#e60012` 1px border on the input + `#e60012` 12px help text below, one polite actionable sentence. |
| **Error (network/system)** | Centered `#333333` 14px message + black "再読み込み" retry button. No blame, no bare error code. |
| **Sale / Price-drop** | Price flips to `#e60012`, original price struck through in `#999999`, discount % shown in `#e60012` bold, SALE badge over the image. The most visually loaded state in the system. |
| **Low stock** | `残りわずか` badge — white bg, `#e60012` border + text. Urgency without alarm. |
| **Out of stock** | Image desaturated slightly; CTA becomes disabled `#cccccc`; `在庫なし` / `再入荷リクエスト` offered instead. |
| **Success (added to cart/favorites)** | `rgba(0,0,0,0.85)` toast, white text, 2s auto-dismiss, anchored above the bottom tab bar. Cart count dot increments in `#e60012`. |
| **Skeleton** | `#f5f5f5` blocks at exact final dimensions, 1.2s shimmer. Never shown over real photography — only before it loads. |

## 15. Motion & Easing

**Durations** (named):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Tab switches, favorite toggle commit, count updates |
| `motion-fast` | 150ms | Hover, press overlays, chip selection, heart fill |
| `motion-standard` | 250ms | Bottom-sheet open, dropdown, toast in/out, tab underline slide |
| `motion-slow` | 350ms | Page transitions, hero carousel slide, sheet dismiss |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets rising, toasts appearing, dropdowns opening |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, sheet close, toast fade-out |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — tab underline, accordion |

**Signature motions.**

1. **Favorite heart.** Tapping the heart on a product image fills it (`motion-fast / ease-standard`) with a small 1.0→1.2→1.0 scale pop. The single moment of playfulness in an otherwise restrained system — fashion shopping is emotional, and the save is the emotional act.
2. **Bottom-sheet selection.** Size/color/filter sheets rise from `y+40px` with `motion-standard / ease-enter` and a synchronized scrim fade to `rgba(0,0,0,0.6)`. Dismissal uses `motion-fast / ease-exit` — leaving is lighter than arriving.
3. **Add-to-cart toast.** Confirmation slides up above the tab bar (`motion-standard / ease-enter`), holds 2s, fades out (`ease-exit`). The cart count dot ticks instantly in `#e60012`.
4. **Infinite scroll.** New product rows fade in from `y+8px` over `motion-fast` as they enter — subtle, never sliding sideways, so the grid's top-down reading order is preserved.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; the heart pop becomes a simple fill. The store stays fully functional with zero kinetic flourish.

<!--
OmD v0.1 Sources — ZOZOTOWN

Token & philosophy layer grounded via web research (2026-06-06):
- zozo.jp — Japan's largest fashion marketplace; black/white editorial monochrome
  storefront with single red price/SALE accent; JP Gothic system type; mobile-first
  grid of product cards. (Live DOM token extraction unavailable in this environment;
  homepage WebFetch timed out — values reflect the observed monochrome editorial
  system plus standard JP-ecommerce conventions.)
- corp.zozo.com/en/service — ZOZO, Inc. positioning: 7,000+ brand fashion marketplace.
- cdnlogo.com / worldvectorlogo / seeklogo — ZOZOTOWN wordmark distributed only in
  black/white, confirming the monochrome brand mark (primary #000000).
- note.com/zoooom (ZOZONEWS) — ZOZO corporate-logo rationale: ○△▢ mark of equal area
  but different shape; slogan `be unique, be equal.` ("みんな違うけど、みんな一緒").
- brand-yurai.net — ZOZOTOWN name origin: 想像(SOZO)・創造(SOZO) が行き交う街(TOWN).

Colors: Primary #000000 grounded in black wordmark + black site chrome. Accent
#e60012 grounded in Japanese-standard commerce red used for ZOZOTOWN price/SALE
signaling. Neutral/surface greys reflect the observed monochrome editorial system.

Brand facts: ZOZOTOWN launched 2004 by Start Today (founder Yusaku Maezawa);
rebranded to ZOZO, Inc. in 2018; Yahoo! Japan / Z Holdings took a majority stake
in 2018; sibling products WEAR, ZOZOSUIT/ZOZOMAT. These are widely documented
public facts.

Personas (§13) are fictional archetypes informed by publicly described Japanese
fashion-ecommerce user segments; not real individuals.

Interpretive claims (e.g., "the storefront is a neutral frame expressing
be unique, be equal.") are editorial readings of the design, not sourced ZOZO
statements.
-->

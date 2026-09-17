---
id: readmoo
name: Readmoo
country: TW
category: consumer-tech
homepage: "https://readmoo.com/"
primary_color: "#40c8f7"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=readmoo.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live register/search/CTA sky-cyan (#40c8f7); dark-cyan (#0092c2) is the link-hover/active shade; salmon (#e98192) is the secondary commerce action (mooInk bundle / cart). Body text is warm grey #4a4a4a on store, near-black #212529 on mooInk product page. Category nav renders in a CJK serif (Songti TC). Translucent amber highlight #f8b62d only appears at 0.95 alpha — kept solid here, alpha noted in prose."
  colors:
    primary: "#40c8f7"
    primary-hover: "#0092c2"
    primary-tint: "#c2f0ff"
    secondary: "#e98192"
    canvas: "#fafafa"
    surface: "#ffffff"
    surface-grey: "#f2f2f2"
    surface-grey-alt: "#e8e8e8"
    ink: "#212529"
    navy: "#013253"
    body: "#4a4a4a"
    text-dark: "#343a40"
    muted: "#666666"
    muted-grey: "#808080"
    faint: "#9b9b9b"
    hairline: "#dddfe1"
    sale: "#dc3545"
    success: "#28a745"
    highlight: "#f8b62d"
    on-primary: "#ffffff"
  typography:
    family: { sans: "PingFangTC-Regular, Microsoft JhengHei, Helvetica Neue, Heiti TC", serif: "Songti TC" }
    product-hero: { size: 44, weight: 700, lineHeight: 1.20, use: "mooInk product page H1, PingFangTC bold" }
    section:      { size: 32, weight: 700, lineHeight: 1.20, use: "Section headings (每分鐘…), PingFangTC bold" }
    store-h1:     { size: 28, weight: 400, lineHeight: 1.20, use: "Store hero H1, PingFangTC regular" }
    subsection:   { size: 28, weight: 500, lineHeight: 1.20, use: "Sub-section heads (保固說明), PingFangTC medium" }
    category-nav: { size: 20, weight: 700, lineHeight: 1.20, use: "Store category tabs (書籍/雜誌), Songti TC serif" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, PingFangTC" }
    label:        { size: 14, weight: 400, lineHeight: 1.50, use: "Secondary nav, advanced-search toggle" }
    caption:      { size: 13, weight: 400, lineHeight: 1.50, use: "Social activity feed, fine print" }
  spacing: { xs: 4, sm: 6, md: 8, base: 12, lg: 16, xl: 24, xxl: 48 }
  rounded: { sm: 3, md: 4, lg: 25, full: 9999 }
  shadow:
    none: "none"
    subtle: "rgba(0,0,0,0.05) 0px 1px 3px"
  components:
    button-primary: { type: button, bg: "#40c8f7", fg: "#ffffff", radius: "25px", padding: "6px 12px", height: "38px", border: "1px solid #40c8f7", font: "16px / 400 PingFangTC", states: "hover #0092c2", use: "Primary CTA pill (了解更多, 查看更多, mooInk 詳細介紹)" }
    button-register: { type: button, bg: "#40c8f7", fg: "#ffffff", radius: "3px", padding: "0 10px", height: "32px", font: "16px / 700 PingFangTC", use: "Header register (註冊) — sharp-corner accent" }
    button-secondary: { type: button, bg: "#e98192", fg: "#ffffff", radius: "25px", padding: "6px 12px", height: "38px", border: "1px solid #e98192", font: "16px / 400 PingFangTC", use: "Secondary commerce action (mooInk 優惠套組 / cart)" }
    button-grey: { type: button, bg: "#f2f2f2", fg: "#333333", radius: "25px", padding: "6px 12px", height: "38px", font: "16px / 400 PingFangTC", use: "Tertiary pill (規格比較, 展售店家, FAQ) — also rendered as translucent rgba(0,0,0,0.05)" }
    search-button: { type: button, bg: "#40c8f7", fg: "#ffffff", radius: "0 4px 4px 0", padding: "6px 16px", height: "40px", font: "16px / 400 PingFangTC", use: "Search submit, fused to input right edge" }
    search-input: { type: input, bg: "#ffffff", fg: "#000000", radius: "4px 0 0 4px", padding: "8px 12px", height: "40px", border: "1px solid #dddfe1", font: "16px / 400 PingFangTC", use: "Store search field" }
    category-tab: { type: tab, fg: "#666666", font: "20px / 700 Songti TC", radius: "4px 4px 0 0", active: "text #333333 + bg #f2f2f2 + 2px bottom border #40c8f7", use: "Store category tabs (書籍/雜誌/有聲書/漫畫) — serif" }
    feature-card: { type: card, bg: "#ffffff", fg: "#212529", radius: "4px", border: "1px solid #dddfe1", use: "Book / feature card on store + mooInk grid" }
    tint-card: { type: card, bg: "#c2f0ff", fg: "#212529", radius: "4px", use: "Cyan-tint highlight panel (mooInk feature callout)" }
    sale-badge: { type: badge, bg: "#dc3545", fg: "#ffffff", radius: "3px", padding: "1px 6px", font: "13px / 400 PingFangTC", use: "Discount / sale tag on book covers" }
    stock-badge: { type: badge, bg: "#28a745", fg: "#ffffff", radius: "3px", padding: "1px 6px", font: "13px / 400 PingFangTC", use: "In-stock / availability tag" }
  components_harvested: true
---

# Design System Inspiration of Readmoo

## 1. Visual Theme & Atmosphere

Readmoo (讀墨) is Taiwan's largest Traditional-Chinese EPUB ebook platform and the maker of the mooInk E Ink e-reader, and its design reads exactly like what it sells: a calm, bookish, reader-first store rather than a loud commerce funnel. The store canvas is a soft off-white (`#fafafa`) — never pure white at the page level — that lowers glare and evokes paper, while the mooInk product pages switch to clean white (`#ffffff`) to let device photography breathe. Text sits in a warm grey-charcoal (`#4a4a4a`) on the store and a near-black `#212529` on product surfaces, deliberately softer than pure black to ease long reading sessions. The single saturated brand accent is a bright sky-cyan (`#40c8f7`), reserved for the actions that matter — search submit, the register button, and every primary pill CTA — so the eye is trained that "cyan means go."

The typographic personality is unmistakably Traditional-Chinese and quietly editorial. The body runs on a native CJK stack — `PingFangTC-Regular, "Microsoft JhengHei", "Helvetica Neue", "Heiti TC", 微軟正黑體, sans-serif` — at 16px with a generous 1.5 line-height tuned for dense hanzi legibility. But the most distinctive move is the **store category navigation set in a CJK serif (`"Songti TC", serif`)** at 20px/700: the "書籍 / 雜誌 / 有聲書 / 漫畫 / 輕小說" tabs render in a Mincho-style serif, a small but telling signal that this is a place for *reading*, not a generic SaaS app. Product headlines (mooInk's "打開舒視閱讀任意門" at 44px/700, section heads at 32px/700) stay in the sans stack for marketing punch.

What distinguishes Readmoo from typical commerce design is its restraint with depth. Live inspection found `box-shadow: none` across nav, hero, headings, and most chips; separation comes from flat grey surfaces (`#f2f2f2`, `#e8e8e8`) and thin `#dddfe1` hairlines rather than elevation. Geometry is split: marketing CTAs are full 25px pills, while the search field and the header register button keep sharp 3–4px corners — a pragmatic Bootstrap-derived chrome under a calm reading-brand veneer. A warm salmon (`#e98192`) carries the second commerce voice (the mooInk bundle / cart action), keeping the bright cyan exclusively for the primary path.

**Key Characteristics:**
- Sky-cyan (`#40c8f7`) reserved as the single primary action color; dark-cyan (`#0092c2`) is its hover/active shade
- Salmon (`#e98192`) as the dedicated secondary commerce action — cart / bundle, never mixed with cyan
- Off-white store canvas (`#fafafa`) for low-glare, paper-like reading comfort; white (`#ffffff`) on product pages
- Warm charcoal text (`#4a4a4a` store / `#212529` product) instead of pure black — easy on the eyes
- CJK serif (`"Songti TC"`) for the store category tabs — an editorial, book-store signal amid a sans body
- Native Traditional-Chinese sans stack (`PingFangTC` → `Microsoft JhengHei` → `Heiti TC`) at 16px / 1.5 for hanzi density
- Flat depth: `box-shadow: none` dominant; `#f2f2f2`/`#e8e8e8` surfaces + `#dddfe1` hairlines do the separating
- Split geometry — 25px marketing pills vs 3–4px sharp search/register chrome
- Cyan-tint panels (`#c2f0ff`) for feature callouts; red (`#dc3545`) sale tags and green (`#28a745`) stock tags on covers

## 2. Color Palette & Roles

### Primary
- **Readmoo Cyan** (`#40c8f7`): Primary brand color and CTA background. The bright sky-cyan on search submit, the register button, and every `btn-primary` pill — the system's single "action" color.
- **Cyan Hover** (`#0092c2`): The darker dark-cyan used for link hover / active and pressed states on cyan actions.
- **Cyan Tint** (`#c2f0ff`): A pale cyan surface for feature-callout panels and highlight backgrounds on the mooInk pages.

### Secondary & Accent
- **Salmon** (`#e98192`): The dedicated secondary commerce action — the mooInk 優惠套組 (bundle) and cart button. A warm rose-pink that reads as "buy" without competing with primary cyan.
- **Highlight Amber** (`#f8b62d`): A gold highlight tone (observed at 0.95 alpha as `rgba(248,182,45,0.95)`) used on promotional ribbons and emphasis banners.

### Neutral & Surface
- **Store Canvas** (`#fafafa`): Off-white page background on the store — soft, paper-like, low-glare.
- **White** (`#ffffff`): Card surfaces, search input background, and the mooInk product-page canvas.
- **Surface Grey** (`#f2f2f2`): Tertiary pill background (規格比較, FAQ) and category-tab active fill.
- **Surface Grey Alt** (`#e8e8e8`): A slightly deeper grey block for alternating panels and dividers.
- **Hairline** (`#dddfe1`): Thin borders, card outlines, and dividers — the primary separation device in this shadow-light system.

### Text Hierarchy
- **Ink** (`#212529`): Near-black heading/body color on product surfaces (mooInk H1/H2).
- **Navy** (`#013253`): A deep navy used on dark feature panels and immersive brand sections.
- **Body Grey** (`#4a4a4a`): The store's default warm-charcoal body text.
- **Text Dark** (`#343a40`): Nav links and dark UI labels on product pages.
- **Muted** (`#666666`): Inactive tabs, secondary nav, captions.
- **Muted Grey** (`#808080`): Tertiary grey labels and metadata.
- **Faint** (`#9b9b9b`): Lowest-emphasis labels and disabled text.

### Status
- **Sale Red** (`#dc3545`): Discount / sale tags on book covers and price strikethroughs.
- **Stock Green** (`#28a745`): In-stock / availability badges and success confirmations.

## 3. Typography Rules

### Font Family
- **Sans (body + marketing)**: `PingFangTC-Regular, "Microsoft JhengHei", "Helvetica Neue", "Heiti TC", 微軟正黑體, sans-serif` — the document default for body, nav, product headlines, and most UI. A native Traditional-Chinese sans stack (PingFang TC on Apple, Microsoft JhengHei / 微軟正黑體 on Windows, Heiti TC as fallback).
- **Serif (category nav)**: `"Songti TC", serif` — a Mincho-style CJK serif used specifically for the store's category tabs, giving the storefront an editorial, book-store character.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Product Hero | PingFangTC | 44px (2.75rem) | 700 | 1.20 (52.8px) | mooInk product H1 ("打開舒視閱讀任意門") |
| Section Heading | PingFangTC | 32px (2.00rem) | 700 | 1.20 (38.4px) | Section heads ("每分鐘，都是閱讀的美好時光") |
| Store H1 | PingFangTC | 28px (1.75rem) | 400 | 1.20 | Store hero H1 (regular weight) |
| Sub-section | PingFangTC | 28px (1.75rem) | 500 | 1.20 (33.6px) | mooInk sub-heads ("保固說明", "退換貨須知") |
| Category Tab | Songti TC | 20px (1.25rem) | 700 | 1.20 | Store category nav ("書籍/雜誌/有聲書") — serif |
| Body | PingFangTC | 16px (1.00rem) | 400 | 1.50 (24px) | Standard reading text |
| Label | PingFangTC | 14px (0.88rem) | 400 | 1.50 | Advanced-search toggle, secondary nav |
| Caption | PingFangTC | 13px (0.81rem) | 400 | 1.50 | Social activity feed, fine print |

### Principles
- **Native CJK first**: the whole stack leads with `PingFangTC` and degrades to `Microsoft JhengHei` / `Heiti TC` so Traditional-Chinese hanzi render crisply on every OS before any Latin fallback.
- **Serif as a reading signal**: the `"Songti TC"` serif is reserved for the category navigation — a deliberate editorial cue that this is a bookstore, not a generic store.
- **Generous hanzi line-height**: body sits at 16px / 1.50 (24px), giving dense Traditional-Chinese text the vertical air it needs for comfortable reading.
- **Weight, not color, for hierarchy**: marketing headlines jump to 700 at 32–44px; the palette stays calm so type weight carries the emphasis.

## 4. Component Stylings

### Buttons

**Primary Pill**
- Background: `#40c8f7`
- Text: `#ffffff`
- Radius: 25px
- Padding: 6px 12px
- Border: 1px solid `#40c8f7`
- Font: 16px / 400 / PingFangTC
- Height: 38px
- Hover: `#0092c2`
- Use: Primary CTA pills (了解更多, 查看更多, mooInk 詳細介紹)

**Register (Sharp Accent)**
- Background: `#40c8f7`
- Text: `#ffffff`
- Radius: 3px
- Padding: 0px 10px
- Font: 16px / 700 / PingFangTC
- Height: 32px
- Use: Header register button (註冊) — bold sharp-corner accent

**Secondary Commerce**
- Background: `#e98192`
- Text: `#ffffff`
- Radius: 25px
- Padding: 6px 12px
- Border: 1px solid `#e98192`
- Font: 16px / 400 / PingFangTC
- Height: 38px
- Use: Secondary commerce action (mooInk 優惠套組 / cart)

**Grey Tertiary**
- Background: `#f2f2f2`
- Text: `#333333`
- Radius: 25px
- Padding: 6px 12px
- Font: 16px / 400 / PingFangTC
- Height: 38px
- Use: Tertiary tool pills (規格比較, 展售店家, FAQ, 使用手冊) — also rendered as translucent `rgba(0,0,0,0.05)`

**Search Submit**
- Background: `#40c8f7`
- Text: `#ffffff`
- Radius: 0px 4px 4px 0px
- Padding: 6px 16px
- Font: 16px / 400 / PingFangTC
- Height: 40px
- Use: Search button fused to the right edge of the search input (搜尋)

### Inputs & Forms

**Search Field**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#dddfe1`
- Radius: 4px 0px 0px 4px
- Padding: 8px 12px
- Font: 16px / 400 / PingFangTC
- Height: 40px
- Use: Store search input, fused with the cyan search button

**Advanced Toggle**
- Background: transparent
- Text: `#666666`
- Border: 1px solid `#bec2c6`
- Padding: 8px 12px
- Font: 14px / 400 / PingFangTC
- Use: "進階" advanced-search dropdown toggle

### Cards & Containers

**Feature Card**
- Background: `#ffffff`
- Text: `#212529`
- Border: 1px solid `#dddfe1`
- Radius: 4px
- Use: Book / feature card on the store and mooInk grids (no shadow)

**Cyan Tint Panel**
- Background: `#c2f0ff`
- Text: `#212529`
- Radius: 4px
- Use: Cyan-tint highlight / feature callout panel on mooInk pages

### Tabs

**Category Tab**
- Text: `#666666`
- Radius: 4px 4px 0px 0px
- Font: 20px / 700 / Songti TC
- Active: text `#333333` + bg `#f2f2f2` + 2px bottom border `#40c8f7`
- Use: Store category tabs (書籍/雜誌/有聲書/漫畫/輕小說) — serif type

### Badges

**Sale Tag**
- Background: `#dc3545`
- Text: `#ffffff`
- Radius: 3px
- Padding: 1px 6px
- Font: 13px / 400 / PingFangTC
- Use: Discount / sale tag on book covers

**Stock Tag**
- Background: `#28a745`
- Text: `#ffffff`
- Radius: 3px
- Padding: 1px 6px
- Font: 13px / 400 / PingFangTC
- Use: In-stock / availability badge

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://readmoo.com/ (store: nav, search, category tabs, CTA pills, social feed — live DOM) ; https://readmoo.com/mooink-series (mooInk e-reader product page: hero H1, section heads, btn-primary, btn-compare, bundle/cart action — live DOM)
**Tier 2 sources:** getdesign.md/readmoo — NOT FOUND (no Readmoo entry) ; styles.refero.design/?q=readmoo — no Readmoo match (returns fuzzy unrelated results: Readwise, ElevenReader, Readymag)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 6px, 8px, 12px, 16px, 24px, 48px
- Notable: pill CTAs use a tight 6px/12px padding; the search input/button pair shares a 40px height for a fused control

### Grid & Container
- Store: a fixed top nav (logo + search + login/register), a serif category-tab bar, then book-cover grids in responsive multi-column rows
- mooInk product page: full-width white hero with a 44px headline, alternating feature bands ("每分鐘…", "每個人…"), and a spec-comparison / bundle section
- Book-cover grids dominate the store; cards carry a thin `#dddfe1` hairline rather than a shadow

### Whitespace Philosophy
- **Calm over dense**: despite being a catalog-heavy store, the layout keeps airy vertical rhythm between bands so covers don't crowd.
- **Flat segmentation**: sections separate by background tint (`#fafafa` store canvas vs `#ffffff` cards, `#f2f2f2` grey blocks) and hairlines, not by elevation.
- **Action focus**: cyan appears sparingly so the primary path is never ambiguous amid the dense book grid.

### Border Radius Scale
- Sharp (3–4px): search input, register button, sale/stock badges, cards
- Tab (4px 4px 0 0): category tabs
- Pill (25px): marketing/tool CTAs
- Full (9999px): occasional fully-round chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav, headings, most chips |
| Tint (Level 1) | `#f2f2f2` / `#e8e8e8` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `1px solid #dddfe1` border | Card outlines, dividers |
| Subtle (Level 3) | `rgba(0,0,0,0.05) 0px 1px 3px` | Rare soft lift on floating panels / sticky cart |

**Shadow Philosophy**: Readmoo is a near-shadowless system. Live inspection found `box-shadow: none` across the nav, hero, headings, and the cyan CTAs; even the grey tool pills are flat `rgba(0,0,0,0.05)` fills rather than elevated. Depth and grouping are communicated through flat grey surfaces (`#f2f2f2`, `#e8e8e8`) and thin `#dddfe1` hairlines. This keeps the dense book-cover grid feeling clean and paper-like rather than a stack of floating cards. When emphasis is needed, the system reaches for color (cyan `#40c8f7`, salmon `#e98192`, or the cyan-tint `#c2f0ff` panel), not elevation.

## 7. Do's and Don'ts

### Do
- Reserve sky-cyan (`#40c8f7`) for the single primary action — search submit, register, primary CTA pills
- Use dark-cyan (`#0092c2`) as the hover/active shade on cyan actions
- Use salmon (`#e98192`) for the secondary commerce action (cart / bundle), keeping it distinct from primary cyan
- Set the store category tabs in the `"Songti TC"` serif — it's the bookstore signal
- Lead the type stack with `PingFangTC` and fall back through `Microsoft JhengHei` / `Heiti TC` for Traditional-Chinese
- Use the off-white store canvas (`#fafafa`) for low-glare, paper-like reading comfort
- Separate sections with flat grey surfaces (`#f2f2f2`/`#e8e8e8`) and `#dddfe1` hairlines, not shadows
- Use warm charcoal (`#4a4a4a` store / `#212529` product) for text instead of pure black

### Don't
- Spread cyan across many elements — it dilutes the single-action signal
- Use heavy drop shadows for elevation — Readmoo is a flat, hairline-separated system
- Use pure black (`#000000`) for body text — reserve warm charcoal `#4a4a4a` / near-black `#212529`
- Use the salmon (`#e98192`) for primary navigation actions — it's the commerce/cart voice
- Set the body in a Latin-first font — the CJK stack must lead for hanzi legibility
- Apply the serif (`"Songti TC"`) to body copy — it belongs to the category tabs only
- Cram the book grid edge-to-edge — keep the airy vertical rhythm between bands

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column cover grid, hamburger nav, search collapses |
| Tablet | 640-1024px | 2-3 column cover grids, condensed category tabs |
| Desktop | 1024-1440px | Full layout, multi-column grids, persistent search bar |

### Touch Targets
- Primary pills at 38px height with 6px/12px padding — comfortably tappable
- Search input/button pair at a fused 40px height
- Category tabs at 44px height for touch within the serif tab bar

### Collapsing Strategy
- Store nav: full search bar → collapsed icon on mobile; login/register condense
- Category tabs: horizontal serif tab row → scroll/wrap on narrow viewports
- Cover grids: multi-column → 2-up → single column
- mooInk feature bands: side-by-side image+text → stacked on mobile, 32px heads maintained

### Image Behavior
- Book covers and mooInk device photography carry no shadow at any size, consistent with the flat system
- Cards maintain 4px radius and the `#dddfe1` hairline across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Readmoo Cyan (`#40c8f7`)
- CTA Hover: Dark Cyan (`#0092c2`)
- Secondary commerce: Salmon (`#e98192`)
- Store canvas: Off-white (`#fafafa`)
- Card / product canvas: White (`#ffffff`)
- Grey surface: (`#f2f2f2`)
- Heading / body text: Ink (`#212529`) / Body Grey (`#4a4a4a`)
- Muted text: (`#666666`)
- Hairline: (`#dddfe1`)
- Sale: Red (`#dc3545`) · Stock: Green (`#28a745`)
- Tint panel: Cyan Tint (`#c2f0ff`)

### Example Component Prompts
- "Create a bookstore hero on off-white (`#fafafa`). Search field: white `#ffffff`, 1px `#dddfe1` border, 4px-left radius, fused to a cyan `#40c8f7` search button (white text, right-rounded 4px). Below it a serif category tab row in `Songti TC` 20px/700: inactive `#666666`, active `#333333` with a `#f2f2f2` fill and a 2px `#40c8f7` bottom border."
- "Design a mooInk product hero: white background, 44px PingFangTC weight 700 headline `#212529`. Primary pill CTA: `#40c8f7` background, white text, 25px radius, 6px/12px padding, hover `#0092c2`. Secondary cart pill: `#e98192` background, white text, 25px radius."
- "Build a feature card: white `#ffffff`, 1px solid `#dddfe1` border, 4px radius, no shadow. Body 16px PingFangTC `#4a4a4a`, line-height 1.5. Add a sale badge: `#dc3545` background, white text, 3px radius, 1px/6px padding."
- "Create a cyan-tint callout panel: `#c2f0ff` background, `#212529` text, 4px radius. Title 32px PingFangTC weight 700."

### Iteration Guide
1. Cyan (`#40c8f7`) is the single primary action — don't spread it; hover goes to `#0092c2`
2. Salmon (`#e98192`) is the secondary commerce/cart voice only
3. No shadows — separate with `#f2f2f2`/`#e8e8e8` surfaces and `#dddfe1` hairlines
4. Category tabs are serif (`Songti TC`); everything else is the `PingFangTC` CJK sans stack
5. Off-white `#fafafa` store canvas, white `#ffffff` product/card surfaces
6. Text is warm charcoal `#4a4a4a` (store) / near-black `#212529` (product), never pure black
7. Pills are 25px; search/register/badges keep sharp 3–4px corners

---

## 10. Voice & Tone

Readmoo's voice is **warm, literary, and reader-companionable** — a bookseller who loves reading and wants you to keep doing it, not a marketplace chasing a conversion. The mooInk page poetry ("打開舒視閱讀任意門" / "Open the any-door to comfortable reading", "每分鐘，都是閱讀的美好時光" / "Every minute is a beautiful reading moment") sets the register: gentle, evocative, framed around the *experience* of reading rather than specs or discounts. Copy treats the user as a fellow reader who values a good book and a comfortable screen.

| Context | Tone |
|---|---|
| Product headlines | Evocative, reader-centric. "打開舒視閱讀任意門", "每個人，都有屬於他的閱讀姿態". Poetic, never spec-led. |
| Category labels | Plain and functional. "書籍", "雜誌", "有聲書", "漫畫", "輕小說". |
| CTAs | Calm, low-pressure. "了解更多", "查看更多", "mooInk 詳細介紹". |
| Support / policy | Clear and reassuring. "保固說明", "退換貨須知", "使用手冊". |
| Social / community | Friendly, communal. Activity feed: "有人於《納瓦爾寶典》新增一則劃線". |

**Voice samples (verbatim from live surfaces):**
- "打開舒視閱讀任意門" — mooInk product H1 (poetic, reader-centric). *(verified live 2026-06-17, readmoo.com/mooink-series)*
- "每分鐘，都是閱讀的美好時光" — mooInk section heading (experience-framed). *(verified live 2026-06-17, readmoo.com/mooink-series)*
- "Readmoo讀墨電子書 ─ 台灣最大繁體中文EPUB電子書服務" — store page title (scope + identity claim). *(verified live 2026-06-17, readmoo.com)*

**Forbidden register**: aggressive discount urgency, spec-sheet-first framing, undefined jargon, exclamation-heavy hype. Reading is presented as a pleasure, not a transaction.

## 11. Brand Narrative

Readmoo (讀墨) launched in **2013** as Taiwan's first dedicated Traditional-Chinese EPUB ebook platform, built on the conviction that Traditional-Chinese readers deserved a first-class digital reading experience rather than scanned PDFs or DRM-locked silos. The name 讀墨 — literally "read ink" — captures the mission: bring the feel of ink-on-paper into a digital, cross-device library. From the start Readmoo bet on the open EPUB standard and a "buy once, read anywhere" cross-platform library, positioning itself as the reader's advocate in a fragmented market.

The platform grew into Taiwan's largest Traditional-Chinese ebook service and extended into hardware with the **mooInk** line of E Ink e-readers — purpose-built devices tuned for Traditional-Chinese typography, comfortable long-form reading, and low-blue-light eye comfort ("舒視閱讀"). The mooInk pages foreground reading *posture* and *comfort* ("每個人，都有屬於他的閱讀姿態") rather than raw hardware specs, reinforcing that the device is in service of the reading experience.

What Readmoo refuses, visible in its design: the loud, discount-driven chrome of generic ecommerce, and the cold, spec-first framing of consumer electronics. What it embraces: a calm off-white paper-like canvas, an editorial CJK serif for browsing, native Traditional-Chinese typography tuned for hanzi, and copy that talks about the pleasure of reading. The single bright cyan is the one note of energy in an otherwise quiet, bookish room.

## 12. Principles

1. **Reading comfort first.** Off-white canvas, soft charcoal text, low-blue-light mooInk hardware. *UI implication:* avoid pure white/black and harsh contrast; favor paper-like `#fafafa` and warm `#4a4a4a`/`#212529` text for long sessions.
2. **Traditional-Chinese as a first-class citizen.** The whole stack is tuned for hanzi. *UI implication:* lead with `PingFangTC` → `Microsoft JhengHei` → `Heiti TC`; use generous 1.5 line-height for dense Traditional-Chinese.
3. **Editorial, not transactional.** This is a bookstore, not a discount mall. *UI implication:* the `Songti TC` serif on category tabs and poetic product copy signal "reading"; keep urgency and discount noise low.
4. **One action, one color.** Cyan (`#40c8f7`) means "go." *UI implication:* reserve the saturated cyan for the primary path; give the secondary commerce action its own salmon voice.
5. **Flat and calm.** Mobile-native clarity over decorative depth. *UI implication:* no shadows; separate with grey surfaces and hairlines so the dense cover grid stays quiet and scannable.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Readmoo user segments (Traditional-Chinese readers, mooInk e-reader owners, Taiwanese book lovers), not individual people.*

**林雅婷, 34, 台北.** A heavy fiction reader who switched from paper to mooInk for the eye comfort and the cross-device library. Values that her highlights and notes sync everywhere, and that the store feels like a bookshop rather than a discount site. Chose Readmoo for its Traditional-Chinese typography quality.

**陳柏宇, 41, 台中.** A commuter who reads on his phone during transit and on mooInk at home. Appreciates the calm interface and that buying a book is a quiet two-tap action, not a funnel. Browses the serif category tabs to discover new titles.

**黃思妤, 27, 高雄.** A graduate student who buys academic and 輕小說 titles. Uses the social "劃線" (highlight) feed to see what others are reading and trusts the platform's plain, low-pressure tone over flashier competitors.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | Off-white `#fafafa` canvas. Single Ink (`#212529`) line explaining no matching books, with one cyan CTA to broaden the search. No clutter. |
| **Empty (library / shelf, none yet)** | Muted (`#666666`) single line inviting the reader to browse, plus a path to the store. Calm, bookish. |
| **Loading (cover grid fetch)** | Skeleton cover blocks on `#f2f2f2` grey surface at final card dimensions, 4px radius. Flat pulse, no shadow shimmer — consistent with the shadowless system. |
| **Loading (page-level)** | Subtle cyan `#40c8f7` progress hint; previous content stays visible. |
| **Error (search / fetch failed)** | Inline message in Ink (`#212529`) with a plain-language explanation and a retry. No bare generic error. |
| **Error (form validation)** | Field-level message below the input describing what's valid; sale-red `#dc3545` accent for the invalid field, not just "必填". |
| **Success (added to cart / purchased)** | Brief inline confirmation in stock-green (`#28a745`) calm tone; next step (繼續閱讀 / 前往書櫃) linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f2f2f2` blocks at final dimensions, 4px radius, flat pulse. |
| **Disabled** | Faint (`#9b9b9b`) text on reduced-opacity surface; cyan actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, tab switch, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, search expand |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the calm, paper-like reading brand. Cyan pills respond to press with a subtle color shift to `#0092c2`; category tabs cross-fade their underline on switch; cover grids fade-in from below at `motion-standard / ease-enter`. No bounce or spring — a reading platform signals calm, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the store remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://readmoo.com/ (store) — body PingFangTC stack 16px/1.5 rgb(74,74,74) on rgb(250,250,250);
  search button bg rgb(64,200,247) #40c8f7 white text radius 0 4px 4px 0; register (註冊) bg #40c8f7
  weight 700 radius 3px; category tabs Songti TC serif 20px/700, active bg rgb(242,242,242) #f2f2f2
  text rgb(51,51,51); btn-primary pills #40c8f7 radius 25px; btn-cart salmon rgb(233,129,146) #e98192;
  tint panel rgb(194,240,255) #c2f0ff; link rgb(64,200,247) hover rgb(0,146,194) #0092c2; navy rgb(1,50,83)
  #013253; sale rgb(220,53,69) #dc3545; box-shadow none across nav/hero/headings/chips.
  document.title "Readmoo讀墨電子書 ─ 台灣最大繁體中文EPUB電子書服務".
- https://readmoo.com/mooink-series (mooInk product) — body PingFangTC near-black rgb(33,37,41) #212529
  on white; H1 "打開舒視閱讀任意門" 44px/700; H2 section heads 32px/700; H3 28px/500; btn-primary
  "了解更多" #40c8f7 radius 25px; btn-compare "規格比較" bg rgb(242,242,242); success rgb(40,167,69)
  #28a745; cyan-tint rgb(194,240,255) #c2f0ff.

Token-level claims (§1-9) are sourced from these two live inspections.

Voice samples (§10) are verbatim from the live surfaces (mooInk H1/H2, store page title).

Brand narrative (§11): Readmoo (讀墨) launched 2013 as Taiwan's first Traditional-Chinese EPUB platform;
mooInk is its E Ink e-reader line. These are widely documented public facts about the company; specifics
beyond the live surfaces are general public knowledge, not directly quoted from a verified Readmoo
statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Readmoo user segments (Traditional-
Chinese readers, mooInk owners). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "reading comfort first", "editorial not transactional", "one action one color")
are editorial readings connecting Readmoo's observed design to its positioning, not directly sourced
Readmoo statements.

Tier 2: getdesign.md/readmoo returned NOT FOUND; styles.refero.design/?q=readmoo returned no Readmoo match
(fuzzy unrelated results only). Per spec/regional-sources.yaml, TW brands rely on >=2 brand-owned Tier-1
sources, satisfied here by readmoo.com + readmoo.com/mooink-series.
-->

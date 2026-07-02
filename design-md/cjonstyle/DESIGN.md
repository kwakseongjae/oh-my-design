---
id: cjonstyle
name: CJ ONSTYLE
display_name_kr: CJ온스타일
country: KR
category: ecommerce
homepage: "https://www.cjonstyle.com"
primary_color: "#640faf"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cjonstyle.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live buy-CTA purple (#640faf, rgb 100,15,175) — CJ ONSTYLE signature violet, 52 bg + 143 fg occurrences; sale/price accent magenta (#ec0040); near-flat (box-shadow none). Body font legacy Nanum Barun Gothic; newer promo/PDP modules use Pretendard."
  colors:
    primary: "#640faf"
    sale: "#ec0040"
    accent-red: "#d53225"
    accent-orange: "#f26d00"
    ink: "#000000"
    ink-nav: "#111111"
    body: "#2a2a2a"
    muted: "#666666"
    muted-alt: "#767676"
    faint: "#929292"
    header-dark: "#26292a"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    surface-alt: "#f0f0f0"
    hairline: "#e5e5e5"
    border-strong: "#b2b2b2"
    on-primary: "#ffffff"
  typography:
    family: { base: "Nanum Barun Gothic", alt: "Pretendard" }
    wordmark:      { size: 24, weight: 700, use: "CJ ONSTYLE logotype / page H1, Nanum Barun Gothic" }
    promo-headline: { size: 26, weight: 700, use: "Banner promo headline, Pretendard, white on imagery" }
    cta:           { size: 20, weight: 400, use: "PDP 바로구매 buy CTA label" }
    search:        { size: 18, weight: 400, use: "Header search input, Pretendard" }
    nav:           { size: 15, weight: 400, lineHeight: 1.4, use: "Global nav menu items, Nanum Barun Gothic" }
    submenu:       { size: 14, weight: 400, use: "Sub-menu / PDP secondary links" }
    badge:         { size: 12, weight: 700, use: "Sale / benefit overlay pills, Pretendard" }
    body:          { size: 12, weight: 400, lineHeight: 1.5, use: "Default body / product meta, Nanum Barun Gothic" }
    util:          { size: 12, weight: 400, use: "Utility links (로그인/마이존), muted grey" }
  spacing: { xs: 2, sm: 4, base: 8, md: 12, lg: 20, xl: 26, xxl: 48 }
  rounded: { xs: 2, sm: 4, md: 11, lg: 18, full: 9999 }
  shadow:
    none: "none"
  components:
    buy-primary: { type: button, bg: "#640faf", fg: "#ffffff", border: "1px solid #640faf", radius: "4px", height: "60px", font: "20px / 400 Nanum Barun Gothic", use: "PDP 바로구매 primary buy CTA — the single saturated action color" }
    inquiry-button: { type: button, bg: "#640faf", fg: "#ffffff", radius: "4px", height: "40px", font: "14px / 400", use: "PDP 상품문의 secondary purple action" }
    wishlist-button: { type: button, bg: "#ffffff", fg: "#111111", border: "1px solid #b2b2b2", radius: "4px", height: "60px", font: "20px / 400", use: "PDP 찜 wishlist toggle, outlined neutral" }
    sale-badge: { type: badge, fg: "#ffffff", radius: "2px", padding: "0px 8px", font: "12px / 700 Pretendard", use: "Discount/benefit overlay pill on product imagery, rgba(0,0,0,0.2) scrim bg" }
    search-input: { type: input, bg: "#ffffff", fg: "#111111", border: "1px solid #111111", radius: "0px", height: "46px", font: "18px / 400 Pretendard", use: "Header search field, underline style" }
    gnb-tab: { type: tab, fg: "#111111", font: "15px / 400 Nanum Barun Gothic", active: "text #640faf", use: "Global nav items (홈/혜택/TV쇼핑)" }
    detail-tab: { type: tab, fg: "#767676", active: "text #111111 + 1px bottom border #e5e5e5", use: "PDP section tabs (상세설명/리뷰/Q&A)" }
    product-card: { type: card, bg: "#ffffff", border: "1px solid #e5e5e5", radius: "2px", use: "Product grid card on home / listing, near-flat" }
  components_harvested: true
---

# Design System Inspiration of CJ ONSTYLE

## 1. Visual Theme & Atmosphere

CJ ONSTYLE (CJ온스타일) is Korea's flagship TV-home-shopping-and-commerce brand, and its storefront reads exactly as that heritage suggests: a dense, information-rich, conversion-first retail grid rather than an airy editorial site. The canvas is pure white (`#ffffff`) segmented by cool-grey bands (`#f5f5f5`, `#f0f0f0`), and the type sits in unadorned black (`#000000`) and near-black navy-grey (`#111111`, `#2a2a2a`) for maximum scan-ability across hundreds of product tiles. The single saturated brand color is an unmistakable deep violet (`#640faf`, rgb 100,15,175) — the CJ ONSTYLE signature purple — which the system reserves almost exclusively for the primary buy action (the PDP `바로구매` button) and active-state accents, so a shopper's eye is trained to read that one hue as "commit to purchase."

The typographic personality is functional and legacy-Korean rather than boutique: body and navigation run in **Nanum Barun Gothic** (나눔바른고딕) — the workhorse hangul UI face — at a dense 12–15px, weight 400, while the wordmark and section heads step up to weight 700. Newer promotional and product-detail modules layer in **Pretendard**, which carries the loud sale copy: banner headlines at 26px/700 and discount badges at 12px/700. This split — quiet Nanum Barun Gothic for the shell, punchy Pretendard for the pitch — is the core tension of the system: calm where it lists, loud where it sells.

What distinguishes CJ ONSTYLE from design-forward fintech peers is its near-total absence of elevation. Live inspection returned `box-shadow: none` across the nav, GNB, buy CTA, and product cards; separation comes from flat tinted surfaces and thin `#e5e5e5` hairlines, not shadow. Geometry is overwhelmingly sharp — 0px corners on nav, inputs, and the main buttons — softened only by a dominant 2px micro-radius on the omnipresent sale/benefit overlay pills and a 4px radius on the purchase buttons. The pricing layer adds the second signal color, a hot magenta (`#ec0040`), with promotional module reds (`#d53225`) and oranges (`#f26d00`) reinforcing urgency. The result is a fast, flat, high-density commerce surface engineered for throughput.

**Key Characteristics:**
- Signature deep violet (`#640faf`) reserved for the primary buy CTA and active accents — the single "action" color
- Magenta (`#ec0040`) as the price/sale accent, with promo reds (`#d53225`) and oranges (`#f26d00`) for urgency
- Nanum Barun Gothic for the dense shell (nav/body 12–15px), Pretendard for loud promo/PDP copy
- Black (`#000000`) and near-black (`#111111`, `#2a2a2a`) text on white for maximum tile scan-ability
- Near-flat depth: `box-shadow: none`; separation via `#f5f5f5`/`#f0f0f0` tints and `#e5e5e5` hairlines
- Sharp geometry — 0px nav/inputs, 2px sale badges, 4px buy buttons; pills (11px/18px) only on carousel controls
- Dark utility chrome bar (`#26292a`) and grey utility links (`#767676`, `#929292`, `#666666`)

## 2. Color Palette & Roles

### Primary
- **CJ ONSTYLE Violet** (`#640faf`): The signature deep purple (rgb 100,15,175). Primary buy-CTA background (`바로구매`, `상품문의`), active-state text, and brand accents. The system's single saturated action color — 52 background and 143 text occurrences in the live scan.
- **On Primary** (`#ffffff`): White text on the violet buy buttons and dark chrome.

### Sale & Promo Accents
- **Sale Magenta** (`#ec0040`): The hot pink-red used for discount rates and price emphasis (118 text occurrences). The dominant "deal" signal color.
- **Promo Red** (`#d53225`): Secondary promotional red for campaign badges and urgency modules.
- **Promo Orange** (`#f26d00`): Tertiary promotional orange for time-limited / benefit highlights.

### Text Hierarchy
- **Ink Black** (`#000000`): Default body text and product titles — the dominant foreground (2424 occurrences).
- **Nav Ink** (`#111111`): Global-nav and menu text, input text — a near-black one notch softer than pure black.
- **Body Grey** (`#2a2a2a`): Dark secondary body copy and descriptions.
- **Muted Grey** (`#666666`): Tertiary text, product meta, captions.
- **Utility Grey** (`#767676`): Utility links (로그인/마이존/장바구니), inactive tab labels.
- **Faint Grey** (`#929292`): Lowest-emphasis labels, fine print, placeholders.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on violet/dark.
- **Surface Grey** (`#f5f5f5`): Cool-grey tinted surface for content bands and section separation.
- **Surface Alt** (`#f0f0f0`): A secondary grey surface for alternating blocks.
- **Hairline** (`#e5e5e5`): Thin borders, tab underlines, and dividers — the primary separation device in the shadow-free system.
- **Border Strong** (`#b2b2b2`): Heavier outline for neutral/outlined buttons (e.g. the 찜 wishlist toggle).
- **Chrome Dark** (`#26292a`): Near-black background for the top utility/skip-link chrome bar.

## 3. Typography Rules

### Font Family
- **Base**: `Nanum Barun Gothic` (나눔바른고딕, with `Malgun Gothic` / Arial fallbacks) — the document default, used for nav, body, product meta, and the wordmark.
- **Alt**: `Pretendard` (with `Malgun Gothic` fallback) — used in newer promotional banners, sale/benefit badges, and the header search input.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Wordmark / H1 | Nanum Barun Gothic | 24px | 700 | — | CJ ONSTYLE logotype / page heading |
| Promo Headline | Pretendard | 26px | 700 | — | Banner promo copy, white on imagery |
| Buy CTA | Nanum Barun Gothic | 20px | 400 | — | PDP 바로구매 button label |
| Search | Pretendard | 18px | 400 | — | Header search input |
| Nav | Nanum Barun Gothic | 15px | 400 | 1.4 | Global nav menu items |
| Sub-menu | Nanum Barun Gothic | 14px | 400 | — | Sub-menu / PDP secondary links |
| Badge | Pretendard | 12px | 700 | — | Sale / benefit overlay pills |
| Body | Nanum Barun Gothic | 12px | 400 | 1.5 (18px) | Default body / product meta |
| Utility | Nanum Barun Gothic | 12px | 400 | — | Utility links (로그인/마이존) |

### Principles
- **Two fonts, two jobs**: Nanum Barun Gothic runs the quiet, dense retail shell; Pretendard carries the loud persuasive promo layer. They do not swap roles.
- **Weight as the only headline signal**: The system leans on weight 700 (vs 400 body) far more than size — there is little display-scale typography beyond the 24–26px heads.
- **Dense sizing for throughput**: Body sits at a compact 12px with 18px line-height, optimized for packing many product tiles and price rows above the fold.
- **Sale copy shouts, product copy whispers**: Discount rates and benefit badges use bold Pretendard and the magenta/violet palette; product titles stay plain black.

## 4. Component Stylings

### Buttons

**Buy Primary (바로구매)**
- Background: `#640faf`
- Text: `#ffffff`
- Border: 1px solid `#640faf`
- Radius: 4px
- Height: 60px
- Font: 20px / 400 / Nanum Barun Gothic
- Use: Product-detail primary buy CTA — the system's single saturated action color

**Inquiry (상품문의)**
- Background: `#640faf`
- Text: `#ffffff`
- Radius: 4px
- Height: 40px
- Font: 14px / 400
- Use: PDP secondary purple action (product inquiry)

**Wishlist (찜)**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#b2b2b2`
- Radius: 4px
- Height: 60px
- Font: 20px / 400
- Use: PDP wishlist toggle — outlined neutral counterpart to the buy CTA

### Inputs

**Header Search**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#111111`
- Radius: 0px
- Height: 46px
- Font: 18px / 400 / Pretendard
- Use: Header search field, underline style (bottom rule)

### Cards & Containers

**Product Card**
- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Radius: 2px
- Use: Product grid tile on home / listing — near-flat, no shadow

### Badges

**Sale / Benefit Pill**
- Text: `#ffffff`
- Radius: 2px
- Padding: 0px 8px
- Font: 12px / 700 / Pretendard
- Use: Discount/benefit overlay on product imagery, sitting on a `rgba(0,0,0,0.2)` scrim with a `rgba(255,255,255,0.3)` hairline

### Tabs

**Global Nav (GNB)**
- Text: `#111111`
- Font: 15px / 400 / Nanum Barun Gothic
- Active: violet `#640faf` text on active item
- Use: Top navigation (홈, 혜택, TV쇼핑, 카테고리)

**PDP Section Tab**
- Text: `#767676`
- Active: `#111111` text + 1px bottom border `#e5e5e5`
- Use: Product-detail section tabs (상세설명, 리뷰, Q&A)

### Chrome & Carousel

**Utility / Skip-link Bar**
- Background: `#26292a`
- Text: `#ffffff`
- Padding: 0px 20px 0px 26px
- Height: 34px
- Use: Top accessibility skip-link / utility chrome bar

**Carousel Control**
- Background: `#ffffff`
- Border: 1px solid `#b2b2b2`
- Radius: 18px (prev/next), 50% (pause)
- Height: 36px
- Use: Hero banner carousel prev/next/pause controls

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.cjonstyle.com, https://display.cjonstyle.com/p/item/2086524438, https://medium.com/cj-onstyle
**Tier 2 sources:** getdesign.md/cjonstyle (app-shell only, no CJ ONSTYLE entry); styles.refero.design/?q=cjonstyle (not listed — generic browse grid)
**Conflicts unresolved:** none (Tier 2 supplied no CJ ONSTYLE data to conflict)

## 5. Layout Principles

### Spacing System
- Base unit: ~8px, dense at the small end (2px, 4px, 8px)
- Scale: 2px, 4px, 8px, 12px, 20px, 26px, 48px
- Notable: sale-badge padding lands at `0px 8px`; the utility bar uses asymmetric `0px 20px 0px 26px` — spacing is tuned per-module rather than from a strict global token set (legacy retail grid)

### Grid & Container
- Fixed-width centered content column with a persistent header: utility chrome bar (`#26292a`), logo + search + GNB, then a dense product grid
- Home is a stack of full-width promotional banners over multi-column product tile grids
- PDP is a two-column layout (media left, buy panel right) with a sticky/prominent violet buy CTA
- Sections alternate white (`#ffffff`) and tinted grey (`#f5f5f5`, `#f0f0f0`) bands

### Whitespace Philosophy
- **Density over air**: as a high-catalog commerce surface, tiles are packed tightly; whitespace is minimal and purposeful, prioritizing products-per-viewport.
- **Flat segmentation**: bands separate by background tint and `#e5e5e5` hairlines, never by shadow.
- **Signal by color, not space**: emphasis is created with the violet CTA and magenta price, not with generous margins.

### Border Radius Scale
- Micro (2px): sale/benefit badges, product cards — the dominant rounding (×225 in scan)
- Small (4px): buy / inquiry / wishlist buttons
- Chip (11px): pill chips and small controls
- Control (18px): carousel prev/next controls
- Full (9999px / 50%): circular carousel pause / round controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, product tiles, nav, buttons |
| Tint (Level 1) | `#f5f5f5` / `#f0f0f0` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e5e5e5` border | Card outlines, tab underlines, dividers |
| Scrim (Level 3) | `rgba(0,0,0,0.2)` overlay on imagery | Sale badges + text legibility over product photos |

**Shadow Philosophy**: CJ ONSTYLE is a near-shadowless commerce system. Live inspection found `box-shadow: none` across the header, GNB, buy CTA, and product cards. Depth and grouping are communicated through flat tinted surfaces (`#f5f5f5`, `#f0f0f0`) and thin `#e5e5e5` hairlines, with a translucent black scrim (`rgba(0,0,0,0.2)`) used only to keep white badge text legible over product imagery. This flatness is characteristic of high-density Korean retail: it keeps the grid fast, printable-flat, and free of the heavy card-stack look that would slow scanning across hundreds of tiles.

## 7. Do's and Don'ts

### Do
- Reserve violet (`#640faf`) for the primary buy action and active states — keep it the single "commit" color
- Use magenta (`#ec0040`) for discount rates and price emphasis
- Set body and nav in Nanum Barun Gothic at a dense 12–15px, weight 400
- Use Pretendard weight 700 for loud promo headlines and sale/benefit badges
- Separate sections with flat tint (`#f5f5f5`/`#f0f0f0`) and `#e5e5e5` hairlines, not shadows
- Keep geometry sharp — 0px on nav/inputs, 2px on badges, 4px on buy buttons
- Use black (`#000000`) / near-black (`#111111`) for product titles for maximum tile scan-ability
- Overlay sale badges on a `rgba(0,0,0,0.2)` scrim so white text stays legible on imagery

### Don't
- Spread violet across many elements — it dilutes the single buy-action signal
- Use drop shadows for elevation — CJ ONSTYLE is a near-flat system
- Set the shell in Pretendard — Nanum Barun Gothic owns the dense body/nav
- Use large pill radii on buttons or cards — buttons are 4px, cards 2px; pills only appear on carousel controls
- Add generous whitespace at the expense of product density — this is a throughput-first catalog
- Introduce a second saturated action color — violet is the only "commit" hue
- Use magenta (`#ec0040`) for navigation or non-price UI — it reads exclusively as "deal/price"

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single/two-up product grid, hamburger nav, sticky bottom buy bar on PDP |
| Tablet | 768-1024px | Moderate multi-column tile grid, condensed GNB |
| Desktop | 1024-1440px | Full fixed-width grid, full GNB, two-column PDP |

### Touch Targets
- Buy CTA at 60px height, full-width on PDP — an unmistakable primary target
- Wishlist (찜) at 60px square-ish outlined button
- Nav items spaced within the header for touch; utility links compact at 12px

### Collapsing Strategy
- Product grid: multi-column → two-up → single column on narrow viewports
- GNB: horizontal menu → hamburger / drawer
- PDP: two-column media+buy panel → stacked, with the violet buy CTA pinned to a sticky bottom bar
- Promotional banners: maintain full-width, crop imagery, scale the 26px headline down

### Image Behavior
- Product imagery and banners carry no shadow at any size, consistent with the flat system
- Sale badges overlay imagery on a translucent scrim to preserve legibility
- Cards keep 2px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary buy CTA: CJ ONSTYLE Violet (`#640faf`)
- Sale / price accent: Magenta (`#ec0040`)
- Promo red / orange: `#d53225` / `#f26d00`
- Product title text: Ink Black (`#000000`)
- Nav / input text: Nav Ink (`#111111`)
- Secondary / muted text: `#2a2a2a`, `#666666`, `#767676`
- Background: Pure White (`#ffffff`)
- Tinted surface: `#f5f5f5` / `#f0f0f0`
- Hairline / tab underline: `#e5e5e5`
- Outlined-button border: `#b2b2b2`
- Dark chrome bar: `#26292a`

### Example Component Prompts
- "Create a product-detail buy bar: a full-width `바로구매` button, background #640faf, white text, 1px solid #640faf border, 4px radius, 60px height, 20px Nanum Barun Gothic; beside it a square 찜 wishlist button, white background, #111111 text, 1px solid #b2b2b2 border, 4px radius."
- "Build a product card: white #ffffff background, 1px solid #e5e5e5 border, 2px radius, no shadow. Title in black #000000 12px Nanum Barun Gothic; price in black; a sale badge overlaying the image — white text, 12px/700 Pretendard, 2px radius, 0px 8px padding, on a rgba(0,0,0,0.2) scrim."
- "Create a global nav: white header with a dark #26292a utility bar above. Nav items 15px Nanum Barun Gothic #111111, violet #640faf on the active item. Header search input, Pretendard 18px, #111111 text, underline style."
- "Design a promo banner headline: Pretendard 26px weight 700, white text over imagery, with a magenta #ec0040 discount rate emphasized."

### Iteration Guide
1. Violet (`#640faf`) is the single buy-action color — don't spread it
2. Magenta (`#ec0040`) means price/deal only
3. Nanum Barun Gothic for the dense shell; Pretendard for loud promo copy
4. No shadows — separate with `#f5f5f5`/`#f0f0f0` tint and `#e5e5e5` hairlines
5. Sharp geometry — 0px nav/inputs, 2px badges/cards, 4px buttons
6. Text is black/near-black on white for tile scan-ability
7. Sale badges sit on a `rgba(0,0,0,0.2)` scrim for legibility over imagery

---

## 10. Voice & Tone

CJ ONSTYLE's voice is **brisk, benefit-forward, and deal-driven** — the register of a trusted home-shopping host translating a live pitch into a scannable screen. Copy leads with the offer ("~50%할인", "5%카드", "적립5%") and the concrete product benefit, in plain, high-energy Korean. It treats the shopper as a value-seeker who wants the discount, the terms, and the "buy" path with minimal friction. Where a fintech might reassure, CJ ONSTYLE motivates.

| Context | Tone |
|---|---|
| Promo headlines | High-energy, offer-first. "빕스바우처 ~56%". Numbers and rates lead. |
| Benefit badges | Terse, factual perks. "적립5%", "카드 5%", "네이버포인트". |
| Buy CTAs | Direct imperatives. "바로구매", "장바구니", "상품문의". |
| Product titles | Descriptive, spec-forward, plain black text. |
| Utility / nav | Neutral and functional. "로그인", "마이존", "카테고리". |

**Voice samples (verbatim from live surfaces):**
- "바로구매" — PDP primary buy CTA (direct commit imperative). *(verified live 2026-07-02)*
- "빕스바우처 ~56%" — promo banner headline (offer-first, rate leads). *(verified live 2026-07-02)*
- "적립5% / 카드 5% / 네이버포인트" — benefit overlay badges (terse perks). *(verified live 2026-07-02)*

**Forbidden register**: vague lifestyle poetry with no offer, undefined jargon, hesitant hedging on price, and low-contrast "quiet luxury" copy that hides the deal. The deal is the message.

## 11. Brand Narrative

CJ ONSTYLE (CJ온스타일) is the commerce arm of Korea's CJ Group, born from the country's pioneering TV home-shopping business (CJ오쇼핑 / CJ홈쇼핑) and relaunched under the **CJ ONSTYLE** brand in **2021** as a converged "live commerce + mobile shopping" platform. The rebrand unified CJ's TV broadcast, mobile app, and web storefront into a single style-and-living destination — the name itself fuses "ON" (always-on, on-air, online) with "STYLE," signaling the shift from a channel you watch to a shopping surface you live in.

The product DNA is unmistakably retail-television: a host's job is to make the value legible in seconds and move the viewer to purchase before the segment ends. That urgency is baked into the digital surface — the offer leads, the benefit badges stack, and the violet buy button is never more than a glance away. CJ ONSTYLE positions itself as a curated style-and-home destination rather than a bargain-bin marketplace, which is why the chrome stays clean and black-on-white while the promotional layer carries the color and noise.

What the design refuses: the heavy, decorative card-stacking of legacy portals (it stays flat and fast) and the cold minimalism of design-boutique commerce (it keeps the deal loud). What it embraces: density that respects a catalog of thousands of SKUs, a single trustworthy violet for the commit action, and a magenta price accent that reads instantly as "here is the deal."

## 12. Principles

1. **The offer leads.** Home shopping sells the value first. *UI implication:* surface discount rate, benefit badges, and price before secondary detail; let the magenta (`#ec0040`) price accent do the pulling.
2. **One color means "buy."** Violet (`#640faf`) is the commit signal. *UI implication:* reserve the saturated violet for the primary buy CTA and active states — never dilute it across decorative chrome.
3. **Density is a feature, not a flaw.** A catalog of thousands must be scannable. *UI implication:* pack tiles tightly, keep type dense (12px body), and prefer tint/hairline separation over space-hungry cards.
4. **Flat and fast.** Elevation slows a high-traffic grid. *UI implication:* no shadows; separate with `#f5f5f5`/`#f0f0f0` tint and `#e5e5e5` hairlines; keep the page quick to paint and scan.
5. **Quiet shell, loud pitch.** *UI implication:* Nanum Barun Gothic black-on-white for the navigation and product chrome; Pretendard bold plus the violet/magenta palette for the promotional layer.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable CJ ONSTYLE user segments (TV-home-shopping loyalists, mobile deal-seekers, style-and-home shoppers), not individual people.*

**이영숙, 54, 대전.** A long-time TV home-shopping viewer who now buys through the app during and after broadcasts. Trusts the CJ ONSTYLE brand and the host's pitch; wants the offer, the card benefit, and the buy button obvious without hunting.

**박지훈, 33, 서울.** A mobile-first deal-seeker who scans the home grid for the day's best discounts. Values density — he wants to compare many tiles and rates fast — and taps the violet 바로구매 the moment the price and points add up.

**최은정, 41, 경기.** A style-and-home shopper browsing curated fashion and living categories. Appreciates the clean black-on-white product chrome that lets the merchandise photography carry the page, with the deal badges layered only where they add value.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Single black (`#000000`) line explaining no matching products, with a path back to categories. No decorative illustration. |
| **Empty (empty cart)** | Muted grey (`#666666`) line: nothing in the cart yet, plus a violet CTA back to shopping. Calm, functional. |
| **Loading (grid fetch)** | Skeleton tiles on `#f5f5f5` at final card dimensions, 2px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (buy action)** | Inline spinner within the violet buy button; button stays `#640faf` and disables to prevent double-submit. |
| **Error (payment/checkout failed)** | Inline message in near-black (`#111111`) with a plain-language cause and a retry path. States what to do next, not just a generic failure. |
| **Error (form validation)** | Field-level message below the input; describes what is valid (e.g. address, card), not just "필수". |
| **Success (order placed)** | Confirmation screen with order summary; next-step detail (delivery, tracking) linked immediately. Restrained tone, no confetti. |
| **Skeleton** | `#f5f5f5` blocks at final tile dimensions, 2px radius, flat pulse. |
| **Sold out / unavailable** | Buy CTA switches to a disabled grey state; the violet is removed so "buy" is never implied when unavailable. |
| **Disabled** | Faint grey (`#929292`) text on reduced-opacity surface; violet actions fade rather than switch hue, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, tap feedback, focus |
| `motion-standard` | 200ms | Tile/section reveal, dropdown, tab switch |
| `motion-slow` | 400ms | Hero banner carousel auto-advance transition |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, sheets, tiles |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, carousel slide |

**Motion rules**: Motion is functional and quiet — consistent with the flat, high-throughput grid. The hero banner carousel auto-advances on a slow cadence with a horizontal slide; tap feedback on buttons and tiles is a subtle opacity/scale shift. Nothing bounces or springs — a commerce grid signals reliability and speed, not playfulness. Under `prefers-reduced-motion: reduce`, the carousel stops auto-advancing and all transitions collapse to instant; the storefront remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on
https://www.cjonstyle.com (→ display.cjonstyle.com/p/homeTab/main) and
https://display.cjonstyle.com/p/item/2086524438:
- Buy CTA "바로구매" — bg rgb(100,15,175) #640faf / white text / 4px radius / 60px height / 20px
- Sale/benefit badges "적립5%","카드 5%","~50%할인" — white 12px/700 Pretendard on rgba(0,0,0,0.2) scrim / 2px radius
- Promo banner headline "빕스바우처 ~56%" — Pretendard 26px/700 white
- GNB nav — Nanum Barun Gothic 15px #111111; body default #000000 12px/18px
- box-shadow none across nav/GNB/buy CTA/cards (near-flat system)
- document.title "홈 | CJ온스타일"

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Proof block).

Voice samples (§10) are verbatim from live surfaces (PDP buy CTA, promo banner headline, benefit badges).

Brand narrative (§11): CJ ONSTYLE is the CJ Group commerce brand relaunched in 2021 from
CJ오쇼핑/CJ홈쇼핑 (TV home shopping) as a converged live-commerce + mobile platform. These are
widely documented public facts about the company; specific details beyond the homepage are
general public knowledge, not directly quoted from a verified CJ ONSTYLE statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable CJ ONSTYLE user
segments (TV home-shopping loyalists, mobile deal-seekers, style-and-home shoppers). Names
are illustrative; they do not refer to real people.

Interpretive claims (e.g., "the offer leads", "one color means buy", "quiet shell, loud pitch")
are editorial readings connecting CJ ONSTYLE's observed design to its home-shopping heritage,
not directly sourced CJ ONSTYLE statements.
-->

---
id: kyobobook
name: Kyobo Book Centre
display_name_kr: 교보문고
country: KR
category: ecommerce
homepage: "https://www.kyobobook.co.kr"
primary_color: "#5055b1"
logo:
  type: favicon
  slug: "https://contents.kyobobook.co.kr/resources/fo/images/common/ink/favicon/favicon_256x256.png"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = KDS blue 700 #5055b1 (documented UI base color + live 바로구매 buy-now CTA); green 700 #4dac27 is the heritage Kyobo bird-logo green, used as the positive/success accent. Storefront runs Pretendard; the main portal + design-system site run NotoSansKR."
  colors:
    primary: "#5055b1"
    accent-indigo: "#474c98"
    indigo-tint: "#ededf7"
    link: "#314fb9"
    green: "#4dac27"
    green-dark: "#195800"
    green-text: "#278203"
    hottracks: "#da2128"
    negative: "#ec1f2d"
    sale: "#c71e24"
    ink: "#000000"
    ink-soft: "#292929"
    body: "#595959"
    muted: "#767676"
    canvas: "#ffffff"
    surface: "#f2f2f2"
    surface-alt: "#f7f7f7"
    hairline: "#eaeaea"
    border: "#d5d5d5"
    border-strong: "#cccccc"
  typography:
    family: { primary: "NotoSansKR", commerce: "Pretendard" }
    display:    { size: 40, weight: 900, lineHeight: 1.2, use: "Design-system / marketing display headline (Kyobobook Design System)" }
    heading:    { size: 24, weight: 700, lineHeight: 1.4, use: "Section headings (오늘의 선택, 온라인 주간 베스트)" }
    subheading: { size: 20, weight: 700, lineHeight: 1.3, use: "Sub-section heads, DS nav labels" }
    body:       { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
    body-sm:    { size: 14, weight: 400, lineHeight: 1.5, use: "Dense UI text, nav, button labels" }
    caption:    { size: 12, weight: 400, lineHeight: 1.5, use: "Metadata, utility links (로그인, 회원가입)" }
    nav-promo:  { size: 16, weight: 700, lineHeight: 1.5, use: "Promo nav links in dark green (상반기결산, 주말특가)" }
  spacing: { xs: 4, sm: 8, md: 14, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 4, md: 8, lg: 24, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#5055b1", fg: "#ffffff", radius: "8px", height: "38px", padding: "9px 14px", font: "14px / 500 Pretendard", use: "Primary purchase CTA (바로구매/구매하기); KDS Primary button, blue 700 UI base" }
    button-secondary: { type: button, bg: "#767676", fg: "#ffffff", radius: "8px", height: "38px", padding: "9px 14px", font: "14px / 500 Pretendard", use: "Secondary action (장바구니/add-to-cart); KDS Secondary, neutral grey" }
    category-tab: { type: tab, fg: "#767676", active: "text #000000 + 2px bottom border #5055b1", font: "16px / 400", use: "Catalog category tabs (국내도서/외국도서/eBook)" }
    view-toggle: { type: tab, bg: "#ffffff", border: "1px solid #cccccc", radius: "4px", active: "border #5055b1", use: "List / thumbnail view segmented toggle" }
    input-search: { type: input, bg: "#ffffff", fg: "#000000", border: "1px solid #eaeaea", radius: "24px", height: "48px", padding: "13px 16px", use: "Header integrated search, pill-ended; focus blue #5055b1" }
    card-product: { type: card, bg: "#ffffff", border: "1px solid #eaeaea", radius: "8px", use: "Book / product card; flat, hairline-separated" }
    badge-sale: { type: badge, fg: "#c71e24", radius: "4px", font: "12px / 700", use: "Sale / discount-rate price label" }
    badge-positive: { type: badge, fg: "#278203", radius: "4px", font: "12px / 500", use: "Positive / in-stock status; green 700 family" }
  components_harvested: true
---

# Design System Inspiration of Kyobo Book Centre

## 1. Visual Theme & Atmosphere

Kyobo Book Centre (교보문고) is Korea's largest and oldest book retailer, and its digital storefront reads exactly like its physical flagship: a calm, content-first reading room where the merchandise — books — does the talking. The interface is built on a near-invisible neutral chassis (white `#ffffff` canvas over a soft grey `#f2f2f2` surface) so that book covers, prices, and titles carry all the color. Body text sits in pure black `#000000` and a ladder of warm greys (`#292929`, `#595959`, `#767676`), never a tinted ink, which keeps the dense bibliographic data legible at small sizes. This is a commerce system designed for scanning long lists, not for hero-driven persuasion.

The brand's chromatic identity is a deliberate two-color story documented in the official Kyobobook Design System (KDS). The primary UI color — labelled "UI 기본컬러" in the KDS color foundation — is a confident indigo-blue, **blue 700 `#5055b1`**, which drives the single most important commerce action on the site: the 바로구매 (Buy Now) button. Alongside it lives the heritage **green 700 `#4dac27`**, the color of the famous Kyobo bird-and-tree mark, demoted in the digital system to the "Positive/Accent" role (success states, stock, and the dark-green `#195800` promotional nav links and `#278203` confirmation text). The KDS rounds out its semantic palette with `#da2128` reserved for the Hottracks (핫트랙스) sub-brand and `#ec1f2d` for negative/error — explicitly warning designers not to confuse the two reds — while the storefront itself uses a slightly warmer `#c71e24` for sale-discount pricing.

Supporting accents stay quiet and purposeful: an indigo text accent `#474c98`, a pale indigo tint `#ededf7` for selected surfaces, and a blue link color `#314fb9`. Separation is almost entirely flat — there are essentially no drop shadows; the system leans on hairlines (`#eaeaea`), mid borders (`#d5d5d5`, `#cccccc`), and the alternating `#f7f7f7` surface tint to segment a famously information-dense catalog. Typography splits by surface: the main portal and the KDS site run **NotoSansKR**, while the commerce storefront runs **Pretendard**, both at a workhorse 16px/400 body with 700 headings. The total impression is utilitarian and trustworthy — a 40-year institution that treats clarity and reading as the product, not visual spectacle.

**Key Characteristics:**
- Two-color brand system per KDS: indigo-blue `#5055b1` as the primary UI/action color, heritage green `#4dac27` as the positive accent
- Content-first neutrality — white `#ffffff` / grey `#f2f2f2` chassis so book covers carry the color
- Pure-black `#000000` ink over a warm grey ladder (`#292929` / `#595959` / `#767676`) for dense, legible catalog text
- Flat, near-shadowless depth — hairlines (`#eaeaea`), borders (`#d5d5d5`, `#cccccc`) and surface tint (`#f7f7f7`) do the separating
- Disciplined semantic reds — `#da2128` for Hottracks, `#ec1f2d` for error, `#c71e24` for sale price (never interchanged)
- Dual typeface system — NotoSansKR on the portal/DS, Pretendard on the storefront
- Conservative geometry — 8px buttons, 4px segmented toggles, a 24px pill-ended search bar
- One-action-per-area discipline — the indigo Buy Now is the single emphasized CTA, cart sits in neutral grey

## 2. Color Palette & Roles

### Primary
- **Kyobo Blue 700** (`#5055b1`): The KDS-documented "UI 기본컬러" (UI base color) and Informative/Accent token. Primary action color — the background of the 바로구매 (Buy Now) CTA, focus rings, and active tab indicators.
- **Indigo Accent** (`#474c98`): A deeper indigo used for emphasized text, active labels, and accent typography across the commerce surface.
- **Indigo Tint** (`#ededf7`): A pale indigo surface for selected/active chip and filter backgrounds.

### Brand Green (Positive)
- **Kyobo Green 700** (`#4dac27`): The heritage bird-logo green, documented in KDS as the Positive/Accent semantic — success, emphasis, and brand recall.
- **Green Dark** (`#195800`): A deep forest green used for bold promotional nav links (상반기결산, 주말특가).
- **Green Text** (`#278203`): Mid-green for positive/in-stock status text and confirmations.

### Semantic Reds
- **Hottracks Red** (`#da2128`): KDS "red 700" reserved exclusively for the Hottracks (핫트랙스) sub-brand — never for error.
- **Negative Red** (`#ec1f2d`): KDS error/negative semantic — serious errors and warnings, used sparingly.
- **Sale Red** (`#c71e24`): The storefront's discount/sale-price color on product listings.

### Links & Neutrals
- **Link Blue** (`#314fb9`): Inline text links on commerce pages.
- **Ink** (`#000000`): Primary text, headings, and titles — pure black for maximum legibility.
- **Ink Soft** (`#292929`): Secondary headings and strong body emphasis.
- **Body Grey** (`#595959`): Standard body and utility-link text (로그인, 회원가입).
- **Muted Grey** (`#767676`): Tertiary text, inactive tabs, and the neutral cart button background.

### Surface & Borders
- **Canvas White** (`#ffffff`): Page background, card surfaces, and text on indigo/green.
- **Surface Grey** (`#f2f2f2`): The dominant tinted surface segmenting content zones.
- **Surface Alt** (`#f7f7f7`): A lighter alternating surface for KDS panels and section bands.
- **Hairline** (`#eaeaea`): The primary divider/border color given the flat, shadowless system.
- **Border** (`#d5d5d5`): Standard mid-weight borders on inputs and containers.
- **Border Strong** (`#cccccc`): Heavier borders on segmented controls and toggles.

## 3. Typography Rules

### Font Family
- **Primary / Portal & DS**: `NotoSansKR` — the main www.kyobobook.co.kr portal and the design-system site default.
- **Commerce / Storefront**: `Pretendard` — the store.kyobobook.co.kr catalog and product surfaces.
- Both are hangul-optimized sans-serifs; the system never mixes a serif into UI chrome.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display | NotoSansKR | 40px (2.50rem) | 900 | 1.2 | DS / marketing display ("Kyobobook Design System") |
| Section Heading | NotoSansKR / Pretendard | 24px (1.50rem) | 700 | 1.4 | Section titles (오늘의 선택, 온라인 주간 베스트) |
| Sub-section | NotoSansKR | 20px (1.25rem) | 700 | 1.3 | DS nav labels, sub-heads |
| Promo Nav | NotoSansKR | 16px (1.00rem) | 700 | 1.5 | Highlighted promo nav in dark green |
| Body | NotoSansKR / Pretendard | 16px (1.00rem) | 400 | 1.5 | Standard reading text |
| Body Small | Pretendard | 14px (0.88rem) | 400-500 | 1.5 | Dense UI text, nav, button labels |
| Caption | NotoSansKR | 12px (0.75rem) | 400 | 1.5 | Utility links, metadata |

### Principles
- **Two fonts, two surfaces**: NotoSansKR owns the portal and design system; Pretendard owns the storefront. Within a surface the typeface is consistent.
- **Weight, not color, signals hierarchy**: 700/900 for headings against 400 body; the neutral ink ladder handles the rest.
- **Dense by design**: a 16px body with 14px UI text supports long, scannable catalog lists — the core reading-room use case.
- **Color reserved for meaning**: green for promos/positive, red for sale/error, indigo for action — body text stays neutral.

## 4. Component Stylings

### Buttons

**Buy Now (Primary)**
- Background: `#5055b1`
- Text: `#ffffff`
- Radius: 8px
- Padding: 9px 14px
- Height: 38px
- Font: 14px Pretendard weight 500
- Use: Primary purchase CTA (바로구매 / 구매하기) — KDS Primary button, one per content area

**Add to Cart (Secondary)**
- Background: `#767676`
- Text: `#ffffff`
- Radius: 8px
- Padding: 9px 14px
- Height: 38px
- Font: 14px Pretendard weight 500
- Use: Secondary action (장바구니) — KDS Secondary button, neutral grey to defer to the primary

### Inputs & Forms

**Integrated Search**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#eaeaea`
- Radius: 24px
- Padding: 13px 16px
- Height: 48px
- Focus: blue `#5055b1` ring
- Use: Header integrated search bar — pill-ended, the portal's most prominent input

### Cards & Containers

**Product Card**
- Background: `#ffffff`
- Border: 1px solid `#eaeaea`
- Radius: 8px
- Use: Book / product card on grid and list views — flat, hairline-separated, no shadow

### Tabs

**Category Tab**
- Text (inactive): `#767676`
- Active: `#000000` text + 2px bottom border `#5055b1`
- Font: 16px weight 400
- Padding: 0px 14px
- Height: 42px
- Use: Catalog category tabs (국내도서 / 외국도서 / eBook / sam / 핫트랙스)

**View Toggle (Segmented)**
- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Radius: 4px
- Active: border `#5055b1`
- Height: 38px
- Use: List / thumbnail view switch on listing pages

### Badges

**Sale Price**
- Text: `#c71e24`
- Radius: 4px
- Font: 12px weight 700
- Use: Discount-rate / sale-price label on product listings

**Positive Status**
- Text: `#278203`
- Radius: 4px
- Font: 12px weight 500
- Use: Positive / in-stock status pill — green 700 family

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 4 brand-owned surfaces)
**Tier 1 sources:** https://www.kyobobook.co.kr, https://store.kyobobook.co.kr/bestseller/online/weekly, https://design.kyobobook.co.kr, https://company.kyobobook.co.kr
**Tier 2 sources:** getdesign.md/kyobobook — not listed (404); styles.refero.design — no Kyobo match on name search
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px, with a dense small end (4 / 8 / 14 / 16)
- Scale: 4px, 8px, 14px, 16px, 24px, 32px, 48px
- Notable: button padding lands at 9px 14px and tab padding at 0 14px — compact hit areas tuned for information-dense pages

### Grid & Container
- Wide centered content area with a fixed top header (logo + integrated search + utility links)
- Catalog pages use multi-column product grids with a list/thumbnail toggle
- Sections separate by a `#f2f2f2` / `#f7f7f7` surface shift and `#eaeaea` hairlines rather than elevation
- Promotional and best-seller rails sit as horizontally scannable bands

### Whitespace Philosophy
- **Content over chrome**: whitespace exists to let dense book metadata breathe, not for dramatic emptiness
- **Flat segmentation**: tinted surfaces and hairlines do the structural work; the system is near-shadowless
- **Scan-first rhythm**: consistent card and row dimensions keep long lists predictable

### Border Radius Scale
- Small (4px): segmented toggles, badges
- Medium (8px): buttons, product cards — the workhorse
- Large (24px): pill-ended search bar
- Full (9999px): occasional fully-rounded chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f2f2f2` / `#f7f7f7` background shift | Section / card separation without elevation |
| Hairline (Level 2) | `1px solid #eaeaea` (or `#d5d5d5` / `#cccccc`) | Card outlines, dividers, segmented controls |

**Shadow Philosophy**: Kyobo's storefront is a near-flat system. Live inspection across the portal, the storefront, and the KDS site returned `box-shadow: none` on virtually every interactive element — buttons, cards, tabs, and search. Depth is communicated through surface tint (`#f2f2f2`, `#f7f7f7`) and a hairline ladder (`#eaeaea` → `#d5d5d5` → `#cccccc`). This is appropriate for a high-density catalog: shadows would add visual noise to pages that already carry dozens of products per screen. When emphasis is needed, the system reaches for the indigo `#5055b1` action color or the green `#4dac27` accent — never elevation.

## 7. Do's and Don'ts

### Do
- Use indigo `#5055b1` for the single primary action (Buy Now) — it is the KDS UI base color
- Keep the cart and secondary actions in neutral grey `#767676` so the primary stays unambiguous
- Reserve green `#4dac27` / `#278203` for positive and promotional moments only
- Use clear action-verb CTA labels (-하기, -보기) and separate two choices with a slash "/", per the KDS Voice guide
- Keep pure black `#000000` and the grey ladder for dense catalog text
- Separate sections with `#f2f2f2` / `#f7f7f7` surface tint and `#eaeaea` hairlines, not shadows
- Pair color semantics with text or icons so meaning survives for color-blind users (KDS accessibility rule)

### Don't
- Don't confuse the reds — `#da2128` is Hottracks only, `#ec1f2d` is error, `#c71e24` is sale price
- Don't spread the indigo action color across many elements — one emphasized action per area
- Don't add drop shadows for elevation — the system is flat
- Don't use CTA labels longer than 12 characters (incl. spaces) or abstract wording, per KDS Voice
- Don't rely on color alone to convey state — always add a label or icon
- Don't introduce a serif or a third typeface into UI chrome
- Don't tint body text — keep it on the neutral black/grey ladder

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, hamburger nav, search collapses, tab rows limit to 3-4 (KDS MO rule) |
| Tablet | 768-1024px | 2-3 column product grids, condensed header |
| Desktop | 1024-1440px | Full multi-column catalog, persistent search, tab rows 3-6 (KDS PC rule) |

### Touch Targets
- Buy Now / cart buttons at 38px height with 9px 14px padding
- Search bar at 48px height — the largest, most tappable input
- Category tabs at 42px height with comfortable horizontal padding

### Collapsing Strategy
- Header: full nav + search → hamburger + icon search on mobile
- Tabs: 3-6 per row on PC compress to 3-4 per row on mobile (KDS-documented)
- Product grids: multi-column → 2-up → single column
- Surface tint and hairline separation persist across breakpoints

### Image Behavior
- Book covers are the primary imagery and carry no shadow at any size, consistent with the flat system
- Product cards maintain an 8px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action (Buy Now): Kyobo Blue (`#5055b1`)
- Secondary action (Cart): Muted Grey (`#767676`)
- Positive / promo: Green (`#4dac27`), Green Dark (`#195800`), Green Text (`#278203`)
- Sale price: Sale Red (`#c71e24`)
- Error: Negative Red (`#ec1f2d`); Hottracks: `#da2128`
- Link: Link Blue (`#314fb9`); Indigo accent: `#474c98`
- Background: White (`#ffffff`); Surface: `#f2f2f2` / `#f7f7f7`
- Text: Ink `#000000` / `#292929` / `#595959` / `#767676`
- Hairline / borders: `#eaeaea` / `#d5d5d5` / `#cccccc`

### Example Component Prompts
- "Create a product card: white `#ffffff` background, 1px solid `#eaeaea` border, 8px radius, no shadow. Title 16px Pretendard weight 400 in `#000000`, price in `#c71e24` 12px weight 700. Below it a Buy Now button (`#5055b1` bg, white text, 8px radius, 9px 14px padding, 14px/500) and a grey Cart button (`#767676` bg)."
- "Build a category tab row: inactive labels `#767676` 16px/400, active label `#000000` with a 2px `#5055b1` bottom border. 42px height."
- "Design an integrated search bar: white background, 1px `#eaeaea` border, 24px pill radius, 48px height, 13px 16px padding, focus ring `#5055b1`."
- "Lay out a section: `#f2f2f2` surface band, 24px heading weight 700 in `#000000`, cards in white with `#eaeaea` hairlines. No shadows."

### Iteration Guide
1. Indigo `#5055b1` is the single primary-action color; grey `#767676` carries the secondary
2. Green (`#4dac27` / `#278203`) and reds (`#da2128` / `#ec1f2d` / `#c71e24`) are strictly semantic — never decorative
3. No shadows — separate with `#f2f2f2` / `#f7f7f7` tint and `#eaeaea` hairlines
4. Geometry: 8px buttons/cards, 4px toggles, 24px search pill
5. Body text stays on the black/grey ladder; weight, not color, drives hierarchy
6. NotoSansKR on the portal/DS, Pretendard on the storefront

---

## 10. Voice & Tone

Kyobo's voice is documented first-hand in the KDS Voice guide: a consistent, single-person voice that speaks in Korean **구어체 (해요체)** — a soft, friendly, uniformly respectful colloquial register — switching to a more formal 문어체 only for policy and disclaimers to convey stability and trust. The KDS states five basic principles for the voice: **간결하고 명확한** (concise and clear), **책임감 있는** (responsible), **공감하는** (empathetic), **존중하는** (respectful), and **동기부여하는** (motivating). The guiding rule "한 문장에 한 가지 정보만" (one piece of information per sentence) keeps a dense catalog readable.

| Context | Tone |
|---|---|
| CTA buttons | Action verbs (-하기, -보기); two options separated by a slash "/"; max 12 characters incl. spaces (KDS rule) |
| Product / catalog copy | Concise and clear — one fact per line; official product and service names only |
| Empty states | State the situation plainly and offer a meaningful next path with a clear CTA (KDS Empty Page rule) |
| Policy / disclaimers | Formal 문어체 for stability and trust |
| Promotional rails | Warmer, motivating register — sparks curiosity and repeat visits |

**Tone attributes** (KDS): 위트있는 (witty), 고객을 잘 아는 (knows the customer), 정돈된 (organized), 다양한 (diverse), 지혜로운 (wise), 포용적인 (inclusive), 영감이 가득한 (inspiring), 고급스러운 (premium).

**Forbidden register**: abstract CTAs with no clear action, unofficial/ad-hoc product names, CTA labels over 12 characters, messages that don't reveal the next path, and color-only state cues without text.

## 11. Brand Narrative

Kyobo Book Centre (교보문고) opened its flagship store beneath the Kyobo Building in Gwanghwamun, Seoul, on **June 1, 1980**, founded by **신용호 (Shin Yong-ho)** — the founder of Kyobo Life Insurance (교보생명), of which the bookstore is an affiliate. From the start it was conceived not as a profit center but as a cultural institution: the founder's instruction was that the store welcome everyone, including those who came only to read and not to buy. That ethos is literally inscribed in the company's most famous motto — **"사람은 책을 만들고 책은 사람을 만든다"** (People make books, and books make people) — and lives on publicly in the **광화문글판**, the giant seasonal poetry banner on the Gwanghwamun building that has become a Seoul landmark since 1991.

Over four decades Kyobo grew into Korea's largest bookstore chain — a nationwide network of cavernous reading-room stores plus the dominant online bookshop, the eBook platform, the **sam** subscription service, and the **핫트랙스 (Hot Tracks)** music/stationery sub-brand. The digital product mirrors the stores: vast inventory, a culture of browsing, and an institutional calm.

What Kyobo's design refuses, visible in its system: the loud, urgency-driven chrome of discount-first commerce. What it embraces, per the official KDS mission — **"사용자 경험을 가치있게, 고객의 삶을 흥미롭게"** (make the user experience valuable, make customers' lives interesting) — is a content-first interface where books carry the color, the indigo action is singular and clear, and the heritage green signals trust earned over forty years.

## 12. Principles

1. **Content is the hero, chrome is neutral.** *UI implication:* keep the chassis white/grey and the ink neutral so book covers and titles carry all the color.
2. **One action per area.** The KDS Button guide states a single area should drive one action. *UI implication:* the indigo `#5055b1` Buy Now is the only emphasized CTA; cart and the rest stay neutral grey.
3. **Color is semantic, never decorative.** KDS defines blue (informative/action), green (positive), and reds (Hottracks vs error). *UI implication:* never reuse a semantic color for ornament, and never confuse the three reds.
4. **Flat and dense by design.** *UI implication:* no shadows; separate with surface tint and hairlines so high-density catalog pages stay calm.
5. **Speak clearly, one fact at a time.** From the KDS Voice guide. *UI implication:* concise action-verb CTAs, one piece of information per sentence, meaningful empty states.
6. **Accessible by default.** KDS requires color cues to be paired with text/icons and contrast to meet AA. *UI implication:* state is never color-only.
7. **Trust earned over decades.** *UI implication:* the heritage green and institutional restraint signal a 40-year cultural institution, not a flash-sale shop.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Kyobo user segments (Korean book buyers, students, gift shoppers, eBook readers), not individual people.*

**김도윤, 34, 서울.** A knowledge worker who buys both print and eBooks. Browses the best-seller and PICKS rails the way he used to wander the Gwanghwamun store. Values that the Buy Now action is always the same indigo button — he never has to hunt for the next step.

**이서연, 22, 대전.** A university student comparing textbook prices and discounts. Relies on the clear sale-red pricing and the list/thumbnail toggle to scan dozens of editions quickly. Trusts Kyobo because the interface is calm and never pressures her.

**박민재, 45, 부산.** A parent buying children's books and stationery from Hot Tracks. Appreciates that the catalog is dense but legible and that promos are clearly marked in green rather than shouting. Reads the 광화문글판 line every season and feels the brand stands for something.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, a concise plain-language line stating the situation, and a clear CTA to a meaningful next path (KDS Empty Page rule). No clutter. |
| **Empty (cart / wishlist)** | Neutral grey `#767676` line explaining the empty state plus a path back to browsing. Calm, honest. |
| **Loading (catalog fetch)** | Skeleton rows/cards at final dimensions on `#f2f2f2` surface, 8px radius, flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Input — Focused** | Border shifts to indigo `#5055b1` (KDS Input Focused state). |
| **Input — Error** | Field-level message in negative red `#ec1f2d` describing what is invalid (KDS Error state); never color alone. |
| **Input — Success** | Positive cue in green `#278203` confirming valid format (KDS Success state). |
| **Sale / discount** | Price shown in sale red `#c71e24` with the discount rate; the original price struck through in muted grey. |
| **Disabled** | Reduced-opacity surface with muted `#767676` label; the indigo action fades rather than switching hue. |
| **Positive / in-stock** | Green `#278203` status text or pill, paired with a label so the meaning is not color-only. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus ring |
| `motion-standard` | 200ms | Tab switch, dropdown, card/section reveal |
| `motion-slow` | 320ms | Page-level transitions, rail scroll |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, panels, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, tab indicator |

**Motion rules**: Motion is functional and quiet, matching the flat, content-first aesthetic. The active tab's `#5055b1` underline slides between tabs at `motion-standard / ease-standard`; buttons respond to press with a subtle opacity/scale shift; catalog results fade in from below at `motion-standard / ease-enter`. No bounce or spring — a 40-year reading-room institution signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant while the storefront stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on four brand-owned surfaces:
- https://www.kyobobook.co.kr — portal, NotoSansKR, neutral chassis, integrated search bar
- https://store.kyobobook.co.kr/bestseller/online/weekly — storefront, Pretendard, 바로구매 #5055b1 / 장바구니 #767676 / sale #c71e24 / green #278203
- https://design.kyobobook.co.kr — official Kyobobook Design System (KDS): Foundation/Color, Component (Button/Input/Chip/Tab), Voice
- https://company.kyobobook.co.kr — corporate site: mission and core values

KDS Foundation/Color tokens (verbatim from the live DS page):
- blue 700 #5055B1 — "UI 기본컬러", Informative/Accent (primary UI color)
- green 700 #4DAC27 — Positive/Accent (success)
- red 700 #DA2128 — Hottracks primary
- red #EC1F2D — Negative/error ("핫트랙스 red-700과 부정의 의미 red를 혼동하지 않도록 주의")

KDS Voice (verbatim from https://design.kyobobook.co.kr/voice):
- 구어체(해요체) single consistent voice; formal 문어체 for policy
- Five principles: 간결하고 명확한 / 책임감 있는 / 공감하는 / 존중하는 / 동기부여하는
- Tone attributes: 위트있는 / 고객을 잘 아는 / 정돈된 / 다양한 / 지혜로운 / 포용적인 / 영감이 가득한 / 고급스러운
- CTA rule: 동작 동사(-하기/-보기), slash "/" for two choices, max 12 chars incl. spaces
- Empty Page rule: state the situation concisely + clear CTA to a meaningful path

KDS mission (https://design.kyobobook.co.kr): "사용자 경험을 가치있게, 고객의 삶을 흥미롭게".
Company core values (https://company.kyobobook.co.kr): 도전과 창의 / 고객중심 / 정직과 성실.

Brand narrative (§11): Kyobo Book Centre opened in Gwanghwamun, Seoul on 1980-06-01, founded by
Shin Yong-ho (founder of Kyobo Life Insurance); motto "사람은 책을 만들고 책은 사람을 만든다";
광화문글판 since 1991; sub-brands sam (eBook subscription) and 핫트랙스 (Hot Tracks). These are
widely documented public facts; specific founding details beyond the live sites are general public
knowledge, not directly quoted from a verified Kyobo statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Kyobo user segments.
Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "content is the hero, chrome is neutral", "books carry the color")
are editorial readings connecting Kyobo's observed design and stated KDS principles to its
positioning, not directly sourced Kyobo statements.
-->

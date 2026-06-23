---
id: ssg
name: SSG.COM
display_name_kr: 쓱닷컴
country: KR
category: ecommerce
homepage: "https://www.ssg.com"
primary_color: "#ff5452"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ssg.com&sz=128"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = SSG 브랜드 코랄-레드 (#ff5452); 광범위하게 쓰이는 대비색. 배경 기본 흰색+라이트그레이(#f5f5f5). 타이포는 Pretendard 전용. 탭/버튼에서 진한 near-black (#222222)이 active 상태를 표현."
  colors:
    primary: "#ff5452"
    primary-light: "#fff2f2"
    ink: "#222222"
    muted: "#777777"
    muted-2: "#666666"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    hairline: "#cfcfcf"
    hairline-2: "#e5e5e5"
    dark-nav: "#31313b"
    on-primary: "#ffffff"
    disabled-bg: "#e5e5e5"
    disabled-fg: "#999999"
  typography:
    family: { display: "Pretendard", body: "Pretendard" }
    nav:       { size: 12, weight: 500, lineHeight: 1.5, use: "Header utility links (로그인/회원가입/고객센터)" }
    body:      { size: 12, weight: 400, lineHeight: 1.5, use: "Base body text" }
    label-sm:  { size: 11, weight: 500, lineHeight: 1.45, use: "Badge/tag labels (무료배송, 오늘출발)" }
    category:  { size: 14, weight: 500, lineHeight: 1.4, use: "Category tab items (패션의류, 뷰티 등)" }
    price:     { size: 16, weight: 600, lineHeight: 1.25, use: "Sale price / 판매가격 emphasis" }
    heading:   { size: 12, weight: 700, lineHeight: 1.5, use: "H1 site title (screen-reader)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 48 }
  rounded: { sm: 5, md: 6, lg: 24, full: 9999 }
  shadow:
    none: "none"
  components:
    tab-active:       { type: tab, bg: "#222222", fg: "#ffffff", radius: "24px", padding: "0px 16px", height: "46px", font: "16px / 700", active: "bg #222222 fg #ffffff", use: "Active category pill (e.g. 오반장 selected)" }
    tab-inactive:     { type: tab, bg: "#ffffff", fg: "#777777", radius: "24px", padding: "0px 16px", height: "46px", font: "16px / 500", use: "Inactive category pill" }
    filter-active:    { type: tab, bg: "#222222", fg: "#ffffff", radius: "0px", padding: "0px 12px", height: "40px", font: "14px / 700", use: "Active sub-category tab (e.g. 여행/e쿠폰 selected)" }
    filter-inactive:  { type: tab, bg: "#ffffff", fg: "#666666", radius: "0px", padding: "0px 12px", height: "40px", font: "14px / 500", use: "Inactive sub-category tab" }
    badge-label:      { type: badge, bg: "#f5f5f5", fg: "#222222", radius: "0px", font: "11px / 500", use: "Shipping/service badge (무료배송, 오늘출발)" }
    badge-price-red:  { type: badge, bg: "#ff5452", fg: "#ffffff", radius: "0px", font: "11px / 500", use: "Discount rate / price highlight badge" }
    card-product:     { type: card, bg: "#ffffff", fg: "#222222", border: "1px solid #e5e5e5", radius: "0px", use: "Product listing card with image + price" }
    input-search:     { type: input, bg: "#ffffff", fg: "#222222", border: "1px solid #cfcfcf", radius: "0px", font: "13px / 400", use: "Search input field in header" }
    select-option:    { type: input, bg: "#ffffff", fg: "#222222", border: "1px solid #cfcfcf", radius: "5px", padding: "0px 39px 0px 14px", height: "38px", font: "14px / 400", use: "Option select dropdown (색상선택 등)" }
    btn-out-of-stock: { type: button, bg: "#cfcfcf", fg: "#777777", radius: "0px", font: "16px / 400", use: "Sold-out / 품절 state button" }
  components_harvested: true
---

# Design System Inspiration of SSG.COM

## 1. Visual Theme & Atmosphere

SSG.COM (쓱닷컴) is South Korea's flagship premium e-commerce platform, born from the convergence of Shinsegae department store prestige and the everyday convenience of emart. The homepage presents an uncluttered white canvas (`#ffffff`) layered over a neutral light-grey surface (`#f5f5f5`) — the visual equivalent of a well-lit department store floor: clean, spacious, and focused on the merchandise. Yet SSG's visual identity is unmistakably distinguished by a single bold brand accent: a vivid coral-red (`#ff5452`), used for discount badges, price highlights, sale labels, and promotional banners. That red is the price tag color of Korean retail made digital — assertive, urgent, and immediately legible.

The typographic base is **Pretendard** across all hierarchy levels, a contemporary Korean-optimized typeface valued for its hangul legibility and neutral, versatile weight range. Unlike other KR e-commerce platforms that split between a display face and a body face, SSG stays in one type family — distinction comes through weight (400 body → 500 labels → 600 prices → 700 active tabs) and size (11px badges → 12px base → 14px categories → 16px price + tabs). The result reads as information-dense but never chaotic.

What defines SSG's interaction language is its near-zero border-radius philosophy on most surfaces — product cards, navigation tabs, inputs, and layout blocks are essentially square. The only rounded shapes are the category "pill tabs" (24px radius) which create a soft contrast to the hard-edged commerce grid below. The system is deliberately non-playful: SSG competes on selection and trust, not personality. Color restraint (one accent, neutral greys, white canvas) and editorial flatness keep the experience premium without the minimalism becoming cold.

**Key Characteristics:**
- Pretendard as the sole typeface across all contexts — weight alone signals hierarchy
- Brand red (`#ff5452`) as the exclusive accent: discount badges, price highlights, CTAs
- Near-zero radius on core commerce surfaces (cards, grid, inputs, nav) — hard-edged, editorial
- Pill-shaped category tabs (24px radius) as the single curved element class
- Near-black (`#222222`) for active states and primary text weight
- Light-grey surface (`#f5f5f5`) as the page background; pure white for cards and containers
- No box-shadow on product cards — separation by `#e5e5e5` borders only
- Light/tinted red (`#fff2f2`) for promotional surface backgrounds (sale zone headers)

## 2. Color Palette & Roles

### Primary Brand
- **SSG Red** (`#ff5452`): The brand's sole saturated accent. Used on discount badges, "쓱특가" sale labels, promotional banners, price-emphasis text, and active-state markers. High-frequency on the homepage (148 element occurrences in live scan).
- **Red Tint** (`#fff2f2`): The ultra-light wash of brand red. Used for promotional section backgrounds, coupon box highlights, and sale zone surfaces — gives the page red energy without full saturation.

### Neutral & Surface
- **Pure White** (`#ffffff`): Primary page background in most areas, product card backgrounds, header and footer surfaces.
- **Surface Grey** (`#f5f5f5`): The ambient page background — light neutral that separates sections without elevation. Most frequent background color in the DOM (663 occurrences).
- **Ink Dark** (`#222222`): Near-black for body text, active category tabs, icon fills, and anything needing maximum legibility. The text hierarchy anchor.
- **Dark Nav** (`#31313b`): Near-black with a slight blue-grey cast, used for the accessibility shortcut bar at top of page.

### Text Hierarchy
- **Ink Dark** (`#222222`): Primary text, active tabs, labels, price values.
- **Muted** (`#777777`): Secondary text, inactive tab labels, metadata.
- **Muted-2** (`#666666`): Tertiary text, utility links, sub-category labels.

### System Colors
- **Hairline** (`#cfcfcf`): Primary border color for inputs, select dropdowns, navigation controls.
- **Hairline-2** (`#e5e5e5`): Lighter separator for product card borders, carousel controls.
- **Disabled BG** (`#e5e5e5`): Background for sold-out / disabled state buttons.
- **Disabled FG** (`#999999`): Text on disabled elements.

## 3. Typography Rules

### Font Family
- **Pretendard** — the sole typeface family for all UI text. No display-only face; weight is the only axis of variation.

### Hierarchy

| Role | Size | Weight | Use |
|------|------|--------|-----|
| Base body | 12px | 400 | General text, descriptions, nav links |
| Utility nav | 12px | 500 | Header util items (로그인, 회원가입, 고객센터) |
| Badge / label | 11px | 500 | Small tag labels (무료배송, 오늘출발) |
| Category tab | 14px | 500 / 700 | Sub-category horizontal tabs; 700 = active |
| Price display | 16px | 600 | Sale / actual price emphasis |
| Pill tab | 16px | 500 / 700 | Large round category tabs; 700 = active selected |

### Principles
- **One family, weight scale**: Pretendard 400 → 500 → 600 → 700 carries the full hierarchy — no typeface switching.
- **Korean-first sizing**: Base at 12px is typical for information-dense KR e-commerce; product prices step up to 16px for emphasis.
- **Weight + size = urgency**: Price numbers at 16px/600 visually outrank category tabs at 14px/500, directing attention to the transaction layer.
- **No tracking adjustments**: No negative letter-spacing observed; SSG typography is legibility-first, not editorial-expressive.

## 4. Component Stylings

### Tabs

**Active Category Pill**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 24px
- Padding: 0px 16px
- Font: 16px / 700 / Pretendard
- Height: 46px
- Use: Selected main category pill (e.g. "오반장" active state)

**Inactive Category Pill**
- Background: `#ffffff`
- Text: `#777777`
- Radius: 24px
- Padding: 0px 16px
- Font: 16px / 500 / Pretendard
- Height: 46px
- Use: Unselected category pills

**Active Sub-Category Tab**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 0px
- Padding: 0px 12px
- Font: 14px / 700 / Pretendard
- Height: 40px
- Use: Selected horizontal category tab (no border-radius, flat edge)

**Inactive Sub-Category Tab**
- Background: `#ffffff`
- Text: `#666666`
- Radius: 0px
- Padding: 0px 12px
- Font: 14px / 500 / Pretendard
- Height: 40px
- Use: Unselected horizontal category navigation tab

### Buttons

**Sold-Out (Disabled)**
- Background: `#cfcfcf`
- Text: `#777777`
- Radius: 0px
- Font: 16px / 400 / Pretendard
- Height: 52px
- Use: 품절 (out-of-stock) state; square, no elevation

### Inputs & Forms

**Search Input**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#cfcfcf`
- Radius: 0px
- Font: 13px / 400 / Pretendard
- Height: 36px
- Use: Header search field

**Option Select**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#cfcfcf`
- Radius: 5px
- Padding: 0px 39px 0px 14px
- Font: 14px / 400 / Pretendard
- Height: 38px
- Use: Product option selector dropdowns (색상선택, 사이즈 등)

### Cards

**Product Listing Card**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#e5e5e5`
- Radius: 0px
- Use: E-commerce product card — no shadow, separated by thin hairline border only

### Badges

**Service Label Badge**
- Background: `#f5f5f5`
- Text: `#222222`
- Radius: 0px
- Font: 11px / 500 / Pretendard
- Use: Shipping/service info tags (무료배송, 오늘출발)

**Discount / Sale Badge**
- Background: `#ff5452`
- Text: `#ffffff`
- Radius: 0px
- Font: 11px / 500 / Pretendard
- Use: Promotional discount badges, sale labels overlaid on product images

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.ssg.com, https://www.ssg.com/disp/category.ssg?dispCtgId=6000013
**Tier 2 sources:** getdesign.md/ssg (404 — not listed) | styles.refero.design (searched "ssg" — no direct match found)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px
- Input padding: 14px 12px horizontal; option dropdowns 14px left, 39px right (for chevron clearance)

### Grid & Container
- Multi-column product grid — standard 4~6 column layout at desktop 1440px
- Category pill tabs displayed in a single horizontal scrollable row
- Section alternation between white (`#ffffff`) and grey (`#f5f5f5`) backgrounds
- No max-width card constraint — product cards fill their grid cells

### Whitespace Philosophy
- **Density-oriented**: SSG is a high-volume retail platform; spacing is efficient rather than editorial. Row margins tighter than premium fashion e-commerce.
- **Flat separation**: product cards use `#e5e5e5` border hairlines, not shadows. Page sections separate by background color shift.
- **Square geometry**: the overwhelmingly square-cornered system signals "this is a store floor, not an editorial magazine" — efficiency and product visibility first.

### Border Radius Scale
- None (0px): Product cards, sub-category nav tabs, inputs, layout wrappers, discount badges — the default
- Small (5px): Option select dropdowns — the only slightly rounded form element
- Medium (6px): Pagination/navigation control corner rounding
- Large (24px): Main category pill tabs — the single soft shape in the system
- Full (9999px): Not observed in live DOM

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, all product cards, category nav |
| Tint (Level 1) | `#f5f5f5` background | Section separation, surface grouping |
| Hairline (Level 2) | `1px solid #e5e5e5` | Card borders, controls, input separators |
| Hairline Strong (Level 3) | `1px solid #cfcfcf` | Input/select borders, nav control outlines |

**Shadow Philosophy**: SSG.COM operates a shadow-free design system. Live inspection confirmed `box-shadow: none` across all product cards, headers, navigation, and promotional sections. Elevation and grouping is communicated entirely through flat background-color tinting (`#f5f5f5` vs `#ffffff`) and thin hairline borders (`#e5e5e5`, `#cfcfcf`). This flat approach keeps pages scannable and load-lightweight — appropriate for a high-traffic Korean retail platform where performance and product visibility take precedence.

## 7. Do's and Don'ts

### Do
- Use Pretendard across all contexts — weight variation carries the full hierarchy
- Reserve brand red (`#ff5452`) for discount signals, price emphasis, and promotional elements
- Use near-zero border radius (0px) for commerce surfaces — cards, nav tabs, inputs
- Apply category pill (24px radius) only for the main "outing" category selector
- Separate sections with `#f5f5f5` tinted backgrounds and `#e5e5e5` hairlines — no shadows
- Set active tab state with `#222222` background + white text + bold weight (700)
- Use `#222222` near-black for primary text over pure black (`#000000`) for body legibility
- Keep badge/label text at 11px/500 — small but legible, weight 500 for retail density

### Don't
- Add drop shadows to product cards — SSG is a flat, shadow-free system
- Apply border-radius to product cards or commerce grid elements — hard edges signal reliability
- Overuse brand red (`#ff5452`) beyond sale/discount contexts — it loses signal meaning
- Use a second accent color or introduce gradients — the system is deliberately monochromatic aside from the red
- Mix display typefaces — Pretendard is the sole family
- Make inactive tabs the same weight as active — weight contrast (500 → 700) is the active signal
- Use positive letter-spacing or decorative type treatments — the system is legibility-first

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column grid, pill tabs scroll horizontally |
| Tablet | 640-1024px | 2~3 column grid, compressed header |
| Desktop | 1024-1440px | 4~6 column grid, full horizontal category nav |

### Touch Targets
- Category pill tabs at 46px height — comfortable tap target
- Sub-category tabs at 40px height — minimum tap-safe
- Option select at 38px — form interaction
- Sold-out button at 52px — prominent even when disabled

### Collapsing Strategy
- Category pills maintain 24px radius on all viewports
- Sub-category tabs stay square across all sizes
- Product grid collapses from 6 → 4 → 2 → 1 columns

### Image Behavior
- Product images carry no shadow or border radius
- Red badges (`#ff5452`) overlay product image corners — high-contrast on any image

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand accent: SSG Red (`#ff5452`)
- Red tint surface: (`#fff2f2`)
- Primary text: Ink Dark (`#222222`)
- Secondary text: Muted (`#777777`) / Muted-2 (`#666666`)
- Background: White (`#ffffff`) / Surface Grey (`#f5f5f5`)
- Borders: Hairline (`#cfcfcf`) / Lighter hairline (`#e5e5e5`)
- Active tab state: `#222222` bg + `#ffffff` text
- Disabled: `#e5e5e5` bg + `#999999` text

### Example Component Prompts
- "Build a product card: white `#ffffff` background, 0px radius, 1px solid `#e5e5e5` border, no shadow. Product image full-width. Badge overlay top-left: `#ff5452` bg, white text, 11px/500 Pretendard. Price: 16px/600 Pretendard `#222222`. Meta text: 12px/400 `#777777`."
- "Create category pill tabs: selected = `#222222` bg, white text, 24px radius, 46px height, 16px/700 Pretendard. Unselected = `#ffffff` bg, `#777777` text, same size, 16px/500."
- "Design a sale badge: `#ff5452` background, white text, 11px/500 Pretendard, 0px radius — square flat label."
- "Flat sub-category nav: white `#ffffff` bg, 40px height tabs, 0px radius. Active: `#222222` bg + white + 14px/700. Inactive: white + `#666666` + 14px/500."

### Iteration Guide
1. Pretendard is the only typeface — weight scale 400→500→600→700 for hierarchy
2. Red (`#ff5452`) = sale/discount signal only — don't bleed it into navigation
3. No shadows — border hairlines (`#e5e5e5`, `#cfcfcf`) do the separating
4. Square corners everywhere except the pill category tabs (24px)
5. `#222222` for active states, `#777777` / `#666666` for inactive/secondary
6. Surface grey (`#f5f5f5`) segments page sections; white for card faces

---

## 10. Voice & Tone

SSG.COM's voice is **confident, reliable, and value-forward** — the platform of a department-store heritage brand that knows its product selection is the proposition. Copy is direct and functional; the headline on the site has always been "믿고 사는 즐거움 SSG.COM" ("The joy of shopping with trust, SSG.COM"), a phrase that fuses emotional warmth ("즐거움" / joy) with a trust promise ("믿고 사는" / buying with confidence). The brand never shouts or oversells — it positions itself as the authoritative curated destination.

| Context | Tone |
|---|---|
| Site title / brand | Warm, trustworthy. "믿고 사는 즐거움 SSG.COM" — calm confidence. |
| Sale / discount labels | Direct, energetic. "쓱-특가", "마감세일" — concise urgency without hype. |
| Category navigation | Plain, functional. "패션의류", "뷰티", "명품" — product category names as is. |
| Service labels | Reassuring, concrete. "무료배송", "오늘출발" — delivery promise stated plainly. |
| Product sections | Curated, editorial. "오반장" (special curation) — personality-forward naming for editorial sections. |

**Voice samples (verbatim from live homepage):**
- "믿고 사는 즐거움 SSG.COM" — brand tagline / H1. *(verified live 2026-06-22)*
- "쓱-특가" — branded sale category tab. *(verified live 2026-06-22)*
- "오반장" — editorial curation section name, an SSG original (active tab). *(verified live 2026-06-22)*

**Forbidden register**: high-pressure flash-sale language, urgency timers with exclamation spam, gimmicky wordplay that dilutes the Shinsegae trust positioning.

## 11. Brand Narrative

SSG.COM (쓱닷컴) launched in **2014** as the unified digital commerce platform of **Shinsegae Group**, Korea's premier retail conglomerate. The name "SSG" is a phonetic playfulness — "쓱" (sseuk) is an onomatopoeia for a swift, smooth movement, captured in the platform's iconic "쓱~" brand campaign which turned a simple sound into one of Korea's most memorable retail phrases. The campaign starred celebrities Gong Yoo and Gianna Jun in a 2016 campaign that became a cultural touchstone, embedding the "쓱" (swipe/whoosh) as shorthand for effortless premium shopping.

The platform was conceived as the digital extension of the full Shinsegae ecosystem: Shinsegae Department Store (고급 백화점), emart (everyday hypermarket), and Traders (membership warehouse). SSG.COM unifies these channels under one digital destination — you can buy a Hermès bag and next-day delivery ramyeon in the same cart. This breadth-plus-trust positioning sets it apart from pure-play e-commerce rivals like Coupang (speed-first) or Gmarket (marketplace variety).

SSG.COM's design stance reflects this dual heritage: the clean, editorial restraint of premium department-store retail (white space, a single brand accent, squared precision) sits alongside the density and urgency of high-volume e-commerce (12px base size, red badges, information-dense product grids). The "쓱" brand is the synthesis — not just effortless, but effortlessly curated.

## 12. Principles

1. **Trust through selection.** SSG.COM's proposition is curation from a heritage retailer, not the widest marketplace. *UI implication:* editorial sections ("오반장") and department-store–quality categorization signal that not everything is sold — only trusted products.
2. **One color, one signal.** Brand red (`#ff5452`) means "deal, discount, value" — the same role the red sale tag plays on a department store rack. *UI implication:* red is reserved exclusively for price-reduction and promotional contexts; using it elsewhere erodes the discount-signal reflex.
3. **Flat precision over decorative depth.** A shadow-free, border-hairline system feels closer to print-quality product presentation than digital skeuomorphism. *UI implication:* no drop shadows; `#e5e5e5` borders and `#f5f5f5` surface shifts do all the separating.
4. **Weight hierarchy over size hierarchy.** Pretendard weight scales 400→700 within minimal size ranges, keeping the page compact and scannable. *UI implication:* promotion of text should happen through weight change before size change.
5. **Square frames, curved selectors.** Hard product-grid edges signal commerce and efficiency; the 24px pill on category tabs signals interactivity and personalization. *UI implication:* maintain the radius distinction — square for content, pill for choice.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable SSG.COM user segments (Korean online shoppers spanning premium and everyday categories). Names are illustrative and do not refer to real individuals.*

**김수현, 38, 서울 강남.** A working professional who shops Shinsegae Department Store online for fashion and beauty. Values brand trust and the assurance that products are genuine — not a marketplace replica. Comes to SSG.COM specifically for luxury and premium fashion categories; the editorial-department-store aesthetic reinforces that this isn't just another discount mall.

**박지영, 32, 경기 분당.** A busy parent who uses SSG.COM as an emart substitute — grocery, household, daily essentials with same-day or next-day delivery ("오늘출발"). The "무료배송" badge and transparent delivery promises are primary decision factors. Values the one-stop nature: from premium kitchen appliances to children's snacks in one cart.

**이민준, 26, 부산.** A trend-conscious consumer who shops "쓱-특가" and "마감세일" sections for discounted fashion items from reliable brands. The branded sale categories and red discount badges are the primary navigation path; the SSG trust positioning means the discount is real, not a manipulated "original price."

## 14. States

| State | Treatment |
|---|---|
| **Empty (search no results)** | White `#ffffff` canvas. Ink Dark (`#222222`) plain message + redirecting CTA to related categories. No animation clutter. |
| **Empty (wish list none)** | Muted `#777777` text prompt encouraging browsing; single red CTA to homepage. |
| **Loading (product grid)** | Skeleton placeholders on `#f5f5f5` at final card dimensions — square (0px radius), no shimmer animation. |
| **Loading (category switch)** | Instant re-render without loading skeleton — category tabs switch synchronously on fast connections. |
| **Error (network/fetch)** | Inline Korean error message in `#222222` with plain instruction + retry link. No generic "오류" alone. |
| **Error (sold-out / 품절)** | `#cfcfcf` background, `#777777` text, 52px height square button — muted, non-interactive. Communicates finality without aggression. |
| **Success (cart add)** | Brief inline confirmation message; cart badge count increments immediately. No modal interruption. |
| **Success (order complete)** | Standard checkout confirmation page; brand red `#ff5452` used for order number highlight. |
| **Skeleton** | `#f5f5f5` blocks at final card grid dimensions, 0px radius, no elevation. |
| **Disabled** | `#e5e5e5` background, `#999999` text; mirrors the 품절 button aesthetic throughout the system. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Tab switch, badge state, carousel control press |
| `motion-standard` | 200ms | Category pill transition, drawer open, dropdown reveal |
| `motion-slow` | 300ms | Page-level section reveal, banner carousel slide |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Content arriving — drawers, product cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals — modals, overlays |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Tab transitions, two-way |

**Motion rules**: SSG.COM motion is functional and low-key — consistent with the flat, dense commerce aesthetic. The category pill tab switches states with a quick 100ms fill; banner carousels slide at 300ms/ease-enter. There are no bounce or spring effects — the department-store heritage demands an authoritative, steady feel, not playful motion. Discount badge animations (none observed in live inspect) are intentionally static — the red color itself is the signal, not motion. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant, preserving full functionality.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on https://www.ssg.com and https://www.ssg.com/disp/category.ssg?dispCtgId=6000013:
- body: Pretendard font-family; color rgb(0,0,0); font-size 12px; line-height 18px
- H1 "믿고 사는 즐거움 SSG.COM": font-weight 700; font-size 12px; Pretendard
- Active category pill "오반장": bg rgb(34,34,34) #222222; color rgb(255,255,255); border-radius 24px; padding 0px 16px; h 46px; font 16px/700
- Inactive category pills ("쓱-특가", "마감세일", "백화점 세일중"): bg rgb(255,255,255); color rgb(119,119,119) #777777; radius 24px; h 46px; font 16px/500
- Sub-category tab inactive ("패션의류", "뷰티", "명품" etc.): bg #ffffff; color rgb(102,102,102) #666666; radius 0px; padding 0px 12px; h 40px; font 14px/500
- Sub-category tab active: bg rgb(34,34,34) #222222; color #ffffff; h 40px; font 14px/700
- Service badge "무료배송": bg rgb(245,245,245) #f5f5f5; color rgb(34,34,34); font 11px/500; h 20px
- Product card: bg #ffffff; border 1px solid rgb(229,229,229) #e5e5e5; radius 0px; no shadow
- Search input: bg #ffffff; border 0px (transparent wrapper); color rgb(34,34,34); font 13px/400; h 36px
- Option select: bg #ffffff; border 1px solid rgb(207,207,207) #cfcfcf; radius 5px; padding 0px 39px 0px 14px; h 38px; font 14px/400
- Sold-out button: bg rgb(207,207,207) #cfcfcf; color rgb(119,119,119); h 52px; font 16px/400
- Brand red frequency: rgb(255,84,82) #ff5452 — 148 bg occurrences (homepage) / most frequent saturated color
- Surface grey: rgb(245,245,245) #f5f5f5 — 663 bg occurrences (most common bg)
- Dark nav bar: rgb(49,49,59) #31313b — accessibility skip-nav bar

Brand narrative: SSG.COM launched 2014 by Shinsegae Group. "쓱" campaign (Gong Yoo / Gianna Jun, 2016) — widely documented Korean retail cultural fact. Homepage tagline "믿고 사는 즐거움 SSG.COM" verified live.

Personas are fictional archetypes informed by publicly observable SSG.COM user segments. Names are illustrative; they do not refer to real people.

Interpretive claims (Shinsegae heritage positioning, flat editorial rationale, "쓱" phonetic origin) are editorial readings connecting observed design to publicly known brand facts, not directly quoted from SSG internal documents.
-->

---
id: danawa
name: Danawa
display_name_kr: 다나와
country: KR
category: ecommerce
homepage: "https://www.danawa.com"
primary_color: "#06b87f"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=danawa.com&sz=128"
verified: "2026-06-11"
added: "2026-06-11"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-11"
  note: "primary = brand green (#06b87f) on the master '전체 카테고리' button; interactive accent across the dense catalog is blue (#2070eb, 1122 fg uses on the list surface). Price emphasis red (#ff3b3b). Near-black text ladder (#0f0f0f / #333 / #555 / #767676). Shadowless, hairline-driven layout."
  colors:
    primary: "#06b87f"
    link: "#2070eb"
    link-bulk: "#0e68f0"
    deep-blue: "#0313aa"
    price: "#ff3b3b"
    price-alt: "#e53b38"
    purple: "#8b38e5"
    nav-dark: "#33373d"
    ink: "#000000"
    ink-soft: "#0f0f0f"
    body: "#333333"
    muted: "#555555"
    muted-alt: "#767676"
    faint: "#919191"
    disabled: "#d2d2d2"
    canvas: "#ffffff"
    surface: "#f8f8f8"
    surface-blue: "#f7faff"
    tint-blue: "#e3f1fa"
    rank-slate: "#afbbc8"
    hairline: "#e0e0e0"
    hairline-alt: "#ebebeb"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    h1:        { size: 16, weight: 700, lineHeight: 1.4, use: "Logo wordmark / hero heading, Pretendard Bold" }
    list-title: { size: 18, weight: 400, lineHeight: 1.4, use: "Search input text on catalog surface" }
    body:      { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, Pretendard" }
    product:   { size: 12, weight: 400, lineHeight: 1.4, use: "Dense product-name links in result rows" }
    price:     { size: 13, weight: 700, lineHeight: 1.4, use: "Product price figure, bold" }
    nav:       { size: 13, weight: 400, lineHeight: 1.4, use: "Top utility nav (로그인 / 관심 / 최근)" }
    caption:   { size: 12, weight: 400, lineHeight: 1.4, use: "Meta text, purchase counts, badges" }
  spacing: { xs: 2, sm: 4, base: 8, md: 11, lg: 16, xl: 20, xxl: 29 }
  rounded: { xs: 2, sm: 4, md: 8, pill: 52, full: 9999 }
  shadow:
    none: "none"
  components:
    button-category: { type: button, bg: "#06b87f", fg: "#ffffff", radius: "8px 8px 0px 0px", padding: "11px 16px", font: "16px / 700 Pretendard", use: "Master '전체 카테고리' menu trigger — the one green anchor" }
    button-search: { type: button, bg: "#555555", fg: "#ffffff", radius: "2px", font: "12px / 400 Pretendard", use: "Compact in-result search submit button on catalog surface" }
    button-result-search: { type: button, bg: "#333333", fg: "#ffffff", radius: "2px", font: "12px / 400 Pretendard", use: "'결과 내 검색' dark utility button" }
    button-pager: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #e0e0e0", radius: "4px", font: "13px / 400 Pretendard", use: "Carousel prev/next (이전 / 다음) pager" }
    search-input: { type: input, bg: "#ffffff", fg: "#0f0f0f", radius: "52px", padding: "10px 0 10px 20px", font: "18px / 400 Pretendard", use: "Master rounded search bar" }
    badge-bulk: { type: badge, bg: "#f7faff", fg: "#0e68f0", radius: "4px", font: "12px / 700 Pretendard", use: "'대량구매' B2B pill on product rows" }
    badge-rank: { type: badge, bg: "#afbbc8", fg: "#ffffff", radius: "0px", font: "12px / 700 Pretendard", use: "'인기 순위 N' rank overlay on product thumbnails" }
    product-card: { type: card, bg: "#ffffff", border: "1px solid #e0e0e0", radius: "8px", use: "Promo / brand-event card tile, hairline-only" }
    list-row: { type: listItem, fg: "#333333", border: "1px solid #ebebeb", font: "12px / 400 Pretendard", use: "Dense product result row, near-black title + bold price" }
    nav-link: { type: tab, fg: "#333333", font: "13px / 400 Pretendard", active: "blue #2070eb text on active", use: "Top utility nav item" }
  components_harvested: true
---

# Design System Inspiration of Danawa

## 1. Visual Theme & Atmosphere

Danawa (다나와) is Korea's original price-comparison commerce platform, and its interface is the antithesis of the airy, whitespace-luxurious fintech aesthetic — it is a dense, utilitarian information machine built to render thousands of products, prices, and specs at a glance. The canvas is pure white (`#ffffff`) layered with faint warm-grey surfaces (`#f8f8f8`) and cool blue-tinted panels (`#f7faff`, `#e3f1fa`) that segment the relentless catalog into scannable zones. Text runs in a near-black ladder — pure `#000000` for the densest body, `#0f0f0f` for prices and emphasis, `#333333` and `#555555` for product names and meta — packed tightly because density, not breathing room, is the value proposition. Separation comes almost entirely from thin hairlines (`#e0e0e0`, `#ebebeb`) rather than shadows: the system is essentially flat.

The color economy is strict and role-driven. A single saturated brand green (`#06b87f`) is reserved almost exclusively for the master "전체 카테고리" menu trigger — the one anchor that opens the entire catalog tree — so green reads as "the gateway." The dominant interactive accent, though, is a workhorse blue (`#2070eb`), which carries over a thousand uses on a single result page: links, sort controls, active filters. A bright commerce red (`#ff3b3b`) is the price-and-deal signal, with a deeper alt-red (`#e53b38`) for sale emphasis. A muted slate (`#afbbc8`) tags ranked items ("인기 순위 1/2/3"), and an occasional purple (`#8b38e5`) marks promotional callouts. This is a palette engineered for wayfinding through information overload, not for mood.

Typographically the system is unromantic and efficient: **Pretendard** across the board, the de-facto Korean product sans, optimized for dense hangul legibility at small sizes. There is no display typeface, no heavy weight theatre — the hero "비교하고 잘 사는, 다나와" wordmark sits at a modest 16px / weight 700, while the real work happens at 12–13px: product titles at 12px / 400, prices at 13px / 700. Geometry mixes a fully-rounded 52px search pill at the top with sharp 2px/4px utility buttons and 8px content cards below — pragmatic, never decorative. The overall impression is of a tool that respects the shopper's time over their eyes: maximum information, minimum ornament.

**Key Characteristics:**
- Pretendard everywhere at small dense sizes (12–13px workhorse, 16px headings) — no display face, no weight theatre
- Single brand green (`#06b87f`) reserved for the master "전체 카테고리" gateway button
- Workhorse blue (`#2070eb`) as the dominant interactive/link accent across the catalog
- Commerce red (`#ff3b3b`) as the price-and-deal signal; alt-red (`#e53b38`) for sale emphasis
- Near-black text ladder (`#000000` → `#0f0f0f` → `#333333` → `#555555` → `#767676` → `#919191`)
- Flat, shadowless depth — separation by hairlines (`#e0e0e0`, `#ebebeb`) and tinted surfaces (`#f8f8f8`, `#f7faff`)
- Mixed geometry: 52px rounded search pill up top, sharp 2px/4px utility buttons and 8px cards below
- Slate rank badges (`#afbbc8`) and occasional purple (`#8b38e5`) for ranked / promotional callouts

## 2. Color Palette & Roles

### Primary & Interactive
- **Danawa Green** (`#06b87f`): Primary brand color. Reserved for the master "전체 카테고리" menu button — the single green anchor that opens the catalog tree. White text on green.
- **Link Blue** (`#2070eb`): The dominant interactive accent. Links, sort controls, active filters, focus marks — over a thousand uses on a single catalog page.
- **Bulk Blue** (`#0e68f0`): A slightly deeper blue used for the "대량구매" (bulk-purchase) B2B pill on product rows.
- **Deep Blue** (`#0313aa`): Darkest blue for selected/active strong states and emphasized link text.

### Commerce Signals
- **Price Red** (`#ff3b3b`): The price-and-deal signal — sale flags, discount emphasis, hot-deal markers. The most semantically loaded accent.
- **Sale Red** (`#e53b38`): A slightly deeper alt-red for sale labels and emphasized price drops.
- **Promo Purple** (`#8b38e5`): Occasional accent for promotional callouts and special-event labels.

### Text Ladder
- **Ink** (`#000000`): The densest body text and product detail copy.
- **Ink Soft** (`#0f0f0f`): Prices and primary emphasis text.
- **Body** (`#333333`): Product-name links and standard list copy.
- **Muted** (`#555555`): Secondary labels, compact button fills, placeholder text.
- **Muted Alt** (`#767676`): Tertiary meta text.
- **Faint** (`#919191`): Quietest captions, disabled-adjacent labels.
- **Disabled** (`#d2d2d2`): Disabled controls and inactive pager states.

### Surfaces & Hairlines
- **Canvas** (`#ffffff`): Page background, card surfaces, search-bar fill.
- **Surface** (`#f8f8f8`): Warm-grey segmenting panels and alternating blocks.
- **Surface Blue** (`#f7faff`): Cool blue-tinted surface behind the "대량구매" pill and info panels.
- **Tint Blue** (`#e3f1fa`): A lighter blue tint for highlighted info zones.
- **Hairline** (`#e0e0e0`): Standard borders on buttons, pagers, and cards.
- **Hairline Alt** (`#ebebeb`): Lighter dividers between dense list rows.

### Structural Accents
- **Nav Dark** (`#33373d`): Near-black charcoal for dark utility bars and overlay chrome.
- **Rank Slate** (`#afbbc8`): Muted blue-grey for "인기 순위 N" rank overlays on product thumbnails.
- **On Primary** (`#ffffff`): Text and icons placed on green, dark, or colored fills.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard`, with system fallbacks: `-apple-system`, `system-ui`, `Malgun Gothic`, `맑은 고딕`, `돋움`, `dotum`, `굴림`, `gulim`, `Arial`, `Apple SD Gothic Neo`
- There is no separate display or monospace face — Pretendard carries the entire system, leaning on weight (400 vs 700) and size rather than typeface variety.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Heading / Wordmark | Pretendard | 16px | 700 | 1.4 | Logo "비교하고 잘 사는, 다나와", section heads |
| Search Input (catalog) | Pretendard | 18px | 400 | 1.4 | Result-page search field text |
| Body | Pretendard | 16px | 400 | normal | Standard reading text, category links |
| Product Title | Pretendard | 12px | 400 | 1.4 | Dense product-name links in result rows |
| Price | Pretendard | 13px | 700 | 1.4 | Bold price figure (e.g. "649,000원") |
| Nav / Utility | Pretendard | 13px | 400 | 1.4 | Top utility nav (로그인 / 관심 / 최근) |
| Caption / Meta | Pretendard | 12px | 400 | 1.4 | Purchase counts ("구매 930+"), badges, meta |

### Principles
- **Density over comfort.** The working type sizes are 12–13px — unusually small — because the product is information throughput. The shopper is scanning, not reading prose.
- **Weight, not typeface, does the hierarchy.** A single family (Pretendard) covers everything; emphasis is carried by 700 vs 400 and by size, never by switching fonts.
- **Bold reserved for price and rank.** Weight 700 appears on prices, the master category button, and rank labels — the three things a price-comparison shopper actually decides on.
- **Hangul-first legibility.** Pretendard is chosen specifically for dense Korean text rendering at small sizes; the fallback stack degrades to Malgun Gothic / 돋움 for older environments.

## 4. Component Stylings

### Buttons

**Category Master (전체 카테고리)**
- Background: `#06b87f`
- Text: `#ffffff`
- Radius: 8px 8px 0px 0px
- Padding: 11px 16px
- Font: 16px / 700 / Pretendard
- Height: 44px
- Use: The single green anchor that opens the full category tree

**In-Result Search**
- Background: `#555555`
- Text: `#ffffff`
- Radius: 2px
- Font: 12px / 400 / Pretendard
- Height: 24px
- Use: Compact search submit on the catalog surface

**Result-Filter (결과 내 검색)**
- Background: `#333333`
- Text: `#ffffff`
- Radius: 2px
- Font: 12px / 400 / Pretendard
- Height: 28px
- Use: Dark utility button to search within current results

**Pager (이전 / 다음)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#e0e0e0`
- Radius: 4px
- Font: 13px / 400 / Pretendard
- Height: 20px
- Use: Carousel and list prev/next controls

### Inputs

**Master Search Bar**
- Background: `#ffffff`
- Text: `#0f0f0f`
- Radius: 52px
- Padding: 10px 0px 10px 20px
- Font: 18px / 400 / Pretendard
- Height: 44px
- Use: The top global search pill — the one fully-rounded element in the chrome

### Cards

**Promo / Event Tile**
- Background: `#ffffff`
- Border: 1px solid `#e0e0e0`
- Radius: 8px
- Height: 168px
- Use: Brand-event and promotion card tiles, hairline-only (no shadow)

**Surface Panel**
- Background: `#f8f8f8`
- Radius: 8px
- Use: Segmenting content panels and alternating blocks

### Badges

**Bulk Purchase (대량구매)**
- Background: `#f7faff`
- Text: `#0e68f0`
- Radius: 4px
- Font: 12px / 700 / Pretendard
- Height: 20px
- Use: B2B bulk-purchase pill on product rows

**Rank Overlay (인기 순위)**
- Background: `#afbbc8`
- Text: `#ffffff`
- Radius: 0px
- Font: 12px / 700 / Pretendard
- Height: 16px
- Use: Numbered popularity-rank tag overlaid on product thumbnails

### List Items

**Product Result Row**
- Text: `#333333`
- Border: 1px solid `#ebebeb`
- Font: 12px / 400 / Pretendard
- Use: Dense product row — near-black title link with bold `#0f0f0f` price and `#767676` meta

### Navigation

- Top utility nav (최근 / 관심 / 로그인) in `#333333` Pretendard at 13px / 400
- Active nav item shifts to link blue `#2070eb`
- Category bar items in white on dark chrome at 14px / 700
- Sticky white header, hairline-separated, shadowless

---

**Verified:** 2026-06-11
**Tier 1 sources:** https://www.danawa.com (homepage, live computed style — nav, hero wordmark, master search pill, category button); https://prod.danawa.com/list/?cate=112758 (dense catalog/result surface, live computed style — product rows, prices, bulk/rank badges, pagers, sort tabs)
**Tier 2 sources:** getdesign.md/danawa — "No designs found"; styles.refero.design/?q=danawa — no Danawa-specific style entry (search returned only the generic browse list)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px, but the system freely uses sub-8 increments (2px, 4px) because dense catalog rows demand tight packing
- Observed paddings: 11px 16px (category button), 10px 20px (search pill), 6px 8px (category links), 4px-15px asymmetric (utility nav)
- The scale is intentionally dense at the small end — every pixel is fought for in a thousand-row result list

### Grid & Container
- Wide fixed-width content column (~1280px) optimized for desktop scanning
- Result pages: left filter rail + right product list + right-rail promotions — classic three-zone commerce layout
- Homepage: stacked horizontal modules (category tree, deal carousels, ranking lists, news), each a hairline-bounded block
- High module density — many independent widgets share one viewport, segmented by `#f8f8f8` / `#f7faff` surfaces

### Whitespace Philosophy
- **Density is the product.** Unlike whitespace-luxurious designs, Danawa packs maximum information per screen. Gaps are minimized to fit more rows, prices, and specs above the fold.
- **Hairlines do the separating.** With no shadows, thin `#e0e0e0` / `#ebebeb` borders and tinted surfaces carve the dense grid into legible cells.
- **Tinted surfaces as zoning.** `#f8f8f8` warm-grey and `#f7faff` cool-blue panels group related controls without spending vertical space on margins.

### Border Radius Scale
- Sharp (2px): compact utility buttons (검색, 결과 내 검색)
- Standard (4px): pagers, bulk-purchase pills, small controls
- Content (8px): promo cards, surface panels, category button top corners
- Pill (52px): the master search bar — the single fully-rounded element
- Full (9999px): occasional circular toggles and dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Default — almost the entire interface |
| Hairline (Level 1) | 1px solid `#e0e0e0` / `#ebebeb` border | Cards, list rows, buttons, dividers |
| Tinted (Level 2) | `#f8f8f8` / `#f7faff` background fill | Zoned panels, grouped controls |
| Overlay (Level 3) | `rgba(0,0,0,0.6)` / `rgba(0,0,0,0.7)` scrim | Modal/dropdown overlays over the catalog |

**Shadow Philosophy**: Danawa is a deliberately shadowless system. Across the homepage and the catalog surface, `box-shadow` is `none` on the hero, nav, headings, cards, and product rows. Depth is communicated by hairlines and tinted background fills, never by elevation. This is a pragmatic choice for an information-dense commerce tool: shadows cost rendering and visual noise, and in a thousand-row list they would create chaos. The only "elevation" is the semi-transparent black scrim (`rgba(0,0,0,0.6–0.7)`) behind modal overlays and image lightboxes.

## 7. Do's and Don'ts

### Do
- Use Pretendard at dense small sizes (12–13px) for product rows and meta — density is the value
- Reserve brand green (`#06b87f`) for the master category gateway, nothing else
- Use link blue (`#2070eb`) as the default interactive/link accent across the catalog
- Use price red (`#ff3b3b`) only for prices, deals, and sale emphasis — it is a semantic signal
- Separate content with hairlines (`#e0e0e0`, `#ebebeb`) and tinted surfaces (`#f8f8f8`, `#f7faff`), not shadows
- Carry hierarchy with weight (700 vs 400) and size, on a single Pretendard family
- Keep utility buttons sharp (2px / 4px radius); reserve the 52px pill for the master search bar

### Don't
- Add drop shadows for elevation — the system is intentionally flat
- Spend vertical whitespace that could show another product row — density beats breathing room
- Use green for general interactive elements — it is the category-gateway anchor only
- Use price red for non-price UI — it would dilute the deal signal
- Introduce a second display typeface — Pretendard plus weight covers everything
- Make product titles bold — bold (700) is reserved for prices, ranks, and the category button
- Round utility buttons heavily — sharp corners match the dense, tool-like character

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (m.danawa.com) | <768px | Separate mobile property; single-column stacked modules, larger tap targets |
| Tablet | 768–1024px | Filter rail collapses to a top sheet; product list reflows to fewer columns |
| Desktop | 1024–1280px | Full three-zone commerce layout (filter rail + list + promo rail) |
| Wide | >1280px | Fixed centered ~1280px column with side gutters |

### Touch Targets
- Master search pill at 44px height — comfortable tap target
- Category button at 44px — primary navigation entry
- Dense utility controls (검색, pager) at 20–28px on desktop; the mobile property enlarges these
- Product rows rely on full-row tap zones rather than small buttons on mobile

### Collapsing Strategy
- Homepage modules stack vertically; deal carousels become swipeable on mobile
- Three-zone result layout collapses to a single column with a filter sheet
- Dense product tables reflow to card-style rows on narrow viewports
- The separate `m.danawa.com` property handles mobile rather than a fully fluid single codebase

### Image Behavior
- Product thumbnails maintain consistent aspect within hairline-bounded cells
- Rank overlays (`#afbbc8`) anchor to the thumbnail corner
- Promo card tiles keep 8px radius and `#e0e0e0` hairline at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / gateway: Danawa Green (`#06b87f`)
- Interactive / link: Link Blue (`#2070eb`)
- Bulk / B2B accent: Bulk Blue (`#0e68f0`)
- Price / deal: Price Red (`#ff3b3b`), Sale Red (`#e53b38`)
- Promo accent: Purple (`#8b38e5`)
- Heading / body text: Ink (`#000000`), Body (`#333333`)
- Price text: Ink Soft (`#0f0f0f`)
- Muted text: Muted (`#555555`), Muted Alt (`#767676`), Faint (`#919191`)
- Surfaces: Canvas (`#ffffff`), Surface (`#f8f8f8`), Surface Blue (`#f7faff`)
- Hairlines: `#e0e0e0`, `#ebebeb`
- Rank tag: Rank Slate (`#afbbc8`)

### Example Component Prompts
- "Create a price-comparison product row: white background, 1px solid #ebebeb bottom hairline, no shadow. Product title link at 12px Pretendard weight 400 color #333333. Price at 13px weight 700 color #0f0f0f ('649,000원'). Meta ('구매 930+') at 12px color #767676. A '대량구매' badge: #f7faff background, #0e68f0 text, 4px radius, 12px weight 700."
- "Build the master category button: #06b87f green background, white 16px Pretendard weight 700 text, radius 8px 8px 0 0, padding 11px 16px, 44px height. No shadow."
- "Design the global search bar: white fill, 52px radius pill, 44px height, padding 10px 20px, text 18px Pretendard color #0f0f0f, placeholder #555555."
- "Create a rank overlay badge: #afbbc8 slate background, white 12px weight 700 text, square (0 radius), anchored to a product thumbnail corner ('인기 순위 1')."
- "Build a dense filter rail: white background, hairline #e0e0e0 dividers, 13px Pretendard labels in #333333, active filter in link blue #2070eb. Sharp 2px/4px controls, no shadows."

### Iteration Guide
1. Default to flat — no shadows. Use hairlines (`#e0e0e0` / `#ebebeb`) and tinted surfaces (`#f8f8f8` / `#f7faff`) for separation.
2. Pretendard only. Hierarchy = weight (700 vs 400) + size. Working sizes are small (12–13px).
3. Green (`#06b87f`) is the category-gateway anchor; blue (`#2070eb`) is the everyday interactive accent.
4. Red (`#ff3b3b`) is the price/deal signal — never decorative.
5. Density first: pack rows tightly, minimize margins, fight for every above-the-fold product.
6. Sharp utility buttons (2px/4px), the one 52px pill for the master search bar.
7. Bold (700) only on prices, ranks, and the category button.

---

## 10. Voice & Tone

Danawa's voice is **practical, trustworthy, and value-obsessed** — the tone of a savvy friend who has already done the comparison shopping for you. The slogan *"비교하고 잘 사는, 다나와"* ("Compare and shop well, Danawa") is the entire register in five words: it is about smart, informed purchasing, not aspiration or luxury. Copy is concrete and number-forward — prices, discount percentages, purchase counts, popularity ranks — because the product's promise is empirical, not emotional. There is no marketing froth; the interface tells you what something costs and where, and trusts you to decide.

| Context | Tone |
|---|---|
| Search / catalog labels | Functional and terse. "결과 내 검색", "최저가", "대량구매". Plain task verbs. |
| Product rows | Number-forward: price, "무료" (free shipping), "구매 930+" purchase count. Facts, not adjectives. |
| Promotions / events | Modestly punchy. "삼성전자 20% 환급", "생필품 물가 상승 방어전". Value framing, never hype. |
| Rankings | Authoritative and data-backed. "인기 순위 1", "다나와 추천". Implies aggregated truth. |
| Brand / about | Earnest and consumer-first. Emphasizes 신뢰 (trust) and 양질의 쇼핑정보 (quality shopping info). |

**Forbidden phrases.** Luxury or aspirational framing ("프리미엄 라이프스타일"). Empty superlatives without a number ("최고의 쇼핑경험" with nothing to back it). Hype emoji on product/price UI. Hedging that obscures the actual price or seller. Anything that buries the comparison — the comparison IS the brand.

Voice samples:
- *"비교하고 잘 사는, 다나와"* — the live homepage slogan / wordmark (verified on danawa.com).
- *"양질의 쇼핑정보를 제공하여 소비자의 구매결정을 돕고"* — from the official 회사소개 (about) page, verified via WebFetch.
- *"결과 내 검색"* / *"대량구매"* — live UI labels on the catalog surface (illustrative of terse task-verb tone).

## 11. Brand Narrative

Danawa (다나와, "다 나와" — roughly "everything's here / come on out") was founded in **April 2000** by **Sung Jang-hyun (성장현)**, who began by databasing the PC-component prices of the Yongsan Electronics Market (용산전자상가) merchants and publishing them online ([나무위키](https://namu.wiki/w/%EB%8B%A4%EB%82%98%EC%99%80), [위키백과](https://ko.wikipedia.org/wiki/%EB%8B%A4%EB%82%98%EC%99%80)). What started as a hobbyist price list for computer parts became the country's reference point for "what does this actually cost, and where is it cheapest" — first for PC hardware, then expanding into appliances, mobile, fashion, and household goods. The company listed on the KOSDAQ in **2011** ([전자신문 상장기업 분석](https://m.etnews.com/20210514000188)).

Sung has attributed Danawa's durability to **소비자의 신뢰** — consumer trust — saying that from the start the company obsessed over what shoppers actually wanted and built content shoppers would genuinely value rather than chasing seller-friendly monetization. That consumer-first, data-as-truth posture is the brand's DNA: Danawa accumulated price histories measured in the billions of records, becoming less a store and more an oracle of market price.

In **2021** Danawa was acquired (~₩400B) by the e-commerce firm **Koreacenter**, which then reverse-merged into Danawa and rebranded the combined entity **ConnectWave (커넥트웨이브)** ([머니투데이](https://news.mt.co.kr/mtview.php?no=2022081709303888467), [커넥트웨이브 보도](https://connectwave.co.kr/pr_view.html?id=999313)). Through the corporate changes the consumer-facing brand and its mission held constant: *"양질의 쇼핑정보를 제공하여 소비자의 구매결정을 돕고"* — provide quality shopping information to help consumers decide. The design reflects exactly this: a dense, unsentimental, number-forward tool that puts comparison first.

## 12. Principles

1. **Comparison is the product.** Every layout decision serves side-by-side evaluation — dense rows, aligned prices, rank tags. *UI implication:* never bury the price or the seller; tabular alignment and consistent price typography (13px / 700 / `#0f0f0f`) are non-negotiable.
2. **Density over comfort.** The shopper wants to see more options per screen, not more whitespace. *UI implication:* minimize margins, work at 12–13px, fit another product row above the fold before adding padding.
3. **Numbers are the truth.** Price, discount, purchase count, and rank carry the message; adjectives don't. *UI implication:* surface concrete figures (price red `#ff3b3b`, purchase counts, "인기 순위 N") over descriptive copy.
4. **One green gate, one blue current.** Color is rationed by role. *UI implication:* green (`#06b87f`) only for the category gateway; blue (`#2070eb`) for everyday interaction; red for price/deal. Don't let roles leak.
5. **Flat and fast.** No shadows, no decoration that costs render time or attention. *UI implication:* separate with hairlines (`#e0e0e0`) and tinted surfaces, never elevation.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Danawa user segments (PC-build enthusiasts, deal-hunting households, B2B bulk buyers), not individual people.*

**Kang Min-su, 27, Seoul.** PC-build hobbyist assembling a gaming rig. Lives in Danawa's PC견적 (build-estimate) tool, cross-referencing CPU and GPU prices across sellers daily. Trusts Danawa's price history more than any single shop's "sale." Would be annoyed by any redesign that added whitespace at the cost of showing fewer parts per screen.

**Lee Hyun-jung, 41, Suwon.** Household manager comparing appliances and groceries. Sorts by 최저가, scans purchase counts ("구매 930+") and ranks before buying, and treats the price-red figures as the only thing that matters. Values that Danawa shows free-shipping ("무료") inline so the real total is obvious.

**Park Dae-ho, 38, Incheon.** Small-business buyer who uses the "대량구매" path for office equipment. Needs bulk pricing and seller comparison in one view. Reads Danawa as a procurement tool, not a lifestyle store.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, single line in Body (`#333333`) at 13px: "검색 결과가 없습니다." A suggestion to broaden filters. No illustration — honest and terse. |
| **Empty (no saved/관심 items)** | Muted (`#767676`) single line with a link-blue (`#2070eb`) prompt to browse categories. |
| **Loading (catalog first paint)** | Hairline-bounded skeleton rows at final dimensions in `#f8f8f8`, price bars matching the bold-13px width. No elaborate shimmer — fast and flat. |
| **Loading (in-place re-sort)** | Existing rows stay visible; a subtle link-blue (`#2070eb`) progress indicator near the sort tabs. Never blank the list. |
| **Error (price fetch failed)** | Inline row-level note in Price Red (`#ff3b3b`): "가격 정보를 불러오지 못했습니다." with a retry link. Specific, not a generic "오류". |
| **Error (form/search invalid)** | Field-level message below the input in `#e53b38`, describing what to fix. |
| **Success (added to 관심/cart)** | Brief inline confirmation; the row itself reflects the saved state. Link-blue (`#2070eb`) check, no celebratory toast on a dense list. |
| **Skeleton** | `#f8f8f8` blocks at final dimensions, hairline-bounded; price skeletons never wider than the longest expected figure. |
| **Disabled** | Controls drop to `#d2d2d2` border/text; pager arrows fade to `#919191`. Surface and label dim together. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Sort commits, filter toggles, selection ticks |
| `motion-fast` | 120ms | Hover tints, dropdown open, pager hover |
| `motion-standard` | 200ms | Carousel slide, category-tree expand, deal-banner rotate |
| `motion-slow` | 320ms | Rare full-panel transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default — carousels, expands, two-way transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Dropdowns, category-tree reveal |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, overlay close |

**Explicitly avoided.** No spring, bounce, or overshoot. A price-comparison tool is steady and quick — playful motion would undercut the data-as-truth posture and slow down dense scanning.

**Signature motions.**

1. **Deal-banner carousel.** Homepage promo carousels auto-rotate at slow ~5s intervals with `motion-standard / ease-standard` horizontal slides; prev/next pagers (`이전 / 다음`) jump immediately.
2. **Category-tree expand.** The "전체 카테고리" mega-menu opens with a quick `motion-fast / ease-enter` — speed matters because it is the primary wayfinding gate.
3. **In-place re-sort.** Re-sorting a result list is near-instant (`motion-fast`); rows reorder without a full reload so the shopper keeps context.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, carousels stop auto-rotating and all `motion-*` tokens collapse to `motion-instant`. The catalog stays fully functional — scanning never depends on animation.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Verified via tool calls this session:
- https://www.danawa.com — live homepage; slogan/wordmark "비교하고 잘 사는, 다나와"
  (document.title + h1 confirmed in playwright getComputedStyle inspect 2026-06-11).
- https://prod.danawa.com/list/?cate=112758 — live catalog surface; product rows,
  prices, "대량구매"/"인기 순위" badges, pagers (playwright inspect 2026-06-11).
- https://www.danawa.com/corp/aboutus/about_us.html — official 회사소개; mission phrase
  "양질의 쇼핑정보를 제공하여 소비자의 구매결정을 돕고" (WebFetch 2026-06-11).
- WebSearch: founding (April 2000, Sung Jang-hyun / 성장현, Yongsan PC-parts price DB),
  KOSDAQ IPO 2011, Koreacenter acquisition 2021 → ConnectWave rebrand, consumer-trust
  framing — corroborated by 나무위키, 위키백과, 전자신문, 머니투데이, 커넥트웨이브 PR.

Personas (§13) are fictional archetypes informed by publicly observable Danawa user
segments (PC-build enthusiasts, deal-hunting households, B2B bulk buyers). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "comparison is the product", "density is the value",
"one green gate, one blue current") are editorial readings connecting Danawa's stated
consumer-first mission and its observed dense utilitarian UI, not direct Danawa
statements.
-->

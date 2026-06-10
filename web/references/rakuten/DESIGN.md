---
id: rakuten
name: Rakuten
country: JP
category: ecommerce
homepage: "https://www.rakuten.co.jp"
primary_color: "#bf0000"
logo:
  type: simpleicons
  slug: rakuten
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-10"
  note: "primary = Rakuten Crimson (#bf0000) live on every commerce surface (login CTA, search submit, prices, active service tab). ReX component library (npm @rakuten-rex, archived 2021) ships a separate action blue (#134ff3) — both documented, live crimson wins primary."
  colors:
    primary: "#bf0000"
    ink: "#333333"
    muted: "#666666"
    link: "#1d54a7"
    service-blue: "#0078b5"
    canvas: "#ffffff"
    surface: "#f4f4f4"
    input-surface: "#f7f7f7"
    hairline: "#ebebeb"
    border-strong: "#d1d1d1"
    sale-yellow: "#fff100"
    sale-cream: "#fff9c8"
    on-primary: "#ffffff"
    rex-action: "#134ff3"
    rex-action-hover: "#3a6dfa"
    rex-action-active: "#053ace"
  typography:
    family: { jp-live: "Meiryo, Hiragino Kaku Gothic ProN, MS PGothic", brand: "Rakuten Sans (corporate, Dalton Maag 2020)", rex: "system-ui stack" }
    section:    { size: 20, weight: 600, use: "Module headings on Ichiba (今売れている商品 등 weight 700 on Books)" }
    nav:        { size: 13, weight: 400, use: "Group service nav links" }
    input:      { size: 16, weight: 400, use: "Header keyword search field" }
    body:       { size: 12, weight: 400, lineHeight: 1.10, use: "Dense commerce body/default text" }
    button:     { size: 12, weight: 400, use: "Header CTA labels (ログイン)" }
    button-lg:  { size: 14, weight: 400, use: "Books CTA / outline button labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, section: 40 }
  rounded: { sm: 4, md: 8, lg: 15, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#bf0000", fg: "#ffffff", radius: "4px", height: "32px", padding: "0 11px", font: "12px / 400", use: "ログイン / member CTA in global header (35px·14px on Books)" }
    button-outline: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #d1d1d1", radius: "4px", height: "37px", font: "14px / 400", use: "Secondary actions — 楽天会員登録(無料), もっと見る" }
    button-pill: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #d1d1d1", radius: "15px", padding: "5px 26px 5px 20px", font: "14px / 400", use: "Read-more pill on Books modules" }
    search-bar: { type: input, bg: "#f7f7f7", fg: "#666666", border: "1px solid #ebebeb", radius: "4px", height: "40px", padding: "8px 12px", font: "16px / 400", use: "Header keyword search; crimson #bf0000 submit block attached right (0 4px 4px 0)" }
    service-tab: { type: tab, fg: "#ffffff", font: "13px / 400", padding: "12px 8px", active: "#ffffff text on #bf0000 bg", use: "Group service nav; current service fills crimson" }
    card-module: { type: card, bg: "#ffffff", radius: "8px", use: "Product/content module floated on #f4f4f4 canvas, hairline-separated, shadowless" }
    sale-banner: { type: card, bg: "#fff100", fg: "#666666", radius: "8px", padding: "12px 24px 16px", use: "Big-sale / campaign section container" }
    rex-button: { type: button, bg: "#134ff3", fg: "#ffffff", radius: "4px", padding: "8px 16px", font: "16px / 400", hover: "#3a6dfa", active: "#053ace", use: "ReX library primary action (npm @rakuten-rex/button, archived 2021)" }
  components_harvested: true
---

# Design System Inspiration of Rakuten

## 1. Visual Theme & Atmosphere

Rakuten Ichiba is the maximalist counter-thesis to Western minimal commerce, and it is proudly, deliberately so. The page title literally declares the philosophy — "Shopping is Entertainment!" — and the surface delivers it: an extremely dense bazaar of product modules, rankings, coupons and campaign banners, all anchored by a single unmistakable brand constant, Rakuten Crimson (`#bf0000`). The crimson is not decoration; it is wayfinding. It paints the login CTA, the search submit block, the active service tab, every price in yen, and the member-registration link, so that across thousands of merchant-generated pixels the eye always knows what belongs to Rakuten and what to act on.

Around that crimson spine the system stays surprisingly utilitarian. Text sits at charcoal `#333333` and grey `#666666` in compact 12px Meiryo / Hiragino Kaku Gothic — a dense, information-first Japanese commerce typography where line-height runs tight (≈1.1 on the homepage shell) and module headings step up to just 20px semibold. Links keep the classic commerce blue (`#1d54a7`), backgrounds alternate white (`#ffffff`) and light grey (`#f4f4f4`), and elevation is essentially absent: computed `box-shadow: none` across the header, hero, and module chrome. Separation is achieved by hairlines (`#ebebeb`), borders (`#d1d1d1`) and surface tinting — never by floating layers. During sale events the temperature spikes: saturated campaign yellow (`#fff100`) and pale cream (`#fff9c8`) flood entire sections, a sanctioned moment of festival loudness inside the system.

There is also a quieter, corporate second register. Rakuten's ReX design system (Rakuten Experience) and the Rakuten Font program — a four-style custom suite (Sans / Serif / Rounded / Condensed) built with Dalton Maag under CCO Kashiwa Sato — govern the group's global brand surfaces, and the archived public ReX component library ships a clean action blue (`#134ff3`) with 4px-radius buttons on a system-font stack. The two registers coexist on purpose: crimson festival density for the Ichiba marketplace, restrained blue-on-white componentry for group/corporate products. Both share the same conservative geometry — 4px workhorse radius, 8px containers, 15px pills — and the same shadowless flatness.

**Key Characteristics:**
- Rakuten Crimson (`#bf0000`) as the single navigational constant across an extremely dense marketplace surface
- Density as entertainment — "Shopping is Entertainment!" is a stated design posture, not an accident
- Compact Japanese commerce typography: Meiryo/Hiragino at 12px body, 20px module headings, tight line-height
- Shadowless flat construction — hairlines (`#ebebeb`, `#d1d1d1`) and surface tints (`#f4f4f4`) do all separation
- Conservative geometry: 4px buttons/inputs, 8px module containers, 15px read-more pills
- Classic blue link color (`#1d54a7`) preserved for trust and scannability
- Sanctioned festival mode: campaign yellow (`#fff100`) and cream (`#fff9c8`) take over whole sections during sales
- A second official register — ReX action blue (`#134ff3`) and the Rakuten Font suite — for group-level products

## 2. Color Palette & Roles

### Primary
- **Rakuten Crimson** (`#bf0000`): The brand. Login/member CTAs, the search submit block, active service tabs, price emphasis (円), member-registration text links. Live-measured as `rgb(191, 0, 0)` on both Ichiba and Books surfaces — it appeared 176 times as a text color on the homepage alone.
- **On-Primary White** (`#ffffff`): Text and icons on crimson; also the page canvas and module card background.

### Text
- **Ink** (`#333333`): Primary text and headings — the most frequent text color on the homepage (2,399 elements).
- **Muted Grey** (`#666666`): Body default, secondary labels, placeholder text (2,072 elements).
- **Link Blue** (`#1d54a7`): Standard text links — help pages, item links, pagination (78 elements).
- **Service Blue** (`#0078b5`): Secondary informational links and service accents (11 elements).

### Surface
- **Canvas White** (`#ffffff`): Dominant background (147 painted elements).
- **Surface Grey** (`#f4f4f4`): The page's alternating module background (57 elements) — modules float on it as white cards.
- **Input Surface** (`#f7f7f7`): Header search field fill.
- **Hairline** (`#ebebeb`): Search field border and fine dividers.
- **Border Strong** (`#d1d1d1`): Outline-button borders and stronger separators.

### Campaign
- **Sale Yellow** (`#fff100`): Big-sale section containers — saturated festival yellow, used at full-section scale during campaigns.
- **Sale Cream** (`#fff9c8`): Pale campaign band behind sale modules.

### ReX (official component library, archived 2021)
- **ReX Action Blue** (`#134ff3`): Primary button fill/border in `@rakuten-rex/button`.
- **ReX Action Hover** (`#3a6dfa`): Hover state for ReX buttons.
- **ReX Action Active** (`#053ace`): Pressed state for ReX buttons.

## 3. Typography Rules

### Font Family
- **Live Ichiba/Books stack**: `Meiryo, "Hiragino Kaku Gothic ProN", "MS PGothic", sans-serif` — pragmatic Japanese system stack optimized for dense kanji/kana at small sizes.
- **Corporate brand suite**: **Rakuten Sans / Serif / Rounded / Condensed** — a custom global font program (5 weights) designed with Dalton Maag under CCO Kashiwa Sato (announced 2020), used on group brand surfaces and rolling out across services. Rakuten Sans carries alternate `a`/`g` glyphs and flared, angle-cut round-stroke terminals.
- **ReX library stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, …` system stack; type scale from 0.625rem to 2.875rem with line-heights 1.333 / 1.429 / 1.5; default text color `#333`.

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Module Heading | Meiryo stack | 20px | 600 | Ichiba H2 (最近チェックした商品); Books uses weight 700 |
| Card Title | Meiryo stack | 14px | 700 | Books pick-up module titles |
| Nav Link | Meiryo stack | 13px | 400 | Group service nav (white on dark band) |
| Search Input | Meiryo stack | 16px | 400 | Header keyword field |
| CTA Label | Meiryo stack | 12–14px | 400 | 12px header ログイン; 14px Books CTAs |
| Body / Default | Meiryo stack | 12px | 400 | Homepage base size, line-height ≈13.2px |
| Category Label | Meiryo stack | 12px | 400 | Genre lists, footer links |

### Principles
- **Small and dense is correct**: 12px body with tight line-height is the deliberate register of Japanese marketplace UI — information density reads as abundance and value.
- **Weight, not size, marks hierarchy**: headings step only to 20px but jump to 600–700 weight; the scale is compressed.
- **No display typography on the marketplace**: the brand's typographic ambition (Rakuten Sans suite) lives on corporate/group surfaces; Ichiba stays in workhorse system fonts for rendering speed and merchant parity.
- **Numbers are crimson**: prices and yen marks render in `#bf0000`, making cost the most scannable token on the page.

## 4. Component Stylings

### Buttons

**Primary (Crimson CTA)**
- Background: `#bf0000`
- Text: `#ffffff`
- Radius: 4px
- Height: 32px
- Padding: 0px 11px
- Font: 12px / 400 / Meiryo stack
- Use: Header ログイン CTA on Ichiba; Books version runs 35px tall at 14px

**Secondary (Outline)**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#d1d1d1`
- Radius: 4px
- Height: 37px
- Font: 14px / 400 / Meiryo stack
- Use: 楽天会員登録（無料）, もっと見る module actions

**Read-more Pill**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#d1d1d1`
- Radius: 15px
- Padding: 5px 26px 5px 20px
- Font: 14px / 400 / Meiryo stack
- Use: もっと見る pill at the foot of Books content modules

**ReX Primary (library, archived 2021)**
- Background: `#134ff3`
- Text: `#ffffff`
- Border: 1px solid `#134ff3`
- Radius: 4px (0.25rem)
- Padding: 8px 16px (0.5rem 1rem)
- Font: 16px / 400 / system stack, line-height 1.5
- Hover: `#3a6dfa` background and border
- Active: `#053ace` background and border
- Use: Primary action in `@rakuten-rex/button`; outline variant inverts to white bg with `#134ff3` text/border

### Inputs

**Header Search Bar**
- Background: `#f7f7f7`
- Text: `#666666`
- Border: 1px solid `#ebebeb`
- Radius: 4px 0px 0px 4px
- Height: 40px
- Padding: 8px 12px
- Font: 16px / 400 / Meiryo stack
- Use: キーワード検索 global search; a crimson `#bf0000` submit block (radius 0 4px 4px 0, 40px) is welded to its right edge

### Cards & Containers

**Content Module**
- Background: `#ffffff`
- Radius: 8px
- Use: Product/ranking/recommendation modules floating on the `#f4f4f4` page surface; shadowless, hairline-separated

**Campaign / Big-sale Container**
- Background: `#fff100`
- Text: `#666666`
- Radius: 8px
- Padding: 12px 24px 16px
- Use: Sale-event section wrapper; sits on pale `#fff9c8` campaign bands

### Tabs / Service Navigation

**Group Service Tab**
- Text: `#ffffff`
- Padding: 12px 8px
- Font: 13px / 400 / Meiryo stack
- Active: `#ffffff` text on `#bf0000` fill (current service, e.g. 楽天ブックス tab, 8px 20px padding)
- Use: The cross-service nav band (モバイル / ランキング / トラベル / カード / 銀行 …) linking the Rakuten ecosystem

### Price & Emphasis

Prices and yen glyphs render as plain text in Rakuten Crimson `#bf0000` at 13px within product cards — emphasis is achieved by color, not by badge chrome. Member-acquisition text links (楽天会員登録(無料)) reuse the same crimson at 13px.

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://www.rakuten.co.jp (live computed-style inspect, 2 passes); https://books.rakuten.co.jp (live computed-style inspect); npm `@rakuten-rex/button@1.5.1` + `@rakuten-rex/typography@1.0.5` static CSS (official ReX library, archived 2021); https://global.rakuten.com/corp/brand/ (Brand & ReX Guidelines — NDA-gated, structure only)
**Tier 2 sources:** none available (getdesign.md/rakuten → "No designs found"; styles.refero.design/?q=rakuten → no Rakuten entry in results)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Observed scale: 4px, 8px, 11px, 12px, 16px, 20px, 24px — compact steps befitting the dense surface
- Module padding runs 12–24px; header chrome uses 8–12px gutters
- Vertical rhythm between modules ≈ 24–40px, far tighter than Western commerce norms

### Grid & Container
- Wide fluid container (~1400px+ usable at 1440 viewport) — Rakuten fills the screen rather than centering a narrow column
- Header stack: utility links → logo + search bar (40px) + crimson CTA → group-service nav band → genre mega-nav
- Body: alternating full-width bands (white / `#f4f4f4` / campaign cream) each holding horizontally-scrolling or grid product modules
- Carousels (slick) with 8px-radius arrow hit-areas drive most product strips

### Whitespace Philosophy
- **Density is the product**: whitespace is rationed, not celebrated. The page communicates abundance — thousands of merchants, endless deals — and generous emptiness would read as an empty market.
- **Surface tinting replaces spacing**: where a minimal system would add 80px of air, Rakuten switches the band color (`#ffffff` ↔ `#f4f4f4` ↔ `#fff9c8`) to mark a new section at near-zero vertical cost.
- **The crimson rest points**: scanning fatigue is managed by the crimson anchors (search, login, prices) that give the eye fixed landmarks inside the density.

### Border Radius Scale
- 4px: buttons, inputs, CTAs — the workhorse
- 8px: module containers, sale banners, carousel arrows
- 15px: read-more pills
- 0px: service tabs and header bands — chrome stays square

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (default) | `box-shadow: none` | Header, modules, buttons, banners — effectively everything |
| Tint separation | Band color switch (`#f4f4f4`, `#fff9c8`) | Section boundaries |
| Hairline separation | 1px `#ebebeb` / `#d1d1d1` | Card edges, input borders, dividers |
| Overlay | `rgba(0, 0, 0, 0.7)` scrim | Dropdown/menu overlays on the header |

Rakuten's elevation model is essentially two-dimensional. Live inspection returned `box-shadow: none` across the homepage hero, navigation, headings, and module chrome on both surfaces measured. Depth is communicated by paint — tint changes and hairlines — which keeps the dense page renderable and visually stable. The few translucent black scrims (`rgba(0,0,0,0.7)`) are reserved for menu overlays, the one place stacking is real.

## 7. Do's and Don'ts

### Do
- Use Rakuten Crimson `#bf0000` for every primary action, active state, and price — it is the page's navigation system
- Keep buttons and inputs at 4px radius, containers at 8px, pills at 15px
- Separate sections by switching band color (`#ffffff` / `#f4f4f4`) instead of adding shadow or large whitespace
- Keep body text small and dense (12px Meiryo stack) — density signals abundance and value
- Render prices and yen marks in crimson text, not in badge chrome
- Keep classic link blue `#1d54a7` for text links — familiarity is a trust device
- Let campaign yellow `#fff100` take over entire sections during sales — festival mode is sanctioned
- Weld the crimson search submit directly to the input (4px outer corners only)

### Don't
- Add drop shadows to cards, buttons, or nav — the system is measured flat (`box-shadow: none`)
- Use the ReX action blue `#134ff3` on marketplace surfaces — it belongs to the group/library register
- Introduce generous editorial whitespace — an empty-looking market reads as a failing market
- Use crimson for body text or long passages — it is reserved for actions, prices, and member moments
- Round buttons beyond 4px (15px pill is the single sanctioned exception)
- Replace the dense module grid with a single-product hero — Ichiba is a bazaar, not a boutique
- Use pure black for text — ink is `#333333`, secondary is `#666666`

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Desktop wide | >1280px | Full fluid layout, mega-nav, multi-column module grids |
| Desktop | 1024–1280px | Module columns compress, carousels shorten |
| Tablet/Mobile | <1024px | Served by separate mobile-optimized surfaces and apps; web shell collapses to single-column module stack |

### Touch Targets
- Header CTAs at 32–40px height; Books CTAs at 35–37px
- Service nav links padded 12px 8px (37px effective height)
- Carousel arrows oversized (full module height, 8px radius hit-areas)

### Collapsing Strategy
- Module grids → horizontal swipe carousels on narrow viewports
- Genre mega-nav → accordion category lists
- Search bar stays full-width and pinned — search is the primary navigation on mobile
- Crimson anchors (login, prices, search submit) keep identical color roles at every size

### Image Behavior
- Product thumbnails dominate; chrome stays minimal around them
- Campaign banners are full-bleed bitmap art (merchant/event-produced) inside 8px-radius containers
- Ranking/sale modules keep fixed-aspect product tiles to preserve scan rhythm

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / active / price: Rakuten Crimson (`#bf0000`)
- Text on crimson: White (`#ffffff`)
- Ink text: `#333333`; secondary: `#666666`
- Text link: `#1d54a7`; service link: `#0078b5`
- Canvas: `#ffffff`; alternating band: `#f4f4f4`
- Search fill: `#f7f7f7`; hairline: `#ebebeb`; button border: `#d1d1d1`
- Campaign: `#fff100` (loud), `#fff9c8` (band)
- ReX register (group products only): `#134ff3` / hover `#3a6dfa` / active `#053ace`

### Example Component Prompts
- "Create a Rakuten-style global header: white bar with a 40px search field (#f7f7f7 fill, 1px solid #ebebeb, radius 4px 0 0 4px, 16px Meiryo text in #666666) welded to a crimson #bf0000 submit block (radius 0 4px 4px 0), plus a crimson login button (#bf0000 bg, white text, 4px radius, 32px tall, 12px label)."
- "Design a product module: white card, 8px radius, no shadow, sitting on a #f4f4f4 band. Module heading 20px/600 #333333. Product tiles with 12px #333333 titles and prices in #bf0000 13px. Footer pill もっと見る: white bg, 1px solid #d1d1d1, 15px radius, 14px #333333 text."
- "Build a sale section: full-width band in #fff9c8 containing a #fff100 container with 8px radius and 12px 24px 16px padding; dense product tiles inside; crimson #bf0000 prices."
- "Create a group-service nav band: 13px/400 white links with 12px 8px padding; the current service fills #bf0000 with white text."
- "Make a ReX-register primary button (corporate product): #134ff3 bg, white text, 4px radius, 8px 16px padding, 16px/400 system font; hover #3a6dfa, active #053ace; outline variant = white bg, #134ff3 text and 1px border."

### Iteration Guide
1. Crimson `#bf0000` is the only brand color on marketplace surfaces — if an element competes with it, mute the element, not the crimson
2. Density first: prefer adding a module over enlarging one; prefer a band-color switch over vertical whitespace
3. All elevation flat — never add box-shadow; use `#ebebeb`/`#d1d1d1` hairlines
4. 4px radius for interactive, 8px for containers, 15px for pills — nothing else
5. Body 12px, headings 20px/600–700, weight carries hierarchy
6. Prices always crimson text; links always `#1d54a7`
7. Campaign yellow only at full-section scale, never as a button or badge color

## 10. Voice & Tone

Rakuten's official global Tone of Voice is defined as **Optimistic, Embracing Challenges, Warm, Fun, and Honest** (Rakuten Font/brand program, 2020). The register is celebratory merchant energy — the voice of a festival market crier who is also a trusted neighbor. Where Amazon's voice is logistics and Stripe's is engineering, Rakuten's is *omatsuri* (festival): exclamation marks are allowed, points and deals are announced with delight, and member belonging (楽天会員) is the emotional core. The corporate layer underneath speaks the language of empowerment — of merchants, members, and society.

| Context | Tone |
|---|---|
| Marketplace modules | Energetic, deal-forward, time-urgent. 今売れている商品, スーパーDEAL. |
| Member acquisition | Warm invitation with explicit zero-cost honesty: 楽天会員登録（無料）. |
| Campaign/sale surfaces | Full festival voice — superlatives, ★, レビュー counts, ポイントアップ. |
| Service navigation | Plain, functional service names (トラベル, ブックス, カード) — the ecosystem speaks in nouns. |
| Corporate (corp.rakuten.co.jp) | Mission-driven, formal: イノベーション, エンパワーメント vocabulary. |
| Error/system messages | Polite keigo apology + plain instruction (アクセスが集中しております…). |

**Voice samples (verbatim from live surfaces, 2026-06-10):**
- "Shopping is Entertainment!" — Ichiba homepage title
- "楽天会員登録(無料)" — global header member CTA
- "今売れている商品" / "ただいまポイントアップ中！" — Books module headings
- "イノベーションを通じて、人々と社会をエンパワーメントする" — Group mission, corp.rakuten.co.jp

**Forbidden:** cold minimal-luxury copy ("Discover the collection"); hiding the deal mechanics; English-first phrasing on JP commerce surfaces; shame-based urgency. Rakuten urgency is festive (ポイント10倍!), never threatening.

## 11. Brand Narrative

Rakuten was founded in **1997** by **Hiroshi Mikitani (三木谷浩史)**, a former Industrial Bank of Japan banker who left finance after the 1995 Kobe earthquake reframed his sense of purpose, and launched Rakuten Ichiba as an online shopping mall with a handful of employees and just **13 merchants** at opening (widely documented; founding-era figures not independently re-verified this run). The name 楽天 ("optimism") was the thesis: the internet could empower small Japanese merchants to build real businesses, and shopping itself could be joyful — "Shopping is Entertainment!" remains in the homepage title nearly three decades later.

The defining move was the **ecosystem**: rather than one marketplace, Rakuten built a membership economy — Ichiba, Travel, Books, Card, Bank, Securities, Mobile — stitched together by the Rakuten ID and Super Points, all carrying the same crimson mark. The group's stated mission today is **"イノベーションを通じて、人々と社会をエンパワーメントする"** (to empower people and society through innovation) under the vision of becoming a "Global Innovation Company" (corp.rakuten.co.jp, verified 2026-06-10). Internally this is codified as 楽天主義 (Rakuten Shugi), with the Five Principles for Success — including the famous **スピード!!スピード!!スピード!!** — written by Mikitani as the company's operating creed.

Design-wise, Rakuten spent its first two decades as a deliberately merchant-first, density-first platform, then invested in group-level coherence: the **ReX (Rakuten Experience)** design system to standardize UI across services, and the 2020 **Rakuten Font** program — a four-style custom typeface suite (Sans/Serif/Rounded/Condensed) developed with **Dalton Maag** under chief creative officer **Kashiwa Sato** — to unify a brand that spans 70+ services. The tension the system manages is exactly that: one crimson identity over a federation of businesses, festival density at the marketplace edge, corporate clarity at the center.

## 12. Principles

*Derived from Rakuten's published 成功のコンセプト (Five Principles for Success) and ブランドコンセプト (corp.rakuten.co.jp, verified 2026-06-10), mapped to design practice.*

1. **常に改善、常に前進 (Always improve, always advance).** Get-things-done over polish-forever. *UI implication:* ship the module today at workhorse quality; the system favors incremental band-by-band evolution over big-bang redesigns — which is why 4px/crimson conventions persist for decades.
2. **顧客満足の最大化 (Maximize customer satisfaction).** Rakuten defines itself as a service company serving both shoppers and merchants. *UI implication:* merchant content gets visual parity — chrome stays neutral (`#333333`/`#666666`, no shadows) so seller listings, not platform decoration, fill the screen.
3. **スピード!!スピード!!スピード!! (Speed!! Speed!! Speed!!).** Do in one month what takes others a year. *UI implication:* system fonts, flat rendering, no elevation compositing — every choice keeps the dense page fast; performance is a brand value, not an engineering afterthought.
4. **大義名分 (Empowerment as cause).** The brand concept names empowerment of people and society as the reason the company exists. *UI implication:* the free member CTA (楽天会員登録(無料)) is honest about cost, points mechanics are shown explicitly, and the crimson always marks what Rakuten itself promises versus merchant claims.
5. **一致団結 (Unity).** One team, one ecosystem. *UI implication:* every service — travel, books, banking — wears the identical crimson `#bf0000` and shares the service-tab band, so 70+ businesses read as one membership.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Rakuten user segments; they do not describe real individuals.*

**Yumiko Tanaka, 41, Saitama.** Household-budget keeper and Rakuten economy power user: Ichiba for groceries and daily goods, Rakuten Card for payment, points routed back into purchases. Plans purchases around お買い物マラソン and 5x-point days. The dense page is a feature — she scans rankings, review counts, and crimson prices like a market regular reading stalls.

**Kenta Mori, 28, Fukuoka.** Owner of a small specialty-coffee store that sells nationally through an Ichiba shop. Rakuten is his storefront, logistics partner, and marketing channel. He cares that the platform chrome stays neutral so his product photography carries his brand, and he writes campaign banners in full festival voice because that is what converts.

**Aoi Nakamura, 23, Osaka.** Mobile-first member who entered the ecosystem through Rakuten Mobile's pricing and a free-points campaign. Uses Books for manga and game preorders, checks ポイントアップ modules first. Loyal less to any single service than to the points balance — the crimson ID is the product she actually uses.

**Hannah Weber, 35, Düsseldorf.** Manager at a European subsidiary using group-register tools built on ReX patterns. Her Rakuten is blue-accented dashboards in Rakuten Sans, not the yellow festival — evidence that the system's two registers serve genuinely different jobs.

## 14. States

| State | Treatment |
|---|---|
| **Empty (search, no results)** | Plain `#333333` sentence stating no hits, immediately followed by category links (`#1d54a7`) and ranking modules — the bazaar never shows a bare room; recovery = redirect into browsing. |
| **Empty (cart/favorites)** | Short muted `#666666` line plus a crimson primary CTA into ランキング or スーパーDEAL. No illustration theater. |
| **Loading (page)** | Band-by-band progressive render; header + search paint first. No full-page spinner — partial content is acceptable and expected. |
| **Loading (module)** | Module renders its 20px heading first; tiles fill in after. Carousel arrows disabled until populated. |
| **Error (access concentration)** | Dedicated page, live-verified on ranking.rakuten.co.jp: 20px/700 heading in crimson `#bf0000` — "アクセスが集中し、ページを閲覧しにくい状態になっております" — polite keigo apology, plain retry instruction, black `#000000` body on white. Even the error page is on-brand crimson. |
| **Error (form validation)** | Field-level crimson `#bf0000` text below the input; instruction states the valid format. Polite, specific, keigo register. |
| **Success (order placed)** | Confirmation page with order summary and immediate ecosystem cross-sell: points earned shown in crimson, next-step modules (related items, campaigns) below. Success is a doorway, not a full stop. |
| **Skeleton** | Grey `#f4f4f4` tile blocks at final dimensions inside the white module; no shimmer required — flat system, flat skeleton. |
| **Disabled** | Greyed text (`#d1d1d1` border, `#666666` label) on white; crimson never dimmed — an action is either crimson-live or visibly grey. |

## 15. Motion & Easing

Rakuten Ichiba is a near-static surface by design — measured chrome carries no animated elevation, and motion budget is spent on exactly one pattern: the product carousel.

**Durations** *(illustrative tokens consistent with observed slick-carousel behavior; Rakuten publishes no public motion spec)*:

| Token | Value | Use |
|---|---|---|
| `motion-none` | 0ms | Default for state changes, tab switches, band rendering |
| `motion-fast` | 150ms | Hover feedback on buttons/links (color shift only) |
| `motion-carousel` | 300ms | Product strip slide transitions |

**Easings:** `ease-out` for carousel slides; `linear` color transitions on hover. No spring, no bounce, no parallax — kinetic playfulness would compete with the merchandise.

**Rules:**
1. Motion never moves content the user is reading; carousels advance only on explicit arrow/swipe input on desktop.
2. Campaign energy is expressed with color (`#fff100`) and density, not animation — the festival is loud, not moving.
3. Hover states change paint (crimson deepens, underlines appear) without translating or scaling elements.
4. Under `prefers-reduced-motion`, carousels become paged scroll with no transition — the grid already works statically.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Verified this run (2026-06-10):
- https://corp.rakuten.co.jp/about/philosophy/ — mission "イノベーションを通じて、
  人々と社会をエンパワーメントする", vision "グローバル イノベーション カンパニー",
  楽天主義 structure (Brand Concept + Success Concept).
- https://corp.rakuten.co.jp/about/philosophy/principle/ — Five Principles for
  Success verbatim (常に改善、常に前進 / Professionalismの徹底 / 仮説→実行→検証→仕組化 /
  顧客満足の最大化 / スピード!!スピード!!スピード!!) and Brand Concept items
  (大義名分・品性高潔・用意周到・信念不抜・一致団結).
- https://global.rakuten.com/corp/brand/ — Brand & ReX Guidelines exist, NDA-gated;
  internal DS site rex.rakuten.design referenced.
- WebSearch (Dalton Maag portfolio, global.rakuten.com font pages, It's Nice That
  2020-08-05): Rakuten Font program — Sans/Serif/Rounded/Condensed, 5 weights,
  Dalton Maag × CCO Kashiwa Sato; official Tone of Voice "Optimistic, Embracing
  Challenges, Warm, Fun, Honest".
- Live surfaces: www.rakuten.co.jp title "Shopping is Entertainment!"; header copy
  楽天会員登録(無料); books.rakuten.co.jp module headings; ranking.rakuten.co.jp
  access-concentration error page (crimson H2, keigo apology).

Widely documented, not independently re-verified this run:
- Founding 1997 by Hiroshi Mikitani; ex-Industrial Bank of Japan; 13 merchants at
  launch; Kobe-earthquake motivation. Marked as such in §11.

Personas (§13) are fictional archetypes; names illustrative. Motion durations in
§15 are marked illustrative — no public Rakuten motion spec exists.
-->

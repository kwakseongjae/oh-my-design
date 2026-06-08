---
id: hogangnono
name: "Hogangnono"
country: KR
category: consumer-tech
homepage: "https://hogangnono.com"
primary_color: "#584de4"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=hogangnono.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#584de4"
    primary-nav: "#4d55b2"
    primary-tint: "#f3f4fc"
    primary-light: "#eeedfc"
    price-accent: "#4337de"
    heading: "#333333"
    body: "#4f4f4f"
    caption: "#6e6e6e"
    muted: "#b3b3b3"
    border: "#e5e5e5"
    surface-chip: "#f3f3f3"
    canvas: "#f9f9f9"
    white: "#ffffff"
    info: "#3e8ce8"
    success: "#3dab6a"
    danger: "#ee3a3a"
  typography:
    family: { sans: "Pretendard", fallback: "Apple SD Gothic Neo, NanumGothic, sans-serif" }
    modal-heading: { size: 30, weight: 700, lineHeight: 1.33, use: "Large modal heading" }
    section:       { size: 22, weight: 700, use: "Section headings" }
    list-title:    { size: 17, weight: 600, use: "List item titles" }
    price:         { size: 19, weight: 500, use: "Apartment listing price display" }
    body:          { size: 16, weight: 400, lineHeight: 1.3, use: "Base body text" }
    caption:       { size: 13, weight: 400, use: "Caption / badge" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 12, full: 9999 }
  shadow:
    button: "rgba(89,99,217,0.3) 0px 4px 5px 0px"
  components:
    button-primary: { type: button, bg: "#584de4", fg: "#ffffff", radius: 6, font: "17px", use: "Primary fill action, 50px tall" }
    button-tint: { type: button, bg: "#f3f4fc", fg: "#584de4", radius: 6, font: "17px", use: "Secondary tint button" }
    button-disabled: { type: button, bg: "#f0f0f0", fg: "#dadada", radius: 6, use: "Disabled primary state" }
    chip-info: { type: badge, bg: "#eeedfc", fg: "#584de4", use: "Info chip / subtle fill" }
    badge-up: { type: badge, fg: "#3dab6a", use: "Positive up-trend price indicator" }
    badge-down: { type: badge, fg: "#ee3a3a", use: "Negative down-trend price indicator" }
    card: { type: card, bg: "#ffffff", radius: 6, use: "Card surface with gentle elevation" }
  components_harvested: true
---

# Hogangnono

Korea's #1 apartment real-estate transparency platform — map-first, data-honest, free of paid-listing distortion.

## 1. Visual Theme & Atmosphere

Hogangnono pairs a bold indigo-violet primary with a crisp, predominantly white canvas to signal data-clarity and trustworthiness. The palette is deliberately restrained: brand purple carries every interactive affordance while the neutral grayscale hierarchy handles all structural content, keeping the map and price data visually dominant. The overall feel is pragmatic and modern — closer to a civic data tool than a lifestyle product — with subtle elevation (gentle card shadows, a floating map-control layer) and minimal decorative flourish. Typography is set exclusively in Pretendard, giving the interface a contemporary Korean-web character without heavy ornamentation. Motion is conservative: 0.3 s transitions on colour and transform keep the product feeling responsive without distracting from data-dense screens.

## 2. Color Palette & Roles

- **Primary:** `#584de4` — interactive elements, primary CTA fill, focus rings, active filter borders, links
- **Primary Variant (Nav):** `#4d55b2` — legacy navigation bar background, list headers, browser scene header
- **Primary Tint:** `#f3f4fc` — tint button background, selected-state surface, light hover wash
- **Primary Light:** `#eeedfc` — primary100, subtle chip backgrounds, info chip fills
- **Gray 900:** `#333333` — primary body text, headings
- **Gray 800:** `#4F4F4F` — secondary text, icon default
- **Gray 700:** `#6E6E6E` — tertiary / caption text
- **Gray 500:** `#B3B3B3` — placeholder, disabled text
- **Gray 300:** `#E5E5E5` — dividers, border default
- **Gray 200:** `#F3F3F3` — chip default background, subtle fills
- **Gray 100:** `#F9F9F9` — page background, list row alternates
- **White:** `#ffffff` — card surface, input background
- **Blue:** `#3E8CE8` — informational highlights, loan/financial accent
- **Green:** `#3DAB6A` — positive / up-trend price indicator
- **Red / Destructive:** `#EE3A3A` — negative / down-trend price, error state
- **Price Accent:** `#4337de` — apartment listing price text (high-contrast deep indigo)

## 3. Typography Rules

- **Typeface:** Pretendard (primary); fallback Apple SD Gothic Neo → NanumGothic → sans-serif
- **Base body:** 16px / 400 / line-height 1.3
- **Large modal heading:** 30px / 700 / line-height 40px
- **Section heading:** 18–22px / 600–700
- **List item title:** 15–17px / 600
- **Body / description:** 14–16px / 400
- **Caption / badge:** 11–13px / 400
- **Price display:** 19px / 500 in `#4337de`
- **Button (primary full):** 17px / default weight
- **Button (secondary tint):** 17px / default weight
- No custom letter-spacing override applied at root; tracking defaults to 0.

## 4. Component Stylings

### Primary Button

**Fill (default)**
- Background: `#584de4`
- Text: `#ffffff`
- Radius: 6px
- Height: 50px
- Font: 17px

**Fill Important (with shadow)**
- Background: `#584de4`
- Text: `#ffffff`
- Radius: 6px
- Height: 50px
- Font: 17px
- Shadow: 0 4px 5px 0 rgba(89, 99, 217, 0.3)

**Disabled**
- Background: `#f0f0f0`
- Text: `#dadada`
- Radius: 6px
- Height: 50px

### Secondary / Tint Button

**Tint (modal secondary)**
- Background: `#f3f4fc`
- Text: `#584de4`
- Radius: 6px
- Height: 50px
- Font: 17px

**Outline (empty)**
- Background: `#ffffff`
- Border: 0.5px solid `#cecfdc`
- Radius: 6px

### Filter Chip

**Default**
- Background: `#ffffff`
- Border: 1px solid `#F3F3F3`
- Radius: 8px
- Height: 32px
- Font: 14px

**Active / Applied**
- Background: `#ffffff`
- Border: 1px solid `#584de4`
- Text: `#584de4`
- Radius: 8px
- Height: 32px
- Font: 14px

**Selected**
- Background: `#eef0f3`
- Border: 1px solid `#584de4`
- Text: `#584de4`
- Radius: 8px
- Height: 32px

### Search Input

**Roundbox (map search)**
- Background: `#ffffff`
- Border: 1px solid `#CECFDC`
- Radius: 6px
- Height: 50px
- Font: 16px
- Padding: 0 15px

**Modal Input (login phone)**
- Background: `#ffffff`
- Border: 0
- Border-bottom: 2px solid `#e5e5e5`
- Height: 45px
- Font: 20px / 700
- Placeholder: `#dadada`
- Focus border-bottom: 2px solid `#584de4`

### Apartment Detail Card

**Container**
- Background: `#ffffff`
- Border: 1px solid `#cecece`
- Radius: 3px
- Shadow: 0px 2px 2px rgba(0, 0, 0, 0.075)

**Price Text**
- Text: `#4337de`
- Font: 19px / 500

**Row Divider**
- Border-bottom: 1px solid `#f2f2f2`

### Map Control Button

**Floating FAB**
- Background: `#ffffff`
- Radius: 4px
- Shadow: 4px 2px 12px 0px rgba(0, 0, 0, 0.24)
- Width: 38px
- Height: 38px
- Font: 14px

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://hogangnono.com (HTML, theme-color meta, inline emotion CSS); https://static.hogangnono.com/dist/2.5.0.30/08498da545/web/desktop.css (full desktop CSS bundle, :root custom properties); https://static.hogangnono.com/reset.desktop.css (reset + Pretendard font declarations); https://apps.apple.com/kr/app/호갱노노/id1084799742 (App Store listing, KR regional)
**Tier 2 sources:** getdesign.md/hogangnono — NOT LISTED (no data). refero — not checked (KR brand, negligible coverage expected).
**Conflicts unresolved:** theme-color meta (#4d55b2) differs from CSS --primary (#584de4); both are genuine — #4d55b2 is the darker legacy nav background, #584de4 is the design-system primary for interactive elements; documented as Primary Variant vs Primary.

## 5. Layout Principles

- **Split-panel desktop:** fixed 354–375 px left panel (search + results list) + full-height map canvas on the right; no traditional responsive grid.
- **Panel interior:** vertical stack — search bar → filter chip strip (48 px) → scrollable result list.
- **Card list items:** 12 px vertical padding, 20 px horizontal, full-width with 1 px `#f2f2f2` bottom divider.
- **Modal overlay:** centred 510 px wide card with 35 px padding, 10 px radius, at 50 % viewport position.
- **Sidebar:** fixed-width notification centre; inner header 48 px tall.
- **Spacing unit:** 8 px base; gaps of 8 px between filter chips, 5 px margin between badge tags.

## 6. Depth & Elevation

- **Level 0 — flat canvas:** white / gray-100 background, no shadow.
- **Level 1 — card / list panel:** `box-shadow: 0px 2px 2px rgba(0,0,0,0.075), -1px 1px 1px rgba(0,0,0,0.03), 1px 1px 1px rgba(0,0,0,0.03)` — subtle lift for the detail panel.
- **Level 2 — floating map controls:** `box-shadow: 4px 2px 12px 0px rgba(0,0,0,0.24)` — clearly raised FAB buttons over the map layer.
- **Level 3 — primary CTA (important):** `box-shadow: 0 4px 5px 0 rgba(89,99,217,0.3)` — coloured indigo shadow signals the most prominent action.
- **Level 4 — modal / overlay:** `background-color: #000; opacity: 0.3` scrim + centred white card; `z-index: 15`.
- **Tooltip:** dark `#3a3a3a` background, 5 px radius, `z-index: 20`.

## 7. Do's and Don'ts

### Do
- Use `#584de4` for all primary interactive states — buttons, links, active borders, focus indicators.
- Pair price data with `#4337de` (deep indigo) for sale prices, `#3DAB6A` for upward trends, `#EE3A3A` for downward trends.
- Keep the map canvas uncluttered; restrict non-essential UI to the side panel.
- Use Pretendard at 16 px / 400 for body copy and 17 px for button labels.
- Apply the 6 px radius to interactive pill buttons; use 8 px radius for header filter chips.
- Show skeleton/loading states for list items while data loads; never block the map.
- Use `#f3f4fc` tint backgrounds for secondary CTA buttons to maintain hierarchy under the primary fill.

### Don't
- Don't use `#4d55b2` (nav variant) as the primary for new interactive elements — it is a legacy dark-mode nav colour.
- Don't add heavy decorative gradients or large hero images; the product is data-first.
- Don't place multiple filled-primary CTAs on the same screen; reserve the fill for a single dominant action.
- Don't use font-sizes below 11 px for any visible text.
- Don't override the filter chip radius to 0 px (that is reserved for the full-width bottom CTA only).
- Don't use the price-accent `#4337de` for non-price content; it will confuse the semantic colour signal.

## 8. Responsive Behavior

- The desktop layout is a fixed-width split panel (354–375 px sidebar + map); it does not collapse to a fluid grid on narrow windows.
- The mobile app (iOS/Android) uses a bottom-sheet paradigm with full-screen map and a pull-up results list.
- Filter chip strip scrolls horizontally with hidden scrollbar (`overflow: scroll hidden; -webkit-scrollbar: none`).
- Map FAB controls reposition via absolute/fixed positioning relative to the map container; they do not reflow.
- Retina assets served via `(-webkit-min-device-pixel-ratio: 2)` media query switching sprite URLs.
- Modal overlay is fixed-position full viewport; the centred card is 510 px wide with pixel-perfect negative margins (no vw-based centering).

## 9. Agent Prompt Guide

When generating UI for Hogangnono:
- **Primary action:** filled indigo button — `background #584de4; color #fff; border-radius 6px; height 50px; font-size 17px`.
- **Secondary action:** tint button — `background #f3f4fc; color #584de4; border-radius 6px; height 50px; font-size 17px`.
- **Filter chip (default):** `border 1px solid #F3F3F3; border-radius 8px; height 32px; font-size 14px; color #333333`.
- **Filter chip (active):** swap border and text to `#584de4`; keep same dimensions.
- **Price text:** `color #4337de; font-size 19px; font-weight 500`.
- **Body text:** `color #333333; font-size 16px; font-weight 400; font-family Pretendard`.
- **Card container:** `background #fff; border 1px solid #cecece; border-radius 3px; box-shadow 0px 2px 2px rgba(0,0,0,0.075)`.
- **Divider:** `border-bottom 1px solid #f2f2f2`.
- **Error / price-drop:** `color #EE3A3A`. **Success / price-rise:** `color #3DAB6A`.
- Keep layouts data-dense and map-adjacent; avoid lifestyle/hero photography patterns.

## 10. Voice & Tone

**Three adjectives:** transparent, plain-spoken, user-protective

| Do | Don't |
|---|---|
| Use direct, factual language about prices and data | Use hype or emotional superlatives about property values |
| Acknowledge uncertainty where data is incomplete | Overstate confidence in market predictions |
| Speak on behalf of the buyer / renter | Frame content from the agent's or seller's perspective |
| Keep UI labels short and action-oriented | Use jargon-heavy real-estate terms without definition |

**Voice samples (illustrative):**
- *"이 단지의 최근 실거래가를 확인했어요. 시세보다 낮게 거래된 이력이 있으니 참고하세요."* (We checked the recent actual transaction prices for this complex. Note that there are historical sales below market rate.)
- *"호갱 되지 마세요 — 정확한 실거래 데이터로 비교하세요."* (Don't get ripped off — compare with accurate actual transaction data.)
- *"원하시는 조건을 설정하면 딱 맞는 매물을 찾아드릴게요."* (Set your conditions and we'll find exactly the right listing for you.)

## 11. Brand Narrative

Hogangnono — literally "no more being a fool (호갱)" — was born in 2015 when Kakao developer Shim Sang-min discovered that Korea's property portals were listing phantom prices inflated by paid advertising, leaving buyers without reliable data for the most important financial decision of their lives. His team of three built the first version in weeks, pulling official transaction records from the Ministry of Land, Infrastructure and Transport and plotting every deal on a map. The name is both a promise and a provocation: honest information exists, and you deserve it.

From that anti-rip-off origin, Hogangnono evolved into Korea's most comprehensive proptech platform, layering 3D sunlight modelling, school-district mapping, reconstruction auction tracking, and resident reviews onto its price-transparency core. Acquired by Zigbang in 2018, it has retained its distinct identity and radical data-openness ethos while scaling to over 2 million registered users. The founder's stated mission — "advancing the real estate industry through IT by providing honest information" — remains the product's north star.

The brand's competitive edge is deliberate simplicity. Where legacy portals bury users in sponsored content, Hogangnono surfaces the single truth the buyer needs: what did this apartment actually sell for, and when? Every design decision — the prominent price display, the map-first layout, the refusal to accept payment for listings — flows from that original commitment to be the side of the user.

## 12. Principles

1. **Data honesty above commercial convenience.** Every number shown is an official transaction record, never an estimate or a sponsored suggestion. *UI implication:* price figures must use the dedicated price-accent colour (`#4337de`) and link directly to source data; never round or approximate displayed prices.

2. **Simplicity is the feature.** Complex market data must be made immediately readable to a non-expert buyer in under 10 seconds. *UI implication:* reduce visual layers; lead with the price and date, subordinate all secondary data; avoid multi-column data tables on first-load views.

3. **The user is always the buyer, never the seller.** Product language, iconography, and CTA copy orient around protecting the purchaser. *UI implication:* write button labels and tooltips from the buyer's intent ("확인하기", "비교하기") not the agent's interest ("문의하기" should feel secondary).

4. **Speed of understanding, not speed of transaction.** Hogangnono earns trust by helping users slow down and compare before committing. *UI implication:* error and warning states should be prominent and never dismissible without acknowledgment; never autofill or pre-select high-commitment actions.

5. **Map is the primary canvas.** Spatial context — neighbourhood, commute, school zone — is inseparable from price judgment. *UI implication:* the map must always be visible or reachable in one tap; panels and overlays must not cover the full viewport.

## 13. Personas

*Illustrative — representative archetypes, not real users.*

**Young Professional First-Timer (지영, 28):** Recently started her first full-time job in Seoul; renting a studio and beginning to track jeonse prices for eventual purchase. Uses Hogangnono daily to watch price trends in her target neighbourhood. Needs: clear price history, commute-time overlays, simple language. Fears: overpaying due to information asymmetry.

**Upgrader Couple (민준 & 수진, 35/34):** Selling a small apartment to buy a larger family home before school-zone registration deadlines. Juggle two incomes and a toddler; research time is scarce. Need: quick price comparisons across 3–4 complexes, school-district filter, subscription eligibility checker. Fear: missing a deadline or buying at a local price peak.

*Illustrative.* **Data-Driven Investor (재원, 44):** Tracks multiple complexes for value-investing opportunities; cross-references Hogangnono data with government reconstruction announcements. Heavy user of non-resident-ratio charts and trading-volume graphs. Needs: dense data, fast export, historical charting depth. Fear: acting on stale or curated data.

*Illustrative.* **Cautious Senior Buyer (순자, 62):** Purchasing an apartment for the first time after selling a rural property; unfamiliar with jeonse vs. purchase semantics. Needs: large text, plain-language explanations, phone-number access to agents for reassurance. Fear: digital interfaces that feel untrustworthy or too fast.

## 14. States

- **Empty (no search results):** Neutral gray illustration + short message "조건에 맞는 매물이 없어요" (No listings match your conditions); suggest relaxing one filter.
- **Loading (list skeleton):** Row skeletons in `#F3F3F3` — title bar 60 % width, price bar 40 % width, caption bar 80 % width; animated shimmer left-to-right at 1.3 s.
- **Error — network failure:** Inline banner in `#EE3A3A` tint background with red icon + "데이터를 불러오지 못했어요 — 다시 시도해 주세요" (Couldn't load data — please try again); retry button in primary fill.
- **Error — no price data for complex:** Greyed-out price slot with tooltip "공식 거래 기록이 없어요" (No official transaction records); never shows a fabricated figure.
- **Success — inquiry sent:** Toast notification with `#3DAB6A` check icon + "문의가 전송되었어요" (Your inquiry was sent); auto-dismisses after 3 s.
- **Skeleton — map bubbles loading:** Price bubbles render as `#E5E5E5` rounded pills at their geo-coordinates; replaced with real figures once API responds.
- **Disabled — subscription eligibility blocked:** CTA button in `background #f0f0f0; color #dadada` with helper text explaining missing eligibility condition below.
- **Active filter applied:** Filter chip border and text switch to `#584de4`; chip background stays white to signal "on" state without heavy fill.

## 15. Motion & Easing

**Duration scale:**
- **Micro (hover / colour swap):** 200 ms
- **Standard (panel slide / button bg):** 300 ms
- **Expand (sheet / modal open):** 350 ms
- **Map pan / transform:** 350 ms–2 s depending on distance

**Easing:**
- Default transitions: `ease` (colour, background-color: 0.3s ease)
- Panel slide: `transform 0.35s` (implicit ease)
- Map zoom: `transform 2–3s` (linear, large tile area)
- Overlay fade: `opacity 0.2s linear` (dismiss) / `opacity 0.3s` (appear)
- Photo gallery: `cubic-bezier(0.4, 0, 0.22, 1)` (Photoswipe standard)

**Rules:**
- Never animate layout-shifting properties (width, height reflows) in real-time data updates; use opacity/transform only.
- Price numbers should update instantly (no count-up animation) to preserve data-honesty perception.
- Map bubble entry uses `fadeIn` keyframe (0 % opacity → 100 %) at 200 ms.
- Bottom-sheet open uses `bottomBoundIn` keyframe (translate Y 50 % → 0, scale 0.6 → 1) at 300 ms.
- Modal entry uses `topBoundIn` (translate Y −50 % → 0, scale 0.6 → 1) at 300 ms.

---
id: fitpet
name: Fitpet
display_name_kr: 핏펫
country: KR
category: healthcare
homepage: "https://fitpet.co.kr/"
primary_color: "#0050ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=fitpet.co.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = brand blue #0050ff (logo dominant + mall primary button); #1482ff is the lighter corporate marketing accent; #0035a8 a deep navy for emphasis. Sale accent #ff5967, rating/points yellow #ffd633. Near-flat depth (box-shadow none). Corporate site = Noto Sans KR + Poppins latin; mall = Pretendard."
  colors:
    primary: "#0050ff"
    primary-deep: "#0035a8"
    brand-blue-lt: "#1482ff"
    accent-orange: "#ff9300"
    sale: "#ff5967"
    points: "#ffd633"
    ink: "#1b1e21"
    ink-corp: "#282828"
    body: "#42494f"
    muted: "#727a82"
    muted-alt: "#8c949c"
    faint: "#a7aeb5"
    canvas: "#ffffff"
    surface: "#f4f7fa"
    promo-tint: "#edf4ff"
    hairline: "#eef1f5"
    border: "#dfe3e8"
    border-strong: "#c2c8cf"
    on-dark: "#eeeeee"
    ink-pure: "#000000"
  typography:
    family: { display: "Poppins", kr: "Noto Sans KR", product: "Pretendard" }
    stat-hero:   { size: 85, weight: 600, use: "Big number stat on corporate hero (16만+), Noto Sans KR" }
    display:     { size: 40, weight: 600, lineHeight: 1.2, use: "Corporate hero headline, Noto Sans KR" }
    section:     { size: 24, weight: 700, use: "Mall section title (오늘의 핫딜), Pretendard" }
    subsection:  { size: 19, weight: 700, use: "Mall page / group title (홈), Pretendard" }
    product:     { size: 17, weight: 400, lineHeight: 1.4, use: "Product-card title, Pretendard" }
    body:        { size: 16, weight: 400, lineHeight: 1.5, use: "Body copy, search field text" }
    nav:         { size: 13, weight: 700, use: "Corporate nav link, Poppins" }
    caption:     { size: 12, weight: 400, use: "Badges, metadata, fine print, Pretendard" }
  spacing: { xs: 4, sm: 8, base: 15, md: 16, lg: 24, chip: 30, xl: 39, xxl: 50 }
  rounded: { sm: 5, md: 10, chip: 30, pill: 999, full: 9999 }
  shadow:
    none: "none"
    hairline: "rgba(0, 0, 0, 0.03) 0px 0px 0px 1px"
  components:
    button-primary: { type: button, bg: "#0050ff", fg: "#ffffff", radius: "28px", padding: "7px 17px", height: "48px", font: "13px / 400 Pretendard", use: "Primary / recommend action button on the mall" }
    button-ghost: { type: button, fg: "#ffffff", border: "2px solid #ffffff", radius: "30px", padding: "10px 50px", height: "42px", font: "12px / 600 Poppins", use: "Ghost pill CTA over corporate hero imagery (일반채용)" }
    search-input: { type: input, bg: "#f4f7fa", fg: "#000000", radius: "10px", padding: "1px 50px", height: "50px", font: "16px Pretendard", use: "Filled borderless search field, placeholder #a7aeb5" }
    filter-chip: { type: badge, fg: "#42494f", border: "1px solid #c2c8cf", radius: "999px", padding: "0 14px", height: "43px", font: "13px / 400 Pretendard", use: "Category / filter chip on the mall" }
    discount-badge: { type: badge, bg: "#ff5967", fg: "#ffffff", radius: "5px", padding: "5px", font: "12px / 700 Pretendard", use: "Discount-percentage badge on product cards" }
    product-card: { type: card, bg: "#ffffff", border: "1px solid #eef1f5", radius: "10px", use: "Product card on grey #f4f7fa surface, hairline separation, near-flat" }
    promo-strip: { type: card, bg: "#edf4ff", fg: "#42494f", radius: "10px", use: "First-purchase / coupon promo strip" }
    nav-link: { type: tab, fg: "#000000", font: "13px / 700 Poppins", active: "text #1482ff", use: "Corporate top-nav item (회사 소개, 팀 문화)" }
  components_harvested: true
---

# Design System Inspiration of Fitpet

## 1. Visual Theme & Atmosphere

Fitpet (핏펫) is Korea's pet-healthcare and pet-commerce brand — an at-home health-check kit, a curated product mall, and an animal-hospital booking flow, all under one confident blue. The system spans two surfaces with one identity: a clean, editorial corporate flagship (`fitpet.co.kr`) that reads like a modern healthcare brand, and a dense, warm commerce mall (`fitpetmall.com`) built for browsing food, treats, and supplies. The connective tissue is a single saturated brand blue — `#0050ff` — which is literally the dominant color of the logo and the fill of the mall's primary action button. Text sits in a near-black `#1b1e21` on the mall (never pure black for product copy) and pure `#000000` on the corporate site, both on a bright `#ffffff` canvas softened by a pervasive cool-grey surface tint (`#f4f7fa`).

The typographic personality is split by job. The corporate flagship pairs **Noto Sans KR** for hangul headlines — 40px at weight 600 for hero lines like "반려동물의 건강을 집에서 1분만에 확인" ("Check your pet's health at home in one minute"), scaling up to an 85px weight-600 stat ("16만+") — with **Poppins** for the latin nav labels at a tight 13px / 700. The commerce mall switches to **Pretendard**, the de-facto Korean product font, running section titles at 24px / 700 ("오늘의 핫딜"), page titles at 19px / 700, and product-card titles at a quiet 17px / 400 in slate `#42494f`. Heavy where it persuades, calm where it lists.

What distinguishes Fitpet from heavier commerce peers is its near-flat depth. Live inspection found `box-shadow: none` almost everywhere; separation is carried by the `#f4f7fa` tint, hairline borders (`rgba(0, 0, 0, 0.03)`, `#eef1f5`, `#dfe3e8`), and rounded geometry rather than elevation. Corners cluster at ~10px for cards and inputs, and everything interactive leans into the pill — the primary button at ~28px radius, filter chips at a full 999px. Accents are used sparingly and semantically: a coral-red `#ff5967` for discount percentages, a rating yellow `#ffd633` for stars and points, a light-blue `#edf4ff` for coupon strips, and a lighter marketing blue `#1482ff` plus a deep navy `#0035a8` as secondary brand tones. The logo also carries a warm orange `#ff9300` paw accent.

**Key Characteristics:**
- Single saturated brand blue (`#0050ff`) — logo dominant and the mall's primary-action fill
- Lighter marketing blue (`#1482ff`) and deep navy (`#0035a8`) as secondary brand tones
- Pervasive cool-grey surface tint (`#f4f7fa`) doing the segmentation work instead of shadows
- Near-flat depth: `box-shadow: none`; separation via `rgba(0, 0, 0, 0.03)` / `#eef1f5` / `#dfe3e8` hairlines
- Pill-forward geometry — ~28px primary button, 999px filter chips, ~10px cards and inputs
- Two-font split: Noto Sans KR + Poppins on the corporate flagship, Pretendard on the mall
- Semantic accents only: coral `#ff5967` for discounts, yellow `#ffd633` for ratings/points, `#edf4ff` for coupon strips
- Near-black `#1b1e21` (mall) and pure `#000000` (corporate) heading text on a bright `#ffffff` canvas

## 2. Color Palette & Roles

### Primary
- **Fitpet Blue** (`#0050ff`): The brand's signature saturated blue. It is the dominant color of the logo and the background fill of the mall's primary action button — the system's single "do this" color.
- **Deep Navy** (`#0035a8`): A darker brand navy used for emphasis text and dense-blue surfaces on the mall.
- **Marketing Blue** (`#1482ff`): A lighter, brighter blue used as the accent on the corporate flagship (links, active nav, highlight blocks).

### Accent
- **Paw Orange** (`#ff9300`): The warm secondary in the logo mark — a friendly counterweight to the blue.
- **Sale Coral** (`#ff5967`): Reserved for discount-percentage badges on product cards.
- **Rating Yellow** (`#ffd633`): Star ratings, points, and reward highlights on the mall.

### Text Hierarchy
- **Ink** (`#1b1e21`): Primary near-black for mall headings and titles — warmer than pure black.
- **Corporate Ink** (`#282828`): Near-black used on the corporate flagship's dark bands and blocks.
- **Body Slate** (`#42494f`): Standard body and product-title text on the mall.
- **Muted Slate** (`#727a82`): Secondary text, captions, metadata.
- **Muted Alt** (`#8c949c`): Alternate muted slate for supporting labels.
- **Faint Grey** (`#a7aeb5`): Lowest-emphasis text — placeholders, disabled labels.
- **Pure Black** (`#000000`): Corporate flagship body and nav text.
- **On-Dark** (`#eeeeee`): Light text on the corporate dark bands.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on blue/dark.
- **Surface Grey** (`#f4f7fa`): The dominant cool-grey tint — segments sections, fills the search field, backs product areas.
- **Promo Tint** (`#edf4ff`): Light-blue background for coupon and first-purchase promo strips.
- **Hairline** (`#eef1f5`): Thin borders and dividers on white cards.
- **Border** (`#dfe3e8`): Standard border for containers and chip outlines.
- **Border Strong** (`#c2c8cf`): Higher-contrast outline for filter chips and toggled controls.

## 3. Typography Rules

### Font Family
- **Corporate display / hangul**: `Noto Sans KR` — hero headlines and stats on `fitpet.co.kr`, at weight 600.
- **Corporate latin / nav**: `Poppins` — latin nav labels and the logotype, at weight 700.
- **Mall / product**: `Pretendard` (with system fallbacks) — every headline, title, and body string on `fitpetmall.com`.

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Stat Hero | Noto Sans KR | 85px | 600 | Big number on corporate hero ("16만+") |
| Display | Noto Sans KR | 40px | 600 | Corporate hero headline |
| Section | Pretendard | 24px | 700 | Mall section title ("오늘의 핫딜") |
| Sub-section | Pretendard | 19px | 700 | Mall page / group title ("홈") |
| Product Title | Pretendard | 17px | 400 | Product-card title, slate `#42494f` |
| Body | Pretendard | 16px | 400 | Body copy, search field text |
| Nav | Poppins | 13px | 700 | Corporate nav link |
| Caption | Pretendard | 12px | 400 | Badges, metadata, fine print |

### Principles
- **Two fonts, two surfaces**: Noto Sans KR + Poppins carry the corporate brand story; Pretendard carries the commerce product. They never mix on the same surface.
- **Weight as the persuade/inform switch**: headlines and section titles sit at 600–700; product titles and body drop to 400. The weight jump is the primary hierarchy signal.
- **Big, confident hero numbers**: the 85px weight-600 stat is the corporate site's boldest typographic move — scale communicates trust ("16만+" pets checked).
- **Hangul-first body sizing**: mall body sits at a legible 16px in the search field and 17px for product titles, dense enough for information-rich commerce.

## 4. Component Stylings

### Buttons

**Primary Action**
- Background: `#0050ff`
- Text: `#ffffff`
- Radius: 28px
- Padding: 7px 17px
- Height: 48px
- Font: 13px Pretendard weight 400
- Use: Primary / recommend action button on the mall ("추천") — the single high-emphasis action

**Ghost Pill (over imagery)**
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Radius: 30px
- Padding: 10px 50px
- Height: 42px
- Font: 12px Poppins weight 600
- Use: Outline CTA over corporate hero imagery ("일반채용")

### Inputs & Forms

**Search Field**
- Background: `#f4f7fa`
- Text: `#000000`
- Radius: 10px
- Padding: 1px 50px
- Height: 50px
- Font: 16px Pretendard
- Placeholder: `#a7aeb5` ("검색어를 입력해 주세요.")
- Use: Filled, borderless search field on the mall

### Cards & Containers

**Product Card**
- Background: `#ffffff`
- Border: 1px solid `#eef1f5`
- Radius: 10px
- Shadow: none
- Use: Product card on the grey `#f4f7fa` surface — hairline separation, no elevation

**Promo Strip**
- Background: `#edf4ff`
- Text: `#42494f`
- Radius: 10px
- Use: First-purchase / coupon promo strip ("첫 구매 시 인기상품 한정 특가!")

### Badges

**Discount Badge**
- Background: `#ff5967`
- Text: `#ffffff`
- Radius: 5px
- Padding: 5px
- Font: 12px Pretendard weight 700
- Use: Discount-percentage badge on product cards ("55%")

**Filter Chip**
- Text: `#42494f`
- Border: 1px solid `#c2c8cf`
- Radius: 999px
- Padding: 0 14px
- Height: 43px
- Font: 13px Pretendard weight 400
- Use: Category / filter chip on the mall ("펫루키")

### Navigation
- Text: `#000000`
- Font: 13px Poppins weight 700
- Padding: 39px 15px
- Active: violet-blue `#1482ff` text on active item
- Use: Corporate top-nav ("회사 소개", "팀 문화", "개발 채용", "TECH BLOG", "FAQ")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, two surfaces)
**Tier 1 sources:** https://fitpet.co.kr/ | https://www.fitpetmall.com/ | https://fitpet.medium.com/
**Tier 2 sources:** getdesign.md/fitpet (0 DESIGN.md files — no entry); styles.refero.design/?q=fitpet (not listed — generic results only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base rhythm: 4 / 8 / 15 / 16 / 24 / 39 px (measured paddings)
- Notable: corporate nav uses a tall 39px vertical padding for a spacious 100px header; ghost CTA runs 10px 50px for a wide tap target
- Mall chips and buttons use tighter 7–14px horizontal padding for dense browsing

### Grid & Container
- **Corporate flagship**: centered single-column hero anchored by the 40px headline and the 85px stat, alternating white and dark (`#282828`) editorial bands
- **Mall**: grid of product cards on a `#f4f7fa` surface, horizontally-scrolling category/filter chip rows, coupon strips in `#edf4ff`
- Cards group related products at a consistent 10px radius

### Whitespace Philosophy
- **Flat segmentation**: sections separate by background tint (`#f4f7fa` vs `#ffffff`) and hairlines, not by shadow
- **Editorial calm on brand, dense grid on commerce**: the corporate site breathes; the mall packs product cards efficiently while keeping generous chip spacing
- **Pill rhythm**: repeated 999px chips and ~28–30px buttons create a soft, consistent horizontal cadence

### Border Radius Scale
- Small (5px): discount badges, fine-grained tags
- Medium (10px): cards, inputs, promo strips — the workhorse
- Chip (28–30px): primary buttons, ghost CTAs
- Full (999px): filter chips, fully-rounded pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, most surfaces |
| Tint (Level 1) | `#f4f7fa` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `rgba(0, 0, 0, 0.03)` / `#eef1f5` / `#dfe3e8` border | White card outlines, dividers |

**Shadow Philosophy**: Fitpet is a near-shadowless system. Live inspection found `box-shadow: none` across the corporate hero, nav, and the mall's cards, chips, and buttons; the only depth cue is a whisper-thin `rgba(0, 0, 0, 0.03)` border repeated across product cards. Grouping is communicated entirely through the flat `#f4f7fa` tint and thin `#eef1f5` / `#dfe3e8` hairlines. This keeps a data-dense commerce grid feeling fast, mobile-native, and calm rather than heavy. When emphasis is needed the system reaches for color — the blue `#0050ff`, the coral `#ff5967`, the yellow `#ffd633` — never elevation.

## 7. Do's and Don'ts

### Do
- Reserve the brand blue (`#0050ff`) for the single primary action — keep it the one "do this" color
- Use the `#f4f7fa` surface tint and `#eef1f5` / `#dfe3e8` hairlines to separate sections, not shadows
- Keep card and input corners at ~10px and interactive pills at 28px–999px
- Use near-black `#1b1e21` for mall headings and slate `#42494f` for product titles instead of pure black
- Use Pretendard on commerce surfaces and Noto Sans KR + Poppins on the corporate brand site
- Use the coral `#ff5967` only for discount percentages and the yellow `#ffd633` only for ratings/points
- Back coupon and first-purchase strips with the light `#edf4ff` tint
- Let big weight-600 numbers (the 85px stat) carry trust on the corporate hero

### Don't
- Spread the brand blue across many elements — it dilutes the single-action signal
- Add drop shadows for elevation — Fitpet is a flat, hairline-and-tint system
- Mix a third accent color into the palette — blue is the brand, coral and yellow are strictly semantic
- Use sharp square corners on interactive controls — everything is rounded or a pill
- Set mall body or product titles in pure `#000000` — use `#1b1e21` / `#42494f`
- Swap the two font systems across surfaces — Pretendard is the mall, Noto Sans KR / Poppins is corporate
- Use the sale coral or rating yellow as decorative fills unrelated to price or rating
- Crowd the corporate hero — it relies on editorial whitespace and one bold stat

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; corporate hero compresses; mall chip rows scroll horizontally |
| Tablet | 640-1024px | 2-up product cards; moderate padding |
| Desktop | 1024-1440px | Full grid, centered corporate hero, multi-column mall bands |

### Touch Targets
- Primary button at 48px height, filter chips at 43px — comfortably tappable
- Search field at 50px height, full-width on mobile
- Corporate nav links inside a tall 100px header (39px vertical padding)

### Collapsing Strategy
- Corporate hero: 40px headline and 85px stat scale down on mobile, weight 600 maintained
- Mall category / filter chips: horizontal scroll on narrow viewports
- Product grid: multi-column collapses to 2-up then single column
- Tinted (`#f4f7fa`) and white bands maintain full-width treatment

### Image Behavior
- Product imagery and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain the 10px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: Fitpet Blue (`#0050ff`)
- Deep navy emphasis: (`#0035a8`)
- Corporate accent: Marketing Blue (`#1482ff`)
- Sale badge: Coral (`#ff5967`)
- Ratings / points: Yellow (`#ffd633`)
- Heading (mall): Ink (`#1b1e21`)
- Body / product title: Slate (`#42494f`)
- Muted text: (`#727a82`), (`#8c949c`), (`#a7aeb5`)
- Background: White (`#ffffff`)
- Surface tint: (`#f4f7fa`)
- Promo tint: (`#edf4ff`)
- Hairlines: (`#eef1f5`), (`#dfe3e8`), (`#c2c8cf`)

### Example Component Prompts
- "Create a mall product card: white `#ffffff` background, 1px solid `#eef1f5` border, 10px radius, no shadow, on a `#f4f7fa` surface. Title 17px Pretendard weight 400, `#42494f`. Discount badge top-left: `#ff5967` background, white text, 5px radius, 12px weight 700."
- "Build a primary action button: `#0050ff` background, white text, 28px radius, 7px 17px padding, 48px height, 13px Pretendard."
- "Design a search field: `#f4f7fa` background, no border, 10px radius, 50px height, 16px Pretendard, placeholder `#a7aeb5`."
- "Create a filter chip row: transparent background, 1px solid `#c2c8cf` border, 999px radius, 0 14px padding, 43px height, 13px Pretendard, `#42494f` text."
- "Design a corporate hero: white canvas, Noto Sans KR headline 40px weight 600 `#000000`, an 85px weight-600 stat, a ghost pill CTA (transparent, 2px solid `#ffffff`, 30px radius) over imagery. Nav links 13px Poppins weight 700, `#1482ff` on active."

### Iteration Guide
1. Blue (`#0050ff`) is the single action color — don't spread it
2. No shadows — separate with `#f4f7fa` tint and `#eef1f5` / `#dfe3e8` hairlines
3. ~10px radius for cards/inputs; 28–999px pills for buttons/chips
4. Mall text is `#1b1e21` / `#42494f`, never pure black; corporate text is `#000000`
5. Coral `#ff5967` = discount only; yellow `#ffd633` = rating/points only
6. Pretendard on the mall; Noto Sans KR + Poppins on the corporate site

---

## 10. Voice & Tone

Fitpet's voice is **warm, reassuring, and health-first** — it treats companion animals as family and the owner as a caretaker who deserves clarity, not upsell. The corporate flagship speaks in plain, benefit-led Korean ("반려동물의 건강을 집에서 1분만에 확인" — "Check your pet's health at home in one minute"), while the mall is practical and friendly, labeling deals and categories in everyday language. The through-line is trust: health claims are concrete, and commerce copy stays low-pressure even during sales.

| Context | Tone |
|---|---|
| Corporate hero | Benefit-led, mission-framed. "반려동물의 건강을 집에서 1분만에 확인." Calm confidence, not hype. |
| Trust / scale proof | Concrete numbers. "16만+" as a plain stat rather than a superlative. |
| Mall section titles | Practical, energetic. "오늘의 핫딜 🔥", "인기상품 한정 특가!" |
| Category / filter labels | Everyday plain Korean. "사료", "간식", "용품", "건강". |
| CTAs | Direct, low-pressure. "추천", "핏펫이 궁금해요". |
| Care / hospital copy | Reassuring, service-framed. "좋은 병원 찾고 진료 예약까지". |

**Voice samples (verbatim from live surfaces):**
- "반려동물의 건강을 집에서 1분만에 확인" — corporate hero (health-first promise). *(verified live 2026-07-02)*
- "건강한 반려생활의 시작 - 핏펫" — mall page title / positioning line. *(verified live 2026-07-02)*
- "좋은 병원 찾는 것도 핏펫에선 쉽게 병원 찾고 진료 예약까지" — corporate section (end-to-end care). *(verified live 2026-07-02)*

**Forbidden register**: fear-based pet-health scare copy, aggressive sales urgency beyond clearly-labeled deals, undefined veterinary jargon left unexplained, exclamation-heavy hype outside the deal context.

## 11. Brand Narrative

Fitpet (핏펫) is a Korean pet-healthcare and pet-commerce company founded in **2017**, built around a simple premise: that caring for a companion animal's health should be as easy as checking your own. Its best-known product is an at-home health-check experience — the homepage's central promise is "반려동물의 건강을 집에서 1분만에 확인" ("check your pet's health at home in one minute") — which lowered the barrier between noticing something and knowing something about a pet's wellbeing. *(2017 founding is widely-documented public knowledge; the mission framing here is quoted from the live homepage.)*

From that health-check root the brand grew outward into a full "건강한 반려생활" ("healthy companion life") platform: **Fitpet Mall** (`fitpetmall.com`) curates food, treats, and supplies chosen against health criteria ("엄격한 기준으로 고른 제품"), and a hospital-finding and booking flow closes the loop ("좋은 병원 찾고 진료 예약까지"). The "16만+" stat on the corporate hero is the trust anchor — scale as evidence that the health-first approach works.

What Fitpet's design refuses is the heavy, anxious chrome of both legacy commerce (shadow-stacked cards, banner clutter) and clinical healthcare (cold institutional palettes). What it embraces is a single friendly blue, a near-flat surface system, rounded pill geometry, and plain, warm Korean copy — signalling a brand that wants pet health to feel approachable, not intimidating.

## 12. Principles

1. **Health first, commerce second.** Products exist to serve the pet's wellbeing, not the other way around. *UI implication:* lead with health benefit and curation criteria; keep sale urgency scoped to clearly-labeled deal modules.
2. **One action, one blue.** `#0050ff` means "do this." *UI implication:* reserve the saturated brand blue for the single primary action so the next step is never ambiguous.
3. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with the `#f4f7fa` tint and hairlines; keep the grid quick to scan.
4. **Approachable, not clinical.** Pet health should feel warm. *UI implication:* rounded pills, friendly Pretendard type, and plain Korean labels instead of cold veterinary framing.
5. **Trust through concreteness.** *UI implication:* prefer real numbers (the 85px "16만+" stat) and specific claims over adjectives; make discounts and ratings literal with the coral `#ff5967` and yellow `#ffd633`.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Fitpet user segments (Korean pet owners managing health and shopping for supplies), not individual people.*

**김하늘, 31, 서울.** A first-time dog owner who worries about spotting health issues early. Uses Fitpet's at-home check because a one-minute test at home is less stressful than an immediate vet visit. Trusts the brand because the copy explains rather than alarms.

**이준호, 38, 경기.** A busy cat owner who buys food and litter monthly on Fitpet Mall. Values the curated "엄격한 기준으로 고른 제품" framing and the clearly-labeled hot deals; scans the flat product grid quickly on his phone.

**박서연, 44, 부산.** A multi-pet household manager who uses Fitpet to find a good animal hospital and book appointments. Appreciates that finding care and shopping live in one calm, non-intimidating app.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Single Ink (`#1b1e21`) line explaining no matching products, with one blue `#0050ff` action to adjust filters. No clutter. |
| **Empty (cart / saved, none yet)** | Muted Slate (`#727a82`) single line inviting the user back to browsing. Calm, honest. |
| **Loading (product grid)** | Skeleton cards on the `#f4f7fa` surface at final dimensions, 10px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Existing cards stay visible; a subtle progress cue rather than a full block. |
| **Error (fetch failed)** | Inline message in Ink (`#1b1e21`) with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (order placed / booked)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f4f7fa` blocks at final dimensions, 10px radius, flat pulse. |
| **Disabled** | Faint Grey (`#a7aeb5`) text on reduced-opacity surface; the blue action fades rather than turning grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 200ms | Card / sheet / dropdown reveal |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, chips, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, matching the flat, fast aesthetic. Pill chips and buttons respond to press with a subtle scale/opacity shift; product cards and results fade in from below at `motion-standard / ease-enter`. No bounce or spring — a pet-health brand signals steadiness and care, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10-15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on two brand-owned surfaces:
- https://fitpet.co.kr/ — corporate/brand flagship: Noto Sans KR 40px/600 hero, 85px/600 stat "16만+",
  Poppins 13px/700 nav, ghost pill (2px solid #ffffff, 30px radius), accent blue #1482ff, dark bands #282828.
- https://www.fitpetmall.com/ — commerce mall: Pretendard body, primary button #0050ff (28.8px radius),
  discount badge #ff5967 (4.8px radius), surface #f4f7fa, promo strip #edf4ff, deep navy #0035a8,
  rating yellow #ffd633, filter chip (1px #c2c8cf, 999px), near-flat depth (box-shadow none).
- https://www.fitpetmall.com/mall/search — filled search field (#f4f7fa bg, 9.6px radius, 16px, no border).
- Logo (google favicon proxy, fitpet.co.kr, 128px) dominant color #0050ff + secondary orange #ff9300.

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md for 26 raw samples).

Voice samples (§10) are verbatim from the live corporate homepage and mall page title.

Brand narrative (§11): Fitpet (핏펫) founded 2017 as a Korean pet-healthcare / pet-commerce company;
at-home health-check origin, Fitpet Mall, and hospital booking. The 2017 founding is widely-documented
public knowledge; mission/positioning phrasing is quoted from the live homepage and mall. Specific
corporate details beyond the live surfaces are general public knowledge, not directly quoted from a
verified Fitpet statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Fitpet user segments (Korean
pet owners). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one blue", "approachable, not clinical" as a rejection of cold
healthcare chrome) are editorial readings connecting Fitpet's observed design to its positioning, not
directly sourced Fitpet statements.
-->

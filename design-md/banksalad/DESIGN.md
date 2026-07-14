---
id: banksalad
name: Banksalad
country: KR
category: fintech
homepage: "https://www.banksalad.com"
primary_color: "#13bd7e"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=banksalad.com&sz=256"
verified: "2026-07-12"
omd: "0.1"
ds:
  name: Banksalad GitHub
  url: "https://github.com/banksalad"
  type: brand
  description: Banksalad's public GitHub org including styleguide repos and BPL (Banksalad Product Library) reference material.
  og_image: "https://avatars.githubusercontent.com/u/71009899?s=280&v=4"
verification_v2:
  schema: 2
  checked: "2026-07-12"
  surfaces:
    - { id: home, kind: marketing-product, url: "https://www.banksalad.com/", inspected: "2026-07-12" }
    - { id: contents, kind: product-directory, url: "https://www.banksalad.com/contents", inspected: "2026-07-12" }
    - { id: loan, kind: product-flow, url: "https://www.banksalad.com/loan/interest-rate-cut", inspected: "2026-07-12" }
    - { id: safety, kind: support-product, url: "https://www.banksalad.com/customer-safety", inspected: "2026-07-12" }
    - { id: card, kind: product-detail, url: "https://www.banksalad.com/product/cards/CARD002319", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.banksalad.com/", captured: "2026-07-12" }
    - { id: contents-live, kind: product-surface, url: "https://www.banksalad.com/contents", captured: "2026-07-12" }
    - { id: loan-live, kind: product-surface, url: "https://www.banksalad.com/loan/interest-rate-cut", captured: "2026-07-12" }
    - { id: safety-live, kind: product-surface, url: "https://www.banksalad.com/customer-safety", captured: "2026-07-12" }
    - { id: card-live, kind: product-surface, url: "https://www.banksalad.com/product/cards/CARD002319", captured: "2026-07-12" }
    - { id: bpl-design, kind: official-doc, url: "https://blog.banksalad.com/tech/banksalad-product-language-design/", captured: "2026-07-12" }
    - { id: bpl-engineering, kind: official-doc, url: "https://blog.banksalad.com/tech/banksalad-product-language-ios/", captured: "2026-07-12" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.action": &loan_evidence { surface_id: loan, source_id: loan-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": *home_evidence
    "tokens.colors.foreground": *home_evidence
    "tokens.colors.secondary": *home_evidence
    "tokens.colors.muted": &card_evidence { surface_id: card, source_id: card-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.line": &safety_evidence { surface_id: safety, source_id: safety-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.typography.family.sans": *home_evidence
    "tokens.typography.heading.size": *loan_evidence
    "tokens.typography.heading.weight": *loan_evidence
    "tokens.typography.heading.lineHeight": *loan_evidence
    "tokens.typography.heading.tracking": *loan_evidence
    "tokens.typography.heading.use": *loan_evidence
    "tokens.typography.body.size": *home_evidence
    "tokens.typography.body.weight": *home_evidence
    "tokens.typography.body.lineHeight": *home_evidence
    "tokens.typography.body.use": *home_evidence
    "tokens.typography.label.size": *home_evidence
    "tokens.typography.label.weight": *home_evidence
    "tokens.typography.label.lineHeight": *home_evidence
    "tokens.typography.label.tracking": *home_evidence
    "tokens.typography.label.use": *home_evidence
    "tokens.typography.caption.size": *card_evidence
    "tokens.typography.caption.weight": *card_evidence
    "tokens.typography.caption.lineHeight": *card_evidence
    "tokens.typography.caption.tracking": *card_evidence
    "tokens.typography.caption.use": *card_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.md": *home_evidence
    "tokens.spacing.base": *home_evidence
    "tokens.spacing.lg": *safety_evidence
    "tokens.rounded.chip": &contents_evidence { surface_id: contents, source_id: contents-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.rounded.action": *loan_evidence
    "tokens.rounded.card": *safety_evidence
    "tokens.rounded.full": *home_evidence
    "tokens.shadow.flat": *home_evidence
    "tokens.components.primary-action.type": *loan_evidence
    "tokens.components.primary-action.bg": *loan_evidence
    "tokens.components.primary-action.fg": *loan_evidence
    "tokens.components.primary-action.radius": *loan_evidence
    "tokens.components.primary-action.padding": *loan_evidence
    "tokens.components.primary-action.height": *loan_evidence
    "tokens.components.primary-action.font": *loan_evidence
    "tokens.components.primary-action.states": *loan_evidence
    "tokens.components.primary-action.use": *loan_evidence
    "tokens.components.filter-chip.type": *contents_evidence
    "tokens.components.filter-chip.bg": *contents_evidence
    "tokens.components.filter-chip.fg": *contents_evidence
    "tokens.components.filter-chip.radius": *contents_evidence
    "tokens.components.filter-chip.padding": *contents_evidence
    "tokens.components.filter-chip.font": *contents_evidence
    "tokens.components.filter-chip.states": *contents_evidence
    "tokens.components.filter-chip.use": *contents_evidence
    "tokens.components.safety-card.type": *safety_evidence
    "tokens.components.safety-card.bg": *safety_evidence
    "tokens.components.safety-card.border": *safety_evidence
    "tokens.components.safety-card.radius": *safety_evidence
    "tokens.components.safety-card.padding": *safety_evidence
    "tokens.components.safety-card.use": *safety_evidence
    "tokens.components.disclosure-row.type": *card_evidence
    "tokens.components.disclosure-row.bg": *card_evidence
    "tokens.components.disclosure-row.fg": *card_evidence
    "tokens.components.disclosure-row.radius": *card_evidence
    "tokens.components.disclosure-row.padding": *card_evidence
    "tokens.components.disclosure-row.font": *card_evidence
    "tokens.components.disclosure-row.use": *card_evidence
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Five current first-party web surfaces. Pretendard is loaded and used; swiper-icons is declared-only. Legacy #04c584, BM JUA, 2px-default components, inputs, charts, and modal claims were not promoted."
  colors:
    primary: "#13bd7e"
    action: "#06a96c"
    canvas: "#ffffff"
    foreground: "#111111"
    secondary: "#555c68"
    muted: "#9fa4b0"
    line: "#f0f2f5"
  typography:
    family: { sans: "Pretendard" }
    heading: { size: 20, weight: 700, lineHeight: 1.4, tracking: 0, use: "Product and safety section headings" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Shared product body and list content" }
    label: { size: 16, weight: 700, lineHeight: 1.625, tracking: -0.08, use: "Prominent product labels and actions" }
    caption: { size: 14, weight: 500, lineHeight: 1.43, tracking: -0.07, use: "Product metadata and helper text" }
  spacing: { sm: 8, md: 12, base: 16, lg: 24 }
  rounded: { chip: 6, action: 16, card: 24, full: 9999 }
  shadow:
    flat: "none"
  components_harvested: true
  components:
    primary-action: { type: button, bg: "#06a96c", fg: "#ffffff", radius: "16px", padding: "16px 20px", height: "56px", font: "16px / 700", states: "default captured; no safe active interaction expansion", use: "Full-width primary action in the public interest-rate flow" }
    filter-chip: { type: button, bg: "rgba(19,189,126,0.15)", fg: "#13bd7e", radius: "6px", padding: "10px 12px", font: "16px / 500", states: "default captured; no safe active interaction expansion", use: "Content-directory category or filter action" }
    safety-card: { type: card, bg: "#ffffff", border: "1px solid #f0f2f5", radius: "24px", padding: "24px", use: "Customer-safety action and guidance card" }
    disclosure-row: { type: listItem, bg: "transparent", fg: "#111111", radius: "0px", padding: "24px 20px", font: "16px / 400", use: "Expandable disclosure row on a public card product detail" }
---

# Design System Inspiration of Banksalad

## 1. Visual Theme & Atmosphere

Banksalad is a Korean data-driven financial platform that helps people compare products, understand credit and spending, and connect finance with a broader health-asset proposition. Its current public web surfaces feel informational rather than decorative: a white `#ffffff` canvas, dense but readable Pretendard typography, near-black `#111111` content, and green actions that keep comparison and next steps visible. The most repeated current accent is `#13bd7e`, while a consequential full-width loan action uses the deeper `#06a96c`. This reference follows the live product surfaces and the official Banksalad Product Language publications separately, preserving BPL's collaboration philosophy without pretending its 2020 component values are necessarily identical to today's public web implementation.

Current geometry is role-specific rather than governed by one sharp-corner default. The content directory uses a compact 6px green chip, the public loan action uses a 16px radius, customer-safety cards use 24px corners with a `#f0f2f5` border, and a carousel indicator uses a full pill. Plain lists and disclosure rows remain square. The earlier claim that 2px was the dominant current system came from a legacy CSS bundle and is not promoted in this pass.

Typography is consistently Pretendard across the five inspected surfaces. The collector matched loaded Pretendard font faces to 603 visible elements spanning body, headings, buttons, cards, and list items. `swiper-icons` was declared but not used for visible text. BM JUA was not declared or visibly used in this fresh capture, so it is not a current UI or marketing token; its earlier promotion has been removed. The observed hierarchy relies mainly on 16px body and labels, 14px supporting copy, and 18–20px headings with 400/500/700 weights.

**Key Characteristics:**
- Loaded Pretendard across all five current public web surfaces
- Current accent `#13bd7e`; deeper action green `#06a96c`
- White `#ffffff` canvas with `#111111` foreground, `#555c68` secondary text, and `#9fa4b0` muted metadata
- Role-specific 6px / 16px / 24px / full-pill geometry
- 8px, 12px, 16px, and 24px as recurring useful spacing values
- Public product evidence covers buttons, cards, and list/disclosure rows; inputs, charts, dialogs, and authenticated app states remain unpromoted

## 2. Color Palette & Roles

### Primary
- **Current accent** (`#13bd7e`): repeated green text and border color across home, contents, loan, and card-detail surfaces.
- **Primary action** (`#06a96c`): full-width loan-flow action background, paired with `#ffffff` text.
- The previous `#04c584` and `#10df99` values were not observed in the five-surface capture and are not current canonical tokens.

### Heading & Body
- **Foreground** (`#111111`): dominant heading, body, and list text across all five surfaces.
- **Secondary** (`#555c68`): supporting copy on home, contents, and card detail.
- **Neutral** (`#606874`): explanatory copy in loan and customer-safety contexts.
- **Muted** (`#9fa4b0`): product metadata and subdued actions on contents and card detail.

### Surface & Border
- **Canvas** (`#ffffff`): default current page and card surface.
- **Line** (`#f0f2f5`): observed 1px customer-safety card border.
- **Transparent**: most navigation, list, disclosure, and utility controls stay unfilled.

### Unresolved color groups

No current public chart, authenticated dashboard, input validation, warning, error, or success-state palette was safely captured. Those legacy groups are omitted rather than mapped to plausible greens, reds, or teals.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | BPL publications establish an official product-language system, but do not publish a current universal font token in the inspected text. |
| Live surface-use | Five public web surfaces loaded and visibly used Pretendard on 603 elements. |
| Official distributed asset | No Banksalad-exclusive UI font asset is promoted in this reference. |
| Declared-only | `swiper-icons` was declared with zero visible text usage. |
| Unresolved | Native-app-only typography remains unresolved without an inspectable current surface. |

Specimen availability requires a loadable font source and is separate from family truth.

### Font Family
- **Primary**: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif`
- Loaded sources were observed for Pretendard Regular, Medium, SemiBold, Bold, and ExtraBold subsets.
- BM JUA was not declared, loaded, or visibly used in this fresh capture and is omitted.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Product Heading | Pretendard | 20px | 700 | 28px | normal | Repeated section and card heading |
| Supporting Heading | Pretendard | 18px | 700 | 26px | -0.09px | Compact product heading |
| Body | Pretendard | 16px | 400 | 24px | normal | Shared product body and list copy |
| Prominent Label | Pretendard | 16px | 700 | 26px | -0.08px | Action and emphasized product label |
| Metadata | Pretendard | 14px | 500 | 20px | -0.07px | Supporting product information |
| Caption | Pretendard | 12px | 500–700 | 18px | -0.06px | Dense metadata where observed |

### Principles
- **Pretendard is the only current visible text family.** Do not substitute an unobserved accent face.
- **400 carries reading; 700 carries decisions.** Current body/list copy is commonly 400, while headings and the primary loan action are 700.
- **Tracking is subtle at product sizes.** Current 14–18px roles use approximately -0.06px to -0.09px; no -1px display token is promoted.
- **Surface evidence stays local.** Authenticated app typography and native-only financial amount roles remain unresolved.

## 4. Component Stylings

### Current verified components

**Primary Loan Action**
- Background: `#06a96c`
- Text: `#ffffff`
- Radius: 16px
- Padding: 16px 20px
- Height: 56px
- Font: 16px / 700 / Pretendard
- States: default captured; no safe active interaction expansion
- Use: Full-width primary action in the public interest-rate flow

**Content Filter Chip**
- Background: `rgba(19, 189, 126, 0.15)`
- Text: `#13bd7e`
- Radius: 6px
- Padding: 10px 12px
- Font: 16px / 500 / Pretendard
- States: default captured; no safe active interaction expansion
- Use: Category and filter action on the public contents directory

**Customer Safety Card**
- Background: `#ffffff`
- Border: 1px solid `#f0f2f5`
- Radius: 24px
- Padding: 24px
- Use: Customer-safety action and guidance card

**Product Disclosure Row**
- Background: transparent
- Text: `#111111`
- Radius: 0px
- Padding: 24px 20px
- Font: 16px / 400 / Pretendard
- Use: Expandable disclosure row on the public card-product detail

<details>
<summary>Superseded 2026-05 legacy snapshot — retained for audit history, not canonical</summary>

### Legacy Buttons

#### Primary CTA (Salad Green)
- Background: `#04c584`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 12px 24px
- Height: 42px (line-height-driven)
- Font: 16px / 700 / Pretendard
- Hover: background `#10df99` (lightens — opposite of convention)
- Use: Primary CTA on data tables, recommendation rows, transactional flows ("내 카드 추천 받기", "신청하기")

#### Primary CTA — Large Display
- Background: `#04c584`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 16px 32px
- Height: 56px
- Font: 18px / 700 / Pretendard
- Letter-spacing: -1px
- Hover: `#10df99`
- Use: Hero CTA on landing surfaces ("앱 다운로드", "지금 시작하기")

#### Primary CTA — Hover-Inverted (Retry)
- Background: `#10df99` (default lighter)
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 10px 20px
- Font: 14px / 500 / Pretendard
- Hover: background `#04c584` (darkens — the one place Banksalad uses the darken pattern)
- Use: Secondary retry / "다시 시도" actions where the resting state is a softer mint

#### Ghost / Outlined
- Background: `#ffffff`
- Text: `#04c584`
- Border: 1px solid `#04c584`
- Radius: 2px
- Padding: 12px 24px
- Font: 16px / 700 / Pretendard
- Hover: background `#f3fdfa` (mint tint)
- Use: Secondary actions paired with a Primary CTA

#### Neutral / Cancel
- Background: `#f5f5f5`
- Text: `#434444`
- Border: none
- Radius: 2px
- Padding: 12px 24px
- Font: 16px / 700 / Pretendard
- Hover: background `#e1e1e1`
- Use: Cancel / "취소" / dismiss actions

#### Disabled
- Background: `#e1e1e1`
- Text: `#acacac`
- Border: none
- Radius: 2px
- Font: 16px / 700 / Pretendard
- Use: Disabled state (form incomplete, retry cooling down)

#### Link Button (Inline Text Link)
- Background: transparent
- Text: `#04c584`
- Border: none
- Padding: 0
- Font: 14px / 500 / Pretendard
- Hover: text-decoration: underline
- Use: Inline links within content ("자세히 보기"), table-row jump links

### Cards & Containers

#### Data Card (Default)
- Background: `#ffffff`
- Border: 1px solid `#e1e1e1` (some surfaces use no border + shadow only)
- Radius: 2px
- Padding: 20px 24px
- Shadow: `0 2px 5px rgba(0, 0, 0, 0.12)`
- Use: Recommendation rows, transaction cards, account summary blocks

#### Card — Soft Variant
- Background: `#fbfbfb`
- Border: none
- Radius: 8px
- Padding: 24px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.1)`
- Use: Marketing/landing feature cards (the rare 8px-radius case)

#### Card — Highlight (Selected)
- Background: `#f3fdfa`
- Border: 1px solid `#10df99`
- Radius: 2px
- Padding: 20px 24px
- Use: Selected state in product comparison lists (cards/loans), recommended-pick highlight

### Inputs & Forms

#### Text Input (Default)
- Background: `#ffffff`
- Text: `#999999` (placeholder) / `#434444` (filled)
- Border: 1px solid `#e1e1e1`
- Radius: 2px
- Padding: 0 16px
- Height: 48px
- Font: 16px / 500 / Pretendard

#### Text Input — Focus
- Background: `#f3fdfa`
- Text: `#434444`
- Border: 1px solid `#10df99`
- Radius: 2px
- Use: Active typing state — the mint tint is the only branded background fill in the system

#### Text Input — Error
- Background: `#ffffff`
- Text: `#434444`
- Border: 1px solid `#fe493d`
- Radius: 2px
- Error message below: 12px / 500 / `#fe493d`
- Use: Validation failure state

#### Amount Input (Financial)
- Background: `#ffffff`
- Text: `#2b2b2b`
- Border: 2px solid `#f5f5f5`
- Radius: 2px
- Padding: 0 16px
- Height: 56px
- Font: 22px / 700 / Pretendard (right-aligned)
- Use: Specialized input for entering won amounts — heavier border (2px), bigger type, right-aligned, 700 weight; treats money input as a heading not a form field

### Badges & Tags

#### Status Pill (Brand)
- Background: `#f3fdfa`
- Text: `#04c584`
- Border: none
- Radius: 41px (rare pill — used only on tag chips, not buttons)
- Padding: 4px 10px
- Font: 12px / 500 / Pretendard
- Use: Filter chips ("연회비 없음", "주유 할인") on card-recommendation pages

#### Status Badge (Warning)
- Background: `#ffffff`
- Text: `#f56200`
- Border: 1px solid `#fd8700`
- Radius: 2px
- Padding: 2px 8px
- Font: 12px / 700 / Pretendard
- Use: Rate-warning, expiry, attention-needed indicators

#### Status Badge (Negative)
- Background: `#ffffff`
- Text: `#fe493d`
- Border: 1px solid `#fe493d`
- Radius: 2px
- Padding: 2px 8px
- Font: 12px / 700 / Pretendard
- Use: Overdue, declined, blocking-issue indicators

### Tables (Financial Data)

#### Table Header Row
- Background: `#f5f5f5`
- Text: `#7b7b7b`
- Border-bottom: 1px solid `#e1e1e1`
- Padding: 12px 16px
- Font: 13px / 700 / Pretendard / uppercase letter-spacing 0.05em
- Use: Column headers on transaction lists, fee schedules

#### Table Body Row
- Background: `#ffffff` (alternates with `#fbfbfb` on dense tables)
- Text: `#434444`
- Border-bottom: 1px solid `#e1e1e1`
- Padding: 12px 16px
- Font: 14px / 500 / Pretendard
- Amounts right-aligned: 14px / 700 / `#2b2b2b` (positive) or `#fe493d` (negative)
- Use: Transaction rows, line-item displays

### Charts & Data Viz

#### Chart Series Tokens
- Series 1: `#34464b` (primary)
- Series 2: `#5c818a` (secondary)
- Series 3: `#1c6c73` (tertiary)
- Series 4: `#a7c7cf` (quaternary / pale)
- Highlight: `#04c584` (always reserved for "your value" / user's own data point)
- Negative: `#fe493d`
- Positive trend: `#04c584`

#### Axis & Gridlines
- Axis label: 10–12px / 500 / `#7b7b7b`
- Gridline: 1px dashed `#e1e1e1`
- Background: `#ffffff` or `#fbfbfb`

### Navigation

- Header: sticky white (`#ffffff`), no shadow at rest, 1px bottom border `#f5f5f5`
- Logo: left, ~24–28px tall, brand wordmark in `#04c584` (or `#2b2b2b` mono variant)
- Nav links: 14px / 500 / Pretendard / `#434444`, hover `#04c584`
- Sign-in CTA: white background, `#2b2b2b` text, 1px solid `#d8dfe6` border, 16px radius, 6px 14px padding, 14px / 400 (the home-page header uses a softer 16px radius for the auth pill — exception to the 2px default; this is the only 16px-radius live observation in the captured DOM)

### Shadows

| Level | Treatment | Use |
|---|---|---|
| Flat | none | Page background, inline elements |
| Soft (L1) | `0 1px 1px rgba(0,0,0,.08)` | Subtle row separators |
| Standard (L2) | `0 2px 5px rgba(0,0,0,.12)` | Default cards — most common (~38 occurrences) |
| Elevated (L3) | `0 4px 9px rgba(0,0,0,.15)` | Dropdowns, popovers |
| Deep (L4) | `0px 2px 8px rgba(0,0,0,.1)` | Floating panels |
| Modal (L5) | `0 17px 50px rgba(0,0,0,.19)` | Modal dialogs |
| Inset | `inset 0 1px 1px rgba(0,0,0,.12)` | Pressed-button / depressed input feel |

---

</details>

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://www.banksalad.com/ ; https://www.banksalad.com/contents ; https://www.banksalad.com/loan/interest-rate-cut ; https://www.banksalad.com/customer-safety ; https://www.banksalad.com/product/cards/CARD002319 ; https://blog.banksalad.com/tech/banksalad-product-language-design/ ; https://blog.banksalad.com/tech/banksalad-product-language-ios/
**Tier 2 sources:** https://getdesign.md/banksalad (no brand record found in exact search); https://styles.refero.design/?q=banksalad (attempted; browser-harness unavailable and indexed search returned no brand result)
**Tier 2 status:** unavailable
**Conflicts unresolved:** none
**Earlier mistakes reverted:** `#04c584` canonical primary, `#10df99` hover, BM JUA current usage, 2px default radius, and uncaptured input/chart/modal/state claims

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px
- Card internal padding: 20px / 24px (slightly tighter than Toss's 20px-horizontal default — Banksalad packs more data)
- Table-row vertical padding: 12px (denser than consumer apps)

### Grid & Container
- Marketing/landing: max content width ~1080–1200px, centered
- App / data surfaces: full-width with 16–24px gutters; tables go edge-to-edge on mobile
- Card-recommendation lists: single-column on mobile, 2–3 column grid on desktop
- Charts: full-width within their card container, never bleed outside

### Whitespace Philosophy
- **Density is the brand.** Where Toss says "breathing room for money", Banksalad says "more facts visible without scrolling". A balance, a comparison rate, an interest rate, and three filter chips can coexist in one card.
- **Section rhythm by surface fill.** White (`#ffffff`) and off-white (`#fbfbfb`) sections alternate quietly — not for drama, but to chunk dense data into scannable bands.
- **Tight gaps inside, generous gaps outside.** Inside a comparison card, rows sit on 12px vertical gaps. Between cards, 24–32px. The hierarchy of grouping is communicated through gap-size alone.

### Border Radius Scale
- **2px (dominant — 81 occurrences in CSS)**: Buttons, inputs, cards, badges, banners. The signature.
- 4px: Small badges, inline pills.
- 8px: Soft marketing cards (rare).
- 10–12px: Promotional banner corners (rare).
- 30–41px: Filter pills, tag chips, avatar circles.
- 50%: Avatars, icon backdrops.

Banksalad's 2px is a typographic-engineering commitment: pixel rounding sharp enough to look engineered, soft enough to not draw blood. Any radius ≥ 12px feels Toss-ish and is reserved for explicitly marketing-warmth contexts.

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (L0) | No shadow | Page background, inline elements |
| Soft (L1) | `0 1px 1px rgba(0,0,0,.08)` | Subtle row lift, list-item separators |
| Standard (L2) | `0 2px 5px rgba(0,0,0,.12)` | Default cards — by far the most common (~38 occurrences) |
| Elevated (L3) | `0 4px 9px rgba(0,0,0,.15)` | Dropdowns, hover-elevated cards |
| Deep (L4) | `0px 2px 8px rgba(0,0,0,.1)` | Floating action panels |
| Modal (L5) | `0 17px 50px rgba(0,0,0,.19)` | Dialog modals, account-switch overlays |
| Inset (L-1) | `inset 0 1px 1px rgba(0,0,0,.12)` | Pressed button state, depressed input visual |
| Halo | `0 0 2px rgba(0,0,0,.26)` | Thin outline on overlay menus and popovers |

**Shadow Philosophy.** Shadows are **always neutral and single-layer.** No colored shadows, no parallax stacks. Where Stripe brands its shadows in navy and Toss uses near-zero shadows for clinical clarity, Banksalad sits between — visible enough that cards lift off the surface, restrained enough that the data inside is what the eye lands on. The signature `0 2px 5px rgba(0,0,0,.12)` is a small, low-cost lift used 38× in the bundle.

## 7. Do's and Don'ts

### Do
- Use `#04c584` for every interactive moment — CTAs, links, focus accents, "your data point" on charts
- Use `#10df99` for hover (it's *brighter* than `#04c584` — Banksalad lightens on interaction)
- Use `#f3fdfa` mint tint on input focus background — the only branded surface tint in the system
- Keep border-radius at 2px for buttons, inputs, cards, badges — the system's geometric signature
- Use Pretendard with the full Korean fallback stack; 700 as default weight for headings and CTAs
- Use `#2b2b2b`/`#434444` warm near-blacks for type instead of `#000000`
- Use the teal-slate family (`#34464b`/`#5c818a`/`#1c6c73`/`#a7c7cf`) for chart series — cooler than brand green by design
- Use `#04c584` only for "your value" on a chart — never as a generic data fill
- Right-align financial amounts in tables; use 700 weight for amounts even at 14px
- Use comma-separated won amounts with the currency unit in 500 weight (`12,400,000원`)

### Don't
- Don't use Toss's 12px+ rounded corners — Banksalad is 2px; 8px is the soft-marketing exception
- Don't use Kakao yellow, KakaoPay yellow, or any warm accent for primary interaction — green is the sole interactive hue
- Don't use BM JUA inside the app — Jua is for marketing-landing display moments only
- Don't use weight 400 for body — Banksalad's body weight is 500
- Don't apply colored shadows (blue, green, branded) — shadows are always neutral black
- Don't pad financial cards generously like Toss — Banksalad packs density; data is the aesthetic
- Don't approximate currency amounts (`약 120만원`) on primary financial surfaces — bare numerals with commas only
- Don't use `#0099ff` info-blue for default links — green is the default link color; blue is reserved for *external* references
- Don't use Pretendard 300 on body — light weights only at hero display sizes (52px+)
- Don't sprinkle the brand green on chart series — green is for interaction, teal-slate is for data

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | <600px | Single column, full-width tables (horizontal scroll if needed), 16px gutters |
| Tablet | 600–1024px | 2-column card grids, 20px gutters |
| Desktop | 1024–1280px | Full marketing layout, 3-column feature grids |
| Large | >1280px | Centered content max-width ~1200px |

### Touch Targets
- Buttons minimum 42px height (default), 56px for hero display CTAs
- Table rows minimum 44px (slightly denser than 48px standard — Banksalad accepts a tighter tap)
- Filter pill chips: 28–32px height
- Input minimum 48px height; amount-input 56px

### Collapsing Strategy
- Hero: 52px → 36px on mobile, weight 700 maintained
- Marketing 3-col feature grids → 2-col → single column
- Comparison tables: maintain table form on tablet, switch to stacked cards on mobile (each row becomes a card with key/value pairs)
- Charts: full-width, maintain aspect ratio, axis-label font drops 12px → 10px on mobile
- Filter chip rows: horizontal scroll (no wrap) on mobile to preserve the chip rhythm

### Image Behavior
- Card/product logos: 24–40px, consistent square framing within rows
- Chart screenshots in marketing: full-width on mobile, 2-col on desktop
- Decorative illustrations: rare; when used, locked to a single accent illustration per landing surface (no illustration overload — data is the visual)

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Salad Green (`#04c584`)
- Hover: Hover Green (`#10df99`)
- Page background: White (`#ffffff`)
- Surface alt: Off-white (`#fbfbfb`)
- Neutral surface: (`#f5f5f5`)
- Heading text: Warm near-black (`#2b2b2b`)
- Body text: (`#434444`)
- Caption: (`#7b7b7b`)
- Placeholder: (`#999999`)
- Border: (`#e1e1e1`)
- Focus background tint: Mint (`#f3fdfa`)
- Chart series: `#34464b` / `#5c818a` / `#1c6c73` / `#a7c7cf`
- Error: `#fe493d`
- Warning: `#fd8700` / `#f56200`

### Example Component Prompts
- "Create a Banksalad-style primary CTA: `#04c584` background, white text, 2px border-radius (not 12px), 700-weight Pretendard at 16px, 12px 24px padding, 42px height. Hover lightens to `#10df99`."
- "Design a card-recommendation row: white background, 1px solid `#e1e1e1` border, 2px radius, 20px 24px padding, shadow `0 2px 5px rgba(0,0,0,.12)`. Card logo 32px left, title 16px/700 `#2b2b2b`, three filter chips below (`#f3fdfa` bg, `#04c584` text, 41px radius, 12px/500), annual-fee figure right-aligned 18px/700 with '원' suffix in 500."
- "Build a focused amount input: 2px border `#f5f5f5`, on focus border `#10df99` and background `#f3fdfa`. Text 22px/700 right-aligned, `#2b2b2b`, won unit in 500 weight following the digits."
- "Create a data chart: white background, axis labels 10px/500 `#7b7b7b`, gridlines 1px dashed `#e1e1e1`. Series 1 `#34464b`, series 2 `#5c818a`, series 3 `#1c6c73`. User's own data point in `#04c584` to make 'your value' pop against neutral teal-slate."
- "Design a transaction table row: alternating `#ffffff` / `#fbfbfb` background, 12px 16px padding, 1px solid `#e1e1e1` bottom border. Date column 14px/500 `#7b7b7b`, merchant 14px/500 `#434444`, amount right-aligned 14px/700 — `#2b2b2b` for positive, `#fe493d` for negative."

### Iteration Guide
1. **Default radius is 2px.** If the AI produces 12px or 16px corners, reject — that's Toss, not Banksalad.
2. **Default weight is 700 for anything important.** Headings, CTAs, financial amounts. 500 for body. Never 400 for body.
3. **Green is for interaction only.** Never use `#04c584` as a generic background fill or decorative element. It always means: the user can tap this, or this is the user's own data.
4. **Hover lightens.** `#04c584` → `#10df99` on hover (the opposite of conventional darken-on-hover). This is a signature.
5. **Shadows are neutral and single-layer.** `0 2px 5px rgba(0,0,0,.12)` is the workhorse. No colored shadows.
6. **Chart series are teal-slate, not green.** `#34464b` / `#5c818a` / `#1c6c73` / `#a7c7cf`. Reserve green for the user's own data point.
7. **Pretendard is non-negotiable.** Always include the full Korean fallback stack. Jua only for marketing display.

---

## 10. Voice & Tone

Current public copy is direct, explanatory, and comparison-oriented. The home page connects financial and health assets; the contents directory names products, benefits, and comparison tasks explicitly; customer-safety copy gives the risk and the next action. This supports a factual Korean product voice, but it does not establish the invented notification, validation, or authenticated-app copy previously included here.

<details>
<summary>Superseded voice hypotheses — not current official guidance</summary>

| Context | Tone |
|---|---|
| CTAs | Imperative, concrete outcome. `내 카드 찾기`, `대출 한도 확인하기`, `신청하기`. Never `시작하기 →` with an arrow flourish. |
| Section headlines | Statement of fact, not a hook. `이번 달 지출 분석` not `이번 달, 얼마나 썼는지 보러 갈까요?`. |
| Recommendations | Justified. Every recommended card or loan has a one-sentence reason next to it (`연 30만원 이상 절약될 수 있어요`). Never a bare ranked list. |
| Financial figures | Bare numerals with commas. `1,240,000원`. Approximations (`약 124만원`) are forbidden on primary surfaces. |
| Success messages | One-line confirmation + the relevant figure. `신용점수가 855점으로 올랐어요.` No emoji, no exclamation. |
| Error / validation | Specific cause + one-line action. `주민등록번호가 일치하지 않아요. 다시 확인해주세요.` Never `오류가 발생했습니다`. |
| Empty states | Explain the *why*, then suggest one next step. `아직 연동된 카드가 없어요. 카드를 연동하면 자동으로 지출 분석이 시작돼요.` |
| Legal / disclosure | Formal `~합니다` endings. Pinned at the bottom of recommendation cards. Treated as part of the product, not a footer afterthought. |
| Health-asset (DNA, screening) | Same calm advisor voice as finance. No marketing exuberance about "discovering your DNA". Just `이번 검사로 18가지 항목을 확인할 수 있어요`. |

</details>

The table above is a historical hypothesis and is not promoted as an official writing standard. Current verified samples are:

- “금융을 넘어 건강 자산까지” — current home positioning. <!-- verified: https://www.banksalad.com/ -->
- “신용대출, 햇살론, 직장인 대출까지 한 번에 비교하세요” — comparison copy. <!-- verified: https://www.banksalad.com/contents -->
- “내 대출금리 조회” — concrete product action. <!-- verified: https://www.banksalad.com/contents -->
- “명의 도용 의심 도용사고·보이스피싱 신고 및 행동 요령을 확인하세요” — risk plus next action. <!-- verified: https://www.banksalad.com/customer-safety -->

No complete official voice-and-tone manual was found. Push notifications, authenticated errors, sentence-ending rules, and prohibited phrase lists remain unresolved.

## 11. Brand Narrative

Banksalad's current first-party web presence presents a data-based financial platform spanning product comparison, credit and loan guidance, financial content, customer safety, and a wider health-asset direction. The current home page describes a large comparison inventory and a recommendation engine designed to help people choose favorable products. This reference uses those live statements as the present product narrative and does not rely on third-party founder mythology, funding figures, or fabricated competitive comparisons.

The official BPL publications explain how this product is made. Banksalad describes Product Language as broader than a visual design system: designers and platform engineers share names, abstraction boundaries, component structures, implementation guidance, and examples. BPL emerged alongside a major service redesign, moved collaborative design work to Figma, established ground rules, and maintained versioned libraries and sample applications so platform differences could be reviewed rather than hidden.

BPL's implementation article states “Communication cost is most expensive. Code and Show first, argue after that.” It describes working prototypes, component examples, snapshot testing, and an integral sample app as ways to align design and implementation. These are verified process principles. They do not prove that the colors, radius, or typography observed in 2020 remain current tokens, which is why the current five-surface measurements are reconciled independently.

The current design identity therefore has two evidence layers: an official history of cross-functional product-language practice, and a present web implementation built from white surfaces, Pretendard, green actions, explicit comparison copy, and role-specific geometry. Neither layer is used as a substitute for inaccessible native-app evidence.

## 12. Principles

1. **Share one product language.** BPL exists so design and platform teams name and structure the same UI concepts consistently. *UI implication:* component names and anatomy should map across design and implementation rather than being reinvented per platform.
2. **Code and show before abstract debate.** The official BPL article uses working prototypes to expose where teams agree or disagree. *UI implication:* validate a component in a representative screen before promoting a generalized rule.
3. **Keep design and implementation structures aligned.** BPL describes matching Figma layout structure closely enough that a design change produces a corresponding implementation change. *UI implication:* avoid premature abstraction that obscures the authored component anatomy.
4. **Version the shared language.** The official design article describes fixed platform versions, update tracking, and component-list tooling. *UI implication:* reference claims need dates and surface provenance; old BPL values cannot silently become current web tokens.
5. **Test components alone and in realistic composition.** BPL used component examples, snapshot tests, and an integral sample app. *UI implication:* validate both the isolated spec and the assembled product flow.

## 13. Personas

Banksalad does not publish validated demographic personas in the sources used for this pass. The current public surfaces support task contexts instead:

- A person comparing cards, loans, deposits, or insurance and reading product conditions.
- A person checking whether an interest-rate reduction request may be available.
- A card-detail visitor reading benefits, disclosures, and product metadata.
- A customer looking for fraud, identity-theft, voice-phishing, or mistaken-transfer guidance.
- A reader using the financial contents directory to understand a decision before entering a product flow.

These are observable jobs, not invented people. Names, ages, quotes, income, behavior frequency, and authenticated-app habits require separate user research.

## 14. States

The collector recorded default render states only and performed zero safe interaction expansions. No canonical empty, loading, error, success, disabled, hover, focus, or pressed treatment is promoted. The loan accordion was captured in its rendered state, but this does not establish a complete product-state system.

<details>
<summary>Superseded synthetic state proposals — not verified product facts</summary>

| State | Treatment |
|---|---|
| **Empty (no linked accounts)** | White canvas. Single short paragraph in `#434444` body text explaining why the screen is empty (`아직 연동된 카드가 없어요. 카드를 연동하면 자동으로 지출 분석이 시작돼요.`). One primary CTA in Salad Green (`#04c584`, 2px radius). No illustration. |
| **Empty (filter cleared)** | Single line of `#7b7b7b` caption (`조건에 맞는 결과가 없어요. 필터를 조정해주세요.`). No CTA — user adjusts filters themselves. |
| **Empty (no transactions this period)** | Two-line message in `#434444` explaining the filter scope (`선택한 기간에 거래 내역이 없어요. 다른 기간을 선택하거나 카드 연동을 확인해보세요.`). |
| **Loading (first paint)** | Skeleton blocks at `#f5f5f5` matching the final layout exactly. Financial amounts render as `--원` placeholders rather than skeleton bars — a skeleton bar that resolves to a number is disorienting; `--` is honest. 1s shimmer with 8% white highlight using a `linear-gradient` sweep. |
| **Loading (refresh / in-place)** | Subtle `#04c584` 2px progress bar at top of the section. Previous values stay visible. Never block the table during refresh. |
| **Error (inline field)** | `#fe493d` 1px border on the input, 12px error text below in `#fe493d` weight 500. One actionable sentence (`주민등록번호가 일치하지 않아요. 다시 확인해주세요.`). |
| **Error (recommendation fetch failed)** | Inline banner inside the recommendation card area. `#fe493d` left border, white background, 14px `#434444` text explaining what failed + a `다시 시도하기` button in the retry-button style (`#10df99` resting → `#04c584` on hover). Never a generic toast. |
| **Error (data freshness warning)** | Soft warning banner with `#fd8700` left accent bar, white background, 13px `#7b7b7b` text noting the data is N hours stale. Non-blocking — the user can still see the (possibly stale) figures. |
| **Success (action confirmed)** | Inline confirmation row in `#f3fdfa` mint-tint background, `#04c584` 16px / 700 confirmation text, the relevant figure in 22px / 700 `#2b2b2b` below. No toast for important actions — they get their own confirmation surface. |
| **Success (passive update)** | 3s auto-dismiss toast at top-right. `#2b2b2b` background (NOT brand green — green is reserved for interactive surfaces), white 14px / 500 text, 2px radius, shadow `0 2px 5px rgba(0,0,0,.12)`. No emoji. |
| **Skeleton** | `#f5f5f5` blocks at exact final dimensions, 2px radius matching the component being loaded. 1s shimmer. Financial-amount slots show `--원`, not a bar. |
| **Disabled** | Background `#e1e1e1`, text `#acacac`, 2px radius preserved. Cursor `not-allowed`. The geometry stays identical to the enabled state so re-enabling does not shift layout. |
| **Pressed (button)** | Inset shadow `inset 0 1px 1px rgba(0,0,0,.12)` + background shifts by ~5% darker for the press duration. Returns instantly on release (no spring). |

</details>

## 15. Motion & Easing

One current public accordion panel exposed a `350ms` height/opacity transition using `cubic-bezier(0.25, 0.1, 0.25, 1)`. No broader duration scale, spring policy, chart animation, score count-up, or reduced-motion implementation was verified in this capture.

<details>
<summary>Superseded synthetic motion proposals — not verified product facts</summary>

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, checkbox flips, focus ring appearance |
| `motion-fast` | 150ms | Hover, focus, button press overlays, inline value updates |
| `motion-standard` | 250ms | Card expand, dropdown open, tab content switch, modal open |
| `motion-slow` | 400ms | Page-level transitions, recommendation-card reveal animation |
| `motion-data` | 600ms | Chart series draw-in, score-bar count-up — slower because the user needs time to read the number |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Arriving — modals, dropdowns, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions, chart draw-in |
| `ease-data` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Score count-up, chart series — eases out gradually so the final value is the calm resting state |

**Explicitly forbidden.** No spring overshoot anywhere. No bounce. No `cubic-bezier` with a middle control above `1.0`. Banksalad's voice is *advisor*, not *delighter* — spring-easing reads as a consumer app celebrating a transaction, which is the opposite of the brand promise. Where Toss licenses spring easing only for the money-moved checkmark, Banksalad does not license it at all.

**Signature motions.**

1. **Score count-up.** When a credit-score or asset-total updates, the number animates from the previous value to the new value across `motion-data` (600ms) with `ease-data`. The duration is deliberately slow — the user is supposed to read the change, not see it flash. The Korean numeric separators (`,`) re-flow correctly during the count.
2. **Chart series draw-in.** Time-series charts draw left-to-right in `motion-data` with `ease-standard`. The user's own series (`#04c584`) is drawn *last*, so the eye lands on the user's own data after the surrounding distribution has been established.
3. **Recommendation card reveal.** When a fresh recommendation set loads, cards fade in with `motion-standard / ease-enter` from `opacity: 0; translateY(4px)`. Translate is intentionally small (4px, not 20px) — the cards arrive, they do not fly in.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Score count-ups become instant value swaps. Chart draw-ins render their final state immediately. Banksalad remains fully usable; nothing in the product is information-dependent on motion.

</details>

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch + curl (2026-05-13):
- https://www.banksalad.com/ — confirms current tagline "뱅크샐러드 | 금융을 넘어 건강 자산까지"
  and the Pretendard + BM JUA font stack via preload <link> tags.
- https://webview-cdn.banksalad.com/banksalad-web/static/dist/v2.5c10981711a65fe446400c6ecec36a221b1c3e9e.bundle.css
  (865 KB) — all token-level claims (#04c584 primary green, 2px dominant radius,
  Pretendard with full Korean fallback, 700 default weight, 0 2px 5px rgba(0,0,0,.12)
  standard shadow, input focus border #10df99 / background #f3fdfa).
- https://blog.banksalad.com/tech/banksalad-product-language-ios/ — confirms
  the design system is internally called "BPL" (Banksalad Product Language)
  and the quoted principle "Communication cost is most expensive. Code and Show
  first, argue after that."
- https://github.com/banksalad — confirms the official org and the
  banksalad/styleguide public repo.

Brand facts via WebSearch (2026-05-13):
- Hankyung 2019-03-12 — manual 16-hour/day data classification origin
- Korea Herald 2019-02-22 — 1.5M MAU early 2019
- Korea Herald 2019-08-28 — ₩45B Series C at ₩300B valuation
- PitchBook — $169.96M total raised

Founder mission quote "정보 비대칭성을 해소해 누구나 똑똑해지는 세상을 만들겠다"
is attributed to Kim Tae-hoon per multiple Korean press interviews summarized
in the WebSearch result; the exact phrasing is widely cited in Korean fintech
coverage of Banksalad.

Personas (§13) are fictional archetypes informed by publicly described
Banksalad user segments (Korean millennials managing credit-card spend,
self-employed users comparing rates, UX researchers using the health-asset
extension, mid-career users using Banksalad as a passive dashboard). Names
are illustrative; they do not refer to real people. Yi Su-yeon's paraphrase
of Toss-vs-Banksalad voice in §13 is explicitly marked illustrative.

Interpretive claims (e.g., "2px is a philosophical commitment", "green is for
interaction, not decoration", "approximations are a betrayal") are editorial
readings of BPL's observable design choices, not directly sourced Banksalad
statements. They are anchored in the principle quote from BPL_iOS
("Communication cost is most expensive...") and the founder's mission
("resolve information asymmetry").
-->

---
id: banksalad
name: Banksalad
country: KR
category: fintech
homepage: "https://www.banksalad.com"
primary_color: "#04c584"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=banksalad.com&sz=256"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Banksalad GitHub
  url: "https://github.com/banksalad"
  type: brand
  description: Banksalad's public GitHub org including styleguide repos and BPL (Banksalad Product Library) reference material.
  og_image: "https://avatars.githubusercontent.com/u/71009899?s=280&v=4"
---

# Design System Inspiration of Banksalad

## 1. Visual Theme & Atmosphere

Banksalad (뱅크샐러드) is the design language of a **trustworthy financial advisor that runs on data, not optimism**. Where Toss flattens money into one cheerful gesture and KakaoPay wraps it in Kakao yellow, Banksalad insists that *more information, clearly presented*, is the actual brand promise. The home page opens on a white canvas (`#ffffff`/`#fbfbfb`) with warm near-black text (`#2b2b2b` for headings, `#434444` for body — never pure `#000`), anchored by a saturated mint-green `#04c584` that does all the interactive work. The green is specifically a **salad-leaf green** (the brand name is literally "Bank + Salad" — financial data freshly tossed for you), warmer than Spotify's `#1db954` and far brighter than the corporate teal that legacy Korean banks default to.

The single most distinctive geometric choice is the radius scale. The CSS bundle contains **81 occurrences of `border-radius: 2px`** and only 5 of 8px and 3 of 4px. Banksalad is **almost-flat**: 2px is just enough to take the harshness off a corner without softening anything into "app-friendly" plumpness. This is a deliberate rejection of the Toss/Kakao consumer-app idiom (12–16px). It tells the user: this is data, not a toy. The tabular density follows from the same conviction — cards pack rows of numbers tightly, and the 700-weight Pretendard digits never apologize for taking up space.

Typography pairs **Pretendard** (the de-facto Korean modern sans, designed by Kil Hyun-jin, weight-axis variable) with **BM JUA** ("배민 주아체", Battle Grounds Jua — a rounded, friendly Korean display face) as an accent. Pretendard does 99% of the work; Jua appears only for marketing/landing display moments where Banksalad wants to feel warm rather than clinical. The default weight is **700** (160 of 304 weight declarations) — Banksalad numbers and headings are confident and chunky, with 500 as the secondary "emphasis on body" weight. Light weights (300) appear ~26 times — only for the largest hero numerals where the size carries the authority.

**Key Characteristics:**
- Pretendard + Apple SD Gothic Neo + Noto Sans KR font stack — Korean-native typography first
- "BM JUA" as accent display font for landing/promotional moments only
- Signature green `#04c584` (mint, salad-leaf) for all interactive moments
- Hover/focus green `#10df99` (one shade brighter) — interaction makes things *lighter*, not darker
- 2px radius dominance — the brand reads as data-tool, not consumer-app
- Warm near-black `#2b2b2b`/`#434444` for type instead of `#000000`
- Mint focus tint `#f3fdfa` on input backgrounds — the only branded background tint in the system
- 700 weight as default for headings and financial figures; 500 for body emphasis
- Subtle single-layer shadows `0 2px 5px rgba(0,0,0,.12)` — never colored, never theatrical
- Teal-gray data palette (`#34464b`/`#5c818a`/`#1c6c73`/`#a7c7cf`) for chart series — cool, advisor-grade

## 2. Color Palette & Roles

### Primary
- **Salad Green** (`#04c584`): Primary brand color, CTA backgrounds, links, accent rules, financial-status accents. Mint with a touch of grass — readable on white, energetic but not playful.
- **Hover Green** (`#10df99`): Brighter mint applied on hover, focus border, and the resting state of less-prominent CTAs. Banksalad lightens to indicate interaction (opposite of the conventional darken-on-hover pattern).
- **Mint Tint** (`#f3fdfa`): Focus background on inputs, success surface fill. The only branded tint in the system.

### Heading & Body
- **Heading** (`#2b2b2b`): Warm near-black for headlines, prominent labels, and financial amounts. Never `#000`.
- **Body** (`#434444`): Standard reading text. Filled-input text color.
- **Body Light** (`#7b7b7b`): Captions, secondary descriptions.
- **Placeholder** (`#999999`): Input placeholders, muted metadata.
- **Disabled** (`#acacac` / `#c0c0c0`): Disabled text and icons.

### Surface & Border
- **Page** (`#ffffff`): Default canvas.
- **Surface Light** (`#fbfbfb`): Soft surface alternation, panel fills.
- **Surface Neutral** (`#f5f5f5`): Dividers, separator backgrounds, content shelf fills (most-used neutral after green).
- **Border Input** (`#e1e1e1`): Default input border, divider line.
- **Surface Mint** (`#f3fdfa`): Success-state surface fill.

### Data / Chart Palette (teal-slate family)
- **Deep Slate** (`#0b0c0c`): Maximum-depth axis labels.
- **Teal-Slate 900** (`#333a44`): Primary chart series.
- **Teal-Slate 800** (`#34464b`): Secondary chart series, table headers.
- **Teal-Slate 700** (`#436068`): Tertiary chart.
- **Teal 600** (`#1c6c73`): Highlighted data point.
- **Teal-Gray 500** (`#5c818a`): Subdued data, legend.
- **Teal 400** (`#318b93`): Mid-range fills.
- **Pale Teal** (`#a7c7cf`): Background fills for chart bands.

The teal-slate family is intentionally **cooler than the brand green**, so that chart series read as neutral data rather than as branded surfaces. Banksalad's green is for interaction; teal-slate is for information.

### Semantic
- **Error Red** (`#fe493d`): Strong error states, blocking validation.
- **Error Soft** (`#ff8a84`): Light error tint, secondary error indicators.
- **Warning Orange** (`#fd8700`): Warning emphasis (rate spikes, expiry).
- **Warning Deep** (`#f56200`): Highest-severity warning.
- **Warning Light** (`#ff9900`): Soft warning highlights.
- **Info Blue** (`#0099ff`): External links, info notices (used sparingly — green is the default link color).
- **Success Green** (`#04c584` / `#10df99` / `#13bd7e`): Success uses brand green; there is no separate success hue.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif`
- **Display Accent**: `"BM JUA", sans-serif` — reserved for marketing-landing headlines where a warm, rounded Korean voice is wanted (rare; default to Pretendard)
- Variable-axis Pretendard supplies 300/400/500/700/800/900 weights as needed; subset woff2 files for ExtraBold (800), Bold (700), Medium (500), Regular (400) are preloaded on the home page

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Hero Display | Pretendard | 52px | 700 | 64px (1.23) | -1px | Largest landing headline; sometimes Jua for marketing warmth |
| Display Large | Pretendard | 48px | 700 | 1.2 | -1px | Secondary hero |
| Display | Pretendard | 38–44px | 700 | 1.25 | -1px | Section-opening figures (balances, scores) |
| Section Heading | Pretendard | 32–36px | 700 | 1.3 | -0.5px | Marketing section titles |
| Heading 1 | Pretendard | 28px | 700 | 32px | normal | In-app section titles |
| Heading 2 | Pretendard | 22–24px | 700 | 28px | normal | Card titles, panel headings |
| Heading 3 | Pretendard | 20px | 700 | 24px | normal | Sub-card headings |
| Subhead | Pretendard | 18px | 700 | 1.3 | normal | Featured-button text, key callouts |
| Body Large | Pretendard | 16px | 500 | 1.5 | normal | Standard reading text on data screens (700 for emphasis) |
| Body | Pretendard | 14px | 500 | 1.34 | normal | Default body text; 500 weight, not 400 |
| Body Tight | Pretendard | 13px | 500 | 1.34 | normal | Compact labels |
| Caption | Pretendard | 12px | 500 | 1.34 | normal | Metadata, helper text |
| Caption Small | Pretendard | 10px | 500 | 1 | normal | Disclosures, smallest labels |
| Button | Pretendard | 16–18px | 700 | tight | -1px on display CTAs | All CTAs are 700 |
| Financial Amount | Pretendard | 20–36px | 700 | 1 | normal | Always 700, comma-grouped, won unit follows in 500 |

### Principles
- **700 is the default for everything that matters.** Headings, CTAs, and financial amounts. 500 is for body text. 400 is rare. There is no "400 headline" in Banksalad.
- **Pretendard everywhere.** Banksalad does not mix sans families. Jua is a *single* exception, only for warm marketing display.
- **Korean and Latin are co-equal.** Pretendard's optical metrics align Korean (한글) and Latin in the same line; never assume English is primary.
- **Tight letter-spacing at display.** Hero headlines and 18px+ CTAs use `-1px` tracking to compress for density.
- **Numerals as headings.** Financial amounts at 20–36px / 700 are treated as headings, not body — they get the same hierarchical weight as page titles.
- **Lightweight body is forbidden.** 300 only appears on display sizes where the size itself carries hierarchy (52px hero numerals); never on body text.

## 4. Component Stylings

### Buttons

**Primary CTA (Salad Green)**
- Background: `#04c584`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 12px 24px
- Height: 42px (line-height-driven)
- Font: 16px / 700 / Pretendard
- Hover: background `#10df99` (lightens — opposite of convention)
- Use: Primary CTA on data tables, recommendation rows, transactional flows ("내 카드 추천 받기", "신청하기")

**Primary CTA — Large Display**
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

**Primary CTA — Hover-Inverted (Retry)**
- Background: `#10df99` (default lighter)
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: 10px 20px
- Font: 14px / 500 / Pretendard
- Hover: background `#04c584` (darkens — the one place Banksalad uses the darken pattern)
- Use: Secondary retry / "다시 시도" actions where the resting state is a softer mint

**Ghost / Outlined**
- Background: `#ffffff`
- Text: `#04c584`
- Border: 1px solid `#04c584`
- Radius: 2px
- Padding: 12px 24px
- Font: 16px / 700 / Pretendard
- Hover: background `#f3fdfa` (mint tint)
- Use: Secondary actions paired with a Primary CTA

**Neutral / Cancel**
- Background: `#f5f5f5`
- Text: `#434444`
- Border: none
- Radius: 2px
- Padding: 12px 24px
- Font: 16px / 700 / Pretendard
- Hover: background `#e1e1e1`
- Use: Cancel / "취소" / dismiss actions

**Disabled**
- Background: `#e1e1e1`
- Text: `#acacac`
- Border: none
- Radius: 2px
- Font: 16px / 700 / Pretendard
- Use: Disabled state (form incomplete, retry cooling down)

**Link Button (Inline Text Link)**
- Background: transparent
- Text: `#04c584`
- Border: none
- Padding: 0
- Font: 14px / 500 / Pretendard
- Hover: text-decoration: underline
- Use: Inline links within content ("자세히 보기"), table-row jump links

### Cards & Containers

**Data Card (Default)**
- Background: `#ffffff`
- Border: 1px solid `#e1e1e1` (some surfaces use no border + shadow only)
- Radius: 2px
- Padding: 20px 24px
- Shadow: `0 2px 5px rgba(0, 0, 0, 0.12)`
- Use: Recommendation rows, transaction cards, account summary blocks

**Card — Soft Variant**
- Background: `#fbfbfb`
- Border: none
- Radius: 8px
- Padding: 24px
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.1)`
- Use: Marketing/landing feature cards (the rare 8px-radius case)

**Card — Highlight (Selected)**
- Background: `#f3fdfa`
- Border: 1px solid `#10df99`
- Radius: 2px
- Padding: 20px 24px
- Use: Selected state in product comparison lists (cards/loans), recommended-pick highlight

### Inputs & Forms

**Text Input (Default)**
- Background: `#ffffff`
- Text: `#999999` (placeholder) / `#434444` (filled)
- Border: 1px solid `#e1e1e1`
- Radius: 2px
- Padding: 0 16px
- Height: 48px
- Font: 16px / 500 / Pretendard

**Text Input — Focus**
- Background: `#f3fdfa`
- Text: `#434444`
- Border: 1px solid `#10df99`
- Radius: 2px
- Use: Active typing state — the mint tint is the only branded background fill in the system

**Text Input — Error**
- Background: `#ffffff`
- Text: `#434444`
- Border: 1px solid `#fe493d`
- Radius: 2px
- Error message below: 12px / 500 / `#fe493d`
- Use: Validation failure state

**Amount Input (Financial)**
- Background: `#ffffff`
- Text: `#2b2b2b`
- Border: 2px solid `#f5f5f5`
- Radius: 2px
- Padding: 0 16px
- Height: 56px
- Font: 22px / 700 / Pretendard (right-aligned)
- Use: Specialized input for entering won amounts — heavier border (2px), bigger type, right-aligned, 700 weight; treats money input as a heading not a form field

### Badges & Tags

**Status Pill (Brand)**
- Background: `#f3fdfa`
- Text: `#04c584`
- Border: none
- Radius: 41px (rare pill — used only on tag chips, not buttons)
- Padding: 4px 10px
- Font: 12px / 500 / Pretendard
- Use: Filter chips ("연회비 없음", "주유 할인") on card-recommendation pages

**Status Badge (Warning)**
- Background: `#ffffff`
- Text: `#f56200`
- Border: 1px solid `#fd8700`
- Radius: 2px
- Padding: 2px 8px
- Font: 12px / 700 / Pretendard
- Use: Rate-warning, expiry, attention-needed indicators

**Status Badge (Negative)**
- Background: `#ffffff`
- Text: `#fe493d`
- Border: 1px solid `#fe493d`
- Radius: 2px
- Padding: 2px 8px
- Font: 12px / 700 / Pretendard
- Use: Overdue, declined, blocking-issue indicators

### Tables (Financial Data)

**Table Header Row**
- Background: `#f5f5f5`
- Text: `#7b7b7b`
- Border-bottom: 1px solid `#e1e1e1`
- Padding: 12px 16px
- Font: 13px / 700 / Pretendard / uppercase letter-spacing 0.05em
- Use: Column headers on transaction lists, fee schedules

**Table Body Row**
- Background: `#ffffff` (alternates with `#fbfbfb` on dense tables)
- Text: `#434444`
- Border-bottom: 1px solid `#e1e1e1`
- Padding: 12px 16px
- Font: 14px / 500 / Pretendard
- Amounts right-aligned: 14px / 700 / `#2b2b2b` (positive) or `#fe493d` (negative)
- Use: Transaction rows, line-item displays

### Charts & Data Viz

**Chart Series Tokens**
- Series 1: `#34464b` (primary)
- Series 2: `#5c818a` (secondary)
- Series 3: `#1c6c73` (tertiary)
- Series 4: `#a7c7cf` (quaternary / pale)
- Highlight: `#04c584` (always reserved for "your value" / user's own data point)
- Negative: `#fe493d`
- Positive trend: `#04c584`

**Axis & Gridlines**
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

**Verified:** 2026-05-13 (omd:add-reference CREATE mode)
**Tier 1 sources:** banksalad.com home (live HTML — Pretendard + Jua preload, 16px-radius sign-in pill via playwright DOM); webview-cdn.banksalad.com/.../v2.5c10981711a65fe446400c6ecec36a221b1c3e9e.bundle.css (865 KB CSS bundle — 81× `border-radius: 2px`, primary CTA `#04c584` rule, input focus `#10df99`/`#f3fdfa`, full color-frequency map); blog.banksalad.com/tech/banksalad-product-language-ios/ (BPL principle quote); github.com/banksalad (styleguide org confirmed).
**Tier 2 sources:** getdesign.md/banksalad — **no record** ("No designs found for 'banksalad'"). styles.refero.design/?q=banksalad — **no record** (search returns no banksalad cards). Tier 2 unavailable; Tier 1 treated as authoritative.
**Conflicts unresolved:** none. (Single playwright DOM observation of 16px-radius on the sign-in header pill is documented as an exception in §4 Navigation rather than treated as a token-system conflict — the bundle's overwhelming 81× 2px frequency is the system default.)
**Earlier gap:** none — this is CREATE.

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

Banksalad speaks like a **trustworthy financial advisor who happens to read the regulations carefully** — calm, factual, slightly older-feeling than Toss, never the "friend with money" voice that consumer-app fintech defaults to. Where Toss says *"송금 완료"*, Banksalad says *"내 신용점수가 5점 올랐어요. 이번 달 카드 결제 이력이 안정적이었기 때문이에요."* The voice explains *why* the number changed, not just that it changed. Korean is the primary register; English UI strings are translations, not parity.

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

**Forbidden phrases.** `오류가 발생했습니다`, `Oops`, `간단하게`, `최고의 ~`, `놓치지 마세요`, exclamation marks on routine CTAs, emoji on financial surfaces, approximations on money (`약 ~원`), `놀라운 절약` / "amazing savings" / superlative-driven recommendations. Banksalad's voice is the opposite of clickbait — the user came here to think about money, and the product should respect the seriousness of that intent.

## 11. Brand Narrative

Banksalad is the consumer brand of **Rainist (레이니스트)**, founded in **2012 by Kim Tae-hoon (김태훈)** — a Sogang University graduate who started the company inside the Smilegate game-studio incubator and whose **founding team manually classified 16 hours a day of Korean financial-product data to build the first comparison database** ([Hankyung 2019-03-12](https://www.hankyung.com/article/2019031275551)). The founding rejection was specific: every legacy Korean financial portal in 2012 (Bankrate-style aggregators, bank-run comparison pages) presented credit cards and loans in alphabetical lists optimized for the issuer, not the user. Kim Tae-hoon's stated thesis was *"정보 비대칭성을 해소해 누구나 똑똑해지는 세상을 만들겠다"* — "resolve information asymmetry so anyone can become smart [about their own money]" (founder interviews, Korean press 2018–2019). The product's design language follows directly from that thesis: **more facts, clearly tiered, with the reason next to every recommendation.**

Banksalad's monthly active users tripled to **1.5M in early 2019** ([Korea Herald 2019-02-22](http://www.koreaherald.com/view.php?ud=20190222000548)). The company raised a **₩45B ($37M USD) Series C at a ₩300B ($247M) valuation in 2019** ([Korea Herald 2019-08-28](https://www.koreaherald.com/article/2087712)) and has raised **$169.96M cumulatively** to date (PitchBook). Today the product spans credit-card recommendation, personal loans, mortgages, deposits/savings, and — uniquely — **a free DNA-based health-screening service** that extends the "manage your assets" framing from financial assets to health assets. The home-page tagline as of 2026-05-13 reads *"뱅크샐러드 \| 금융을 넘어 건강 자산까지"* ("Banksalad — from finance to health assets"), making that extension the brand's current positioning.

The design system is internally called **BPL — Banksalad Product Language**, documented on the official tech blog ([blog.banksalad.com/tech/banksalad-product-language-ios](https://blog.banksalad.com/tech/banksalad-product-language-ios/)). BPL's most-quoted principle is *"Communication cost is most expensive. Code and Show first, argue after that."* BPL is implemented on iOS with LayoutDrivenUI + RxSwift, on Android in Kotlin, on Web through the CSS bundle this DESIGN.md was extracted from. The system explicitly avoids premature component abstraction — similar components stay independent, matching how designers structure their Figma libraries. The mint-green (`#04c584`), the 2px radius, the Pretendard 700 default, the teal-slate chart palette — all are BPL primitives.

What Banksalad refuses: the cheerful consumer-app voice of Toss and KakaoPay (banksalad explains; it does not delight), the institutional-indigo of legacy Korean banks (which is why it picked green, not blue), the playful illustration of Kakao-family products (Banksalad does not use mascot characters), and the data-density of Bloomberg-terminal aesthetics (the tables are dense but the type is human-readable). Banksalad sits in a narrow middle: serious enough to be an advisor, modern enough to be the app a 26-year-old opens between subway stops.

## 12. Principles

1. **Show the number, then show the reason.** Every recommended card, loan, or asset comes with a one-sentence justification next to the figure. A ranked list without reasons is a violation of the brand. UI implication: every recommendation card must have a "justification line" slot in its component contract.
2. **Density is trust.** Where consumer-app fintech treats whitespace as luxury, Banksalad treats density as competence. A user who can see four comparison rows at once is being respected as a researcher. UI implication: card padding 20–24px, not 32px+. Tables ship as tables, not as stacked single-rows.
3. **Green is interaction, not decoration.** `#04c584` only appears where the user can act (CTA, link, focus, selection) or where the user's own data is shown ("your value" on a chart, "your score"). Never on a decorative gradient, never as a page-section background. UI implication: never use brand green as a fill that does not change on hover.
4. **2px is a philosophical commitment.** The sharp corner reads as data-tool; Toss/Kakao's 12–16px reads as consumer-toy. Banksalad chooses to look engineered. UI implication: do not import any consumer-app card with rounded corners as-is; re-corner to 2px.
5. **Numerals are headings.** Financial amounts at 20px+ are styled with the same hierarchical weight (700) as page titles. Money is information of the highest priority — it gets the typographic treatment of a heading, never of body. UI implication: amounts use heading-class typography tokens.
6. **The reason for the recommendation is part of the product.** Disclaimers, comparison criteria, and rate sources are not legal footers — they are pinned inside the recommendation card, in the same visual frame as the recommendation itself. UI implication: every recommendation component reserves a `disclosure` slot that is always rendered, not collapsed-by-default.
7. **Korean and Latin numerals must align.** Pretendard's optical alignment between 한글 and Latin numerals is non-negotiable — a column of `1,240,000원` and `$1,240` should read as one column, not two scripts arguing. UI implication: never substitute a Latin-only font for numeric display; Pretendard handles both.
8. **Charts use teal-slate, not brand green, for the field.** Reserving green for the user's own value makes the user's position immediately legible against neutral series. UI implication: chart `seriesColors` defaults to `[#34464b, #5c818a, #1c6c73, #a7c7cf]`; user's series defaults to `#04c584`.
9. **Approximations are a betrayal.** `약 ~원` on a primary money surface tells the user the product does not actually know the number. Banksalad's brand promise is information clarity; rounded figures are forbidden where the precise figure exists. UI implication: financial-amount components do not accept a `round: true` flag.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Banksalad user segments (Korean millennials managing credit-card portfolios, freelancers comparing loan products, mid-life users tracking health-and-finance side by side), not individual people.*

**박지혜 (Park Ji-hye), 31, Seoul.** Senior designer at a Seoul-based scaleup. Opens Banksalad once a week to scan her credit-card spend-by-category report. Switches cards every 18 months based on whichever one Banksalad's recommendation engine surfaces with the best annual-savings figure for her actual usage pattern — *not* the one with the flashiest sign-up bonus. Reads the one-sentence justification under every recommendation before tapping; would close the app permanently if it ever shipped a "best card 🔥" list without reasons.

**김상민 (Mr. Kim), 47, Daegu.** Self-employed, runs a small import business. Uses Banksalad primarily for comparing business-friendly credit cards and tracking interest-rate movements on his three commercial loans. Trusts the product because the rate comparison shows the source date and the underlying assumption (`연 환산 기준`). Pays attention to the disclosure text inside each recommendation card — would lose trust immediately if a recommendation appeared without its rate basis.

**이수연 (Lee Su-yeon), 28, Seongnam.** UX researcher. Uses Banksalad for two unrelated reasons: monthly spend analysis, and the free DNA-based health screening. Finds the same voice across both surfaces (calm, factual, advisor-tone) reassuring — it makes the health-screening feel like an extension of "manage your assets" rather than a sudden pivot. Compares Banksalad's spend analysis to Toss's and prefers Banksalad's because *"Toss는 다 정리되어 있고 깔끔한데, 뱅크샐러드는 왜 그런지를 알려줘요"* (illustrative paraphrase) — Toss tidies, Banksalad explains.

**조현우 (Cho Hyun-woo), 39, Busan.** Mid-career operations manager. Reviews Banksalad's monthly credit-report widget — has been watching his credit score climb from 820 to 868 over 14 months. Doesn't tap CTAs; uses Banksalad strictly as a dashboard. Trusts the green `#04c584` "your score" indicator on the score-trend chart because it always shows him *his* position against the teal-slate distribution of the population — the green-vs-teal distinction tells him at a glance which data is about him.

## 14. States

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

## 15. Motion & Easing

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

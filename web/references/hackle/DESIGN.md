---
id: hackle
name: Hackle
display_name_kr: 핵클
country: KR
category: developer-tools
homepage: "https://hackle.io"
primary_color: "#0065ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=hackle.io&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live hero CTA blue (#0065ff); secondary brand blue (#2962ff) drives the MUI-default action buttons and header CTA. Marketing chrome is built on Material UI (rgba-black text emphasis ladder, 4px button radius); custom 8px hero CTAs and 5px tool chips layer on top. Docs site is a separate Inter-based system keyed on docs-blue #0c408d."
  colors:
    primary: "#0065ff"
    primary-alt: "#2962ff"
    docs-blue: "#0c408d"
    accent-blue: "#9ebaf4"
    tint-blue: "#ebf4fd"
    navy-deep: "#0e0437"
    heading: "#000000"
    ink: "#151618"
    body: "#1c1d1e"
    muted: "#6a6e75"
    hairline: "#d6d9df"
    canvas: "#fafafa"
    surface: "#f7f7f7"
    surface-alt: "#f6f7f9"
    white: "#ffffff"
  typography:
    family: { display: "Montserrat", body: "Pretendard", docs: "Inter" }
    display-hero: { size: 46, weight: 700, lineHeight: 1.0, use: "Hero headline (Montserrat EN / Pretendard KO)" }
    section:      { size: 36, weight: 700, lineHeight: 1.2, use: "Section titles" }
    subsection:   { size: 26, weight: 600, lineHeight: 1.2, use: "Feature sub-heads" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Body / nav text, 24px line-height" }
    button-lg:    { size: 18, weight: 700, lineHeight: 1.0, use: "Hero CTA label" }
    button:       { size: 14, weight: 500, lineHeight: 1.0, use: "MUI action button / tool chip label" }
    docs:         { size: 14, weight: 400, lineHeight: 1.5, use: "Docs body / sidebar nav (Inter)" }
  spacing: { xs: 6, sm: 10, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 64 }
  rounded: { xs: 4, sm: 5, md: 8, lg: 12, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#0065ff", fg: "#ffffff", radius: "8px", padding: "12px 32px", height: "53px", font: "18px / 700", states: "hover #0065ff @ 90% opacity", use: "Hero primary CTA — 데모 둘러보기 / Explore Demo" }
    button-filled: { type: button, bg: "#2962ff", fg: "#ffffff", radius: "4px", padding: "6px 16px", height: "39px", font: "14px / 500", use: "MUI default action button — 문의하기 / 카드 등록하고 바로 사용하기" }
    button-outline: { type: button, bg: "#ffffff", fg: "#0065ff", border: "1px solid #0065ff", radius: "8px", padding: "12px 32px", height: "53px", font: "18px / 700", use: "Secondary CTA — 상담 신청하기 / Request a Demo" }
    chip-dark: { type: button, bg: "#000000", fg: "#ffffff", radius: "5px", padding: "0px 24px", height: "44px", font: "14px / 500", use: "Dark CTA chip — 간편발송 바로가기 / Go to Simple Send" }
    chip-tool: { type: button, bg: "#ffffff", fg: "#151618", radius: "5px", padding: "10px 20px", height: "44px", font: "14px / 500", use: "White tool chip — 가이드북 다운받기 / 템플릿으로 바로 만들기" }
    docs-accept: { type: button, bg: "#0c408d", fg: "#ffffff", border: "1px solid #0c408d", radius: "12px", padding: "6px 12px", height: "35px", font: "14px / 400", use: "Docs consent accept (수락)" }
    search-input: { type: input, bg: "#ffffff", fg: "#1c1d1e", border: "1px solid #d6d9df", radius: "8px", padding: "8px", height: "40px", font: "16px", use: "Docs search field — 찾으시는 기능이나 키워드를 검색해보세요" }
    nav-link: { type: tab, fg: "#000000", font: "16px / 400", active: "text #0065ff", use: "Top marketing nav item — 서비스 소개 / 가이드 / 가격 안내" }
    docs-nav: { type: tab, fg: "#6a6e75", font: "14px / 400", active: "text #0c408d weight 600", use: "Docs sidebar nav item (Inter)" }
    card-surface: { type: card, bg: "#f6f7f9", fg: "#1c1d1e", radius: "8px", use: "Docs surface block / reject-button surface" }
    callout-blue: { type: card, bg: "#ebf4fd", fg: "#0c408d", radius: "8px", use: "Highlighted info callout / tinted block" }
    badge-blue: { type: badge, bg: "#0065ff", fg: "#ffffff", radius: "4px", padding: "6px 16px", font: "14px / 500", use: "Inline emphasis / status pill" }
  components_harvested: true
---

# Design System Inspiration of Hackle

## 1. Visual Theme & Atmosphere

Hackle (핵클) is a Korean developer-and-growth platform — an "올인원 AI 그로스 플랫폼" (all-in-one AI growth platform) bundling A/B testing, feature flags, CRM marketing, and product analytics into one dashboard. Its marketing surface reads like a confident, clean SaaS console rather than a flashy consumer site: an off-white canvas (`#fafafa`) carrying near-black text, generous whitespace, and a single saturated blue that does almost all the persuading. The personality is engineered-but-friendly — the page wants developers and growth teams to feel that "웹, 앱, 서버 상관없이 5분이면 사용 가능" (it works on web, app, and server in five minutes).

The system is unmistakably built on **Material UI**. Body text uses Material's emphasis ladder — `rgba(0,0,0,0.87)` for primary, `rgba(0,0,0,0.6)` for secondary, `rgba(0,0,0,0.3)` for disabled — and the default action buttons inherit MUI geometry (4px radius, 6px 16px padding) in the brand blue `#2962ff`. On top of that base, Hackle layers two custom button families: large 8px-radius hero CTAs in a brighter `#0065ff`, and flat 5px-radius "tool chips" (a black `#000000` chip for 간편발송, white chips for downloads/templates). Headlines render in **Montserrat** on the English site and **Pretendard** on the Korean site, both at weight 700 — 46px on the hero, 36px on section titles — while body and nav text sit at a quiet 16px / weight 400 with a 24px line-height.

Depth is almost entirely flat. Live inspection found `box-shadow: none` across the nav, hero, headings, buttons, and chips; separation comes from background tints — the `#fafafa` canvas against pure `#f7f7f7` and `#f6f7f9` surfaces — rather than elevation. Color is the only loud instrument: the brand blues `#0065ff` and `#2962ff` for action, a soft `#9ebaf4` and a pale `#ebf4fd` tint for supporting accents, and an occasional deep navy band (`#0e0437`) for a dark immersive section. Pure-black headings (`#000000`) and a near-black ink (`#151618`) anchor the type. The companion **docs site** (`docs.hackle.io`) is a deliberately separate, calmer system: **Inter** typeface, slate body text `#1c1d1e`, muted `#6a6e75` sidebar labels, hairline borders `#d6d9df`, and its own darker documentation blue `#0c408d` for active nav and primary doc actions.

**Key Characteristics:**
- Material UI foundation — `rgba(0,0,0,0.87)` text ladder + 4px-radius default buttons in `#2962ff`
- Custom hero CTA layer — bright `#0065ff`, 8px radius, 18px / weight 700 labels
- Flat 5px "tool chips" — black `#000000` and white chips for secondary actions
- Single-blue persuasion: `#0065ff` / `#2962ff` carry nearly all the action color
- Montserrat (EN) / Pretendard (KO) bold headlines at weight 700; quiet 16px body
- Shadowless system — separation via `#fafafa` / `#f7f7f7` / `#f6f7f9` tints, not elevation
- Separate Inter-based docs system keyed on documentation blue `#0c408d` with `#d6d9df` hairlines
- Supporting accents: soft `#9ebaf4`, pale `#ebf4fd` tint, deep navy `#0e0437` band; `#ffffff` cards

## 2. Color Palette & Roles

### Primary
- **Hackle Blue** (`#0065ff`): The primary brand and action color — the large hero CTA ("데모 둘러보기" / "Explore Demo") and the outline-CTA accent. Bright, saturated, confident.
- **Brand Blue Alt** (`#2962ff`): The Material-UI default action-button blue — header CTA, pricing buttons ("문의하기", "카드 등록하고 바로 사용하기"), and inline emphasis links. A slightly deeper indigo-blue companion to the primary.
- **Docs Blue** (`#0c408d`): The documentation system's darker blue — active sidebar nav, the "수락" consent accept button, and doc-link text on `docs.hackle.io`.

### Accent & Tint
- **Soft Blue** (`#9ebaf4`): A light periwinkle accent used in illustration/decoration and supporting surfaces.
- **Pale Blue Tint** (`#ebf4fd`): A very light blue wash for highlighted/info blocks and tinted callouts.
- **Deep Navy** (`#0e0437`): An occasional dark immersive section background — near-black indigo for contrast bands.

### Text & Ink
- **Heading Black** (`#000000`): Pure black for marketing headlines (hero H1, section H2/H3).
- **Ink** (`#151618`): Near-black ink for tool-chip labels and high-contrast UI text — a touch warmer than pure black.
- **Body Slate** (`#1c1d1e`): The docs-system body text color (Inter); a soft near-black for dense reading.
- **Muted Slate** (`#6a6e75`): Secondary/muted text — docs sidebar inactive items, captions, metadata. (Marketing body additionally uses Material's `rgba(0,0,0,0.87)` / `rgba(0,0,0,0.6)` emphasis levels.)

### Surface & Border
- **Canvas** (`#fafafa`): The default page background — a soft off-white.
- **Surface** (`#f7f7f7`): A pure neutral surface for alternating bands and cards on the marketing site.
- **Docs Surface** (`#f6f7f9`): The docs system's cool-grey surface block (e.g. the "거부" reject button background).
- **Hairline** (`#d6d9df`): Thin borders and dividers on the docs system (search field, copy/consent buttons).
- **Pure White** (`#ffffff`): Card surfaces, white tool chips, and text on blue/dark.

## 3. Typography Rules

### Font Family
- **Display (EN)**: `Montserrat` (with `Montserrat Fallback`) — marketing headlines on the English site at weight 700.
- **Body / Display (KO)**: `Pretendard` (with `Pretendard Fallback`) — the Korean site's headline and UI font; body defaults fall back through `ui-sans-serif, system-ui`.
- **Docs**: `Inter` (with `Inter Fallback`) — the entire `docs.hackle.io` system, body and nav.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Montserrat / Pretendard | 46px (2.88rem) | 700 | ~1.0 | Hero H1 ("AI와 데이터로 이끄는 성장") |
| Section Heading | Montserrat / Pretendard | 36px (2.25rem) | 700 | ~1.2 | Section H2 titles |
| Sub-section | Pretendard | 26px (1.63rem) | 600 | ~1.2 | Feature sub-heads ("웹, 앱, 서버 상관없이 5분이면 사용 가능") |
| Body / Nav | Pretendard / system | 16px (1.00rem) | 400 | 24px (1.5) | Standard reading + top-nav text |
| Hero CTA | Montserrat / Pretendard | 18px (1.13rem) | 700 | ~1.0 | Large primary CTA label |
| Button / Chip | Pretendard | 14px (0.88rem) | 500 | ~1.0 | MUI action buttons + tool chips |
| Docs Body / Nav | Inter | 14px (0.88rem) | 400 | 1.5 | Docs paragraphs + sidebar items |

### Principles
- **Bold display, quiet body**: Headlines run at weight 700; body and nav stay at weight 400. The weight jump is the primary hierarchy signal — there is little use of mid-weights on the marketing surface.
- **Two display fonts, locale-split**: Montserrat owns the English marketing voice; Pretendard owns the Korean voice. They never appear together on one page — locale decides.
- **Inter for documentation**: The docs system deliberately switches to Inter at 14px / 400 with a 1.5 line-height — calmer and denser than the marketing type, signalling "reference material, not pitch."
- **Material body metrics**: The marketing body inherits MUI defaults (16px, 24px line-height, `rgba(0,0,0,0.87)`), giving the site a familiar console-grade legibility.

## 4. Component Stylings

### Buttons

**Hero Primary CTA**
- Background: `#0065ff`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 32px
- Height: 53px
- Font: 18px / 700
- Hover: same blue dimmed to ~90% opacity
- Use: The dominant page action ("데모 둘러보기" / "Explore Demo")

**MUI Filled Action**
- Background: `#2962ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 6px 16px
- Height: 39px
- Font: 14px / 500
- Use: Material-default action buttons ("문의하기", "카드 등록하고 바로 사용하기", header "데모 둘러보기")

**Outline CTA**
- Background: `#ffffff`
- Text: `#0065ff`
- Border: 1px solid `#0065ff`
- Radius: 8px
- Padding: 12px 32px
- Height: 53px
- Font: 18px / 700
- Use: Secondary hero action ("상담 신청하기" / "Request a Demo")

**Dark Tool Chip**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 5px
- Padding: 0px 24px
- Height: 44px
- Font: 14px / 500
- Use: Black entry chip ("간편발송 바로가기" / "Go to Simple Send")

**White Tool Chip**
- Background: `#ffffff`
- Text: `#151618`
- Radius: 5px
- Padding: 10px 20px
- Height: 44px
- Font: 14px / 500
- Use: Flat secondary chips ("가이드북 다운받기", "템플릿으로 바로 만들기", "View Guides")

**Docs Consent Accept**
- Background: `#0c408d`
- Text: `#ffffff`
- Border: 1px solid `#0c408d`
- Radius: 12px
- Padding: 6px 12px
- Height: 35px
- Font: 14px / 400
- Use: Docs cookie/consent accept ("수락"); the reject ("거부") variant uses `#f6f7f9` background with `#6a6e75` text and a `#d6d9df` border

### Inputs

**Docs Search Field**
- Background: `#ffffff`
- Text: `#1c1d1e`
- Border: 1px solid `#d6d9df`
- Radius: 8px
- Padding: 8px
- Height: 40px
- Font: 16px
- Use: Docs search ("찾으시는 기능이나 키워드를 검색해보세요", placeholder "검색…")

### Cards & Containers

**Docs Surface Block**
- Background: `#f6f7f9`
- Text: `#1c1d1e`
- Radius: 8px
- Use: Cool-grey surface block on the docs system (e.g. inactive/reject surfaces)

**Blue Info Callout**
- Background: `#ebf4fd`
- Text: `#0c408d`
- Radius: 8px
- Use: Highlighted/info block — pale-blue tinted callout

**Marketing Feature Card**
- Background: `#ffffff`
- Radius: 8px
- Use: White feature card on the `#fafafa` canvas — flat, shadowless, separated by surface tint

### Badges

**Blue Emphasis Pill**
- Background: `#0065ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 6px 16px
- Font: 14px / 500
- Use: Inline emphasis / status pill in the brand blue

### Navigation
- Background: `#ffffff`
- Text: `#000000`
- Font: 16px / 400
- Active: blue `#0065ff` text on the active item
- Use: Top marketing nav ("서비스 소개", "가이드", "가격 안내", "블로그", "로그인"); docs sidebar nav uses Inter 14px with `#6a6e75` inactive labels and `#0c408d` weight-600 active items

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces)
**Tier 1 sources:** https://hackle.io/ko/, https://docs.hackle.io/, https://github.com/hackle-io
**Tier 2 sources:** getdesign.md/hackle — directory shell only, no Hackle token data; styles.refero.design — not listed (KR brand)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4-8px
- Scale: 6px, 10px, 12px, 16px, 20px, 24px, 32px, 64px
- Notable: MUI action buttons use the Material 6px/16px rhythm; hero CTAs jump to a generous 12px/32px; section bands separate at ~64px

### Grid & Container
- Centered single-column hero with the 46px headline as the anchor, primary + outline CTA pair beneath
- Logo wall ("앞서가는 기업들은 이미 핵클의 고객사입니다.") and feature bands alternate across full-width sections
- Team/dashboard feature section ("팀 별로 필요한 모든 것을 하나의 대시보드에서") groups product modules
- Cards use 8px radius and sit on the `#fafafa` canvas separated by `#f7f7f7` surface tints

### Whitespace Philosophy
- **Console-grade calm**: generous vertical rhythm between sections; the page never feels crowded despite being feature-dense.
- **Tint, don't elevate**: bands separate by background color (`#fafafa` vs `#f7f7f7` vs `#f6f7f9`), not by shadow stacks.
- **One loud color**: blue is rationed to actions so the next step is always obvious.

### Border Radius Scale
- XS (4px): MUI default action buttons, emphasis pills
- Small (5px): flat tool chips
- Medium (8px): hero CTAs, cards, search field — the workhorse
- Large (12px): docs consent buttons, docs language selector
- Full (9999px): rare full-round elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, headings, most surfaces |
| Tint (Level 1) | `#f7f7f7` / `#f6f7f9` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #d6d9df` border | Docs search field, copy/consent buttons, dividers |
| Color (Level 3) | Brand blue `#0065ff` / dark `#000000` chip | Emphasis through hue, not shadow |

**Shadow Philosophy**: Hackle is effectively a shadowless system on its public surfaces. Live inspection returned `box-shadow: none` across the nav, hero, headings, buttons, and tool chips. Grouping and hierarchy come from flat background tints (`#fafafa` canvas, `#f7f7f7` / `#f6f7f9` surfaces) and thin `#d6d9df` hairlines on the docs system. When the page needs to elevate attention it reaches for color — the bright blue `#0065ff`, the dark `#000000` chip, or a deep navy `#0e0437` band — never a drop shadow. This keeps the SaaS console feel clean and fast.

## 7. Do's and Don'ts

### Do
- Reserve the brand blue (`#0065ff`) for the primary action so the next step is unambiguous
- Use the Material-default `#2962ff` filled button (4px radius, 6px 16px) for standard in-page actions
- Set marketing headlines in Montserrat (EN) / Pretendard (KO) at weight 700
- Keep body and nav at 16px / weight 400 with a 24px line-height
- Separate sections with flat tints (`#fafafa`, `#f7f7f7`, `#f6f7f9`), not shadows
- Use the dark `#000000` chip and white `#151618`-text chips for secondary tool entries
- Switch to Inter + docs-blue `#0c408d` + `#d6d9df` hairlines inside the documentation system
- Use pure black (`#000000`) for marketing headlines and near-black `#151618` for chip ink

### Don't
- Spread blue across many elements — it dilutes the single-action signal
- Add drop shadows for elevation — Hackle separates with tint and hairline
- Mix Montserrat and Pretendard on the same page — locale decides the display font
- Use the marketing brand blues inside the docs system — docs uses its own `#0c408d`
- Set headlines in a light weight — display is always weight 700
- Use large pill radii on the hero CTA — it stays at a controlled 8px
- Introduce a second saturated accent hue — blue is the only loud color

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, CTA pair stacks |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Hero CTAs at 53px height with 12px/32px padding — large, unmistakable targets
- MUI action buttons at ~39px height; tool chips at 44px height
- Nav items spaced within a tall (~72px) header row

### Collapsing Strategy
- Hero: 46px headline scales down on mobile, weight 700 maintained
- CTA pair (primary + outline) stacks vertically on narrow viewports
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections keep full-width treatment
- Docs: sidebar nav collapses to a drawer; content column stays Inter 14px

### Image Behavior
- Product/dashboard screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 8px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: Hackle Blue (`#0065ff`)
- Standard MUI action: Brand Blue Alt (`#2962ff`)
- Docs accent / link: Docs Blue (`#0c408d`)
- Canvas: Off-white (`#fafafa`)
- Surfaces: `#f7f7f7` (marketing) / `#f6f7f9` (docs)
- Headings: Black (`#000000`); chip ink: `#151618`; docs body: `#1c1d1e`
- Muted text: `#6a6e75`
- Hairline: `#d6d9df`
- Accent / tint: Soft Blue (`#9ebaf4`), Pale Blue (`#ebf4fd`)
- Dark band: Deep Navy (`#0e0437`); white surfaces: `#ffffff`

### Example Component Prompts
- "Create a hero on an off-white #fafafa canvas. Headline at 46px Pretendard weight 700, color #000000. Below it a primary CTA: #0065ff background, white text, 8px radius, 12px 32px padding, 18px weight 700; plus an outline CTA: white background, #0065ff text and 1px #0065ff border, 8px radius."
- "Design an in-page action button the Material way: #2962ff background, white text, 4px radius, 6px 16px padding, 14px weight 500."
- "Build a tool-chip row: a black #000000 chip with white text and a white chip with #151618 text, both 5px radius, ~44px tall, 14px weight 500."
- "Style a docs page in Inter: body #1c1d1e at 14px / 1.5, muted sidebar items #6a6e75 with the active item in #0c408d weight 600, a search field with 1px #d6d9df border and 8px radius, and a pale-blue #ebf4fd info callout with #0c408d text."

### Iteration Guide
1. Blue (`#0065ff`) is the single action color — don't spread it
2. Standard buttons follow MUI: `#2962ff`, 4px radius, 6px 16px padding
3. Headlines are weight 700 (Montserrat EN / Pretendard KO); body is 16px / 400
4. No shadows — separate with `#fafafa` / `#f7f7f7` / `#f6f7f9` tints and `#d6d9df` hairlines
5. The docs system is its own world: Inter + `#0c408d` + hairlines
6. Radius ladder: 4px MUI buttons, 5px chips, 8px hero/cards, 12px docs buttons
7. Reach for color (blue, black chip, navy band) — not elevation — to draw attention

---

## 10. Voice & Tone

Hackle's voice is **practical, data-confident, and developer-respecting** — it speaks to growth teams and engineers who want measurable outcomes, not hype. The Korean positioning "올인원 AI 그로스 플랫폼" and the English "All-in-One Business Optimization Solution" set the register: comprehensive, outcome-framed, plainspoken. Copy leads with capability and speed ("웹, 앱, 서버 상관없이 5분이면 사용 가능") and with proof ("앞서가는 기업들은 이미 핵클의 고객사입니다." / "Leading brands are already using Hackle.").

| Context | Tone |
|---|---|
| Hero headlines | Outcome-framed, confident. "AI와 데이터로 이끄는 성장" / "AI-powered growth". |
| Feature sections | Capability-first, plain. "팀 별로 필요한 모든 것을 하나의 대시보드에서". |
| CTAs | Direct, low-pressure. "데모 둘러보기", "상담 신청하기", "Explore Demo". |
| Proof / social | Concrete, credibility-led. "앞서가는 기업들은 이미 핵클의 고객사입니다." |
| Docs | Calm, instructional, step-numbered ("Step 1. 이탈 사용자 찾아보기"). Respects the reader as a builder. |

**Voice samples (verbatim from live surfaces):**
- "AI와 데이터로 이끄는 성장 올인원 AI 그로스 플랫폼 핵클" — KO hero headline. *(verified live 2026-06-26)*
- "앞서가는 기업들은 이미 핵클의 고객사입니다." — KO social-proof section. *(verified live 2026-06-26)*
- "웹, 앱, 서버 상관없이 5분이면 사용 가능" — KO speed claim. *(verified live 2026-06-26)*
- "Hackle | All-in-One Business Optimization Solution" — EN page title. *(verified live 2026-06-26)*

**Forbidden register**: fear-based urgency, undefined buzzwords with no measurable claim, exclamation-heavy hype, and treating developers as non-technical buyers (the docs voice is peer-to-peer, never condescending).

## 11. Brand Narrative

Hackle (핵클) is a Korean (Seoul-based) developer-and-growth platform positioning itself as an "올인원 AI 그로스 플랫폼" — an all-in-one growth toolkit that unifies A/B testing, feature flags, CRM marketing (간편발송 / "Simple Send"), and product/data analysis on a single dashboard. The founding premise visible across its surfaces is consolidation: teams historically stitched experimentation, feature management, messaging, and analytics together from separate vendors; Hackle's pitch is that a growth team should get "팀 별로 필요한 모든 것을 하나의 대시보드에서" (everything each team needs in one dashboard).

The product is explicitly developer-first. It ships official SDKs through a public GitHub organization (`github.com/hackle-io`) and maintains a dedicated documentation site (`docs.hackle.io`) with step-numbered guides and a "개발자 문서" (developer docs) track. The headline promise — "웹, 앱, 서버 상관없이 5분이면 사용 가능" (usable in five minutes regardless of web, app, or server) — frames integration speed as the entry point, the same developer-onboarding logic that defines modern experimentation tooling.

What the design refuses, visible in its restraint: the heavy, shadow-stacked chrome of legacy enterprise software, and the multi-color dashboards that overload growth tools. What it embraces: a flat, fast, single-blue console aesthetic; Material-grade familiarity for the marketing chrome; and a separate, calmer Inter-based documentation system that reads like reference material a builder can trust.

## 12. Principles

1. **One platform, one dashboard.** Hackle's whole pitch is consolidation. *UI implication:* unify modules visually; avoid per-feature visual dialects on the marketing surface — the blue and the type system stay consistent across A/B, flags, CRM, and analytics.
2. **One action, one color.** Blue (`#0065ff` / `#2962ff`) means "do this." *UI implication:* reserve saturated blue for actions so the next step is never ambiguous.
3. **Developer-first, five-minute onboarding.** *UI implication:* lead with integration speed; keep docs peer-level, step-numbered, and code-forward.
4. **Flat and fast.** Console clarity over decorative depth. *UI implication:* no shadows; separate with tint and hairline; keep the page quick to scan.
5. **Familiar base, custom highlights.** Material UI gives a trusted foundation; custom hero CTAs and chips add brand character. *UI implication:* respect MUI defaults for standard controls, and layer brand geometry only where it earns attention.
6. **Calm docs, bold marketing.** *UI implication:* the documentation system gets its own quiet Inter + `#0c408d` identity, distinct from the louder marketing blue.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Hackle user segments (Korean growth teams, product managers, and engineers adopting experimentation tooling), not individual people.*

**박지훈, 32, 서울.** A product engineer integrating Hackle's SDK into a mobile app. Reads `docs.hackle.io` like reference material — values the step-numbered guides and the five-minute setup promise. Chose Hackle because the developer docs treated him as a peer and the SDK was on a public GitHub org.

**이서연, 29, 경기.** A growth marketer running A/B tests and CRM 간편발송 campaigns. Lives in the dashboard and values that experimentation, messaging, and analytics share one surface instead of three tools. Trusts the brand partly because "앞서가는 기업들" already use it.

**최민수, 38, 서울.** A data-minded PM evaluating an all-in-one growth platform to replace a patchwork stack. Cares that the analysis, feature flags, and experiments reconcile to the same numbers. Reassured by the calm, console-grade UI rather than a hype-heavy sales site.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no experiments / no data yet)** | `#fafafa` canvas. Single near-black line explaining nothing's been created, with one `#0065ff` CTA to start. No clutter. |
| **Empty (search, no results)** | Muted `#6a6e75` single line on the docs system; the search field (`#d6d9df` border, 8px radius) stays focused for a retry. |
| **Loading (dashboard / results)** | Skeleton blocks on `#f7f7f7` / `#f6f7f9` tinted surfaces at final dimensions, 8px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Error (action failed)** | Inline message in near-black with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input; the `#d6d9df` border signals the field; describes what's valid, not just "필수". |
| **Success (saved / submitted)** | Brief inline confirmation in a calm tone; next-step detail linked immediately. No celebratory emoji. |
| **Consent (docs cookie banner)** | Accept ("수락") uses `#0c408d` filled; reject ("거부") uses `#f6f7f9` surface with `#6a6e75` text — both 12px radius. |
| **Disabled** | Material emphasis: text drops to `rgba(0,0,0,0.3)`; blue actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button/chip press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained, matching the flat, fast console aesthetic. The primary CTA responds to hover with a subtle opacity dim (the live hero CTA shifts to ~90% opacity on hover) rather than a shadow or scale leap. Buttons and chips press with a quiet opacity/scale shift; content reveals fade in from below at `motion-standard / ease-enter`. No bounce or spring — a growth/analytics platform signals steadiness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on three brand-owned surfaces:
- https://hackle.io/ko/ and https://hackle.io/en/ (marketing site) — Material UI base
  (rgba(0,0,0,0.87) text ladder, 4px-radius #2962ff default buttons), custom hero CTAs
  (#0065ff, 8px radius, 18px/700), flat 5px tool chips (#000000 dark, #ffffff white),
  Montserrat (EN) / Pretendard (KO) 700 headlines, box-shadow: none throughout.
- https://hackle.io/ko/pricing/ — pricing CTAs (#2962ff filled, 4px radius), FAQ rows.
- https://docs.hackle.io/ — separate Inter system: body #1c1d1e, muted #6a6e75,
  docs-blue #0c408d active nav + "수락" accept button, #d6d9df hairlines, search field.

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md raw samples).

Voice samples (§10) are verbatim from the live homepage (KO hero, social-proof section,
speed claim) and the EN page title.

Brand narrative (§11): Hackle (핵클) is a Korean all-in-one growth platform (A/B testing,
feature flags, CRM/간편발송, analytics) with public SDKs at github.com/hackle-io and docs at
docs.hackle.io. Positioning phrases are quoted from the live site; specific corporate/founding
details beyond the observable surfaces are general public knowledge, not quoted from a verified
Hackle statement in this turn. Founder names are intentionally omitted to avoid unverified claims.

Personas (§13) are fictional archetypes informed by publicly observable Hackle user segments
(Korean growth teams, PMs, engineers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one platform one dashboard", "calm docs, bold marketing") are
editorial readings connecting Hackle's observed design to its positioning, not directly sourced
Hackle statements.
-->

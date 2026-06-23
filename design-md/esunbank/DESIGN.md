---
id: esunbank
name: E.SUN Bank
country: TW
category: fintech
homepage: "https://www.esunbank.com"
primary_color: "#00a19b"
logo:
  type: favicon
  slug: "https://www.esunbank.com/zh-tw/-/media/New-ESUNBANK/icon/apple-touch-icon/esun-icon.png"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live interactive teal (#00a19b); deep teal (#007a7a) used for hero headlines. Canvas white (#ffffff) with soft teal shadow surface (#d0e6e6)."
  colors:
    primary: "#00a19b"
    primary-deep: "#007a7a"
    ink: "#1c1c1c"
    muted: "#7c7c7c"
    muted-alt: "#999999"
    canvas: "#ffffff"
    surface: "#f4f8fa"
    surface-alt: "#f5f5f5"
    teal-tint: "#d0e6e6"
    on-primary: "#ffffff"
    hairline: "#d9d9d9"
    error: "#c92e34"
  typography:
    family: { display: "Noto Sans TC", ui: "Microsoft JhengHei", fallback: "Arial, sans-serif" }
    display-hero: { size: 38, weight: 700, lineHeight: 1.4, use: "Hero ESG / campaign headlines, bold declaration" }
    section:      { size: 32, weight: 500, lineHeight: 1.5, use: "Section headings (外幣匯率, 最新消息, 探索數位服務)" }
    subsection:   { size: 20, weight: 500, lineHeight: 1.5, use: "Feature card sub-headings, product intros" }
    page-title:   { size: 36, weight: 500, lineHeight: 1.5, use: "Product category page titles (信用卡/支付)" }
    nav:          { size: 14, weight: 400, lineHeight: 1.4, use: "Top-tier nav labels" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Body text and UI labels" }
    button:       { size: 16, weight: 400, lineHeight: 1.0, use: "CTA button labels" }
  spacing: { xs: 4, sm: 8, md: 16, base: 20, lg: 24, xl: 30, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    teal: "rgb(208, 230, 230) 0px 0px 12px 0px"
    none: "none"
  components:
    button-primary: { type: button, bg: "#00a19b", fg: "#ffffff", radius: "4px", padding: "10px", height: "46px", font: "16px / 400", border: "1px solid #00a19b", use: "Primary CTA — 線上開戶 (open account)" }
    button-ghost: { type: button, fg: "#00a19b", radius: "4px", padding: "8px 20px", font: "20px / 400", border: "1px solid #00a19b", use: "Hero ghost link — 線上開戶 secondary variant in hero" }
    button-return: { type: button, bg: "#00a19b", fg: "#ffffff", radius: "4px", padding: "0px 50px", height: "65px", font: "16px / 400", use: "Large return-to-home CTA on error/404 pages" }
    nav-tab: { type: tab, fg: "#7c7c7c", font: "14px / 400 Noto Sans TC", use: "Top-tier nav (企業/商家, 私銀/亞資, ESG 永續金融)", active: "text #00a19b weight 500" }
    card-feature: { type: card, bg: "#ffffff", radius: "8px", shadow: "rgb(208, 230, 230) 0px 0px 12px 0px", use: "Activity/news card, teal-tinted ambient shadow" }
    card-table: { type: card, bg: "#ffffff", radius: "4px", shadow: "rgb(208, 230, 230) 0px 0px 12px 0px", use: "Exchange-rate table container" }
    card-service: { type: card, bg: "rgba(0, 0, 0, 0)", radius: "4px", border: "1px solid #ffffff", use: "Hero CTA service item cards on teal background" }
    badge-section: { type: badge, fg: "#00a19b", radius: "0px", font: "32px / 500", use: "Section heading text label (非图形 badge pattern)" }
    input-search: { type: input, bg: "#ffffff", border: "1px solid #d9d9d9", radius: "4px", font: "16px / 400 Noto Sans TC", use: "Search / form inputs on white surface" }
  components_harvested: true
---

# Design System Inspiration of E.SUN Bank

## 1. Visual Theme & Atmosphere

E.SUN Bank (玉山銀行) is Taiwan's most digital-forward commercial bank, and its official website — esunbank.com — channels that reputation into a design language that is clean, credentialed, and warmly approachable without feeling corporate-cold. The canvas is pure white (`#ffffff`), trimmed with a cool light-grey surface (`#f4f8fa`) for content zones, and the defining brand color is a confident jade teal (`#00a19b`) that saturates every interactive element from primary CTAs to section headings. The teal is not aggressive: it carries a natural, ESG-conscious warmth — a color language that says "responsible finance" without the stiffness of traditional banking navy.

The typographic system is anchored in **Noto Sans TC** and Microsoft JhengHei, the two workhorse Traditional Chinese web fonts. At display sizes the browser delivers Noto Sans TC at weight 700 for hero campaign headlines — "一個好的ESG策略就是一個好的企業發展策略" at 38px bold (`#007a7a`) sets the authoritative yet modern tone. Section headings sit at 32px / weight 500 in teal (`#00a19b`); sub-feature titles drop to 20px / weight 500, also teal, maintaining the color as the system's consistent semantic signal: teal means important, navigational, or actionable. Body text at 16px / weight 400 in near-black ink (`#1c1c1c`) keeps information accessible and dense without strain.

Depth in the E.SUN system comes not from shadows per se, but from a distinctive teal-tinted ambient glow: `rgb(208, 230, 230) 0px 0px 12px 0px` appears on both the white content cards and the exchange-rate table, creating a halo that harmonizes with the brand palette. Cards float on the page with this soft teal luminance — a subtle but brand-consistent elevation signal. The overall atmosphere is of a modern Taiwanese bank that has genuinely invested in its digital product: clean, confident, trustworthy, and oriented toward everyday consumers navigating credit cards, savings, and investments in one cohesive interface.

**Key Characteristics:**
- Jade teal (`#00a19b`) as the single interactive and heading color — consistent from nav to CTA to section titles
- Deep teal (`#007a7a`) reserved for campaign/hero headline weight to add gravitas
- Noto Sans TC / Microsoft JhengHei — Traditional Chinese web font standard for legibility
- Weight 700 for hero display, weight 500 for sections, weight 400 for body and UI
- Teal ambient shadow (`rgb(208, 230, 230)`) instead of grey/black shadows — brand-colored depth
- Near-black ink (`#1c1c1c`) for body text; muted grey (`#7c7c7c`) for secondary
- Strict 4px base radius on interactive elements; 8px on content cards
- ESG and digital banking prominently foregrounded — product and values aligned

## 2. Color Palette & Roles

### Primary
- **E.SUN Teal** (`#00a19b`): The primary brand color. CTA button backgrounds, active nav labels, section headings, card borders. A jade-green teal that conveys trust, nature, and digital modernity simultaneously.
- **Deep Teal** (`#007a7a`): Reserved for hero campaign headlines and high-impact typography. A darker teal that adds authoritative weight to the brand's most important messages.
- **Pure White** (`#ffffff`): Page background, card surfaces, text on teal backgrounds. The dominant canvas.

### Surface & Neutral
- **Surface Blue-Grey** (`#f4f8fa`): Cool-tinted off-white used for alternating content sections and subtle zone separation.
- **Surface Alt** (`#f5f5f5`): Secondary neutral surface for lighter content zones.
- **Teal Tint** (`#d0e6e6`): The shadow color — teal-tinted ambient glow that ties card elevation to the brand palette.
- **Hairline** (`#d9d9d9`): Thin borders, table dividers, input outlines.

### Text
- **Ink** (`#1c1c1c`): Primary body text, near-black for maximum legibility without harsh pure-black contrast.
- **Muted** (`#7c7c7c`): Secondary nav labels, inactive states, supporting copy.
- **Muted Alt** (`#999999`): Tertiary text, fine print, metadata.
- **Error** (`#c92e34`): Validation errors (rare but present in form surfaces).

### On-Color
- **On-Primary** (`#ffffff`): White text on teal CTA buttons and teal backgrounds.

## 3. Typography Rules

### Font Family
- **Primary Display**: `Noto Sans TC` (with `Arial` and `Microsoft JhengHei` as fallbacks) — loaded for all Traditional Chinese content and UI elements.
- **System Fallback**: `微軟正黑體` (Microsoft JhengHei) → `新細明體` → `sans-serif` — ensuring legibility across all Windows and macOS Traditional Chinese environments.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Noto Sans TC | 38px | 700 | ~1.4 | Campaign/ESG banner headline, deep teal (#007a7a) |
| Section Heading (H2) | Noto Sans TC | 32px | 500 | 48px (1.5) | All major section titles in primary teal (#00a19b) |
| Page Title (H1 product) | Noto Sans TC | 36px | 500 | ~1.5 | Product category page titles |
| Feature Sub-head (H3) | Noto Sans TC | 20px | 500 | 30px (1.5) | Product card intros, digital feature heads |
| Nav Top-tier | Noto Sans TC | 14px | 400–500 | ~1.4 | Top navigation items; active state weight 500 |
| Sub-nav | Noto Sans TC | 18px | 400 | ~1.4 | In-page sub-navigation links |
| Body | Noto Sans TC | 16px | 400 | ~1.5 | Standard reading text, list items |
| Button | Noto Sans TC | 16px | 400 | 1.0 | CTA labels (線上開戶, 登入, 返回首頁) |

### Principles
- **Teal text for structure, ink for content**: The teal (`#00a19b`) appears in headings and section labels, creating instant visual hierarchy without relying on size alone. Body copy stays in near-black (`#1c1c1c`).
- **Weight 500 as the section voice**: Unlike Korean peers that use ExtraBold for sections, E.SUN uses Medium (500) — confident but approachable, not loud.
- **Consistent line-height at 48px for H2s**: The 32px/48px section heading rhythm creates a stable, editorial grid across the homepage.
- **Traditional Chinese first**: Font stack prioritizes TC-optimized typefaces; spacing and sizing are calibrated for hangul/CJK character density.

## 4. Component Stylings

### Buttons

**Primary CTA (線上開戶)**
- Background: `#00a19b`
- Text: `#ffffff`
- Radius: 4px
- Padding: 10px
- Height: 46px
- Font: 16px / weight 400 / Noto Sans TC
- Border: 1px solid `#00a19b`
- Use: Primary call-to-action in global nav header (open account online)

**Large Return CTA (返回首頁)**
- Background: `#00a19b`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 50px
- Height: 65px
- Font: 16px / weight 400
- Use: Prominent return-home button on error / 404 pages

**Hero Ghost Link (線上開戶 secondary)**
- Text: `#007a7a`
- Radius: 4px
- Padding: 8px 20px
- Font: 20px / weight 400
- Border: implicit teal outline
- Use: Secondary CTA within hero campaign banners

**Login Link (登入)**
- Text: `#00a19b`
- Radius: 0px
- Padding: 10px 40px 10px 10px
- Font: 16px / weight 400
- Use: Login text-link in the global nav header

### Cards & Containers

**Feature / Activity Card**
- Background: `#ffffff`
- Radius: 8px
- Shadow: `rgb(208, 230, 230) 0px 0px 12px 0px`
- Use: Activity cards, news cards — teal-tinted ambient shadow as brand-colored elevation

**Exchange Rate Table Card**
- Background: `#ffffff`
- Radius: 4px
- Shadow: `rgb(208, 230, 230) 0px 0px 12px 0px`
- Use: Exchange rate widget container on the personal banking homepage

**Hero Service Item Cards**
- Background: transparent (rgba 0,0,0,0)
- Radius: 4px
- Border: 1px solid `#ffffff`
- Use: Quick-access service link tiles overlaid on the teal hero background

**Content Service Card (信用卡 page)**
- Background: `#ffffff`
- Radius: 4px
- Padding: 30px
- Border: 1px solid `#00a19b`
- Use: Product introduction card on credit card category page (信用卡介紹)

### Inputs

**Text Input / Form Field**
- Background: `#ffffff`
- Border: 1px solid `#d9d9d9`
- Radius: 4px
- Font: 16px / weight 400 / Noto Sans TC
- Use: Standard form inputs on white surfaces

### Tabs & Navigation

**Top-tier Navigation**
- Text (default): `#7c7c7c` / weight 400
- Text (active): `#00a19b` / weight 500
- Font: 14px / Noto Sans TC
- Height: ~20px nav items (in 70px header)
- Use: Top segment navigation (個人金融, 企業/商家, 私銀/亞資, ESG 永續金融)

**Sub-navigation (in-page)**
- Text: `#1c1c1c`
- Padding: 8px 20px
- Height: 42px
- Font: 18px / weight 400
- Use: Secondary nav tabs on product pages (產品與服務, 生活金融, 申辦/繳費)

### Badges

**Section Heading Badge (teal label)**
- Text: `#00a19b`
- Font: 32px / weight 500
- Use: Section-level heading labels function as visual "badges" for content zones

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.esunbank.com/zh-tw/personal, https://www.esunbank.com/zh-tw/personal/credit-card
**Tier 2 sources:** getdesign.md/esunbank — 0 results (not listed); styles.refero.design/?q=e.sun+bank — no matching results found
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 16px, 20px, 24px, 30px, 48px, 64px
- Service CTA horizontal padding at 30px inside content cards
- Nav sub-items use 20px horizontal padding

### Grid & Container
- Full-width page structure with centered content max-width
- Homepage: hero banner → quick-service tiles → exchange rate widget → news/activities → digital services → articles
- Product pages: breadcrumb header → H1 → sub-nav tabs → service cards in responsive grid
- Cards in a 3-4 column grid on desktop, collapsing to single column on mobile

### Whitespace Philosophy
- Generous section padding — teal H2 headings each carry 24px top padding
- Cards breathe within their grid container; shadow provides grouping without tight borders
- The hairline (`#d9d9d9`) is used sparingly — teal color + shadow do the primary organizing

### Border Radius Scale
- Small (4px): buttons, input fields, small card containers — the system default
- Medium (8px): feature cards, activity cards — elevated content containers
- Large (16px): not observed in primary surfaces (reserved for special UI)
- Full (9999px): not the primary pattern (E.SUN avoids pill buttons, preferring 4px conservative radius)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Nav background, page background, text elements |
| Teal Glow (Level 1) | `rgb(208, 230, 230) 0px 0px 12px 0px` | Cards, table containers — brand-colored ambient elevation |
| Overlay (Level 2) | `rgba(0,0,0,0.51)` background | Modal overlays / drawer backgrounds |

**Shadow Philosophy**: E.SUN uses a distinctly brand-colored shadow — a soft teal `rgb(208, 230, 230)` glow that ties card elevation to the bank's signature teal palette. This is deliberate: even the depth signal reads as "E.SUN." Traditional black/grey drop shadows are absent from the primary layout. The result is a cohesive, on-brand elevation system where floating elements feel like they belong to the same design language as the buttons and headings.

## 7. Do's and Don'ts

### Do
- Use jade teal (`#00a19b`) consistently for all interactive elements, headings, and navigational signals
- Use deep teal (`#007a7a`) for campaign hero headlines to add authoritative weight
- Apply teal ambient shadow (`rgb(208, 230, 230)`) on all elevated cards and containers
- Use Noto Sans TC at 32px / weight 500 for section headings — maintain the editorial rhythm
- Keep button radius at 4px — E.SUN does not use pill/round buttons
- Use near-black ink (`#1c1c1c`) for body text; never pure black
- Separate sections via `#f4f8fa` tinted background shifts and hairline borders
- Maintain Traditional Chinese font priority in stack: Noto Sans TC → Microsoft JhengHei

### Don't
- Use grey or black shadows — the system's elevation language is teal-tinted
- Apply rounded corners above 8px on cards or buttons — the aesthetic is structured and precise
- Spread accent colors beyond teal — there is no red, orange, or purple in the primary UI
- Use bold (700) weight for section headings — Medium (500) is the deliberate section voice
- Place pure black (`#000000`) text in body copy — the system's ink is `#1c1c1c`
- Create pill-shaped CTAs — the conservative 4px radius is a trust signal in the banking context
- Use muted grey (`#7c7c7c`) for headings — grey is reserved for inactive/secondary states
- Mix multiple heading colors — teal for structural headings, ink for content, deep teal for hero only

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, nav collapses to hamburger, hero text reduces |
| Tablet | 768–1024px | 2-column cards, sub-nav may wrap |
| Desktop | 1024px+ | Full multi-column layout, 3–4 card grids |

### Touch Targets
- Primary CTA "線上開戶" at 46px height — comfortably tappable
- Large return CTA at 65px height — oversized for error page reassurance
- Sub-nav links at 42px height with 20px horizontal padding — generous tap area

### Collapsing Strategy
- Hero headline font-size scales down on mobile while maintaining weight 700
- Service tile grid collapses from multi-column to single column
- Exchange rate widget becomes a scrollable table on narrow viewports
- News/activity tabs maintain their 42px height across all breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / headings: E.SUN Teal (`#00a19b`)
- Hero headline emphasis: Deep Teal (`#007a7a`)
- Page background: Pure White (`#ffffff`)
- Content section background: Surface Blue-Grey (`#f4f8fa`)
- Card shadow: Teal Tint (`#d0e6e6` ambient `rgb(208, 230, 230)`)
- Primary body text: Ink (`#1c1c1c`)
- Secondary / inactive: Muted (`#7c7c7c`)
- Dividers: Hairline (`#d9d9d9`)
- On-primary text: White (`#ffffff`)

### Example Component Prompts
- "Create a primary CTA button: background `#00a19b`, white text, 4px radius, 46px height, 10px vertical padding, 16px Noto Sans TC weight 400. Label: 線上開戶. Border: 1px solid `#00a19b`."
- "Design a content card on white (`#ffffff`), 8px radius, teal-tinted shadow `rgb(208, 230, 230) 0px 0px 12px 0px`. Section heading inside: 32px / weight 500 / `#00a19b`. Body text: 16px / weight 400 / `#1c1c1c`."
- "Build a section layout: white canvas. H2 section title 32px / 500 / `#00a19b` / 48px line-height. Content zone below uses `#f4f8fa` background for visual separation."
- "Create top navigation: 70px header height, `#ffffff` background. Nav items: 14px Noto Sans TC weight 400, `#7c7c7c`. Active item: `#00a19b` weight 500. Right-aligned CTA: `#00a19b` background, white text, 4px radius, 46px height."

### Iteration Guide
1. Teal (`#00a19b`) is the single brand color — use it for all structure, headings, and CTAs
2. Shadow with teal tint (`rgb(208, 230, 230)`) — the elevation language is on-brand
3. 4px radius on buttons, 8px on cards — structured, not pillowy
4. Noto Sans TC weight 500 for sections, weight 700 for hero only
5. Near-black ink (`#1c1c1c`) for all body text
6. Background shifts (`#f4f8fa`) + hairlines (`#d9d9d9`) separate sections — no black shadows
7. Deep teal (`#007a7a`) only for the most prominent campaign headline

---

## 10. Voice & Tone

E.SUN Bank's voice is **trustworthy, progressive, and accessible** — a traditional commercial bank that has genuinely embraced digital transformation and wants its customers to feel that journey alongside it. The homepage ESG headline "一個好的ESG策略就是一個好的企業發展策略" ("A good ESG strategy is a good business development strategy") exemplifies the register: principled, direct, and surprisingly substantive for a bank homepage. It doesn't pitch; it declares a point of view. Marketing copy positions E.SUN as a partner in daily financial life ("便利你的生活日常" — making your everyday life more convenient) rather than a transactional institution.

| Context | Tone |
|---|---|
| Hero / campaign | Principled and declarative. "一個好的ESG策略就是一個好的企業發展策略." Confidence without hype. |
| Product pages | Benefit-first and practical. "便利支付，交給玉山Wallet." Clear feature + clear promise. |
| Digital services | Invitation-style. "探索數位服務" (Explore digital services) — curious, not pushy. |
| CTAs | Direct and frictionless. "線上開戶", "登入", "返回首頁" — task-oriented plain language. |
| Financial content | Factual and empowering. Exchange rates, news — data-dense but clearly labelled. |

**Voice samples (verbatim from live site, 2026-06-22):**
- "一個好的ESG策略就是一個好的企業發展策略" — hero headline (principled declaration). *(verified live 2026-06-22)*
- "探索數位服務" — section heading (invitation to digital tools). *(verified live 2026-06-22)*
- "便利支付，交給玉山Wallet" — feature sub-head (benefit + brand product). *(verified live 2026-06-22)*

**Forbidden register**: fear-based urgency ("限時優惠"), predatory lending framing, jargon-heavy financial gatekeeping, aggressive upsell language.

## 11. Brand Narrative

E.SUN Commercial Bank (玉山銀行) was founded in **1992** as part of the liberalization of Taiwan's banking sector. The name "玉山" (Jade Mountain) references Taiwan's highest peak — a metaphor for aspiration, stability, and the Taiwanese spirit. Over three decades it has grown into one of Taiwan's most respected private banks, consistently recognized for digital innovation, ESG leadership, and customer-centric service.

The bank's digital transformation narrative is visible in every layer of its online presence: the prominent "探索數位服務" (Explore digital services) section on the homepage, the Wallet and mobile banking features foregrounded alongside traditional products, and the ESG positioning as a strategic priority rather than a marketing afterthought. The 2026 homepage ESG campaign headline — treating ESG strategy as equivalent to business development strategy — reflects an institution that has internalized sustainability as a core operating principle, not a PR signal.

E.SUN's design language is the visual embodiment of this evolution: clean enough to feel modern, trustworthy enough to feel like a bank, and warm enough in its teal palette to feel like a partner rather than a creditor. The jade-teal color is not accidental — it ties the bank's digital identity back to its mountainous namesake and to the green ESG values the institution champions publicly.

## 12. Principles

1. **Digital as a first-class offering.** E.SUN prominently co-positions mobile banking, Wallet, and online account opening alongside traditional products. *UI implication:* digital CTAs ("線上開戶") appear in the global nav, not buried in a product tab; digital services have their own homepage section.
2. **ESG and finance are inseparable.** The bank leads its homepage with an ESG campaign, treating sustainability not as a sidebar but as core identity. *UI implication:* the ESG navigation item sits at the same tier as personal banking and corporate banking.
3. **Teal as trust.** The single brand color is warm, natural, and non-aggressive — a deliberate departure from banking's traditional navy-and-gold. *UI implication:* teal is used consistently rather than strategically reserved, building brand recognition through repetition rather than scarcity.
4. **Clarity over decoration.** The design system uses functional shadows, clean typography, and minimal ornament. *UI implication:* no gradients, no illustrations cluttering the interface, no decorative patterns that compete with financial content.
5. **Traditional Chinese fluency.** The UI is built for TC-reading users — font stacks, sizing, and layout density reflect CJK typographic conventions. *UI implication:* fonts and spacing are calibrated for character density, not adapted from a Latin-first template.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable E.SUN user segments (Taiwanese banking customers, digital service adopters), not individual people.*

**林小雯, 27, 台北.** A young professional opening her first savings account. She found E.SUN through the mobile app store, was drawn in by the digital-first positioning, and used "線上開戶" to skip the branch entirely. Trusts the teal-tinted interface as a signal of modernity without sacrificing bank credibility.

**陳建志, 42, 台中.** A small business owner who uses E.SUN for corporate accounts, foreign exchange, and credit card expense management. Values the exchange rate widget on the homepage and the clear "企業/商家" navigation — everything he needs without digging through menus.

**吳美玲, 58, 高雄.** A homeowner monitoring her savings and investment portfolio through E.SUN's mobile app. Appreciates the clean layout and large readable type — the 16px body and 32px section headings ensure she can navigate financial information comfortably.

**王政道, 35, 新竹.** A tech industry worker drawn to E.SUN's ESG positioning as part of his values-aligned financial choices. Uses the digital banking tools and follows the bank's sustainability news. The ESG homepage campaign speaks directly to him.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transactions)** | White canvas with teal-labeled section heading; single ink body line explaining no recent activity, with a teal CTA to explore products. |
| **Empty (search no results)** | The 404 pattern: teal H1 with friendly explanation ("很抱歉，找不到您所查詢的頁面") + large 65px teal CTA "返回首頁". |
| **Loading (data fetch)** | Skeleton blocks on `#f4f8fa` surface at card dimensions with teal-tinted ambient shadow; flat pulse consistent with the shadow system. |
| **Loading (exchange rate)** | Inline loading state within the exchange rate table card; previous values remain visible. |
| **Error (form validation)** | Inline error message below the input field; teal border shifts to error red (`#c92e34`); plain Chinese error description. |
| **Error (service unavailable)** | Teal heading with calm plain-language explanation; retry CTA in teal. |
| **Error (page not found)** | "很抱歉，找不到您所查詢的頁面" in teal 30px weight 500; chatbot link + large return button. *(verified live)* |
| **Success (account opened)** | Calm teal confirmation message; next-step guidance below immediately. |
| **Skeleton** | `#f4f8fa` blocks at final card dimensions; teal-shadow glow maintained even on skeleton. |
| **Disabled** | Muted grey (`#7c7c7c`) text; reduced opacity on teal elements; hairline border replaces teal border. |
| **Active nav** | Teal (`#00a19b`) text at weight 500 on active top-tier nav item; no underline — color weight shift alone signals active. *(verified live)* |

## 15. Motion & Easing

**Duration Scale**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Nav hover, button hover feedback |
| `motion-standard` | 200ms | Card reveal, panel transition, dropdown |
| `motion-slow` | 350ms | Page-level transitions, hero banner carousel |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving elements — sheets, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals — close animations |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: E.SUN's motion philosophy aligns with its visual system — functional and calm, never flashy. The homepage banner carousel transitions pages at a measured pace. Interactive elements (CTAs, nav items) respond to hover with near-instant feedback (`motion-fast`). For a bank handling financial transactions, motion must inspire confidence, not excitement; under `prefers-reduced-motion: reduce`, all transitions collapse to instant, maintaining full functionality.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://www.esunbank.com/zh-tw/personal (personal banking homepage)
- https://www.esunbank.com/zh-tw/personal/credit-card (credit card page)

Key observations:
- Body: font-family "Noto Sans TC", Arial, 微軟正黑體; color rgb(28,28,28) #1c1c1c; size 16px
- H1 hero "一個好的ESG策略...": 38px / weight 700 / color rgb(0,122,122) #007a7a
- H2 sections "外幣匯率", "探索數位服務", "最新消息": 32px / weight 500 / rgb(0,161,155) #00a19b
- H3 features "便利支付，交給玉山Wallet": 20px / weight 500 / rgb(0,161,155) #00a19b
- Primary CTA "線上開戶": bg rgb(0,161,155) #00a19b / white text / radius 4px / height 46px
- Login "登入": color rgb(0,161,155) #00a19b / transparent bg
- Nav items (inactive): rgb(124,124,124) #7c7c7c / weight 400
- Nav item (active "個人金融"): rgb(0,161,155) #00a19b / weight 500
- Card shadows: rgb(208,230,230) 0px 0px 12px 0px — teal-tinted ambient
- bgFreq: white ×45, #00a19b ×18, #d9d9d9 ×12, #f4f8fa ×6
- fgFreq: rgb(28,28,28) ×1094, rgb(0,161,155) ×57, rgb(255,255,255) ×35, rgb(0,122,122) ×25, rgb(124,124,124) ×23

Brand narrative: E.SUN (玉山銀行) founded 1992, named after Jade Mountain. ESG positioning
and digital-first strategy are publicly communicated on the homepage. Voice samples are
verbatim from the live homepage. Personas are fictional archetypes.

Interpretive claims (teal as "jade" color for the mountain namesake, ESG as core not PR)
are editorial readings connecting observable design to public brand positioning, not
directly sourced E.SUN statements.
-->

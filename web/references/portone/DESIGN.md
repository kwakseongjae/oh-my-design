---
id: portone
name: PortOne
display_name_kr: 포트원
country: KR
category: fintech
homepage: "https://www.portone.io"
primary_color: "#fc6b2d"
logo:
  type: github
  slug: portone-io
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live CTA orange gradient (#fc6b2d); secondary CTA = charcoal gradient (#363a44). Marketing surface uses Tailwind gray ink (#111827); the developer docs surface (developers.portone.io) shifts to slate ink (#0f172a / #334155). Mostly shadowless — flat tinted surfaces + hairlines."
  colors:
    primary: "#fc6b2d"
    secondary: "#363a44"
    ink: "#111827"
    ink-slate: "#0f172a"
    body: "#6b7280"
    body-slate: "#334155"
    gray-strong: "#374151"
    muted: "#94a3b8"
    border: "#d1d5db"
    surface: "#f9fafb"
    surface-alt: "#f3f4f6"
    canvas: "#ffffff"
    accent-blue: "#e6f1ff"
    error: "#df4c4c"
    error-bg: "#fef2f2"
    success-bg: "#dcfce7"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable" }
    hero:        { size: 56, weight: 400, lineHeight: 1.2, use: "Hero H1, light Pretendard" }
    display:     { size: 48, weight: 1000, lineHeight: 1.25, use: "Section H2, ExtraBlack" }
    section:     { size: 36, weight: 400, lineHeight: 1.35, use: "Sub-section H3" }
    eyebrow:     { size: 24, weight: 1000, use: "Orange eyebrow label above sections" }
    body:        { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
    nav:         { size: 14, weight: 500, use: "Nav links / docs sidebar" }
    button:      { size: 15, weight: 700, use: "CTA button label" }
    caption:     { size: 12, weight: 400, use: "Small labels, metadata" }
  spacing: { xs: 4, sm: 8, base: 16, md: 20, lg: 24, xl: 48, section: 64 }
  rounded: { xs: 6, sm: 8, md: 16, lg: 30, full: 999 }
  shadow:
    none: "none"
    glow: "rgba(180,156,197,0.1) 0px 0px 16px 4px"
  components:
    button-primary: { type: button, bg: "#fc6b2d", fg: "#ffffff", radius: "999px", padding: "12px 20px", font: "15px / 700", use: "Primary CTA 도입문의 — orange gradient pill" }
    button-secondary: { type: button, bg: "#363a44", fg: "#ffffff", radius: "999px", padding: "12px 20px", font: "12px / 400", use: "Secondary CTA 시작하기 — charcoal gradient pill" }
    nav-link: { type: tab, fg: "#111827", radius: "64px", padding: "16px", font: "14px / 500", active: "orange #fc6b2d text on active", use: "Top navigation item pill" }
    card-surface: { type: card, bg: "#f9fafb", fg: "#111827", radius: "30px", padding: "20px", use: "Tinted feature card on gray surface" }
    card-white: { type: card, bg: "#ffffff", fg: "#111827", radius: "20px", padding: "24px", use: "White feature card, hairline-separated" }
    input-search: { type: input, bg: "#ffffff", fg: "#334155", border: "1px solid #d1d5db", radius: "6px", padding: "6px 12px", use: "Docs search field" }
    badge-success: { type: badge, bg: "#dcfce7", fg: "#374151", radius: "8px", font: "12px / 500", use: "Success status pill" }
    badge-error: { type: badge, bg: "#fef2f2", fg: "#df4c4c", radius: "8px", font: "12px / 500", use: "Error / alert pill" }
  components_harvested: true
---

# Design System Inspiration of PortOne

## 1. Visual Theme & Atmosphere

PortOne (포트원) is Korea's integrated payments-and-settlement fintech — the rebrand of the developer-beloved 아임포트 (Iamport) — and its homepage reads like calm, confident financial infrastructure rather than a hard-sell SaaS pitch. The canvas is pure white (`#ffffff`), layered with a cool near-white surface (`#f9fafb`) and a second flatter gray (`#f3f4f6`) that segment content into airy, breathable zones. Text sits in a deep Tailwind ink (`#111827`) — never pure black for headings — giving the page a premium, trustworthy weight. The one saturated brand accent is a warm signal orange (`#fc6b2d`), reserved almost exclusively for the primary call-to-action and the small eyebrow labels above each section, so the eye is trained to treat that single color as "the action."

The typographic personality is unmistakably Korean-modern: everything runs in **Pretendard Variable**, the de-facto Korean product font, but PortOne stretches the weight axis to its extremes. The hero H1 ("AI로 결제와 재무 운영을 자유롭게") sits at a light 56px / weight 400, while the section H2 ("결제 연동부터 글로벌 재무 운영까지 하나의 AI 재무 인프라로") jumps to a dramatic 48px / weight 1000 (ExtraBlack). This light-versus-ultra-heavy contrast is the core tension of the system: whisper-light where it sets the scene, ultra-bold where it persuades. Body and UI text drop to a quiet 16px / weight 400, with nav and docs labels at 14px / weight 500.

What distinguishes PortOne from its fintech peers is restraint with depth and a deliberate two-surface split. The marketing site is near-shadowless — separation comes from flat tinted surfaces (`#f9fafb`), thin `#d1d5db` hairlines, and generous pill geometry (64px nav pills, 999px CTA pills, 30px cards) rather than elevation; the rare card uses only a soft purple-tinted glow. Cross the boundary to the developer docs (`developers.portone.io`) and the palette shifts from gray to slate: headings move to slate ink (`#0f172a`), body to slate (`#334155`), and muted labels to slate-400 (`#94a3b8`), with tighter 6px radii — but the orange (`#fc6b2d`) accent stays constant, anchoring both surfaces to one brand. Status colors round out the system: a blue tint (`#e6f1ff`) for informational chips, an error red (`#df4c4c`) on a red tint (`#fef2f2`), and a green tint (`#dcfce7`) for success — with the gray ladder `#374151` → `#6b7280` providing text hierarchy and white (`#ffffff`) doing duty as on-primary text. The charcoal (`#363a44`) gradient on the secondary CTA is the only non-orange "action" color.

**Key Characteristics:**
- Pretendard Variable across both surfaces — weight 400 hero vs weight 1000 (ExtraBlack) section heads
- Single saturated orange (`#fc6b2d`) reserved for the primary CTA and eyebrow labels
- Tailwind ink (`#111827`) for marketing text; slate ink (`#0f172a` / `#334155`) on developer docs
- Flat depth: mostly shadowless; tinted `#f9fafb` surfaces + `#d1d5db` hairlines do the separating
- Pill-everything geometry — 64px nav pills, 999px CTA pills, 30px feature cards
- Charcoal gradient (`#363a44`) as the secondary "action" color
- Cool gray neutral ladder (`#374151` → `#6b7280` → `#94a3b8`) for text hierarchy
- Status tints: blue `#e6f1ff`, success `#dcfce7`, error `#df4c4c` on `#fef2f2`

## 2. Color Palette & Roles

### Primary
- **Signal Orange** (`#fc6b2d`): Primary brand color and CTA fill (rendered as a top-down gradient). The single "action" color — also used on the small eyebrow labels above each section ("원 페이먼트 인프라", "국내 결제").
- **Charcoal** (`#363a44`): The secondary CTA gradient fill ("시작하기"). A deep neutral that pairs with the orange without competing for the "primary action" read.
- **Ink** (`#111827`): Primary heading and text color on marketing surfaces. A very dark blue-gray (Tailwind gray-900) used instead of pure black for warmth and financial-grade trust.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white card surfaces, and text on orange/charcoal CTAs (on-primary).
- **Surface Gray** (`#f9fafb`): Cool near-white tinted surface for feature cards and segmented sections.
- **Surface Alt** (`#f3f4f6`): A flatter secondary gray for alternating blocks and chips.
- **Hairline** (`#d1d5db`): Thin borders, dividers, and input outlines — the primary separation device in a largely shadowless system.

### Text Hierarchy (marketing)
- **Ink** (`#111827`): Primary text, headings, strong labels.
- **Gray Strong** (`#374151`): Secondary body copy and emphasis text (Tailwind gray-700).
- **Body Gray** (`#6b7280`): Tertiary text, descriptions, captions (Tailwind gray-500).

### Developer Docs Surface
- **Slate Ink** (`#0f172a`): Heading color on `developers.portone.io` (Tailwind slate-900).
- **Slate Body** (`#334155`): Body and sidebar text on the docs (Tailwind slate-700).
- **Muted Slate** (`#94a3b8`): Placeholder, search hint, and lowest-emphasis labels (Tailwind slate-400).

### Status & Accent
- **Accent Blue** (`#e6f1ff`): Informational tinted surface / highlight chip background.
- **Error Red** (`#df4c4c`): Error and alert text/icon color.
- **Error Tint** (`#fef2f2`): Soft red surface behind error states and alert pills.
- **Success Tint** (`#dcfce7`): Soft green surface for success states and confirmation pills.

## 3. Typography Rules

### Font Family
- **Sans**: `Pretendard Variable` (with `Pretendard` and system fallbacks) — used for every text element on both the marketing site and the developer docs.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Hero H1 | Pretendard Variable | 56px (3.50rem) | 400 | ~1.2 | Light hero headline |
| Display H2 | Pretendard Variable | 48px (3.00rem) | 1000 | ~1.25 | ExtraBlack section heads |
| Section H3 | Pretendard Variable | 36px (2.25rem) | 400 | ~1.35 | Sub-section headlines |
| Eyebrow | Pretendard Variable | 24px (1.50rem) | 1000 | normal | Orange label above sections |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.5 | Standard reading text |
| Nav / Docs | Pretendard Variable | 14px (0.88rem) | 500 | normal | Nav links, docs sidebar |
| Button | Pretendard Variable | 15px (0.94rem) | 700 | normal | CTA button label |
| Caption | Pretendard Variable | 12px (0.75rem) | 400 | normal | Small labels, metadata |

### Principles
- **One font, two weight extremes**: Pretendard Variable carries everything; the hierarchy signal is the weight jump from light (400) hero copy to ExtraBlack (1000) section heads.
- **Orange owns the eyebrow**: the small section-eyebrow labels are set in heavy weight and signal orange (`#fc6b2d`) — a recurring rhythmic accent.
- **Hangul-first sizing**: body sits at a comfortable 16px; docs and nav drop to 14px / weight 500 for dense scanning.
- **Heading warmth**: headings use ink (`#111827`) on marketing and slate (`#0f172a`) on docs — never pure black.

## 4. Component Stylings

### Buttons

**Primary CTA (도입문의)**
- Background: `#fc6b2d`
- Text: `#ffffff`
- Radius: 999px
- Padding: 12px 20px
- Font: 15px Pretendard Variable weight 700
- Use: Primary call-to-action — orange gradient pill ("도입문의" / "Contact sales")

**Secondary CTA (시작하기)**
- Background: `#363a44`
- Text: `#ffffff`
- Radius: 999px
- Padding: 12px 20px
- Font: 12px Pretendard Variable weight 400
- Use: Secondary call-to-action — charcoal gradient pill ("시작하기" / "Get started")

**Header Nav CTA**
- Background: `#363a44`
- Text: `#ffffff`
- Radius: 64px
- Padding: 16px
- Use: Compact contact CTA in the sticky header

### Navigation
- Background: `#ffffff`
- Text: `#111827`
- Radius: 64px (nav-item pill)
- Padding: 16px
- Font: 14px Pretendard Variable weight 500
- Active: orange `#fc6b2d` text on active item
- Use: Top horizontal nav ("서비스", "가격안내", "헬프센터", "개발가이드", "블로그")

### Cards & Containers

**Tinted Surface Card**
- Background: `#f9fafb`
- Text: `#111827`
- Radius: 30px
- Padding: 20px
- Use: Feature card sitting on the cool gray surface

**White Feature Card**
- Background: `#ffffff`
- Text: `#111827`
- Radius: 20px
- Padding: 24px
- Use: White feature card, hairline-separated (no shadow)

### Inputs & Forms

**Docs Search Field**
- Background: `#ffffff`
- Text: `#334155`
- Border: 1px solid `#d1d5db`
- Radius: 6px
- Padding: 6px 12px
- Use: Search input on the developer docs (`developers.portone.io`), placeholder in muted slate `#94a3b8`

### Badges

**Success Pill**
- Background: `#dcfce7`
- Text: `#374151`
- Radius: 8px
- Font: 12px Pretendard Variable weight 500
- Use: Success / confirmation status pill

**Error Pill**
- Background: `#fef2f2`
- Text: `#df4c4c`
- Radius: 8px
- Font: 12px Pretendard Variable weight 500
- Use: Error / alert status pill

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://www.portone.io (homepage, live computed style); https://developers.portone.io (developer docs, live computed style); https://blog.portone.io; https://github.com/portone-io
**Tier 2 sources:** getdesign.md/portone — NOT FOUND (no entry); styles.refero.design/?q=portone — not listed (search returns only generic gallery categories)
**Conflicts unresolved:** none (marketing gray-ink vs docs slate-ink is an intentional two-surface split, documented in §2; orange `#fc6b2d` accent is constant across both)

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 16px, 20px, 24px, 48px, 64px
- Notable: CTA pills use 12px 20px padding; nav pills a square 16px; cards 20–24px interior padding

### Grid & Container
- Centered single-column hero with the 56px Pretendard H1 as the anchor
- Section eyebrow (orange, weight 1000) → ExtraBlack H2 → supporting body is the repeating vertical rhythm
- Feature sections alternate between white (`#ffffff`) and tinted gray (`#f9fafb`) full-width bands
- Cards group related products at 20–30px radius

### Whitespace Philosophy
- **Breathing room over density**: despite being a data-heavy fintech, the marketing surface is airy with generous vertical rhythm.
- **Flat segmentation**: sections separate by background tint (`#f9fafb` vs `#ffffff`) and `#d1d5db` hairlines, not by shadow.
- **Pill rhythm**: the repeated pill (64px nav, 999px CTA) creates a consistent rounded cadence.

### Border Radius Scale
- Extra small (6px): docs inputs, code chips, dense UI
- Small (8px): badges, inner elements
- Medium (16px): standard cards
- Large (30px): hero feature cards
- Full (999px): CTA pills, nav pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f9fafb` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `1px solid #d1d5db` border | Card outlines, input borders, dividers |
| Glow (Level 3, rare) | `rgba(180,156,197,0.1) 0px 0px 16px 4px` | Subtle ambient lift on a featured card |

**Shadow Philosophy**: PortOne is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, and most cards; the only elevation observed was a single soft purple-tinted glow on a featured card. Depth and grouping come from flat tinted surfaces (`#f9fafb`) and thin `#d1d5db` hairlines. This keeps the financial UI feeling clean, fast, and mobile-native. When emphasis is needed, the system reaches for color (orange `#fc6b2d` or the charcoal `#363a44` CTA), never heavy elevation.

## 7. Do's and Don'ts

### Do
- Use Pretendard Variable for all text — both marketing and docs surfaces
- Reserve signal orange (`#fc6b2d`) for the primary CTA and section eyebrows — keep it the single "action" color
- Contrast light (400) hero copy against ExtraBlack (1000) section heads — the weight jump is the hierarchy
- Use ink (`#111827`) for marketing headings and slate (`#0f172a` / `#334155`) for docs — never pure black
- Separate sections with flat tinted surfaces (`#f9fafb`) and `#d1d5db` hairlines, not shadows
- Use pill geometry — 64px nav pills, 999px CTA pills, 20–30px cards
- Use the charcoal gradient (`#363a44`) for the secondary CTA
- Keep status colors tinted and quiet: blue `#e6f1ff`, success `#dcfce7`, error `#df4c4c` on `#fef2f2`

### Don't
- Spread orange across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for headings — use ink `#111827` or slate `#0f172a`
- Lean on heavy drop shadows for elevation — PortOne is a flat, hairline-separated system
- Use sharp/square corners on CTAs or nav — interactive chrome is pill-shaped
- Mix in a second saturated accent hue — orange is the only one; charcoal is neutral
- Set every headline at one weight — the light/ExtraBlack contrast is the voice
- Use a different font on the docs vs marketing — Pretendard Variable spans both

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, nav collapses |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- CTA pills at ~50px height, full pill for an unmistakable target
- Nav pills at 40px height with 16px padding
- Docs search field at comfortable 6px 12px padding

### Collapsing Strategy
- Hero: 56px Pretendard headline scales down on mobile, weight maintained
- Nav: horizontal pills → hamburger toggle
- Feature bands: multi-column → stacked single column
- Tinted / white alternating sections maintain full-width treatment

### Image Behavior
- Product screenshots and illustrations carry little to no shadow at any size, consistent with the flat system
- Cards maintain 16–30px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Signal Orange (`#fc6b2d`)
- Secondary CTA: Charcoal (`#363a44`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Gray (`#f9fafb`) / Surface Alt (`#f3f4f6`)
- Heading text (marketing): Ink (`#111827`)
- Heading / body text (docs): Slate (`#0f172a` / `#334155`)
- Body text: Gray Strong (`#374151`), Body Gray (`#6b7280`)
- Muted / placeholder: Muted Slate (`#94a3b8`)
- Hairline: `#d1d5db`
- Status: Accent Blue (`#e6f1ff`), Success (`#dcfce7`), Error (`#df4c4c`) on Error Tint (`#fef2f2`)

### Example Component Prompts
- "Create a hero on white background. Eyebrow label 24px Pretendard Variable weight 1000 in orange #fc6b2d. H1 at 56px weight 400, color #111827. Below it an orange CTA pill: #fc6b2d background, white text, 999px radius, 12px 20px padding, 15px weight 700 — '도입문의'. And a charcoal secondary pill: #363a44 background, white text, 999px radius."
- "Design a feature card: white #ffffff background, 1px solid #d1d5db hairline, 20px radius, no shadow. Title 36px Pretendard Variable weight 400, #111827. Body 16px weight 400, #6b7280."
- "Build a tinted section: #f9fafb background, full-width. Section eyebrow 24px weight 1000 orange #fc6b2d. H2 48px weight 1000 #111827. Cards inside use white #ffffff with #d1d5db hairline and 30px radius."
- "Create a docs layout: slate ink #0f172a headings, #334155 body, #94a3b8 muted placeholders. Search field: white bg, 1px solid #d1d5db, 6px radius, 6px 12px padding. Sidebar links 14px weight 500."

### Iteration Guide
1. Pretendard Variable everywhere; weight 400 hero vs 1000 section heads is the hierarchy
2. Orange (`#fc6b2d`) is the single action color — don't spread it
3. No heavy shadows — separate with `#f9fafb` tint and `#d1d5db` hairlines
4. Pill geometry — 999px CTAs, 64px nav, 20–30px cards
5. Heading color is `#111827` (marketing) or `#0f172a` (docs), never pure black
6. Charcoal `#363a44` for the secondary CTA
7. Status tints stay quiet: blue `#e6f1ff`, success `#dcfce7`, error `#df4c4c` on `#fef2f2`

---

## 10. Voice & Tone

PortOne's voice is **clear, infrastructural, and quietly ambitious** — a payments partner that turns a notoriously complex domain (multi-PG integration, cross-border settlement, reconciliation) into plain, confident Korean. The hero line "AI로 결제와 재무 운영을 자유롭게" ("Free your payments and financial operations with AI") and the positioning "원 페이먼트 인프라" ("One Payment Infrastructure") set the register: declarative, capability-first, never gimmicky. Copy treats the reader — often a developer or finance operator — as a peer who wants the integration done, not a lead to be pressured.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, capability-framed. "AI로 결제와 재무 운영을 자유롭게." Confident, not hype. |
| Section eyebrows | Terse product labels in orange. "원 페이먼트 인프라", "국내 결제". |
| CTAs | Direct, low-pressure. "도입문의", "시작하기". |
| Feature descriptions | Benefit-first, concrete. "사업의 시작부터 확장까지, 단 하나의 결제 인프라." |
| Developer docs | Precise, peer-to-peer. Quick guides and API references lead with the integration path. |

**Voice samples (verbatim, verified live 2026-06-26):**
- "AI로 결제와 재무 운영을 자유롭게" — hero H1 (capability-framed mission). *(verified live homepage)*
- "결제 연동부터 글로벌 재무 운영까지 하나의 AI 재무 인프라로" — section H2 (end-to-end promise). *(verified live homepage)*
- "통합 결제·정산 AI 재무 인프라 | 포트원" — page title meta (integrated positioning). *(verified live homepage)*

**Forbidden register**: aggressive sales urgency, undefined jargon left unexplained, exclamation-heavy hype, fear-based FOMO. PortOne sells reliability, not anxiety.

## 11. Brand Narrative

PortOne (포트원) began in **2015** as **아임포트 (Iamport)**, a developer-first payment-integration service operated by **코리아포트원 (Korea PortOne Co., Ltd.)** under CEO **정영주 (Jung Young-joo)**. Iamport solved a uniquely painful Korean problem: integrating even one domestic PG (payment gateway) was a multi-week ordeal of bespoke SDKs, and supporting many of them was effectively a full-time job. Iamport's premise — a single API in front of every PG — let developers ship payments in minutes instead of months.

On **February 6, 2023** the company rebranded from Iamport to **PortOne**, signaling a move beyond a developer utility toward a full **"원 페이먼트 인프라" (One Payment Infrastructure)** platform. The rebrand carried three stated brand narratives — *"One to Beyond, First Chapter, Asia No.1"* — and a service philosophy of *"세상 모든 방식의 결제를 가능하게 하는 통합 솔루션"* ("an integrated solution that makes every method of payment in the world possible"). By 2022 the company was processing roughly **10조원 (~10 trillion KRW)** in annual transaction volume across ~2,300 merchants; today PortOne reaches **8 countries and ~3,000 customers**, fronting **100+ payment options** and ~25 domestic and international PGs through one integrated API, and extending into partner-settlement automation and AI-assisted financial operations.

What PortOne refuses, visible in its design: the heavy, intimidating chrome of legacy enterprise finance software, and the dark-pattern urgency of conversion-obsessed marketing. What it embraces: a flat, fast, developer-respecting interface; a single trustworthy orange; Pretendard Variable headlines that range from whisper-light to ExtraBlack; and copy that names the capability plainly. The two-surface design — gray-ink marketing, slate-ink docs, one orange accent — mirrors the company's dual audience of business buyers and the developers who actually wire up the API.

## 12. Principles

1. **One API, one infrastructure.** PortOne's entire reason for existing is consolidation — many PGs behind a single integration. *UI implication:* one primary action color (orange `#fc6b2d`), one font, one consistent pill geometry; never fragment the system.
2. **Respect the developer.** The product was born as a developer tool (Iamport). *UI implication:* the docs surface is first-class — precise slate typography, fast search, integration-path-first navigation, not an afterthought.
3. **Capability over hype.** State what it does, not how revolutionary it is. *UI implication:* declarative headlines, terse CTAs ("도입문의"), no exclamation-driven urgency.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* near-shadowless; separate with `#f9fafb` tint and `#d1d5db` hairlines; keep the page light.
5. **Quiet where it informs, bold where it persuades.** *UI implication:* light (400) hero and body for reading; ExtraBlack (1000) heads and orange eyebrows for the moments that need to land.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable PortOne user segments (Korean e-commerce developers, finance/operations teams, cross-border merchants), not individual people.*

**이준호, 30, 서울.** Backend developer at a fast-growing D2C commerce startup. Chose PortOne because wiring up multiple Korean PGs by hand was eating his sprint; one API got checkout live in an afternoon. Judges a payments vendor by how fast its docs let him integrate without a sales call.

**박지은, 38, 경기.** Finance operations lead at a mid-market retailer selling in several countries. Lives in settlement and reconciliation; values PortOne's partner-settlement automation and the single dashboard that closes the books across PGs. Distrusts tools that look flashy but hide the numbers.

**Sanjay Mehta, 34, Singapore.** Product manager at a cross-border marketplace expanding into Korea. Picked PortOne for its 100+ payment options behind one integration and its 8-country reach. Reads the English docs and trusts the calm, capability-first tone over hype.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transactions / data)** | White canvas. Single Ink (`#111827`) line at body size explaining no activity yet, with one orange CTA to take the next step. No illustration clutter. |
| **Empty (saved / list, none yet)** | Body Gray (`#6b7280`) single line: nothing here yet, plus a path back. Honest, calm. |
| **Loading (data fetch)** | Skeleton rows on `#f9fafb` tinted surface at final card dimensions, flat pulse. No shadow shimmer — consistent with the shadowless system. |
| **Loading (docs search)** | Inline spinner within the search field; previous results stay visible until replaced. |
| **Error (request failed)** | Inline message: Error Red (`#df4c4c`) text on Error Tint (`#fef2f2`) surface, 8px radius, with a plain-language cause and a retry. No generic "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input in the error tone; describes what is valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation in Success Tint (`#dcfce7`), 8px radius; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f9fafb` blocks at final dimensions, flat pulse, no elevation. |
| **Disabled** | Muted Slate (`#94a3b8`) text on reduced-opacity surface; the orange CTA fades rather than turning gray, to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card / section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, pills |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast aesthetic. Pill CTAs respond to press with a subtle scale/opacity shift; section content fades in from below at `motion-standard / ease-enter`. No bounce or spring — payments infrastructure signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle:
- https://www.portone.io (homepage) — Pretendard Variable; hero H1 56px/400 rgb(17,24,39) #111827;
  section H2 48px/1000; eyebrow 24px/1000 orange rgb(252,107,45) #fc6b2d; primary CTA "도입문의"
  orange gradient (rgb(252,107,45)) radius 999px padding 12px 20px white label weight ~700/1000;
  secondary CTA "시작하기" charcoal gradient rgb(54,58,68) #363a44 radius 999px; nav pills white
  radius 64px padding 16px text rgb(17,24,39); cards #f9fafb radius 30px / white radius 16-20px,
  box-shadow none (one card had rgba(180,156,197,0.1) glow). document.title
  "통합 결제·정산 AI 재무 인프라 | 포트원".
- https://developers.portone.io (developer docs) — Pretendard Variable; heading rgb(15,23,42) #0f172a,
  body rgb(51,65,85) #334155, muted rgb(148,163,184) #94a3b8; search button radius 6px padding 6px 12px;
  nav links 14px/500; orange rgb(252,107,45) #fc6b2d accent present (consistent with marketing).

Token-level claims (§1-9) are sourced from these two live inspections (see .verification.md Raw samples).

Voice samples (§10) are verbatim from the live homepage (hero H1, section H2, page title meta).

Brand narrative (§11): founded 2015 as 아임포트 (Iamport) by 코리아포트원 (Korea PortOne Co., Ltd.),
CEO 정영주; rebranded to PortOne on 2023-02-06 with brand narratives "One to Beyond, First Chapter,
Asia No.1" and philosophy "세상 모든 방식의 결제를 가능하게 하는 통합 솔루션"; ~10조원 annual TPV (2022),
~2,300 merchants; now 8 countries / ~3,000 customers / 100+ payment options. Sourced from KDPRESS
(rebrand article, idxno=117887) and PortOne homepage/company surfaces. Specific figures beyond the
homepage are widely reported public facts, not directly quoted PortOne statements in this turn.

Personas (§13) are fictional archetypes informed by publicly observable PortOne user segments
(Korean commerce developers, finance/ops teams, cross-border merchants). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "one API one infrastructure", "two-surface split mirrors dual audience")
are editorial readings connecting PortOne's observed design to its positioning, not directly sourced
PortOne statements.
-->

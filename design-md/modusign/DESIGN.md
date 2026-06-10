---
id: modusign
name: Modusign
display_name_kr: 모두싸인
country: KR
category: saas
homepage: "https://www.modusign.co.kr"
primary_color: "#fed05f"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=modusign.co.kr&sz=128"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "primary = signature CTA yellow (#fed05f) with darker yellow border (#ffc533); pricing surface runs a parallel blue system (#217aff CTA, #4b75e7 check marks, #e2e9fe column tint). Flat shadowless chrome, 6/8/12px radius ladder."
  colors:
    primary: "#fed05f"
    primary-border: "#ffc533"
    primary-deep: "#ffb90a"
    primary-tint: "#fff8e6"
    plan-blue: "#217aff"
    check-blue: "#4b75e7"
    blue-tint: "#e2e9fe"
    gov-navy: "#08236d"
    ink: "#212121"
    ink-alt: "#222222"
    body: "#333333"
    secondary: "#474747"
    muted: "#707070"
    faint: "#999999"
    canvas: "#ffffff"
    surface: "#fafafa"
    surface-alt: "#f5f5f5"
    hairline-faint: "#f0f0f0"
    hairline: "#e6e6e6"
    hairline-strong: "#cccccc"
    table-line: "#dddddd"
    black: "#000000"
    link: "#0000ee"
    error: "#ff4d4f"
  typography:
    family: { sans: "Pretendard" }
    display-hero: { size: 68, weight: 700, lineHeight: 1.40, tracking: -1.2, use: "Homepage hero headline" }
    display:      { size: 56, weight: 700, lineHeight: 1.40, tracking: -0.4, use: "Page/section H1" }
    section:      { size: 45, weight: 700, lineHeight: 1.40, tracking: -0.4, use: "Section H2" }
    subsection:   { size: 36, weight: 700, lineHeight: 1.40, tracking: -0.4, use: "Feature block H3" }
    tab-label:    { size: 24, weight: 700, tracking: -0.4, use: "Industry/department section tabs" }
    sub-tab:      { size: 18, weight: 500, tracking: -0.4, use: "Feature sub-tabs" }
    body:         { size: 16, weight: 400, lineHeight: 1.60, tracking: -0.4, use: "Standard reading text" }
    button:       { size: 16, weight: 700, tracking: -0.4, use: "Hero/section CTA label" }
    button-sm:    { size: 14, weight: 700, tracking: -0.4, use: "Header compact CTA label" }
    caption:      { size: 14, weight: 400, tracking: -0.4, use: "Footer links, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 30, xxl: 36 }
  rounded: { sm: 6, md: 8, lg: 12, xl: 16, full: 100 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#fed05f", fg: "#000000", border: "1px solid #ffc533", radius: "8px", padding: "12px 24px", height: "52px", font: "16px / 700 Pretendard", use: "무료 체험 시작 — the signature yellow primary CTA" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #cccccc", radius: "8px", padding: "12px 24px", height: "52px", font: "16px / 700 Pretendard", use: "도입 문의 — outlined secondary CTA, always paired with primary" }
    button-dark: { type: button, bg: "#000000", fg: "#ffffff", radius: "8px", padding: "12px 24px", height: "52px", font: "16px / 700 Pretendard", use: "Enterprise plan / 고급 기능 문의 emphasis CTA" }
    button-plan-blue: { type: button, bg: "#217aff", fg: "#ffffff", radius: "8px", padding: "12px 24px", height: "52px", font: "16px / 700 Pretendard", use: "Highlighted pricing plan CTA (무료체험 신청)" }
    button-gov-navy: { type: button, bg: "#08236d", fg: "#ffffff", radius: "8px", padding: "8px 24px", height: "44px", font: "16px / 700 Pretendard", use: "공공기관(GOV) 도입 문의하기 in comparison table" }
    input-stepper: { type: input, bg: "#ffffff", fg: "#222222", border: "1px solid #e6e6e6", radius: "6px", height: "38px", font: "16px / 400 Pretendard", use: "Pricing seat/document count input" }
    card-step: { type: card, bg: "#f5f5f5", fg: "#222222", border: "1px solid #e6e6e6", radius: "8px", padding: "24px 24px 36px", use: "How-it-works step card (active); inactive twin is #ffffff" }
    banner-cta: { type: card, bg: "#fed05f", fg: "#212121", border: "1px solid #ffb90a", radius: "12px", padding: "30px 36px", use: "Footer conversion banner — yellow + grey twin pair" }
    toggle-billing: { type: tab, active: "bg #ffffff + text #333333 700 + 1px #f0f0f0 border, 8px radius", disabled: "#999999 inactive label on 100px pill", use: "Pricing 월 결제 / 1년 약정 billing toggle" }
    tab-industry: { type: tab, active: "text #ffffff + 700 weight", disabled: "#474747 inactive label", use: "산업별/부서별 tabs on dark customer band" }
  components_harvested: true
---

# Design System Inspiration of Modusign

## 1. Visual Theme & Atmosphere

Modusign (모두싸인) is Korea's market-leading e-signature platform, and its marketing surface reads like a confident, conversion-tuned B2B SaaS site that has chosen warmth over corporate chill. The canvas is plain white (`#ffffff`) with charcoal text (`#333333` body, `#212121` headings), but the personality lives in one decision: the primary action is always a warm egg-yolk yellow (`#fed05f`) button outlined in a deeper honey yellow (`#ffc533`) with black text. In a category dominated by trust-blue (DocuSign, Adobe Sign), Modusign signs its name in yellow — friendly, optimistic, and impossible to miss against the white-and-grey page.

Typography is single-family and declarative: **Pretendard everywhere**, from the 68px weight-700 hero ("서명이 필요한 모든 곳에 국내 1위 전자서명 모두싸인") down to 14px footer links. Headings run consistently at weight 700 with a generous 1.4 line-height — taller than the tight Korean-startup norm — and a global -0.4px letter-spacing (tightening to -1.2px on the hero). There is no display/body font split; hierarchy is carried purely by size (68 → 56 → 45 → 36 → 16) and the weight flip between 700 headings and 400 body.

Depth is essentially absent: live inspection found `box-shadow: none` across nav, CTAs, cards, and pricing chrome on all three inspected surfaces. Separation is done with hairlines on a finely-stepped grey ladder (`#f0f0f0` → `#e6e6e6` → `#dddddd` → `#cccccc`) and flat tinted panels (`#fafafa`, `#f5f5f5`, yellow-tint `#fff8e6`). The radius system is a tidy 6/8/12px ladder — 6px compact header controls, 8px standard CTAs and cards, 12px feature panels and conversion banners — with a single 100px pill reserved for the pricing billing toggle. One charming quirk: text links across the site render in unstyled browser-default blue (`#0000ee`), underlined — an artifact of the Webflow build that has become a de-facto part of the brand's plain, pragmatic look.

**Key Characteristics:**
- Signature yellow CTA system — `#fed05f` fill, `#ffc533` border, black text — the single brand accent on white
- Pretendard-only typography; weight 700 headings vs 400 body is the entire hierarchy device
- Flat, shadowless chrome — hairline greys and tinted panels do all the separating
- 6/8/12px radius ladder, with a 100px pill only on the pricing toggle
- A parallel blue system on the pricing surface — `#217aff` plan CTA, `#4b75e7` feature-check marks, `#e2e9fe` highlighted-column tint
- Black (`#000000`) used as a real button color for enterprise-grade emphasis
- Browser-default link blue (`#0000ee`) on text links — pragmatic, unpolished, oddly honest
- Dark navy `#08236d` reserved for the government (GOV) plan action

## 2. Color Palette & Roles

### Primary (Yellow System)
- **Modusign Yellow** (`#fed05f`): The primary CTA fill — "무료 체험 시작" buttons in header, hero, and footer banner. The single saturated brand accent.
- **Honey Border** (`#ffc533`): The 1px border that frames every standard yellow CTA, giving the flat button a crisp edge.
- **Deep Honey** (`#ffb90a`): Border on the large footer conversion banner; also appears as small accent text.
- **Yellow Tint** (`#fff8e6`): Pale warm surface for yellow-tinted info panels.

### Pricing Blue System
- **Plan Blue** (`#217aff`): CTA fill on the highlighted (recommended) pricing plan, and blue accent text on pricing copy.
- **Check Blue** (`#4b75e7`): The feature-check marks filling the pricing comparison table — the most frequent non-neutral color on the pricing surface.
- **Blue Tint** (`#e2e9fe`): Background tint of the highlighted plan column.
- **GOV Navy** (`#08236d`): Dark navy fill on the 공공기관(GOV) "도입 문의하기" button.

### Text Hierarchy
- **Ink** (`#212121`): Hero headline and strongest emphasis text.
- **Ink Alt** (`#222222`): Card body and pricing table text.
- **Body Charcoal** (`#333333`): The document default — body copy, most headings.
- **Secondary** (`#474747`): Inactive tab labels, footer column links.
- **Muted** (`#707070`): Legal links, fine print.
- **Faint** (`#999999`): Inactive toggle labels, placeholder-grade text.
- **Pure Black** (`#000000`): CTA label text on yellow/white buttons, and a true button background for dark emphasis CTAs.

### Surface & Hairlines
- **Pure White** (`#ffffff`): Page background, cards, plan CTA text.
- **Surface** (`#fafafa`): Soft grey panel and free-plan button fill.
- **Surface Alt** (`#f5f5f5`): Step cards and the grey conversion-banner twin.
- **Hairline Faint** (`#f0f0f0`): Lightest border — selected toggle, grey banner.
- **Hairline** (`#e6e6e6`): Standard card and input borders.
- **Table Line** (`#dddddd`): Pricing comparison-table grid lines.
- **Hairline Strong** (`#cccccc`): Outlined secondary-CTA border.

### Functional
- **Link Blue** (`#0000ee`): Browser-default blue on underlined text links ("소개서 받기", "자세히 알아보기") — a site-wide Webflow quirk kept in production.
- **Error Red** (`#ff4d4f`): Required-field marks and validation messaging on the 도입 문의 consult form.

## 3. Typography Rules

### Font Family
- **Single family**: `Pretendard` (with sans-serif fallback) for every role — display, body, UI, footer. No secondary or display font.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Pretendard | 68px (4.25rem) | 700 | 1.40 (95.2px) | -1.2px | Homepage hero only |
| Display | Pretendard | 56px (3.50rem) | 700 | 1.40 (78.4px) | -0.4px | Page/section H1 |
| Section | Pretendard | 45px (2.81rem) | 700 | 1.40 (63px) | -0.4px | Section H2 |
| Sub-section | Pretendard | 36px (2.25rem) | 700 | 1.40 (50.4px) | -0.4px | Feature block H3 |
| Tab Label | Pretendard | 24px (1.50rem) | 700 active / 400 inactive | — | -0.4px | 산업별/부서별 tabs |
| Sub-tab | Pretendard | 18px (1.13rem) | 500/400 | — | -0.4px | Feature sub-tabs |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.60 (25.6px) | -0.4px | Standard reading text |
| Button | Pretendard | 16px (1.00rem) | 700 | — | -0.4px | Hero/section CTA |
| Button Small | Pretendard | 14px (0.88rem) | 700 | — | -0.4px | Header compact CTA |
| Caption | Pretendard | 14px (0.88rem) | 400–500 | — | -0.4px | Footer links, fine print |

### Principles
- **One family, two weights**: Pretendard 700 for everything that asserts, 400 for everything that explains. 500 appears only on minor UI labels.
- **Generous 1.4 heading line-height**: multi-line Korean headlines breathe — taller than the compressed look common in KR fintech.
- **Global -0.4px tracking**: applied site-wide; only the 68px hero tightens further to -1.2px.
- **Size does the talking**: a steep 68 → 56 → 45 → 36 → 16 scale carries hierarchy without color or family changes.

## 4. Component Stylings

### Buttons

**Primary (무료 체험 시작)**
- Background: `#fed05f`
- Text: `#000000`
- Border: 1px solid `#ffc533`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / Pretendard
- Use: The yellow free-trial CTA — hero, section closers, footer banner

**Primary Compact (header)**
- Background: `#fed05f`
- Text: `#000000`
- Border: 1px solid `#ffc533`
- Radius: 6px
- Padding: 8px 16px
- Height: 44px
- Font: 14px / 700 / Pretendard
- Use: Sticky-header CTA pair, right-aligned

**Secondary Outline (도입 문의)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cccccc`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / Pretendard
- Use: Consult/sales CTA, always paired to the left of the yellow primary

**Dark Emphasis**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / Pretendard
- Use: Enterprise plan CTA, 고급 기능 문의

**Plan Blue (pricing highlight)**
- Background: `#217aff`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / Pretendard
- Use: 무료체험 신청 on the recommended plan card (column tinted `#e2e9fe`)

**Free Plan**
- Background: `#fafafa`
- Text: `#212121`
- Border: 1px solid `#999999`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / Pretendard
- Use: Free-tier plan CTA

**GOV Navy**
- Background: `#08236d`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 24px
- Height: 44px
- Font: 16px / 700 / Pretendard
- Use: 행정·공공기관 요금제 "도입 문의하기" in the comparison table

### Inputs

**Count Stepper (pricing)**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#e6e6e6`
- Radius: 6px
- Height: 38px
- Font: 16px / 400 / Pretendard
- Use: Seat/document count input on the pricing calculator

### Cards & Containers

**Step Card (active)**
- Background: `#f5f5f5`
- Text: `#222222`
- Border: 1px solid `#e6e6e6`
- Radius: 8px
- Padding: 24px 24px 36px
- Use: How-it-works step cards (문서 준비 → 서명 요청 → 계약 체결 → 계약 관리); inactive sibling is `#ffffff` with a white border

**Conversion Banner (yellow)**
- Background: `#fed05f`
- Text: `#212121`
- Border: 1px solid `#ffb90a`
- Radius: 12px
- Padding: 30px 36px
- Use: Footer "무료 체험 시작" banner; sits beside a grey twin (`#f5f5f5` bg, 1px `#f0f0f0` border)

### Tabs & Toggles

**Billing Toggle (pricing)**
- Active: white `#ffffff` bg, `#333333` text, 700 weight, 8px radius, 1px solid `#f0f0f0`
- Inactive: transparent on a 100px pill track, `#999999` text, 400 weight
- Font: 16px / Pretendard
- Use: 월 결제 / 1년 약정(~50% 할인) billing switch

**Industry Tabs (dark band)**
- Active: `#ffffff` text, 700 weight
- Inactive: `#474747` text, 400 weight
- Radius: 8px
- Font: 24px / Pretendard
- Use: 산업별 / 부서별 customer-case tabs on the dark section

**Feature Sub-tab**
- Background: `#ffffff` (selected card)
- Text: `#5c5c5c`
- Radius: 12px
- Padding: 16px
- Font: 18px / Pretendard
- Use: 계약 준비 / 체결 / 관리 feature switcher on /features

### Navigation
- White sticky header, 80px tall, no shadow
- Links: Pretendard 16px / 400, `#000000` text, 8px 16px padding
- CTA pair right-aligned: outlined 도입 문의 + yellow 무료 체험 시작 (compact 6px-radius variants)

### Text Links
- Color: `#0000ee` (browser-default blue), underlined
- Use: Inline "자세히 알아보기", "소개서 받기", GOV plan links — kept unstyled site-wide

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://www.modusign.co.kr (live inspect), https://modusign.co.kr/pricing (live inspect), https://modusign.co.kr/features (live inspect), https://blog.modusign.co.kr (official blog)
**Tier 2 sources:** none available (getdesign.md/modusign 404; styles.refero.design ?q=modusign not listed)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Measured scale: 4px, 8px, 12px, 16px, 24px, 30px, 36px
- Standard CTA padding is 12px 24px; the large conversion banner pads at 30px 36px

### Grid & Container
- Centered single-column hero with the 68px headline and a paired CTA row beneath
- How-it-works flows as a 4-step horizontal card row (8px-radius cards, active step tinted grey)
- Customer-case section runs as a dark full-width band with white-text tabs
- Pricing is a classic plan-card row over a long hairline comparison table (`#dddddd` grid lines), with the recommended column tinted `#e2e9fe`
- Footer conversion area is a side-by-side banner pair: grey consult banner + yellow trial banner

### Whitespace Philosophy
- **Conversion-first rhythm**: every scroll-depth ends in a CTA pair; whitespace exists to frame the next yellow button.
- **Flat segmentation**: sections alternate white, soft grey (`#fafafa`), and dark bands; no shadows anywhere — separation is tint and hairline.
- **Dense where it sells, airy where it persuades**: the pricing comparison table is tightly gridded while marketing sections keep generous 1.4 line-height headlines and wide gaps.

### Border Radius Scale
- Small (6px): header compact CTAs, stepper inputs
- Medium (8px): standard CTAs, step cards, plan buttons — the workhorse
- Large (12px): feature panels, conversion banners, feature sub-tabs
- XL (16px): occasional large media containers
- Pill (100px): pricing billing-toggle track only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Everything — nav, cards, CTAs, pricing chrome |
| Tint (Level 1) | `#fafafa` / `#f5f5f5` / `#fff8e6` / `#e2e9fe` background shift | Panel and column separation |
| Hairline (Level 2) | 1px `#f0f0f0` → `#e6e6e6` → `#dddddd` → `#cccccc` | Cards, inputs, tables, outlined buttons |
| Color block (Level 3) | `#fed05f` / `#000000` / `#08236d` solid fills | CTAs and dark bands carry all the visual weight |

**Shadow Philosophy**: Modusign is a fully flat system — live inspection returned `box-shadow: none` on every nav, button, heading, card, and pricing element across the homepage, pricing, and features surfaces. Elevation is replaced by a four-step hairline ladder and tinted panels; when the design needs emphasis it reaches for a solid color block (yellow CTA, black button, dark customer band) rather than depth. This keeps the page light and print-like, and makes the yellow primary read even louder against the unshadowed white.

## 7. Do's and Don'ts

### Do
- Reserve the yellow pair — `#fed05f` fill + `#ffc533` border — exclusively for the primary free-trial action
- Put black text on yellow CTAs; white text is for black, blue, and navy buttons only
- Pair every primary CTA with the outlined `#cccccc` secondary (도입 문의) on its left
- Keep the system flat: hairlines (`#f0f0f0`–`#cccccc`) and tints, never drop shadows
- Use Pretendard 700 for all headings with 1.4 line-height and -0.4px tracking
- Keep the 6/8/12px radius ladder; 8px is the default for buttons and cards
- Use the blue system (`#217aff`, `#4b75e7`, `#e2e9fe`) only inside pricing/plan contexts
- Use `#000000` as a legitimate button background for enterprise-grade emphasis

### Don't
- Use yellow for non-primary actions — it is the single conversion signal
- Add drop shadows or gradients to cards and CTAs — the system is strictly flat
- Mix a second display font — Pretendard owns every role
- Use trust-blue as the brand primary — blue is a pricing-context accent, not the identity
- Round CTAs into pills — 100px radius belongs only to the billing-toggle track
- Set headings below weight 700 — the 700/400 flip is the entire hierarchy device
- Style body links into brand colors — the default `#0000ee` underlined link is the established pattern
- Crowd the hero — one headline, one subline, one CTA pair

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero scales down, CTA pair stacks |
| Tablet | 640–1024px | 2-up step cards, condensed nav |
| Desktop | 1024–1440px | Full layout, 4-step card row, side-by-side banners |

### Touch Targets
- Standard CTAs at 52px height with 12px 24px padding — comfortably tappable
- Header compact CTAs at 44px height
- Pricing table CTAs at 44px height with 8px 24px padding

### Collapsing Strategy
- Hero: 68px headline compresses on mobile, weight 700 and dark ink maintained
- Step cards: 4-across → stacked vertical flow
- Pricing comparison table: horizontal scroll on narrow viewports
- Footer banner pair: side-by-side → stacked, yellow banner last (closest to thumb)

### Image Behavior
- Product screenshots sit flat (no shadow) inside 8–12px-radius containers
- The dark customer band keeps full-bleed treatment at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Modusign Yellow (`#fed05f`) + border (`#ffc533`), black text
- Banner border: Deep Honey (`#ffb90a`)
- Background: White (`#ffffff`); panels `#fafafa` / `#f5f5f5`; warm tint `#fff8e6`
- Headings: Ink (`#212121`) / Body (`#333333`)
- Muted ladder: `#474747` → `#707070` → `#999999`
- Hairlines: `#f0f0f0` → `#e6e6e6` → `#dddddd` → `#cccccc`
- Pricing accents: Plan Blue (`#217aff`), Check Blue (`#4b75e7`), column tint (`#e2e9fe`), GOV Navy (`#08236d`)
- Dark CTA: Black (`#000000`); text links: default blue (`#0000ee`); error: `#ff4d4f`

### Example Component Prompts
- "Create a hero on white. Headline 68px Pretendard weight 700, line-height 1.4, letter-spacing -1.2px, color #212121. Below, a CTA pair: outlined button (white bg, 1px solid #cccccc, black text, 8px radius, 12px 24px padding, 16px/700) and a yellow primary (#fed05f bg, 1px solid #ffc533 border, #000000 text, same geometry) labeled '무료 체험 시작'."
- "Design a 4-step process row: cards with #f5f5f5 background (active) or #ffffff, 1px solid #e6e6e6, 8px radius, 24px 24px 36px padding, no shadow. Step title 16px Pretendard 700, body 16px/400 #222222."
- "Build a pricing plan card set: recommended column tinted #e2e9fe with a #217aff CTA (white text, 8px radius, 52px height); free plan CTA #fafafa bg with 1px #999999 border; enterprise CTA solid #000000 with white text. Comparison table below with #dddddd grid lines and #4b75e7 check marks."
- "Create a footer conversion banner pair: left card #f5f5f5 with 1px #f0f0f0 border, right card #fed05f with 1px #ffb90a border, both 12px radius and 30px 36px padding, titles 16px Pretendard, no shadow."

### Iteration Guide
1. Yellow (`#fed05f` + `#ffc533` border) appears exactly once per viewport — the primary action
2. Everything is flat: if you reach for a shadow, use a hairline or tint instead
3. Pretendard 700 vs 400 is the only weight contrast; headings get 1.4 line-height
4. Radius: 6px compact, 8px default, 12px panels, 100px only for the billing toggle
5. Blue belongs to pricing; navy `#08236d` belongs to GOV; black is the enterprise button
6. Body text is `#333333` with -0.4px tracking at 16px/1.6
7. Keep text links default-blue `#0000ee` and underlined — it's the site's pragmatic signature

---

## 10. Voice & Tone

Modusign's voice is **direct, rank-claiming, and reassuring** — a market leader that states its position as plain fact ("국내 1위 전자서명") and then immediately lowers the barrier to entry ("무료 체험 시작"). Copy is short, declarative Korean with almost no English loanword decoration; the product explains contracts, a stressful legal domain, in the language of completion and relief: 시작부터 끝까지, 한번에. There is no exclamation-mark hype — confidence is carried by superlatives that are verifiable claims (업계 최다 고객) rather than adjectives.

| Context | Tone |
|---|---|
| Hero headlines | Rank-as-fact + universal scope. "서명이 필요한 모든 곳에 국내 1위 전자서명 모두싸인." |
| Feature copy | Completion-framed, end-to-end. "계약의 시작부터 끝까지, 모두싸인으로." |
| CTAs | Low-friction imperatives. "무료 체험 시작", "도입 문의", "맞춤 상담 받기". |
| Trust/legal copy | Sober and concrete. "법적 효력 및 강력한 보안" — states the guarantee, no drama. |
| Blog/guides | Practical advisor voice — HR/legal how-tos, case studies, checklists. |
| Customer proof | Numbers do the talking: industries, departments, customer counts. |

**Voice samples (verbatim from live site, 2026-06-10):**
- "서명이 필요한 모든 곳에 국내 1위 전자서명 모두싸인" — homepage hero H1 (rank-as-fact + universal scope). *(verified live 2026-06-10)*
- "계약의 시작부터 끝까지, 모두싸인으로" — features page H1 (end-to-end completion promise). *(verified live 2026-06-10)*
- "계약 준비, 체결, 관리를 한번에" — features H2 (workflow compression into one tool). *(verified live 2026-06-10)*
- "모든 산업 및 부서에서 이용하고 있습니다" — homepage section H1 (ubiquity as social proof). *(verified live 2026-06-10)*

**Forbidden register**: exclamation-heavy urgency, fear-based legal threats ("계약서 잘못 쓰면 큰일 납니다"), untranslated legalese left unexplained, discount-mall promotion tone on the core product.

## 11. Brand Narrative

Modusign (모두싸인) was founded in **December 2015** by CEO **이영준 (Lee Young-jun)** with the mission **"계약이 모두에게 더 간편하고 안전할 수 있도록 바꾼다"** (change contracts to be simpler and safer for everyone) and the vision **"계약의 표준이 된다"** (become the standard for contracts). The name itself is the thesis — 모두(everyone) + 싸인(sign): electronic signatures shouldn't be an enterprise luxury but something every business, school, hospital, and government office can use. The founding rejection was paper-and-stamp contract culture — printing, couriering, stamping, scanning, and filing — which Korean organizations endured as a cost of doing business.

A decade in, the claim "국내 1위" is carried by published numbers: over **320,000 companies and institutions**, around **9.6 million users**, and tens of millions of completed documents, with the founder noting the company fields acquisition offers every year ([한국일보 interview, 2026-01](https://www.hankookilbo.com/News/Read/A2026012015580004845)). The product has grown from simple e-signing into contract infrastructure — web service, API integration (연동형), on-premise deployment, a government edition (GOV), and **모두싸인 캐비닛**, an AI contract-management layer. Lee has framed the next chapter explicitly: *"전자계약 넘어 AI 기반 CLM으로 확장할 것"* — beyond e-contracts to AI-based contract lifecycle management ([모두싸인 공식 블로그/전자신문, 2024-12](https://blog.modusign.co.kr/news/pr/etnews_2412)).

The design follows the mission's populism: where global e-signature incumbents dress in institutional trust-blue, Modusign chooses a warm yellow CTA on plain white — approachable over imposing. What it refuses: intimidating legal chrome, gated "request a demo" funnels (the free trial is always one yellow button away), and decorative depth. What it embraces: flat pragmatic surfaces, rank-as-fact copy, and a conversion path so consistent that the yellow button effectively *is* the brand.

## 12. Principles

1. **Everyone signs.** The name is the principle — contracts for 모두, not just legal teams. *UI implication:* the free-trial CTA is permanent, yellow, and one click from every viewport; no feature is hidden behind sales gates.
2. **State rank, then lower the bar.** "국내 1위" is asserted as fact and immediately followed by a free entry point. *UI implication:* pair every leadership claim with a low-friction action (무료 체험) and verifiable numbers, never adjectives alone.
3. **End-to-end or nothing.** 시작부터 끝까지 — preparation, signing, and management live in one product. *UI implication:* show workflows as connected step cards (문서 준비 → 서명 요청 → 계약 체결 → 계약 관리), not isolated feature grids.
4. **Flat is honest.** A legal-infrastructure product shouldn't decorate. *UI implication:* no shadows or gradients; hairlines, tints, and solid color blocks carry all structure.
5. **Warmth where the law is cold.** Yellow against legal grey. *UI implication:* keep the single warm accent for action moments; let trust copy (법적 효력, 보안) stay sober charcoal-on-white.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Modusign customer segments (HR/legal teams, SMB operators, public-sector administrators), not individual people.*

**박민지, 33, 서울.** HR manager at a 200-person company drowning in 연봉계약서 season. Sends batch signature requests through Modusign and tracks who hasn't signed from one dashboard. Chose it because employees could sign on KakaoTalk without installing anything.

**정태호, 45, 대구.** Runs a franchise food company signing dozens of supplier and store contracts monthly. Doesn't care about "digital transformation" rhetoric — he cares that a contract that took four days of couriering now closes the same afternoon, with legal validity he can show his lawyer.

**김은영, 38, 세종.** Public-institution administrator evaluating the GOV edition. Needs security certifications, audit trails, and on-premise options before anything else; the 법적효력/보안 page and 감사추적인증서 are the first things she reads.

**이준혁, 29, 판교.** Backend developer embedding signatures into his company's SaaS via the Modusign API (연동형). Judges the product by docs quality and webhook reliability, and appreciated starting the integration from a free trial instead of a sales call.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no documents yet)** | White canvas, one charcoal (`#333333`) sentence stating no contracts yet, and a single yellow `#fed05f` CTA to send the first signature request. No illustration noise. |
| **Empty (no search/filter results)** | Faint (`#999999`) single line with the active filter summary visible so the user can widen scope. |
| **Loading (dashboard/list)** | Flat skeleton bars on `#f5f5f5` at final row dimensions, 8px radius. No shimmer-shadow — flat pulse consistent with the shadowless system. |
| **Loading (pricing calculator)** | Inline recalculation; previous totals remain visible, never a blanked panel. |
| **Error (signature request failed)** | Inline `#ff4d4f` message naming the failed step and a plain-language fix, plus retry. Never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level `#ff4d4f` required marks and a message describing what a valid value is — matches the live 도입 문의 form pattern. |
| **Success (contract completed)** | Calm inline confirmation; the document row itself shows the completed status, with the audit-trail link immediately available. No confetti. |
| **Success (request sent)** | Brief toast, sentence case, past tense ("서명 요청을 보냈습니다"), auto-dismiss. |
| **Skeleton** | `#f5f5f5` blocks with `#e6e6e6` hairline edges at final dimensions, 8px radius. |
| **Disabled** | Labels drop to `#999999` on unchanged flat surfaces; the yellow CTA desaturates toward `#fff8e6` rather than turning grey, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, toggle, tab switch |
| `motion-standard` | 200ms | Card reveal, accordion, dropdown |
| `motion-slow` | 320ms | Section transitions, step-flow advance |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, panels, toasts |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions (tabs, toggles) |

**Motion rules**: Motion is utilitarian and sparse, matching the flat visual system — tab switches and the billing toggle slide at `motion-fast / ease-standard`; how-it-works step cards advance with a quiet fade at `motion-standard`. Nothing bounces: a legal-infrastructure product signals steadiness, not playfulness. The one permitted emphasis is the yellow CTA's hover, a brief background deepen toward `#ffc533` at `motion-fast`. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle on
https://www.modusign.co.kr, https://modusign.co.kr/pricing, https://modusign.co.kr/features:
- Hero H1 "서명이 필요한 모든 곳에 국내 1위 전자서명 모두싸인" — Pretendard 68px / 700 / -1.2px / rgb(33,33,33)
- Primary CTA "무료 체험 시작" — bg rgb(254,208,95) #fed05f / border rgb(255,197,51) #ffc533 / radius 8px / black text
- Pricing blue system — #217aff plan CTA, #4b75e7 table check marks, #e2e9fe highlighted column
- box-shadow: none across all inspected chrome (flat system)
Raw samples: web/references/modusign/.verification.md

Token-level claims (§1–9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage/features pages, captured 2026-06-10.

Brand narrative (§11) verified sources:
- 한국일보 founder interview (2026-01): founded by 이영준; 국내 1위; ~330,000 client
  organizations; annual acquisition offers.
  https://www.hankookilbo.com/News/Read/A2026012015580004845
- 모두싸인 공식 블로그 PR archive (electimes/etnews repost, 2024-12): 이영준 quote
  "전자계약 넘어 AI 기반 CLM으로 확장할 것"; 32만 기업/기관, 960만 이용자 scale figures.
  https://blog.modusign.co.kr/news/pr/etnews_2412
- Mission "계약이 모두에게 더 간편하고 안전할 수 있도록 바꾼다" and vision "계약의 표준이
  된다" as reported in Korean startup media (스타트업투데이, 매일일보) discovered via
  WebSearch 2026-06-10; founding date December 2015.

Personas (§13) are fictional archetypes informed by publicly observable Modusign
customer segments (HR/legal, SMB, public sector, API developers). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "yellow against legal grey", "flat is honest", the
disabled-state and motion specifications) are editorial readings extending the
observed design system, not directly sourced Modusign statements — motion tokens
in §15 are illustrative conventions consistent with the observed flat system.
-->

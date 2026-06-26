---
id: airbridge
name: Airbridge
display_name_kr: "에어브릿지"
country: KR
category: marketing
homepage: "https://www.airbridge.io"
primary_color: "#155dfc"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=airbridge.io&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "Dark-first martech site. primary = electric CTA blue (#155dfc); a lighter link blue (#0970ff) carries inline links on light sections. Page emits lab()/oklab() colors — converted to hex via canvas getImageData during live inspect."
  colors:
    primary: "#155dfc"
    primary-link: "#0970ff"
    ink: "#fafafa"
    white: "#ffffff"
    ink-dark: "#020202"
    muted: "#98989f"
    canvas: "#0a0a0c"
    surface-dark: "#18181b"
    surface-light: "#efefef"
    accent-mint: "#7eedb8"
  typography:
    family: { sans: "Pretendard Variable" }
    display-hero: { size: 72, weight: 600, lineHeight: 1.0, tracking: -1.08, use: "Hero headline, gradient text-fill" }
    section:      { size: 48, weight: 700, lineHeight: 1.33, tracking: -0.72, use: "Section titles" }
    feature:      { size: 26, weight: 700, lineHeight: 1.54, tracking: -0.39, use: "Feature/tab headings" }
    card-title:   { size: 18, weight: 700, lineHeight: 1.5, tracking: -0.27, use: "Card / plan titles" }
    eyebrow:      { size: 14, weight: 700, lineHeight: 1.43, use: "Section eyebrow label, muted" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
    cta:          { size: 15, weight: 500, lineHeight: 1.0, use: "Primary CTA label" }
    nav:          { size: 14, weight: 500, lineHeight: 1.0, use: "Nav links, buttons, inline links" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 28, xxl: 32, section: 64 }
  rounded: { sm: 8, md: 10, lg: 16, full: 9999 }
  shadow:
    ring: "rgba(21,93,252,0.15) 0px 0px 0px 1px"
  components:
    button-primary: { type: button, bg: "#155dfc", fg: "#fafafa", radius: "8px", height: "48px", padding: "0 16px", font: "15px / 500 Pretendard", use: "Primary CTA 데모 신청하기, soft blue focus ring" }
    button-ghost: { type: button, bg: "rgba(255,255,255,0.04)", fg: "#fafafa", border: "1px solid rgba(255,255,255,0.12)", radius: "8px", height: "48px", padding: "0 28px", font: "15px / 500 Pretendard", use: "Secondary CTA 요금 확인하기 on dark" }
    nav-link: { type: tab, fg: "#ffffff", radius: "10px", padding: "8px 12px", font: "14px / 500 Pretendard", active: "text #ffffff on translucent white wash", disabled: "#98989f label", use: "Top nav item" }
    segmented-tab: { type: tab, radius: "10px", padding: "4px 24px", font: "14px / 500 Pretendard", active: "text #fafafa + bg rgba(255,255,255,0.04) + 1px rgba(255,255,255,0.12) border", disabled: "#98989f label", use: "Pricing plan toggle (MMP / 딥링크)" }
    card-dark: { type: card, bg: "#18181b", fg: "#fafafa", radius: "16px", use: "Feature card on near-black canvas" }
    card-light: { type: card, bg: "#ffffff", fg: "#020202", radius: "16px", use: "Light-section feature / comparison card" }
    link-inline: { type: button, fg: "#0970ff", font: "14px / 500 Pretendard", use: "자세히 보기 inline text link on light sections" }
    faq-row: { type: listItem, fg: "#fafafa", font: "18px / 500 Pretendard", padding: "24px 0", use: "FAQ accordion row on dark" }
  components_harvested: true
---

# Design System Inspiration of Airbridge

## 1. Visual Theme & Atmosphere

Airbridge (에어브릿지), the cross-platform mobile measurement partner built by Seoul martech company AB180, presents itself as a precision instrument for marketers — a dark, data-room aesthetic that signals analytical seriousness rather than playful consumer warmth. The marketing site opens on a near-black canvas (`#0a0a0c`) with near-white text (`#fafafa`), the contemporary "control panel" register shared by Linear, Vercel, and the new generation of developer-adjacent SaaS. A single saturated electric blue (`#155dfc`) carries every primary call-to-action ("데모 신청하기"), trained to read as the one decisive action against the dark field. As the page descends into pricing and comparison sections it inverts to light grey (`#efefef`) and white surfaces with near-black headings (`#020202`), where a slightly lighter link blue (`#0970ff`) takes over inline links ("자세히 보기"). The result is a deliberate light/dark cadence: the dark hero asserts authority, the light sections deliver the legible commercial detail.

The typographic personality is unmistakably Korean-modern: everything is set in **Pretendard Variable**, the de-facto Korean product font, with no display/body font split — hierarchy comes entirely from size and weight. The hero headline runs at a commanding 72px / weight 600 with tight `-1.08px` tracking and a gradient text-fill (its computed color resolves transparent because the fill is clipped from a background gradient), while section titles land at 48px / weight 700 / `-0.72px`. Pure white (`#ffffff`) appears on nav chrome and maximum-contrast labels, and a muted cool grey (`#98989f`) handles eyebrows and secondary metadata. The system tracks headlines tight and keeps body text at a calm 16px / 1.5 — dense enough for an information-rich analytics narrative, generous enough for hangul legibility.

What distinguishes Airbridge from generic dark SaaS is its restraint and its one warm note. Depth is communicated through flat tinted surfaces — a dark zinc surface (`#18181b`) for feature cards on the near-black canvas — and barely-there translucent-white washes rather than heavy drop shadows; the only real shadow is a soft blue focus ring (`rgba(21,93,252,0.15)`) around the primary button. Against the otherwise blue-and-neutral palette, a single mint-green accent (`#7eedb8`) appears in iconography and data highlights, the lone organic hue in an engineered system. Geometry is consistently soft-square: 8px on buttons, 10px on nav and segmented controls, 16px on cards — modern, calm, never pill-shaped.

**Key Characteristics:**
- Dark-first canvas (`#0a0a0c`) with near-white text (`#fafafa`) — analytical "control panel" register
- Single electric blue (`#155dfc`) reserved for the primary CTA — the one decisive action color
- Lighter link blue (`#0970ff`) for inline text links on the light commercial sections
- Pretendard Variable everywhere — hierarchy by size/weight, no display/body font split
- Hero at 72px / weight 600 / `-1.08px` with gradient text-fill; sections at 48px / 700
- Light/dark cadence — near-black hero authority → light grey (`#efefef`) / white commercial detail with `#020202` headings
- Flat depth: dark zinc surfaces (`#18181b`) and translucent-white washes instead of heavy shadows
- One warm accent — mint green (`#7eedb8`) — as the lone organic hue
- Soft-square geometry — 8px buttons, 10px nav/segmented, 16px cards; pure white (`#ffffff`) on nav chrome
- Muted cool grey (`#98989f`) for eyebrows and secondary metadata

## 2. Color Palette & Roles

### Primary
- **Airbridge Blue** (`#155dfc`): Primary brand color and CTA background. The saturated electric blue on "데모 신청하기" — the system's single "action" color against the dark canvas.
- **Link Blue** (`#0970ff`): A slightly lighter, brighter blue used for inline text links ("자세히 보기") on the light commercial sections, where the darker primary would be heavy.
- **Near-White Ink** (`#fafafa`): Primary text and CTA-label color on the dark canvas. A warm off-white that softens the contrast against near-black.

### Neutral & Surface
- **Pure White** (`#ffffff`): Nav chrome text, maximum-contrast labels, and the background of light-section feature/comparison cards.
- **Ink Dark** (`#020202`): Near-black heading and body color on the light (`#efefef` / white) sections — denser than the dark canvas itself, reserved for light-mode type.
- **Canvas Black** (`#0a0a0c`): The near-black page background of the hero and dark feature sections.
- **Surface Dark** (`#18181b`): Dark zinc surface for feature cards and panels sitting on the near-black canvas.
- **Surface Light** (`#efefef`): Light grey background for the pricing/comparison commercial sections.
- **Muted Grey** (`#98989f`): Eyebrow labels, inactive tabs, secondary metadata, and lowest-emphasis text.

### Accent
- **Mint** (`#7eedb8`): The single warm/organic accent — appears in iconography and data highlights, used sparingly against the blue-and-neutral system.

## 3. Typography Rules

### Font Family
- **All text**: `Pretendard Variable` (with `Pretendard` fallback) — the Korean product-font standard, used for every role from hero to caption. There is no separate display face; weight and size carry the hierarchy.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero | Pretendard Variable | 72px (4.50rem) | 600 | 1.0 | -1.08px | Gradient text-fill, clipped from background |
| Section | Pretendard Variable | 48px (3.00rem) | 700 | 1.33 | -0.72px | Section titles |
| Feature | Pretendard Variable | 26px (1.63rem) | 700 | 1.54 | -0.39px | Feature / tab headings |
| Card Title | Pretendard Variable | 18px (1.13rem) | 700 | 1.5 | -0.27px | Card / plan titles |
| Eyebrow | Pretendard Variable | 14px (0.88rem) | 700 | 1.43 | normal | Section eyebrow label, `#98989f` |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.5 (24px) | normal | Standard reading text |
| CTA | Pretendard Variable | 15px (0.94rem) | 500 | 1.0 | normal | Primary CTA label |
| Nav / Link | Pretendard Variable | 14px (0.88rem) | 500 | 1.0 | normal | Nav links, buttons, inline links |

### Principles
- **One font, weight-driven hierarchy**: Pretendard Variable carries everything; the jump from weight 400 body to weight 700 headings (and 600 on the hero) is the primary hierarchy signal, not a second typeface.
- **Tight tracking scales with size**: -1.08px at 72px, -0.72px at 48px, -0.39px at 26px, -0.27px at 18px. Headlines compress; body and UI text stay at normal tracking.
- **Gradient hero**: the 72px hero headline is filled from a clipped background gradient (its text color resolves transparent), the single decorative typographic moment in an otherwise flat system.
- **Hangul-tuned body**: body sits at 16px / 1.5 line-height — generous vertical rhythm for dense, data-heavy marketing copy.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#155dfc`
- Text: `#fafafa`
- Radius: 8px
- Padding: 0px 16px
- Height: 48px
- Font: 15px Pretendard weight 500
- Shadow: soft blue focus ring `rgba(21,93,252,0.15) 0px 0px 0px 1px`
- Use: Primary call-to-action ("데모 신청하기") — the system's single action color

**Ghost / Outline (on dark)**
- Background: `rgba(255,255,255,0.04)`
- Text: `#fafafa`
- Border: 1px solid `rgba(255,255,255,0.12)`
- Radius: 8px
- Padding: 0px 28px
- Height: 48px
- Font: 15px Pretendard weight 500
- Use: Secondary CTA on the dark canvas ("요금 확인하기", "자세히 보기")

**Compact Primary**
- Background: `#155dfc`
- Text: `#fafafa`
- Radius: 8px
- Padding: 8px 16px
- Height: 36px
- Font: 14px Pretendard weight 500
- Use: In-card / nav-corner primary action

### Inputs & Forms

**Default (on dark)**
- Background: `rgba(255,255,255,0.04)`
- Border: 1px solid `rgba(255,255,255,0.12)`
- Radius: 8px
- Text: `#fafafa`
- Placeholder: `#98989f`
- Use: Form field on the dark canvas (matches the ghost-button surface language)

### Cards & Containers

**Dark Feature Card**
- Background: `#18181b`
- Text: `#fafafa`
- Radius: 16px
- Use: Feature/solution card sitting on the near-black canvas

**Light Comparison Card**
- Background: `#ffffff`
- Text: `#020202`
- Radius: 16px
- Use: Pricing / comparison card on the light grey (`#efefef`) section

### Badges

**Mint Highlight**
- Background: `rgba(126,237,184,0.04)`
- Text: `#7eedb8`
- Radius: 8px
- Use: Data-highlight chip / positive metric accent — the lone warm hue

### Tabs

**Segmented Toggle**
- Active: text `#fafafa` on `rgba(255,255,255,0.04)` with 1px `rgba(255,255,255,0.12)` border
- Inactive: `#98989f` label, transparent background
- Radius: 10px
- Padding: 4px 24px
- Font: 14px Pretendard weight 500
- Use: Pricing plan toggle ("MMP 플랜" / "딥링크 플랜")

**Nav Item**
- Text: `#ffffff`
- Radius: 10px (hover wash)
- Padding: 8px 12px
- Font: 14px Pretendard weight 500
- Active: translucent white wash behind the label
- Inactive: `#98989f` for de-emphasized items
- Use: Top navigation ("기능 소개", "솔루션", "인사이트", "가격")

### Inline Links
- Text: `#0970ff`
- Font: 14px Pretendard weight 500
- Padding: 16px 0px 0px (top-spaced from card body)
- Use: "자세히 보기" inline text links on light sections

### FAQ Accordion
- Text: `#fafafa`
- Font: 18px Pretendard weight 500
- Padding: 24px 0px (vertical)
- Use: Pricing-page FAQ rows ("MAU(월간 활성 유저)란 무엇인가요?")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.airbridge.io/ko, https://www.airbridge.io/ko/pricing, https://engineering.ab180.co, https://help.airbridge.io/en
**Tier 2 sources:** getdesign.md/airbridge — not listed (KR brand); styles.refero.design — not listed (KR brand)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px (nav/button padding lands on 8px and 12px multiples; section rhythm at 64px)
- Scale: 4px, 8px, 12px, 16px, 24px, 28px, 32px, 64px
- Notable: ghost-CTA horizontal padding lands at 28px, giving the secondary action a wider, calmer hit area than the 16px primary

### Grid & Container
- Centered single-column hero anchored by the 72px gradient headline and a primary/secondary CTA pair
- Feature sections use repeating dark cards (`#18181b`) in 2-3 column grids on the near-black canvas
- Pricing/comparison sections invert to a light grey (`#efefef`) band with white comparison cards
- A persistent dark sticky nav with translucent-white hover washes on items

### Whitespace Philosophy
- **Breathing room over density**: despite a data-heavy product, the marketing surface is airy — generous vertical rhythm (64px section spacing) between bands.
- **Light/dark cadence**: near-black hero/feature bands alternate with light grey commercial bands, creating a deliberate authority → legibility rhythm.
- **Flat segmentation**: sections separate by background tone (canvas `#0a0a0c` vs surface `#18181b` vs light `#efefef`) and translucent washes, not by heavy borders or shadows.

### Border Radius Scale
- Small (8px): buttons, inputs
- Medium (10px): nav items, segmented controls
- Large (16px): feature and comparison cards — the workhorse
- Full (9999px): rare, reserved for avatars/dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, headings, most surfaces |
| Tone (Level 1) | Surface shift (`#18181b` on `#0a0a0c`) | Card/panel separation without elevation |
| Wash (Level 2) | `rgba(255,255,255,0.04)` fill + `rgba(255,255,255,0.12)` hairline | Ghost buttons, inputs, active segmented tab |
| Ring (Level 3) | `rgba(21,93,252,0.15) 0px 0px 0px 1px` | Primary CTA focus/emphasis ring |

**Shadow Philosophy**: Airbridge is a near-shadowless dark system. Live inspection found `box-shadow: none` across nav, headings, and feature cards; the only real elevation cue is a soft blue ring (`rgba(21,93,252,0.15)`) around the primary CTA. Depth and grouping are communicated through flat tonal layering — a dark zinc surface (`#18181b`) lifted off the near-black canvas (`#0a0a0c`) — and barely-there translucent-white washes. This keeps the analytics-product chrome feeling clean, fast, and modern, reaching for color (blue `#155dfc`) or tone, never heavy drop shadows, when emphasis is needed.

## 7. Do's and Don'ts

### Do
- Use the near-black canvas (`#0a0a0c`) with near-white text (`#fafafa`) for the primary dark register
- Reserve electric blue (`#155dfc`) for the primary CTA — keep it the single "action" color
- Use the lighter link blue (`#0970ff`) for inline text links on light sections
- Set everything in Pretendard Variable; drive hierarchy with weight (400 body → 700 heading)
- Apply tight negative tracking on headlines (-1.08px at 72px, -0.72px at 48px)
- Separate surfaces with flat tone (`#18181b` on `#0a0a0c`) and translucent-white washes, not shadows
- Keep geometry soft-square — 8px buttons, 10px nav/segmented, 16px cards
- Use the mint accent (`#7eedb8`) sparingly, only for data highlights

### Don't
- Use drop shadows for elevation — Airbridge is a flat, near-shadowless system (reach for the blue ring or tone)
- Spread the electric blue across many elements — it dilutes the single-action signal
- Use pure black for light-mode text — reserve `#020202` near-black for the light sections
- Use pill/full-round geometry on buttons or cards — the system is soft-square (8-16px)
- Introduce a second saturated accent — blue is primary; mint is the only warm note, used minimally
- Set headlines in a light weight — display is weight 600-700
- Mix in a different body font — Pretendard Variable carries every role
- Use positive letter-spacing at display sizes — Airbridge tracks tight

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses from 72px, cards stack |
| Tablet | 640-1024px | 2-up feature cards, moderate padding |
| Desktop | 1024-1440px | Full layout, centered hero, 2-3 column feature/comparison grids |

### Touch Targets
- Primary CTA at 48px height — an unmistakable, comfortable target
- Ghost CTA at 48px height with 28px horizontal padding
- Nav items at 36px height with 8px 12px padding within the sticky header
- Segmented-toggle items at 29px height with 24px horizontal padding

### Collapsing Strategy
- Hero: 72px gradient headline scales down on mobile, weight 600 maintained
- Feature cards: 3-column → 2-column → stacked single column
- Light/dark bands maintain full-width treatment across breakpoints
- Pricing comparison: side-by-side cards → stacked on narrow viewports

### Image Behavior
- Dashboard/product screenshots sit on the dark canvas with no shadow at any size, consistent with the flat system
- Cards maintain 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Airbridge Blue (`#155dfc`)
- Inline link (light): Link Blue (`#0970ff`)
- Text on dark: Near-White Ink (`#fafafa`)
- Nav chrome / max contrast: Pure White (`#ffffff`)
- Text on light: Ink Dark (`#020202`)
- Page background (dark): Canvas Black (`#0a0a0c`)
- Dark card surface: Surface Dark (`#18181b`)
- Light section: Surface Light (`#efefef`)
- Secondary / eyebrow text: Muted Grey (`#98989f`)
- Data accent: Mint (`#7eedb8`)

### Example Component Prompts
- "Create a dark hero: #0a0a0c background. Headline at 72px Pretendard Variable weight 600, letter-spacing -1.08px, gradient text-fill. Below it a primary CTA (#155dfc background, #fafafa text, 8px radius, 0 16px padding, 48px height, 15px/500) and a ghost CTA (rgba(255,255,255,0.04) background, 1px solid rgba(255,255,255,0.12) border, #fafafa text, 8px radius)."
- "Design a dark feature card: #18181b background, 16px radius, no shadow. Title 26px Pretendard Variable weight 700, letter-spacing -0.39px, #fafafa. Body 16px weight 400, line-height 1.5, #98989f."
- "Build a light comparison section: #efefef background. Section title 48px Pretendard weight 700, letter-spacing -0.72px, #020202. White cards (#ffffff, 16px radius) with an inline link '자세히 보기' in #0970ff, 14px/500."
- "Create a pricing segmented toggle: active tab text #fafafa on rgba(255,255,255,0.04) with 1px rgba(255,255,255,0.12) border, inactive tab #98989f, 10px radius, 4px 24px padding."

### Iteration Guide
1. Pretendard Variable for everything; weight 400 body → 700 heading is the hierarchy
2. Electric blue (`#155dfc`) is the single action color — don't spread it
3. No shadows — separate with tone (`#18181b` on `#0a0a0c`) and translucent washes; the only ring is blue
4. Soft-square geometry — 8px buttons, 10px nav/segmented, 16px cards
5. Text is `#fafafa` on dark, `#020202` on light — never pure black on the dark canvas
6. Negative tracking on headlines, normal on body
7. Mint (`#7eedb8`) only for data highlights, used sparingly

---

## 10. Voice & Tone

Airbridge's voice is **precise, evidence-driven, and quietly confident** — a measurement product that speaks to marketers as analysts, not as targets for hype. The hero line "광고 성과 측정, AI로 완성하세요" ("Complete your ad performance measurement with AI") sets the register: capability stated plainly, outcome-framed, no superlatives. Copy consistently frames the value as removing uncertainty — "감이 아닌 데이터를 근거로 의사결정하세요" ("Make decisions based on data, not gut feel") — positioning the product as the antidote to guesswork.

| Context | Tone |
|---|---|
| Hero headlines | Outcome-framed, declarative. "광고 성과 측정, AI로 완성하세요." Capable, never hype. |
| Feature labels | Plain and technical. "통합 성과측정", "웹투앱 어트리뷰션", "유저 생애 가치 예측". |
| CTAs | Direct, low-pressure. "데모 신청하기", "요금 확인하기", "자세히 보기". |
| Value claims | Evidence-first, scope-stated. "글로벌 스탠다드에 부합하는 MMP". |
| Pricing / FAQ | Calm and explanatory; decodes jargon. "MAU(월간 활성 유저)란 무엇인가요?". |

**Voice samples (verbatim from live surfaces):**
- "광고 성과 측정, AI로 완성하세요" — hero headline (outcome-framed capability). *(verified live 2026-06-26, airbridge.io/ko)*
- "감이 아닌 데이터를 근거로 의사결정하세요" — section heading (anti-guesswork positioning). *(verified live 2026-06-26)*
- "글로벌 스탠다드에 부합하는 MMP" — eyebrow claim (scope/credibility). *(verified live 2026-06-26)*
- "크로스 플랫폼 성과 측정도 AI로 완성하세요 | Airbridge" — page title meta. *(verified live 2026-06-26)*

**Forbidden register**: hype superlatives, fear-based marketing urgency, undefined martech jargon left unexplained, exclamation-heavy promotion. Numbers and scope claims are stated concretely (events, devices, RPM) rather than vaguely.

## 11. Brand Narrative

Airbridge (에어브릿지) is the flagship product of **AB180 (에이비일팔공)**, a Seoul-based martech/adtech company **founded in 2015** and led by co-founders **남성필 (Sungpil Nam)** and **정훈재 (Hunjae Jung)**. AB180's founding premise addressed a structural problem for app marketers: in a fragmented, cross-platform world (Android, iOS, SKAdNetwork, web, PC, console), there was no trustworthy, unified way to measure which marketing actually drove installs and revenue — leaving teams to decide "by gut feel."

Airbridge answers that as a **Mobile Measurement Partner (MMP)**: cross-platform attribution, deep-link management, ad-fraud prevention, and AI-driven LTV/funnel analysis in one platform. The system operates at serious scale — AB180's own engineering blog states it processes "10억 개 이상의 이벤트 데이터, 1억 대 이상의 디바이스, 100만 이상의 RPM" (1B+ events, 100M+ devices, 1M+ RPM in real time). The product line has since extended to Airflux (an AI monetization agent) and Airbridge DeepLink, and the company reports serving 600+ clients across 30+ countries (Nexon, Samsung Securities, Standard Chartered, KFC among them).

What Airbridge refuses, visible in its design: the loud, illustration-heavy consumer-marketing chrome, and the hand-wavy "growth hacking" hype of lesser martech. What it embraces: a dark, instrument-like canvas; a single decisive blue; Pretendard-set type that states capability plainly; and copy that replaces gut feel with evidence — "감이 아닌 데이터를 근거로." The brand reads as a precision tool built by engineers for marketers who think like analysts.

## 12. Principles

1. **Evidence over gut feel.** The product exists to replace guesswork with measurement. *UI implication:* lead with concrete data, scope, and numbers; the dark "control panel" canvas frames the product as an instrument, not a billboard.
2. **One decisive action.** Electric blue (`#155dfc`) means "do this." *UI implication:* reserve the saturated blue exclusively for the primary CTA so the next step is never ambiguous against the dark field.
3. **Plain capability, no hype.** Claims are stated, not inflated. *UI implication:* outcome-framed headlines and technical feature labels; never superlatives or urgency.
4. **Flat and fast.** Modern clarity beats decorative depth. *UI implication:* no drop shadows; separate with tone and translucent washes; keep the chrome light and quick to scan.
5. **Authority then legibility.** *UI implication:* a dark hero asserts seriousness; light commercial bands deliver legible pricing/comparison detail — a deliberate light/dark cadence.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Airbridge user segments (Korean app marketers, growth/performance teams, mobile analysts at game and commerce companies), not individual people.*

**박지훈, 33, 서울.** Performance marketing lead at a mobile game studio. Lives in attribution dashboards and needs cross-platform truth across iOS SKAN and Android. Chose Airbridge because it unified channels he previously stitched together by hand, letting him decide on data rather than gut feel.

**이서연, 29, 판교.** Growth analyst at a commerce app. Uses the funnel and LTV-prediction features to defend budget allocation to finance. Values that the product states scope and numbers plainly instead of selling her on hype.

**Marcus Lee, 38, Singapore.** Regional UA manager at a multinational app company evaluating MMPs. Compares Airbridge against AppsFlyer and Adjust; trusts the "글로벌 스탠다드에 부합하는 MMP" positioning because the comparison pages state mechanics rather than marketing claims.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no measurement data yet)** | Near-black canvas (`#0a0a0c`). Single near-white (`#fafafa`) line explaining no events have been received, with one blue (`#155dfc`) CTA to connect a source. No illustration clutter. |
| **Empty (report, zero rows)** | Muted Grey (`#98989f`) single line stating nothing matches the current filter; filter summary stays visible so scope can be adjusted. Honest, never "No data found". |
| **Loading (dashboard first paint)** | Skeleton blocks at final dimensions in dark zinc (`#18181b`), flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle blue (`#155dfc`) progress indicator; previous values stay visible. Never blank the panel during refresh. |
| **Error (data fetch failed)** | Inline message in near-white (`#fafafa`) with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (source connected)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | Dark zinc (`#18181b`) blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Muted Grey (`#98989f`) label on reduced-opacity surface; blue actions fade rather than turn grey to preserve the brand action read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, nav wash, focus ring |
| `motion-standard` | 200ms | Card/section reveal, segmented-tab switch, accordion |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, panels, accordion open |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, accordion close |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, tab switches |

**Motion rules**: Motion is functional and restrained — consistent with the flat, instrument-like aesthetic. Nav items respond to hover with a quick translucent-white wash; feature cards and report rows fade in from below at `motion-standard / ease-enter`; the pricing segmented toggle slides its active fill at `motion-standard / ease-standard`. No bounce or spring — a measurement product signals steadiness and precision, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on
https://www.airbridge.io/ko and https://www.airbridge.io/ko/pricing. The site
emits lab()/oklab() color values; these were converted to hex in-page via
canvas getImageData during the inspect (documented in .verification.md).
- Hero H1 "광고 성과 측정, AI로 완성하세요" — Pretendard Variable 72px / weight 600 / -1.08px / gradient text-fill (computed color transparent)
- Section H2 "사각지대 없는 데이터로 성과를 측정하세요" / "감이 아닌 데이터를 근거로 의사결정하세요" — 48px / 700 / -0.72px / color #fafafa
- Primary CTA "데모 신청하기" — bg #155dfc / text #fafafa / radius 8px / 48px height / soft blue focus ring
- Ghost CTA "요금 확인하기" — rgba(255,255,255,0.04) bg / 1px rgba(255,255,255,0.12) border / radius 8px
- Canvas bg #0a0a0c; dark feature card surface #18181b; light section #efefef with #020202 headings
- Inline link "자세히 보기" — color #0970ff; mint accent #7eedb8 in data highlights
- Page title meta: "크로스 플랫폼 성과 측정도 AI로 완성하세요 | Airbridge"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage and pricing page (hero H1,
section H2, eyebrow, page title meta).

Brand narrative (§11): AB180 (에이비일팔공), founded 2015, Seoul; co-founders
남성필 (Sungpil Nam) and 정훈재 (Hunjae Jung); Airbridge = MMP. Scale figures
("10억 개 이상의 이벤트 데이터, 1억 대 이상의 디바이스, 100만 이상의 RPM") quoted
from AB180's own engineering blog (engineering.ab180.co). Client list and
600+/30+ figures from public company sources (ab180.co); these are widely
documented public facts, not directly quoted Airbridge statements beyond the
engineering-blog scale figures.

Personas (§13) are fictional archetypes informed by publicly observable Airbridge
user segments (Korean app marketers, growth analysts, regional UA managers).
Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "evidence over gut feel", "instrument-like canvas as a
rejection of growth-hacking hype") are editorial readings connecting Airbridge's
observed design and copy to its positioning, not directly sourced AB180 statements.
-->

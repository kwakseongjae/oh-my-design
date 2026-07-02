---
id: qraft
name: Qraft Technologies
display_name_kr: 크래프트테크놀로지스
country: KR
category: fintech
homepage: "https://www.qraftec.com/"
primary_color: "#1033d4"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=qraftec.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live royal-blue brand accent (#1033d4, the 'Qraft Capital' highlight); the About page runs a blue-tint chip system (#2f67d6 / #234a93) plus an amber tint (#ffaf2a / #7a4600). Identity is predominantly monochrome — black hero canvas, white light sections, Helvetica Neue headings over an Inter display face."
  colors:
    primary: "#1033d4"
    accent-blue: "#2f67d6"
    accent-blue-text: "#234a93"
    ink: "#0e1420"
    ink-hairline: "#0f1218"
    quote: "#1b2230"
    dark-surface: "#0b0e14"
    slate: "#5d6573"
    body-ink: "#252525"
    black: "#000000"
    canvas: "#ffffff"
    cream: "#fbfaf7"
    surface: "#f5f5f5"
    surface-alt: "#e8eaed"
    grey: "#d9d9d9"
    amber: "#ffaf2a"
    amber-text: "#7a4600"
    on-primary: "#ffffff"
  typography:
    family: { display: "Inter", heading: "Helvetica Neue", body: "Arial" }
    hero:       { size: 87, weight: 600, lineHeight: 1.28, tracking: 0.87, use: "Hero headline, Inter — 'Transforming Investing with AI'" }
    section:    { size: 52, weight: 500, lineHeight: 1.28, use: "Section titles, Helvetica Neue — 'News Coverages', 'Milestone'" }
    subsection: { size: 28, weight: 500, lineHeight: 1.36, use: "Sub-section heads, Helvetica Neue" }
    subhead:    { size: 23, weight: 500, lineHeight: 1.37, use: "Hero support / secondary H2, Helvetica Neue" }
    lead:       { size: 20, weight: 400, lineHeight: 1.5, use: "About-page body lead, Inter" }
    eyebrow:    { size: 18, weight: 400, tracking: 1.44, use: "Eyebrow label, Inter, wide tracking" }
    nav:        { size: 17, weight: 400, use: "Top nav item, Arial" }
    button:     { size: 16, weight: 500, use: "CTA label, Inter" }
    body:       { size: 15, weight: 400, lineHeight: 1.52, use: "Body / news-quote text, Arial" }
    caption:    { size: 13, weight: 500, tracking: 0.27, use: "Skip link / footer caption, Helvetica Neue" }
  spacing: { xs: 4, sm: 8, md: 14, base: 16, lg: 18, xl: 32, xxl: 48, section: 80 }
  rounded: { sm: 2, md: 14, lg: 22, full: 999 }
  shadow:
    none: "none"
  components:
    button-outline: { type: button, bg: "transparent", fg: "#ffffff", border: "1px solid rgba(255,255,255,0.55)", radius: "14px", padding: "14px 18px", height: "60px", font: "16px / 500 Inter", use: "Ghost CTA on dark hero — Learn More, Explore roles, Discover our Businesses" }
    news-card: { type: card, bg: "#fbfaf7", fg: "#1b2230", border: "1px solid rgba(15,18,24,0.1)", radius: "16px", padding: "14px", use: "News-coverage card on light section (Barron's, media quotes)" }
    skip-pill: { type: button, bg: "#d9d9d9", fg: "#000000", border: "2px solid #d9d9d9", radius: "300px", padding: "16px 0", font: "13px / 500 Helvetica Neue", use: "Skip-to-content accessibility pill" }
    milestone-tag-blue: { type: badge, bg: "rgba(47,103,214,0.1)", fg: "#234a93", radius: "999px", font: "14px / 600", use: "Blue-tint milestone / category chip on the About page" }
    milestone-tag-amber: { type: badge, bg: "rgba(255,175,42,0.12)", fg: "#7a4600", radius: "999px", font: "14px / 600", use: "Amber-tint secondary milestone chip on the About page" }
    nav-link: { type: tab, fg: "#ffffff", font: "17px / 400 Arial", active: "text #d9d9d9 on scrolled header", use: "Top navigation item — About Us / News / Careers" }
    footer-link: { type: listItem, fg: "#d9d9d9", font: "13px / 700 Arial", use: "Footer link — Privacy Policies, Global Offices" }
  components_harvested: true
---

# Design System Inspiration of Qraft Technologies

## 1. Visual Theme & Atmosphere

Qraft Technologies (크래프트테크놀로지스) is a Seoul-headquartered AI-fintech that builds quantitative investment products — AI-managed ETFs, an AI hedge fund, and market-intelligence execution engines — and its homepage carries itself like an institutional research house that happens to be run by machine-learning engineers. The hero opens on a pure black canvas (`#000000`) with a single oversized Inter headline in white (`#ffffff`) — "Transforming Investing with AI" at 87px, weight 600 — set against near-empty space. There is no gradient, no illustration, no glow: just black, one line of type, and a quiet supporting sentence noting the company was founded in 2016 and backed by SoftBank Group. The register is confident and sparse, closer to a hedge fund's tear sheet than a consumer app.

The system runs on a deliberate two-face type pairing. **Inter** does the heavy display work — the 87px hero, the About-page hero, the outline CTAs — while **Helvetica Neue** carries the section architecture at 52px/500 for titles like "News Coverages" and "Milestone", stepping down through 28px sub-heads to a 13px caption. Body copy and navigation fall back to plain **Arial**, the workhorse of the underlying Squarespace chassis. The effect is corporate-Swiss: neutral grotesques, tight leading, almost no decorative flourish. Weight, not color, does the emphasis — 600 for the hero, 500 for headings, 400 for everything that merely informs.

Color is rationed to near-monochrome. The identity lives on black (`#000000`), white (`#ffffff`), a light institutional grey (`#d9d9d9`) for footer chrome and dividers, and a warm off-white cream (`#fbfaf7`) for the news-coverage cards. The one saturated brand hue is a royal blue — `#1033d4` — reserved for the "Qraft Capital" wordmark highlight, and it reappears as a tint system on the About page: blue chips (`#2f67d6` at low alpha with `#234a93` text) mark milestones, paired with an amber accent (`#ffaf2a` tint over `#7a4600` text) for a second category. Depth is almost entirely flat: live inspection returned `box-shadow: none` across the hero, nav, headings, and cards — separation comes from hairline borders (`rgba(15,18,24,0.1)`, i.e. `#0f1218` at 10%) and background shifts, never elevation.

**Key Characteristics:**
- Pure black (`#000000`) hero canvas with a single 87px Inter/600 white headline — institutional, sparse, no decoration
- Two-face type system: Inter for display, Helvetica Neue for section headings, Arial for body/nav
- Near-monochrome palette — black, white, grey (`#d9d9d9`), cream (`#fbfaf7`) — with weight, not color, carrying hierarchy
- One saturated brand accent: royal blue `#1033d4` (the "Qraft Capital" highlight)
- Blue-tint chip system on About (`#2f67d6` / `#234a93`) + an amber category tint (`#ffaf2a` / `#7a4600`)
- Flat depth: `box-shadow: none` everywhere; separation via `#0f1218`-alpha hairlines and surface tints
- Outline "ghost" CTAs on the dark hero — 1px translucent-white border, 14px radius, no fill
- Cool near-black inks (`#0e1420`, `#1b2230`) instead of pure black for extended reading text

## 2. Color Palette & Roles

### Primary / Brand
- **Qraft Royal Blue** (`#1033d4`): The single saturated brand accent, applied to the "Qraft Capital" wordmark highlight at weight 600. The system's one true color.
- **Accent Blue** (`#2f67d6`): Tint base for milestone/category chips on the About page (used at ~10-18% alpha over light surfaces).
- **Accent Blue Text** (`#234a93`): The deeper blue used for label text sitting inside the blue-tint chips.

### Neutral / Ink
- **Black** (`#000000`): The hero canvas and the default text color of the underlying chassis.
- **Ink** (`#0e1420`): Cool near-black used for About-page body headings and strong labels — the primary reading ink on light sections.
- **Ink Hairline** (`#0f1218`): The hairline/overlay base color — borders and dividers are this hue at low alpha (`rgba(15,18,24,0.1)`).
- **Quote Navy** (`#1b2230`): Slightly warmer near-black for news-quote body copy and card text.
- **Body Ink** (`#252525`): The About-page lead paragraph text color (rendered at ~90% alpha).
- **Slate** (`#5d6573`): Muted secondary text and metadata on light surfaces.

### Surface
- **Canvas** (`#ffffff`): Light-section background, card surfaces, and text on dark/blue.
- **Dark Surface** (`#0b0e14`): The near-black secondary surface used for dark content bands beneath the hero.
- **Cream** (`#fbfaf7`): Warm off-white background for the news-coverage cards.
- **Surface** (`#f5f5f5`): Neutral light-grey panel surface on the About page.
- **Surface Alt** (`#e8eaed`): Cooler light grey for the global-offices map / data panels.
- **Grey** (`#d9d9d9`): Footer text, the skip-to-content pill, and thin divider borders.

### Accent (secondary)
- **Amber** (`#ffaf2a`): Tint base for the second milestone-chip category on the About page (low alpha).
- **Amber Text** (`#7a4600`): The brown-amber label text inside the amber-tint chips.
- **On Primary** (`#ffffff`): White text placed on the royal-blue and dark surfaces.

## 3. Typography Rules

### Font Family
- **Display**: `Inter` (with `system-ui`, `-apple-system` fallbacks) — the hero headlines, eyebrow labels, body leads, and CTA labels.
- **Heading**: `Helvetica Neue` (with `Arial` fallback) — section titles, sub-heads, and captions.
- **Body**: `Arial` (Helvetica / sans-serif fallback) — navigation links, quote body copy, and footer text, inherited from the Squarespace chassis.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Hero | Inter | 87px (86.67 measured) | 600 | 1.28 (110.66px) | +0.87px | "Transforming Investing with AI" |
| Section Title | Helvetica Neue | 52px (51.96) | 500 | 1.28 (66.34px) | normal | "News Coverages", "Milestone" |
| Sub-section | Helvetica Neue | 28px (28.44) | 500 | 1.36 (38.54px) | normal | "Qraft Around the Globe" |
| Sub-head (H2) | Helvetica Neue | 23px (23.4) | 500 | 1.37 (32.1px) | normal | Hero support sentence |
| Body Lead | Inter | 20px | 400 | 1.5 | normal | About-page lead paragraph |
| Eyebrow | Inter | 18px | 400 | normal | +1.44px | Wide-tracked section label |
| Nav | Arial | 17px (16.68) | 400 | 1.8 | normal | Top navigation items |
| Button | Inter | 16px | 500 | 1.88 | normal | CTA label |
| Body | Arial | 15px (15.15) | 400 | 1.52 (23px) | normal | News-quote body text |
| Caption | Helvetica Neue | 13px (13.27) | 500 | normal | +0.27px | Skip link, footer text |

### Principles
- **Weight, not color, is the emphasis lever**: 600 for the hero, 500 for headings, 400 for everything informational. The monochrome palette forces hierarchy into the type weight.
- **Two grotesques, split by job**: Inter is the modern display/brand voice; Helvetica Neue is the neutral institutional heading voice. Arial is the utilitarian body inherited from the chassis. They do not swap roles.
- **Tight display leading**: the 87px hero runs at ~1.28 line-height with a faint positive tracking (+0.87px) — dense and monumental rather than airy.
- **Near-black inks for reading**: extended copy uses cool near-blacks (`#0e1420`, `#1b2230`) rather than pure `#000000`, which is reserved for the hero canvas and short labels.

## 4. Component Stylings

### Buttons

**Ghost CTA (Hero)**
- Background: transparent (`rgba(255,255,255,0.02)`)
- Text: `#ffffff`
- Border: 1px solid `rgba(255,255,255,0.55)`
- Radius: 14px
- Padding: 14px 18px
- Height: 60px
- Font: 16px / 500 / Inter
- Use: Primary hero call-to-action — "Learn More", "Explore roles", "Discover our Businesses"

**Skip-to-Content Pill**
- Background: `#d9d9d9`
- Text: `#000000`
- Border: 2px solid `#d9d9d9`
- Radius: 300px
- Padding: 16px 0
- Font: 13px / 500 / Helvetica Neue
- Use: Accessibility skip link, rendered as a full-round grey pill

### Inputs & Forms
- Background: `#ffffff`
- Border: 1px solid `#d9d9d9`
- Radius: 2px
- Text: `#0e1420`
- Use: Contact / careers form fields on light sections (minimal, hairline-bordered)

### Cards & Containers

**News-Coverage Card**
- Background: `#fbfaf7`
- Text: `#1b2230`
- Border: 1px solid `rgba(15,18,24,0.1)`
- Radius: 16px
- Padding: 14px
- Use: Media / press-coverage card on the light news section (Barron's, media quotes)

**Panel Surface**
- Background: `#f5f5f5`
- Text: `#0e1420`
- Radius: 22px
- Use: Data / milestone panel container on the About page

### Badges

**Milestone Chip (Blue)**
- Background: `rgba(47,103,214,0.1)`
- Text: `#234a93`
- Radius: 999px
- Font: 14px / 600
- Use: Blue-tint milestone / category chip on the About page

**Milestone Chip (Amber)**
- Background: `rgba(255,175,42,0.12)`
- Text: `#7a4600`
- Radius: 999px
- Font: 14px / 600
- Use: Amber-tint secondary milestone chip on the About page

### Navigation
- Background: transparent over black hero, `#ffffff` on scrolled light sections
- Text: `#ffffff` on dark, `#d9d9d9` on light
- Font: 17px / 400 / Arial
- Active: text shifts to `#d9d9d9` on the scrolled header
- Use: Top navigation — "About Us", "Businesses", "News", "Careers"

### Footer
- Background: `#000000`
- Links: `#d9d9d9`, 13px / 700 / Arial
- Use: Footer chrome — "Privacy Policies", "개인정보 처리방침", "View Our Global Offices", "© 2026 Qraft Technologies, Inc."

---

**Verified:** 2026-07-02
**Tier 1 sources:** https://www.qraftec.com/ (homepage, live computed style), https://www.qraftec.com/about-us (About page, live computed style — blue/amber tint chips), https://github.com/qraft-technologies (official GitHub org)
**Tier 2 sources:** getdesign.md/qraft — "No designs found for 'qraft'" (not listed); styles.refero.design/?q=qraft — no brand-specific entry (default gallery returned)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, stepping 4 / 8 / 14 / 16 / 18 / 32 / 48px with large ~80px section gaps
- Notable: the hero CTA lands at 14px 18px padding on a 60px pill; news cards use a tight 14px inset
- Sections breathe vertically — generous whitespace between the black hero and the white content bands

### Grid & Container
- Centered single-column hero anchored by the 87px Inter headline over black
- News coverage arranged as a grid of cream (`#fbfaf7`) cards with hairline borders
- About page alternates a black hero, a white body-lead band, and light-grey (`#f5f5f5`) milestone/office panels
- Global-offices section uses a cool grey (`#e8eaed`) map/data surface

### Whitespace Philosophy
- **Institutional restraint**: emptiness is the point — a black hero with one line of type reads as confidence, not as an unfinished page.
- **Flat segmentation**: sections separate by full-bleed background swaps (black → white → light grey), not by shadow or heavy rules.
- **Card rhythm**: repeated 16px-radius cream cards give the news section a calm, consistent cadence.

### Border Radius Scale
- Extra-small (2px): form fields, fine inner elements
- Medium (14px): hero ghost CTAs
- Card (16px): news / coverage cards
- Large (22px): panel containers
- Full (999px / 300px): skip pill, milestone chips, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Hero, nav, headings, most surfaces |
| Tint (Level 1) | Background swap (`#fbfaf7` / `#f5f5f5` / `#e8eaed`) | Section/card separation without elevation |
| Hairline (Level 2) | 1px solid `rgba(15,18,24,0.1)` (i.e. `#0f1218` @ 10%) | News-card and panel outlines, dividers |

**Shadow Philosophy**: Qraft is a near-shadowless, flat system. Live inspection returned `box-shadow: none` across the hero, navigation, headings, and news cards. Depth and grouping are communicated entirely through full-bleed background swaps (black `#000000` → white `#ffffff` → cream `#fbfaf7` / grey `#f5f5f5`) and thin `#0f1218`-alpha hairlines. This flat treatment reinforces the institutional-research tone: the interface reads like a printed tear sheet, not a stack of floating consumer cards. When the system needs emphasis it reaches for the royal blue (`#1033d4`) or a tinted chip, never elevation.

## 7. Do's and Don'ts

### Do
- Open on a pure black (`#000000`) canvas with a single large Inter/600 white headline
- Use Helvetica Neue at 52px/500 for section titles and Inter for the display hero
- Let weight (600 → 500 → 400) carry hierarchy — the palette stays near-monochrome
- Reserve royal blue (`#1033d4`) as the single saturated brand accent
- Use tinted chips — blue (`#2f67d6` / `#234a93`) and amber (`#ffaf2a` / `#7a4600`) — for milestone categories
- Keep depth flat: separate with background swaps and `#0f1218`-alpha hairlines, never drop shadows
- Use cream (`#fbfaf7`) cards with 16px radius for news / press coverage
- Use cool near-black inks (`#0e1420`, `#1b2230`) for extended reading text

### Don't
- Add gradients, glows, or illustration to the hero — the black-and-type sparseness is the identity
- Spread the royal blue across many elements — it is a single-highlight accent, not a UI fill
- Introduce drop shadows for elevation — Qraft is a flat, hairline-separated system
- Set body reading text in pure `#000000` — use `#0e1420` / `#1b2230` near-blacks
- Use a light or thin weight for the hero — the display headline is always Inter 600
- Mix in a third saturated hue — blue and the amber tint are the only chromatic accents
- Use heavy fills or bright buttons on the dark hero — CTAs are 1px translucent-white ghost outlines
- Swap the type roles — Inter is display, Helvetica Neue is headings, Arial is utilitarian body

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; hero headline compresses well below 87px; cards stack |
| Tablet | 640-1024px | Moderate padding; news cards go 2-up |
| Desktop | 1024-1440px | Full layout; centered hero; multi-column news / office grids |

### Touch Targets
- Hero ghost CTA at 60px height with 14px 18px padding — a comfortable tap target
- Nav links sit in a generously spaced top bar
- Milestone chips are full-round (999px) with adequate horizontal padding

### Collapsing Strategy
- Hero: the 87px Inter headline scales down substantially on mobile; weight 600 is preserved
- News grid: multi-column cream cards → 2-up → single stacked column
- Black hero and light content bands maintain full-width, full-bleed treatment
- Global-offices map/data panel reflows to a stacked list on narrow viewports

### Image Behavior
- Media logos and press thumbnails carry no shadow at any size, consistent with the flat system
- Cards maintain their 16px radius across breakpoints
- The black hero keeps its full-bleed dark treatment on all screen sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand accent: Qraft Royal Blue (`#1033d4`)
- Blue chip tint / text: `#2f67d6` / `#234a93`
- Amber chip tint / text: `#ffaf2a` / `#7a4600`
- Hero canvas / primary text: Black (`#000000`)
- Light canvas / on-dark text: White (`#ffffff`)
- Reading ink: `#0e1420` / `#1b2230`
- Muted text: Slate (`#5d6573`)
- Cream card: `#fbfaf7`
- Panel surfaces: `#f5f5f5` / `#e8eaed`
- Grey chrome / hairline base: `#d9d9d9` / `#0f1218`

### Example Component Prompts
- "Create a hero on a pure black (`#000000`) background. Single headline at 87px Inter weight 600, line-height 1.28, letter-spacing +0.87px, color #ffffff — 'Transforming Investing with AI'. Below it a 23px Helvetica Neue 500 support line in white. One ghost CTA: transparent fill, 1px solid rgba(255,255,255,0.55) border, #ffffff text, 14px radius, 14px 18px padding — 'Learn More'."
- "Design a news-coverage card: cream #fbfaf7 background, 1px solid rgba(15,18,24,0.1) hairline, 16px radius, 14px padding, no shadow. Quote text 15px Arial weight 400, color #1b2230."
- "Build a milestone chip row: full-round 999px chips. Blue variant — rgba(47,103,214,0.1) background, #234a93 text, 14px weight 600. Amber variant — rgba(255,175,42,0.12) background, #7a4600 text."
- "Create a section title in Helvetica Neue at 52px weight 500, color #0e1420 on a white background, with a light-grey #f5f5f5 panel (22px radius) beneath it."

### Iteration Guide
1. Start black-and-monochrome; let type weight (600 → 500 → 400) carry the hierarchy
2. Inter for the display hero, Helvetica Neue for section titles, Arial for body/nav
3. Royal blue (`#1033d4`) is the single accent — do not spread it
4. No shadows — separate with background swaps and `#0f1218`-alpha hairlines
5. Cream (`#fbfaf7`) 16px cards for news; light-grey (`#f5f5f5` / `#e8eaed`) panels for data
6. Ghost outline CTAs on dark; near-black inks (`#0e1420`, `#1b2230`) for reading text
7. Milestone chips are full-round with blue or amber tints

---

## 10. Voice & Tone

Qraft's voice is **precise, institutional, and quietly ambitious** — the register of a quantitative research desk, not a retail investing app. The hero states a thesis, not a slogan: "Transforming Investing with AI", immediately grounded by a factual support line ("Founded in 2016 and backed by SoftBank Group"). Copy leans on evidence — media citations, performance references, named investors — rather than hype. It treats the reader as an institutional allocator or sophisticated partner who wants proof, provenance, and mechanism, not excitement.

| Context | Tone |
|---|---|
| Hero headline | Thesis-declarative. "Transforming Investing with AI." Ambitious but not superlative. |
| Support / eyebrow lines | Factual and credentialing. "Founded in 2016 and backed by SoftBank Group." |
| Business descriptions | Mechanism-first. "AI-Enhanced Quantitative Investment Solutions", "Market Intelligence & Execution". |
| News / coverage | Third-party evidence, cited verbatim. Media quotes carry the persuasion. |
| CTAs | Understated and exploratory. "Learn More", "Discover our Businesses", "Explore roles". |
| Careers / About | Confident, globally framed (Seoul HQ, Tokyo / global offices), mission-anchored. |

**Voice samples (verbatim from live site, 2026-07-02):**
- "Transforming Investing with AI" — hero headline (thesis-framed). *(verified live 2026-07-02)*
- "Founded in 2016 and backed by SoftBank Group" — hero support line (credentialing). *(verified live 2026-07-02)*
- "We have been featured in leading global media" — news section head (third-party proof). *(verified live 2026-07-02)*

**Forbidden register**: retail-hype urgency ("get rich", "beat the market"), exclamation-heavy marketing, undefined buzzwords without mechanism, and any tone that undersells the institutional/research posture.

## 11. Brand Narrative

Qraft Technologies (크래프트테크놀로지스) was founded in **2016** and is a **Seoul-headquartered** AI-fintech company building quantitative investment products powered by machine learning. Its stated purpose — captured in the homepage thesis "Transforming Investing with AI" — is to replace human discretionary bias in asset management with data-driven, AI-managed strategies: AI-enhanced ETFs, an AI hedge fund, and market-intelligence and order-execution engines. The About page describes the firm as running on "large-scale data pipelines and a high-performance" research infrastructure, positioning it as an engineering company operating inside financial markets rather than a traditional asset manager adopting software.

The credibility spine of the narrative is external and evidentiary. The homepage foregrounds that Qraft is **backed by SoftBank Group** — a 2019 US$146M investment — and dedicates a "News Coverages" section to being "featured in leading global media", citing outlets such as Barron's. The brand builds trust the way a research house does: through named investors, media citations, and performance references, not through consumer-facing promises.

What Qraft's design refuses is the visual language of retail finance — no green up-arrows, no celebratory gradients, no gamified urgency. What it embraces is institutional restraint: a black-and-monochrome canvas, neutral grotesque type (Inter and Helvetica Neue), flat hairline-separated layouts, and a single disciplined royal-blue accent. The aesthetic signals that the product is infrastructure for serious capital, engineered and evidence-led.

*(Company facts — 2016 founding, Seoul HQ, SoftBank backing, AI-quant product lines — are drawn from the live homepage and About page inspected 2026-07-02; see `.verification.md`.)*

## 12. Principles

1. **Evidence over enthusiasm.** Qraft persuades with citations, named backers, and performance, not adjectives. *UI implication:* give press coverage and data real estate; keep marketing copy factual and mechanism-first.
2. **Monochrome discipline, one accent.** The identity is black, white, and grey with a single royal blue. *UI implication:* reserve `#1033d4` for one highlight per view; let type weight, not color, carry emphasis.
3. **Flat, like a tear sheet.** Depth is background swaps and hairlines, never shadow. *UI implication:* separate sections with full-bleed color changes and `#0f1218`-alpha borders; avoid card elevation.
4. **Engineered, not decorated.** Neutral grotesques and sparse layouts read as engineering rigor. *UI implication:* prefer Inter/Helvetica Neue, tight leading, and empty space over illustration or ornament.
5. **Institutional, global posture.** Seoul HQ with global offices, SoftBank-backed. *UI implication:* copy and structure should read for an allocator/partner audience — credible, calm, internationally framed.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Qraft audience segments (institutional allocators, ETF/asset-management partners, quant-finance engineers), not individual people.*

**서지훈, 41, 서울.** A pension-fund portfolio strategist evaluating AI-managed ETF exposure. Distrusts marketing and reads the "News Coverages" and performance sections first. Trusts Qraft because the tone is evidentiary and the backers (SoftBank) are named — it reads like a research house, not a fintech app.

**Kenji Watanabe, 38, Tokyo.** A partnerships lead at a Japanese asset manager exploring Qraft's execution/market-intelligence engine. Values the global-office footprint and the calm, institutional presentation; would be put off by any retail-hype urgency.

**Dana Cho, 29, Seoul.** A quant-finance engineer considering a role at Qraft. Reads the black, engineered aesthetic as a signal of technical seriousness. Cares that the company frames itself as data-pipeline infrastructure, and browses the GitHub org before applying.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no coverage / no results)** | White canvas, a single `#0e1420` line explaining nothing to show yet, with one royal-blue (`#1033d4`) link to related content. No illustration. |
| **Empty (list, none saved)** | Slate (`#5d6573`) single line stating the list is empty, plus a calm path back. Understated. |
| **Loading (content fetch)** | Flat skeleton blocks on `#f5f5f5` at final card dimensions, 16px radius. No shadow shimmer — a quiet pulse consistent with the flat system. |
| **Loading (in-place refresh)** | Existing content stays visible; a thin `#1033d4` progress hint appears rather than blocking the view. |
| **Error (fetch failed)** | Inline message in `#0e1420` with a plain-language explanation and a retry link. No generic error alone; state what to do next. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "required". |
| **Success (form submitted)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f5f5f5` / `#e8eaed` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Grey (`#d9d9d9`) text on a reduced-opacity surface; the royal-blue accent fades rather than switching to a different hue. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, link underline |
| `motion-standard` | 220ms | Nav reveal, card/section fade-in, dropdown |
| `motion-slow` | 360ms | Hero reveal, page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sections, cards, nav |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is restrained and functional, matching the institutional tone. The hero and section content fade/slide up subtly at `motion-standard / ease-enter`; ghost CTAs shift border and background opacity on hover at `motion-fast`. No bounce, spring, or overshoot — a quantitative-investing brand signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the interface remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on
https://www.qraftec.com/ and https://www.qraftec.com/about-us:
- Hero H1 "Transforming Investing with AI" — Inter 86.67px / 600 / +0.87px / rgb(255,255,255) on black
- Hero H2 "Founded in 2016 and backed by SoftBank Group" — Helvetica Neue 23.4px / 500 / white
- "News Coverages" / "Milestone" section H1 — Helvetica Neue 51.96px / 500 / rgb(0,0,0)
- "We have been featured in leading global media" — H3 Helvetica Neue 28.44px / 500
- Ghost CTA "Learn More" — bg rgba(255,255,255,0.02) / border 1px rgba(255,255,255,0.55) / radius 14px / Inter 16px/500 / 60px
- News card (Barron's) — bg rgb(251,250,247) #fbfaf7 / border 1px rgba(15,18,24,0.1) / radius 16px
- "Qraft Capital" highlight — color rgb(16,51,212) #1033d4 / weight 600
- About body "Qraft Technologies is a Seoul-headquartered..." — Inter 20px / rgba(37,37,37,0.9)
- About milestone chips — blue rgba(47,103,214,0.1) / text rgb(35,74,147) #234a93; amber rgba(255,175,42,0.12) / text rgb(122,70,0) #7a4600
- box-shadow: none across hero/nav/headings/cards (flat system)

Voice samples (§10) are verbatim from the live homepage (hero H1, hero H2, news head).

Brand narrative (§11): 2016 founding, Seoul HQ, SoftBank Group backing, and the
AI-quant product lines (AI-enhanced ETFs, AI hedge fund, market-intelligence &
execution) are drawn from the live homepage and About page inspected this turn.
Specific figures beyond what the pages state are general public knowledge, not
directly quoted from a verified Qraft statement.

Personas (§13) are fictional archetypes informed by publicly observable Qraft
audience segments (institutional allocators, asset-management partners, quant
engineers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "flat, like a tear sheet", "evidence over enthusiasm")
are editorial readings connecting Qraft's observed design to its institutional
positioning, not directly sourced Qraft statements.
-->

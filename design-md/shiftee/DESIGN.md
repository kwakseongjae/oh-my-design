---
id: shiftee
name: Shiftee
display_name_kr: 시프티
country: KR
category: saas
homepage: "https://shiftee.io"
primary_color: "#004dc1"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=shiftee.io&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = filled-CTA action blue (#004dc1) on all Free-trial / Contact-Us buttons; hero band is a deep corporate navy (#0a2864) with white type; brighter blues (#0069ed, #0575e6) appear in product/illustration accents. Inter / Noto Sans KR type system, near-square 3px button radius."
  colors:
    primary: "#004dc1"
    primary-bright: "#0069ed"
    blue-mid: "#0575e6"
    blue-deep: "#074499"
    navy: "#0a2864"
    ink-footer: "#13192d"
    dark-chip: "#35343c"
    ink: "#212529"
    heading: "#1e1f21"
    muted: "#495057"
    faint: "#969faa"
    soft-blue: "#dcedfd"
    tint: "#edf6fe"
    surface: "#f4f7fb"
    hairline: "#ced4da"
    canvas: "#ffffff"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Inter", krfallback: "Noto Sans KR" }
    display-hero: { size: 58, weight: 700, lineHeight: 1.36, tracking: -0.4, use: "Hero H1, Inter Bold on navy" }
    section:      { size: 40, weight: 700, lineHeight: 1.30, tracking: -0.4, use: "Section H2 titles" }
    subsection:   { size: 32, weight: 700, lineHeight: 1.20, tracking: -0.4, use: "Card / feature H3 heads" }
    body:         { size: 15, weight: 400, lineHeight: 1.50, use: "Standard reading text, Inter" }
    nav:          { size: 15, weight: 500, lineHeight: 1.50, use: "Top nav menu items" }
    button:       { size: 14, weight: 600, lineHeight: 1.50, use: "Primary CTA label" }
    label-sm:     { size: 12, weight: 500, lineHeight: 1.50, use: "Eyebrow / utility labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 28, xxl: 48, section: 64 }
  rounded: { sharp: 2, button: 3, base: 4, card: 8, full: 9999 }
  shadow:
    card-soft: "rgba(159, 176, 199, 0.3) 0px 8px 13px 0px"
    elevated: "rgba(54, 55, 61, 0.1) 0px 8px 24px 0px"
    elevated-strong: "rgba(54, 55, 61, 0.25) 0px 8px 24px 0px"
  components:
    button-primary: { type: button, bg: "#004dc1", fg: "#ffffff", radius: "3px", padding: "14px 25px", height: "44px", font: "14px / 600", border: "1px solid #004dc1", use: "Primary CTA — Free trial / Contact Us" }
    button-inverted: { type: button, bg: "#ffffff", fg: "#004dc1", radius: "2px", padding: "15px 45px", font: "15px / 600", use: "Inverted CTA on navy/blue band, elevated-strong shadow" }
    button-ghost: { type: button, fg: "#ffffff", radius: "3px", padding: "14px 25px", font: "14px / 600", use: "Ghost CTA on hero — 1px solid rgba(255,255,255,0.2) border, 20% white fill" }
    button-dark: { type: button, bg: "#35343c", fg: "#ffffff", radius: "3px", padding: "14px 25px", font: "14px / 600", use: "Dark alternate CTA on pricing tiers" }
    button-soft: { type: button, bg: "#dcedfd", fg: "#004dc1", radius: "5px", padding: "16px", font: "16px / 700", use: "Soft-blue secondary action / All-Features expander" }
    card-pricing: { type: card, bg: "#ffffff", radius: "8px", padding: "16px", font: "15px / 400", use: "Pricing / feature card, card-soft shadow" }
    card-feature: { type: card, bg: "#f4f7fb", radius: "4px", use: "Tinted feature block on grey surface" }
    input-text: { type: input, bg: "#ffffff", fg: "#495057", border: "1px solid #ced4da", radius: "4px", padding: "6px 12px", height: "38px", font: "16px / 400", use: "Form text input" }
    nav-link: { type: tab, fg: "#1e1f21", font: "15px / 500", active: "text #004dc1", use: "Top nav menu item" }
  components_harvested: true
---

# Design System Inspiration of Shiftee

## 1. Visual Theme & Atmosphere

Shiftee (시프티) is a Korean workforce-management SaaS — scheduling, attendance, leave, and payroll for over 300,000 businesses across 30+ countries — and its marketing surface reads exactly like the product promises to be: orderly, dependable, and quietly corporate. The page is built on a clean white canvas (`#ffffff`) broken by cool-grey content bands (`#f4f7fb`), with a single dramatic anchor: a deep corporate navy hero (`#0a2864`) carrying the white 58px Bold headline "Empower Your Workforce, Shiftee." The effect is enterprise-trustworthy without being cold — the navy gives gravity, the white space keeps it breathable, and the blue accents keep it modern rather than institutional.

The typographic system is the de-facto modern Korean-SaaS stack: **Inter** for Latin paired with **Noto Sans KR** for hangul, set at body 15px / weight 400 / line-height 1.5 in near-black ink (`#212529`). Headlines run Inter Bold (700) at a tight, descending scale — 58px hero, 40px section H2, 32px feature H3 — every one carrying a consistent `-0.4px` letter-spacing that tightens the type into confident, engineered blocks. Section headings sit in a slightly different near-black (`#1e1f21`) from body ink, a subtle two-tone discipline. There is no display-weight flourish and no script personality; the restraint *is* the brand voice — this is software that runs a payroll, not a lifestyle app.

Blue is the entire interactive language, and Shiftee runs a deliberate ladder of it. The workhorse action color is a deep, saturated `#004dc1` — every "Free trial" and "Contact Us" button is a filled `#004dc1` rectangle with white text — while brighter blues (`#0069ed`, mid `#0575e6`) and a deep `#074499` appear in product chrome, illustration, and gradient accents, and a pale `#dcedfd` / `#edf6fe` tint carries soft secondary surfaces. Geometry is decidedly square: buttons round to a barely-there ~3px, cards to 4–8px, nothing approaches a pill. Depth is gentle and grey-blue tinted — the signature card lift is `rgba(159, 176, 199, 0.3) 0px 8px 13px`, with heavier `rgba(54, 55, 61, 0.1)` and `rgba(54, 55, 61, 0.25)` shadows on floating CTAs. Dark UI moments (a `#35343c` alternate button, the `#13192d` footer ink) and muted greys (`#495057`, faint `#969faa`) round out a palette that reads, top to bottom, as competent B2B software.

**Key Characteristics:**
- Inter + Noto Sans KR type system — Latin/hangul pairing at body 15px / 400 / line-height 1.5
- Inter Bold (700) headlines on a tight descending scale (58 → 40 → 32px), uniform `-0.4px` tracking
- Deep corporate navy hero band (`#0a2864`) with white type as the single dramatic anchor
- Action blue `#004dc1` reserved for every filled CTA — the system's one "do this" color
- Blue ladder for product chrome: `#0069ed`, `#0575e6`, deep `#074499`, pale `#dcedfd` / `#edf6fe`
- Near-square geometry — ~3px buttons, 4–8px cards, zero pills
- Grey-blue tinted soft shadows (`rgba(159, 176, 199, 0.3) 0px 8px 13px`) for gentle elevation
- Near-black ink ladder (`#212529` body, `#1e1f21` heads, `#495057` muted, `#969faa` faint) on white / grey (`#f4f7fb`) surfaces

## 2. Color Palette & Roles

### Primary / Action
- **Action Blue** (`#004dc1`): The primary interactive color and CTA background. Every "Free trial" and "Contact Us" button is a filled `#004dc1` rectangle; it is also the link/accent text color on white surfaces. The system's single "do this" signal.
- **Bright Blue** (`#0069ed`): A brighter, more saturated brand blue used in product chrome, accents, and gradient bands.
- **Blue Mid** (`#0575e6`): Mid-tone blue for illustration fills, highlighted card tops, and decorative accents.
- **Blue Deep** (`#074499`): A deep blue used in gradient shading and darker accent zones beneath the action blue.

### Navy & Dark
- **Corporate Navy** (`#0a2864`): The deep hero-band background — white type sits on it. The system's gravity color, signalling enterprise trust.
- **Footer Ink** (`#13192d`): Near-black blue-ink for the footer and deepest dark sections.
- **Dark Chip** (`#35343c`): A warm near-black used for the dark alternate CTA on pricing tiers.

### Text Hierarchy
- **Body Ink** (`#212529`): Primary body text on white — a near-black with a faint warm cast, never pure black.
- **Heading Ink** (`#1e1f21`): Section and feature heading color — a marginally darker, cooler near-black than body, a subtle two-tone discipline.
- **Muted Slate** (`#495057`): Secondary text, input values, captions, and metadata.
- **Faint Grey** (`#969faa`): Lowest-emphasis labels, placeholders, and disabled text.

### Surface & Border
- **Pure White** (`#ffffff`): Page background, card surfaces, and text on navy/blue.
- **Surface Grey** (`#f4f7fb`): Cool-grey tinted band for alternating sections and feature blocks.
- **Soft Blue** (`#dcedfd`): Pale blue fill for soft secondary buttons and the All-Features expander.
- **Blue Tint** (`#edf6fe`): The palest blue wash for subtle highlighted surfaces.
- **Hairline** (`#ced4da`): Input borders, dividers, and thin outlines.

### On-Color
- **On Primary** (`#ffffff`): White text on the action blue, navy, and dark chips.

## 3. Typography Rules

### Font Family
- **Latin**: `Inter` — the document default for all Latin text, headings, and UI labels.
- **Korean**: `Noto Sans KR` — hangul fallback in the same stack, used across the `/ko` surface.
- **Stack**: `inter, "Noto Sans KR", sans-serif` (verbatim from live `font-family`).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | 58px (3.63rem) | 700 | 1.36 (78.88px) | -0.4px | Hero H1 on navy, white |
| Section Heading | Inter | 40px (2.50rem) | 700 | 1.30 (52px) | -0.4px | Section H2 titles |
| Feature Heading | Inter | 32px (2.00rem) | 700 | normal | -0.4px | Card / feature H3 heads |
| Nav Link | Inter | 15px (0.94rem) | 500 | 1.50 | normal | Top nav menu items |
| Body | Inter | 15px (0.94rem) | 400 | 1.50 (22.5px) | normal | Standard reading text |
| Button | Inter | 14px (0.88rem) | 600 | 1.50 | normal | Primary CTA label |
| Label Small | Inter | 12px (0.75rem) | 500 | 1.50 | normal | Eyebrow / utility labels |

### Principles
- **Two-script, one family feel**: Inter for Latin and Noto Sans KR for hangul are tuned to read as one coherent voice across `/en` and `/ko`.
- **Bold heads, regular body**: All headlines are Inter Bold (700); all paragraphs are weight 400. Weight, not color, carries primary hierarchy.
- **Uniform tight tracking on heads**: Every headline level holds `-0.4px` letter-spacing — a flat, engineered tracking rather than a size-scaled one.
- **Two-tone ink discipline**: Body sits at `#212529`, headings at `#1e1f21` — a barely-perceptible split that keeps headings crisp.
- **Hangul-comfortable body**: 15px / line-height 1.5 gives dense Korean text room to breathe in information-rich B2B layouts.

## 4. Component Stylings

### Buttons

**Primary (Free trial / Contact Us)**
- Background: `#004dc1`
- Text: `#ffffff`
- Radius: 3px
- Padding: 14px 25px
- Height: 44px
- Border: 1px solid `#004dc1`
- Font: 14px Inter weight 600
- Use: Primary CTA across marketing and pricing — the system's single filled action

**Inverted (on navy/blue band)**
- Background: `#ffffff`
- Text: `#004dc1`
- Radius: 2px
- Padding: 15px 45px
- Height: 47px
- Border: 1px solid `#ffffff`
- Font: 15px Inter weight 600
- Shadow: `rgba(54, 55, 61, 0.25) 0px 8px 24px`
- Use: White CTA reversed out of the navy hero / blue closing band

**Ghost (on hero)**
- Background: `rgba(255,255,255,0.2)`
- Text: `#ffffff`
- Radius: 3px
- Padding: 14px 25px
- Height: 44px
- Border: 1px solid `rgba(255,255,255,0.2)`
- Font: 14px Inter weight 600
- Use: Secondary CTA on the navy hero — translucent white fill

**Dark Alternate**
- Background: `#35343c`
- Text: `#ffffff`
- Radius: 3px
- Padding: 14px 25px
- Height: 44px
- Font: 14px Inter weight 600
- Use: Dark alternate CTA on a pricing tier

**Soft Blue (All Features)**
- Background: `#dcedfd`
- Text: `#004dc1`
- Radius: 5px
- Padding: 16px
- Font: 16px Inter weight 700
- Use: Soft secondary action / All-Features expander on pricing cards

### Inputs & Forms

**Default**
- Background: `#ffffff`
- Text: `#495057`
- Border: 1px solid `#ced4da`
- Radius: 4px
- Padding: 6px 12px
- Height: 38px
- Font: 16px Inter
- Use: Form text input

### Cards & Containers

**Pricing / Feature Card**
- Background: `#ffffff`
- Radius: 8px
- Padding: 16px
- Shadow: `rgba(159, 176, 199, 0.3) 0px 8px 13px`
- Use: Pricing tier and feature cards on white

**Tinted Feature Block**
- Background: `#f4f7fb`
- Radius: 4px
- Use: Feature block sitting on the cool-grey surface band

### Navigation

**Top Nav**
- Background: `#ffffff`
- Text: `#1e1f21`
- Font: 15px Inter weight 500
- Active: `#004dc1` text on the active item
- Use: Horizontal top nav ("Company", "Schedule", "Attendance", "Pricing")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://shiftee.io/en, https://shiftee.io/en/pricing, https://shiftee.io/ko/blog
**Tier 2 sources:** getdesign.md/shiftee — not listed (404); styles.refero.design — not listed
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px (4px sub-step)
- Scale: 4px, 8px, 12px, 16px, 24px, 28px, 48px, 64px
- Notable: button padding lands at 14px × 25px; section rhythm runs to 48–64px between bands

### Grid & Container
- Centered max-width container with a 12-column Bootstrap-style row/col grid (`.container` / `.row` / `.col-12` observed live)
- Navy hero band anchors the page, white CTA(s) reversed out of it
- Alternating full-width bands: white (`#ffffff`) and cool-grey (`#f4f7fb`)
- Feature sections use 2–4 column card grids; pricing uses side-by-side tier cards

### Whitespace Philosophy
- **Breathing enterprise layout**: generous vertical rhythm keeps a feature-dense B2B product from feeling cramped.
- **Band segmentation**: sections separate by background (white vs `#f4f7fb` tint vs navy `#0a2864`), not heavy borders.
- **Anchor-and-rest**: one dramatic navy anchor per page; everything else rests on calm white/grey.

### Border Radius Scale
- Sharp (2px): inverted hero button
- Button (3px): standard filled/ghost/dark buttons
- Base (4px): inputs, tinted feature blocks
- Card (8px): pricing and feature cards
- Full (9999px): rare — avatars / status dots only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most sections |
| Tint (Level 1) | `#f4f7fb` background shift | Section/band separation without elevation |
| Card (Level 2) | `rgba(159, 176, 199, 0.3) 0px 8px 13px` | Pricing / feature card lift |
| Elevated (Level 3) | `rgba(54, 55, 61, 0.1) 0px 8px 24px` | Floating panels, hover lift |
| Floating CTA (Level 4) | `rgba(54, 55, 61, 0.25) 0px 8px 24px` | White CTA reversed on navy/blue band |

**Shadow Philosophy**: Shiftee's elevation is soft and grey-blue tinted, never black. The signature card shadow `rgba(159, 176, 199, 0.3) 0px 8px 13px` is a cool slate-blue that echoes the palette rather than dropping a hard contrast shadow. Heavier shadows (`rgba(54, 55, 61, 0.1)` and `rgba(54, 55, 61, 0.25)`) appear only on floating CTAs that reverse out of the navy/blue bands, where extra separation earns its keep. Most of the page is flat — depth is reserved for cards and CTAs, and section separation is done with the `#f4f7fb` tint instead.

## 7. Do's and Don'ts

### Do
- Use Inter + Noto Sans KR as one type system — body 15px / 400 / line-height 1.5
- Set every headline in Inter Bold (700) with `-0.4px` tracking
- Reserve action blue (`#004dc1`) for filled CTAs — keep it the one "do this" color
- Anchor a page with the deep navy band (`#0a2864`) and reverse white type/CTAs out of it
- Use near-square geometry — ~3px buttons, 4–8px cards
- Separate sections with the `#f4f7fb` grey tint, not heavy borders
- Use the soft grey-blue card shadow (`rgba(159, 176, 199, 0.3) 0px 8px 13px`) for gentle lift
- Use near-black ink (`#212529` body, `#1e1f21` heads) instead of pure black

### Don't
- Don't use pill or large-radius shapes — Shiftee geometry is near-square
- Don't spread action blue (`#004dc1`) onto non-actions — it dilutes the CTA signal
- Don't use black drop shadows — elevation is grey-blue tinted
- Don't set headlines in a light weight — display is always Bold (700)
- Don't use pure black (`#000000`) for body text — use `#212529`
- Don't add a second saturated accent hue — blue is the only brand color
- Don't introduce positive letter-spacing on headlines — tracking is a flat `-0.4px`
- Don't over-elevate — most surfaces are flat; reserve shadow for cards and floating CTAs

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, hero headline compresses, nav collapses to hamburger |
| Tablet | 768-1024px | 2-column feature/card grids, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column feature grids, side-by-side pricing |

### Touch Targets
- Primary buttons at 44px height with 14px × 25px padding — comfortably tappable
- Inputs at 38px height
- Nav items spaced for touch within the top header

### Collapsing Strategy
- Hero: 58px Inter headline scales down on mobile, weight 700 maintained
- Feature grids: multi-column → stacked single column
- Pricing tiers: side-by-side → stacked cards
- Navy / white / grey bands maintain full-width treatment at every size

### Image Behavior
- Product screenshots and illustrations keep the soft grey-blue card shadow at all sizes
- Cards maintain their 4–8px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Action Blue (`#004dc1`)
- Brand accents: Bright Blue (`#0069ed`), Blue Mid (`#0575e6`), Blue Deep (`#074499`)
- Hero anchor: Corporate Navy (`#0a2864`)
- Footer ink: `#13192d`; dark button: `#35343c`
- Body text: `#212529`; heading text: `#1e1f21`
- Muted text: `#495057`; faint: `#969faa`
- Background: White (`#ffffff`); tinted band: Surface Grey (`#f4f7fb`)
- Soft blue fill: `#dcedfd`; blue tint: `#edf6fe`
- Hairline / input border: `#ced4da`

### Example Component Prompts
- "Create a hero on deep navy `#0a2864`. Headline at 58px Inter weight 700, line-height 1.36, letter-spacing -0.4px, white. Two CTAs: a translucent ghost button (rgba(255,255,255,0.2) fill, 1px white border, 3px radius, white 14px/600) and a white inverted button (#ffffff bg, #004dc1 text, 2px radius, 15px/600, shadow rgba(54,55,61,0.25) 0px 8px 24px)."
- "Design a pricing card: white background, 8px radius, 16px padding, shadow rgba(159,176,199,0.3) 0px 8px 13px. Title 32px Inter weight 700, -0.4px, #1e1f21. Primary CTA: #004dc1 fill, white text, 3px radius, 14px 25px padding, 14px/600."
- "Build a tinted feature band: #f4f7fb background, full-width. Section title 40px Inter weight 700, -0.4px, #1e1f21. Body 15px Inter weight 400, line-height 1.5, #212529. Cards inside use white #ffffff with 8px radius."
- "Create a form input: white background, 1px solid #ced4da border, 4px radius, 6px 12px padding, 38px height, #495057 text at 16px."

### Iteration Guide
1. Inter Bold (700) for every headline; Inter 400 for every paragraph; -0.4px tracking on heads
2. Action blue (`#004dc1`) is the single CTA color — don't spread it
3. Near-square geometry — ~3px buttons, 4–8px cards, no pills
4. One navy (`#0a2864`) anchor per page; reverse white type/CTAs out of it
5. Separate bands with `#f4f7fb` tint; keep most surfaces flat
6. Grey-blue card shadow `rgba(159,176,199,0.3) 0px 8px 13px` for gentle lift
7. Body ink `#212529`, heading ink `#1e1f21` — never pure black

---

## 10. Voice & Tone

Shiftee's voice is **clear, capable, and reassuring** — a B2B operations partner that speaks plainly about getting work managed. The English hero "Empower Your Workforce, Shiftee" and the closing "Empower your HR now." set the register: benefit-framed, action-oriented, zero hype. The Korean surface mirrors it exactly — "기업의 도약을 위한 솔루션, Shiftee" ("A solution for your company's leap forward") — confident and corporate without being stiff. Copy speaks to HR managers and operators as competent professionals: it names the capability ("Sophisticated Scheduling", "Automated T&A Management") and backs it with scale ("More than 300,000 businesses worldwide use Shiftee").

| Context | Tone |
|---|---|
| Hero headlines | Benefit-framed, declarative. "Empower Your Workforce, Shiftee." Confident, not hype. |
| Feature headings | Capability-named. "Sophisticated Scheduling", "Automated T&A Management", "Easy Leave Management". |
| CTAs | Direct, low-friction. "Free trial", "Contact Sales", "Contact Us". |
| Trust / scale copy | Concrete numbers. "More than 300,000 businesses", "used in 30+ countries". |
| Korean register | Professional-warm. "기업의 도약을 위한 솔루션", "인력관리에 필요한 모든 기능". |

**Voice samples (verbatim from live surfaces):**
- "Empower Your Workforce, Shiftee" — EN hero H1. *(verified live 2026-06-26)*
- "Everything You Need for Workforce Management" — EN section H2. *(verified live 2026-06-26)*
- "More than 300,000 businesses worldwide use Shiftee" — EN trust H2. *(verified live 2026-06-26)*
- "기업의 도약을 위한 솔루션, Shiftee" — KO hero H1. *(verified live 2026-06-26)*
- "전 세계 300,000+ 기업과 사업장에서 시프티와 함께 더 나은 근무환경을 만듭니다." — KO trust H2. *(verified live 2026-06-26)*

**Forbidden register**: hype superlatives ("revolutionary", "game-changing"), fear-based HR-compliance scare copy, undefined jargon, exclamation-heavy marketing.

## 11. Brand Narrative

Shiftee (시프티) is a Korean workforce-management software company — **Shiftee Inc. / 주식회사 시프티**, headquartered in Seoul — built around a single operational pain point: managing shift-based and office workforces (scheduling, attendance, leave, requests, and payroll) was fragmented across spreadsheets, paper, and disconnected tools. Shiftee's premise is to consolidate the entire employee work cycle into one integrated platform — the homepage frames it as "Everything You Need for Workforce Management" and, in Korean, "인력관리에 필요한 모든 기능" ("all the features you need for workforce management").

The product has grown into an internationally used HR/workforce platform: the site states it is used by **more than 300,000 businesses** and is "Leading HR Software used in 30+ countries." Its module set — Schedule, Attendance (T&A), Leave, Workflow, Message, Electronic Signature, Report & Analytics, and Integration, plus a Desktop (PC-OFF) client and mobile apps — reflects an end-to-end positioning: from drawing up a shift plan to running the payroll report at month's end.

What Shiftee's design refuses, visible in its surface: the heavy, ornamental chrome of legacy enterprise HR suites and the playful consumer-app aesthetic that would undercut trust. What it embraces: a calm enterprise-blue palette anchored by a single deep-navy hero, the dependable Inter + Noto Sans KR type system, near-square geometry, and benefit-first copy that respects the HR professional's time. The brand reads as steady infrastructure for the operational backbone of a company.

## 12. Principles

1. **One platform, one work cycle.** Shiftee consolidates scheduling → attendance → leave → payroll into one system. *UI implication:* modules share one consistent component language so the whole cycle feels like a single product, not a bundle.
2. **One action, one blue.** Action blue (`#004dc1`) means "do this." *UI implication:* reserve the saturated blue for filled CTAs so the next step is never ambiguous.
3. **Trust through restraint.** Enterprise software earns trust by being calm and legible, not flashy. *UI implication:* near-square geometry, near-black ink, soft tinted shadows — nothing decorative for its own sake.
4. **Anchor, then rest.** One dramatic navy (`#0a2864`) anchor per page; everything else rests on white and `#f4f7fb` grey. *UI implication:* don't compete the page with multiple loud bands.
5. **Bilingual parity.** EN and KO surfaces carry the same structure, scale, and voice. *UI implication:* Inter and Noto Sans KR are tuned to read as one system; layouts must hold for both scripts.
6. **Capability over adjectives.** Name the feature ("Automated T&A Management"), back it with scale (300,000+ businesses). *UI implication:* copy leads with the concrete job done, not superlatives.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Shiftee user segments (HR managers, operations leads, and shift-based business owners), not individual people.*

**박민서, 38, 서울.** HR manager at a 400-person retail chain. Runs monthly shift plans and payroll across dozens of stores. Chose Shiftee because scheduling, attendance, and the payroll report finally live in one platform instead of a stack of spreadsheets. Values that the interface is calm and legible during a stressful month-end close.

**James Okafor, 45, Singapore.** Operations director at a regional logistics firm using Shiftee across multiple countries. Cares that the product is "used in 30+ countries" and that the English and local-language surfaces behave identically. Trusts the enterprise-blue, no-nonsense design more than a flashier competitor.

**이수아, 31, 경기.** Cafe-franchise owner managing part-time staff schedules and leave requests from her phone. Appreciates the mobile app and the low-friction "Free trial" entry. Wants approachable, plain workflows — no HR jargon — to handle requests between shifts.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no schedule yet)** | White canvas. Single Body Ink (`#212529`) line explaining nothing is scheduled, with one action-blue (`#004dc1`) CTA to create a shift plan. No decorative clutter. |
| **Empty (no records)** | Muted Slate (`#495057`) single line stating there is nothing in range, with the filter visible above to adjust scope. Calm and honest. |
| **Loading (data fetch)** | Skeleton rows on `#f4f7fb` tinted surface at final card dimensions, 8px radius. Soft pulse consistent with the gentle-shadow system. |
| **Loading (in-place refresh)** | Subtle action-blue progress indicator; previous values stay visible. Never blank the table during refresh. |
| **Error (action failed)** | Inline message in Body Ink with a plain-language explanation and a retry. No bare "An error occurred" — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "Required". Faint (`#969faa`) helper text becomes an error tone. |
| **Success (saved / submitted)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Disabled** | Faint Grey (`#969faa`) text on a reduced-opacity surface; action blue fades rather than turning grey, to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and steady — consistent with the calm enterprise aesthetic. Cards and sections fade-in from below at `motion-standard / ease-enter`; buttons respond to press with a subtle opacity/scale shift; the soft card shadow can deepen slightly on hover. No bounce or spring — workforce-management software signals reliability, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on https://shiftee.io/en and https://shiftee.io/en/pricing:
- body: inter, "Noto Sans KR", sans-serif / 15px / line-height 22.5px / color rgb(33,37,41) #212529 / bg #ffffff
- H1 hero "Empower Your Workforce, Shiftee" — Inter 58px / weight 700 / line-height 78.88px / -0.4px / white on navy
- H2 section "Everything You Need for Workforce Management" — Inter 40px / 700 / line-height 52px / -0.4px / rgb(30,31,33) #1e1f21
- H3 feature — Inter 32px / 700 / -0.4px
- Hero <section> background rgb(10,40,100) #0a2864 (deep navy)
- Primary CTA "Free trial" / "Contact Us" — bg rgb(0,77,193) #004dc1 / white text / radius 3.2px / padding 14px 25.2px / 14px / 600
- Inverted CTA — bg #ffffff / text #004dc1 / radius 2px / padding 15px 45px / shadow rgba(54,55,61,0.25) 0px 8px 24px
- Dark CTA — bg rgb(53,52,60) #35343c / white text
- Soft "All Features" — bg rgb(220,237,253) #dcedfd / text #004dc1 / radius 5px / 16px / 700
- Input — bg #ffffff / color rgb(73,80,87) #495057 / border 1px solid rgb(206,212,218) #ced4da / radius 4px / 38px
- Card shadows — rgba(159,176,199,0.3) 0px 8px 13px (×7), rgba(54,55,61,0.1) 0px 8px 24px (×3)
- bg frequency — #ffffff, #f4f7fb (rgb 244,247,251), #004dc1, #0069ed (rgb 0,105,237), #0575e6 (rgb 5,117,230), #074499 (rgb 7,68,153), #dcedfd, #edf6fe (rgb 237,246,254)
- document.title (EN): "Workforce Management Software | Shiftee"

Korean surface (https://shiftee.io/ko, https://shiftee.io/ko/blog) confirmed live 2026-06-26:
- title "통합 인력관리 솔루션 | 시프티"; hero H1 "기업의 도약을 위한 솔루션,Shiftee"
- H2s: "전 세계 300,000+ 기업과 사업장에서 시프티와 함께 더 나은 근무환경을 만듭니다.", "인력관리에 필요한 모든 기능", "정교한 근무일정 관리", "근태관리의 자동화"
- /ko/blog title "블로그 | 시프티", H1 "시프티 블로그" (brand-owned KR source)

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live EN and KO homepages (hero H1, section H2, trust H2).

Brand narrative (§11): Shiftee (시프티 / Shiftee Inc.) is a Seoul-based Korean workforce-management
SaaS. Scale claims ("more than 300,000 businesses", "used in 30+ countries") and the module set
(Schedule, Attendance, Leave, Workflow, Message, Electronic Signature, Report & Analytics,
Integration, Desktop PC-OFF, Mobile App) are stated on the live homepage. Company/HQ details beyond
the site are general public knowledge, not directly quoted from a verified statement this turn.

Personas (§13) are fictional archetypes informed by publicly observable Shiftee user segments
(HR managers, operations leads, shift-based business owners). Names are illustrative; they do not
refer to real people.

Interpretive claims (e.g., "one action, one blue", "anchor then rest", enterprise restraint as a
rejection of legacy HR-suite chrome) are editorial readings connecting Shiftee's observed design to
its positioning, not directly sourced Shiftee statements.
-->

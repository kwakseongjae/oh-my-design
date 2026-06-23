---
id: kia
name: Kia
display_name_kr: 기아
country: KR
category: automotive
homepage: "https://www.kia.com/kr/"
primary_color: "#05141f"
logo:
  type: simpleicons
  slug: kia
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = deep charcoal-navy (#05141f) used for text, button bg, nav surfaces. Canvas is pure white. Accent steel (#697278) for secondary text. No saturated brand accent color — Kia's identity uses monochrome restraint."
  colors:
    primary: "#05141f"
    primary-dark: "#010e18"
    canvas: "#ffffff"
    surface: "#f8f8f8"
    border: "#dadce0"
    body: "#37434b"
    muted: "#697278"
    muted-alt: "#79838b"
    on-primary: "#ffffff"
    dark-bg: "#01141b"
  typography:
    family: { display: "Kia Signature Bold", body: "Kia Signature Regular", fallback: "Arial, sans-serif" }
    display-hero: { size: 52, weight: 400, lineHeight: 1.23, use: "Vehicle hero title (e.g. The 2026 EV6), Kia Signature Bold" }
    section:      { size: 42, weight: 400, lineHeight: 1.29, use: "Section headings (Best Kia, News), Kia Signature Bold" }
    subsection:   { size: 28, weight: 400, lineHeight: 1.43, use: "Sub-section / vehicle name heads, Kia Signature Bold" }
    vehicle-nav:  { size: 20, weight: 400, lineHeight: 1.3, use: "Vehicle page tab navigation, Kia Signature Bold" }
    nav:          { size: 16, weight: 400, lineHeight: 1.375, use: "Global navigation items, Kia Signature Regular" }
    body:         { size: 16, weight: 400, lineHeight: 1.375, use: "Body copy, Kia Signature Regular" }
    button:       { size: 14, weight: 400, lineHeight: 1.43, use: "CTA labels (견적 내기, 자세히 보기), Kia Signature Bold" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 0, md: 0, lg: 15, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#05141f", fg: "#ffffff", radius: "0px", padding: "16px 24px", font: "14px / 400 Kia Signature Bold", border: "1px solid #05141f", use: "Primary CTA (견적 내기, 바로가기)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#05141f", radius: "0px", padding: "16px 24px", font: "14px / 400 Kia Signature Bold", border: "1px solid #ffffff", use: "Secondary CTA on dark hero backgrounds (자세히 보기, 렌터카 견적 내기)" }
    button-white-outlined: { type: button, bg: "#ffffff", fg: "#05141f", radius: "0px", padding: "16px 24px", font: "14px / 400 Kia Signature Bold", border: "1px solid #05141f", use: "White-bg outlined CTA button" }
    card-vehicle: { type: card, bg: "#ffffff", fg: "#05141f", radius: "15px", border: "1px solid #dadce0", use: "Vehicle lineup card (Best Kia section)" }
    nav-tab-active: { type: tab, fg: "#05141f", font: "20px / 400 Kia Signature Bold", use: "Vehicle page sub-nav tab, active state", active: "text #05141f + bottom border" }
    nav-tab-inactive: { type: tab, fg: "#697278", font: "20px / 400 Kia Signature Bold", use: "Vehicle page sub-nav tab, inactive state" }
    badge-model: { type: badge, bg: "#f8f8f8", fg: "#05141f", radius: "0px", font: "14px / 400 Kia Signature Regular", use: "Model category label / metadata" }
  components_harvested: true
---

# Design System Inspiration of Kia

## 1. Visual Theme & Atmosphere

Kia's digital presence since the 2021 global rebrand ("Movement that inspires") is a study in automotive restraint — an identity that lets the vehicles breathe rather than compete with the interface chrome. The canvas is pure white (`#ffffff`) broken only by a single dominant near-black (`#05141f`), a deep charcoal-navy that serves simultaneously as primary text, button backgrounds, and the brand's main interactive surface. There is no signature saturated accent color in Kia's web UI — no red, orange, or electric blue — making the homepage feel closer to a high-end automotive showroom than a typical Korean consumer site.

The proprietary typeface system — **Kia Signature** — is the identity's most distinctive element. Two weights dominate: **Kia Signature Bold** (used at display sizes and for all CTAs/headings) and **Kia Signature Regular** (used for navigation, body, and UI labels), both falling back to Arial. Despite being named "Bold," the display weight registers as a confident medium weight at screen — not the heavy slab of legacy automotive brands. At 52px (hero), the font has an athletic, engineered feel with normal tracking — no extreme tight-tracking like many premium automotive sites.

The overall geometry is strikingly square and orthogonal. All buttons use `border-radius: 0px` (sharp rectangular edges), cards use a restrained `15px` radius, and the layouts are clean horizontal bands. This is automotive-grade precision applied to UI — corners that say "engineered," not "consumer app." Depth comes almost entirely from flat contrast — dark surface (`#05141f`) vs white content — rather than shadows. The vehicle photography dominates; the interface steps back to frame it.

**Key Characteristics:**
- Kia Signature Bold for all display headings and CTAs — proprietary automotive typeface
- Deep charcoal-navy (`#05141f`) as the single primary color (text, buttons, nav surfaces)
- Pure white canvas with `#f8f8f8` subtle surface for card/section separation
- Zero-radius (`0px`) buttons — sharp, engineered, automotive
- 15px card radius — the only soft curve in the system
- No saturated accent color — monochrome identity with steel-grey (`#697278`) secondary
- Full-bleed vehicle photography as the hero — UI frames the car, not vice versa
- Flat shadows: `none` throughout; depth via background contrast only

## 2. Color Palette & Roles

### Primary
- **Kia Charcoal Navy** (`#05141f`): The single dominant color — headings, button backgrounds, nav text. A very dark desaturated blue-navy that reads as near-black with depth. Used instead of pure black to maintain warmth and brand character.
- **Dark Surface** (`#010e18`): Darkest variant for dark-mode hero sections. Also seen as `#01141b` in the EV6 vehicle page dark banner.
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on dark backgrounds. The system's dominant surface.

### Surface & Border
- **Surface Grey** (`#f8f8f8`): Subtle tinted background for alternating sections and light surface elements.
- **Border Grey** (`#dadce0`): Card outlines (Best Kia vehicle cards) — thin, clean separation.

### Text Hierarchy
- **Primary Text** (`#05141f`): Headings, nav links, strong labels, button text on white.
- **Body Slate** (`#37434b`): Secondary body copy and descriptions.
- **Steel Grey** (`#697278`): Tertiary text, inactive tabs, muted labels.
- **Steel Alt** (`#79838b`): Alternate muted text for fine print.

### On-dark
- **On-Primary** (`#ffffff`): Text and icons on the dark `#05141f` button and nav backgrounds.

## 3. Typography Rules

### Font Family
- **Display / UI**: `Kia Signature Bold` — proprietary typeface, fallback `Arial, sans-serif, Hevetica`. Used for all headings, vehicle names, CTA labels, and navigation panel headers.
- **Body / Nav**: `Kia Signature Regular` — the lighter companion. Used for global nav links, body copy, and utility labels.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Vehicle Hero | Kia Signature Bold | 52px | 400 | 1.23 | Full-bleed vehicle page H2 |
| Section Heading | Kia Signature Bold | 42px | 400 | 1.29 | Homepage section titles (Best Kia, News) |
| Sub-section | Kia Signature Bold | 28px | 400 | 1.43 | Vehicle name in card/panel context |
| Vehicle Nav Tab | Kia Signature Bold | 20px | 400 | 1.30 | Sub-nav tabs (특징, 제원, 갤러리) |
| Global Nav | Kia Signature Regular | 16px | 400 | 1.375 | Top nav menu items (차량, 구매, 체험) |
| Body | Kia Signature Regular | 16px | 400 | 1.375 | Standard reading text |
| CTA Button | Kia Signature Bold | 14px | 400 | 1.43 | Button labels (견적 내기, 자세히 보기) |

### Principles
- **One typeface, two weights**: Kia Signature Bold vs Regular carries the entire hierarchy. No third-party Korean/Latin fonts on the main site.
- **Automotive precision at display sizes**: normal (not negative) tracking even at 52px — confident, not compressed. The type doesn't need tight-tracking to feel premium; the proportion and weight do the work.
- **Bold for action, Regular for context**: every clickable/navigable element in Bold; every paragraph in Regular — a clean semantic split.

## 4. Component Stylings

### Buttons

**Primary Dark**
- Background: `#05141f`
- Text: `#ffffff`
- Radius: 0px
- Padding: 16px 24px
- Font: 14px Kia Signature Bold weight 400
- Border: 1px solid `#05141f`
- Height: 48px
- Use: Primary CTA on white/light backgrounds (견적 내기, 바로가기)

**Secondary White (Ghost)**
- Background: `#ffffff`
- Text: `#05141f`
- Radius: 0px
- Padding: 16px 24px
- Font: 14px Kia Signature Bold weight 400
- Border: 1px solid `#ffffff`
- Height: 48px
- Use: Secondary CTA placed on dark hero/vehicle images (자세히 보기, 렌터카 견적 내기)

**White Outlined**
- Background: `#ffffff`
- Text: `#05141f`
- Radius: 0px
- Padding: 16px 24px
- Font: 14px Kia Signature Bold weight 400
- Border: 1px solid `#05141f`
- Height: 48px
- Use: Outlined white CTA on mixed backgrounds

### Cards & Containers

**Vehicle Card**
- Background: `#ffffff`
- Text: `#05141f`
- Border: 1px solid `#dadce0`
- Radius: 15px
- Use: Best Kia vehicle lineup cards (the only rounded element in the system)

**Surface Section**
- Background: `#f8f8f8`
- Radius: 0px
- Use: Alternating section backgrounds for content grouping

### Tabs

**Vehicle Page Tab (Active)**
- Text: `#05141f`
- Font: 20px Kia Signature Bold weight 400
- Active: bottom border indicator on active tab
- Use: In-page navigation (특징, 제원, 갤러리, 모델 비교, EV TCO 계산기, 가격)

**Vehicle Page Tab (Inactive)**
- Text: `#697278`
- Font: 20px Kia Signature Bold weight 400
- Use: Non-selected vehicle page sub-nav items

### Badges & Tags

**Model Badge**
- Background: `#f8f8f8`
- Text: `#05141f`
- Radius: 0px
- Font: 14px Kia Signature Regular weight 400
- Use: Model category labels, metadata tags

### Navigation

**Global Navigation Header**
- Background: transparent / overlays hero image
- Text: `#ffffff` on dark hero; `#05141f` on scrolled white header
- Font: 16px Kia Signature Regular weight 400
- Height: 60px
- Use: Top horizontal nav (차량, 구매, 체험, 이벤트, 고객 지원, Discover Kia, PBV)

**Vehicle Sub-navigation Panel**
- Text (panel heading): `#ffffff` on dark panel, 18px Kia Signature Bold
- Use: Mega-menu panels for 차량, 구매, 체험 nav items

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.kia.com/kr/ (homepage, computed style live inspect), https://www.kia.com/kr/vehicles/ev6/ (EV6 vehicle page, second surface), https://worldwide.kia.com/en/brand/our-brand/brand-identity/who-we-are (Kia global brand identity page), https://www.kia.com/kr/discover-kia/news/list (Kia Korea newsroom)
**Tier 2 sources:** getdesign.md/kia — 0 results (not listed); styles.refero.design/?q=kia — no exact match found (search returned automotive brands Ferrari, BMW, Tesla, Lamborghini, Rivian but not Kia)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px+
- Notable: CTA button padding is exactly 16px 24px — a generous, press-friendly automotive target

### Grid & Container
- Full-bleed hero sections with vehicle photography spanning the full viewport width
- Centered content columns inside sections with generous horizontal padding
- Horizontal card rows for vehicle lineup (Best Kia) — typically 3–4 cars per row
- Dark (`#05141f`) and white sections alternate to create visual rhythm without using color
- Vehicle page sticky sub-nav bar with horizontal tab list

### Whitespace Philosophy
- **Photography-first layout**: the UI chrome (nav, CTAs, labels) is minimal so vehicle imagery is the primary content
- **Generous section spacing**: vertical rhythm between sections is ample — 64px+ between major content blocks
- **Two-button CTA pattern**: each vehicle/section typically shows a pair of CTAs (light + dark) side by side

### Border Radius Scale
- Zero (0px): all interactive buttons — sharp, engineered, automotive
- Card (15px): vehicle lineup cards only
- Circle: floating chat button (50% radius)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, text, buttons |
| Surface (Level 1) | `#f8f8f8` background shift | Section separation without elevation |
| Outline (Level 2) | `1px solid #dadce0` | Vehicle card outlines |
| Dark Contrast (Level 3) | `#05141f` background | CTAs, dark hero sections — depth via color, not shadow |

**Shadow Philosophy**: Kia's site is essentially shadowless. Live inspection confirmed `box-shadow: none` across all primary UI elements — nav, hero CTAs, vehicle cards, buttons. Depth is communicated through full-bleed dark (`#05141f`) sections alternating with white, and through the vehicle photography itself. This "shadow-free, photography-first" approach makes the digital experience feel like a clean automotive brochure rather than an app.

## 7. Do's and Don'ts

### Do
- Use Kia Signature Bold for all CTAs, headings, and vehicle names — it's the brand voice
- Use `#05141f` (charcoal navy) as the primary text and button color — not pure black
- Use sharp 0px radius on all buttons — Kia's UI is engineered and orthogonal
- Reserve the 15px radius for vehicle cards only — the system's single soft curve
- Use full-bleed photography as the hero; the UI frames the vehicle, not the reverse
- Use the two-CTA pattern (dark primary + white secondary) on hero sections
- Keep the palette monochrome — no saturated accent colors in UI chrome

### Don't
- Add a saturated accent color (red, orange, blue) to UI elements — Kia's identity is monochrome
- Use pill-shaped or large-radius buttons — 0px sharp corners are the automotive design signature
- Use drop shadows for card elevation — flat contrast and hairlines only
- Set display text in Kia Signature Regular — Bold is required at heading sizes
- Use positive or extreme negative letter-spacing — Kia runs at normal tracking across sizes
- Replace the vehicle photography with illustration — the real car is the design element

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero typography scales down, nav collapses to hamburger |
| Tablet | 640-1024px | 2-column vehicle cards, moderate padding |
| Desktop | 1024-1440px | Full layout, 3-4 column vehicle lineup |
| Large Desktop | >1440px | Centered with max-width container |

### Touch Targets
- CTA buttons at 48px height with 24px horizontal padding — comfortably tappable
- Nav items at 60px header height
- Vehicle page tabs at 52px height
- Floating chat button at 56px diameter (50% radius)

### Collapsing Strategy
- Hero: vehicle page H2 at 52px scales down proportionally on mobile
- Navigation: horizontal mega-menu collapses to hamburger toggle
- Vehicle lineup: 3-4 column cards → 2-column → 1-column stacked
- Button pair: dark + white CTAs stack vertically on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / CTA background: Charcoal Navy (`#05141f`)
- CTA text on dark: Pure White (`#ffffff`)
- Body text: Deep Charcoal (`#05141f`)
- Secondary text: Body Slate (`#37434b`)
- Muted / inactive: Steel Grey (`#697278`)
- Page background: White (`#ffffff`)
- Subtle surface: Surface Grey (`#f8f8f8`)
- Card border: Border Grey (`#dadce0`)
- Dark sections: Dark Surface (`#01141b`)

### Example Component Prompts
- "Create a Kia-style hero: full-bleed vehicle photograph background. Overlay: H2 at 52px Kia Signature Bold, line-height 1.23, color #ffffff. Two CTAs side-by-side: dark button (#05141f bg, white text, 0px radius, 16px 24px padding, 14px Kia Signature Bold, 1px solid #05141f) + white button (#ffffff bg, #05141f text, 0px radius, same specs, 1px solid #ffffff). No shadows."
- "Design a vehicle lineup card: #ffffff background, 1px solid #dadce0 border, 15px radius, no shadow. Vehicle name at 28px Kia Signature Bold #05141f. CTA button below: #05141f bg, #ffffff text, 0px radius, 14px 16px 24px padding."
- "Build a page sub-nav: horizontal tab row on white. Active tab: #05141f text, 20px Kia Signature Bold, bottom border indicator. Inactive tabs: #697278 text, same size. No background color on tab bar itself."

### Iteration Guide
1. Default to sharp 0px corners on every interactive element — pillsare off-brand
2. Use only `#05141f` for primary actions — resist adding a secondary accent
3. Never use `box-shadow` — depth via background color and full-bleed dark sections
4. Kia Signature Bold for CTAs + headings; Regular for nav links and body
5. White and dark (`#05141f`) sections alternate for rhythm — no mid-range grays
6. Vehicle photography is always primary; keep UI chrome minimal

---

## 10. Voice & Tone

Kia's brand voice since the 2021 global rebrand centers on the phrase **"Movement that inspires"** — a manifesto that positions Kia not as a car manufacturer but as a creator of sustainable mobility experiences that move people emotionally as well as physically. The tone is aspirational but grounded: confident without being aggressive, premium without condescension, international while addressing Korean consumers directly.

| Context | Tone |
|---|---|
| Hero / campaign | Inspirational, declarative. "Movement that inspires." Short, bold. |
| Vehicle naming | Direct product English ("The 2026 EV6", "EV9") — product code + year, clean |
| CTAs | Functional and clear. "견적 내기" (Get a quote), "자세히 보기" (Learn more), "시승 신청" (Book a test drive). |
| Feature descriptions | Precise, benefit-led. Highlights the tech and mobility story without hyperbole. |
| Brand narrative | Global scope + Korean heritage. References sustainability, innovation, movement. |
| Customer support | Respectful and service-first. "고객 지원" (Customer Support) phrasing. |

**Voice samples (verbatim from live site, 2026-06-22):**
- "기아 - Movement that inspires" — site title and meta (brand manifesto). *(verified live 2026-06-22)*
- "Best Kia" — homepage section title (concise, bilingual-friendly). *(verified live 2026-06-22)*
- "The 2026 EV6" — EV6 vehicle page hero H2 (year + model, English on Korean site). *(verified live 2026-06-22)*

**Forbidden register**: legacy automotive bravado ("Power. Performance. Passion."), feature lists that don't tie to mobility narrative, patronising "simplicity" copy, excessive Korean honorifics that feel corporate over human.

## 11. Brand Narrative

Kia was founded in **1944** in Korea as a manufacturer of steel tubing and bicycles, evolving through motorcycles into automobile production in the 1960s. The name "기아(起亞)" means "rising from Asia" — a founding ambition that still shapes the brand's confidence. After surviving the 1997 Asian financial crisis through acquisition by Hyundai Motor Group, Kia spent two decades building volume before executing one of Korea's most deliberate automotive brand transformations.

The pivotal moment was the appointment of **Peter Schreyer** as Chief Design Officer in 2006 — the "tiger nose" grille, clean silhouettes, and design-led identity that followed gave Kia genuine global design credibility. The transformation accelerated in **January 2021** when Kia unveiled a new logo (the flowing "KIA" signature), the repositioned brand identity, and the "Movement that inspires" tagline — signaling Kia's shift from a value-focused car brand into a sustainable mobility company. The rebrand was one of the most publicly discussed automotive identity launches of the decade (famously confused with "KN" in social media — Kia addressed it by leaning into the modern, connected letterforms).

The design philosophy — **"Opposites United"** — guides both product and digital surfaces: the interplay of opposites (bold/calm, wild/restrained, natural/technical) drives a creative tension that refuses to let Kia settle into one lane. For digital, this means the ultra-clean white canvas paired with the weighty charcoal-navy, the sharp 0px buttons coexisting with soft 15px card curves, and global English vehicle names ("The 2026 EV6") on a primarily Korean-language site.

## 12. Principles

1. **Design is the product.** Kia's "Opposites United" philosophy treats design as the root of everything — not styling, but the tension between contrasting ideas that produces emotional resonance. *UI implication:* every layout decision should carry intentional contrast (dark/light, sharp/soft, minimal/bold).
2. **Movement as purpose.** "Movement that inspires" is not just about cars moving — it's about inspiring people to move toward a better life. *UI implication:* CTAs frame an invitation to experience, not just a transactional step. "견적 내기" leads somewhere meaningful.
3. **Premium restraint, not premium excess.** Kia's premium signal comes from what is *not* there — no shadows, no accent colors, no decorative flourishes. *UI implication:* resist adding elements; every component should earn its presence.
4. **The vehicle is the content.** Digital surfaces exist to showcase the vehicle, not to be design artifacts themselves. *UI implication:* vehicle photography is always primary; UI chrome is always secondary.
5. **Engineered confidence.** 0px button radius is not a mistake — it's a deliberate statement that Kia's products are built with precision. *UI implication:* sharp geometric forms throughout; no pill shapes.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Kia user segments (Korean car buyers, EV early adopters, family SUV buyers), not individual people.*

**이준혁, 38, 경기 수원.** A software engineer considering his first EV purchase. Has been following the EV6 and EV9 launches. Uses kia.com/kr's configurator to compare trims and calculate monthly payments. Values the clarity of the "EV TCO 계산기" tool and the clean vehicle photography that lets him visualize color options without visiting a dealer.

**최수민, 45, 서울 강남.** A family SUV buyer upgrading from a Sorento to a Carnival. Visits the vehicle lineup section first, then checks "이 달의 구매 혜택" for monthly financing offers before booking a test drive. Appreciates the direct "시승 신청" CTA without friction.

**박지훈, 31, 대전.** A Kia fan who followed the 2021 rebrand closely. Uses worldwide.kia.com to explore the brand's "Opposites United" design philosophy and international design exhibition content before recommending Kia to friends. Views the brand's visual transformation as validation of Korean automotive design globally.

## 14. States

| State | Treatment |
|---|---|
| **Empty (견적 configurator, no selection)** | White canvas. Primary heading in `#05141f`, directing the user to select a vehicle model. Single dark CTA to begin configuration. |
| **Empty (search results, zero matches)** | Steel grey (`#697278`) placeholder text at body size. Honest, minimal. No illustration. |
| **Loading (page initial paint)** | Surface grey (`#f8f8f8`) skeleton blocks at final dimensions. Vehicle photo skeletons as grey rectangles. No animation shimmer — consistent with the flat, shadow-free aesthetic. |
| **Loading (configurator options)** | Inline loading state within the option panel; previous selection remains visible. |
| **Error (form validation — 견적)** | Field-level message below the input. `#05141f` text in a direct, plain-Korean explanation of what's required. |
| **Error (network failure)** | Minimal inline notice with a retry CTA. Automotive reliability = errors are uncommon, should not panic the user. |
| **Success (시승 신청 submitted)** | Calm confirmation: "신청이 완료되었습니다." with next steps (expected contact date). No confetti, no heavy celebration. |
| **Success (견적 saved)** | Brief inline confirmation near the button. 3s auto-clear. |
| **Skeleton** | Surface grey (`#f8f8f8`) blocks at final card/image dimensions, 15px radius matching vehicle cards. Flat fade-pulse consistent with no-shadow system. |
| **Disabled** | `#697278` steel grey label with reduced opacity on the surface. Dark CTAs fade to `rgba(5,20,31,0.3)` — preserving the charcoal brand tone rather than going flat grey. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover states, nav link underlines, tab indicator |
| `motion-standard` | 200ms | Mega-menu open/close, card hover, CTA press |
| `motion-slow` | 320ms | Hero image transitions, page-level reveals |
| `motion-cinematic` | 600ms+ | Full-bleed vehicle video/image crossfades |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — panels, mega-menus, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Kia's site motion is quiet and functional — befitting an automotive brand that signals reliability. Hero carousels and vehicle image transitions use `motion-cinematic` with linear or gentle ease-in-out for a polished brochure feel. Navigation mega-menus appear with `motion-standard`. No bounce, no spring, no overshoot — automotive reliability translated to motion design. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the photography remains static and fully accessible.

**Signature motion:** Full-bleed vehicle photography crossfades in the hero carousel. Images transition with a slow, cinematic fade (600ms+) — never a slide or push — so the vehicle appears to emerge rather than move. This reinforces the "Movement that inspires" brand idea: the experience should feel like the car arriving, not a UI sliding.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://www.kia.com/kr/ (homepage, primary surface)
- https://www.kia.com/kr/vehicles/ev6/ (EV6 vehicle page, second surface)

Direct verification via WebFetch / inspect:
- https://worldwide.kia.com/en — Kia global brand portal (brand identity, "Opposites United" design philosophy link confirmed live)
- https://www.kia.com/kr/discover-kia/news/list — Kia Korea newsroom (confirmed live 200)
- https://cdn.simpleicons.org/kia — SimpleIcons Kia logo confirmed 200

Brand narrative (§11): Kia founding in 1944, the "Rising from Asia" name etymology, Peter Schreyer CDO appointment 2006, 2021 rebrand with "Movement that inspires" tagline — these are widely documented public automotive industry facts.

Personas (§13) are fictional archetypes informed by publicly observable Kia user segments (Korean EV buyers, family SUV buyers, brand enthusiasts). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "0px radius as engineered confidence", "photography-first UI") are editorial readings connecting Kia's observed design to its "Opposites United" philosophy, not directly sourced Kia statements.
-->

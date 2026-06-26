---
id: nota
name: Nota AI
display_name_kr: 노타
country: KR
category: ai
homepage: "https://www.nota.ai"
primary_color: "#3264f0"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=nota.ai&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live interactive accent blue (#3264f0) on links, section eyebrows, and the Squarespace primary button. Dark navy (#252a39) is the hero/footer canvas; near-black (#101218) is the on-light text color. Roboto is the live ENG type; Pretendard serves the KOR locale."
  colors:
    primary: "#3264f0"
    ink: "#101218"
    navy: "#252a39"
    black: "#000000"
    canvas: "#ffffff"
    headline: "#f5f5f7"
    surface: "#f6f6f8"
    field: "#fafafa"
    hairline: "#e7e7e7"
    border-soft: "#eaeaee"
    slate: "#7e8390"
    muted: "#888888"
    faint: "#aaaaaa"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Roboto", kr: "Pretendard" }
    display-hero:    { size: 52, weight: 700, lineHeight: 1.35, use: "Hero headline, Roboto Bold on dark navy" }
    display-section: { size: 43, weight: 400, lineHeight: 1.38, use: "Section headlines, Roboto Regular" }
    display-emphasis: { size: 43, weight: 700, lineHeight: 1.20, use: "Emphasis section headlines, Roboto Bold" }
    eyebrow:         { size: 21, weight: 400, lineHeight: 1.46, use: "Blue section eyebrow labels (Newsroom, Tech Blog)" }
    nav:             { size: 17, weight: 400, lineHeight: 1.68, use: "Top navigation links, Roboto" }
    body:            { size: 14, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    small:           { size: 12, weight: 400, lineHeight: 1.50, use: "Captions, form fields, inline link buttons" }
  spacing: { xs: 4, sm: 8, md: 11, base: 15, lg: 16, xl: 24, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 10, full: 9999 }
  shadow:
    card: "rgba(141,141,141,0.15) 10px 10px 28px 0px"
    none: "none"
  components:
    button-primary: { type: button, fg: "#3264f0", border: "1px solid #3264f0", radius: "4px", padding: "11px 15px", font: "12px / 500 Roboto", use: "Primary outline action button (Squarespace sqs-button-element--primary), accent blue" }
    button-dark: { type: button, bg: "#252a39", fg: "#ffffff", radius: "8px", padding: "16px 24px", font: "12px / 400 Roboto", use: "Filled dark-navy CTA, e.g. newsletter subscribe" }
    input-text: { type: input, bg: "#fafafa", fg: "#101218", border: "1px solid #000000", radius: "0px", padding: "10px", height: "40px", font: "12px Roboto", use: "Contact form field, sharp-cornered" }
    card-elevated: { type: card, bg: "#ffffff", radius: "10px", shadow: "rgba(141,141,141,0.15) 10px 10px 28px 0px", use: "Insight / content card with soft grey drop shadow" }
    card-outline: { type: card, bg: "#ffffff", border: "1px solid #e7e7e7", radius: "10px", use: "Bordered feature card, hairline outline, no shadow" }
    eyebrow-label: { type: badge, fg: "#3264f0", font: "21px / 400 Roboto", use: "Blue section eyebrow / category label above headlines" }
    nav-link: { type: tab, fg: "#ffffff", font: "17px / 400 Roboto", active: "accent #3264f0 text", use: "Top nav item on the dark-navy header" }
  components_harvested: true
---

# Design System Inspiration of Nota AI

## 1. Visual Theme & Atmosphere

Nota AI (노타) is a Korean on-device-AI company whose mission is, in its own words, "Democratizing the use of AI" — and the homepage stages that ambition as a confident, engineering-grade product site rather than a hype-driven startup splash. The hero opens on a deep, cool dark-navy canvas (`#252a39`) with crisp off-white headlines (`#f5f5f7`), then the page descends into bright white (`#ffffff`) and pale cool-grey (`#f6f6f8`) feature bands where text shifts to a dense near-black (`#101218`) — never pure-black body, which keeps long technical copy readable. The single saturated accent across the whole system is an electric, slightly cobalt blue (`#3264f0`): it carries links, the blue section eyebrow labels ("Newsroom", "Tech Blog"), and the primary outline button, so the eye is trained to read that one hue as "this is interactive."

The typographic voice is set in **Roboto** — the workhorse neo-grotesque — used for everything from the 52px / weight-700 hero ("Industry-tailored Vision Intelligence") down to 12px form fields and link buttons; the Korean locale swaps in **Pretendard** for hangul density. The hierarchy is built on size and weight contrast rather than many type families: bold 700 hero, regular 400 section headlines at ~43px, and a distinctive 21px blue eyebrow that floats above section titles like a chapter marker. Body copy sits quietly at 12–14px. The result reads as precise and industrial — a company that ships AI onto cameras, cars, and edge devices, and wants its marketing surface to feel as measured as its product.

Depth is handled with restraint. Most separation comes from flat tinted bands (`#f6f6f8`) and thin hairlines (`#e7e7e7`, `#eaeaee`) rather than heavy elevation; when a card does lift, it uses a single soft, slightly-offset grey shadow (`rgba(141,141,141,0.15) 10px 10px 28px 0px`) on a 10px-radius surface — diffuse and quiet, never dramatic. Geometry is gently rounded: a dominant **10px** card radius, **4px** buttons, **8px** on filled CTAs, with the cookie/contact form fields kept deliberately **sharp (0px)** and outlined in `#000000`. Muted greys (`#7e8390`, `#888888`, `#aaaaaa`) ladder the secondary text. The overall impression: a clean, modern, slightly technical white-and-navy system anchored by one decisive blue.

**Key Characteristics:**
- Dark-navy (`#252a39`) hero/footer canvas paired with bright white (`#ffffff`) feature bands
- Single saturated accent blue (`#3264f0`) reserved for links, eyebrow labels, and the primary button
- Near-black (`#101218`) for on-light text instead of pure black — warmer, easier to read
- Off-white (`#f5f5f7`) headlines on the dark hero for soft, high-end contrast
- Roboto everywhere (Pretendard for the KOR locale) — size + weight carry the hierarchy
- Distinctive 21px blue eyebrow label floating above section headlines
- Flat depth: tinted `#f6f6f8` bands and `#e7e7e7` / `#eaeaee` hairlines do the separating
- One soft diffuse card shadow (`rgba(141,141,141,0.15) 10px 10px 28px`) when lift is needed
- Gently rounded geometry — 10px cards, 4px / 8px buttons — with sharp 0px outlined form fields

## 2. Color Palette & Roles

### Primary
- **Nota Blue** (`#3264f0`): The single saturated brand accent. Links, the blue section eyebrow labels, primary outline button border + text, and interactive highlights. The system's one "action" color.

### Dark Canvas & Ink
- **Dark Navy** (`#252a39`): Hero and footer background, filled-CTA fill, and dark immersive sections. A cool blue-charcoal that grounds the brand.
- **Ink Near-Black** (`#101218`): Primary on-light text and heading color — a very dark blue-black used instead of pure black for body copy.
- **Pure Black** (`#000000`): Maximum-contrast accents and the contact-form field border (`1px solid #000000`).

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background for feature bands, card surfaces, and text on dark/navy.
- **Headline Off-White** (`#f5f5f7`): Hero headline color on the dark-navy canvas — soft white, not stark.
- **Surface Grey** (`#f6f6f8`): Cool pale-grey tinted band for alternating sections and grouped content.
- **Field Grey** (`#fafafa`): Background fill for contact/form input fields.
- **Hairline** (`#e7e7e7`): Thin card outlines and dividers — the primary separation device.
- **Border Soft** (`#eaeaee`): Alternate soft border on light surfaces and quiet dividers.

### Text Hierarchy
- **Ink Near-Black** (`#101218`): Primary text, headings, strong labels on light.
- **Slate** (`#7e8390`): Secondary body copy, descriptions, captions.
- **Muted Grey** (`#888888`): Tertiary text and metadata.
- **Faint Grey** (`#aaaaaa`): Lowest-emphasis labels, disabled/placeholder text, language-switcher idle state.
- **On-Primary White** (`#ffffff`): Text on navy fills and the dark hero — declared as `on-primary`.

## 3. Typography Rules

### Font Family
- **Sans (default)**: `Roboto` (with `sans-serif` fallback) — used for headlines, navigation, body, and button labels across the live ENG site.
- **Korean locale**: `Pretendard` (with `sans-serif` fallback) — substituted for hangul-dense KOR pages.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Roboto | 52px (3.25rem) | 700 | 1.35 (70px) | Hero headline on dark navy, off-white `#f5f5f7` |
| Section Heading | Roboto | 43px (2.70rem) | 400 | 1.38 (60px) | Regular-weight section headlines |
| Section Emphasis | Roboto | 43px (2.70rem) | 700 | 1.20 (52px) | Bold-weight emphasis headlines |
| Eyebrow Label | Roboto | 21px (1.31rem) | 400 | 1.46 (31px) | Blue `#3264f0` label above section titles |
| Nav Link | Roboto | 17px (1.06rem) | 400 | 1.68 | Top navigation items |
| Body | Roboto | 14px (0.88rem) | 400 | 1.50 | Standard reading text |
| Small / Field | Roboto | 12px (0.75rem) | 400-500 | 1.50 | Captions, form fields, inline link buttons |

### Principles
- **One family, weight-and-size hierarchy**: Roboto carries the entire ENG system; contrast comes from 700 vs 400 and the size jump from 52px hero to 12px caption, not from mixing typefaces.
- **The blue eyebrow as structure**: a 21px `#3264f0` label sits above section headlines as a recurring chapter marker — a signature of the layout rhythm.
- **Near-black, not black, for reading**: body and headings on light surfaces use `#101218`, reserving pure `#000000` for accents and form-field borders.
- **Locale-aware swap**: Roboto for ENG, Pretendard for KOR — the roles never cross; each font owns its locale.

## 4. Component Stylings

### Buttons

**Primary (Outline Blue)**
- Background: transparent
- Text: `#3264f0`
- Border: 1px solid `#3264f0`
- Radius: 4px
- Padding: 11px 15px
- Font: 12px Roboto weight 500
- Height: 38px
- Use: Primary action button (Squarespace `sqs-button-element--primary`) — the accent-blue call to action

**Dark Fill CTA**
- Background: `#252a39`
- Text: `#ffffff`
- Radius: 8px
- Padding: 16px 24px
- Font: 12px Roboto weight 400
- Height: 50px
- Use: Filled dark-navy CTA — "Subscribe to our newsletter →", header actions

**Secondary (Outline Navy)**
- Background: transparent
- Text: `#252a39`
- Border: 1px solid `#252a39`
- Radius: 4px
- Padding: 11px 15px
- Font: 12px Roboto weight 500
- Use: Secondary / dismiss action (e.g. cookie "Decline", form "Send")

**Inline Link Button**
- Background: transparent
- Text: `#101218`
- Font: 12px Roboto weight 400
- Use: Text link CTA with arrow — "Read More →", "Learn more →"

### Inputs & Forms

**Contact Field**
- Background: `#fafafa`
- Text: `#101218`
- Border: 1px solid `#000000`
- Radius: 0px
- Padding: 10px
- Height: 40px
- Font: 12px Roboto
- Use: Contact form text / email field — deliberately sharp-cornered

**Textarea**
- Background: `#fafafa`
- Text: `#101218`
- Border: 1px solid `#000000`
- Radius: 0px
- Padding: 10px
- Height: 100px
- Use: Multi-line message field on the contact form

### Cards & Containers

**Elevated Card**
- Background: `#ffffff`
- Radius: 10px
- Shadow: `rgba(141,141,141,0.15) 10px 10px 28px 0px`
- Use: Insight / content card with a soft, slightly-offset grey shadow

**Outline Card**
- Background: `#ffffff`
- Border: 1px solid `#e7e7e7`
- Radius: 10px
- Use: Bordered feature card — hairline outline, no shadow

### Badges

**Blue Eyebrow Label**
- Text: `#3264f0`
- Font: 21px Roboto weight 400
- Use: Section eyebrow / category label above headlines ("Newsroom", "Tech Blog")

### Navigation
- Background: `#252a39` (dark header) / `#ffffff` (scrolled / light pages)
- Text: `#ffffff` on dark, `#101218` on light
- Font: 17px Roboto weight 400
- Active: accent blue `#3264f0` text
- Use: Top horizontal nav ("AI Solutions", "Tech Blog", "Company", "Contact Us")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://www.nota.ai (homepage, live DOM), https://www.nota.ai/community (Tech Blog, live DOM), https://www.nota.ai/contact-us (contact form, live DOM), https://github.com/nota-github (official GitHub org)
**Tier 2 sources:** getdesign.md/nota — not listed ("No designs found"); styles.refero.design/?q=nota — no Nota AI match (fuzzy note-app results only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 11px, 15px, 16px, 24px, 48px, 64px
- Notable: buttons land at 11px 15px (outline) and 16px 24px (filled); form fields use a uniform 10px inset

### Grid & Container
- Centered single-column hero anchored by the 52px Roboto headline on dark navy
- Feature sections alternate between white (`#ffffff`) and pale-grey (`#f6f6f8`) full-width bands
- Cards group insights/solutions at a consistent 10px radius
- Footer returns to the dark-navy (`#252a39`) canvas, mirroring the hero

### Whitespace Philosophy
- **Breathing, technical calm**: generous vertical rhythm between sections keeps a dense, capability-heavy story scannable.
- **Flat segmentation**: sections separate by background tint (`#f6f6f8` vs `#ffffff`) and hairlines (`#e7e7e7`), not heavy borders.
- **One accent, repeated**: the blue eyebrow + blue links create a consistent vertical cadence down the page.

### Border Radius Scale
- Sharp (0px): contact-form fields (outlined in `#000000`)
- Small (4px): outline buttons, language switcher
- Medium (8px): filled dark CTAs
- Large (10px): cards and content containers — the workhorse radius
- Circle (50%): avatars and icon chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, hero, most surfaces |
| Tint (Level 1) | `#f6f6f8` background shift | Section separation without elevation |
| Hairline (Level 2) | `1px solid #e7e7e7` border | White card outlines, dividers |
| Soft Lift (Level 3) | `rgba(141,141,141,0.15) 10px 10px 28px 0px` | Insight/content cards when lift is wanted |

**Shadow Philosophy**: Nota AI is a mostly-flat system. Live inspection found `box-shadow: none` across the hero, nav, headings, and most sections; depth is communicated through flat tinted bands (`#f6f6f8`) and thin `#e7e7e7` / `#eaeaee` hairlines. When a card does lift, it reaches for a single soft, diffuse grey shadow offset down-and-right (`10px 10px 28px`) at low 0.15 alpha — quiet and atmospheric rather than dramatic. Emphasis is carried by color (the blue `#3264f0` or the dark-navy `#252a39`), never by stacking heavy elevation.

## 7. Do's and Don'ts

### Do
- Use Roboto for the ENG system (Pretendard for KOR) and let weight + size carry hierarchy
- Reserve the accent blue (`#3264f0`) for links, eyebrow labels, and the primary button — the single action color
- Use the blue 21px eyebrow label above section headlines — it's the layout's signature marker
- Use near-black navy (`#101218`) for on-light text instead of pure black
- Pair the dark-navy hero/footer (`#252a39`) with bright white (`#ffffff`) feature bands
- Separate sections with flat `#f6f6f8` tints and `#e7e7e7` hairlines, not heavy shadows
- Keep cards at 10px radius; when lift is needed use the soft `rgba(141,141,141,0.15) 10px 10px 28px` shadow
- Keep contact-form fields sharp (0px) with the `#000000` outline and `#fafafa` fill

### Don't
- Spread the accent blue across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve near-black `#101218` for reading
- Stack heavy or dark drop shadows for elevation — Nota leans flat
- Mix in a second saturated accent color — blue is the only brand hue
- Round the form fields — they are intentionally sharp against the rounded cards
- Use a second display typeface — Roboto (ENG) / Pretendard (KOR) own the system
- Drop the eyebrow label — it is the recurring structural device above headlines
- Use stark `#ffffff` headlines on the dark hero — soften to `#f5f5f7`

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Outline buttons at 38px height with 11px 15px padding
- Filled CTAs at ~50px height with generous 16px 24px padding
- Nav links spaced comfortably within the dark header

### Collapsing Strategy
- Hero: 52px Roboto headline scales down on mobile, weight 700 maintained
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections keep full-width treatment
- Footer returns to dark navy at all sizes

### Image Behavior
- Product and solution imagery sits on 10px-radius cards
- Cards maintain the soft grey shadow or hairline outline across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent / links: Nota Blue (`#3264f0`)
- Dark canvas / footer: Dark Navy (`#252a39`)
- On-light text: Ink Near-Black (`#101218`)
- Hero headline: Off-White (`#f5f5f7`)
- Background: Pure White (`#ffffff`)
- Tinted band: Surface Grey (`#f6f6f8`)
- Form field fill: Field Grey (`#fafafa`)
- Hairline / card border: `#e7e7e7` (also `#eaeaee`)
- Secondary text: Slate (`#7e8390`)
- Tertiary / faint: `#888888`, `#aaaaaa`
- Field border / accents: Pure Black (`#000000`)

### Example Component Prompts
- "Create a hero on dark navy `#252a39`. Headline at 52px Roboto weight 700, line-height 1.35, color `#f5f5f7`. Above it a 21px Roboto blue eyebrow label in `#3264f0`. One outline button: transparent bg, `#3264f0` text + 1px solid `#3264f0` border, 4px radius, 11px 15px padding, 12px Roboto 500."
- "Design a feature card: white `#ffffff` background, 10px radius. Either a 1px solid `#e7e7e7` hairline outline (no shadow) OR a soft shadow `rgba(141,141,141,0.15) 10px 10px 28px 0px`. Title 43px Roboto weight 400, `#101218`. Body 14px Roboto, `#7e8390`."
- "Build a contact form field: `#fafafa` background, 1px solid `#000000` border, 0px radius, 10px padding, 12px Roboto, `#101218` text. Submit as a navy outline button (`#252a39` text + border, 4px radius)."
- "Create top nav on dark navy: 17px Roboto weight 400 links in `#ffffff`, active item in accent blue `#3264f0`. Filled dark CTA `#252a39` bg, white text, 8px radius."

### Iteration Guide
1. Roboto for ENG, Pretendard for KOR — one family per locale, hierarchy from weight + size
2. Blue (`#3264f0`) is the single action color — don't spread it
3. The 21px blue eyebrow label above section titles is the signature — keep it
4. Near-black `#101218` for reading, pure `#000000` only for accents/form borders
5. Cards at 10px radius; soft `rgba(141,141,141,0.15) 10px 10px 28px` shadow or `#e7e7e7` hairline
6. Dark navy `#252a39` hero/footer bookends bright white feature bands
7. Form fields stay sharp (0px) against the rounded cards

---

## 10. Voice & Tone

Nota AI's voice is **confident, technical, and benefit-framed** — a deep-tech company explaining hard engineering (model compression, on-device inference, edge optimization) in plain, capability-first English. The brand mission, stated verbatim, is "Democratizing the use of AI," and the homepage register matches: declarative headlines that name a concrete outcome rather than sell a feeling. Copy treats the reader as a technical buyer or engineer who wants to know what the product does and where it runs.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, capability-first. "Industry-tailored Vision Intelligence." Confident, not hype. |
| Section headlines | Outcome-framed. "High-performance AI on Any Device", "Turning On-Device AI into Reality". |
| Eyebrow labels | Plain, structural. "Newsroom", "Tech Blog", "AI Solutions". |
| CTAs | Direct, low-pressure. "Read More →", "Learn more →", "Subscribe to our newsletter →". |
| Product / solution copy | Concrete and vertical-specific (ITS, DMS, Industrial Safety, Surveillance). |

**Voice samples (verbatim from live surfaces):**
- "Industry-tailored Vision Intelligence" — hero headline. *(verified live 2026-06-26)*
- "High-performance AI on Any Device" — section headline. *(verified live 2026-06-26)*
- "Stay Ahead with the Latest AI Insights" — newsroom section. *(verified live 2026-06-26)*
- "Democratizing the use of AI" — company mission (About Us). *(verified 2026-06-26)*

**Forbidden register**: vague AI hype with no concrete deployment claim, fear-based marketing, undefined jargon left unexplained, exclamation-heavy salesmanship.

## 11. Brand Narrative

Nota AI (노타, Nota Inc.) was founded in **2015** in Korea with a mission it states plainly today: **"Democratizing the use of AI."** The company began as an AI startup and evolved into a leader in **on-device / edge AI** — the discipline of compressing and optimizing neural networks so they run efficiently on real hardware (cameras, vehicles, embedded devices) rather than only in the cloud. Its flagship platform, **NetsPresso®**, is an end-to-end neural-network optimization toolchain that takes models from training to deployable, hardware-aware form.

Around that core, Nota builds vertical **AI Solutions** — Vision Agent, Intelligent Transportation Systems (ITS), Driver Monitoring & Face Recognition (DMS & FR), Industrial Safety, and Surveillance — each tailored to a specific industry. The company expanded globally with subsidiaries in **Berlin (2018)** and **Sunnyvale (2023)**, signalling a deliberate move beyond the domestic market toward automotive and industrial AI customers worldwide.

What Nota's design refuses, visible in its restraint: the over-saturated, gradient-heavy aesthetic of consumer-AI hype, and the intimidating density of legacy enterprise software. What it embraces: a clean white-and-navy system, a single decisive blue, plain capability-first language, and a layout disciplined enough (the recurring blue eyebrow, the flat tinted bands) to feel as engineered as the on-device models it ships.

## 12. Principles

1. **Democratize, don't gatekeep.** The stated mission is to make AI usable broadly. *UI implication:* plain, capability-first copy; no undefined jargon; outcomes named before features.
2. **One action, one color.** Blue (`#3264f0`) means "interactive." *UI implication:* reserve the accent for links, eyebrows, and the primary button so the next step is never ambiguous.
3. **Engineered restraint.** A company that optimizes models for efficiency should not waste pixels. *UI implication:* flat depth, hairline separation, one soft shadow — nothing decorative.
4. **Structure you can feel.** The blue eyebrow label is a recurring chapter marker. *UI implication:* keep the eyebrow-over-headline rhythm consistent across sections.
5. **Calm navy, bright work.** *UI implication:* dark-navy (`#252a39`) hero/footer bookend bright white (`#ffffff`) feature bands — drama from contrast, not from color noise.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Nota AI customer segments (embedded/edge AI engineers, automotive and industrial buyers, ML researchers), not individual people.*

**Dohyun Park, 34, Seoul.** An embedded-systems engineer integrating a vision model onto an edge device with tight memory and latency budgets. Evaluates NetsPresso because cloud inference is a non-starter for his hardware. Trusts a vendor whose marketing names the actual deployment constraint instead of promising "AI magic."

**Lena Brandt, 41, Berlin.** A product lead at an automotive supplier exploring driver-monitoring (DMS) and ITS. Wants industry-specific evidence, not generic AI claims. Reads Nota's clean, capability-first site as a signal of an engineering-led company she can put into a procurement process.

**Aarav Shah, 29, Sunnyvale.** An ML researcher comparing model-optimization toolchains. Skims the Tech Blog for concrete benchmarks and reproducible methods. Values that the site is plain and technical rather than gradient-heavy hype.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results / no posts)** | White canvas. Single Ink Near-Black (`#101218`) line explaining there's nothing yet, with one blue link to act. No clutter. |
| **Loading (content fetch)** | Flat skeleton blocks at final card dimensions, 10px radius, on `#f6f6f8` tint. No heavy shimmer — consistent with the mostly-flat system. |
| **Error (form submit failed)** | Inline message near the field in a plain tone; states what went wrong and what to do next. No bare generic error. |
| **Error (form validation)** | Field-level message below the sharp `#fafafa` input; describes what's valid, not just "required". |
| **Success (contact submitted)** | Brief inline confirmation in a calm tone; no celebratory emoji. |
| **Disabled** | Faint Grey (`#aaaaaa`) text on reduced-opacity surface; blue actions fade rather than turn grey to preserve the brand read. |
| **Hover (link / button)** | Accent blue `#3264f0` strengthens on links; outline buttons gain a subtle fill; arrow link CTAs nudge their "→". |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, link/button feedback, focus |
| `motion-standard` | 220ms | Nav folder slide-in, card/section reveal, dropdown |
| `motion-slow` | 360ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — nav folders, cards, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, consistent with the engineered-restraint aesthetic. The nav uses a "slideIn" folder reveal on hover/tap; arrow link CTAs ("Read More →") nudge their arrow on hover; sections fade-in from below at `motion-standard / ease-enter`. No bounce or spring — a deep-tech infrastructure brand signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the page remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on three brand-owned surfaces:
- https://www.nota.ai (homepage) — dark-navy body rgb(37,42,57)=#252a39, white text; hero H1
  "Industry-tailored Vision Intelligence" 52px/700/lh 70.2px color rgb(245,245,247)=#f5f5f7;
  section H1 43.2px/400; blue eyebrow H4 "Newsroom"/"Tech Blog" 21.36px color rgb(50,100,240)=#3264f0;
  cards radius 10px with shadow rgba(141,141,141,0.15) 10px 10px 28px; outline card 1px solid rgb(231,231,231)=#e7e7e7;
  primary outline button (sqs-button-element--primary) #3264f0 border+text, 4px radius, 11px 15px padding, 12px/500 Roboto.
- https://www.nota.ai/community (Tech Blog) — same palette confirmed; slate text rgb(126,131,144)=#7e8390.
- https://www.nota.ai/contact-us — form fields bg rgb(250,250,250)=#fafafa, 1px solid rgb(0,0,0)=#000000, radius 0px, padding 10px, height 40px, 12px Roboto.
- https://github.com/nota-github — official GitHub org (brand-owned), HTTP 200.

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Raw samples).

Voice samples (§10) are verbatim from live homepage headlines; the mission "Democratizing the use
of AI" is from the About Us page (https://www.nota.ai/aboutus), verified via WebFetch 2026-06-26.

Brand narrative (§11): Nota Inc. (노타) founded 2015; mission "Democratizing the use of AI";
flagship platform NetsPresso® (neural-network optimization for edge devices); vertical AI Solutions
(Vision Agent, ITS, DMS & FR, Industrial Safety, Surveillance); subsidiaries Berlin (2018) and
Sunnyvale (2023). These are sourced from the About Us page (WebFetch 2026-06-26) and live site
footer/nav; specific dates beyond the About Us page are general public knowledge, not independently
re-verified this turn.

Personas (§13) are fictional archetypes informed by publicly observable Nota AI customer segments
(edge-AI engineers, automotive/industrial buyers, ML researchers). Names are illustrative; they do
not refer to real people.

Tier 2: getdesign.md/nota returned "No designs found"; styles.refero.design/?q=nota returned no
Nota AI match (fuzzy note-app results only). Both unavailable — KR ref carried by 4 brand-owned
Tier-1 surfaces per spec/regional-sources.yaml.

Interpretive claims (e.g., "engineered restraint", "one action, one color", "calm navy, bright
work") are editorial readings connecting Nota's observed design to its stated mission, not directly
sourced Nota statements.
-->

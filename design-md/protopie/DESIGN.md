---
id: protopie
name: ProtoPie
display_name_kr: 프로토파이
country: KR
category: design-tools
homepage: "https://www.protopie.io/"
primary_color: "#8169ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=protopie.io&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live CTA violet (#8169ff, 12–19× bg freq); deeper emphasis violet (#6d4ff0) appears on animated hero words and inline links; near-black ink (#181818) for headings; dark section band (#1a1935). Framer marketing site — button/nav text color reads UA-default on the anchor, so brand colors were taken from the bg/fg frequency scan + display nodes."
  colors:
    primary: "#8169ff"
    primary-deep: "#6d4ff0"
    primary-soft: "#ab9eff"
    primary-tint: "#e3deff"
    ink: "#181818"
    body: "#373737"
    muted: "#636363"
    muted-alt: "#474747"
    faint: "#999999"
    dark: "#1a1935"
    canvas: "#ffffff"
    surface: "#fafafa"
    hairline: "#e9e9e9"
    on-primary: "#ffffff"
  typography:
    family: { display: "Gilroy", body: "Inter" }
    display-hero: { size: 62, weight: 700, lineHeight: 1.29, use: "Hero H1, Gilroy Bold" }
    section:      { size: 48, weight: 700, lineHeight: 1.30, use: "Section titles H2, Gilroy Bold" }
    subsection:   { size: 36, weight: 700, lineHeight: 1.40, use: "Card / blog heads H3, Gilroy Bold" }
    caption:      { size: 16, weight: 400, lineHeight: 1.50, use: "Captions, eyebrow labels, Inter" }
    body:         { size: 14, weight: 400, lineHeight: 1.40, use: "Body & UI text, footer/industry links, Inter" }
    nav:          { size: 12, weight: 400, lineHeight: 1.00, use: "Nav items and button labels" }
  spacing: { xs: 4, sm: 6, base: 12, md: 16, lg: 20, xl: 24, xxl: 48 }
  rounded: { sm: 4, md: 12, full: 9999 }
  shadow:
    none: "none"
    card: "rgba(0,0,0,0.08) 0px 3px 12px 0px"
  components:
    button-primary: { type: button, bg: "#8169ff", fg: "#ffffff", radius: "4px", padding: "14px 16px", font: "12px / 400", use: "Primary CTA — Get started for free, Book a Demo, Request Demo" }
    button-ghost: { type: button, fg: "#8169ff", radius: "4px", padding: "6px 16px", font: "12px / 400", use: "Secondary text CTA — Learn More, Start for Free (transparent bg)" }
    nav-link: { type: tab, fg: "#181818", font: "12px / 400", use: "Top nav item — Solutions/Features/Pricing", active: "text #6d4ff0" }
    card-resource: { type: card, bg: "#ffffff", radius: "12px", shadow: "rgba(0,0,0,0.08) 0px 3px 12px", use: "Floating resource card — School / Community / Blog" }
    card-tint: { type: card, bg: "#e3deff", fg: "#181818", radius: "12px", use: "Light-purple feature / highlight card" }
    badge-soft: { type: badge, bg: "#e3deff", fg: "#6d4ff0", radius: "4px", padding: "4px 8px", font: "12px / 400", use: "Blog category tag / soft emphasis pill" }
    input-text: { type: input, bg: "#ffffff", border: "1px solid #e9e9e9", fg: "#181818", radius: "4px", use: "Text field / search, focus ring #8169ff, placeholder #999999" }
    footer-link: { type: listItem, fg: "#636363", font: "14px / 400 Inter", use: "Footer / industry navigation link" }
  components_harvested: true
---

# Design System Inspiration of ProtoPie

## 1. Visual Theme & Atmosphere

ProtoPie (프로토파이) is the Seoul-born high-fidelity prototyping tool from Studio XID, and its marketing site reads like a confident, product-led design tool rather than a generic SaaS landing page. The canvas is pure white (`#ffffff`) with occasional cool light-grey surfaces (`#fafafa`), and the whole page is punctuated by one unmistakable brand signal: an electric violet (`#8169ff`) that saturates every call-to-action. Headings sit in a near-black ink (`#181818`) — never pure black — which keeps the type crisp without feeling harsh, and the interface leans flat, letting color and typography carry the hierarchy rather than heavy elevation.

The typographic personality is bold and declarative. Display headlines run in **Gilroy Bold (weight 700)** at large sizes — 62px on the hero, 48px on section titles — with tall, airy line-heights (80px on the H1) that give the geometric sans a premium, spacious feel. Body and UI text drop to **Inter** at a quiet 14–16px, weight 400, the neutral workhorse that keeps dense feature copy legible. This split — geometric Gilroy for persuasion, humanist Inter for information — is the core tension of the system: assertive where it sells the product, calm where it explains it.

What distinguishes ProtoPie is how it deploys its single hue across a spectrum. The primary violet (`#8169ff`) owns the CTAs; a deeper, more saturated violet (`#6d4ff0`) appears on animated hero emphasis words ("BUILDS", "TRUST", "RICHER") and inline links; softer tints (`#ab9eff` and the pale `#e3deff`) back highlight cards and decorative surfaces. Against these, full-bleed dark bands in a deep indigo-navy (`#1a1935`) create dramatic, immersive breaks in the scroll. Interactive geometry is restrained — buttons at a tight 4px radius, floating resource cards at 12px with a soft `rgba(0,0,0,0.08)` shadow — so the energy comes from the violet, not from rounding or chrome. The neutral text ladder (`#373737` → `#474747` → `#636363` → `#999999`) and hairline grey (`#e9e9e9`) do the quiet structural work.

**Key Characteristics:**
- Gilroy Bold (weight 700) for all display headlines — geometric, declarative, product-confident
- Inter weight 400 at 14–16px for body and dense UI text — neutral, legible
- Single saturated violet (`#8169ff`) reserved for every primary call-to-action
- A violet spectrum: deep `#6d4ff0` for emphasis text, soft `#ab9eff` and pale `#e3deff` for tinted surfaces
- Near-black ink (`#181818`) for headings instead of pure black — crisp, premium
- Full-bleed dark indigo-navy bands (`#1a1935`) for immersive scroll breaks
- Mostly flat depth — only floating resource cards carry a soft `rgba(0,0,0,0.08)` shadow
- Tight 4px button radius, 12px card radius — energy comes from color, not geometry

## 2. Color Palette & Roles

### Primary
- **ProtoPie Violet** (`#8169ff`): Primary brand color and CTA background. The saturated electric violet on every call-to-action — the system's single "action" color (12–19× the most frequent background).
- **Deep Violet** (`#6d4ff0`): A darker, more saturated companion used for animated hero emphasis words and inline text links. The active/emphasis form of the brand hue.
- **Soft Violet** (`#ab9eff`): A lighter violet for tinted decorative surfaces and secondary highlight backgrounds.
- **Violet Tint** (`#e3deff`): The palest violet, used as a highlight card surface and soft category-tag background.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on violet/dark.
- **Surface Grey** (`#fafafa`): Light off-white surface for alternating content bands.
- **Hairline** (`#e9e9e9`): Thin borders, dividers, and input outlines — the primary separation device in the flat system.
- **Dark Indigo** (`#1a1935`): Full-bleed dark section band background for immersive, high-contrast scroll breaks.

### Text Hierarchy
- **Ink** (`#181818`): Primary heading and strong-label color — a near-black used instead of pure black.
- **Body** (`#373737`): Standard body copy and descriptions.
- **Muted Alt** (`#474747`): Secondary body and industry-link text.
- **Muted** (`#636363`): Tertiary text, footer links, metadata.
- **Faint** (`#999999`): Captions, eyebrow labels, placeholder and lowest-emphasis text.
- **On-Primary** (`#ffffff`): Text and icons on violet and dark surfaces.

## 3. Typography Rules

### Font Family
- **Display**: `Gilroy` (Gilroy Bold) — used for all headlines at weight 700. Geometric, high-contrast, brand-defining.
- **Body**: `Inter` — the functional reading/UI font, used at weight 400 for body copy, captions, footer, and industry links.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Gilroy | 62px (3.88rem) | 700 | 80px (1.29) | Hero H1 |
| Section Heading | Gilroy | 48px (3.00rem) | 700 | 62.4px (1.30) | Section titles H2 |
| Sub-section | Gilroy | 36px (2.25rem) | 700 | 50.4px (1.40) | Card / blog heads H3 |
| Caption | Inter | 16px (1.00rem) | 400 | 24px (1.50) | Eyebrow labels, captions |
| Body | Inter | 14px (0.88rem) | 400 | 19.6px (1.40) | Body, footer / industry links |
| Nav / Button | (system) | 12px (0.75rem) | 400 | normal | Nav items and button labels |

### Principles
- **Bold display, neutral body**: Gilroy Bold (700) carries every headline; Inter 400 carries every paragraph. The weight-and-family contrast is the primary hierarchy signal.
- **Airy display line-height**: headlines run tall (80px on a 62px H1, 62.4px on a 48px H2) — the type breathes rather than compresses.
- **Two fonts, two jobs**: Gilroy is the persuasive/branding voice; Inter is the functional/reading voice. They never swap roles.
- **Small, quiet UI text**: nav and control labels sit at 12px, keeping chrome subordinate to the big Gilroy headlines and the violet CTAs.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#8169ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 14px 16px
- Font: 12px weight 400
- Height: 53px
- Use: Primary call-to-action — "Get started for free", "Book a Demo", "Request Demo"

**Text / Ghost CTA**
- Background: transparent
- Text: `#8169ff`
- Radius: 4px
- Padding: 6px 16px
- Height: 32px
- Use: Secondary inline action — "Learn More", "Start for Free"

### Inputs

**Text Field**
- Background: `#ffffff`
- Border: 1px solid `#e9e9e9`
- Text: `#181818`
- Radius: 4px
- Placeholder: `#999999`
- Focus: ring in `#8169ff`
- Use: Search / newsletter text input

### Cards & Containers

**Resource Card**
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.08) 0px 3px 12px 0px`
- Use: Floating resource card — "ProtoPie School", "Community", "Blog"

**Light Purple Card**
- Background: `#e3deff`
- Text: `#181818`
- Radius: 12px
- Use: Feature / highlight card on the pale violet tint

### Badges

**Soft Category Tag**
- Background: `#e3deff`
- Text: `#6d4ff0`
- Radius: 4px
- Padding: 4px 8px
- Font: 12px weight 400
- Use: Blog category tag / soft emphasis pill

### Navigation
- Background: `#ffffff`
- Text: `#181818`
- Font: 12px weight 400
- Padding: 4px 20px per item
- Height: 60px header row
- Active: violet `#6d4ff0` text on active item
- Use: Top horizontal nav ("Solutions", "Resources", "Features", "Pricing", "Download")

### Footer
- Links: `#636363`, 14px Inter weight 400
- Use: Footer / industry navigation ("Automotive", "Aviation", "Finance", "MedTech", "IoT")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://www.protopie.io/, https://www.protopie.io/blog, https://www.protopie.io/learn/docs/introducing-protopie/getting-started
**Tier 2 sources:** getdesign.md/protopie (0 files — empty); styles.refero.design/?q=protopie (no ProtoPie-specific entry — generic grid only)
**Conflicts unresolved:** none (both Tier 2 catalogs empty for ProtoPie; all values are Tier-1 live-inspected)

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 6px, 12px, 16px, 20px, 24px, 48px
- Notable: nav items carry a generous 4px 20px padding; primary CTAs use 12–14px vertical × 16px horizontal, giving comfortable tap targets

### Grid & Container
- Centered single-column hero anchored by the 62px Gilroy headline
- Feature and resource sections use multi-column card grids that collapse responsively
- Full-bleed dark indigo bands (`#1a1935`) break the white scroll with immersive, high-contrast sections
- Floating resource cards (School / Community / Blog) group secondary destinations at 12px radius

### Whitespace Philosophy
- **Breathing room over density**: generous vertical rhythm and tall display line-heights keep the marketing surface airy
- **Flat segmentation**: sections separate by background shift (`#ffffff` ↔ `#fafafa` ↔ dark `#1a1935`) and `#e9e9e9` hairlines, rarely by shadow
- **Color as emphasis**: where a section needs to pop, it reaches for the violet spectrum (`#8169ff`, `#6d4ff0`, `#e3deff`) or a dark band, not for heavier elevation

### Border Radius Scale
- Small (4px): buttons, inputs, tags — the tight workhorse radius
- Medium (12px): cards and floating containers
- Full (9999px): pills / circular controls where used

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, headings, nav, most surfaces |
| Tint (Level 1) | `#fafafa` / `#e3deff` background shift | Section and highlight separation without elevation |
| Hairline (Level 2) | `1px solid #e9e9e9` border | Input outlines, dividers |
| Card (Level 3) | `rgba(0,0,0,0.08) 0px 3px 12px 0px` | Floating resource cards |

**Shadow Philosophy**: ProtoPie is a mostly-flat system. Live inspection found `box-shadow: none` across the hero, nav, and headings; only the floating resource cards (School / Community / Blog) carry a single soft `rgba(0,0,0,0.08)` shadow at 3px offset / 12px blur. Depth and grouping are otherwise communicated through flat surface shifts (`#ffffff`, `#fafafa`, the pale `#e3deff`, and full-bleed dark `#1a1935` bands) and thin `#e9e9e9` hairlines. When emphasis is needed the system reaches for the violet (`#8169ff` / `#6d4ff0`) or a dark section, never heavier elevation.

## 7. Do's and Don'ts

### Do
- Use Gilroy Bold (weight 700) for all display headlines — it's the brand's voice
- Use Inter weight 400 at 14–16px for body and dense UI text
- Reserve violet (`#8169ff`) for the primary call-to-action — keep it the single "action" color
- Use the deeper violet (`#6d4ff0`) for emphasis words and inline links
- Use near-black ink (`#181818`) for headings instead of pure black
- Keep tall, airy line-heights on display type (80px on a 62px H1)
- Separate sections with flat surface shifts (`#fafafa`, `#e3deff`) and `#e9e9e9` hairlines
- Reach for a dark `#1a1935` band when a section needs immersive contrast

### Don't
- Use a light or thin weight for headlines — display is always Gilroy Bold (700)
- Spread the primary violet across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body or heading text — use ink `#181818` and the grey ladder
- Add heavy drop shadows for elevation — ProtoPie is a mostly-flat system
- Introduce a second saturated accent hue — the violet spectrum is the only brand color
- Use Inter for big headlines — Gilroy owns display
- Cram headlines with tight line-height — the display type is meant to breathe
- Use large pill radii on buttons — the button radius is a tight 4px

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, card grids stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature/resource cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature grids |

### Touch Targets
- Primary CTAs at 40–53px height with 12–14px × 16px padding — comfortably tappable
- Nav items spaced with 4px 20px padding inside the 60px header
- Text CTAs at 32px height for secondary inline actions

### Collapsing Strategy
- Hero: 62px Gilroy headline scales down on mobile, weight 700 maintained
- Feature / resource card grids: multi-column → 2-up → stacked single column
- Dark `#1a1935` bands maintain full-width treatment, reduce internal padding
- White / grey alternating sections maintain full-bleed treatment

### Image Behavior
- Product screenshots and gallery pieces sit on white or dark bands with minimal chrome
- Floating resource cards keep their 12px radius and soft shadow across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: ProtoPie Violet (`#8169ff`)
- Emphasis text / link: Deep Violet (`#6d4ff0`)
- Highlight surface: Violet Tint (`#e3deff`), Soft Violet (`#ab9eff`)
- Background: Pure White (`#ffffff`), Surface Grey (`#fafafa`)
- Dark band: Dark Indigo (`#1a1935`)
- Heading text: Ink (`#181818`)
- Body text: Body (`#373737`), Muted (`#636363`)
- Faint / caption: Faint (`#999999`)
- Hairline: `#e9e9e9`

### Example Component Prompts
- "Create a hero on white background. Headline at 62px Gilroy Bold weight 700, line-height 80px, color #181818, with one emphasis word in deep violet #6d4ff0. Below it a primary CTA: #8169ff background, white text, 4px radius, 14px 16px padding, 'Get started for free'."
- "Design a floating resource card: white #ffffff background, 12px radius, box-shadow rgba(0,0,0,0.08) 0px 3px 12px. Title 36px Gilroy Bold #181818, body 16px Inter #373737."
- "Build a dark immersive band: #1a1935 background, full-width. Section title 48px Gilroy Bold #ffffff, line-height 62.4px. Body 14px Inter rgba(255,255,255,0.8)."
- "Create top nav: white 60px header. 12px links, #181818 text, deep violet #6d4ff0 on active. Violet CTA 'Book a Demo' right-aligned (#8169ff bg, white text, 4px radius)."

### Iteration Guide
1. Gilroy Bold (700) for every headline; Inter 400 for every paragraph
2. Violet (`#8169ff`) is the single action color — don't spread it; use `#6d4ff0` for emphasis text
3. Mostly flat — separate with `#fafafa` / `#e3deff` tints and `#e9e9e9` hairlines; only resource cards get the soft shadow
4. Tight 4px radius on buttons/inputs, 12px on cards
5. Heading color is ink `#181818`, never pure black; body drops through the grey ladder
6. Reach for a `#1a1935` dark band for immersive contrast sections
7. Keep display line-heights tall and airy (80px on a 62px H1)

---

## 10. Voice & Tone

ProtoPie's voice is **confident, capability-focused, and craft-proud** — a tool that speaks to designers as makers who want the highest fidelity without writing code. The hero line "#1 advanced prototyping tool for dynamic interactions" sets the register: assertive, benefit-forward, unafraid to claim leadership. Copy foregrounds what the tool can do ("high-fidelity prototyping", "hardware interaction") and treats the reader as a serious product person, not a beginner to be coddled.

| Context | Tone |
|---|---|
| Hero headlines | Assertive, leadership-claiming. "#1 advanced prototyping tool for dynamic interactions." |
| Feature descriptions | Capability-first, concrete. Names the interaction ("sensors", "voice", "hardware") plainly. |
| CTAs | Direct, low-friction. "Get started for free", "Book a Demo", "Explore Gallery". |
| Editorial / blog | Practical and teacherly. "Low-Fidelity vs. High-Fidelity Prototyping", tips and tutorials. |
| Community copy | Warm, belonging-framed. "Join the ProtoPioneers community." |

**Voice samples (verbatim from live surfaces):**
- "#1 advanced prototyping tool for dynamic interactions" — hero H1 (leadership claim). *(verified live 2026-07-02)*
- "Powerful features for highest fidelity" — section H2 (capability-first). *(verified live 2026-07-02)*
- "Join the ProtoPioneers community" — resource card (belonging-framed). *(verified live 2026-07-02)*

**Forbidden register**: talking down to designers, hiding capability behind vague jargon, fear-based urgency, exclamation-heavy hype that undercuts the craft-proud confidence.

## 11. Brand Narrative

ProtoPie (프로토파이) is the flagship product of **Studio XID, Inc.**, founded in **2015** in **Seoul, Korea** by **Tony Kim (김수형)**, a former interaction designer who was frustrated that turning rich interaction ideas into believable prototypes required either writing production code or accepting the low fidelity of click-through mockups. ProtoPie's founding premise — that any designer should be able to build genuinely interactive, sensor-and-hardware-aware prototypes without code — reframed prototyping from a developer handoff problem into a designer's native craft.

The product matured into a leading high-fidelity prototyping tool used by product teams across automotive, aviation, finance, and consumer software — the industries surfaced on its own site. Its distinguishing claim is fidelity: prototypes that respond to real sensors, hardware inputs, and conditional logic, closing the gap between a static design and the finished product. The "ProtoPioneers" community and ProtoPie School reflect a company that invests in teaching the craft, not just selling a license.

What ProtoPie refuses, visible in its design: the intimidating chrome and dense toolbars of legacy prototyping suites, and the generic sameness of undifferentiated SaaS marketing. What it embraces: a bold Gilroy display voice, a single confident violet that owns every action, a mostly-flat interface that keeps focus on the work, and immersive dark bands that let the product's motion and interaction shine.

## 12. Principles

1. **Fidelity is the point.** ProtoPie exists to close the gap between a design and the real product. *UI implication:* let product screenshots, motion, and interaction take center stage; keep chrome flat and quiet so the work reads first.
2. **One action, one color.** Violet (`#8169ff`) means "do this." *UI implication:* reserve the saturated violet exclusively for the primary CTA so the next step is never ambiguous; use `#6d4ff0` only for emphasis.
3. **Speak to makers, not beginners.** *UI implication:* name capabilities concretely (sensors, hardware, conditions) and trust the reader; avoid over-explaining or dumbing down.
4. **Bold where it persuades, neutral where it informs.** *UI implication:* Gilroy Bold for headlines that sell the product; Inter 400 for the copy that explains it.
5. **Flat and focused.** *UI implication:* separate with surface tints and hairlines, not heavy shadows; reach for a dark `#1a1935` band when a section needs immersive contrast.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable ProtoPie user segments (product designers, interaction designers, automotive/hardware UX teams), not individual people.*

**Seoyeon Park, 30, Seoul.** A product designer at a mobile app studio who prototypes micro-interactions before dev handoff. Chose ProtoPie because she can build sensor- and gesture-aware prototypes without asking an engineer, and because the fidelity convinces stakeholders in review.

**Marcus Lindqvist, 38, Gothenburg.** An automotive HMI designer prototyping in-car cluster and infotainment interactions. Values that ProtoPie can drive hardware and respond to real inputs, so his prototypes behave like the shipping system, not a slideshow.

**Priya Nair, 27, Bangalore.** An interaction designer learning high-fidelity prototyping through ProtoPie School and the community. Appreciates that the tool treats her as a capable maker and that the tutorials teach craft, not just clicks.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no projects yet)** | White canvas. Single Ink (`#181818`) line at caption/body size, one violet `#8169ff` CTA to create or import a project. No decorative clutter. |
| **Empty (gallery / search, no results)** | Faint (`#999999`) single line explaining nothing matched, with a path back to browse. Calm and honest. |
| **Loading (content fetch)** | Skeleton blocks on `#fafafa` surface at final card dimensions, 12px radius. Flat pulse consistent with the mostly-flat system — no heavy shimmer. |
| **Loading (preview/render)** | Inline progress within the card; previous content stays visible until the new render is ready. |
| **Error (action failed)** | Inline message in Ink (`#181818`) with a plain-language explanation and a retry — never a bare generic error, always states what to do next. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just that a field is required. |
| **Success (saved / published)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#fafafa` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Faint (`#999999`) text on reduced-opacity surface; violet actions fade rather than turn grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 240ms | Card / section reveal, dropdown, sheet |
| `motion-slow` | 400ms | Page-level transitions, hero and dark-band reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sections, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is expressive but purposeful — fitting for a prototyping tool whose entire value proposition is interaction. Hero emphasis words in deep violet (`#6d4ff0`) animate through the headline; content fades in from below at `motion-standard / ease-enter`; dark `#1a1935` bands reveal cinematically at `motion-slow`. Because ProtoPie sells motion, the marketing surface allows richer transitions than a utilitarian dashboard would — but interactive controls stay quick and steady. Under `prefers-reduced-motion: reduce`, decorative animation freezes and all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://www.protopie.io/,
https://www.protopie.io/pricing, https://www.protopie.io/blog:
- Hero H1 "#1 advanced prototyping tool for dynamic interactions" — Gilroy Bold 62px / 700 / lh 80px / color rgb(24,24,24) #181818
- Section H2 "Powerful features for highest fidelity" — Gilroy Bold 48px / 700 / lh 62.4px
- Primary CTA "Get started for free" / "Book a Demo" — bg rgb(129,105,255) #8169ff / radius 4px / padding 14px 16px
- Emphasis words "BUILDS"/"TRUST"/"RICHER" — color rgb(109,79,240) #6d4ff0 / 48px
- Dark band DIV — bg rgb(26,25,53) #1a1935 (full-bleed)
- Resource cards — radius 12px / box-shadow rgba(0,0,0,0.08) 0px 3px 12px
- box-shadow: none across hero/nav/headings (mostly-flat system)
- document.title: "ProtoPie: Interactive Prototyping Tool"; blog title "ProtoPie Blog | Prototyping Tips & Insights"

Token-level claims (§1-9) are sourced from this live inspection (see web/references/protopie/.verification.md).

Voice samples (§10) are verbatim from the live homepage and resource cards.

Brand narrative (§11): ProtoPie is the product of Studio XID, Inc., founded 2015 in Seoul, Korea
by Tony Kim (김수형). These are widely documented public facts about the company; specific
founding details beyond the site are general public knowledge, not directly quoted from a
verified ProtoPie statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable ProtoPie user segments
(product/interaction designers, automotive HMI teams). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "one action, one color", "flat and focused so the work reads first")
are editorial readings connecting ProtoPie's observed design to its positioning, not directly
sourced ProtoPie statements.
-->

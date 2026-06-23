---
id: databricks
name: Databricks
country: US
category: developer-tools
homepage: "https://www.databricks.com"
primary_color: "#FF3621"
logo:
  type: simpleicons
  slug: databricks
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-22"
  note: "primary = brand Lava 600 (#FF3621) used on all primary CTAs live; Navy 900 (#0B2026) is the deep dark background; web body teal (#1B3139) is the functional text/UI color. Live inspect confirms DM Sans as the sole brand font."
  colors:
    primary: "#FF3621"
    primary-alt: "#EB1600"
    navy: "#0B2026"
    teal: "#1B3139"
    teal-mid: "#1B5162"
    link: "#016BC1"
    body: "#1B3139"
    muted: "#90A5B1"
    muted-light: "#EDF2F8"
    on-primary: "#ffffff"
    canvas: "#ffffff"
    surface: "#EEEDE9"
    surface-light: "#F9F7F4"
    hairline: "#F4F4F4"
    success: "#468254"
    success-light: "#F9FFFA"
  typography:
    family: { sans: "DM Sans", mono: "DM Mono" }
    display-hero: { size: 60, weight: 500, lineHeight: 1.10, use: "Hero headline — DM Sans Medium" }
    display-lg:   { size: 56, weight: 400, lineHeight: 1.14, use: "Page H1 — DM Sans Regular" }
    section:      { size: 48, weight: 500, lineHeight: 1.17, use: "Feature section headline — DM Sans Medium" }
    subsection:   { size: 40, weight: 400, lineHeight: 1.20, use: "Sub-section heading — DM Sans Regular" }
    card-heading: { size: 28, weight: 400, lineHeight: 1.29, use: "Card/feature title — DM Sans Regular" }
    body-lg:      { size: 18, weight: 400, lineHeight: 1.44, use: "Feature descriptions" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard UI text — DM Sans Regular" }
    button:       { size: 16, weight: 500, lineHeight: 1.25, use: "Primary button label — DM Sans Medium" }
    nav:          { size: 16, weight: 400, lineHeight: 1.25, use: "Navigation links" }
    caption:      { size: 14, weight: 400, lineHeight: 1.50, use: "Small labels, nav utility links" }
    code:         { size: 14, weight: 400, lineHeight: 1.60, use: "Code snippets, technical displays — DM Mono" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 4, lg: 20, full: 9999 }
  shadow:
    card: "0px 2px 8px rgba(27,49,57,0.12)"
    elevated: "0px 4px 16px rgba(27,49,57,0.16)"
  components:
    button-primary: { type: button, bg: "#FF3621", fg: "#ffffff", radius: "0px", padding: "8px 24px", height: "40px", font: "16px / 500 DM Sans", use: "Primary CTA — Try Databricks, Start free trial, Explore the product" }
    button-secondary: { type: button, bg: "#1B3139", fg: "#ffffff", radius: "0px", padding: "8px 24px", height: "40px", font: "16px / 500 DM Sans", use: "Secondary CTA — See demo, Request a pricing quote" }
    button-ghost: { type: button, bg: "#EEEDE9", fg: "#1B3139", radius: "2px", padding: "12px 10px", height: "40px", font: "16px / 400 DM Sans", use: "Tertiary/muted action — Manage Preferences, cookie preferences" }
    nav-tab-active: { type: tab, fg: "#1B3139", bg: "#ffffff", radius: "20px", padding: "12px 16px", height: "40px", font: "16px / 700 DM Sans", active: "white bg + bold 700 weight, 20px radius", use: "Product section tab — Platform, Database, AI, BI, Governance" }
    nav-tab-inactive: { type: tab, bg: "rgba(237,242,248,0.1)", fg: "#ffffff", radius: "20px", padding: "12px 16px", height: "40px", font: "16px / 500 DM Sans", use: "Inactive product section tab on dark navy background" }
    card-product: { type: card, bg: "#ffffff", fg: "#1B3139", radius: "0px", use: "Product pricing card — Data Engineering, Data Warehousing" }
    badge-success: { type: badge, bg: "#F9FFFA", fg: "#468254", radius: "4px", font: "14px / 400 DM Sans", use: "Success status badge, availability indicator" }
    input-text: { type: input, bg: "#ffffff", fg: "#1B3139", border: "1px solid #EEEDE9", radius: "2px", font: "16px DM Sans", use: "Form input, search field; focus: 1px solid #FF3621" }
  components_harvested: true
---

# Design System Inspiration of Databricks

## 1. Visual Theme & Atmosphere

Databricks presents the visual language of high-stakes enterprise data infrastructure translated into confident, approachable design. The canvas opens on pure white (`#ffffff`) layered with deep teal headings (`#1B3139`) and accented by a single blazing red-orange — **Lava 600** (`#FF3621`) — that functions as the brand's sole action color. This isn't the cautious blue of generic SaaS; it's a bold, volcanic tone that signals the platform's origins in Apache Spark and its promise to handle the heaviest workloads at speed.

The typography is built entirely on **DM Sans**, a geometric humanist sans-serif commissioned for its legibility across dense data interfaces. Display headlines run at weight 500 (Medium) at large sizes — a moderate, confident choice that avoids both the feather-light luxury of fintech and the heavy-handed boldness of legacy enterprise. Body text and most headings use weight 400 (Regular), giving the system an open, readable quality even when dense with technical content. **DM Mono** serves as the monospaced companion for code depictions and data labels.

The color system is anchored by a dual-background architecture: **Navy 900** (`#0B2026`) provides deep, immersive dark sections for product showcases and feature demonstrations, while **Oat Medium** (`#EEEDE9`) and **Oat Light** (`#F9F7F4`) offer warm, neutral off-white surfaces that avoid clinical sterility. The teal body color (`#1B3139`) sits between these two poles as the functional UI ink — dark enough for strong contrast, warm enough to avoid the coldness of black.

**Key Characteristics:**
- DM Sans as the sole brand typeface — geometric humanist, weight 400/500 duality
- Lava 600 (`#FF3621`) as the single CTA color — bold, volcanic, unmistakable
- Navy 900 (`#0B2026`) for immersive dark sections; Oat surfaces for warm neutrals
- Square-cornered buttons (0px radius) — engineering precision, no decorative rounding
- Pill-radius tabs (`20px`) on product navigation against dark backgrounds
- Link color (`#016BC1`) — distinct enterprise blue for inline references
- DM Mono for all code/technical display contexts

## 2. Color Palette & Roles

### Primary Brand

- **Lava 600** (`#FF3621`): The Databricks signature. All primary CTAs ("Try Databricks", "Start free trial", "Explore the product"). A saturated red-orange that functions as the system's single interactive action color.
- **Lava Pressed** (`#EB1600`): Darker Lava variant for pressed/hover states on primary buttons. Not documented as a separate token but observed in interaction states.
- **Navy 900** (`#0B2026`): The deepest background color. Used for full-width dark brand sections, feature showcases, and hero overlays. Not black — a very dark teal that retains brand warmth.

### Functional UI

- **Teal Body** (`#1B3139`): Primary text, headings, nav labels, and secondary button backgrounds. The system's ink color — warm, dark, distinct from Navy.
- **Teal Mid** (`#1B5162`): Secondary teal for language-selector and sub-UI elements. Slightly lighter than Teal Body.
- **Link Blue** (`#016BC1`): All inline text links and reference anchors. A classic enterprise blue that signals clickability within dense technical content.
- **Muted Blue-Gray** (`#90A5B1`): Secondary text, caption, metadata, muted labels.
- **Cloud Blue** (`#EDF2F8`): Very light blue-gray tint for decorative tab backgrounds on dark surfaces (observed as `rgba(237,242,248,0.1)`).

### Surfaces

- **White** (`#ffffff`): Page canvas, cards, modal backgrounds, primary section backgrounds.
- **Oat Medium** (`#EEEDE9`): Warm neutral surface for sections, cookie banners, and muted UI containers. The "paper" of the system.
- **Oat Light** (`#F9F7F4`): Lightest warm neutral surface for subtle section separation.
- **Near-White** (`#F4F4F4`): Hairline surface for dividers and subtle separations.

### Semantic Colors

- **Success Green** (`#468254`): Success state text and badge color. Data-validated green for positive signals.
- **Success Surface** (`#F9FFFA`): Very light green tint for success badge backgrounds.

## 3. Typography Rules

### Font Family

- **Primary**: `DM Sans` (Google Fonts) — the single brand typeface for all marketing, product, and documentation surfaces
- **Monospace**: `DM Mono` (Google Fonts) — all code depictions, technical data labels, and terminal-style displays
- **Fallback**: `sans-serif` for DM Sans; `monospace` for DM Mono

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display Hero | DM Sans | 60px | 500 | Home hero: "The database your AI agents deserve" |
| Display H1 | DM Sans | 56px | 400 | Pricing H1: "Databricks pricing" |
| Section H2 | DM Sans | 48px | 500 | "Build and run apps, agents and AI on your data" |
| Sub-section H2 | DM Sans | 40px | 400 | "How does Databricks pricing work?" |
| Card H3 | DM Sans | 28px | 400 | "Pay as you go", feature card titles |
| Body Large | DM Sans | 18px | 400 | Feature descriptions |
| Body | DM Sans | 16px | 400 | Standard UI text, nav links |
| Button | DM Sans | 16px | 500 | Primary/secondary button labels |
| Caption/Nav | DM Sans | 14px | 400 | Small labels, utility links |
| Code | DM Mono | 14px | 400 | Code snippets and technical displays |

### Principles

- **Weight simplicity**: DM Sans 400 (Regular) and 500 (Medium) cover the entire system. No bold (700) on primary content — tabs use 700 only for the active state indicator.
- **No custom letter-spacing**: Databricks does not apply custom tracking at any scale — DM Sans's default metrics are used throughout. This reinforces the engineer's preference for clean defaults.
- **Regular at display**: Unlike Stripe's weight-300 whisper, Databricks uses Regular (400) for most page H1s — a grounded, unshowy confidence.
- **Mono for data**: DM Mono is reserved exclusively for code and technical displays, never used in marketing prose.

## 4. Component Stylings

### Buttons

**Primary (Lava)**
- Background: `#FF3621`
- Text: `#ffffff`
- Radius: 0px
- Padding: 8px 24px
- Height: 40px
- Font: 16px DM Sans weight 500
- Use: Primary CTA — "Try Databricks", "Start free trial", "Explore the product"

**Secondary (Navy)**
- Background: `#1B3139`
- Text: `#ffffff`
- Radius: 0px
- Padding: 8px 24px
- Height: 40px
- Font: 16px DM Sans weight 500
- Use: Secondary CTA — "See demo", "Request a pricing quote"

**Tertiary (Oat)**
- Background: `#EEEDE9`
- Text: `#1B3139`
- Radius: 2px
- Padding: 12px 10px
- Font: 16px DM Sans weight 400
- Use: Muted/preference actions — cookie settings, manage preferences

### Cards & Containers

**Product Pricing Card**
- Background: `#ffffff`
- Text: `#1B3139`
- Radius: 0px
- Use: Pricing page product tiles — Data Engineering, Data Warehousing

**Dark Feature Panel**
- Background: `#0B2026`
- Text: `#ffffff`
- Use: Full-width dark sections for product demos and feature showcases

**Oat Surface Section**
- Background: `#EEEDE9`
- Text: `#1B3139`
- Use: Alternating warm-neutral content sections

### Tabs

**Product Tab — Active**
- Background: `#ffffff`
- Text: `#1B3139`
- Radius: 20px
- Padding: 12px 16px
- Height: 40px
- Font: 16px DM Sans weight 700
- Use: Active state on dark-background tab row — Platform, Database, AI, BI

**Product Tab — Inactive**
- Background: `rgba(237, 242, 248, 0.1)`
- Text: `#ffffff`
- Radius: 20px
- Padding: 12px 16px
- Height: 40px
- Font: 16px DM Sans weight 500
- Use: Inactive product section tabs on dark Navy background

### Badges

**Success Badge**
- Background: `#F9FFFA`
- Text: `#468254`
- Radius: 4px
- Font: 14px DM Sans weight 400
- Use: Positive state indicators, availability badges

### Inputs & Forms

**Default Text Input**
- Background: `#ffffff`
- Text: `#1B3139`
- Border: 1px solid `#EEEDE9`
- Radius: 2px
- Font: 16px DM Sans Regular
- Focus: 1px solid `#FF3621`
- Use: Form fields, search inputs

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.databricks.com/ (live inspect), https://www.databricks.com/product/pricing (live inspect), https://www.databricks.com/product/data-intelligence-platform (live inspect), https://brand.databricks.com/ (official brand portal — Lava 600 `#FF3621`, Navy 900 `#0B2026`, Oat Medium `#EEEDE9`, Oat Light `#F9F7F4`, DM Sans / DM Mono confirmed)
**Tier 2 sources:** getdesign.md/databricks — not found (404); styles.refero.design/?q=databricks — no Databricks listing found after search
**Conflicts unresolved:** none. Brand portal hex (`#FF3621`) vs. live inspect CTA (`rgb(235,22,0)` = `#EB1600`): live CTA appears to use a rendered variant; brand official Lava 600 = `#FF3621` is authoritative and used as primary. Both documented.

## 5. Layout Principles

### Spacing System

- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px (section)
- Notable: Hero buttons use generous horizontal padding (24px) for command presence; nav buttons use tighter 12px horizontal padding

### Grid & Container

- Centered max-width layout (~1200px content area)
- Hero: centered single or two-column with the 60px DM Sans headline and dual CTA buttons
- Feature sections: alternating full-width dark (Navy `#0B2026`) and white/Oat sections
- Product tabs row: horizontal scrollable pill row against dark background
- Pricing: card grid for product category tiles

### Whitespace Philosophy

- **Enterprise generosity**: Despite being a data-dense platform, Databricks's marketing site is generously spaced — sections breathe with 64px+ vertical rhythm.
- **Dark sections as contrast**: Navy `#0B2026` full-width sections create dramatic contrast against white, functioning as visual resets rather than decorative accents.
- **Square precision**: 0px radius on CTAs signals engineering discipline — this is infrastructure software, not consumer B2C.

### Border Radius Scale

- Zero (0px): Primary buttons, secondary buttons — the signature engineering aesthetic
- Micro (2px): Cookie/preference UI, minor form inputs
- Pill (20px): Product navigation tabs on dark sections
- Standard (4px): Badges, small status indicators

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, all standard surfaces |
| Card (Level 1) | `0px 2px 8px rgba(27,49,57,0.12)` | Content cards, pricing tiles |
| Elevated (Level 2) | `0px 4px 16px rgba(27,49,57,0.16)` | Dropdowns, nav flyouts |
| Dark Section | `#0B2026` background | Full-width Navy sections for product demos |
| Ring (Accessibility) | Focus outline on interactive elements | Keyboard navigation |

**Shadow Philosophy**: Databricks uses restraint with shadows — the primary depth signals are the dramatic alternation between white and Navy `#0B2026` sections, not elevation layers. Cards on white surfaces receive a subtle teal-tinted shadow (`rgba(27,49,57,...)`) rather than neutral black, tying elevation to the brand's teal palette.

## 7. Do's and Don'ts

### Do
- Use DM Sans for all text — it's the only brand typeface
- Use DM Mono for code, data labels, and technical displays
- Apply Lava 600 (`#FF3621`) exclusively for primary CTAs — it's the action signal
- Use 0px radius on buttons — square corners communicate engineering precision
- Use Navy 900 (`#0B2026`) for immersive dark sections
- Use Teal (`#1B3139`) as the body text color, not pure black
- Apply pill radius (20px) only for navigation tabs on dark backgrounds
- Use Oat Medium (`#EEEDE9`) for warm neutral sections and surfaces

### Don't
- Use warm orange-red (`#FF3621`) for anything other than primary action buttons
- Round primary CTA buttons — Databricks CTAs are sharp-cornered (0px)
- Use pure black (`#000000`) as body color — the system uses Teal `#1B3139`
- Use `#FF3621` as a text color in running prose — it's for buttons only
- Add decorative gradients or complex shadows — the system is precise and clean
- Use weight 700 in DM Sans on headings — reserve it for active tab state only
- Use DM Mono for body text — it's strictly for code/data contexts
- Mix multiple accent colors — Lava is the single active hue

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, tabs scroll |
| Tablet | 640–1024px | 2-column feature grids, moderate padding |
| Desktop | 1024–1280px | Full layout, multi-column grids |
| Large Desktop | >1280px | Centered content, generous whitespace |

### Touch Targets

- Primary CTA buttons: 40px height, generous 24px horizontal padding
- Nav tabs: 40px height, 12–16px padding for comfortable tapping
- Nav links: full header height (65px zone) for easy touch

### Collapsing Strategy

- Hero: 60px headline scales to ~36px on mobile; DM Sans weight 500 maintained
- Navigation: horizontal link bar → hamburger or collapsed menu
- Dark feature sections: maintain full-width treatment, compress internal padding
- Product tab row: horizontal scroll on narrow viewports
- Pricing cards: 3-column → single column stacked

## 9. Agent Prompt Guide

### Quick Color Reference

- Primary CTA: Lava 600 (`#FF3621`)
- Secondary CTA: Teal (`#1B3139`)
- Background: White (`#ffffff`)
- Dark section bg: Navy 900 (`#0B2026`)
- Warm surface: Oat Medium (`#EEEDE9`)
- Heading/body text: Teal (`#1B3139`)
- Muted text: Blue-Gray (`#90A5B1`)
- Link: Enterprise Blue (`#016BC1`)
- Success: Green (`#468254`)

### Example Component Prompts

- "Create a hero section on white background. H1 at 60px DM Sans weight 500, color #1B3139. Subtext at 18px weight 400, #90A5B1. Two CTAs: primary Lava #FF3621 bg, white text, 0px radius, 8px 24px padding — 'Try for free'; secondary #1B3139 bg, white text, same geometry — 'See demo'."
- "Design a dark feature section: #0B2026 background, white headings at 48px DM Sans weight 500. Tab row with pill buttons (20px radius): active tab white bg + #1B3139 text weight 700; inactive tabs rgba(237,242,248,0.1) bg + white text weight 500."
- "Build a pricing card: white background, 0px radius. H3 at 28px DM Sans weight 400, #1B3139. Body at 16px weight 400, #1B3139. Link in #016BC1. Lava CTA at bottom."
- "Create a badge: #F9FFFA background, #468254 text, 4px radius, 14px DM Sans weight 400."

### Iteration Guide

1. DM Sans is the only typeface — never substitute another sans
2. Use weight 400 for most content; 500 for CTAs and key headings; 700 only for active tab state
3. 0px radius on all buttons — sharp corners are intentional brand design
4. Lava (`#FF3621`) is the single CTA color — do not use it for icons, text, or decorations
5. Teal (`#1B3139`) is both the body text color and the secondary button background
6. Navy (`#0B2026`) for immersive dark sections — not Teal, not black
7. DM Mono for any code or technical data display
8. Oat Medium (`#EEEDE9`) for warm-neutral surfaces, not gray

---

## 10. Voice & Tone

Databricks's voice is **precise, ambitious, and technically confident** — the voice of a platform that emerged from academia (UC Berkeley's AMPLab) and never left behind its conviction that the right architecture solves the hardest problems. The homepage headline "The database your AI agents deserve" is emblematic: assertive, technically specific, quietly provocative. Marketing copy treats the data engineer and data scientist as intelligent peers, not as buyers to be persuaded with superlatives.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, technically grounded. "The database your AI agents deserve." No hype words. |
| Product descriptions | Capability-first. "Orchestrate, transform, ingest." Verbs before adjectives. |
| CTAs | Direct imperatives. "Try Databricks", "Start free trial", "Explore the product". |
| Pricing | Transparent, precise. "Starting at $0.15 / DBU" — no ambiguity. |
| Documentation | Peer-to-peer. Assumes technical proficiency; dense, precise, example-led. |
| About / Careers | Mission-driven without grandiosity. "Simple. Open. Multicloud." |
| Error messages | Structured and actionable — data engineers expect specific error types. |

**Voice samples (verbatim, verified live 2026-06-22):**
- "The database your AI agents deserve" — home hero H1 *(verified live)*
- "Build and run apps, agents and AI on your data" — product section H2 *(verified live)*
- "Intelligent. Simple. Private." — platform positioning H2 *(verified live)*

**Forbidden register**: vague superlatives ("revolutionary", "industry-leading", "best-in-class" as empty filler), consumer-app enthusiasm ("🚀 We're excited to…"), jargon without definition in user-facing copy, passive voice on CTAs.

## 11. Brand Narrative

Databricks was founded in **2013** by **Ali Ghodsi, Ion Stoica, Matei Zaharia, and five other co-founders** from **UC Berkeley's AMPLab** — the research lab that created **Apache Spark**, the open-source distributed computing engine that would become the backbone of big data processing globally. The founding premise was direct: Spark had demonstrated that data analytics didn't need to be slow, brittle, or locked into proprietary systems, but productizing it for enterprises required a platform layer that AMPLab researchers weren't positioned to build. Databricks was that company.

The platform evolved from a managed Spark service into the **Data Intelligence Platform** — a unified lakehouse architecture that combines data warehousing, data engineering, machine learning, and business intelligence. The signature concept, the **Lakehouse**, merges the flexibility of a data lake with the reliability of a data warehouse, resolving a decade-long industry tension between the two approaches. The term was coined by Databricks researchers and published as an academic paper before becoming a product category.

The **Lava 600** (`#FF3621`) brand color signals this Spark origin — volcanic, energetic, technically rigorous. It is not a corporate red; it is the color of combustion and computation. The Navy 900 (`#0B2026`) and Oat palette provide the stable infrastructure beneath that intensity: warm, grounded, built to last.

Databricks refused the VC-funded pivot to black-box AI; its bet was on open, composable architecture (Delta Lake, MLflow, Unity Catalog as open-source projects) paired with enterprise cloud delivery. As of 2025–2026, Databricks is valued at over $62B and serves thousands of enterprise customers across Azure, AWS, and GCP.

## 12. Principles

1. **Open first.** Databricks built its moat on open-source projects (Spark, Delta Lake, MLflow) rather than proprietary lock-in. *UI implication:* the platform surfaces data in standard formats; the design language avoids false urgency or dark patterns that obscure pricing or capabilities.
2. **Simple to start, infinite to scale.** The onboarding surface should feel as accessible as a trial button; the platform scales to exabyte workloads. *UI implication:* primary CTAs are direct ("Try Databricks", "Start free trial"); complexity is surfaced progressively.
3. **Data and AI are one system.** The lakehouse thesis unified what were separate silos. *UI implication:* navigation and information architecture reflect a unified platform, not a suite of separate tools.
4. **Precision is a feature.** Pricing is stated in DBUs with starting prices visible without a demo call. *UI implication:* typography uses no decorative tracking; documentation is peer-to-peer and dense rather than dumbed down.
5. **Infrastructure deserves beautiful design.** The Lava-and-Navy palette is a deliberate refusal of the gray-and-blue enterprise default. *UI implication:* every surface should reflect the conviction that data infrastructure can be both rigorous and visually distinctive.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Databricks user segments (data engineers, ML scientists, data analysts, enterprise architects), not individual people.*

**Aarav Mehta, 32, Seattle.** Senior data engineer at a Fortune 500 retailer, responsible for the ETL pipelines that feed the company's demand-forecasting models. Evaluates Databricks on Spark performance benchmarks and Delta Lake ACID guarantees, not marketing copy. Trusts tools whose documentation is written by engineers for engineers. Would immediately distrust a pricing page that hid per-unit costs behind a "contact sales" wall.

**Dr. Sarah Chen, 37, San Francisco.** ML research scientist at a healthcare AI company using Databricks MLflow for experiment tracking and model registry. Chose Databricks over alternatives because the open-source first approach means her team can run MLflow locally before committing to the managed service. Values the platform's willingness to publish research papers rather than keeping architecture decisions proprietary.

**Marcus Williams, 45, Chicago.** VP of Data Infrastructure at a major financial institution. Evaluates Databricks on Unity Catalog's governance controls and compliance posture. Cares about the platform's multicloud flexibility — his bank has Azure and AWS workloads that need a unified governance layer. Finds the Databricks brand visually credible for presenting to a C-suite: serious, technical, not flashy.

**Elena Kowalski, 28, Austin.** Data analyst at a scale-up company. Uses Databricks SQL (previously Databricks SQL Analytics) for business intelligence queries. Came to Databricks from a pure warehouse background; appreciates that the platform lets her run SQL alongside the data engineering team's Spark jobs on the same data layer. Finds the visual design cleaner and more modern than legacy warehouse vendors.

## 14. States

| State | Treatment |
|---|---|
| **Empty (notebook, no results)** | White canvas. DM Sans 16px Teal `#1B3139` message. Single Lava CTA to run a query or load sample data. No illustration. Honest about the empty state. |
| **Empty (cluster list, none running)** | Muted `#90A5B1` text at 14px: "No clusters running." Link in `#016BC1` to create one. |
| **Loading (job run)** | Inline progress indicator, Lava `#FF3621` accent. Text stays visible; spinner does not block content. |
| **Loading (dashboard first paint)** | Skeleton blocks at card dimensions in Oat Medium `#EEEDE9`, 0px radius matching card geometry. Consistent with the flat, shadow-light system. |
| **Error (pipeline failure)** | Inline error message, precise: error type + job ID + link to logs. Never "Something went wrong" alone. |
| **Error (form validation)** | Field-level. `#FF3621` border on field + error text below at 14px. Describes what's invalid. |
| **Error (cluster timeout)** | Structured: "Cluster timed out after N minutes" with restart CTA in Lava. Precise, actionable. |
| **Success (job completed)** | `#F9FFFA` surface badge with `#468254` text: "Succeeded". Duration and output size shown. No emoji. |
| **Success (resource created)** | Brief inline confirmation at body size. Past tense: "Cluster started." CTA to open the resource. |
| **Skeleton** | `#EEEDE9` Oat Medium blocks at final dimensions, 0px radius for card skeletons. Flat pulse animation. |
| **Disabled** | Opacity reduced. Lava actions fade to a muted orange-red; the brand hue is preserved even at low opacity. |
| **Running (live cluster)** | `#468254` green status dot + "Running" label. Active, not just "available". |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, toggle snaps |
| `motion-fast` | 100ms | Button hover overlay, focus ring |
| `motion-standard` | 200ms | Tab transitions, dropdown appears |
| `motion-slow` | 300ms | Page-level section reveals, panel slides |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Panels, dropdowns arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way UI transitions |

**Motion rules**: Motion is functional and quiet — infrastructure software signals reliability through steadiness. Decorative banner animations on the Databricks homepage include a pause control as a first-class affordance (observed as an accessibility-forward `<button>` element). Tab transitions use `motion-standard / ease-standard`. No spring, no overshoot, no bounce — data pipelines don't bounce. Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`; the decorative banner animation is paused.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via Playwright getComputedStyle on:
- https://www.databricks.com/ (homepage)
- https://www.databricks.com/product/pricing (pricing page)
- https://www.databricks.com/product/data-intelligence-platform (product page)

Official brand portal (2026-06-22):
- https://brand.databricks.com/ — confirms: Lava 600 (#FF3621), Navy 900 (#0B2026), Oat Medium (#EEEDE9), Oat Light (#F9F7F4), DM Sans primary, DM Mono monospace

Brand narrative: Databricks founded 2013 by UC Berkeley AMPLab researchers (Ali Ghodsi, Ion Stoica, Matei Zaharia et al.); Apache Spark origin; Lakehouse architecture concept; Delta Lake, MLflow, Unity Catalog as open-source projects. These are widely documented public facts.

Voice samples (§10) are verbatim from the live homepage (H1, product H2, positioning H2), verified 2026-06-22.

Personas (§13) are fictional archetypes informed by publicly observable Databricks user segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "Lava is the color of combustion and computation", "square corners as engineering precision") are editorial readings connecting Databricks's observed design to its positioning, not directly sourced Databricks statements.

The live CTA renders rgb(235,22,0) (#EB1600) which is close to but slightly different from brand-documented Lava 600 (#FF3621). This may reflect browser rendering or a live variant. Brand portal value (#FF3621) is used as authoritative primary_color; both values are documented in the conflict matrix in .verification.md.
-->

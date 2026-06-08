---
id: webflow
name: Webflow
country: US
category: design-tools
homepage: "https://webflow.com"
primary_color: "#146ef5"
logo:
  type: simpleicons
  slug: webflow
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    ink: "#080808"
    primary: "#146ef5"
    blue-400: "#3b89ff"
    blue-300: "#006acc"
    button-hover: "#0055d4"
    purple: "#7a3dff"
    pink: "#ed52cb"
    green: "#00d722"
    orange: "#ff6b00"
    yellow: "#ffae13"
    red: "#ee1d36"
    gray-800: "#222222"
    gray-700: "#363636"
    gray-500: "#5a5a5a"
    gray-300: "#ababab"
    border: "#d8d8d8"
    border-hover: "#898989"
  typography:
    family: { sans: "WF Visual Sans Variable", mono: "Inconsolata" }
    display-hero:    { size: 80, weight: 600, lineHeight: 1.04, tracking: -0.8, use: "Hero headline" }
    section:         { size: 56, weight: 600, lineHeight: 1.04, use: "Section heading" }
    subheading:      { size: 32, weight: 500, lineHeight: 1.30, use: "Sub-heading" }
    feature-title:   { size: 24, weight: 600, lineHeight: 1.30, use: "Feature title" }
    body:            { size: 20, weight: 400, lineHeight: 1.40, use: "Body text" }
    body-standard:   { size: 16, weight: 400, lineHeight: 1.60, tracking: -0.16, use: "Standard body" }
    button:          { size: 16, weight: 500, lineHeight: 1.60, tracking: -0.16, use: "Button label" }
    uppercase-label: { size: 15, weight: 500, lineHeight: 1.30, tracking: 1.5, use: "Uppercase label" }
    caption:         { size: 14, weight: 400, lineHeight: 1.40, use: "Caption" }
    badge:           { size: 12, weight: 550, lineHeight: 1.20, use: "Badge uppercase" }
    micro:           { size: 10, weight: 500, lineHeight: 1.30, tracking: 1, use: "Micro uppercase" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32 }
  rounded: { sm: 2, md: 4, lg: 8, full: 9999 }
  shadow:
    cascade: "rgba(0,0,0,0) 0px 84px 24px, rgba(0,0,0,0.01) 0px 54px 22px, rgba(0,0,0,0.04) 0px 30px 18px, rgba(0,0,0,0.08) 0px 13px 13px, rgba(0,0,0,0.09) 0px 3px 7px"
  components:
    button-primary: { type: button, bg: "#146ef5", fg: "#ffffff", radius: 4, padding: "8px 16px", font: "16px/550 WF Visual Sans Variable", use: "Primary CTA, Webflow Blue" }
    button-transparent: { type: button, fg: "#080808", radius: 4, padding: "8px 16px", font: "16px/550 WF Visual Sans Variable", use: "Text button, hover translate 6px" }
    button-circle: { type: button, bg: "#ffffff", fg: "#080808", radius: 9999, padding: "12px", use: "Circular icon button" }
    input-default: { type: input, bg: "#ffffff", fg: "#080808", radius: 4, padding: "8px 12px", font: "16px/500 WF Visual Sans Variable", use: "Form input, 1px #d8d8d8, focus #146ef5" }
    card-standard: { type: card, bg: "#ffffff", radius: 8, padding: "24px", use: "Content card, 1px #d8d8d8 border" }
    card-compact: { type: card, bg: "#ffffff", radius: 4, padding: "16px", use: "Smaller utility container, 1px #d8d8d8" }
    badge-blue: { type: badge, bg: "#146ef5", fg: "#ffffff", radius: 4, padding: "2px 8px", font: "12px/550 WF Visual Sans Variable", use: "Solid blue badge" }
    badge-tinted: { type: badge, fg: "#146ef5", radius: 4, padding: "2px 8px", font: "12px/550 WF Visual Sans Variable", use: "Subtle tinted badge, 10% blue bg" }
    badge-micro: { type: badge, fg: "#080808", radius: 4, padding: "2px 6px", font: "10px/600 WF Visual Sans Variable", use: "Uppercase micro-label, +1px tracking" }
  components_harvested: true
---

# Design System Inspiration of Webflow

## 1. Visual Theme & Atmosphere

Webflow's website is a visually rich, tool-forward platform that communicates "design without code" through clean white surfaces, the signature Webflow Blue (`#146ef5`), and a rich secondary color palette (purple, pink, green, orange, yellow, red). The custom WF Visual Sans Variable font creates a confident, precise typographic system with weight 600 for display and 500 for body.

**Key Characteristics:**
- White canvas with near-black (`#080808`) text
- Webflow Blue (`#146ef5`) as primary brand + interactive color
- WF Visual Sans Variable — custom variable font with weight 500–600
- Rich secondary palette: purple `#7a3dff`, pink `#ed52cb`, green `#00d722`, orange `#ff6b00`, yellow `#ffae13`, red `#ee1d36`
- Conservative 4px–8px border-radius — sharp, not rounded
- Multi-layer shadow stacks (5-layer cascading shadows)
- Uppercase labels: 10px–15px, weight 500–600, wide letter-spacing (0.6px–1.5px)
- translate(6px) hover animation on buttons

## 2. Color Palette & Roles

### Primary
- **Near Black** (`#080808`): Primary text
- **Webflow Blue** (`#146ef5`): `--_color---primary--webflow-blue`, primary CTA and links
- **Blue 400** (`#3b89ff`): `--_color---primary--blue-400`, lighter interactive blue
- **Blue 300** (`#006acc`): `--_color---blue-300`, darker blue variant
- **Button Hover Blue** (`#0055d4`): `--mkto-embed-color-button-hover`

### Secondary Accents
- **Purple** (`#7a3dff`): `--_color---secondary--purple`
- **Pink** (`#ed52cb`): `--_color---secondary--pink`
- **Green** (`#00d722`): `--_color---secondary--green`
- **Orange** (`#ff6b00`): `--_color---secondary--orange`
- **Yellow** (`#ffae13`): `--_color---secondary--yellow`
- **Red** (`#ee1d36`): `--_color---secondary--red`

### Neutral
- **Gray 800** (`#222222`): Dark secondary text
- **Gray 700** (`#363636`): Mid text
- **Gray 300** (`#ababab`): Muted text, placeholder
- **Mid Gray** (`#5a5a5a`): Link text
- **Border Gray** (`#d8d8d8`): Borders, dividers
- **Border Hover** (`#898989`): Hover border

### Shadows
- **5-layer cascade**: `rgba(0,0,0,0) 0px 84px 24px, rgba(0,0,0,0.01) 0px 54px 22px, rgba(0,0,0,0.04) 0px 30px 18px, rgba(0,0,0,0.08) 0px 13px 13px, rgba(0,0,0,0.09) 0px 3px 7px`

## 3. Typography Rules

### Font: `WF Visual Sans Variable`, fallback: `Arial`

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display Hero | 80px | 600 | 1.04 | -0.8px | |
| Section Heading | 56px | 600 | 1.04 | normal | |
| Sub-heading | 32px | 500 | 1.30 | normal | |
| Feature Title | 24px | 500–600 | 1.30 | normal | |
| Body | 20px | 400–500 | 1.40–1.50 | normal | |
| Body Standard | 16px | 400–500 | 1.60 | -0.16px | |
| Button | 16px | 500 | 1.60 | -0.16px | |
| Uppercase Label | 15px | 500 | 1.30 | 1.5px | uppercase |
| Caption | 14px | 400–500 | 1.40–1.60 | normal | |
| Badge Uppercase | 12.8px | 550 | 1.20 | normal | uppercase |
| Micro Uppercase | 10px | 500–600 | 1.30 | 1px | uppercase |
| Code: Inconsolata (companion monospace font)

## 4. Component Stylings

### Buttons

**Transparent**
- Background: transparent
- Text: `#080808`
- Radius: 4px
- Padding: 8px 16px
- Font: 16px / 550 / WF Visual Sans Variable
- Hover: translate(6px)
- Use: Default text-style button — signature horizontal nudge on hover

**Blue Primary**
- Background: `#146ef5`
- Text: `#ffffff`
- Radius: 4px
- Padding: 8px 16px
- Font: 16px / 550 / WF Visual Sans Variable
- Use: Primary CTA — Webflow Blue

**White Circle**
- Background: `#ffffff`
- Text: `#080808`
- Radius: 50%
- Padding: 12px (icon button)
- Use: Circular icon button

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#080808`
- Border: 1px solid `#d8d8d8`
- Radius: 4px
- Padding: 8px 12px
- Font: 16px / 500 / WF Visual Sans Variable
- Focus: border `#146ef5`
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source).

### Cards

**Standard**
- Background: `#ffffff`
- Border: 1px solid `#d8d8d8`
- Radius: 8px
- Padding: 24px
- Use: Default content card — conservative sharp radius

**Compact**
- Background: `#ffffff`
- Border: 1px solid `#d8d8d8`
- Radius: 4px
- Padding: 16px
- Use: Smaller utility container

### Badges

**Blue Badge**
- Background: `#146ef5`
- Text: `#ffffff`
- Radius: 4px
- Padding: 2px 8px
- Font: 12.8px / 550 / WF Visual Sans Variable
- Use: Solid blue badge

**Tinted**
- Background: `rgba(20, 110, 245, 0.1)` (Blue-tinted at 10%)
- Text: `#146ef5`
- Radius: 4px
- Padding: 2px 8px
- Font: 12.8px / 550 / WF Visual Sans Variable
- Use: Subtle tinted badge

**Uppercase Micro**
- Background: transparent
- Text: `#080808`
- Radius: 4px
- Padding: 2px 6px
- Font: 10px / 500-600 / WF Visual Sans Variable, uppercase, +1px tracking
- Use: Micro-label uppercase badge

## 5. Layout
- Spacing: fractional scale (1px, 2.4px, 3.2px, 4px, 5.6px, 6px, 7.2px, 8px, 9.6px, 12px, 16px, 24px)
- Radius: 2px, 4px, 8px, 50% — conservative, sharp
- Breakpoints: 479px, 768px, 992px

## 6. Depth: 5-layer cascading shadow system

## 7. Do's and Don'ts

### Do
- Set WF Visual Sans Variable as the type face, using weight 600 for headlines (e.g. the 80px / -0.8px Display Hero), 500 for buttons, and 400 for body
- Reserve Webflow Blue (#146ef5) for the primary CTA, links, and focus borders on a white (#ffffff) canvas with near-black (#080808) text
- Keep border-radius conservative and sharp on the 2px / 4px / 8px scale — 4px for buttons, inputs, and badges, 8px for standard cards
- Apply the signature translate(6px) horizontal nudge on button hover, timed with motion-fast (150ms)
- Deploy purple (#7a3dff), pink (#ed52cb), and green (#00d722) together as a SET for category coding and tier comparison — e.g. a 4px top-edge color bar on feature cards
- Build depth with the 5-layer cascading shadow stack rather than a single flat drop shadow

### Don't
- Round functional elements beyond 8px, or make them pill-shaped or fully square — radius stays moderate between geometric and rounded
- Use the secondary accents (purple #7a3dff, pink #ed52cb, green #00d722, etc.) on primary CTAs — those stay Webflow Blue #146ef5
- Use a single secondary accent in isolation; the purple/pink/green trio only reads correctly when used together as category coding
- Render the marketing surface in dark mode — keep it bright and airy on white (#ffffff)
- Substitute another typeface for WF Visual Sans Variable or drift off its 400/500/600 weights
- Write copy like "Revolutionary no-code" or aggressive Wix-comparison framing — both are forbidden under the agentic-web-platform voice

## 8. Responsive: 479px, 768px, 992px

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Webflow Blue (`#146ef5`)
- Heading / body text: Near Black (`#080808`)
- Muted text: `~#666666` (estimated)
- Page background: White (`#ffffff`)
- Border default: `#d8d8d8`
- Secondary accent: Purple (`#7a3dff`), Pink (`#ed52cb`), Green (`#00d722`)
- These three secondary accents are used for category coding (e.g., feature cards, plan tiers) — never as primary CTAs.

### Example Component Prompts
- "Build a Webflow primary button: bg `#146ef5`, white text, `~8px` border-radius, `12px 24px` padding, WF Visual Sans Variable weight 600 16px. Hover: bg darkens ~10%."
- "Create a feature card with category accent: white bg, `1px solid #d8d8d8` border, `16px` radius. Use the secondary palette (purple `#7a3dff` / pink `#ed52cb` / green `#00d722`) as a top-edge color bar (4px tall) to indicate category. Title 20px weight 600 `#080808`, body 14px weight 400."
- "Design a navigation header: white sticky bar, Webflow logo left, link nav (14px weight 500 `#080808`, hover to `#146ef5`), Webflow Blue 'Sign up' CTA right. Subtle 1px bottom border on scroll."
- "Create a plan tier comparison: 3 columns, each card with white bg, `16px` radius. The 'recommended' tier gets a colored top border (`#146ef5` for default, `#7a3dff` for premium) and a 'Most Popular' badge using that same color."

### Iteration Guide
1. Use Webflow Blue `#146ef5` only as the primary CTA color — secondary accents handle visual variety and category coding.
2. The three secondary colors (purple/pink/green) work as a SET — use them together for tier comparisons or feature categories, not in isolation.
3. Keep components on white — Webflow's marketing aesthetic is bright and airy, never dark mode for the marketing surface.
4. Border-radius stays moderate (8-16px) — never pill or fully square. Webflow sits between the geometric (Vercel/Linear) and rounded (Mintlify) ends of the spectrum.
5. Use WF Visual Sans Variable weight 600 for headlines and weight 500 for buttons. Body uses weight 400.

## 10. Voice & Tone

Webflow's voice is **agentic-web-platform and design-tool-confident.** "The agentic web platform for modern businesses" — recently pivoted from "no-code design tool" to "agentic web platform" positioning. Marketing copy emphasizes professional designers + business outcomes.

| Context | Tone |
|---|---|
| CTA | Verb. "Get started for free", "Talk to sales", "Try Webflow" |
| Marketing | Customer-quote-driven. Real customer sites as social proof |
| Documentation | Visual-heavy, screenshot-driven |
| Error | Specific. "Element constraints conflict. Adjust width or layout." |

**Voice samples**
- Marketing tagline: *"The agentic web platform for modern businesses"* <!-- verified: webflow.com homepage 2026-05 -->

**Forbidden phrases.** "Revolutionary no-code". Aggressive Wix-comparison framing.

## 11. Brand Narrative

Webflow was founded **2013** in San Francisco by **Vlad Magdalin (CEO)** + younger brother **Sergie Magdalin** + ex-Intuit colleague **Bryant Chou** ([Webflow — Wikipedia](https://en.wikipedia.org/wiki/Webflow), [Acquired Podcast — Building Webflow w/ Vlad Magdalin](https://www.acquired.fm/episodes/building-webflow-and-the-no-code-movement-with-vlad-magdalin-co-founder-and-ceo)). Vlad **quit Intuit in 2012**; Sergie + Chou joined that same year. **Famously rejected by Y Combinator November 2012**, then **published working prototype on Hacker News March 2013** → **10,000+ beta sign-ups**, eventually **graduating from YC's accelerator in 2013** ([Webflow blog — How Webflow got into Y Combinator](https://webflow.com/blog/the-story-of-how-webflow-and-y-combinator), [Strixus — $4B Turnaround Webflow YC](https://strixus.com/entry/the-4b-turnaround-webflows-epic-journey-to-y-combinator-success-18134)). Visual web design tool that competed with WordPress for marketing-site builders. **Series C $120M (March 2022)** at **$4B valuation** with **Khosla Ventures, Y Combinator, Tim Draper, Accel, CapitalG, Silversmith Capital Partners, Draper Associates** — total **~$334.9M raised** as of October 2023 ([Contrary Research — Webflow](https://research.contrary.com/company/webflow), [Tracxn — Webflow](https://tracxn.com/d/companies/webflow/__4ydLbavRvsWn4Llop1QC4CHeauSFwj7rhDh41SueLuE)). The **2024-2025 pivot to "agentic web platform"** positions Webflow for the AI-driven web era while preserving the canvas-first design DNA — confirmed via live `<title>` "Webflow: The agentic web platform for modern businesses" 2026-05.

## 12. Principles

1. **Designer-first canvas.** *UI implication:* canvas + properties layout, not code-only.
2. **Moderate radius (8-16px).** *UI implication:* sit between geometric (Vercel) and rounded (Mintlify).
3. **WF Visual Sans Variable.** weight 600 / 500 / 400. *UI implication:* don't substitute.
4. **Agentic positioning.** *UI implication:* AI features first-class in nav.
5. **Real customer sites as proof.** *UI implication:* lead with customer showcases.

## 13. Personas

*Personas are fictional archetypes informed by Webflow user segments (independent designers, agency owners, marketing teams), not individual people.*

**Sofia Russo, 33, Milan.** Indie designer. Webflow for client marketing sites.

**Henrik Sondergaard, 41, Copenhagen.** Agency founder. Multi-client Webflow projects.

**Marcus Chen, 38, San Francisco.** Marketing lead at SaaS. Webflow for landing pages without engineering.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no projects)** | "Create new project" + template gallery |
| **Empty (canvas)** | "Add a section" CTA |
| **Loading (project opening)** | Skeleton canvas |
| **Loading (publishing)** | Build progress with status |
| **Error (publish)** | Specific cause + retry |
| **Error (CMS)** | Field-level inline message |
| **Success (published)** | Live URL + analytics preview |
| **Success (saved)** | Implicit |
| **Skeleton (project list)** | 8-16px placeholders |
| **Disabled (free plan limit)** | Upgrade link |
| **Loading (long task)** | Persistent progress |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |

Standard cubic-bezier. `prefers-reduced-motion: reduce` removes hover transitions.

---

**Verified:** 2026-05-08 (omd:migrate run 63 — Apple-tier)
**Tier 1 sources:** webflow.com home + /pricing (live DOM via playwright — Primary **`#146ef5` Webflow Blue** + `#fff` text 4px / 51px / 16×24 / 16px·500 + A11y skip-nav 8px / 36px + Top banner 0px Blue strip + **Made-in-Webflow credit pill 1440px** + body **`#080808` Webflow Ink** ultra-dark warm-cast near-black).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/founders/YC):** Wikipedia (Webflow), Acquired Podcast (Vlad Magdalin), Webflow blog (How Webflow got into YC after Nov 2012 rejection), Strixus, Contrary Research, Tracxn, Frederick AI.
**Style ref:** `notion`. **Conflicts unresolved:** none. **Earlier addition:** Webflow Blue `#146ef5` + Webflow Ink `#080808` body + 1440px credit-pill + 8px A11y sub-tier missed by prior 3px-nav-only pass.

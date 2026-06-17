---
id: workday
name: Workday
country: US
category: saas
homepage: "https://www.workday.com"
primary_color: "#0057ae"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=workday.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live marketing CTA brand blue (#0057ae, rgb(0,87,174)); Canvas DS Blueberry 400 (#0875e1) is the documented interactive/link accent and appears live as rgb(8,117,225). Heading ink = navy #022043 on marketing; Canvas DS body/heading text = blackPepper #494949/#333333. Canvas DS primary action token is cantaloupe orange (#f38b00) — product UI; marketing chrome uses the blue pill."
  colors:
    primary: "#0057ae"
    blueberry: "#0875e1"
    blueberry-500: "#005cb9"
    blueberry-600: "#004387"
    ink: "#022043"
    heading: "#333333"
    body: "#494949"
    label: "#787878"
    hint: "#5e6a75"
    input-border: "#7b858f"
    card-border: "#b6c1cc"
    canvas: "#ffffff"
    surface: "#f0f1f2"
    surface-tint: "#d7eafc"
    divider: "#dfe2e6"
    yellow: "#fec10b"
    cantaloupe: "#f38b00"
    error: "#de2e21"
    success: "#43c463"
    warning: "#ffa126"
    on-primary: "#ffffff"
  typography:
    family: { display: "Acid Grotesk", body: "Acid Grotesk", fallback: "Arial, Helvetica, sans-serif" }
    display-hero: { size: 56, weight: 800, lineHeight: 1.14, tracking: -1.12, use: "Hero headline, Acid Grotesk ExtraBold" }
    section:      { size: 40, weight: 800, lineHeight: 1.20, use: "Section headlines, Acid Grotesk ExtraBold" }
    eyebrow:      { size: 14, weight: 700, lineHeight: 1.43, tracking: 1.12, use: "Uppercase eyebrow / section label" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    nav:          { size: 16, weight: 700, lineHeight: 1.50, use: "Nav items, bold" }
    button:       { size: 16, weight: 700, lineHeight: 1.00, use: "CTA pill label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 12, lg: 24, full: 9999 }
  shadow:
    none: "none"
    card: "rgba(0,0,0,0.08) 0px 2px 8px"
  components:
    button-primary: { type: button, bg: "#0057ae", fg: "#ffffff", radius: "24px", padding: "0px 20px", height: "48px", font: "16px / 700 Acid Grotesk", use: "Marketing primary CTA — Contact Sales, Play Demo (blue pill)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#022043", border: "2px solid #022043", radius: "24px", padding: "0px 20px", height: "48px", font: "16px / 700 Acid Grotesk", use: "Marketing secondary CTA — Learn More, Read Report (ghost pill)" }
    button-canvas-primary: { type: button, bg: "#f38b00", fg: "#ffffff", radius: "999px", font: "14px / 700 Roboto", states: "hover #c06c00 · focus 2px #0875e1 ring", use: "Canvas DS product action button (cantaloupe primary)" }
    nav-item: { type: tab, fg: "#022043", font: "16px / 700 Acid Grotesk", active: "blueberry #0875e1 text/underline on active", use: "Top nav (Products, Industries, Customers, Resources, Partners, Company)" }
    text-link: { type: tab, fg: "#0875e1", font: "16px / 400 Acid Grotesk", active: "blueberry #0875e1 link, underline on hover", use: "Inline text link" }
    input-text: { type: input, bg: "#ffffff", fg: "#494949", border: "1px solid #7b858f", radius: "4px", padding: "8px 12px", font: "14px / 400 Roboto", states: "focus 1px #0875e1 · placeholder #5e6a75", use: "Canvas DS form text input" }
    card-resource: { type: card, bg: "#ffffff", fg: "#0057ae", border: "1px solid #b6c1cc", radius: "8px", padding: "24px", use: "Whitepaper / resource card on marketing surface" }
    card-tint: { type: card, bg: "#d7eafc", fg: "#022043", radius: "8px", padding: "24px", use: "Tinted blueberry-100 highlight card / callout" }
    badge-status: { type: badge, bg: "#d7eafc", fg: "#004387", radius: "999px", padding: "4px 12px", font: "12px / 700 Acid Grotesk", use: "Status / category pill" }
    toast-error: { type: toast, bg: "#ffffff", fg: "#494949", border: "1px solid #de2e21", radius: "4px", use: "Canvas DS error message (cinnamon border)" }
  components_harvested: true
---

# Design System Inspiration of Workday

## 1. Visual Theme & Atmosphere

Workday is the enterprise cloud platform for HR, finance, and IT, and its public surface reads exactly the way enterprise software wants to be perceived in 2026 — calm, credible, and quietly confident rather than loud or trend-chasing. The canvas is pure white (`#ffffff`) anchored by a deep, almost ink-navy heading color (`#022043`) that gives every page a serious, boardroom-grade weight without resorting to harsh pure black. The single saturated action color is a trustworthy corporate blue (`#0057ae`) reserved for the primary call-to-action pills, so a visitor's eye is consistently trained to read "blue rounded pill" as "the next step" — whether that step is *Contact Sales* or *Play Demo*.

The typographic personality is set by **Acid Grotesk**, a contemporary grotesque sans that carries every headline at **ExtraBold (weight 800)** — 56px on the hero with tight `-1.12px` tracking — projecting declarative, plainspoken authority ("Superintelligence for work. Meet Sana."). A distinctive supporting move is the **uppercase eyebrow label**: 14px Acid Grotesk weight 700 with a wide `+1.12px` tracking, used to title sections ("HUMAN CAPITAL MANAGEMENT SOFTWARE", "OVERCOMING CHALLENGES", "ROI VALUE CALCULATOR"). This pairing — heavy headline over a small, letter-spaced, all-caps kicker — is the signature rhythm of the system, lending an editorial, report-like cadence appropriate to a company that sells planning and analytics.

Beneath the marketing chrome sits **Canvas**, Workday's mature open-source design system (canvas.workday.com), which governs the actual product UI. Canvas is built on a fruit-and-pantry color taxonomy: the interactive accent is **Blueberry 400 (`#0875e1`)** — which appears live on workday.com as the `rgb(8,117,225)` link/focus accent — with Blueberry 500 (`#005cb9`) for active states and Blueberry 600 (`#004387`) for depth. Text in Canvas runs in the **blackPepper** ramp (`#333333` heading, `#494949` body), surfaces in the **soap** grey ramp (`#f0f1f2`, `#dfe2e6` divider), and the documented primary action button is actually **cantaloupe orange (`#f38b00`)** — a deliberate split from the marketing site's blue pill. The result is a flat, accessible, enterprise-grade aesthetic: minimal shadow, generous radius (24px pills, 8px cards), and a restrained palette that signals reliability over flash.

**Key Characteristics:**
- Acid Grotesk ExtraBold (weight 800) for all display headlines — declarative enterprise authority
- Uppercase eyebrow labels at 14px / weight 700 / `+1.12px` tracking — the system's signature kicker
- Single corporate blue (`#0057ae`) reserved for the primary CTA pill on marketing surfaces
- Deep ink-navy (`#022043`) for headings instead of pure black — boardroom-grade weight
- Canvas DS Blueberry 400 (`#0875e1`) as the documented interactive / link / focus accent
- Two-system split: marketing blue pill (`#0057ae`) vs Canvas product cantaloupe button (`#f38b00`)
- Pill geometry on CTAs (24px radius) and 8px radius on cards — modern, soft, never sharp
- Near-flat depth — separation via soap-grey surfaces (`#f0f1f2`) and `#b6c1cc` hairlines, not heavy elevation

## 2. Color Palette & Roles

### Primary & Interactive
- **Workday Blue** (`#0057ae`): Primary marketing CTA background and brand blue. The corporate blue on the *Contact Sales* / *Play Demo* pills — the marketing site's single "action" color.
- **Blueberry 400** (`#0875e1`): Canvas DS interactive accent — link text, focus outlines, selection-control fill. Appears live on workday.com as `rgb(8,117,225)`.
- **Blueberry 500** (`#005cb9`): Canvas DS active / status-active blue and icon-active state.
- **Blueberry 600** (`#004387`): Deepest blueberry — used for high-contrast text on tinted blue surfaces and badge text.

### Ink & Text
- **Ink Navy** (`#022043`): Primary marketing heading, nav, and strong-label color — a deep blue-black (`rgb(2,32,67)`), used instead of pure black.
- **Heading** (`#333333`): Canvas DS blackPepper 400 — product heading text.
- **Body** (`#494949`): Canvas DS blackPepper 300 — standard product body text.
- **Label** (`#787878`): Canvas DS blackPepper 100 — form labels, secondary text.
- **Hint** (`#5e6a75`): Canvas DS licorice 300 — placeholder / hint text.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on blue/dark — Canvas frenchVanilla 100.
- **Surface Grey** (`#f0f1f2`): Canvas DS soap 200 — alternate section / surface fill.
- **Surface Tint** (`#d7eafc`): Canvas DS blueberry 100 — tinted highlight cards and callouts.
- **Divider** (`#dfe2e6`): Canvas DS soap 400 — dividers and subtle separators.
- **Input Border** (`#7b858f`): Canvas DS licorice 200 — default form input border.
- **Card Border** (`#b6c1cc`): Live marketing resource-card hairline border.

### Accent & Semantic
- **Workday Yellow** (`#fec10b`): Warm yellow accent used in highlight moments (ROI calculator panel), `rgb(254,193,11)`.
- **Cantaloupe** (`#f38b00`): Canvas DS primary action button background (product UI), cantaloupe 500.
- **Error** (`#de2e21`): Canvas DS cinnamon 500 — error states and validation.
- **Success** (`#43c463`): Canvas DS greenApple 400 — success / positive status.
- **Warning** (`#ffa126`): Canvas DS cantaloupe 400 — warning / alert status.

## 3. Typography Rules

### Font Family
- **Display & Body**: `Acid Grotesk` (with `Arial, Helvetica, sans-serif` fallback) — used across the marketing site for headlines, nav, body, and CTA labels.
- **Product (Canvas DS)**: `Roboto` (with `Helvetica Neue` fallback) — the Canvas documentation and product chrome default.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Acid Grotesk | 56px (3.50rem) | 800 | 1.14 (64px) | -1.12px | Hero headline, ExtraBold |
| Section Heading | Acid Grotesk | 40px (2.50rem) | 800 | 1.20 (48px) | normal | Section / feature headlines |
| Eyebrow Label | Acid Grotesk | 14px (0.88rem) | 700 | 1.43 (20px) | +1.12px | Uppercase section kicker |
| Nav Item | Acid Grotesk | 16px (1.00rem) | 700 | 1.50 (24px) | normal | Top navigation |
| Button | Acid Grotesk | 16px (1.00rem) | 700 | 1.00 | normal | CTA pill label |
| Body | Acid Grotesk | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |
| Product Body (Canvas) | Roboto | 14px (0.88rem) | 400 | 1.43 | normal | Product UI text |

### Principles
- **ExtraBold display, regular body**: Acid Grotesk weight 800 carries every headline; weight 400 carries every paragraph. The weight jump is the primary hierarchy signal.
- **The letter-spaced eyebrow**: small all-caps 14px labels with `+1.12px` tracking title most sections — a report-like, editorial device unique to the system.
- **Tight display tracking**: the 56px hero compresses to `-1.12px`; body text stays at normal tracking.
- **Two systems, two fonts**: Acid Grotesk is the persuasive marketing voice; Roboto is the functional Canvas product voice. They never swap roles.

## 4. Component Stylings

### Buttons

**Primary CTA (Marketing)**
- Background: `#0057ae`
- Text: `#ffffff`
- Radius: 24px
- Padding: 0px 20px
- Height: 48px
- Font: 16px / 700 / Acid Grotesk
- Use: Primary marketing call-to-action — "Contact Sales", "Play Demo"

**Secondary CTA (Marketing)**
- Background: `#ffffff`
- Text: `#022043`
- Border: 2px solid `#022043`
- Radius: 24px
- Padding: 0px 20px
- Height: 48px
- Font: 16px / 700 / Acid Grotesk
- Use: Marketing secondary action — "Learn More", "Read Report"

**Canvas Primary (Product)**
- Background: `#f38b00`
- Text: `#ffffff`
- Radius: 999px (full pill)
- Font: 14px / 700 / Roboto
- Hover: `#c06c00`
- Focus: 2px `#0875e1` ring
- Use: Canvas DS product primary action button (cantaloupe)

### Inputs

**Text Input (Canvas)**
- Background: `#ffffff`
- Text: `#494949`
- Border: 1px solid `#7b858f`
- Radius: 4px
- Padding: 8px 12px
- Font: 14px / 400 / Roboto
- Focus: 1px solid `#0875e1`
- Use: Canvas DS form text input ("Search Canvas" field measured live)

### Cards & Containers

**Resource Card (Marketing)**
- Background: `#ffffff`
- Text: `#0057ae`
- Border: 1px solid `#b6c1cc`
- Radius: 8px
- Padding: 24px
- Use: Whitepaper / resource card on marketing surfaces

**Tinted Callout Card**
- Background: `#d7eafc`
- Text: `#022043`
- Radius: 8px
- Padding: 24px
- Use: Blueberry-100 tinted highlight / callout block

### Badges

**Status Pill**
- Background: `#d7eafc`
- Text: `#004387`
- Radius: 999px (full)
- Padding: 4px 12px
- Font: 12px / 700 / Acid Grotesk
- Use: Status / category pill on tinted blue surface

### Navigation
- Background: `#ffffff`
- Text: `#022043`
- Font: 16px / 700 / Acid Grotesk
- Height: 48px items
- Active: blueberry `#0875e1` text/underline on active item
- Use: Top horizontal nav ("Products", "Industries", "Customers", "Resources", "Partners", "Company")

### Text Links
- Text: `#0875e1`
- Font: 16px / 400 / Acid Grotesk
- Hover: underline
- Use: Inline body links — Canvas DS blueberry link color

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces + Canvas DS source)
**Tier 1 sources:** https://www.workday.com (homepage, live computed style), https://www.workday.com/en-us/products/human-capital-management/overview.html (HCM product surface, live), https://canvas.workday.com (Canvas Design System), @workday/canvas-colors-web v2.0.1 (official Canvas color + semantic token source)
**Tier 2 sources:** getdesign.md/workday — no entry ("No designs found for 'workday'"); styles.refero.design/?q=workday — no Workday entry (search returns workflow-adjacent brands only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 48px, 64px
- Notable: CTA pills use 20px horizontal padding at 48px height; cards use a generous 24px internal padding

### Grid & Container
- Centered hero with the 56px Acid Grotesk headline as the anchor, often over imagery
- Uppercase eyebrow label precedes most section headlines, establishing a report-like rhythm
- Feature sections alternate white (`#ffffff`) and soap-grey (`#f0f1f2`) full-width bands
- Resource / whitepaper cards use 8px radius with `#b6c1cc` hairline borders, grouped in multi-column grids

### Whitespace Philosophy
- **Calm and editorial**: despite being a data-dense enterprise product, the marketing surface is airy with generous vertical rhythm between sections.
- **Flat segmentation**: sections separate by background fill (`#f0f1f2` vs `#ffffff`) and hairlines rather than heavy shadow.
- **Pill cadence**: the repeated 24px-radius blue CTA pill creates a consistent action rhythm down the page.

### Border Radius Scale
- Small (8px): cards, resource containers — the workhorse
- Medium (12px): inner containers, nested blocks
- Large (24px): CTA pills, nav buttons
- Full (999px): Canvas product buttons, status badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f0f1f2` / `#d7eafc` background shift | Section / callout separation without elevation |
| Hairline (Level 2) | `1px solid #b6c1cc` border | Resource-card outlines, dividers |
| Soft Card (Level 3) | `rgba(0,0,0,0.08) 0px 2px 8px` | Occasional raised cards / popovers |

**Shadow Philosophy**: Workday is a near-flat system. Live inspection found `box-shadow: none` across nav, hero, and most marketing chrome; depth is communicated through soap-grey surfaces (`#f0f1f2`), blueberry-tinted callouts (`#d7eafc`), and thin `#b6c1cc` hairlines. When a raised effect is needed, the system reaches for a soft, low-opacity `rgba(0,0,0,0.08)` shadow rather than a heavy drop. This keeps the enterprise UI feeling clean, accessible, and trustworthy — consistent with Canvas DS, which is built for WCAG-grade clarity over decorative depth.

## 7. Do's and Don'ts

### Do
- Use Acid Grotesk ExtraBold (weight 800) for all display headlines — it's the brand voice
- Precede section headlines with an uppercase eyebrow label (14px / 700 / `+1.12px` tracking)
- Reserve Workday Blue (`#0057ae`) for the primary marketing CTA pill — keep it the single "action" color
- Use Canvas Blueberry 400 (`#0875e1`) for links, focus outlines, and interactive accents
- Use ink-navy (`#022043`) for marketing headings instead of pure black
- Separate sections with soap-grey (`#f0f1f2`) surfaces and `#b6c1cc` hairlines, not heavy shadows
- Use 24px-radius pills for CTAs and 8px radius for cards
- In product UI, follow Canvas semantics — cantaloupe (`#f38b00`) primary button, soap secondary, cinnamon error

### Don't
- Use a light weight for display headlines — Acid Grotesk display is always ExtraBold (800)
- Spread the blue CTA color across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for marketing body text — reserve ink-navy `#022043` / blackPepper `#494949`
- Use sharp/square corners on CTAs — marketing actions are 24px pills
- Stack heavy drop shadows for elevation — Workday is a flat, surface-and-hairline system
- Mix the marketing blue pill and the Canvas cantaloupe button on the same surface — respect the two-system split
- Set eyebrow labels in lowercase or with normal tracking — they are uppercase with `+1.12px` tracking
- Use Blueberry as a large fill — it is an accent / link / focus color, not a background

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, CTAs stack full-width |
| Tablet | 640-1024px | Moderate padding, 2-up feature/resource cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- CTA pills at 48px height with 20px horizontal padding — comfortably tappable
- Nav items at 48px height
- Resource cards span full tap area at 24px padding

### Collapsing Strategy
- Hero: 56px Acid Grotesk headline scales down on mobile, weight 800 maintained
- Eyebrow + headline pairing preserved across breakpoints
- Feature/resource bands: multi-column → stacked single column
- White/soap-grey alternating sections maintain full-width treatment

### Image Behavior
- Hero and feature imagery sit flush within full-width bands, carrying minimal shadow
- Resource cards maintain 8px radius and `#b6c1cc` hairline across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Workday Blue (`#0057ae`)
- Interactive / link accent: Blueberry 400 (`#0875e1`)
- Background: Pure White (`#ffffff`)
- Surface grey: Soap 200 (`#f0f1f2`)
- Tinted callout: Blueberry 100 (`#d7eafc`)
- Heading / strong text: Ink Navy (`#022043`)
- Product body text: blackPepper (`#494949`)
- Divider: Soap 400 (`#dfe2e6`)
- Card border: `#b6c1cc`
- Canvas product button: Cantaloupe (`#f38b00`)
- Error / success / warning: `#de2e21` / `#43c463` / `#ffa126`

### Example Component Prompts
- "Create a hero on white background. Uppercase eyebrow label at 14px Acid Grotesk weight 700, letter-spacing +1.12px, color #022043. Headline at 56px Acid Grotesk weight 800, line-height 1.14, letter-spacing -1.12px, #022043. One blue CTA pill: #0057ae background, white text, 24px radius, 0 20px padding, 48px height, 16px weight 700 — 'Contact Sales'. One secondary pill: white background, 2px solid #022043 border, #022043 text, 24px radius."
- "Design a resource card: white background, 1px solid #b6c1cc border, 8px radius, 24px padding. Title 16px Acid Grotesk, link-blue #0057ae. Body 16px weight 400, #494949."
- "Build a tinted callout: #d7eafc background, 8px radius, 24px padding. Heading 40px Acid Grotesk weight 800, #022043. Status pill: #d7eafc bg, #004387 text, full radius, 4px 12px padding."
- "Create a Canvas product form: white input, 1px solid #7b858f border, 4px radius, 8px 12px padding, focus 1px #0875e1. Cantaloupe primary button #f38b00, white text, full pill, hover #c06c00."

### Iteration Guide
1. Acid Grotesk ExtraBold (800) for every headline; weight 400 for body
2. Uppercase eyebrow label (14px / 700 / +1.12px tracking) above section headlines
3. Workday Blue (`#0057ae`) is the single marketing action color — don't spread it
4. Blueberry 400 (`#0875e1`) for links / focus / interactive accents
5. Flat depth — separate with soap-grey `#f0f1f2` and `#b6c1cc` hairlines
6. 24px CTA pills, 8px cards; ink-navy `#022043` text, never pure black
7. In product UI, follow Canvas semantics (cantaloupe primary, soap secondary, cinnamon error)

---

## 10. Voice & Tone

Workday's voice is **clear, credible, and human-centered** — enterprise software that speaks plainly about people, work, and outcomes rather than hiding behind acronyms. The hero "Superintelligence for work" and the platform line "The enterprise AI platform for HR, finance, and IT" set the register: confident, outcome-framed, and grounded, never breathless. Copy treats the reader as a decision-maker who wants substance — ROI, agility, trust — delivered without hype.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, outcome-framed. "Superintelligence for work. Meet Sana." Confident, not hype. |
| Section eyebrows | Plain, categorical. "HUMAN CAPITAL MANAGEMENT SOFTWARE", "OVERCOMING CHALLENGES". |
| CTAs | Direct and businesslike. "Contact Sales", "Play Demo", "Read Report", "Learn More". |
| Product / feature copy | Benefit-first; explains the capability in human terms (people, finance, planning). |
| Trust / enterprise copy | Calm and concrete; emphasizes reliability, security, and measurable value. |

**Voice samples (verbatim from live surfaces):**
- "Superintelligence for work. Meet Sana." — homepage hero headline. *(verified live 2026-06-17)*
- "The Enterprise AI Platform for HR, Finance, and IT" — homepage document title. *(verified live 2026-06-17)*
- "The enterprise AI platform for [HR / finance / IT]" — HCM section headline (H3, 40px / 800). *(verified live 2026-06-17)*

**Forbidden register**: hype superlatives ("revolutionary", "game-changing"), undefined HR/finance jargon left unexplained, fear-based urgency, exclamation-heavy marketing.

## 11. Brand Narrative

Workday was founded in **2005** by **Dave Duffield** and **Aneel Bhusri** — Duffield being the founder of PeopleSoft, the enterprise HR/ERP company that had recently been acquired in a hostile takeover by Oracle. The founding premise was a direct response to that event: rebuild enterprise HR and finance software for the cloud era, from a clean sheet, with the customer-centric culture PeopleSoft was known for. Where legacy ERP was on-premise, rigid, and implementation-heavy, Workday bet on a single, continuously updated multi-tenant cloud platform.

The product matured into one of the defining enterprise SaaS platforms — Workday HCM (Human Capital Management) for the people side, Workday Financial Management for finance, and an expanding planning and analytics suite — used by a large share of the Fortune 500. By 2026 the company frames itself around **"the enterprise AI platform for HR, finance, and IT"**, with the **Sana** superintelligence/AI layer (and Workday Illuminate) positioned at the center of the narrative: AI that understands the world of work because it sits on the system of record for people and money.

What Workday refuses, visible in its design: the intimidating, dense, decade-old chrome of legacy ERP (no cluttered grey toolbars, no harsh institutional contrast), and hype-driven consumer-app theatrics. What it embraces: a calm, accessible, WCAG-minded interface (the open-source Canvas Design System); a single trustworthy blue; plainspoken Acid Grotesk headlines; and an editorial, report-like rhythm that signals a company built for the long-term operating backbone of large organizations.

## 12. Principles

1. **Built for people, not just records.** Workday positions HR and finance as human systems. *UI implication:* lead with human-readable headlines and outcomes; keep jargon out of primary copy and reserve density for the product detail layer.
2. **Calm credibility over flash.** Enterprise trust is earned through restraint. *UI implication:* one action color (`#0057ae`), flat depth, generous whitespace; never decorate at the expense of clarity.
3. **Accessibility is a default, not a feature.** Canvas DS is engineered for WCAG-grade contrast and keyboard focus. *UI implication:* use Blueberry 400 (`#0875e1`) focus rings, sufficient text contrast (`#494949`+ on white), and never rely on color alone.
4. **One platform, one voice.** People, finance, and IT share a system of record. *UI implication:* keep typography (Acid Grotesk), the blue CTA, and the eyebrow rhythm consistent across every product and marketing surface.
5. **Two systems, deliberately split.** Marketing chrome (blue pill) and Canvas product UI (cantaloupe button) are distinct on purpose. *UI implication:* don't blend them — respect each surface's button language.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Workday user segments (HR leaders, finance operations, IT admins, and enterprise employees), not individual people.*

**Linda Marsh, 49, Chicago.** VP of People Operations at a 12,000-person retailer evaluating an HCM platform. Distrusts flashy demos; values calm, credible UI and proof of ROI. Chose Workday because the interface felt trustworthy and the messaging spoke about people, not features.

**Daniel Osei, 38, London.** Finance systems lead modernizing off a legacy on-prem ERP. Cares about a single continuously updated cloud platform and clean, accessible dashboards. Appreciates that Workday's product UI (Canvas) is consistent, high-contrast, and keyboard-navigable.

**Priya Raman, 31, Austin.** HRIS analyst who lives in the Workday admin console daily. Values the soap-grey, low-noise surfaces and predictable component behavior — she can scan large tables without visual fatigue because the system avoids heavy chrome.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no records / no results)** | White canvas. Single ink-navy (`#022043`) line explaining there's nothing yet, plus one blue CTA to take the next action. No decorative clutter. |
| **Empty (saved / filtered list, none)** | Label-grey (`#787878`) single line stating no items match, with a path to adjust filters. Honest and calm. |
| **Loading (data fetch)** | Skeleton rows on soap-grey (`#f0f1f2`) surfaces at final dimensions, 8px radius. Flat pulse consistent with the low-shadow system. |
| **Loading (inline)** | Inline progress indicator in Blueberry (`#0875e1`); previous content stays visible during refresh. |
| **Error (request failed)** | Inline message bordered in cinnamon (`#de2e21`) with a plain-language explanation and a retry. Never a bare "Something went wrong". |
| **Error (form validation)** | Field-level message below the input; cinnamon (`#de2e21`) border and icon, blackPepper text describing what's valid. |
| **Success (action completed)** | Brief inline confirmation in greenApple (`#43c463`) tone; next-step detail linked immediately. No celebratory emoji. |
| **Warning / alert** | Cantaloupe (`#ffa126`) border and icon with a concise, actionable message. |
| **Skeleton** | Soap-grey (`#f0f1f2`) blocks at final dimensions, 8px radius, flat pulse. |
| **Disabled** | Reduced-opacity surface with soap/licorice text; blue actions fade rather than turn arbitrary grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus ring, button press |
| `motion-standard` | 200ms | Card / section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the calm, accessible enterprise aesthetic. Buttons and pills respond to press with a subtle opacity/scale shift; sections fade-in from below at `motion-standard / ease-enter`. No bounce or spring — an enterprise system of record signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional, in line with Canvas DS accessibility commitments.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://www.workday.com (homepage): body font "Acid Grotesk"; hero H1 "Superintelligence for work. Meet Sana." 56px / 800 / lh 64px / tracking -2%; ink rgb(2,32,67) #022043; primary CTA "Contact Sales" bg rgb(0,87,174) #0057ae / 24px radius / white / weight 700; secondary "Explore Sana" white bg + 2px solid #022043; Blueberry accent rgb(8,117,225) #0875e1; card radius 8px.
- https://www.workday.com/en-us/products/human-capital-management/overview.html (HCM): eyebrow H1/H2 14px / 700 / tracking 1.12px uppercase; section H3 40px / 800 / lh 48px; resource card white + 1px solid rgb(182,193,204) #b6c1cc + 8px radius + 24px padding; yellow rgb(254,193,11) #fec10b; tinted rgb(215,234,252) #d7eafc (blueberry100); soap surfaces rgb(240,241,242)#f0f1f2 / rgb(223,226,230)#dfe2e6.
- https://canvas.workday.com (Canvas Design System site): confirmed as the official open-source DS; Roboto doc chrome.
- @workday/canvas-colors-web v2.0.1 (npm, official Canvas color + semantic token source): blueberry400 #0875e1 (link/focus/selectionControlFill), blueberry500 #005cb9 (active/icon), blueberry600 #004387; blackPepper400 #333333 (heading), blackPepper300 #494949 (body), blackPepper100 #787878 (label); licorice200 #7b858f (input border), licorice300 #5e6a75 (hint/placeholder); soap200 #f0f1f2, soap400 #dfe2e6; frenchVanilla100 #ffffff; cinnamon500 #de2e21 (error), greenApple400 #43c463 (success), cantaloupe400 #ffa126 (warning), cantaloupe500 #f38b00 (primary button bg).

Token-level claims (§1-9) are sourced from this live inspection + the official Canvas color package.

Voice samples (§10) are verbatim from the live homepage (hero H1, document title) and the HCM product surface (H3 headline).

Brand narrative (§11): Workday founded 2005 by Dave Duffield (PeopleSoft founder) and Aneel Bhusri,
as a cloud-native response to Oracle's hostile acquisition of PeopleSoft. Workday HCM and Financial
Management are its flagship products; in 2026 it positions around "the enterprise AI platform for HR,
finance, and IT" with the Sana AI layer. These are widely documented public facts about the company;
the platform positioning and Sana naming are confirmed in the live homepage title/hero inspected this turn.

Personas (§13) are fictional archetypes informed by publicly observable Workday user segments
(HR leaders, finance operations, IT/HRIS admins, enterprise employees). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "calm credibility over flash", "two systems deliberately split",
"a rejection of legacy ERP chrome") are editorial readings connecting Workday's observed design and
the Canvas DS to its enterprise positioning, not directly sourced Workday statements.
-->

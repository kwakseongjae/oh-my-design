---
id: salesforce
name: Salesforce
country: US
category: saas
homepage: "https://www.salesforce.com"
primary_color: "#0176d3"
logo:
  type: github
  slug: salesforce
verified: "2026-06-11"
added: "2026-06-11"
omd: "0.1"
ds:
  name: Lightning Design System 2
  url: "https://www.lightningdesignsystem.com"
  type: system
  description: "SLDS 2 — Salesforce's agentic-era design system built on CSS custom properties (global styling hooks, --slds-g-*), shipping the canonical brand-blue scale, semantic color ramps, radius/spacing/shadow scales as machine-readable tokens (@salesforce-ux/sds-styling-hooks)."
tokens:
  source: live-extract
  extracted: "2026-06-11"
  note: "primary = live marketing CTA + SLDS 2 hook color-brand-base-50 (#0176d3) — the rare case where marketing surface and official DS token agree exactly. Marketing display font is ITC Avant Garde over Salesforce Sans body; SLDS 2 product UI runs a system-ui stack."
  colors:
    primary: "#0176d3"
    primary-dark: "#0b5cab"
    navy: "#032d60"
    hero-navy: "#002c6e"
    brand-bright: "#1b96ff"
    sky: "#00a1e0"
    ink: "#080707"
    ink-soft: "#181818"
    canvas: "#ffffff"
    cloud-tint: "#eaf5fe"
    surface: "#f4f4f4"
    hairline: "#e5e5e5"
    error: "#ea001e"
    success: "#2e844a"
    warning: "#dd7a01"
    on-primary: "#ffffff"
  typography:
    family: { display: "ITC Avant Garde (AvantGardeForSalesforce)", body: "Salesforce Sans", app: "system-ui (SLDS 2 product UI)" }
    display-hero: { size: 70, weight: 400, lineHeight: 1.00, use: "Homepage hero H1, ITC Avant Garde" }
    display-lg:   { size: 60, weight: 400, lineHeight: 1.00, use: "Dark-section statement H2" }
    display-md:   { size: 56, weight: 400, lineHeight: 1.14, use: "Page-level H1 (pricing)" }
    section:      { size: 40, weight: 400, lineHeight: 1.20, tracking: -0.32, use: "Section H2" }
    subsection:   { size: 24, weight: 400, lineHeight: 1.33, tracking: -0.06, use: "Card H3, ITC Avant Garde" }
    card-title:   { size: 20, weight: 400, lineHeight: 1.40, tracking: -0.08, use: "Industry/product card heads" }
    body-lg:      { size: 18, weight: 400, lineHeight: 1.56, use: "Inline links, intro copy, Salesforce Sans" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Salesforce Sans" }
    button:       { size: 16, weight: 700, lineHeight: 1.50, tracking: 0.02, use: "CTA labels, Salesforce Sans Bold" }
    link-sm:      { size: 14, weight: 700, lineHeight: 1.43, use: "Tertiary 'Learn more' text CTAs" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64, max: 80 }
  rounded: { sm: 4, md: 8, lg: 16, xl: 32, full: 9999 }
  shadow:
    level-1: "0 0 2px 0 #18181814, 0 2px 4px 1px #18181828"
    level-2: "0 2px 8px -2px #18181814, 0 8px 12px -2px #18181828"
    level-3: "0 12px 24px -4px #18181814, 0 16px 32px -4px #18181828"
    level-4: "0 24px 48px -4px #18181833"
  components:
    button-primary: { type: button, bg: "#0176d3", fg: "#ffffff", radius: "4px", padding: "12px 32px", height: "52px", font: "16px / 700", border: "2px solid #0176d3", use: "Primary CTA — 'Start for free', 'Calculate pricing'" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#0176d3", radius: "4px", padding: "12px 32px", height: "52px", font: "16px / 700", border: "2px solid #0176d3", use: "Paired outline CTA — 'Watch demo'" }
    button-tertiary: { type: button, fg: "#032d60", radius: "4px", font: "14px / 700", use: "'Learn more' text CTA on cards" }
    carousel-control: { type: button, fg: "#ffffff", radius: "9999px", height: "48px", border: "2px solid #ffffff", use: "Prev/next/pause controls on testimonial carousel" }
    card-glass: { type: card, fg: "#ffffff", radius: "32px", border: "2px solid rgba(255,255,255,0.1)", padding: "19px", use: "Translucent product tile (Slack/Agentforce/Customer 360/Data 360) on dark hero, bg rgba(255,255,255,0.05)" }
    card-media: { type: card, fg: "#080707", radius: "22px", use: "Customer-story video testimonial card" }
    card-tint: { type: card, bg: "#eaf5fe", fg: "#032d60", use: "Light cloud-blue section band / promo panel" }
    nav-link: { type: tab, fg: "#080707", font: "16px / 400", active: "text #0176d3", use: "Global nav item" }
  components_harvested: true
---

# Design System Inspiration of Salesforce

## 1. Visual Theme & Atmosphere

Salesforce's design language is enterprise software's most institutional blue, rebuilt for the AI-agent era. The marketing surface opens on a white canvas (`#ffffff`) with near-black body text (`#080707`), deep navy headlines (`#032d60`), and one unmistakable action color: Salesforce Blue (`#0176d3`). What makes this system notable is its rare alignment between brand theater and engineering truth — the exact hex painted on the homepage's "Start for free" button is also the canonical `color-brand-base-50` token in Lightning Design System 2, the company's official design system. Very few companies at this scale keep their marketing chrome and their product token source in lockstep.

The typographic voice changed decisively with the Agentforce-era rebrand: display text now runs in **ITC Avant Garde** (served as `AvantGardeForSalesforce`) at weight 400 — a geometric, almost retro-futurist face that gives 70px hero headlines a rounded, optimistic confidence — while everything functional below it runs in the workhorse **Salesforce Sans** at 16px/24px. The contrast is deliberate: Avant Garde says "Welcome to the Agentic Enterprise" like a keynote slide; Salesforce Sans handles the dense feature copy, nav, and buttons like the CRM it sells. In the product itself, SLDS 2 takes a third position entirely, defaulting to a system-ui font stack for native-feeling app chrome.

Geometry tells a two-world story. Marketing CTAs are conservative 4px-radius rectangles with bold 16px/700 labels and generous 12px 32px padding — banking-grade trustworthiness. But the storytelling layer above them is soft and atmospheric: translucent glass product tiles at 32px radius with `rgba(255,255,255,0.1)` borders floating on dark hero gradients, 22px-radius video testimonial cards, and fully circular (9999px) carousel controls. Sections alternate between white, a light cloud tint (`#eaf5fe`), and a neutral grey (`#f4f4f4`), keeping long enterprise pages legible. Depth is shy on marketing surfaces (borders over shadows), while SLDS 2 defines a precise four-level layered shadow scale built on `#181818` alpha tints for the product.

**Key Characteristics:**
- One blue to rule the system: `#0176d3` is simultaneously the live CTA color and SLDS 2's `color-brand-base-50` token
- ITC Avant Garde display over Salesforce Sans body — keynote voice over CRM voice
- Deep navy `#032d60` (SLDS `brand-base-20`) for headings, never pure black
- Conservative 4px CTA radius against soft 22–32px storytelling cards
- 13-step official brand-blue ramp from `#001639` ink to `#eef4ff` mist (SLDS 2 styling hooks)
- Section banding in white / cloud tint `#eaf5fe` / grey `#f4f4f4`
- Bold 700-weight button labels — enterprise buttons that read as commitments
- SLDS 2 ("Bring your brand to life") as the token backbone: CSS custom properties, `--slds-g-*` global styling hooks

## 2. Color Palette & Roles

### Primary
- **Salesforce Blue** (`#0176d3`): Primary CTA background, links, active states. Canonical SLDS 2 token `color-brand-base-50`. Verified identical on the live homepage CTA and in the official styling-hooks package.
- **Navy** (`#032d60`): Heading color across marketing surfaces (H1/H2/H3) and SLDS `color-brand-base-20`. The brand's "serious" register.
- **Hero Navy** (`#002c6e`): Slightly cooler navy observed on the homepage hero H1 — a marketing-grade deepening of the heading navy.
- **Link Blue** (`#0b5cab`): Inline text links and hover-state blue; SLDS `color-brand-base-40`.

### Brand Blue Ramp (SLDS 2 `color-brand-base-*`)
- **Brand Bright** (`#1b96ff`): `brand-base-60` — vivid accent blue for charts, highlights, focus accents.
- **Sky** (`#00a1e0`): The classic Salesforce cloud cyan, surviving on eyebrow labels and brand moments.
- The full official ramp runs `#001639` → `#03234d` → `#032d60` → `#014486` → `#0b5cab` → `#0176d3` → `#1b96ff` → `#57a3fd` → `#78b0fd` → `#aacbff` → `#d8e6fe` → `#eef4ff` → white.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page canvas, cards, button text on blue.
- **Ink** (`#080707`): Body text on marketing surfaces — near-black with a warm cast.
- **Ink Soft** (`#181818`): Secondary near-black; SLDS `color-neutral-base-10` and the base of the official shadow ramp.
- **Cloud Tint** (`#eaf5fe`): Light blue section bands and promo panels on the live site (marketing's own tint, near SLDS `brand-base-95`).
- **Surface Grey** (`#f4f4f4`): Neutral alternating section background.
- **Hairline** (`#e5e5e5`): Borders and dividers; SLDS `color-neutral-base-90`.

### Semantic (SLDS 2 ramps, `*-base-50` anchors)
- **Error Red** (`#ea001e`): Destructive actions, error text/icons (`color-error-base-50`).
- **Success Green** (`#2e844a`): Success states and confirmations (`color-success-base-50`).
- **Warning Amber** (`#dd7a01`): Warnings and caution banners (`color-warning-base-60`, the ramp's usable mid-tone).

### On-Color
- **On Primary** (`#ffffff`): Text/icons on Salesforce Blue and navy surfaces.

## 3. Typography Rules

### Font Family
- **Display**: `ITC Avant Garde` (web-served as `AvantGardeForSalesforce`) — all marketing headlines H1–H3. Localized surfaces pair it with regional faces (e.g. `Seol Sans Heavy` for Korean display text).
- **Body / UI**: `Salesforce Sans`, fallback Arial — body copy, nav, buttons, links.
- **Product (SLDS 2)**: system-ui stack (`system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto…`) with `Consolas/Menlo` monospace — the app deliberately reads native, not branded.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | ITC Avant Garde | 70px | 400 | 1.00 (70px) | normal | Homepage hero H1 |
| Display Large | ITC Avant Garde | 60px | 400 | 1.00 (60px) | normal | Dark-section statement H2 |
| Display Medium | ITC Avant Garde | 56px | 400 | 1.14 (64px) | normal | Page H1 (pricing) |
| Section Heading | ITC Avant Garde | 40px | 400 | 1.20 (48px) | -0.32px | Standard section H2 |
| Sub-section | ITC Avant Garde | 24–25px | 400 | 1.33 (32px) | -0.06px | Product tile H3 |
| Card Title | ITC Avant Garde | 20px | 400 | 1.40 (28px) | -0.08px | Industry/product cards |
| Body Large | Salesforce Sans | 18px | 400 | 1.56 (28px) | -0.02px | Inline links, intro copy |
| Body | Salesforce Sans | 16px | 400 | 1.50 (24px) | normal | Default reading text |
| Button | Salesforce Sans | 16px | 700 | 1.50 (24px) | 0.02px | CTA labels |
| Link Small | Salesforce Sans | 14px | 700 | 1.43 (20px) | -0.028px | Tertiary text CTAs |

### Principles
- **Weight 400 display, weight 700 action**: headlines never bold up — Avant Garde's geometry carries the presence — while every button label is emphatic 700.
- **Type ramp is modular in product**: SLDS 2 publishes a 1rem base with a 1.125 ratio (`FONT_SIZE_1` 1.125rem → `FONT_SIZE_10` 3.247rem) so app typography scales deterministically.
- **Three-font federation**: Avant Garde (brand voice), Salesforce Sans (marketing UI), system-ui (product UI). Each layer stays in its lane; Salesforce Sans never does hero duty, Avant Garde never appears inside the CRM.
- **Tracking is gentle**: marketing headings tighten only slightly (-0.32px at 40px); buttons run a hair open (+0.02px). Nothing as aggressive as fashion-brand tracking.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#0176d3`
- Text: `#ffffff`
- Border: 2px solid `#0176d3`
- Radius: 4px
- Padding: 12px 32px
- Font: 16px / 700 / Salesforce Sans
- Use: Primary CTA — "Start for free", "Calculate pricing", "자세히 알아보기"

**Secondary (Outline)**
- Background: `#ffffff`
- Text: `#0176d3`
- Border: 2px solid `#0176d3`
- Radius: 4px
- Padding: 12px 32px
- Font: 16px / 700 / Salesforce Sans
- Use: Paired secondary CTA next to every primary — "Watch demo", "Start for free" (pricing)

The hero instance of the pair renders at 20px 32px padding (52px total height) with the secondary at 6px radius and a 1px border; lower sections settle on the canonical 12px 32px / 4px / 2px-border spec above. Both variants hold a 52px rendered height.

**Tertiary (Text CTA)**
- Text: `#032d60`
- Radius: 4px
- Font: 14px / 700 / Salesforce Sans
- Use: "Learn more" links on industry and product cards — no background, navy label with arrow

**Carousel Control**
- Background: transparent
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Radius: 9999px
- Font: 16px / 400
- Use: Circular 48px prev / next / pause controls on the customer-story carousel

### Cards & Containers

**Glass Product Tile**
- Background: `rgba(255,255,255,0.05)`
- Text: `#ffffff`
- Border: 2px solid `rgba(255,255,255,0.1)`
- Radius: 32px
- Padding: 19px
- Font: 16px / 700 / Salesforce Sans
- Use: The four-product story tiles (Slack, Agentforce, Customer 360, Data 360) floating on the dark "Agentic Enterprise" hero

**Media / Testimonial Card**
- Text: `#080707`
- Radius: 22px
- Use: Customer-story video cards (PepsiCo, FedEx, OpenTable…) in the carousel

**Tinted Section Panel**
- Background: `#eaf5fe`
- Text: `#032d60`
- Use: Light cloud-blue band for pricing promos and product sections; alternates with white and `#f4f4f4` grey bands

### Navigation
- Background: `#ffffff`
- Links: 16px Salesforce Sans, `#080707` text
- Active/hover: `#0176d3`
- CTA: primary blue button right-aligned
- Use: Global marketing nav; mega-menu panels on white

### SLDS 2 Product Foundations (official styling hooks)
- Radius scale: 2px / 4px / 8px / 16px / circle (`radius-border-1…4`, `radius-border-circle`)
- Spacing scale: 4px-based, `spacing-1` 0.25rem → `spacing-12` 5rem
- Shadows: four layered levels built on `#181818` alpha (see §6)
- Semantic color ramps: 10-step error / success / warning ladders anchored at `#ea001e` / `#2e844a` / `#dd7a01`
- All exposed as CSS custom properties (`--slds-g-*` global styling hooks) — SLDS 2's defining architecture

---
**Verified:** 2026-06-11
**Tier 1 sources:** https://www.salesforce.com/ (live DOM, geo-served /kr/ surface); https://www.salesforce.com/pricing/ (live DOM, EN); https://www.salesforce.com/company/ (live, values/mission); https://www.lightningdesignsystem.com/ (SLDS 2 docs, live); @salesforce-ux/sds-styling-hooks 1.1.0-alpha.4 hooks.raw.json via unpkg.com (official SLDS 2 token source)
**Tier 2 sources:** none available (getdesign.md/salesforce — "No designs found"; styles.refero.design ?q=salesforce search — no Salesforce style page listed)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px (SLDS 2 `spacing-1` = 0.25rem)
- Scale: 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80 (SLDS `spacing-1` → `spacing-12`)
- Marketing CTAs carry 12px 32px padding; hero CTAs expand to 20px 32px

### Grid & Container
- Wide centered container with generous side margins; enterprise pages run long and rely on section banding for rhythm
- Hero: full-bleed, headline + paired CTA buttons, followed by a dark immersive "Agentic Enterprise" band with the four glass product tiles in a row
- Feature sections: 3–4 column card grids (industries, products, roles)
- Customer proof: horizontally scrolling carousel of 22px-radius video cards with circular controls

### Whitespace Philosophy
- **Banded, not empty**: Salesforce paces very long pages by alternating white / `#eaf5fe` cloud tint / `#f4f4f4` grey full-width bands rather than relying on raw whitespace.
- **Density at the card level**: individual cards are compact (20px titles, 14px text CTAs) because a single page may present eight industries and a dozen products.
- **Keynote moments breathe**: the dark hero and statement H2 sections get dramatic vertical padding — the page alternates between presentation mode and catalog mode.

### Border Radius Scale
- Tight (4px): buttons, text-CTA focus rings — the enterprise workhorse
- Standard (8px): SLDS `radius-border-3` product containers
- Relaxed (16px): SLDS `radius-border-4`, larger marketing panels
- Soft (22px): media/testimonial cards
- Plush (32px): glass product tiles on dark heroes
- Circle (9999px / 100%): carousel controls, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow; borders and band color changes | Marketing sections, cards, nav |
| Shadow 1 | `0 0 2px 0 #18181814, 0 2px 4px 1px #18181828` | Subtle raise — buttons, small popovers (SLDS) |
| Shadow 2 | `0 2px 8px -2px #18181814, 0 8px 12px -2px #18181828` | Cards, dropdown menus (SLDS) |
| Shadow 3 | `0 12px 24px -4px #18181814, 0 16px 32px -4px #18181828` | Panels, docked composer (SLDS) |
| Shadow 4 | `0 24px 48px -4px #18181833` | Modals, spotlight surfaces (SLDS) |

**Shadow Philosophy**: The marketing site is conspicuously shadow-shy — live inspection found `box-shadow: none` across hero CTAs, cards, and nav; separation comes from band color, hairlines, and the translucent borders of glass tiles. Real elevation lives in the product: SLDS 2 defines a strict four-level ladder where every layer is an alpha tint of neutral `#181818` (8–20% opacity), paired in two-layer ambient + key combinations. The effect is precise, neutral, and document-like — no colored shadows, no decorative glow. Depth in Salesforce-land is information hierarchy, not atmosphere; the one atmospheric exception is the dark hero, which uses translucency (`rgba(255,255,255,0.05)` fills, `rgba(255,255,255,0.1)` borders) instead of shadow to float its product tiles.

## 7. Do's and Don'ts

### Do
- Use `#0176d3` as the single action blue — it is both the live CTA color and the official `color-brand-base-50` token
- Set headings in ITC Avant Garde at weight 400; let the geometry, not boldness, carry presence
- Use `#032d60` navy for headings and pair every primary CTA with a white outline secondary
- Keep CTA geometry conservative: 4px radius, 2px border, 12px 32px padding, 16px/700 label
- Alternate white / `#eaf5fe` / `#f4f4f4` section bands to pace long pages
- Pull semantic colors from the SLDS ramps (`#ea001e` error, `#2e844a` success, `#dd7a01` warning)
- Use the SLDS radius scale (2/4/8/16/circle) and `#181818`-alpha layered shadows inside product UI
- Reserve soft 22–32px radii for storytelling cards and glass tiles, not for controls

### Don't
- Introduce a second action color — blue owns every interactive affordance
- Bold the display face — Avant Garde runs at 400; bolding it breaks the keynote voice
- Use pure black for headings or body (`#032d60` navy and `#080707` ink are the system's darks)
- Add drop shadows to marketing cards — separation is banding, hairlines, and translucent borders
- Use Salesforce Sans for hero headlines or Avant Garde inside product UI — the font federation is strict
- Round CTAs into pills — 4px is the contract; pills belong to carousel controls only
- Tint shadows with brand color — SLDS shadows are neutral `#181818` alphas by design
- Hand-pick off-ramp blues — use the 13-step `color-brand-base` ladder

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column; hero drops to ~40px display; CTA pair stacks full-width |
| Tablet | 768–1024px | 2-column card grids; carousel shows fewer cards |
| Desktop | 1024–1440px | Full 3–4 column grids, mega-menu nav |
| Wide | >1440px | Centered container, banding runs full-bleed |

### Touch Targets
- CTAs render at 52px height — comfortably above the 44px floor
- Carousel controls are 48px circles
- Card-level text CTAs gain padding on touch layouts

### Collapsing Strategy
- Hero: 70px → ~40px Avant Garde, weight 400 maintained; paired CTAs stack vertically
- Glass product tiles: 4-up row → 2×2 grid → vertical stack, radius preserved
- Industry/product grids: 4 → 2 → 1 columns
- Global nav: mega-menu → hamburger with full-screen sheet
- Section bands keep full-width color treatment at every size

### Image Behavior
- Video testimonial cards keep 22px radius at all sizes
- Dark hero artwork crops horizontally, tiles stay legible
- Product screenshots sit in 8–16px radius containers per SLDS scale

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / link: Salesforce Blue (`#0176d3`)
- Inline link / hover: Link Blue (`#0b5cab`)
- Headings: Navy (`#032d60`), hero variant (`#002c6e`)
- Body text: Ink (`#080707`)
- Background: White (`#ffffff`), Cloud Tint (`#eaf5fe`), Surface Grey (`#f4f4f4`)
- Accent: Brand Bright (`#1b96ff`), Sky (`#00a1e0`)
- Border: Hairline (`#e5e5e5`)
- Semantic: Error (`#ea001e`), Success (`#2e844a`), Warning (`#dd7a01`)

### Example Component Prompts
- "Create a hero: white background, H1 at 70px ITC Avant Garde weight 400, line-height 1.0, color #002c6e. Sub-copy 16px Salesforce Sans #080707. Two buttons: primary #0176d3 bg, white 16px/700 label, 4px radius, 12px 32px padding; secondary white bg, #0176d3 text, 2px solid #0176d3 border, same geometry."
- "Design a dark 'Agentic Enterprise' band: deep navy-to-blue gradient, H2 60px ITC Avant Garde white. Four glass tiles: rgba(255,255,255,0.05) background, 2px solid rgba(255,255,255,0.1) border, 32px radius, white 24px Avant Garde titles and 16px/700 Salesforce Sans descriptions."
- "Build an industry card grid: white cards on #f4f4f4 band, 20px ITC Avant Garde titles in #032d60, 16px Salesforce Sans body #080707, and a 14px/700 'Learn more' text CTA in #032d60 with arrow."
- "Create a pricing promo panel: #eaf5fe background, #032d60 heading 40px Avant Garde with -0.32px tracking, body 16px Salesforce Sans, primary #0176d3 CTA 'Calculate pricing' and white outline secondary 'Start for free'."
- "Design a product-UI modal per SLDS 2: white surface, 8px radius, shadow 0 24px 48px -4px #18181833, system-ui typography, primary action #0176d3, destructive action #ea001e."

### Iteration Guide
1. `#0176d3` is the only interactive color — every button, link, and active state
2. Display = ITC Avant Garde 400; UI = Salesforce Sans (700 on buttons); product = system-ui
3. CTAs: 4px radius, 2px border, 12px 32px padding, always shipped as primary + outline pair
4. Pace long pages with white / `#eaf5fe` / `#f4f4f4` bands instead of shadows
5. Storytelling surfaces may go soft (22–32px radius, glass translucency); controls never do
6. Pull any extra blues from the official ramp (`#1b96ff`, `#0b5cab`, `#032d60`), never invent
7. Product UI obeys SLDS 2 hooks: 2/4/8/16 radius, 4px spacing grid, `#181818`-alpha shadows

---

## 10. Voice & Tone

Salesforce speaks in **confident, evangelical, customer-success-first** corporate keynote voice. It is the register of a company that invented a category and never stopped announcing it: declarative superlatives backed by analyst citations ("The #1 Agentic CRM" footnoted to IDC), mission vocabulary ("Trailblazers", "Agentic Enterprise"), and an unusual willingness to lead with values (Trust before product). Where developer brands whisper, Salesforce projects — but the projection is disciplined: claims get sources, jargon gets a plain-language definition ("Simply put, an agentic enterprise is…"), and every story ends in a customer outcome, not a feature.

| Context | Tone |
|---|---|
| Hero headlines | Big declarative claims, present tense. "Welcome to the Agentic Enterprise." |
| Category claims | Superlative + citation. "#1 Agentic CRM" footnoted to IDC market-share data. |
| Concept explainers | Patient, definitional. "Simply put, an agentic enterprise is a business where humans and AI agents work together…" |
| CTAs | Imperative, momentum-flavored: "Start for free", "Calculate pricing", "Take the Pledge". |
| Values copy | Earnest and first-person-plural. "Trust is our #1 value." |
| Customer stories | Outcome-led, named logos (PepsiCo, FedEx), executive quotes. |
| Community | Warm, identity-building. "We are Trailblazers." |

**Voice samples (verbatim, live 2026-06-11):**
- "Welcome to the Agentic Enterprise." — homepage H2 / company page hero
- "Salesforce. The #1 Agentic CRM." — salesforce.com/company hero
- "Trust is our #1 value. We build trust by leading with ethics and through the integrity of our technology." — salesforce.com/company values
- "We are Trailblazers." — salesforce.com/company
- "Bring your brand to life." — lightningdesignsystem.com (SLDS 2 cover)

**Forbidden register**: unsourced superlatives (every "#1" carries its analyst footnote), cynicism or irony about customer success, developer-snark, and anything that undercuts the Trust value — security and ethics copy is never playful.

## 11. Brand Narrative

Salesforce was founded in **1999** by **Marc Benioff** with co-founders Parker Harris, Dave Moellenhoff, and Frank Dominguez, on a premise the company still recites verbatim: bringing CRM software to the cloud and pioneering Software-as-a-Service — "Since 1999, we've been focused on helping companies connect with customers in new and better ways" (salesforce.com/company, live). The founding rejection was packaged software itself; the early "No Software" logo made the enemy explicit. The same page timelines the arc since: the AppExchange marketplace (2005), the Trailblazer Community (2006), #1 CRM market share by IDC (2012), the Slack acquisition (2021), Data 360 (2022), and Agentforce (2024) — culminating in the current re-founding around the "Agentic Enterprise," where "humans and agents drive customer success together."

Two structural choices distinguish the brand from its enterprise peers. First, values are product surface: Trust, Customer Success, Innovation, Equality, and Sustainability are published as a ranked list with Trust explicitly "#1," and the company's stated self-image — "We believe business is the greatest platform for change" — extends into the 1-1-1 model its founders launched (1% of equity, technology, and employee time to communities), which grew into the 18,000-company Pledge 1% movement. Second, community is identity: customers, partners, and employees share one name, Trailblazers, and the design system's mascots and learning platform (Trailhead) institutionalize that warmth inside an otherwise serious enterprise visual language.

The design system carries both threads. The single trustworthy blue, analyst-footnoted superlatives, and conservative 4px CTAs express Trust; the Avant Garde keynote type, glass tiles, and agent-era vocabulary express the perpetual reinvention. SLDS 2's own tagline — "Bring your brand to life" — signals the newest turn: a token architecture (global styling hooks) built so that thousands of customer brands, and now AI agents, can restyle the platform without breaking it.

## 12. Principles

1. **Trust is the #1 value — and a visual spec.** The company literally ranks Trust first among its values. *UI implication:* conservative geometry (4px CTAs), navy-on-white legibility, analyst citations beside every superlative, and zero dark patterns around pricing and trials.
2. **Customer success outranks product features.** The stated mission is "to bring out the best in one another, deliver success to our customers." *UI implication:* proof surfaces (logo walls, video testimonials, outcome stats) get first-class layout treatment — the carousel of customer stories sits higher than the feature catalog.
3. **One platform, many brands.** SLDS 2 exists so customers can "bring your brand to life" on Salesforce rails. *UI implication:* build on tokens, not hard-coded values; every color/radius/shadow should resolve to a styling hook so theming never forks components.
4. **Define the category, then define the words.** From SaaS to Agentic Enterprise, Salesforce names eras and immediately explains them in plain language. *UI implication:* every new term on a page gets a "Simply put…" definitional block; vocabulary never floats unexplained.
5. **Keynote moments, catalog discipline.** The brand alternates theatrical announcement surfaces with dense, scannable product grids. *UI implication:* let heroes and dark bands be dramatic (70px Avant Garde, glass tiles), but keep cards compact, uniform, and CTA-terminated.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Salesforce user segments (admins, sales leaders, developers, partners), not individual people.*

**Dana Whitfield, 38, Atlanta.** Salesforce Admin at a 2,000-seat logistics company and a proud Trailhead Ranger. Lives in Setup and the Trailblazer Community; evaluates every release note by what it means for her flows. The brand's warmth toward admins — mascots, badges, community identity — is a real reason she's stayed in the ecosystem for a decade.

**Priya Raghavan, 45, Chicago.** VP of Sales Operations evaluating the Agentforce pitch. Skeptical of AI hype, reassured by the IDC footnotes, the Trust-first values page, and named customer stories from companies her size. Wants the demo, the pricing calculator, and a security whitepaper before any call with sales.

**Tomás Herrera, 29, Mexico City.** Platform developer at an SI partner building Lightning Web Components for clients. Works against SLDS 2 styling hooks daily and cares that `--slds-g-*` tokens let him re-theme a component without forking it. Reads the design-system changelog the way admins read release notes.

**Grace Park, 33, Seoul.** Marketing director at a mid-market retailer on the localized Salesforce site. Experiences the brand through the Korean-localized keynote surface (Seol Sans display over the same blue system) and judges the platform by how coherent that localization feels.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no records in a list view)** | White surface, one navy (`#032d60`) sentence stating the view is empty, one primary `#0176d3` action ("New"). Product empty states may add a small Trailhead-style illustration — warmth is allowed inside the app. |
| **Empty (dashboard, no data yet)** | Plain-language explanation of what will appear plus a setup CTA; never a bare "No data". |
| **Loading (record/page)** | Stencil skeletons at final layout dimensions in `#e5e5e5` on white — SLDS's stencil pattern — with the blue spinner reserved for in-place refreshes. |
| **Loading (long operation)** | Determinate progress where possible; copy states what is being processed. |
| **Error (form validation)** | Field-level: `#ea001e` border and 14px error text below the field naming the exact rule violated; errors also summarized at top of form for accessibility. |
| **Error (system/API)** | Inline banner on `#feded8`-tinted surface with `#ea001e` icon, plain-language cause, and a retry or "contact admin" path. Trust value forbids vague blame-the-user copy. |
| **Success (record saved)** | Green toast (`#2e844a` accent) top-center, past tense ("Account saved"), auto-dismiss; the record itself reflects the new state immediately. |
| **Success (flow completed)** | Inline confirmation with next-step links rather than celebration; enterprise users are mid-task. |
| **Skeleton** | `#e5e5e5` stencil blocks at final dimensions, subtle pulse, no shimmer gradients. |
| **Disabled** | Reduced-contrast neutral (`#c9c9c9`-range) fill and label together; disabled primaries never stay brand-blue, preserving the rule that `#0176d3` always means actionable. |
| **Warning (limits, expiring trial)** | Amber (`#dd7a01`) banner with concrete numbers and a resolving CTA — never countdown-pressure styling. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection ticks, focus rings, tab switches |
| `motion-fast` | 100–150ms | Hover/press feedback, menu open |
| `motion-standard` | 200–250ms | Modals, panels, toasts, accordion |
| `motion-slow` | 300–400ms | Page-level transitions, marketing reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Surfaces arriving (modals, panels, toasts) |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way state changes |

**Motion rules**: Motion is utilitarian in product and presentational only on marketing surfaces. In-app, SLDS-style motion is brief and spatially literal — panels slide from the edge they belong to, toasts drop from the top, nothing bounces; a CRM screen is a workplace, and spring physics would read as toy-like. On marketing pages, the carousel auto-advances with an explicit pause control (a live accessibility affordance observed on the homepage), and scroll reveals are gentle fades at `motion-slow`. Under `prefers-reduced-motion: reduce`, carousels stop auto-playing and transitions collapse to instant — consistent with accessibility being part of the Trust value. *(Token names and curves are illustrative consolidations; SLDS motion guidance is the product source of truth.)*

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-11) via playwright getComputedStyle:
- https://www.salesforce.com/ (geo-served /kr/) — hero H1 70px ITC Avant Garde #002c6e;
  primary CTA #0176d3 / 4px / 12-20px 32px / 16px 700; outline secondary; glass tiles
  rgba(255,255,255,0.05) bg / 32px radius; carousel controls 9999px; section bands
  #eaf5fe / #f4f4f4; body Salesforce Sans 16/24 #080707; headings #032d60.
- https://www.salesforce.com/pricing/ — EN surface, same button/heading system
  (H1 56px Avant Garde #032d60, CTAs "Calculate pricing"/"Start for free").
- https://www.lightningdesignsystem.com/ — SLDS 2 confirmed (title "Lightning Design
  System 2", "Summer '26 2.8.2", H1 font AvantGardeForSalesforce, copy "Bring your
  brand to life", "Pro-code control, no-code design", CSS-custom-property architecture).
- @salesforce-ux/sds-styling-hooks 1.1.0-alpha.4 hooks.raw.json (unpkg) — official
  token values: color-brand-base ramp (#001639…#eef4ff, base-50 #0176d3), neutral ramp,
  error/success/warning ramps, radius 2/4/8/16/circle, 4px spacing grid, shadow-1..4,
  system-ui font stack, FONT_SIZE ratio 1.125.

Voice samples (§10) are verbatim from the live company page and SLDS cover fetched
2026-06-11: "Welcome to the Agentic Enterprise.", "Salesforce. The #1 Agentic CRM.",
"Trust is our #1 value…", "We are Trailblazers.", "Bring your brand to life."

Brand narrative (§11): founding year 1999 and SaaS-pioneer framing, values list
(Trust/Customer Success/Innovation/Equality/Sustainability), mission sentence,
1-1-1 model and Pledge 1% (18,000+ companies), timeline (AppExchange 2005,
Trailblazer Community 2006, IDC #1 2012, Slack 2021, Data 360 2022, Agentforce 2024)
are all quoted/paraphrased from https://www.salesforce.com/company/ as rendered live
2026-06-11. Co-founder names (Parker Harris, Dave Moellenhoff, Frank Dominguez) and
the early "No Software" logo are widely documented public facts, not from that page.

Personas (§13) are fictional archetypes informed by publicly observable Salesforce
user segments (admins, ops leaders, partner developers, localized-market users).
Names are illustrative; they do not refer to real people.

§14 States and §15 Motion are editorial consolidations of observed marketing behavior
(carousel pause control, banner patterns) and SLDS conventions (stencils, toasts);
where not directly measured they are marked illustrative.

Interpretive claims (e.g., "Trust as a visual spec", "keynote moments, catalog
discipline", the three-font federation reading) are editorial readings connecting
Salesforce's stated values to its observed design system, not Salesforce statements.
-->

---
id: bmw
name: BMW
country: DE
category: automotive
homepage: "https://www.bmw.com"
primary_color: "#0066b1"
logo:
  type: simpleicons
  slug: bmw
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary = live signature interactive blue --site-context-highlight-color (#1c69d4); differs from primary_color frontmatter (#0066b1, BMW roundel marketing blue)"
  colors:
    primary: "#1c69d4"
    primary-hover: "#0653b6"
    brand: "#0066b1"
    canvas: "#ffffff"
    foreground: "#262626"
    muted: "#757575"
    on-primary: "#ffffff"
    focus: "#0653b6"
    surface: "#ffffff"
    dark-surface: "#262626"
    tertiary: "#bbbbbb"
  typography:
    family: { sans: "BMWTypeNextLatin, Helvetica, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo", mono: "monospace" }
    display-hero:    { size: 60, weight: 300, lineHeight: 1.30, use: "Uppercase hero display, whispered authority" }
    section-heading: { size: 32, weight: 400, lineHeight: 1.30, use: "Major section titles" }
    nav-emphasis:    { size: 18, weight: 900, lineHeight: 1.30, use: "Navigation bold items, stark authority" }
    body:            { size: 16, weight: 400, lineHeight: 1.15, use: "Standard body text" }
    button-bold:     { size: 16, weight: 700, lineHeight: 1.20, use: "CTA buttons" }
    button:          { size: 16, weight: 400, lineHeight: 1.15, use: "Standard buttons" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 60 }
  rounded: { sm: 0, md: 0, lg: 0, full: 0 }
  shadow:
    none: "none"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "transparent", fg: "#ffffff", border: "1px solid #ffffff", radius: "0px", padding: "12px 24px", font: "16px / 700", hover: "text stays white, no underline", use: "Primary CTA on dark/hero surfaces" }
    button-secondary: { type: button, bg: "transparent", fg: "#262626", border: "1px solid #262626", radius: "0px", padding: "12px 24px", font: "16px / 400", use: "Secondary action on light surfaces" }
    button-highlight: { type: button, bg: "#1c69d4", fg: "#ffffff", radius: "0px", padding: "12px 24px", font: "16px / 700", hover: "bg #0653b6", use: "BMW Blue highlight CTA" }
    input: { type: input, bg: "#ffffff", fg: "#262626", border: "1px solid #262626", radius: "0px", padding: "12px 16px", font: "16px / 400", focus: "border #0653b6", use: "Default text input" }
    card: { type: card, bg: "#ffffff", radius: "0px", padding: "24px", border: "none", use: "Light-section content card — sharp rectangular" }
    dark-hero-container: { type: card, bg: "#262626", fg: "#ffffff", radius: "0px", padding: "0px", use: "Hero/feature with full-bleed automotive photography, edge-to-edge" }
    badge: { type: badge, bg: "#262626", fg: "#ffffff", radius: "0px", padding: "4px 8px", font: "12px / 700", use: "Label badge" }
---

# Design System Inspiration of BMW

## 1. Visual Theme & Atmosphere

BMW's website is automotive engineering made visual — a design system that communicates precision, performance, and German industrial confidence. The page alternates between deep dark hero sections (featuring full-bleed automotive photography) and clean white content areas, creating a cinematic rhythm reminiscent of a luxury car showroom where vehicles are lit against darkness. The BMW CI2020 design language (their corporate identity refresh) defines every element.

The typography is built on BMWTypeNextLatin — a proprietary typeface in two variants: BMWTypeNextLatin Light (weight 300) for massive uppercase display headings, and BMWTypeNextLatin Regular for body and UI text. The 60px uppercase headline at weight 300 is the defining typographic gesture — light-weight type that whispers authority rather than shouting it. The fallback stack includes Helvetica and Japanese fonts (Hiragino, Meiryo), reflecting BMW's global presence.

What makes BMW distinctive is its CSS variable-driven theming system. Context-aware variables (`--site-context-highlight-color: #1c69d4`, `--site-context-focus-color: #0653b6`, `--site-context-metainfo-color: #757575`) suggest a design system built for multi-brand, multi-context deployment where colors can be swapped globally. The blue highlight color (`#1c69d4`) is BMW's signature blue — used sparingly for interactive elements and focus states, never decoratively. Zero border-radius was detected — BMW's design is angular, sharp-cornered, and uncompromisingly geometric.

**Key Characteristics:**
- BMWTypeNextLatin Light (weight 300) uppercase for display — whispered authority
- BMW Blue (`#1c69d4`) as singular accent — used only for interactive elements
- Zero border-radius detected — angular, sharp-cornered, industrial geometry
- Dark hero photography + white content sections — showroom lighting rhythm
- CSS variable-driven theming: `--site-context-*` tokens for brand flexibility
- Weight 900 for navigation emphasis — extreme contrast with 300 display
- Tight line-heights (1.15–1.30) throughout — compressed, efficient, German engineering
- Full-bleed automotive photography as primary visual content

## 2. Color Palette & Roles

### Primary Brand
- **Pure White** (`#ffffff`): `--site-context-theme-color`, primary surface, card backgrounds
- **BMW Blue** (`#1c69d4`): `--site-context-highlight-color`, primary interactive accent
- **BMW Focus Blue** (`#0653b6`): `--site-context-focus-color`, keyboard focus and active states

### Neutral Scale
- **Near Black** (`#262626`): Primary text on light surfaces, dark link text
- **Meta Gray** (`#757575`): `--site-context-metainfo-color`, secondary text, metadata
- **Silver** (`#bbbbbb`): Tertiary text, muted links, footer elements

### Interactive States
- All links hover to white (`#ffffff`) — suggesting primarily dark-surface navigation
- Text links use underline: none on hover — clean interaction

### Shadows
- Minimal shadow system — depth through photography and dark/light section contrast

## 3. Typography Rules

### Font Families
- **Display Light**: `BMWTypeNextLatin Light`, fallbacks: `Helvetica, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo`
- **Body / UI**: `BMWTypeNextLatin`, same fallback stack

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | BMWTypeNextLatin Light | 60px (3.75rem) | 300 | 1.30 (tight) | `text-transform: uppercase` |
| Section Heading | BMWTypeNextLatin | 32px (2.00rem) | 400 | 1.30 (tight) | Major section titles |
| Nav Emphasis | BMWTypeNextLatin | 18px (1.13rem) | 900 | 1.30 (tight) | Navigation bold items |
| Body | BMWTypeNextLatin | 16px (1.00rem) | 400 | 1.15 (tight) | Standard body text |
| Button Bold | BMWTypeNextLatin | 16px (1.00rem) | 700 | 1.20–2.88 | CTA buttons |
| Button | BMWTypeNextLatin | 16px (1.00rem) | 400 | 1.15 (tight) | Standard buttons |

### Principles
- **Light display, heavy navigation**: Weight 300 for hero headlines creates whispered elegance; weight 900 for navigation creates stark authority. This extreme weight contrast (300 vs 900) is the signature typographic tension.
- **Universal uppercase display**: The 60px hero is always uppercase — creating a monumental, architectural quality.
- **Tight everything**: Line-heights from 1.15 to 1.30 across the entire system. Nothing breathes — every line is compressed, efficient, German-engineered.
- **Single font family**: BMWTypeNextLatin handles everything from 60px display to 16px body — unity through one typeface at different weights.

## 4. Component Stylings

### Buttons

**Primary**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff` (bottom-border on dark surfaces)
- Radius: 0px
- Padding: 12px 24px
- Font: 16px / 700 / BMWTypeNextLatin
- Hover: text remains white, no underline
- Use: Primary CTA on dark/hero surfaces

**Secondary**
- Background: transparent
- Text: `#262626`
- Border: 1px solid `#262626`
- Radius: 0px
- Padding: 12px 24px
- Font: 16px / 400 / BMWTypeNextLatin
- Use: Secondary actions on light surfaces

**Highlight**
- Background: `#1c69d4`
- Text: `#ffffff`
- Radius: 0px
- Padding: 12px 24px
- Font: 16px / 700 / BMWTypeNextLatin
- Hover: `#0653b6`
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source) — BMW Blue highlight CTA

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#262626`
- Border: 1px solid `#262626`
- Radius: 0px
- Padding: 12px 16px
- Font: 16px / 400 / BMWTypeNextLatin
- Focus: border `#0653b6`
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source).

### Cards

**Standard**
- Background: `#ffffff`
- Radius: 0px
- Padding: 24px
- Border: none
- Use: Light-section content card — sharp rectangular, no border-radius (BMW's angular signature)

**Dark Hero Container**
- Background: `#262626` (or full-bleed photography)
- Text: `#ffffff`
- Radius: 0px
- Padding: 0px (edge-to-edge)
- Use: Hero/feature sections with full-bleed automotive photography

### Badges

**Default**
- Background: `#262626`
- Text: `#ffffff`
- Radius: 0px
- Padding: 4px 8px
- Font: 12px / 700 / BMWTypeNextLatin
- Use: Inferred from §1-§2 baseline (no explicit DS variant in source).

### Navigation
- BMWTypeNextLatin 18px weight 900 for primary nav links
- White text on dark header
- BMW logo 54x54px
- Hover: remains white, text-decoration none
- "Home" text link in header

### Image Treatment
- Full-bleed automotive photography
- Dark cinematic lighting
- Edge-to-edge hero images
- Car photography as primary visual content

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 5px, 8px, 10px, 12px, 15px, 16px, 20px, 24px, 30px, 32px, 40px, 45px, 56px, 60px

### Grid & Container
- Full-width hero photography
- Centered content sections
- Footer: multi-column link grid

### Whitespace Philosophy
- **Showroom pacing**: Dark hero sections with generous padding create the feeling of walking through a showroom where each vehicle is spotlit in its own space.
- **Compressed content**: Body text areas use tight line-heights and compact spacing — information-dense, no waste.

### Border Radius Scale
- **None detected.** BMW uses sharp corners exclusively — every element is a precise rectangle. This is the most angular design system analyzed.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Photography (Level 0) | Full-bleed dark imagery | Hero backgrounds |
| Flat (Level 1) | White surface, no shadow | Content sections |
| Focus (Accessibility) | BMW Focus Blue (`#0653b6`) | Focus states |

**Shadow Philosophy**: BMW uses virtually no shadows. Depth is created entirely through the contrast between dark photographic sections and white content sections — the automotive lighting does the elevation work.

## 7. Do's and Don'ts

### Do
- Use BMWTypeNextLatin Light (300) uppercase for all display headings
- Keep ALL corners sharp (0px radius) — angular geometry is non-negotiable
- Use BMW Blue (`#1c69d4`) only for interactive elements — never decoratively
- Apply weight 900 for navigation emphasis — the extreme weight contrast is intentional
- Use full-bleed automotive photography for hero sections
- Keep line-heights tight (1.15–1.30) throughout
- Use `--site-context-*` CSS variables for theming

### Don't
- Don't round corners — zero radius is the BMW identity
- Don't use BMW Blue for backgrounds or large surfaces — it's an accent only
- Don't use medium font weights (500–600) — the system uses 300, 400, 700, 900 extremes
- Don't add decorative elements — the photography and typography carry everything
- Don't use relaxed line-heights — BMW text is always compressed
- Don't lighten the dark hero sections — the contrast with white IS the design

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <375px | Minimum supported |
| Mobile | 375–480px | Single column |
| Mobile Large | 480–640px | Slight adjustments |
| Tablet Small | 640–768px | 2-column begins |
| Tablet | 768–920px | Standard tablet |
| Desktop Small | 920–1024px | Desktop layout begins |
| Desktop | 1024–1280px | Standard desktop |
| Large Desktop | 1280–1440px | Expanded |
| Ultra-wide | 1440–1600px | Maximum layout |

### Collapsing Strategy
- Hero: 60px → scales down, maintains uppercase
- Navigation: horizontal → hamburger
- Photography: full-bleed maintained at all sizes
- Content sections: stack vertically
- Footer: multi-column → stacked

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: Pure White (`#ffffff`)
- Text: Near Black (`#262626`)
- Secondary text: Meta Gray (`#757575`)
- Accent: BMW Blue (`#1c69d4`)
- Focus: BMW Focus Blue (`#0653b6`)
- Muted: Silver (`#bbbbbb`)

### Example Component Prompts
- "Create a hero: full-width dark automotive photography background. Heading at 60px BMWTypeNextLatin Light weight 300, uppercase, line-height 1.30, white text. No border-radius anywhere."
- "Design navigation: dark background. BMWTypeNextLatin 18px weight 900 for links, white text. BMW logo 54x54. Sharp rectangular layout."
- "Build a button: 16px BMWTypeNextLatin weight 700, line-height 1.20. Sharp corners (0px radius). White bottom border on dark surface."
- "Create content section: white background. Heading at 32px weight 400, line-height 1.30, #262626. Body at 16px weight 400, line-height 1.15."

### Iteration Guide
1. Zero border-radius — every corner is sharp, no exceptions
2. Weight extremes: 300 (display), 400 (body), 700 (buttons), 900 (nav)
3. BMW Blue for interactive only — never as background or decoration
4. Photography carries emotion — the UI is pure precision
5. Tight line-heights everywhere — 1.15 to 1.30 is the range

## 10. Voice & Tone

BMW's voice is **precision-engineered and luxury-confident.** "프리미엄 자동차와 혁신적인 기술" — luxury performance positioning. Sharp 3px radius + photography-driven hero signal "German engineering precision."

| Context | Tone |
|---|---|
| CTA | Verb-noun. "사전 예약하기", "더 알아보기", "구성하기" |
| Marketing | Photography dominant; copy supports image |
| Documentation | Technical specs (kW, km/h, 제로백) prominent |
| Error | Specific. "구성 옵션이 호환되지 않습니다." |

**Voice samples**
- Marketing CTAs: *"사전 예약하기"* / *"BMW AI 어시스턴트"* <!-- verified: bmw.co.kr 2026-05 -->

**Forbidden phrases.** "Revolutionary driving". Aggressive Mercedes-comparison framing.

## 11. Brand Narrative

BMW (**Bayerische Motoren Werke**) was founded **March 7, 1916** in Munich, originally as **Bayerische Flugzeugwerke (BFW)** — formerly Otto Flugmaschinenfabrik — an aircraft engine manufacturer ([BMW — Wikipedia](https://en.wikipedia.org/wiki/BMW), [History of BMW — Wikipedia](https://en.wikipedia.org/wiki/History_of_BMW), [BMW Group History](https://www.bmwgroup.com/en/company/history.html)). The company traces its lineage to **Karl Rapp** and **Gustav Otto**; the moniker "BMW" first appeared in 1917 when Rapp Motorenwerke became BMW GmbH, then re-formalized as **Bayerische Motoren Werke in 1922**. The first product was the **BMW IIIa aircraft engine**, distinguished by fuel economy and high-altitude performance ([PBS](https://www.pbs.org/newshour/world/heres-what-bmw-did-before-it-made-luxury-cars)). The **Treaty of Versailles (1918) banned aircraft engine production**, forcing BMW to pivot to **farm equipment, household items, and railway brakes** to survive. Motorcycle production began **1923 (R32)**; automobile market entry **1928** (Dixi acquisition). Brand positioning: ***"Sheer Driving Pleasure"* / *"Freude am Fahren"***. The 2024-2025 evolution toward AI Assistant integration + EV (i-series, Neue Klasse) positions BMW for the post-internal-combustion era while preserving driving-pleasure identity. The roundel logo's **white + blue quarters represent the Bavarian flag**, not a spinning propeller — that myth has been explicitly debunked by BMW corporate communications.

## 12. Principles

1. **Photography is the design.** *UI implication:* hero modules dominated by car photography.
2. **3px sharp radius.** *UI implication:* never round corners more — sharp signals German engineering.
3. **BMW Blue `#1c69d4` for primary action.** *UI implication:* preserve corporate blue for CTAs.
4. **Tight line-heights 1.15-1.30.** *UI implication:* don't open line-height; tight signals premium typography.
5. **Photography emotion, UI precision.** *UI implication:* car photos can be cinematic; chrome stays restrained.

## 13. Personas

*Personas are fictional archetypes informed by BMW user segments (premium auto buyers, EV early-adopters, fleet managers), not individual people.*

**Heinz Müller, 48, Munich.** BMW M-series enthusiast. Long-time customer.

**Sofia Park, 38, Seoul.** First BMW iX buyer, Korean market.

**Marcus Webb, 52, San Francisco.** Tech executive evaluating EV options. BMW i7 vs Tesla Model S comparison.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no configurations)** | "Configure your BMW" CTA + model selector |
| **Empty (no test drives)** | "Book a test drive" CTA |
| **Loading (configurator)** | Real-time 3D rendering progress |
| **Loading (price calc)** | Per-option price update |
| **Error (incompatible config)** | Specific. Constraint explanation |
| **Error (no inventory)** | "출고 대기 시간: N개월" with reservation CTA |
| **Success (saved config)** | Configuration ID + share link |
| **Success (test drive booked)** | Confirmation + dealer contact |
| **Skeleton (model list)** | 3px-radius placeholders |
| **Disabled (option locked)** | Tooltip with constraint reason |
| **Loading (long render)** | Persistent progress |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 300ms | Modal, panel |
| `motion-config-transition` | 500ms | Configuration option transitions |

Standard cubic-bezier; minimal bounce — premium register. `prefers-reduced-motion: reduce` removes 3D rendering animations.

---

**Verified:** 2026-05-08 (B9 loop)
**Tier 1 sources:** bmw.co.kr (live DOM via playwright — BMW Blue `#1c69d4` 3px / 4px / 52px / 14px·500; Light gray `#fff` ghost 3px; Round white icon button 50% / 52px)
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 1 (Philosophy):** bmw.com homepage; BMW corporate history; "Sheer Driving Pleasure" tagline.
**Style ref:** `apple` (luxury minimal). **Conflicts unresolved:** none.

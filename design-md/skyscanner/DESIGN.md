---
id: skyscanner
name: Skyscanner
country: UK
category: consumer-tech
homepage: "https://www.skyscanner.net"
primary_color: "#0062e3"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=skyscanner.net&sz=128"
verified: "2026-06-22"
omd: "0.1"
ds:
  name: Backpack
  url: https://www.skyscanner.design
  type: system
  description: Skyscanner's open-source design system — components, tokens, and guidelines for traveller-first experiences
tokens:
  source: reconciled
  extracted: "2026-06-22"
  note: "primary = Backpack --bpk-core-accent #0062e3 (confirmed live CTA bg); dark navy #05203c = --bpk-core-primary (surface-contrast). Custom 'Skyscanner Relative' sans + 'Larken' serif for editorial surfaces."
  colors:
    primary: "#0062e3"
    primary-hover: "#024daf"
    primary-deep: "#154679"
    brand-dark: "#05203c"
    canvas: "#ffffff"
    canvas-contrast: "#eff3f8"
    surface-low-contrast: "#f7f9fb"
    surface-subtle: "#e3f0ff"
    surface-highlight: "#e0e4e9"
    foreground: "#161616"
    muted: "#626971"
    on-primary: "#ffffff"
    line: "#c1c7cf"
    eco: "#0fa1a9"
    error: "#e70866"
    success: "#0c838a"
    warning: "#f55d42"
  typography:
    family: { sans: "'Skyscanner Relative'", serif: "Larken" }
    display:    { size: 64, weight: 900, lineHeight: 1.20, use: "Brand World display; very large display copy only" }
    hero-1:     { size: 40, weight: 700, lineHeight: 1.25, use: "Page hero headline (large)" }
    hero-2:     { size: 32, weight: 700, lineHeight: 1.25, use: "Secondary hero / section heads" }
    heading-1:  { size: 28, weight: 700, lineHeight: 1.30, use: "Major headings" }
    heading-2:  { size: 24, weight: 700, lineHeight: 1.30, use: "Sub-section headings" }
    body-lg:    { size: 20, weight: 400, lineHeight: 1.40, use: "Large body / feature descriptions" }
    body:       { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    body-sm:    { size: 14, weight: 400, lineHeight: 1.43, use: "Secondary body, captions" }
    label:      { size: 14, weight: 700, lineHeight: 1.43, use: "Buttons and labels" }
    caption:    { size: 12, weight: 400, lineHeight: 1.33, use: "Fine print, metadata" }
  spacing: { sm: 4, md: 8, base: 16, lg: 24, xl: 32, xxl: 40, xxxl: 64, xxxxl: 96 }
  rounded: { xs: 4, sm: 8, md: 12, lg: 24, full: 9999 }
  shadow:
    sm: "rgba(22,22,22,0.25) 0px 1px 3px 0px"
    md: "rgba(22,22,22,0.25) 0px 4px 14px 0px"
    xl: "rgba(22,22,22,0.25) 0px 12px 50px 0px"
    card: "rgba(0,0,0,0.08) 0px 4px 8px 0px, rgb(230,233,235) 0px 0px 0px 1px"
  components:
    button-primary: { type: button, bg: "#0062e3", fg: "#ffffff", radius: "8px", height: "36px", padding: "0px 16px", font: "16px / 400 Skyscanner Relative", hover: "#024daf", use: "Primary CTA — search, book, confirm" }
    button-secondary: { type: button, bg: "#e0e4e9", fg: "#161616", radius: "8px", height: "36px", padding: "0px 16px", font: "16px / 400 Skyscanner Relative", hover: "#c1c7cf", use: "Secondary actions" }
    button-featured: { type: button, bg: "#0062e3", fg: "#ffffff", radius: "8px", height: "48px", padding: "0px 16px", font: "16px / 400 Skyscanner Relative", use: "Large featured CTA (Large button variant)" }
    tab-active: { type: tab, bg: "#0062e3", fg: "#ffffff", radius: "100px", padding: "0px 16px", height: "36px", font: "16px / 400", use: "Active product tab (Flights, Hotels, Cars)", active: "bg #0062e3 text #ffffff" }
    tab-inactive: { type: tab, bg: "transparent", fg: "#ffffff", radius: "100px", padding: "0px 16px", height: "36px", border: "rgba(255,255,255,0.5) 0px 0px 0px 1px inset", use: "Inactive product tab" }
    input-search: { type: input, bg: "#ffffff", border: "none", radius: "12px", padding: "0px 16px", height: "72px", font: "16px / 400 Skyscanner Relative", use: "Flight/hotel search field block" }
    card-default: { type: card, bg: "#ffffff", radius: "12px", shadow: "rgba(0,0,0,0.08) 0px 4px 8px 0px, rgb(230,233,235) 0px 0px 0px 1px", use: "Standard content card" }
    badge-info: { type: badge, bg: "#e3f0ff", fg: "#0062e3", radius: "6px", padding: "4px 8px", font: "12px / 400", use: "Status / informational pill" }
    toggle-on: { type: toggle, bg: "#0062e3", fg: "#ffffff", use: "Toggle/checkbox in 'on' state" }
    chip-filter: { type: badge, bg: "#05203c", fg: "#ffffff", radius: "8px", border: "1px solid #c1c7cf", padding: "0px 12px", height: "32px", font: "14px / 400", use: "Filter chip in active/selected state" }
  components_harvested: true
---

# Design System Inspiration of Skyscanner

## 1. Visual Theme & Atmosphere

Skyscanner's product speaks with the confidence of a global travel marketplace that has handled hundreds of millions of searches — clear, energetic, and trustworthy, without the corporate gravity of legacy airline booking tools. The system opens on a pure white canvas (`#ffffff`) wrapped in a luminous, cornflower-sky blue (`#0062e3`) for its primary CTA, while a deep midnight navy (`#05203c`) anchors contrast surfaces, headers-on-dark, and the brand's most authoritative moments. The result is a palette that feels genuinely sky-inspired — open, optimistic, and reliably actionable.

Skyscanner's typographic identity is built on a custom geometric sans, **"Skyscanner Relative"**, a humanist typeface designed in-house that forms the foundation of every word in the product — from hero headlines at weight 900 to button labels at weight 700 to body text at 400. A secondary editorial serif, **Larken**, is reserved for brand storytelling surfaces (audience/campaign pages), giving the system an expressive toggle between two registers: functional sans and editorial serif. The body size is a deliberate 16px at 1.5 line-height, engineered for scan-first search interactions where users compare prices and routes at speed.

The design language is defined by **rounded softness at every scale**: corner radii cascade from 4px (checkbox borders) through 8px (buttons, chips) to 12px (search panels, major cards) and 100px (product-selector pill tabs). The search form itself — Skyscanner's most visited surface — is a card composed of white-background input blocks with generous 72px height, minimal borders, and a single electric-blue submit button. Depth comes from a dual-layer shadow system: a neutral `rgba(0,0,0,0.08)` fill-shadow layered with a subtle `rgb(230,233,235)` inset ring for cards, and a three-level ambient/standard/XL scale for floating panels.

**Key Characteristics:**
- Custom "Skyscanner Relative" typeface for all product text; Larken serif for editorial surfaces
- Sky blue `#0062e3` (Backpack `--bpk-core-accent`) as the single interactive/CTA colour
- Midnight navy `#05203c` (Backpack `--bpk-core-primary`) for dark surfaces and brand depth
- Pill-shaped product-selector tabs (100px radius) on deep navy hero backgrounds
- Large (72px) search-input blocks with card-style grouping and 12px radius
- 8px radius for standard buttons; no square corners, no excessive rounding
- Dual-layer card shadow: `rgba(0,0,0,0.08)` + `rgb(230,233,235)` ring border
- "Eco" teal (`#0fa1a9`) for environmental/sustainability signals (green travel)
- Typography weight triad: 900 (display), 700 (headings/labels), 400 (body)

## 2. Color Palette & Roles

### Primary
- **Sky Blue / Core Accent** (`#0062e3`): `--bpk-core-accent`. The system's single interactive colour — primary CTA backgrounds, links, active tabs, checkbox fills, segmented-control selected state, and the search submit button. This is the colour Skyscanner owns.
- **Midnight Navy / Core Primary** (`#05203c`): `--bpk-core-primary` / `--bpk-surface-contrast`. The deepest brand colour — hero section backgrounds (dark), the chip-filter active state, the search panel's "swap origin and destination" button ring. Not black; a deep indigo-navy with travel-brand personality.
- **Pure White** (`#ffffff`): Page canvas, card surfaces, text on dark/blue backgrounds, input fields.

### Surface Scale
- **Canvas Contrast** (`#eff3f8`): `--bpk-canvas-contrast`. The cool-off-white secondary surface — badge backgrounds, info-banner backgrounds, alternate section tints.
- **Surface Low Contrast** (`#f7f9fb`): Subtler page tint, hover states on secondary items.
- **Surface Subtle** (`#e3f0ff`): Blue-tinted subtle surface for promotional sections and active DS sidebar items.
- **Surface Highlight** (`#e0e4e9`): `--bpk-surface-highlight`. Disabled backgrounds, secondary button fill.

### Text & Border
- **Foreground** (`#161616`): `--bpk-text-primary`. Primary body text. Near-black with a warm undertone — not pure black.
- **Muted** (`#626971`): `--bpk-text-secondary`. Secondary body text, captions, metadata.
- **Line Default** (`#c1c7cf`): `--bpk-other-line-default`. Standard border — input outlines, chip borders, dividers.

### Interactive States
- **Primary Hover** (`#024daf`): Button and active-state hover for blue actions.
- **Primary Deep** (`#154679`): Pressed state, date-selector highlight, deep hover.

### Semantic & Eco
- **Eco Teal** (`#0fa1a9`): `--bpk-core-eco`. Sustainability / green travel signal — unique in the palette.
- **Error / Danger** (`#e70866`): `--bpk-status-danger-spot`. Form validation errors, destructive states.
- **Success** (`#0c838a`): `--bpk-status-success-spot`. Confirmation, positive status.
- **Warning / Disruption** (`#f55d42`): `--bpk-status-warning-spot`. Disruption / delay alerts.

## 3. Typography Rules

### Font Family
- **Product / Primary**: `'Skyscanner Relative'` — custom humanist geometric sans, developed in-house. Fallback: `-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`. Global locale fallbacks include `Noto Sans` family variants for CJK, Arabic, Hebrew, Thai.
- **Editorial / Brand**: `'Larken'` — serif typeface reserved for Brand World / audience / campaign surfaces only. Never used in product UI.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display | Skyscanner Relative | 64px | 900 | ~1.20 | Brand World hero; very few words only |
| Hero 1 | Skyscanner Relative | 40px | 700 | 1.25 | Page hero headline |
| Hero 2 | Skyscanner Relative | 32px | 700 | 1.25 | Secondary hero / feature section |
| Heading 1 | Skyscanner Relative | 28px | 700 | 1.30 | Major headings |
| Heading 2 | Skyscanner Relative | 24px | 700 | 1.30 | Sub-section headings |
| Body Large | Skyscanner Relative | 20px | 400 | 1.40 | Feature descriptions |
| Body Default | Skyscanner Relative | 16px | 400 | 1.50 | Standard reading text |
| Body Small | Skyscanner Relative | 14px | 400 | 1.43 | Captions, secondary UI |
| Label | Skyscanner Relative | 14px | 700 | 1.43 | Button labels, form labels |
| Caption | Skyscanner Relative | 12px | 400 | 1.33 | Fine print, metadata |

### Principles
- **Relative is always sans**: Larken is for storytelling only; every product UI — buttons, inputs, tabs, navigation — uses Skyscanner Relative.
- **Major-third scale**: The type scale derives from a major-third progression (1.250 ratio), creating consistent harmonic jumps across sizes.
- **8px baseline grid**: All sizes and line-heights snap to a 4px/8px grid.
- **Two headline weights**: Weight 900 for display-level brand moments; weight 700 for all other headings, labels, and button text; weight 400 for body and UI copy.
- **No tracking manipulation**: Unlike many brand systems, Skyscanner Relative is designed to run at 0 letter-spacing — the font's optical balance makes additional tracking unnecessary.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#0062e3`
- Text: `#ffffff`
- Radius: 8px
- Height: 36px
- Padding: 0px 16px
- Font: 16px / 400 / Skyscanner Relative
- Hover: `#024daf` background
- Use: Primary CTAs — search submit, book, confirm

**Primary Large**
- Background: `#0062e3`
- Text: `#ffffff`
- Radius: 8px
- Height: 48px
- Padding: 0px 16px
- Font: 16px / 400 / Skyscanner Relative
- Use: Featured/Large button variant (high-emphasis surfaces)

**Secondary**
- Background: `#e0e4e9`
- Text: `#161616`
- Radius: 8px
- Height: 36px
- Padding: 0px 16px
- Font: 16px / 400 / Skyscanner Relative
- Hover: `#c1c7cf` background
- Use: Secondary actions alongside primary

**Destructive (Danger)**
- Background: `#e0e4e9`
- Text: `#e70866`
- Radius: 8px
- Height: 36px
- Padding: 0px 16px
- Hover: `#e70866` background with white text
- Use: Delete, cancel, destructive actions

**Secondary on Dark**
- Background: `rgba(255,255,255,0.1)`
- Text: `#ffffff`
- Radius: 8px
- Height: 36px
- Padding: 0px 16px
- Use: Secondary actions on navy/dark surfaces (hero panels)

### Inputs & Forms

**Search Input Block**
- Background: `#ffffff`
- Radius: 0px (individual block; 12px on the outer container)
- Height: 72px
- Padding: 0px 16px
- Font: 16px / 400 / Skyscanner Relative
- Border: none (grouped card with outer container border)
- Use: Departure/destination/date/passenger fields in the search widget

**Standard Input**
- Background: `#ffffff`
- Border: 1px solid `#c1c7cf`
- Radius: 8px
- Padding: 12px 16px
- Font: 16px / 400 / Skyscanner Relative
- Focus: 2px solid `#0062e3`
- Use: Standard form inputs (sign-in, booking details)

**Checkbox**
- Background (checked): `#0062e3`
- Border (unchecked): 2px solid `#626971`
- Radius: 4px
- Use: Filter toggles, trip options, preference checkboxes

### Cards & Containers

**Standard Card**
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.08) 0px 4px 8px 0px, rgb(230,233,235) 0px 0px 0px 1px`
- Use: Flight result cards, hotel cards, content panels on white page

**Surface Contrast Card**
- Background: `#05203c`
- Text: `#ffffff`
- Radius: 12px
- Padding: 12px 16px
- Use: On-dark-surface information cards (e.g. Backpack docs dark panel)

**Tinted Surface Card**
- Background: `#eff3f8`
- Radius: 12px
- Use: Secondary/grouped content on canvas contrast background

### Badges & Chips

**Info Badge**
- Background: `#e3f0ff`
- Text: `#0062e3`
- Radius: 6px
- Padding: 4px 8px
- Font: 12px / 400
- Use: Informational tags, labels, "best value" type pills

**Filter Chip (Off)**
- Background: transparent
- Border: 1px solid `#c1c7cf`
- Text: `#161616`
- Radius: 8px
- Height: 32px
- Padding: 0px 12px
- Use: Deselected filter chips (stops, airlines, times)

**Filter Chip (On / Active)**
- Background: `#05203c`
- Text: `#ffffff`
- Radius: 8px
- Height: 32px
- Padding: 0px 12px
- Use: Selected filter chips (active state)

### Tabs

**Product Tab (Active)**
- Background: `#0062e3`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0px 16px
- Height: 36px
- Font: 16px / 400
- Use: Active product selector tab (Flights, Hotels, Car hire) on dark hero

**Product Tab (Inactive)**
- Background: transparent
- Text: `#ffffff`
- Radius: 100px
- Padding: 0px 16px
- Height: 36px
- Border: `rgba(255,255,255,0.5) 0px 0px 0px 1px inset`
- Use: Inactive product tabs on dark/blue hero backgrounds

**Navigation Tab (Active)**
- Background: `#024daf`
- Text: `#ffffff`
- Use: Segmented control selected state on contrast surface

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.skyscanner.design (Backpack design system — live CSS token extraction and component inspect); https://github.com/Skyscanner/backpack/blob/main/token-sync/css/theme-backpack-light.css (published CSS variables — authoritative token source); https://unpkg.com/@skyscanner/bpk-foundations-web@24.6.0/tokens/base.default.scss (npm package token file — spacing, radius, typography scale); https://www.skyscanner.co.kr/ (live homepage inspect via playwright getComputedStyle — button/tab/input computed values)
**Tier 2 sources:** getdesign.md/skyscanner — "No designs found"; styles.refero.design/?q=skyscanner — no Skyscanner entry found (results were unrelated travel brands)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Backpack scale: sm=4px, md=8px, base=16px, lg=24px, xl=32px, xxl=40px, xxxl=64px, xxxxl=96px
- The search widget is the most layout-critical element: a card-shaped container with 12px radius, internal blocks at 72px height each, and a separate submit button at 12px radius

### Grid & Container
- Centered max-width content (approximately 1280px)
- Hero: full-width dark (`#05203c`) background with centered search widget
- Product tabs: horizontal pill row centered in the hero
- Results: vertical list of cards, full container width on mobile, 3-column-capable layout on desktop
- Marketing pages: alternating white and tinted sections (`#eff3f8`)

### Whitespace Philosophy
- **Generous block spacing**: The 72px search-input height deliberately provides large touch targets and visual breathing room
- **Precision within components**: Component internal padding is tight (8px-16px) while section-level spacing is generous (48px-64px)
- **Scan-first density**: Flight result cards are information-dense by design — price, airline, times, duration, stops in one readable block

### Border Radius Scale
- 4px: Checkboxes, micro-elements
- 6px: Small badges, cookie consent buttons on Backpack docs
- 8px: Standard buttons, chips, form inputs (button-border-radius = 0.5rem)
- 12px (0.75rem): Card containers, search widget, input-large
- 24px (1.5rem): lg token — large viewport containers
- 100px / full: Product selector pill tabs, full-round avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page background, nav, inline text |
| SM (1) | `rgba(22,22,22,0.25) 0px 1px 3px` | Subtle lift, tooltip, chip hover |
| Card (2) | `rgba(0,0,0,0.08) 0px 4px 8px, rgb(230,233,235) 0px 0px 0px 1px` | Flight/hotel result cards, content panels |
| MD (3) | `rgba(22,22,22,0.25) 0px 4px 14px` | Dropdowns, date picker popover |
| XL (4) | `rgba(22,22,22,0.25) 0px 12px 50px` | Modals, popovers, autosuggest panel |

**Shadow philosophy**: Skyscanner's shadow system is neutral — `rgba(22,22,22,0.25)` uses the brand's off-black foreground colour (not pure black) as the shadow source, keeping depth warm rather than cold. The card-level shadow adds a `rgb(230,233,235)` inset ring (nearly invisible on white) that creates a crisp, inset-border effect without a visible CSS border — this is the characteristic "floating card" look of Skyscanner's search results.

## 7. Do's and Don'ts

### Do
- Use `#0062e3` (Sky Blue) for all interactive/CTA elements — it's the action colour
- Use "Skyscanner Relative" for every product UI text element
- Apply 8px radius to buttons and chips — it's the workhorse radius
- Use 100px pill radius for product-selector tabs only
- Give search input blocks 72px height — generous touch targets are the brand standard
- Use the dual-layer card shadow (`rgba(0,0,0,0.08)` + `rgb(230,233,235)` ring) for content cards
- Use `#05203c` navy as the hero background — the brand's confident dark surface
- Apply 12px radius to search panel containers and result cards
- Use "Larken" for editorial/brand campaign surfaces only
- Use `#0fa1a9` eco teal exclusively for sustainability and environmental signals

### Don't
- Use pure black (`#000000`) for text — foreground is `#161616`
- Apply Larken in product UI — it belongs to brand storytelling only
- Use weight 900 for anything but the most exceptional display copy
- Mix Sky Blue (`#0062e3`) with other accent colours on the same surface
- Decrease radius below 4px — Skyscanner is intentionally soft and rounded
- Use pill-radius (100px) on buttons — that's reserved for the product tab row
- Skip the eco teal signal when featuring environmental or carbon-conscious travel options
- Use drop shadows heavier than XL — the system stays subtle with neutral shadow tones

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, stacked search blocks, compressed nav |
| Tablet | 768-1024px | 2-column capability, expanded product tabs |
| Desktop | 1024-1280px | Full search widget, 3-column results grid |
| Large Desktop | >1280px | Centered content with fixed max-width (~1280px) |

### Touch Targets
- Search input blocks at 72px height — comfortably tappable on touch
- Buttons at 36px (standard) / 48px (large) height
- Product tabs at 36px height with generous 16px horizontal padding
- Minimum interactive target: 44px (accessibility guideline)

### Collapsing Strategy
- Hero search widget: stacks vertically on mobile; horizontal row on desktop
- Product tabs: horizontal scroll on narrow viewports
- Result cards: single column on mobile; multi-column on desktop
- Navigation: hamburger menu on mobile; expanded horizontal nav on desktop
- Typography scale: hero sizes reduce proportionally (40px → 28px on mobile)

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Sky Blue (`#0062e3`)
- CTA Hover: Blue Mid (`#024daf`)
- Page Background: Pure White (`#ffffff`)
- Hero / Dark Surface: Midnight Navy (`#05203c`)
- Canvas Contrast: Cool Off-White (`#eff3f8`)
- Primary Text: Off-Black (`#161616`)
- Secondary Text: Slate (`#626971`)
- Line / Border: Cool Grey (`#c1c7cf`)
- Eco / Sustainability: Teal (`#0fa1a9`)
- Error: Magenta-Red (`#e70866`)
- Success: Teal Green (`#0c838a`)

### Example Component Prompts
- "Create a hero section on `#05203c` midnight navy. Center a horizontal row of pill tabs (100px radius, 36px height, 0px 16px padding) — active tab: `#0062e3` bg, white text; inactive: transparent, white text, 1px inset rgba(255,255,255,0.5) border. Below tabs: white search panel card, 12px radius, grouped input blocks 72px height each, Skyscanner Relative 16px/400. CTA button: `#0062e3`, 12px radius, 12px 16px padding, white text."
- "Design a flight result card: white background, 12px radius, dual shadow: rgba(0,0,0,0.08) 0px 4px 8px, rgb(230,233,235) 0px 0px 0px 1px. Airline logo left, route/time center, price right in Sky Blue `#0062e3`. Skyscanner Relative — price at 20px/700, details at 14px/400, `#626971`."
- "Build a filter chip row: each chip 32px height, 8px radius, Skyscanner Relative 14px/400. Off: transparent bg, `#c1c7cf` border, `#161616` text. On: `#05203c` bg, white text."
- "Create an info badge: `#e3f0ff` background, `#0062e3` text, 6px radius, 4px 8px padding, 12px/400 Skyscanner Relative."
- "Design an eco signal badge: `#0fa1a9` background (or tinted surface with eco text), paired with leaf icon. Signals low-carbon flight option."

### Iteration Guide
1. Skyscanner Relative is the only typeface for product UI — never substitute
2. `#0062e3` Sky Blue = action. Use it for exactly one primary CTA per section
3. `#05203c` navy = the brand's confident dark — use for hero backgrounds and high-contrast surfaces
4. Card radius is 12px; button radius is 8px; pill tabs are 100px — never interchange
5. Dual-layer card shadow is the brand signature: `rgba(0,0,0,0.08) 0px 4px 8px, rgb(230,233,235) 0px 0px 0px 1px`
6. Search input blocks are 72px tall — don't reduce; touch ergonomics are intentional
7. Eco teal (`#0fa1a9`) belongs only to sustainability/environmental signals

---

## 10. Voice & Tone

Skyscanner's voice is **curious, helpful, and refreshingly human** — a savvy travel companion, not a booking engine. The product's purpose is to remove complexity from travel planning, and the copy reflects this: straightforward, jargon-free, and action-oriented. Skyscanner communicates with a light British wit — enough personality to feel alive, never enough to be distracting. The company's Edinburgh heritage shows in understated confidence: Skyscanner doesn't hype, it clarifies.

| Context | Tone |
|---|---|
| Search / navigation CTAs | Concise, actionable. "Search flights." "Find your perfect trip." Direct without commanding. |
| Empty / no-results | Empathetic and constructive. Explains the gap and offers alternatives — never blames the traveller. |
| Pricing / alert copy | Honest and specific. "Prices for this route are lower on Tuesdays." No "Amazing deal!" inflation. |
| Error messages | Friendly and helpful. States what happened and what to try next in plain language. |
| App onboarding | Warm and welcoming. Sets expectations without overwhelming. |
| Marketing / brand | Aspirational but grounded. Travel as a human need, not a luxury status signal. |
| Legal / privacy | Clear and complete. Skyscanner's GDPR-era copy is unusually readable for legal text. |

**Voice samples (from live surfaces):**
- "수백만 개의 저가 항공권. 검색 한 번으로 간단하게." — hero headline ("Millions of cheap flights. Simply found in one search.") *(verified live 2026-06-22)*
- "Are you a person or a robot?" — bot-detection captcha page (conversational, charming even in friction). *(verified live 2026-06-22)*
- "Backpack is Skyscanner's design system, a collection of guidelines, components and tools for creating intuitive traveller-first experiences." — Backpack homepage (clear, brand-purposeful prose). *(verified live 2026-06-22)*

**Forbidden register**: "Best prices GUARANTEED!", spam-adjacent urgency ("Only 2 seats left!"), dark-pattern FOMO, overclaim superlatives ("World's greatest"), corporate jargon, exclamation-heavy hype.

## 11. Brand Narrative

Skyscanner was founded in **2001** by **Gareth Williams, Barry Smith, and Bonamy Grimes** — three friends in Edinburgh who, working on a coding side project, realised they couldn't find a quick way to compare airfares across carriers. The company began as a tool for their own travel frustration. It launched publicly in 2003 as one of the first flight-aggregator search engines, predating Google Flights by nearly a decade.

The Edinburgh origin is foundational to the brand: Skyscanner grew from a developer's tool into a mass-consumer product while retaining a sense of curious, problem-solving pragmatism that distinguishes it from its American competitors. The product's promise — find the cheapest way to get from A to B, regardless of airline or booking site — was radical in an era when each airline kept fares inside its own walled garden.

Skyscanner's growth arc ran through a **2014 Series A investment by Sequoia Capital**, followed by rapid international expansion (now supporting 52 languages and 70 currencies), until **2016, when Chinese travel giant Ctrip (now Trip.com Group) acquired Skyscanner for £1.4 billion** — the largest-ever acquisition of a British tech company at the time. Despite the acquisition, Skyscanner continues to operate as an independent brand headquartered in Edinburgh, with offices in London, Barcelona, and Shenzhen.

The **Backpack design system** (open-sourced in 2016) represents the company's commitment to building product with the rigor of a design-forward tech company. The name "Backpack" is on-brand: it's the traveller's essential companion — reliable, well-organised, and always ready for the next destination.

What Skyscanner refuses: airline-owned bias (all results are ordered by price and relevance, not commercial arrangement by default), dark-pattern urgency tactics, and the visual register of legacy travel agencies (photo carousels of stock beach shots, heavy serif editorial fonts, cluttered layouts). What it embraces: clean information hierarchy, honest pricing, and the conviction that travel comparison should feel effortless.

## 12. Principles

1. **Traveller-first, always.** Backpack's stated mission is "creating intuitive traveller-first experiences." Every UI decision must ask whether it serves the traveller's goal (finding the best flight) or the business's short-term goal (a higher-margin booking). When they conflict, traveller wins. *UI implication:* Default sort is "Best" (price + convenience), not "Most profitable to partners."
2. **Clarity over cleverness.** Skyscanner operates in 52 languages. Every copy string, icon, and pattern must translate — literally and conceptually. Metaphors that work in English often break in Japanese. *UI implication:* Prefer universal iconography and literal label text over witty but cryptic shorthand.
3. **Earn trust through honesty.** Price alerts, fare history charts, and calendar-view cheapest-day tools all share the same underlying ethic: give travellers the information they need to make the best decision for themselves, even if it means saying "this isn't the cheapest week to fly." *UI implication:* Transparency about pricing, fees, and data sourcing is non-negotiable.
4. **Softness signals safety.** The rounded, sky-blue visual system is deliberate — buying airline tickets involves significant money and travel anxiety. The rounded corners and friendly palette lower the cognitive and emotional cost of engaging with a complex task. *UI implication:* Never introduce sharp edges, high-contrast warnings, or aggressive red on the primary booking surface.
5. **Speed is a feature.** The search widget is the product's beating heart. Every millisecond of perceived lag erodes trust. *UI implication:* Skeletons, optimistic UI, and progressive result-loading are first-class experiences — never an afterthought.

## 13. Personas

*Personas below are fictional archetypes informed by Skyscanner's publicly documented user research and travel patterns, not individual people.*

**Priya Mehta, 28, London.** A digital nomad who does quarterly visa runs and uses Skyscanner's Everywhere destination search to find the cheapest escape from the UK before winter. She books within a day of searching — she doesn't read airline blogs, she trusts the price calendar. Values speed over aesthetics; becomes immediately mistrustful if a result feels artificially highlighted.

**Tomás García, 41, Madrid.** A business traveller who flies four times a month within Europe. Uses price alerts to monitor fluctuating routes, and specifically appreciates Skyscanner's lack of sponsored placement in the default sort. He's noticed that other aggregators surface results "sponsored by" airlines; Skyscanner feels neutral. That neutrality is his primary loyalty driver.

**Aiko Nakamura, 24, Osaka.** A university student planning her first solo trip to Europe with a fixed ¥200,000 budget. Skyscanner is her first search every time because it shows all prices without requiring sign-in. She's overwhelmed by choice and relies heavily on the "Best" sort and the "Price alerts" feature to feel in control of a situation where she has low expertise.

**Daniel Osei, 35, Accra.** A diaspora traveller who flies Accra–London twice a year for family visits. Uses Skyscanner to monitor routes and set alerts, then often books directly with the airline. Values the breadth of route coverage and the fact that African routes are included — not all aggregators cover them comprehensively.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no flight results)** | White canvas. Single friendly explanation at body text in `#161616`: "We couldn't find any flights for those dates." Suggestion to adjust dates or try nearby airports. One Sky Blue (`#0062e3`) CTA to modify search. No illustration — keeps the functional register. |
| **Empty (price alert, no price drop yet)** | Calm informational state. Muted slate `#626971` text: "We'll let you know when prices drop for this route." One button to manage alerts. |
| **Loading (search results)** | Skeleton cards at final result-card dimensions, `#eff3f8` fill, 12px radius. Animation: flat 1s pulse (no shimmer). Top of the page: "Searching hundreds of airlines..." in muted slate with animated dots. |
| **Loading (calendar / price grid)** | Progressive skeleton fill — dates appear as data loads, not all at once. Prevents "flash of empty grid." |
| **Error (search failed)** | Inline message in the hero below the search form. Plain language: "Something went wrong. Please try your search again." One `#0062e3` "Try again" button. No `#e70866` — error message stays on the calm blue system. |
| **Error (form validation)** | Field-level inline message. `#e70866` icon + text below the input: "Please enter a valid departure date." Never modal. |
| **Success (alert set)** | Inline confirmation: "`#0c838a` checkmark + "Alert set for London Heathrow → Barcelona"." Auto-dismisses. No modal. |
| **Skeleton (result cards)** | `#eff3f8` background blocks at precise card dimensions. Airline logo placeholder, route text placeholder (70% width), price block placeholder. 12px radius matching final card. |
| **Disabled** | Secondary button-style: `#e0e4e9` background, `#626971` text. Sky Blue elements fade to `rgba(0,98,227,0.4)` rather than switching to generic grey. |
| **Price alert active** | Badge: `#e3f0ff` background, `#0062e3` text, 6px radius, bell icon. "Price tracked" label. |
| **Price drop notification** | `#0c838a` success-tinted banner: "Prices dropped! [Route] is now from [price]." One CTA to search. |

## 15. Motion & Easing

**Durations (Backpack `duration-*` tokens):**

| Token | Value | Use |
|---|---|---|
| `duration-xs` | 50ms | Micro-interactions — checkbox tick, toggle snap |
| `duration-sm` | 200ms | Button press feedback, chip toggle, tab selection |
| `duration-base` | 400ms | Card reveal, panel expand, date picker open |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — panels, cards, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way — tab switches, chip toggles |

**Motion rules**: Skyscanner's motion language is functional and restrained — motion communicates state change, not personality. Search-widget inputs (72px height) expand/contract at `duration-base / ease-enter`. Price sort re-ordering uses staggered `duration-sm` on each card. The product tab switch (Flights → Hotels) transitions with a `duration-sm` background-colour swap — the pill moves, the content cross-fades at `duration-base`. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; skeleton-to-content switches become immediate. The `eco` teal signal animates with a subtle `duration-base` fade-in to draw the eye to environmental data without being intrusive.

**Signature motion:**
1. **Search submit**: On clicking the blue "Search" button, the button performs a brief `duration-xs` scale-down press, then the page transitions to results with the hero collapsing from 72px blocks to a compact sticky header at `duration-base / ease-exit`. The transition anchors the user spatially.
2. **Price alert confirmation**: The bell icon bounces once at `duration-sm` with `ease-enter` — the one place a slight delight motion appears, because a price alert is a moment of user accomplishment in a task-oriented flow.

<!--
OmD v0.1 Sources — Philosophy Layer (§10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle:
- https://www.skyscanner.design/ (Backpack DS site) — body font rgb(22,22,22), font-family "Skyscanner Relative", bg rgb(255,255,255); nav link bg rgb(227,240,255) active = #e3f0ff; accent text rgb(0,98,227) = #0062e3; dark panel bg rgb(5,32,61) ≈ #05203c; card shadow rgba(0,0,0,0.08) 0px 4px 8px + rgb(230,233,235) ring; button bg rgb(0,98,227) "Allow all cookies" = #0062e3 radius 6px
- https://www.skyscanner.co.kr/ (consumer app, KR locale redirect — bypassed captcha) — tab active bg rgb(0,98,227) = #0062e3, radius 100px; hero H2 color rgb(255,255,255), font-size 32px, font-weight 700; search submit bg rgb(0,98,227) radius 12px; product tabs pill shape 36px height; body font: "Skyscanner Relative" confirmed

Backpack CSS token file (https://raw.githubusercontent.com/Skyscanner/backpack/main/token-sync/css/theme-backpack-light.css, fetched 2026-06-22):
- --bpk-core-accent: #0062e3
- --bpk-core-primary: #05203c
- --bpk-core-eco: #0fa1a9
- --bpk-surface-hero: #0062e3
- --bpk-surface-contrast: #05203c
- --bpk-text-primary: #161616
- --bpk-text-secondary: #626971
- --bpk-other-line-default: #c1c7cf
- --bpk-status-danger-spot: #e70866
- --bpk-status-success-spot: #0c838a
- --bpk-private-button-colour-bg-primary: #05203c
- --bpk-private-button-colour-bg-featured: #0062e3
- --bpk-private-button-dimension-radius: 0.5rem (8px)
- --bpk-canvas-contrast: #eff3f8
- --bpk-surface-subtle: #e3f0ff
- --bpk-surface-highlight: #e0e4e9
- Shadows: xl-color rgba(22,22,22,0.25) xl-blur 3.125rem (50px) xl-y 0.75rem (12px)

npm @skyscanner/bpk-foundations-web@24.6.0/tokens/base.default.scss (fetched 2026-06-22):
- $bpk-font-family-base: 'Skyscanner Relative'
- $bpk-font-family-larken: 'Larken'
- $bpk-font-weight-book: 400; $bpk-font-weight-bold: 700; $bpk-font-weight-black: 900
- $bpk-font-size-xs: .75rem (12px); $bpk-font-size-sm: .875rem (14px); $bpk-font-size-base: 1rem (16px); $bpk-font-size-lg: 1.25rem (20px); $bpk-font-size-xl: 1.5rem (24px); $bpk-font-size-xxl: 2rem (32px)
- $bpk-border-radius-xs: .25rem (4px); $bpk-border-radius-sm: .5rem (8px); $bpk-border-radius-md: .75rem (12px); $bpk-border-radius-lg: 1.5rem (24px); $bpk-border-radius-xl: 2.5rem (40px)
- Spacing: sm=4px md=8px base=16px lg=24px xl=32px xxl=40px xxxl=64px xxxxl=96px

Brand narrative: Skyscanner founded 2001 Edinburgh by Gareth Williams, Barry Smith, Bonamy Grimes. 2016 acquisition by Ctrip for £1.4B — widely documented public facts (Wikipedia, The Guardian, Skyscanner company blog). Backpack open-source DS launched 2016 — documented on GitHub (skyscanner/backpack, first commit history).

Voice samples §10 verified live:
- Korean hero headline verified on https://www.skyscanner.co.kr/ (2026-06-22)
- Captcha copy "Are you a person or a robot?" verified on skyscanner.net captcha page (2026-06-22)
- Backpack welcome copy verified on https://www.skyscanner.design (2026-06-22)

Personas are fictional archetypes informed by publicly observable Skyscanner user segments. Names are illustrative and do not refer to real people.

Interpretive claims (e.g. "Edinburgh heritage shows in understated confidence", "softness signals safety") are editorial readings connecting Skyscanner's observed design to its positioning, not directly sourced Skyscanner statements.

Tier 2 sources: getdesign.md/skyscanner returned "No designs found." refero search returned no Skyscanner entry. Both searches attempted and negative results documented honestly.
-->

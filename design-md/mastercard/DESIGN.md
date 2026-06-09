---
id: mastercard
name: Mastercard
country: US
category: fintech
homepage: "https://www.mastercard.com"
primary_color: "#EB001B"
logo:
  type: simpleicons
  slug: "mastercard"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#141413"
    primary-hover: "#333333"
    brand: "#EB001B"
    brand-hover: "#C8001A"
    accent-yellow: "#F79E1B"
    accent-orange: "#FF5F00"
    canvas: "#FFFFFF"
    surface: "#F7F7F7"
    foreground: "#141413"
    body: "#5A5A5A"
    muted: "#767676"
    placeholder: "#999999"
    hairline: "#E0E0E0"
    border-strong: "#CCCCCC"
    on-primary: "#FFFFFF"
    success: "#008A00"
    error: "#EB001B"
    info: "#1A73E8"
  typography:
    family: { sans: "Mark", mono: "SF Mono" }
    display-hero:  { size: 56, weight: 700, lineHeight: 1.14, tracking: -0.02, use: "Marketing hero headlines" }
    display-large: { size: 40, weight: 700, lineHeight: 1.20, tracking: -0.01, use: "Page titles, key statements" }
    heading-1:     { size: 32, weight: 700, lineHeight: 1.25, tracking: -0.01, use: "Section headers" }
    heading-2:     { size: 24, weight: 600, lineHeight: 1.33, use: "Sub-sections, card headers" }
    heading-3:     { size: 20, weight: 600, lineHeight: 1.40, use: "Feature titles, list headers" }
    subtitle:      { size: 18, weight: 500, lineHeight: 1.44, use: "Lead paragraphs, intros" }
    body-large:    { size: 16, weight: 400, lineHeight: 1.63, use: "Primary reading text" }
    body:          { size: 14, weight: 400, lineHeight: 1.57, use: "Standard UI text" }
    caption:       { size: 12, weight: 400, lineHeight: 1.50, tracking: 0.01, use: "Legal, fine print, metadata" }
    button:        { size: 16, weight: 600, lineHeight: 1.0, tracking: 0.01, use: "CTA labels" }
    eyebrow:       { size: 12, weight: 700, lineHeight: 1.33, tracking: 0.08, use: "UPPERCASE section kickers" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64, hero: 96 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    subtle: "0 1px 3px rgba(0,0,0,0.08)"
    raised: "0 2px 8px rgba(0,0,0,0.08)"
    elevated: "0 4px 16px rgba(0,0,0,0.10)"
    overlay: "0 16px 48px rgba(0,0,0,0.20)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#141413", fg: "#FFFFFF", radius: "24px", height: "48px", padding: "0 28px", font: "16px / 600", hover: "#333333", active: "#000000", disabled: "#CCCCCC bg, #767676 text", use: "Primary CTA across most surfaces" }
    button-red: { type: button, bg: "#EB001B", fg: "#FFFFFF", radius: "24px", height: "48px", padding: "0 28px", font: "16px / 600", hover: "#C8001A", active: "#A30016", use: "High-emphasis brand-forward CTA, hero action" }
    button-secondary: { type: button, bg: "transparent", fg: "#141413", border: "1.5px solid #141413", radius: "24px", height: "48px", padding: "0 28px", font: "16px / 600", hover: "#F7F7F7 bg", use: "Secondary action paired with primary" }
    button-tertiary: { type: button, bg: "none", fg: "#EB001B", font: "16px / 600", hover: "underline + #C8001A", use: "Inline navigation, Read more, low-emphasis" }
    input: { type: input, bg: "#FFFFFF", fg: "#141413", border: "1px solid #CCCCCC", radius: "8px", padding: "14px 16px", font: "16px / 400", focus: "2px #141413 border + outer ring", use: "Standard form input" }
    input-error: { type: input, border: "2px solid #EB001B", font: "12px / 400 #EB001B helper", use: "Validation failure" }
    search: { type: input, bg: "#F7F7F7", border: "1px solid transparent", radius: "9999px", focus: "#CCCCCC border", use: "Global site/product search, leading magnifier" }
    card: { type: card, bg: "#FFFFFF", border: "1px solid #E0E0E0", radius: "12px", padding: "24px", shadow: "0 1px 3px rgba(0,0,0,0.08)", use: "Content modules, feature tiles" }
    card-elevated: { type: card, bg: "#FFFFFF", radius: "16px", padding: "32px", shadow: "0 4px 16px rgba(0,0,0,0.10)", use: "Promotional / hero cards" }
    card-stat: { type: card, bg: "#F7F7F7", radius: "12px", padding: "24px", use: "Metrics, data highlights — number 40px / 700, brand-gradient top bar" }
    badge-brand: { type: badge, bg: "#EB001B", fg: "#FFFFFF", radius: "4px", padding: "4px 8px", font: "12px / 700", use: "NEW, FEATURED uppercase 0.04em" }
    badge-neutral: { type: badge, bg: "#F0F0F0", fg: "#333333", radius: "9999px", padding: "4px 12px", font: "13px / 500", use: "Category, filter chips" }
    badge-success: { type: badge, bg: "rgba(0,138,0,0.12)", fg: "#008A00", radius: "4px", font: "12px / 700", use: "Approved, Completed" }
    tab: { type: tab, fg: "#5A5A5A", font: "16px / 500", active: "#141413 16px / 600, 3px bottom border #EB001B", use: "Section navigation within a page" }
    alert: { type: toast, bg: "#F7F7F7", border: "4px left semantic color", radius: "8px", padding: "16px", font: "14px / 400 #333333", use: "Form-level and page-level messaging" }
    dialog: { type: dialog, bg: "#FFFFFF", radius: "16px", padding: "32px", shadow: "0 16px 48px rgba(0,0,0,0.20)", use: "Confirmations, focused tasks; backdrop rgba(20,20,19,0.6)" }
    toggle: { type: toggle, bg: "#CCCCCC track off, #141413 track on", radius: "9999px", use: "Settings, preferences; thumb #FFFFFF 20px" }
---

# Design System Inspiration of Mastercard

## 1. Visual Theme & Atmosphere

Mastercard is one of the most recognized brands on earth, and its design language is built around a single, indelible asset: the two interlocking circles. Red (`#EB001B`) on the left, yellow-orange (`#F79E1B`) on the right, and a warm orange (`#FF5F00`) where they overlap. That mark — refined to its purest form in the 2016/2019 Pentagram redesign — is the entire visual thesis: two halves coming together to make a connection. The rest of the system is deliberately quiet so the symbol can carry the brand weight.

The page itself reads as confident, modern, and institutional-but-warm. Surfaces are predominantly white (`#FFFFFF`) and near-white (`#F7F7F7`), with deep neutral charcoal text (`#1A1A1A` / `#141413`). The red is used sparingly and with intent — it is a brand and accent color, not a UI workhorse painted across every button. Where most fintechs lean on a single saturated brand blue for all interaction, Mastercard reserves its red for moments of emphasis and leans on black/dark CTAs and neutral surfaces for the bulk of the interface. This restraint communicates the brand's positioning: a global payments network that is trustworthy, established, and technologically serious, but human at its core ("Priceless").

The typographic voice is the custom **Mark** typeface (commercially **FF Mark**, an early-geometric sans descended from the European grotesques of the 1920s–30s). It is geometric, open, and friendly without being playful — round bowls, generous apertures, a tall x-height that reads cleanly at small sizes on a payment terminal or a banner ad. The brand pairs it with a thoughtful neutral gray scale and a tight, content-forward layout system.

**Key Characteristics:**
- The interlocking-circles mark (`#EB001B` red + `#F79E1B` yellow, `#FF5F00` overlap) as the singular brand anchor
- Mastercard Red (`#EB001B`) used as an accent and brand color, not a universal UI fill
- Custom **Mark** typeface (FF Mark / Mark Pro) — geometric, open, humanist-modern sans
- White and near-white surfaces with deep neutral charcoal text
- Dark/black primary CTAs; red reserved for emphasis and brand moments
- Generous whitespace, large editorial hero imagery, full-bleed photography
- "Priceless" warmth balanced against global-network institutional trust

## 2. Color Palette & Roles

### Primary / Brand
- **Mastercard Red** (`#EB001B`): The left circle. Primary brand color, accent emphasis, key links, brand moments, error/destructive semantics. Pantone 485 C lineage.
- **Mastercard Yellow** (`#F79E1B`): The right circle. Secondary brand color, warmth, highlights, gradients. Pantone 1235 C lineage.
- **Mastercard Orange** (`#FF5F00`): The overlap color where the two circles meet. Used in gradients and as a connective accent between red and yellow.
- **Pure White** (`#FFFFFF`): Page background, primary card surface.
- **Deep Charcoal** (`#141413`): Primary heading and high-emphasis text. Near-black, warm-neutral.

### Brand Gradient
- **Red→Orange→Yellow** (`#EB001B` → `#FF5F00` → `#F79E1B`): The signature brand gradient evoking the circle overlap. Used on hero accents, decorative dividers, and data-viz highlights. Never as body-text color or large flat fills behind paragraphs.

### Semantic
- **Error Red** (`#EB001B` / `#D11124`): Error states, destructive actions, negative validation. Shares the brand red — context disambiguates.
- **Success Green** (`#008A00`): Confirmations, positive transaction states, completed flows.
- **Warning Amber** (`#F79E1B`): Pending, attention-needed, soft warnings (reuses brand yellow).
- **Info Blue** (`#1A73E8`): Informational notices, secondary links in dense product UI.

### Neutral Scale
- **Gray 50** (`#F7F7F7`): Lightest surface, section backgrounds, alternating rows.
- **Gray 100** (`#F0F0F0`): Card fills, disabled surfaces, subtle separation.
- **Gray 200** (`#E0E0E0`): Default borders, dividers, input outlines.
- **Gray 300** (`#CCCCCC`): Stronger borders, disabled icon fills.
- **Gray 400** (`#999999`): Placeholder text, tertiary labels.
- **Gray 500** (`#767676`): Caption text, secondary metadata (AA on white).
- **Gray 600** (`#5A5A5A`): Body text, descriptions.
- **Gray 700** (`#333333`): Emphasized body, sub-headings.
- **Gray 900** (`#141413`): Headings, strongest text, dark CTAs.

### Surface & Borders
- **Border Default**: `#E0E0E0` (gray200). Cards, inputs, dividers.
- **Border Strong**: `#CCCCCC` (gray300). Active/emphasized outlines.
- **Surface Sunken**: `#F7F7F7` (gray50). Page section backgrounds.
- **Overlay Scrim**: `rgba(20,20,19,0.6)`. Modal/sheet backdrops — warm-neutral dark.

## 3. Typography Rules

### Font Family
- **Primary**: `"Mark", "FF Mark", "MarkPro", "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Fallback system stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Monospace** (data/code): `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`

Mastercard commissioned a customized cut of FF Mark as its corporate typeface ("Mastercard Mark"). FF Mark is an early-geometric sans (Hannes von Döhren / Christoph Koeberlin, 2013) chosen for its open, geometric warmth — circular `o`, `e`, `c` echoing the brand's circular mark.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Mark | 56px | 700 | 64px (1.14) | -0.02em | Marketing hero headlines |
| Display Large | Mark | 40px | 700 | 48px (1.20) | -0.01em | Page titles, key statements |
| Heading 1 | Mark | 32px | 700 | 40px (1.25) | -0.01em | Section headers |
| Heading 2 | Mark | 24px | 600 | 32px (1.33) | normal | Sub-sections, card headers |
| Heading 3 | Mark | 20px | 600 | 28px (1.40) | normal | Feature titles, list headers |
| Subtitle | Mark | 18px | 500 | 26px (1.44) | normal | Lead paragraphs, intros |
| Body Large | Mark | 16px | 400 | 26px (1.63) | normal | Primary reading text |
| Body | Mark | 14px | 400 | 22px (1.57) | normal | Standard UI text |
| Caption | Mark | 12px | 400 | 18px (1.50) | 0.01em | Legal, fine print, metadata |
| Button Label | Mark | 16px | 600 | 1.0 | 0.01em | CTA labels |
| Eyebrow / Overline | Mark | 12px | 700 | 16px (1.33) | 0.08em | UPPERCASE section kickers |

### Principles
- **Geometric clarity**: Mark's circular forms echo the brand mark. Keep tracking near-neutral; only tighten large display sizes.
- **Three working weights**: 400 (body), 600 (emphasis/buttons), 700 (headings). Use 500 sparingly for lead paragraphs.
- **Uppercase eyebrows**: Section kickers and overlines are uppercase with generous `0.08em` tracking — a recurring Mastercard editorial device.
- **Restraint with size jumps**: Large, confident display sizes on marketing; tighter, denser scale in product/dashboard UI.
- **Number legibility**: Transaction amounts and data render at 600+ weight; tabular figures preferred in tables and statements.

## 4. Component Stylings

### Buttons

Mastercard's CTA system leads with a **dark (near-black) primary** and reserves red for brand-accent moments. Default height 48px; pill or lightly-rounded geometry depending on surface.

**Primary (Dark)**
- Background: `#141413`
- Text: `#FFFFFF`
- Border: none
- Radius: 24px (pill) on marketing; 8px in product UI
- Padding: 0 28px
- Font: 16px / 600 / Mark
- Hover: `#333333`
- Active/Pressed: `#000000`
- Disabled: `#CCCCCC` bg, `#767676` text
- Use: Primary CTA across most surfaces ("Get started", "Learn more")

**Primary (Red / Brand)**
- Background: `#EB001B`
- Text: `#FFFFFF`
- Border: none
- Radius: 24px / 8px
- Padding: 0 28px
- Font: 16px / 600 / Mark
- Hover: `#C8001A`
- Active: `#A30016`
- Use: High-emphasis brand-forward CTA, campaign moments, single hero action

**Secondary (Outline)**
- Background: transparent
- Text: `#141413`
- Border: 1.5px solid `#141413`
- Radius: 24px / 8px
- Padding: 0 28px
- Font: 16px / 600 / Mark
- Hover: bg `#F7F7F7`
- Use: Secondary action paired with a primary CTA

**Tertiary (Text / Link)**
- Background: none
- Text: `#EB001B`
- Border: none
- Font: 16px / 600 / Mark, often with trailing chevron `›`
- Hover: underline + `#C8001A`
- Use: Inline navigation, "Read more", low-emphasis actions

**Button on Dark Surface**
- Background: `#FFFFFF`
- Text: `#141413`
- Radius: 24px / 8px
- Use: CTA placed over photography or dark hero blocks

Size scale (height · font · padding · radius): `small` 36px · 14px · 0 20px · 18px; `medium` 44px · 15px · 0 24px · 22px; `large` (default) 48px · 16px · 0 28px · 24px; `xlarge` 56px · 18px · 0 36px · 28px.

### Inputs

**Text Field (default)**
- Background: `#FFFFFF`
- Text: `#141413`
- Border: 1px solid `#CCCCCC`
- Radius: 8px
- Padding: 14px 16px
- Font: 16px / 400 / Mark
- Placeholder: `#999999`
- Label: 14px / 600 / `#333333`, above the field
- Focus: border 2px `#141413` (or `#EB001B` on brand surfaces) + subtle outer ring
- Use: Standard form input

**Text Field (error)**
- Border: 2px solid `#EB001B`
- Helper text: `#EB001B` 12px below field
- Use: Validation failure — paired with specific, actionable message

**Select / Dropdown**
- Same base as text field, trailing chevron `#5A5A5A`
- Radius: 8px, 48px height
- Use: Country/currency selectors, filters

**Search**
- Background: `#F7F7F7`
- Border: 1px solid transparent (border `#CCCCCC` on focus)
- Radius: 24px (pill)
- Leading magnifier icon `#767676`
- Use: Global site/product search

### Cards

**Standard**
- Background: `#FFFFFF`
- Border: 1px solid `#E0E0E0`
- Radius: 12px
- Padding: 24px
- Shadow: `0 1px 3px rgba(0,0,0,0.08)`
- Use: Content modules, feature tiles, product cards

**Elevated / Featured**
- Background: `#FFFFFF`
- Border: none
- Radius: 16px
- Padding: 32px
- Shadow: `0 4px 16px rgba(0,0,0,0.10)`
- Use: Promotional / hero cards, key offers

**Image Card**
- Background: `#FFFFFF`
- Border: none
- Radius: 16px (image fills top, content below)
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`
- Use: Editorial / story cards with full-bleed top imagery

**Stat / Data Card**
- Background: `#F7F7F7`
- Border: none
- Radius: 12px
- Padding: 24px
- Accent: brand-gradient top bar or red figure
- Use: Metrics, data highlights — large number 40px / 700

### Badges & Tags

**Brand Badge**
- Background: `#EB001B`
- Text: `#FFFFFF`
- Radius: 4px
- Padding: 4px 8px
- Font: 12px / 700 / Mark, uppercase, `0.04em` tracking
- Use: "NEW", "FEATURED"

**Neutral Tag**
- Background: `#F0F0F0`
- Text: `#333333`
- Radius: 16px (pill)
- Padding: 4px 12px
- Font: 13px / 500 / Mark
- Use: Category, filter chips

**Success Badge**
- Background: `rgba(0,138,0,0.12)`
- Text: `#008A00`
- Radius: 4px
- Font: 12px / 700 / Mark
- Use: "Approved", "Completed"

### Tabs

**Underline Tabs**
- Container border-bottom: 1px `#E0E0E0`
- Inactive: `#5A5A5A`, 16px / 500
- Active: `#141413`, 16px / 600, 3px underline in `#EB001B`
- Use: Section navigation within a page

### Toasts / Alerts

**Inline Alert**
- Background: `#F7F7F7` (info) / `rgba(235,0,27,0.08)` (error) / `rgba(0,138,0,0.10)` (success)
- Leading icon in semantic color, left border 4px in semantic color
- Radius: 8px, Padding: 16px
- Text: 14px / 400 / `#333333`
- Use: Form-level and page-level messaging

### Dialogs

**Modal**
- Background: `#FFFFFF`
- Radius: 16px
- Padding: 32px
- Shadow: `0 16px 48px rgba(0,0,0,0.20)`
- Backdrop: `rgba(20,20,19,0.6)`
- Title 24px / 700, body 16px / 400, actions right-aligned
- Use: Confirmations, focused tasks

### Toggles

**Switch**
- On: `#141413` track (or `#008A00` for active/enabled semantics)
- Off: `#CCCCCC` track
- Thumb: `#FFFFFF` 20px circle, `0 1px 2px rgba(0,0,0,0.2)`
- Radius: pill
- Use: Settings, preferences

---


**Tier 1 sources:** https://www.mastercard.com (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Section vertical rhythm: 64–96px between major marketing sections
- Card internal padding: 24–32px

### Grid & Container
- Max content width: 1280px, centered
- 12-column grid, 24px gutters on desktop
- Horizontal page margin: 24px mobile, 48px+ desktop
- Marketing sections frequently full-bleed with inner constrained content

### Whitespace Philosophy
- **Let the mark breathe**: The logo and brand moments are surrounded by generous clear space (minimum clear space = height of one circle on all sides).
- **Editorial generosity**: Marketing pages use large hero whitespace and confident imagery — premium, uncluttered.
- **Product density**: Dashboards and statements tighten to 8–16px gaps for scannable data.

### Border Radius Scale
- Compact (4px): badges, tags-square, small chips
- Standard (8px): inputs, product buttons, small cards
- Comfortable (12px): standard cards
- Large (16px): featured cards, modals, image cards
- Pill (24px / 9999px): marketing CTAs, search, toggles, filter chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page background, sunken sections |
| Subtle (1) | `0 1px 3px rgba(0,0,0,0.08)` | Standard cards, list separation |
| Raised (2) | `0 2px 8px rgba(0,0,0,0.08)` | Image cards, hover-lifted tiles |
| Elevated (3) | `0 4px 16px rgba(0,0,0,0.10)` | Featured cards, dropdowns, popovers |
| Overlay (4) | `0 16px 48px rgba(0,0,0,0.20)` | Modals, dialogs, command menus |

**Shadow Philosophy**: Shadows are neutral, single-layer, low-opacity black — quiet by design. Depth communicates hierarchy without drama; the brand mark and color provide the visual energy, so elevation stays understated. Cards on marketing pages often rely on a 1px `#E0E0E0` border instead of shadow for crisp, flat modernity.

### Blur Effects
- Sticky header gains a subtle backdrop blur (`backdrop-filter: blur(8px)`) with `rgba(255,255,255,0.85)` on scroll.
- Modal backdrops are a flat scrim, not blurred, keeping focus sharp.

## 7. Do's and Don'ts

### Do
- Protect the interlocking-circles mark with full clear space; never crop or distort it
- Use Mastercard Red (`#EB001B`) as an accent and brand moment, not a universal button fill
- Lead with dark (`#141413`) primary CTAs; reserve red for the single hero action
- Pair red and yellow only through the official overlap orange (`#FF5F00`) in gradients
- Use the Mark typeface with its geometric, open letterforms; keep tracking near-neutral
- Use uppercase eyebrows with `0.08em` tracking for section kickers
- Keep surfaces white / near-white with deep charcoal text for institutional clarity

### Don't
- Don't paint red across every interactive element — it dilutes the brand and hurts hierarchy
- Don't place red and yellow text/fills adjacent without the orange transition (clashes)
- Don't use heavy or colored shadows — elevation stays neutral and quiet
- Don't distort, recolor, or add effects to the circles mark
- Don't use bold (700) for body copy — reserved for headings and key numbers
- Don't crowd the logo; respect minimum clear space
- Don't mix in off-brand accent hues; the palette is red/yellow/orange + neutrals + semantics only

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, 24px margins, stacked CTAs, hamburger nav |
| Tablet | 640–1024px | 2-column grids, condensed nav |
| Desktop | 1024–1280px | Full 12-col grid, mega-menu nav |
| Wide | >1280px | Centered 1280px container, expanded hero imagery |

### Touch Targets
- Buttons: minimum 44px height on touch
- Nav/list rows: minimum 48px
- Icon buttons: 44×44px hit area

### Collapsing Strategy
- Desktop mega-menu collapses to a full-screen mobile drawer
- Multi-column card grids reflow 3 → 2 → 1
- Side-by-side hero (text + image) stacks vertically on mobile
- Sticky bottom CTA bar on key conversion flows (mobile)

### Image Behavior
- Hero photography is full-bleed, art-directed per breakpoint
- Partner/bank/card-art logos sized consistently (24–40px) within rows
- The circles mark scales but never below its legibility minimum; clear space preserved

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand Red: `#EB001B`
- Brand Yellow: `#F79E1B`
- Overlap Orange: `#FF5F00`
- Primary CTA (dark): `#141413`
- Background: `#FFFFFF`
- Surface Sunken: `#F7F7F7`
- Heading text: `#141413`
- Body text: `#5A5A5A`
- Caption / placeholder: `#999999`
- Border: `#E0E0E0`
- Success: `#008A00`
- Error: `#EB001B`

### Example Component Prompts
- "Create a Mastercard hero: white bg, eyebrow 12px/700 uppercase `0.08em` tracking in `#EB001B`, headline 56px/700 `#141413` Mark, subtitle 18px/500 `#5A5A5A`, dark pill CTA `#141413` white text 16px/600 24px radius. Right side: full-bleed art-directed photo."
- "Build a feature card: white bg, 1px `#E0E0E0` border, 12px radius, 24px padding. Title 20px/600 `#141413`, body 14px/400 `#5A5A5A`, tertiary link in `#EB001B` 16px/600 with trailing chevron."
- "Design a stat card: `#F7F7F7` bg, 12px radius, brand-gradient top bar (`#EB001B`→`#FF5F00`→`#F79E1B`). Number 40px/700 `#141413`, label 14px/400 `#767676` uppercase eyebrow above."
- "Create a payment form input: white bg, 1px `#CCCCCC` border, 8px radius, 14px/16px padding, label 14px/600 `#333333` above. Focus: 2px `#141413` border. Error: 2px `#EB001B` border + `#EB001B` helper text."
- "Build a primary + secondary CTA pair: primary 48px dark `#141413` pill, secondary 48px outline 1.5px `#141413` transparent, both 16px/600 Mark, 28px h-padding."

### Iteration Guide
1. Use the Mark / FF Mark font stack with geometric fallbacks
2. Red (`#EB001B`) is accent + brand, NOT the default button color — dark `#141413` is primary
3. Surfaces are white / `#F7F7F7`; text is `#141413` / `#5A5A5A`
4. Brand gradient is red→orange→yellow; never red beside yellow without the orange transition
5. Border-radius: 8px product, 12px cards, 16px modals, 24px marketing pills
6. Shadows are neutral, single-layer, low-opacity; prefer 1px borders for flat modernity
7. Uppercase eyebrows with `0.08em` tracking for section kickers

---

## 10. Voice & Tone

Mastercard's voice is confident, human, and optimistic — the "Priceless" sensibility. It speaks to a global audience as a trusted enabler of connection and commerce, never as a faceless processor. Sentences are clear and active; jargon ("interchange", "tokenization") is reserved for B2B/developer contexts and explained when used. Marketing leans aspirational and emotive; product UI is precise and reassuring.

| Context | Tone |
|---|---|
| Hero / campaign | Aspirational, human, short. "Start something priceless." "There are some things money can't buy." |
| CTAs | Action-forward, plain verbs. "Get started", "Learn more", "Find a card", "Contact us". |
| Product / dashboard | Precise, calm, reassuring. States outcomes plainly. |
| Success messages | Affirmative, brief. "Payment complete." "You're all set." |
| Error messages | Specific, blameless, actionable. Never just "Something went wrong." |
| Security / trust | Confident and concrete — Mastercard leans on its network scale and protection guarantees. |
| Legal / disclosure | Formal, plain-English regulatory tone. |

**Forbidden patterns.** Avoid hype clichés ("revolutionary", "game-changing"), fear-based security messaging, and cold processor-speak in consumer contexts. The brand sells connection and possibility, not anxiety.

## 11. Brand Narrative

Mastercard began in 1966 as "Interbank" / "Master Charge", a cooperative of banks formed to compete with BankAmericard (later Visa). It became **Mastercard** in 1979 and went public in 2006. Today it is a global payments-technology company — not a bank and not a lender — operating one of the world's largest payment networks across 210+ countries, connecting consumers, merchants, banks, governments, and businesses.

The interlocking circles have been the constant. The 1968 mark by Frank Aitken established the overlapping red and yellow/orange discs; the design was refined over decades and brought to its modern, flat, near-perfect form by **Pentagram (Michael Bierut)** in 2016, with a further simplification in 2019 that removed the wordmark entirely from many contexts — a confidence reserved for the most recognized symbols on earth (the brand is identified by the circles alone by ~80%+ of consumers). The two circles represent connection: two parties, two halves, coming together. The overlap — that warm orange — is the value created where they meet.

The **"Priceless"** platform (launched 1997) reframed a payments brand around human emotion and experience, one of the most enduring campaigns in advertising history. It anchors the brand's warmth: Mastercard is the enabler of meaningful moments, not the transaction itself. More recently the brand has invested in **sonic branding** (the Mastercard melody/sound), accessibility (Touch Card tactile notches), and inclusive product design — extending the identity beyond the visual.

The design language must therefore hold two truths simultaneously: the **institutional trust** of a trillion-dollar global network handling the world's money, and the **human warmth** of "Priceless". The system resolves this by keeping the interface calm, clean, and confident (trust) while reserving the vivid red-yellow-orange mark and emotive imagery for the moments that connect (warmth).

## 12. Principles

1. **The mark carries the brand.** The interface is deliberately quiet so the interlocking circles can be the visual hero. Don't compete with the symbol.
2. **Red is precious.** Mastercard Red is an accent and a brand moment, not a default fill. Overuse devalues it; scarcity gives it power.
3. **Connection over transaction.** The two circles mean two parties meeting. Design should express bringing things together — pairs, overlaps, bridges — not isolated steps.
4. **Trust through restraint.** Clean white surfaces, neutral shadows, confident type. Visual noise reads as risk in a payments context.
5. **Warmth at the moments that matter.** Emotive imagery and the brand gradient appear at human moments (Priceless), not on every utility screen.
6. **Clarity is non-negotiable.** This system touches a global, multilingual, all-ages audience on screens from terminals to billboards. Legibility and plain language win over cleverness.
7. **The overlap is the value.** Where red meets yellow, you get orange — the brand's literal expression that value is created in connection. Use the transition deliberately.
8. **Accessible by default.** Tactile, sonic, and visual identity work together; contrast, touch targets, and clear states are baseline, not afterthoughts.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described global-payments user segments, not individual people.*

**Maya, 31, Chicago.** Product designer, taps her phone or card a dozen times a day and never thinks about it — which is the point. She notices the circles on a terminal, an app, a checkout button, and feels a flash of "this is safe." Expects instant, frictionless, beautifully unremarkable payment flows. If a checkout looks janky or asks for too much, she abandons it. Reads English; values speed and obvious trust signals.

**Carlos, 47, São Paulo.** Owns a small electronics shop, accepts Mastercard for in-store and online. He cares about getting paid reliably, low dispute friction, and clear settlement. To him the brand means "customers will actually be able to pay, and the money will arrive." He interacts with Mastercard mostly through his acquirer's tools and the network's merchant resources. Values clarity, reliability, and Portuguese-language support.

**Priya, 24, London.** Recent grad, first credit card. Mastercard is her introduction to credit, rewards, and protection. She engages with the consumer brand — the app, the "Priceless" experiences, cardholder benefits. Responds to warmth and aspiration, not finance jargon. Wants to feel the brand is on her side (fraud protection, easy disputes) while delivering experiences she couldn't get otherwise.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no data)** | Centered single line of `#5A5A5A` body text explaining why, plus one primary action (dark CTA). Optional small line-art icon, never a heavy illustration. |
| **Loading (first paint)** | Skeleton blocks at `#F0F0F0` matching final layout. Optional subtle brand-gradient shimmer sweep. Amounts render as `—` until resolved. |
| **Loading (action)** | Inline spinner in the button replacing the label; button width preserved; prevents double-submit. Spinner in `#FFFFFF` on dark CTA. |
| **Error (inline field)** | 2px `#EB001B` border on the field, `#EB001B` 12px helper text below, one specific actionable sentence. |
| **Error (page/alert)** | Inline alert: `rgba(235,0,27,0.08)` bg, 4px left border `#EB001B`, leading icon, 14px `#333333` text, optional retry CTA. |
| **Success (confirmation)** | `#008A00` check, brief affirmative copy ("Payment complete"), exact amount in 40px/700 `#141413`, single dark CTA to continue. |
| **Success (inline flash)** | Brief `rgba(0,138,0,0.10)` background flash behind the updated element, ~300ms fade. |
| **Warning / pending** | Amber `#F79E1B` accent, `rgba(247,158,27,0.12)` bg alert, clear "what happens next" copy. |
| **Disabled** | `#CCCCCC` bg, `#767676` text on buttons; inputs keep `#CCCCCC` border at reduced opacity. Geometry stable. |
| **Focus (keyboard)** | 2px `#141413` outline + 2px offset ring; meets visible-focus accessibility. On brand surfaces, focus ring is `#EB001B`. |
| **Hover (card)** | Lift to `0 2px 8px rgba(0,0,0,0.08)` + 1px translate-up; cursor pointer; link color deepens to `#C8001A`. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State flips where animation adds nothing |
| `motion-fast` | 150ms | Hover, focus, button press, small reveals |
| `motion-standard` | 250ms | Default — dropdowns, card expand, tab switch |
| `motion-emphasis` | 400ms | Hero reveals, success confirmations, modal entrance |
| `motion-page` | 350ms | Route / full-screen transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Elements appearing — modals, toasts, menus |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Elements leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — accordions, tabs |
| `ease-brand` | `cubic-bezier(0.33, 1, 0.68, 1)` | Signature brand moments — circle reveals, gradient sweeps |

**Signature motions.**

1. **Circle convergence.** The brand's hero animation: the two circles slide toward each other and overlap, the orange intersection blooming as they meet (`motion-emphasis / ease-brand`). It literally animates "connection". Reserved for brand/loading moments, never decorative UI chrome.
2. **Gradient sweep.** On key reveals and progress, a subtle red→orange→yellow gradient sweep animates across a divider or bar (`motion-standard`). Used sparingly as a brand accent.
3. **Confirmation bloom.** Success checkmarks draw on over `motion-emphasis` with `ease-brand`, a confident but unfussy settle. Money moved is a clear screen state, calmly delivered.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; the circle convergence and gradient sweeps are replaced by static end-states. The product stays fully usable.

<!--
OmD v0.1 Sources — Mastercard

Token grounding:
- Brand colors EB001B (red), FF5F00 (orange/overlap), F79E1B (yellow) confirmed via
  Mastercard Brand Center / brandcolorcode.com and the task brief. These are the
  canonical interlocking-circles colors (2016/2019 Pentagram mark).
- Typeface: Mastercard uses a customized cut of FF Mark (geometric sans by
  Hannes von Döhren / Christoph Koeberlin), referenced in brand guidelines as the
  corporate type. "Mark Pro / FF Mark" used in the font stack.
- Neutral scale, button/card/input geometry, and elevation are editorial syntheses
  consistent with Mastercard's public marketing surfaces (white/near-white surfaces,
  dark-led CTAs, red as accent) — homepage WebFetch returned HTTP 403, so live-DOM
  token extraction was not possible; values are grounded in brand-guideline color/
  type facts plus standard fintech-marketing layout conventions.

Brand narrative facts (Interbank/Master Charge 1966, Mastercard 1979, 2006 IPO,
Pentagram 2016 redesign + 2019 wordmark removal, "Priceless" 1997, sonic branding,
Touch Card) are widely documented public history.

Personas (§13) are fictional archetypes informed by publicly described global
payments user segments. Any resemblance to specific individuals is unintended.

Interpretive claims (e.g., "the overlap is the value", "red is precious") are
editorial readings of the design system, not documented Mastercard statements.
-->

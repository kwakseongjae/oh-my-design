---
id: ramp
name: Ramp
country: US
category: fintech
homepage: "https://ramp.com"
primary_color: "#E5FE54"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ramp.com&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#e5fe54"
    lime-hover: "#d4ed3f"
    lime-100: "#f4fcc9"
    lime-50: "#fbfee8"
    ink: "#1c1b17"
    ink-700: "#3d3c37"
    ink-600: "#56554f"
    canvas: "#f7f7f5"
    surface: "#ffffff"
    grey-500: "#74726b"
    grey-400: "#9c9a92"
    grey-300: "#c9c7bf"
    grey-200: "#e3e1da"
    grey-100: "#efeee9"
    success: "#1a7f4b"
    error: "#d93f3f"
    warning: "#e08a1e"
    info: "#2f6fe0"
    on-primary: "#1c1b17"
  typography:
    family: { sans: "Lausanne", serif: "Burgess", mono: "Lausanne Mono" }
    display-hero:   { size: 72, weight: 400, lineHeight: 1.06, tracking: -0.02, use: "Marketing hero headlines (Burgess serif)" }
    display-lg:     { size: 52, weight: 400, lineHeight: 1.12, tracking: -0.02, use: "Section openers, editorial (serif)" }
    heading-1:      { size: 40, weight: 500, lineHeight: 1.15, tracking: -0.015, use: "Page titles in product" }
    heading-2:      { size: 30, weight: 500, lineHeight: 1.27, tracking: -0.01, use: "Section headers" }
    heading-3:      { size: 22, weight: 500, lineHeight: 1.36, tracking: -0.01, use: "Card titles, sub-sections" }
    subtitle:       { size: 18, weight: 500, lineHeight: 1.44, use: "Navigation, list headers" }
    body-lg:        { size: 17, weight: 400, lineHeight: 1.59, use: "Marketing body, descriptions" }
    body:           { size: 15, weight: 400, lineHeight: 1.53, use: "Standard UI reading text" }
    body-sm:        { size: 13, weight: 400, lineHeight: 1.46, use: "Secondary info, table cells" }
    caption:        { size: 12, weight: 400, lineHeight: 1.33, tracking: 0.01, use: "Timestamps, fine print, labels" }
    overline:       { size: 11, weight: 600, lineHeight: 1.27, tracking: 0.08, use: "Eyebrow labels, uppercase section tags" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 6, md: 8, lg: 16, full: 9999 }
  shadow:
    ambient: "rgba(28,27,23,0.05) 0px 1px 2px"
    standard: "rgba(28,27,23,0.18) 0px 8px 24px"
    elevated: "rgba(28,27,23,0.18) 0px 12px 40px"
  components:
    button-primary: { type: button, bg: "#e5fe54", fg: "#1c1b17", radius: 8, padding: "0 20px", font: "15px / 500", use: "Primary CTA — Get started, Get a demo (44px)" }
    button-ink: { type: button, bg: "#1c1b17", fg: "#ffffff", radius: 8, padding: "0 20px", font: "15px / 500", use: "Strong action on light surfaces, default product CTA" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#1c1b17", radius: 8, padding: "0 20px", font: "15px / 500", use: "Secondary action, 1px #c9c7bf border" }
    button-ghost: { type: button, fg: "#3d3c37", radius: 8, padding: "0 12px", font: "15px / 500", use: "Low-emphasis inline (Cancel, Back)" }
    button-danger: { type: button, bg: "#d93f3f", fg: "#ffffff", radius: 8, padding: "0 20px", font: "15px / 500", use: "Destructive confirmation" }
    input: { type: input, bg: "#ffffff", fg: "#1c1b17", radius: 8, padding: "11px 14px", font: "15px / 400", use: "Standard form input, 1px #c9c7bf border, lime focus ring" }
    input-filled: { type: input, bg: "#f7f7f5", fg: "#1c1b17", radius: 8, padding: "11px 14px", font: "15px / 400", use: "Dense forms, search bars" }
    card: { type: card, bg: "#ffffff", radius: 12, padding: "24px", use: "Workhorse surface — metrics, lists, panels, 1px #e3e1da border" }
    card-savings: { type: card, bg: "#f4fcc9", radius: 12, padding: "24px", use: "Savings callout, lime-tinted, 1px #e5fe54 border" }
    card-dark: { type: card, bg: "#1c1b17", fg: "#ffffff", radius: 16, padding: "32px", use: "Marketing feature card, lime accents pop on black" }
    badge-lime: { type: badge, bg: "#e5fe54", fg: "#1c1b17", radius: 6, padding: "3px 8px", font: "12px / 600", use: "NEW / AI brand-emphasis tags" }
    badge-success: { type: badge, fg: "#1a7f4b", radius: 6, padding: "3px 8px", font: "12px / 600", use: "Approved, reconciled, savings confirmed" }
    badge-neutral: { type: badge, bg: "#efeee9", fg: "#56554f", radius: 6, padding: "3px 8px", font: "12px / 600", use: "Categories, metadata, default status" }
    tab: { type: tab, fg: "#74726b", font: "15px / 500", use: "In-page section switching", active: "#1c1b17 text, 2px bottom border #1c1b17" }
    segmented: { type: tab, bg: "#efeee9", radius: 8, padding: "6px 14px", font: "14px / 500", use: "View toggles (Month / Quarter / Year)", active: "#ffffff bg, #1c1b17 text" }
    toast: { type: toast, bg: "#1c1b17", fg: "#ffffff", radius: 10, padding: "12px 16px", font: "14px / 500", use: "Transient confirmation, lime accent" }
    dialog: { type: dialog, bg: "#ffffff", radius: 16, padding: "28px", use: "Confirmations, create-card flow, approval prompts" }
    toggle: { type: toggle, bg: "#1c1b17", radius: 9999, use: "Boolean settings, white thumb, off #c9c7bf" }
  components_harvested: true
---

# Design System Inspiration of Ramp

## 1. Visual Theme & Atmosphere

Ramp is the corporate-card and spend-management platform that made expense software feel like a premium productivity tool rather than an accounting chore. The brand's entire visual thesis is built on one audacious contrast: a near-black ink (`#1C1B17`) set against an electric lime-yellow (`#E5FE54`) so saturated it almost vibrates. This is not the cautious navy-and-grey of legacy fintech. It's confident, almost aggressive — a color that says "we move fast and we save you money," paired with typography that reads like an editorial business magazine.

The page opens on a clean off-white canvas (`#F7F7F5`) or pure black hero sections, with the lime accent deployed sparingly and with intent — never as decoration, always as a signal of action or savings. Ramp's design language borrows from Swiss editorial design and modern brand studios: generous whitespace, tight type, oversized numerals announcing dollar amounts saved, and a serif/sans pairing that gives the brand a literary, considered voice unusual in the SaaS-fintech space.

The custom typeface stack is the brand's quiet engine. **Lausanne** (a clean, neo-grotesque sans by Nizar Kazan / Weltkern) carries the UI, navigation, and body — precise, neutral, Helvetica-adjacent but warmer. **Burgess** (a contemporary serif) appears in display headlines and editorial moments, giving Ramp a high-end, almost magazine-cover gravitas. The pairing communicates the brand's positioning: finance software that is both rigorous (sans) and intelligent (serif).

**Key Characteristics:**
- Lime-yellow (`#E5FE54`) as the signature accent — high-voltage, used only for CTAs and savings signals
- Near-black ink (`#1C1B17`) as the dominant brand color — warm, slightly green-tinted black
- Lausanne (sans) for UI/body + Burgess (serif) for editorial display headlines
- Off-white canvas (`#F7F7F5`) with high-contrast black hero sections
- Oversized numerals announcing dollar savings — money as the hero element
- Editorial Swiss layout: generous whitespace, tight tracking, asymmetric grids
- Restrained color — black, off-white, lime, and a few muted neutrals; no rainbow palettes

## 2. Color Palette & Roles

### Primary
- **Ramp Lime** (`#E5FE54`): The signature accent. Primary CTAs, savings highlights, active selection, hover fills, brand moments. Electric yellow-green — the single most recognizable Ramp asset. Used sparingly and only where it signals action or value.
- **Ramp Ink** (`#1C1B17`): The dominant brand color. Primary text, black hero backgrounds, dark buttons, footer. A warm near-black with a subtle green undertone (RGB 28, 27, 23) — never pure `#000000`.
- **Off-White Canvas** (`#F7F7F5`): Page background, light surfaces. A soft, warm paper-white that reduces glare and reads premium against the black sections.
- **Pure White** (`#FFFFFF`): Card surfaces, elevated panels, input fills on light backgrounds.

### Lime Scale
- **Lime 500** (`#E5FE54`): Core brand lime — CTA fills, key accents.
- **Lime 600** (`#D4ED3F`): Hover/pressed state for lime CTAs — slightly deeper.
- **Lime 100** (`#F4FCC9`): Soft lime-tinted background for highlight cards, savings callouts.
- **Lime 50** (`#FBFEE8`): Faintest lime wash for subtle section backgrounds.

### Neutral Scale
- **Ink 900** (`#1C1B17`): Primary text, strongest headings.
- **Ink 700** (`#3D3C37`): Emphasized body text, sub-headings.
- **Ink 600** (`#56554F`): Standard body text on light surfaces.
- **Grey 500** (`#74726B`): Secondary text, captions, metadata.
- **Grey 400** (`#9C9A92`): Placeholder text, disabled labels.
- **Grey 300** (`#C9C7BF`): Default borders, dividers.
- **Grey 200** (`#E3E1DA`): Subtle dividers, input backgrounds, hover surfaces.
- **Grey 100** (`#EFEEE9`): Section background tint, disabled surfaces.
- **Off-White** (`#F7F7F5`): Page canvas.

### Semantic
- **Success Green** (`#1A7F4B`): Positive financial indicators, savings confirmed, approved states. Deliberately distinct from the brand lime so it reads as "status" not "brand."
- **Error Red** (`#D93F3F`): Errors, declined transactions, destructive actions, overspend warnings.
- **Warning Amber** (`#E08A1E`): Pending approvals, attention-needed, budget threshold alerts.
- **Info Blue** (`#2F6FE0`): Informational accents, links in dense documentation contexts.

### Surface & Borders
- **Border Default**: `#E3E1DA` (grey200). Standard card borders, dividers.
- **Border Strong**: `#C9C7BF` (grey300). Emphasized borders, active input outlines.
- **Border on Dark**: `rgba(255,255,255,0.12)`. Dividers on black hero/footer sections.
- **Overlay Scrim**: `rgba(28,27,23,0.6)`. Modal backdrop — warm ink-tinted dark.

## 3. Typography Rules

### Font Family
- **Display/Headlines (serif)**: `"Burgess", "Times New Roman", Georgia, serif` — editorial display moments, hero headlines, large pull-quotes.
- **UI/Body (sans)**: `"Lausanne", "Helvetica Neue", Helvetica, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` — navigation, body, buttons, tables, the entire product UI.
- **Monospace/Numeric**: `"Lausanne Mono", "SF Mono", SFMono-Regular, Menlo, Consolas, monospace` — financial figures in dense tables, ledger views (tabular alignment).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Burgess (serif) | 72px | 400 | 76px (1.06) | -0.02em | Marketing hero headlines |
| Display Large | Burgess (serif) | 52px | 400 | 58px (1.12) | -0.02em | Section openers, editorial |
| Heading 1 | Lausanne | 40px | 500 | 46px (1.15) | -0.015em | Page titles in product |
| Heading 2 | Lausanne | 30px | 500 | 38px (1.27) | -0.01em | Section headers |
| Heading 3 | Lausanne | 22px | 500 | 30px (1.36) | -0.01em | Card titles, sub-sections |
| Subtitle | Lausanne | 18px | 500 | 26px (1.44) | normal | Navigation, list headers |
| Body Large | Lausanne | 17px | 400 | 27px (1.59) | normal | Marketing body, descriptions |
| Body | Lausanne | 15px | 400 | 23px (1.53) | normal | Standard UI reading text |
| Body Small | Lausanne | 13px | 400 | 19px (1.46) | normal | Secondary info, table cells |
| Caption | Lausanne | 12px | 400 | 16px (1.33) | 0.01em | Timestamps, fine print, labels |
| Overline | Lausanne | 11px | 600 | 14px (1.27) | 0.08em (UPPERCASE) | Eyebrow labels, section tags |
| Number Display | Lausanne | 56px+ | 500 | tight (1.0) | -0.02em | Dollar savings — tabular nums |

### Principles
- **Serif for story, sans for system**: Burgess serif headlines carry the brand narrative on marketing surfaces; Lausanne sans carries the entire functional product. Never use serif inside dense product tables.
- **Tight tracking on display**: Large headlines use negative letter-spacing (-0.015 to -0.02em) for a crisp editorial feel. Body text stays at normal tracking.
- **Numbers as heroes**: Dollar amounts (savings, balances) use oversized Lausanne 500 with tabular numerals, right-aligned in tables, often the largest element on a marketing screen.
- **Uppercase overlines**: Eyebrow/section labels use 11px uppercase Lausanne with 0.08em tracking — a recurring editorial signature.
- **Restraint in weight**: Lausanne ships many weights; the UI uses 400 (body), 500 (headings/emphasis), and 600 (overlines, strong labels). Bold 700 is rare.

## 4. Component Stylings

### Buttons

Ramp buttons are flat, confident, and tightly spaced. Radius is moderate (8px) — neither pill nor sharp. The lime CTA is the brand's hero element and uses ink-colored text for maximum contrast on the bright fill.

**Primary (Lime)**
- Background: `#E5FE54`
- Text: `#1C1B17`
- Border: none
- Radius: 8px
- Padding: 0 20px
- Font: 15px / 500 / Lausanne
- Height: 44px
- Hover: background `#D4ED3F`
- Pressed: background `#C7DF34`
- Disabled: background `#EFEEE9`, text `#9C9A92`
- Use: Primary CTA — "Get started", "Get a demo". The single most important action on a screen.

**Primary (Ink)**
- Background: `#1C1B17`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 0 20px
- Font: 15px / 500 / Lausanne
- Height: 44px
- Hover: background `#3D3C37`
- Use: Strong action on light surfaces where lime would be too loud; default product CTA.

**Secondary (Outline)**
- Background: transparent
- Text: `#1C1B17`
- Border: 1px solid `#C9C7BF`
- Radius: 8px
- Padding: 0 20px
- Font: 15px / 500 / Lausanne
- Height: 44px
- Hover: background `#EFEEE9`, border `#1C1B17`
- Use: Secondary action paired with a Primary button.

**Tertiary (Ghost)**
- Background: transparent
- Text: `#3D3C37`
- Border: none
- Radius: 8px
- Padding: 0 12px
- Font: 15px / 500 / Lausanne
- Hover: background `#EFEEE9`
- Use: Low-emphasis inline action (Cancel, Back, table-row actions).

**On-Dark (Lime on Black)**
- Background: `#E5FE54`
- Text: `#1C1B17`
- Radius: 8px
- Font: 15px / 500 / Lausanne
- Use: CTA inside black hero/footer sections — the brand's signature hero button.

**Danger**
- Background: `#D93F3F`
- Text: `#FFFFFF`
- Radius: 8px
- Padding: 0 20px
- Font: 15px / 500 / Lausanne
- Use: Destructive confirmation (delete card, revoke access).

Size scale (height · font · radius): `small` 32px · 13px / 500 · 6px; `medium` (default) 44px · 15px / 500 · 8px; `large` 52px · 17px / 500 · 10px.

### Inputs

**Default**
- Background: `#FFFFFF`
- Text: `#1C1B17`
- Border: 1px solid `#C9C7BF`
- Radius: 8px
- Padding: 11px 14px
- Font: 15px / 400 / Lausanne
- Placeholder: `#9C9A92`
- Focus: border `#1C1B17`, ring `0 0 0 3px rgba(229,254,84,0.4)` (lime focus glow)
- Use: Standard form input — most-used variant.

**Filled (subtle)**
- Background: `#F7F7F5`
- Text: `#1C1B17`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 11px 14px
- Font: 15px / 400 / Lausanne
- Focus: background `#FFFFFF`, border `#1C1B17`
- Use: Dense forms, search bars, settings panels.

**Error**
- Background: `#FFFFFF`
- Text: `#1C1B17`
- Border: 1px solid `#D93F3F`
- Radius: 8px
- Padding: 11px 14px
- Font: 15px / 400 / Lausanne
- Use: Validation failure — paired with inline help text in `#D93F3F` 13px.

### Cards

**Standard**
- Background: `#FFFFFF`
- Border: 1px solid `#E3E1DA`
- Radius: 12px
- Padding: 24px
- Shadow: `0 1px 2px rgba(28,27,23,0.05)`
- Use: The workhorse surface — metrics, lists, settings panels.

**Savings Highlight**
- Background: `#F4FCC9` (lime100)
- Border: 1px solid `#E5FE54`
- Radius: 12px
- Padding: 24px
- Shadow: none
- Use: Savings callouts, "you saved $X" moments — the lime-tinted hero card.

**Dark Feature**
- Background: `#1C1B17`
- Text: `#FFFFFF`
- Border: none
- Radius: 16px
- Padding: 32px
- Shadow: `0 8px 24px rgba(28,27,23,0.18)`
- Use: Marketing feature cards, premium product highlights — lime accents pop on black.

**Compact (list item)**
- Background: `#FFFFFF`
- Border: 1px solid `#E3E1DA`
- Radius: 8px
- Padding: 14px 16px
- Shadow: none
- Use: Transaction rows, dense list items.

### Badges

**Lime (Brand)**
- Background: `#E5FE54`
- Text: `#1C1B17`
- Radius: 6px
- Padding: 3px 8px
- Font: 12px / 600 / Lausanne
- Use: "NEW", "AI", brand-emphasis tags.

**Success**
- Background: `rgba(26,127,75,0.12)`
- Text: `#1A7F4B`
- Radius: 6px
- Padding: 3px 8px
- Font: 12px / 600 / Lausanne
- Use: Approved, reconciled, savings confirmed.

**Warning**
- Background: `rgba(224,138,30,0.14)`
- Text: `#B36E14`
- Radius: 6px
- Padding: 3px 8px
- Font: 12px / 600 / Lausanne
- Use: Pending approval, threshold alert.

**Error**
- Background: `rgba(217,63,63,0.12)`
- Text: `#C23434`
- Radius: 6px
- Padding: 3px 8px
- Font: 12px / 600 / Lausanne
- Use: Declined, over budget, flagged.

**Neutral**
- Background: `#EFEEE9`
- Text: `#56554F`
- Radius: 6px
- Padding: 3px 8px
- Font: 12px / 600 / Lausanne
- Use: Categories, metadata, default status.

### Tabs

**Underline (default)**
- Container: bottom border 1px `#E3E1DA`
- Inactive: text `#74726B`, 15px / 500
- Active: text `#1C1B17`, 2px bottom border `#1C1B17`
- Use: In-page section switching (Transactions / Cards / Reports).

**Segmented**
- Background: `#EFEEE9`
- Radius: 8px
- Padding: 4px (track) / 6px 14px (item)
- Inactive: text `#74726B`
- Active: background `#FFFFFF`, text `#1C1B17`, shadow `0 1px 2px rgba(28,27,23,0.08)`
- Font: 14px / 500 / Lausanne
- Use: View toggles (Month / Quarter / Year).

### Toasts

**Default**
- Background: `#1C1B17`
- Text: `#FFFFFF`
- Radius: 10px
- Padding: 12px 16px
- Shadow: `0 8px 24px rgba(28,27,23,0.2)`
- Font: 14px / 500 / Lausanne
- Accent: lime `#E5FE54` icon or left-bar for success
- Use: Transient confirmation ("Card created", "Receipt matched").

### Dialogs

**Centered Modal**
- Background: `#FFFFFF`
- Radius: 16px
- Padding: 28px
- Shadow: `0 12px 40px rgba(28,27,23,0.18)`
- Backdrop: `rgba(28,27,23,0.6)`
- Use: Confirmations, create-card flow, approval prompts.

### Toggles

**Default**
- Track: `#1C1B17` (on) / `#C9C7BF` (off)
- Thumb: `#FFFFFF` 18px circle, shadow `0 1px 2px rgba(28,27,23,0.2)`
- Radius: 9999px
- Note: "on" uses ink-black, not lime — lime is reserved for primary actions, not stateful settings.
- Use: Boolean settings (auto-approve, notifications).


**Tier 1 sources:** https://ramp.com (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- Section vertical rhythm: 96-128px between marketing sections (generous editorial breathing room)
- Card internal padding: 24px standard, 32px for feature cards

### Grid & Container
- Max content width: 1200px (marketing), 1440px (product app shell)
- Marketing: 12-column grid, 24px gutters, asymmetric editorial layouts encouraged
- Product: persistent left sidebar (~240px) + fluid content area
- Horizontal page padding: 24px mobile, 64px+ desktop

### Whitespace Philosophy
- **Editorial generosity**: Marketing pages use magazine-level whitespace — headlines breathe, sections are widely separated. The opposite of dense legacy fintech.
- **Product density when earned**: Transaction tables and ledger views are dense and tabular; the app trusts power users with information.
- **Numbers get room**: Large dollar figures are surrounded by deliberate negative space to land with impact.

### Border Radius Scale
- Compact (6px): Badges, small chips, inline tags
- Standard (8px): Buttons, inputs, compact cards, segmented controls
- Comfortable (12px): Standard cards, list containers
- Large (16px): Modals, dark feature cards
- Pill (9999px): Toggles, filter chips, avatar groups

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, 1px border | Page background, bordered cards, inputs |
| Subtle (Level 1) | `0 1px 2px rgba(28,27,23,0.05)` | Standard cards, slight lift |
| Standard (Level 2) | `0 4px 12px rgba(28,27,23,0.08)` | Dropdowns, popovers, hover-lifted cards |
| Elevated (Level 3) | `0 8px 24px rgba(28,27,23,0.18)` | Dark feature cards, floating panels, toasts |
| Modal (Level 4) | `0 12px 40px rgba(28,27,23,0.18)` | Dialogs, modals, command palette |

**Shadow Philosophy**: Ramp shadows are warm (ink-tinted, never pure black) and restrained. On light surfaces, the brand prefers a crisp 1px border over a soft shadow — flatness reads as precision and modernity. Depth is reserved for genuinely floating elements. The drama in Ramp's design comes from color contrast (lime on black), not from elevation stacks.

### Blur Effects
- Sticky nav applies subtle backdrop blur (`backdrop-filter: blur(12px)`) with semi-opaque off-white on scroll.
- Command palette / search overlays use a light backdrop blur over the scrim.

## 7. Do's and Don'ts

### Do
- Use lime `#E5FE54` only for primary CTAs and savings/value signals — keep it rare and intentional
- Pair lime fills with ink `#1C1B17` text, never white text (contrast + brand consistency)
- Use ink `#1C1B17` (warm near-black), never pure `#000000`, for text and dark surfaces
- Pair Burgess serif headlines with Lausanne sans body for editorial gravitas
- Right-align and use tabular numerals for all financial figures
- Prefer 1px borders over shadows on light cards
- Use uppercase Lausanne overlines (11px, 0.08em tracking) for section eyebrows

### Don't
- Don't scatter lime across the UI — it loses its signal value if overused
- Don't use lime as a background for long text (poor legibility) or for stateful toggles
- Don't use white text on lime fills — always ink text
- Don't use Burgess serif inside dense product tables — Lausanne only
- Don't use pure black `#000000` — the brand black is warm `#1C1B17`
- Don't add heavy multi-layer shadows — Ramp's depth is flat and border-driven
- Don't use the brand lime as a semantic "success" color — success is `#1A7F4B`

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked sections, 24px padding, hamburger nav |
| Tablet | 640-1024px | 2-column grids, condensed sidebar, larger touch targets |
| Desktop | 1024-1440px | Full 12-col grid, persistent sidebar, editorial layouts |
| Wide | >1440px | Centered 1200-1440px max-width, expanded whitespace |

### Touch Targets
- Buttons: minimum 44px height on touch devices
- Table rows: minimum 48px row height for tap-friendly transaction lists
- Nav/menu items: minimum 44px tap height

### Collapsing Strategy
- Product sidebar collapses to icon-rail then off-canvas drawer on tablet/mobile
- Multi-column dashboards stack to single column below 640px
- Dense data tables become card-stacked rows on mobile (label-value pairs)
- Sticky bottom CTA bar on mobile marketing pages

### Image Behavior
- Card product shots and screenshots: full-width, maintain aspect ratio, rounded 12-16px corners
- Customer logos: greyscale `#74726B`, uniform height (~28px), in a logo strip
- Hero imagery often replaced by oversized typographic numerals rather than photos

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Ramp Lime (`#E5FE54`) with ink text (`#1C1B17`)
- CTA Hover: Lime 600 (`#D4ED3F`)
- Dark CTA / strong action: Ink (`#1C1B17`), white text
- Page background: Off-White (`#F7F7F5`)
- Card surface: White (`#FFFFFF`)
- Heading text: Ink (`#1C1B17`)
- Body text: Ink 600 (`#56554F`)
- Caption/secondary: Grey 500 (`#74726B`)
- Placeholder: Grey 400 (`#9C9A92`)
- Border: Grey 200 (`#E3E1DA`)
- Success: Green (`#1A7F4B`)
- Error: Red (`#D93F3F`)
- Warning: Amber (`#E08A1E`)

### Example Component Prompts
- "Create a savings card: lime100 (`#F4FCC9`) bg, 1px lime (`#E5FE54`) border, 12px radius, 24px padding. Overline 'TOTAL SAVED' 11px uppercase Lausanne 600, 0.08em tracking, #56554F. Amount '$1.2M' 56px Lausanne 500, #1C1B17, tabular numerals. No shadow."
- "Build a primary CTA: lime `#E5FE54` bg, ink `#1C1B17` text, 15px Lausanne 500, 44px height, 8px radius, 0 20px padding. Hover: bg `#D4ED3F`."
- "Design a transaction row: white bg, 1px `#E3E1DA` border, 8px radius, 48px min-height, 14px 16px padding. Left: 28px merchant logo + name (15px Lausanne 500, #1C1B17) + category badge (neutral, #EFEEE9). Right: amount (15px Lausanne 500, tabular, right-aligned, #1C1B17)."
- "Create a dark feature card: ink `#1C1B17` bg, 16px radius, 32px padding. Serif Burgess headline 30px #FFFFFF. Body 17px Lausanne 400 rgba(255,255,255,0.7). Lime `#E5FE54` text-link CTA."
- "Design an input with lime focus: white bg, 1px `#C9C7BF` border, 8px radius, 11px 14px padding, 15px Lausanne. Focus: border `#1C1B17` + ring 0 0 0 3px rgba(229,254,84,0.4)."

### Iteration Guide
1. Lime `#E5FE54` is precious — use it only for the single primary action or a savings signal
2. All blacks are warm ink `#1C1B17`, never `#000000`
3. Headlines on marketing can be Burgess serif; all product UI is Lausanne sans
4. Financial numbers: Lausanne 500, tabular numerals, right-aligned
5. Prefer 1px borders to shadows on light surfaces; reserve shadow for floating elements
6. Section eyebrows: 11px uppercase Lausanne 600, 0.08em tracking
7. Default radius 8px (controls), 12px (cards), 16px (modals/dark cards)

## 10. Voice & Tone

Ramp speaks like a sharp, time-respecting finance operator: direct, metric-driven, confident, never fluffy. The brand sells time and money saved, so copy leads with numbers ("close books 75% faster", "save an average of 5%"). Sentences are short and declarative. No exclamation marks, no startup-cute. There's a dry confidence — the product is assumed to be obviously better, so the copy states outcomes rather than pleading.

| Context | Tone |
|---|---|
| CTAs | Imperative, two words ("Get started", "Get a demo", "Book a call"). |
| Headlines | Outcome-led, often a number ("Save more. Close faster."). Serif, editorial. |
| Success toasts | Past-tense, single clause ("Card created", "Receipt matched"). |
| Error messages | Specific, blameless, actionable ("This card is over its monthly limit. Increase the limit or use another card."). |
| Empty states | One line explaining the value, one action ("No transactions yet. Issue a card to get started."). |
| Savings moments | Lead with the dollar figure, large and bold. The number is the message. |
| Legal / compliance | Plain, precise, no jargon padding — but formal where regulation requires. |

**Forbidden tone.** No "Oops!", no exclamation-heavy enthusiasm, no vague "powerful, seamless, robust" filler adjectives. Never bury the number. Avoid hedging ("approximately", "up to" when an exact figure is known on the user's own data).

## 11. Brand Narrative

Ramp was founded in 2019 by **Eric Glyman** and **Karim Atiyeh** (who had previously built and sold Paribus to Capital One). The founding insight inverted the entire corporate-card industry: every incumbent card issuer made more money when customers spent more, so their "rewards" quietly incentivized waste. Ramp built the opposite — a corporate card and spend-management platform whose explicit product goal is to help companies **spend less**. The brand promise is encoded in the name: Ramp helps you ramp *down* costs and ramp *up* efficiency.

That contrarian thesis shapes the entire visual system. The electric lime `#E5FE54` is the color of "found money" — energetic, slightly disruptive, impossible to ignore — set against a serious editorial ink-and-serif foundation that signals Ramp is a rigorous financial tool, not a toy. The design rejects two clichés simultaneously: the cold navy institutionalism of legacy finance (Amex, Concur, SAP) and the rounded pastel friendliness of consumer fintech. Ramp occupies a distinct middle — premium, editorial, fast, and confident.

Ramp grew explosively, becoming one of the fastest-growing SaaS companies in history and reaching a multi-billion-dollar valuation within a few years, backed by investors including Founders Fund, Stripe, Thrive Capital, and Sequoia. By 2024-2025 the brand leaned hard into AI — "Ramp Intelligence" — positioning itself as the platform where finance work gets automated away. The design absorbed this without changing its core: the lime still means action, the serif still means intelligence, and the numbers still tell the story.

What Ramp refuses: the apologetic, dense, jargon-laden UX of legacy ERP/expense tools; the playful illustration-heavy style of consumer apps; and any design move that hides the dollar figure. In Ramp's world, the savings number is always the hero.

## 12. Principles

1. **The number is the hero.** Dollar amounts saved or moved are the largest, most deliberate element on any screen. Never bury a financial figure in body text.
2. **Lime is a signal, not a color.** `#E5FE54` appears only where it means "act here" or "value found." Used everywhere, it means nothing. Restraint is what makes it powerful.
3. **Warm black, never cold.** The brand black is `#1C1B17`. Pure `#000000` reads as default and cheap; the warm ink reads as considered.
4. **Serif for intelligence, sans for system.** Burgess carries the brand's editorial voice; Lausanne carries the functional product. Mixing them wrongly (serif in a table) breaks the system.
5. **Flat is precise.** Prefer 1px borders to shadows. Depth is earned only by genuinely floating elements. Flatness communicates modernity and rigor.
6. **Editorial whitespace on marketing, earned density in product.** Marketing breathes like a magazine; the app trusts power users with dense, tabular data.
7. **State outcomes, don't sell them.** The copy assumes the product wins. It reports results ("75% faster") rather than persuading.
8. **Contrast over decoration.** The brand's drama comes from lime-on-black contrast, not gradients, illustrations, or shadow stacks.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described corporate-spend-management user segments, not individual people.*

**Maya, 34, San Francisco.** VP of Finance at a 200-person Series B startup. Lives in the Ramp dashboard during month-end close. Cares about one thing: closing the books faster with fewer manual reconciliations. She wants dense, scannable transaction tables, fast filtering, and clear approval queues. Editorial flourishes are wasted on her — but the "you saved $X this month" number genuinely lands, because she reports it to the CFO. Power user; keyboard shortcuts; impatient with latency.

**Daniel, 41, Austin.** Operations lead at a fast-growing logistics company. Issues and manages dozens of employee cards. Needs to set spending limits, see who spent what, and freeze a card in two clicks. Doesn't think of himself as a "finance person" — he needs the UI to be obvious and the dangerous actions (freeze, revoke) to be clearly destructive-styled. Trusts the lime CTA to be the "right next step."

**Priya, 29, New York.** Marketing manager who is just a *spender* on the platform — she submits receipts and requests card limits. Touches Ramp a few times a week, mostly on mobile. Wants the receipt-upload and reimbursement flow to be frictionless and fast. The brand's polish (serif headlines, clean cards) makes her trust that the expense process won't be a nightmare. Judges the whole product by how painless one receipt upload is.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | Single line of `#56554F` body text explaining the value, plus one primary action. ("No cards yet. Issue your first card to start tracking spend." + lime/ink CTA.) Never a cartoon illustration; a simple line icon at most. |
| **Empty (filter cleared)** | One line of `#74726B` caption ("No transactions match these filters."). A ghost "Clear filters" link, no big button. |
| **Loading (first paint)** | Skeleton blocks at `#EFEEE9` matching final layout. Financial figures render as `—` until resolved, never as skeleton bars. |
| **Loading (refresh)** | Subtle top progress bar in lime `#E5FE54`. Content stays visible with prior values. Non-blocking. |
| **Error (inline field)** | `#D93F3F` 1px border on input, helper text below in `#D93F3F` 13px. One actionable sentence. |
| **Error (toast)** | Ink `#1C1B17` background, white 14px text, red `#D93F3F` left-bar accent, 4s auto-dismiss. |
| **Error (screen-blocking)** | Reserved for outages. Off-white screen, centered `#1C1B17` 18px/500 message, ink retry button. No illustration. |
| **Success (inline)** | Brief `#F4FCC9` (lime100) flash behind the updated row, 300ms fade. For routine confirmations like a saved setting. |
| **Success (action confirmed)** | Toast with lime `#E5FE54` checkmark icon, ink background, white text. For card-created, receipt-matched. |
| **Savings milestone** | Dedicated celebratory card — lime100 bg, oversized dollar figure (56px Lausanne 500), one line of context. The brand's signature positive moment. |
| **Skeleton** | `#EFEEE9` blocks at exact final dimensions, 1.2s shimmer with 6% white highlight, rounded at component radius. Never on dollar figures (show `—`). |
| **Disabled** | Buttons drop to `#EFEEE9` bg / `#9C9A92` text. Inputs keep their `#C9C7BF` border so geometry is stable if re-enabled. |
| **Destructive confirm** | Red `#D93F3F` button required to confirm freeze/revoke/delete; the action is never the default-focused button in the dialog. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state |
| `motion-fast` | 120ms | Hover, focus rings, button press |
| `motion-standard` | 220ms | Default — dropdowns, card hover-lift, tab switches |
| `motion-slow` | 360ms | Emphasized — modal open, savings number count-up start |
| `motion-page` | 300ms | Route transitions, sidebar navigation |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Things appearing — modals, dropdowns, toasts (soft decelerate) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Things leaving — dismissals, collapses |
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Two-way — hover-lift, tab content, accordions |
| `ease-emphasis` | `cubic-bezier(0.22, 1, 0.36, 1)` | Savings number count-up, milestone reveals (smooth, confident) |

**Signature motions.**

1. **Savings count-up.** Dollar figures animate by counting up from a lower value to the final number over `motion-slow` with `ease-emphasis`. The number arriving is the emotional payoff — the single most important animation in the brand. Tabular numerals keep the layout stable during count-up.
2. **Card hover-lift.** On hover, interactive cards lift with a `0 4px 12px rgba(28,27,23,0.08)` shadow and a 1px translateY over `motion-standard / ease-standard`. Subtle, premium, never bouncy.
3. **Lime CTA press.** The primary lime button darkens to `#C7DF34` and scales to 0.98 over `motion-fast` — a crisp, tactile commit, no overshoot.
4. **Modal entrance.** Modals scale from 0.96 to 1.0 and fade in over `motion-slow / ease-enter`, backdrop scrim fades `rgba(28,27,23,0)` → `rgba(28,27,23,0.6)` in sync.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. The savings count-up snaps directly to the final figure; crossfades replace slides. Fully usable, just static.

<!--
OmD v0.1 Sources — Ramp

Token grounding:
- Brand lime/yellow-green #E5FE54: Ramp's signature accent, widely documented brand
  asset and consistent with the catalog brief hint (#E5FE54-ish). Lime scale steps
  (600/100/50) are interpolated for a usable system.
- Brand black #1C1B17 (RGB 28,27,23): verified via brandcolorcode.com/ramp
  (2026-06-06) as Ramp's listed brand black — a warm, slightly green-tinted near-black.
- Typography Lausanne (sans) + Burgess (serif): verified via WebSearch / Fonts In Use
  (fontsinuse.com "Ramp identity") — "Ramp uses Lausanne and Burgess fonts in their
  visual identity, applied on the card, the website, the application, and videos."
- Voice/tone: grounded in ramp.com marketing copy (WebFetch 2026-06-06) — metric-led,
  outcome-driven, "close books 75% faster", AI-automation positioning.

Founders (Eric Glyman, Karim Atiyeh, ex-Paribus/Capital One), 2019 founding, and
investor list (Founders Fund, Stripe, Thrive, Sequoia) are widely documented public
facts used for narrative context, not Ramp design-system statements.

Neutral scale, semantic colors, component geometry (radii, paddings, heights),
elevation tokens, and motion tokens are an internally consistent system synthesized
to match Ramp's observable editorial-fintech aesthetic; exact in-app token values
were not published by Ramp and should be treated as a faithful reconstruction.

Personas (§13) are fictional archetypes informed by publicly described corporate
spend-management user segments. Any resemblance to specific individuals is unintended.
-->

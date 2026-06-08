---
id: studio
name: Studio
country: JP
category: design-tools
homepage: "https://studio.design"
primary_color: "#007cff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=studio.design&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#007cff"
    blue-light: "#4b9cfb"
    white: "#ffffff"
    off-white: "#f7f7f7"
    black: "#000000"
    ink: "#111111"
    error: "#f84f65"
    error-deep: "#b50000"
    caution: "#ffff99"
    grey-50: "#fafafa"
    grey-100: "#f5f5f5"
    grey-150: "#f2f2f2"
    grey-200: "#ededed"
    grey-250: "#e5e5e5"
    grey-300: "#eeeeee"
    grey-400: "#cccccc"
    grey-600: "#616161"
    grey-700: "#333333"
    grey-800: "#222222"
    grey-900: "#1a1a1a"
  typography:
    family: { sans: "Inter", mono: "Menlo" }
    display-hero: { size: 64, weight: 600, lineHeight: 1.05, tracking: -0.03, use: "Landing hero headline" }
    display:      { size: 48, weight: 600, lineHeight: 1.1, tracking: -0.02, use: "Major section openers" }
    heading-1:    { size: 32, weight: 600, lineHeight: 1.2, tracking: -0.02, use: "Page / panel titles" }
    heading-2:    { size: 24, weight: 600, lineHeight: 1.25, tracking: -0.015, use: "Section headings" }
    heading-3:    { size: 18, weight: 600, lineHeight: 1.35, tracking: -0.01, use: "Card / group titles" }
    subtitle:     { size: 16, weight: 500, lineHeight: 1.4, use: "List headers, nav labels" }
    body-lg:      { size: 16, weight: 400, lineHeight: 1.6, use: "Marketing paragraphs" }
    body:         { size: 14, weight: 400, lineHeight: 1.55, use: "Standard UI text" }
    body-sm:      { size: 13, weight: 400, lineHeight: 1.5, use: "Secondary info" }
    caption:      { size: 12, weight: 400, lineHeight: 1.45, tracking: 0.01, use: "Metadata, timestamps" }
    code:         { size: 12, weight: 400, lineHeight: 1.5, use: "CSS values, tokens (Menlo)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 96 }
  rounded: { sm: 4, md: 6, lg: 8, full: 9999 }
  shadow:
    subtle: "0 1px 2px rgba(0,0,0,0.06)"
    floating: "0 4px 16px rgba(0,0,0,0.08)"
    modal: "0 8px 32px rgba(0,0,0,0.16)"
    showcase: "0 8px 24px rgba(0,0,0,0.10)"
  components:
    button-primary: { type: button, bg: "#111111", fg: "#ffffff", radius: 6, padding: "0 18px", font: "14px/600 Inter", use: "Primary CTA, hover #000000" }
    button-blue: { type: button, bg: "#007cff", fg: "#ffffff", radius: 6, padding: "0 18px", font: "14px/600 Inter", use: "Action emphasis inside editor" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#111111", radius: 6, padding: "0 18px", font: "14px/500 Inter", use: "Outline, 1px #e5e5e5 border, hover #fafafa" }
    button-ghost: { type: button, fg: "#616161", radius: 6, padding: "0 10px", font: "14px/500 Inter", use: "Tertiary / toolbar actions" }
    button-pill: { type: badge, fg: "#4b9cfb", radius: 9999, padding: "4px 12px", font: "12px/600 Inter", use: "New, Beta, category chips" }
    input-text: { type: input, bg: "#ffffff", fg: "#111111", radius: 6, padding: "9px 12px", font: "14px/400 Inter", use: "Standard form input, 1px #e5e5e5 border, focus #007cff" }
    input-inset: { type: input, bg: "#f7f7f7", fg: "#111111", radius: 4, padding: "6px 8px", font: "13px/400 Inter", use: "Property/inspector value fields" }
    card-standard: { type: card, bg: "#ffffff", radius: 6, padding: "20px", use: "Template tiles, project cards, 1px #eeeeee border, no shadow" }
    card-floating: { type: card, bg: "#ffffff", radius: 6, padding: "16px", use: "Popovers, inspector, floating menus" }
    card-showcase: { type: card, bg: "#f7f7f7", radius: 6, padding: "0", use: "Gallery tile, image-filled, hover scale 1.01" }
    badge-neutral: { type: badge, bg: "#f5f5f5", fg: "#616161", radius: 4, padding: "2px 8px", font: "12px/500 Inter", use: "Tag, status metadata" }
    badge-accent: { type: badge, fg: "#007cff", radius: 9999, padding: "3px 10px", font: "12px/600 Inter", use: "New, highlighted category" }
    badge-error: { type: badge, fg: "#f84f65", radius: 4, padding: "2px 8px", font: "12px/600 Inter", use: "Failed / blocked state" }
    tab-underline: { type: tab, fg: "#616161", padding: "0 4px 12px", font: "14px/500 Inter", active: "Active #111111 text + 2px #111111 bottom border", use: "Section switching" }
    toast-default: { type: toast, bg: "#111111", fg: "#ffffff", radius: 6, padding: "12px 16px", font: "14px/500 Inter", use: "Transient confirmation" }
    dialog-modal: { type: dialog, bg: "#ffffff", fg: "#111111", radius: 6, padding: "24px", use: "Confirm / settings dialogs" }
    toggle-default: { type: toggle, bg: "#007cff", radius: 9999, use: "Boolean settings, #e5e5e5 off, #ffffff thumb" }
  components_harvested: true
---

# Design System Inspiration of Studio

## 1. Visual Theme & Atmosphere

Studio is a no-code web design tool built for designers who refuse to compromise on craft. Its marketing site is the product's strongest argument: a near-monochrome, gallery-grade canvas where the work — beautiful portfolios, landing pages, agency sites — is the only color on the page. The atmosphere is that of a white-walled Tokyo design studio: pure white surfaces (`#ffffff`), barely-there off-white panels (`#f7f7f7`), ink-black text (`#000000`, `#111111`), and an electric, surgical blue (`#007cff`) reserved almost exclusively for links and interactive moments. Nothing decorates; everything functions.

The typeface is **Inter** — used at every level of the interface in a tightly controlled weight range. Inter's neutral, screen-optimized geometry is deliberate: Studio's chrome should disappear so the user's design can speak. A display face, **grandam**, makes rare appearances for editorial/branding flourishes, but the working system is Inter through and through. There is no custom brand typeface competing for attention; restraint is the brand.

What defines Studio visually is *absence as a feature*. Borders are hairlines (`#eeeeee`, `#e5e5e5`), shadows are whisper-soft (`rgba(0,0,0,0.08)` and lower), and radii are small and consistent (4–6px). The interface reads as a precision instrument — closer to a code editor's calm than a consumer app's warmth. When color appears, it means something: blue is "you can act here," coral (`#f84f65`) is "something went wrong."

**Key Characteristics:**
- Monochrome-first palette: white, off-white `#f7f7f7`, and a full neutral grey ramp from `#fafafa` to `#111111`
- Interactive blue `#007cff` (with a lighter `#4b9cfb` for secondary/hover contexts) as the sole functional accent
- Coral `#f84f65` reserved for errors and destructive feedback
- Inter as the universal UI typeface; grandam for rare display/editorial moments
- Small, consistent radii (4px / 6px standard; 40px for pills)
- Near-invisible elevation — the canvas, not the chrome, carries visual weight
- Editorial, gallery-like negative space; the product's output is the page's color

## 2. Color Palette & Roles

### Primary
- **Studio Blue** (`#007cff`): The functional brand color. Links, primary interactive accents, active selection, focus emphasis. Used sparingly and only where the user can act.
- **Blue Light** (`#4b9cfb`): Secondary / hover-tinted blue for chips, pill labels, and softer interactive surfaces (`border-radius:40px` accent labels).
- **Pure White** (`#ffffff`): Primary page and panel background, card surfaces, canvas.
- **Off-White** (`#f7f7f7`): Secondary surface — section backgrounds, inset panels, hovered rows. The "barely there" neutral that separates regions without a border.
- **Ink Black** (`#000000` / `#111111`): Primary headings and high-emphasis text, logo mark, primary button fills.

### Semantic
- **Error Coral** (`#f84f65`): Error messages, invalid field text, destructive states. The most saturated warm tone in the system — it earns attention because nothing else competes.
- **Error Deep** (`#b50000`): Strong error / critical fill where coral would feel too soft.
- **Caution Yellow** (`#ffff99` / `#ff9`): Soft highlight, attention swatch (rare, editorial use only).
- **Info / Action**: handled by Studio Blue `#007cff` — no separate info hue.

### Neutral Scale
- **Grey 50** (`#fafafa`): Lightest grey, subtle zebra fill.
- **Grey 100** (`#f5f5f5`): Hover surface, disabled fills.
- **Grey 150** (`#f2f2f2`): Secondary inset panel.
- **Grey 200** (`#ededed`): Light divider.
- **Grey 250** (`#e5e5e5`): Default border / loading-bar track (`--rebranding-loading-bg:#e5e5e5`).
- **Grey 300** (`#eeeeee`): Hairline border, default divider.
- **Grey 400** (`#cccccc`): Placeholder text, disabled icon.
- **Grey 600** (`#616161`): Secondary body text, captions, metadata.
- **Grey 700** (`#333333`): Strong body text, labels.
- **Grey 800** (`#222222`): Near-black UI text, loading-bar fill (`--rebranding-loading-bar:#222`).
- **Grey 900** (`#1a1a1a` / `#111111`): Headings, darkest UI ink.

### Surface & Borders
- **Border Default**: `#eeeeee`. Standard hairline divider and card edge.
- **Border Subtle**: `#e5e5e5`. Slightly stronger separation, input borders.
- **Border Faint**: `rgba(0,0,0,0.08)` (`#00000014`). Whisper border on light panels.
- **Border Hover**: `rgba(0,0,0,0.11)` (`#0000001c`). Border on interactive hover.
- **Overlay Scrim**: `rgba(0,0,0,0.5)` for modal backdrops; `rgba(0,0,0,0.04)`–`0.08` for tinted hovers.
- **Translucent Surface**: `#f5f5f580` — half-opacity off-white for layered floating panels.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Display / Editorial**: `grandam, Inter, serif` — rare hero/branding moments only.
- **Monospace**: `Menlo, Monaco, "Courier New", monospace` — code snippets, CSS values shown in the editor UI.
- **Icons**: `"Material Symbols Outlined"`, `"Material Symbols Rounded"`, `"Material Symbols Sharp"`, `"Material Icons"` — Studio uses Google's Material Symbols icon fonts.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | grandam / Inter | 64px | 600 | 1.05 | -0.03em | Landing hero headline |
| Display | Inter | 48px | 600 | 1.1 | -0.02em | Major section openers |
| Heading 1 | Inter | 32px | 600 | 1.2 | -0.02em | Page / panel titles |
| Heading 2 | Inter | 24px | 600 | 1.25 | -0.015em | Section headings |
| Heading 3 | Inter | 18px | 600 | 1.35 | -0.01em | Card / group titles |
| Subtitle | Inter | 16px | 500 | 1.4 | normal | List headers, nav labels |
| Body Large | Inter | 16px | 400 | 1.6 | normal | Marketing paragraphs |
| Body | Inter | 14px | 400 | 1.55 | normal | Standard UI text |
| Body Small | Inter | 13px | 400 | 1.5 | normal | Secondary info |
| Caption | Inter | 12px | 400 | 1.45 | 0.01em | Metadata, timestamps |
| Code / Value | Menlo | 12–13px | 400 | 1.5 | normal | CSS values, tokens |

### Principles
- **Inter, narrow weight band**: The UI lives in 400 (body), 500 (labels), and 600 (headings). 700 is rare and reserved for the heaviest hero moments.
- **Negative tracking on large type**: Display and heading sizes tighten letter-spacing (-0.01 to -0.03em) for a crisp, editorial set; body text stays at normal tracking.
- **Black ink, grey support**: Headings in `#111`/`#000`, body in `#333`/`#616161`. Hierarchy is built from grey value, not weight gymnastics.
- **Monospace for design values**: Anything that represents a literal CSS value (radius, color, spacing) renders in Menlo to signal "this is code."

## 4. Component Stylings

> Tokens below are grounded in Studio's live marketing site CSS (`entry.*.css`, Nuxt build) and product UI conventions. Where the live site exposes exact values (`#007cff` links, `#f84f65` error text, `border-radius:6px`, off-white `#f7f7f7`) those are used verbatim; geometry for product-chrome components follows Studio's observed small-radius, hairline-border system.

### Buttons

**Primary (Fill / Black)**
- Background: `#111111`
- Text: `#ffffff`
- Border: none
- Radius: 6px
- Padding: 0 18px
- Font: 14px / 600 / Inter
- Height: 40px
- Hover: background `#000000`
- Use: Primary CTA ("Start for free", "Publish")

**Primary (Fill / Blue)**
- Background: `#007cff`
- Text: `#ffffff`
- Border: none
- Radius: 6px
- Padding: 0 18px
- Font: 14px / 600 / Inter
- Height: 40px
- Hover: background darkens ~8%
- Use: Action emphasis inside the editor (apply, confirm interaction)

**Secondary (Outline)**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#e5e5e5`
- Radius: 6px
- Padding: 0 18px
- Font: 14px / 500 / Inter
- Height: 40px
- Hover: border `rgba(0,0,0,0.11)`, background `#fafafa`
- Use: Secondary action paired with a fill button

**Ghost / Text**
- Background: transparent
- Text: `#616161`
- Border: none
- Radius: 6px
- Padding: 0 10px
- Font: 14px / 500 / Inter
- Hover: text `#111`, background `rgba(0,0,0,0.04)`
- Use: Tertiary / toolbar actions

**Pill (Accent Label)**
- Background: `rgba(75,156,251,0.12)`
- Text: `#4b9cfb`
- Border: none
- Radius: 40px
- Padding: 4px 12px
- Font: 12px / 600 / Inter
- Use: "New", "Beta", category chips

**Disabled (any)**
- Background: `#f5f5f5`
- Text: `#cccccc`
- Cursor: not-allowed
- Use: Inactive action

### Inputs

**Text Field (default)**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#e5e5e5`
- Radius: 6px
- Padding: 9px 12px
- Font: 14px / 400 / Inter
- Placeholder: `#cccccc`
- Focus: border `#007cff`, no heavy ring (1px hairline shift only)
- Use: Standard form / property input

**Inset Field (editor panel)**
- Background: `#f7f7f7`
- Text: `#111111`
- Border: 1px solid transparent
- Radius: 4px
- Padding: 6px 8px
- Font: 13px / 400 / Inter (value text in Menlo)
- Focus: background `#ffffff`, border `#e5e5e5`
- Use: Property/inspector value fields in the design canvas

**Error**
- Border: 1px solid `#f84f65`
- Message: `#f84f65` 12px / 400 / Inter below field
- Use: Invalid input; coral is the system's only error color

### Cards

**Standard**
- Background: `#ffffff`
- Border: 1px solid `#eeeeee`
- Radius: 6px
- Padding: 20px
- Shadow: none (border carries separation)
- Use: Template tiles, dashboard project cards

**Floating / Elevated**
- Background: `#ffffff`
- Border: 1px solid `rgba(0,0,0,0.08)`
- Radius: 6px
- Padding: 16px
- Shadow: `0 4px 16px rgba(0,0,0,0.08)`
- Use: Popovers, the inspector panel, floating menus

**Showcase Tile**
- Background: `#f7f7f7`
- Border: none
- Radius: 6px
- Padding: 0 (image-filled)
- Hover: scale 1.01 + shadow `0 8px 24px rgba(0,0,0,0.10)`
- Use: Gallery of user-made sites — the marketing site's hero content

### Badges / Chips

**Neutral**
- Background: `#f5f5f5`
- Text: `#616161`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 500 / Inter
- Use: Tag, status metadata

**Accent (Blue)**
- Background: `rgba(0,124,255,0.10)`
- Text: `#007cff`
- Radius: 40px
- Padding: 3px 10px
- Font: 12px / 600 / Inter
- Use: "New", highlighted category

**Error**
- Background: `rgba(248,79,101,0.12)`
- Text: `#f84f65`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 600 / Inter
- Use: Failed / blocked state

### Tabs

**Underline Tabs**
- Container border-bottom: 1px solid `#eeeeee`
- Inactive: text `#616161`, 14px / 500
- Active: text `#111111`, 2px bottom border `#111111` (or `#007cff` for in-editor context)
- Padding: 0 4px 12px
- Use: Section switching in dashboard and settings

### Toasts / Snackbars

**Default**
- Background: `#111111`
- Text: `#ffffff`
- Radius: 6px
- Padding: 12px 16px
- Shadow: `0 4px 16px rgba(0,0,0,0.16)`
- Font: 14px / 500 / Inter
- Use: Transient confirmation ("Copied", "Published")

**Error (snackbar.error)**
- Message text: `#f84f65`
- Background: `#111111`
- Use: Failure feedback — coral message on the dark snackbar

### Dialogs

**Centered Modal**
- Background: `#ffffff`
- Text: `#111111`
- Border: none
- Radius: 6px (large modals 8px)
- Padding: 24px
- Shadow: `0 8px 32px rgba(0,0,0,0.16)`
- Backdrop: `rgba(0,0,0,0.5)`
- Use: Confirm / settings dialogs

### Toggles

**Default**
- Track: `#007cff` (on) / `#e5e5e5` (off)
- Radius: 9999px
- Thumb: `#ffffff` circle, `0 1px 2px rgba(0,0,0,0.2)` shadow
- Use: Boolean settings, publish toggles

### Loading Bar

- Track: `#e5e5e5` (`--rebranding-loading-bg`)
- Fill: `#222222` (`--rebranding-loading-bar`)
- Height: 2–3px, top-of-viewport
- Use: Route / publish progress

---

**Verified:** 2026-06-06
**Tier 1 sources:** studio.design live site CSS (`/_nuxt/entry.*.css`, Nuxt build) — confirmed `#007cff` link color, `#4b9cfb` accent pill, `#f84f65` error message, off-white `#f7f7f7`, neutral ramp `#fafafa`→`#111`, `border-radius:6px/4px/40px`, Inter typeface, `--rebranding-loading-bg:#e5e5e5` / `--rebranding-loading-bar:#222`, Material Symbols icon fonts. JS bundle (`/_nuxt/*.js`) — Inter referenced 200+ times; grandam display face. · https://studio.design (live production site)
**Conflicts unresolved:** none.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px, 96px
- Editor panels favor tight 4–8px rhythm; marketing sections breathe at 48–96px.

### Grid & Container
- Marketing content: centered, max-width ~1200px, generous side gutters.
- Dashboard: responsive grid of template/project cards, ~24px gaps.
- Editor: 3-zone layout — left layers panel, center canvas, right inspector — each a hairline-separated region on `#f7f7f7` / `#ffffff`.

### Whitespace Philosophy
- **The output is the color.** The chrome is monochrome so user-made designs in the gallery carry all the visual energy. Negative space is the frame around the art.
- **Editorial breathing in marketing.** Hero and section spacing is luxurious (64–96px) — the site behaves like a design portfolio, not a SaaS landing page.
- **Dense, calm tooling.** Inside the editor, density rises but stays calm via hairline dividers instead of boxes and shadows.

### Border Radius Scale
- Tight (2px): inline tags, tiny controls
- Compact (4px): inset fields, small chips
- Standard (6px): buttons, cards, inputs, modals
- Pill (40px / 9999px): accent labels, toggles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow; 1px `#eeeeee` border | Page, cards, panels |
| Subtle (1) | `0 1px 2px rgba(0,0,0,0.06)` | Hovered rows, small lifts |
| Floating (2) | `0 4px 16px rgba(0,0,0,0.08)` | Popovers, inspector, menus |
| Modal (3) | `0 8px 32px rgba(0,0,0,0.16)` | Dialogs, command palette |
| Showcase (hover) | `0 8px 24px rgba(0,0,0,0.10)` + scale 1.01 | Gallery tile hover |

**Shadow Philosophy**: Studio treats elevation like a designer's tool, not a default. Most separation is achieved with hairline borders (`#eeeeee`, `rgba(0,0,0,0.08)`) rather than shadow. When a shadow appears it is soft, pure-black, low-opacity, and single-layer — never colored, never dramatic. Depth is a whisper so the user's canvas stays the loudest thing on screen.

### Blur Effects
- Floating panels and the sticky nav use a light `backdrop-filter: blur(12px)` over a translucent `#f5f5f580` surface for a frosted, modern feel.

## 7. Do's and Don'ts

### Do
- Keep the interface monochrome — white, off-white `#f7f7f7`, and the grey ramp do the structural work.
- Use `#007cff` only for links and interactive accents; let it stay rare and meaningful.
- Reserve coral `#f84f65` strictly for errors and destructive feedback.
- Use Inter at 400/500/600; build hierarchy from grey value and size, not heavy weights.
- Prefer 1px hairline borders (`#eeeeee`) over shadows for separation.
- Keep radii small and consistent: 6px for most things, 4px for inset fields, pill for labels/toggles.
- Tighten letter-spacing on display/heading type; leave body at normal.

### Don't
- Don't introduce decorative color — the user's design is the only color that matters.
- Don't use blue for non-interactive decoration; it must always mean "you can act here."
- Don't reach for heavy shadows or multi-layer elevation; whisper-soft single-layer only.
- Don't use 700+ weight for body or labels — reserved for the largest hero moments.
- Don't round corners past 8px (except pills/toggles).
- Don't fill the canvas chrome with borders-and-boxes; hairlines and whitespace separate regions.
- Don't mix warm accents (orange/coral) into primary actions — black or blue only.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single-column marketing; editor shows a "design on desktop" prompt |
| Tablet | 768–1024px | 2-column galleries, collapsible side panels |
| Desktop | 1024–1440px | Full 3-zone editor, multi-column dashboard |
| Wide | >1440px | Centered max-width ~1200–1320px content, expanded gutters |

### Touch Targets
- Buttons: 40px height standard; 32px compact toolbar controls.
- List rows: minimum 44px tappable height on touch.
- Editor is desktop-first; mobile primarily serves marketing and viewing.

### Collapsing Strategy
- Marketing multi-column sections stack to single column under 768px.
- Editor side panels (layers, inspector) collapse to icons / drawers on narrow widths.
- Sticky frosted nav condenses to a hamburger on mobile.

### Image Behavior
- Gallery tiles maintain aspect ratio, fill-cover within `#f7f7f7` frames.
- Hero/showcase imagery is full-bleed and high-resolution — the product's proof.
- Icons render via Material Symbols at 18–24px.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Ink Black (`#111111`) bg, white text
- Interactive / Link: Studio Blue (`#007cff`)
- Accent (soft): Blue Light (`#4b9cfb`)
- Background: Pure White (`#ffffff`)
- Background Surface: Off-White (`#f7f7f7`)
- Heading text: Ink (`#111111` / `#000000`)
- Body text: Grey (`#333333`)
- Secondary text: Grey (`#616161`)
- Placeholder: Light Grey (`#cccccc`)
- Border: Hairline (`#eeeeee` / `#e5e5e5`)
- Error: Coral (`#f84f65`)

### Example Component Prompts
- "Create a Studio template card: white bg, 1px #eeeeee border, 6px radius, no shadow. Title 16px weight 600 #111, meta 13px weight 400 #616161. Hover: lift with 0 8px 24px rgba(0,0,0,0.10) and scale 1.01."
- "Build a primary button: #111111 bg, white text, 14px weight 600 Inter, 40px height, 6px radius, 0 18px padding. Hover #000000. Disabled #f5f5f5 bg / #cccccc text."
- "Design an inspector field: #f7f7f7 bg, 4px radius, 6px 8px padding, label 12px #616161, value in Menlo 13px #111. Focus: white bg + 1px #e5e5e5 border."
- "Create an accent pill: rgba(0,124,255,0.10) bg, #007cff text, 12px weight 600, 40px radius, 3px 10px padding. Use for 'New' labels."
- "Design an error state: input border 1px #f84f65, message below 12px #f84f65 Inter. Snackbar: #111 bg, message text #f84f65."

### Iteration Guide
1. Default to monochrome; add `#007cff` only on interactive elements.
2. Inter everywhere, weights 400/500/600; build hierarchy with grey value + size.
3. Radius is 6px (buttons/cards/inputs), 4px (inset fields), pill (labels/toggles).
4. Separate regions with 1px hairlines (`#eeeeee`), not shadows.
5. Shadows are soft, pure-black, single-layer; reserve for floating/modal.
6. Coral `#f84f65` is errors only — never decorative.
7. Let whitespace and the user's content be the visual interest.

---

## 10. Voice & Tone

Studio speaks like a confident creative director: clear, unhurried, and quietly proud of craft. The promise is freedom without compromise — "No code. All creative freedom." Copy is short, declarative, and benefit-led, never jargon-heavy or hype-driven. It assumes the reader is a designer who values taste. English is the primary marketing voice (Studio is a global product with Japanese roots); the tone is international-minimalist rather than localized.

| Context | Tone |
|---|---|
| Taglines | Short, bold, freedom-themed. "The easiest and quickest way to build your beautiful portfolio website, landing page or anything." |
| CTAs | Direct imperatives — "Start for free", "Publish", "Try Studio". No exclamation spam. |
| Feature copy | Benefit-first, plain language. "Design and publish, all in one place." |
| Success feedback | Brief past-tense confirmation — "Published", "Copied". |
| Error messages | Specific and blameless, in coral. State what happened and the fix. |
| Empty states | One calm line explaining what goes here, plus one action. |
| Onboarding | Encouraging, one idea per step, designer-to-designer. |

**Forbidden phrases.** Avoid "Oops", "Whoops", generic "Something went wrong" with no next step, and growth-hacky urgency ("Don't miss out!"). No emoji in product chrome. Keep punctuation minimal — buttons have no terminal periods.

## 11. Brand Narrative

Studio is a no-code web design tool that lets designers build and publish real, production-quality websites without writing code — portfolios, landing pages, agency sites, "or anything." Its founding conviction is that the gap between *design* and *live website* should not require handing your work to a developer, and that no-code should not mean low-craft. The product's whole thesis is **creative freedom with professional output**: a true visual canvas with real responsive layout, interactions, and CMS, that publishes to a fast hosted site.

That thesis is encoded in the brand surface. The marketing site is deliberately monochrome because the gallery of user-made sites supplies all the color — the most persuasive demo is the work itself. The single functional blue (`#007cff`), the hairline borders, the small consistent radii, and the relentless use of Inter all say the same thing: *this tool gets out of your way.* Where consumer apps decorate to feel friendly, Studio strips down to feel like an instrument. The brand respects the designer's eye by refusing to compete with it.

Studio (a Japanese product with a global audience) sits in the design-tools category alongside Webflow, Framer, and Figma Sites, but stakes out a distinctly editorial, restraint-driven aesthetic — closer to a Tokyo gallery than a Silicon Valley dashboard. Its evident in-progress rebranding (the `--rebranding-*` tokens in the live CSS) signals a brand that treats its own surface as a living design project.

What Studio refuses: visual noise, decorative color, heavy chrome, and the assumption that "no-code" must look like a toy. Its narrow middle — powerful enough for professionals, calm enough to disappear — is the entire promise.

## 12. Principles

1. **The output is the color.** Keep the chrome monochrome so user-made designs carry every bit of visual energy. The interface is a frame, not a painting.
2. **Color means action.** `#007cff` appears only where the user can interact. It never decorates. If it's blue, it's tappable.
3. **Hairlines over shadows.** Separate regions with 1px borders and whitespace. Reserve soft, single-layer shadows for genuinely floating surfaces.
4. **One typeface, narrow weights.** Inter at 400/500/600 builds the whole system. Hierarchy comes from grey value and size, not weight theatrics.
5. **Small, consistent radii.** 6px is the system's voice; 4px for inset fields; pills for labels and toggles. Nothing rounder.
6. **Restraint is craft.** Every removed element is a design decision. The calm is engineered, not accidental.
7. **Editorial in marketing, dense in tooling.** The landing page breathes like a portfolio; the editor packs density without losing calm.
8. **No-code is not low-craft.** Defaults must produce professional-grade results — the brand's credibility depends on it.

## 13. Personas

*Personas below are fictional archetypes informed by Studio's stated audience (designers building portfolios, landing pages, and client sites), not individual people.*

**Aoi, 29, Tokyo.** Freelance brand designer. Uses Studio to ship client landing pages without looping in a developer. Cares about pixel-precise layout and fast publishing. Expects the editor to feel like a design tool, not a website builder — if a control behaves "templatey," she's annoyed. Reads English and Japanese; the international-minimalist voice suits her.

**Marco, 34, Milan.** Runs a two-person studio. Builds his own portfolio and small agency sites on Studio. Values that the marketing gallery shows real, beautiful sites — it's why he trusted the tool. Wants the chrome to disappear so client demos look like *his* work, not the tool's. Will abandon any builder that stamps its brand on the output.

**Priya, 24, remote.** Junior product designer building her first portfolio. No-code is essential — she doesn't write CSS yet. Loves that Studio's defaults already look professional, so she can't make it ugly by accident. Learns by exploring; needs calm, low-noise UI and one clear action per step.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | One calm line of `#616161` body text explaining what belongs here, plus a single primary action (black `#111` button). No illustration clutter. |
| **Empty (filtered)** | One `#616161` caption ("No results"). No button — the user adjusts the filter. |
| **Loading (route/publish)** | 2–3px top loading bar: `#e5e5e5` track, `#222` fill. Non-blocking; content stays visible. |
| **Loading (content)** | Skeleton blocks at `#f5f5f5` matching final layout, subtle 1.2s shimmer. Rounded at component radius. |
| **Error (inline field)** | 1px `#f84f65` border on the input; message below in `#f84f65` 12px Inter. One actionable sentence. |
| **Error (snackbar)** | `#111` background, message text in `#f84f65`, ~3s auto-dismiss, bottom of screen. |
| **Success (toast)** | `#111` background, white 14px / 500 text ("Published"). Brief, no icon noise. |
| **Hover (card/tile)** | Lift with `0 8px 24px rgba(0,0,0,0.10)` + scale 1.01; border may shift to `rgba(0,0,0,0.11)`. |
| **Focus (input)** | Border shifts to `#007cff`; no heavy ring — a single hairline change. |
| **Disabled** | `#f5f5f5` fill, `#cccccc` text, `not-allowed` cursor. Geometry unchanged. |
| **Selected (canvas object)** | `#007cff` 1px selection outline + corner handles; blue is the editor's selection language. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State flips, checkbox toggles |
| `motion-fast` | 120ms | Hover, focus, small reveals, button feedback |
| `motion-standard` | 220ms | Default — popovers, panel expands, tab switches |
| `motion-slow` | 360ms | Emphasized — modal open, onboarding step advance |
| `motion-page` | 300ms | Route transitions, publish flow |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Appearing — popovers, toasts, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — collapsibles, tabs, hovers |
| `ease-soft` | `cubic-bezier(0.33, 1, 0.68, 1)` | Showcase tile hover lift, gentle scale |

**Signature motions.**

1. **Gallery tile lift.** On hover, showcase tiles scale to 1.01 and gain a soft `0 8px 24px rgba(0,0,0,0.10)` shadow over `motion-fast / ease-soft` — a quiet, tactile "this is real work" cue.
2. **Frosted panel reveal.** Floating panels fade/translate in 6px with `motion-standard / ease-enter`, backed by `backdrop-filter: blur(12px)` over `#f5f5f580` for a modern frosted feel.
3. **Top loading bar.** The `#222` fill animates across the `#e5e5e5` track during route/publish actions — non-blocking progress at the viewport edge.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; lifts and slides become opacity-only. The tool stays usable, just less kinetic.

<!--
OmD v0.1 Sources — Studio (studio.design)

Token verification via live site (WebFetch + curl, 2026-06-06):
- https://studio.design — og:description / meta description:
  "The easiest and quickest way to build your beautiful portfolio website,
   landing page or anything. No code. All creative freedom." (used in §10/§11).
- /_nuxt/entry.*.css (Nuxt build) — confirmed real tokens:
  link color #007cff; accent pill color #4b9cfb (border-radius:40px);
  error message color #f84f65; deep error #b50000; off-white #f7f7f7;
  neutral ramp #fafafa/#f5f5f5/#f2f2f2/#ededed/#e5e5e5/#eee/#ccc/#616161/
  #333/#222/#1a1a1a/#111; border-radius 6px/4px/40px/2px;
  font-family Inter; display face grandam; Material Symbols icon fonts;
  --rebranding-loading-bg:#e5e5e5; --rebranding-loading-bar:#222.
- /_nuxt/*.js — Inter referenced 200+ times (confirms universal UI typeface).

primary_color #007cff is Studio's functional interactive/link blue — the one
chromatic accent in an otherwise monochrome system. Black (#111) is the
primary CTA fill; blue is the interaction signal.

Component geometry for product-chrome elements (buttons, inputs, cards,
dialogs) follows Studio's observed small-radius (6px/4px), hairline-border,
soft-single-layer-shadow system; exact link/error/accent colors and radii are
verbatim from the live CSS.

Personas (§13) are fictional archetypes informed by Studio's stated audience
(designers building portfolios, landing pages, client sites). Country JP per
catalog metadata. Interpretive claims (e.g., "the output is the color") are
editorial readings of the monochrome design, not documented Studio statements.
-->

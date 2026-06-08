---
id: meta
name: Meta
country: US
category: consumer-tech
homepage: "https://about.meta.com"
primary_color: "#0064E0"
logo:
  type: simpleicons
  slug: "meta"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#0064e0"
    primary-light: "#0082fb"
    primary-bright: "#0080fb"
    primary-pressed: "#0058c4"
    canvas: "#ffffff"
    ink: "#1c2b33"
    ink-800: "#2d3a42"
    gray-700: "#465a69"
    gray-600: "#65676b"
    gray-500: "#8a8d91"
    gray-400: "#bcc0c4"
    border: "#e4e6eb"
    border-strong: "#ced0d4"
    canvas-gray: "#f0f2f5"
    surface-tint: "#f7f8fa"
    success: "#42b72a"
    success-text: "#2e8b1e"
    error: "#fa383e"
    warning: "#f5a623"
  typography:
    family: { sans: "Optimistic Text", mono: "SF Mono" }
    display-hero: { size: 56, weight: 700, lineHeight: 1.07, tracking: -0.02, use: "Marketing hero, Optimistic Display" }
    display-lg:   { size: 40, weight: 700, lineHeight: 1.20, tracking: -0.01, use: "Section headers" }
    display:      { size: 32, weight: 600, lineHeight: 1.25, tracking: -0.01, use: "Feature titles" }
    heading:      { size: 24, weight: 600, lineHeight: 1.33, use: "Card headings, modal titles" }
    subtitle:     { size: 20, weight: 600, lineHeight: 1.40, use: "Sub-section, list headers" }
    body-lg:      { size: 17, weight: 400, lineHeight: 1.53, use: "Lead paragraphs" }
    body:         { size: 15, weight: 400, lineHeight: 1.47, use: "Standard reading text" }
    body-sm:      { size: 13, weight: 400, lineHeight: 1.38, use: "Secondary info" }
    caption:      { size: 12, weight: 400, lineHeight: 1.33, use: "Timestamps, fine print" }
    button:       { size: 15, weight: 600, lineHeight: 1.33, use: "CTA labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 28, xxl: 32, section: 48 }
  rounded: { sm: 6, md: 8, lg: 16, full: 9999 }
  shadow:
    standard: "0 1px 2px rgba(28,43,51,0.10)"
    featured: "0 4px 16px rgba(28,43,51,0.12)"
    gradient: "0 8px 32px rgba(0,100,224,0.30)"
    dialog: "0 12px 28px rgba(28,43,51,0.20)"
  components:
    button-primary: { type: button, bg: "#0064e0", fg: "#ffffff", radius: 8, padding: "12px 20px", font: "15px/600", use: "Product-surface primary action" }
    button-secondary: { type: button, bg: "#e4e6eb", fg: "#1c2b33", radius: 8, padding: "12px 20px", font: "15px/600", use: "Neutral secondary" }
    button-outline: { type: button, bg: "transparent", fg: "#0064e0", radius: 8, padding: "12px 24px", font: "15px/600", use: "Tertiary CTA Sign up" }
    input: { type: input, bg: "#ffffff", fg: "#1c2b33", radius: 8, padding: "12px 14px", font: "15px/400", use: "Standard form input" }
    input-filled: { type: input, bg: "#f0f2f5", fg: "#1c2b33", radius: 8, padding: "12px 14px", font: "15px/400", use: "Search bars, dense forms" }
    card: { type: card, bg: "#ffffff", radius: 12, padding: "16px", use: "Feed cards, content panels" }
    badge-notif: { type: badge, bg: "#fa383e", fg: "#ffffff", radius: 9999, padding: "2px 6px", font: "12px/700", use: "Unread count red dot" }
    badge-status: { type: badge, fg: "#0064e0", radius: 9999, padding: "4px 10px", font: "12px/600", use: "Soft informational label New" }
    tab: { type: tab, bg: "transparent", fg: "#65676b", active: "3px bottom border #0064e0 with #0064e0 text", font: "15px/600", use: "In-page section nav" }
    segmented: { type: tab, bg: "#f0f2f5", fg: "#65676b", radius: 8, padding: "8px 16px", active: "#ffffff bg with #1c2b33 text", font: "14px/600", use: "Mode switching" }
    toast: { type: toast, bg: "#1c2b33", fg: "#ffffff", radius: 8, padding: "12px 16px", font: "14px/500", use: "Transient confirmation Link copied" }
    dialog: { type: dialog, bg: "#ffffff", fg: "#1c2b33", radius: 12, padding: "24px", use: "Confirmations, composer dialogs" }
    toggle: { type: toggle, bg: "#0064e0", radius: 9999, use: "Boolean settings, on=blue off=#bcc0c4" }
  components_harvested: true
---

# Design System Inspiration of Meta

## 1. Visual Theme & Atmosphere

Meta is the rebrand of Facebook, Inc. into a company organized around connection across the social graph, devices, and the immersive web. Where the old Facebook interface was a wall of utilitarian `#1877F2` blue, the Meta brand is built around motion, depth, and an optimistic gradient that flows from a deep, trustworthy blue (`#0064E0`) into a brighter, almost luminescent cerulean (`#0082FB`). The infinity mark — a continuous 3D loop that reads equally well in 2D and in spatial/AR contexts — is the visual anchor: it signals "unlimited" without shouting.

The atmosphere is **big-tech confident but human**. Pages open on generous white (`#FFFFFF`) or a near-black ink (`#1C2B33`) depending on surface, with the blue gradient reserved for moments of brand energy: hero washes, CTA fills, focus rings, and the logo itself. This is not the flat, single-blue Facebook of 2012; it's a layered system where the gradient implies a third dimension, echoing the company's bet on immersive computing.

The custom **Optimistic** type superfamily (Optimistic Display for headlines, Optimistic Text for body) is the quiet workhorse. Purpose-built for Meta's surfaces, it carries warm, slightly humanist letterforms that keep a trillion-impression interface from feeling robotic. The system leans on large, friendly display sizing, roomy line-height, and a restrained neutral palette so the blue gradient always wins the eye.

**Key Characteristics:**
- Meta Blue gradient (`#0064E0` → `#0082FB`) as the signature brand energy — depth, trust, optimism
- Optimistic Display / Optimistic Text custom superfamily, warm humanist sans
- Near-black ink `#1C2B33` (not pure black) for text and dark surfaces
- Generous whitespace, large friendly display type, single-column hero rhythm
- Gradient and motion imply a third dimension — a nod to immersive computing
- Pill and large-radius buttons (28px+), soft elevation, minimal hard borders
- Accessibility-first contrast; blue reserved for interaction and brand moments

## 2. Color Palette & Roles

### Primary
- **Meta Blue** (`#0064E0`): Primary brand blue. The trustworthy anchor of the gradient — CTA fills, links, focus, active states. The workhorse interactive color.
- **Meta Light Blue** (`#0082FB`): The bright terminus of the brand gradient. Used as the top/right stop in gradient fills, hover lift, and luminous accents.
- **Meta Blue Bright** (`#0080FB`): Near-twin bright blue used in lighter UI accents and link hover on dark surfaces.
- **Pure White** (`#FFFFFF`): Page background, card surfaces, button text on blue.
- **Meta Ink** (`#1C2B33`): Primary heading and body ink. A blue-gray near-black, not `#000000` — softer, warmer, on-brand.

### Brand Gradient
- **Brand Gradient**: `linear-gradient(120deg, #0064E0 0%, #0082FB 100%)`. The infinity-mark gradient. Hero washes, primary CTA fills, brand splash, focus glows. Always blue-to-blue, never blended with off-brand hues.
- **Gradient Deep Stop** (`#0064E0`): bottom-left anchor.
- **Gradient Light Stop** (`#0082FB`): top-right luminance.

### Semantic
- **Success Green** (`#42B72A`): Positive confirmations, online presence, completed states. (Legacy Facebook green, retained for system semantics.)
- **Error Red** (`#FA383E`): Errors, destructive actions, validation failures.
- **Warning Amber** (`#F5A623`): Caution, pending, attention-needed.
- **Info Blue** (`#0064E0`): Informational accents reuse the primary blue.

### Neutral Scale
- **Ink 900** (`#1C2B33`): Primary text, dark surfaces. The brand near-black.
- **Ink 800** (`#2D3A42`): Strong labels, dark-surface elevation.
- **Gray 700** (`#465A69`): Emphasized body, sub-headings.
- **Gray 600** (`#65676B`): Body text, descriptions (Facebook system secondary text).
- **Gray 500** (`#8A8D91`): Caption text, secondary labels, metadata.
- **Gray 400** (`#BCC0C4`): Placeholder text, disabled icon fills, dividers.
- **Gray 200** (`#E4E6EB`): Default border, divider, input fill on light.
- **Gray 100** (`#F0F2F5`): Secondary background, card fills, the classic Facebook canvas gray.
- **Gray 50** (`#F7F8FA`): Lightest surface tint.

### Surface & Borders
- **Border Default**: `#E4E6EB`. Standard card borders, dividers, input outlines.
- **Border Strong**: `#CED0D4`. Emphasized borders, active input outline base.
- **Surface Raised**: `#FFFFFF` on a `#F0F2F5` canvas — the core Facebook layering pattern.
- **Overlay Scrim**: `rgba(28,43,51,0.6)`. Modal backdrops, ink-tinted dimming.

## 3. Typography Rules

### Font Family
- **Display**: `"Optimistic Display", "Helvetica Neue", Helvetica, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Text**: `"Optimistic Text", "Helvetica Neue", Helvetica, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **System fallback** (Facebook product surfaces): `system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`

Optimistic Display is tuned for large headline sizes; Optimistic Text is tuned for legibility at reading sizes. Use Display ≥ 24px, Text < 24px.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Optimistic Display | 56px | 700 | 60px (1.07) | -0.02em | Marketing hero headlines |
| Display Large | Optimistic Display | 40px | 700 | 48px (1.20) | -0.01em | Section headers |
| Display | Optimistic Display | 32px | 600 | 40px (1.25) | -0.01em | Feature titles |
| Heading | Optimistic Display | 24px | 600 | 32px (1.33) | normal | Card headings, modal titles |
| Subtitle | Optimistic Text | 20px | 600 | 28px (1.40) | normal | Sub-section, list headers |
| Body Large | Optimistic Text | 17px | 400 | 26px (1.53) | normal | Lead paragraphs |
| Body | Optimistic Text | 15px | 400 | 22px (1.47) | normal | Standard reading text (FB body size) |
| Body Small | Optimistic Text | 13px | 400 | 18px (1.38) | normal | Secondary info |
| Caption | Optimistic Text | 12px | 400 | 16px (1.33) | normal | Timestamps, fine print |
| Button Label | Optimistic Text | 15px | 600 | 20px (1.33) | normal | CTA labels |

### Principles
- **Display vs Text split**: Optimistic Display for ≥24px headlines (tight tracking, optical display weighting), Optimistic Text for body (looser tracking, larger x-height).
- **Three core weights**: 400 (body), 600 (emphasis/buttons), 700 (display headlines). Restraint over variety.
- **Negative tracking at scale**: Large display sizes tighten to `-0.01em`/`-0.02em`; body stays at normal tracking.
- **Roomy line-height for reading**: Body at ~1.47 keeps the dense social feed scannable.

## 4. Component Stylings

### Buttons

Meta/Facebook buttons favor large radii (often full pill on marketing surfaces, ~8px on product) and the blue gradient or solid Meta Blue for primary.

**Primary (Gradient)**
- Background: `linear-gradient(120deg, #0064E0 0%, #0082FB 100%)`
- Text: `#FFFFFF`
- Border: none
- Radius: 28px (pill on marketing) / 8px (product)
- Padding: 14px 28px
- Font: 15px / 600 / Optimistic Text
- Hover: brightness lift, light stop pushed to `#0A8CFF`
- Pressed: `#0058C4` solid overlay
- Disabled: opacity 0.4
- Use: Primary CTA on light surfaces ("Get started", "Learn more") — ~48px tall

**Primary (Solid)**
- Background: `#0064E0`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 12px 20px
- Font: 15px / 600 / Optimistic Text
- Hover: `#0058C4`
- Use: Product-surface primary action (Facebook/Instagram web parity)

**Secondary**
- Background: `#E4E6EB` (Gray 200)
- Text: `#1C2B33`
- Border: none
- Radius: 8px
- Padding: 12px 20px
- Font: 15px / 600 / Optimistic Text
- Hover: `#D8DADF`
- Use: Neutral secondary action paired with a primary

**Outline**
- Background: transparent
- Text: `#0064E0`
- Border: 1.5px solid `#0064E0`
- Radius: 28px / 8px
- Padding: 12px 24px
- Font: 15px / 600 / Optimistic Text
- Hover: `rgba(0,100,224,0.06)` fill
- Use: Tertiary CTA, "Sign up" alongside a gradient primary

**Ghost / Text**
- Background: transparent
- Text: `#0064E0`
- Border: none
- Radius: 6px
- Padding: 8px 12px
- Font: 15px / 600 / Optimistic Text
- Hover: `rgba(0,100,224,0.06)` fill
- Use: Inline links-as-buttons, low-emphasis actions

### Inputs

**Default (Box)**
- Background: `#FFFFFF`
- Text: `#1C2B33`
- Border: 1px solid `#CED0D4`
- Radius: 8px
- Padding: 12px 14px
- Font: 15px / 400 / Optimistic Text
- Placeholder: `#8A8D91`
- Focus: border `#0064E0` + `0 0 0 3px rgba(0,100,224,0.18)` ring
- Use: Standard form input

**Filled**
- Background: `#F0F2F5`
- Text: `#1C2B33`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 12px 14px
- Font: 15px / 400 / Optimistic Text
- Focus: bg `#FFFFFF`, border `#0064E0`
- Use: Search bars, dense forms (classic FB search-field look)

**Error**
- Background: `#FFFFFF`
- Text: `#1C2B33`
- Border: 1px solid `#FA383E`
- Radius: 8px
- Padding: 12px 14px
- Font: 15px / 400 / Optimistic Text
- Focus: `0 0 0 3px rgba(250,56,62,0.18)` ring
- Use: Validation failure — paired with red helper text below

### Cards

**Standard**
- Background: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 16px
- Shadow: `0 1px 2px rgba(28,43,51,0.10)`
- Use: Feed cards, content panels — the workhorse surface on `#F0F2F5` canvas

**Featured**
- Background: `#FFFFFF`
- Border: none
- Radius: 16px
- Padding: 24px
- Shadow: `0 4px 16px rgba(28,43,51,0.12)`
- Use: Marketing promo cards, hero modules

**Gradient Hero**
- Background: `linear-gradient(120deg, #0064E0 0%, #0082FB 100%)`
- Text: `#FFFFFF`
- Border: none
- Radius: 20px
- Padding: 32px
- Shadow: `0 8px 32px rgba(0,100,224,0.30)`
- Use: Brand hero blocks — the one place a colored shadow is licensed

**Compact (Bordered)**
- Background: `#FFFFFF`
- Border: 1px solid `#E4E6EB`
- Radius: 8px
- Padding: 12px
- Shadow: none
- Use: Inline list items where a 1px edge replaces shadow

### Badges

**Notification (count)**
- Background: `#FA383E`
- Text: `#FFFFFF`
- Border: 2px solid `#FFFFFF`
- Radius: 9999px
- Padding: 2px 6px
- Font: 12px / 700 / Optimistic Text
- Use: Unread counts on nav icons (the iconic FB red dot)

**Status / Pill**
- Background: `rgba(0,100,224,0.12)`
- Text: `#0064E0`
- Border: none
- Radius: 9999px
- Padding: 4px 10px
- Font: 12px / 600 / Optimistic Text
- Use: "New", category tags, soft informational labels

**Success Pill**
- Background: `rgba(66,183,42,0.14)`
- Text: `#2E8B1E`
- Border: none
- Radius: 9999px
- Padding: 4px 10px
- Font: 12px / 600 / Optimistic Text
- Use: Active / online / completed status

### Tabs

**Top Tab (Active)**
- Background: transparent
- Text: `#0064E0`
- Indicator: 3px bottom border `#0064E0`
- Inactive text: `#65676B`
- Font: 15px / 600 / Optimistic Text
- Use: In-page section navigation (FB profile tabs pattern)

**Segmented**
- Background: `#F0F2F5`
- Text: `#65676B`
- Border: none
- Radius: 8px
- Padding: 8px 16px
- Active: `#FFFFFF` bg + `#1C2B33` text + `0 1px 2px rgba(28,43,51,0.10)` shadow
- Font: 14px / 600 / Optimistic Text
- Use: Mode switching within a panel

### Toasts

**Default**
- Background: `#1C2B33`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0 4px 12px rgba(28,43,51,0.24)`
- Font: 14px / 500 / Optimistic Text
- Use: Transient confirmation ("Link copied"), bottom-anchored, 3s auto-dismiss

### Dialogs

**Centered Modal**
- Background: `#FFFFFF`
- Text: `#1C2B33`
- Border: none
- Radius: 12px
- Padding: 24px
- Shadow: `0 12px 28px rgba(28,43,51,0.20)`
- Backdrop: `rgba(28,43,51,0.6)`
- Use: Confirmations, composer dialogs, settings prompts

### Toggles

**Default**
- Background: `#0064E0` (on) / `#BCC0C4` (off)
- Border: none
- Radius: 9999px
- Thumb: `#FFFFFF` 20px circle with `0 1px 3px rgba(28,43,51,0.20)` shadow
- Use: Boolean settings, notification preferences

---

**Verified:** 2026-06-06
**Tier 1 sources:** about.meta.com / meta.com (live brand surface — blue gradient, Optimistic type, infinity mark); design.facebook.com/stories/designing-our-new-company-brand-meta (official rebrand story — gradient, infinity, Optimistic typeface) · https://about.meta.com (live production site)
**Tier 2 sources:** brandpalettes.com/meta-color-codes, brandcolorcode.com/meta-platforms (corroborate `#0082FB`, `#0064E0`, `#1C2B33`). Product-surface neutrals (`#F0F2F5`, `#65676B`, `#E4E6EB`, `#42B72A`) are documented Facebook system tokens.
**Surface split:** §4 documents both the **Meta marketing brand** (gradient CTAs, pill radii, Optimistic Display) and the **Facebook/Instagram product** lineage (solid `#0064E0`, 8px radii, `#F0F2F5` canvas). Both retained as parallel systems.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px, 96px
- Horizontal page gutter: 16px mobile, 24px tablet, growing to centered max-width on desktop
- Card internal padding: 16px (standard), 24px (featured)

### Grid & Container
- Marketing: 12-column grid, max content width ~1200px, centered
- Product (Facebook web): three-column shell — left rail, center feed (~600px), right rail
- Center feed column is the canonical content measure: ~500–600px for readability
- Mobile-first collapse to a single column under 768px

### Whitespace Philosophy
- **Room to breathe at brand moments**: hero sections use 96px+ vertical rhythm so the gradient and headline dominate.
- **Dense but layered in product**: the feed packs cards tightly on a `#F0F2F5` canvas, each card lifted on white — density without clutter.
- **Grouped by relationship**: related actions cluster at 8–12px gaps; distinct sections separate by 32–48px.

### Border Radius Scale
- Compact (6px): ghost buttons, small chips
- Standard (8px): inputs, product buttons, compact cards
- Comfortable (12px): standard cards, dialogs
- Large (16–20px): featured cards, gradient heroes
- Pill (28px / 9999px): marketing CTAs, badges, toggles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page canvas, inline elements |
| Subtle (Level 1) | `0 1px 2px rgba(28,43,51,0.10)` | Feed cards, list separation |
| Standard (Level 2) | `0 4px 16px rgba(28,43,51,0.12)` | Featured cards, raised panels |
| Elevated (Level 3) | `0 8px 24px rgba(28,43,51,0.16)` | Dropdowns, popovers, menus |
| Modal (Level 4) | `0 12px 28px rgba(28,43,51,0.20)` | Dialogs, composer modals |
| Brand Glow | `0 8px 32px rgba(0,100,224,0.30)` | Gradient hero only — licensed colored shadow |

**Shadow Philosophy**: Meta uses ink-tinted (`#1C2B33`-based) neutral shadows for the product layering that defines Facebook's white-on-gray feel — elevation is communicated by lifting white cards off the `#F0F2F5` canvas. The *only* place a colored shadow appears is the brand gradient hero, where a blue glow reinforces the gradient's energy. Depth implies the company's third-dimension (immersive) ambition without literal skeuomorphism.

### Blur Effects
- Sticky headers apply subtle backdrop blur on scroll
- Overlay menus and the gradient hero may use a soft `backdrop-filter: blur(8px)` over imagery

## 7. Do's and Don'ts

### Do
- Use the Meta Blue gradient (`#0064E0` → `#0082FB`) for brand hero moments and primary marketing CTAs
- Use solid `#0064E0` for product-surface interactive elements (links, buttons, focus)
- Use Optimistic Display for headlines ≥24px, Optimistic Text for body
- Lift white cards off the `#F0F2F5` canvas with subtle ink-tinted shadows
- Use `#1C2B33` for text, never pure `#000000`
- Reserve the blue gradient for brand energy — it should feel special
- Use pill radii (28px+) on marketing CTAs, 8px on product surfaces

### Don't
- Don't blend the gradient with off-brand hues — it is always blue-to-blue
- Don't use the legacy flat Facebook `#1877F2` as the Meta brand color
- Don't apply colored shadows anywhere except the gradient hero
- Don't use pure black text or pure black backgrounds — use `#1C2B33`
- Don't mix Optimistic Display tracking onto small body text
- Don't overuse the gradient — once per view at most; it loses meaning if everywhere
- Don't set body weight above 400 except for emphasis (600) and headlines (700)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, 16px gutter, bottom nav, stacked hero |
| Tablet | 768–1024px | Two columns, 24px gutter, side margins appear |
| Desktop | 1024–1440px | Three-column product shell / 12-col marketing grid |
| Wide | >1440px | Centered max-width ~1200px, larger hero type |

### Touch Targets
- Buttons: minimum 44px height (48px for primary CTA)
- Icon buttons: 40px tap target minimum
- List rows: 48px+ minimum height

### Collapsing Strategy
- Three-column product shell collapses: right rail drops first, then left rail becomes a drawer
- Marketing hero stacks media below headline on mobile
- Sticky top nav becomes a bottom tab bar on mobile product surfaces
- Horizontal card carousels for discovery sections

### Image Behavior
- Hero imagery: full-bleed, gradient overlay for text legibility
- Avatars: circular, 40px standard, 24px compact, 56px+ profile
- Media in cards: full-width, rounded to card radius, aspect-ratio preserved

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Meta Blue (`#0064E0`)
- Brand Gradient: `linear-gradient(120deg, #0064E0, #0082FB)`
- CTA Hover: `#0058C4`
- Background (product): Light Gray (`#F0F2F5`)
- Background (marketing): White (`#FFFFFF`)
- Heading text: Meta Ink (`#1C2B33`)
- Body text: Gray (`#65676B`)
- Caption text: Gray (`#8A8D91`)
- Placeholder: Gray (`#8A8D91`)
- Border: Gray 200 (`#E4E6EB`)
- Success: Green (`#42B72A`)
- Error: Red (`#FA383E`)
- Warning: Amber (`#F5A623`)

### Example Component Prompts
- "Create a gradient hero CTA: `linear-gradient(120deg,#0064E0,#0082FB)` bg, white text 15px weight 600, 28px radius, 14px 28px padding, brand glow shadow `0 8px 32px rgba(0,100,224,0.30)`."
- "Build a feed card: white bg, 12px radius, 16px padding, shadow `0 1px 2px rgba(28,43,51,0.10)` on a `#F0F2F5` canvas. Header avatar 40px circle + name 15px weight 600 #1C2B33 + timestamp 12px #8A8D91."
- "Design a search field: `#F0F2F5` filled bg, 8px radius, 12px 14px padding, 15px text #1C2B33, placeholder #8A8D91. Focus: white bg, 1px #0064E0 border, 3px rgba(0,100,224,0.18) ring."
- "Create a notification badge: #FA383E bg, white 12px weight 700 text, 9999px radius, 2px white border, 2px 6px padding, anchored top-right of a nav icon."
- "Design a primary product button: #0064E0 bg, white 15px weight 600, 8px radius, 12px 20px padding. Hover #0058C4. Disabled opacity 0.4."

### Iteration Guide
1. Use Optimistic Display for headlines (≥24px), Optimistic Text for body, with Helvetica/system fallbacks
2. Primary interactive color is `#0064E0`; brand gradient `#0064E0→#0082FB` is for hero/brand moments only
3. Text ink is `#1C2B33`, body gray `#65676B`, never pure black
4. Product surfaces: lift white cards off `#F0F2F5` canvas with subtle ink shadows
5. Radii: 8px product, 28px+ pill on marketing, 12px cards, 16–20px featured
6. Colored shadow only on the gradient hero; everywhere else ink-tinted neutral
7. Mobile-first; three-column product shell collapses right→left

---

## 10. Voice & Tone

Meta speaks with the optimism of a company betting on connection and the next computing platform — confident, forward-looking, plainspoken, and warm. It avoids hype-jargon where it can, favoring clear human sentences over technobabble. Copy is inclusive and second-person ("Build the future with us", "Connect with the people and things you love"). The tone is aspirational at the brand layer and utilitarian-friendly at the product layer.

| Context | Tone |
|---|---|
| CTAs | Imperative, short, optimistic (`Get started`, `Learn more`, `Build with Meta`) |
| Success toasts | Plain past-tense single line (`Link copied`, `Changes saved`). No exclamation spam. |
| Error messages | Specific, blameless, actionable. `Something went wrong. Try again.` only as last resort. |
| Onboarding | Second-person, one idea per step, warm and encouraging |
| Brand / mission | Aspirational, future-tense, connection-centered (`Bringing the metaverse to life`) |
| Empty states | Explain why it's empty + one action. Friendly, never cold. |
| Legal / privacy | Clear, direct, no dark patterns in copy — plainspoken consent language |

**Forbidden patterns.** Over-hyped superlatives ("revolutionary", "game-changing"), fear-based urgency, pure-black `#000000` text, the legacy flat `#1877F2` as a brand mark, gradient blends with non-blue hues.

## 11. Brand Narrative

In **October 2021**, Facebook, Inc. rebranded its parent company to **Meta**, signaling a strategic pivot from a single social network to a company organized around connection across social, devices, and the immersive web. The name derives from the Greek "beyond"; the **infinity mark** — a continuous 3D loop — was designed to live natively in both 2D screens and 3D/AR space, embodying "unlimited potential" and the company's bet on spatial computing.

The brand deliberately moved past Facebook's flat, utilitarian `#1877F2` blue. Meta's blue **gradient** (`#0064E0` deep, trustworthy; `#0082FB` bright, intelligent) carries forward the heritage blue while adding depth and motion — a literal third dimension that mirrors the immersive-computing thesis. A near-black `#1C2B33` (blue-gray, not pure black) signals stability and grounds the energetic blue. The custom **Optimistic** typeface superfamily was built to keep a planet-scale interface feeling human and warm rather than corporate and cold.

Meta operates a family of products — Facebook, Instagram, WhatsApp, Messenger, Threads — alongside Reality Labs hardware (Quest, Ray-Ban Meta glasses) and large-scale AI. The design system must therefore flex from dense, utilitarian product surfaces (the Facebook feed on its `#F0F2F5` canvas, packed with white cards) to expansive, gradient-washed brand and hardware marketing. The connective tissue is the blue gradient, the infinity mark, the Optimistic type, and a discipline of reserving brand energy for moments that earn it.

What Meta refuses: the cold institutional seriousness of legacy enterprise tech, the flat single-blue of old Facebook, and hype-driven copy that overpromises. It occupies a confident middle — big-tech scale with a human, optimistic surface.

## 12. Principles

1. **The gradient is brand energy — spend it carefully.** `#0064E0→#0082FB` appears at hero and primary-CTA moments, not as wallpaper. Used everywhere, it means nothing; used once per view, it sings.
2. **Depth implies the third dimension.** Shadows, the gradient, and the infinity loop all hint at spatial computing. Elevation is intentional, not decorative.
3. **Lift white off gray.** The core product pattern is white cards on a `#F0F2F5` canvas. Hierarchy comes from layering, not borders.
4. **Ink, not black.** `#1C2B33` everywhere a designer would reach for `#000000`. The warmth keeps a trillion impressions human.
5. **Display for headlines, Text for reading.** Optimistic Display ≥24px with tight tracking; Optimistic Text below, looser, larger x-height.
6. **Human optimism over hype.** Copy is confident and plainspoken. No fear-urgency, no empty superlatives.
7. **One blue, two roles.** Solid `#0064E0` is interaction (product); the gradient is brand (marketing). Don't confuse the two on a single surface.
8. **Scale demands restraint.** With billions of users, every ornamental choice multiplies. Default to the minimal, accessible option.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Meta product user segments, not individual people.*

**Maya, 24, Austin TX.** Creator and student. Lives in Instagram and Threads, posts daily, runs a small shop. Expects the interface to disappear behind her content — fast composer, frictionless upload, vivid media. The blue gradient reads to her as "the brand"; she notices when a CTA feels on-brand versus off. Mobile-first to the point that desktop is an afterthought.

**David, 41, Chicago.** Marketing manager who runs ad campaigns through Meta Business tools. Power user of dense, utilitarian product surfaces — tables, filters, dashboards on the `#F0F2F5` canvas. Values clarity and information density over polish. Trusts the blue for primary actions; wants secondary actions clearly de-emphasized in gray. Switches between desktop dashboards and mobile checks.

**Priya, 33, London.** Reality Labs early adopter — owns a Quest and Ray-Ban Meta glasses. Encounters the brand across hardware marketing, in-headset UI, and companion apps. Sensitive to the gradient and infinity mark as signals of the immersive-future story. Expects depth, motion, and a premium-but-optimistic tone. The consistency of Meta Blue across 2D and spatial surfaces is what makes the ecosystem feel coherent to her.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | Friendly single-line explainer in `#65676B` body text + one primary action (`#0064E0` button). Light illustration acceptable on marketing, omitted on dense product. |
| **Empty (no results)** | Single `#8A8D91` caption line (`No results found`). Optional "Clear filters" ghost button. |
| **Loading (first paint)** | Skeleton blocks at `#E4E6EB` matching final layout, 1.2s shimmer with white highlight. Rounded at component radius. |
| **Loading (refresh)** | Top pull-down spinner in `#0064E0`. Content stays visible with previous values; no blocking overlay. |
| **Error (inline field)** | `#FA383E` 1px border + `0 0 0 3px rgba(250,56,62,0.18)` ring, red helper text 13px below. One actionable sentence. |
| **Error (toast)** | `#1C2B33` bg, white 14px text, 3s auto-dismiss, bottom-anchored. One sentence. |
| **Error (screen-blocking)** | Reserved for outage. Centered `#1C2B33` 17px weight 600 message, `#0064E0` retry button below. |
| **Success (toast)** | `#1C2B33` bg, white text, optional `#42B72A` check icon. `Saved`, `Posted`. 3s dismiss. |
| **Success (inline)** | Brief `rgba(66,183,42,0.14)` flash behind the updated element, 300ms fade. |
| **Disabled** | Opacity 0.4 on the element. Inputs keep their `#CED0D4` border so geometry is stable when re-enabled. |
| **Focus** | `#0064E0` border + `0 0 0 3px rgba(0,100,224,0.18)` ring on all interactive elements. Always visible for accessibility. |
| **Hover (button)** | Solid blue darkens to `#0058C4`; gradient brightens its light stop. 150ms ease. |

## 15. Motion & Easing

**Durations** (named):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State flips when reduced-motion is set |
| `motion-fast` | 150ms | Hover, focus, button press, small reveals |
| `motion-standard` | 250ms | Default — menus, card expand, tab switch |
| `motion-slow` | 400ms | Emphasized — modal entrance, success confirmation |
| `motion-page` | 350ms | Route transitions, full-screen pushes |
| `motion-brand` | 600ms | Gradient hero reveal, infinity-mark animation |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — menus, sheets, toasts |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — collapsibles, tab content |
| `ease-brand` | `cubic-bezier(0.22, 1, 0.36, 1)` | Gradient reveals, infinity loop — smooth, premium overshoot-free glide |

**Signature motions.**

1. **Gradient reveal.** Hero gradients animate their angle/position subtly over `motion-brand` with `ease-brand`, giving the brand surface a living, three-dimensional shimmer without distracting from content.
2. **Infinity-mark loop.** The brand mark traces its continuous 3D loop on `ease-brand` — fluid, seamless, never snapping. It loops slowly to imply "unlimited" rather than spin frantically.
3. **Card lift.** On hover, feed/marketing cards lift via shadow deepening (`Level 1 → Level 2`) over `motion-fast` with `ease-standard`. A subtle 1–2px translateY reinforces the rise off the gray canvas.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; gradient/infinity animations freeze to a static frame; slides become crossfades. The product stays fully usable.

<!--
OmD v0.1 Sources

WebSearch (2026-06-06): Meta brand color codes corroborated across
brandpalettes.com/meta-color-codes, brandcolorcode.com/meta-platforms,
designpieces.com — confirming #0082FB (light blue), #0064E0 (blue),
#1C2B33 (gray/ink). Typography: Optimistic Display + Optimistic Text
(custom superfamily). Logo: infinity mark, blue gradient, per
design.facebook.com/stories/designing-our-new-company-brand-meta.

WebFetch (2026-06-06): about.meta.com 301-redirects to www.meta.com/about.
Brand-surface reading of gradient + Optimistic type is consistent with the
official rebrand story.

Facebook product-surface neutrals (#F0F2F5 canvas, #65676B secondary text,
#E4E6EB border, #42B72A green, #FA383E red, #1877F2 legacy blue) are
widely documented Facebook design-system tokens used here as the product
lineage that Meta's marketing brand sits atop.

Personas (§13) are fictional archetypes informed by publicly described
Meta product user segments. Interpretive claims (gradient = third dimension /
immersive thesis) are editorial readings of the published rebrand, not
verbatim Meta statements.
-->

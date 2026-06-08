---
id: dell
name: Dell
country: US
category: consumer-tech
homepage: "https://www.dell.com"
primary_color: "#0076CE"
logo:
  type: simpleicons
  slug: "dell"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#0076CE"
    primary-hover: "#0063AF"
    primary-active: "#00538F"
    blue-tint: "#E5F1FA"
    canvas: "#ffffff"
    band: "#F7F8FA"
    heading: "#11141a"
    navy: "#0E1B2C"
    body: "#4C545E"
    caption: "#6B7480"
    placeholder: "#9AA3AE"
    label: "#22262B"
    border: "#DDE1E6"
    border-strong: "#C5CBD3"
    fill: "#EEF0F3"
    success: "#008A00"
    success-bg: "#E6F4E6"
    error: "#CE2029"
    warning: "#B85C00"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Roboto", mono: "Roboto Mono" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.17, tracking: -0.5, use: "Marketing hero headlines" }
    display-lg:   { size: 36, weight: 700, lineHeight: 1.22, tracking: -0.25, use: "Landing section headers" }
    h1:           { size: 28, weight: 700, lineHeight: 1.29, use: "Page titles, PDP product name" }
    h2:           { size: 22, weight: 500, lineHeight: 1.36, use: "Section headings, card titles" }
    h3:           { size: 18, weight: 500, lineHeight: 1.44, use: "Sub-sections, spec group labels" }
    subtitle:     { size: 16, weight: 500, lineHeight: 1.50, use: "List headers, emphasized labels" }
    body-lg:      { size: 16, weight: 400, lineHeight: 1.50, use: "Descriptions, marketing copy" }
    body:         { size: 14, weight: 400, lineHeight: 1.43, use: "Standard reading text, spec rows" }
    body-sm:      { size: 13, weight: 400, lineHeight: 1.38, use: "Secondary info, table cells" }
    caption:      { size: 12, weight: 400, lineHeight: 1.33, tracking: 0.2, use: "Legal, fine print, timestamps" }
    price:        { size: 28, weight: 700, use: "Product price, tabular numerals" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 8, full: 9999 }
  shadow:
    subtle: "0 1px 3px rgba(17,20,26,0.08)"
    standard: "0 4px 12px rgba(17,20,26,0.10)"
    elevated: "0 8px 24px rgba(17,20,26,0.14)"
    modal: "0 8px 32px rgba(17,20,26,0.20)"
  components:
    button-primary: { type: button, bg: "#0076CE", fg: "#ffffff", radius: 4, padding: "0 24px", font: "14px/500 Roboto", use: "Primary commerce CTA (Add to Cart, Buy Now)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#0076CE", radius: 4, padding: "0 24px", font: "14px/500 Roboto", use: "Secondary action (Compare, Learn More)" }
    button-tertiary: { type: button, bg: "transparent", fg: "#0076CE", radius: 4, padding: "0 8px", font: "14px/500 Roboto", use: "Low-emphasis inline action (View details, Remove)" }
    button-dark: { type: button, bg: "#11141a", fg: "#ffffff", radius: 4, padding: "0 24px", font: "14px/500 Roboto", use: "High-contrast marketing CTA" }
    button-danger: { type: button, bg: "#CE2029", fg: "#ffffff", radius: 4, padding: "0 24px", font: "14px/500 Roboto", use: "Destructive confirmation" }
    input: { type: input, bg: "#ffffff", fg: "#22262B", radius: 4, padding: "10px 12px", font: "14px/400 Roboto", use: "Standard form input" }
    product-card: { type: card, bg: "#ffffff", radius: 8, padding: "16px", use: "Grid product tile" }
    promo-card: { type: card, bg: "#0E1B2C", fg: "#ffffff", radius: 8, padding: "24px", use: "Dark promotional banner card" }
    badge-deal: { type: badge, bg: "#CE2029", fg: "#ffffff", radius: 4, padding: "2px 8px", font: "12px/700 Roboto", use: "Save $X, Clearance, Doorbuster" }
    badge-instock: { type: badge, bg: "#E6F4E6", fg: "#008A00", radius: 4, padding: "2px 8px", font: "12px/500 Roboto", use: "Availability indicator" }
    badge-new: { type: badge, bg: "#E5F1FA", fg: "#0076CE", radius: 4, padding: "2px 8px", font: "12px/700 Roboto", use: "Newly released product" }
    badge-neutral: { type: badge, bg: "#EEF0F3", fg: "#4C545E", radius: 4, padding: "2px 8px", font: "12px/500 Roboto", use: "Category tags, metadata chips" }
    tab: { type: tab, bg: "#ffffff", fg: "#6B7480", font: "14px/500 Roboto", active: "2px bottom border #0076CE, text #11141a", use: "PDP sections, account dashboard" }
    toast: { type: toast, bg: "#11141a", fg: "#ffffff", radius: 4, padding: "12px 16px", font: "14px/400 Roboto", use: "Transient confirmation" }
    dialog: { type: dialog, bg: "#ffffff", fg: "#11141a", radius: 8, padding: "24px", use: "Configuration confirm, cart review, sign-in" }
    toggle: { type: toggle, bg: "#0076CE", radius: 9999, use: "Boolean preferences (on track blue, off #C5CBD3)" }
  components_harvested: true
---

# Design System Inspiration of Dell

## 1. Visual Theme & Atmosphere

Dell is one of the world's largest hardware makers, and its digital surfaces carry the weight of that scale: a global commerce engine selling laptops, monitors, servers, and workstations to consumers, gamers, small businesses, and Fortune 500 IT departments simultaneously. The interface has to feel **trustworthy, efficient, and calmly authoritative** -- this is where someone configures a $4,000 workstation or a $400 laptop, and the design's job is to make a high-consideration purchase feel safe and straightforward.

The page opens on a clean white canvas (`#ffffff`) with a near-black slate text color (`#11141a`) and the signature **Dell Blue (`#0076CE`)** as the universal interactive accent. This blue is the brand's anchor -- a mid-tone, slightly cool cerulean (Pantone 2174 C) that reads as professional yet approachable. It is not the cold navy of legacy enterprise IT, nor the playful azure of consumer apps; it sits deliberately in the middle, signaling reliability without coldness. Dell uses it sparingly and intentionally: on CTAs, links, focus rings, and selection states, never as decoration.

The typographic voice is **Roboto** -- Google's open-source neo-grotesque -- chosen for its geometric clarity, screen legibility at every size, and zero licensing friction across Dell's vast web estate. Roboto's mechanical-but-friendly letterforms echo the engineered precision of the hardware Dell sells. For corporate identity and high-end marketing, Dell layers in **Dell Replica**, a custom cut of the LL Replica typeface, but the digital product UI runs almost entirely on Roboto.

What defines Dell visually is **commerce-grade clarity**: dense product grids, scannable spec tables, persistent price and "Add to Cart" affordances, and a restrained palette that lets product photography (the hardware itself) be the hero. Shadows are subtle, radii are modest, and the grid is rigorous. This is a system optimized for comparison, configuration, and conversion at planetary scale.

**Key Characteristics:**
- Dell Blue (`#0076CE`) as the primary interactive color -- professional, trustworthy, mid-tone
- Roboto as the primary digital typeface; Dell Replica for corporate/marketing identity
- White-dominant surfaces (`#ffffff`) with cool-neutral gray scaffolding
- Commerce-first layout: product grids, spec tables, persistent price/CTA
- Restrained, modest depth -- shadows support hierarchy, never decorate
- Near-black slate text (`#11141a`) rather than pure black for reduced harshness
- 4px base spacing grid, 4px corner radius as the system default

## 2. Color Palette & Roles

### Primary
- **Dell Blue** (`#0076CE`): The brand anchor and primary interactive color -- CTAs, primary buttons, links, active states, focus rings. Pantone 2174 C, RGB (0, 118, 206).
- **Dell Blue Hover** (`#0063AF`): Darker hover/pressed state for blue elements (~12% darkened).
- **Dell Blue Active** (`#00538F`): Deepest pressed/active state for primary buttons.
- **Blue Tint** (`#E5F1FA`): Subtle blue-tinted surface for informational backgrounds, selected rows, hover fills.
- **Pure White** (`#ffffff`): Page background, card surface, the dominant canvas.
- **Slate Ink** (`#11141a`): Primary heading and body text. Near-black with a cool undertone -- softer than pure `#000000`.

### Brand (Logo/Marketing)
- **Dell Blue** (`#0076CE`): The corporate logo color and primary brand mark. Used on the Dell roundel and wordmark.
- **Midnight Navy** (`#0E1B2C`): Deep brand navy for premium marketing surfaces, footers, and dark-mode hero bands.
- **Carbon Black** (`#000000`): Reserved for high-contrast brand statements and print; not used for body text.

### Semantic
- **Success Green** (`#008A00`): In-stock indicators, order confirmations, positive validation, savings callouts.
- **Error Red** (`#CE2029`): Form errors, out-of-stock, destructive actions, price-increase warnings.
- **Warning Amber** (`#B85C00`): Low-stock, pending order states, attention-needed notices.
- **Info Blue** (`#0076CE`): Informational banners and tooltips reuse Dell Blue.
- **Deal Red** (`#CE2029`): Promotional "Save $X" and clearance pricing emphasis.

### Neutral Scale (Cool Gray)
- **Gray 50** (`#F7F8FA`): Lightest fill -- page section bands, app background.
- **Gray 100** (`#EEF0F3`): Card fills, disabled surfaces, table zebra stripes.
- **Gray 200** (`#DDE1E6`): Default border color, dividers, input outlines.
- **Gray 300** (`#C5CBD3`): Emphasized borders, active input outlines.
- **Gray 400** (`#9AA3AE`): Placeholder text, disabled icon fills.
- **Gray 500** (`#6B7480`): Caption text, secondary metadata.
- **Gray 600** (`#4C545E`): Body text on white, descriptions.
- **Gray 700** (`#363B42`): Emphasized body, sub-headings.
- **Gray 800** (`#22262B`): Strong labels, navigation text.
- **Gray 900** (`#11141a`): Primary headings, strongest text (Slate Ink).

### Surface & Borders
- **Border Default**: `#DDE1E6` (gray200). Card borders, input borders, table dividers.
- **Border Strong**: `#C5CBD3` (gray300). Active inputs, emphasized separators.
- **Surface Raised**: `#ffffff` with shadow. Floating panels, dropdowns, popovers.
- **Overlay Scrim**: `rgba(14, 27, 44, 0.6)`. Dark navy-tinted modal backdrop.

## 3. Typography Rules

### Font Family
- **Primary**: `Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Brand/Display**: `"Dell Replica", Roboto, sans-serif` -- corporate identity and marketing headlines only
- **Monospace**: `"Roboto Mono", "SF Mono", Menlo, Consolas, monospace` -- spec codes, part numbers, service tags

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Roboto | 48px | 700 | 56px (1.17) | -0.5px | Marketing hero headlines |
| Display Large | Roboto | 36px | 700 | 44px (1.22) | -0.25px | Landing section headers |
| Heading 1 | Roboto | 28px | 700 | 36px (1.29) | normal | Page titles, PDP product name |
| Heading 2 | Roboto | 22px | 500 | 30px (1.36) | normal | Section headings, card titles |
| Heading 3 | Roboto | 18px | 500 | 26px (1.44) | normal | Sub-sections, spec group labels |
| Subtitle | Roboto | 16px | 500 | 24px (1.50) | normal | List headers, emphasized labels |
| Body Large | Roboto | 16px | 400 | 24px (1.50) | normal | Descriptions, marketing copy |
| Body | Roboto | 14px | 400 | 20px (1.43) | normal | Standard reading text, spec rows |
| Body Small | Roboto | 13px | 400 | 18px (1.38) | normal | Secondary info, table cells |
| Caption | Roboto | 12px | 400 | 16px (1.33) | 0.2px | Legal, fine print, timestamps |
| Price Display | Roboto | 28px | 700 | tight | normal | Product price -- tabular numerals |

### Principles
- **Roboto in three core weights**: 400 (Regular, body), 500 (Medium, headings/labels), 700 (Bold, display/price). Light (300) appears only in large marketing display.
- **Tabular numerals for commerce**: Prices, spec quantities, and quote tables use tabular (fixed-width) figures so columns align cleanly.
- **Negative tracking on display**: Large headlines (28px+) get -0.25px to -0.5px letter-spacing for a tighter, engineered look.
- **Sentence case dominant**: Headings and UI labels use sentence case; ALL-CAPS reserved for tiny eyebrow labels with +0.5px tracking.
- **Spec-table legibility**: Body Small (13px/400) is the workhorse for dense spec comparison tables; line height stays generous (1.38) to keep rows scannable.

## 4. Component Stylings

### Buttons

Dell's button system is a **variant × size** model. Primary actions ("Add to Cart", "Buy Now", "Customize & Buy") drive commerce; the default size is medium (40px). Radius is a tight 4px throughout, reinforcing the engineered, utilitarian feel.

**Primary (Fill)**
- Background: `#0076CE`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 0 24px
- Font: 14px / 500 / Roboto
- Height: 40px
- Hover: bg `#0063AF`
- Active: bg `#00538F`
- Disabled: bg `#C5CBD3`, text `#ffffff`
- Use: Primary commerce CTA (Add to Cart, Buy Now)

**Secondary (Outline)**
- Background: `#ffffff`
- Text: `#0076CE`
- Border: 1px solid `#0076CE`
- Radius: 4px
- Padding: 0 24px
- Font: 14px / 500 / Roboto
- Height: 40px
- Hover: bg `#E5F1FA`
- Use: Secondary action paired with primary (Compare, Learn More, Save for later)

**Tertiary (Text / Link-button)**
- Background: transparent
- Text: `#0076CE`
- Border: none
- Radius: 4px
- Padding: 0 8px
- Font: 14px / 500 / Roboto
- Hover: text `#0063AF`, underline
- Use: Low-emphasis inline actions (View details, Remove)

**Dark (Marketing CTA)**
- Background: `#11141a`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 0 24px
- Font: 14px / 500 / Roboto
- Height: 40px
- Hover: bg `#363B42`
- Use: High-contrast CTA on light marketing bands ("Shop now", "Explore deals")

**Danger**
- Background: `#CE2029`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 0 24px
- Font: 14px / 500 / Roboto
- Height: 40px
- Hover: bg `#A81A21`
- Use: Destructive confirmation (Cancel order, Remove all)

Size scale (height · font · padding · radius): `small` 32px · 13px / 500 · 0 16px · 4px; `medium` (default) 40px · 14px / 500 · 0 24px · 4px; `large` 48px · 16px / 500 · 0 32px · 4px. Full-width (`block`) variant fills the cart sidebar and mobile sticky CTA bar.

### Inputs

Dell `<TextInput>` uses a bordered box with a 4px radius and a clear focus ring in Dell Blue. Validation states drive border color.

**Default**
- Background: `#ffffff`
- Text: `#22262B`
- Border: 1px solid `#C5CBD3`
- Radius: 4px
- Padding: 10px 12px
- Font: 14px / 400 / Roboto
- Height: 40px
- Placeholder: `#9AA3AE`
- Focus: border `#0076CE`, ring `0 0 0 3px rgba(0,118,206,0.2)`
- Use: Standard form input -- search, account fields, quote forms

**Error**
- Background: `#ffffff`
- Text: `#22262B`
- Border: 1px solid `#CE2029`
- Radius: 4px
- Padding: 10px 12px
- Font: 14px / 400 / Roboto
- Helper text below: `#CE2029`, 12px / 400
- Use: Validation failure -- paired with inline error message

**Disabled**
- Background: `#EEF0F3`
- Text: `#9AA3AE`
- Border: 1px solid `#DDE1E6`
- Radius: 4px
- Use: Locked fields (read-only service tag, fixed config option)

**Search (header)**
- Background: `#F7F8FA`
- Text: `#22262B`
- Border: 1px solid `#DDE1E6`
- Radius: 4px
- Padding: 10px 40px 10px 12px (right pad for icon)
- Font: 14px / 400 / Roboto
- Use: Global product search in the masthead

### Cards

**Product Card**
- Background: `#ffffff`
- Border: 1px solid `#DDE1E6`
- Radius: 8px
- Padding: 16px
- Shadow: none (border-defined); hover lifts to `0 4px 12px rgba(17,20,26,0.10)`
- Use: Grid product tile -- image, name, spec bullets, price, rating, CTA

**Configuration Card**
- Background: `#ffffff`
- Border: 1px solid `#DDE1E6`
- Radius: 8px
- Padding: 20px
- Selected: border 2px `#0076CE` + bg `#E5F1FA`
- Use: Selectable config option (RAM, storage, warranty tiers)

**Promo Card**
- Background: `#0E1B2C`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 24px
- Use: Dark promotional banner card on home/category pages

### Spec Table

The hardware-defining component. Two-column rows of label/value used on every product page.

- Background: `#ffffff`, alternating rows `#F7F8FA`
- Row divider: 1px `#EEF0F3`
- Label column: `#6B7480`, 13px / 400, left-aligned, 40% width
- Value column: `#22262B`, 13px / 400, left-aligned
- Group header: `#11141a`, 14px / 500, with 1px `#DDE1E6` bottom border
- Padding: 10px 16px per cell
- Use: Tech specs, comparison grids, quote line items

### Badges

Compact status and promo labels with a 4px radius.

**Deal / Promo**
- Background: `#CE2029`
- Text: `#ffffff`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 700 / Roboto
- Use: "Save $200", "Clearance", "Doorbuster"

**In Stock**
- Background: `#E6F4E6`
- Text: `#008A00`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 500 / Roboto
- Use: Availability indicator

**New**
- Background: `#E5F1FA`
- Text: `#0076CE`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 700 / Roboto
- Use: Newly released product or feature

**Neutral / Tag**
- Background: `#EEF0F3`
- Text: `#4C545E`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 500 / Roboto
- Use: Category tags, metadata chips

### Tabs

**Underline Tabs**
- Background: `#ffffff`
- Inactive text: `#6B7480`, 14px / 500
- Active text: `#11141a`, 14px / 500
- Active indicator: 2px `#0076CE` bottom border
- Hover: text `#22262B`
- Use: PDP sections (Specs, Reviews, Q&A), account dashboard

### Toasts

**Default**
- Background: `#11141a`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 12px 16px
- Shadow: `0 4px 12px rgba(17,20,26,0.18)`
- Font: 14px / 400 / Roboto
- Use: Transient confirmation ("Added to cart", "Saved")

**Success**
- Background: `#E6F4E6`
- Text: `#0A5A0A`
- Left border: 4px `#008A00`
- Radius: 4px
- Use: Order placed, address saved

### Dialogs

**Modal**
- Background: `#ffffff`
- Text: `#11141a`
- Border: none
- Radius: 8px
- Padding: 24px
- Shadow: `0 8px 32px rgba(17,20,26,0.20)`
- Backdrop: `rgba(14,27,44,0.6)`
- Use: Configuration confirm, cart review, sign-in prompt

### Toggles

**Default**
- Track: `#0076CE` (on) / `#C5CBD3` (off)
- Radius: 9999px
- Thumb: `#ffffff` 18px circle, `0 1px 2px rgba(17,20,26,0.20)` shadow
- Use: Boolean preferences (Premium Support, email opt-in)


**Tier 1 sources:** https://www.dell.com (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Section vertical rhythm: 48px-64px between major page bands
- Card internal padding: 16px (product), 20-24px (config/promo)

### Grid & Container
- Max content width: 1280px, centered with auto margins
- 12-column grid, 24px gutters on desktop
- Product grid: 4 columns desktop, 2 tablet, 1 mobile
- Horizontal page padding: 24px desktop, 16px mobile
- Masthead + utility nav + mega-menu are full-bleed; content sits in the 1280px container

### Whitespace Philosophy
- **Let the hardware breathe**: Product photography gets generous surrounding white space -- the device is the hero, the chrome recedes.
- **Dense where it counts**: Spec tables and comparison grids are intentionally tight (10px cell padding) -- shoppers want to scan many data points fast.
- **Commerce always visible**: Price and primary CTA never scroll out of reach; sticky elements keep "Add to Cart" available.

### Border Radius Scale
- Tight (4px): Buttons, inputs, badges, toasts -- the system default
- Standard (8px): Cards, modals, config panels
- Pill (9999px): Toggles, filter chips, rating pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, 1px border | Cards at rest, table rows, inline elements |
| Subtle (Level 1) | `0 1px 3px rgba(17,20,26,0.08)` | Slight lift, hover hint |
| Standard (Level 2) | `0 4px 12px rgba(17,20,26,0.10)` | Card hover, dropdowns, popovers |
| Elevated (Level 3) | `0 8px 24px rgba(17,20,26,0.14)` | Mega-menu panels, floating cart |
| Modal (Level 4) | `0 8px 32px rgba(17,20,26,0.20)` | Dialogs, modals, full overlays |

**Shadow Philosophy**: Dell defines most surfaces with a **1px border, not a shadow** -- borders read as precise and engineered, fitting a hardware brand. Shadows appear on interaction (hover lift, dropdown open) and on true overlays. All shadows use a cool slate-tinted black (`rgba(17,20,26,...)`) at low opacity -- never colored, never dramatic. Elevation communicates "this floats above the page", nothing more.

### Blur Effects
- Sticky masthead applies a subtle backdrop blur on scroll
- Mega-menu and floating cart panels use a light backdrop scrim, not heavy blur

## 7. Do's and Don'ts

### Do
- Use Dell Blue (`#0076CE`) for all interactive elements -- buttons, links, focus rings, active tabs
- Use Roboto across all UI in weights 400 / 500 / 700
- Define cards and inputs with 1px `#DDE1E6` borders, adding shadow only on hover/overlay
- Use tabular numerals for prices, quantities, and spec values
- Keep border-radius at 4px for controls, 8px for containers
- Show in-stock in green (`#008A00`), deals/errors in red (`#CE2029`)
- Use blue tint (`#E5F1FA`) for selected config options and info surfaces

### Don't
- Don't use pure black (`#000000`) for body text -- use Slate Ink (`#11141a`)
- Don't introduce a second accent hue for interaction -- Dell Blue is the sole interactive color
- Don't use large border-radii (>8px) -- the brand reads engineered and precise
- Don't bury price or the primary CTA below the fold -- commerce stays visible
- Don't use colored or dramatic shadows -- slate-tinted, low-opacity, interaction-driven only
- Don't mix font families into the UI -- Dell Replica is marketing-only, never product UI body
- Don't make spec tables loose -- density is a feature for comparison shoppers

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | 1-col product grid, hamburger nav, sticky bottom CTA bar |
| Tablet | 768-1024px | 2-col grid, condensed mega-menu, side filters collapse to drawer |
| Desktop | 1024-1280px | 3-4 col grid, full mega-menu, persistent left filter rail |
| Wide | >1280px | Content capped at 1280px, centered with growing side margins |

### Touch Targets
- Buttons: large (48px) on mobile, medium (40px) on desktop
- List/menu items: minimum 44px row height
- Filter checkboxes and config tiles: minimum 44px tappable area

### Collapsing Strategy
- Mega-menu collapses to a full-screen drawer with accordion categories on mobile
- Left filter rail becomes a bottom-sheet "Filter" drawer
- Spec comparison tables become horizontally scrollable card stacks
- Primary CTA pins to a sticky bottom bar on PDP mobile

### Image Behavior
- Product photography: responsive, maintains aspect ratio, lazy-loaded
- Hero banners: art-directed crops per breakpoint
- Brand/partner logos (Intel, NVIDIA): fixed 24-32px height, consistent in context

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Dell Blue (`#0076CE`)
- CTA Hover: `#0063AF`
- Background: Pure White (`#ffffff`)
- Background Band: Gray 50 (`#F7F8FA`)
- Heading text: Slate Ink (`#11141a`)
- Body text: Gray 600 (`#4C545E`)
- Caption text: Gray 500 (`#6B7480`)
- Placeholder: Gray 400 (`#9AA3AE`)
- Border: Gray 200 (`#DDE1E6`)
- In Stock / Success: Green (`#008A00`)
- Error / Deal: Red (`#CE2029`)
- Warning: Amber (`#B85C00`)

### Example Component Prompts
- "Create a product card: white bg, 1px #DDE1E6 border, 8px radius, 16px padding. Product image top, name 16px weight 500 #11141a, 3 spec bullets 13px #6B7480, price 28px weight 700 #11141a tabular, blue 'Add to Cart' button. Hover: shadow 0 4px 12px rgba(17,20,26,0.10)."
- "Build an Add-to-Cart button: #0076CE bg, white text, 14px weight 500, 40px tall, 24px h-padding, 4px radius. Hover #0063AF, active #00538F."
- "Design a spec table row: 2 columns, label 13px #6B7480 40% width, value 13px #22262B. 10px 16px cell padding, alternating rows #F7F8FA, 1px #EEF0F3 divider."
- "Create a config option card: white bg, 1px #DDE1E6 border, 8px radius, 20px padding. Selected state: 2px #0076CE border + #E5F1FA bg."
- "Design a deal badge: #CE2029 bg, white text 12px weight 700, 2px 8px padding, 4px radius. Text 'Save $200'."

### Iteration Guide
1. Use Roboto everywhere in the UI; weights 400 / 500 / 700
2. Primary interactive color is `#0076CE` -- the single accent, never duplicated
3. Define surfaces with 1px `#DDE1E6` borders; add shadow only on hover/overlay
4. Radius: 4px controls, 8px containers, pill for toggles/chips
5. Prices and spec numbers: tabular numerals, 700 weight for price
6. Text is Slate Ink `#11141a`, never pure black; body is gray600 `#4C545E`
7. Keep commerce (price + CTA) persistently visible; spec tables stay dense

## 10. Voice & Tone

Dell speaks like a knowledgeable, no-nonsense sales engineer: **clear, confident, benefit-first, and jargon-aware** -- it knows when "16GB DDR5" matters and when "fast, future-ready memory" reads better. Copy is in US English, sentence case, and oriented toward helping a high-consideration buyer decide. CTAs are direct verbs. Specs are exact. Marketing is aspirational but never breathless.

| Context | Tone |
|---|---|
| CTAs | Imperative, short ("Add to Cart", "Customize & Buy", "Shop deals", "Compare") |
| Product names | Exact model + descriptor ("XPS 13 Laptop", "Alienware m18 R2 Gaming Laptop") |
| Spec values | Precise, unit-explicit ("16GB LPDDR5x 7467MT/s"), never rounded vaguely |
| Marketing headlines | Benefit-led, aspirational ("Power your possible", "Built to do more") |
| Error messages | Specific + actionable ("Enter a valid ZIP code to check delivery"). Never "Oops". |
| Stock / shipping | Factual and reassuring ("In Stock. Ships in 1-2 business days.") |
| Pricing | Exact dollars with clear savings ("$1,299.99 · Save $200"), strikethrough on was-price |

**Forbidden patterns.** Vague availability ("might be available"), rounded prices on PDP ("around $1,300"), hype without spec backing ("the best laptop ever"), and "Oops"/"Whoops" in errors. Savings claims always pair with a real strikethrough reference price.

## 11. Brand Narrative

Dell was founded in **1984 by Michael Dell** in a University of Texas dorm room as PC's Limited, built on a radical idea: **sell computers directly to customers, configured to order, cutting out the retail middleman**. That direct-to-customer, build-to-order DNA is the spine of Dell's digital design to this day -- the website is not a brochure, it is the factory order desk. Every configuration tool, spec table, and persistent "Customize & Buy" button descends directly from the 1984 thesis that buyers should assemble their own machine.

Dell grew into one of the largest technology companies in the world, spanning consumer laptops (Inspiron, XPS), gaming (Alienware, the G series), commercial PCs (Latitude, OptiPlex, Precision), and -- through Dell Technologies -- enterprise infrastructure, storage, and services. The brand serves a student buying a $500 laptop and an enterprise IT director provisioning thousands of workstations on the **same design system**, which forces a discipline of clarity: the interface must scale from impulse purchase to procurement.

The visual identity centers on **Dell Blue (`#0076CE`)** and the circular Dell logo (the "E" famously tilted) -- a mark of trust, reliability, and engineering competence. Dell deliberately avoids the playful consumer-tech aesthetic and the cold enterprise-IT aesthetic alike, landing on a **professional-but-approachable** middle that says: serious hardware, made easy to buy.

What Dell refuses: opacity in pricing (specs and prices are always exact and visible), decorative excess (the hardware is the hero, not the chrome), and friction in configuration (the path from "interested" to "ordered" is the product). Restraint, precision, and commerce clarity are the brand's design values.

## 12. Principles

1. **The page is the order desk.** Direct-to-customer build-to-order is Dell's founding thesis. Price, configuration, and "Add to Cart" are first-class and always reachable -- never buried, never ambiguous.
2. **The hardware is the hero.** Product photography gets generous white space; UI chrome recedes to a restrained palette so the device commands attention.
3. **Specs are sacred.** Technical values are exact, unit-explicit, and densely scannable. Comparison shoppers reward density and punish vagueness.
4. **One accent, used with intent.** Dell Blue (`#0076CE`) marks interactivity and nothing else. It never decorates; a blue element is always a tappable element.
5. **Borders before shadows.** Surfaces are defined by precise 1px borders; shadows appear only on interaction and overlay. Precision over drama -- this is a hardware brand.
6. **Scale demands clarity.** The same system serves a student and a Fortune 500 buyer. Clarity is not a style choice; it is a requirement of serving everyone at once.
7. **Exactness builds trust.** Prices, stock, ship dates, and specs are precise. Approximation reads as evasion in a high-consideration purchase.
8. **Configuration is the product.** The flow from base model to fully-specced order is the core experience. Every config control must feel reversible, clear, and consequence-aware (price updates live).

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Dell customer segments, not individual people.*

**Marcus, 19, Austin TX.** First-year computer science student buying his first "real" laptop with money split between savings and his parents. Comparison-shops obsessively across three tabs, sorts by price, filters by RAM and screen size, and reads every spec bullet. Trusts the strikethrough savings only if the original price looks real. Will abandon a config if the price jumps unexpectedly at a later step. Shops on mobile in bed, completes on a laptop.

**Diane, 47, Chicago IL.** IT procurement manager at a 1,200-person logistics company. Provisions Latitude and OptiPlex machines in bulk via Dell's business portal. Needs exact part numbers, service-tag lookups, warranty tiers, and saved quotes she can forward to finance. Values consistency and predictability over novelty -- a redesign that moves the "Save Quote" button costs her real time. Reads spec tables like financial statements.

**Tyler, 24, Portland OR.** Gaming enthusiast configuring an Alienware desktop. Lives in the configurator -- swaps GPUs, RAM, cooling, and RGB options, watching the price recalc with each change. Wants the dark, premium Alienware presentation but the same precise spec clarity. Cross-references benchmarks elsewhere, returns to Dell to finalize. The config experience *is* the fun for him.

## 14. States

| State | Treatment |
|---|---|
| **Empty (cart)** | Centered single line in `#4C545E` 16px ("Your cart is empty"), a `#0076CE` "Shop laptops" primary button below, and 2-3 suggested category links. No illustration required. |
| **Empty (search/filter)** | `#6B7480` caption ("No results match your filters"), a tertiary "Clear all filters" text-button in `#0076CE`. |
| **Loading (product grid)** | Skeleton cards at `#EEF0F3` matching tile dimensions, 1.2s shimmer. Price area shows a skeleton bar, not `$0`. |
| **Loading (config recalc)** | Price field shows an inline spinner in `#0076CE` while the new total resolves; the previous price stays dimmed until replaced. |
| **Error (inline field)** | 1px `#CE2029` border on the input, helper text below in `#CE2029` 12px. One actionable sentence ("Enter a valid ZIP code"). |
| **Error (toast)** | `#11141a` bg, white 14px text, 4s auto-dismiss. One sentence, no icon clutter. |
| **Error (page-blocking)** | Reserved for outage/checkout failure. White page, centered `#11141a` 18px message, `#0076CE` retry button, support link below. |
| **Success (added to cart)** | `#11141a` toast "Added to cart" + a mini cart-count badge animation; flyout cart slides from the right. |
| **Success (order placed)** | Dedicated confirmation page -- green `#008A00` check, order number in `#11141a` 28px, summary table, est. delivery date. Never a toast. |
| **Out of stock** | Red `#CE2029` "Out of Stock" badge, disabled CTA, and a `#0076CE` "Notify me" secondary button. |
| **Disabled** | Buttons drop to `#C5CBD3` bg; inputs go `#EEF0F3` bg with `#DDE1E6` border. Geometry unchanged so re-enable is stable. |
| **Skeleton** | `#EEF0F3` blocks at exact final dimensions, rounded to component radius (4px/8px), 1.2s shimmer with 8% white highlight. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox changes |
| `motion-fast` | 120ms | Hover, focus ring, button press, price recalc flash |
| `motion-standard` | 240ms | Default -- dropdowns, cart flyout, tab switches, card hover lift |
| `motion-slow` | 360ms | Mega-menu open, modal entrance, accordion expand |
| `motion-page` | 300ms | Route transitions between top-level pages |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing -- flyouts, dropdowns, modals |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving -- dismissals, closing menus |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way -- accordions, tab content, card hover |
| `ease-emphasized` | `cubic-bezier(0.2, 0.0, 0, 1)` | Mega-menu and cart flyout for a confident, settled finish |

**Signature motions.**

1. **Cart flyout.** Adding to cart slides a panel in from the right edge with `motion-standard / ease-enter`, synchronized with a cart-count badge tick and a backdrop scrim fade to `rgba(14,27,44,0.6)`. Dismissal uses `motion-fast / ease-exit`.
2. **Live price recalc.** When a configuration option changes, the price total briefly flashes `#E5F1FA` behind itself (`motion-fast`) then settles -- a confirmation that the change registered without a jarring number swap.
3. **Card hover lift.** Product cards rise via shadow `0 4px 12px rgba(17,20,26,0.10)` over `motion-standard / ease-standard`, signaling tappability without movement that disturbs the grid.
4. **Mega-menu open.** The navigation panel expands downward with `motion-slow / ease-emphasized` and a synchronized content fade, giving the large surface a settled, authoritative arrival.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; slides become fades. The store stays fully usable, just static.

<!--
OmD v0.1 Sources — Dell

Token grounding:
- Dell Blue #0076CE (Pantone 2174 C, RGB 0/118/206) — confirmed via WebSearch across
  brandpalettes.com, designyourway.net, and Dell brand guideline references.
- Roboto as Dell's primary digital typeface; Dell Replica (custom LL Replica) for
  corporate/marketing identity — confirmed via WebSearch (delldesignsystem.com typography,
  designyourway.net logo/font history).
- delldesignsystem.com (Dell Design System) confirmed to exist with documented Color and
  Typography foundations; exact internal token hexes were image/JS-rendered and not
  text-extractable, so neutral/semantic scales here are reasoned, brand-consistent values
  anchored to the verified Dell Blue and white-dominant commerce aesthetic.
- dell.com homepage (WebFetch) confirmed: white-dominant surfaces, mega-menu navigation,
  card-based product grids, clear CTAs ("Purchase", "Learn More", "Explore"), dark-text-on-light.

Personas (§13) are fictional archetypes informed by publicly described Dell customer
segments (students, IT procurement, gaming enthusiasts). Any resemblance to specific
individuals is unintended.

Interpretive claims (e.g., "the page is the order desk", direct-to-customer build-to-order
as design DNA) are editorial readings grounded in Dell's documented 1984 direct-sales
founding history, not verbatim Dell statements.
-->

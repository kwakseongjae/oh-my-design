---
id: robinhood
name: Robinhood
country: US
category: fintech
homepage: "https://robinhood.com"
primary_color: "#00C805"
logo:
  type: simpleicons
  slug: "robinhood"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#00C805"
    primary-hover: "#00B004"
    primary-tint: "#E6FBE9"
    canvas-dark: "#0E0E0E"
    canvas: "#FFFFFF"
    ink: "#1B1B1B"
    loss: "#FF5000"
    warning: "#FFB000"
    info: "#2E6FF2"
    gray-50: "#F7F7F7"
    gray-100: "#EFEFEF"
    gray-200: "#E0E0E0"
    gray-400: "#A8A8A8"
    gray-500: "#8C8C8C"
    gray-600: "#6B6B6B"
    gray-700: "#4A4A4A"
    gray-800: "#2C2C2C"
    gray-900: "#1B1B1B"
  typography:
    family: { sans: "Capsule Sans", mono: "Capsule Sans Mono" }
    display-hero: { size: 56, weight: 700, lineHeight: 1.07, tracking: -0.02, use: "Marketing hero headlines" }
    display-lg:   { size: 40, weight: 700, lineHeight: 1.15, tracking: -0.02, use: "Section headers" }
    heading-lg:   { size: 30, weight: 700, lineHeight: 1.27, tracking: -0.01, use: "Feature titles, modal headers" }
    heading:      { size: 24, weight: 600, lineHeight: 1.33, tracking: -0.01, use: "Card headings, sub-sections" }
    subtitle:     { size: 18, weight: 600, lineHeight: 1.44, use: "List headers, nav titles" }
    body-lg:      { size: 18, weight: 400, lineHeight: 1.56, use: "Marketing body, explanations" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    body-sm:      { size: 14, weight: 400, lineHeight: 1.43, use: "Secondary information" }
    caption:      { size: 12, weight: 400, lineHeight: 1.33, use: "Timestamps, disclosures, fine print" }
    number:       { size: 40, weight: 700, tracking: -0.01, use: "Portfolio value, tabular numerals" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 96 }
  rounded: { sm: 8, md: 12, lg: 20, full: 9999 }
  shadow:
    card: "0px 1px 3px rgba(0,0,0,0.06)"
    toast: "0px 8px 24px rgba(0,0,0,0.20)"
    modal: "0px 16px 48px rgba(0,0,0,0.24)"
  components:
    button-primary: { type: button, bg: "#00C805", fg: "#0E0E0E", radius: 9999, padding: "16px 28px", font: "16px/600 Capsule Sans", use: "Primary CTA, dark text on bright green" }
    button-secondary: { type: button, bg: "#FFFFFF", fg: "#1B1B1B", radius: 9999, padding: "16px 28px", font: "16px/600 Capsule Sans", use: "Outline secondary, 1.5px #E0E0E0 border" }
    button-tertiary: { type: button, bg: "#FFFFFF", fg: "#00B004", padding: "12px 8px", font: "16px/600 Capsule Sans", use: "Inline links, low-emphasis" }
    button-destructive: { type: button, bg: "#FF5000", fg: "#FFFFFF", radius: 12, padding: "16px 28px", font: "16px/600 Capsule Sans", use: "Sell confirmation, destructive flows" }
    input-text: { type: input, bg: "#FFFFFF", fg: "#1B1B1B", radius: 10, padding: "14px 16px", font: "16px/400 Capsule Sans", use: "Standard form input, 1.5px #E0E0E0 border, focus #00C805" }
    card-standard: { type: card, bg: "#FFFFFF", radius: 16, padding: "20px", use: "Holding, watchlist, account cards, 1px #E0E0E0 border" }
    card-featured: { type: card, bg: "#0E0E0E", fg: "#FFFFFF", radius: 20, padding: "28px", use: "Promotional, Gold upsell, portfolio hero" }
    list-row: { type: listItem, radius: 0, padding: "14px 16px", use: "Ticker rows, transaction history, bottom 1px #EFEFEF border" }
    badge-gain: { type: badge, fg: "#00B004", radius: 8, padding: "3px 8px", font: "13px/600 Capsule Sans Mono", use: "Positive movement indicator" }
    badge-loss: { type: badge, fg: "#FF5000", radius: 8, padding: "3px 8px", font: "13px/600 Capsule Sans Mono", use: "Negative movement indicator" }
    badge-neutral: { type: badge, bg: "#EFEFEF", fg: "#4A4A4A", radius: 8, padding: "3px 8px", font: "12px/600 Capsule Sans", use: "NEW, category labels" }
    badge-gold: { type: badge, fg: "#0E0E0E", radius: 8, padding: "3px 8px", font: "12px/700 Capsule Sans", use: "Robinhood Gold marker, gold gradient" }
    tab-segmented: { type: tab, bg: "#EFEFEF", fg: "#8C8C8C", radius: 9999, padding: "6px 14px", font: "13px/600 Capsule Sans", active: "Active #FFFFFF bg + #1B1B1B text", use: "Chart timeframe selector" }
    tab-bottom: { type: tab, bg: "#FFFFFF", fg: "#A8A8A8", font: "11px/500 Capsule Sans", active: "Active #00C805 icon + label", use: "Primary mobile navigation" }
    toast-default: { type: toast, bg: "#1B1B1B", fg: "#FFFFFF", radius: 12, padding: "14px 18px", font: "14px/500 Capsule Sans", use: "Transient confirmation" }
    dialog-modal: { type: dialog, bg: "#FFFFFF", radius: 20, padding: "28px", use: "Confirmations, disclosures" }
    dialog-sheet: { type: dialog, bg: "#FFFFFF", radius: 20, padding: "24px 20px", use: "Trade ticket, order review, pickers, top corners only" }
    toggle-default: { type: toggle, bg: "#00C805", radius: 9999, use: "Boolean settings, #E0E0E0 off, #FFFFFF thumb" }
  components_harvested: true
---

# Design System Inspiration of Robinhood

## 1. Visual Theme & Atmosphere

Robinhood is the American brokerage that turned investing from a gated, mahogany-paneled ritual into something that looks and feels like a consumer app. The brand's visual signature is a single, electric act of defiance: **Robinhood Green (`#00C805`)** — a bright, almost radioactive green that exists nowhere in legacy finance. Where incumbents (Fidelity green, Schwab blue, Vanguard maroon) chose colors that signal old-money permanence, Robinhood chose a color that signals *now* — energetic, optimistic, unmistakably young. The green doesn't whisper trust; it announces access.

The 2024 rebrand, developed with **COLLINS**, moved the brand into a more premium, confident register. The hero surfaces lean **dark** — deep near-blacks (`#0E0E0E`, `#1B1B1B`) under which the green vibrates with maximum intensity — punctuated by clean white marketing sections. This dark-mode-first instinct mirrors the trading product itself, where charts and tickers live on black canvases and the green/red of gains and losses carries the entire emotional payload of the interface.

The custom typeface **Capsule Sans** is the quiet counterweight to the loud green. Commissioned as a refinement of Maison Neue (Milieu Grotesque), it's a warm, highly-legible geometric grotesque tuned for small mobile sizes, with a custom hooked `R` anchoring the wordmark. It reads as engineered precision without coldness — exactly the tension a brokerage app needs to feel both serious about money and approachable about beginning.

**Key Characteristics:**
- Robinhood Green (`#00C805`) as the singular brand and interactive accent — electric, not institutional
- Dark-first hero surfaces (`#0E0E0E` / `#1B1B1B`) where green reads brightest
- Capsule Sans — custom geometric grotesque, tuned for mobile legibility, custom `R`
- Financial dualism: green for gains, red for losses, carried as semantic infrastructure
- Generous whitespace and large numeric displays — money as the hero element
- Restrained, near-flat depth; emphasis through contrast and color, not heavy shadow
- Mobile-first at a 390px baseline, scaling to confident full-bleed desktop marketing

## 2. Color Palette & Roles

### Primary
- **Robinhood Green** (`#00C805`): The brand. Primary CTAs, active states, brand marks, positive financial movement, links, focus accents. The single loudest element in the system.
- **Green Pressed** (`#00B004`): Hover/pressed state for green CTAs — a half-step darker for tactile feedback.
- **Green Tint** (`#E6FBE9`): Subtle green-washed backgrounds, success surfaces, informational highlights on light mode.
- **Near-Black Canvas** (`#0E0E0E`): Primary dark surface. Hero sections, trading-style backdrops, where green is most electric.
- **Pure White** (`#FFFFFF`): Light-mode page background, card surfaces, text on dark.

### Brand (Logo/Marketing)
- **Robinhood Green** (`#00C805`): The official brand color — used for the feather/wordmark mark and headline accents.
- **Ink Black** (`#1B1B1B`): Secondary brand surface and the darkest practical text color. Warm near-black.

### Semantic (Financial)
- **Gain Green** (`#00C805`): Positive returns, "up" tickers, buy confirmations. Shares the brand hue intentionally — growth *is* the brand.
- **Loss Red** (`#FF5000`): Negative returns, "down" tickers, sell/destructive actions. A warm orange-red, not a clinical red, to stay on-brand and avoid alarm-system harshness.
- **Warning Amber** (`#FFB000`): Pending states, attention-needed, market-closed notices.
- **Info Blue** (`#2E6FF2`): Neutral informational accents, educational callouts (Robinhood Learn).

### Neutral Scale
- **Gray 50** (`#F7F7F7`): Lightest gray — secondary page background, section bands.
- **Gray 100** (`#EFEFEF`): Card fills, disabled surfaces, dividers on white.
- **Gray 200** (`#E0E0E0`): Default border color, input borders, separators.
- **Gray 400** (`#A8A8A8`): Placeholder text, disabled icon fills.
- **Gray 500** (`#8C8C8C`): Caption text, secondary labels, metadata.
- **Gray 600** (`#6B6B6B`): Body text on light surfaces.
- **Gray 700** (`#4A4A4A`): Emphasized body, sub-headings.
- **Gray 800** (`#2C2C2C`): Strong labels.
- **Gray 900** (`#1B1B1B`): Primary heading text on light surfaces.

### Surface & Borders
- **Border Default**: `#E0E0E0` (gray200). Card borders, input outlines, dividers on light.
- **Border Dark**: `#2C2C2C`. Dividers and outlines on dark surfaces.
- **Surface Dark Elevated**: `#1B1B1B`. Cards sitting on the `#0E0E0E` canvas.
- **Overlay Scrim**: `rgba(0,0,0,0.6)`. Modal/sheet backdrops.

## 3. Typography Rules

### Font Family
- **Primary**: `"Capsule Sans", "Capsule Sans Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`
- **Display**: `"Capsule Sans Display", "Capsule Sans", sans-serif` — tighter optical cut for large headlines
- **Monospace / Numeric**: `"Capsule Sans Mono", "SF Mono", SFMono-Regular, Menlo, monospace` — tabular figures for tickers and amounts

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Capsule Sans Display | 56px | 700 | 60px (1.07) | -0.02em | Marketing hero headlines |
| Display Large | Capsule Sans Display | 40px | 700 | 46px (1.15) | -0.02em | Section headers |
| Heading Large | Capsule Sans | 30px | 700 | 38px (1.27) | -0.01em | Feature titles, modal headers |
| Heading | Capsule Sans | 24px | 600 | 32px (1.33) | -0.01em | Card headings, sub-sections |
| Subtitle | Capsule Sans | 18px | 600 | 26px (1.44) | normal | List headers, nav titles |
| Body Large | Capsule Sans | 18px | 400 | 28px (1.56) | normal | Marketing body, explanations |
| Body | Capsule Sans | 16px | 400 | 24px (1.50) | normal | Standard reading text |
| Body Small | Capsule Sans | 14px | 400 | 20px (1.43) | normal | Secondary information |
| Caption | Capsule Sans | 12px | 400 | 16px (1.33) | normal | Timestamps, disclosures, fine print |
| Number Display | Capsule Sans Mono | 40px+ | 700 | tight | -0.01em | Portfolio value — tabular numerals |
| Ticker Numeric | Capsule Sans Mono | 14-16px | 500 | 1.2 | normal | Price/percent cells — tabular |

### Principles
- **Tabular numerals everywhere money lives**: Portfolio values, prices, percentages, and ticker cells use mono/tabular figures so digits never shift width as values update.
- **Tight display tracking**: Large headlines pull in to `-0.02em` for a confident, engineered feel; body text stays at normal tracking for legibility.
- **Weight restraint**: Capsule Sans ships multiple weights but the UI leans on 400 (body), 600 (emphasis/subtitles), 700 (headings and financial amounts). Avoid 300 in product UI — it loses legibility at mobile sizes.
- **Mobile-tuned legibility**: The typeface was refined specifically to hold up at small sizes; never set product body text below 14px.

## 4. Component Stylings

### Buttons

Robinhood buttons are pill-to-soft-rounded, high-contrast, and lean on the green as the single primary signal. Marketing surfaces favor full pills; product surfaces favor a softer 8–12px radius.

**Primary (Green)**
- Background: `#00C805`
- Text: `#0E0E0E` (dark text on bright green for max legibility and contrast)
- Border: none
- Radius: 9999px (marketing) / 12px (product)
- Padding: 16px 28px
- Font: 16px / 600 / Capsule Sans
- Hover: background `#00B004`
- Pressed: background `#00A004` + slight scale 0.98
- Disabled: background `#A8A8A8`, text `#FFFFFF`
- Use: Primary CTA ("Get started", "Buy", "Sign up") — min-height 52px

**Primary on Dark**
- Background: `#00C805`
- Text: `#0E0E0E`
- Border: none
- Radius: 9999px
- Padding: 16px 28px
- Font: 16px / 600 / Capsule Sans
- Use: Hero CTA on `#0E0E0E` canvas — green pops at maximum intensity

**Secondary (Outline)**
- Background: transparent
- Text: `#1B1B1B` (light mode) / `#FFFFFF` (dark mode)
- Border: 1.5px solid `#E0E0E0` (light) / `#2C2C2C` (dark)
- Radius: 9999px / 12px
- Padding: 16px 28px
- Font: 16px / 600 / Capsule Sans
- Hover: border `#A8A8A8`, subtle bg `#F7F7F7`
- Use: "Learn more", secondary action paired with a green primary

**Tertiary (Text)**
- Background: none
- Text: `#00B004` (light) / `#00C805` (dark)
- Border: none
- Padding: 12px 8px
- Font: 16px / 600 / Capsule Sans
- Use: Inline links and low-emphasis actions

**Destructive (Sell)**
- Background: `#FF5000`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 16px 28px
- Font: 16px / 600 / Capsule Sans
- Use: Sell confirmation, destructive flows — paired explicitly, never default

### Inputs

**Text Field (default)**
- Background: `#FFFFFF` (light) / `#1B1B1B` (dark)
- Text: `#1B1B1B` / `#FFFFFF`
- Border: 1.5px solid `#E0E0E0` / `#2C2C2C`
- Radius: 10px
- Padding: 14px 16px
- Font: 16px / 400 / Capsule Sans
- Placeholder: `#A8A8A8`
- Focus: border `#00C805` + 0 0 0 3px `rgba(0,200,5,0.15)` ring
- Use: Standard form input

**Underline (amount entry)**
- Background: transparent
- Text: `#1B1B1B`
- Border: bottom 2px solid `#E0E0E0`
- Radius: 0
- Padding: 8px 0
- Font: 32px / 700 / Capsule Sans Mono (tabular)
- Focus: bottom border `#00C805`
- Use: Large dollar-amount entry on trade tickets

**Error**
- Border: 1.5px solid `#FF5000`
- Focus ring: `rgba(255,80,0,0.15)`
- Helper text below: `#FF5000`, 13px / 400
- Use: Invalid field — paired with one actionable sentence

### Cards

**Standard**
- Background: `#FFFFFF` (light) / `#1B1B1B` (dark)
- Border: 1px solid `#E0E0E0` (light) / none (dark)
- Radius: 16px
- Padding: 20px
- Shadow: `0px 1px 3px rgba(0,0,0,0.06)` (light) / none (dark)
- Use: Holding, watchlist, account cards — the workhorse surface

**Featured / Hero Card**
- Background: `#0E0E0E`
- Text: `#FFFFFF`
- Border: none
- Radius: 20px
- Padding: 28px
- Accent: green data/CTA on dark
- Use: Promotional / Gold upsell / portfolio hero

**List Row**
- Background: transparent
- Border: bottom 1px solid `#EFEFEF` (light) / `#2C2C2C` (dark)
- Radius: 0
- Padding: 14px 16px
- Use: Ticker rows, transaction history — name left, tabular price/percent right

### Badges / Pills

**Gain**
- Background: `rgba(0,200,5,0.12)`
- Text: `#00B004`
- Radius: 8px
- Padding: 3px 8px
- Font: 13px / 600 / Capsule Sans Mono
- Use: "+2.4%" positive movement indicator

**Loss**
- Background: `rgba(255,80,0,0.12)`
- Text: `#FF5000`
- Radius: 8px
- Padding: 3px 8px
- Font: 13px / 600 / Capsule Sans Mono
- Use: "-1.8%" negative movement indicator

**Neutral / Tag**
- Background: `#EFEFEF`
- Text: `#4A4A4A`
- Radius: 8px
- Padding: 3px 8px
- Font: 12px / 600 / Capsule Sans
- Use: "NEW", category labels

**Gold (premium)**
- Background: linear-gradient `#C9A227 → #E8C84A`
- Text: `#0E0E0E`
- Radius: 8px
- Padding: 3px 8px
- Font: 12px / 700 / Capsule Sans
- Use: Robinhood Gold marker

### Tabs

**Segmented (timeframe)**
- Background: `#EFEFEF` (light) / `#1B1B1B` (dark)
- Text: `#8C8C8C`
- Radius: 9999px
- Padding: 6px 14px
- Active: `#FFFFFF` bg + `#1B1B1B` text (light); on dark, active text `#00C805`, no fill
- Font: 13px / 600 / Capsule Sans
- Use: Chart timeframe (1D / 1W / 1M / 3M / 1Y / ALL)

**Bottom Tab (mobile nav)**
- Background: `#FFFFFF` / `#0E0E0E`
- Active: `#00C805` icon + label
- Inactive: `#A8A8A8`
- Font: 11px / 500 / Capsule Sans
- Use: Primary mobile navigation

### Toasts

**Default**
- Background: `#1B1B1B`
- Text: `#FFFFFF`
- Radius: 12px
- Padding: 14px 18px
- Shadow: `0px 8px 24px rgba(0,0,0,0.20)`
- Font: 14px / 500 / Capsule Sans
- Use: Transient confirmation ("Order placed"). Order *fills* get a dedicated screen, not a toast.

### Dialogs

**Centered Modal**
- Background: `#FFFFFF` / `#1B1B1B`
- Radius: 20px
- Padding: 28px
- Shadow: `0px 16px 48px rgba(0,0,0,0.24)`
- Use: Confirmations, disclosures

**Bottom Sheet**
- Background: `#FFFFFF` / `#0E0E0E`
- Radius: 20px (top corners only)
- Padding: 24px 20px
- Drag handle: 36px × 4px `#E0E0E0`, centered top
- Use: Trade ticket, order review, pickers — the primary mobile overlay pattern

### Toggles

**Default**
- Background: `#00C805` (on) / `#E0E0E0` (off)
- Radius: 9999px
- Thumb: `#FFFFFF` 20px circle, `0px 1px 2px rgba(0,0,0,0.15)` shadow
- Use: Boolean settings, notification preferences


**Tier 1 sources:** https://robinhood.com (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px, 96px
- Product horizontal padding: 16px (mobile), 20px (tablet)
- Marketing section vertical rhythm: 96px+ between major bands

### Grid & Container
- Product baseline: 390px mobile width, single-column
- Marketing: 12-column grid, max content width ~1200px, centered
- Charts: full-bleed width, fixed aspect ratio, edge-to-edge on mobile
- Lists: full-width rows, name left-aligned, tabular numerics right-aligned

### Whitespace Philosophy
- **Money is the hero**: Portfolio value sits in large type with generous surrounding space — the single most important number on any screen gets room to breathe.
- **Marketing is spacious; product is efficient**: Landing pages use editorial whitespace and full-bleed imagery; the trading product is tighter and data-dense where it counts.
- **Green is rationed**: Empty space lets the one green element command attention. Crowding the green dilutes the brand signal.

### Border Radius Scale
- Compact (8px): Badges, pills, inline tags
- Standard (10–12px): Inputs, product buttons, small cards
- Comfortable (16px): Standard cards
- Large (20px): Hero cards, modals, bottom sheets
- Pill (9999px): Marketing CTAs, segmented controls, toggles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Dark surfaces, inline elements, list rows |
| Subtle (Level 1) | `0px 1px 3px rgba(0,0,0,0.06)` | Cards on light, slight lift |
| Standard (Level 2) | `0px 4px 12px rgba(0,0,0,0.10)` | Dropdowns, popovers |
| Elevated (Level 3) | `0px 8px 24px rgba(0,0,0,0.20)` | Toasts, floating panels |
| Modal (Level 4) | `0px 16px 48px rgba(0,0,0,0.24)` | Dialogs, bottom sheets |

**Shadow Philosophy**: Robinhood is near-flat by instinct. On dark surfaces, elevation is communicated by *surface lightness* (a `#1B1B1B` card on a `#0E0E0E` canvas) rather than shadow. On light surfaces, shadows are soft, neutral, single-layer. Depth never competes with the green — color and contrast carry hierarchy, not drop shadows.

### Blur Effects
- Sticky nav applies a backdrop blur (`backdrop-filter: blur(12px)`) over a translucent dark/light fill on scroll.
- Bottom-sheet scrims use a plain `rgba(0,0,0,0.6)` dim, no blur, to keep trade data crisp behind.

## 7. Do's and Don'ts

### Do
- Use Robinhood Green (`#00C805`) for the single most important action on a screen
- Put dark text (`#0E0E0E`) on green buttons — never white, which fails contrast
- Use tabular/mono figures for all prices, percentages, and portfolio values
- Let green appear against dark (`#0E0E0E`) where it reads most electric
- Show gains in green (`#00C805`), losses in warm red (`#FF5000`)
- Keep marketing CTAs as full pills; product buttons at 10–12px radius
- Give the headline portfolio number generous surrounding whitespace

### Don't
- Don't use multiple greens — there is one brand green; don't invent shades for decoration
- Don't put white text on the green button (contrast and brand violation)
- Don't use a harsh pure-red (`#FF0000`) for losses — the system red is warm `#FF5000`
- Don't crowd the green with competing accent colors — ration it
- Don't set product body text below 14px or use weight 300 in UI
- Don't add heavy multi-layer shadows — depth comes from surface lightness and contrast
- Don't mix variable-width and tabular numerals in the same data column

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <600px | Single column, 390px product baseline, full-bleed charts |
| Tablet | 600–1024px | Two-column marketing, wider cards, side margins |
| Desktop | >1024px | 12-col grid, max ~1200px content, full-bleed hero imagery |

### Touch Targets
- Buttons: min-height 52px (primary), 44px (compact)
- List rows: minimum 56px row height for tickers/transactions
- Segmented timeframe controls: 36px tall, generous horizontal hit area

### Collapsing Strategy
- Desktop marketing hero collapses to a single-column stacked layout on mobile
- Trade actions live in a bottom sheet on mobile, a right-side panel on desktop
- Sticky bottom CTA bar (Buy/Sell) with safe-area insets on mobile product
- Horizontal scrolling carousels for discover/watchlist sections

### Image Behavior
- Charts: full-width, responsive, fixed aspect ratio, edge-to-edge on mobile
- Brand/marketing imagery: full-bleed, often on dark backgrounds with green accents
- Company logos in lists: 36–40px circular, consistent sizing

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Robinhood Green (`#00C805`)
- CTA Hover: Green Pressed (`#00B004`)
- CTA Text: Near-Black (`#0E0E0E`)
- Dark Canvas: Near-Black (`#0E0E0E`)
- Light Background: White (`#FFFFFF`)
- Surface band: Gray 50 (`#F7F7F7`)
- Heading text: Ink (`#1B1B1B`)
- Body text: Gray 600 (`#6B6B6B`)
- Caption text: Gray 500 (`#8C8C8C`)
- Placeholder: Gray 400 (`#A8A8A8`)
- Border: Gray 200 (`#E0E0E0`)
- Gain/Positive: Green (`#00C805`)
- Loss/Negative: Warm Red (`#FF5000`)
- Warning: Amber (`#FFB000`)

### Example Component Prompts
- "Create a portfolio header: dark `#0E0E0E` bg, white label 14px weight 400, value 40px weight 700 in Capsule Sans Mono tabular, green `#00C805` '+$1,240.50 (+2.4%)' below in 16px mono."
- "Build a primary CTA: `#00C805` bg, `#0E0E0E` text, 16px weight 600, min-height 52px, full pill radius. Hover `#00B004`, pressed scale 0.98."
- "Design a ticker row: full-width 56px, company logo 36px circle left + symbol 16px weight 600 + name 13px `#8C8C8C`. Right: price 16px mono + percent pill (gain `rgba(0,200,5,0.12)` bg `#00B004` text / loss `rgba(255,80,0,0.12)` bg `#FF5000` text)."
- "Create an amount-entry field: transparent bg, 2px bottom border `#E0E0E0`, value 32px weight 700 Capsule Sans Mono, focus bottom border `#00C805`."
- "Design a chart timeframe segmented control: `#EFEFEF` track, pill radius, items 1D/1W/1M/3M/1Y/ALL. Active: white fill + `#1B1B1B` text. Inactive `#8C8C8C`, 13px weight 600."

### Iteration Guide
1. Use the Capsule Sans stack; fall back to Helvetica Neue / system sans
2. Primary interactive and brand color is `#00C805` — only one green, rationed
3. Green buttons carry dark `#0E0E0E` text, never white
4. Financial numbers: tabular/mono figures, 700 weight for headline values
5. Gains green `#00C805`, losses warm red `#FF5000` — never harsh `#FF0000`
6. Dark surfaces use lightness for elevation; light surfaces use soft single shadows
7. Mobile-first at 390px, 16px horizontal padding; marketing goes full-bleed

---

## 10. Voice & Tone

Robinhood speaks like a confident friend who demystifies money without dumbing it down — direct, encouraging, jargon-light, and quietly anti-establishment. The founding promise is in the name: democratizing finance for all. Copy is plain-spoken and active, favoring short imperatives. It celebrates beginning ("Start with as little as $1") and access ("Investing for everyone") over wealth-flex bravado. Disclosures are present and precise — this is a regulated brokerage — but kept out of the way of the primary message.

| Context | Tone |
|---|---|
| CTAs | Short imperative verbs (`Get started`, `Buy`, `Learn more`, `Sign up`) |
| Headlines | Bold, declarative, access-oriented (`Investing for everyone`, `Join a new generation of investors`) |
| Success | Plain past-tense confirmation (`Order placed`, `Transfer complete`). No exclamation overload. |
| Error messages | Specific, blameless, actionable. Never a bare `Something went wrong`. |
| Onboarding | Second-person, encouraging, one idea per step (`Start with as little as $1`) |
| Financial amounts | Exact, comma-separated, currency symbol prefixed: `$1,240.50` — never rounded on primary surfaces |
| Disclosures | Plain-English regulatory tone; accurate but unobtrusive footnotes |

**Forbidden moves.** No condescension or finance-bro swagger. No "guaranteed returns" language (regulatory and brand violation). No rounding money on primary surfaces. Avoid `Oops` and cute error voice on money screens — clarity over personality where dollars are involved.

## 11. Brand Narrative

Robinhood was founded in 2013 by **Vladimir Tenev** and **Baiju Bhatt**, two Stanford physics graduates who had built high-frequency trading infrastructure for Wall Street firms and realized the actual cost of executing a trade was near zero — yet incumbent brokerages charged retail investors $5–$10 per trade. The thesis was a direct moral argument encoded in the name: the tools of finance had been hoarded by the wealthy, and Robinhood would take from that asymmetry and give access back to everyone. **Commission-free trading** was the wedge; the app launched publicly in 2015 to a waitlist of nearly a million people.

The brand's entire visual language descends from that founding rejection. Legacy finance dressed itself in navy, maroon, and serif gravitas — colors and fonts engineered to signal *we have always been here and always will be*. Robinhood chose **electric green (`#00C805`)**, a color with no heritage in finance, precisely because it had no heritage. It reads as a startup, a growth chart, a "go" signal — optimism rendered as a single hue. The feather mark evokes the legend's arrow and lightness; the name does the rest of the storytelling.

The 2024 rebrand with **COLLINS** matured this energy without abandoning it. As Robinhood expanded from a single commission-free-stocks app into a multi-product platform — options, crypto, retirement, Robinhood Gold, a cash card, and emerging agentic and prediction-market features — the identity needed to hold both the scrappy access story and a more premium, durable register. The dark surfaces, the refined custom Capsule Sans, and the disciplined rationing of the green are the answer: still defiant, now grown up.

What Robinhood refuses: the mahogany seriousness of legacy brokerages, the intimidation of Bloomberg-terminal density, and the gatekeeping of high account minimums. It occupies a deliberate middle — serious enough to be trusted with real money, accessible enough that a 22-year-old's first-ever dollar of investing feels like it belongs to them.

## 12. Principles

1. **One green, rationed.** There is a single brand green (`#00C805`). It marks the most important action and positive movement — nothing else. Inventing decorative green shades dilutes the entire signal.
2. **Money is the hero element.** The headline portfolio number gets the largest type, tabular figures, and the most surrounding whitespace on any screen. Everything else supports it.
3. **Access over flex.** Copy and design celebrate beginning ("$1 to start") over displays of wealth. The brand is for the person making their first trade, not bragging about their last.
4. **Dark makes green electric.** Hero and emotional moments live on `#0E0E0E` so the green reads at maximum intensity. Light mode is for clarity; dark mode is for impact.
5. **Numbers are typography.** Prices, percentages, and balances use tabular/mono figures with the same care as display headlines — digits never jitter as values update.
6. **Restraint is the grown-up move.** Near-flat depth, one accent color, disciplined type weights. The 2024 maturity came from removing, not adding.
7. **Gains and losses are infrastructure.** Green-up / warm-red-down is a semantic contract that runs through every surface; it is never repurposed for decoration.
8. **Trust through precision, warmth through tone.** Numbers are exact and disclosures honest (the trust); voice is plain and encouraging (the warmth). Both, always.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described US retail-investing segments, not individual people.*

**Marcus, 24, Austin.** First job out of college, software support. Robinhood is the first investing app he's ever opened — he started with $50 in an index ETF after seeing a friend's screenshot. Checks his portfolio 3–4 times a day, mostly for the dopamine of the green number. Intimidated by traditional brokerage interfaces; chose Robinhood because it "looked like an app, not a bank." Reads the percent change before anything else. Would churn instantly if the app felt like work.

**Priya, 31, Jersey City.** Product designer with a stable income, contributing to a Roth IRA and dabbling in options. Uses Robinhood Gold for the higher interest on uninvested cash. Values the clean dark-mode charts and fast order entry. Skeptical of hype — ignores meme-stock noise — but appreciates that the interface respects her enough to surface real data without condescension. Tabular-clean numerics and honest disclosures are why she trusts it.

**Dré, 19, Atlanta.** College sophomore, treats investing like a learning hobby. Started through Robinhood Learn articles, buys fractional shares of companies he uses daily. Mobile-only, never touches a desktop. The "$1 to start" framing is exactly why he's here — no other broker made it feel possible. Sensitive to anything that reads as a sales pitch; trusts the app because it has never made him feel small for starting tiny.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no holdings)** | Friendly one-line `#6B6B6B` body explaining the screen plus a green primary CTA (`Get started` / `Make your first trade`). Encouraging, never `No data`. |
| **Empty (filtered)** | Single `#8C8C8C` caption line (`No results match your filter`). No CTA — user resets the filter. |
| **Loading (first paint)** | Skeleton blocks at `#EFEFEF` (light) / `#1B1B1B` (dark) matching final layout. Portfolio values show `--` until resolved — never a fake skeleton number. |
| **Loading (refresh)** | Subtle green `#00C805` pull spinner. Content stays visible with prior values; no blocking overlay. |
| **Error (inline field)** | 1.5px `#FF5000` border + `rgba(255,80,0,0.15)` focus ring, one actionable sentence below in `#FF5000` 13px. |
| **Error (toast)** | `#1B1B1B` bg, white 14px 500 text, ~4s auto-dismiss, bottom inset. One sentence, no cute voice. |
| **Error (blocking)** | Reserved for outage/market-data failure. Centered `#1B1B1B` 18px weight 600 message + green retry button. No illustration on money screens. |
| **Success (order placed)** | Toast for routine submission. **Order filled** gets a dedicated confirmation screen — green checkmark, exact filled price/quantity, tabular amount. Fills are not toasts. |
| **Gain/Loss live update** | Value and percent recolor in place: green `#00C805` up, warm red `#FF5000` down, with a brief flash, never a cross-fade between numbers. |
| **Skeleton** | `#EFEFEF` / `#1B1B1B` blocks at exact final dimensions, 1.2s shimmer with low-opacity highlight. Component-matched radius. Never on live financial amounts. |
| **Disabled** | Button bg `#A8A8A8`, text white, no pointer. Inputs keep `#E0E0E0` border so geometry stays stable when re-enabled. |
| **Market closed** | Amber `#FFB000` caption banner (`Market closed`) above the trade ticket; trade button stays available for queued/extended-hours orders where applicable. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, immediate state changes |
| `motion-fast` | 150ms | Hover, focus, press overlays, small reveals |
| `motion-standard` | 250ms | Default — sheet opens, tab switches, card expand |
| `motion-slow` | 400ms | Emphasized — success checkmark, onboarding advances |
| `motion-page` | 320ms | Full-screen route transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Appearing — sheets, toasts, screen pushes |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Leaving — dismissals, pops |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — collapsibles, tab content |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved — order-filled success checkmark only |

**Signature motions.**

1. **Value tick.** When a price or portfolio value updates, the digit animates in place with a brief color flash (green up `#00C805` / warm red down `#FF5000`) over `motion-fast`. Money is never cross-faded between two values — a flickering number looks like a bug, not a market.
2. **Chart draw-in.** On load, the price line draws left-to-right over `motion-slow` with `ease-standard`, the area gradient fading up beneath it. Reinforces "growth" as a felt motion, not just a color.
3. **Bottom-sheet trade ticket.** Rises from `y+40px` with `motion-standard / ease-enter` and a synchronized scrim fade to `rgba(0,0,0,0.6)`. Dismissal uses `motion-fast / ease-exit` — leaving feels lighter than entering.
4. **Order-filled checkmark.** The one place `ease-spring` is licensed: the confirmation checkmark draws over `motion-slow` with a single confident overshoot. Everywhere else, standard easing — overshoot on routine UI would feel unserious for money.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse toward `motion-instant`, slides become fades, and the chart renders fully drawn. Stays usable; just less kinetic.

<!--
OmD v0.1 Sources

Token grounding (WebSearch + WebFetch, 2026-06-06):
- Robinhood Green #00C805 — confirmed primary brand color across multiple brand
  references and the 2024 COLLINS rebrand coverage.
- Capsule Sans — confirmed custom typeface (refinement of Maison Neue / Milieu
  Grotesque) with a custom 'R' wordmark, tuned for mobile legibility, via the
  COLLINS x Robinhood rebrand writeups (the-brandidentity.com, Robinhood newsroom
  "A visual identity that better reflects our vision").
- robinhood.com (WebFetch) — confirmed marketing voice ("Investing for everyone",
  "Join a new generation of investors", "Get started"/"Learn more" CTAs,
  commission-free positioning, agentic/crypto/prediction-market expansion).

Sources:
- https://newsroom.aboutrobinhood.com/a-visual-identity-that-better-reflects-our-vision/
- https://the-brandidentity.com/project/collins-robinhood-combine-make-investing-accessible-affordable-engaging
- https://1000logos.net/robinhood-logo/
- https://robinhood.com

Not independently token-verified (editorial/secondary): exact neutral-gray ramp
values, semantic loss-red #FF5000, focus-ring opacities, radius/padding specifics,
and motion tokens are reasoned brand-consistent values for agent use, not published
Robinhood design-system tokens. Brand color #00C805, Capsule Sans, dark-first
aesthetic, gain-green/loss-red dualism, and marketing voice are grounded in sources.

Personas (§13) are fictional archetypes informed by publicly described US retail-
investing segments. Founding narrative (Tenev/Bhatt, 2013, commission-free thesis)
is widely documented public history.
-->

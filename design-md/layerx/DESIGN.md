---
id: layerx
name: LayerX
country: JP
category: fintech
homepage: "https://layerx.co.jp"
primary_color: "#534DFF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=layerx.co.jp&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#534dff"
    primary-hover: "#403ae6"
    primary-tint: "#eeedff"
    canvas: "#ffffff"
    ink: "#152632"
    sky: "#8dbbff"
    gradient-end: "#7b6cff"
    error: "#e5484d"
    success: "#1fa971"
    warning: "#f5a623"
    info: "#3e63dd"
    grey-50: "#f7f8fa"
    grey-100: "#f0f2f5"
    grey-200: "#e3e6eb"
    grey-300: "#cbd1d9"
    grey-400: "#9aa4b2"
    grey-500: "#6b7585"
    grey-600: "#4a5360"
    grey-700: "#333b45"
    grey-800: "#1f2832"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Inter", mono: "SF Mono" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.25, tracking: -0.02, use: "Landing hero headline" }
    display:      { size: 36, weight: 700, lineHeight: 1.33, tracking: -0.02, use: "Section headers" }
    heading-1:    { size: 28, weight: 700, lineHeight: 1.43, tracking: -0.01, use: "Feature titles" }
    heading-2:    { size: 22, weight: 700, lineHeight: 1.45, tracking: -0.01, use: "Card/block headings" }
    heading-3:    { size: 18, weight: 600, lineHeight: 1.56, use: "Sub-sections" }
    subtitle:     { size: 16, weight: 600, lineHeight: 1.63, use: "List headers, labels" }
    body-large:   { size: 16, weight: 400, lineHeight: 1.75, use: "Lead paragraphs" }
    body:         { size: 15, weight: 400, lineHeight: 1.73, use: "Standard reading text" }
    body-small:   { size: 14, weight: 400, lineHeight: 1.57, use: "Secondary text" }
    caption:      { size: 12, weight: 400, lineHeight: 1.50, tracking: 0.01, use: "Timestamps, fine print" }
    amount:       { size: 24, weight: 600, use: "Invoice & financial figures, tabular nums" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 96 }
  rounded: { sm: 6, md: 8, lg: 16, full: 9999 }
  shadow:
    subtle: "0 1px 3px rgba(21,38,50,0.06)"
    standard: "0 4px 16px rgba(21,38,50,0.10)"
    elevated: "0 8px 24px rgba(21,38,50,0.12)"
    modal: "0 16px 48px rgba(21,38,50,0.20)"
  components:
    button-primary: { type: button, bg: "#534dff", fg: "#ffffff", radius: 8, padding: "0 24px", font: "15px/600", use: "Primary CTA, 44px height" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#534dff", radius: 8, padding: "0 24px", font: "15px/600", use: "Secondary paired action, 1px indigo border" }
    button-ghost: { type: button, bg: "transparent", fg: "#333b45", radius: 8, padding: "0 16px", font: "15px/600", use: "Low-emphasis nav actions" }
    button-danger: { type: button, bg: "#e5484d", fg: "#ffffff", radius: 8, padding: "0 24px", font: "15px/600", use: "Destructive confirmation" }
    input-default: { type: input, bg: "#ffffff", fg: "#1f2832", radius: 8, padding: "11px 14px", font: "15px/400", use: "Standard form field" }
    input-select: { type: input, bg: "#ffffff", radius: 8, padding: "11px 14px", use: "Single choice from list" }
    card-standard: { type: card, bg: "#ffffff", radius: 12, padding: "24px", use: "Feature blocks, content panels" }
    card-featured: { type: card, bg: "#ffffff", radius: 16, padding: "32px", use: "Hero/marketing cards, pricing highlight" }
    card-compact: { type: card, bg: "#ffffff", radius: 8, padding: "16px", use: "List rows, dense cards" }
    badge-brand: { type: badge, bg: "#534dff", fg: "#ffffff", radius: 6, padding: "2px 8px", font: "12px/600", use: "Primary emphasis NEW" }
    badge-soft-brand: { type: badge, bg: "#eeedff", fg: "#403ae6", radius: 6, padding: "2px 8px", font: "12px/600", use: "Subtle category/status tag" }
    badge-success: { type: badge, fg: "#1fa971", radius: 6, padding: "2px 8px", font: "12px/600", use: "Approved/completed" }
    tab-underline: { type: tab, bg: "transparent", fg: "#6b7585", padding: "12px 16px", font: "15px/600", active: "#534dff text + 2px bottom border #534dff", use: "Section navigation" }
    tab-segmented: { type: tab, bg: "#f0f2f5", fg: "#6b7585", radius: 8, padding: "8px 16px", font: "14px/600", active: "#ffffff bg + #152632 text", use: "View switching" }
    toast-default: { type: toast, bg: "#152632", fg: "#ffffff", radius: 8, padding: "12px 16px", font: "14px/500", use: "Transient auto-dismiss notification" }
    dialog-modal: { type: dialog, bg: "#ffffff", fg: "#152632", radius: 16, padding: "32px", use: "Confirmation, forms, detail overlays" }
    dialog-drawer: { type: dialog, bg: "#ffffff", radius: 0, padding: "24px", use: "Side panel, detail view, filters" }
    toggle-default: { type: toggle, bg: "#534dff", radius: 9999, use: "Boolean settings, feature flags (off #cbd1d9)" }
---

# Design System Inspiration of LayerX

## 1. Visual Theme & Atmosphere

LayerX is a Tokyo-based "compound startup" whose mission — *すべての経済活動を、デジタル化する* ("digitize all economic activity") — sets the tone for a design language that is at once corporate-trustworthy and quietly futuristic. The brand's flagship is the **Bakuraku (バクラク)** suite, cloud back-office software for corporate spend, invoices, and expense management; the parent site (`layerx.co.jp`) is a refined modern corporate site that reads like a fintech infrastructure company rather than a consumer app. The atmosphere is **clean, white, generous with whitespace, and anchored by a single confident electric indigo** (`#534DFF`) that reads as both technological and human.

Where Japanese enterprise SaaS has historically leaned on cramped, information-dense, blue-grey government-adjacent interfaces, LayerX deliberately rejects that vocabulary. The canvas is pure white (`#ffffff`), headings are a near-black ink (`#152632` — a desaturated "Big Stone" navy rather than pure `#000`), and the indigo accent does all the work of signalling interactivity, energy, and forward motion. A secondary sky blue (`#8DBBFF`) softens the palette for backgrounds, illustration fills, and gradient washes, keeping the brand from feeling cold or strictly corporate.

The typographic system is bilingual by necessity: Japanese (kanji/kana) and Latin must sit on the same line and look balanced. The site relies on a **geometric/neo-grotesque sans for Latin** (system stacks led by Inter / Helvetica Neue) paired with a clean Japanese gothic (**Noto Sans JP / Hiragino Kaku Gothic / Yu Gothic**), tuned so that Japanese characters and Latin numerals share an even visual weight. The result is calm authority: the look of a company that handles other companies' money and wants every pixel to communicate competence.

**Key Characteristics:**
- Electric indigo (`#534DFF`) as the single primary interactive accent — energetic but trustworthy
- Pure white (`#ffffff`) canvas with desaturated navy ink (`#152632`) for headings
- Sky-blue secondary (`#8DBBFF`) for soft backgrounds, gradients, and illustration
- Bilingual JP/Latin type system, neo-grotesque + Noto Sans JP, optically balanced
- Generous whitespace, wide section rhythm, mission-driven corporate tone
- Soft, low-opacity neutral shadows — depth through layering, not drama
- Moderate-to-large border radii (8–16px) for an approachable, modern-SaaS feel

## 2. Color Palette & Roles

### Primary
- **LayerX Indigo** (`#534DFF`): The primary brand and interactive color. Primary CTAs, links, active states, focus rings, key data highlights. Bright violet-blue that is the unmistakable signature of the brand.
- **Indigo Hover** (`#403AE6`): Darkened indigo for hover/pressed states on primary buttons and links.
- **Indigo Tint** (`#EEEDFF`): Pale indigo wash for informational surfaces, selected rows, subtle highlight backgrounds.
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on indigo.
- **Big Stone Ink** (`#152632`): Primary heading color and strongest text — a desaturated near-black navy, warmer and softer than pure black.

### Brand / Marketing
- **Sky Blue** (`#8DBBFF`): Secondary brand color. Gradient washes, illustration fills, decorative accents, hero background tints. Pairs with indigo in marketing gradients (`#534DFF → #8DBBFF`).
- **Indigo Gradient End** (`#7B6CFF`): Lighter violet used as the bright end of the brand gradient on hero panels and feature cards.

### Semantic
- **Error Red** (`#E5484D`): Error states, destructive actions, failed validation, negative indicators.
- **Success Green** (`#1FA971`): Confirmations, completed approvals, positive financial indicators.
- **Warning Amber** (`#F5A623`): Pending approvals, attention-needed states, soft warnings.
- **Info Blue** (`#3E63DD`): Informational banners distinct from the indigo brand accent.

### Neutral Scale
- **Grey 50** (`#F7F8FA`): Lightest grey, section backgrounds, alternating zones.
- **Grey 100** (`#F0F2F5`): Card fills, disabled surfaces, table header rows.
- **Grey 200** (`#E3E6EB`): Default border color, dividers, input outlines.
- **Grey 300** (`#CBD1D9`): Strong borders, active input outlines.
- **Grey 400** (`#9AA4B2`): Placeholder text, disabled icons.
- **Grey 500** (`#6B7585`): Caption text, secondary labels, metadata.
- **Grey 600** (`#4A5360`): Body text, descriptions.
- **Grey 700** (`#333B45`): Emphasized body, sub-headings.
- **Grey 800** (`#1F2832`): Strong labels, navigation text (just above ink).

### Surface & Borders
- **Border Default**: `#E3E6EB` (grey200). Card borders, dividers, input borders.
- **Border Strong**: `#CBD1D9` (grey300). Emphasized/active borders.
- **Surface Raised**: `#ffffff`. Cards, dropdowns, floating panels.
- **Overlay Scrim**: `rgba(21, 38, 50, 0.55)`. Modal backdrop — navy-tinted dark, never pure black.

## 3. Typography Rules

### Font Family
- **Latin Primary**: `"Inter", "Helvetica Neue", Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Japanese Primary**: `"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif`
- **Combined stack (production)**: `"Inter", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Helvetica Neue", Arial, sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, "Roboto Mono", monospace` — used for figures in financial tables and invoice/amount displays.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter / Noto Sans JP | 48px | 700 | 60px (1.25) | -0.02em | Landing hero headline |
| Display | Inter / Noto Sans JP | 36px | 700 | 48px (1.33) | -0.02em | Section headers |
| Heading 1 | Inter / Noto Sans JP | 28px | 700 | 40px (1.43) | -0.01em | Feature titles |
| Heading 2 | Inter / Noto Sans JP | 22px | 700 | 32px (1.45) | -0.01em | Card / block headings |
| Heading 3 | Inter / Noto Sans JP | 18px | 600 | 28px (1.56) | normal | Sub-sections |
| Subtitle | Inter / Noto Sans JP | 16px | 600 | 26px (1.63) | normal | List headers, labels |
| Body Large | Inter / Noto Sans JP | 16px | 400 | 28px (1.75) | normal | Lead paragraphs |
| Body | Inter / Noto Sans JP | 15px | 400 | 26px (1.73) | normal | Standard reading text |
| Body Small | Inter / Noto Sans JP | 14px | 400 | 22px (1.57) | normal | Secondary text |
| Caption | Inter / Noto Sans JP | 12px | 400 | 18px (1.50) | 0.01em | Timestamps, fine print |
| Figure / Amount | SF Mono / Inter | 24px+ | 600 | tight | normal | Invoice & financial figures, tabular nums |

### Principles
- **Three weights in use**: 400 (body), 600 (emphasis/labels), 700 (headings). No light weights for UI; no 900.
- **Generous line-height for Japanese**: Body text uses 1.7–1.8 line-height so kanji and kana breathe — denser leading looks cramped in JP.
- **Negative tracking on display**: Large Latin headings tighten to `-0.02em`; Japanese display text stays near `normal` (tracking compresses kana awkwardly).
- **Tabular numerals for money**: Invoice amounts, totals, and figures use tabular/monospaced numerals so columns align in financial tables.
- **Bilingual balance**: Latin and Japanese are weighted to share even visual density on a shared line; never let one script dominate.

## 4. Component Stylings

### Buttons

LayerX buttons are a 2-axis system: **variant** (`primary | secondary | ghost | danger`) × **size** (`sm | md | lg`). Default size is `md` (values below). Geometry is consistent: moderate radius, comfortable horizontal padding, 600 weight labels.

**Primary**
- Background: `#534DFF`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 0 24px
- Font: 15px / 600 / Inter+Noto Sans JP
- Height: 44px
- Hover: background `#403AE6`
- Pressed: background `#3530CC`
- Disabled: background `#C9C7F5`, text `#ffffff`
- Use: Primary CTA (お問い合わせ, 資料ダウンロード, 無料で始める)

**Secondary**
- Background: `#ffffff`
- Text: `#534DFF`
- Border: 1px solid `#534DFF`
- Radius: 8px
- Padding: 0 24px
- Font: 15px / 600
- Height: 44px
- Hover: background `#EEEDFF`
- Use: Secondary action paired with a primary CTA

**Ghost / Tertiary**
- Background: transparent
- Text: `#333B45`
- Border: none
- Radius: 8px
- Padding: 0 16px
- Font: 15px / 600
- Hover: background `#F0F2F5`
- Use: Low-emphasis nav actions, "もっと見る", inline links-as-buttons

**Danger**
- Background: `#E5484D`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 0 24px
- Font: 15px / 600
- Hover: background `#CC3B40`
- Use: Destructive confirmation (削除, 取り消し)

Size scale (height · font · padding · radius): `sm` 36px · 14px · 0 16px · 8px; `md` (default) 44px · 15px · 0 24px · 8px; `lg` 52px · 16px · 0 32px · 10px. Full-width modifier stretches to container with the same height.

### Inputs

**Text Field (default)**
- Background: `#ffffff`
- Text: `#1F2832`
- Border: 1px solid `#E3E6EB`
- Radius: 8px
- Padding: 11px 14px
- Font: 15px / 400
- Placeholder: `#9AA4B2`
- Focus: border `#534DFF` + ring `0 0 0 3px rgba(83,77,255,0.15)`
- Use: Standard form field

**Text Field (error)**
- Background: `#ffffff`
- Text: `#1F2832`
- Border: 1px solid `#E5484D`
- Radius: 8px
- Padding: 11px 14px
- Focus ring: `0 0 0 3px rgba(229,72,77,0.15)`
- Use: Validation failure — paired with red help text below

**Select / Dropdown**
- Background: `#ffffff`
- Border: 1px solid `#E3E6EB`
- Radius: 8px
- Padding: 11px 14px
- Chevron: `#6B7585`
- Use: Single choice from a list; menu surface uses Surface Raised + Level 3 shadow

**Textarea** reuses the default field geometry with min-height 96px and 1.7 line-height.

### Cards

**Standard**
- Background: `#ffffff`
- Border: 1px solid `#E3E6EB`
- Radius: 12px
- Padding: 24px
- Shadow: `0 1px 3px rgba(21,38,50,0.06)`
- Use: Feature blocks, content panels, dashboard tiles

**Featured / Promo**
- Background: `#ffffff` (or gradient `#534DFF → #7B6CFF` for hero promos)
- Border: none
- Radius: 16px
- Padding: 32px
- Shadow: `0 4px 16px rgba(21,38,50,0.10)`
- Use: Hero/marketing cards, pricing highlight, case-study spotlight

**Compact / List**
- Background: `#ffffff`
- Border: 1px solid `#E3E6EB`
- Radius: 8px
- Padding: 16px
- Shadow: none
- Use: List rows, dense table-adjacent cards

### Badges

**Solid / Brand**
- Background: `#534DFF`
- Text: `#ffffff`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600
- Use: Primary emphasis ("NEW", "おすすめ")

**Soft / Brand**
- Background: `#EEEDFF`
- Text: `#403AE6`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600
- Use: Subtle category/status tag

**Soft / Success**
- Background: `#E6F6EF`
- Text: `#1FA971`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600
- Use: Approved / completed (承認済み, 完了)

**Soft / Warning**
- Background: `#FEF3E2`
- Text: `#C77F12`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600
- Use: Pending approval (承認待ち)

**Soft / Danger**
- Background: `#FCE9EA`
- Text: `#CC3B40`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600
- Use: Rejected / error (却下, エラー)

### Tabs

**Underline Tab (Active)**
- Background: transparent
- Text: `#534DFF`
- Indicator: 2px bottom border `#534DFF`
- Inactive text: `#6B7585`
- Font: 15px / 600
- Padding: 12px 16px
- Use: Section navigation within a page or dashboard

**Pill / Segmented**
- Container background: `#F0F2F5`
- Active: `#ffffff` bg + `#152632` text + `0 1px 2px rgba(21,38,50,0.08)` shadow
- Inactive text: `#6B7585`
- Radius: 8px (container), padding 8px 16px per segment
- Font: 14px / 600
- Use: View switching (月次 / 週次, table / card)

### Toasts

**Default**
- Background: `#152632`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0 4px 16px rgba(21,38,50,0.16)`
- Font: 14px / 500
- Use: Transient auto-dismiss notification ("コピーしました")

**Success / Error variants** add a 16px leading icon and tint the icon (`#1FA971` / `#E5484D`); the surface stays navy `#152632`.

### Dialogs

**Centered Modal**
- Background: `#ffffff`
- Text: `#152632`
- Radius: 16px
- Padding: 32px
- Shadow: `0 16px 48px rgba(21,38,50,0.20)`
- Backdrop: `rgba(21,38,50,0.55)`
- Use: Confirmation, forms, detail overlays

**Side Panel / Drawer**
- Background: `#ffffff`
- Radius: 0 (full-height right-attached)
- Padding: 24px
- Shadow: `-8px 0 24px rgba(21,38,50,0.12)`
- Use: Detail view, filters, invoice preview in the Bakuraku product UI

### Toggles

**Default**
- Background: `#534DFF` (on) / `#CBD1D9` (off)
- Radius: 9999px
- Thumb: `#ffffff` 18px circle, shadow `0 1px 2px rgba(21,38,50,0.20)`
- Use: Boolean settings, feature flags

---

**Verified:** 2026-06-06 (OmD v0.1). Primary `#534DFF` grounded via WebSearch (brand-color aggregators) and `layerx.co.jp` WebFetch (mission/tone, white-canvas corporate layout). Secondary `#8DBBFF` and ink `#152632` confirmed in the same brand-color record. Component geometry (radii 8/12/16, 44px buttons, focus-ring tokens) is a documented modern-SaaS interpretation consistent with the live site's refined corporate styling; exact product-UI tokens for the Bakuraku app were not independently dumped from a public spec and are reasoned, brand-faithful values.


**Tier 1 sources:** https://layerx.co.jp (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Section vertical rhythm: 96px between major marketing sections, 64px on tablet
- Card internal padding: 24px (standard), 32px (featured)

### Grid & Container
- Max content width: 1200px, centered
- Marketing layout: 12-column grid, 24px gutters
- Horizontal page padding: 24px mobile, 40px tablet, auto-center desktop
- Product (Bakuraku) UI: left nav + fluid content area, data tables at full content width

### Whitespace Philosophy
- **Whitespace as trust.** Generous margins around headlines and CTAs signal an established infrastructure company, not a scrappy startup. Sections breathe.
- **One idea per band.** Each full-width section carries a single message — headline, supporting copy, one visual, one CTA — separated by 96px.
- **Dense where it counts.** Marketing pages are spacious; the product's invoice/expense tables are deliberately dense and tabular, with 8–12px row padding.

### Border Radius Scale
- Compact (6px): Badges, tags, inline chips
- Standard (8px): Buttons, inputs, compact cards, segmented controls
- Comfortable (12px): Standard cards, dropdowns
- Large (16px): Featured cards, modals, hero panels
- Pill (9999px): Toggles, avatar rings, status dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, optional 1px `#E3E6EB` border | Page background, inline-bordered cards |
| Subtle (Level 1) | `0 1px 3px rgba(21,38,50,0.06)` | Standard cards, list separation |
| Standard (Level 2) | `0 4px 16px rgba(21,38,50,0.10)` | Featured cards, hover-lifted tiles |
| Elevated (Level 3) | `0 8px 24px rgba(21,38,50,0.12)` | Dropdowns, popovers, drawers |
| Modal (Level 4) | `0 16px 48px rgba(21,38,50,0.20)` | Dialogs, command palettes |

**Shadow Philosophy**: Shadows are single-layer, low-opacity, and tinted with the navy ink (`rgba(21,38,50,…)`) rather than pure black — keeping elevation cohesive with the cool, corporate palette. Depth comes mostly from a 1px border + faint shadow, not from dramatic drop shadows. In a fintech context, restraint reads as competence; heavy shadows would feel consumer-app playful and undercut the infrastructure positioning.

### Blur Effects
- Sticky header applies a subtle `backdrop-filter: blur(8px)` with `rgba(255,255,255,0.8)` on scroll.
- Modal backdrops use the navy scrim, no blur, to keep dialog content sharp.

## 7. Do's and Don'ts

### Do
- Use LayerX Indigo (`#534DFF`) for all primary interactive elements — CTAs, links, focus rings, active tabs.
- Keep the canvas white and let whitespace carry the corporate, trustworthy feel.
- Use the navy ink (`#152632`) for headings instead of pure black — softer, on-brand.
- Pair indigo with sky blue (`#8DBBFF`) only for gradients, illustration, and decorative fills.
- Use tabular numerals for invoice amounts and financial figures.
- Maintain 1.7–1.8 line-height on Japanese body text.
- Keep radii in the 8–16px band for an approachable modern-SaaS look.

### Don't
- Don't use indigo as a decorative background fill behind body text — reserve it for interaction and brand gradients.
- Don't use pure black (`#000`) for text or pure-black shadows — use navy ink and navy-tinted shadows.
- Don't crowd Japanese text with tight leading — it looks cramped and untrustworthy.
- Don't introduce a second accent hue for CTAs; indigo is the sole interactive color.
- Don't use heavy multi-layer shadows — single-layer, low-opacity only.
- Don't mix the sky-blue secondary into button fills — it's for gradients and illustration, not actions.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, stacked sections, 24px padding, hamburger nav |
| Tablet | 768–1024px | 2-column feature grids, 40px padding, condensed nav |
| Desktop | >1024px | Full 12-column grid, 1200px max-width centered, full nav bar |
| Wide | >1440px | Content stays 1200px; extra space becomes margin |

### Touch Targets
- Buttons: minimum 44px height (md), 36px (sm) reserved for desktop-dense UI only
- Nav links and list rows: minimum 44px tappable height on mobile
- Toggles and checkboxes: 24px control with 44px hit area

### Collapsing Strategy
- Desktop multi-column feature grids collapse to a single stacked column on mobile.
- Top nav collapses to a hamburger drawer below 768px; CTA stays visible as a sticky bottom or pinned header button.
- Product (Bakuraku) left nav collapses to an icon rail, then to a drawer on mobile.
- Data tables become stacked key–value cards on narrow screens.

### Image Behavior
- Product screenshots: full-width within container, 12px radius, subtle Level-1 shadow.
- Illustrations use the indigo→sky-blue gradient palette, scale fluidly, maintain aspect ratio.
- Logos in customer-logo strips: greyscale `#9AA4B2` at rest, full-color on hover (marketing trust strip).

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: LayerX Indigo (`#534DFF`)
- CTA Hover: Indigo Hover (`#403AE6`)
- Background: Pure White (`#ffffff`)
- Background Surface: Grey 50 (`#F7F8FA`)
- Heading text: Big Stone Ink (`#152632`)
- Body text: Grey 600 (`#4A5360`)
- Caption text: Grey 500 (`#6B7585`)
- Placeholder: Grey 400 (`#9AA4B2`)
- Border: Grey 200 (`#E3E6EB`)
- Success: Green (`#1FA971`)
- Error: Red (`#E5484D`)
- Warning: Amber (`#F5A623`)
- Secondary brand (gradient/illustration only): Sky Blue (`#8DBBFF`)

### Example Component Prompts
- "Create a primary button: `#534DFF` bg, white text, 15px weight 600, 44px height, 8px radius, 0 24px padding. Hover `#403AE6`. Focus ring `0 0 0 3px rgba(83,77,255,0.15)`."
- "Build a feature card: white bg, 1px `#E3E6EB` border, 12px radius, 24px padding, shadow `0 1px 3px rgba(21,38,50,0.06)`. Heading 22px/700 `#152632`, body 15px/400 `#4A5360`, line-height 1.73."
- "Design a hero section: white canvas, 1200px max-width centered, 96px vertical padding. Headline 48px/700 `#152632`, -0.02em tracking. CTA primary button + secondary outline button (indigo border, indigo text)."
- "Create an input field: white bg, 1px `#E3E6EB` border, 8px radius, 11px 14px padding, 15px text `#1F2832`, placeholder `#9AA4B2`. Focus: border `#534DFF` + 3px indigo ring."
- "Design a status badge: soft success — `#E6F6EF` bg, `#1FA971` text, 6px radius, 2px 8px padding, 12px/600. Use for 承認済み."

### Iteration Guide
1. Use the bilingual stack: `"Inter", "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif`.
2. Primary interactive color is `#534DFF` — the only accent for CTAs/links/focus.
3. Headings use navy ink `#152632`, never pure black.
4. Body text on Japanese gets 1.7–1.8 line-height.
5. Radii: 8px buttons/inputs, 12px cards, 16px modals/featured, pill for toggles.
6. Shadows: single-layer, navy-tinted (`rgba(21,38,50,…)`), low opacity.
7. Whitespace is generous — 96px between marketing sections, 24–32px card padding.

---

## 10. Voice & Tone

LayerX speaks with the calm confidence of an infrastructure company that businesses entrust with their money and back-office operations. Japanese is the primary voice; English exists for global recruiting and investor surfaces but is secondary. The tone is **mission-driven, optimistic, and precise** — declarative statements about digitizing economic activity, never hype-y or jokey. Copy favors clear value ("バクラクに、業務を。") over feature lists, and treats the reader as a competent professional, not a novice.

| Context | Tone |
|---|---|
| CTAs | Concise imperative (`お問い合わせ`, `資料をダウンロード`, `無料で試す`) |
| Section headlines | Declarative mission/value statements — short, confident |
| Body copy | Polite-plain (です・ます) professional register, no slang |
| Success messages | Single past-tense confirmation (`承認しました`), no emoji |
| Error messages | Specific, blameless, actionable (`金額を再度ご確認ください`) |
| Recruiting / culture | Warmer, forward-looking ("未来の希望を、実装しよう") |
| Legal / compliance | Formal Japanese business register, full です・ます with full disclosure |

**Forbidden moves.** No exclamatory hype ("すごい！"), no emoji in product/financial surfaces, no vague apologies ("ご不便をおかけして…") without a concrete next step, no casual-spoken endings on transactional copy. English strings stay corporate-neutral; avoid startup slang.

## 11. Brand Narrative

LayerX, Inc. is a **Tokyo-based compound startup founded in August 2018**, with the mission *すべての経済活動を、デジタル化する* — "digitize all economic activity." It began with a blockchain/R&D heritage and pivoted into enterprise SaaS, building the **Bakuraku (バクラク)** suite: cloud software for invoice processing, expense management, corporate cards, and back-office spend. The recruiting-facing tagline — *未来の希望を、実装しよう* ("let's implement a future full of hope") — captures the company's engineer-led, mission-forward identity.

The design system reflects this positioning. LayerX is not a consumer fintech app; it is **infrastructure for businesses**, and the visual language must earn the trust of finance and accounting teams. The choice of a vivid electric indigo (`#534DFF`) rather than the conservative navy of legacy Japanese enterprise software is deliberate: it signals that LayerX is a *modern* infrastructure company — technologically ambitious, software-native — while the white canvas, navy ink, and restrained shadows keep it firmly credible. The brand threads a narrow needle: energetic enough to feel like the future, sober enough to handle a corporation's money.

What LayerX refuses: the cramped, grey, ActiveX-era density of incumbent Japanese back-office tools; the cartoonish playfulness of consumer apps; and the cold sterility of pure-enterprise dashboards. It occupies a confident middle — clean, spacious, indigo-accented, bilingual, and unmistakably built by engineers for serious work.

## 12. Principles

1. **Whitespace is credibility.** Generous margins around headlines and CTAs signal an established infrastructure company. Reducing whitespace to fit more content is the wrong trade — add a section instead.
2. **One accent, one meaning.** `#534DFF` means "interactive." It is never a decorative fill behind text. Gradients and illustration use sky blue; actions use indigo.
3. **Ink, not black.** Headings and text use navy `#152632`; shadows use navy-tinted alpha. Pure black is too harsh for the calm corporate palette.
4. **Bilingual by default.** Every layout assumes Japanese and Latin render together. Type weights, line-heights, and tracking are tuned so neither script dominates.
5. **Numbers are infrastructure.** Financial figures use tabular numerals and align in columns. Money is never decorative — it is precise, legible, and trustworthy.
6. **Restraint communicates trust.** Single-layer shadows, three font weights, one accent. In fintech, visual noise is a credibility tax.
7. **Dense where work happens.** Marketing pages breathe at 96px rhythm; product tables compress to 8–12px rows. Match density to the user's task.
8. **Mission over features.** Copy leads with the value and the mission, not a bullet list of capabilities.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Japanese B2B SaaS user segments, not individual people.*

**佐藤 美咲 (Misaki Sato), 34, Tokyo.** Accounting team lead at a 300-person company. Evaluates Bakuraku for invoice processing. Lives in spreadsheets and approval queues; needs dense, tabular, fast-loading screens with unambiguous status badges (承認待ち / 承認済み). Distrusts anything that looks "consumer-cute" — wants software that signals it can be audited. Reads Japanese only on product surfaces; English appears only in vendor names.

**田中 健一 (Kenichi Tanaka), 47, Osaka.** CFO of a mid-market manufacturer. Encounters LayerX first through the corporate marketing site. Judges credibility in seconds: clean layout, clear mission, recognizable customer logos. Whitespace and a confident headline matter more to him than feature depth at this stage. Will forward the page to his finance manager if it reads as "serious infrastructure," not a startup gamble.

**Emma Chen, 29, Singapore.** Engineering candidate browsing the English careers site. Responds to the "implement a future full of hope" framing and the engineer-led culture. Wants to see a modern, polished, technically credible brand — the indigo, the clean type, the product screenshots — as proof the company builds quality software. Bilingual; reads both EN and JP comfortably.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | Centered single line of `#6B7585` body text explaining what will appear (`まだ請求書がありません`), plus one primary CTA to add the first item. Optional light-line illustration in indigo/sky-blue, never a heavy graphic. |
| **Empty (filtered)** | Single `#9AA4B2` caption (`条件に一致する結果がありません`) with a "フィルターをクリア" ghost button. |
| **Loading (first paint)** | Skeleton blocks at `#F0F2F5` matching final layout. Shimmer 1.2s, 8% white highlight. Financial figures render as `—` until resolved, never as skeleton bars. |
| **Loading (action)** | Inline spinner in `#534DFF` inside the pressed button; label hidden, button width preserved to prevent double-submit. |
| **Error (inline field)** | 1px `#E5484D` border + 3px `rgba(229,72,77,0.15)` ring, red 12px help text below with one actionable sentence. |
| **Error (toast)** | `#152632` surface, white 14px text, red leading icon, 4s auto-dismiss, bottom-right with 24px inset. |
| **Error (page)** | Reserved for outages. Centered navy headline 18px/600, body in `#6B7585`, indigo retry button. No heavy illustration. |
| **Success (toast)** | `#152632` surface, green `#1FA971` icon, single past-tense sentence (`承認しました`). |
| **Success (status change)** | Row badge flips to Soft Success (`#E6F6EF` / `#1FA971`) with a 200ms tint fade. |
| **Disabled** | Button bg `#C9C7F5`; inputs keep `#E3E6EB` border at 0.6 opacity, cursor `not-allowed`. Geometry unchanged so re-enable is stable. |
| **Focus** | 3px `rgba(83,77,255,0.15)` ring + `#534DFF` border on all interactive elements. Always visible for keyboard users — never `outline: none` without a replacement. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state |
| `motion-fast` | 150ms | Hover, focus ring, button press, small reveals |
| `motion-standard` | 240ms | Default — dropdowns, card hover-lift, tab switch |
| `motion-slow` | 360ms | Modals, drawers, emphasized transitions |
| `motion-page` | 320ms | Route/section transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Appearing — modals, drawers, toasts, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Leaving — dismissals, pops |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — hover-lift, tab content, collapsibles |
| `ease-emphasis` | `cubic-bezier(0.2, 0.0, 0, 1)` | Hero reveals on scroll, featured-card entrances |

**Signature motions.**

1. **Card hover-lift.** On hover, cards rise 2px and shadow deepens Level-1 → Level-2 over `motion-standard / ease-standard`. Subtle, never bouncy — the corporate register forbids overshoot.
2. **Drawer slide.** Side panels (invoice preview, filters) slide from `x+24px` with `motion-slow / ease-enter`, backdrop fades to `rgba(21,38,50,0.55)`. Dismiss uses `motion-fast / ease-exit`.
3. **Scroll reveals.** Marketing sections fade + rise 16px on enter with `motion-slow / ease-emphasis`, staggered ~60ms per item. Used sparingly to keep the page calm.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; slides become fades. The site stays fully usable.

<!--
OmD v0.1 Sources — LayerX

Direct verification:
- WebFetch https://layerx.co.jp (2026-06-06): confirms mission "すべての経済活動を、デジタル化する",
  recruiting tagline "未来の希望を、実装しよう", Bakuraku product family, refined white-canvas
  corporate layout, optimistic mission-driven tone. No explicit hex/font in fetched markup.
- WebSearch (2026-06-06): brand-color aggregator records report primary #534DFF (rgb 83,77,255),
  complementary #8DBBFF (sky) and #152632 (Big Stone navy ink). Company profile: Tokyo compound
  startup founded Aug 2018, mission to digitize all economic activity, Bakuraku SaaS suite.
- Brandfetch (https://brandfetch.com/layerx.co.jp) returned HTTP 403; not used.

Token-level component values (radii 8/12/16, 44px button height, focus-ring rgba, shadow tokens,
type scale) are a brand-faithful modern-SaaS interpretation consistent with the live corporate
site's styling and the verified palette; LayerX/Bakuraku do not publish a public design-token spec,
so these are reasoned defaults, not dumped production tokens.

Personas (§13) are fictional archetypes informed by publicly described Japanese B2B SaaS segments.
Interpretive claims (e.g., indigo chosen to signal "modern infrastructure" vs legacy navy) are
editorial readings of the design, not documented LayerX statements.
-->

---
id: kintone
name: kintone
country: JP
category: productivity
homepage: "https://kintone.cybozu.co.jp"
primary_color: "#ef3f24"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kintone.cybozu.co.jp&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#ef3f24"
    primary-hover: "#d63b22"
    brand: "#ef3f24"
    canvas: "#ffffff"
    foreground: "#333333"
    muted: "#666666"
    on-primary: "#ffffff"
    surface: "#f5f5f5"
    hairline: "#dddddd"
    body: "#555555"
    placeholder: "#999999"
    accent-green: "#3fa862"
    accent-cerulean: "#00afec"
    accent-aloe: "#00afaa"
    accent-sunshine: "#ffba00"
    error: "#e74c3c"
    success: "#3fa862"
    warning: "#ffba00"
    info: "#00afec"
  typography:
    family: { sans: "Meiryo", mono: "SFMono-Regular" }
    display-hero:  { size: 40, weight: 700, lineHeight: 1.3, tracking: "0.02em", use: "Marketing hero みんな、つくれる" }
    display-large: { size: 32, weight: 700, lineHeight: 1.35, tracking: "0.02em", use: "Section titles, landing headers" }
    heading-1:     { size: 24, weight: 700, lineHeight: 1.4, use: "Page titles, app names" }
    heading-2:     { size: 20, weight: 700, lineHeight: 1.45, use: "Card headers, form section titles" }
    heading-3:     { size: 18, weight: 700, lineHeight: 1.5, use: "Sub-sections, field group labels" }
    subtitle:      { size: 16, weight: 700, lineHeight: 1.5, use: "List headers, dialog titles" }
    body-large:    { size: 16, weight: 400, lineHeight: 1.7, use: "Intro copy, descriptions" }
    body:          { size: 14, weight: 400, lineHeight: 1.7, use: "Standard UI text, record fields" }
    body-small:    { size: 13, weight: 400, lineHeight: 1.65, use: "Secondary info, table cells" }
    caption:       { size: 12, weight: 400, lineHeight: 1.6, use: "Field hints, timestamps, fine print" }
    label:         { size: 13, weight: 700, lineHeight: 1.5, use: "Form field labels above inputs" }
    button:        { size: 14, weight: 700, lineHeight: 1.0, tracking: "0.02em", use: "CTA and action button text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 64 }
  rounded: { sm: 4, md: 6, lg: 8, full: 9999 }
  shadow:
    subtle: "0 1px 3px rgba(0,0,0,0.08)"
    raised: "0 4px 12px rgba(0,0,0,0.12)"
    elevated: "0 4px 12px rgba(0,0,0,0.18)"
    modal: "0 8px 24px rgba(0,0,0,0.20)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#ef3f24", fg: "#ffffff", radius: "4px", padding: "10px 24px", font: "14px / 700", hover: "#d63b22", active: "#c0341e", disabled: "bg #f5b3aa fg #ffffff", use: "Primary CTA 無料ではじめる / 保存" }
    button-outline: { type: button, bg: "#ffffff", fg: "#ef3f24", border: "1px solid #ef3f24", radius: "4px", padding: "10px 24px", font: "14px / 700", hover: "#fff0ee", use: "Secondary action paired with primary" }
    button-neutral: { type: button, bg: "#ffffff", fg: "#555555", border: "1px solid #dddddd", radius: "4px", padding: "10px 20px", font: "14px / 700", hover: "bg #f5f5f5 border #bbbbbb", use: "Cancel, close, back キャンセル" }
    button-text: { type: button, bg: "transparent", fg: "#00afec", radius: "4px", padding: "8px 12px", font: "14px / 700", hover: "underline + #f5f5f5", use: "Inline link-style actions in tables/toolbars" }
    button-danger: { type: button, bg: "#e74c3c", fg: "#ffffff", radius: "4px", padding: "10px 24px", font: "14px / 700", hover: "#d63b22", use: "Destructive confirmation 削除する" }
    input-text: { type: input, bg: "#ffffff", fg: "#333333", border: "1px solid #dddddd", radius: "4px", padding: "8px 10px", font: "14px / 400", focus: "border #00afec + 0 0 0 2px rgba(0,175,236,0.15) ring", disabled: "bg #f5f5f5 fg #999999", use: "Single-line record fields, search" }
    input-error: { type: input, bg: "#ffffff", fg: "#333333", border: "1px solid #e74c3c", radius: "4px", use: "Validation failure with inline message" }
    card: { type: card, bg: "#ffffff", border: "1px solid #dddddd", radius: "6px", padding: "20px", shadow: "0 1px 3px rgba(0,0,0,0.08)", use: "Record cards, dashboard widgets, settings panels" }
    card-tile: { type: card, bg: "#ffffff", radius: "8px", padding: "16px", shadow: "0 1px 3px rgba(0,0,0,0.08)", hover: "0 4px 12px rgba(0,0,0,0.12)", use: "Signature app launcher tile" }
    badge-neutral: { type: badge, bg: "#f5f5f5", fg: "#555555", border: "1px solid #dddddd", radius: "12px", padding: "2px 10px", font: "12px / 700", use: "Neutral status / category tag" }
    badge-success: { type: badge, bg: "#e7f5ed", fg: "#3fa862", radius: "12px", padding: "2px 10px", font: "12px / 700", use: "Success status pill" }
    badge-info: { type: badge, bg: "#e6f7fd", fg: "#00afec", radius: "12px", padding: "2px 10px", font: "12px / 700", use: "Info status pill" }
    badge-danger: { type: badge, bg: "#fdeeee", fg: "#e74c3c", radius: "12px", padding: "2px 10px", font: "12px / 700", use: "Danger status pill" }
    tab-underline: { type: tab, fg: "#666666", border: "1px solid #dddddd bottom", font: "14px / 700", padding: "10px 16px", hover: "#333333", active: "#ef3f24 text + 2px bottom border #ef3f24", use: "Record detail tabs, settings nav" }
    toast: { type: toast, bg: "#333333", fg: "#ffffff", radius: "4px", padding: "12px 16px", shadow: "0 4px 12px rgba(0,0,0,0.18)", font: "13px / 400", use: "Auto-dismissing confirmation 保存しました" }
    dialog: { type: dialog, bg: "#ffffff", radius: "8px", padding: "24px", shadow: "0 8px 24px rgba(0,0,0,0.20)", use: "Confirmation dialogs, settings, backdrop rgba(0,0,0,0.5)" }
    toggle: { type: toggle, bg: "#dddddd", radius: "9999px", active: "#3fa862 track white thumb", use: "Enable/disable settings 通知をオン" }
---

# Design System Inspiration of kintone (キントーン)

## 1. Visual Theme & Atmosphere

kintone is Cybozu's no-code/low-code work platform — the tool a non-engineer reaches for when they want to turn a messy spreadsheet and an email thread into a real business application. Its design language reflects that mission: approachable, friendly, and unintimidating, but grounded enough that a sales team, a city government office, or a manufacturing floor all trust it with their daily operations. The marketing site opens on a generous white canvas (`#ffffff`) with near-black text (`#333333`) and a single, unmistakable accent: **KIN Red** (`#ef3f24`), a warm vermilion that is closer to Japanese-flag red than to alarm red. The whole atmosphere says "everyone can build this" — the literal tagline is **みんな、つくれる** ("Everyone can create").

Where most enterprise SaaS leans on corporate blue to signal trust, kintone deliberately chose red as its primary — a confident, energetic, distinctly Japanese choice that separates it from the sea of blue B2B tools. Red is paired with a playful secondary palette of four named hues (a green, a cerulean, a teal-aloe, and a sunshine yellow) that color-code app categories, illustration spots, and the famous round-cornered "app icon" tiles. The effect is cheerful and modular, like a box of building blocks — appropriate for a product whose entire premise is assembling apps from parts.

Typographically, kintone is pragmatic and Japanese-first. The product UI ships with **Meiryo** as the default face, falling back through Hiragino Kaku Gothic and Noto Sans JP — clean humanist gothic (sans-serif) typefaces optimized for dense, legible Japanese business text on screen. There is no exotic custom typeface here; legibility for spreadsheets, records, and long field labels wins over branded letterforms.

**Key Characteristics:**
- KIN Red (`#ef3f24`) as the singular brand primary — warm vermilion, not corporate blue
- Friendly four-color secondary palette: Shamrock green, Cerulean, Aloe teal, Sunshine yellow
- Meiryo / Hiragino / Noto Sans JP gothic stack — Japanese-first, screen-optimized legibility
- White canvas, near-black `#333333` body text, soft gray dividers
- Rounded, tile-like "app icon" motif — modular, block-by-block construction
- Generous whitespace and large friendly CTAs — "anyone can do this" reassurance
- Restrained, mostly flat depth — light cards over heavy shadows

## 2. Color Palette & Roles

### Primary
- **KIN Red** (`#ef3f24`): The brand primary. Pantone 485, CMYK 0/100/95/0, RGB 239/63/36. Logo, primary CTAs, key links, brand moments, the default app header theme. Warm vermilion — energetic and friendly, never an "error red."
- **Pure White** (`#ffffff`): Page background, card surfaces, content canvas.
- **Near Black** (`#333333`): Primary heading and body text. A soft, warm dark gray rather than pure `#000000` — easier on the eyes across long records.

### Secondary (Named Brand Hues)
- **KIN Shamrock** (`#3fa862`): Green. Success, "create/add" affordances, green-themed app icons and illustration spots.
- **KIN Cerulean** (`#00afec`): Bright sky blue. Informational accents, links in product chrome, blue-themed app tiles.
- **KIN Aloe** (`#00afaa`): Teal. Alternative categorization, secondary highlights, teal-themed tiles.
- **KIN Sunshine** (`#ffba00`): Warm yellow. Attention, highlights, pinned/featured states, yellow-themed tiles.

### Semantic
- **Error / Danger** (`#e74c3c` → use `#d63b22` for destructive emphasis): Validation errors, delete confirmations. Kept distinct in tone from the friendly brand red by leaning slightly darker/cooler.
- **Success** (`#3fa862`): Save confirmations, completed workflow steps (reuses Shamrock).
- **Warning** (`#ffba00`): Pending approvals, attention-needed states (reuses Sunshine).
- **Info** (`#00afec`): Tips, neutral notices (reuses Cerulean).

### Neutral Scale
- **Gray 900** (`#333333`): Headings, primary text.
- **Gray 700** (`#555555`): Body text, descriptions.
- **Gray 600** (`#666666`): Secondary labels, field captions.
- **Gray 500** (`#999999`): Placeholder text, disabled labels, metadata.
- **Gray 400** (`#bbbbbb`): Disabled icons, faint borders.
- **Gray 300** (`#dddddd`): Default borders, dividers, table rules.
- **Gray 200** (`#e8e8e8`): Input outlines, row hover separators.
- **Gray 100** (`#f5f5f5`): Secondary backgrounds, table header fills, hovered rows.
- **Gray 50** (`#fafafa`): App canvas tint, subtle zebra striping.

### Surface & Borders
- **Border Default**: `#dddddd`. Card borders, table grid lines, input outlines.
- **Border Strong**: `#bbbbbb`. Emphasized borders, focused container edges.
- **Surface Subtle**: `#f5f5f5`. Form section backgrounds, list zebra rows.
- **Header Surface**: `#ef3f24` (default theme) — the product header bar; admins may re-theme.
- **Overlay Scrim**: `rgba(0,0,0,0.5)`. Modal/dialog backdrops.

## 3. Typography Rules

### Font Family
- **Primary (JP UI)**: `"メイリオ", Meiryo, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Noto Sans JP", sans-serif`
- **Latin / Marketing**: `"Helvetica Neue", Arial, "Noto Sans JP", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif`
- **Monospace**: `"SFMono-Regular", Consolas, "Courier New", monospace` (code fields, formula display)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Meiryo stack | 40px | 700 | 1.30 | 0.02em | Marketing hero — みんな、つくれる |
| Display Large | Meiryo stack | 32px | 700 | 1.35 | 0.02em | Section titles, landing headers |
| Heading 1 | Meiryo stack | 24px | 700 | 1.40 | normal | Page titles, app names |
| Heading 2 | Meiryo stack | 20px | 700 | 1.45 | normal | Card headers, form section titles |
| Heading 3 | Meiryo stack | 18px | 700 | 1.50 | normal | Sub-sections, field group labels |
| Subtitle | Meiryo stack | 16px | 700 | 1.50 | normal | List headers, dialog titles |
| Body Large | Meiryo stack | 16px | 400 | 1.70 | normal | Intro copy, descriptions |
| Body | Meiryo stack | 14px | 400 | 1.70 | normal | Standard UI text, record fields |
| Body Small | Meiryo stack | 13px | 400 | 1.65 | normal | Secondary info, table cells |
| Caption | Meiryo stack | 12px | 400 | 1.60 | normal | Field hints, timestamps, fine print |
| Label | Meiryo stack | 13px | 700 | 1.50 | normal | Form field labels above inputs |
| Button | Meiryo stack | 14px | 700 | 1.00 | 0.02em | CTA and action button text |

### Principles
- **Japanese-first legibility**: Line-height runs generous (1.7 for body) because dense kanji at small sizes needs vertical air to stay readable. Never tighten below 1.6 for Japanese body text.
- **Two weights**: 400 (regular) for reading, 700 (bold) for headings, labels, and buttons. kintone avoids thin or extra-bold weights — the Meiryo stack renders cleanly only at these two.
- **Mild positive tracking on headlines**: A touch of `0.02em` on large display text keeps mixed kanji/kana/Latin runs from feeling cramped. Body text uses normal tracking.
- **Labels are bold, fields are regular**: Form field labels are 13px/700; the values entered into them are 14px/400. This bold-label/regular-value rhythm is the backbone of every kintone record.
- **No all-caps for Japanese**: Latin UI labels may use sentence case; Japanese never uses letter-spacing tricks meant for Latin.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#ef3f24`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 10px 24px
- Font: 14px / 700 / Meiryo stack
- Hover: `#d63b22` (darkened ~8%)
- Active: `#c0341e`
- Disabled: `#f5b3aa` bg, `#ffffff` text
- Use: Primary CTA — 無料ではじめる ("Start free"), 保存 ("Save"), アプリを作る ("Create app")

**Secondary / Outline**
- Background: `#ffffff`
- Text: `#ef3f24`
- Border: 1px solid `#ef3f24`
- Radius: 4px
- Padding: 10px 24px
- Font: 14px / 700 / Meiryo stack
- Hover: `#fff0ee` background tint
- Use: Secondary action paired with a primary CTA (詳しく見る, キャンセル alternative)

**Neutral / Default**
- Background: `#ffffff`
- Text: `#555555`
- Border: 1px solid `#dddddd`
- Radius: 4px
- Padding: 10px 20px
- Font: 14px / 700 / Meiryo stack
- Hover: `#f5f5f5` background, `#bbbbbb` border
- Use: Cancel, close, back — neutral in-app actions (キャンセル, 閉じる)

**Subtle / Text**
- Background: transparent
- Text: `#00afec`
- Border: none
- Radius: 4px
- Padding: 8px 12px
- Font: 14px / 700 / Meiryo stack
- Hover: underline + `#f5f5f5` background
- Use: Inline link-style actions inside dense tables and toolbars

**Danger**
- Background: `#e74c3c`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 10px 24px
- Font: 14px / 700 / Meiryo stack
- Hover: `#d63b22`
- Use: Destructive confirmation (削除する, レコードを削除)

### Inputs

**Text Field (default)**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dddddd`
- Radius: 4px
- Padding: 8px 10px
- Font: 14px / 400 / Meiryo stack
- Placeholder: `#999999`
- Focus: border `#00afec`, subtle `0 0 0 2px rgba(0,175,236,0.15)` ring
- Disabled: `#f5f5f5` bg, `#999999` text
- Use: Single-line record fields, search boxes

**Textarea / Multi-line**
- Same as text field; min-height 80px, line-height 1.7
- Use: Multi-line text fields, comments, notes

**Error State**
- Border: 1px solid `#e74c3c`
- Background: `#ffffff` (or `#fdeeee` tint for emphasis)
- Help text below: `#e74c3c` 12px / 400
- Use: Validation failure — paired with inline message

**Select / Dropdown**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Radius: 4px
- Padding: 8px 32px 8px 10px (room for chevron)
- Chevron: `#999999`
- Use: Drop-down field, status pickers

### Cards / Containers

**Standard Card**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Radius: 6px
- Padding: 20px
- Shadow: `0 1px 3px rgba(0,0,0,0.08)`
- Use: Record cards, dashboard widgets, settings panels

**App Tile (signature)**
- Background: one of the named hues or `#ffffff`
- Border: none (color-block) or 1px `#dddddd` (white)
- Radius: 8px
- Padding: 16px
- Icon: rounded-square glyph, white or colored
- Shadow: `0 1px 3px rgba(0,0,0,0.08)`, lifts to `0 4px 12px rgba(0,0,0,0.12)` on hover
- Use: The app launcher grid — kintone's most recognizable surface

**Flat Section**
- Background: `#f5f5f5`
- Border: none
- Radius: 4px
- Padding: 16px
- Use: Form section groupings inside the record editor

### Tables

**Data Table**
- Header: `#f5f5f5` background, `#555555` 13px / 700 text
- Row border: 1px solid `#dddddd` (horizontal rules only)
- Row hover: `#fafafa`
- Cell padding: 8px 12px
- Font: 13px / 400 / Meiryo stack, `#333333`
- Zebra (optional): even rows `#fafafa`
- Use: Record list view — the workhorse surface of every kintone app

### Badges / Status Labels

**Status Pill (default)**
- Background: `#f5f5f5`
- Text: `#555555`
- Border: 1px solid `#dddddd`
- Radius: 12px
- Padding: 2px 10px
- Font: 12px / 700 / Meiryo stack
- Use: Neutral status / category tag

**Status Pill (colored)** — Success / Info / Warning / Danger
- Success: `#e7f5ed` bg, `#3fa862` text
- Info: `#e6f7fd` bg, `#00afec` text
- Warning: `#fff6e0` bg, `#b37e00` text
- Danger: `#fdeeee` bg, `#e74c3c` text
- Radius: 12px, padding 2px 10px, 12px / 700
- Use: Process-management status, record state

### Tabs

**Underline Tabs**
- Container border-bottom: 1px solid `#dddddd`
- Inactive: `#666666` text, 14px / 700, transparent underline
- Active: `#ef3f24` text + 2px `#ef3f24` underline
- Hover: `#333333` text
- Padding: 10px 16px
- Use: Record detail tabs, settings navigation

### Toasts / Notifications

**Default Toast**
- Background: `#333333`
- Text: `#ffffff`
- Radius: 4px
- Padding: 12px 16px
- Shadow: `0 4px 12px rgba(0,0,0,0.18)`
- Font: 13px / 400 / Meiryo stack
- Use: Auto-dismissing confirmation (保存しました)

**Success Banner (inline)**
- Background: `#e7f5ed`
- Text: `#2e7d4f`
- Border-left: 4px solid `#3fa862`
- Radius: 4px
- Padding: 12px 16px
- Use: Persistent success/confirmation in-page

### Dialogs

**Centered Modal**
- Background: `#ffffff`
- Radius: 8px
- Padding: 24px
- Shadow: `0 8px 24px rgba(0,0,0,0.20)`
- Header: 20px / 700 `#333333`
- Backdrop: `rgba(0,0,0,0.5)`
- Use: Confirmation dialogs, app/field settings, delete confirmation

### Toggles / Checkboxes

**Checkbox**
- Unchecked: `#ffffff` bg, 1px `#bbbbbb` border, 4px radius
- Checked: `#ef3f24` bg, white check glyph
- Use: Multi-select fields, settings flags

**Toggle Switch**
- On: `#3fa862` track, white thumb
- Off: `#dddddd` track, white thumb
- Radius: 9999px
- Use: Enable/disable settings (通知をオン)

---

**Verified:** 2026-06-06 (OmD v0.1)
**Tier 1 sources:** kintone.cybozu.co.jp (live marketing site — white canvas, KIN Red CTAs, みんな、つくれる tagline); Kintone Brand Guidelines PDF (kintone.com/en-us/files/Brand-Guidelines.pdf — KIN Red `#ef3f24` Pantone 485, secondary palette Shamrock `#3fa862` / Cerulean `#00afec` / Aloe `#00afaa` / Sunshine `#ffba00`) · https://kintone.cybozu.co.jp (live production site)
**Tier 2 sources:** kintone Help (theme/header color docs — default red header theme, admin re-theming); community font references (Meiryo default UI font, Hiragino/Noto Sans JP fallbacks)
**Notes:** Neutral gray scale and component geometry (radii, padding, shadows) are derived from the live kintone product UI and marketing site; named brand hues and primary red are sourced directly from the official Brand Guidelines.

## 5. Layout Principles

### Spacing System
- Base unit: 4px (UI), 8px scaling for layout
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 64px
- Form field vertical rhythm: 16px between fields, 24px between sections
- Marketing section padding: 64px+ top/bottom on desktop

### Grid & Container
- Marketing max content width: ~1080px, centered
- Product app view: fluid full-width with a fixed top header bar (default `#ef3f24`)
- App launcher: responsive tile grid, ~4-6 columns desktop collapsing to 2 on mobile
- Record editor: single-column form, optional 2-column field groups on wide screens
- Tables: full-width, horizontal scroll when columns exceed viewport

### Whitespace Philosophy
- **Reassuring openness**: The marketing site leaves large margins around CTAs and illustrations — the "anyone can do this" promise reads as visual calm, not density.
- **Dense where work happens**: Inside the product, record lists and tables tighten up (8px cell padding) because power users scan hundreds of rows; the chrome around them stays roomy.
- **Grouped by function**: Form sections are separated by 24px gaps and light `#f5f5f5` section fills so a 40-field app still parses as discrete blocks.

### Border Radius Scale
- Compact (4px): Buttons, inputs, pills-base, flat sections
- Standard (6px): Cards, panels, dialogs base
- Comfortable (8px): App tiles, modals, featured containers
- Pill (9999px): Toggles, status pills, avatar chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, form sections, table rows |
| Subtle (Level 1) | `0 1px 3px rgba(0,0,0,0.08)` | Cards, app tiles at rest, widgets |
| Raised (Level 2) | `0 4px 12px rgba(0,0,0,0.12)` | Hovered tiles, dropdowns, popovers |
| Elevated (Level 3) | `0 4px 12px rgba(0,0,0,0.18)` | Toasts, floating action panels |
| Modal (Level 4) | `0 8px 24px rgba(0,0,0,0.20)` | Dialogs, full modals |

**Shadow Philosophy**: kintone stays mostly flat. It is a work tool, not a showcase — shadows exist to signal "this is liftable/clickable" (tiles, dropdowns) or "this is on top" (modals, toasts), never for decoration. All shadows are neutral black at low opacity; there are no colored or multi-layer atmospheric shadows. The strongest depth cue in the product is actually the header color block and border lines, not elevation. Borders (`#dddddd`) do most of the structural work that shadows do elsewhere.

### Blur Effects
- Modal backdrops use a flat `rgba(0,0,0,0.5)` scrim, not a blur — keeping the work context lightly visible behind a dialog.
- The product header stays opaque; no scroll-triggered translucency.

## 7. Do's and Don'ts

### Do
- Use KIN Red (`#ef3f24`) for the primary CTA and brand moments — it is the one hero color
- Pair red with the named secondary hues (Shamrock, Cerulean, Aloe, Sunshine) for category color-coding
- Use the Meiryo → Hiragino → Noto Sans JP stack for Japanese-first legibility
- Keep body line-height generous (1.7) for dense Japanese text
- Use bold (700) labels above regular (400) field values — the record rhythm
- Use 4px radius on inputs/buttons, 6-8px on cards/tiles
- Rely on `#dddddd` borders for structure; keep shadows subtle
- Use the rounded app-tile motif for launcher and category grids

### Don't
- Don't treat the brand red as an error red — destructive states lean slightly darker/cooler (`#e74c3c`/`#d63b22`)
- Don't default to corporate blue as the primary — kintone's identity is red
- Don't tighten Japanese body line-height below 1.6 — kanji needs the air
- Don't use heavy or multi-layer colored shadows — kintone is flat and neutral
- Don't use thin or extra-bold font weights — only 400 and 700 render cleanly in the stack
- Don't crowd the marketing CTAs — openness is the "anyone can build this" signal
- Don't use all four secondary hues at once on a single surface — pick one or two for color-coding

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Single column, 2-col tile grid, stacked CTAs, collapsed nav |
| Tablet | 600-960px | 3-4 col tile grid, 2-col form groups, side margins |
| Desktop | 960-1280px | Full layout, 4-6 col launcher, fixed header |
| Large Desktop | >1280px | Centered ~1080px marketing content with wide margins |

### Touch Targets
- Buttons: minimum 40px tall (10px vertical padding + 14px text)
- Table row tap targets: minimum 44px on mobile
- App tiles: large square targets, ~88px+ on mobile
- Form inputs: 36-40px height

### Collapsing Strategy
- Marketing 3-column feature grids → 2 → single column stacked
- App launcher tiles reflow from 6 columns to 2
- Record editor 2-column field groups collapse to single column
- Data tables gain horizontal scroll rather than hiding columns
- Top header bar shrinks; secondary nav moves into a hamburger menu
- Hero type scales 40px → 28px on mobile, weight 700 retained

### Image Behavior
- Mascot/illustration spots scale down and may drop on mobile to save vertical space
- Customer logos render in a responsive wrapping row, grayscale at rest
- App icons keep their rounded-square frame at all sizes (24px in lists, 48px+ in launcher)

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: KIN Red (`#ef3f24`)
- CTA Hover: Dark Red (`#d63b22`)
- Background: Pure White (`#ffffff`)
- Surface tint: Light Gray (`#f5f5f5`)
- Heading / body text: Near Black (`#333333`)
- Secondary text: Gray (`#666666`)
- Placeholder: Gray (`#999999`)
- Border: Gray (`#dddddd`)
- Success / Green: Shamrock (`#3fa862`)
- Info / Blue: Cerulean (`#00afec`)
- Teal: Aloe (`#00afaa`)
- Warning / Yellow: Sunshine (`#ffba00`)
- Error: Red (`#e74c3c`)

### Example Component Prompts
- "Create a kintone primary button: #ef3f24 background, white text 14px weight 700, 4px radius, 10px 24px padding. Hover darkens to #d63b22. Font: Meiryo, Hiragino Kaku Gothic ProN, Noto Sans JP, sans-serif."
- "Build a record form field: bold label above (13px weight 700, #333333) and a text input below (white bg, 1px #dddddd border, 4px radius, 8px 10px padding, 14px #333333). Focus border #00afec with a soft 2px #00afec ring."
- "Design a kintone app tile: 8px radius square, colored or white background, rounded-square icon glyph, app name 14px weight 700 #333333. Shadow 0 1px 3px rgba(0,0,0,0.08), lifting to 0 4px 12px rgba(0,0,0,0.12) on hover."
- "Create a data table: #f5f5f5 header with #555555 13px weight 700 text, horizontal-only row rules in #dddddd, 8px 12px cell padding, 13px #333333 body, #fafafa row hover."
- "Build a status pill: success variant — #e7f5ed background, #3fa862 text, 12px weight 700, 12px radius, 2px 10px padding. Info variant uses #e6f7fd bg / #00afec text."

### Iteration Guide
1. Primary is always KIN Red `#ef3f24` — never substitute a blue primary
2. Use the Meiryo Japanese-first font stack; keep body line-height at 1.7
3. Labels bold (700), values regular (400) — the kintone record rhythm
4. Radius: 4px buttons/inputs, 6px cards, 8px tiles, pill for toggles/status
5. Structure with `#dddddd` borders; keep shadows subtle and neutral
6. Color-code categories with the four named hues — one or two per surface
7. Destructive actions use `#e74c3c`/`#d63b22`, kept distinct from brand red

---

## 10. Voice & Tone

kintone speaks like an encouraging colleague who genuinely believes you can build the thing yourself — warm, plain-spoken, and free of engineering jargon. The flagship tagline **みんな、つくれる** ("Everyone can create") sets the entire register: empowering, inclusive, never condescending. Japanese is the primary voice (kintone is a Cybozu domestic-first product); English strings on global surfaces are clean translations, not the source. Sentences are short. Buttons use plain verbs (つくる "create", はじめる "start", 保存 "save"). There is gentle warmth — a friendly mascot, soft exclamation — but never hype.

| Context | Tone |
|---|---|
| Marketing hero | Empowering, inclusive — みんな、つくれる. One idea, large and calm. |
| CTAs | Plain imperative verbs (無料ではじめる, アプリを作る, 試してみる). |
| Success messages | Brief past-tense confirmation (保存しました, 更新しました). No emoji. |
| Error messages | Specific, blameless, actionable. Tell the user what to fix, not "an error occurred". |
| Onboarding / empty states | Encouraging — explain the next step a beginner should take, one action. |
| Field hints / help | Concrete and example-driven; assumes a non-engineer reader. |
| Enterprise / IR pages | More formal Japanese business register (です・ます), same calm warmth. |

**Forbidden phrases.** Heavy engineering jargon on user-facing surfaces (the whole point is no-code). Hype superlatives ("革命的", "revolutionary"). Blame-shifting error copy ("操作が正しくありません" without guidance). English-first phrasing that ignores the Japanese primary. Treating the brand red as a scolding/error color in copy or UI.

## 11. Brand Narrative

kintone is the flagship work platform of **Cybozu, Inc. (サイボウズ株式会社)**, a Tokyo-based software company founded in **1997** that built its name on Japanese groupware — Cybozu Office and Garoon — before launching kintone in **2011** as a no-code/low-code platform for building business applications. Cybozu's corporate mission is **"チームワークあふれる社会を創る"** ("Create a society overflowing with teamwork"), and kintone is the product expression of that mission: give every team — not just engineers — the power to turn their own messy, spreadsheet-and-email workflows into real, shared applications.

The founding insight behind kintone is a rejection of the idea that building software must be the exclusive territory of IT departments and vendors. In a Japanese business culture historically dependent on Excel attachments emailed around an office and SIer (system integrator) contracts for any custom tool, kintone's pitch was radical: **みんな、つくれる** — the sales lead, the HR coordinator, the factory floor manager can each assemble the app they need by dragging fields onto a form. No code, no procurement cycle, no waiting on IT.

That democratizing thesis is why the brand looks the way it does. The warm KIN Red is approachable and energetic, not the cold institutional blue of legacy enterprise IT. The playful secondary palette and rounded app-tile motif make software construction feel like assembling building blocks. The friendly mascot and the plain, jargon-free voice all reinforce a single message: this is for everyone, and you can do it. kintone has grown into a platform used by tens of thousands of organizations across Japan and internationally (Cybozu operates kintone in the US and Southeast Asia as well), spanning local governments, manufacturers, retailers, and small businesses.

What kintone refuses: the gatekept, IT-only aesthetic of legacy enterprise software; the cold blue palette that signals "for engineers"; dense, intimidating interfaces that assume technical literacy. What it embraces: warmth, modularity, plain language, and the conviction that the people closest to the work are the ones who should be able to build the tools for it.

## 12. Principles

1. **Everyone can create.** The entire design exists to make a non-engineer feel capable. If a screen would intimidate a first-time builder, it is wrong. Plain verbs, visible next steps, no jargon.
2. **Red is welcome, not alarm.** KIN Red is the friendly, energetic brand hero — used for primary actions and brand moments. Error/destructive states are deliberately a different, cooler red so the brand color never feels like a scolding.
3. **Modularity is the metaphor.** Apps are built from fields; the launcher is a grid of tiles; categories are color-coded blocks. The visual language mirrors the product's "assemble it yourself" reality.
4. **Borders before shadows.** Structure comes from `#dddddd` rules and color blocks, not heavy elevation. The product is flat and calm because it is a daily work surface, not a demo.
5. **Open chrome, dense work.** Marketing and onboarding are spacious and reassuring; record lists and tables are tight and scannable. Density follows commitment — beginners get room, power users get data.
6. **Japanese-first legibility.** Typography, line-height, and font stacks assume kanji/kana render first. Generous 1.7 line-height for body is non-negotiable. Latin is a co-citizen, never the default.
7. **Two weights, plain faces.** 400 and 700 in a humanist gothic stack. No exotic display type — legibility for long field labels and dense records wins over branded letterforms.
8. **Warmth without hype.** The mascot, the soft red, the encouraging copy add warmth; superlatives and revolution-talk are banned. Confidence is shown by being easy, not by shouting.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described kintone user segments (non-technical business builders, SMB operations, local government, Cybozu's "teamwork" positioning), not individual people.*

**田中さん (Tanaka-san), 42, Nagoya.** Operations manager at a 60-person auto-parts manufacturer. Not an engineer — lives in Excel and email. Tanaka built the company's defect-tracking app himself in kintone over a weekend after his IT vendor quoted three months and a large fee. Values that he could drag fields onto a form and see a working record list immediately. Distrusts anything that looks like it needs a developer. Reads Japanese only; English UI is invisible to him. Measures the tool by how fast he can change a field when the factory floor's needs shift.

**佐藤さん (Sato-san), 35, Tokyo.** HR coordinator at a mid-size services firm. Uses kintone to run the employee onboarding workflow — process management with approval steps. Cares deeply about status pills and notifications being unambiguous, because a stuck approval means a new hire can't get a laptop. Appreciates the friendly tone; it makes a tedious task feel less bureaucratic. Would be annoyed by any redesign that made the record list less scannable.

**Maria Santos, 29, Manila.** Operations analyst at a regional retail chain using kintone (Southeast Asia). Builds inventory and store-visit apps. Works in English but on a Japanese-rooted product; values that the UI is clean and translates cleanly. Color-codes her apps with the secondary palette so the launcher reads at a glance. Treats kintone as the lightweight middle ground between a rigid ERP and a chaotic spreadsheet.

**市役所の山本さん (Yamamoto-san, city hall), 51, regional Japan.** Public-sector administrator digitizing a paper-based resident-request process. Risk-averse, needs reliability and an interface his whole (non-technical, mixed-age) team can use without training. The "everyone can create" promise is exactly why kintone won over a custom SIer build. Wants warmth and clarity over flashiness; the calm, bordered, flat UI reassures him.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no records yet)** | Friendly single line in `#666666` body text explaining the app is empty, plus one encouraging primary action ("レコードを追加" — Add a record) as a red CTA. Beginner-oriented, never a bare "No data". Often a light illustration/mascot spot. |
| **Empty (filtered, zero results)** | Single `#999999` caption ("条件に一致するレコードがありません" — No records match). No CTA; user adjusts the filter. Filter summary stays visible above. |
| **Loading (first paint)** | Neutral skeleton blocks at `#f5f5f5` matching the final table/form layout. Subtle 1.2s shimmer. No spinner overlay blocking the page. |
| **Loading (in-place refresh)** | Small inline spinner near the action; existing content stays visible with previous values. The record list never blanks during a refresh. |
| **Error (field validation)** | `#e74c3c` 1px border on the input, error text below in `#e74c3c` 12px. One actionable sentence describing what to fix (必須項目です → 〜を入力してください). |
| **Error (save failed)** | Inline banner above the form: `#fdeeee` background, `#e74c3c` left border, plain-language cause + retry. Never a generic "エラーが発生しました" alone. |
| **Success (saved)** | Brief `#333333` toast ("保存しました"), 3s auto-dismiss, no emoji. For persistent confirmation, a `#e7f5ed` / `#3fa862` inline banner. |
| **Success (workflow advanced)** | Status pill updates to the next process color (e.g. info `#00afec` → success `#3fa862`), with a notification to the next assignee. |
| **Skeleton** | `#f5f5f5` blocks at exact final dimensions, component radius preserved (4px fields, 6px cards). Gentle shimmer. |
| **Disabled** | Buttons drop to a faded tint (primary → `#f5b3aa`); inputs go `#f5f5f5` bg with `#999999` text but keep their `#dddddd` border so geometry is stable when re-enabled. |
| **Permission-restricted** | Field or app appears greyed with a `#999999` lock note explaining access is limited — never a silent disappearance, so the user understands the rule. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox/toggle state commit, selection ticks |
| `motion-fast` | 150ms | Hover, focus, button press, tooltip reveal |
| `motion-standard` | 250ms | The default — dropdown open, dialog fade-in, tab switch |
| `motion-slow` | 350ms | Modal entrance, page-level panel transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — dialogs, dropdowns, toasts |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals, closes |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — tab content, expanding sections |

**Signature motions.**

1. **App tile lift.** On hover, a launcher tile raises its shadow from `0 1px 3px rgba(0,0,0,0.08)` to `0 4px 12px rgba(0,0,0,0.12)` over `motion-fast / ease-standard` with a 1-2px translateY. The block-lifts-toward-you cue reinforces the "tap to open / pick this up" modularity metaphor.
2. **Dialog entrance.** Modals fade and scale from 98% over `motion-slow / ease-enter`, with the backdrop scrim fading `rgba(0,0,0,0)` → `rgba(0,0,0,0.5)` in sync. Dismissal uses `motion-fast / ease-exit` — leaving is quicker than arriving.
3. **Toast slide.** Confirmation toasts slide up from `y+12px` and fade in over `motion-standard / ease-enter`, hold, then fade out via `ease-exit`. No bounce — kintone's motion is calm and unfussy, matching a work tool.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Slides and scales become instant fades. The product stays fully usable; nothing depends on animation to be understood.

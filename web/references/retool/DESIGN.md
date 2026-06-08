---
id: retool
name: Retool
country: US
category: developer-tools
homepage: "https://retool.com"
primary_color: "#3C3C3C"
logo:
  type: simpleicons
  slug: "retool"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    cod-gray: "#1a1a1a"
    ink-black: "#0e0e0e"
    green-white: "#e9ebdf"
    white: "#ffffff"
    burnt-sienna: "#e0613a"
    burnt-sienna-hover: "#c94f2c"
    cornflower: "#6e8be0"
    smalt-blue: "#4e7c82"
    action-primary: "#3c3c3c"
    success: "#2fa86a"
    error: "#e5484d"
    warning: "#e0a23a"
    panel: "#232323"
    border-dark: "#2e2e2e"
    muted: "#6b6b6b"
    caption: "#8a8a8a"
    body-dark: "#b4b4b4"
    strong-dark: "#d6d6d6"
    light-100: "#f4f5ef"
    light-200: "#dcded2"
    light-border: "#cacbbf"
  typography:
    family: { sans: "Inter", mono: "IBM Plex Mono" }
    display-hero: { size: 56, weight: 700, lineHeight: 1.07, tracking: -0.02em, use: "Marketing hero headlines" }
    display:      { size: 40, weight: 700, lineHeight: 1.15, tracking: -0.02em, use: "Section headers" }
    h1:           { size: 30, weight: 600, lineHeight: 1.27, tracking: -0.01em, use: "Page titles" }
    h2:           { size: 22, weight: 600, lineHeight: 1.36, tracking: -0.01em, use: "Card / feature titles" }
    h3:           { size: 18, weight: 600, lineHeight: 1.44, use: "Sub-sections, panel headers" }
    body:         { size: 14, weight: 400, lineHeight: 1.57, use: "Standard UI text" }
    caption:      { size: 12, weight: 400, lineHeight: 1.33, use: "Metadata, table headers" }
    label:        { size: 11, weight: 600, lineHeight: 1.45, tracking: 0.06em, use: "Uppercase eyebrows, column heads" }
    code:         { size: 13, weight: 400, lineHeight: 1.54, use: "Query editor, values, keys (IBM Plex Mono)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 8, full: 9999 }
  shadow:
    subtle: "0px 1px 2px rgba(14,14,14,0.06)"
    standard: "0px 4px 12px rgba(14,14,14,0.24)"
    elevated: "0px 8px 24px rgba(14,14,14,0.40)"
    modal: "0px 16px 48px rgba(14,14,14,0.50)"
  components:
    button-primary: { type: button, bg: "#3c3c3c", fg: "#ffffff", radius: 6, padding: "0 16px", font: "14/500", use: "Default primary action on light (Save, Run)" }
    button-accent: { type: button, bg: "#e0613a", fg: "#ffffff", radius: 6, padding: "0 18px", font: "15/600", use: "Top-of-funnel CTA (Start for free)" }
    button-secondary: { type: button, bg: "transparent", fg: "#d6d6d6", radius: 6, padding: "0 16px", font: "14/500", use: "Outline secondary, 1px #3c3c3c border on dark" }
    button-ghost: { type: button, bg: "transparent", fg: "#b4b4b4", radius: 6, padding: "0 10px", font: "14/500", use: "Toolbar/inline tertiary actions" }
    button-destructive: { type: button, bg: "#e5484d", fg: "#ffffff", radius: 6, padding: "0 16px", font: "14/500", use: "Delete query, destructive confirmation" }
    input-light: { type: input, bg: "#ffffff", fg: "#1a1a1a", radius: 6, padding: "8px 12px", font: "14/400", use: "Standard form input on light, #e0613a focus" }
    input-dark: { type: input, bg: "#1a1a1a", fg: "#ffffff", radius: 6, padding: "8px 12px", font: "14/400", use: "Inspector/builder forms on dark canvas" }
    code-editor: { type: input, bg: "#0e0e0e", fg: "#d6d6d6", radius: 6, padding: "12px", font: "13/400", use: "SQL/JS query editor, 1px #2e2e2e border" }
    card: { type: card, bg: "#ffffff", fg: "#1a1a1a", radius: 8, padding: "20px", use: "Marketing feature cards, 1px #cacbbf border" }
    panel-dark: { type: card, bg: "#232323", fg: "#d6d6d6", radius: 8, padding: "16px", use: "Inspector, component tray, 1px #2e2e2e border" }
    badge-success: { type: badge, bg: "rgba(47,168,106,0.14)", fg: "#2fa86a", radius: 4, padding: "2px 8px", font: "12/600", use: "Deployed, Connected, Passing" }
    badge-error: { type: badge, bg: "rgba(229,72,77,0.14)", fg: "#e5484d", radius: 4, padding: "2px 8px", font: "12/600", use: "Failed, Disconnected" }
    badge-warning: { type: badge, bg: "rgba(224,162,58,0.14)", fg: "#e0a23a", radius: 4, padding: "2px 8px", font: "12/600", use: "Unsaved, Deprecated" }
    badge-neutral: { type: badge, bg: "#2e2e2e", fg: "#b4b4b4", radius: 4, padding: "2px 8px", font: "12/500", use: "Environment tags, version labels" }
    tab: { type: tab, fg: "#8a8a8a", font: "14/500", padding: "10px 14px", use: "Builder panels (Query/State/Logs)", active: "#ffffff text + 2px #e0613a bottom indicator" }
    toast: { type: toast, bg: "#232323", fg: "#ffffff", radius: 8, padding: "12px 16px", font: "14/400", use: "Query/save confirmation, leading status dot" }
    dialog: { type: dialog, bg: "#1a1a1a", fg: "#b4b4b4", radius: 10, padding: "24px", use: "Confirmations, resource setup, 1px #2e2e2e border" }
    toggle: { type: toggle, bg: "#3c3c3c", fg: "#ffffff", radius: 9999, use: "Feature flags, env switches; on=#e0613a, white thumb" }
  components_harvested: true
---

# Design System Inspiration of Retool

## 1. Visual Theme & Atmosphere

Retool is the platform for building internal tools fast — the admin panels, dashboards, and operational apps that companies used to hand-code for months. Its visual identity is unapologetically built *for developers*, and that audience defines everything: the brand site reads like a well-organized IDE, not a consumer landing page. The dominant atmosphere is **dark, structural, and instrumented** — near-black canvases (`#0E0E0E`–`#1A1A1A`), crisp 1px hairline grids, and a single warm accent that punches through the monochrome like a syntax-highlight keyword.

The brand's emotional register is *competence, not delight*. Where a consumer fintech app leans on rounded optimism, Retool leans on the aesthetic of tooling: tight grids, drag-handle affordances, table-dense layouts, monospaced data, and the visual language of a configuration surface. The marketing site itself frequently renders mock app-builder canvases — component trays on the left, a grid in the center, an inspector panel on the right — because the product *is* the brand. You are looking at software that builds software.

The palette is a study in restraint: a deep neutral foundation (the "Cod Gray" near-black and a soft "Green White" `#E9EBDF` off-white for light surfaces) punctuated by a small set of editorial accents — a warm **Burnt Sienna** orange, a muted **Smalt Blue** teal, and a periwinkle **Cornflower**. These are not loud SaaS gradients; they read like a carefully chosen terminal theme. Typography is a clean grotesque sans for UI and prose, paired with a true monospace for code, table data, and anything that smells like a value rather than a label.

**Key Characteristics:**
- Dark-first developer aesthetic — near-black canvas (`#1A1A1A`), hairline `#2E2E2E` grids
- Warm Burnt Sienna accent (`#E0613A`) as the primary highlight against deep neutrals
- "Green White" off-white (`#E9EBDF`) as the signature light surface — warmer than pure white
- Grotesque sans for UI/prose + monospace for code and tabular data
- Component-tray / inspector-panel layout language borrowed directly from the product
- Tight 1px borders and low-radius geometry — structural, not soft
- Restrained editorial accent set (orange, teal, periwinkle) — terminal-theme energy, not SaaS gradients

## 2. Color Palette & Roles

### Primary
- **Cod Gray** (`#1A1A1A`): The signature dark surface — page canvas, app builder background, nav bars. Near-black with a neutral undertone.
- **Ink Black** (`#0E0E0E`): Deepest surface — code blocks, the editor void, footer.
- **Green White** (`#E9EBDF`): Retool's signature off-white — light-mode surfaces, marketing sections, cards. Warmer and softer than `#ffffff`, with a faint green undertone.
- **Pure White** (`#FFFFFF`): Maximum-contrast text on dark, true-white inputs inside light surfaces.

### Brand Accent
- **Burnt Sienna** (`#E0613A`): The primary warm accent — CTA emphasis, key highlights, hover glows, syntax-keyword energy. Retool's most recognizable color note.
- **Burnt Sienna Hover** (`#C94F2C`): Pressed/hover state for the orange accent.
- **Cornflower** (`#6E8BE0`): Periwinkle secondary accent — links, informational highlights, illustration detail.
- **Smalt Blue** (`#4E7C82`): Muted teal — tertiary accent, data categories, secondary illustration tone.

### Action / Interactive
- **Action Primary** (`#3C3C3C`): Default dark UI button fill on light surfaces — neutral, developer-grade. The product favors neutral primaries with accent reserved for emphasis.
- **Action on Dark** (`#FFFFFF`): White-fill buttons against the dark canvas.
- **Accent CTA** (`#E0613A`): When a button needs to *pull* — sign-up, "Start for free."

### Semantic
- **Success Green** (`#2FA86A`): Successful query, deploy, passing state.
- **Error Red** (`#E5484D`): Failed query, validation error, destructive action.
- **Warning Amber** (`#E0A23A`): Unsaved changes, deprecation notices, attention states.
- **Info Blue** (`#6E8BE0`): Informational banners (reuses Cornflower).

### Neutral Scale (Dark theme)
- **Neutral 950** (`#0E0E0E`): Deepest void — editor, code.
- **Neutral 900** (`#1A1A1A`): Primary dark canvas.
- **Neutral 800** (`#232323`): Raised panel — inspector, side trays.
- **Neutral 700** (`#2E2E2E`): Default border / hairline grid on dark.
- **Neutral 600** (`#3C3C3C`): Strong border, neutral button fill.
- **Neutral 500** (`#6B6B6B`): Disabled text, muted icons on dark.
- **Neutral 400** (`#8A8A8A`): Secondary/caption text on dark.
- **Neutral 300** (`#B4B4B4`): Body text on dark surfaces.
- **Neutral 200** (`#D6D6D6`): Strong body text on dark.

### Neutral Scale (Light theme)
- **Green White** (`#E9EBDF`): Light page surface.
- **Light 100** (`#F4F5EF`): Lightest tint — subtle section banding.
- **Light 200** (`#DCDED2`): Card fill on light, disabled surface.
- **Light Border** (`#CACBBF`): Default border / divider on light.
- **Text Strong** (`#1A1A1A`): Headings on light surfaces.
- **Text Body** (`#3C3C3C`): Body copy on light.
- **Text Muted** (`#6B6B6B`): Captions, metadata on light.

### Surface & Borders
- **Border on Dark**: `#2E2E2E` (Neutral 700). Hairline grids, panel separators, table cell lines.
- **Border on Light**: `#CACBBF`. Card edges, input borders, dividers.
- **Overlay Scrim**: `rgba(14,14,14,0.64)`. Modal/dialog backdrop over the dark canvas.
- **Accent Glow**: `rgba(224,97,58,0.20)`. Subtle focus halo around accented elements.

## 3. Typography Rules

### Font Family
- **UI / Prose**: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` — a neutral grotesque with excellent legibility at small sizes and tabular figure support. Retool's product and marketing favor a clean grotesque of this class.
- **Monospace**: `"IBM Plex Mono", "JetBrains Mono", "SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace` — used for code blocks, query editors, table values, environment keys, and any literal value.
- **Display (marketing)**: The same grotesque at heavy weights (600–700) with tightened tracking for hero headlines.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | 56px | 700 | 60px (1.07) | -0.02em | Marketing hero headlines |
| Display | Inter | 40px | 700 | 46px (1.15) | -0.02em | Section headers |
| Heading 1 | Inter | 30px | 600 | 38px (1.27) | -0.01em | Page titles |
| Heading 2 | Inter | 22px | 600 | 30px (1.36) | -0.01em | Card / feature titles |
| Heading 3 | Inter | 18px | 600 | 26px (1.44) | normal | Sub-sections, panel headers |
| Subtitle | Inter | 16px | 500 | 24px (1.50) | normal | Nav labels, list headers |
| Body Large | Inter | 16px | 400 | 26px (1.63) | normal | Marketing prose |
| Body | Inter | 14px | 400 | 22px (1.57) | normal | Standard UI text |
| Body Small | Inter | 13px | 400 | 20px (1.54) | normal | Secondary info, helper text |
| Caption | Inter | 12px | 400 | 16px (1.33) | normal | Metadata, table headers (often uppercase) |
| Label (uppercase) | Inter | 11px | 600 | 16px (1.45) | 0.06em | Section eyebrows, table column heads |
| Code / Mono | IBM Plex Mono | 13px | 400 | 20px (1.54) | normal | Query editor, values, keys |
| Data (tabular) | IBM Plex Mono | 13px | 400 | 20px | normal | Table cells — `font-variant-numeric: tabular-nums` |

### Principles
- **Sans for labels, mono for values.** The cleanest tell of Retool's type system: anything that is a *value* (an ID, a query result, an env var, a number in a table) renders in monospace; anything that *describes* renders in the grotesque. This split mirrors how developers read code.
- **Tabular numerals everywhere data lives.** Tables, metrics, and counters use tabular figures so columns align and values don't jitter on update.
- **Tight tracking on display.** Hero and section headlines pull letter-spacing to `-0.02em` for a dense, engineered feel. Body stays at normal tracking.
- **Three working weights.** 400 (body), 500 (subtle emphasis / nav), 600 (headings). 700 reserved for marketing display only.
- **Uppercase eyebrows.** Small 11px uppercase labels with `0.06em` tracking mark section starts and table column headers — a developer-doc convention.

## 4. Component Stylings

### Buttons

Retool buttons are low-radius, structural, and lean neutral by default — accent color is spent sparingly on the single most important action per view.

**Primary (neutral / dark fill)**
- Background: `#3C3C3C`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 0 16px
- Height: 36px
- Font: 14px / 500 / Inter
- Hover: `#2E2E2E`
- Use: Default primary action on light surfaces (Save, Run, Create)

**Accent (Burnt Sienna)**
- Background: `#E0613A`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 0 18px
- Height: 40px
- Font: 15px / 600 / Inter
- Hover: `#C94F2C`
- Use: Top-of-funnel marketing CTA ("Start for free", "Book a demo")

**Secondary (outline)**
- Background: transparent
- Text: `#3C3C3C` (light) / `#D6D6D6` (dark)
- Border: 1px solid `#CACBBF` (light) / `#3C3C3C` (dark)
- Radius: 6px
- Padding: 0 16px
- Height: 36px
- Font: 14px / 500 / Inter
- Hover: bg `#F4F5EF` (light) / `#232323` (dark)
- Use: Secondary action paired beside a primary

**Ghost / Text**
- Background: transparent
- Text: `#3C3C3C` (light) / `#B4B4B4` (dark)
- Border: none
- Radius: 6px
- Padding: 0 10px
- Height: 32px
- Font: 14px / 500 / Inter
- Hover: bg `rgba(0,0,0,0.04)` / `rgba(255,255,255,0.06)`
- Use: Toolbar actions, inline controls, tertiary links

**Destructive**
- Background: `#E5484D`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 0 16px
- Height: 36px
- Font: 14px / 500 / Inter
- Hover: `#CE3A3F`
- Use: Delete query, remove resource, destructive confirmation

**Icon Button**
- Background: transparent → `rgba(255,255,255,0.06)` on hover (dark)
- Size: 32×32px
- Radius: 6px
- Icon: 16px, `#B4B4B4` → `#FFFFFF` on hover
- Use: Toolbar / panel-header controls in the builder

Disabled across all variants: 40% opacity, no pointer events. Focus: 2px `rgba(224,97,58,0.20)` ring + 1px `#E0613A` outline.

### Inputs

**Text Field (light)**
- Background: `#FFFFFF`
- Text: `#1A1A1A`
- Border: 1px solid `#CACBBF`
- Radius: 6px
- Padding: 8px 12px
- Height: 36px
- Font: 14px / 400 / Inter
- Placeholder: `#8A8A8A`
- Focus: border `#E0613A` + 2px `rgba(224,97,58,0.20)` ring
- Use: Standard form input on light surfaces

**Text Field (dark)**
- Background: `#1A1A1A`
- Text: `#FFFFFF`
- Border: 1px solid `#2E2E2E`
- Radius: 6px
- Padding: 8px 12px
- Height: 36px
- Font: 14px / 400 / Inter
- Placeholder: `#6B6B6B`
- Focus: border `#E0613A`
- Use: Inspector panels, builder forms on the dark canvas

**Code / Query Editor**
- Background: `#0E0E0E`
- Text: `#D6D6D6`
- Border: 1px solid `#2E2E2E`
- Radius: 6px
- Padding: 12px
- Font: 13px / 400 / IBM Plex Mono
- Syntax: keywords `#E0613A`, strings `#2FA86A`, numbers `#6E8BE0`, comments `#6B6B6B`
- Use: SQL/JS query editors, transformers, code components

**Error State**
- Border: 1px solid `#E5484D`
- Helper text: `#E5484D` 13px below field
- Use: Validation failure — one actionable sentence

### Cards

**Standard (light)**
- Background: `#FFFFFF`
- Border: 1px solid `#CACBBF`
- Radius: 8px
- Padding: 20px
- Shadow: `0px 1px 2px rgba(14,14,14,0.06)`
- Use: Marketing feature cards, dashboard tiles

**Panel (dark)**
- Background: `#232323`
- Border: 1px solid `#2E2E2E`
- Radius: 8px
- Padding: 16px
- Shadow: none
- Use: Inspector, component tray, builder side panels

**Resource Card**
- Background: `#1A1A1A`
- Border: 1px solid `#2E2E2E`
- Radius: 8px
- Padding: 16px
- Hover: border `#3C3C3C`, accent icon tint
- Use: Connected resource / integration tiles in the home grid

### Tables

The signature Retool surface. Tables are dense, mono-valued, and grid-lined.

- Header: `#232323` bg, `#8A8A8A` 11px uppercase `0.06em`, 1px `#2E2E2E` bottom border
- Row: `#1A1A1A` bg, `#D6D6D6` 13px IBM Plex Mono, 36px row height
- Row hover: `#232323`
- Selected row: `rgba(224,97,58,0.12)` bg, 2px `#E0613A` left border
- Cell border: 1px `#2E2E2E` (hairline grid)
- Zebra (optional): alternate `#1E1E1E`

### Badges

**Status (Success)**
- Background: `rgba(47,168,106,0.14)`
- Text: `#2FA86A`
- Border: none
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 600 / Inter
- Use: "Deployed", "Connected", "Passing"

**Status (Error)**
- Background: `rgba(229,72,77,0.14)`
- Text: `#E5484D`
- Radius: 4px · Padding: 2px 8px · Font: 12px / 600
- Use: "Failed", "Disconnected"

**Status (Warning)**
- Background: `rgba(224,162,58,0.14)`
- Text: `#E0A23A`
- Radius: 4px · Padding: 2px 8px · Font: 12px / 600
- Use: "Unsaved", "Deprecated"

**Neutral / Tag**
- Background: `#2E2E2E`
- Text: `#B4B4B4`
- Radius: 4px · Padding: 2px 8px · Font: 12px / 500 IBM Plex Mono
- Use: Environment tags, resource types, version labels

### Tabs

- Container border: 1px `#2E2E2E` bottom
- Tab (inactive): `#8A8A8A` 14px / 500, 10px 14px padding
- Tab (active): `#FFFFFF` text + 2px `#E0613A` bottom indicator
- Hover: `#D6D6D6`
- Use: Builder panels (Query / State / Logs), settings sections

### Toasts

**Default**
- Background: `#232323`
- Text: `#FFFFFF`
- Border: 1px solid `#2E2E2E`
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0px 8px 24px rgba(14,14,14,0.40)`
- Font: 14px / 400 / Inter
- Leading status dot: success `#2FA86A`, error `#E5484D`
- Use: "Query ran successfully", "Changes saved"

### Dialogs

**Modal**
- Background: `#1A1A1A` (dark) / `#FFFFFF` (light)
- Border: 1px solid `#2E2E2E` / `#CACBBF`
- Radius: 10px
- Padding: 24px
- Shadow: `0px 16px 48px rgba(14,14,14,0.50)`
- Header: 18px / 600, Body: 14px / 400 `#B4B4B4`
- Use: Confirmations, resource setup, settings

### Toggles

- On: `#E0613A` · Off: `#3C3C3C`
- Track: 36×20px, Radius 9999px
- Thumb: `#FFFFFF` 16px circle, `0px 1px 2px rgba(0,0,0,0.3)`
- Use: Feature flags, environment switches, boolean settings

---

**Verified:** 2026-06-06
**Tier 1 sources:** retool.com (live brand site — dark-first developer aesthetic, Burnt Sienna accent CTAs, app-builder layout language, "Start for free" / "Book a demo" copy), docs.retool.com/apps/guides/presentation-styling/themes (theme + typography controls), mobbin.com/colors/brand/retool (palette names: Green White `#E9EBDF`, Cod Gray, Smalt Blue, Burnt Sienna, Cornflower, White). · https://retool.com (live production site)
**Note:** Retool ships no public token catalog; component geometry (radii, heights, spacing) is reconstructed from the live product/marketing UI and standard developer-tool conventions. Hex values for accent/semantic tiers are calibrated to the documented brand palette names.

## 5. Layout Principles

### Spacing System
- Base unit: 4px (developer-grid precision)
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- UI density: builder panels use tight 8–12px gaps; marketing uses generous 64–96px section rhythm
- Horizontal page padding: 24px mobile, 48–64px desktop, max-width container 1200px

### Grid & Container
- Marketing: 12-column grid, 1200px max content width, 24px gutters
- Product builder: 3-zone layout — component tray (left ~240px), canvas (fluid 12-col app grid), inspector (right ~300px)
- The app-grid metaphor (snap-to-grid component placement) is the visual DNA reused in marketing mockups

### Whitespace Philosophy
- **Dense where it's a tool, airy where it's a pitch.** Product surfaces pack information; marketing surfaces breathe. The brand holds both registers deliberately.
- **The grid is visible.** Unlike consumer apps that hide structure, Retool *shows* its grid — hairline borders, snap guides, and aligned columns are part of the aesthetic, not noise.
- **Alignment over decoration.** Order comes from rigorous left-alignment and column rhythm, not from ornament.

### Border Radius Scale
- Sharp (4px): Badges, tags, table corners
- Standard (6px): Buttons, inputs, ghost controls
- Comfortable (8px): Cards, panels, toasts
- Large (10px): Modals, dialogs
- Pill (9999px): Toggles, status pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow; 1px border defines edges | Panels, cards on dark, table cells |
| Subtle (Level 1) | `0px 1px 2px rgba(14,14,14,0.06)` | Light-surface cards, raised tiles |
| Standard (Level 2) | `0px 4px 12px rgba(14,14,14,0.24)` | Dropdowns, popovers, context menus |
| Elevated (Level 3) | `0px 8px 24px rgba(14,14,14,0.40)` | Toasts, floating panels |
| Modal (Level 4) | `0px 16px 48px rgba(14,14,14,0.50)` | Dialogs, command palette |

**Shadow Philosophy**: On dark surfaces, Retool defines elevation primarily through **1px borders and background-value steps** (`#1A1A1A` → `#232323` → `#2E2E2E`), not shadow — shadows are nearly invisible on near-black anyway. Shadows return on light surfaces and for true overlays. The aesthetic is structural: edges are drawn, not blurred. This is the visual logic of an IDE, where panels are bounded by lines.

### Blur Effects
- Command palette and floating menus use a subtle `backdrop-filter: blur(8px)` over a `rgba(14,14,14,0.64)` scrim
- Sticky nav applies a faint blur on scroll over the dark canvas

## 7. Do's and Don'ts

### Do
- Default to the dark canvas (`#1A1A1A`) for product/tool surfaces; use Green White (`#E9EBDF`) for marketing/light
- Spend Burnt Sienna (`#E0613A`) sparingly — one accented action per view
- Render *values* (IDs, results, env vars, table data) in IBM Plex Mono; render *labels* in Inter
- Use tabular numerals in every table and metric
- Define edges with 1px hairline borders (`#2E2E2E` dark / `#CACBBF` light)
- Keep radii low — 6px buttons/inputs, 8px cards, 4px badges
- Use uppercase 11px eyebrows with `0.06em` tracking for section starts and column heads

### Don't
- Don't use Burnt Sienna as a fill for neutral/default buttons — neutral `#3C3C3C` is the default primary
- Don't use pure `#FFFFFF` as the light page surface — Green White (`#E9EBDF`) is the brand's warm off-white
- Don't apply heavy gradients or glow — this is a tooling aesthetic, not a consumer SaaS one
- Don't round corners past 10px — geometry stays structural
- Don't set values (numbers, IDs) in the sans face — mono signals "this is data"
- Don't rely on shadow for elevation on dark; use background-value steps + borders
- Don't mix proportional and tabular figures in the same table column

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, 24px padding, nav collapses to drawer |
| Tablet | 640–1024px | 2-col feature grids, condensed builder preview |
| Desktop | 1024–1440px | Full 12-col, 3-zone builder layout |
| Wide | >1440px | 1200px centered content, expanded canvas |

### Touch / Click Targets
- Buttons: 36px standard, 40px accent CTA, 32px ghost/icon
- Table rows: 36px height (dense), 44px on touch devices
- Min interactive target on touch: 44×44px

### Collapsing Strategy
- Builder's 3-zone layout collapses to tabbed panels on tablet/mobile (the product is desktop-first by nature)
- Marketing hero mockups scale down and crop the inspector panel first
- Nav: full horizontal bar → hamburger drawer below 640px
- Tables become horizontally scrollable with a sticky first column rather than reflowing

### Image / Asset Behavior
- Product screenshots and app-builder mockups are the hero imagery — rendered on dark, framed with a 1px `#2E2E2E` border
- Integration/resource logos: 24–32px monochrome or full-color on neutral tiles
- Code blocks: full-width within content column, never reflowed

## 9. Agent Prompt Guide

### Quick Color Reference
- Dark canvas: Cod Gray (`#1A1A1A`)
- Deepest surface: Ink Black (`#0E0E0E`)
- Light surface: Green White (`#E9EBDF`)
- Raised panel (dark): `#232323`
- Accent CTA: Burnt Sienna (`#E0613A`)
- Accent hover: `#C94F2C`
- Neutral primary button: `#3C3C3C`
- Border (dark / light): `#2E2E2E` / `#CACBBF`
- Body text (dark / light): `#B4B4B4` / `#3C3C3C`
- Muted text: `#8A8A8A`
- Success / Error / Warning: `#2FA86A` / `#E5484D` / `#E0A23A`
- Secondary accents: Cornflower `#6E8BE0`, Smalt Blue `#4E7C82`

### Example Component Prompts
- "Create a Retool-style data table: `#1A1A1A` bg, header `#232323` with `#8A8A8A` 11px uppercase column labels (0.06em tracking), rows 36px, cell values in IBM Plex Mono 13px `#D6D6D6`, 1px `#2E2E2E` cell borders, hover row `#232323`, selected row `rgba(224,97,58,0.12)` with 2px `#E0613A` left border, tabular numerals."
- "Build a primary button: `#3C3C3C` bg, white 14px/500 Inter text, 6px radius, 36px height, 0 16px padding, hover `#2E2E2E`. Focus ring 2px rgba(224,97,58,0.20)."
- "Build an accent CTA: `#E0613A` bg, white 15px/600 text, 6px radius, 40px height, hover `#C94F2C`. Label 'Start for free'."
- "Create a query editor: `#0E0E0E` bg, 1px `#2E2E2E` border, 6px radius, IBM Plex Mono 13px `#D6D6D6`, syntax keywords `#E0613A`, strings `#2FA86A`, numbers `#6E8BE0`, comments `#6B6B6B`."
- "Design a status badge set: success `rgba(47,168,106,0.14)` bg / `#2FA86A` text; error `rgba(229,72,77,0.14)` / `#E5484D`; 4px radius, 2px 8px padding, 12px/600 Inter."
- "Build an inspector panel: `#232323` bg, 1px `#2E2E2E` border, 8px radius, 16px padding, dark text fields `#1A1A1A` with `#2E2E2E` borders, section eyebrow 11px uppercase `#8A8A8A`."

### Iteration Guide
1. Default surface is dark (`#1A1A1A`); reserve Green White (`#E9EBDF`) for marketing/light contexts
2. Accent Burnt Sienna (`#E0613A`) is for *one* emphasis per view — neutral `#3C3C3C` is the default primary
3. Values render in IBM Plex Mono; labels and prose render in Inter
4. Edges are drawn with 1px hairlines, not shadows (on dark)
5. Radii stay low: 6px controls, 8px cards, 4px badges, 10px modals
6. Tabular numerals in all data contexts
7. Uppercase 11px `0.06em` eyebrows mark sections and table columns

---

## 10. Voice & Tone

Retool talks to engineers like a senior colleague — direct, technically precise, allergic to fluff. Copy assumes the reader knows what an API, a query, and a deploy are. It sells *leverage*, not magic: the promise is "build the thing your team needs in hours instead of months," stated plainly. Marketing leads with verbs (Build, Ship, Connect, Govern) and grounds claims in capability, not adjectives. There is confidence without hype — enterprise-grade trust language ("a platform you can trust", "governance", "security") sits alongside builder energy ("Start for free").

| Context | Tone |
|---|---|
| CTAs | Imperative, two words max ("Start for free", "Book a demo", "Get started") |
| Headlines | Capability-forward, plainspoken ("Build internal tools, remarkably fast") |
| Feature copy | Concrete and technical — names the integration, the protocol, the action |
| Success messages | Terse confirmations ("Query ran successfully", "Deployed to production") |
| Error messages | Specific and actionable — names the failing resource and the fix. Never "Something went wrong." |
| Docs voice | Second-person, step-numbered, code-sample-first |
| Enterprise/sales | Trust and governance language — SOC 2, SSO, audit logs, access control |

**Forbidden moves.** No exclamation-point hype, no "magical"/"effortless"/"revolutionary" filler, no cutesy mascot voice, no apology theater ("Oops! Something broke"). Errors name the resource and the next step. The reader is a builder, not a consumer to be delighted.

## 11. Brand Narrative

Retool was founded in **2017 by David Hsu** (with co-founder Snir Kodesh) on a sharp observation: every company builds the same internal tools — admin panels, customer-support dashboards, inventory managers, ops consoles — and every company wastes enormous engineering time hand-coding them from scratch. These tools are essential but rarely differentiating; they don't deserve months of bespoke React and CRUD plumbing. Retool's thesis was to make that work *assembly* instead of *construction*: a library of pre-built components (tables, forms, charts, buttons) that snap onto a grid and wire directly to any database or API.

The company went through Y Combinator (2017) and grew into one of the defining developer-productivity platforms, reaching a multi-billion-dollar valuation with customers spanning startups to large enterprises. The product expanded from internal-app building into workflows, a database, and AI-assisted app generation — but the core remains: drag components onto a canvas, connect a data source, ship.

The design system flows directly from this identity. Retool *looks like the tool it is*. The dark, gridded, panel-bounded aesthetic isn't a style choice layered on top — it's the literal interface of the app builder, promoted to brand language. The component-tray-and-inspector layout you see on the marketing site is the product. The monospace-for-values convention is how the product displays data. The restraint — one accent, low radii, drawn edges — communicates *engineering seriousness*: this is infrastructure you'll trust with production operations.

What Retool refuses: the bubbly gradient-heavy aesthetic of consumer-facing SaaS, the illustration-led "fun" of no-code toys (Retool is *low-code for developers*, a crucial distinction), and any visual that implies the tool is a black box. The grid is visible because builders want to see the structure. The brand sells competence and control to people who could build it themselves — and choose Retool because it's faster.

## 12. Principles

1. **The product is the brand.** Marketing surfaces render real builder UI — component trays, grids, inspectors. The aesthetic is downstream of the tool, never decoration bolted on.
2. **Show the grid.** Structure is visible — hairline borders, aligned columns, snap guides. Builders trust what they can see the bones of. Order over ornament.
3. **One accent, spent carefully.** Burnt Sienna marks the single most important action or highlight. Everywhere else is neutral. Spread the accent and it stops meaning "here."
4. **Labels in sans, values in mono.** The typographic split between describing and being-data is load-bearing. A number in monospace reads as a real value; in sans it reads as decoration.
5. **Edges are drawn, not blurred.** On dark, elevation comes from 1px borders and background-value steps, not shadow. The IDE logic: panels are bounded by lines.
6. **Density is a feature, not a flaw.** Tool surfaces pack information. A developer wants more on screen, aligned and scannable — not generous padding that hides the data.
7. **Plainspoken over hype.** Copy names the capability. No magic, no exclamation points. The audience can smell marketing fluff and discounts you for it.
8. **Low radius, structural geometry.** 6px controls, 8px cards. Rounded-but-not-soft. The shape language says "engineered," not "friendly."

## 13. Personas

*Personas below are fictional archetypes informed by Retool's publicly described developer-platform audience, not individual people.*

**Marcus, 31, San Francisco.** Full-stack engineer at a 200-person fintech. Tasked with building an internal ops dashboard for the support team — refund approvals, account lookups, transaction reversals. Could build it in React, but it would eat two sprints he doesn't have. Reaches for Retool to wire Postgres + Stripe API to a table-and-form UI in an afternoon. Values: speed, real data binding, the ability to drop into raw JS when a component's defaults don't cut it. Lives in the query editor.

**Priya, 38, Austin.** Engineering manager / platform lead. Owns the decision of *whether* the org adopts Retool. Cares about governance — SSO, role-based access, audit logs, self-hosting for compliance. Wants her team to stop one-off-coding internal tools and standardize on a platform. Reads the security page before the features page. Will champion Retool internally only if it survives a SOC 2 conversation.

**Dev, 26, remote.** Operations engineer at a logistics startup, more scripts-and-SQL than frontend. Not a React person, but very comfortable with data and APIs. Retool lets him build the warehouse-ops tool himself instead of waiting in the eng backlog. Values: not having to learn a frontend framework, the visual grid that makes layout obvious, monospace tables that feel like the SQL console he already lives in.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no data)** | `#8A8A8A` body line explaining the state ("No rows returned"), plus a ghost or accent action to add/connect data. Dense, no illustration — a tooling empty state, not a consumer one. |
| **Empty (no resources)** | Centered card on dark with a "Connect a resource" accent button (`#E0613A`) and one line of helper text in `#8A8A8A`. |
| **Loading (query running)** | Inline spinner in the panel header, `#E0613A` tint. Table shows a 1.2s shimmer over `#232323` skeleton rows. Run button shows inline spinner, label preserved. |
| **Loading (page)** | Skeleton blocks at `#232323` on the dark canvas matching final layout, 8% white shimmer sweep. |
| **Success (query)** | Toast: `#232323` bg, leading `#2FA86A` dot, "Query ran successfully" 14px white, 3s auto-dismiss. |
| **Success (deploy)** | Status badge flips to `rgba(47,168,106,0.14)` / `#2FA86A` "Deployed", optional confirmation toast. |
| **Error (query failed)** | Inline error panel below the editor: `rgba(229,72,77,0.14)` bg, `#E5484D` left border, monospace error text naming the failure. Actionable, never generic. |
| **Error (validation)** | Field border `#E5484D`, helper text `#E5484D` 13px below — one sentence, names the fix. |
| **Warning (unsaved)** | Amber badge `rgba(224,162,58,0.14)` / `#E0A23A` "Unsaved changes" in the toolbar; Save button gains accent emphasis. |
| **Disabled** | 40% opacity, no pointer events. Borders retained so geometry stays stable. |
| **Selected (table row / component)** | 2px `#E0613A` left border + `rgba(224,97,58,0.12)` fill. The single consistent use of accent for selection across the builder. |
| **Focus** | 1px `#E0613A` outline + 2px `rgba(224,97,58,0.20)` ring on all interactive elements. |

## 15. Motion & Easing

**Durations** (named):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox, immediate state |
| `motion-fast` | 120ms | Hover, focus ring, button press, tab indicator slide |
| `motion-standard` | 200ms | The default — panel reveal, dropdown open, accordion |
| `motion-slow` | 320ms | Modal entry, side-panel slide-in, route transitions |
| `motion-data` | 240ms | Table row insert/update, query-result paint-in |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Things appearing — panels, dropdowns, modals (a confident, settled ease-out) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Things leaving — dismissals, collapses |
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Two-way — tab content, accordion, hover transitions |
| `ease-linear` | `linear` | Spinners, shimmer sweeps, progress bars |

**Signature motions.**

1. **Panel slide-in.** Inspector and side panels enter from the edge with `motion-standard / ease-enter` — a single decisive slide, no bounce. Tooling motion is functional, never playful; overshoot would undermine the engineering tone.
2. **Tab indicator.** The 2px `#E0613A` underline slides horizontally between tabs over `motion-fast / ease-standard`, tracking the active panel. Crisp and immediate.
3. **Query-result paint.** When a query resolves, table rows fade-and-rise 8px into place over `motion-data / ease-enter`, staggered subtly so a result set feels like it *lands* rather than flickers. Values never cross-fade between states.
4. **Shimmer skeleton.** Loading skeletons use a `linear` 1.2s left-to-right sweep with an 8% white highlight over `#232323` blocks. The only continuously-animated element on the canvas.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; slides become instant swaps, shimmer becomes a static `#232323` block. The tool stays fully usable.

<!--
OmD v0.1 Sources — Retool

Tier 1 (direct):
- retool.com (live brand site, WebFetch 2026-06-06): dark-first developer aesthetic,
  warm orange/Burnt Sienna accent CTAs, app-builder layout language (component tray +
  canvas + inspector), copy register ("Build how you want. Ship on a platform you can
  trust", "Start for free", "Book a demo"), verb-forward enterprise voice.
- mobbin.com/colors/brand/retool (via WebSearch summary): documented brand palette names
  — Green White #E9EBDF (primary neutral), Cod Gray, Smalt Blue, Burnt Sienna, Cornflower,
  White. Foundation of neutrals + pops of teal/orange/periwinkle.
- docs.retool.com/apps/guides/presentation-styling/themes (via WebSearch): confirms theme
  + typography controls (font family/size/weight, custom font URLs) — developers commonly
  pair IBM Plex Sans / Roboto, informing the Inter+IBM Plex Mono stack choice.

Reconstruction note: Retool publishes no public design-token catalog. Component geometry
(radii, heights, spacing, shadows) and the dark-theme neutral ramp are reconstructed from
the live product/marketing UI plus standard developer-tool conventions. Accent and semantic
tier hex values are calibrated to the documented brand palette names (Burnt Sienna #E0613A,
Cornflower #6E8BE0, Smalt Blue #4E7C82, Green White #E9EBDF).

Personas (§13) are fictional archetypes informed by Retool's publicly described developer
audience (engineers, eng managers, ops engineers building internal tools). Any resemblance
to specific individuals is unintended.

Interpretive claims (e.g., "the product is the brand", "show the grid") are editorial
readings of Retool's design, not documented company statements.
-->

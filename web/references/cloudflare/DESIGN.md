---
id: cloudflare
name: Cloudflare
country: US
category: backend-devops
homepage: "https://www.cloudflare.com"
primary_color: "#F6821F"
logo:
  type: simpleicons
  slug: "cloudflare"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: design-system
  extracted: "2026-06-08"
  components_harvested: true
  note: "Cloudflare Orange #F6821F is the singular brand + primary-action color; rationed to one or two places per screen. Warm near-black text, never pure #000."
  colors:
    primary: "#F6821F"
    primary-hover: "#E2700B"
    primary-pressed: "#D9700F"
    brand: "#F6821F"
    brand-gradient-end: "#FAAD3F"
    canvas: "#FFFFFF"
    surface: "#FFFFFF"
    surface-alt: "#F7F7F7"
    foreground: "#1D1F20"
    body: "#36393A"
    muted: "#717174"
    placeholder: "#999999"
    hairline: "#EDEDED"
    border-strong: "#D9D9D9"
    on-primary: "#FFFFFF"
    orange-tint: "#FDF3E7"
    success: "#2FB344"
    error: "#BD2528"
    warning: "#F6C549"
    info: "#2C7CB0"
    dark-bg: "#15171A"
    dark-surface: "#262A2E"
    dark-border: "#3A3F44"
    dark-text: "#E4E6E7"
  typography:
    family: { sans: "Inter", mono: "JetBrains Mono" }
    display-hero: { size: 56, weight: 700, lineHeight: 1.1, tracking: -0.02, use: "Marketing hero headline" }
    display:      { size: 40, weight: 700, lineHeight: 1.15, tracking: -0.02, use: "Major section headers" }
    heading-1:    { size: 32, weight: 700, lineHeight: 1.2, tracking: -0.01, use: "Page titles" }
    heading-2:    { size: 24, weight: 600, lineHeight: 1.3, tracking: -0.01, use: "Section / card group titles" }
    heading-3:    { size: 20, weight: 600, lineHeight: 1.4, use: "Card headings, panel titles" }
    subtitle:     { size: 18, weight: 600, lineHeight: 1.45, use: "Lead-in / dashboard section labels" }
    body-large:   { size: 16, weight: 400, lineHeight: 1.6, use: "Marketing paragraphs" }
    body:         { size: 14, weight: 400, lineHeight: 1.55, use: "Dashboard standard text" }
    body-small:   { size: 13, weight: 400, lineHeight: 1.5, use: "Table cells, secondary info" }
    caption:      { size: 12, weight: 400, lineHeight: 1.5, use: "Metadata, timestamps, helper text" }
    label-eyebrow: { size: 12, weight: 600, lineHeight: 1.4, tracking: 0.06, use: "Section eyebrows, table headers, uppercase" }
    code-mono:    { size: 13, weight: 400, lineHeight: 1.6, use: "DNS records, IPs, API tokens, code" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 8, xl: 12, full: 9999 }
  shadow:
    subtle: "rgba(0,0,0,0.06) 0px 1px 3px 0px"
    raised: "rgba(0,0,0,0.08) 0px 4px 16px 0px"
    floating: "rgba(0,0,0,0.12) 0px 8px 24px 0px"
    modal: "rgba(0,0,0,0.18) 0px 12px 32px 0px"
  components:
    button-primary:   { type: button, bg: "#f6821f", fg: "#ffffff", radius: "8px", height: "36px", padding: "0 12px", font: "14px / 600", hover: "#e2700b", active: "#d9700f", focus: "2px brand ring", disabled: "brand 50% opacity", use: "Primary action — Get started, Add site, Save, Deploy" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#36393a", border: "1px solid #d9d9d9", radius: "8px", hover: "bg #fafafa · border #a1a1a1", use: "Companion to a primary — Cancel, Back" }
    button-ghost:     { type: button, bg: "transparent", fg: "#f6821f", radius: "8px", padding: "0 12px", hover: "bg #fdf3e7", use: "Inline low-emphasis action, Learn more, text-link button" }
    button-danger:    { type: button, bg: "#bd2528", fg: "#ffffff", radius: "8px", hover: "#a11f22", use: "Delete zone, remove record, purge — confirmation contexts only" }
    button-sm:        { type: button, height: "26px", radius: "6px", padding: "0 8px", font: "12px / 600", use: "Toolbar and table-row inline actions where vertical space is tight" }
    icon-button:      { type: button, height: "36px", radius: "8px", padding: "0", use: "Close, kebab menu, copy-to-clipboard affordance" }
    input:            { type: input, bg: "#ffffff", fg: "#1d1f20", border: "1px solid #d9d9d9", radius: "8px", height: "40px", padding: "0 16px", font: "14px / 400", focus: "1.5px brand ring · 0 0 0 3px rgba(246,130,31,0.2)", use: "Standard form input, search, config values" }
    input-mono:       { type: input, bg: "#ffffff", fg: "#1d1f20", border: "1px solid #d9d9d9", radius: "8px", font: "13px / 400 JetBrains Mono", use: "DNS record values, IP entry, token paste fields" }
    select:           { type: input, bg: "#ffffff", fg: "#1d1f20", border: "1px solid #d9d9d9", radius: "8px", height: "40px", use: "Plan picker, record-type selector, region dropdown — #717174 chevron" }
    switch:           { type: toggle, active: "#f6821f", disabled: "#d9d9d9", radius: "5px", use: "Proxy on/off, feature flags, security toggles — white thumb with edge+drop shadow" }
    checkbox:         { type: toggle, bg: "#f6821f", border: "1px solid #d9d9d9", radius: "6px", use: "Multi-select rules, plan options, consent — brand fill + white glyph when checked" }
    card:             { type: card, bg: "#ffffff", border: "1px solid #ededed", radius: "8px", padding: "24px", shadow: "0 1px 3px rgba(0,0,0,0.06)", use: "Dashboard config panels, analytics modules — the workhorse surface" }
    stat-card:        { type: card, bg: "#ffffff", border: "1px solid #ededed", radius: "8px", padding: "20px", font: "32px / 700 #1d1f20 number · 12px / 600 uppercase #717174 label", use: "Analytics summary tiles (requests, bandwidth, threats blocked)" }
    surface:          { type: card, bg: "#ffffff", border: "1px solid #ededed", use: "kumo elevation roles — canvas #ffffff, recessed #f7f7f7, line/hairline #ededed" }
    badge:            { type: badge, radius: "9999px", padding: "2px 8px", font: "12px / 500", use: "NEW, Beta, version, plan, short metadata — neutral/success/error/warning/info/orange + dashed-brand + 7px status dot" }
    status-pill:      { type: badge, bg: "#e8f5d8", fg: "#3d6b14", radius: "9999px", padding: "2px 10px", font: "12px / 600", states: "green active #e8f5d8/#3d6b14 · red down #fbe2e2/#bd2528 · yellow pending #fcf3d6/#8a6d1b · grey #ededed/#4d4d4d · orange #fdf3e7/#c2670f", use: "Active, Proxied, Down, Pending status with colored dot" }
    tabs:             { type: tab, active: "text #1d1f20 + 2px bottom border #f6821f", border: "1px solid #ededed bottom rule", font: "14px / 600", disabled: "#717174 inactive label", use: "Dashboard section switching (Overview / Analytics / DNS / SSL)" }
    table:            { type: card, bg: "#ffffff", border: "1px solid #ededed", font: "13px / 400 #36393a body", padding: "12px 16px", hover: "#fafafa row", use: "DNS records, firewall rules, analytics logs — header bg #fafafa 12px/600 uppercase #717174" }
    dialog:           { type: dialog, bg: "#ffffff", fg: "#1d1f20", border: "1px solid #ededed", radius: "12px", padding: "32px", shadow: "0 12px 32px rgba(0,0,0,0.18)", use: "Confirmations, destructive double-checks, add-record flows — scrim rgba(29,31,32,0.5), scale-90 enter over 150ms" }
    toast:            { type: toast, bg: "#1d1f20", fg: "#ffffff", radius: "12px", padding: "16px", shadow: "0 8px 24px rgba(0,0,0,0.12)", states: "success #2fb344 · error #bd2528 · warning #f6c549 · info #2c7cb0", use: "Auto-dismissing confirmation, fixed bottom-right 340px, 4-5s dismiss" }
    tooltip:          { type: card, bg: "#ffffff", fg: "#1d1f20", border: "1px solid #ededed", radius: "6px", padding: "6px 10px", font: "13px / 400", shadow: "shadow-lg", use: "Icon labels, truncated-value reveal, glossary terms" }
    code-block:       { type: card, bg: "#f5f5f5", fg: "#1d1f20", border: "1px solid #ededed", radius: "6px", padding: "12px 16px", font: "13px / 400 JetBrains Mono", use: "API examples, Worker snippets, curl commands, DNS values" }
---

# Design System Inspiration of Cloudflare

## 1. Visual Theme & Atmosphere

Cloudflare is the connectivity-cloud company that sits in front of a meaningful slice of the internet — CDN, DNS, DDoS mitigation, Zero Trust, Workers edge compute. Its visual identity has one job: make planet-scale infrastructure feel *approachable and human* in a category that defaults to cold, blue, enterprise seriousness. The answer is a single, unmistakable move — **Cloudflare Orange (`#F6821F`)** against generous white space and near-black charcoal text. In a backend-devops landscape where AWS, Azure, GCP, Datadog, and nearly every security vendor reach for navy and electric blue, Cloudflare's warm orange is a deliberate act of differentiation. The orange *is* the brand; everything else is restraint built to let it sing.

The marketing surface (cloudflare.com) is bright, airy, and optimistic — large charcoal headlines on white, orange reserved almost exclusively for calls-to-action and the cloud logomark. The product surface (the Cloudflare dashboard) is denser and more utilitarian: data tables, status pills, analytics graphs, config toggles, and code blocks, where orange becomes a precision accent rather than a field of color. Both surfaces share the same DNA — clarity first, decoration never, the orange as the one emotional note in an otherwise technical instrument.

Typography is **Inter-led** — a clean, highly-legible neo-grotesque optimized for screens — with a system-font fallback stack so the dashboard stays fast everywhere. Headings are set tight and confident; body copy is calm and explanatory. Cloudflare's published "Color by Cloudflare Design" system organizes hues into perceptual scales, and the dashboard ships a fully-realized dark mode, signalling a mature, token-driven design org rather than ad-hoc styling.

**Key Characteristics:**
- Cloudflare Orange (`#F6821F`) as the singular brand and primary-action color — warm, energetic, instantly recognizable
- Inter typeface with a system-ui fallback stack — screen-optimized neo-grotesque
- Bright white marketing canvas; dense, table-heavy product dashboard with first-class dark mode
- Near-black charcoal text (`#36393A` / `#1D1F20`) — warm-neutral, never pure `#000`
- Orange used sparingly and intentionally — CTAs, links, active states, the logomark — not as decoration
- Perceptual color scales (orange, blue, grey, plus semantic red/green/yellow) for tokens
- Engineering-grade restraint: clean rules, subtle shadows, generous whitespace, no gratuitous gradients

## 2. Color Palette & Roles

### Primary
- **Cloudflare Orange** (`#F6821F`): The brand. Primary CTAs, the cloud logomark, links, active/selected states, focus accents. The one color that carries emotional weight.
- **Orange Hover** (`#E2700B` / approx `#D9700F`): Hover/pressed state for orange CTAs — a darker, denser orange.
- **Orange Tint** (`#FBE6CC` / `#FDF3E7`): Soft orange-tinted backgrounds for info banners, highlighted rows, and selected list items.
- **Brand Orange Alt** (`#F48120`): Logo-mark gradient orange (the icon is built from a warm orange gradient `#F6821F → #FAAD3F`). Marketing/logo contexts only.
- **Gradient Yellow-Orange** (`#FAAD3F`): The lighter stop in the logomark gradient. Decorative brand moments, never UI text.

### Surface & Background
- **Pure White** (`#FFFFFF`): Marketing page background, card surfaces, dashboard panels (light mode).
- **Off-White** (`#F7F7F7` / `#F5F5F5`): Secondary background, page wash behind cards, zebra-stripe table rows.
- **Light Grey Surface** (`#EDEDED` / `#F0F0F0`): Input fills, disabled surfaces, subtle separators.

### Text
- **Charcoal (Headings)** (`#1D1F20`): Strongest text — display headlines and key labels. Warm near-black.
- **Body Charcoal** (`#36393A`): Standard body copy and paragraph text.
- **Muted Grey** (`#666666` / `#717174`): Secondary labels, captions, metadata.
- **Placeholder Grey** (`#999999` / `#A1A1A1`): Input placeholders, disabled text.

### Semantic
- **Success Green** (`#9BCA3E` / `#2FB344`): "Active", "Proxied", healthy status, success toasts. (Cloudflare's classic proxied/healthy green leans `#9BCA3E`; dashboards use a saturated `#2FB344` for status dots.)
- **Error Red** (`#BD2528` / `#E1351D`): Errors, destructive actions, "Down"/"Blocked" status, attack indicators.
- **Warning Yellow** (`#F6C549` / `#FFC107`): Caution, "DNS only" / "Paused" states, attention banners.
- **Info Blue** (`#2C7CB0` / `#0073AA`): Informational accents, secondary links, neutral-technical highlights, chart series.

### Neutral / Grey Scale
- **Grey 50** (`#FAFAFA`): Lightest wash.
- **Grey 100** (`#F5F5F5`): Card fill, page background.
- **Grey 200** (`#EDEDED`): Default borders, dividers.
- **Grey 300** (`#D9D9D9`): Strong borders, input outlines.
- **Grey 400** (`#A1A1A1`): Placeholder, disabled icon.
- **Grey 500** (`#717174`): Caption / secondary text.
- **Grey 600** (`#4D4D4D`): Emphasized secondary text.
- **Grey 700** (`#36393A`): Body text.
- **Grey 900** (`#1D1F20`): Headings, strongest text.

### Dark Mode (Dashboard)
- **Dark Background** (`#1D1F20` / `#15171A`): App background.
- **Dark Surface** (`#262A2E` / `#23272B`): Card/panel surface.
- **Dark Border** (`#3A3F44`): Dividers and outlines.
- **Dark Text** (`#E4E6E7`): Primary text on dark; muted `#9BA1A6`.
- Orange stays `#F6821F` in dark mode — it is bright enough to hold against dark surfaces without adjustment.

## 3. Typography Rules

### Font Family
- **Primary**: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Display/Marketing**: Inter (tight tracking on large sizes) — some hero moments use Inter Display optical sizing.
- **Monospace**: `"JetBrains Mono", "SFMono-Regular", Menlo, Consolas, "Liberation Mono", monospace` — for code blocks, DNS records, IP addresses, API keys, and config snippets, which are everywhere in the product.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | 56px | 700 | 1.1 (62px) | -0.02em | Marketing hero headline |
| Display | Inter | 40px | 700 | 1.15 (46px) | -0.02em | Major section headers |
| Heading 1 | Inter | 32px | 700 | 1.2 (38px) | -0.01em | Page titles |
| Heading 2 | Inter | 24px | 600 | 1.3 (31px) | -0.01em | Section / card group titles |
| Heading 3 | Inter | 20px | 600 | 1.4 (28px) | normal | Card headings, panel titles |
| Subtitle | Inter | 18px | 600 | 1.45 (26px) | normal | Lead-in / dashboard section labels |
| Body Large | Inter | 16px | 400 | 1.6 (26px) | normal | Marketing paragraphs |
| Body | Inter | 14px | 400 | 1.55 (22px) | normal | Dashboard standard text |
| Body Small | Inter | 13px | 400 | 1.5 (20px) | normal | Table cells, secondary info |
| Caption | Inter | 12px | 400 | 1.5 (18px) | normal | Metadata, timestamps, helper text |
| Label / Eyebrow | Inter | 12px | 600 | 1.4 (17px) | 0.06em UPPER | Section eyebrows, table headers |
| Code / Mono | JetBrains Mono | 13px | 400 | 1.6 (21px) | normal | DNS records, IPs, API tokens, code |

### Principles
- **Inter, three weights.** 400 (body), 600 (emphasis/sub-headings), 700 (headlines). Avoid 500 in UI text; reserve 800/900 for rare marketing display.
- **Negative tracking on large type.** Headlines ≥24px tighten to `-0.01em` to `-0.02em` for a confident, modern feel; body stays at normal tracking.
- **Monospace is a first-class citizen.** Technical strings — IPs, DNS records, hashes, tokens, JSON — always render in mono so they are scannable and copy-safe. Never set an API key in a proportional font.
- **Uppercase eyebrows.** Small 12px/600 uppercase labels with `0.06em` tracking mark sections and table headers — a quiet structural device, not decoration.

## 4. Component Patterns

Cloudflare maintains a public, open-source component library — **kumo** (`github.com/cloudflare/kumo`, built on Base UI primitives + Tailwind CSS v4), succeeding the earlier **cf-ui** styleguide (`cloudflare.github.io/cf-ui`) — plus a public docs Style Guide (`developers.cloudflare.com/style-guide/components`). The geometry below is lifted from kumo's actual source: a consistent four-step control-size scale (`h-5`/`h-6.5`/`h-9`/`h-10` → 20/26/36/40px), a `rounded-sm → rounded-md → rounded-lg → rounded-xl` radius ladder (4/6/8/12px), and `ring`-based borders over solid borders. One honest nuance worth recording: kumo's *interactive* brand token (`--color-kumo-brand`) is a **blue** in the current library, while **Cloudflare Orange `#F6821F`** persists as the marketing/brand accent (`--text-color-kumo-brand: #f6821f`) and is what the live cloudflare.com surface renders for primary CTAs. The specs below keep the orange-led brand identity that the public marketing surface still ships, annotating where kumo diverges to blue.

### Actions

**Primary Button**
- Fill: `#F6821F` · Text: `#FFFFFF` · Border: none
- Radius: 8px (kumo `rounded-lg`)
- Sizes: medium `h-9` (36px, 12px horizontal padding), large `h-10` (40px, 16px horizontal padding)
- Font: 14px / 600 / Inter (kumo `text-base` 16px on large)
- Hover: `#E2700B` · Pressed: `#D9700F` · Disabled: brand at 50% opacity
- Focus: 2px brand ring (`focus-visible:ring-2 focus-visible:ring-kumo-brand`)
- Use: Primary action — "Get started", "Add site", "Save", "Deploy"

**Secondary Button (outline)**
- Fill: `#FFFFFF` · Text: `#36393A`
- Ring: 1px `#D9D9D9` hairline · Radius: 8px
- Hover: background `#FAFAFA`, ring `#A1A1A1`
- Use: Companion to a primary ("Cancel", "Back")

**Ghost Button**
- Fill: transparent · Text: `#F6821F` · Radius: 8px
- Padding: 0 12px · Hover: background `#FDF3E7` (kumo `bg-kumo-tint`)
- Use: Inline low-emphasis action, "Learn more", text-link button

**Destructive Button**
- Fill: `#BD2528` · Text: `#FFFFFF` · Radius: 8px
- Hover: `#A11F22` (kumo: danger at 70% opacity)
- Secondary destructive variant: white fill, `#BD2528` text, hairline ring
- Use: Delete zone, remove record, purge — confirmation contexts only

**Compact / Small Button**
- Size: `h-6.5` (26px) · Radius: 6px (`rounded-md`) · Padding: 0 8px · Font: 12px
- Use: Toolbar and table-row inline actions where vertical space is tight

**Icon Button**
- Square `h-9`/`h-10`, `p-0`, centered glyph; `rounded-full` or 8px radius
- Use: Close, kebab menu, copy-to-clipboard affordance

**Dark CTA (Marketing)**
- Fill: `#1D1F20` · Text: `#FFFFFF` · Radius: 8px · Padding: 0 24px
- Font: 16px / 600 / Inter · Height: 48px
- Use: Marketing-page secondary CTA where orange is already spent on the primary

### Navigation

**Underline Tabs (default)**
- Container border-bottom: 1px solid `#EDEDED`
- Inactive: text `#717174`, 14px / 600 · Hover: text `#36393A`
- Active: text `#1D1F20`, 2px bottom border `#F6821F`
- Use: Dashboard section switching (Overview / Analytics / DNS / SSL)

**Sidebar / Left Nav**
- Persistent ~240px rail, white surface, 1px `#EDEDED` right hairline
- Item: 14px / 400, `#36393A`; active item orange-tinted `#FDF3E7` fill + `#F6821F` text/indicator
- Collapses to an icon rail, then a drawer on mobile (kumo `sidebar`)

**Breadcrumbs**
- 13px / 400 `#717174`, `#36393A` on current crumb, `/` or chevron separators in `#A1A1A1`
- Use: Zone → section → record deep paths

**Pagination**
- Numbered controls as compact buttons; current page brand-tinted; prev/next chevrons
- Use: Long DNS/log/audit tables (kumo `pagination`)

### Forms

**Text Field**
- Fill: `#FFFFFF` · Text: `#1D1F20` · Placeholder: `#999999`
- Ring: 1px `#D9D9D9` (`ring-kumo-line`) · Radius: 8px
- Size: `h-10` (40px), 16px horizontal padding · Font: 14px / 400 / Inter
- Focus: 1.5px brand ring (kumo `focus:ring-[1.5px]`) — marketing/live surface renders the orange ring `0 0 0 3px rgba(246,130,31,0.2)`
- Use: Standard form input, search, config values

**Mono Input (technical)**
- Fill: `#FFFFFF` · Text: `#1D1F20` · Ring: 1px `#D9D9D9` · Radius: 8px
- Font: 13px / 400 / JetBrains Mono
- Use: DNS record values, IP entry, token paste fields

**Input Error State**
- Ring: 1.5px `#BD2528` (`ring-kumo-danger`)
- Focus ring: `0 0 0 3px rgba(189,37,40,0.18)`
- Helper text below: `#BD2528`, 12px / 400 — one actionable sentence
- Use: Validation failure

**Select / Dropdown**
- Fill: `#FFFFFF` · Ring: 1px `#D9D9D9` · Radius: 8px · Size: `h-10`
- Chevron: `#717174`
- Use: Plan picker, record-type selector, region dropdown

**Switch / Toggle**
- DS sizes: track `h-4`/`h-4.5`/`h-5` (16/18/20px)
- Shape: `rounded-[5px]`, squircle-rounded to 10px where supported
- On: `#F6821F` (kumo library on-state = blue `#2C7CB0`) · Off: `#D9D9D9`
- Thumb: `#FFFFFF` circle with edge+drop shadow (`shadow-[0 0 1px .5px edge, 0 1px 2px drop]`)
- Use: Proxy on/off, feature flags, security toggles

**Checkbox / Radio**
- Square (checkbox) / circle (radio), ~6px / pill radius
- Checked: brand fill + white glyph · Unchecked: 1px `#D9D9D9` hairline ring
- Use: Multi-select rules, plan options, consent

### Data display

**Standard Panel**
- Fill: `#FFFFFF` · Border: 1px solid `#EDEDED` · Radius: 8px · Padding: 24px
- Shadow: `0 1px 3px rgba(0,0,0,0.06)`
- Use: Dashboard config panels, analytics modules — the workhorse surface

**Marketing Feature Card**
- Fill: `#FFFFFF` · Border: none · Radius: 12px · Padding: 32px
- Shadow: `0 4px 16px rgba(0,0,0,0.08)`
- Use: Product/feature cards on the marketing site

**Stat / Metric Card**
- Fill: `#FFFFFF` · Border: 1px solid `#EDEDED` · Radius: 8px · Padding: 20px
- Big number: 32px / 700 / Inter, `#1D1F20`
- Label: 12px / 600 uppercase, `#717174`
- Use: Analytics summary tiles (requests, bandwidth, threats blocked)

**Data Table**
- Header row: background `#FAFAFA`, text 12px / 600 uppercase `#717174`, `0.04em` tracking
- Body cell: 13px / 400 `#36393A`, padding 12px 16px
- Row border: 1px solid `#EDEDED` · Hover row: background `#FAFAFA`
- Zebra (optional): alternate `#FFFFFF` / `#FAFAFA`
- Use: DNS records, firewall rules, analytics logs — the heart of the product

**Code Block**
- Background: `#F5F5F5` (light) / `#15171A` (dark) · Text: `#1D1F20` / `#E4E6E7`
- Border: 1px solid `#EDEDED` (light) · Radius: 6px · Padding: 12px 16px
- Font: 13px / 400 / JetBrains Mono · with copy-to-clipboard affordance
- Use: API examples, Worker snippets, curl commands, DNS values

**Meter / Progress**
- Track: `#EDEDED` rounded-full; fill brand `#F6821F` (or semantic for usage warnings)
- Use: Plan usage, bandwidth consumption, upload progress (kumo `meter`)

### Overlays

**Dialog / Modal**
- Fill: `#FFFFFF` · Text: `#1D1F20` · Ring: 1px line · Radius: 12px (`rounded-xl`) · Padding: 32px (`p-8`)
- Shadow: `0 12px 32px rgba(0,0,0,0.18)`
- Scrim: `rgba(29,31,32,0.5)` (kumo recessed at ~80% opacity)
- Enter: scale from 90% + fade over 150ms
- Use: Confirmations, destructive double-checks, add-record flows

**Popover / Dropdown Menu**
- Fill: `#FFFFFF` · Ring: 1px `#EDEDED` · Radius: 8px · Shadow: floating `0 8px 24px rgba(0,0,0,0.12)`
- Item hover: `#FAFAFA` fill
- Use: Action menus, command palette, account switcher (kumo `popover`, `dropdown`, `command-palette`)

**Tooltip**
- Fill: `#FFFFFF` · Text: `#1D1F20`, 13px · Radius: 6px (`rounded-md`) · Padding: 6px 10px
- Shadow: `shadow-lg`, 1px outline
- Use: Icon labels, truncated-value reveal, glossary terms

### Feedback & Status

**Toast**
- Fill: `#1D1F20` (live marketing) / `#FFFFFF` (kumo) · Text: `#FFFFFF` / `#1D1F20`
- Radius: 12px (`rounded-xl`) · Padding: 16px · Shadow: `shadow-lg`
- Accent: 4px brand left-border (marketing) or 0.3px semantic ring — success green `#2FB344`, error red `#BD2528`, warning yellow `#F6C549`, info blue `#2C7CB0`
- Position: fixed bottom-right, 340px wide; 4–5s auto-dismiss
- Use: Auto-dismissing confirmation ("Record added", "Settings saved")

**Banner / Alert**
- Full-width inline strip; tinted background by severity (info `#FDF3E7`-style tint, warning, danger, success)
- 1px hairline, 14px text, optional icon + dismiss
- Use: Account-level notices, plan upgrade prompts, incident banners (kumo `banner`)

**Badge**
- Shape: `rounded-full` · Padding: 2px 8px · Font: 12px / 500
- Variants: neutral, success, error, warning, info, orange, plus dashed-brand outline
- Optional 7px status dot (`size-1.75 rounded-full`)
- Use: "NEW", "Beta", version, plan, short metadata

**Status Pill — Active / Proxied (Green)**
- Background: `#E8F5D8` · Dot: `#2FB344` · Text: `#3D6B14`
- Radius: 9999px · Padding: 2px 10px · Font: 12px / 600 / Inter
- Use: "Active", "Proxied", healthy

**Status Pill — Error / Down (Red)**
- Background: `#FBE2E2` · Text: `#BD2528`
- Radius: 9999px · Padding: 2px 10px · Font: 12px / 600 / Inter
- Use: "Down", "Blocked", "Error"

**Status Pill — Pending / Paused (Yellow)**
- Background: `#FCF3D6` · Text: `#8A6D1B`
- Radius: 9999px · Padding: 2px 10px · Font: 12px / 600 / Inter
- Use: "Pending", "DNS only", "Paused"

**Status Pill — Neutral (Grey)**
- Background: `#EDEDED` · Text: `#4D4D4D`
- Radius: 9999px · Padding: 2px 10px · Font: 12px / 600 / Inter
- Use: "Inactive", neutral metadata

**Status Pill — Brand (Orange)**
- Background: `#FDF3E7` · Text: `#C2670F`
- Radius: 9999px · Padding: 2px 10px · Font: 12px / 600 / Inter
- Use: "NEW", "Beta", plan emphasis

**Loader / Spinner**
- Brand `#F6821F` ring spinner (inline) or top progress bar; existing data stays visible on refresh
- Use: In-button loading (label swaps for white spinner, width preserved), table refresh (kumo `loader`)

**Empty State**
- One line of `#36393A` body explaining the *why* + one orange-ghost or secondary action; no dashboard illustration
- Use: "No DNS records yet. Add your first record." (kumo `empty`)

---


**Tier 1 sources:** https://www.cloudflare.com (live production marketing site, verified via live DOM getComputedStyle); Cloudflare's public component library **kumo** (`github.com/cloudflare/kumo` — source TSX + `theme-kumo.css` design tokens), the legacy **cf-ui** styleguide (`cloudflare.github.io/cf-ui`), and the docs **Style Guide** (`developers.cloudflare.com/style-guide/components`). Component geometry (size scale, radius ladder, ring borders, dialog/toast/tooltip specs) is lifted from kumo source; the orange-led palette is grounded in the live marketing surface.

## 5. Layout Principles

### Spacing System
- Base unit: 4px; primary rhythm on 8px.
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px.
- Marketing sections: generous 64–96px vertical rhythm.
- Dashboard panels: tighter 16–24px internal padding for density.

### Grid & Container
- Marketing max-width: ~1200px, centered, 24px gutters.
- Dashboard: persistent left nav (~240px) + fluid content area; tables go full-width within content.
- 12-column responsive grid on marketing; flexible flex/stack layout in product.

### Whitespace Philosophy
- **Whitespace earns trust.** Marketing pages breathe — one idea per band, large headline, supporting paragraph, single orange CTA.
- **Density where work happens.** The dashboard trades whitespace for information: data tables, log streams, and config grids are intentionally dense because operators want facts per pixel.
- **Orange is rationed.** A screen typically shows orange in exactly one or two places. Scarcity is what makes it read as "the action."

### Border Radius Scale
- Tight (4px): pills' inner chips, small inline tags
- Standard (6px): buttons, inputs, selects, code blocks
- Comfortable (8px): cards, panels, toasts
- Large (10–12px): modals, marketing feature cards
- Pill (9999px): status badges, toggles, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, 1px `#EDEDED` border | Inline elements, table rows, bordered panels |
| Subtle (1) | `0 1px 3px rgba(0,0,0,0.06)` | Standard dashboard cards |
| Raised (2) | `0 4px 16px rgba(0,0,0,0.08)` | Marketing feature cards, hover lift |
| Floating (3) | `0 8px 24px rgba(0,0,0,0.12)` | Dropdowns, popovers, tooltips |
| Modal (4) | `0 12px 32px rgba(0,0,0,0.18)` | Dialogs, command palette |

**Shadow Philosophy:** Cloudflare prefers **borders over shadows** for structure — a crisp 1px `#EDEDED` rule defines most surfaces, with soft neutral shadows reserved for genuinely floating layers. Shadows are pure-black low-opacity, never tinted. This keeps the dense dashboard legible: dozens of bordered panels read cleanly where dozens of shadowed cards would muddy. The brand's depth comes from clarity and alignment, not drop-shadow drama.

### Dark Mode Elevation
- In dark mode, elevation is conveyed by **surface lightness**, not shadow: background `#15171A` → card `#262A2E` → popover `#2E3338`. Borders shift to `#3A3F44`.

## 7. Do's and Don'ts

### Do
- Use Cloudflare Orange (`#F6821F`) for the primary CTA and key interactive accents — and almost nowhere else.
- Set technical strings (IPs, DNS records, tokens, code) in JetBrains Mono / monospace.
- Use status pills with green/red/yellow + a colored dot for health and proxy state.
- Prefer 1px `#EDEDED` borders to define panels; keep shadows subtle and neutral.
- Use warm near-black (`#1D1F20`) for headings, never pure `#000`.
- Set headlines in Inter 700 with slightly negative letter-spacing.
- Ship parity in dark mode for any product UI, keeping orange unchanged.

### Don't
- Don't flood screens with orange — it loses its meaning the moment it decorates instead of directing.
- Don't use blue as a primary brand color; blue is informational/secondary only (Cloudflare is deliberately not blue).
- Don't put API keys, IPs, or DNS values in a proportional font.
- Don't use heavy or colored drop shadows — borders and subtle neutral shadows only.
- Don't use radii above 12px except pills and avatars.
- Don't set body text in 700 — reserve bold for headings and emphasis.
- Don't mix the logomark gradient orange (`#FAAD3F`) into UI text or buttons.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked cards, hamburger nav, full-width buttons |
| Tablet | 640–1024px | 2-column feature grids, collapsible dashboard side nav |
| Desktop | 1024–1280px | Full marketing grid; dashboard left nav + content |
| Wide | >1280px | Centered 1200px marketing container; dashboard tables expand |

### Touch Targets
- Buttons: ≥40px tall (≥44px on mobile).
- Table row actions: ≥40px tap height on touch.
- Toggle/switch: ≥32px hit area.

### Collapsing Strategy
- Dashboard left nav collapses to an icon rail, then to a drawer on mobile.
- Wide data tables become horizontally scrollable or collapse to stacked key-value cards on small screens.
- Marketing multi-column feature bands stack to single column; CTAs go full-width.

### Image / Asset Behavior
- Product/partner logos render in a consistent grayscale-or-mono treatment in logo walls.
- Analytics charts are full-width and responsive, maintaining aspect ratio.
- The orange cloud logomark scales but never recolors.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Cloudflare Orange (`#F6821F`)
- CTA Hover: Dark Orange (`#E2700B`)
- Background: White (`#FFFFFF`) / Off-white (`#F7F7F7`)
- Heading text: Charcoal (`#1D1F20`)
- Body text: Body Charcoal (`#36393A`)
- Muted text: Grey (`#717174`)
- Placeholder: (`#999999`)
- Border: Grey 200 (`#EDEDED`) / Grey 300 (`#D9D9D9`)
- Success: Green (`#2FB344`)
- Error: Red (`#BD2528`)
- Warning: Yellow (`#F6C549`)
- Info: Blue (`#2C7CB0`)
- Dark surface: (`#262A2E`) on (`#15171A`)

### Example Component Prompts
- "Create a primary button: `#F6821F` bg, white text 14px weight 600 Inter, 40px tall, 6px radius, 0 20px padding. Hover `#E2700B`. Focus ring `0 0 0 3px rgba(246,130,31,0.2)`."
- "Build a DNS record row: white bg, 1px `#EDEDED` bottom border. Type pill (grey), name + value in 13px JetBrains Mono `#36393A`, proxy toggle (`#F6821F` on / `#D9D9D9` off), status pill 'Proxied' green `#E8F5D8`/`#3D6B14`."
- "Design a stat card: white bg, 1px `#EDEDED` border, 8px radius, 20px padding. Big number 32px weight 700 `#1D1F20`, uppercase label 12px weight 600 `#717174` with `0.04em` tracking."
- "Create a marketing hero: white bg, headline 56px weight 700 Inter `#1D1F20` tracking `-0.02em`, subhead 18px `#36393A`, single orange CTA `#F6821F` 48px tall 6px radius."
- "Build a status pill: fully rounded, 12px weight 600 Inter, 2px 10px padding. Success green `#E8F5D8`/`#3D6B14`; error `#FBE2E2`/`#BD2528`; pending `#FCF3D6`/`#8A6D1B`."

### Iteration Guide
1. Use Inter with a system-ui fallback for all UI text; JetBrains Mono for any technical string.
2. Orange (`#F6821F`) appears only on primary actions and key accents — ration it deliberately.
3. Headings are warm charcoal `#1D1F20`, body `#36393A` — never pure black.
4. Define surfaces with 1px `#EDEDED` borders first; add subtle neutral shadow only for floating layers.
5. Radii: 6px buttons/inputs, 8px cards, 10–12px modals, pill for badges/toggles.
6. Status uses colored pills + dots (green/red/yellow); blue is informational only, never primary.
7. Provide a dark-mode mapping (`#15171A` bg, `#262A2E` surface, `#E4E6E7` text) with orange unchanged.

---

## 10. Voice & Tone

Cloudflare's voice is **technical but human** — confident, plain-spoken, and quietly witty. It explains hard infrastructure to a broad audience (a solo developer on the free plan and a Fortune 100 security team) without dumbing it down or drowning it in jargon. The famous mission line — *"to help build a better Internet"* — sets the register: ambitious, optimistic, capital-I "Internet." Marketing copy is benefit-led and concrete; the blog (a beloved engineering channel) goes deep with precision and personality. Sentences are direct. Claims are specific and measurable.

| Context | Tone |
|---|---|
| CTAs | Short imperative verb phrases — "Get started", "Add a site", "Sign up", "Talk to an expert". |
| Headlines | Confident, benefit-first, plain — "Make employees, applications and networks faster and more secure." |
| Product UI labels | Precise, technical, unambiguous — "Proxied", "DNS only", "Always Use HTTPS". |
| Success messages | Past-tense, specific — "DNS record added", "SSL certificate issued". |
| Error messages | Specific, blameless, actionable — name what failed and what to do next. |
| Blog / docs | Deep, candid, occasionally playful; explains the *why* behind the engineering. |
| Empty states | One line of why + one action — "No DNS records yet. Add your first record." |

**Forbidden moves.** Vague enterprise filler ("synergy", "best-in-class") without substance; fear-mongering security FUD; over-promising 100% guarantees; burying the user in acronyms without a first-use expansion.

## 11. Brand Narrative

Cloudflare was founded in **2009** by **Matthew Prince, Lee Holloway, and Michelle Zatlyn**, growing out of Project Honey Pot — a system for tracking online attackers. The founding insight: the tools that protect and accelerate the internet were locked behind enterprise price tags, available only to the largest companies. Cloudflare's thesis was to **democratize** that infrastructure — give the same DDoS protection, CDN, and DNS that a bank uses to a hobbyist's blog, much of it free. The mission, repeated everywhere, is *"to help build a better Internet."*

That populist, pro-developer DNA explains the design. In a category dominated by navy-blue, suit-and-tie enterprise security branding, Cloudflare chose **warm orange** — friendly, energetic, human — to signal that powerful infrastructure could be approachable. The orange cloud logomark, built from a warm orange-to-yellow gradient, is both literal (a cloud) and emotional (warmth in a cold category). The generous whitespace and clean Inter typography say "this is easy"; the dense, monospace-heavy dashboard says "this is serious engineering." Both are true at once.

Cloudflare went public on the NYSE in **2019 (ticker NET)** and has grown into a "connectivity cloud" — CDN, DNS (1.1.1.1), Zero Trust, Workers edge compute, R2 storage, and AI inference at the edge. The design system scaled with it: a published color system ("Color by Cloudflare Design"), the open-source cf-ui component library, a comprehensive style guide, and a fully-realized dashboard dark mode. Through every expansion the orange has stayed fixed — the one constant that makes a sprawling platform feel like a single, recognizable brand.

What Cloudflare refuses: the cold blue of incumbent security and cloud vendors, the fear-based marketing of the security industry, and gratuitous visual ornament. It occupies a deliberate middle — technically credible yet warm, massive in scale yet approachable in tone.

## 12. Principles

1. **Orange is the action.** `#F6821F` marks where the user should look and click. It is rationed to one or two places per screen. When orange decorates instead of directs, it has been misused.
2. **Borders before shadows.** Structure comes from crisp 1px neutral rules and alignment. Shadows are reserved for genuinely floating layers. A dense dashboard stays legible because surfaces are outlined, not stacked in soft elevation.
3. **Monospace for truth.** Anything an operator must read exactly — IPs, DNS records, tokens, code — is monospace. Proportional fonts are for prose, not infrastructure.
4. **Whitespace where you sell, density where you work.** Marketing breathes; the dashboard packs. Both are intentional, neither apologizes.
5. **Warm, not cold.** Near-black is warm charcoal, the accent is warm orange. Cloudflare deliberately rejects the cold blue of its category — humanity is a design requirement.
6. **Plain words, precise claims.** Copy is direct and benefit-led; technical labels are exact. No jargon for its own sake, no vague enterprise filler.
7. **Parity in dark.** Product UI must work in light and dark with equal polish. Orange holds in both; surfaces shift, the brand doesn't.
8. **Powerful but approachable.** Every screen must feel usable by a solo developer and trustworthy to an enterprise team simultaneously. That tension is the brand.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Cloudflare user segments, not individual people.*

**Devin, 29, Austin.** Full-stack developer at a Series-B startup. Runs the company's marketing site and a handful of side projects through Cloudflare's free and Pro plans. Lives in the DNS and Workers sections of the dashboard. Wants the proxy toggle and DNS record table to be instant and unambiguous; copies API tokens and IPs constantly and is annoyed when they aren't in a monospace, click-to-copy field. Reads the Cloudflare blog for fun. Picked Cloudflare partly because the free tier let him do real things without a sales call.

**Priya, 41, London.** Security engineer at a mid-market fintech. Manages WAF rules, Zero Trust access policies, and bot mitigation across dozens of zones. Spends her day in dense data tables and log streams; values information density over whitespace and wants status (Proxied / Blocked / Down) legible at a glance via colored pills. Distrusts marketing fluff — judges the product by the precision of its labels and the speed of its analytics. Dark mode all day.

**Marcus, 52, Chicago.** VP of Infrastructure evaluating Cloudflare for an enterprise migration. Lands first on the marketing site, where the calm whitespace, confident headlines, and single orange CTA signal a mature, trustworthy vendor. Clicks "Talk to an expert." Cares that the brand reads as serious engineering *and* approachable enough that his whole team will actually adopt it. The warmth of the orange is, to him, a subtle promise that this won't feel like legacy enterprise software.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | One line of `#36393A` body explaining the *why* ("No DNS records yet.") plus one orange-ghost or secondary action ("Add a record"). No illustration in the dashboard; marketing may use a light spot graphic. |
| **Empty (filtered)** | Single `#717174` caption ("No records match your filter.") with a "Clear filter" text button. |
| **Loading (first paint)** | Skeleton blocks at `#EDEDED` (light) / `#2A2E33` (dark) matching final layout. Metric values show `—` until resolved. |
| **Loading (refresh)** | Inline orange spinner or top progress bar; existing data stays visible, never blanked. |
| **Error (inline field)** | 1px `#BD2528` border, helper text below in `#BD2528` 12px, one actionable sentence ("Enter a valid IPv4 address."). |
| **Error (toast)** | `#1D1F20` bg, white text, 4px red left-border, 4–5s auto-dismiss, one sentence. |
| **Error (page-level)** | Centered message in `#1D1F20` 16px/600 + cause + retry button in orange. Reserved for outage/permission failures. |
| **Success (toast)** | `#1D1F20` bg, white text, 4px green left-border ("Record added."). |
| **Status: healthy** | Green pill + dot — "Active" / "Proxied" / "Healthy". |
| **Status: degraded/paused** | Yellow pill — "Pending" / "DNS only" / "Paused". |
| **Status: down/blocked** | Red pill — "Down" / "Blocked" / "Error". |
| **Disabled** | Control at 40–50% opacity; orange buttons keep hue but drop opacity; geometry unchanged. |
| **Focus** | 3px orange focus ring `rgba(246,130,31,0.2)` on inputs/buttons — visible for keyboard nav. |
| **Loading inside button** | Label swapped for a small white spinner; button width preserved; press committed, no double-submit. |

## 15. Motion & Easing

**Durations** (named, not raw ms):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state |
| `motion-fast` | 120ms | Hover, focus ring, button press |
| `motion-standard` | 200ms | Dropdowns, tab switches, accordion expand |
| `motion-emphasis` | 300ms | Modal open, sheet, toast enter |
| `motion-page` | 350ms | Route/section transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Appearing — modals, toasts, popovers |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Leaving — dismissals, collapses |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — tabs, accordions, hover lift |
| `ease-out-soft` | `cubic-bezier(0.16, 1, 0.3, 1)` | Emphasized marketing reveals on scroll |

**Signature motions.**

1. **Hover lift.** Marketing feature cards rise ~2px and deepen shadow (`motion-fast / ease-standard`) on hover — a light, responsive cue that the surface is interactive.
2. **Orange focus ring.** On keyboard focus, the 3px `rgba(246,130,31,0.2)` ring fades in over `motion-fast`. Accessibility-first; never suppressed for aesthetics.
3. **Toast slide-in.** Toasts enter from the top-right (or bottom) translating ~16px with `motion-emphasis / ease-enter`, exit via `motion-fast / ease-exit` — leaving is quicker than arriving.
4. **Status transitions.** When a zone flips state (Pending → Active), the pill cross-fades color over `motion-standard`; never a hard swap, so operators perceive the change.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; slides become fades; the dashboard stays fully usable.

<!--
OmD v0.1 Sources — Cloudflare

Token grounding:
- Cloudflare Orange #F6821F is the documented primary brand color (hint + widely
  published brand-color references: brandcolors.net/b/cloudflare, brandpalettes.com,
  schemecolor.com). Logomark gradient #F6821F → #FAAD3F (#F48120 alt).
- Typography: Inter with system-ui fallback; JetBrains/mono for technical strings —
  grounded in Cloudflare design-system docs (developers.cloudflare.com design-system,
  cloudflare.github.io/cf-ui, color.cloudflare.design "Color by Cloudflare Design").
- Dark mode: confirmed shipped (blog.cloudflare.com/dark-mode).
- Founders/history (Prince, Holloway, Zatlyn, 2009; NYSE NET 2019; mission
  "help build a better Internet") are widely documented public facts.

Web research (2026-06-06): WebSearch results for Cloudflare brand color / design
system / typography. color.cloudflare.design and cloudflare.com WebFetch were
unreachable at write time (ECONNREFUSED / classifier unavailable); token values
above are reconciled from multiple public brand-color references and the hint.

Neutral/grey, semantic, and dark-mode hex values, component geometry (radii,
padding, shadow tokens), motion tokens, and personas are interpretive
reconstructions consistent with Cloudflare's observed marketing site and
dashboard, not verbatim from a single published spec. Personas are fictional
archetypes informed by publicly described Cloudflare user segments.
-->

---
id: coinbase
name: Coinbase
country: US
category: fintech
homepage: "https://www.coinbase.com"
primary_color: "#0052ff"
logo:
  type: simpleicons
  slug: coinbase
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: design-system
  extracted: "2026-06-08"
  components_harvested: true
  colors:
    primary: "#0052ff"
    primary-hover: "#578bfa"
    brand: "#0052ff"
    canvas: "#ffffff"
    foreground: "#0a0b0d"
    muted: "#5b616e"
    on-primary: "#ffffff"
    surface: "#eef0f3"
    surface-dark: "#282b31"
    dark-section: "#0a0b0d"
    link: "#0667d0"
  typography:
    family: { sans: "CoinbaseSans", display: "CoinbaseDisplay", body: "CoinbaseText", icon: "CoinbaseIcons" }
    display-hero:      { size: 80, weight: 400, lineHeight: 1.00, use: "Hero headlines, maximum impact" }
    display-secondary: { size: 64, weight: 400, lineHeight: 1.00, use: "Sub-hero headlines" }
    display-third:     { size: 52, weight: 400, lineHeight: 1.00, use: "Third-tier display" }
    section-heading:   { size: 36, weight: 400, lineHeight: 1.11, use: "Feature section titles" }
    card-title:        { size: 32, weight: 400, lineHeight: 1.13, use: "Card headings" }
    feature-title:     { size: 18, weight: 600, lineHeight: 1.33, use: "Feature emphasis" }
    body-bold:         { size: 16, weight: 700, lineHeight: 1.50, use: "Strong body" }
    body-semibold:     { size: 16, weight: 600, lineHeight: 1.25, use: "Buttons, nav" }
    body:              { size: 18, weight: 400, lineHeight: 1.56, use: "Standard reading" }
    body-small:        { size: 16, weight: 400, lineHeight: 1.50, use: "Secondary reading" }
    button:            { size: 16, weight: 600, lineHeight: 1.20, tracking: 0.16, use: "Button labels" }
    caption:           { size: 14, weight: 600, lineHeight: 1.50, use: "Metadata" }
    small:             { size: 13, weight: 600, lineHeight: 1.23, use: "Tags" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, xl: 40, pill: 56, full: 100000 }
  shadow:
    soft: "minimal — depth from dark/light section contrast, not box-shadow"
  components:
    button-primary:      { type: button, bg: "#0052ff", fg: "#ffffff", radius: "100000px", border: "1px solid #0052ff", font: "16px / 600", hover: "bg #578bfa", focus: "2px solid black outline", states: "loading hides label + ProgressCircle · sizes Compact/Default/Block", use: "High-emphasis primary CTA, one per screen" }
    button-secondary:    { type: button, bg: "#eef0f3", fg: "#0a0b0d", radius: "100000px", border: "1px solid #eef0f3", font: "16px / 600", use: "Medium-emphasis equal-weight actions" }
    button-tertiary:     { type: button, bg: "#eef0f3", fg: "#0a0b0d", radius: "100000px", states: "transparent-until-interaction", use: "Low-emphasis action" }
    button-inverse:      { type: button, bg: "#282b31", fg: "#ffffff", radius: "100000px", use: "High contrast on dark sections" }
    button-negative:     { type: button, fg: "#ffffff", radius: "100000px", use: "Destructive only, used sparingly" }
    button-transparent:  { type: button, bg: "transparent", fg: "#0a0b0d", radius: "100000px", states: "container visible only on hover/press · sizes Compact/Default/Block · startIcon+endIcon slots", use: "Transparent modifier on any variant" }
    button-blue-bordered: { type: button, bg: "transparent", fg: "#0052ff", radius: "100000px", border: "1px solid #0052ff", font: "16px / 600", use: "Secondary CTA pairing" }
    icon-button:         { type: button, bg: "transparent", radius: "100000px", height: "56px", use: "Icon-only action, 56px round hit-target" }
    chip:                { type: badge, bg: "#eef0f3", fg: "#0a0b0d", radius: "100000px", states: "selected bg #0052ff", use: "Pill selectable token" }
    nav-tab-chip:        { type: tab, fg: "#0667d0", radius: "16px", padding: "4px 16px", font: "14px / 400", use: "Header category chip" }
    text-input:          { type: input, bg: "#ffffff", fg: "#0a0b0d", border: "1px solid rgba(91,97,110,0.2)", radius: "8px", height: "56px", padding: "16px", font: "16px / 400", states: "label outside/inside-float · negative sets aria-invalid + 'Error: …' helper · positive validated · read-only secondary bg · disabled distinct", use: "Bordered text field" }
    search-input:        { type: input, bg: "transparent", fg: "#0a0b0d", border: "none", font: "16px / 400", states: "borderless inline · leading search glyph", use: "Inline search field" }
    switch:              { type: toggle, states: "control #0052ff when checked · optional thumb elevation", use: "On/off toggle" }
    checkbox-radio:      { type: toggle, active: "selected fill #0052ff", states: "Cell + Group wrappers", use: "Checkbox and Radio selection" }
    segmented-control:   { type: tab, bg: "#eef0f3", active: "active segment #0052ff", radius: "100000px", use: "Time-range and view switches" }
    card:                { type: card, bg: "#ffffff", border: "1px solid rgba(91,97,110,0.2)", radius: "8px–40px", shadow: "none — depth from section contrast", states: "ContentCard Header/Body/Footer · DataCard/MediaCard/NudgeCard/UpsellCard", use: "Content container family" }
    data-table:          { type: card, border: "1px solid rgba(91,97,110,0.2)", states: "desktop-only (Lists View on mobile) · variants default/graph/ruled · required header row · sortable · sticky header · TableCellFallback skeleton", use: "Tabular data, desktop only" }
    list-cell:           { type: listItem, fg: "#0a0b0d", states: "leading CellMedia + title/subtitle", use: "Mobile substitute for Table, asset rows" }
    modal:               { type: dialog, bg: "#ffffff", shadow: "scrim overlay + FocusTrap", states: "visible + onRequestClose · restoreFocusOnUnmount=false for chains · FullscreenModal/Tray/Alert/FullscreenAlert siblings", use: "Header/Body/Footer modal" }
    toast:               { type: toast, states: "bottom-anchored · auto-dismiss 5s base + close button · bgPositive/bgNegative/bgWarning · role=alert · persists on hover", use: "Transient status message" }
    tooltip:             { type: card, states: "Tooltip + PopoverPanel + Coachmark", use: "Contextual hints and first-run tours" }
    banner:              { type: card, border: "global avoids custom radius — flush with status bar", states: "styles global/inline/contextual · variants informational/warning/error/promotional · startIcon+title+children+primaryAction+secondaryAction+showDismiss", use: "Feedback and status messaging" }
    progress:            { type: card, fg: "#0052ff", states: "ProgressCircle determinate 0–100% / indeterminate fgMuted arc · stroke thin 2px/normal 4px/semiheavy 8px/heavy 12px · ProgressBar + Spinner", use: "Determinate/indeterminate progress" }
    sparkline:           { type: card, fg: "#0052ff", states: "Sparkline/LineChart/AreaChart/BarChart/PercentageBarChart · live price ticks flash green/red (disabled under reduced-motion)", use: "Inline price/chart visualization" }
    dark-section:        { type: card, bg: "#0a0b0d", fg: "#ffffff", active: "accent links #0052ff", use: "Dark feature section" }
---

# Design System Inspiration of Coinbase

## 1. Visual Theme & Atmosphere

Coinbase's website is a clean, trustworthy crypto platform that communicates financial reliability through a blue-and-white binary palette. The design uses Coinbase Blue (`#0052ff`) — a deep, saturated blue — as the singular brand accent against white and near-black surfaces. The proprietary font family includes CoinbaseDisplay for hero headlines, CoinbaseSans for UI text, CoinbaseText for body reading, and CoinbaseIcons for iconography — a comprehensive four-font system.

The button system uses a distinctive 56px radius for pill-shaped CTAs with hover transitions to a lighter blue (`#578bfa`). The design alternates between white content sections and dark (`#0a0b0d`, `#282b31`) feature sections, creating a professional, financial-grade interface.

**Key Characteristics:**
- Coinbase Blue (`#0052ff`) as singular brand accent
- Four-font proprietary family: Display, Sans, Text, Icons
- 56px radius pill buttons with blue hover transition
- Near-black (`#0a0b0d`) dark sections + white light sections
- 1.00 line-height on display headings — ultra-tight
- Cool gray secondary surface (`#eef0f3`) with blue tint
- `text-transform: lowercase` on some button labels — unusual

## 2. Color Palette & Roles

### Primary
- **Coinbase Blue** (`#0052ff`): Primary brand, links, CTA borders
- **Pure White** (`#ffffff`): Primary light surface
- **Near Black** (`#0a0b0d`): Text, dark section backgrounds
- **Cool Gray Surface** (`#eef0f3`): Secondary button background

### Interactive
- **Hover Blue** (`#578bfa`): Button hover background
- **Link Blue** (`#0667d0`): Secondary link color
- **Muted Blue** (`#5b616e`): Border color at 20% opacity

### Surface
- **Dark Card** (`#282b31`): Dark button/card backgrounds
- **Light Surface** (`rgba(247,247,247,0.88)`): Subtle surface

## 3. Typography Rules

### Font Families
- **Display**: `CoinbaseDisplay` — hero headlines
- **UI / Sans**: `CoinbaseSans` — buttons, headings, nav
- **Body**: `CoinbaseText` — reading text
- **Icons**: `CoinbaseIcons` — icon font

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | CoinbaseDisplay | 80px | 400 | 1.00 (tight) | Maximum impact |
| Display Secondary | CoinbaseDisplay | 64px | 400 | 1.00 | Sub-hero |
| Display Third | CoinbaseDisplay | 52px | 400 | 1.00 | Third tier |
| Section Heading | CoinbaseSans | 36px | 400 | 1.11 (tight) | Feature sections |
| Card Title | CoinbaseSans | 32px | 400 | 1.13 | Card headings |
| Feature Title | CoinbaseSans | 18px | 600 | 1.33 | Feature emphasis |
| Body Bold | CoinbaseSans | 16px | 700 | 1.50 | Strong body |
| Body Semibold | CoinbaseSans | 16px | 600 | 1.25 | Buttons, nav |
| Body | CoinbaseText | 18px | 400 | 1.56 | Standard reading |
| Body Small | CoinbaseText | 16px | 400 | 1.50 | Secondary reading |
| Button | CoinbaseSans | 16px | 600 | 1.20 | +0.16px tracking |
| Caption | CoinbaseSans | 14px | 600–700 | 1.50 | Metadata |
| Small | CoinbaseSans | 13px | 600 | 1.23 | Tags |

## 4. Component Stylings

### Buttons

**Primary Pill (56px radius)**
- Background: `#eef0f3` or `#282b31`
- Radius: 56px
- Border: `1px solid` matching background
- Hover: `#578bfa` (light blue)
- Focus: `2px solid black` outline

**Full Pill (100000px radius)**
- Used for maximum pill shape

**Blue Bordered**
- Border: `1px solid #0052ff`
- Background: transparent

### Cards & Containers
- Radius: 8px–40px range
- Borders: `1px solid rgba(91,97,110,0.2)`

## 5. Layout Principles

### Spacing System
- Base: 8px
- Scale: 1px, 3px, 4px, 5px, 6px, 8px, 10px, 12px, 15px, 16px, 20px, 24px, 25px, 32px, 48px

### Border Radius Scale
- Small (4px–8px): Article links, small cards
- Standard (12px–16px): Cards, menus
- Large (24px–32px): Feature containers
- XL (40px): Large buttons/containers
- Pill (56px): Primary CTAs
- Full (100000px): Maximum pill

## 6. Depth & Elevation

Minimal shadow system — depth from color contrast between dark/light sections.

## 7. Do's and Don'ts

### Do
- Use Coinbase Blue (#0052ff) for primary interactive elements
- Apply 56px radius for all CTA buttons
- Use CoinbaseDisplay for hero headings only
- Alternate dark (#0a0b0d) and white sections

### Don't
- Don't use the blue decoratively — it's functional only
- Don't use sharp corners on CTAs — 56px minimum

## 8. Component Patterns

Coinbase open-sourced its design system — **Coinbase Design System (CDS)**, internally codenamed Cedar — at `cds.coinbase.com` and `github.com/coinbase/cds`. It is a cross-platform React / React Native library of 100+ components. The patterns below combine CDS-documented semantics with values measured live from `coinbase.com` (playwright `getComputedStyle`, 2026-06). Color roles map to CDS semantic tokens: `fgPrimary`/`bgPrimary` = Blue70 (`#0052ff`), `fgMuted`/`line` = Gray60 (the `#5b616e` muted role at 20% opacity), `fgInverse`/`bg` = Gray0/white, foreground text = `#0a0b0d`.

### Actions

**button-primary** — CDS `Button` `variant="primary"`. High-emphasis, limit one per screen. Coinbase Blue (`#0052ff`) fill, white label, `16px·600` CoinbaseSans, `+0.16px` tracking. Pill geometry: measured `100000px` radius on full-pill CTAs, `16px` on compact nav chips. Hover lightens to `#578bfa`; focus `2px solid black` outline. Sizes: Compact / Default / Block (fills width). Slots: `startIcon`, `endIcon`. Loading state hides the label and shows an indeterminate ProgressCircle.

**button-secondary** — `variant="secondary"`, medium emphasis for equal-weight actions. Cool-gray (`#eef0f3`) fill, `#0a0b0d` label, `1px solid` matching border.

**button-tertiary / inverse / negative** — Tertiary: low emphasis, muted background, transparent-until-interaction. Inverse: high contrast for dark sections — `#282b31` fill, white label. Negative: destructive-only, used sparingly.

**button-transparent** — modifier on any variant; the container surface only becomes visible on hover/press.

**button-blue-bordered** — transparent fill, `1px solid #0052ff` border, `#0052ff` label. Secondary CTA pairing.

**icon-button** — icon-only `IconButton`. Measured `56px` round hit-target on the homepage utility row, transparent fill.

### Navigation

**top-nav** — sticky `header` containing brand wordmark, category chips, search, and Sign in / Sign up CTAs. Nav category chip measured `16px` radius, `4px 16px` padding, `14px` CoinbaseSans; link text in Link Blue (`#0667d0`).

**tabs** — CDS `Tabs` (the current component; `TabNavigation` is deprecated). Primary and secondary variants, active tab tracked by `value`, underline `TabIndicator`, full W3C tab keyboard pattern with arrow-key wrap-around and overflow arrows.

**segmented-tabs / SegmentedControl** — pill track, `#eef0f3` track surface with `#0052ff` active segment. Used for time-range and view switches.

**stepper / pagination** — `Stepper` for multi-step flows (mirrors the Submitted → Confirming → Confirmed transaction pattern), `Pagination` for paged tables.

### Forms

**text-input** — CDS `TextInput`. Bordered by default (`1px solid` at the `#5b616e`-derived line color, 20% opacity); measured `56px` height, `16px` padding, CoinbaseSans `16px`. Label `outside` (above) or `inside` (floats when unfocused). `variant="negative"` auto-sets `aria-invalid="true"` and expects `"Error: …"` helper text; `variant="positive"` for validated values. Read-only inputs take a secondary background and remain focusable; disabled inputs are visually distinct.

**search-input** — CDS `SearchInput`, borderless inline with a leading search glyph, `#0a0b0d` text.

**switch** — CDS `Switch` on/off toggle. `controlColor` resolves to `#0052ff` when checked; optional thumb elevation/shadow.

**checkbox / radio** — `Checkbox` and `Radio` with `Cell` and `Group` wrappers; selected state fills Coinbase Blue (`#0052ff`).

### Data display

**card** — CDS `ContentCard` family (`Header` / `Body` / `Footer`), plus `DataCard`, `MediaCard`, `NudgeCard`, `UpsellCard`. Radius `8px–40px`, `1px solid rgba(91,97,110,0.2)` border, depth from section contrast rather than box-shadow.

**data-table** — CDS `Table`, explicitly desktop-only (mobile falls back to Lists View). Variants: default / graph (grid lines) / ruled (horizontal lines). Requires a header row; supports sortable headers, row/column spans, sticky header, and `TableCellFallback` skeleton rows.

**list-cell** — `ListCell` / `ContentCell` with leading `CellMedia` (asset logo) + title/subtitle; the mobile substitute for tables and the basis of asset rows.

**sparkline / charts** — `Sparkline`, `LineChart`, `AreaChart`, `BarChart`, `PercentageBarChart` with `XAxis`/`YAxis`/`Scrubber`. Series accent Coinbase Blue (`#0052ff`); live price ticks flash green/red on the cell (disabled under `prefers-reduced-motion`).

### Overlays

**modal** — CDS `Modal` with `ModalHeader` / `ModalBody` / `ModalFooter`. Scrim overlay + `FocusTrap`; `visible` + `onRequestClose` control; `restoreFocusOnUnmount={false}` for chained modals. Siblings: `FullscreenModal`, `Tray` (bottom sheet), `Alert`, `FullscreenAlert`.

**toast** — CDS `Toast`, bottom-anchored (`bottomOffset` clears bottom nav). Auto-dismiss = 5s base + content/action adjustments, plus a default close button; variants `bgPositive` / `bgNegative` / `bgWarning` surge the background; `role="alert"`, persists on hover.

**tooltip / popover** — `Tooltip`, `PopoverPanel`, and `Coachmark` for contextual hints and first-run tours.

### Feedback & status

**banner** — CDS `Banner` in `global` / `inline` / `contextual` styles, variants informational / warning / error / promotional. Slots: `startIcon`, `title`, `children`, `primaryAction`, `secondaryAction`, optional `showDismiss`. Global banners avoid custom radius to stay flush with the status bar.

**progress** — `ProgressCircle` (determinate 0–100% with % overlay, or indeterminate `fgMuted` arc) with stroke weights thin `2px` / normal `4px` / semiheavy `8px` / heavy `12px`; plus `ProgressBar` (fixed and floating label variants) and `Spinner`.

## Responsive Behavior

| Breakpoint | px | Notes |
|---|---|---|
| xs | 400 | Smallest phone |
| sm | 576 | Phone landscape |
| md | 640 | Large phone / small tablet |
| lg | 768 | Tablet |
| xl | 896 | Tablet landscape |
| xxl | 1280 | Desktop |
| 3xl | 1440 | Wide desktop |
| 4xl | 1600 | Max content width |

Measured live viewport 1440px. `Table` is desktop-only and swaps to `ListCell` / Lists View below tablet; `Tray` (bottom sheet) replaces `Modal` on small screens.

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand: Coinbase Blue (`#0052ff`)
- Background: White (`#ffffff`)
- Dark surface: `#0a0b0d`
- Secondary surface: `#eef0f3`
- Hover: `#578bfa`
- Text: `#0a0b0d`

### Example Component Prompts
- "Create hero: white background. CoinbaseDisplay 80px, line-height 1.00. Pill CTA (#eef0f3, 56px radius). Hover: #578bfa."
- "Build dark section: #0a0b0d background. CoinbaseDisplay 64px white text. Blue accent link (#0052ff)."

## 10. Voice & Tone

Coinbase's voice is **compliance-aware-but-friendly** — a fintech that's been through SEC scrutiny and writes microcopy with both legal precision and consumer warmth. Marketing copy avoids hyped crypto-bro language ("moon", "lambo") and stays plainspoken: *"Buy and Sell Bitcoin, Ethereum, and more with trust"* (homepage 2026-05). Product UI emphasizes regulatory clarity (KYC required, rates explicit, fees disclosed) over speculative excitement.

| Context | Tone |
|---|---|
| CTA | Verb-first. "Sign up", "Buy", "Sell". Never "Trade now!!" |
| Marketing | Trust-emphasized. Plain language about regulation/security |
| Error (verification) | Specific. "Verification incomplete. Upload a government-issued ID to continue." |
| Success (transaction) | Receipt-detail. Asset, amount, fee, USD equivalent, network confirmation status |
| Risk warnings | Required and prominent — never minimized in fine print |

**Voice samples**
- Tagline: *"Buy and Sell Bitcoin, Ethereum, and more with trust"* <!-- verified: coinbase.com homepage 2026-05 -->

**Forbidden phrases.** "To the moon", "diamond hands". Hyperbolic ROI claims. Hidden fees. "Risk-free" framing on volatile assets.

## 11. Brand Narrative

Coinbase was founded **June 2012** in San Francisco by **Brian Armstrong** (CEO) and **Fred Ehrsam** (former Goldman Sachs FX trader) ([Brian Armstrong — Wikipedia](https://en.wikipedia.org/wiki/Brian_Armstrong_(businessman)), [Frederick.ai — Brian Armstrong](https://www.frederick.ai/blog/brian-armstrong-coinbase)). Origin story: **Armstrong posted on Hacker News looking for a co-founder for Y Combinator**; Ehrsam responded after seeing the post on Reddit — the HN post itself went viral. They entered **Y Combinator S12** with $150K. Mission: ***"to increase economic freedom in the world."*** **NASDAQ direct listing April 14, 2021** under ticker **COIN** — landmark moment for the crypto industry, briefly approached **$100B market cap** at IPO peak ([99bitcoins](https://99bitcoins.com/people/who-is-brian-armstrong/)). Coinbase **survived the 2022 crypto winter and the FTX collapse (Nov 2022)** as the most-regulated US crypto exchange — turning regulatory caution into positioning advantage. Product family extended: **Coinbase Wallet** (non-custodial), **Coinbase Prime** (institutional), **Base** (L2 blockchain, launched 2023).

What Coinbase refuses: token shilling, unregistered securities listings (regulatory caution), aggressive trader-bait UI, casino-style gambling framing.

## 12. Principles

1. **Compliance is a feature, not a tax.** *UI implication:* KYC/security flows have first-class UX investment, not last-mile.
2. **Show the receipt, always.** *UI implication:* every transaction includes asset / amount / fee / USD value / network status.
3. **Education sits next to action.** *UI implication:* Earn pages, Learn pages have nav prominence equal to Trade.
4. **Round buttons, not aggressive corners.** *UI implication:* fully-pill (`56px` radius) on primary actions reads "approachable, retail-grade".
5. **Coinbase Blue `#0052ff` is the only accent.** *UI implication:* never multi-color brand chrome; let market data charts carry color.

## 13. Personas

*Personas are fictional archetypes informed by Coinbase user segments (retail crypto holders, institutional traders, recurring-buy long-holders), not individual people.*

**Marcus Reilly, 41, Boston.** First-time crypto buyer, $200/month recurring buy of BTC and ETH. Trusts Coinbase as the most regulated US option.

**Yuki Sato, 29, Tokyo.** Tech worker exploring DeFi via Coinbase Wallet (separate from Coinbase exchange). Cares about gas fees and L2 support.

**Aisha Patel, 53, NYC.** RIA managing client crypto exposure via Coinbase Prime (institutional). Compliance reporting is the entire reason for choosing Coinbase.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no portfolio)** | "Make your first purchase" CTA + recurring-buy promotion |
| **Empty (no transactions)** | "Your transaction history will appear here." Plain, no upsell |
| **Loading (price feed)** | Per-cell shimmer; chart shows last cached + stale-indicator |
| **Loading (KYC verification)** | Persistent badge, allows navigation while pending |
| **Error (verification)** | Specific reason + remediation path, never blocking-without-recourse |
| **Error (transaction)** | Receipt-style failure + retry + customer support link |
| **Success (purchase)** | Full receipt: amount, fee, USD value, network confirmation tracker |
| **Success (deposit)** | Confirmation + when funds available, network reliance disclosed |
| **Skeleton (asset list)** | Light gray rows at exact dimensions |
| **Disabled (insufficient funds)** | 0.5 opacity + "Add funds" inline link |
| **Loading (long action: send/withdraw)** | Multi-step progress (Submitted → Confirming → Confirmed) with explicit timing |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |
| `motion-pulse` | continuous | Live price-update micro-flash on cells |

Easings: standard cubic-bezier; no bounce. **Live price updates** flash green/red cell background briefly on tick. `prefers-reduced-motion: reduce` disables price flash.

---

**Verified:** 2026-06-08 (component harvest — TIER 1)
**Tier 1 sources:** coinbase.com (live DOM via playwright across /, /explore, /about — round 56px icon buttons; nav chip 16px radius 4px·16px; input 56px·16px pad; pill 100000px; link `#0667d0`; surface `#eef0f3`). Coinbase Design System (CDS / "Cedar") — cds.coinbase.com + github.com/coinbase/cds: component inventory (100+ across Layout/Inputs/Cards/Data Display/Feedback/Overlay/Navigation/Charts) and per-component specs (Button variants/sizes/states, TextInput, Banner, Modal, Toast, ProgressCircle, Table, Switch).
**Tier 2 sources:** styles.refero.design — no record. getdesign.md/coinbase — cross-checked.
**Tier 1 (Philosophy):** coinbase.com homepage; Brian Armstrong public talks; SEC public filings.
**Style ref:** `stripe`. **Conflicts unresolved:** none.

---
id: pepabo
name: GMO Pepabo (Inhouse)
country: JP
category: saas
homepage: "https://pepabo.com/"
primary_color: "#1f7ccc"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pepabo.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Inhouse is a neutral multi-brand prototype: components render on the 'pepper' base flavor (black/grey, brand-swappable). primary = Pepper Blue 600 #1f7ccc (informative/interactive intention); interactive link on live sites is #0a62ad / #005bac. Brand mint #30f4c5 is the pepabo flavor key accent. Component bg #000000 / text #393c41 are the neutral pepper defaults, designed to be overwritten per brand Flavor."
  colors:
    primary: "#1f7ccc"
    primary-strong: "#0a62ad"
    primary-bright: "#3e93de"
    link: "#005bac"
    ink: "#393c41"
    ink-strong: "#1f2124"
    body: "#585c63"
    muted: "#767b85"
    faint: "#9297a1"
    hairline: "#dee0e3"
    surface: "#edeef0"
    surface-soft: "#f7f8fa"
    canvas: "#ffffff"
    on-primary: "#ffffff"
    brand-mint: "#30f4c5"
    brand-mint-deep: "#0e7365"
    positive: "#1dc487"
    notice: "#debf43"
    negative: "#cc1f24"
    negative-strong: "#b50b11"
    attention: "#db7d42"
    ink-black: "#000000"
  typography:
    family: { sans: "Open Sans", cjk: "Noto Sans JP", kerning: "YakuHanJP", mono: "Roboto Mono" }
    xxxl:   { size: 32, weight: 700, lineHeight: 1.25, use: "Largest display heading (XXXL)" }
    xxl:    { size: 28, weight: 700, lineHeight: 1.29, use: "Page / section heading (XXL)" }
    xl:     { size: 24, weight: 700, lineHeight: 1.33, use: "Subsection heading (XL)" }
    l:      { size: 21, weight: 700, lineHeight: 1.14, use: "Card / brand title (L)" }
    m:      { size: 16, weight: 400, lineHeight: 1.50, use: "Body baseline (M), normal density 24px" }
    s:      { size: 14, weight: 400, lineHeight: 1.43, use: "Dense UI text / small button (S)" }
    xs:     { size: 12, weight: 400, lineHeight: 1.33, use: "Caption, small button label (XS)" }
    xxs:    { size: 11, weight: 400, lineHeight: 1.45, use: "Fine print, smallest label (XXS)" }
  spacing: { xxs: 4, xs: 8, sm: 12, base: 16, md: 24, lg: 32, xl: 48, xxl: 64 }
  rounded: { sm: 4, pill: 20, full: 9999 }
  shadow:
    flat: "none"
    level1: "rgba(0,0,0,0.12) 0px -0.1px 1px 0px, rgba(0,0,0,0.12) 0px 1px 2px 0px"
    level2: "rgba(0,0,0,0.12) 0px 0px 4px 0px, rgba(0,0,0,0.12) 0px 4px 6px -2px"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: "4px", height: "40px", font: "16px / 400 Open Sans", shadow: "level1", use: "Neutral pepper primary action (保存); brand flavor overwrites bg" }
    button-outline: { type: button, bg: "#ffffff", fg: "#585c63", border: "1px solid #585c63", radius: "4px", height: "40px", font: "16px / 400 Open Sans", use: "Secondary/outlined action on neutral flavor" }
    button-pill: { type: button, bg: "#000000", fg: "#ffffff", radius: "20px", height: "32px", font: "16px / 400 Open Sans", use: "Rounded pill button variant (icon / compact)" }
    button-small: { type: button, bg: "#000000", fg: "#ffffff", radius: "4px", height: "24px", font: "12px / 400 Open Sans", use: "Small (XS) button size" }
    textfield: { type: input, bg: "#ffffff", fg: "#393c41", radius: "4px", padding: "8px 16px", height: "40px", font: "16px / 400 Open Sans", use: "Default Textfield; border drawn via inset, focus blue #1f7ccc" }
    textfield-filled: { type: input, bg: "#edeef0", fg: "#393c41", radius: "4px 4px 0px 0px", padding: "8px 16px", height: "40px", font: "16px / 400 Open Sans", use: "Filled / underline Textfield variant" }
    card: { type: card, bg: "#ffffff", radius: "4px", shadow: "level1", use: "Elevated content card, 1px #dee0e3 hairline option" }
    nav-link: { type: tab, fg: "#585c63", font: "16px / 400 Open Sans", radius: "4px", active: "text #393c41 weight 700", use: "Top App Bar / sidebar nav item" }
    badge-positive: { type: badge, bg: "#30f4c5", fg: "#0e7365", radius: "4px", font: "14px / 400 Open Sans", use: "Brand mint status pill (e.g. 無料診断中)" }
    badge-negative: { type: badge, bg: "#cc1f24", fg: "#ffffff", radius: "4px", font: "12px / 400 Open Sans", use: "Negative / error intention badge" }
    avatar: { type: avatar, radius: "9999px", use: "Circular user avatar (Avatar component)" }
  components_harvested: true
---

# Design System Inspiration of GMO Pepabo (Inhouse)

## 1. Visual Theme & Atmosphere

GMO Pepabo's Inhouse is one of the few openly published Japanese design systems, and its defining trait is **deliberate neutrality**. Inhouse is not a single visual identity — it is a generic, trend-resistant *prototype* engineered to be overwritten. The brand-swappable layer is called a **Flavor**: a collection of design tokens (Color, Sizing, Icon, Typography, Elevation) that any Pepabo service (minne, SUZURI, hosting/lolipop, color me shop) can swap in to repaint the same components in its own identity. Inhouse itself ships a base "pepper" flavor that is intentionally restrained — near-black ink (`#393c41`) on a clean white canvas (`#ffffff`), with grey scaffolding — so that nothing in the foundation fights a brand's chosen palette.

The token architecture is **two-tier**: primitive value tokens hold raw values (`get-primitive-color($name: blue, $level: 600)` → `#1f7ccc`), and semantic tokens assign meaning by *intention* — Neutral (Pepper Gray), Informative/interactive (Pepper Blue), Positive (Pepper Green), Notice (Pepper Yellow), Negative (Pepper Red), Attention (Pepper Orange). The "Pepper" primitive ramps run from 50 to 900 in even steps, giving a calm, evenly-spaced palette rather than a few hand-picked brand hues. The single saturated color a designer reaches for most is **Pepper Blue 600 (`#1f7ccc`)** — the informative/interactive intention that paints links, focus rings, and primary affordances; live corporate surfaces resolve interactive text slightly deeper at `#0a62ad` / `#005bac`.

The typography is unmistakably Japanese-product: the stack is **`YakuHanJP`, `Noto Sans JP`, `Open Sans`** — Latin set in Open Sans, Japanese in Noto Sans JP, with YakuHanJP layered on top purely to kern Japanese punctuation. The scale is a tight 8-step ladder (XXS 11px → XXXL 32px) with a 16px (M) baseline, and line-heights snap to a **4px vertical grid** in three densities (comfort / normal / dense). Geometry is conservative: a 4px corner radius is the workhorse on buttons, inputs, and cards, with a 20px pill and full-round only for specific variants. Elevation is restrained too — a two-level shadow scale (`rgba(0,0,0,0.12)` soft 1px lift, then a 4–6px float), with most surfaces sitting flat. The corporate `pepabo.com` site dramatizes this with a stark black hero ("人類のアウトプットを増やす" / "Increase humanity's output") and a signature mint accent (`#30f4c5`), but the underlying components are pure neutral Inhouse.

**Key Characteristics:**
- Neutral multi-brand prototype — a "convenient constraint" meant to be overwritten by per-brand **Flavors**
- Two-tier tokens: primitive `get-primitive-color($name, $level)` → semantic `get-semantic-color($intention, $level)`
- Intention-based color: Informative `#1f7ccc`, Positive `#1dc487`, Notice `#debf43`, Negative `#cc1f24`, Attention `#db7d42`
- Japanese-first font stack: `YakuHanJP` + `Noto Sans JP` + `Open Sans`, Roboto Mono for code
- 8-step type ladder XXS 11px → XXXL 32px, 16px baseline, line-heights on a 4px grid (comfort/normal/dense)
- Near-black ink (`#393c41`) for text instead of pure black — calm, neutral, accessible
- Conservative 4px radius workhorse; 20px pill + full-round only as variants
- Two-level elevation (`rgba(0,0,0,0.12)`) over a mostly-flat surface model
- Brand mint `#30f4c5` as the pepabo flavor key accent

## 2. Color Palette & Roles

### Primary / Interactive (Pepper Blue — Informative)
- **Pepper Blue 600** (`#1f7ccc`): Primary interactive color and the system's informative intention — links, focus, primary affordances.
- **Pepper Blue Strong** (`#0a62ad`): Deeper interactive blue used for nav links and hovered states on live surfaces.
- **Pepper Blue Bright** (`#3e93de`): Lighter blue (Pepper Blue 500) for accents, illustration, and hover backgrounds.
- **Link** (`#005bac`): The resolved anchor color on the corporate site — a slightly desaturated interactive blue.

### Neutral Ink & Surface (Pepper Gray)
- **Ink** (`#393c41`): Pepper Gray 800 — primary text and heading color across all live surfaces. Near-black, never pure black.
- **Ink Strong** (`#1f2124`): Pepper Gray 900 — maximum-contrast text.
- **Body** (`#585c63`): Pepper Gray 700 — secondary text, nav labels, outlined-button text.
- **Muted** (`#767b85`): Pepper Gray 600 — captions, metadata, tertiary text.
- **Faint** (`#9297a1`): Pepper Gray 500 — disabled / lowest-emphasis labels.
- **Hairline** (`#dee0e3`): Pepper Gray 300 — borders, dividers, card outlines.
- **Surface** (`#edeef0`): Pepper Gray 200 — filled inputs, tinted blocks.
- **Surface Soft** (`#f7f8fa`): Pepper Gray 100 — the softest section tint.
- **Canvas** (`#ffffff`): Page background, white cards, text on color/dark.
- **Ink Black** (`#000000`): The neutral pepper button fill and the corporate hero canvas — a deliberate full-black, designed to be overwritten by a brand Flavor.

### Semantic Intentions
- **Positive** (`#1dc487`): Pepper Green 600 — success states, confirmations.
- **Notice** (`#debf43`): Pepper Yellow 500 — warnings, caution.
- **Negative** (`#cc1f24`): Pepper Red 600 — errors, destructive intent.
- **Negative Strong** (`#b50b11`): Pepper Red 700 — pressed/emphasized negative.
- **Attention** (`#db7d42`): Pepper Orange 500 — attention/highlight intent.

### Brand Accent (pepabo Flavor)
- **Brand Mint** (`#30f4c5`): The pepabo flavor key accent — the bright mint on brand badges and highlight chips (e.g. the "無料診断中" pill).
- **Brand Mint Deep** (`#0e7365`): The deep teal companion used for mint-on-light text and emphasis.
- **On Primary** (`#ffffff`): Text/icons on filled color and black buttons.

## 3. Typography Rules

### Font Family
- **Latin**: `Open Sans` — the default sans for Latin glyphs.
- **Japanese**: `Noto Sans JP` — the CJK companion carrying all Japanese text.
- **Kerning layer**: `YakuHanJP` — loaded specifically to kern Japanese punctuation (約物), stacked ahead of Noto Sans JP.
- **Monospace**: `Roboto Mono` — code and technical labels.
- **Full stack (live)**: `"Open Sans", "Noto Sans JP", apple-system, "system-ui", Roboto, "Lucida Grande", Helvetica, Arial, sans-serif` (YakuHanJP prepended where punctuation kerning is enabled).

### Hierarchy

| Token | Font | Size | Weight | Line Height (normal) | Notes |
|------|------|------|--------|-------------|-------|
| XXXL | Open Sans / Noto Sans JP | 32px | 700 | 40px (1.25) | Largest display heading |
| XXL | Open Sans / Noto Sans JP | 28px | 700 | 36px (1.29) | Page / section heading |
| XL | Open Sans / Noto Sans JP | 24px | 700 | 32px (1.33) | Subsection heading |
| L | Open Sans / Noto Sans JP | 21px | 700 | 24px (1.14) | Card / brand title (live H1 = 21px/700) |
| M (baseline) | Open Sans / Noto Sans JP | 16px | 400 | 24px (1.50) | Body baseline; densities 28/24/20px |
| S | Open Sans / Noto Sans JP | 14px | 400 | 20px (1.43) | Dense UI text, small button |
| XS | Open Sans / Noto Sans JP | 12px | 400 | 16px (1.33) | Caption, small button label |
| XXS | Open Sans / Noto Sans JP | 11px | 400 | 16px (1.45) | Fine print, smallest label |

### Principles
- **Sass functions, not named roles**: type is accessed via `get-font-size($level)` / `get-line-height($level, $density)` and a `text()` mixin — the system names sizes XXS–XXXL, never "Heading 1".
- **4px-grid line-heights**: every line-height resolves to a multiple of 4px, in three densities (comfort / normal / dense), so vertical rhythm stays aligned regardless of size.
- **Japanese-first kerning**: YakuHanJP is layered solely to tighten Japanese punctuation; the system treats Japanese legibility as a first-class concern (typography-first is a stated principle).
- **16px baseline**: M = 16px is the document default and the reading size; headings step up to 700 weight, body stays 400.

## 4. Component Stylings

### Buttons

**Primary (neutral pepper)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Height: 40px
- Font: 16px Open Sans weight 400
- Shadow: `rgba(0,0,0,0.12) 0px -0.1px 1px 0px, rgba(0,0,0,0.12) 0px 1px 2px 0px`
- Use: Primary action ("保存" / Save) on the neutral base flavor — a brand Flavor overwrites the fill with its own key color

**Outlined / Secondary**
- Background: `#ffffff`
- Text: `#585c63`
- Border: 1px solid `#585c63`
- Radius: 4px
- Height: 40px
- Font: 16px Open Sans weight 400
- Use: Secondary action; a heavier variant uses a 2px border

**Pill**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 20px
- Height: 32px
- Font: 16px Open Sans weight 400
- Use: Rounded pill button (compact / icon-led actions, e.g. corporate-site SNS chips)

**Small (XS size)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Height: 24px
- Font: 12px Open Sans weight 400
- Use: Smallest button size; the medium (S) size is 32px height / 14px

Size scale (height / font): Small 24px / 12px · Medium 32px / 14px · Large 40px / 16px.

### Inputs & Forms

**Textfield (default)**
- Background: `#ffffff`
- Text: `#393c41`
- Radius: 4px
- Padding: 8px 16px
- Height: 40px
- Font: 16px Open Sans weight 400
- Focus: `#1f7ccc` interactive blue ring
- Use: Default text input; hairline rendered via inset border on `#dee0e3`

**Textfield (filled / underline)**
- Background: `#edeef0`
- Text: `#393c41`
- Radius: 4px 4px 0px 0px
- Padding: 8px 16px
- Height: 40px
- Font: 16px Open Sans weight 400
- Use: Filled variant with a bottom-underline affordance

Size scale (height / font / padding): Small 32px / 14px / 4px 12px · Medium 40px / 16px / 8px 16px · Large 48px / 18px / 10px 24px.

### Cards & Containers

**Elevated Card**
- Background: `#ffffff`
- Radius: 4px
- Shadow: `rgba(0,0,0,0.12) 0px -0.1px 1px 0px, rgba(0,0,0,0.12) 0px 1px 2px 0px`
- Use: Standard content card at elevation level 1

**Hairline Card**
- Background: `#ffffff`
- Border: 1px solid `#dee0e3`
- Radius: 4px
- Use: Flat card separated by a hairline rather than elevation

### Badges

**Brand Mint Pill**
- Background: `#30f4c5`
- Text: `#0e7365`
- Radius: 4px
- Font: 14px Open Sans weight 400
- Use: pepabo-flavor highlight pill (e.g. "無料診断中")

**Negative Badge**
- Background: `#cc1f24`
- Text: `#ffffff`
- Radius: 4px
- Font: 12px Open Sans weight 400
- Use: Error / negative-intention status badge

### Navigation (App Bar)
- Background: `#ffffff`
- Text: `#585c63`
- Active: `#393c41` text at weight 700
- Font: 16px Open Sans weight 400
- Radius: 4px on hover target
- Use: Top App Bar / sidebar nav items (Foundation, Inhouse, Components…)

### Avatar
- Radius: 9999px (circular)
- Use: Circular user avatar (Avatar component)

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 5 surfaces)
**Tier 1 sources:** https://design.pepabo.com/inhouse/, https://design.pepabo.com/inhouse/flavors/color/, https://design.pepabo.com/inhouse/components/button/, https://design.pepabo.com/inhouse/components/textfield/, https://pepabo.com/
**Tier 2 sources:** getdesign.md/pepabo — 404 (no Pepabo entry); styles.refero.design/?q=pepabo — no brand-specific match (generic gallery only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px (sizing tokens are 4px-grid aligned)
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: input/button padding lands on 8px/16px; line-heights snap to the same 4px grid for type-to-layout alignment

### Grid & Container
- Documentation chrome: a fixed left sidebar nav (App Bar) + centered prose column on `design.pepabo.com`
- Components demonstrated in neutral cards on a white canvas so the base flavor never competes with content
- Corporate `pepabo.com`: full-bleed black hero band, then white content sections with the mint accent

### Whitespace Philosophy
- **Calm neutrality**: the base flavor is intentionally quiet so brands can layer identity on top — whitespace carries structure, not decoration.
- **Grid-locked rhythm**: 4px sizing grid + 4px-multiple line-heights keep vertical rhythm consistent across densities.
- **Density options**: comfort / normal / dense line-heights let the same component breathe or compact depending on context.

### Border Radius Scale
- Small (4px): buttons, inputs, cards — the workhorse
- Pill (20px): rounded pill button variant
- Full (9999px): avatars, full-round chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | `none` | Most surfaces, inline content |
| Level 1 | `rgba(0,0,0,0.12) 0px -0.1px 1px 0px, rgba(0,0,0,0.12) 0px 1px 2px 0px` | Buttons, resting cards — soft 1px lift |
| Level 2 | `rgba(0,0,0,0.12) 0px 0px 4px 0px, rgba(0,0,0,0.12) 0px 4px 6px -2px` | Raised cards, menus, popovers |

**Shadow Philosophy**: Inhouse keeps elevation deliberately shallow. The elevation flavor exposes a small set of `get-elevation-box-shadow($level)` tokens built on a uniform `rgba(0,0,0,0.12)` tint, so shadows read as a gentle, neutral lift rather than dramatic depth. A faint `-0.1px` top offset on level 1 gives buttons a barely-there top edge. Because the system is brand-neutral, shadows stay achromatic (pure black at low alpha) — any chromatic depth is a brand Flavor's choice, never baked into the foundation. Most surfaces sit flat; elevation is reserved for genuinely floating UI.

## 7. Do's and Don'ts

### Do
- Treat Inhouse as a neutral prototype — layer brand identity through a Flavor, not by hacking the base
- Use the two-tier tokens: primitive `get-primitive-color($name, $level)` then semantic `get-semantic-color($intention, $level)`
- Use Pepper Blue 600 (`#1f7ccc`) for interactive/informative affordances
- Map status to intentions: Positive `#1dc487`, Notice `#debf43`, Negative `#cc1f24`, Attention `#db7d42`
- Set the font stack `YakuHanJP`, `Noto Sans JP`, `Open Sans` and load YakuHanJP for Japanese punctuation kerning
- Keep line-heights on the 4px grid; pick a density (comfort/normal/dense) per context
- Use near-black ink (`#393c41`) for text instead of pure black
- Keep the 4px radius as the default; reserve 20px pill and full-round for specific variants

### Don't
- Bake a single brand's color into the foundation — Inhouse must stay generic so every brand can overwrite it
- Reach for raw hex in product code — go through the primitive/semantic token functions
- Use pure black (`#000000`) for body text — that fill is the neutral base meant to be re-flavored
- Break the 4px grid with off-grid line-heights or spacing
- Add heavy chromatic shadows to the base — elevation is shallow and achromatic by design
- Spread the brand mint (`#30f4c5`) across the UI — it is a per-flavor key accent, not a general surface color
- Use a Latin-only font stack for Japanese text — Noto Sans JP + YakuHanJP carry CJK
- Treat the system as a rulebook — it is an enabler ("a convenient constraint"), not an enforcer

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, sidebar nav collapses to a top App Bar / drawer |
| Tablet | 768-1024px | Moderate padding, 2-up component grids |
| Desktop | >1024px | Fixed left sidebar + centered content column |

### Touch Targets
- Medium controls at 40px height (button / textfield) meet comfortable tap sizing
- Small (24px) and S (32px) sizes reserved for dense, pointer-led contexts
- App Bar items at ~40–48px row height

### Collapsing Strategy
- Documentation sidebar (Foundation / Inhouse / Components) collapses into a drawer on mobile
- Component demos reflow from multi-column grids to single column
- Type scale steps down with viewport but stays on the 4px grid
- Corporate black hero maintains full-bleed treatment, reduces internal padding

### Image Behavior
- Icons come from the Icon flavor (swappable per brand), rendered as inline SVG
- Avatars stay circular (9999px) at all sizes
- Cards keep the 4px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Interactive / primary: Pepper Blue 600 (`#1f7ccc`); strong link `#0a62ad` / `#005bac`
- Ink / heading: `#393c41` (near-black)
- Body: `#585c63`; muted `#767b85`; faint `#9297a1`
- Surface: `#edeef0`; soft `#f7f8fa`; hairline `#dee0e3`
- Background: `#ffffff`
- Positive `#1dc487` · Notice `#debf43` · Negative `#cc1f24` · Attention `#db7d42`
- Brand mint accent: `#30f4c5` (deep `#0e7365`)

### Example Component Prompts
- "Create a neutral Inhouse button: black `#000000` background, white text, 4px radius, 40px height, 16px Open Sans/Noto Sans JP. Shadow rgba(0,0,0,0.12) 0px 1px 2px. Note this is the base flavor — a brand can re-color the fill."
- "Design a Textfield: white `#ffffff` background, `#393c41` text, 4px radius, 8px 16px padding, 40px height, 1px `#dee0e3` hairline, focus ring `#1f7ccc`. Sizes 32/40/48px."
- "Build an interactive link/affordance in Pepper Blue 600 `#1f7ccc`; use `#0a62ad` for hover. Body text `#585c63`, headings `#393c41` at weight 700."
- "Create a status badge set by intention: Positive `#1dc487`, Notice `#debf43`, Negative `#cc1f24` (white text), Attention `#db7d42`. 4px radius, 12–14px label."
- "Set typography: stack `YakuHanJP, Noto Sans JP, Open Sans`. Heading XL 24px/700, body M 16px/400 with 24px line-height (4px grid), caption XS 12px."

### Iteration Guide
1. Start from the neutral base flavor; apply brand color via the Flavor layer, never by editing the foundation
2. Use the token functions — primitive then semantic intention — instead of raw hex
3. Interactive blue is `#1f7ccc`; ink is `#393c41`; never pure black for text
4. Keep line-heights on the 4px grid; choose comfort/normal/dense per density need
5. 4px radius is default; 20px pill and 9999px full are explicit variants
6. Elevation is shallow and achromatic (`rgba(0,0,0,0.12)`) — flat for most surfaces
7. Always include `Noto Sans JP` (+ YakuHanJP) for Japanese; Open Sans for Latin

---

## 10. Voice & Tone

Inhouse's voice — visible in its own documentation and engineering writing — is **collegial, pragmatic, and quietly principled**. It frames the design system as a teammate's tool, not a corporate mandate: the foundation is described as "a convenient constraint" (便利な制約) and an *enabler, not an enforcer*. Copy is plain, technical when it needs to be (Sass function signatures shown inline), and humble about trade-offs. The corporate mission line "人類のアウトプットを増やす" ("Increase humanity's output") sets the register: ambitious in scope, plainly stated, never hyped.

| Context | Tone |
|---|---|
| Design-system docs | Collegial and instructive. Explains the *why* (neutral prototype) before the *how* (token functions). |
| Engineering blog (tech.pepabo.com) | Peer-to-peer, candid about trade-offs and iteration; shares reasoning openly. |
| Component reference | Terse, factual: token name, value, usage. No marketing. |
| Corporate / mission | Declarative and broad. "人類のアウトプットを増やす." Confident, not boastful. |
| Brand surfaces (minne/SUZURI) | Warm, maker-friendly, creator-celebrating — the flavor layer carries this, not Inhouse itself. |

**Voice samples (verbatim from live surfaces):**
- "人類のアウトプットを増やす" — corporate mission, pepabo.com hero. *(verified live 2026-06-17)*
- "Inhouse" / "Foundation" / "Flavors" / "Components" — the documentation's own structural vocabulary. *(verified live 2026-06-17, design.pepabo.com nav)*
- "get-primitive-color($name, $level)" / "get-semantic-color($intention, $level)" — the token API shown inline as the canonical access pattern. *(verified live 2026-06-17, color flavor page)*

**Forbidden register**: rigid rule-enforcement language, hype/superlatives, brand-specific color baked into neutral foundation copy, jargon left unexplained to non-designers on the engineering blog.

## 11. Brand Narrative

GMO Pepabo (GMOペパボ株式会社), founded in **2003** in Fukuoka and headquartered in Tokyo as part of the GMO Internet Group, runs a portfolio of **creator and commerce services** — the handmade marketplace **minne**, the print-on-demand platform **SUZURI**, rental hosting (**lolipop!**, **ヘテムル**), domains (**ムームードメイン**), and the EC builder **カラーミーショップ**. Across that portfolio sat a recurring problem: every service rebuilt the same foundational UI from scratch, duplicating effort and drifting apart visually.

Inhouse is Pepabo's answer. Publicly documented since **2021** (announced on the Pepabo Tech Portal, "ペパボのデザインシステムのドキュメントを公開します"), it consolidates the duplicated foundation into one shared, generalizable system — and crucially, makes it **multi-brand by construction**. Rather than impose one look, Inhouse stays a neutral prototype and exposes brand-swappable **Flavors** (Color, Sizing, Icon, Typography, Elevation) so minne and SUZURI can wear their own identities over identical, accessible components. The stated motivation is to free designers from foundational busywork so they can focus on differentiated, strategic design.

What Inhouse refuses, visible in its design: a single imposed brand identity (the foundation is deliberately generic and trend-resistant), and rigid rule-enforcement (it positions itself as an *enabler*, a "convenient constraint," not a gatekeeper). What it embraces: a two-tier token system that keeps the core neutral while semantics carry meaning, Japanese-first typography (Noto Sans JP + YakuHanJP), a strict 4px grid, and "environmental honesty" — design that adapts naturally to the user's OS, browser, and media rather than fighting it.

## 12. Principles

*Stated Inhouse principles, paraphrased from the published "About" documentation.*

1. **Enabler, not enforcer.** Inhouse is "a convenient constraint" that frees creativity rather than policing it. *UI implication:* offer sensible defaults and tokens, but let services extend and override; never hard-block a valid brand need.
2. **A living system.** The system is continuously updated as services push new use cases back into it. *UI implication:* treat components as evolving; design for extension points, not frozen specs.
3. **Neutral prototype.** Deliberately generic and trend-resistant so any brand can customize it. *UI implication:* keep the base flavor achromatic and quiet; carry brand color only through the Flavor layer.
4. **Typography-first.** Text drives communication and accessibility. *UI implication:* invest in the type scale and 4px-grid line-heights (Japanese-first); let typography, not decoration, structure the page.
5. **Environmental honesty.** Design adapts naturally to OS, browser, and media. *UI implication:* respect platform conventions and system fonts in the fallback stack; don't override what the environment does well.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Inhouse user segments (Pepabo product designers and engineers building across multiple service brands), not individual people.*

**佐藤 美咲, 32, 福岡.** A product designer on minne. Reaches for Inhouse components so she can spend her time on minne's maker-celebrating identity instead of rebuilding buttons. Values that the minne Flavor repaints the same accessible components without forking them.

**田中 健, 29, 東京.** A front-end engineer on SUZURI. Uses the `@pepabo-inhouse` packages and Sass token functions directly; cares that `get-semantic-color($intention)` stays stable so SUZURI's theme survives upgrades. Appreciates that the system is an enabler, not a wall.

**山本 涼, 38, 東京.** A design-systems lead maintaining Inhouse itself. Guards the neutrality of the base flavor — pushes back on any PR that bakes a single brand's hue into the foundation. Reads the engineering blog culture of candid trade-off discussion as the team's real spec.

## 14. States

| State | Treatment |
|---|---|
| **Empty (list / collection)** | White canvas, single near-black `#393c41` line explaining there is nothing yet, with one interactive `#1f7ccc` action. Calm, no clutter. |
| **Empty (search, no results)** | Muted `#767b85` single line stating no matches; the query/filters stay visible above so the user can adjust scope. |
| **Loading (content fetch)** | Skeleton blocks on `#edeef0` surface at final dimensions, 4px radius. Shallow/flat pulse consistent with the low-elevation system. |
| **Loading (in-place refresh)** | Thin `#1f7ccc` interactive-blue progress indicator; previous content stays visible. |
| **Error (request failed)** | Negative intention: `#cc1f24` accent with a plain-language explanation and a retry — states what to do next, not just that something broke. |
| **Error (form validation)** | Field-level message below the Textfield in the negative tone; describes what is valid, not only "必須". |
| **Success (saved / submitted)** | Positive intention `#1dc487`; brief inline confirmation, next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#edeef0` blocks at final dimensions, 4px radius, flat pulse (shallow elevation). |
| **Disabled** | Faint `#9297a1` text on a reduced-emphasis surface; interactive controls fade rather than change hue, preserving the token read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, button press |
| `motion-standard` | 200ms | Menu, popover, card/section reveal |
| `motion-slow` | 320ms | Page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — menus, sheets, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained, matching the shallow-elevation, neutral aesthetic — a system meant to disappear behind each brand's identity should not impose a strong motion personality. Elevation changes (level 1 → 2) pair with a brief `motion-standard / ease-enter` lift; interactive controls respond to press with a subtle opacity/scale shift. No bounce or spring in the foundation — any expressive motion is a brand Flavor's choice. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the UI stays fully functional (environmental honesty).

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle on 5 surfaces:
- https://design.pepabo.com/inhouse/ — DS home: font stack "Open Sans","Noto Sans JP",apple-system,...; nav text rgb(57,60,65)=#393c41 / rgb(88,92,99)=#585c63; link rgb(10,98,173)=#0a62ad; H1 21px/700
- https://design.pepabo.com/inhouse/flavors/color/ — Pepper primitive ramps captured from rendered SVG swatches: gray f7f8fa..1f2124, blue f5faff..002647 (600=#1f7ccc), green f5fffb..003d27 (600=#1dc487), yellow ..debf43.., red fffafa..540003 (600=#cc1f24, 700=#b50b11), orange ..db7d42.. ; token API get-primitive-color / get-semantic-color / get-implication-color
- https://design.pepabo.com/inhouse/components/button/ — primary btn bg #000000 / fg #ffffff / radius 4px / h 40px / shadow rgba(0,0,0,0.12) 0px 1px 2px; outlined #585c63 border/text; pill radius 20px h32; sizes 24/32/40px (12/14/16px)
- https://design.pepabo.com/inhouse/components/textfield/ — input bg #ffffff (filled #edeef0) / text #393c41 / radius 4px / padding 8px 16px / h 40px; sizes 32/40/48px
- https://design.pepabo.com/inhouse/flavors/elevation/ — level1 rgba(0,0,0,0.12) 0px -0.1px 1px, 0px 1px 2px; level2 0px 0px 4px, 0px 4px 6px -2px
- https://pepabo.com/ — corporate: body text #393c41 (×640), link #005bac/#0a62ad/#1f7acc, brand mint #30f4c5/#0e7365, hero H2 "人類のアウトプットを増やす" white on black canvas

Token-level claims (§1-9) are sourced from this live inspection plus the published flavor docs.

Voice samples (§10) are verbatim from live surfaces (corporate hero mission, DS nav vocabulary, token function signatures).

Brand narrative (§11): GMO Pepabo founded 2003 (GMO Internet Group), services minne/SUZURI/lolipop/
ムームードメイン/カラーミーショップ; Inhouse documentation publicly opened 2021 (tech.pepabo.com
"ペパボのデザインシステムのドキュメントを公開します"). These are publicly documented facts; specific
details beyond the live docs are general public knowledge, not directly quoted Pepabo statements.

Principles (§12) paraphrase the published Inhouse "About" page (enabler-not-enforcer / living system /
neutral prototype / typography-first / environmental honesty).

Personas (§13) are fictional archetypes informed by publicly observable Inhouse user segments (Pepabo
product designers and engineers). Names are illustrative; they do not refer to real people.

Motion tokens (§15) are illustrative conventions consistent with the system's shallow-elevation,
neutral aesthetic; the public docs expose elevation tokens but not a published duration/easing scale,
so these are editorial defaults, not directly sourced Inhouse motion tokens.

Interpretive claims (e.g., "neutral so brands can overwrite it", "elevation stays achromatic by design")
are editorial readings connecting Inhouse's observed design and stated principles to its multi-brand goal.
-->

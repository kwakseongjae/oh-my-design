---
name: Moreh
colors:
  primary: '#ff5700'
  on-primary: '#ffffff'
  primary-hover: '#f34600'
  ink: '#050403'
  canvas: '#ffffff'
  inverse: '#050403'
  footer: '#1c1a18'
  on-inverse: '#f8f7f4'
  on-inverse-muted: '#a09e9a'
  muted: '#65635f'
  subtle: '#888682'
  link: '#dd4300'
  link-on-dark: '#ff793e'
  hairline: '#dfdeda'
  outline: '#d2d1cd'
  inverse-border: '#2a2926'
typography:
  display-hero:
    fontSize: 93.6px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: '-3.744px'
    use: 'Home hero headline (h1.text-display-lg), #f8f7f4 on the #050403 band, English and Korean editions'
  display:
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: '-2.52px'
    use: Product hero title on the MoAI Inference Framework page (h1.hero-title)
  section:
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: '-1px'
    use: Section titles (h2.sh-title)
  lead:
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.33
    use: Subtitle under the product hero (p.text-2xl)
  card-title:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: '-0.18px'
    use: Feature-card headings (h3.fc-title); news-row titles use the same size on a 25.2px line
  body-lg:
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
    use: Hero sub-copy (p.text-body-lg)
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Page body
  section-desc:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    use: Descriptions under section titles (p.sh-desc)
  card-desc:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    use: Feature-card descriptions (p.fc-desc)
  nav:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Header menu
  button:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    use: Primary and ghost action labels
  small:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
    use: News summaries and footer links (text-body-sm); inline links use 13px at 500
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    use: Footer copyright line (text-caption)
  eyebrow:
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: 1.32px
    use: Uppercase JetBrains Mono eyebrows (p.mono-eyebrow)
  mono-label:
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 1.32px
    use: Uppercase JetBrains Mono footer pills
rounded:
  none: 0px
  sm: 6px
spacing:
  button-x: 18
  card: 28
  row-y: 24
  nav-y: 8
  pill-y: 6
  pill-x: 12
components:
  primary-button:
    type: button
    backgroundColor: '#ff5700'
    textColor: '#ffffff'
    border: 1px solid transparent
    rounded: 6px
    padding: 0px 18px
    height: 40px
    typography: 14px / 500 / 21px Inter
    hover: 'bg #f34600; the arrow shifts 2px right (settled probe frame after a 120ms transition)'
    pressed: 'bg #f34600, the same settled frame as hover (probe)'
    use: Request Demo on moreh.io and the MoAI Inference Framework page, and the same action on moreh.io/ko/ (captures 8 on all three pages)
    focus: outline oklch(0.7 0.2 40 / 0.35) solid 2px on :focus-visible
  ghost-on-dark-button:
    type: button
    backgroundColor: transparent
    textColor: '#f8f7f4'
    border: 1px solid rgba(255, 255, 255, 0.25)
    rounded: 6px
    padding: 0px 18px
    height: 40px
    typography: 14px / 500 / 21px Inter
    hover: bg rgba(255, 255, 255, 0.06), border 1px solid rgba(255, 255, 255, 0.4) (settled probe frame)
    pressed: the same values as hover (probe)
    use: View Benchmarks beside the primary action on the home hero band
  ghost-button:
    type: button
    backgroundColor: transparent
    textColor: '#050403'
    border: '1px solid #d2d1cd'
    rounded: 6px
    padding: 0px 18px
    height: 40px
    typography: 14px / 500 / 21px Inter
    states: rest only; the bundle hover and pressed frames were mid-transition, so no state is declared
    use: Secondary action beside the primary on the MoAI Inference Framework hero
  text-link:
    type: button
    textColor: '#dd4300'
    typography: 13px / 500 / 20.15px Inter
    states: rest only; no settled state frame
    use: Inline arrow links on white (four on each home, plus a 14px / 500 variant)
  text-link-on-dark:
    type: button
    textColor: '#ff793e'
    typography: 14px / 500 / 21px Inter
    states: rest only
    use: Inline link in the dark section of the MoAI Inference Framework page
  nav-trigger:
    type: button
    backgroundColor: transparent
    textColor: '#050403'
    padding: 8px 0px
    height: 37px
    typography: 14px / 400 / 21px Inter
    states: rest only; bundle frames drift by one colour unit, which is not a design value
    use: 'Header menu: Products, Solutions, Performance, Resources, Careers, Company'
  language-switcher:
    type: button
    backgroundColor: transparent
    textColor: '#65635f'
    padding: 8px 0px
    height: 36px
    typography: 13px / 400 / 19.5px Inter
    states: rest only
    use: Language switcher at the right of the header (EN on moreh.io, KO on moreh.io/ko/)
  feature-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px solid #dfdeda'
    rounded: 6px
    padding: 28px
    width: 348px
    states: rest; the linked cards on the Inference Framework page start a border and shadow transition on hover, but no settled frame was captured, so the hover is unmeasured
    use: Feature cards, three to a row, on all three pages
  news-row:
    type: card
    border: 'bottom 1px solid #dfdeda'
    padding: 24px 0px
    width: 1076px
    use: 'Newsroom and blog rows on the home: 18px / 600 title, 13px #65635f summary'
  footer-pill:
    type: badge
    backgroundColor: transparent
    textColor: '#a09e9a'
    border: '1px solid #2a2926'
    rounded: 6px
    padding: 6px 12px
    height: 31px
    typography: 11px / 400 / 16.5px JetBrains Mono, uppercase, letter-spacing 1.32px
    hover: 'fg #f8f7f4 (settled probe frame after a 150ms transition)'
    use: 'Privacy Policy and Terms of Use on the #1c1a18 footer'
fonts:
  roles:
    sans: Inter
    mono: JetBrains Mono
---

# Design System Inspiration of Moreh

## Overview

### Visual Theme & Atmosphere

Moreh (모레) is an AI-infrastructure software company founded in September 2020. Its About page names the problem it works on: running AI at scale means solving parallelization, disaggregation, cluster scheduling and hardware optimization before a single token is generated, and most of the software that does this is locked to one GPU vendor. Moreh builds the layer that turns heterogeneous accelerators — AMD, NVIDIA and Tenstorrent — into unified, high-performance inference clusters, "so that any organization can run frontier models on the hardware they already have." Its own timeline traces how it got here: a public AI cloud on AMD GPUs with KT Cloud (2021), a $22M Series B from AMD, KT and others (2023), the MoMo-72B model at the top of Hugging Face's Open LLM Leaderboard (2024), a strategic partnership with Tenstorrent (2024), the model-and-cloud subsidiary Motif Technologies (2025), and selection as one of four consortia in the Korean government's sovereign AI foundation model project (2026). The site now leads with "Inference Software for Every Chip" and the MoAI line: MoAI Inference Framework, MoAI Performance Gateway, MoAI Fabric, and Moreh vLLM for AMD and for Tenstorrent.

The captured pages — moreh.io, its Korean edition moreh.io/ko/ and the MoAI Inference Framework page — read like an engineering document with one signal colour. Text is a warm near-black, `#050403`, on white `#ffffff`. The home opens on a `#050403` hero band with `#f8f7f4` type and closes on a charcoal `#1c1a18` footer. The only saturated fill on any page is a safety orange, `#ff5700`, on the primary action (Request Demo, or its Korean equivalent), and a burnt orange, `#dd4300`, carries the inline links on white. Every action, card and pill shares one 6px radius; cards are white with a `1px #dfdeda` hairline and no shadow.

Type is Inter, self-hosted through Next.js: weight 600 for headings, with tracking that tightens as the size grows (`-3.744px` at 93.6px, `-1px` at 40px), and 400 or 500 for reading and actions. A second family, JetBrains Mono, sets the small uppercase eyebrows, footer pills and diagram labels at 11px with a wide `1.32px` tracking — the one place where the pages speak in a terminal voice. The site is published in five languages (English, 한국어, 中文, 日本語 and Tiếng Việt) from one set of pages.

**Key Characteristics:**
- One signal colour: `#ff5700` fills the primary action on all three pages; the settled hover deepens it to `#f34600`
- Warm neutrals instead of pure black and cool grey: ink `#050403`, muted `#65635f`, subtle `#888682`, hairline `#dfdeda`
- Dark bands at both ends of the home: a `#050403` hero with a `#f8f7f4` headline, a `#1c1a18` footer with `#a09e9a` links
- Inter 600 display with negative tracking; Inter 400 and 500 for body and actions
- JetBrains Mono at 11px, uppercase, `1.32px` tracking for eyebrows, footer pills and labels
- One 6px radius on actions, cards and pills; flat surfaces with no rest shadows
- Burnt orange `#dd4300` for inline links on white, a lighter `#ff793e` on dark

### Primary tasks

- Request a demo of the inference software
- Compare benchmark numbers before trusting a performance claim
- Read a dense technical report on the engineering blog
- Find which MoAI product covers a given workload

### Brand Narrative

Moreh's About page frames the company around one barrier: the software needed to run AI at scale exists at only a handful of companies, and most of it is tied to a single GPU vendor. Moreh, founded in September 2020, sets out to remove that barrier by making heterogeneous accelerators behave as one cluster. Its timeline shows the thesis being tested in public — a public AI cloud on AMD GPUs with KT Cloud in December 2021; large-scale GPU infrastructure for LLM research delivered to KT Cloud in January 2023; a $22M Series B from AMD, KT and others in August 2023; a Vietnam entity in November 2023; MoMo-72B ranked first on Hugging Face's Open LLM Leaderboard in January 2024; a strategic partnership with Tenstorrent in November 2024; the subsidiary Motif Technologies for model development and cloud service in February 2025; and selection as one of four consortia in the Korean government's sovereign AI foundation model project in February 2026. The same timeline records that Moreh raised its Series A and incorporated a US headquarters entity in February 2021.

The product line carries the thesis: the MoAI Inference Framework (an end-to-end inference stack for heterogeneous accelerators), the MoAI Performance Gateway (workload distribution across them), MoAI Fabric (a software-defined, cross-vendor GPU memory fabric for KV-cache transfer) and drop-in Moreh vLLM builds for AMD and Tenstorrent. The newsroom collects the coverage, from the Korea Economic Daily's report on the leaderboard result to the AMD- and KT-backed Series B.

The design stays out of the way of that argument. A warm, nearly black and white palette, one orange for the next step, flat cards and a mono voice for labels make the site read like documentation rather than a campaign — an editorial reading of the captured pages, not a Moreh statement.

### Principles

1. **Vendor neutrality is the product.** *UI implication:* present AMD, NVIDIA and Tenstorrent as peers; never visually privilege one vendor.
2. **Evidence over claims.** *UI implication:* lead with numbers; the benchmark action sits beside the demo request.
3. **One signal colour.** *UI implication:* `#ff5700` marks the next step and nothing else.
4. **Flat and engineered.** *UI implication:* hairlines and bands instead of shadows; one 6px radius.
5. **Density where it informs.** *UI implication:* dense news rows and technical reports; one title and one grid per marketing section.

### Personas

*Personas below are fictional archetypes informed by publicly observable Moreh user segments (ML-infrastructure engineers, platform leads at GPU-cost-sensitive organisations, non-NVIDIA adopters), not individual people.*

**정현우, 34, 서울.** A platform engineer at a Korean cloud provider standing up an AMD Instinct cluster. Distrusts marketing decks; reads the technical reports line by line and re-runs published benchmarks before trusting a number.

**Aarti Desai, 29, Bangalore.** An MLOps lead at a startup squeezed by GPU supply and cost. Cares about tokens per dollar more than peak FLOPs, and starts from the Inference Cost Optimization page.

**Daniel Kim, 41, Santa Clara.** An infrastructure architect evaluating a multi-vendor accelerator strategy to de-risk supply. Values the heterogeneous-cluster story and reads the site's restraint as engineering seriousness.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from moreh.io, moreh.io/ko/ and moreh.io/inference-framework/. The two band fills and the hover value come from the keyboard-state probe of the same day (`docs/research/2026-09-29-growth/raw/moreh-states-home.json`). The site authors its colours in `oklch()`; the hex values are the computed colours converted to sRGB.

### Primary
- **Moreh Orange** (`#ff5700`): The fill of the primary action — Request Demo on moreh.io and on the MoAI Inference Framework page, and the same action on moreh.io/ko/. It is the primary because it is the only saturated fill the three pages render and it sits on the one action each page asks for. Labels on it are white (`#ffffff`).
- **Orange Hover** (`#f34600`): The settled hover and pressed fill of the same action, read by the probe after its 120ms transition; the arrow in the label also moves 2px to the right.

### Ink & Surface
- **Ink** (`#050403`): Body text, headings and the header menu; the same colour fills the home hero band (`section.hero-dark`, probe ancestor level 4).
- **Canvas** (`#ffffff`): Page background and card fill.
- **Footer Charcoal** (`#1c1a18`): The footer (`footer.bg-n-800`, probe ancestor level 6).
- **On Inverse** (`#f8f7f4`): The hero headline and the ghost action's label on dark; also the footer link colour on hover.

### Text
- **Muted** (`#65635f`): Section descriptions, card descriptions, news summaries, the language switcher and the mono eyebrows on white.
- **Subtle** (`#888682`): A short label in the home's dark feature panel (`text-subtle`).
- **On Inverse Muted** (`#a09e9a`): Hero sub-copy, descriptions on dark, footer links and footer pills.

### Links
- **Link** (`#dd4300`): Inline arrow links on white.
- **Link on Dark** (`#ff793e`): The inline link in the Inference Framework page's dark section (`text-accent-on-dark`).

### Lines
- **Hairline** (`#dfdeda`): The 1px border of feature cards and the bottom rule of news rows.
- **Outline** (`#d2d1cd`): The 1px border of the ghost action on white.
- **Inverse Border** (`#2a2926`): The 1px border of the footer pills.

### Rendered, but not tokens
- The ghost action on dark draws a translucent white border, `rgba(255, 255, 255, 0.25)`; on hover it becomes `rgba(255, 255, 255, 0.4)` over a `rgba(255, 255, 255, 0.06)` fill (probe).
- Text in the home's dark feature panel uses translucent white, `rgba(255, 255, 255, 0.8)` and `rgba(255, 255, 255, 0.85)`.
- The architecture diagram on the Inference Framework page labels three layers in 11px JetBrains Mono: `#6ee7b7`, `#fda4af` and `#c4b5fd`. They colour a diagram, not an interface role.

### Brand assets, not tokens
- The logo (`/assets/moreh-logo.svg`) and favicon were not measured, and no logo colour is a token here.

## Typography

### Font Family
- **Live surface use**: `Inter`, served by Next.js as the self-hosted face `__Inter_f367f3` (seven woff2 files under `moreh.io/_next/static/media/`), 314 observed uses across body, headings, actions, cards and lists. `JetBrains Mono`, served the same way as `__JetBrains_Mono_3c557b` (six woff2 files), 32 observed uses on eyebrows, footer pills and diagram labels.
- **Official distributed font assets**: both families are open-source typefaces whose own repositories carry the SIL Open Font License 1.1 (Inter by Rasmus Andersson; JetBrains Mono by JetBrains). Moreh serves its own copies; it does not use a font CDN.
- **Declared only (no visible use)**: `__Inter_Fallback_f367f3` and `__JetBrains_Mono_Fallback_3c557b`, the metric-matched fallbacks Next.js generates, with 0 observed uses. The declared stack continues `Inter, Arial, Helvetica, sans-serif`.
- **Unresolved**: Hangul. The Korean edition uses the same stack, and no Korean face is declared or loaded, so Korean text is drawn by the viewer's system font. The collector reads family names, not glyphs, so the face that draws it was not measured, and no Korean family is a token.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Display Hero | Inter | 93.6px | 600 | 93.6px (1.0) | -3.744px | Home hero, English and Korean |
| Display | Inter | 72px | 600 | 74.88px (1.04) | -2.52px | MoAI Inference Framework hero |
| Section | Inter | 40px | 600 | 44.8px (1.12) | -1px | Section titles |
| Lead | Inter | 24px | 500 | 32px (1.33) | normal | Subtitle under the product hero |
| Card Title | Inter | 18px | 600 | 23.4px (1.3) | -0.18px | Feature cards; 25.2px line on news rows |
| Body Large | Inter | 17px | 400 | 27.2px (1.6) | normal | Hero sub-copy |
| Body | Inter | 16px | 400 | 24px (1.5) | normal | Page body |
| Section Description | Inter | 16px | 400 | 26.4px (1.65) | normal | Under section titles |
| Card Description | Inter | 14px | 400 | 21.7px (1.55) | normal | Feature cards |
| Nav | Inter | 14px | 400 | 21px (1.5) | normal | Header menu |
| Button | Inter | 14px | 500 | 21px (1.5) | normal | Primary and ghost actions |
| Small | Inter | 13px | 400 | 20.15px (1.55) | normal | News summaries, footer links; weight 500 on inline links |
| Caption | Inter | 12px | 400 | 16.8px (1.4) | normal | Footer copyright |
| Eyebrow | JetBrains Mono | 11px | 500 | 17.6px (1.6) | 1.32px | Uppercase eyebrows |
| Mono Label | JetBrains Mono | 11px | 400 | 16.5px (1.5) | 1.32px | Footer pills |

### Principles
- **Weight marks the role**: 600 for every heading, 500 for actions and inline links, 400 for reading.
- **Tracking tightens with size**: `-3.744px` at 93.6px, `-2.52px` at 72px, `-1px` at 40px, `-0.18px` at 18px; body text stays at normal tracking.
- **The mono voice is small and wide**: JetBrains Mono appears only at 11px, uppercase, with `1.32px` tracking (0.55px and 0.275px on the diagram labels).

## Layout

### Spacing System
- Actions: 0px 18px padding at 40px height
- Feature cards: 28px padding
- News rows: 24px vertical padding
- Header menu: 8px vertical padding
- Footer pills: 6px 12px
- The most frequent spacing values in the capture are 8, 6, 12, 28, 18, 4, 32 and 24px

### Grid & Container
- At the 1440px viewport the news list and footer span 1076px; feature cards are 348px wide, three to a row.
- The home runs: a `#050403` hero band with a 93.6px headline and two actions; white sections, each a 40px title over a 16px description; a panel set in white and `#f8f7f4` type (its fill was not captured); feature cards; a list of news rows; the `#1c1a18` footer.
- The MoAI Inference Framework page opens on white with a 72px title, a 24px lead and a primary plus ghost action, then a dark section (its fill was not captured) with the architecture diagram, then grids of feature cards.

### Whitespace Philosophy
- **Document calm**: one title, one description and one grid per section; the pages read top to bottom like a technical brief.
- **Bands for weight**: the dark hero and footer frame white content, so emphasis comes from placement rather than from boxes.

### Border Radius Scale
- 6px: actions, cards and footer pills (82 of 346 radius readings)
- 0px: everything else

### Responsive Behavior

#### Breakpoints
Only the 1440px desktop viewport was captured. The news-row link carries `md:grid-cols-[120px_1fr_auto]`, a sign of a medium breakpoint, but no breakpoint was measured.

#### Touch Targets
- Actions: 40px tall
- Header menu: 37px; language switcher: 36px
- Footer pills: 31px

#### Collapsing Strategy
- Not measured.

#### Image Behavior
- Not measured.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Every captured element at rest |
| Hairline | 1px solid `#dfdeda` | Feature cards, news rows |
| Band | `#050403` hero, `#1c1a18` footer | Opening and closing bands of the home |

**Shadow Philosophy**: Moreh's pages are flat. Every captured element computes `box-shadow: none` at rest; the linked feature cards on the Inference Framework page begin a shadow transition on hover, but no settled value was recorded, so no shadow is specified. Separation comes from hairlines and from the dark bands.

## Motion & Easing

Motion is measured only where the probe read it. The primary and ghost actions transition background, colour, border colour and transform over 120ms with `cubic-bezier(0.2, 0, 0, 1)`; the footer links and pills transition colour over 150ms with `cubic-bezier(0.4, 0, 0.2, 1)`. Page-level motion — scroll reveals, the diagram, carousels — was not measured and is not specified. Honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/moreh.json (capturedAt 2026-09-30T07:52:29Z), deterministic collector, logged out: moreh.io, moreh.io/ko/, moreh.io/inference-framework/.
- Band fills, hover and pressed values and transitions: docs/research/2026-09-29-growth/raw/moreh-states-home.json (keyboard-state probe of moreh.io, 2026-09-30T07:56Z, focus skipped).
- §1, §10, §11: moreh.io/about/, moreh.io/ko/about/ and moreh.io/ko/news/, opened 2026-09-30; narrative context only, no token.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Primary action**
- Background: `#ff5700`
- Text: `#ffffff`
- Border: 1px solid transparent
- Radius: 6px
- Padding: 0px 18px
- Height: 40px
- Font: 14px / 500 / 21px Inter
- Hover: background `#f34600`, arrow shifts 2px right (settled probe frame after a 120ms transition)
- Pressed: background `#f34600` (probe)
- Use: Request Demo on moreh.io and the MoAI Inference Framework page, and the same action on moreh.io/ko/

**Ghost action on dark**
- Background: transparent
- Text: `#f8f7f4`
- Border: 1px solid rgba(255, 255, 255, 0.25)
- Radius: 6px
- Padding: 0px 18px
- Height: 40px
- Font: 14px / 500 / 21px Inter
- Hover: fill rgba(255, 255, 255, 0.06), border rgba(255, 255, 255, 0.4) (probe)
- Pressed: the same values as hover (probe)
- Use: View Benchmarks beside the primary action on the home hero band

**Ghost action on white**
- Background: transparent
- Text: `#050403`
- Border: 1px solid `#d2d1cd`
- Radius: 6px
- Padding: 0px 18px
- Height: 40px
- Font: 14px / 500 / 21px Inter
- States: rest only; the bundle's hover and pressed frames were mid-transition, so no state is declared
- Use: the secondary action beside the primary on the MoAI Inference Framework hero

**Inline link**
- Text: `#dd4300`
- Font: 13px / 500 / 20.15px Inter (a 14px / 500 variant also appears)
- States: rest only
- Use: arrow links on white, four on each home

**Inline link on dark**
- Text: `#ff793e`
- Font: 14px / 500 / 21px Inter
- Use: the inline link in the dark section of the Inference Framework page

### Navigation

**Header menu**
- Background: transparent
- Text: `#050403`
- Padding: 8px 0px
- Height: 37px
- Font: 14px / 400 / 21px Inter
- States: rest only; the bundle frames drift by one colour unit, which is not a design value
- Use: Products, Solutions, Performance, Resources, Careers, Company

**Language switcher**
- Text: `#65635f`
- Height: 36px
- Font: 13px / 400 / 19.5px Inter
- Use: EN on moreh.io, KO on moreh.io/ko/

### Cards & Containers

**Feature card**
- Background: `#ffffff`
- Border: 1px solid `#dfdeda`
- Radius: 6px
- Padding: 28px
- Width: 348px
- States: rest; linked cards on the Inference Framework page start a border and shadow transition on hover, but no settled frame was captured, so the hover is unmeasured
- Use: feature cards, three to a row, on all three pages; 18px / 600 heading in `#050403`, 14px description in `#65635f`

**News row**
- Border: bottom 1px solid `#dfdeda`
- Padding: 24px 0px
- Width: 1076px
- Use: newsroom and blog rows on the home, with an 18px / 600 title and a 13px summary in `#65635f`

### Badges

**Footer pill**
- Background: transparent
- Text: `#a09e9a`
- Border: 1px solid `#2a2926`
- Radius: 6px
- Padding: 6px 12px
- Height: 31px
- Font: 11px / 400 / 16.5px JetBrains Mono, uppercase, letter-spacing 1.32px
- Hover: text `#f8f7f4` (settled probe frame after a 150ms transition)
- Use: Privacy Policy and Terms of Use on the `#1c1a18` footer

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages of moreh.io, logged out, plus a keyboard-state probe of the home and first-party company pages)
**Tier 1 sources:** https://moreh.io/ ; https://moreh.io/ko/ ; https://moreh.io/inference-framework/ ; https://moreh.io/about/ ; https://moreh.io/ko/about/ ; https://moreh.io/ko/news/
**Tier 2 sources:** getdesign.md/moreh (HTTP 200, "moreh — 0 DESIGN.md files") and styles.refero.design/?q=moreh (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (primary action)** | Fill `#ff5700` becomes `#f34600` and the arrow moves 2px right (probe, settled after 120ms). |
| **Hover / pressed (ghost on dark)** | A rgba(255, 255, 255, 0.06) fill appears and the border rises from 0.25 to 0.4 alpha (probe). |
| **Hover (footer pill)** | Text `#a09e9a` becomes `#f8f7f4` (probe, settled after 150ms). |

Focus was not measured: the probe ran with focus skipped, and the collector's focus frames are not used. The collector's expansion pass recorded no interaction events, so other hover and pressed treatments are unmeasured rather than absent. Error, empty, loading, success and disabled states were not captured and are not described.

Live state probe, 2026-10-16 (`https://moreh.io/`), `primary-button`: focus — outline oklch(0.7 0.2 40 / 0.35) solid 2px.

## Do's and Don'ts

### Do
- Keep `#ff5700` for the one primary action in a view, deepening to `#f34600` on hover
- Use warm ink `#050403` for text and the hero band, and `#1c1a18` for the footer
- Set headings in Inter 600 with negative tracking (`-1px` at 40px)
- Give every action, card and pill the same 6px radius
- Separate content with `1px #dfdeda` hairlines on white cards
- Use JetBrains Mono at 11px, uppercase, `1.32px` tracking for eyebrows and small labels
- Use `#dd4300` for inline links on white and `#ff793e` on dark

### Don't
- Don't spread the orange to cards, backgrounds or icons
- Don't add rest shadows to cards or actions
- Don't swap the warm neutrals for pure black or cool greys
- Don't mix corner radii; 6px is the only rounding
- Don't set body copy in the mono family
- Don't present Inter as the Korean face; no Korean face is loaded

## Voice & Tone

Moreh's voice is precise, technical and quietly ambitious — the register of systems engineers who would rather show a benchmark than make a claim. The hero line states a capability in plain terms, and the copy assumes a reader who runs infrastructure.

| Context | Tone |
|---|---|
| Hero headlines | Declarative capability statements. "Optimal LLM Inference on Every Accelerator." |
| Section titles | Compressed and technical. "From Kernels to Clusters." |
| Actions | Direct, low-pressure imperatives. "Request Demo", "View Benchmarks", "Learn more". |
| Product names | Systematic and prefixed. "MoAI Inference Framework", "MoAI Performance Gateway", "MoAI Fabric". |
| Company pages | Problem first, then the answer. "Founded in 2020, Moreh builds the software that removes these barriers." |

**Voice samples (verbatim, opened 2026-09-30):**
- "Optimal LLM Inference on Every Accelerator" — moreh.io hero.
- "Moreh — Inference Software for Every Chip" — moreh.io page title; "모든 칩을 위한 추론 소프트웨어" on moreh.io/ko/.
- "Infrastructure software for hyperscale AI" — About; "초대규모 AI를 위한 인프라 소프트웨어" on the Korean About page.
- "From Kernels to Clusters" — home section title.

**Forbidden register**: hype superlatives ("revolutionary", "game-changing"), exclamation-heavy marketing, vague AI buzzwords without a mechanism, and claims no benchmark backs.

## Agent Prompt Guide

### Quick Color Reference
- Primary action: `#ff5700` with `#ffffff` label; hover `#f34600`
- Text and hero band: `#050403`; footer `#1c1a18`
- On dark: `#f8f7f4` headings, `#a09e9a` secondary text
- Muted text `#65635f`; subtle `#888682`
- Links: `#dd4300` on white, `#ff793e` on dark
- Hairline `#dfdeda`; ghost border `#d2d1cd`; footer pill border `#2a2926`

### Example Component Prompts
- "Create a dark hero: `#050403` background, 93.6px Inter 600 headline with `-3.744px` tracking and a 1.0 line height in `#f8f7f4`, 17px `#a09e9a` sub-copy, then a `#ff5700` action (white 14px / 500 label, 6px radius, 0px 18px padding, 40px tall) beside a transparent action with a 1px rgba(255, 255, 255, 0.25) border and `#f8f7f4` label."
- "Build a feature card: `#ffffff` fill, 1px solid `#dfdeda` border, 6px radius, 28px padding, no shadow; 18px Inter 600 title in `#050403` with `-0.18px` tracking; 14px description in `#65635f`; a 13px / 500 `#dd4300` arrow link."
- "Make a footer: `#1c1a18` background, 13px `#a09e9a` links, and uppercase JetBrains Mono 11px pills with a 1px `#2a2926` border, 6px radius, 6px 12px padding and `1.32px` tracking."

### Iteration Guide
1. One orange, `#ff5700`, for the primary action only
2. Warm neutrals: `#050403`, `#65635f`, `#888682`, `#dfdeda`
3. Inter 600 headings with negative tracking; 400 and 500 below
4. One 6px radius; no rest shadows
5. JetBrains Mono only for small uppercase labels
6. Dark bands open and close the page

---

## Governance

### Known Gaps

- **Contrast, `primary-button`.** Text `#ffffff` on `#ff5700` measures 3.17:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `ghost-button`.** Text `#050403` on `#00000000` measures 1.03:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-trigger`.** Text `#050403` on `#00000000` measures 1.03:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `language-switcher`.** Text `#65635f` on `#00000000` measures 3.50:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

---
id: fugle
name: "Fugle"
country: TW
category: fintech
homepage: "https://www.fugle.tw"
primary_color: "#f4af1c"
logo:
  type: favicon
  slug: "https://www.fugle.tw/images/favicon.ico"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#f4af1c"
    primary-hover: "#e49b00"
    primary-tint: "#fef4cf"
    secondary: "#4c85a0"
    secondary-hover: "#36708c"
    canvas: "#ffffff"
    bg-secondary: "#f5f5f5"
    border: "#eaeaea"
    border-heavy: "#dfdfdf"
    text: "#323232"
    text-muted: "#8b8a8a"
    dark-surface: "#131313"
    rise: "#f3746d"
    fall: "#6c9c46"
    error: "#d12a2a"
  typography:
    family: { sans: "Lato", mono: "Lato" }
    highlight: { size: 24, weight: 700, lineHeight: 1.4, use: "Data highlight values" }
    heading:   { size: 20, weight: 700, lineHeight: 1.4, use: "Dialog / section headings" }
    modal:     { size: 16, weight: 400, lineHeight: 1.5, use: "Modal body, form inputs" }
    body:      { size: 14, weight: 400, lineHeight: 1.4, use: "Dense data rows" }
    label:     { size: 12, weight: 400, lineHeight: 1.4, use: "Secondary labels, timestamps" }
  spacing: { xs: 5, sm: 8, base: 16, lg: 20, xl: 32, section: 50 }
  rounded: { sm: 4, md: 4, lg: 8, full: 9999 }
  shadow:
    card: "0 2px 2px 0 rgba(0,0,0,.08), 0 2px 7px 0 rgba(0,0,0,.1)"
    popover: "0 0 24px 0 rgba(0,0,0,.08)"
    modal: "0 0 17px 0 rgba(0,0,0,.14), 0 8px 9px 0 rgba(0,0,0,.12)"
  components:
    button-primary: { type: button, bg: "#f4af1c", fg: "#ffffff", radius: "4px", font: "14px / 700", use: "Amber CTA; hover #e49b00" }
    input-default: { type: input, bg: "#eaeaea", radius: "4px", padding: "0 5px", font: "16px / 400", use: "Search / trade input, 32px height" }
    list-item-stock: { type: listItem, bg: "#ffffff", radius: "0px", font: "14px / 400", use: "Watchlist row, 55px height, 1px #eaeaea border; hover rgba(0,0,0,0.04)" }
    card-trade: { type: card, bg: "#ffffff", radius: "4px", padding: "20px 0", use: "Surface trade box card" }
    card-info: { type: card, bg: "#eaeaea", radius: "8px", use: "Highlighted info box" }
    dialog: { type: dialog, bg: "#ffffff", radius: "4px", padding: "16px", font: "16px / 400", use: "Modal dialog container" }
  components_harvested: true
---

# Fugle

Taiwan's visual-first stock research and trading platform, built by investors for serious investors.

## 1. Visual Theme & Atmosphere

Fugle's interface speaks the language of precision and calm confidence. A predominantly light, near-white canvas — `#f5f5f5` for secondary surfaces, `#ffffff` for foreground containers — keeps the dense data of Taiwan equity markets easy to scan without overwhelming the eye. Against this quiet ground, the brand's signature amber `#f4af1c` appears sparingly but unmistakably: loading indicators, live-chat buttons, version badges, and chart reference lines all carry the same warm gold tone. The dark theme inverts the arrangement, dropping to a near-black `#131313` base with `#323232` surface layers, letting red and green trading signals pop with strong luminance contrast. Two modes share the same structural rhythm — compact rows, 4 px and 8 px radii, tight 12–14 px body type — giving both themes an identical sense of discipline and information density appropriate to active trading.

## 2. Color Palette & Roles

- **Brand Amber:** `#f4af1c` — primary brand color; loading spinners, live-chat button, version badges, chart line accent, primary CTA background
- **Amber Dark:** `#e49b00` — hover state for primary buttons (`--p60`), icon fills on emphasis
- **Amber Tint:** `#fef4cf` — soft background for amber-highlighted content areas (`--p20`)
- **Secondary Blue:** `#4c85a0` — secondary interactive elements, link text default (`--s`, `--color-neutral-link-50`)
- **Secondary Blue Dark:** `#36708c` — secondary blue hover (`--s60`)
- **Surface White:** `#ffffff` — card backgrounds, modal surfaces, `--color-neutral-00-white`
- **Background Secondary:** `#f5f5f5` — page backgrounds, hover fills (`--color-neutral-04`)
- **Border Default:** `#eaeaea` — dividers, default strokes (`--color-neutral-08`)
- **Border Heavy:** `#dfdfdf` — emphasized borders (`--color-neutral-13`)
- **Secondary Text:** `#8b8a8a` — muted labels, helper text (`--color-neutral-46`)
- **Body Text:** `#323232` — primary foreground text (`--color-neutral-80`)
- **Dark Surface:** `#131313` — dark-mode primary background (`--color-neutral-93`)
- **Rise (Light):** `#f3746d` — stock price rise in light theme (TW convention: red = up)
- **Fall (Light):** `#6c9c46` — stock price fall in light theme (TW convention: green = down)
- **Error:** `#d12a2a` — system errors, form validation (`--color-red-600`)

## 3. Typography Rules

Fugle uses **Lato** (via Google Fonts) as the Latin character family across the main web trading platform, complemented by **Noto Sans TC** and **Microsoft JhengHei** on the developer documentation portal for Traditional Chinese text. The Material Icons font handles iconography throughout.

Body text runs at **14 px / normal** weight for dense data rows, **12 px** for secondary labels and timestamps, and **16 px** for modal body copy and form inputs. Section headings use **20 px / 700** in dialogs, and data highlight values reach **18–24 px**. Line heights are kept tight to maximize data density — approximately 1.4–1.5× for multi-line text. Font weight vocabulary: 400 for body, 700 for emphasis and headings. No custom variable fonts detected.

## 4. Component Stylings

### Primary Button

**Amber CTA (e.g. "開始交易")**
- Background: `#f4af1c`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Font: 14px / 700

**Amber CTA Hover**
- Background: `#e49b00`
- Text: `#ffffff`
- Radius: 4px

### Input Field

**Default Search / Trade Input**
- Background: `#eaeaea`
- Border: none
- Radius: 4px
- Height: 32px
- Padding: 0 5px 0 5px
- Font: 16px / 400

**Input Group (with label)**
- Border: 1px solid `#eaeaea`
- Radius: 4px
- Height: 32px

### Stock Row (Watchlist)

**Default Stock List Item**
- Background: `#ffffff`
- Border: 1px solid `#eaeaea`
- Radius: 0px
- Height: 55px
- Font: 14px / 400

**Hovered Stock Row**
- Background: `rgba(0,0,0,0.04)`

### Card / Trade Box

**Surface Card (e.g. fugle-trade-box)**
- Background: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 20px 0

**Info Card (e.g. watchlist-stock__box)**
- Background: `#eaeaea`
- Radius: 8px

### Modal

**Dialog Container**
- Background: `#ffffff`
- Radius: 4px
- Font: 16px / 400
- Padding: 16px

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.fugle.tw (HTML, inline CSS, manifest.json), https://dk91kmsnfr6kg.cloudfront.net/desktop/assets/fugle-desktop.d5b14f507dc94191ea072af78696b931.css, https://dk91kmsnfr6kg.cloudfront.net/desktop/assets/chunk.ac7daef9fdaa5882212c.css, https://developer.fugle.tw/assets/css/styles.46d8cd92.css, https://apps.apple.com/tw/app/fugle/id1542310263
**Tier 2 sources:** getdesign.md/fugle — No designs found for "fugle". refero — no TW/Fugle results expected.
**Conflicts unresolved:** HTML `theme-color` is `#f4af1c`; PWA manifest `theme_color` is `#fbcc67` (a lighter amber). The CSS custom property `--p` and developer portal's `--ifm-color-primary` both canonically define `#f4af1c`; the manifest value is likely a PWA splash-screen approximation. Primary recorded as `#f4af1c`.

## 5. Layout Principles

Fugle's web trading platform is a dense multi-panel grid. The header is fixed at **50 px** height. A left sidebar watchlist panel (configurable width via `--watchListWidth`) sits beside a scrollable main canvas. The trading panel (`--tradingWidth`) expands from the right edge. The main content container caps at **1508 px** max-width for standard market views, but trading views use `max-width: initial` for full-bleed chart display. Column grids follow Bootstrap-compatible breakpoints: 576 px (sm), 768 px (md), 1280 px (lg), 1440 px / 1680 px (xl variants for watchlist density). Card grids use CSS grid with responsive `repeat(N, 1fr)` columns that scale from 2 up to 5 columns depending on viewport.

## 6. Depth & Elevation

Fugle uses a layered shadow system that signals interactive hierarchy without dramatic depth:

- **Resting card:** `box-shadow: 0 2px 2px 0 rgba(0,0,0,.08), 0 2px 7px 0 rgba(0,0,0,.1)`
- **Dropdown / popover:** `box-shadow: 0 0 24px 0 rgba(0,0,0,.08)`
- **Modal / elevated panel:** `box-shadow: 0 0 17px 0 rgba(0,0,0,.14), 0 8px 9px 0 rgba(0,0,0,.12)`
- **Focus / active ring:** `box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 3px rgba(0,0,0,.12), 0 4px 15px 0 rgba(0,0,0,.2)`
- **Side panel frame:** `box-shadow: 0 4px 8px -4px var(--color-component-web-frame-shadow-default), 0 8px 16px -4px var(--color-component-web-frame-shadow-default)` — `rgba(0,0,0,0.08)` in light, `rgba(255,255,255,0.08)` in dark

Dark mode shadows use white-alpha variants to create the inverse glow effect. No `z-index`-heavy stacking unless modals are active.

## 7. Do's and Don'ts

### Do
- Use `#f4af1c` amber as the single primary CTA color across light and dark modes
- Show red (`#f3746d`) for rising prices and green (`#6c9c46`) for falling prices — follow Taiwan Stock Exchange convention, opposite of Western norms
- Keep card surfaces white (`#ffffff`) in light mode and dark (`#131313`) in dark mode; always separate with subtle border `#eaeaea` rather than heavy shadows
- Use Lato for Latin numerals in data-dense contexts; pair with Noto Sans TC for Chinese labels
- Apply `border-radius: 4px` uniformly to buttons, inputs, and cards; reserve `8px` for highlighted info boxes
- Limit the primary amber to interactive hotspots — loading states, primary buttons, notification badges — so it retains signal value

### Don't
- Don't use amber as a neutral fill or background wash — it should always signal action or system state
- Don't swap the red/green convention to Western defaults; Fugle's users rely on red = up, green = down
- Don't use heavy drop shadows on resting states; the light `rgba(0,0,0,.08)` layered shadow is intentional
- Don't exceed 16 px body font in data rows — density is a core UX value
- Don't add decorative illustration or gradient washes to the trading canvas; the chart data is the visual
- Don't use the dark theme in onboarding or marketing contexts; it's designed for active-trading sessions

## 8. Responsive Behavior

The platform targets desktop-first (min 1024 px canvas) and degrades gracefully to tablet. Breakpoints mirror Bootstrap: 576 px, 768 px, 1280 px, 1440 px, 1680 px. The watchlist sidebar collapses on narrow viewports. The trading panel (`--tradingWidth`) is hidden by default and slides in over the canvas on demand. Card grids scale: 1 column below 576 px, 2 columns at md, 3–5 at xl depending on feature area. Mobile is covered by the native iOS/Android app (Fugle app id 1542310263), which shares the brand's color and typography tokens but uses a card-based vertical scroll layout optimized for thumb navigation.

## 9. Agent Prompt Guide

When building Fugle-style interfaces:

- Start with a white (`#ffffff`) or light-grey (`#f5f5f5`) canvas, dense 12–14 px body text in Lato, no decorative imagery
- Primary CTAs: `background #f4af1c`, white text, 4 px radius, no visible border, hover to `#e49b00`
- Data rows: `min-height 55px`, `border-bottom 1px solid #eaeaea`, hover `rgba(0,0,0,0.04)` background
- Price changes: **always** red for rise, green for fall (TW convention); use `#f3746d` / `#6c9c46` in light mode
- Cards: `border-radius 4px`, `box-shadow 0 2px 2px 0 rgba(0,0,0,.08), 0 2px 7px 0 rgba(0,0,0,.1)`, no border
- Form inputs: `height 32px`, `border-radius 4px`, background `#eaeaea`, `font-size 16px`
- Transitions: `0.2s cubic-bezier(.4,.6,.2,1)` for most UI state changes
- Dark mode: swap backgrounds to `#131313` / `#222222` surfaces; keep `#f4af1c` amber unchanged

## 10. Voice & Tone

Fugle's voice is **precise, empowering, and peer-to-peer** — a fellow investor who happens to have built better tools, speaking directly to another serious investor.

| Dimension | Do | Don't |
|---|---|---|
| Register | Conversational but expert; uses financial terminology naturally | Dumbed-down language or over-explaining basics |
| Stance | Equal peer — "we research too" | Corporate authority — "our platform provides" |
| Framing | Research space, decision clarity, serious purpose | FOMO urgency, get-rich language, hype |
| Sentence length | Short to medium; punchy declaratives | Long compound clauses |

Voice samples (illustrative, modelled on App Store copy tone):

- "告別密密麻麻數字的傳統看盤軟體。" — *Illustrative: crisp one-liner that rejects the status quo without drama.*
- "認真的投資人，值得更好的工具。" — *Illustrative: the core brand promise stated as self-evident truth, not a sales claim.*
- "把時間花在決策，而非整理資料。" — *Illustrative: frames value through the user's time, not the product's features.*

## 11. Brand Narrative

Fugle (富果, "rich harvest") was founded in Taiwan by Fortuna Intelligence, a team that describes itself as being simultaneously developers and practicing investors who watch the markets daily. The animating frustration was the poor quality of existing retail trading interfaces — dense, noisy, built around brokerage workflow rather than investor research workflow — and the refusal to accept that as the only option.

The platform launched as a web trading app paired with a market data API, positioning itself at the intersection of fintech and developer tooling. The developer portal (developer.fugle.tw) made real-time Taiwan stock data accessible via clean REST and WebSocket APIs, partnering with Fubon, Taishin, and E.Sun securities to offer actual order execution. This dual strategy — beautiful research UI for investors, clean API for developers — reflects a philosophy that serious financial tools should meet users where they are, whether at a trading terminal or a code editor.

Today Fugle frames its mission around a simple belief: "認真的投資人值得更好的工具" — serious investors deserve better tools. The product is designed not to compete with professional Bloomberg terminals or to simplify investing into a game, but to occupy a deliberate middle ground: rigorous, visual, and genuinely pleasant to use for hours of research.

## 12. Principles

1. **Data clarity over data density.** Every number on screen should earn its place. When a display becomes crowded, the answer is smarter information architecture — heatmaps, visual cards — not smaller type. *UI implication:* use whitespace and visual hierarchy in card layouts rather than cramming more data into fewer pixels.

2. **Investor perspective, not brokerage perspective.** The interface is organized around how an investor thinks (by thesis, sector, comparison) not how a brokerage processes orders. *UI implication:* watchlists, custom research cards, and side-by-side comparisons are first-class features; order ticket is secondary until the user is ready to transact.

3. **Amber signals action.** The brand's single accent color is reserved for interactive moments — loading, primary buttons, live notifications. Overuse dilutes the signal. *UI implication:* no decorative amber, no amber text, no amber borders; only amber fills on actionable elements.

4. **Both modes are production-quality.** Light mode for daytime research, dark mode for active trading sessions — neither is an afterthought. *UI implication:* every component must be spec'd for both themes with equal care; dark mode uses near-black surfaces, not grey.

5. **Serious tools should still feel fast.** Transitions are tight (0.2 s) and purposeful. Animation is reserved for loading states and layout expansions, not decoration. *UI implication:* use `cubic-bezier(.4,.6,.2,1)` easing on state changes; avoid entrance animations on data rows.

## 13. Personas

*Illustrative — not based on published Fugle user research.*

**Illustrative: The Research-First Investor (個人投資者)**
Mid-career professional, 35–50, investing personal savings in Taiwan equities. Spends evenings building sector maps and comparing fundamentals across 5–15 stocks. Values clarity and speed; deeply annoyed by noise. Uses Fugle's custom card layout to structure a personal research SOP.

**Illustrative: The Developer-Investor (開發者投資人)**
Software engineer in their late 20s–early 40s who approaches investing algorithmically. Builds personal screeners using Fugle's marketdata API. Values API quality, documentation clarity, and free-tier access for prototyping. Attracted by the developer-friendly portal and Noto Sans TC-styled docs.

**Illustrative: The Active Trader (短線交易者)**
Experienced retail trader who watches intraday tick data and uses the dark theme during market hours. Needs every pixel to serve a function. Relies heavily on the watchlist panel and real-time price update animations. Irritated by anything that obscures the bid/ask spread display.

**Illustrative: The Student Investor (學習型投資人)**
University student or new entrant to Taiwan equity investing, 20–28. Discovered Fugle through a campus or online investing community. Drawn to the clean visual design compared to legacy broker platforms. Starts with the mobile app and explores web tools as confidence grows.

## 14. States

- **Empty — Watchlist:** Watchlist panel shows a placeholder prompt to add a stock ticker; no skeleton rows; single amber CTA button "新增自選股"
- **Loading — Data fetch:** Three amber `#f4af1c` bouncing dots (border-radius 50%, 11 px, `lds-ellipsis` animation at 0.6 s cubic-bezier(0,1,1,0)); used both on initial page load and in-panel data refresh
- **Error — No data / API timeout:** Inline message inside the affected card or panel; muted text `#8b8a8a`; no modal interruption; retry link styled as secondary text link
- **Error — Form validation:** Input border switches to `#d12a2a` (`--color-red-600`); error message appears below field at 12 px muted red
- **Success — Order submitted:** In-panel confirmation message with a green `#6c9c46` checkmark icon; auto-dismisses after 3 s without blocking interaction
- **Skeleton — Chart/card loading:** Placeholder shimmer animation (`placeHolderShimmer` keyframe, 500 ms interval defined in `loadingDelay`); uses `#eaeaea` animated gradient across content areas
- **Disabled — Button:** `background-color rgba(0,0,0,.12)`, `color rgba(0,0,0,.26)`, `box-shadow none`, `cursor not-allowed`; no amber used on disabled state

## 15. Motion & Easing

**Duration scale:**
- Micro (icon state): 0.1 s
- Fast (hover, focus): 0.2 s
- Standard (panel expand, input transitions): 0.3 s
- Moderate (fade, scroll animation): 0.425 s
- Slow (panel slide, complex layout): 0.6–0.65 s
- Extra-slow (chart loading dot): 0.6 s loop, 9 s total for secondary spinners

**Primary easing:** `cubic-bezier(.4,.6,.2,1)` — Fugle's signature curve, used on layout transitions, header animations, and most interactive state changes. It has a sharp initial acceleration (the `.6` control point) and a gentle deceleration that gives the UI a confident, purposeful feel.

**Secondary easing:** `cubic-bezier(0,1,.5,1)` — used for panel reveal/collapse; starts slow and exits fast, creating a "snap open" character.

**Loading animation:** `cubic-bezier(0,1,1,0)` — the bouncing dot easing; exaggerated overshoot gives the brand's only playful motion moment.

**Rules:**
- All data-row hover transitions use `0.2s` or less; never animate data values themselves
- Layout changes (watchlist open/close, trading panel) use the `--layoutDuration` CSS variable with the primary cubic-bezier curve
- No entrance animations on stock rows or chart data; they appear instantly
- Opacity fades use 0.425 s for modals and overlays

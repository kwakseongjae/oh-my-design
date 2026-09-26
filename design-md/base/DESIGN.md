---
id: base
name: BASE
country: JP
category: ecommerce
homepage: "https://thebase.com"
primary_color: "#0BB7AE"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=thebase.com&sz=128"
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "BASE web tokens"
  url: "https://thebase.com/"
  type: system
  description: "80 custom properties on the product surface: two ten-step colour ramps, a ten-step unitless spacing scale, a seven-step z-index scale, a declared base font family — and eleven motion tokens, ten of them easing curves named for what they animate, one of which is measurable on a rendered control."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    prime-50: "#e0f3f4"
    prime-100: "#c6e9eb"
    prime-200: "#a6dddd"
    prime-300: "#7fd1cf"
    prime-400: "#59c4c0"
    prime-500: "#0bb7ae"
    prime-600: "#00a099"
    prime-700: "#00938b"
    prime-800: "#00827a"
    prime-900: "#105151"
    gray-50: "#f7f8f9"
    gray-100: "#edeef1"
    gray-200: "#dadce0"
    gray-300: "#c1c7d1"
    gray-400: "#9ba2ae"
    gray-500: "#838996"
    gray-600: "#636978"
    gray-700: "#45495b"
    gray-800: "#2e3242"
    gray-900: "#1e1f2a"
    pink: "#fc6589"
    foreground: "#233237"
    core-black: "#0d181e"
    canvas: "#ffffff"
    border-gray-lighter: "#a5acb6"
    inspiration-red: "#ff4600"
    inspiration-red-hover: "#de3b00"
    red-lighter: "#fff4f4"
    red-lighter-text: "#f87e7e"
    brown: "#a33e36"
  typography:
    family: { sans: "TazuganeGothicStdN", display: "Gilroy" }
    min: { size: 10, use: "--minimum-font-size, and the smallest rendered step" }
    small: { size: 12, use: "Fine print and captions" }
    body: { size: 14, use: "The dominant rendered size — 35 elements" }
    base: { size: 16, use: "Header buttons and lead copy" }
    lead: { size: 18, use: "Section intros and the fixed bottom CTA" }
    title: { size: 20, use: "The hero call-to-action label" }
    heading: { size: 22, use: "Section headings" }
    display: { size: 28, use: "The largest rendered step" }
  spacing: { s8: 8, s16: 16, s24: 24, s32: 32, s40: 40, s64: 64, s72: 72, s80: 80, s120: 120, s144: 144 }
  rounded: { sm: 4, lg: 16, pill: 999 }
  motion:
    duration-hover: ".2s"
    ease-link: "cubic-bezier(.3, .7, .7, .3)"
    ease-button-hover: "cubic-bezier(.05, .92, .21, .97)"
    ease-button-icon-hover: "cubic-bezier(.05, .85, .36, .98)"
    ease-drawer: "cubic-bezier(.89, .05, .27, 1)"
    ease-fade-in: "cubic-bezier(.32, 0, .67, 0)"
    ease-fade-in-up: "cubic-bezier(0, .55, .45, 1)"
    ease-progressbar: "cubic-bezier(0, .55, .45, 1)"
    ease-sticky-section: "cubic-bezier(.02, .38, .26, .97)"
    ease-chart-pie-1: "cubic-bezier(.7, 0, .84, 0)"
    ease-chart-pie-2: "cubic-bezier(.16, 1, .3, 1)"
  components:
    button-login: { type: "button", bg: "#ffffff", fg: "#233237", radius: 0, height: "60px", font: "16px / 400", hover: "#233237", pressed: "#233237", use: "ログイン, 160×60 — a square white button that inverts entirely on hover: fill #233237, text #ffffff. transition: background-color 0.3s." }
    button-header-cta: { type: "button", bg: "#fc6589", fg: "#ffffff", radius: 0, height: "60px", font: "16px / 400", hover: "rgba(255,255,255,0.08)", pressed: "rgba(255,255,255,0.08)", use: "無料ではじめる, 160×60 — the pink header action. The button's own properties do not change; hover and pressed lay a white ::before at 8% opacity over the pink (re-checked 2026-09-26)." }
    button-hero-cta: { type: "button", bg: "#fc6589", fg: "#ffffff", radius: 999, height: "70px", font: "20px / 700", hover: "rgba(255,255,255,0.08)", pressed: "rgba(255,255,255,0.08)", use: "無料でショップを開設する, 432×70 — the same pink as a full pill, one size and two weights up. Hover and pressed add the same 8% white ::before, and an ::after picks up a background image (re-checked 2026-09-26)." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://thebase.com/", inspected: "2026-09-22" }
    - { id: corporate, kind: product-surface, url: "https://binc.jp/about/history", inspected: "2026-09-22" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://thebase.com/", captured: "2026-09-22" }
    - { id: home-recheck, kind: product-surface, url: "https://thebase.com/", captured: "2026-09-26" }
    - { id: corp-live, kind: product-surface, url: "https://binc.jp/about/history", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.border-gray-lighter: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brown: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.core-black: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-200: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-300: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-400: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-50: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-600: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-700: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-800: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-900: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.inspiration-red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.inspiration-red-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.pink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.prime-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.prime-200: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.prime-300: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.prime-400: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.prime-50: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.prime-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.prime-600: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.prime-700: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.prime-800: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.prime-900: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.red-lighter: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.red-lighter-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-header-cta.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-header-cta.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-header-cta.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-header-cta.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-header-cta.hover: { surface_id: home, source_id: home-recheck, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-header-cta.pressed: { surface_id: home, source_id: home-recheck, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-header-cta.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-header-cta.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-header-cta.use: { surface_id: home, source_id: home-recheck, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-hero-cta.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-hero-cta.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-hero-cta.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-hero-cta.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-hero-cta.hover: { surface_id: home, source_id: home-recheck, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-hero-cta.pressed: { surface_id: home, source_id: home-recheck, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-hero-cta.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-hero-cta.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-hero-cta.use: { surface_id: home, source_id: home-recheck, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-login.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s120: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s144: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s16: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s24: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s32: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s40: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s64: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s72: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s8: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s80: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.heading.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.heading.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.min.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.min.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.title.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.title.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
---
# Design System Inspiration of BASE (ベイス)

## 1. Visual Theme & Atmosphere

BASE is the Japanese service for opening a web shop for free. Its own history page dates the
service to November 2012 and the company to December 2012, followed by PAY.JP (2015), PAY ID
(2017) and YELL BANK (2018).

The landing surface is white with a **teal** identity (`#0bb7ae`, painted on 23 elements) and a
**pink** call to action (`#fc6589`). Ink is `#233237` — a blue-leaning near-black that is
`--color-origin-gray`, and the most common colour on the page at 78 elements.

What sets this reference apart is **motion**. BASE publishes eleven motion tokens: a hover
duration and **ten easing curves, each named for the thing it animates** — `--ease-drawer`,
`--ease-progressbar`, `--ease-sticky-section`, `--ease-chart-pie1` and `-pie2`. Most references
in this catalog describe motion in prose with nothing behind it. Here the curve is a token, and
one of them is **measurable on a rendered button**.

### Primary tasks
- Start a shop, from the header or from either of two large pink calls to action.
- Sign in, which is the one control on the page that visibly responds.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `thebase.com`. 80 custom properties resolve, all
BASE's own — no framework prefix appears.

### Prime — a ten-step teal ramp

`--color-prime-50` `#e0f3f4` · `-100` `#c6e9eb` · `-200` `#a6dddd` · `-300` `#7fd1cf` ·
`-400` `#59c4c0` · **`-500` `#0bb7ae`** · `-600` `#00a099` · `-700` `#00938b` ·
`-800` `#00827a` · `-900` `#105151`.

`-500` is the identity value and the one the page paints. The ramp darkens by roughly even
steps to `-800`, then jumps to a desaturated `#105151` at `-900` — the last step leaves the
hue's brightness curve rather than continuing it.

Three gradients are built from it and nothing else: `--gradient-hero-teal` and
`--gradient-primary-top` / `-bottom` all run `#0bb7ae` from `00` to `b2` alpha.

### Gray — a second ten-step ramp

`#f7f8f9` · `#edeef1` · `#dadce0` · `#c1c7d1` · `#9ba2ae` · `#838996` · `#636978` · `#45495b` ·
`#2e3242` · `#1e1f2a`. Every step is blue-leaning, matching the ink.

### The colours outside the ramps

- **Pink** (`#fc6589`) — `--color-pink`, and the entire call-to-action budget.
- **Foreground** (`#233237`) — `--color-origin-gray`. Not a step on the grey ramp; a value of
  its own, and the page's dominant text colour.
- **Core Black** (`#0d181e`) · **Canvas** (`#ffffff`).
- **Inspiration Red** (`#ff4600`) with a paired hover **`#de3b00`** — the only other colour in
  the set that publishes its own hover.
- **Border Gray Lighter** (`#a5acb6`) · **Red Lighter** (`#fff4f4`) with text `#f87e7e` ·
  **Brown** (`#a33e36`).
- A `bbq` group sits beside the ramps — `--color-bbq-gray--light` `#f0f1f4`, `--lighter`
  `#f8f9fa`, `--dark` `#c2c8d2`, `--color-bbq-white--dark` `#fcfcfd`,
  `--color-bbq-red--lighter` `#fff4f4`. An internal codename; the values are recorded in the
  verification notes and not promoted, because nothing on the measured page paints them.

## 3. Typography Rules

### Font Family

Two faces, both loaded as webfonts on the measured page.

- **`TazuganeGothicStdN`** is the declared base: `--font-family-base` is
  `"TazuganeGothicStdN", Meiryo, Arial, sans-serif`. Tazugane Gothic is a Morisawa Japanese
  face — a licensed brand typeface, not a system stack.
- **`Gilroy`** is what the marketing surface actually renders: 153 of 153 text-bearing
  elements. The corporate site `binc.jp` renders `TazuganeGothicStdN-Medium` and `-Light`
  instead.

Both are recorded — `sans` for the declared base, `display` for the face the product's own
landing page sets. A consumer taking only one of them gets half the system.

### Scale

`--minimum-font-size` is `10px`, and 10px is also the smallest rendered step. Measured sizes:
14px (35 elements) · 16px (27) · 18px (15) · 28px (10) · 22px (10) · 20px (8) · 10px (8) ·
12px (7) · 15px (5).

Weights are unusually top-heavy: **700 on 57 elements and 600 on 54**, against 400 on 37. The
page is set mostly in bold.

`--leading-trim` is `calc((1em - 1lh) / 2)` — the modern half-leading trim, computed rather
than hard-coded.

## 4. Component Stylings

Three controls measured, each pinned by element handle, with focus read for every control
before the mouse moved at all.

### Sign in — the one control that responds

`#ffffff` fill, `#233237` text, **0px radius**, 160×60, 16px/400.
Hover and pressed **invert it completely**: fill `#233237`, text `#ffffff`.
`transition: background-color 0.3s`.

### The two pink calls to action

- **Header**: `#fc6589`, `#ffffff` text, 0px radius, 160×60, 16px/400.
- **Hero**: the same pink as a **999px pill**, 432×70, 20px/700.

**The buttons themselves do not change on hover or pressed; an overlay does.** The first reading
compared only the element's own properties and recorded no change. A re-check on 2026-09-26 that
also reads `::before` and `::after` found a white `::before` at **8% opacity**
(`rgba(255,255,255,0.08)`) laid over the pink on hover and pressed; on the hero pill an `::after`
also picks up a background image. Both carry `transition: color 0.2s cubic-bezier(0.3, 0.7, 0.7,
0.3)` for the label.

### Focus

All three match `:focus-visible` and paint `outline: rgb(0, 95, 204) auto 1px` — **Chrome's
default ring, not BASE's**. The `auto` style is the tell; an authored ring names a style and a
width. No focus token is recorded, because the brand declares none.

### Radius

Rendered: 4px (4 elements), 16px (3), 999px (2), 50% (2), plus several one-sided pairs
(`0 0 16px 16px`, `28px 28px 0 0`, `16px 16px 0 0`) — cards that meet an edge.

## 5. Layout Principles

- **Two ten-step ramps and almost nothing else.** Teal for identity, blue-grey for everything
  structural; the pink is one value with no ramp at all.
- **Spacing is unitless**: `--spacing-8` through `--spacing-144` are bare numbers, so the
  consumer multiplies rather than inherits a unit.
- **The viewport is a token.** `--vw` `14.4px`, `--vh` `10px`, `--100vw` `1440px`,
  `--content-width` `1440px`, `--sp-ratio` and `--tb-ratio` — layout arithmetic published as
  custom properties.

## 6. Depth & Elevation

**No shadow was observed** on any measured control and no shadow token exists. There is a
seven-step **z-index** scale: `--z-tooltip` 1 · `-cta` 150 · `-flc` 180 · `-header` 200 ·
`-side-menu` 210 · `-hamburger` 300 · `-modal` and `-modal-mask` **6000000**. The last is not a
scale step; it is a value chosen to win.

## 7. Do's and Don'ts

### Do
- Take the easing from the token named for the job — `--ease-drawer` for a drawer,
  `--ease-progressbar` for a progress bar. That is what the names are for.
- Pair `--duration-hover` `.2s` with `--ease-link` for link and button transitions; that exact
  pair is what the rendered CTAs declare.
- Use `#233237` for ink rather than the darkest grey step; it is its own token.

### Don't
- Don't invent a focus ring for these buttons and don't copy the one you see — it is Chrome's.
- Don't change the pink itself on hover. The CTAs keep `#fc6589` and lighten through an 8% white overlay.
- Don't treat `--spacing-*` as pixels. They are unitless numbers.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only. The token set publishes `--sp-ratio`
`0.26666666666666666` and `--tb-ratio` `0.078125`, which are phone and tablet scaling factors,
but no breakpoint was observed.

## 9. Agent Prompt Guide

### Quick Color Reference
`#0bb7ae` teal identity (ramp `#e0f3f4`→`#105151`) · `#fc6589` call to action · `#233237` ink ·
`#0d181e` core black · grey ramp `#f7f8f9`→`#1e1f2a` · `#ff4600`/`#de3b00` inspiration red ·
`#ffffff` canvas

### Example Component Prompts
- "A 60px square sign-in button: `#ffffff` with `#233237` 16px/400 label, no radius, and a
  complete inversion on hover over `background-color 0.3s`."
- "A 70px pink pill: `#fc6589`, `#ffffff` 20px/700, 999px radius; hover lays an 8% white overlay on it."

## 10. Voice & Tone

Not assessed as copy. The measured landing surface carries 1,435 characters.

## 11. Brand Narrative

BASE's own history page dates the shop-building service to November 2012 and BASE株式会社 to
December 2012, then records a steady widening into money: PAY.JP in September 2015, PAY ID in
June 2017, the PAY and BASE BANK subsidiaries in January 2018, the SHIBUYA BASE physical store
in June 2018, and the YELL BANK funding service in December 2018.

The interface reads like a product built for people who are not designers: two ramps, one
accent, one bold weight, and a pink button repeated at three sizes. The considered part is
underneath — the easing curves, the leading trim, the viewport arithmetic — where the people
opening shops never have to look.

## 12. Principles

- **Name the curve after the job.** Ten easings, each tied to a specific motion.
- **Two ramps carry the system**, and the accent deliberately has none.
- **Publish the arithmetic.** Leading trim, viewport ratios and content width are tokens.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

**Measured.** The sign-in button inverts on hover and pressed. The two pink calls to action keep
their own properties and add a white `::before` at 8% opacity on hover and pressed (re-checked
2026-09-26 with pseudo-elements included; the first reading missed it).

Focus matches `:focus-visible` on all three and renders Chrome's own `auto 1px` ring. **No
focus state is recorded**, because none is authored. No disabled state was observed on a
rendered control.

## 15. Motion & Easing

This is the part of BASE worth taking. Eleven tokens: `--duration-hover` `.2s`, and ten easing
curves named for what they animate.

| Token | Curve |
|---|---|
| `--ease-link` | `cubic-bezier(.3, .7, .7, .3)` |
| `--ease-button-hover` | `cubic-bezier(.05, .92, .21, .97)` |
| `--ease-button-icon-hover` | `cubic-bezier(.05, .85, .36, .98)` |
| `--ease-drawer` | `cubic-bezier(.89, .05, .27, 1)` |
| `--ease-fadeIn` | `cubic-bezier(.32, 0, .67, 0)` |
| `--ease-fadeInUp` | `cubic-bezier(0, .55, .45, 1)` |
| `--ease-progressbar` | `cubic-bezier(0, .55, .45, 1)` |
| `--ease-sticky-section` | `cubic-bezier(.02, .38, .26, .97)` |
| `--ease-chart-pie1` | `cubic-bezier(.7, 0, .84, 0)` |
| `--ease-chart-pie2` | `cubic-bezier(.16, 1, .3, 1)` |

**One of them is measurable.** Both pink CTAs compute
`transition: color 0.2s cubic-bezier(0.3, 0.7, 0.7, 0.3)` — that is `--duration-hover` and
`--ease-link`, read off a rendered control rather than off the stylesheet. Two independent
readings of one motion contract, which is rare enough in this catalog to be the reason this
reference is here.

The curves divide into two families: the button and link easings start almost flat and finish
fast, while `--ease-fadeIn` `cubic-bezier(.32, 0, .67, 0)` has both control points on the
floor — an ease that never arrives on its own and is meant to be paired with an opacity
animation that does.

---

**Tier 1 sources:** https://thebase.com/ (live product surface — 80 custom properties read via `getComputedStyle`, three controls measured at rest, hover, pressed and focus, and the rendered `transition` matched against the motion tokens, 2026-09-22); https://binc.jp/about/history (BASE, Inc.'s own corporate history — founding dates and service launches, and a second brand-owned Japanese surface that renders the declared TazuganeGothicStdN face; not cited for tokens)

---
id: zenn
name: Zenn
country: JP
category: developer-tools
homepage: "https://zenn.dev"
primary_color: "#3EA8FF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=zenn.dev&sz=128"
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "Zenn --c-* tokens"
  url: "https://zenn.dev/"
  type: system
  description: "129 custom properties, all Zenn's own: 109 --c-* colours of which roughly half are component-level — eight button variants and four label variants each publish their own bg, fg, border and hover — beside an eight-step radius scale that includes one named after a product concept, an eight-step spacing scale, and three font stacks with the Latin display face scoped to its own token."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    primary: "#3ea8ff"
    primary-hover: "#0f83fd"
    primary-pressed: "#0868ce"
    foreground: "#000000"
    secondary: "#807aff"
    alert: "#ff6868"
    like: "#f76685"
    text-low-priority: "#65717b"
    text-lower-priority: "#8f9faa"
    text-link: "#0f83fd"
    text-link-visited: "#4b4f52"
    canvas: "#ffffff"
    bg-outer: "#edf2f7"
    bg-neutral-lighter: "#f1f5f9"
    bg-neutral-lightest: "#f5f9fc"
    bg-primary: "#e0efff"
    bg-primary-lighter: "#ecf5ff"
    bg-secondary: "#f3f2ff"
    bg-alert: "#fff0f0"
    bg-like: "#ffeaf4"
    border: "#d6e3ed"
    border-lighter: "#e4edf4"
    focus-shadow: "#bfdcff"
    form-input-bg: "#f5f9fc"
    blue-100: "#f0f7ff"
    blue-200: "#ecf5ff"
    blue-350: "#cfe5ff"
    blue-400: "#bfdcff"
    blue-700: "#0868ce"
    gray-100: "#f5f9fc"
    gray-400: "#e4edf4"
    gray-600: "#acbcc7"
    gray-800: "#65717b"
    purple-200: "#f3f2ff"
    purple-300: "#dbdfff"
    red-100: "#fff0f0"
    red-300: "#ffc5c5"
    warn: "#ffa909"
    warn-bg: "#fff6e4"
    button-share-fg: "#8f9faa"
    button-secondary-hover-bg: "#f5fbff"
    button-secondary-grayed-bg: "#f5f9fc"
  typography:
    family: { sans: "Hiragino Kaku Gothic ProN", latin: "Inter", mono: "SFMono-Regular" }
    micro: { size: 10, use: "The smallest rendered step" }
    caption: { size: 11, use: "Metadata under a card; 93 elements" }
    small: { size: 11.5, use: "The second most common size on the page — 308 elements" }
    label: { size: 12, use: "Tags and counts; 267 elements" }
    base: { size: 16, use: "The dominant size — 956 of 2,227 elements, and the primary button's label" }
    lead: { size: 16.8, use: "Card titles" }
    display: { size: 42, use: "The hero, set in Inter; 256 elements" }
  spacing: { s3xs: 4, sxxs: 8, sxs: 16, ssm: 24, smd: 32, slg: 40, sxl: 48, sxxl: 64 }
  rounded: { xxs: 2, xs: 4, sm: 7, md: 10, lg: 14, xl: 20, full: 1584 }
  components:
    button-primary: { type: "button", bg: "#3ea8ff", fg: "#ffffff", border: "1px solid rgba(92,147,187,.15)", radius: 1584, height: "44px", font: "16px / 700", hover: "#0f83fd", pressed: "#0f83fd", focus: "#0f83fd", use: "今すぐはじめる — the filled pill. Hover, pressed and focus are the same #0f83fd fill and nothing else: the component sets outline-style none and supplies no replacement, so focus is indistinguishable from hover." }
    button-secondary: { type: "button", bg: "#ffffff", fg: "rgba(0,0,0,.82)", border: "1px solid #d6e3ed", radius: 1584, height: "40px", font: "14.4px / 400", hover: "#f5fbff", pressed: "#bfdcff", focus: "#bfdcff", use: "…もっとみる — the outline pill. Hover fills #f5fbff; pressed and focus draw an authored 2px #bfdcff box-shadow ring and turn the border #3ea8ff." }
    button-signin: { type: "button", bg: "#3ea8ff", fg: "#ffffff", radius: 1584, height: "36px", font: "15px / 600", hover: "#0f83fd", pressed: "#0f83fd", focus: "#0f83fd", use: "Log in, in the header — the primary variant at a second size, confirming the no-ring behaviour on an independent instance." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: home, kind: product-surface, url: "https://zenn.dev/", inspected: "2026-09-22" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://zenn.dev/", captured: "2026-09-22" }
    - { id: home-verify, kind: product-surface, url: "https://zenn.dev/", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.alert: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bg-alert: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bg-like: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bg-neutral-lighter: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bg-neutral-lightest: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bg-outer: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bg-primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bg-primary-lighter: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.bg-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.blue-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.blue-200: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.blue-350: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.blue-400: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.blue-700: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.border-lighter: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.button-secondary-grayed-bg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.button-secondary-hover-bg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.button-share-fg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.focus-shadow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.form-input-bg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-400: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-600: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.gray-800: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.like: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.primary-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.purple-200: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.purple-300: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.red-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.red-300: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-link: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-link-visited: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-low-priority: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-lower-priority: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.warn: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.warn-bg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-signin.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-signin.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-signin.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-signin.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-signin.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-signin.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-signin.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-signin.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-signin.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-signin.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.rounded.full: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xxs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s3xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.slg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.smd: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.ssm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.sxl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.sxs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.sxxl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.sxxs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.latin: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.mono: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.label.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.label.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.micro.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.micro.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
---
# Design System Inspiration of Zenn (ゼン)

## 1. Visual Theme & Atmosphere

Zenn is a Japanese publishing platform for developers — articles, books and scraps, run by
Classmethod. The surface is white on a pale blue-grey `#edf2f7`, with one saturated blue
`#3ea8ff` doing every action, and it is set at **16px on 956 of 2,227 elements**.

What makes the token set worth reading is **where it stops being abstract**. Roughly half of
the 109 `--c-*` colours are not semantic roles but **components**:

```
--c-button-{primary, secondary, tertiary, quaternary, follow, following, share, danger}
           -{bg, fg, border, hover-bg, …}
--c-label-{primary, secondary, alert, low-priority}
          -{bg, fg, painted-bg, painted-fg}
--c-message-box-{error, info, warn}-{bg, border, icon-bg}
```

Eight button variants, four label variants, three message boxes — each with its own colour
set, written down. Most systems in this catalog stop at `surface` / `text` / `border` and let
the component compose. Zenn composes in the token layer.

### Primary tasks
- Read the feed of articles, books and scraps; open one.
- Sign in, or start writing.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `zenn.dev`. **All 129 properties are Zenn's** —
no framework prefix appears.

### The blue

- **Primary** (`#3ea8ff`) — `--c-general-primary`, `--c-blue-500`, `--c-button-primary-bg`,
  `--c-label-primary-painted-bg`. The fill on every primary control.
- **Primary Hover** (`#0f83fd`) — `--c-blue-600`, `--c-button-primary-hover-bg`, and also
  `--c-text-link-primary`. **The hover fill and the link colour are the same value.**
- **Primary Pressed** (`#0868ce`) — `--c-blue-700`, the ramp's darkest step.
- The blue ramp runs `#f0f7ff` · `#ecf5ff` · `#e0efff` · `#cfe5ff` · **`#bfdcff`** · `#3ea8ff`
  · `#0f83fd` · `#0868ce` — eight steps, and `400` is the focus ring.

### The other accents

- **Secondary** (`#807aff`) — a periwinkle, used for the secondary label; ramp `#f3f2ff`,
  `#dbdfff`.
- **Alert** (`#ff6868`) — `--c-general-alert`; ramp `#fff0f0`, `#ffc5c5`.
- **Like** (`#f76685`) — a pink for the like action alone, with its own `#ffeaf4` wash. A
  product verb with its own colour.
- **Warn** (`#ffa909`) on `#fff6e4` — only inside the message box.

### Ink, and it is black at alpha

**Foreground** (`#000000`) — `--c-form-text`, the one pure-black token, used inside inputs.

Everywhere else the ink is **black at an alpha**, which is why `tokens.colors` carries only the
solid value: `--c-text-body` is **`#000000d1`** — black at 82% — and it is the dominant
rendered colour, **1,471 of 2,227 elements**. Not a grey, and not `#000000` either.
`--c-button-following-bg` and `-following-border` are the same `#000000d1`.
- **Text Low Priority** (`#65717b`) = `--c-gray-800`, 218 elements ·
  **Text Lower Priority** (`#8f9faa`) = `--c-gray-700`, 239 elements.
- **Text Link Visited** (`#4b4f52`) — a warm grey, distinct from both.

### Surfaces and lines

The greys are a ramp too, and it leans blue at every step: `#f5f9fc` · `#f1f5f9` · `#edf2f7` ·
`#e4edf4` · `#d6e3ed` · **`#acbcc7`** · `#8f9faa` · `#65717b`. The last two are the text
priorities above; `#acbcc7` sits between them and is used for nothing this capture measured.

**Canvas** `#ffffff` · **Bg Outer** `#edf2f7` — the page behind the cards ·
**Bg Neutral Lighter** `#f1f5f9` · **Lightest** `#f5f9fc` ·
**Bg Primary** `#e0efff` / **Lighter** `#ecf5ff` · **Bg Secondary** `#f3f2ff` ·
**Bg Alert** `#fff0f0` · **Bg Like** `#ffeaf4` ·
**Border** `#d6e3ed` / **Lighter** `#e4edf4`. **Form Input Bg** `#f5f9fc`.

Three more are alpha values and stay here rather than in the token block:
`--c-bg-backdrop` **`#242d3340`**, a navy at 25% for modal scrims;
`--c-selection-highlight` **`#ffdc0059`**, the yellow behind selected text at 35%, which few
systems tokenise at all; and `--c-message-box-*-border` **`#0000000d`**, black at 5%.

One property is a **raw channel triplet**: `--c-bg-base-rgb` is `255 255 255`, published
beside `--c-bg-base` `#fff` so a consumer can compose an alpha from it. It is the only one.

## 3. Typography Rules

### Three stacks, and the Latin face is scoped

```
--c-font-base        -apple-system, system-ui, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo
--c-font-latin-hero  "Inter", BlinkMacSystemFont, Arial, sans-serif
--c-font-code        "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace
```

**Only Inter loads** — weights 600 and 700, self-hosted at `static.zenn.studio` rather than
from Google Fonts. It is bound to `--font-latin-hero` and renders on **16 elements**: the
display line and nothing else.

Japanese text takes the OS stack. A developer platform that licenses one Latin face for its
hero and lets the system carry the language it is actually written in.

### Scale

Rendered: **16px ×956** · 11.5px ×308 · 12px ×267 · **42px ×256** (the hero) · 11px ×93 ·
16.8px ×73 · 12.5px ×66 · 10px ×52. Weights: 400 ×2,095 · 700 ×121 · 600 ×11.

There is no size token — these are readings. The 11.5px and 12.5px steps are fractional,
which is what a rem scale on a non-16px context produces.

## 4. Component Stylings

Three controls measured, each state on its own page load, then re-verified in a second run
with focus read before the mouse moved.

### The radius is one value, and it is enormous

`--c-rounded-full` is **`99rem`**, which computes to **1584px**. Every control is a full pill.
The scale beneath it is `xxs` 2 · `xs` 4 · `sm` **7** · `md` 10 · `lg` 14 · `xl` 20 — note the
7, which is not a step anyone rounds to — and then one more:

**`--c-rounded-publication: 25%`.** A radius token named after a product concept, for the
avatar of a publication. Like NewsPicks' `unread` and JAL's tier colours, it is the product's
vocabulary reaching the token layer.

It is **not** in `tokens.rounded` above, because it is a percentage and that block holds
numbers. It renders on 31 elements — recorded here, where it can keep its unit.

### Primary pill

`#3ea8ff`, `#ffffff` label, `1px solid rgba(92,147,187,.15)`, 1584px radius, 162×44, 16px/700.
Hover, pressed **and focus** are all `#0f83fd` — the same fill, nothing else.

### Secondary pill

`#ffffff`, `#000000d1` label, `1px solid #d6e3ed`, 1584px radius, 213–251×40, 14.4px/400.
Hover fills **`#f5fbff`** (`--c-button-secondary-hover-bg`). Pressed and focus draw an
**authored `box-shadow: #bfdcff 0 0 0 2px`** and turn the border `#3ea8ff`.

`#bfdcff` is `--c-focus-shadow` exactly, and it is `--c-blue-400`. Token and render agree.

### Focus — the button turns the browser's ring off, and only one variant replaces it

Every measured button computes `outline-style: none` at rest **and under focus**. The primary
variant supplies nothing in its place, so **focus is visually identical to hover**: same fill,
no ring, no shadow. The secondary variant supplies the `#bfdcff` box-shadow.

This is not "the browser's ring was never there". Pressing a real **Tab** key lands on Zenn's
logo link, which computes `outline: rgb(0, 95, 204) auto 1px` — **Chrome's default, alive on
this page.** The buttons specifically suppress it.

Recorded as measured. A keyboard user tabbing to the primary call to action sees the same
thing a mouse user sees on hover, and nothing else.

## 5. Layout Principles

- **Compose in the token layer.** Eight button variants and four label variants are colour
  sets, not recipes for the component to assemble.
- **Painted versus outlined** is the label system's one axis: every label publishes `bg` / `fg`
  and `painted-bg` / `painted-fg`.
- **Everything is a full pill** at 99rem; the 2–20px scale is for cards and inputs.

## 6. Depth & Elevation

**No shadow token exists** and none was observed at rest. The only `box-shadow` on any measured
control is the focus ring on the secondary button. Depth is the `#edf2f7` outer background
against white cards, plus the `#d6e3ed` border.

## 7. Do's and Don'ts

### Do
- Take a button variant whole. `--c-button-secondary-{bg,border,fg,hover-bg}` are published
  together, and the grayed and share variants each have their own full set.
- Use `#bfdcff` at 2px as a box-shadow for focus — that is the one authored ring in the system.
- Compose alpha from `--c-bg-base-rgb` rather than hard-coding a translucent white.

### Don't
- Don't copy the primary button's focus behaviour. It suppresses the browser ring and adds
  nothing; the secondary variant shows what the system can do instead.
- Don't treat `#0f83fd` as only a hover. It is also the link colour.
- Don't set Inter for body text. It is scoped to the Latin hero and does not cover Japanese.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only. `--c-header-height` is `62px`.

## 9. Agent Prompt Guide

### Quick Color Reference
`#3ea8ff` primary · `#0f83fd` hover and links · `#0868ce` pressed · `#807aff` secondary ·
`#ff6868` alert · `#f76685` like · `#ffa909` warn · `#000000d1` body ink · `#65717b` /
`#8f9faa` lower priority · `#ffffff` canvas · `#edf2f7` outer · `#d6e3ed` border ·
`#bfdcff` focus ring · `#ffdc0059` selection

### Example Component Prompts
- "A 44px primary pill: `#3ea8ff`, `#ffffff` 16px/700, fully rounded, hover and pressed
  `#0f83fd`."
- "Its outline twin at 40px: white with a `#d6e3ed` border, `#000000d1` label, hover fill
  `#f5fbff`, focus `box-shadow: #bfdcff 0 0 0 2px` and border `#3ea8ff`."

## 10. Voice & Tone

Not assessed as authored voice. The measured surface is a feed of user-written article titles.

## 11. Brand Narrative

Zenn is where Japanese developers publish, and the interface is built to disappear behind what
they wrote: white cards on a pale blue-grey, one blue for every action, black at 82% for text,
and a hero in Inter that is the only thing on the page with a licensed typeface.

The token set says the same thing from the other side. It does not describe a visual language
in the abstract; it enumerates the things Zenn has — a follow button, a following button, a
share button, a publication avatar, a like — and gives each one its colours.

## 12. Principles

- **Name the component, not just the role.** Eight button variants in the colour layer.
- **Painted or outlined**, for every label.
- **Scope the licensed face.** Inter is the hero's, not the page's.

## 13. States

All three components carry measured hover, pressed and focus, and **nothing was left
unmeasured**. Hover and pressed are the same value on the primary variant; the secondary
separates them, hovering to a fill and pressing to a ring.

**Focus is the finding.** See §4: the buttons set `outline-style: none` and only the secondary
replaces it. Disabled exists as a token — `--c-button-quaternary-disabled-fg` `#8f9faa` — and
was **not observed on a rendered control**, so no disabled component is declared.

## 14. Personas

Not researched. No persona claim is made from a UI capture.

## 15. Motion & Easing

**No motion token exists** among the 129, and no transition value was captured on the three
measured controls.

---

**Tier 1 sources:** https://zenn.dev/ (live product surface — 129 custom properties read via `getComputedStyle`, all Zenn's own; three controls measured at rest, hover, pressed and focus, 2026-09-22); https://zenn.dev/ (an independent second capture verifying the focus finding, including a real Tab keypress that landed on the site logo and rendered Chrome's default `auto 1px` ring, establishing that the buttons suppress a ring that is otherwise available on the page, 2026-09-22)

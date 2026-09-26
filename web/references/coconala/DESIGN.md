---
id: coconala
name: coconala
country: JP
category: consumer-tech
homepage: "https://coconala.com"
primary_color: "#00A38D"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=coconala.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#00a38d"
    brand-hover: "#00866e"
    brand-press: "#006650"
    foreground: "#202a2e"
    text-secondary: "#4d656d"
    label: "#333333"
    link: "#0977e5"
    canvas: "#ffffff"
    surface: "#f3f4f5"
    surface-strong: "#e7eaeb"
    border: "#ced4d6"
    green-200: "#7ac9bb"
    blue-500: "#0098ff"
    orange-500: "#ff9900"
    red-500: "#ff3b30"
  typography:
    family: { sans: "Hiragino Kaku Gothic ProN" }
    body: { size: 14, weight: 400, use: "system Japanese stack — Hiragino Kaku Gothic ProN, Meiryo, Helvetica Neue" }
  rounded: { sm: 4, md: 6 }
  components:
    button-login: { type: "button", bg: "transparent", fg: "#00a38d", border: "#00a38d", radius: 4, height: "32px", padding: "1px 12px", font: "11px / 600", hover: "rgba(0,163,141,0.04)", pressed: "rgba(0,163,141,0.12)", focus: "rgba(0,163,141,0.12)", use: "ログイン in the header — green label with a 50% green border; hover tints the fill 4%, press and focus 12%." }
    button-signup: { type: "button", bg: "#00a38d", fg: "#ffffff", border: "#00a38d", radius: 4, height: "32px", padding: "1px 12px", font: "11px / 600", hover: "#00866e", pressed: "#006650", focus: "#006650", use: "会員登録 in the header — the green fill stepping --green-400 → --green-600 → --green-800." }
    tile-category: { type: "button", bg: "transparent", fg: "#333333", radius: 0, height: "108px", font: "14px / 300", hover: "opacity 0.7", pressed: "fg #363636", use: "One of 19 category tiles (デザイン制作 here) — icon and #333333 label; hover fades the tile to 70% opacity." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://coconala.com/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://coconala.com/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://coconala.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: company, kind: official-doc, url: "https://coconala.co.jp/company/", captured: "2026-09-26" }
    - { id: message, kind: official-doc, url: "https://coconala.co.jp/company/message/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.blue-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-press: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green-200: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.label: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.link: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.orange-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.red-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-login.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.tile-category.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.tile-category.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.tile-category.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.tile-category.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.tile-category.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.tile-category.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.tile-category.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.tile-category.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.tile-category.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of coconala

## 1. Visual Theme & Atmosphere

coconala (ココナラ) is a skills marketplace where individuals sell services — illustration, design,
web work, video, marketing, consulting, fortune-telling, counselling and lessons. It is run by
株式会社ココナラ (coconala Inc.), founded on 4 January 2012 and based in Sakuragaokacho, Shibuya,
Tokyo. The company's stated vision is 「一人ひとりが『自分のストーリー』を生きていく世の中をつくる」 — a
world where each person lives their own story — by making individual knowledge, skills and
experience visible and connecting them to whoever needs them.

The site is light and practical: white and cool grey surfaces **`#f3f4f5`** and **`#e7eaeb`**, a
blue-grey ink **`#202a2e`**, and coconala's green **`#00a38d`** for sign-up and actions. The logo is
multicoloured; the interface keeps to green.

What makes it worth reading:

- **A full named palette.** Nineteen colour ramps as custom properties — `--gray-*`, `--green-*`,
  `--blue-*`, `--lightPurple-*`, `--warmPink-*`, `--violet-*` and more — plus `--_<colour>-opacityN`
  alpha variants.
- **States from the ramp.** The sign-up button steps `--green-400` → `--green-600` → `--green-800`
  on hover and press; the outline button uses the green's alpha variants.
- **A blue-grey neutral ramp.** Its greys lean blue (`#202a2e`, `#4d656d`, `#ced4d6`) rather than
  pure grey.

### Primary tasks
- Search and browse services by category.
- Sign up or log in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `coconala.com`: 336 root custom properties, of which Tailwind's
`--tw-*` (51) and Swiper's variable are excluded. The rest are first-party colour ramps and alpha
variants.

### Green (brand and actions)

- **Brand** (`#00a38d`) — `--green-400`; the sign-up fill and outline button.
- **Brand hover** (`#00866e`) — `--green-600` · **press** (`#006650`) — `--green-800`.
- **Green 200** (`#7ac9bb`) — `--green-200`.

### Ink and surfaces

- **Foreground** (`#202a2e`) — `--gray-900`; page text.
- **Text secondary** (`#4d656d`) — `--gray-600`; the search category label.
- **Label** (`#333333`) — category tile labels.
- **Canvas** (`#ffffff`) · **Surface** (`#f3f4f5`, `--gray-25`) · **Surface strong** (`#e7eaeb`,
  `--gray-50`).
- **Border** (`#ced4d6`) — `--gray-100`; the carousel buttons' border.

### Other ramps

**Link** `#0977e5` (`--blue-700`, the tile anchors' colour) · **Blue 500** `#0098ff` ·
**Orange 500** `#ff9900` · **Red 500** `#ff3b30`.

## 3. Typography Rules

### Font family

The system Japanese stack: `"Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", メイリオ,
Meiryo, "Helvetica Neue", Helvetica, Arial, sans-serif`. No brand text face loads; the only web
font is an icon font.

### Scale

Body and links 14px/400; tile labels 14px/300; header buttons 11px/600.

## 4. Component Stylings

Measured on the home page. The header lives inside web components (`before-login-header`) with
buttons in nested shadow roots; focus was read under a real Tab key, and a hover counted only when
`:hover` matched.

- **Log in** — ログイン: transparent, green `#00a38d` 11px/600, a 50% green border, 4px, 32px. Hover
  tints the fill **`rgba(0,163,141,0.04)`**; press and focus **`0.12`**.
- **Sign up** — 会員登録: **`#00a38d`** fill, white, 4px, 32px. Hover **`#00866e`**, press and focus
  **`#006650`**, the border following the fill.
- **Category tile** — one of 19 (デザイン制作 measured): an icon over a `#333333` 14px/300 label, 108px
  tall. Hover fades the tile to **70% opacity**.

### Radius

4px on header buttons, 6px on the search field, 5–8px on the bottom sign-up bar buttons.

## 5. Layout Principles

- A header with a combined category-and-keyword search, a second navigation row, an orange coupon
  banner, a three-up promotional carousel and a grid of category tiles.

## 6. Depth & Elevation

Flat; the carousel's arrow buttons sit on white with a `#ced4d6` border.

## 7. Do's and Don'ts

### Do
- Use `#00a38d` for actions, with `#00866e` hover and `#006650` press.
- Pull neutrals from the blue-grey ramp (`#202a2e`, `#4d656d`, `#ced4d6`).
- Tint outline buttons with the green's alpha variants on hover and press.

### Don't
- Don't use the logo's other colours for interface actions; actions are green.
- Don't use pure grey neutrals.
- Don't count Tailwind variables as coconala tokens.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#00a38d` green · `#00866e` hover · `#006650` press · `#202a2e` ink · `#4d656d` secondary ·
`#f3f4f5` / `#e7eaeb` surfaces · `#ced4d6` border · `#0977e5` link blue

### Example Component Prompts
- "A 32px green `#00a38d` button, white 11px/600, 4px radius; hover `#00866e`, press `#006650`."
- "An outline twin: green label and 50% green border, filling to 4% green on hover and 12% on
  press."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

coconala's vision is for each person to live their own story, made practical as a marketplace for
individual skills. The interface is a calm frame of blue-greys around one green action colour; the
colour comes from the sellers' work and the promotions.

## 12. Principles

- **One action colour.** Green, stepped along its own ramp.
- **Neutrals with a hue.** Blue-leaning greys.
- **A palette as infrastructure.** Nineteen named ramps with alpha variants.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: the sign-up fill darkens to `#00866e`; the log-in button tints 4%; tiles fade to 70%. Press:
`#006650` and a 12% tint. Focus: the pressed fill plus the browser's ring.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://coconala.com/ (live homepage — 336 root custom properties read via `getComputedStyle`, Tailwind and Swiper excluded; three components measured at rest, hover, pressed and focus, the header inside nested shadow roots, captured 2026-09-26); https://coconala.com/zz-this-does-not-exist (nonsense-path control — HTTP 404, read 2026-09-26); https://coconala.co.jp/company/ (会社概要 — 株式会社ココナラ, coconala Inc., founded 2012-01-04, Sakuragaokacho, Shibuya, Tokyo, read 2026-09-26); https://coconala.co.jp/company/message/ (代表挨拶 — the vision 「一人ひとりが『自分のストーリー』を生きていく世の中をつくる」, read 2026-09-26)

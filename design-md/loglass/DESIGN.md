---
id: loglass
name: Loglass
country: JP
category: saas
homepage: "https://loglass.jp"
primary_color: "#2352C8"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=loglass.jp&sz=128"
verified: "2026-09-23"
added: "2026-09-23"
omd: "0.1"
ds:
  name: "Loglass web tokens"
  url: "https://loglass.jp/"
  type: system
  description: "About 225 brand custom properties on the product site, beside Tailwind v4's own. Six ten-step colour ramps under a role layer — bg, border, surface, text, cta — plus an eleven-step categorical chart palette for a management-accounting product, 22 shadows named for the component that casts them, and campaign namespaces for landing pages and the company's annual conference."
tokens:
  source: live-extract
  extracted: "2026-09-23"
  colors:
    primary: "#2352c8"
    primary-hover: "#1337a1"
    primary-deep: "#062073"
    primary-surface: "#eef5ff"
    primary-tint: "#f8fafd"
    chart-blue-light: "#d5e4fb"
    foreground: "#171725"
    text-normal: "#3f3f4a"
    text-secondary: "#6c6c7f"
    text-placeholder: "#9090a1"
    disabled: "#b5b5be"
    border: "#d5d5dc"
    muted: "#f1f1f5"
    surface: "#fafafb"
    canvas: "#ffffff"
    night: "#000c2a"
    accent: "#e77623"
    accent-hover: "#c3540a"
    warning-surface: "#fff2de"
    info: "#026572"
    info-surface: "#f0f7ff"
    success: "#108a10"
    success-surface: "#eafbe5"
    danger: "#d3403a"
    danger-surface: "#ffede9"
    chart-turquoise: "#29a4b3"
    chart-green: "#37ac32"
    chart-red: "#ee6e66"
  typography:
    family: { sans: "Noto Sans JP" }
    leading: { tight: 1.3, snug: 1.4, normal: 1.7, relaxed: 1.8 }
    xs: { size: 12, use: "--text-xs" }
    sm: { size: 14, use: "--text-sm; header buttons and navigation" }
    base: { size: 16, use: "--text-base" }
    lg: { size: 18, use: "--text-lg" }
    xl: { size: 20, use: "--text-xl" }
    2xl: { size: 24, use: "--text-2xl" }
    3xl: { size: 32, use: "--text-3xl" }
    4xl: { size: 40, use: "--text-4xl" }
    5xl: { size: 48, use: "--text-5xl; the home page h1" }
    6xl: { size: 60, use: "--text-6xl" }
    8xl: { size: 96, use: "--text-8xl, the largest step" }
  rounded: { sm: 4, md: 8, xl: 12, 2xl: 16, full: 9999 }
  components:
    button-primary: { type: "button", bg: "#2352c8", fg: "#ffffff", radius: 4, height: "40px", padding: "6px 12px", font: "14px / 700", shadow: "rgba(0,0,0,0.1) 0 1px 3px, rgba(0,0,0,0.1) 0 1px 2px -1px", hover: "#1337a1", pressed: "#1337a1", use: "資料ダウンロード in the header — --color-cta-primary, deepening to --color-cta-primary-hover. Focus is the browser's ring." }
    button-secondary: { type: "button", bg: "transparent", fg: "#171725", border: "#d5d5dc", radius: 4, height: "40px", padding: "6px 12px", font: "14px / 700", hover: "#f1f1f5, border #b5b5be", pressed: "#f1f1f5, border #b5b5be", use: "お問い合わせ — an outlined twin that fills with --color-neutral-2 and darkens its border on hover." }
    card-cta: { type: "button", bg: "#ffffff", fg: "#171725", radius: 4, shadow: "0 0 0 3px rgba(255,255,255,0.5)", hover: "ring 0 0 0 3px #e77623", pressed: "ring 0 0 0 3px #e77623", use: "無料デモを体験する on the hero — a white card with a translucent 3px ring (--shadow-cta-card) that turns solid orange #e77623 on hover (--shadow-cta-card-hover)." }
    link-nav: { type: "button", bg: "transparent", fg: "#171725", height: "44px", padding: "0 8px", font: "14px / 600", hover: "fg #2352c8", pressed: "fg #2352c8", use: "Header navigation (サービス一覧 and siblings). The label turns brand blue on hover — the only place the link colour appears at rest-to-hover." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-23"
  surfaces:
    - { id: home, kind: product-surface, url: "https://loglass.jp/", inspected: "2026-09-23" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://loglass.jp/", captured: "2026-09-23" }
    - { id: control-404, kind: product-surface, url: "https://loglass.jp/zz-this-does-not-exist", captured: "2026-09-23" }
    - { id: corp-company, kind: official-doc, url: "https://loglass.co.jp/company", captured: "2026-09-23" }
    - { id: corp-about, kind: official-doc, url: "https://loglass.co.jp/about", captured: "2026-09-23" }
  conflicts: []
  claims:
    tokens.colors.accent: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.accent-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.chart-blue-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.chart-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.chart-red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.chart-turquoise: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.danger: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.danger-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.info: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.info-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.night: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-tint: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.success-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.text-normal: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.text-placeholder: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.warning-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.shadow: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-cta.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-cta.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-cta.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-cta.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-cta.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-cta.shadow: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-cta.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-cta.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.rounded.2xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.rounded.full: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.2xl.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.2xl.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.3xl.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.3xl.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.4xl.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.4xl.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.5xl.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.5xl.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.6xl.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.6xl.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.8xl.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.8xl.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.base.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.base.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.leading.normal: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.leading.relaxed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.leading.snug: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.leading.tight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.lg.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.lg.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.sm.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.sm.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.xl.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.xl.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.xs.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.xs.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
---
# Design System Inspiration of Loglass (ログラス)

## 1. Visual Theme & Atmosphere

Loglass makes management-accounting software — budgeting, forecast-versus-actual and planning for
finance teams that otherwise live in spreadsheets. The company, 株式会社ログラス, was founded on
30 May 2019, and states its mission in a sentence that picks a fight with its own field:
「管理会計100年の歴史に終止符を打ち、新しいデータ経営の在り方を生み出す。」 — end a hundred years
of management accounting as it has been done, and create a new way to run a company on data.

The product's name simplified on the way to market. It went into closed release in April 2020 as
「コーポレート・インテリジェンス・クラウド・ログラス」 — Corporate Intelligence Cloud Loglass —
already paid for by more than ten companies, and on 8 July 2020 it launched publicly as, simply,
**Loglass**. Today the flagship is Loglass 経営管理, with siblings for workforce planning, IT
investment and capital expenditure.

The site looks like the finance tool it sells: white and cool-gray surfaces, a near-black ink
**`#171725`** on 588 elements, one confident blue **`#2352c8`** on every filled call to action,
and orange **`#e77623`** held back for accent — most visibly as a ring that snaps around the demo
card when you point at it. Buttons are square-shouldered at 4px while badges and pills go fully
round.

What makes it worth reading:

- **A role layer over the ramps.** `--color-cta-primary`, `--color-text-link`,
  `--color-surface-warning` — the page never asks for "blue 8", it asks for a job.
- **A chart palette as tokens.** `--color-chart-categorical-1` to `-11`, alternating strong and
  pale steps of five hues, for a product whose output is charts.
- **Shadows named for what casts them** — `--shadow-cta-card`, `--shadow-resource-card`,
  `--shadow-ai-hero` — 22 of them.

### Primary tasks
- Download the product overview; book a demo; contact sales.
- Browse the product suite and solutions.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `loglass.jp`: 309 custom properties. **Tailwind v4's are
excluded** — 69 `--tw-*` runtime variables, `--default-*`, the stock `--ease-*` curves,
`--font-sans`, the stock `--container-3xl/4xl/6xl/7xl`, `--spacing`, `--blur-sm` and
`--aspect-video`. About 225 remain, Loglass's own.

Many of Loglass's theme tokens are declared twice: in Tailwind's `@layer theme` as a placeholder
that refers to itself (`--text-xs: var(--text-xs)`), and again in an unlayered `:root` rule that
holds the value and wins the cascade. The values below are the resolved ones.

### Blue — the action

Ramp `--color-blue-1` … `-10`. The steps in use:

- **Primary** (`#2352c8`) — `blue-8`. `--color-cta-primary`, `--color-bg-brand`,
  `--color-text-brand` and `--color-text-link`. Every filled button on the home page (13
  elements).
- **Primary Hover** (`#1337a1`) — `blue-9`, `--color-cta-primary-hover` and `--color-text-active`.
- **Primary Deep** (`#062073`) — `blue-10`.
- **Primary Surface** (`#eef5ff`) — `blue-2`, `--color-surface-active` and `--color-bg-blue-lighter`.
- **Primary Tint** (`#f8fafd`) — `blue-1`, `--color-bg-blue-light`.
- **Chart Blue Light** (`#d5e4fb`) — `blue-3`, the second chart step.

### Neutral — ink and surface

Ramp `--color-neutral-0` … `-10`, cool and slightly violet.

- **Foreground** (`#171725`) — `neutral-10`, `--color-text-primary` and `--color-bg-primary`. Body
  text, by a wide margin.
- **Text Normal** (`#3f3f4a`) — `neutral-9`, `--color-text-normal`.
- **Text Secondary** (`#6c6c7f`) — `neutral-7`, `--color-text-secondary` and `-annotation`
  (112 elements).
- **Text Placeholder** (`#9090a1`) — `neutral-6`.
- **Disabled** (`#b5b5be`) — `neutral-5`, `--color-text-disabled`, `--color-surface-disabled` and
  `--color-border-hard`.
- **Border** (`#d5d5dc`) — `neutral-4`, `--color-border-medium` and `-divider`.
- **Muted** (`#f1f1f5`) — `neutral-2`, `--color-bg-muted`, `--color-border-soft` and
  `--color-surface-secondary`; the second most-painted background (36).
- **Surface** (`#fafafb`) — `neutral-1`, `--color-bg-surface`.
- **Canvas** (`#ffffff`) — `neutral-0`.
- **Night** (`#000c2a`) — `--color-darkblue-10`, the dark hero ground.

### Orange — the accent

- **Accent** (`#e77623`) — `orange-6`, `--color-cta-accent`. Seen once as a fill; mostly it is the
  3px hover ring on the demo card.
- **Accent Hover** (`#c3540a`) — `orange-7`, `--color-cta-accent-hover`, and also
  `--color-text-warning`.
- **Warning Surface** (`#fff2de`) — `orange-2`, `--color-surface-warning`.

### Status

**Info** `#026572` (`--color-text-info`, turquoise-8) on **`#f0f7ff`** (`--color-surface-info`) ·
**Success** `#108a10` (green-7) on **`#eafbe5`** (green-2) · **Danger** `#d3403a`
(`--color-text-error` and `--color-border-error`, red-7) on **`#ffede9`** (red-2).

### Chart

`--color-chart-categorical-1` … `-11`: blue-8 `#2352c8`, blue-3 `#d5e4fb`, turquoise-6
**`#29a4b3`**, turquoise-3 `#bfebef`, green-6 **`#37ac32`**, green-3 `#cdecc6`, orange-6
`#e77623`, orange-3 `#ffdebf`, red-6 **`#ee6e66`**, red-3 `#ffdbd4`, neutral-5 `#b5b5be`. Each hue
appears as a strong step and a pale step, so paired series read as related.

### Campaign namespaces

- **`-summit`** — the company's annual 経営企画サミット (Loglass Keiei Kikaku Summit):
  `--color-summit-cta-start` `#ff1fb8` · `-cta-end` `#ff0004` · `-keynote` `#ef59d6` · `-focus`
  `#46b3ed` · `-solution` `#52c57e`. They appear on the summit's own page, inside gradient-filled
  headline text, not as flat fills.
- **`-lp`** — `--color-orange-lp` `#fa7d19`, `--color-red-lp` `#ff4b4b`, `--color-gold-lp` `#cfb946`
  and others, with `--shadow-lp-*` and `--gradient-lp-*` beside them; **where they render was not
  confirmed**.
- **`-ai`** — `--color-blue-ai-light` `#67bcff` with `--shadow-ai-block` (rendered twice on the home
  page) and `--shadow-ai-hero`.

None of these is recorded as a brand token.

## 3. Typography Rules

### Font family

**Noto Sans JP is the only loaded webfont** — 400, 500, 700 and 900, self-hosted from
`/_next/static/media/` — and the body and buttons compute to it.

The token set declares more than renders:

- `--font-heading` names **Montserrat**, and `@font-face` rules for it ship in the stylesheet, but
  **it did not load** on the home page. The home page `<h1>` computes to the
  `--font-yugothic` stack — `YuGothic, 游ゴシック体, 游ゴシック, "Yu Gothic"` — an operating-system
  face, not recorded as a brand font.
- `--font-accent` names **Libre Baskerville**; not loaded.
- `--font-mono` resolves to `"avenir-next-lt-pro","Avenir Next",sans-serif` — a sans, under a
  monospace name; not loaded.

Only Noto Sans JP is a font fact here. The others are declared names.

### Scale

`--text-xs` 12 · `sm` 14 · `base` 16 · `lg` 18 · `xl` 20 · `2xl` 24 · `3xl` 32 · `4xl` 40 ·
`5xl` 48 (the home page h1) · `6xl` 60 · `8xl` 96. Leading is set in percentages —
`--leading-tight` 130% · `-snug` 140% · `-normal` 170% · `-relaxed` 180% — generous for Japanese
text. Tracking is small and positive: `--tracking-tight` 0.24px, `-normal` 0.28px, `-wide`
0.36px, `-wider` 0.4px. Weights are tokenised 300 to 900.

## 4. Component Stylings

Four controls declared, every state on its own page load, focus read before the mouse moved.

- **Primary** — `#2352c8`, white 14px/700, 4px radius, 40px, `6px 12px`, a two-layer hairline
  shadow `rgba(0,0,0,0.1) 0 1px 3px, rgba(0,0,0,0.1) 0 1px 2px -1px`. Hover and press deepen it to
  **`#1337a1`**.
- **Secondary** — transparent with a `#d5d5dc` border and `#171725` label. Hover fills
  **`#f1f1f5`** and darkens the border to **`#b5b5be`**.
- **Demo card** — `#ffffff` with a translucent white 3px ring (`--shadow-cta-card`,
  `0 0 0 3px #ffffff80`). On hover the ring turns **solid `#e77623`** — `--shadow-cta-card-hover`,
  matched exactly.
- **Navigation link** — `#171725` 14px/600, 44px. Hover turns the label **`#2352c8`**. The link
  colour has no resting use on the home page; this is where it shows.

Two further controls were measured and are not declared: a white 詳しく見る link on the dark hero,
which changes none of the seven measured values on hover, and a white announcement-bar link that
fades to opacity 0.9.

### Focus is the browser's

Every measured control shows `outline: rgb(0, 95, 204) auto 1px` under `:focus-visible` —
Chrome's default ring. No focus colour is recorded.

### Radius

`--radius-sm` 4 · `-md` 8 · `-lg` 8 (the same value) · `-xl` 12 · `-2xl` 16 · `-full` 9999.
Rendered: **9999px** ×52 (pills, badges, avatars) · **4px** ×28 (buttons) · **8px** ×24 ·
`8px 8px 0 0` ×6 (card headers) · 12px ×3. A **6px** radius appears 9 times and is not on the
scale.

## 5. Layout Principles

- `--container-max`, `--container-header` and `--container-padding` sit beside Tailwind's stock
  container sizes.
- `--btn-section-list-height` is a single-purpose layout token.
- Radius splits by role: buttons square-ish at 4px, content cards 8px, anything that is a label or a
  person fully round.

## 6. Depth & Elevation

22 shadow tokens. The generic `--shadow-sm/md/lg/xl` are not seen rendered on the home page; the
named ones are:

- `--shadow-floating` `0 0 32px 0 #1717252e, 0 0 8px 0 #17172514` — the most rendered (10), centred.
- `--shadow-card` `0 10px 30px -20px #17172533, 0 16px 30px -30px #17172533` (9) — two long, tight
  shadows cast down, tinted with the ink rather than black; `--shadow-card-hover` lengthens them
  and adds a 1px ink hairline.
- `--shadow-cta-card` / `-hover` — the 3px white and orange rings above.
- `--shadow-ai-block` `0 5px 50px -10px var(--color-blue-8)` — a blue glow.

Shadows are tinted with `#171725` or the brand blue, not with black, apart from the four generic
ones and the header button's hairline.

## 7. Do's and Don'ts

### Do
- Ask for a role — `--color-cta-primary`, `--color-text-secondary` — not a ramp step.
- Use `#2352c8` for filled actions and `#e77623` sparingly, as an accent or a hover ring.
- Tint shadows with the ink `#171725`.
- Use the categorical chart palette in its order.

### Don't
- Don't count `--tw-*`, `--default-*` or the stock containers as Loglass's.
- Don't render headings in Montserrat on the strength of `--font-heading`; it did not load.
- Don't read `--font-mono` as a monospace face.
- Don't treat `-summit` or `-lp` colours as the product palette.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#2352c8` action · `#1337a1` action hover · `#171725` ink · `#3f3f4a` / `#6c6c7f` / `#9090a1`
text steps · `#d5d5dc` borders · `#f1f1f5` / `#fafafb` / `#ffffff` surfaces · `#e77623` accent ·
`#026572` info · `#108a10` success · `#d3403a` danger · `#000c2a` night

### Example Component Prompts
- "A 40px button: `#2352c8`, white 14px/700, 4px radius, `6px 12px`; hover `#1337a1`."
- "A white card with a `0 0 0 3px #ffffff80` ring that turns `0 0 0 3px #e77623` on hover."

## 10. Voice & Tone

Not assessed as authored voice. 3,010 characters on the measured surface.

## 11. Brand Narrative

Loglass sells an argument against the spreadsheet — that a century-old discipline has been run on
tools not built for it. The product's first name said too much, and within three months it was cut
to one word. The site carries the same economy: a single blue for doing, an orange kept for the
moment of attention, and an ink that is nearly black but not quite.

Under the surface the token set is organised the way a finance team would want its own data
organised — by role, with the raw scales hidden behind names that say what each value is for, and
with the charts, which are the product's output, given their own palette.

## 12. Principles

- **Name the job.** Every colour in use reaches the page through a role token.
- **One blue for action, one orange for attention.**
- **Charts are first-class.** Eleven categorical steps, in order.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Four components declared, every state measured. The primary deepens to `#1337a1`; the secondary
fills `#f1f1f5` with a `#b5b5be` border; the demo card's ring turns `#e77623`; navigation turns
`#2352c8`. Focus is the browser's `auto` ring throughout. No disabled state was observed;
`--color-text-disabled` / `--color-surface-disabled` `#b5b5be` exist.

## 15. Motion & Easing

Three `--transition-*` tokens are Loglass's; the two `--ease-*` curves are Tailwind's stock.
Durations on the measured controls were not recorded.

---

**Tier 1 sources:** https://loglass.jp/ (live product site — 309 custom properties read via `getComputedStyle`, Tailwind v4 excluded; six controls measured at rest, hover, pressed and focus, four declared; only Noto Sans JP loaded, captured 2026-09-23); https://loglass.jp/zz-this-does-not-exist (nonsense-path control — a real HTTP 404 with a 400-character body, establishing the host is not a catch-all, captured 2026-09-23); https://loglass.co.jp/company (会社概要 — 設立 2019年5月30日, read 2026-09-23); https://loglass.co.jp/about (mission 「管理会計100年の歴史に終止符を打ち、新しいデータ経営の在り方を生み出す。」, read 2026-09-23)

**Regional sources:** https://ascii.jp/elem/000/004/019/4019188/ (ASCII STARTUP, 2020-07-08 — public launch of Loglass after an April 2020 closed release as 「コーポレート・インテリジェンス・クラウド・ログラス」 with more than ten paying companies); https://prtimes.jp/main/html/rd/p/000000007.000052025.html (Loglass release on PR TIMES — public launch of Loglass together with an ¥80M seed round)

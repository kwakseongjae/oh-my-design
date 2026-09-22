---
id: wps
name: WPS Office
country: CN
category: productivity
homepage: "https://www.wps.cn"
primary_color: "#1F69E0"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wps.cn&sz=128"
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "Kingsoft KD tokens (--kd-*) + WPS page tokens (--wps-*)"
  url: "https://www.wps.cn/"
  type: system
  description: "439 custom properties on the product surface: 293 --kd-* forming Kingsoft's portable system — a ten-step brand ramp, five semantic families each with normal/hover/pressed/light, alpha ladders for text and rules, a seven-step radius scale, an eight-step type scale with a stated line-height rule and a z-index scale — plus 146 --wps-* that theme it and carry this page's own layout constants."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    brand: "#1f69e0"
    brand-hover: "#458bfa"
    brand-pressed: "#1e5fc7"
    brand-light: "#edf4ff"
    brand-deep: "#0a306c"
    danger: "#dd3332"
    danger-hover: "#c42e2d"
    danger-pressed: "#b02928"
    success: "#418f1f"
    warning: "#e2651a"
    ai: "#8350f2"
    ai-hover: "#9c75f0"
    ai-pressed: "#682aef"
    ai-light: "#f4effd"
    foreground: "#0d0d0d"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    surface-base: "#eeeeee"
    frame: "#e6e6e6"
  typography:
    micro: { size: 10, use: "--kd-font-size-extra-small; the smallest published step" }
    small: { size: 12, use: "--kd-font-size-small; metadata and fine print" }
    base: { size: 14, use: "--kd-font-size-base; the system default and the dropdown label" }
    medium: { size: 16, use: "--kd-font-size-middle; the header nav items" }
    large: { size: 18, use: "--kd-font-size-large; all three hero buttons" }
    xlarge: { size: 20, use: "--kd-font-size-extra-large" }
    xxlarge: { size: 24, use: "--kd-font-size-xx-large" }
    xxxlarge: { size: 28, use: "--kd-font-size-xxx-large" }
    hero: { size: 62, use: "--wps-font-size-hero; the landing headline, page-level not system" }
  rounded: { none: 0, xs: 2, sm: 4, md: 6, lg: 8, xl: 12, circle: 999 }
  components:
    button-primary: { type: "button", bg: "#dd3332", fg: "#ffffff", radius: 40, padding: "0 15px", font: "18px / 600", hover: "#c42e2d", pressed: "#b02928", focus: "#dd3332", use: "立即下载 (Download now) — the headline call to action, 193×54. Painted from the error ramp, not the brand ramp. Focus matches :focus-visible and changes nothing." }
    button-secondary: { type: "button", bg: "transparent", fg: "rgba(13,13,13,.9)", border: "1px solid rgba(13,13,13,.48)", radius: 40, padding: "0 15px", font: "18px / 600", hover: "rgba(13,13,13,.06)", pressed: "rgba(13,13,13,.1)", focus: "transparent", use: "在线使用 (Use online) — the outline twin of the headline button, same 193×54 and same 40px radius. Every value is a named token: the border is line-heavy, the hover and pressed fills are bg-hover and bg-pressed." }
    button-ghost: { type: "button", bg: "transparent", fg: "rgba(13,13,13,.9)", radius: 6, padding: "0 11px", font: "16px / 400", hover: "rgba(13,13,13,.06)", pressed: "rgba(13,13,13,.06)", focus: "transparent", use: "Header nav item (产品), 72×30. Hover and pressed are the same 6% wash — the nav does not deepen on press." }
    button-light: { type: "button", bg: "transparent", fg: "rgba(13,13,13,.66)", radius: 6, padding: "0 11px 0 15px", font: "14px / 400", hover: "rgba(13,13,13,.9)", pressed: "rgba(13,13,13,.06)", focus: "transparent", use: "更多下载 (More downloads) dropdown trigger, 100×32. The only control that moves its label rather than its fill on hover: text-secondary to text-primary, then a 6% wash on press." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.wps.cn/", inspected: "2026-09-22" }
    - { id: kdocs, kind: product-surface, url: "https://www.kdocs.cn/", inspected: "2026-09-22" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.wps.cn/", captured: "2026-09-22" }
    - { id: kdocs-live, kind: product-surface, url: "https://www.kdocs.cn/", captured: "2026-09-22" }
    - { id: about-us, kind: official-doc, url: "https://www.wps.com/about-us/", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.ai: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.ai-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.ai-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.ai-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.danger: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.danger-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.danger-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.frame: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface-base: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-ghost.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-ghost.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-ghost.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-ghost.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-ghost.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-ghost.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-ghost.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-ghost.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-ghost.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-ghost.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-light.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-light.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-light.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-light.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-light.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-light.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-light.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-light.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-light.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-light.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.rounded.circle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.none: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.hero.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.hero.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.large.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.large.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.medium.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.medium.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.micro.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.micro.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xlarge.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xlarge.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxlarge.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxlarge.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxxlarge.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxxlarge.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
---
# Design System Inspiration of WPS Office (金山办公)

## 1. Visual Theme & Atmosphere

WPS Office is Kingsoft's office suite — Writer, Spreadsheet, Presentation and PDF — and by
its own account it was founded in 1988, employs over 3,000 people, and serves more than 600
million monthly active users across 220+ countries in 46 languages. It is the first
productivity reference from China in this catalog.

The landing surface is **white, quiet and almost entirely type**, and what it hides is a
complete design system. 439 custom properties resolve on the page. 293 of them carry the
`--kd-` prefix — Kingsoft's own portable system — and 146 carry `--wps-`, which themes it and
adds this page's layout constants.

That split is the interesting part. **`--kd-*` is a system; `--wps-*` is a page.** The first
publishes a ten-step brand ramp, five semantic colour families, alpha ladders, a radius scale,
a type scale with a stated line-height rule and a z-index scale. The second sets
`--wps-hero-wps-cover-crop-height: 458px`. One is meant to travel and one is not, and only the
first is recorded here as a system.

**The headline button is red, not blue.** `#dd3332` is the error colour, and it fills the
largest call to action on the page. The brand blue sits on the button beside it.

### Primary tasks
- Download the desktop suite, or open the documents in the browser.
- Reach the product, pricing and enterprise pages from one header.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `www.wps.cn`.

### Brand — a ten-step ramp plus four semantic stops

The ramp runs `--kd-color-brand-1` `#edf4ff` through `-7` `#1e5fc7` to `-10` `#0a306c`,
published as bare `r,g,b` triples so a consumer can compose them at any alpha.

- **Brand** (`#1f69e0`) — `--kd-color-brand-normal`, the resting blue.
- **Brand Hover** (`#458bfa`) — lighter, not darker. WPS brightens on hover.
- **Brand Pressed** (`#1e5fc7`) — and this is also `--wps-color-primary`, the value the page
  itself uses for its blue button. The page's blue is the system's *pressed* step.
- **Brand Light** (`#edf4ff`) · **Brand Deep** (`#0a306c`) — the ends of the ramp.
- Disabled is the brand at 30%: `rgba(31,105,224,0.3)`.

### Semantic families — each with four stops

`error` · `success` · `warning` · `ai`, each published as normal / hover / pressed / light.

- **Danger** (`#dd3332`) → hover **`#c42e2d`** → pressed **`#b02928`**. Also
  `--wps-color-danger*`, and — measured on the rendered download button — exactly what paints.
- **Success** (`#418f1f`) · **Warning** (`#e2651a`).
- **AI** (`#8350f2`) → hover **`#9c75f0`** → pressed **`#682aef`** → light **`#f4effd`**.
  A fifth semantic family for AI features, with its own text, line, background and gradient
  tokens (`--kd-color-ai-light-gradient` is `linear-gradient(90deg,#ede1fd,#e0d4fa)`).
  A colour family for a capability rather than for a status is not something the other
  references in this catalog publish.

### Ink and rules — alpha ladders, not greys

Everything neutral is `13, 13, 13` at an alpha:

- Text: `.9` primary · `.66` secondary · `.46` tertiary · `.27` disabled.
- Rules: `.06` light · `.12` regular · `.24` medium · `.48` heavy.

The solid ink underneath is **`#0d0d0d`**, and it is the only neutral value in the set; the
four text steps and the four rule steps are all that colour at different opacities. A
consumer that flattens them to grey hex loses the compositing over the page's gradients.

### Surface

**Canvas** (`#ffffff`) — `--kd-color-background-top`, `-middle` and `-bottom` are all white.
**Surface** (`#f5f5f5`) is `background-plate`, **Surface Base** (`#eeeeee`) is
`background-base`, and **Frame** (`#e6e6e6`) is `background-frame` — three steps of grey for
plate, page and chrome.

## 3. Typography Rules

### Font Family

**Absent.** `--kd-font-family` and `--wps-font-family` are declared, and both resolve to the
same stack: `"PingFang SC", "Arial", "SF Pro KR", "SF Pro Text", "SF Pro Icons",
"Apple Gothic", "HY Gulim", "MalgunGothic", "HY Dotum", "Lexi Gulim", "Helvetica Neue",
"Helvetica", sans-serif`. Every entry is an operating-system face. No webfont loaded on the
measured page. The token exists; the brand face does not, so `family` stays empty.

The stack is worth reading anyway — it names Korean system faces (`SF Pro KR`, `Apple Gothic`,
`MalgunGothic`, `HY Gulim`) before the Latin fallbacks, which is a multi-market office suite's
font stack rather than a Chinese-only one.

### Scale

**Eight published steps** — `--kd-font-size-extra-small` through `-xxx-large`: **10 · 12 · 14 ·
16 · 18 · 20 · 24 · 28**. The page adds one more of its own, `--wps-font-size-hero` at
**62px**, plus a set of responsive hero variants (48 / 40 / 36 / 38px at narrower widths).

**Line height is a rule, not a list.** `--kd-font-line-height-base` is `calc(14px + 8px)`,
`-large` is `calc(18px + 12px)`, `-xxx-large` is `calc(28px + 12px)`. Small steps add 8px of
leading and large steps add 12px, written as arithmetic in the token rather than resolved.

Weights: `--kd-font-weight-regular` 400 and `-bold` 600. Two, and the page uses exactly those
two — a census of the rendered text found 400 on 29 elements, 600 on 7, and one 300.

Rendered sizes on the landing surface: 14px (19 elements) · 16px (11) · 18px (4) · 48px (2) ·
32px (1).

## 4. Component Stylings

Five controls were measured, all `kdv-button` — Kingsoft's own component class. Focus was read
for every control before the mouse moved at all, with each control pinned by element handle.

### Primary — 立即下载

`#dd3332` fill, `#ffffff` text, **40px radius**, 193×54, 18px/600, `0 15px` padding, no
shadow. Hover **`#c42e2d`**, pressed **`#b02928`**.

**Token and render agree on all three steps.** `--wps-color-danger`, `-danger-hover` and
`-danger-active` are `#dd3332`, `#c42e2d`, `#b02928`; the rendered button is `rgb(221,51,50)`,
`rgb(196,46,45)`, `rgb(176,41,40)`. Three independent pairs, no drift.

### Secondary — 在线使用

Transparent at rest with a `1px solid rgba(13,13,13,.48)` border and `rgba(13,13,13,.9)` text;
same 193×54 and same 40px radius as the primary. Hover fills `rgba(13,13,13,.06)`, pressed
deepens to `rgba(13,13,13,.1)`.

Every one of those is a named token — `--kd-color-line-heavy`, `--kd-color-text-primary`,
`--wps-color-bg-hover`, `--wps-color-bg-pressed`. The outline button is assembled entirely
out of the alpha ladders in §2.

### Ghost — header nav (产品)

Transparent, `rgba(13,13,13,.9)` text, **6px radius** (`--kd-border-radius-middle`), 72×30,
16px/400. Hover and pressed are the **same** 6% wash; the nav does not deepen on press.

### Light — 更多下载

Transparent, `rgba(13,13,13,.66)` text (text-secondary), 6px radius, 100×32, 14px/400. The
only control that moves its **label** on hover rather than its fill: text goes to
`rgba(13,13,13,.9)`, and only on press does a 6% wash appear.

### The blue button — measured, deliberately not declared

A third hero button, 了解更多, paints `#1e5fc7` with a matching border, same 193×54 and same
40px radius and 18px/600. **It is not declared as a component**: it sits inside the hero
carousel, another layer covers it, and hover could not be measured on two separate attempts —
once with raw pointer moves and once through the repo's own probe, which reported the state as
unmeasured rather than absent. Its rest and focus are real readings; a control whose hover
nobody has seen does not become a component here.

### Focus

**All five match `:focus-visible` and change nothing.** `outline-style` is `none` before and
after, so WPS overrides the browser's own ring and draws no replacement. Recorded as measured;
it is not a pattern to copy.

### Radius

A seven-step scale: `none` 0 · `extra-small` 2 · `small` 4 · `middle` 6 · `large` 8 ·
`extra-large` 12 · `circle` 999. The rendered page uses **6px** most (10 elements), then the
40px hero pills (5), 4px (3) and 8px (1) — so the buttons at 40px are a page decision, not a
scale step.

## 5. Layout Principles

- **Two token layers, and they are not the same thing.** `--kd-*` travels; `--wps-*` is this
  page. Taking `--wps-hero-wps-cover-crop-height` as a design token would be a mistake.
- **Neutrals are one ink at eight opacities**, four for text and four for rules.
- **The error colour carries the primary action**, with the brand blue beside it.

## 6. Depth & Elevation

**No shadow was observed** on any of the five measured controls, and no `--kd-shadow-*` token
exists. Separation comes from the rule ladder and from the three background greys. There is a
full z-index scale instead — `float` 10 · `mask` 999 · `dialog` 1000 · `reminder` 1020 ·
`popover` 1030 · `popupmenu` 1040 · `tip` 1050 — so stacking is systematised where elevation
is not.

## 7. Do's and Don'ts

### Do
- Compose neutrals from `#0d0d0d` at the published alphas rather than picking greys.
- Use the `ai` family (`#8350f2` → `#682aef`) for AI surfaces; it is a first-class family here,
  not an accent someone borrowed.
- Follow the line-height rule — `size + 8px` below 18px, `size + 12px` at and above it.

### Don't
- Don't treat `--wps-*` layout constants as portable tokens; most of them are this page's.
- Don't copy the focus behaviour. All five controls suppress the browser's ring and draw
  nothing in its place — that is a measurement of WPS, not a recommendation.
- Don't read `#1e5fc7` as the brand's resting blue. It is the ramp's **pressed** step that the
  page happens to use; `--kd-color-brand-normal` is `#1f69e0`.

## 8. Responsive Behavior

Not measured at a second width, but the token set states its intent: `--wps-*` publishes
`-compact` and `-mobile` variants for every hero size, letter-spacing and line-height
(hero 62 → 40 compact → 38 mobile), plus `--wps-container-padding-x` 60 → 40 → 24px. The
breakpoints themselves were not observed.

## 9. Agent Prompt Guide

### Quick Color Reference
`#1f69e0` brand · `#458bfa` hover · `#1e5fc7` pressed and page blue · `#dd3332` danger ·
`#c42e2d`/`#b02928` its hover and press · `#8350f2` AI · `#418f1f` success · `#e2651a` warning ·
`#0d0d0d` ink at .9/.66/.46/.27 · rules at .06/.12/.24/.48 · `#ffffff`/`#f5f5f5`/`#eeeeee`/`#e6e6e6`

### Example Component Prompts
- "A 54px download pill: `#dd3332` fill, `#ffffff` 18px/600 label, 40px radius, hover
  `#c42e2d`, press `#b02928`, no shadow."
- "Its outline twin: transparent, `1px solid rgba(13,13,13,.48)`, `rgba(13,13,13,.9)` label,
  hover fill `rgba(13,13,13,.06)`, press `rgba(13,13,13,.1)`."

## 10. Voice & Tone

Not assessed as copy. The measured landing surface carries 307 characters of body text —
a headline, two buttons and a nav.

## 11. Brand Narrative

Kingsoft Office describes itself as founded in 1988, with over 3,000 employees, more than 600
million monthly active users, distribution in over 220 countries and regions, support for 46
languages, over 200,000 enterprise customers, and a place on the Forbes Global 2000. WPS
Office is the suite; 金山文档 (kdocs.cn) is the collaborative cloud half of it.

The interface matches a company that ships the same product into many markets at once: a
system of ramps and alpha ladders that themes cleanly, a font stack that names Korean system
faces before Latin fallbacks, and a landing page whose own constants are kept in a separate
namespace from the system they sit on.

## 12. Principles

- **Publish the ramp, not the colour.** Ten brand steps as raw `r,g,b`, composable at alpha.
- **One ink, eight opacities.** Text and rules are the same `#0d0d0d` at different alphas.
- **Separate what travels from what does not.** `--kd-*` versus `--wps-*`.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Four components carry measured hover, pressed and focus. Hover and pressed differ on two of
them (secondary `.06` → `.1`; light moves the label, then washes) and are identical on the
other two.

**Focus was measured on all five controls, including the undeclared blue one**, with each
control pinned by element handle and every focus reading taken before the mouse moved at all.
All five match `:focus-visible`; none changes any property; `outline-style` stays `none`
throughout. WPS suppresses the browser's default ring and supplies nothing in its place.

Hover and pressed on the blue hero button are **unmeasured, not absent** — it is covered by
another layer inside the carousel, and two separate attempts reported a timeout rather than a
value.

## 15. Motion & Easing

Two durations are published and both were observed: `--wps-transition-duration` is `0.3s`, and
every measured `kdv-button` computes `transition: 0.1s`. There is no easing token. The buttons
move faster than the page does.

---

**Tier 1 sources:** https://www.wps.cn/ (live product surface — 439 custom properties read via `getComputedStyle`, of which 293 are `--kd-*` and 146 `--wps-*`; five `kdv-button` controls measured at rest, hover, pressed and focus, 2026-09-22); https://www.kdocs.cn/ (金山文档 / WPS Docs — a second Kingsoft-owned Chinese product surface, 2026-09-22); https://www.wps.com/about-us/ (Kingsoft Office's own About page — founding year, headcount, monthly active users, market reach; not cited for tokens)

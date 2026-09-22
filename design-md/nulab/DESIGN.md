---
id: nulab
name: Nulab
country: JP
category: productivity
homepage: "https://nulab.com"
primary_color: "#7A6ABF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=nulab.com&sz=128"
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "Nulab web tokens"
  url: "https://nulab.com/ja/"
  type: system
  description: "146 own custom properties on the corporate surface (206 total; 60 are WordPress internals): a per-product colour family for each of seven products, a per-product button family carrying base/hover/pressed/disabled for each, one shared focus-ring token, a twelve-step dp spacing scale, a three-step button padding scale, a four-step text ladder and a seven-step z-index scale."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    brand: "#7a6abf"
    brand-hover: "#6e5fac"
    brand-pressed: "#625599"
    brand-disabled: "#cbc2e8"
    default: "#74758b"
    default-hover: "#696a7d"
    outline: "#cbc2e8"
    backlog: "#319b77"
    backlog-mark: "#42ce9f"
    cacoo: "#4c7ebf"
    typetalk: "#f45748"
    nulabpass: "#775fed"
    flowbase: "#1faddb"
    ad: "#ffaa1d"
    foreground: "#17171c"
    text-secondary: "#5d5e6f"
    text-inactive: "#9e9eae"
    border: "#d5d5de"
    canvas: "#ffffff"
    surface: "#f5f5f7"
    beige: "#f8f3f0"
    success: "#00bd7b"
    alert: "#ff6455"
    error: "#e50000"
  typography:
    family: { sans: "Noto Sans JP" }
    small: { size: 12, use: "The smallest rendered step on the corporate surface" }
    body: { size: 14, use: "The dominant size — 51 of 119 text elements" }
    base: { size: 16, use: "Lead paragraphs and the large product button" }
    lead: { size: 18, use: "Section intros and the Backlog call-to-action text" }
    heading: { size: 24, use: "Section headings" }
    display: { size: 46, use: "The single largest step on the page" }
  spacing: { dp40: 40, dp64: 64, dp80: 80, dp96: 96, dp104: 104, dp112: 112, dp120: 120, dp128: 128, dp144: 144, dp152: 152, dp160: 160 }
  rounded: { sm: 4, lg: 16, circle: 9999 }
  components:
    button-default: { type: "button", bg: "#74758b", fg: "#ffffff", radius: 4, padding: "8px 14px 8px 38px", font: "16px / 700", shadow: "rgba(28,28,28,0.2) 0 2px 4px", hover: "#696a7d", pressed: "#696a7d", focus: "#cbc2e8", use: "Neutral product button (Backlogを詳しく見る), 247×56. Hover, pressed and focus all settle on #696a7d; focus adds a 4px #cbc2e8 outline." }
    button-nulab: { type: "button", bg: "#7a6abf", fg: "#ffffff", radius: 4, padding: "8px 24px", font: "14px / 600", hover: "#6e5fac", pressed: "#6e5fac", focus: "#cbc2e8", use: "Corporate purple action (同意する), 105×40 — the --button-nulab family rendered." }
    link-settings: { type: "button", bg: "#ffffff", fg: "#7a6abf", radius: 4, padding: "8px 0", font: "14px / 600", hover: "#ffffff", pressed: "#7a6abf", focus: "#cbc2e8", use: "Quiet text action (クッキー設定), 85×40. Hover changes nothing; pressed removes the outline width; focus draws the 4px #cbc2e8 ring as a box-shadow instead of an outline." }
    backlog-button-primary: { type: "button", bg: "#f27100", fg: "#ffffff", border: "2px solid transparent", radius: 4, padding: "8px 14px", font: "14px / 700", hover: "#bf5900", pressed: "#bf5900", focus: "#cbc2e8", use: "Backlog's filled action (無料で試す), 102×40 — orange, not the green the corporate token set assigns to Backlog." }
    backlog-button-outlined: { type: "button", bg: "#ffffff", fg: "#f27100", border: "2px solid #f27100", radius: 4, padding: "8px 14px", font: "14px / 700", hover: "#fff8f2", pressed: "#fff8f2", focus: "#cbc2e8", use: "Backlog's outlined twin (資料ダウンロード), 144×40. Hover fills with a #fff8f2 wash and darkens text and border to #bf5900 together." }
    backlog-cta-primary: { type: "button", bg: "#f27100", fg: "#ffffff", border: "2px solid #f27100", radius: 4, padding: "10px 0", font: "18px / 700", shadow: "rgba(0,0,0,0.2) 0 2px 4px", hover: "#bf5900", pressed: "#bf5900", focus: "#cbc2e8", use: "Backlog's large conversion CTA, 305×70 — the same orange one step up in size and weight." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: corporate, kind: product-surface, url: "https://nulab.com/ja/", inspected: "2026-09-22" }
    - { id: backlog, kind: product-surface, url: "https://backlog.com/ja/", inspected: "2026-09-22" }
  sources:
    - { id: corp-live, kind: product-surface, url: "https://nulab.com/ja/", captured: "2026-09-22" }
    - { id: backlog-live, kind: product-surface, url: "https://backlog.com/ja/", captured: "2026-09-22" }
    - { id: about, kind: official-doc, url: "https://nulab.com/ja/about/", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.ad: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.alert: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.backlog: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.backlog-mark: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.beige: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.border: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-disabled: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-hover: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-pressed: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.cacoo: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.default: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.default-hover: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.error: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.flowbase: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.nulabpass: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.outline: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.success: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-inactive: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-secondary: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.typetalk: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.bg: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.border: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.fg: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.focus: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.font: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.hover: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.padding: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.pressed: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.radius: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.type: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-outlined.use: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.bg: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.border: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.fg: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.focus: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.font: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.hover: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.padding: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.pressed: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.radius: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.type: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-button-primary.use: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.bg: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.border: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.fg: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.focus: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.font: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.hover: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.padding: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.pressed: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.radius: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.shadow: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.type: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.backlog-cta-primary.use: { surface_id: backlog, source_id: backlog-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.bg: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.fg: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.focus: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.font: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.hover: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.padding: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.pressed: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.radius: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.shadow: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.type: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-default.use: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-nulab.bg: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-nulab.fg: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-nulab.focus: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-nulab.font: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-nulab.hover: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-nulab.padding: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-nulab.pressed: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-nulab.radius: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-nulab.type: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-nulab.use: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-settings.bg: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-settings.fg: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-settings.focus: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-settings.font: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-settings.hover: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-settings.padding: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-settings.pressed: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-settings.radius: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-settings.type: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.link-settings.use: { surface_id: corporate, source_id: corp-live, method: live-inspect, captured: "2026-09-22" }
    tokens.rounded.circle: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.lg: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp104: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp112: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp120: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp128: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp144: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp152: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp160: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp40: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp64: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp80: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.dp96: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.sans: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.heading.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.heading.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
---
# Design System Inspiration of Nulab (株式会社ヌーラボ)

## 1. Visual Theme & Atmosphere

Nulab is a Fukuoka software company, established 29 March 2004, that builds collaboration
tools: **Backlog** (project and task management), **Cacoo** (online whiteboard), **Nulab Pass**
(security and governance) and **Nulab Flowbase** (workflow automation).

The corporate surface is white, calm and set entirely in **Noto Sans JP** — 119 of 119 text
elements, with no second family anywhere. The brand colour is a soft purple `#7a6abf`, used
sparingly; the dominant rendered text colour is a mid grey.

What makes this reference unusual is the **shape** of its token set rather than its look.
146 own custom properties, and the organising idea is one product per family:

```
--backlog-*   --cacoo-*   --typetalk-*   --nulab-*   --nulabpass-*   --flowbase-*
--button-backlog / -hover / -pressed / -disabled        … and the same four for each product
--banner-backlog / -secondary                           … and the same pair for each product
```

Seven products, each with a brand colour, a background, a light background, a banner pair and
a four-state button ramp. It is a **multi-product system published as one sheet**, and it is
the clearest example of that pattern in this catalog.

### Primary tasks
- Understand what each of the four current products does and reach it.
- Enter Backlog's own site, which runs its own colour on the same skeleton.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `nulab.com/ja/`. 206 custom properties resolve;
**60 are WordPress internals** (`--wp--preset--*`, `--wp-admin-theme-color-*`) and are not
recorded. The remaining 146 are Nulab's.

### Corporate purple — the four-state ramp

- **Brand** (`#7a6abf`) — `--nulab-primary` and `--button-nulab`.
- **Brand Hover** (`#6e5fac`) — `--nulab-secondary` and `--button-nulab-hover`.
- **Brand Pressed** (`#625599`) — `--button-nulab-pressed`.
- **Brand Disabled** (`#cbc2e8`) — `--button-nulab-disabled`.

Every product family is built the same way. `--button-backlog` `#319b77` → hover `#2c8c6b` →
pressed `#277c5f` → disabled `#a1cbbe`. `--button-cacoo` `#4c7ebf` → `#4471ac` → `#3d6599` →
`#b7cbe5`. `--button-typetalk` `#f45748` → `#dc4e41` → `#c3463a` → `#eeafa9`. Hover and
pressed are consistently one and two steps darker; disabled is a light tint of the same hue.

### Neutral

- **Default** (`#74758b`) — `--button-default` and `--brand-nulab`, a grey-violet that carries
  the product buttons on the corporate page.
- **Default Hover** (`#696a7d`) — `--button-default-hover`.
- **Outline** (`#cbc2e8`) — `--outline-primary`. One focus-ring token for the whole system.

### Product marks

**Backlog** (`#319b77`) · **Backlog Mark** (`#42ce9f`) · **Cacoo** (`#4c7ebf`) ·
**Typetalk** (`#f45748`) · **Nulab Pass** (`#775fed`) · **Flowbase** (`#1faddb`) ·
**Ad** (`#ffaa1d`).

Two things are worth noticing. Backlog carries **two** greens — `--brand-backlog` `#42ce9f`
for the mark and `--button-backlog` `#319b77` for actions — and **backlog.com's own buttons
are neither**: they render `#f27100` orange. And `--typetalk-*` is still a complete family
although Typetalk is not among the products Nulab's About page lists today. The sheet carries
the product line including one that has left it.

### Text, line and surface

- **Foreground** (`#17171c`) — `--text-primary`, also `--color-black`.
- **Text Secondary** (`#5d5e6f`) · **Text Inactive** (`#9e9eae`) · **Error** (`#e50000`).
- **Border** (`#d5d5de`) — `--color-border`; `--border-primary` `#cacaca` and `-secondary`
  `#b7b7c4` sit beside it.
- **Canvas** (`#ffffff`) · **Surface** (`#f5f5f7`) — `--color-off-white` · **Beige**
  (`#f8f3f0`) — `--color-beige`, with a darker `--color-dark-nude-beige` `#f2e8e1`.
- **Success** (`#00bd7b`) · **Alert** (`#ff6455`).

### Template categories

Five numbered background sets, each `main` / `secondary` / `accent`: amber `#fff7eb` /
`#fce4bd` / `#f9c066`, mint `#d9f5ec` / `#b3ebd9` / `#7bddbc`, violet `#e5dfff` / `#c5c2fb` /
`#8a84f7`, blue `#dcebff` / `#79b7ff` / `#4b91fa`, yellow `#fff0bd` / `#ffe48a` / `#ffcc24`.

## 3. Typography Rules

### Font Family

**Noto Sans JP**, declared in `--font-default` as
`"Noto Sans JP", hiragino sans, "Hiragino Kaku Gothic ProN", …` and **loaded as a webfont** on
the page. The census found it on 119 of 119 text-bearing elements; no second family appears.

### Scale

Rendered sizes: **14px** on 51 elements, **16px** on 33, **18px** on 27, then 24, 12, 46, 40,
25 and 20 once or twice each. Weights: 400 on 77, 700 on 39, 600 on 3 — a two-weight page with
a third used three times.

## 4. Component Stylings

Measured live on two surfaces, with every control's focus read before the mouse moved and each
control pinned by element handle.

### The focus ring is one token, and it crosses the brands

`--outline-primary` is `#cbc2e8`, and it renders as **`outline: rgb(203, 194, 232) solid 4px`**
on the corporate neutral button, on Backlog's filled button, on Backlog's outlined button and
on Backlog's large CTA. `solid 4px` is authored — the browser's own ring is `auto 1px` — and
the same value appears on `nulab.com` and `backlog.com`. One ring for two brands.

On the quieter controls it arrives as a **box-shadow** instead: `rgb(203, 194, 232) 0 0 0 4px`
on the cookie-settings link and the purple consent button. Same colour, same 4px, different
property.

### Corporate — neutral product button

`#74758b` fill, `#ffffff` text, 4px radius, 247×56, 16px/700, `2px` transparent border, and a
`rgba(28,28,28,0.2) 0 2px 4px` shadow. **Hover, pressed and focus all settle on `#696a7d`**,
and focus adds the 4px `#cbc2e8` outline.

**Token and render agree.** `--button-default` is `#74758b` and `--button-default-hover` is
`#696a7d`; the button measures `rgb(116,117,139)` and `rgb(105,106,125)`.

### Corporate — purple action and quiet link

The consent button is `#7a6abf` → `#6e5fac` on hover and pressed, exactly `--button-nulab` and
`--button-nulab-hover`. The cookie-settings link is white with `#7a6abf` text, **changes
nothing on hover**, and only drops its outline width on press.

### Backlog — the same skeleton in orange

`backlog.com` runs the identical structure and a different colour:

- **Filled**: `#f27100`, `#ffffff` text, `2px` transparent border, 4px radius, 102×40, 14px/700.
  Hover and pressed **`#bf5900`**.
- **Outlined**: `#ffffff` with `2px solid #f27100` and `#f27100` text. Hover fills **`#fff8f2`**
  and darkens text *and* border to `#bf5900` in one move.
- **Large CTA**: the same orange at 305×70 and 18px/700, with a `rgba(0,0,0,0.2) 0 2px 4px`
  shadow.

**The orange is not in the corporate sheet.** `--button-backlog` is `#319b77`. Both readings
are recorded on their own surfaces and neither overrides the other.

### Spacing, radius and padding

A **dp spacing scale**: 0 · 40 · 64 · 80 · 96 · 104 · 112 · 120 · 128 · 144 · 152 · 160px —
no steps below 40, so it is a section rhythm rather than a component one. Component spacing
comes from a separate **button padding scale**, `--button-horizontal-padding-sm/md/lg` at
1.5 / 1.875 / 2.375rem, with `--button-border-thickness` 0.125rem (the 2px every button shows).

Radius as rendered: **4px** on 10 elements, 16px on 5, 50% on 2.

## 5. Layout Principles

- **One family per product, four states per button.** The sheet scales by adding a product,
  not by adding a colour.
- **The ring is shared, the fill is not.** `#cbc2e8` at 4px is constant across brands.
- **Section rhythm and component rhythm are different scales**, and neither borrows from the
  other: dp starts at 40px, button padding is in rem.

## 6. Depth & Elevation

Two shadows were observed and neither is tokenised: `rgba(28,28,28,0.2) 0 2px 4px` on the
corporate product button and `rgba(0,0,0,0.2) 0 2px 4px` on Backlog's large CTA. There is a
seven-step **z-index** scale instead — `--z-mobile-filter` 90 · `-secondary-header-backdrop` 96
· `-secondary-header` 97 · `-main-header-backdrop` 98 · `-main-header` 99 · `-mobile-nav` 101 ·
`-popup` 111 — so stacking is systematised where elevation is not.

## 7. Do's and Don'ts

### Do
- Take a product's action colour from its own `--button-<product>` family, and its four states
  with it.
- Use `#cbc2e8` at 4px for focus, as an outline on filled controls and a box-shadow on quiet ones.
- Set Noto Sans JP; it is declared and loaded, not a fallback.

### Don't
- Don't read `--wp--preset--*` as Nulab's; 60 of the 206 properties are WordPress.
- Don't assume `--brand-backlog` `#42ce9f` is what Backlog's buttons paint. They paint `#f27100`.
- Don't use the dp scale for component padding. It has no step below 40px.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only. The token set declares `--content-width` 75rem,
`--content-width-small` 61.25rem, `--base-gutter` 48px and `--base-japanese-gutter` 1.5rem, but
no breakpoint was observed.

## 9. Agent Prompt Guide

### Quick Color Reference
`#7a6abf` brand · `#6e5fac` hover · `#625599` pressed · `#cbc2e8` focus ring and disabled ·
`#74758b`/`#696a7d` neutral button · `#f27100`/`#bf5900` Backlog action · `#319b77` Backlog
token · `#4c7ebf` Cacoo · `#f45748` Typetalk · `#775fed` Nulab Pass · `#1faddb` Flowbase ·
`#17171c` text · `#5d5e6f` secondary · `#f5f5f7` surface

### Example Component Prompts
- "A 56px neutral button: `#74758b` fill, `#ffffff` 16px/700 label, 4px radius, 2px transparent
  border, hover and pressed `#696a7d`, focus adds `outline: #cbc2e8 solid 4px`."
- "Its outlined Backlog twin: `#ffffff` with `2px solid #f27100` and `#f27100` text, hover fills
  `#fff8f2` and moves text and border to `#bf5900` together."

## 10. Voice & Tone

Not assessed as copy. The corporate surface carries 2,343 characters, mostly product names and
one-line descriptions.

## 11. Brand Narrative

Nulab was established on 29 March 2004 and is headquartered in Tenjin, Fukuoka, with a Tokyo
office. Its own About page lists Backlog, Cacoo, Nulab Pass and Nulab Flowbase.

The token set is the more revealing document. It carries a complete colour and button family
for **seven** names — including Typetalk, which the About page no longer lists, and Flowbase,
which it does — so the sheet reads as an accumulating record of the product line rather than a
snapshot of it. A company that ships several products from one small team publishes one
stylesheet and adds a family each time.

## 12. Principles

- **A product is a family, not a colour.** Brand, background, banner and a four-state button.
- **Four states, always the same shape.** Base → hover → pressed → disabled, one hue.
- **Share the ring.** `#cbc2e8` is the only focus value in the system, across both brands.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Six components carry measured hover, pressed and focus. The pattern splits cleanly by weight:
**filled buttons move their fill** (`#74758b`→`#696a7d`, `#7a6abf`→`#6e5fac`,
`#f27100`→`#bf5900`) while **quiet controls barely move at all** — the cookie-settings link is
identical on hover and only loses its outline width on press.

**Focus is the one state every control has**, and it is the same `#cbc2e8` at 4px everywhere,
rendered as an `outline` on filled controls and a `box-shadow` on quiet ones. Disabled exists
as a token for each product family (`--button-<product>-disabled`) but was not observed on a
rendered control, so no disabled component is declared.

## 15. Motion & Easing

Durations were observed on every control and none is tokenised: `background-color 0.25s
ease-out, color 0.25s` on the corporate product button, `0.2s` on the consent controls, and
`background-color 0.2s, opacity 0.2s, border-…` on Backlog's buttons. No easing token exists in
the 146.

---

**Tier 1 sources:** https://nulab.com/ja/ (live corporate surface — 206 custom properties read via `getComputedStyle`, of which 146 are Nulab's and 60 are WordPress internals; three controls measured at rest, hover, pressed and focus, 2026-09-22); https://backlog.com/ja/ (Backlog's own product surface, Nulab-owned — three more controls measured across all four states, and the source of the `#f27100` reading, 2026-09-22); https://nulab.com/ja/about/ (Nulab's own company page — establishment date, headquarters and the current product list; not cited for tokens)

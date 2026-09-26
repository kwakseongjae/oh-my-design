---
id: vipps
name: Vipps
country: "NO"
category: fintech
homepage: "https://www.vipps.no"
primary_color: "#FF5B24"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=vipps.no&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#ff5b24"
    brand-hover: "#ff8c4f"
    brand-pressed: "#d34718"
    content-interactive: "#f05400"
    content-interactive-hover: "#a9330b"
    content-interactive-pressed: "#802000"
    purple: "#722ac9"
    purple-hover: "#8851f6"
    purple-pressed: "#551488"
    lavender: "#f1ebff"
    foreground: "#0f0e0e"
    text-secondary: "#6e6a69"
    text-tertiary: "#b0acab"
    ground: "#fff4ec"
    surface: "#f9f6f6"
    surface-sunken: "#f2eeed"
    surface-branded: "#ffece5"
    toolbar: "#161225"
    canvas: "#ffffff"
    border-subtle: "#d9d5d4"
    focus: "#5a78ff"
    positive: "#006628"
    negative: "#c60000"
  typography:
    family: { sans: "VeryVerySans" }
    body: { size: 16, weight: 400, use: "body and navigation" }
    button: { size: 16, weight: 500, use: "pill buttons" }
  rounded: { pill: 50 }
  components:
    button-primary: { type: "button", bg: "#722ac9", fg: "#f7f7f5", radius: 50, height: "40px", padding: "4px 16px", font: "16px / 500", hover: "#8851f6", pressed: "#551488", focus: "outline 3px solid rgba(67,47,255,0.6)", use: "Tæpp med Vipps — the purple pill (--button-primary-color-background-*); lighter on hover, darker when pressed, a 3px translucent blue-violet focus outline." }
    button-secondary: { type: "button", bg: "#ffffff", fg: "#722ac9", border: "#722ac9", radius: 50, height: "40px", padding: "4px 16px", font: "16px / 500", hover: "#f1ebff", pressed: "#ffffff", focus: "outline 3px solid rgba(67,47,255,0.6)", use: "Vipps for bedrifter — white pill with a purple border and label; hover fills lavender #f1ebff." }
    link-toolbar: { type: "button", bg: "transparent", fg: "#ffffff", radius: 0, height: "23px", font: "16px / 400", hover: "transparent", pressed: "transparent", focus: "outline 3px solid #ffffff", use: "Privat / Bedrift / Hjelp on the #161225 toolbar — white text that underlines on hover and press; focus is a 3px white outline." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.vipps.no/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.vipps.no/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.vipps.no/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://vipps.no/om-oss", captured: "2026-09-26" }
    - { id: business, kind: official-doc, url: "https://vippsmobilepay.com/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.content-interactive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.content-interactive-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.content-interactive-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.focus: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.ground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.lavender: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.negative: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.positive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.purple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.purple-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.purple-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-branded: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-sunken: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-tertiary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.toolbar: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-toolbar.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-toolbar.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-toolbar.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-toolbar.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-toolbar.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-toolbar.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-toolbar.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-toolbar.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-toolbar.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-toolbar.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Vipps

## 1. Visual Theme & Atmosphere

Vipps is Norway's mobile payment app — for sending money, splitting bills, collecting money, wish
lists, paying bills and paying in shops ("tæppe i butikken"). It is run by **Vipps MobilePay AS**
(Norwegian org. no. 918 713 867), which works "fordelt på fire kontorer i Norge, Danmark og Finland"
and reports 12.5M users, 400,000+ merchants and 4 markets on its business site. Vipps calls itself
"Norges best likte merkevare".

The site is warm and loud: a peach ground **`#fff4ec`**, an orange bar **`#ff5b24`** under a
near-black toolbar **`#161225`**, near-black text **`#0f0e0e`**, and purple **`#722ac9`** pills
for the actions measured on the home page. Type is Vipps's own **VeryVerySans**.

What makes it worth reading:

- **A semantic layer over ramps.** `--general-*` roles — `content-primary`, `content-interactive-
  hover`, `surface-sunken`, `border-focus`, `surface-branded` — over `--color-*` ramps (orange,
  neutral, blue, green, red, lavender, lime, amber, bronze).
- **Two button generations side by side.** The orange system (`--button-primary-surface-*`
  `#ff5b24` → `#ff8c4f` → `#d34718`) and the purple one live on the page (`--button-primary-color-
  background-*` `#722ac9` → `#8851f6` → `#551488`); the measured home-page pills use purple.
- **Warm neutrals.** The neutral ramp leans red (`#f9f6f6`, `#6e6a69`, `#0f0e0e`).

### Primary tasks
- Learn what Vipps does; get the app.
- Switch to the business site; find help.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `vipps.no`: 854 root custom properties — `--button-*` 141,
`--color-*` 70, `--general-*` 36, `--font-*` 35, and component groups (radio, toggle, badge, tabs,
checkbox …). All first-party.

### Orange (brand)

- **Brand** (`#ff5b24`) — `--general-background-brand`, `--color-orange-550`; the top bar.
- **Brand hover** (`#ff8c4f`) · **Brand pressed** (`#d34718`) — `--button-primary-surface-*`.
- **Content interactive** (`#f05400`) → hover (`#a9330b`) → pressed (`#802000`) — orange text links.
- **Surface branded** (`#ffece5`).

### Purple (home-page actions)

- **Purple** (`#722ac9`) → hover (`#8851f6`) → pressed (`#551488`).
- **Lavender** (`#f1ebff`) — the secondary pill's hover.

### Text, surfaces and lines

- **Foreground** (`#0f0e0e`) — `--general-content-primary`.
- **Text secondary** (`#6e6a69`) · **Text tertiary** (`#b0acab`).
- **Ground** (`#fff4ec`) — the page body · **Canvas** (`#ffffff`) · **Surface** (`#f9f6f6`) ·
  **Surface sunken** (`#f2eeed`) · **Toolbar** (`#161225`).
- **Border subtle** (`#d9d5d4`) · **Focus** (`#5a78ff`, `--general-border-focus`).

### Status

**Positive** `#006628` · **Negative** `#c60000`.

## 3. Typography Rules

### Font family

**VeryVerySans** (variable, 300–700), `VeryVerySans, Arial, sans-serif`, loaded (`document.fonts`).

### Scale

Body and navigation 16px/400; pill buttons 16px/500.

## 4. Component Stylings

Measured on the home page, focus read under a real Tab key, a hover counted only when `:hover`
matched.

- **Primary pill** — Tæpp med Vipps: **`#722ac9`**, `#f7f7f5` label, 50px radius, 40px. Hover
  **`#8851f6`**, pressed **`#551488`**; focus a **3px `rgba(67,47,255,0.6)`** outline.
- **Secondary pill** — Vipps for bedrifter: white, `#722ac9` border and label. Hover fills
  **`#f1ebff`**; same focus outline.
- **Toolbar link** — Privat, Bedrift, Hjelp: white on `#161225`. Hover and press underline; focus a
  **3px white** outline.

### Radius

Pills at 50px.

## 5. Layout Principles

- A dark toolbar over an orange navigation bar, then a peach page of content cards.

## 6. Depth & Elevation

Flat; focus is drawn with outlines.

## 7. Do's and Don'ts

### Do
- Keep orange `#ff5b24` as the brand surface and the peach `#fff4ec` as the ground.
- Use full pills with lighter-on-hover, darker-on-press fills.
- Draw focus as a thick 3px outline.

### Don't
- Don't use cold greys; the neutrals are warm.
- Don't mix the purple and orange button systems in one component.
- Don't remove the underline from toolbar links on hover.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#ff5b24` Vipps orange · `#fff4ec` peach ground · `#161225` toolbar · `#722ac9` purple ·
`#8851f6` purple hover · `#0f0e0e` ink · `#6e6a69` secondary · `#f05400` orange link

### Example Component Prompts
- "A 40px purple `#722ac9` pill, 16px/500 VeryVerySans; hover `#8851f6`, press `#551488`; focus a 3px
  translucent blue-violet outline."
- "An orange `#ff5b24` bar under a `#161225` toolbar with white links that underline on hover."

## 10. Voice & Tone

Playful and direct — its own verb, *tæppe* (to tap-pay), appears in the main call to action. Not
assessed further.

## 11. Brand Narrative

Vipps uses its own name as a verb on its site — *vippse til utlandet*, *vippsing* — and now runs as
Vipps MobilePay across four markets. The interface is warm — peach, orange and a playful purple —
with a sans of its own.

## 12. Principles

- **Warmth.** Peach ground, warm neutrals, orange.
- **Very, very easy.** The business site's own promise.
- **Visible focus.** 3px outlines.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: purple lightens to `#8851f6`; the secondary fills lavender; toolbar links underline. Press:
`#551488`. Focus: 3px outlines (translucent blue-violet on pills, white on the toolbar).

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.vipps.no/ (live homepage — 854 root custom properties read via `getComputedStyle`; VeryVerySans loaded; three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.vipps.no/zz-this-does-not-exist (nonsense-path control — HTTP 404, read 2026-09-26); https://vipps.no/om-oss (Om Vipps — four offices in Norway, Denmark and Finland; © Vipps MobilePay AS, org. nr. 918 713 867, read 2026-09-26); https://vippsmobilepay.com/ (business site — 12.5M users, 400,000+ merchants, 4 markets, "makes payments very, very easy", read 2026-09-26)

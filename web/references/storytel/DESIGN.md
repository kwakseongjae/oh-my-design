---
id: storytel
name: Storytel
country: SE
category: consumer-tech
homepage: "https://www.storytel.com"
primary_color: "#FF501C"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=storytel.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Storytel web tokens"
  url: "https://www.storytel.com/se"
  type: system
  description: "1,027 first-party custom properties on storytel.com — 550 --typography-* and 472 --color-* — with component tokens named for every variant and state (--color-btn-primary-invert-background-hover, --color-btn-brand-hollow-text-press, --color-banner-brand-01-background-default). The brand is Storytel orange #ff501c (--color-theme-accent-01) with deeper steps #c6461b and #a33815; the page is warm sand #dcd5cd and near-black #101010; white pill buttons go #f2eeeb on hover and #eae6e0 on press. Type is Storytel Euclid."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#ff501c"
    brand-hover: "#c6461b"
    brand-press: "#a33815"
    primary: "#101010"
    primary-hover: "#333333"
    foreground: "#101010"
    sand: "#dcd5cd"
    invert-hover: "#f2eeeb"
    invert-press: "#eae6e0"
    canvas: "#ffffff"
    text-muted: "#c2c2c2"
    text-secondary: "#5c5c5c"
    brand-light: "#ffeae4"
    yellow: "#ffc739"
    green: "#1fa37d"
    info: "#50a2ef"
  typography:
    family: { sans: "Storytel Euclid" }
    button: { size: 16, weight: 600, use: "hero pill button" }
    nav: { size: 16, weight: 400, use: "header links" }
  rounded: { sm: 4, pill: 1000 }
  components:
    button-invert: { type: "button", bg: "#ffffff", fg: "#101010", radius: 1000, height: "48px", font: "16px / 600", hover: "#f2eeeb", pressed: "#eae6e0", use: "Starta erbjudandet on the dark hero — --color-btn-primary-invert: white pill, hover #f2eeeb, press #eae6e0. Focus is the browser's ring. Prova nu in the header is a 40px, 13px version." }
    link-nav: { type: "button", bg: "transparent", fg: "#ffffff", radius: 0, height: "22px", font: "16px / 400", hover: "fg #ff501c", pressed: "fg #ff501c", use: "Ljudböcker, E-böcker, Podcasts in the header — white links that turn Storytel orange on hover and press." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.storytel.com/se", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.storytel.com/se", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.storytel.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: investors, kind: official-doc, url: "https://investors.storytel.com/en/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-press: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.info: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.invert-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.invert-press: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.sand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-invert.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-invert.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-invert.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-invert.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-invert.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-invert.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-invert.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-invert.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-invert.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Storytel

## 1. Visual Theme & Atmosphere

Storytel is an audiobook and e-book streaming service from Stockholm. In its own words it is "one
of the world's largest audiobook and e-book streaming services", with more than 1.8 million titles
in 55 languages, more than 2.7 million paying subscribers and 25 launched markets. The group,
Storytel AB (publ), is based at Tryckerigatan 4 in Stockholm.

The Swedish site is warm and bookish: a dark hero in near-black **`#101010`**, then sections on a
sand tone **`#dcd5cd`**, with Storytel's orange **`#ff501c`** for links, badges and brand headings.
Buttons are full pills; type is **Storytel Euclid**, a face named for the company.

What makes it worth reading:

- **Tokens named for every variant and state.** `--color-btn-primary-invert-background-hover`,
  `--color-btn-brand-hollow-text-press`, `--color-btn-primary-text-background-press` — 75 tokens for
  the primary button alone.
- **An orange ladder.** `--color-theme-accent-01` `#ff501c`, `-02` `#c6461b`, `-03` `#a33815` —
  used as rest, hover and press across the brand buttons.
- **Warm neutrals.** The page ground is sand, not grey; disabled states use the same sand.

### Primary tasks
- Start the offer or a free trial.
- Browse audiobooks, e-books and podcasts; sign in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `storytel.com/se`: 1,027 root custom properties — `--typography-*`
550, `--color-*` 472, `--breakpoint-*` 3 — all Storytel's.

### Brand

- **Brand** (`#ff501c`) — `--color-theme-accent-01`, `--color-badge-background-accent`,
  `--color-typography-text-heading-brand`.
- **Brand hover** (`#c6461b`) — `--color-theme-accent-02`.
- **Brand press** (`#a33815`) — `--color-theme-accent-03`.
- **Brand light** (`#ffeae4`) — `--color-banner-brandlight-03-background-default`.

### Ink and ground

- **Primary** (`#101010`) — `--color-btn-primary-background-default`, `--color-page-background-branded`.
- **Primary hover** (`#333333`) — `--color-btn-primary-background-hover`.
- **Foreground** (`#101010`) — text on light sections.
- **Sand** (`#dcd5cd`) — the section ground (534 elements) and the disabled colour.
- **Canvas** (`#ffffff`) · **Text muted** (`#c2c2c2`, on dark) · **Text secondary** (`#5c5c5c`).
- **Invert hover** (`#f2eeeb`) · **Invert press** (`#eae6e0`) — the white button's states.

### Other brand colours

**Yellow** `#ffc739` (`--color-theme-brand-01-primary`, banners) · **Green** `#1fa37d`
(`--color-theme-brand-04-primary`) · **Info** `#50a2ef`.

## 3. Typography Rules

### Font family

**Storytel Euclid** at 400, 500 and 600, loaded (`document.fonts`); body `"Storytel Euclid",
sans-serif`. The 550 `--typography-*` tokens hold the scale.

### Scale

The hero pill is 16px/600, the header pill 13px/600, header links 16px/400.

## 4. Component Stylings

Measured after declining cookies (Cookiebot), focus read under a real Tab key, and a hover counted
only when `:hover` matched; background-image, text-decoration and pseudo-elements were compared too.

- **Invert pill** — Starta erbjudandet: **`#ffffff`**, `#101010` 16px/600, radius 1000px, 48px. Hover
  **`#f2eeeb`**, press **`#eae6e0`**. Focus is the browser's `auto` ring. Prova nu is the 40px,
  13px header version with the same states.
- **Header link** — Ljudböcker and siblings: white 16px/400. Hover and press turn it **`#ff501c`**.

### Radius

Pills at 1000px; book covers at 4px.

## 5. Layout Principles

- A dark hero, then sand sections with rows of book covers.
- Three breakpoint tokens.

## 6. Depth & Elevation

Flat on the measured controls; overlays use `--color-theme-bg-overlay` `#0006`.

## 7. Do's and Don'ts

### Do
- Use orange `#ff501c` for brand accents and step to `#c6461b`, `#a33815` for hover and press.
- Ground sections in sand `#dcd5cd` and near-black `#101010`.
- Keep buttons as full pills.

### Don't
- Don't use cold greys for the page ground.
- Don't use pure black; the ink is `#101010`.
- Don't square off buttons.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#ff501c` orange · `#c6461b` / `#a33815` orange steps · `#101010` ink · `#dcd5cd` sand · `#f2eeeb` /
`#eae6e0` white-button states · `#ffc739` yellow

### Example Component Prompts
- "A 48px white pill on near-black, `#101010` 16px/600 Storytel Euclid label; hover `#f2eeeb`, press
  `#eae6e0`."
- "White header links that turn `#ff501c` on hover."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Storytel wants to move the world through stories, and its site feels like a bookshop: warm sand,
dark covers, and an orange that marks what is Storytel's. The token system is exhaustive — every
button variant, every state — and a typeface named for the company carries it.

## 12. Principles

- **Warm, not cold.** Sand and near-black rather than grey.
- **Orange is Storytel.** Brand accents only.
- **Every state named.** Tokens for rest, hover, press, selected, disabled.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: the white pill to `#f2eeeb`, header links to `#ff501c`. Press: `#eae6e0`. Focus: the browser's
ring. Disabled tokens use sand `#dcd5cd` (not observed).

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.storytel.com/se (live homepage — 1,027 root custom properties read via `getComputedStyle`; Storytel Euclid loaded; two components measured at rest, hover, pressed and focus after declining cookies, captured 2026-09-26); https://www.storytel.com/se/zz-this-does-not-exist (nonsense-path control — HTTP 404, read 2026-09-26); https://investors.storytel.com/en/ (Storytel Group — "one of the world's largest audiobook and e-book streaming services", 1.8 million titles, 2.7 million subscribers, 25 markets; Storytel AB (publ), Tryckerigatan 4, Stockholm, read 2026-09-26)

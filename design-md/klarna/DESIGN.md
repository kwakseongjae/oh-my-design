---
id: klarna
name: Klarna
country: SE
category: fintech
homepage: "https://www.klarna.com"
primary_color: "#FFA8CD"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=klarna.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Klarna brand guidelines"
  url: "https://brand.klarna.com"
  type: brand
  description: "Klarna publishes its brand guidelines at brand.klarna.com — Our Brand, How We Speak, How We Look. klarna.com serves about 547 first-party custom properties in two naming generations: a current kebab-case layer (--colors-text-default, --colors-bg-brand) and an older camelCase layer (--backgroundTertiary) carrying the same values. The ink is a near-black violet #0B051D (--brand), the brand pink #FFA8CD is a surface and badge colour, and a purple scale --brand10…--brand100 supplies accents and focus. Type is Klarna Text and Klarna Title, self-hosted."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand-pink: "#ffa8cd"
    primary: "#0b051d"
    foreground: "#0b051d"
    text-body: "#282636"
    text-subtle: "#504f5f"
    text-disabled: "#96959f"
    inverse: "#f9f8f5"
    hover: "#2c2242"
    accent: "#7039e2"
    accent-focus: "#7b57d8"
    link: "#582fb4"
    accent-subtle: "#efecff"
    border: "#e2e2e7"
    border-neutral: "#c4c3ca"
    pop: "#cff066"
    positive: "#046234"
    positive-badge: "#c1f4d1"
    negative: "#ae1d1d"
    warning: "#fbc64d"
    canvas: "#ffffff"
  typography:
    family: { sans: "Klarna Text", display: "Klarna Title" }
    body: { size: 16, weight: 400, use: "Klarna Text; the accordion items" }
    button: { size: 16, weight: 500, use: "the pill button" }
    nav: { size: 13, weight: 500, use: "header navigation" }
  rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, pill: 99999 }
  components:
    button-pill: { type: "button", bg: "#0b051d", fg: "#f9f8f5", border: "#e2e2e7", radius: 99999, height: "42px", padding: "11px 20px", font: "16px / 500", hover: "#2c2242", pressed: "#2c2242", focus: "outline 2px solid #0b051d", use: "Logga in in the header — a near-black pill that lifts to --brand90 #2c2242 on hover and press; focus adds a 2px near-black outline." }
    link-nav: { type: "button", bg: "transparent", fg: "#0b051d", radius: 0, height: "24px", padding: "4px 0", font: "13px / 500", hover: "opacity 0.84", pressed: "opacity 0.68", focus: "box-shadow inset 0 0 0 1px #7b57d8 + outline 2px solid #0b051d", use: "Shoppa and the other header links — dim to 0.84 on hover and 0.68 on press; focus is a purple 1px inset ring inside a 2px near-black outline." }
    accordion-item: { type: "button", bg: "transparent", fg: "#0b051d", radius: 0, height: "64px", font: "16px / 400", hover: "opacity 0.84", pressed: "opacity 0.68", focus: "box-shadow 0 0 0 3px #7b57d8 + outline 2px solid #0b051d", use: "An expandable item (Anpassat efter dig) — the same opacity steps, with a 3px purple ring on focus." }
    input-search: { type: "input", bg: "transparent", fg: "#0b051d", radius: 0, height: "22px", font: "14px / 400", hover: "transparent", focus: "transparent", use: "The header search field (Sök efter produkter…). None of its measured values change on hover or focus." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.klarna.com/se/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.klarna.com/se/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://brand.klarna.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: brand-site, kind: official-doc, url: "https://brand.klarna.com/", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://www.klarna.com/international/about-us/", captured: "2026-09-26" }
    - { id: press, kind: official-doc, url: "https://www.klarna.com/international/press/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.accent: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.accent-focus: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.accent-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border-neutral: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-pink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.inverse: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.link: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.negative: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.pop: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.positive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.positive-badge: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-body: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.accordion-item.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.accordion-item.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.accordion-item.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.accordion-item.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.accordion-item.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.accordion-item.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.accordion-item.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.accordion-item.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.accordion-item.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.accordion-item.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-pill.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xxl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Klarna

## 1. Visual Theme & Atmosphere

Klarna is a payments and shopping company from Stockholm. Its own history begins with "three young
Swedish entrepreneurs" and "a brilliant idea back in 2005—but not the best name": Kreditor became
Klarna in 2010. It passed a $1 billion valuation in 2012. In September 2025 Klarna Group plc listed
on the New York Stock Exchange (NYSE: KLAR). Klarna counts 120 million active consumers, more than
1.2 million merchants and 26 countries.

Its brand guidelines open with "We're not standard. But the new standard", and describe the brand
as "Refreshingly different". The site is near-black on white — the ink is a violet-black
**`#0b051d`** — with Klarna's pink **`#ffa8cd`** on surfaces and badges, and a purple scale for
accents and focus. Type is Klarna's own **Klarna Text** and **Klarna Title**.

What makes it worth reading:

- **The ink is the brand.** `--brand` is `#0b051d`, the top of a ten-step purple scale
  (`--brand10` `#efecff` … `--brand100`). Buttons and text use it; hover lifts to `--brand90`
  `#2c2242`.
- **Pink as a surface.** `--colors-bg-brand` and `--colors-btn-brand` are `#ffa8cd`: the famous pink
  fills areas and badges rather than colouring text.
- **Two token generations side by side.** A kebab-case layer and an older camelCase layer carry the
  same values — 205 of 207 camelCase names have an exact twin.

### Primary tasks
- Shop with Klarna: search products and stores.
- Sign in; manage payments and the app.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `klarna.com/se/`: 547 root custom properties — `--colors-*` 92,
`--lineHeights-*` 36, `--textSizes-*` 28, `--ribbon-*` 23, 207 camelCase names, and the purple scale.
All first-party.

### Ink and text

- **Primary** (`#0b051d`) — `--brand`, `--colors-text-default`, `--colors-border-active`. The pill
  button and the ink.
- **Foreground** (`#0b051d`) — 15 of 23 `<p>` elements; 1,809 text elements.
- **Text body** (`#282636`) · **Text subtle** (`#504f5f`) · **Text disabled** (`#96959f`).
- **Inverse** (`#f9f8f5`) — `--offwhite`, `--colors-text-inverse`; the pill's label.
- **Canvas** (`#ffffff`).

### Brand colours

- **Brand pink** (`#ffa8cd`) — `--colors-bg-brand`, `--colors-btn-brand`, `--colors-badge-brand`.
- **Hover** (`#2c2242`) — `--brand90`.
- **Accent** (`#7039e2`) — `--brand60`, `--colors-bg-accent`, `--colors-text-accent-heading`.
- **Accent focus** (`#7b57d8`) — `--brand50`, `--colors-badge-accent-inverse`; focus rings.
- **Link** (`#582fb4`) — `--colors-text-link`.
- **Accent subtle** (`#efecff`) — `--brand10`.
- **Pop** (`#cff066`) — `--colors-badge-pop`, a lime badge.

### Borders

**Border** `#e2e2e7` (`--colors-border-default`) · **Border neutral** `#c4c3ca`.

### Status

**Positive** `#046234` (badge `#c1f4d1`) · **Negative** `#ae1d1d` · **Warning** `#fbc64d`.

## 3. Typography Rules

### Font family

**Klarna Text** (400, 500, 700) and **Klarna Title** (700), both loaded (`document.fonts`) and
self-hosted at `x.klarnacdn.net/ui/fonts/v1.5/`. Headings use Klarna Title. Body copy blocks
compute to Klarna Text, though `<body>` itself and some buttons fall back to the system stack.

### Scale

28 `--textSizes-*` and 36 `--lineHeights-*` tokens. Measured: the pill button 16px/500, header
links 13px/500, accordion items 16px/400, the search field 14px/400.

## 4. Component Stylings

Measured on `klarna.com/se/` (the probe declines the cookie banner with "Avvisa alla" when it shows), focus read under a real Tab key,
and a hover counted only when `:hover` matched.

- **Pill button** — Logga in: **`#0b051d`**, label `#f9f8f5`, fully round, 42px, `11px 20px`,
  16px/500. Hover and press lift it to **`#2c2242`**. Focus adds `outline: 2px solid #0b051d`.
- **Header link** — Shoppa: `#0b051d`, 13px/500. Hover fades to opacity 0.84, press to 0.68. Focus:
  a purple `inset 0 0 0 1px #7b57d8` ring inside a 2px near-black outline.
- **Accordion item** — `#0b051d`, 64px, 16px/400. The same opacity steps; focus a 3px `#7b57d8`
  ring plus the outline.
- **Search field** — transparent, `#0b051d`, 14px/400. Nothing measured changes on hover or focus.

### Radius

`--radius-xs` 4 · `s` 8 · `m` 12 · 16 · 24 · 32px, and `99999px` for pills.

## 5. Layout Principles

- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px.
- Pink and tinted panels break up a white page; buttons are pills.

## 6. Depth & Elevation

`shadow-s` `0 2px 4px rgba(0,0,0,.1)` · `shadow-m` `0 6px 12px rgba(0,0,0,.1)` · `shadow-l`
`0 12px 24px rgba(0,0,0,.1)`.

## 7. Do's and Don'ts

### Do
- Use `#0b051d` for ink and the main button; lift it to `#2c2242` on hover.
- Use pink `#ffa8cd` as a surface or badge fill.
- Draw focus with the purple `#7b57d8` ring and a near-black outline.

### Don't
- Don't set body text in pink.
- Don't use pure black as the brand ink; the token is `#0b051d`.
- Don't mix the camelCase and kebab-case token layers in new work — they duplicate each other.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#0b051d` ink · `#ffa8cd` brand pink · `#2c2242` hover · `#7039e2` accent · `#7b57d8` focus ·
`#582fb4` link · `#f9f8f5` off-white · `#e2e2e7` border · `#cff066` pop

### Example Component Prompts
- "A 42px pill button, `#0b051d` with an `#f9f8f5` 16px/500 Klarna Text label; hover `#2c2242`;
  focus a 2px `#0b051d` outline."
- "A pink `#ffa8cd` promo panel with `#0b051d` Klarna Title heading."

## 10. Voice & Tone

The guidelines name "How We Speak" as a section; not assessed here.

## 11. Brand Narrative

Klarna grew from a Stockholm startup called Kreditor into a public payments company with 120 million
consumers. Its brand calls itself "not standard" and "refreshingly different", and the site keeps
that without shouting: violet-black type, pink as a mood rather than a signal, and a purple scale
that shows up where attention is needed — links, accents and focus.

## 12. Principles

- **Black-violet, not black.** The ink has a hue.
- **Pink is a place.** It fills surfaces; it does not colour words.
- **States are quiet.** A darker pill, a softer link.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: the pill to `#2c2242`; links and accordion items to opacity 0.84. Press: `#2c2242`; opacity
0.68. Focus: a 2px near-black outline, with a purple ring on links and accordion items. The search
field shows no change. A secondary "Visa fler" pill could not be hovered or focused (unmeasured).

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.klarna.com/se/ (live homepage — 547 root custom properties read via `getComputedStyle`; Klarna Text and Klarna Title loaded; four components measured at rest, hover, pressed and focus after declining cookies, captured 2026-09-26); https://brand.klarna.com/ (Klarna brand guidelines — nonsense path returns 404, read 2026-09-26); https://www.klarna.com/international/about-us/ (About Klarna — 2005, Kreditor became Klarna in 2010, NYSE listing September 2025, 120m consumers, read 2026-09-26); https://www.klarna.com/international/press/ (Klarna newsroom — "Klarna lists on the New York Stock Exchange", 10 September 2025, read 2026-09-26)

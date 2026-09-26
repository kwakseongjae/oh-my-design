---
id: avanza
name: Avanza
country: SE
category: fintech
homepage: "https://www.avanza.se"
primary_color: "#068E6A"
logo:
  type: favicon
  slug: "https://cdn.avanza.se/frontend/resources/images/favicon.ico"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand-green: "#068e6a"
    brand-container: "#d9f6eb"
    brand-stroke: "#bdefde"
    primary: "#0d1112"
    primary-hover: "#243133"
    secondary-hover: "#e8edee"
    buy: "#2970c2"
    buy-hover: "#155299"
    sell: "#d0184d"
    sell-hover: "#990a33"
    foreground: "#0d1112"
    text-secondary: "#5a6569"
    link: "#08729b"
    link-hover: "#0f5975"
    canvas: "#ffffff"
    background: "#f9fbfb"
    table-hover: "#f0f4f5"
    info-container: "#ddf5fd"
    warning-container: "#fcf1c0"
    private-banking: "#221a51"
  typography:
    family: { display: "Avanza", sans: "Roboto" }
    display: { size: 60, weight: 700, use: "hero heading" }
    body: { size: 16, weight: 500, use: "buttons; body 14px Roboto" }
  rounded: { pill: 500 }
  components:
    button-primary: { type: "button", bg: "#0d1112", fg: "#f9fbfb", border: "#0d1112", radius: 500, height: "48px", padding: "8px 16px", font: "16px / 500", hover: "#243133", pressed: "#243133", use: "Bli kund på 3 min — the near-black primary pill (--mint-color-button-primary); hover and press #243133, press also scales to 98%." }
    nav-tile: { type: "button", bg: "#ffffff", fg: "#0d1112", radius: 0, height: "70px", padding: "0 12px", font: "13px / 400", hover: "#e8edee", pressed: "#e8edee", use: "Spara & Investera, Bolån, Pension … — the main navigation items, white turning #e8edee on hover and press." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.avanza.se/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.avanza.se/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.avanza.se/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://investors.avanza.se/om/om-avanza/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.background: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-container: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-stroke: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.buy: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.buy-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.info-container: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.link: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.link-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.private-banking: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.secondary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.sell: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.sell-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.table-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning-container: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tile.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tile.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tile.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tile.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tile.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tile.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tile.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tile.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tile.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tile.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Avanza

## 1. Visual Theme & Atmosphere

"Avanza startades med en enkel idé" — Avanza started with a simple idea: to build a company its
founders would want to be customers of, charging as little as possible and offering "cheaper,
better and simpler products". It counts more than 2,300,000 customers, calls itself "Sveriges
nöjdaste sparare 16 år i rad enligt SKI", and offers shares, funds, pensions and mortgages (Bolån+,
Avanza Zero). The listed parent, Avanza Bank Holding, is quoted in SEK on its investor site.

The site is clean and financial: white and a faintly green-grey **`#f9fbfb`**, near-black
**`#0d1112`** for text and primary buttons, Avanza green **`#068e6a`** for brand and active states,
blue for buy **`#2970c2`** and red for sell **`#d0184d`**, and its own **Avanza** typeface for
headlines over **Roboto**.

What makes it worth reading:

- **Trading colours as tokens.** `--mint-color-button-buy` / `-buy-hover` and `-sell` /
  `-sell-hover` — buy is blue, sell is red; positive graph lines are blue, negative red.
- **A named system, "Mint".** 76 `--mint-color-*` roles: containers (brand, info, warning,
  destructive, private-banking), content, strokes, tags, tables, skeletons and graph series.
- **Graph palettes.** Eleven series strokes (`--mint-color-graph-series-stroke-a` … `-k`) plus
  Morningstar star colours.

### Primary tasks
- Become a customer; log in.
- Explore savings, mortgages, pensions and news.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `avanza.se`: 83 root custom properties — `--mint-*` 76, safe-area
and page-inset helpers. All first-party.

### Brand

- **Brand green** (`#068e6a`) — `--mint-color-container-active`, `-stroke-active`, graph primary.
- **Brand container** (`#d9f6eb`) · **Brand stroke** (`#bdefde`).

### Actions

- **Primary** (`#0d1112`) → hover (`#243133`) — `--mint-color-button-primary`.
- **Secondary hover** (`#e8edee`).
- **Buy** (`#2970c2`) → hover (`#155299`) · **Sell** (`#d0184d`) → hover (`#990a33`).

### Text, links and surfaces

- **Foreground** (`#0d1112`) · **Text secondary** (`#5a6569`).
- **Link** (`#08729b`) → hover (`#0f5975`).
- **Canvas** (`#ffffff`) · **Background** (`#f9fbfb`) · **Table hover** (`#f0f4f5`).
- **Info container** (`#ddf5fd`) · **Warning container** (`#fcf1c0`) · **Private banking**
  (`#221a51`).

## 3. Typography Rules

### Font family

**Avanza** (700) for headings and **Roboto** (400, 500) for text; both load (`document.fonts`).

### Scale

H1 60px/700 Avanza; H2 28px/700 Avanza; buttons 16px/500; navigation 13px/400.

## 4. Component Stylings

Measured with focus under a real Tab key and a hover counted only when `:hover` matched; consent
answered with "Endast nödvändiga cookies" (necessary only).

- **Primary pill** — Bli kund på 3 min: **`#0d1112`**, `#f9fbfb` 16px/500, 500px radius, 48px.
  Hover and press **`#243133`**; press also scales to **0.98**.
- **Navigation item** — Spara & Investera, Bolån, Pension: white, `#0d1112` 13px, 70px tall. Hover
  and press **`#e8edee`**.

### Radius

Full pills on buttons.

## 5. Layout Principles

- A slim top bar, a 70px navigation row, then a hero with the sign-up pill and product sections on
  white and `#f9fbfb`.

## 6. Depth & Elevation

Minimal; `--mint-color-shadow-primary` is `rgba(0,0,0,.04)`.

## 7. Do's and Don'ts

### Do
- Use near-black `#0d1112` for primary actions and green `#068e6a` for brand and active states.
- Keep buy blue and sell red, consistently, in buttons and graphs.
- Set headlines in the Avanza face.

### Don't
- Don't swap buy and sell colours or use green for "buy".
- Don't use pure black; the ink is `#0d1112`.
- Don't square off primary buttons.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#068e6a` Avanza green · `#0d1112` ink · `#243133` hover · `#2970c2` buy · `#d0184d` sell ·
`#08729b` link · `#f9fbfb` background · `#e8edee` hover surface

### Example Component Prompts
- "A 48px `#0d1112` pill, `#f9fbfb` 16px/500 Roboto; hover `#243133`; press scale 0.98."
- "A trade panel with a blue `#2970c2` buy button and a red `#d0184d` sell button."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

A Swedish savings platform built to be the company its founders would want to bank with — cheap,
simple, satisfied customers — with a calm near-black-and-green interface and trading colours that
never move.

## 12. Principles

- **As little as possible for the customer to pay.**
- **Cheaper, better, simpler.**
- **Buy is blue, sell is red.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: primary `#243133`; navigation `#e8edee`; links `#0f5975` (token). Press: the same, with a 0.98
scale on pills. Focus: the browser's ring on measured controls.

## 15. Motion & Easing

Press scale 0.98 observed; durations not measured.

---

**Tier 1 sources:** https://www.avanza.se/ (live homepage — 83 root custom properties read via `getComputedStyle`; Avanza and Roboto loaded; two components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.avanza.se/zz-this-does-not-exist (nonsense-path control — a "Sidan kan inte hittas" not-found page served with HTTP 200, read 2026-09-26); https://investors.avanza.se/om/om-avanza/ (Om Avanza — founding idea, 2,300,000+ customers, "Sveriges nöjdaste sparare 16 år i rad enligt SKI", Avanza Bank Holding quoted in SEK, read 2026-09-26)

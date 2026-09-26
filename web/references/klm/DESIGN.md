---
id: klm
name: KLM
country: NL
category: consumer-tech
homepage: "https://www.klm.nl"
primary_color: "#0070C2"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=klm.nl&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "KLM web tokens (--aero-*)"
  url: "https://www.klm.nl"
  type: system
  description: "klm.nl serves 832 --aero-* custom properties beside Angular Material's 884 --mat-* (excluded) and a 71-token --bwc palette: semantic colour roles for text, surface, border, background and action (primary, secondary, tertiary, alternative, critical) with hover and pressed values, plus Flying Blue loyalty, airport and cabin colours, spacing, type and elevation scales. KLM blue #0070c2 is the brand and the primary action, stepping to #005496 and #003d6d; text is a deep navy #002746; focus is a 2px #001527 outline. Type is Universal Sans Display and Universal Sans Text."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#0070c2"
    primary-hover: "#005496"
    primary-pressed: "#003d6d"
    foreground: "#002746"
    navy-900: "#001527"
    background: "#f6f7f8"
    canvas: "#ffffff"
    tertiary-hover: "#eaebec"
    tertiary-pressed: "#d4d8da"
    primary-50: "#eaf4fb"
    blue-200: "#a5d5ef"
    signature: "#009fda"
    text-muted: "#536069"
    text-disabled: "#889096"
    border-strong: "#aab0b5"
    flying-blue: "#0800b9"
    critical: "#ad0029"
    la-premiere: "#d40504"
  typography:
    family: { display: "Universal Sans Display", sans: "Universal Sans Text" }
    button: { size: 14, weight: 500, use: "flight search button" }
    nav: { size: 16, weight: 400, use: "header tabs" }
  rounded: { sm: 4 }
  components:
    button-search: { type: "button", bg: "#0070c2", fg: "#ffffff", radius: 4, height: "48px", font: "14px / 500", hover: "#005496", pressed: "#003d6d", use: "Zoek vluchten — --aero-color-background-brand, stepping to --aero-color-surface-action-primary-hover #005496 and #003d6d when pressed." }
    nav-tab: { type: "button", bg: "#ffffff", fg: "#0070c2", border: "#0070c2", radius: 4, height: "50px", font: "16px / 400", hover: "#eaebec + fg #005496", pressed: "#d4d8da + fg #003d6d", focus: "outline 2px solid #001527", use: "Boeken, Mijn Reis, Check-in, Flying Blue — white tabs whose grey wash and blue label deepen on hover and press; focus is a 2px navy outline." }
    button-utility: { type: "button", bg: "#ffffff", fg: "#002746", border: "#002746", radius: 4, height: "48px", padding: "12px", font: "20px / 500", hover: "#eaebec", pressed: "#d4d8da", focus: "outline 2px solid #001527", use: "Zoeken, Inloggen in the header — white with navy text; --aero-color-surface-action-tertiary-hover #eaebec, then #d4d8da." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.klm.nl/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.klm.nl/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.klm.nl/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: newsroom, kind: official-doc, url: "https://news.klm.com/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.background: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.blue-200: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.critical: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.flying-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.la-premiere: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.navy-900: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-50: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.signature: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.tertiary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.tertiary-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-utility.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-tab.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of KLM

## 1. Visual Theme & Atmosphere

KLM Royal Dutch Airlines "was founded on 7 October 1919 and is the oldest airline in the world
still operating under its original name", in its newsroom's words. The KLM Group carried 34.1
million passengers and 621,000 tonnes of cargo, with 92 European and 70 intercontinental
destinations, and "since the merger with Air France in 2004" it has operated as one of the two
airlines of the Air France KLM Group.

The Dutch site is clean and unmistakably KLM: white and cool grey **`#f6f7f8`** surfaces, deep navy
**`#002746`** text, and KLM blue **`#0070c2`** for the brand, links and the flight search. Controls
are 4px-rounded; type is **Universal Sans Display** and **Universal Sans Text**.

What makes it worth reading:

- **A semantic system with an airline's vocabulary.** Beside text, surface and action roles, the
  `--aero-*` tokens name Flying Blue loyalty tiers, airports (`--aero-color-surface-airport-ams`)
  and cabin classes (`--aero-color-text-la-premiere-default`).
- **Three-step actions.** The blue goes `#0070c2` → `#005496` (hover) → `#003d6d` (pressed); white
  controls go through `#eaebec` and `#d4d8da`.
- **A dark focus outline.** A 2px `#001527` outline marks keyboard focus.

### Primary tasks
- Search flights; book, manage a trip, check in.
- Flying Blue; help.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `klm.nl`: 1,792 root custom properties — `--aero-*` 832
(KLM's), `--mat-*` 884 (Angular Material, excluded), `--bwc-*` 71 (a palette layer) and a few others.

### Blue

- **Primary** (`#0070c2`) — `--aero-color-primary-500`, `--aero-color-background-brand`,
  `--aero-color-text-brand`, `--aero-color-text-link-default`.
- **Primary hover** (`#005496`) — `--aero-color-surface-action-primary-hover`, `--aero-color-blue-600`.
- **Primary pressed** (`#003d6d`) — `--aero-color-blue-700`.
- **Primary 50** (`#eaf4fb`) · **Blue 200** (`#a5d5ef`) · **Signature** (`#009fda`,
  `--aero-color-border-brand-signature`).

### Navy and neutrals

- **Foreground** (`#002746`) — `--aero-color-text-default`; 19 of 23 `<p>` elements.
- **Navy 900** (`#001527`) — the focus outline.
- **Background** (`#f6f7f8`) — `--aero-color-background-default`.
- **Canvas** (`#ffffff`) — `--aero-color-surface-default`.
- **Tertiary hover** (`#eaebec`) · **pressed** (`#d4d8da`).
- **Text muted** (`#536069`) · **Text disabled** (`#889096`) · **Border strong** (`#aab0b5`).

### Loyalty and cabins

**Flying Blue** `#0800b9` (`--aero-color-brand-loyalty-one`) · **Critical** `#ad0029` · **La
Première** `#d40504`.

## 3. Typography Rules

### Font family

**Universal Sans Display** (500) and **Universal Sans Text** (400, 500, 600), loaded
(`document.fonts`).

### Scale

The flight search button is 14px/500; header tabs 16px/400; header utility buttons 20px/500.

## 4. Component Stylings

Measured after declining cookies ("Weiger"), focus read under a real Tab key, and a hover counted
only when `:hover` matched; background-image, text-decoration and pseudo-elements were compared too.

- **Flight search** — Zoek vluchten: **`#0070c2`**, white 14px/500, 4px, 48px. Hover **`#005496`**,
  press **`#003d6d`**.
- **Header tabs** — Boeken, Mijn Reis, Check-in: white, blue label, 4px, 50px. Hover `#eaebec` with a
  `#005496` label; press `#d4d8da` with `#003d6d`. Focus: `outline: 2px solid #001527`.
- **Utility buttons** — Zoeken, Inloggen: white, navy 20px/500, 48px, `12px`. Hover `#eaebec`, press
  `#d4d8da`, the same focus outline.

### Radius

4px on buttons and tabs.

## 5. Layout Principles

- The booking widget leads the page on a blue band; grey `#f6f7f8` sections below.

## 6. Depth & Elevation

`--aero-shadow-*` and `--aero-elevation-*` tokens exist; the measured controls are flat.

## 7. Do's and Don'ts

### Do
- Use KLM blue `#0070c2` for the primary action, stepping to `#005496` and `#003d6d`.
- Set text in navy `#002746`.
- Draw focus as a 2px `#001527` outline.

### Don't
- Don't count Angular Material's `--mat-*` as KLM tokens.
- Don't use the Flying Blue indigo `#0800b9` outside loyalty contexts.
- Don't round beyond 4px.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#0070c2` KLM blue · `#005496` hover · `#003d6d` pressed · `#002746` navy · `#001527` focus ·
`#f6f7f8` background · `#eaebec` / `#d4d8da` grey states · `#0800b9` Flying Blue

### Example Component Prompts
- "A 48px KLM blue `#0070c2` button, white 14px/500 Universal Sans Text, 4px radius; hover `#005496`,
  press `#003d6d`."
- "A white tab with a blue label that washes to `#eaebec` on hover; focus a 2px `#001527` outline."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

The oldest airline still flying under its original name keeps its identity in one colour: KLM blue.
The site pairs it with navy text and quiet greys, and its tokens speak an airline's language —
airports, cabins, loyalty tiers — on top of a conventional semantic core.

## 12. Principles

- **Blue is KLM.** Brand, links and the main action.
- **Three steps per action.** Rest, hover, pressed.
- **Visible focus.** A dark 2px outline.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: search `#005496`, tabs and utilities `#eaebec`. Press: `#003d6d` and `#d4d8da`. Focus: a 2px
`#001527` outline on tabs and utilities.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.klm.nl/ (live homepage — 1,792 root custom properties read via `getComputedStyle`, Angular Material excluded; Universal Sans loaded; three components measured at rest, hover, pressed and focus after declining cookies, captured 2026-09-26); https://www.klm.nl/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://news.klm.com/ (KLM newsroom — founded 7 October 1919, oldest airline under its original name, 34.1 million passengers, Air France KLM Group since 2004, read 2026-09-26)

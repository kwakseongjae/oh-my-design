---
id: fever
name: Fever
country: US
category: consumer-tech
homepage: "https://feverup.com"
primary_color: "#0079CA"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=feverup.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#0079ca"
    primary-hover: "#0068b0"
    primary-weak: "#e6f4ff"
    focus-glow: "#add4ee"
    ink: "#031419"
    black: "#000405"
    main-contrast: "#06232c"
    subtle-contrast: "#2c4751"
    text-secondary: "#536b75"
    text-disabled: "#a7b2ba"
    canvas: "#ffffff"
    surface: "#fafbfb"
    surface-subtle: "#f2f3f3"
    border: "#ccd2d8"
    accent: "#6f41d7"
    accent-weak: "#f0ebfd"
    danger: "#eb0052"
    success: "#18824c"
    warning: "#9f5800"
  typography:
    family: { sans: "Montserrat" }
    body: { size: 16, weight: 400, use: "body, links and the city search" }
    chip: { size: 14, weight: 600, use: "category filter chips" }
  rounded: { chip: 64, search: 32, button: 100 }
  components:
    chip-selected: { type: "button", bg: "#000405", fg: "#fafbfb", radius: 64, height: "38px", padding: "8px 16px", font: "14px / 600", hover: "#000405", pressed: "#000405", focus: "outline 2px solid #000405", use: "All — the selected category chip on a city page: near-black with an off-white label; hover changes nothing; focus a 2px outline." }
    chip: { type: "button", bg: "#ffffff", fg: "#031419", border: "#a7b2ba", radius: 64, height: "38px", padding: "8px 16px", font: "14px / 600", hover: "#fafbfb", pressed: "#fafbfb", focus: "outline 2px solid #000405", use: "Live Music, Nightlife, Family … — white chips with a grey border that tint #fafbfb on hover." }
    link-see-all: { type: "button", bg: "transparent", fg: "#031419", radius: 0, height: "24px", font: "16px / 400", hover: "fg #536b75", pressed: "fg #536b75", use: "See all — ink text that turns #536b75 and underlines on hover and press." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://feverup.com/en/madrid", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://feverup.com/en/madrid", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://feverup.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: terms, kind: official-doc, url: "https://feverup.com/legal/terms_en.html", captured: "2026-09-26" }
    - { id: careers, kind: official-doc, url: "https://careers.feverup.com/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.accent: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.accent-weak: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.black: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.danger: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.focus-glow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.ink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.main-contrast: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-weak: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.subtle-contrast: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.chip-selected.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip-selected.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip-selected.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip-selected.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip-selected.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip-selected.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip-selected.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip-selected.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip-selected.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip-selected.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip-selected.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.chip.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-see-all.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-see-all.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-see-all.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-see-all.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-see-all.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-see-all.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-see-all.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-see-all.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-see-all.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.button: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.chip: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.search: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.chip.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.chip.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.chip.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Fever

## 1. Visual Theme & Atmosphere

Fever calls itself "the leading global live-entertainment discovery tech platform", helping
millions of people each week find experiences in their cities, "with a mission to democratize
access to culture and entertainment in real life". Its careers page counts 3,000+ employees of 56+
nationalities, a campus in Madrid, local offices in more than 15 cities and a platform in more than
150 cities. The contracting company is **Fever Labs Inc.**, a Delaware corporation with offices at
50 Greene St, New York.

The site is photographic and dark-on-light: a full-bleed video hero ("Experience your city"), then
an off-white page **`#fafbfb`** of plan cards, near-black ink **`#031419`**, a blue **`#0079ca`**
for primary actions, and hot magenta **`#eb0052`** for alerts and badges. Type is **Montserrat**.

What makes it worth reading:

- **Component-scoped tokens.** 608 `--fv-*` properties named by component and role —
  `--fv-plan-view-color-action-background-primary`, `--fv-text-field-focus-box-shadow`,
  `--fv-order-reschedule-*`, `--fv-voucher-card-*`.
- **A blue-grey neutral ramp.** `#031419`, `#06232c`, `#2c4751`, `#536b75`, `#a7b2ba`, `#ccd2d8`.
- **Paired weak tints.** Each status has a weak background — primary `#e6f4ff`, accent `#f0ebfd`,
  positive `#e8f8f0`, danger `#fff0f4`.

### Primary tasks
- Pick a city; filter plans by category.
- Open a plan and buy tickets.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `feverup.com/en` and `/en/madrid`: 617 root custom properties,
608 of them `--fv-*`. All first-party.

### Blue (primary)

- **Primary** (`#0079ca`) — `--fv-button-primary-background`, `--fv-plan-view-color-action-*-primary`.
- **Primary hover** (`#0068b0`) — `--fv-plan-view-button-background-primary-hover`; the text field's
  focus border.
- **Primary weak** (`#e6f4ff`) · **Focus glow** (`#add4ee`, a 4px text-field shadow).

### Ink and neutrals

- **Ink** (`#031419`) — light-button and chip text · **Black** (`#000405`) — the selected chip.
- **Main contrast** (`#06232c`) — dark buttons · **Subtle contrast** (`#2c4751`).
- **Text secondary** (`#536b75`) · **Text disabled** (`#a7b2ba`).
- **Canvas** (`#ffffff`) · **Surface** (`#fafbfb`) · **Surface subtle** (`#f2f3f3`) · **Border**
  (`#ccd2d8`).

### Accent and status

**Accent** `#6f41d7` · **Accent weak** `#f0ebfd` · **Danger** `#eb0052` · **Success** `#18824c` ·
**Warning** `#9f5800`.

## 3. Typography Rules

### Font family

**Montserrat** (400, 600), `Montserrat, sans-serif`, loaded (`document.fonts`).

### Scale

Body and links 16px/400; chips 14px/600.

## 4. Component Stylings

Measured on the Madrid city page, focus read under a real Tab key and a hover counted only when
`:hover` matched. The consent banner offered only "Accept" and was never answered.

- **Selected chip** — All: **`#000405`**, `#fafbfb` 14px/600, 64px radius, 38px. Hover no change;
  focus a **2px `#000405`** outline.
- **Chip** — Live Music and others: white, `#031419` label, `#a7b2ba` border. Hover **`#fafbfb`**;
  same focus.
- **See all** — `#031419` 16px. Hover and press turn it **`#536b75`** and underline.

### Radius

64px chips, 32px city search, 100px buttons.

## 5. Layout Principles

- A white header with city picker, a video hero with search, then rows of plan cards and category
  chips.

## 6. Depth & Elevation

Flat cards on `#fafbfb`; the hero is photographic.

## 7. Do's and Don'ts

### Do
- Use `#0079ca` for primary actions with `#0068b0` hover.
- Keep ink and neutrals on the blue-grey ramp.
- Pair every status colour with its weak tint.

### Don't
- Don't use pure black text; the ink is `#031419`.
- Don't use magenta `#eb0052` for actions; it is danger and alerts.
- Don't drop the 2px chip focus outline.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#0079ca` blue · `#0068b0` blue hover · `#031419` ink · `#536b75` secondary · `#fafbfb` surface ·
`#ccd2d8` border · `#6f41d7` accent · `#eb0052` danger

### Example Component Prompts
- "38px pill chips in Montserrat 14px/600: selected `#000405` with `#fafbfb` text, others white with
  a `#a7b2ba` border tinting `#fafbfb` on hover."
- "A text field with a 2px `#0068b0` focus border and a 4px `#add4ee` glow."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Fever turns a city into a menu of things to do — music, sports, culture, pop-ups — and its
interface steps back behind photography: off-white, blue-grey ink, one blue for buying and magenta
for urgency.

## 12. Principles

- **Culture for everyone.** The mission it states.
- **Components own their tokens.**
- **Weak and strong pairs.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: chips tint `#fafbfb`; links turn `#536b75` and underline. Focus: 2px outlines on chips; a
2px `#0068b0` border and `#add4ee` glow on text fields (tokens).

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://feverup.com/en/madrid (live city page — 617 root custom properties read via `getComputedStyle`; Montserrat loaded; three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://feverup.com/en/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://feverup.com/legal/terms_en.html (Terms — Fever Labs Inc., Delaware corporation, offices at 50 Greene St, New York, read 2026-09-26); https://careers.feverup.com/ (careers — mission, 3,000+ employees, campus in Madrid, 150+ cities, read 2026-09-26)

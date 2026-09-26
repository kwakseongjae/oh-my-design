---
id: spendesk
name: Spendesk
country: FR
category: fintech
homepage: "https://www.spendesk.com"
primary_color: "#7136ED"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=spendesk.com&sz=128"
verified: "2026-09-27"
added: "2026-09-27"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-27"
  colors:
    brand-deep-purple: "#7136ed"
    brand-carbon: "#191b1b"
    brand-grolive: "#f3f4ef"
    purple: "#5d21d2"
    purple-hover: "#4b1baf"
    purple-ultradark: "#27175c"
    purple-ultralight: "#f7f4fd"
    lavender: "#9477f3"
    periwinkle: "#b3bffa"
    mint: "#91d69f"
    teal: "#4ac8c6"
    pink: "#e473ff"
    salmon: "#ffa38a"
    error: "#f04c74"
    foreground: "#191b1b"
    text-secondary: "#636363"
    canvas: "#ffffff"
    neutral-100: "#f7f7f7"
    neutral-400: "#cccccc"
  typography:
    family: { display: "Roobert", sans: "Inter" }
    display: { size: 64, weight: 500, use: "hero H1; H2 48px/500" }
    button: { size: 16, weight: 600, use: "header buttons" }
  rounded: { md: 8 }
  components:
    button-primary: { type: "button", bg: "#7136ed", fg: "#ffffff", radius: 8, height: "44px", padding: "14px 20px", font: "16px / 600", hover: "#7136ed", pressed: "#7136ed", use: "Book a demo — brand deep purple; :hover matched and the button's own values did not change." }
    button-secondary: { type: "button", bg: "#f3f4ef", fg: "#191b1b", radius: 8, height: "46px", padding: "14px 20px", font: "16px / 600", hover: "#f3f4ef", pressed: "#f3f4ef", use: "Login — grolive with carbon text and a 10% carbon border; no hover change." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-27"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.spendesk.com/en/", inspected: "2026-09-27" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.spendesk.com/en/", captured: "2026-09-27" }
    - { id: control-404, kind: product-surface, url: "https://www.spendesk.com/zz-this-does-not-exist", captured: "2026-09-27" }
    - { id: about, kind: official-doc, url: "https://www.spendesk.com/about/", captured: "2026-09-27" }
    - { id: privacy, kind: official-doc, url: "https://www.spendesk.com/en-eu/legals/privacy/", captured: "2026-09-27" }
  conflicts: []
  claims:
    tokens.colors.brand-carbon: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.brand-deep-purple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.brand-grolive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.error: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.lavender: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.mint: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.neutral-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.neutral-400: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.periwinkle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.pink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.purple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.purple-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.purple-ultradark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.purple-ultralight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.salmon: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.teal: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.display.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
---
# Design System Inspiration of Spendesk

## 1. Visual Theme & Atmosphere

"Spend smarter with Spendesk." Spendesk is "one complete spend management solution" — procurement,
cards, invoices, expenses, approvals, budgets, reporting and pre-accounting — built for finance
teams, with the mission "to liberate businesses and people to do their best work". Its guiding
principles include "Visibility is fundamental for business growth" and "Simplicity equals
adoption". The company is a simplified joint stock company registered in Paris, with its registered
office at 51 rue de Londres, 75008 Paris.

The site pairs a carbon ink **`#191b1b`** with Spendesk's deep purple **`#7136ed`**, an olive-grey
neutral it calls "grolive" **`#f3f4ef`**, and soft accents — lavender **`#9477f3`**, periwinkle
**`#b3bffa`**, mint **`#91d69f`**. Headlines are **Roobert**, text **Inter**.

What makes it worth reading:

- **Three named brand colours.** `--brand-carbon`, `--brand-deep-purple`, `--brand-grolive` — ink,
  action and ground.
- **A wide supporting palette.** `--color-tp-*`: purples from ultralight to ultradark, pinks, teal,
  salmon and a set of greys.
- **Restrained buttons.** The measured buttons hold their colour on hover.

### Primary tasks
- Book a demo; log in.
- See pricing and customer stories.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `spendesk.com/en`: 194 root custom properties — `--color-*` 28,
`--sp-*` 27, `--fs-*` 25, `--br-*` 23, `--space-*` 20, `--lh-*` 15, `--neutral-*` 10 … All first-party.

### Brand

- **Deep purple** (`#7136ed`) — `--brand-deep-purple`; Book a demo.
- **Carbon** (`#191b1b`) — `--brand-carbon`; text.
- **Grolive** (`#f3f4ef`) — `--brand-grolive`; secondary buttons and sections.

### Purples

**Purple** `#5d21d2` → hover `#4b1baf` · **Ultradark** `#27175c` · **Ultralight** `#f7f4fd` ·
**Lavender** `#9477f3` (section fills).

### Accents

**Periwinkle** `#b3bffa` · **Mint** `#91d69f` · **Teal** `#4ac8c6` · **Pink** `#e473ff` · **Salmon**
`#ffa38a` · **Error** `#f04c74`.

### Neutrals

- **Foreground** (`#191b1b`) · **Text secondary** (`#636363`).
- **Canvas** (`#ffffff`) · **Neutral 100** (`#f7f7f7`) · **Neutral 400** (`#cccccc`).

## 3. Typography Rules

### Font family

**Roobert** (500, 600) for headlines and **Inter** (variable) for text; both load (`document.fonts`).

### Scale

H1 64px/500 Roobert; H2 48px/500; eyebrows 14px/600 uppercase Inter; buttons 16px/600.

## 4. Component Stylings

Measured with a hover counted only when `:hover` matched; consent denied. Focus showed only the
browser's ring and is not recorded.

- **Primary** — Book a demo: **`#7136ed`**, white 16px/600, 8px, 44px. Hover and press: no change in
  the button's own values.
- **Secondary** — Login: **`#f3f4ef`**, `#191b1b` text, a 10% carbon border, 8px, 46px. No hover
  change.

### Radius

8px on buttons.

## 5. Layout Principles

- A white header with navigation and the two buttons, a hero with a large Roobert headline, then
  product sections on grolive and lavender.

## 6. Depth & Elevation

Flat; colour blocks separate sections.

## 7. Do's and Don'ts

### Do
- Use deep purple `#7136ed` for the main action, carbon for text, grolive for quiet surfaces.
- Keep accents soft — lavender, periwinkle, mint.
- Set headlines in Roobert.

### Don't
- Don't use pure black; the ink is carbon `#191b1b`.
- Don't use pure grey for neutral surfaces; grolive has an olive tint.
- Don't invent hover colours; the measured buttons hold their colour.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#7136ed` deep purple · `#191b1b` carbon · `#f3f4ef` grolive · `#9477f3` lavender · `#b3bffa`
periwinkle · `#91d69f` mint · `#636363` secondary · `#f04c74` error

### Example Component Prompts
- "A 44px `#7136ed` button, white 16px/600 Inter, 8px radius."
- "A 64px Roobert headline in carbon `#191b1b` on white, over a grolive `#f3f4ef` section."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

A Paris spend-management company promising finance teams visibility and simplicity. Its brand
reduces to three words — carbon, deep purple, grolive — with soft accents for everything else.

## 12. Principles

- **Visibility is fundamental for business growth.**
- **Simplicity equals adoption.**
- **Three brand colours.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover and press: no change on the measured buttons. Focus: the browser's ring (not recorded).

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.spendesk.com/en/ (live homepage — 194 root custom properties read via `getComputedStyle`; Roobert and Inter loaded; two components measured at rest, hover and pressed, captured 2026-09-27); https://www.spendesk.com/en/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-27); https://www.spendesk.com/about/ (About — mission, spend management scope, guiding principles, read 2026-09-27); https://www.spendesk.com/en-eu/legals/privacy/ (privacy policy — Spendesk, Paris Trade and Companies Register 821 893 286, 51 rue de Londres, 75008 Paris, read 2026-09-27)

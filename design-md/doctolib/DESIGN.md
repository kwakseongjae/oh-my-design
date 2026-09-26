---
id: doctolib
name: Doctolib
country: FR
category: healthcare
homepage: "https://www.doctolib.fr"
primary_color: "#045FAE"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=doctolib.fr&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Oxygen"
  url: "https://oxygen.doctolib.design"
  type: system
  description: "Doctolib's design system, which its own careers page describes as how the brand identity is delivered consistently throughout the product. doctolib.fr serves 3,650 --oxygen-* custom properties: a core colour ramp, a semantic layer named by intent, surface and strength (brand, neutral, danger, positive …; prominent, subtle; weak to stronger), and per-component tokens. Documentation is public on zeroheight, with a Storybook on GitHub Pages. Titles are Montserrat bold and body text Roboto; the ink and the search button are a deep navy, #00264c."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#045fae"
    primary: "#00264c"
    foreground: "#00264c"
    text-secondary: "#294056"
    neutral: "#3a5978"
    mute: "#7599bd"
    brand-chrome: "#107aca"
    brand-subtle: "#d0e9fb"
    brand-subtle-weak: "#e7f4fd"
    surface-subtle: "#f1f7fe"
    border-subtle: "#c9d9e8"
    canvas: "#ffffff"
    danger: "#e5004c"
    positive: "#00806a"
    warning: "#aa6709"
    informative: "#007ab3"
  typography:
    family: { display: "Montserrat", sans: "Roboto" }
    body: { size: 14, weight: 400, use: "the search fields and the search button, Roboto" }
  rounded: { sm: 8, md: 12, search: 32, pill: 999 }
  components:
    button-search: { type: "button", bg: "#00264c", fg: "#ffffff", border: "#ffffff", radius: "0 32px 32px 0", height: "60px", padding: "16px", font: "14px / 400", hover: "#00264c", pressed: "#00264c", focus: "box-shadow 0 0 0 2px #ffffff, 0 0 0 4px #3a5978", use: "Rechercher, the right end of the home-page search pill. Hover and press change nothing (confirmed with :hover and :active matched); focus draws a white ring inside a slate one — --oxygen-color-semantic-neutral-prominent-base." }
    input-search: { type: "input", bg: "#ffffff", fg: "#294056", border: "#294056", radius: "32px 0 0 32px", height: "60px", padding: "0 16px 0 46px", font: "14px / 400", hover: "#ffffff", focus: "#ffffff", use: "The practitioner field (Nom, spécialité, établissement…), the left end of the search pill with an icon slot. Hover and focus change nothing, and no focus indicator is drawn." }
    input-location: { type: "input", bg: "#ffffff", fg: "#294056", border: "#294056", radius: 0, height: "60px", padding: "0 46px", font: "14px / 400", hover: "#ffffff", focus: "#ffffff", use: "The location field (Où ?), the square middle of the search pill. Like the practitioner field, it shows no hover or focus change." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.doctolib.fr/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.doctolib.fr/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://oxygen.doctolib.design/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: oxygen-docs, kind: official-doc, url: "https://oxygen.doctolib.design/", captured: "2026-09-26" }
    - { id: storybook, kind: official-doc, url: "https://doctolib.github.io/storybook/", captured: "2026-09-26" }
    - { id: careers, kind: official-doc, url: "https://careers.doctolib.com/", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://about.doctolib.com/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-chrome: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-subtle-weak: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.danger: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.informative: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.mute: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.neutral: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.positive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-location.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.search: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Doctolib

## 1. Visual Theme & Atmosphere

Doctolib is the French healthcare platform patients use to book medical appointments and
practitioners use to run their practices. "Since 2013," in its own words, it "has been committed to
one objective: Building the healthcare we all dream of, together with caregivers and patients."
Co-founder and CEO Stanislas Niox-Chateau describes AI-powered tools that serve hundreds of thousands
of health professionals and millions of people across Europe. In March 2022 it became the most highly
valued French startup, at €5.8 billion, with 300,000 healthcare workers on the platform and 60 million
people having used it in France, Germany and Italy. For patients booking is free; the business sells
software subscriptions to practitioners.

The public site is calm and clinical: white ground, deep navy **`#00264c`** ink, and a single large
search pill that is the whole home page. Titles are set in **Montserrat** bold; everything else in
**Roboto**. The brand blue **`#045fae`** and the lighter chrome blue **`#107aca`** carry the brand
without turning actions bright — the search button is navy, not blue.

What makes it worth reading:

- **A semantic grammar you can read.** Oxygen names colours as intent, surface and strength —
  `--oxygen-color-semantic-brand-prominent-stronger`, `-brand-subtle-base`,
  `-neutral-prominent-base`. The navy is `brand-prominent-stronger`, and it is also
  `common-text-prominent-strong`, the ink.
- **Scale.** 3,650 `--oxygen-*` properties on the public home page, 1,510 of them component
  colours.
- **Focus is uneven.** The search button draws an authored double ring; the two search fields
  beside it draw nothing.

### Primary tasks
- Find a practitioner by name, speciality or establishment, and a place.
- Book, move or cancel an appointment.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `doctolib.fr`: 3,701 root custom properties — 3,650
`--oxygen-*` and 51 `--tw-*`. The Tailwind variables are framework machinery and are excluded.

Oxygen has three colour layers: `--oxygen-core-*` (148, ramps numbered 010–160), an older
`--oxygen-color-primitive-*` ramp over the same hues (188), and `--oxygen-color-semantic-*` (128),
named `{intent}-{surface}-{strength}`.

### Brand and ink

- **Brand** (`#045fae`) — `--oxygen-color-semantic-brand-prominent-base`.
- **Primary** (`#00264c`) — `brand-prominent-stronger`; the search button.
- **Foreground** (`#00264c`) — `common-text-prominent-strong`; 15 of 23 `<p>` elements sampled.
- **Text secondary** (`#294056`) — `common-text-prominent-base`; the search fields' text and border.
- **Neutral** (`#3a5978`) — `neutral-prominent-base`; the outer focus ring.
- **Mute** (`#7599bd`) — `mute-prominent-base`.
- **Brand chrome** (`#107aca`) — `brand-surface-prominent-weak`; six backgrounds in the navigation
  chrome.

### Tints and surfaces

**Brand subtle** `#d0e9fb` (`brand-subtle-base`) · **Brand subtle weak** `#e7f4fd` · **Surface
subtle** `#f1f7fe` (`common-surface-subtle-weak`) · **Border subtle** `#c9d9e8` · **Canvas**
`#ffffff`.

### Status

**Danger** `#e5004c` · **Positive** `#00806a` · **Warning** `#aa6709` · **Informative** `#007ab3`.
Three alternative intents add purple `#7333cc`, green `#32730d` and rust `#ad421f`.

## 3. Typography Rules

### Font family

**Montserrat** for titles and **Roboto** for body text and controls, both served from Doctolib's
own asset host, `assets.doctolib.fr/fonts/`. `document.fonts` loaded Montserrat 700 and Roboto
400, 500 and 700. The same stylesheet declares Merriweather, which did not load on the page
measured.

### Scale

Oxygen composes type into shorthand tokens, for example `--oxygen-font-semantic-title-l-bold:
bold 1.8rem/2.4rem Montserrat,arial,sans-serif`. Body steps run xs, s and m; titles s to xxxl.
The search fields and button are 14px at 400.

## 4. Component Stylings

Measured on the home page after declining the consent banner (Didomi). Cloudflare Turnstile lays an
invisible full-page widget over the page; its pointer events were disabled so hover could reach the
controls. Focus was read under a real Tab key.

The search bar is one pill in three parts:

- **Practitioner field** — `#ffffff`, text and border `#294056`, radius `32px 0 0 32px`, 60px,
  `0 16px 0 46px` (an icon slot), 14px/400. No change on hover; on focus nothing is drawn.
- **Location field** — the same colours, square, 60px. Also no hover or focus change.
- **Search button** — Rechercher: **`#00264c`**, white label, a white seam, radius `0 32px 32px 0`,
  60px, 14px/400. Hover and press change nothing. Focus draws **`0 0 0 2px #ffffff, 0 0 0 4px
  #3a5978`** — a white ring inside a slate one.

### Radius

Rendered: 8px, 12px, the 32px ends of the search pill, and 999px pills. Oxygen's radius primitives
run from `0.4rem` to `2.4rem`, plus `--oxygen-number-radius-rounded` `99.9rem`.

## 5. Layout Principles

- The home page leads with the search pill; everything else is secondary.
- Spacing and grid primitives (`--oxygen-number-spacing-*`) run up to `8rem`.

## 6. Depth & Elevation

One elevation recurs: `rgba(5,43,71,.07) 0 2px 4px, rgba(5,43,71,.09) 0 5px 25px` — two soft,
navy-tinted shadows.

## 7. Do's and Don'ts

### Do
- Use navy `#00264c` for ink and the main action; keep the brand blue `#045fae` for brand moments.
- Title in Montserrat bold, set everything else in Roboto.
- Draw the double ring `#ffffff` + `#3a5978` on focus.

### Don't
- Don't count Tailwind's `--tw-*` variables as Oxygen.
- Don't leave inputs without a focus indicator — the live search fields do, and it is a gap, not a
  pattern.
- Don't brighten the main action to the chrome blue `#107aca`.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#00264c` navy ink and action · `#045fae` brand · `#107aca` chrome blue · `#294056` secondary text ·
`#3a5978` focus ring · `#d0e9fb` / `#e7f4fd` blue tints · `#f1f7fe` surface · `#e5004c` danger ·
`#00806a` positive

### Example Component Prompts
- "A 60px search pill: two white fields with `#294056` borders and a navy `#00264c` Rechercher
  button on the right, 14px Roboto; focus a white 2px ring inside a `#3a5978` 4px ring."
- "A Montserrat bold title in `#00264c` over Roboto body text on white."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Doctolib started in 2013 with appointment booking and grew into practice software used across
France, Germany and Italy. Its site is deliberately quiet — navy on white, one search, and blue kept
for the brand. Oxygen, which Doctolib calls "much more than a component library", is how the brand
reaches every product surface. Its semantic names spell out intent and strength. The public page
alone carries 3,650 of its tokens.

## 12. Principles

- **One task first.** The search pill is the page.
- **Navy is the ink.** The same token colours text and the main action.
- **Name by intent.** Colour tokens say what they do, then how strongly.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: no change on the search button or the fields. Press: no change on the button. Focus: a
double ring on the button, nothing on the fields. No disabled state was observed.

## 15. Motion & Easing

The search button transitions opacity over 0.5s and colour, background and border over 0.1s.

---

**Tier 1 sources:** https://www.doctolib.fr/ (live homepage — 3,701 root custom properties read via `getComputedStyle`, Tailwind excluded; Montserrat and Roboto loaded; three components measured at rest, hover, pressed and focus after declining the consent banner, captured 2026-09-26); https://oxygen.doctolib.design/ (Doctolib Design System on zeroheight — nonsense path returns "zeroheight - not found" 404, read 2026-09-26); https://doctolib.github.io/storybook/ (Oxygen Storybook, read 2026-09-26); https://careers.doctolib.com/ (Doctolib Careers — a Brand and Design posting names Oxygen as Doctolib's design system, read 2026-09-26); https://about.doctolib.com/ (About Doctolib — "Since 2013", co-founder and CEO Stanislas Niox-Chateau, read 2026-09-26); https://techcrunch.com/2022/03/15/healthcare-tech-platform-doctolib-reaches-6-4-billion-valuation/ (TechCrunch, 15 Mar 2022 — €5.8 billion valuation, 300,000 healthcare workers, 60 million people in France, Germany and Italy, read 2026-09-26); https://www.journaldugeek.com/2025/04/30/doctolib-nest-pas-rentable-mais-il-va-le-devenir/ (Journal du Geek, 30 Apr 2025 — revenue from practitioner software subscriptions, read 2026-09-26)

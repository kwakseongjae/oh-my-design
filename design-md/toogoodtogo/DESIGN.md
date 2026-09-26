---
id: toogoodtogo
name: Too Good To Go
country: DK
category: consumer-tech
homepage: "https://www.toogoodtogo.com"
primary_color: "#00615F"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=toogoodtogo.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    leafy-green: "#00615f"
    leafy-green-alt: "#005250"
    creamy-oat-milk: "#f9f3f0"
    oat-milk-alt: "#f3ebe8"
    crunchy-apple: "#79e4a7"
    dark-crunchy-apple: "#03a97b"
    dark-green: "#013d3c"
    juicy-watermelon: "#ff7973"
    sour-lemon: "#fff29a"
    highlight: "#fffb9b"
    mint-hover: "#67d695"
    tertiary-text: "#339a72"
    header-dark: "#252d2d"
    text-on-dark: "#dee3e3"
    foreground: "#5f6d6d"
    button-ink: "#012625"
    canvas: "#ffffff"
    button-hover: "#ececee"
    button-pressed: "#dfdfe2"
  typography:
    family: { display: "Korolev", sans: "Tenon" }
    display: { size: 72, weight: 900, use: "hero heading, uppercase" }
    body: { size: 16, weight: 500, use: "buttons; body in Tenon" }
  rounded: { pill: 120 }
  components:
    button-white: { type: "button", bg: "#ffffff", fg: "#012625", radius: 120, height: "51px", padding: "16px 24px", font: "16px / 500", hover: "#ececee", pressed: "#dfdfe2", focus: "outline 2px solid #ffffff", use: "Download the app / Sign up your business on the green hero — a white pill with dark-green ink; greys a step on hover and press, a 2px white outline on focus." }
    link-nav: { type: "button", bg: "transparent", fg: "#ffffff", radius: 0, height: "21px", font: "14px / 400", hover: "transparent", pressed: "transparent", use: "About / Business in the header over the hero — white text; hover and press change nothing; focus is the browser's ring." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.toogoodtogo.com/en-gb", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.toogoodtogo.com/en-gb", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.toogoodtogo.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: press, kind: official-doc, url: "https://www.toogoodtogo.com/en-gb/press", captured: "2026-09-26" }
    - { id: contact, kind: official-doc, url: "https://www.toogoodtogo.com/en-gb/legal/contact-us", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.button-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.button-ink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.button-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.creamy-oat-milk: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.crunchy-apple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.dark-crunchy-apple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.dark-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.header-dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.highlight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.juicy-watermelon: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.leafy-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.leafy-green-alt: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.mint-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.oat-milk-alt: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.sour-lemon: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.tertiary-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-on-dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-white.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-white.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-white.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-white.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-white.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-white.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-white.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-white.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-white.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-white.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-white.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
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
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Too Good To Go

## 1. Visual Theme & Atmosphere

Too Good To Go connects users with partner stores "to rescue unsold food and stop it from going to
waste". By its press page it has 120 million registered users and 180,000 active partners across 21
countries, and calls itself "the world's largest marketplace for surplus food", launched in 2016.
The site is provided by Too Good To Go ApS, Landskronagade 66, Copenhagen, Denmark.

The site is warm and food-bright: a leafy green hero **`#00615f`**, a creamy oat-milk page
**`#f9f3f0`**, huge uppercase **Korolev** headlines, and a palette named like a fruit bowl —
crunchy apple **`#79e4a7`**, juicy watermelon **`#ff7973`**, sour lemon **`#fff29a`**. Body text is
**Tenon**.

What makes it worth reading:

- **Named brand colours.** `--color-brand-leafyGreen`, `creamyOatMilk`, `crunchyApple`,
  `juicyWatermelon`, `sourLemon`, `morningLight`, `twilightLilac` — the palette speaks the product's
  language.
- **Theme tokens per surface.** `--theme-*-dark` and `--theme-*-light` pairs switch heading, text
  and highlight colours between green and cream sections (heading `#f9f3f0` on dark, `#00615f` on
  light; highlight `#fffb9b` on dark, `#ff7973` on light).
- **A two-face type system.** Korolev 900 uppercase for display, Tenon for everything else.

### Primary tasks
- Download the app; find food nearby.
- Sign up a business.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `toogoodtogo.com/en-gb`: 842 root custom properties — `--dt-*`
216, `--typography-*` 130, `--light-*` 111, `--color-*` 103, `--theme-*` 28, `--btn-*` 17 …;
Tailwind's `--tw-*` (51) excluded.

### Greens

- **Leafy green** (`#00615f`) — `--color-brand-leafyGreen`, `--theme-background-color-dark`; the hero.
- **Leafy green alt** (`#005250`) — `--theme-background-color-dark-alt`.
- **Dark green** (`#013d3c`) · **Button ink** (`#012625`).
- **Crunchy apple** (`#79e4a7`) · **Dark crunchy apple** (`#03a97b`).
- **Mint hover** (`#67d695`) — `--btn-primary-hover-type`, `--theme-tertiary-text-color-dark`.
- **Tertiary text** (`#339a72`) — on light sections.

### Cream and fruit

- **Creamy oat milk** (`#f9f3f0`) — the page and headings on green · **Oat milk alt** (`#f3ebe8`).
- **Juicy watermelon** (`#ff7973`) — highlights on light sections.
- **Sour lemon** (`#fff29a`) · **Highlight** (`#fffb9b`) — highlights on green.

### Neutrals

- **Foreground** (`#5f6d6d`) — `--theme-text-color-light`.
- **Text on dark** (`#dee3e3`) · **Header dark** (`#252d2d`) · **Canvas** (`#ffffff`).
- **Button hover** (`#ececee`) · **Button pressed** (`#dfdfe2`).

## 3. Typography Rules

### Font family

**Korolev** (900) for display and **Tenon** (400, 500, 700) for text, both loaded (`document.fonts`).

### Scale

H1 72px/900 uppercase in `#f9f3f0`; section headings 44px/900 uppercase or 75px Korolev in
watermelon; Tenon 32px/400 subheads; buttons 16px/500; navigation 14px/400.

## 4. Component Stylings

Measured with focus under a real Tab key and a hover counted only when `:hover` matched; consent
declined.

- **White pill** — Download the app / Sign up your business: **`#ffffff`**, `#012625` 16px/500,
  120px radius, 51px. Hover **`#ececee`**, press **`#dfdfe2`**; focus a **2px white** outline.
- **Navigation link** — About, Business: white 14px over the hero. Hover and press change nothing;
  focus is the browser's ring.

### Radius

Pills at 100–120px (buttons and the search field).

## 5. Layout Principles

- A transparent header over a full green hero with a huge uppercase headline, then alternating
  cream and green sections.

## 6. Depth & Elevation

Flat; colour blocks separate sections.

## 7. Do's and Don'ts

### Do
- Alternate leafy green `#00615f` and oat milk `#f9f3f0` sections, switching heading and highlight
  colours with the surface.
- Set display headlines in Korolev 900 uppercase.
- Use white pills with dark-green ink on green.

### Don't
- Don't use pure white as the page ground; it is oat milk.
- Don't put watermelon highlights on green; on green the highlight is lemon.
- Don't set body text in Korolev.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#00615f` leafy green · `#f9f3f0` oat milk · `#79e4a7` crunchy apple · `#ff7973` watermelon ·
`#fff29a` lemon · `#012625` ink · `#5f6d6d` text · `#252d2d` header

### Example Component Prompts
- "A green `#00615f` hero with a 72px Korolev 900 uppercase headline in `#f9f3f0` and a white pill
  button with `#012625` text that greys to `#ececee` on hover."
- "A cream `#f9f3f0` section with a 75px Korolev heading in `#ff7973`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

A Copenhagen company fighting food waste, with a palette named after food — apple, watermelon,
lemon, oat milk. Green and cream alternate like packaging, and the headlines shout in Korolev.

## 12. Principles

- **Fight food waste.** The mission its careers page names.
- **Colours named like food.**
- **Surface-aware theming.** Every section flips its heading and highlight.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: white pills grey to `#ececee`. Press: `#dfdfe2`. Focus: a 2px white outline on pills, the
browser ring on links.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.toogoodtogo.com/en-gb (live homepage — 842 root custom properties read via `getComputedStyle`, Tailwind excluded; Korolev and Tenon loaded; two components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.toogoodtogo.com/en-gb/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://www.toogoodtogo.com/en-gb/press (press — 120 million registered users, 180,000 active partners, 21 countries, launched 2016, read 2026-09-26); https://www.toogoodtogo.com/en-gb/legal/contact-us (Too Good To Go ApS, Landskronagade 66, 2100 Copenhagen, Denmark, CVR 37561304, read 2026-09-26)

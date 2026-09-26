---
id: payfit
name: PayFit
country: FR
category: saas
homepage: "https://payfit.com"
primary_color: "#F048F0"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=payfit.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "PayFit web tokens (--uy-*)"
  url: "https://payfit.com/fr/"
  type: system
  description: "803 first-party --uy-* custom properties on payfit.com, most colours in oklch: surface (186), content (108) and border (76) roles by intent and strength (primary, neutral, inverted, danger, warning, info, success, promo; lowest to highest) with enabled, hover, pressed, active, focus, selected, disabled and read-only states, plus button-specific tokens and decorative hue scales (plum, teal, cyan, yellow …). The brand accent is a magenta, oklch(70.06% .2678 327.97) ≈ #f048f0; the interface is near-black #0d0d0c on white and warm greys. Tailwind's 30 --tw-* variables are excluded. Type is Restart Soft (variable), with Heartbreak Eighties as a display face."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#f048f0"
    brand-active: "#d100d1"
    highlight-hover: "#ffc7ff"
    highlight-pressed: "#ff7aff"
    plum: "#7f007f"
    primary: "#0d0d0c"
    primary-hover: "#333332"
    foreground: "#0d0d0c"
    text-secondary: "#5c5957"
    placeholder: "#706e6b"
    surface: "#f5f5f4"
    surface-alt: "#f1f0ef"
    border: "#e7e6e4"
    canvas: "#ffffff"
    focus: "#0d9ad8"
    danger: "#b52834"
    card-blue: "#9fdff9"
    card-yellow: "#f7e98d"
  typography:
    family: { sans: "Restart Soft", display: "Heartbreak Eighties" }
    button: { size: 16, weight: 500, use: "calls to action" }
    nav: { size: 16, weight: 400, use: "header navigation" }
  rounded: { sm: 6, md: 8 }
  components:
    button-primary: { type: "button", bg: "#0d0d0c", fg: "#ffffff", radius: 8, height: "48px", padding: "12px 16px", font: "16px / 500", hover: "#333332", focus: "outline 2px solid #0d9ad8", use: "Essayez maintenant — near-black, lifting to #333332 on hover; press returns to the rest colour (--uy-color-surface-button-primary-pressed). Focus is a 2px blue outline." }
    button-secondary: { type: "button", bg: "#ffffff", fg: "#0d0d0c", border: "#5c5957", radius: 8, height: "48px", font: "16px / 500", hover: "#f5f5f4", pressed: "border #0d0d0c", focus: "outline 2px solid #0d9ad8", use: "Demandez une démo — white with a #5c5957 border; hover fills --uy-color-surface-button-secondary-hover #f5f5f4 and darkens the border to #0d0d0c." }
    nav-item: { type: "button", bg: "transparent", fg: "#0d0d0c", border: "#e7e6e4", radius: 6, height: "39px", padding: "10px", font: "16px / 400", hover: "#f1f0ef", pressed: "#f1f0ef", use: "Pourquoi Payfit ?, Solution, Produit … — header items that fill with warm grey #f1f0ef on hover and press. Focus is the browser's ring." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://payfit.com/fr/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://payfit.com/fr/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://payfit.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: story, kind: official-doc, url: "https://payfit.com/about-us/", captured: "2026-09-26" }
    - { id: legal, kind: official-doc, url: "https://payfit.com/fr/mentions-legales/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-active: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.card-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.card-yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.danger: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.focus: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.highlight-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.highlight-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.placeholder: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.plum: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-alt: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
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
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-item.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
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
# Design System Inspiration of PayFit

## 1. Visual Theme & Atmosphere

PayFit makes payroll and HR software for small and mid-sized businesses. Its story page says "It
started with three founders – Firmin Zocchetto, Ghislain de Fontenay and Florian Fournier" in 2015,
and quotes Zocchetto: "We started Payfit because we believed every business deserved a real payroll
and HR partner." The legal notice gives the company as Payfit SAS, head office 37 Avenue de Trudaine,
Paris, and says the solution was founded in 2016 to automate payslips, social declarations and leave
management.

The site is clean and warm: near-black **`#0d0d0c`** type and buttons on white and warm greys
**`#f5f5f4`**, with a bright magenta **`#f048f0`** as the brand accent, soft pink highlights and a
deep plum **`#7f007f`**. Type is **Restart Soft**, a variable face, with **Heartbreak
Eighties** for display.

What makes it worth reading:

- **A state machine in tokens.** 803 `--uy-*` properties give each surface, content and border role
  its enabled, hover, pressed, active, focus, selected, disabled and read-only values.
- **Colour in oklch.** Most colours are authored as `oklch()` — the brand magenta is
  `oklch(70.06% .2678 327.97)`.
- **Buttons that stay dark.** The primary is near-black with a slightly lighter hover; magenta is
  saved for accents and highlights.

### Primary tasks
- Try PayFit or book a demo.
- Explore payroll, HR and pricing; sign in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `payfit.com/fr`: 839 root custom properties — `--uy-*` 803
(PayFit's), `--tw-*` 30 (Tailwind, excluded), and a few container and link values. Hex values below
convert the `oklch()` tokens where needed.

### Brand

- **Brand** (`#f048f0`) — `--uy-color-surface-primary`, `--uy-color-content-accent` `#f048f0`.
- **Brand active** (`#d100d1`) — `--uy-color-content-primary-active`,
  `--uy-color-content-button-minimal-active`.
- **Highlight hover** (`#ffc7ff`) · **pressed** (`#ff7aff`) — `--uy-color-surface-button-highlight-*`.
- **Plum** (`#7f007f`) — deep brand backgrounds.

### Ink and neutrals

- **Primary** (`#0d0d0c`) — `--uy-color-content-neutral`, `--uy-color-surface-button-primary-pressed`.
- **Primary hover** (`#333332`).
- **Foreground** (`#0d0d0c`) · **Text secondary** (`#5c5957`, 158 `<p>` elements) · **Placeholder**
  (`#706e6b`, `--uy-color-content-form-placeholder`).
- **Surface** (`#f5f5f4`, `--uy-color-surface-button-secondary-hover`) · **Surface alt** (`#f1f0ef`) ·
  **Border** (`#e7e6e4`) · **Canvas** (`#ffffff`).

### Focus and status

**Focus** `#0d9ad8` (the 2px outline) · **Danger** `#b52834` · decorative cards **`#9fdff9`** (blue)
and **`#f7e98d`** (yellow).

## 3. Typography Rules

### Font family

**Restart Soft** — a variable face (100–900) on body and headings — and **Heartbreak Eighties** for
display, both loaded (`document.fonts`) under hashed family names. Source Sans 3 loads from an
embedded widget.

### Scale

Calls to action 16px/500; header items 16px/400.

## 4. Component Stylings

Measured after declining cookies ("Refuser"), focus read under a real Tab key, and a hover counted
only when `:hover` matched; background-image, text-decoration and pseudo-elements were compared too.

- **Primary** — Essayez maintenant: **`#0d0d0c`**, white 16px/500, 8px, 48px, `12px 16px`. Hover
  **`#333332`**; press returns to `#0d0d0c`. Focus: `outline: 2px solid #0d9ad8`.
- **Secondary** — Demandez une démo: `#ffffff`, `#5c5957` border. Hover **`#f5f5f4`** with a
  `#0d0d0c` border; press keeps the dark border. Focus: the same outline.
- **Header item** — Pourquoi Payfit ? and siblings: 6px, 39px, 16px/400. Hover and press fill
  **`#f1f0ef`**. Focus is the browser's `auto` ring.

### Radius

8px on buttons, 6px on header items.

## 5. Layout Principles

- White and warm-grey sections; pastel cards (blue, yellow, pink) for features.

## 6. Depth & Elevation

Flat on the measured controls.

## 7. Do's and Don'ts

### Do
- Keep primary buttons near-black `#0d0d0c`, lifting to `#333332` on hover.
- Use magenta `#f048f0` and its pinks for accents and highlights.
- Draw focus as a 2px `#0d9ad8` outline.

### Don't
- Don't make the primary button magenta.
- Don't use cold greys; PayFit's neutrals are warm (`#f5f5f4`, `#e7e6e4`).
- Don't count `--tw-*` as PayFit tokens.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#0d0d0c` ink · `#333332` hover · `#f048f0` magenta · `#d100d1` magenta active · `#ffc7ff` pink ·
`#7f007f` plum · `#f5f5f4` warm grey · `#5c5957` secondary · `#0d9ad8` focus

### Example Component Prompts
- "A 48px button, `#0d0d0c`, white 16px/500 Restart Soft, 8px radius; hover `#333332`; focus a 2px
  `#0d9ad8` outline."
- "A white secondary button with a `#5c5957` border; hover `#f5f5f4`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

PayFit set out to give every business a real payroll and HR partner. Its site is calm where it needs
to be trusted — dark buttons, warm greys — and playful where it can be, with magenta, pink and a
display face. Behind it sits a token system that spells out every state in oklch.

## 12. Principles

- **Calm core, playful edge.** Near-black actions, magenta accents.
- **Every state defined.** Enabled to read-only.
- **Warm neutrals.** Greys with a touch of warmth.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: primary `#333332`, secondary `#f5f5f4`, header items `#f1f0ef`. Press: the primary back to
`#0d0d0c`, the secondary keeps a dark border. Focus: a 2px `#0d9ad8` outline on buttons, the
browser's ring on header items.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://payfit.com/fr/ (live homepage — 839 root custom properties read via `getComputedStyle`, Tailwind excluded; Restart Soft and Heartbreak Eighties loaded; three components measured at rest, hover, pressed and focus after declining cookies, captured 2026-09-26); https://payfit.com/fr/zz-this-does-not-exist (nonsense-path control — HTTP 404, read 2026-09-26); https://payfit.com/about-us/ (Our story — founders Firmin Zocchetto, Ghislain de Fontenay and Florian Fournier, 2015, read 2026-09-26); https://payfit.com/fr/mentions-legales/ (Mentions légales — Payfit SAS, RCS Paris 813 487 899, 37 Avenue de Trudaine, 75009 Paris; "Fondée en 2016", read 2026-09-26)

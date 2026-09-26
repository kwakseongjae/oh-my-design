---
id: pennylane
name: Pennylane
country: FR
category: fintech
homepage: "https://www.pennylane.com"
primary_color: "#003D3D"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pennylane.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Pennylane web tokens"
  url: "https://www.pennylane.com/fr"
  type: system
  description: "About 56 first-party --color-* custom properties on pennylane.com, over a Tailwind base (excluded): a deep teal --color-pennylane #003d3d with a --color-pl-green-* ramp (#dafbf2 → #003d3d), a flashy green accent #00f872, beige #f8f4f1, salmon, yellow and blue accents. The page is teal on white and beige; the call to action is teal and lifts 2px with a soft shadow on hover. Type is Manrope throughout."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#003d3d"
    foreground: "#003d3d"
    accent: "#00f872"
    accent-soft: "#94ffb4"
    green-100: "#dafbf2"
    green-300: "#8ecec2"
    green-500: "#42ad9a"
    green-700: "#338585"
    green-800: "#0f5757"
    beige: "#f8f4f1"
    canvas: "#ffffff"
    salmon: "#ffa37b"
    yellow: "#f3c628"
    orange: "#ffc063"
    blue: "#358ddd"
    red: "#c11111"
    grey: "#7b7b7b"
  typography:
    family: { sans: "Manrope" }
    button: { size: 14, weight: 700, use: "header call to action" }
    nav: { size: 16, weight: 500, use: "header menu" }
  rounded: { sm: 4, md: 6 }
  components:
    button-primary: { type: "button", bg: "#003d3d", fg: "#ffffff", border: "#003d3d", radius: 4, height: "38px", padding: "8px 16px", font: "14px / 700", hover: "translateY(-2px) + shadow rgba(0,0,0,0.25) 0 4px 4px", pressed: "translateY(-2px) + shadow rgba(0,0,0,0.25) 0 4px 4px", use: "Démarrer maintenant in the header — teal --color-pennylane; on hover and press it rises 2px and casts a soft shadow, keeping its colour. Focus is the browser's ring." }
    nav-menu: { type: "button", bg: "transparent", fg: "#003d3d", radius: 0, height: "24px", font: "16px / 500", hover: "transparent", use: "Produit, Activité, Tarifs, Ressources — teal menu buttons with no hover, press or focus change on the button itself." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.pennylane.com/fr", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.pennylane.com/fr", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.pennylane.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: legal, kind: official-doc, url: "https://www.pennylane.com/fr/legal/mentions-legales", captured: "2026-09-26" }
    - { id: careers, kind: official-doc, url: "https://www.pennylane.com/fr/carrieres", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.accent: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.accent-soft: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.beige: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green-300: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green-700: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green-800: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.grey: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.orange: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.salmon: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
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
    tokens.components.nav-menu.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Pennylane

## 1. Visual Theme & Atmosphere

Pennylane is an accounting and financial management platform for businesses and their accounting
firms. Its careers page gives the scale: "Créée en 2020", €175 million raised through a Series E,
1,000 "Pennylaners" of 43 nationalities, and 6,000 accounting firms supporting more than 800,000
businesses that use Pennylane daily — in France and, since 2025, in Germany. The company is Pennylane
SAS, head office 2-4 rue Jules Lefebvre, Paris.

The site is fresh and confident: a deep teal **`#003d3d`** for type and buttons, a flashy green
**`#00f872`** accent, white and beige **`#f8f4f1`** surfaces, and salmon, yellow and blue as
supporting colours. Everything is set in **Manrope**.

What makes it worth reading:

- **One teal for text and action.** `--color-pennylane`, `--color-primary` and `--color-typo` are all
  `#003d3d`.
- **A flashy green accent.** `--color-pl-green-accent` `#00f872` — used for highlights and for the
  label of the larger call to action on teal.
- **Hover as lift.** The call to action keeps its colour, rises 2px and casts a shadow.

### Primary tasks
- Start Pennylane or request a demo, by business type.
- Explore product, pricing and resources; sign in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `pennylane.com/fr`: 133 root custom properties — about 56
`--color-*` (Pennylane's), 51 `--tw-*` (Tailwind, excluded), fonts, radii and a few others.

### Teal and greens

- **Primary** (`#003d3d`) — `--color-pennylane`, `--color-primary`, `--color-pl-green-900`.
- **Foreground** (`#003d3d`) — `--color-typo`; 18 of 31 `<p>` elements.
- **Accent** (`#00f872`) — `--color-pl-green-accent`, `--color-accent`.
- **Accent soft** (`#94ffb4`) — `--color-pl-flashy-100`.
- `--color-pl-green-100` **`#dafbf2`** · `-300` **`#8ecec2`** · `-500` **`#42ad9a`** · `-700`
  **`#338585`** · `-800` **`#0f5757`**.

### Surfaces and accents

**Beige** `#f8f4f1` (`--color-pl-beige`) · **Canvas** `#ffffff` · **Salmon** `#ffa37b` · **Yellow**
`#f3c628` · **Orange** `#ffc063` (rendered) · **Blue** `#358ddd` · **Red** `#c11111` · **Grey**
`#7b7b7b`.

## 3. Typography Rules

### Font family

**Manrope** at 400, 500, 600, 700 and 800, loaded (`document.fonts`), for body and headings alike
(`--font-family-sans-serif`).

### Scale

The header call to action is 14px/700; the larger one 16px/600; menu items 16px/500.

## 4. Component Stylings

Measured on the home page, focus read under a real Tab key, and a hover counted only when `:hover`
matched; background-image, text-decoration and pseudo-elements were compared too.

- **Call to action** — Démarrer maintenant: **`#003d3d`**, white 14px/700, 4px, 38px, `8px 16px`. Hover
  and press lift it 2px (`translateY(-2px)`) with `rgba(0,0,0,0.25) 0 4px 4px`; the colour stays. Focus
  is the browser's `auto` ring. A larger 48px version on the page uses a green `#00f872` label.
- **Menu buttons** — Produit, Activité, Tarifs, Ressources: `#003d3d`, 16px/500. Nothing changes on
  the button itself in any state.

### Radius

4px and 6px on buttons.

## 5. Layout Principles

- Teal hero bands with white text and green highlights; beige and white sections.

## 6. Depth & Elevation

The only elevation observed is the hover shadow on the call to action.

## 7. Do's and Don'ts

### Do
- Use teal `#003d3d` for text and the main action.
- Use the green `#00f872` for highlights and labels on teal.
- Signal hover with a 2px lift and a soft shadow.

### Don't
- Don't count `--tw-*` as Pennylane tokens.
- Don't use the flashy green for body text on white.
- Don't use pure black; the ink is teal.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#003d3d` teal · `#00f872` green · `#f8f4f1` beige · `#dafbf2` mint · `#42ad9a` mid green ·
`#ffa37b` salmon · `#f3c628` yellow

### Example Component Prompts
- "A 38px teal `#003d3d` button, white 14px/700 Manrope, 4px radius; on hover it rises 2px with a
  soft shadow."
- "A teal hero with a flashy green `#00f872` highlight."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Pennylane, founded in 2020, brings businesses and their accountants onto one financial platform, and
its site trades the usual finance blues for a deep teal and an electric green. Actions stay teal and
respond by lifting rather than changing colour.

## 12. Principles

- **Teal, not navy.** One deep colour for text and action.
- **Electric accent.** Green for what should stand out.
- **Lift to respond.** Hover rises instead of recolouring.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover and press: the call to action lifts 2px with a shadow; menu buttons do not change. Focus: the
browser's ring on the call to action, nothing on menu buttons.

## 15. Motion & Easing

Two `--transition-*` tokens are declared; the lift is animated. Timing was not measured.

---

**Tier 1 sources:** https://www.pennylane.com/fr (live homepage — 133 root custom properties read via `getComputedStyle`, Tailwind excluded; Manrope loaded; two components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.pennylane.com/fr/zz-this-does-not-exist (nonsense-path control — HTTP 404 "Page Not Found", read 2026-09-26); https://www.pennylane.com/fr/legal/mentions-legales (Mentions légales — Pennylane SAS, RCS Paris 880 265 921, 2-4 rue Jules Lefebvre, 75009 Paris, read 2026-09-26); https://www.pennylane.com/fr/carrieres (Carrières — "Créée en 2020", €175M raised, 1,000 Pennylaners, 6,000 firms, 800,000 businesses, read 2026-09-26)

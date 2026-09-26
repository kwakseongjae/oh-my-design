---
id: zalando
name: Zalando
country: DE
category: ecommerce
homepage: "https://www.zalando.de"
primary_color: "#FF4C00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=zalando.de&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "ZDS (Zalando Design System)"
  url: "https://brand.zalando.com"
  type: system
  description: "Zalando's in-house design system, described on its engineering blog as design tokens, CSS electrons, atoms, molecules and organisms, used by almost every team. zalando.de serves 360 first-party custom properties from paths named /zds/. A second token file, loaded on top of them, changes radius, font and state greys for the 2024 rebrand: 9984px pills, 12px cards, ZalandoSans, and a hover and pressed grey ramp. The brand orange #ff4c00 marks the brand, not the actions, which are black."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#ff4c00"
    primary: "#000000"
    foreground: "#000000"
    canvas: "#ffffff"
    interactive: "#6328e0"
    negative: "#da0410"
    positive: "#00875a"
    hover: "#d2d8dd"
    pressed: "#b9c0c6"
    tertiary: "#f1f1f1"
    secondary: "#5c6169"
    border-secondary: "#d2d8dd"
    legacy-hover: "#efeff0"
    legacy-pressed: "#d0d1d3"
    legacy-secondary: "#66676e"
    legacy-red: "#d9000c"
    legacy-blue: "#0d6dff"
  typography:
    family: { sans: "ZalandoSans" }
    body: { size: 16, weight: 400, use: "--typography-body, 1rem/1.5rem" }
    h1: { size: 40, weight: 700, use: "--typography-h1, 2.5rem/3rem" }
    jumbo1: { size: 72, weight: 700, use: "--typography-jumbo1, 4.5rem/5.25rem, the largest step" }
  rounded: { sm: 4, md: 8, lg: 12, pill: 9984 }
  components:
    nav-pill: { type: "button", bg: "#ffffff", fg: "#000000", radius: 9984, height: "36px", padding: "6px 18px", font: "16px / 400", hover: "#f1f1f1", pressed: "#f1f1f1", use: "Damen, Herren, Kinder at the top of zalando.de — a white pill that greys to --color-background-tertiary on hover and press. Focus is the browser's ring." }
    button-primary: { type: "button", bg: "#000000", fg: "#ffffff", radius: 9984, height: "48px", padding: "12px 24px", font: "16px / 400", hover: "#d2d8dd", pressed: "#b9c0c6", focus: "rgba(0,0,0,0.3)", use: "A black pill with a 1px inset ring (the newsletter confirmation on the home page). Hover turns it light grey with a black label, press a shade darker, focus a 30% black wash — --color-background-focus — with no outline drawn." }
    input-search: { type: "input", bg: "transparent", fg: "#000000", radius: 0, height: "40px", padding: "10px 12px 10px 0", font: "16px / 400", hover: "transparent", focus: "transparent", use: "The header search field (Suche). None of its measured values change on hover or focus." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.zalando.de/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.zalando.de/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://brand.zalando.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: brand-site, kind: official-doc, url: "https://brand.zalando.com/", captured: "2026-09-26" }
    - { id: eng-zds-2022, kind: official-doc, url: "https://engineering.zalando.com/posts/2022/07/an-introduction-to-the-zalando-design-system.html", captured: "2026-09-26" }
    - { id: eng-theming-2024, kind: official-doc, url: "https://engineering.zalando.com/posts/2024/05/theming-the-zalando-design-system.html", captured: "2026-09-26" }
    - { id: press-rebrand, kind: official-doc, url: "https://corporate.zalando.com/en/fashion/zalando-unveils-new-brand-positioning-focus-quality-lifestyle-and-inspiration-updates-brand", captured: "2026-09-26" }
    - { id: history, kind: official-doc, url: "https://corporate.zalando.com/en/about-us/our-history", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.interactive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.legacy-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.legacy-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.legacy-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.legacy-red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.legacy-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.negative: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.positive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.tertiary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.h1.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.h1.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.h1.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.jumbo1.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.jumbo1.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.jumbo1.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Zalando

## 1. Visual Theme & Atmosphere

Zalando is Europe's large online fashion and lifestyle platform. Robert Gentz and David Schneider
founded it in Berlin in 2008, launching from a shared Torstraße apartment that also served as office
and warehouse. Free delivery and up to 100 days to return set it apart early on. Its corporate
boilerplate now counts 62 million active customers and more than 7,000 brands across 29 markets, served
through Zalando, ABOUT YOU and Lounge by Zalando.

On 9 September 2024 Zalando announced a new brand positioning around "style confidence". It launched
with the autumn/winter campaign "What Do I Wear?", together with a refreshed identity: a more vibrant
orange, a modern wordmark, and a custom font designed to improve accessibility. The press release
credits the agency Kurppa Hosk, which describes the work as a typeface superfamily, a palette anchored
by a more vibrant orange, and a new wordmark. That font is **ZalandoSans**, a variable typeface with weight
and width axes, which the brand site describes as dynamic and versatile.

The storefront is black and white. Orange **`#ff4c00`** is the brand and the logo, not the button
colour: the primary action is a black pill, and navigation is white pills that grey on hover. The site
is flat — its shadow tokens are inset rings, not elevation.

What makes it worth reading:

- **A rebrand you can see in the cascade.** The base tokens on `:root` are the older theme. A second
  file, `tokens-lagom-stage-1-border-radius-3.13.27.css`, overrides them inside `@scope (:root)`.
  It sets pill and card radii, ZalandoSans as the font, bold at 650, and new state greys. What
  renders is the override.
- **Deprecation on the surface.** Eighteen `--deprecated-color-*` tokens stay beside the semantic
  ones. The red changed in the migration (`#d9000c` → **`#da0410`**), and the old blue **`#0d6dff`**
  has no successor.
- **Purple is the interactive colour.** `--color-text-interactive` is **`#6328e0`**, separate from the
  brand orange and from the sale red.

### Primary tasks
- Browse categories and brands; search; open a product.
- Sign up for the newsletter; manage an account and returns.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `zalando.de`: 360 root custom properties, all first-party ZDS.
There is no Tailwind, MUI or other framework namespace. Current values come from the rebrand layer.
Where the base theme differs, its value is listed as legacy.

### Brand and ink

- **Brand** (`#ff4c00`) — `--color-background-brand`, `--color-text-brand`. The logo and brand
  accents.
- **Primary** (`#000000`) — `--color-text-primary`, `--color-border-primary`. The primary button and
  the ink. 694 of about 700 coloured text nodes sampled are black, and so are 9 of 10 `<p>`
  elements.
- **Foreground** (`#000000`) — body text.
- **Canvas** (`#ffffff`) — `--color-background-default`.
- **Interactive** (`#6328e0`) — `--color-text-interactive`, `--color-border-interactive`.

### State greys (rebrand layer)

- **Hover** (`#d2d8dd`) — `--color-background-hover`; the primary button's hover. The same grey is
  `--color-border-secondary`, the carousel arrow border.
- **Pressed** (`#b9c0c6`) — `--color-background-pressed`.
- **Tertiary** (`#f1f1f1`) — `--color-background-tertiary`; the navigation pills' hover.
- **Secondary** (`#5c6169`) — `--color-background-secondary`; dark grey surfaces.
- **Focus** — `--color-background-focus` `#0000004d` (black at 30%), the same in both layers.

### Status

**Negative / sale** `#da0410` · **Positive** `#00875a`.

### Legacy values still shipped

The base theme has hover **`#efeff0`**, pressed **`#d0d1d3`** and secondary **`#66676e`**. The
deprecated layer adds red **`#d9000c`** and blue **`#0d6dff`**. On the page measured, the rendered
greys match the rebrand values, not these.

## 3. Typography Rules

### Font family

**ZalandoSans** — one variable `woff2` (`wght` 100–900, `wdth` 50–200%), self-hosted at
`mosaic02.ztat.net/zds/assets/fonts/`. It is loaded (`document.fonts`), and `<p>` copy and the menu links
compute to `ZalandoSans, Helvetica, sans-serif`. The rebrand layer points `--font-family-sans-serif`
and `--font-family-serif` at it; the base theme still names HelveticaNow and Tiempos. Those two are
declared as `@font-face` and did not load on the pages measured. The navigation pills and the black
primary button compute to a bare `sans-serif`, so ZalandoSans does not reach them.

### Scale

104 `--typography-*` tokens, each with size, line height, weight, width and letter spacing:

| step | size / line | weight |
|---|---|---|
| body-small | 0.875 / 1.25rem | 400 |
| body | 1 / 1.5rem | 400 |
| body-large | 1.375 / 1.75rem | 400 |
| h4 | 1.5 / 1.75rem | 700 |
| h1 | 2.5 / 3rem | 700 |
| jumbo1 | 4.5 / 5.25rem | 700 |

Letter spacing tightens with size (h1 `-0.025rem`, jumbo1 `-0.045rem`). The rebrand layer lowers
`--font-weight-bold` to **650**.

## 4. Component Stylings

Measured on `zalando.de`, focus read under a real Tab key, and a hover counted only when `:hover`
matched.

- **Navigation pill** — Damen, Herren, Kinder: `#ffffff` / `#000000`, radius **9984px**, 36px,
  `6px 18px`, 16px/400. Hover and press grey it to **`#f1f1f1`**. Focus draws Chrome's `auto` ring.
- **Primary button** — a black pill: `#000000` / `#ffffff`, 9984px, 48px, `12px 24px`, with a
  `0 0 0 1px` inset ring. Hover flips it to **`#d2d8dd`** with a black label, and press darkens it
  to **`#b9c0c6`**. Focus replaces the fill with `rgba(0,0,0,0.3)`, and no outline is drawn.
- **Search field** — transparent, black text, no radius, 40px. Nothing measured changes on hover or
  focus; any affordance lives on a wrapper this probe did not read.

### Radius

The base theme's `--component-*-border-radius` tokens are all `0px`, and its `--border-radius-v2-*`
are `0px` too. The rebrand layer sets v2: `s` 4px · `m` 8px · **`l` 12px** (product cards) ·
**`round` 9984px** (pills).

## 5. Layout Principles

- `--grid-columns` 12 · `--grid-gutter` 16px · `--grid-margin` 32px · `--grid-max-width` 1280px.
- Spacing: `--spacing-3xs` 4px, `2xs` 8px, `xs` 12px, `s` 16px, `m` 24px, `l` 36px, `xl` 48px, `2xl`
  64px.

## 6. Depth & Elevation

Flat. The 28 `--box-*` tokens are inset rings — `inset 0 0 0 1px` and `2px` for focus, hover,
pressed, selected and status — and bottom-only insets for tab underlines. No drop shadow was found in
the tokens or on the page.

## 7. Do's and Don'ts

### Do
- Keep actions black and white; use orange `#ff4c00` for the brand.
- Use full pills (9984px) for buttons and navigation, 12px for cards.
- Use the grey ramp `#d2d8dd` → `#b9c0c6` for button hover and press.

### Don't
- Don't read the base `:root` values as current — the rebrand layer overrides them.
- Don't use `#6328e0` as a brand colour; it marks interactive text.
- Don't add drop shadows.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#ff4c00` brand · `#000000` ink and primary · `#ffffff` canvas · `#d2d8dd` hover · `#b9c0c6`
pressed · `#f1f1f1` pill hover · `#5c6169` dark grey · `#6328e0` interactive · `#da0410` sale

### Example Component Prompts
- "A 48px black pill button, white 16px/400 label; hover `#d2d8dd` with a black label, press
  `#b9c0c6`, focus a 30% black fill."
- "A row of 36px white navigation pills, 16px/400 black labels, hover `#f1f1f1`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Zalando grew from a Berlin apartment in 2008 into a platform across 29 markets. Its 2024
repositioning moves it from an e-commerce pioneer toward a destination for style, with a warmer,
more vibrant orange, a new wordmark and its own typeface. The design system was already in place:
the engineering blog described ZDS in 2022 as tokens, electrons, atoms, molecules and organisms, with
adoption close to 100% after more than two years. A 2024 post described themes that can be switched
on per page. The live site shows that mechanism at work: a staged token file layered over the old
theme, carrying the rebrand's pills, font and greys.

## 12. Principles

- **Black acts, orange signs.** Actions in black and white; orange for the brand.
- **Round and flat.** Full pills and inset rings, no elevation.
- **Themes over rewrites.** New values arrive as a token layer on top of the old.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: pills grey to `#f1f1f1`; the primary turns `#d2d8dd`. Press: `#b9c0c6` on the primary. Focus:
a 30% black fill on the primary, the browser's ring on navigation pills, and nothing on the search
field. No disabled state was observed.

## 15. Motion & Easing

Overlay geometry and transitions are tokenised (`--drawer-*`, `--flyout-*`, `--modal-*`). Their
timing was not measured.

---

**Tier 1 sources:** https://www.zalando.de/ (live homepage — 360 root custom properties read via `getComputedStyle`, rebrand token layer read from its stylesheet, ZalandoSans loaded, three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://brand.zalando.com/ (Zalando brand site — ZalandoSans and brand guidelines; nonsense path returns a different, non-content response, read 2026-09-26); https://engineering.zalando.com/posts/2022/07/an-introduction-to-the-zalando-design-system.html (Zalando Engineering, 21 Jul 2022 — ZDS layers, adoption close to 100%, read 2026-09-26); https://engineering.zalando.com/posts/2024/05/theming-the-zalando-design-system.html (Zalando Engineering, 14 May 2024 — themes, read 2026-09-26); https://corporate.zalando.com/en/fashion/zalando-unveils-new-brand-positioning-focus-quality-lifestyle-and-inspiration-updates-brand (Zalando press release, 9 Sep 2024 — new positioning, orange, wordmark, custom font; agency Kurppa Hosk, read 2026-09-26); https://corporate.zalando.com/en/about-us/our-history (Zalando history — founded Berlin 2008 by Robert Gentz and David Schneider, read 2026-09-26); https://www.kurppahosk.com/work/zalando (Kurppa Hosk case study — typeface superfamily, vibrant orange, new wordmark, read 2026-09-26)

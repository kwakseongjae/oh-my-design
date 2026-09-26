---
id: wolt
name: Wolt
country: FI
category: consumer-tech
homepage: "https://wolt.com"
primary_color: "#66CBF0"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wolt.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Alchemy"
  url: "https://wolt.com/de/deu"
  type: system
  description: "Wolt's in-house design system, named in its own CSS (`@layer alchemy`). wolt.com serves it as --al-* custom properties (405) from its own theme files, beside an older --cb-* layer (257) with the same base colours and no component tokens. Alchemy names every fill, surface, text and border colour with hovered, pressed, selected and disabled steps, and gives components their own radius tokens. The headline face, DD Scoop, is served from DoorDash's CDN — Wolt's owner since 2022."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#66cbf0"
    brand-hovered: "#56bee3"
    brand-pressed: "#4ab1d5"
    brand-surface: "#dcf7ff"
    brand-text: "#145367"
    brand-text-hovered: "#0e4253"
    brand-deep: "#08303e"
    focus: "#23748f"
    fill: "#151727"
    fill-hovered: "#363b57"
    foreground: "#272b42"
    input-text: "#202125"
    text-hovered: "#5e5b59"
    canvas: "#ffffff"
    surface: "#f5f1ed"
    surface-secondary: "#fbf8f5"
    surface-hovered: "#eeeae5"
    border: "#c3beb9"
    border-subdued: "#ded9d4"
    border-selected: "#3899bb"
    inverse: "#21201f"
    negative: "#c83527"
    positive: "#77d377"
    warning: "#ffad52"
    input-hover: "#009de0"
    input-focus: "#0f2594"
  typography:
    family: { display: "DD Scoop" }
    body: { size: 16, use: "navigation, buttons and the address field, on the system sans" }
  rounded: { sm: 8, md: 12, lg: 20, pill: 9999 }
  components:
    button-register: { type: "button", bg: "transparent", fg: "#145367", radius: 12, height: "46px", padding: "0 16px", font: "16px / 500", hover: "transparent", focus: "outline 3px solid #23748f", use: "Registrieren in the header, in --al-color-text-brand. Hover changes nothing (confirmed with :hover matched); focus draws a 3px teal outline — --al-color-outline-focused." }
    link-nav: { type: "button", bg: "transparent", fg: "#272b42", radius: 8, height: "24px", font: "16px / 500", hover: "fg #5e5b59", focus: "outline 3px solid #23748f", use: "Anmelden and Jobs — the ink label warms to --al-color-text-hovered on hover; focus is the same teal outline." }
    input-address: { type: "input", bg: "#ffffff", fg: "#202125", radius: 100, height: "58px", padding: "16px 52px", font: "16px / 400", hover: "border #009de0", focus: "border #0f2594", use: "Lieferadresse eingeben — the address pill with a transparent 2px border that turns cyan on hover and indigo on focus; no outline on this control." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://wolt.com/de/deu", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://wolt.com/de/deu", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://wolt.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: alchemy-theme, kind: product-surface, url: "https://wolt.com/static/themes/al/default.css", captured: "2026-09-26" }
    - { id: acquisition-release, kind: official-doc, url: "https://press.wolt.com/en-WW/215041-doordash-completes-acquisition-of-wolt/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border-selected: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border-subdued: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-text-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.fill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.fill-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.focus: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.input-focus: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.input-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.input-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.inverse: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.negative: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.positive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-register.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-address.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-address.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-address.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-address.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-address.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-address.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-address.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-address.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-address.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-address.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Wolt

## 1. Visual Theme & Atmosphere

Wolt is a delivery platform from Helsinki — restaurants, groceries and shops delivered through one
app. On 31 May 2022 DoorDash
completed its acquisition of Wolt in an all-stock deal; Wolt's own newsroom announced it, and Wolt
keeps its name and brand.

The web is built on **Alchemy**, Wolt's in-house design system — the name is in Wolt's own code: the
`--al-*` tokens live in a CSS layer called `alchemy`, served from `wolt.com/static/themes/al/`. The look is bright and friendly: white and a warm off-white
**`#f5f1ed`**, a navy ink **`#272b42`**, the Wolt light blue **`#66cbf0`** as the brand fill, a deep
teal **`#145367`** for brand text and links, and big, fully rounded shapes. Headlines are set in
**DD Scoop**, whose files come from DoorDash's asset CDN.

What makes it worth reading:

- **Every colour has five states.** Alchemy names fills, surfaces, text and borders with `-hovered`,
  `-pressed`, `-selected` and `-disabled` — `--al-color-bg-fill-brand` `#66cbf0` →
  `-hovered` `#56bee3` → `-pressed` `#4ab1d5`.
- **Components own their radius.** `--al-c-button-medium-corner-radius` 20px,
  `--al-c-input-search-corner-radius` 9999px, `--al-c-toggle-checkbox-corner-radius` 4px — radius is a
  component decision, not one global value.
- **Two generations, visible.** `--al-*` (Alchemy) sits beside an older `--cb-*` layer with the same
  base colours and no component tokens; the page's own layer order is `reset, codeless, cb, alchemy,
  wpt-ui`.

### Primary tasks
- Enter a delivery address; browse restaurants and shops.
- Sign up or log in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `wolt.com/de/deu`: 678 root custom properties — **405 `--al-*`**
(Alchemy), 257 `--cb-*` (the earlier layer), eight `--global-*` scroll-padding helpers and a few
one-offs (`--swiper-theme-color`, `--appsflyer-banner-height`, Lightning CSS markers — excluded). Both
`al` and `cb` are served from Wolt's own `/static/themes/` files.

### Brand blue and teal

- **Brand** (`#66cbf0`) — `--al-color-bg-fill-brand`. **Brand Hovered** (`#56bee3`) · **Brand Pressed**
  (`#4ab1d5`) · **Brand Surface** (`#dcf7ff`, `--al-color-bg-surface-brand`).
- **Brand Text** (`#145367`) — `--al-color-text-brand`, the colour of most links and the register
  button (428 elements). **Brand Text Hovered** (`#0e4253`) · **Brand Deep** (`#08303e`, pressed).
- **Focus** (`#23748f`) — `--al-color-outline-focused` and `--fallback-focus-outline: 3px solid
  #23748f`.

### Ink, fills and warm neutrals

- **Foreground** (`#272b42`) — the navy ink of 2,605 text elements and most `<p>`.
- **Fill** (`#151727`) — `--al-color-bg-fill`, the dark fill · **Fill Hovered** (`#363b57`).
- **Text Hovered** (`#5e5b59`) — `--al-color-text-hovered`, a warm grey.
- **Canvas** (`#ffffff`) · **Surface** (`#f5f1ed`, `--al-color-bg-surface`) · **Surface Secondary**
  (`#fbf8f5`) · **Surface Hovered** (`#eeeae5`) · **Inverse** (`#21201f`).
- **Border** (`#c3beb9`) · **Border Subdued** (`#ded9d4`) · **Border Selected** (`#3899bb`).

The neutrals are warm — greige, not grey.

### Status

**Negative** `#c83527` · **Positive** `#77d377` · **Warning** `#ffad52`, each with surface and state
steps.

### Outside the tokens

The address field's hover border **`#009de0`** and focus border **`#0f2594`**, and its text
**`#202125`**, are written directly on the control.

## 3. Typography Rules

### Font family

**DD Scoop** is the only web font that loads (`document.fonts`, a variable face 400–700) and it sets
the headlines only. Its `@font-face` rules, one per script range, all point at
`img.cdn4dd.com/t/dd-scoop/DD-Scoop-*.woff2` — DoorDash's asset CDN. The same face and host serve the
Finnish site. DoorDash's own public writing about its typography names other faces; the DoorDash
link here rests on the file host and the name.

Body text, navigation and buttons use the operating system's sans stack (`-apple-system,
"system-ui", Roboto, "Segoe UI", …`) — not recorded as a brand face.

### Scale

Navigation, buttons and the address field are 16px, at 500 for controls and 400 in the field. The
`cb` layer carries the type primitives (`font-size-title-xxxlarge`, weights regular to bold).

## 4. Component Stylings

Three components, every state on its own page load after the consent banner was dismissed ("Nur
erforderliche verwenden"), focus read under a real Tab key.

- **Register** — transparent, `#145367` 16px/500, 12px radius, 46px, `0 16px`. **Hover changes
  nothing** (`:hover` matched).
- **Navigation links** — Anmelden, Jobs: `#272b42` 16px/500. Hover warms the label to **`#5e5b59`**.
- **Address field** — `#ffffff`, `#202125` text, a 100px pill 58px tall with room for a leading icon
  (`16px 52px`). Hover turns its 2px border **`#009de0`**, focus **`#0f2594`**.

### Focus is authored

Buttons and links draw `outline: 3px solid #23748f` under `:focus-visible` — Alchemy's focus colour.
The address field instead changes its border.

### Radius

Alchemy's component radii: buttons 20px (medium, large) and fully round (small, extra small), inputs
20px or 16px, search fully round, popovers, toasts and tooltips 20px, checkboxes 4px. Rendered on the
page: 12px, 8px, and the 100px pill.

## 5. Layout Principles

- `--wcom-main-header-height` 70px, `--wcom-side-padding` 32px.
- Discovery pages use carousels with cloned off-screen cards (an infinite-scroll technique).

## 6. Depth & Elevation

No shadow on any measured control in any state. `--al-color-shadow` is `rgba(0,0,0,0.07)` and the
overlay `rgba(0,0,0,0.48)`.

## 7. Do's and Don'ts

### Do
- Use `#66cbf0` for brand fills and `#145367` for brand text and links.
- Take every state colour from Alchemy's `-hovered` / `-pressed` / `-selected` / `-disabled` steps.
- Keep neutrals warm (`#f5f1ed`, `#c3beb9`).
- Round generously — 20px and fully round.

### Don't
- Don't count `--cb-*` as a separate palette; it is the earlier layer with the same values.
- Don't use DD Scoop for body text; it is a headline face.
- Don't drop the 3px `#23748f` focus outline.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#66cbf0` brand blue · `#145367` brand text · `#23748f` focus · `#272b42` ink · `#151727` dark fill ·
`#f5f1ed` surface · `#ffffff` page · `#c3beb9` border · `#c83527` negative · `#77d377` positive ·
`#ffad52` warning

### Example Component Prompts
- "A 46px text button: `#145367` 16px/500, 12px radius; focus `outline: 3px solid #23748f`."
- "A 58px address pill: white, 100px radius, transparent 2px border that turns `#009de0` on hover and
  `#0f2594` on focus."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Wolt grew from Helsinki into a multi-country delivery company with a friendly, rounded, light-blue
identity, and joined DoorDash in 2022 while keeping its own name. The web shows both halves of that
story: Wolt's own design system, Alchemy, carrying every colour and state, and a headline face
fetched from DoorDash's servers.

## 12. Principles

- **States are named.** Five steps for every colour.
- **Round and warm.** Big radii, greige neutrals.
- **Components decide.** Each component carries its own radius.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Three components. Hover: none on Register, warm grey on navigation links, a cyan border on the address
field. Focus: a 3px `#23748f` outline on buttons and links, an indigo border on the field. No disabled
state was observed.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://wolt.com/de/deu (live landing page — 678 root custom properties, 405 --al-* Alchemy, read via `getComputedStyle`; three components measured at rest, hover, pressed and focus after dismissing the consent banner; DD Scoop loaded from img.cdn4dd.com, captured 2026-09-26); https://wolt.com/zz-this-does-not-exist (nonsense-path control, captured 2026-09-26); https://wolt.com/static/themes/al/default.css (Alchemy theme file — `@layer alchemy { :root { --al-* } }`; the page declares `@layer reset, codeless, cb, alchemy, wpt-ui`, read 2026-09-26); https://press.wolt.com/en-WW/215041-doordash-completes-acquisition-of-wolt/ (Wolt newsroom — "DoorDash Completes Acquisition of Wolt", read 2026-09-26)

**Regional sources:** https://www.sec.gov/Archives/edgar/data/1792789/000162828022015815/dash-20220531.htm (DoorDash Form 8-K, 2022-05-31 — the completed acquisition of Wolt Enterprises Oy)

---
id: epidemicsound
name: Epidemic Sound
country: SE
category: consumer-tech
homepage: "https://www.epidemicsound.com"
primary_color: "#FF82C2"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=epidemicsound.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand-pink: "#ff82c2"
    pink-hovered: "#e575af"
    pink-pressed: "#cc689b"
    brand-off-white: "#f1f0eb"
    brand-off-black: "#292c33"
    brand-azur: "#20afff"
    brand-yellow: "#ffda40"
    brand-red: "#ff6138"
    brand-fog: "#cfd6e5"
    brand-ecru: "#e4d9cf"
    brand-moss: "#bfbda8"
    brand-stone: "#9793a5"
    background-base: "#121418"
    foreground: "#000000"
    inverse-hovered: "#272727"
    inverse-pressed: "#333333"
    canvas: "#ffffff"
    light-tint: "#3d4d74"
    positive: "#5ad363"
    purple: "#bb76ff"
  typography:
    family: { display: "Sebenta", sans: "Inter" }
    display: { size: 80, weight: 500, use: "hero heading" }
    button: { size: 14, weight: 600, use: "pill buttons" }
  rounded: { pill: 10000 }
  components:
    button-primary: { type: "button", bg: "#000000", fg: "#ffffff", radius: 10000, height: "44px", padding: "4px 16px", font: "14px / 600", hover: "#272727", pressed: "#333333", focus: "outline 2px solid #000000", use: "Create free account — black pill on the off-white page (--es-color-action-primary-inverse-*); lifts to #272727 and #333333." }
    button-secondary: { type: "button", bg: "rgba(61,77,116,0.12)", fg: "#000000", radius: 10000, height: "44px", padding: "4px 16px", font: "14px / 600", hover: "rgba(61,77,116,0.18)", pressed: "rgba(61,77,116,0.24)", focus: "outline 2px solid #000000", use: "Log in — a translucent blue-grey pill that deepens 12% → 18% → 24%." }
    button-ghost: { type: "button", bg: "transparent", fg: "#000000", radius: 10000, height: "44px", padding: "4px 16px", font: "14px / 600", hover: "rgba(61,77,116,0.06)", pressed: "rgba(61,77,116,0.12)", focus: "outline 2px solid #000000", use: "What we offer / For business — ghost navigation pills tinting 6% on hover and 12% when pressed." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.epidemicsound.com/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.epidemicsound.com/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.epidemicsound.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://www.epidemicsound.com/about-us/", captured: "2026-09-26" }
    - { id: press, kind: official-doc, url: "https://corporate.epidemicsound.com/press-and-media/press-releases/2026/financial-times-recognizes-epidemic-sound-as-one-of-europes-fastest-growing-companies-2026/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.background-base: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-azur: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-ecru: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-fog: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-moss: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-off-black: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-off-white: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-pink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-stone: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.inverse-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.inverse-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.light-tint: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.pink-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.pink-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.positive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.purple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-ghost.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
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
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Epidemic Sound

## 1. Visual Theme & Atmosphere

Epidemic Sound licenses music and sound effects to brands and creators — "an expansive catalog of
world-class music and sound effects that's seen and heard over 3 billion times a day", more than
55,000 original tracks, and a direct licence model where "we own all the rights to all our tracks".
It partners with artists on a 50/50 royalty split with upfront payments. Its press releases are
datelined Stockholm, Sweden, and call it a "Swedish Unicorn".

The marketing site runs a light override of a dark-first product system: an off-white page
**`#f1f0eb`**, black ink and black pill buttons, translucent blue-grey secondary pills, and brand
accents — pink **`#ff82c2`**, azur **`#20afff`**, yellow **`#ffda40`**, red **`#ff6138`**. Headlines
are set in **Sebenta**, text in **Inter**.

What makes it worth reading:

- **A dark-first system with a light override.** `--es-color-background-base` is `#121418` and text
  primary is white; the marketing body carries `alternative-light-theme-override` and inverts to
  black on off-white.
- **Complete action families.** `--es-color-action-{primary, accent, positive, negative, segment,
  secondary, tertiary, ghost}` each with hovered, pressed and disabled values.
- **Named brand neutrals.** Off-white, off-black, fog, ecru, moss and stone sit beside the brights,
  plus platform colours (`--es-color-platform-tiktok`, `-youtube`, `-twitch` …) for integrations.

### Primary tasks
- Explore music and sound effects.
- Create a free account; see pricing.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `epidemicsound.com`: 223 root custom properties — `--es-*` 168
plus a few `--color-brand-*`; Tailwind's `--tw-*` (20) excluded.

### Brand

- **Pink** (`#ff82c2`) — `--es-color-brand-pink`, `--es-color-action-accent`; hovered (`#e575af`),
  pressed (`#cc689b`).
- **Azur** (`#20afff`) — focus and active inputs · **Yellow** (`#ffda40`) — trim and track highlight ·
  **Red** (`#ff6138`) — negative.
- **Off-white** (`#f1f0eb`) — the page · **Off-black** (`#292c33`).
- **Fog** (`#cfd6e5`) · **Ecru** (`#e4d9cf`) · **Moss** (`#bfbda8`) · **Stone** (`#9793a5`).
- **Positive** (`#5ad363`) · **Purple** (`#bb76ff`) — `action-segment`, `background-new`.

### Ink and surfaces

- **Foreground** (`#000000`) on the light override; **Background base** (`#121418`) in the dark
  product theme.
- **Inverse hovered** (`#272727`) · **Inverse pressed** (`#333333`).
- **Canvas** (`#ffffff`) · **Light tint** (`#3d4d74`) — the translucent secondary pills.

## 3. Typography Rules

### Font family

**Sebenta** (500) for display and **Inter** (400–700) for text; both load (`document.fonts`).

### Scale

H1 80px/500 Sebenta; H2 32px/500 Sebenta; section labels 14px/600 Inter uppercase; buttons
14px/600.

## 4. Component Stylings

Measured with focus under a real Tab key and a hover counted only when `:hover` matched. The consent
banner offered only "Change cookie settings" and "Accept"; it was never answered.

- **Primary pill** — Create free account: **`#000000`**, white 14px/600, full pill, 44px. Hover
  **`#272727`**, press **`#333333`**; focus a **2px black** outline.
- **Secondary pill** — Log in: **`rgba(61,77,116,0.12)`** → **0.18** → **0.24**.
- **Ghost pill** — What we offer, For business: transparent → **6%** → **12%** of the same tint.

### Radius

Full pills (`10000px`).

## 5. Layout Principles

- A sticky header of pill buttons over an off-white page with big Sebenta headlines and media tiles.

## 6. Depth & Elevation

`--es-elevation-floating` `0 8px 16px rgba(0,0,0,.25)`; `--es-elevation-bottom` mirrors it upward.

## 7. Do's and Don'ts

### Do
- Put black pills on off-white `#f1f0eb`, and step translucent pills 6% → 12% → 18% → 24%.
- Use Sebenta for headlines, Inter for text.
- Keep pink `#ff82c2` for accent actions and likes.

### Don't
- Don't use pure white as the marketing ground; it is off-white.
- Don't make buttons square; everything is a full pill.
- Don't use the platform colours for Epidemic's own UI.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#f1f0eb` off-white · `#000000` ink · `#272727` hover · `#ff82c2` pink · `#20afff` azur ·
`#ffda40` yellow · `#ff6138` red · `#121418` dark base

### Example Component Prompts
- "A 44px black pill, white 14px/600 Inter; hover `#272727`, press `#333333`; focus a 2px black
  outline."
- "An 80px Sebenta headline in black on `#f1f0eb`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

A Stockholm company that owns its whole catalogue so creators never worry about rights. Its product
lives in the dark; its storefront turns the lights on — off-white, black pills and Sebenta headlines
— with pink, azur and yellow as the music.

## 12. Principles

- **Worry-free rights.** The licence model is the product.
- **Artists paid fairly.** 50/50 royalties and upfront payments.
- **Every action has four states.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: black pills lift to `#272727`; translucent pills deepen 6%. Press: `#333333`, another 6%.
Focus: 2px black outlines.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.epidemicsound.com/ (live homepage — 223 root custom properties read via `getComputedStyle`, Tailwind excluded; Sebenta and Inter loaded; three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.epidemicsound.com/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://www.epidemicsound.com/about-us/ (About — 3 billion plays a day, 55,000+ original tracks, direct licensing, read 2026-09-26); https://corporate.epidemicsound.com/press-and-media/press-releases/2026/financial-times-recognizes-epidemic-sound-as-one-of-europes-fastest-growing-companies-2026/ (press release — Stockholm, Sweden dateline; "Swedish Unicorn"; 50/50 royalty split, read 2026-09-26)

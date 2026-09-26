---
id: lego
name: LEGO
country: DK
category: ecommerce
homepage: "https://www.lego.com"
primary_color: "#FFD400"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=lego.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand-yellow: "#ffd400"
    brand-red: "#dd1a22"
    brand-blue: "#006cb7"
    primary: "#005ad2"
    primary-hovered: "#0045b7"
    primary-pressed: "#011c58"
    accent: "#ffd502"
    accent-hovered: "#fac400"
    accent-pressed: "#ef9f00"
    emphasis: "#e96f14"
    neutral-action: "#f2f2f2"
    neutral-action-hovered: "#e5e5e5"
    neutral-action-pressed: "#cbcbcb"
    foreground: "#141414"
    text-strong: "#3d3d3d"
    text-subdued: "#636363"
    canvas: "#ffffff"
    header: "#f7f7f7"
    border: "#b0b0b0"
    focus: "#4695f0"
    play-zone: "#d1e8ff"
    black: "#000000"
  typography:
    family: { sans: "Cera Pro" }
    body: { size: 16, weight: 400, use: "body and highlighted links" }
    nav: { size: 16, weight: 500, use: "SHOP / DISCOVER / HELP" }
  rounded: { sm: 4, pill: 999 }
  components:
    button-static-light: { type: "button", bg: "rgba(255,255,255,0.85)", fg: "#141414", radius: 999, height: "48px", padding: "0 20px", font: "18px / 500", hover: "rgba(255,255,255,0.9)", pressed: "rgba(255,255,255,0.94)", focus: "ring 0 0 0 2px #4695f0", use: "Continue / START PLAYING on the site chooser — translucent white pills on blue and yellow panels (--ds-color-action-static-light-*)." }
    button-play-zone: { type: "button", bg: "#d1e8ff", fg: "#000000", radius: 999, height: "32px", padding: "0 12px", font: "14px / 500", hover: "#a8bed4", pressed: "#8096ab", focus: "ring 0 0 0 2px #4695f0", use: "PLAY ZONE in the utility bar (sk-button--primary) — pale blue pill; hover and press darken it (served as lab(), converted)." }
    nav-menu: { type: "button", bg: "transparent", fg: "#141414", radius: 0, height: "22px", font: "16px / 500", hover: "transparent", pressed: "transparent", focus: "ring 0 0 0 2px #4695f0", use: "SHOP / DISCOVER / HELP on the yellow bar — hover and press turn the transparent 3px bottom border black." }
    link-highlight: { type: "button", bg: "#ffffff", fg: "#dd1a22", border: "#dd1a22", radius: 4, height: "34px", padding: "5px 20px", font: "16px / 400", hover: "#000000", pressed: "#000000", focus: "ring 0 0 0 2px #4695f0", use: "RETIRING SOON — white with LEGO red text; hover and press invert to black with white text." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.lego.com/en-gb", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.lego.com/en-gb", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.lego.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://www.lego.com/en-gb/aboutus/lego-group", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.accent: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.accent-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.accent-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.black: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.emphasis: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.focus: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.header: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.neutral-action: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.neutral-action-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.neutral-action-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.play-zone: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-subdued: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-play-zone.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-play-zone.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-play-zone.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-play-zone.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-play-zone.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-play-zone.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-play-zone.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-play-zone.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-play-zone.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-play-zone.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-play-zone.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-static-light.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-highlight.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-menu.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of LEGO

## 1. Visual Theme & Atmosphere

"The LEGO Group is a privately held company based in Billund, Denmark", still owned by the Kirk
Kristiansen family who founded it in 1932 — Ole Kirk Kristiansen made his first wooden toy that
year. Its about page calls the brand "the masters of reinvention": the first brick, made over 60
years ago, is still culturally relevant. lego.com is where the company sells sets, offers support
and runs a separate Play Zone for children.

The site opens on a site chooser — a blue LEGO.com panel and a yellow Play Zone panel. Behind it,
the header is a light utility bar **`#f7f7f7`** over LEGO's bright yellow **`#ffd400`**, with ink
**`#141414`**, LEGO red **`#dd1a22`** for highlights, and a working blue **`#005ad2`** for primary
actions. Type is **Cera Pro**.

What makes it worth reading:

- **A large token system.** 2,178 `--ds-*` properties, with action roles in four states
  (`--ds-color-action-primary-enabled / -hovered / -pressed / -selected`).
- **The brand palette as tokens.** `--ds-color-brand-*` names the LEGO colours — bright yellow,
  bright red, bright blue, earth blue, dark azur — 87 in all, 60 of them in an extended set (candy floss,
  sea foam, vip blue …).
- **Translucent action families.** `--ds-color-action-static-light-*` are white at 85% → 90% → 94%
  for buttons placed on colour.

### Primary tasks
- Choose LEGO.com or the Play Zone.
- Shop sets; find help; sign in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `lego.com/en-gb`: 2,255 root custom properties — `--ds-*` 2,178,
`--st-*` 65 and a few others. All first-party.

### Brand

- **Brand yellow** (`#ffd400`) — `--ds-color-brand-bright-yellow`; the main navigation bar.
- **Brand red** (`#dd1a22`) — `--ds-color-brand-bright-red`; highlighted links.
- **Brand blue** (`#006cb7`) — `--ds-color-brand-bright-blue`.

### Actions

- **Primary** (`#005ad2`) → hovered (`#0045b7`) → pressed (`#011c58`).
- **Accent** (`#ffd502`) → hovered (`#fac400`) → pressed (`#ef9f00`).
- **Emphasis** (`#e96f14`).
- **Neutral action** (`#f2f2f2`) → hovered (`#e5e5e5`) → pressed (`#cbcbcb`).

### Text and surfaces

- **Foreground** (`#141414`) — `--ds-color-text-default`.
- **Text strong** (`#3d3d3d`) · **Text subdued** (`#636363`).
- **Canvas** (`#ffffff`) · **Header** (`#f7f7f7`) · **Black** (`#000000`) — the hover inversion.
- **Border** (`#b0b0b0`) — `--ds-color-border-default`.
- **Focus** (`#4695f0`) — a 2px ring on every measured control.
- **Play Zone** (`#d1e8ff`) — the utility-bar pill.

## 3. Typography Rules

### Font family

**Cera Pro** (400, 500, 700), `"Cera Pro", sans-serif`, loaded (`document.fonts`).

### Scale

Body 16px/400; navigation 16px/500; utility pill 14px/500; site-chooser buttons 18px/500.

## 4. Component Stylings

Measured with focus under a real Tab key and a hover counted only when `:hover` matched. The site
chooser was never answered; the probe hid it to reach the header.

- **Chooser pill** — Continue / START PLAYING: **`rgba(255,255,255,0.85)`**, `#141414` 18px/500,
  999px, 48px. Hover **0.9**, press **0.94**; focus a **2px `#4695f0`** ring.
- **Play Zone pill** — **`#d1e8ff`**, black 14px/500, 32px. Hover darkens to **`#a8bed4`**, press
  **`#8096ab`** (served as `lab()`, converted).
- **Navigation** — SHOP, DISCOVER, HELP on yellow: `#141414` 16px/500. Hover and press turn the 3px
  bottom border black.
- **Highlighted link** — RETIRING SOON: white, **`#dd1a22`** text and border, 4px. Hover and press
  invert to **`#000000`** with white text.

### Radius

999px pills; 4px on the highlighted link.

## 5. Layout Principles

- A light utility bar, a yellow main bar with logo and three menus, then promotional bands.

## 6. Depth & Elevation

Flat header; the site chooser sits over a darkened, blurred page.

## 7. Do's and Don'ts

### Do
- Use bright yellow `#ffd400` for the brand bar and red `#dd1a22` for highlights.
- Give every action enabled, hovered, pressed and selected values.
- Use a 2px `#4695f0` focus ring.

### Don't
- Don't substitute nearby yellows; the brand yellow is `#ffd400`.
- Don't put opaque white buttons on coloured panels; use the translucent static-light family.
- Don't use pure black for body text; the ink is `#141414`.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#ffd400` LEGO yellow · `#dd1a22` LEGO red · `#006cb7` LEGO blue · `#005ad2` primary ·
`#141414` ink · `#636363` subdued · `#f7f7f7` header · `#4695f0` focus

### Example Component Prompts
- "A yellow `#ffd400` bar with `#141414` 16px/500 Cera Pro menus that gain a 3px black underline on
  hover."
- "A white button with `#dd1a22` text and border, 4px radius, inverting to black on hover."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

A family company from Billund that has reinvented one brick for over 60 years. The site carries the
brick's primary colours as named tokens, uses yellow as the frame, and keeps an operational blue
for the work of shopping.

## 12. Principles

- **Reinvention.** The about page's own word.
- **Named colour.** The brand palette lives in the token system.
- **Complete states.** Enabled, hovered, pressed, selected.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: pills darken or brighten a step, the menu underlines, the red link inverts. Press: a further
step. Focus: a 2px `#4695f0` ring throughout.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.lego.com/en-gb (live homepage — 2,255 root custom properties read via `getComputedStyle`; Cera Pro loaded; four components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.lego.com/en-gb/zz-this-does-not-exist (nonsense-path control — HTTP 404, read 2026-09-26); https://www.lego.com/en-gb/aboutus/lego-group (The LEGO Group — privately held, based in Billund, Denmark, founded 1932 by the Kirk Kristiansen family; LEGO System A/S, DK-7190 Billund, read 2026-09-26)

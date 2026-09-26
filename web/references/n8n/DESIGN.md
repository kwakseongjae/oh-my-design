---
id: n8n
name: n8n
country: DE
category: developer-tools
homepage: "https://n8n.io"
primary_color: "#EA4B71"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=n8n.io&sz=128"
verified: "2026-09-27"
added: "2026-09-27"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-27"
  colors:
    brand-pink: "#ea4b71"
    cta-from: "#fd8925"
    cta-to: "#ff0c00"
    primary-600: "#ee4f27"
    primary-400: "#f96e49"
    secondary-orange: "#ff9b26"
    button-primary-from: "#077ac7"
    button-primary: "#6b21ef"
    tertiary-from: "#a3a3a3"
    tertiary: "#bcbcbc"
    midnight-navy: "#0e0918"
    dark-navy: "#1b1728"
    deep-navy: "#1f192a"
    slate-blue: "#48556a"
    hazy-white: "#f7f6fa"
    text-primary: "#d1cece"
    text-secondary: "#9d9797"
    heading: "#ffffff"
    green: "#35a670"
  typography:
    family: { sans: "geomanist" }
    heading: { size: 48, weight: 400, use: "section headings (--text-headline-md 48px)" }
    body: { size: 14, weight: 400, use: "buttons; navigation 15px" }
  rounded: { md: 8, lg: 16, xl: 24 }
  components:
    button-cta: { type: "button", bg: "transparent", fg: "#ffffff", radius: 8, height: "40px", padding: "0 20px", font: "14px / 400", hover: "rgba(255,255,255,0.12)", pressed: "rgba(255,255,255,0.12)", use: "Get started for free — a 30° gradient from #fd8925 to #ff0c00 (--color-button-cta-*); hover and press lay a 12% white layer over it." }
    button-glass: { type: "button", bg: "rgba(163,163,163,0.2)", fg: "#ffffff", radius: 8, height: "40px", padding: "0 20px", font: "14px / 400", hover: "rgba(188,188,188,0.2)", pressed: "rgba(188,188,188,0.2)", use: "Talk to sales — translucent grey (the tertiary pair #a3a3a3 → #bcbcbc at 20%) on the dark page." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-27"
  surfaces:
    - { id: home, kind: product-surface, url: "https://n8n.io/", inspected: "2026-09-27" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://n8n.io/", captured: "2026-09-27" }
    - { id: control-404, kind: product-surface, url: "https://n8n.io/zz-this-does-not-exist", captured: "2026-09-27" }
    - { id: press, kind: official-doc, url: "https://n8n.io/press/", captured: "2026-09-27" }
    - { id: imprint, kind: official-doc, url: "https://n8n.io/imprint/", captured: "2026-09-27" }
  conflicts: []
  claims:
    tokens.colors.brand-pink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.button-primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.button-primary-from: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.cta-from: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.cta-to: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.dark-navy: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.deep-navy: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.hazy-white: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.heading: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.midnight-navy: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.primary-400: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.primary-600: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.secondary-orange: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.slate-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.tertiary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.tertiary-from: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.text-primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.components.button-cta.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-cta.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-cta.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-cta.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-cta.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-cta.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-cta.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-cta.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-cta.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-cta.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-glass.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-glass.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-glass.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-glass.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-glass.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-glass.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-glass.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-glass.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-glass.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-glass.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.heading.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.heading.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.heading.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
---
# Design System Inspiration of n8n

## 1. Visual Theme & Atmosphere

"n8n is a free and open node-based Workflow Automation Tool. It can be self-hosted, easily extended,
and used with third party web applications or custom in-house tools." The press page adds that "n8n
is headquartered in Berlin and was founded by Jan Oberhauser in 2019", and that its name is always
lowercase, pronounced "n eight n". Its imprint names **n8n GmbH**, Novalisstr. 10, 10115 Berlin.

The site is dark and warm: a midnight navy page **`#0e0918`**, navy panels (`#1b1728`, `#1f192a`),
soft grey text **`#d1cece`** under white headings, n8n's pink **`#ea4b71`**, and an orange-to-red
gradient **`#fd8925 → #ff0c00`** on the main call to action. Type is **Geomanist**.

What makes it worth reading:

- **Gradient buttons as token pairs.** `--color-button-cta-from` / `--color-button-cta`,
  `--color-button-primary-from` (`#077ac7`) / `--color-button-primary` (`#6b21ef`), and
  `--color-button-tertiary-from` / `-tertiary` — each button is a two-stop gradient.
- **Navy shades named like a palette.** Midnight, deep, dark, dark-lighten and slate-blue navies.
- **A headline scale in pixels.** `--text-headline-xxs` 28px up to `-xxl` 80px, all at 100% line
  height.

### Primary tasks
- Get started for free; sign in.
- Explore use cases, docs and community; talk to sales.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `n8n.io`: 190 root custom properties — `--color-*` 56, `--text-*`
29, `--radius-*` 9, `--font-*` 9 … Tailwind's `--tw-*` (29) and the carousel library's `--vc-*` (19)
are excluded.

### Brand and gradients

- **Brand pink** (`#ea4b71`) — `--color-base-pink`.
- **CTA gradient** `#fd8925` → `#ff0c00` — `--color-button-cta-from`, `--color-button-cta`.
- **Primary** `#ee4f27` (600), `#f96e49` (400) · **Secondary orange** `#ff9b26`.
- **Primary button gradient** `#077ac7` → `#6b21ef`.
- **Tertiary** `#a3a3a3` → `#bcbcbc`.

### Navy and text

- **Midnight navy** (`#0e0918`) — the page · **Dark navy** (`#1b1728`) · **Deep navy** (`#1f192a`) ·
  **Slate blue** (`#48556a`) · **Hazy white** (`#f7f6fa`).
- **Heading** (`#ffffff`) · **Text primary** (`#d1cece`) · **Text secondary** (`#9d9797`).
- **Green** (`#35a670`) — excellent scores.

## 3. Typography Rules

### Font family

**Geomanist** (300, 400, plus a Book cut), `geomanist, ui-sans-serif, system-ui, sans-serif`,
loaded (`document.fonts`).

### Scale

Headlines 28–80px at 100% line height (section H2 48px/400); body 16–18px at 150%; navigation 15px;
buttons 14px.

## 4. Component Stylings

Measured with a hover counted only when `:hover` matched; consent declined. Focus showed only the
browser's ring and is not recorded.

- **CTA** — Get started for free: a **30° `#fd8925 → #ff0c00` gradient**, white 14px, 8px, 40px.
  Hover and press lay a **12% white** layer over the gradient.
- **Glass button** — Talk to sales: **`rgba(163,163,163,0.2)`** → **`rgba(188,188,188,0.2)`** on
  hover.

### Radius

8px buttons; `--radius-small` 1rem, `--radius-default` 1.5rem, `--radius-huge` 2rem on cards.

## 5. Layout Principles

- A dark header, a hero with the gradient CTA, a workflow canvas illustration and use-case tabs.

## 6. Depth & Elevation

Translucent white panels (`rgba(255,255,255,.03)`–`.1`) on the navy ground; blur tokens exist.

## 7. Do's and Don'ts

### Do
- Put the orange-to-red gradient on the one main CTA, and brighten it with a white layer on hover.
- Use the navy shades for the page and panels.
- Write the name lowercase — n8n.

### Don't
- Don't use flat orange where the CTA gradient belongs.
- Don't use pure black backgrounds; the page is midnight navy.
- Don't treat the carousel library's variables as n8n tokens.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#ea4b71` n8n pink · `#fd8925 → #ff0c00` CTA · `#0e0918` midnight · `#1b1728` navy · `#d1cece` text ·
`#9d9797` secondary · `#077ac7 → #6b21ef` primary gradient · `#35a670` green

### Example Component Prompts
- "A 40px button with a 30° `#fd8925 → #ff0c00` gradient, white 14px Geomanist, 8px radius; hover adds
  a 12% white layer."
- "A glass button at `rgba(163,163,163,0.2)` on `#0e0918`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

A Berlin-built, fair-code automation tool that you can self-host. The site is a night-time canvas —
midnight navy and grey — lit by a pink logo and a warm gradient button.

## 12. Principles

- **Automate without limits.** The page title's promise.
- **Self-hostable and extensible.**
- **Gradients as buttons.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: a 12% white layer on the gradient CTA; the glass button brightens. Press: the same. Focus:
the browser's ring (not recorded).

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://n8n.io/ (live homepage — 190 root custom properties read via `getComputedStyle`, Tailwind and carousel variables excluded; Geomanist loaded; two components measured at rest, hover and pressed, captured 2026-09-27); https://n8n.io/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-27); https://n8n.io/press/ (press — "a free and open node-based Workflow Automation Tool", headquartered in Berlin, founded by Jan Oberhauser in 2019, read 2026-09-27); https://n8n.io/imprint/ (imprint — n8n GmbH, Novalisstr. 10, 10115 Berlin, read 2026-09-27)

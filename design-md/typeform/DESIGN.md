---
id: typeform
name: Typeform
country: ES
category: saas
homepage: "https://www.typeform.com"
primary_color: "#2A222B"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=typeform.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Typeform brand and web tokens"
  url: "https://www.typeform.com/brand/"
  type: brand
  description: "Typeform's brand page names its default colours Paper (white) and Ink (black) — 'the blank canvas on which businesses can add their own colors'. typeform.com, built in Webflow, carries about 250 first-party variables in two tiers: primitives (neutral 25–1000, lavender 25–1000, type and spacing scales) and --tokens--* roles for text, surfaces, borders, buttons and tags. Ink is #2a222b and Paper #faf9fb; buttons are 12px-rounded and swap to a neighbouring neutral on hover. Headings are set in Tobias, a serif; body and interface in TWK Lausanne."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#2a222b"
    foreground: "#2a222b"
    canvas: "#faf9fb"
    ink-hover: "#564b58"
    surface-active: "#eeecee"
    surface-hover: "#f5f3f6"
    text-secondary: "#655d67"
    border: "#e5e1e5"
    neutral-500: "#a49da6"
    highlight: "#9454ab"
    eyebrow: "#a25fba"
    lavender-300: "#ddd6fa"
    lavender-500: "#a494eb"
    lavender-700: "#7761b3"
    lavender-900: "#42377b"
    white: "#ffffff"
  typography:
    family: { display: "Tobias", sans: "TWK Lausanne" }
    button: { size: 16, weight: 400, use: "buttons" }
  rounded: { xs: 4, sm: 12, md: 24, lg: 48, xl: 80, full: 16000 }
  components:
    button-light: { type: "button", bg: "#faf9fb", fg: "#2a222b", border: "#2a222b", radius: 12, height: "48px", padding: "8px 24px", font: "16px / 400", hover: "#eeecee", pressed: "#eeecee", use: "Get started — Paper with an Ink label; hover and press fill it with --tokens--button--secondary-bg-hover #eeecee. Focus is the browser's ring. A 40px Sign up variant follows the same recipe." }
    button-dark: { type: "button", bg: "#2a222b", fg: "#faf9fb", radius: 12, height: "48px", padding: "8px 24px", font: "16px / 400", hover: "#564b58", pressed: "#564b58", use: "Explore forms — Ink with a Paper label (--tokens--button--primary-bg-idle); hover and press lift it to --tokens--button--primary-bg-hover #564b58. Focus is the browser's ring." }
    link-login: { type: "button", bg: "transparent", fg: "#faf9fb", radius: 0, height: "48px", padding: "0 12px", font: "16px / 400", hover: "fg #ddb7f0", pressed: "fg #ddb7f0", use: "Log in in the header over the dark hero — Paper text that turns lavender #ddb7f0 on hover and press." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.typeform.com/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.typeform.com/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.typeform.com/zz-this-does-not-exist-9182", captured: "2026-09-26" }
    - { id: brand, kind: official-doc, url: "https://www.typeform.com/brand/", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://www.typeform.com/about-us/", captured: "2026-09-26" }
    - { id: privacy, kind: official-doc, url: "https://www.typeform.com/legal/privacy-policy", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.eyebrow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.highlight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.ink-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.lavender-300: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.lavender-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.lavender-700: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.lavender-900: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.neutral-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-active: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.white: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-dark.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-light.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-login.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-login.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-login.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-login.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-login.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-login.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-login.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-login.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-login.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-login.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.full: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Typeform

## 1. Visual Theme & Atmosphere

Typeform makes forms and surveys that ask one question at a time. Founded in 2012, it is operated
by TYPEFORM, S.L., at Via Augusta 29–31 in Barcelona, and describes itself today as a remote-first
company with more than 250 people.

Its brand page puts the idea in a line: Typeform "inspires businesses to break the norm of forms".
The voice is "bold, authentic, and witty — never grandiose, haughty, or cheap with our humor". The
logo is "a blinking cursor side-by-side with a form", set in Aperçu Pro Regular. And the colours
are deliberately plain: "Typeform is the blank canvas on which businesses can add their own
colors… Our default colors reflect this: Paper (white) and Ink (black)."

The site follows that literally — Paper **`#faf9fb`** and Ink **`#2a222b`**, a warm near-black with a
touch of plum — with lavender and orchid reserved for highlights. Headlines are set in **Tobias**, a
serif; everything else in **TWK Lausanne**.

What makes it worth reading:

- **Two named colours.** Paper and Ink do almost all the work; the palette's other hues are accents.
- **Hover as a step along the neutral ramp.** Paper buttons go to neutral-100 `#eeecee`; Ink buttons
  to neutral-800 `#564b58`.
- **Tokens built in Webflow.** The variables are Webflow's own exports — primitive collections
  (`--_colour-primitives---…`) aliased by role tokens (`--tokens--button--primary-bg-idle`).

### Primary tasks
- Start building a form; browse templates.
- Sign up or log in; compare pricing.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `typeform.com`: about 250 root variables, all Typeform's —
about 220 primitive entries (colour, typography, size and spacing collections), 30 `--tokens--*`
roles and 4 `--tag--*` component values.

### Paper and Ink

- **Primary** (`#2a222b`) — Ink; `--tokens--button--primary-bg-idle`, neutral-1000.
- **Foreground** (`#2a222b`) — `--tokens--text-colour--text-colour-primary`.
- **Canvas** (`#faf9fb`) — Paper; `--tokens--surfaces--background-idle`, neutral-25.
- **Ink hover** (`#564b58`) — `--tokens--button--primary-bg-hover`, neutral-800.
- **Surface active** (`#eeecee`) — `--tokens--surfaces--foreground-active`,
  `--tokens--button--secondary-bg-hover`.
- **Surface hover** (`#f5f3f6`) — `--tokens--surfaces--background-hover`.
- **Text secondary** (`#655d67`) · **Border** (`#e5e1e5`) · neutral-500 `#a49da6` · **White**
  `#ffffff` (`--tokens--surfaces--foreground-idle`).

### Lavender and orchid

**Highlight** `#9454ab` (`--tokens--text-colour--text-colour-highlight`) · **Eyebrow** `#a25fba`
(also the tertiary button hover) · lavender-300 `#ddd6fa` · lavender-500 `#a494eb` · lavender-700
`#7761b3` · lavender-900 `#42377b`.

## 3. Typography Rules

### Font family

**Tobias** (400) for display headings and **TWK Lausanne** (350, 400, 500, 600) for body and
interface — both loaded (`document.fonts`) and served from the site's own CDN; body computes to
`"Twklausanne 400", Arial, sans-serif`. The brand's logotype face, **Aperçu Pro Regular**, is
declared but did not load on the pages measured — the brand page names it for the logo. Inter also
loads and drives none of the measured elements.

### Scale

Buttons are 16px at 400 — the interface stays regular weight.

## 4. Component Stylings

Measured on the home page, focus read under a real Tab key, and a hover counted only when `:hover`
matched; background-image, text-decoration and pseudo-elements were compared too.

- **Light button** — Get started: **`#faf9fb`**, Ink label, 12px radius, 48px, `8px 24px`,
  16px/400. Hover and press **`#eeecee`**. Focus is the browser's `auto` ring. Sign up is a 40px
  version.
- **Dark button** — Explore forms: **`#2a222b`**, Paper label, same shape. Hover and press
  **`#564b58`**.
- **Log in** — Paper text on the dark hero; hover and press turn it lavender **`#ddb7f0`**.

### Radius

`--_size-and-spacing---tokens--corner-radius--xs` .25rem · `sm` .75rem (buttons, 12px) · `md` 1.5rem ·
`lg` 3rem · `xl` 5rem · `full` 1000rem.

## 5. Layout Principles

- Paper sections with Ink type; dark heroes invert to Paper on Ink.
- Generous corner radii on cards (24px and up).

## 6. Depth & Elevation

Flat: every measured control has no shadow, and the only shadow variable is
`--tag--shadow-colour: transparent`.

## 7. Do's and Don'ts

### Do
- Build with Paper `#faf9fb` and Ink `#2a222b`; add colour only as a highlight.
- Step hover along the neutral ramp: `#eeecee` on Paper, `#564b58` on Ink.
- Set headlines in Tobias and everything else in TWK Lausanne at regular weight.

### Don't
- Don't use pure black or white where Ink and Paper are meant.
- Don't set interface text in the logo face, Aperçu Pro.
- Don't add drop shadows.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#2a222b` Ink · `#faf9fb` Paper · `#564b58` Ink hover · `#eeecee` Paper hover · `#655d67` secondary ·
`#e5e1e5` border · `#9454ab` highlight · `#a494eb` lavender

### Example Component Prompts
- "A 48px button, Ink `#2a222b` with a Paper `#faf9fb` 16px/400 TWK Lausanne label, 12px radius;
  hover `#564b58`."
- "A Paper `#faf9fb` section with a Tobias serif headline in Ink and a lavender `#9454ab` highlight."

## 10. Voice & Tone

The brand page defines it: "bold, authentic, and witty — never grandiose, haughty, or cheap with
our humor." Copy on the site was not audited against it.

## 11. Brand Narrative

Typeform set out to make forms something people enjoy, and its brand keeps itself out of the way so
customers' colours can come through: a cursor, a form, Paper and Ink. The site is the demonstration
— warm off-white, plum-tinted black, a serif for headlines, and lavender only where something should
stand out.

## 12. Principles

- **A blank canvas.** Paper and Ink, so the customer's brand leads.
- **One question at a time.** Calm, uncluttered layouts.
- **Bold, authentic, witty.** A serif headline with a sense of humour.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover and press: Paper buttons to `#eeecee`, Ink buttons to `#564b58`, the Log in link to lavender.
Focus: the browser's ring. No disabled state was observed.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.typeform.com/ (live homepage — about 250 root variables read via `getComputedStyle`; Tobias and TWK Lausanne loaded; three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.typeform.com/brand/ (Typeform Brand — Voice, Logo, Color: Paper and Ink, Aperçu Pro Regular, read 2026-09-26); https://www.typeform.com/zz-this-does-not-exist-9182 (nonsense-path control — HTTP 404 "Page Error", read 2026-09-26); https://www.typeform.com/about-us/ (About us — "Founded in 2012 … remote-first … over 250 employees", read 2026-09-26); https://www.typeform.com/legal/privacy-policy (Privacy Policy — TYPEFORM, S.L., Via Augusta 29–31, 08006 Barcelona, read 2026-09-26)

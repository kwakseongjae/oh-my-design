---
id: getyourguide
name: GetYourGuide
country: DE
category: consumer-tech
homepage: "https://www.getyourguide.com"
primary_color: "#FF5533"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=getyourguide.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "GetYourGuide web tokens"
  url: "https://www.getyourguide.de"
  type: system
  description: "About 100 first-party custom properties on getyourguide.de, named by role: interactive (primary, secondary, tertiary, quaternary, critical, each with hovered, pressed and disabled), label, surface, border, separator, spacing and six named decorative colours — guiding red, poolside blue, plant green, flamingo pink, basking yellow, midnight blue. Actions are blue #0071eb, text is midnight #1a2b49, and the orange-red #ff5533 is the brand accent (--surface-gyg). Assets load from a CDN path named design-system/; no public name for the system was found. Type renders in GT Eesti; a variable GYG Sans is declared but not yet in use on the page measured."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#ff5533"
    primary: "#0071eb"
    primary-hover: "#304c84"
    foreground: "#1a2b49"
    label-secondary: "#63687a"
    label-tertiary: "#858995"
    critical: "#c72a3d"
    critical-hover: "#951d2b"
    success: "#007850"
    warning: "#a65200"
    border: "#dcdfe4"
    border-hover: "#a0a8b6"
    surface-secondary: "#ebeef1"
    highlight: "#e1f0ff"
    canvas: "#ffffff"
    poolside-blue: "#81beff"
    plant-green: "#a1d55d"
    flamingo-pink: "#f4cdd7"
    basking-yellow: "#ffd938"
  typography:
    family: { sans: "GT Eesti" }
    button: { size: 24, weight: 700, use: "the search button" }
    nav: { size: 14, weight: 400, use: "header links" }
  rounded: { pill: 80 }
  components:
    button-search: { type: "button", bg: "#0071eb", fg: "#ffffff", border: "#0071eb", radius: 80, height: "56px", padding: "13px 32px", font: "24px / 700", hover: "#304c84", pressed: "#304c84", focus: "outline 2px solid #0071eb", use: "Suchen, the search button — --interactive-primary; hover and press turn it to --interactive-primary-hovered #304c84, focus draws a 2px outline in the primary blue." }
    link-header: { type: "button", bg: "transparent", fg: "#63687a", radius: 0, height: "64px", font: "14px / 400", hover: "transparent", use: "Profil in the header, in --label-secondary. Hover and press change nothing, and focus draws no indicator." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.getyourguide.de/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.getyourguide.de/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://inside.getyourguide.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: careers, kind: official-doc, url: "https://www.getyourguide.careers/", captured: "2026-09-26" }
    - { id: blog, kind: official-doc, url: "https://inside.getyourguide.com/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.basking-yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.critical: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.critical-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.flamingo-pink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.highlight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.label-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.label-tertiary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.plant-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.poolside-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
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
    tokens.components.link-header.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of GetYourGuide

## 1. Visual Theme & Atmosphere

GetYourGuide is a marketplace for tours, activities and attraction tickets. By its own account it
began as a student project: "2009 GetYourGuide is founded in Zurich, Switzerland", the website
launched in 2010, and in 2012 came "Hallo, Berlin!" — the first official office. The company later
"established Berlin HQ" in the historic Ampere Gardens, and it describes a Zurich base, opened in
2017, as its founding country, where much of the tech team still works. Its footer reads "Made in
Zurich & Berlin".

The site is bright and photographic: white ground, midnight-blue text **`#1a2b49`**, and actions in
a clear blue **`#0071eb`**. The brand's orange-red **`#ff5533`** — the colour of the GetYourGuide
mark — appears as an accent, not on buttons. The search button is a large pill, 56px tall with a
24px bold label.

What makes it worth reading:

- **Role names, not colour names.** Tokens read as `--interactive-primary`, `--label-secondary`,
  `--surface-highlight`, `--border-primary-hovered` — every interactive level has hovered, pressed
  and disabled steps.
- **Named decorative colours.** Six playful names sit beside the roles: guiding red, poolside blue,
  plant green, flamingo pink, basking yellow, midnight blue.
- **A typeface in transition.** `--font-family` still renders GT Eesti; `--font-primary` declares a
  variable GYG Sans with Arabic and Cyrillic cuts, fetched but not yet applied on the page measured.

### Primary tasks
- Search a destination or activity; browse cities and experiences.
- Sign in; manage wishlist and bookings.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `getyourguide.de`: 104 root custom properties, about 100 of
them GetYourGuide's own. The rest are a Swiper carousel's and build artefacts.

### Brand and ink

- **Brand** (`#ff5533`) — `--surface-gyg`, `--label-gyg`, `--decorative-guiding-red`.
- **Primary** (`#0071eb`) — `--interactive-primary`, `--border-interactive-focused`; the search
  button and link text.
- **Primary hover** (`#304c84`) — `--interactive-primary-hovered` and `-pressed`.
- **Foreground** (`#1a2b49`) — `--label-primary`, `--decorative-midnight-blue`; the most frequent text
  colour.
- **Label secondary** (`#63687a`) · **Label tertiary** (`#858995`).
- **Canvas** (`#ffffff`) — `--surface-primary`.

### Surfaces and borders

**Surface secondary** `#ebeef1` · **Highlight** `#e1f0ff` · **Border** `#dcdfe4`
(`--border-primary`) → hovered **`#a0a8b6`** → focused `#0071eb`.

### Decorative

**Poolside blue** `#81beff` · **Plant green** `#a1d55d` · **Flamingo pink** `#f4cdd7` · **Basking
yellow** `#ffd938`.

### Status

**Critical** `#c72a3d` (hovered `#951d2b`) · **Success** `#007850` · **Warning** `#a65200`.

## 3. Typography Rules

### Font family

**GT Eesti** renders body, headings and buttons: `--font-family: "GT Eesti", arial, sans-serif`,
with 400, 500 and 700 loaded (`document.fonts`), served from GetYourGuide's CDN under
`design-system/GT-Eesti/`. The newer `--font-primary` names **GYG Sans** (`GYGSans-VF`, a
variable face, weight 200–900, with Arabic and Cyrillic families); its files are fetched but
`document.fonts` reports it unloaded on this page, so it is declared, not rendered.

### Scale

Measured: the search button 24px/700, header links 14px/400.

## 4. Component Stylings

Measured on `getyourguide.de`, focus read under a real Tab key, and a hover counted only when
`:hover` matched.

- **Search button** — Suchen: **`#0071eb`**, white 24px/700, radius 80px, 56px, `13px 32px`. Hover
  and press turn it to **`#304c84`**. Focus draws `outline: 2px solid #0071eb`.
- **Header link** — Profil: `#63687a`, 14px/400, 64px. Hover, press and focus change nothing.

### Radius

The search button is a full pill (80px on a 56px height).

## 5. Layout Principles

- Spacing: `--spacing-0-5x` 4px, `-1x` 8px, `-1-5x` 12px, `-2x` 16px, `-3x` 24px, `-4x` 32px, up to
  `-8x` 64px and `-16x` 128px.
- Photography-led cards and city tiles on white.

## 6. Depth & Elevation

`--elevation-subtle` `#dad2f440` exists; the measured controls carry no shadow. Image overlays use
`--supportive-over-image-*`.

## 7. Do's and Don'ts

### Do
- Put actions in `#0071eb` and deepen to `#304c84` on hover and press.
- Set text in midnight `#1a2b49`; secondary in `#63687a`.
- Keep the orange-red `#ff5533` for the brand mark and accents.

### Don't
- Don't make buttons orange; the action colour is blue.
- Don't claim GYG Sans as the rendered face yet — GT Eesti renders.
- Don't use the decorative colours for text.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#0071eb` action · `#304c84` action hover · `#1a2b49` ink · `#63687a` secondary · `#ff5533` brand ·
`#dcdfe4` border · `#ebeef1` surface · `#e1f0ff` highlight · `#c72a3d` critical

### Example Component Prompts
- "A 56px pill search button, `#0071eb`, white 24px/700 GT Eesti; hover `#304c84`; focus a 2px
  `#0071eb` outline."
- "An activity card on white with a `#1a2b49` title and `#63687a` meta line."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

GetYourGuide turned a student project in Zurich into a travel marketplace run from Berlin, with
offices from Rome to Bangkok. Its interface is friendly and plain: photographs do the selling,
blue does the acting, and the brand's orange-red stays in the logo. The tokens say what each colour
is for, and the type is mid-change — GT Eesti today, GYG Sans already declared.

## 12. Principles

- **Blue acts.** One action colour with a darker hover.
- **Name the role.** Tokens describe purpose, with every state spelled out.
- **Photos first.** Chrome stays white and calm.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover and press: the search button to `#304c84`; the Profil header link does not change. Focus: a
2px `#0071eb` outline on the search button, nothing on the header link. Disabled tokens exist
(`--interactive-primary-disabled` `#dcdfe4`) but none was observed.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.getyourguide.de/ (live homepage — 104 root custom properties read via `getComputedStyle`; GT Eesti loaded, GYG Sans declared and unloaded; two components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.getyourguide.careers/ (GetYourGuide Careers — "2009 GetYourGuide is founded in Zurich, Switzerland", "Hallo, Berlin!" 2012, "Established Berlin HQ" in Ampere Gardens, read 2026-09-26); https://inside.getyourguide.com/ (Inside GetYourGuide blog — "Made in Zurich & Berlin"; nonsense path returns 404, read 2026-09-26)

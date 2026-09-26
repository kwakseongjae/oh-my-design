---
id: oura
name: Oura
country: FI
category: consumer-tech
homepage: "https://ouraring.com"
primary_color: "#2A72DE"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ouraring.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Oura web tokens"
  url: "https://ouraring.com/de"
  type: system
  description: "ouraring.com runs on Tailwind v4 with Oura's own colour families added in hex: sandstone and cream (#fefaef–#e6ded3, #f7f1e8), mustard, olive, brown, slate and warm greys, beside Tailwind's stock oklch palette (excluded). The page is warm cream and a deep sandstone brown #4a4741, with the action in blue #2a72de that darkens to #2056a6 on hover; focus is a 2px #3184ff outline. Headings are set in Editorial New, a serif; body in Akkurat LL."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#2a72de"
    primary-hover: "#2056a6"
    focus: "#3184ff"
    foreground: "#000000"
    sandstone-ink: "#4a4741"
    cream: "#f7f1e8"
    cream-100: "#eee6dc"
    sandstone-100: "#fefaef"
    sandstone-450: "#e6ded3"
    canvas: "#ffffff"
    gray-450: "#5a5958"
    gray-350: "#a8a5a0"
    border: "#ececec"
    slate: "#27455c"
    slate-500: "#1b3449"
    mustard: "#af751b"
    olive: "#5c6f5d"
    brown: "#715956"
    red: "#d22c15"
  typography:
    family: { display: "Editorial New", sans: "Akkurat LL" }
    button: { size: 16, weight: 700, use: "the blue call to action" }
    nav: { size: 16, weight: 400, use: "header controls" }
  rounded: { pill: 9999 }
  components:
    button-primary: { type: "button", bg: "#2a72de", fg: "#ffffff", border: "#ececec", radius: 9999, height: "48px", font: "16px / 700", hover: "#2056a6", pressed: "#2056a6", focus: "outline 2px solid #3184ff", use: "Mehr erfahren — a blue pill (--color-blue-100 #2a72de) darkening to --color-blue-200 #2056a6 on hover and press; focus is a 2px bright-blue outline." }
    nav-pill: { type: "button", bg: "transparent", fg: "#000000", border: "#000000", radius: 9999, height: "48px", font: "16px / 400", hover: "transparent", focus: "outline 2px solid #3184ff", use: "Gesundheit, Jetzt kaufen and the other header pills — no change on hover (pseudo-elements included); focus draws the same 2px outline." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://ouraring.com/de", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://ouraring.com/de", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://ouraring.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://ouraring.com/about-us", captured: "2026-09-26" }
    - { id: impressum, kind: official-doc, url: "https://ouraring.com/impressum", captured: "2026-09-26" }
    - { id: legal-home, kind: official-doc, url: "https://ouraring.com/blog/oura-redomiciliation-news/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brown: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.cream: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.cream-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.focus: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gray-350: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gray-450: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.mustard: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.olive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.sandstone-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.sandstone-450: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.sandstone-ink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.slate: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.slate-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-pill.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Oura

## 1. Visual Theme & Atmosphere

Oura makes the Oura Ring, a smart ring for sleep, activity and health. Its about page begins: "Who
we are starts with where we're from: Finland", and says its mission "is to make health a daily
practice". The company behind the site is Oura Health Oy, Elektroniikkatie 10, Oulu. In a note to
its community, the CEO writes that Oura has "grown from a startup in Oulu into a global health
technology company, with members in more than 150 countries", and announces a project to
redomicile the company to the United States while Finland remains "the home base for our
engineering, product, innovation, values, and heritage".

The site is calm and editorial: warm cream **`#f7f1e8`** and a deep sandstone brown **`#4a4741`**,
serif headlines in **Editorial New** over **Akkurat LL** body text, product photography, and a single
blue **`#2a72de`** for the call to action. Controls are full pills.

What makes it worth reading:

- **Nature-toned palette in hex beside Tailwind.** Oura adds sandstone, cream, mustard, olive, brown
  and slate families on top of Tailwind v4's oklch palette.
- **One blue to act.** The only saturated colour on the measured page is the call-to-action blue.
- **A serif for headlines.** Editorial New carries the headings; Akkurat LL the rest.

### Primary tasks
- Learn about the ring and its health features; buy it.
- Explore Oura for organisations; manage the cart.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `ouraring.com/de`: 297 root custom properties — `--color-*` 74,
`--col-*` 54 and `--row-*` 24 (grid placement), `--text-*` 42, `--tw-*` 30, fonts, containers, radii.
Tailwind v4's stock values (the `oklch()` colours such as `--color-blue-500`, `--tw-*`, containers,
easings) are excluded; Oura's own colours are the hex families below.

### Action

- **Primary** (`#2a72de`) — `--color-blue-100`; the call to action.
- **Primary hover** (`#2056a6`) — `--color-blue-200`.
- **Focus** (`#3184ff`) — the 2px focus outline.

### Warm neutrals

- **Foreground** (`#000000`) — header controls and most text on light sections.
- **Sandstone ink** (`#4a4741`) — `--color-sandstone-500`; dark sections and secondary text.
- **Cream** (`#f7f1e8`) — `--color-cream-50`, `--color-sandstone-200`; the main ground.
- **Cream 100** (`#eee6dc`) · **Sandstone 100** (`#fefaef`) · **Sandstone 450** (`#e6ded3`).
- **Gray 450** (`#5a5958`) · **Gray 350** (`#a8a5a0`) · **Border** (`#ececec`, `--color-gray-200`) ·
  **Canvas** (`#ffffff`).

### Nature families

**Slate** `#27455c` (a rendered band) and `--color-slate-500` `#1b3449` · **Mustard** `#af751b` ·
**Olive** `#5c6f5d` · **Brown** `#715956` · **Red** `#d22c15`.

## 3. Typography Rules

### Font family

**Editorial New** (200, 300) for headings (`"Editorial New", serif`) and **Akkurat LL** (300, 400) for
body (`AkkuratLL, sans-serif`), all loaded (`document.fonts`).

### Scale

The call to action is 16px/700; header controls 16px/400.

## 4. Component Stylings

Measured after declining cookies (OneTrust), focus read under a real Tab key, and a hover counted
only when `:hover` matched; background-image, text-decoration and pseudo-elements were compared too.

- **Call to action** — Mehr erfahren: **`#2a72de`**, white 16px/700, full pill, 48px. Hover and press
  **`#2056a6`**. Focus: `outline: 2px solid #3184ff`.
- **Header pills** — Gesundheit, Jetzt kaufen, Die Vorteile von Oura: transparent, black 16px/400,
  48px. Hover changes nothing; focus draws the same 2px outline.

### Radius

Controls are full pills.

## 5. Layout Principles

- Cream sections alternating with deep sandstone and slate bands; product photography leads.
- A 24-column grid (`--col-start-*`, `--col-end-*` up to 24).

## 6. Depth & Elevation

Flat; overlays use a translucent dark scrim.

## 7. Do's and Don'ts

### Do
- Ground pages in cream `#f7f1e8` and sandstone `#4a4741`.
- Use blue `#2a72de` for the call to action, darkening to `#2056a6`.
- Pair an Editorial New serif headline with Akkurat LL body.

### Don't
- Don't count Tailwind's oklch palette as Oura's.
- Don't add more saturated colours; one blue acts.
- Don't square off controls.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#2a72de` blue · `#2056a6` blue hover · `#3184ff` focus · `#f7f1e8` cream · `#4a4741` sandstone ·
`#e6ded3` sand · `#27455c` slate · `#af751b` mustard · `#5c6f5d` olive

### Example Component Prompts
- "A 48px blue `#2a72de` pill, white 16px/700 Akkurat LL; hover `#2056a6`; focus a 2px `#3184ff`
  outline."
- "A cream `#f7f1e8` section with an Editorial New serif headline in sandstone `#4a4741`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Oura began in Oulu and describes itself through Finland — optimism, balance, craftsmanship — and the
site reflects that with warm, natural tones, an editorial serif and restraint in colour. It is now
moving its legal home to the United States while keeping product and engineering in Finland.

## 12. Principles

- **Natural and calm.** Cream, sand, olive and slate.
- **One colour acts.** Blue for the call to action.
- **Editorial type.** A serif headline, a precise sans.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: the blue pill to `#2056a6`; header pills do not change. Press: `#2056a6`. Focus: a 2px
`#3184ff` outline on all measured controls.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://ouraring.com/de (live homepage — 297 root custom properties read via `getComputedStyle`, Tailwind v4 defaults excluded; Editorial New and Akkurat LL loaded; two components measured at rest, hover, pressed and focus after declining cookies, captured 2026-09-26); https://ouraring.com/zz-this-does-not-exist (nonsense-path control — HTTP 404, read 2026-09-26); https://ouraring.com/about-us (Oura About Us — "Who we are starts with where we're from: Finland", read 2026-09-26); https://ouraring.com/impressum (Impressum — Oura Health Oy, Elektroniikkatie 10, 90590 Oulu, read 2026-09-26); https://ouraring.com/blog/oura-redomiciliation-news/ (A Note to the Oura Community on Our Legal Home — redomiciliation to the US; Finland remains the home base for engineering and product, read 2026-09-26)

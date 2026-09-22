---
id: deepseek
name: DeepSeek
country: CN
category: ai
homepage: "https://www.deepseek.com"
primary_color: "#4D6BFE"
logo:
  type: simpleicons
  slug: deepseek
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "DeepSeek web tokens (--ds-*)"
  url: "https://www.deepseek.com/"
  type: system
  description: "82 --ds-* custom properties resolving on the product surface: 37 semantic colour roles, 21 button tokens across four variants, a six-step radius scale, a thirteen-step spacing scale and three font-family tokens."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    brand: "#4d6bfe"
    brand-deep: "#3a65c2"
    brand-medium: "#4176e6"
    brand-light: "#73a3d2"
    hero-join: "#2e609f"
    foreground: "#1e232c"
    text-bluish: "#152443"
    text-placeholder: "#8691a1"
    text-link: "#234792"
    text-inverse: "#ffffff"
    static-black: "#0f0f0f"
    canvas: "#f9f8f8"
    overlay: "#ffffff"
    dark: "#1a1615"
    btn-primary-bg: "#1a1615"
    btn-ghost-text: "#121c31"
    on-brand: "#ffffff"
  typography:
    family: { sans: "DM Sans" }
    body: { size: 15, use: "Control and body text on the landing surface" }
    small: { size: 13, use: "Compact pill and label text" }
  spacing: { s1: 4, s2: 8, s3: 12, s4: 16, s5: 24, s6: 32, s7: 40, s8: 56, s9: 80, s10: 120, s11: 160, s12: 200, s13: 240 }
  rounded: { sm: 8, input: 10, media: 12, panel: 16, card: 24, pill: 100 }
  components:
    button-secondary: { type: "button", fg: "#1e232c", border: "1px solid rgba(9,45,78,.18)", radius: 100, font: "15px / 500", hover: "#092d4e", pressed: "#092d4e", use: "Secondary action — 44px liquid-glass pill on a 40% white fill; hover darkens the border. Focus is not declared: what renders is Chrome's own ring." }
    chip-brand: { type: "button", fg: "#4176e6", border: "1px solid rgba(65,118,230,.3)", radius: 18, font: "13px / 500", hover: "#4176e6", pressed: "#4176e6", use: "Brand-tinted announcement chip — 34px, on a 12% brand wash." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.deepseek.com/", inspected: "2026-09-22" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.deepseek.com/", captured: "2026-09-22" }
    - { id: platform-live, kind: product-surface, url: "https://platform.deepseek.com/", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-medium: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.hero-join: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-bluish: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-placeholder: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-link: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-inverse: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.static-black: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.overlay: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.btn-primary-bg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.btn-ghost-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.on-brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.input: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.media: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.panel: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.card: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s1: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s2: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s3: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s4: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s5: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s6: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s7: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s8: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s9: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s10: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s11: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s12: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s13: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-brand.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-brand.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-brand.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-brand.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-brand.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-brand.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-brand.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.chip-brand.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
---
# Design System Inspiration of DeepSeek (深度求索)

## 1. Visual Theme & Atmosphere

DeepSeek is the Hangzhou AI lab whose open-weight reasoning models reset expectations for
what a small team could ship. Its web presence is the opposite of the models' notoriety:
**quiet, pale and almost entirely white**, a `#f9f8f8` page with translucent glass panels
floating on it.

The interface is built out of **transparency rather than fill**. Surfaces are
`hsla(0,0%,100%,.3)` and `.45` — white at a stated alpha over the page, not opaque cards —
and borders are `rgba(0,0,0,.06)` through `.2`, a four-step ladder of black at low opacity.
There is a `--ds-blur-glass: 12px`. The whole chrome is frosted.

Against that, the brand blue `#4d6bfe` appears sparingly, and the **primary button is not
blue at all** — it is `#1a1615`, a warm near-black.

What makes this reference unusual for a Chinese brand in this catalog: DeepSeek publishes a
**genuine, complete token system** — 82 `--ds-*` properties covering colour, four button
variants, radius, spacing and typography — and, uniquely among the CN references measured so
far, **a declared font-family token**.

### Primary tasks
- Read model announcements and capability claims without interface noise.
- Reach the app, the API platform and the papers from one pale surface.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `deepseek.com`. **82 of 99 custom properties
are `--ds-*`**; the remaining 17 are Tailwind internals (`--tw-*`) and are not recorded.

### Brand

- **Brand** (`#4d6bfe`) — `--ds-color-brand`. The identity blue.
- **Brand Deep** (`#3a65c2`) — `--ds-color-brand-deep`.
- **Brand Medium** (`#4176e6`) — `--ds-color-brand-medium-reverse`; the value the measured
  chip actually paints.
- **Brand Light** (`#73a3d2`) — `--ds-color-brand-light-reverse`.
- **Hero Join** (`#2e609f`) — `--ds-color-bg-hero-join`.

### Text

- **Foreground** (`#1e232c`) — `--ds-color-text-primary`.
- **Text Bluish** (`#152443`) — `--ds-color-text-primary-bluish`. A second primary text
  colour with more blue in it, for surfaces that sit on the glass.
- **Text Placeholder** (`#8691a1`) · **Text Link** (`#234792`) — `--ds-color-text-link-blue`,
  a navy distinctly darker than the brand.
- **Text Inverse** (`#ffffff`) · **Static Black** (`#0f0f0f`) — `--ds-color-static-black`.
- Secondary and description text are **black at alpha** (`.7` and `.65`) rather than greys.

### Surface

- **Canvas** (`#f9f8f8`) — `--ds-color-bg-page`. Warm off-white, not pure.
- **Overlay** (`#ffffff`) — `--ds-color-bg-overlay`.
- **Dark** (`#1a1615`) — `--ds-color-bg-dark`, and the same value is `--ds-btn-primary-bg`.
- Five numbered surfaces (`surface-1`…`5`) plus `surface-raised`, all **translucent**:
  `hsla(0,0%,100%,.3)`, `.2`, `.45` over the page, or `rgba(0,0,0,.02–.05)` for recessed ones.
  A consumer that flattens these to hex loses the glass.

### Border ladder

`subtle` `.06` → `divider` `.08` → `default` `.1` → `strong` `.2`, all black at alpha, plus
`secondary` `rgba(9,45,78,.14)` which is a **navy**, not black — the border on glass panels
picks up the blue.

## 3. Typography Rules

### Font Family

**DeepSeek declares its typeface, and that is rare here.** `--ds-font-sans` and
`--ds-font-body` both resolve to `"DM Sans", system-ui, -apple-system, BlinkMacSystemFont`,
and `--ds-font-mono` to `"Fragment Mono", "Roboto Mono", ui-monospace, monospace`.

**DM Sans loads and Fragment Mono does not.** Re-audited 2026-09-22: the page declares six
`@font-face` entries — `DM Sans` at 400 and 500 (both loaded), `DM Sans` 700 and three
`Montserrat` weights (one loaded) — and **`Fragment Mono` is not among them.** It is named in
`--ds-font-mono` and falls through to `Roboto Mono` / `ui-monospace`.

So `tokens.typography.family` records **DM Sans only**. Fragment Mono is a declared,
unrendered face and stays here in prose, the same treatment CADDi's `Zalando Sans Expanded`
gets. Montserrat loads and is named in no `--ds-font-*` token, so it is not recorded either.

Every other CN reference in this catalog leaves `family` absent because the brand ships only a
system stack; DeepSeek is the exception, for one face rather than two.

### Scale

The landing surface is small: control text at **15px/500** on the large pills and **13px/500**
on the compact chip. No display step was observed — the page is short and text-light
(521 characters of body copy).

## 4. Component Stylings

Measured live, focus read **before** the mouse touched each control so the modality heuristic
did not suppress `:focus-visible`.

### Secondary pill — the main call to action

- Rest: `hsla(0,0%,100%,.4)` fill, `#1e232c` text, `1px solid rgba(9,45,78,.18)`,
  **100px radius**, 44px tall, 15px/500.
- Hover and pressed: border darkens to **`#092d4e`**.
- Focus: `:focus-visible` matches, and what paints is **`outline: rgb(0, 95, 204) auto 1px`
  — Chrome's own default ring, not DeepSeek's.** The `auto` style is the tell: an authored
  ring names a style and a width. A page with no author stylesheet at all paints exactly
  this value on a button, an anchor and an input, in both colour schemes. **No focus token
  is recorded**, because the brand declares none.

**Token and render agree.** `--ds-btn-secondary-bg` is `hsla(0,0%,100%,.4)` and
`--ds-btn-secondary-border` is `rgba(9,45,78,.18)` — exactly the measured rest state — while
`--ds-btn-secondary-hover-border` is `rgba(9,45,78,.36)`, which composites to the measured
`#092d4e`. Two independent readings of one contract.

### Brand chip

- Rest: `rgba(65,118,230,.12)` wash, `#4176e6` text, `1px solid rgba(65,118,230,.3)`,
  18px radius, 34px tall, 13px/500. Hover and pressed shift the brand value.

### Primary button

`--ds-btn-primary-bg` is `#1a1615` with `#fff` text and a transparent border, and
`--ds-btn-primary-hover-bg` is `hsla(0,0%,100%,.3)` — the primary **lightens** on hover
rather than darkening, because it is near-black to begin with.

**It is not declared as a component here.** The values above are token readings; no rendered
primary button appeared on the measured surface, so no state was observed, and a component
whose states nobody saw does not get declared. The tokens stand on their own.

### The four button variants, as published

`primary` · `secondary` · `ghost` · `ghost-static`, plus a `liquid` fill pair. Each carries
bg, border, text and hover values — 21 tokens in all. The ghost variants are transparent at
rest with `#121c31` text (`--ds-btn-ghost-text`) and `#0f0f0f` on the static form, hovering
to `rgba(0,0,0,.04)`. Only `secondary` was measured on a rendered control.

### Radius and spacing

Six radii: `sm` 8 · `input` 10 · `media` 12 · `panel` 16 · `card` 24 · `pill` 100.
Thirteen spacing steps: 4 · 8 · 12 · 16 · 24 · 32 · 40 · 56 · 80 · 120 · 160 · 200 · 240 —
tight at the bottom, then jumping hard for page-level rhythm.

## 5. Layout Principles

- **Glass over fill.** Surfaces are white at alpha with a 12px blur, not opaque panels.
- **Borders carry the hierarchy**, at four opacities of black plus one navy.
- **Spacing is bimodal** — a 4–40px component range and an 80–240px page range, with little
  in between.

## 6. Depth & Elevation

One shadow token: `--ds-shadow-card`, a layered
`0 0 0 1px #f1f5f9, 0 2px 4px rgba(0,0,0,.05), 0 12px …` — a hairline ring plus two soft
drops. With `--ds-blur-glass: 12px`, depth here is glass and hairline, not drop shadow.

## 7. Do's and Don'ts

### Do
- Keep surfaces translucent; the alpha is the design.
- Use `#1a1615` for the primary action — the brand blue is an accent, not the button.
- Take borders from the four-step black-alpha ladder rather than picking a grey.
- Set DM Sans; it is declared, not inferred.

### Don't
- Don't flatten `hsla(0,0%,100%,.3)` surfaces to opaque hex — the glass disappears.
- Don't use `#4d6bfe` as a fill for large areas; it appears as accent and chip text.
- Don't read `--tw-*` as DeepSeek's; 17 of the 99 properties are Tailwind internals.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#4d6bfe` brand · `#1a1615` primary button · `#1e232c` text · `#f9f8f8` page ·
`#8691a1` placeholder · `#234792` link · borders black at .06/.08/.1/.2

### Example Component Prompts
- "A 44px liquid-glass pill: 40% white fill over `#f9f8f8`, `rgba(9,45,78,.18)` border,
  `#1e232c` 15px/500 label, border to `#092d4e` on hover. Supply your own focus ring —
  DeepSeek leaves the browser's."

## 10. Voice & Tone

Spare and technical. The site states what the models do and links to the papers; there is
almost no marketing copy to measure — 521 characters on the entire landing surface.

## 11. Brand Narrative

DeepSeek was founded in Hangzhou in 2023, backed by the quantitative fund High-Flyer, and
released open-weight models whose training-cost claims reframed the economics of frontier AI
through 2025 and 2026. The visual identity matches the posture: a pale, quiet, almost
unbranded surface that puts the model names and the papers in front, and spends its one
strong colour sparingly.

## 12. Principles

- **Transparency over fill.** Glass surfaces, alpha borders, a blur token.
- **The accent is not the action.** Brand blue marks; near-black acts.
- **Publish the system.** Four button variants and thirteen spacing steps, all named.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

The secondary pill carries hover and pressed. **Focus is deliberately not recorded.** It was
first read as a `#005fcc` ring and written up as a brand value; re-measured against a control
page carrying no author stylesheet, `rgb(0, 95, 204) auto 1px` turned out to be **Chrome's
default `:focus-visible` outline**, painted identically on a bare button, anchor and input in
both colour schemes. DeepSeek declares no focus style, so none is claimed. The brand chip
carries hover and pressed. The other three button variants are declared in the token set and
were not observed rendering.

## 15. Motion & Easing

**Not measured.** No transition or duration token appears among the 82 `--ds-*` properties.

---

**Tier 1 sources:** https://www.deepseek.com/ (live product surface — 99 custom properties of which 82 are `--ds-*`, read via `getComputedStyle`; the secondary pill and brand chip measured with hover, pressed and focus, 2026-09-22); https://platform.deepseek.com/ (DeepSeek's API platform — a second brand-owned regional surface confirming ownership; not cited for product tokens)

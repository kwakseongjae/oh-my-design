---
id: wise
name: Wise
country: UK
category: fintech
homepage: "https://wise.com"
primary_color: "#9fe870"
logo:
  type: simpleicons
  slug: wise
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Wise Design
  url: "https://wise.design"
  type: system
  description: Wise's public design system for product, editorial, and brand guidance.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://wise.com/", inspected: "2026-07-13" }
    - { id: business-pricing, kind: public-pricing, url: "https://wise.com/gb/pricing/business", inspected: "2026-07-13" }
    - { id: kr-pricing, kind: public-pricing, url: "https://wise.com/kr/pricing/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://wise.com/", captured: "2026-07-13" }
    - { id: business-pricing-live, kind: product-surface, url: "https://wise.com/gb/pricing/business", captured: "2026-07-13" }
    - { id: kr-pricing-live, kind: product-surface, url: "https://wise.com/kr/pricing/", captured: "2026-07-13" }
    - { id: wise-typography, kind: official-doc, url: "https://wise.design/foundations/typography", captured: "2026-07-13" }
    - { id: wise-components, kind: official-doc, url: "https://docs.wise.design/components", captured: "2026-07-13" }
    - { id: inter-license, kind: license, url: "https://github.com/rsms/inter/blob/master/LICENSE.txt", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.forest-ink": *live
    "tokens.colors.obsidian": *live
    "tokens.colors.charcoal": *live
    "tokens.colors.fog": *live
    "tokens.colors.paper": *live
    "tokens.colors.pebble": *live
    "tokens.typography.family.ui": &fonts { surface_id: home, source_id: home-live, method: computed-style-fontfaceset-and-source-url, captured: "2026-07-13" }
    "tokens.typography.family.display": *fonts
    "tokens.typography.display.size": *fonts
    "tokens.typography.display.weight": *fonts
    "tokens.typography.display.lineHeight": *fonts
    "tokens.typography.display.use": *fonts
    "tokens.typography.body.size": *fonts
    "tokens.typography.body.weight": *fonts
    "tokens.typography.body.lineHeight": *fonts
    "tokens.typography.body.tracking": *fonts
    "tokens.typography.body.use": *fonts
    "tokens.typography.button.size": *fonts
    "tokens.typography.button.weight": *fonts
    "tokens.typography.button.lineHeight": *fonts
    "tokens.typography.button.tracking": *fonts
    "tokens.typography.button.use": *fonts
    "tokens.spacing.xs": *live
    "tokens.spacing.sm": *live
    "tokens.spacing.md": *live
    "tokens.spacing.lg": *live
    "tokens.spacing.xl": *live
    "tokens.spacing.xxl": *live
    "tokens.rounded.input": *live
    "tokens.rounded.chip": *live
    "tokens.rounded.nav": *live
    "tokens.rounded.pill": *live
    "tokens.components.selection-chip.type": &chip { surface_id: home, source_id: home-live, method: computed-style-and-observed-state, captured: "2026-07-13" }
    "tokens.components.selection-chip.bg": *chip
    "tokens.components.selection-chip.fg": *chip
    "tokens.components.selection-chip.radius": *chip
    "tokens.components.selection-chip.height": *chip
    "tokens.components.selection-chip.padding": *chip
    "tokens.components.selection-chip.states": *chip
    "tokens.components.selection-chip.use": *chip
    "tokens.components.dialog-field.type": &dialog_field { surface_id: home, source_id: home-live, method: computed-style-and-observed-state, captured: "2026-07-13" }
    "tokens.components.dialog-field.fg": *dialog_field
    "tokens.components.dialog-field.radius": *dialog_field
    "tokens.components.dialog-field.height": *dialog_field
    "tokens.components.dialog-field.padding": *dialog_field
    "tokens.components.dialog-field.states": *dialog_field
    "tokens.components.dialog-field.use": *dialog_field
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Machine tokens are limited to the supplied public live capture; Wise Design documentation provides context, not unobserved component values."
  components_harvested: false
  colors:
    primary: "#9fe870"
    forest-ink: "#163300"
    obsidian: "#0e0f0c"
    charcoal: "#454745"
    fog: "#e8ebe6"
    paper: "#ffffff"
    pebble: "#868685"
  typography:
    family: { ui: "Inter", display: "Wise Sans" }
    display: { size: 105.428, weight: 900, lineHeight: 89.6142, use: "Observed home display headline" }
    body: { size: 18, weight: 400, lineHeight: 26, tracking: -0.108, use: "Observed public pricing list copy" }
    button: { size: 16, weight: 600, lineHeight: 24, tracking: -0.176, use: "Observed public primary CTA" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 }
  rounded: { input: 10, chip: 16, nav: 18.7693, pill: 9999 }
  components:
    selection-chip: { type: toggle, bg: "#9fe870", fg: "#163300", radius: 16, height: 32, padding: "0px 16px", states: "checked, unchecked", use: "Home selection chip; both states observed" }
    dialog-field: { type: input, fg: "#0e0f0c", radius: 10, height: 48, padding: "0px 16px 0px 48px", states: "dialog-open", use: "Field in captured home dialog" }
---

# Design System Inspiration of Wise

## 1. Visual Theme & Atmosphere

Wise builds an international account for people and businesses that send, spend, receive, and hold money across borders. Its public web presentation makes that practical offer feel unmistakably unlike a conventional bank: a forest-green and electric-lime contrast, wide areas of paper white, and short, oversized Wise Sans headlines. Wise’s own 2021 name change broadened the story from transfers to multi-currency lives, while its later help guidance says the greener look, lettering, and globally inspired icons were introduced to better reflect the products and the people using them. The supplied July 2026 capture confirms the palette and type are not merely campaign language: the three public home/pricing surfaces repeatedly render Inter for functional UI and load Wise Sans for display moments.

- **Lime punctuation:** `#9fe870` is the repeated live primary-action fill, paired with `#163300` text.
- **Forest rhythm:** `#163300`, paper white, and `#e8ebe6` make the captured public pages feel warm rather than corporate-blue.
- **Expressive restraint:** Wise Design reserves Wise Sans for short, high-impact moments and says to default to Inter for most product communication.

## 2. Color Palette & Roles

### Observed public-surface roles

- **Lime action** (`#9fe870`): primary CTA fill on home and both public pricing surfaces.
- **Forest ink** (`#163300`): recurring text, border, dark-action fill, and CTA text.
- **Obsidian** (`#0e0f0c`): high-contrast text and borders in the supplied public capture.
- **Charcoal** (`#454745`): repeated secondary copy and border value.
- **Fog** (`#e8ebe6`): repeated light surface/border value on home and business pricing.
- **Paper** (`#ffffff`): observed public canvas and dialog surface.
- **Pebble** (`#868685`): observed home input/chip border; this is a lower-frequency public value, not a universal semantic claim.

No unobserved status palette or broad authenticated-product color scale is asserted here.

## 3. Typography Rules

### Evidence classes

- **Official product-use:** Wise Design says to use Inter for most communication and Wise Sans for short, expressive headlines; its product guidance specifically allows Wise Sans for success, progress, and feature-intro moments.
- **Live computed public-surface use:** the supplied collector records `Inter` as loaded/high confidence with 1,502 visible uses across home and pricing, backed by seven Wise-hosted WOFF2 sources. `Wise Sans` is loaded/high confidence with 24 visible uses and two Wise-hosted WOFF2 sources. These are the only two family tokens promoted here.
- **Official distributed-font licence:** Inter’s upstream project is licensed under SIL OFL 1.1. That licence applies to Inter, not to Wise Sans.
- **Declared-only:** `Averta`, `VideoJS`, and `Wise Sans JP` have declared font-face sources in the bundle but zero visible use in the captured surfaces. They are not UI tokens or specimen substitutes.
- **Unresolved:** no public licence source for Wise Sans was found in this pass. Its live metadata and official Wise Design usage guidance remain useful, but redistribution rights are not asserted.

### Measured public hierarchy

| Role | Family | Size | Weight | Line height | Tracking | Provenance |
|---|---|---:|---:|---:|---:|---|
| Display headline | Wise Sans | 105.428px | 900 | 89.6142px | normal | `home::h1` |
| Display heading | Wise Sans | 89.1428px | 900 | 75.7714px | normal | `home::h2` |
| Public CTA | Inter | 16px | 600 | 24px | -0.176px | `home::[data-omd-capture="35"]` |
| Public body/list | Inter | 18px | 400 | 26px | -0.108px | `surface-2::li` |

## 4. Component Stylings

All variants below are observations from the supplied public home/pricing capture, not a complete Wise product-component contract. Selector, surface, and observed-state provenance are retained; no hover, pressed, focus, animation, or unobserved size variant is inferred.

### Public actions

**Lime primary CTA**
- Background: `#9fe870`
- Text: `#163300`
- Border: `1px solid #9fe870`
- Radius: `9999px`
- Padding: `11px 24px`
- Height: `48px`
- Font: `16px / 600 / Inter`
- Use: home marketing CTA; `home::[data-omd-capture="35"]`, also repeated on `surface-3`

**Forest inverted CTA**
- Background: `#163300`
- Text: `#9fe870`
- Border: `1px solid #163300`
- Radius: `9999px`
- Padding: `11px 24px`
- Height: `48px`
- Font: `16px / 600 / Inter`
- Use: home marketing CTA on a dark surface; `home::[data-omd-capture="40"]`

### Public navigation

**Secondary navigation control**
- Text: `#163300`
- Border: `0px solid #163300`
- Radius: `18.7693px`
- Padding: `8px 12px`
- Height: `40px`
- Font: `18px / 600 / Inter`
- Use: public navigation; `home::[data-omd-capture="5"]`, also present on `surface-3`

### Selection and dialog

**Selection chip**
- Background: `#9fe870`
- Text: `#163300`
- Border: `1px solid #9fe870`
- Radius: `16px`
- Padding: `0px 16px`
- Height: `32px`
- Font: `18px / 600 / Inter`
- Checked: `home::[data-omd-capture="79"]`
- Unchecked: transparent background with `#868685` 1px border at `home::[data-omd-capture="80"]`
- Use: home selection chip; checked and unchecked states were both captured

**Dialog field**
- Text: `#0e0f0c`
- Radius: `10px`
- Padding: `0px 16px 0px 48px`
- Height: `48px`
- Font: `16px / 400 / Inter`
- Dialog-open: `home::[data-omd-interaction-capture="dialog-0-3"]`; inset shadow `rgb(52, 74, 36) 0px 0px 0px 2.45557px`
- Use: field inside the captured home dialog

## 5. Layout Principles

### Observed spacing scale

The public capture repeatedly uses 4, 8, 12, 16, 24, and 32px values. Wise Design’s published spacing foundation lists the same values as foundational tokens and extends the scale beyond the captured component set. This reference keeps only the overlap as machine tokens.

### Observed shape scale

- **Input/dialog control:** `10px`
- **Selection chip:** `16px`
- **Public navigation control:** `18.7693px` computed radius
- **Public CTA:** `9999px` pill

## 6. Depth & Elevation

The supplied capture does not establish a universal card-elevation scale. The observed home dialog uses `rgba(69, 71, 69, 0.2) 0px 0px 40px 0px`; the dialog field exposes an inset focus-like shadow in its dialog-open snapshot. Keep those values local to those components rather than treating them as a global shadow system.

## 7. Do's and Don'ts

### Do

- Default to Inter for functional UI and longer communication; this is Wise Design’s stated default.
- Reserve Wise Sans for short, expressive display moments.
- Pair the observed lime primary action with forest-green text on the captured public-web pattern.
- Preserve the captured pill geometry for a public CTA only when that specific marketing pattern is intended.

### Don't

- Don’t use Wise Sans for long or serious text; Wise Design directs those cases to the cleaner face.
- Don’t promote declared-only Averta or Wise Sans JP to visible UI typography.
- Don’t copy the public marketing CTA, dialog, or chip measurements into authenticated-product or documentation surfaces without separate evidence.
- Don’t infer hover, pressed, focus, motion, error, or loading variants from this capture.

## 8. Responsive Behavior

The supplied evidence is desktop-only (`1440x900`) for home, business pricing, and Korean pricing. No breakpoint, mobile layout, or responsive component change is claimed.

## 9. Agent Prompt Guide

### Evidence-safe prompt

- “Create a public Wise-inspired marketing action using the observed lime `#9fe870` fill, forest `#163300` text, 9999px radius, 11px 24px padding, 48px height, and 16px/600 Inter. Do not assume this is an authenticated-product button.”
- “Use Inter for body/UI and reserve Wise Sans for a short display headline; do not substitute a system font for a declared-only family.”
- “For a home selection chip, use the observed checked and unchecked values only; no transition, hover, or error behavior is specified.”

## 10. Voice & Tone

Wise’s first-party rebrand account frames the service around making money work without borders and speaks directly to people and businesses with multi-currency lives. The current public messaging is concise and capability-led rather than decorative.

| Context | Supported voice evidence |
|---|---|
| Mission | “Money without borders” — Wise’s rebrand account |
| Product scope | “Sending, spending, and receiving money internationally” — Wise’s rebrand account |
| CTA register | “Open an account” — captured public home CTA context |

No fictional error copy, prohibited-language list, or broad documentation tone is asserted.

## 11. Brand Narrative

Wise’s February 2021 first-party rebrand account says the company changed its name from TransferWise to Wise as the service had grown beyond transfers. It describes the job as making money move across borders more instantly, transparently, conveniently, and eventually for free, for people and businesses managing money internationally.

The later first-party help update connects the greener look, new logo, lettering, and people-and-place-inspired icons to the products Wise is building and the people it serves. That explains the visible contrast between the practical Inter-led UI and moments where Wise Sans is allowed to add a more expressive voice.

## 12. Principles

1. **Money across borders, not a single transfer.** *UI implication:* describe sending, spending, receiving, and holding as a coherent international-money task when the product context supports it.
2. **Clarity for functional communication.** *UI implication:* default to Inter for readable UI and long-form information.
3. **Expression is a deliberate accent.** *UI implication:* use Wise Sans for short key moments, not as a universal UI family.

## 13. Personas

*These are verified stakeholder groups, not invented individual personas.*

- **People with international lives:** Wise’s rebrand account names people who live, work, travel, or support family around the world.
- **Businesses managing money across borders:** Wise explicitly frames the expanded service around both people and businesses.

## 14. States

Only the following UI states were captured on the public home surface:

| State | Observed component | Provenance |
|---|---|---|
| Dialog open | Popover dialog and field | two captured home dialog interactions |
| Selected | Selection option | `home::[data-omd-interaction-capture="dialog-0-7"]` |
| Checked | Selection chip | `home::[data-omd-capture="79"]` |
| Unchecked | Selection chip | `home::[data-omd-capture="80"]` |
| Disabled | Circular control | `home::[data-omd-capture="65"]` |

No public evidence in this pass establishes loading, empty, success, or error treatment.

## 15. Motion & Easing

The collector expanded two dialogs but did not capture a transition duration, easing value, hover behavior, or pressed behavior. No motion token is supplied.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://wise.com/ · https://wise.com/gb/pricing/business · https://wise.com/kr/pricing/ · https://wise.design/foundations/typography · https://docs.wise.design/components · https://wise.com/us/blog/world-meet-wise · https://wise.com/help/articles/0pZf4t8FdGwauVsQGiHqD/why-does-wise-look-different
**Tier 2 sources:** https://getdesign.md/wise · https://styles.refero.design/style/367c0c6e-73a7-441c-a8ff-91d139ac60dc
**Conflicts unresolved:** none

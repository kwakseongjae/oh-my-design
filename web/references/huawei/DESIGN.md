---
name: Huawei
colors:
  brand: '#c7000b'
  brand-hover: '#e02128'
  brand-active: '#850f12'
  foreground: '#191919'
  text: '#333333'
  text-secondary: '#666666'
  text-muted: '#808080'
  text-placeholder: '#aeaeae'
  text-inverse: '#ffffff'
  canvas: '#ffffff'
  surface: '#f3f3f3'
  surface-alt: '#f7f7f7'
  separator: '#dfdfdf'
  separator-subtle: '#f3f3f3'
  border-hover: '#191919'
  border-disabled: '#c9c9c9'
  yellow: '#fcc800'
  rose: '#e61866'
  pink: '#d41dbc'
  mint: '#36c18d'
  cyan: '#2cb8c9'
typography:
  h13:
    fontSize: 60px
    use: Largest headline step
  h12:
    fontSize: 56px
    use: Display headline
  h11:
    fontSize: 48px
    use: Hero headline
  h10:
    fontSize: 40px
    use: Section headline
  h9:
    fontSize: 36px
    use: Sub-section headline
  h8:
    fontSize: 32px
    use: Large heading
  h7:
    fontSize: 28px
    use: Heading
  h6:
    fontSize: 24px
    use: Small heading
  h5:
    fontSize: 20px
    use: Lead
  h4:
    fontSize: 18px
    use: Sub-lead
  h3:
    fontSize: 16px
    use: Base
  h2:
    fontSize: 14px
    use: Caption
  h1:
    fontSize: 12px
    use: Smallest headline step
rounded:
  sm: 6px
  md: 16px
  full: 9999px
omitted:
  - section: spacing
    reason: No verified values in current evidence.
  - section: components
    reason: No verified values in current evidence.
---

# Design System Inspiration of Huawei (华为)

## Overview

### Visual Theme & Atmosphere

Huawei's corporate web presence is **restrained to the point of austerity**, and the restraint
is the design. Body text runs at **17px** — unusually large — in Microsoft YaHei on white, and
of roughly two thousand sampled elements **788 render at that one size**. There is no
decorative colour anywhere in the chrome. The page is black text, grey rules and white space.

Then, 68 times, **Huawei Red** (`#c7000b`). That is the whole visual strategy: an almost
monochrome corporate surface with a single saturated red doing every job that colour does.

Underneath sits something more considered than the page suggests. Huawei resolves **339
`--hwp-*` custom properties** — semantic roles (`hwp-color-brand`, `hwp-color-fill-hover`,
`hwp-color-border-separator`), primitive hue ramps in seven families, and a **thirteen-step
headline scale**. The corporate site uses a fraction of it.

#### Primary tasks
- Read long-form corporate, investor and product copy at a comfortable size.
- Distinguish the one actionable element on a page that is otherwise monochrome.
- Move between business lines (enterprise, carrier, consumer) that do **not** share chrome.

### Brand Narrative

Founded in Shenzhen in 1987 and employee-owned through a union holding structure, Huawei grew
from telecom-equipment supplier to one of the world's largest technology companies across
carrier, enterprise and consumer lines. The corporate surface measured here reflects the first
two: restrained, text-dense, addressed to institutions rather than shoppers. The consumer
business runs on a different surface with a different typeface and almost no shared tokens —
a split this reference records rather than smooths over.

### Principles

- **Monochrome plus one.** A single red carries every signal the chrome needs.
- **Read comfortably.** 17px body is a deliberate accessibility posture for long copy.
- **Publish more than you paint.** The system is far larger than the front page uses.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured 2026-09-22 via `getComputedStyle` on `huawei.com/cn`. Huawei's token name follows
each role.

### Brand

- **Huawei Red** (`#c7000b`) — `hwp-color-brand`, and the same value is `hwp-color-red-60`
  and `hwp-color-tag-error-text`. Painted 68 times on the home page.
- **Brand Hover** (`#e02128`) — `hwp-color-brand-hover`.
- **Brand Active** (`#850f12`) — `hwp-color-brand-active`, also `hwp-color-red-70`.

A declared three-step interaction contract. **No component was observed using it** — see §4.

### Text and surface

- **Foreground** (`#191919`) — `hwp-color-radiogp-text`; also the base of `hwp-color-bg-mask`
  (`#1919194d`) and `hwp-color-fill-hover` (`#1919190d`), so the same ink drives masks and
  hover washes at 30% and 5% alpha.
- **Text** (`#333333`) — the most painted colour on the page, 920 of ~2,000 elements.
- **Text Secondary** (`#666666`) · **Text Muted** (`#808080`) ·
  **Text Placeholder** (`#aeaeae`) — `hwp-color-text-placeholder`.
- **Text Inverse** (`#ffffff`) — `hwp-color-text-inverse`.
- **Canvas** (`#ffffff`) — `hwp-color-bg-1` and `bg-3`. **Surface** (`#f3f3f3`) —
  `hwp-color-bg-2`, which is also `hwp-color-border-separator-subtle`.
- **Surface Alt** (`#f7f7f7`) — rendered 13 times; not a declared token.
- **Separator** (`#dfdfdf`) — `hwp-color-border-separator`.
  **Border Hover** (`#191919`) — `hwp-color-border-hover`.
  **Border Disabled** (`#c9c9c9`) — `hwp-color-border-disabled`.

### Primitive hue ramps, mostly unused

The system publishes seven hue families the corporate site never paints: yellow
(`#fcc800`), rose (`#e61866`), pink (`#d41dbc`), mint (`#36c18d`), cyan (`#2cb8c9`), plus
orange and a deep rose. One step of each is recorded here as evidence the ramps exist. **They
are not corporate-surface colours**, and a generator should not reach for them to decorate a
Huawei page.

## Typography

### Font Family

`huawei.com/cn` computes **Microsoft YaHei** — the Windows Simplified-Chinese system face.
`consumer.huawei.com` computes **Manrope**. Neither is a licensed Huawei brand typeface on
these surfaces, so `tokens.typography.family` is **absent** rather than filled.

### The thirteen-step headline scale

`hwp-font-headline-1` through `-13`, each with its own size, weight and line-height:

```
h1 12  h2 14  h3 16  h4 18  h5 20  h6 24  h7 28
h8 32  h9 36  h10 40  h11 48  h12 56  h13 60
```

A parallel t-shirt scale names the same values: `2xs` 11, `sm` 14, `base` 16, `md` 18,
`lg` 20, `2xl` 24, `4xl` 28, `6xl` 32, `10xl` 40, `16xl` 60. Weights include
`hwp-font-weight-semibold` 600.

**The corporate page uses almost none of it.** Its rendered distribution is 17px×788, then
15.64, 15.3, 14.875 and 13.81 — **fractional sizes produced by a root-relative scale**, not
steps from the token scale. A thirteen-step system is published; the front page is on a
different footing entirely.

## Layout

- **17px body.** Unusually large, and consistent — 788 of ~2,000 elements.
- **16px radius dominates** (23 occurrences), with 6px second (8) and `hwp-radius-full`
  (`9999px`) published for pills.
- **Rules, not shadows.** `#dfdfdf` separators and `#f3f3f3` subtle ones do the dividing.

### Responsive Behavior

**Not measured.** Desktop 1440×900 only.

## Elevation & Depth

**Not measured.** No shadow or elevation token appears among the 339 `--hwp-*` properties.
`hwp-color-bg-mask` (`#1919194d`) exists for overlays, which is a scrim, not an elevation scale.

## Motion & Easing

**Not measured.** No transition or duration token appears among the 339 `--hwp-*` properties.

---

**Tier 1 sources:** https://www.huawei.com/cn/ (live corporate surface — 344 custom properties of which 339 are `--hwp-*`, Huawei's own web design system: semantic colour roles, primitive hue ramps and a thirteen-step headline scale, read via `getComputedStyle` 2026-09-22); https://consumer.huawei.com/cn/ (Huawei's consumer business surface — a second brand-owned regional source, and the evidence that the two surfaces do **not** share a system, see the verification notes)

## Components

**No component is declared, and that is the honest result.**

Both measured controls on `consumer.huawei.com` are plain black `#000000` anchors, 32px tall
at 4px radius, and **neither changes on hover, press or focus**. The corporate home's
interactive elements are 118px content cards that also do not react. Huawei declares a
brand-hover and brand-active token pair (§2) and this capture **found nothing rendering them**.

Declaring a component whose states were never observed is the failure this catalog exists to
prevent, so none is declared. The tokens stand; the components wait for a surface that shows them.

### States

**None observed.** `hwp-color-brand-hover` and `hwp-color-brand-active` are declared tokens,
but no rendered control on either measured surface changed on hover, press or focus. The token
pair is recorded as a colour claim; no component state is claimed.

## Do's and Don'ts

### Do
- Keep the surface monochrome and spend `#c7000b` sparingly — its scarcity is the identity.
- Set body at 17px; Huawei's corporate reading size is larger than most.
- Divide with `#dfdfdf` rules rather than shadow.

### Don't
- Don't decorate with the yellow, rose, pink, mint or cyan ramps. They are published
  primitives, not corporate-surface colours.
- Don't assume the consumer site shares this system — it resolves **4** custom properties and
  a different typeface (§3).
- Don't promote Microsoft YaHei to a brand face; it is the Windows CJK system font.

## Voice & Tone

Corporate and declarative. Huawei's chrome states business lines plainly and does not
persuade in the interface.

## Agent Prompt Guide

### Quick Color Reference
`#c7000b` brand · `#e02128` brand hover · `#850f12` brand active · `#191919` foreground ·
`#333333` text · `#808080` muted · `#f3f3f3` surface · `#dfdfdf` separator

### Example Component Prompts
- "A monochrome corporate section: 17px `#333333` body on white, `#dfdfdf` rules, one
  `#c7000b` link, 16px radius on any card."

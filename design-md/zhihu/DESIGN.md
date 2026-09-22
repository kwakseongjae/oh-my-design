---
id: zhihu
name: Zhihu
country: CN
category: consumer-tech
homepage: "https://www.zhihu.com"
primary_color: "#1772F6"
logo:
  type: simpleicons
  slug: zhihu
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "Zhihu Map tokens"
  url: "https://www.zhihu.com/"
  type: system
  description: "Zhihu's web token set — Map* semantic roles published in explicit _light and _dark pairs, abbreviated primitive ramps (BL/YL/RD/BK/EB), and separate VIP and SVIP membership brand colours."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    brand: "#1772f6"
    brand-alt: "#18afff"
    foreground: "#191b1f"
    text-secondary: "#373a40"
    text-muted: "#8491a5"
    text-placeholder: "#81858f"
    ui-frame: "#535861"
    canvas: "#ffffff"
    page: "#f4f6f9"
    surface: "#fbfcfc"
    surface-alt: "#f8f8fa"
    commerce: "#ff7d55"
    vip: "#ce994f"
    vip-frame: "#f2ba6b"
    svip: "#142457"
    success: "#11a668"
    accent-purple: "#5a4df8"
    blue-light: "#80c1ff"
    neutral-mid: "#646464"
    neutral-line: "#d3d3d3"
    dark-text: "#c2c6cf"
    on-brand: "#ffffff"
  typography:
    base: { size: 15, use: "Dominant reading size on the home feed" }
    body: { size: 16, use: "Column and article body" }
    control: { size: 14, use: "Control and secondary label text" }
    caption: { size: 12, use: "Metadata and counts" }
    lead: { size: 18, use: "Column lead" }
    micro: { size: 11, use: "Smallest observed step" }
  rounded: { sm: 3, md: 6, pill: 20, circle: 9999 }
  components:
    button-primary: { type: "button", bg: "#1772f6", fg: "#ffffff", radius: 3, font: "14px / 400", hover: "oklch(0.535218 0.21381 259.318)", pressed: "oklch(0.535218 0.21381 259.318)", use: "Sign-in / register — 36px on the home feed, 34px in columns." }
    button-secondary: { type: "button", bg: "#ffffff", fg: "#8491a5", radius: 20, font: "14px / 400", hover: "color(srgb 0.870588 0.876471 0.889412)", pressed: "color(srgb 0.870588 0.876471 0.889412)", use: "Rounded utility control, 60px — hover shifts both fill and label." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.zhihu.com/", inspected: "2026-09-22" }
    - { id: column, kind: product-surface, url: "https://zhuanlan.zhihu.com/", inspected: "2026-09-22" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.zhihu.com/", captured: "2026-09-22" }
    - { id: column-live, kind: product-surface, url: "https://zhuanlan.zhihu.com/", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-alt: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.text-placeholder: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.ui-frame: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.page: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface-alt: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.commerce: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.vip: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.vip-frame: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.svip: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.accent-purple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.blue-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.neutral-mid: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.neutral-line: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.dark-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.on-brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.control.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.control.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.micro.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.micro.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.circle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
---
# Design System Inspiration of Zhihu (知乎)

## 1. Visual Theme & Atmosphere

Zhihu is China's question-and-answer platform — founded 2011, opened to the public in 2013,
and for a decade the place where long, sourced, argued answers get written. Its interface is
built for **reading prose**, not for scanning cards, and that shows in every measurement.

Body runs at **15px** on a cool `#f4f6f9` wash with white article surfaces, in the platform
system face. Text is `#191b1f` — a near-black with a faint blue cast rather than a warm one.
The chrome is restrained to the point of near-invisibility, with `#1772f6` as the one
interactive blue.

What the token set reveals that the page does not: Zhihu publishes its semantic roles in
**explicit `_light` and `_dark` pairs** (`MapText02A_light` / `MapText02A_dark`), and it
carries **separate brand colours for VIP and SVIP membership tiers** — a gold `#ce994f` and a
deep navy `#142457`. Paid membership is a first-class visual concept here, with its own
identity, not a badge bolted onto the standard palette.

### Primary tasks
- Read a long answer without interface competing for attention.
- Distinguish answer, column and commercial surfaces that share one chrome.
- Recognise membership tiers, which carry their own colour identity.

## 2. Color Palette & Roles

Measured 2026-09-22 via `getComputedStyle` on `zhihu.com` (389 custom properties) and
`zhuanlan.zhihu.com`. Zhihu's token name follows each role.

### Naming scheme

Two layers with an unusual convention:

- **`Map*` semantic roles**, most published three times — bare, `_light` and `_dark`.
  `MapText02A` is `#191b1f`, `MapText02A_light` is `#191b1f`, and `MapText02A_dark` is `#fff`.
  The theme pair is in the token name rather than behind a media query.
- **Abbreviated primitive ramps** — `BL04` `#80c1ff` (blue), `YL10` `#ce994f` (yellow),
  `RD11` `#b63b05` (red), `BK04` `#646464` and `BK08` `#d3d3d3` (black), `EB05` `#3a2b0d`,
  `GYL02A` `#a5542f`. Two letters and a step number, no semantic meaning in the name.

### Brand

- **Zhihu Blue** (`#1772f6`) — the primary action; rendered on the sign-in button on both
  measured surfaces.
- **Brand Alt** (`#18afff`) — `MapBrandAlt_light`. A lighter, more saturated blue.

### Text

- **Foreground** (`#191b1f`) — `MapText02A` / `MapText02A_light`; the dark-theme counterpart
  `MapText02A_dark` is `#fff`. Painted 91 times on the home feed.
- **Text Secondary** (`#373a40`) — `MapText03A_light`.
- **Text Muted** (`#8491a5`) — the secondary control label, painted 26 times.
- **Text Placeholder** (`#81858f`).
- **Dark Text** (`#c2c6cf`) — `MapText04A_dark`, recorded as evidence the dark theme is
  published; **this reference does not otherwise claim dark-theme values.**
- **UI Frame** (`#535861`) — `MapUIFrame03C`.

### Surface

- **Canvas** (`#ffffff`) · **Page** (`#f4f6f9`), the home wash · **Surface** (`#fbfcfc`), the
  column wash · **Surface Alt** (`#f8f8fa`).
- **Neutral Mid** (`#646464`) — `BK04`. **Neutral Line** (`#d3d3d3`) — `BK08`.

### Membership and commerce

- **VIP** (`#ce994f`) — `MapVIPBrand_light`, also the primitive `YL10`. A muted gold.
- **VIP Frame** (`#f2ba6b`) — `MapVIPUIFrameAlt_light`.
- **SVIP** (`#142457`) — `MapSVIPBrandAlt_light`. A deep navy for the higher tier.
- **Commerce** (`#ff7d55`) — `MapCommerceAlt`. Coral, for commercial placements.

Four colours that exist only to mark *what you have paid for and what is being sold to you*.

### Status and accent

- **Success** (`#11a668`) · **Accent Purple** (`#5a4df8`) · **Blue Light** (`#80c1ff`) — `BL04`.

## 3. Typography Rules

### Font Family

Both surfaces compute the platform system stack (`-apple-system` first). Zhihu publishes **no
font-family token** among its 389 properties, so `tokens.typography.family` is **absent**: a
platform system face is not promoted to a brand typeface.

### Scale

| Role | Size | Where |
|---|---|---|
| Base | 15px | Home feed body — the dominant size there |
| Body | 16px | Column and article body, 196 of the column's elements |
| Control | 14px | Buttons and secondary labels |
| Caption | 12px | Metadata |
| Lead | 18px | Column lead |
| Micro | 11px | Smallest observed |

The **home feed sets 15px and the column sets 16px** — Zhihu reads its long-form surface one
step larger than its feed. That is a deliberate split, not drift.

## 4. Component Stylings

Measured live on both surfaces, pointer parked, navigation suppressed.

### Sign-in button

- Rest `#1772f6` fill, `#ffffff` label, **3px radius**, `14px / 400`. 36px tall on the home
  feed, 34px in columns.
- Hover and pressed both **`oklch(0.535218 0.21381 259.318)`**, with a matching 1px border.
- Focus produced no change.

### Rounded utility control

- Rest `#ffffff` fill, `#8491a5` label, **20px radius**, 60px tall.
- Hover and pressed shift fill to **`color(srgb 0.870588 0.876471 0.889412)`** and label to
  `oklch(0.600778 0.0334471 258.983)` — both change together.

### Zhihu computes in modern colour spaces

Its hover states resolve as **`oklch()` and `color(srgb …)`**, not as hex or `rgb()`. No other
reference in this catalog does. The values are recorded **verbatim** rather than converted:
an `oklch` lightness–chroma–hue triple does not round-trip to sRGB hex without loss, and
writing a hex here would be asserting a precision the measurement does not have.

### Radius

`3px` on the primary button, `20px` on the rounded control, `50%` on avatars; the column adds
`9999px` and one asymmetric `0 9999px 9999px 0`. The 3px primary is unusually tight for 2026 —
most of this catalog sits at 4–8px or full pills.

## 5. Layout Principles

- **Cool wash, white article.** `#f4f6f9` behind `#ffffff` reading surfaces.
- **15px feed, 16px column.** The reading surface is a step larger than the scanning surface.
- **Near-invisible chrome.** One blue, one near-black, everything else grey.

## 6. Depth & Elevation

**Not measured.** No shadow or elevation token appears among the 389 properties.

## 7. Do's and Don'ts

### Do
- Set long-form at 16px and feeds at 15px — Zhihu distinguishes them.
- Keep `#1772f6` for the action and let the rest be grey.
- Treat VIP gold, SVIP navy and commerce coral as reserved: they mean membership and paid
  placement, nothing else.

### Don't
- Don't convert the `oklch()` hover values to hex; they are recorded verbatim for a reason.
- Don't read `MapText02A_dark` (`#fff`) as a light-theme value — the `_dark` suffix is the theme.
- Don't promote the system font stack to a brand typeface.
- Don't spend the VIP gold as a general accent.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×900 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#1772f6` brand · `#191b1f` foreground · `#8491a5` muted · `#f4f6f9` page ·
`#ce994f` VIP · `#142457` SVIP · `#ff7d55` commerce · `#11a668` success

### Example Component Prompts
- "A long-form answer surface: 16px `#191b1f` on white over a `#f4f6f9` page, 3px-radius
  `#1772f6` action, `#8491a5` metadata."

## 10. Voice & Tone

Considered and explanatory. Zhihu's product is argued prose, and its chrome stays out of the
way of it — interface copy is minimal and unpersuasive.

## 11. Brand Narrative

Founded in 2011 as an invitation-only Q&A community and opened publicly in 2013, Zhihu built
its reputation on long, sourced answers and listed in New York in 2021. Its monetisation
runs through membership tiers and commercial placement, which is exactly what the token set
shows: VIP and SVIP carry their own brand colours, and commerce has a dedicated coral. A
design system that names what a company charges for is describing its business model.

## 12. Principles

- **Reading first.** Sizes, washes and contrast are tuned for paragraphs, not cards.
- **Theme lives in the token name.** `_light` and `_dark` pairs rather than a runtime switch.
- **Name the tiers.** Membership is a visual concept, not a badge.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Two controls, both carrying hover and pressed, both identical between the two states, both
expressed in modern colour spaces. Focus produced no change on either. No disabled state was
observed on a rendered control.

## 15. Motion & Easing

**Not measured.** No transition or duration token appears among the 389 properties.

---

**Tier 1 sources:** https://www.zhihu.com/ (live production home — 389 custom properties read via `getComputedStyle`, including the `Map*` semantic roles with `_light`/`_dark` pairs and the VIP/SVIP tier colours, plus both measured controls with hover and pressed, 2026-09-22); https://zhuanlan.zhihu.com/ (Zhihu Columns — the long-form surface, confirming the 16px body step and the same control contract at 34px, 2026-09-22)

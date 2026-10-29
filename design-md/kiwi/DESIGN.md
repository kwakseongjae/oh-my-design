---
name: Kiwi.com
colors:
  primary: '#008f7b'
  primary-hover: '#007565'
  primary-active: '#006153'
  product-dark: '#007061'
  product-dark-hover: '#005c4f'
  product-dark-active: '#004239'
  product-darker: '#003d35'
  product-light: '#e1f4f3'
  product-light-hover: '#d6f0ec'
  product-light-active: '#bfe8e2'
  foreground: '#252a31'
  secondary-foreground: '#4f5e71'
  tertiary-foreground: '#657890'
  surface: '#ffffff'
  surface-subtle: '#f5f7f9'
  cloud-normal: '#e8edf1'
  border: '#bac7d5'
  border-hover: '#a6b6c8'
  border-active: '#94a8be'
  info: '#0070c8'
  success: '#048724'
  warning: '#b36200'
  critical: '#d21c1c'
typography:
  body:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 20px
    use: Declared --text-normal, --font-weight-normal and --leading-normal. Card root separately measures 15px/400 with 22.5px leading; paragraph size was not separately measured.
  button:
    fontSize: 15px
    fontWeight: 500
    lineHeight: 15px
    use: Measured Explore and header text actions.
  input:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 44px
    use: Measured destination input.
  large-button:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 16px
    use: Measured Join for free anchor.
  display:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 44px
    use: Declared --text-heading-display, --font-weight-heading-display and --leading-heading-display; not a measurement of the homepage H1.
rounded:
  none: 0px
  r50: 2px
  r100: 4px
  r150: 6px
  r200: 8px
  r300: 12px
  r400: 16px
spacing:
  space-50: 2
  space-100: 4
  space-150: 6
  space-200: 8
  space-300: 12
  space-400: 16
  space-500: 20
  space-600: 24
  space-700: 28
  space-800: 32
  space-1000: 40
  space-1200: 48
  space-1300: 52
  space-1600: 64
components:
  explore:
    type: button
    backgroundColor: '#008f7b'
    textColor: '#ffffff'
    border: none
    rounded: 8px
    height: 44px
    padding: 0px 16px
    typography: 15px / 500
    shadow: none
    hover: 'bg #007565'
    pressed: 'bg #006153; inset 0 0 6px 3px rgba(37,42,49,0.15)'
    use: 'Explore flight-search button; measured width 84px. Keyboard focus also changes its fill to #007565; the accompanying auto outline is browser supplied. No focus token is published.'
  help-support:
    type: button
    textColor: '#252a31'
    border: none
    rounded: 8px
    height: 44px
    padding: 0px
    typography: 15px / 500
    shadow: none
    hover: 'fg #007565'
    pressed: 'fg #007565; no additional change from hover within the recorded comparison scope'
    use: Help & support secondary header action; measured width 103px.
  flights-nav:
    type: button
    textColor: '#008f7b'
    border: none
    rounded: 8px
    height: 44px
    padding: 0px
    typography: 15px / 500
    shadow: none
    hover: 'fg #005c4f'
    pressed: 'fg #005c4f; no additional change from hover within the recorded comparison scope'
    use: Flights header navigation anchor, href /en/, styled as an Orbit text action; measured width 46.3px.
  bangkok-card:
    type: card
    textColor: '#ffffff'
    border: none
    rounded: 6px
    height: 234px
    padding: 0px
    typography: 15px / 400
    shadow: 0 2px 6px rgba(79,94,113,0.08), 0 0 2px rgba(79,94,113,0.12), 0 0 1px rgba(41,47,55,0.3)
    hover: 'white content layer opacity 0 to 1; title and price fg #252a31; origin appears in #4f5e71; larger shadow; see sections 6 and 14'
    pressed: same measured content and shadow as hover; zero additional changes in the recorded comparison scope
    use: 'Seoul to Bangkok destination anchor, 211.2px wide. The recorded fg is the visible title/price child color at rest; the anchor''s own inherited color is #252a31.'
  club-join:
    type: button
    backgroundColor: '#007061'
    textColor: '#ffffff'
    border: none
    rounded: 12px
    height: 52px
    padding: 0px 28px
    typography: 16px / 500
    shadow: none
    hover: 'bg #005c4f'
    pressed: 'bg #004239; inset 0 0 6px 3px rgba(37,42,49,0.15)'
    use: Join for free anchor in the Kiwi.com Club promotion, href /en/kiwi-club; measured width 145.2px.
fonts:
  roles:
    sans: circular
---

# Design System Inspiration of Kiwi.com

## Overview

### Visual Theme & Atmosphere

Kiwi.com is a flight-focused online travel agent built around finding useful combinations of flights and reducing the work of a trip. Its own 2019 announcement dates the business to 2012 and names Oliver Dlouhý and Jozef Képesi as founders. The current About page pairs affordable flights with disruption protection, automatic check-in and live trip information. [Company](https://www.kiwi.com/en/pages/content/about/), [2019 partnership announcement](https://media.kiwi.com/company-news/general-atlantic-announces-strategic-partnership-travel-platform-kiwi-com/).

The brand has a technological and a reassuring side. Its October 2022 identity announcement put Kiwi-Code at the centre of its positioning, with an internal creative team using travel-hack videos, analogy and humour. Today the product leads with “Fly for less, Guaranteed!” The captured homepage expresses that combination through green actions on pale grounds, dark ink, rounded controls, destination photography and friendly three-dimensional travel characters. A prominent white search panel gives the booking task visual priority. [Identity announcement](https://media.kiwi.com/company-news/kiwi-com-reveals-new-brand-identity/), [About](https://www.kiwi.com/en/pages/content/about/), live homepage capture of 2026-10-29.

The product is also expanding how search begins. Beside the conventional Search tab, the live page shows an AI Mode marked BETA. Kiwi.com's 15 October 2026 announcement describes conversational flight search in its app and access through external AI assistants, with booking links returning travellers to its booking funnel. This is a documented product evolution; the AI mode's interaction was not measured. [Current search direction](https://media.kiwi.com/company-news/from-chat-to-boarding-pass-kiwi-com-expands-ai-native-flight-search/).

### Brand Narrative

The current story joins low fares with support when plans change. The homepage gives the search task a prominent panel, then makes room for loyalty and Guarantee messages; the About page explains the practical reassurance behind those messages. [About](https://www.kiwi.com/en/pages/content/about/), live full-page capture.

### Principles

As implementation guidance derived from this capture: give the main search action the green fill; distinguish text actions through ink; use white panels and restrained neutrals for booking information; reveal more route information inside the destination card on hover. Orbit's official repository states a broader aim of consistency across products and processes. [Orbit repository](https://github.com/kiwicom/orbit).

### Personas

The 2022 identity announcement names three campaign archetypes for influencer cooperation: **Digital Innovator**, explaining the technology; **Disruptor**, finding ways to travel for less; and **Explorer**, seeking adventure. This is dated campaign evidence; current user segmentation was not researched. [Identity announcement](https://media.kiwi.com/company-news/kiwi-com-reveals-new-brand-identity/).

## Colors

Use the product vocabulary measured on the English homepage. The palette below comes from the census's computed custom properties; the Explore button independently confirms the primary action ramp. Generic utility colours are excluded.

| Role | Value | Live property or observation |
|---|---|---|
| Primary action | `#008f7b` | `--color-product-normal`; Explore rest fill |
| Primary hover | `#007565` | `--color-product-normal-hover`; Explore hover fill |
| Primary pressed | `#006153` | `--color-product-normal-active`; Explore pressed fill |
| Dark product | `#007061` | `--color-product-dark`; Club CTA rest fill |
| Dark product hover | `#005c4f` | `--color-product-dark-hover`; Club hover and Flights hover ink |
| Dark product pressed | `#004239` | `--color-product-dark-active`; Club pressed fill |
| Deep product | `#003d35` | `--color-product-darker` |
| Light product | `#e1f4f3` | `--color-product-light` |
| Light product hover / active | `#d6f0ec` / `#bfe8e2` | `--color-product-light-hover` / `--color-product-light-active` |
| Foreground | `#252a31` | `--color-text-primary-foreground`; most frequent paragraph ink, 13 paragraphs |
| Secondary foreground | `#4f5e71` | `--color-text-secondary-foreground`; 5 paragraphs |
| Tertiary foreground | `#657890` | `--color-ink-light` |
| Surface | `#ffffff` | `--color-card` / `--color-white-normal`; 25 counted backgrounds |
| Subtle surface | `#f5f7f9` | `--color-cloud-light` |
| Cloud neutral | `#e8edf1` | `--color-cloud-normal`; 7 counted backgrounds |
| Field border ramp | `#bac7d5` / `#a6b6c8` / `#94a8be` | Declared normal / hover / active field-border roles |
| Information | `#0070c8` | `--color-blue-normal` |
| Success | `#048724` | `--color-green-normal` |
| Warning | `#b36200` | `--color-orange-normal` |
| Critical | `#d21c1c` | `--color-red-normal` |

The semantic and field-border roles are verified CSS values. Error, success, warning and invalid-form workflows were not exercised. Transparency remains transparency: text actions, the destination input and the destination-card anchor report `rgba(0,0,0,0)` on their own boxes.

## Typography

**Official product use.** No opened narrative source explicitly names the current homepage's typeface. The official Orbit repository gives a Roboto import example for its component library. That is library guidance and does not establish the face rendered by this homepage. [Orbit repository](https://github.com/kiwicom/orbit).

**Live-loaded.** The census records `circular` in normal weights **400, 500 and 700**. Body, H1 and buttons declare it first; all six measured control roots compute to `circular`. The machine family is therefore the exact CSS name `circular`, without an inferred commercial family suffix. The census also lists a generated `circular Fallback` face; it is excluded from the brand family and specimens.

**Serving evidence and distributed assets.** The live `@font-face` rules serve WOFF2 files named `book-s.p.3b7d6vqz6atuh.woff2`, `medium-s.p.40f_4n8xx_089.woff2` and `bold-s.p.38uj6r7294a5j.woff2`, each with deployment query `dpl=v2026-10-29_1` and relative `../media/` sources. The homepage links its CSS from `static.kiwi.com`. No separate official font kit or licence was opened; font files were not downloaded.

**Declared-only.** A 400 italic `circular` rule points to `book_italic-s.p.0qm1nu2qxi4t3.woff2`, but that face is absent from the loaded list. It gets no live specimen. Platform names in fallback stacks do not establish additional product faces.

**Unresolved.** The opened evidence does not establish the foundry, full commercial font name, redistribution terms or coverage by writing system. Substitute: none chosen.

| Use | Size / weight | Line height | Evidence |
|---|---|---|---|
| Explore and header actions | 15px / 500 | 15px | Control identities |
| Destination input | 16px / 500 | 44px | Input identity |
| Club CTA | 16px / 500 | 16px | Anchor identity |
| Destination-card root | 15px / 400 | 22.5px | Anchor identity |
| Normal text token | 15px / 400 | 20px token | `--text-normal`, `--font-weight-normal`, `--leading-normal`; paragraph size not separately measured |
| Display token | 40px / 700 | 44px | `--text-heading-display`, weight and leading tokens; not the measured H1 size |

The declared heading size / line-height pairs are 28/36, 24/32, 20/28, 18/24, 16/22, 15/20 and 13/18px for title0 through title6. Each corresponding heading-weight token is 700. These are available CSS roles rather than a claim that every tier appears on this page.

## Layout

At 1440 × 1000px, the header is 64px tall and keeps travel navigation on the left and regional/help/account actions on the right. The hero places its search form above a Club promotion, followed by a Guarantee banner, destination cards beside a newsletter panel, an app promotion, popular routes and footer directories. These relationships are visible in the saved full-page capture; they are not a measured mobile layout.

The stylesheet defines content-width roles of **1120px** (`--spacing-content-small`) and **1320px** (`--spacing-content-large`). The spacing series `--spacing-50`, `-100`, `-150`, `-200`, `-300`, `-400`, `-500`, `-600`, `-700`, `-800`, `-1000`, `-1200`, `-1300`, `-1600` resolves to **2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 40, 48, 52, 64px**. Use the named role that corresponds to the component rather than treating every gap as interchangeable.

The radius series is **0, 2, 4, 6, 8, 12 and 16px**, from `--radius-none` and `--radius-50` through `--radius-400`. The search-mode tabs separately measure a **9999px** pill radius. The input's square inner box should not be used to infer the enclosing field's radius.

### Responsive Behavior

Only the 1440 × 1000px desktop surface was measured; mobile layout and breakpoint behaviour are absent.

## Elevation & Depth

Pressing Explore or the Club CTA adds **`inset 0 0 6px 3px rgba(37,42,49,0.15)`**. This matches `--shadow-button-active`, whose raw value is `inset 0 0 6px 3px #252a3126`. Rest and hover show no button shadow.

The Bangkok card's non-transparent shadow layers at rest are:

```css
0 2px 6px 0 rgba(79,94,113,0.08),
0 0 2px 0 rgba(79,94,113,0.12),
0 0 1px 0 rgba(41,47,55,0.3)
```

Hover and pressed use:

```css
0 8px 24px -5px rgba(79,94,113,0.1),
0 5px 16px -3px rgba(79,94,113,0.12),
0 1px 4px 0 rgba(79,94,113,0.12),
0 0 1px 0 rgba(41,47,55,0.3)
```

These transcriptions omit four transparent zero-size utility shadow layers that draw nothing. The card's rest image overlay is `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.6))`. White labels sit over that image treatment; on hover a separate white content layer becomes opaque.

## Motion & Easing

Explore, both measured header actions and the Club CTA declare **`all 0.15s cubic-bezier(0.4, 0, 0.2, 1)`**. The Bangkok anchor declares **`box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)`**. The destination input records a **0.5s** colour/background/border/outline transition bundle with **`cubic-bezier(0, 0, 0.2, 1)`**. These are computed component timings; the easing curves also occur among generic utility defaults and are not claimed as exclusive brand tokens. Reduced-motion behaviour and individual image-translation values were not measured.

---

Live evidence: English homepage, `en-US`, 1440 × 1000px, 2026-10-29. Full census and six-control measurements are preserved in the evidence folders listed in `verification.md`; narrative links above were opened directly.

## Components

Measurements are from one desktop state pass after the tool recorded **Reject all**. The four text/CTA controls each have one text child; the card has fifteen descendants. All six matched a single candidate.

| Control | Geometry | Rest appearance |
|---|---|---|
| **Explore** — primary button | 84 × 44px; 8px radius; padding 0 16px; 15px/500 | `#008f7b` fill, `#ffffff` text; no border or shadow |
| **Help & support** — secondary header button | 103 × 44px; 8px radius; zero padding; 15px/500 | Transparent box, `#252a31` text; no border or shadow |
| **Flights** — header anchor | 46.3 × 44px; 8px radius; zero padding; 15px/500 | Transparent box, `#008f7b` label; no border or shadow |
| **City, airport or place** — destination input | Initially 204.9 × 44px; 0px input radius; padding 0 8px; 16px/500 | Transparent input, computed foreground `#252a31`; no input border or shadow; wrapper supplies the visible inset line |
| **Seoul → Bangkok** — destination anchor | 211.2 × 234px; 6px radius; zero root padding; 15px/400 | Transparent anchor over photography; visible title and price `#ffffff`; root's own inherited ink is `#252a31` |
| **Join for free** — Club promotion anchor | 145.2 × 52px; 12px radius; padding 0 28px; 16px/500 | `#007061` fill, `#ffffff` text; no border or shadow |

Explore darkens on hover and adds an inset shadow when pressed. The Club CTA uses the darker product ramp. The header actions change text colour without filling their boxes. The destination card reveals a white information layer on hover; reproduce the child treatment as well as the anchor geometry. Section 14 gives the complete measured state differences.

### States

Each hover snapshot reports `:hover = true`; each pressed snapshot also reports `:active = true`. Samples waited 900ms, longer than the recorded transitions. Focus came from a real Tab walk.

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Explore | Fill `#007565` | Fill `#006153` plus the inset shadow in section 6 | Fill `#007565` plus `1px auto` browser outline; offset 0 |
| Help & support | Own and child ink `#007565` | Same ink; no additional delta from hover | Rest ink plus `1px auto` browser outline; offset 0 |
| Flights | Own and child ink `#005c4f` | Same ink; no additional delta from hover | Rest ink plus `1px auto` browser outline; offset 1px |
| Destination input | No additional difference against the post-Tab parked baseline | Same comparison result | Width 204.9 → 316px and enclosing inset line 1 → 2px; both persist after blur, so neither is published as focus-only behaviour |
| Bangkok card | White content layer opacity 0 → 1; title/price white → `#252a31`; origin opacity 0 → 1 and ink `#4f5e71`; country suffix appears; larger shadow | Same measured result as hover; no additional delta | Rest content plus `1px auto` browser outline; offset 1px |
| Club CTA | Fill `#005c4f` | Fill `#004239` plus the inset shadow | Rest fill plus `1px auto` browser outline; offset 1px |

On the card, the content grid grows from **211 × 99px to 211 × 127px**. The destination row grows from **187 × 28px to 187 × 56px**, and the previously hidden country suffix becomes visible. The anchor stays **211.2 × 234px**. The origin icon changes to secondary ink and the destination arrow to primary ink along with their labels.

The input comparison covers its own box and pseudos plus three ancestor levels, with no descendants. The pointer pass occurs after the Tab walk, when its wider layout and blue inset line are already retained. Its no-change results therefore apply to that parked state, not to a fresh unopened field. The focus inset's raw colour is `oklab(0.541412 -0.0504551 -0.152259)`; its pristine 1px inset is `oklab(0.82401 -0.00823078 -0.0228384)`. No inferred hex is substituted for either.

For the four simple actions the comparison covers the control, one text child, their pseudos and three ancestor levels. For the card it covers fifteen descendants, including two empty layers, two SVGs, two paths and one image, plus pseudos and three ancestor levels. “No additional delta” is limited to those computed styles and DOM attributes; sibling elements, canvas/video pixels, closed shadows and cross-origin frames are outside the probe. Disabled states were not measured. Browser `auto` rings produce no brand focus token.

## Do's and Don'ts

- Use the measured green ramps for primary and Club actions, with dark ink for ordinary text.
- Keep normal actions 44px high and the measured large Club action 52px high.
- Preserve the card's visible child colours and white-layer reveal when recreating its interaction.
- Keep the loaded `circular` face separate from library font examples and generated fallbacks.
- Do not turn generic utility colour ramps, provider colours or browser `auto` outlines into Kiwi.com brand tokens.
- Do not infer mobile layouts, disabled states or validation behaviour from this desktop capture.

## Voice & Tone

The current About page addresses the traveller directly and connects price with reassurance. Its language focuses on making a trip easier, handling disruption and keeping travellers informed. The 2022 identity announcement additionally describes analogy and humour in travel-hack videos; that evidence concerns the campaign's expression. [About](https://www.kiwi.com/en/pages/content/about/), [identity announcement](https://media.kiwi.com/company-news/kiwi-com-reveals-new-brand-identity/).

## Agent Prompt Guide

“Build a flight-search panel with white surfaces and `#252a31` foreground. Use the live-loaded `circular` family. Give the Explore action a 44px height, 8px radius, 0 16px padding and 15px/500 text; fill it `#008f7b`, darken to `#007565` on hover and `#006153` on press with the measured inset shadow. Keep header text actions transparent. Put destination photography in 6px-radius cards and reveal a white information layer on hover.”

Use the measured controls as component examples. Unverified workflows and absent font assets require separate evidence before extending the reference.

## Governance

### Known Gaps

- **Contrast, `explore`.** Text `#ffffff` on `#008f7b` measures 4.03:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

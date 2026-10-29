---
name: SIXT
colors:
  brand-orange: '#ff5000'
  foreground: '#ffffff'
  foreground-on-light: '#1a1a1a'
  secondary-on-light: '#656a6f'
  secondary-on-dark: '#8d9299'
  canvas: '#ffffff'
  canvas-muted: '#e9ebee'
  container-muted: '#f4f5f6'
  border-muted: '#d7dadc'
  canvas-dark: '#1a1a1a'
  canvas-dark-raised: '#1e1e1f'
  container-dark: '#212223'
  container-dark-raised: '#272829'
  soft-brand: '#fff2e8'
  negative: '#d70015'
  negative-on-dark: '#ff5556'
  positive: '#22c55e'
  info: '#1658c7'
  cautious: '#ffbc1f'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    use: Measured pickup input; HelveticaNow is live-loaded, not an official font-policy claim.
  button:
    fontSize: 16px
    fontWeight: 700
    use: Visible Autos anzeigen label; outer button computes 16px/400.
  small-action:
    fontSize: 12px
    fontWeight: 700
    use: Visible Mehr erfahren label; outer button computes 16px/400.
  header-link:
    fontSize: 14px
    fontWeight: 700
    use: Visible Hilfe label; outer link computes 16px/400.
  product-link:
    fontSize: 14px
    fontWeight: 400
    use: Visible Auto Abo label; outer link computes 16px/400.
rounded:
  none: 0px
  control: 12px
components:
  show-cars:
    type: button
    backgroundColor: '#ff5000'
    textColor: '#ffffff'
    rounded: 12px
    height: 52px
    padding: 0px 40px
    typography: 16px / 700
    hover: '::after background rgba(25, 25, 25, 0.04); base background stays #ff5000.'
    pressed: '::after background rgba(25, 25, 25, 0.08); label wrapper opacity 0.6.'
    focus: '1px solid #ffffff border and box-shadow 0px 0px 0px 3px #ff5000.'
    use: Autos anzeigen booking CTA, 200px wide. Font describes the visible label; outer element is 16px/400. All three states measured.
  learn-more:
    type: button
    textColor: '#ffffff'
    border: '2px solid #ffffff'
    rounded: 720px
    height: 36px
    padding: 0px 24px
    typography: 12px / 700
    focus: 'box-shadow 0px 0px 0px 3px #ff5000.'
    use: Mehr erfahren, the button inside the SIXT ONE linked promotion; transparent over the darkened photo, 131.5px wide. Hover and press unmeasured because a location-suggestion backdrop covered it.
  help-nav:
    type: button
    textColor: '#ffffff'
    rounded: 12px
    height: 52px
    padding: 0px
    typography: 14px / 700
    hover: Label background-position 51% 100% to 0% 100%; background-size remains 320% 1px, no-repeat.
    pressed: Element opacity 0.6; label background-position 50% 100% (rest 51% 100%).
    focus: 'box-shadow 0px 0px 0px 3px #ff5000; label background-position 0% 100%.'
    use: Hilfe header link to /help-center/, transparent over the dark photographic header; 64.6px wide. Pointer states from the second states call.
  pickup-input:
    type: input
    textColor: '#1a1a1a'
    rounded: 0px
    height: 50px
    padding: 1px 2px
    typography: 16px / 400
    pressed: 'Immediate wrapper border becomes 1px solid #ff5000; wrapper box-shadow inset 0px 0px 0px 2px #ff5000. Concurrent pointer focus is present.'
    focus: 'Immediate wrapper border becomes 1px solid #ff5000; wrapper box-shadow inset 0px 0px 0px 2px #ff5000.'
    use: 'Flughafen, Stadt oder Adresse location input, 206.5px wide. Transparent input inside a white wrapper with a resting 1px #d7dadc border. Radius 0 belongs to the input, not its rounded wrapper. Hover was measured unchanged within the recorded DOM scope.'
  auto-abo:
    type: button
    textColor: '#ffffff'
    rounded: 720px
    height: 42px
    padding: 0px 4px
    typography: 14px / 400
    hover: Label background-position 51% 100% to 0% 100%; background-size remains 320% 1px, no-repeat.
    pressed: Element opacity 0.6; label background-position 50% 100% (rest 51% 100%).
    focus: 'box-shadow 0px 0px 0px 3px #ff5000; label background-position 0% 100%.'
    use: Auto Abo product-navigation link to /plus/, transparent over the dark photographic header; 107.3px wide, computed pill radius 720px. Pointer states from the second states call.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: HelveticaNow
---

# Design System Inspiration of SIXT

## Overview

### Visual Theme & Atmosphere

SIXT is a premium mobility provider based in Pullach, Germany. Its products span car and commercial-vehicle rental, car sharing, subscriptions, and chauffeur or transfer services. Martin Sixt started the company in 1912 with three vehicles; today's rental homepage puts the booking form before the promotional content. These company and product facts come from the [corporate FAQ](https://about.sixt.com/en/faq/) and [company history](https://about.sixt.com/en/).

The measured German homepage combines orange `#ff5000`, near-black `#1a1a1a`, white booking surfaces and large condensed uppercase headlines. A close-up vehicle photograph fills the hero behind the white booking panel. A full-width orange headline band follows it, then a white benefits row, photographic offers, more service cards and a dark footer. The visual contrast is between dense, emphatic promotional type and smaller, conventional form labels. This description is an observation of the captured homepage, rather than a published set of brand principles.

The current expression has a documented evolution. SIXT's [March 2024 release](https://about.sixt.com/en/sixt-grows-by-18-to-record-revenue-in-2023-and-achieves-second-best-result-in-the-companys-history/) dates its brand-design refresh to spring 2023 and the modernised website and app booking process to December 2023. Its [April 2026 announcement](https://about.sixt.com/product-news/sixt-modernisiert-500-station-weltweit-meilenstein-am-flughafen-bruessel/) identifies Brussels Airport as the 500th station converted to the new design, describing navigation through the customer journey and premium positioning as objectives of that physical programme. Those station-design objectives are context, not evidence of web component specifications.

The German site's legal notice names **Sixt GmbH & Co. Autovermietung KG**, Zugspitzstraße 1, D-82049 Pullach. [Legal notice](https://www.sixt.de/pages/impressum/).

### Brand Narrative

The company's history runs from three vehicles in 1912 to a multi-service mobility platform. Its brand refresh and modernised booking process connect a premium visual presentation with the rental task. The continuing station rollout extends that presentation into physical locations. The homepage expresses it through oversized display type, orange fields, vehicle photography and an immediately accessible booking panel. [History](https://about.sixt.com/en/), [refresh and booking modernisation](https://about.sixt.com/en/sixt-grows-by-18-to-record-revenue-in-2023-and-achieves-second-best-result-in-the-companys-history/), [station rollout](https://about.sixt.com/product-news/sixt-modernisiert-500-station-weltweit-meilenstein-am-flughafen-bruessel/).

### Principles

The corporate homepage states **EXPECT BETTER** as its driving idea. The physical redesign announcement identifies intuitive customer-journey guidance and premium positioning as objectives. For this web reference, the directly observed implementation patterns are a prominent booking task, strong light/dark/orange contrast and explicit authored keyboard-focus shadows. The observed patterns are synthesis, not quoted corporate design principles. [Corporate homepage](https://about.sixt.com/en/), [station redesign](https://about.sixt.com/product-news/sixt-modernisiert-500-station-weltweit-meilenstein-am-flughafen-bruessel/).

### Personas

The corporate FAQ identifies private customers, business customers and sales partners; no research-backed personas were verified. [Corporate FAQ](https://about.sixt.com/en/faq/).

## Colors

The live census records three colour namespaces, each with 94 properties including paired RGB channels: `--color-prime-*`, `--color-option-*` and `--color-accent-*`. Their values support light, dark and orange treatments; these are observed CSS definitions, not a claim that a public design-system manual was found.

| Role in this reference | Value | Live evidence |
|---|---|---|
| Brand orange | `#ff5000` | `--color-prime-brand`; Autos anzeigen background; authored focus shadows |
| Foreground on dark content | `#ffffff` | All ten sampled `<p>` elements; white promotion and navigation labels |
| Foreground on light surfaces / dark canvas | `#1a1a1a` | `--color-prime-primary`, `--color-option-canvas-1`; input ink |
| Secondary on light surfaces | `#656a6f` | `--color-prime-secondary` |
| Secondary on dark surfaces | `#8d9299` | `--color-option-secondary` |
| White canvas | `#ffffff` | `--color-prime-canvas-1` |
| Muted canvas | `#e9ebee` | `--color-prime-canvas-2` |
| Muted container | `#f4f5f6` | `--color-prime-container-2` |
| Muted border | `#d7dadc` | `--color-prime-tertiary`; pickup wrapper at rest |
| Dark raised canvas | `#1e1e1f` | `--color-option-canvas-2` |
| Dark containers | `#212223`, `#272829` | `--color-option-container-1`, `--color-option-container-2` |
| Soft brand | `#fff2e8` | `--color-prime-soft-brand` |
| Negative, light / dark contexts | `#d70015`, `#ff5556` | `--color-prime-negative`, `--color-option-negative` |
| Positive | `#22c55e` | `--color-prime-positive` |
| Info | `#1658c7` | `--color-prime-info` |
| Cautious | `#ffbc1f` | `--color-prime-cautious` |

The semantic rows describe token names; no error, success or warning workflow was triggered. The accent namespace makes the canvas orange and its primary ink near-black, while `--color-accent-brand` becomes white. Preserve that context change instead of treating every property ending in `brand` as orange.

Body-text evidence is contextual: the recorded paragraph ink is white, while the pickup field uses near-black. `foreground` therefore refers to the sampled dark-content paragraphs, not a universal instruction to put white text on the white booking panel.

## Typography

**Official product-use documentation:** none of the opened first-party narrative pages specifies a product font family.

**Live-loaded:** the CSS family **HelveticaNow** has loaded normal faces at weights **400, 700 and 900**. Its same-origin `@font-face` sources are `/shared/fonts/HelveticaNowTextRegular.woff2`, `/shared/fonts/HelveticaNowTextBold.woff2` and `/shared/fonts/HelveticaNowDisplayCondensedBlack.woff2`, respectively. The files identify the text regular, text bold and condensed display black cuts under one CSS family. The pickup input explicitly computes `HelveticaNow`; the H1 stack begins with it.

**Official distributed assets:** the capture exposes those live product font URLs; no separately documented font distribution, reuse licence or downloadable brand package was verified. The font files were not downloaded for this report.

**Declared-only:** the styles also define Roboto 400/700, Roboto Condensed 700, and the local aliases RobotoArial 400 and RobotoCondensedArial 700. They do not appear in the loaded-face list. The body and default button declarations compute `Apple SD Gothic Neo`, and the heading stack names additional fallback faces; these declarations do not establish a loaded brand face. They receive no specimen and no family token.

**Unresolved:** the capture does not identify the computed family of each visible button-label child. Its label metrics are recorded separately from the outer control's defaults. Font licensing and non-Latin product typography are unverified. **Substitute: none chosen.**

| Measured text | Size / weight | Other evidence |
|---|---|---|
| Pickup input | 16px / 400 | 24px line height; 0.1072px letter spacing; HelveticaNow |
| Autos anzeigen label | 16px / 700 | Outer button is 16px / 400 |
| Mehr erfahren label | 12px / 700 | Outer button is 16px / 400 |
| Hilfe label | 14px / 700 | Outer link is 16px / 400 |
| Auto Abo label | 14px / 400 | Outer link is 16px / 400 |

Declared type tokens provide a larger scale without proving that every size was rendered: copy sizes are 0.75rem, 0.875rem, 1rem and 1.375rem; regular copy uses line-height 1.5 and tight heavy copy 1.25. Display-heavy sizes are 3.125rem, 3.75rem and 4.5rem at weight 900 and line-height 1. Their `prominent` variants declare uppercase. Keep these values in rem; no extra pixel scale has been inferred.

## Layout

At the captured 1440 × 1000 desktop viewport, the booking CTA begins at x=1129, y=256. The location input begins at x=145, y=257. Date and time controls sit between them in a horizontal booking panel. Header links occupy the row above the product-navigation pills.

The full-page image shows a full-width SIXT ONE promotion followed by two-column offer rows and a three-card service row. The first offer link starts at x=80, y=1698 and is 620.5px wide; the adjacent offer begins at x=725. Declared local grid properties specify 12 columns and a 0.75rem gutter, but those declarations have not been matched to every visible row. The captured offer positions must not be converted into a universal grid token.

### Responsive Behavior

Only the 1440 × 1000 desktop viewport was measured; breakpoints, touch behaviour and mobile layouts are unverified.

## Elevation & Depth

The measured CTA, secondary button, navigation links, card link and input have no resting box-shadow on their own nodes. Authored focus depth is precise: a 3px spread orange shadow on the buttons and navigation links, and a 2px inset orange shadow on the pickup wrapper. The promotion photograph has a dark gradient layer in the measured ancestor scope. No general elevation scale was verified.

## Motion & Easing

The raw outer-control transition is `all 0s ease 0s` for the primary CTA, secondary button, Hilfe link, pickup input and weekend card. Auto Abo reports `background, border-color 0.15s, 0.15s ease, ease 0s, 0s`. These are copied as recorded, without repairing the latter serialization.

The probe reports a longest transition of **600ms** in the Hilfe and Auto Abo comparison scope and waits past it before sampling. It does not expose the responsible descendant's complete transition string or easing curve, so no easing token is supplied. No other animation timing was verified.

## Components

**Primary booking CTA — Autos anzeigen.** A 200 × 52px button, 12px radius, `0px 40px` padding, `#ff5000` background and `#ffffff` label. The visible label is 16px/700. Hover paints an `::after` layer of `rgba(25, 25, 25, 0.04)`. Press paints `rgba(25, 25, 25, 0.08)` and changes the label wrapper's opacity from 1 to 0.6. The base background stays orange. Keyboard focus adds a 1px white border and `#ff5000` box-shadow with a 3px spread.

**Secondary promotion button — Mehr erfahren.** The first matching control is inside the SIXT ONE linked promotion: 131.5 × 36px, computed 720px pill radius, `0px 24px` padding, transparent background, 2px white border and white 12px/700 label. It sits over a darkened photograph. Keyboard focus adds the 3px orange shadow. Hover and press remain unmeasured because a location-suggestion backdrop covered the pointer target.

**Header action link — Hilfe.** A link to `/help-center/`, 64.6 × 52px, 12px radius, zero padding and white 14px/700 label over the dark hero header. Hover moves the label's underline background-position from `51% 100%` to `0% 100%`; its size remains `320% 1px`, no-repeat. Press changes the link's opacity to 0.6 and records background-position `50% 100%`. Keyboard focus adds the 3px orange shadow and moves the underline to `0% 100%`.

**Location search — Flughafen, Stadt oder Adresse.** The input itself is 206.5 × 50px, radius 0, `1px 2px` padding, transparent background and `#1a1a1a` 16px/400 text. Its immediate white wrapper has a resting 1px `#d7dadc` border. Keyboard focus changes that wrapper's border to orange and adds a 2px inset orange shadow. The same wrapper changes were observed during pointer-down, with pointer focus also present; they are not evidence of an independent press-only rule. Input hover was unchanged within the recorded comparison scope. Radius 0 describes the input node, not its rounded surrounding frame.

**Product navigation — Auto Abo.** A link to `/plus/`, 107.3 × 42px, computed 720px pill radius and `0px 4px` padding. It is transparent over the dark photographic header, with a white 14px/400 label. Hover, press and focus change its underline position and opacity in the same measured pattern as Hilfe; focus adds the 3px orange shadow.

**Promotion card — Ihr Wochenende. Ihre Freiheit.** The linked node measures 620.5 × 496.4px, radius 0 and `32px 24px` padding, with transparent background and white text over vehicle imagery. Its visual card silhouette is rounded outside the measured link node. Hover and press are unmeasured. The link's measured focus outline is browser `auto`, so this card contributes no interactive component token.

The root radius definitions are `--border-radius-xs: 0.25rem`, `-s: 0.5rem`, `-m: 0.75rem`, `-l: 1rem`, `-xl: 1.5rem` and `-2xl: 2.5rem`. The machine radius entries retain directly measured 0px and 12px values; pill geometry is documented per control.

### States

Measured component states are specific to the named controls. The primary CTA uses pseudo-element overlays on hover and press. Hilfe and Auto Abo move a label background underline on hover, dim the entire link on press, and add authored orange focus shadows. Mehr erfahren has a verified focus shadow only. The pickup field changes its immediate wrapper on keyboard focus and pointer-down with concurrent focus; hover was unchanged across the input, its pseudo-elements and three ancestor levels.

Every included focus treatment returned to its resting appearance after blur according to `persistsAfterBlur: []`. The weekend card's own focus was browser `auto`; its post-blur snapshot also picked up a child button's focus shadow. Neither observation becomes a card-state token. Disabled, invalid, loading and submitted states were not exercised.

## Do's and Don'ts

- Use orange, near-black, white surfaces and the loaded condensed display cut to reproduce the captured composition.
- Keep the orange CTA's base colour and implement its measured pseudo-element overlays and pressed label opacity.
- Apply the location field's focus treatment to its wrapper; preserve the inner input's separate geometry.
- Preserve visible-label sizes separately from outer-control defaults.
- Keep a browser `auto` outline out of brand focus tokens.
- Keep declared-only faces and unresolved aliases out of rendered specimens and machine font families.

## Voice & Tone

The live hero pairs an uppercase premium-versus-economy offer with short booking labels. SIXT's [July 2025 campaign release](https://about.sixt.com/product-news/neue-sommerkampagne-sixt-setzt-kunden-an-die-frische-luft/) explicitly associates its imagery and playful headlines with the campaign's expression. Treat that as evidence for concise wordplay in promotional copy; form labels in the measured surface remain direct and functional. This is a scoped reading of the sources, not a complete editorial style guide.

## Agent Prompt Guide

Build a SIXT-style rental homepage with a vehicle-photo hero, a white horizontal booking panel, orange `#ff5000` primary action and a broad orange headline band with near-black `#1a1a1a` condensed uppercase display type. Use the live-loaded HelveticaNow evidence and preserve its text-versus-display cuts. Do not choose a replacement family from appearance.

For the measured primary action: use a 200 × 52px button, 12px radius, `0px 40px` padding and white 16px/700 label. Hover adds the 4% dark layer; pointer-down adds the 8% layer and dims the label wrapper to 0.6; keyboard focus adds a white border and the 3px orange shadow.

For navigation links: reproduce the measured background-position underline and 3px orange focus shadow over a dark photographic surface. Leave unmeasured secondary-button and promotion-card pointer states unspecified.

## Governance

### Known Gaps

- **Contrast, `show-cars`.** Text `#ffffff` on `#ff5000` measures 3.28:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

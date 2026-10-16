---
name: Lamborghini
colors:
  primary: '#ffc000'
  primary-muted: '#917300'
  surface-light: '#ffffff'
  foreground: '#202020'
  on-primary: '#000000'
  inverse: '#ffffff'
  muted: '#969696'
rounded:
  square: 0px
spacing:
  xs: 8
  sm: 16
  md: 24
  lg: 32
  section: 48
components:
  accent-cta:
    type: button
    backgroundColor: '#ffc000'
    textColor: '#000000'
    rounded: 0px
    padding: 24px
    typography: 16px / 400 / LamboType
    states: captured in selected/tab-selected surface context; no activation transition asserted
    use: Marketing accent action at home::[data-omd-capture="45"]
    height: 72px
    pressed: 'bg #997300 (:hover + :active)'
    focus: 'outline #1e90ff solid 2px on :focus-visible'
  outline-action:
    type: button
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 0px
    padding: 24px
    typography: 16px / 400 / LamboType
    states: captured in selected/tab-selected surface context; no activation transition asserted
    use: Marketing secondary action at home::[data-omd-capture="46"]
  menu-link:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    padding: 16px 0px
    typography: 18px / 400 / LamboType
    states: default capture; menu open/close transition was not captured
    use: Burger-menu hierarchy link at home::[data-omd-capture="4"]
  selected-tab:
    type: tab
    textColor: '#ffffff'
    border: '0px 0px 2px #ffc000'
    rounded: 0px
    padding: 24px
    typography: 16px / 400 / LamboType
    states: selected and tab-selected after observed tab interaction
    use: React tab at home::[data-omd-capture="41"]
  news-card:
    type: card
    textColor: '#202020'
    rounded: 0px
    padding: 0px
    use: News-card image wrapper at home::div.card-news__image-wrapper
omitted:
  - section: typography
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: LamboType
---

# Lamborghini — Design Reference

## Overview

### Visual Theme & Atmosphere

Automobili Lamborghini is an Italian super sports car maker founded in 1963, whose current public positioning pairs technological performance with audacious design and its “Driving Humans Beyond” mission. The captured public web surfaces express that identity as editorial automotive marketing: large LamboType headlines, full-bleed product imagery, hard-edged controls, and a tightly observed palette of yellow, black, white, and neutral gray. This is not a reference for an authenticated vehicle, owner, dealer, checkout, or documentation product: the supplied evidence covers only three public marketing routes. Lamborghini’s 2024 corporate refresh explicitly reconnects black and white with yellow and gold accents, an official typeface, and a new icon set; the live capture corroborates LamboType in visible public UI rather than treating the older site snapshot as a universal product system.

- **Source boundary:** `home`, `global-home`, and `models` are public marketing surfaces. No authenticated product, dealership workflow, configuration flow, or documentation chrome was supplied.
- **Measured character:** 0px controls and panels recur throughout the capture; yellow is observed on accent actions rather than elevated to a general semantic palette.
- **Current context:** the official 2024 identity update links the visual direction to the company’s brave, unexpected, and authentic values.

### Primary tasks

- Open Models, Ownership, or News from the site navigation
- Browse the model lineup on the public models page
- Read the brand manifesto to see what the company stands for

### Brand Narrative

Lamborghini’s official company material dates the founding to 1963 in Sant’Agata Bolognese and describes more than sixty years of super sports car design and performance. Its current company framing adds sustainability, well-being, and inclusion to the “Driving Humans Beyond” mission. The 2024 corporate refresh is the relevant current evolution for this reference: it introduces a broader logo typeface, reconfirms black and white as primary hues with yellow and gold accents, and adds a new official typeface and icon set for company communications.

### Principles

1. **Brave.** The manifesto identifies courage as a brand value. *UI implication:* make emphasis deliberate and sparse rather than accumulating decorative emphasis.
2. **Unexpected.** The manifesto asks the brand to push boundaries. *UI implication:* use the measured accent action only where a public-marketing action needs visual priority.
3. **Authentic.** The official identity work ties visual expression to the company’s own design language. *UI implication:* retain 0px control geometry and licensed LamboType only where the cited marketing evidence applies.

### Personas

No first-party persona segmentation or user-research evidence was supplied for this reverify. Research-backed audience needs may be added only when an official or user-provided source is available.

## Colors

The roles below are limited to values that the supplied collector observed in computed styles on the three marketing surfaces.

- **Accent action — `#ffc000`:** background on `btn-accent btn-large` at `home::[data-omd-capture="45"]`.
- **Alternate accent sample — `#917300`:** background on a separate `nav-btn explore ... btn-accent` sample at `home::[data-omd-capture="31"]`. It is an observed variant, not a documented hover contract.
- **Light fill / inverse text — `#ffffff`:** a captured filled primary button background and the foreground/border of outline controls.
- **Foreground — `#202020`:** recurring card and text color on the marketing routes.
- **On accent — `#000000`:** text and border color on the `#ffc000` accent action.
- **Muted control text — `#969696`:** captured on disabled/secondary carousel and tab samples.

The bundle also records `#181818`, `#f5f5f5`, `#c4c4c4`, `#494949`, and `#7d7d7d` in local text or border contexts. They are not promoted to semantic, error, success, link, or global-surface tokens because the capture does not establish those roles.

## Typography

### Evidence classes

- **Live computed + FontFaceSet use:** `LamboType` is the sole loaded, high-confidence family in the bundle. It has 805 visible uses across headings, text, buttons, cards, tabs, badges, and list items; the collector reports that the computed family is backed by a loaded `FontFace`.
- **Official product-use context:** Lamborghini’s 2024 corporate-look announcement says its official typeface was created for company communications. Character Type identifies the Lamborghini project as Lambotype, a variable custom family designed with Strichpunkt. This contextual evidence supports the live family story; it does not turn the captured site files into a reusable asset.
- **Declared-only asset:** `Lambo-icons` has an `@font-face` declaration but zero visible captured use. It is not a typography or icon token.
- **Fallback names:** Roboto, Helvetica Neue, and Arial appear behind `LamboType` in computed CSS stacks. The loaded LamboType face wins in the capture; fallback names are not promoted as brand families.
- **Licence boundary:** Lamborghini’s terms say site fonts and other material are protected and may not be reproduced or used without authorization. No public downstream LamboType web-font licence was found. Keep the family metadata, but mark a specimen unavailable unless the target project has its own licence; never substitute a system font while calling it LamboType.

### Measured public-marketing hierarchy

| Role | Size / weight / line height | Provenance |
|---|---|---|
| Display headline | 120px / 400 / 110px | `surface-3::h3.card-bt__title-primary` |
| Large display | 80px / 400 / 90px | `surface-3` body sample |
| Editorial heading | 54px / 400 / 64px | `surface-3::h3` sample |
| News heading | 27px / 400 / 37px | `home::h3.card-news__title` |
| Menu hierarchy link | 18px / 400 / 28px | `home::[data-omd-capture="4"]` |
| Body / control | 16px / 400 / 24px | recurring captured text/button/card sample |
| Small label | 10px / 400 / 10px, `0.225px` tracking | `home::[data-omd-capture="51"]` |

## Layout

The capture repeatedly measures 8px, 16px, 24px, 32px, and 48px in local padding, margin, and gap values. The strongest observed local pattern is 24px: it occurs in action padding, tab padding, and layout gaps. A carousel shell is observed with `80px 0px` padding and an editorial-content card with `40px` padding, but neither value is promoted into the compact token scale because their roles are isolated. No grid, breakpoint, or max-width is claimed without an explicit measurement.

### Responsive Behavior

The supplied evidence does not provide a viewport matrix or mobile/desktop comparison. Responsive breakpoints, navigation collapse behavior, touch-target policy, and image-art-direction rules remain unresolved rather than inferred from the marketing layout.

## Elevation & Depth

The captured component samples report `box-shadow: none`. Transparent wrappers and photography carry much of the page’s visual weight; this evidence does not establish a global black-canvas policy, overlay scale, modal treatment, or image gradient system. Treat depth beyond the observed no-shadow samples as unresolved.

## Motion & Easing

No duration, easing, transition, or reduced-motion value was measured in the supplied evidence. Do not derive a motion scale from cinematic imagery or the corporate narrative.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.lamborghini.com/ko-en · https://www.lamborghini.com/en-en · https://www.lamborghini.com/en-en/models
**Tier 2 sources:** https://getdesign.md/lamborghini · https://styles.refero.design/style/c9c5be5a-aaa1-4338-9681-8378d2e24fbd
**Conflicts unresolved:** none

## Components

All values below are selector-level observations from the supplied public marketing capture. It reports seven successful tab interactions. The collector’s `selected` / `tab-selected` component labels are retained as provenance; they do not establish a general button-hover, menu, dialog, or form-state specification.

### Marketing actions

**Accent CTA**
- Background: `#ffc000`
- Text: `#000000`
- Radius: `0px`
- Padding: `24px`
- Font: `16px / 400 / LamboType`
- Use: `home::[data-omd-capture="45"]` on public marketing routes
- States: Captured in selected/tab-selected surface context; no activation transition was asserted

**Outline action**
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Radius: `0px`
- Padding: `24px`
- Font: `16px / 400 / LamboType`
- Use: `home::[data-omd-capture="46"]` on public marketing routes
- States: Captured in selected/tab-selected surface context; no activation transition was asserted

### Navigation and selection

**Menu hierarchy link**
- Text: `#ffffff`
- Radius: `0px`
- Padding: `16px 0px`
- Font: `18px / 400 / LamboType`
- Use: `home::[data-omd-capture="4"]`, `.burger-menu-link.lev-2-toggler`
- States: Default capture only; a menu open/close transition was not captured

**Selected tab**
- Text: `#ffffff`
- Border: `0px 0px 2px #ffc000`
- Radius: `0px`
- Padding: `24px`
- Font: `16px / 400 / LamboType`
- Use: `home::[data-omd-capture="41"]`, `.react-tabs__tab.react-tabs__tab--selected`
- States: Selected and tab-selected after an observed tab interaction

### Editorial content

**News-card image wrapper**
- Text: `#202020`
- Radius: `0px`
- Padding: `0px`
- Use: `home::div.card-news__image-wrapper`; no card fill, border, shadow, or state is claimed from this transparent wrapper

### States

The only observed interaction class is tabs: seven captured interactions produced `selected` / `tab-selected` provenance. Disabled carousel-control styling appears in component samples, but no disabled behavior was exercised. Empty, loading, error, success, skeleton, menu, dialog, form-validation, and toast states were not captured and are intentionally omitted.

Live state probe, 2026-10-16 (`https://www.lamborghini.com/ko-en`), `accent-cta`: pressed — bg #997300; focus — outline #1e90ff solid 2px.

## Do's and Don'ts

### Do

- Keep an adaptation scoped to the public-marketing evidence: LamboType, 0px control radius, and the explicitly observed yellow/white/charcoal roles.
- Preserve selector-level provenance when reusing the 24px accent action, white outline action, or selected tab.
- Use a properly licensed LamboType asset, or omit the specimen rather than substituting a system face.
- Treat the 2024 official identity announcement as brand context, not a release of a reusable design system.

### Don't

- Do not apply these marketing observations to configurator, owner, vehicle, dealer, checkout, or documentation UI without source evidence from that domain.
- Do not turn `#917300` into a hover token, or turn the observed color list into success/error/link semantics; those behaviors were not captured.
- Do not promote `Lambo-icons`, Roboto, Helvetica Neue, or Arial to a verified Lamborghini UI family.
- Do not invent menu, dialog, form-validation, carousel, or motion variants beyond the selected tab interaction that was observed.

## Voice & Tone

The official manifesto frames Lamborghini as brave, unexpected, and authentic, with “Driving Humans Beyond” as its mission. The live public navigation and model marketing use concise, uppercase labels; the corporate-look announcement describes the identity change as a clearer expression of those values. This supports a direct, declarative marketing register—not an invented support, legal, or product-error voice.

| Context | Source-backed direction |
|---|---|
| Brand statement | “Driving Humans Beyond” and a leadership position in the unexpected |
| Public marketing navigation | Brief uppercase labels such as “MODELS”, “OWNERSHIP”, and “NEWS” |
| Product storytelling | Model-focused, editorial presentation on the captured public pages |

## Agent Prompt Guide

Use this reference as a constrained public-marketing direction, not an implementation kit for a vehicle or ownership product. A safe prompt names the source boundary and the measured inputs: “Create a public automotive editorial action with LamboType only when licensed, `#ffc000` background, `#000000` text, 0px radius, 24px padding, and no unobserved hover behavior.” Do not request a generic Lamborghini configurator, error state, account flow, or modal from this evidence.

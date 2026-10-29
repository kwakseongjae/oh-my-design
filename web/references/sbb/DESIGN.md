---
name: SBB
colors:
  primary: '#eb0000'
  primary-hover: '#c60018'
  primary-pressed: '#a20013'
  background: '#ffffff'
  surface: '#f6f6f6'
  foreground: '#686868'
  content: '#212121'
  header-ink: '#151515'
  label: '#767676'
  border: '#e5e5e5'
  secondary-hover: '#444444'
  secondary-pressed: '#5a5a5a'
  focus: '#000000'
typography:
  action:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 24.5px
    letterSpacing: 0.42px
  journey:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 31.5px
    letterSpacing: 0.54px
  navigation:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0.48px
rounded:
  card: 8px
components:
  primary-cta:
    type: button
    backgroundColor: '#eb0000'
    textColor: '#ffffff'
    height: 48px
    padding: 4px 32px
    typography: 14px / 700
    hover: 'bg #c60018; fg #f6f6f6; ::before grows from 193.391px x 48px to 197.391px x 52px and shortens its shadow'
    pressed: 'bg #a20013; fg #e5e5e5; ::before returns to 193.391px x 48px and its shadow becomes transparent'
    focus: '::before outline 1px solid #000000 with 3px offset, reached at Tab 21'
    use: 'Meine Billette, href /de/profil/bestellungen. Pill radius from calc(infinity * 1px); raw browser serializations differ between runs, so no finite radius token. Rest pseudo-border: 3px solid #eb0000.'
  secondary-cta:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#212121'
    height: 48px
    padding: 4px 32px
    typography: 14px / 700
    hover: 'bg stays #ffffff; fg #444444; ::before grows from 162.844px x 48px to 166.844px x 52px and shortens its shadow'
    pressed: 'bg #f6f6f6; fg #5a5a5a; ::before returns to 162.844px x 48px and its shadow becomes transparent'
    focus: '::before outline 1px solid #000000 with 3px offset, reached at Tab 22'
    use: 'Alle Angebote, href https://www.sbb.ch/de/billette-angebote/kaufen.html. Pill; rest pseudo-border 2px solid #e5e5e5.'
  status-link:
    type: button
    textColor: '#686868'
    rounded: 0px
    height: 28px
    padding: 0px
    typography: 16px / 400
    hover: 'foreground, underline and icon wrapper become #c60018'
    pressed: 'foreground, underline and icon wrapper become #a20013'
    focus: '1px solid #000000 outline, 3px offset; radius changes from 0px to 5px; Tab 14'
    use: Aktuelle Betriebslage, href /de/planen/bahnverkehrsinfo. Underlined at rest. Own background is transparent over a measured white backing; kept in prose.
  journey-origin:
    type: input
    textColor: '#212121'
    rounded: 0px
    height: 31.5px
    padding: 0px
    typography: 18px / 400
    hover: No change within self, its pseudo-elements and three ancestor levels; :hover matched
    pressed: 'Ancestor up2 bottom border changes from 1px solid #e5e5e5 to 1px solid #212121'
    focus: 'Ancestor up2 bottom border changes from 1px solid #e5e5e5 to 1px solid #212121; Tab 9'
    use: Von input#origin[role=combobox]. Height is the input itself, not its enclosing journey field. Own background is transparent over a measured white backing; kept in prose.
  offer-card:
    type: card
    backgroundColor: '#f6f6f6'
    textColor: '#212121'
    rounded: 8px
    height: 96.8px
    padding: 16px 24px
    hover: 'Card shadow: color(srgb 0.552941 0.552941 0.552941 / 0.2) 0px 4px 32px 0px, color(srgb 0.552941 0.552941 0.552941 / 0.1) 0px 16px 128px 0px'
    pressed: 'Same measured card shadow as hover: 0px 4px 32px 0px at alpha 0.2 plus 0px 16px 128px 0px at alpha 0.1, both color(srgb 0.552941 0.552941 0.552941)'
    focus: 'Inner overlay anchor: 1px solid #000000 outline, 3px offset; Tab 15. Container focus itself is unmeasured.'
    use: 'Halbtax PLUS. Title #212121, description #686868. Visual container and interactive overlay were measured separately; browser-default overlay ink is excluded.'
  menu-button:
    type: button
    textColor: '#151515'
    height: 48px
    hover: 'Inner ::before bg #f6f6f6, 115.031px x 52px; inner wrapper translates up 1px'
    pressed: 'Inner ::before bg #e5e5e5, 111.031px x 48px; wrapper is at its rest position'
    focus: 'Inner ::before outline 1px solid #000000 with 3px offset; Tab 3'
    use: Menü, sbb-header-button#nav-trigger. Foreground is the visible inner text span. Host radius 0px, padding 0px and font 16px/400 describe the host only; visible label font metrics were not extracted. Own background is transparent over a measured white backing; kept in prose.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: SBB
---

# Design System Inspiration of SBB

## Overview

### Visual Theme & Atmosphere

SBB is Switzerland’s federal railway company, established in 1902. SBB.ch is one of its channels for buying public-transport tickets and travelcards and getting travel advice. Its published brand values connect human dimension, comfort, experience, sustainability and future viability with bringing people and places together. ([History](https://company.sbb.ch/en/company/125-years/history.html), [Passenger Division](https://company.sbb.ch/en/company/about-us/organisation/passenger-division.html), [brand](https://company.sbb.ch/en/company/about-us/brand-sbb.html))

Build around a clear red identifier and a restrained neutral interface. SBB’s colour guidance explicitly calls for reduction and reserves red for important navigation elements. Its logo guidance favours the complete symbol and wordmark within a closely managed umbrella brand. On the measured homepage, that identity appears as a red journey-search band, white search panel, pale offer cards and compact pill actions. ([Colours](https://digital.sbb.ch/en/foundation/colors/base-colors/), [logo](https://digital.sbb.ch/en/foundation/brand/logo/); homepage viewport capture, 1440×1000, 2026-10-29.)

The current digital evolution is Lyne: SBB’s web-component design system for customer and employee applications. Its public migration guidance recommends moving products that will operate beyond 2028 to Lyne, as maintenance of the older Angular library ends on 31 December 2028. This carries the recognisable identity into reusable web components; the measured homepage itself contains `sbb-*` custom elements. ([Lyne](https://digital.sbb.ch/en/design-system/lyne/what-is-lyne/); live survey.)

Primary observed tasks are entering a journey origin and destination, checking operating conditions, browsing travel offers and opening existing tickets. No journey was submitted.

### Brand Narrative

The connection between physical railway and digital service is explicit in SBB’s umbrella-brand guidance: the complete symbol and wordmark identify the company across applications. Its brand page connects that identity with bringing people, goods and places together. In this reference, the measured red action and restrained neutral cards are the practical expression of that continuity. ([Logo](https://digital.sbb.ch/en/foundation/brand/logo/), [brand values](https://company.sbb.ch/en/company/about-us/brand-sbb.html); homepage measurements.)

### Principles

The official UX-principles page names user-centred, recognisable, inclusive, reduced, holistic, self-explanatory, task-oriented and appropriate design. Apply the documented ideas of consistency across channels, showing only what is necessary, involving real users and guiding them in their language. These are published principles, not usability outcomes established by this capture. ([Principles](https://digital.sbb.ch/en/principles/ux-principles/overview/))

### Personas

No persona research was performed.

## Colors

The following values come from the live homepage census and control states. Published base-colour guidance independently confirms the red and neutral palette. The `foreground` role follows the sampled paragraphs rather than the most common colour across all text.

| Role | Value | Observed use |
|---|---|---|
| Primary | `#eb0000` | Red primary action; `--sbb-color-red`, `--sbb-color-primary` and `--sbb-color-brand` |
| Primary hover | `#c60018` | Primary action background and operating-status link ink |
| Primary pressed | `#a20013` | Primary action background and operating-status link ink |
| Background | `#ffffff` | White surfaces and secondary action at rest |
| Surface | `#f6f6f6` | Offer-card background; primary hover label; secondary pressed background |
| Foreground | `#686868` | Five of six sampled paragraph colours; card description and operating-status link |
| Content | `#212121` | Card title and journey input; the remaining sampled paragraph |
| Header ink | `#151515` | Visible inner label of the Menü control |
| Field label | `#767676` | Von and Nach labels in the survey |
| Border | `#e5e5e5` | Journey divider and secondary button’s pseudo-border; primary pressed label |
| Secondary hover ink | `#444444` | Alle Angebote label on hover |
| Secondary pressed ink | `#5a5a5a` | Alle Angebote label while pressed |
| Keyboard outline | `#000000` | Measured solid outlines on links and button pseudo-elements |

The census visited 2,488 elements and 382 open shadow roots. It reported backgrounds white ×18, milk ×7 and red ×3; text charcoal ×33, granite ×24, metal ×2 and white ×1; borders charcoal ×4 and cloud ×1. These are the collector’s element counts, not pixel coverage. Only the colours returned by the census are counted.

The root’s `--sbb-font-color-default` resolves to the custom-property string `light-dark(#212121,#fff)`. That declaration does not override the measured paragraph result. Framework ring defaults and consent styling are excluded.

## Typography

Keep the evidence classes separate:

| Evidence class | Verified finding |
|---|---|
| Official product-use statement | No opened public prose page explicitly names a product font. Product use below is established by live evidence. |
| Live-loaded | `document.fonts` reports **SBB 400 normal** and **SBB 700 normal** loaded. The measured inputs, links and button labels use the family SBB. Only SBB is exported as the family token. |
| Official distributed declarations | The opened SBB theme stylesheet declares SBB 400, 700 and 300, respectively referencing `SBBWeb-Roman.woff2`, `SBBWeb-Bold.woff2` and `SBBWeb-Light.woff2` under `https://cdn.app.sbb.ch/fonts/v1_9_subset/`. |
| Declared-only faces | SBB 300 is not in the loaded list. The live stylesheet walk also finds the separate families SBBWeb Bold, SBBWeb Light, SBBWeb Roman, SBBWeb Thin and SBBWeb Ultralight, each with WOFF2/WOFF declarations under `/fonts/v1_6_subset/`; none is in the loaded list under those family names. No specimen is assigned to them. |
| Unresolved | Font licensing and rights to redistribute the binaries were not established. No heading family was returned by the census (`h1: null`). |

The body and button CSS stacks name SBB first and additional fallback families afterward; those fallback names are declarations, not loaded-face evidence. They are not exported or rendered as a substitute. **Substitute: none chosen.** Font binaries were not downloaded. ([Opened theme stylesheet](https://digital.sbb.ch/assets/css/standard-theme.css?v=b6bb97ee); live census `fontFaces` and `fonts`.)

| Measured element | Size / weight | Line height | Tracking |
|---|---|---|---|
| Meine Billette and Alle Angebote | 14px / 700 | 24.5px | 0.42px |
| Von journey input | 18px / 400 | 31.5px | 0.54px |
| Aktuelle Betriebslage link | 16px / 400 | 28px | 0.48px |

These are control metrics, not a measured heading or paragraph scale. The root separately exposes `--sbb-typo-line-height-text: 1.75`, `--sbb-typo-line-height-heading: 1.4`, text tracking `0.03em` and heading tracking `0em`. Their availability alone does not prove application to every element.

## Layout

The desktop viewport capture places the journey panel across the lower edge of a red band, followed by the operating-status link and offer cards. Compact offers occupy the left column and larger GA and Halbtax cards occupy the right. Survey card rectangles begin at x=120px and x=729px, each 576.5px wide; the compact card begins at y=558px. These are observations at 1440×1000, not responsive rules.

The live root exposes `--sbb-layout-base-page-max-width: 75rem`, current page offset `7.5rem`, large grid gutter `2rem`, and `--sbb-header-height: 6rem`. Fixed spacing is based on `--sbb-spacing-fixed-1x: 0.25rem`; measured examples include 2x `0.5rem`, 4x `1rem`, 6x `1.5rem` and 8x `2rem`. The controls independently show 32px action padding and 16px 24px card padding.

### Responsive Behavior

Only desktop 1440×1000 was measured; no mobile layout, breakpoint transition or touch state was verified.

## Elevation & Depth

The primary action’s rest `::before` shadow is:

```css
color(srgb 0.776471 0 0.0941176 / 0.2) 0px 1px 4px 0px,
color(srgb 0.921569 0 0 / 0.2) 0px 2px 16px 0px
```

The secondary action uses the same rest geometry with neutral colours `color(srgb 0.741176 0.741176 0.741176 / 0.2)` and `color(srgb 0.803922 0.803922 0.803922 / 0.2)` in that order. On hover, both actions shorten the layer geometries to `0px 1px 2px 0px` and `0px 1px 8px 0px`. Press makes the pseudo-shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px`.

The Halbtax PLUS card has no rest shadow. Hover and press both produce:

```css
color(srgb 0.552941 0.552941 0.552941 / 0.2) 0px 4px 32px 0px,
color(srgb 0.552941 0.552941 0.552941 / 0.1) 0px 16px 128px 0px
```

These are component measurements; they do not establish a universal elevation scale.

## Motion & Easing

Measured computed transitions on the two action anchors list colour, background colour and vertical padding with **0.08s `cubic-bezier(0.47, 0.1, 1, 0.63)`**. The card container lists box-shadow with **0.04s** and the same easing. The menu comparison’s longest observed transition is **240ms**; no menu easing is inferred from that duration. Samples settled for 900ms, beyond all reported transition lengths. Reduced-motion behaviour and animation keyframes were not tested.

## Components

**Primary action — Meine Billette.** The anchor to `/de/profil/bestellungen` is 193.4×48px, with 4px 32px padding and SBB 14px/700. Rest colours are `#eb0000` / `#ffffff`. Its own border and shadow are `none`; the painted `::before` carries a 3px red border and two shadow layers. Preserve the pill shape: `--sbb-button-border-radius` is `calc(infinity * 1px)`. Raw radius serializations were `1.67772e+07px` in the survey and `3.35544e+07px` in the states run; neither is exported as a finite radius token.

**Secondary action — Alle Angebote.** The anchor to `https://www.sbb.ch/de/billette-angebote/kaufen.html` is 162.8×48px, with the same padding, type metrics and pill construction. Rest colours are `#ffffff` / `#212121`; its `::before` has a 2px `#e5e5e5` border and a neutral two-layer shadow.

**Navigation link — Aktuelle Betriebslage.** The anchor to `/de/planen/bahnverkehrsinfo` is 216.8×28px, with 0px padding and radius, transparent background, `#686868` ink and a matching underline. Its measured font is SBB 16px/400.

**Journey search — Von.** `input#origin[role="combobox"]` is 657.4×31.5px, with 0px padding and radius, transparent background, `#212121` ink and SBB 18px/400. The 31.5px measurement belongs to the input, not its enclosing field. A divider two ancestors above the input is 1px `#e5e5e5` at rest.

**Offer card — Halbtax PLUS.** The visual `sbb-card` is 576.5×96.8px with 16px 24px padding, an 8px radius, `#f6f6f6` background and no rest shadow or border. The title is `#212121`; the description is `#686868`. The container inherits SBB 16px/400, but the title’s size and weight were not extracted. The covering anchor has 0px padding and an 8px radius. Its browser-default link colour belongs to a clipped screen-reader label, not the visible title.

**Header — Menü.** `sbb-header-button#nav-trigger` is 111×48px. Its host has 0px padding and radius, transparent background, inherited `#212121` and SBB 16px/400. The visible inner text span is `#151515`; its own font metrics were not extracted. Do not treat the host’s zero radius as the shape of its painted interaction layer.

The status link, journey input and menu host each have a transparent own background over a measured white backing. Their transparency is preserved here in prose; the machine component records omit a standalone background colour so it cannot be read without that backing context.

### States

All six original targets had real hover, held-pointer press and keyboard focus measurements, with at least 900ms settling. Hover and active pseudo-classes matched. The first Tab walk reached all controls in 23 presses. No disabled state was measured or exported.

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Meine Billette | Background `#c60018`, label `#f6f6f6`; `::before` 193.391×48px → 197.391×52px; border becomes `#c60018`; shorter shadow from Elevation & Depth | Background `#a20013`, label `#e5e5e5`; pseudo-layer back to 193.391×48px, border becomes `#a20013`, transparent zero shadow | Tab 21: 1px solid `#000000` outline, offset 3px, on `::before` |
| Alle Angebote | Background stays white; label `#444444`; `::before` 162.844×48px → 166.844×52px; shorter shadow | Background `#f6f6f6`, label `#5a5a5a`; pseudo-layer back to 162.844×48px, transparent zero shadow | Tab 22: same solid 1px black outline and 3px offset on `::before` |
| Aktuelle Betriebslage | Ink, underline and icon wrapper `#686868` → `#c60018` | Ink, underline and icon wrapper become `#a20013` | Tab 14: own 1px solid black outline, 3px offset; radius 0px → 5px |
| Von input | No change across self, its pseudo-elements and three ancestor levels; zero descendants; `:hover` true | Ancestor up2 bottom border `#e5e5e5` → `#212121`, still 1px solid | Tab 9: same ancestor-border change |
| Halbtax PLUS card | Shadow from Elevation & Depth; no other compared change across the container, its 17 descendants and three ancestor levels | Same card shadow. Internal overlay and clipped label change browser-default ink; visible title and description retain their measured colours within this comparison | Tab 15: overlay anchor gets a 1px solid black outline, 3px offset. The container itself was not focused |
| Menü | Inner `::before` painted milk, 115.031×52px; inner wrapper matrix changes to a 1px upward translation | Inner `::before` cloud, 111.031×48px; wrapper at rest position | Tab 3: inner `::before` draws a 1px solid black outline, 3px offset |

The card’s second measurement deliberately covers its visual container. It reports container focus **UNMEASURED** because Tab focused the inner anchor; the first measurement supplies that anchor’s focus evidence. These scopes remain distinct.

The Von focus crop also shows an outline around the enclosing field. Its owning element and dimensions were not resolved by the input-target comparison, so only the measured ancestor-border change is exported for that input.

The comparison includes each target, its pseudo-elements, recorded descendants and their pseudo-elements, and three ancestor levels. It checks colour, background, border, outline, shadow, opacity, transform, filter, visibility, size, text decoration, backgrounds, masks, image sources and available SVG internals. It does not prove absence of changes in siblings, closed shadow roots, cross-origin frames, canvas, video or external sprite contents. The visible card content was included only by the second container measurement. No exported focus is an `outline-style: auto` browser ring.

## Do's and Don'ts

- Use the measured red progression for the primary action: `#eb0000` → `#c60018` → `#a20013`.
- Pair white and pale neutral surfaces with dark titles and granite descriptions, following the measured card.
- Preserve pill actions and 8px offer cards as distinct shapes.
- Reproduce pseudo-element borders, shadows and focus outlines as part of the control, rather than reading only its own border or shadow.
- Use the complete logo where possible, following SBB’s [published logo guidance](https://digital.sbb.ch/en/foundation/brand/logo/).
- Keep framework defaults, consent styles and the card’s invisible browser-default link ink out of the brand palette.

## Voice & Tone

SBB’s public UX-writing guidance asks for concise, clear, action-oriented text that reduces uncertainty. Its control-writing page recommends one to four words for button labels, descriptive links and sentence case. Keep explanations beside the button and account for longer translations into French and Italian. ([UX writing](https://digital.sbb.ch/en/foundation/language/about/), [buttons and links](https://digital.sbb.ch/en/foundation/language/button-and-links/))

## Agent Prompt Guide

“Build a 48px SBB primary link using the loaded SBB family at 14px/700, 24.5px line height and 0.42px tracking. Give it 4px 32px padding, pill corners, `#eb0000` background and `#ffffff` label. Hover uses `#c60018` with `#f6f6f6` text and expands the painted pseudo-layer by 4px in both dimensions. Press uses `#a20013` with `#e5e5e5` text and removes the pseudo-shadow. Keyboard focus draws a 1px solid black outline with a 3px offset.”

“Build the measured Halbtax PLUS offer card: an 8px radius, `#f6f6f6` surface, 16px 24px padding, `#212121` title and `#686868` description. Apply the two-layer card shadow from Elevation & Depth on hover and press. Place a 1px black focus outline, offset 3px, on the interactive overlay anchor.”

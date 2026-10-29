---
name: Withings
colors:
  primary: '#6784fe'
  primary-hover: '#5570e0'
  foreground: '#0f0f0f'
  background: '#ffffff'
  sand: '#f2eeea'
  beige: '#eae6e0'
  neutral: '#c9c9c9'
  neutral-dark: '#4e4e4e'
  neutral-light: '#f7f7f7'
  error: '#d93421'
  success: '#62e795'
  lowstock: '#fdac29'
  gradient-rose: '#e46287'
  gradient-violet: '#8372c2'
typography:
  action:
    fontSize: 16px
    fontWeight: 500
    use: Live-loaded Aeonik; Commencez votre suivi link and Toutes les montres link at rest, line-height 19.2px.
  navigation:
    fontSize: 16px
    fontWeight: 400
    use: Live-loaded Aeonik; Boutique header link at rest, line-height 26.7429px.
  input:
    fontSize: 14px
    fontWeight: 400
    use: Live-loaded Aeonik; Votre e-mail footer input at rest, line-height 16.8px.
rounded:
  none: 0px
  control: 16px
  testimonial: 6px
components:
  primary-cta:
    type: button
    backgroundColor: '#6784fe'
    textColor: '#ffffff'
    rounded: 16px
    height: 51.2px
    padding: 16px 24px
    typography: 16px / 500
    hover: 'Background and the 1px inset edge both turn #5570e0 (rgb(85, 112, 224)), the declared --color-primary-hover.'
    pressed: 'Same as hover with the pointer down: background and 1px inset edge #5570e0.'
    focus: 'Authored 1px solid #6784fe outline, offset 3px; background unchanged.'
    use: 'Commencez votre suivi, the hero''s link to the store collection, 218px wide. A link styled as the primary action. Rest edge: rgb(103, 132, 254) 0px 0px 0px 1px inset.'
  secondary-link:
    type: button
    textColor: '#6784fe'
    rounded: 0px
    height: 20.2px
    padding: 0px
    typography: 16px / 500
    hover: 'The 1px #6784fe bottom border turns transparent and the inline caret moves 4px right (matrix(1, 0, 0, 1, 4, 0)).'
    pressed: Same as hover with the pointer down.
    focus: 'Authored 1px solid #6784fe outline, offset 3px.'
    use: Toutes les montres, a text link with a 1px bottom border and a caret, to the watches collection.
  nav-store:
    type: button
    textColor: '#0f0f0f'
    rounded: 0px
    height: 44px
    padding: 0px
    typography: 16px / 400
    focus: 'Authored 1px solid #0f0f0f outline, offset 3px.'
    use: Boutique, a header navigation link. Hover and pressed measured unchanged across the link, its label and 3 ancestor levels.
  search-trigger:
    type: button
    textColor: '#0f0f0f'
    rounded: 0px
    height: 44px
    padding: 0px
    typography: 14px / 400
    focus: 'Authored 1px solid #0f0f0f outline, offset 2px.'
    use: Rechercher, the 44px header search icon button; its text label is hidden. Hover and pressed measured unchanged within the compared scope.
  watch-card:
    type: card
    rounded: 0px
    height: 327.4px
    typography: 14px / 400
    focus: 'Authored 1px solid #6784fe outline, offset 2px.'
    use: ScanWatch 2 product card link, 260.2px wide; its own label is visually hidden and the visible product content sits outside the link. Hover and pressed unchanged within the link's own subtree.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Aeonik
---

# Design System Inspiration of Withings

## Overview

### Visual Theme & Atmosphere

Withings makes connected health devices for everyday use, including scales, hybrid watches, blood-pressure monitors and sleep systems. Its company history begins in 2008 and records its first smart scale in 2009. The company describes its products as “Simple. Elegant. Durable.”, connecting unobtrusive product design with long-term health tracking. [Company and history](https://www.withings.com/en-us/pages/about-us)

The measured French storefront expresses that combination through Aeonik, near-black text, white and sand surfaces, and violet-blue actions. The principal shopping link has generous 16px corners, while navigation links remain square. This is a useful contrast for a reference implementation: quiet surfaces and regular-weight type around a clear, rounded action.

The service is developing beyond collecting measurements: Withings’ current support documentation describes a subscriber-only Health Assistant, contextual measurement explanations and long-term Smart Trends. That provides product context for the storefront’s emphasis on following health over time; these website measurements do not describe the app’s interface tokens. [Withings Intelligence](https://support.withings.com/hc/en-us/articles/51268734350353-Withings-App-Withings-Intelligence-Health-Assistant)

### Brand Narrative

Withings’ own timeline records Nokia’s acquisition in 2016 and Eric Carreel’s reacquisition and restoration of the Withings name in 2018. The same company page connects everyday devices, continuing measurements and app guidance. The current Health Assistant documentation extends that direction into personalised interpretation and trends. This reference draws its visual values from the French storefront. [History](https://www.withings.com/en-us/pages/about-us), [current service](https://support.withings.com/hc/en-us/articles/51268734350353-Withings-App-Withings-Intelligence-Health-Assistant)

### Principles

The company’s published emphasis on everyday use, durable product design and sustained health tracking provides context for a restrained interface. As an implementation inference from the measured controls, give the main action a clear colour and generous shape, while keeping surrounding navigation quieter. This is not an attributed set of internal design principles. [Company](https://www.withings.com/en-us/pages/about-us)

### Personas

No persona research was verified.

## Colors

These are values from the live storefront’s computed root custom properties, with rendered examples identified separately. They are not a published brand specification.

| Role | Value | Evidence and use |
|---|---|---|
| Primary | `#6784fe` | `--color-violet`, `--color-primary`; the primary link’s measured rest background. |
| Primary hover | `#5570e0` | `--color-primary-hover` and `--color-primary-button-hover-background`; the primary action's measured hover and pressed background and inset edge. |
| Foreground | `#0f0f0f` | `--color-foreground`, `--color-black`; the most common paragraph ink, 16 paragraphs. |
| Background | `#ffffff` | `--color-background`, `--color-white`; primary action label; the ground behind the header link and the search trigger (crop pixels). |
| Sand | `#f2eeea` | `--color-sand`; also present in 8 background census entries, and the ground behind the secondary link and the watch card (crop pixels `rgb(242, 238, 234)`). |
| Beige | `#eae6e0` | `--color-beige`; root value, normalized from uppercase hex. |
| Neutral | `#c9c9c9` | `--color-neutral`, `--color-border`. |
| Neutral dark | `#4e4e4e` | `--color-neutral-dark`. |
| Neutral light | `#f7f7f7` | `--color-neutral-light`; also the input-hover background declaration. |
| Error / out of stock | `#d93421` | `--color-error`, `--color-outofstock`, `--color-compare-at-price`; declarations, no error state tested. |
| Success / in stock | `#62e795` | `--color-success`, `--color-instock`; declarations, no success state tested. |
| Low stock | `#fdac29` | `--color-lowstock`; declaration. |
| Gradient rose | `#e46287` | `--color-gradiant-rose`; the source spells “gradiant”. |
| Gradient violet | `#8372c2` | `--color-gradiant-violet`; declaration, no gradient geometry inferred. |

Muted paragraph ink is `rgba(15, 15, 15, 0.6)`, counted on 9 paragraphs. Keep that alpha relationship explicit instead of treating it as an opaque grey swatch. The census includes embedded interfaces; it does not establish a brand role for every frequent colour.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product use | No opened first-party writing names the website or app typeface. |
| Live-loaded | `document.fonts` reports Aeonik 400, 500 and 700, normal. Body and h1 declare `Aeonik, sans-serif`; all six selected storefront controls compute to Aeonik. This supports Aeonik for this website reference. |
| Official distributed assets | The live stylesheet exposes Withings-hosted WOFF2 sources for Aeonik Regular, Medium, Bold and RegularItalic. No separately distributed font kit or font licence was opened. |
| Declared-only | Aeonik 400 italic is declared but absent from the loaded-face census. Poppins-Klaviyo-Hosted and GTStandard-M are also declared, unloaded embed/platform faces; they are excluded from the brand family and receive no specimen. |
| Unresolved | `AeonikFont 500 normal` is also loaded, but its source and connection to the named Aeonik files are not resolved by the census. It receives no family token or specimen. The census’s first-button family is Arial, corresponding to the regional dialog’s close button, not the selected storefront actions. |

Substitute: none chosen.

Aeonik’s loaded normal faces are served by `www.withings.com/cdn/shop/files/`: `Aeonik-Regular.woff2`, `Aeonik-Medium.woff2` and `Aeonik-Bold.woff2`. These are observed delivery paths, not permission to redistribute the files.

Measured action text is 16px/500 with a 19.2px line height. The Boutique navigation link uses 16px/400 and 26.7429px line height. The footer email field uses 14px/400 and 16.8px line height. Root heading declarations include h1 `clamp(3.25rem, 7.2vw, 4.5rem)` and h2 `clamp(2.5rem, 5.2vw, 3.25rem)`, both weight 400 and line-height 1.2; those declarations are distinct from measured rendered heading sizes.

## Layout

The desktop survey records a 70px sticky header with 44px navigation and icon targets. The logo and the first product-card column begin at x = 32px. Product links begin at x = 32px, 308px and 584px in the first row, each 260.2px wide. Preserve those observations as one desktop composition, rather than inferring a universal column grid.

A photograph-backed hero precedes the product sections in the captured viewport. Collection tabs and a separate “Toutes les montres” link provide two levels of browsing. The DOM survey also identifies health-need cards and testimonial product links further down the page. The regional dialog and promotional popup obscure parts of the worker's visual evidence; the re-measure closed both.

### Responsive Behavior

Only desktop 1440 × 1000 was captured. The h1/h2 clamp declarations under Typography are verified CSS, but mobile layout, breakpoints and touch states were not measured.

## Elevation & Depth

The primary action’s exact rest shadow is `rgb(103, 132, 254) 0px 0px 0px 1px inset`: an edge treatment rather than an elevated shadow. The five other selected controls have `box-shadow: none` at rest. The footer input’s boundary belongs to its wrapper.

## Motion & Easing

Computed rest-style metadata for the primary link is exactly `color, box-shadow, background-color 0.125s, 0.125s, 0.125s ease-in-out, ease-in-out, ease-in-out 0s, 0s, 0s`. The secondary link reports `border-color 0.125s ease-in-out 0s`. The probe waited past the longest transition in each control's scope (125ms on the primary action and the secondary link) before sampling, so the colour change and the caret's slide run on these declarations. The caret's own transition string sits on a descendant and was not recorded. No cubic-bezier curve is declared; the easing is the `ease-in-out` keyword.

---

First-party sources opened on 2026-10-29: [French storefront](https://www.withings.com/fr/fr/) (survey and rest styles); [company and history](https://www.withings.com/en-us/pages/about-us); [legal notice](https://www.withings.com/fr-fr/policies/legal-notice) (Withings France SA, Issy-les-Moulineaux); [newsroom and official logo listing](https://www.withings.com/en-us/pages/press); [Withings Intelligence](https://support.withings.com/hc/en-us/articles/51268734350353-Withings-App-Withings-Intelligence-Health-Assistant). The [nonsense-path control](https://www.withings.com/zz-this-does-not-exist) returned a curl challenge twice; in a fresh-profile browser it rendered a real 404 (`404 Not Found – Withings`, after a redirect to `/en-us/zz-this-does-not-exist`).

## Components

The following are computed rest observations from identified DOM controls; their states follow the table. The worker's states run was blocked by a regional shipping dialog and a promotional popup, so the states below come from a re-measure with both closed.

| Control | Rest geometry and type | Rest appearance |
|---|---|---|
| Primary action link, “Commencez votre suivi” | 218 × 51.2px; radius 16px; padding 16px 24px; Aeonik 16px/500 | Background `#6784fe`, label `#ffffff`; no border; a 1px inset shadow in the same violet-blue. Links to the store collection. |
| Secondary action link, “Toutes les montres” | 153.7 × 20.2px; radius 0px; padding 0px; Aeonik 16px/500 | Transparent over the sand `#f2eeea` section; label and 1px bottom border `#6784fe`; an inline caret. Links to the watches collection. |
| Header navigation link, “Boutique” | 87.8 × 44px; radius 0px; padding 0px; Aeonik 16px/400 | Transparent on measured white; visible child label `#0f0f0f`; no border or shadow. |
| Search trigger, “Rechercher” | 44 × 44px; radius 0px; padding 0px; Aeonik 14px/400 | Transparent on measured white; inline search icon stroke `#0f0f0f`; no border or shadow. The text label is hidden. |
| Watch card link, “ScanWatch 2 42mm Bleue & Argent” | 260.2 × 327.4px in the states run; radius 0px; padding 0px; Aeonik 14px/400 | Transparent over the sand `#f2eeea` card ground; own colour `#6784fe`, but its child label is visually hidden. The visible product content is outside the link’s descendant subtree; this colour is not claimed for the visible product title. |
| Footer input, placeholder “Votre e-mail” | 281.2 × 42.4px; radius 16px; padding 12.8px 20px; Aeonik 14px/400 | Background `#0f0f0f`, foreground `#ffffff`; no own border or shadow. Its immediate wrapper has a 1px white border. |

**States.** The primary action darkens on hover and press: its background and its 1px inset edge both turn `#5570e0`, the declared `--color-primary-hover`. The secondary link drops its underline (the bottom border turns transparent) and slides its caret 4px to the right. Keyboard focus is an authored 1px solid outline, not the browser ring: `#6784fe` offset 3px on the primary action and the secondary link, `#6784fe` offset 2px on the product card, `#0f0f0f` offset 3px on Boutique and offset 2px on the search icon. Boutique, the search icon and the product card did not change on hover or press within the compared scope. The footer email field changed in none of the three states, so it stays a rest description.

The survey also records testimonial product links with 6px corners and 11.2px padding. This is the source of the separate testimonial radius; it does not describe the full watch-card container. No visible search input or distinct secondary button appeared in the survey; the search trigger and secondary action link are the measured alternatives.

### States

Measured in a fresh-profile browser at 1440 × 1000 with the regional shipping dialog and the promotional popup closed by their own close buttons (no country was chosen):

- **Primary action:** hover and pressed turn the background and the 1px inset edge from `#6784fe` to `#5570e0`; focus adds a 1px solid `#6784fe` outline offset 3px.
- **Secondary link:** hover and pressed make the 1px bottom border transparent and move the caret 4px right; focus adds a 1px solid `#6784fe` outline offset 3px.
- **Boutique** and **search icon:** no change on hover or press; focus adds a 1px solid `#0f0f0f` outline, offset 3px and 2px respectively.
- **Product card link:** no change on hover or press within the link's own subtree; focus adds a 1px solid `#6784fe` outline offset 2px.
- **Footer email field:** no change on hover, press or focus within the compared scope.

No focus ring persisted after blur. Disabled, error and loading states were not exercised.

## Do's and Don'ts

- Use the measured violet-blue for the principal action and near-black for paragraph ink.
- Use Aeonik’s verified normal faces and the measured regular/medium hierarchy.
- Keep the primary action and footer input at their measured 16px corner radius; keep navigation square.
- Darken the primary action to `#5570e0` on hover and press, edge included.
- Draw keyboard focus as a 1px solid outline with a 2–3px offset: violet-blue around violet-blue actions and links, near-black around near-black navigation.
- Keep widget fonts and popup controls out of the storefront component vocabulary.

## Voice & Tone

The measured labels address a concrete next step: beginning tracking, viewing watches, learning about a health need. “Commencez votre suivi” and “Toutes les montres” keep the action specific. This is an observation from the French storefront’s labels, not an official editorial style guide.

## Agent Prompt Guide

“Build a Withings-inspired desktop health-device storefront using live-loaded Aeonik, `#0f0f0f` paragraph ink, white and sand surfaces, and a `#6784fe` principal action. Give the action 16px corners, 16px 24px padding and 16px/500 text with 19.2px line height. On hover and press its background and 1px inset edge turn `#5570e0`; keyboard focus is a 1px solid `#6784fe` outline offset 3px. Text links lose their bottom border on hover and slide their caret 4px right.”

## Governance

### Known Gaps

- **Contrast, `primary-cta`.** Text `#ffffff` on `#6784fe` measures 3.33:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

---
name: eMAG
colors:
  primary: '#0082e6'
  primary-dark: '#186bd8'
  primary-darker: '#2d5acc'
  primary-darkest: '#4359c7'
  primary-light: '#69aff4'
  primary-lighter: '#c6e3fa'
  primary-lightest: '#f1f8fe'
  brand-red: '#ff1d25'
  brand-magenta: '#a0328c'
  brand-purple: '#7040a4'
  surface: '#ffffff'
  background: '#f4f4f4'
  foreground: '#222222'
  muted: '#666666'
  muted-light: '#7f7f7f'
  border: '#c4c4c4'
  success: '#009900'
  warning: '#f0a600'
  info: '#0da6e8'
  rating: '#f9bf3b'
  genius-purple: '#562f8b'
  genius-pink: '#e4006a'
  wallet-blue: '#4070fa'
typography:
  input:
    fontSize: 14px
    fontWeight: 400
    use: Header search input; live-loaded Open Sans
  card-title:
    fontSize: 14px
    fontWeight: 600
    use: Standard product title link; 19px line height
  nav:
    fontSize: 12px
    fontWeight: 400
    use: Genius and seller links in auxiliary navigation; 20px line height
  search-button:
    fontSize: 18px
    fontWeight: 400
    use: Computed font on the header search button box; 20px line height
rounded:
  square: 0px
  product-image: 4px
  cart-button: 8px
  nav-link: 16px
components:
  cart-cta:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 8px
    height: 42px
    padding: 0px
    pressed: inset shadow rgba(0,0,0,0.125) 0 3px 5px
    use: 'First product-card Adauga in Cos control; transparent outer box, with a 42px child painting a gradient from #2d5acc to #0082e6 and a 22px white SVG. Hover changes nothing in the compared scope; keyboard focus draws nothing (no outline, no ring).'
  search-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0082e6'
    border: '#0082e6'
    height: 36px
    padding: 6px 12px
    typography: 18px / 400
    hover: 'bg #f1f8fe'
    pressed: 'bg #f1f8fe; inset shadow rgba(0,0,0,0.125) 0 3px 5px'
    focus: 'bg #f1f8fe; bottom-right radius 16px to 0'
    use: 'Header Caută control; 1px border on top, right and bottom, none on left; right corners 16px, left corners square. Press and focus also show the browser''s auto outline (outline-color #0082e6), which is not a brand ring.'
  genius-nav:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 16px
    height: 30px
    padding: 4px 10px
    typography: 12px / 400
    hover: '1px solid #ffffff border appears'
    pressed: '1px solid #ffffff border'
    focus: '1px solid #ffffff border'
    use: Genius link on the gradient navigation strip; the rest border is 1px transparent. Press and focus also show the browser's auto outline.
  seller-cta:
    type: button
    backgroundColor: '#7040a4'
    textColor: '#ffffff'
    height: 30px
    padding: 4px 9px
    typography: 12px / 400
    hover: 'bg transparent; 1px solid #ffffff border'
    pressed: 'bg transparent; 1px solid #ffffff border; inset shadow rgba(0,0,0,0.125) 0 3px 5px'
    focus: '1px solid #ffffff border; purple fill kept'
    use: Vinde pe eMAG header link; its measured 800px pill radius is recorded in the body. Hover empties the purple pill to a white outline on the navigation gradient.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Open Sans
---

# Design System Inspiration of eMAG

## Overview

### Visual Theme & Atmosphere

eMAG is a shopping platform founded in 2001. Its own company history describes a small online electronics shop growing into a universal shopping platform, with products sold directly and through Marketplace partners. That breadth is visible in the Romanian storefront: a category rail, large campaign imagery and a five-column product grid share the page with search, delivery-related services and seller entry points. [Company history](https://about.emag.ro/en/grup-emag/), [founding evidence](https://about.emag.ro/2024/03/08/vestitorii-primaverii-din-cosul-de-cumparaturi-de-la-emag-cosmetice-haine-bijuterii-si-carti/).

The distinctive visual combination is a red-to-magenta-to-purple-to-blue navigation strip above white merchandise cards, light grey surroundings, compact Open Sans labels and red prices. The homepage title, “Căutarea nu se oprește niciodată,” makes continued discovery explicit. These are observations of the [Romanian storefront](https://www.emag.ro/), not a reconstruction from a corporate-site palette.

The company is also developing discovery beyond typed search. Its February 2025 release describes personalised AI recommendations and eMAG SNAP, which searches for products from a photograph. This gives the search-led storefront a concrete product direction without implying that the SNAP interface was measured here. [eMAG's account of its 2025 shopping developments](https://about.emag.ro/2025/02/27/emag-prezinta-5-tendinte-cheie-din-ecommerce-care-vor-imbunatati-experienta-clientilor-in-2025/).

### Brand Narrative

The company's story joins wider product choice with services around buying: its company page describes Marketplace, the mobile application, easybox delivery and Genius. The 2025 discovery developments extend that account into recommendations and image-based search. Read these as the company's stated product development; the measured visual reference remains the Romanian web storefront. [Company account](https://about.emag.ro/en/grup-emag/), [2025 discovery developments](https://about.emag.ro/2025/02/27/emag-prezinta-5-tendinte-cheie-din-ecommerce-care-vor-imbunatati-experienta-clientilor-in-2025/).

### Principles

No official product-design principles were verified.

### Personas

No researched personas were verified.

## Colors

The live homepage exposed 267 computed root custom properties. The following values come from those properties; these names describe the observed roles and do not claim to reproduce a published token specification.

| Role | Measured value | Live property or observation |
|---|---|---|
| Primary blue | `#0082e6` | `--brand-primary`, `--brand-emag-blue`, `--searchbox-border` |
| Link blue | `#186bd8` | `--brand-primary-dark`, `--link-color` |
| Deeper blue | `#2d5acc` | `--brand-primary-darker`; start of `--brand-primary-gradient` |
| Indigo | `#4359c7` | `--brand-primary-darkest`, `--brand-gradient-step4` |
| Light blue | `#69aff4` | `--brand-primary-light` |
| Pale blue | `#c6e3fa` | `--brand-primary-lighter` |
| Lightest blue | `#f1f8fe` | `--brand-primary-lightest` |
| eMAG red | `#ff1d25` | `--brand-emag-red`, `--brand-danger`; red price text visible in the capture |
| Magenta gradient stop | `#a0328c` | `--brand-emag-lightpurple`, `--brand-gradient-step2` |
| Purple | `#7040a4` | `--brand-emag-purple`; seller-link background |
| Surface | `#ffffff` | `--brand-light`; white is the most frequent nontransparent background |
| Light ground | `#f4f4f4` | `--brand-neutral-light` |
| Foreground | `#222222` | `--brand-neutral-darkest`; search-input and product-title ink |
| Secondary ink | `#666666` | `--brand-neutral-darker`; 44 paragraph elements |
| Muted grey | `#7f7f7f` | `--brand-neutral-dark` |
| Neutral border value | `#c4c4c4` | `--brand-neutral`; not a claim that every component has this border |
| Success | `#009900` | `--brand-success` is raw `#090`; also `--label-in-stock` |
| Warning | `#f0a600` | `--brand-warning`, `--label-limited-stock` |
| Information | `#0da6e8` | `--brand-info`, `--label-preorder` |
| Rating gold | `#f9bf3b` | `--star-rating-rated-color` |
| Genius purple | `#562f8b` | `--brand-genius1` |
| Genius pink | `#e4006a` | `--brand-genius2` |
| Wallet blue | `#4070fa` | `--brand-wallet` |

The brand gradient has five named stops. The exact computed custom-property strings are:

```css
--brand-gradient-steps: #ff1d25 5%, #a0328c 35%, #7040a4 45%, #4359c7 55%, #0082e6 70%;
--brand-gradient: linear-gradient(to right, #ff1d25 5%, #a0328c 35%, #7040a4 45%, #4359c7 55%, #0082e6 70% 70%);
--brand-primary-gradient: linear-gradient(to right, #2d5acc, #0082e6);
```

The repeated final `70%` above is preserved from the measured string. It has not been silently corrected.

Paragraph colour needs a role distinction: red occurs on 112 `<p>` elements, secondary grey on 44 and dark foreground on 8. Red price text is also visible in the capture, but the census does not expose paragraph classes. The red paragraph majority does not establish the default search or product-title foreground. The colour census counts elements, not painted area or characters.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product use | No company-authored typography specification was verified. |
| Live-loaded | `document.fonts` reports **Open Sans 400, 600 and 700**, normal style, and **eMAGv2 400**, normal style. Body, h1 and the first button all declare Open Sans first. Only Open Sans is exported as the interface family. |
| Official distributed assets | No font files or font-license documents were opened. |
| Declared-only | The body/h1/button fallback declarations name Helvetica, Arial and generic sans-serif after Open Sans. They are not in the census's loaded-face list and receive no specimen or family token. |
| Unresolved | The census exposed no readable `@font-face` rules. A Google Fonts Open Sans stylesheet and the eMAG CDN stylesheets were listed as unreadable to the stylesheet walker. Exact font-file URLs, the serving source of eMAGv2 and its glyph usage remain unresolved. |

Substitute: none chosen.

The measured interface scale is local to these controls: auxiliary navigation 12px/400 with 20px line height; search input 14px/400 with 20px line height; standard product-title link 14px/600 with 19px line height; search-button box 18px/400 with 20px line height. The cart button's own computed font size is 0px, so its box is not a visible text specimen. No heading size or general paragraph size is inferred from these measurements.

## Layout

At the captured desktop width, the white logo/search/account header sits above a horizontal gradient navigation strip. A vertical category list shares a row with the large promotional carousel. Beneath it, five merchandise columns carry image links, product titles, review information, red prices and small cart controls.

The full-page capture also shows a newsletter panel, navigation-history placeholders, a seller panel and a multi-column footer. This is a description of the captured homepage, not a verified breakpoint or reusable grid specification.

### Responsive Behavior

Not measured: only the 1440×1000 desktop viewport was surveyed.

## Elevation & Depth

All six control rest snapshots report `box-shadow: none`; no general elevation scale was verified.

## Motion & Easing

Each of the six controls declares `transition: all 0s ease 0s` on the element itself. No broader product-animation duration or easing system was verified.

---

**Tier 1 sources:** https://www.emag.ro/ (rendered homepage survey, computed root variables, loaded faces and control rest geometry, captured 2026-10-29); https://www.emag.ro/zz-this-does-not-exist (curl control returned HTTP 410 and the same 587-byte error page as curl's home response, so it does not establish the storefront's route behaviour); https://about.emag.ro/en/grup-emag/ (company history and product/service account); https://about.emag.ro/2024/03/08/vestitorii-primaverii-din-cosul-de-cumparaturi-de-la-emag-cosmetice-haine-bijuterii-si-carti/ (2001 founding); https://about.emag.ro/2025/02/27/emag-prezinta-5-tendinte-cheie-din-ecommerce-care-vor-imbunatati-experienta-clientilor-in-2025/ (recommendations and SNAP). All opened 2026-10-29.

## Components

These are rest measurements from the live survey at 1440×1000, followed by the interaction states measured with the cookie banner rejected (“Refuză toate”).

| Control | Measured identity and rest appearance |
|---|---|
| `cart-cta` — Adauga in Cos | 42×42px; radius 8px; padding 0px; computed font 0px/400, line height 20px. Outer background `rgba(0, 0, 0, 0)`, foreground `#ffffff`, border none. The rest snapshot resolves the paint layer: child `i@0` is 42×42px with `linear-gradient(to right, #2d5acc, #0082e6)`; its SVG is 22×22px and the path fill is white. |
| `search-button` — Caută | 43×36px; radii `0px 16px 16px 0px`; padding 6px 12px; font 18px/400, line height 20px. Background `#ffffff`, foreground `#0082e6`; 1px solid `#0082e6` borders on top/right/bottom, none on left. |
| `genius-nav` — Genius | 60.9×30px; radius 16px; padding 4px 10px; font 12px/400, line height 20px. Transparent background, foreground `#ffffff`, 1px transparent border. |
| `search-input` — Începe o nouă căutare | 563.2×34px; radius 0px; padding 0px; font 14px/400, line height 20px. Transparent background, foreground `#222222`, 1px transparent border. This is the inner input; its dimensions and square corners must not be assigned to the enclosing rounded search field. |
| `card-title` — first standard product title | 214.8×38px; radius 0px; padding 0px; font 14px/600, line height 19px. Transparent background, foreground `#222222`, border none. The survey's item was the blonde-wig product; recommendation content can change. |
| `seller-cta` — Vinde pe eMAG | 127.8×30px; **computed radius 800px**, creating a pill; padding 4px 9px; font 12px/400, line height 20px. Background `#7040a4`, foreground `#ffffff`, 1px transparent border. The 800px value belongs to this control, not to a general radius scale. |

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Adauga in Cos | No change in the compared scope | Inset shadow `rgba(0, 0, 0, 0.125) 0px 3px 5px 0px inset` | **Nothing drawn**: no outline, ring or colour change |
| Caută | Background `#f1f8fe` | `#f1f8fe` plus the same inset shadow | `#f1f8fe`; the bottom-right corner loses its 16px radius |
| Genius | A 1px solid `#ffffff` border appears | Same border | Same border |
| Vinde pe eMAG | Purple fill clears to transparent, leaving a 1px `#ffffff` outline on the navigation gradient | Same, plus the inset shadow | 1px `#ffffff` border; purple fill kept |

The search input and the product-title link are not given state tokens. The input’s only change on press and focus is a width change (563.2px → 525.2px) that persists after blur. The title link changes nothing on hover and shows only the browser’s `auto` outline on press and focus.

The product-image links separately measured 4px radius. Percentage radii occur on the 32px favourite controls and 12px carousel dots as `50%`; those are circular treatments, not numeric global radius tokens. All six measured controls have `box-shadow: none` at rest.

### States

States were measured with real hover, a held pointer press and a real Tab walk (53 presses, all walkable controls reached), after rejecting the cookie banner, with 900ms settling. Pressed buttons share one treatment, an inset shadow `rgba(0, 0, 0, 0.125) 0px 3px 5px 0px inset`. Hover on the navigation strip adds a white 1px border rather than a colour fill. The product card’s cart button has no visible keyboard focus. The search button, Genius link and product title show the browser’s own `auto` outline on focus, so no brand focus ring is exported. Disabled, error, selected and loading states were not measured.

## Do's and Don'ts

Use the measured five-stop red-to-blue gradient for the brand colour sequence, and distinguish it from the separate two-blue primary gradient. Keep standard product-title ink dark, use the loaded Open Sans weights and preserve the measured compact navigation sizing.

Keep the inner search input distinct from its rounded enclosure. Treat the seller link's pill geometry as local to that link. Do not derive component hover colours from similarly named variables, promote shadow-root defaults into storefront tokens, or interpret the most frequent red paragraph colour as the default label foreground.

## Voice & Tone

The captured Romanian interface uses short task labels: “Caută,” “Începe o nouă căutare” and “Vinde pe eMAG.” A company-wide voice specification was not verified.

## Agent Prompt Guide

“Build a desktop shopping header with an Open Sans 14px/400 search input, transparent inner background and dark foreground. Place a 36px-high white search button at its right, with blue foreground, 16px right corners and square left corners. Below the header, use the measured five-stop red/magenta/purple/indigo/blue brand gradient.”

“Build the Vinde pe eMAG header link at 30px height, 4px 9px padding, Open Sans 12px/400, purple background and white foreground. Its measured CSS radius is 800px. On hover the purple fill clears to transparent and a 1px white border appears; press adds an inset shadow `rgba(0, 0, 0, 0.125) 0px 3px 5px 0px inset`.”

## Governance

### Known Gaps

- **Contrast, `search-button`.** Text `#0082e6` on `#ffffff` measures 3.94:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

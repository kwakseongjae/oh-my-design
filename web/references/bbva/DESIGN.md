---
name: BBVA
colors:
  primary: '#001391'
  foreground: '#070e46'
  positive: '#0c6dff'
  canvas: '#ffffff'
  surface: '#f7f8f8'
  focus-in: '#85c8ff'
  focus-out: '#070e46'
typography:
  button:
    fontSize: 15.008px
    fontWeight: 500
    lineHeight: 24px
    use: Measured filled buttons and action links; live-loaded Benton Sans BBVA.
  body:
    fontSize: 15.008px
    fontWeight: 350
    lineHeight: 24px
    use: 'Root body-book-m token: 0.938rem / 1.5rem, weight 350; paragraph size was not separately inspected.'
  heading:
    fontSize: 48px
    fontWeight: 700
    lineHeight: 56px
    use: 'Root title-secondary-bold-4xl token: Tiempos Headline, 3rem / 3.5rem; not a measured h1 size. Pixel conversion uses the measured button''s 0.938rem = 15.008px.'
rounded:
  none: 0px
  button: 8px
components:
  primary-cta:
    type: button
    backgroundColor: '#0c6dff'
    textColor: '#ffffff'
    rounded: 8px
    height: 56px
    padding: 16px 32px
    typography: 15.008px / 500
    hover: 'The two-tone background image linear-gradient(100deg, rgb(33, 101, 202) 50%, rgb(12, 109, 255) 50%), sized 210% 100%, slides from 99% 50% to 0px 50%, so the darker #2165ca half fills the button. background-color stays #0c6dff.'
    pressed: 'Same as hover with the pointer down: background image at 0px 50%.'
    focus: 'box-shadow rgb(133, 200, 255) 0px 0px 0px 2px, rgb(7, 14, 70) 0px 0px 0px 4px: an inner 2px #85c8ff ring inside an outer 4px #070e46 ring.'
    use: Hazte cliente, the header link to online account opening, 158px wide. A link styled as the primary action.
  secondary-cta:
    type: button
    backgroundColor: '#f7f8f8'
    textColor: '#001391'
    rounded: 8px
    height: 56px
    padding: 16px 32px
    typography: 15.008px / 500
    focus: box-shadow rgb(133, 200, 255) 0px 0px 0px 2px, rgb(7, 14, 70) 0px 0px 0px 4px.
    use: Ver Cuenta Online, the hero's secondary link, 192.7px wide. It carries the same sliding image with a white half (linear-gradient(100deg, rgb(255, 255, 255) 50%, rgb(247, 248, 248) 50%)); its hover did not register in the probe and is not stated.
  nav-business:
    type: button
    textColor: '#001391'
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 15.008px / 500
    hover: 'Text darkens from #001391 to #070e46.'
    focus: box-shadow rgb(133, 200, 255) 0px 0px 0px 2px, rgb(7, 14, 70) 0px 0px 0px 4px.
    use: Autónomos y empresas, a header navigation link to the business site.
  product-card:
    type: card
    textColor: '#001391'
    rounded: 0px
    height: 96px
    padding: 0px
    typography: 15.008px / 500
    hover: 'Label and icon darken from #001391 to #070e46 and the icon rises 8px (matrix(1, 0, 0, 1, 0, -8)).'
    focus: box-shadow rgb(133, 200, 255) 0px 0px 0px 2px, rgb(7, 14, 70) 0px 0px 0px 4px.
    use: Una cuenta sin comisiones, an icon-and-label product shortcut link, 136px wide.
  search-trigger:
    type: button
    textColor: '#001391'
    rounded: 0px
    height: 44px
    padding: 0px
    hover: 'The search icon''s fill darkens from #001391 to #070e46.'
    focus: box-shadow rgb(133, 200, 255) 0px 0px 0px 2px, rgb(7, 14, 70) 0px 0px 0px 4px.
    use: 'Buscador, the 44px header search button. fg is the visible icon; the button''s own computed colour is #000000.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Benton Sans BBVA
    display: Tiempos Headline
---

# Design System Inspiration of BBVA

## Overview

### Visual Theme & Atmosphere

BBVA is a global financial group with a stated focus on customers, digitalisation, innovation and sustainability. Its Spanish retail homepage presents accounts, mortgages, cards, and saving or investment routes. The bank's history includes Banco de Bilbao, which opened in 1857. [Company](https://www.bbva.com/es/informacion-corporativa/), [history](https://www.bbva.com/es/memoria-bbva-archivo-historico/), [retail homepage](https://www.bbva.es/).

The captured homepage combines deep blue text on white, a bold serif promotional headline, a sans serif interface, and filled actions with 8px corners. Two blues have distinct measured jobs: `#001391` on standard actions and links, and `#0c6dff` on the account-opening links. Photography sits beside the main offer; the header separates customer groups and keeps account access and acquisition visible.

BBVA announced its renewed identity in May 2025, replacing “Creando oportunidades” with “¿Avanzamos?”. It describes a warmer, more accessible identity spanning typography, icons, illustration and photography. The rollout began with the Spanish app on 20 May 2025, with old and new visual languages intended to coexist during the transition. [Rebrand announcement](https://www.bbva.com/es/innovacion/bbva-estrena-una-nueva-identidad-de-marca-mas-optimista-y-empatica/).

### Brand Narrative

The stated purpose is “Acompañar tu voluntad de llegar más lejos”. BBVA Creative turns that into “¿Avanzamos?” and describes an adaptable identity developed with BBVA's Brand Strategy and Design team and Hanzo. The reference combines that documented direction with the measured Spanish retail surface. [Brand development](https://www.bbvacreative.com/new-brand/).

### Principles

BBVA Creative places accessibility and emotion at the centre of the renewed visual identity. Its illustration guidance favours resources that help explain and connect ideas; its photography direction favours people and situations that feel real. These are stated brand intentions, not results of an accessibility test. [Creative direction](https://www.bbvacreative.com/new-brand/).

### Personas

No personas or behavioural research were verified.

## Colors

The live census contains 3,184 computed root custom properties and 3,191 declared properties. The `--spherica-*` group contains 3,127 names: 1,805 colour properties and 1,322 typography properties. These are observed on the retail surface; no public specification for this namespace was verified.

| Role | Value | Measured evidence |
|---|---|---|
| Primary action and link | `#001391` | `--spherica-color-primary-bg-action-default`; Declinar rest background; business navigation label |
| Foreground | `#070e46` | `--spherica-color-primary-text-primary`; most frequent paragraph ink, 12 paragraphs |
| Account-opening action | `#0c6dff` | `--spherica-color-primary-bg-positive-default`; Hazte cliente and Hazte de BBVA rest backgrounds |
| Canvas / inverse label | `#ffffff` | Header background; Declinar rest text; 35 background occurrences in the census |
| Secondary surface / changed label | `#f7f8f8` | Ver Cuenta Online rest background; Declinar text on hover and press |
| Focus inner ring | `#85c8ff` | `--spherica-color-primary-ui-system-focus-in`; measured 2px focus shadow |
| Focus outer ring | `#070e46` | `--spherica-color-primary-ui-system-focus-out`; measured 4px focus shadow |

The paragraph census also records `#001391` on 10 paragraphs and `#000000` on three. The foreground role follows paragraph ink rather than assuming the most common navigation colour is body text. Counts include the open consent interface.

## Typography

**Official product-use documentation.** BBVA's rebrand announcement says the new typography entered the Spanish app rollout. BBVA Creative names the new brand face **Tiempos BBVA**. Neither opened page establishes that this name is identical to a particular CSS family in the retail homepage. Keep the documented name and the live family names separate. [BBVA Creative's brand page](https://www.bbvacreative.com/new-brand/), [rollout announcement](https://www.bbva.com/es/innovacion/bbva-estrena-una-nueva-identidad-de-marca-mas-optimista-y-empatica/).

**Live-loaded.** The census lists Benton Sans BBVA at 350 and 500, normal and italic; the aliases BentonSansBBVA-Book 350 normal and BentonSansBBVA-Medium 500 normal; Tiempos Headline 700 normal and TiemposHeadline-Bold 700 normal; and bbvaiconfont. Only **Benton Sans BBVA** and **Tiempos Headline** enter the family tokens. The icon font is not a text face. The sampled body, h1 and button declarations name Benton Sans BBVA; this does not identify the serif promotional headline as the sampled h1.

**Official distributed assets.** The live stylesheet advertises the loaded sans faces through first-party `content/dam/public-web/global/fonts/BentonSansBBVA-*-Lite.woff2` and `.woff` sources. Both loaded headline names point to `tiempos-headline-bold.woff2`. The icon font uses an inline data URL. These are observed asset declarations, not a redistribution licence.

**Declared-only.** These exact face entries were absent from the loaded list: BentonSansBBVA-Bold 700 normal; BentonSansBBVA-BookItalic 350 italic; BentonSansBBVA-MediumItalic 400 italic; TiemposText-Regular 400 normal; TiemposText-RegularItalic 400 italic; TiemposHeadline-BoldItalic 700 italic; and Tiempos Headline 700 italic. Some share asset paths with loaded aliases. They retain this metadata and receive no specimen.

**Metrics.** Filled controls measure 15.008px, weight 500, with 24px line height. The root button token is 0.938rem / 1.5rem. The root body-book-m token uses the same sizes at weight 350; it is a token reading rather than a separate paragraph-size measurement. The title-secondary-bold-4xl token names Tiempos Headline at 3rem / 3.5rem, weight 700: 48px / 56px using the observed button rem conversion. No h1 font size was measured.

**Unresolved.** The licence and exact relationship between Tiempos BBVA and the CSS headline families were not verified. Substitute: none chosen.

## Layout

The desktop capture places the logo at x=108, y=48. The header acquisition link begins at x=1010, y=40. In the hero, the account-opening action starts at x=108, y=748 and the secondary action at x=296, y=748. These are captured coordinates, not a responsive grid specification.

The product shortcut row begins with anchors at x=132, 340 and 548, all y=1556: a measured 208px horizontal step. The first two text-and-icon anchors are 136×96px. The survey shows a carousel next button; no carousel action was performed.

Reuse the measured 16px vertical / 32px horizontal action padding and 8px action radius. A site-wide spacing scale was not verified.

### Responsive Behavior

Only desktop 1440×1000 was measured; mobile layout and breakpoints remain unmeasured.

## Elevation & Depth

The measured controls are flat at rest. The consent button's white panel ancestor has `rgba(7, 14, 70, 0.15) 0px -1px 10px 0px` shadow. Keyboard focus uses two solid, unblurred shadows on the button. No general card-elevation scale was measured.

## Motion & Easing

Declinar's raw computed transition is `background-position 0.666667s cubic-bezier(0.24, 0.22, 0.31, 1.07) 0s`. The measured effect moves the oversized two-colour background image. The easing's final control-point y value exceeds 1; the raw curve is preserved without substituting a generic easing.

Hazte cliente and Ver Cuenta Online declare the same string; Hazte cliente's hover was measured with it. Navigation links and the search button declare `line-height 0.166667s ease 0s`. Reduced-motion behaviour was not measured.

## Components

All identities below were measured on the Spanish homepage at 1440×1000. The worker's capture left the consent panel open (reject label “Declinar”); the states below come from a re-measure with it rejected (see States). The consent button stays a prose observation, not a component.

| Control | Identity and rest styling |
|---|---|
| Hazte cliente — header link | 158×56px; radius 8px; padding 16px 32px; Benton Sans BBVA 15.008px/500, line height 24px; `#0c6dff` background, `#ffffff` text |
| Ver Cuenta Online — hero link | 192.7×56px; radius 8px; padding 16px 32px; same font metrics; `#f7f8f8` background, `#001391` label |
| Autónomos y empresas — navigation link | 168×24px; radius 0; padding 0; same font metrics; transparent over white, `#001391` text |
| Una cuenta sin comisiones — product shortcut link | 136×96px; radius 0; padding 0; same font metrics; transparent over a white item; `#001391` label and SVG path; the anchor radius does not establish its container radius |
| Buscador — search trigger button | 44×44px; radius 0; padding 0; 24×24px SVG with a `#001391` path; the element's own computed colour is `#000000`, separate from the visible icon |
| Declinar — consent rejection button | 128×56px; radius 8px; padding 16px 32px; Benton Sans BBVA 15.008px/500, line height 24px; `#001391` background, `#ffffff` text |

All six controls have no drawn border and no rest box shadow. No visible search input was returned by the survey.

**States.** Filled actions carry an oversized two-tone background image and slide it on hover. On Hazte cliente it is `linear-gradient(100deg, rgb(33, 101, 202) 50%, rgb(12, 109, 255) 50%)`, sized `210% 100%`; hover and press move it from `99% 50%` to `0px 50%`, so the darker `#2165ca` half fills the button while `background-color` stays `#0c6dff`. Ver Cuenta Online has the same structure with a white `#ffffff` half; its hover did not register in the probe. Text links, the product shortcut and the search icon darken from `#001391` to `#070e46` on hover, and the shortcut's icon rises 8px. Keyboard focus on every measured control is the same authored double ring: an inner 2px `#85c8ff` and an outer 4px `#070e46` box-shadow.

Declinar, the consent button, has a fixed `linear-gradient(100deg, rgb(7, 14, 70) 50%, rgb(0, 19, 145) 50%)` background image, sized `210% 100%`, without repetition. Hover and press move its position from `99% 50%` to `0px 50%`, exposing the darker half, and change the text to `#f7f8f8`. Its computed background colour remains `#001391`. Keyboard focus adds the two shadows described under States.

### States

Measured in a fresh-profile browser at 1440 × 1000 with the consent panel rejected through “Declinar”:

- **Hazte cliente:** hover and pressed slide the background image from `99% 50%` to `0px 50%`, exposing the darker `#2165ca` half; focus (Tab #7) adds the double ring.
- **Ver Cuenta Online:** focus (Tab #14) adds the double ring. Hover and pressed are UNMEASURED: the probe moved the pointer onto it, but `:hover` did not match.
- **Autónomos y empresas:** hover darkens the text to `#070e46`; focus (Tab #4) adds the double ring. Pressed UNMEASURED (`:active` did not match).
- **Una cuenta sin comisiones:** hover darkens label and icon to `#070e46` and raises the icon 8px; focus (Tab #19) adds the double ring. Pressed UNMEASURED.
- **Buscador:** hover darkens the icon fill to `#070e46`; focus (Tab #8) adds the double ring. Pressed UNMEASURED.

The double ring is `rgb(133, 200, 255) 0px 0px 0px 2px, rgb(7, 14, 70) 0px 0px 0px 4px`, outline `none`; it cleared after blur on every control. The worker's capture also measured Declinar with the panel open: hover and press slide its image and change its label to `#f7f8f8`, and focus (Tab #3) uses the same double ring. Disabled states were not measured.

## Do's and Don'ts

- Use deep blue `#070e46` for the foreground and `#001391` for the measured standard action treatment.
- Pair the loaded sans interface face with the separately loaded headline face where the captured hierarchy calls for it.
- Preserve 56px action height, 8px corners and the measured padding when reproducing these controls.
- Keep the sliding two-tone background image on filled actions; their `background-color` does not change on hover.
- Darken links and icons from `#001391` to `#070e46` on hover.
- Use the double focus ring (2px `#85c8ff` inside 4px `#070e46`) on every focusable control.
- Do not render declared-only faces as loaded specimens.

## Voice & Tone

The rebrand announcement describes advice delivered transparently, encouragement grounded in reality, restrained empathy and simple language with substance. Use direct, comprehensible language that helps people decide. The captured action labels are short Spanish verbs and invitations: “Hazte cliente”, “Ver Cuenta Online” and “Declinar”. [Official verbal identity](https://www.bbva.com/es/innovacion/bbva-estrena-una-nueva-identidad-de-marca-mas-optimista-y-empatica/).

## Agent Prompt Guide

“Create a BBVA-style primary action labelled Hazte cliente: 158×56px, radius 8px, padding 16px 32px, loaded Benton Sans BBVA at 15.008px/500 with 24px line height, white text on `#0c6dff`. Give it the background image `linear-gradient(100deg, rgb(33, 101, 202) 50%, rgb(12, 109, 255) 50%)` at `210% 100%`, positioned `99% 50%`, and on hover and press move it to `0px 50%` with `background-position 0.666667s cubic-bezier(0.24, 0.22, 0.31, 1.07)`. On keyboard focus add an inner 2px `#85c8ff` and an outer 4px `#070e46` box-shadow.”

For navigation and icon links: `#001391` at rest, `#070e46` on hover, the same double focus ring.

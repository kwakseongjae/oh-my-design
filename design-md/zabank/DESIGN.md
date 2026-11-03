---
name: ZA Bank
colors:
  primary: '#39e5b1'
  primary-hover: '#30c396'
  foreground: '#0b0e26'
  label-primary: '#030516'
  canvas: '#ffffff'
  section: '#f3f4f5'
  secondary-action: '#f6f7fb'
  secondary-action-hover: '#d1d2d5'
  footer: '#253d5b'
  background-primary-declared: '#f6f6fb'
  error-declared: '#fc605b'
  link-declared: '#e99300'
typography:
  button:
    fontSize: 14px
    fontWeight: 400
  nav:
    fontSize: 16px
    fontWeight: 400
  product-action:
    fontSize: 18px
    fontWeight: 400
rounded:
  xxs: 2px
  xs: 4px
  s: 8px
  m: 14px
  l: 20px
spacing:
  xxxs: 2
  xxs: 4
  xs: 8
  s: 12
  m: 16
  ml: 20
  l: 24
  xl: 32
components:
  signup:
    type: button
    backgroundColor: '#39e5b1'
    textColor: '#030516'
    rounded: 100px
    height: 36px
    padding: 7px 16px
    typography: 14px / 400
    hover: '#30c396'
    pressed: '#30c396'
    use: 登記開戶 — header action link rendered as an anchor without href. Hover and pointer press darken its fill; keyboard focus was not reached.
  download:
    type: button
    backgroundColor: '#f6f7fb'
    textColor: '#030516'
    rounded: 100px
    height: 36px
    padding: 7px 16px
    typography: 14px / 400
    hover: '#d1d2d5'
    pressed: '#d1d2d5'
    use: 下載 ZA Bank App — secondary header action link rendered as an anchor without href. Hover and pointer press darken its fill; keyboard focus was not reached.
  nav-insurance:
    type: button
    textColor: '#0b0e26'
    rounded: 100px
    height: 33.5px
    padding: 6px 12px
    typography: 16px / 400
    hover: '#f6f7fb'
    pressed: '#f6f7fb'
    use: 保險 — navigation link to /hk/insurance. Its transparent rest background sits on the white header; hover and pointer press add a pale pill fill.
  deposit-more:
    type: button
    backgroundColor: '#39e5b1'
    textColor: '#030516'
    rounded: 100px
    height: 38px
    padding: 0px 20px
    typography: 18px / 400
    hover: '#30c396'
    pressed: '#30c396'
    use: 了解更多 — action link inside the deposit feature card, leading to https://bank.za.group/hk/deposit; this measurement describes the action rather than the whole card.
fonts:
  roles:
    sans: Nunito
---

# Design System Inspiration of ZA Bank

## Overview

### Visual Theme & Atmosphere

ZA Bank is a Hong Kong digital bank offering banking, investment, insurance and business services. Its own profile records a Hong Kong Monetary Authority licence in 2019 and describes a “用戶共創” approach: users participate in product development and design. The homepage dates its public opening to March 2020. This is a bank built around an app, with account opening and app access placed in the desktop header. ([Company profile](https://bank.za.group/hk/faqs/about/about_wo/about_wog/67483350248ac94b45ccd025), [homepage](https://bank.za.group/hk))

Its current brand expression combines the Cantonese message “做壞規矩 做好銀行” with a stated “Banking for Web3” direction. The homepage puts everyday saving, spending and investing together; its profile also names individuals, SMEs and Web3 enterprises among the groups it serves. These are the bank's published positioning and product scope. ([Homepage](https://bank.za.group/hk), [company profile](https://bank.za.group/hk/faqs/about/about_wo/about_wog/67483350248ac94b45ccd025))

The visible desktop design gives that positioning a mint accent, very dark ink and broad light surfaces. The captured hero combines a cityscape with an oversized phone; the next row uses white cards and mint-and-white three-dimensional icons. Mint pill actions repeat through the page. Below, alternating text and media areas organize the service features. These are observations of the captured page, not claims from a published brand manual.

The measured homepage is the Traditional Chinese Hong Kong edition (`bank.za.group/hk`, HTML `lang="zh-HK"`); the capture recorded no regional redirect. This reference covers the public website, with app design beyond the scope measured here.

### Brand Narrative

The bank's CEO letter describes building with user feedback and keeping a community-driven approach; its current company profile explicitly includes users in development and design. The present homepage extends this narrative across saving, spending, investment and Web3 banking. The visual reference takes its repeatable patterns from the public site: mint actions, dark labels, white service cards and an app-centred hero. ([CEO letter](https://blog.za.group/en/article/letter-from-za-bank-ceo-hk), [profile](https://bank.za.group/hk/faqs/about/about_wo/about_wog/67483350248ac94b45ccd025), [homepage](https://bank.za.group/hk))

### Principles

The verified company principle is user participation in product development and design, stated in its [company profile](https://bank.za.group/hk/faqs/about/about_wo/about_wog/67483350248ac94b45ccd025). For implementation, the measured recurring patterns are compact pill actions, dark-on-mint labels and a pale navigation hover surface; these are observations rather than a published principles framework.

### Personas

The [company profile](https://bank.za.group/hk/faqs/about/about_wo/about_wog/67483350248ac94b45ccd025) names individuals, SMEs and Web3 enterprises; no demographic, behavioral persona or user-research finding was verified.

## Colors

The survey read 90 computed root properties, including 85 in `--zad-*`. The palette below separates named CSS values from measured rendered roles.

| Role | Value | Evidence and use |
|---|---|---|
| Primary | `#39e5b1` | `--zad-color-primary_c0`; measured rest fill of signup and deposit actions |
| Primary hover / pointer press | `#30c396` | Measured on those two actions with `:hover` / `:active` matching |
| Foreground | `#0b0e26` | Dominant sampled `<p>` ink, 3 of the 4 paragraphs counted; also the measured navigation label |
| Primary interface label | `#030516` | `--zad-color-label_primary`; measured action labels |
| Canvas | `#ffffff` | `--zad-color-background`; white header behind the navigation link |
| Section surface | `#f3f4f5` | Rendered background census, 11 elements; visible beneath the first card row |
| Secondary action / navigation hover | `#f6f7fb` | Measured download action at rest; navigation hover and pointer press |
| Secondary action hover / pointer press | `#d1d2d5` | Measured download action |
| Footer surface | `#253d5b` | Measured background behind the footer link |
| Declared primary background | `#f6f6fb` | `--zad-color-bg_primary`; retained as a declaration, with no selected control assigned to this role |
| Declared error | `#fc605b` | `--zad-color-label_error`; no error interaction was exercised |
| Declared link | `#e99300` | `--zad-color-label_link`; also present in the rendered text census |

Alpha values stay explicit: `--zad-color-label_body` is `rgba(3,5,22,0.8)`, secondary label is `rgba(3,5,22,0.64)`, and divider is `rgba(3,5,22,0.08)`. The measured footer link uses `rgba(255, 255, 255, 0.6)`.

The declared `--zad-color-primary_c_press` resolves to `#00996a`. The selected actions' measured pointer-pressed fill is `#30c396`; no component state is inferred from that variable's name.

## Typography

| Evidence class | What was established |
|---|---|
| Official product use | No opened brand or product document explicitly names a product typeface. |
| Live-loaded | `document.fonts` lists `Nunito 400 normal`, `Nunito 500 normal`, `Nunito 700 normal` and `Quicksand-Bold normal normal`. Body, sampled h1 and button computed families begin with Nunito; all five selected controls compute to Nunito. Only Nunito is assigned to the reference's interface family. |
| Official distributed assets | The site's linked CSS serves Nunito through Regular, Medium and Bold TTF URLs on `cdn.zaticdn.com`; another linked stylesheet supplies the loaded Quicksand-Bold asset. A separate public brand-font package and its licence were not verified. The TTF files were not downloaded. |
| Declared-only | Nunito at weight 610, the `Nunito-Medium` and `Nunito-Bold` family aliases, and Quicksand-Medium / Quicksand-Light / Quicksand-Regular appear in the inspected CSS but not in the census's loaded list under those registrations. The body fallback stack also names platform faces that were not established as loaded faces. These registrations receive no specimen. |
| Unresolved | The exact face rendering Han glyphs and the role of the loaded Quicksand-Bold face were not identified. No heading-size or paragraph-size scale was measured. Substitute: none chosen. |

The serving rules are visible in the site's [Nunito stylesheet](https://cdn.zaticdn.com/bank/za-bank-portal-web/prd/_next/static/css/7cb8d0bfaa7aaa1a50a7.css) and [shared font stylesheet](https://cdn.zaticdn.com/bank/za-bank-portal-web/prd/_next/static/css/538ffd242f2c450f88d3.css). Nunito weight 610 points to the same Medium file as weight 500; this is a CSS registration, not proof of a separate loaded cut.

Measured interface metrics: header actions **14px / 400**, line height **22px**; navigation **16px / 400**; deposit action **18px / 400**, line height **38px**; footer link **14px / 400**, line height **24px**. The navigation anchor's bounding height is **33.5px**, although its computed line height is **68px**; preserve the distinction between inline box geometry and line height.

## Layout

At the measured 1440 × 1000 viewport, a fraud-warning strip sits above a **68px sticky navigation bar**. A full-width campaign hero leads into three benefit cards. Subsequent service cards alternate text and media positions, followed by security content, dense legal notes, an app-opening panel and a dark footer. The full screenshot retains “Loading…” placeholders in several media areas; their final artwork is unresolved.

The declared spacing scale is **2, 4, 8, 12, 16, 20, 24 and 32px** (`--zad-distance-spacing_xxxs` through `_xl`). The measured header action padding uses 7px vertically and 16px horizontally; local component geometry therefore extends beyond the named spacing list.

### Responsive Behavior

Not measured: one desktop viewport at 1440 × 1000; no mobile layout, breakpoint or touch-state claim is made.

## Elevation & Depth

The visible hero and benefit icons provide pictorial depth. Selected control surfaces have `box-shadow: none`; no card-elevation or shadow scale was verified. The declared mask is `rgba(3,5,22,0.6)` and toast background is `rgba(3,5,22,0.8)`; no mask or toast state was exercised.

## Motion & Easing

The exact computed transition strings recorded by the probe are:

- Header actions, insurance navigation and footer link: `opacity 0.2s ease-in-out 0s`.
- Deposit action: `background-color, color 0.8s, 0.5s ease, ease 0s, 0s`.

The second string is retained exactly as serialized by the probe. It is not normalized into a timing prescription. No hero-animation or reduced-motion behavior was verified.

---

Live values and visual observations: [Hong Kong homepage](https://bank.za.group/hk), captured 2026-11-03 with `probe_page` survey and states. Narrative: [company profile](https://bank.za.group/hk/faqs/about/about_wo/about_wog/67483350248ac94b45ccd025), [CEO letter](https://blog.za.group/en/article/letter-from-za-bank-ceo-hk). Entity and country evidence: [official privacy notice, page 5](https://bank.za.group/assets/files/en/terms/Privacy%20Policy%20Statement.pdf) and [contact page](https://bank.za.group/en/consulting-feedback). Exact evidence paths, control identities and source limitations are recorded in `verification.md` and `report.md`.

## Components

All selected controls are anchors. The two header actions have no `href`; the product action is a link inside a feature card, rather than a clickable whole card.

| Control | Rest identity | Hover and pointer press |
|---|---|---|
| `signup` — 登記開戶 | 102 × 36px; 100px radius; 7px 16px padding; 14px / 400; `#39e5b1` fill, `#030516` label | Fill `#30c396`; label unchanged |
| `download` — 下載 ZA Bank App | 143.5 × 36px; 100px radius; 7px 16px padding; 14px / 400; `#f6f7fb` fill, `#030516` label | Fill `#d1d2d5`; label unchanged |
| `nav-insurance` — 保險 | 56 × 33.5px; 100px radius; 6px 12px padding; 16px / 400; transparent over `#ffffff`, `#0b0e26` label | Fill `#f6f7fb`; label unchanged |
| `deposit-more` — 了解更多 | 130 × 38px; 100px radius; 0px 20px padding; 18px / 400; `#39e5b1` fill, `#030516` label | Fill `#30c396`; label and SVG arrow unchanged |

All four have computed border and box shadow `none` at rest. Pointer press added no difference beyond hover in the compared scope. The 100px action radii produce pills at these heights; the reference's separate numeric radius scale comes from declared `--zad-border-radius_*` variables: **2, 4, 8, 14 and 20px**.

The footer `關於 ZA Bank` link is 82.6 × 19px, 0px radius and padding, with a transparent background and a 60%-white label over `#253d5b`. Its measured states had no compared visual change, so it is described here and omitted from component tokens.

### States

| Control | Hover | Pointer pressed | Keyboard focus |
|---|---|---|---|
| Signup | `#30c396` fill | Same as hover | UNMEASURED: not reached in the 53-press Tab walk |
| Download | `#d1d2d5` fill | Same as hover | UNMEASURED: not reached in that walk |
| Insurance navigation | `#f6f7fb` fill | Same as hover | Tab #3; no compared visual change |
| Deposit action | `#30c396` fill | Same as hover | Tab #8; no compared visual change |
| Footer about link | No compared visual change | No compared visual change | Tab #23; no compared visual change |

“No compared visual change” covers the control, its pseudo-elements, descendants and their pseudo-elements, and three ancestor levels with pseudo-elements. The two mint controls include one SVG and one path; the other selected controls have no descendants. The probe covers style, image-source and SVG attributes, not canvas pixels, sibling changes or closed shadow roots. No authored or browser-default focus ring was observed on the three reached controls. No disabled state was measured.

Both captures have `consent.rejectedVia: null`, without a consent-rejection summary line. The inspected viewports show a fraud notice and chat launcher, with no visible consent reject button. These state values remain raw observations with that consent limitation recorded in verification notes. No dialog close selector or overlay hiding was used. Deposit and footer pointer snapshots matched their states, but their crop step subsequently reported losing `:hover` / `:active`; the signup, download and navigation crops succeeded.

## Do's and Don'ts

- Repeat mint pill actions with dark labels; preserve the measured darkening on hover and pointer press.
- Keep the lighter secondary header action distinct from the mint signup action.
- Use the measured paragraph foreground and interface-label roles separately.
- Keep observed control states separate from CSS variables that merely have state-like names.
- Assign Nunito to the measured interface family; leave unresolved Han font selection unassigned.

## Voice & Tone

The Traditional Chinese homepage mixes finance terms with conversational Cantonese, including “你話事” in its ZA Card copy. Its brand message addresses changing familiar banking conventions, while the page places risk statements and qualifications beside promotional offers. These are observations of the [homepage's authored copy](https://bank.za.group/hk), not a separately published tone guide.

## Agent Prompt Guide

“Build a ZA Bank-style desktop header using the measured Nunito interface family. Make the signup action a 36px-tall mint pill with 7px 16px padding, dark 14px / 400 text and a 100px CSS radius. Change its fill from `#39e5b1` to `#30c396` on hover and pointer press. Pair it with a pale `#f6f7fb` secondary action that changes to `#d1d2d5`.”

“For a service feature, use the measured 38px action-link geometry: 0px 20px padding, 18px / 400 text and a mint fill. Keep the action's dimensions separate from the surrounding feature card.”

No additional font, focus treatment, mobile behavior or animation value is supplied by these prompts.

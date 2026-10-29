---
name: Odoo
colors:
  primary: '#714b67'
  secondary: '#017e84'
  foreground: '#111827'
  nav-ink: '#374151'
  background: '#ffffff'
  surface: '#f3f4f6'
  light-border: '#f8f9fa'
  primary-hover: '#604058'
  primary-pressed: '#5a3c52'
  primary-pressed-border: '#55384d'
  advisor-hover: '#e6e9ed'
  advisor-active: '#f9fafb'
  link-hover: '#432c3d'
  accent-coral: '#fc787d'
  accent-amber: '#fbb130'
  accent-sky: '#1bb6f9'
  accent-mint: '#00ceb3'
typography:
  button:
    fontSize: 16px
    fontWeight: 600
    use: Hero CTA and advisor control; 24px line height, live-loaded Inter
  navigation:
    fontSize: 14px
    fontWeight: 600
    use: Header Pricing link; live-loaded Inter
  caption:
    fontSize: 14px
    fontWeight: 600
    use: Accounting tile figcaption; live-loaded Inter
rounded:
  none: 0px
  sm: 4.8px
  md: 6.4px
  lg: 8px
components:
  hero-cta:
    type: button
    backgroundColor: '#714b67'
    textColor: '#ffffff'
    border: '1px solid #714b67'
    rounded: 6.4px
    height: 50px
    padding: 12px 24px
    typography: 16px / 600
    hover: 'bg #604058; border 1px solid #5a3c52'
    pressed: 'bg #5a3c52; border 1px solid #55384d'
    focus: 'bg #604058; border 1px solid #5a3c52; box-shadow 0 0 0 4px rgba(134,102,126,0.5)'
    use: Main Start now - It's free anchor to /trial; 199.3px wide. All states retain linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0)) over the background. White label remains unchanged.
  advisor:
    type: button
    backgroundColor: '#f3f4f6'
    textColor: '#714b67'
    border: '1px solid #f8f9fa'
    rounded: 6.4px
    height: 50px
    padding: 12px 24px
    typography: 16px / 600
    hover: 'bg #e6e9ed; fg #111827; border 1px solid #f9fafb'
    pressed: 'bg #f9fafb; fg #111827; border 1px solid #f9fafb'
    focus: 'bg #f9fafb; fg #111827; border 1px solid #f9fafb; box-shadow 0 0 0 4px rgba(213,215,218,0.5)'
    use: Meet an advisor dropdown anchor, 174.1px wide. All states retain the same 145deg white-to-transparent gradient as the primary CTA.
  nav-pricing:
    type: button
    textColor: '#374151'
    rounded: 0px
    height: 17px
    padding: 0px 20px
    typography: 14px / 600
    hover: 'fg #111827'
    pressed: 'fg #111827'
    focus: 'fg #111827'
    use: Header Pricing anchor to /pricing, measured inline rect 87.5x17px and line-height 60px; computed background transparent over measured white. Background is retained in prose rather than a machine bg field. No drawn outline or shadow in measured states.
  app-accounting:
    type: card
    textColor: '#111827'
    rounded: 0px
    height: 133px
    padding: 0px
    typography: 14px / 600
    hover: 'transform translateY(-4px); anchor color #432c3d; visible caption stays #111827'
    pressed: 'transform translateY(-4px); anchor color #432c3d; visible caption stays #111827'
    use: 'Accounting app link to /app/accounting, 146.7x133px; computed background transparent over #f3f4f6, retained in prose rather than a machine bg field. fg and font describe the visible figcaption; the anchor itself is Inter 16px/600 with rest color #714b67. Its 80x80px image has a white background and 0 12px 24px rgba(27,182,249,0.1) shadow. Keyboard focus showed only the browser auto outline, so no brand focus token is emitted.'
  header-cta:
    type: button
    backgroundColor: '#714b67'
    textColor: '#ffffff'
    border: '1px solid #714b67'
    rounded: 4.8px
    height: 36px
    padding: 8px 16px
    typography: 12px / 600
    hover: 'bg #604058; border 1px solid #5a3c52'
    pressed: 'bg #5a3c52; border 1px solid #55384d'
    focus: 'bg #604058; border 1px solid #5a3c52; box-shadow 0 0 0 4px rgba(134,102,126,0.5)'
    use: Header Try it free anchor to /trial; 90px wide. It retains the same 145deg white-to-transparent gradient and white label across all measured states.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Inter
    display: Caveat
---

# Design System Inspiration of Odoo

## Overview

### Visual Theme & Atmosphere

Odoo brings business applications for areas such as accounting, CRM, inventory, commerce and project management into an integrated suite. Its company page describes software that handles complex business needs while remaining easy to adopt, with applications added as a company grows. [Company](https://www.odoo.com/page/about-us).

The move from OpenERP to Odoo in 2014 gave the brand room for website building, commerce and other applications beyond ERP. Fabien Pinckaers's account describes a website-first design process: the website became the reference for other brand materials. A companion announcement associates the purple logo with creativity, originality and innovation. [Rebrand account](https://www.odoo.com/blog/odoo-news-5/odoo-the-new-openerp-156), [2014 announcement](https://www.odoo.com/blog/odoo-news-5/big-day-for-odoo-157).

The current homepage pairs large Caveat handwriting, drawn highlights and arrows with orderly Inter controls. Purple buttons sit on white; a pale grey field holds a six-column app grid with colourful icons. This makes the marketing surface feel informal while its navigation and calls to action stay compact. The current product story adds native AI to the integrated-app proposition and distinguishes the Community and Enterprise editions. These observations describe the public homepage captured on 2026-10-29. [Homepage](https://www.odoo.com/).

### Brand Narrative

The 2014 rename made the identity broad enough for individual applications outside ERP. The same account ties brand guidelines to the website itself. The current homepage continues to make the breadth legible through individual app icons and a single integrated-platform proposition. This is a reading of the historical account beside today's page, not a claim of a newly announced rebrand. [Rebrand account](https://www.odoo.com/blog/odoo-news-5/odoo-the-new-openerp-156), [homepage](https://www.odoo.com/).

### Principles

Odoo's stated mission joins intuitive use, comprehensive functionality, integration and straightforward upgrades. For this visual reference, the measured implementation suggests pairing an expressive display layer with compact, consistent controls. That second point is an implementation observation, not a quoted corporate principle. [Company](https://www.odoo.com/page/about-us).

### Personas

No research-backed persona evidence was opened.

## Colors

The live root exposes 409 computed custom properties. Odoo's palette and colour-combination properties are separated from Bootstrap defaults in the accompanying report. The primary and secondary below also match the official brand page. [Brand assets](https://www.odoo.com/page/brand-assets), [live frontend stylesheet](https://odoocdn.com/web/assets/1/9c4f0a1/web.assets_frontend.min.css).

| Role | Value | Evidence and use |
|---|---|---|
| Primary | `#714b67` | `--o-color-1`; hero and header CTA backgrounds; official primary |
| Secondary | `#017e84` | `--o-color-2`; official secondary; not the advisor button's background |
| Foreground | `#111827` | `--o-color-5`; most frequent paragraph ink, 16 paragraphs; Accounting caption |
| Navigation ink | `#374151` | Pricing at rest; `--body-color` also has this value |
| Background | `#ffffff` | `--o-color-4`; 41 rendered backgrounds; CTA text |
| Surface | `#f3f4f6` | `--secondary-bg`; advisor rest background and app-grid backdrop |
| Light border | `#f8f9fa` | `--o-color-3`; advisor rest border |
| Primary hover | `#604058` | Measured primary CTA hover background |
| Primary pressed / hover border | `#5a3c52` | Measured pressed background and hover border |
| Primary pressed border | `#55384d` | Measured pressed border |
| Advisor hover | `#e6e9ed` | Measured hover background |
| Advisor active | `#f9fafb` | Measured pressed/focus background and interaction border |
| Link hover | `#432c3d` | Accounting anchor's computed hover/pressed color; its visible caption stays dark |
| Coral / amber | `#fc787d` / `#fbb130` | `--o-color-6` / `--o-color-7`; available palette accents |
| Sky / mint | `#1bb6f9` / `#00ceb3` | `--o-color-8` / `--o-color-9`; available palette accents |

The accent names above are descriptive reference labels, not verified semantic status roles. The official brand page separately lists grey `#8f8f8f`; it is not promoted into this homepage's live-extracted tokens. Paragraph ink establishes the `foreground` role even though the root `--body-color` is `#374151`.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product use | No opened source establishes a font for the authenticated application interface. The official **brand page** specifies Inter for headings/titles at weights 500–700 and line-height 1, and for paragraphs at weight 400 and line-height 1.5. This is brand guidance, not a measurement of every product screen. |
| Live-loaded | `document.fonts` reports **Inter 300, 400, 500, 600 normal** and **Caveat 700 normal**. The homepage body/button family declares Inter first; H1 declares Caveat. These are the two text families in the tokens. |
| Official distributed assets | The first-party frontend CSS imports Inter 300/400/500/600 and Caveat 700 through Google Fonts with `display=swap`. No standalone text-font package was opened. |
| Declared-only | **Odoo Unicode Support Noto** occurs after Inter in the body/button CSS family list, but was absent from the loaded-face census. No specimen is supplied for it. Other generic/system stacks in framework settings do not establish rendered brand faces. |
| Unresolved | Exact text-font binary URLs and their licensing were not inspected. Inter 700 is documented on the brand page but was not in this capture's loaded faces. |

The census also loaded FontAwesome, odoo_ui_icons and MarshmallowIcons. These are icon faces and are excluded from text-family tokens. The CSS imports provide the serving route for Inter and Caveat; the census's own `fontFaces` array is empty because its two stylesheet reads were blocked by cross-origin CSSOM access. [Brand typography](https://www.odoo.com/page/brand-assets), [CSS imports and icon font declarations](https://odoocdn.com/web/assets/1/9c4f0a1/web.assets_frontend.min.css).

Measured type: hero CTA and advisor **16px/600**, line-height **24px**; header CTA **12px/600**, line-height **18px**; Pricing **14px/600**, line-height **60px**, with a **17px inline rectangle**; Accounting's caption **14px/600**, inside a **16px/600** anchor. The survey's Caveat “Compare with SAP” link is **32px/700**, line-height **35.2px**; this is not a measurement of the hero heading's size.

Substitute: none chosen.

## Layout

In the desktop capture, the logo sits left, product navigation is centred, and sign-in/trial actions sit right. A centred headline and paired CTAs lead into a six-column app grid, followed by product demonstrations, benefit cards, a customer quotation and a final CTA. Broad curved section edges and generous white/grey fields organise the page. The grid's measured link boxes are approximately 146.7px wide, with row starts 149px apart. [Captured homepage](https://www.odoo.com/).

The root `--o-grid-gutter-width` is **32px**. Control padding is local: **12px 24px** on the hero pair, **8px 16px** on the header CTA and **0 20px** on Pricing. These observations do not establish a universal spacing scale.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; mobile layout, breakpoint transitions and touch states are unmeasured.

## Elevation & Depth

The buttons use a subtle white gradient rather than a resting drop shadow. Accounting's icon image has **`0 12px 24px 0 rgba(27,182,249,0.1)`**. Keyboard focus adds a **4px spread shadow** to the purple CTAs and advisor control. Those measured values belong to different elements and roles; they are not a universal elevation ladder.

## Motion & Easing

The measured hero, advisor and header CTA transitions are **150ms ease-in-out** for color, background-color, border-color and box-shadow. Accounting uses **`all 0.2s ease-in-out`** and settles at **`matrix(1, 0, 0, 1, 0, -4)`** on hover and press. The first-party CSS independently declares the tile's `translateY(-0.25rem)` hover rule. Pricing's own transition is **`all 0s ease 0s`**; the probe reports a 500ms longest transition whose origin was not resolved. Reduced-motion behaviour was not tested. [Frontend stylesheet](https://odoocdn.com/web/assets/1/9c4f0a1/web.assets_frontend.min.css).

## Components

Five controls were measured at 1440×1000, `en-US`, on the public homepage. Values below are computed backgrounds, not flattened screenshot colours.

| Control | Rest identity | Hover | Pressed | Keyboard focus |
|---|---|---|---|---|
| Hero “Start now - It's free” | 199.3×50px; radius 6.4px; padding 12px 24px; Inter 16px/600; bg `#714b67`, fg `#ffffff`; 1px `#714b67` border | bg `#604058`; border `#5a3c52` | bg `#5a3c52`; border `#55384d` | Hover colours plus `0 0 0 4px rgba(134,102,126,0.5)` shadow |
| “Meet an advisor” | 174.1×50px; radius 6.4px; padding 12px 24px; Inter 16px/600; bg `#f3f4f6`, fg `#714b67`; 1px `#f8f9fa` border | bg `#e6e9ed`, fg `#111827`, border `#f9fafb` | bg and border `#f9fafb`, fg `#111827` | Pressed colours plus `0 0 0 4px rgba(213,215,218,0.5)` shadow |
| Header “Pricing” | 87.5×17px inline rect; radius 0; padding 0 20px; Inter 14px/600; transparent bg over white, fg `#374151`; no border | fg `#111827` | fg `#111827` | fg `#111827`; no drawn outline or shadow |
| “Accounting” app tile | Anchor 146.7×133px; radius 0; padding 0; Inter 16px/600; transparent over `#f3f4f6`, anchor color `#714b67`; visible caption 14px/600 `#111827` | Anchor color `#432c3d`; `translateY(-4px)`; caption stays `#111827` | Same measured result as hover | Browser `auto` outline only; no brand focus token |
| Header “Try it free” | 90×36px; radius 4.8px; padding 8px 16px; Inter 12px/600; bg `#714b67`, fg `#ffffff`; 1px `#714b67` border | bg `#604058`; border `#5a3c52` | bg `#5a3c52`; border `#55384d` | Hover colours plus the primary 4px shadow |

Both purple CTAs and the advisor control retain **`linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0))`** in every measured state. Their resting shadows are `none`. The white labels on the two purple CTAs remain white. The Accounting image is **80×80px**, with a white background and the shadow described under Elevation & Depth. Its outer link is square; this does not describe the image's corner radius.

The survey also measured the lower-page CTA at **61px high**, radius **8px**, padding **16px 32px**, Inter **18px/600**. Its interaction states were not measured.

### States

All 15 requested hover/pressed/focus observations were measured: hover flags were true, pressed snapshots had `active: true`, and keyboard focus arrived through real Tab presses. Every state settled for **900ms**. Focus changes reverted after blur. Pressed Accounting and Pricing matched their hover snapshots within the probe's compared scope; this does not establish absence of changes in external images or unobserved siblings.

The Accounting tile's focus was **`rgb(0, 95, 204) auto 1px`**, offset **1px**. It is the browser's own outline and is omitted from component focus tokens. Disabled, validation, loading and error states were not measured and are omitted.

## Do's and Don'ts

- Pair Caveat display writing with Inter interface labels when recreating this homepage's expression.
- Preserve the primary CTA's white gradient and its distinct hover, pressed and keyboard-focus treatments.
- Keep the Accounting caption dark when applying the measured 4px upward tile movement.
- Use the supplied logo artwork, retain clear space and respect the brand page's minimum height of **20px**. Capitalise the name as **Odoo** in prose. [Logo and naming guidance](https://www.odoo.com/page/brand-assets).
- Keep framework semantic colours and icon fonts separate from the verified brand palette and text families.

## Voice & Tone

The homepage combines short, direct benefit statements with informal display writing. Its promise connects an integrated platform with simplicity and affordability; its current copy gives AI a prominent role. The company mission similarly pairs business capability with ease of use. [Homepage](https://www.odoo.com/), [company mission](https://www.odoo.com/page/about-us).

## Agent Prompt Guide

“Build an Odoo homepage-style hero with Caveat display lettering, Inter controls, white space and pale grey sections. Use a 50px CTA with 6.4px corners, 12px 24px padding, Inter 16px/600, white text and a `#714b67` background under the measured 145° white-to-transparent gradient. Hover changes the background to `#604058` and border to `#5a3c52`; press changes them to `#5a3c52` and `#55384d`. Keyboard focus uses the hover colours plus a 4px `rgba(134,102,126,0.5)` shadow.”

This prompt follows the public marketing surface and does not specify the authenticated application's design.

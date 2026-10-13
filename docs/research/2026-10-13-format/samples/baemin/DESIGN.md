---
name: Baemin
colors:
  primary: '#0cefd3'
  canvas: '#ffffff'
  foreground: '#222222'
  baemin-dark: '#000000'
  baemin-panel: '#f6f6f6'
  corporate-foreground: '#232324'
  corporate-muted: '#6c6d6f'
  corporate-surface: '#f3f4f5'
  corporate-disabled: '#cccccc'
  corporate-border: '#a6a7a9'
  on-dark: '#ffffff'
typography:
  baemin-hero:
    fontSize: 60px
    fontWeight: 800
    lineHeight: 84px
  baemin-heading:
    fontSize: 24px
    fontWeight: 700
  baemin-button:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 22.4px
  corporate-heading:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 52px
    letterSpacing: '-1.2px'
  corporate-card-title:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: '-0.4px'
  corporate-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: '-0.32px'
  corporate-label:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 21px
    letterSpacing: '-0.32px'
  catalog-title:
    fontSize: 48px
    fontWeight: 700
    lineHeight: 64.8px
    letterSpacing: '-0.32px'
rounded:
  corporate-control: 8px
  download-card: 12px
  media-control: 16px
  circle: 9999px
spacing:
  xs: 6
  sm: 8
  md: 12
  lg: 16
  xl: 20
  xxl: 24
  section: 32
components:
  app-download-card:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#222222'
    rounded: 12px
    height: 54px
    padding: 14px 19px
    typography: 13.3333px / 400
    hover: '#ffffff'
    pressed: '#ffffff'
    states: 'store buttons: on App Store, hover and pressed measured 2026-09-29 with :hover and :active matched and nothing changes, as a 2026-09-17 run also found; keyboard focus-visible shows no indicator: outline none and nothing else changes (real Tab walk, 2026-09-29); Google Play shares the geometry but its states are unmeasured (corrected 2026-09-29: the #f7f7f7 hover and pressed previously recorded here belong to the QR button, now app-download-qr)'
    use: baemin.com App Store and Google Play download buttons
  baemin-nav-link:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    height: 22px
    typography: 16px / 700
    hover: 'border-bottom 1px solid #ffffff'
    pressed: 'border-bottom 1px solid #ffffff'
    states: 'hover and pressed add a 1px solid #ffffff bottom border (22.4px to 23.4px tall, a 1px layout shift) on all three header links in the 2026-07-11 capture and again on 2026-09-29 with :hover and :active matched; keyboard focus-visible shows no indicator: outline none and nothing else changes (real Tab walk, 2026-09-29); corrected 2026-09-29, earlier text said hover not retained'
    use: 'baemin.com top navigation link, white on the mint #0cefd3 navigation bar'
  woowa-more-light:
    type: button
    backgroundColor: '#f3f4f5'
    textColor: '#232324'
    rounded: 8px
    height: 52px
    padding: 0 22px
    typography: 16px / 700
    states: default captured; hover not retained
    use: Woowa corporate light read-more action
  woowa-more-overlay:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.3)
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 8px
    height: 52px
    padding: 0 22px
    typography: 16px / 700
    states: default on image overlay; hover not retained
    use: Woowa corporate overlay read-more action
  woowa-site-selector:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#6c6d6f'
    border: '1px solid #a6a7a9'
    rounded: 8px
    height: 50px
    padding: 13px 16px
    typography: 14px / 400
    states: default captured; expanded state not retained
    use: Woowa footer family-site selector
  woowa-carousel-control:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.4)
    textColor: '#000000'
    rounded: 50%
    height: 40px
    states: default and disabled navigation states observed
    use: Woowa media carousel navigation
  font-download:
    type: button
    backgroundColor: transparent
    textColor: '#232324'
    height: 28px
    typography: 16px / 700
    states: available download and unavailable/disabled controls observed on the catalog
    use: official font catalog download action
  app-download-qr:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#222222'
    rounded: 12px
    padding: 13px
    size: 54px x 54px
    typography: 13.3333px / 400
    hover: '#f7f7f7'
    pressed: '#f7f7f7'
    states: 'hover and pressed fill #f7f7f7 in the 2026-07-11 capture (home capture 2) and again on 2026-09-29 with :hover and :active matched; keyboard focus-visible shows no indicator: outline none and nothing else changes (real Tab walk, 2026-09-29)'
    use: baemin.com QR-code app download button beside the store buttons
  baemin-gift-pill:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 9999px
    padding: 16px 32px
    height: 58px
    typography: 18px / 700 / 25.2px
    hover: '#000000'
    pressed: '#000000'
    states: 'present in the 2026-09-29 DOM (bottom section) and absent from the 2026-07-11 capture; hover and pressed measured 2026-09-29 with :hover and :active matched and nothing changes; keyboard focus-visible shows no indicator: outline none and nothing else changes (real Tab walk, 2026-09-29)'
    use: baemin.com B2B gift-certificate purchase link (기업용 상품권 구매하기)
  baemin-footer-link:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    height: 39px
    typography: 30px / 700 / 39px
    hover: 'underline #ffffff'
    pressed: 'underline #ffffff'
    states: 'hover and pressed add a #ffffff underline (2026-09-29, :hover and :active matched); keyboard focus-visible shows no indicator: a focus-visible class is applied but outline stays none and nothing else changes (real Tab walk, 2026-09-29)'
    use: 'baemin.com footer service link (배민외식업광장), white on the #000000 footer'
  baemin-footer-legal-link:
    type: button
    backgroundColor: transparent
    textColor: '#b1b3b5'
    height: 19.6px
    typography: 14px / 400 / 19.6px
    hover: 'fg #b1b3b5 (unchanged)'
    pressed: 'fg #b1b3b5 (unchanged)'
    states: 'hover and pressed measured 2026-09-29 with :hover and :active matched: no visible change; keyboard focus-visible shows no indicator: outline none and nothing else changes (real Tab walk, 2026-09-29)'
    use: 'baemin.com footer legal link (개인정보처리방침) on the #000000 footer'
  catalog-fill-button:
    type: button
    backgroundColor: '#232324'
    textColor: '#ffffff'
    rounded: 8px
    padding: 0px 22px
    height: 52px
    typography: 14px / 700 / 28px / -0.3px
    states: 'rest sampled (2026-07-11); the hover and pressed frames change only border-color, #d6d7da to #0cefd3, on a 0px border, so nothing visible changes and no state value is declared; focus not sampled'
    use: Woowa font catalog filled link button (.btn-fill)
  catalog-pill-button:
    type: button
    backgroundColor: '#f3f4f5'
    textColor: '#a6a7a9'
    rounded: 20px
    padding: 0px 22px
    height: 40px
    typography: 14px / 400 / 28px
    states: rest identical on ten same-style buttons (2026-07-11); no pointer-state, selected or focus sample, so none is declared
    use: Woowa font catalog pill button (.btn), ten instances
fonts:
  roles:
    ui: BAEMINWORK
  faces:
    BAEMINWORK:
      name: WORK
      scripts:
        - hangul
      evidence:
        - official-product-use
      surface: app
      source: https://www.woowahan.com/report/detail/975?page=1
      distribution: unresolved
    Hanna:
      evidence:
        - official-distributed-asset
      source: https://www.woowahan.com/fonts
      distribution: public
      licence: https://www.woowahan.com/fonts/license
    Jua:
      evidence:
        - official-distributed-asset
      source: https://www.woowahan.com/fonts
      distribution: public
      licence: https://www.woowahan.com/fonts/license
    Dohyeon:
      evidence:
        - official-distributed-asset
      source: https://www.woowahan.com/fonts
      distribution: public
      licence: https://www.woowahan.com/fonts/license
    Euljiro:
      evidence:
        - official-distributed-asset
      source: https://www.woowahan.com/fonts
      distribution: public
      licence: https://www.woowahan.com/fonts/license
    Kkubulim:
      evidence:
        - official-distributed-asset
      source: https://www.woowahan.com/fonts
      distribution: public
      licence: https://www.woowahan.com/fonts/license
    Pretendard Variable:
      evidence:
        - live-surface-use
      surface: woowa-corporate, font-catalog
  safeDefaults:
    hangul:
      - Noto Sans KR
typesetting:
  hangul:
    tracking:
      baemin-web: normal
      woowa-corporate:
        emMin: -0.03
        emMax: -0.0067
---

# Design System Inspiration of Baemin (배달의민족)

## Overview

### Visual Theme & Atmosphere

Baemin is the Korean delivery platform that turned ordering food into a recognizable popular-culture brand through mint color, everyday wit, and an unusually sustained investment in Korean type. Launched in 2010 to move delivery from phone calls into an app, Baemin now describes its mission as keeping what people need from going cold—connecting speed with warmth across customers, restaurant owners, and riders. Its identity expects operational immediacy and familiar neighborhood culture to coexist, rather than forcing efficiency to look anonymous or institutional.

Typography is part of that identity, not decorative garnish. The official Baemin font program began with Hanna, modeled on the uneven acrylic-cut storefront lettering of 1960s–70s Korea, then expanded through Jua, Dohyeon, Euljiro, Kkubulim, and other faces that reinterpret hand-painted signs and vernacular lettering. The same cultural instinct appears in Baemin goods and writing: familiar objects, slightly unexpected forms, and short lines that feel conversational rather than institutional.

Baemin 2.0 adds a clearer digital layer to that playful heritage. In July 2025, Woowa Brothers officially introduced a brighter mint and the new WORK typeface in the Baemin app, describing both as a more vivid, modern, simple, and legible customer-centered identity. This reference therefore combines the current `#0cefd3` live color measurement with the official WORK product-font claim, while keeping exact web, corporate, catalog, and app measurements attached to their own surfaces.

**Key Characteristics:**
- Bright Baemin 2.0 mint: official direction, measured live on baemin.com as `#0cefd3`
- WORK (`BAEMINWORK`): the official current Baemin app typeface, designed for simple and clear digital reading
- A long-running public font program rooted in Korean storefront lettering and freely shared brand culture
- Playful warmth in brand expression, paired with clearer and more direct product communication
- Surface-local metrics: app identity, baemin.com, Woowa corporate UI, and the font catalog are not flattened into one false system

### Primary tasks

- Order food for delivery in the app instead of phoning a restaurant
- Pay for an order and follow its delivery status
- Sort out what went wrong with an order and what to do next
- Improve a restaurant's store operations and reach online demand

### Brand Narrative

Baemin launched in 2010 with the aim of advancing food delivery through information technology, moving a phone-call habit into an app experience. Its identity grew beyond utility: the official company history describes Hanna—the first freely shared Baemin font—as an integral brand symbol that helped widen the landscape of Hangeul type.

That public type program became a durable expression of how Baemin sees culture. Hanna preserved the charming imprecision of hand-cut acrylic signs; later faces explored hand-painted storefronts, connected strokes, weathering, and bent forms. Fonts, goods, and music are presented by Woowa Brothers as original Baemin cultural assets intended to be used and enjoyed beyond the product itself.

Baemin 2.0 marks a deliberate evolution rather than a rejection of that history. The 2025 rebrand introduced a brighter mint and WORK in the app, alongside a mission centered on delivering immediate satisfaction without letting value “go cold.” The design implication is a dual character: cultural expression can remain witty and tactile, while product interactions become clearer, more legible, and more dependable.

### Principles

These are evidence-derived implementation principles:

1. **Warmth must survive speed.** Fast delivery and clear interaction should still feel human.
2. **Culture is a system asset.** Typography, language, goods, and music can carry the brand beyond the transaction.
3. **Playfulness needs a straight man.** Let campaigns and brand moments bend expectations; keep ordering and recovery flows explicit.
4. **Current clarity beats nostalgia.** WORK and the brighter mint define the product-facing Baemin 2.0 layer; heritage fonts remain purposeful brand assets.
5. **Keep evidence surface-local.** App, marketing web, corporate web, and the font catalog may belong to one brand without sharing every token.

### Personas

These are official stakeholder contexts from Woowa Brothers reporting, not invented demographic personas.

- **Customers:** want an efficient app, accessible service, and a differentiated delivery experience.
- **Restaurant owners:** need practical tools that improve store operations, capability building, and access to online demand.
- **Riders:** need safe working conditions, useful operational support, and confidence in the delivery ecosystem.

## Colors

### baemin.com
- **Accent** (`#0cefd3`): current bright public-web accent text/border observation.
- **Canvas** (`#ffffff`): app-download card and page surfaces.
- **Foreground** (`#222222`): download-card text.
- **Dark** (`#000000`): strongest current text/border observation.
- **Panel** (`#f6f6f6`): quiet current background surface.

### woowahan.com and official font pages
- **Corporate Foreground** (`#232324`): dominant text and control color.
- **Corporate Muted** (`#6c6d6f`): footer and secondary control text.
- **Corporate Surface** (`#f3f4f5`): light read-more and catalog control background.
- **Corporate Disabled** (`#cccccc`): disabled control text.
- **Corporate Border** (`#a6a7a9`): current selector/catalog border.
- **On Dark** (`#ffffff`): text/border on overlay actions.

## Typography

### Current Product Typeface — WORK

**WORK** (captured family name: `BAEMINWORK`) is the current official Baemin app typeface introduced with Baemin 2.0 in July 2025. Woowa Brothers describes it as simpler and clearer than the earlier Hanna-led identity, with diagonal Hangeul strokes reduced into block-like forms. The family is a verified product-font fact; its binary is not publicly loaded by this preview, so the builder shows metadata without substituting another face.

### Official Baemin Font Program

The downloadable font catalog is a separate but essential brand layer. These faces are official Baemin assets and cultural references; they are not automatically the current functional UI font.

| Family | Official origin / character | Evidence boundary |
|---|---|---|
| Hanna | Uneven acrylic-cut lettering from Korean storefront signs of the 1960s–70s | First Baemin font and a historical brand symbol |
| Jua | Rounded, non-uniform strokes inspired by hand-painted storefront signs | Warm display/brand asset, not asserted as app UI |
| Dohyeon | More methodically cut acrylic-sign lettering with connected Hangeul strokes | Display/brand asset, not asserted as app UI |
| Euljiro series | Weathered neighborhood sign lettering imagined across the passage of time | Expressive display/brand asset |
| Kkubulim | Bent rather than simply rounded edges, giving stiff text a free-spirited character | Current catalog asset |

The official license permits personal and corporate commercial/non-commercial use and modification under its stated terms; selling the font files by themselves is prohibited. Bundling or redistribution must retain the license text and reserved-name conditions.

### Verified Surface Metrics

The table below keeps measurements tied to the surfaces where they were observed. The baemin.com and Woowa rows describe current public web rendering, not a fallback stack for the Baemin app.

| Evidence class | Baemin status |
|---|---|
| **Official product-use** | WORK / `BAEMINWORK`, confirmed as applied to the Baemin app in the official Baemin 2.0 announcement |
| **Live surface-use** | System on baemin.com; Pretendard Variable on Woowa corporate and font-catalog surfaces |
| **Official distributed asset** | Hanna, Jua, Dohyeon, Euljiro, Kkubulim, and the wider downloadable Baemin font program |
| **Declared-only** | Heritage BM FontFace assets declared on public pages but not observed as first-family page chrome |
| **Unresolved** | Exact native-app type scale/weights and an authorized browser-loadable WORK specimen |

| Role | Size | Weight | Line Height | Tracking |
|---|---:|---:|---:|---:|
| Baemin Web Hero | 60px | 800 | 84px | normal |
| Baemin Web Heading | 24px | 700 | normal | normal |
| Baemin Web Button | 16px | 700 | 22.4px | normal |
| Corporate Heading | 40px | 700 | 52px | -1.2px |
| Corporate Card Title | 24px | 700 | 36px | -0.4px |
| Corporate Body | 16px | 400 | 24px | -0.32px |
| Corporate Label | 14px | 700 | 21px | -0.32px |
| Font Catalog Title | 48px | 700 | 64.8px | -0.32px |

### Brand face, substitute, safe default

- **Brand face:** WORK (`BAEMINWORK`), the official Baemin app typeface. No authorized browser-loadable WORK file is confirmed, so its distribution is unresolved.
- **Substitute:** none chosen. No measured comparison against an open-licence face exists yet.
- **Safe default (not the brand face):** Noto Sans KR for Hangul, when a project must install a face. Label it as a fallback; never present it as WORK. The downloadable Baemin catalog faces (Hanna, Jua, Dohyeon, Euljiro, Kkubulim) are display assets, not stand-ins for WORK.

### Values kept in prose

- `baemin-heading` line height: `normal` (a computed CSS keyword that the token grammar cannot carry).

## Layout

- baemin.com current control spacing clusters around 6px and 20px.
- Woowa corporate composition repeatedly uses 8px, 12px, 16px, 20px, 24px, and 32px.
- These are public-web values; no native ordering-app grid, breakpoint, or touch-target scale is claimed.

### Responsive Behavior

The public web surfaces are responsive, but this pass does not promote universal breakpoints. Preserve the captured component geometry at the relevant web surface and treat native-app responsive/touch behavior as unresolved until a device-inspectable evidence source exists.

## Elevation & Depth

No canonical shadow token is promoted. Current retained controls use flat fills, borders, or translucent overlays. Earlier five-tier app-shadow claims were not grounded by inspectable native evidence and were removed.

## Motion & Easing

No exact motion duration or easing token is promoted. The native-app motion system remains unresolved; web transitions should be treated as local implementation details until explicitly captured.

## Components

### baemin.com App Download Buttons
- Background: `#ffffff`
- Text: `#222222`
- Radius: 12px
- Height: 54px
- Padding: 14px 19px
- Text style: 13.3333px / 400
- States: on the App Store button, hover and pressed were measured on 2026-09-29 with `:hover` and `:active` confirmed, and nothing changes (a 2026-09-17 run found the same). Google Play shares the geometry; its states are unmeasured.
- Correction (2026-09-29): this block used to say hover was "captured across store/QR variants". The `#f7f7f7` fill belongs to the QR button alone, in the 2026-07-11 capture and in the 2026-09-29 probe; the capture holds no state frame for either store button.
- Use: App Store and Google Play download actions

### baemin.com QR Download Button
- Background: `#ffffff`; hover and pressed `#f7f7f7`
- Text: `#222222`
- Radius: 12px
- Size: 54px × 54px, padding 13px
- Text style: 13.3333px / 400
- States: hover and pressed fill `#f7f7f7` in the 2026-07-11 capture and again on 2026-09-29
- Use: QR-code download action beside the store buttons

### baemin.com Navigation Action
- Background: transparent, on the mint `#0cefd3` navigation bar
- Text: `#ffffff`
- Height: 22px (22.4px measured)
- Text style: 16px / 700
- States: hover and pressed add a 1px solid `#ffffff` bottom border, so the link grows from 22.4px to 23.4px (a 1px layout shift). All three header links show it in the 2026-07-11 capture, and the 2026-09-29 probe reproduces it. The earlier "hover not retained" was wrong against the July capture itself.

### Woowa Light Read-More
- Background: `#f3f4f5`
- Text: `#232324`
- Radius: 8px
- Height: 52px
- Padding: 0 22px
- Text style: 16px / 700
- States: default captured; hover not retained

### Woowa Overlay Read-More
- Background: `rgba(0, 0, 0, 0.3)`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 8px
- Height: 52px
- Padding: 0 22px
- Text style: 16px / 700
- States: default on image overlay; hover not retained

### Woowa Family-Site Selector
- Background: `#ffffff`
- Text: `#6c6d6f`
- Border: 1px solid `#a6a7a9`
- Radius: 8px
- Height: 50px
- Padding: 13px 16px
- Text style: 14px / 400
- States: default captured; expanded state not retained

### Woowa Carousel Control
- Background: `rgba(0, 0, 0, 0.4)`
- Text/Icon context: `#000000`
- Radius: 50%
- Height: 40px
- States: default and disabled navigation states observed

### Official Font Download
- Background: transparent
- Text: `#232324`
- Height: 28px
- Text style: 16px / 700
- States: available download and unavailable/disabled catalog controls observed

### baemin.com Gift-Certificate Pill
- Background: `#000000`
- Text: `#ffffff`
- Radius: 9999px
- Height: 58px
- Padding: 16px 32px
- Text style: 18px / 700 / 25.2px
- States: none. Hover and pressed were measured on 2026-09-29 and nothing changes.
- Use: B2B gift-certificate purchase link (`기업용 상품권 구매하기`) in the bottom section. It is in the 2026-09-29 DOM; the 2026-07-11 capture did not record it.

### baemin.com Footer Links
- Service link (`배민외식업광장`): transparent on the `#000000` footer, text `#ffffff`, 30px / 700 / 39px; hover and pressed add a `#ffffff` underline
- Legal link (`개인정보처리방침`): transparent on the `#000000` footer, text `#b1b3b5`, 14px / 400 / 19.6px; hover and pressed change nothing
- Measured 2026-09-29

### Woowa Font Catalog Buttons
- Filled link button (`.btn-fill`): `#232324` fill, `#ffffff` text, 8px radius, 52px tall, padding 0 22px, 14px / 700 / 28px, tracking -0.3px. Its hover and pressed frames change only the border colour, `#d6d7da` to `#0cefd3`, on a 0px border, so nothing visible changes and no state value is declared.
- Pill button (`.btn`, ten instances): `#f3f4f5` fill, `#a6a7a9` text, 20px radius, 40px tall, padding 0 22px, 14px / 400 / 28px; rest only
- Captured 2026-07-11 on the font catalog

### Keyboard focus on baemin.com (measured 2026-09-29)
A real Tab walk reached six baemin.com controls: the App Store and QR buttons, the gift-certificate pill, both footer link styles and a header link. On every one `:focus-visible` matched, the outline stayed `none`, and background, text, border and shadow did not change. baemin.com shows no keyboard focus indicator, neither an authored one nor the browser's ring. This is a measured accessibility gap (WCAG 2.4.7), not a Baemin focus style, so no focus token is declared.

---

**Verified:** 2026-07-12 (verification v2, four live first-party web surfaces + official Baemin 2.0 product source)
**Tier 1 sources:** https://www.baemin.com/ https://www.woowahan.com/ https://www.woowahan.com/fonts https://www.woowahan.com/fonts/license https://www.woowahan.com/report/detail/975?page=1
**Tier 2 sources:** https://getdesign.md/baemin and https://styles.refero.design/?q=Baemin did not provide importable current records.
**Surface split:** WORK is promoted only as the officially confirmed app family; baemin.com, Woowa corporate, and the asset catalog retain their separately measured metrics and roles.
**Conflicts unresolved:** none

### States

| Component | Verified state evidence |
|---|---|
| App download buttons (App Store) | default; hover and pressed measured with no change (2026-09-29); Google Play unmeasured |
| QR download button | default; hover and pressed `#f7f7f7` (2026-07-11 capture, reproduced 2026-09-29) |
| Navigation link | default; hover and pressed add a 1px `#ffffff` bottom border (2026-07-11 capture, reproduced 2026-09-29) |
| Footer service link | default; hover and pressed underline (2026-09-29) |
| Footer legal link, gift-certificate pill | default; hover and pressed measured with no change (2026-09-29) |
| Keyboard focus on the six baemin.com controls above | no indicator: outline none, nothing changes (2026-09-29) |
| Woowa carousel | default, disabled |
| Font catalog download | available, unavailable/disabled controls |
| Font catalog filled button | default; its hover and pressed frames change nothing visible |
| Other retained buttons | default only; missing states remain explicitly unclaimed |

## Do's and Don'ts

### Do
- Use WORK as the current Baemin app identity when a typeface name is required, while marking live preview availability honestly.
- Keep public-web and corporate type metrics attached to their measured surfaces.
- Treat Hanna, Jua, Dohyeon, Euljiro, and Kkubulim as official brand assets with their own historical character.
- Name each component by its source surface.

### Don't
- Don't replace WORK with System, Arial, Pretendard, or a catalog display face in an app-facing design.
- Don't treat every official Baemin font as a functional product UI family.
- Don't treat `#2ac1bc` as a verified current web token; this run observed `#0cefd3` on baemin.com.
- Don't treat the black pill as retired: the `#000000` 9999px gift-certificate link (`기업용 상품권 구매하기`) is in the 2026-09-29 DOM, though the 2026-07-11 capture did not record it.
- Don't copy baemin.com's missing keyboard focus indicator; it is a measured gap (2026-09-29), not a style.
- Don't fabricate restaurant cards, app tabs, inputs, badges, toasts, native motion, or semantic colors from remembered Baemin patterns.
- Don't infer license permissions from a font file alone; keep the official license page with any redistribution workflow.

## Voice & Tone

Baemin's brand voice is warm, concise, and unexpectedly playful. The humor usually comes from observing an ordinary situation closely—a meal, a neighborhood sign, a familiar household object—then turning it slightly rather than performing a joke for its own sake. Product communication should stay clearer than campaign or merchandise copy: Baemin 2.0 explicitly prioritizes a clear customer experience and confidence in the service.

| Context | Tone |
|---|---|
| Ordering, payment, delivery status | Direct, reassuring, immediately understandable |
| Help and error recovery | Specific about what happened and what the user can do next |
| Campaigns, goods, cultural content | Short, conversational, observant, allowed one surprising turn |
| Restaurant-owner and rider communication | Respectful, practical, partnership-oriented |

Verified brand expressions include the current mission around keeping things from going cold, the long-running use of ordinary-life wordplay in Baemin goods, and the official framing of Baemin fonts as freely shared cultural assets. Do not reuse slogans verbatim as generic UI filler.

## CJK Typesetting

Tracking is surface-specific. baemin.com renders its measured roles with `normal` tracking. Woowa corporate and font-catalog roles use negative tracking from -0.32px to -1.2px at 14px to 48px, which is -0.0067em to -0.03em of the font size (tracking divided by size). No word-break, line-break, or punctuation rule is verified, so none is declared.

## Agent Prompt Guide

- “Reproduce the current baemin.com download action as a 54px white card with 12px radius, 14px 19px padding, `#222222` text, and 13.3333px/400 type.”
- “Use WORK as the Baemin 2.0 product typeface, but leave the live specimen unavailable unless an authorized browser-loadable source is present.”
- “Use the verified Woowa corporate geometry with `#232324` foreground and 8px control radius only for Woowa corporate surfaces.”
- “Pair Baemin's playful cultural character with the clearer, more direct customer experience of Baemin 2.0.”

## Governance

### Known Gaps

- **Contrast, `woowa-carousel-control`.** Text `#000000` on `#00000066` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `font-download`.** Text `#232324` on `#00000000` measures 1.34:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `catalog-pill-button`.** Text `#a6a7a9` on `#f3f4f5` measures 2.19:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Native app type scale.** Exact native-app type sizes and weights for WORK are unresolved; the measured roles are web surfaces.
- **Font file.** No authorized browser-loadable WORK specimen is confirmed, and no substitute has been measured.
- **Keyboard focus.** baemin.com controls measured on 2026-09-29 show no focus-visible indicator (outline none, nothing else changes). This is the measured behaviour, recorded rather than corrected.

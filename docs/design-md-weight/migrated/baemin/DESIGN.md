# Baemin Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Baemin (배달의민족) is the Korean delivery platform that turned ordering food into a recognizable popular-culture brand through mint color, everyday wit, and a sustained investment in Korean type. Launched in 2010 to move delivery from phone calls into an app, it now describes its mission as keeping what people need from going cold—connecting speed with warmth across customers, restaurant owners, and riders. Identity expects operational immediacy and familiar neighborhood culture to coexist, rather than forcing efficiency to look anonymous or institutional.

This contract covers four current first-party public web surfaces plus one official product source: baemin.com, Woowa Brothers corporate (`woowahan.com`), the official font catalog and license pages, and the July 2025 Baemin 2.0 announcement. It does not treat those routes as a proxy for native ordering-app UI, restaurant cards, app tabs, inputs, badges, or toasts.

Typography is part of the identity. The official font program began with Hanna, modeled on uneven acrylic-cut storefront lettering of 1960s–70s Korea, then expanded through Jua, Dohyeon, Euljiro, Kkubulim, and other faces that reinterpret hand-painted signs. Baemin 2.0 adds a clearer digital layer: Woowa Brothers officially introduced a brighter mint and the WORK typeface in the app, describing both as a more vivid, modern, simple, and legible customer-centered identity. Live `#0cefd3` on baemin.com is paired with that official WORK product-font claim; exact web, corporate, catalog, and app measurements stay attached to their own surfaces. Official history and the 2.0 announcement provide narrative context; they do not flatten those surfaces into one token set.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=1 lang=en -->
### Primary tasks

- Keep what people need from going cold by ordering through the Baemin app.
<!-- design-md:claim-end -->

### Audience

No invented demographic personas are promoted. Source §13 names three official stakeholder contexts, without fictional biographies: customers seeking an efficient app, accessible service, and a differentiated delivery experience; restaurant owners who need practical operational tools and online demand; and riders who need safe working conditions and useful operational support. Those three groups remain Audience. The independently verified user outcome is the official Baemin 2.0 mission already in Experience scope (`baemin-app-rebrand`, https://www.woowahan.com/report/detail/975?page=1). Restaurant-owner operational-tools and rider-safety bullets stay here as named stakeholder needs; source §13 cites no source id or URL that would map them as separate Primary tasks.

### Distinctive traits

- Bright Baemin 2.0 mint, measured live on baemin.com as `#0cefd3`
- WORK (`BAEMINWORK`): official current Baemin app typeface; not substituted by the live System or Pretendard Variable stacks on public web
- A long-running public font program rooted in Korean storefront lettering and freely shared brand culture
- Playful warmth in brand expression, paired with clearer and more direct Baemin 2.0 product communication
- Surface-local metrics: app identity, baemin.com, Woowa corporate UI, and the font catalog are not one system

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Baemin-authored or a separately published UI specification.

1. **Warmth must survive speed.** Fast delivery and clear interaction should still feel human.
2. **Culture is a system asset.** Typography, language, goods, and music can carry the brand beyond the transaction.
3. **Playfulness needs a straight man.** Let campaigns and brand moments bend expectations; keep ordering and recovery flows explicit.
4. **Current clarity beats nostalgia.** WORK and the brighter mint define the product-facing Baemin 2.0 layer; heritage fonts remain purposeful brand assets.
5. **Keep evidence surface-local.** App, marketing web, corporate web, and the font catalog may belong to one brand without sharing every token.

Capture-bound application:

- Use WORK as the current Baemin app identity when a typeface name is required, and mark live preview availability honestly.
- Keep public-web and corporate type metrics attached to their measured surfaces.
- Treat Hanna, Jua, Dohyeon, Euljiro, and Kkubulim as official brand assets with their own historical character.
- Name each component by its source surface.

### Avoid

- Do not replace WORK with System, Arial, Pretendard, or a catalog display face in an app-facing design.
- Do not treat every official Baemin font as a functional product UI family.
- Do not treat `#2ac1bc` as a verified current web token; this run observed `#0cefd3` on baemin.com.
- Do not retain the old black pill CTA after it disappeared from the current capture.
- Do not fabricate restaurant cards, app tabs, inputs, badges, toasts, native motion, or semantic colors from remembered Baemin patterns.
- Do not infer license permissions from a font file alone; keep the official license page with any redistribution workflow.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

baemin.com:

- **Accent** (`#0cefd3`): current bright public-web accent text/border observation, aligned with the official Baemin 2.0 brighter mint direction.
- **Canvas** (`#ffffff`): app-download card and page surfaces.
- **Foreground** (`#222222`): download-card text.
- **Dark** (`#000000`): strongest current text/border observation.
- **Panel** (`#f6f6f6`): quiet current background surface.

woowahan.com and official font pages:

- **Corporate Foreground** (`#232324`): dominant text and control color.
- **Corporate Muted** (`#6c6d6f`): footer and secondary control text.
- **Corporate Surface** (`#f3f4f5`): light read-more and catalog control background.
- **Corporate Disabled** (`#cccccc`): disabled control text.
- **Corporate Border** (`#a6a7a9`): current selector/catalog border.
- **On Dark** (`#ffffff`): text/border on overlay actions.

These are surface-local roles. Do not merge baemin.com `#222222` with corporate `#232324`, or treat `#2ac1bc` as a replacement for `#0cefd3`.

### Spacing

- baemin.com current control spacing clusters around 6px and 20px.
- Woowa corporate composition repeatedly uses 8px, 12px, 16px, 20px, 24px, and 32px.
- Captured values: 6px on baemin.com; 8px, 12px, 16px, 20px, 24px, and 32px on Woowa. These are public-web values, not a native ordering-app grid.

### Shape

- Download card: 12px
- Corporate control: 8px
- Media control: 16px
- Circle: 9999; the captured Woowa carousel control uses `50%`

12px download-card corners and 8px corporate-control corners are local geometry, not a universal radius scale.

### Elevation

No canonical shadow token is promoted. Current retained controls use flat fills, borders, or translucent overlays (`rgba(0, 0, 0, 0.3)` overlay read-more; `rgba(0, 0, 0, 0.4)` carousel). Earlier five-tier app-shadow claims were not grounded by inspectable native evidence and were removed.

### Motion

No exact motion duration or easing token is promoted. The native-app motion system remains unresolved. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. A generic web-transition observation, or official documentation of a single curve or duration, is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists. No motion token is promoted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Baemin status |
|---|---|
| Official product-use | WORK / `BAEMINWORK`, confirmed as applied to the Baemin app in the official Baemin 2.0 announcement |
| Live surface-use | System on baemin.com; Pretendard Variable on Woowa corporate and font-catalog surfaces |
| Official distributed asset | Hanna, Jua, Dohyeon, Euljiro, Kkubulim, and the wider downloadable Baemin font program |
| Declared-only | Heritage BM FontFace assets declared on public pages but not observed as first-family page chrome |
| Outside this capture | Exact native-app type scale/weights and an authorized browser-loadable WORK specimen |

The family is a verified product-font fact; its binary is not publicly loaded by this preview, so metadata is shown without substituting another face. Do not present System, Arial, Pretendard, or a catalog display face as WORK.

### Family

- **Current official app family:** WORK (`BAEMINWORK`). Woowa Brothers describes it as simpler and clearer than the earlier Hanna-led identity, with diagonal Hangeul strokes reduced into block-like forms.
- **baemin.com live rendering:** System. Not a fallback stack for the Baemin app.
- **Woowa corporate and font-catalog live rendering:** Pretendard Variable. Not a fallback stack for the Baemin app.

### Official Baemin Font Program

The downloadable font catalog is a separate but essential brand layer. These faces are official Baemin assets and cultural references; they are not automatically the current functional UI font.

| Family | Official origin / character | Evidence boundary |
|---|---|---|
| Hanna | Uneven acrylic-cut lettering from Korean storefront signs of the 1960s–70s | First Baemin font and a historical brand symbol |
| Jua | Rounded, non-uniform strokes inspired by hand-painted storefront signs | Warm display/brand asset, not asserted as app UI |
| Dohyeon | More methodically cut acrylic-sign lettering with connected Hangeul strokes | Display/brand asset, not asserted as app UI |
| Euljiro series | Weathered neighborhood sign lettering imagined across the passage of time | Expressive display/brand asset |
| Kkubulim | Bent rather than simply rounded edges, giving stiff text a free-spirited character | Current catalog asset |

The official license permits personal and corporate commercial/non-commercial use and modification under its stated terms; selling the font files by themselves is prohibited. Bundling or redistribution must retain the license text and reserved-name conditions. Do not infer those permissions from a font file alone.

### Type roles

The table keeps measurements tied to the surfaces where they were observed. The baemin.com and Woowa rows describe current public web rendering, not a fallback stack for the Baemin app.

| Role | Size | Weight | Line height | Tracking | Surface |
|---|---:|---:|---:|---:|---|
| Baemin Web Hero | 60px | 800 | 84px | normal | baemin.com live System |
| Baemin Web Heading | 24px | 700 | normal | normal | baemin.com live System |
| Baemin Web Button | 16px | 700 | 22.4px | normal | baemin.com live System |
| Corporate Heading | 40px | 700 | 52px | -1.2px | Woowa corporate Pretendard Variable |
| Corporate Card Title | 24px | 700 | 36px | -0.4px | Woowa corporate Pretendard Variable |
| Corporate Body | 16px | 400 | 24px | -0.32px | Woowa corporate Pretendard Variable |
| Corporate Label | 14px | 700 | 21px | -0.32px | Woowa corporate Pretendard Variable |
| Font Catalog Title | 48px | 700 | 64.8px | -0.32px | Official font catalog Pretendard Variable |

Exact native-app WORK scale and weights are omitted.

### Assets

- baemin.com favicon: `https://www.baemin.com/favicon.ico`
- Official font catalog: `https://www.woowahan.com/fonts`
- Official license: `https://www.woowahan.com/fonts/license`

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

| Component | Verified state evidence |
|---|---|
| App download card | default, hover |
| Woowa carousel | default, disabled |
| Font catalog download | available, unavailable/disabled controls |
| Other retained buttons | default only; missing states remain explicitly unclaimed |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

### baemin.com App Download Card

- Role: app-store and QR download action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#222222`
- Radius: 12px
- Height: 54px
- Padding: 14px 19px
- Font: 13.3333px / 400
- Surface: baemin.com
- Observed: default and hover captured across store/QR variants. Hover visual values are not separately listed.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on baemin.com store/QR variants |
| hover | applicable | Pointer-web download action; hover captured, values not separately listed |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A store or QR download action can be unavailable; visual treatment omitted |
| loading | not-applicable | Store and QR variants navigate or present a destination; the card itself does not enter a loading state |
| error | not-applicable | A download card does not report a request or validation failure of its own |
| success | not-applicable | Reaching a store or showing a QR is not an action-outcome confirmation on the card |

### baemin.com Navigation Action

- Role: baemin.com top navigation action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#ffffff`
- Height: 22px
- Font: 16px / 700
- Surface: baemin.com
- Observed: default captured; hover not retained

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on baemin.com |
| hover | applicable | Pointer-web nav action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav action can be unavailable; visual treatment omitted |
| loading | not-applicable | A top-navigation action moves between baemin.com sections; the control itself does not enter a loading state |
| error | not-applicable | Navigation meaning is destination, not a request or validation failure on the action |
| success | not-applicable | Arriving at a nav destination is not an action-outcome confirmation on the action |

### Woowa Light Read-More

- Role: Woowa corporate light read-more action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#f3f4f5`
- Text: `#232324`
- Radius: 8px
- Height: 52px
- Padding: 0 22px
- Font: 16px / 700
- Surface: Woowa corporate
- Observed: default captured; hover not retained

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on Woowa corporate |
| hover | applicable | Pointer-web read-more; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A read-more action can be unavailable; visual treatment omitted |
| loading | not-applicable | A read-more action navigates to further content; the control itself does not enter a loading state |
| error | not-applicable | Read-more meaning is navigation, not a request or validation failure on the control |
| success | not-applicable | Opening further content is not an action-outcome confirmation on the control |

### Woowa Overlay Read-More

- Role: Woowa corporate overlay read-more action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `rgba(0, 0, 0, 0.3)`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 8px
- Height: 52px
- Padding: 0 22px
- Font: 16px / 700
- Surface: Woowa corporate image overlay
- Observed: default on image overlay; hover not retained

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on overlay |
| hover | applicable | Pointer-web read-more; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A read-more action can be unavailable; visual treatment omitted |
| loading | not-applicable | A read-more action navigates to further content; the control itself does not enter a loading state |
| error | not-applicable | Read-more meaning is navigation, not a request or validation failure on the control |
| success | not-applicable | Opening further content is not an action-outcome confirmation on the control |

### Woowa Family-Site Selector

- Role: Woowa footer family-site selector
- Kind: interactive
- Type: button
- Anatomy: trigger
- Background: `#ffffff`
- Text: `#6c6d6f`
- Border: 1px solid `#a6a7a9`
- Radius: 8px
- Height: 50px
- Padding: 13px 16px
- Font: 14px / 400
- Surface: Woowa corporate footer
- Observed: default captured; expanded state not retained

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on Woowa footer |
| hover | applicable | Pointer-web selector; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A family-site selector can be unavailable; visual treatment omitted |
| loading | not-applicable | A family-site selector expands a local list; the control itself does not enter a loading state |
| error | not-applicable | Opening the family-site list is not a validation or request-failure state on the selector |
| success | not-applicable | Expanded is the observed outcome; it is not a success confirmation on the selector |

Additional observed state: expanded, recorded as not retained. No expanded treatment is promoted.

### Woowa Carousel Control

- Role: Woowa media carousel navigation
- Kind: interactive
- Type: button
- Anatomy: control
- Background: `rgba(0, 0, 0, 0.4)`
- Text/Icon context: `#000000`
- Radius: 50%
- Height: 40px
- Surface: Woowa corporate
- Observed: default and disabled navigation states

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on Woowa media carousel |
| hover | applicable | Pointer-web carousel arrow; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Captured disabled navigation state |
| loading | not-applicable | A media carousel arrow steps through present slides; the control itself does not enter a loading state |
| error | not-applicable | An arrow control does not report a request or validation failure of its own |
| success | not-applicable | Advancing a slide is not an action-outcome confirmation on the arrow |

### Official Font Download

- Role: official font catalog download action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#232324`
- Height: 28px
- Font: 16px / 700
- Surface: official font catalog
- Observed: available download and unavailable/disabled catalog controls

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Available download captured on the catalog |
| hover | applicable | Pointer-web download action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Unavailable/disabled catalog controls captured |
| loading | applicable | A catalog file download can wait on the file; visual treatment omitted |
| error | applicable | A catalog file download can fail; visual treatment omitted |
| success | not-applicable | Available vs unavailable is the catalog meaning; the control does not show a success confirmation |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

baemin.com current control spacing clusters around 6px and 20px. Woowa corporate composition repeatedly uses 8px, 12px, 16px, 20px, 24px, and 32px. These are public-web values; no native ordering-app grid, breakpoint, or touch-target scale is claimed.

The public web surfaces are responsive, but this pass does not promote universal breakpoints. Preserve the captured component geometry at the relevant web surface and treat native-app responsive/touch behavior as unresolved until a device-inspectable evidence source exists.

The 54px app-download card, 22px baemin.com nav action, 52px Woowa read-more actions, 50px family-site selector, 40px carousel control, and 28px font-download control are captured geometry at the relevant web surface, not native-app responsive or touch-target values.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Baemin's brand voice is warm, concise, and unexpectedly playful. The humor usually comes from observing an ordinary situation closely—a meal, a neighborhood sign, a familiar household object—then turning it slightly rather than performing a joke for its own sake. Product communication should stay clearer than campaign or merchandise copy: Baemin 2.0 explicitly prioritizes a clear customer experience and confidence in the service.

| Context | Tone |
|---|---|
| Ordering, payment, delivery status | Direct, reassuring, immediately understandable |
| Help and error recovery | Specific about what happened and what the user can do next |
| Campaigns, goods, cultural content | Short, conversational, observant, allowed one surprising turn |
| Restaurant-owner and rider communication | Respectful, practical, partnership-oriented |

Verified brand expressions include the current mission around keeping things from going cold, the long-running use of ordinary-life wordplay in Baemin goods, and the official framing of Baemin fonts as freely shared cultural assets. Do not reuse slogans verbatim as generic UI filler.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent:

- exact native-app type scale/weights and an authorized browser-loadable WORK specimen
- native ordering-app grid, breakpoint, and touch-target scale
- native-app motion duration, easing, animation name, transition properties, and reduced-motion behavior until per-component computed observation of all five kinds exists; generic web transitions are not that evidence
- hover visual values for the baemin.com nav action and Woowa read-more actions
- expanded family-site selector treatment
- five-tier app-shadow (removed; not grounded by inspectable native evidence)
- restaurant cards, app tabs, inputs, badges, and toasts

---
name: Kmong
colors:
  canvas: '#ffffff'
  ink: '#000000'
  heading: '#212224'
  muted: '#555969'
  hairline: '#f2f3f7'
  control-border: '#c8cad2'
  primary: '#92fa72'
  on-primary: '#212224'
  header-action: '#212224'
  on-header-action: '#ffffff'
  category-surface: '#fafafc'
  category-border: '#e4e5ed'
typography:
  marketplace-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Repeated public marketplace body, card, and list sample
  header-action:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    use: Public home/category header action
  hero:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.3
    use: Public home headline
  search:
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    use: Public home search input
  category-heading:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.22
    use: Public category-page heading sample
rounded:
  square: 0px
  primary-cta: 4px
  control: 8px
  category-panel: 12px
  home-search: 36px
  category-search: 24px
spacing:
  xxs: 2
  sm: 8
  md: 12
  base: 16
  lg: 20
  xl: 24
  xxl: 32
components:
  home-primary-cta:
    type: button
    backgroundColor: '#92fa72'
    textColor: '#212224'
    rounded: 4px
    padding: 0px 24px
    height: 52px
    typography: 16px / 500 Pretendard
    states: default only; no interaction state captured
    use: Public home CTA, selector home::[data-omd-capture=143]
  header-action:
    type: button
    backgroundColor: '#212224'
    textColor: '#ffffff'
    rounded: 8px
    height: 36px
    typography: 14px / 500 Pretendard
    states: default only; no interaction state captured
    use: Public marketplace header action, selector home::[data-omd-capture=6]
  home-search:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#212224'
    border: '1px solid #c8cad2'
    rounded: 36px
    padding: 0px 32px
    height: 64px
    typography: 20px / 400 Pretendard
    states: default only; no interaction state captured
    use: Public home search shell/input, selectors home::form and home::[data-omd-capture=7]
  home-outline-cta:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#212224'
    border: '1px solid #c8cad2'
    rounded: 8px
    padding: 0px 24px
    height: 52px
    typography: 16px / 500 Pretendard
    states: default only; no interaction state captured
    use: Public home outlined CTA, selector home::[data-omd-capture=145]
  category-filter-control:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#212224'
    border: '1px solid #e4e5ed'
    rounded: 8px
    padding: 0px 12px
    height: 36px
    typography: 14px / 400 Pretendard
    states: default only; no interaction state captured
    use: Public category filter control, selector surface-3::[data-omd-capture=93]
  category-panel:
    type: card
    backgroundColor: '#fafafc'
    rounded: 12px
    padding: 32px 24px
    use: Public category-page panel, selector surface-3::article; its text sits in child elements and the 16px / 400 it computes is the inherited body type, so no font is declared (corrected 2026-09-30)
  header-text-link:
    type: tab
    backgroundColor: transparent
    textColor: '#212224'
    rounded: 0px
    padding: 0px
    height: 36px
    typography: 14px / 500 Pretendard
    states: three per capture at rest on both home captures and on category; no state frame in the bundle
    use: Header text link and link-styled buttons (home captures 3-5), home::[data-omd-capture="4"]; colour and font are the child label p.font-medium.typo-14 (line height 20px); the control itself computes the 16px / 400 body type
  keyword-chip:
    type: button
    backgroundColor: '#f2f3f7'
    textColor: '#212224'
    rounded: 9999px
    padding: 0px 16px
    height: 36px
    typography: 14px / 400 Pretendard
    states: ten per home capture at rest (captures 9-18 on home); no state frame in the bundle
    use: Rounded chip on home, home::[data-omd-capture="9"]; colour and font are the child label p (line height 21px)
  section-outline-link:
    type: button
    backgroundColor: transparent
    textColor: '#212224'
    border: '1px #c8cad2'
    rounded: 4px
    padding: 0px 20px
    height: 42px
    typography: 16px / 400 Pretendard
    states: twelve per home capture at rest (even captures 42-64 on home); no state frame in the bundle
    use: Outlined link, 214 px wide, home::[data-omd-capture="42"]; colour and font are the child label p.typo-16 (line height 23px)
  caption-tile:
    type: card
    backgroundColor: transparent
    textColor: '#212224'
    rounded: 0px
    size: 143px x 138px
    typography: 15px / 500 Pretendard
    states: twelve per home capture at rest (captures 66-77 on home); no state frame in the bundle
    use: Home tile with a centred caption, home::[data-omd-capture="66"]; colour and font are the caption p (line height 20px)
  category-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#212224'
    rounded: 0px
    padding: 0px
    height: 48px
    typography: 16px / 500 Pretendard
    states: nine captured at rest on category (captures 10-18); no state frame in the bundle
    use: Category-page navigation link, surface-3::[data-omd-capture="10"]; colour and font are the child label p (line height 24px)
  category-link-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#212224'
    border: '1px #e4e5ed'
    rounded: 12px
    padding: 16px 12px
    size: 218px x 70px
    typography: 14px / 700 Pretendard
    states: five captured at rest on category; no state frame in the bundle
    use: 'Bordered link card on category: the list item holds the background, border and radius, the link inside it (surface-3::[data-omd-capture="20"]) the padding, and its h3 the label (line height 20px)'
  pagination-button:
    type: button
    backgroundColor: transparent
    textColor: '#9a9ba7'
    rounded: 8px
    size: 32px x 36px
    selected: 'bg #212224'
    states: 'four page buttons captured at rest on category (captures 141-144); the current page (capture 140, class cursor-default) computes bg #212224; captures 139 and 145 are disabled and give no rest value; no state frame in the bundle'
    use: Category pagination button, surface-3::[data-omd-capture="141"]; the colour comes from the button class text-gray-500; no label font is declared because the digit has no element of its own in the dump
  footer-link:
    type: button
    backgroundColor: transparent
    textColor: '#727585'
    rounded: 0px
    padding: 0px
    typography: 14px / 400 Pretendard
    states: 17 captured at rest on category (captures 149-165); no state frame in the bundle
    use: Footer text link on category, surface-3::[data-omd-capture="149"]; its child p computes the same colour and type (line height 21px)
  outline-link-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#212224'
    border: '1px #c8cad2'
    rounded: 8px
    padding: 0px 16px
    height: 40px
    typography: 14px / 700 Pretendard
    states: two captured at rest on category (captures 147 and 148); no state frame in the bundle
    use: Outlined link button (role link) on category, surface-3::[data-omd-capture="147"]; line height 14px as computed on the control
  inline-text-link:
    type: button
    backgroundColor: transparent
    textColor: '#4b94fa'
    rounded: 0px
    padding: 0px
    typography: 16px / 400 Pretendard
    states: nine per home capture at rest (captures 146-154 on home); no state frame in the bundle
    use: Blue text link (classes text-blue-500 and underline) inside the 390 px home articles, home::[data-omd-capture="146"]; line height 24px
fonts:
  roles:
    ui: Pretendard
---

# Design System Inspiration of Kmong (크몽)

## Overview

### Visual Theme & Atmosphere

Kmong is a Korean expert-services marketplace: its public home lets people find and commission specialists, while the official company site describes an escrow-protected transaction model and company-oriented services such as corporate-card payment and tax-invoice issuance. The public marketplace surface is deliberately direct: white space, dark `#212224` headings, a large searchable entry point, and a lime `#92FA72` action that stands apart from a compact dark header action. Kmong’s company site also records a 2025 logo-rebrand story, so the current expression should be treated as a living marketplace identity rather than an inherited generic green UI. This reference separates the public marketplace evidence from company/corporate context; neither is treated as a substitute for a signed-in workflow or documentation chrome.

### Primary tasks

- Find and commission a specialist for a piece of work
- Search the marketplace for the expert you need
- Compare specialist listings and reviews before choosing one
- Request work by chat and pay through escrow
- Commission work as a company and pay by corporate card

### Brand Narrative

Kmong’s official company site presents the service as an expert platform where a request can be made by chat and protected through escrow payment, with distinct support for company transactions such as corporate cards and tax invoices. Its public home exposes the marketplace side of that proposition: specialist listings, reviews, and a search-led path into discovery. The company site also publishes a 2025 logo-rebrand item, indicating an actively maintained visual identity. These facts establish the product and its current public expression; no unobserved seller, contract, or post-purchase experience is inferred here.

### Principles

1. **Start with expert discovery.** The large public search field is the most explicit route into the marketplace. *UI implication:* keep a verified search treatment route-local rather than inventing a global command surface.
2. **Make the next action legible.** The public home’s lime CTA contrasts with the dark header action. *UI implication:* preserve their separate size, colour, and radius values.
3. **Keep transaction trust concrete.** Escrow protection and company-payment support come from official company context. *UI implication:* do not fabricate trust badges, validation states, or checkout affordances from that narrative alone.

### Stakeholder Groups

*Source-grounded groups, not fictional personas.*

- **Clients commissioning expert work:** the public marketplace exposes specialist listings, reviews, and search-led discovery for this group.
- **Experts offering services:** Kmong’s marketplace model depends on expert service listings; no seller-console UI is claimed from this public capture.
- **Companies commissioning external work:** the official company site identifies corporate transaction support, including corporate-card payment and tax-invoice issuance; this is business context, not a captured enterprise product UI.

## Colors

### Color & Surface Evidence

- `#FFFFFF` — observed public home/category canvas, search shell, and outlined controls.
- `#000000` — frequent body and card text in the supplied public capture.
- `#212224` — heading, search-input, and dark header-action colour.
- `#555969` — observed muted public-marketplace text.
- `#F2F3F7` — repeatedly observed hairline/border colour.
- `#C8CAD2` — home search and outlined-CTA border.
- `#E4E5ED` — category filter-control border.
- `#92FA72` — observed home primary-CTA background; it is not assumed to be every primary action on every route.
- `#FAFAFC` — observed category-page panel surface only.

## Typography

### Evidence classes

- **Live product computed use:** `Pretendard` has 1,444 visible uses across the supplied home and category capture, with a high-confidence loaded FontFace match and 18 Kmong CloudFront font-source URLs. It is the sole `tokens.typography.family.ui` family.
- **Official font asset and licence:** the upstream Pretendard project documents distribution and its SIL Open Font License 1.1. This establishes the upstream licence boundary; it does not independently establish Kmong product use.
- **Declared-only:** `slick` has four Kmong-hosted declared source files but zero visible uses in the bundle. It is not a UI-family token and must not be substituted.
- **Unresolved:** no separate official Kmong typeface or additional browser-loaded family was established from the supplied public routes.

### Observed public-marketplace hierarchy

| Role | Family | Size | Weight | Line height | Surface boundary |
|---|---|---:|---:|---:|---|
| Home headline | Pretendard | 40px | 700 | 52px | Home only |
| Home search input | Pretendard | 20px | 400 | 28px | Home only |
| Category heading sample | Pretendard | 36px | 700 | 44px | Category route only |
| Repeated body/card/list sample | Pretendard | 16px | 400 | 24px | Home and category routes |
| Header action | Pretendard | 14px | 500 | 20px | Public marketplace header |

## Layout

### Layout & Responsive Evidence

- The supplied capture covers public 1440×900 home and category routes. It establishes a 628px × 64px home-search shell and a 500px × 50px category-search shell, not a breakpoint system.
- The public category page includes a 1,168px × 184px `#FAFAFC` panel with `32px 24px` padding. It is a route-local observation, not a universal card layout.
- No mobile, signed-in, checkout, seller, help-centre, or documentation-chrome route was supplied as product evidence. Their layout contracts are intentionally absent.

### Responsive Behavior

Only desktop-sized public capture evidence was supplied. No breakpoint, touch-target, mobile navigation, or image-ratio rule is recorded.

## Elevation & Depth

- Home search shell: `rgba(0,0,0,0.1) 0px 0px 20px 0px`.
- Category search shell: `rgba(0,0,0,0.06) 0px 0px 8px 0px`.

No general card, popover, modal, or hover-elevation ladder is claimed.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.home-search`: `rgba(0,0,0,0.1) 0px 0px 20px 0px`
- `shadow.category-search`: `rgba(0,0,0,0.06) 0px 0px 8px 0px`

## Motion & Easing

No reusable duration, easing, or motion rule is recorded. Public utility class names and static elements do not establish a motion contract without interaction provenance.

## Components

### Home primary CTA

**Default**
- Background: `#92FA72`
- Text: `#212224`
- Radius: `4px`
- Padding: `0px 24px`
- Height: `52px`
- Font: `16px / 500 Pretendard`
- Use: Public home CTA; `home::[data-omd-capture="143"]`.

### Header action

**Default**
- Background: `#212224`
- Text: `#FFFFFF`
- Radius: `8px`
- Height: `36px`
- Font: `14px / 500 Pretendard`
- Use: Public marketplace header action; `home::[data-omd-capture="6"]`.

### Home search

**Default**
- Background: `#FFFFFF`
- Text: `#212224`
- Border: `1px solid #C8CAD2`
- Radius: `36px`
- Padding: `0px 32px`
- Height: `64px`
- Font: `20px / 400 Pretendard`
- Use: Public home search shell/input; `home::form` and `home::[data-omd-capture="7"]`.

### Home outlined CTA

**Default**
- Background: `#FFFFFF`
- Text: `#212224`
- Border: `1px solid #C8CAD2`
- Radius: `8px`
- Padding: `0px 24px`
- Height: `52px`
- Font: `16px / 500 Pretendard`
- Use: Public home outlined CTA; `home::[data-omd-capture="145"]`.

### Category filter control

**Default**
- Background: `#FFFFFF`
- Text: `#212224`
- Border: `1px solid #E4E5ED`
- Radius: `8px`
- Padding: `0px 12px`
- Height: `36px`
- Font: `14px / 400 Pretendard`
- Use: Public category filter control; `surface-3::[data-omd-capture="93"]`.

### Category panel

**Default**
- Background: `#FAFAFC`
- Radius: `12px`
- Padding: `32px 24px`
- Use: Public category-page panel; `surface-3::article` (class `rounded-xl bg-gray-100 px-6 py-8`).
- Corrected 2026-09-30: the July text gave the panel `16px / 400 Pretendard`. The panel carries no text classes; that value is the inherited body type (the page body computes the same `16px / 400 / 24px`), so no font is declared for the container.

The sections below were added on 2026-09-30 from the same 2026-07-13 bundle (bundle-only; no new capture). Bundle captures `home` and `surface-2` are the same URL (`https://kmong.com/`), so they count as two samples of one route. Where a control's text sits in a child `p` or `h3`, the text colour and font below are the child's; the controls themselves compute the `16px / 400` body type.

### Header text link

**Default**
- Background: transparent
- Text: `#212224` (child label `p.font-medium.typo-14`)
- Height: `36px`
- Font: `14px / 500 Pretendard`, line height 20px
- Use: header text link and link-styled buttons (home captures 3-5), on both home captures and on category; `home::[data-omd-capture="4"]`.

### Keyword chip

**Default**
- Background: `#F2F3F7`
- Text: `#212224` (child label `p`)
- Radius: `9999px`
- Padding: `0px 16px`
- Height: `36px`
- Font: `14px / 400 Pretendard`, line height 21px
- Use: ten rounded chips per home capture (captures 9-18); `home::[data-omd-capture="9"]`. The class list names `hover:bg-gray-300`; a class name is not a measurement, so the hover colour is not declared.

### Section outlined link

**Default**
- Background: transparent
- Text: `#212224` (child label `p.typo-16`)
- Border: `1px #C8CAD2`
- Radius: `4px`
- Padding: `0px 20px`
- Height: `42px` (214 px wide)
- Font: `16px / 400 Pretendard`, line height 23px
- Use: twelve outlined links per home capture (even captures 42-64); `home::[data-omd-capture="42"]`.

### Caption tile

**Default**
- Background: transparent
- Text: `#212224` (caption `p`, centred)
- Size: `143px x 138px`
- Font: `15px / 500 Pretendard`, line height 20px
- Use: twelve home tiles per capture (captures 66-77); `home::[data-omd-capture="66"]`.

### Category navigation link

**Default**
- Background: transparent
- Text: `#212224` (child label `p`)
- Height: `48px`
- Font: `16px / 500 Pretendard`, line height 24px
- Use: nine category-page navigation links (captures 10-18); `surface-3::[data-omd-capture="10"]`.

### Category link card

**Default**
- Background: `#FFFFFF`
- Text: `#212224` (the card's `h3`)
- Border: `1px #E4E5ED`
- Radius: `12px`
- Padding: `16px 12px` (on the link inside the card)
- Size: `218px x 70px`
- Font: `14px / 700 Pretendard`, line height 20px
- Use: five bordered link cards on category (`surface-3::li`; links from `surface-3::[data-omd-capture="20"]`).

### Pagination button

**Default and current page**
- Background: transparent
- Text: `#9A9BA7` (the button's own class `text-gray-500`)
- Radius: `8px`
- Size: `32px x 36px`
- Current page: bg `#212224` (capture 140, class `cursor-default`)
- Use: category pagination; `surface-3::[data-omd-capture="141"]`, four page buttons at rest (captures 141-144).
- Not used: captures 139 and 145 are `disabled: true` and give no rest value. No label font is declared, because the digit has no element of its own in the dump.

### Footer link

**Default**
- Background: transparent
- Text: `#727585`
- Font: `14px / 400 Pretendard`, line height 21px
- Use: 17 footer text links on category (captures 149-165); `surface-3::[data-omd-capture="149"]`. Each link's child `p` computes the same colour and type.

### Outlined link button

**Default**
- Background: `#FFFFFF`
- Text: `#212224`
- Border: `1px #C8CAD2`
- Radius: `8px`
- Padding: `0px 16px`
- Height: `40px`
- Font: `14px / 700 Pretendard`, line height 14px as computed on the control
- Use: two outlined link buttons (role `link`) on category; `surface-3::[data-omd-capture="147"]`.

### Inline text link

**Default**
- Background: transparent
- Text: `#4B94FA` (class `text-blue-500`; the class list also names `underline`)
- Font: `16px / 400 Pretendard`, line height 24px
- Use: nine blue text links per home capture inside the 390 px home articles (captures 146-154); `home::[data-omd-capture="146"]`.

The bundle holds no `::state-*` frame on any of its three captures, so no pointer state is declared; missing frames do not show that the controls lack states. Class names that name hover or active styles are not measurements. Menu, dialog, validation and responsive variants were not captured. (Rephrased 2026-09-30.)

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://kmong.com/` (public marketplace home), `https://kmong.com/category/1` (public category marketplace), `https://company.kmong.com/` (official company context), `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution), and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence)
**Tier 2 sources:** `https://getdesign.md/kmong` (attempted; built-in web open returned an internal safe-open failure/no usable record), `https://styles.refero.design/?q=kmong` (attempted; built-in web open returned an internal safe-open failure/no usable record)
**Conflicts unresolved:** none

The older universal 4px input/card rule, 76px header, card-shadow system, Biz/Best/promo badge variants, generic gig-card treatment, and all reusable interaction/state/motion assertions were rolled back: they are not established by the supplied 2026 multi-surface capture.

### States

No reusable empty, loading, error, success, disabled, validation, or skeleton treatment is recorded. The bundle has zero interaction records and no `::state-*` frame, so no pointer state is declared; this records missing samples, not missing states. The category pagination marks its current page with bg `#212224` (see Pagination button), and two pagination controls were captured with `disabled: true`; their look is not declared.

## Do's and Don'ts

### Do

- Keep the observed home primary CTA distinct: `#92FA72` with `#212224` text.
- Use Pretendard only when reproducing the verified public-marketplace specimen.
- Preserve the route distinction between the 36px home search and 24px category search.
- Treat the dark 36px header action and lime 52px home CTA as separate observed variants.

### Don't

- Do not turn the lime home CTA into an unsupported universal action token.
- Do not reuse `slick` or substitute it for Pretendard; its visible product use was not observed.
- Do not infer hover, focus, disabled, error, modal, or responsive styles from utility class names.
- Do not apply the category panel or filters to marketing, support, or signed-in flows without evidence.

## Voice & Tone

The official homepage frames the service around finding capable experts and protecting a transaction until work is received; the company site presents the same marketplace as a place where individuals and companies can commission work with practical payment and document support. The observable public tone is therefore direct, reassuring, and task-oriented. This is source-grounded service framing, not a claim that every internal or support message uses one fixed voice.

## Agent Prompt Guide

- Recreate the **public home CTA** as a 52px-tall, 4px-radius button with `#92FA72` background, `#212224` label, `0px 24px` padding, and 16px/500 Pretendard.
- Recreate the **public home search** as a 64px white shell with a `#C8CAD2` 1px border, 36px radius, `0px 32px` shell padding, and a 20px/400 Pretendard input.
- Recreate the **public category filter** as a 36px white control with `#E4E5ED` border, 8px radius, `0px 12px` padding, and 14px/400 Pretendard.
- Do not generate an interaction or state variant unless new selector-and-interaction evidence establishes it.

## Governance

### Known Gaps

- **Contrast, `header-text-link`.** Text `#212224` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `section-outline-link`.** Text `#212224` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `caption-tile`.** Text `#212224` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `category-nav-link`.** Text `#212224` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

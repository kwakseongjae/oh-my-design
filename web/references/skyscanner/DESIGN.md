---
name: Skyscanner
colors:
  primary: '#0062e3'
  primary-hover: '#024daf'
  primary-deep: '#154679'
  brand-dark: '#05203c'
  canvas: '#ffffff'
  canvas-contrast: '#eff3f8'
  surface-low-contrast: '#f5f7fa'
  surface-subtle: '#e3f0ff'
  surface-highlight: '#e0e4e9'
  foreground: '#161616'
  muted: '#626971'
  on-primary: '#ffffff'
  line: '#c1c7cf'
  eco: '#0fa1a9'
  error: '#e70866'
  success: '#0c838a'
  warning: '#f55d42'
  input-ink: '#000000'
typography:
  action-label:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    use: Visible labels of the measured search CTA, login button and hotels navigation card
  nav-label:
    fontSize: 14px
    fontWeight: 700
    use: Visible labels of the measured Flights and Hotels header links; their wrappers compute to 16px/400
  search-input:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Measured departure combobox text
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  nav: 100px
components:
  button-primary:
    type: button
    backgroundColor: '#0062e3'
    textColor: '#ffffff'
    rounded: 12px
    height: 72px
    padding: 12px 16px
    typography: 16px / 700 Skyscanner Relative
    hover: 'bg #024daf'
    pressed: 'bg #024daf'
    use: 검색하기, the main search button. Pointer states measured with the consent overlay temporarily hidden; keyboard focus unmeasured.
  button-secondary:
    type: button
    backgroundColor: '#e0e4e9'
    textColor: '#161616'
    rounded: 8px
    height: 36px
    padding: 6px 16px
    typography: 16px / 700 Skyscanner Relative
    hover: 'bg #c1c7cf'
    pressed: 'bg #c1c7cf'
    use: 로그인, the header secondary button, measured without activating sign-in. Pointer states used hideOverlays; keyboard focus unmeasured.
  tab-inactive:
    type: button
    textColor: '#ffffff'
    rounded: 100px
    height: 36px
    padding: 0px 16px
    typography: 14px / 700 Skyscanner Relative
    shadow: rgb(193, 199, 207) 0px 0px 0px 1px inset
    hover: 'bg #154679; inset shadow rgb(21, 70, 121) 0px 0px 0px 1px inset'
    pressed: 'bg #154679; inset shadow rgb(21, 70, 121) 0px 0px 0px 1px inset'
    use: '숙소, a header navigation link with role=tab. Its background is transparent on #05203c. Font describes its visible child label; wrapper is 16px/400. Pointer states used hideOverlays; keyboard focus unmeasured.'
  card-nav-hotels:
    type: card
    backgroundColor: '#05203c'
    textColor: '#ffffff'
    rounded: 12px
    height: 72px
    padding: 0px
    typography: 16px / 700 Skyscanner Relative
    shadow: rgba(37, 32, 31, 0.3) 0px 1px 3px 0px
    hover: 'child bg #154679; shadow rgba(37, 32, 31, 0.25) 0px 4px 14px 0px'
    pressed: 'child bg #154679; shadow rgba(37, 32, 31, 0.3) 0px 1px 3px 0px'
    use: 숙소, the 290px-wide main navigation card link. Background and shadow are measured on div@0, the BpkCardV2 child; foreground and font on the visible label. Padding is the outer link's 0px. Pointer states used hideOverlays; keyboard focus unmeasured.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Skyscanner Relative
    korean: Noto Sans KR
---

# Design System Inspiration of Skyscanner

## Overview

### Visual Theme & Atmosphere

Skyscanner compares flight, hotel and car-hire prices to help travellers plan journeys. Its own history dates its start to 2003. The current product combines search tools with discovery: its history records Vibes and Savvy Search in 2024, then the price-drop tool DROPS in 2025. [Company history](https://www.skyscanner.net/about-us).

The visual foundation is blue, navy and white: **`#0062e3`** for the main search action and selected Flights link, **`#05203c`** behind the search area and on navigation cards, and **`#ffffff`** for the page and search-field surfaces. **Skyscanner Relative** and **Noto Sans KR** loaded on the captured Korean surface. A 72px search action, 36px product links and rounded navigation cards give the page a clear hierarchy of tasks. These are observations of the homepage reached automatically from `skyscanner.net` in the collector's Korean location.

The 2024 brand account traces an evolution from the 2019 rebrand toward a reduced palette and a consistent grid. [Design team's account](https://medium.com/skyscanner-product-design/building-a-plane-mid-flight-how-we-created-the-new-skyscanner-brand-world-df64fae5c229). Its companion colour article explains that Brand and Product use separate libraries built from shared primitives, with product choices organised by semantic role. [Product colour design](https://medium.com/skyscanner-product-design/how-we-fixed-skyscanners-broken-colour-palette-ec25d19167dc).

Primary tasks supported by the company history and captured navigation are comparing flights, finding hotels or car hire, exploring destinations with Everywhere, and monitoring flight prices with Price Alerts.

### Brand Narrative

Skyscanner's history runs from flight comparison in 2003 to Everywhere in 2006 and Price Alerts in 2012, then car hire in 2013 and hotels in 2014. The same timeline records Ctrip's acquisition in 2016 for £1.4bn, identifying Ctrip today as Trip.com Group. [Company history](https://www.skyscanner.net/about-us).

Backpack describes its purpose as creating intuitive traveller-first experiences, and its rendered welcome page separates foundations, components, content, accessibility, localisation and brand resources. [Backpack](https://www.skyscanner.design/latest/welcome-to-backpack-Mtf5OEo4). Its public web repository now says it is archived and names `@skyscanner/backpack-web@43.16.0` as the final public release; it directs internal contributors to a separate repository. This is the public repository's status, not a claim that Skyscanner has stopped developing its design system. [Official repository README](https://raw.githubusercontent.com/Skyscanner/backpack/main/README.md).

### Principles

- **Traveller-first:** Backpack's stated purpose, supported by the product's flight, hotel and car-hire tasks.
- **Consistency and usability:** the brand team's stated tests. [Design team's account](https://medium.com/skyscanner-product-design/building-a-plane-mid-flight-how-we-created-the-new-skyscanner-brand-world-df64fae5c229).
- **Roles before arbitrary colour combinations:** the product colour article organises decisions under Text, Core, Status, Surface and Canvas, with component states handled by private tokens. [Product colour design](https://medium.com/skyscanner-product-design/how-we-fixed-skyscanners-broken-colour-palette-ec25d19167dc).

### Personas

No company-backed persona study was verified; the prior fictional people are not presented as research.

## Colors

The product census contains **319 computed root custom properties**, including **317 `--bpk-*` properties**. The stylesheet walk found 403 distinct declared properties, including 340 Backpack properties and 59 `--tw-*` framework properties. The following colours come from the product census; documented roles do not imply that every corresponding component was exercised.

| Role | Value | Evidence and scope |
|---|---|---|
| Primary / Core Accent | `#0062e3` | `--bpk-core-accent`; search CTA, selected Flights link and checked Add hotels checkbox |
| Blue action hover | `#024daf` | Search CTA hover and pressed; `--bpk-private-button-colour-bg-feature-pressed` |
| Deep interactive blue | `#154679` | Hotels header link hover/pressed; hotels navigation card hover/pressed |
| Brand dark | `#05203c` | `--bpk-core-primary`, `--bpk-surface-contrast`; navigation-card child at rest |
| Canvas | `#ffffff` | `--bpk-canvas-default`; white field surfaces and inverse labels |
| Canvas contrast | `#eff3f8` | `--bpk-canvas-contrast` |
| Surface low contrast | `#f5f7fa` | `--bpk-surface-low-contrast`; corrects the prior reference's value |
| Surface subtle | `#e3f0ff` | `--bpk-surface-subtle` |
| Surface highlight | `#e0e4e9` | `--bpk-surface-highlight`; header login button at rest |
| Foreground | `#161616` | `--bpk-text-primary`; paragraph ink in six sampled paragraphs |
| Muted | `#626971` | `--bpk-text-secondary` |
| On primary | `#ffffff` | Visible labels on the search CTA, product links and navigation card |
| Line | `#c1c7cf` | `--bpk-border-default`; inactive Hotels link's inset ring; login hover/pressed fill |
| Core eco | `#0fa1a9` | `--bpk-core-eco`; no environmental component was interacted with |
| Error | `#e70866` | `--bpk-status-danger-spot`, `--bpk-text-error` |
| Success | `#0c838a` | `--bpk-status-success-spot`, `--bpk-text-success` |
| Warning | `#f55d42` | `--bpk-status-warning-spot`, `--bpk-border-warning` |
| Input ink | `#000000` | Actual departure input text; distinct from paragraph foreground |

Transparency is contextual. The inactive Hotels link is transparent over navy, with an inset `#c1c7cf` ring. The header locale button uses `rgba(255, 255, 255, 0.1)` over navy. Neither is an opaque black surface.

The colour article distinguishes public semantic choices from private interaction shades. That distinction is visible in the census: `--bpk-core-accent` names a shared colour, while `--bpk-private-button-colour-bg-feature-pressed` names a particular state. The page also carries a deprecated-link property and a test colour; their presence is not a recommendation to use them. [Product colour design](https://medium.com/skyscanner-product-design/how-we-fixed-skyscanners-broken-colour-palette-ec25d19167dc).

## Typography

| Evidence class | Finding |
|---|---|
| Official product use | The published Backpack foundations package defines `Skyscanner Relative` as its base family. The live product declares it first in `--bpk-base-font-stack`. |
| Live-loaded | `Skyscanner Relative` normal 400, 700 and 900; `Noto Sans KR` normal 400, 700 and 900. Noto Sans KR is a face loaded by this regional product, not a substitute selected for this reference. |
| Official distributed assets | The product's `@font-face` rules advertise WOFF2 and WOFF files on `js.skyscnr.com/sttc/bpk-fonts/`. Loaded Relative faces correspond to Book, Bold and Black files; loaded Korean faces to Regular, Bold and ExtraBold files. No font binaries were separately downloaded. |
| Declared-only | Relative 500 and its italic faces; Larken 300/400; other Noto locale faces advertised by the CSS were absent from the loaded list. No specimen is assigned to them. |
| Unresolved | Font-file licensing and Larken use on other product routes were not established. Substitute: none chosen. |

Skyscanner's design team credits **Colophon** for Relative and describes even strokes, rounded corners and forms related to the sunrise symbol. **Larken**, by **Ellen Luff and Tom Watkins**, is an officially described secondary brand face used in Regular and Light. This confirms its brand metadata, but does not establish live rendering on the captured product page. Larken remains outside the machine typography families. [Design team's account](https://medium.com/skyscanner-product-design/building-a-plane-mid-flight-how-we-created-the-new-skyscanner-brand-world-df64fae5c229).

The body, h1 and first button all declare the product's multilingual Relative-first stack. Loaded status establishes the six faces above; it does not identify which font painted each individual glyph.

Measured typography:

- Search CTA and login label: **16px / 700**, 24px line height.
- Hotels navigation-card label: **16px / 700**; its outer link computes to 16px / 400 with 20.8px line height.
- Flights and Hotels header labels: **14px / 700**; their outer links compute to 16px / 400 with 20.8px line height.
- Departure input: **16px / 400**, 24px line height.
- The six measured outer controls report `letter-spacing: normal`.

The prior reference also drew on `@skyscanner/bpk-foundations-web@24.6.0`. Its published size and matching line-height variables remain useful metadata, kept here in their original units rather than presented as newly measured homepage headings:

| Published suffix | Font size | Matching line height |
|---|---|---|
| xs | `.75rem` | `1rem` |
| sm | `.875rem` | `1.25rem` |
| base | `1rem` | `1.5rem` |
| lg | `1.25rem` | `1.75rem` |
| xl | `1.5rem` | `2rem` |
| xxl | `2rem` | `2.5rem` |
| xxxl | `2.5rem` | `3rem` |
| xxxxxl | `4rem` | `4rem` |

The package names book 400, bold 700 and black 900 weights, also observed as loaded Relative faces. It additionally declares negative tracking for tight, display and hero styles. The prior blanket rule of zero tracking is therefore not a system-wide rule. [Published foundations](https://unpkg.com/@skyscanner/bpk-foundations-web@24.6.0/tokens/base.default.scss).

## Layout

At 1440px viewport width, the search area spans x=108 to approximately x=1332. The captured product links sit at y=108, search controls at y=284, and the four 290px navigation cards at y=520. The graphic promotion spans 1224px. These are desktop coordinates, not a maximum-width or responsive rule.

The live spacing properties are `sm: 0.25rem`, `md: 0.5rem`, `base: 1rem`, `lg: 1.5rem`, `xl: 2rem`, `xxl: 2.5rem`, `xxxl: 4rem`, and `xxxxl: 6rem`. Smaller `xs: 0.125rem` and `xxs: 0.0625rem` properties are also present. Pixel padding that was directly measured is recorded with each control above.

Measured corners include 0px on the input, 4px on checkboxes, 8px on the login button and chips, 12px on the search action and navigation card, and 100px on product links. The CSS additionally declares radii `lg: 1.5rem`, `xl: 3rem`, `nav-tabs: 1.125rem`, and `full: 62.4375rem`; the declared nav-tabs value does not replace the measured 100px product-link radius. The versioned foundations package declares its older xl radius as `2.5rem`, a different value from the live root’s `3rem`.

For brand composition, the team calls its grid “flightpath” and anchors text, logos and images to it. [Design team's account](https://medium.com/skyscanner-product-design/building-a-plane-mid-flight-how-we-created-the-new-skyscanner-brand-world-df64fae5c229).

### Responsive Behavior

Only the desktop 1440×1000 product surface was measured. The live stylesheet declares breakpoint starts of `20rem`, `22.5rem`, `32.0625rem`, `48.0625rem`, `64.0625rem` and `80.0625rem`, with base `0rem`. Mobile reflow, scrolling tabs, navigation collapse and responsive type changes were not measured.

## Elevation & Depth

The hotels navigation card demonstrates a small-to-large shadow change, then a return to the small shadow while pressed:

| State | Raw computed child shadow |
|---|---|
| Rest | `rgba(37, 32, 31, 0.3) 0px 1px 3px 0px` |
| Hover | `rgba(37, 32, 31, 0.25) 0px 4px 14px 0px` |
| Pressed | `rgba(37, 32, 31, 0.3) 0px 1px 3px 0px` |

Root Backpack shadow variables are a different evidence group: small, large and xl colour properties contain `#16161640`; their vertical offsets are `0.0625rem`, `0.25rem` and `0.75rem`, and blurs `0.1875rem`, `0.875rem` and `3.125rem`. Preserve those raw declarations without replacing the measured card's brown-tinted shadow. The separately opened published theme CSS expresses its small, large and xl shadow colours as `rgba(22, 22, 22, 0.25)`; that source metadata remains valid, without establishing which unvisited component uses it. The opened foundations package also contains the brown-tinted small/large shadow values. A dual-layer white result-card shadow was not re-established on this surface.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.card-nav-rest`: `rgba(37, 32, 31, 0.3) 0px 1px 3px 0px`
- `shadow.card-nav-hover`: `rgba(37, 32, 31, 0.25) 0px 4px 14px 0px`

## Motion & Easing

All six outer controls report the raw computed transition **`all 0s ease 0s`**. The card's hover and pressed passes separately report a longest compared transition of **200ms**; the export does not include that descendant's full shorthand or easing curve. The card observations establish settled state values, not a reconstructed animation recipe.

The previously cited foundations package explicitly publishes `$bpk-duration-xs: 50ms`, `$bpk-duration-sm: 200ms` and `$bpk-duration-base: 400ms`. These are versioned package metadata; their assignment to checkbox ticks, tab switches, panel reveals or price alerts was not measured. No previous cubic-bezier curve, scale-down, bell bounce, stagger or reduced-motion behaviour was re-established. [Published foundations](https://unpkg.com/@skyscanner/bpk-foundations-web@24.6.0/tokens/base.default.scss).

## Components

Product state measurements used the automatically redirected Korean homepage at 1440×1000. The consent banner remained open; the probe temporarily hid its covering wrapper during pointer passes. All keyboard-focus states are **UNMEASURED**. Product components below are separate from the consent controls.

| Key and exact control | Identity | Rest appearance | Hover | Pressed |
|---|---|---|---|---|
| `search`: 검색하기 | 90.9×72px; radius 12px; padding 12px 16px; 16px/700 | `#0062e3` / `#ffffff`; no border or shadow | Fill `#024daf` | Fill `#024daf` |
| `login`: 로그인, header | 96×36px; radius 8px; padding 6px 16px; 16px/700 | `#e0e4e9` / `#161616`; no border or shadow | Fill `#c1c7cf` | Fill `#c1c7cf` |
| `nav-hotels`: 숙소, header link | 81.8×36px; radius 100px; padding 0px 16px; outer 16px/400, label 14px/700 | Transparent over `#05203c`; white label; 1px inset `#c1c7cf` shadow | Fill and inset ring `#154679` | Same as hover |
| `nav-flights`: 항공권, selected header link | 94.6×36px; radius 100px; padding 0px 16px; outer 16px/400, label 14px/700 | `#0062e3` / `#ffffff`; matching 1px inset ring | No change in compared scope | No change in compared scope |
| `origin`: 서울 (모두), departure combobox | 208.5×24px; radius 0px; padding 0px; 16px/400 | Transparent over white; `#000000` ink; no border/shadow | No change in compared scope | Width 176.5px; third ancestor gains white 2px shadow and blue 4px outline, offset −3px |
| `card-hotels`: 숙소, main navigation card link | 290×72px; radius 12px; outer padding 0px; outer 16px/400, label 16px/700 | Painted child `#05203c`, white label; small shadow | Child fill `#154679`; larger shadow | Child keeps `#154679`; returns to small shadow |

The card's clickable outer link itself is transparent and computes to `#161616`; its visible child and label supply the navy-and-white appearance. The component record deliberately identifies that painted child.

The selected Flights link stays in prose because its measured pointer states were unchanged. Its compared scope included the control, pseudos, six descendants (one SVG and two paths) and three ancestor levels. The origin input also stays out of the component records: its pointer press changed layout and ancestor focus styling, and persistence after blur was not established. The raw observation is not a keyboard-focus recipe.

Other rest observations retained from the survey, without interactive component records:

- Date buttons: 72px high, square internal corners, white fill, black computed text, padding 0px 16px. The traveller button ends the group with `0px 12px 12px 0px` corners.
- Add nearby airports checkbox: 20×20px, radius 4px, white fill and **3px** `#626971` border. The checked Add hotels checkbox has blue fill and border.
- Country chip: 32px high, radius 8px, padding 0px 16px, 16px/400, navy fill and white text. Adjacent chips are transparent with `#161616` text.
- The header locale button is 36px high, radius 8px, padding 6px 16px, 16px/700, with translucent white fill and white text.

Live CSS separately declares a navy primary button, a blue featured button, grey secondary and destructive fills, and a destructive pressed fill of `#e70866`. It declares default minimum height `2.25rem`, large minimum height `3rem`, radius `.5rem` and horizontal padding `1rem`. These declarations describe system recipes; they are not measurements of additional interactive controls.

The rendered Backpack navigation still lists **91 components** and a separate **10 utility components**. Names alone do not provide a measured state or geometry. [Component navigation](https://www.skyscanner.design/latest/components/accordion/web-sEshz9Z5), [utility navigation](https://www.skyscanner.design/latest/components/utility-components/aria-live/web-6z9vnspZ).

Accordion, AI Blurb, App Search Modal, Autosuggest, Badge, Banner alert, Bar chart, Blockquote, Bottom navigation, Bottom sheet, Breadcrumb, Breakpoint, Button, Bubble, Calendar, Card, Card button, Card carousel, Card list, Carousel, Compare, Context Menu, Cells, Chat UI, Checkbox, Checkbox Card, Chip, Chip group, Collapsible, Data Table, Datepicker, Description list, Dialog, Divider, Drawer, Field Set, Flare, Flight leg, Floating action button, Floating notification, Flow Stack View, Form label, Form validation, Graphic promotion, Horizontal navigation, Image, Image Gallery, Infinite scroll, Info Banner, Inset Banner, Journey Arrow, Link, List, Map, Mobile scroll container, Modal, Navigation bar, Navigation Tab Group, Nudger, Overlay, Page indicator, Pagination, Panel, Phone input, Popover, Price, Price Range, Progress bar, Radio button, Rating, Rating Bar, Scrollable calendar, Search Input Control, Search Input Summary, Section header, Section list, Segmented Control, Select, Skeleton, Slider, Snippet, Spinner, Split input, Star rating, Swap Button, Switch, Table, Text, Text input, Thumb Button, Tooltip.

Utility components: Aria live, Alignment, Code, Dynamic Layout, Intent Trigger Button, Interactive, Skip link, Theming, Visually Hidden, Z index.

### States

The measured changes are those in §4: blue and grey action fills darken, the inactive Hotels product link gains a deep-blue fill and ring, and the Hotels navigation card changes its painted child and elevation. Its pressed shadow differs from hover. The selected Flights link has no observed pointer-state change within the recorded DOM/CSS scope.

Keyboard focus is **UNMEASURED for all six controls** because the consent dialog trapped the Tab walk. No keyboard-focus token is published. Empty results, validation, loading, success, alert notifications and disabled-state behaviour were not exercised.

## Do's and Don'ts

- Reproduce the measured search action as a 72px, 12px-radius blue control with a bold 16px label.
- Preserve the difference between 8px-radius secondary buttons and 100px-radius product links.
- Read the visible label's typography and colour when an anchor wraps a styled child.
- Keep semantic colour roles and component-specific interaction shades separate.
- Use paragraph foreground for paragraphs; retain the measured black input ink where reproducing that input.
- Keep Larken's confirmed brand metadata separate from live font availability. Substitute: none chosen.
- Do not apply the captured navigation-card shadow to an unmeasured flight-result card, or turn a pointer-triggered ancestor ring into a keyboard-focus token.

These implementation directions come from the measurements and source distinctions above; they do not establish rules for unvisited product routes.

## Voice & Tone

The company presents travel planning as help for the traveller; its About page closes with “It’s your world. We’ll help you explore it.” [About Skyscanner](https://www.skyscanner.net/about-us). The captured Korean hero reads “수백만 개의 저가 항공권. 검색 한 번으로 간단하게.” (Millions of cheap flights, simply found in one search; translation). Captured action labels are short and task-specific: 검색하기 (Search), 숙소 (Hotels), and 어디든지 검색 (Search Everywhere).

The brand article's bubble is a conversational companion that offers tips and cheeky lines. This describes that brand device, rather than an unverified global rule for errors, legal copy or urgency messaging. [Design team's account](https://medium.com/skyscanner-product-design/building-a-plane-mid-flight-how-we-created-the-new-skyscanner-brand-world-df64fae5c229).

## Agent Prompt Guide

Use this bounded recipe: “Build a desktop travel-search area on `#05203c`. Use white field surfaces and a 72px blue search action with 12px radius, 12px 16px padding and a 16px/700 label; hover and pressed fill `#024daf`. Make the secondary header button 36px high with 8px corners, `#e0e4e9` fill and `#161616` label, changing to `#c1c7cf` on hover and press. Use 36px product links with 100px corners and visible 14px/700 labels. A navy Hotels navigation card changes to `#154679` and increases its shadow on hover, then reduces the shadow while pressed.”

The loaded families are Skyscanner Relative and Noto Sans KR on this regional surface. Use the measured geometry without inventing unavailable fonts or keyboard-focus treatments.

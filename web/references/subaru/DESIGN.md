---
name: Subaru
colors:
  primary: '#014e98'
  accent-blue: '#1971d4'
  accent-orange: '#db5f00'
  logo-blue: '#00205b'
  canvas: '#ffffff'
  foreground: '#000000'
  silver: '#dde2e6'
  silver-light: '#f0f3f5'
  grey-k2: '#fafafa'
  grey-k3: '#f7f7f7'
  grey-k5: '#f2f2f2'
  grey-k10: '#e5e5e5'
  grey-k20: '#cccccc'
  grey-k30: '#b2b2b2'
  grey-k40: '#999999'
  grey-k50: '#808080'
  grey-k60: '#666666'
  grey-k80: '#333333'
  grey-k90: '#1a1a1a'
  blue-01: '#144798'
  red-01: '#aa1313'
  red-02: '#c80e47'
  red-03: '#e00404'
  red-strong: '#ff0000'
  background-dark-01: '#2f394a'
  background-light-red-01: '#ffefef'
typography:
  body:
    fontSize: 16px
    fontWeight: 300
    lineHeight: 24px
    use: Measured vehicle-card and estimate-link wrappers; actual rendered family unresolved.
  button:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 27px
    use: Measured lineup and safety action links.
  navigation:
    fontSize: 18px
    fontWeight: 300
    lineHeight: 27px
    use: Measured header lineup link.
  card-category:
    fontSize: 12px
    fontWeight: 300
    use: Measured Forester card category label, SUV.
  support-label:
    fontSize: 14px
    fontWeight: 300
    use: Measured visible estimate-link label; its wrapper is 16px/300.
rounded:
  none: 0px
  sm: 8px
spacing:
  size4: 4
  size8: 8
  size12: 12
  size16: 16
  size24: 24
  size32: 32
  size40: 40
  size48: 48
  size64: 64
  size80: 80
  size166: 166
  content-margin: 40
  block-margin: 80
components:
  lineup-cta:
    type: button
    textColor: '#014e98'
    border: '1px solid #014e98'
    height: 56px
    width: 326px
    padding: 6px
    typography: 18px / 600
    hover: 'bg #014e98; fg #ffffff'
    pressed: 'bg #014e98; fg #ffffff; no additional change versus hover'
    use: 一覧を見る — a link on the white lineup surface, transparent at rest. Pill radius is authored as 100vw, computed 1440px at this viewport; kept in prose. Browser auto focus ring omitted.
  safety-cta:
    type: button
    textColor: '#014e98'
    border: '1px solid #014e98'
    height: 56px
    width: 326px
    padding: 6px
    typography: 18px / 600
    hover: 'bg #014e98; fg #ffffff'
    pressed: 'bg #014e98; fg #ffffff; no additional change versus hover'
    use: 詳しく見る — a link on the white safety section, transparent at rest. Same 100vw pill construction as the lineup CTA. Browser auto focus ring omitted.
  nav-lineup:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 51px
    width: 106.9px
    padding: 0px 0px 22px
    typography: 18px / 300
    hover: 'fg #014e98; bottom border 2px solid #014e98'
    pressed: 'fg #014e98; bottom border 2px solid #014e98; no additional change versus hover'
    use: ラインアップ — a navigation link on the white header, transparent at rest with a transparent 2px bottom border. Browser auto focus ring omitted.
  search-opener:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 8px
    height: 44px
    width: 44px
    padding: 0px
    typography: 13.3333px / 300
    hover: 'bg #f2f2f2'
    pressed: 'bg #f2f2f2; no additional change versus hover'
    use: サイト内検索 — an icon button in the white header. The fg and font describe its wrapper; the visible icon is an external SVG image with a measured 24px square box. Search input and opened panel not measured. Browser auto focus ring omitted.
  forester-card:
    type: card
    textColor: '#000000'
    rounded: 0px
    height: 234.4px
    width: 296.5px
    padding: 0px
    typography: 16px / 300
    hover: descendant vehicle image transform matrix(1, 0, 0, 1, 0, 0) to matrix(1.12, 0, 0, 1.12, 0, 0)
    pressed: descendant image matrix(1.12, 0, 0, 1.12, 0, 0); no additional change versus hover
    use: SUV フォレスター — a vehicle card link on the white lineup surface, transparent at rest. Font is the wrapper; its measured SUV label is 12px/300. The image scales, while the link box stays the same size. Browser auto focus ring omitted.
  estimate-link:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 56px
    width: 162.9px
    padding: 16px 24px
    typography: 16px / 300
    hover: opacity 1 to 0.7
    pressed: opacity 0.7; no additional change versus hover
    use: セルフ見積り — a link on the white floating purchase-support panel, transparent at rest. The wrapper is 16px/300; the visible label is 14px/300 and black. Browser auto focus ring omitted.
---

# Design System Inspiration of Subaru

## Overview

### Visual Theme & Atmosphere

Subaru makes automobiles and aerospace products. Its company profile records establishment on 15 July 1953, with origins in 1917. Fuji Heavy Industries adopted the company name **SUBARU** on 1 April 2017; the announcement describes a commitment to providing value through the brand's enduring promise of **「安心と愉しさ」**, peace of mind and enjoyment. [Company profile](https://www.subaru.co.jp/outline/profile.html), [2017 name-change announcement](https://www.subaru.co.jp/press/news/2017_03_31_3880/).

The current official design page describes **“Symbiosis between Human, Tech and Nature”**: human-centred vehicles, technology supporting peace of mind and enjoyment, and affinity with nature. It connects reassurance with generous, seamless and solid forms, while expressing enjoyment through the character of each vehicle and its user's life. This is Subaru's automotive design writing; the web measurements below come from the Japanese consumer homepage. [SUBARU Design](https://www.subaru.co.jp/difference/design/).

The homepage gives that story a photographic setting: a large vehicle/campaign carousel above a white interface, followed by vehicle lineups, safety, campaigns and services. Black paragraph ink, blue action links and outlined pill buttons provide the recurring interface vocabulary. Vehicle cards have square, unboxed link surfaces; rounded corners concentrate on action pills and small header icon buttons. These are observations of the captured homepage, rather than an official web design-system specification.

The measured page is the Japanese homepage at `www.subaru.jp/`, with HTML `lang="ja"`; the capture did not redirect to another regional edition. Its visible tasks include browsing the lineup, viewing safety information, and following links for estimates, dealer visits and test drives.

### Brand Narrative

The official 2016 history note explains that Subaru is a Japanese star-cluster name, also called **六連星**, and connects the vehicle name to the five companies that invested in Fuji Heavy Industries. The subsequent company-name change unified the corporate name with the vehicle brand. [History and naming announcement](https://www.subaru.co.jp/press/news/2016_05_12_2311/).

Today's design page puts people, technology and nature together and shows concept work, design archives and designers' stories. Its UI/UX interview discusses **vehicle meters and centre displays**, prioritising visibility and ease of use. This supplies useful context for Subaru's attention to everyday interaction; it does not establish the website's typography, accessibility compliance or animation specifications. [Current design page](https://www.subaru.co.jp/difference/design/), [vehicle UI/UX interview](https://www.subaru.co.jp/difference/design/story004/).

### Principles

Subaru's first-party automotive design writing connects reassurance with generous, seamless and solid forms, and enjoyment with the individual character of a vehicle and its user's lifestyle. Its vehicle UI/UX designer explicitly prioritises visibility and usability. Those are documented automotive intentions. The measured web recipe is more specific: clear white surfaces, blue state changes, restrained panel elevation and an image-only card enlargement. [Design philosophy](https://www.subaru.co.jp/difference/design/), [UI/UX interview](https://www.subaru.co.jp/difference/design/story004/).

### Personas

No verified persona research was established from the opened sources.

## Colors

The homepage census recorded **49 computed root custom properties** and **51 distinct declared names**. All 51 names occur in Subaru's first-party [common stylesheet](https://www.subaru.jp/assets/css/common.min.css?20250910). The following values preserve its naming; roles beyond those directly measured are left unspecified.

| Role or source name | Value | Evidence or use |
|---|---|---|
| Primary, `--keyColor` | `#014e98` | CTA text/border at rest; CTA fill and navigation text/bottom border on hover and press |
| `--accentColor` | `#1971d4` | Named accent variable; no semantic role assigned here |
| `--accentOrg` | `#db5f00` | Named orange accent variable |
| `--logoColor` | `#00205b` | Named logo-colour variable; not a measurement of the raster logo |
| Canvas, `--white` | `#ffffff` | White header and lineup surface; hovered CTA text |
| Foreground, `--black` | `#000000` | Paragraph ink: 42 black paragraphs in the survey, versus 2 key-blue paragraphs |
| `--silver` / `--silverLight` | `#dde2e6` / `#f0f3f5` | First-party surface variables; both also occur in the rendered background census |
| `--greyK2` / `--greyK3` / `--greyK5` | `#fafafa` / `#f7f7f7` / `#f2f2f2` | Named neutrals; the search button uses `#f2f2f2` on hover and press |
| `--greyK10` / `--greyK20` / `--greyK30` | `#e5e5e5` / `#cccccc` / `#b2b2b2` | Named neutrals |
| `--greyK40` / `--greyK50` / `--greyK60` | `#999999` / `#808080` / `#666666` | Named neutrals; `--greyK50` is literally `gray` in CSS |
| `--greyK80` / `--greyK90` | `#333333` / `#1a1a1a` | Named dark neutrals |
| `--blue01` | `#144798` | Additional named blue; distinct from key, accent and logo blues |
| `--red01` / `--red02` / `--red03` | `#aa1313` / `#c80e47` / `#e00404` | Declared red palette; no error or warning role established |
| `--redStrong` | `#ff0000` | CSS value `red`; normalized here |
| `--bgDark01` / `--bgLtRed01` | `#2f394a` / `#ffefef` | Named background variables; placement not verified |

The survey's consent UI also contributed `rgb(19, 113, 195)` to the census. That colour and its consent controls are excluded from product tokens. Transparent controls retain their measured alpha value in prose and have no fabricated opaque background token.

## Typography

| Evidence class | Finding |
|---|---|
| Official product use | No opened brand or company document identifies a website typeface. |
| Live-loaded | The census reports `loaded: []`; no loaded face is available for a specimen. |
| Official distributed assets | No font asset or licence was established from the opened sources. |
| Declared-only | Body, h1 and button all declare `"ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif`. The common CSS additionally names `"Neue Haas Grotesk", "YakuHanJPs", sans-serif` under `:lang(en)`. These are declarations, without loaded-face evidence. |
| Unresolved | The actual OS-rendered face and per-script glyph selection are unresolved. The accessible stylesheet walk found no `@font-face`; one third-party search stylesheet was unreadable. |

**Substitute: none chosen.** No family token or font specimen is supplied. An empty `document.fonts` loaded list does not identify which locally installed font painted the text.

Measured typography remains useful independently of family identification:

- Lineup and safety CTA labels: **18px / 600**, line height **27px**.
- Header lineup navigation: **18px / 300**, line height **27px**.
- Forester card wrapper: **16px / 300**, line height **24px**; its visible **SUV** category label is **12px / 300**. The source CSS declares the model name at `2.4rem`; that is declaration evidence, not a separately measured font-size token.
- Estimate link wrapper: **16px / 300**, line height **24px**; visible label **14px / 300**.
- Search icon-button wrapper: **13.3333px / 300**, line height `normal`; this is not visible text typography. Its image box is **24 × 24px**.

Root weight variables are `--fwNormal: 300`, `--fwMd: 500` and `--fwBold: 600`.

## Layout

The captured desktop page places a white header over an image-led carousel, a tabbed horizontal vehicle lineup, safety content, campaign imagery, service links, news and a multi-column footer. The capture's initial hero was 1425px wide within a 1440px viewport with a scrollbar; the vehicle cards sit in a horizontal rail.

Layout variables provide explicit dimensions without requiring a guessed grid: `--contentMaxW: 1440px`, `--contentCol12: 1360px`, `--contentCol10: 1130px`, `--contentXs2: 1050px`, and `--contentCol8: 900px`. The desktop `--headerH` variable is **120px**. These are token values, not a measurement that every container or header has that exact box size.

The spacing variables are **4, 8, 12, 16, 24, 32, 40, 48, 64, 80 and 166px**, named `--size4` through `--size166` for those exact values. `--contentMg` is **40px** and `--blockMg` is **80px**. Measured control padding ranges from 0 to 6px for the card/icon/CTA examples, with 22px bottom padding on the navigation link and `16px 24px` on purchase support.

### Responsive Behavior

Only desktop **1440 × 1000** was measured; mobile layout and touch states are unmeasured.

## Elevation & Depth

All six control boxes have computed `box-shadow: none`. The floating purchase-support **ancestor panel** carries `rgba(0, 0, 0, 0.15) 0px 0px 16px 0px` on a white background. Keep that shadow on the panel rather than assigning it to each link. Vehicle cards remain flat, with their photograph carrying the visual depth.

## Motion & Easing

Each of the six measured controls has the computed transition **`all 0.3s ease 0s`**: **300ms** with `ease`, no delay. The state sampler waited **900ms** for each sample. The Forester image's settled transform is `matrix(1.12, 0, 0, 1.12, 0, 0)` on both hover and press. No carousel timing or reduced-motion behavior was established.

## Components

These are six measured product controls. The cookie banner and vehicle-recommendation banner were closed before states were collected. All six have a measured hover and pressed change; none has an authored focus token.

| Key and identity | Geometry and type | Rest treatment |
|---|---|---|
| `lineup-cta`, **一覧を見る**, `/carlineup/?link=top-carlineup-banner` | 326 × 56px; padding 6px; 18px/600, 27px line height | Transparent link on the white lineup surface; text and 1px border `#014e98`; no shadow |
| `safety-cta`, **詳しく見る**, `/safety/?link=top-safety-banner` | 326 × 56px; padding 6px; 18px/600, 27px line height | Transparent link on the white safety section; text and 1px border `#014e98`; no shadow |
| `nav-lineup`, **ラインアップ**, header | 106.9 × 51px; radius 0; padding `0px 0px 22px`; 18px/300, 27px line height | Transparent link on the white header; `#000000` text; transparent 2px bottom border; no shadow |
| `search-opener`, **サイト内検索**, header | 44 × 44px; radius 8px; padding 0; wrapper 13.3333px/300 | `#ffffff` fill; computed wrapper foreground `#000000`; no border or shadow. The visible icon is an external SVG image, whose internal colour is outside this probe's scope. |
| `forester-card`, **SUV フォレスター**, `/forester/` | 296.5 × 234.4px; radius 0; padding 0; wrapper 16px/300 | Transparent card link on white; visible category and model text `#000000`; no border or shadow |
| `estimate-link`, **セルフ見積り**, floating purchase support | 162.9 × 56px; radius 0; padding `16px 24px`; wrapper 16px/300, label 14px/300 | Transparent link on the white support panel; `#000000` wrapper and label; opacity 1; no own border or shadow |

The two action links use **`border-radius: 100vw`**, computed as **1440px** at the measured viewport. That is a pill construction, not a fixed-radius design token. The other measured radii are **0px** and **8px**.

The search input is absent from the visible survey rows; its unopened panel and input states are unmeasured.

### States

| Control | Hover | Pressed while hovered | Keyboard focus |
|---|---|---|---|
| `lineup-cta` | Transparent → `#014e98` fill; key-blue → white label | Same measured result as hover | Browser `auto` outline only |
| `safety-cta` | Transparent → `#014e98` fill; key-blue → white label | Same measured result as hover | Browser `auto` outline only |
| `nav-lineup` | Black → key-blue text; transparent bottom border → 2px key blue | Same measured result as hover | Browser `auto` outline only |
| `search-opener` | White → `#f2f2f2` background | Same measured result as hover | Browser `auto` outline only |
| `forester-card` | Descendant image scales from 1 to **1.12**; link dimensions stay fixed | Same measured result as hover | Browser `auto` outline only; no image enlargement |
| `estimate-link` | Whole-link opacity **1 → 0.7** | Same measured result as hover | Browser `auto` outline only; opacity remains 1 |

Every hover snapshot confirmed `:hover`; every pressed snapshot confirmed `:active`. All keyboard landings were focus-visible, and no listed focus change persisted after blur. Each pointer-state comparison covers the control, its descendants, their pseudo-elements and three ancestor levels; full scope and raw differences are in the verification notes. “Same as hover” is limited to that compared scope. Disabled states, input editing, validation, open panels and navigation outcomes were not measured.

## Do's and Don'ts

The following are implementation recipes derived from this homepage, not quoted corporate rules.

- Keep ordinary paragraph ink black and distinguish key blue from the separate accent and logo variables.
- Build action links as outlined pills at rest; fill them key blue and turn their labels white on hover and press.
- Keep the vehicle-card box steady while scaling its image to 1.12 on hover and press.
- Preserve the difference between wrapper typography and the smaller visible purchase-support label.
- Do not assign error/success semantics to colour names whose usage was not established.
- Do not publish consent styles or the browser's automatic focus outline as Subaru tokens.

## Voice & Tone

The captured interface uses short Japanese task labels: **一覧を見る** (view the list), **詳しく見る** (view details), **セルフ見積り** (self estimate), **来店予約** (dealer visit reservation) and **試乗予約** (test-drive reservation). These are observed UI wording, without an inferred brand voice manual.

## Agent Prompt Guide

“Create a white automotive browsing surface with black copy and key-blue outlined action links. Make the lineup link 326 × 56px, with 6px padding, a 1px blue border, 18px/600 text and a `100vw` pill radius. Hover and press fill it `#014e98` and turn the text `#ffffff`. Typeface identity is unresolved; do not insert a claimed brand font.”

“Create a square-corner vehicle card link on white, 296.5 × 234.4px in this desktop context. Use black category/model text and a car image. On hover and press, transform only the image from an identity matrix to `matrix(1.12, 0, 0, 1.12, 0, 0)`.”

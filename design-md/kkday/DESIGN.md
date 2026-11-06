---
name: KKday
colors:
  primary: '#26bec9'
  primary-button: '#1ab6c1'
  primary-hover: '#13a3b6'
  primary-deep: '#03748a'
  primary-text-deep: '#068b9f'
  brand-tint: '#f0fafb'
  brand-tint-strong: '#cef0f3'
  canvas: '#ffffff'
  on-primary: '#ffffff'
  foreground: '#212121'
  secondary: '#727272'
  muted: '#9c9da0'
  text-light: '#babbbe'
  surface: '#f1f4f8'
  surface-soft: '#f7fafc'
  hairline: '#e6e9ed'
  border-mid: '#d5d6db'
  critical: '#e65f50'
  critical-surface: '#fff2f2'
  sale: '#ef7a70'
  warning: '#f5b53d'
  highlight: '#ffb400'
  loyalty-silver: '#2e97ff'
  loyalty-gold: '#cc8f00'
  loyalty-platinum: '#9d6dff'
  loyalty-diamond: '#384b68'
  category-label: '#333333'
  carousel-icon: '#000000'
typography:
  section-heading:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 30px
    use: Root --kk-text-h4 tokens; not a measured hero size
  heading-small:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 28px
    use: Root --kk-text-h5 tokens
  heading-xs:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 26px
    use: Root --kk-text-h6 tokens
  card-heading:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
    use: Root --kk-text-subtitle-lg tokens
  subtitle:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    use: Root --kk-text-subtitle-md tokens
  price:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 18px
    use: Root --kk-text-price-bold-xl tokens; separate from the sampled card price
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    use: Root --kk-text-body-md tokens
  body-large:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    use: Root body-lg tokens; also the measured search input
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    use: Root --kk-text-body-sm tokens; sampled trust-chip child label
  category-label:
    fontSize: 14px
    fontWeight: 700
    use: Measured visible KKday專屬團 label
  navigation:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 23.8px
    use: Measured 門票/體驗 link
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  search-button: 24px
  link-box: 0px
spacing:
  s025: 2
  xs: 4
  s075: 6
  sm: 8
  md: 12
  base: 16
  s250: 20
  lg: 24
  s400: 32
  xl: 40
  s600: 48
components:
  search-submit:
    type: button
    backgroundColor: '#1ab6c1'
    textColor: '#ffffff'
    rounded: 24px
    height: 48px
    padding: 12px
    typography: 14px / 400
    hover: 'bg #13a3b6'
    pressed: 'bg #13a3b6'
    use: 搜尋 hero search button. Initial 48×48 icon control with a 20px SVG. The 16px/700 text label is initially hidden. Expansion observed during the Tab walk persists after blur, so it is not a focus token.
  carousel-next:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    height: 45px
    padding: 0px
    typography: 14px / 400
    hover: opacity 0.5
    pressed: opacity 0.5
    use: First offers-carousel next-arrow button; 45×45, circular with CSS border-radius 50%, 24px SVG; measured shadow rgba(60, 64, 67, 0.2) 0px 4px 10px 0px. No accessible label was present.
  nav-experiences:
    type: button
    textColor: '#212121'
    rounded: 0px
    height: 59.8px
    padding: 18px 0px
    typography: 14px / 400
    hover: 'fg #26bec9; ::after underline 96px × 2px in #26bec9'
    pressed: 'fg #26bec9; ::after underline 96px × 2px in #26bec9'
    use: 門票/體驗 is a transparent category navigation link on white; measured width 96px. Browser auto focus outline excluded.
  category-card:
    type: card
    textColor: '#333333'
    rounded: 0px
    height: 181.1px
    padding: 0px
    typography: 14px / 400
    hover: parent .hot-activity-card opacity 0.8
    pressed: parent .hot-activity-card opacity 0.8
    use: KKday專屬團 category link on the white page, 177.5px wide. Geometry and font describe the transparent anchor; fg describes its visible 14px/700 child label. The visual wrapper radius was not measured. Browser link colours excluded.
  product-card:
    type: card
    textColor: '#212121'
    rounded: 0px
    height: 321px
    padding: 0px
    typography: 14px / 400
    hover: 'image wrapper opacity 0.8; h3 title underline solid #212121'
    pressed: 'image wrapper opacity 0.8; h3 title underline solid #212121'
    use: Taiwan PASS 台鐵版 link /zh-tw/product/284326, 273.8px wide. Transparent anchor over a white child surface; fg describes the visible title, not the anchor's default link colour. Image approximately 274×153; wrapper radius unmeasured. Browser auto focus outline excluded.
---

# Design System Inspiration of KKday

## Overview

### Visual Theme & Atmosphere

KKday is a Taiwan-founded marketplace for local travel experiences, attraction tickets, tours and transport. Its own introduction presents the company as a travel companion that makes independent travel easier to arrange and brings travelers closer to local experiences. The founder profile dates Ming Chen's creation of KKday to 2014. [Company introduction](https://www.kkday.com/static/zh-tw/about/about.html)

The measured homepage is the Traditional Chinese Taiwan edition (`www.kkday.com/zh-tw`, HTML `lang="zh-TW"`). Its expression combines a turquoise wordmark and search action, a large travel photograph, a short white headline, and a white browsing surface. Category photographs lead into destination tiles and product carousels. Dark titles, review counts, cancellation conditions, struck-through original prices and discount tags give the product cards several distinct scan points. These are observations of the captured homepage, not an official published design philosophy.

The colour structure is particularly useful to reproduce: base primary **`#26bec9`**, search-button fill **`#1ab6c1`**, and button hover **`#13a3b6`** are separate values. The sampled rating star is turquoise too; the sampled discount tag is coral. Colour therefore separates discovery, rating and promotional information without making every signal identical.

KKday continues to develop the booking relationship beyond individual purchases. Its May 2026 official article reports an April membership update that added Gold between Silver and Platinum. The live stylesheet carries separate silver, gold, platinum and diamond colour families. That connects the current product evolution to a concrete extension of the palette; it does not establish a rebrand. [2026 membership article](https://www.kkday.com/en/blog/63077/kkday-promo-codes)

#### Primary tasks

- Discover and book local experiences by destination, before arrival or during a trip.
- Compare the rating, price and usage conditions visible on product cards.
- Find attraction tickets, transport passes, eSIMs and airport transfers.
- Retrieve a digital voucher or QR code, following the experience's redemption instructions.

The booking and voucher tasks are documented in KKday's [own product explanation](https://www.kkday.com/en/blog/85928/kkday-reviews-about-us); the comparison fields are visible in the capture.

### Brand Narrative

Ming Chen founded KKday in 2014, according to the company's founder profile. The official 2026 article locates the founding in Taipei and describes earlier involvement with ezTravel and Star Travel. Its core product is arranging individual destination experiences online, with digital redemption instructions. [Founder profile](https://www.kkday.com/static/zh-tw/about/about.html), [official 2026 company account](https://www.kkday.com/en/blog/63077/kkday-promo-codes)

The 2026 article reports 350,000+ experiences in 92 countries and 550 cities, citing a December 2024 announcement. It reports US$250 million+ raised and names H.I.S. and Cool Japan Fund among investors. Keep the inventory figure attached to its stated date. No official visual rebrand announcement was found.

The opened terms name regional operating entities and refer to KKday Holdings Co., Ltd. and affiliates. The Taiwan company footer lists tourism provider 酷遊天國際旅行社股份有限公司 and other-products provider 酷遊天股份有限公司, with a Taipei contact address. KKday's Korean company page explicitly places its headquarters in Taiwan. This supports the Taiwan country attribution while keeping contracting entities separate from the place of operation. [Terms](https://www.kkday.com/static/en/about/TermsAndConditions.html), [Korean company page](https://www.kkday.com/static/ko/about/about.html)

### Principles

The company introduction explicitly discusses honest reviews, selecting service providers, an integrated transaction platform, and easy booking. Its Korean culture page describes turning crises into opportunities, working with autonomy and responsibility, collaborating with global colleagues, and adapting to change. These are company statements; they are not evidence for invented colour, motion or accessibility principles. [Company introduction](https://www.kkday.com/static/zh-tw/about/about.html), [culture page](https://www.kkday.com/static/ko/about/about.html)

For construction, the measured interface gives three practical priorities: separate primary action from sale colour; keep review and usage conditions adjacent to a product's price; and preserve the specific feedback of links, cards and arrow buttons. These priorities are derived from this homepage observation.

### Personas

KKday's own product explanation identifies travelers who prefer digital booking and advance planning, including first-time international travelers, families or groups managing several bookings, and theme-park visitors using digital vouchers. These are stated audiences, not researched personas with invented names, ages or preferences. [Official audience description](https://www.kkday.com/en/blog/85928/kkday-reviews-about-us)

## Colors

The homepage exposed **511 computed root custom properties**: 497 `--kk-*`, 12 `--layout-*`, and two Swiper defaults. The stylesheet walk recorded 618 unique declared property names and no unreadable stylesheets. KKday's role names are explicit; the following values come from them unless a control is named.

| Role | Value | Live evidence |
|---|---|---|
| Base primary | `#26bec9` | `--kk-color-background-primary-medium`; nav hover and sampled star fill |
| Primary action | `#1ab6c1` | `--kk-color-background-primary-button`; search button rest |
| Primary dark | `#13a3b6` | `--kk-color-background-primary-dark`; search hover/press |
| Primary deeper background | `#03748a` | `--kk-color-background-primary-darker` |
| Primary deeper text | `#068b9f` | `--kk-color-text-primary-darker` |
| Primary washes | `#f0fafb`, `#cef0f3` | Background primary lighter/light |
| Canvas / on-action | `#ffffff` | White product child surface; search icon |
| Foreground | `#212121` | Text darker token; visible product title and nav text |
| Secondary / muted | `#727272`, `#9c9da0` | Text dark/medium; review metadata and original price |
| Light text | `#babbbe` | Text light token; wishlist icon container |
| Surface | `#f1f4f8` | Surface light token; cancellation and confirmation tags |
| Lighter surface | `#f7fafc` | Background surface lighter token |
| Light divider / border | `#e6e9ed`, `#d5d6db` | Border lighter/light tokens; search container observations |
| Critical | `#e65f50` | Text/background critical dark; special-offer labels in survey |
| Critical wash | `#fff2f2` | Background critical lighter; special-offer tag surfaces |
| Coral sale fill | `#ef7a70` | Background critical medium; sampled `50% OFF` tag |
| Warning | `#f5b53d` | Text warning medium token; no warning interaction sampled |
| Highlight | `#ffb400` | Highlight medium tokens; the sampled rating star uses primary turquoise instead |
| Category label | `#333333` | Visible `KKday專屬團` child label |
| Carousel arrow | `#000000` | Sampled next-arrow button's computed icon colour |

Membership background-medium tokens are **silver `#2e97ff`**, **gold `#cc8f00`**, **platinum `#9d6dff`**, and **diamond `#384b68`**. These are live token definitions; a member-tier screen was not operated.

The paragraph-only census is separate from the role named `foreground`: `<p>` ink was white ×28, `rgb(229, 231, 235)` ×1 and `rgb(0, 166, 166)` ×1. White paragraphs and the visible consent layer make that sample unsuitable for declaring a universal dark paragraph colour. The dark foreground above is backed by its named token and the actual product/nav labels.

Swiper defaults and social-provider identity colours are excluded from the brand palette. The full raw property list and colour counts are in the measurement report.

## Typography

### Evidence classes

- **Official product use:** no first-party typography guideline was found in the opened sources.
- **Live-loaded:** the survey's `document.fonts` loaded-face list is empty. No family is promoted to a rendered brand-face token or specimen.
- **Official distributed assets:** no first-party text-font distribution or font licence was verified. The only visible `@font-face` record is `swiper-icons`, normal 400, served as an embedded WOFF data URL; it is a library icon face, not a text face, and was not reported loaded.
- **Declared-only:** body and h1 declare `"Noto Sans TC", 微软雅黑, "Microsoft YaHei", sans-serif`. The census's first button declares `system-ui, -apple-system, "Noto Sans TC", "PingFang TC", Arial, sans-serif`; that button is the consent close/allow control. The sampled product controls separately declare `Noto Sans TC`. These declarations do not establish which installed font rendered each glyph.
- **Unresolved:** the actual rendered Latin and Han faces, other locales' stacks, and a brand monospace face. **Substitute: none chosen.**

### Verified metrics

These are root typography tokens, with size / line height / weight in pixels where applicable; they are not a claim that the hero uses the same scale.

| Token family | Size | Line height | Weight |
|---|---:|---:|---:|
| h4 | 24 | 30 | 700 |
| h5 | 22 | 28 | 700 |
| h6 | 18 | 26 | 700 |
| subtitle lg | 16 | 24 | 700 |
| subtitle md | 14 | 20 | 500 |
| subtitle sm | 12 | 16 | 500 |
| body lg | 16 | 24 | 400 |
| body md | 14 | 20 | 400 |
| body sm / category | 12 | 16 | 400 |
| price bold xxl / xl / lg / md | 22 / 18 / 16 / 14 | 22 / 18 / 16 / 14 | 700 |
| price medium lg / md | 16 / 14 | 16 / 14 | 500 |
| price regular md / sm | 14 / 12 | 14 / 12 | 400 |

The measured nav link is 14px/400 with 23.8px line height. The search field is 16px/400 with 24px line height. The category-card label is 14px/700; its anchor computes 14px/400. The search button computes 14px/400; its initially hidden `搜尋` label separately computes 16px/700. Preserve this distinction between a control container and its visible label.

Root font weights also include 300, 400, 500, 600 (`medium-android`) and 700. The existence of 600 does not establish that the sampled desktop buttons use it.

## Layout

At the measured 1440×1000 desktop viewport, the screenshot shows a 60px sticky header above a category row. The hero spans the available page width, followed by a centred category collection. The six category anchors start at x=143, 335, 528, 720, 913 and 1105; each is 177.5px wide, with gaps approximately 15px. The repeated product-card anchors are 273.8px wide with approximately 15px gaps; four fit within the visible content area while further cards continue horizontally. This establishes a desktop carousel arrangement, not mobile breakpoints or a universal grid specification.

The first-party `--kk-spacing-*` scale is 2, 4, 6, 8, 12, 16, 20, 24, 32, 40 and 48px. `--layout-spacing-*` repeats those values and adds 0. Use the measured 12px search-button padding and 18px vertical nav padding for their particular controls; neither requires every spacing value to be a multiple of eight.

Root radius tokens are xs 2px, sm 4px, md 8px, lg 12px and xl 16px. The search action's measured 24px radius and the carousel arrow's 50% radius sit alongside that scale. An anchor's 0px radius does not measure the clipping radius of its image or visual wrapper.

The capture supports a dense comparison layout through repeated image, rating, condition and price fields. It does not establish how many items a traveler compares or why they convert.

### Responsive Behavior

Only the 1440×1000 desktop edition was measured; mobile breakpoints, sticky booking bars, filter sheets and touch layouts are unverified.

## Elevation & Depth

Three explicit root shadows are available:

- `--kk-elevation-action`: `0px 1px 4px 0px #2632381f`.
- `--kk-elevation-fixed`: `0px 2px 24px 0px #2632381f`.
- `--kk-elevation-raised`: `0px 8px 24px 0px #252a313d`.

The search container uses the action shadow as a computed rgba value. The category-card wrapper has a different observed shadow, `rgba(0, 0, 0, 0.1) 0px 8px 20px 0px`; the carousel button uses `rgba(60, 64, 67, 0.2) 0px 4px 10px 0px`. The product anchor and the primary search button have no shadow. No shadow change was reported for either sampled card on hover.

A translucent campaign tag on the product image is white at 85% opacity, with a 1px white border at 50%, `backdrop-filter: blur(5px)`, and the fixed shadow. These values describe that tag, not a general dialog material.

The fixed-element list records the sticky header at z-index 1005, the promotional bottom banner at 1000, the scroll-top wrapper at 1001, and the cookie banner at 2147483645. A modal/toast stacking hierarchy was not measured.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.action`: `0px 1px 4px 0px #2632381f`
- `shadow.fixed`: `0px 2px 24px 0px #2632381f`
- `shadow.raised`: `0px 8px 24px 0px #252a313d`
- `shadow.category-card`: `rgba(0, 0, 0, 0.1) 0px 8px 20px 0px`
- `shadow.carousel-next`: `rgba(60, 64, 67, 0.2) 0px 4px 10px 0px`

## Motion & Easing

The next-arrow button's raw computed transition is **`all 0.3s ease-in-out 0s`**. The search button reports **`grid-template-columns, grid-gap, padding 0.3s, 0.3s, 0.3s ease-out, ease-out, ease-out 0s, 0s, 0s`**; retain that raw serialization as evidence for search geometry changes rather than treating it as a colour-transition token.

The nav link, input and two card anchors each report **`all 0s ease 0s`** on the element itself. The pointer captures nevertheless detect changes on the nav pseudo, card parent and image wrapper; an anchor's own transition string does not describe every descendant's animation. No global duration/easing scale, spring policy, route animation or reduced-motion behavior was verified.

## Components

Measurements below identify exact homepage controls. Consent controls are excluded. Transparent anchors keep their transparent background; the colour of the visible child is reported separately from default link colour.

| Control | Rest geometry and appearance | Measured authored state |
|---|---|---|
| `search-submit` — `搜尋` | 48×48; radius 24px; padding 12px; fill `#1ab6c1`; white 20×20 SVG; no border or shadow | Hover and held press fill `#13a3b6` |
| `carousel-next` — first offers arrow | 45×45; radius 50%; padding 0; white with black 24px SVG; shadow `rgba(60, 64, 67, 0.2) 0px 4px 10px 0px` | Hover and held press reduce whole-control opacity from 1 to 0.5 |
| `nav-experiences` — `門票/體驗` link | 96×59.8; anchor radius 0; padding 18px 0; 14px/400; transparent on white; visible `#212121` | Hover and held press use `#26bec9` text and a 96×2px `::after` underline |
| `category-card` — `KKday專屬團` link | 177.5×181.1; anchor radius 0; padding 0; visible `#333333` 14px/700 label; image about 178×133 | Hover and held press reduce parent `.hot-activity-card` opacity to 0.8 |
| `product-card` — Taiwan PASS 台鐵版 link | 273.8×321; anchor radius 0; padding 0; white child surface; visible `#212121` title; image about 274×153 | Hover and held press reduce image-wrapper opacity to 0.8 and underline the h3 title |

The sampled product card retains the image → title → rating/review count → conditions → price/discount order. The original price is `#9c9da0` with a measured line-through. The star's SVG fill is `#26bec9`. Its `出發前可免費取消`, `即買即用`, and `立即確認` tags have `#f1f4f8` backgrounds and dark child text. Survey tag boxes use 4px radius and 2px 4px padding; the nested body-sm label is 12px/400 even though the outer tag computes 14px/400. The coral discount tag uses white text. These are rest observations, not separately harvested interactive badge components.

### Search input — descriptive only

`input.search-input-field__input`, accessible name `搜尋景點、地區或城市`, is initially 540×60, radius 0, padding 0, 16px/400, dark text, no own border/shadow, transparent over the white search container. The container's initial border is 2px solid `#e6e9ed` and its shadow is `rgba(38, 50, 56, 0.12) 0px 1px 4px 0px`.

Hover and held press showed no computed change across the input, its pseudos and three ancestor levels. During the Tab walk, the input narrowed to 500px, the container border became `#d5d6db`, and the shadow disappeared. All those differences remained after blur, so they are not a clean focus treatment. This input has no interactive component token.

The search button also widened to 88×48 with 12px 16px padding and revealed its text while the search suggestions were open. Those changes persisted after blur. They describe an observed expanded search presentation, not a dedicated focus state.

### States

| Control | Hover | Held press | Keyboard focus |
|---|---|---|---|
| Search action | Fill `#13a3b6` | Same fill; no additional delta versus hover | Browser `auto` ring; expansion/container changes persist after blur |
| Offers next arrow | Opacity 0.5 | Same opacity; no additional delta versus hover | Browser `auto` ring |
| `門票/體驗` link | Turquoise text and 2px after-underline | Same treatment | Browser `auto` ring |
| Search input | No computed change in measured scope | No computed change in measured scope | Width/container changes persist after blur; no clean authored focus token |
| `KKday專屬團` link | Parent opacity 0.8 | Same authored opacity | Browser `auto` ring |
| Taiwan PASS link | Image opacity 0.8; title underlined | Same authored treatment | Browser `auto` ring |

The card anchors also change their unstyled computed link colour from browser blue to red on press. Their visible title colours stay dark. That is not a brand press token. Likewise, the computed blue `auto` focus outline is browser feedback, so no focus colour is harvested.

“No computed change” is restricted to the probe's scope: self and pseudos, descendants and their pseudos, three ancestor levels, and the listed computed style/DOM/SVG attributes. For the input there were no descendants. Canvas, video, closed shadow trees, cross-origin frames and siblings are outside that comparison.

Consent remained open and `hideOverlays: true` was used for the pointer pass. These are raw observations for reviewer remeasurement. Disabled, loading, empty, validation, payment and booking-confirmation presentations were not exercised.

## Do's and Don'ts

Construction guidance derived from this capture:

- Use the three distinct primary values for base colour, action fill and hovered action fill.
- Keep product photography, review information, conditions and the original/current price relationship visible together.
- Reproduce the measured opacity changes on the appropriate element: whole category wrapper, product image wrapper, or carousel button.
- Use the role-specific typography metrics while keeping the unresolved family out of rendered specimens.
- Keep default link colours and the browser's `auto` outline out of the brand token palette.
- Preserve rounded and circular actions where measured; do not impose one radius on every control.

## Voice & Tone

The captured Taiwan hero says **`我的天 超好玩`**, and the current page title describes KKday as **`全球旅遊神隊友`**. The short playful headline accompanies a concrete search action, **`搜尋`**, and explicit navigation categories. Product condition labels are practical: **`出發前可免費取消`**, **`即買即用`**, **`立即確認`**. Sale language is also visible through **`雙11x最強旅展`** and **`50% OFF`**. These observed examples support a playful discovery headline alongside direct transactional information; they do not establish a prohibition on promotional language.

The company introduction's companion framing supports this reading of the homepage. No official copywriting rulebook, forbidden-phrase list, or empty/error/success-message policy was verified.

## Agent Prompt Guide

### Quick colour reference

Base `#26bec9`; action `#1ab6c1`; hovered/pressed action `#13a3b6`; foreground `#212121`; metadata `#727272`; old price `#9c9da0`; white canvas; neutral conditions `#f1f4f8`; coral sale `#ef7a70`.

### Examples grounded in the capture

- “Build the KKday homepage's initial search action as a 48×48 button, 24px radius, 12px padding, white 20px search SVG, `#1ab6c1` fill; hover and held press change only the fill to `#13a3b6`. Do not add an authored focus ring from this reference.”
- “Build a transparent `門票/體驗` navigation link on white: 96×59.8, 18px vertical padding, 14px/400, dark text. On hover and held press, change the text to `#26bec9` and paint its 96×2px after-underline in the same colour.”
- “Build a product link with a white inner surface, approximately 274×153 image, dark title, turquoise rating star, neutral condition tags, and current/original prices. Fade only the image wrapper to opacity 0.8 and underline the title on hover or held press.”

Font family and visual-wrapper radius remain unresolved for these prompts; use no substitute specimen or guessed wrapper radius.

## Governance

### Known Gaps

- **Contrast, `search-submit`.** Text `#ffffff` on `#1ab6c1` measures 2.47:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

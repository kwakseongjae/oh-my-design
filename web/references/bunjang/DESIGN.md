---
name: Bunjang
colors:
  primary: '#d80c18'
  brand: '#d80c18'
  canvas: '#ffffff'
  foreground: '#191919'
  muted: '#7f7f7f'
  surface: '#f6f6f6'
  hairline: '#e5e5e5'
  secondary: '#4c4c4c'
  black: '#000000'
  blue-100: '#d9ebff'
  blue-400: '#b3d7ff'
  blue-50: '#ebf5ff'
  blue-500: '#027aff'
  care-100: '#f8ecd3'
  care-300: '#f6e5c3'
  care-50: '#fdf4e2'
  care-500: '#ffe1a6'
  gray-10: '#fafafa'
  gray-100: '#e5e5e5'
  gray-150: '#cccccc'
  gray-200: '#b2b2b2'
  gray-300: '#999999'
  gray-400: '#8c8c8c'
  gray-50: '#f6f6f6'
  gray-500: '#7f7f7f'
  gray-600: '#666666'
  gray-70: '#f0f0f0'
  gray-700: '#4c4c4c'
  gray-800: '#333333'
  gray-900: '#191919'
  green-100: '#dbf2ee'
  green-400: '#a6dfd5'
  green-50: '#edf9f7'
  green-500: '#00a587'
  red-100: '#fbe7e8'
  red-400: '#f5c2c5'
  red-50: '#fdf3f3'
  red-500: '#d80c18'
  safe-100: '#e1e7fe'
  safe-300: '#7775e3'
  safe-400: '#6458e2'
  safe-50: '#eff2fe'
  safe-500: '#5558a8'
  yellow-100: '#fff6db'
  yellow-400: '#ffeaa6'
  yellow-50: '#fffbed'
  yellow-500: '#ffc200'
typography:
  price:
    fontSize: 18px
    fontWeight: 700
    use: Live-loaded face; visible price paragraph in the measured recommendation card
  navigation-label:
    fontSize: 18px
    fontWeight: 700
    use: Visible child label of the women clothing navigation link
  search-input:
    fontSize: 15px
    fontWeight: 500
    lineHeight: 18
    use: Computed input value style; placeholder wording recorded separately, placeholder color unresolved
  login-label:
    fontSize: 14px
    fontWeight: 700
    use: Visible child span of the secondary login button; enclosing button computes 16px/400
  app-nudge-label:
    fontSize: 15px
    fontWeight: 700
    use: Visible child span of the top app nudge; enclosing button computes 16px/400
  load-more-label:
    fontSize: 16px
    fontWeight: 700
    use: Visible child span of the feed continuation button; enclosing button computes 16px/400
  footer-link:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24
    use: Surveyed company, terms and policy footer links
  footer-business-link:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 21
    use: Surveyed business-information link in the footer
  control-box:
    fontSize: 16px
    fontWeight: 400
    use: Computed enclosing app, login, category, card and load-more elements; visible children may override this
rounded:
  none: 0px
  md: 6px
spacing:
  card-image-to-price: 12
  card-price-to-title: 6
  card-title-to-meta: 12
  login-block: 12
  load-more-block: 16
  button-inline: 20
components:
  button-secondary:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#4c4c4c'
    border: '1px solid #e5e5e5'
    rounded: 6px
    height: 42.8px
    padding: 12px 20px
    typography: 14px / 700
    hover: 'box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 9999px inset'
    pressed: 'box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 9999px inset'
    use: 로그인/회원가입 button inside a link to /login?header=true. Visible label is 14px/700; button computes 16px/400. Hover and held press add the inset shadow without changing bg or fg. Native auto focus ring is excluded.
  input-search:
    type: input
    textColor: '#191919'
    rounded: 0px
    height: 18px
    padding: 0px
    typography: 15px / 500
    pressed: 'parent form border: 1px solid #191919'
    focus: 'parent form border: 1px solid #191919'
    use: 'Transparent input on a #f6f6f6 search form; line-height 18px. Press and real Tab focus change the ancestor form border from transparent to #191919. The input itself has no drawn border or outline. Measured input width 442px.'
  product-card:
    type: card
    textColor: '#191919'
    rounded: 0px
    height: 326.3px
    padding: 0px
    typography: 16px / 400
    hover: 'descendant image transform: matrix(1.2, 0, 0, 1.2, 0, 0)'
    pressed: 'descendant image transform: matrix(1.2, 0, 0, 1.2, 0, 0)'
    use: 'Transparent product link on the white page; measured href starts /products/443158688 and width is 193.3px. Radius 0 belongs to the link, not the rounded thumbnail. Price child is 18px/700 #191919; metadata ink is #7f7f7f. Hover and held press scale only the image. Native focus and the following child heart ring are excluded.'
  button-load-more:
    type: button
    backgroundColor: '#f6f6f6'
    textColor: '#4c4c4c'
    border: none
    rounded: 6px
    height: 51.2px
    padding: 16px 20px
    typography: 16px / 700
    hover: 'box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 9999px inset'
    pressed: 'box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 9999px inset'
    use: 더보기 continuation button, 400px wide, in the recommendation feed. Visible label is 16px/700; enclosing button computes 16px/400. Hover and held press add the inset shadow. Native auto focus ring is excluded.
fonts:
  roles:
    sans: Pretendard Variable
---

# Design System Inspiration of Bunjang (번개장터)

## Overview

### Visual Theme & Atmosphere

Bunjang is a Korean marketplace for used goods, operated by 번개장터 주식회사 in Seoul. Its official history records a January 2011 service launch and the 2017 change from Quicket to the Bunjang company name. The company frames its work around extending the life of things and using technology to remove friction from recommerce. [Company and history](https://bgzt.co.kr/about), [legal notice](https://bgzt.co.kr/article/584).

The web interface puts a white `#ffffff` canvas and near-black `#191919` text around portrait product photographs. Prices lead the measured cards in 18px/700 type. A long recommendation grid sits below a promotional carousel and six illustrated shortcuts. The primary color remains `#d80c18` in the live CSS; the captured app nudge instead uses light text on a black gradient. This is an image-rich marketplace with restrained utility chrome, rounded search chrome, a thin gray button border and a small set of direct actions. These are observations of the captured homepage, not a published rule limiting red to one action.

The company's June 2026 product explanation describes a reorganized **app** home with four purpose-based tabs: selling, finding one's next item, popular items and benefits. It explicitly connects the redesign to observed buying and selling journeys. That is the documented product evolution; the measured web surface presents search, category navigation and a recommendation feed. [June product explanation](https://bgzt.co.kr/article/625).

Bunjang's campaign writing adds a personal dimension: selling something once loved makes room for the next interest. Its 2025 account traces the SellToLove project to 2020, and the July 2026 campaign joins a sale and a purchase into a rewarded cycle. The reusable visual idea is a consistent frame for varied possessions, with the price, name and age of a listing easy to scan. [Campaign history](https://bgzt.co.kr/article/424), [July campaign](https://bgzt.co.kr/article/633).

The measured homepage is the Korean surface at `m.bunjang.co.kr/`, HTML `lang="ko-KR"`, at 1440×1000; it did not redirect to another path.

#### Primary tasks

- Browse recommended listings and open a product link.
- Search by product or shop name from the header.
- Browse product categories; reach favorites and recently viewed items through the shortcuts.
- Buy and sell used goods; the service terms define both buyer and seller roles. [Service terms](https://terms.bunjang.co.kr/terms/service.html).

### Brand Narrative

Bunjang's official history includes an escrow-based payment service introduced in 2018 and a total-care service introduced in 2022. Its 2025 campaign history explains SellToLove as a project that helps people pursue a new interest by selling possessions associated with an earlier one. The July 2026 campaign develops the sale-and-purchase cycle into club benefits. This makes reuse and personal taste part of the company's stated story, beyond a visual emphasis on price. [History](https://bgzt.co.kr/about), [campaign account](https://bgzt.co.kr/article/424), [July campaign](https://bgzt.co.kr/article/633).

The production implementation has a `--bun-ui-*` group for safe areas, pill radius and aspect ratios, as well as color, layout and stacking groups. That namespace is observable. An official public title, maturity claim or private/public status for a system named “Bun UI” was not established by the opened pages.

### Principles

The company's stated mission centers on reducing recommerce friction through technology, and its vision connects reuse with sustainable consumption. Its June home-redesign account describes bringing recurring buying and selling tasks closer to the first screen. [Company](https://bgzt.co.kr/about), [home-redesign account](https://bgzt.co.kr/article/625).

As design guidance from the capture, keep a consistent frame for varied product imagery, let the price lead within each card, make search focus visible on its frame, and use measured state layers without inventing extra palette roles. These are analytical applications of the evidence, not a quoted corporate design manifesto.

### Personas

The service terms distinguish **buyers** and **sellers**, including general and professional shop forms. Those are documented service roles. Age cohorts, personality comparisons with competitors and demographic personas were not established by the measured page. [Service terms](https://terms.bunjang.co.kr/terms/service.html).

## Colors

The live root census contains 79 computed custom properties. The first-party palette comprises 43 `--color-*` names plus nine partner-named `--color-brand-*` names. The values below retain the production names. Color presence is distinguished from a verified component role.

### Observed roles

| Role in this capture | Value | Evidence |
|---|---|---|
| Primary palette value | `#d80c18` | Both `--color-primary` and `--color-red-500`; no red primary button was measured |
| Canvas | `#ffffff` | Homepage screenshot and white secondary button |
| Foreground | `#191919` | All 96 paragraph-ink entries in the survey; measured price, navigation label and input |
| Secondary action text | `#4c4c4c` | Login and feed continuation labels |
| Muted listing metadata | `#7f7f7f` | Timestamp and favorite-count children of the measured card |
| Light surface | `#f6f6f6` | Search form, thumbnail image background and continuation button |
| Hairline | `#e5e5e5` | Login button's 1px solid border |
| App nudge label | `#fafafa` | Visible label span and arrow, rather than the enclosing button's inherited color |

The most frequent text color in the census is `#7f7f7f` (122 entries), followed by `#191919` (106). The paragraph-ink result, rather than the overall text-frequency winner, establishes `foreground`.

### Neutral primitives

There are **13 numbered gray stops**, plus black and white. `--color-gray` is an alias for `#f6f6f6`.

| Production property | Computed value |
|---|---|
| `--color-gray-900` | `#191919` |
| `--color-gray-800` | `#333333` |
| `--color-gray-700` | `#4c4c4c` |
| `--color-gray-600` | `#666666` |
| `--color-gray-500` | `#7f7f7f` |
| `--color-gray-400` | `#8c8c8c` |
| `--color-gray-300` | `#999999` |
| `--color-gray-200` | `#b2b2b2` |
| `--color-gray-150` | `#cccccc` |
| `--color-gray-100` | `#e5e5e5` |
| `--color-gray-70` | `#f0f0f0` |
| `--color-gray-50` | `#f6f6f6` |
| `--color-gray-10` | `#fafafa` |
| `--color-black` | `#000000` |
| `--color-white` | `#ffffff` |

`#666666` is measured on company/terms footer links. The remaining neutral values are retained as live palette primitives without assigning unobserved disabled, row-hover or divider behaviors.

### Chromatic primitives

| Property family (`--color-…`) | Stops and computed values |
|---|---|
| `red` | 100: `#fbe7e8` · 400: `#f5c2c5` · 50: `#fdf3f3` · 500: `#d80c18` |
| `green` | 100: `#dbf2ee` · 400: `#a6dfd5` · 50: `#edf9f7` · 500: `#00a587` |
| `blue` | 100: `#d9ebff` · 400: `#b3d7ff` · 50: `#ebf5ff` · 500: `#027aff` |
| `yellow` | 100: `#fff6db` · 400: `#ffeaa6` · 50: `#fffbed` · 500: `#ffc200` |
| `care` | 100: `#f8ecd3` · 300: `#f6e5c3` · 50: `#fdf4e2` · 500: `#ffe1a6` |
| `safe` | 100: `#e1e7fe` · 300: `#7775e3` · 400: `#6458e2` · 50: `#eff2fe` · 500: `#5558a8` |

`--color-green` also resolves to `#edf9f7`. The `care` and `safe` ladders are present in the product's own root CSS. Their association with particular authentication or payment badges was not re-measured; the palette values remain useful without turning those associations into component recipes. Success, warning and error use beyond the primary alias is likewise unresolved.

### Partner-named values

These names are present in Bunjang's stylesheet. They are kept separate from Bunjang's own palette and excluded from the machine color collection; social-login usage was not inspected.

| Production property | Raw computed value |
|---|---|
| `--color-brand-apple` | `#000000` |
| `--color-brand-band` | `#21c531` |
| `--color-brand-facebook` | `#1877f2` |
| `--color-brand-facebook-2` | `linear-gradient(180deg, #00B2FF 0%, #006AFF 100%)` |
| `--color-brand-kakao` | `#fae100` |
| `--color-brand-kakao-2` | `#3c1e1e` |
| `--color-brand-line` | `#00b900` |
| `--color-brand-naver` | `#03cf5d` |
| `--color-brand-twitter` | `#1da1f2` |

## Typography

### Font evidence classes

- **Official product use:** no opened company page explicitly documents a product typeface.
- **Live-loaded:** `document.fonts` reports **Pretendard Variable**, weight range `45 920`, style `normal`. It is the only loaded face reported by this capture. Body and button declarations begin with it; the census has no `h1` sample.
- **Official distributed assets:** the live product stylesheet declares `/static/media/PretendardVariable.subset.0.BHUkWNFR.woff2`, format `woff2-variations`, on the same `m.bunjang.co.kr` origin. This is a served product asset, not evidence of a public brand-font distribution or a license grant. No such distribution or license was opened.
- **Declared-only:** the remaining CSS fallback stack is recorded verbatim in the verification notes. None of those entries appears in the loaded-face list, and none becomes a family token or a specimen here.
- **Unresolved:** official brand-font attribution, licensing, mobile type metrics and a site-wide claim that every glyph uses this face.

**Substitute: none chosen.** The family token contains only the live-loaded face.

### Measured scale

| Text | Size / weight | Ink | Line-height evidence |
|---|---|---|---|
| Product price | 18px / 700 | `#191919` | Visible child label; paragraph line-height not captured |
| Women clothing navigation label | 18px / 700 | `#191919` | Visible child label; enclosing link computes `normal` |
| App nudge label | 15px / 700 | `#fafafa` | Visible child label; enclosing button computes `normal` |
| Login label | 14px / 700 | `#4c4c4c` | Visible child label; enclosing button computes `normal` |
| Feed continuation label | 16px / 700 | `#4c4c4c` | Visible child label; enclosing button computes `normal` |
| Search input value | 15px / 500 | `#191919` | 18px |
| Company / terms footer links | 16px / 500 | `#666666` | 24px |
| Business-information footer link | 14px / 500 | `#7f7f7f` | 21px |

The app button, login button, category link, card link and continuation button themselves compute to 16px/400. Their visible descendants override that inherited style. Use the label metrics when reproducing the text. All six probed control elements have `letter-spacing: normal`; that does not establish tracking for every descendant or every route.

## Layout

The root exposes `--layout-width-xsmall: 480px`, `--layout-width-small: 640px`, `--layout-width-large: 1240px` and `--layout-width-full: 100vw`. At the measured desktop width, the six card columns occupy the 1240px content area. Their rounded survey x positions are 93, 302, 511, 720, 930 and 1139px, and each link is 193.3px wide. These coordinates imply gaps of about 16px; they do not establish an exact spacing token.

The root's current `--layout-gutter` computes to **30px**, while the first declaration encountered by the stylesheet walk is **0**. The two values represent different evidence classes; the initial declaration is not substituted for the computed value. `--drawer-width` is **480px**; no drawer was opened.

Header size values are `--header-height-small: 56px`, `--header-height-large: 129px`, `--app-nudge-banner-height-small: 60px` and `--app-nudge-banner-height-large: 50px`. The runtime `--app-shell-top-reserve` is **179px**, and the fixed header slot measures **1425×179px** at z-index **200**. It contains the app nudge and navigation rather than a consent dialog. The captured full page is 4453px high and ends in a legal/support footer after the feed continuation action.

### Stacking and safe areas

| Production property | Computed value |
|---|---|
| `--z-index-drawer` | 1000 |
| `--z-index-drawer-dim` | 900 |
| `--z-index-footer` | 100 |
| `--z-index-header` | 200 |
| `--z-index-popup` | 1200 |
| `--z-index-popup-dim` | 1100 |
| `--z-index-snackbar` | 1500 |
| `--z-index-sticky` | 100 |
| `--z-index-widget` | 500 |

These are stack values, not evidence of a preference for snackbars over dialogs. The four `--bun-ui-sa*` properties declare the corresponding `env(safe-area-inset-top/right/bottom/left)` values and compute to **0px** in this desktop capture. The root also defines `--bun-ui-aspect-ratio-square: 1 / 1` alongside its portrait ratio.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; mobile columns, baseline width and responsive breakpoints remain unresolved.

## Elevation & Depth

All six controls have `box-shadow: none` at rest. The secondary action's `#e5e5e5` border and the `#f6f6f6` input/button/photo surfaces give the utility chrome a flat appearance. Interaction adds an **inset** 10% black shadow to the two measured buttons; this is a darkening layer within their bounds.

The card photo's `::after` has the computed background image `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1))`. The heart combines white and low-opacity black filled paths. The census also records one `rgba(0, 0, 0, 0.3)` background, visible as the carousel counter bubble in the screenshot. These local overlays are part of the observed design; a site-wide absence of gradients or shadows would be inaccurate.

The measured button radius is **6px**; the search input and card anchor have **0px** radii. The root pill value `--bun-ui-radius-pill: 999px` is retained as a production primitive in prose, without assigning it to an unmeasured control. No general spacing scale was found among the census's custom properties. The numeric spacing entries in the token block describe the measured spacers and button padding only.

## Motion & Easing

All six control elements report the raw computed transition **`all 0s ease 0s`**. Their own transition string does not describe every child: the product card's descendant scan reports a **200ms** longest transition and samples after **900ms**, when the image is settled at `matrix(1.2, 0, 0, 1.2, 0, 0)`. The descendant's raw easing string was not retained in `states.json`, so no curve is specified. No broader motion system was verified.

## Components

### Secondary login action

The `로그인/회원가입` control is a button inside a link to `/login?header=true`. It measures **131.9×42.8px**, radius **6px**, padding **12px 20px**, white `#ffffff` background, `#4c4c4c` text and a **1px solid `#e5e5e5`** border. The enclosing button computes 16px/400; its visible label is **14px/700**.

Hover and held press both add `box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 9999px inset`. Background and text stay at their rest values. Keyboard focus draws Chrome's `auto` outline; it is not a brand focus token.

The login and continuation buttons share `_button_1cw4e_1`; their observed variant classes are `_variant-normal_1cw4e_53` and `_variant-normal-gray_1cw4e_65`. These are captured implementation classes, not a documented public variant API.

### Feed continuation

The `더보기` button is **400×51.2px**, radius **6px**, padding **16px 20px**, background `#f6f6f6`, text `#4c4c4c`, no border and no rest shadow. Its visible label is **16px/700**, while the enclosing element computes 16px/400. Hover and held press use the same 10% black inset shadow as the login action. Keyboard focus uses the browser's `auto` ring.

### Search

The measured input, class `_input_au7f1_17`, is **442×18px**, radius **0px**, padding **0px**, with transparent background, no border, 15px/500 text and 18px line-height. Its containing form supplies the `#f6f6f6` surface and the rounded visible frame. The placeholder is `상품명이나 상점명을 검색해주세요`; its separate pseudo-element color was not measured.

Hover has no computed change within the probe's comparison scope. Held press and real Tab focus change **the parent form's** border from `1px solid rgba(0, 0, 0, 0)` to **`1px solid #191919`**. The input's own border and outline remain absent. Reproduce that change on the form, with the input's 0px radius kept separate from the frame's shape.

The pointer press also focuses the input. The observed border therefore does not establish a separate `:active` rule independent of focus.

### Product card link

The measured listing links to `/products/443158688` (with capture-specific query parameters), class `_container_tnuga_1`. Its transparent anchor is **193.3×326.3px**, radius **0px**, padding **0px**, with no border or rest shadow. It sits on the white page. The rounded photo is a descendant; the anchor's 0px radius does not describe the photo corners.

The live portrait-ratio token is `--bun-ui-aspect-ratio-vertical: 81 / 100`; the photo box in this card measures approximately 193×239px. The first paragraph is a near-black **18px/700 price**, followed by the item title and a metadata row. The title's ink is `#191919`; the timestamp and favorite-count ink is `#7f7f7f`. The card's explicit spacer descendants measure **12px** from image to price, **6px** from price to title and **12px** from title to metadata. Title and metadata font metrics were not captured.

Hover and held press change only the descendant image's transform from `none` to **`matrix(1.2, 0, 0, 1.2, 0, 0)`**. The link itself does not scale. Keyboard focus gives the link a native `auto` ring; the following Tab stop is its child heart button, whose separate native ring appears in the after-blur snapshot. Neither is a brand state.

The heart hit area is **52×52px** with **14px padding** in the survey, surrounding a **24×24px inline SVG**. Its white contour is a filled path with additional black paths at **0.1 fill opacity**. A red selected-heart state was not exercised. The thumbnail is served from `media.bunjang.co.kr`; the measured image source ends `_w360.jpg?crop=0`.

### Other measured controls and header anatomy

The top app nudge is a transparent **357.1×20px** button, radius 0px, padding 0px. Its enclosing text style is 16px/400 `#191919`, but the visible label and arrow are `#fafafa`, with a 15px/700 label. It sits on the banner's black gradient. The adjacent **20×20px** close button is labelled `닫기`, and the logo image inside the nudge is **20×20px**. No authored hover or press change was detected; focus uses a native ring.

The `여성의류` navigation link is **62.2×21.6px**, radius 0px, padding 0px, transparent background and `#191919` text, with an 18px/700 child label. Hover and press have no computed change in scope; focus is native. These two controls stay in prose because their only detected state indication is browser-owned.

The header also has a clickable wordmark linking to `/`, the search field, the login link/button and category navigation. The captured wordmark link measures **100×21.3px**. The app icon shows a lightning-bolt mark in the viewport. Its image URL `https://static.bunjang.co.kr/web/ui/logo-icon.svg` is observed in the app nudge's DOM; the asset itself was not separately downloaded or redistributed.

### States

Every hover below had `:hover` true, every held press had `:active` true, and keyboard focus was reached by a real Tab walk. “No change” is limited to the compared control, its descendants, pseudo-elements and three ancestor levels; it does not assert pixel identity or behavior outside that scope.

| Control | Hover | Held press | Keyboard focus |
|---|---|---|---|
| App nudge | No computed change in scope | No computed change in scope | Browser `auto` ring only |
| Login/registration | 10% black inset box-shadow | Same inset shadow; no additional change from hover | Browser `auto` ring only |
| Women clothing nav link | No computed change in scope | No computed change in scope | Browser `auto` ring only |
| Search input | No computed change in scope | Parent form border becomes 1px solid `#191919` | Same parent form border; clears after blur |
| Product link `/products/443158688` | Descendant image scales to 1.2 | Same image scale; no additional change from hover | Browser `auto` ring; subsequent child-heart ring excluded |
| Feed continuation | 10% black inset box-shadow | Same inset shadow; no additional change from hover | Browser `auto` ring only |

No disabled state was sampled. The two unchanged/native-only controls are excluded from `tokens.components`; the four components with measured authored changes are included. No consent button is included.

## Do's and Don'ts

### Do

- Use the white canvas, dark price, muted metadata and portrait image as the core listing hierarchy.
- Keep label typography distinct from an enclosing button's inherited font.
- Reproduce the login and continuation buttons' inset hover/press layer.
- Put the search focus border on the containing form.
- Preserve the card's local image zoom while keeping the link box in place.
- Retain the 10% black paths that help define the heart on varied photographs.

### Don't

- Turn a named palette primitive into an unverified service-badge recipe.
- Treat a native `auto` outline as a Bunjang color or authored focus token.
- Apply the card anchor's 0px radius to the separately rounded image.
- Infer a no-gradient, no-shadow or one-red-action rule from this capture.
- Render a declared fallback face as the measured product face.

## Voice & Tone

The captured web labels are short and task-specific: login/registration, categories, favorites, recently viewed items and feed continuation. Listing ages use relative time, including the measured card's 11-day age. The app nudge ends with an exclamation mark, so an absolute rule against exclamation marks would not describe this surface.

The company's home-redesign explanation speaks conversationally about the different steps involved in buying and selling. Its campaign writing talks about changing interests and making room for the next thing one likes. Those observed patterns support concise task labels alongside more personal editorial copy; they do not establish a ban on excitement or urgency. [Product explanation](https://bgzt.co.kr/article/625), [campaign history](https://bgzt.co.kr/article/424).

## Agent Prompt Guide

The following are design translations of the measured surface, not additional company rules. This reference is useful for a marketplace or classified feed where users compare many listings by photograph, price, title and relative age.

- Build a white secondary login action, 42.8px high, 6px radius, 12px 20px padding, `#4c4c4c` 14px/700 Pretendard Variable label and a 1px `#e5e5e5` border. Add the measured 10% black inset shadow on hover and held press.
- Build a 400×51.2px continuation action with a `#f6f6f6` ground and `#4c4c4c` 16px/700 label, with the same inset state layer.
- Build a transparent 15px/500 search input inside a light form; make the form border `#191919` while the input is focused.
- Build a transparent product link with the 81:100 photo primitive and an 18px/700 price. Hover or hold the link to scale the image to 1.2 while leaving its layout box unchanged.

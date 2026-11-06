---
name: PARKnSHOP
colors:
  foreground: '#3d3d3d'
  canvas: '#ffffff'
  category-ground: '#f2f2f3'
  navigation-foreground: '#3e3e3e'
  navigation-hover-fill: '#f5f5f5'
  search-surface: '#133395'
  search-foreground: '#fefeff'
  delivery-fill: '#4871d6'
  announcement-foreground: '#ffc400'
  secondary-fill: '#eeeeee'
  secondary-foreground: '#575757'
  primary: '#3fa7f3'
typography:
  navigation:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 20px
    use: Measured food-category navigation label; live-loaded Roboto
  control:
    fontSize: 14px
    fontWeight: 400
    use: Measured search input and delivery-mode label; live-loaded Roboto
  browse-action:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 17.5px
    use: Measured 查看所有 link; live-loaded Roboto
rounded:
  none: 0px
  search-wrapper: 20px
  action: 25px
components:
  food-nav:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#3e3e3e'
    rounded: 0px
    height: 50px
    width: 142.6px
    padding: 0px
    typography: 16px / 700
    hover: 'Inner wrapper and shaped pseudo-elements fill #f5f5f5; chevron transform matrix(1, 0, 0, -1, 0, 0)'
    pressed: 'Inner wrapper and shaped pseudo-elements fill #f5f5f5; chevron transform matrix(1, 0, 0, -1, 0, 0)'
    use: 食品及飲品 — navigation link to /zh-hk/foodBeverages. Anchor fill and visible label remain unchanged; the measured state styling belongs to its wrapper, ::before/::after and i.icon-arrow-down. Keyboard focus was not reached.
  view-all:
    type: button
    backgroundColor: '#eeeeee'
    textColor: '#575757'
    border: '1px solid #f5f5f5'
    rounded: 25px
    height: 35px
    width: 110px
    padding: 0px
    typography: 14px / 500
    hover: 'border 1px solid #3fa7f3'
    pressed: 'border 1px solid #3fa7f3'
    use: 查看所有 — first product-preview section's browse link. Its grey fill and ink remain unchanged. Hover and press were measured with the obstructing sticky header and fixed utility layers hidden; keyboard focus was not reached.
  product-details:
    type: button
    backgroundColor: '#f5f5f5'
    textColor: '#3e3e3e'
    border: '1px solid #f5f5f5'
    rounded: 25px
    height: 30px
    width: 100px
    padding: 0px
    typography: 14px / 500
    hover: 'bg #3fa7f3; fg #ffffff; border 1px solid #3fa7f3'
    pressed: 'bg #3fa7f3; fg #ffffff; border 1px solid #3fa7f3'
    use: 詳情 — link for the first product preview, 李錦記特鮮生抽500ml (BP_112580). Its parent action tray has opacity 0 at rest and 1 on hover and press. Rest colours are computed styles of this initially hidden action. Keyboard focus was not reached.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Roboto
---

# Design System Inspiration of PARKnSHOP

## Overview

### Visual Theme & Atmosphere

PARKnSHOP is a Hong Kong supermarket business founded in 1972 and part of AS Watson Group. Its [company page](https://www.pns.hk/en/aboutParknshop) connects physical retail with PNS.hk and the PNS mobile app, and presents its promise as best, easy and value. The measured homepage is the Hong Kong Traditional Chinese edition at `www.pns.hk/zh-hk/`, reached by redirect from `www.parknshop.com/zh-hk/`.

The live page pairs a blue header and yellow announcement text with white shopping panels on a light grey ground. Large, colourful campaign images occupy the hero; a row of compact illustrated category links leads into product previews. The controls combine square navigation anchors with strongly rounded delivery and browse actions. These are observations of the PNS shopping surface, rather than colours taken from AS Watson's corporate website.

The brand's recent evolution adds a friendly character layer to this retail structure. AS Watson's [April 2024 announcement](https://watson.aswatson.com/asw-pulse/best-east-value/) introduced BEST GUY and EASY alongside a refreshed tagline. Its [mascot article](https://watson.aswatson.com/asw-pulse/meet-our-brand-mascot/) describes the egg-shaped pair as representing health, simplicity and daily essentials. In [August 2026](https://watson.aswatson.com/asw-pulse/go-smart-go-select/), the SELECT own-brand refresh brought a smile logo and nutritional-information labels. That is packaging and campaign context; it does not establish additional website tokens.

### Brand Narrative

The [2022 anniversary account](https://watson.aswatson.com/in-focus/celebrating-parknshop-as-a-trusted-brand-for-50-years/) places PARKnSHOP's story alongside generations of Hong Kong customers and the growth of its stores and eStore. The [current company page](https://www.pns.hk/en/aboutParknshop) carries that store-to-online continuity into the PNS web and app offer. The recent mascot and SELECT announcements give that practical shopping proposition a friendly, recognisable character layer.

### Principles

The [company page](https://www.pns.hk/en/aboutParknshop) emphasises value, product choice, freshness and food safety, and store formats suited to different needs. For this design reference, their visible counterparts are prominent promotional browsing, category shortcuts, product previews and labelled search/delivery controls. The connection is a design reading of the measured page, not an official list of interface principles.

### Personas

No persona research was conducted; no personas are inferred from the capture.

## Colors

These role names describe measured CSS values; the page exposes no computed root custom properties. They are not a published PARKnSHOP token naming scheme.

| Role | Value | Evidence on the shopping page |
|---|---|---|
| Foreground | `#3d3d3d` | All 18 counted paragraph-ink instances; also the SELECT category caption |
| Canvas | `#ffffff` | Food-navigation anchor and product-preview panel |
| Category ground | `#f2f2f3` | Background behind the SELECT category anchor |
| Navigation ink | `#3e3e3e` | Food-navigation label |
| Navigation hover fill | `#f5f5f5` | Inner wrapper and both shaped pseudo-elements; also the secondary link's resting border |
| Search surface | `#133395` | Search input's containing label at rest |
| Search ink | `#fefeff` | Search input at page-top rest |
| Delivery fill | `#4871d6` | Delivery-mode button at rest |
| Announcement ink | `#ffc400` | Header promotional link |
| Secondary fill | `#eeeeee` | “查看所有” at rest |
| Secondary ink | `#575757` | “查看所有” at rest |
| Action blue | `#3fa7f3` | Product-details hover/press fill and border; browse-link hover/press border; catalog primary-colour sample |

The search wrapper has a `1px solid rgba(255, 255, 255, 0.41)` border. The delivery icon's small background is `rgba(255, 255, 255, 0.3)`. These alpha values remain prose observations.

## Typography

- **Official product-use documentation:** no opened company source specifies a product typeface.
- **Live-loaded:** the census reports `Roboto normal normal`, `Roboto 500 normal`, `Roboto 700 normal`, `Roboto normal italic` and `Roboto 700 italic`. Roboto is also the computed family of the measured controls. A separate `fontello 400 normal` face is loaded; it is absent from the body/h1/button family stacks and is not a prose-family token here.
- **CSS-served assets:** matching `@font-face` declarations name root-relative `/assets/font/Roboto-Black.woff2`, `Roboto-BlackItalic.woff2`, `Roboto-Bold.woff2`, `Roboto-BoldItalic.woff2`, `Roboto-Medium.woff2` and `Roboto-MediumItalic.woff2` paths. The census does not provide resolved font-request origins. The Black declarations omit a numeric weight; their filenames are not evidence of a measured 900-weight scale. Medium italic is declared but absent from the loaded list.
- **Official distributed assets:** no separately opened font package, product font guide or licence was verified. CSS URLs were observed, not downloaded.
- **Declared-only:** the body, h1 and button stacks also name STHeiti, Verdana, Arial, Microsoft JhengHei, 微軟正黑體, 黑體-繁 and 新細明體, followed by a generic sans-serif. None appears in the census's loaded faces. They receive no specimen or family token.
- **Unresolved:** the census does not identify the actual font used for each Han glyph. No language-specific face is inferred from the fallback stack. Substitute: none chosen.

Measured control typography is compact: the food navigation uses `16px/700` with a `20px` line height; delivery and the search input use `14px/400`; the secondary browse link uses `14px/500` with a `17.5px` line height. The SELECT caption is `14px/500`, even though its anchor computes to `14px/400`. A paragraph size or heading scale was not measured.

## Layout

At the measured `1440 × 1000` desktop viewport, the sticky header occupies `156px`: utility and search/delivery controls sit above a `50px` category-navigation row. The hero's central campaign link measures `870 × 480px`, with portions of adjacent slides visible. Beneath it, the SELECT category link measures `100 × 99px`, containing `60 × 60px` imagery and a `100 × 35px` caption. White product-preview panels sit below the category strip. These are element measurements, not an inferred global grid or spacing scale.

### Responsive Behavior

Only desktop `1440 × 1000` was measured; mobile layouts and breakpoint behaviour remain unverified.

## Elevation & Depth

The measured navigation, delivery button, search input, secondary links and SELECT category anchor have `box-shadow: none` at rest. The delivery button uses a translucent white icon ground; the search wrapper uses a translucent white border. No general shadow or elevation scale was verified.

## Motion & Easing

The search input's raw computed transition is `all 0.2s ease-in-out 0s`. Delivery, the food-navigation anchor, both secondary action links and SELECT category anchor compute to `all 0s ease 0s`. These declarations do not establish a shared motion scale; no custom easing curve was verified. The exact strings and state evidence are retained in `verification.md`.

---

Live measurement source: [PNS Hong Kong homepage](https://www.parknshop.com/zh-hk/) (redirected to `https://www.pns.hk/zh-hk/`, 2026-11-06). Narrative sources are linked beside the claims they support. Geometry, state boundaries, font classes and source limitations are documented in `report.md` and `verification.md`.

## Components

**Food navigation — “食品及飲品”.** This is a link to `/zh-hk/foodBeverages`, measured as a `142.6 × 50px` anchor with `0px` radius and padding, no border and no shadow. Its white background and `#3e3e3e` label stay unchanged. Hover and pointer press instead fill `.nav-item-wrapper`, `::before` and `::after` with `#f5f5f5`; the `i.icon-arrow-down` transform changes from `none` to `matrix(1, 0, 0, -1, 0, 0)`. Keep the shaped side pieces with the inner panel when reproducing this treatment. Keyboard focus was not reached.

**Browse action — “查看所有”.** The first product-preview section's link is `110 × 35px`, radius `25px`, padding `0px`, `14px/500` with a `17.5px` line height. It keeps its `#eeeeee` fill and `#575757` ink on hover and press; only its `1px` border changes from `#f5f5f5` to `#3fa7f3`. Keyboard focus was not reached. These pointer states were captured with the obstructing sticky header and fixed utility layers temporarily hidden.

**Product details — “詳情”.** The first product-preview link targets 李錦記特鮮生抽500ml (`BP_112580`). It measures `100 × 30px`, radius `25px`, padding `0px`, `14px/500`, line height `17.5px`. Its action tray has opacity `0` at rest: the resting `#f5f5f5` fill and border and `#3e3e3e` ink are computed values of an initially hidden link. On hover and press the tray becomes opaque (`1`), the link fill and border become `#3fa7f3`, and its text becomes `#ffffff`. Keyboard focus was not reached. No add-to-basket action was used.

**Delivery mode — “送貨上門”.** The header button is `179 × 40px`, radius `25px`, padding `0px 8px 0px 4px`, `14px/400`, with `#4871d6` fill and white text. Hover and press showed no computed change within the recorded comparison scope. Keyboard focus supplied only an `auto` browser outline. This useful resting geometry remains prose; it does not create an interactive component token.

**Search.** The actual input is `268 × 40px`, radius `0px`, padding `0px`, transparent over its wrapper. The wrapper measures `402 × 40px`, radius `20px`, padding `0px 110px 0px 22px` in the survey. Do not mistake that wrapper's geometry for the input's. After keyboard focus the input widened to `348px`, its ink became `#1e388c` and its wrapper became white; all those differences persisted after blur. They are not isolated focus tokens.

### States

Food navigation has measured hover and pointer-pressed changes on its inner fill, shaped sides and chevron. The browse link changes only its border; product details reveal their action tray and switch to blue with white ink. Delivery hover and press have no computed change in the probe's scope, and its focus outline is browser-owned. Search hover and press likewise have no computed change against their same-scroll baseline; its recorded keyboard-focus differences persist after blur.

The SELECT category anchor's computed colour changes from `#3fa7f3` to `#158fe9` on hover and press, inherited by the media wrapper and raster image element. Its paragraph caption's computed colour remains `#3d3d3d`; no image-source change was recorded. The hover crop is obscured by search suggestions, so it supplies no visual proof of a changed card treatment. This observation remains prose. The transparent anchor sits on `#f2f2f3`. Its keyboard focus was not reached.

“No change” here covers the element, its pseudo-elements, recorded descendants and three ancestor levels, with the probe's computed-style and attribute property set. It does not prove absence of pixel-only, sibling, closed-shadow or cross-origin-frame changes. Unreached keyboard focus and obstructed pointer states are unmeasured. Disabled states were not measured.

## Do's and Don'ts

- Preserve the distinction between `#3d3d3d` paragraph ink and `#3e3e3e` navigation ink.
- Reproduce the food tab's inner panel, shaped sides and flipped chevron together.
- Use the measured `25px` radius for the delivery and secondary actions, and the `20px` radius for the search wrapper.
- Keep campaign artwork separate from the interface palette.
- Do not turn a browser `auto` outline or persistent search expansion into an authored focus rule.
- Do not promote the CSS fallback stack into additional verified product fonts.

## Voice & Tone

The captured Hong Kong surface uses colloquial Cantonese in promotional copy, including “☝🏼㩒入嚟睇下我哋嘅可持續發展概覽啦！”, alongside direct task labels such as “送貨上門” and “查看所有”. This describes the captured page's copy, not a verified company-wide writing guide.

## Agent Prompt Guide

“Build a PNS-style grocery navigation row with a white, square `50px`-high food-category link, `16px/700` Roboto and `#3e3e3e` text. On hover, fill its inner wrapper and shaped side pieces with `#f5f5f5` and flip the downward chevron vertically. Place this beneath the blue search-and-delivery area.”

This prompt uses the measured Roboto face. Substitute: none chosen.

---
name: ZOZOTOWN
colors:
  primary: '#2d2d2d'
  foreground: '#2d2d2d'
  canvas: '#ffffff'
  important: '#ed293e'
  link: '#23abdd'
  muted: '#a0a0a0'
  inverse: '#ffffff'
  checkbox-on: '#23abdd'
  checkbox-off: '#dedede'
  favorite-on: '#ff7683'
  favorite-off: '#d1d1d1'
  button-action-text: '#ffffff'
  button-action-border: '#ffffff'
  header-surface: '#efefef'
  feature-surround: '#f8f8f8'
typography:
  navigation:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1
    use: コスメアイテム navigation link; line-height 15px
  search:
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.5
    use: Header catalog search input; line-height 18px
  control:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    use: Feature and product image link wrappers; line-height 20.8px
  feature-title:
    fontSize: 22px
    fontWeight: 700
    use: Visible white title paragraph inside the measured feature card
  coupon:
    fontSize: 10px
    fontWeight: 400
    use: Visible ¥500クーポン label inside the measured product image link
  footer:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: Surveyed footer links; line-height 18px
rounded:
  link: 0px
  audience-tab: 8px
  feature-card: 10px
components:
  login-link:
    type: button
    textColor: '#2d2d2d'
    rounded: 0px
    height: 19.4px
    padding: 0px
    typography: 12px / 700
    hover: Second ancestor background rgba(45, 45, 45, 0.05)
    pressed: Second ancestor background rgba(45, 45, 45, 0.05)
    use: 'Header ログイン link. Transparent anchor on #efefef; the state fill belongs to its second ancestor. Browser auto focus ring is excluded.'
  hero-next:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.2)
    textColor: '#ffffff'
    height: 40px
    padding: 0px
    typography: 13px / 400
    border: 1px solid rgba(255, 255, 255, 0.7)
    hover: opacity 0.6
    pressed: opacity 0.6
    use: Hero carousel 次へ button, 40px wide with 100% radius, over promotional imagery. No computed focus change in the measured scope.
  cosme-nav:
    type: button
    textColor: '#a0a0a0'
    rounded: 0px
    height: 58px
    padding: 0px
    typography: 15px / 700
    hover: opacity 0.6
    pressed: opacity 0.6
    use: 'コスメアイテム link to /cosme/, 490px wide; transparent on #efefef. Browser auto focus ring is excluded.'
  product-card:
    type: card
    textColor: '#23abdd'
    rounded: 0px
    height: 204px
    padding: 0px
    typography: 13px / 400
    hover: Descendant image opacity 0.8; anchor underline solid rgb(35, 171, 221)
    pressed: Descendant image opacity 0.8; anchor underline solid rgb(35, 171, 221)
    use: 'Product image link, 170px wide, transparent on #ffffff; inherited link ink is blue, while the visible coupon label is white at 10px/400. The wrapper radius is measured; the image corner radius is unresolved. Focus contains a browser ring and persistent loading changes, so no focus token is declared.'
  feature-card:
    type: card
    textColor: '#ffffff'
    rounded: 10px
    height: 160px
    padding: 0px
    typography: 22px / 700
    shadow: rgba(0, 0, 0, 0.03) -7px 7px 24px 0px
    hover: opacity 0.8
    pressed: opacity 0.8
    use: 'AW styling promotional link, 745px wide, transparent over an image with a black 20% ::after overlay, on #f8f8f8. White visible title; wrapper inherits #23abdd and 13px/400. Browser auto focus ring is excluded.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of ZOZOTOWN

## Overview

### Visual Theme & Atmosphere

ZOZOTOWN is a Japanese fashion marketplace operated by ZOZO, Inc., formerly Start Today. It launched on 15 December 2004; ZOZO's current service description reports more than 11,000 brands as of June 2026. Alongside clothing, its specialist zones include cosmetics, shoes and luxury/designer fashion. This breadth gives the storefront several kinds of imagery to organize within one shopping surface. [Service description](https://corp.zozo.com/service/)

The measured desktop homepage uses light surfaces, compact Japanese labels and large photographic promotions. Its base ink is charcoal `#2d2d2d`, with cyan links `#23abdd`, important text `#ed293e` and a separate pink favorite token `#ff7683`. A light gray header sits above broad shopping-category links; rounded feature imagery leads into product rails and a left navigation column. The editorial reading is photographic and information-dense, with both quiet navigation and conspicuous campaign graphics. These are observations of the Japanese homepage (`zozo.jp/`, HTML `lang="ja"`) at 1440×1000.

ZOZO's corporate expression supplies a related, documented context: the 2018 name-change announcement explains the equal-area circle, triangle and square and the slogan “be unique, be equal.” That explanation concerns the corporate logo; it does not establish a rule for storefront grid cells. Today the company's design practice spans app/web UI, campaigns and delivery boxes, as its designer recruitment page shows. The service continues to broaden: the official history records the K-FASHION zone opening in November 2025. [Name change](https://corp.zozo.com/news/20181001-5984/), [design practice](https://corp.zozo.com/recruit/designer/), [history](https://corp.zozo.com/about/history/)

#### Primary tasks

- Search the catalog through “すべてのアイテムから探す”.
- Browse by brand, official shop, ranking, sale or coupon using the measured sidebar links.
- Open a product image or an editorial promotion.
- Access favorites and account navigation; the homepage exposes both controls.

### Brand Narrative

The official history starts in May 1998 with a company established for imported CD and record mail order, followed by an online music store and an apparel select shop. It identifies Yusaku Maezawa as the founder and dates ZOZOTOWN's launch to December 2004. The company became ZOZO in October 2018; the Yahoo capital/business partnership was announced in September 2019 and consolidated-subsidiary status followed in November 2019. [History](https://corp.zozo.com/about/history/)

The corporate name-change announcement links imagination and creation to “ZOZO”, and explains the equal-area shapes as an expression of different individuals sharing common feelings. That is useful corporate identity context, without attributing the storefront's layout choices to that explanation. [2018 announcement](https://corp.zozo.com/news/20181001-5984/)

The present service portfolio includes WEAR by ZOZO and foot-measurement support through ZOZOMAT. The corporate overview also describes the development and use of ZOZOSUIT, ZOZOMAT and ZOZOGLASS measurement technologies. The company continues to turn its fashion data into communication: its September 2026 announcement reports a Red Dot Brands & Communication Design award for the anniversary fashion-commerce white paper. That award concerns the white paper, not a redesign of the shopping interface. [Services](https://corp.zozo.com/service/), [corporate overview](https://corp.zozo.com/about/), [2026 design announcement](https://corp.zozo.com/news/20260904-007650/)

### Principles

The following are reconstruction principles inferred from the measured homepage, not a published ZOZOTOWN design-system manifesto:

1. **Separate image and navigation scales.** Broad promotional imagery and narrow browsing labels coexist in the same centered content region.
2. **Assign color by role.** Base text, links, important text, favorites and checkboxes have distinct named properties.
3. **Distinguish promotional and product links.** The feature link has a 10px radius and a shadow; the measured product-image link wrapper has neither rounding nor shadow.
4. **Preserve layer-specific feedback.** The feature fades as a whole; the product's descendant image fades; the login backing changes on an ancestor.

### Personas

No first-party persona research was opened; the prior fictional personas are excluded from this reference.

## Colors

These are production custom properties and computed control colors. The census recorded 28 root properties and 26 stylesheet declarations. Eighteen root properties belong to the storefront's color, width, stacking and shadow groups; the ten `--swiper-*` properties are kept separate as carousel integration settings.

| Role | Value | Evidence |
|---|---|---|
| Primary UI ink / foreground | `#2d2d2d` | `--color-text-base`; login and search computed foreground |
| White surface | `#ffffff` | 85 census background occurrences; product surroundings and search wrapper |
| Important text | `#ed293e` | `--color-text-important`; 45 census text occurrences |
| Link | `#23abdd` | `--color-text-link`; image-link inherited color |
| Gray text | `#a0a0a0` | `--color-text-gray`; inactive cosmetics navigation |
| Inverse text | `#ffffff` | `--color-inverse-text-base`; feature title paragraph |
| Checkbox on / off | `#23abdd` / `#dedede` | `--color-checkbox-on` / `--color-checkbox-off`; declarations only, no toggle tested |
| Favorite on / off | `#ff7683` / `#d1d1d1` | `--color-favorite-on` / `--color-favorite-off`; declarations only, no favorite action performed |
| Action-button text / border | `#ffffff` / `#ffffff` | `--color-button-action-text` / `--color-button-action-border`; no action-button fill inferred |
| Header and broad navigation backing | `#efefef` | Computed backing behind login and cosmetics navigation |
| Feature-card surroundings | `#f8f8f8` | Computed backing behind the AW styling feature |

The measured product image contains two different promotional strips: `rgba(255, 144, 0, 0.9)` behind the coupon and `rgba(237, 41, 62, 0.9)` behind the time-sale percentage. The feature has a black `rgba(0, 0, 0, 0.2)` image overlay. Alpha values remain explicit rather than being flattened into opaque palette entries.

The paragraph census contains white text ×34, charcoal ×9 and gray ×7. White promotional paragraphs are the largest group; the `foreground` role above follows the named base-text property and the measured dark text, rather than treating the most frequent paragraph color as universal body ink.

## Typography

### Evidence classes

- **Official product use:** no opened company page identifies a product text face.
- **Live-loaded:** the survey reports only `icomoon_close02 normal normal`, served from `templates-cf.karte.io/fonts/close02.woff`. It belongs to the KARTE close icon and is excluded from product typography.
- **Official distributed assets:** no font-distribution or font-license document was opened. The storefront CSS references `zozo-gothic-bold` WOFF and TTF assets at `o.imgz.jp/universal/fonts/zozo-gothic/`; these are observed asset references, not evidence that the face loaded or is licensed for reuse.
- **Declared-only:** body, h1 and button all declare `"Hiragino Kaku Gothic ProN", "Hiragino Sans", メイリオ, "Lucida Grande", Verdana, sans-serif`. The controls report Hiragino Kaku Gothic ProN as their first declared family. `zozo-gothic-bold` also has an observed bold, normal-style `@font-face` declaration, but is absent from loaded faces.
- **Unresolved:** the rendered product text face and any official reuse license. There is no family token or font specimen. **Substitute: none chosen.**

### Measured hierarchy

| Surface / element | Size / weight | Line height / tracking |
|---|---|---|
| Feature-card visible title paragraph | 22px / 700 | Not captured for the child label |
| Cosmetics navigation link | 15px / 700 | 15px / normal |
| Feature and product image link wrappers | 13px / 400 | 20.8px / normal |
| Hero arrow button | 13px / 400 | 19.5px / normal |
| Header search input | 12px / 700 | 18px / normal |
| Header login link | 12px / 700 | 19.3848px / normal |
| Surveyed footer links | 12px / 400 | 18px |
| Product coupon label | 10px / 400 | Not captured for the child label |

The sizes remain useful even though the family is unresolved. The measured coupon label prints “¥500クーポン”; the survey also contains “¥1,000クーポン”. Tabular numeral settings and the former price hierarchy were not captured.

## Layout

The live `--width-container-pc` is 980px. At the measured 1440px viewport, the principal header content begins at x=230px, consistent with a centered 980px container. The two broad shopping-category links are each 490×58px.

Below the promotional hero, the surveyed left category links are 180px wide. The AW feature starts at x=465px and is 745px wide. The distance from the left column's right edge at x=410px to that feature is 55px; this is a measured arrangement, not a general spacing token.

The audience links have an 8px radius and `0px 15px` padding; category links such as bags and shoes have `7px 10px` padding. The measured product-image link is 170×204px, a 5:6 link box; its loaded descendant image also measures 170×204px. Two surveyed product-image links begin at x=465px and x=635px, each 170px wide, so their link boxes are adjacent in that rail. These measurements do not establish the aspect ratio or corner radius of every image, or the dimensions of the full product card with metadata.

Preserve the distinction between the narrow navigation column, broad promotional image and small repeated product-image boxes. No universal base spacing unit was established.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; mobile breakpoints, bottom navigation and touch-target rules remain unverified.

## Elevation & Depth

The declared storefront shadow property is `--box-shadow-base: 0 5px 5px 0 rgba(0, 0, 0, 3%)`. The measured AW feature uses a different computed shadow, `rgba(0, 0, 0, 0.03) -7px 7px 24px 0px`. The product-image link, login, search input, cosmetics navigation and carousel button compute to no shadow.

Stacking properties declare base 1, component 10, header 55, modal 100 and loading overlay 110. The survey identifies a sticky 50px header at z-index 55. These are declared layer positions; no modal appearance or modal animation was measured.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.base`: `0 5px 5px 0 rgba(0, 0, 0, 3%)`
- `shadow.feature-card`: `rgba(0, 0, 0, 0.03) -7px 7px 24px 0px`

## Motion & Easing

The hero-next button and the AW feature link both compute to `opacity 0.3s ease-out 0s`. Their settled opacity endpoints are 0.6 and 0.8 respectively. Login, cosmetics navigation, search and the product link wrapper compute to `all 0s ease 0s`; the product's descendant image nevertheless has a measured opacity response. No descendant transition string is inferred from the wrapper.

No named duration scale, custom cubic-bezier curve, reduced-motion behavior, heart-pop animation, sheet transition or toast sequence was verified.

## Components

All six controls were measured in the same desktop homepage edition. A transparent anchor's backing is listed separately from its own computed background. Link controls are described as links, even when represented as `button` or `card` in the token registry.

| Key and identity | Rest styling | Measured response |
|---|---|---|
| `login-link` — header “ログイン”, 47.3×19.4px | Radius 0px; padding 0px; 12px/700; transparent, `#2d2d2d`, no border/shadow, backing `#efefef` | Hover and press add `rgba(45, 45, 45, 0.05)` to the second ancestor. The anchor itself keeps its fill and text color. |
| `hero-next` — “次へ”, 40×40px | Radius 100%; padding 0px; 13px/400; black 20% fill; `#ffffff`; 1px white 70% border; no shadow | Hover and press set opacity 0.6. Keyboard focus has no computed change within the probe scope. |
| `cosme-nav` — “コスメアイテム”, 490×58px | Radius 0px; padding 0px; 15px/700; transparent, `#a0a0a0`, no border/shadow, backing `#efefef` | Hover and press set opacity 0.6. |
| `search-field` — “すべてのアイテムから探す”, 382×18px | The input itself has radius 0px, padding 0px, 12px/700, transparent fill, `#2d2d2d`, no border/shadow; backing `#ffffff` | Hover, press and Tab focus have no computed change within the probe scope. Kept in prose, omitted from `components`. |
| `product-card` — current forksy. product image link, 170×204px | Link radius 0px; padding 0px; 13px/400; transparent, inherited `#23abdd`, white backing, no border/shadow. Coupon label: `#ffffff`, 10px/400. | Hover and press underline the anchor in `rgb(35, 171, 221)` and set the descendant image opacity to 0.8. |
| `feature-card` — AW styling promotion, 745×160px | Radius 10px; padding 0px; wrapper 13px/400 and inherited `#23abdd`; visible title `#ffffff`, 22px/700. Transparent over imagery; backing `#f8f8f8`. | Hover and press set the entire anchor opacity to 0.8. |

The feature card's resting shadow is `rgba(0, 0, 0, 0.03) -7px 7px 24px 0px`, with a black 20% `::after` overlay. Its visible title is a child paragraph, so the inherited blue anchor color must not be used as the title color.

Login, cosmetics navigation, product link and feature link receive the browser's `outline-style: auto` ring. No brand focus token is inferred. The product focus snapshot also includes an image-loading change that persists after blur; it is not a focus treatment. The search focus crop shows darker backing outside the white input wrapper, although the sampled input and three ancestor levels report no change; the layer responsible was not identified. Checkout CTAs, disabled controls, forms and dialogs were not measured.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Login link | Second ancestor gains charcoal 5% fill | Same observed fill; no further change versus hover | Browser auto outline only |
| Hero next | Opacity 0.6 | Same observed opacity; no further change versus hover | No computed change in measured scope |
| Cosmetics navigation | Opacity 0.6 | Same observed opacity; no further change versus hover | Browser auto outline only |
| Search input | No computed change in measured scope | No computed change in measured scope | No computed change in measured scope |
| Product image link | Image opacity 0.8; blue anchor underline | Same observed changes; no further change versus hover | Browser auto outline; persistent lazy-image/DOM changes excluded |
| AW feature link | Whole-link opacity 0.8 | Same observed opacity; no further change versus hover | Browser auto outline only |

The probe confirmed `:hover` and `:active` for the pointer observations and reached the controls through real Tab focus. Its comparison covers self, pseudo-elements, descendants and three ancestor levels; detailed scope is in the verification notes. No unchanged reading is extended to canvas, external sprite interiors, closed shadow roots or cross-origin frames. Empty, validation-error, out-of-stock and success-toast states were not measured.

## Do's and Don'ts

### Do

- Use charcoal foreground, light surroundings and the measured cyan, red and pink roles.
- Keep the 10px rounded promotional card distinct from the square link wrappers and 8px audience tabs.
- Use the measured element geometry and visible child-label color when reconstructing a control.
- Reproduce the opacity response on the actual layer: whole feature link, descendant product image, or login ancestor.

### Don't

- Treat the declaration of a font family as proof that it rendered.
- Generalize the measured image-link box into a complete product-card specification.
- Reuse the corporate-site measurements or the third-party promotional widget as storefront tokens.

## Voice & Tone

The observed browsing copy uses short Japanese labels: “ログイン”, “すべて見る”, and “すべてのアイテムから探す”. Promotional product strips state a coupon amount and a sale percentage explicitly. For this measured surface, task labels and numerical offers are stronger evidence than a general brand-personality description. Transactional success and error wording was not observed.

## Agent Prompt Guide

### Quick Color Reference

Use `#2d2d2d` for the observed base ink, `#a0a0a0` for the inactive cosmetics navigation, `#23abdd` for the declared link role and `#ed293e` for important text. The header backing is `#efefef`; the feature surroundings are `#f8f8f8`; its title is `#ffffff`. Favorite and checkbox declarations have the separate values listed in §2.

### Example Component Prompts

“Build the measured desktop AW feature link: 745×160px, 10px radius, photographic fill and a black 20% overlay. Give its visible title white 22px/700 text and use the measured subtle shadow. Set the whole link's opacity to 0.8 on hover and while pressed. Leave the font family unresolved.”

“Build the cosmetics navigation link: 490×58px, square corners, no padding or border, transparent on the light gray backing, gray 15px/700 label at 15px line height. On hover and press, reduce opacity to 0.6.”

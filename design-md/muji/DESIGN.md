---
name: MUJI
colors:
  brand: '#7f0019'
  foreground: '#3c3c43'
  gray-700: '#6d6d72'
  gray-600: '#76767b'
  gray-500: '#9d9da0'
  gray-400: '#c4c4c6'
  gray-300: '#d8d8d9'
  gray-200: '#ebebec'
  gray-100: '#f5f5f5'
  canvas: '#ffffff'
  red: '#dd0c14'
  black: '#000000'
  beige: '#e0ceaa'
  kinari: '#f4eede'
  search-hover: '#1d1d1f'
typography:
  navigation:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.6
    use: Header category button; live metrics, Noto Sans JP live-loaded; Helvetica Neue declared-only
  action:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.6
    use: Store-search button and visible More-products label
  product-description:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    use: First product description link in the survey
  price:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.2
    use: Product price link in the survey
  footer:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    use: Footer store-information link
rounded:
  none: 0px
  action: 4px
  full: 9999px
spacing:
  xxxxs: 4
  xxxs: 8
  xxs: 12
  xs: 16
  s: 20
  m: 24
  l: 32
  xl: 40
  xxl: 48
  xxxl: 64
  xxxxl: 96
  mobile-grid: 19
components:
  store-search:
    type: button
    backgroundColor: '#3c3c43'
    textColor: '#ffffff'
    rounded: 4px
    height: 58px
    padding: 16px 20px
    typography: 16px / 700
    hover: 'bg #1d1d1f'
    pressed: 'bg #1d1d1f'
    use: 検索 — the 96px-wide store-locator search button; no border or shadow. Tab focus produced no computed visual change; no focus token.
  more-products:
    type: button
    textColor: '#3c3c43'
    rounded: 0px
    height: 57.6px
    padding: 0px
    typography: 16px / 700 visible label; outer anchor 16px / 400
    hover: 'inner span bg #e0ceaa'
    pressed: 'inner span bg #e0ceaa'
    use: 'もっと見る — a 240px-wide link on the white page. The anchor is transparent; its 240×58px inner span supplies rest bg #f4eede and the visible bold label. Radius and padding describe the anchor; child radius and padding were not separately recorded.'
  product-image:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    height: 196.2px
    padding: 196.164px 0px 0px
    typography: 16px / 400 outer anchor; 11px / 700 visible NEW label
    hover: 'div._6sg60q_overlay opacity 0 → 0.1, fill #3c3c43'
    pressed: 'div._6sg60q_overlay opacity 0 → 0.1, fill #3c3c43'
    use: 'A transparent 196.2px-square product-image link on the white page for 婦人 なめらかブラキャミソール, SKU 4550723243582. The visible NEW child label is #ffffff on #7f0019; the outer anchor computes to #3c3c43. No border or shadow.'
fonts:
  roles:
    sans: Noto Sans JP
---

# Design System Inspiration of MUJI (無印良品)

## Overview

### Visual Theme & Atmosphere

MUJI, *Mujirushi Ryohin* (無印良品), means “no-brand quality goods.” It began in Japan in 1980 as a private brand of Seiyu. Its founding product logic remains explicit: select materials, inspect production processes and simplify packaging. Omitting pulp bleaching, for example, gives the paper used for labels and packaging its beige colour. These are decisions about making useful things, rather than a style applied after manufacture. [About MUJI](https://www.ryohin-keikaku.jp/en/about-muji), [history](https://www.muji.com/sg/company/).

The distinctive expression is an open vessel. MUJI's Japanese introduction distinguishes its simplicity from minimalism as a style; Kenya Hara's own talk describes emptiness as room for people to decide how to use an object. His horizon advertising leaves interpretation open instead of specifying one product benefit. For a builder, the useful principle is to give the goods and their use enough room to be understood. This is an interpretation of that published philosophy, not a rule that every interface must be monochrome. [Japanese introduction](https://www.muji.com/jp/about/), [Hara's talk](https://www.muji.com/ph/flagship/huaihai755/archive/hara.html).

That expression continues to develop. MUJI's account of its 2025 advertising exhibition describes 2003–2025 work through photographs, film and space, alongside twelve visuals for the August 2025 campaign “水や空気のように。” The stated intention is to pose questions about ordinary happiness and the basics of life. Its Advisory Board also explicitly supervises store design and advertising. These sources document continuing brand work; they do not publish website component specifications. [Exhibition account](https://www.muji.com/jp/ja/shop/046604/articles/events-and-areainfo/events/1636182), [Advisory Board](https://www.ryohin-keikaku.jp/en/about-muji/advisory-board).

The measured homepage is the Japanese edition (`www.muji.com/jp/ja/store`), reached from the global URL with HTML `lang="ja"`. At the captured desktop width, a white header, dark grey labels, a maroon promotion strip and large campaign photographs lead into product and editorial sections. Kinari and beige also appear in the live UI. The captured campaign strip names a membership discount and its deadline; the site's commercial messaging coexists with its restrained chrome. [Live store](https://www.muji.com/).

Primary tasks visible on this surface are browsing merchandise categories, following product and editorial links, and finding stores by name or address. The store locator's search button is the measured filled action; checkout was not inspected.

### Brand Narrative

MUJI's own history identifies a 1980 Seiyu private brand. Koike dates its newspaper introduction to December 1980 and recalls forty initial products, with the copy “Lower priced for a reason.” She places its origin in an economy moving toward the bubble era, correcting the previous reference's post-bubble account. The Singapore history records the first directly managed MUJI Aoyama store in 1983 and the first overseas store in the UK in 1991. [Company history](https://www.muji.com/sg/company/), [Koike's account](https://www.muji.com/ph/flagship/huaihai755/archive/koike.html).

Hara's account connects openness of use to the 2003 horizon campaign. A MUJI Ginza article states that he has worked on corporate visuals and advertising as Advisory Board member and art director since 2001. This supports his role and the emptiness discussion, without attributing website CSS to him. The 2025 exhibition's twelve “水や空気のように。” visuals show how the company revisits that communication through contemporary photography, film and space. [Hara's talk](https://www.muji.com/ph/flagship/huaihai755/archive/hara.html), [MUJI BOOKS](https://www.muji.com/jp/ja/shop/046604/articles/mujibooks/995401), [exhibition](https://www.muji.com/jp/ja/shop/046604/articles/events-and-areainfo/events/1636182).

### Principles

1. **Explain the reason.** The founding account connects price to materials, processes and packaging, rather than added branding costs.
2. **Leave use open.** Hara describes emptiness through products that people can use in more than one way; this is a brand philosophy, not a numerical whitespace token.
3. **Keep the practical basics visible.** The official introduction grounds MUJI in daily life; the measured store presents merchandise categories and store-finding controls directly.
4. **Follow the actual surface.** The captured interface uses bold labels, a 4px action radius and warm secondary fills. Those observations take precedence over stylistic absolutes in the old draft.

The first two principles interpret the [founding account](https://www.muji.com/ph/flagship/huaihai755/archive/koike.html) and [Hara's explanation](https://www.muji.com/ph/flagship/huaihai755/archive/hara.html); the third also draws on [About MUJI](https://www.muji.com/jp/about/). The fourth is an implementation instruction derived from the capture.

### Personas

No customer-persona research was verified; the prior fictional biographies are not retained as company evidence.

## Colors

The live root defines fourteen colour properties. The names and values below come from `survey.json`, not a brand-colour registry. `foreground` is the measured paragraph ink: one visible `<p>` in the census, `rgb(60, 60, 67)`.

| Role / raw property | Value | Evidence and scope |
|---|---|---|
| MUJI red — `--color-muji-red` | `#7f0019` | Root token; captured promotion-strip background |
| Foreground — `--color-gray-800` | `#3c3c43` | Paragraph ink, navigation and store-search fill |
| Gray 700 — `--color-gray-700` | `#6d6d72` | Declared and computed token |
| Gray 600 — `--color-gray-600` | `#76767b` | Token; present in rendered text census |
| Gray 500 — `--color-gray-500` | `#9d9da0` | Declared and computed token |
| Gray 400 — `--color-gray-400` | `#c4c4c6` | Token; present in border census |
| Gray 300 — `--color-gray-300` | `#d8d8d9` | Token; present in background census |
| Gray 200 — `--color-gray-200` | `#ebebec` | Store-input wrapper's 1px border |
| Gray 100 — `--color-gray-100` | `#f5f5f5` | Footer ground behind the measured store link |
| White — `--color-white` | `#ffffff` | Canvas and search-button label |
| Red — `--color-red` | `#dd0c14` | Token only; error semantics not established |
| Black — `--color-black` | `#000000` | Token only; no global prohibition on black |
| Beige — `--color-beige` | `#e0ceaa` | More-products inner span on hover and press |
| Kinari — `--color-kinari` | `#f4eede` | More-products inner span at rest |

The filled store-search button darkens to `#1d1d1f` on both hover and press. This is a measured component value, not a root custom property. The colour census also contains `rgb(242, 241, 237)` section backgrounds and `rgba(255, 255, 255, 0.6)`; neither is renamed as a new brand token here. Alpha borders are reported as observed rather than converted into opaque colours.

## Typography

**Official product use:** no opened first-party typography specification names a product face. The historical claim about a typeface chosen by Hara remains unresolved.

**Live-loaded:** `document.fonts` lists **Noto Sans JP**, normal, variable weight `100 900`, served by the site's relative WOFF2 source `../media/4bebc6b2128cde3f-s.261mtuh2r_gpj.woff2`. This is the face retained in `tokens.typography.family`. The loaded list also contains **Noto Sans JP Fallback**, whose `@font-face` source is `local("Arial")`; it is reported as the site's fallback alias, not promoted as another brand family.

**Official distributed assets:** no separately documented font download, distribution licence or official font specimen was opened. The measured WOFF2 declaration is serving evidence only.

**Declared-only:** body, H1 and button CSS all declare `"Helvetica Neue", Arial, "Noto Sans JP", "Noto Sans JP Fallback", "Hiragino Kaku Gothic ProN, Meiryo", sans-serif`. Helvetica Neue is therefore retained as a CSS fact, with no loaded face or specimen established. The last quoted name, including its comma, is reproduced exactly as the census records it. The survey's short `family: Helvetica Neue` field identifies the first CSS name; it is not independent proof of a rendered Helvetica face. `swiper-icons` and `VideoJS` are declared icon fonts, absent from the loaded list and excluded from typography tokens.

**Unresolved:** an official Latin brand face, the prior Japanese stack including Yu Gothic, and the attribution of type selection to Hara. Substitute: none chosen. No specimen is supplied for an unloaded face.

Measured sizes retain their specific element roles:

| Element | Size / weight | Line height | Tracking |
|---|---|---|---|
| Header “婦人服” | 16px / 700 | 25.6px | normal |
| Store-search button “検索” | 16px / 700 | 25.6px | normal |
| More-products visible label | 16px / 700 | 25.6px on outer link | normal on outer link |
| Store-search input | 16px / 400 | 25.6px | normal |
| First product description link in survey | 14px / 400 | 22.4px | Not recorded by survey |
| Product price link in survey | 16px / 400 | 19.2px | Not recorded by survey |
| Footer “店舗情報” | 12px / 400 | 19.2px | normal |

The visible More-products label is weight 700 although its outer anchor computes to 400. These observations support ordinary and bold interface text; they do not establish the old light-heading scale.

## Layout

The desktop capture is 1440×1000, with 1425px page content width after the scrollbar. The header logo and main content begin at x=64px. The category grid's first row uses six roughly 196.2px-wide links at x=64, 284, 504, 725, 945 and 1165px. The resulting gutters are approximately 24px. This measured arrangement replaces the old assertion of a centred 1180px, four-to-five-column catalog. It describes the homepage category grid, not a product-listing route.

Large campaign photographs occupy the first viewport below the notice panel. New products follow with square image links, then pickup, feature, service and reading sections, and a store locator. The reading section has four approximately 306.3px-wide links in the survey. The measured More-products action is centred at x=593px with width 240px. These are concrete desktop placements, not responsive breakpoints.

Horizontal and vertical custom-property scales both contain **4, 8, 12, 16, 20, 24, 32, 40, 48, 64 and 96px**. Their suffixes run `xxxxs`, `xxxs`, `xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `xxxl`, `xxxxl`. The additional horizontal property `--space-h-mobile-grid` is **19px**; its name is evidence of a declaration, not a mobile measurement. Use the measured 4px radius for the filled search button and the observed square outer links; a universal 2px radius is not supported. The surveyed carousel pager buttons compute to 9999px radius, so the prior claim that only toggles use that radius is also unsupported.

### Responsive Behavior

Mobile layouts and breakpoints were not measured; only the desktop capture and the declared 19px mobile-grid spacing property are available.

## Elevation & Depth

All six controls measured across the two states runs have `box-shadow: none`, as do their three compared ancestors. The store-input wrapper separates itself with a 1px `#ebebec` border. This supports a flat treatment for those controls; a global elevation scale, modal shadow and header blur were not measured.

## Motion & Easing

All six measured controls report the raw computed transition `all 0s ease 0s`. Their sampled changes settled without a nonzero transition. No duration scale, cubic-bezier curve, drawer motion, gallery crossfade or reduced-motion behaviour was measured.

---

Evidence: live survey and keyboard-state captures on 2026-11-03, plus the first-party pages linked inline. The corporate host's curl nonsense-path check remained blocked by a security checkpoint; no public design-system specification is asserted.

## Components

**Filled action — store locator “検索”.** The actual `<button type="button">` is 96×58px, with 4px radius, 16px 20px padding, no border and no shadow. Its rest background is `#3c3c43`; the label is `#ffffff`, 16px/700. Hover and press change only the background to `#1d1d1f`. Keyboard focus reached the button through Tab and produced no computed visual change in the probe's scope. This geometry belongs to store search, not an add-to-cart button.

**Secondary action link — “もっと見る” below new products.** The anchor to `/jp/ja/store/cmdty/section/T00020?web_store=web_top_new_more` is 240×57.6px, radius 0px, padding 0px, with transparent outer background on the white page. Its visible `span.gpfEmG_button.gpfEmG_button__size--s` measures 240×58px and supplies the `#f4eede` fill. The inner span changes to `#e0ceaa` on hover and press; text remains `#3c3c43`, visibly 16px/700. The span's radius and padding were not separately recorded. Keyboard focus caused no computed visual change. A transparent background is omitted from the machine component; the fill's child ownership is retained in its description.

**Header category button — “婦人服”.** 48×25.6px, radius 0px, padding 0px, transparent over white, `#3c3c43`, 16px/700. Hover, press and Tab focus showed no computed visual change within the compared element, pseudos and three ancestor levels. It remains a prose observation because it has no measured changing state.

**Footer navigation link — “店舗情報”.** 48×14px, radius 0px, padding 0px, transparent over `#f5f5f5`, `#3c3c43`, 12px/400. Its CSS line height is 19.2px even though its inline bounding rectangle is 14px high. Hover, press and Tab focus showed no computed visual change in scope; no interactive component token is created.

**Store-search input — placeholder “店名、住所”.** The input itself is 470×25.6px, radius 0px, padding 0px, transparent over white, `#3c3c43`, 16px/400. Its second ancestor is a white wrapper with a 1px `#ebebec` border. Hover, press and Tab focus showed no computed visual change, including the compared ancestors. The input is recorded in prose only.

**Product-image card link — “婦人 なめらかブラキャミソール”, SKU `4550723243582`.** The second states load returned `/jp/ja/store/cmdty/detail/4550723243582?web_store=web_top_new_prod_01`. Its image anchor is 196.2×196.2px, radius 0px, no border or shadow, and transparent on the white page. Computed padding is `196.164px 0px 0px`, preserving the square image area; the anchor font is 16px/400, line height 25.6px, normal tracking. The visible NEW label is a child: white `#ffffff` at 11px/700 on `#7f0019`, distinct from the anchor's `#3c3c43` colour. Hover and press change `div._6sg60q_overlay` opacity from 0 to 0.1 over its `#3c3c43` fill. Keyboard focus shows no computed visual change. This is the image link within a card, not a measurement of the whole card container. No validation, disabled, toast, modal, checkbox or toggle treatment is inferred from the homepage.

### States

The first states run measured real hover (`:hover` true), held pointer press (`:active` true) and keyboard focus (`:focus-visible` true). Store search darkens from `#3c3c43` to `#1d1d1f`; the More-products inner span changes from `#f4eede` to `#e0ceaa`. The product-image link changes its grey overlay child from opacity 0 to 0.1 on hover and press. Pressed snapshots match hover, so they establish no additional pressed-only treatment.

For all six measured controls, Tab focus produced no computed visual change within self, descendants, pseudos and three ancestor levels. No authored or browser-auto outline was recorded. The header category, footer link and input also showed no hover or pressed change within that scope. Sibling menus and pixels outside the probe's computed-style comparison are not covered by these statements. Disabled, loading, empty, error and success states were not exercised.

## Do's and Don'ts

- Use the measured grey ramp for the Japanese store and preserve the `#7f0019` MUJI-red property.
- Include the observed kinari-to-beige secondary action: the live palette extends beyond greys and maroon.
- Keep the filled search action at its observed 4px radius and 16px/700 label; use square links where measured.
- Keep photograph-led sections and the measured desktop spacing relationships when recreating this surface.
- Attribute fonts by evidence class. A CSS family declaration cannot establish a loaded specimen.
- Do not turn product-making philosophy into unsupported restrictions on UI colour, weight, radius or motion.
- Do not generalise a store-search measurement into a cart, checkout, error or success component.

## Voice & Tone

MUJI's own introduction frames satisfaction as “This will do,” developed toward clarity and confidence. Kazuko Koike's account of the founding advertising describes explaining why an item could be sold at a reasonable price, rather than claiming how wonderful it was. The useful writing direction is to explain the material, process or practical value with a concrete reason. This is grounded in brand writing, not an audited rule for every microcopy string. [About MUJI](https://www.ryohin-keikaku.jp/en/about-muji), [Koike's account](https://www.muji.com/ph/flagship/huaihai755/archive/koike.html).

The live homepage also gives a discount percentage and a closing date in its top banner. Preserve the distinction between the brand's considered explanation of value and its observed retail notices; there is no verified prohibition on promotional urgency, exclamation marks or superlatives across all surfaces.

## Agent Prompt Guide

“Recreate the captured Japanese MUJI store chrome with a white canvas, `#3c3c43` foreground, square category links and large campaign photographs. Use the measured desktop 64px outer placement and approximately 24px grid gutters. Use Noto Sans JP only under its live-loaded evidence class; no Latin substitute has been chosen.”

“Build the measured store-search button: 96×58px, 4px radius, 16px 20px padding, `#3c3c43` fill and `#ffffff` 16px/700 label. Hover and pressed fill: `#1d1d1f`. No new focus token was observed.”

“Build the More-products action as a 240×57.6px outer link on white. Its 240×58px inner span supplies the `#f4eede` rest fill, changing to `#e0ceaa` on hover and press, with a `#3c3c43` 16px/700 label. Keep the outer anchor's 0px radius distinct from the unmeasured child radius.”

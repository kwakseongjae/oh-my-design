---
name: Marpple Shop
colors:
  primary: '#1c75ff'
  primary-light: '#4d94ff'
  primary-dark: '#0056d6'
  active: '#3c89f9'
  canvas: '#ffffff'
  foreground: '#888888'
  ink: '#141414'
  muted: '#6b6b6b'
  subtle: '#a2a2a2'
  product: '#f6f6f6'
  model: '#e8e8e8'
  quick-menu: '#f3f4f5'
  border: '#d9d9d9'
  tab-border: '#dfe1e2'
  tab-ink: '#626a75'
  tab-selected: '#2b2f35'
  warning: '#ff6b00'
  warning-light: '#fff0e5'
  ranking-orange: '#ff6a00'
  error: '#d92a0f'
  error-light: '#fceeec'
  success: '#009444'
  success-light: '#ebfef3'
typography:
  heading:
    fontSize: 24px
    fontWeight: 700
    use: '--mk-typo-24-b declares 24px/34px Pretendard; the homepage section title also has font_24_bold_kr. No h1 was available in the census.'
  body:
    fontSize: 14px
    fontWeight: 400
    use: '--mk-typo-14-r declares 14px at 1.5 line height; this is a root typography token, not a measured paragraph size.'
  button:
    fontSize: 13px
    fontWeight: 700
    use: 'Measured creator CTA metrics: 13px/700, line-height 17px. Its first declared face is Pretendard Variable, absent from the loaded-face census; no specimen for that face.'
rounded:
  none: 0px
  small: 4px
  tab: 8px
  maker: 20px
  quick-menu: 24px
components:
  goods-nav:
    type: button
    textColor: '#141414'
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 16px / 500
    hover: 'fg #1c75ff'
    pressed: 'fg #1c75ff'
    use: '굿즈 — a navigation link on the white header. Its own background is transparent and omitted here. Label and element change to #1c75ff on hover and during pointer press; keyboard focus is unmeasured. Font metrics are measured; Pretendard Variable is declared first but not in the loaded-face census.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard
    display: bebas-neue-pro-semiexpanded
---

# Design System Inspiration of Marpple Shop

## Overview

### Visual Theme & Atmosphere

Marpple Shop connects a creator's goods with the work of selling them: its product introduction describes an integrated service for production, orders, payments, delivery and settlement, including goods made after an order arrives. The current offering includes physical merchandise, digital products and handmade goods. Its operator is **(주)마플코퍼레이션**. [Product introduction](https://marpple.shop/kr/@/about)

The official June 2024 **Marpple Shop 2.0** renewal note connects the **MAKE IT REAL!** expression to discovering and expressing individuality. It records new branding alongside work to unify UI/UX and UX writing, and introduces creator rankings, pop-up stores and curation. The current introduction also documents YouTube Shopping and CIME connections; its update log dates additions to those descriptions to May 2026. [2024 renewal note](https://updatenote.marpplecorp.com/1b653281-6352-8011-8068-d2ccbe867c3a), [current introduction](https://marpple.shop/kr/@/about)

The measured storefront places large creator artwork on a white interface, with dark product labels, rounded discovery shortcuts and a small glossy blue creator action. Blue **`#1c75ff`** supplies the measured navigation response; the changing merchandise imagery supplies much of the page's colour.

The measured homepage is the Korean edition (`marpple.shop/kr/`); the capture remained on that path.

### Brand Narrative

Marpple Corporation's company page records its establishment date as **5 January 2015**. That is a corporate date, not a verified launch date for Marpple Shop. The later 2.0 note frames the shop around individual expression and discovery, while the current introduction explains the operational services behind creators' stores. [Company information](https://www.marpplecorp.com/about), [renewal note](https://updatenote.marpplecorp.com/1b653281-6352-8011-8068-d2ccbe867c3a)

The captured mix of creator features, rankings and curation gives that narrative a visible product structure. This connection is an interpretation of the documented product and measured homepage.

### Principles

- **Creator expression and discovery:** documented in the 2.0 renewal note.
- **Connected selling operations:** documented in the product introduction.
- **Artwork with restrained interface chrome:** observed in the desktop capture.
- **Blue interaction feedback:** measured on the goods navigation link.

### Personas

The introduction explicitly addresses illustrators and IP owners, virtual streamers, YouTube creators, handmade creators, businesses/brands and creators seeking collaborative products; no demographic personas were researched. [Documented audiences](https://marpple.shop/kr/@/about)

## Colors

The live root exposes **86 `--mk-*` custom properties**. Their first-party origin is corroborated by the product's served CSS. The same CSS initially aliases primary to orange, then overrides it to blue; use the live computed result for this surface. These are extracted values, not an official published brand specification.

| Role | Value | Evidence |
|---|---|---|
| Primary | `#1c75ff` | `--mk-color-primary`; also measured nav hover/press |
| Primary light / dark | `#4d94ff` / `#0056d6` | computed root properties |
| Active | `#3c89f9` | `--mk-color-active`; no active-state mapping inferred |
| Canvas | `#ffffff` | header backing; white controls |
| Paragraph foreground | `#888888` | most frequent `<p>` ink: 16 paragraphs |
| Storefront ink | `#141414` | nav and product-label rest colour |
| Muted / subtle | `#6b6b6b` / `#a2a2a2` | share label / its SVG path |
| Product / model background | `#f6f6f6` / `#e8e8e8` | `--mk-bg-product` / `--mk-bg-model`; first also behind the measured product image |
| Quick-menu background | `#f3f4f5` | survey discovery links |
| Action border | `#d9d9d9` | measured share button |
| Inactive tab border / ink | `#dfe1e2` / `#626a75` | measured “핸드메이드” tab |
| Selected tab | `#2b2f35` | resting “굿즈” tab in survey |
| Warning / light | `#ff6b00` / `#fff0e5` | `--mk-color-warning` / `-warning-light` |
| Ranking orange | `#ff6a00` | rendered census and served `.badge__21c633fb.type_trend__21c633fb` rule; distinct from warning orange |
| Error / light | `#d92a0f` / `#fceeec` | `--mk-color-error` / `-error-light` |
| Success / light | `#009444` / `#ebfef3` | `--mk-color-success` / `-success-light` |

The paragraph census also contains `#a2a2a2` ×9 and `#141414` ×4. Its dominant muted paragraph colour must be kept separate from the darker commerce labels. White is the most frequent overall text colour because the census also includes the many banner labels; it does not identify the paragraph foreground.

Tailwind, Swiper, date-picker defaults and the separate `:root, :host` palette are excluded. Namespace counts and ownership limits are recorded in the verification notes.

## Typography

**Official product-use statement:** no opened company or renewal page names an official product typeface.

**Live-loaded:** the survey's loaded-face list contains **Pretendard 400, 500, 600 and 700**, **neue-haas-unica 400**, **bebas-neue-pro-semiexpanded 700**, **Noto Sans KR 400/700** and **Roboto 400/700**, all normal style. Body and the first button declare a stack beginning with Pretendard; no `h1` was available. The typography family token uses this loaded Pretendard face. The loaded Bebas face also has a specific homepage association: banner labels such as “CREATOR OPEN” carry `font_bebas_20_bold`, whose served CSS names `bebas-neue-pro-semiexpanded`, weight 700. It is the display family retained here.

**Official distributed assets:** `/font/pretendard.css` declares static Pretendard weights 100–900, with local-face names followed by same-origin subset WOFF2 and WOFF URLs. `/font/font.css?t=20260413` declares Noto Sans KR and Roboto files under `/font/maker/`. Adobe's linked `asd2vdw` kit serves the two loaded Adobe families. A declaration records the offered sources; the capture does not identify which local/file alternative supplied each glyph. No font binary was separately downloaded and no redistribution licence is asserted.

**Declared-only:** the first family reported for all five identified controls is **Pretendard Variable**, absent from the survey's loaded-face list. Static Pretendard weights outside 400–700 are also declared but not reported loaded. They receive no specimens. The CSS for the Korean type classes contains a stack beginning with Pretendard Variable, then Pretendard; that declaration does not prove the variable face loaded.

**Unresolved:** exact glyph-level face selection and the storefront roles of loaded neue-haas-unica, Noto Sans KR and Roboto were not established. They are retained as font evidence, without additional family tokens. **Substitute: none chosen.**

| Metric | Verified value and scope |
|---|---|
| Root heading token | `--mk-typo-24-b`: 700, 24px/34px, Pretendard declaration |
| Root body token | `--mk-typo-14-r`: 400, 14px/1.5; not a measured paragraph size |
| Header nav | 16px/500, line-height 24px, letter-spacing −0.2px |
| Creator CTA | 13px/700, line-height 17px, letter-spacing −0.2px |
| Share button | element 14px/500; visible child label 14px/400; line-height 22px |
| Inactive ranking tab | 18px/500, line-height 22px, letter-spacing −0.2px |
| Product image link | inherited 14px/400, normal line-height; image has no visible text label |

## Layout

At the measured **1440 × 1000** desktop viewport, a white header occupies 112px vertically. A horizontal hero strip begins at y=112; its cards measure **448 × 560px**, with **16px** between adjacent cards. Their artwork carries overlaid category, title and description text. Two rows of compact discovery links follow the hero, then a ranking title, category buttons and a “더보기” link.

The first ranking product row starts at x=32 and y=930. Its five image links are 262.4px square, with the next beginning at x=310 in the survey. These are observations of this capture, not a breakpoint or global grid formula. Continue below with the captured merchandising sections and the legal/support footer; keep text hierarchy distinct from creator artwork.

### Responsive Behavior

Only the desktop 1440 × 1000 surface was measured; mobile layouts and breakpoint behaviour are unmeasured.

## Elevation & Depth

The five identified control elements report **`box-shadow: none`** at rest. The share control also reports **`backdrop-filter: blur(20px)`**. Its opaque white fill should be retained when describing that observation.

The creator CTA's apparent bevel belongs to the background image. The computed maker dimming values are `rgba(0, 0, 0, 0.1)`, `rgba(0, 0, 0, 0.3)` and `rgba(0, 0, 0, 0.6)`; their presence does not establish a tested dialog or elevation system.

## Motion & Easing

The computed root token **`--mk-transition-normal: 200ms ease`** is present. The measured share control's raw computed transition is **`background-color, box-shadow 0.2s, 0.2s ease-out, ease-out 0s, 0s`**; its tested states nevertheless show no settled visual property change. The other four identified controls report **`all 0s ease 0s`** on the element itself. These strings are reproduced in the verification Proof block; no additional timing or curve is specified.

---

**Measurement:** 2026-11-04; Korean homepage, fresh worker profile, 1440 × 1000, `ko-KR`. Source-backed company narrative is separate from homepage token evidence. Raw evidence, namespace exclusions, control identities and limitations are in `report.md` and `verification.md`.

**First-party implementation sources:** [homepage](https://marpple.shop/kr/), [root tokens and typography CSS](https://s3.marpple.co/build/prod_tts_mps_dist/72076_7ba86e6ef541d76eb960.css), [storefront CSS](https://s3.marpple.co/build/prod_tts_mps_dist/34231_f9b2a172092f37aa1f4b.css), [Pretendard declarations](https://marpple.shop/font/pretendard.css), [font catalogue declarations](https://marpple.shop/font/font.css?t=20260413).

## Components

**Goods navigation link** — “굿즈”, `a.menu__ef8b2c4c`, links to `/kr/@/goods/ranking`. Its measured box is **27.3 × 24px**, radius **0px**, padding **0px**, text **16px/500**, resting ink **`#141414`**. It has no own background fill and sits over **`#ffffff`**. Hover and held pointer press change both element and label to **`#1c75ff`**. Keyboard focus was not reached and has no token. This is the single interactive component exported in the token block.

The other observed controls remain useful geometry references:

| Control | Resting construction | Measured response |
|---|---|---|
| Creator application link, “크리에이터 신청하기” | 155 × 40px; CSS radius 0px; padding 10px 26px; 13px/700 white label; transparent colour layer over a PNG background | hover and held press unchanged; keyboard focus unmeasured |
| Share button, “소문내기” | 93.6 × 32px; radius 4px; padding 5px 12px; white fill; `#6b6b6b` label; 1px `#d9d9d9` border | hover, press and real Tab focus unchanged |
| Inactive “핸드메이드” ranking tab | 94.8 × 38px; radius 8px; padding 0px 8px; white fill; `#626a75` ink; 1px `#dfe1e2` border | hover, press and real Tab focus unchanged |
| First ranking product image link | 262.4 × 262.4px; link radius 0px; padding 0px; transparent link over `#f6f6f6`; inherited `#141414` ink | hover, press and real Tab focus unchanged |

The creator action's rounded chrome is supplied by a raster background, not by its measured border radius or box shadow. The observed background URL ends in `4902c70590a85942d7153370915d8d921f5b52301.png`. A flat-blue reconstruction would lose that measured construction.

No visible search input was identified by the states probe. Its metrics and states are absent.

The survey also records a 24px radius on the quick-menu links and a computed root `--mk-border-radius: 20px`; the latter is a maker namespace value, not a measured product-card radius.

### States

The **goods nav** changes ink to `#1c75ff` on verified `:hover` and `:active`; press adds no further difference from hover. Its keyboard focus is **UNMEASURED**, as is the creator CTA's: both Tab walks ended in cycles before reaching them.

The **creator CTA** has measured unchanged hover and press. **Share**, **inactive handmade tab** and **product image link** have measured unchanged hover, press and real Tab focus. Their focus snapshots report `outline-style: none`, rather than a browser `auto` ring. The **search input** was not found; all its states are unmeasured.

“Unchanged” is limited to each control, its pseudo-elements, all captured descendants and their pseudo-elements, and three ancestor levels. The share comparison includes one SVG and its path; the product link includes one image. The probe compares computed style and attributes, not pixels; siblings, closed shadow roots, cross-origin frames and image-internal animation are outside that conclusion. No overlay was hidden and no dialog close selector was used. No consent banner is visible in the inspected viewport captures, and no consent-rejection action was logged.

## Do's and Don'ts

- Use the measured blue nav response on the white header.
- Keep large creator artwork and compact neutral commerce controls at their observed scales.
- Preserve the distinction between dark product ink and muted paragraph ink.
- Retain the creator CTA's image construction when fidelity to this capture matters.
- Do not turn maker radii, widget palettes or Swiper blue into storefront component defaults.
- Do not add a hover transform, focus ring or disabled state to this reference without new measurement.

## Voice & Tone

The captured Korean interface uses compact task labels: “더보기”, “소문내기” and “크리에이터 신청하기”. Its English banner labels, including “CREATOR OPEN” and “CURATION”, act as category markers. Keep this distinction between commerce actions and editorial labels; it is an observed writing pattern, not a published voice guide.

## Agent Prompt Guide

“Build a white creator-commerce homepage with a 112px desktop header, 448 × 560px hero artwork cards and 16px hero gaps, followed by compact rounded discovery links and a product ranking. Use the measured product ink and blue navigation response. Keep the creator application link's PNG background construction explicit.”

“For the ‘굿즈’ navigation link, use 16px/500 text in a 24px-high box, zero padding and radius, resting `#141414` on a white header; hover and pointer press use `#1c75ff`. Font metrics are known; the declared variable face and keyboard-focus styling remain unresolved.”

These prompts encode measured desktop details. They do not establish additional components or states.

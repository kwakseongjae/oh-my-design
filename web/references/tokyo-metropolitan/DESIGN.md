---
name: Tokyo Metropolitan Government
colors:
  primary: '#1a753f'
  primary-light: '#018838'
  secondary: '#ed6808'
  alert: '#ec0000'
  disabled: '#949497'
  focus: '#d18d0f'
  mark: '#d7efda'
  ink: '#1a1a1c'
  canvas: '#ffffff'
  foreground: '#626264'
  link: '#003ee5'
  link-hover: '#0030b2'
  link-visited: '#0000be'
  muted: '#757578'
  button-hover: '#016e2d'
  button-secondary-hover: '#e3f2ea'
  background1: '#f1f4f2'
  background3: '#e8f4ed'
  background5: '#f8fbf9'
  background6: '#f2faf5'
  background7: '#f1f1f4'
  background8: '#ffe7e6'
  border1: '#d9d9d9'
  border2: '#dbdbdb'
  border3: '#d8d8db'
  border4: '#e0e0e0'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    use: Measured search input; line-height 28px.
  button:
    fontSize: 16px
    fontWeight: 700
    use: Measured search submit button; line-height 24px.
  card-title:
    fontSize: 18px
    fontWeight: 700
    use: Measured infection-information card title link; line-height 27px.
rounded:
  link: 1px
  utility: 4px
  form: 8px
  card-type01-declared: 12px
spacing:
  tag-gap: 8
  content-padding-x: 16
  space-pattern4: 24
  desktop-column-gap: 32
  space-pattern2: 40
  space-pattern1: 64
components:
  search-submit:
    type: button
    backgroundColor: '#018838'
    textColor: '#ffffff'
    border: '1px solid #018838'
    rounded: 8px
    height: 60px
    padding: 16px
    typography: 16px / 700
    hover: 'background and border #016e2d'
    use: 検索 — search submit button. Hover darkens background and border. Keyboard focus also darkens them, but its auto outline is browser-owned and has no focus token. No submission was performed.
  header-about:
    type: button
    textColor: '#1a1a1c'
    rounded: 4px
    height: 29px
    padding: 4px 15px
    typography: 14px / 400
    hover: '#f1f4f2'
    focus: box-shadow rgba(0, 123, 255, 0.25) 0px 0px 0px 3.2px
    use: 組織情報 — a transparent link on white. Its before pseudo-element draws the border. Only the reversible focus shadow is recorded; the background persisted after blur and is excluded from the focus token.
  nav-kurashi:
    type: button
    textColor: '#ffffff'
    rounded: 1px
    height: 44px
    padding: 0px 0px 8px
    typography: 16px / 400
    hover: 'underline solid #ffffff'
    focus: 'underline solid #ffffff; box-shadow rgba(0, 123, 255, 0.25) 0px 0px 0px 3.2px'
    use: 暮らし・健康・福祉 — a transparent navigation link on the green navigation surface.
  search-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#1a1a1c'
    rounded: 8px
    height: 60px
    padding: 16px
    typography: 16px / 400
    focus: 'parent div.page-search-form_text::after border 2px solid #d18d0f'
    use: キーワードを入力してください — 600px wide in the desktop capture. The input itself has no border; its parent after pseudo-element draws the border and changes on keyboard focus.
  infection-card:
    type: card
    textColor: '#1a1a1c'
    rounded: 1px
    height: 26px
    padding: 0px
    typography: 18px / 700
    hover: 'ancestor div.ag-slider-card-type02_card background #e8f4ed'
    focus: box-shadow rgba(0, 123, 255, 0.25) 0px 0px 0px 3.2px
    use: 感染症情報 — a transparent title link inside a white card. Height, radius and padding describe the title anchor, not the whole card. Hover changes its second ancestor; keyboard focus changes the anchor shadow.
fonts:
  roles:
    sans: Noto Sans JP
---

# Design System Inspiration of Tokyo Metropolitan Government

## Overview

### Visual Theme & Atmosphere

Tokyo Metropolitan Government's general portal connects visitors to government information, departments, procedures and public announcements. Its site policy identifies the operator as **東京都**, a Japanese local government. The official chronology records the establishment of Tokyo Metropolis in July 1943, replacing Tokyo Prefecture and Tokyo City. [Site policy](https://www.metro.tokyo.lg.jp/policy), [chronology](https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/nenpyo).

The identity combines a green symbol with a practical information interface. The official symbol page dates the mark to 1 June 1989 and describes three equal arcs with a hidden **T** at the centre, with vivid green as its basic colour. On the measured homepage, green navigation and actions frame a white canvas, blue information links, image-led campaigns and tabbed announcements. The symbol's description supplies no numerical green specification; the interface colours below come from live CSS. [Official symbol](https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/monsho), [homepage](https://www.metro.tokyo.lg.jp/).

The published direction continues through the revised website design guideline, dated 6 October 2023: common presentation, clear information priority and concise current information. The live homepage also links to **My TOKYO**, described there as delivering information according to each visitor's interests and circumstances. These are documented directions and current content; no date for a redesign of this measured homepage is established. [Design guideline](https://www.metro.tokyo.lg.jp/policy/guideline), [homepage](https://www.metro.tokyo.lg.jp/).

The measured page is the Japanese homepage at `www.metro.tokyo.lg.jp/`, HTML language `ja-JP`; the capture recorded no regional redirect.

### Brand Narrative

The official chronology anchors the government in the 1943 metropolitan reorganisation. The symbol page distinguishes the inherited metropolitan crest from the green symbol adopted in 1989, described as three equal arcs and a hidden T. [Chronology](https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/nenpyo), [symbol history](https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/monsho).

### Principles

The official guideline prioritises clear information hierarchy and easy access to needed information. Its request to use images instead of long runs of text is visible in the measured homepage's campaign imagery and card groups. The site policy states an AA accessibility target under JIS X 8341-3:2016; this is a published target, not a compliance result inferred from this capture. [Guideline](https://www.metro.tokyo.lg.jp/policy/guideline), [site policy](https://www.metro.tokyo.lg.jp/policy).

### Personas

No user research or validated personas were inspected.

## Colors

The first-party `--metrotokyo-*` namespace supplies the palette. There are **223 computed root properties** and **234 distinct declared properties** in this namespace. Framework defaults and Swiper variables are excluded. Values below are exact CSS declarations also resolved by the root census, rather than an inferred palette.

| Role in this reference | Value | First-party property / live evidence |
|---|---|---|
| Primary | `#1a753f` | `--metrotokyo-color-primary` |
| Primary light / search action | `#018838` | `--metrotokyo-color-primary-light`; search button rest and navigation ground |
| Button hover | `#016e2d` | `--metrotokyo-color-button-hover`; search hover background and border |
| Secondary button hover, declared | `#e3f2ea` | `--metrotokyo-color-button-secondary-hover`; no matching secondary button state measured |
| Strong ink | `#1a1a1c` | `--metrotokyo-color-base1`; input and card-title ink |
| Canvas | `#ffffff` | `--metrotokyo-color-base2`, `--metrotokyo-color-background2` |
| Foreground for the sampled paragraphs | `#626264` | `--metrotokyo-color-base3`; 3 of 4 sampled `<p>` elements |
| Link / hover / visited, declared | `#003ee5` / `#0030b2` / `#0000be` | `--metrotokyo-color-base4` / `-base5` / `-base6`; generic anchor rules in the official module stylesheet |
| Base7, declared | `#757578` | `--metrotokyo-color-base7`; no additional role inferred |
| Focus | `#d18d0f` | `--metrotokyo-color-focus`; input wrapper's keyboard-focus border |
| Secondary / alert / disabled / mark, declared | `#ed6808` / `#ec0000` / `#949497` / `#d7efda` | `--metrotokyo-color-secondary`, `-alert`, `-disabled`, `-mark`; these semantic states were not exercised |
| Background1 | `#f1f4f2` | `--metrotokyo-color-background1`; header utility link hover |
| Background3 | `#e8f4ed` | `--metrotokyo-color-background3`; selected news tab and card ancestor hover |
| Background5 | `#f8fbf9` | `--metrotokyo-color-background5`; present in the background census |
| Background6 / 7 / 8, declared | `#f2faf5` / `#f1f1f4` / `#ffe7e6` | Corresponding `--metrotokyo-color-background*` properties |
| Border1 / 2 / 3 / 4 | `#d9d9d9` / `#dbdbdb` / `#d8d8db` / `#e0e0e0` | Corresponding `--metrotokyo-border-color*` properties; border3 is visible on the utility-link pseudo-element and card ancestor |

The raw census counted white backgrounds 63 times, strong ink 70 times and blue link text 21 times. Paragraph ink is a separate observation: `#626264` ×3 and `#1a1a1c` ×1. It does not establish a universal body-text colour for every page. The declared overlay is `rgba(0, 0, 0, 0.7)` and the scrollbar colour is `rgba(60, 60, 67, 0.6)`; alpha values stay outside the hex palette.

## Typography

**Live-loaded:** `Noto Sans JP` normal and bold are loaded in `document.fonts`. Body, first `h1` and first button all declare `"Noto Sans JP", sans-serif`. The official module stylesheet serves the two faces from `/documents/d/global/NotoSansJP-Regular` and `/documents/d/global/NotoSansJP-Bold`, both declared as OpenType. The typography family token names only **Noto Sans JP**. `swiper-icons` also loaded, but is an icon font belonging to the slider library and is excluded.

**Official product-use guidance:** the [website guideline](https://www.metro.tokyo.lg.jp/policy/guideline) permits ヒラギノ角ゴ, メイリオ, MS-Pゴシック, Noto Sans or sans-serif as CSS text families. This is a permitted set, not a statement that all those faces render here. It separately names ゴナD or メイリオ for bureau logo artwork; that does not identify the live portal logotype's face.

**Official distributed assets:** two first-party font URLs are evidenced by the live `@font-face` rules. A separate font kit and its licence were not inspected. **Declared-only:** the framework's unused font-family custom properties contain other family names; none is promoted into the family token or a specimen. **Unresolved:** the exact face used inside logo images. **Substitute: none chosen.**

| Measured use | Size / weight | Line-height | Letter-spacing |
|---|---|---|---|
| Search input | 16px / 400 | 28px | 0.64px |
| Search submit | 16px / 700 | 24px | 0.64px |
| Header utility link | 14px / 400 | 21px | 0.035px |
| Main navigation link | 16px / 400 | 17.6px | 0.64px |
| Infection-information card title | 18px / 700 | 27px | 0.72px |
| Selected news tab | 16px / 400 | 28px | 0.64px |

The declared desktop heading sizes `h0`–`h7` are `3.125rem`, `2.625rem`, `1.75rem`, `1.625rem`, `1.375rem`, `1.25rem`, `1.125rem`, `1rem`. All declare bold weight and line-height `1.5`. These are CSS scale definitions, not measurements of eight rendered headings. Desktop body1 declares `1rem`, normal, line-height `1.75` and tracking `0.04em`.

## Layout

The captured desktop page has a utility header, a green topic navigation row, wide campaign imagery, announcement tabs, card carousels, government links and a keyword-search form. This is an observation of the 1440×1000 capture.

First-party declarations set content and footer inner widths to **1024px**, content horizontal padding to **16px**, and small/large column gaps to **16px / 32px**. Both `s` and `lg` space-pattern scales declare **64, 40, 32, 24, 16px**. Tags use an **8px** gap; button containers declare **8px 16px**. These declarations define the reference's spacing values; they do not assert that every homepage section has one common width.

### Responsive Behavior

Mobile rendering and breakpoints were not measured. The stylesheet declares separate mobile values: `h1` `1.625rem`, body1 `1rem` at line-height `1.5` with `0.005em` tracking, and a 16px small column gap. They are declarations, not a tested mobile layout. The official guideline asks for smartphone and tablet support. [Design guideline](https://www.metro.tokyo.lg.jp/policy/guideline).

## Elevation & Depth

The measured control surfaces use borders rather than rest shadows: all six report `box-shadow: none` at rest. The blue focus shadow on three links is `rgba(0, 123, 255, 0.25) 0px 0px 0px 3.2px`; it is a rendered link-state observation, not a green brand-colour token. The generic framework's elevation variables are excluded.

The survey also records a declared **12px** radius on `.card-type01-pattern03` through `--metrotokyo-card-type01-border-radius`. This is a declared card variant, separate from the measured 1px title-anchor radius. Pill tags measured `9999px`; circular controls measured `50%`. Neither is converted into a numeric radius token here.

## Motion & Easing

The search button and selected tab report the exact transition string `background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s`. The utility, navigation and card-title links report duration lists of `0.15s` with `ease-in-out`; the full raw property/duration strings are preserved in verification notes. The search input reports `all 0s ease 0s`; its wrapper focus border is measured separately. No carousel playback timing or accordion animation was measured.

## Components

Dimensions identify the actual elements that were measured; they are not prescribed universal sizes. All six controls were enabled. Pressed states were **UNMEASURED** because `:active` did not match during the mouse-down sample.

- **Search submit — 検索:** `button.page-search-form_button`, 120×60px, 8px radius, 16px padding, `#018838` background and 1px border, `#ffffff` label. Hover changes both background and border to `#016e2d`. Keyboard focus darkens them too; its additional `auto` outline is browser-owned and has no focus token.
- **Utility link — 組織情報:** `a.header-bureau_submenu-button[href='/about']`, 103×29px, 4px radius, 4px 15px padding. Transparent on white, `#1a1a1c` label. A `::before` layer draws a 1px `#d8d8db` border. Hover fills it with `#f1f4f2`. Keyboard focus adds the reversible shadow `rgba(0, 123, 255, 0.25) 0px 0px 0px 3.2px`. The captured focus background remained after blur, so it is not a focus token.
- **Navigation link — 暮らし・健康・福祉:** 149.8×44px, 1px radius, 0px 0px 8px padding. Transparent on `#018838`, with a white label. Hover adds a solid white underline. Keyboard focus adds that underline and the same reversible blue shadow used on the utility link.
- **Search input — キーワードを入力してください:** `input.page-search-form_text-input`, 600×60px, 8px radius, 16px padding, white fill and `#1a1a1c` entered-text colour. The input itself has no border. Its parent `.page-search-form_text::after` changes from **1px solid `#1a1a1c` to 2px solid `#d18d0f`** under keyboard focus, then returns after blur. Hover produced no change in the compared scope.
- **Card title link — 感染症情報:** `a.ag-slider-card-type02_card-title`, 116.1×26px, 1px radius, zero padding. The title is transparent over a white card; the second ancestor has a 1px `#d8d8db` border. Hovering the title changes that ancestor's background to `#e8f4ed`. Keyboard focus places the reversible blue shadow on the title anchor. Its measurements do not describe the whole card.

The selected **報道発表** tab is 100×52px with 12px 16px padding, top corners 8px and bottom corners 0px. Its `#e8f4ed` background and 2px `#1a753f` bottom pseudo-element were measured at rest. Hover was unchanged, focus added only the browser's auto outline, and pressed was unmeasured. It stays in prose and is absent from the component registry.

### States

Keyboard focus reaches all six chosen controls. The input's gold wrapper border, utility/navigation/card-title link shadows, navigation underline and search-button darkening are measured changes. The utility link's persistent background is excluded from focus evidence. The selected tab has only browser-owned focus styling, so no interactive tab component is declared.

Hover snapshots confirm `:hover` for all six. “No change” for the input and selected tab is limited to the control, its pseudo-elements, descendants and three ancestor levels with their pseudo-elements. The probe also compares image/SVG attributes, but the inside of external SVG sprites, sibling elements, closed shadow roots, cross-origin frames and pixel-only animation are outside that claim. No disabled state was measured; all pressed states remain unmeasured.

## Do's and Don'ts

- Use the green action colour and pale green interaction surfaces according to the measured control, with white backgrounds and blue information links.
- Give the keyword field its wrapper-drawn gold focus border; preserve the placement of the effect on the wrapper.
- Keep title-anchor geometry separate from the enclosing card geometry.
- Treat the guideline's font options and the live-loaded Noto Sans JP as different evidence classes.
- Keep framework defaults, Swiper icon resources and the chatbot outside the brand token set; do not infer a pressed style from hover.

## Voice & Tone

The observed interface labels tasks and topics directly: **検索**, **組織情報**, **感染症情報** and **報道発表一覧へ**. Use this concise task-labelling pattern as an observation of the portal, rather than an asserted official copywriting policy.

## Agent Prompt Guide

“Build a public-information portal using the measured Tokyo homepage palette: white canvas, `#1a753f` primary, `#018838` search action, `#626264` paragraph foreground and `#003ee5` information links. Use the live-loaded Noto Sans JP normal/bold faces. Make the measured search button 60px high with an 8px radius and 16px padding; darken its background and border to `#016e2d` on hover. On keyboard focus, change the keyword input wrapper's border from 1px `#1a1a1c` to 2px `#d18d0f`.”

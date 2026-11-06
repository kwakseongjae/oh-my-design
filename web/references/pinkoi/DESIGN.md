---
name: Pinkoi
colors:
  primary: '#10567b'
  primary-hover: '#064162'
  primary-active: '#003354'
  link: '#2e90b7'
  canvas: '#ffffff'
  surface: '#ffffff'
  surface-soft: '#f7f7f8'
  border-light: '#e5e5e6'
  border-mid: '#d3d3d5'
  ui-ink: '#39393e'
  foreground: '#202026'
  muted: '#66666a'
  purchase: '#f16c5d'
  on-primary: '#ffffff'
typography:
  control:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    use: Measured category navigation and search input; declared font family unresolved
  meta:
    fontSize: 13px
    fontWeight: 400
    use: Measured homepage footer links
  overlay-title:
    fontSize: 16px
    fontWeight: 500
    use: Measured white product title inside the hover overlay
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  least: 2
  xs: 4
  s: 6
  m: 10
  l: 14
  xl: 20
  2xl: 24
  3xl: 36
  4xl: 48
  5xl: 64
components:
  search-cta:
    type: button
    backgroundColor: '#10567b'
    textColor: '#ffffff'
    rounded: 0px 8px 8px 0px
    height: 40px
    width: 68px
    padding: 8px 20px
    typography: 0px / 400
    hover: 'bg #064162'
    pressed: 'bg #003354'
    use: Header search submit, icon-only with a white 24px SVG. No border or shadow. Browser auto focus outline omitted.
  search-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#39393e'
    border: '1px solid #d3d3d5 on top, bottom and left; right none'
    rounded: 8px 0px 0px 8px
    height: 40px
    width: 432px
    padding: 9px 34px 9px 14px
    typography: 14px / 400
    pressed: 'visible borders #10567b and inset 0 0 0 1px #10567b, with focus also present'
    focus: 'visible borders #10567b and inset 0 0 0 1px #10567b'
    use: Header search field; no computed hover change within the documented comparison scope. Focus changes disappear after blur.
  nav-fashion:
    type: button
    textColor: '#39393e'
    rounded: 0px
    height: 44px
    width: 150px
    padding: 14px 0px 10px
    typography: 14px / 400
    hover: 'parent LI bottom border 4px solid #064162'
    pressed: 'parent LI bottom border 4px solid #064162'
    use: 'Category link 時尚潮流, transparent on white #ffffff. Text stays unchanged. Keyboard focus produced no computed change within scope.'
  login-secondary:
    type: button
    textColor: '#39393e'
    rounded: 0px
    height: 44px
    width: 94.7px
    padding: 6px
    typography: 14px / 400
    hover: 'label and child span border #2e90b7'
    pressed: 'label and child span border #10567b'
    use: 'Header action link 登入/註冊, transparent over white #ffffff; outer target is measured. Child span is 83x32px with a 1px #39393e border. Keyboard focus unmeasured.'
  product-card:
    type: card
    textColor: '#ffffff'
    rounded: 2px
    height: 280px
    width: 280px
    padding: 0px
    typography: 16px / 500
    hover: image scale 1.05; overlay opacity 0 to 1; arrow opacity 0 to 1 and translateX -20px to 0; anchor underline
    pressed: same measured changes as hover
    use: 'Product-image link, transparent on white #ffffff. Text colour and font describe its title child, revealed over a gradient on hover; anchor itself is #2e90b7 at 13px/400. No computed keyboard focus change within scope.'
---

# Design System Inspiration of Pinkoi

## Overview

### Visual Theme & Atmosphere

Pinkoi is a design marketplace founded in Taipei in August 2011. Its About page connects design with personal style, cultural expression and the artisan spirit. It now describes a two-sided platform combining cross-border commerce with a Lifestyle AI Model, designer SaaS services and a Retail Media Network. The consumer product presents design goods through themed collections, search and category navigation. [About Pinkoi](https://www.pinkoi.com/about)

The identity combines rounded arcs with angled cuts in its wordmark. Pinkoi explicitly connects that construction with inclusion and respect for individuality. Its slogan is **“Design the way you are.”** The brand refresh introduced new colours and a logo intended to make the brand more neutral, minimal and international. The anniversary page's HTML description names **Pinkoi Navy** and **Pinkoi Salmon** as core identity colours validated with the Pantone Color Institute; it supplies no numeric colour specification used here. [Brand refresh](https://www.pinkoi.com/event/brandRefresh), [anniversary page](https://en.pinkoi.com/topic/pantone-en)

The measured homepage is the Traditional Chinese Taiwan edition (`www.pinkoi.com/`, HTML `lang="zh-Hant"`). White surfaces, compact dark navigation and a deep blue search action frame large product photographs. The search field and its submit button form a single 40px-high object with complementary corners. Campaign product tiles reveal a gradient-backed title and an arrow on hover. These details provide specific construction guidance beyond a generic card recipe.

#### Primary tasks

Search for design goods; browse categories and themed collections; follow product links; find seller information and the app download. These are visible homepage routes, rather than inferred buyer habits.

### Brand Narrative

The three co-founders are Peter Yen (顏君庭), CEO; Mike Lee (李讓), chief product and technology officer; and Maibelle Lin (林怡君). Pinkoi's team page describes Peter's seven years in Silicon Valley, his work at Yahoo's global headquarters on global products including Yahoo Answers, and frequent market visits that helped seed Pinkoi. It describes Mike's technical leadership, earlier websites/services and development of the Lifestyle AI Model; he completed university and postgraduate studies at National Chiao Tung University. Maibelle worked as a senior designer at Silicon Valley startups across interaction, user experience and interface design. [Team](https://www.pinkoi.com/about/team)

The homepage HTML references the footer wordmark asset `pinkoi_logo_2019.svg`. The filename is observed; the brand page's explanation, rather than that date-like filename, supplies the logo rationale.

The shop agreement distinguishes original design, authorised sale and vintage categories. It does not support describing every listing as a small maker's own creation. [Shop agreement](https://cdn04.pinkoi.com/pinkoi.site/panel/start/20241202/Pinkoi_Shop_Agreement_zh_TW_20241202.pdf)

The About page records the English website launch in its 2015 milestones and lists Traditional Chinese, Simplified Chinese, English, Japanese and Thai. It currently reports 6.25 million members, more than 50,000 active shops, shops from 77 countries/regions and sales to 150 countries. These are Pinkoi's published figures. The two opened language editions disagree on cross-border share, so no single percentage is adopted. [About](https://en.pinkoi.com/about), [Taiwan edition](https://www.pinkoi.com/about)

The same source names a presence in Shanghai, Hong Kong, Tokyo and Bangkok. The design reference therefore preserves the documented locale stacks, while its live geometry and state claims stay tied to the Taiwan homepage.

### Principles

Pinkoi's stated identity centres on individuality, inclusion and using design to express one's way of living. The logo explanation and brand-refresh page support those values. The current About page explicitly connects commerce with support for designers through SaaS and RMN. [Brand refresh](https://www.pinkoi.com/event/brandRefresh), [About](https://www.pinkoi.com/about)

For construction, preserve the observed distinctions: blue search action, border-led category feedback, image-led collections, a gradient title reveal, and component-specific corners. These are measured patterns, not an invented corporate rulebook.

### Personas

No behavioural personas were verified. The current About page identifies its core customers as ages 25–44; the prior fictional names, spend and visit frequencies are not adopted.

## Colors

### Rendered colours

The survey counted 1,584 elements. Counts are occurrences of computed properties, not percentages of screen area.

| Role or observed use | Value | Evidence |
|---|---|---|
| Primary search action | `#10567b` | Submit rest; input focus border and inset shadow |
| Primary hover | `#064162` | Search hover; category parent underline on hover and press |
| Primary pressed | `#003354` | Search submit pressed |
| Link blue | `#2e90b7` | Product link's own colour; login hover label and border |
| Canvas and surface | `#ffffff` | 28 background occurrences; search field background |
| Soft surface | `#f7f7f8` | One background occurrence; secondary-button hover declaration |
| Light neutral | `#e5e5e6` | Four background occurrences; present in production border declarations |
| Input border | `#d3d3d5` | Search field's top, bottom and left edges at rest |
| UI ink | `#39393e` | Search, navigation and login labels; 47 text occurrences |
| Foreground | `#202026` | Three paragraph occurrences; 28 text occurrences overall |
| Muted paragraph ink | `#66666a` | Three paragraph occurrences; app-link border |
| Coral | `#f16c5d` | One rendered text occurrence; declared purchase-button base |
| On-primary | `#ffffff` | Search icon; filled semantic button declarations |

Paragraph ink was tied between `#202026` and `#66666a`, three paragraphs each. The stylesheet's `body` declaration uses `#39393e`; that declaration does not make every paragraph the same colour. The foreground role records the darker paragraph sample.

### Production CSS palette retained as declarations

The core stylesheet contains the neutral sequence `#f7f7f8`, `#eeeeef`, `#e5e5e6`, `#d3d3d5`, `#bfbfc1`, `#a8a8ab`, `#929295`, `#7c7c80`, `#66666a`, `#515156`, `#39393e`, `#202026`. Specific declared uses include annotation text `#929295`, an unfollow label/border `#7c7c80`, notification tags `#515156`, and struck-through original prices `#a8a8ab` or `#bfbfc1`. These are selector-level facts, not a measured global token ramp.

| Button class suffix | Rest background / text | Hover background | Active background |
|---|---|---|---|
| `--primary`, `--login` | `#10567b` / `#ffffff` | `#064162` | `#003354` |
| `--secondary` | `#ffffff` / `#39393e` | `#f7f7f8` | `#eeeeef` |
| `--purchase` | `#f16c5d` / `#ffffff` | `#e56051` | `#da5648` |
| `--danger` | `#e63349` / `#ffffff` | `#d72136` | `#c41428` |
| `--green` | `#2cac97` / `#ffffff` | `#289c8a` | `#289c8a` |

This table describes `.m-br-button` CSS rules, not live state measurements of additional controls. Filled primary, login, purchase, danger and green variants match their 1px border to the fill. Secondary keeps a `#a8a8ab` border. Plain primary is transparent with `#2e90b7` text at rest/visited, `#10567b` on hover and `#064162` on active over `#f7f7f8`. Plain danger uses `#f86173`, then `#e63349`, then `#d72136` over `#f7f7f8`.

Coral is not exclusive to purchase: `#f16c5d` also appears in selected view icons, `.g-note-secondary b` and the spinner border. Error red also appears in `.s-card-badge.hot` and a ready-to-buy feature badge. Preserve the selector's meaning when choosing a colour.

## Typography

### Evidence classes

- **Official product use:** no opened typography document names a product typeface.
- **Live-loaded:** the census returned `document.fonts` loaded faces `[]`. There is no verified loaded family to publish or render as a specimen.
- **Official distributed assets:** no font asset or licence was established from the opened sources.
- **Declared-only:** body and button computed stacks name `"Helvetica Neue", Helvetica, Arial, "PingFang TC", "Heiti TC", "Microsoft JhengHei", sans-serif`. The homepage had no sampled H1. These declarations do not identify the actual rendered face.
- **Unresolved:** the physical fonts selected for Latin and Han characters. Substitute: none chosen.

The production core CSS retains these locale declarations. They are CSS evidence, with no font specimens:

| Selector | Declared family stack |
|---|---|
| `.s-en body` | `Helvetica Neue, Helvetica, Arial, Verdana, sans-serif` |
| `.s-zh_TW body` | `Helvetica Neue, Helvetica, Arial, PingFang TC, Heiti TC, Microsoft JhengHei, sans-serif` |
| `.s-zh_CN body` | `Helvetica Neue, Helvetica, Arial, PingFang SC, Heiti SC, Microsoft YaHei, sans-serif` |
| `.s-ja body` | `Helvetica Neue, Helvetica, Arial, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, Meiryo, PingFang TC, sans-serif` |
| `.s-th body` | `Helvetica Neue, Helvetica, Arial, Thonburi, Noto Sans Thai, Droid Sans Thai, sans-serif` |

### Measured sizes and declared scale

The measured category link 時尚潮流, login and search input are 14px/400; input and category navigation have 20px line height. The survey's 所有分類 navigation link is 14px/700. Footer links are 13px/400. The app link is 14px/500 with 1px letter spacing. The revealed product title is 16px/500 and white. Search submit is icon-only: text metrics are 0px/400 and its SVG is 24px square.

The core sets body size to 13px and a base H1–H6 rule to 13px/700. Its product-card title rule is 14px/700, price 14px/500 in `#003354`, and original price 14px with a line-through. The utilities declare sizes 12, 13, 14, 16, 18, 22, 24, 26 and 30px, generally at line height 1.4, and weights 400, 500, 600 and 700. Utility values alone do not establish which heading receives each size.

The current core contains 35 literal `font-weight:700` declarations, one `700!important`, 14 `400`, 12 `500` and two `600`. These are source counts, not rendered-element counts. Letter spacing is not universally absent: the app link uses 1px, and several button rules declare spacing. Italic also occurs on product/store metadata; no exclusive quotation policy was established.

## Layout

The homepage survey places its main content across approximately 1,200px. The campaign collection pairs a 588px-wide feature with two columns of 280px product tiles. Production CSS confirms a two-column product grid with a 24px gap; the large feature sticks below a 62px heading region, has `height:calc(100dvh - 62px)` and caps at 900px. This is the measured homepage arrangement; the six-column `.m-card-product` rule remains a separate available recipe.

The padding utilities provide this explicit scale. These are class declarations, not root custom properties.

| Class suffix | `least` | `xs` | `s` | `m` | `l` | `xl` | `2xl` | `3xl` | `4xl` | `5xl` |
|---|---|---|---|---|---|---|---|---|---|---|
| Pixels | 2 | 4 | 6 | 10 | 14 | 20 | 24 | 36 | 48 | 64 |

Core containers include `.g-wrap` at 1,000px, `.g-wrap-base` at 940px, and `.g-wrap-expand` with max-width 1,200px, min-width 1,000px and auto horizontal margins. Preserve the difference between compact control insets and large campaign imagery.

### Responsive Behavior

Only desktop 1440×1000 was rendered. Core CSS contains conditions at max-width 767px, max-width 768px, the 768–1037px interval and min-width 1248px; header CSS includes 1199/1200px conditions. Their presence is confirmed. Mobile grid counts, drawers, bottom sheets and touch behaviour were not rendered or verified.

## Elevation & Depth

The measured search action, search input at rest, category link, login wrapper and product-image link have no box shadow. Focus on the search input uses the inset blue line already described. The product tile's arrow surface uses `rgba(0, 0, 0, 0.2) 0px 1px 1px 0px`.

The core discount-badge wrapper declares `1px 1px 2px #20202633` — 20% ink alpha. The separate core carousel arrow declares `0 1px 1px #20202633`. The pink specialty button's hover shadow is `0 .2em .2em -.1em #c83166,0 .3em #a32252,0 .5em .5em -.1em #2020261f`. Related `.m-button-*` rules use the colours below. They are CSS recipes; their chronology and current frequency were not established.

| Class | Hover fill | Mid shadow | Dark shadow |
|---|---|---|---|
| `.m-button-pink` | `#ff6299` | `#c83166` | `#a32252` |
| `.m-button-green` | `#7ec527` | `#65a40e` | `#4d9200` |
| `.m-button-gray` | `#8e9a9f` | `#66666a` | `#535c5f` |
| `.m-button-unfav` | `#eeeeef` from its base rule | `#d3d3d5` | `#d3d3d5` |

The gray active rule declares `0 1px #515156`; the favourite/unfavourite active rule declares `0 1px #d3d3d5`. The surveyed language backdrop was fixed at z-index 888888; the collection heading was sticky at z-index 10. No complete modal/toast stacking policy was verified.

## Motion & Easing

The measured submit button, category link, product link and login wrapper report `transition: all 0s ease 0s` on the control itself. The search input's raw computed transition record is `border, box-shadow, background-color 0.2s, 0.1s, 0.1s ease, ease, ease-in-out 0s, 0.1s, 0s`. Its longest reported transition was 200ms.

For the product tile, source CSS explicitly declares image `transition:transform .3s ease`, overlay `transition:opacity .3s linear`, and arrow `transition:all .3s linear`. The compared carousel ancestor's source rule declares `transition:opacity .5s ease`, consistent with the probe's 500ms longest-transition observation; that is not a 500ms image zoom. The semantic `.m-br-button` declaration remains `transition:border .1s,color .1s,background .1s`, separate from the header submit control.

No named duration scale, cubic-bezier policy, spring prohibition or reduced-motion implementation was established.

---

**Sources and capture:** Live Taiwan homepage survey and states, 2026-11-06; production core, utilities, header and homepage chunk CSS linked by that surface. First-party company, team, policy, brand-refresh and anniversary sources are linked above. Registered operator and country evidence, raw measurements, source URLs, controls and every prior claim's disposition are in `verification.md` and `report.md`.

## Components

### Measured homepage controls

| Key / control | Geometry and rest style | Measured interaction |
|---|---|---|
| `search-cta` — 搜尋 | 68×40px; radius `0px 8px 8px 0px`; padding `8px 20px`; blue `#10567b`, white `#ffffff`; no border or shadow; 0px/400 text | Hover `#064162`; pressed `#003354`. Keyboard focus adds the browser's `auto` outline. |
| `search-input` | 432×40px; radius `8px 0px 0px 8px`; padding `9px 34px 9px 14px`; white `#ffffff`, ink `#39393e`; 14px/400 | Hover unchanged within scope. Press and keyboard focus change the three visible borders from `#d3d3d5` to `#10567b`, with `inset 0 0 0 1px #10567b`. Right border remains absent. |
| `nav-fashion` — 時尚潮流 link | 150×44px; 0px radius; padding `14px 0px 10px`; transparent over white; `#39393e`, 14px/400 | Hover/press colour its parent LI's 4px bottom border `#064162`. Label colour stays unchanged. Keyboard focus has no computed change within scope. |
| `login-secondary` — 登入/註冊 action link | Outer target 94.7×44px, 0px radius, 6px padding; transparent over white; `#39393e`, 14px/400. Child span is 83×32px with a 1px `#39393e` border | Hover label and child border `#2e90b7`; pressed `#10567b`. Keyboard focus was not reached. |
| `product-card` — product image link | 280×280px; 2px radius; zero padding; transparent over white; own link colour `#2e90b7`; own font 13px/400 | Hover and press scale the image to 1.05, reveal the title overlay, and move the arrow from −20px to 0 while fading it in. Keyboard focus has no computed change within scope. |
| `app-secondary` — 下載 Pinkoi APP link | 178.6×42px; 4px radius; padding `10px 15px`; white `#ffffff`, ink `#39393e`; 1px `#66666a` border; 14px/500 | Hover/press were outside the reachable viewport; keyboard focus was not reached. Rest evidence only; excluded from machine components. |

The product link's visible title uses `#ffffff`, not the anchor's own blue. Its overlay gradient runs from transparent to `rgba(0, 0, 0, 0.5)`. The arrow sits on a 30px circular surface in `rgba(255, 255, 255, 0.8)`, with `#39393e` icon ink.

### Additional recipes confirmed in production CSS

`.m-br-button` declares 4px radius and the semantic colours in §2. Size variants are XS `4px 14px` at 14px/18px line height, SM `5px 14px` at 14px/20px, MD `9px 14px` at 14px/22px and LG `9px 14px` at 16px/22px. A surveyed locale-dialog primary button was 284×42px at 16px/400; it was not activated and is not a catalog component.

`.g-form-input` and `.g-form-textarea` declare white, a 1px `#d3d3d5` border, **2px** radius, `8px 12px` padding, 14px text and 24px line height; `.g-form-input` declares 42px height. Their CSS focus colour and inset outline are `#2e90b7`; error border/inset colour is `#e63349`. These generic field declarations differ from the measured header search field.

The separate `.m-card-product` recipe has six-column width `calc((100% - 72px) / 6)`, max-width 190px and `0 6px` margins; its square image has **2px** corners. Its title clamps to two lines. That recipe is distinct from the measured 280px homepage tile.

`.s-card-badge` declares 2px radius, `1px 4px` padding and 12px/400. Variants include `new` (`#ffedaf` / `#66666a`), `hot` (`#ffe9ec` / `#e63349`), `experience` (`#eff7fd` / `#2e90b7`), `project` (`#e5f7f4` / `#289c8a`) and `digital` (`#fc427b` / `#ffffff`). Inside `.m-card-product`, badge text becomes 13px/500. The default `.g-item-badge` background is `#ee847d`, with white 12px/700 text, `2px 0` corners and `5px 6px` child padding. The enclosing discount badge supplies its shadow. No live badge state was measured.

### States

Hover was counted only when the snapshot matched `:hover`; every successful hover and press did. The probe waited 900ms. Comparisons cover the control, its pseudo-elements, its descendants and their pseudo-elements, and three ancestor levels. The product link includes 14 descendants, two empty, SVG internals and three image/source nodes. The category link includes one descendant; the input includes none. This scope does not cover sibling menus, canvas/video pixels or cross-origin frame internals.

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Search submit | Background `#064162` | Background `#003354` | Browser `auto` outline only; no brand focus token |
| Search field | No computed change within scope | Blue border + inset shadow, with focus also present | Same blue border + inset shadow; changes disappear after blur |
| Category link | Parent underline `#064162` | Same underline | No computed change within scope |
| Product-image link | Image scale 1.05; title and arrow reveal; own link decoration becomes underline | Same measured changes | No computed change within scope |
| Login action link | Label and child border `#2e90b7` | Label and child border `#10567b` | Unmeasured: not reached within 500 Tab presses |
| App link | Unmeasured | Unmeasured | Unmeasured: not reached within 500 Tab presses |

No empty-cart, checkout, success-toast or submitted error flow was exercised. The following are retained only as CSS definitions: `.m-br-button:disabled` uses `#eeeeef` fill/border and `#bfbfc1` text; disabled `.g-form-input` uses `#eeeeef` background and `#a8a8ab` text; form errors use `#e63349` border and inset shadow; required labels add a red asterisk with 4px left margin. The core's `.m-card-product--placeholder` declares `placeholderBlink` at 1s and a `#eeeeef` text placeholder. None becomes a measured interactive component.

## Do's and Don'ts

- Build the header search as two adjoining 40px controls with complementary 8px outer corners.
- Use the measured blue progression `#10567b` → `#064162` → `#003354` for that submit action.
- Preserve the category link's parent underline rather than replacing it with a text-colour change.
- Match the component: 2px product tiles, 4px app link, split-corner search. One universal radius loses these distinctions.
- Keep font declarations separate from loaded-font evidence; no family specimen is available here.
- Treat the semantic CSS matrix as declarations. It does not establish purchase exclusivity, an app-wide motion policy or measured states for unvisited controls.

## Voice & Tone

The inspected Traditional Chinese chrome uses concise functional labels: `搜尋`, `登入/註冊`, `所有分類`, `我想在 Pinkoi 上販售` and `下載 Pinkoi APP`. The English footer retains `Sell on Pinkoi`, `Stay up to date on the latest designs` and `Download the Pinkoi app`; the homepage title positions it as Asia’s cross-border design marketplace. The About invitation `Let's work together.` welcomes collaboration and developing people's ideas. The team page ends with `Be a Pinkoist!`. These establish task labels and an invitational corporate register. No copywriting blacklist or checkout/error tone policy was verified. [English About and footer](https://en.pinkoi.com/about), [Team](https://www.pinkoi.com/about/team)

## Agent Prompt Guide

“Build the Pinkoi header search at 40px high: white 432px field with 14px/400 text, `9px 34px 9px 14px` padding and `8px 0px 0px 8px` corners; attach a 68px icon button with `0px 8px 8px 0px` corners. Use `#10567b`, hover `#064162`, pressed `#003354`, and a white 24px search icon. Focus the field with a `#10567b` border and 1px inset shadow.”

“Build a 280px square product-image link with 2px corners. On hover, scale the image to 1.05 and reveal a transparent-to-50%-black gradient, white 16px/500 product title and a circular arrow. Move the arrow from −20px to zero while fading it in. Keep the font family unresolved.”

“Use the category label at 14px/400 in `#39393e`. Hover changes its parent LI's bottom border to 4px solid `#064162`; it does not recolour the label.”

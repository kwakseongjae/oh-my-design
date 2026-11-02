---
name: SBI Securities
colors:
  primary: '#092987'
  foreground: '#092987'
  action: '#1061d7'
  sign-up: '#e5004c'
  focus-ring: '#5e97ef'
  canvas: '#ffffff'
  surface-muted: '#eaf0f6'
  surface-hover: '#f5f7fa'
  border: '#c3cddb'
  label-muted: '#5c687a'
typography:
  button:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 16px
    use: Measured 40px main account-opening and login links; family unresolved.
  navigation:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 16px
    use: Measured primary NISA navigation link.
  secondary:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    use: Measured 32px outlined 詳しく見る link.
  search:
    fontSize: 13.3333px
    fontWeight: 400
    lineHeight: 13.3333px
    use: Measured header site-search input; retained as typography only.
rounded:
  none: 0px
  navigation: 4px
  search: 5px
  action: 6px
components:
  account-open:
    type: button
    backgroundColor: '#e5004c'
    textColor: '#ffffff'
    border: '1px solid #e5004c'
    rounded: 6px
    height: 40px
    padding: 2px 8px
    typography: 16px / 700
    hover: opacity 0.6; computed background and foreground unchanged
    focus: 'outline 2px solid #5e97ef; outline-offset 1px'
    use: Main 口座開設 link in the white login panel; 223.6px measured width. Hover snapshot matched :hover; hover crop lost the match. Pressed unmeasured.
  login:
    type: button
    backgroundColor: '#092987'
    textColor: '#ffffff'
    border: '1px solid #092987'
    rounded: 6px
    height: 40px
    padding: 2px 8px
    typography: 16px / 700
    hover: opacity 0.6; computed background and foreground unchanged
    focus: 'outline 2px solid #5e97ef; outline-offset 1px'
    use: Main ログイン link in the white login panel; 223.6px measured width. Hover snapshot matched :hover; hover crop lost the match. Pressed unmeasured.
  detail:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#092987'
    border: '1px solid #092987'
    rounded: 6px
    height: 32px
    padding: 2px 8px
    typography: 14px / 700
    hover: opacity 0.6; computed background and foreground unchanged
    focus: 'outline 2px solid #5e97ef; outline-offset 1px'
    use: Outlined 詳しく見る link in the SBIマネーアシスタント sidebar card; 149px measured width. Hover crop lost :hover after the valid style snapshot. Pressed unmeasured.
  nav-nisa:
    type: button
    textColor: '#ffffff'
    rounded: 4px
    height: 36px
    padding: 0px 12px
    typography: 16px / 700
    hover: 'background #f5f7fa; foreground #092987; parent list item receives the same background'
    focus: 'outline 2px solid #5e97ef; outline-offset -2px'
    use: 'NISA navigation link, #nisa-global-nav; transparent at rest on the #092987 navigation bar, 61.9px wide. Focus palette changes persisted after blur and are excluded; only the disappearing outline is recorded. Pressed unmeasured.'
  topic-nisa:
    type: card
    textColor: '#092987'
    rounded: 0px
    height: 66px
    padding: 0px
    typography: 14px / 400
    hover: 'visible paragraph opacity 0.6 and underline solid #092987'
    focus: 'outline 2px solid #5e97ef; outline-offset 1px'
    use: NISAもっとおトクにポイントたまる！新NISAやるならSBI証券 topic link, 378px wide, transparent on white. fg describes its visible paragraph; font is the anchor's computed 14px/400. The badge and wrapper have separate foregrounds. Pressed unmeasured.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of SBI Securities

## Overview

### Visual Theme & Atmosphere

SBI Securities (SBI証券) provides online securities trading alongside wholesale and wealth-management services. Its corporate site identifies **「顧客中心主義」**, putting customers' interests first, as its management philosophy. The official history records the start of internet trading in 1999 and the change from SBI E*TRADE Securities to SBI Securities in 2008. Its legal entity is **株式会社SBI証券**, based in Tokyo. [Company](https://www.sbisec.co.jp/company/), [history and registered office](https://www.sbisec.co.jp/company/about/profile/).

The measured homepage expresses that service breadth through a white canvas, navy product navigation, compact search fields and many direct text links. Bright pink identifies account opening; navy identifies login. The hero promotion sits beside a separate login/account panel, with topic links below. Small category stickers and thin blue-grey borders organise the information without giving every item a raised card. These are observations of the public desktop homepage, rather than a published brand manifesto.

The official renewal page describes improvements to usability and multiple-device access, including further adjustments informed by customer feedback. Its roadmap, explicitly labelled **November 2025**, dates the homepage redesign to 6 July 2024 and the second navigation renewal to 7 August 2025. It says the latter narrows and reorders recommended products and services for beginners. A later timeline entry lists 28 February 2026 for the second renewal of the accumulation-investment app, renamed 「投信つみたてアプリ」. This reference reads the live homepage in the context of that documented, staged renewal; app designs supply narrative context only. [Renewal roadmap](https://go.sbisec.co.jp/lp/sbi_renewal_2024.html).

The measured homepage is the Japanese-language edition at `www.sbisec.co.jp/ETGate/` (`lang="ja"`), reached from the supplied root URL; no Korean edition redirect occurred.

Primary tasks visible on this surface are finding a security, searching site content, navigating investment products, logging in and opening an account. Only their public controls were inspected.

### Brand Narrative

The official history connects today's SBI Securities with the launch of internet trading in 1999 and the SBI Securities name adopted in 2008. Its corporate philosophy puts customer interests first. The renewal programme applies a stated usability and multiple-device-access agenda to a service with many products and entry points. The measured homepage retains that breadth through search and layered navigation while distinguishing the two account tasks with navy and pink. [History](https://www.sbisec.co.jp/company/about/profile/), [philosophy](https://www.sbisec.co.jp/company/about/vision/), [renewal](https://go.sbisec.co.jp/lp/sbi_renewal_2024.html).

### Principles

- **Customer interests first:** the company's stated management philosophy, 「顧客中心主義」.
- **Clear information:** its operating policy names clear provision of important information.
- **Iterative usability:** the official renewal page says released screens are adjusted in response to customer feedback.

For implementation, the measured controls support consistent action geometry, differentiated account-task colours and explicit keyboard outlines. These are reference recommendations derived from the capture, not additional company-authored principles.

### Personas

No formal personas were verified; the official navigation-renewal description explicitly discusses beginners.

## Colors

The census found 619 computed root custom properties. Of these, 618 names occur in the homepage-linked first-party `seeds/design-system/1.4.1/legacy.css`; the remaining `--scrollbar-width` is a layout measurement. The large groups are `--global-*` (225), `--semantics-*` (43) and `--ui-*` (333). Additional declared widget properties are excluded from the palette.

| Reference role | Value | Opened or measured evidence |
|---|---|---|
| Primary | `#092987` | `--semantics-standard-default`; main login fill and primary navigation backdrop |
| Foreground | `#092987` | Most frequent paragraph ink: 12 occurrences; also the visible NISA topic headline |
| Action | `#1061d7` | `--ui-common-action-text-default`; active Home navigation fill in the survey |
| Sign-up | `#e5004c` | `--semantics-sign-up-1-default`; main account-opening fill and border |
| Focus ring | `#5e97ef` | `--ui-common-focus-ring-default`; authored outlines under real Tab focus |
| Canvas | `#ffffff` | `--ui-header-background-default`; main login panel and outlined action fill |
| Muted surface | `#eaf0f6` | `--ui-sticker-weak-background-default`; NISA sticker fill and border |
| Hover surface | `#f5f7fa` | `--ui-main-navigation-background-hover-1`; measured NISA navigation hover |
| Border | `#c3cddb` | `--ui-common-border-default`; search field and login-panel borders |
| Muted label | `#5c687a` | `--ui-sticker-weak-text-default`; visible NISA sticker text |

Navy is the dominant paragraph colour on this particular homepage, whose paragraphs include promotional link labels. Three paragraphs instead use `rgba(5, 15, 26, 0.95)`, consistent with `--ui-common-main-text-default: #050f1af2`. Preserve that alpha value where relevant; it is not replaced with an invented opaque foreground token.

The rendered background census is led by `#eaf0f6` (29), `#e5004c` (17) and `#ffffff` (7), excluding transparent entries. Text is led by `#092987` (170). Counts describe this capture, not all SBI products.

## Typography

**Official product-use documentation.** No opened first-party writing names a product text face. A CSS declaration or distributed asset is not treated as such a statement.

**Live-loaded.** The census's loaded faces are `slc-font-logo-icon normal normal`, `slc-font-icon normal normal` and `font-icon normal normal`. These are icon faces, not a verified body-text family. The first two are embedded WOFF2 data URLs in the opened layout stylesheet. The third is distributed in the opened design-system stylesheet with embedded TrueType, WOFF, WOFF2 and SVG sources; the capture does not identify which source format was used.

**Official distributed assets.** The homepage-linked design-system CSS embeds `Roboto-font` at weights 400 and 700 as TrueType data URLs, restricted by `unicode-range: U+0021-007E`. This proves distribution of that Latin-range asset. `font-logo-icon` is also distributed there. Neither appeared in the census's loaded list, so neither receives a specimen.

**Declared-only.** The body starts with `Roboto-font`, followed by Japanese and other fallback names; the button declaration additionally includes `Noto Sans JP`. The root properties `--web-font-family-systems` and `--mobile-font-family-systems` both say `Noto Sans JP`, while the properties named `*-font-family-monospaced` say `Roboto`. These declarations do not prove loading. The complete raw stacks are retained in the verification notes; none is promoted to a text-family token or specimen.

**Unresolved.** The actual rendered text face, including Japanese glyph selection, is unresolved in this capture. Typography metrics below remain usable independently. **Substitute: none chosen.**

| Measured role | Size / weight | Line height |
|---|---|---|
| Main account-opening and login links | 16px / 700 | 16px |
| Primary NISA navigation | 16px / 700 | 16px |
| Outlined sidebar action | 14px / 700 | 20px |
| Header site-search input | 13.3333px / 400 | 13.3333px |
| NISA topic anchor | 14px / 400 | 21px |

The topic anchor contains separately styled content: its NISA sticker is 12px/700, and the visible headline is a paragraph with the `seeds-font-bold` class. The anchor's metrics should not be applied indiscriminately to every child. No heading scale was measured; the census returned no H1 family.

## Layout

The 1440×1000 viewport shows a white utility header with instrument search, site search and account shortcuts. A full-width navy product-navigation band sits above a second, white link row. A bordered security notice leads into the hero and login/account panel. Topics follow as image-and-text links, while narrower sidebar panels hold additional actions.

The survey measures the hero link area at 700×304px; the two main account actions are 223.6px wide. The first NISA topic anchor is 378px wide with a 59×59px image and an adjacent 311px-wide text region. Those measurements describe the captured desktop arrangement. The declared footer container width is 1280px (`--slc-container-width`); it is not asserted as the width of every section.

Spacing evidence is local: main action padding 2px 8px, primary navigation padding 0px 12px, and a 28px left inset in site search. No general spacing scale is inferred from class-name suffixes.

### Responsive Behavior

The official roadmap documents a shared smartphone/desktop site; only the 1440×1000 desktop viewport was measured here. Root screen declarations are 320px, 576px, 769px, 980px and 1280px; their layout transitions and mobile states were not exercised.

## Elevation & Depth

All three measured action links have `rgba(0, 0, 0, 0.25) 0px 1px 4px 0px` box shadow. The main white login panel uses a 1px `#c3cddb` border and no box shadow. The measured navigation, topic anchor and search input also have no shadow.

The root button-shadow parts agree with the action observations: x 0px, y 1px, blur 4px, spread 0px, colour `#00000040`. A separate declared card-shadow colour is `#0000001a`; its declaration does not establish use on the measured login panel.

## Motion & Easing

All six measured controls report the computed transition `all 0s ease 0s`. The recorded state changes therefore provide no nonzero transition-duration token. Animation timing, carousel motion and reduced-motion behaviour were not measured.

---

First-party narrative sources: [company](https://www.sbisec.co.jp/company/), [company profile/history](https://www.sbisec.co.jp/company/about/profile/), [operating policy](https://www.sbisec.co.jp/company/about/policy/), [philosophy](https://www.sbisec.co.jp/company/about/vision/), [renewal roadmap](https://go.sbisec.co.jp/lp/sbi_renewal_2024.html). Country evidence: the [commercial legal notice](https://www.sbisec.co.jp/ETGate/WPLETmgR001Control?OutSide=on&getFlg=on&burl=search_gold&cat1=gold&cat2=info&dir=info&file=gold_tokutei.html) names 株式会社SBI証券 and 東京都港区六本木1-6-1. Technical evidence: homepage survey and state capture, 2026-11-03 Asia/Seoul; linked [design-system CSS](https://sbisec.akamaized.net/sbisec/seeds/design-system/1.4.1/legacy.css) and [layout CSS](https://sbisec.akamaized.net/sbisec/seeds/layout/1.8.2/css/style.css). Full raw measurements, controls, exclusions and limitations are in the accompanying verification notes and report.

## Components

These are measurements of specific product controls. Hover snapshots matched `:hover`; subsequent hover crops lost that match, so the crops do not independently verify hover appearance. Focus was reached through a real Tab walk. Pressed states are unmeasured.

| Control | Rest identity | Measured changes |
|---|---|---|
| Main **口座開設** link | 223.6×40px, 6px radius, 2px 8px padding, 16px/700; `#e5004c` fill/border, `#ffffff` label | Hover: opacity 1→0.6, computed colours unchanged. Focus: 2px solid `#5e97ef`, offset 1px. |
| Main **ログイン** link | 223.6×40px, 6px radius, 2px 8px padding, 16px/700; `#092987` fill/border, `#ffffff` label | Same measured opacity change and focus outline as account opening. |
| Sidebar **詳しく見る** link | 149×32px, 6px radius, 2px 8px padding, 14px/700; `#ffffff` fill, `#092987` label/border | Hover: opacity 1→0.6. Focus: 2px solid `#5e97ef`, offset 1px. |
| Navigation **NISA**, `#nisa-global-nav` | 61.9×36px, 4px radius, 0px 12px padding, 16px/700; transparent over `#092987`, `#ffffff` label | Hover: `#f5f7fa` fill and `#092987` label; immediate parent also gains that fill. Focus-only outline: 2px solid `#5e97ef`, offset -2px. |
| **NISAもっとおトクにポイントたまる！新NISAやるならSBI証券** topic link | 378×66px anchor, 0px radius/padding, 14px/400; transparent on white, visible headline `#092987` | Hover: headline opacity 1→0.6 and `underline solid #092987`. Focus: 2px solid `#5e97ef`, offset 1px. |

The topic anchor's own inherited foreground changes from `#1f3c9c` to `#cc0066` on hover. Its visible headline retains `#092987`; the muted sticker retains `#5c687a`. The card component's foreground refers to that visible headline, not the inherited wrapper colour. Its 59×59px thumbnail does not change in the recorded comparison.

The header search input, `input#site-search`, is 160×32px, has a 5px radius, 4px 0px 4px 28px padding, a 1px `#c3cddb` border and computed `#000000` foreground. It is transparent over white. Hover and keyboard focus produced no changes within the probe's comparison scope: self and pseudo-elements, no descendants, and three ancestor levels. It remains a prose observation rather than a harvested interactive component.

Use 6px corners for these action links, 4px for this navigation link and 0px for the topic anchor. The 5px search radius is a separate observed value, not a universal rounding scale.

### States

The main account-opening link, main login link and outlined sidebar link reduce opacity to 0.6 on hover. Their computed background, foreground and border colours remain unchanged. The NISA topic headline also reduces opacity to 0.6 and gains an underline. The NISA navigation link gains a light surface and navy text.

Account opening, login, the sidebar action and the topic anchor each show a 2px solid `#5e97ef` keyboard outline at 1px offset, which disappears after blur. The navigation outline uses -2px offset. Navigation background and text changes seen during focus persisted after blur; they are retained only as raw observations and are not focus tokens.

All six pressed readings are **UNMEASURED**: `:active` did not match while the mouse button was down. No pressed or disabled state is declared. No measured outline uses the browser's `auto` style. The search input's unchanged hover/focus readings are limited to the recorded comparison scope and do not establish absence of effects in sibling elements or other uninspected rendering surfaces.

## Do's and Don'ts

- Pair the measured navy login link with the pink account-opening link; both use white labels and the same 40px geometry.
- Reproduce the measured whole-control opacity change for these action links and the authored blue focus outline.
- Keep topic headlines distinct from category stickers and inherited anchor colours.
- Preserve the different 32px outlined action and 36px navigation dimensions where those patterns are being reproduced.
- Do not turn declared hover colours into observed component states, or expand the measured corner values into an assumed global scale.
- Do not assign a text family from the fallback stack or render a font specimen without loading evidence.

## Voice & Tone

Visible navigation and actions use direct Japanese task labels, including 「銘柄検索」, 「サイト内検索」, 「ログイン」 and 「口座開設」. The official policy explicitly calls for clear presentation of important information. Treat that as a documented communication aim; no broader brand-voice manual was verified. [Operating policy](https://www.sbisec.co.jp/company/about/policy/).

## Agent Prompt Guide

“Build a public securities homepage with a white canvas, `#092987` product-navigation bar and compact search fields. Place navy login and `#e5004c` account-opening links beside the hero. Make those links 40px high with 6px corners, 2px 8px padding and 16px/700 labels; hover sets opacity to 0.6. Keyboard focus adds a 2px solid `#5e97ef` outline at 1px offset. Use restrained `#c3cddb` panel borders and `#eaf0f6` category stickers with `#5c687a` labels. Keep the text face unresolved until it is separately verified.”

This prompt reproduces the captured public homepage patterns; it does not specify authenticated trading screens.

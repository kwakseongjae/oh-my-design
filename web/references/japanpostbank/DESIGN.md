---
name: Japan Post Bank
colors:
  primary: '#009900'
  account-action: '#009800'
  direct-login: '#f66300'
  foreground: '#333333'
  service-label: '#505050'
  canvas: '#ffffff'
  account-hover: '#e5f7cd'
  navigation-hover: '#1d6414'
  navigation-hover-label: '#fff662'
  notice: '#ff3333'
typography:
  account-label:
    fontSize: 16.8px
    fontWeight: 700
    use: Visible span labels of the two account-opening links; the anchor itself is weight 400.
  navigation-label:
    fontSize: 15.96px
    fontWeight: 700
    use: Visible span of the measured Stores/ATM navigation link; anchor line-height 20.748px.
  login-label:
    fontSize: 16.94px
    fontWeight: 700
    use: Visible span of the hero Direct login link; anchor itself is 15.4px/400.
  service-label:
    fontSize: 14px
    fontWeight: 400
    use: Visible label of the Direct service card.
  search-input:
    fontSize: 14px
    fontWeight: 400
    use: Header search input; no font-family token is verified.
rounded:
  square: 0px
  action: 3px
  service-card: 5px
components:
  open-account:
    type: button
    backgroundColor: '#009800'
    textColor: '#ffffff'
    border: '#009800'
    rounded: 3px
    height: 52.8px
    padding: 16px
    typography: 16.8px / 700
    hover: 'bg #e5f7cd; visible label #009900; span background image switches from kouza_kaisetu.png to kouza_kaisetu_on.png'
    pressed: 'bg #e5f7cd; visible label #009900; same span image switch as hover'
    use: 総合口座開設 — an account-opening link, 460px wide in the captured desktop layout, with a 2px border. Font records the visible span; anchor weight is 400. Raw observations with the consent notice still open.
  invest-account:
    type: button
    textColor: '#009800'
    border: '#009800'
    rounded: 3px
    height: 52.8px
    padding: 16px
    typography: 16.8px / 700
    hover: 'bg #e5f7cd'
    pressed: 'bg #e5f7cd'
    use: 投資信託口座開設 — an outlined link with a transparent background on the measured white canvas, 460px wide and a 2px border. Font records the visible span; anchor weight is 400. Raw observations with the consent notice still open.
  direct-login:
    type: button
    backgroundColor: '#f66300'
    textColor: '#ffffff'
    rounded: 3px
    height: 32.9px
    padding: 0px
    typography: 16.94px / 700
    hover: anchor opacity 0.7; visible span remains white
    pressed: anchor opacity 0.7; visible span remains white
    use: ログイン — the 200px-wide hero Direct login link, not the smaller header link. Color and font record the visible span; anchor color is separately documented in the body. Raw observations with the consent notice still open.
  nav-atm:
    type: button
    backgroundColor: '#009900'
    textColor: '#ffffff'
    rounded: 0px
    height: 64px
    padding: 12px
    typography: 15.96px / 700
    hover: 'bg #1d6414; visible label #fff662'
    pressed: 'bg #1d6414; visible label #fff662'
    use: 店舗・ATM — the 120px-wide navigation link. Font records its bold span; anchor weight is 400. Raw observations with the consent notice still open.
  direct-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#505050'
    rounded: 5px
    height: 130.4px
    padding: 73px 7px 7px
    typography: 14px / 400
    hover: containing li#service_direct opacity 0.7; anchor colors unchanged
    pressed: containing li#service_direct opacity 0.7; anchor colors unchanged
    use: ゆうちょダイレクト — a 146px-wide service-card link on the green services panel. Opacity belongs to its li wrapper. Raw observations with the consent notice still open.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Japan Post Bank

## Overview

### Visual Theme & Atmosphere

Japan Post Bank (ゆうちょ銀行) describes its business as comprehensive financial services for individual customers through Japan's nationwide post-office network. Its corporate profile dates establishment to 1 September 2006; its history records the bank's opening under the present name in October 2007 and the start of postal savings in May 1875. [Company introduction](https://www.jp-bank.japanpost.jp/aboutus/abt_index.html), [company profile](https://www.jp-bank.japanpost.jp/aboutus/company/outline/abt_cmp_ol_profile.html), [history](https://www.jp-bank.japanpost.jp/aboutus/company/outline/abt_cmp_ol_history.html).

The homepage makes green a continuous organizing surface: the JP Bank header, product navigation and service grid surround white content and icon cards. The measured navigation green is `#009900`; the account-opening action uses the slightly different `#009800`. Orange `#f66300` identifies the hero Direct login link. Prominent red notices sit above and below the promotional area. These are observations of the live homepage, rather than published color specifications.

Its current brand communication adds personal aspiration to that practical banking surface. The official Shohei Ohtani ambassador site records its launch on 14 July 2026 under “夢を身近に。” and connects individual dreams with the bank's post-office presence. The captured homepage includes an Ohtani promotional slide beside the Direct banking controls. [Official ambassador site](https://www.jp-bank.japanpost.jp/brand/ambassador/dreams/index.html).

Primary tasks visible on the homepage are Direct login, account opening, finding stores and ATMs, browsing banking services, and reaching procedures and notices. The measured page stayed at `https://www.jp-bank.japanpost.jp/`, with HTML `lang="ja"`.

### Brand Narrative

The bank's stated ambition is to be familiar and trusted, guided by customers' voices. Its history places the present company within a longer postal-savings service, while the 2026 ambassador campaign connects that local presence with individual dreams. [Management philosophy](https://www.jp-bank.japanpost.jp/aboutus/company/philosophy/abt_cmp_ph_mission.html), [history](https://www.jp-bank.japanpost.jp/aboutus/company/outline/abt_cmp_ol_history.html), [ambassador site](https://www.jp-bank.japanpost.jp/brand/ambassador/dreams/index.html).

The Japan Post Group identity page lists JP Bank among its corporate brand marks. Its explanation of the group symbol assigns “J” to customers across Japan and “P” to the group, expressing the continued provision of universal services. That page supports the mark's context; its separate website's interface styles do not supply this reference's tokens. [Group identity](https://www.japanpost.jp/group/about/identity/).

### Principles

The bank's published management philosophy names four commitments: “信頼” (trust), “変革” (transformation), “効率” (efficiency), and “専門性” (expertise). It connects transformation with customer voices and environmental change, efficiency with customer-oriented services and speed, and expertise with continued improvement of service capability. These are company commitments, not an inferred design-principles document. [Official philosophy](https://www.jp-bank.japanpost.jp/aboutus/company/philosophy/abt_cmp_ph_mission.html).

### Personas

No verified persona research was found in the opened sources.

## Colors

The live census found no computed custom properties on `:root`. The following names are catalog roles for measured values, not names claimed to exist in the bank's CSS.

| Role | Value | Measured evidence |
|---|---|---|
| Primary navigation | `#009900` | “店舗・ATM” link background at rest |
| Account action | `#009800` | “総合口座開設” background and border; investment-account link text and border |
| Direct login | `#f66300` | Hero “ログイン” link background |
| Foreground | `#333333` | Paragraph ink, 23 sampled `<p>` elements |
| Service label | `#505050` | Direct service-card label |
| Canvas / inverse label | `#ffffff` | Service-card background and the visible labels on filled actions |
| Account hover | `#e5f7cd` | Both account-opening links on hover and pointer press |
| Navigation hover | `#1d6414` | “店舗・ATM” background on hover and pointer press |
| Navigation hover label | `#fff662` | The same link's visible label on hover and pointer press |
| Notice | `#ff3333` | Homepage notice links, including the store/ATM-search maintenance notice |

The header search input is `#ffffff` with `#000000` entered-text color and a `#cccccc` border on its top, bottom and left sides; the right border is absent. The login anchor's own inherited color is `#0000ff` at rest and `#e3442a` on hover/press, while its visible child label remains `#ffffff`. Those anchor colors are not used as the login label palette.

Four `--wovn-*` declarations belong to the translation widget. Five other declarations are scoped to `:host` / `:lang(ja)` without verified bank ownership. All nine are excluded. One WOVN stylesheet was unreadable to the census; no complete cross-origin token inventory is claimed.

## Typography

- **Official product use:** no opened first-party source specifies a product typeface.
- **Live-loaded:** the census reports `document.fonts` loaded faces as `[]` and accessible `@font-face` records as `[]`. No downloadable face or live specimen is verified.
- **Official distributed assets:** no font assets were established from the opened sources.
- **Declared-only:** body and h1 both declare `メイリオ, Meiryo, "Meiryo UI", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "ＭＳ Ｐゴシック", "MS PGothic", Helvetica, Arial, sans-serif`. The sampled button declares `Arial`; the search input also reports `Arial`. These declarations do not establish which installed face rendered.
- **Unresolved:** the actual local face used for Japanese and Latin glyphs. No family token or font specimen is supplied. **Substitute: none chosen.**

Preserve the verified metrics independently of the missing family. Both account links have 16.8px/700 visible span labels; their anchors are 16.8px/400 with a 16.8px computed line height. The navigation label is 15.96px/700; its anchor is weight 400 with 20.748px line height. The hero login label is 16.94px/700, inside a 15.4px/400 anchor. The service-card label and search input are 14px/400. No heading-size scale was measured.

## Layout

At the captured 1440 × 1000 desktop viewport, the surveyed product-navigation links extend from x=223 to x=1203, a derived 980px span. Utility search and login sit above them. The promotional area carries a right-hand Direct login block and a two-by-two set of quick links; notices and the account-opening pair follow it.

The account links are 460px wide at x=243 and x=723: the 20px gap is derived from those surveyed rectangles. The six service cards are 146px wide with successive left edges at x=240, 400, 560, 720, 880 and 1040, giving 14px gaps in that captured row. Preserve this compact grid and the explicit service labels when reproducing the desktop composition.

### Responsive Behavior

Not measured: only the 1440 × 1000 desktop viewport was probed.

## Elevation & Depth

The selected controls use flat fills, borders and 0px, 3px or 5px radii; their measured rest shadows are `none`. The service-card hover fades its wrapper over the green services surface rather than adding elevation.

## Motion & Easing

Each selected control reports the raw computed transition `all 0s ease 0s`. No positive transition duration was measured on those controls, and no motion token or site-wide easing rule is inferred.

## Components

These are homepage links styled as actions, navigation or cards. The six selected controls all reached real hover, pointer press and keyboard focus. A consent notice remained open after the tool could not match its close button; these are raw observations with that collection limit recorded in the verification notes.

| Control | Desktop identity | Rest appearance | Hover and pointer press |
|---|---|---|---|
| “総合口座開設” | 460 × 52.8px; 3px radius; 16px padding; visible label 16.8px/700 | `#009800` fill, `#ffffff` label, 2px `#009800` border | Fill `#e5f7cd`, label `#009900`; the span's background image switches from `kouza_kaisetu.png` to `kouza_kaisetu_on.png` |
| “投資信託口座開設” | 460 × 52.8px; 3px radius; 16px padding; visible label 16.8px/700 | Transparent over measured white, `#009800` label and 2px border | Fill `#e5f7cd`; label and border retain their rest values |
| Hero “ログイン” | 200 × 32.9px; 3px radius; 0px anchor padding; visible label 16.94px/700 | `#f66300` fill; child label `#ffffff`; no border | Anchor opacity 1 → 0.7; its own color changes `#0000ff` → `#e3442a`, while child-label color remains white |
| “店舗・ATM” | 120 × 64px; square; 12px padding; visible label 15.96px/700 | `#009900` fill and `#ffffff` label; no border | Fill `#1d6414`, label `#fff662` |
| “ゆうちょダイレクト” service card | 146 × 130.4px; 5px radius; padding 73px 7px 7px; 14px/400 | `#ffffff` fill and `#505050` label; no border | The containing `li#service_direct` changes opacity 1 → 0.7; the anchor's colors stay unchanged |

The service card uses a CSS background image at `50% 5px / auto / no-repeat`, with the text below the icon. The search input is 167 × 25px, square, with padding `0px 10px` and 14px/400 type. It showed no computed style change in all three measured states, so it is documented here and omitted from the interactive-component tokens.

All six controls have `box-shadow: none` at rest. The five links receive only a browser `auto` outline on keyboard focus; no brand focus token is inferred.

### States

Hover was measured with `:hover` true on every selected control; pressed snapshots had `:active` true. All pressed snapshots matched their corresponding hover appearance with no additional computed delta. Keyboard focus reached all six controls: the five links showed only `rgb(0, 95, 204) auto 1px off 1px`, and that outline cleared after blur. The search input showed no computed change. No focus style persisted after blur, and no authored focus token is published.

The search's “no change” result covers the element, its `::before`/`::after`, zero descendants and three ancestor levels with their pseudo-elements, over the probe's computed-style and DOM-attribute property set. It does not establish pixel-level absence of a caret or other browser painting. Disabled styling was not tested.

## Do's and Don'ts

- Keep `#009900` navigation green and `#009800` account-action green distinct when reproducing the measured surface.
- Use the dark-green and yellow pair for the measured “店舗・ATM” hover/press, and the pale-green fill for the two account-opening actions.
- Reproduce the visible child label's color and weight; the login anchor's own color does not describe the label.
- Treat the service card's wrapper opacity as part of the interaction, and retain the icon-above-label arrangement.
- Keep font-family and authored-focus choices unresolved until supported by additional evidence; exclude translation and consent-widget styles from brand tokens.

## Voice & Tone

The homepage labels tasks directly: “ログイン”, “総合口座開設” and “カード・通帳等の紛失盗難”. Its ambassador campaign uses the more aspirational “夢を身近に。” These are observed copy examples, not a published voice guide. [Homepage](https://www.jp-bank.japanpost.jp/), [ambassador site](https://www.jp-bank.japanpost.jp/brand/ambassador/dreams/index.html).

## Agent Prompt Guide

“Build the measured desktop account-opening pair: each link is 460 × 52.8px with a 3px radius, 16px padding and a 16.8px/700 visible label. Fill the first with `#009800` and white text; leave the second transparent over white with green text. Both have a 2px `#009800` border and change background to `#e5f7cd` on hover and pointer press; the first also changes its label to `#009900`. Font family remains unresolved.”

“Build a 120 × 64px Stores/ATM navigation link with 12px padding, square corners and a 15.96px/700 visible label. Use `#009900` with white text at rest, and `#1d6414` with `#fff662` text on hover and pointer press. No authored focus style was verified.”

## Governance

### Known Gaps

- **Contrast, `open-account`.** Text `#ffffff` on `#009800` measures 3.82:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `direct-login`.** Text `#ffffff` on `#f66300` measures 3.13:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-atm`.** Text `#ffffff` on `#009900` measures 3.78:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

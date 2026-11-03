---
name: Rakuten Securities
colors:
  primary: '#bf0000'
  primary-hover: '#ec0606'
  primary-pressed: '#8c0000'
  foreground: '#333333'
  muted: '#686868'
  navigation: '#4d4d4d'
  link: '#006a9e'
  canvas: '#ffffff'
  neutral-hover: '#f7f7f7'
  border: '#d1d1d1'
typography:
  button:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    use: Measured header account-opening and login links; family unresolved.
  navigation:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 21px
    use: Measured header fees link; family unresolved.
  card:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 22.36px
    use: Measured domestic-stock product tile label; family unresolved.
  search:
    fontSize: 13.3333px
    fontWeight: 400
    use: Measured empty stock-search field; line-height normal; family unresolved.
rounded:
  square: 0px
  control: 4px
spacing:
  control-inline: 16
  product-tile-gap: 16
components:
  account-open:
    type: button
    backgroundColor: '#bf0000'
    textColor: '#ffffff'
    rounded: 4px
    height: 44px
    padding: 0px 16px
    typography: 14px / 400
    hover: 'bg #ec0606'
    pressed: 'bg #8c0000; border 1px solid #ffffff; shadow 0px 0px 0px 1px #8c0000'
    focus: 'bg #8c0000; border 1px solid #ffffff; shadow 0px 0px 0px 1px #8c0000'
    use: Header 口座開設 link to /web/account/rsec.html, width 114px. Keyboard focus measured at Tab 8 and reverted after blur. Pressed is the combined hover, active and pointer-focus observation.
  login-outline:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#bf0000'
    border: '1px solid #bf0000'
    rounded: 4px
    height: 44px
    padding: 0px 16px
    typography: 14px / 400
    hover: 'bg #f7f7f7'
    pressed: 'bg #bf0000; fg #ffffff including label and icon; border 1px solid #ffffff; shadow 0px 0px 0px 1px #bf0000'
    focus: 'bg #bf0000; fg #ffffff including label and icon; border 1px solid #ffffff; shadow 0px 0px 0px 1px #bf0000'
    use: Header ログイン link to /ITS/V_ACT_Login.html, width 112.8px. Keyboard focus measured at Tab 9 and reverted after blur. Pressed includes pointer focus.
  fees-nav:
    type: button
    textColor: '#4d4d4d'
    rounded: 0px
    height: 52px
    padding: 0px 16px
    typography: 14px / 600
    hover: 'bg #f7f7f7; fg #bf0000 including label'
    pressed: 'bg #bf0000; fg #bf0000 including label; outline 1px solid #bf0000 with offset -1px; repeated in two captures'
    focus: 'bg #ffffff; outline 1px solid #bf0000 with offset -1px'
    use: 'Header 手数料 link to /web/commission/, width 170.3px; transparent at rest on white #ffffff. The repeated pressed observation hides the label against the same red fill; record it as observed. Focus at Tab 13 keeps the resting grey text and reverts after blur.'
  domestic-card:
    type: card
    textColor: '#333333'
    rounded: 0px
    height: 124px
    padding: 16px 0px 0px
    typography: 13px / 400
    hover: opacity 0.7
    pressed: opacity 0.7
    use: '国内株式 link to /web/domestic/, width 100px; its own background is transparent on a white #ffffff li. The link has no rest shadow; the parent owns the elevation. Its auto keyboard outline is browser-owned and has no focus token.'
---

# Design System Inspiration of Rakuten Securities

## Overview

### Visual Theme & Atmosphere

Rakuten Securities is a Japanese online securities service offering domestic stocks, investment trusts, FX and overseas investment products. Its company disclosure dates its establishment to March 24, 1999. The desktop homepage combines product navigation, market information, educational links, promotions and an account-access panel. White surfaces and dark grey text support this information density, while red marks account-opening actions and blue marks informational links. [Company](https://www.rakuten-sec.co.jp/web/company/), [company disclosure](https://www.rakuten-sec.co.jp/web/company/profile/).

The red is an explicit part of the site's evolution: the February 14, 2022 design announcement says it unified the former blue base colour with the brand's red, alongside renewed headers and navigation. [2022 design renewal](https://www.rakuten-sec.co.jp/web/info/info20220114-01.html). In the measured [homepage](https://www.rakuten-sec.co.jp/) header, the account-opening link is `#bf0000`, brightens to `#ec0606` on hover and darkens to `#8c0000` on press or keyboard focus.

A July 2026 announcement describes a further renewal of U.S. stock screens: asset and market information move together at the top, order buttons become easier to distinguish, and order-screen spacing is reorganized while preserving the layout. It describes this as the first stage toward a full renewal planned for early 2027, with dates subject to change. These are documented product changes; the values below come from the public homepage. [2026 trading-screen renewal](https://www.rakuten-sec.co.jp/web/info/info20260706-02.html).

The measured homepage is the Japanese edition at `www.rakuten-sec.co.jp/`, with HTML `lang="ja"`; the capture did not redirect to another edition.

### Brand Narrative

The company's history records the start of internet securities operations in June 1999 and the change to the name 楽天証券株式会社 in July 2004. The documented 2022 move toward red gives the present header a specific historical context. Its continuing product-renewal announcements concentrate on how investors locate information and identify actions. [History](https://www.rakuten-sec.co.jp/web/company/profile/history.html), [2022 renewal](https://www.rakuten-sec.co.jp/web/info/info20220114-01.html), [2026 renewal](https://www.rakuten-sec.co.jp/web/info/info20260706-02.html).

### Principles

Implementation guidance derived from this measurement: group account actions together; distinguish filled and outlined entry links; use red for their authored state feedback; preserve the measured separation between a link and its container. These are reference-building observations, not a claimed company manifesto.

### Personas

No source-backed persona specification was verified in the opened pages.

## Colors

These role labels describe live computed values from the [homepage](https://www.rakuten-sec.co.jp/). The census captured no first-party CSS custom-property namespace; its five declared variables belong to Swiper.

| Role | Measured value | Evidence |
|---|---|---|
| Primary | `#bf0000` | Header account-opening fill; outlined login text and border |
| Primary hover | `#ec0606` | Account-opening hover fill; domestic-card icon at rest |
| Primary pressed | `#8c0000` | Account-opening pressed and keyboard-focus fill |
| Foreground | `#333333` | Paragraph ink, 50 paragraphs; product-card label |
| Muted | `#686868` | Five paragraphs; utility links such as customer support |
| Navigation | `#4d4d4d` | Header fees-link label at rest |
| Link | `#006a9e` | Seven paragraphs; product-category navigation links |
| Canvas | `#ffffff` | Login-link rest fill and product-card parent |
| Neutral hover | `#f7f7f7` | Login-link and fees-link hover fill |
| Border | `#d1d1d1` | Stock-search field's top, bottom and left borders |

The empty stock-search element has computed colour `#9c9c9c`. This is an empty-field observation; typed text and validation colours were not tested.

## Typography

**Official product use:** no opened Securities-specific source identifies a prose typeface for this homepage.

**Live-loaded faces:** the census lists only `swiper-icons 400 normal` and `sure-icon 400 normal`. Both have embedded `data:application/font-woff` sources. They are retained as icon-face evidence, with no prose-family token or text specimen.

**Official distributed assets:** no downloadable font package or font licence was verified. No font files were downloaded.

**Declared-only faces:** the census records `"Apple SD Gothic Neo"` on `body`, and `"Hiragino Sans", "Hiragino Kaku Gothic ProN", Arial, Meiryo, sans-serif` on `h1` and the sampled button. The measured header controls name `Hiragino Sans`; the stock-search field names `Arial`; the domestic-card link names `Noto Sans JP`. None of those prose faces appears in the loaded-face list. No specimen is assigned to them.

**Official group context:** Rakuten's 2020 announcement documents Rakuten Sans, Rakuten Serif, Rakuten Rounded and Rakuten Condensed, each with five weights. It says the set was developed for progressive application across group services and materials. This establishes a group font asset, without confirming which face this Securities homepage uses. [Official font announcement](https://corp.rakuten.co.jp/news/update/2020/0702_01.html). The [group design portfolio](https://www.rakuten.design/) also lists Rakuten Font Family and ReX: Rakuten Experience; its presence does not establish a homepage font or token mapping.

**Unresolved:** the rendered prose face and its availability/licence. Typography family tokens are absent. **Substitute: none chosen.**

Measured metrics remain usable: header action links 14px/400 with 21px line-height; the fees navigation link 14px/600 with 21px line-height; the product-card label 13px/400 with 22.36px line-height; the search field 13.3333px/400 with `normal` line-height. These are control metrics, not a verified global type scale.

## Layout

At the measured 1440 × 1000 viewport, the header stacks a promotional strip, utility links, logo and account actions, main navigation, then product-category shortcuts. The hero pairs promotional artwork with a login panel on the right. Further down, information sections lead to tools, product tiles and service links.

The domestic-stock tile is 100px wide at x=125; the next 100px tile begins at x=241, giving a measured 16px gap. The action and fees links use 16px horizontal padding. These observations support the recorded 16px spacing values; no general grid or breakpoint scale was extracted.

### Responsive Behavior

Only the desktop 1440 × 1000 viewport was measured; mobile layouts and breakpoints are unverified.

## Elevation & Depth

The domestic-card link itself is flat. Its white parent `li.s3-products__item` carries this measured shadow:

```css
rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.02) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 0px 2px 0px
```

The header action links gain a 1px spread shadow during press and keyboard focus. This is state feedback, separate from the product tile's parent elevation.

## Motion & Easing

The three measured header links record `background-color, color, outline`, each with duration 0.3s (300ms), easing `cubic-bezier(0.25, 0, 0.45, 1)` and zero delay. The raw probe strings are copied in the verification notes. The stock-search input and domestic-card link record `all 0s ease 0s`. No other motion values are specified.

## Components

Each identity below was matched before measuring hover, held pointer press and real Tab focus. Width and height are CSS pixels.

| Control | Width × height | Own radius | Padding | Rest bg / visible label |
|---|---|---|---|---|
| Header `口座開設` link | 114 × 44 | 4px | `0px 16px` | `#bf0000` / `#ffffff` |
| Header `ログイン` link | 112.8 × 44 | 4px | `0px 16px` | `#ffffff` / `#bf0000` |
| Header `手数料` link | 170.3 × 52 | 0px | `0px 16px` | Transparent on `#ffffff` / `#4d4d4d` |
| Stock-search input | 706 × 40 | 0px | `1px 2px 1px 12px` | `#ffffff` / element colour `#9c9c9c` |
| `国内株式` product-card link | 100 × 124 | 0px | `16px 0px 0px` | Transparent on `#ffffff` / `#333333` |

The account-opening link has a 1px `rgba(0, 0, 0, 0)` rest border; the login link has a 1px solid `#bf0000` border. Fees and domestic-card links have no own border. The search input has 1px solid `#d1d1d1` borders on top, bottom and left, with no right border. All five controls have `box-shadow: none` at rest.

Four controls have authored measured state changes and enter the component tokens. The search field remains documented here: all three tested states were unchanged within the probe's comparison scope.

### States

| Control | Hover | Held pointer press | Keyboard focus |
|---|---|---|---|
| `account-open` | Fill `#ec0606` | Fill `#8c0000`; 1px white border; `0px 0px 0px 1px #8c0000` shadow | Same changes, Tab 8 |
| `login-outline` | Fill `#f7f7f7` | Fill `#bf0000`; label and icon `#ffffff`; white 1px border; `0px 0px 0px 1px #bf0000` shadow | Same changes, Tab 9 |
| `fees-nav` | Fill `#f7f7f7`; label `#bf0000` | Fill and label both `#bf0000`; 1px solid `#bf0000` outline, offset -1px | White fill; 1px solid `#bf0000` outline, offset -1px; label stays `#4d4d4d`, Tab 13 |
| `stock-search` | No measured change | No measured change | No measured change, Tab 111 |
| `domestic-card` | Opacity 1 → 0.7 | Opacity 1 → 0.7 | Browser `auto` outline, Tab 143; excluded from tokens |

The fees-link pressed result occurred in both states calls and both crops show the label merging into the red fill. It is retained as a raw observed condition, not a treatment to prescribe. Pressed snapshots also have pointer focus; they do not isolate an active-only CSS rule. All measured keyboard-focus changes reverted after blur.

For the unchanged search field, the comparison covers self and its pseudo-elements, zero descendants, and three ancestor levels with their pseudo-elements, across the probe's computed style and DOM-attribute properties. It does not establish absence of changes in siblings, inaccessible frames or pixel-only rendering. Disabled, filled-field and validation states were not measured.

## Do's and Don'ts

- Use the measured 4px radius and 44px height for the two header action links.
- Keep the primary action's bright hover and dark pressed/focus fills distinct.
- Keep the card link's own styles separate from its elevated parent.
- Preserve the declared-only status of prose font names; leave the unresolved family unset.
- Do not turn Swiper's blue theme variable into a Securities brand colour.
- Do not turn the domestic-card's browser `auto` outline into a brand focus token.

## Voice & Tone

The observed labels name tasks directly: `口座開設` (open an account), `ログイン` (log in), `手数料` (fees), and `銘柄名 / コード / ファンド名` (security name / code / fund name). This is observed interface copy; no formal voice guide was verified.

## Agent Prompt Guide

“Build the measured header account-opening link at 114 × 44px, radius 4px, padding 0px 16px, 14px/400 with 21px line-height. Use `#bf0000` and white at rest, `#ec0606` on hover, and `#8c0000` with a white 1px border and matching 1px spread shadow for keyboard focus. Leave the unresolved font family unset.”

“Use a 100 × 124px product link with 16px top padding, 13px/400 label metrics and `#333333` label colour. Place it on the measured white elevated parent; hover and held press lower the link's opacity to 0.7.”

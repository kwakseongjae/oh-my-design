---
name: HKTVmall
colors:
  primary: '#36b449'
  canvas: '#ffffff'
  navigation-ink: '#4a4a4a'
  navigation-hover-ink: '#115b54'
  category-ink: '#333333'
  category-hover-ink: '#174741'
  category-surface: '#ebeff2'
  account-underlay: '#88e4da'
typography:
  utility:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 13px
    use: ENG language link; loaded proxima_nova family
  navigation:
    fontSize: 13px
    fontWeight: 700
    lineHeight: 22px
    use: 超級市場 category-navigation link
  category:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 19.5px
    use: 廚房電器 sidebar link
  account:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 36px
    use: 我的清單 account link
rounded:
  none: 0px
  utility: 4px
components:
  lang-eng:
    type: button
    backgroundColor: '#36b449'
    textColor: '#ffffff'
    rounded: 4px
    height: 24px
    padding: 4px 5px
    typography: 13px / 400
    hover: opacity 0.9
    pressed: opacity 0.9
    use: ENG — a language-action link on the white utility row. Its opacity is 1 at rest and 0.9 during hover and held press. The language action was never activated.
  nav-supermarket:
    type: button
    textColor: '#4a4a4a'
    rounded: 0px
    height: 48px
    padding: 18px 2px 10px
    typography: 13px / 700
    hover: 'fg #115b54; background-image url(https://www.hktvmall.com/_ui/desktop/common/svg/headerTab/bnTabSupermarket.svg); position 0px 1px / size 100% 100% / no-repeat'
    pressed: 'fg #115b54; background-image url(https://www.hktvmall.com/_ui/desktop/common/svg/headerTab/bnTabSupermarket.svg); position 0px 1px / size 100% 100% / no-repeat'
    use: '超級市場 — a category-navigation link, transparent at rest on white #ffffff. Hover and held press add the observed SVG background; the label span changes colour with the link.'
  category-kitchen:
    type: button
    textColor: '#333333'
    rounded: 0px
    height: 27.5px
    padding: 4px 10px
    typography: 15px / 400
    hover: 'bg #ffffff; fg #174741; left border 5px solid #174741; serialized ::after entry becomes empty'
    pressed: 'bg #ffffff; fg #174741; left border 5px solid #174741; serialized ::after entry becomes empty'
    use: '廚房電器 — a sidebar-navigation link, transparent at rest on #ebeff2, with a left-only 5px solid #ebeff2 border. Hover and held press use a white surface and dark teal label and left edge.'
  saved-list:
    type: button
    textColor: '#333333'
    rounded: 0px
    height: 61px
    padding: 15px 5px 10px 40px
    typography: 16px / 400
    hover: bg rgba(0, 0, 0, 0.12)
    pressed: bg rgba(0, 0, 0, 0.12)
    use: '我的清單 — a saved-list link, transparent at rest on the measured #88e4da account-strip underlay. Hover and held press add a 12% black background; its 32px by 32px ::before icon slot stays unchanged.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: proxima_nova
---

# Design System Inspiration of HKTVmall

## Overview

### Visual Theme & Atmosphere

HKTVmall is a Hong Kong online shopping platform operated by Hong Kong TV Shopping Network Company Limited, a wholly owned subsidiary of Hong Kong Technology Venture Company Limited. Its 2015 history records a February launch with more than 333 stores from Hong Kong, Japan and Korea, under the slogan “We Sell Whatever You Can Imagine”. [Terms](https://www.hktvmall.com/hktv/en/terms-and-conditions), [2015 milestones](https://www.hktv.com.hk/about-history?cat=23).

The company describes a business that combines online shopping, advertising, data analysis, logistics and physical O2O stores. Its 2025 milestones record cross-district Wet Market Express delivery, a new GreenLab store and expansion of its pickup network. That gives the reference its product context: a broad shopping mall with several ways to discover and receive goods. [Company overview](https://www.hktv.com.hk/page/about-overview), [2025 milestones](https://www.hktv.com.hk/about-history).

The observed interface uses a white header, green utility actions, compact category labels, a pale grey category rail and a turquoise account strip. Large photographic promotions carry much of the visual variety. The supermarket navigation link adds an illustrated SVG tab on hover; the account link instead gains a translucent black background. These are distinct measured treatments within the same page.

The measured page is the Traditional Chinese Hong Kong surface reached at `hktvmall.com/hktv/zh/homenfamily` after opening `/hktv/zh/main`; its title is “家居電器 | HKTVmall 香港最大網購平台” and its HTML language is `zh`.

### Brand Narrative

The company's launch history emphasizes breadth of selection. Its current overview connects shopping to advertising, logistics and physical stores, while its FAQ describes CASHBACK rebates, HKTVLive demonstrations, Wet Market Express and GreenLab. This documents an expanding shopping ecosystem; it does not establish a visual rebrand. [2015 milestones](https://www.hktv.com.hk/about-history?cat=23), [overview](https://www.hktv.com.hk/page/about-overview), [FAQ](https://ir.hktv.com.hk/page/faq).

### Principles

The group's published values include “Continuously striving for the best in life”, “Always Something New” and “Make Everything Possible”. These are corporate values, not a published set of UI-design rules. The measured reference supports compact navigation, visible category differentiation and separate campaign imagery as implementation choices. [Purpose, Values & Strategies](https://www.hktv.com.hk/page/vision).

### Personas

No first-party persona definitions were verified.

## Colors

The census found **zero computed root custom properties and zero declared custom properties**. The names below are reference aliases for measured CSS values, not recovered company token names.

| Reference role | Value | Measured use |
|---|---|---|
| Primary | `#36b449` | `ENG` background; `HKTV 直播` label |
| Canvas | `#ffffff` | White underlay behind the supermarket link; kitchen-link hover background; `ENG` text |
| Navigation ink | `#4a4a4a` | Resting supermarket link and its visible label span |
| Navigation hover ink | `#115b54` | Supermarket link and label on hover and held press |
| Category ink | `#333333` | Resting kitchen and saved-list labels |
| Category hover ink | `#174741` | Kitchen-link hover label and left border |
| Category surface | `#ebeff2` | Sidebar underlay and kitchen link's resting left border |
| Account underlay | `#88e4da` | Opaque underlay recorded behind the saved-list link |

The saved-list hover background is `rgba(0, 0, 0, 0.12)` over its turquoise underlay. Keep the alpha treatment instead of converting it to an opaque swatch. The supermarket hover is an image background, not a measured solid fill.

No paragraph `foreground` value is exported: the census returned an empty `paragraphInk` list. The category and account label colours above are interface observations, not a paragraph-colour measurement.

## Typography

**Official product use.** No opened first-party writing identifies a product typeface or explains its selection.

**Live-loaded.** The census reports `proxima_nova normal normal` and `proxima_nova bold normal` in the loaded-face list. The sampled links declare the family `proxima_nova`. This is the evidence class for the exported UI family; it is not an official typography-guideline claim.

**Official distributed assets.** The site's `@font-face` rules declare root-relative source paths under `/_ui/desktop/common/css/fonts/`. The loaded regular and bold rules offer `ProximaNova-Reg-webfont` and `ProximaNova-Sbold-webfont`, respectively, in WOFF2, WOFF and TTF formats. The census also records Light, Xbold, Bold and SboldIt source declarations. Those additional faces were not in the loaded list and receive no specimen. Font binaries and licensing terms were not opened; the particular fetched format and stylesheet origin are not recorded.

**Declared-only.** The body and sampled button declarations also name Arial, Heiti TC, Microsoft JhengHei, Microsoft Yahei and PMingLiU, followed by the generic sans-serif family. These names are declarations only; none is promoted to a loaded face or exported family. There is no sampled `h1` family.

**Unresolved.** The actual font supplying Han glyphs, font licensing and a documented heading family are unresolved. Substitute: none chosen.

| Measured role | Size / weight | Line height |
|---|---|---|
| `ENG` utility action | 13px / 400 | 13px |
| `超級市場` category navigation | 13px / 700 | 22px |
| `廚房電器` sidebar link | 15px / 400 | 19.5px |
| `我的清單` account link | 16px / 400 | 36px |

These are individual control metrics; a paragraph or heading scale was not measured.

## Layout

The measured desktop surface stacks a promotional banner, utility links, the logo, category navigation and an account/category strip above the main campaign area.

- The top promotional link is 1188×140px, measured at horizontal position 126px in a 1440px viewport.
- The sampled category-navigation link is 48px high; the sidebar links occupy a 210px rail and the sampled kitchen row is 27.5px high.
- The saved-list action reserves 40px of left padding for its icon area. The category rail uses 10px horizontal link padding.

Use these local dimensions for the corresponding controls; no site-wide spacing scale was recovered.

### Responsive Behavior

Only a 1440×1000 desktop viewport was measured; mobile layouts and breakpoints are unmeasured.

## Elevation & Depth

The four exported links have `box-shadow: none`. The kitchen link's third ancestor, `div#subnav.subnav`, carries `rgba(0, 0, 0, 0.3) 0px 0px 5px 0px`. This is evidence for the sidebar wrapper's shallow shadow, not for a general elevation scale. Measured link radii are 0px, except the 4px language action.

## Motion & Easing

The language action's computed transition is `all 0.1s ease-out 0s`. The other five sampled links report `all 0s ease 0s` on the control itself. No motion timing is inferred from rotating campaign imagery or from a longer transition detected elsewhere during the sidebar measurement.

## Components

All four exported components are **links**, represented as `button` components for this reference. The pointer measurements used the probe's overlay-hiding option because a promotional layer covered the page.

- **Language action — `ENG`.** A 35.9×24px green link with a 4px radius, `4px 5px` padding, white text and 13px/400 type. Hover and held press reduce the element's opacity from 1 to 0.9 without changing its computed background or text colour. Its language action was never activated.
- **Category navigation — `超級市場`.** A 91×48px square link, `18px 2px 10px` padding and 13px/700 type. It is transparent on white at rest. Hover and held press change the link and visible span to `#115b54` and add `url("https://www.hktvmall.com/_ui/desktop/common/svg/headerTab/bnTabSupermarket.svg")`. The measured image positioning is `0px 1px / 100% 100% / no-repeat`.
- **Sidebar navigation — `廚房電器`.** A 210×27.5px square link, `4px 10px` padding and 15px/400 type. Its transparent resting background sits over `#ebeff2`; the left-only border is 5px solid in that same colour. Hover and held press add white behind a `#174741` label and left border. The probe's serialized `::after` entry also becomes empty; the resting entry describes a zero-size whitespace pseudo-element.
- **Saved list — `我的清單`.** A 109×61px square link, `15px 5px 10px 40px` padding and 16px/400 type. It is transparent over `#88e4da` at rest. Hover and held press add `rgba(0, 0, 0, 0.12)`. The 32×32px `::before` icon slot and label colour remain unchanged in the compared scope.

The green `HKTV 直播` utility link and the FLYCO top image link remain prose observations: neither produced a measured style change that qualifies it for component export. No search-input or product-card measurement is included.

### States

| Control | Hover | Held press | Keyboard focus |
|---|---|---|---|
| `lang-eng` | Opacity 1 → 0.9 | Same as hover | Reached at Tab 11; no computed change in scope |
| `nav-supermarket` | Label `#115b54`; SVG background and its positioning added | Same as hover | Tab 16; no computed change in scope |
| `category-kitchen` | White background; `#174741` label and left border; serialized `::after` entry becomes empty | Same as hover | Tab 32; no computed change in scope |
| `saved-list` | Background `rgba(0, 0, 0, 0.12)` | Same as hover | Tab 45; no computed change in scope |
| `live-link` | No computed change in scope | No computed change in scope | Tab 1; no computed change in scope |
| `promo-banner` | No computed change in scope | No computed change in scope | UNMEASURED; not reached in the 125-press Tab walk; `tabIndex: -1` |

All six pointer samples confirmed `:hover`; held-press samples confirmed `:active`. Comparisons cover the control, its pseudo-elements, recorded descendants and three ancestor levels with their pseudo-elements. The supermarket comparison includes its label span; the banner comparison includes its image. Image pixels and the contents of an external SVG file are outside this computed-style comparison.

The five Tab-reached links reported `:focus-visible` with `outline-style: none` and no measured visual-style delta in that scope. These raw focus observations were collected while the promotional overlay remained present; no focus token is exported. No disabled-state styling was measured.

## Do's and Don'ts

- Keep the compact control sizes and the separate category and account interaction treatments.
- Preserve the supermarket tab's observed SVG treatment when reproducing that control.
- Keep the saved-list hover as an alpha background over the measured underlay.
- Do not turn declared fallback font names into brand specimens.
- Do not promote advertiser imagery, its colours or the Salesforce support widget into product tokens.

## Voice & Tone

The observed interface uses short task labels: `超級市場`, `廚房電器` and `我的清單`. This supports concise category and account wording; no separate official voice guide was verified.

## Agent Prompt Guide

“Build a compact category-navigation link using the measured 91×48px geometry, square corners, 13px/700 type and `18px 2px 10px` padding. Start with `#4a4a4a` on a transparent background over white. On hover and held press, use `#115b54` for the label and the observed `bnTabSupermarket.svg` background at `0px 1px`, sized `100% 100%`, without repeat.”

“Build a 109×61px saved-list link over `#88e4da`, with 16px/400 type, square corners and `15px 5px 10px 40px` padding. Hover and held press add `rgba(0, 0, 0, 0.12)`; preserve the measured icon slot.”

The exported `proxima_nova` family is supported by live-loaded evidence. Han glyph selection remains unresolved; substitute: none chosen.

## Governance

### Known Gaps

- **Contrast, `lang-eng`.** Text `#ffffff` on `#36b449` measures 2.70:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

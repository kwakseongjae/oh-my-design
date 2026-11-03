---
name: Hua Nan Bank
colors:
  primary: '#b3000e'
  primary-hover: '#df0011'
  foreground: '#141a26'
  input-foreground: '#212529'
  canvas: '#ffffff'
  personal-top: '#e4e9ec'
  about-top: '#ffeff0'
  search-hover-border: '#dee2e6'
  census-muted: '#f4f4f4'
typography:
  navigation:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    use: Upper wealth-navigation link; Chinese family remains declared-only. Roboto is separately live-loaded for Latin, including EN navigation.
  action:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.5
    use: More exchange rates action link, 27px line height.
  search:
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.5
    use: Hero search input, 33px line height; Chinese family remains declared-only.
  card-title:
    fontSize: 20.8px
    fontWeight: 600
    lineHeight: 1.25
    use: Measured iHNCB activity-card title link, 26px line height.
rounded:
  square: 0px
  service-link: 16px
components:
  online-login:
    type: button
    backgroundColor: '#b3000e'
    textColor: '#ffffff'
    border: '1px solid #b3000e'
    rounded: 160px
    height: 42px
    padding: 8px 14px
    typography: 16px / 600
    hover: 'bg and border #df0011; radius 16px 16px 0px 0px; before triangle appears; after chevron rotates by matrix(-1, 0, 0, -1, 0, 0)'
    pressed: same measured fill, border, corners and pseudo-elements as hover
    use: 網銀登入 — top-navigation login-menu button. Radius is the raw computed rest value. The visible label remains white. Keyboard focus has an auto outline and is documented only in prose.
  dream-tag:
    type: button
    textColor: '#b3000e'
    border: '2px solid #b3000e'
    rounded: 320px
    height: 37.6px
    padding: 4.8px 12.8px
    typography: 16px / 600
    hover: 'bg #b3000e; fg #ffffff; radius 320px 0px 320px 320px; shadow rgba(0, 0, 0, 0.176) 0px 0px 10px 0px; crown matrix(0.965926, 0.258819, -0.258819, 0.965926, 0, 0)'
    pressed: same measured fill, text, corners, shadow and crown matrix as hover
    use: 夢想數位分行iHNCB — an outlined hero link with a transparent rest background over the rgba(255, 255, 255, 0.85) dialogue panel. Its decorative crown is observed through the after pseudo-element.
  wealth-nav:
    type: button
    textColor: '#141a26'
    rounded: 0px
    height: 90px
    padding: 0px 1.6px
    typography: 16px / 600
    hover: 'fg #b3000e'
    pressed: 'fg #b3000e'
    use: '財富管理 — an upper-navigation link with a transparent background over #e4e9ec. The 90px hit area contains a 24px line-height label.'
  product-search:
    type: input
    backgroundColor: '#ffeff0'
    textColor: '#212529'
    rounded: 1600px
    height: 59.8px
    padding: 12.4px 64px 12.4px 24px
    typography: 22px / 400
    hover: 'border 1px solid #dee2e6'
    pressed: 'border 1px solid #dee2e6'
    use: 我想了解... — the hero search input. Raw rest radius 1600px; rest border is transparent and the inset shadow is rgba(0, 0, 0, 0.25) 3px 3px 3px 0px inset. Foreground is the input color, not a measurement of placeholder ink.
  dream-card:
    type: card
    textColor: '#b3000e'
    rounded: 0px
    height: 60px
    padding: 0px
    typography: 20.8px / 600
    hover: 'link and icon fg #df0011; third-ancestor card shadow rgb(223, 0, 17) 0px 5px 0px 0px; third-ancestor transform matrix(1, 0, 0, 1, 0, -1)'
    pressed: 'link fg #b3000e; third-ancestor red shadow and upward transform retained'
    use: 夢想數位分行iHNCB，正式啟航！ — activity-card title link, transparent over the white card body. Geometry and radius describe the title anchor, not its enclosing card. Pointer states come from the second states call; the first call was unmeasured.
  rates-more:
    type: button
    backgroundColor: '#b3000e'
    textColor: '#ffffff'
    border: '1px solid #b3000e'
    rounded: 320px
    height: 53px
    padding: 12px 24px
    typography: 18px / 600
    hover: 'bg and border #df0011; shadow rgba(0, 0, 0, 0.25) 0px 5px 10px 0px; transform matrix(1, 0, 0, 1, 0, -1)'
    pressed: 'bg #b3000e; border #df0011; hover shadow and transform retained'
    use: 更多匯率查詢 — a filled action link on the white exchange-rate section. Rest shadow rgba(0, 0, 0, 0.15) 0px 1px 2px 0px.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    latin: Roboto
---

# Design System Inspiration of Hua Nan Bank

## Overview

### Visual Theme & Atmosphere

Hua Nan Bank combines a long banking history with a homepage organised around finding a service. Its own history dates its founding to 1919 and records its becoming a subsidiary of Hua Nan Financial Holdings in 2001. [Bank history](https://www.hncb.com.tw/wps/portal/HNCB/about-hn/about/index_about)

The measured homepage puts a conversational greeting and a portrait above a large search field, with shortcuts to loans, digital accounts, investment services and other banking tasks. [Live homepage](https://www.hncb.com.tw/)

The distinctive combination is deep red interface accents, a pale blue-grey hero, a pink search field and generous rounded shapes. Small crowns mark selected hero shortcuts. Interaction adds another characteristic: the iHNCB shortcut squares one corner when filled, while the login-menu button opens into a shape with square lower corners. These are measured homepage behaviours, rather than published brand principles.

Current first-party communication promotes 「夢想數位分行iHNCB，正式啟航！」 on the [homepage](https://www.hncb.com.tw/). Separately, the bank's published app listing describes ongoing interface and transfer-flow refinements. [Official app listing, publisher-authored description and changelog](https://play.google.com/store/apps/details?hl=zh-TW&id=tw.com.hncb.nmbank) These sources show its current digital-service communication; the app's interface was not measured for this reference.

The measured homepage is the Traditional Chinese edition at `www.hncb.com.tw/wps/portal/HNCB/`, with HTML `lang="zh-hant"`; this is the route reached from the supplied homepage in the capture browser.

### Brand Narrative

The bank's history provides the heritage: a 1919 founding and a later place within Hua Nan Financial Holdings. [History](https://www.hncb.com.tw/wps/portal/HNCB/about-hn/about/index_about) The current homepage gives visitors a human portrait and a question before presenting product routes, alongside its iHNCB launch message. [Homepage](https://www.hncb.com.tw/) The bank-published app changelog describes further digital-service development. [App listing](https://play.google.com/store/apps/details?hl=zh-TW&id=tw.com.hncb.nmbank) Connecting those materials is an interpretation, rather than evidence of a formal identity redesign.

### Principles

The observed interface suggests three implementation priorities: lead with service discovery; use red consistently across text, borders and filled actions; and give selected controls distinct shape feedback. No official design-principle document was verified.

### Personas

No persona research was verified.

## Colors

Only two bank-namespaced custom properties were present, both computed on the root and declared at `:root`: `--hncb-personal-top-bg: #e4e9ec` and `--hncb-about-top-bg: #ffeff0`. The remaining colour names below describe measured observations; they are not names from an official token catalogue.

| Role in this reference | Measured value | Evidence |
|---|---|---|
| Primary interface accent | `#b3000e` | Login and more-rates backgrounds; outlined shortcut text and border |
| Filled-action hover | `#df0011` | Login and more-rates hover background and border |
| Foreground | `#141a26` | Paragraph ink: two occurrences; upper wealth-navigation link at rest |
| Input foreground | `#212529` | Search input's own computed color; placeholder ink was not separately sampled |
| White canvas | `#ffffff` | 13 background occurrences; activity-card body; filled-action labels |
| Personal-page top | `#e4e9ec` | `--hncb-personal-top-bg`; background behind the wealth-navigation link |
| About-page top / search pink | `#ffeff0` | `--hncb-about-top-bg`; also the measured homepage search fill |
| Search hover border | `#dee2e6` | Input's border on hover and press; also a Bootstrap default, retained here only as an observed control value |
| Census neutral | `#f4f4f4` | Six background occurrences; no global semantic role asserted |

The hero's dialogue panel is `rgba(255, 255, 255, 0.85)`. Keep that translucency when reproducing this particular panel. Bootstrap's palette and Font Awesome's properties are excluded as bank token namespaces.

## Typography

| Evidence class | What was verified |
|---|---|
| Official product use | No first-party typography statement or named corporate typeface was verified. |
| Live-loaded | `Roboto` 300, 400 and 600 normal were loaded on the homepage. The `EN` navigation link declares Roboto at 16px/600. Font Awesome 6 Brands 400 and Font Awesome 6 Pro 400/900 were also loaded as icon fonts, and are excluded from the text-family token. |
| Official distributed assets | No separate official font distribution or licence page was verified. The live stylesheet supplies Roboto through `local(...)` alternatives and relative `../webfonts/roboto-v20-latin-*.woff2` / `.woff` URLs. This does not establish a bank-owned font release. |
| Declared-only | Body, h1 and button stacks name `微軟正黑體, "Microsoft Yahei", 微软雅黑, STXihei, 华文细黑, sans-serif`. None of these named text faces appears in the loaded-face census. Roboto 700 is declared by `@font-face`, but was not loaded. No specimen is assigned to these unloaded faces. |
| Unresolved | The actual face rendering the Chinese glyphs was not identified. No Chinese text-family token is supplied. Substitute: none chosen. |

Roboto's CSS weight 600 uses filenames containing `roboto-v20-latin-500`; retain that distinction rather than interpreting the filename as the computed weight. The census records local alternatives as well as URLs, so it does not identify which alternative supplied a loaded face.

Measured type sizes and line heights remain useful independently of the unresolved Chinese face: upper navigation and hero tags are 16px/600 with 24px line height; the more-rates action is 18px/600 with 27px line height; the search input is 22px/400 with 33px line height; the iHNCB activity-card title link is 20.8px/600 with 26px line height. All six state-probed controls reported normal letter spacing.

## Layout

The desktop capture has two navigation rows, then a search-led hero with a portrait on the right. Six service links form the next row; each surveyed hit area is 140×140px with a 16px radius. Exchange rates, popular activities and latest news follow as separate sections. The popular-activities panel measures 1136px wide and shows four cards across in the full-page capture.

Use the observed local padding rather than inventing a global spacing scale: login 8px 14px, tags 4.8px 12.8px, the larger action 12px 24px, and search 12.4px 64px 12.4px 24px. The search's larger right inset accommodates its visible search control.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; responsive breakpoints and mobile states are unverified.

## Elevation & Depth

The dialogue panel uses `rgba(0, 0, 0, 0.15) 0px 0px 16px 0px`. The search input is recessed with `rgba(0, 0, 0, 0.25) 3px 3px 3px 0px inset`. The activity-card container has a downward solid-offset shadow, `rgba(0, 0, 0, 0.15) 0px 5px 0px 0px`, measured on the title link's third ancestor.

The outlined shortcut and more-rates action both rest at `rgba(0, 0, 0, 0.15) 0px 1px 2px 0px`. The shortcut's hover shadow is `rgba(0, 0, 0, 0.176) 0px 0px 10px 0px`; the more-rates action instead uses `rgba(0, 0, 0, 0.25) 0px 5px 10px 0px`. The card's pointer-state shadow is a red `rgb(223, 0, 17) 0px 5px 0px 0px`. The login button's rest shadow has zero alpha and contributes no visible elevation.

## Motion & Easing

The raw transition entries on the login button, iHNCB shortcut and more-rates action are `box-shadow 0.25s ease 0s`. The upper wealth-navigation link reports `none 0s ease 0s`. The search input reports `border-color, box-shadow 0.15s, 0.15s ease-in-out, ease-in-out 0s, 0s`; this is the probe's verbatim serialization. The activity-card title declares `all 0.2s ease 0s`; its pointer effects were measured in the second pass.

The shortcut's crown changes from `matrix(0.866025, 0.5, -0.5, 0.866025, 0, 0)` to `matrix(0.965926, 0.258819, -0.258819, 0.965926, 0, 0)` on hover and press. No separate crown timing was measured. The more-rates link changes to `matrix(1, 0, 0, 1, 0, -1)` in those pointer states.

---

First-party evidence: [live homepage](https://www.hncb.com.tw/), [bank history](https://www.hncb.com.tw/wps/portal/HNCB/about-hn/about/index_about), [customer-data legal notice](https://www.hncb.com.tw/wps/portal/HNCB/footer/group_confidential_statement), and the [bank-published app listing](https://play.google.com/store/apps/details?hl=zh-TW&id=tw.com.hncb.nmbank). Homepage token and state measurements were captured on 2026-11-03; corporate-page screenshots supply narrative evidence only.

## Components

The values below identify particular controls at a 1440×1000 desktop viewport. Radii are raw computed CSS values; the large values produce pills at these heights.

| Control | Rest identity | Measured pointer behaviour |
|---|---|---|
| Login-menu button, 「網銀登入」 | 137.4×42px; radius 160px; padding 8px 14px; 16px/600; `#b3000e` fill and 1px border; `#ffffff` text | Hover and press: fill/border `#df0011`; radius `16px 16px 0px 0px`; a small `::before` triangle appears and the `::after` chevron flips. |
| Hero shortcut link, 「夢想數位分行iHNCB」 | 193.1×37.6px; radius 320px; padding 4.8px 12.8px; 16px/600; transparent fill over the translucent dialogue panel; 2px `#b3000e` border and matching text | Hover and press: `#b3000e` fill, `#ffffff` label and icon, radius `320px 0px 320px 320px`, broader shadow and a changed crown rotation. |
| Upper navigation link, 「財富管理」 | 67.2×90px; radius 0px; padding 0px 1.6px; 16px/600; transparent over `#e4e9ec`; `#141a26` text | Hover and press change text to `#b3000e`. |
| Search input, 「我想了解...」 | 595.2×59.8px; radius 1600px; padding 12.4px 64px 12.4px 24px; 22px/400; `#ffeff0` fill, own color `#212529`, transparent 1px border | Hover and press expose a 1px `#dee2e6` border. |
| More-rates action link, 「更多匯率查詢」 | 158×53px; radius 320px; padding 12px 24px; 18px/600; `#b3000e` fill and 1px border; `#ffffff` text | Hover: fill/border `#df0011`, stronger shadow and a 1px upward translation. Press: fill returns to `#b3000e`; hover border, shadow and translation remain. |

The iHNCB activity-card title is a separate link: 226×60px, radius 0px, padding 0px, 20.8px/600, transparent over a white card body, with `#b3000e` text. The second pass measured hover: its label and external-link icon become `#df0011`, while the third-ancestor card changes its shadow to `rgb(223, 0, 17) 0px 5px 0px 0px` and translates upward by 1px. Press restores the link's `#b3000e` text while retaining those ancestor effects. The component's dimensions describe the title anchor, not the enclosing card. Its first-pass pointer readings were UNMEASURED; the more-rates link, measured successfully in the first pass, had unmeasured pointer readings in the second.

### States

Hover and pressed states in §4 were accepted only when the probe recorded the intended control as hovered; pressed snapshots also recorded `active: true`. Use the first pass for more-rates pointer states and the second for card pointer states; failed readings in the other pass remain UNMEASURED. The login and crowned-shortcut shape changes repeated in both passes. The probe compared self, pseudo-elements, descendants and three ancestor levels; it did not establish absence of effects in siblings, external sprite contents, cross-origin frames or pixels.

Real Tab focus reached all six controls in the first pass. Each showed `rgb(0, 109, 217) auto 3px off 0px` and a white `0px 0px 0px 3px` shadow. The outline is browser-owned and supplies no brand focus token. Additional raw observations: the login and more-rates borders became `#df0011`; the search border became `#dee2e6` and its raw radius changed from 1600px to 320px. The first-pass focus differences disappeared after blur. No disabled variant was measured.

The cookie banner remained open because its only observed button was 「同意並關閉」. No consent action was taken. The states calls requested `hideOverlays: true` for the pointer pass; the observations retain that collection limitation.

## Do's and Don'ts

- Use the measured deep red for navigation emphasis, outlined service shortcuts and filled actions.
- Retain the pale hero and pink search field around the white dialogue panel.
- Preserve the individual shape changes: the crowned shortcut squares its top-right corner, while the login menu squares both lower corners.
- Keep Latin font evidence separate from the unresolved Chinese rendering face. Substitute: none chosen.
- Limit this reference's dimensions to the measured desktop surface; no global spacing scale or mobile behaviour was established.

## Voice & Tone

The homepage opens conversationally with 「午安」 and 「您今天想了解華銀哪些商品業務？」. The search placeholder, 「我想了解...」, continues in the visitor's first person. Navigation and section actions then use concise task labels such as 「財富管理」 and 「更多匯率查詢」. These observations describe the captured copy; no editorial style guide was verified.

## Agent Prompt Guide

Build a banking-service homepage with a `#e4e9ec` hero, portrait on the right, and a translucent white search-and-shortcut panel on the left. Use a pink `#ffeff0` search field with the measured inset shadow, deep red `#b3000e` actions and `#141a26` paragraph ink. Match the measured sizes, weights and line heights without assigning an unverified Chinese font.

For the iHNCB shortcut, use a 37.6px-high outlined link with 4.8px 12.8px padding and raw rest radius 320px. Hover fills it red, turns its label white and sets the top-right radius to 0px. For the 53px more-rates action, hover uses `#df0011` and translates upward by 1px; pressing restores the deep red fill while retaining the hover shadow and border.

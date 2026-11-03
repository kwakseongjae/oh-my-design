---
name: Far EasTone
colors:
  primary: '#d3060f'
  interaction-accent: '#ef3123'
  foreground: '#202020'
  canvas: '#ffffff'
  strong-ink: '#000000'
  label-border: '#ebebeb'
typography:
  primary-label:
    fontSize: 16px
    fontWeight: 500
    use: Visible label of the measured friDay video CTA; no verified text-family token.
  secondary-label:
    fontSize: 16px
    fontWeight: 400
    use: Visible span.text of the measured Apple card CTA; its link container is 16px/500.
  navigation:
    fontSize: 16px
    fontWeight: 400
    use: Measured 資費方案 header link.
  card-title:
    fontSize: 20px
    fontWeight: 500
    use: Visible title of the measured LINE/Facebook article card.
  section-link:
    fontSize: 36px
    fontWeight: 600
    lineHeight: 54px
    use: Surveyed linked section titles, including 門號與手機方案 and 空機與周邊.
rounded:
  action: 4px
  square-anchor: 0px
spacing:
  action-inline: 16
  card-gap: 20
components:
  primary-cta:
    type: button
    backgroundColor: '#d3060f'
    textColor: '#ffffff'
    rounded: 4px
    height: 30px
    padding: 0px 16px
    typography: 16px / 500
    hover: 'bg #ef3123'
    pressed: 'bg #ef3123; no additional change from hover'
    use: 'Link: 了解更多 in the friDay video panel. Measured on fetnet.net, above a video-mask parent with rgba(0, 0, 0, 0.5) background. Focus was not reached; no focus token.'
  secondary-cta:
    type: button
    textColor: '#202020'
    border: '1px solid #202020'
    rounded: 4px
    height: 30px
    padding: 0px 16px
    typography: 16px / 400
    hover: 'label and border #000000; enclosing card matrix(1.05, 0, 0, 1.05, 0, 0); rendered link box 244.7px by 31.5px'
    pressed: 'same as hover: label and border #000000; enclosing card matrix(1.05, 0, 0, 1.05, 0, 0); rendered link box 244.7px by 31.5px'
    use: 'Link: 立即看 inside Apple 空機旗艦館. Transparent on measured white backing; resting width 233px. Font value describes the visible label; the anchor computes to 16px/500. Focus was not reached.'
  nav-rates:
    type: button
    textColor: '#202020'
    rounded: 0px
    height: 35px
    padding: 0px 10px 13px
    typography: 16px / 400
    hover: '::after paints an 84px by 5px bar in #ef3123; label remains #202020'
    pressed: '::after paints the same 84px by 5px bar in #ef3123; no additional change from hover'
    use: 'Header link: 資費方案, a#navigationBar-2-1.tab-item; transparent on white, width 84px. Real Tab focus produced no computed change within the measured scope; no focus token.'
  article-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#202020'
    rounded: 0px
    height: 240px
    padding: 0px
    typography: 16px / 400
    hover: 'parent matrix(1.05, 0, 0, 1.05, 0, 0) and shadow rgba(75, 88, 105, 0.18) 0px 18px 36px 0px; 看更多 becomes #ef3123; its ::after translates 57.6px'
    pressed: 'same as hover: parent matrix(1.05, 0, 0, 1.05, 0, 0), shadow rgba(75, 88, 105, 0.18) 0px 18px 36px 0px, and 看更多 #ef3123 with ::after translated 57.6px'
    use: 'Link: #interestCard-1 > a.fui-card-action, titled 趕快做好設定吧！. Geometry is the 376.7px-wide action anchor; visible title is 20px/500. Parent supplies resting shadow rgba(75, 88, 105, 0.12) 0px 6px 12px 0px. Parent corner radius was not measured. Focus was not reached.'
---

# Design System Inspiration of Far EasTone

## Overview

### Visual Theme & Atmosphere

Far EasTone is a Taiwanese telecommunications and digital-services company. Its official introduction connects mobile connectivity with entertainment, shopping, subscriber benefits and enterprise services. Far Eastern Group's company profile dates its establishment to 1997; Far EasTone's own brand timeline records the network launch in 1998. [Company introduction](https://www.fetnet.net/content/corp/tw/AboutUs/Introduction.html), [group profile](https://www.feg.com.tw/tw/business/company.aspx?id=89).

The brand's long-running promise, “只有遠傳 沒有距離,” links communication with closeness. Its timeline describes a 2019 expansion of that idea through “靠得更近 想得更遠,” including reducing the distance between people and new technology. After the 2023 Asia Pacific Telecom merger, its campaign showed red- and green-clad cycling teams joining together as “新遠傳.” The timeline's 2024 entry turns to protecting everyday internet use from fraud. [Brand timeline](https://corporate.fetnet.net/content/corp/tw/AboutUs/VisionAndMission.html).

The measured homepage is the Traditional Chinese Taiwan edition at `fetnet.net/content/cbu/tw/index.html` (HTML `lang="tw"`), reached from the supplied root URL. Its live expression combines a photographic campaign hero, red action buttons, dark text, outlined secondary actions and cards that enlarge on hover. A 4px action-button radius sits alongside rounder topic chips. These observations describe the consumer homepage captured on 2026-11-03.

Primary tasks visible on this page include finding a mobile plan, renewing service, browsing devices, exploring digital services and reaching bill or account services.

### Brand Narrative

Closeness is the continuity between the brand's original communication promise and its later digital-services positioning. The official introduction makes that evolution concrete through entertainment, shopping and the `遠傳心生活` subscriber-benefits service. The live homepage reflects that breadth in separate plan, device, video and benefits sections. [Company introduction](https://www.fetnet.net/content/corp/tw/AboutUs/Introduction.html).

The trademark guide is a separate identity source. It explicitly prohibits altering FET trademarks and using them as decorative devices; it does not publish this reference's palette, typography or UI component values. [Trademark usage guidelines](https://www.fetnet.net/content/cbu/tw/information/trademark-usage-guidelines.html).

### Principles

For this measured reference, make the action hierarchy explicit with filled red and outlined links, keep dark text on light surfaces, and use card-level enlargement for the documented hover treatment. These are implementation rules derived from the captured controls, rather than attributed company design principles.

### Personas

No persona research was verified.

## Colors

These names describe measured UI constants. The survey found no first-party brand custom-property set.

| Role | Value | Live evidence |
|---|---|---|
| Primary action | `#d3060f` | Resting background of the friDay video `了解更多` CTA; also the surveyed hero CTA. |
| Interaction accent | `#ef3123` | Primary CTA hover/press background; navigation underline; article-card action reveal. |
| Foreground | `#202020` | Paragraph ink: seven sampled paragraph text nodes; resting nav, card and secondary-action text. |
| Canvas | `#ffffff` | Article action surface, white backing behind the secondary CTA, and primary-action label. |
| Strong ink | `#000000` | Secondary CTA label and border on hover and press. |
| Topic-chip border | `#ebebeb` | Surveyed `舊機回收` chip's 2px border. |

The rendered census also counted `#fafafa` on 64 backgrounds. That is a page-wide observation, not an assigned brand surface token. Alpha values remain explicit: the primary CTA's video-mask parent is `rgba(0, 0, 0, 0.5)`, while the card shadows use `rgba(75, 88, 105, 0.12)` and `rgba(75, 88, 105, 0.18)`.

## Typography

The evidence classes are separate:

- **Official product use:** the opened company and trademark pages do not identify a product text face.
- **Live-loaded:** the census lists only `icomoon normal normal` in loaded `document.fonts` faces. This common-fonts asset supplies icon-font evidence; it is not promoted to a text-family token or text specimen.
- **Official distributed assets:** the accessible `@font-face` declaration names `icomoon`, with `../../../resources/common/fonts/icomoon.ttf?t121w2` and `../../../resources/common/fonts/icomoon.woff?t121w2` as sources. No distributed text-font file was verified or downloaded.
- **Declared-only:** body, first h1 and first button declare `"PingFang TC", Roboto, "Noto Sans TC", "sans-serif", "Microsoft JhengHei", 微軟正黑體, STHeitiTC-Light, "Microsoft YaHei", 微软雅黑, sans-serif`. None of those named text faces appears in the loaded-face census. Google Fonts stylesheet URLs request Noto Sans TC and Roboto, but the probe could not read those cross-origin CSS rules. A request is not a loaded-face measurement.
- **Unresolved:** the actual rendered text face per script and its licence were not established. No text-font specimen or `typography.family` is supplied. **Substitute: none chosen.**

Measured type metrics remain useful independently of family availability:

| Element | Size / weight | Further evidence |
|---|---|---|
| Linked section titles | 36px / 600 | `門號與手機方案`, `空機與周邊`, `friDay 影音專區`: 54px line height in the survey. |
| Article title | 20px / 500 | Visible `div.text` within the measured article card. |
| Primary CTA label | 16px / 500 | Both anchor and visible label. |
| Secondary CTA label | 16px / 400 | The visible `span.text`; its anchor is 16px / 500, with 30px computed line height. |
| Header navigation | 16px / 400 | `資費方案`, computed line height `normal`. |
| Hero topic chip | 14px / 500 | `舊機回收`, computed line height 30px; survey only. |

## Layout

At the captured 1440×1000 desktop viewport, section-title links start at x=128px. The four device-card anchors begin at x=138, 431, 724 and 1017px and measure 273×407px. The resulting 20px inter-card gap is calculated from those rectangles, rather than asserted as a CSS grid token. Their secondary-action anchors use 16px horizontal padding.

The viewport shows a fixed header, a wide campaign hero and a fixed quick-entry panel on the right. Below the hero, plan and device sections use category tabs and repeated card rows. Only this desktop arrangement was measured.

### Responsive Behavior

Not measured: the capture covers desktop 1440×1000 only; no mobile breakpoint or touch behaviour is specified.

## Elevation & Depth

Depth belongs to the article card's parent `#interestCard-1`, rather than the action anchor. Its resting shadow is `rgba(75, 88, 105, 0.12) 0px 6px 12px 0px`; hover and press produce `rgba(75, 88, 105, 0.18) 0px 18px 36px 0px`. The same states apply `matrix(1.05, 0, 0, 1.05, 0, 0)` to that parent. This pairs enlargement with a broader, darker shadow.

The measured primary, secondary and navigation anchors have no own box shadow. The secondary CTA's enclosing Apple card has the resting 12% shadow, but its measured hover changes list only the parent transform; a hover-shadow change is not asserted for that separate card.

## Motion & Easing

The primary and secondary action anchors declare the raw computed transition `all 0.3s ease 0s`. The navigation link and article action anchor declare `all 0s ease 0s`. The article's moving parent is a separate element; no raw parent-transition string was captured, so its easing is not assigned here.

The measured article motion ends at parent `matrix(1.05, 0, 0, 1.05, 0, 0)` and an arrow translation of 57.6px. No additional motion scale or cubic-bezier curve is specified.

---

Live measurements: [consumer homepage](https://www.fetnet.net/), 2026-11-03. Narrative and identity: [company introduction](https://www.fetnet.net/content/corp/tw/AboutUs/Introduction.html), [brand timeline](https://corporate.fetnet.net/content/corp/tw/AboutUs/VisionAndMission.html), [group profile](https://www.feg.com.tw/tw/business/company.aspx?id=89), [trademark guide](https://www.fetnet.net/content/cbu/tw/information/trademark-usage-guidelines.html). Country support: the [copyright notice](https://www.fetnet.net/content/cbu/tw/information/copyright.html) names 遠傳電信股份有限公司 and gives a contact address at 台北市內湖區瑞光路468號; the [offices page](https://www.fetnet.net/content/corp/tw/join-us/howtoget.html) independently labels that location headquarters. Neither source is recast as a registered-address certificate.

## Components

The following four controls have measured hover and pressed changes. Their PNG crops confirm the intended elements. Backgrounds described as transparent are omitted from machine component `bg` fields.

| Control | Rest identity | Measured interaction |
|---|---|---|
| `primary-cta`: video-panel `了解更多` link | 96×30px; 4px radius; padding `0px 16px`; 16px/500 label; `#d3060f` background and `#ffffff` text; no border or shadow. | Hover and press change only its background to `#ef3123` within the comparison scope. |
| `secondary-cta`: Apple-card `立即看` link | 233×30px; 4px radius; padding `0px 16px`; visible label 16px/400; transparent on white; text and 1px border `#202020`; no own shadow. | Hover and press make label and border `#000000`. The enclosing card scales to 1.05, producing a measured link rectangle of 244.7×31.5px. |
| `nav-rates`: `資費方案` link | 84×35px; 0px radius; padding `0px 10px 13px`; 16px/400; transparent on white, text `#202020`; no border or shadow. | Hover and press paint an 84×5px `#ef3123` `::after` bar. The label retains its colour. |
| `article-card`: `#interestCard-1 > a.fui-card-action` link | 376.7×240px action anchor; 0px radius and padding; white background, `#202020` text; anchor 16px/400, visible title 20px/500; no own border or shadow. | Hover and press scale its parent to 1.05, enlarge the rendered anchor to 395.5×252px, strengthen the parent shadow, reveal `看更多` in `#ef3123` and move its arrow pseudo-element 57.6px horizontally. |

The article anchor's 0px radius does not establish its parent's corner radius. The secondary CTA's size change comes from its ancestor's transform; the link itself retains `transform: none`.

The surveyed OPPO hero `立即申辦` link is 220×50px, radius 4px, padding `0px 16px`, 16px/500, with `#d3060f` / `#ffffff`. Its state locator found no control on the states load, so it contributes no interactive component token. The `舊機回收` topic link is 84×34px with a 30px computed radius and `0px 12px` padding; its states were not measured.

### States

All eight retained pointer-state observations have the appropriate live pseudo-class: `:hover` for hover and `:active` while pressed. Pressed states add no captured change beyond hover.

Only `nav-rates` was reached by real Tab focus, at Tab #7. It matched `:focus-visible`; the comparison found no change across the link, its pseudo-elements and three ancestor levels. No outline was drawn, and no focus token is declared. The other three retained controls were not reached within the 500-Tab cap; their keyboard focus is **UNMEASURED**. The hero locator was not found, so all its states are **UNMEASURED**. Disabled states were not measured.

The first-party cookie banner remained open: its only surveyed button was `我知道了`, with no verified reject or close button. `hideOverlays: true` was enabled for the pointer pass, but the state records contain no `overlaysHiddenForThisControl` entries. These are raw observations with that consent limitation, not evidence of consent rejection. The comparison covers computed styles and recorded attributes, not every possible pixel or external-media change.

## Do's and Don'ts

- Preserve the distinction between the resting action red and the brighter interaction accent.
- Use the measured 4px action corners and 16px horizontal padding for the captured button styles.
- Give the nav link its separate red bar; recolouring its label would not reproduce the observed state.
- Apply the article transform and shadow to the enclosing card, so its content scales together.
- Preserve the secondary label's measured weight of 400 when reproducing that instance.
- Keep unverified font families, focus treatments and mobile behaviour out of the reference's implementation claims.

## Voice & Tone

The homepage greets the visitor with a direct question about finding a telecommunications plan. Surveyed actions use compact verbs: `立即申辦`, `立即看`, `了解更多`, `去挑方案`. Reproduce that short, task-oriented wording pattern. This is an interpretation of the captured copy, not a published voice standard.

## Agent Prompt Guide

“Build a Far EasTone-style primary action using the measured video-panel link: 30px high, 4px corners, `0px 16px` padding, 16px/500 white label, background `#d3060f`, and `#ef3123` on hover and press. No verified text-family or focus token is supplied.”

“Build the measured article action as a white, dark-text card link. Keep the anchor 376.7×240px at rest, with a 20px/500 title. On hover or press, scale the enclosing card to 1.05 and use its measured 18px/36px shadow. Reveal the red `看更多` action and move its arrow 57.6px.”

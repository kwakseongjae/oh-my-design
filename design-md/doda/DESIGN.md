---
name: doda
colors:
  primary: '#007fc3'
  foreground: '#222222'
  canvas: '#ffffff'
  keyword-ink: '#000000'
  registration-from: '#ff5a00'
  registration-to: '#fd7931'
  registration-hover: '#ff8340'
  guide-hover: '#f5f5f5'
  keyword-wrapper-hover: '#f0f9ff'
  search-divider: '#e5e5e5'
  new-badge: '#ff0000'
typography:
  action:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 20.8px
    use: Registration link; family unresolved.
  navigation:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 16px
    use: Header navigation link; family unresolved.
  guide:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 14px
    use: First-time visitor guide link; family unresolved.
  input:
    fontSize: 14px
    fontWeight: 400
    use: Keyword input; computed line-height normal; family unresolved.
rounded:
  action: 8px
  input: 4px
  navigation: 0px
components:
  register:
    type: button
    textColor: '#ffffff'
    rounded: 8px
    height: 48px
    padding: 0px
    typography: 16px / 700
    hover: '#ff8340'
    pressed: '#ff8340'
    use: '会員登録する（無料） — link, 240px wide, on a white panel. Its transparent background-color is covered by linear-gradient(140deg, #ff5a00 30%, #fd7931 70%); hover and pressed remove the image and use solid #ff8340.'
  intro-link:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#007fc3'
    border: '1px solid #007fc3'
    rounded: 8px
    height: 40px
    padding: 0px 16px
    typography: 14px / 700
    hover: '#f5f5f5'
    pressed: '#f5f5f5'
    use: 'はじめて利用される方へ — link, 240px wide; white resting fill becomes #f5f5f5 on hover and pressed.'
  nav-agent:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 48px
    padding: 16px 0px
    typography: 16px / 700
    hover: fg rgba(255, 255, 255, 0.8)
    pressed: fg rgba(255, 255, 255, 0.8)
    use: '求人を紹介してもらう — transparent link on its #007fc3 parent li; 299px wide. Hover and pressed change text alpha; the parent background stays blue.'
  keyword:
    type: input
    textColor: '#000000'
    rounded: 4px
    height: 19px
    padding: 1px 2px
    typography: 14px / 400
    hover: 'wrapper bg #f0f9ff'
    pressed: 'wrapper bg #f0f9ff'
    use: 'スキルや条件など — transparent input, 202px wide, inside a white quickSearchLogOutInput__wrap. Hover and pressed change that immediate wrapper to #f0f9ff; the input itself stays transparent.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of doda

## Overview

### Visual Theme & Atmosphere

doda is a Japanese career-change service combining job listings, recruitment advisers and scouting. Its terms identify the operator as **パーソルキャリア株式会社**. The brand began as the **DODA** job-information magazine in 1989; PERSOL's history records the 2018 change to lowercase **doda** around helping people navigate uncertainty about work and changing jobs. [Service terms](https://doda.jp/DodaFront/Html/html/kiyaku/001.html), [official history](https://www.persol-group.co.jp/stories/group-story/service02/).

The measured desktop homepage puts blue navigation and links beside a warm orange registration action, white panels and compact job information. The four main navigation labels divide the experience into finding jobs, receiving introductions, learning or asking, and events. This description comes from the live interface, rather than a published palette specification.

Consistency is an explicit part of its design history. A 2022 first-party account describes **IO（イーオ）**, which centralizes component designs, HTML/CSS and coding rules after work began in March 2021. A March 2026 NUTION interview describes a doda agent team bringing designers into planning earlier, alongside directors and engineers. That is evidence of continuing product-development work, not a new visual rebrand. [IO project](https://techtekt.persol-career.co.jp/entry/service/220201_01), [2026 design practice](https://nution.persol-career.co.jp/stories/260302/).

### Brand Narrative

PERSOL's history connects doda's magazine origins to career-adviser support introduced in 2007 and the 2018 rebrand's attention to individual attitudes toward work. The current homepage offers both independent search and assisted discovery; reading those parallel paths as an expression of choice is a design interpretation of the measured interface. [Official history](https://www.persol-group.co.jp/stories/group-story/service02/).

### Principles

The IO account explicitly motivates consistent components and shared design/code rules. For implementation, the measured controls support three narrower rules: keep the navigation and registration treatments distinct, place shadows on containing panels, and scope interaction changes to the element or wrapper that actually changes. The latter rules are reference guidance inferred from this capture. [IO account](https://techtekt.persol-career.co.jp/entry/service/220201_01).

### Personas

The official event-page case study distinguishes people already pursuing a job change from people first gathering information. This supports a difference in task readiness; demographic personas were not verified. [Event-page project](https://nution.persol-career.co.jp/works/doda_event_renewal/).

## Colors

These are extracted interface roles, not claimed official token names. The census found no computed root custom properties; the 18 declared properties were scoped to a modal and a tooltip. The values below are grounded in visible product controls and their ancestors.

| Role | Value | Measured use |
|---|---|---|
| Primary | `#007fc3` | Header navigation's parent background; guide-link ink and border; job-card title |
| Foreground | `#222222` | Job-card description span and card anchor's inherited ink; not established as paragraph ink |
| Canvas | `#ffffff` | Guide fill, signup panel, card surface and search-input wrapper |
| Keyword ink | `#000000` | Input's computed text color; placeholder ink was not separately measured |
| Registration gradient start | `#ff5a00` | First stop at 30% |
| Registration gradient end | `#fd7931` | Second stop at 70% |
| Registration hover/pressed | `#ff8340` | Solid fill replacing the gradient |
| Guide hover/pressed | `#f5f5f5` | Fill of the first-time visitor link |
| Keyword wrapper hover/pressed | `#f0f9ff` | Immediate input wrapper, not the input's own background |
| Search divider | `#e5e5e5` | Right border on the job-type, location and salary filter buttons |
| New-job badge | `#ff0000` | Background of the measured card's `NEW` descendant |

The registration image is exactly `linear-gradient(140deg, rgb(255, 90, 0) 30%, rgb(253, 121, 49) 70%)`. Header hover ink is `rgba(255, 255, 255, 0.8)`; it is not a new opaque blue or grey token.

The unfiltered census counts blue text 356 times and dark ink 351 times. Its paragraph sample is white ×106, yellow ×82 and blue ×9. Those paragraph counts do not establish a general body-text role; the page includes carousel repetitions and a chat widget.

## Typography

**Official product use:** no product text family was documented in the first-party articles opened for this reference.

**Live-loaded:** the census reports only `slick 400 normal`. Its `@font-face` is served from first-party Next.js asset paths `/_next/static/media/slick.653a4cbb.woff` and `/_next/static/media/slick.6aa1ee46.ttf`. This is the carousel font, excluded from product text-family tokens and specimens.

**Official distributed assets:** no officially distributed product text-font asset or font licence was verified.

**Declared-only:** body, h1 and button CSS name `verdana, helvetica, "helvetica neue", arial, 游ゴシック体, yugothic, "游ゴシック medium", "yu gothic medium", 游ゴシック, "yu gothic", メイリオ, meiryo, "ｍｓ ｐゴシック", "hiragino kaku gothic pron", "ヒラギノ角ゴ pron w3", sans-serif`. The selected controls report `verdana` as their computed family. Modal-scoped custom properties also name `YuGothic`, `Verdana` and `Yu Gothic Pr6N`. None of these text faces appears in the loaded-face census; their names are retained as declarations, with no specimen.

**Unresolved:** the actual rendered Latin, Kana and Han text faces and their serving/licensing details. `tokens.typography.family` is absent. **Substitute: none chosen.**

Measured typography remains useful without a family claim:

| Element | Size / weight | Line height |
|---|---|---|
| Registration link | 16px / 700 | 20.8px |
| Header agent link | 16px / 700 | 16px |
| Guide link | 14px / 700 | 14px |
| Keyword input | 14px / 400 | `normal` |
| Card title child | 14px / 700 | Not separately recorded |

## Layout

The desktop header's four navigation links start at x=113, 413, 713 and 1013px and measure 299×48px, forming a 1199px span with 1px gaps. The first visible job cards start at x=114, 337, 560 and 783px and have 208px image-link widths, a 223px pitch and therefore 15px between those image-link boxes. These are measured desktop relationships, not breakpoint or grid tokens.

The search strip keeps job type, location and salary controls together at 160×48px each. The text input's 19px height is an inner measurement and should not be mistaken for the full search strip's touch target.

### Responsive Behavior

Only desktop 1440×1000 was measured; mobile layouts and breakpoints are unverified.

## Elevation & Depth

The signup panel uses `rgba(0, 0, 0, 0.12) 0px 2px 5px 0px`. The measured job card's outer surface uses a blue-tinted `rgba(0, 127, 195, 0.15) 0px 2px 5px 0px`. The four measured interactive elements themselves have `box-shadow: none`; depth belongs to their containing surfaces.

## Motion & Easing

Each of the five found controls reports computed `transition: all 0s ease 0s`. The measured state changes therefore have no nonzero CSS transition duration on those elements. Carousel animation, animated media and motion elsewhere were not measured; no motion scale or easing curve is inferred.

## Components

All four structured components have measured hover and pressed changes. They are product controls; no chat or consent control is included. Measurements are from the Japanese homepage at 1440×1000, logged out.

- **Registration action — `会員登録する（無料）`.** An anchor styled as a button, 240×48px, 8px radius, 0px padding, 16px/700 type and 20.8px line height. White ink sits on the orange gradient above; the element has no border or shadow. Hover and pressed remove the gradient and set `#ff8340`.
- **Guide action — `はじめて利用される方へ`.** An anchor, 240×40px, 8px radius, 0px 16px padding, 14px/700 type and 14px line height. White fill, blue ink and a 1px solid blue border; hover and pressed use `#f5f5f5`. Its book icon is a 20×20px `::before` background image from `/cmn_web/img/cm/icon/beginner_blue.svg`; its URL was observed, not downloaded or separately inspected.
- **Agent navigation — `求人を紹介してもらう`.** A transparent anchor over its blue parent, 299×48px, square corners, 16px 0px padding and 16px/700 type. Hover and pressed reduce white text alpha to 0.8; no background change was measured.
- **Keyword input — `スキルや条件など`.** The input itself is 202×19px, with a 4px radius, 1px 2px padding, 14px/400 type and no border or shadow. It is transparent over a white wrapper. Hover and pressed turn the immediate `.quickSearchLogOutInput__wrap` background pale blue; the input's own fill remains transparent.

The job-card text link was 176×82px with 0px radius and padding. Its title child was blue and its description child dark. Pointer states were **UNMEASURED** because the carousel item lay outside the viewport; keyboard focus added only a browser ring. It remains descriptive evidence, outside structured components.

The survey also showed `履歴書を使って会員登録する`, a 240×48px outlined orange link. It was absent on the states load; no state or reusable component is asserted for it.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Registration | Gradient removed; solid `#ff8340` | Same measured appearance as hover | Browser `auto` outline only |
| Guide | Fill `#ffffff` → `#f5f5f5` | Same measured appearance as hover | Browser `auto` outline only |
| Agent navigation | White ink → `rgba(255, 255, 255, 0.8)` | Same measured appearance as hover | Browser `auto` outline only |
| Keyword input | Immediate wrapper `#ffffff` → `#f0f9ff` | Same measured appearance as hover | No change within the probe's comparison scope |
| Job-card text link | UNMEASURED | UNMEASURED | Browser `auto` outline only |

The input focus comparison covered self, its pseudo-elements, zero descendants and three ancestor levels with their pseudo-elements. All measured pointer snapshots confirmed `:hover`; pressed snapshots also confirmed `:active`. No pressed-only difference from hover was recorded. Focus changes on the four anchors returned to rest after blur. Disabled states were not measured and have no tokens.

## Do's and Don'ts

Use blue for the measured navigation and guide treatment, reserve the orange gradient for the observed registration action, and keep the 8px action corners with compact bold labels. Preserve the distinction between an inner input and its containing search wrapper when implementing hover.

Do not publish a text-family specimen from CSS declarations alone, apply the carousel font to body copy, convert the browser's focus ring into a brand color, or infer disabled and validation styles from these captures.

## Voice & Tone

The live navigation uses direct task labels: `求人を探す` (find jobs), `求人を紹介してもらう` (receive job introductions), `知りたい・聞きたい` (learn or ask) and `イベント` (events). The registration action includes `（無料）` (free). These are observed copy patterns, not a verified editorial style guide.

## Agent Prompt Guide

“Build a 240×48px registration link with an 8px radius and white 16px/700 text. Use a 140deg gradient from `#ff5a00` at 30% to `#fd7931` at 70%; replace the image with solid `#ff8340` on hover and pressed. Text family remains unresolved; do not choose a substitute.”

“Build a 240×40px first-time visitor link with an 8px radius, 1px `#007fc3` border, blue 14px/700 text and white fill. Use `#f5f5f5` on hover and pressed, with 16px horizontal padding.”

## Governance

### Known Gaps

- **Contrast, `intro-link`.** Text `#007fc3` on `#ffffff` measures 4.35:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

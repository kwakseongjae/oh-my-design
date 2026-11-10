---
name: Fujitsu
colors:
  brand-red: '#ea0000'
  foreground: '#000000'
  background: '#ffffff'
  link: '#0000ee'
  blue: '#2400b0'
  green: '#008224'
  magenta: '#d80084'
  orange: '#ff8000'
  yellow: '#ffe700'
  lime: '#61d600'
  cyan: '#00e7ef'
  light-blue: '#0c7fd5'
  muted-blue: '#5888c3'
  gray-1: '#333333'
  gray-2: '#e8e8e8'
  surface: '#efefef'
  gray-4: '#3c3c3c'
  gray-5: '#c6c6c0'
  gray-6: '#5f5f5f'
  border: '#dcdcdc'
  gray-background: '#6d6e70'
  red-tint: '#fde5e5'
  focus-ring: '#0018ff'
  action-shadow: '#555555'
typography:
  action:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 21.6px
    use: Measured report and red CTA links; live-loaded FujitsuInfinityPro.
  navigation:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 30.6px
    use: Measured header insight link; live-loaded FujitsuInfinityPro.
  search:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 23.8px
    use: Measured header search input; live-loaded FujitsuInfinityPro.
  ai-action:
    fontSize: 21px
    fontWeight: 700
    lineHeight: 25.2px
    use: Measured enterprise AI CTA link; live-loaded FujitsuInfinityPro.
rounded:
  none: 0px
  search: 6px
  hero: 30px
components:
  report-pill:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #000000'
    rounded: 30px
    height: 53.6px
    padding: 15px 20px 15px 30px
    typography: 18px / 700
    hover: 'box-shadow: 0px 0px 8px 0px #555555; text-decoration: underline solid #000000'
    pressed: 'box-shadow: 0px 0px 8px 0px #555555; text-decoration: underline solid #000000'
    focus: 'outline: 2px solid #0018ff; outline-offset: -2px'
    use: レポートを見る — hero report link, 194.7px wide, white pill over the illustrated hero. Pointer-press auto outline is browser UI and is excluded.
  red-cta:
    type: button
    backgroundColor: '#ea0000'
    textColor: '#ffffff'
    rounded: 0px
    height: 81.6px
    padding: 30px 25px
    typography: 18px / 700
    hover: 'box-shadow: 0px 0px 8px 0px #555555; text-decoration: underline solid #ffffff'
    pressed: 'box-shadow: 0px 0px 8px 0px #555555; text-decoration: underline solid #ffffff'
    focus: 'outline: 2px solid #0018ff; outline-offset: -2px'
    use: 内容を見る — square content link, 350px wide. Fill remains red during measured hover and press; the added shadow and underline provide feedback. Pointer-press auto outline is excluded.
  nav-insight:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 30.6px
    padding: 0px
    typography: 18px / 700
    hover: 'Parent li::after paints a 36px-wide bar with a 4px solid #dcdcdc bottom border.'
    pressed: 'Parent li::after paints the same 36px-wide bar with a 4px solid #dcdcdc bottom border.'
    focus: 'outline: 2px solid #0018ff; outline-offset: -2px'
    use: 知見 — transparent navigation link on the white header, 36px wide; hover feedback is on its parent pseudo-element.
  search:
    type: input
    backgroundColor: '#efefef'
    textColor: '#000000'
    rounded: 6px
    height: 38px
    padding: 12px 40px 12px 12px
    typography: 14px / 700
    focus: 'outline: 2px solid #0018ff; outline-offset: -2px'
    use: 検索 — header search input, initial width 110px. The raw 276px expanded width persisted after blur and is not encoded as a focus or pressed token. No search was submitted.
  story-card:
    type: card
    textColor: '#0000ee'
    rounded: 0px
    height: 32px
    padding: 0px
    typography: 18px / 700
    hover: 'text-decoration: underline solid #0000ee'
    pressed: 'text-decoration: underline solid #0000ee'
    focus: 'outline: 2px solid #0018ff; outline-offset: -2px; text-decoration: underline solid #0000ee'
    use: 森永製菓株式会社 様 — customer-story title link on a white card. Dimensions refer to the 208.5px-wide title anchor. The SVG circle's none-to-identity-matrix change is documented in the raw proof.
  blue-cta:
    type: button
    backgroundColor: '#2400b0'
    textColor: '#ffffff'
    rounded: 0px
    height: 85.2px
    padding: 30px 25px
    typography: 21px / 700
    hover: 'box-shadow: 0px 0px 8px 0px #555555; text-decoration: underline solid #ffffff'
    pressed: 'box-shadow: 0px 0px 8px 0px #555555; text-decoration: underline solid #ffffff'
    focus: 'outline: 2px solid #0018ff; outline-offset: -2px'
    use: エンタープライズ向けAI — square enterprise AI link, 292.1px wide. Fill remains blue during measured hover and press. Pointer-press auto outline is excluded.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: FujitsuInfinityPro
---

# Design System Inspiration of Fujitsu

## Overview

### Visual Theme & Atmosphere

Fujitsu began in 1935 as a communications-equipment manufacturer. Its current corporate profile lists service solutions, hardware solutions and ubiquitous solutions. The Japanese corporate site connects this engineering history to technology that supports society and to Uvance, its business model for addressing customer and social challenges. [History](https://global.fujitsu/ja-jp/about/corporate/history), [company facts](https://global.fujitsu/ja-jp/about/corporate/facts), [corporate overview](https://global.fujitsu/ja-jp/about).

The brand's distinctive device is its flowing infinity form. Fujitsu announced a visual-identity renewal alongside the October 2021 launch of Fujitsu Uvance, bringing the Infinity Mark forward as an expression of continuing transformation and sustainability. Its 2022 description of the Corporate Brand Identity System specifies 15 gradient variations, eight primary colors, six functional colors and a readability-focused corporate font. The current Uvance page extends the transformation story through collaboration between people and AI. These are dated brand statements, rather than a claim of a new 2026 rebrand. [2021 launch](https://info.archives.global.fujitsu/global/about/resources/news/press-releases/2021/1007-01.html), [2022 brand-system announcement](https://info.archives.global.fujitsu/global/about/resources/news/press-releases/2022/0427-01.html), [Uvance today](https://global.fujitsu/ja-jp/uvance).

On the measured homepage, a white header and red wordmark lead into a blue-purple photographic hero with a large curved graphic. Below it, white sections, black copy, saturated action links and customer stories form a long editorial page. A rounded white report link coexists with large square red and blue actions. The measured homepage is the Japanese edition (`global.fujitsu/ja-JP`, HTML `lang="ja-JP"`), captured at 1440×1000 on 2026-11-10.

### Brand Narrative

Fujitsu's official history connects its origins to communications equipment. The 2021 Uvance launch links its newer transformation business to a more sustainable world, and explains the name through Universal and Advance. The 2023 corporate design interview discusses broader color choice and accessibility as part of the visual identity. On the captured homepage, that breadth appears in colorful imagery and gradient panels alongside the red wordmark and actions. [History](https://global.fujitsu/ja-jp/about/corporate/history), [Uvance launch](https://info.archives.global.fujitsu/global/about/resources/news/press-releases/2021/1007-01.html), [design interview](https://corporate-blog.global.fujitsu.com/2023-07-20/01/).

### Principles

The current corporate overview names challenge, trust and empathy as company values. For this implementation reference, the measured surface suggests three practical choices: broad color expression, explicit destination links, and visible keyboard focus. The latter are observations for rebuilding this page, not a quoted company design manifesto. [Corporate overview](https://global.fujitsu/ja-jp/about).

### Personas

No user personas were verified.

## Colors

The live census contains 148 computed root custom properties and 161 unique names when first declarations are included. The colors below come from that readable CSS, with the focus and shadow colors additionally measured on controls. Names describe this reference's observed roles; they do not imply a separately published token API.

| Role or CSS name | Value | Evidence |
|---|---|---|
| Brand red | `#ea0000` | `--color-red`; red CTA fill |
| Foreground | `#000000` | `--color-font`; leading paragraph ink, 37 observations |
| Background / white | `#ffffff` | `--background-color-white`; report-link fill |
| Link | `#0000ee` | `--color-font-link`; customer-story title link |
| Blue | `#2400b0` | `--background-color-blue`; enterprise AI action |
| Green | `#008224` | gradient endpoints; surveyed resource action |
| Magenta | `#d80084` | gradient endpoints |
| Orange | `#ff8000` | gradient endpoints |
| Yellow | `#ffe700` | gradient endpoints |
| Lime | `#61d600` | gradient endpoints |
| Cyan | `#00e7ef` | gradient endpoints |
| Light blue | `#0c7fd5` | `--background-color-gradation-h3b-end` |
| Muted blue | `#5888c3` | `--background-color-gradation-e3b-end` |
| Gray 1 | `#333333` | `--color-gray-1`, `--color-font-gray` |
| Gray 2 | `#e8e8e8` | `--color-gray-2` |
| Light surface | `#efefef` | `--color-gray-3`; search input |
| Gray 4 | `#3c3c3c` | `--color-gray-4` |
| Gray 5 | `#c6c6c0` | `--color-gray-5`, `--color-border-gray` |
| Gray 6 | `#5f5f5f` | `--color-gray-6`, `--color-border-gray2` |
| Light border | `#dcdcdc` | `--color-gray-7`; navigation hover bar |
| Gray background | `#6d6e70` | `--background-color-gray-2` |
| Red tint | `#fde5e5` | `--background-color-red` |
| Keyboard focus | `#0018ff` | measured solid outline on all six controls |
| Action shadow | `#555555` | measured hover shadow on three CTA links |

The readable CSS exposes 13 named start/end gradient pairs: `h1b`–`h5b`, plus `e1b`, `e2b`, `e3b`, `e5b`, `e6b`, `e8b`, `e9b` and `e10b`. For example, `h1b` is red → magenta, `h3b` blue → light blue, and `e1b` cyan → yellow. This homepage inventory does not establish the full set of variations described in 2022.

The survey's rendered counts include the still-open consent layer and a UserWay widget. Their colors are not assigned product roles. The full unadjusted census and all custom properties are retained in the measurement report.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product-use evidence | The 2022 brand-system announcement names **Fujitsu Infinity Pro** as Fujitsu's corporate font, emphasizing readability, within a system covering web and other corporate communications. This establishes corporate-surface use; enterprise application typography was not inspected. |
| Live-loaded | `document.fonts` reports **FujitsuInfinityPro 400 normal** and **FujitsuInfinityPro 700 normal**. The measured action links, navigation link and search input declare this family. |
| Distributed assets visible in CSS | Two same-origin `@font-face` rules point to Regular and Bold WOFF2/WOFF resources under `/assets/hq/font/`. No font binary or separate distribution package was downloaded. |
| Declared-only | Body and h1 stacks also name Arial, メイリオ, Meiryo, ＭＳ Ｐゴシック and ヒラギノ角ゴ Pro W3, followed by a generic sans-serif. The census's first button reports Arial. These entries are not present in the loaded-face list and receive no specimens or family tokens here. |
| Unresolved | Per-glyph Japanese rendering, coverage, license and reuse rights were not established. |

The Regular WOFF2 path is `/assets/hq/font/FujitsuInfinityPro-Regular-202301-2.woff2`; Bold uses `/assets/hq/font/FujitsuInfinityPro-Bold-202301-2.woff2`. CSS also declares corresponding `-202301.woff` resources. Their URLs are evidence of the site's serving configuration, not a grant of font rights. **Substitute: none chosen.**

Measured type: report and red action links **18px/700**, line height **21.6px**; navigation and story-title links **18px/700**, line height **30.6px**; search **14px/700**, line height **23.8px**; enterprise AI action **21px/700**, line height **25.2px**. Letter spacing is `normal` on these six controls. The root also declares heading-panel sizes `2.8rem` and `3.6rem`; their responsive use was not tested.

## Layout

At the captured desktop width, the header has two navigation rows. The hero places its copy and report action to the left of a city photograph and curved graphic. Customer stories appear in three columns; their title anchors begin at x=73, 513 and 953px in the survey. Later sections combine a left label column with stacked service descriptions, followed by insights, topics and press links.

Readable layout variables specify `--size-content-width-max: 1280px` and `--size-content-margin-wide: 3.7%`. These are CSS declarations, not measurements of every section's content box. CTA padding supplies concrete reusable spacing: 30px 25px on the square actions and asymmetric 15px 20px 15px 30px on the hero pill.

### Responsive Behavior

Only 1440×1000 desktop behavior was measured; CSS names breakpoint values of 360px, 768px and 1280px, but no mobile layout or breakpoint transition was verified.

## Elevation & Depth

For the report, red and blue action links, hover changes the resting `none` shadow to **`rgb(85, 85, 85) 0px 0px 8px 0px`**. Their backgrounds remain unchanged, and an underline appears. Pointer press retains these two effects. This provides a measured elevation treatment for these actions; no general card-shadow scale was established.

## Motion & Easing

The three CTA links compute **`box-shadow 0.3s ease-in-out 0s`**. Search computes **`width 0.3s ease-in-out 0s`**; its expanded state persists after blur. The navigation and story-title anchors compute **`all 0s ease 0s`**. These are element-specific transitions, not a global motion rule.

Root variables separately read `--transition-duration: 0.5s`, `--transition-duration-short: 0.25s` and `--transition-timing-function: ease-in`. No measured reduced-motion behavior or page-wide animation choreography is claimed.

## Components

These are homepage links and an input, measured with real pointer states and a Tab walk. The consent banner was closed using its labelled close button before these measurements. Geometry below belongs to the selected element. All six controls had `box-shadow: none` at rest.

| Control | Geometry and type | Rest appearance |
|---|---|---|
| `report-pill` — レポートを見る | 194.7×53.6px; radius 30px; padding 15px 20px 15px 30px; 18px/700 | white, black text; 1px solid black border |
| `red-cta` — 内容を見る | 350×81.6px; radius 0; padding 30px 25px; 18px/700 | brand red, white text; no border |
| `nav-insight` — 知見 | 36×30.6px; radius 0; padding 0; 18px/700 | transparent over white, black text; no border |
| `search` — 検索 | 110×38px initially; radius 6px; padding 12px 40px 12px 12px; 14px/700 | light surface, black text; no border |
| `story-card` — 森永製菓株式会社 様 | title anchor 208.5×32px; radius 0; padding 0; 18px/700 | transparent over a white card, blue link text; no border |
| `blue-cta` — エンタープライズ向けAI | 292.1×85.2px; radius 0; padding 30px 25px; 21px/700 | blue, white text; no border |

The hero action's pill is a local 30px radius. The root's separate `--border-radius: 100px` and `--border-radius-round: 50%` declarations do not replace the measured component radii.

### States

| Control | Hover | Pointer pressed | Keyboard focus |
|---|---|---|---|
| Report pill | neutral shadow + black underline | same authored effects | solid blue outline |
| Red CTA | neutral shadow + white underline; red fill retained | same authored effects | solid blue outline |
| Insight navigation | parent `li::after` paints a 36px-wide, 4px light-gray bottom border | same bar | solid blue outline |
| Search input | no change in the probe's compared scope | raw width becomes 276px and a browser auto outline appears | solid blue outline; raw width also becomes 276px |
| Story title link | blue underline | blue underline | blue underline + solid blue outline |
| Blue CTA | neutral shadow + white underline; blue fill retained | same authored effects | solid blue outline |

The authored keyboard outline is **`2px solid #0018ff` with `outline-offset: -2px`** on all six controls. Pointer press also exposes `outline-style: auto` on the three CTA links and story title; these browser outlines are excluded from brand state tokens. Search width stayed at 276px after blur, so its expansion is recorded as a persistent observation and omitted from focus and pressed tokens. Its blue outline was a distinct, nonpersistent focus indication.

The story link's SVG circle additionally changed from `transform: none` to `matrix(1, 0, 0, 1, 0, 0)` on hover, press and focus; the identity matrix does not establish visible movement. Search's hover “no change” covers self and pseudo-elements, no descendants, and three ancestor levels, for the properties listed in the verification notes. Disabled, validation and loading states were not measured.

## Do's and Don'ts

- Reproduce the square red content action and rounded white hero action with their respective geometry.
- Keep the measured underline and shadow feedback when rebuilding the CTA links.
- Preserve the solid blue keyboard outline, including its negative offset.
- Use the broader verified palette when reproducing the observed gradient treatments.
- Keep the title-link dimensions attached to the title anchor when rebuilding a story card.
- Do not turn the search field's persistent expanded width into a focus-only rule.
- Do not promote consent controls, UserWay styling or unverified fallback faces into brand tokens.

## Voice & Tone

The current corporate overview emphasizes technology, customer transformation and contribution to society. The Uvance page discusses people and AI working together. Homepage actions are direct destination verbs such as レポートを見る and 内容を見る. These observations support informative, task-oriented copy; no separate published voice manual was verified. [Corporate overview](https://global.fujitsu/ja-jp/about), [Uvance](https://global.fujitsu/ja-jp/uvance).

## Agent Prompt Guide

“Build a Fujitsu-style editorial technology homepage with a white header, black foreground, loaded FujitsuInfinityPro and saturated red actions. Use a 350×81.6px red content link with square corners, white 18px/700 type and 30px 25px padding. Hover adds an 8px neutral shadow and white underline. Keyboard focus draws a 2px solid blue outline at −2px offset.”

“For the illustrated hero, use the measured white report link: 194.7×53.6px, 30px radius, 1px black border, black 18px/700 type and asymmetric padding. Keep the page's story titles as blue links on white cards.”

---
name: TVer
colors:
  content-default-primary: '#060606'
  foreground: '#525252'
  content-default-secondary: '#212121'
  inverse: '#ffffff'
  color-gray-300: '#a0a0a0'
  color-gray-200: '#c4c4c4'
  accent-primary: '#152642'
  canvas: '#fafbfc'
  state-focused: '#0d99e5'
  content-attention: '#f22f47'
typography:
  link-wrapper:
    fontSize: 16px
    fontWeight: 400
    use: Computed image/card anchor wrapper; not a measured running-text style
  icon-button:
    fontSize: 16px
    fontWeight: 700
    use: Settings icon button computed text metrics; icon artwork is separate
  compact-label:
    fontSize: 12px
    fontWeight: 700
    use: Login label and episode series-title label; line height 15px
  category-link:
    fontSize: 15px
    fontWeight: 700
    use: Sidebar genre links; line height 18px
  navigation:
    fontSize: 14px
    fontWeight: 700
    use: My Page and other main sidebar links; line height 17.5px
  search:
    fontSize: 16px
    fontWeight: 500
    use: Header search input; line height 24px
rounded:
  square-wrapper: 0px
  more-link: 2px
  logo-link: 4px
  banner: 8px
  channel-talent-link: 16px
components:
  login:
    type: button
    backgroundColor: '#152642'
    textColor: '#ffffff'
    rounded: 9999px
    height: 40px
    padding: 0px 12px
    typography: 12px / 700
    hover: '::before appears: bg rgba(31, 43, 62, 0.05), 68.125px x 40px'
    pressed: '::before appears: bg rgba(31, 43, 62, 0.05), 68.125px x 40px'
    focus: 'self outline: none -> rgb(13, 153, 229) solid 2px off 2px'
    use: Header ログイン button on the light homepage; navy fill and white label. Hover and press add a 5% dark ::before layer; focus uses a 2px sky-blue outline with 2px offset.
  settings:
    type: button
    textColor: '#060606'
    rounded: 9999px
    height: 40px
    padding: 0px
    typography: 16px / 700
    hover: '::before appears: bg rgba(31, 43, 62, 0.05), 40px x 40px'
    pressed: '::before appears: bg rgba(31, 43, 62, 0.05), 40px x 40px'
    focus: 'self outline: none -> rgb(13, 153, 229) solid 2px off 2px'
    use: 'Header gear icon button, aria-label メニューを開く・閉じる; transparent on #fafbfc. The red notification dot is a separate pseudo-element. Hover and press add the same 5% dark layer as Login.'
  mypage:
    type: button
    textColor: '#525252'
    rounded: 9999px
    height: 48px
    padding: 0px 20px
    typography: 14px / 700
    hover: 'fg: rgb(82, 82, 82) -> rgb(6, 6, 6) (self, label, 4 descendants); fill: rgb(82, 82, 82)|none -> rgb(6, 6, 6)|none (2 descendants)'
    pressed: 'fg: rgb(82, 82, 82) -> rgb(6, 6, 6) (self, label, 4 descendants); fill: rgb(82, 82, 82)|none -> rgb(6, 6, 6)|none (2 descendants)'
    focus: 'self outline: none -> rgb(13, 153, 229) solid 2px off 2px'
    use: 'マイページ navigation link to /mypage/fav; transparent on #fafbfc. Its label and icon darken from #525252 to #060606 on hover and press.'
  search:
    type: input
    textColor: '#060606'
    rounded: 9999px
    height: 40px
    padding: 0px 40px
    typography: 16px / 500
    hover: 'self border: 1px solid rgba(0, 0, 0, 0) -> 1px solid rgba(31, 43, 62, 0.1)'
    pressed: 'self border: 1px solid rgba(0, 0, 0, 0) -> 1px solid rgba(31, 43, 62, 0.1)'
    use: Header search input, placeholder 番組名・出演者で検索; resting rgba(21, 38, 66, 0.07) on the light header. Hover and press expose a 10% dark border. Focus observations persisted after blur and are omitted from the focus token.
  episode-card:
    type: card
    textColor: '#212121'
    rounded: 0px
    width: 279px
    height: 205.8px
    padding: 0px 0px 0px 19px
    typography: 12px / 700
    focus: '::after appears: shadow rgb(13, 153, 229) 0px 0px 0px 2px, 256px x 201.75px'
    use: 'First drama-ranking episode link, ポリティカルパン, /episodes/eptnq9s7ly; transparent on #fafbfc. The visible series title is #212121 at 12px/700; the anchor wrapper is 16px/400. Keyboard focus paints a 2px blue ::after shadow. No brand hover or pressed change was measured.'
  special-card:
    type: card
    textColor: '#0000ee'
    rounded: 8px
    width: 260px
    height: 146.3px
    padding: 0px
    typography: 16px / 400
    focus: 'self outline: none -> rgb(13, 153, 229) solid 2px off -2px'
    use: 'Image-only 秋の新ドラマ banner link to https://tver.jp/specials/drama26_start10; transparent on #fafbfc. Compiled fg #0000ee is inherited browser anchor ink, not visible image lettering or a brand colour. Focus has a 2px sky-blue outline offset inward by 2px.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of TVer

## Overview

### Visual Theme & Atmosphere

TVer is a free Japanese commercial-broadcast television streaming service operated by 株式会社TVer. The company’s October 2026 release describes catch-up, live and simultaneous broadcast viewing; its issuer release dates the service’s start to 2015. [Company release](https://tver.co.jp/news/20261027), [issuer service description](https://prtimes.jp/main/html/rd/p/000000541.000002492.html).

The current direction puts programmes at the centre: “番組が主役” and “誰でも使える”. TVer says the redesign reduces its own brand-colour and logo exposure, uses programmes’ colours and simplifies surrounding elements. The rollout began in late September 2026; the October 27 announcement says delivery to PC and television-app users was complete. These are the company’s stated aims and rollout facts, rather than inferred effects of the capture. [Company release](https://tver.co.jp/news/20261027).

The measured Japanese homepage (`https://tver.jp/`, HTML `lang="ja"`) pairs a pale `#fafbfc` ground with large programme pictures, compact dark labels, pill navigation and a small navy `#152642` Login button. Its authored focus colour is `#0d99e5`. The entry’s primary colour is the measured action fill; it is not a claim that this navy replaces TVer’s logo colours. The screenshot shows a cyan TVer logo, but no numeric logo-colour token was measured.

### Brand Narrative

The first-party help article explains that the earlier design centred on following weekly drama, while TVer now carries more genres. Its response is to simplify surrounding elements and let programmes lead. This supplies a concrete reason for the captured mix of large images and restrained interface colours. [Official design-change explanation](https://help.tver.jp/hc/ja/articles/62664465938329--9%E6%9C%88%E6%9C%AB%E3%81%8B%E3%82%89%E9%A0%86%E6%AC%A1-TVer%E3%81%AE%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%8C%E6%96%B0%E3%81%97%E3%81%8F%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99).

### Principles

The verified concepts are “番組が主役” and “誰でも使える”. Translate them into programme-led imagery, legible labels and explicit keyboard location. The first two are stated by TVer; the keyboard treatment is demonstrated by the captured authored focus outlines. [Company release](https://tver.co.jp/news/20261027).

### Personas

No formal personas were verified.

## Colors

### Seen colours and measured interaction colours

| token | value | observed role |
|---|---|---|
| `content-default-primary` | `#060606` | Primary labels, search ink and the hovered/pressed My Page label and icon; --color-content-default-primary. |
| `foreground` | `#525252` | The one sampled paragraph and the resting My Page link; --color-content-default-tertiary. |
| `content-default-secondary` | `#212121` | The measured episode card’s visible series-title label; --color-content-default-secondary. |
| `inverse` | `#ffffff` | Login label; also present in the page background/text census. |
| `color-gray-300` | `#a0a0a0` | Front layer of the SpecialCard stack: .SpecialCard_stackFront__kR9tY uses --color-gray-300 in product-0.css. |
| `color-gray-200` | `#c4c4c4` | Back layer of the SpecialCard stack: .SpecialCard_stackBack__vbUAh uses --color-gray-200 in product-0.css. |
| `accent-primary` | `#152642` | The header Login button background; --color-surface-accent-primary / --bg-blue-btn. |
| `canvas` | `#fafbfc` | Background behind the transparent settings, navigation and card controls; --bg-main / --Background_Primary. |
| `state-focused` | `#0d99e5` | Authored keyboard outlines and the episode-card focus shadow; --color-state-focused. |
| `content-attention` | `#f22f47` | The settings button’s 6×6px ::after notification dot at rest; --Content_Attention. |

The paragraph sample is `#525252`, so the body-text role is named `foreground`; `#060606` is the higher-emphasis UI ink. The search input and active Home item use `rgba(21, 38, 66, 0.07)`. Login and settings hover/press paint `rgba(31, 43, 62, 0.05)` through `::before`. The search hover/press border is `rgba(31, 43, 62, 0.1)`. These translucent paints remain prose rather than opaque palette tokens.

### Declared-only colours

These colours are listed for reference and are not exported as tokens: nothing in this capture was painted with them.

The following are declared in the site’s CSS, computed in the root census, and were not seen painted on the surveyed elements or measured controls. Names follow their source properties. They are available declarations, not recommendations to use every colour in a screen. Generic amber, green, orange, purple and red primitive ramps without a product-semantic alias are omitted because their design ownership is unresolved.

| Name | value | source property |
|---|---|---|
| `background-secondary` | `#edf1f5` | `--Background_Secondary` |
| `background-secondaryweak` | `#f6faff` | `--Background_SecondaryWeak` |
| `background-tertiary` | `#1a1e23` | `--Background_Tertiary` |
| `bg-info` | `#ebedf3` | `--bg-info` |
| `bg-pc-talent-overlay-end` | `#eff2f6` | `--bg-pc-talent-overlay-end` |
| `bg-progress` | `#cfd2d8` | `--bg-progress` |
| `bg-special` | `#08111e` | `--bg-special` |
| `border-attention` | `#ff6a66` | `--Border_Attention` |
| `border-primary` | `#e6e9f1` | `--Border_Primary` |
| `color-blue-100` | `#e9edf1` | `--color-blue-100` |
| `color-blue-200` | `#cdd9ea` | `--color-blue-200` |
| `color-blue-300` | `#9ebde6` | `--color-blue-300` |
| `color-blue-400` | `#5997e8` | `--color-blue-400` |
| `color-blue-50` | `#f7f7f8` | `--color-blue-50` |
| `color-blue-500` | `#1471eb` | `--color-blue-500` |
| `color-blue-600` | `#155bb7` | `--color-blue-600` |
| `color-blue-700` | `#144585` | `--color-blue-700` |
| `color-blue-800` | `#1a3861` | `--color-blue-800` |
| `color-border-attention-primary` | `#f87171` | `--color-border-attention-primary` |
| `color-content-attention-primary` | `#ef4444` | `--color-content-attention-primary` |
| `color-gray-100` | `#f0f0f0` | `--color-gray-100` |
| `color-gray-400` | `#757575` | `--color-gray-400` |
| `color-gray-50` | `#fafafa` | `--color-gray-50` |
| `color-gray-600` | `#363636` | `--color-gray-600` |
| `color-gray-800` | `#0d0d0d` | `--color-gray-800` |
| `color-navy-100` | `#d0dce9` | `--color-navy-100` |
| `color-navy-200` | `#a5bace` | `--color-navy-200` |
| `color-navy-300` | `#7898b3` | `--color-navy-300` |
| `color-navy-400` | `#527a9a` | `--color-navy-400` |
| `color-navy-50` | `#edf2f7` | `--color-navy-50` |
| `color-navy-500` | `#3a5f7d` | `--color-navy-500` |
| `color-navy-600` | `#2e4b63` | `--color-navy-600` |
| `color-navy-700` | `#24374a` | `--color-navy-700` |
| `color-surface-attention-secondary` | `#fff7ed` | `--color-surface-attention-secondary` |
| `color-sky-100` | `#cce9fb` | `--color-sky-100` |
| `color-sky-200` | `#9dd4f7` | `--color-sky-200` |
| `color-sky-300` | `#5cb9f0` | `--color-sky-300` |
| `color-sky-400` | `#2ba8eb` | `--color-sky-400` |
| `color-sky-50` | `#ebf7fe` | `--color-sky-50` |
| `color-sky-700` | `#085c8d` | `--color-sky-700` |
| `color-sky-800` | `#074b73` | `--color-sky-800` |
| `color-sky-900` | `#063a59` | `--color-sky-900` |
| `content-assistance` | `#0a7ab9` | `--Content_Assistance` |
| `content-chaseplay` | `#4ac370` | `--Content_ChasePlay` |
| `content-primary` | `#1f2b3e` | `--Content_Primary` |
| `content-realtime` | `#f4913b` | `--Content_Realtime` |
| `content-secondary` | `#636c7d` | `--Content_Secondary` |
| `content-tertiary` | `#9fa5b1` | `--Content_Tertiary` |
| `surface-attentionbg` | `#ffebe9` | `--Surface_AttentionBg` |
| `surface-dvr` | `#7b8598` | `--Surface_DVR` |
| `surface-splive` | `#ff3f46` | `--Surface_SPLive` |

The old-style `Background_*` / `Content_*` names coexist with `color-surface-*` / `color-content-*`. Do not collapse these aliases into one surface: the census contains both pale `#fafbfc` and declared `#fafafa` values.

## Typography

**Official product-use:** no named product font was documented in the first-party narrative pages opened. **Live-loaded:** the census records no loaded `FontFace` entries and no `@font-face` sources. This does not identify which locally installed font drew the glyphs. **Official distributed assets:** none verified.

**Declared-only:** body, h1 and button CSS all name `"Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`. Separate variables name `"DIN 2014"`, `"Noto Sans JP"` and `"Hiragino Sans"`. These declarations are not proof that those faces loaded. **Unresolved:** the actual rendered face and any product-wide font identity. No family token or specimen is supplied. Substitute: none chosen.

Measured metrics remain useful without a family claim:

| element | size / weight | line height |
|---|---|---|
| Login label; episode series title | 12px / 700 | 15px |
| Main sidebar navigation | 14px / 700 | 17.5px |
| Genre links | 15px / 700 | 18px |
| Search input | 16px / 500 | 24px |
| Settings icon-button wrapper | 16px / 700 | 20px |
| Image/card anchor wrapper | 16px / 400 | normal |

The last row is an anchor’s computed metric, not a running-text or heading measurement. The screenshot’s programme names can have their own child-label styles.

## Layout

At 1440×1000, the screenshot places a persistent sidebar left of the programme area. The survey’s sidebar is 180px wide; the first main billboard begins at x=196px. The main billboard link is 700×393.8px; the special-banner row begins at y=502px with 260×146.3px links. Horizontal programme rows retain the next card partially in view.

For a page in this style, let programme images carry visual variety and keep the controls compact. Preserve the distinction between the large billboard, the special-banner strip and ranking rows. This is implementation guidance derived from the captured arrangement, not an official grid specification.

### Responsive Behavior

Desktop was measured at 1440×1000; no mobile viewport, breakpoint transition or alternate theme was measured.

## Elevation & Depth

The measured Login, settings, My Page and card wrappers have no resting box shadow. Interaction depth comes from translucent layers and the episode card’s focus shadow. The search focus pass observed `rgba(0, 0, 0, 0.05) 0px 4px 6px 0px` and `blur(10px)`; both persisted after blur, so neither is registered as a focus-specific token.

## Motion & Easing

The raw computed transition for My Page is `background-color, color 0.2s, 0.2s ease, ease 0s, 0s`; for search it is `background-color, border-color 0.2s, 0.2s ease, ease 0s, 0s`. Login, settings and both cards report `all 0s ease 0s`. These are element transition strings, not a global motion specification. No cubic-bezier curve or page-animation duration is promoted from this capture.

## Components

- **Login:** 68.1×40px; pill radius 9999px, padding 0px 12px, `#152642` fill and `#ffffff` 12px/700 label. Hover and press retain the fill and add a 5% dark pseudo-element. Focus is a solid 2px `#0d99e5` outline, offset 2px.
- **Settings:** 40×40px, radius 9999px, zero padding, transparent over `#fafbfc`, `#060606` icon ink. Its resting `#f22f47` notification dot is 6×6px. Hover/press add the same layer as Login; focus uses the same outward outline.
- **My Page:** a 154×48px link, radius 9999px, padding 0px 20px, 14px/700. Label and icon change from `#525252` to `#060606` on hover and press. Focus is the outward blue outline.
- **Search:** 290×40px, radius 9999px, padding 0px 40px, 16px/500. Resting fill is the 7% navy wash; hover/press reveal a 1px 10% dark border.
- **Ranking episode card:** a 279×205.8px link wrapper with square corners and 19px left padding for the ranking layout. The series-title child is `#212121`, 12px/700. Focus draws a 2px `#0d99e5` shadow on `::after`; its measured painted box is 256×201.75px. No authored hover or pressed change was measured within the probe’s scope.
- **Special banner:** a 260×146.3px image link with 8px corners and zero padding. Focus is a solid 2px blue outline with −2px offset. No authored hover or pressed change was measured within the probe’s scope. Its inherited anchor `#0000ee` is a browser default, not visible image lettering; it survives only in the required unmodified compiler component fields.

Other surveyed corner roles are 2px for “すべてみる” links, 4px for the logo link, and 16px for channel/talent links. These are link-wrapper measurements, not universal image radii.

### States

All six controls received measured hover, pressed and keyboard-focus passes. Login and settings add a pseudo-element on hover/press. My Page darkens label and icon. Search changes its border. The episode card and special banner have no brand hover/press change within the probe’s compared DOM/CSS scope; their keyboard treatments differ: pseudo-element box shadow versus an inset outline.

The search focus pass changed the background to `color(srgb 1 1 1 / 0.9)`, border, shadow and backdrop blur. Every change remained after blur; the compiler excludes them from a focus token. This is a measured but confounded observation, not proof of an unchanged focus style. Disabled, validation-error and selected-state interactions were not tested.

## Do's and Don'ts

- Give programme art more space than brand decoration, following the company’s stated redesign direction.
- Keep high-emphasis labels, supporting metadata and focus indicators distinct.
- Preserve the pseudo-element hover layer on the two header buttons; a flat replacement colour would lose the measured behaviour.
- Keep the declared-only palette separate from demonstrated paint roles.
- Do not turn inherited browser link blue into a visible TVer accent or claim an unverified font family.

## Voice & Tone

The measured navigation uses direct Japanese task labels: “ホーム”, “マイページ”, “さがす” and “リアルタイム”. Search specifies “番組名・出演者で検索”. Use these as examples of concise action and discovery copy; no broader editorial voice guide was verified.

## Agent Prompt Guide

“Build a light television discovery screen on `#fafbfc`. Use a persistent left navigation and large programme images. Make Login 40px tall with a navy `#152642` fill, white 12px/700 label, pill corners and 12px horizontal padding. Hover and press add a 5% dark pseudo-element; keyboard focus adds a solid 2px `#0d99e5` outline offset 2px. Use only verified typography metrics; the font family is unresolved.”

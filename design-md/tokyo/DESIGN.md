---
name: Tokyo Metropolitan Government
colors:
  color-base1: '#1a1a1c'
  color-base2: '#ffffff'
  border-color3: '#d8d8db'
  color-base4: '#003ee5'
  color-primary: '#1a753f'
  foreground: '#626264'
  color-primary-light: '#018838'
  color-background1: '#f1f4f2'
  color-background3: '#e8f4ed'
  color-background5: '#f8fbf9'
  border-color2: '#dbdbdb'
  color-button-hover: '#016e2d'
  color-focus: '#d18d0f'
  color-button-secondary-hover: '#e3f2ea'
typography:
  control:
    fontSize: 16px
    fontWeight: 400
    use: Keyword field, navigation and tabs; 28px is the most common interactive line height.
  card-title:
    fontSize: 18px
    fontWeight: 700
    use: Recommended-content card title links; 27px line height.
  action:
    fontSize: 16px
    fontWeight: 700
    use: Search-submit and press-list action labels; 24px line height.
  utility:
    fontSize: 14px
    fontWeight: 400
    use: Six header utility links; 21px line height.
rounded:
  square: 0px
  link: 1px
  utility: 4px
  control: 8px
components:
  search-submit:
    type: button
    backgroundColor: '#018838'
    textColor: '#ffffff'
    border: '#018838'
    rounded: 8px
    height: 60px
    padding: 16px
    typography: 16px / 700
    hover: 'self bg: rgb(1, 136, 56) -> rgb(1, 110, 45); self border: 1px solid rgb(1, 136, 56) -> 1px solid rgb(1, 110, 45)'
    pressed: 'self bg: rgb(1, 136, 56) -> rgb(1, 110, 45); self border: 1px solid rgb(1, 136, 56) -> 1px solid rgb(1, 110, 45)'
    focus: 'self bg: rgb(1, 136, 56) -> rgb(1, 110, 45); self border: 1px solid rgb(1, 136, 56) -> 1px solid rgb(1, 110, 45)'
    use: 検索 — the form’s submit button on the light keyword-search panel; white label and icon. States were sampled without submitting the form. The browser auto outline is omitted.
  press-list:
    type: button
    textColor: '#1a753f'
    rounded: 1px
    height: 24px
    padding: 0px
    typography: 16px / 700
    hover: '#e3f2ea'
    pressed: '#e3f2ea'
    focus: 'self shadow: none -> rgba(0, 123, 255, 0.25) 0px 0px 0px 3.2px'
    use: '報道発表一覧へ — a transparent action link on #f8fbf9. Geometry describes the text anchor, not the larger outlined wrapper. Hover and press #e3f2ea are painted on its parent, not the anchor.'
  main-nav:
    type: button
    textColor: '#ffffff'
    rounded: 1px
    height: 44px
    padding: 0px 0px 8px
    typography: 16px / 400
    hover: 'deco: none -> underline solid rgb(255, 255, 255) (self, label)'
    pressed: 'deco: none -> underline solid rgb(255, 255, 255) (self, label)'
    focus: 'self shadow: none -> rgba(0, 123, 255, 0.25) 0px 0px 0px 3.2px; deco: none -> underline solid rgb(255, 255, 255) (self, label)'
    use: '暮らし・健康・福祉 — a transparent header navigation link over #018838. Hover and press add a white underline; keyboard focus also adds the measured translucent blue shadow.'
  keyword-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#1a1a1c'
    rounded: 8px
    height: 60px
    padding: 16px
    typography: 16px / 400
    pressed: 'ancestor ::after border: 1px solid rgb(26, 26, 28) -> 2px solid rgb(209, 141, 15)'
    focus: 'ancestor ::after border: 1px solid rgb(26, 26, 28) -> 2px solid rgb(209, 141, 15)'
    use: 'キーワードを入力してください — the white keyword field on the light search panel. The input itself has no border; its parent’s ::after paints the resting 1px border and the 2px #d18d0f press/focus border. Hover was measured with no change.'
  event-card:
    type: card
    textColor: '#1a1a1c'
    rounded: 1px
    width: 134.8px
    height: 26px
    padding: 0px
    typography: 18px / 700
    hover: '#e8f4ed'
    pressed: '#e8f4ed'
    focus: 'self shadow: none -> rgba(0, 123, 255, 0.25) 0px 0px 0px 3.2px'
    use: 'イベント情報 — a transparent title link inside a white recommended-content card. Dimensions and 1px radius describe the anchor, not the card container. Hover and press #e8f4ed are painted on the second ancestor; keyboard focus shadows the anchor.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Noto Sans JP
---

# Design System Inspiration of Tokyo Metropolitan Government

## Overview

### Visual Theme & Atmosphere

Tokyo Metropolitan Government is the public authority behind Tokyo’s general government portal. Its site policy identifies it as Japan’s local government, “東京都”; the official chronology records the establishment of Tokyo Metropolis in July 1943. The portal brings together government announcements, recommended content, bureau information and keyword search. [Site policy](https://www.metro.tokyo.lg.jp/policy) · [Chronology](https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/nenpyo)

The visual identity combines a green navigation band, white surfaces and pale green information panels. The government’s symbol, established on 1 June 1989, conceals a “T” within three equal arcs and uses vivid green as its base colour. The official explanation associates it with vitality, prosperity and tranquillity. Its published description specifies no hex value; the measured interface primary is #1a753f. [Symbol history](https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/monsho)

The current portal follows a 15 March 2025 renewal. The announcement says that newly added automatic translation supports 130 foreign languages. The measured homepage is the Japanese edition (`www.metro.tokyo.lg.jp/`, HTML `lang="ja-JP"`), with no regional redirect. Its full-width campaign imagery sits above compact announcements and image-led recommended cards. [Renewal announcement](https://www.metro.tokyo.lg.jp/information/topics/2025/03/2025030801)

### Brand Narrative

The established green symbol and renewed multilingual portal connect a continuing public identity with changing information access. The symbol’s official history dates its adoption to 1989; the portal’s renewal notice dates the current site change to March 2025. These are distinct events. [Symbol](https://www.metro.tokyo.lg.jp/tosei/tokyoto/profile/gaiyo/monsho) · [Renewal](https://www.metro.tokyo.lg.jp/information/topics/2025/03/2025030801)

### Principles

The official website guideline asks authors to clarify information priority, use imagery, keep homepage information current and make needed information easy to reach. The site policy sets JIS X 8341-3:2016 AA conformance as its accessibility target; this reference does not assert that the capture independently proves conformance. [Guideline](https://www.metro.tokyo.lg.jp/policy/guideline) · [Policy](https://www.metro.tokyo.lg.jp/policy)

### Personas

No user research or persona evidence was inspected.

## Colors

### Seen on the measured homepage or its measured states

| Token | Value | Observed role |
|---|---|---|
| `color-base1` | `#1a1a1c` | Input text, card titles and the keyword wrapper’s resting 1px border. |
| `color-base2` | `#ffffff` | White surfaces; search-button and navigation labels. |
| `border-color3` | `#d8d8db` | Tag outlines and the event-card container border. |
| `color-base4` | `#003ee5` | Underlined press-release links in the survey rows. |
| `color-primary` | `#1a753f` | Press-list action text and the selected press-tab underline. |
| `foreground` | `#626264` | Most frequent paragraph ink: three paragraphs, versus one using color-base1. |
| `color-primary-light` | `#018838` | Search-submit fill and border; background behind the main navigation link. |
| `color-background1` | `#f1f4f2` | Keyword-search panel background, linked by the homepage’s .page-search-form CSS. |
| `color-background3` | `#e8f4ed` | Selected press-tab fill; event-card ancestor fill on hover and press. |
| `color-background5` | `#f8fbf9` | Surface behind the transparent press-list link. |
| `border-color2` | `#dbdbdb` | Border palette step 2; one rendered border in the census, exact element not identified. |
| `color-button-hover` | `#016e2d` | Search-submit fill and border on hover, press and keyboard focus. |
| `color-focus` | `#d18d0f` | Keyword-input wrapper’s 2px border on press and keyboard focus. |
| `color-button-secondary-hover` | `#e3f2ea` | Press-list parent fill on hover and press. |

Use `foreground` for the paragraph ink recorded most often, #626264; the darker #1a1a1c remains the measured control and card-label ink. The two roles are not interchangeable measurements.

### Declared palette, not seen painted in this capture

These colours are listed for reference and are not exported as tokens: nothing in this capture was painted with them.

These values are declared in the site’s own `--metrotokyo-*` CSS and computed on the root. They were not seen painted on the surveyed homepage or measured controls. The names preserve the CSS roles or numbered palette steps; a disabled colour declaration does not establish a disabled component state.

| Name | Value |
|---|---|
| `border-color1` / `--metrotokyo-border-color1` | `#d9d9d9` |
| `border-color4` / `--metrotokyo-border-color4` | `#e0e0e0` |
| `color-alert` / `--metrotokyo-color-alert` | `#ec0000` |
| `color-background6` / `--metrotokyo-color-background6` | `#f2faf5` |
| `color-background7` / `--metrotokyo-color-background7` | `#f1f1f4` |
| `color-background8` / `--metrotokyo-color-background8` | `#ffe7e6` |
| `color-base5` / `--metrotokyo-color-base5` | `#0030b2` |
| `color-base6` / `--metrotokyo-color-base6` | `#0000be` |
| `color-base7` / `--metrotokyo-color-base7` | `#757578` |
| `color-button-disabled` / `--metrotokyo-color-button-disabled` | `#949497` |
| `color-disabled` / `--metrotokyo-color-disabled` | `#949497` |
| `color-mark` / `--metrotokyo-color-mark` | `#d7efda` |
| `color-secondary` / `--metrotokyo-color-secondary` | `#ed6808` |

The CSS also declares an overlay as `rgba(0, 0, 0, 0.7)` and a scrollbar colour as `rgba(60, 60, 67, 0.6)`; these alpha values remain prose. Framework and slider defaults are excluded from the brand palette.

## Typography

**Official product-use guidance:** the 2023 government website guideline names ヒラギノ角ゴ, メイリオ, MS-Pゴシック, Noto Sans or sans-serif as basic CSS choices. For bureau-name logo images, it specifies ゴナD or メイリオ. This is guidance across government websites; it does not establish every listed face as the current portal’s rendered face. [Design guideline](https://www.metro.tokyo.lg.jp/policy/guideline)

**Live-loaded:** `document.fonts` recorded **Noto Sans JP** in normal and bold. Body, h1 and button computed families all begin with this face. The captured `@font-face` rules serve the two cuts from `/documents/d/global/NotoSansJP-Regular` and `/documents/d/global/NotoSansJP-Bold`, each declared as `format("OpenType")`. These are the evidence for `typography.family.ui`.

**Official distributed assets:** the above site-served font endpoints are referenced in its CSS; a separate font distribution package or licence was not inspected. **Declared-only:** the generic platform stack is excluded; no additional named face is promoted to a product token. **Unresolved:** which other guideline-listed faces are used on other government surfaces. Substitute: none chosen.

`swiper-icons 400 normal` is also loaded, from an embedded data-URL font, and is excluded from prose typography because it is the slider’s icon font.

| Use | Size / weight | Line height evidence |
|---|---|---|
| Keyword input; tab; navigation | 16px / 400 | 28px most common; the measured main-nav link is 17.6px |
| Recommended-content title link | 18px / 700 | 27px |
| Search and press-list action labels | 16px / 700 | 24px |
| Header utility links | 14px / 400 | 21px |

The interactive census does not measure noninteractive heading or running-text sizes. Do not treat this four-row scale as the entire editorial type system.

## Layout

The captured desktop page uses a full-width campaign carousel followed by a centred announcement panel, a pale green pickup section, a row of recommended cards, government information, accordion navigation, keyword search and a related-sites footer. This describes the homepage’s measured composition, not every bureau website.

The first-party root properties declare `--metrotokyo-content-width: 1024px`, horizontal content padding of 16px, and a desktop column gap of 32px. Its large-screen spacing patterns are 64, 40, 32, 24 and 16px. These are CSS declarations, not distances independently measured between every section.

### Responsive Behavior

Only the 1440×1000 desktop surface was rendered and measured; mobile behavior was not tested. The official guideline calls for responsive smartphone and tablet support. [Design guideline](https://www.metro.tokyo.lg.jp/policy/guideline)

## Elevation & Depth

The measured controls have no resting box shadow. Link keyboard focus uses the measured translucent blue shadow quoted under Components. The census records eight backgrounds of `rgba(250, 255, 252, 0.2)`; no global elevation scale is inferred from that count.

## Motion & Easing

The search button and selected press tab both report `background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s`. A declared transition on the selected tab is not evidence that its measured hover changed.

The press-list, main-navigation and event-card anchors report `color, background-color, border-color, box-shadow 0.15s, 0.15s, 0.15s, 0.15s ease-in-out, ease-in-out, ease-in-out, ease-in-out 0s, 0s, 0s, 0s`. The keyword input reports `all 0s ease 0s`. These strings apply to the measured elements; ancestor animations are not reassigned to them.

## Components

- **Search submit — 検索:** 120×60px, 8px radius, 16px padding, 16px/700 white label on #018838, with a matching 1px border. Hover, press and keyboard focus darken both fill and border to #016e2d. No shadow at rest.
- **Press-list action — 報道発表一覧へ:** the measured link is 116.5×24px, 1px radius, no padding, 16px/700 #1a753f. Its own background is transparent over #f8fbf9. Hover and press colour the parent wrapper #e3f2ea. Keyboard focus adds `rgba(0, 123, 255, 0.25) 0px 0px 0px 3.2px` to the anchor.
- **Main navigation — 暮らし・健康・福祉:** a 149.8×44px link, 1px radius, padding `0px 0px 8px`, 16px/400 white label over #018838. Hover and press underline it. Keyboard focus adds the same translucent blue shadow and underline.
- **Keyword input — キーワードを入力してください:** 600×60px, 8px radius, 16px padding, 16px/400 #1a1a1c on white. The input has no own border; the parent’s `::after` draws a 1px #1a1a1c border. Press and Tab focus change that layer to 2px #d18d0f. Hover produced no measured change.
- **Event card — イベント情報:** the measured title link is 134.8×26px, 1px radius, no padding, 18px/700 #1a1a1c. Its white card ancestor changes to #e8f4ed on hover and press. Keyboard focus adds the blue shadow to the anchor. Those dimensions describe the link, not the image card’s outer box.

The selected **報道発表** tab is prose only: 100×52px, radius `8px 8px 0px 0px`, padding `12px 16px`, 16px/400, #e8f4ed fill and #1a1a1c label. Hover and press did not change the compared styles; keyboard focus produced only an `auto` outline. Its selected underline is #1a753f.

### States

All six controls were sampled at rest, actual hover, held press and keyboard focus. Search darkens; main navigation underlines; press-list and event-card parents gain pale green fills. The keyword field has a parent pseudo-element border change on press and focus, with no hover change in the compared scope. Disabled states were not measured. The selected tab has no authored change in these measured states and stays outside the component block.

The `auto` outlines observed on the search button and selected tab belong to the browser and are excluded from tokens. The blue link-focus shadows are computed box shadows, retained as observed live behavior without claiming that blue is a government brand colour.

## Do's and Don'ts

- Use the measured green fill for search and green text for outlined secondary actions.
- Preserve ancestor-painted states: the input’s focus border and the card’s hover surface do not live on the anchor or input itself.
- Keep visible keyboard focus; the keyword field uses a thicker amber border.
- Keep content links blue and underlined where the surveyed press list does so.
- Do not treat an anchor’s dimensions as the surrounding card’s dimensions.
- Do not turn unused framework palette declarations into government brand colours.

## Voice & Tone

Observed task labels are direct: “検索” (search), “報道発表一覧へ” (to the press-release list), and “キーワードを入力してください” (enter a keyword). Use similarly explicit task names; no broader editorial voice was researched.

## Agent Prompt Guide

“Build a Tokyo government keyword-search row on #f1f4f2, using the live-loaded Noto Sans JP face. Use a 60px-high white input with 8px corners and 16px padding; its wrapper border changes from 1px #1a1a1c to 2px #d18d0f for keyboard focus. Pair it with a 120×60px #018838 search button, white 16px/700 text and an 8px radius; hover darkens its fill and border to #016e2d.”

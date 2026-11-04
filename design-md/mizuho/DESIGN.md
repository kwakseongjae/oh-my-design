---
name: Mizuho Bank
colors:
  primary: '#285ae1'
  login-surface: '#08287f'
  lottery-hover: '#2c4a9b'
  login-hover: '#1d2e59'
  foreground: '#333333'
  surface: '#ffffff'
  search-surface: '#f0f4ff'
  search-foreground: '#555555'
  control-border: '#cccccc'
  notice-link: '#d92214'
typography:
  button:
    fontSize: 14px
    fontWeight: 700
    use: Measured compact header action labels; no text font family verified.
  input:
    fontSize: 14px
    fontWeight: 500
    use: Measured header keyword input; no text font family verified.
  action:
    fontSize: 18px
    fontWeight: 700
    use: Account-opening service action and visible academy-card paragraph label; the card anchor wrapper is 16px/400.
rounded:
  none: 0px
  card: 10px
  compact: 16px
components:
  header-lottery:
    type: button
    backgroundColor: '#285ae1'
    textColor: '#ffffff'
    rounded: 16px
    height: 32px
    padding: 2px 24px 0px
    typography: 14px / 700
    hover: 'bg #2c4a9b'
    pressed: 'bg #2c4a9b; no additional change versus hover'
    use: 宝くじ — 90px-wide header action link, /takarakuji/purchase/index.html?rt_bn=bk_header. No border or own shadow. Browser auto keyboard ring and the persistent ancestor pseudo-layer are excluded from focus tokens.
  login-menu:
    type: button
    backgroundColor: '#08287f'
    textColor: '#ffffff'
    rounded: 16px
    height: 32px
    padding: 2px 24px 0px
    typography: 14px / 700
    hover: 'bg #1d2e59'
    pressed: 'bg #1d2e59; no additional change versus hover'
    use: ログイン — 127px-wide header menu button, not a sign-in form submission. No border or own shadow. Browser auto keyboard ring is excluded.
  bank-about:
    type: button
    textColor: '#285ae1'
    rounded: 0px
    height: 14px
    padding: 0px
    typography: 14px / 700
    hover: opacity 0.7
    pressed: opacity 0.7; no additional change versus hover
    use: みずほ銀行について — 125.3px-wide header navigation link, /company/index.html?rt_bn=bk_header; transparent on a measured rgba(255, 255, 255, 0.9) ancestor surface. No border or own shadow. Browser auto ring is excluded.
  account-open:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#285ae1'
    border: '#cccccc'
    rounded: 10px
    height: 65.6px
    padding: 21px 24px
    typography: 18px / 700
    hover: opacity 0.7
    pressed: opacity 0.7; no additional change versus hover
    use: 口座を開く — a main-page service action link, /account/index.html?top=shct_01; 269.4px wide, 1px solid border, shadow rgba(0, 0, 0, 0.2) 0px 0px 20px 0px. Keyboard outline is browser auto, so no focus token.
  academy-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#285ae1'
    rounded: 10px
    height: 365.4px
    padding: 0px
    typography: 18px / 700
    hover: wrapper opacity 0.7
    pressed: wrapper opacity 0.7; no additional change versus hover
    use: 'Article card link, /academy/20230901_2/index.html; 377.3px wide. Foreground and font describe the visible paragraph label; wrapper is #333333, 16px/400. No border; shadow rgba(0, 0, 0, 0.2) 0px 0px 20px 0px. Keyboard ring is browser auto.'
  site-search:
    type: input
    backgroundColor: '#f0f4ff'
    textColor: '#555555'
    rounded: 16px
    height: 32px
    padding: 0px 31px 0px 12px
    typography: 14px / 500
    pressed: 'outline 1px solid #285ae1; offset 0px; input was also focused'
    focus: 'outline 1px solid #285ae1; offset 0px'
    use: キーワードを入力して検索する — input#SS_searchQuery, 252px wide. No rest border or shadow. Computed text foreground, not a separately measured placeholder color. Focus outline clears after blur.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Mizuho Bank

## Overview

### Visual Theme & Atmosphere

Mizuho Bank provides deposit, lending and domestic and foreign exchange services. The present bank launched on 1 July 2013 through the merger of the former Mizuho Bank and Mizuho Corporate Bank. Its registered head office is in Otemachi, Tokyo. [Company profile](https://www.mizuhobank.co.jp/company/info/profile/index.html), [merger notice](https://www.mizuhobank.co.jp/release/bk_cb_tougou/index.html).

The measured retail homepage combines a white canvas, deep blue headings, brighter blue actions, pale blue panels and rounded white cards. A large blue arc passes behind the photographic campaign hero. Compact header controls sit above a second row of task categories; below the hero, red notices precede account-opening and service content. These are observations of the live homepage, not published brand principles.

The group's current “青さで、挑む。” campaign gives blue an explicit narrative role: its campaign text describes blue as inner passion and the color of challengers who do not give up. The page announces a new Canada-themed commercial on 7 October 2026. That is group brand context; the interface values below come from the bank homepage. [Official campaign](https://www.mizuho-fg.co.jp/brandcampaign/index.html).

The measured homepage is the Japanese retail edition at `www.mizuhobank.co.jp/index.html`, with HTML `lang="ja"`; the request to `/` resolved there.

### Brand Narrative

The bank's own historical notice identifies the 2013 merger as the birth of the new Mizuho Bank. The group's current campaign connects its blue identity with passion and continued challenge. These are separate facts: the bank's operational history and the group's present communication. [Merger notice](https://www.mizuhobank.co.jp/release/bk_cb_tougou/index.html), [campaign](https://www.mizuho-fg.co.jp/brandcampaign/index.html).

### Principles

Observed implementation patterns: use blue to identify links and actions; group banking tasks in a two-row header; combine rounded white content surfaces with soft shadows; reduce whole-control opacity for the measured main-page hover/press feedback. These are reference observations, not an official principles document.

### Personas

No persona research was verified.

## Colors

These roles describe computed use on the bank homepage on 2026-11-03; they are not claimed to be published CSS token names.

| Role | Value | Evidence |
|---|---|---|
| Primary action and link | `#285ae1` | Header lottery action, account-opening service link, academy-card label and search focus outline |
| Login surface | `#08287f` | Header “ログイン” button |
| Lottery hover/press surface | `#2c4a9b` | “宝くじ” computed background in the second states call |
| Login hover/press surface | `#1d2e59` | “ログイン” computed background in the second states call |
| Foreground | `#333333` | Most frequent paragraph ink: 32 captured paragraphs; also academy-link wrapper color |
| White surface | `#ffffff` | Account-opening link and academy card; white header-action labels |
| Search surface | `#f0f4ff` | Header keyword input |
| Search foreground | `#555555` | Input's computed text color; placeholder color was not separately measured |
| Control border | `#cccccc` | Account-opening link's 1px solid border |
| Important-notice link | `#d92214` | `.important-topics__link` in the survey |

Additional census backgrounds include `#f3f3f3` (7), `#f6f9ff` (5), `#e2eaff` (5) and `#fcfcfc` (1). The most frequent nontransparent background was `rgba(255, 255, 255, 0.8)` (30), followed by solid white (27). Those counts describe sampled elements, not screen area. The about-navigation link is transparent over a measured `rgba(255, 255, 255, 0.9)` ancestor surface.

The only captured variable namespaces were `--swiper-*` and the computed utility `--vh`. Swiper's default `--swiper-theme-color: #007aff` is excluded from the bank palette. No first-party color-variable scale was verified.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product use | No product text family was specified in the official narrative pages opened for this reference. |
| Live-loaded | `document.fonts` reported only `swiper-icons 400 normal`. Its `@font-face` source is an inline `data:application/font-woff` URL. This is a carousel icon face, excluded from product typography. |
| Official distributed assets | No product text-font distribution or license was verified. |
| Declared-only | Body and button computed stacks read `游ゴシック体, YuGothic, 游ゴシック, "Yu Gothic", sans-serif`. None of these named text faces appeared in the census's loaded-face list. |
| Unresolved | The actual local face used to render Japanese text was not established. The census returned no H1 family. Substitute: none chosen. |

No text-font family token or specimen is supplied. The declaration and the recorded first-family name do not establish which installed font rendered a glyph.

Measured metrics remain useful: header lottery/login labels and the about link are 14px/700; the search input is 14px/500 with 22.4px line height; the account-opening action is 18px/700 with 21.6px line height. The academy card's visible paragraph label is 18px/700 in `#285ae1`; its anchor wrapper is 16px/400 with 18.4px line height and `#333333`. Do not style the visible card title from the wrapper's metrics.

## Layout

At the measured 1440 × 1000 viewport, the hero link is 1242px wide and starts at x=92px. The task-navigation links are 155 × 66px with `12px 0px 24px` padding. The service-action links form two observed rows of four; the academy links form an observed row of three. These are desktop measurements, not a responsive grid specification.

Use the measured insets locally: 24px horizontal padding on compact header actions and the account-opening service action; 12px left padding and 31px right padding on search. No global spacing scale was verified.

### Responsive Behavior

Only the desktop 1440 × 1000 viewport was measured; no mobile layout or breakpoint is supplied.

## Elevation & Depth

Both the account-opening service action and academy card have computed shadow `rgba(0, 0, 0, 0.2) 0px 0px 20px 0px`. Their hover effect changes opacity, with no shadow change in the comparison. The header lottery/login controls and input have no own shadow. Their surrounding header can still have depth; a parent's styling is not an individual button shadow.

## Motion & Easing

All six measured control identities returned the raw computed transition `all 0s ease 0s`. No nonzero transition timing or custom curve is supplied. The hero carousel and decorative page animation were not timed.

## Components

The account-opening action is a link, “口座を開く”, at `/account/index.html?top=shct_01`: 269.4 × 65.6px, 10px radius, padding `21px 24px`, white `#ffffff` background, blue `#285ae1` label, and a `1px solid #cccccc` border. Hover and held press change the anchor's opacity from `1` to `0.7`; its computed background and foreground remain the same. Its keyboard outline has style `auto`, so no brand focus token is supplied.

The academy article card is a link at `/academy/20230901_2/index.html`: 377.3 × 365.4px, 10px radius, zero wrapper padding, white `#ffffff` background and no border. Its image is followed by a blue `#285ae1`, 18px/700 label. The wrapper's own foreground is `#333333`. Hover and held press change wrapper opacity to `0.7`, affecting the image and label together; the label's own opacity stays `1`. Its keyboard ring is browser `auto`.

The keyword input, `input#SS_searchQuery`, is 252 × 32px with a 16px radius and padding `0px 31px 0px 12px`. Its rest surface is `#f0f4ff`, computed text color `#555555`, border and shadow `none`. Hover produced no computed change within the probe scope: self and its pseudos, zero descendants, three ancestor levels and their pseudos, with the property list recorded in verification. Real Tab focus adds `1px solid #285ae1` with zero outline offset; after blur the outline returns to `none`. Held press also showed that outline while the input was focused, so it is not evidence of a separate active-only treatment.

The “宝くじ” header action is a 90 × 32px link, 16px radius, padding `2px 24px 0px`, `#285ae1` / `#ffffff`; hover and held press change its background to `#2c4a9b`. The “ログイン” menu button is 127 × 32px with the same radius/padding and `#08287f` / `#ffffff`; hover and held press change its background to `#1d2e59`. Their computed foregrounds remain white, and press adds no difference beyond hover. Their keyboard rings are browser `auto`.

The “みずほ銀行について” navigation link is 125.3 × 14px with zero radius/padding, transparent background and `#285ae1` text. It sits over the header's measured 90% white surface. Hover and held press change opacity to `0.7`; keyboard focus shows an `auto` ring. No transparent background token is emitted.

Four header pointer targets were covered in the first states call; the second call isolated those controls and measured them. It requested `hideOverlays: true`, but no `overlaysHiddenForThisControl` entry was recorded: no masking was needed. No dialog-close selector was used.

### States

For “口座を開く”, the academy card and the about-navigation link, settled hover and held press produce opacity `0.7` from rest `1`. Lottery and login instead change background to `#2c4a9b` and `#1d2e59`. These five controls show no additional press change beyond hover. Search has no computed hover change within the recorded scope; held press and keyboard focus show `rgb(40, 90, 225) solid 1px off 0px`, with focus present in both snapshots. Its outline clears after blur. The other five controls' keyboard outlines have style `auto`; their browser-ring color is not a brand token. The lottery wrapper's pseudo-layer was flagged as persisting after blur and is excluded from focus claims. No disabled, validation or loading state was measured.

## Do's and Don'ts

- Use `#285ae1` for the measured link/action treatment and `#08287f` for the measured login surface.
- Keep 10px corners on the measured service/card links and 16px corners on the 32px header controls.
- Apply the measured opacity change to the whole action or card; preserve its underlying color values.
- Preserve the academy title's blue 18px/700 treatment separately from the anchor wrapper.
- Do not promote Swiper defaults, an `auto` outline, or a declared-only text face into brand tokens.

## Voice & Tone

The interface uses short Japanese task labels such as “口座を開く” and “ログイン”, while the search placeholder gives an explicit instruction: “キーワードを入力して検索する”. The group campaign uses the compact phrase “青さで、挑む。” No general corporate voice guideline was verified.

## Agent Prompt Guide

“Build a white service-action link with a blue `#285ae1` 18px/700 label, 10px corners, `21px 24px` padding and a `1px solid #cccccc` border. Match the observed 65.6px height and `rgba(0, 0, 0, 0.2) 0px 0px 20px 0px` shadow. Hover and held press set opacity to `0.7`. No font family has been verified.”

“Build a 32px keyword input with a pale `#f0f4ff` surface, 16px radius, `0px 31px 0px 12px` padding and 14px/500 text. Keyboard focus adds a 1px solid `#285ae1` outline at zero offset.”

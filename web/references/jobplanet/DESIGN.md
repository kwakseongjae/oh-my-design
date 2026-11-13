---
name: Jobplanet
colors:
  faint: '#a4a6ad'
  canvas: '#ffffff'
  on-primary: '#ffffff'
  hairline: '#e5e6e9'
  gray-900: '#242628'
  ink-strong: '#323438'
  foreground: '#323438'
  gray-400: '#85878c'
  muted: '#686a6d'
  footer-ink: '#444444'
  surface: '#f3f3f4'
  color-green-600: '#00a866'
  color-green-50: '#e3f8ed'
  color-jobkorea-text: '#083ccc'
  color-jobkorea-border: '#96b1fd'
  gray-600: '#57595b'
  red-50: '#fff0f2'
  primary: '#00c362'
  nav: '#4b4c50'
typography:
  body:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    use: 'Retained published name: small inherited control text and metadata; 20 paragraph characters at 13/400. Not the dominant paragraph size.'
  label:
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.5384615384615385
    use: Company-name label in job-card.
  button-lg:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    use: 전체보기 action label.
  nav:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    use: 'Retained published name: now measured on the main search input, not the nav label.'
  input:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: 'Retained published name: dominant paragraph size, 951 characters in text-census; current main search field is 15px.'
  body-lg:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Dominant paragraph size, 951 characters; Pretendard Variable in text-census.roles.paragraph.
  body-sm:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5714285714285714
    use: Secondary paragraphs, 130 characters, and compact header search input.
  label-sm:
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.5
    use: Small bold paragraph text (8 characters in the text census, 19.5px line height). The footer 이용약관 link has the same size and weight on a 22px line height.
  heading-sm:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.6
    use: Job-card h3 titles (339 heading characters); visible navigation labels use the same size and weight.
  heading:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.3636363636363635
    use: Section h3 headings (39 heading characters).
  display:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.375
    use: Search-hero h2 text (15 heading characters).
rounded:
  none: 0px
  md: 8px
  button: 6px
  lg: 12px
spacing:
  sm: 6
  base: 8
  lg: 16
components:
  search-button:
    type: button
    height: 32px
    padding: 0px
    hover: no brand change
    pressed: no brand change
    focus: no brand change
    use: '검색 icon button, transparent over the white search field; magnifier SVG fill #85878c. Fully round computed radius 3.35544e+07px. No text colour is exported.'
  view-all:
    type: button
    textColor: '#85878c'
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 16px / 600
    hover: no brand change
    pressed: no brand change
    focus: no brand change
    use: 전체보기 button beside 마감임박 채용공고, transparent over white.
  nav-link:
    type: button
    textColor: '#323438'
    rounded: 0px
    height: 55px
    padding: 0px
    typography: 15px / 600
    focus: no brand change
    use: '기업 리뷰 navigation link to /review, transparent over white; visible child label is #323438 at 15px / 600. Pointer states were unmeasured.'
  search-input:
    type: input
    textColor: '#242628'
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 15px / 400
    hover: no brand change
    pressed: no brand change
    focus: no brand change
    use: Main 회사·직무 키워드를 검색해 보세요 field, transparent over white. The 24px measurement is the input itself, not its rounded search wrapper. On press and focus the computed shadow string changes to layers of zero size, which paint nothing.
  job-card:
    type: card
    textColor: '#686a6d'
    rounded: 0px
    width: 334px
    height: 172px
    padding: 16px 20px 20px
    typography: 13px / 600
    hover: no brand change
    pressed: no brand change
    focus: no brand change
    use: 'Job-posting card link in the 마감임박 채용공고 row, opening the posting on Jobkorea; transparent inside a white wrapper with a #e5e6e9 border. The listings rotate, so this is the pattern measured on one card: exported fg/font describe the company-name child (#686a6d, 13px / 600); the title is #242628 at 15px / 600. Link radius is 0, not its wrapper.'
  carousel-next:
    type: button
    backgroundColor: '#ffffff'
    border: '#e5e6e9'
    height: 40px
    padding: 0px
    hover: no brand change
    pressed: no brand change
    focus: no brand change
    use: '다음 circular icon button for 마감임박 cards on white, with 1px #e5e6e9 border; SVG arrow fill #323438. Fully round computed radius 3.35544e+07px.'
fonts:
  roles:
    body: Pretendard Variable
    latin: Roboto
---

# Design System Inspiration of Jobplanet

## Overview

### Visual Theme & Atmosphere

Jobplanet (잡플래닛) is a Korean company-review and career platform that began in April 2014. Its stated mission is to provide the most trustworthy information at moments of choice. The current company page describes accumulating company information and real user experience as data, structuring it against objective criteria, and developing a reference point for career decisions beyond recruitment. The membership page makes that purpose concrete through employer research, interview preparation and salary negotiation.

The homepage gives that information service a search-led expression: green-emphasized Korean hero text, a white field with a multicolour border, rows of job cards and compact employee-rating chips. The measured homepage is the Korean-language product at `jobplanet.co.kr/welcome/index` (`lang="ko"`). White is the dominant background. Green supports search and ratings; blue appears on the explicit “잡코리아 지원” labels. The current surface therefore has a broader accent vocabulary than a single green CTA.

Pretendard Variable carries the interface. Section headings are 22px/700, job-card h3s 15px/600, and the search hero 32px/700. The hierarchy combines size, weight, metadata grey and green rating chips. Job cards remain flat bordered panels, while the search wrapper has a soft green glow. This combination is a useful reference for dense employer information with a conspicuous search entry point.

#### Primary tasks

- Research employers through current and former employee reviews.
- Prepare for interviews and salary negotiation.
- Search company/job keywords and browse recruitment cards.

### Brand Narrative

The company page dates Jobplanet's start to April 2014 and presents it as a company-review and career platform. Its present direction is to make scattered employer information and real experiences useful at career decision points. The membership page organizes that promise into employer exploration, interview preparation and salary negotiation. In the product, search, job listings and employee-rating chips make those information tasks tangible.

### Principles

The official mission is “선택의 순간에 가장 믿을 수 있는 정보를 제공합니다.” The following are implementation lessons from the measured surface, not a published design manifesto: establish a prominent search entry point; differentiate titles, employer names and metadata; keep employee ratings compact; retain an explicit destination label for Jobkorea applications.

### Personas

No first-party persona study was verified; fictional names, ages and biographies from the prior reference are not presented as research.

## Colors

These values come from the rendered homepage and its measured controls. Published names are retained for unchanged values; names such as `nav` and `on-primary` remain compatibility aliases where the new capture supports a different or narrower role.

| Token | Value | Observed role |
|---|---|---|
| `faint` | `#a4a6ad` | Job-card deadline, experience and location metadata; job-card rest.kids. |
| `canvas`, `on-primary` | `#ffffff` | White canvas behind all six controls; carousel-next fill. on-primary is the retained published alias for this same value, not a newly verified green-button pairing. |
| `hairline` | `#e5e6e9` | Carousel-next 1px border and the white job-card wrapper border. |
| `gray-900` | `#242628` | Search-input ink and the job-card h3 title. |
| `ink-strong`, `foreground` | `#323438` | Most frequent paragraph ink (12 paragraphs); visible 기업 리뷰 label and next-arrow icon. |
| `gray-400` | `#85878c` | 전체보기 text and search magnifier SVG fill. |
| `muted` | `#686a6d` | Company-name label in job-card (서일회계법인 on the measured card). |
| `footer-ink` | `#444444` | Footer links including 회사소개 and 개인정보처리방침, survey.rows. |
| `surface` | `#f3f3f4` | Fill on the 복지, 워라밸, 조직문화 and 동료 topic buttons; 11 backgrounds overall. This is not the full-page canvas. |
| `color-green-600` | `#00a866` | 워라밸 3.2 rating-chip ink in job-card rest.kids. |
| `color-green-50` | `#e3f8ed` | 워라밸 3.2 rating-chip fill in job-card rest.kids. |
| `color-jobkorea-text` | `#083ccc` | 잡코리아 지원 label inside job-card, rest.kids span@1.1. |
| `color-jobkorea-border` | `#96b1fd` | 잡코리아 지원 1px border inside job-card, rest.kids span@1.1. |
| `gray-600` | `#57595b` | 자세히 보기 button text, survey.rows. |
| `red-50` | `#fff0f2` | TIP follow-company prompt background, survey.rows; 54px high, 12px radius. |
| `primary` | `#00c362` | Footer 이용약관 link ink, survey.rows; --jply-maincolor and --green-500. |
| `nav` | `#4b4c50` | 닫기 button ink in the header search layer; retained published alias, not current nav-label ink. |

The body-text role is `foreground` (`#323438`); `ink-strong` is its existing published alias. Transparent controls inherit the white surface; they do not have a black fill. The input's raw focus/pressed shadow contains `rgb(30, 136, 229)` (`#1e88e5`) with zero offsets, blur and spread, so it is not exported as a visible focus colour.

### Observed values with unresolved visible roles

These values are preserved as evidence, without exported colour tokens: `#333333` is computed on the measured nav/card wrappers but their visible labels have their own colours; `#00c274` appears in the census (one background and eight text elements) and in `--color-green-500`, but the exact element role was not isolated; `#ef5350` appears on ten text elements and in `--red-400` / `--color-red-400`, without an isolated semantic element. The earlier `green-line` underline role is not confirmed by that census.

### Declared in the site's CSS, not seen painted

The site's legacy `:root` palette (`--jply-*`, bare colour ramps and premium variables) and its adapted `--color-*` palette hold the following additional colours. This list is not exported as tokens. The generic Tailwind yellow default and Swiper colour are excluded. Declared presence does not establish a semantic status such as warning, danger or disabled.

| CSS property | Value |
|---|---|
| `--blue-100`, `--color-blue-100` | `#bbdefb` |
| `--blue-200`, `--color-blue-200` | `#90caf9` |
| `--blue-30`, `--color-blue-30` | `#f6fbfe` |
| `--blue-300`, `--color-blue-300` | `#64b5f6` |
| `--blue-400`, `--color-blue-400` | `#42a5f5` |
| `--blue-500`, `--color-blue-500` | `#2196f3` |
| `--blue-700`, `--color-blue-700` | `#1976d2` |
| `--blue-800`, `--color-blue-800` | `#1565c0` |
| `--blue-900` | `#0d47a1` |
| `--color-gray-200`, `--gray-200`, `--jply-gray05` | `#c5c7cc` |
| `--color-gray-30`, `--gray-30` | `#f9f9fb` |
| `--color-gray-750` | `#3e434b` |
| `--color-green-100` | `#b8ebd0` |
| `--color-green-200` | `#87e0b6` |
| `--color-green-30` | `#f2fbf7` |
| `--color-green-300` | `#57d49b` |
| `--color-green-400` | `#29c886` |
| `--color-green-700` | `#008552` |
| `--color-kakao` | `#fee500` |
| `--color-orange-100`, `--orange-100` | `#ffe0b2` |
| `--color-orange-200`, `--orange-200` | `#ffcc80` |
| `--color-orange-30`, `--orange-30` | `#fffaf5` |
| `--color-orange-400`, `--orange-400` | `#ffa726` |
| `--color-orange-50`, `--orange-50` | `#fff3e0` |
| `--color-orange-500`, `--orange-500` | `#ff9800` |
| `--color-orange-600`, `--orange-600` | `#fb8c00` |
| `--color-premium-active`, `--premium-col-active` | `#139984` |
| `--color-premium-default`, `--color-teal-500`, `--premium-col`, `--teal-500` | `#1cbda3` |
| `--color-purple-100`, `--purple-100` | `#d0cbec` |
| `--color-purple-30`, `--purple-30` | `#f9f8fc` |
| `--color-purple-50`, `--purple-50` | `#f2f0f9` |
| `--color-purple-500`, `--purple-500` | `#523cc3` |
| `--color-purple-600`, `--purple-600` | `#4736b5` |
| `--color-red-100`, `--red-100` | `#ffcdcd` |
| `--color-red-200`, `--red-200` | `#f6a2a2` |
| `--color-red-30`, `--red-30` | `#fff7f7` |
| `--color-red-300`, `--red-300` | `#f38181` |
| `--color-red-500`, `--red-500` | `#f44336` |
| `--color-red-600`, `--red-600` | `#e53935` |
| `--color-red-700`, `--red-700` | `#d32f2f` |
| `--color-teal-50`, `--teal-50` | `#e0fffa` |
| `--color-yellow-200` | `#f5e993` |
| `--color-yellow-50` | `#faf9ec` |
| `--color-yellow-600` | `#d79304` |
| `--color-yellow-700` | `#ab6807` |
| `--color-yellow-800` | `#8d510e` |
| `--green-100` | `#bbecc8` |
| `--green-200` | `#96e0aa` |
| `--green-30` | `#f7fdfa` |
| `--green-300` | `#76d792` |
| `--green-400` | `#50cd7a` |
| `--green-50` | `#ebf9ef` |
| `--green-600` | `#00a855` |
| `--green-700` | `#008040` |
| `--green-800` | `#006633` |
| `--green-900` | `#024b26` |
| `--jply-color-orange` | `#ffa22b` |
| `--jply-color-purple` | `#8a74ed` |
| `--jply-color-red` | `#ff5757` |
| `--jply-main-dark01` | `#00a85d` |
| `--jply-main-light01` | `#2fdd78` |
| `--jply-main-light02` | `#7ef2a9` |
| `--jply-main-light03` | `#d9ffe6` |
| `--jply-sub-dark01` | `#0994ff` |
| `--jply-subcolor` | `#40b6ff` |
| `--orange-300` | `#ffb74d` |
| `--orange-700` | `#f57c00` |
| `--orange-800` | `#ef6c00` |
| `--orange-900` | `#e65100` |
| `--purple-200` | `#aaa1dd` |
| `--purple-300` | `#8477cf` |
| `--purple-400` | `#6856c3` |
| `--purple-700` | `#3b2ead` |
| `--purple-800` | `#3127a0` |
| `--purple-900` | `#2b1b92` |
| `--red-800` | `#c62828` |
| `--red-900` | `#b71c1c` |
| `--teal-100` | `#b8f0e7` |
| `--teal-200` | `#87ded0` |
| `--teal-30` | `#f1fffd` |
| `--teal-300` | `#63d3c1` |
| `--teal-400` | `#40c8b2` |
| `--teal-600` | `#15a78f` |
| `--teal-700` | `#0e917b` |
| `--teal-800` | `#077a68` |
| `--teal-900` | `#006454` |

## Typography

### Evidence classes

- **Official product use:** no opened brand or design document specifies the product font. The live interface is the evidence for the UI face.
- **Live-loaded:** `document.fonts` reports `Pretendard Variable 45 920 normal`, `Roboto 400 normal` and `jp-icons-2402 400 normal`. Body and button stacks begin with Pretendard Variable. Pretendard's dynamic-subset stylesheet is requested from jsDelivr (`orioncactus/pretendard@v1.3.9`); its rules were unreadable to the stylesheet walker. Roboto Regular is declared from `common.jobplanet.co.kr/fonts/woff/Roboto-Regular.woff2`; the icon face has its own first-party WOFF URL. Roboto's loaded presence does not establish that every Latin label uses it. The icon face is not a text-family token.
- **Official distributed assets:** the page declares font asset URLs on `common.jobplanet.co.kr` for Noto Sans KR, Roboto and the icon font. No licence or product-font specification was opened.
- **Declared-only:** Noto Sans KR (400/500/700/900) and swiper-icons have font-face declarations but no loaded entry. SUIT and S-CoreDream are named in CSS custom-property stacks, with no loaded entry. CSS fallback names are not exported as the brand face.
- **Unresolved:** the earlier IBM Plex Sans tech-blog claim remains unconfirmed; the opened blog text does not expose a font specification. No specimen is supplied for any unloaded or unresolved face. Substitute: none chosen.

### Measured hierarchy

The dominant paragraph size is 16px/400 (951 paragraph characters); section headings come from the heading census, not a presumed scale. The compiler retains the historical names `body` for 13px/400, `input` for 16px/400 and `nav` for 15px/400. Their observed roles are stated below; `body-lg` explicitly names the dominant paragraph style.

| Token | Size / weight | Line height | Observed use |
|---|---|---|---|
| `body` | 13px / 400 | 19.5px | Retained published name: small inherited control text and metadata; 20 paragraph characters at 13/400. Not the dominant paragraph size. |
| `label` | 13px / 600 | 20px | Company-name label in job-card. |
| `button-lg` | 16px / 600 | 24px | 전체보기 action label. |
| `nav` | 15px / 400 | 24px | Retained published name: now measured on the main search input, not the nav label. |
| `input` | 16px / 400 | 24px | Retained published name: dominant paragraph size, 951 characters in text-census; current main search field is 15px. |
| `body-lg` | 16px / 400 | 24px | Dominant paragraph size, 951 characters; Pretendard Variable in text-census.roles.paragraph. |
| `body-sm` | 14px / 400 | 22px | Secondary paragraphs, 130 characters, and compact header search input. |
| `label-sm` | 13px / 700 | 19.5px | Small bold paragraph text (8 characters in the text census, 19.5px line height). The footer 이용약관 link has the same size and weight on a 22px line height. |
| `heading-sm` | 15px / 600 | 24px | Job-card h3 titles (339 heading characters); visible navigation labels use the same size and weight. |
| `heading` | 22px / 700 | 30px | Section h3 headings (39 heading characters). |
| `display` | 32px / 700 | 44px | Search-hero h2 text (15 heading characters). |

The candidate digest associates 16px/400 with the chat launcher in one family summary. The separate text census records the 951 paragraph characters in Pretendard Variable. NotoSansKR on the third-party chat launcher is excluded from product typography. Measured control letter-spacing is `normal`.

## Layout

At 1440×1000, the navigation sits above a centered search hero; recruitment sections arrange three cards across the visible content area, with a right-side utility panel. The measured recruitment link is 334×172px with padding `16px 20px 20px`. It sits inside the white bordered card wrapper, so its own 0px radius must not be copied as the panel radius.

The measured small actions and input use 0px internal padding. Retained spacing values are 6px (advertising-label horizontal padding), 8px (topic-button vertical padding) and 16px (job-card top padding); these are observed uses, not proof of a complete global scale. Radius candidates are 0px for the actual text controls and card link; 6px for the trending-search expander and advertising label; 8px (`md`) for 자세히 보기 buttons; 12px (`lg`) for the pink TIP prompt. Search and next-arrow buttons have computed radius `3.35544e+07px`, producing fully rounded ends. No invented numeric pill token is added.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; responsive breakpoints and mobile rearrangement are unconfirmed.

## Elevation & Depth

The job-card wrapper has `box-shadow: none`, white fill and a 1px `#e5e6e9` border. The measured view-all, nav and next controls also have no box shadow at rest. The search wrapper has `rgba(184, 235, 208, 0.5) 0px 0px 24px 0px` after transparent zero-size shadow layers; the search icon has a `drop-shadow(rgba(0, 0, 0, 0.08) 0px 4px 16px)` filter. Flat recruitment cards and a glowing search entry coexist on this page.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

The six measured elements each report `transition: all 0s ease 0s`. No non-zero duration or easing curve is exported. The search/nav ancestors can change while focus opens a search layer; no general motion scale or reduced-motion behaviour was verified.

## Components

All six measured product controls are retained, including those whose measured states show `no brand change`. A nav link is represented as a button-type action; the recruitment link is a card. The measurements distinguish the actual interactive element from its surrounding panel.

### search-button

검색 icon button, transparent over the white search field; magnifier SVG fill #85878c. Fully round computed radius 3.35544e+07px. No text colour is exported.

height: `32px`; padding: `0px`.

hover: `no brand change`; pressed: `no brand change`; focus: `no brand change`.

### view-all

전체보기 button beside 마감임박 채용공고, transparent over white.

fg: `#85878c`; radius: `0`; height: `24px`; padding: `0px`; font: `16px / 600`.

hover: `no brand change`; pressed: `no brand change`; focus: `no brand change`.

### nav-link

기업 리뷰 navigation link to /review, transparent over white; visible child label is #323438 at 15px / 600. Pointer states were unmeasured.

fg: `#323438`; radius: `0`; height: `55px`; padding: `0px`; font: `15px / 600`.

focus: `no brand change`.

### search-input

Main 회사·직무 키워드를 검색해 보세요 field, transparent over white. The 24px measurement is the input itself, not its rounded search wrapper. On press and focus the computed shadow string changes to layers of zero size, which paint nothing.

fg: `#242628`; radius: `0`; height: `24px`; padding: `0px`; font: `15px / 400`.

hover: `no brand change`; pressed: `no brand change`; focus: `no brand change`.

### job-card

Job-posting card link in the 마감임박 채용공고 row, opening the posting on Jobkorea; transparent inside a white wrapper with a #e5e6e9 border. The listings rotate, so this is the pattern measured on one card: exported fg/font describe the company-name child (#686a6d, 13px / 600); the title is #242628 at 15px / 600. Link radius is 0, not its wrapper.

fg: `#686a6d`; radius: `0`; width: `334px`; height: `172px`; padding: `16px 20px 20px`; font: `13px / 600`.

hover: `no brand change`; pressed: `no brand change`; focus: `no brand change`.

### carousel-next

다음 circular icon button for 마감임박 cards on white, with 1px #e5e6e9 border; SVG arrow fill #323438. Fully round computed radius 3.35544e+07px.

bg: `#ffffff`; border: `#e5e6e9`; height: `40px`; padding: `0px`.

hover: `no brand change`; pressed: `no brand change`; focus: `no brand change`.

### States

Search-button, view-all, job-card and carousel-next retain `no brand change` for hover, pressed and focus within the probe's computed-style/DOM scope. Their automatic browser focus outlines are excluded from authored styling. Nav-link focus is also `no brand change`; hover and pressed remain UNMEASURED because the live pointer pass encountered `pointer-events:none`.

Search-input hover, pressed and keyboard focus are `no brand change`. On press and focus its computed shadow goes from `none` to five layers with no offset, blur or spread (one of them `rgb(30, 136, 229)`); layers of zero size paint nothing, so no blue ring is claimed. Its focus crop was partly obscured by the search layer, so visual focus appearance remains unresolved. Empty results, loading, validation, success and disabled treatments were not exercised.

## Do's and Don'ts

### Do

- Use the loaded Pretendard Variable face and the measured hierarchy.
- Keep white job panels and hairline borders, with lighter grey metadata.
- Preserve green employee-rating chips and the distinct blue Jobkorea application label.
- Distinguish a link's inherited style from the visible child label.

### Don't

- Treat the legacy 13px `body` name as the dominant paragraph size.
- Turn the browser's automatic focus outline into a brand ring.
- Give transparent controls a solid background token.
- Render unloaded font names or convert declared-only palette entries into product tokens.

## Voice & Tone

The current interface asks “어떤 회사·직무가 궁금하신가요?” and prompts “회사·직무 키워드를 검색해 보세요”. The TIP prompt explains the benefit directly: “회사를 팔로우하면 마감 임박 공고가 있을 때 알려드려요!” These are useful examples of question-led search, descriptive labels and an explicit reason to follow an employer; they do not establish an exhaustive editorial policy.

## Agent Prompt Guide

“Build a Korean employer-information homepage with a white canvas, a search-led hero, 32px/700 hero text, 22px/700 section headings and 15px/600 recruitment titles in Pretendard Variable. Use #323438 paragraph ink and #a4a6ad metadata. Place recruitment links in white panels with #e5e6e9 borders. Use #e3f8ed rating chips with #00a866 ink and #083ccc application labels outlined in #96b1fd. Keep the observed search glow separate from the flat job cards.”

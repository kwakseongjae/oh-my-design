---
name: Modetour
colors:
  foreground: '#000000'
  nav-ink: '#111111'
  canvas: '#ffffff'
  color-line-dark: '#888888'
  muted: '#555555'
  primary: '#009c75'
  browse-border: '#e5e7eb'
  border: '#d3dbd9'
  carousel-border: '#8f9f9b'
  hero-controls-bg: '#00454d'
  surface: '#f5f6f6'
  all-menu-fg: '#03a373'
  color-line-normal: '#eaeaea'
  m-time-deal-bg: '#fef1fe'
typography:
  input:
    fontSize: 14px
    fontWeight: 400
    use: Header search input; inner input line-height 22px.
  nav-sm:
    fontSize: 14px
    fontWeight: 500
    use: Footer navigation links, including 회사소개.
  nav:
    fontSize: 16px
    fontWeight: 600
    use: Header navigation and the 전체보기 button; line-height 19px.
  button:
    fontSize: 12px
    fontWeight: 400
    use: 둘러보기 compact button; line-height 18px.
  card-title:
    fontSize: 22px
    fontWeight: 600
    use: Destination title controls such as [푸꾸옥] 패키지; line-height 30px.
  tab:
    fontSize: 25px
    fontWeight: 700
    use: 캄보디아, 모두 단독크루즈 and 유럽의 겨울 section tabs; line-height 35px in survey.rows.
  label:
    fontSize: 13px
    fontWeight: 500
    use: Rotating popular-search term buttons; line-height 15px.
  caption:
    fontSize: 13px
    fontWeight: 400
    use: Customer-service link and smaller paragraph copy; paragraph census 200 characters.
  label-lg:
    fontSize: 18px
    fontWeight: 500
    use: Recommendation-card category label 해외여행; line-height 21px.
  body:
    fontSize: 22px
    fontWeight: 500
    use: 'Largest paragraph character count: 456 characters in 30 paragraph elements; common line-height 25.3px. This is the census body role, not a universal text size.'
  heading:
    fontSize: 30px
    fontWeight: 700
    use: 'The h2 heading size: 9 heading characters; heading census line-height 36px.'
rounded:
  none: 0px
  card: 10px
  chip: 20px
  button: 5px
components:
  search-input:
    type: input
    rounded: 0px
    height: 22px
    padding: 0px 0px 0px 10px
    typography: 14px / 400
    hover: 'ancestor up1.border: 1px solid rgb(245, 246, 246) -> 1px solid rgb(0, 156, 117); ancestor up1.shadow: none -> rgba(0, 156, 117, 0.2) 0px 0px 0px 2px'
    pressed: 'ancestor up1.border: 1px solid rgb(245, 246, 246) -> 1px solid rgb(0, 156, 117); ancestor up1.shadow: none -> rgba(0, 156, 117, 0.2) 0px 0px 0px 2px'
    focus: 'ancestor up1.border: 1px solid rgb(245, 246, 246) -> 1px solid rgb(0, 156, 117); ancestor up1.shadow: none -> rgba(0, 156, 117, 0.2) 0px 0px 0px 2px'
    use: 'Header inner search input: 337px wide, transparent on its #f5f6f6 wrapper; rest ink rgba(0, 0, 0, 0.88). The measured state styling belongs to the first ancestor wrapper, not the 22px inner input.'
  overseas-nav:
    type: button
    textColor: '#111111'
    rounded: 0px
    height: 19px
    padding: 0px
    typography: 16px / 600
    hover: 'fg #009c75'
    pressed: 'fg #009c75'
    use: '해외여행 header navigation button, transparent on the white canvas; rest #111111, hover and pressed ink #009c75. Keyboard focus adds only the browser auto outline.'
  view-all:
    type: button
    border: '#111111'
    rounded: 5px
    height: 52px
    padding: 0px
    typography: 16px / 600
    hover: 'self bg: rgba(0, 0, 0, 0) -> rgb(0, 156, 117); fg: rgba(0, 0, 0, 0.85) -> rgb(255, 255, 255) (self, label); self border: 1px solid rgb(17, 17, 17) -> 1px solid rgb(0, 156, 117)'
    pressed: 'self bg: rgba(0, 0, 0, 0) -> rgb(0, 156, 117); fg: rgba(0, 0, 0, 0.85) -> rgb(255, 255, 255) (self, label); self border: 1px solid rgb(17, 17, 17) -> 1px solid rgb(0, 156, 117)'
    use: '전체보기 M타임딜 section button: 176px wide, transparent on #fef1fe, rest ink rgba(0, 0, 0, 0.85); hover and pressed fill and border #009c75, ink #ffffff. Keyboard focus adds only the browser auto outline.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard
    display: Modetour
---

# Design System Inspiration of Modetour

## Overview

### Visual Theme & Atmosphere

Modetour (모두투어) is a travel commerce service whose homepage presents overseas packages, air-and-hotel trips, flights and hotels. Its current surface combines a white canvas, green interaction accents, large destination photography, promotional carousels and compact navigation. The contrast between image-led campaigns and restrained interface controls is the useful pattern to carry into a travel-shopping interface.

In its November 2023 announcement, the company said it had completely renewed its PC and mobile homepage to strengthen its B2C online channel. The present measurement shows the Korean homepage at `www.modetour.com/`, final HTML `lang="ko"`, with search, reservation access and campaign browsing sharing the header. The dated announcement establishes a redesign, while the measurements describe the current implementation.

### Brand Narrative

The live page title is “여행은 모두투어”. The company described its homepage renewal as strengthening its B2C online channel. Photography, short destination attributes and visible prices make that browsing pattern concrete on the measured page.

### Principles

Implementation lessons from the capture: keep campaign imagery prominent, make the navigation compact, and make green state feedback consistent across the search wrapper, navigation and outlined action. These are measured interface patterns, not a published corporate-principles list.

### Personas

No first-party persona research was verified.

## Colors

These names describe measured roles on this homepage. The reference primary is the observed interaction green, not an assertion that every primary CSS declaration paints the page.

| Token | Value | Observed role |
|---|---|---|
| `foreground` | `#000000` | Most frequent paragraph ink: 63 paragraph elements; also title and top-line CSS properties. |
| `nav-ink` | `#111111` | Rest ink of 해외여행 and 둘러보기; rest border of 전체보기. |
| `canvas` | `#ffffff` | White page canvas in the screenshots; 둘러보기 background and 전체보기 hover/pressed ink. |
| `color-line-dark` | `#888888` | Rendered text and backgrounds; the site also declares this value as --color-line-dark. Footer business-information link ink in survey.rows. |
| `muted` | `#555555` | Secondary text: the visible https://biz.modetour.com link in the customer-service area. |
| `primary` | `#009c75` | Observed interaction accent: 해외여행 hover/pressed ink, search wrapper state border, and 전체보기 hover/pressed fill and border. CSS --color-primary2. |
| `browse-border` | `#e5e7eb` | 1px border of 둘러보기. |
| `border` | `#d3dbd9` | One of the two most frequent border values (10 each); recommendation-carousel next-arrow border in survey.rows. |
| `carousel-border` | `#8f9f9b` | Border of the 36px carousel arrow buttons at survey y=3055. |
| `hero-controls-bg` | `#00454d` | Background and border of the two 32px circular hero arrows. |
| `surface` | `#f5f6f6` | Rest background and border of the search input wrapper. |
| `all-menu-fg` | `#03a373` | Rest ink of the 전체메뉴 navigation link. |
| `color-line-normal` | `#eaeaea` | Rendered border colour, also the site’s --color-line-normal divider declaration. |
| `m-time-deal-bg` | `#fef1fe` | Background behind 전체보기 in the M타임딜 section, measured as rest.behind. |

The input ink is `rgba(0, 0, 0, 0.88)`; the whole recommendation-card control and the outlined button carry `rgba(0, 0, 0, 0.85)` at rest. These alpha values are prose only. The card’s visible category label is #009c75, rather than its parent’s inherited alpha black.

### Declared in the site's CSS, not seen painted

These first-party root declarations are retained as CSS evidence and are not exported as tokens. The list reflects the compiler’s declared-only classification for this capture; it does not establish a disabled, error or success state.

| CSS property | Value |
|---|---|
| `--color-background-dark` | `#f8f8f8` |
| `--color-background-normal` | `#fafafa` |
| `--color-bg-disabled` | `#e6e6e6` |
| `--color-font-disabled` | `#bababa` |
| `--color-font-light`; `--color-line-light` | `#727272` |
| `--color-font-placeholder` | `#999999` |
| `--color-invert-dark` | `#393939` |
| `--color-line-disabled` | `#d3d3d3` |
| `--color-point-error` | `#ed4949` |
| `--color-point-positive` | `#3683d1` |
| `--color-primary`; `--color-primary-dark2` | `#028267` |
| `--color-primary-dark` | `#046450` |

## Typography

### Font evidence classes

- **Official product use:** no opened font-specific statement establishes a prescribed product face.
- **Live-loaded:** `document.fonts` reports Pretendard 400, 500, 600, 700 and 800, and Modetour 700, all normal. The computed body and button family is Pretendard. The text census associates Modetour 700 with 42px campaign text in div elements; it is not an h1 measurement.
- **Serving evidence:** a Pretendard stylesheet is requested from `https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/pretendard.min.css`; its cross-origin rules were unreadable to the census, so individual face-file sources remain unresolved. Modetour 700 has local-site `@font-face` sources `/_next/static/media/ModetourB.75c8de80.woff` and `/_next/static/media/ModetourB.dbf0093e.ttf`.
- **Official distributed assets:** no font-download, licence or distribution page was verified. A live font response is not evidence of redistribution rights.
- **Declared-only:** GmarketSans 300, 500 and 700 appears in `@font-face`, but not among loaded faces; it receives no specimen or family token. `swiper-icons` is an icon-font declaration and is excluded from typography families.
- **Unresolved:** font authorship, licensing and an official brand-font policy. Substitute: none chosen.

### Measured scale

The largest paragraph character count is 22px/500 (456 characters); the smaller 13px/400 paragraph run has 200. The semantic heading census contains one h2 size, 30px/700, with 9 characters and 36px line-height. Many display-looking campaign and card labels are divs or spans; do not infer semantic headings from their size.

| Role | Size / weight | Element evidence |
|---|---|---|
| `input` | 14px / 400 | Header search input; inner input line-height 22px. |
| `nav-sm` | 14px / 500 | Footer navigation links, including 회사소개. |
| `nav` | 16px / 600 | Header navigation and the 전체보기 button; line-height 19px. |
| `button` | 12px / 400 | 둘러보기 compact button; line-height 18px. |
| `card-title` | 22px / 600 | Destination title controls such as [푸꾸옥] 패키지; line-height 30px. |
| `tab` | 25px / 700 | 캄보디아, 모두 단독크루즈 and 유럽의 겨울 section tabs; line-height 35px in survey.rows. |
| `label` | 13px / 500 | Rotating popular-search term buttons; line-height 15px. |
| `caption` | 13px / 400 | Customer-service link and smaller paragraph copy; paragraph census 200 characters. |
| `label-lg` | 18px / 500 | Recommendation-card category label 해외여행; line-height 21px. |
| `body` | 22px / 500 | Largest paragraph character count: 456 characters in 30 paragraph elements; common line-height 25.3px. This is the census body role, not a universal text size. |
| `heading` | 30px / 700 | The h2 heading size: 9 heading characters; heading census line-height 36px. |

## Layout

At the measured 1440×1000 viewport, the header search precedes a horizontal product navigation row; the hero is followed by destination cards and a succession of campaign, live-broadcast and service sections. Reuse image-and-text cards with explicit destination, trip duration, attributes and price, as seen in the recommendation row. The site declares `--max-content-width: 1200px`; the M타임딜 button’s ancestor also carries `max-w-[1200px]` and its section carries `py-[100px]`. These are observed desktop layout values, not a complete spacing scale.

### Responsive Behavior

Only desktop 1440×1000 was measured; breakpoints and mobile states are unverified.

## Elevation & Depth

The recommendation-card rest shadow includes `rgba(17, 17, 17, 0.15) 0px 0px 6px 0px` after two zero-alpha shadow layers. The search state halo is a 2px spread with no blur. CSS also declares `--shadow-overlay: 0 0 6px hsla(0,0%,7%,0.149)` and `--shadow-menu: 0 0 2px 2px #dfdfdf`; declaration alone does not establish where those shadows render.

## Motion & Easing

The search input’s raw computed transition is `all 0.2s ease 0s`. The other five controls report `all 0s ease 0s`. These are control-level observations; hero-carousel timing, video playback and reduced-motion behaviour were not measured.

## Components

- **Header search:** the inner input is 337×22px, square, padding `0px 0px 0px 10px`, Pretendard 14px/400. Its surrounding #f5f6f6 wrapper changes its 1px border to #009c75 and adds `rgba(0, 156, 117, 0.2) 0px 0px 0px 2px` on hover, pressed and keyboard focus. Preserve that wrapper relationship.
- **해외여행:** a transparent 55.3×19px navigation button, no padding or radius, Pretendard 16px/600. Rest #111111 becomes #009c75 on hover and pressed.
- **전체보기:** a transparent 176×52px outlined button over #fef1fe, 5px corners, no padding, Pretendard 16px/600. The rest 1px #111111 border changes to #009c75 with a matching fill and #ffffff ink on hover and pressed.
- **전체메뉴 link:** 55.3×19px, square, no padding, 16px/600, transparent, #03a373 ink. Hover and pressed had no measured change; keyboard focus showed only the browser’s auto outline. It remains prose only.
- **Recommendation card:** the measured 코타키나발루 card is a `div role="button"`, 430×524px, radius 10px, no padding, parent font 14px/400. Its visible 해외여행 category label is 18px/500 and #009c75. Hover and pressed had no measured change; keyboard focus showed only an auto outline. It remains prose only.
- **둘러보기:** a 65.7×26px white button, #111111 ink, 1px #e5e7eb border, 20px corners, no padding, 12px/400. Hover and pressed had no measured change; keyboard focus showed only an auto outline. It remains prose only.

### States

Search hover, pressed and keyboard focus share the wrapper border-and-halo change. 해외여행 hover and pressed share the green-ink change. 전체보기 hover and pressed share the green-fill/white-ink change. The other three controls showed no authored change in the compared DOM/style scope; their keyboard outlines are browser `auto` outlines. No disabled, validation or submission state was measured.

## Do's and Don'ts

- Use the measured #009c75 interaction green for the outlined action’s hover fill and navigation hover ink.
- Keep the search halo on its wrapper, and retain the measured inner-input geometry.
- Distinguish compact 20px-corner browse buttons, 5px-corner outlined actions and 10px-corner cards.
- Preserve the recommendation label’s own colour and font rather than copying its parent’s inherited styles.
- Leave unverified semantic statuses and disabled styles out of an implementation derived from this reference.

## Voice & Tone

The homepage combines task labels such as “해외여행” and “예약내역” with promotional phrasing such as “모든순간 두근두근”. Use concise task labels and keep promotional copy attached to its campaign; this is an observation of the page, not an official voice guide.

## Agent Prompt Guide

“Build a Korean travel-commerce section on white, with destination photographs, Pretendard labels and a 176×52px outlined 전체보기 action on #fef1fe. Give the action 5px corners, a 1px #111111 rest border and 16px/600 text; hover and pressed use #009c75 fill and border with #ffffff text. For header search, keep a transparent 22px inner input inside the pale #f5f6f6 wrapper and apply the measured green border and alpha halo to that wrapper.”

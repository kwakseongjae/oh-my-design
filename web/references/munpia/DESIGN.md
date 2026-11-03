---
name: Munpia
colors:
  primary: '#2882f5'
  primary-hover: '#0f57b3'
  primary-tint: '#ecf4fe'
  background: '#ffffff'
  surface: '#f5f5f5'
  foreground: '#757575'
  heading: '#121212'
  content: '#454545'
  divider: '#ebebeb'
  border: '#dedede'
  border-strong: '#c7c7c7'
  divider-strong: '#d1d1d1'
  secondary-orange: '#fa7000'
typography:
  button:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 20px
    use: Measured primary login label
  navigation:
    fontSize: 17px
    fontWeight: 500
    lineHeight: 22px
    use: Measured header link 무료 웹소설
  input:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 18px
    use: Measured header search input
  label:
    fontSize: 13px
    fontWeight: 400
    use: Measured child span in the header login button
rounded:
  none: 0px
  button: 6px
  header-button: 8px
  explorer: 10px
  campaign: 14px
components:
  login-primary:
    type: button
    backgroundColor: '#2882f5'
    textColor: '#ffffff'
    rounded: 6px
    height: 42px
    padding: 1px 14px
    typography: 15px / 400
    hover: '#0f57b3'
    pressed: '#0f57b3'
    use: 로그인 button in the right account panel; measured width 203px. Hover and pressed change only its background.
  login-secondary:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#454545'
    border: '1px solid #dedede'
    rounded: 8px
    height: 30px
    padding: 6px 8px
    typography: 13px / 400
    hover: '#f5f5f5'
    pressed: '#f5f5f5'
    use: 로그인 button in the header; foreground and font describe the visible child span. Outer element is 13.3333px/400 with black inherited ink.
  nav-free:
    type: button
    textColor: '#757575'
    rounded: 0px
    height: 22px
    padding: 0px
    typography: 17px / 500
    hover: 'fg #2882f5'
    pressed: 'fg #2882f5'
    use: 무료 웹소설 is a link on the white header. Its background is transparent; hover and pressed recolor the link and label.
  novel-card:
    type: card
    textColor: '#121212'
    rounded: 0px
    height: 114px
    padding: 0px
    hover: 'title underline solid #121212'
    pressed: 'title underline solid #121212'
    use: 선협에서 땅굴을 숨김 is a 300px-wide link on white. Foreground describes its title; the anchor itself inherits black. Only the title gains an underline at the sampled pointer position over the author.
  explorer:
    type: button
    textColor: '#454545'
    rounded: 10px
    height: 40px
    padding: 0px
    hover: 'inner span bg #f5f5f5'
    pressed: 'inner span bg #f5f5f5'
    use: '리모컨 열기 is a 40px-wide transparent button on the white left rail. Foreground describes its visible arrow. Its 22px inner circle is white with a 1px #c7c7c7 border; only that inner circle changes background.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Pretendard
---

# Design System Inspiration of Munpia

## Overview

### Visual Theme & Atmosphere

Munpia is a Korean web-fiction platform for discovering, reading and publishing serialized stories. Its own history dates the genre-fiction community to 2002 and paid service to 2013. The company describes a place where writers and readers exchange their thoughts, spanning martial arts, fantasy, romance, science fiction and other genres. Its corporate timeline records NAVER WEBTOON's acquisition of a stake in 2021 and discusses adaptations into webtoons and film. [Company and history](https://www.munpiacorp.com/)

The desktop homepage combines a blue initial mark and black wordmark with a white reading catalogue. Illustrated covers and campaign artwork carry much of the visual variety. Compact rankings, genre labels, author names and episode counts organize the surrounding interface. Blue `#2882f5` marks the main login action and interactive emphasis; grey metadata keeps the many adjacent stories legible as separate entries. These are observations of the [captured product surface](https://www.munpia.com/).

The current direction emphasizes easier discovery. A June 2026 notice announced a PC renewal for July 9, describing wider use of the screen, simpler menus, unified search, a combined bestsellers view and a left-side story explorer. The measured homepage has the two-row header, ranked shelves and left rail associated with those functions. [PC renewal notice](https://nhelp.munpia.com/notices/1792?page=0)

The measured homepage is the Korean desktop surface (`www.munpia.com/`, HTML `lang="ko"`); the capture did not redirect to another path.

### Brand Narrative

The corporate history links a genre-fiction community to paid serialization and then to adaptation partnerships. The product still gives stories, rankings and author information most of the page. Its 2026 PC renewal extends discovery through search and the left explorer. A separate April 2026 notice describes a dedicated story-promotion board and author publishing access through the PC library and Creator app. [Company](https://www.munpiacorp.com/), [Story-promotion update](https://nhelp.munpia.com/notices/1781?page=0)

### Principles

The Service & Design team explicitly describes making discovery and consumption more intuitive, designing information architecture and interfaces carefully, and improving creative tools. The visual reference follows that emphasis: keep story identity readable, place metadata close to its cover, and make discovery controls recognizable. The latter instructions are a synthesis of the measured homepage, not quoted company principles. [Service & Design](https://recruit.munpiacorp.com/cnts/design)

### Personas

No persona research was verified.

## Colors

The live census contains 235 computed custom properties and 236 declared names. Of these, 232 are product definitions grouped under `--color-*`, `--btn-*`, `--input-*`, `--selection-*`, `--selectbox-*`, `--divider-*`, `--table-*`, `--pagination-*` and `--dim-*`. Their values are present in the product's first-party stylesheet. Swiper variables and empty Lightning CSS mode switches are excluded.

| Reference role | Value | Live source and use |
|---|---|---|
| Primary | `#2882f5` | `--color-pri-500`, `--btn-fill-bg-pri`; primary login background and navigation hover ink |
| Primary hover | `#0f57b3` | `--btn-fill-bg-pri-hov`; measured primary hover and pressed background |
| Primary tint | `#ecf4fe` | `--color-pri-30`, `--btn-line-bg-pri-hov`; a declared light-blue role, not a measured outlined-button state |
| Background | `#ffffff` | `--color-neu-00`; header, account panel and ground behind the measured card |
| Surface | `#f5f5f5` | `--color-neu-10`; search wrapper and secondary login hover background |
| Foreground | `#757575` | `--color-neu-300`; most frequent paragraph ink in this metadata-heavy homepage, also resting navigation ink |
| Heading / story title | `#121212` | `--color-neu-900`; the measured card's title |
| Content | `#454545` | `--color-neu-500`; header login's visible label, explorer arrow and card count values |
| Divider | `#ebebeb` | `--divider-lv2`; most frequent border colour in the census; measured cover border |
| Border | `#dedede` | `--color-neu-30`, `--input-bor-def`; measured secondary login border |
| Strong border | `#c7c7c7` | `--color-neu-50`; explorer's inner circle border |
| Strong divider | `#d1d1d1` | `--divider-lv4`; measured card metadata separator |
| Secondary orange | `#fa7000` | `--color-sec-org-500`; rendered text colour in the homepage census |

Paragraph ink is mixed: `#757575` occurs on 195 paragraphs, `#121212` on 92 and `#454545` on 70. The `foreground` role records the leading paragraph observation; it is not a rule that every paragraph uses one colour. Alpha colours remain separate: for example, `--dim-page-modal` resolves to `#000000b2` and is not flattened into an opaque palette colour.

## Typography

**Official product-use statement:** no company-authored font specification was verified. The company's Service & Design page describes its UI and visual-design work, but does not name a typeface. [Service & Design](https://recruit.munpiacorp.com/cnts/design)

**Live-loaded:** `document.fonts` reports **Pretendard 400, 500 and 700**, all normal style. The measured controls resolve to Pretendard. The font-face definitions offer local named faces followed by WOFF2 URLs on `cdn1.munpia.com/v2/assets/fonts/`, including `Pretendard-Regular.woff2`, `Pretendard-Medium.woff2` and `Pretendard-Bold.woff2`. This proves loaded product use; the census does not distinguish a local hit from a network transfer. Pretendard is the only family promoted to the typography tokens.

**Official distributed assets:** the product CSS declares Pretendard weights 100–900; shared global CSS also declares Noto Sans KR 400/500/700, NanumGothic 400, NanumMyeongjo 400 and Paperlogy 100–900 with first-party asset URLs. This is evidence of deployment in the site's CSS, not a separate distribution licence. Font files were not downloaded.

**Declared-only:** Pretendard 100/200/300/600/800/900 and the other text families above do not appear in the loaded-face list. The body fallback chain also names platform faces and generic families; their actual use was not established. None receives a live specimen or a family token. `swiper-icons` is a declared library icon font and is excluded from product typography.

**Unresolved:** font licensing and an official brand-font designation were not verified. Substitute: none chosen.

Measured type metrics:

| Element | Size / weight | Line height |
|---|---|---|
| Primary login label | 15px / 400 | 20px |
| Free-fiction navigation link | 17px / 500 | 22px |
| Search input | 14px / 400 | 18px |
| Header login label span | 13px / 400 | Not separately recorded |
| Card anchor, inherited style | 16px / 400 | `normal` |
| Card's rank numeral | 28px / 500 | Not separately recorded |

The card title's authored CSS separately specifies Pretendard 16px/500 with 21px line height; genre metadata is 13px/400 with 17px line height and author metadata is 14px/400 with 18px line height. These are stylesheet declarations, not additional computed typography measurements. The census found no `h1` to measure.

## Layout

At 1440×1000, the header spans the viewport and is sticky. Its first row holds the wordmark, search and account controls; the second holds category navigation. The content begins at x=170px in the captured layout. A fixed explorer rail sits at the left edge. The main area pairs illustrated promotions and ranked story shelves with a right column of account, campaign, ranking and notice content.

The measured paid-ranking card places an 80×114px cover wrapper beside metadata. Its stylesheet declares a 14px gap, 300px columns and 10px column/row gaps. The search input sits inside an authored 300×38px wrapper with a 50px radius and padding `0 10px 0 16px`; these wrapper dimensions are CSS declarations, not the input's measured geometry. No global spacing scale is inferred from these local values.

### Responsive Behavior

Only the 1440×1000 desktop surface was measured; mobile layout and breakpoint behaviour are unverified.

## Elevation & Depth

All six measured control surfaces report `box-shadow: none`. Separation comes from whitespace, thin neutral borders and rounded artwork containers. Campaign links in the survey have a 14px radius. The account panel's authored CSS also uses a 14px radius, white background, 1px neutral border and 20px padding. The post-interaction search panel visibly has a shadow, but its computed shadow value was not measured and is not tokenized.

## Motion & Easing

The primary login's recorded transition string is `background-color, border-color, color 0.15s, 0.15s, 0.15s ease, ease, ease 0s, 0s, 0s`. The explorer's outer target records `width, height 0.3s, 0.3s ease, ease 0s, 0s`; its size did not change in the sampled states. The nav link, input, card anchor and header login outer element record `all 0s ease 0s`. These are the probe's raw property/duration/timing/delay strings. No broader motion scale or custom easing curve was verified.

## Components

These identities come from one states capture after closing the story promotion and the favourites tooltip. Rest, true hover, held press and real keyboard focus were measured for all six controls. The five controls with authored visual changes are represented in component tokens.

| Control | Measured identity | Hover and pressed |
|---|---|---|
| Primary login, right panel | 203×42px; radius 6px; padding 1px 14px; 15px/400; background `#2882f5`, label `#ffffff`; transparent 1px border | Background becomes `#0f57b3`; label stays white |
| Secondary login, header | 51.7×30px; radius 8px; padding 6px 8px; white background; 1px `#dedede` border | Background becomes `#f5f5f5` |
| Free-fiction nav link | 77.6×22px; radius 0; padding 0; 17px/500; transparent on white, ink `#757575` | Link and label become `#2882f5` |
| Ranked story card link | 300×114px; radius 0; padding 0; transparent on white; anchor 16px/400 | Title gains `underline solid #121212` |
| Explorer opener | 40×40px outer target; radius 10px; padding 0; inherited 13.3333px/400; transparent on white | Inner white circle becomes `#f5f5f5` |

The header login's outer element has `#000000` ink and a 13.3333px/400 font, while its visible child label is `#454545`, 13px/400. The tokens use the visible label values. The card's anchor also inherits `#000000`; its title is `#121212`, its genre and author are `#757575`, and its numeric metadata values are `#454545`.

The explorer's visible arrow is `#454545` inside a 22×22px white circle with a 1px `#c7c7c7` border. Its circle is authored with a 50% radius; the 10px radius token describes the outer hit target. The measured change belongs to that inner span, not the outer background.

The **search input** is 246×20px, radius 0, padding 1px 2px, 14px/400 with 18px line height, transparent with `#121212` ink on a `#f5f5f5` wrapper. All three measured states had no style change within the probe's comparison scope, so it stays in prose. A search-suggestions panel is visible in the post-interaction screenshot; the panel is a sibling outside that comparison scope. Its states were not measured.

### States

Hover and pressed states were both reached, including `:hover === true` and `:active === true` in their respective snapshots. Primary login darkens, header login gains a pale-grey fill, the nav link turns blue, the card title underlines, and the explorer's inner circle gains a pale-grey fill. Pressed values matched hover values at the sampled pointer positions; this does not establish a separate active-only design rule.

Keyboard focus on those five controls adds only Chrome's `outline-style: auto` ring. It is omitted from component tokens. The input has no measured style change on keyboard focus. Focus comparisons report no style changes persisting after blur. No disabled control state was measured.

The comparison includes each control and its pseudo-elements, its descendants and their pseudo-elements, and three ancestor levels. It includes empty layers, imagery attributes and SVG paint/geometry; siblings and pixel-only changes are outside scope. The input has no descendants, while the card has 17, including one image and one empty separator.

## Do's and Don'ts

To reproduce this measured surface:

- Use white ground, compact metadata and illustrated story covers.
- Use the darker primary blue on login hover and pressed states.
- Keep the header login label's own size and colour distinct from its parent's inherited style.
- Underline the ranked card's title at the measured hover position.
- Preserve the explorer's outer target and smaller inner circular treatment.
- Do not treat the browser's automatic focus ring, Swiper variables or declared-only fonts as brand tokens.

## Voice & Tone

The official greeting calls the service “웹소설의 유토피아, 글세상 문피아” and addresses readers as “독자님들께”. Homepage labels are concise and task-specific: “베스트”, “무료 웹소설”, “선호작”, “내서재” and “더보기”. The renewal notice explains changes in terms of finding and enjoying stories more easily. These examples support a courteous, reader-directed reference voice; no broader verbal-identity manual was verified. [Renewal notice](https://nhelp.munpia.com/notices/1792?page=0)

## Agent Prompt Guide

“Build a Korean fiction catalogue on white with compact ranked cover-and-metadata rows. Use loaded Pretendard 400/500/700. The right account-panel login button is 42px tall, radius 6px, with 15px/400 white text on `#2882f5`; hover and held press use `#0f57b3`. The free-fiction nav link uses 17px/500 grey text and turns blue on hover. Keep the measured story-card title underline and the metadata colour hierarchy.”

## Governance

### Known Gaps

- **Contrast, `login-primary`.** Text `#ffffff` on `#2882f5` measures 3.75:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

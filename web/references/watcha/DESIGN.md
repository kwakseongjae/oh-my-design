---
name: Watcha
colors:
  primary: '#f82f62'
  primary-hover: '#ff3d6e'
  primary-pressed: '#f6285c'
  primary-20: '#f82c60'
  primary-50: '#f6407a'
  primary-60: '#ffd6e3'
  primary-deep: '#de2a60'
  canvas: '#000000'
  foreground: '#ffffff'
  surface-raised-1: '#191a1c'
  surface-raised-2: '#28292a'
  surface-90: '#333436'
  foreground-secondary: '#babac1'
  foreground-tertiary: '#84868d'
  foreground-disabled: '#4f5152'
  icon-muted: '#999ca1'
  divider: '#1b1c1d'
  divider-alt: '#38393d'
  green-10: '#0aca9e'
  red-10: '#e73e3e'
  yellow-10: '#fbc02d'
  blue-10: '#3da7ff'
  blue-20: '#1a6ce7'
  purple-10: '#40032e'
typography:
  label:
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.3846153846
    use: Measured header login label; 18px line height
  navigation:
    fontSize: 16px
    fontWeight: 500
    use: Measured visible movie-navigation span; anchor itself is 16px/400
  hero-action:
    fontSize: 21.6667px
    fontWeight: 500
    use: Measured visible collection-action span at the captured desktop size
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: Measured poster-caption paragraph; declared .XkHBq line height is 18px
rounded:
  button: 4px
  link: 0px
spacing:
  button-inline: 12
  page-inline: 40
  small-page-inline: 20
  navigation-gap: 4
components:
  button-primary:
    type: button
    backgroundColor: '#f82f62'
    textColor: '#ffffff'
    rounded: 4px
    height: 32px
    padding: 0px 12px
    typography: 13px / 500 Pretendard
    hover: '#ff3d6e'
    pressed: '#f6285c'
    use: Header 로그인 link to sign-in; 18px label line height; no border or shadow. Keyboard focus uses the browser auto outline.
  nav-item:
    type: button
    textColor: '#84868d'
    rounded: 0px
    height: 24px
    padding: 0px
    typography: 16px / 500 Pretendard
    hover: 'Label ::before opacity 0 to 1; 2px underline in #84868d'
    pressed: 'Label ::before opacity 0 to 1; 2px underline in #84868d'
    use: 영화 navigation link on the black header; geometry describes the anchor, font and fg describe its visible span. The anchor itself is white 16px/400.
  poster-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    height: 317.3px
    padding: 0px
    typography: 12px / 400 Pretendard
    hover: ImageWrapper::after paints rgba(0, 0, 0, 0.3) over the image
    pressed: ImageWrapper::after paints rgba(0, 0, 0, 0.3) over the image
    use: 청년경찰 poster link, /ko/contents/m5nQDa3; transparent anchor over the black page, 214.2px wide. Radius is the anchor radius; font describes its visible caption, while the anchor is 16px/400.
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Watcha (왓챠)

## Overview

### Visual Theme & Atmosphere

Watcha is a Korean streaming service built around discovering content that suits an individual's taste. Its company history records the film-recommendation beta in August 2012 and the launch of Watcha Play in January 2016. In July 2020, the streaming service became WATCHA and the evaluation and recommendation service became WATCHA PEDIA. The accompanying identity change expressed the company's commitment to different perspectives and people with distinct tastes. The current brand story still centers on respecting those differences and connecting people with content through data and technology. [History](https://watcha.team/a030faf7-4a2f-423f-a223-9f5180c4e4cd), [2020 identity announcement](https://watcha.team/4ba0426a-ea5c-430c-b629-ea07f04d8ca9), [brand story](https://watcha.team/35ce28ca-4d71-4ea8-bd27-4c3e2ed43d2e).

The measured browse page gives that content a black `#000000` setting, white `#ffffff` paragraph ink, gray navigation labels and a compact pink login action. Large illustrated billboards and rows of artwork occupy most of the page; the navigation and login control are much smaller. Pretendard supplies the loaded interface type. This relationship between prominent artwork and compact chrome is the useful visual pattern to carry into a Watcha-inspired interface. It is an observation of the captured page, rather than a published company design principle.

The measured homepage is the Korean edition at `watcha.com/ko/browse/all`, with HTML `lang="ko"`. Its navigation includes films, series, individual purchases, webtoons and Watcha Party. The company's current service overview also describes short vertical viewing through Shortcha, while a July 2025 announcement describes automatic identification of music inside video content. These are specific examples of the viewing experience expanding beyond choosing and playing a film. [Service overview](https://watcha.team/), [music-information announcement](https://watcha.team/229a2845-fc0f-8022-8038-d873a4878da6).

#### Primary tasks

- Browse films, series and editorial collections; open a title.
- Follow the search link; sign in through the header login link.
- Explore individual purchases, webtoons and Watcha Party through navigation.

### Brand Narrative

The product footer identifies the operating company as Watcha, Inc. (주식회사 왓챠). The corporate timeline distinguishes company formation in September 2011 from the recommendation beta in August 2012. It records the streaming launch in January 2016 and the company-name change to Watcha Inc. in March 2018. A February 2022 company announcement identifies Park Tae-hoon (박태훈) as founder and CEO at that time. The July 2020 naming and identity announcement explains the separation between WATCHA's streaming service and WATCHA PEDIA's evaluation and recommendation service. [Product footer](https://watcha.com/), [corporate timeline](https://watcha.team/a030faf7-4a2f-423f-a223-9f5180c4e4cd), [2022 announcement](https://watcha.team/d0222268-7e97-4deb-be86-25e862d07c6d), [identity announcement](https://watcha.team/4ba0426a-ea5c-430c-b629-ea07f04d8ca9).

The company's stated purpose connects that history to the present: help people discover their own tastes and encounter content suited to them. The current overview describes a recommendation service built on more than 760 million evaluations. Its 2025 music-identification announcement gives a concrete example of extending data and content expertise into an additional viewing feature. These sources support a narrative of discovery and continued product development; they do not document a recent visual rebrand. [Company overview](https://watcha.team/), [2025 product announcement](https://watcha.team/229a2845-fc0f-8022-8038-d873a4878da6).

### Principles

The official brand story supports two principles: respect different individual tastes, and use data and technology to connect people with content. The assets guide adds a concrete identity rule: use the correct logo for WATCHA or WATCHA PEDIA. [Brand story](https://watcha.team/35ce28ca-4d71-4ea8-bd27-4c3e2ed43d2e), [assets guide](https://watcha.team/af019cba-e6d6-4232-b395-a2a300a71fb6).

For implementation, the measured page suggests prominent artwork with compact interface controls, a black base, and restrained surface treatments on the controls examined. These are derived design guidance, not quoted company commandments.

### Personas

No first-party persona research was verified; no demographic or fictional user profiles are specified.

## Colors

Two evidence classes underpin this palette: computed styles from the live controls and declarations in the page's own stylesheet. The root census contains 92 custom properties. A direct reading of the linked stylesheet also finds the dark palette on `body, *[data-theme=dark]`; those body-scoped declarations are outside the root enumeration. The tables label declarations explicitly. [Live linked stylesheet](https://an2-ast.amz.wtchn.net/erd/_rx_base/assets/DBO4y9Kf.css).

### Pink and interaction

| Reference role | Value | Evidence |
|---|---|---|
| Primary | `#f82f62` | Login rest; declared `--color-primary10` |
| Primary hover | `#ff3d6e` | Login hover; declared `--color-primary40` |
| Primary pressed | `#f6285c` | Login pointer-down; declared `--color-primary30` |
| Primary 20 | `#f82c60` | Declared `--color-primary20` |
| Primary 50 | `#f6407a` | Declared `--color-primary50` |
| Primary 60 | `#ffd6e3` | Declared `--color-primary60` |
| Deep pink | `#de2a60` | Declared `--color-pink10`; the new measurement does not support its use as login hover |

The official assets page gives Watcha pink priority for logos and icons. It also says that the WATCHA and WATCHA PEDIA logos cannot replace each other. Its text does not supply a numeric pink value, so this reference's primary is the measured interface fill. [Brand assets](https://watcha.team/af019cba-e6d6-4232-b395-a2a300a71fb6).

### Dark surfaces and foregrounds

| Role | Value | Evidence |
|---|---|---|
| Canvas | `#000000` | Page behind transparent controls; declared background resolves to `--color-black` |
| Foreground | `#ffffff` | Login and poster labels; most frequent paragraph ink, 44 occurrences |
| Elevated | `#191a1c` | Declared elevated → background30 |
| Elevated alternate | `#28292a` | Declared elevated-alt → background60; measured footer social-link fill |
| Background 90 | `#333436` | Dark-theme declaration; referenced by `.KUqj-:hover` in the stylesheet |
| Secondary foreground | `#babac1` | Declared secondary-text → gray90; present in the paragraph census |
| Tertiary foreground | `#84868d` | Declared tertiary-text → gray60; measured movie-navigation label |
| Disabled foreground | `#4f5152` | Declared disabled-text → gray40; disabled controls were not exercised |
| Muted icon | `#999ca1` | Measured footer X glyph; declared gray70 |
| Divider | `#1b1c1d` | Declared divider → gray10 |
| Alternate divider | `#38393d` | Declared divider-alt → gray20 |

The stylesheet also declares green `#0aca9e`, red `#e73e3e`, yellow `#fbc02d`, blue `#3da7ff`, a second blue `#1a6ce7` and purple `#40032e` as `--color-green10`, `--color-red10`, `--color-yellow10`, `--color-blue10`, `--color-blue20` and `--color-purple10`. These names establish palette entries, not verified success, error or warning behavior.

The same stylesheet contains a `[data-theme=light]` palette. This capture establishes the dark browse surface; it does not establish whether the product exposes a theme switch.

Alpha values stay alpha values: the collection action rests on `rgba(255, 255, 255, 0.15)` over imagery; poster hover paints `rgba(0, 0, 0, 0.3)`. Root declarations include `--color-dim: rgb(0, 0, 0, .8)` and `--color-disabled-component: rgb(255, 255, 255, .3)`. The latter is a declaration, not a measured disabled state.

## Typography

### Evidence classes

- **Official product use:** no opened brand document names a product typeface. Product CSS and live font loading provide the evidence below.
- **Live-loaded:** `document.fonts` reports **Pretendard 400, 500, 600 and 700**, all normal. This is the only family placed in the typography family field.
- **Official distributed assets:** the page stylesheet imports Watcha's CDN-hosted `pretendard-subset.css`. It defines static weights 100–900 with local face names and relative WOFF2/WOFF subset URLs, using `font-display: swap`. Its header identifies Kil Hyung-jin and the SIL Open Font License 1.1. The font files themselves were not downloaded. [Served font stylesheet](https://an2-ast.amz.wtchn.net/fonts/pretendard/pretendard-subset.css).
- **Declared-only:** body and button CSS list `Pretendard, "Apple SD Gothic Neo", "Nanum Gothic", "Malgun Gothic", sans-serif`. Only Pretendard appears in the loaded-face census. Weights 100, 200, 300, 800 and 900 are distributed declarations without a loaded-face observation here. `Watcha Glyphicons` is declared in the main stylesheet but does not appear as loaded. No specimens are assigned to these unobserved faces or weights.
- **Unresolved:** there is no measured monospace role or evidence for the prior draft's detailed title/detail-page scale. Substitute: none chosen.

### Measured controls

| Visible element | Size | Weight | Line height evidence |
|---|---|---|---|
| Header login label | 13px | 500 | 18px on the control |
| Movie-navigation span | 16px | 500 | Its anchor reports 18.4px; no separate span line-height was captured |
| Hero collection-action span | 21.6667px | 500 | No separate span line-height was captured |
| Poster-caption paragraph | 12px | 400 | `.XkHBq` declares 18px |
| Footer text links | 13px | 400; FAQ 600 | Survey box height 15px is not a measured line height |

Do not copy an anchor's inherited font as its visible label font. The navigation anchor is 16px/400, while its label is 16px/500; the poster anchor is 16px/400, while its caption is 12px/400.

### Declared type utilities

The linked typography stylesheet declares these size/line-height pairs: 62/74, 50/60, 40/50, 36/44, 28/34, 24/30 and 20/26 at weight 700; 19/24, 18/24, 16/22, 15/20, 14/20, 13/18, 12/18, 11/16, 10/15 and 9/14 at weight 400, with selected medium and bold modifiers. These are CSS utilities, not an inferred hierarchy for unvisited detail pages. [Typography stylesheet](https://an2-ast.amz.wtchn.net/erd/_rx_base/assets/D-6lhkR4.css).

## Layout

At the 1440×1000 survey viewport, the fixed header is 72px tall. `--page-side-margin` and `--content-side-padding` compute to 40px. The first billboard spans 1360×595px from x=40; a row of 159.5×90.3px category tiles sits below it. The surveyed poster rows show six complete 216.7×321px anchors before the next extends beyond the right edge. These dimensions describe this capture, including its scrollbar conditions.

The second states capture reports a 214.2px-wide poster after the popup closes and the page regains its scrollbar. Use the identity measurements for the control being reproduced rather than treating the two widths as contradictory design tokens.

Observed and declared spacing includes 12px login inline padding, 40px page margins, a 20px small-page margin variable and a 4px navigation gap. The desktop poster x positions imply about 12px between adjacent anchors. A universal base-spacing unit was not established.

The survey also records buttons labelled “이전 슬라이드” and “다음 슬라이드” beside the billboard. Their activation and touch-swiping behavior were not tested.

### Responsive Behavior

Only the desktop viewport was rendered for comparison. The served CSS declares `--content-side-padding: var(--small-page-side-margin)` at `max-width: 48em`; the small margin is 20px. Between `calc(48em + 1px)` and `calc(120em - 1px)`, it uses the 40px page margin. At `min-width: 120em`, it returns to the small margin and declares `--container-max-width: 105em`. These are stylesheet rules, not measurements of tablet or mobile layouts.

The root also declares a 56px bottom-navigation height, and the source declares portrait `27 / 40` and landscape `16 / 9` aspect ratios. The measured poster is consistent with the portrait proportion. Touch behavior, mobile autoplay, object fitting and reduced-motion behavior were not measured.

## Elevation & Depth

The dark-theme stylesheet aliases elevated surfaces to background30 (`#191a1c`) and background60 (`#28292a`). The measured login, navigation, collection action, search, poster and footer icon all report `box-shadow: none`. The poster's existing bottom gradient and its hover dim layer provide image-local contrast. These observations support a flat treatment for these controls; they do not establish a prohibition on shadows elsewhere in the product.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

All six measured control elements report the raw computed transition `all 0s ease 0s`. The probe's transition scan detects a longest duration of 200ms in the navigation comparison scope and 400ms in the poster comparison scope; each state was sampled after 900ms. These scope-wide durations do not identify a named product motion token or a specific animated property. No cubic-bezier curve, spring policy, star animation, billboard timing or reduced-motion rule is specified from this capture.

---

Verified 2026-11-03. Product evidence: homepage survey and two state captures on the Korean browse edition; linked product and font stylesheets. Narrative evidence: the company's overview, brand story, history, identity announcement, assets guidance and July 2025 product announcement linked above. Exact raw values and measurement limits are recorded in `verification.md` and `report.md`.

## Components

Measurements are from a logged-out desktop page. A promotional popup was closed with “닫기”. Keyboard focus was reached by Tab; pointer observations were checked against actual hover and active matches. The second pass enabled overlay hiding where the fixed subscription banner covered controls.

### Primary action — header login link

“로그인” links to `/ko/sign_in?redirect_uri=%2Fko%2Fbrowse%2Fall`. It is 57.7×32px, with 4px radius, `0px 12px` padding, 13px/500 Pretendard and 18px line height. Rest is `#f82f62` with `#ffffff` text, no border and no shadow. Hover changes only the fill to `#ff3d6e`; pointer-down changes it to `#f6285c`. Keyboard focus adds the browser's `auto` outline. That outline is not a Watcha focus token.

### Navigation — movie link

“영화” links to `/ko/browse/movie`. Its anchor is 43.7×24px, square, unpadded and transparent over the black header. The visible label is 16px/500 in `#84868d`; the anchor's inherited color is white. Hover and press reveal a 2px underline by changing `span.Xk0Gf::before` opacity from 0 to 1. The gray label itself does not change color. Focus shows the browser's `auto` outline.

### Poster card — 청년경찰

The measured poster links to `/ko/contents/m5nQDa3`. Its transparent anchor is 214.2×317.3px with 0px anchor radius, no padding, border or shadow, and a white 12px/400 caption. On hover and press, `.ImageWrapper::after` paints a 30% black layer. No transform or title-visibility change was recorded within the compared scope. A descendant already carries `linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0))` at rest. Focus adds the browser's `auto` outline. The anchor radius does not establish the image wrapper's clipping radius.

### Additional observed controls

The hero “컬렉션 보기” link is 350×53.3px with 6.66667px radius and `11.6667px 20px` padding. Its visible span is 21.6667px/500 white on a 15% white fill. Hover and press matched their pseudo-classes but produced no change across the compared self, one descendant, their pseudo-elements and three ancestor levels. Focus was **UNMEASURED**: the action had `tabIndex=-1`, and the Tab walk reached its containing carousel instead.

The search link is a transparent 24×24px square with no padding. Its own color is `#84868d`, but the visible SVG path fills white. Hover and press produced no compared change; focus showed only the browser ring. There is no search input in this homepage survey.

The footer X link is a 30×30px circle, radius `50%`, with `#28292a` fill, `#999ca1` SVG ink and no padding, border or shadow. Hover and press produced no compared change after hiding the obstructing fixed banner. Focus showed only the browser ring. These three controls remain prose observations because none supplied an authored changed state for an interactive component token.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Header login | Fill `#ff3d6e` | Fill `#f6285c` | Browser `auto` outline only |
| Movie navigation | Label underline opacity 0 → 1 | Same underline | Browser `auto` outline only |
| 청년경찰 poster | 30% black image-wrapper overlay paints | Same overlay | Browser `auto` outline only |
| Hero collection action | No change in compared scope | No change in compared scope | UNMEASURED; containing carousel reached |
| Search link | No change in compared scope | No change in compared scope | Browser `auto` outline only |
| Footer X link | No change in compared scope, overlay hidden | Same | Browser `auto` outline only |

“No change” is limited to the recorded control, descendants, their pseudo-elements and three ancestor levels, using the probe's computed-style and DOM-attribute property set. It does not establish the absence of video, canvas, sibling or inaccessible embedded changes. Empty, loading, playback-error, form-error, subscription-success and disabled states were not measured.

## Do's and Don'ts

### Do

- Reproduce the small pink header action against the black page, with its distinct brighter hover and darker press.
- Use Pretendard for the captured UI and preserve the measured label sizes and weights.
- Reveal a gray underline for movie-navigation hover and press.
- Dim the measured poster through its image wrapper, retaining the existing bottom gradient.
- Keep WATCHA and WATCHA PEDIA identities separate, as the assets guide requires.

### Don't

- Treat the deep-pink palette entry as the measured login hover color.
- Turn a browser `auto` outline into a brand focus token.
- Assign an action's parent font or color to a differently styled child label.
- Turn an unmeasured input, dialog, disabled state or image clipping radius into a component specification.

## Voice & Tone

The captured interface uses concise Korean action labels: “로그인”, “컬렉션 보기” and “더보기”. Its category tiles include “왓챠 인기작”, “영화”, “일드”, “중드”, “애니”, “BL”, “아트버스터” and “숏챠”. This is evidence for short functional navigation and editorial grouping on this surface, rather than a product-wide rule for errors or success copy.

Uppercase Latin labels appear in the category artwork: BEST, HOT & NEW and PICK. These are observed image labels, not measured live type specimens.

The company's brand story uses discovery and individual taste as its framing. No opened source establishes a mandatory politeness ending, a forbidden-phrase list or the previous draft's illustrative system messages. [Brand story](https://watcha.team/35ce28ca-4d71-4ea8-bd27-4c3e2ed43d2e).

## Agent Prompt Guide

### Quick reference

Use black `#000000`, white `#ffffff`, the measured login triplet `#f82f62` → `#ff3d6e` → `#f6285c`, tertiary gray `#84868d`, and the declared elevated pair `#191a1c` / `#28292a`. The footer circle pairs `#28292a` with `#999ca1`.

### Example component prompts

- “Build the measured Watcha header login link: 32px high, 4px corners, `0px 12px` padding, white 13px/500 Pretendard at 18px line height. Rest `#f82f62`, hover `#ff3d6e`, pressed `#f6285c`; no border or shadow.”
- “Build a transparent 43.7×24px movie-navigation link on black. Use a 16px/500 `#84868d` span, with a 2px underline whose opacity becomes 1 on hover and press.”
- “Build the captured poster link with a 12px/400 white caption and an existing transparent-to-black bottom gradient. Hover and press paint a 30% black image-wrapper overlay. Keep the measured anchor 214.2×317.3px.”

## Governance

### Known Gaps

- **Contrast, `button-primary`.** Text `#ffffff` on `#f82f62` measures 3.77:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

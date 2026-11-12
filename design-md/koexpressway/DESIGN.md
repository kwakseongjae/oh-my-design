---
name: Korea Expressway Corporation
colors:
  canvas: '#ffffff'
  foreground: '#333333'
  control-foreground: '#1e2124'
  notice-title: '#111111'
  muted-footer: '#999999'
  footer-button: '#666666'
  footer-button-hover: '#555555'
  service-fill: '#063a74'
  service-hover: '#021a35'
  tile-border: '#cdd1d5'
  selected-tab: '#052b57'
  inactive-tab: '#464c53'
  notice-popup-button: '#58616a'
  active-slide: '#03147c'
  privacy-emphasis: '#ffff00'
  nav-underline: '#131416'
  pointer-outline: '#ff0000'
  focus-outline: '#fc0101'
  notice-hover: '#f5f5f5'
typography:
  scroll:
    fontSize: 14px
    fontWeight: 400
    use: Scroll Down
  footer:
    fontSize: 16px
    fontWeight: 400
    use: related-sites buttons
  control:
    fontSize: 17px
    fontWeight: 400
    use: search and general link wrappers
  disclosure:
    fontSize: 17px
    fontWeight: 500
    use: disclosure action links
  service:
    fontSize: 19px
    fontWeight: 400
    use: institutional service actions
  notice:
    fontSize: 19px
    fontWeight: 700
    use: visible title inside the first notice link
  navigation:
    fontSize: 20px
    fontWeight: 700
    use: main navigation links
  more:
    fontSize: 24px
    fontWeight: 500
    use: notice more link
  category-tab:
    fontSize: 40px
    fontWeight: 700
    use: notice category buttons
rounded:
  none: 0px
  footer: 4px
  utility: 6px
  service-tile: 12px
  service-action: 16px
components:
  service-link:
    type: button
    backgroundColor: '#063a74'
    textColor: '#ffffff'
    rounded: 16px
    height: 76.5px
    padding: 24px 30px
    typography: 19px / 400
    hover: 'self bg: rgb(6, 58, 116) -> rgb(2, 26, 53); self outline: none -> rgb(255, 0, 0) dashed 3px off -2px; self transform: none -> matrix(1, 0, 0, 1, 0, -2); self deco: none -> underline solid rgb(255, 255, 255); label label.deco: none -> underline solid rgb(255, 255, 255); label label.tf: none -> matrix(1, 0, 0, 1, 0, -2)'
    pressed: 'self bg: rgb(6, 58, 116) -> rgb(2, 26, 53); self outline: none -> rgb(255, 0, 0) dashed 3px off -2px; self transform: none -> matrix(1, 0, 0, 1, 0, -2); self deco: none -> underline solid rgb(255, 255, 255); label label.deco: none -> underline solid rgb(255, 255, 255); label label.tf: none -> matrix(1, 0, 0, 1, 0, -2)'
    focus: 'self outline: none -> rgb(252, 1, 1) dashed 3px off 1px'
    use: 한국도로공사 전자조달(e-bid) — a link to the separate e-bid service, over the photographic disclosure section.
  nav-about:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 50px
    padding: 10px 0px
    typography: 20px / 700
    hover: 'self outline: none -> rgb(255, 0, 0) dashed 3px off -2px; self deco: none -> underline solid rgb(19, 20, 22); label label.deco: none -> underline solid rgb(19, 20, 22)'
    pressed: 'self outline: none -> rgb(255, 0, 0) dashed 3px off -2px; self deco: none -> underline solid rgb(19, 20, 22); label label.deco: none -> underline solid rgb(19, 20, 22)'
    focus: 'self outline: none -> rgb(252, 1, 1) dashed 3px off 1px'
    use: 공사소개 — a transparent navigation link over the photographic hero header. Persisting header foreground changes are not focus tokens.
  search-open:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 25.5px
    padding: 0px
    typography: 17px / 400
    hover: 'self outline: none -> rgb(255, 0, 0) dashed 3px off -2px'
    pressed: 'self outline: none -> rgb(255, 0, 0) dashed 3px off 2px'
    focus: 'self outline: none -> rgb(252, 1, 1) dashed 3px off 2px'
    use: 검색 — a transparent search-opening button over the photographic hero header; no search input was visible in the survey.
  disclosure-link:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 25.5px
    padding: 0px
    typography: 17px / 500
    hover: 'self outline: none -> rgb(255, 0, 0) dashed 3px off -2px; self deco: none -> underline solid rgb(255, 255, 255); label label.deco: none -> underline solid rgb(255, 255, 255); ancestor up1.bg: rgba(255, 255, 255, 0.15) -> rgba(255, 255, 255, 0.25); ancestor up1.tf: none -> matrix(1, 0, 0, 1, 0, -5)'
    pressed: 'self outline: none -> rgb(255, 0, 0) dashed 3px off -2px; self deco: none -> underline solid rgb(255, 255, 255); label label.deco: none -> underline solid rgb(255, 255, 255); ancestor up1.bg: rgba(255, 255, 255, 0.15) -> rgba(255, 255, 255, 0.25); ancestor up1.tf: none -> matrix(1, 0, 0, 1, 0, -5)'
    focus: 'self outline: none -> rgb(252, 1, 1) dashed 3px off 1px'
    use: 경영공시 자세히보기 — a transparent link inside an image-backed disclosure card. Hover and press also brighten and lift its parent panel.
  footer-sites:
    type: button
    backgroundColor: '#666666'
    textColor: '#ffffff'
    rounded: 4px
    height: 40px
    padding: 8px 25px 8px 15px
    typography: 16px / 400
    hover: 'self bg: rgb(102, 102, 102) -> rgb(85, 85, 85); self outline: none -> rgb(255, 0, 0) dashed 3px off -2px'
    pressed: 'self bg: rgb(102, 102, 102) -> rgb(85, 85, 85); self outline: none -> rgb(255, 0, 0) dashed 3px off 2px'
    focus: 'self outline: none -> rgb(252, 1, 1) dashed 3px off 2px'
    use: 한국도로공사 관련사이트 — a related-sites menu button in the dark footer.
  notice-link:
    type: button
    textColor: '#111111'
    rounded: 0px
    height: 76.5px
    padding: 24px 0px
    typography: 19px / 700
    hover: 'self bg: rgba(0, 0, 0, 0) -> rgb(245, 245, 245); self outline: none -> rgb(255, 0, 0) dashed 3px off -2px; self deco: none -> underline solid rgb(30, 33, 36); self padding: 24px 0px -> 24px 20px'
    pressed: 'self bg: rgba(0, 0, 0, 0) -> rgb(245, 245, 245); self outline: none -> rgb(255, 0, 0) dashed 3px off -2px; self deco: none -> underline solid rgb(30, 33, 36); self padding: 24px 0px -> 24px 20px'
    focus: 'self outline: none -> rgb(252, 1, 1) dashed 3px off 1px'
    use: The first dated notice — a transparent full-width link on the white notice section. Font and foreground here describe the visible title, not the wrapper.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard GOV
---

# Design System Inspiration of Korea Expressway Corporation

## Overview

### Visual Theme & Atmosphere

한국도로공사 presents highway information, toll and Hi-Pass services, public disclosures, procurement and recruitment on one corporate homepage. Its current page title is “한국도로공사 - 모두의 이동 가치를 실현하는 글로벌 NO.1 모빌리티 플랫폼”. A March 2026 recruitment notice used “안전하고 편리한 미래교통 플랫폼 기업”. The two first-party surfaces show an evolution in the language used to describe the corporation, from convenient future transport to the value of mobility for everyone; they do not establish a visual redesign date.

The homepage combines photographs of roads, bridges and landscapes with white service sections, dark blue action links and a red-and-blue ex wordmark. A large image-led hero gives way to a row of seven outlined service tiles, three highway-information panels, an ESG section, disclosure panels and dated notices. This is a useful reference for a public service portal that needs both an institutional identity and direct routes to practical tasks.

The measured homepage is the Korean edition at `www.ex.co.kr/`, with HTML `lang="ko"`; no regional redirect occurred. These measurements describe this corporate homepage, not the linked toll-payment or procurement applications.

### Brand Narrative

The homepage places the ex wordmark beside 한국도로공사 and connects highway services with disclosures, ESG and public participation. Its current mobility-platform title broadens the framing visible in the March recruitment notice. A dated official history or CI rationale was not successfully opened; no founding date or logo-origin story is asserted here.

### Principles

For this reference, derive the layout from observed hierarchy: visible service routes, strong photographic sections and distinct action treatments. These are implementation readings of the homepage, not principles attributed to an official design manual.

### Personas

No verified persona research was found.

## Colors

These are observed colours, not a reconstruction of an official corporate palette.

| Token | Value | Observed role |
|---|---|---|
| canvas | `#ffffff` | White page sections; also the light label ink on the measured service, navigation, search, disclosure and footer controls. |
| foreground | `#333333` | Paragraph ink on two surveyed paragraphs; white paragraph ink occurs more often on image-led areas. |
| control-foreground | `#1e2124` | Notice link wrapper's computed foreground; its visible title has its own darker ink. |
| notice-hover | `#f5f5f5` | First notice link fill on hover and press. |
| notice-title | `#111111` | Visible title inside the measured first notice link. |
| muted-footer | `#999999` | Footer policy links. |
| footer-button-hover | `#555555` | Related-sites button fill on hover and press. |
| footer-button | `#666666` | Related-sites button background. |
| service-fill | `#063a74` | Four institutional service action links, including electronic procurement. |
| service-hover | `#021a35` | Electronic-procurement link background on hover and press. |
| tile-border | `#cdd1d5` | Outlined quick-service tiles and surveyed carousel control borders. |
| selected-tab | `#052b57` | Selected 공지사항 tab label. |
| inactive-tab | `#464c53` | NEWS tab label. |
| notice-popup-button | `#58616a` | The announcement popup's 닫기 and 오늘 하루 열지 않기 button fills; this observation is not a disabled-state token. |
| active-slide | `#03147c` | Active hero pagination bullet, labelled Go to slide 2 in the survey. |
| privacy-emphasis | `#ffff00` | Header 개인정보처리방침 link. |
| nav-underline | `#131416` | Underline colour observed on the 공사소개 navigation link during hover and press. |
| pointer-outline | `#ff0000` | Measured dashed outlines during pointer states. |
| focus-outline | `#fc0101` | Measured keyboard-focus dashed outlines. |

Declared-only colours are kept separate: `--color-root: #0e4c92`, `--color-level1: #2a72b8` and `--color-border: #cccccc` were computed on the root but were not seen painted in this capture. Their ownership is unresolved, so they are not exported as colour tokens. The KRDS palette declarations and Swiper defaults are also excluded from the exported palette unless a specific product role was observed above.

The census also records white at 15% opacity and a black backdrop at 75% opacity. These alpha observations remain prose rather than six-digit opaque colour tokens.

## Typography

**Official product use:** no opened brand guideline identifies an official corporate typeface.

**Live-loaded:** the homepage's `document.fonts` reports **Pretendard GOV 500 normal** and **Pretendard GOV 700 normal**. Body, h1 and button CSS all declare “Pretendard GOV”. The faces are served from the site's `/css/site/new_portal/fonts/PretendardGOV-Medium.woff2` and `PretendardGOV-Bold.woff2` URLs. This is evidence of live homepage use, not a company-wide font policy.

**Official distributed assets:** no distribution or licence page was verified. The face URLs above are live stylesheet declarations, not evidence of a public font licence.

**Declared-only:** the same stylesheet declares Pretendard GOV 400 at `/css/site/new_portal/fonts/PretendardGOV-Regular.woff2`; 400 was absent from the survey's loaded-face list. Keep measured CSS weights of 400 as metrics, without claiming that the regular face loaded or rendering a regular-face specimen.

**Unresolved:** the actual face used for text requesting the unloaded 400 face is not established. Substitute: none chosen. `swiper-icons 400 normal` loaded too; it is a carousel icon font and is excluded from the UI family token.

The measured scale is tied to controls: 14px/400 for Scroll Down, 16px/400 for footer controls, 17px/400 for search and general link wrappers, 17px/500 for disclosure links, 19px/400 for institutional action links, 19px/700 for the first notice's visible title, 20px/700 for main navigation, 24px/500 for 공지사항 더보기 and 40px/700 for the notice-category tabs. These are CSS size/weight observations; the capture does not establish a running-text or heading scale beyond these controls.

## Layout

At 1440×1000, the hero occupies the first screen under a fixed header. The service-tile row contains seven 160×150px links, each with 30px 20px padding and 12px corners. The institutional action row contains four 325px-wide links. The first dated notice link spans 1360px. Use these as measured desktop examples, not inferred responsive rules.

### Responsive Behavior

Not measured; the capture is desktop at 1440×1000 only.

## Elevation & Depth

The screenshots show photographic cards, translucent disclosure panels over a road photograph, and an announcement modal with a dark backdrop. No numeric shadow or blur token is exported: its exact source and intended role were not established by the compiled candidates.

## Motion & Easing

The service action and notice link expose `all 0.3s ease-in-out 0s` as their computed transition. Navigation, search, disclosure and footer identities expose `none 0s ease 0s`. The measured service action translates from `none` to `matrix(1, 0, 0, 1, 0, -2)` on hover and press. These computed strings do not establish carousel timings or page-wide animation rules.

---

First-party evidence: [homepage](https://www.ex.co.kr/), rendered 2026-11-12; [March recruitment notice](https://www.ex.co.kr/portal/biz/bbs/layout1/selectBoardArticle.do?bbsId=BBSMSTR_000000000182&nttId=29656), rendered 2026-11-12. The [nonsense-path control](https://www.ex.co.kr/zz-this-does-not-exist) returns a distinct error page with HTTP 200 in the capture browser; it is not company or brand documentation.

## Components

The electronic-procurement action is a link: 325×76.5px, 16px corners, 24px 30px padding and 19px/400 CSS text. Its resting fill is `#063a74` with `#ffffff` ink. Hover and press darken the fill to `#021a35`, translate the link upward by 2px and underline the label. A red dashed pointer outline is also observed.

The corporation-introduction link, labelled 공사소개, is 50px high, square, with 10px 0px padding and 20px/700 type. It is transparent over the header. The 검색 control is a transparent 66×25.5px icon-and-text button with no padding and 17px/400 text. The 경영공시 자세히보기 disclosure link is transparent, 25.5px high, with no padding and 17px/500 text over an image-backed panel.

The footer related-sites button is 40px high with 4px corners, 8px 25px 8px 15px padding, white ink and `#666666` fill. On hover and press, the footer button darkens to `#555555`. The disclosure action underlines, while its parent panel changes from `rgba(255, 255, 255, 0.15)` to `rgba(255, 255, 255, 0.25)` and moves upward by 5px. The first notice gains a `#f5f5f5` background, an underline and horizontal padding of 20px on hover and press. The first notice is a full-width link with 24px 0px padding and 76.5px height; its title's 19px/700 text is `#111111`, distinct from the wrapper's 17px/400 `#1e2124`.

Observed radii: 0px on navigation and text actions, 4px on footer buttons, 6px on header utility links and announcement buttons, 12px on the quick-service tiles and 16px on institutional service actions. Carousel controls use 1000px pill radii and some pagination dots use 50%; these remain prose.

### States

The compiled components carry only measured transitions. Keyboard focus produces dashed red outlines rather than an `auto` browser ring. Some header foreground changes persisted after blur; those are excluded from component focus tokens. The first pointer pass was obstructed for disclosure, footer and notice links by the open mega-menu. A second pass hides covering fixed layers for pointer measurement; consult the compiled proof for each final observation. No disabled-state measurement was made.

## Do's and Don'ts

- Combine road and landscape photography with clearly separated service sections.
- Preserve the larger rounded institutional actions and smaller footer-button corners.
- Preserve visible labels and the notice title's distinction from its wrapper ink.
- Keep KRDS and Swiper declarations distinct from company-owned brand guidance.
- Do not infer error, success or disabled states from unpainted framework variables.
- Do not claim that the 400 font face loaded, or substitute a different face.

## Voice & Tone

Observed labels name practical tasks directly: 교통정보(ROADPLUS), 휴게소/주유소, 하이패스 and 통행요금. The current page title expresses an expansive mobility ambition. These are observations of homepage copy, not a verified editorial style guide.

## Agent Prompt Guide

“Build an institutional highway-information portal with a photographic hero, white service sections and four dark blue service links. Use the measured 76.5px-high service action with 16px corners, `#063a74` fill and white labels; on hover darken to `#021a35`, move upward by 2px and underline the label. Use the live-loaded Pretendard GOV family, keeping unloaded regular-face claims unresolved.”

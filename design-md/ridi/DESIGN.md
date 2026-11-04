---
name: RIDI
colors:
  foreground: '#141414'
  white: '#ffffff'
  blue: '#1f9eff'
  selected-blue: '#1e9eff'
  fg-secondary: '#787878'
  fg-tertiary: '#a5a5a5'
  fg-disabled: '#cccccc'
  subtle: '#f5f5f5'
  stroke: '#e6e6e6'
  control-stroke: '#f0f0f0'
  critical: '#dc3232'
  positive: '#39bf74'
  disabled-bg: '#f5f5f5'
typography:
  nav:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.125
    use: '웹툰 navigation link: measured 18px line height'
  selected:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.1875
    use: '추천 selected section link: measured 19px line height'
  title:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.1875
    use: 고깔모자의 아틀리에 title link in the survey; 19px line height
  author:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.214286
    use: '시라하마 카모메 author link: survey line height 17px; ratio rounded'
  account:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.285714
    use: '로그인 / 회원가입 account link: measured 18px line height; ratio rounded'
  search:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.2
    use: 'Inner search input: measured 18px line height'
rounded:
  none: 0px
  sm: 4px
  md: 8px
components:
  nav-webtoon:
    type: button
    textColor: '#141414'
    rounded: 0px
    height: 52px
    padding: 17px 12px
    typography: 16px / 600
    hover: opacity 0.4
    pressed: opacity 0.4
    use: 웹툰 — a navigation link on white (#ffffff); transparent background omitted. Hover and held press reduce the whole link opacity. Keyboard focus uses the browser auto ring; no brand focus token. Raw pointer observations used hideOverlays because a promo layer remained open.
  carousel-next:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#141414'
    border: '1px solid #f0f0f0'
    height: 40px
    padding: 0px
    typography: 16px / 400
    hover: fg rgba(20, 20, 20, 0.4)
    pressed: fg rgba(20, 20, 20, 0.4)
    use: 다음 — the hero carousel button, 40px wide and 50% radius; the SVG is 16px. Hover and held press fade currentColor without changing the white surface, border or shadow. Keyboard focus showed no computed visual change. Raw pointer observations used hideOverlays because a promo layer remained open.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard Variable
---

# Design System Inspiration of RIDI (리디)

## Overview

### Visual Theme & Atmosphere

RIDI is a Korean content platform for comics, webtoons, web novels and books. It began as the Ridibooks e-book store in 2009; its official history dates the service launch to November. The 2022 brand story explains the removal of “Books” as an expansion from a book format toward stories and individual taste. It explicitly connects the redesign to larger thumbnails and cover images for visual content. [Brand story](https://ridicorp.com/story/pr-brand-renewal-2022/), [company history](https://ridicorp.com/about/).

The 2022 identity uses a “Space” concept. RIDI says the R symbol expresses an infinite space containing different content and the enjoyment of consuming it, and that the renewal redefined its wordmark and symbolic blue. That gives a concrete direction for a reconstruction: let artwork carry the variety while the surrounding navigation stays compact and legible. The layout guidance here follows those sources and the measured page; it is not a separate published RIDI rulebook. [Official brand announcement](https://ridicorp.com/2022/03/ridi_brand_renewal/).

The measured homepage is the Korean comics edition (`ridibooks.com/comics/ebook`), reached from the root URL with HTML `lang="ko"`. At the measured desktop size it places a blue RIDI wordmark above content-type navigation, a blue selected section pill, three large illustrated promotional tiles, circular shortcuts and ranked cover rows. White (`#ffffff`), primary foreground (`#141414`) and secondary grey (`#787878`) frame the artwork. Blue is visibly used in store navigation: the selected “추천” pill is `#1e9eff`, while the root semantic blue token resolves to the slightly different `#1f9eff`.

The corporate Business page now describes a fandom platform linking content experiences, and lists RIDI, Manta and RIDI Shop. Its current positioning includes commerce around IP as well as reading; this is business context, not a source of storefront UI tokens. [Business](https://ridicorp.com/business/).

#### Primary tasks

- Enter the comics, webtoon, web-novel or books catalog through the header links.
- Browse the measured comics sections, including 추천, 베스트, 신작, BL and 라노벨.
- Search through the header's “인스턴트 검색” control.
- Open a title through its cover or title link; inspect the adjoining author and rating information.
- Use the documented reader settings to choose a font, text size, line spacing and background.

### Brand Narrative

RIDI dates its founding to 2008 in its 2021 company release. Its official history places the service launch in November 2009, the first PAPER device in October 2015, Paper Pro in December 2017, RIDI Select in July 2018, Manta in November 2020 and PAPER 4 in April 2022. The same history places Manta's Spanish expansion in February 2023. [Founding and Manta context](https://ridicorp.com/2021/04/ridi-record-high-performance-announcement/), [history](https://ridicorp.com/about/).

The brand story dates the expansion into web novels to 2018 and webtoons to 2020, supplying a concrete reason for a name broader than Ridibooks. [Brand story](https://ridicorp.com/story/pr-brand-renewal-2022/).

The 2021 release reports Manta reaching first place in the US Google Play comics popularity chart within four months of launch. On 28 February 2022, RIDI announced a KRW 120 billion investment led by GIC, with Korea Development Bank, NVESTOR and Atinum Investment participating, at a KRW 1.6 trillion valuation. RIDI describes that as the first unicorn milestone for a Korean content-platform startup. These investors do not change the Korean operating location. [Investment announcement](https://ridicorp.com/2022/02/attracts_investment_120billion/).

The March 2022 brand announcement and April explanation connect the new name, R symbol and content categories to that broader scope. Current company materials continue the expansion: the Business page links reading services with RIDI Shop's IP merchandise, while the history records Manta's manga launch in April 2026. The durable brand direction supported by these sources is a space for varied content and individual tastes. [Brand announcement](https://ridicorp.com/2022/03/ridi_brand_renewal/), [Business](https://ridicorp.com/business/), [history](https://ridicorp.com/about/).

The official 리디바탕 page preserves a complementary strand of that identity: sustained attention to readable long-form text on e-ink and mobile. That product-font history remains useful even though the storefront loads a different face. [리디바탕](https://ridicorp.com/ridibatang/).

The official help site's business notice names the operator as 리디 주식회사, its representative as 배기식 and its address in Seoul. The Korean company location is distinct from the overseas markets and investors in the growth history. [Business notice on the font-use guide](https://ridihelp.ridibooks.com/support/solutions/articles/154000209440-%EB%A6%AC%EB%94%94%EB%B0%94%ED%83%95-%ED%99%9C%EC%9A%A9-%EB%B0%A9%EB%B2%95).

### Principles

The first two points paraphrase RIDI's published brand rationale; the remaining points are reconstruction guidance derived from the measured surface.

1. **Make room for different stories and tastes.** The new identity's space concept accompanies separate content categories within one platform.
2. **Give visual content more image area.** RIDI explicitly links the redesign to emphasizing thumbnails and covers for web novels and webtoons.
3. **Separate content hierarchy from utility.** The measured selected pill uses blue and weight 700; the unselected header link is weight 600 and the account action weight 600 at a smaller size.
4. **Copy the actual state mechanism.** The header link fades the element; the carousel fades its foreground and SVG fill.
5. **Keep reading-font provenance intact.** An officially offered reader face can be documented without claiming it rendered on the store.
6. **Preserve the documented reading choices.** Font, size, paragraph width, line spacing and background are reader-controlled features; retain their documented work, series and format boundaries from §4.

Source rationale: [brand story](https://ridicorp.com/story/pr-brand-renewal-2022/), [identity announcement](https://ridicorp.com/2022/03/ridi_brand_renewal/); implementation details: survey and states capture, 2026-11-03.

### Personas

No source-backed personas were verified; the prior fictional profiles and their product assumptions are retained for review in report.md rather than presented as RIDI user research.

## Colors

The live census contains 311 `--ridi-*` properties, separate from Tailwind's `--tw-*` machinery and safe-area geometry. The following are resolved first-party values, with observed control colors distinguished from root tokens.

| Role | Value | Evidence |
|---|---|---|
| Foreground | `#141414` | `--ridi-color-text-primary`; actual webtoon link and title text |
| White canvas | `#ffffff` | `--ridi-color-background-neutral-default: #fff`; backdrop behind the measured links |
| Semantic blue | `#1f9eff` | `--ridi-color-blue-500`, `--ridi-color-text-information`, `--ridi-color-surface-selected-blue` |
| Rendered selected blue | `#1e9eff` | Computed background of the selected “추천” link and foreground of the active “만화” header link |
| Secondary foreground | `#787878` | `--ridi-color-text-secondary`; account and author links |
| Tertiary foreground | `#a5a5a5` | `--ridi-color-text-tertiary` |
| Disabled foreground | `#cccccc` | `--ridi-color-text-disabled`; a token observation, not a measured disabled-button state |
| Subtle / disabled surface | `#f5f5f5` | `--ridi-color-background-neutral-subtle`, `--ridi-color-surface-disabled`; search wrapper background |
| Default stroke | `#e6e6e6` | `--ridi-color-border-default`; survey social-link borders |
| Carousel stroke | `#f0f0f0` | Actual 1px solid border of the hero “다음” button |
| Danger / rating | `#dc3232` | `--ridi-color-text-danger`, `--ridi-color-text-rating`; also present in the rendered text census |
| Success | `#39bf74` | `--ridi-color-text-success`, `--ridi-color-surface-success-500`; no subscription badge state was inspected |

The census found no paragraph ink samples. `foreground` therefore names the documented CSS role and observed interface ink, not a measured paragraph body color. Do not normalize the two blue values into one: the root token and the rendered selected link were measured independently.

RIDI's public design-system repository was archived on 29 September 2022. Its README lists `@ridi/colors`, `@ridi/web-icons` and `@ridi/web-ui`; those historical packages establish a published system lineage. The values in this reference come from the current product census and control measurements. [Official archived repository](https://github.com/ridi/design-system).

Alpha values stay explicit. The carousel hover/press color is `rgba(20, 20, 20, 0.4)`. The cover overlay uses `rgba(0, 0, 0, 0.04)`, and the search wrapper has a `1px solid rgba(0, 0, 0, 0.004)` border. The resolved root floating-shadow color is `color-mix(in srgb, #000 10%, transparent)`; that color alone does not establish a shadow geometry.

## Typography

### Evidence classes

| Class | Verified finding | Use in this reference |
|---|---|---|
| Official product use | RIDI's customer guide explicitly calls 리디바탕 the default font in its app and PAPER | Reading-typeface metadata only; no live specimen |
| Live-loaded | `document.fonts`: `Pretendard Variable 300 700 normal` | The only family in the machine UI typography tokens |
| Official distributed asset | 리디바탕 is offered free under SIL Open Font License 1.1; RIDI owns its copyright | Keep its provenance and license; no font file was downloaded |
| Declared-only | `Pretendard Std Variable` and `Pretendard JP Variable` are named in the live stack and declared in the RIDI CDN stylesheet, but absent from the loaded-face census | No specimen and no UI family token for either |
| Other declared-only faces | The accessible stylesheet walk lists `ridi-roboto` and `exp-ridi-roboto-bold-italic`; neither is loaded | Record the declarations without promoting them to the product face |
| Unresolved | The prior SF Mono metadata role and exact reader typography settings have no current evidence | No monospace token or reader sizing rules |

The computed family declarations on body, h1 and the sampled button begin with **Pretendard Variable**, followed by the two declared-only Variable families. The later system fallback names in that declaration do not establish rendered font use. Substitute: none chosen.

The browser could not read `https://static.ridicdn.net/web-font/pretendard.css` through its CSSOM. A separate direct fetch of that exact stylesheet succeeded. Its normal-face rules declare weights `300 700`, `font-display: swap` and dynamic WOFF2 subsets at `https://static.ridicdn.net/web-font/pretendard/PretendardVariable.subset.0.woff2`. The stylesheet's opening comment identifies Pretendard 1.3.9. This is delivery evidence from RIDI's CDN; it is not a font-license grant. [Loaded stylesheet](https://static.ridicdn.net/web-font/pretendard.css).

### Measured interface hierarchy

All rows below use the loaded Pretendard Variable face. Sizes are measured control styles, not inferred heading roles.

| Element | Size / weight | Line height | Letter spacing |
|---|---|---|---|
| Header “웹툰” link | 16px / 600 | 18px | -0.16px |
| Selected “추천” section link | 16px / 700 | 19px | -0.16px |
| “고깔모자의 아틀리에” title link | 16px / 500 | 19px | Not collected by the survey row |
| “시라하마 카모메” author link | 14px / 400 | 17px | Not collected by the survey row |
| Account link | 14px / 600 | 18px | -0.14px |
| Inner search input | 15px / 400 | 18px | -0.15px |
| Carousel next button | 16px / 400 | 18.4px | -0.48px |

The root type-size tokens enumerate 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 34 and 42px. Separate weight tokens are 400, 500, 600 and 700; the declared font range also permits 300. The line-height tokens enumerate 8, 10, 12, 16, 18, 20, 22, 24, 28, 32, 36, 38, 46 and 56px. These scales do not establish which heading or paragraph uses every entry.

### Reading typeface context

RIDI describes 리디바탕 as an e-book typeface built over eighteen months, covering 11,172 modern Hangul characters. Its explanation emphasizes larger counters, straightened nonessential details, and spacing intended to make long sentences comfortable on mobile and e-ink. [Official font and license page](https://ridicorp.com/ridibatang/).

The customer guide explicitly calls it the default font for the RIDI app and PAPER. This establishes official product use beyond the font's availability as an asset. It was not loaded on the measured storefront, so its visual specimen and current viewer metrics are absent. [리디바탕 product-use guide](https://ridihelp.ridibooks.com/support/solutions/articles/154000209440-%EB%A6%AC%EB%94%94%EB%B0%94%ED%83%95-%ED%99%9C%EC%9A%A9-%EB%B0%A9%EB%B2%95).

## Layout

At 1440 × 1000px, the survey's three main hero links start at x=165, 538 and 911px. Each is 364px wide and 414px high, giving observed 9px inter-tile gaps and a combined span of 1110px. These are dimensions at one viewport, not a verified max-width or breakpoint rule.

The content-type navigation links are 52px high at y=64px. The section pills begin at y=130px and the hero at y=177px. Circular shortcuts sit below the hero at y=621px; the first ranked cover row begins at y=801px. This progression gives catalog selection, promotion and title scanning visibly different bands.

Keep the measured control padding distinct: 17px/12px on the navigation link; 7px/10px/8px on the selected pill; 10px on the search wrapper. Their odd values and 9px hero gaps do not support a universal 4px spacing grid. No abstract spacing-token scale is declared.

Verified corner values include 0px on the header links, 4px on the sampled cover and 8px on the search wrapper. The selected pill's 99px and carousel's 50% radii remain component descriptions, not a numeric radius scale for every card or sheet.

### Responsive Behavior

Only the 1440 × 1000px desktop edition was measured; mobile layouts, breakpoint thresholds, reader layouts and touch behavior have no verified values in this draft.

## Elevation & Depth

The observed interface separates flat navigation and covers from a lightly raised carousel control. The next button uses the single shadow `rgba(0, 0, 0, 0.06) 2px 4px 8px 0px`. The account link, navigation link, input, selected pill and sampled cover link have no own shadow.

The cover's 4% black overlay and inward outline define its edge without a measured hover lift. Root `--ridi-color-shadow-floating` is a translucent color declaration; its name does not prove modal, dropdown or BookCard shadow offsets. No modal elevation scale was verified.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.carousel`: `rgba(0, 0, 0, 0.06) 2px 4px 8px 0px`

## Motion & Easing

The hero carousel next button's raw computed transition is:

`opacity, color, pointer-events 0.2s, 0.2s, 0.2s ease, ease, ease 0s, 0s, 0s`

The selected recommendation link declares `all 0.2s ease-in-out 0s`; its pointer states could not be measured because it has `pointer-events:none`. The account link, webtoon navigation link, search input and cover link each declare `all 0s ease 0s`. Thus the observed header opacity state does not establish a timed hover animation, and the selected-link declaration alone does not establish animated selection behavior.

No named duration system, cubic-bezier curve, spring rule, reader page-turn animation or reduced-motion behavior was verified.

## Components

Rest colors below are computed styles. “Transparent” describes the observation in prose; no transparent `bg` token is emitted. State measurements used temporary fixed-layer hiding during the pointer pass because a promotional popup remained open. Treat the pointer values as raw observations requiring the noted visual recheck; popup styling is not part of the component set.

### Navigation link — 웹툰

An `<a>` to `/webtoon/recommendation` in the header, 51.3 × 52px. Padding is `17px 12px`, radius 0px, with no border or shadow. It has `#141414` text on the white page and Pretendard Variable 16px/600, 18px line height.

Hover changes the link's opacity from 1 to 0.4; held press has the same opacity and adds no separate computed treatment. Its foreground value remains `#141414`: this is whole-element opacity, not a new grey color token. Tab focus reaches it at step 5 and adds only the browser's `auto` outline. The component therefore carries hover and pressed tokens, with no branded focus token.

### Secondary button — hero carousel 다음

The measured hero next button is an actual `<button>`, 40 × 40px with a 50% radius and zero padding. White background, `#141414` foreground, `1px solid #f0f0f0` border, and `rgba(0, 0, 0, 0.06) 2px 4px 8px 0px` shadow define its circular surface. The visible SVG is 16 × 16px; its path uses `currentColor`. The button's text style is 16px/400 with 18.4px line height.

Hover and held press change the control's foreground and descendant SVG path fill to `rgba(20, 20, 20, 0.4)`. The white fill, border, shadow and rest placement transform stay unchanged in the compared scope. Tab focus at step 24 has no computed visual difference. Its `matrix(1, 0, 0, 1, 20, -20)` rest transform places the button; it is not evidence of hover movement.

### Account action link — 로그인 / 회원가입

The header account action is a transparent link, 127.3 × 40px, radius 0px, padding `11px 12px 11px 22px`, `#787878` text, 14px/600 and 18px line height. It has no border or shadow. Hover and press were measured with matching pseudo-classes and showed no computed change; Tab step 3 adds only the browser auto ring. It stays as geometry and behavior guidance in prose, outside machine components.

### Search

The visible search wrapper is a `<label>` named “인스턴트 검색”, 260 × 40px, radius 8px and 10px padding. Its background is `#f5f5f5` and its border is `1px solid rgba(0, 0, 0, 0.004)`.

The measured inner input is a different box: 206 × 18px, zero radius and padding, no border or shadow, transparent over that wrapper, with `#141414` ink and 15px/400 type. Hover and held press show no computed change across the input and three ancestor levels. The actual input has `tabIndex=-1`; the 115-key Tab walk did not reach it, so keyboard focus is **UNMEASURED**. No input component state token is declared.

### Selected section pill — 추천

The selected link has `aria-current="page"`, 47.3 × 34px geometry, 99px radius, padding `7px 10px 8px`, a `#1e9eff` fill and `#ffffff` label in 16px/700 type with 19px line height. It is `pointer-events:none`. Hover and press are **UNMEASURED — disabled**, not unchanged. It remains keyboard reachable at Tab step 12; the only observed focus difference is the browser auto ring. Keep the selected styling in prose rather than creating a component with an unmeasured branded state.

### BookCard / ranked cover link

The measured cover belongs to “고깔모자의 아틀리에” and links to `/books/505015425`. It moved from rank 1 in the survey to rank 2 in the states capture; the book identifier and image alt identify the same work. The cover link is 80 × 115.8px, radius 4px, zero padding, transparent over white, with no own border or shadow. Its inherited text style is 14px/400; the cover has no visible text label.

Inside it, an image and an empty backing layer each use `#f5f5f5`. A separate empty overlay has `rgba(0, 0, 0, 0.04)` background and a `1px solid rgba(0, 0, 0, 0.04)` outline offset inward by 1px. This sampled cover does not establish a multi-level shadow system. Hover and held press produce no computed change in the link, its three descendants including two empty layers and one image, or three ancestor levels. Tab step 36 adds only a browser auto outline. No interactive card token is emitted.

The survey records separate title and author links beside the image: title 16px/500 in `#141414`, author 14px/400 in `#787878`. These are distinct targets, not one measured full-card action.

### Reading controls — official documentation

The app guide documents font and text-size choices, paragraph width, line spacing, background selection and brightness gestures for web-novel/e-book reading. It says type and paragraph settings are stored per work, or per series. Tapping the center reveals the lower viewing/settings menu; webtoons default to scrolling. These are documented features, without inferred colors, default sizes or auto-hide timers. [App viewer guide](https://ridihelp.ridibooks.com/support/solutions/articles/154000186566-%25EC%2595%25B1%25EB%25B7%25B0%25EC%2596%25B4-%25ED%2599%259C%25EC%259A%25A9-%25EB%25B0%25A9%25EB%25B2%2595).

The web-viewer guide separately confirms background, font/size, paragraph-width and line-spacing controls for web novels. A font guide confirms custom fonts, with font changes applying to EPUB rather than PDF. Keep those surface and format boundaries when implementing documented choices. None of these reader controls was measured for interactive styling. [Web viewer guide](https://ridihelp.ridibooks.com/support/solutions/articles/154000207690-%EC%9B%B9%EB%B7%B0%EC%96%B4-%ED%99%9C%EC%9A%A9-%EB%B0%A9%EB%B2%95), [font settings](https://ridihelp.ridibooks.com/support/solutions/articles/154000207686).

### States

| Control | Hover | Held press | Real keyboard focus |
|---|---|---|---|
| 웹툰 link | Opacity 1 → 0.4 | Same 0.4; no additional change vs hover | Browser auto outline only, Tab 5 |
| Hero 다음 button | Foreground and SVG path fill → `rgba(20, 20, 20, 0.4)` | Same alpha foreground; no additional change vs hover | No computed change, Tab 24 |
| Account link | No computed change in compared scope | No computed change in compared scope | Browser auto outline only, Tab 3 |
| Inner search input | No computed change in compared scope | No computed change in compared scope | UNMEASURED; not reached in 115 Tab presses |
| 고깔모자의 아틀리에 cover | No computed change in compared scope | No computed change in compared scope | Browser auto outline only, Tab 36 |
| Selected 추천 link | UNMEASURED; pointer-events:none | UNMEASURED; pointer-events:none | Browser auto outline only, Tab 12 |

“No computed change” includes the control, its `::before`/`::after`, all captured descendants and their pseudos, and three ancestor levels with their pseudos. The cover sample includes two empty layers and one image; the carousel includes SVG and its path fill. The probe compares colors, borders, drawn outlines, shadows, opacity, transforms, filters, visibility, sizes, text decoration, backgrounds, masks, image sources and SVG internals. Pixels, uncaptured siblings, closed shadow roots and cross-origin iframe contents remain outside that conclusion.

The popup remained open; fixed layers were temporarily hidden for pointer measurements. The raw snapshots affirm `:hover` and `:active`, but pointer crop checks failed after the snapshots, so the visual state evidence needs a recheck. No branded focus-ring token is emitted. No purchase success, network error, loading skeleton, toast or disabled-button appearance was verified.

## Do's and Don'ts

For a reconstruction of this measured storefront:

- Lead with cover art and title discovery, consistent with RIDI's published explanation of its larger-image redesign.
- Use the loaded Pretendard Variable face for the measured UI styles and retain the documented reading-typeface context separately.
- Preserve the difference between `#1f9eff` root semantic blue and `#1e9eff` on the selected store link.
- Reproduce whole-link opacity for the webtoon navigation state and alpha foreground color for the circular carousel button; they are different mechanisms.
- Keep the search wrapper and its inner input as separate measured boxes.
- Preserve separate cover, title and author targets in the ranked row.
- Preserve the reader choices documented in §4, including their per-work/per-series and EPUB/PDF scope.
- Apply the measured shadow to the carousel button; the sampled cover provides no hover-shadow or hover-lift pattern to copy.

## Voice & Tone

The observed navigation uses compact Korean category nouns: “만화”, “웹툰”, “웹소설”, “도서”, “추천”, “베스트” and “신작”. Utility labels are direct: “로그인 / 회원가입”, “전체 카테고리” and “캐시충전”. The page title is “만화 웹툰 웹소설 도서는 리디”.

The promotional popup in the captured viewport says “당신의 덕력 지금 확인하세요” with the action “시험 보러 가기”. Alongside the ranked heading “지금 많이 읽고 있는 만화”, it shows that this edition uses fan-oriented promotional language as well as concise navigation. These are observed examples, not a corporate prohibition on urgency, playful copy or particular words.

## Agent Prompt Guide

Use this measured-surface prompt:

> Build a Korean comics discovery page with a white canvas, `#141414` interface ink, `#787878` secondary text and Pretendard Variable. Put compact content-type navigation above section links. The selected 추천 link is 34px high, radius 99px, with `#1e9eff` background and white 16px/700 text. Render a three-tile promotional row using the measured desktop dimensions from §5, followed by circular shortcuts and ranked rows with separate cover, title and author links. For the 웹툰 navigation link, use 52px height, 17px/12px padding, 16px/600 text and opacity 0.4 on hover and held press. Use a circular white 40px carousel next button with a 1px `#f0f0f0` border; fade its currentColor to `rgba(20, 20, 20, 0.4)` on hover and press.

This prompt describes the inspected storefront and the two observed interactive treatments. Reader defaults, subscription CTAs and unobserved product states have no implementation recipe here.

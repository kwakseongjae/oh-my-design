---
name: Kiwoom Securities
colors:
  primary: '#e6367e'
  navigation-accent: '#ee137b'
  search-stroke: '#e7367e'
  navy: '#181949'
  foreground: '#111111'
  canvas: '#ffffff'
  muted: '#666666'
  secondary: '#777777'
  product-label: '#333333'
  input-ink: '#000000'
  badge-surface: '#fde7f2'
  contest-surface: '#fbd5e6'
typography:
  navigation:
    fontSize: 16px
    fontWeight: 700
  action:
    fontSize: 16px
    fontWeight: 400
  search:
    fontSize: 19px
    fontWeight: 400
  research:
    fontSize: 14px
    fontWeight: 400
rounded:
  none: 0px
  contest: 30px
  research: 40px
components:
  account-open:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 100px
    padding: 52px 0px 0px
    typography: 16px / 400
    hover: Parent li::before background-image becomes icon-guick-menu1-1-hover.png; icon box remains 40px by 36px.
    pressed: Parent li::before uses icon-guick-menu1-1-hover.png; icon box remains 40px by 36px, matching hover.
    use: '계좌개설 — a transparent link, 176px wide, on the #e6367e quick-menu band. The image swap belongs to li#mainView01::before.'
  header-account:
    type: button
    textColor: '#111111'
    rounded: 0px
    height: 28px
    padding: 0px
    typography: 16px / 700
    hover: 'fg #ee137b'
    pressed: 'fg #ee137b'
    use: '계좌개설 — the transparent header navigation link #topBtnOpenAcnt, 57.7px wide, on the white #ffffff header.'
  fund-card:
    type: card
    textColor: '#333333'
    rounded: 0px
    height: 123px
    padding: 101px 0px 0px
    typography: 16px / 400
    hover: '::before background-size 94px 92px; background-position 50% 3px; image main-category1-menu1-on.png?2512.'
    pressed: '::before background-size 94px 92px; background-position 50% 3px; image main-category1-menu1-on.png?2512, matching hover.'
    use: '펀드 — a transparent product-grid link #wm01 > a, 94px wide, on the white #ffffff page. Its rest icon is 74px by 72px at 50% 13px; hover replaces the artwork.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: SpoqaHanSansNeo
---

# Design System Inspiration of Kiwoom Securities

## Overview

### Visual Theme & Atmosphere

Kiwoom Securities (키움증권) is a Korean securities company established on 31 January 2000. Its official history records the start of securities investment services on 4 May 2000, a new CI announcement on 31 January 2006, and the change to the name 키움증권(주) on 25 May 2007. The product family now includes the desktop trading platform 영웅문4 and mobile platform 영웅문S#. The latter launched on 19 August 2022. The current retail-platform introduction also describes Open API+, REST API and the company's own smart order routing system. This is a brokerage portal that brings trading, account services and investment information together. [Company overview](https://www.kiwoom.com/h/ir/introduce/VOutlineView), [early history](https://www3.kiwoom.com/h/ir/introduce/VHistory1View), [CI/name history](https://www3.kiwoom.com/h/ir/introduce/VHistory2View), [recent history](https://www3.kiwoom.com/h/ir/introduce/VHistory5View), [retail platforms](https://www.kiwoom.com/h/ir/introduce/VRetailView?dummyVal=0).

The homepage places a navy wordmark and magenta arrow on white, then repeats pink in a broad account-service ribbon and pale contest panels. Small pictograms lead into financial products; the fund pictogram changes artwork and grows on hover while its label stays still. Dense service navigation sits alongside larger promotional images. These are observations of the live homepage, rather than published corporate design principles.

The measured homepage is the Korean desktop edition (`www1.kiwoom.com/h/main`; states resolved to `www3.kiwoom.com/h/main`), with HTML `lang="ko"`. The reference describes this website; the trading applications supply product context, not their interface tokens.

### Brand Narrative

The official timeline connects early online investment services and the 영웅문 desktop platform to the later 영웅문S# mobile release. The current retail introduction adds programmable trading interfaces and routing infrastructure. On the measured web surface, that breadth appears as direct product shortcuts, account-service links, contests and research rather than a single promotional task. [History](https://www3.kiwoom.com/h/ir/introduce/VHistory1View), [recent history](https://www3.kiwoom.com/h/ir/introduce/VHistory5View), [retail introduction](https://www.kiwoom.com/h/ir/introduce/VRetailView?dummyVal=0).

### Principles

Observed patterns to carry into a matching website: clear task labels, white content grounds, a magenta service band, navy secondary actions, and artwork changes for pictogram feedback. These are measured patterns, not a claim that Kiwoom publishes these as design principles.

### Personas

No persona research was conducted; none is inferred from the capture.

## Colors

These names describe measured roles. No first-party custom-property palette was found: the census contained only Swiper variables.

| Role | Measured value | Evidence |
|---|---|---|
| Primary service ribbon | `#e6367e` | Background of `ul.list-quick-menu.start`, behind the account-opening link; also the ON badge's ink |
| Navigation interaction | `#ee137b` | Header account link on hover and pressed |
| Search stroke at initial rest | `#e7367e` | Search wrapper's `3px solid` border |
| Navy action surface | `#181949` | Research “더 알아보기” link at rest |
| Foreground | `#111111` | Paragraph ink: five visible `<p>` elements; header link at rest |
| Canvas / reverse ink | `#ffffff` | White surfaces; account-opening and research-link labels |
| Muted links | `#666666` | Research links and the largest text-colour census group |
| Secondary paragraph ink | `#777777` | Two visible `<p>` elements |
| Product-grid labels | `#333333` | Fund link, unchanged during its artwork swap |
| Search input ink | `#000000` | Computed input text colour; the placeholder is not used as ink evidence |
| ON badge surface | `#fde7f2` | Child `em.contest-badge.going` |
| Contest link surface | `#fbd5e6` | Domestic contest link at rest |

The three pinks above are separate observations. The primary proposal uses the service ribbon's value. The most frequent text colour is `#666666`, but the dominant measured paragraph ink is `#111111`.

## Typography

| Evidence class | Finding |
|---|---|
| Official product use | No opened company writing identified an application-wide product typeface. |
| Live-loaded | `document.fonts`: **SpoqaHanSansNeo 400 normal**, **SpoqaHanSansNeo 700 normal**, and **Anton 300 normal**. All six measured controls declare SpoqaHanSansNeo. Only that measured control family enters the structured family token. Anton's role on a particular element was not established. |
| Official distributed assets | The first-party [font stylesheet](https://www1.kiwoom.com/h/kws/assets/css/font.css?20230511) references Regular, Medium and Bold SpoqaHanSansNeo files and `Anton-Regular.ttf`. A separate downloadable font package or redistribution licence was not verified. |
| Declared-only | SpoqaHanSansNeo 500 is registered but absent from the loaded-face census. The declared body/h1/button fallback stack also names Malgun Gothic, AppleGothicNeoSD, Apple SD 산돌고딕 Neo, Droid sans, dotum and 돋움; none appears in the loaded FontFace list. No specimen is assigned to these declarations. |
| Unresolved | The census does not establish whether a face resolved from `local(...)` or a network file. The CSS labels the Anton registration 300 even though the filename says Regular. Neither registration is converted into an inferred weight range. |

SpoqaHanSansNeo 400 declares `local("SpoqaHanSansNeo")` before first-party WOFF2/TTF sources under `/h/kws/assets/fonts/`. The 500 and 700 rules instead begin with `local("NotoSans")`. Anton declares `local("Anton")`, then the first-party TTF. The directly opened CSS also lists EOT sources for SpoqaHanSansNeo; the browser census's parsed sources list WOFF2 and TTF. These are source declarations, not proof of which binary was selected. **Substitute: none chosen.**

| Control | Size / weight | Line height | Letter spacing |
|---|---|---|---|
| Header account link | 16px / 700 | 28px | -0.3px |
| Account ribbon link | 16px / 400 | 22px | -0.2px |
| Fund product link | 16px / 400 | 22px | -0.2px |
| Search input | 19px / 400 | 40px | normal |
| Research action | 14px / 400 | 40px | -0.2px |
| Contest link | 14px / 400 | 22px | -0.2px |

A general heading or paragraph size scale was not measured.

## Layout

At 1440×1000, the header is fixed and 81px high. The first content area places a promotion and search on the left, three stacked investment-category choices in the middle, and a pictogram grid on the right. The quick-service band follows; below it are the contest feature and investment-information cards, then another promotional area and a multi-column support footer. This ordering is visible in the full-page capture.

Padding is component-specific: 52px above the account link's label, 101px above the fund label, and 24px/12px at the search input's start/end. These measurements do not establish a general spacing scale.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; mobile layouts and breakpoints are unverified.

## Elevation & Depth

The research action's parent `div.investment-card` computes `box-shadow: rgba(0, 0, 0, 0.05) 5px 0px 10px 0px`. The three extracted links themselves have `box-shadow: none` at rest and during their measured pointer states. The fund hover crop shows a halo in the replacement artwork while its computed shadow remains `none`; no separate halo shadow token is inferred.

## Motion & Easing

All six control identities report the raw computed transition `all 0s ease 0s`. No nonzero transition duration or authored easing curve is established for the extracted controls. The pictogram changes are recorded as settled image/background swaps, with no invented animation timing.

## Components

Three links have usable authored state evidence:

- **Account ribbon link — `#mainView01 > a`, “계좌개설”.** 176×100px, zero radius, padding `52px 0px 0px`, white 16px/400 text on the magenta ribbon. Its own background is transparent. Hover replaces the parent list item's `::before` image, `icon-guick-menu1-1.png` → `icon-guick-menu1-1-hover.png`; the icon box remains 40×36px. Pressed matches hover.
- **Header navigation — `#topBtnOpenAcnt`, “계좌개설”.** 57.7×28px, zero radius and padding, 16px/700. It sits transparently on white. Hover and pressed change foreground `#111111` → `#ee137b`; background and geometry retain their rest values.
- **Fund product link — `#wm01 > a`, “펀드”.** 94×123px, zero radius, padding `101px 0px 0px`, 16px/400 in `#333333`, transparent on white. Hover and pressed replace `main-category1-menu1.png` with `main-category1-menu1-on.png?2512`. The `::before` background changes from **74px 72px at 50% 13px** to **94px 92px at 50% 3px**. The pseudo-element box remains 94×109px. This is an artwork/background change; the link's computed transform stays `none`.

Asset names are corroborated by the opened [homepage stylesheet](https://www1.kiwoom.com/h/kws/assets/css/common.css?2512); the dimensions and changes above come from the live states capture. Image resources were not separately downloaded.

The research action is a 120×40px navy link with radius 40px and no padding. Its pointer states were unmeasured. The contest link is 129.3×40px, radius 30px, padding `5px 17px 0px 6px`; its visible name is `#111111`, while its separate ON badge is 10px/400 in the primary pink. Both remain prose examples because their only measured focus change is the browser ring.

The search input is 463.9×54px, with zero own radius and padding `0px 12px 0px 24px`. Its white parent initially has the 3px pink stroke; the opened CSS declares that wrapper 60px high with radius 30px. The probe later observed a transparent border and a gradient background on the wrapper, including after blur. Those persistent observations are excluded from the component state tokens.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Account ribbon | Parent icon image swaps | Same image as hover | Browser `auto` outline only |
| Header account | Foreground becomes `#ee137b` | Same foreground as hover | Browser `auto` outline only |
| Fund product link | Image swaps; background grows and shifts as in §4 | Same artwork geometry as hover | Browser `auto` outline only |
| Research action | UNMEASURED: outside pointer viewport | UNMEASURED | Browser `auto` outline only |
| Search input | Raw wrapper changes already persist after blur | Same raw wrapper changes | Persistent wrapper changes; no isolated focus token |
| Contest link | UNMEASURED: outside pointer viewport | UNMEASURED | Browser `auto` outline only |

Measured hovers on the three extracted links matched `:hover`; pressed snapshots matched `:active`. Pressed-vs-hover diffs were empty. The probe compared each control, its pseudo-elements, descendants, and three ancestor levels; external-image pixels and unrelated siblings are outside that computed-style comparison. No disabled state was measured.

## Do's and Don'ts

- Use the measured pink for its matching role: service ribbon, header interaction or search stroke.
- Keep the fund label and hit area stable while swapping and enlarging its pictogram background.
- Preserve the website's Korean labels and the measured control typography.
- Do not turn the browser's focus outline into a brand token, or the search wrapper's persistent change into a verified focus state.

## Voice & Tone

The retail introduction calls Kiwoom a “스마트 투자자를 위한 파트너”. Homepage labels name concrete tasks such as account opening and certification; the invitation “처음이신가요?” sits beside those tasks. The observed combination is practical instruction with an approachable entry point. This is a reading of the opened copy, not a published tone-of-voice manual. [Retail introduction](https://www.kiwoom.com/h/ir/introduce/VRetailView?dummyVal=0).

## Agent Prompt Guide

“Create a white Kiwoom-style desktop service header. Use the live-loaded SpoqaHanSansNeo family for a 16px/700 account-opening link, 28px high with square corners and zero padding; its foreground changes from `#111111` to `#ee137b` on hover and pressed.”

“For the fund product link, preserve the 94×123px hit area and 16px/400 label. Put the supplied brand artwork on `::before`; swap its background image and change the background size from 74×72px to 94×92px, with vertical background position moving from 13px to 3px.”

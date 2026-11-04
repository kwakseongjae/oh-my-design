---
name: Megastudy
colors:
  action-blue: '#057eff'
  foreground: '#606060'
  navigation-ink: '#101010'
  label-ink: '#333333'
  muted-ink: '#666666'
  canvas: '#ffffff'
  rail-surface: '#f4f4f4'
  control-border: '#dadada'
  rail-border: '#c9c9c9'
  selectGrade-color-uv1: '#c277eb'
  selectGrade-color-go3n: '#004d99'
  selectGrade-color-go3: '#41a1ff'
  selectGrade-color-go2: '#00bd8a'
  selectGrade-color-go1: '#ff8b2e'
  selectGrade-color-md: '#ff7faf'
typography:
  navigation:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: '-1px'
    use: Measured Megapass and teacher navigation links; live-loaded Pretendard Variable.
  utility:
    fontSize: 14px
    fontWeight: 400
    use: Measured classroom link and search label; the search anchor itself has zero-size text.
  category:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 25.6px
    letterSpacing: '-1px'
    use: Measured category button metrics; its computed family is declared-only Arial, so no face is assigned to this role.
rounded:
  none: 0px
  category: 8px
  rail: 10px
components:
  mega-pass:
    type: button
    textColor: '#101010'
    rounded: 0px
    height: 21px
    padding: 0px
    typography: 18px / 600
    hover: 'fg #057eff'
    pressed: 'fg #057eff'
    use: 메가패스 — promoted pass link on the white header; transparent background, 58.2px wide. Pointer-held appearance matches hover. Keyboard focus is browser auto outline; no authored focus token.
  final-strategy:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#101010'
    border: '1px solid #dadada'
    rounded: 8px
    height: 42px
    padding: 0px 14px 0px 17px
    typography: 16px / 400
    hover: 'bg #333333; fg #ffffff; border #333333; right-pointing after triangle appears'
    pressed: 'bg #333333; fg #ffffff; border #333333; same after triangle as hover'
    use: 파이널 학습 전략 — 180px-wide button with role=tab, measured while unselected. Hover/press paint the label white and show a triangle made from 6px transparent top/bottom borders and a 7px dark left border. Only font metrics are harvested; its declared Arial face was not loaded in the census.
  teacher-nav:
    type: button
    textColor: '#101010'
    rounded: 0px
    height: 31px
    padding: 7px 0px 0px
    typography: 18px / 600
    hover: 'fg #057eff'
    pressed: 'fg #057eff'
    use: 메가선생님 — navigation link on the white header; transparent background, 72.8px wide. Keyboard focus is a browser auto outline; no authored focus token.
  classroom:
    type: button
    backgroundColor: '#f4f4f4'
    rounded: 10px
    height: 32px
    padding: 0px
    typography: 14px / 400
    hover: 'bg #ffffff; border 1px solid #c9c9c9; width 120px; label revealed; icon URL changes'
    pressed: 'bg #ffffff; border 1px solid #c9c9c9; width 120px; same revealed label and icon as hover'
    use: '내 강의실 — utility link in the left rail, 32px wide at rest. The host computes #666666; its hidden-at-rest child label is #333333 and becomes visible on hover/press. Foreground is omitted because the rest control shows an image icon. Hover/press also move the 18px background icon from 50% 50% to 6px 50% and add an underline.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Pretendard Variable
---

# Design System Inspiration of Megastudy

## Overview

### Visual Theme & Atmosphere

Megastudy is the high-school online education brand operated by **메가스터디교육(주)**. Its homepage puts teachers, subject courses, textbooks, admissions information and Megapass promotions in one Korean-language study portal. The company's history dates the opening of `www.megastudy.net` to September 2000 and the creation of the separate Megastudy Education company to April 2015. [Company history and its served text](https://corp.megastudy.net/assets/HistoryView-DYv5XX6m.js); [service operator](https://www.megastudy.net/member/member_new/member_personsecure.asp?TabNo=2).

The identity has a specific visual idea: the official CI/BI guide explains that the symbol combines the **M** of Mega and **S** of Study, with the S turned into an infinity sign to express the possibilities of education. It pairs precise straight lines with flexible curves. The guide specifies a black logotype, white on dark backgrounds, and forbids altering it. On the measured homepage this appears as a black wordmark and blue symbol above a dense white interface. [Official CI/BI guide](https://corp.megastudy.net/subvision/cibi).

The service now extends beyond course viewing: the history records the meBook learning e-book app in April 2024, and the current homepage also exposes an online planner, question-and-answer service and AI companion. Bright campaign images sit inside a quieter framework of grey text, fine borders, compact navigation and small rounded controls. [History](https://corp.megastudy.net/assets/HistoryView-DYv5XX6m.js); [live homepage](https://www.megastudy.net/).

The measured surface is the Korean-language desktop homepage at `megastudy.net/` (`lang="ko"`), with no regional redirect.

### Brand Narrative

The official symbol story connects the M/S construction with educational possibility. The portal gives that promise a practical setting: teachers, courses, admissions information and study services are presented together, while promotion imagery changes within the same neutral navigation frame. The company's move into meBook is documented in its own history. [CI/BI guide](https://corp.megastudy.net/subvision/cibi); [history text](https://corp.megastudy.net/assets/HistoryView-DYv5XX6m.js).

### Principles

The corporate vision names fair educational opportunity, quality content, and the organic combination of online and offline services. As a design reference, retain the homepage's clear task labels, subject grouping and consistent utility access; these latter points describe the measured interface. [Corporate vision text](https://corp.megastudy.net/assets/VisionView-C4nCFKUx.js).

### Personas

No persona research was verified; “고3·N수”, “고2”, “고1” and “대학생” are observed navigation segments only.

## Colors

The following role names describe measured usage; the six `selectGrade-*` names preserve the site's own custom-property identifiers without their leading `--`.

| Role | Value | Live evidence |
|---|---|---|
| Action blue | `#057eff` | Megapass and teacher-navigation hover and pointer-held text |
| Foreground | `#606060` | Most frequent paragraph ink, 8 measured `<p>` elements |
| Navigation ink | `#101010` | Rest text on both measured navigation links and the category button |
| Label ink / dark control surface | `#333333` | Classroom child label; category hover background and border |
| Muted ink | `#666666` | Classroom/search anchor computed colour; separate from their child labels |
| Canvas | `#ffffff` | White backgrounds, 17 occurrences in the survey; category rest background |
| Rail surface | `#f4f4f4` | Classroom icon control at rest |
| Control border | `#dadada` | Category rest border, 1px solid |
| Rail border | `#c9c9c9` | Classroom hover/press border, 1px solid |

| First-party root property | Value |
|---|---|
| `--selectGrade-color-uv1` | `#c277eb` |
| `--selectGrade-color-go3n` | `#004d99` |
| `--selectGrade-color-go3` | `#41a1ff` |
| `--selectGrade-color-go2` | `#00bd8a` |
| `--selectGrade-color-go1` | `#ff8b2e` |
| `--selectGrade-color-md` | `#ff7faf` |

The census contains 35 computed root properties and 37 distinct declared properties. Of these, 33 computed and 34 declared properties are first-party; the remaining properties belong to Swiper. The separately scoped `--academy-primary-color: #007aff` belongs to `.quick-academy-layer`; it is not a global accent. The same numeric colour in `--swiper-theme-color` is a library default and is excluded.

The official corporate colour specification is **Pantone 285 C**, with **C: 90 / M: 45** printed alongside it. No RGB conversion is inferred from that print specification. [CI/BI guide](https://corp.megastudy.net/subvision/cibi).

## Typography

**Official product-use documentation:** no separate product typography specification was verified on the opened company and brand pages.

**Live-loaded:** `document.fonts` reports **Pretendard Variable**, normal, weight range **45–920**. Body and H1 declare it first in their stacks. The homepage stylesheet serves it from `/Common/fonts/PretendardVariable.woff2` as `woff2-variations`; only this loaded face enters the family token. [Live stylesheet](https://www.megastudy.net/common/css/style.css?dt=2026-11-03).

**Official distributed assets:** the same stylesheet exposes that first-party font URL. No separate font package, font licence or font-catalogue publication was verified. The CI guide offers logo assets; those do not establish a product typeface.

**Declared-only:** `Malgun Gothic` and `맑은 고딕` appear after Pretendard in the body/H1 stack; a local-only `@font-face` names `Malgun Gothic`. Neither appears as loaded. The sampled native button and the measured category button compute **Arial**, which is also absent from the loaded-face list. These declarations receive no specimen and are not added to the family token.

**Unresolved:** the actual per-glyph face used by the category button's declared stack is not established by this census. **Substitute: none chosen.**

Measured metrics are retained independently of face availability:

| Control text | Size / weight | Line height | Tracking |
|---|---|---|---|
| Megapass and teacher navigation | 18px / 600 | 24px | −1px |
| Category button | 16px / 400 | 25.6px | −1px |
| Classroom label | 14px / 400 | 28px in the served CSS | normal |
| Search child label | 14px / 400 | Not separately measured | normal on the host |

The declared size scale is `0.75rem`, `0.8125rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `1.875rem`, `2.25rem`. Declared weights run from 100 to 900 in steps of 100. The line-height properties are 1.3, 1.4, 1.5, 1.45 and 1.35 for `xs` through `xl`, with heading 1.3, tight 1.2 and loose 1.7. These are CSS declarations, not a claim that every scale entry rendered.

## Layout

The desktop page layers a wide campaign strip, grade selector, centred wordmark/search row and compact primary navigation above a three-part promotion area. In that area, the measured category controls are 180px wide and the hero link is 540px wide. A HOT PICK link list sits to their right. Circular service illustrations lead into subject tabs and further information sections. The left utility rail stays fixed while the main page scrolls. These relationships are visible in the captured homepage; no universal spacing grid is inferred.

### Responsive Behavior

Only desktop **1440×1000** was measured; the homepage's full screenshot is 1480px wide and the viewport visibly overflows horizontally. Mobile layouts and breakpoints were not measured.

## Elevation & Depth

The six measured controls have `box-shadow: none` at rest. Category and utility interactions use fill, border, icon and width changes; their measured hover/press snapshots also have no shadow. The hero's image treatment belongs to its banner container rather than the anchor's own background.

## Motion & Easing

All six target elements report the raw computed transition **`all 0s ease 0s`**. No nonzero brand timing or easing token is established for these controls; carousel ancestor activity is kept outside the harvested component states.

---

**First-party sources:** [Homepage](https://www.megastudy.net/) (survey and states, 2026-11-03); [homepage control](https://www.megastudy.net/zz-this-does-not-exist) (HTTP 200 with a distinct not-found body); [terms and business footer](https://www.megastudy.net/member/member_new/member_personsecure.asp?TabNo=2); [live stylesheet](https://www.megastudy.net/common/css/style.css?dt=2026-11-03); [CI/BI guide](https://corp.megastudy.net/subvision/cibi) and [served guide text](https://corp.megastudy.net/assets/CibiView-U5Obs_IP.js); [history page](https://corp.megastudy.net/subvision/history) and [served history text](https://corp.megastudy.net/assets/HistoryView-DYv5XX6m.js); [vision page](https://corp.megastudy.net/subvision/vision) and [served vision text](https://corp.megastudy.net/assets/VisionView-C4nCFKUx.js). Corporate-route HTML is an identical SPA shell; its nonsense route was also rendered and shows a distinct 404 view.

## Components

**Promoted pass link — `mega-pass`.** “메가패스” is a transparent link on the white header, **58.2×21px**, square, no padding, 18px/600. Its text changes from `#101010` to `#057eff` on hover and pointer-held press. It is a text link, not a filled purchase button.

**Category tab — `final-strategy`.** “파이널 학습 전략” is a native button with `role="tab"`, **180×42px**, **8px** radius, padding **0px 14px 0px 17px**. At rest it has `#ffffff` background, `#101010` label and a 1px `#dadada` border. Hover and press use `#333333` background/border and white text. An `::after` triangle appears: 6px transparent top and bottom borders, 7px dark left border, vertically translated by −6px. This is the observed unselected tab's interaction; selection was not activated.

**Teacher navigation — `teacher-nav`.** “메가선생님” measures **72.8×31px**, square, padding **7px 0px 0px**, 18px/600. Like Megapass, it changes from `#101010` to `#057eff` for hover and press.

**Expanding utility link — `classroom`.** “내 강의실” rests as a **32×32px** icon on `#f4f4f4`, with **10px** radius and no padding. Hover and press expand it to **120×32px**, make the background white, add a 1px `#c9c9c9` border and reveal the **82×28px** child label. The host computes `#666666`; the revealed label is `#333333`. The 18px background icon swaps from `nav_left02.svg` to `nav_left02_on.svg`, and moves from `50% 50%` to `6px 50%`. The host also gains an underline.

**Search entry — prose only.** “통합검색” is a **44.4×53px** link (`#megaSearch`), not an input. Its host has 0px text and `#666666` colour; the visible child is 14px/400 and `#333333`, beside a 30×30px icon. Hover and press were measured unchanged within the probe's DOM/style scope. Focus changes only the browser outline, so no component token is declared.

**Hero image link — prose only.** The “2027 메가패스” image link measures **540×280px**, with zero anchor radius and padding. Its parent clipping container declares 8px radius. Hover and press remain **UNMEASURED** after two state calls; keyboard focus adds only the browser outline, while a carousel ancestor also moves after blur. No card component is declared.

### States

| Control | Hover | Pointer-held press | Keyboard focus |
|---|---|---|---|
| `mega-pass` | Text `#057eff` | Same | Browser `auto` outline only |
| `final-strategy` | Dark background/border, white label, triangle | Same | Browser `auto` outline only |
| `teacher-nav` | Text `#057eff` | Same | Browser `auto` outline only |
| `classroom` | Width expansion, white fill, border, label reveal, icon swap/position and underline | Same | Browser `auto` outline only; no expansion |
| `integrated-search` | Measured unchanged | Measured unchanged | Browser `auto` outline only |
| `hero-card` | UNMEASURED | UNMEASURED | Browser `auto` outline; ancestor carousel movement persists after blur |

The unchanged search result covers the control, its two descendants including an empty icon layer, their pseudo-elements, and three ancestor levels with pseudo-elements, across computed style and supported DOM image/SVG attributes. It does not establish pixel-level absence of change inside an external SVG. All six keyboard landings were reached through real Tab navigation. Disabled states were not measured.

## Do's and Don'ts

- Keep navigation compact: the measured primary links use 18px/600 text, while utility labels use 14px/400.
- Preserve the difference between paragraph `#606060`, navigation `#101010` and child-label `#333333` ink.
- Reproduce the category tab's dark fill and small triangle together.
- Keep the classroom rail's width expansion and icon swap together.
- Use the supplied logo geometry; the official guide prohibits altering the symbol and logotype.
- Keep the grade-selector properties separate from action blue and the scoped academy colour.
- Do not turn the browser's `auto` outline into a brand focus token.

## Voice & Tone

The live page title uses the assured phrase “합격 불변의 법칙”; the header also contains “끝까지 집중하세요”. Navigation uses short task and subject labels, including “메가선생님”, “통합검색” and “입시정보”. These are observed examples of portal copy, not an independently published voice guide. [Homepage](https://www.megastudy.net/).

## Agent Prompt Guide

“Build a Korean study portal with a white canvas, compact 18px/600 navigation, `#101010` rest links and `#057eff` hover text. Use live-loaded Pretendard Variable for the evidenced navigation and utility text. Keep campaign imagery distinct from the neutral interface.”

“Create the measured category control at 180×42px, with 8px corners, 1px `#dadada` border and asymmetric 17px left / 14px right padding. On hover and pointer-held press use `#333333` with white text and the small right-pointing triangle. Retain the measured 16px/400 metrics without assigning an unverified rendered face.”

“Create the measured classroom utility link as a 32px square with 10px corners and `#f4f4f4` fill. Expand to 120×32px on hover and press, reveal its dark label and swap the icon asset. Preserve its browser keyboard-focus indication.”

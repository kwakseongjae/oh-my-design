---
name: KB Insurance
colors:
  primary: '#ffdb40'
  service-panel: '#fff2ae'
  canvas: '#ffffff'
  foreground: '#666666'
  heading: '#000000'
  service-label: '#111111'
  action-label: '#333333'
  border: '#d9d9d9'
  field: '#f3f3f3'
  muted-card: '#f2f4f6'
  advisory-blue: '#dde8fd'
  advisory-green: '#e6f5e0'
  blue-action: '#3f5684'
  green-action: '#3f845b'
typography:
  button:
    fontSize: 13px
    fontWeight: 400
    use: 로그인 and 회원가입 labels; live-loaded notoR
  navigation:
    fontSize: 18px
    fontWeight: 400
    use: 내 계약 navigation link; live-loaded notoDL
  card-title:
    fontSize: 18px
    fontWeight: 500
    use: 보험금 청구 서류 strong.tit; computed label weight, not a separately confirmed loaded weight
  service-label:
    fontSize: 15px
    fontWeight: 400
    use: 보험금청구 span.txt; live-loaded notoR
rounded:
  none: 0px
  action: 4px
  service-card: 10px
  card: 20px
components:
  login-primary:
    type: button
    backgroundColor: '#ffdb40'
    textColor: '#333333'
    border: '#ffdb40'
    rounded: 4px
    height: 34px
    padding: 0px 10px
    typography: 13px / 400
    focus: 'outline 2px solid #000000; outline-offset -2px'
    use: 로그인 — header action link, 1px border. Hover and pressed were measured with no computed change; keyboard focus adds the authored outline.
  join-secondary:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '#d9d9d9'
    rounded: 4px
    height: 34px
    padding: 0px 10px
    typography: 13px / 400
    focus: 'outline 2px solid #000000; outline-offset -2px'
    use: 회원가입 — header action link, 1px border. Hover and pressed were measured with no computed change; keyboard focus adds the authored outline.
  nav-contract:
    type: button
    textColor: '#666666'
    rounded: 0px
    height: 30px
    padding: 0px 25px
    typography: 18px / 400
    hover: 'fg #000000; text-decoration underline'
    pressed: 'fg #000000; text-decoration underline'
    focus: 'outline 2px solid #000000; outline-offset -2px'
    use: 내 계약 — transparent navigation link on the white header. Focus-time black text and underline persisted after blur; only the reversible outline is a focus token.
  claim-service:
    type: button
    textColor: '#111111'
    rounded: 0px
    height: 78px
    padding: 9px 0px 0px
    typography: 15px / 400
    hover: transform translateY(-4px)
    pressed: transform translateY(-4px)
    focus: 'outline 2px solid #000000; outline-offset -2px'
    use: 보험금청구 — transparent action link on the pale yellow service panel. fg and font describe the visible span.txt; the anchor itself computes to black and 12px/400. Pressed was measured with the pointer hovering.
  claim-docs:
    type: card
    textColor: '#000000'
    border: '#d9d9d9'
    rounded: 20px
    height: 130px
    padding: 25px 20px 25px 120px
    typography: 18px / 500
    hover: transform translateY(-4px)
    pressed: transform translateY(-4px)
    focus: 'outline 2px solid #000000; outline-offset -2px'
    use: 보험금 청구 서류 — transparent card link on the white page, width 485px and 1px border. font describes the visible title; anchor font is 12px/400. A folder background occupies 80px by 80px at left 20px. Pressed was measured with the pointer hovering.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: notoR
    navigation: notoDL
    emphasis: KBFGT
---

# Design System Inspiration of KB Insurance

## Overview

### Visual Theme & Atmosphere

KB손해보험 is a Korean insurer whose public homepage combines insurance products with policy lookup, claims, payments and insurance-contract loans. Its [official history](https://www.kbinsure.co.kr/CU601020001.ec) dates its launch as 범한해상 to 27 January 1959, records the 2006 LIG name and CI change, and identifies June 2015 as its new start within KB Financial Group under the KB손해보험 name.

The [CI introduction](https://www.kbinsure.co.kr/CU603010001.ec) describes Star-b as a star symbol expressing KB Financial Group's future ambitions. It treats the symbol and logotype as a fixed signature whose proportions and arrangement must be preserved. On the live homepage, that star signature sits above a white page, a pale yellow service grid, large rounded promotional panels and softly coloured advice cards. Small monochrome service icons sit alongside illustrated folders and charts.

The [current company introduction](https://www.kbinsure.co.kr/m/CU600000001.ec) presents a trusted lifelong partnership through talent and innovation; its everyday-life message is “일상을 지키는 힘”. The history also records the establishment of its subsidiary KB헬스케어 in 2021.

The measured homepage is the Korean desktop surface at `www.kbinsure.co.kr/main.ec`, reached from `/`; its HTML language is `ko`.

### Brand Narrative

The official history links the present KB identity to an older insurance business through successive names and group affiliations. The current company introduction frames its role around daily life and a lifelong partnership. In this homepage capture, the brand signature and yellow service panel accompany direct access to claims and policy management; this is a visual reading of the surface, not a claim that the company publishes those layout rules as brand principles.

### Principles

The company introduction lists five core values: customer focus, expertise, innovation leadership, trust and honesty, and mutual growth. For this reference's implementation, the measured implications are task-oriented service links, differentiated card types, and a consistent authored focus outline on the five measured links. Those implementation observations are distinct from the company's stated values.

### Personas

No persona research was verified.

## Colors

These are observed homepage colours, not names copied from a published token system. Both the computed and declared custom-property inventories were empty. The primary colour here is the measured header action colour; no corporate CI swatch has been inferred from the logo image.

| Role | Measured colour | Placement and evidence |
|---|---|---|
| Primary action | `#ffdb40` | 로그인 background and 1px border, states rest |
| Service panel | `#fff2ae` | Quick-service grid background, census and live CSS |
| Canvas | `#ffffff` | Page screenshot; 회원가입 background in states |
| Foreground | `#666666` | Most common paragraph ink: 13 paragraphs; card description and resting nav |
| Heading / focus | `#000000` | Claim-document title and authored focus outlines |
| Service label | `#111111` | Actual visible 보험금청구 child label |
| Small action label | `#333333` | 로그인 and 회원가입 labels |
| Border | `#d9d9d9` | 1px registration and document-card borders |
| Search field | `#f3f3f3` | Search input background |
| Muted banner | `#f2f4f6` | KB-N잡러 banner link background, survey |
| Analysis card | `#dde8fd` | Analysis panel, census and live CSS |
| Consultation card | `#e6f5e0` | Consultant panel, census and live CSS |
| Analysis action | `#3f5684` | Analysis 바로가기 link, survey |
| Consultation action | `#3f845b` | Consultant 바로가기 link, survey |

The service and document links have a computed background of `rgba(0, 0, 0, 0)`. They sit on the service panel and white page respectively; neither receives a fabricated opaque component background.

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product-use statement | No opened prose document names a product font. The live CSS documents implementation, rather than a company-wide typography policy. |
| Live-loaded | `document.fonts` reports `notoDL normal normal`, `notoR normal normal`, and `KBFGT 700 normal`. These exact family aliases populate the reference. |
| Official distributed assets | The same-origin [common stylesheet](https://www.kbinsure.co.kr/library/css/common/common.css?ver=20251104), imported by the homepage's style sheet, maps `notoDL` to `notokr-demilight.woff`, `notoR` to `notokr-regular.woff`, and `KBFGT` weight 700 to `KBFGTextB_sub.woff`, with additional format declarations. No font binary or license was downloaded. |
| Declared-only | The body/h1/button stack names `NanumGothic` and `Arial` after `notoR`, but neither appears in the loaded-face list. The common CSS also declares `notoL`, `notoM`, `notoB` and KBFGT weights 100, 300, 400, 500 and 600; these were not reported loaded in this capture. No specimen is assigned to them. |
| Unresolved | The census's `fontFaces` array contains only a `slick` declaration, although its loaded-face list contains the three aliases above. Directly opened common CSS supplies the source mappings. The selected network format, upstream font metadata and redistribution rights remain unverified. Substitute: none chosen. |

Keep the measured scale tied to its element: the header actions are 13px/400 in `notoR`; main navigation is 18px/400 in `notoDL`; the service link's visible span is 15px/400; and the document-card title computes to 18px/500. That last weight is a computed style, not proof of a separately loaded weight-500 face. The document-card description is styled at 15px with 20px line height and `notoDL` in the [homepage CSS](https://www.kbinsure.co.kr/library/css/common/main_2024.css?ver=20261103180000).

The footer's 개인정보처리방침 link is the survey's concrete example of loaded `KBFGT` at 12px/700. It does not establish KBFGT as the dominant homepage family.

## Layout

At the measured 1440×1000 desktop viewport, the main content is 990px wide. The hero anchor is 990×370px with a 20px radius. The service panel presents ten actions in two rows of five, with 180px-wide link targets. The left-hand document cards are 485px wide and 130px high; their vertical gap is 20px. Adjacent analysis and consultation panels use the blue and green surfaces from §2.

The [live homepage stylesheet](https://www.kbinsure.co.kr/library/css/common/main_2024.css?ver=20261103180000) explicitly sets the 990px content width, a 20px gap between the left and right card groups, and the document-card padding above. Smaller service cards further down the page have measured 10px radii. Treat these as this desktop composition's dimensions, not a complete spacing scale.

### Responsive Behavior

Desktop 1440×1000 was measured; mobile layouts and responsive breakpoints were not verified.

## Elevation & Depth

All six measured targets compute to `box-shadow: none` at rest. Their measured hover and pressed changes add no shadow. The document illustrations provide visual volume while the card boundary itself remains a 1px line; the interactive lift is a transform.

## Motion & Easing

The claim-service and claim-docs controls both compute to `transform 0.2s ease-out 0s`: a 200ms transition for the measured 4px upward lift. The header actions, navigation link and search input compute to `all 0s ease 0s`. No cubic-bezier curve or reduced-motion behaviour was verified.

## Components

Measured with a real pointer and Tab walk. Dimensions below are the target anchor or input; visible child labels are identified separately.

| Control | Rest identity | State behaviour |
|---|---|---|
| 로그인, header action link | 57.9×34px; radius 4px; padding `0px 10px`; 13px/400 `notoR`; `#ffdb40` fill and 1px border; `#333333` label | Hover and pressed: no computed change in the comparison scope. Keyboard focus: 2px solid `#000000` outline, offset −2px. |
| 회원가입, header action link | 69.8×34px; radius 4px; same padding and type; `#ffffff` fill, 1px `#d9d9d9` border, `#333333` label | Same measured no-change pointer results and authored focus outline. |
| 내 계약, navigation link | 103.7×30px; radius 0; padding `0px 25px`; 18px/400 `notoDL`; transparent on white; `#666666` label | Hover and pressed: `#000000` label and underline. Tab adds the same black outline. Focus-time ink and underline persisted after blur, so they are not focus-only tokens. |
| 보험금청구, service link | 180×78px; radius 0; padding `9px 0px 0px`; transparent on `#fff2ae`; anchor 12px/400 and `#000000`, visible span 15px/400 and `#111111` | Hover and pressed: 4px upward translation. Tab: the black outline. |
| 보험금 청구 서류, card link | 485×130px; radius 20px; padding `25px 20px 25px 120px`; 1px `#d9d9d9` border; transparent on white; anchor 12px/400, title 18px/500 and `#000000` | Hover and pressed: 4px upward translation. Tab: the black outline. |
| 검색어 입력, input `#query` | 165×35px; radius 0; padding `0px 10px 2px`; 12px/400 `notoDL`; `#f3f3f3` fill, `#000000` ink, no border | Hover, pressed and Tab: no computed change. Kept as a prose observation; no interactive component token is emitted. |

The document card uses an 80×80px folder background at left 20px, plus a 24×24px arrow background on its title. The service icon is a background image on the span, not an `<img>` element. These images remained unchanged in the measured pointer states.

### States

The five link components each have a measured authored keyboard outline: `2px solid #000000` with `outline-offset: -2px`. It disappears after blur; its computed style is `solid`, not the browser's `auto` ring. The yellow and white header actions otherwise retain their measured styles during hover and pressed. The two claim links translate to `matrix(1, 0, 0, 1, 0, -4)` during both pointer states. Pressed was sampled with `:active` and `:hover` true; no separate pressed-only effect or click outcome is established.

The navigation link's black ink and underline are recorded as pointer-state observations. They also persisted after keyboard blur, so only the reversible outline is counted as a focus-specific change. The search input had no change with `:hover`, `:active` and keyboard focus each confirmed. All selected controls were enabled; no disabled state is declared.

“No change” is limited to the probe's comparison of the target, descendants, three ancestor levels and their pseudo-elements, including colours, borders, outlines, shadows, transforms, text decoration and background-image properties. It does not establish absence of effects in siblings, external sprite internals, canvas or unmeasured embedded documents.

## Do's and Don'ts

- Preserve the official symbol/logotype signature and its proportions, as the CI page requires.
- Use the measured pale yellow service region, 4px header-action corners and 20px document-card corners in their observed roles.
- Preserve the child-label measurements: service labels are 15px and document titles are 18px, despite their anchor roots computing to 12px.
- Reproduce the 4px lift and black keyboard outline for the measured links. Do not invent a darker pressed fill for the yellow header action.
- Keep unconfirmed font faces, disabled states and mobile rules out of the implementation reference.

## Voice & Tone

The document card pairs a concise task title with the explanation “사고유형별로 필요한 구비서류가 달라요”. The neighbouring information-change card uses “변경이 가능해요”. These captured examples use conversational Korean endings to explain concrete service tasks; they do not establish a comprehensive editorial policy.

## Agent Prompt Guide

- “Build the measured 로그인 header action as a link: 34px high, 4px corners, horizontal padding 10px, 13px/400 live-loaded `notoR`, `#ffdb40` fill and border, `#333333` text. Keyboard focus adds a 2px solid black outline at −2px offset.”
- “Build the measured insurance-document link as a 485×130px card with 20px corners, a 1px `#d9d9d9` border and padding `25px 20px 25px 120px`. Use the loaded `notoR` alias; the visible title computes to 18px/500. Hover and pointer-down while hovering translate the card upward 4px.”

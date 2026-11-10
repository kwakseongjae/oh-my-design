---
name: Samsung Medical Center
colors:
  primary: '#0b50a1'
  callback-cyan: '#11a0d8'
  screening-green: '#a5c564'
  records-orange: '#ef9e19'
  certificates-purple: '#8283db'
  upload-navy: '#1428a0'
  interaction-yellow: '#f9e03d'
  program-ink: '#87b528'
  foreground: '#666666'
  muted-foreground: '#888888'
  card-label: '#444444'
  canvas: '#ffffff'
  surface: '#f7f7f9'
  input-surface: '#ececf1'
  input-foreground: '#333333'
  card-divider: '#dfe1e5'
  navigation-highlight: '#3378c1'
  focus-outline: '#000000'
typography:
  body:
    fontSize: 12px
    fontWeight: 400
    use: records-card anchor declaration; CSS body rule is 12px/1.5
  button:
    fontSize: 16px
    fontWeight: 400
    use: online reservation link, 20px line height
  input:
    fontSize: 17px
    fontWeight: 400
    use: medical staff/department search input
  cardLabel:
    fontSize: 18px
    fontWeight: 400
    use: visible directions-card .page_tit label
rounded:
  none: 0px
  program: 13px
components:
  reserve-online:
    type: button
    backgroundColor: '#0b50a1'
    textColor: '#ffffff'
    border: '1px solid #ffffff'
    rounded: 0px
    height: 40px
    padding: 9px 0px 0px
    typography: 16px / 400
    hover: 'fg #f9e03d; border 1px solid #f9e03d'
    pressed: 'fg #f9e03d; border 1px solid #f9e03d; outline 2px solid #000000, offset -2px'
    focus: 'fg #f9e03d; border 1px solid #f9e03d; outline 2px solid #000000, offset -2px'
    use: '예약신청 — a 120px-wide link in the blue online reservation panel. Hover, pressed and Tab focus also give its li ancestor a 5px #f9e03d border.'
  program-link:
    type: button
    backgroundColor: '#f9e03d'
    textColor: '#87b528'
    rounded: 13px
    height: 22px
    padding: 0px
    typography: 12px / 400
    pressed: 'outline 2px solid #000000, offset -2px'
    focus: 'outline 2px solid #000000, offset -2px'
    use: 검진 프로그램 보기 — a 139px-wide link inside the green screening panel; 22px line height and -1px letter spacing. Own fill and text stay unchanged. Hover changes its ancestor panel; retained ancestor changes are excluded from the focus token.
  nav-reservation:
    type: button
    rounded: 0px
    height: 78px
    padding: 0px 32px 0px 33px
    hover: 'bottom border 3px solid #3378c1; label sprite background-position 0px -44px'
    use: 진료예약 — a 137px-wide transparent navigation link on white. Its visible label is a background sprite. Hover moves that sprite from 0px 26px to 0px -44px. Foreground and font are omitted because the link's declared text is not the visible image label. Focus changes persisted after blur and its outline was browser auto.
  records-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    height: 208px
    padding: 25px 0px 0px
    typography: 12px / 400
    hover: 'ancestor border 5px solid #f9e03d; link size 190x198px; padding-top 19px; child action text and border #f9e03d'
    pressed: 'ancestor border 5px solid #f9e03d; link size 190x198px; padding-top 19px; child action text and border #f9e03d'
    focus: 'ancestor border 5px solid #f9e03d; link size 190x198px; padding-top 19px; child action text and border #f9e03d'
    use: '의무기록사본발급신청 — a transparent 200x208px card link on its #ef9e19 li parent. The link itself has no painted background or border. The parent border consumes 5px on each side; these state changes clear after blur.'
  directions-card:
    type: card
    textColor: '#444444'
    rounded: 0px
    height: 169px
    padding: 0px
    typography: 18px / 400
    focus: 'outline 2px solid #000000, offset -2px'
    use: 오시는 길 — a transparent 200px-wide link on white; fg and font describe its visible .page_tit label. The anchor itself declares 12px/400. Hover shows no computed change. Press also shows the black outline; its raw anchor-only blue-to-red change leaves the visible label unchanged and is excluded.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: NanumBarunGothic
---

# Design System Inspiration of Samsung Medical Center

## Overview

### Visual Theme & Atmosphere

Samsung Medical Center, **삼성서울병원**, opened in 1994. Its current introduction describes a hospital concentrating on severe, complex conditions and developing an advanced intelligent hospital through remodeling, smart wards and digital services. The history records the announcement of the vision **미래의료의 중심SMC** and the slogan **함께하는 진료 함께하는 행복** at its 25th anniversary in November 2019. These are the institution's stated direction and historical milestone, respectively. [Hospital introduction](https://www.samsunghospital.com/home/info/hosptDirectGreeting.do), [history](https://www.samsunghospital.com/home/info/hosptHistory.do).

The identity combines an institutional wordmark with a more colorful expression of shared care. The official CI page distinguishes the hospital logotype, its combination with the Samsung wordmark, and a supplementary SMC wordmark. It explains that the slogan's six colors represent caregivers and that their combined light expresses happiness and hope shared with patients. The measured homepage gives service tasks a similarly colorful treatment: a continuous strip of blue, cyan, green, orange, purple and navy panels, white labels, and yellow interaction accents. The relationship between the CI explanation and this interface is a visual reading; the CI page does not assign its six slogan colors to these service panels. [Official CI](https://www.samsunghospital.com/home/info/corpIdentity.do).

The measured homepage is the Korean edition at **`www.samsunghospital.com/home/main/index.do`**, reached from the root URL, with HTML `lang="ko"`. It puts medical staff/department search and reservation actions beneath a promotion carousel, followed by practical hospital services and notices. The later states capture shows the hero and several service headings that were blank in the earlier survey screenshot; it does not establish that every image label rendered.

### Brand Narrative

The 1994 founding statement presents the institution as a place serving health, medical development and education. The later caregiver culture page includes everyone working at the hospital and describes mutual respect and collaboration between specialties. Together with the shared-care slogan, this provides documented context for the brand's emphasis on participation. It does not establish an interface design process or a website redesign date. [Founding statement](https://www.samsunghospital.com/home/info/foundIdeology.do), [caregiver culture](https://www.samsunghospital.com/home/info/caregiverCulture.do).

### Principles

The verified institutional themes are participation by patients and clinical teams, caregiver collaboration, and improved outcomes for complex conditions. They come from the CI, caregiver culture and introduction pages. The yellow panel border is an observed interface pattern, not a published institutional principle.

### Personas

No persona research or persona definitions were verified.

## Colors

The survey returned **zero computed and zero declared CSS custom properties**. These are extracted surface values, with role names used for this reference; they are not an official named token collection.

| Role on the measured homepage | Value | Evidence |
|---|---|---|
| Online reservation panel and its action | `#0b50a1` | `reserve-online` rest background and ancestor |
| First-visit callback panel | `#11a0d8` | survey background census; first-visit action row; home CSS |
| Screening panel | `#a5c564` | `program-link` third ancestor at rest |
| Medical records panel | `#ef9e19` | `records-card` painted parent |
| Certificate panel | `#8283db` | survey background census and home CSS |
| External imaging upload panel | `#1428a0` | survey background census and home CSS |
| Interaction yellow / program link fill | `#f9e03d` | reservation/card states and `program-link` rest |
| Program link text | `#87b528` | `program-link` rest |
| Foreground in paragraphs | `#666666` | paragraph ink, 10 occurrences |
| Muted paragraph ink | `#888888` | paragraph ink, also 10 occurrences |
| Visible directions-card label | `#444444` | `.page_tit` descendant |
| White canvas and service text | `#ffffff` | census and control snapshots |
| Pale surface | `#f7f7f9` | census and imported base stylesheet body rule |
| Search input fill | `#ececf1` | `doctor-search` rest |
| Search input ink | `#333333` | `doctor-search` rest |
| Convenience-card dividers | `#dfe1e5` | `directions-card` parent border |
| Navigation hover underline | `#3378c1` | `nav-reservation` hover |
| Authored focus outline | `#000000` | reservation, program and directions focus |

The paragraph census has a tie between `#666666` and `#888888`; it does not establish one universal body ink. Transparent links retain their measured surroundings: the records link sits on orange and the directions link sits on white. Their backgrounds are not flattened into opaque component fills. [Home stylesheet](https://www.samsunghospital.com/_newhome/ui/home/static/css/home.css), [base stylesheet](https://www.samsunghospital.com/_newhome/ui/_component/static/css/style.css).

## Typography

| Evidence class | Verified finding |
|---|---|
| Official product-use statement | No prose font specification was verified in the opened company or CI pages. |
| Live-loaded | The survey's loaded-face list is exactly `NanumBarunGothic normal normal`. This is the family retained in the UI token. |
| Official distributed asset references | The site's imported base CSS defines `NanumBarunGothic` at 300, normal and bold, referencing local names and first-party `NanumBarunGothicLight.woff`, `NanumBarunGothic.woff` and `NanumBarunGothicBold.woff` paths, alongside EOT sources. No font binary was downloaded. |
| Declared-only | Body, h1 and button stacks name `NanumBarunGothic, Dotum`; the navigation link declares `dotum`. Dotum and the light/bold FontFace entries do not appear in the survey's loaded list. They receive no specimen. |
| Unresolved | The collector did not identify whether the loaded regular face resolved through `local()` or a network file. Its font-face census is empty despite the imported CSS definitions. Font licensing and any brand typeface beyond this surface were not verified. |

**Substitute: none chosen.** The logotype is an identity asset; its appearance does not prove a UI font family. [Font declarations and base typography](https://www.samsunghospital.com/_newhome/ui/_component/static/css/style.css), [CI logotype explanation](https://www.samsunghospital.com/home/info/corpIdentity.do).

Measured metrics remain useful independently of font availability: the reservation link is **16px / 400**, with 20px line height; the program link is **12px / 400**, with 22px line height and -1px tracking; the search input is **17px / 400**. The records link declares **12px / 400**, with 18px line height. The directions label is **18px / 400**, while its enclosing anchor declares 12px / 400. The base CSS body rule declares **12px / 1.5**. The navigation anchor's 18px / 700 declaration is not a measurement of the visible sprite lettering.

## Layout

At **1440×1000**, the page has a white header, a broad illustrated promotion area, and a service region overlapping its lower portion. The measured service strip contains **six adjacent 200px columns**, for an observed total width of **1200px**. The records card shares that 200×208px resting footprint. Below it, six convenience links lead to practical hospital tasks, followed by paired notice and academic-event lists and a dark gray footer. A fixed bottom quick menu and a right-side utility rail remain visible in the capture.

This is the observed desktop composition, not a verified responsive grid specification. Use the measured component geometry when reproducing this surface.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; mobile geometry and responsive behavior were not verified.

## Elevation & Depth

All six measured controls have resting `box-shadow: none`. Flat color panels, thin dividers, sprite illustrations and outlined states provide their separation. No elevation scale was verified.

## Motion & Easing

All six control identities report the raw computed transition **`all 0s ease 0s`**. No nonzero CSS transition duration or custom easing curve was measured on these controls. The promotion carousel is visible, but its animation timing was not measured.

## Components

**Online reservation action — `예약신청`.** A link measuring **120×40px**, square corners, padding **9px 0px 0px**, `#0b50a1` fill, white text and a **1px white border**. Hover changes its text and border to `#f9e03d`; the containing service panel gains a **5px yellow border**. Pressed and Tab focus retain those changes and add a **2px solid black outline, offset -2px**. The outline is authored CSS, and all listed focus changes clear after blur.

**Screening program action — `검진 프로그램 보기`.** A **139×22px** link, **13px radius**, zero padding, yellow fill and green text. Its own fill and text remain unchanged during the measured states. Hover gives the containing green panel a 5px yellow border and changes its background position. Press and keyboard focus add the same 2px solid black outline. The ancestor panel changes remain after blur during the keyboard walk, so the component's focus token contains only the reversible outline.

**Main navigation — `진료예약`.** A **137×78px** transparent link on white, radius **0px**, padding **0px 32px 0px 33px**. Hover changes the bottom border from transparent to **3px solid `#3378c1`**, and the label sprite's background position from **0px 26px** to **0px -44px**. The sprite supplies the visible label; the anchor's blue text declaration is not its visible foreground. The component retains the clean hover observation. The focus-time underline and sprite change persist after blur, and the remaining outline is browser `auto`; no focus token is published.

**Medical records card — `의무기록사본발급신청`.** The orange parent contains a transparent **200×208px** link, radius **0px**, padding **25px 0px 0px**, with white text. On hover, pressed and Tab focus the parent gains a **5px `#f9e03d` border**, the link becomes **190×198px**, and its top padding becomes **19px**. Its nested `온라인신청` action changes its text and 1px border from white to yellow. The parent background position changes from **-15px 120px** to **-20px 115px**; the heading sprite moves from **0px -395px** to **0px -420px**, and its box changes from **156×21px** to **163×22px**. The paragraph box narrows from 200×36px to 190×36px. These focus changes clear after blur. The link's own outline stays `none`.

**Directions card — `오시는 길`.** A transparent **200×169px** link on white, square corners and zero padding. Its visible label stays `#444444` across the measured states. Hover has no computed change in the recorded scope. Press and Tab focus show a **2px solid black outline, offset -2px**. The raw anchor color changes from `#0000ee` to `#ff0000` on press, but the visible child label does not change; that anchor-only color is not a brand token.

**Medical staff/department search — `의료진/진료과`.** The input itself is **403×43px**, radius **0px**, padding **12px 2px**, without a border or shadow. Its fill is `#ececf1` and ink `#333333`. Hover, pressed and Tab focus all showed no computed change across the input, its pseudos and three ancestor levels. It remains documented here and is omitted from the harvested component map under the requirement for a measured authored state. The curved outer wrapper is separate from the square input; home CSS declares the wrapper's 30px radius and 23px horizontal padding. These wrapper values were read from CSS, not from a computed geometry snapshot.

The black outlines are directly corroborated by the site's [accessibility stylesheet](https://www.samsunghospital.com/_newhome/ui/home/static/css/a11y.css). Its rule suppresses the outline on the service-card links themselves, matching the medical records observation.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Online reservation | Yellow text/border and 5px yellow parent border | Same, plus black solid outline | Same authored changes; reversible after blur |
| Screening program link | Parent border/background-position changes; own colors unchanged | Same parent changes, plus black solid outline | Reversible black outline; retained parent changes excluded |
| Main navigation | 3px blue bottom border; sprite moves | Hover appearance plus raw anchor-only red and browser auto ring | Retained border/sprite excluded; remaining ring is browser auto |
| Search input | No computed change | No computed change | No computed change; outline stays none |
| Records card | Parent border, inner geometry, sprites and nested action change | Same changes; no additional difference from hover | Same changes, clearing after blur |
| Directions card | No computed change | Black solid outline; visible label unchanged | Black solid outline, clearing after blur |

All eighteen state observations were measured. “No computed change” is limited to the collector's self, pseudo, descendant and three-ancestor comparison scope; it is not a claim about every pixel or outside element. No disabled state was measured. The top reservation notice was closed through its **닫기** button before the state pass; no consent was accepted.

## Do's and Don'ts

- Keep the six service colors tied to their observed tasks; use yellow for the measured panel emphasis.
- Preserve the distinction between a panel border and the link inside it. The medical records link's smaller active box follows the parent's 5px border.
- Retain black solid outlines where measured, while excluding the navigation's browser `auto` ring from brand tokens.
- Use the loaded regular UI family only within its verified scope. Keep undeclared glyph or font provenance unresolved.
- Keep the initial survey's missing images out of layout guidance; use the later states screenshot for the visual composition.

## Voice & Tone

The homepage uses short task labels such as `예약신청`, `온라인신청` and `의료진/진료과 검색`, with explanatory sentences beneath them. Its online reservation panel explicitly says visitors can reserve without logging in. These are observed copy patterns; no separate editorial voice guide was verified.

## Agent Prompt Guide

“Build the measured Samsung Medical Center desktop service strip with six adjacent 200px columns: online reservation blue, callback cyan, screening green, records orange, certificates purple and imaging upload navy. Use live-loaded regular NanumBarunGothic for the verified text roles. Set the main reservation link to 120×40px with square corners, white text and a 1px white border. Hover turns that text and border yellow and gives its containing panel a 5px yellow border. On the records card, apply the parent border and reduce the link box from 200×208px to 190×198px. Preserve the measured black focus outline on the reservation action.”

Use the color and typography tables and the component descriptions for exact values and ancestor/descendant relationships. This prompt describes the captured homepage, without extending it into unmeasured forms or application screens.

## Governance

### Known Gaps

- **Contrast, `program-link`.** Text `#87b528` on `#f9e03d` measures 1.82:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

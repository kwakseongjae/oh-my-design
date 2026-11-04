---
name: Dr.Now (닥터나우)
colors:
  primary: '#ff8d00'
  primary-600: '#fd7e14'
  primary-700: '#f76707'
  primary-800: '#e8590c'
  primary-900: '#d9480f'
  primary-100: '#fff4e6'
  primary-300: '#ffd8a8'
  surface-10: '#fbfcfd'
  surface-20: '#f7f9fa'
  surface-40: '#f1f3f6'
  border: '#dce0e6'
  foreground: '#b0b6c0'
  copy: '#707882'
  meta: '#9aa0aa'
  strong: '#383c43'
  heading: '#1a1b1c'
  canvas: '#ffffff'
  blue-600: '#228be6'
  yellow-500: '#fcc419'
  red-600: '#fa5252'
typography:
  h-32:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 42px
    use: Product CSS typography-ui-32b; comparison-section heading in homepage HTML
  h-28:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 38px
    use: Product CSS typography-ui-28b; step and feature-card headings in homepage HTML
  h-24:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
    use: Declared product typography utility; no measured heading specimen
  h-22:
    fontSize: 22px
    fontWeight: 700
    lineHeight: 30px
    use: Declared product typography utility; no measured heading specimen
  h-20:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    use: Declared product typography-ui-20sb
  body-17:
    fontSize: 17px
    fontWeight: 400
    lineHeight: 24px
    use: Measured header submenu link
  body-16:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    use: Measured symptom-link outer element; visible label is 17px/500
  body-15:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
    use: Declared product typography-ui-15r
  caption:
    fontSize: 12px
    fontWeight: 600
    lineHeight: 18px
    use: Business-information link in survey
  action:
    fontSize: 17px
    fontWeight: 600
    lineHeight: 24px
    use: Both measured app-download buttons
  faq:
    fontSize: 18px
    fontWeight: 600
    lineHeight: 26px
    use: Measured FAQ trigger
  footer-link:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    use: Measured company link
rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 20px
spacing:
  sm: 8
  md: 12
  base: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 96
components:
  company-nav:
    type: button
    textColor: '#9aa0aa'
    rounded: 0px
    height: 16px
    padding: 0px
    typography: 14px / 400
    hover: 'text-decoration: underline solid #9aa0aa'
    pressed: 'text-decoration: underline solid #9aa0aa'
    use: '회사 소개 — a footer navigation link on #f7f9fa. Transparent background omitted. Hover and held pointer press add an underline; keyboard focus had no compared style change.'
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Dr.Now (닥터나우)

## Overview

### Visual Theme & Atmosphere

Dr.Now connects people in South Korea with remote medical consultations and pharmacy pickup. Its company page frames the service around reducing the inconvenience of getting care, choosing a hospital by symptom, and seeing average consultation and medicine prices beforehand. The current homepage explains the journey in three steps: reserve a consultation, speak by phone, and pick up medicine. [Company](https://company.doctornow.co.kr/company), [homepage](https://doctornow.co.kr/).

The distinctive expression is orange action against a mostly white page: an orange wordmark, selected orange words in large Korean headlines, colorful symptom illustrations on pale gray tiles, and a solid orange download button. A dark narrative band interrupts the white sections; pale gray sections hold testimonials and service links. The measured header button is `#fd7e14` with white text and a 12px radius. These are visible design choices; the opened company pages do not explain why orange was chosen.

The company's history records establishment in September 2019 and the official launch of its remote-consultation and prescription-delivery platform in November 2020. The current homepage teaches **pharmacy pickup**. The company page's October 2026 figures are 9 million+ cumulative downloads, 5.2 million+ consultations, 1.2 million+ consultation reviews, and 7,500+ partner medical institutions. Its present expression combines consultation access with hospital discovery, health information and price comparison. [Company history and figures](https://company.doctornow.co.kr/company).

The measured homepage is the Korean-language root edition (`doctornow.co.kr/`, HTML `lang="ko"`); the capture had no regional redirect.

#### Primary tasks

- Start a remote consultation through symptom or specialty choices, including pediatrics and cold/flu.
- Choose a doctor using average consultation prices and reviews, as described on the homepage.
- Send a prescription to a pharmacy and pick up the medicine.
- Find hospitals or pharmacies, compare listed non-covered treatment/medicine prices, and read health information.

### Brand Narrative

The company history begins with establishment in **2019.09**, lists the **콜로나 맵** app in **2020.03**, and dates the official Dr.Now service launch to **2020.11**. It later lists the launch of professional real-time free medical counseling in **2022.07**. These milestones describe the company's own published sequence; they do not establish the founders' private motivation. [Company history](https://company.doctornow.co.kr/company).

The company connects symptom-based hospital choice and advance price visibility to a shift toward the consumer. Its culture page states a mission of making medical care easy and convenient for everyone and asks the team to prioritize customer impact. The current homepage turns those themes into symptom entry points, doctor-selection explanations, a phone-consultation step, pharmacy pickup, and links to supporting health services. [Company](https://company.doctornow.co.kr/company), [culture](https://company.doctornow.co.kr/culture).

The disclosed operator is **주식회사 닥터나우** in its service terms. The homepage's business disclosure names **(주) 닥터나우** and gives **주소 : 서울 강남구 테헤란로 625, 16층**. This supports **KR**. No parent company was stated in the opened legal disclosures. [Service terms](https://company.doctornow.co.kr/board/?action=readpost&post_id=1028&bbspaged=2), [business disclosure](https://doctornow.co.kr/).

### Principles

The first three points paraphrase the company's stated priorities. The visual applications are observations of this homepage.

1. **Reduce the inconvenience of care.** The company describes people delaying care because they are busy or a child becomes ill late at night. The homepage explains the process in three named steps.
2. **Make choices understandable.** The company explicitly names average prices, medicine costs and symptom-based hospital selection. The homepage presents symptoms and specialties near the top and explains doctor choice through prices and reviews.
3. **Consider customer impact.** The culture page explicitly prioritizes it. The service links and price-comparison rows offer distinct entry points for different tasks.
4. **Keep action visually recognizable.** In this capture, the download action repeats solid orange or its white-on-orange inverse, while informational surfaces use neutral gray. This is a surface observation, not a sourced claim about orange's psychological effect.

### Personas

No published persona study was found. The company page nevertheless provides two explicit use contexts: a suddenly ill child late at night and a busy person unable to visit a hospital. Its displayed app reviews include a parent, an office worker and a person living alone. The homepage also depicts medicine running out and a long pediatric wait. These support task scenarios, not invented names, ages, occupations, insurance status, tap limits or successful treatment outcomes. [Company](https://company.doctornow.co.kr/company), [homepage](https://doctornow.co.kr/).

## Colors

The active product stylesheet contains customized `primary-*` and `gray-*` utility colors. These are distinct from its generic HSL root theme. The survey counted 90 root custom properties; none was a `--P*` or `--G*` property. The separate company stylesheet still distributes those uppercase corporate variables. Palette declarations establish available values; they do not establish a hover or error state. [Product CSS](https://userweb-static.doctornow.co.kr/20261103-1434-e82ea1d763/_next/static/css/665b84cd20090264.css), [company CSS](https://file.doctornow.co.kr/official/css/style.css).

### Product orange

| Value | Evidence and use |
|---|---|
| `#ff8d00` | Product `primary-500` declarations; also corporate `--P500`. This is the named palette anchor, rather than the measured download-button fill. |
| `#fd7e14` | Product `primary-600`; measured header download fill and lower download text. |
| `#f76707` | Product `primary-700`; six text-color occurrences in the survey. No measured download-button darkening to this value. |
| `#e8590c` | Product `primary-800`; measured orange `Q.` in the FAQ trigger. |
| `#d9480f` | Product `text-primary-900` declaration and corporate `--P900`; no measured pressed-state assignment. |
| `#fff4e6` | Product `primary-100`; seven background occurrences in the survey. |
| `#ffd8a8` | Product `primary-300`; one paragraph-ink occurrence in the survey. |

### Product neutrals

| Role | Value | Evidence |
|---|---|---|
| Canvas | `#ffffff` | 32 background occurrences; lower download-button fill. |
| Surface 10 | `#fbfcfd` | Product `bg-gray-10` declaration. |
| Surface 20 | `#f7f9fa` | 23 background occurrences; surface behind the footer company link and symptom icon tile. |
| Surface 40 | `#f1f3f6` | Six background occurrences; measured FAQ trigger fill. |
| Border | `#dce0e6` | One rendered border occurrence; product gray-100 declaration. |
| Foreground — literal paragraph ink | `#b0b6c0` | Most frequent `<p>` ink, three occurrences. These are legal/footer paragraphs; this is not a universal main-copy default. |
| Explanatory copy | `#707882` | 65 text occurrences and the measured FAQ label. |
| Metadata / footer links | `#9aa0aa` | 70 text occurrences; measured company link. |
| Strong / symptom label | `#383c43` | 43 text occurrences; the visible pediatrics label. |
| Heading | `#1a1b1c` | 20 text occurrences; product gray-900 and homepage heading classes. |

The header submenu uses `#50565e`. The dark narrative section uses the product gray-800 `#23262c`. The symptom link's own inherited color is `#09090b`, but its visible label is `#383c43`; use the child's measured color when reproducing that label.

### Declared supporting colors

The product bundle declares blue-600 `#228be6`, yellow-500 `#fcc419`, and red-600 `#fa5252`. The earlier values survive as palette definitions. Their earlier assignments to information chips, rating stars, destructive actions and form errors were not verified as component states in this capture.

### Separate corporate palette

The company stylesheet's full color-variable list remains useful for the corporate site. It must not replace the current product gray scale:

| Corporate variables | Values in order |
|---|---|
| `--G10`, `--G20`, `--G30`, `--G40`, `--G50` | `#fbfcfd`, `#f7f9fa`, `#f5f6f7`, `#f1f3f6`, `#edeff0` |
| `--G100`, `--G200`, `--G300`, `--G400`, `--G500` | `#dfe1e2`, `#c6cace`, `#a9aeb1`, `#8d9297`, `#71767a` |
| `--G600`, `--G700`, `--G800`, `--G900` | `#565c65`, `#3d4551`, `#2d2e2f`, `#1c1d1f` |
| `--P100`, `--P200`, `--P300`, `--P400`, `--P500` | `#fff4e6`, `#ffe8cc`, `#ffd8a8`, `#ffc078`, `#ff8d00` |
| `--P600`, `--P700`, `--P800`, `--P900` | `#fd7e14`, `#f76707`, `#e8590c`, `#d9480f` |
| `--White`, `--Black` | `#ffffff`, `#000000` |

For example, corporate `body { color: var(--G600) }` is a source fact about that stylesheet. It does not set the product homepage's body color.

## Typography

### Font evidence classes

- **Official product-use documentation:** no prose font guideline was found in the opened company, culture or terms pages. The implementation evidence below supports the font identification.
- **Live-loaded:** `document.fonts` listed **Pretendard 400, 500, 600 and 700 normal**. It also listed **Material Symbols Rounded 400 normal**, an icon face, which is excluded from the text-family token.
- **Official distributed assets:** the live page declares static Pretendard Bold, SemiBold, Medium and Regular WOFF2 subset files under `file.doctornow.co.kr/fonts/`, with `local(...)` alternatives. These are declared delivery paths, not proof of which alternative supplied each glyph. The separate corporate reset imports Pretendard's static dynamic-subset CSS from jsDelivr at v1.3.6 and names `Pretendard` for body, inputs and buttons. Font binaries and licensing documents were not downloaded or inspected. [Corporate reset](https://file.doctornow.co.kr/official/css/default.css).
- **Declared-only:** the computed body, h1 and button stacks start with **Pretendard Variable**, followed by Pretendard and system fallbacks. Pretendard Variable was absent from the loaded-face list and had no face definition in the inspected product bundle. It gets no specimen or family token.
- **Unresolved:** a variable-font asset, official typography rationale, and a license for redistribution. Substitute: none chosen.

Use the loaded **Pretendard** family for this captured product reference. No monospace face was verified.

### Product type scale

The fetched product CSS confirms the legacy utility metrics below. These are declared utilities, not a claim that every size was rendered in the survey. The utility classes set `font-style: normal`, `text-transform: none` and `-webkit-font-smoothing: antialiased`.

| Utility suffix | Size / line height | Weights confirmed in CSS |
|---|---|---|
| `32b/sb` | 32px / 42px | 700 / 600 |
| `28b` | 28px / 38px | 700 |
| `24b/sb` | 24px / 32px | 700 / 600 |
| `22b/sb` | 22px / 30px | 700 / 600 |
| `20b/sb` | 20px / 28px | 700 / 600 |
| `18b/sb/m` | 18px / 26px | 700 / 600 / 500 |
| `17b/sb/m/r` | 17px / 24px | 700 / 600 / 500 / 400 |
| `16b/sb/m/r` | 16px / 24px | 700 / 600 / 500 / 400 |
| `15b/sb/m/r` | 15px / 22px | 700 / 600 / 500 / 400 |
| `14b/sb/m/r` | 14px / 20px | 700 / 600 / 500 / 400 |
| `12sb` | 12px / 18px | 600 |

Homepage HTML also binds major section headings to 48px / 60px / 700 and feature headings to 40px / 52px / 700. Measured action labels are 17px / 24px / 600; the FAQ is 18px / 26px / 600; the footer link is 14px / 20px / 400. The symptom link's outer box is 16px / 24px / 400, while its visible label is 17px / 500. Keep those two identities separate.

## Layout

The desktop homepage places its wordmark and navigation over a centered header section, followed by a two-column hero, a row of symptom choices, a dark statement band, a three-step explanation, testimonials, service links, price-comparison rows, FAQs and an orange download panel. This sequence is visible in the captured page and present in its HTML.

The current product HTML uses **1080px** content caps for the header and several main sections; the comparison block uses **600px**. The rendered fixed header is **80px** tall. Symptom choices appear in ten columns at this desktop width; the source provides five columns before its `sm` override. The legacy 1064px value exists as a media-query threshold, not the main content cap.

Observed spacing includes 8px symptom-link padding, 12px lower-button padding and testimonial gaps, 16px header-button padding, 24px symptom-grid gaps, 32px card padding, 48px footer vertical padding, and 96px FAQ heading-to-list gap in HTML. Homepage review metadata uses a 4px gap in source; no universal 8px base-grid rule was documented.

The separate corporate CSS retains `width: 92%; max-width: 1050px` wrappers, a fixed 64px header and 64px main offset. Its header section uses `128px 0 80px` padding and its review section 96px vertically. Keep that corporate layout context separate from the homepage's 1080px / 80px measurements.

### Responsive Behavior

Mobile rendering was not measured. The following are source declarations from the currently served homepage, rather than device observations:

- Rules at `max-width: 768px` reduce its major 48px headings to 32px, and feature 40px headings to 28px.
- Step cards change from 32% width to full width and the step row becomes a column with a 20px gap.
- Testimonial cards change from 480px width / 32px padding to 350px / 24px. They remain a testimonial strip rather than becoming an assumed full-width stack.
- Hero and other blocks contain explicit mobile column rules. The symptom grid's five-to-ten-column switch is a separate `sm` rule; it is not evidence for a universal one-column grid.
- Homepage mobile navigation markup contains `search` and `menu`; its source declares a 60px bar and a 768px visibility split. Opening the mobile menu was not tested.

Corporate CSS also has a 768px media query, reduces review padding from 96px to 64px, and changes the review interview layout to a column. The two surfaces share a threshold without sharing every measurement.

## Elevation & Depth

The measured buttons, links and FAQ trigger are flat: their computed box shadow is `none`. The homepage's content cards add depth through specific shadows declared on actual HTML elements and resolved by the fetched CSS:

| Homepage surface | Bound shadow | Geometry |
|---|---|---|
| Step card | `0 2px 40px 0 rgba(0,0,0,.06)` | white, 20px radius, 32px padding |
| Testimonial card | `0 4px 20px 0 rgba(0,0,0,.12)` | white, 20px radius, 32px padding |
| Service link card | `0 4px 12px 0 rgba(0,0,0,.04)` | white, 12px radius, 32px padding |

The survey's open petition dialog introduced a `rgba(0, 0, 0, 0.4)` scrim. It was closed for the states run. This does not confirm a general modal elevation scale.

The current product bundle still distributes utility shadow definitions equivalent to `0px 2px 8px rgba(0,0,0,.08)`, `0 4px 8px rgba(0,0,0,.08)`, and `0px 8px 16px 0px rgba(0,0,0,.16)`. The earlier assignments to floating cards, bottom sheets and dropdowns were not confirmed. No inset-review shadow was verified on the current homepage.

## Motion & Easing

All six measured control identities report exactly **`transition: all 0s ease 0s`**. The footer underline has no measured timed transition. No brand focus-ring animation was observed.

Current homepage HTML binds scroll reveals to **`opacity 500ms ease-out, transform 500ms ease-out`**, initially `opacity:0; transform:translateY(20px)`. The three step cards have source-bound transition durations of **500ms**, **1500ms**, and **2000ms** respectively. The FAQ ancestor changed from opacity 0 and translateY 20px to opacity 1 and translateY 0 during the keyboard walk; the change remained after blur. These are reveal settings, not button-state timings.

The fetched application CSS separately distributes these animation definitions; their activation in a loading, sheet or navigation flow was not measured:

- `.animate-slide-up`: `slide-up .3s ease-out`; its keyframes translate vertically from 100% to 0.
- `.animate-slide-down`: `slide-down .3s ease-in forwards`; its keyframes translate vertically from 0 to 100%. No sheet exit was activated.
- `.animate-screen-slide-in`: `.32s` with the CSS-declared curve `cubic-bezier(0.4, 0, 0.2, 1)` (the raw minified rule is in the verification proof). Its keyframes combine opacity 0→1 with translateX 20px→0. This is a distributed definition, not a computed transition from an activated navigation flow.
- `.animate-skeleton-shimmer`: `skeleton-shimmer 1.6s ease-in-out infinite`; its keyframes move `background-position-x` from 180% to -20%. This corrects the earlier 1.5s / translateX description.
- `.animate-accordion-down` and `-up`: `.2s ease-out` definitions with height keyframes between 0 and `var(--radix-accordion-content-height)`. The current FAQ answer containers instead carry `transition-[margin-top] duration-300 ease-linear`; no open/close timing was measured.
- `.animate-shake-left-to-right` and `-right-to-left`: `2s ease-in-out 1` definitions. Their one iteration does not establish a looping UI state; activation was not measured.

No universal duration scale, marquee period or prohibition on layout-property animation was verified.

## Components

Six product controls were inspected after closing the petition dialog. None was submitted or followed. Every listed control had no border and no box shadow at rest. The only clean, control-specific changed state was the footer link underline. Controls with unchanged, unmeasured or incidental states remain described here and are omitted from machine components.

| Control | Height / radius | Padding | Rest fill / visible ink | Font |
|---|---|---|---|---|
| Header **앱 다운로드** | 48px / 12px | 0px 16px | `#fd7e14` / `#ffffff` | 17px / 600, 24px line height |
| Lower **앱 다운로드** | 56px / 12px | 0px 12px | `#ffffff` / `#fd7e14` | 17px / 600, 24px line height |
| Footer **회사 소개** link | 16px bounding box / 0px | 0px | transparent on `#f7f9fa` / `#9aa0aa` | 14px / 400, 20px line height |
| **소아과** symptom link | 112px / 8px | 8px | transparent on white / child `#383c43` | outer 16px / 400; label 17px / 500 |
| First FAQ trigger | 58px / 0px | 16px 19px 16px 20px | `#f1f3f6` / `#707882`; `Q.` is `#e8590c` | 18px / 600, 26px line height |
| Header **소아청소년과** submenu link | 36px / 4px | 6px 8px | transparent on white / `#50565e` | 17px / 400, 24px line height |

**Footer navigation link:** hover and held pointer press change `text-decoration` from `none` to `underline solid rgb(154, 160, 170)` (`#9aa0aa`). Its color stays fixed. Keyboard focus produced no compared style change and no drawn outline. The machine component is typed as a button because the catalog uses that type for navigation links; its `use` explicitly identifies it as a link.

**Symptom link:** the outer hit area contains a 64×64px pale `#f7f9fa` icon tile and a 36×36px pediatrics image. Its own inherited `#09090b` is not the visible label color. No style/attribute change was detected on hover, press or keyboard focus within the recorded comparison scope.

**Source-bound homepage cards:** current HTML binds testimonial cards to white, 20px corners, 32px desktop padding and 12px gaps. Feature/service links use white, 12px corners and 32px padding. Those service links were not state-probed. This is source-bound geometry, rather than an invented universal card component.

### Corporate definitions retained separately

The company CSS declares `.btn-now` with `linear-gradient(90deg, #d9480f 0%, #f3463b 100%)`, white text, 12px fallback radius, 16px 54px padding, and 17px / 600 type. Its hover rule sets a background color but does not remove the gradient; no rendered state was captured for this class.

Corporate `.btn-primary` declares `#fd7e14`, white 18px / 500 type, 16px 26px padding, 12px radius and a small shadow. Its CSS rules assign `#f76707` on hover and `#e8590c` plus weight 600 on active. These are corporate declarations, not the measured homepage download-button states.

Corporate `section.review .slide` still declares white with a 1px `#dfe1e2` border and 32px corners. Its interview area uses 40px desktop padding, not the earlier claimed 24px. No verified product outline-button, disabled-button or pill-chip component is available from this capture.

Corporate navigation has its own declaration: default G100 (`#dfe1e2`) links, 40px height/line height, 8px radius and 0 12px padding. The desktop `.on` rule sets white and weight 700. The 768px mobile rule instead assigns P600 (`#fd7e14`) to `.on` and declares 56px links with 20px type. These corporate rules do not describe the product homepage's 36px submenu link.

### States

| Key | Hover | Held pointer press | Keyboard focus |
|---|---|---|---|
| `app-download` | Own style unchanged; header ancestor adds a gradient/background-position | Same ancestor observation; own style unchanged | No compared change |
| `app-download-alt` | No compared change | No compared change | No compared change |
| `company-nav` | Solid `#9aa0aa` underline appears | Same underline | No compared change; no drawn outline |
| `symptom-card` | No compared change | No compared change | No compared change |
| `faq-toggle` | No compared change | No compared change | Ancestor opacity 0→1 and translateY 20px→0 persist after blur: scroll reveal, not a focus token |
| `header-nav` | **UNMEASURED:** `:hover` failed to match | **UNMEASURED:** same failure | No compared change |

“No compared change” covers self, its pseudo-elements, descendants and their pseudo-elements, and three ancestor levels. The symptom link included three descendants and one image; the FAQ included four descendants, including one SVG and path. It is not a pixel-level proof of no effect. Canvas/video, closed shadow roots, cross-origin frames, external-sprite internals and siblings remain outside that comparison.

Disabled, checked, loading, empty, error and completed-consultation states were not induced. There is no disabled token or success-toast recipe from this capture. The declared skeleton and sheet animations below do not establish those product flows.

## Do's and Don'ts

These are reproduction rules derived from the observed surface, rather than a published brand manual.

### Do

- Use the measured solid `#fd7e14` and white 17px / 600 label for the header download action, with 48px height and 12px corners.
- Use the current product gray scale for the homepage. Reserve the older uppercase `--G*` values for their separately sourced corporate context.
- Use loaded Pretendard. Preserve the 17px / 500 visible symptom label even though its link box inherits a different font and color.
- Reproduce the specific 20px testimonial corners and soft shadow, and the 12px service-card corners.
- Underline the footer company link on hover and press without changing its `#9aa0aa` text.

### Don't

- Turn corporate `.btn-primary:hover` into a homepage download-button hover token.
- Promote declared-only Pretendard Variable or a system fallback to a loaded brand face.
- Give every card a 32px radius or a `#dfe1e2` border; those belong to a separate corporate review definition.
- Convert the FAQ's persistent scroll-reveal change into keyboard-focus styling.
- Fill missing empty, error, disabled or successful-consultation states from plausible healthcare-app patterns.

## Voice & Tone

The opened copy addresses everyday obstacles to receiving care: illness at night, a busy day, and long pediatric waits. The company page promises to reduce that inconvenience; the homepage uses short step labels and the conversational Korean `-요` ending. Its first FAQ pairs an affirmative answer with a qualification based on the doctor's judgment. These are concrete copy patterns, rather than evidence for a universal ban on medical vocabulary. [Homepage](https://doctornow.co.kr/), [company](https://company.doctornow.co.kr/company).

Verified samples are **“아플 땐 닥터나우”**, **“병원에서 전화가 와요”**, **“진료 예약하기”**, **“전화로 진료받기”**, and **“약 픽업하기”**. The corporate promise also includes **“늦은 밤에도, 주말에도”**. Use the actual pickup wording when describing the current homepage's service flow. The earlier invented delivery slogan and illustrative quotations are not brand copy.

## Agent Prompt Guide

Build a Korean remote-consultation homepage using loaded Pretendard and the measured 1080px desktop content cap. Use white and `#f7f9fa` surfaces, `#1a1b1c` headings, `#383c43` symptom labels and `#707882` explanatory copy. Put a solid `#fd7e14` download button in the 80px fixed header: 48px high, 12px corners, 0px 16px padding, white 17px / 600 text. Its own fill remains the same in the measured hover and press snapshots.

Use pale icon tiles for symptom and specialty choices. Give testimonial cards 20px corners and the observed `0 4px 20px 0 rgba(0,0,0,.12)` shadow. Keep service-link cards at 12px corners. Make footer links `#9aa0aa` on `#f7f9fa`, with a solid underline on hover and press. Describe the consultation-to-pharmacy-pickup journey using the source's actual steps. Substitute: none chosen.

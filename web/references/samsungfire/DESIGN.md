---
name: Samsung Fire & Marine Insurance
colors:
  foreground: '#0b0d0f'
  canvas: '#ffffff'
  muted: '#868a93'
  utility-ink: '#5a5b63'
  control-border: '#e5e5e8'
  primary: '#0068ff'
  advice-surface: '#e2efff'
  silson-surface: '#f0fad3'
  campaign-warm: '#fbf6dc'
  advice-caption: '#727780'
  direct-banner: '#0685cd'
  company-banner: '#076fc8'
  guide-dog-banner: '#308f74'
  museum-banner: '#747e95'
  award-slide: '#fff5e9'
  primary-pressed: '#0053cc'
typography:
  service-label:
    fontSize: 16px
    fontWeight: 400
    use: FAQ visible label and service/utility links
  caption:
    fontSize: 14px
    fontWeight: 400
    use: Expert inquiry caption; corporate utility links
  control-shell:
    fontSize: 18px
    fontWeight: 400
    use: Login and FAQ anchor computed font; child labels differ
  action-title:
    fontSize: 18px
    fontWeight: 700
    use: Login visible label and THE FIT card title
  navigation:
    fontSize: 20px
    fontWeight: 700
    use: Contract-management visible strong label
rounded:
  none: 0px
  card: 20px
  action: 12px
  footer-call-center: 30px
components:
  login:
    type: button
    backgroundColor: '#0068ff'
    textColor: '#ffffff'
    border: '#0068ff'
    rounded: 12px
    height: 48px
    padding: 13px 16px
    typography: 18px / 700
    pressed: 'self bg: rgb(0, 104, 255) -> rgb(0, 83, 204); self border: 1px solid rgb(0, 104, 255) -> 1px solid rgb(0, 83, 204)'
    use: 로그인 — link styled as the primary action in the white service rail; visible label is 18px/700. Hover has no measured change; press darkens background and border. Focus has only the browser auto ring.
  faq:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0b0d0f'
    border: '#e5e5e8'
    rounded: 12px
    height: 56px
    padding: 15px 20px
    typography: 16px / 400
    hover: 'self border: 1px solid rgb(229, 229, 232) -> 1px solid rgb(134, 138, 147)'
    pressed: 'self border: 1px solid rgb(229, 229, 232) -> 1px solid rgb(134, 138, 147)'
    focus: 'self border: 1px solid rgb(229, 229, 232) -> 1px solid rgb(134, 138, 147)'
    use: 자주하는 질문 — link styled as an outlined service action on white; visible label is 16px/400 although the anchor computes 18px/400. Border darkens on hover, press and keyboard focus; browser auto outline excluded.
  nav:
    type: button
    textColor: '#0b0d0f'
    rounded: 0px
    height: 83px
    padding: 0px
    typography: 20px / 700
    hover: 'descendant-pseudo strong@0.pseudo: ::after{content:"";bg:rgb(11, 13, 15);img:none;color:-;op:1;tf:matrix(1, 0, 0, 1, 0, 0);bs:none;size:0pxx3px} -> ::after{content:"";bg:rgb(11, 13, 15);img:none;color:-;op:1;tf:matrix(1, 0, 0, 1, -42.6016, 0);bs:none;size:85.2031pxx3px}'
    pressed: 'descendant-pseudo strong@0.pseudo: ::after{content:"";bg:rgb(11, 13, 15);img:none;color:-;op:1;tf:matrix(1, 0, 0, 1, 0, 0);bs:none;size:0pxx3px} -> ::after{content:"";bg:rgb(11, 13, 15);img:none;color:-;op:1;tf:matrix(1, 0, 0, 1, -42.6016, 0);bs:none;size:85.2031pxx3px}'
    use: 계약관리 — transparent navigation link on the white header; visible strong label is 20px/700. Hover and press reveal the 3px underline. The focus underline persisted after blur, so it is excluded from focus tokens.
  product-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#0b0d0f'
    rounded: 20px
    width: 271px
    height: 301px
    padding: 30px 26px
    typography: 18px / 700
    hover: 'self shadow: rgba(0, 0, 0, 0.18) 0px 10px 24px -8px, rgba(0, 0, 0, 0.04) 0px -6px 15px -6px -> rgba(0, 0, 0, 0.18) 0px 10px 24px 0px; self transform: none -> matrix(1, 0, 0, 1, 0, -20); self-pseudo after: ::after{content:"";bg:rgba(0, 0, 0, 0);img:none;color:-;op:0;tf:none;bs:none;size:271pxx301px;bd:2px solid rgb(0, 104, 255)} -> ::after{content:"";bg:rgba(0, 0, 0, 0);img:none;color:-;op:1;tf:none;bs:none;size:271pxx301px;bd:2px solid rgb(0, 104, 255)}'
    pressed: 'self shadow: rgba(0, 0, 0, 0.18) 0px 10px 24px -8px, rgba(0, 0, 0, 0.04) 0px -6px 15px -6px -> rgba(0, 0, 0, 0.18) 0px 10px 24px 0px; self transform: none -> matrix(1, 0, 0, 1, 0, -20); self-pseudo after: ::after{content:"";bg:rgba(0, 0, 0, 0);img:none;color:-;op:0;tf:none;bs:none;size:271pxx301px;bd:2px solid rgb(0, 104, 255)} -> ::after{content:"";bg:rgba(0, 0, 0, 0);img:none;color:-;op:1;tf:none;bs:none;size:271pxx301px;bd:2px solid rgb(0, 104, 255)}'
    focus: 'self shadow: rgba(0, 0, 0, 0.18) 0px 10px 24px -8px, rgba(0, 0, 0, 0.04) 0px -6px 15px -6px -> rgba(0, 0, 0, 0.18) 0px 10px 24px 0px; self transform: none -> matrix(1, 0, 0, 1, 0, -20); self-pseudo after: ::after{content:"";bg:rgba(0, 0, 0, 0);img:none;color:-;op:0;tf:none;bs:none;size:271pxx301px;bd:2px solid rgb(0, 104, 255)} -> ::after{content:"";bg:rgba(0, 0, 0, 0);img:none;color:-;op:1;tf:none;bs:none;size:271pxx301px;bd:2px solid rgb(0, 104, 255)}'
    use: THE FIT — product card link on the white homepage; 18px/700 title. Hover, press and keyboard focus lift it 20px, strengthen the shadow and reveal a 2px primary-blue pseudo-element border. Browser auto outline excluded.
  expert:
    type: button
    backgroundColor: '#e2efff'
    textColor: '#727780'
    rounded: 20px
    height: 120px
    padding: 25px 24px
    typography: 14px / 400
    hover: 'self-pseudo after: ::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://www.samsungfire.com/v2/resources/images/main/ho…#21929971/86;pos:0% 0% / contain / no-repeat;color:-;op:1;tf:matrix(1, 0, 0, 1, 0, -60);bs:none;size:140pxx120px} -> ::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://www.samsungfire.com/v2/resources/images/main/ho…#21929971/86;pos:0% 0% / contain / no-repeat;color:-;op:1;tf:matrix(1.1, 0, 0, 1.1, 0, -60);bs:none;size:140pxx120px}'
    pressed: 'self-pseudo after: ::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://www.samsungfire.com/v2/resources/images/main/ho…#21929971/86;pos:0% 0% / contain / no-repeat;color:-;op:1;tf:matrix(1, 0, 0, 1, 0, -60);bs:none;size:140pxx120px} -> ::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://www.samsungfire.com/v2/resources/images/main/ho…#21929971/86;pos:0% 0% / contain / no-repeat;color:-;op:1;tf:matrix(1.1, 0, 0, 1.1, 0, -60);bs:none;size:140pxx120px}'
    focus: 'self-pseudo after: ::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://www.samsungfire.com/v2/resources/images/main/ho…#21929971/86;pos:0% 0% / contain / no-repeat;color:-;op:1;tf:matrix(1, 0, 0, 1, 0, -60);bs:none;size:140pxx120px} -> ::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://www.samsungfire.com/v2/resources/images/main/ho…#21929971/86;pos:0% 0% / contain / no-repeat;color:-;op:1;tf:matrix(1.1, 0, 0, 1.1, 0, -60);bs:none;size:140pxx120px}'
    use: 전문가에게 문의하기 — inquiry button on a pale blue panel. The compiler uses the h5 caption (14px/400, grey) as its label; the larger description retains dark foreground. Hover, press and focus scale the decorative after layer to 1.1.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: SS
---

# Design System Inspiration of Samsung Fire & Marine Insurance

## Overview

### Visual Theme & Atmosphere

Samsung Fire & Marine Insurance (삼성화재) offers insurance and risk solutions for individuals and businesses. Its company overview dates its establishment to 26 January 1952 and places its headquarters in Seoul. The current identity combines protecting everyday life with imagining a better future: “지키다 일상, 꿈꾸다 그 이상”. The official history records the announcement of “Protecting today, Inspiring tomorrow” in January 2025. This is a corporate identity development; it is not evidence of a 2025 website redesign. [Company overview](https://www.samsungfire.com/v2/html/company/01/M_010_010_001.html), [history](https://www.samsungfire.com/v2/html/company/01/M_010_010_013.html), [identity](https://www.samsungfire.com/v2/html/company/01/M_010_010_017.html).

The measured Korean homepage (`samsungfire.com/`, HTML `lang="ko"`) uses a white canvas, blue actions, rounded white product cards, pastel promotional panels and illustrated insurance topics. A service rail brings login and frequent insurance tasks alongside the campaign area. These are observations of the desktop surface, rather than official design principles. The official logo guidance supplies three communication principles: simple, active and balanced/orderly; it dates the revised logo's application to July 2022. [Logo guidance](https://www.samsungfire.com/v2/html/company/07/M_070_020_001.html).

### Brand Narrative

The official identity page connects insurance solutions with safety consulting, healthcare and mobility risk management. Its customer commitment pairs service and customer experience with technology. This gives context to a homepage that places insurance products, service shortcuts and advice together. [Identity](https://www.samsungfire.com/v2/html/company/01/M_010_010_017.html).

### Principles

The published communication principles are **Be Simple**, **Be Active** and **Be Trim**. The practical reading for this measured interface is clear service naming, illustrations alongside tasks and orderly card groupings; that reading is an interpretation of the capture, not an additional official rule. [Logo guidance](https://www.samsungfire.com/v2/html/company/07/M_070_020_001.html).

### Personas

No persona research was verified.

## Colors

The census contains 322 computed custom properties: 317 `--ssf-*`, one Swiper property and four safe-area properties. The `ssf` family is treated as first-party because its component-specific names align with the measured page (for example primary and pressed action colours). The stylesheet declaration walk returned no declarations; ownership is an evidence-based classification, not a published token specification.

### Seen on the measured page

| Token | Value | Observed role |
|---|---|---|
| `foreground` | `#0b0d0f` | Paragraph ink (9 paragraphs); FAQ and product-card labels; navigation label. |
| `canvas` | `#ffffff` | FAQ and product-card backgrounds; login label. |
| `muted` | `#868a93` | Secondary paragraph ink (6 paragraphs); FAQ border on hover, pressed and focus. |
| `utility-ink` | `#5a5b63` | Survey rows: main 회원 가입 and 인증센터, footer 상품공시 links. |
| `control-border` | `#e5e5e8` | FAQ rest border; survey outlined service controls. |
| `primary` | `#0068ff` | Login rest background and border; product-card revealed pseudo-element border. |
| `advice-surface` | `#e2efff` | Expert inquiry button background. |
| `silson-surface` | `#f0fad3` | Survey rows: 실손24 insurance claim link background; also THE FIT campaign slide. |
| `campaign-warm` | `#fbf6dc` | Survey rows: guide-dog documentary campaign and RC recruitment banner backgrounds. |
| `advice-caption` | `#727780` | Expert inquiry h5 caption. |
| `direct-banner` | `#0685cd` | Survey row: 삼성화재 다이렉트 promotional card background. |
| `company-banner` | `#076fc8` | Survey row: 삼성화재 회사소개 promotional card background. |
| `guide-dog-banner` | `#308f74` | Survey row: 삼성화재 안내견학교 promotional card background. |
| `museum-banner` | `#747e95` | Survey row: 모빌리티뮤지엄 promotional card background. |
| `award-slide` | `#fff5e9` | Survey row: 2026 NCSI campaign slide background. |
| `primary-pressed` | `#0053cc` | Login pressed background and border (CSS name --ssf-primary-hover). |

### Declared CSS palette; not seen painted

These colours are listed for reference and are not exported as tokens: nothing in this capture was painted with them.

The following values are declared in the site's CSS through computed root properties and were **not seen painted on the measured page**. Their names preserve the owning property. A name such as disabled, error or badge is a declaration, not a measured control state.

| Name | Value |
|---|---|
| `--ssf-alert` → `ssf-alert` | `#ff6060` |
| `--ssf-aqua` → `ssf-aqua` | `#00b7fd` |
| `--ssf-badge-blue` → `ssf-badge-blue` | `#0790de` |
| `--ssf-badge-green` → `ssf-badge-green` | `#0f9f7b` |
| `--ssf-badge-green2` → `ssf-badge-green2` | `#19cb8b` |
| `--ssf-badge-olive` → `ssf-badge-olive` | `#809924` |
| `--ssf-badge-orange` → `ssf-badge-orange` | `#f45502` |
| `--ssf-badge-red` → `ssf-badge-red` | `#ff4744` |
| `--ssf-badge-yellow` → `ssf-badge-yellow` | `#d77712` |
| `--ssf-dark-blue` → `ssf-dark-blue` | `#7e89a2` |
| `--ssf-decrease` → `ssf-decrease` | `#286ef1` |
| `--ssf-disabled` → `ssf-disabled` | `#b4b9c3` |
| `--ssf-div-color-md` → `ssf-div-color-md` | `#f5f6f7` |
| `--ssf-div-color-xsm` → `ssf-div-color-xsm` | `#e9ecee` |
| `--ssf-good` → `ssf-good` | `#00d186` |
| `--ssf-gray-040505` → `ssf-gray-040505` | `#040505` |
| `--ssf-gray-707070` → `ssf-gray-707070` | `#707070` |
| `--ssf-gray-ccd1dc` → `ssf-gray-ccd1dc` | `#ccd1dc` |
| `--ssf-gray-cdcfd5` → `ssf-gray-cdcfd5` | `#cdcfd5` |
| `--ssf-gray-e1e3e7` → `ssf-gray-e1e3e7` | `#e1e3e7` |
| `--ssf-gray-e2e5eb` → `ssf-gray-e2e5eb` | `#e2e5eb` |
| `--ssf-gray-e5e5e5` → `ssf-gray-e5e5e5` | `#e5e5e5` |
| `--ssf-gray-e8eaed` → `ssf-gray-e8eaed` | `#e8eaed` |
| `--ssf-gray-eaebec` → `ssf-gray-eaebec` | `#eaebec` |
| `--ssf-gray-efefef` → `ssf-gray-efefef` | `#efefef` |
| `--ssf-gray-f1f1f3` → `ssf-gray-f1f1f3` | `#f1f1f3` |
| `--ssf-gray-f2f2f2` → `ssf-gray-f2f2f2` | `#f2f2f2` |
| `--ssf-gray-f2f2f5` → `ssf-gray-f2f2f5` | `#f2f2f5` |
| `--ssf-gray-f5f5f5` → `ssf-gray-f5f5f5` | `#f5f5f5` |
| `--ssf-gray-f6f8f9` → `ssf-gray-f6f8f9` | `#f6f8f9` |
| `--ssf-gray-f9fafb` → `ssf-gray-f9fafb` | `#f9fafb` |
| `--ssf-increase` → `ssf-increase` | `#f50057` |
| `--ssf-light-blue` → `ssf-light-blue` | `#edf4ff` |
| `--ssf-light-green` → `ssf-light-green` | `#e5faf3` |
| `--ssf-light-orange` → `ssf-light-orange` | `#ffede0` |
| `--ssf-light-red` → `ssf-light-red` | `#ffeded` |
| `--ssf-orange` → `ssf-orange` | `#ff9445` |
| `--ssf-origin-black` → `ssf-origin-black` | `#000000` |
| `--ssf-primary-disabled` → `ssf-primary-disabled` | `#b2d8ff` |
| `--ssf-red-disabled` → `ssf-red-disabled` | `#ffaeae` |
| `--ssf-red-error` → `ssf-red-error` | `#ffefef` |
| `--ssf-red-hover` → `ssf-red-hover` | `#ea5858` |
| `--ssf-secondary` → `ssf-secondary` | `#eef6ff` |
| `--ssf-secondary-90` → `ssf-secondary-90` | `#000b17` |
| `--ssf-secondary-hover` → `ssf-secondary-hover` | `#cbe4ff` |
| `--ssf-yellow` → `ssf-yellow` | `#ffc000` |

### Official corporate palette, a separate evidence domain

The official design guide documents SFMI Spring Blue `#5bc2e7` and SFN Blue `#003cdc`. These are corporate identity references, not replacements for the measured web action blue `#0068ff`; neither is added to the live-extract tokens. The two opened guides disagree on Spring Blue's Pantone label, so no Pantone value is adopted. [Design guide](https://www.samsungfire.com/v2/html/company/01/M_010_030_002.html), [colour guide](https://www.samsungfire.com/v2/html/company/07/M_070_020_003.html).

## Typography

The live font census records **SS 400 normal** and **SS 700 normal** as loaded. Body, h1 and button declarations read `ss, sans-serif`; measured controls use `ss`. The font-face source list is empty, so the serving URL and the full name behind this alias remain unresolved. Use only the measured alias for the live interface reference.

Official product-use: no opened source explicitly identifies the website's `SS` alias. Official distributed assets: the design guide names **삼성긴고딕** and **삼성명조**, each illustrated in Light, Medium and Bold, and offers a download link. This documents corporate font assets; it does not establish that either is the live `SS` face. The download was not opened or downloaded, and its license was not verified. These faces receive no live specimen or website family token. Declared-only: the generic fallback is recorded in the CSS stack, without promotion to a brand face. Substitute: none chosen. [Official design guide](https://www.samsungfire.com/v2/html/company/01/M_010_030_002.html).

### Measured scale

16px/400 appears on service links and the FAQ label; 14px/400 on utility links and the expert caption; 18px/400 is the computed anchor font on login/FAQ, overridden by their visible child labels; 18px/700 is the login label and THE FIT title; 20px/700 is the main navigation's strong label. These are the five candidate rows, not a heading scale inferred from the visual hierarchy.

## Layout

At 1440×1000, the screenshot shows two header tiers: corporate utility links above the principal insurance navigation. A broad campaign panel occupies the left side, while a narrower right rail contains login and a grid of frequent service links. Product cards sit in two columns below the left campaign. Treat this as one measured desktop composition; no responsive breakpoint was inferred.

### Responsive Behavior

Desktop 1440×1000 only; mobile layout and breakpoints were not measured.

## Elevation & Depth

The viewport shows product cards elevated above the white ground with soft shadows. The THE FIT card's rest shadow is `rgba(0, 0, 0, 0.18) 0px 10px 24px -8px, rgba(0, 0, 0, 0.04) 0px -6px 15px -6px`. Hover, pressed and keyboard focus replace it with `rgba(0, 0, 0, 0.18) 0px 10px 24px 0px`. The hover border belongs to an initially invisible pseudo-element; the card itself has no rest border.

## Motion & Easing

The THE FIT card reports the raw computed transition `transform, box-shadow 0.2s, 0.2s ease-in-out, ease-in-out 0s, 0s`. Its measured lift is −20px in hover, pressed and keyboard focus. The other five controls report `all 0s ease 0s` on the control itself; this does not describe their descendant or pseudo-element timing. No additional curve or duration is inferred.

## Components

The five components below are emitted by the evidence compiler. All are links except the expert inquiry button. The navigation and search controls have transparent backgrounds over the white header; no transparent background colour token is emitted.

| Control | Rest identity | Measured response |
|---|---|---|
| Login | 281×48px; radius 12px; padding 13px 16px; label 18px/700; `#0068ff` / `#ffffff`; 1px matching border; no shadow | Hover unchanged in probe scope. Press changes background and border to `#0053cc`. Keyboard focus is browser auto outline only. |
| FAQ | 178×56px; radius 12px; padding 15px 20px; label 16px/400; `#ffffff` / `#0b0d0f`; 1px `#e5e5e8` border; no shadow | Hover, pressed and keyboard focus change the border to `#868a93`. Auto outline is additional browser behaviour. |
| Contract-management nav | 85.2×83px; radius 0; padding 0; label 20px/700; transparent / `#0b0d0f`; no border or shadow | Hover and press grow the strong label's `::after` from 0×3px to 85.2031×3px and translate its x coordinate to −42.6016px. Focus shows the same line but it persists after blur, so that change is not a focus token. |
| THE FIT card | 271×301px; radius 20px; padding 30px 26px; title 18px/700; `#ffffff` / `#0b0d0f` | Hover, pressed and focus lift it 20px, strengthen its shadow and reveal the 2px `#0068ff` pseudo-element border (opacity 0→1). |
| Expert inquiry | 335×120px; radius 20px; padding 25px 24px; caption 14px/400 `#727780`; description `#0b0d0f`; background `#e2efff`; no border or shadow | Hover, pressed and focus scale the decorative `::after` from 1 to 1.1, retaining y translation −60px. |

The search trigger “전체검색” is prose only: 28×28px, radius 0, padding 0, 16px/400, transparent over white, `#0b0d0f`. Hover and pressed are unchanged within the compared scope; keyboard focus adds only the browser's auto outline. The closed-page survey exposes no search input, so no input component or input state is inferred.

Radii: 0px for navigation/search; 12px for login and outlined service actions; 20px for product cards and inquiry banners. The footer call-centre link measures 30px radius, 32px height and 5px 12px padding. A carousel arrow has 50% radius; percentage radii remain prose rather than numeric tokens.

Control padding is measured geometry, not a universal spacing scale. The root CSS also declares `--ssf-spacer-1: 0.4rem`, `--ssf-spacer-2: 0.8rem`, `--ssf-spacer-3: 1.2rem` and `--ssf-spacer-4: 1.6rem`; no pixel conversion or universal layout use is inferred.

### States

Reuse the per-control states under Components. All six controls were measured with real hover, mouse-down and keyboard Tab focus. “Unchanged” is limited to self, descendants, pseudo-elements and three ancestor levels in the probe's CSS/DOM comparison; it makes no claim about sibling pixels or external/canvas animation. The nav focus underline is excluded because it persists after blur. Browser `outline-style: auto` is not a brand focus token. Disabled, error, validation and submitted states were not measured.

## Do's and Don'ts

Use the measured action blue and preserve the distinction between the primary login action, quiet utility links and product cards. Keep the live web typography evidence separate from the corporate font asset names. For the logo, the official incorrect-use examples prohibit altered proportions, added borders or shadows, changed type and changed colours. [Logo guidance](https://www.samsungfire.com/v2/html/company/07/M_070_020_001.html).

## Voice & Tone

The page combines short service labels such as “보험금 청구” with conversational guidance such as “많은 분들이 선택한 상품이에요” and “보험이 어렵다면 삼성화재가 도와드려요”. Use direct task names for utilities and helpful complete sentences for explanation. This is a reading of the measured page copy, not a published editorial style guide.

## Agent Prompt Guide

Build a Korean insurance service homepage with a two-tier header, a wide campaign area, a narrower login/service rail and two columns of rounded product cards. Apply the specific measured values under Colors, Typography and Components; do not infer search-field, validation or disabled states from CSS variable names.

## Governance

### Known Gaps

- **Contrast, `expert`.** Text `#727780` on `#e2efff` measures 3.86:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

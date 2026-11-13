---
name: Saltlux
colors:
  foreground: '#333333'
  canvas: '#ffffff'
  muted: '#7f7f7f'
  ink: '#000000'
  clr-dark: '#111111'
  quick-menu-bg: '#222222'
  carousel-bullet-bg: '#aaaaaa'
  surface: '#f0f6fa'
  primary: '#0097f6'
  ax-badge-ink: '#999999'
  background: '#f5f5f5'
  clr-dark-navy: '#143043'
  promotion-bg: '#34b1ff'
  promotion-accent: '#64ff9f'
typography:
  body:
    fontSize: 18px
    fontWeight: 400
    use: 'largest paragraph census: 308 characters; line-height 25.2px'
  body-sm:
    fontSize: 15.12px
    fontWeight: 400
    use: hero paragraph; viewport-resolved clamp(1.3rem, 1.05vw, 2rem); line-height 21.168px
  body-lg:
    fontSize: 20px
    fontWeight: 400
    use: 42 paragraph characters; line-height 28px
  button:
    fontSize: 16px
    fontWeight: 600
    use: demo link; line-height 17.6px
  button-sm:
    fontSize: 15px
    fontWeight: 600
    use: header contact link; line-height 16.5px
  nav:
    fontSize: 17px
    fontWeight: 600
    use: header navigation; line-height 23.8px
  nav-sm:
    fontSize: 16px
    fontWeight: 400
    use: footer links; line-height 22.4px
  caption:
    fontSize: 13px
    fontWeight: 600
    use: promotion link; line-height 14.3px
  label:
    fontSize: 18px
    fontWeight: 600
    use: 'h3 labels: 26 heading characters; line-height 23.4px'
  display:
    fontSize: 46px
    fontWeight: 600
    use: 'h2: 64 heading characters; line-height 59.8px'
  display-sm:
    fontSize: 45.072px
    fontWeight: 600
    use: 'hero h2: 21 heading characters; viewport-resolved 3.13vw; line-height 58.5936px'
  heading:
    fontSize: 40px
    fontWeight: 600
    use: 'h2: 56 heading characters; line-height 52px'
  heading-sm:
    fontSize: 36px
    fontWeight: 600
    use: 'h1/h3: 24 heading characters; line-height 46.8px'
  label-lg:
    fontSize: 22.608px
    fontWeight: 500
    use: 'hero h3: 62 heading characters; viewport-resolved 1.57vw; line-height 29.3904px'
  card-title:
    fontSize: 24px
    fontWeight: 600
    use: 'h3: 24 heading characters; line-height 31.2px'
rounded:
  none: 0px
  pill: 50px
  card: 20px
  button: 15px
components:
  demo:
    type: button
    textColor: '#111111'
    border: '#000000'
    rounded: 50px
    height: 50px
    padding: 0px 28px
    typography: 16px / 600
    hover: 'self bg: rgba(0, 0, 0, 0) -> rgb(0, 0, 0); fg: rgb(17, 17, 17) -> rgb(255, 255, 255) (self, label, 1 descendant); ::before bg: rgb(17, 17, 17) -> rgb(255, 255, 255); ::before opacity: 0 -> 1; ::before transform: matrix(1, 0, 0, 1, -10, 0) -> none; ::after bg: rgb(17, 17, 17) -> rgb(255, 255, 255); ::after opacity: 1 -> 0; ::after transform: matrix(1, 0, 0, 1, 10, 0) -> matrix(1, 0, 0, 1, 14, 0); tf: matrix(1, 0, 0, 1, -14, 0) -> matrix(1, 0, 0, 1, 14, 0) (label, 1 descendant)'
    pressed: 'self bg: rgba(0, 0, 0, 0) -> rgb(0, 0, 0); fg: rgb(17, 17, 17) -> rgb(255, 255, 255) (self, label, 1 descendant); ::before bg: rgb(17, 17, 17) -> rgb(255, 255, 255); ::before opacity: 0 -> 1; ::before transform: matrix(1, 0, 0, 1, -10, 0) -> none; ::after bg: rgb(17, 17, 17) -> rgb(255, 255, 255); ::after opacity: 1 -> 0; ::after transform: matrix(1, 0, 0, 1, 10, 0) -> matrix(1, 0, 0, 1, 14, 0); tf: matrix(1, 0, 0, 1, -14, 0) -> matrix(1, 0, 0, 1, 14, 0) (label, 1 descendant)'
    use: '데모 사용해보기 — a link on the pale #f0f6fa platform panel, transparent at rest; hover and press invert to black and white and move the label and arrow.'
  footer-luxia:
    type: button
    textColor: '#7f7f7f'
    rounded: 0px
    height: 22.4px
    padding: 0px
    typography: 16px / 400
    hover: 'fg #ffffff'
    pressed: 'fg #ffffff'
    use: '루시아 클라우드 — a footer link on #000000; grey ink turns white on hover and press.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of Saltlux

## Overview

### Visual Theme & Atmosphere

Saltlux (솔트룩스) presents enterprise AI through agents, ontology, LLMs and an AI platform. Its company page frames the mission as helping everyone communicate knowledge freely, and its present direction as “AI를 이해에서 실행으로” — moving AI from understanding to execution. The homepage invites visitors to experience a platform and explore solutions for work; the company page describes collaborative agents that extend human judgment.

The expression is spacious and technical: a white canvas, centred Korean headlines, rounded product panels, industry imagery and black pill links. Blue supplies small interface accents, while the promotion link uses a cyan-to-green gradient. A dark footer and a luminous contact image close the long page. These are observations of the corporate website, not a specification for the separate LUXIA application. The measured homepage is the Korean edition (`saltlux.com/ko/index`), with HTML `lang="ko"`.

### Brand Narrative

The company page connects its knowledge-communication mission to executable AI: ontology-based knowledge verification and large language models support its stated direction toward Agentic AI. Its own wording is “사람의 판단을 대체하는 것이 아니라 확장하는, 협업형 AI 에이전트입니다.” The site's design supports that positioning through product choices, customer cases and direct contact links. No verified rebrand chronology was found.

### Principles

As implementation guidance derived from the capture: give product choices generous space; use pale surfaces to contain information; keep dark action shapes compact; and make the outlined demo link respond with colour and spatial feedback. These are observed patterns, not claimed company design principles.

### Personas

No verified persona research was found in the opened sources.

## Colors

The live census found 46 root custom properties. Brand colours use `--clr-*`; layout, font and form variables are also authored on the site. Swiper, OverlayScrollbars and Tom Select variables are excluded from the brand namespace. The following colours were painted in the capture; the sparse entries were tied to selectors in the site's CSS.

| Token | Value | Observed role |
|---|---|---|
| foreground | `#333333` | paragraph ink, 13 paragraphs; `--clr-text` |
| canvas | `#ffffff` | white page/header surfaces; contact-link ink and demo hover ink |
| muted | `#7f7f7f` | footer sitemap links; hover and press turn white |
| ink | `#000000` | header contact-link fill, outlined-link border and demo hover fill; footer background |
| clr-dark | `#111111` | navigation and outlined-link ink; `--clr-dark` |
| quick-menu-bg | `#222222` | quick-menu link base, beneath its gradient |
| carousel-bullet-bg | `#aaaaaa` | Swiper pagination bullets painted by the site's `.swiper-pagination-bullet` rule |
| surface | `#f0f6fa` | platform panel and case cards; `--background-primary` |
| primary | `#0097f6` | quick-menu plus ink and news badges; `--clr-primary` |
| ax-badge-ink | `#999999` | small labels in the AX proof grid |
| background | `#f5f5f5` | AI Solution feature panel; `--background` |
| clr-dark-navy | `#143043` | authored scrollbar-handle colour, `--scrollbar` referencing `--clr-dark-navy` |
| promotion-bg | `#34b1ff` | starting stop of the promotion-link gradient |
| promotion-accent | `#64ff9f` | ending stop of that gradient |

The promotion background is `linear-gradient(90deg, rgb(52, 177, 255) 0%, rgb(100, 255, 159) 100%)`. The quick-menu stylesheet layers `linear-gradient(135deg, rgba(0, 151, 246, 0.4) 0%, rgba(0, 151, 246, 0) 100%)` over its dark base. The popup also paints `#555555` on its daily-hide label and `#e5e5e5` on dividers; these peripheral colours are kept in prose.

### Declared in the site's CSS, not seen painted

These are authored declarations, not evidence of rendered use. This list is not exported as tokens.

| CSS property | Value |
|---|---|
| `--background-dark` | `#0b293d` |
| `--border` | `#dddddd` |
| `--clr-blue` | `#005fa3` |
| `--clr-gray` | `#666666` |
| `--clr-green` | `#0ed058` |
| `--clr-hover` | `#fafafa` |
| `--clr-primary-hover` | `#0b6aee` |
| `--clr-red` | `#ff1919` |
| `--clr-secondary` | `#57c5c7` |
| `--clr-sky` | `#0678c7` |
| `--clr-yellow` | `#fdcb01` |

## Typography

**Official product use:** no opened company statement documents a product font. **Live-loaded:** Pretendard 400, 500 and 600 normal appear in `document.fonts`; body and h1 declare Pretendard. The site's `base.css` offers local names and same-site WOFF2/WOFF subset URLs. Those are source declarations; the capture does not establish which local-versus-network source supplied a face.

**Official distributed assets:** the stylesheet declares Pretendard weights 100–900, but no font file was downloaded and no redistribution license was verified. **Declared-only:** `--font-display` names Montserrat and HTML links a Google Fonts stylesheet; Montserrat does not appear among loaded faces and receives no family token or specimen. Pretendard's other declared weights likewise have no live-use claim. **Unresolved:** the generic button sample declares Arial, which is absent from the loaded-face list; no family token is exported for it. Substitute: none chosen.

The body size is **18px/400**, line-height **25.2px**, carrying 308 paragraph characters. The remaining paragraph sizes are **15.12px/400** (43 characters) and **20px/400** (42 characters). The fractional hero size comes from `clamp(1.3rem, 1.05vw, 2rem)` at the measured viewport.

Heading census: **46px/600** (64 characters), **22.608px/500** (62), **40px/600** (56), **18px/600** (26), **36px/600** (24), **24px/600** (24), and **45.072px/600** (21). The hero uses viewport-resolved `1.57vw` and `3.13vw` values. These observations do not imply a fixed cross-device scale.

Links use **17px/600** in the header, **16px/400** in the footer, **16px/600** for the demo, **15px/600** for header contact and **13px/600** for the promotion.

## Layout

At 1440×1000, a promotion strip sits over an 80px fixed header. The page progresses through a centred text hero, a wide visual, customer logos, two product panels, an AX proof grid, industry and case carousels, news, contact and a sitemap footer. The product panels use a two-column grid with a 20px gap. Root declarations include `--inner: 1440px`, `--inner-lg: 1600px` and `--max-width: 1920px`; these are CSS limits, not a claim that the visible content spans the viewport.

### Responsive Behavior

Only desktop was rendered. Opened CSS makes the hero type fluid with `clamp()` and changes section headings at `max-width: 768px`; those are authored rules, not mobile visual verification.

## Elevation & Depth

Measured demo, contact, nav and footer controls have `box-shadow: none`. The quick-menu toggle's authored CSS uses `0px 0px 10px rgba(12, 34, 119, 0.2)`. The promo popup's authored shadow is `0 18px 60px rgba(0, 0, 0, 0.35)`. Those CSS rules are distinguished from state measurements.

## Motion & Easing

Raw computed transitions: demo, contact and promotion `all 0.15s ease 0s`; platform nav `color 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s`; case card `all 0.35s ease 0s`; footer `all 0s ease 0s`. A transition declaration alone does not establish a visible change: the actionable motion evidence here is the demo's label and arrow movement on hover and press. Reduced-motion behaviour was not measured.

---

First-party sources: [homepage](https://www.saltlux.com/), [company](https://www.saltlux.com/ko/company/index), [privacy notice](https://www.saltlux.com/ko/terms/privacy), [issuer statutory notice](https://kind.krx.co.kr/external/2026/03/12/000571/20260312001623/00591.htm), [base CSS](https://www.saltlux.com/assets/css/base.css), [common CSS](https://www.saltlux.com/assets/css/common.css), [main CSS](https://www.saltlux.com/assets/css/main.css). Captured 2026-11-13.

## Components

- **Demo link — 데모 사용해보기:** 185×50px, radius 50px, padding 0px 28px, Pretendard 16px/600; transparent over `#f0f6fa`, `#111111` ink and a 1px `#000000` border. Hover and press fill it black, turn ink white and move the label from `matrix(1, 0, 0, 1, -14, 0)` to `matrix(1, 0, 0, 1, 14, 0)`. Its two arrow pseudo-elements exchange opacity and position.
- **Footer link — 루시아 클라우드:** 99.2×22.4px, radius 0px, no padding, Pretendard 16px/400. Transparent on the black footer; `#7f7f7f` becomes `#ffffff` on hover and press.
- **Header contact — 문의하기:** a 95.1×40px black link, white 15px/600 text, radius 50px and padding 0px 20px. All three measured states showed no brand change within the probe's comparison scope, so it remains a prose reference.
- **Platform navigation — 플랫폼:** 103.5×80px, radius 0px, padding 0px 30px, 17px/600 dark text on the white header. No brand change was measured on hover, press or Tab focus in the captured scope.
- **Promotion — 루시아 온 알아보기:** 134.1×30px, radius 50px, padding 0px 20px, 13px/600 black ink on the gradient described under Color Palette. No measured brand state change; prose only.
- **Case card — 강원랜드:** 625.4×472.9px, radius 20px, padding 60px, base 18px/400 and dark paragraph ink on pale blue. Hover and press were UNMEASURED in the corrected capture. Focus observations were entangled with carousel movement; no interactive component is exported for it.

The fixed quick-menu links have 15px corners. Measured pill controls use a computed 50px radius; the circular quick-menu toggle uses 50%, retained only in prose.

### States

Demo hover and press invert fill and ink and animate its label and arrow layers. Footer hover and press brighten grey text to white. No authored focus treatment is exported: the demo's ancestor reveal remained after blur, and contact, navigation, promotion and footer showed no focus change within scope. The corrected case-card pointer states are unmeasured; carousel opacity/translation changes are not offered as a stable card focus style. Disabled states were not measured.

## Do's and Don'ts

Use pale rounded panels to group product choices, black pills for contact actions and blue for small interface accents. Reproduce both the label movement and the colour inversion on the demo link. Keep footer links muted until pointer interaction. Do not promote the declared-only palette to rendered tokens, assign Montserrat to a specimen, or infer card states from the demo link.

## Voice & Tone

The homepage combines technical nouns with a collaborative invitation: “고객의 AX를 함께 고민하고” and “경험해보세요.” Keep product categories explicit and frame the work around the customer's problem. This is an interpretation of the opened copy, not an official voice manual.

## Agent Prompt Guide

“Build a spacious enterprise-AI landing page on white, with dark Korean typography, pale-blue and pale-grey product panels, 20px card corners and pill-shaped links. Use the loaded Pretendard face. For the 50px demo link, start with a transparent background and 1px black border; hover fills black, turns ink white, shifts the label from −14px to +14px and exchanges the arrow layers.”

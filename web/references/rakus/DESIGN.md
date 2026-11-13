---
name: Rakus
colors:
  foreground: '#323232'
  primary: '#f08300'
  canvas: '#ffffff'
  border: '#e6e6e6'
  footer-border: '#cccccc'
  muted: '#5d5d5d'
  surface: '#f5f5f5'
  language-en-fg: '#bebebe'
  color-gray-600: '#5a5a5a'
  hero-scroll-bg: '#adadad'
typography:
  body-sm:
    fontSize: 14px
    fontWeight: 400
    use: Small paragraph (41 paragraph characters); 25.2px paragraph line height.
  caption:
    fontSize: 14px
    fontWeight: 500
    use: News date label; footer links.
  button:
    fontSize: 16px
    fontWeight: 700
    use: Mission CTA and service-link; also news H3 titles (236 heading characters).
  nav:
    fontSize: 14px
    fontWeight: 700
    use: Header navigation.
  body:
    fontSize: 16px
    fontWeight: 400
    use: 'Largest paragraph group: 469 characters, 10 paragraphs, 32px paragraph line height.'
  card-title:
    fontSize: 20px
    fontWeight: 700
    use: IR promo card visible label; 30px label line height.
  label:
    fontSize: 17px
    fontWeight: 700
    use: 'Japanese H2 labels: 28 heading characters, 20.4px line height.'
  heading-lg:
    fontSize: 40px
    fontWeight: 700
    use: Four H3 elements, 36 heading characters; 64px line height.
  display:
    fontSize: 100px
    fontWeight: 700
    use: Six English H2 headings, Roboto; 29 characters, 120px line height.
  heading-sm:
    fontSize: 19px
    fontWeight: 700
    use: Four H3 elements, 20 heading characters; 26.6px line height.
  heading:
    fontSize: 28px
    fontWeight: 700
    use: 'H1: 11 heading characters, 42px line height.'
  heading-compact:
    fontSize: 16.38px
    fontWeight: 700
    use: Two H3 elements, 9 heading characters; 24.57px line height.
  heading-feature:
    fontSize: 43px
    fontWeight: 700
    use: One H3, 6 heading characters; 53.75px line height.
  heading-emphasis:
    fontSize: 49px
    fontWeight: 700
    use: One H3, 2 heading characters; 61.25px line height.
rounded:
  none: 0px
  button: 5px
components:
  mission-cta:
    type: button
    backgroundColor: '#f08300'
    textColor: '#ffffff'
    border: '#f08300'
    rounded: 5px
    height: 75px
    padding: 0px 18px 0px 20px
    typography: 16px / 700
    hover: 'self bg: rgb(240, 131, 0) -> rgb(255, 255, 255); fg: rgb(255, 255, 255) -> rgb(240, 131, 0) (self, label); ::after image: url("https://www.rakus.co.jp/assets/img/icon/icon-arrow-whit…#185dae5b/67 -> url("https://www.rakus.co.jp/assets/img/icon/icon-arrow.svg"…#dde80d07/61; ::after transform: none -> matrix(1, 0, 0, 1, 8, 0)'
    pressed: 'self bg: rgb(240, 131, 0) -> rgb(255, 255, 255); fg: rgb(255, 255, 255) -> rgb(240, 131, 0) (self, label); ::after image: url("https://www.rakus.co.jp/assets/img/icon/icon-arrow-whit…#185dae5b/67 -> url("https://www.rakus.co.jp/assets/img/icon/icon-arrow.svg"…#dde80d07/61; ::after transform: none -> matrix(1, 0, 0, 1, 8, 0)'
    use: ミッション・ビジョン — action link to /about/#mission-vision on the white About section; orange border stays in the inverted pointer states.
  service-link:
    type: button
    textColor: '#323232'
    rounded: 0px
    height: 79px
    padding: 30px 10px 30px 30px
    typography: 16px / 700
    hover: 'self bg: rgba(0, 0, 0, 0) -> rgb(240, 131, 0); fg: rgb(50, 50, 50) -> rgb(255, 255, 255) (self, label); ::after image: url("https://www.rakus.co.jp/assets/img/icon/icon-arrow-down…#f035af70/66 -> url("https://www.rakus.co.jp/assets/img/icon/icon-arrow-down…#80d6f410/72; ::after transform: none -> matrix(1, 0, 0, 1, 0, 15)'
    pressed: 'self bg: rgba(0, 0, 0, 0) -> rgb(240, 131, 0); fg: rgb(50, 50, 50) -> rgb(255, 255, 255) (self, label); ::after image: url("https://www.rakus.co.jp/assets/img/icon/icon-arrow-down…#f035af70/66 -> url("https://www.rakus.co.jp/assets/img/icon/icon-arrow-down…#80d6f410/72; ::after transform: none -> matrix(1, 0, 0, 1, 0, 15)'
    use: '楽楽クラウド — in-page link to #rakuraku-cloud, transparent at rest on the #f5f5f5 service section.'
  header-about:
    type: button
    textColor: '#323232'
    rounded: 0px
    height: 89px
    padding: 0px 14px
    typography: 14px / 700
    hover: 'self bg: rgba(0, 0, 0, 0) -> rgb(240, 131, 0); fg: rgb(50, 50, 50) -> rgb(255, 255, 255) (self, label, 2 descendants)'
    pressed: 'self bg: rgba(0, 0, 0, 0) -> rgb(240, 131, 0); fg: rgb(50, 50, 50) -> rgb(255, 255, 255) (self, label, 2 descendants)'
    focus: 'self bg: rgba(0, 0, 0, 0) -> rgb(240, 131, 0); fg: rgb(50, 50, 50) -> rgb(255, 255, 255) (self, label, 2 descendants)'
    use: ラクスの想い — header navigation link to /about/, transparent at rest on the white header.
  news-card:
    type: card
    textColor: '#5d5d5d'
    rounded: 0px
    width: 620px
    height: 141.3px
    padding: 20px
    typography: 14px / 500
    hover: 'fg: rgb(50, 50, 50) -> rgb(240, 131, 0) (self, 2 descendants); self radius: 0px -> 6px; descendant img@0.0.tf: none -> matrix(1.07, 0, 0, 1.07, 0, 0)'
    pressed: 'fg: rgb(50, 50, 50) -> rgb(240, 131, 0) (self, 2 descendants); self radius: 0px -> 6px; descendant img@0.0.tf: none -> matrix(1.07, 0, 0, 1.07, 0, 0)'
    use: 'News link to /news/2026/1109-2.html on a white parent card. Exported fg and font describe its date label; the anchor and H3 title rest ink is #323232.'
  language-en:
    type: button
    backgroundColor: '#f5f5f5'
    textColor: '#bebebe'
    rounded: 0px
    height: 40px
    padding: 8px 12px
    typography: 16px / 700
    focus: 'self radius: 0px -> 2px; self outline: none -> rgb(50, 50, 50) solid 2px off -2px'
    use: EN — secondary language button in the header, Roboto; measured without activating the language change.
  ir-card:
    type: card
    textColor: '#ffffff'
    rounded: 0px
    width: 320px
    height: 200.4px
    padding: 0px
    typography: 20px / 700
    hover: 'fg: rgb(50, 50, 50) -> rgb(240, 131, 0) (self, 1 descendant); descendant img@1.tf: none -> matrix(1.05, 0, 0, 1.05, 0, 0)'
    pressed: 'fg: rgb(50, 50, 50) -> rgb(240, 131, 0) (self, 1 descendant); descendant img@1.tf: none -> matrix(1.05, 0, 0, 1.05, 0, 0); ancestor up1.outline: none -> rgb(50, 50, 50) solid 2px off 0px'
    focus: 'descendant img@1.tf: none -> matrix(1.05, 0, 0, 1.05, 0, 0); ancestor up1.outline: none -> rgb(50, 50, 50) solid 2px off 0px'
    use: 'IRライブラリ — image card link to /ir/financial-results-brief/ on the #f5f5f5 section. White 20px/700 text overlays an image with brightness(0.7); the anchor itself has #323232 computed ink.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans JP
    latin: Roboto
---

# Design System Inspiration of Rakus

## Overview

### Visual Theme & Atmosphere

Rakus provides business-support cloud services under the integrated 楽楽クラウド brand. Its mission is to keep supporting company growth through IT services, expressed as 働く人を「楽！」にする: making work easier for people. The company outline dates its establishment to 1 November 2000; its history records the change from 株式会社アイティーブースト to 株式会社ラクス in January 2010.

The corporate site was renewed on 18 December 2025 around a newly formulated visual identity and the theme 「合理性と温かさ」 (rationality and warmth). The About page explains this through a square containing a circle: rational strength with warmth inside. It names ラクスオレンジ as the key colour and ラクスイエロー as a subcolour. On the measured homepage, a white field, dark grey typography and orange actions accompany large exclamation-mark graphics assembled from geometric shapes. Yellow is visible in the hero artwork; this capture does not establish a numeric yellow UI token.

The product brand continues to evolve: the 29 October 2026 announcement introduces 「Good Ways to Grow. 変えるなら、楽しいほうへ。」 and stronger value provision for enterprise customers. These measurements describe the Japanese corporate homepage at `https://www.rakus.co.jp/` (HTML `lang="ja"`), rather than the interfaces inside its cloud applications.

### Brand Narrative

The corporate VI's 「合理性と温かさ」 theme connects orderly geometry with human warmth. The About page explicitly associates its orange with cheerfulness, clarity, activity, familiarity, challenge, creation and hospitality; its yellow evokes light for future hope and new challenges. The live page carries that identity through exclamation marks, white space and orange interactive feedback.

### Principles

Official mission: 「ITサービスで企業の成長を継続的に支援します」. The About page explains 「誠実な合理性」 as combining efficient execution with consideration for others. For implementation on this measured surface, preserve both the geometric structure and the clear orange feedback.

### Personas

No research-backed personas were verified.

## Colors

Orange alternates between action fill and action ink. Grey section surfaces frame white content; the body ink is the most frequent paragraph colour, not a guess from navigation.

| Token | Value | Measured role |
|---|---|---|
| foreground | `#323232` | Paragraph ink (31 paragraphs); also navigation and link ink. |
| primary | `#f08300` | Mission CTA fill and border; hover fill of service and header links. |
| canvas | `#ffffff` | Page background; mission CTA label at rest and its hover fill. |
| border | `#e6e6e6` | Footer navigation dividers and service-list parent divider. |
| footer-border | `#cccccc` | Top borders of the six footer social links (.p-footer__sns-item). |
| muted | `#5d5d5d` | News dates; news-card rest.label.fg. |
| surface | `#f5f5f5` | Service section behind service-link; EN button fill; IR-card backdrop. |
| language-en-fg | `#bebebe` | EN language button text at rest. |
| color-gray-600 | `#5a5a5a` | SCROLL label: .p-kv__scroll uses --color-gray-600. |
| hero-scroll-bg | `#adadad` | Vertical scroll indicator: .p-kv__scroll__line background. |

### Declared in the site's CSS, not seen painted

The following first-party CSS colour declarations were not observed painted in the compiler's census or measured controls. This list is not exported as tokens. Product-named variables do not establish the design of those products' applications.

| CSS property | Value |
|---|---|
| `--color-blue`; `--color-kintai` | `#2531b7` |
| `--color-denshihozon` | `#a43fd1` |
| `--color-denshihozon-light` | `#d078ff` |
| `--color-gray-300` | `#d2d2d2` |
| `--color-gray-500` | `#6e6e6e` |
| `--color-hanbai` | `#f53c20` |
| `--color-hanbai-light` | `#ff8181` |
| `--color-jidou-light` | `#ffc266` |
| `--color-mail` | `#172a88` |
| `--color-meisai` | `#267d00` |
| `--color-meisai-light` | `#86e026` |
| `--color-notice` | `#aa0000` |
| `--color-orange-100` | `#fff9f2` |
| `--color-orange-200` | `#fef2e5` |
| `--color-orange-300` | `#fce6cc` |
| `--color-orange-400` | `#f9cd99` |
| `--color-orange-500` | `#f6b466` |
| `--color-orange-600` | `#f39b33` |
| `--color-r-jinjiroumu` | `#107de8` |
| `--color-r-jugyoinportal` | `#464646` |
| `--color-saimu` | `#00ad0e` |
| `--color-seikyu` | `#0ba578` |
| `--color-seisan` | `#007bc7` |
| `--color-seisan-light` | `#73c4ff` |
Alpha declarations also remain prose: `--color-white-opacity-900: rgba(255, 255, 255, 0.9)` (one background observed); `--color-shadow: rgba(0, 0, 0, 0.15)` and `--color-overlay: rgba(32, 32, 32, 0.5)` (declarations only).

## Typography

- Official product use: no opened company writing identifies a product application's font.
- Live-loaded: **Noto Sans JP** and **Roboto**, both `100 900 normal`, appear in `document.fonts`. Body, H1 and the sampled button declare Noto Sans JP; header language buttons and English section headings use Roboto. These are corporate-surface measurements.
- Serving: the first-party `/assets/css/style.css` imports Google Fonts CSS for Noto Sans JP and Roboto at weights 100–900. The census stylesheet walk returned no readable `@font-face` records, so the exact loaded font-file URLs were not resolved.
- Official distributed assets: no separately distributed corporate font package was verified.
- Declared-only: `--font` contains a 游ゴシック / YuGothic stack; it was not among loaded faces. Onest is named in a Google Fonts import but was not loaded. Neither receives a family token or specimen.
- Unresolved: application typography and font licensing were not established. Substitute: none chosen.

| Token | Size / weight | Evidence and use |
|---|---|---|
| body-sm | 14px / 400 | Small paragraph (41 paragraph characters); 25.2px paragraph line height. |
| caption | 14px / 500 | News date label; footer links. |
| button | 16px / 700 | Mission CTA and service-link; also news H3 titles (236 heading characters). |
| nav | 14px / 700 | Header navigation. |
| body | 16px / 400 | Largest paragraph group: 469 characters, 10 paragraphs, 32px paragraph line height. |
| card-title | 20px / 700 | IR promo card visible label; 30px label line height. |
| label | 17px / 700 | Japanese H2 labels: 28 heading characters, 20.4px line height. |
| heading-lg | 40px / 700 | Four H3 elements, 36 heading characters; 64px line height. |
| display | 100px / 700 | Six English H2 headings, Roboto; 29 characters, 120px line height. |
| heading-sm | 19px / 700 | Four H3 elements, 20 heading characters; 26.6px line height. |
| heading | 28px / 700 | H1: 11 heading characters, 42px line height. |
| heading-compact | 16.38px / 700 | Two H3 elements, 9 heading characters; 24.57px line height. |
| heading-feature | 43px / 700 | One H3, 6 heading characters; 53.75px line height. |
| heading-emphasis | 49px / 700 | One H3, 2 heading characters; 61.25px line height. |

Heading sizes come from H1–H3 character counts. The 16px body choice comes from the largest paragraph group. The compiler's most-common line height merges interactive and paragraph contexts; paragraph-specific values above come from the captured text census.

## Layout

At 1440×1000, a fixed 89px header precedes an expansive hero. The screenshot shows an orange logo at left and navigation plus JP/EN controls at right. Large English section headings sit with smaller Japanese labels. Service and news areas use pale grey section backgrounds, with white content surfaces; the footer exposes multiple columns of links.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; responsive runtime behaviour is unverified.

## Elevation & Depth

The measured controls use `box-shadow: none` at rest. IR card imagery uses a brightness filter; focus indication can sit on a parent container. No elevation scale was verified.

## Motion & Easing

Raw computed transitions are `color 0.3s ease 0s` for the service link and `all 0.3s ease 0s` for the IR card. The mission CTA, header link, news card and EN button each report `all 0s ease 0s` on the control itself; this does not imply their descendants or pseudo-elements have no animation. Measured final transforms are an 8px rightward CTA arrow shift, a 15px downward service arrow shift, news-image scale 1.07 and IR-image scale 1.05. No site-wide easing scale was established.

## Components

- **Mission CTA**: link labelled ミッション・ビジョン, 310×75px, 5px corners, padding 0 / 18 / 0 / 20px, Noto Sans JP 16px/700, white ink on orange with a 2px orange border. Hover and press invert the fill and ink and move the arrow right by 8px.
- **Service link**: 楽楽クラウド in-page link, 340×79px, square, padding 30 / 10 / 30 / 30px, 16px/700. Transparent over the grey service section at rest; hover and press add orange fill, white ink, a changed arrow asset and a 15px downward arrow displacement.
- **Header navigation**: ラクスの想い link, 119.6×89px, square, padding 0 / 14px, 14px/700. Transparent on white at rest; hover, press and keyboard focus produce orange fill and white text.
- **News card**: the 9 November 2026 news link, 620×141.3px, padding 20px, square at rest on its white parent. The date is 14px/500 in muted grey; anchor ink is dark grey. Hover and press change anchor/image inherited ink to orange, round the anchor to 6px and scale the image to 1.07. The title and date descendants do not appear in the compiler's colour-change list.
- **Secondary language button**: EN, 44.3×40px, square at rest, padding 8 / 12px, Roboto 16px/700. Light grey fill and pale grey text. Hover and press have no measured change; keyboard focus adds a dark grey 2px solid outline offset −2px and a 2px radius.
- **IR image card**: IRライブラリ link, 320×200.4px, square, no padding. Its visible white label is 20px/700 over an image with `brightness(0.7)`; the anchor's own ink is dark grey. Hover and press scale the image to 1.05 and change inherited anchor/image ink to orange. Press and focus draw a 2px solid dark grey outline on the parent; focus also scales the image.

Rest radius tokens are 0px (`none`) and 5px (`button`). State radii 6px and 2px are retained inside the compiled component descriptions, not added to the rest-radius token group. All six measured controls have no rest box shadow. No search input was present in the survey.

### States

All six controls had measured hover, pointer-pressed and keyboard-focus passes. Hover and press match for the CTA, service jump and news card. The header link changes colour on all three states. EN changes only on focus. The IR card combines image scaling with parent-level focus indication. These are observations relative to rest, not proof of a dedicated `:active` CSS rule.

Mission CTA, service link and news card focus showed only the browser's `auto` ring, so their component records have no branded focus state. The header and IR link also have browser `auto` outlines, omitted from their exported states while retaining the authored changes. A 1px IR image-height difference persisted after blur and is excluded from its focus description. Disabled states were not measured.

## Do's and Don'ts

- Use the measured orange/white inversion for the main action link, retaining its orange border.
- Preserve the different arrow directions: 8px right for the CTA, 15px down for the service jump link.
- Keep the date-label colour distinct from the news anchor's inherited ink.
- Do not apply the declared product palettes to unmeasured application interfaces.
- Do not turn the browser's automatic outline into a corporate focus colour.

## Voice & Tone

The official copy combines business growth with the approachable 「楽！」 wordplay. The current product-brand message is 「Good Ways to Grow. 変えるなら、楽しいほうへ。」. These are quoted expressions, not a separately verified editorial style guide.

## Agent Prompt Guide

Create a white Japanese corporate page with dark grey paragraph ink, pale grey section surfaces, large English Roboto headings and Noto Sans JP interface text. Use a 310×75px orange action link with 5px corners, a 2px orange border and 16px/700 white text; invert fill and ink on hover and translate its arrow 8px right. Keep image-card labels separate from inherited anchor colours.

## Governance

### Known Gaps

- **Contrast, `mission-cta`.** Text `#ffffff` on `#f08300` measures 2.64:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `language-en`.** Text `#bebebe` on `#f5f5f5` measures 1.70:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

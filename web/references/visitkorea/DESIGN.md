---
name: Visit Korea
colors:
  canvas: '#ffffff'
  footer-ink: '#333333'
  ink: '#29292c'
  foreground: '#58585f'
  global-gray-80: '#3d3d43'
  primary: '#236cf6'
  global-gray-05: '#f3f3fa'
  carousel-border: '#949499'
  border: '#e9e9f4'
  footer-border: '#e4e4e4'
  muted: '#717171'
  news-bg: '#f8f8f8'
  search-fg: '#666666'
  primary-hover: '#2061dd'
  banner-tourcard-bg: '#1f70ea'
  banner-ai-bg: '#8fdaff'
  banner-badgeland-bg: '#b4f0f6'
  banner-odii-bg: '#f1e2ff'
  festival-card-focus: '#ff0000'
typography:
  button-sm:
    fontSize: 13px
    fontWeight: 400
    use: Search icon button computed font; visible content is an SVG.
  nav-sm:
    fontSize: 17px
    fontWeight: 400
    use: Footer utility links and buttons.
  button:
    fontSize: 14px
    fontWeight: 700
    use: 바로가기 link.
  caption:
    fontSize: 13px
    fontWeight: 700
    use: Carousel pause and help controls, computed font.
  nav:
    fontSize: 20px
    fontWeight: 600
    use: Header navigation and festival-card visible title.
  button-lg:
    fontSize: 18px
    fontWeight: 700
    use: Hero arrow buttons and 더보기 links.
  label-lg:
    fontSize: 17px
    fontWeight: 800
    use: Footer 이용 가이드 and 찾아오시는 길 links.
  label:
    fontSize: 17px
    fontWeight: 600
    use: Footer 개인정보처리방침 link.
  body:
    fontSize: 16px
    fontWeight: 400
    use: 596 paragraph characters, line-height 24px; largest paragraph character count.
  heading:
    fontSize: 26px
    fontWeight: 800
    use: 68 h3 characters, line-height 33.8px.
  heading-sm:
    fontSize: 26px
    fontWeight: 400
    use: 21 h3 characters, line-height 33.8px; regular heading fragments, same size.
rounded:
  none: 0px
  card: 16px
  card-sm: 6px
components:
  search:
    type: button
    backgroundColor: '#236cf6'
    textColor: '#666666'
    height: 36px
    padding: 0px
    typography: 13px / 400
    hover: '#2061dd'
    pressed: '#2061dd'
    use: '검색 icon button on the white header. Circular radius 50%; computed fg #666666 is not its visible SVG stroke, which is #ffffff. Browser auto focus ring excluded.'
  shortcut:
    type: button
    backgroundColor: '#f3f3fa'
    textColor: '#29292c'
    rounded: 50px
    height: 32px
    padding: 0px 12px
    typography: 14px / 700
    hover: 'self bg: rgb(243, 243, 250) -> rgb(233, 233, 244); ancestor ::after border: 3px solid rgb(255, 255, 255) -> 3px solid rgb(35, 108, 246)'
    pressed: 'self bg: rgb(243, 243, 250) -> rgb(233, 233, 244); ancestor ::after border: 3px solid rgb(255, 255, 255) -> 3px solid rgb(35, 108, 246)'
    focus: 'self bg: rgb(243, 243, 250) -> rgba(0, 0, 0, 0.075); self outline: none -> rgb(41, 41, 44) solid 2px off 2px; ancestor up3.tf: matrix(1, 0, 0, 1, -2089, 0) -> matrix(1, 0, 0, 1, -1655, 0)'
    use: 바로가기 link in a white AI-summary card. A 50px radius forms pill ends. Parent card border also changes on hover/pressed. Compiled focus includes carousel translation; treat that ancestor movement as capture context, not an animation prescription.
  nav-theme:
    type: button
    textColor: '#29292c'
    rounded: 0px
    height: 90px
    padding: 0px 10px
    typography: 20px / 600
    hover: 'fg #236cf6'
    pressed: 'fg #236cf6'
    focus: 'fg #236cf6'
    use: 테마 navigation link on the white header; transparent background omitted. Auto outline excluded; authored blue focus ink retained.
  festival-card:
    type: card
    textColor: '#29292c'
    rounded: 0px
    width: 302px
    height: 491px
    padding: 0px
    typography: 20px / 600
    focus: '::after appears: border 2px solid rgb(255, 0, 0), 302px x 491px; ancestor up2.tf: matrix(1, 0, 0, 1, -4238, 0) -> matrix(1, 0, 0, 1, -3912, 0)'
    use: '2026 대한민국 우리술 대축제 card link on white. Visible title is #29292c at 20px/600; anchor font is 13px/400 and computed ink #333333. Pointer states unmeasured. Compiled focus includes carousel translation; its red ::after border is visible in the focus crop.'
  hero-next:
    type: button
    textColor: '#3d3d43'
    height: 56px
    padding: 0px
    typography: 18px / 700
    hover: 'self bg: rgba(0, 0, 0, 0.4) -> rgb(255, 255, 255); fill: none|rgb(255, 255, 255) -> none|rgb(61, 61, 67) (2 descendants)'
    pressed: 'self bg: rgba(0, 0, 0, 0.4) -> rgb(255, 255, 255); fill: none|rgb(255, 255, 255) -> none|rgb(61, 61, 67) (2 descendants)'
    focus: 'self outline: none -> rgb(41, 41, 44) solid 2px off 2px'
    use: '다음 button over hero photography. Rest background is rgba(0, 0, 0, 0.4), radius 100%; visible arrow is #ffffff at rest and #3d3d43 on hover/pressed. Solid authored focus outline #29292c; translucent bg omitted from the scalar field.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard GOV
---

# Design System Inspiration of Visit Korea

## Overview

### Visual Theme & Atmosphere

대한민국 구석구석 is 한국관광공사’s travel service: its official terms describe nearby destination recommendations, while the current product page brings together digital tourism resident cards, festival calendars, travel courses and guidebooks. Its current offering includes AI summaries of travel articles and user comments. These are current product features; no launch date or rebrand is inferred.

The captured interface pairs a white ground and dark Korean typography with large seasonal travel photography. Blue marks the search action and interactive navigation. The service-icon row gives way to AI-summary cards, overlapping photographic course cards, illustrated theme cards, festival posters, events and travel news. This is an observation of the homepage, not an official statement of brand principles.

The measured homepage is the Korean domestic-travel edition at `korean.visitkorea.or.kr/main/main.do` (HTML `lang="ko"`), reached from the supplied root URL. It is not evidence for the separate international VISITKOREA interface.

### Brand Narrative

The official legal service name is 대한민국 구석구석 and its operator is 한국관광공사. The current surface extends destination discovery with AI article and comment summaries, alongside travel courses and the digital tourism resident card. An official brand-history or rebrand account was not verified, so no chronology is assigned to this visual system.

### Principles

Implementation guidance inferred from this capture: give photography generous space, use blue to make interaction visible, and preserve clear differences between title, paragraph and secondary link ink. These are observed design patterns, not attributed corporate values.

### Personas

No verified persona research was available.

## Colors

The primary choice is the measured search background, not a colour sampled from a logo. Paragraph ink is `foreground`, distinct from the darker navigation and title ink. All exported colours below were observed; roles come from controls, paragraph census, or identified survey rows.

| Token | Value | Observed role |
|---|---|---|
| `canvas` | `#ffffff` | White page ground and header; also the hero-next hover/pressed background. |
| `footer-ink` | `#333333` | Footer utility and legal links in survey.rows; not the festival card’s visible title ink. |
| `ink` | `#29292c` | Header navigation, shortcut text and festival-card title; solid focus outline on hero-next and shortcut. |
| `foreground` | `#58585f` | Most frequent paragraph ink: 15 paragraphs; also the festival card date. |
| `global-gray-80` | `#3d3d43` | Hero-next computed foreground and the two arrow paths on hover/pressed. |
| `primary` | `#236cf6` | Search button background; theme navigation hover, pressed and focus; shortcut parent border on hover/pressed. |
| `global-gray-05` | `#f3f3fa` | AI-summary 바로가기 link background at rest. |
| `carousel-border` | `#949499` | 1px borders on small previous/next carousel buttons in survey.rows. |
| `border` | `#e9e9f4` | Most frequent border colour, 17 elements; event-section top divider and shortcut hover/pressed background. |
| `footer-border` | `#e4e4e4` | 1px borders around six footer social links. |
| `muted` | `#717171` | Text of the three 더보기 links, including events-more. |
| `news-bg` | `#f8f8f8` | Backgrounds of the three 여행소식 article links in survey.rows. |
| `search-fg` | `#666666` | Computed foreground of the search control; its visible SVG stroke is white, not this value. |
| `primary-hover` | `#2061dd` | Search hover and pressed background; footer 개인정보처리방침 link ink. |
| `banner-tourcard-bg` | `#1f70ea` | Background of the 디지털 관광주민증 promotional link. |
| `banner-ai-bg` | `#8fdaff` | Background of the AI 콕콕 promotional link. |
| `banner-badgeland-bg` | `#b4f0f6` | Background of the 배지랜드 promotional link. |
| `banner-odii-bg` | `#f1e2ff` | Background of the 오디(Odii) promotional link. |
| `festival-card-focus` | `#ff0000` | 2px border painted by the festival-card focus ::after; not a global focus colour. |

### Declared in the site's CSS, not seen painted

These root custom-property colours were not found painted in the supplied capture. This list is not exported as tokens. It documents the site's CSS vocabulary, not demonstrated component states.

| CSS property | Value |
|---|---|
| `--basic` | `#33363d` |
| `--brand-primary-05` | `#e9f0fe` |
| `--brand-primary-10` | `#dee9fe` |
| `--brand-primary-20` | `#bbd1fc` |
| `--brand-primary-30` | `#9abbfb` |
| `--brand-primary-40` | `#4f89f8` |
| `--brand-primary-70` | `#1c56c5` |
| `--brand-primary-80` | `#133b87` |
| `--brand-primary-90` | `#0f2d67` |
| `--button-gr-hover` | `#45b96c` |
| `--button-gy-color`, `--subtext` | `#6d7882` |
| `--button-wh-hover` | `#eeffee` |
| `--button-wh-press` | `#d4ffd4` |
| `--global-gray-40` | `#c4c4d2` |
| `--global-gray-50` | `#9696a3` |
| `--global-gray-60` | `#71717c` |
| `--gray-bg` | `#f4f5f6` |
| `--pastel-blue-100` | `#edf6ff` |
| `--pastel-blue-200` | `#d7edff` |
| `--pastel-blue-300` | `#86c1ff` |
| `--pastel-blue-500` | `#004ba9` |
| `--pastel-green-100` | `#e9ffe6` |
| `--pastel-green-200` | `#cdf9cd` |
| `--pastel-green-300` | `#49cc93` |
| `--pastel-green-400` | `#008f5d` |
| `--pastel-green-500` | `#00422c` |
| `--pastel-orange-100` | `#fff6eb` |
| `--pastel-orange-200` | `#ffe4c1` |
| `--pastel-orange-300` | `#ffbb63` |
| `--pastel-orange-400` | `#f68511` |
| `--pastel-orange-500` | `#7a2f00` |
| `--pastel-red-100` | `#fff3f7` |
| `--pastel-red-200` | `#ffdfe9` |
| `--pastel-red-300` | `#ff989e` |
| `--pastel-red-400` | `#d83841` |
| `--pastel-red-500` | `#9b0000` |
| `--pastel-teal-100` | `#f7fdfc` |
| `--pastel-teal-200` | `#ccf6ee` |
| `--pastel-teal-300` | `#4cd6ce` |
| `--pastel-teal-400` | `#009990` |
| `--pastel-teal-500` | `#005c62` |
| `--pastel-violet-100` | `#f3edff` |
| `--pastel-violet-200` | `#e9e4ff` |
| `--pastel-violet-300` | `#bd8dff` |
| `--pastel-violet-400` | `#8a39fa` |
| `--pastel-violet-500` | `#550aa9` |
| `--pastel-yellow-100` | `#fffedb` |
| `--pastel-yellow-200` | `#fffd92` |
| `--pastel-yellow-300` | `#fdd700` |
| `--pastel-yellow-400` | `#b88400` |
| `--pastel-yellow-500` | `#765708` |
| `--secondary-blue` | `#b8d9fa` |
| `--secondary-green` | `#5acc80` |
| `--secondary-red` | `#ff9693` |
| `--secondary-yellow` | `#ffe9a6` |
| `--static-green` | `#0ca157` |
| `--static-orange` | `#e86d44` |
| `--static-red` | `#da5353` |
| `--variants-green` | `#208241` |
| `--variants-green-bg` | `#acedac` |
| `--variants-green-line` | `#c4f6c5` |
| `--variants-green1` | `#d4f3dc` |
| `--variants-red` | `#df5a56` |
| `--variants-yellow` | `#fff9e5` |

## Typography

- **Official product use:** no opened company document names an official product typeface.
- **Live-loaded:** `Pretendard GOV` normal 400, 600, 700 and 800 appear in `document.fonts` as loaded. Body, h1 and button computed family stacks begin with that face. Only this loaded family is exported.
- **Official distributed assets:** no font distribution or licence page was verified.
- **Declared-only:** the computed fallback stack names Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic and platform/emoji families. They are not in the loaded list and receive no specimens or family tokens.
- **Unresolved:** font-file URLs and serving mechanism; six stylesheets were unreadable to the stylesheet walk and `fontFaces` is empty. This does not negate the loaded-face evidence. Substitute: none chosen.

| Role | Size / weight | Evidence |
|---|---|---|
| `button-sm` | 13px / 400 | Search icon button computed font; visible content is an SVG. |
| `nav-sm` | 17px / 400 | Footer utility links and buttons. |
| `button` | 14px / 700 | 바로가기 link. |
| `caption` | 13px / 700 | Carousel pause and help controls, computed font. |
| `nav` | 20px / 600 | Header navigation and festival-card visible title. |
| `button-lg` | 18px / 700 | Hero arrow buttons and 더보기 links. |
| `label-lg` | 17px / 800 | Footer 이용 가이드 and 찾아오시는 길 links. |
| `label` | 17px / 600 | Footer 개인정보처리방침 link. |
| `body` | 16px / 400 | 596 paragraph characters, line-height 24px; largest paragraph character count. |
| `heading` | 26px / 800 | 68 h3 characters, line-height 33.8px. |
| `heading-sm` | 26px / 400 | 21 h3 characters, line-height 33.8px; regular heading fragments, same size. |

The 26px heading measurement comes from actual h3 text. The large lettering baked into campaign imagery is not promoted to a display-font token. Computed icon-button fonts describe control identity, not visible text specimens.

## Layout

At 1440×1000, the fixed white header is 90px high. Its logo starts at x=80; the course/service content spans x=80 to x=1360, a 1280px area. The large hero carousel shows clipped neighbouring slides. Subsequent sections alternate broad image-led rows and compact utility content. Festival cards are 302px wide; the survey places their first row at x=80, 406, 732 and 1058, with 24px gaps.

### Responsive Behavior

Only the 1440×1000 desktop surface was measured; mobile geometry and breakpoints are unverified.

## Elevation & Depth

The hero arrow combines `backdrop:blur(5px)` with `rgba(26, 26, 26, 0.12) 1px 1px 6px 0px` shadow. The same shadow appears on the header ancestor. The shortcut’s parent AI-summary card has `rgb(208, 219, 240) 0px 0px 20px 0px` shadow. These are measured effects, not a complete elevation scale.

## Motion & Easing

All six measured controls report the raw computed transition `all 0s ease 0s`. Descendant/ancestor settling detected longer transitions in the carousels, but no raw property-level curve was captured for those effects; no duration or easing token is exported. Carousel autoplay and image content are not evidence of a reusable motion scale.

## Components

- **Search:** 36×36px, 50% circular radius, zero padding; `#236cf6` background darkens to `#2061dd` for hover and press. Its white SVG stroke is the visible mark; computed `#666666` foreground does not describe that mark.
- **AI-summary shortcut:** a link labelled 바로가기, 72.4×32px, 50px radius, padding 0px 12px, 14px/700. Rest `#f3f3fa` / `#29292c`; hover and press use `#e9e9f4`, while the parent card’s 3px pseudo-border changes from `#ffffff` to `#236cf6`.
- **Theme navigation:** a transparent link on white, 54.2×90px, zero radius, padding 0px 10px, 20px/600. Rest `#29292c`; hover, pressed and keyboard-focus ink `#236cf6`.
- **Festival card:** a 302×491px link, zero outer radius and padding. The visible 20px/600 title is `#29292c`; the date is `#58585f`. Keyboard focus paints a 2px `#ff0000` pseudo-border. Hover and press remain unmeasured.
- **Hero next:** a 56×56px button, 100% radius, zero padding, over photography. Its rest background is `rgba(0, 0, 0, 0.4)`. Hover and press turn it `#ffffff` and change the two SVG arrow paths from white to `#3d3d43`.
- **Events more:** a transparent 70.7×24px link on white, zero radius and padding, 18px/700 `#717171`. No authored change was observed across its measured states; it remains prose only.

### Corners

The radius candidates identify 16px photographic course links and 6px event links, alongside square navigation and festival-card anchors. Illustrated theme links have `500px 500px 0px 0px` corners. Shortcut 50px ends and circular 50%/100% controls remain described in prose; no percentage or pill value is exported in `rounded`. The 4px toast close control is outside the product component set.

### States

Search darkens on hover and pressed; its keyboard outline is browser `auto` and is not exported. Theme navigation changes ink in hover, pressed and focus, in addition to a browser auto outline. The shortcut darkens on hover/pressed and changes its parent border; focus uses `rgba(0, 0, 0, 0.075)` and a 2px solid `#29292c` outline with 2px offset. Hero-next uses the same 2px solid outline and offset. The festival card paints a red pseudo-border on focus; its pointer states are unmeasured.

The compiled shortcut and festival focus strings also contain carousel-wrapper translations. Their separate focus paint is verified, but the ancestor transform differences are retained as capture observations and are not reusable motion rules. Events-more has no measured authored change across self, three descendants (one SVG and one path), pseudo-elements and three ancestor levels; the browser auto ring is excluded. Disabled states were not measured.

## Do's and Don'ts

Use the measured blue for search and navigation feedback. Keep body ink distinct from title ink. Preserve the visible SVG colours when implementing icon controls. Keep the broad photographic content separate from the compact utility controls.

Do not turn every declared pastel into a painted token, generalise the festival card’s red focus border to all controls, or interpret carousel ancestor movement as a prescribed focus animation.

## Voice & Tone

The official heading “완벽한 여행 준비를 위한 구석구석 서비스” frames the service around travel preparation. “AI를 활용하여 여행기사의 요약 정보를 제공합니다.” explains the summary feature directly. These examples support task-oriented service copy; no formal voice guide was verified.

## Agent Prompt Guide

“Build a white domestic-travel homepage with Pretendard GOV where available, 16px/400 paragraph text in `#58585f` and 26px/800 section headings. Use a 36px circular `#236cf6` search control that darkens to `#2061dd` on hover and press. Present seasonal photography, service shortcuts and festival posters in distinct rows.”

The font is the measured loaded face; no substitute is specified. Use the measured component states above without inventing disabled or validation variants.

## Governance

### Known Gaps

- **Contrast, `search`.** Text `#666666` on `#236cf6` measures 1.24:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

---
name: National Health Insurance Service
colors:
  foreground: '#1d1d1d'
  nhis-white: '#ffffff'
  nhis-grayscale-70: '#555555'
  nhis-grayscale-20: '#e4e4e4'
  nhis-grayscale-5: '#f8f8f8'
  nhis-primary: '#ee0000'
  nhis-secondary-70: '#323343'
  nhis-grayscale-40: '#c6c6c6'
  nhis-black: '#000000'
  nhis-grayscale-10: '#f0f0f0'
  nhis-grayscale-30: '#d8d8d8'
  nhis-primary-60: '#cd0404'
  nhis-grayscale-50: '#8e8e8e'
  nhis-secondary-5: '#f4f5fa'
  nhis-primary-5: '#fef1f1'
  nhis-danger: '#eb003b'
  nhis-secondary-10: '#e3e8f4'
  focus-ring: '#256ef4'
  header-pressed: '#cdd7e4'
  header-hover: '#edf1f5'
  nhis-primary-10: '#fed7d7'
typography:
  action:
    fontSize: 17px
    fontWeight: 400
    use: personal and business login buttons
  navigation:
    fontSize: 19px
    fontWeight: 700
    use: main navigation button and service-card label
  header-action:
    fontSize: 17px
    fontWeight: 700
    use: header login link and search trigger
  utility-bold:
    fontSize: 15px
    fontWeight: 700
    use: quick-menu links including 제도안내
  utility:
    fontSize: 15px
    fontWeight: 400
    use: header support controls including 지원열기
rounded:
  none: 0px
  text-action: 6px
  button: 8px
  card: 12px
  audience-tab: 35px
components:
  personal-login:
    type: button
    backgroundColor: '#ee0000'
    textColor: '#ffffff'
    border: '#ee0000'
    rounded: 8px
    height: 48px
    padding: 0px 16px
    typography: 17px / 400
    hover: 'self bg: rgb(238, 0, 0) -> rgb(205, 4, 4); self border: 1px solid rgb(238, 0, 0) -> 1px solid rgb(205, 4, 4)'
    pressed: 'self bg: rgb(238, 0, 0) -> rgb(205, 4, 4); self border: 1px solid rgb(238, 0, 0) -> 1px solid rgb(205, 4, 4)'
    focus: 'self shadow: none -> rgb(37, 110, 244) 0px 0px 0px 2px; self outline: none -> rgba(255, 255, 255, 0.9) solid 2px off -4px'
    use: 개인로그인 — primary button on the translucent hero login panel; darkens fill and border on hover and press.
  business-login:
    type: button
    backgroundColor: '#fef1f1'
    textColor: '#cd0404'
    border: '#ee0000'
    rounded: 8px
    height: 48px
    padding: 0px 16px
    typography: 17px / 400
    hover: '#fed7d7'
    pressed: '#fed7d7'
    focus: 'self shadow: none -> rgb(37, 110, 244) 0px 0px 0px 2px; self outline: none -> rgb(238, 0, 0) solid 3px off -4px'
    use: 사업장로그인 — secondary button beside 개인로그인 on the translucent hero panel; pale red fill intensifies on hover and press.
  service-nav:
    type: button
    textColor: '#555555'
    rounded: 0px
    height: 62px
    padding: 4px 16px 0px
    typography: 19px / 700
    hover: 'self border: none | none | 4px solid rgba(0, 0, 0, 0) | none -> none | none | 4px solid rgb(238, 0, 0) | none; self-pseudo after: ::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://www.nhis.or.kr/_res/nhis/nhis/img/icon/head_gnb…#b76ec1f4/74;pos:50% 50% / contain / no-repeat;color:-;op:1;tf:none;bs:none;size:20pxx20px} -> ::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://www.nhis.or.kr/_res/nhis/nhis/img/icon/head_gnb…#5ad6df62/77;pos:50% 50% / contain / no-repeat;color:-;op:1;tf:none;bs:none;size:20pxx20px}'
    pressed: 'self border: none | none | 4px solid rgba(0, 0, 0, 0) | none -> none | none | 4px solid rgb(238, 0, 0) | none; self-pseudo after: ::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://www.nhis.or.kr/_res/nhis/nhis/img/icon/head_gnb…#b76ec1f4/74;pos:50% 50% / contain / no-repeat;color:-;op:1;tf:none;bs:none;size:20pxx20px} -> ::after{content:"";bg:rgba(0, 0, 0, 0);img:url("https://www.nhis.or.kr/_res/nhis/nhis/img/icon/head_gnb…#5ad6df62/77;pos:50% 50% / contain / no-repeat;color:-;op:1;tf:none;bs:none;size:20pxx20px}'
    focus: 'self shadow: none -> rgb(37, 110, 244) 0px 0px 0px 2px; self outline: none -> rgb(37, 110, 244) solid 3px off -4px'
    use: 민원서비스열기 — navigation button on the white header; transparent at rest, with a red bottom border and a changed ::after icon reference on hover and press.
  login-link:
    type: button
    textColor: '#1d1d1d'
    rounded: 0px
    height: 32px
    padding: 4px 12px
    typography: 17px / 700
    hover: 'self bg: rgba(0, 0, 0, 0) -> rgb(237, 241, 245); self radius: 0px -> 6px'
    pressed: 'self bg: rgba(0, 0, 0, 0) -> rgb(205, 215, 228); self radius: 0px -> 6px'
    focus: 'self shadow: none -> rgb(37, 110, 244) 0px 0px 0px 2px; self outline: none -> rgb(37, 110, 244) solid 3px off -4px'
    use: 로그인 — link on the white header, transparent at rest; hover and press paint rounded neutral backgrounds.
  refund-card:
    type: card
    backgroundColor: '#f8f8f8'
    textColor: '#1d1d1d'
    rounded: 12px
    width: 174px
    height: 178px
    padding: 32px 24px 104px
    typography: 19px / 700
    hover: 'self deco: none -> underline solid rgb(29, 29, 29)'
    pressed: 'self deco: none -> underline solid rgb(29, 29, 29)'
    focus: 'self shadow: none -> rgb(37, 110, 244) 0px 0px 0px 2px; self outline: none -> rgb(37, 110, 244) solid 3px off -4px'
    use: 환급금 조회/신청 — service card link on the white page; hover and press underline its label.
  search-trigger:
    type: button
    textColor: '#1d1d1d'
    rounded: 0px
    height: 32px
    padding: 4px 12px
    typography: 17px / 700
    hover: 'self bg: rgba(0, 0, 0, 0) -> rgb(237, 241, 245); self radius: 0px -> 6px'
    pressed: 'self bg: rgba(0, 0, 0, 0) -> rgb(205, 215, 228); self radius: 0px -> 6px'
    focus: 'self shadow: none -> rgb(37, 110, 244) 0px 0px 0px 2px; self outline: none -> rgb(37, 110, 244) solid 3px off -4px'
    use: 통합검색 — search-opening button on the white header, transparent at rest; no search field was displayed in the survey.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Pretendard GOV
---

# Design System Inspiration of National Health Insurance Service

## Overview

### Visual Theme & Atmosphere

National Health Insurance Service (국민건강보험공단) administers health insurance and long-term care insurance in Korea. Its official history records the service's launch on 1 July 2000, combining the National Medical Insurance Management Corporation and 139 workplace insurance societies. The current chair's greeting describes a direction toward prevention, lifelong personalised health support and connecting health insurance, long-term care and community care through a people-centred health and welfare platform. These are stated ambitions, not measured capabilities of this homepage. [History](https://www.nhis.or.kr/static/html/wbde/d/b/wbdedb01.html), [current greeting](https://www.nhis.or.kr/nhis/about/wbhafa01000m01.do).

The identity centres on a heart held by a red circle. The official CI page associates that mark with trust, care and happiness, and describes its single finger-drawn stroke as warm communication that brings the organisation closer to people. The photographed headquarters and lawn, generous white header, pale service cards and prominent red login buttons give the measured homepage a practical public-service expression. [CI/캐릭터](https://www.nhis.or.kr/nhis/about/wbhafa01900m01.do).

The measured homepage is the Korean surface at `www.nhis.or.kr/nhis/index.do`, reached from `/`, with HTML `lang="ko"`. It presents personal and workplace login, health-check eligibility, refunds and frequently used services. Its current vision page, dated 30 October 2026 and framed around 2027–2031 management goals, puts personalised lifelong health and sustainable health and long-term care insurance at the centre. [Vision](https://www.nhis.or.kr/nhis/about/wbhafa01500m01.do).

### Brand Narrative

The official CI's heart-and-circle explanation makes care and closeness explicit. The current greeting extends that care from paying for treatment toward prevention, healthy ageing and connected support. The homepage expresses those themes through visible health-check and refund entry points; the broader platform described in the greeting remains an organisational ambition.

### Principles

The official vision page lists 소통, 탁월, 청렴 and 공정: communication, excellence, integrity and fairness. The implementation guidance here is narrower: clear service labels, paired primary/secondary emphasis, consistent card geometry and explicit keyboard feedback. Those UI observations are not claimed as official design principles.

### Personas

No researched personas verified; the page explicitly distinguishes personal and workplace service entry.

## Colors

The page mixes an NHIS palette (`--nhis-*`) with shared government UI definitions (`--krds-*`). Treat the NHIS red as the product accent; the measured blue keyboard ring is a separate interaction colour. These are desktop web measurements, not a specification of the logo's print colour.

### Seen on the page or in measured states

| token | value | observed role |
|---|---|---|
| `foreground` | `#1d1d1d` | foreground — paragraph ink (14 paragraphs); header action and refund-card labels (`--nhis-grayscale-90`) |
| `nhis-white` | `#ffffff` | white canvas behind header controls; personal-login label (`--nhis-white`) |
| `nhis-grayscale-70` | `#555555` | service-nav label and secondary paragraph ink (12 paragraphs) (`--nhis-grayscale-70`) |
| `nhis-grayscale-20` | `#e4e4e4` | grayscale-20 border palette step; borders on 23 surveyed elements (`--nhis-grayscale-20`) |
| `nhis-grayscale-5` | `#f8f8f8` | refund-card background (`--nhis-grayscale-5`) |
| `nhis-primary` | `#ee0000` | personal-login fill and border; business-login border; service-nav hover bottom border (`--nhis-primary`) |
| `nhis-secondary-70` | `#323343` | secondary-70 paragraph ink (6 paragraphs) (`--nhis-secondary-70`) |
| `nhis-grayscale-40` | `#c6c6c6` | grayscale-40 border palette step; borders on 6 elements (`--nhis-grayscale-40`) |
| `nhis-black` | `#000000` | black palette step; surveyed text (8 elements) (`--nhis-black`) |
| `nhis-grayscale-10` | `#f0f0f0` | grayscale-10 surface/border palette step; background on 3 elements (`--nhis-grayscale-10`) |
| `nhis-grayscale-30` | `#d8d8d8` | grayscale-30 border palette step; borders on 4 elements (`--nhis-grayscale-30`) |
| `nhis-primary-60` | `#cd0404` | personal-login hover/pressed fill and border; business-login label (`--nhis-primary-60`) |
| `nhis-grayscale-50` | `#8e8e8e` | grayscale-50 surface palette step; background on 3 elements (`--nhis-grayscale-50`) |
| `nhis-secondary-5` | `#f4f5fa` | secondary-5 surface; survey row 팝업 닫기 background (`--nhis-secondary-5`) |
| `nhis-primary-5` | `#fef1f1` | business-login rest background (`--nhis-primary-5`) |
| `nhis-danger` | `#eb003b` | NHIS danger palette colour; surveyed text (2 elements), exact message role unresolved (`--nhis-danger`) |
| `nhis-secondary-10` | `#e3e8f4` | secondary-10 surface palette step; background on 1 element (`--nhis-secondary-10`) |
| `focus-ring` | `#256ef4` | keyboard focus shadow on all six controls; outline on four header/card controls (`measured state`) |
| `header-pressed` | `#cdd7e4` | header login-link and search-trigger pressed fill (`measured state`) |
| `header-hover` | `#edf1f5` | header login-link and search-trigger hover fill (`measured state`) |
| `nhis-primary-10` | `#fed7d7` | business-login hover and pressed fill (`--nhis-primary-10`) |

### Declared only

These colours are listed for reference and are not exported as tokens: nothing in this capture was painted with them.

The following NHIS-owned colours are declared in the site's CSS and computed on the root; they were not seen painted on the measured page or its measured control states. Their names retain the CSS property names, including the site's spelling `infomation`. They describe the available palette, not observed usage.

| Name | value |
|---|---|
| `--nhis-grayscale-60` / `nhis-grayscale-60` | `#717171` |
| `--nhis-grayscale-80` / `nhis-grayscale-80` | `#2d2d2d` |
| `--nhis-infomation` / `nhis-infomation` | `#2768ff` |
| `--nhis-point` / `nhis-point` | `#246beb` |
| `--nhis-secondary-30` / `nhis-secondary-30` | `#99b0cb` |
| `--nhis-success` / `nhis-success` | `#008a1e` |
| `--nhis-warning` / `nhis-warning` | `#ffb724` |
| `--nhis-green` / `nhis-green` | `#007552` |
| `--nhis-green-5` / `nhis-green-5` | `#e7f9f0` |
| `--nhis-pink` / `nhis-pink` | `#c00094` |
| `--nhis-pink-5` / `nhis-pink-5` | `#ffebfc` |
| `--nhis-point-10` / `nhis-point-10` | `#d4e2fc` |
| `--nhis-point-20` / `nhis-point-20` | `#a9c4f9` |
| `--nhis-point-30` / `nhis-point-30` | `#7d9ff6` |
| `--nhis-point-40` / `nhis-point-40` | `#5275f3` |
| `--nhis-point-5` / `nhis-point-5` | `#eaf0ff` |
| `--nhis-point-60` / `nhis-point-60` | `#1f42c0` |
| `--nhis-point-70` / `nhis-point-70` | `#173290` |
| `--nhis-point-80` / `nhis-point-80` | `#102160` |
| `--nhis-point-90` / `nhis-point-90` | `#081130` |
| `--nhis-primary-20` / `nhis-primary-20` | `#f89999` |
| `--nhis-primary-30` / `nhis-primary-30` | `#f56666` |
| `--nhis-primary-40` / `nhis-primary-40` | `#f23b3b` |
| `--nhis-primary-70` / `nhis-primary-70` | `#8f0000` |
| `--nhis-primary-80` / `nhis-primary-80` | `#5f0000` |
| `--nhis-primary-90` / `nhis-primary-90` | `#300000` |
| `--nhis-secondary` / `nhis-secondary` | `#545772` |
| `--nhis-secondary-20` / `nhis-secondary-20` | `#bfc2d6` |
| `--nhis-secondary-40` / `nhis-secondary-40` | `#6f77a0` |
| `--nhis-secondary-60` / `nhis-secondary-60` | `#44465c` |
| `--nhis-secondary-80` / `nhis-secondary-80` | `#20212c` |
| `--nhis-secondary-90` / `nhis-secondary-90` | `#111217` |
| `--nhis-violet` / `nhis-violet` | `#2149a6` |
| `--nhis-violet-5` / `nhis-violet-5` | `#eeeaff` |
| `--nhis-yellow` / `nhis-yellow` | `#af5500` |
| `--nhis-yellow-5` / `nhis-yellow-5` | `#fff5e1` |

Swiper's blue and declared KRDS-only palettes are excluded from brand colour tokens. The two neutral header interaction colours remain because the live NHIS controls actually painted them.

## Typography

- **Official product-use statement:** none found in the opened company or CI writing.
- **Live-loaded:** `Pretendard GOV` 400 normal and 700 normal, recorded in `document.fonts`; these are the only text faces in the family token. `swiper-icons` 400 normal also loaded, but is an icon face and is excluded from typography tokens.
- **Official distributed assets:** the first-party [font stylesheet](https://www.nhis.or.kr/_res/nhis/_share/css/fonts-idc.min.css) declares regular and bold subset WOFF files served from `https://idcwww.nhis.or.kr/nhic/css/font/`, named `PretendardGOV-Regular.subset.woff` and `PretendardGOV-Bold.subset.woff`. No font file was downloaded and no redistribution licence was verified.
- **Declared only:** `Pretendard GOV Variable` heads the body, h1 and button CSS stacks, but is absent from the loaded-face census. The stack also names platform, Latin, Hangul and emoji fallbacks; none is promoted to the product family token.
- **Unresolved:** no variable-font loading or font licence was established. Substitute: none chosen. No specimen is assigned to the unloaded variable face.

Measured login buttons use 17px/400 with 25.5px line-height. The main navigation uses 19px/700 with 28.5px line-height; the refund-card label is also 19px/700, with 25px line-height. Header login and search use 17px/700 with 17px line-height. Quick-menu labels such as 제도안내 use 15px/700 and 20px line-height; utility controls such as 지원열기 use 15px/400 and 22.5px line-height. Heading and running-text size scales were not measured by the census.

## Layout

The 1440×1000 capture has a government-site notice above the white header, a utility row, a logo/action row and six main navigation groups. The full-width photographic hero pairs left-aligned copy with a translucent login panel on the right. Frequently used services follow as a row of light rounded tiles. Lower sections organise benefit information, notices and organisation links; a vertical quick menu and chatbot entry sit at the right edge. This describes the captured desktop arrangement, not a responsive rule.

### Responsive Behavior

Not measured: only the desktop 1440×1000 surface was captured.

## Elevation & Depth

All six controls have `shadow: none` at rest in the compiled measurements. Focus adds a blue 2px spread shadow; it is an interaction cue rather than a resting elevation scale. The hero's translucent login panel is visible in the screenshot; no panel opacity or blur token is inferred from its pixels.

## Motion & Easing

The login pair's raw computed transition is `all 0.4s ease-in-out 0s`. The navigation, header login link, refund card and search trigger record `all 0s ease 0s` at rest. Header login/search hover and pressed sampling recorded a longest transition of 400 milliseconds in the probe's settle metadata, even though their rest transition is zero; no additional easing is inferred. No carousel timing or reduced-motion behaviour was measured.

## Components

- **개인로그인:** 169×48px, 8px radius, padding 0px 16px, 17px/400. Fill and 1px border are `#ee0000`; label is `#ffffff`. Hover and pressed change fill and border to `#cd0404`.
- **사업장로그인:** the same 169×48px geometry and type; `#fef1f1` fill, `#cd0404` label, 1px `#ee0000` border. Hover and pressed change fill to `#fed7d7`.
- **민원서비스열기:** a 138.1×62px navigation button, square corners, padding 4px 16px 0px, 19px/700, `#555555` label on a transparent white-header ground. Hover and pressed paint the existing 4px bottom border red and change the `::after` icon reference.
- **로그인:** a 100.1×32px header link, padding 4px 12px, 17px/700, `#1d1d1d` label, transparent and square at rest. Hover paints `#edf1f5` and rounds to 6px; pressed paints `#cdd7e4` with the same 6px radius.
- **환급금 조회/신청:** a 174×178px card link, 12px radius, padding 32px 24px 104px, 19px/700, `#f8f8f8` fill and `#1d1d1d` text. Hover and pressed add a solid underline without a measured fill change.
- **통합검색:** a 114.8×32px header button, padding 4px 12px, 17px/700, transparent square rest surface and `#1d1d1d` label. Hover and pressed use the same fill/radius changes as the header login link. This is a search trigger, not a text input.

The survey also measures 6px corners on utility text actions and a fixed 35px radius on the personal/workplace audience tabs. Carousel controls use 100% corners and social links 50%; these percentages remain prose. The banner-close control has asymmetric `0px 0px 8px 8px` corners.

### States

Every listed component has a measured authored change. Hover and pressed changes are specified under Components. All six controls acquire `rgb(37, 110, 244) 0px 0px 0px 2px` shadow (`#256ef4`) under real Tab focus. The primary login adds a `rgba(255, 255, 255, 0.9) solid 2px` outline at -4px offset; the secondary adds a `#ee0000 solid 3px` outline at -4px. The navigation button, header login link, refund card and search trigger add `#256ef4 solid 3px` outlines at -4px. These are authored solid outlines, not the browser's `auto` ring. Disabled, error and validation states were not measured.

## Do's and Don'ts

- Use the paired red primary and pale-red secondary login treatments with their measured darker/paler interaction states.
- Keep the service tiles roomy and retain the underline feedback on card links.
- Preserve the authored keyboard ring and the different inner outlines on the two login buttons.
- Keep declared-only palette steps separate from colours observed in use.
- Do not turn the Swiper theme blue into the NHIS accent or present an unloaded font as a live face.

## Voice & Tone

The homepage asks direct service questions, including “올해 건강검진 대상자인가요?” and “못 받으신 환급금이 있나요?”, alongside task labels such as 환급금 조회/신청. For this reference, use short, specific service language and questions about the visitor's need. This is an interpretation of the captured copy, not a published voice policy.

## Agent Prompt Guide

“Build an NHIS-style service entry using the live-loaded Pretendard GOV face: a 48px-high red login button with 8px corners and a pale-red companion; use the values and states under Components. Place light 12px-radius service cards below a white navigation header. A refund card link underlines on hover and pressed. Use the focus details under States.” This is a construction guide derived from the measured controls, not an official NHIS instruction.

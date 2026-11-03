---
name: Government24
colors:
  primary: '#256ef4'
  primary-60: '#0b50d0'
  primary-70: '#083891'
  foreground: '#1e2124'
  foreground-muted: '#464c53'
  canvas: '#ffffff'
  neutral-5: '#f4f5f6'
  secondary-5: '#eef2f7'
  info-5: '#e7f4fe'
  border: '#cdd1d5'
  primary-10: '#d8e5fd'
  search-gradient-start: '#0fb87d'
typography:
  body:
    fontSize: 17px
    fontWeight: 400
    use: Product body CSS declares 1.7rem / 1.5; the login link measures 17px / 400 with 25.5px line height.
  small:
    fontSize: 15px
    fontWeight: 400
    use: Header utility link, service disclosure and the benefit card's visible p.tit label; 22.5px line height on the utility link.
  navigation:
    fontSize: 19px
    fontWeight: 700
    use: Main header navigation buttons in the desktop survey; 28.5px line height.
rounded:
  none: 0px
  utility: 4px
  action: 6px
  service: 8px
  card: 12px
spacing:
  utility-inline: 4
  action-inset: 16
  search-leading: 70
components:
  login-cta:
    type: button
    backgroundColor: '#256ef4'
    textColor: '#ffffff'
    border: '1px solid #256ef4'
    rounded: 6px
    height: 48px
    padding: 16px
    typography: 17px / 400
    hover: 'bg #0b50d0'
    pressed: 'bg #083891; outline 2px solid rgba(255, 255, 255, 0.9), offset -4px'
    focus: outline 2px solid rgba(255, 255, 255, 0.9), offset -4px
    use: 로그인 — primary link in the right-side MyGOV panel, 318px wide. Its blue border and white label remain unchanged on hover and press. No navigation was completed.
  service-expand:
    type: button
    textColor: '#1e2124'
    rounded: 4px
    height: 27.5px
    padding: 3px 4px 2px
    typography: 15px / 400
    hover: 'bg #eef2f7'
    pressed: 'bg #eef2f7; outline 2px solid #256ef4, offset 0px'
    focus: 'outline 2px solid #256ef4, offset 0px'
    use: 펼쳐보기 — secondary disclosure button, accessible text 자주 찾는 서비스펼쳐보기. Transparent at rest over the frequent-services panel (#e7f4fe); width 77.9px.
  senior-nav:
    type: button
    textColor: '#1e2124'
    rounded: 4px
    height: 22.5px
    padding: 0px 4px
    typography: 15px / 400
    hover: 'bg #eef2f7'
    pressed: 'bg #eef2f7; outline 2px solid #256ef4, offset 0px'
    focus: 'outline 2px solid #256ef4, offset 1px'
    use: 시니어 — header navigation link to /portal/senior, transparent on white; width 64.9px.
  search-input:
    type: input
    textColor: '#1e2124'
    rounded: 0px
    height: 44px
    padding: 0px 0px 0px 70px
    typography: 19px / 400
    pressed: 'parent .input-fn outline 2px dashed #256ef4, offset -4px'
    focus: 'parent .input-fn outline 2px dashed #256ef4, offset -4px'
    use: Homepage search input with placeholder 안녕하세요. 무엇을 알고 싶으세요?, 500px wide and transparent over a white search container. The measured focus indicator belongs to the parent .input-fn, not the input itself. Hover was measured with no computed change in the stated probe scope.
  benefit-card:
    type: card
    backgroundColor: '#f4f5f6'
    textColor: '#1e2124'
    rounded: 12px
    height: 80.8px
    padding: 0px 16px
    typography: 15px / 400
    pressed: 'outline 2px solid #256ef4, offset 0px'
    focus: 'outline 2px solid #256ef4, offset 1px'
    use: '급한 생활비, 대출 연체, 신용 하락, 당장의 부담을 덜 수 있는 정부 지원 모음 — benefit card link, 216px wide. Font describes its visible p.tit; the anchor itself computes to 17px / 400. Anchor color changes on hover and press while the visible p.tit remains #1e2124, so no label-color hover token is declared.'
  land-service:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1e2124'
    rounded: 8px
    height: 48px
    padding: 0px 16px
    typography: 15px / 700
    focus: 'outline 2px solid #256ef4, offset -2px'
    use: 토지(임야)대장 — frequent-service action link, 176.5px wide. Keyboard focus was measured; hover and press were unmeasured because no point of the carousel item was inside the viewport during the pointer pass.
fonts:
  roles:
    sans: Pretendard GOV
---

# Design System Inspiration of Government24

## Overview

### Visual Theme & Atmosphere

Government24 (정부24) is the Republic of Korea's government service portal. Its [official overview](https://plus.gov.kr/portal/custcntr/gov24intrcn/gov24otln/) brings civil services, benefit guidance and policy information together, with participating agencies' services available to apply for, look up and issue. The same page describes 혜택알리미 as personalized guidance that uses administrative information to identify relevant government benefits.

Its identity combines the Taegeuk flag's blue, red and white. The overview associates deep blue with a capable, trusted government, vivid red with passionate, creative culture, and white with integrity. That institutional identity sits above a lighter interface: white panels, pale blue service areas, dark Korean text and a bright blue primary action. In the captured homepage, a small illustrated character accompanies the conversational search field; frequently used services, life-and-family guidance and benefit cards make the page task oriented.

The [Ministry of the Interior and Safety's July 2025 redesign material](https://www.mois.go.kr/frt/bbs/type002/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000205&nttId=118808) explicitly describes applying the common-government UI/UX design system, surfacing frequently used services, and providing user-centered menus. The current page continues that service-first structure, with an `AI국민비서` header control and the search greeting `안녕하세요. 무엇을 알고 싶으세요?` visible in the capture.

The measured homepage is the Korean edition (`plus.gov.kr/`), with HTML `lang="ko"` and no redirect.

### Brand Narrative

The official overview presents one portal for services spread across government institutions. The 2025 redesign material connects that purpose to familiar service entry points and a common UI/UX system. The captured interface expresses it through grouped service links, personalized-benefit collections and an approachable search treatment beneath the formal government symbol. The official blue-red-white symbol explanation and the measured interface palette supply different parts of that identity.

### Principles

Implementation takeaways supported by the official redesign material and the captured page: put frequent tasks within direct reach; organize information around services people need; use consistent shared-government controls; distinguish focus clearly. These are reference takeaways, not a claimed Government24-authored principles list.

### Personas

No user-research personas were verified.

## Colors

The live census contains 237 computed root custom properties and 251 declared property names. Their union is 254 names. Product styles use `--iw-*`, `--sc-*` and related local component namespaces; the two `--swiper-*` values are library defaults and are excluded from the reference palette. Official redesign material confirms adoption of a shared government UI/UX system; the captured variables also include product-specific homepage styles.

| Role | Value | Evidence and use |
|---|---|---|
| Primary action and focus | `#256ef4` | `--iw-primary`, `--iw-primary-50`; login CTA fill and measured focus outlines |
| Primary hover | `#0b50d0` | `--iw-primary-60`; login CTA hover fill |
| Primary pressed | `#083891` | `--iw-primary-70`; login CTA pressed fill |
| Foreground | `#1e2124` | `--iw-gray-90`; paragraph ink on 45 census entries and the visible benefit-card label |
| Muted foreground | `#464c53` | `--iw-gray-70`; paragraph ink on 16 entries |
| Canvas and panels | `#ffffff` | White background on 37 census entries; login panel and frequent-service action |
| Neutral card surface | `#f4f5f6` | `--iw-gray-5`; measured benefit-card fill |
| Secondary surface / utility hover | `#eef2f7` | `--iw-secondary-5`; measured utility-link and disclosure hover fill |
| Frequent-services panel | `#e7f4fe` | `--sc-favorite-bg`, `--iw-info-5`; disclosure's measured background behind the transparent button |
| Neutral divider | `#cdd1d5` | `--iw-gray-20`; census border leader and header divider pseudo-element |
| Pale primary border | `#d8e5fd` | `--iw-primary-10`; measured MyGOV panel border |
| Search gradient start | `#0fb87d` | Search ancestor's computed gradient begins at RGB 15, 184, 125; product `main.css` supplies the complete gradient rule |

The search frame's product CSS specifies `linear-gradient(102deg, #0fb87d 10.14%, #256ef4 79.73%)` on `.sch-main .sc-main-search-wrap .main-search-ai .search-area`. Its computed ancestor background is also recorded in the state evidence. Use this on the search frame, whose interior is white.

Keep the official symbol specification separate from interface roles. The overview gives GOK Blue RGB 0 / 55 / 100 (`#003764`), GOK Red RGB 228 / 3 / 46 (`#e4032e`), GOK Gray RGB 87 / 87 / 87 (`#575757`) and white RGB 255 / 255 / 255. Those are documented symbol colors; the measured login action uses `#256ef4`.

## Typography

**Official product use:** Government24's own `common.css` names `Pretendard GOV` first in the body stack. The ministry's redesign material confirms common-government UI/UX adoption; the [official KRDS typography page](https://www.krds.go.kr/html/site/style/style_03.html) explicitly specifies Pretendard GOV for Korean and English in its standard style. This links documented shared-system guidance with an independently observed product implementation.

**Live-loaded:** the census's loaded faces are `Pretendard GOV 400 normal`, `Pretendard GOV 700 normal` and `swiper-icons 400 normal`. Only Pretendard GOV is retained as the text family. `swiper-icons` is the carousel library's icon font and has no text specimen here. Body, H1 and button computed family declarations all begin with Pretendard GOV; this does not identify the lettering in the graphic logo.

**Official distributed assets:** the product's `import.css` imports `fonts.css`. That stylesheet declares Regular 400, Medium 500 and Bold 700, with `font-display: swap` and WOFF2/WOFF source pairs on `static.gov.kr`, using filenames `PretendardGOV-Regular.subset`, `PretendardGOV-Medium.subset` and `PretendardGOV-Bold.subset`. The CSS header identifies SIL Open Font License 1.1. Font binaries were not fetched; the capture does not establish which of the two formats supplied a loaded face.

**Declared-only:** Medium 500 is distributed in the stylesheet but absent from the loaded-face census. The stack also names `Malgun Gothic`, `맑은 고딕`, `Dotum`, `돋움` and generic `sans-serif`; none is reported as a loaded text face. They receive no specimen or family token.

**Unresolved:** no separate editorial statement naming Government24's product font, font version, per-glyph rendering trace or wordmark typeface was verified. Substitute: none chosen.

The product CSS declares body size `1.7rem`, line height `1.5`, and root size `62.5%`. Keep the measured control scale concrete:

| Use | Size / weight | Line height |
|---|---|---|
| Login CTA | 17px / 400 | 25.5px |
| Utility navigation and disclosure | 15px / 400 | 22.5px |
| Search input | 19px / 400 | 28.5px |
| Main navigation buttons, survey | 19px / 700 | 28.5px |
| Frequent-service visible label | 15px / 700 | 22.5px on its anchor |
| Benefit-card visible `p.tit` | 15px / 400 | Product CSS declares `1.5` |

The benefit-card anchor itself is 17px / 400; its explicitly styled child supplies the visible 15px label. Title-size declarations range from `--iw-fz-xxsm: 1.5rem` to `--iw-fz-xlg: 4rem`; these are declared scale endpoints, not measurements of a visible large homepage headline.

## Layout

At 1440 × 1000, the screenshot separates the compact utility row from the larger main navigation. Search and frequently used services occupy the upper left content area; the MyGOV login panel occupies the right rail. Life-and-family guidance, one-stop services, benefit collections and notices provide smaller task groups below.

The live root declarations expose a spacing series `--iw-gap-1` through `--iw-gap-20`, from `0.4rem` through `8rem` in `0.4rem` increments. Concrete measured insets include 4px horizontally on the utility link and 16px horizontally on service actions and benefit cards. The search input reserves 70px on the left for its illustrated search treatment.

### Responsive Behavior

Only desktop was rendered. Product `variable.css` declares a `max-width:1024px` rule changing `--iw-fz-xlg` from `4rem` to `2.8rem`, `--iw-fz-lg` from `3.2rem` to `2.4rem`, and `--iw-fz-md` from `2.4rem` to `2.2rem`; mobile layout and interactions were not measured.

## Elevation & Depth

The MyGOV panel ancestor measures a 1px solid `#d8e5fd` border and `rgba(0, 0, 0, 0.04) 0px 2px 8px 0px` shadow. The search frame ancestor measures `rgba(37, 110, 244, 0.1) 0px 6px 8px 0px`. Keep those shallow panel shadows distinct from the six measured controls, which have no individual rest shadow.

## Motion & Easing

Raw computed transitions are `background-color 0.4s ease-in-out 0s` for the login link, `all 0.4s ease-in-out 0s` for the service disclosure and senior link, `all 0.2s ease 0s` for the benefit card, and `all 0s ease 0s` for the input and land-service link. These strings describe the measured controls only. No carousel timing or reduced-motion behavior is inferred.

---

Sources: [live homepage](https://plus.gov.kr/), [official overview and symbol specification](https://plus.gov.kr/portal/custcntr/gov24intrcn/gov24otln/), [July 2025 redesign material](https://www.mois.go.kr/frt/bbs/type002/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000205&nttId=118808), [KRDS typography](https://www.krds.go.kr/html/site/style/style_03.html), [product font declarations](https://plus.gov.kr/static/css/prod/fonts.css), [product variable definitions](https://plus.gov.kr/static/css/prod/variable.css?time=1793208644370), [product common styles](https://plus.gov.kr/static/css/prod/common.css?time=1793208644370), and [product homepage styles](https://plus.gov.kr/static/css/prod/main.css?time=1793208644370). All were opened on 2026-11-03 KST; browser evidence timestamps use UTC on 2026-11-02.

## Components

Six controls were identified at desktop size. The survey popup could not be closed at the probe's close step; the final pointer pass used `hideOverlays: true`. Keyboard focus was measured by real Tab navigation, and every recorded focus difference disappeared after blur. Full rest and state evidence is in the verification notes.

| Control | Geometry and visible type | Rest appearance |
|---|---|---|
| `login-cta` — 로그인, a primary link | 318 × 48px; radius 6px; padding 16px; 17px / 400 | `#256ef4` fill, `#ffffff` label, 1px solid `#256ef4` border |
| `service-expand` — 펼쳐보기, a disclosure button | 77.9 × 27.5px; radius 4px; padding 3px 4px 2px; 15px / 400 | Transparent over `#e7f4fe`, foreground `#1e2124`, no border |
| `senior-nav` — 시니어, a header link | 64.9 × 22.5px; radius 4px; padding 0px 4px; 15px / 400 | Transparent over white, foreground `#1e2124`, no border |
| `search-input` — homepage search | 500 × 44px; input radius 0px; padding 0px 0px 0px 70px; 19px / 400 | Transparent over the white search container; foreground `#1e2124`, no input border |
| `benefit-card` — 급한 생활비… link | 216 × 80.8px; radius 12px; padding 0px 16px; visible child 15px / 400 | `#f4f5f6` fill, visible child `#1e2124`, no border |
| `land-service` — 토지(임야)대장 action link | 176.5 × 48px; radius 8px; padding 0px 16px; visible label 15px / 700 | White fill, `#1e2124` label, no border |

All six controls have `box-shadow: none` at rest. The search input's square geometry belongs to the input inside the enclosing rounded frame; it is not the frame's radius. The product CSS specifies `3.2rem` for that frame.

### States

- **Login link:** hover changes only fill to `#0b50d0`; press changes it to `#083891` and adds `rgba(255, 255, 255, 0.9) solid 2px` outline at offset −4px. Keyboard focus adds that outline over the rest fill. Border and label colors stay at rest values.
- **Service disclosure:** hover fills `#eef2f7`; press keeps that fill and adds a 2px solid `#256ef4` outline at offset 0px. Keyboard focus adds the same outline while the control remains transparent.
- **Senior navigation link:** hover fills `#eef2f7`; press adds a 2px solid `#256ef4` outline at offset 0px. Keyboard focus uses offset 1px and no hover fill.
- **Search input:** hover produces no computed change across the input, its pseudo-elements and three ancestor levels, including their pseudo-elements and the probe's style/image/SVG attribute scope. Press and keyboard focus add a 2px dashed `#256ef4` outline at offset −4px to the immediate `.input-fn` parent. The input itself gains no outline.
- **Benefit card:** the anchor's own computed color changes to `#0b50d0` on hover and `#083891` on press; its visible `p.tit` stays `#1e2124` in both states. Press adds a 2px solid `#256ef4` outline at offset 0px; keyboard focus uses offset 1px. The machine component therefore declares no label-color hover state.
- **Land-service action:** keyboard focus adds a 2px solid `#256ef4` outline at offset −2px. Hover and press are unmeasured because the carousel item lay outside the viewport in the pointer pass.

All focus readings are authored solid or dashed outlines; none uses the browser's `auto` ring. Disabled and error states were not measured.

## Do's and Don'ts

- Use the bright primary blue for the login action and measured focus indicators; preserve the separate official symbol colors.
- Build smaller service groups with pale surfaces, 8px service-action corners and 12px benefit-card corners.
- Use the measured child label font where it differs from the interactive wrapper.
- Preserve the search parent's dashed focus outline and the CTA's inset translucent-white outline.
- Keep library icon colors out of the Government24 text palette.
- Leave unmeasured hover and press behavior unspecified for the carousel service action.

## Voice & Tone

The observed Korean interface names tasks directly: `민원서비스`, `자주 찾는 서비스`, `로그인`, `펼쳐보기`. Search greets the visitor with `안녕하세요. 무엇을 알고 싶으세요?`; explanatory navigation copy uses polite `…할 수 있어요` phrasing. This is a description of captured interface language, not an independently published voice manual.

## Agent Prompt Guide

“Build a Government24-style service homepage with white panels, `#1e2124` text, pale `#e7f4fe` and `#eef2f7` service regions, and Pretendard GOV using the observed 400 and 700 weights. Put a 48px-high blue login link in a right-side panel. Its fill changes from `#256ef4` to `#0b50d0` on hover and `#083891` while pressed. Give keyboard focus a 2px solid 90%-opaque white outline at offset −4px.”

“Use a 500 × 44px transparent search input inside a white, rounded gradient frame. Give the input parent a 2px dashed `#256ef4` focus outline at offset −4px. Use the product's measured 19px / 400 input type and 70px left padding.”

These prompts combine measured reference details; the proposed page composition is implementation guidance.

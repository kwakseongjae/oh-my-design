---
name: Kakao T
colors:
  canvas: '#ffffff'
  foreground: '#666666'
  heading: '#000000'
  surface: '#f5f6f7'
typography:
  label:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.875
    use: Computed on the corporate homepage story, newsroom and careers action links; 30px line height.
  navigation:
    fontSize: 14px
    fontWeight: 400
    use: Computed on header and footer links; their line heights are 30px and 20px respectively.
  news-category:
    fontSize: 12px
    fontWeight: 800
    use: Computed visible 뉴스 label inside the homepage news card.
rounded:
  flat: 0px
spacing:
  action-top: 30
  navigation-inline: 32
components:
  story-cta:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 60px
    padding: 30px 0px 0px
    typography: 16px / 700
    hover: 'fg #666666; width 129.8px to 139.8px'
    pressed: 'fg #666666; width 139.8px, same as hover'
    use: Link to /story, visible label 자세히 보기. Transparent on the white page canvas. Measured on the corporate website, not the native app.
  news-more:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 30px
    padding: 0px
    typography: 16px / 700
    hover: 'fg #666666; width 101.2px to 111.2px'
    pressed: 'fg #666666; width 111.2px, same as hover'
    use: Link to /newsroom, accessible text 뉴스룸 더 보기 and visible label 더 보기. Transparent on the white page canvas.
  careers-cta:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 60px
    padding: 30px 0px 0px
    typography: 16px / 700
    hover: fg rgba(255,255,255,0.6); width 129.8px to 139.8px; ::after opacity 1 to 0.6
    pressed: fg rgba(255,255,255,0.6); width 139.8px; ::after opacity 0.6, same as hover
    use: External careers link, visible label 자세히 보기. Transparent over recruitment video imagery.
fonts:
  roles:
    sans: KakaoBig
---

# Design System Inspiration of Kakao T (카카오 T)

## Overview

### Visual Theme & Atmosphere

Kakao T brings taxi, designated-driver, parking, bike, navigation, flights and quick-delivery services into a mobility app from Kakao Mobility. The name expanded the T of Taxi into Transportation in the company's [2017 rebranding announcement](https://www.kakaocorp.com/page/detail/8412); its [launch announcement](https://www.kakaocorp.com/page/detail/8414) describes bringing taxi, designated-driver and navigation functions together, while introducing parking as a new service. The current [service page](https://www.kakaomobility.com/service-kakaot) presents destination search, service tabs, favourites and recommendations as ways to find the appropriate service.

The product mark supplies a compact yellow-and-navy identity: the [Kakao T icon linked from that service page](https://t1.kakaocdn.net/kakaomobility/company_website/contents/v2/10-icon-t.svg) draws yellow paths in `#ffe100` over a `#282d4b` rectangle. Those are exact fills in that asset. On the corporate homepage, the expression is photographic and editorial: a full-width operations scene, white text over imagery, white reading areas with black headings, grey paragraphs, simple arrow links and a black footer. The live controls use KakaoBig and square corners.

The current evolution is toward Physical AI. The homepage leads with “Physical AI for Urban Life”; the [company story](https://www.kakaomobility.com/story) connects its mobility data and operational experience to AI orchestration, and records a Physical AI division in January 2026. This gives the reference two useful scales: the recognisable app mark and a corporate presentation of the infrastructure behind mobility.

The measured surface is the Korean-language corporate homepage (`kakaomobility.com/`, HTML `lang="ko"`); its measurements below describe that website. Native trip screens were not measured.

#### Primary tasks

- In the app, find mobility services through destination search and service tabs, as described on the official service page.
- Use automatic payment after registering payment-method information, as defined in the [service terms](https://policy.kakaomobility.com/viewer/?pageCode=TERMS).
- Share taxi-trip information with family or friends through the safety-message feature described in the [2025 anniversary announcement](https://www.kakaomobility.com/newsroom/detail/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0-%EC%B9%B4%EC%B9%B4%EC%98%A4-T-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%B6%9C%EC%8B%9C-10%EC%A3%BC%EB%85%84-%EA%B8%B0%EB%85%90-%EC%BA%A0%ED%8E%98%EC%9D%B8-%EC%A7%84%ED%96%89-263).
- On the measured homepage, explore the company story, read newsroom articles, find services and follow the careers link.

### Brand Narrative

The [company history](https://www.kakaomobility.com/story) dates taxi service to March 2015, the company's launch to August 2017 and the integrated Kakao T app to October 2017. The [2025 tenth-anniversary campaign](https://www.kakaomobility.com/newsroom/detail/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0-%EC%B9%B4%EC%B9%B4%EC%98%A4-T-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%B6%9C%EC%8B%9C-10%EC%A3%BC%EB%85%84-%EA%B8%B0%EB%85%90-%EC%BA%A0%ED%8E%98%EC%9D%B8-%EC%A7%84%ED%96%89-263) traces the service back to the 2015 taxi launch; the integrated Kakao T app name dates to 2017. The rebrand broadened a taxi name into a name for transportation; the current service guide broadens discovery through destination search, tabs and personalisation. The homepage now presents the company through Physical AI and real-world operations. A builder can express that progression through the compact app mark and the spacious, image-led corporate layout without assuming the website's controls describe a native ride screen.

### Principles

The company story explicitly centres connections across people, vehicles, services and spaces, and a safe, trustworthy environment for Physical AI. The UI lessons here are observed: clear typography, photographic context and simple arrow actions. No published native-app design-principle set was established.

### Personas

No first-party persona research was established; the prior named fictional riders are not retained as company facts.

## Colors

The live census found no accessible CSS custom properties. These are observed values with local roles, rather than a published token naming system.

| Role | Value | Evidence and use |
|---|---|---|
| Heading / action ink | `#000000` | Story and newsroom action links at rest; news-card title child. |
| Foreground | `#666666` | Most common opaque paragraph ink: 10 `<p>` elements; also story/newsroom link hover and pressed ink. |
| Canvas / inverse ink | `#ffffff` | White reading-canvas pixels sampled at three points in the survey viewport; white header surface declared in the homepage CSS; measured careers-link ink over imagery. |
| Surface | `#f5f6f7` | Three rendered backgrounds; the news-card's visible category label is one. |

The careers action changes white text to `rgba(255, 255, 255, 0.6)` on hover and pressed. Footer service links use that same alpha white at rest on black. Preserve the alpha rather than substituting a solid grey.

The app icon's `#ffe100` yellow and `#282d4b` navy are **asset evidence**, separate from the measured web-control palette. The catalog's primary colour uses the icon's yellow; no yellow native call-button fill is established here.

## Typography

### Evidence classes

| Class | Verified result |
|---|---|
| Official product use | No opened source identifies the native Kakao T app's UI face. |
| Live-loaded website face | `KakaoBig`, normal, weights 400, 700 and 800, in `document.fonts`; all six measured controls report KakaoBig. |
| Official distributed assets | The first-party [linked font stylesheet](https://t1.kakaocdn.net/kakaomobility/fonts/kakao.css) defines KakaoBig 400/700/800, Kakao 400/700 and KakaoSmall 300/400/700. It offers EOT, WOFF2, WOFF and TTF sources for KakaoBig and KakaoSmall; Kakao also has SVG sources. No font binary was fetched separately. |
| Declared-only | Kakao and KakaoSmall are defined but absent from the loaded-face census. The computed body, h1 and button stacks also name Noto Sans KR and several platform fallbacks; those names are declarations, not proof of loaded faces. They receive no specimen or family token. |
| Unresolved | Native app typography, the prior Pretendard/SF Mono assignments, Sandoll authorship and font licensing are not established by the opened sources. |

KakaoBig is served through the linked Kakao CDN stylesheet. The capture does not record which offered binary format the browser requested. Only KakaoBig is in `tokens.typography.family`. Substitute: none chosen.

### Scale

Measured action links are **16px/700, line-height 30px**. Header navigation is **14px/400, line-height 30px**; footer service links are **14px/400, line-height 20px**. The news-card category label is **12px/800**.

For the larger hierarchy, the homepage's authored CSS declares the hero heading at **30px/800/46px** (`.css-14t2sqv`), the newsroom heading at **40px/800/56px** (`.css-2qba1e`), news titles at **22px/800/34px** (`.css-1t6pxqt`) and news descriptions at **16px/400/30px** (`.css-pxe52b`). These are CSS declarations; the survey did not capture their computed size/weight pairs. The loaded weights support this hierarchy without introducing an unverified family.

## Layout

Build the corporate presentation as large imagery followed by spacious reading sections. The captured desktop page is 4738px tall at a 1440×1000 viewport. Its newsroom rows measure 1120px wide; `.css-toey1m` declares the same maximum width, 80px vertical padding and 50px between adjacent list items. This is a measured container and specific declared spacing, not evidence of a universal base grid.

Action-link top padding is 30px; navigation links use 32px inline padding. The measured controls are square. The visible news-category label has a separately declared 4px radius and 4px 8px padding (`.css-61u0sk`); it does not establish a general rounded-control scale.

### Responsive Behavior

The homepage CSS has a **1079px / 1080px** split. At `max-width:1079px`, the hero heading declaration changes to 22px/800/34px; newsroom titles to 18px/800/28px; and news rows switch from a fixed-height horizontal layout to a column with automatic height. These are authored CSS rules, not a mobile browser measurement. No tablet trip-panel or native touch-target measurement is available.

## Elevation & Depth

All six measured controls have `box-shadow: none`. The photographed and video backgrounds provide visual depth; the measured action links themselves remain flat. Native sheet, receipt-card and floating-map shadows were not established.

## Motion & Easing

The measured navigation link's computed transition is `color 0.1s ease 0s`. The five other measured controls report `all 0s ease 0s` on the element itself. Separately, the homepage CSS declares `margin-left 0.2s ease-out` on the action-link `::after` arrows; the measured 10px width growth agrees with that declared margin change. This arrow transition is a source declaration, not a computed pseudo-transition captured by the probe.

No measured native spring, map fly-to, sheet timing, cubic-bezier token or reduced-motion behaviour is established.

---

**Verified:** 2026-11-03. Live corporate homepage survey and six-control state capture, with complete raw JSON and screenshots listed in `verification.md`. First-party narrative: [company history](https://www.kakaomobility.com/story), [current service guide](https://www.kakaomobility.com/service-kakaot), [rebrand](https://www.kakaocorp.com/page/detail/8412), [launch](https://www.kakaocorp.com/page/detail/8414). Legal entity and company address: [location-service terms, article 17](https://policy.kakaomobility.com/viewer/?pageCode=LOCATION). Font and icon evidence are linked in §§1–3.

## Components

### Action links with measured authored states

All three have transparent backgrounds, no border, no shadow and **0px radius**. Their visible labels are text followed by an arrow, rather than filled buttons.

| Control | Rest identity | Hover and pressed |
|---|---|---|
| `story-cta` — accessible text `카카오모빌리티 이야기 자세히 보기`, visible `자세히 보기` | 129.8×60px; padding 30px 0px 0px; KakaoBig 16px/700, 30px line-height; `#000000` on white | Ink `#666666`; width 139.8px, height unchanged. |
| `news-more` — accessible text `뉴스룸 더 보기`, visible `더 보기` | 101.2×30px; padding 0px; KakaoBig 16px/700, 30px line-height; `#000000` on white | Ink `#666666`; width 111.2px, height unchanged. |
| `careers-cta` — accessible text `영입 이야기 자세히 보기새창열림`, visible `자세히 보기` | 129.8×60px; padding 30px 0px 0px; KakaoBig 16px/700, 30px line-height; `#ffffff` over video imagery | Ink `rgba(255, 255, 255, 0.6)`; width 139.8px; arrow pseudo-element opacity 1 → 0.6. |

The homepage CSS declares a **40×16px** `::after` arrow and increases its left margin **14px → 24px** on hover. The probe measured the resulting 10px link-width increase; its pseudo snapshot does not include margins.

### Other observed controls

- **`nav-services` — `서비스`, header link to `/service-kakaot`:** at page top, 101.6×30px, radius 0px, padding 0px 32px, KakaoBig 14px/400, transparent with white ink. Its parked pointer baseline after the Tab walk is 101.6×53px with grey `#666666` ink; hover and pressed turn that ink black. These contexts are reported separately, so it has no component token.
- **`news-card` — first newsroom article:** 1120×248px, radius 0px, padding 0px, transparent. The anchor inherits `#2c6edb`, but its visible title child is black and its description/category are grey. The image occupies 432×248px. Hover and pressed have no computed change within the measured scope. Only the browser's default ring appears on keyboard focus; this card remains prose rather than a harvested interactive component.
- **`footer-kakaot` — `카카오 T`:** 49.4×20px, radius 0px, padding 0px, KakaoBig 14px/400 with 20px line-height; transparent, alpha-white ink on black. Hover and pressed have no computed change within the measured scope; focus adds only the browser ring. It remains prose.

No search input appeared in the homepage survey.

### States

Hover and pressed were measured with actual `:hover` and `:active` matches. For `story-cta` and `news-more`, black ink becomes grey and width increases by 10px; the held press adds no further change beyond hover. `careers-cta` uses the alpha-white and arrow-opacity change described above, again with no further pressed change.

Real Tab focus reached all six controls. The observed ring is `rgb(0, 95, 204) auto 1px` with 1px offset, a browser default. Story and careers ancestors also reveal on scroll; those changes remain after blur and are excluded from focus styling. Navigation focus changes white ink to black, but its after-blur baseline becomes grey and its later pointer geometry changes, so no stable navigation focus token is declared.

“No computed change” for the news card covers self, both pseudos, 10 descendants including one image and their pseudos, and three ancestor levels. For the footer link it covers self, both pseudos and three ancestor levels. It does not prove absence of video-pixel changes, sibling effects, external SVG internals or other content outside that comparison scope. Disabled, native loading, error and success states were not measured.

## Do's and Don'ts

These are implementation guidance derived from the captured website, rather than published company principles.

- Use KakaoBig for the measured web hierarchy, black headings and grey reading text.
- Reproduce the arrow link's colour and 10px width change, including the inverse alpha-white version over imagery.
- Keep the transparent link surface and square geometry when reproducing these controls.
- Preserve the difference between icon asset colours and web interaction colours.
- Treat the browser `auto` focus outline as browser behaviour; it supplies no authored brand-ring token.
- Keep native fare typography, trip sheets and semantic state colours absent until separately verified.

## Voice & Tone

The corporate homepage uses declarative explanatory Korean alongside the English Physical AI headline. Its short visible action labels are `자세히 보기` and `더 보기`. The service guide uses polite explanatory endings such as `이용할 수 있어요!`, tying features to the reader's situation. This is evidence for these public pages; native matching, error, empty and payment copy was not observed.

## Agent Prompt Guide

“Build a Kakao Mobility corporate story link with visible label `자세히 보기`: KakaoBig 16px/700, line-height 30px, transparent on white, black text, square corners, no border or shadow, padding-top 30px and total height 60px. On hover and held press use `#666666`; the arrow margin grows from 14px to 24px and the measured overall width grows by 10px.”

“Create the inverse recruitment link over video imagery with the same measured 60px height. Rest text is white. Hover and held press use 60% alpha white, fade the arrow to 0.6 opacity and add 10px to the link width.”

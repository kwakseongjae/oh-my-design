---
name: Douzone Bizon
colors:
  primary: '#00aaf0'
  background: '#ffffff'
  foreground: '#000000'
  secondary-foreground: '#4b4e53'
  muted-foreground: '#767676'
  action-dark: '#272a33'
  subtle-surface: '#f5f5f5'
  muted-action: '#666666'
  border: '#e5e5e5'
typography:
  navigation:
    fontSize: 20px
    fontWeight: 400
    letterSpacing: '-0.4px'
    use: Measured homepage header link; live-loaded Noto Sans KR.
  utility:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 30px
    use: Measured solution-shortcut button.
  hero-link:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 36px
    use: Measured hero link at rest; interactive states unmeasured.
rounded:
  square: 0px
  utility: 60px
  contact: 35px
components:
  nav-solutions:
    type: button
    textColor: '#000000'
    rounded: 0px
    height: 85px
    padding: 0px 25px
    typography: 20px / 400
    hover: 'Two #00aaf0 pseudo-element underlines each expand from 0px to 52px wide; height stays 3px. Text stays #000000.'
    pressed: 'Same two 52px by 3px #00aaf0 underlines as hover; no additional pressed delta.'
    use: 솔루션 is a navigation link on the white header; 104px wide. Its own background is transparent. Keyboard focus shows a browser auto outline, so no focus token is declared.
  solution-menu:
    type: button
    backgroundColor: '#00aaf0'
    textColor: '#ffffff'
    rounded: 60px
    height: 30px
    padding: 0px 16px 0px 0px
    typography: 13px / 400
    hover: 'The 16px by 16px ::after background image switches from ic_dropdown_arr_down_white.png to ic_dropdown_arr_up_white.png. Fill #00aaf0 and text #ffffff stay unchanged.'
    pressed: Same 16px by 16px ::after ic_dropdown_arr_up_white.png image as hover; no additional pressed delta.
    use: 솔루션 바로가기 is a native button, 140px wide. The measured state is an icon asset swap; dropdown sibling contents are outside the comparison scope. Keyboard focus is browser auto only.
  news-card:
    type: card
    textColor: '#000000'
    rounded: 0px
    height: 388px
    padding: 0px
    typography: 16px / 400
    hover: 'Thumbnail transform becomes matrix(1.04, 0, 0, 1.04, 0, 0); text-layer ::before opacity becomes 1; category and headline become #ffffff.'
    pressed: 'Same thumbnail matrix, opaque text-layer gradient and #ffffff category and headline as hover; no additional pressed delta.'
    focus: 'Authored descendants only: thumbnail matrix(1.04, 0, 0, 1.04, 0, 0), text-layer ::before opacity 1 and category #ffffff. Headline stays #000000.'
    use: 'Link to the Sejong AI governance press release, id=3505; 384px wide. The anchor background is transparent, with a white child text panel and a #00aaf0 category at rest. Wrapper font is 16px/400; headline CSS is 18px/500. Focus token excludes the browser auto outline and an ancestor transform that persists after blur.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    ui: Noto Sans KR
---

# Design System Inspiration of Douzone Bizon

## Overview

### Visual Theme & Atmosphere

Douzone Bizon provides business software including ERP, business platforms and groupware. Its company page places these within the Douzone ICT Group's “Work&Life” offering across business, finance, commerce, healthcare and the public sector. The company describes its progression from ERP into AI, cloud and data services. [Company](https://www.douzone.com/intro/company.jsp)

The identity combines two circular forms with a blue corporate colour. Douzone's CI explanation assigns the circles meanings of harmony and cooperation between paired worlds, including customers and company, tradition and advanced technology. Its wordmark description pairs soft curves with sharp strokes. The live homepage carries that blue accent through utility controls, navigation underlines and media-card labels, against white surfaces and dark photographic/video areas. Square media cards coexist with rounded header utilities and a tall rounded contact link. [CI and corporate fonts](https://www.douzone.com/intro/ci.jsp); homepage survey and state captures, 2026-11-03.

The current slogan is “Authentic Innovation, AX and More.” The official history records its announcement in April 2026; the vision page describes a move beyond AI transformation toward changes customers can experience in their businesses. This gives the reference a business-outcome emphasis grounded in the company's own writing. [History](https://www.douzone.com/intro/history.jsp), [Vision](https://www.douzone.com/intro/vision.jsp)

The measured homepage is the Korean site at `www.douzone.com/main/index.jsp`, reached from `/`, with HTML `lang="ko"`. The measurements describe this public corporate and product-marketing surface; the logged-in WEHAGO, Amaranth 10 and OmniEsol interfaces were not measured.

#### Primary tasks

- Explore solutions and products through the main navigation and solution shortcut.
- Read news, seminars and product announcements in the media grid.
- Follow a purchase-consultation link.

### Brand Narrative

The group's history records ERP specialist Douzone Dass in June 2003, the acquisition and renaming of the listed Daedong company as Douzone Bizon in June 2006, and the Gangchon campus move and D-Cloud centre in 2011. In 2024 it records the ONE AI and OmniEsol launches. Its 2026 slogan announcement places AI transformation within the broader “AX and More” direction. These are distinct milestones, not a claim that the present listed legal entity was founded in 2003. [Official history](https://www.douzone.com/intro/history.jsp)

A September 2026 first-party event report describes ONE AI integrated with OmniEsol, Amaranth 10 and WEHAGO, working with accounting, HR, tax and logistics data. That supports the company's current integration narrative; it supplies no visual tokens for the applications themselves. [Official event report](https://www.douzone.com/media/media_room_read.jsp?id=3400)

### Principles

The documented identity meanings are cooperation and harmony in the two circles, and trust and advanced technology in the blue colour. The current vision emphasizes technology's connection to business change customers experience. Treat these as the stated corporate meanings; the component recipes above are observations of their homepage expression. [CI](https://www.douzone.com/intro/ci.jsp), [Vision](https://www.douzone.com/intro/vision.jsp)

### Personas

No researched personas were verified.

## Colors

Keep the documented CI colour separate from the live UI primary. The CI page specifies **`#00aaff`**, RGB 0/170/255, and black **`#000000`**. The homepage's computed `--primary` and `--blue` are **`#00aaf0`**, RGB 0/170/240; the solution-shortcut button uses that measured fill. These are different values, with different evidence. The machine palette below represents the measured homepage. [CI colour specification](https://www.douzone.com/intro/ci.jsp), [homepage CSS](https://www.douzone.com/html/css/style.css)

| Role | Value | Evidence and use |
|---|---|---|
| Primary | `#00aaf0` | Computed `--primary` / `--blue`; solution button, nav pseudo-elements, card category |
| Background | `#ffffff` | Most frequent nontransparent background; card's child text panel |
| Foreground | `#000000` | Document body CSS default, nav text and news headline at rest; not a claim that every paragraph is black |
| Secondary foreground | `#4b4e53` | Computed `--gray-dark`; rendered text census |
| Muted foreground | `#767676` | Computed `--gray`; rendered text and one paragraph |
| Dark action | `#272a33` | Computed `--dark`; fixed purchase-consultation link |
| Subtle surface | `#f5f5f5` | Footer online-consultation link |
| Muted action text | `#666666` | Same footer link |
| Border | `#e5e5e5` | Footer link's 1px border and rendered border census |

Paragraph ink was predominantly white: `rgb(255, 255, 255)` on 14 sampled `<p>` elements, `rgba(0, 0, 0, 0.5)` on two and `rgb(118, 118, 118)` on one. Preserve these surface-specific differences. Overall text counts alone would give a misleading account of paragraph colour.

The text-panel overlay on the measured media card is a declared `linear-gradient(124deg, #00a4ed 6%, #1471ef 93%)`. Its computed pseudo-element opacity changes from 0 to 1 on hover, press and keyboard focus. These stops come from the matching first-party CSS rule, corroborated by the observed gradient layer; they are not additional root brand tokens. [Card CSS](https://www.douzone.com/html/css/main.css)

The stylesheet carries a Bootstrap 4.4.1 licence header; the primary used here is its observed `#00aaf0` value. Retain colours with demonstrated homepage use; do not turn its remaining framework palette, font stacks or Swiper defaults into a corporate brand palette.

## Typography

### Evidence classes

- **Official product use:** no opened source identifies an official typeface for the logged-in product interfaces. The corporate CI page does document dedicated Douzone fonts; it does not establish their use in those products.
- **Live-loaded:** the survey's loaded faces are **Noto Sans KR 400/500/700 normal** and **Pretendard 400 normal**. Noto Sans KR leads the computed body, `h1` and button family declarations and the measured controls. Pretendard appears on the top notice's “오늘 하루 보지 않기” label; that does not make it the general interface face.
- **Official distributed assets:** the CI page presents **더존 제목체** 30 (Regular), 50 (Bold), and **더존 본문체** 10 (Light), 30 (Regular), 50 (Bold), through image specimens. These are the page's names and numbering, not inferred CSS weights. No font binary or font licence was verified or downloaded. No live specimen is supplied for these unobserved faces. [Corporate font documentation](https://www.douzone.com/intro/ci.jsp)
- **Declared-only in the census:** Noto Sans KR 100/300/900; Roboto 400/500/700; Pretendard 500/600 in inline rules; and `swiper-icons` 400. The purchase-label CSS also names `NotoSansCJKKR`, which is absent from the loaded-face list. None is promoted as a separately loaded text face or given a specimen.
- **Unresolved:** which source alternative supplied Pretendard's loaded bytes, product-app typography, and permission to redistribute the corporate fonts. **Substitute: none chosen.**

Noto Sans KR's first-party `webfont.css` declares local-site WOFF2/WOFF sources under `/fonts/`. Pretendard is imported by `main.css` from a jsDelivr stylesheet whose 400 rule offers `local('Pretendard Regular')` and Regular WOFF2/WOFF URLs. The census records that face as loaded but does not identify which alternative was used. Separate inline Pretendard declarations map Medium and Bold files to 500 and 600; these do not prove a loaded 500 or 600 face. [Webfont declarations](https://www.douzone.com/html/css/webfont.css), [main stylesheet](https://www.douzone.com/html/css/main.css)

### Measured control metrics

| Element | Size / weight | Line height | Other geometry |
|---|---|---|---|
| Main nav link | 20px / 400 | `normal` | −0.4px tracking, 25px horizontal padding |
| Solution shortcut | 13px / 400 | 30px | 30px control height |
| Hero detail link | 14px / 400 | 36px | 38px control height |
| News-card wrapper and category | 16px / 400 | Wrapper `normal`; category CSS 24px | Headline CSS is 18px / 500, line-height 1.44 |
| Footer consultation link | 14px / 400 | 38px | 40px control height |
| Fixed consultation link | Wrapper 16px / 400; visible label 12px / 400 | Wrapper `normal` | Child label's family declaration remains unresolved |

Headline and category CSS metrics are identified as stylesheet evidence; the other control metrics come from `states.json` identities and label snapshots. No heading-size scale was measured.

## Layout

The desktop media grid has three 384px columns beginning at x=112, 520 and 928 in the 1440px capture. Those coordinates give 24px gutters and a 1200px occupied span. Successive card rows begin at y=961, 1373 and 1785, giving a 24px vertical gap after each 388px card. These are measurements of this grid, not a universal spacing scale.

The card text panel's matching CSS uses 1.5rem 2rem padding; its measured children span 320px within a 384px panel. Header navigation uses a separate 25px horizontal padding. Square editorial cards contrast with the small pill-shaped utility control and the tall 35px-radius contact link. [Card layout CSS](https://www.douzone.com/html/css/main.css); survey rows and state identities.

### Responsive Behavior

Only desktop 1440×1000 was captured; no mobile layout or breakpoint transition was verified.

## Elevation & Depth

The measured press-card anchor has `rgba(3, 4, 5, 0.08) 0px 2px 40px 0px` box-shadow at rest. Its matching CSS specifies `0 2px 2.5rem rgba(3, 4, 5, 0.08)`. The measured nav link, solution button, hero link and consultation links have no box-shadow. No wider elevation scale is inferred.

## Motion & Easing

The control-level computed transitions in `states.json` are `bottom 0.4s ease-out 0s` for the fixed purchase link, `all 0.6s ease-in-out 0.7s` for the hero detail link, and `all 0s ease 0s` for the nav link, solution button, news-card anchor and footer link. The hero value describes its captured entrance styling; it does not establish a measured interaction state.

Control-level zero duration does not describe every child. The opened CSS declares `all 0.15s ease-in-out` on each nav underline, `all 0.5s ease-out` on the card image and `all 0.3s ease-in-out` on the card text-panel pseudo-element. These are stylesheet declarations, separately identified from the computed control strings. No custom cubic-bezier curve, reduced-motion behaviour or general motion scale was verified. [Navigation CSS](https://www.douzone.com/html/css/layout.css), [card CSS](https://www.douzone.com/html/css/main.css)

## Components

The component tokens contain three controls with measured authored changes. Each link is identified as a link even where the registry represents it as a button.

**Navigation link — `nav-solutions`.** “솔루션”, `#gnb > ul > li:first-child > a`, is 104×85px with 0px radius, 0px 25px padding, black text and a transparent background on the white header. The blue `::before` and `::after` underlines each grow from 0×3px to 52×3px on hover and press. Text stays black. Keyboard focus contributes only a browser `auto` outline.

**Solution shortcut — `solution-menu`.** “솔루션 바로가기” is a 140×30px native button, 60px computed radius, padding 0px 16px 0px 0px, with white text on the UI primary. Hover and press swap its 16×16px `::after` background image from `ic_dropdown_arr_down_white.png` to `ic_dropdown_arr_up_white.png`. Fill, label colour and geometry remain unchanged in the measured comparison. This is an asset swap, not a measured rotation. The full asset names are corroborated by the opened [navigation stylesheet](https://www.douzone.com/html/css/layout.css); the state JSON shortens long image URLs.

**Press card — `news-card`.** The link to press release `id=3505`, headed “더존비즈온, 법무법인 세종과 AI 거버넌스·컴플라이언스 시장 공동 공략 나선다”, is 384×388px, square, with 0px anchor padding. Its thumbnail is 384×260px; its white text panel is 384×128px. The category is blue and headline black at rest. Hover and press reveal the gradient text panel, make both labels white and scale the thumbnail to `matrix(1.04, 0, 0, 1.04, 0, 0)`. Keyboard focus scales the image and reveals the same panel but leaves the headline black while the category turns white. An ancestor transform that persisted after blur is excluded from the component's focus description.

Other observed controls remain useful geometry references without becoming component tokens:

| Key | Identity and rest appearance | State evidence |
|---|---|---|
| `purchase-cta` | “구매상담1688-5000”; 70×152px, radius 35px, padding 0px, dark action fill / white text | Repeat pointer pass with overlay hiding: hover and press unchanged within the recorded scope; focus is browser `auto` only |
| `hero-more` | Vision “자세히보기” link; 150×38px, radius 0px, padding 0px 12px, white text and 1px white border, transparent over hero media | Hover, press and keyboard focus **UNMEASURED**; the selected intro became hidden as the carousel advanced |
| `footer-online` | “​구매상담 온라인접수”; 146×40px, radius 0px, padding 0px, subtle surface / muted action text, 1px border | Hover and press unchanged; keyboard focus is browser `auto` only |

No search input appeared in the 68 survey rows. No input component was harvested.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| `nav-solutions` | Both blue pseudo-underlines 0×3px → 52×3px | Same as hover; no extra delta | Browser `auto` outline only |
| `solution-menu` | `::after` down-arrow image → up-arrow image | Same as hover; no extra delta | Browser `auto` outline only |
| `news-card` | Thumbnail scale 1.04; panel pseudo opacity 0 → 1; category and headline white | Same as hover; no extra delta | Scale 1.04 and panel opacity 1; category white, headline black; browser outline recorded separately |
| `purchase-cta` | No change in repeat pass with `hideOverlays: true` | No change in that pass | Browser `auto` outline only |
| `hero-more` | UNMEASURED | UNMEASURED | UNMEASURED |
| `footer-online` | No change | No change | Browser `auto` outline only |

The unchanged footer comparison covers the element, its pseudo-elements and three ancestor levels; it has no descendants. The purchase-link comparison covers the element and pseudo-elements plus five descendants, including three empty elements, with no ancestor levels. Their recorded properties include colours, borders, drawn outlines, shadows, opacity, transforms, filters, visibility, dimensions, text decoration and image/mask data. These results do not establish the absence of canvas/video or sibling changes. No disabled, error or loading state was measured.

The measured `auto` outlines are browser indications, so no brand ring token is created. The news-card focus token records only reversible authored descendant changes, excluding both that ring and the persistent ancestor transform.

## Do's and Don'ts

For reproducing these measured controls:

- Use the live UI blue for the solution button, card category and navigation underlines; keep its distinction from the documented CI blue.
- Combine square editorial cards with the measured rounded utility shapes.
- Preserve the card's different headline colours under pointer hover and keyboard focus.
- Keep transparent anchors over their actual white or media surfaces; a transparent anchor is not a black-filled control.
- Leave the unmeasured hero states and unverified product-app fonts unspecified.

## Voice & Tone

The homepage uses short Korean task labels such as “솔루션 바로가기” and “자세히보기”, alongside English product names. The vision page frames technology in terms of customers' business possibilities and experienced outcomes. Retain that concrete business vocabulary when writing adjacent interface copy. This is an interpretation of the opened copy, not a published editorial style guide. [Vision](https://www.douzone.com/intro/vision.jsp)

## Agent Prompt Guide

- “Build a white header with Noto Sans KR 20px/400 navigation. Give the ‘솔루션’ link a 104×85px box, 25px horizontal padding and two blue 3px pseudo-element underlines that each reach 52px on hover and press.”
- “Build a square 384×388px press-card link with a 260px thumbnail and a 128px text panel. On hover and press, scale the image by 1.04, reveal the measured blue gradient and turn both text labels white. On keyboard focus, keep the headline black while the category turns white.”

These prompts reproduce the captured corporate homepage; they do not define the separate product applications.

## Governance

### Known Gaps

- **Contrast, `solution-menu`.** Text `#ffffff` on `#00aaf0` measures 2.62:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

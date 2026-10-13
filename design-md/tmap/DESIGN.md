---
name: TMAP Mobility
colors:
  primary: '#0064ff'
  ink: '#000000'
  canvas: '#ffffff'
  menu-link: '#585858'
  chip-label: '#464646'
  footer: '#777777'
  surface-blue: '#f1f8ff'
  hairline: '#e5e5e5'
  search-border: '#f2f0f0'
  badge-border: '#dbdbdb'
  on-image: '#ffffff'
typography:
  display:
    fontSize: 61.44px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '-0.32px'
    use: Company value headline (h3) on the about page
  hero:
    fontSize: 44.16px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '-0.32px'
    use: Home hero headline (h2), white over photography
  page-title:
    fontSize: 44.16px
    fontWeight: 700
    lineHeight: 1.39
    letterSpacing: '-0.32px'
    use: Service page title (h1) on the navigation page
  section:
    fontSize: 34.56px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: '-0.32px'
    use: Feature section heading (h4) on the navigation page
  card-title:
    fontSize: 28.8px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '-0.32px'
    use: Article card heading (h4) on home
  eyebrow:
    fontSize: 23.04px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '-0.32px'
    use: Blue section eyebrow (h2) on the about page; the first one is set at 600
  nav:
    fontSize: 15.36px
    fontWeight: 700
    lineHeight: 1.4
    use: Top navigation item
  menu-title:
    fontSize: 15.36px
    fontWeight: 700
    lineHeight: 1.2
    use: Mega-menu section title
  menu-link:
    fontSize: 13.44px
    fontWeight: 800
    lineHeight: 1.2
    use: Mega-menu service link
  chip:
    fontSize: 13.44px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: '-0.32px'
    use: Home quick-link chip and image badge label
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: '-0.32px'
    use: Body text
  footer-nav:
    fontSize: 15.36px
    fontWeight: 700
    lineHeight: 1.2
    use: Footer navigation (letter-spacing computes as -2%)
rounded:
  sm: 4px
  md: 9.6px
  lg: 19.2px
  search: 34.56px
  pill: 43.2px
  full: 100px
spacing:
  nav-x: 20.16
  menu-y: 7.68
  menu-x: 23.04
  search-y: 23.04
  search-x: 28.8
  chip: 11.52
  badge: 10.56
  pill-y: 8.64
  pill-x: 21.12
  panel: 67.2
  news-row: 33.6
components:
  header-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    padding: 0px 20.16px
    height: 22px
    typography: 15.36px / 700 / 21.5px Pretendard
    selected: 'fg #0064ff on the item of the current section'
    states: selected variant read from rest values (surface-2 capture 5, 티맵 서비스, and surface-3 capture 4, 티맵 피플, against their black siblings); no pointer frame; focus is not declared from the capture
    use: Top navigation item (티맵 피플, 티맵 서비스, 티맵 이야기, 지속가능경영, 고객지원) at home::[data-omd-capture="4"], in a 93px header
  mega-menu-title:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 4px
    padding: 7.68px 23.04px
    height: 34px
    typography: 15.36px / 700 / 18.4px Pretendard
    hover: bg rgba(0, 100, 255, 0.1)
    pressed: bg rgba(0, 100, 255, 0.1)
    states: rest, hover and pressed; two elements on two pages (surface-2 capture 12, surface-3 capture 10) read the same 10% blue tint in both frames; focus is not declared from the capture
    use: Section title in the header mega menu (e.g. 회사소개, 장소, 운전) at home::[data-omd-capture="9"]
  mega-menu-link:
    type: tab
    backgroundColor: transparent
    textColor: '#585858'
    rounded: 4px
    padding: 7.68px 23.04px
    height: 31px
    typography: 13.44px / 800 / 16.1px Pretendard
    states: rest only; no state frame
    use: Service link under a mega-menu title (e.g. 내비게이션, 주차, 대중교통) at home::[data-omd-capture="13"]; 23 per page
  search-pill:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #f2f0f0'
    rounded: 34.56px
    padding: 23.04px 28.8px
    height: 69px
    typography: 16px / 400 / 22.4px Pretendard
    shadow: rgba(0, 0, 0, 0.08) 0px 3px 5px 0px
    states: rest only; no state frame
    use: Home search launcher (어디로 갈까요?) at home::[data-omd-capture="56"], 467 x 69
  category-chip:
    type: button
    backgroundColor: transparent
    textColor: '#464646'
    border: '2px solid #e5e5e5'
    rounded: 9.6px
    padding: 11.52px
    height: 43px
    typography: 13.44px / 800 / 16.1px Pretendard
    states: rest only on six siblings (capture 57 to 62); no state frame
    use: Quick-link chips on home (회사소개, 조직문화, 내비게이션, 운전점수/보험혜택(UBI), 어디갈까, 대리운전) at home::[data-omd-capture="57"]
  outline-pill:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.1)
    textColor: '#ffffff'
    border: '2px solid #ffffff'
    rounded: 43.2px
    padding: 8.64px 21.12px
    height: 46px
    typography: 15.36px / 700 / 25px Pretendard
    states: rest only; no state frame
    use: Outline action over photography (티맵 서비스 on the home hero, 채용 공고 확인하기 on the about page); the 2px edge and 10% black fill sit on the container, the padding on its inner link (home::[data-omd-capture="52"]), the label on a 15.36px / 700 child
  outline-pill-dark:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: '2px solid #000000'
    rounded: 100px
    padding: 8.64px 21.12px
    height: 46px
    typography: 15.36px / 700 / 25px Pretendard
    states: rest only; no state frame
    use: Black outline action on white beside the home news list at home::[data-omd-capture="72"], 169 x 46; its inner link keeps a 43.2px radius
  image-badge:
    type: badge
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '2px solid #ffffff'
    rounded: 9.6px
    padding: 10.56px
    height: 41px
    typography: 13.44px / 800 / 16.1px Pretendard
    use: 'Category badge over article photographs on home (seven captured); on a white card the same badge is black text with a 2px #dbdbdb edge, and on the navigation page it carries a 2px #777777 edge'
  service-panel:
    type: card
    backgroundColor: '#f1f8ff'
    rounded: 19.2px
    padding: 67.2px
    size: 1056px x 487px
    use: Feature panel on the navigation page (five li.ServiceInfoSection items); the inner article carries the 67.2px padding, a 34.56px / 700 title and 23.04px / 400 copy
  interview-banner:
    type: card
    textColor: '#ffffff'
    rounded: 19.2px
    size: 1056px x 697px
    use: Image-led interview banner on home and the about page with a 44.16px / 700 white heading; its background is imagery, so no fill is claimed
  news-row:
    type: listItem
    textColor: '#000000'
    border: '1px solid #000000 (bottom only)'
    padding: 33.6px 0px
    size: 691px wide
    use: Press row in the home news list; rows are divided by a 1px black bottom rule
  history-year:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    height: 25px
    typography: 15.36px / 700 / 25px Pretendard
    selected: 'fg #0064ff (2002 at rest, capture 69)'
    states: selected variant read from rest values (capture 69 against 21 siblings from capture 70); no pointer frame; the collector recorded a disabled attribute on part of the set, which is not declared as a state
    use: Year selector of the history timeline on the about page at surface-3::[data-omd-capture="70"]
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of TMAP Mobility

## Overview

### Visual Theme & Atmosphere

TMAP Mobility (티맵모빌리티㈜) runs TMAP, Korea's long-running navigation service, from SK-C Tower in Jung-gu, Seoul. Its own history page traces the product to 2002, when Nate Drive launched as what the company calls the world's first mobile navigation service to reflect real-time traffic. From there the page walks through the TMAP brand (2007), the smartphone app bundled free with mobile plans (2010), in-car TMAP starting with Renault Samsung and extending to SsangYong, Kia, Jaguar and Land Rover (2012), TMAP OPEN API (2012), opening the service free to every carrier (2016), the TMAP X NUGU AI driving assistant (2017), V2X alerts (2018) and aerial high-resolution maps (2019). In June 2021 the whole brand logo was replaced; that December TMAP added designated driving, parking, EV charging and kick-scooter verticals; a truck navigation followed in 2022, and in September 2023 version 10.0 folded public-transit guidance into one integrated mobility app. The company now frames itself as "더 가치 있는 길을 찾는 모빌리티 파트너" — a mobility partner that looks past the fastest route (Route) for a better way to move (Way).

The public site reads like a calm corporate magazine. Pages sit on white `#ffffff` with pure black `#000000` text, set entirely in Pretendard with 700-weight headlines — 44.16px heroes and 61.44px value statements, tracked at -0.32px. TMAP blue `#0064ff` is used as text, never as a fill: it marks the header item of the section you are in, the selected year of the history timeline and the blue eyebrows above sections, and it tints the mega menu's section titles at 10% under the pointer. Around that, the page is carried by photography: image-led article cards with 2px white outline badges, 43.2px outline pills over images, a pale `#f1f8ff` 19.2px panel for each navigation feature, and one soft shadow, on the home search pill.

**Key Characteristics:**
- Pretendard throughout, self-hosted as a variable font; 700 for every headline and navigation label
- White `#ffffff` canvas, pure black `#000000` text and headings, body tracked at -0.32px
- TMAP blue `#0064ff` as selected-state and eyebrow text, plus a 10% `#0064ff` hover tint on mega-menu titles — no blue fills
- Photography-led cards with 2px outline badges (9.6px radius) and 2px outline pills (43.2px radius)
- Pale blue `#f1f8ff` feature panels at 19.2px radius on the navigation page
- A single elevated element: the 69px search pill with `rgba(0, 0, 0, 0.08) 0px 3px 5px 0px`
- Grey only for secondary navigation: `#585858` mega-menu links, `#464646` chips, `#777777` footer

### Primary tasks

- Find the service for a trip: navigation, designated driving, parking, EV charging, rental cars, public transit
- Check what TMAP navigation does before installing the app
- Read company news, driving tips and theme courses (티맵 이야기)
- Learn about the company, its culture and open roles (티맵 피플)
- Evaluate TMAP AUTO, TMAP API & DATA and advertising for a business

### Brand Narrative

TMAP's story, as the company tells it on its own history page, is twenty years of widening what "finding the way" means. It began in 2002 with Nate Drive, a mobile navigation service that reflected live traffic; the TMAP name arrived in 2007, the smartphone app in 2010, and TMAP moved into cars, APIs and — from 2016 — every Korean carrier's phones. The late-2010s additions were about the drive itself: an AI assistant with NUGU, V2X warnings, aerial high-resolution maps. The 2020s are about everything around the drive: a new logo in June 2021, designated driving, parking, EV charging and scooters that December, truck navigation in 2022, and in 2023 a single app that also guides public transit.

The company's vision statement names that shift directly: having spent twenty years finding the fastest and safest Route, TMAP now wants to find a better Way to move — for daily life, for future generations and for its own people. Its WAY values read like a working culture rather than slogans: 고객중심 (customer first), 프로답게 (work like a pro), 열린소통 (open communication), 한계없이 (without limits, with the courage to fail fast) and 함께성장 (grow together). The footer links to SK's ethics reporting channel, the only group affiliation the captured pages show.

What the design refuses, as an editorial reading of the captured pages: loud promotional chrome and competing accent colours. What it embraces: black-and-white type, photography, outlines instead of fills, and one blue that tells you where you are.

### Principles

1. **Show where the user is.** *UI implication:* the current section and the selected year turn `#0064ff`; nothing else is blue.
2. **Route, then Way.** From the company vision. *UI implication:* lead with the destination question ("어디로 갈까요?") and put the service catalogue one step away.
3. **Let photography carry the mood.** *UI implication:* white outline badges and pills over images instead of filled buttons.
4. **Flat and quiet.** *UI implication:* no card shadows; pale `#f1f8ff` panels and 2px outlines for grouping.
5. **Weight, not colour, for hierarchy.** *UI implication:* 700 and 800 Pretendard for structure, 400 for reading.

### Personas

*Personas below are fictional archetypes informed by publicly observable TMAP user segments (daily drivers, public-transit riders, business customers of TMAP AUTO and TMAP API), not individual people.*

**김도현, 38, 서울.** A daily commuter who checks the navigation page before trying new features. Wants the fastest route and plain explanations, not promotions.

**이서연, 29, 경기.** A newer driver interested in the driving score and insurance benefit. Reads the service pages to understand what the app measures.

**박준호, 45, 부산.** A fleet manager comparing TMAP API & DATA and route optimisation for a logistics team. Trusts the calm, data-first presentation.

## Colors

Every value below was read on 2026-09-30 from the home page, the TMAP navigation page and the company page.

### Blue
- **TMAP Blue** (`#0064ff`): the primary. The captured pages render it in two primary roles: the selected state — the top-navigation item of the current section (티맵 서비스 on the navigation page, 티맵 피플 on the about page; the other four stay `#000000`) and the selected year (2002) of the history timeline — and accent text on the about page's eyebrows (TMAP MOBILITY VISION, TMAP MOBILITY WAY, TMAP MOBILITY 히스토리) and the five WAY slogans. The mega menu's section titles take it as a 10% tint, `rgba(0, 100, 255, 0.1)`, under hover and press. It never appears as a solid fill on the captured pages.

### Ink & Text
- **Ink** (`#000000`): body text, headings, navigation labels and the news-row rules.
- **Menu Link** (`#585858`): service links inside the mega menu, 13.44px / 800.
- **Chip Label** (`#464646`): labels of the home quick-link chips.
- **Footer** (`#777777`): footer navigation and legal links; also the edge of the category badge on the navigation page.
- **On Image** (`#ffffff`): hero and banner headings, outline pills and badges over photography.

### Surface & Lines
- **Canvas** (`#ffffff`): page background and the search pill.
- **Surface Blue** (`#f1f8ff`): the feature panels on the navigation page.
- **Hairline** (`#e5e5e5`): the 2px edge of the quick-link chips.
- **Search Border** (`#f2f0f0`): the 1px edge of the search pill.
- **Badge Border** (`#dbdbdb`): the 2px edge of a category badge on a white card.

### Not carried forward
- The June record's `#0061fd` blue panels and indicator dots, the `#f3f5f7` and `#efefef` grey bands, the `#e2e2e2` hairline and the `#f1f8ff` to `#d3e8ff` hero gradient were not present in the 2026-09-30 capture, so none is a token. The about page's white-text columns sit on imagery the collector does not read as a colour.

## Typography

### Font Family
- **Live surface use**: `Pretendard`, self-hosted by TMAP as a variable font (`https://www.tmapmobility.com/asset/font/PretendardVariable.woff2`), loaded and used by 763 captured elements across all three pages — headings, navigation, buttons, cards, badges and body text.
- **Official brand typeface**: none was found on the captured pages, so none is claimed.
- **Declared only / unresolved**: none; Pretendard is the only face the pages declare.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Display | Pretendard | 61.44px | 700 | 86px (1.4) | -0.32px | WAY value headlines (고객중심, 프로답게 …) |
| Hero | Pretendard | 44.16px | 700 | 61.8px (1.4) | -0.32px | Home hero, white |
| Page Title | Pretendard | 44.16px | 700 | 61.4px (1.39) | -0.32px | Navigation page h1 |
| Section | Pretendard | 34.56px | 700 | 49.6px (1.43) | -0.32px | Navigation feature heading |
| Card Title | Pretendard | 28.8px | 700 | 40.3px (1.4) | -0.32px | Home article cards |
| Eyebrow | Pretendard | 23.04px | 700 | 32.3px (1.4) | -0.32px | Blue eyebrows (first one at 600) |
| Body | Pretendard | 16px | 400 | 22.4px (1.4) | -0.32px | Body text |
| Nav | Pretendard | 15.36px | 700 | 21.5px (1.4) | normal | Top navigation |
| Menu Title | Pretendard | 15.36px | 700 | 18.4px (1.2) | normal | Mega-menu titles |
| Footer Nav | Pretendard | 15.36px | 700 | 18.4px (1.2) | -2% | Footer navigation |
| Menu Link | Pretendard | 13.44px | 800 | 16.1px (1.2) | normal | Mega-menu links |
| Chip | Pretendard | 13.44px | 800 | 16.1px (1.2) | -0.32px | Quick-link chips, badges |

The navigation page's 61.44px h2 computes its letter-spacing as `-2%` rather than -0.32px.

### Principles
- **Weight carries the hierarchy**: 700 for headings and navigation, 800 for small dense labels, 400 for body.
- **One tracking value**: -0.32px on body and headings; `-2%` only on the navigation page's largest headline and the footer.
- **Computed sizes, as measured**: 13.44, 15.36, 23.04, 28.8, 34.56, 44.16 and 61.44px at a 1440px viewport; use them as given rather than rounding.

## Layout

### Spacing System
- Navigation: 0 20.16px on top items; 7.68px 23.04px on mega-menu titles and links
- Search pill: 23.04px 28.8px; chips 11.52px; badges 10.56px
- Outline pills: 8.64px 21.12px on the inner link
- Feature panels: 67.2px; news rows 33.6px vertical

### Grid & Container
- Content runs in a 1056px column (feature panels, banners, section headings) under a full-width 93px header.
- Home article cards are 509px wide in two columns; the news list is 691px wide beside a 326px heading.
- The about page lays out 326px columns for its service groups and history items.

### Whitespace Philosophy
- **Magazine rhythm**: large headlines, photography and generous section gaps rather than dense widgets.
- **Colour for position, not decoration**: blue text tells you where you are (current section, selected year); everything else stays black and white.

### Border Radius Scale
- 4px: mega-menu titles and links
- 9.6px: chips and badges
- 19.2px: feature panels and banners
- 34.56px: the search pill
- 43.2px and 100px: outline pills

### Responsive Behavior

#### Breakpoints
Only the 1440px desktop layout was captured; no breakpoint values are claimed.

#### Touch Targets
- The search pill is 69px tall; outline pills 46px; chips 43px.
- Top navigation labels are 22px tall inside a 93px header bar.

#### Collapsing Strategy
Not captured.

#### Image Behavior
- Article cards, banners and the hero are image-led; text and outlines over them are white.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page, navigation, cards, panels, pills |
| Tint | `#f1f8ff` fill | Navigation feature panels |
| Outline | 2px solid edge | Chips, badges, outline pills |
| Rule | 1px solid `#000000` bottom | News rows |
| Raised | `rgba(0, 0, 0, 0.08) 0px 3px 5px 0px` | The home search pill only |

**Shadow Philosophy**: depth is almost absent. Structure comes from photography, 2px outlines and the pale blue panels; the one shadow lifts the search pill, the page's main entry into the product.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.search`: `rgba(0, 0, 0, 0.08) 0px 3px 5px 0px`

## Motion & Easing

The collector reads computed style, not animation. A same-day headless read of the declared `transition` values found: quick-link chips transition colour, background and border over 0.4s; the outline pills transition their background over 0.5s; the search pill and the history year buttons transition a filter over 0.2s. No easing curve is claimed beyond those declarations. Honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/tmap.json (capturedAt 2026-09-30), deterministic collector, 1440x900, logged out: www.tmapmobility.com, /service/drive/navigation, /people/about. www.tmap.co.kr redirects to www.tmapmobility.com.
- §1, §10, §11: the company page's vision, WAY and history text and the site footer, read 2026-09-30; home and navigation headings read headless the same day.
- The June record's statement that the company was spun off from SK Telecom in December 2020 was not found on any page opened this session and has been removed.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Navigation

**Top navigation item**
- Background: transparent
- Text: `#000000`
- Padding: 0 20.16px
- Height: 22px (inside a 93px header)
- Font: 15.36px / 700 / 21.5px Pretendard
- Selected: text `#0064ff` on the current section
- States: selected read from rest values on two pages; no pointer frame
- Use: 티맵 피플, 티맵 서비스, 티맵 이야기, 지속가능경영, 고객지원

**Mega-menu section title**
- Background: transparent
- Text: `#000000`
- Radius: 4px
- Padding: 7.68px 23.04px
- Height: 34px
- Font: 15.36px / 700 / 18.4px Pretendard
- Hover: background `rgba(0, 100, 255, 0.1)`
- Pressed: background `rgba(0, 100, 255, 0.1)`
- States: two titles on two pages read the same tint in both frames; focus is not declared
- Use: section titles of the header mega menu

**Mega-menu link**
- Background: transparent
- Text: `#585858`
- Radius: 4px
- Padding: 7.68px 23.04px
- Height: 31px
- Font: 13.44px / 800 / 16.1px Pretendard
- Use: service links (내비게이션, 주차, 대중교통 …)

**History year**
- Background: transparent
- Text: `#000000`
- Height: 25px
- Font: 15.36px / 700 / 25px Pretendard
- Selected: text `#0064ff` (2002 at rest)
- Use: year selector of the company history timeline, 22 years

### Buttons

**Search pill**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#f2f0f0`
- Radius: 34.56px
- Padding: 23.04px 28.8px
- Height: 69px (467px wide)
- Font: 16px / 400 / 22.4px Pretendard
- Shadow: `rgba(0, 0, 0, 0.08) 0px 3px 5px 0px`
- Use: "어디로 갈까요?" search launcher on home

**Quick-link chip**
- Background: transparent
- Text: `#464646`
- Border: 2px solid `#e5e5e5`
- Radius: 9.6px
- Padding: 11.52px
- Height: 43px
- Font: 13.44px / 800 / 16.1px Pretendard
- Use: 회사소개, 조직문화, 내비게이션, 운전점수/보험혜택(UBI), 어디갈까, 대리운전

**Outline pill over imagery**
- Background: `rgba(0, 0, 0, 0.1)`
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Radius: 43.2px
- Padding: 8.64px 21.12px
- Height: 46px
- Font: 15.36px / 700 / 25px Pretendard
- Use: 티맵 서비스 on the home hero, 채용 공고 확인하기 on the about page

**Outline pill on white**
- Background: transparent
- Text: `#000000`
- Border: 2px solid `#000000`
- Radius: 100px
- Padding: 8.64px 21.12px
- Height: 46px
- Use: the action beside the home news list

### Cards & Containers

**Image badge**
- Background: transparent
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Radius: 9.6px
- Padding: 10.56px
- Height: 41px
- Font: 13.44px / 800 / 16.1px Pretendard
- Use: category label over article photographs; on a white card it turns black with a `#dbdbdb` edge, on the navigation page it takes a `#777777` edge

**Feature panel**
- Background: `#f1f8ff`
- Radius: 19.2px
- Padding: 67.2px
- Size: 1056 × 487
- Use: the five TMAP navigation features, each with a 34.56px / 700 title

**Interview banner**
- Text: `#ffffff`
- Radius: 19.2px
- Size: 1056 × 697
- Use: image-led people story on home and the about page

**News row**
- Text: `#000000`
- Border: 1px solid `#000000`, bottom only
- Padding: 33.6px 0
- Use: press list on home, 691px wide

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages, logged out, plus first-party context from the company page)
**Tier 1 sources:** https://www.tmapmobility.com/ ; https://www.tmapmobility.com/service/drive/navigation ; https://www.tmapmobility.com/people/about
**Tier 2 sources:** getdesign.md/tmap (HTTP 200; the served page contains no occurrence of the name) and styles.refero.design/?q=tmap (HTTP 200; the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages.

| State | Observation |
|---|---|
| **Selected (top navigation)** | The current section's label is `#0064ff`; the others stay `#000000`. |
| **Selected (history year)** | The selected year (2002 at rest) is `#0064ff` among 21 black siblings. |
| **Hover and pressed (mega-menu title)** | Background transparent → `rgba(0, 100, 255, 0.1)`, the same on two titles on two pages. |

Focus rings, disabled, loading, empty, error and success treatments were not captured and are not described.

## Do's and Don'ts

### Do
- Set everything in Pretendard, headings and navigation at 700, body at 400 with -0.32px tracking
- Keep text `#000000` on `#ffffff`
- Use `#0064ff` for the selected item and for eyebrows — as text
- Use `rgba(0, 100, 255, 0.1)` as the hover fill of menu titles
- Put outline badges (2px, 9.6px) and outline pills (2px, 43.2px) over photography
- Use `#f1f8ff` panels at 19.2px for product features
- Keep one shadow for the search entry point

### Don't
- Fill buttons or panels with solid `#0064ff` — the captured pages never do
- Add drop shadows to cards or panels
- Introduce a second typeface
- Use grey for body text; grey belongs to secondary navigation and the footer

## Voice & Tone

TMAP's voice is plain and reassuring: it names a destination, a capability or a value, and trusts the reader. The navigation page leads with a leadership claim stated flatly, the company page talks about the route and the way, and the product entry point is a single question.

| Context | Tone |
|---|---|
| Hero headlines | Everyday, calm. "스마트한 이동 생활의 시작" |
| Product claims | Direct and factual. "가장 빠르고 정확한 길안내 국내 1위 티맵 내비" |
| Section eyebrows | Brand-formal English caps. "TMAP MOBILITY VISION", "TMAP MOBILITY WAY" |
| Values | A word plus a proverb-like line. "고객중심 — 열길 물속은 몰라도 백길 고객 속은 알아야 한다." |
| Entry points | A question, not a command. "어디로 갈까요?" |

**Voice samples (read on 2026-09-30):**
- "스마트한 이동 생활의 시작 티맵과 함께 언제나 마음 편한 이동과 일상" — home hero heading.
- "가장 빠르고 정확한 길안내 국내 1위 티맵 내비" — navigation page h1.
- "더 가치 있는 길을 찾는 모빌리티 파트너" — company vision.
- "실패할 수 있는 용기가 없다면 허들을 넘어설 수 없다" — the 한계없이 value.
- "어디로 갈까요?" — the home search pill.

**Forbidden register**: pressure-selling urgency, unexplained jargon, exclamation-heavy hype, playful slang that undercuts a safety-critical product.

## Agent Prompt Guide

### Quick Color Reference
- Primary (selected / eyebrow text): TMAP Blue `#0064ff`
- Hover tint: `rgba(0, 100, 255, 0.1)`
- Text and headings: `#000000`
- Background: `#ffffff`
- Feature panel: `#f1f8ff`
- Mega-menu link: `#585858`
- Chip label / edge: `#464646` / `#e5e5e5`
- Footer: `#777777`

### Example Component Prompts
- "Create a top navigation on white: five Pretendard 15.36px / 700 items in #000000 with 0 20.16px padding; the current section's label is #0064ff. No underline, no fill."
- "Create a search launcher: #ffffff pill, 1px solid #f2f0f0, 34.56px radius, 23.04px 28.8px padding, 69px tall, 16px / 400 Pretendard placeholder '어디로 갈까요?', shadow rgba(0, 0, 0, 0.08) 0px 3px 5px 0px."
- "Build an image card: full photograph, a 2px white outline badge (9.6px radius, 10.56px padding, 13.44px / 800 white) and a 28.8px / 700 white heading with -0.32px tracking."
- "Build a feature panel: #f1f8ff, 19.2px radius, 67.2px padding, 34.56px / 700 #000000 title, 23.04px / 400 copy."

### Iteration Guide
1. Pretendard only; 700 headings, 400 body, -0.32px tracking
2. Black on white; blue only as selected or eyebrow text
3. Hover on menu titles is a 10% blue tint
4. Outlines (2px) instead of fills for badges and pills over imagery
5. Radii: 4 / 9.6 / 19.2 / 34.56 / 43.2px
6. One shadow, on the search pill

---

## Governance

### Known Gaps

- **Contrast, `header-nav-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `mega-menu-title`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `mega-menu-link`.** Text `#585858` on `#00000000` measures 2.95:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `category-chip`.** Text `#464646` on `#00000000` measures 2.22:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `outline-pill-dark`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `history-year`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

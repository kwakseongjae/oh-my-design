---
name: Heydealer
colors:
  primary: '#396eff'
  on-primary: '#ffffff'
  ink: '#0c0d11'
  black: '#000000'
  canvas: '#ffffff'
  dark: '#101115'
typography:
  display:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: '-1.008px'
    use: The largest heading on /sell (an h2)
  hero:
    fontSize: 32px
    fontWeight: 700
    use: The /sell hero heading (최대 50개 견적, 최고가 그대로 내차팔기); line height normal
  page-title:
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.36
    letterSpacing: '-0.728px'
    use: 모든 차량 at the top of home (h1)
  section:
    fontSize: 24px
    fontWeight: 700
    use: Listing section headings on home (할인 중, eye 인증 차량, 오늘 가장 많이 조회된 차량); line height normal
  subsection:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '-0.32px'
    use: 타 본 사람들 이야기 on home; 자주 묻는 질문 and 판매후기 on /sell
  card-head:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.44
    letterSpacing: '-0.252px'
    use: '헤이딜러가 인증 했어요, 인기 모델 and the section links on home, in #000000'
  emphasis:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.47
    letterSpacing: '-0.195px'
    use: Car names, sale-step titles, header navigation and the primary button label
  body:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: '-0.195px'
    use: Owner-review paragraphs on home
  text:
    fontSize: 16px
    fontWeight: 400
    use: Default text, chips and selects; line height normal
  caption:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0.078px
    use: Small outlined buttons and footer links
  label:
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.38
    letterSpacing: 0.078px
    use: 인기 검색 and small card labels on home
  fine:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.12px
    use: Notes under the /sell step cards
rounded:
  base: 4px
  card: 8px
  switch: 16px
  pill: 100px
spacing:
  chip-y: 8
  chip-x: 12
  button-x: 24
  select-y: 16
  card: 16
components:
  primary-button:
    type: button
    backgroundColor: '#396eff'
    textColor: '#ffffff'
    rounded: 4px
    padding: 0px 24px
    height: 56px (52px on /sell)
    typography: 15px / 700 / 22px spoqaHanSansNeo, tracking -0.195px
    states: rest on both captured instances; no hover or pressed frame was recorded, so no state value is declared
    use: The count-and-보기 action under the brand, type and model selects on home (132 x 56) at home::[data-omd-capture="14"], and 10초 만에 확인 on /sell (280 x 52, surface-3 capture 10)
  select-button:
    type: button
    backgroundColor: rgba(97, 113, 159, 0.08)
    textColor: '#0c0d11'
    border: 1px solid transparent
    rounded: 4px
    padding: 16px 24px
    height: 56px
    typography: 16px / 400 spoqaHanSansNeo
    disabled: '차종 선택 and 모델 선택 were disabled at capture (captures 12 and 13) and compute the same rgba(97, 113, 159, 0.08) fill and #0c0d11 text as the enabled select'
    states: 'expanded: the collector opened 브랜드 전체 and read the brand menu'
    use: 브랜드 전체, 차종 선택 and 모델 선택 on home (240 x 56) at home::[data-omd-capture="11"]
  search-trigger:
    type: button
    backgroundColor: rgba(97, 113, 159, 0.08)
    textColor: '#0c0d11'
    rounded: 4px
    padding: 0px 16px
    height: 52px
    typography: 16px / 400 spoqaHanSansNeo
    states: rest only; it was not opened
    use: 모델을 입력해주세요. in the header of home and /market/cars (240 x 52) at home::[data-omd-capture="9"]
  nav-button:
    type: tab
    backgroundColor: transparent
    textColor: rgba(38, 55, 97, 0.6)
    rounded: 4px
    padding: 8px
    height: 38px
    typography: 15px / 700 / 22px spoqaHanSansNeo, tracking -0.195px
    selected: 'fg #0c0d11 on the current section (내차사기 on /market/cars, 내차팔기 on /sell)'
    states: selected read from rest values across the three pages; no pointer frame
    use: 내차사기, 내차팔기, 폐차 견적받기 and 중고차 숨은 이력 in the header at home::[data-omd-capture="2"]
  filter-chip:
    type: button
    backgroundColor: transparent
    textColor: '#0c0d11'
    border: 1px solid rgba(97, 113, 159, 0.16)
    rounded: 4px
    padding: 8px 12px
    height: 36px
    typography: 16px / 400 spoqaHanSansNeo
    states: rest only; no filter panel was opened
    use: 전체 필터, eye 인증, 할인 중, 연식, 주행거리, 가격 and the other filters on /market/cars at surface-2::[data-omd-capture="42"]
  radio-chip:
    type: toggle
    backgroundColor: transparent
    textColor: '#0c0d11'
    border: 1px solid rgba(97, 113, 159, 0.16)
    rounded: 4px
    padding: 8px 12px
    height: 36px
    typography: 16px / 400 spoqaHanSansNeo
    checked: 'bg rgba(97, 113, 159, 0.08) with a 1px solid #000000 border (capture 225, aria-checked true)'
    states: checked and unchecked read from rest values; no pointer frame
    use: A row of role=radio chips on home (50-84 x 36) at home::[data-omd-capture="226"]
  switch:
    type: toggle
    backgroundColor: '#000000'
    textColor: '#f7f8fb'
    rounded: 16px
    size: 30px x 18px
    states: rest only; the switch was not operated
    use: Switch input inside a label in the /market/cars filter bar at surface-2::[data-omd-capture="11"]
  outline-small-button:
    type: button
    backgroundColor: transparent
    textColor: '#0c0d11'
    border: 1px solid rgba(97, 113, 159, 0.16)
    rounded: 4px
    padding: 0px 12px
    height: 40px
    typography: 13px / 400 / 18px spoqaHanSansNeo, tracking 0.078px
    states: rest only
    use: Small outlined actions such as 판매과정 더 자세히 on /sell (148 x 40); home capture 290 (89 x 40)
  chat-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0c0d11'
    rounded: 100px
    padding: 8px 16px 8px 8px
    height: 56px
    shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px 0px
    states: rest only
    use: 채팅 문의 floating button on /market/cars (127 x 56) at surface-2::[data-omd-capture="105"]
  warranty-banner:
    type: card
    backgroundColor: '#101115'
    rounded: 4px
    size: 248px x 100px
    use: 모든 차 1년 무료 보증 banner at the top of /market/cars at surface-2::[data-omd-capture="10"]; its text sits in children that were not captured, so no text colour is claimed
  step-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 4px
    size: 200px x 280px
    shadow: rgba(0, 0, 0, 0.08) 0px 16px 20px 0px, rgba(0, 0, 0, 0.04) 0px 8px 16px 0px, rgba(0, 0, 0, 0.04) 0px 0px 8px 0px
    highlighted: 'bg #396eff with #ffffff text and 24px padding on one card of the row'
    use: Sale-process cards on /sell (집 앞, 방문 평가 / 48시간 경매 / 최고가에 판매결정) at surface-3::li
  review-card:
    type: card
    backgroundColor: '#ffffff'
    border: 1px solid rgba(97, 113, 159, 0.16)
    rounded: 4px
    padding: 16px
    size: 304px x 256px
    shadow: rgba(0, 0, 0, 0.03) 0px 4px 2px 0px
    use: 판매후기 cards on /sell (G70, 더 뉴 스포티지 R, QM6 and others) at surface-3::li
  dropdown-menu:
    type: card
    backgroundColor: '#ffffff'
    rounded: 4px
    padding: 8px 0px 8px 8px
    shadow: rgba(0, 0, 0, 0.08) 0px 16px 20px 0px, rgba(0, 0, 0, 0.04) 0px 8px 16px 0px, rgba(0, 0, 0, 0.04) 0px 0px 8px 0px
    use: Brand menu opened from 브랜드 전체 on home (240 x 429) at home::[data-omd-interaction-capture="menu-0-0"]; 30 items of 224 x 38 with 8px 12px padding and a 4px radius
  faq-row:
    type: button
    backgroundColor: transparent
    textColor: '#0c0d11'
    padding: 12px 0px
    height: 48px
    typography: 18.72px / 700 spoqaHanSansNeo — the browser's default h3 size, since the question sits in an unstyled h3
    states: rest only; no answer was opened
    use: 자주 묻는 질문 on /sell (944 x 48) at surface-3::[data-omd-capture="12"]
fonts:
  roles:
    body: spoqaHanSansNeo
---

# Design System Inspiration of Heydealer

## Overview

### Visual Theme & Atmosphere

Heydealer (헤이딜러) is the used-car platform of (주)피알앤디컴퍼니 (PRND Company), whose careers site lists 박진우 as chief executive and a head office in Seocho, Seoul. According to 매일경제 (2018-07-16), 박진우 — then on leave from Seoul National University — built Heydealer in early 2015 as an online market where dealers compete to buy a car its owner registers, and it passed ₩30 billion in cumulative deals within a year. In January 2016 a proposed amendment to the Automobile Management Act would have required online auction companies to run offline premises, a 3,300 m² car park and a 200 m² auction room, which pushed the company toward closure; the same article reports the law was changed after the paper's coverage and headlines Heydealer's ₩500 billion in cumulative deals once the rule was eased. Today the site describes three services in its own words: 내차팔기 through a top-price auction among 11,000 dealers nationwide, certified used cars with a one-year free warranty, and a car's price and 19-item accident and flood history from its number plate. PRND's careers site states the mission as "아무도 바꾸지 못한 중고차 시장을 혁신합니다".

The captured pages — www.heydealer.com, the /market/cars listing and the /sell page — read as a dense, flat product tool. The page is white `#ffffff` with near-black `#0c0d11` text, and one saturated blue, `#396eff`, appears only where the next step is: the count-and-보기 action on home, 10초 만에 확인 on /sell and the highlighted sale-step card. Everything else sits in a slate-tinted neutral system: 8% slate fills (`rgba(97, 113, 159, 0.08)`) for selects, the search trigger and checked chips; 16% slate borders for chips and cards; a 60% navy (`rgba(38, 55, 97, 0.6)`) for inactive navigation. A 4px radius covers almost every control; 8px article cards, a 16px switch and a 100px chat pill are the only softer shapes.

Type is Spoqa Han Sans Neo, self-hosted on static.web.heydealer.com, in Regular and Bold. Bold headings track tight (`-0.195px` at 15px up to `-1.008px` at 36px), while 12–13px text opens slightly (`0.078px`, `0.12px`).

**Key Characteristics:**
- One saturated blue, `#396eff`, on the primary action and nowhere decorative
- Near-black `#0c0d11` text on white; `#000000` for a few home headings and the checked-chip border
- A slate-tinted neutral system: 8% fills, 16% borders, 60% navy for inactive navigation
- A 4px radius on buttons, selects, chips, cards and menus
- Spoqa Han Sans Neo 400 / 700 with size-scaled tracking
- Flat listings; soft shadows only on the floating chat button, the dropdown menu and the /sell cards
- A near-black `#101115` warranty banner as the one dark block on /market/cars

### Primary tasks

- Sell your car by letting dealers bid for it in a 48-hour auction.
- Find a certified used car by brand, type and model.
- Filter the listing by year, mileage, price, fuel and accident history.
- Check a car's price and hidden history from its number plate.
- Get a scrap-car quote.

### Brand Narrative

Heydealer began as an online auction for sellers. 매일경제's 2018 account describes the 2015 model — an owner registers once and dealers compete to buy — and the growth that followed, ₩30 billion in cumulative deals in the first year. It also records the moment the model nearly ended: a January 2016 amendment that would have treated online auction companies as illegal unless they ran large offline lots. The law was changed, and the article's headline puts Heydealer's cumulative deals at ₩500 billion after the rule was eased.

PRND's careers site tells the rest in the company's own words. It frames the work as questions — "왜 중고차 사고 이력은 알기 어려울까?", "왜 중고차 거래는 항상 불안하지?" — and answers them with hidden-history checks, selling without unfair depreciation, and "세상에서 가장 믿을 만한 인증 중고차". Its stated working values are Break, Create and Drive. The same site lists a showroom in Yongin and a technical base in Incheon, and the company runs a consumer blog of car-buying guides at heydealer.com/blog.

On the captured pages that stance shows as restraint: a white page, one blue action, guarantees stated as short facts, and data laid out densely enough to compare.

### Principles

1. **The market should work for the owner.** Dealers compete for the seller's car. *UI implication:* show competing offers and their numbers plainly.
2. **Guarantees as facts.** *UI implication:* state 1년 무료 보증 and 단순변심 무료 환불 as short lines, not badges full of adjectives.
3. **One action, one colour.** *UI implication:* keep `#396eff` for the next step.
4. **Dense but calm.** *UI implication:* group with slate tints and hairlines; keep shadows for floating elements. (An editorial reading of the captured pages, not a Heydealer statement.)
5. **Weight carries the structure.** *UI implication:* Bold 700 for what matters, Regular 400 for the rest.

### Personas

*Personas below are fictional archetypes informed by publicly observable Heydealer user segments (Korean owners selling used cars, used-car buyers), not individual people.*

**김민재, 33, 서울.** Selling his first car before an upgrade. Distrusts haggling in person; checks the price from his number plate and lets dealers bid.

**이서연, 41, 경기.** Buying a certified used car for the family. Filters by accident history and cares most about the one-year warranty and free returns.

**박준호, 28, 부산.** Compares trims and prices across the listing, reading owner reviews before deciding.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from www.heydealer.com, www.heydealer.com/market/cars and www.heydealer.com/sell.

### Primary
- **Heydealer Blue** (`#396eff`): The fill of the primary action. It is the primary because the captured pages render it in that role: the count-and-보기 action under the car selects on home (132 × 56) and 10초 만에 확인 on /sell (280 × 52) both compute `backgroundColor: rgb(57, 110, 255)`, and it is the only saturated action fill on the three pages. The highlighted sale-step card on /sell uses the same blue.
- **On Primary** (`#ffffff`): Labels on the blue actions and text on the highlighted step card.

### Neutral & Surface
- **Canvas** (`#ffffff`): The page background (`body`), cards, menus and the chat button.
- **Dark** (`#101115`): The 모든 차 1년 무료 보증 banner on /market/cars.
- Translucent values stay in component fields: the slate fill `rgba(97, 113, 159, 0.08)`, the slate border `rgba(97, 113, 159, 0.16)` and the inactive-navigation navy `rgba(38, 55, 97, 0.6)`.

### Text
- **Ink** (`#0c0d11`): Body text, headings, chips and selects.
- **Black** (`#000000`): The 18px and 20px home headings (헤이딜러가 인증 했어요, 타 본 사람들 이야기), car names in the review strip, the checked radio-chip border and the switch track.
- The switch sets its text colour to `#f7f8fb`.

### Brand assets, not tokens
- The Heydealer logo was not measured, and no logo colour is a token here.

## Typography

### Font Family
- **Live surface use**: `spoqaHanSansNeo` (771 observed uses), served from `static.web.heydealer.com/_next/static/media/` (`SpoqaHanSansNeo_Regular.*.woff2` and its sibling weights). The survey's `document.fonts` list shows weights 400, 500 and 700 loaded. The stack continues `"Spoqa Han Sans Neo Fallback", -apple-system, "Apple Color Emoji", TossFace, system-ui, sans-serif`.
- **Official product use**: no Heydealer-owned typeface; the product text is set in Spoqa Han Sans Neo, self-hosted.
- **Licence**: Spoqa Han Sans Neo is Spoqa's open-source family, licensed under the SIL Open Font License, Version 1.1 (its LICENSE file, opened 2026-09-30).
- **Declared only (no visible use)**: `Inter` (`inter-latin-700-normal.*.woff2` on the same host — the browser loaded it, but no captured element renders it), `TossFace` (a flag-emoji subset) and `Spoqa Han Sans Neo Fallback` (a fallback name with no file). No token, no specimen.
- **Unresolved**: none.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Display | Spoqa Han Sans Neo | 36px | 700 | 48px (1.33) | -1.008px | Largest /sell heading |
| Hero | Spoqa Han Sans Neo | 32px | 700 | normal | normal | /sell hero |
| Page Title | Spoqa Han Sans Neo | 28px | 700 | 38px (1.36) | -0.728px | 모든 차량 on home |
| Section | Spoqa Han Sans Neo | 24px | 700 | normal | normal | 할인 중, eye 인증 차량 |
| Subsection | Spoqa Han Sans Neo | 20px | 700 | 28px (1.4) | -0.32px | 타 본 사람들 이야기, 자주 묻는 질문 |
| Card Head | Spoqa Han Sans Neo | 18px | 700 | 26px (1.44) | -0.252px | 헤이딜러가 인증 했어요, 인기 모델 |
| Emphasis | Spoqa Han Sans Neo | 15px | 700 | 22px (1.47) | -0.195px | Car names, nav, primary button |
| Body | Spoqa Han Sans Neo | 15px | 400 | 24px (1.6) | -0.195px | Review paragraphs |
| Text | Spoqa Han Sans Neo | 16px | 400 | normal | normal | Default text, chips, selects |
| Caption | Spoqa Han Sans Neo | 13px | 400 | 18px (1.38) | 0.078px | Small buttons, footer links |
| Label | Spoqa Han Sans Neo | 13px | 700 | 18px (1.38) | 0.078px | 인기 검색 |
| Fine | Spoqa Han Sans Neo | 12px | 400 | 18px (1.5) | 0.12px | Notes under the /sell step cards |

### Principles
- **Weight carries the structure**: headings, navigation and the primary label are Bold 700; reading text is Regular 400.
- **Tracking scales with size**: tight at 15px and above, slightly open at 12–13px.
- **One family**: Spoqa Han Sans Neo runs from 36px headings to 12px notes.

## Layout

### Spacing System
- Buttons: 24px horizontal padding
- Selects: 16px 24px padding at 56px
- Chips: 8px 12px padding at 36px
- Review cards: 16px padding
- Menu items: 8px 12px padding at 38px

### Grid & Container
- Home: a header with navigation and the search trigger, 모든 차량 with three selects and the blue action, then rows of listing cards (할인 중, eye 인증 차량, 오늘 가장 많이 조회된 차량), popular models and owner reviews.
- /market/cars: the warranty banner, a filter-chip bar with a switch, and the listing grid.
- /sell: a hero with the number-plate check and its blue action, three sale-step cards, an FAQ and a review carousel.

### Whitespace Philosophy
- **Dense but ordered**: listing data sits close together, separated by 16% slate borders and 8% slate fills rather than by large gaps.
- **The blue marks the next step**: it appears once per view, on the action.

### Border Radius Scale
- 4px: buttons, selects, chips, step and review cards, menus
- 8px: article cards on home
- 16px: the switch
- 100px: the chat button

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured; no breakpoint was measured.

#### Touch Targets
- Primary button: 56px on home, 52px on /sell
- Selects: 56px; search trigger: 52px
- Chips: 36px; header navigation: 38px
- Chat button: 56px

#### Collapsing Strategy
- Not measured.

#### Image Behavior
- Not measured.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page, listings, chips, selects, buttons |
| Tint | `rgba(97, 113, 159, 0.08)` fill | Selects, search trigger, checked chip |
| Line | 1px `rgba(97, 113, 159, 0.16)` | Chips, review cards, small buttons |
| Card | `rgba(0, 0, 0, 0.03) 0px 4px 2px 0px` | Review cards |
| Float | three-layer `rgba(0, 0, 0, 0.08 / 0.04 / 0.04)` shadow; `rgba(0, 0, 0, 0.12) 0px 2px 8px 0px` | Brand menu, sale-step cards; chat button |

**Shadow Philosophy**: The listing surfaces are flat — chips, selects, buttons and listing cards compute `box-shadow: none`, and grouping comes from slate tints and borders. Shadows appear where something floats or is presented as a step: the brand menu, the /sell step and review cards, and the chat button.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.float`: `rgba(0, 0, 0, 0.08) 0px 16px 20px 0px, rgba(0, 0, 0, 0.04) 0px 8px 16px 0px, rgba(0, 0, 0, 0.04) 0px 0px 8px 0px`
- `shadow.chat`: `rgba(0, 0, 0, 0.12) 0px 2px 8px 0px`
- `shadow.card`: `rgba(0, 0, 0, 0.03) 0px 4px 2px 0px`

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. The home rows and the /sell reviews are carousels with previous and next controls, which shows motion exists without timing it. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/heydealer.json (capturedAt 2026-09-30T07:52:26Z), deterministic collector, 1440x900, logged out: www.heydealer.com, www.heydealer.com/market/cars, www.heydealer.com/sell. No sale, quote, number-plate lookup or chat was started. Labels were matched to captures with a headless read-only survey of the same pages.
- §1 and §11 company facts: prnd.co.kr/ko/home and /ko/life (mission, questions, Break / Create / Drive, (주)피알앤디컴퍼니, 대표이사 박진우, Seocho address, Yongin showroom, Incheon tech bay), the www.heydealer.com meta description (11,000 dealers, 1-year warranty, 19-item history), and 매일경제, "폐업위기 중고車거래앱 규제 풀리자…누적거래 5천억 `승승장구`" (2018-07-16, via n.news.naver.com/mnews/article/009/0004185809): early-2015 founding, ₩30 billion in the first year, the January 2016 amendment and its revision.
- §3 licence: github.com/spoqa/spoqa-han-sans LICENSE (SIL Open Font License, Version 1.1).
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Primary button**
- Background: `#396eff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 24px
- Height: 56px on home, 52px on /sell
- Font: 15px / 700 / 22px Spoqa Han Sans Neo, tracking -0.195px
- States: rest only; no hover or pressed value was recorded
- Use: the count-and-보기 action under the car selects on home, 10초 만에 확인 on /sell

**Small outlined button**
- Background: transparent
- Text: `#0c0d11`
- Border: 1px solid `rgba(97, 113, 159, 0.16)`
- Radius: 4px
- Padding: 0px 12px
- Height: 40px
- Font: 13px / 400 / 18px Spoqa Han Sans Neo, tracking 0.078px
- Use: 판매과정 더 자세히 on /sell and its sibling on home

**Chat button**
- Background: `#ffffff`
- Text: `#0c0d11`
- Radius: 100px
- Padding: 8px 16px 8px 8px
- Height: 56px
- Shadow: `rgba(0, 0, 0, 0.12) 0px 2px 8px 0px`
- Use: 채팅 문의, floating on /market/cars

### Inputs & Selects

**Car select**
- Background: `rgba(97, 113, 159, 0.08)`
- Text: `#0c0d11`
- Border: 1px solid transparent
- Radius: 4px
- Padding: 16px 24px
- Height: 56px
- Font: 16px / 400 Spoqa Han Sans Neo
- Disabled: 차종 선택 and 모델 선택 stay disabled until a brand is chosen, with the same computed fill and text
- Use: 브랜드 전체, 차종 선택, 모델 선택 on home; 브랜드 전체 opens the brand menu

**Search trigger**
- Background: `rgba(97, 113, 159, 0.08)`
- Text: `#0c0d11`
- Radius: 4px
- Padding: 0px 16px
- Height: 52px
- Font: 16px / 400 Spoqa Han Sans Neo
- Use: 모델을 입력해주세요. in the header

**Switch**
- Background: `#000000`
- Text colour: `#f7f8fb`
- Radius: 16px
- Size: 30 × 18
- Use: the switch in the /market/cars filter bar

### Chips

**Filter chip**
- Background: transparent
- Text: `#0c0d11`
- Border: 1px solid `rgba(97, 113, 159, 0.16)`
- Radius: 4px
- Padding: 8px 12px
- Height: 36px
- Font: 16px / 400 Spoqa Han Sans Neo
- Use: 전체 필터, eye 인증, 할인 중, 연식, 주행거리, 가격 and the other filters on /market/cars

**Radio chip**
- Background: transparent
- Text: `#0c0d11`
- Border: 1px solid `rgba(97, 113, 159, 0.16)`
- Radius: 4px
- Padding: 8px 12px
- Height: 36px
- Checked: background `rgba(97, 113, 159, 0.08)` and a 1px solid `#000000` border
- Use: the role=radio chip row on home

### Navigation

**Header navigation**
- Background: transparent
- Text: `rgba(38, 55, 97, 0.6)`
- Radius: 4px
- Padding: 8px
- Height: 38px
- Font: 15px / 700 / 22px Spoqa Han Sans Neo, tracking -0.195px
- Selected: text `#0c0d11` on the current section
- Use: 내차사기, 내차팔기, 폐차 견적받기, 중고차 숨은 이력

**Brand menu**
- Background: `#ffffff`
- Radius: 4px
- Padding: 8px 0px 8px 8px
- Shadow: `rgba(0, 0, 0, 0.08) 0px 16px 20px 0px, rgba(0, 0, 0, 0.04) 0px 8px 16px 0px, rgba(0, 0, 0, 0.04) 0px 0px 8px 0px`
- Use: opened from 브랜드 전체, 240 × 429, with 224 × 38 items (8px 12px padding, 4px radius)

### Cards & Containers

**Sale-step card**
- Background: `#ffffff`
- Radius: 4px
- Size: 200 × 280
- Shadow: `rgba(0, 0, 0, 0.08) 0px 16px 20px 0px, rgba(0, 0, 0, 0.04) 0px 8px 16px 0px, rgba(0, 0, 0, 0.04) 0px 0px 8px 0px`
- Highlighted: background `#396eff`, text `#ffffff`, 24px padding
- Use: 집 앞, 방문 평가 / 48시간 경매 / 최고가에 판매결정 on /sell

**Review card**
- Background: `#ffffff`
- Border: 1px solid `rgba(97, 113, 159, 0.16)`
- Radius: 4px
- Padding: 16px
- Size: 304 × 256
- Shadow: `rgba(0, 0, 0, 0.03) 0px 4px 2px 0px`
- Use: 판매후기 on /sell

**Warranty banner**
- Background: `#101115`
- Radius: 4px
- Size: 248 × 100
- Use: 모든 차 1년 무료 보증 at the top of /market/cars

**FAQ row**
- Background: transparent
- Text: `#0c0d11`
- Padding: 12px 0px
- Height: 48px
- Font: 18.72px / 700, the browser's default h3 size
- Use: 자주 묻는 질문 on /sell

The listing cards on home (220 × 224 anchors) keep their text in children that were not captured; their anchor colour reads the browser default, so no card text colour is claimed.

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages of www.heydealer.com, logged out, plus first-party company pages and one Korean press article)
**Tier 1 sources:** https://www.heydealer.com/ ; https://www.heydealer.com/market/cars ; https://www.heydealer.com/sell ; https://www.prnd.co.kr/ko/home ; https://www.prnd.co.kr/ko/life ; https://www.heydealer.com/blog
**Tier 2 sources:** getdesign.md/heydealer (HTTP 200, the name does not appear on the page) and styles.refero.design/?q=heydealer (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (navigation)** | The current section's label is `#0c0d11`; the others are `rgba(38, 55, 97, 0.6)`. |
| **Checked (radio chip)** | Slate fill `rgba(97, 113, 159, 0.08)` with a 1px `#000000` border; unchecked chips are transparent with a 16% slate border. |
| **Disabled (selects)** | 차종 선택 and 모델 선택 are disabled until a brand is chosen; their computed fill and text match the enabled select. |
| **Expanded** | 브랜드 전체 opens a white brand menu with a three-layer shadow. |

No hover, pressed or focus frame was recorded for any control, so those treatments are unmeasured rather than absent. Error, empty, loading and success states were not captured and are not described.

## Do's and Don'ts

### Do
- Use `#396eff` for the one primary action in a view
- Set text in `#0c0d11` on white
- Group with `rgba(97, 113, 159, 0.08)` fills and `rgba(97, 113, 159, 0.16)` borders
- Keep controls at a 4px radius
- Use Spoqa Han Sans Neo Bold 700 for headings and navigation, Regular 400 for reading
- Track tight at 15px and above (`-0.195px` at 15px) and slightly open at 12–13px

### Don't
- Don't spread the blue to decoration or secondary actions
- Don't round controls into pills; only the chat button is one
- Don't put shadows on listing cards or chips
- Don't use a soft grey for body text
- Don't invent hover or pressed colours; none were recorded

## Voice & Tone

Heydealer's copy is plain, concrete and reassuring: it states guarantees and numbers instead of adjectives, and keeps actions short.

| Context | Tone |
|---|---|
| Page title | Scope in plain words. "헤이딜러 – 인증중고차 매매 사이트, 내차팔기, 중고차 시세조회". |
| Trust band | A reason, then the guarantees. "헤이딜러가 선별했으니까, 모든 차량 무사고", "1년 무료 보증", "단순변심 무료 환불". |
| Sell hero | A number and a promise. "최대 50개 견적, 최고가 그대로 내차팔기". |
| Actions | Short and time-bound: "10초 만에 확인", "판매과정 더 자세히", "채팅 문의". |
| Company | Direct questions about the market. "왜 중고차 거래는 항상 불안하지?" |

**Voice samples (verbatim, opened 2026-09-30):**
- "헤이딜러가 선별했으니까, 모든 차량 무사고" — trust band on home and /market/cars.
- "최대 50개 견적, 최고가 그대로 내차팔기" — /sell hero.
- "먼저 구매한 8,236명이 남긴 후기" — home review heading.
- "아무도 바꾸지 못한 중고차 시장을 혁신합니다" — prnd.co.kr careers site.

**Forbidden register**: dealership pressure, vague superlatives in place of guarantees, hidden conditions, exclamation-heavy promotion.

## Agent Prompt Guide

### Quick Color Reference
- Primary action: `#396eff`, label `#ffffff`
- Text: `#0c0d11`; strong headings `#000000`
- Page and cards: `#ffffff`; dark banner `#101115`
- Slate fill `rgba(97, 113, 159, 0.08)`; slate border `rgba(97, 113, 159, 0.16)`; inactive nav `rgba(38, 55, 97, 0.6)`

### Example Component Prompts
- "Create a Heydealer primary button: `#396eff` background, `#ffffff` 15px Spoqa Han Sans Neo Bold label with -0.195px tracking, 0 24px padding, 56px tall, 4px radius, no shadow."
- "Build a car select: `rgba(97, 113, 159, 0.08)` fill, `#0c0d11` 16px label, 16px 24px padding, 56px tall, 4px radius."
- "Make a filter chip row: transparent chips with a 1px `rgba(97, 113, 159, 0.16)` border, 8px 12px padding, 36px tall, 4px radius; a checked chip takes the slate fill and a 1px `#000000` border."
- "Create header navigation: 15px Bold labels in `rgba(38, 55, 97, 0.6)`, the current section in `#0c0d11`, 8px padding, 4px radius."

### Iteration Guide
1. One blue action per view, `#396eff`
2. `#0c0d11` text, white page
3. Slate 8% fills and 16% borders do the grouping
4. 4px everywhere; 100px only for the chat button
5. Spoqa Han Sans Neo Bold for structure, Regular for reading
6. Shadows only for floating things and the /sell cards

---

## Governance

### Known Gaps

- **Contrast, `primary-button`.** Text `#ffffff` on `#396eff` measures 4.33:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `select-button`.** Text `#0c0d11` on `#61719f14` measures 4.04:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-trigger`.** Text `#0c0d11` on `#61719f14` measures 4.04:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-button`.** Text `#26376199` on `#00000000` measures 1.80:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `filter-chip`.** Text `#0c0d11` on `#00000000` measures 1.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `radio-chip`.** Text `#0c0d11` on `#00000000` measures 1.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `outline-small-button`.** Text `#0c0d11` on `#00000000` measures 1.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `faq-row`.** Text `#0c0d11` on `#00000000` measures 1.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

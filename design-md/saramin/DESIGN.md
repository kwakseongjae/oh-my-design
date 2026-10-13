---
name: Saramin
colors:
  primary: '#2d67ff'
  selected: '#2d65f2'
  link-hover: '#4875ef'
  focus-ring: '#3157dd'
  focus-ring-list: '#003fe5'
  ink: '#292e41'
  label: '#373f57'
  slate: '#475067'
  muted: '#5c667b'
  muted-alt: '#67738e'
  charcoal: '#444444'
  white: '#ffffff'
  surface: '#f4f6fa'
  tint: '#eff5ff'
  selected-tint: '#f0f4ff'
  highlight: '#fff7d6'
  sky-tint: '#ebfaff'
  hairline: '#d7dce5'
  divider: '#eaedf4'
typography:
  page-title:
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.13
    use: 'List-page title (h1.title_common, e.g. 지역별), 36px line, in #444444'
  banner-title:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.42
    use: 'Banner headings on the list pages (h2.tit_banner), 34px line, in #292e41'
  segment-tab:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    use: The two segmented tabs above the region list (a.BtnType), 28px line
  card-title:
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.47
    use: 'Card titles in the home greeting panel (strong.card_title), 22px line, in #292e41'
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    use: 'Home job-card text (a.link_box) and home tag badges, 18px line, in #292e41'
  tab:
    fontSize: 14px
    fontWeight: 700
    use: 'Selected and hovered list-tab labels (지역별, 직업별), in #2d65f2; unselected labels are 14px / 400 in #5c667b'
  button-sm:
    fontSize: 13px
    fontWeight: 700
    use: 'Header 기업서비스 label, in #373f57'
  caption:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.38
    use: 'Card descriptions in the home greeting panel (p.card_desc), 18px line, in #67738e'
  meta:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    use: 'Posting meta lines on the list pages (location, career, education), 16px line, in #475067'
  badge:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 2
    use: Posting badges on the list pages, 24px line
rounded:
  tag: 4px
  overlay: 12px
  card: 16px
  button: 16px
  ai-pill: 20px
  circle: 20px
  search: 28px
spacing:
  badge-y: 2
  badge-x: 8
  button-x: 13
  tab-x: 16
  search-gap: 12
  card-pad: 24
components:
  search-field:
    type: button
    backgroundColor: transparent (on the white header)
    border: '2px solid #2d67ff'
    rounded: 28px
    height: 52px
    size: 554px x 52px
    focus: 'outline 2px solid #3157dd, offset 2px'
    states: 'probe on home: hover and pressed show no change across the field, its 4 descendants and 3 ancestor levels; transition all 0s'
    use: The keyword search field in the header of all three captured pages, labelled 공채는 역시, 사람인; it is a button that opens the search layer, with a 12px gap before the icon
  ai-search-button:
    type: button
    backgroundColor: linear-gradient(89deg, rgb(0, 161, 248) 0.78%, rgb(127, 56, 253) 99.22%)
    textColor: '#ffffff'
    rounded: 20px
    height: 40px
    typography: 14px / 700 / 20px Pretendard
    shadow: rgba(0, 161, 248, 0.3) 0px 0px 10px 0px
    focus: 'outline 2px solid #3157dd, offset 2px'
    states: 'hover and pressed are unmeasured: an animated gradient ::before layer never settled during the probe'
    use: AI 검색 beside the search field on all three pages, 86 x 40; it links to the AI career agent
  menu-button:
    type: button
    textColor: '#373f57'
    size: 60px x 40px
    hover: 'fg #2d67ff (label and both icons)'
    pressed: 'fg #2d67ff'
    focus: 'outline 2px solid #3157dd, offset 2px, radius 4px'
    states: hover and pressed settle at once (transition all 0s)
    use: 전체메뉴, the first button of the global navigation row on all three pages
  service-button:
    type: button
    backgroundColor: transparent
    textColor: '#373f57'
    border: '1px solid #d7dce5'
    rounded: 16px
    padding: 0px 13px
    height: 32px
    typography: 13px / 700 Pretendard
    hover: 'bg #f4f6fa'
    pressed: 'bg #f4f6fa'
    focus: 'outline 2px solid #3157dd, offset 2px'
    states: hover and pressed settle at once (transition all 0s)
    use: 기업서비스 in the header of all three pages, 98 x 32; bundle frames and the probe agree on the hover fill
  auth-link:
    type: button
    textColor: '#373f57'
    typography: 14px / 400 / 24px Pretendard
    hover: 'fg #4875ef'
    pressed: 'fg #4875ef'
    focus: 'outline 2px solid #3157dd, offset 2px, radius 4px'
    states: hover and pressed settle at once (transition all 0s); 회원가입 shows the same hover in bundle frames
    use: 로그인 and 회원가입 text links in the header; never followed
  carousel-arrow:
    type: button
    backgroundColor: '#ffffff'
    rounded: 20px
    size: 40px x 40px
    shadow: rgba(55, 63, 87, 0.13) 0px 6px 10px 0px
    focus: 'outline 2px solid #3157dd, offset 2px'
    states: hover and pressed show no change
    use: 다음 arrow of the home recruiting carousel, the one lifted control on the captured pages
  job-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px solid #d7dce5'
    rounded: 16px
    padding: 15px 23px
    size: 300px x 270px
    use: 'Home job cards (a.link_box): 82 of 111 carry this 1px #d7dce5 border'
  featured-job-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px solid #2d67ff'
    rounded: 16px
    padding: 23px
    size: 300px x 270px
    use: '28 of the 111 home job cards carry a 1px #2d67ff border instead; what distinguishes them was not established'
  posting-card:
    type: card
    border: '1px solid #d7dce5'
    rounded: 16px
    padding: 24px 24px 20px
    size: 404px x 208px
    use: Posting cards on both list pages (li.item, 16px radius, around a bordered link), also in a 300 x 230 variant
  greeting-link:
    type: card
    backgroundColor: '#f4f6fa'
    border: '1px solid #eaedf4'
    rounded: 16px
    padding: 17px 0px 17px 20px
    size: 296px x 60px
    hover: 'bg #ebfaff, border 1px solid rgba(2, 198, 255, 0.3)'
    states: hover read from settled bundle frames
    use: Tinted link rows in the home greeting panel (a.btn_greeting_link_my_siat)
  list-tab:
    type: tab
    textColor: '#5c667b'
    padding: 0px 16px
    height: 57px
    typography: 14px / 400 Pretendard
    selected: 'label #2d65f2 at 14px / 700 with a 2px #2d65f2 underline across the tab'
    hover: 'label #2d65f2 at weight 700'
    pressed: 'label #2d65f2 at weight 700'
    focus: 'outline 2px solid #003fe5, offset 2px, radius 4px'
    states: the selected tab shows no hover or pressed change; transition all 0s
    use: Sub-navigation of 채용정보 on the list pages (지역별, 직업별, 역세권별 and the rest), 68 x 57
  segment-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#475067'
    typography: 20px / 700 / 28px Pretendard
    size: 39px x 36px
    states: 'the first of the two tabs computes #475067 and the second #67738e; which one is selected is not recorded, and no pointer frame was read'
    use: Two-label segmented tabs above the region list on both list pages (a.BtnType)
  region-button:
    type: button
    textColor: '#292e41'
    height: 30px
    typography: 13px / 400 / 30px Pretendard
    selected: 'bg #f0f4ff on the current region (서울, the default)'
    focus: 'outline 2px solid #003fe5, offset 2px, radius 4px'
    states: 'hover and pressed are unmeasured: the pointer landed on the count span inside the button'
    use: Region rows in the list-page filter, each with a live posting count (서울 (62,552), 경기 (56,564))
  tag-badge:
    type: badge
    backgroundColor: '#eff5ff'
    textColor: '#292e41'
    rounded: 4px
    padding: 2px 8px
    height: 24px
    typography: 14px / 400 / 18px Pretendard
    use: Pale blue tags on home cards (38 instances)
  reward-badge:
    type: badge
    backgroundColor: '#fff7d6'
    textColor: '#292e41'
    rounded: 4px
    padding: 0px 6px
    height: 24px
    typography: 12px / 400 / 24px Pretendard
    use: Cream badges on list-page postings (span.badge.reward, 53 instances)
  meta-badge:
    type: badge
    backgroundColor: '#f4f6fa'
    textColor: '#475067'
    rounded: 4px
    padding: 0px 6px
    height: 24px
    typography: 12px / 400 / 24px Pretendard
    use: Grey badges on list-page postings (classes mActive, hot, invest, comInfo, welfare)
  overlay-badge:
    type: badge
    backgroundColor: rgba(0, 0, 0, 0.6)
    rounded: 12px
    padding: 2px 8px
    height: 24px
    use: Translucent dark badges laid over home card imagery (71 instances); their label sits in a child the collector did not record, so no label colour is declared
fonts:
  roles:
    body: Pretendard
---

# Design System Inspiration of Saramin

## Overview

### Visual Theme & Atmosphere

Saramin (사람인) is a Korean job platform — "대한민국 대표 커리어 플랫폼", in its own words — and the company behind it. Its corporate site describes the business as "사람중심의 기술로 사람과 기회를 연결하는 사람인" — connecting people and opportunities through people-centred technology — and lists what it runs today: the career platform Saramin itself, the developer hiring platform 점핏, the part-time matching app 동네알바, the senior hiring platform 원더풀시니어, the foreign-worker hiring service 코메이트 (KoMate), and recruitment outsourcing and consulting. It belongs to the Dau Kiwoom Group (다우키움그룹) and has a staffing and headhunting subsidiary, 사람인HS. The recent history on that page shows where the product is heading: KoMate in October 2024, an AI mock interview with an AI human in February 2025, a first non-hiring app (the dating app 비긴즈) in May 2025, and 원더풀시니어 in August 2025. Its 2026 news items are about AI agents — a "커리어 매칭 에이전트" in March 2026 and a renewed home for new graduates and interns.

The brand mark explains the colour story. Saramin's CI page says the logo's blue "I" stands for Individual, Intelligent and Interconnect, and gives the CI colours as BLUE `#4876EF` and GRAY `#404040`. The product surfaces, however, act in a brighter, more saturated blue. On saramin.co.kr the keyword search field is outlined in 2px `#2d67ff` on every captured page, 28 of the home job cards carry a `#2d67ff` border, and the global menu turns `#2d67ff` on hover. The list pages mark the selected sub-tab in `#2d65f2` with a 2px underline. Around that blue sits a dense, orderly portal: white cards with 16px corners and 1px `#d7dce5` borders, blue-black `#292e41` text, a grey ladder (`#373f57`, `#475067`, `#5c667b`, `#67738e`) for labels and metadata, and small 4px badges in pale blue `#eff5ff`, cream `#fff7d6` and grey `#f4f6fa`. AI features get their own treatment: the AI 검색 button is a sky-to-violet gradient pill with a cyan glow, the only glow on the page. Everything else is flat: 1,524 of the 1,528 recorded elements compute `box-shadow: none`.

**Key Characteristics:**
- A saturated action blue `#2d67ff` on the search field, highlighted cards and navigation hover; `#2d65f2` for the selected list tab
- The CI blue `#4876EF` appears in the product only as the 로그인 / 회원가입 hover `#4875ef`
- Pretendard throughout, self-hosted as subset files, at mostly 12–16px with weight 700 for scannable labels
- Blue-black ink `#292e41` and a four-step grey ladder for labels and metadata
- White 16px-radius cards with 1px `#d7dce5` borders; 4px tags; a 28px search pill and a 20px AI pill
- Authored focus rings on every probed control: 2px `#3157dd` on the home header, 2px `#003fe5` on the list pages
- Flat surfaces; the only shadows are the AI glow and one carousel arrow

### Primary tasks

- Search live postings by keyword from the header search field
- Filter postings by region and see how many are open there
- Compare companies and salaries before applying to a role
- Get postings recommended to fit you instead of every listing
- Post a role and screen the applicants who answer it

### Brand Narrative

Saramin's corporate introduction frames the company around two ideas: a people-centred philosophy (사람중심 철학) and artificial-intelligence technology. It says the company "leads the industry" on that basis, runs a family of hiring platforms (Saramin, 점핏, 동네알바, 원더풀시니어, 코메이트) and recruitment consulting, and aims to be the centre where people, companies and knowledge meet and grow. The corporate home puts it in three words: PEOPLE, INTELLIGENCE, CONNECT.

The CI carries the same idea. The page describes the logo as expressing "혁신과 가치의 창출, 선도 기업의 자신감", in a simple, curved Latin typeface, with the blue "I" for Individual, Intelligent and Interconnect — personalised, intelligent service that connects customers to a better tomorrow. The recent timeline turns that into products: KoMate for foreign workers (2024.10), a 민간 고용서비스 우수기관 award (2024.12), the AI mock interview with an AI human (2025.02), the dating app 비긴즈 (2025.05) and 원더풀시니어 (2025.08). Saramin also keeps a public engineering blog, 기술블로그, at saramin.github.io.

The culture page lists how people there work: agree before collaborating, give fast and specific feedback, argue hot and conclude cool, always use respectful language, think and decide from the user's side, solve before criticising. The website reads the same way: a dense portal kept calm by one action blue, blue-black text and bordered cards.

### Principles

1. **Match, don't just list.** The brand line promises fit. *UI implication:* AI recommendation and AI 검색 sit in the header on every page.
2. **Search first.** *UI implication:* the keyword search field is the widest control in the header and the one outlined in `#2d67ff`.
3. **Density with fences.** *UI implication:* many small items, each in a bordered 16px card or a 4px badge, so the page stays scannable. (An editorial reading of the captured pages, not a Saramin statement.)
4. **One blue means act or selected.** *UI implication:* `#2d67ff` and `#2d65f2` mark search, highlighted cards, hover and selection; greys carry everything else.
5. **People-centred.** "사람중심" is the company's stated philosophy. *UI implication:* plain labels, visible posting counts, and a focus ring on every control for keyboard users.

### Personas

*Personas below are fictional archetypes informed by publicly observable Saramin user segments (Korean job seekers and hiring teams), not individual people.*

**김민서, 26, 서울.** A new graduate scanning 신입·인턴 postings every morning. Uses the region filter and AI recommendations to cut the list down to roles that fit her major.

**이준호, 34, 경기.** A mid-career engineer quietly exploring a move. Reads 기업·연봉 and interview reviews before applying, and values a feed he can scan without it feeling like an ad wall.

**박지영, 41, 서울.** An HR manager posting roles and screening applicants through 기업서비스. Needs dense, reliable controls and clear keyboard focus.

## Colors

Every token below was read on 2026-09-30 from the logged-out home (saramin.co.kr/zf_user/) and two public job-list pages (지역별 and 직업별) by the deterministic collector, and states by the fixed keyboard probe. They describe Saramin's website; the Saramin app was not captured and none of its values is claimed.

### Primary
- **Action Blue** (`#2d67ff`): The 2px outline of the keyword search field in the header of all three captured pages (554 × 52, 28px radius), the 1px border of 28 of the 111 home job cards, and the hover and pressed colour of the 전체메뉴 button. It is the primary because searching is the portal's primary action, present on every page in this colour, and no captured control is filled with a different blue. There is no filled primary button on the captured pages: the list page's result-count search button (`#search_btn`) is not rendered until a filter is chosen, so it was not measured.
- **Selected Blue** (`#2d65f2`): The label and 2px underline of the selected list tab (지역별 on the region page), and the hover and pressed label of unselected list tabs.

### Interaction
- **Link Hover** (`#4875ef`): 로그인 and 회원가입 turn this colour on hover and press, one unit off the CI blue in the green channel.
- **Focus Ring** (`#3157dd`): A 2px solid outline, offset 2px, drawn on Tab by every probed control on the home header (search field, AI 검색, 전체메뉴, 기업서비스, 로그인, carousel arrow).
- **Focus Ring (list pages)** (`#003fe5`): The same 2px outline on the list-page tabs, region buttons and reset button.

### Text
- **Ink** (`#292e41`): Card titles, tags, badges and region labels.
- **Label** (`#373f57`): Header controls at rest — 기업서비스, 로그인, 회원가입, 전체메뉴.
- **Slate** (`#475067`): Posting meta lines on the list pages, grey badge labels and the first segmented tab.
- **Muted** (`#5c667b`): Unselected list-tab labels.
- **Muted Alt** (`#67738e`): Card descriptions in the home greeting panel and the second segmented tab.
- **Charcoal** (`#444444`): The list-page title (h1, 32px) and the list-tab anchors themselves.

### Surface & Borders
- **White** (`#ffffff`): Home job cards, the segmented tabs and the carousel arrow; the header is white.
- **Surface** (`#f4f6fa`): Grey badges, the greeting-panel link rows and the 기업서비스 hover fill.
- **Tint** (`#eff5ff`): Pale blue tags on home cards.
- **Selected Tint** (`#f0f4ff`): The selected region row in the list-page filter.
- **Highlight** (`#fff7d6`): Cream reward badges on list-page postings.
- **Sky Tint** (`#ebfaff`): The hover fill of the greeting-panel link rows, paired with a `rgba(2, 198, 255, 0.3)` border.
- **Hairline** (`#d7dce5`): Card borders and the 기업서비스 outline.
- **Divider** (`#eaedf4`): The greeting-link border; the header's 1px bottom line computes the same colour.

### Brand assets, not tokens
- **CI Blue** `#4876EF` (RGB 72/118/239, PANTONE 2727C) and **CI Gray** `#404040` are the logo colours given on Saramin's CI page. Neither renders as a fill, border or text colour in the captured product; the nearest rendered value is the `#4875ef` link hover.
- The AI 검색 gradient runs from `rgb(0, 161, 248)` to `rgb(127, 56, 253)`. It is a component fill, not a colour token.

## Typography

### Font Family
- **Live surface use**: `Pretendard` (1,528 observed uses), `loaded / high`, self-hosted by Saramin as subset WOFF2 files at `saraminimage.co.kr/sri/font/` (Pretendard-Bold, -SemiBold and -Regular). The body computes `Pretendard, "Malgun Gothic", dotum, gulim, sans-serif`; the later names are fallbacks and were not observed rendering.
- **Official distributed font assets**: Pretendard is an open-source Korean typeface by Kil Hyung-jin (orioncactus). Its LICENSE, opened on 2026-09-30, states the SIL Open Font License 1.1. The identification rests on the family and file names; the name tables of Saramin's subset files were not inspected.
- **Official product use**: no Saramin page opened this session names its typeface, so no statement of official product use is made.
- **Declared only (no visible use)**: `Roboto`, loaded from Google Fonts with 0 observed uses.
- **Unresolved**: none of the observed families is unidentified.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Observed on |
|------|------|------|--------|-------------|-------------|
| Page Title | Pretendard | 32px | 400 | 36px (1.13) | List-page h1, `#444444` |
| Banner Title | Pretendard | 24px | 700 | 34px (1.42) | List-page banner headings, `#292e41` |
| Segment Tab | Pretendard | 20px | 700 | 28px (1.4) | Segmented tabs above the region list |
| Card Title | Pretendard | 15px | 600 | 22px (1.47) | Home greeting-panel cards, `#292e41` |
| Body | Pretendard | 14px | 400 | 18px (1.29) | Home job cards and tags |
| Tab | Pretendard | 14px | 700 | — | Selected and hovered list tabs, `#2d65f2` |
| Button Small | Pretendard | 13px | 700 | — | 기업서비스 |
| Caption | Pretendard | 13px | 400 | 18px (1.38) | Greeting-panel descriptions, `#67738e` |
| Meta | Pretendard | 12px | 400 | 16px (1.33) | Posting meta lines, `#475067` |
| Badge | Pretendard | 12px | 400 | 24px (2.0) | Posting badges |

### Principles
- **One face, two weights for scanning**: reading text sits at 400; labels that must be found quickly (tabs, 기업서비스, the segmented tabs, banner titles) jump to 700. The list tabs switch weight as well as colour when selected or hovered.
- **Small and dense**: most text is 12–16px; the largest captured text is the 32px list title, set at a regular 400 weight rather than bold.
- **Tracking stays normal**: no captured text sets letter-spacing.

## Layout

### Spacing System
- Badges: 2px 8px (home tags) and 0 6px (list badges), 24px tall
- Header 기업서비스: 0 13px padding at 32px height
- List tabs: 0 16px padding at 57px height
- Posting cards: 24px 24px 20px; home job cards 15px 23px or 23px
- Search field: 12px gap between label and icon
- Frequent spacing values in the capture: 6, 24, 8, 2, 20 and 18px

### Grid & Container
- A fixed white header carries the search field, AI 검색, 로그인 / 회원가입, 기업서비스 and a global navigation row.
- Home stacks a recruiting carousel, a greeting panel of link rows, and grids of 300 × 270 job cards.
- The list pages open with the 채용정보 sub-tabs, a region filter with live counts, and a grid of posting cards.

### Whitespace Philosophy
- **Dense but fenced**: many small items, each held in a bordered 16px card or a 4px badge.
- **Flat grouping**: grey `#f4f6fa` and blue `#eff5ff` fills and `#d7dce5` hairlines separate content instead of shadows.

### Border Radius Scale
- 0px: the default (934 of the recorded radii)
- 4px: badges and tags
- 12px: overlay badges
- 16px: cards, greeting links and the 기업서비스 outline
- 20px: the AI 검색 pill and the carousel arrow
- 28px: the search field

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured, and saramin.co.kr serves a desktop layout at that width. No breakpoint was measured.

#### Touch Targets
- List tabs: 57px tall
- Search field: 52px
- AI 검색: 40px; carousel arrow 40 × 40
- 기업서비스: 32px
- Region buttons: 30px
- 로그인: 24px

#### Collapsing Strategy
Not captured; the mobile site was not inspected.

#### Image Behavior
- Card imagery carries translucent `rgba(0, 0, 0, 0.6)` overlay badges with 12px corners; images sit flat inside 16px cards.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | 1,524 of 1,528 recorded elements |
| Hairline | 1px solid `#d7dce5` | Cards and the 기업서비스 outline |
| Tint | `#f4f6fa`, `#eff5ff`, `#fff7d6` fills | Badges, greeting links, selected rows |
| Lift | `rgba(55, 63, 87, 0.13) 0px 6px 10px 0px` | The home carousel arrow |
| Glow | `rgba(0, 161, 248, 0.3) 0px 0px 10px 0px` | The AI 검색 button on every page |

**Shadow Philosophy**: Saramin is flat. The only shadows in the capture are the AI glow, which marks the one AI entry point, and the lift on a carousel arrow. Cards separate by border, not elevation.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.ai-glow`: `rgba(0, 161, 248, 0.3) 0px 0px 10px 0px`
- `shadow.arrow`: `rgba(55, 63, 87, 0.13) 0px 6px 10px 0px`

## Motion & Easing

Every probed Saramin control computes `transition: all 0s`, so its state changes are instant. The AI 검색 button carries an animated gradient `::before` layer that was still moving when the probe read it; its timing was not measured. No duration or easing is specified beyond these readings.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/saramin.json (capturedAt 2026-09-30T09:58:18Z), deterministic collector, 1440x900, logged out: saramin.co.kr/zf_user/, /zf_user/jobs/list/domestic, /zf_user/jobs/list/job-category. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/saramin-states-{home,domestic}.json.
- §1, §10, §11 context: www.saraminhr.co.kr (home, 회사소개 nd49828.do with history and CI, 기업문화 nd75950.do), saramin.github.io and the saramin.co.kr home copy, opened 2026-09-30.
- §3 licence: the Pretendard LICENSE on GitHub, opened 2026-09-30.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Header controls

**Keyword search field (primary)**
- Border: 2px solid `#2d67ff`
- Radius: 28px
- Size: 554 × 52px, 12px gap before the icon
- Focus: 2px solid `#3157dd` outline, offset 2px
- States: no hover or pressed change
- Use: 공채는 역시, 사람인 — opens the search layer on every page

**AI search button**
- Background: `linear-gradient(89deg, rgb(0, 161, 248) 0.78%, rgb(127, 56, 253) 99.22%)`
- Text: `#ffffff`
- Radius: 20px
- Height: 40px (86px wide)
- Font: 14px / 700 / 20px Pretendard
- Shadow: `rgba(0, 161, 248, 0.3) 0px 0px 10px 0px`
- Focus: 2px solid `#3157dd` outline, offset 2px
- States: hover and pressed unmeasured (animated gradient layer)

**Menu button (전체메뉴)**
- Text: `#373f57`
- Size: 60 × 40px
- Hover / pressed: text and icons `#2d67ff`
- Focus: 2px solid `#3157dd` outline, offset 2px, radius 4px

**Service button (기업서비스)**
- Background: transparent
- Text: `#373f57`
- Border: 1px solid `#d7dce5`
- Radius: 16px
- Padding: 0 13px
- Height: 32px
- Font: 13px / 700 Pretendard
- Hover / pressed: background `#f4f6fa`
- Focus: 2px solid `#3157dd` outline, offset 2px

**Auth links (로그인, 회원가입)**
- Text: `#373f57`
- Font: 14px / 400 / 24px Pretendard
- Hover / pressed: `#4875ef`
- Focus: 2px solid `#3157dd` outline, offset 2px, radius 4px

**Carousel arrow**
- Background: `#ffffff`
- Radius: 20px (40 × 40 circle)
- Shadow: `rgba(55, 63, 87, 0.13) 0px 6px 10px 0px`
- States: no hover or pressed change; focus ring `#3157dd`

### Cards

**Job card (home)**
- Background: `#ffffff`
- Border: 1px solid `#d7dce5`
- Radius: 16px
- Padding: 15px 23px
- Size: 300 × 270px

**Highlighted job card (home)**
- Background: `#ffffff`
- Border: 1px solid `#2d67ff`
- Radius: 16px
- Padding: 23px
- Use: 28 of the 111 home cards; what sets them apart was not established

**Posting card (list pages)**
- Border: 1px solid `#d7dce5`
- Radius: 16px
- Padding: 24px 24px 20px
- Size: 404 × 208px (also 300 × 230)

**Greeting-panel link**
- Background: `#f4f6fa`
- Border: 1px solid `#eaedf4`
- Radius: 16px
- Padding: 17px 0 17px 20px
- Hover: background `#ebfaff`, border `rgba(2, 198, 255, 0.3)`

### Tabs & Filters

**List tab (지역별, 직업별, …)**
- Text: `#5c667b`, 14px / 400
- Padding: 0 16px
- Height: 57px
- Selected: `#2d65f2` label at 700 with a 2px `#2d65f2` underline
- Hover / pressed: `#2d65f2` label at 700
- Focus: 2px solid `#003fe5` outline, offset 2px, radius 4px

**Segmented tab**
- Background: `#ffffff`
- Text: `#475067` (first) and `#67738e` (second)
- Font: 20px / 700 / 28px Pretendard

**Region button**
- Text: `#292e41`
- Height: 30px
- Font: 13px / 400 / 30px Pretendard
- Selected: background `#f0f4ff`
- Focus: 2px solid `#003fe5` outline, offset 2px
- States: hover and pressed unmeasured

### Badges

**Tag (home)**
- Background: `#eff5ff`
- Text: `#292e41`
- Radius: 4px
- Padding: 2px 8px
- Height: 24px
- Font: 14px / 400 / 18px Pretendard

**Reward badge (list pages)**
- Background: `#fff7d6`
- Text: `#292e41`
- Radius: 4px
- Padding: 0 6px
- Height: 24px
- Font: 12px / 400 / 24px Pretendard

**Meta badge (list pages)**
- Background: `#f4f6fa`
- Text: `#475067`
- Radius: 4px
- Padding: 0 6px
- Height: 24px
- Font: 12px / 400 / 24px Pretendard

**Overlay badge (home)**
- Background: `rgba(0, 0, 0, 0.6)`
- Radius: 12px
- Padding: 2px 8px
- Height: 24px

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of saramin.co.kr plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://www.saramin.co.kr/zf_user/ ; https://www.saramin.co.kr/zf_user/jobs/list/domestic ; https://www.saramin.co.kr/zf_user/jobs/list/job-category ; https://www.saraminhr.co.kr/user/nd49828.do ; https://saramin.github.io/
**Tier 2 sources:** getdesign.md/saramin (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=saramin (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (전체메뉴)** | Text and icons `#373f57` → `#2d67ff`, settled at once. |
| **Hover / pressed (기업서비스)** | Background transparent → `#f4f6fa`. |
| **Hover / pressed (로그인, 회원가입)** | Text `#373f57` → `#4875ef`. |
| **Hover / pressed (list tab)** | Label `#5c667b` 400 → `#2d65f2` 700; the selected tab does not change. |
| **Hover (greeting link)** | Background `#f4f6fa` → `#ebfaff`, border → `rgba(2, 198, 255, 0.3)` (bundle frames). |
| **No change** | The search field and the carousel arrow show no hover or pressed change. |
| **Selected** | List tab `#2d65f2` with a 2px underline; region row `#f0f4ff`. |
| **Focus** | 2px solid outline, offset 2px: `#3157dd` on the home header controls, `#003fe5` on the list pages; several controls also round to 4px. |

The AI 검색 button's hover and pressed states and the region buttons' hover are unmeasured, not absent. Error, empty, loading and success states were not captured and are not described.

## Do's and Don'ts

### Do
- Outline the primary search in 2px `#2d67ff` and use the same blue for navigation hover
- Mark the selected tab with a `#2d65f2` label at weight 700 and a 2px underline
- Keep text in `#292e41` and step down through `#373f57`, `#475067`, `#5c667b` and `#67738e`
- Hold content in white 16px cards with 1px `#d7dce5` borders
- Use 4px badges in `#eff5ff`, `#fff7d6` or `#f4f6fa`
- Draw a 2px offset focus ring on every control

### Don't
- Don't add card shadows; none of the captured cards has one
- Don't use the CI blue `#4876EF` as a fill; the product never does
- Don't give AI's gradient and glow to ordinary actions; only AI 검색 carries them
- Don't set the list title in bold; it is 32px at weight 400
- Don't render Pretendard with a system face in its place
- Don't use letter-spacing; no captured text sets it

## Voice & Tone

Saramin's voice is **practical, encouraging and matchmaking-framed**: it promises the job that fits you rather than a pile of listings, and states its scale as reassurance. Copy is short and concrete; navigation and tool names are plain nouns.

| Context | Tone |
|---|---|
| Brand line | Personal, matchmaking-framed. "나에게 딱 맞는 커리어만 매치, 사람인!" |
| Search prompt | Confident, one line. "공채는 역시, 사람인" |
| Promise | Concrete. "취업 준비, 여기서 다 끝낼 수 있어요" |
| Scale | Calm reassurance. "1,700만명이 선택한 사람인" |
| Navigation | Plain nouns. "채용정보", "기업·연봉", "커뮤니티", "취업 자료" |
| AI features | Direct, benefit-first. "서류전형, AI와 합격하세요", "내게 딱 맞는 공고만 보세요" |

**Voice samples (verbatim, opened 2026-09-30):**
- "나에게 딱 맞는 커리어만 매치, 사람인! | 취업, 채용, 커리어 매칭 플랫폼" — home page title.
- "공채는 역시, 사람인" — the header search field label.
- "취업 준비, 여기서 다 끝낼 수 있어요" and "1,700만명이 선택한 사람인" — home copy.
- "나에게 딱 맞는 커리어만 매치! 사람인에서 새로운 기회를 제안 받고 기업정보, 연봉정보, 면접후기 등 취업, 채용에 꼭 필요한 정보를 확인해보세요." — home og:description.
- "사람중심의 기술로 사람과 기회를 연결하는 사람인" — corporate 회사소개 page.

**Forbidden register**: pressure on applicants, unsupported fear of missing out, undefined recruiting jargon, stacked exclamation marks.

## Agent Prompt Guide

### Quick Color Reference
- Primary outline / nav hover: `#2d67ff`; selected tab `#2d65f2`
- Focus rings: `#3157dd` (header), `#003fe5` (list pages)
- Link hover: `#4875ef`
- Text: `#292e41`, `#373f57`, `#475067`, `#5c667b`, `#67738e`, `#444444`
- Surfaces: `#ffffff`, `#f4f6fa`, `#eff5ff`, `#f0f4ff`, `#fff7d6`, `#ebfaff`
- Borders: `#d7dce5`, `#eaedf4`

### Example Component Prompts
- "Create a header search field: transparent background on white, 2px solid `#2d67ff` border, 28px radius, 554 × 52, placeholder copy on the left and a search icon 12px after it; on focus draw a 2px solid `#3157dd` outline offset 2px."
- "Create list tabs: 14px Pretendard labels in `#5c667b`, 0 16px padding, 57px tall; the selected tab's label is `#2d65f2` at weight 700 with a 2px `#2d65f2` underline, and hovering an unselected tab does the same."
- "Build a posting card: 1px solid `#d7dce5` border, 16px radius, 24px 24px 20px padding, title in `#292e41`, a meta line in 12px `#475067`, and 4px-radius badges in `#fff7d6` or `#f4f6fa`."
- "Create an AI button: gradient from rgb(0, 161, 248) to rgb(127, 56, 253) at 89deg, white 14px / 700 label, 20px radius, 40px tall, glow `rgba(0, 161, 248, 0.3) 0 0 10px`."

### Iteration Guide
1. `#2d67ff` for the primary search and navigation hover; `#2d65f2` for selection
2. Pretendard only; 400 for reading, 700 for labels that must be scanned
3. White 16px cards with `#d7dce5` hairlines; 4px badges
4. Blue-black `#292e41` text and a grey ladder, never pure black for labels
5. Flat surfaces; the glow belongs to AI alone
6. A 2px offset focus ring on every control

---

## Governance

### Known Gaps

- **Contrast, `service-button`.** Text `#373f57` on `#00000000` measures 2.01:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

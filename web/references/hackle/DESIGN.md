---
name: Hackle
colors:
  primary: '#2962ff'
  on-primary: '#ffffff'
  primary-hover: '#1c44b2'
  hero-blue: '#0065ff'
  calculator-blue: '#005ff5'
  soft-blue: '#9ebaf4'
  table-tint: '#ebf1f7'
  table-highlight: '#b3d4ff'
  heading: '#000000'
  ink: '#151618'
  dark-hover: '#2c2d30'
  navy-ink: '#1e293b'
  graphite: '#2d2d2d'
  charcoal: '#424242'
  muted: '#5b6577'
  eyebrow: '#a3a3a3'
  grey: '#8e8e8e'
  canvas: '#fafafa'
  white: '#ffffff'
  hairline: '#e0e0e0'
  divider: '#ededed'
typography:
  display-hero:
    fontSize: 46px
    fontWeight: 700
    lineHeight: 1.52
    letterSpacing: '-1.84px'
    use: 'Home hero headline (AI와 데이터로 이끄는 성장 / 올인원 AI 그로스 플랫폼 핵클), 70px line, #000000; computes to the ui-sans-serif system stack, not a brand face'
  section:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.5
    use: 'Home section heading (앞서가는 기업들은 이미 핵클의 고객사입니다.), 54px line, #000000, system stack'
  section-kr:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: '-1px'
    use: Home section headings set in Pretendard (데이터 기반으로 성장할 수 있는 방법을 확인해 보세요), 43.2px line
  subsection:
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: '-0.26px'
    use: Home integration heading (웹, 앱, 서버 상관없이 5분이면 사용 가능), Pretendard, 31.2px line
  service-title:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: '-1px'
    use: A/B test page and pricing section headings, Pretendard, 48px line, in rgba(0, 0, 0, 0.87)
  service-banner:
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: '-1px'
    use: 'Blue banner heading on the A/B test page, Pretendard, 57.6px line, #2962ff'
  feature-title:
    fontSize: 35px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: '-1px'
    use: 'Feature headings on the A/B test page, 49px line, #0065ff, system stack'
  page-title:
    fontSize: 50px
    fontWeight: 700
    lineHeight: 1.5
    use: Title at the top of the pricing page, Pretendard, 75px line, in rgba(0, 0, 0, 0.87)
  eyebrow:
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.5
    use: 'Grey kicker above home section headings, 36px line, #a3a3a3'
  lead:
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: '-1px'
    use: Definition paragraph under A/B 테스트란?, Pretendard, 38.4px line
  faq-question:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    use: FAQ question rows on the pricing page (자주 묻는 질문), Pretendard, 30px line
  button-start:
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.75
    use: A/B 테스트 시작하기 label, Pretendard, 35px line
  button-lg:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.5
    use: Home hero CTA labels (데모 둘러보기, 상담 신청하기), 27px line, system stack
  button:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.75
    use: Header 데모 둘러보기, pricing buttons and tool chips, Pretendard, 24.5px line
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Document default and navigation, 24px line, rgba(0, 0, 0, 0.87), system stack
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: Footer legal links, 18px line, rgba(0, 0, 0, 0.3), system stack
rounded:
  button: 4px
  chip: 5px
  cta: 8px
  card: 8px
  tile: 10px
  link: 10px
  toggle: 36px
spacing:
  cta-y: 12
  cta-x: 32
  button-y: 6
  button-x: 16
  chip-x: 24
  card-pad: 24
  row-y: 24
  row-x: 27
  cell-y: 15
  cell-x: 16
components:
  header-demo-button:
    type: button
    backgroundColor: '#2962ff'
    textColor: '#ffffff'
    rounded: 8px
    padding: 6px 16px
    height: 38px
    typography: 14px / 500 / 24.5px Pretendard
    hover: 'bg #1c44b2'
    pressed: 'bg #1c44b2'
    states: 'probe on /ko/pricing/: hover and pressed settle on #1c44b2 after a 0.25s cubic-bezier(0.4, 0, 0.2, 1) transition; keyboard focus (Tab #7) only adds the MUI ripple layers, no visible change, so no focus value is declared'
    use: 데모 둘러보기 in the fixed header of all three captured pages (capture 6 on each), 109 x 38; the site's persistent primary action
  contained-button:
    type: button
    backgroundColor: '#2962ff'
    textColor: '#ffffff'
    rounded: 4px
    padding: 6px 16px
    height: 39px
    typography: 14px / 500 / 24.5px Pretendard
    shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px
    hover: 'bg #1c44b2; shadow rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px'
    pressed: 'bg #1c44b2; shadow rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px'
    states: 'probe on /ko/pricing/ (카드 등록하고 바로 사용하기, 문의하기): hover and pressed settle on #1c44b2 with a deeper shadow; keyboard focus (Tab #8, #9) raises the shadow to rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px with no colour change'
    use: Plan buttons on the pricing page at surface-3::[data-omd-capture="7"] (234 x 39) and capture 8 (94 x 39)
  start-button:
    type: button
    backgroundColor: '#2962ff'
    textColor: '#ffffff'
    rounded: 8px
    padding: 12px 20px
    height: 59px
    typography: 20px / 500 / 35px Pretendard
    hover: 'bg #1c44b2'
    pressed: 'bg #1c44b2'
    states: 'probe on /ko/service/ab-test/: hover and pressed settle on #1c44b2 with the same shadow rise as the pricing buttons; keyboard focus (Tab #9) changes only the shadow'
    use: A/B 테스트 시작하기 at the top of the A/B test page, surface-2::[data-omd-capture="8"], 207 x 59
  hero-cta:
    type: button
    backgroundColor: '#0065ff'
    textColor: '#ffffff'
    rounded: 8px
    padding: 12px 32px
    height: 53px
    typography: 18px / 700 / 27px system stack
    hover: 'bg #0065ff at 90% alpha'
    pressed: 'bg #0065ff at 90% alpha'
    states: 'probe on home: hover and pressed settle on oklab(0.561563 -0.038043 -0.238921 / 0.9), the hero blue at 90% alpha, after a 0.15s transition; keyboard focus (Tab #8) draws only the browser''s default ring, so no focus value is declared'
    use: 데모 둘러보기 under the home hero, home::[data-omd-capture="7"], 162 x 53
  hero-outline-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0065ff'
    border: '1px solid #0065ff'
    rounded: 8px
    padding: 12px 32px
    height: 53px
    typography: 18px / 700 / 27px system stack
    states: 'probe on home: hover and pressed show no change across the button and three ancestor levels; keyboard focus draws only the browser''s default ring'
    use: 상담 신청하기 beside the hero CTA, home::[data-omd-capture="8"], 164 x 53
  dark-chip:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 5px
    padding: 0px 24px
    height: 44px
    typography: 14px / 500 / 24.5px Pretendard
    hover: 'bg #2c2d30'
    pressed: 'bg #2c2d30'
    states: 'probe on home: hover and pressed settle on #2c2d30; keyboard focus (Tab #10) only adds ripple layers'
    use: 간편발송 바로가기 in the home Simple Send band, home::[data-omd-capture="9"], 189 x 44
  white-chip:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#151618'
    rounded: 5px
    padding: 10px 20px
    height: 44px
    typography: 14px / 500 / 24.5px Pretendard
    hover: 'bg rgba(255, 255, 255, 0.9), fg #000000'
    pressed: 'bg rgba(255, 255, 255, 0.9), fg #000000'
    states: 'probe on home (가이드북 다운받기): hover and pressed turn the fill 90% white and the label and icon #000000; the focus read changed only the chip''s width, so no focus value is declared'
    use: Guide and template chips on the home resource tiles, home::[data-omd-capture="10"] to 13, 226 x 44
  outline-chip:
    type: button
    backgroundColor: transparent
    textColor: '#151618'
    border: '1px solid #151618'
    rounded: 5px
    padding: 5px 15px
    height: 40px
    typography: 16px / 700 / 28px Pretendard
    hover: 'bg rgba(21, 22, 24, 0.04), fg and border #000000'
    pressed: 'bg rgba(21, 22, 24, 0.04), fg and border #000000'
    states: 'probe on home: hover and pressed add a 4% ink wash and turn label and border #000000; keyboard focus (Tab #15) only adds ripple layers'
    use: 연동 가이드 보기 under the integration heading, home::[data-omd-capture="14"], 138 x 40
  dashboard-button:
    type: button
    backgroundColor: '#151618'
    textColor: '#ffffff'
    rounded: 4px
    padding: 6px 16px
    height: 33px
    typography: 14px / 500 / 24.5px Pretendard
    hover: 'bg #2c2d30'
    pressed: 'bg #2c2d30'
    states: 'probe on home: hover and pressed settle on #2c2d30; keyboard focus (Tab #17) no change'
    use: 대시보드 둘러보기 in the closing home band, home::[data-omd-capture="16"], 157 x 33
  calculator-link:
    type: button
    backgroundColor: '#005ff5'
    textColor: '#ffffff'
    rounded: 10px
    padding: 12px 24px
    height: 47px
    typography: 15px / 700 / 22.5px system stack
    hover: opacity 0.9
    pressed: opacity 0.9
    states: 'probe on /ko/service/ab-test/: hover and pressed settle at opacity 0.9 after a 0.15s opacity transition; keyboard focus (Tab #10) draws only the browser''s default ring'
    use: 무료 A/B 테스트 계산기 사용하기 → on the A/B test page, surface-2::[data-omd-capture="9"], 264 x 47
  mode-toggle:
    type: tab
    backgroundColor: transparent
    rounded: 36px
    padding: 0px 8px
    height: 48px
    selected: 'bg #2962ff'
    states: selected and unselected read from rest values of the pair (captures 10 and 11); the labels sit in children the collector did not record, so no label colour is declared; no pointer frame
    use: Two-way example switch under 어떤 A/B 테스트를 해볼 수 있을까요? on the A/B test page, 177 x 48 each
  nav-link:
    type: tab
    textColor: '#000000'
    height: 72px
    typography: 16px / 400 / 24px system stack
    states: rest only on all three pages; no pointer frame or probe
    use: Header navigation items (captures 1 to 5 on each page), 72px tall row
  pricing-table-header:
    type: card
    backgroundColor: '#0065ff'
    textColor: '#ffffff'
    border: '1px solid #e0e0e0'
    padding: 25px 16px
    height: 75px
    typography: 18px / 600 / 24px Pretendard (20px on the first column)
    use: Header row of the plan comparison table on the pricing page, surface-3::tr and surface-3::th
  pricing-table-row:
    type: card
    backgroundColor: '#ebf1f7'
    border: '1px solid #e0e0e0'
    padding: 15px 16px
    height: 60px
    typography: 20px / 700 / 28.6px Pretendard for group rows; 18px / 400 / 25.74px for cells
    use: 'Group rows of the comparison table in #ebf1f7; highlighted rows in #b3d4ff; plain rows transparent with a #e0e0e0 bottom border'
  faq-row:
    type: card
    border: '1px solid #ededed (top)'
    padding: 24px 27px
    height: 79px
    states: 11 rows captured at rest; none was opened
    use: Rows under 자주 묻는 질문 on the pricing page, surface-3::[data-omd-capture="9"] to 19, 1248 wide
  solution-card:
    type: card
    backgroundColor: rgba(0, 0, 0, 0.87)
    rounded: 8px
    padding: 24px
    height: 375px
    use: Four dark team cards under 팀 별로 필요한 모든 것을 하나의 대시보드에서 on home, 285 x 375
  feature-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 10px
    height: 360px
    use: 'Three white cards under 데이터 기반으로 성장할 수 있는 방법을 확인해 보세요 on home, 353 x 360, each opening on a #9ebaf4 panel 206px tall'
fonts:
  roles:
    body: Pretendard
---

# Design System Inspiration of Hackle

## Overview

### Visual Theme & Atmosphere

Hackle (핵클) is a Seoul company — 핵클 주식회사, 서울시 서초구 강남대로 241 in its own footer — that sells what its home page title calls an "올인원 AI 그로스 플랫폼": experimentation, feature flags, product analytics and CRM messaging on one dashboard. Its careers page tells the origin plainly: a tech startup built around twelve software veterans from Coupang, making the kind of growth-optimisation platform "구글, 아마존, 쿠팡 등 빅테크 회사가 활용하는", now serving more than 200 customers (SKT, CJ올리브영, 현대카드, 신한라이프, 교보생명, 여기어때, 티빙 among them). The same page says Hackle became Korea's best-known A/B testing platform within a year of founding and grows more than 2× a quarter, and it lists a 아기유니콘 selection among its press items. The evolution is visible in the product line: what started as an A/B testing tool now lists CRM 마케팅, 간편발송 (alimtalk, SMS and brand messages without setup), 데이터 분석 and 기능 관리 on its blog's product rail, and the site now carries a `/ko/mcp/` page whose title names Claude.

The marketing site looks like the console it sells. An off-white `#fafafa` canvas carries black headlines and Material UI's black-alpha text ladder (`rgba(0, 0, 0, 0.87)` for copy, `0.6` for footer links, `0.3` for legal links). The persuading is done by blue, in three shades with separate jobs: the MUI contained-button blue `#2962ff` on every page's header action and in-page buttons, a brighter `#0065ff` for the home hero CTA, the pricing table header and feature headings, and a `#005ff5` calculator link. Secondary actions are flat 5px chips in black `#000000`, ink `#151618` or white.

**Key Characteristics:**
- `#2962ff` is the working action colour: header 데모 둘러보기 on all three pages, the pricing buttons and A/B 테스트 시작하기, all settling on `#1c44b2` on hover
- A brighter `#0065ff` for the home hero pair, the pricing table header row and the A/B test feature headings
- Material UI chrome: black-alpha text ladder, 4px contained buttons with MUI's resting elevation that deepens on hover, press and keyboard focus
- Flat 5px chips in `#000000`, `#151618` and `#ffffff`; 8px on the large calls-to-action, 10px on cards and the calculator link, 36px on the example switch
- Headlines at weight 700 with -1px tracking; Pretendard for most Korean copy and every button, the system sans stack for the hero and body
- Separation by `#fafafa` canvas, `#ebf1f7` / `#b3d4ff` table tints and `#e0e0e0` / `#ededed` rules

### Primary tasks

- Explore the demo dashboard before talking to sales.
- Request a consultation.
- Register a card and start a paid plan from the pricing page.
- Start an A/B test and size it with the free sample-size calculator.
- Read the integration guide and connect the SDK.

### Brand Narrative

Hackle's careers page frames the company's reason to exist as a question — how will companies that decide with data differ from those that go on instinct — and its answer is a platform that lets more companies find "성장의 단서" in data and grow in the fastest, safest way. The team started from twelve Coupang engineers who had built this tooling inside a big-tech company and set out to sell it as SaaS; within a year Hackle says it had become Korea's representative A/B testing platform, and it now reports 200+ customers, 500억+ 건 of cumulative traffic processed and 2× quarterly growth.

The product has widened from experimentation into a growth suite. The blog's product rail lists CRM 마케팅 ("고객 행동에 맞춘 개인화 마케팅"), 간편발송 ("알림톡·문자·브랜드 메시지를 별도 설정 없이 바로"), A/B 테스트, 데이터 분석 and 기능 관리; the home footer adds 원격 구성 and 기능 플래그, and the site now carries a `/ko/mcp/` page whose title names Claude. The documentation lives at docs.hackle.io ("핵클 사용 가이드"), and the company runs a private community of about 1,000 IT practitioners and a newsletter.

The design follows that positioning: a Material UI base that feels like the dashboard behind it, a standing blue action on every page, and flat black and white chips for the secondary paths into guides, templates and Simple Send.

### Principles

The careers page lists how the team works; the UI implications below are editorial readings.

1. **Data over instinct.** *UI implication:* lead with measurable claims and numbers (5분, 200+), not adjectives.
2. **One standing action.** *UI implication:* the header 데모 둘러보기 in `#2962ff` never leaves the page.
3. **Speed to value.** *UI implication:* the integration message ("5분") gets its own band and an outlined guide chip.
4. **Responsible freedom** ("책임있는 규칙없음을 지향해요" on the careers page). *UI implication:* a familiar MUI base with few custom rules layered on top.

### Personas

*Fictional archetypes informed by the customer types Hackle names publicly; not real people.*

**박지훈, 32, 서울.** A product engineer adding the SDK to a mobile app; wants the five-minute setup the home page promises and reads the integration guide first.

**이서연, 29, 경기.** A growth marketer running A/B tests and 간편발송 campaigns; uses the templates and the sample-size calculator.

**최민수, 38, 서울.** A PM at a large customer comparing plans on the pricing page before asking for a consultation.

## Colors

Every token below was read on 2026-09-30 from hackle.io/ko/, /ko/service/ab-test/ and /ko/pricing/ by the deterministic collector, and hover values by the fixed keyboard probe. The tokens describe Hackle's public marketing site; the Hackle dashboard and the docs site were not captured and none of their values is claimed.

### Primary
- **Hackle Action Blue** (`#2962ff`): The fill of 데모 둘러보기 in the fixed header of all three captured pages (109 × 38, capture 6 on each), of A/B 테스트 시작하기, of both pricing buttons (카드 등록하고 바로 사용하기, 문의하기) and of the selected half of the A/B test page's example switch; also the A/B test page's blue banner heading. It is the primary because it is the one action present on every page and the fill of every in-page contained button — five filled controls (seven instances) across three pages against one for the hero blue.
- **Primary Hover** (`#1c44b2`): Hover and pressed fill of every `#2962ff` button, settled after the 0.25s transition (probe on /ko/pricing/ and /ko/service/ab-test/). Bundle frames caught these mid-transition (`rgb(41, 98, 254)`, `rgb(38, 91, 238)`) and are not used.
- **On Primary** (`#ffffff`): Labels on all blue and black fills.

### Accent
- **Hero Blue** (`#0065ff`): The home hero CTA 데모 둘러보기 and the border and label of its partner 상담 신청하기, the header row of the pricing comparison table, feature headings on the A/B test page and a 30px / 700 label on the pricing page. Hover on the hero CTA settles on this blue at 90% alpha.
- **Calculator Blue** (`#005ff5`): The 무료 A/B 테스트 계산기 사용하기 link on the A/B test page, which dims to opacity 0.9 on hover.
- **Soft Blue** (`#9ebaf4`): The 206px illustration panel at the head of each white feature card on home.
- **Table Tint** (`#ebf1f7`) and **Table Highlight** (`#b3d4ff`): Group rows and highlighted rows of the pricing comparison table.

### Neutral & Surface
- **Canvas** (`#fafafa`): The body background of every captured page.
- **White** (`#ffffff`): Feature cards, the white chips and the outlined hero button.
- **Hairline** (`#e0e0e0`): Bottom border of every pricing table cell. **Divider** (`#ededed`): Top rule of each FAQ row.
- The four dark team cards on home fill with `rgba(0, 0, 0, 0.87)`, the text-ladder black used as a surface.

### Text
- **Heading** (`#000000`): Home hero and section headings, navigation labels.
- **Ink** (`#151618`): Labels of the white and outlined chips, fill of 대시보드 둘러보기; **Dark Hover** (`#2c2d30`) is the settled hover of that button and of the black 간편발송 chip.
- **Navy Ink** (`#1e293b`): a 24px / 700 line in the home band beside the 간편발송 chip. **Graphite** (`#2d2d2d`): 14px card copy on home. **Charcoal** (`#424242`): a 16px / 700 label on home paired with a white one of the same size.
- **Muted** (`#5b6577`): the 15px caption beside the calculator link on the A/B test page. **Eyebrow** (`#a3a3a3`): grey kickers above home section headings. **Grey** (`#8e8e8e`): a 14px note on the pricing page.
- Body copy uses Material's `rgba(0, 0, 0, 0.87)`; footer links `rgba(0, 0, 0, 0.6)`; legal links `rgba(0, 0, 0, 0.3)`. These alpha values are prose, not colour tokens.

## Typography

### Font Family
- **Pretendard** — live surface use, loaded from Hackle's own CDN (`cdn-homepage.hackle.io/157a1d25/_next/static/media/…woff2`, 280 observed uses): every button and chip, most Korean headings on the service and pricing pages, pricing table and FAQ copy. Licensed under the SIL Open Font License 1.1.
- **System sans stack** (`ui-sans-serif, system-ui, sans-serif`) — the computed family of the body, navigation, footer, the home hero headline, the first home section heading, the hero CTA labels and the A/B test feature headings (283 uses). It is an operating-system stack, not a brand face, so it is not a family token.
- **Montserrat** and **Poppins** are declared as `@font-face` on the Next.js build but no captured element renders in them; they are not claimed.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Where |
|------|------|------|--------|-------------|----------|-------|
| Display Hero | system stack | 46px | 700 | 70px | -1.84px | Home hero, `#000000` |
| Page Title | Pretendard | 50px | 700 | 75px | — | Top of the pricing page |
| Service Banner | Pretendard | 48px | 700 | 57.6px | -1px | A/B test blue banner, `#2962ff` |
| Service Title | Pretendard | 40px | 700 | 48px | -1px | A/B test and pricing sections |
| Section | system stack | 36px | 700 | 54px | — | Home customer-logo heading |
| Section (KR) | Pretendard | 36px | 700 | 43.2px | -1px | Home method heading |
| Feature Title | system stack | 35px | 700 | 49px | -1px | A/B test features, `#0065ff` |
| Subsection | Pretendard | 26px | 600 | 31.2px | -0.26px | Home integration heading |
| Eyebrow | system / Pretendard | 24px | 500 | 36px | — | Grey kickers, `#a3a3a3` |
| Lead | Pretendard | 24px | 400 | 38.4px | -1px | A/B 테스트란? paragraph |
| FAQ Question | Pretendard | 20px | 700 | 30px | — | Pricing FAQ |
| Start Button | Pretendard | 20px | 500 | 35px | — | A/B 테스트 시작하기 |
| Hero Button | system stack | 18px | 700 | 27px | — | Hero pair |
| Button | Pretendard | 14px | 500 | 24.5px | — | Header, pricing, chips |
| Body | system stack | 16px | 400 | 24px | — | Document default, nav |
| Caption | system stack | 12px | 400 | 18px | — | Footer legal links |

### Principles
- Weight 700 carries every headline; tracking tightens to -1px on the Pretendard headings and -1.84px on the hero.
- Buttons and chips are always Pretendard 14px / 500 except the hero pair (18px / 700) and the A/B test start button (20px / 500).
- The page mixes two families line by line: the system stack for the document default and several headings, Pretendard wherever a component sets it.

## Layout

### Spacing System
- Observed values only: hero pair 12px / 32px; contained buttons 6px / 16px; dark chip 0 / 24px; white chips 10px / 20px; solution cards 24px; FAQ rows 24px / 27px; table cells 15px / 16px, header cells 25px / 16px.

### Grid & Container
- Content sits in a 1200px column on home and 1248px on the A/B test and pricing pages at a 1440px viewport; the header is a 72px row.
- Home stacks full-width bands: hero, customer logos, the four dark team cards, method cards, Simple Send, resource tiles, integration, closing band.

### Whitespace Philosophy
- Long pages (6,325px home, 9,417px A/B test) with one idea per band; headings carry the rhythm rather than dividers.

### Border Radius Scale
- 4px contained buttons and the dashboard button · 5px chips · 8px header, hero and start buttons and dark cards · 10px feature cards and the calculator link · 36px example switch.

### Responsive Behavior

#### Breakpoints
Only a 1440 × 900 desktop viewport was captured; no breakpoint is claimed.

#### Touch Targets
- Hero pair 53px, start button 59px, chips 44px, calculator link 47px, pricing buttons 39px, header button 38px, dashboard button 33px.

#### Collapsing Strategy
Not measured.

#### Image Behavior
Not measured beyond the fixed 206px `#9ebaf4` panel at the head of each feature card.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Header button, hero pair, chips, cards, headings |
| Resting | MUI elevation 2 (`rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, …`) | Pricing buttons, A/B 테스트 시작하기 |
| Raised | Deeper MUI shadow on hover, focus and press | Same buttons |

Only the MUI contained buttons carry shadow; every other captured element is flat and separates by the `#fafafa` canvas, white or dark cards and table tints.

## Motion & Easing

Measured by the probe on 2026-09-30:

- MUI buttons and chips: `background-color, box-shadow, border-color, color 0.25s cubic-bezier(0.4, 0, 0.2, 1)`.
- Hero pair: `color, background-color, border-color, … 0.15s cubic-bezier(0.4, 0, 0.2, 1)`.
- Calculator link: `opacity 0.15s ease`.

No other duration or easing is claimed.

## Components

### Buttons

**Header Demo Button** — `#2962ff`, white label, 8px radius, 6px 16px, 38px tall, 14px / 500 Pretendard. Present in the fixed header of all three pages. Hover and pressed settle on `#1c44b2`. Keyboard focus adds only MUI ripple layers.

**Contained Button (pricing)** — `#2962ff`, white, 4px radius, 6px 16px, 39px, 14px / 500, with MUI's resting shadow `rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px`. Hover: `#1c44b2` and a deeper shadow; pressed: `#1c44b2` and the deepest shadow; keyboard focus: a mid shadow, no colour change.

**Start Button** — A/B 테스트 시작하기: `#2962ff`, 8px radius, 12px 20px, 59px, 20px / 500. Same hover and shadow behaviour.

**Hero CTA** — 데모 둘러보기 on home: `#0065ff`, white, 8px radius, 12px 32px, 53px, 18px / 700. Hover and pressed settle on the same blue at 90% alpha.

**Hero Outline Button** — 상담 신청하기: white fill, `#0065ff` label and 1px border, same geometry. The probe found no hover or pressed change.

**Dark Chip** — 간편발송 바로가기: `#000000`, white, 5px radius, 0 24px, 44px. Hover and pressed `#2c2d30`.

**White Chip** — 가이드북 다운받기, 가이드 보러가기, 템플릿으로 바로 만들기: white, `#151618` label, 5px, 10px 20px, 44px. Hover and pressed: fill 90% white, label and icon `#000000`.

**Outline Chip** — 연동 가이드 보기: transparent, `#151618` label and 1px border, 5px, 5px 15px, 40px, 16px / 700. Hover: a 4% ink wash, label and border `#000000`.

**Dashboard Button** — 대시보드 둘러보기: `#151618`, white, 4px, 6px 16px, 33px. Hover and pressed `#2c2d30`.

**Calculator Link** — `#005ff5`, white, 10px, 12px 24px, 47px, 15px / 700. Hover opacity 0.9.

### Tabs & Navigation

**Example Switch** — a pair of 177 × 48 pills with a 36px radius on the A/B test page; the selected one fills `#2962ff`, the other is transparent.

**Header Navigation** — five links in a 72px row, `#000000`, 16px / 400 on the system stack. No hover was measured.

### Tables & Rows

**Pricing Table** — header row `#0065ff` with white 18px / 600 Pretendard headers (20px in the first column), 25px 16px padding; group rows `#ebf1f7` at 20px / 700; highlighted rows `#b3d4ff`; cells 18px / 400 with 15px 16px padding and a `#e0e0e0` bottom border.

**FAQ Row** — 1248 × 79, 24px 27px padding, a `#ededed` top rule, question in 20px / 700 Pretendard.

### Cards

**Solution Card** — four dark cards (285 × 375, 8px radius, 24px padding) on home, filled `rgba(0, 0, 0, 0.87)`.

**Feature Card** — three white cards (353 × 360, 10px radius) on home, each opening on a `#9ebaf4` panel.

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out pages of hackle.io plus fixed keyboard-probe state reads and first-party context)
**Tier 1 sources:** https://hackle.io/ko/ ; https://hackle.io/ko/service/ab-test/ ; https://hackle.io/ko/pricing/ ; https://careers.hackle.io/ ; https://hackle.io/ko/blog/ ; https://docs.hackle.io/
**Tier 2 sources:** getdesign.md/hackle (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=hackle (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

| State | Observed treatment |
|---|---|
| Hover / pressed — blue buttons | `#2962ff` → `#1c44b2`; contained buttons also deepen their MUI shadow |
| Hover / pressed — hero CTA | `#0065ff` at 90% alpha |
| Hover / pressed — black fills | `#000000` or `#151618` → `#2c2d30` |
| Hover / pressed — white and outline chips | 90% white or a 4% ink wash; label `#000000` |
| Hover — calculator link | opacity 0.9 |
| Focus | MUI contained buttons raise their shadow; the hero CTA, outline button and calculator link show only the browser's default ring; the header button and chips show no visible change |
| Selected | Example switch: `#2962ff` fill on the selected pill |

Empty, loading, error and success states were not observable on logged-out marketing pages and are not claimed.

## Do's and Don'ts

### Do
- Use `#2962ff` for the page's standing action and every in-page filled button, with `#1c44b2` on hover
- Keep `#0065ff` for the hero pair, the pricing table header and blue feature headings
- Set buttons in Pretendard 14px / 500; headlines at 700 with -1px tracking
- Use 5px chips in `#000000`, `#151618` or white for secondary entries
- Let only the contained buttons carry the MUI shadow

### Don't
- Fold the three blues into one — they mark different kinds of action
- Put shadows on chips, cards or the header button
- Put the hero headline in a display face the site does not render
- Promote the black-alpha text ladder into opaque colour tokens

## Voice & Tone

Hackle writes like a growth consultant who also ships code: outcome first, then speed, then proof.

| Context | Tone |
|---|---|
| Hero | Outcome-framed. "AI와 데이터로 이끄는 성장 / 올인원 AI 그로스 플랫폼 핵클". |
| Features | Capability in one line. "팀 별로 필요한 모든 것을 하나의 대시보드에서". |
| Integration | Speed as the promise. "웹, 앱, 서버 상관없이 5분이면 사용 가능", "SDK 연동까지 단 5분!". |
| Proof | Customers named. "앞서가는 기업들은 이미 핵클의 고객사입니다.", "신뢰할 수 있는 핵클". |
| CTAs | Short verbs. "데모 둘러보기", "상담 신청하기", "A/B 테스트 시작하기", "카드 등록하고 바로 사용하기". |
| Blog | Practical, numbers-led. "A/B 테스트, 몇 명에게 며칠 동안 돌려야 할까요?". |

**Voice samples (verbatim, 2026-09-30):**
- "AI와 데이터로 이끄는 성장 올인원 AI 그로스 플랫폼 핵클" — home H1.
- "A/B 테스트를 통해 실패를 줄이고 안정적으로 성장할 수 있습니다" — A/B test page H2.
- "데이터를 기반으로 의사결정하는 기업과 감에만 의존하는 기업의 미래는 어떻게 다를까요?" — careers page.

**Forbidden register**: unmeasured superlatives, fear-based urgency, and talking down to developers.

## Agent Prompt Guide

### Quick Color Reference
- Action: `#2962ff` (hover `#1c44b2`) · Hero accent: `#0065ff` · Calculator: `#005ff5`
- Canvas `#fafafa` · White `#ffffff` · Heading `#000000` · Ink `#151618`
- Table tints `#ebf1f7`, `#b3d4ff` · Rules `#e0e0e0`, `#ededed` · Soft blue `#9ebaf4`

### Example Component Prompts
- "A fixed 72px header on #fafafa with black 16px nav links and a #2962ff 데모 둘러보기 button: 8px radius, 6px 16px, 14px / 500 Pretendard, white label, hover #1c44b2."
- "A hero with a 46px / 700 black headline at -1.84px tracking, then a #0065ff 53px CTA (8px radius, 12px 32px, 18px / 700) beside a white outline twin with a 1px #0065ff border."
- "A pricing table: #0065ff header row with white 18px / 600 headers, #ebf1f7 group rows, #e0e0e0 cell rules, and 4px #2962ff plan buttons with MUI's resting shadow."

### Iteration Guide
1. `#2962ff` is the standing action; `#0065ff` is the hero accent
2. Hover darkens `#2962ff` to `#1c44b2`; black fills go to `#2c2d30`
3. Chips are 5px, contained buttons 4px, large CTAs 8px, cards 8–10px
4. Pretendard for buttons; weight 700 and tight tracking for headlines
5. Shadow only on MUI contained buttons

---

## Governance

### Known Gaps

- **Contrast, `outline-chip`.** Text `#151618` on `#00000000` measures 1.16:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

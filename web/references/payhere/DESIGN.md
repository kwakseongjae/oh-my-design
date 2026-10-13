---
name: Payhere
colors:
  primary: '#0077fe'
  on-primary: '#ffffff'
  header-action: '#008cff'
  ink: '#000000'
  canvas: '#ffffff'
  navy: '#1c2638'
  deep-navy: '#101a2e'
  slate: '#2b3648'
  body-muted: '#5f6976'
  muted: '#919ba5'
  inactive: '#c1cad2'
  surface: '#f5f8fa'
  surface-alt: '#f4f8f9'
  line: '#e2e8ee'
  inverse: '#000000'
  selected-on-dark: '#33abff'
  night: '#0e1d40'
  badge-event: '#f96eae'
  badge-hot: '#ff5b46'
  badge-official: '#08d07e'
typography:
  display-xl:
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.39
    letterSpacing: '-1px'
    use: 'Feature headline on the table-order page (NaverPlace sub-section), #0e1d40'
  display:
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: '-1px'
    use: Terminal page hero title (h1) and the home dark-section title
  section:
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.41
    letterSpacing: '-1px'
    use: 'Section titles (SectionTitle h2); the #1c2638 variant keeps normal tracking'
  subsection:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-1px'
    use: Stand and hardware sub-titles (h3)
  title:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-1px'
    use: Scroll-slider titles and the 구입하기 → label
  card-title:
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.38
    letterSpacing: '-1px'
    use: Category selector labels and blue section descriptions
  card-heading:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-1px'
    use: Feature-card titles (#101a2e) and FAQ questions
  lead:
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-1px'
    use: Section description under the title on the terminal page (#2b3648)
  tab:
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: '-1px'
    use: Selected pill-tab label; unselected labels use weight 400
  body-lg:
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: '-0.5px'
    use: Feature-card description lines (#1c2638)
  button:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.5px'
    use: 자세히 보기 action label
  field:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Form inputs; they render in Arial because they do not inherit Noto Sans KR
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
    use: Document default on body (computed 16px line height)
  badge:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.5px'
    use: Category badges (BEST, EVENT, HOT)
  menu:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.86
    letterSpacing: '-1px'
    use: Footer category menu links (#c1cad2)
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.83
    letterSpacing: '-1px'
    use: Footer legal and external links
rounded:
  header: 5px
  field: 8px
  action: 12px
  float: 16px
  card: 24px
  pill: 30px
  badge: 50px
  capsule: 100px
spacing:
  header-x: 16
  pill-y: 12
  pill-x: 24
  field: 12
  card: 32
  contact-card: 48
components:
  purchase-button:
    type: button
    backgroundColor: '#0077fe'
    textColor: '#ffffff'
    rounded: 0px 0px 24px 24px
    padding: 24px 0px
    height: 96px
    width: 586px
    typography: 32px / 700 / 48px Noto Sans KR, letter-spacing -1px
    states: rest only; not probed
    use: 구입하기 → closing the two hardware cards on the home (capture 26)
  detail-button:
    type: button
    backgroundColor: '#0077fe'
    textColor: '#ffffff'
    rounded: 12px
    padding: 16px
    height: 50px
    width: 334px
    typography: 18px / 700 / 18px Noto Sans KR, letter-spacing -0.5px
    states: rest only; not probed
    use: 자세히 보기 under the three feature cards on the home (capture 32)
  header-button:
    type: button
    backgroundColor: '#008cff'
    textColor: '#ffffff'
    rounded: 5px
    padding: 0px 16px
    height: 40px
    typography: 16px / 700 / 16px Noto Sans KR
    hover: no change within the compared scope (self and three ancestor levels; transition 0s) (probe)
    pressed: no change within the compared scope (probe)
    use: 카드 단말기 in the header of all three pages; links to /hardware/
  header-outline-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#008cff'
    rounded: 5px
    padding: 0px 16px
    height: 40px
    typography: 16px / 700 / 16px Noto Sans KR
    shadow: rgb(0, 140, 255) 0px 0px 0px 1px inset
    hover: no change within the compared scope (probe)
    pressed: no change within the compared scope (probe)
    use: 테이블 오더 in the header of all three pages; links to /table-order/
  header-text-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1c2638'
    rounded: 5px
    padding: 0px 12px
    height: 40px
    typography: 16px / 700 / 16px Noto Sans KR (label span)
    states: rest only; not probed
    use: The text link at the left of the two header buttons (로그인)
  pill-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#5f6976'
    rounded: 30px
    padding: 12px 24px
    height: 56px
    typography: 20px / 400 / 32px Noto Sans KR, letter-spacing -1px (label span)
    selected: 'bg #0077fe, label #ffffff at 20px / 700 (capture 13 on the home, 17 on table-order)'
    states: selected variant read from rest values (capture 13 against 14); no pointer frame
    use: 'Feature and industry pill tabs: NFC, 비대면 결제, 선불권 on the home; 한식 · 음식점 and others on table-order'
  toggle-tab:
    type: toggle
    backgroundColor: '#e2e8ee'
    textColor: '#5f6976'
    rounded: 30px
    padding: 12px 24px
    height: 56px
    typography: 20px / 400 / 32px Noto Sans KR (label span)
    selected: 'bg #ffffff, label #008cff at 20px / 700 (capture 32)'
    states: selected variant read from rest values (capture 32 against 33); no pointer frame
    use: 'POS-type and industry toggles in a #e2e8ee track (30px radius, 4px padding) on the terminal page'
  step-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#c1cad2'
    border: 'bottom 3px solid #c1cad2'
    padding: 16px 24px
    height: 67px
    typography: 20px / 700 / 32px Noto Sans KR, letter-spacing -1px
    selected: 'fg #0077fe with a 3px #0077fe bottom border (capture 40)'
    states: selected variant read from rest values (capture 40 against 41); no pointer frame
    use: The two onboarding steps on the terminal page (포스를 변경하려는 기존 사업자, 포스를 처음 사용하는 신규 사업자)
  category-card:
    type: card
    backgroundColor: '#f5f8fa'
    textColor: '#1c2638'
    rounded: 12px
    padding: 20px 0px
    height: 84px
    typography: 26px / 700 / 36px Noto Sans KR, letter-spacing -1px
    use: 카드 단말기, 테이블 오더, 키오스크 and 인터넷 패키지 selectors under the home hero (capture 9)
  category-badge:
    type: badge
    backgroundColor: '#0077fe'
    textColor: '#ffffff'
    rounded: 50px
    padding: 4px 8px 5px
    height: 25px
    typography: 16px / 700 / 16px Noto Sans KR, letter-spacing -0.5px
    use: 'BEST over a category card; EVENT uses #f96eae and HOT #ff5b46'
  hero-badge:
    type: badge
    backgroundColor: '#0077fe'
    textColor: '#ffffff'
    rounded: 50px
    padding: 8px 20px
    height: 44px
    typography: 18px / 700 / 28px Noto Sans KR, letter-spacing -0.5px
    use: 사장님 맞춤형 1:1 밀착 컨설팅 above the table-order hero title
  content-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px solid #c1cad2'
    rounded: 24px
    padding: 48px
    use: 'Contact cards near the foot of the home; hardware and pricing cards use a 1px #e2e8ee border at the same radius'
  price-card:
    type: card
    backgroundColor: '#ffffff'
    border: '1px solid #e2e8ee'
    rounded: 24px
    padding: 36px 24px
    shadow: rgba(0, 0, 0, 0.08) 0px 3px 15px 0px
    use: Free-price cards on the terminal page, 384 x 172
  text-field:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#101a2e'
    border: '1px solid #e2e8ee'
    rounded: 8px
    padding: 12px
    height: 48px
    typography: 16px / 400 / 24px Arial
    states: rest only; focus was not measured
    use: 'Consultation form fields on the home and table-order; the first option of the table-order form carries a 1px #008cff border'
  form-submit:
    type: button
    backgroundColor: '#919ba5'
    textColor: '#ffffff'
    rounded: 8px
    padding: 16px 0px
    height: 58px
    typography: 18px / 700 Noto Sans KR, letter-spacing -1px
    states: the fill observed on an empty form (the disabled attribute was false); the form was never filled, so no other fill was observed
    use: 도입 문의하기 and 동의하고 무료 상담 submit buttons
  pricing-cta:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 100px
    padding: 16px 32px
    height: 60px
    typography: 18px / 700 / 28px Noto Sans KR, letter-spacing -1px
    states: rest only
    use: 도입 비용 계산해보기 on the table-order page (capture 15)
  floating-cta:
    type: button
    backgroundColor: 'linear-gradient(290.64deg, #163bd8 6.63%, #3da7ff 107.33%)'
    textColor: '#ffffff'
    rounded: 50px
    height: 64px
    width: 384px
    shadow: rgba(0, 0, 0, 0.21) 0px 4px 12px 0px
    typography: 20px / 700 / 32px Noto Sans KR, letter-spacing -1px (label span)
    hover: no change within the compared scope (self, one descendant, three ancestor levels; transition 0s) (probe)
    pressed: no change within the compared scope (probe)
    use: 지금 25% 할인받기, floating at the foot of the terminal page; its fill is a background-image gradient, not a background colour
  floating-secondary:
    type: button
    backgroundColor: '#f5f8fa'
    textColor: '#0077fe'
    border: '1px solid #f5f8fa'
    rounded: 50px
    height: 64px
    width: 384px
    shadow: rgba(0, 0, 0, 0.21) 0px 4px 12px 0px
    hover: no change within the compared scope (probe)
    use: 올인원 카드 단말기 beside the floating CTA
  carousel-arrow:
    type: button
    backgroundColor: '#ffffff'
    border: '1px solid #c1cad2'
    rounded: 100%
    height: 48px
    width: 48px
    hover: 'border #111111; both arrows read the same value in their hover and pressed frames'
    pressed: 'border #111111'
    use: Seller-review carousel arrows on the terminal page (captures 6 and 7)
  floating-button:
    type: button
    backgroundColor: '#ffffff'
    rounded: 16px
    height: 80px
    width: 80px
    shadow: rgba(0, 0, 0, 0.21) 0px 4px 12px 0px
    states: rest only
    use: The chat floating button on every page; back-to-top on the home and the terminal page
  contact-card:
    type: card
    backgroundColor: '#0e1d40'
    textColor: '#ffffff'
    rounded: 24px
    padding: 64px 0px
    height: 205px
    width: 384px
    use: '채팅 상담 card on the terminal page; 전화 상담 and 희망일 상담 use #f5f8fa with #0c4a6e text'
  download-button:
    type: button
    backgroundColor: '#ffffff'
    border: '1px solid #919ba5'
    rounded: 8px
    height: 72px
    width: 241px
    states: rest only
    use: 'The four POS download buttons on the home (label 18px / 400 in #1c2638)'
fonts:
  roles:
    primary: Noto Sans KR
---

# Design System Inspiration of Payhere

## Overview

### Visual Theme & Atmosphere

Payhere (페이히어, 주식회사 페이히어) is a Seoul company that builds point-of-sale and payment tools for shop owners. Its company page states the mission in two words, "WE MAKE THE FUTURE", and says the team reached the industry's largest merchant count "불과 1년만에" (within a single year), still pushing towards "매장의 새로운 미래" — the store's new future. What began as mobile POS ("모바일 포스 1위" on the home) now spans POS software, the all-in-one Payhere Terminal ("누적 판매 1위 올인원 카드 단말기"), table ordering, kiosks, delivery and pickup orders and sales analytics, and the company page describes a range "소상공인부터 엔터프라이즈까지", from small merchants to enterprises. The terminal page counts "업계 최다 90,000+ 가맹점". In December 2022 the company's tech blog recorded a rebrand that arrived with a new logo and a clearer brand colour, and the welcome kit built on it set three words for how Payhere should feel: Simple (이해하기 쉬운), Familiar (친숙한) and Long Awaited (기대되는).

The captured pages — the home, the table-order page and the Payhere Terminal page — sell to shop owners in large, bold Korean. Section titles run at 44px weight 700 — black `#000000` with `-1px` tracking, or navy `#1c2638` at normal tracking — on white `#ffffff` and light blue-grey `#f5f8fa` bands. The working colour is a vivid blue, `#0077fe`: it fills the purchase and detail actions, the selected pill in every tab group, the badges and the top promotion banner. A second, lighter blue, `#008cff`, is reserved for the pair of buttons in the global header. Unselected choices fade to `#5f6976` and `#c1cad2` rather than changing hue.

Everything is set in Noto Sans KR, self-hosted through Next.js, at weight 700 for headings and actions and 400 for reading. Shapes are soft and generous: 24px cards, 30px pill tabs, 50px badges and floating capsules, 12px action buttons and only the header's two compact buttons at 5px.

**Key Characteristics:**
- One working blue, `#0077fe`, for purchase and detail actions, selected pills, the selected step, badges and the promotion banner
- A second blue, `#008cff`, for the header's filled 카드 단말기 button and the ring of the 테이블 오더 button
- Big, tight Korean type: Noto Sans KR 700 at 44px and 48px with `-1px` tracking
- Selection by fill: a white pill with a `#5f6976` label becomes `#0077fe` with a white label
- Blue-grey neutrals: `#f5f8fa` surfaces, `#e2e8ee` lines, `#919ba5` and `#c1cad2` for quiet text
- Rounded geometry: 24px cards, 30px pills, 50px badges, 12px actions, 5px header buttons
- Mostly flat; soft shadows only on floating buttons and the terminal page's price cards

### Primary tasks

- Pick which store setup to buy, from card terminal to kiosk
- Narrow the feature list down to what the store actually needs
- Check the POS runs on a device the shop already owns
- Compare the bundled monthly cost against a legacy POS rental
- Take table orders without a server writing each one down

### Brand Narrative

Payhere's company page frames the business as a single ambition: "WE MAKE THE FUTURE", a future for the store that its people believe changes their own lives and the world around them. The same page and the careers site credit the company's growth to obsession with the shop owner — "오직 사장님을 향한 집념으로" — and say it passed the industry's largest merchant count within one year. The careers site lists what the company builds today: POS, table order, kiosks, delivery and pickup ordering and sales analytics, connected in one platform so a shop can do more with fewer people. The footer names the company, 주식회사 페이히어, its representative 박준기 and its office on Gangnam-daero in Seoul, and the home cites recognition as one of Forbes' 100 promising companies in Asia.

The rebrand is documented by the company itself. A December 2022 post on the Payhere Tech Blog, written by a content designer in the design chapter, explains that the rebrand and the new-hire welcome kit were produced at the same time, so the kit could carry a clearer identity and colour and the new logo. Its message was "Journey to the Future", and it chose three words for how new colleagues should feel: Simple, Familiar and Long Awaited. The captured pages carry that tone into the product: plain Korean nouns, one working blue, soft rounded shapes and very large type.

### Principles

1. **The store comes first.** *UI implication:* label features as shop tasks (테이블 오더, 카드 단말기) and lead with price and rank.
2. **Simple, Familiar, Long Awaited.** Payhere's own welcome-kit words. *UI implication:* familiar patterns — pills, cards, big titles — and nothing an owner has to learn.
3. **One working blue.** *UI implication:* `#0077fe` marks the next step and the current choice.
4. **Soft and generous.** *UI implication:* 24px cards, 30px pills, 50px badges; tight but large type.
5. **Shadows for floating things.** *UI implication:* content stays flat; only floating buttons and compared prices lift.

### Personas

*Personas below are fictional archetypes informed by publicly observable Payhere user segments (Korean small-business owners, café and restaurant operators, retail merchants), not individual people.*

**김도윤, 34, 서울.** Runs a small café and moved from a leased legacy POS to Payhere for the lower monthly cost. Chose it because the page led with a price, not a sales meeting.

**이서연, 41, 경기.** Owns a mid-size restaurant and added table ordering to cut order-taking work. Likes that the features are named the way she thinks about her shop.

**박준호, 29, 부산.** A first-time shop owner who needed a card terminal and a kiosk without enterprise complexity. Trusts the plain, rank-forward tone.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from payhere.in, payhere.in/table-order/ and payhere.in/hardware/terminal/; the floating buttons and header states were confirmed by the keyboard-state probe of the terminal page the same day (`docs/research/2026-09-29-growth/raw/payhere-states-terminal.json`).

### Primary
- **Payhere Blue** (`#0077fe`): The fill of the purchase action 구입하기 → and the 자세히 보기 action on the home, of the selected pill in the home's feature tabs and in the table-order industry tabs, and of the BEST badge, the 월회비 제로선언 and 1:1 consulting badges and the top promotion banner; the selected onboarding step on the terminal page is drawn in it. It is the primary because the pages render it in the most primary roles: five in-page action fills on the home and the selected state of the pill tabs on two of the three pages. White (`#ffffff`) labels sit on it.
- **Header Blue** (`#008cff`): The fill of the header's 카드 단말기 button and the 1px inset ring and label of its 테이블 오더 button, identical on all three pages; also the label of the selected toggle on the terminal page and the border of the first option in the table-order form. It fills one action per page, which is why it is not the primary.

### Neutral & Surface
- **Canvas** (`#ffffff`): Page sections, cards and unselected pills.
- **Surface** (`#f5f8fa`): Category cards, section bands, contact and step cards.
- **Surface Alt** (`#f4f8f9`): Image-grid feature cards on the home.
- **Line** (`#e2e8ee`): Card and field borders; the track behind the terminal page's toggles.
- **Inverse** (`#000000`): Full-width dark sections on the home, the store-download buttons and the pricing action on table-order.
- **Night** (`#0e1d40`): The 채팅 상담 contact card on the terminal page and the table-order feature headline.

### Text
- **Ink** (`#000000`): The document text colour and most section titles.
- **Navy** (`#1c2638`): Category labels, the terminal hero, section titles in their navy variant, card description lines.
- **Deep Navy** (`#101a2e`): Feature-card titles and form-field text.
- **Slate** (`#2b3648`): Section descriptions and FAQ answers on the terminal page.
- **Body Muted** (`#5f6976`): Unselected pill and toggle labels, footer links.
- **Muted** (`#919ba5`): Agreement links, the download-button border and the fill of an empty form's submit button.
- **Inactive** (`#c1cad2`): The inactive titles in the home's scroll slider, the unselected onboarding step and the footer menu links.

### Accents
- **Selected on Dark** (`#33abff`): The selected pill in the home's dark industry section.
- **Badge Event** (`#f96eae`), **Badge Hot** (`#ff5b46`) and **Badge Official** (`#08d07e`): the EVENT and HOT badges over the category cards and the 공식 badge in the home's Naver Place section.

### Rendered, but not tokens
- The terminal page's floating 지금 25% 할인받기 button is painted by a gradient on the button itself, `linear-gradient(290.64deg, #163bd8 6.63%, #3da7ff 107.33%)`; its background colour is transparent. It is kept as a component value, not a flat colour.
- The terminal page's comparison table marks the Payhere column with an 8px inset ring, `rgb(101, 194, 255)`, on `#f5f8fa`.

### Brand assets, not tokens
- The header logo's SVG fills include `#1d99ff`, `#163bd8` and `#a164f9`, the blue-to-purple mark from the 2022 rebrand. `#1d99ff` and `#a164f9` appear only in the logo, so they are brand assets, not tokens; `#163bd8` also starts the floating button's gradient.

## Typography

### Font Family
- **Live surface use**: `Noto Sans KR`, self-hosted through Next.js from `payhere.in/_next/static/media/` (woff2), 1,010 observed uses: body, headings, actions, badges, cards, lists and toggles.
- **Official distributed font assets**: Noto Sans KR is Google's Korean build of Noto Sans CJK, whose repository licence is the SIL Open Font License 1.1.
- **System face in use**: `Arial` — 4 observed uses, all on form inputs, which do not inherit the page font.
- **Declared only (no visible use)**: `Pretendard` (declared from the jsDelivr copy of orioncactus/pretendard), `Roboto` (self-hosted), the carousel icon font `slick`, and the generated `Noto Sans KR Fallback` and `Roboto Fallback` — 0 observed uses on the three pages. The June record's Pretendard headings on tech.payhere.in belong to the separate tech-blog domain and were not re-measured.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Display XL | Noto Sans KR | 56px | 700 | 78px (1.39) | -1px | Table-order feature headline |
| Display | Noto Sans KR | 48px | 700 | 66px (1.375) | -1px | Terminal hero; home dark-section title |
| Section | Noto Sans KR | 44px | 700 | 62px (1.41) | -1px | Section titles (navy variant at normal tracking) |
| Subsection | Noto Sans KR | 36px | 700 | 54px (1.5) | -1px | Stand and hardware sub-titles |
| Title | Noto Sans KR | 32px | 700 | 48px (1.5) | -1px | Scroll-slider titles, 구입하기 → |
| Card Title | Noto Sans KR | 26px | 700 | 36px (1.38) | -1px | Category selectors, blue descriptions |
| Card Heading | Noto Sans KR | 24px | 700 | 36px (1.5) | -1px | Feature-card titles, FAQ questions |
| Lead | Noto Sans KR | 24px | 400 | 36px (1.5) | -1px | Section descriptions on the terminal page |
| Tab | Noto Sans KR | 20px | 700 | 32px (1.6) | -1px | Selected pill label; 400 when unselected |
| Body Large | Noto Sans KR | 20px | 400 | 32px (1.6) | -0.5px | Card description lines |
| Button | Noto Sans KR | 18px | 700 | 18px (1.0) | -0.5px | 자세히 보기 |
| Field | Arial | 16px | 400 | 24px (1.5) | normal | Form inputs |
| Body | Noto Sans KR | 16px | 400 | 16px (1.0) | normal | Document default |
| Badge | Noto Sans KR | 16px | 700 | 16px (1.0) | -0.5px | BEST, EVENT, HOT |
| Menu | Noto Sans KR | 14px | 400 | 26px (1.86) | -1px | Footer category menu |
| Caption | Noto Sans KR | 12px | 400 | 22px (1.83) | -1px | Footer legal links |

### Principles
- **Bold sells, regular explains**: every title, action and selected label is 700; descriptions and unselected labels are 400.
- **Tight Korean tracking**: `-1px` from 14px menus to 56px headlines, `-0.5px` on badges and small actions; the navy section-title variant is the exception at normal tracking.
- **One family**: Noto Sans KR carries every captured element except the form inputs.

## Layout

### Spacing System
- Header buttons: 0px 16px padding at 40px height
- Pill tabs and toggles: 12px 24px padding at 56px height
- Form fields: 12px padding at 48px height
- Cards: 32px (step cards), 36px 24px (price cards), 48px (contact cards)
- Section rhythm: 140px padding appears at the top and bottom of the home's tabbed sections
- The most frequent spacing values in the capture are 24, 12, 8, 16, 40, 4, 32 and 28px

### Grid & Container
- Content sits in a 1200px column inside full-width bands at the 1440px viewport.
- The home runs: a promotion banner over the header; a 44px hero title over four category cards; feature sliders and tabbed image sections; hardware cards with the blue purchase action; a black industry section; contact and investor rows; a download section; the footer.
- The table-order page opens with a hero form and a pricing section, then tabbed industry sections on `#f5f8fa` bands; the terminal page opens with a navy hero title, reviews, price cards, a comparison table and FAQs.

### Whitespace Philosophy
- **Big type, big gaps**: each section is one large title and one visual, separated by generous bands.
- **Bands for grouping**: white and `#f5f8fa` alternate; black sections mark a change of topic.

### Border Radius Scale
- 5px: header buttons
- 8px: fields, form submit, download buttons
- 12px: category cards, detail action
- 16px: floating buttons, award cards, slide cards
- 20px: image-grid cards
- 24px: content, price, step and contact cards
- 30px: pill tabs and toggles
- 50px: badges and floating capsules
- 100px: the pricing action and the 월회비 제로선언 badge
- 100%: circles (the 48px carousel arrows, carousel dots and colour swatches)

### Responsive Behavior

#### Breakpoints
Only the 1440px desktop viewport was captured. Class names such as `DesktopOptionToggleWrapper` and `DesktopImage` imply separate mobile layouts, but no breakpoint was measured.

#### Touch Targets
- Purchase action: 96px tall; floating capsules: 64px
- Pill tabs and toggles: 56px; form submit: 58px; fields: 48px
- Header buttons: 40px; floating buttons: 80 × 80

#### Collapsing Strategy
- Not measured.

#### Image Behavior
- Product and screen images sit inside 16px–24px rounded cards; nothing else was measured.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Sections, most cards, actions, tabs |
| Tint | `#f5f8fa` fill | Category, contact and step cards |
| Line | 1px solid `#e2e8ee` | Cards and fields |
| Ring | rgb(0, 140, 255) 0px 0px 0px 1px inset | Header outline button |
| Raised | rgba(0, 0, 0, 0.08) 0px 3px 15px 0px | Terminal price cards |
| Floating | rgba(0, 0, 0, 0.21) 0px 4px 12px 0px | Floating CTA, floating buttons |

**Shadow Philosophy**: Payhere keeps content flat and saves shadows for things that float or need to be compared: the floating buttons and capsules carry `rgba(0, 0, 0, 0.21) 0px 4px 12px 0px`, and the terminal page's free-price cards a lighter `rgba(0, 0, 0, 0.08) 0px 3px 15px 0px`.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.float`: `rgba(0, 0, 0, 0.21) 0px 4px 12px 0px`
- `shadow.card`: `rgba(0, 0, 0, 0.08) 0px 3px 15px 0px`
- `shadow.header-ring`: `rgb(0, 140, 255) 0px 0px 0px 1px inset`

## Motion & Easing

The four probed controls — the header buttons and both floating buttons — declare no transition (`transition: all 0s`) and show no hover or pressed change. The home and terminal pages use sliders and carousels, which shows motion exists, but no duration or easing was measured, so none is specified. Honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/payhere.json (capturedAt 2026-09-30T07:52:32Z), deterministic collector, logged out: payhere.in, payhere.in/table-order/, payhere.in/hardware/terminal/.
- Floating buttons and header states: docs/research/2026-09-29-growth/raw/payhere-states-terminal.json (keyboard-state probe of the terminal page, 2026-09-30T07:57Z, focus skipped).
- §1, §10, §11: payhere.in/company-info, tech.payhere.in welcome-kit post (2022-12-16), careers.payhere.in/recruit/ and the payhere.in footer, opened 2026-09-30; narrative context only, no token.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Purchase action**
- Background: `#0077fe`
- Text: `#ffffff`
- Radius: 0px 0px 24px 24px
- Padding: 24px 0px
- Height: 96px
- Font: 32px / 700 / 48px Noto Sans KR, letter-spacing -1px
- States: rest only
- Use: 구입하기 → closing the two hardware cards on the home

**Detail action**
- Background: `#0077fe`
- Text: `#ffffff`
- Radius: 12px
- Padding: 16px
- Height: 50px
- Font: 18px / 700 / 18px Noto Sans KR, letter-spacing -0.5px
- States: rest only
- Use: 자세히 보기 under the three feature cards on the home

**Header button**
- Background: `#008cff`
- Text: `#ffffff`
- Radius: 5px
- Padding: 0px 16px
- Height: 40px
- Font: 16px / 700 / 16px Noto Sans KR
- Hover: no change within the compared scope (self and three ancestor levels, transition 0s; probe)
- Use: 카드 단말기 in the header of all three pages

**Header outline button**
- Background: `#ffffff`
- Text: `#008cff`
- Shadow: rgb(0, 140, 255) 0px 0px 0px 1px inset
- Radius: 5px
- Padding: 0px 16px
- Height: 40px
- Font: 16px / 700 / 16px Noto Sans KR
- Hover: no change within the compared scope (probe)
- Use: 테이블 오더 in the header of all three pages

**Header text link**
- Background: `#ffffff`
- Text: `#1c2638`
- Radius: 5px
- Padding: 0px 12px
- Height: 40px
- States: rest only
- Use: the text link to the left of the two header buttons

**Pricing action**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 100px
- Padding: 16px 32px
- Height: 60px
- Font: 18px / 700 / 28px Noto Sans KR, letter-spacing -1px
- Use: 도입 비용 계산해보기 on the table-order page

**Form submit**
- Background: `#919ba5`
- Text: `#ffffff`
- Radius: 8px
- Padding: 16px 0px
- Height: 58px
- Font: 18px / 700 Noto Sans KR, letter-spacing -1px
- States: the fill observed on an empty form (the disabled attribute was false); the form was never filled, so no other fill was observed
- Use: 도입 문의하기 and 동의하고 무료 상담

**Floating CTA**
- Background: linear-gradient(290.64deg, `#163bd8` 6.63%, `#3da7ff` 107.33%)
- Text: `#ffffff`
- Radius: 50px
- Height: 64px
- Shadow: rgba(0, 0, 0, 0.21) 0px 4px 12px 0px
- Font: 20px / 700 / 32px Noto Sans KR, letter-spacing -1px
- Hover: no change within the compared scope (probe)
- Use: 지금 25% 할인받기, floating at the foot of the terminal page

**Floating secondary**
- Background: `#f5f8fa`
- Text: `#0077fe`
- Border: 1px solid `#f5f8fa`
- Radius: 50px
- Height: 64px
- Shadow: rgba(0, 0, 0, 0.21) 0px 4px 12px 0px
- Use: 올인원 카드 단말기 beside the floating CTA

**Carousel arrow**
- Background: `#ffffff`
- Border: 1px solid `#c1cad2`
- Radius: 100%
- Height: 48px
- Hover: border `#111111` (both arrows agree in their hover and pressed frames)
- Use: seller-review carousel on the terminal page

**Floating button**
- Background: `#ffffff`
- Radius: 16px
- Height: 80px
- Shadow: rgba(0, 0, 0, 0.21) 0px 4px 12px 0px
- States: rest only
- Use: the chat button on every page; back-to-top on the home and the terminal page

**Download button**
- Background: `#ffffff`
- Border: 1px solid `#919ba5`
- Radius: 8px
- Height: 72px
- States: rest only
- Use: the four POS download buttons on the home

### Tabs & Toggles

**Pill tab**
- Background: `#ffffff`
- Text: `#5f6976`
- Radius: 30px
- Padding: 12px 24px
- Height: 56px
- Font: 20px / 400 / 32px Noto Sans KR, letter-spacing -1px
- Selected: background `#0077fe`, label `#ffffff` at weight 700
- States: selected read from rest values; no pointer frame
- Use: feature tabs on the home (NFC, 비대면 결제, 선불권) and industry tabs on table-order

**Toggle**
- Background: `#e2e8ee`
- Text: `#5f6976`
- Radius: 30px
- Padding: 12px 24px
- Height: 56px
- Selected: background `#ffffff`, label `#008cff` at weight 700
- States: selected read from rest values; no pointer frame
- Use: POS-type and industry toggles on the terminal page, inside a `#e2e8ee` track with 4px padding

**Step tab**
- Text: `#c1cad2`
- Border: bottom 3px solid `#c1cad2`
- Padding: 16px 24px
- Height: 67px
- Font: 20px / 700 / 32px Noto Sans KR
- Selected: text `#0077fe` with a 3px `#0077fe` bottom border
- States: selected read from rest values; no pointer frame
- Use: the two onboarding steps on the terminal page

### Inputs

**Text field**
- Background: `#ffffff`
- Text: `#101a2e`
- Border: 1px solid `#e2e8ee`
- Radius: 8px
- Padding: 12px
- Height: 48px
- Font: 16px / 400 / 24px Arial
- States: rest only; focus was not measured
- Use: consultation forms on the home and table-order

### Cards & Badges

**Category card**
- Background: `#f5f8fa`
- Text: `#1c2638`
- Radius: 12px
- Padding: 20px 0px
- Height: 84px
- Font: 26px / 700 / 36px Noto Sans KR, letter-spacing -1px
- Use: 카드 단말기, 테이블 오더, 키오스크, 인터넷 패키지 under the home hero

**Content card**
- Background: `#ffffff`
- Border: 1px solid `#c1cad2`
- Radius: 24px
- Padding: 48px
- Use: contact cards on the home; hardware and pricing cards use a 1px `#e2e8ee` border at the same radius

**Price card**
- Background: `#ffffff`
- Border: 1px solid `#e2e8ee`
- Radius: 24px
- Padding: 36px 24px
- Shadow: rgba(0, 0, 0, 0.08) 0px 3px 15px 0px
- Use: free-price cards on the terminal page

**Contact card**
- Background: `#0e1d40`
- Text: `#ffffff`
- Radius: 24px
- Padding: 64px 0px
- Use: 채팅 상담 on the terminal page; the other two contact cards use `#f5f8fa`

**Category badge**
- Background: `#0077fe`
- Text: `#ffffff`
- Radius: 50px
- Padding: 4px 8px 5px
- Height: 25px
- Font: 16px / 700 / 16px Noto Sans KR, letter-spacing -0.5px
- Use: BEST; EVENT uses `#f96eae` and HOT uses `#ff5b46`

**Hero badge**
- Background: `#0077fe`
- Text: `#ffffff`
- Radius: 50px
- Padding: 8px 20px
- Height: 44px
- Font: 18px / 700 / 28px Noto Sans KR, letter-spacing -0.5px
- Use: 사장님 맞춤형 1:1 밀착 컨설팅 on the table-order hero

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages of payhere.in, logged out, plus a keyboard-state probe of the terminal page and first-party company pages)
**Tier 1 sources:** https://payhere.in/ ; https://payhere.in/table-order/ ; https://payhere.in/hardware/terminal/ ; https://payhere.in/company-info ; https://tech.payhere.in/post/design-payhere-welcome-kit/ ; https://careers.payhere.in/recruit/
**Tier 2 sources:** getdesign.md/payhere (HTTP 200, "payhere — 0 DESIGN.md files") and styles.refero.design/?q=payhere (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed; nothing else is specified here.

| State | Observation |
|---|---|
| **Selected (pill tab)** | White pill with a `#5f6976` 400 label becomes `#0077fe` with a white 700 label. |
| **Selected (toggle)** | `#e2e8ee` toggle with a `#5f6976` label becomes white with a `#008cff` 700 label. |
| **Selected (step)** | `#c1cad2` text and underline become `#0077fe`. |
| **Selected on dark** | The selected pill in the black section is `#33abff`; others `#1c2638`, both with white labels. |
| **Hover / pressed (carousel arrow)** | Border `#c1cad2` becomes `#111111`. |
| **Hover / pressed (header buttons, floating buttons)** | No change within the compared scope (probe). |
| **Empty form** | The submit button shows a `#919ba5` fill with a white label. |

Focus was not measured: the probe ran with focus skipped, and the collector's focus frames are not used. Links whose own colour reads as the browser default blue or active red carry their labels in children, so those values are not brand values. Error, loading and success states were not captured, because no form was ever filled or submitted.

## Do's and Don'ts

### Do
- Use `#0077fe` for purchase and detail actions, selected pills and badges
- Keep `#008cff` for the header's button pair
- Set titles in Noto Sans KR 700 with `-1px` tracking, at 44px for sections
- Show selection by filling the pill `#0077fe` with a white label; leave unselected labels `#5f6976`
- Use `#f5f8fa` bands and cards with `#e2e8ee` lines to group content
- Use 24px radii for cards, 30px for pills and 50px for badges

### Don't
- Don't use the logo-only colours `#1d99ff` or `#a164f9` in the interface
- Don't treat the grey `#919ba5` submit fill as a disabled state; it is simply what an empty form shows
- Don't add drop shadows to ordinary cards or actions
- Don't set headings in a light weight; every title is 700
- Don't render form inputs in Noto Sans KR and call it the observed design; the inputs render in Arial
- Don't present Pretendard as the site face; it is declared but unused on these pages

## Voice & Tone

Payhere talks to shop owners plainly and with confidence: it leads with rank, price and the job a feature does, and names features the way an owner would. Headlines often pair a benefit with the product name after a comma.

| Context | Tone |
|---|---|
| Hero headlines | Rank and promise. "모바일 포스 1위 매장의 새로운 미래, 페이히어." |
| Section titles | Benefit, then product. "인쇄·스캔·키오스크 다 되는 올인원 단말기, 페이히어 터미널." |
| Promotions | Concrete price. "인터넷+CCTV+단말기 다 해도 3만 원대." |
| Product labels | Plain nouns. "카드 단말기", "테이블 오더", "키오스크", "인터넷 패키지". |
| Brand copy | Mission-led. "WE MAKE THE FUTURE." |

**Voice samples (verbatim, opened 2026-09-30):**
- "모바일 포스 1위 매장의 새로운 미래, 페이히어" — home.
- "업계 최다 90,000+ 가맹점의 이유 있는 선택" — terminal page.
- "페이히어 테이블 오더로 어떤 고민을 해결해 드릴까요?" — table-order hero.
- "페이히어는 매장의 새로운 미래를 만듭니다. (We Make The Future)" — tech blog welcome-kit post.

**Forbidden register**: unexplained payments jargon, cold banking tone and fear-based urgency.

## Agent Prompt Guide

### Quick Color Reference
- Primary action and selection: `#0077fe` with `#ffffff` labels
- Header buttons: `#008cff`
- Text: `#000000`, navy `#1c2638`, deep navy `#101a2e`, slate `#2b3648`
- Quiet text: `#5f6976`, `#919ba5`, `#c1cad2`
- Surfaces: `#ffffff`, `#f5f8fa`, `#f4f8f9`; lines `#e2e8ee`
- Dark: `#000000` sections, `#0e1d40` contact card; selected pill on dark `#33abff`

### Example Component Prompts
- "Create a pill tab group: pills 56px tall with 30px radius and 12px 24px padding; unselected white with a 20px Noto Sans KR 400 label in `#5f6976` and `-1px` tracking; selected `#0077fe` with a white 20px 700 label."
- "Make a hardware card: white, 1px solid `#e2e8ee`, 24px radius, product image, a 36px 700 navy `#1c2638` name, and a full-width `#0077fe` action at the foot (96px tall, 0px 0px 24px 24px radius, white 32px 700 label, '구입하기 →')."
- "Build the header: logo at left, a text link, then a white 110 × 40 button with a 1px `#008cff` inset ring and `#008cff` 16px 700 label, and a `#008cff` button with a white label, both 5px radius."

### Iteration Guide
1. `#0077fe` for actions and selection; `#008cff` only in the header
2. Noto Sans KR 700 with `-1px` tracking for every title
3. Fill to select; grey labels when unselected
4. 24px cards, 30px pills, 50px badges
5. Flat content; shadows only on floating elements and price cards

---

## Governance

### Known Gaps

- **Contrast, `purchase-button`.** Text `#ffffff` on `#0077fe` measures 4.14:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `detail-button`.** Text `#ffffff` on `#0077fe` measures 4.14:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-button`.** Text `#ffffff` on `#008cff` measures 3.39:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-outline-button`.** Text `#008cff` on `#ffffff` measures 3.39:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `category-badge`.** Text `#ffffff` on `#0077fe` measures 4.14:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `hero-badge`.** Text `#ffffff` on `#0077fe` measures 4.14:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `form-submit`.** Text `#ffffff` on `#919ba5` measures 2.82:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `floating-secondary`.** Text `#0077fe` on `#f5f8fa` measures 3.88:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

---
name: Kyobo Book Centre
colors:
  primary: '#5055b1'
  primary-hover: '#2c307c'
  on-primary: '#ffffff'
  secondary: '#767676'
  secondary-hover: '#595959'
  secondary-pressed: '#292929'
  ink: '#000000'
  body: '#595959'
  muted: '#767676'
  accent: '#474c98'
  promo-green: '#2a760c'
  promo-green-dark: '#195800'
  hairline: '#eaeaea'
  border: '#d5d5d5'
  border-strong: '#cccccc'
  surface: '#f2f2f2'
  white: '#ffffff'
typography:
  page-title:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: '-0.32px'
    use: Store page heading (h4) on the weekly bestseller, Pretendard, 44px line; the same 32px / 44px pair as KDS h1 $font-title-xl
  title:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.42
    letterSpacing: '-0.24px'
    use: 'Home section headings (h2, Roboto with NotoSansKR) and the store h1, 34px line, in #000000'
  error-title:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.56
    letterSpacing: '-0.18px'
    use: Heading of the product route's error view, Pretendard (served as PretendardNoPreload), 28px line
  nav-promo:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.16px'
    use: Green promotional links in the header navigation, 24px line
  button-lg:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.16px'
    use: Large 50px actions (홈으로 가기, 이전페이지) on the product route's error view, 24px line
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.16px'
    use: 'Document default on all three routes, 24px line, in #000000'
  tab:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.16px'
    use: 'Store category tabs, 24px line, in #767676; the selected tab is #000000 at weight 500'
  body-sm:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.57
    letterSpacing: '-0.14px'
    use: 'Book introductions in bestseller rows, 22px line, in #595959'
  button:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.57
    letterSpacing: '-0.14px'
    use: 바로구매, 장바구니 and toolbar button labels, Pretendard, 22px line
  label:
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: '-0.12px'
    use: 'Blue-800 labels on home, 18px line, in #474c98'
  caption:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.12px'
    use: 'Footer company details and top-bar utility links, 18px line, in #767676 or #595959'
  fine:
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: '-0.1px'
    use: 'Footer notes, 14px line, in #767676'
rounded:
  tag: 4px
  button: 8px
  cover: 16px
  search: 24px
  pill: 9999px
spacing:
  button-y: 9
  button-x: 14
  field-y: 13
  field-x: 16
  toggle-pad: 11
  row-top: 36
components:
  buy-now-button:
    type: button
    backgroundColor: '#5055b1'
    textColor: '#ffffff'
    rounded: 8px
    padding: 9px 14px
    height: 38px
    typography: 14px / 500 / 22px Pretendard, letter-spacing -0.14px
    hover: 'bg #2c307c'
    pressed: 'bg #2c307c'
    states: 'probe on the weekly bestseller: hover and pressed settle on #2c307c after a 0.2s colour transition; focus was not measured (the probe ran with --no-focus) and the collector''s pseudo-state pass stalled, so no focus style is declared'
    use: 바로구매 in every row of the weekly bestseller at surface-2::[data-omd-capture="69"], 100 x 38; the one filled indigo action per row, under 장바구니
  cart-button:
    type: button
    backgroundColor: '#767676'
    textColor: '#ffffff'
    rounded: 8px
    padding: 9px 14px
    height: 38px
    typography: 14px / 500 / 22px Pretendard, letter-spacing -0.14px
    hover: 'bg #595959'
    pressed: 'bg #292929'
    states: 'probe: hover #595959, pressed #292929 (0.2s colour transition); focus not measured'
    use: 장바구니 above 바로구매 in each bestseller row at surface-2::[data-omd-capture="68"], 100 x 38
  outline-button:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px solid #cccccc'
    rounded: 8px
    padding: 9px 14px
    height: 38px
    typography: 14px / 500 / 22px Pretendard, letter-spacing -0.14px
    hover: 'bg #f2f2f2'
    pressed: 'bg #f2f2f2'
    states: 'probe on 상세보기 and the 찜하기 icon button: hover and pressed fill #f2f2f2; focus not measured'
    use: Toolbar actions over the bestseller list (장바구니 at surface-2::[data-omd-capture="61"], 엑셀로 받기) and 상세보기 in rows, 38px tall; the 38 x 38 찜하기 icon button uses the same border with 9px padding
  view-toggle:
    type: toggle
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #cccccc'
    rounded: 4px 0px 0px 4px and 0px 4px 4px 0px (segmented pair)
    padding: 11px
    height: 38px
    hover: 'bg #f2f2f2'
    pressed: 'bg #f2f2f2'
    states: 'probe on 리스트형 보기: hover and pressed #f2f2f2; the rest values of the two halves do not show which view is selected, so no selected style is declared'
    use: List and thumbnail view pair at surface-2::[data-omd-capture="58"] and [59], 39 x 38 and 40 x 38
  error-primary-button:
    type: button
    backgroundColor: '#5055b1'
    textColor: '#ffffff'
    rounded: 8px
    height: 50px
    typography: 16px / 700 / 24px Pretendard (PretendardNoPreload), letter-spacing -0.16px
    states: rest only; not probed
    use: 이전페이지 on the error view the product route rendered, at surface-3::[data-omd-capture="32"], 125 x 50
    padding: 0px
    pressed: 'bg #2c307c (:hover + :active)'
  error-outline-button:
    type: button
    backgroundColor: transparent
    textColor: '#5055b1'
    border: '1px solid #5055b1'
    rounded: 8px
    height: 50px
    typography: 16px / 700 / 24px Pretendard (PretendardNoPreload), letter-spacing -0.16px
    states: rest only; not probed
    use: 홈으로 가기 beside 이전페이지 at surface-3::[data-omd-capture="31"], 125 x 50
  category-tab:
    type: tab
    textColor: '#767676'
    padding: 0px 14px
    height: 42px
    typography: 16px / 400 / 24px Pretendard, letter-spacing -0.16px
    selected: 'fg #000000 at weight 500, 43px tall'
    states: selected variant read from rest values; no pointer frame
    use: Category tabs of the weekly bestseller, 140px wide, at surface-2::[data-omd-capture="52"]; the selected tab is capture 51
  rail-tab:
    type: tab
    textColor: '#595959'
    typography: 14px / 400 / 22px Roboto with NotoSansKR
    selected: 'fg #474c98 at weight 700'
    states: selected variant read from rest values; no pointer frame
    use: Filter buttons over a home rail at home::[data-omd-capture="64"]; the selected one is capture 69
  search-field:
    type: input
    textColor: '#000000'
    rounded: 24px 0px 0px 24px (scope button)
    padding: 13px 16px (input)
    height: 48px (scope button); 42px input
    typography: 14px / 400 / 22px, letter-spacing -0.14px
    states: rest only; the collector pseudo-state pass stalled and the field was not probed, so no focus or hover value is declared
    use: 'Header integrated search: a 116 x 48 scope button with a 24px 0 0 24px radius (home::[data-omd-capture="16"]) leading a 395 x 42 search input (capture 17), on all three routes'
  menu-button:
    type: button
    backgroundColor: transparent
    border: '1px solid #d5d5d5'
    rounded: 9999px
    size: 44px x 44px
    states: rest only; not probed
    use: Round 전체메뉴열기 button in the header at home::[data-omd-capture="21"], on all three routes
  recent-button:
    type: button
    backgroundColor: '#f2f2f2'
    rounded: 9999px
    size: 50px x 50px
    states: rest only; not probed
    use: Round counter button (class recent-ctt-modal) in the floating side bar at surface-2::[data-omd-capture="223"]
  footer-select:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #d5d5d5'
    rounded: 8px
    padding: 8px 14px
    height: 40px
    typography: 14px / 400 / 22px, letter-spacing -0.14px
    states: rest only; not probed
    use: Family Site and SNS 바로가기 selectors in the footer at surface-2::[data-omd-capture="219"], 200 x 40, on all three routes
  footer-tag:
    type: badge
    textColor: '#000000'
    border: '1px solid #cccccc'
    rounded: 4px
    height: 24px
    typography: 12px / 400 / 18px, letter-spacing -0.12px
    use: '서비스가입확인 link in the footer at surface-2::[data-omd-capture="221"]; 사업자정보확인 beside it takes a #d5d5d5 border and #595959 label'
  cover-link:
    type: card
    border: '1px solid #eaeaea'
    rounded: 16px 16px 16px 0px, or square
    use: Book-cover links in home rails at home::[data-omd-capture="95"]; 46 captured covers take the asymmetric 16px 16px 16px 0px shape, the rest are square
  list-row:
    type: listItem
    border: '1px solid #eaeaea (top)'
    padding: 36px 0px 0px
    use: Weekly bestseller rows at surface-2::li, 984px wide, separated by a top hairline
fonts:
  roles:
    commerce: Pretendard
    portal: Roboto, NotoSansKR
---

# Design System Inspiration of Kyobo Book Centre

## Overview

### Visual Theme & Atmosphere

Kyobo Book Centre (교보문고) is a Korean bookseller whose own timeline begins with the founding of 교보문고 주식회사 on 24 December 1980 and the opening of the Gwanghwamun store in June 1981. It has sold remotely for almost as long as it has had stores: in 1989 it started what it calls the industry's first mail order over an online information service (천리안2), in 1993 the 교보북클럽 membership mail order, and in 1999 it reopened as the internet bookshop 인터넷교보문고. Later milestones on the company page include the 북마스터 reading-consultant role (2000), Korea's first eBook membership service, sam (2013), a head office in Paju Book City (2012), its 40th anniversary (December 2020) and a Vision2025 declaration (2021). In 2022 it opened a combined Kyobo–Hottracks mall, and in July 2023 the two companies merged into one legal entity. The company states three core values: 도전과 창의 (challenge and creativity), 고객중심 (customer focus) and 정직과 성실 (honesty and diligence).

Kyobo documents its online product in its own design system, KDS (design.kyobobook.co.kr), whose mission line is "사용자 경험을 가치있게, 고객의 삶을 흥미롭게" — make the user experience valuable and customers' lives interesting. The KDS principle page gives the direction of the online bookstore as "꿈을 키우는 세상에서 꿈이 하나되는 공간으로" and asks for a natural reading-like flow, a customer journey that cycles through arriving, browsing, ordering and returning, and familiar usability.

The captured routes read exactly as KDS describes. A white page carries black `#000000` text and a grey ladder (`#595959`, `#767676`), with hairlines `#eaeaea`, `#d5d5d5` and `#cccccc` doing the separating and no shadow anywhere (all 981 recorded elements compute `box-shadow: none`). Colour is saved for action. Indigo `#5055b1` — the colour KDS labels "UI 기본컬러" — fills 바로구매 in every bestseller row. Grey `#767676` fills its partner 장바구니, and the header's promotional links are set in green. Letter-spacing is a steady -1% of the size at every step, from -0.1px at 10px to -0.32px at 32px.

**Key Characteristics:**
- One indigo action per row: `#5055b1` 바로구매, darkening to `#2c307c` on hover and press; grey `#767676` 장바구니 beside it
- Black `#000000` text on white with a grey ladder `#595959` / `#767676`; no tinted ink
- Hairline structure instead of depth: `#eaeaea` row rules and cover borders, `#cccccc` control borders, `#d5d5d5` footer and header controls; zero shadows
- Two type setups: the portal home in Roboto with NotoSansKR for Hangul (the pair KDS specifies), the store and product routes in Pretendard
- Tight, proportional tracking: -0.01em on every captured text size
- 8px radius on every action, 4px on tags and segmented toggles, 24px on the search pill end, and asymmetric 16px 16px 16px 0px book covers in home rails
- Green promotional navigation links (`#2a760c` on home, `#195800` on the store) as the only other hue in the chrome

### Primary tasks

- Buy a book with the Buy Now action
- Add a book to the cart instead of buying now
- Search the catalog from the header search bar
- Compare editions and prices across a long listing
- Browse the best-seller and PICKS rails for something to read

### Brand Narrative

Kyobo Book Centre's history is one of bringing books to people by whatever channel the time allowed. After the company was founded in December 1980 and the Gwanghwamun store opened in 1981, it added mail order over an online information service in 1989 and a membership book club in 1993, and relaunched as 인터넷교보문고 in 1999. It later introduced the 북마스터 reading consultant (2000) and Korea's first eBook membership service, sam (2013). More recent entries on the company page are a combined Kyobo–Hottracks mall (2022), the merger of Kyobo Book Centre and Kyobo Hottracks into one company (July 2023), a POD service renamed 바로출판, and 우리동네 바로배송, a same-area delivery service run with local bookstores (both November 2023). Its stated values — challenge and creativity, customer focus, honesty and diligence — sit beside services such as 바로드림 and 오늘배송.

KDS describes what the online store should feel like. The principle page sets a new direction for online Kyobo, "꿈을 키우는 세상에서 꿈이 하나되는 공간으로". It makes shapes drawn from books, records and eBooks the visual motif of the UX, and asks that information flow naturally, "책을 읽는 것처럼". The captured product follows the documented core colour — `#5055b1` on the buy-now action — and keeps the rest of the chrome black, grey and flat so the covers carry the colour.

### Principles

1. **One action per area.** KDS: "한 영역에서는 하나의 행동만 유도해야 합니다." *UI implication:* one filled `#5055b1` action per row; the partner action is grey and the rest are outlines.
2. **Colour is semantic.** KDS gives blue, green and two reds distinct meanings and warns against confusing the Hottracks red with the negative red. *UI implication:* keep the chrome neutral and use colour for action and state.
3. **Read like a book.** KDS asks for a natural flow of text and information "책을 읽는 것처럼". *UI implication:* long, calm lists with consistent rows and proportional tracking.
4. **Say one thing at a time.** From the KDS Voice guide. *UI implication:* short action-verb CTAs and one fact per sentence.
5. **Flat and legible.** *UI implication:* hairlines and borders instead of elevation. (An editorial reading of the captured routes, not a Kyobo statement.)

### Personas

*Personas below are fictional archetypes informed by publicly observable Kyobo user segments (Korean book buyers, students, gift shoppers, eBook readers), not individual people.*

**김도윤, 34, 서울.** A knowledge worker who buys both print and eBooks. Browses the weekly bestseller and home rails the way he used to wander a Kyobo store. Values that 바로구매 is always the same indigo button.

**이서연, 22, 대전.** A university student comparing editions before buying textbooks. Switches between the list and thumbnail views to scan dozens of titles quickly, and adds several to the cart at once from the toolbar.

**박민재, 45, 부산.** A parent buying children's books and stationery from the combined Kyobo–Hottracks mall. Appreciates that the catalogue is dense but legible and that promotions are marked in green rather than shouting.

## Colors

Every token below was read on 2026-09-30 by the deterministic collector from www.kyobobook.co.kr (portal home), the weekly bestseller on store.kyobobook.co.kr and a product-detail route, which rendered only its error view to the logged-out headless browser. Hover and pressed values come from the fixed keyboard probe on the bestseller page.

### Primary
- **Kyobo Blue** (`#5055b1`): The fill of 바로구매, the buy-now action in each row of the weekly bestseller (100 × 38, `#ffffff` label). It is the primary because it is the product's primary action fill: in each row it is the one filled indigo control, and the same fill appears on the error view's 이전페이지 and on a filled action recorded on home. KDS's colour page names this exact value, blue 700 `#5055B1`, as "UI 기본컬러" (the UI base colour) with the Informative / Accent meaning.
- **Kyobo Blue Pressed** (`#2c307c`): Hover and pressed fill of 바로구매, settled after a 0.2s colour transition.
- **On Primary** (`#ffffff`): Labels on indigo and grey fills.

### Secondary action
- **Grey 700** (`#767676`): The fill of 장바구니 in each row; hover `#595959`, pressed `#292929`. The same grey is the muted text colour (unselected category tabs, footer notes).

### Accent
- **Blue 800** (`#474c98`): The selected filter of a home rail (bold) and small blue labels on home.
- **Promo Green** (`#2a760c`) and **Promo Green Dark** (`#195800`): Bold promotional links in the header navigation — `#2a760c` on the portal home, `#195800` on the store and product routes.

### Neutral & Surface
- **Ink** (`#000000`): Default text on all three routes, headings and selected category tabs.
- **Body** (`#595959`): Book introductions in the bestseller rows, top-bar utility links, unselected rail filters.
- **Surface** (`#f2f2f2`): The round counter button in the floating side bar, and the hover fill of outline buttons and view toggles.
- **White** (`#ffffff`): Page, view toggles and footer selectors. The body element computes a transparent background, so the page white is the browser canvas.
- **Hairline** (`#eaeaea`): Book-cover borders and the rules between bestseller rows.
- **Border** (`#d5d5d5`): The round menu button, footer selectors and the 사업자정보확인 tag.
- **Border Strong** (`#cccccc`): Outline buttons, the view toggles and the 서비스가입확인 tag.

### Documented in KDS, not observed on the captured routes
KDS's colour page lists the semantic set as blue 700 `#5055B1` (Informative, Accent — "UI 기본컬러, 안내, 강조"), green 700 `#4DAC27` (Positive, Accent), red 700 `#DA2128` (Hottracks primary) and red `#EC1F2D` (Negative), and warns: "핫트랙스 red-700과 부정의 의미 red를 혼동하지 않도록 주의합니다." Only the blue renders on the three captured routes; the green, the two reds and a sale-price red are not machine tokens here.

## Typography

### Font Family
- **Official product use**: KDS's typography page states "국문 Noto Sans KR 영문, 숫자는 Roboto를 사용합니다" — Noto Sans KR for Korean, Roboto for Latin letters and numerals. It lists h1 `$font-title-xl` at 32px with a 44px line.
- **Live surface use**:
  - The portal home computes `Roboto, "Roboto Fallback", NotoSansKR, "NotoSansKR Fallback", "PingFang SC", "Apple SD Gothic Neo", …` on body and headings. The collector records `Roboto` as the first family on 500 elements (status `system/high`), with its @font-face self-hosted from `contents.kyobobook.co.kr/display/next/ui-welcome/…/_next/static/media/`. A same-day headless read listed Roboto 400/500/700 and NotoSansKR 400/500/700 as loaded. Roboto has no Hangul, so Korean text on home falls through to NotoSansKR; the collector counts only first families and records 0 uses for it.
  - The store computes `Pretendard, "Pretendard Fallback", sans-serif` (390 uses, `loaded / high`), served from jsDelivr (`orioncactus/pretendard@v1.3.9`).
  - The product route computes `PretendardNoPreload` (91 uses, `loaded / high`), a self-hosted copy under another family name from `contents.kyobobook.co.kr/display/next/ui-product/…`.
- **Official distributed font assets**: Pretendard's LICENSE (Kil Hyung-jin) states the SIL Open Font License 1.1. The Google Fonts copies of Roboto ("Copyright 2011 The Roboto Project Authors") and Noto Sans KR (Adobe copyright) also carry the SIL Open Font License 1.1. All three files were opened on 2026-09-30. The identification of Kyobo's served files rests on the declared family names; their name tables were not inspected.
- **Declared only (no visible use)**: GmarketSans (self-hosted), Do Hyeon, Hi Melody, Jua, Nanum Gothic, Nanum Myeongjo and Nanum Pen Script (Google Fonts) and the metric fallbacks — all 0 observed uses.
- **Unresolved**: none. The store and product routes render Pretendard although KDS specifies Noto Sans KR and Roboto; both facts are recorded as they are.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Page Title | Pretendard | 32px | 700 | 44px (1.375) | -0.32px | Store page heading (h4) |
| Title | Roboto + NotoSansKR / Pretendard | 24px | 700 | 34px (1.42) | -0.24px | Home section headings, store h1 |
| Error Title | Pretendard | 18px | 700 | 28px (1.56) | -0.18px | Product route error view |
| Nav Promo | Roboto + NotoSansKR / Pretendard | 16px | 700 | 24px (1.5) | -0.16px | Green header links |
| Button Large | Pretendard | 16px | 700 | 24px (1.5) | -0.16px | 홈으로 가기, 이전페이지 |
| Body | all three | 16px | 400 | 24px (1.5) | -0.16px | Document default |
| Tab | Pretendard | 16px | 400 (500 selected) | 24px (1.5) | -0.16px | Store category tabs |
| Body Small | Pretendard | 14px | 400 | 22px (1.57) | -0.14px | Book introductions, `#595959` |
| Button | Pretendard | 14px | 500 | 22px (1.57) | -0.14px | 바로구매, 장바구니 |
| Label | Roboto + NotoSansKR | 12px | 500 | 18px (1.5) | -0.12px | Blue-800 labels on home |
| Caption | all three | 12px | 400 | 18px (1.5) | -0.12px | Footer details, utility links |
| Fine | all three | 10px | 400 | 14px (1.4) | -0.1px | Footer notes |

### Principles
- **Proportional tracking**: every captured size carries letter-spacing of -1% of the size.
- **Weight carries hierarchy**: headings and emphasised labels at 700, action labels at 500, reading text at 400; colour stays on the black-grey ladder except for action, selection and promotion.
- **One family per route**: the portal home is Roboto with NotoSansKR; the store and product routes are Pretendard throughout.

## Layout

### Spacing System
- Actions: 9px vertical, 14px horizontal padding at 38px height
- Search input: 13px 16px
- View toggles: 11px on all sides
- Bestseller rows: 36px top padding above a hairline
- Frequent spacing values in the capture: 8, 2, 16, 9, 14, 24 and 36px

### Grid & Container
- The portal home runs a full-width header (logo, integrated search, menu) over banner carousels and horizontally scrolling rails of book covers.
- The weekly bestseller sets a left column of filters beside a 984px list of rows; each row holds a cover, the title and introduction, and a stacked 장바구니 / 바로구매 pair on the right.
- The product route's error view centres an 18px heading, a grey explanation and the 홈으로 가기 / 이전페이지 pair.

### Whitespace Philosophy
- **Dense catalogue, calm chrome**: rows are long and information-heavy; separation comes from hairlines and generous row padding rather than panels.
- **Flat segmentation**: no captured element carries a shadow.

### Border Radius Scale
- 0px: the default (918 of the recorded radii)
- 4px: tags and the outer corners of segmented toggles
- 8px: every action and the footer selectors
- 16px: book covers (16px 16px 16px 0px)
- 24px: the left end of the search pill
- 9999px: round menu and side-bar buttons (Chrome computes `3.35544e+07px`)

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured. Class names such as `sm:fz-14` show that the pages restyle at a small breakpoint; no breakpoint value was measured.

#### Touch Targets
- Error-view actions: 50px
- Search scope button: 48px
- Round menu button: 44 × 44
- Category tabs: 42px
- Footer selectors: 40px
- Row actions, outline buttons and view toggles: 38px
- Footer tags: 24px

#### Collapsing Strategy
- Not captured; nothing is claimed about how the layout collapses.

#### Image Behavior
- Book covers sit in 1px `#eaeaea` frames without shadow; 46 home-rail covers take the 16px 16px 16px 0px shape.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | All 981 captured elements |
| Hairline | 1px solid `#eaeaea` | Covers, row rules |
| Border | 1px solid `#cccccc` / `#d5d5d5` | Controls and footer tags |
| Tint | `#f2f2f2` | Side-bar counter, hover fills |

**Shadow Philosophy**: every recorded element computes `box-shadow: none`. Emphasis comes from the indigo action fill and weight, not elevation.

## Motion & Easing

The probe read the transition on the bestseller controls: `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to 0.2s cubic-bezier(0.4, 0, 0.2, 1)` on 바로구매, 장바구니, the outline buttons and the view toggle, so their fills change over 200ms. Nothing else about motion (carousels, banners, rails) was measured; treat it as unspecified and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/kyobobook.json (capturedAt 2026-09-30T08:54:52Z), deterministic collector, 1440x900, logged out: www.kyobobook.co.kr, store.kyobobook.co.kr/bestseller/online/weekly, product.kyobobook.co.kr/detail/S000221463512 (error view). States: fixed keyboard probe raw docs/research/2026-09-29-growth/raw/kyobobook-states-bestseller.json (config kyobobook-cfg-bestseller.json).
- §1, §2 (KDS set), §3, §10, §11, §12: design.kyobobook.co.kr (home, foundation/color, foundation/typography, component/button, voice, brand/principle) and company.kyobobook.co.kr, opened 2026-09-30.
- §3 licences: the Pretendard LICENSE and the Google Fonts OFL files for Roboto and Noto Sans KR, opened 2026-09-30.
- Labels of the error-view pair and the menu button come from a same-day headless read; the bundle's text lengths (6, 5) match.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Buy Now (primary)**
- Background: `#5055b1`
- Text: `#ffffff`
- Radius: 8px
- Padding: 9px 14px
- Height: 38px (100px wide)
- Font: 14px / 500 / 22px Pretendard, letter-spacing -0.14px
- Hover: background `#2c307c`
- Pressed: background `#2c307c`
- States: focus not measured
- Use: 바로구매 in every bestseller row

**Cart (secondary)**
- Background: `#767676`
- Text: `#ffffff`
- Radius: 8px
- Padding: 9px 14px
- Height: 38px
- Font: 14px / 500 / 22px Pretendard
- Hover: background `#595959`
- Pressed: background `#292929`
- Use: 장바구니 above 바로구매 in each row

**Outline button**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#cccccc`
- Radius: 8px
- Padding: 9px 14px
- Height: 38px
- Font: 14px / 500 / 22px Pretendard
- Hover: background `#f2f2f2`
- Pressed: background `#f2f2f2`
- Use: toolbar 장바구니 and 엑셀로 받기 over the list, 상세보기 in rows; the 38 × 38 찜하기 icon button shares the border

**View toggle (segmented)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cccccc`
- Radius: 4px on the outer corners of the pair
- Padding: 11px
- Height: 38px
- Hover / pressed: background `#f2f2f2`
- Use: list / thumbnail view pair over the bestseller list

**Error-view actions**
- 이전페이지: `#5055b1` fill, `#ffffff` label, 8px radius, 125 × 50, 16px / 700 / 24px
- 홈으로 가기: transparent fill, 1px solid `#5055b1` border, `#5055b1` label, same geometry
- Use: the pair the product route rendered as its error view

**Round controls**
- 전체메뉴열기: 44 × 44, transparent, 1px solid `#d5d5d5`, fully round, in the header
- Side-bar counter: 50 × 50, `#f2f2f2`, fully round

### Tabs & Navigation

**Category tab (store)**
- Text: `#767676`
- Padding: 0px 14px
- Height: 42px (140px wide)
- Font: 16px / 400 / 24px Pretendard
- Selected: `#000000` at weight 500
- Use: category tabs of the weekly bestseller

**Rail filter (home)**
- Text: `#595959`, 14px / 400 / 22px
- Selected: `#474c98` at weight 700
- Use: filters over a home rail

**Promotional links**
- Text: `#2a760c` (home) or `#195800` (store, product), 16px / 700 / 24px
- Use: highlighted items in the header navigation

### Inputs

**Integrated search**
- Scope button: 116 × 48, radius 24px 0 0 24px (the left end of a pill)
- Input: 395 × 42, padding 13px 16px, 14px / 400 / 22px, `#000000`
- Use: header search on all three routes

### Cards & Lists

**Book-cover link**
- Border: 1px solid `#eaeaea`
- Radius: 16px 16px 16px 0px on 46 captured covers; square on the rest
- Use: covers in home rails

**Bestseller row**
- Border: 1px solid `#eaeaea` on top
- Padding: 36px 0px 0px
- Use: rows of the weekly bestseller, 984px wide

**Footer controls**
- Family Site / SNS 바로가기: `#ffffff`, 1px solid `#d5d5d5`, 8px radius, 8px 14px padding, 200 × 40
- 서비스가입확인: 1px solid `#cccccc`, 4px radius, 24px tall, 12px text; 사업자정보확인: 1px solid `#d5d5d5`, `#595959` text

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out Kyobo routes plus a fixed keyboard-probe state read and first-party context)
**Tier 1 sources:** https://www.kyobobook.co.kr/ ; https://store.kyobobook.co.kr/bestseller/online/weekly ; https://design.kyobobook.co.kr/ (foundation/color, foundation/typography, component/button, voice, brand/principle) ; https://company.kyobobook.co.kr/
**Tier 2 sources:** getdesign.md/kyobobook (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=kyobobook (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured routes; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (바로구매)** | `#5055b1` → `#2c307c`, settled after a 0.2s transition (probe). |
| **Hover / pressed (장바구니)** | `#767676` → `#595959` on hover, `#292929` on press (probe). |
| **Hover / pressed (outline buttons, view toggle)** | Transparent or `#ffffff` → `#f2f2f2` (probe). |
| **Selected** | Store category tab `#000000` at weight 500; home rail filter `#474c98` at weight 700 (rest values). |
| **Error view** | The product route rendered an 18px heading, a grey `#767676` explanation and the 홈으로 가기 / 이전페이지 pair. |
| **Focus** | Not measured: the probe ran with `--no-focus` and the collector's pseudo-state pass stalled on all three routes. |

KDS documents Default, Hover and Disabled for its button types; the disabled look was not observed and is not specified. Empty, loading and success states were not captured.

Live state probe, 2026-10-16 (`https://product.kyobobook.co.kr/detail/S000221463512`), `error-primary-button`: pressed — bg #2c307c.

## Do's and Don'ts

### Do
- Use `#5055b1` for the one primary action in an area (KDS: "한 영역에서는 하나의 행동만 유도해야 합니다"), darkening to `#2c307c` on hover and press
- Put the secondary action in grey `#767676` beside it
- Keep text on `#000000`, `#595959` and `#767676`
- Separate with `#eaeaea` hairlines and `#cccccc` / `#d5d5d5` borders
- Track every text size at -1% of its size
- Give actions an 8px radius and tags a 4px radius
- Write CTAs as action verbs (-하기, -보기), at most 12 characters, with "/" between two choices (KDS Voice)

### Don't
- Don't add shadows; none of the captured elements has one
- Don't use more than one filled indigo action per area
- Don't promote the KDS green or reds into interface colours without the product showing them
- Don't render Pretendard, Roboto or Noto Sans KR with another face in their place
- Don't invent a focus style; none was measured

## Voice & Tone

Kyobo's voice is written down in the KDS Voice guide. It uses 구어체 (해요체), addressing customers respectfully and warmly — "교보문고는 구어체(해요체)로 고객을 두루 높이면서 부드럽고 친근하게 상호작용합니다" — and switches to 문어체 for negative statements and policy, to give stability and trust. Its five principles are 간결하고 명확한 (one piece of information per sentence), 책임감 있는, 공감하는, 존중하는 and 동기부여하는. The tone attributes are 위트있는, 고객을 잘 아는, 정돈된, 다양한, 지혜로운, 포용적인, 영감이 가득한 and 고급스러운.

| Context | Tone |
|---|---|
| CTA buttons | Action verbs (-하기, -보기); two choices separated by "/"; no more than 12 characters including spaces (KDS) |
| Product and service names | Only the official names Kyobo has set (KDS 표기규칙) |
| Empty pages | State the situation briefly and give a clear CTA to a meaningful next path (KDS) |
| Policy and negative statements | 문어체 |
| Everyday copy | 해요체, friendly and concise |

**Voice samples (verbatim, opened 2026-09-30):**
- "교보문고 | 대한민국 최고의 도서쇼핑몰" — portal page title.
- "온라인 주간 베스트 | 전체 - 교보문고" — store page title.
- "바로구매", "장바구니", "상세보기", "엑셀로 받기" — row and toolbar actions on the weekly bestseller.
- "홈으로 가기", "이전페이지" — the product route's error view.
- "사용자 경험을 가치있게, 고객의 삶을 흥미롭게" — KDS mission line.

**Forbidden register** (KDS): CTA labels over 12 characters, abstract wording without a clear action, unofficial product names, and messages that do not show the next path.

## Agent Prompt Guide

### Quick Color Reference
- Primary action: `#5055b1`, hover/pressed `#2c307c`, label `#ffffff`
- Secondary action: `#767676`, hover `#595959`, pressed `#292929`
- Text: `#000000`, `#595959`, `#767676`; selected rail filter `#474c98`
- Promotional links: `#2a760c` (home) / `#195800` (store)
- Lines: `#eaeaea` hairline, `#d5d5d5` and `#cccccc` borders; tint `#f2f2f2`

### Example Component Prompts
- "Create a bestseller row: 1px `#eaeaea` top rule, 36px top padding, cover on the left, 14px Pretendard introduction in `#595959` with -0.14px tracking, and on the right a stacked pair of 100 × 38 buttons with 8px radius and 9px 14px padding: 장바구니 in `#767676` (hover `#595959`, pressed `#292929`) above 바로구매 in `#5055b1` (hover and pressed `#2c307c`), white 14px / 500 labels, 0.2s colour transition."
- "Build category tabs: 140 × 42 cells, 16px Pretendard at weight 400 in `#767676`; the selected tab `#000000` at weight 500."
- "Build an outline toolbar button: transparent, 1px solid `#cccccc`, 8px radius, 9px 14px padding, 38px tall, 14px / 500 black label; hover and pressed fill `#f2f2f2`."

### Iteration Guide
1. One indigo `#5055b1` action per area; grey `#767676` for the partner
2. Black and grey text; colour only for action, selection and promotion
3. Hairlines and borders instead of shadows
4. 8px actions, 4px tags, 16px 16px 16px 0px covers
5. -1% tracking at every size
6. Pretendard on commerce routes; Roboto with NotoSansKR on the portal, as KDS specifies

---

## Governance

### Known Gaps

- **Contrast, `outline-button`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `error-outline-button`.** Text `#5055b1` on `#00000000` measures 3.28:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

---
name: Danawa
colors:
  primary: '#2070eb'
  on-primary: '#ffffff'
  category: '#06b87f'
  ink: '#000000'
  ink-soft: '#0f0f0f'
  body: '#333333'
  muted: '#555555'
  muted-alt: '#767676'
  action-dark: '#333333'
  action-dark-hover: '#141414'
  white: '#ffffff'
  surface: '#f8f8f8'
  tint: '#ebf3ff'
  hairline: '#e0e0e0'
  border: '#bfbfbf'
  border-button: '#b9bec5'
typography:
  product-title:
    fontSize: 25px
    fontWeight: 700
    use: 'Product name at the top of the product page (h3.prod_tit), in #333333, line-height normal'
  section:
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.62
    use: 'Home section titles (h2.title), 34px line, in #0f0f0f; one 20px variant'
  tab:
    fontSize: 19px
    fontWeight: 700
    lineHeight: 2.37
    use: 'Product-page section tabs (h3.tab_txt), 45px line; selected #2070eb, others #333333'
  search:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.11
    use: 'Search field text on the list page and on home once focused, 20px line, in #0f0f0f'
  button-lg:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.31
    use: 전체 카테고리 button label on home, 21px line
  nav:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 2.27
    use: 'Home service navigation links, 34px line, in #333333; one bold #2070eb item'
  button:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 2.13
    use: 최저가 구매하기 and 대량구매 buttons on the product page, 32px line
  subsection:
    fontSize: 15px
    fontWeight: 700
    use: 'Product-page block headings (h4.tit), in #333333, line-height normal'
  pill:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 2.64
    use: Selected filter pill label, 37px line; unselected pills are 400
  badge:
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.5
    use: 'Purchase badge on list and product-page ad cards, 18px line, white on #2070eb'
  body:
    fontSize: 12px
    fontWeight: 400
    use: Default body size on the list and product pages (home body is 16px), line-height normal
rounded:
  search: 52px
  pill: 19px
  tab: 8px
  card: 8px
  pager: 4px
  utility: 2px
spacing:
  badge-x: 6
  badge-y: 2
  category-x: 16
  category-y: 11
  search-left: 20
  button-x: 15
components:
  category-button:
    type: button
    backgroundColor: '#06b87f'
    textColor: '#ffffff'
    border: 'bottom 1px #31cb9a'
    rounded: 8px 8px 0px 0px
    padding: 11px 16px
    height: 44px
    typography: 16px / 700 / 21px Pretendard
    hover: label underline in white; fill unchanged
    pressed: label underline in white; fill unchanged
    focus: browser default outline only (rgb(0, 95, 204) auto 1px); no authored focus style
    states: 'probe on home: transition all 0s; hover and pressed underline the label; focus shows the default ring'
    use: 전체 카테고리 on the home header, the tab that opens the category tree
  search-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#767676'
    rounded: 52px
    padding: 8px 0px 10px 20px
    height: 44px
    typography: 16px / 400 Pretendard
    hover: no change
    focus: 'text #0f0f0f at 18px, padding 10px 0px 10px 20px, wrapper shadow rgba(0, 0, 0, 0.08) 2px 2px 6px; the change persists after blur'
    states: 'probe on home: hover and pressed no change; focus restyles the field and its wrapper'
    use: Global search pill in the header of all three pages; the list page renders it in its focused style at rest
  filter-pill:
    type: button
    backgroundColor: '#ebf3ff'
    textColor: '#555555'
    rounded: 19px
    size: 220px x 38px
    typography: 14px / 400 / 37px Pretendard
    selected: 'bg #2070eb, fg #ffffff, 700'
    hover: label underline; fill unchanged
    pressed: label underline; fill unchanged
    states: 'probe on the product page: transition all 0s; focus not measured'
    use: Opinion filter pills (전체보기, 의견 ...) in the product-page community block
  buy-button:
    type: button
    backgroundColor: '#333333'
    textColor: '#ffffff'
    rounded: 2px
    padding: 0px 15px
    height: 32px
    typography: 15px / 700 / 32px Pretendard
    hover: 'bg #141414'
    pressed: 'bg #141414'
    states: 'probe on the product page: transition all 0.3s ease-in-out, read after it settled; focus not measured'
    use: 최저가 구매하기, the product page's buy action
  b2b-button:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    border: '1px solid #c4c4c4'
    rounded: 2px
    padding: 0px 12px
    height: 32px
    typography: 15px / 700 / 32px Pretendard
    states: rest only; no state frame and not probed
    use: 대량구매 beside the buy action on the product page
  purchase-badge:
    type: badge
    backgroundColor: '#2070eb'
    textColor: '#ffffff'
    rounded: 0px 0px 8px
    padding: 2px 6px
    height: 22px
    typography: 12px / 700 / 18px Pretendard
    use: Purchase badge on the corner of ad product cards (ten instances on the list and product pages)
  product-tab:
    type: tab
    textColor: '#333333'
    height: 45px
    typography: 19px / 700 / 45px Pretendard
    selected: 'fg #2070eb'
    states: selected variant read from rest values of sibling tabs; hover and focus not measured
    use: Section tabs on the product page (가격비교, 상품정보 ...)
  clip-tab:
    type: tab
    backgroundColor: '#f8f8f8'
    textColor: '#333333'
    height: 37px
    typography: 14px / 400 Pretendard
    selected: 'bg #ffffff, fg #0f0f0f, 700'
    states: selected variant read from rest values of sibling tabs; hover and focus not measured
    use: Vertical shopping-clip tabs on home (h2.main-clip__tab)
  seller-buy-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '1px solid #b9bec5'
    rounded: 0px
    size: 70px x 28px
    typography: 13px / 700 / 26px Pretendard
    states: rest on ten captured instances; no state frame and not probed
    use: Per-seller buy link in the price-comparison table (ten instances)
  detail-search-button:
    type: button
    backgroundColor: '#333333'
    textColor: '#ffffff'
    rounded: 2px
    size: 90px x 28px
    typography: 12px / 400 / 28px Pretendard
    states: rest only; no state frame and not probed
    use: 상세 검색 in the list page's filter bar
  outline-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#2070eb'
    border: '1px solid #2070eb'
    rounded: 8px
    size: 400px x 68px
    typography: 20px / 700 Pretendard
    shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px
    states: rest only; no state frame and not probed
    use: Large outlined blue button low on the product page; its label was not recorded; the only shadowed element captured
  pager-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #e0e0e0'
    rounded: 4px 0px 0px 4px
    size: 20px x 20px
    states: rest on six captured pairs; no state frame and not probed
    use: Paired prev/next arrows on home carousels (the next arrow mirrors the radius)
  category-link:
    type: button
    backgroundColor: '#06b87f'
    textColor: '#ffffff'
    rounded: 2px
    size: 131px x 30px
    typography: 12px / 400 Pretendard
    hover: no change
    pressed: no change
    states: 'probe on the product page: no hover or pressed change; focus not measured'
    use: 전체 카테고리 link above the product-page breadcrumb
fonts:
  roles:
    body: Pretendard
---

# Design System Inspiration of Danawa

## Overview

### Visual Theme & Atmosphere

Danawa (다나와) is a Korean price-comparison portal. Its own service page says it builds content and community around price comparison to supply "양질의 쇼핑정보", helping shoppers decide, and aims to be "온라인 쇼핑의 관문이자 첫걸음". It compares prices on computers, appliances, baby goods, games, cars, outdoor gear and more, with detailed option-level product data and one search box for everything. The home page title is its slogan, "비교하고 잘 사는, 다나와".

The company behind it has changed while the service has stayed the same. ConnectWave's history page says Koreacenter signed to buy 51.29% of (주)다나와 in 2021, and in 2022 Koreacenter and Danawa merged to form (주)커넥트웨이브. The Danawa footer now names (주)커넥트웨이브 as operator and content producer, headquartered in 가산동, Seoul. ConnectWave describes Danawa and 에누리 as "국내 최초 가격비교 플랫폼", built on 1.4 billion product records.

The interface is a dense information tool, not a showcase. On white (`#ffffff`), a near-black ladder does most of the work: `#000000` as the home body colour, `#0f0f0f` for section titles, `#333333` for product-page copy, `#555555` and `#767676` for secondary labels. Pretendard is the only face that loads. Most working sizes are 12–15px, with a 25px product name and 19–21px section headings. Grey (`#f8f8f8`) and pale blue (`#ebf3ff`) fills mark out zones. Hairlines (`#e0e0e0`, `#bfbfbf`, `#b9bec5`) separate controls. Only one recorded element in 1,469 has a shadow.

Colour is rationed by role. Blue `#2070eb` marks what is selected or promoted, and it appears on all three captured pages. On the product page it fills the selected filter pill and colours the selected section tab. On the list and product pages it fills the purchase badges on ad cards. On home it colours one bold navigation item. Green `#06b87f` fills only the 전체 카테고리 control, on home and on the product page. The buy action itself is dark: 최저가 구매하기 is `#333333` and turns `#141414` on hover.

**Key Characteristics:**
- Pretendard everywhere, loaded from `static.danawa.com`; dense 12–15px working sizes
- Blue `#2070eb` for selection and promotion: selected pill, selected tab, purchase badge
- Green `#06b87f` only on the 전체 카테고리 control; the BI green `#68c91c` belongs to the logo
- Dark `#333333` buy action with a `#141414` hover
- Near-black text ladder `#000000` / `#0f0f0f` / `#333333` / `#555555` / `#767676`
- Flat surfaces separated by hairlines and `#f8f8f8` / `#ebf3ff` fills
- Mixed geometry: a 52px search pill and 19px filter pills beside 2px and 0px utility buttons

### Primary tasks

- Search for a product and compare prices across sellers
- Browse a category list and narrow it with filters
- Open a product page, compare sellers and follow the lowest-price link
- Check a product's purchase and ad badges before choosing

### Brand Narrative

The service page says price comparison is Danawa's core, surrounded by content and community. Satisfying shoppers with good information is, in its words, "가격비교 사이트의 본질". The BI page presents the green curved symbol as a guide into shopping ("쇼핑의 시작 다나와"), and the wordmark as a plain gothic that signals confidence and trust. ConnectWave's history records the ownership changes: 2021, the agreement to buy 51.29% of (주)다나와; 2022, the Koreacenter–Danawa merger creating (주)커넥트웨이브, and the launch of Danawa's price-subscription service. The consumer-facing brand, its slogan and its information-first interface stayed Danawa.

### Principles

1. **Comparison is the product.** Keep price, seller and purchase action aligned and legible.
2. **Density serves the shopper.** Small type, tight rows, more options per screen.
3. **Colour marks state.** Blue for selected or promoted, dark for buy, green for the category entry.
4. **Flat and fast.** Hairlines and fills, not elevation.

*Principles are editorial readings of the captured interface and the company's stated mission.*

### Personas

*Fictional archetypes, not real people.*

**Kang Min-su, 27, Seoul.** Builds his own PCs and compares component prices across sellers before every purchase. Wants more rows per screen, not more whitespace.

**Lee Hyun-jung, 41, Suwon.** Compares appliances for the household, filters by category and follows the lowest-price link.

**Park Dae-ho, 38, Incheon.** Buys office equipment and uses the 대량구매 path next to the buy action.

## Colors

### Primary
- **Selection Blue** (`#2070eb`): the primary colour. It fills the selected filter pill on the product page (white 700 label), colours the selected product-page tab, fills the purchase badge on ad cards, draws the border and label of the large outlined button, and colours one bold navigation item on home. It is the only saturated colour on all three captured pages in a selected or accent role, so it is the primary. Text on it is `#ffffff`.

### Category and action
- **Category Green** (`#06b87f`): fills 전체 카테고리 on home (201 × 44, bottom border `#31cb9a`) and on the product page (131 × 30). The list page does not use it; there, 전체 카테고리 is blue text. It is a navigation control, not the buy action.
- **Action Dark** (`#333333`): 최저가 구매하기 and 상세 검색. Hover `#141414`, read by the probe after the 0.3s transition.

### Neutral & Surface
- **White** (`#ffffff`): list and product page background, search field, pager and seller-buy fills.
- **Surface** (`#f8f8f8`): home shopping-clip tabs and the list page category links.
- **Tint** (`#ebf3ff`): unselected filter pills.
- **Hairline** (`#e0e0e0`): pager arrow borders on home.
- **Border** (`#bfbfbf`): quantity select and footer buttons.
- **Border Button** (`#b9bec5`): per-seller buy links; 대량구매 uses `#c4c4c4`.

### Text
- **Ink** (`#000000`): home body colour and pager arrows.
- **Ink Soft** (`#0f0f0f`): home section titles, the selected clip tab and focused search text.
- **Body** (`#333333`): product-page body, tabs, navigation.
- **Muted** (`#555555`): list-page secondary buttons and unselected pill labels.
- **Muted Alt** (`#767676`): search placeholder.

### Brand assets, not tokens
The BI page (BI소개) sets the logo's online colours: green R104 G201 B28 (`#68c91c`) and black R66 G66 B66 (`#424242`), with PANTONE 368 C and 425 C for print. Neither renders as an interface fill on the captured pages, so both are logo colours only. The symbol is described as "그린컬러의 곡선모양", standing for "쇼핑의 시작 다나와". The wordmark "danawa" is a plain gothic, chosen for trust and clarity.

## Typography

### Font Family
- **Pretendard**: live surface use. It is loaded from `static.danawa.com/font/` (WOFF2 and WOFF dynamic subsets) and computes on 1,469 recorded elements across headings, body, buttons, inputs, tabs and badges. The stack continues `-apple-system, system-ui, Malgun Gothic, 맑은 고딕, 돋움, dotum, 굴림, gulim, Arial, sans-serif, Apple SD Gothic Neo`. Pretendard is distributed under the SIL Open Font License 1.1.
- **Pretendard Variable**: declared only. The declaration comes from `cdnet.nasmob.com`, an ad SDK host, not from Danawa. It is used 0 times.
- **swiper-icons**: an inline carousel icon font, declared only.
- No Danawa page opened this session names its typeface, so official product use is not claimed.

### Hierarchy

| Role | Size | Weight | Line height | Where |
|---|---|---|---|---|
| Product title | 25px | 700 | normal | Product page `h3.prod_tit`, `#333333` |
| Section | 21px | 700 | 34px | Home `h2.title`, `#0f0f0f` |
| Tab | 19px | 700 | 45px | Product-page tabs; selected `#2070eb` |
| Search | 18px | 400 | 20px | List-page search text, `#0f0f0f` |
| Button large | 16px | 700 | 21px | 전체 카테고리 |
| Nav | 15px | 400 | 34px | Home service links |
| Button | 15px | 700 | 32px | 최저가 구매하기, 대량구매 |
| Subsection | 15px | 700 | normal | Product-page `h4.tit` |
| Pill | 14px | 700 | 37px | Selected filter pill |
| Badge | 12px | 700 | 18px | Purchase badge |
| Body | 12px | 400 | normal | List and product page default |

### Principles
- One family; hierarchy comes from size and weight 400 against 700.
- Small working sizes: list and product pages default to 12px body.
- No letter-spacing is authored on the captured headings.

## Layout

### Spacing System
Measured values only: badge 2px / 6px, category button 11px / 16px, search left inset 20px, buy button 15px sides, bulk button 12px sides. There is no evidence of a named scale.

### Grid & Container
The home page ad-card row is 1260px wide. On the product page it is 1220px wide. The viewport was 1440px.

### Whitespace Philosophy
Rows are packed tightly, and separation comes from hairlines and tinted fills rather than gaps.

### Border Radius Scale
0 (most utility controls) · 2px (buy, bulk, detail search, category link) · 4px (pager pair) · 8px (category tab top, outlined button, badge corner) · 19px (filter pills) · 52px (search pill). The circular controls are 50%.

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop layout was captured. Breakpoints are not described.

#### Touch Targets
Measured heights: search 44px, category button 44px, filter pills 38px, buy 32px, seller-buy 28px, pagers 20px.

#### Collapsing Strategy
Not captured.

#### Image Behavior
Product thumbnails fill the ad cards. Their scaling was not measured.

## Elevation & Depth

The interface is flat. Of 1,469 recorded elements, one computes a box-shadow: the outlined button (`rgba(0, 0, 0, 0.2) 0px 2px 8px 0px`). The search wrapper gains `rgba(0, 0, 0, 0.08) 2px 2px 6px` only on focus.

## Motion & Easing

The probe read the transitions these controls compute. 최저가 구매하기 transitions all properties over 0.3s `ease-in-out`. 전체 카테고리, the filter pills, the product-page category link and the search field compute `transition: all 0s`, so they change instantly. Carousel timing and other motion were not measured; treat them as unspecified and honour `prefers-reduced-motion`.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/danawa.json (capturedAt 2026-09-30T13:12:43Z), deterministic collector, 1440x900, logged out: www.danawa.com, prod.danawa.com/list/?cate=112758, prod.danawa.com/info/?pcode=122659760. States: fixed keyboard probe raws docs/research/2026-09-29-growth/raw/danawa-states-{home,product}.json.
- §1, §10, §11: danawa.com/corp/aboutus/about_us.html (서비스 정보), danawa.com/corp/prcenter/bi.html (BI소개), connectwave.co.kr/cowave.html (연혁), the home title and footer, opened 2026-09-30.
- §3 licence: the Pretendard LICENSE on GitHub.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Buttons

**Category button (전체 카테고리, home)**
- Background `#06b87f`, text `#ffffff`, bottom border 1px `#31cb9a`
- Radius 8px 8px 0 0, padding 11px 16px, height 44px, 16px / 700 / 21px
- Hover and pressed: the label underlines in white; the fill does not change. Focus: only the browser's default ring. `transition: all 0s`.

**Buy (최저가 구매하기)**
- Background `#333333`, text `#ffffff`, radius 2px, padding 0 15px, height 32px, 15px / 700 / 32px
- Hover and pressed `#141414`; `transition: all 0.3s ease-in-out`

**Bulk (대량구매)**
- Transparent, text `#333333`, 1px `#c4c4c4` border, radius 2px, padding 0 12px, height 32px, 15px / 700

**Seller buy link**
- `#ffffff`, text `#333333`, 1px `#b9bec5` border, square corners, 70 × 28, 13px / 700 / 26px

**Detail search (상세 검색)**
- `#333333`, text `#ffffff`, radius 2px, 90 × 28, 12px / 400 / 28px

**Outlined button**
- `#ffffff`, text and 1px border `#2070eb`, radius 8px, 400 × 68, 20px / 700, shadow `rgba(0, 0, 0, 0.2) 0px 2px 8px 0px`. The label was not recorded.

**Category link (product page)**
- `#06b87f`, text `#ffffff`, radius 2px, 131 × 30, 12px / 400; the probe found no hover or pressed change

**Pager arrows (home carousels)**
- `#ffffff`, 1px `#e0e0e0` border, 20 × 20, radius 4px on the outer corners of the pair

### Filters & Tabs

**Filter pill**
- Unselected: `#ebf3ff`, text `#555555`, 14px / 400 / 37px, radius 19px, 220 × 38
- Selected: `#2070eb`, text `#ffffff`, 700
- Hover and pressed underline the label; fills stay the same

**Product tabs**
- 19px / 700 / 45px; `#333333`, selected `#2070eb`

**Shopping-clip tabs (home)**
- `#f8f8f8`, text `#333333`, 14px / 400, 37px tall; selected `#ffffff`, text `#0f0f0f`, 700

### Inputs

**Search pill**
- `#ffffff`, placeholder `#767676`, radius 52px, padding 8px 0 10px 20px, height 44px, 16px / 400
- Focus: text `#0f0f0f` at 18px, padding 10px 0 10px 20px, and the wrapper gains `rgba(0, 0, 0, 0.08) 2px 2px 6px`. The change stays after blur. Hover: no change.

### Badges

**Purchase badge**
- `#2070eb`, text `#ffffff`, 12px / 700 / 18px, padding 2px 6px, radius 0 0 8px (bottom-right only), 22px tall

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out Danawa pages plus fixed keyboard-probe state reads and first-party company context)
**Tier 1 sources:** https://www.danawa.com/ ; https://prod.danawa.com/list/?cate=112758 ; https://prod.danawa.com/info/?pcode=122659760 ; https://www.danawa.com/corp/aboutus/about_us.html?snb=0 ; https://www.danawa.com/corp/prcenter/bi.html?snb=2
**Tier 2 sources:** getdesign.md/danawa (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=danawa (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

---

### States

| State | Treatment |
|---|---|
| **Hover** | Buy button `#333333` → `#141414`. Category button and filter pills underline the label; fills unchanged. The product-page category link does not change. |
| **Pressed** | Same as hover on each probed control. |
| **Selected** | Filter pill fills `#2070eb` with white 700 text. Product tab turns `#2070eb`. Clip tab turns `#ffffff` with `#0f0f0f` 700 text. |
| **Focus** | Search: text `#0f0f0f` at 18px plus a wrapper shadow, which stays after blur. Category button: browser default ring only. Other controls: not measured. |

Empty, loading, error, success and disabled states were not captured and are not described. `interactionCount` is 0 in the bundle; that does not mean the page has no states.

## Do's and Don'ts

### Do
- Use `#2070eb` for what is selected or promoted: pills, tabs, badges.
- Keep the buy action dark (`#333333`, hover `#141414`).
- Keep green `#06b87f` to the category entry.
- Set everything in Pretendard and build hierarchy from size and weight.
- Separate dense rows with hairlines, not shadows.

### Don't
- Don't use the BI green `#68c91c` as a UI fill.
- Don't add a price red or promotional purple; none renders on the captured pages.
- Don't add a second typeface.
- Don't raise cards with shadows.

## Voice & Tone

The copy is practical and number-first. The slogan "비교하고 잘 사는, 다나와" sets the register: compare, then buy well. The company page sticks to the same promise: quality shopping information that helps the shopper decide.

| Context | Tone |
|---|---|
| Actions | Plain verbs: "최저가 구매하기", "대량구매", "상세 검색", "전체 카테고리". |
| Search | Direct: "검색어를 입력해주세요." |
| Company | Earnest and consumer-first: "양질의 쇼핑정보를 제공하여 소비자의 구매결정을 돕고". |

Avoid luxury framing and superlatives that no number backs up. Never let copy obscure the price or the seller.

## Agent Prompt Guide

### Quick Color Reference
- Primary / selection: `#2070eb` (text `#ffffff`)
- Category entry: `#06b87f`
- Buy action: `#333333` → hover `#141414`
- Text: `#000000`, `#0f0f0f`, `#333333`, `#555555`, `#767676`
- Surfaces: `#ffffff`, `#f8f8f8`, `#ebf3ff`
- Lines: `#e0e0e0`, `#bfbfbf`, `#b9bec5`

### Example Component Prompts
- "A 220 × 38 filter pill row in Pretendard 14px: selected `#2070eb` with white 700 label, others `#ebf3ff` with `#555555` 400 labels, 19px radius, underline on hover."
- "A product header: 25px / 700 `#333333` title, then a 124 × 32 `#333333` buy button, 2px radius, 15px / 700 white label, `#141414` on hover, beside a transparent 대량구매 button with a 1px `#c4c4c4` border."
- "A 44px white search pill with 52px radius, `#767676` 16px placeholder; on focus the text turns `#0f0f0f` at 18px and the wrapper gains a soft 2px 2px 6px shadow."

### Iteration Guide
1. Start from density: 12px body, 15px buttons, 19–21px section heads.
2. Add blue only where something is selected or promoted.
3. Keep the buy action dark and the category entry green.
4. Separate with `#e0e0e0` hairlines and `#f8f8f8` fills.

## Governance

### Known Gaps

- **Contrast, `category-button`.** Text `#ffffff` on `#06b87f` measures 2.57:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `b2b-button`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `category-link`.** Text `#ffffff` on `#06b87f` measures 2.57:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

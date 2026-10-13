---
name: CJ ONSTYLE
colors:
  primary: '#640faf'
  on-primary: '#ffffff'
  ink: '#000000'
  ink-strong: '#111111'
  tab-ink: '#333333'
  muted: '#767676'
  faint: '#929292'
  chrome: '#26292a'
  border-strong: '#b2b2b2'
  line: '#d1d1d1'
  line-soft: '#e6e6e6'
  control-line: '#c5c5c5'
  select-line: '#d9d9d9'
  surface: '#f0f0f0'
  white: '#ffffff'
typography:
  module-title:
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.19
    letterSpacing: '-0.5px'
    use: 'Module titles on the home tab (tit_module), Pretendard, 31px line, in #111111'
  logo-heading:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.5px'
    use: 'The h1 around the logo on every captured page, 36px line, in #000000; set in the declared 나눔바른고딕 stack, whose rendered face is unresolved'
  buy-label:
    fontSize: 20px
    fontWeight: 400
    use: 바로구매, 장바구니 and 선물하기 labels on the product page, set in the 나눔바른고딕 stack on a 60px line box
  tab:
    fontSize: 18px
    fontWeight: 700
    use: Selected product-page section tab; unselected tabs are 18px / 400
  search:
    fontSize: 18px
    fontWeight: 400
    use: Header search field; Pretendard on the home tab, the 나눔바른고딕 stack on the product and brand pages
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.25px'
    use: 'Module lists and product text on the home tab, Pretendard, 24px line, in #000000'
  chip:
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.2
    use: Selected module filter chip on the home tab, Pretendard, 18px line; unselected chips are 15px / 400
  more:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.23
    letterSpacing: '-0.25px'
    use: Module 'more' links on the home tab, Pretendard, 16px line
  meta:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    use: 'Product meta on the brand and product pages, 18px line, in #000000, in the 나눔바른고딕 stack'
  fine:
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.5px'
    use: 'Fine labels on the product page, 16.5px line, in #929292, in a 돋움 stack whose rendered face is unresolved'
rounded:
  square: 0px
  tag: 2px
  button: 4px
  more: 14px
  chip: 18px
spacing:
  ask-y: 22
  ask-left: 72
  select-left: 15
  skip-left: 26
  skip-right: 20
  more-left: 12
  more-right: 8
components:
  buy-button:
    type: button
    backgroundColor: '#640faf'
    textColor: '#ffffff'
    border: '1px solid #640faf'
    rounded: 4px
    height: 60px
    typography: 20px / 400, 나눔바른고딕 stack
    states: rest only; no state frame was captured for this control and it was not probed
    use: 바로구매 (u_btn btn_buy_now) on the product page, 162 x 60 at the right of the buy row; a 205 x 42 copy closes the lower buy panel
  cart-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#640faf'
    border: '1px solid #640faf'
    rounded: 4px
    height: 60px
    typography: 20px / 400, 나눔바른고딕 stack
    states: rest only; no state frame
    use: 장바구니 (btn_cart_go), the outlined partner left of 바로구매; 선물하기 (btn_gift, 64 x 60) uses the same outline
  wish-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#111111'
    border: '1px solid #b2b2b2'
    rounded: 4px
    size: 64px x 60px
    states: rest only; no state frame
    use: 찜 wishlist toggle (btn_dip) at the start of the buy row
  category-toggle:
    type: button
    textColor: '#111111'
    height: 54px
    typography: 15px / 400, 나눔바른고딕 stack
    hover: 'bg #640faf, fg #ffffff'
    pressed: 'bg #640faf, fg #ffffff'
    states: the bundle's hover and pressed frames agree on the violet fill with white text
    use: 카테고리 toggle (btn_gnb_toggle), 181 x 54, at the left of the global navigation
  detail-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#767676'
    border: '0 0 1px #767676 (bottom)'
    height: 62px
    typography: 18px / 400, 나눔바른고딕 stack
    selected: 'fg #333333, 18px / 700, bottom border 1px #333333'
    states: selected variant read from rest values
    use: Product-page section tabs, 253 x 62
  module-chip:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#111111'
    border: '1px solid #e6e6e6'
    rounded: 18px
    height: 36px
    typography: 15px / 400 Pretendard
    selected: 'bg #111111, fg #ffffff, border 1px #111111, 15px / 700'
    states: selected variant read from rest values
    use: Filter chips (btn_tab) under home module titles
  more-chip:
    type: button
    textColor: '#111111'
    border: '1px solid #d1d1d1'
    rounded: 14px
    padding: 0px 8px 0px 12px
    height: 28px
    typography: 13px / 400 Pretendard
    states: rest only; the home tab's pseudo-state pass stalled and was logged unmeasured
    use: '''More'' links beside home module titles, 99 x 28'
  carousel-control:
    type: button
    backgroundColor: '#ffffff'
    border: '1px solid #d1d1d1'
    rounded: 18px 0 0 18px (previous), 0 18px 18px 0 (next), 50% (pause)
    height: 36px
    states: rest only; hover unmeasured
    use: Previous, next and pause controls of the home hero carousel
  option-select:
    type: input
    textColor: '#111111'
    border: '1px solid #d9d9d9'
    padding: 0px 33px 0px 15px
    height: 45px
    typography: 15px / 400, 나눔바른고딕 stack
    states: rest only; the collector did not open it
    use: Product option selector (select_txt), 470 x 45
  search-input:
    type: input
    textColor: '#111111'
    padding: 0px 50px 0px 0px
    height: 46px
    typography: 18px / 400 Pretendard (home)
    states: rest only; the input itself draws no border
    use: Header search field, 314 x 46, on every captured page
  ask-banner:
    type: button
    backgroundColor: '#f0f0f0'
    textColor: '#000000'
    rounded: 2px
    padding: 22px 50px 22px 72px
    size: 760px x 80px
    typography: 12px / 400 / 18px
    states: rest only; no state frame
    use: Product-page entry banner (btn_ask) with a 34-character label
  view-toggle:
    type: toggle
    border: '1px solid #d9d9d9'
    size: 30px x 30px
    checked: 'border 1px solid #640faf on the active view (ico_gallery on)'
    states: checked variant read from rest values
    use: Gallery and list view switch on the brand page
  page-dot:
    type: button
    backgroundColor: '#640faf'
    textColor: '#ffffff'
    rounded: 50%
    size: 30px x 30px
    states: the current page (lk_pn on) fills violet; read from rest values
    use: Current page of the brand page's pagination
  refresh-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#111111'
    border: '1px solid #c5c5c5'
    rounded: 4px
    height: 40px
    typography: 14px / 400, 나눔바른고딕 stack
    states: rest only; no state frame
    use: Filter reset (btn_refresh) on the brand page, 180 x 40
  skip-link:
    type: button
    backgroundColor: '#26292a'
    textColor: '#ffffff'
    padding: 0px 20px 0px 26px
    height: 34px
    typography: 11px / 400 / 14px, letter-spacing -1px
    states: positioned 34px above the viewport at rest (shown when focused); focus was not measured
    use: Skip links (shortcut_g) at the top of every captured page
fonts:
  roles:
    ui: Pretendard
---

# Design System Inspiration of CJ ONSTYLE

## Overview

### Visual Theme & Atmosphere

CJ ONSTYLE (CJ온스타일) is the commerce division of CJ ENM, legally (주)씨제이이엔엠 커머스부문 and headquartered in Seoul. By its own history page it opened Korea's first TV home-shopping channel in 1995 and joined CJ Group in 2000. It opened the CJmall internet store in 2001, shipped the industry's first smartphone app in 2010, and in 2012 became the first in the industry to pass 1 trillion won in sales. It launched the industry's first mobile live commerce in 2017, became part of CJ ENM in the 2018 merger, and unified its channels under the single brand CJ온스타일 in 2021. A very large mobile live show followed in 2024, and a global own-brand mall in 2026. The company calls itself "트렌드 PICK 라이브 편집샵" and describes shopping that you "discover through content and complete with taste" (콘텐츠로 발견하고, 취향으로 완성하는 쇼핑). It reports 1조 5,180억 won in 2025 sales and 20,000 brands in the app.

The storefront on display.cjonstyle.com reads like its heritage: a dense, white, black-on-white retail grid built for scanning. One deep violet, `#640faf`, carries commitment. It fills 바로구매, outlines 장바구니 and 선물하기, fills the 카테고리 toggle when a pointer rests on it, and marks the current page and the active view on brand pages. Everything else is neutral: `#000000` and `#111111` text, `#333333` for the selected tab, greys `#767676` and `#929292` for secondary copy, and a ladder of light greys for borders. The shell is square (0px corners on navigation, tabs and inputs), purchase buttons take 4px corners, and the newer home modules add pill chips at 18px. Two type systems coexist. The home tab's modules are set in Pretendard, served by CJ ONSTYLE itself. The product and brand pages ask for 나눔바른고딕 first, a family the browser never loads from the site, so the rendered face there is unresolved.

**Key Characteristics:**
- One violet `#640faf` for buy, cart and gift actions, the category-toggle hover, the current page and the active view
- Black-on-white density: `#000000` and `#111111` text, grey `#767676` and `#929292` secondary copy
- Square shell (0px) with 4px purchase buttons, 14px and 18px pill chips on the home tab, 2px on banners
- Pretendard on the home tab; the product and brand pages declare 나눔바른고딕 first
- Borders in steps of grey: `#b2b2b2`, `#c5c5c5`, `#d1d1d1`, `#d9d9d9`, `#e6e6e6`
- A dark `#26292a` skip-link bar hidden above the page

### Primary tasks

- Buy a product once its price and benefits add up
- Scan the home grid for the best discounts of the day
- Shop from a TV home-shopping broadcast inside the app
- Browse curated fashion and living categories on the storefront
- Place an order and follow its delivery afterwards

### Brand Narrative

CJ온스타일's history page calls its story "쇼핑의 방식을 바꿔온 30여년의 여정": a multichannel business spanning TV and mobile that moved to a one-platform, one-brand strategy. The milestones it lists are:
- 1995: Korea's first TV home-shopping channel
- 2000: acquired by CJ Group
- 2001: the CJmall internet store
- 2010: the industry's first smartphone shopping app, mobile CJmall
- 2012: the first in the industry to pass 1 trillion won in sales
- 2017: the industry's first mobile live commerce
- 2018: the CJ E&M merger and the birth of CJ ENM
- 2021: the unified brand CJ온스타일
- 2024: a very large mobile live show
- 2026: a global own-brand mall

By the numbers it publishes, CJ ONSTYLE had 1조 5,180억 won in sales in 2025, 66% growth in mobile live that year, 80 million annual mobile-live visitors, 20,000 brands in the app and 54 live IPs, which it calls the most in the industry. It describes itself as Korea's first video-commerce operator, a live pioneer from TV in 1995 to mobile in 2017.

Its mission page says CJ온스타일 expresses CJ Group's ONLYONE philosophy in the language of commerce. It aims to understand customers' lifestyles deeply, suggest tastes and needs they have not yet discovered, and connect products and content naturally. It calls "authentic recommendations and sensory products for the best lifestyle shopping experience" the direction of ONLYONE commerce. The business pages frame content commerce from TV to mobile, SNS and OTT, celebrity and influencer IP, trend-led curation and global expansion of K-lifestyle.

The storefront shows that lineage: dense, offer-led modules, broadcast times on product tiles, and one violet that means "buy".

### Principles

1. **The offer leads.** *UI implication:* discount, benefit and broadcast time sit on the tile before secondary detail.
2. **One colour means buy.** *UI implication:* `#640faf` is kept for purchase actions and selection.
3. **Density is a feature.** *UI implication:* small type, square cells, thin grey lines.
4. **Content drives commerce.** *UI implication:* live and TV labels (라이브쇼, 방송일정) ride on product tiles.
5. **Flat and fast.** *UI implication:* no shadows; lines and fills separate.

### Personas

*Personas below are fictional archetypes informed by publicly observable CJ ONSTYLE user segments (TV-home-shopping loyalists, mobile deal-seekers, style-and-home shoppers), not individual people.*

**이영숙, 54, 대전.** A long-time TV home-shopping viewer who now buys through the app during broadcasts; wants the offer, the card benefit and the buy button obvious.

**박지훈, 33, 서울.** A mobile-first deal-seeker who scans the home modules for the day's discounts and taps 바로구매 once the price adds up.

**최은정, 41, 경기.** A style-and-home shopper browsing brand pages, who likes the clean black-on-white chrome that lets product photography carry the page.

## Colors

Every token below was read on 2026-09-30 by the deterministic collector from three public, logged-out storefront pages: the home tab, a product page (item 2090936982) and a brand page (에르헴, 00034773). The corporate site corp.cjonstyle.com is a separate evidence domain and supplies narrative only.

### Primary
- **CJ ONSTYLE Violet** (`#640faf`): The fill of 바로구매 (`u_btn btn_buy_now`, 162 × 60, white label), the product page's primary action. It is also the outline and label of 장바구니 and 선물하기 beside it, and the fill of the 카테고리 toggle in its hover and pressed frames. On the brand page it fills the current pagination dot and outlines the active view toggle. It is the primary because it is the colour of the purchase action and of every selected state the capture recorded.
- **On Primary** (`#ffffff`): Labels on the violet fill.

### Text
- **Ink** (`#000000`): The logo heading, product meta and most running text.
- **Ink Strong** (`#111111`): Home module titles, navigation, inputs, chips and outlined buttons.
- **Tab Ink** (`#333333`): The selected product-page tab label and its underline.
- **Muted** (`#767676`): Unselected product-page tabs and small links.
- **Faint** (`#929292`): Fine 11px labels on the product page.

### Neutral & Surface
- **White** (`#ffffff`): The page, outlined buttons and controls.
- **Surface** (`#f0f0f0`): The 760 × 80 entry banner on the product page.
- **Chrome** (`#26292a`): The skip-link bar.
- **Border Strong** (`#b2b2b2`): The 찜 wishlist toggle.
- **Control Line** (`#c5c5c5`): The brand page's filter reset and small "more" links.
- **Line** (`#d1d1d1`): Home carousel controls and "more" chips.
- **Select Line** (`#d9d9d9`): The product option selector and the inactive view toggle.
- **Line Soft** (`#e6e6e6`): Unselected home filter chips and brand-page arrow buttons.

### Not tokens
- A red label (`#d73535`) inside a grey-outlined 방송알림-style button (`#a6a6a6`) and dark translucent overlays appear on the product page; they are single observations and are not promoted. No logo colour was measured.

## Typography

### Font Family
- **Live surface use**: `Pretendard`, `loaded / high`, 473 observed uses, mostly on the home tab: module titles, lists, chips, "more" links and the search field. It is self-hosted by CJ ONSTYLE at `image.cjonstyle.net/public/confirm/contents/ec-static-contents/design/font/font/Pretendard-Regular.woff2`, and the shared `font.css` declares weights 400, 600 and 700.
- **Official distributed font assets**: Pretendard is Kil Hyung-jin's open-source family. Its LICENSE (orioncactus/pretendard, opened 2026-09-30) reserves the name 'Pretendard' and states the SIL Open Font License 1.1. The identification rests on the declared family name.
- **Official product use**: no CJ ONSTYLE page opened this session names its typefaces.
- **Declared only (no visible use)**: `Nanum Barun Gothic`. The same `font.css` declares it with `NanumBarunGothic.eot` and related files, but the face never reported as loaded on any captured page. `FontAwesome` is also declared.
- **Unresolved**: `나눔바른고딕` is the first family of the product and brand pages' stack and of the home navigation (723 uses). No loaded font carries that name and the declared web font never loaded, so the face the browser actually drew there cannot be named. `돋움` (82 uses) is in the same position. Their sizes, weights and line heights are kept below; the family is not.
- **Corporate site**: corp.cjonstyle.com preloads the group's CJ ONLYONE faces (`CJ_ONLYONE_400` to `700` WOFF2). That is a different evidence domain, and it is not a storefront token.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Observed on |
|------|------|------|--------|-------------|----------|-------------|
| Module Title | Pretendard | 26px | 700 | 31px (1.19) | -0.5px | Home module titles, `#111111` |
| Logo Heading | 나눔바른고딕 stack (unresolved) | 24px | 700 | 36px (1.5) | -0.5px | Every page, `#000000` |
| Buy Label | 나눔바른고딕 stack (unresolved) | 20px | 400 | 60px box | normal | 바로구매, 장바구니 |
| Tab | 나눔바른고딕 stack (unresolved) | 18px | 700 / 400 | 62px box | normal | Product-page tabs |
| Search | Pretendard (home) | 18px | 400 | 46px box | normal | Header search |
| Body | Pretendard | 16px | 400 | 24px (1.5) | -0.25px | Home lists, `#000000` |
| Chip | Pretendard | 15px | 700 / 400 | 18px (1.2) | normal | Home filter chips |
| More | Pretendard | 13px | 400 | 16px (1.23) | -0.25px | Home "more" links |
| Meta | 나눔바른고딕 stack (unresolved) | 12px | 400 | 18px (1.5) | normal | Product and brand meta |
| Fine | 돋움 stack (unresolved) | 11px | 700 | 16.5px (1.5) | -0.5px | Product-page labels, `#929292` |

### Principles
- **Weight, not size, for emphasis**: selected tabs and chips switch from 400 to 700 at the same size.
- **Dense by default**: meta text sits at 12px on an 18px line; titles rarely exceed 26px.
- **Two generations**: Pretendard modules on the home tab sit beside an older shell that asks for 나눔바른고딕.

## Layout

### Spacing System
- Observed paddings: 22px 50px 22px 72px on the entry banner, 0 33px 0 15px on the option select, 0 20px 0 26px on skip links, 0 8px 0 12px on "more" chips, 0 12px 0 5px on filter chips.
- Spacing is tuned per module rather than taken from one scale.

### Grid & Container
- A fixed-width centred column under a persistent header: logo heading, search, then the global navigation with the 카테고리 toggle at its left.
- The home tab stacks modules, each with a 26px title, filter chips and a "more" link. The product page pairs media with a buy panel (option select, then 찜, 선물하기, 장바구니 and 바로구매 in one 60px row) and section tabs below.

### Whitespace Philosophy
- Density over air: many products per viewport, separated by thin grey lines rather than space.

### Border Radius Scale
- 0px: navigation, tabs, inputs, page arrows
- 2px: entry banner
- 4px: purchase buttons, filter reset
- 14px: "more" chips
- 18px: filter chips and carousel controls
- 50%: pagination dot and pause control

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport of the PC storefront was captured; its assets are the `-pc` builds. No breakpoint was measured.

#### Touch Targets
- Product-page tabs: 62px
- Buy row: 60px
- Category toggle: 54px
- Search field: 46px
- Option select: 45px
- Filter reset and page arrows: 40px
- Filter chips and carousel controls: 36px
- Skip links: 34px
- "More" chips: 28px

#### Collapsing Strategy
- Not captured; only the PC layout was measured.

#### Image Behavior
- Product images sit in square frames without shadows.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Buttons, tabs, chips, cards |
| Line | 1px greys `#b2b2b2` to `#e6e6e6` | Controls and separators |
| Fill | `#f0f0f0` | Entry banner |

No captured control draws a shadow; separation is by line and fill.

## Motion & Easing

No transition or animation value was measured for any storefront control, and no official source consulted publishes a motion scale. The home hero carousel has previous, next and pause controls, but its timing was not measured. Treat motion as unspecified.

<!--
Sources — 2026-09-30
Capture: artifacts/reference-evidence/cjonstyle.json (capturedAt 2026-09-30T10:03:52.723Z; surfaces home tab, product item 2090936982, brand 00034773; coverage 100).
Narrative: corp.cjonstyle.com/ko, /ko/about/history, /ko/about/who-we-are, opened 2026-09-30.
Personas are fictional archetypes; names do not refer to real people.
-->

## Components

### Buttons

**Buy button (primary)**
- Background: `#640faf`
- Text: `#ffffff`
- Border: 1px solid `#640faf`
- Radius: 4px
- Height: 60px
- Font: 20px 400
- Use: 바로구매 on the product page, 162 × 60; a 205 × 42 copy closes the lower buy panel

**Cart button**
- Background: `#ffffff`
- Text: `#640faf`
- Border: 1px solid `#640faf`
- Radius: 4px
- Height: 60px
- Use: 장바구니, the outlined partner of 바로구매; 선물하기 (64 × 60) shares the outline

**Wishlist button**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#b2b2b2`
- Radius: 4px
- Size: 64 × 60
- Use: 찜 toggle at the start of the buy row

**Category toggle**
- Text: `#111111`
- Height: 54px
- Hover: fill `#640faf` with `#ffffff` text (bundle hover and pressed frames agree)
- Use: 카테고리, 181 × 54, at the left of the global navigation

**More chip**
- Text: `#111111`
- Border: 1px solid `#d1d1d1`
- Radius: 14px
- Padding: 0px 8px 0px 12px
- Height: 28px
- Use: Beside home module titles

**Carousel control**
- Background: `#ffffff`
- Border: 1px solid `#d1d1d1`
- Radius: 18px on the outer side (previous and next), 50% (pause)
- Height: 36px
- Use: Home hero carousel

**Entry banner**
- Background: `#f0f0f0`
- Text: `#000000`
- Radius: 2px
- Padding: 22px 50px 22px 72px
- Size: 760 × 80
- Use: Product-page entry banner

**Filter reset**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#c5c5c5`
- Radius: 4px
- Height: 40px
- Use: Brand-page filter panel, 180 × 40

**Page dot**
- Background: `#640faf`
- Text: `#ffffff`
- Radius: 50%
- Size: 30 × 30
- Use: Current page of the brand page's pagination

**Skip link**
- Background: `#26292a`
- Text: `#ffffff`
- Padding: 0px 20px 0px 26px
- Height: 34px
- Use: Skip links above the header, shown on focus

### Tabs & Toggles

**Product-page tab**
- Background: `#ffffff`
- Text: `#767676`
- Border: 1px `#767676` underline
- Height: 62px
- Selected: `#333333` text at 700 with a 1px `#333333` underline
- Use: Product-page section tabs, 253 × 62

**Home filter chip**
- Background: `#ffffff`
- Text: `#111111`
- Border: 1px solid `#e6e6e6`
- Radius: 18px
- Height: 36px
- Selected: `#111111` fill, `#ffffff` text, weight 700
- Use: Under home module titles

**View toggle**
- Border: 1px solid `#d9d9d9`
- Size: 30 × 30
- Checked: 1px solid `#640faf`
- Use: Gallery and list switch on the brand page

### Inputs

**Option select**
- Text: `#111111`
- Border: 1px solid `#d9d9d9`
- Padding: 0px 33px 0px 15px
- Height: 45px
- Use: Product option selector, 470 × 45

**Search field**
- Text: `#111111`
- Padding: 0px 50px 0px 0px
- Height: 46px
- Font: 18px 400 Pretendard (home)
- Use: Header search, 314 × 46; the input itself draws no border

---

**Verified:** 2026-09-30 (deterministic collector capture of three public, logged-out display.cjonstyle.com pages and first-party context from corp.cjonstyle.com)
**Tier 1 sources:** https://display.cjonstyle.com/p/homeTab/main?hmtabMenuId=H00005 ; https://display.cjonstyle.com/p/item/2090936982 ; https://display.cjonstyle.com/p/brand/00034773 ; https://corp.cjonstyle.com/ko/about/history
**Tier 2 sources:** getdesign.md/cjonstyle (HTTP 200, the name does not appear in the response) and styles.refero.design/?q=cjonstyle (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover / pressed (category toggle)** | The 카테고리 toggle fills `#640faf` with `#ffffff` text; the bundle's hover and pressed frames agree. |
| **Selected** | Product-page tab: `#333333`, 700, 1px `#333333` underline. Home filter chip: `#111111` fill, white bold text. Brand-page pagination: `#640faf` dot. Brand-page view toggle: `#640faf` outline. |
| **Hidden until focus** | Skip links sit 34px above the viewport; their focused appearance was not measured. |
| **Unmeasured** | The home tab's pseudo-state and interaction passes stalled after 90 seconds and were logged as unmeasured. The buy row was not probed. Focus was not measured anywhere. |

Error, empty, loading, sold-out and success states were not captured and are not described.

## Do's and Don'ts

### Do
- Use `#640faf` for the purchase action, its outlined partners and selected states
- Keep text black or near-black (`#000000`, `#111111`) on white
- Mark selection by weight (400 to 700) and, on tabs, a 1px underline
- Use 4px corners on purchase buttons and square corners in the shell
- Separate with 1px grey lines

### Don't
- Spread violet into decoration or running text
- Add shadows to cards or buttons
- Round the shell; pills belong to chips and carousel controls
- Name 나눔바른고딕 as the rendered face; it never loaded from the site

## Voice & Tone

CJ ONSTYLE sells like a home-shopping host: offer first, then benefit, then the buy path. Its corporate voice adds curation and taste ("트렌드 PICK 라이브 편집샵"). On the storefront, copy is short and concrete: discount rates, benefits and broadcast times.

| Context | Tone |
|---|---|
| Module titles and banners | Offer-first: brand, season, discount ("에르헴 26FW 신상 · 미리주문 쿠폰 10% · ~10%할인") |
| Live and TV | Time-stamped and immediate ("라이브쇼 · 방송일정 · 오늘 21:00") |
| Social proof | Live counts ("지금 1,149명이 이 상품을 보고 있어요") |
| Buy row | Direct imperatives: 바로구매, 장바구니, 선물하기 |
| Corporate | Aspirational: "콘텐츠로 발견하고, 취향으로 완성하는 쇼핑" |

**Voice samples (verbatim from pages opened on 2026-09-30):**
- "에르헴 26FW 신상 / 미리주문 쿠폰 10% / ~10%할인" (home tab banner link)
- "지금 1,149명이 이 상품을 보고 있어요" (home tab product link)
- "트렌드 PICK 라이브 편집샵 — 콘텐츠로 발견하고, 취향으로 완성하는 쇼핑" (corp.cjonstyle.com)

**Forbidden register**: vague lifestyle copy with no offer, hedging on price.

## Agent Prompt Guide

### Quick Color Reference
- Purchase action and selection: CJ ONSTYLE Violet (`#640faf`), label `#ffffff`
- Text: `#000000`, `#111111`; selected tab `#333333`; secondary `#767676`, `#929292`
- Lines: `#b2b2b2`, `#c5c5c5`, `#d1d1d1`, `#d9d9d9`, `#e6e6e6`
- Surfaces: `#ffffff`; banner `#f0f0f0`; skip bar `#26292a`

### Example Component Prompts
- "Build a product buy row: 64 × 60 찜 toggle (white, 1px solid #b2b2b2, radius 4px), 선물하기 and 장바구니 outlined in 1px solid #640faf with #640faf labels, and 바로구매 filled #640faf with a white 20px label, all 60px tall with 4px corners."
- "Create home module filter chips: 36px tall, radius 18px, white with 1px solid #e6e6e6 and #111111 15px Pretendard; the selected chip fills #111111 with white bold text."
- "Add product-page tabs: 253 × 62, white, 18px text in #767676 with a 1px #767676 underline; the selected tab is #333333 bold with a 1px #333333 underline."

### Iteration Guide
1. Violet `#640faf` means buy or selected
2. Black-on-white, dense, square
3. 4px on purchase buttons, 18px pills only on chips
4. Lines, not shadows

---

---
name: 롯데ON
colors:
  primary: '#000000'
  foreground: '#333333'
  canvas: '#ffffff'
  muted: '#757575'
  secondary: '#666666'
  hairline: '#e5e5e5'
  field-border: '#dddddd'
  tab-border: '#eeeeee'
typography:
  home-heading:
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.27
    use: Observed home body-heading text
  body:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    use: Observed home commerce body text
  tab-label:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.31
    use: Home image-tab label
rounded:
  square: 0px
  pill: 23px
spacing:
  xs: 2
  sm: 4
  md: 8
  base: 16
components:
  product-card:
    type: card
    backgroundColor: transparent
    rounded: 0px
    padding: 0px
    height: 368px
    use: Repeated home product-card container; its name, price and tags sit in child elements, so no label colour or font is declared (corrected 2026-09-30)
  home-image-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#666666'
    border: '1px solid #eeeeee'
    rounded: 23px
    padding: 0px 16px 0px 4px
    height: 46px
    typography: 16px / 500
    selected: 'bg #000000, fg #ffffff, border 1px #000000'
    states: default and selected captured (aria-selected true on capture 147 and on three tab-interaction captures); hover, focus, pressed, disabled and error were not sampled
    use: Home image-tab control
  search-input:
    type: input
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 0px 28px 0px 0px
    height: 30px
    typography: 16px / 400
    states: default captured; hover, focus, pressed, disabled and error were not sampled
    use: Home search field
  recent-products-dropdown:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '1px solid #dddddd'
    rounded: 0px
    padding: 0px 38px 0px 16px
    height: 32px
    typography: 13px / 400
    states: default captured; hover, focus, pressed, disabled and error were not sampled
    use: Dropdown trigger in the recent-products page footer row (captures 89 and 90 at top 1690, below the content area that ends at 1675); corrected 2026-09-30 from a recently viewed products trigger
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
    focus: 'outline #333333 solid 3px on :focus-visible'
  gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 0px
    height: 19px
    typography: 16px / 400
    hover: 'fg #000000'
    pressed: 'fg #000000'
    states: 'rest on 22 header links (11 on home, 11 on recent products); hover and pressed sampled on 21 of them (42 frames), each recording colour #333333 to #000000 and nothing else; focus frames exist but are not declared'
    use: Header navigation link, home::[data-omd-capture="10"]; NotoSansKR, line height 50px (the height of the row), tracking -0.32px
  header-utility-link:
    type: button
    backgroundColor: transparent
    textColor: '#757575'
    rounded: 0px
    padding: 0px
    height: 14px
    typography: 12px / 400
    states: three per route captured at rest on home and recent products; no state frame in the bundle
    use: Top utility link, home::[data-omd-capture="0"]; NotoSansKR, line height 17px, tracking -0.2px
  header-icon-link:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 37px 0px 0px
    size: 74px x 56px
    typography: 13px / 400
    states: three per route captured at rest on home and recent products; no state frame in the bundle
    use: Header icon link with its label below the icon (a.heart and two siblings), home::[data-omd-capture="6"]; the 37px top padding holds the icon; NotoSansKR, line height 18.98px, tracking -0.3px
  section-more-link:
    type: button
    backgroundColor: transparent
    textColor: '#757575'
    rounded: 0px
    padding: 0px 12px 0px 0px
    height: 20px
    typography: 14px / 400
    states: one captured at rest on home; no state frame in the bundle
    use: Section heading more link (a.c-title__more), home::[data-omd-capture="146"]; Pretendard, line height 20px
  product-tag:
    type: badge
    backgroundColor: '#f5f5f5'
    textColor: '#333333'
    rounded: 0px
    padding: 0px 4px
    height: 21px
    typography: 12px / 400
    states: 13 captured at rest in the home product cards; no state frame in the bundle
    use: 'Product-card tag: a list item that holds its own text, home::li (top 1407); Pretendard, line height 21px'
  recent-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#666666'
    rounded: 0px
    padding: 12px 16px
    height: 52px
    typography: 20px / 500
    selected: 'fg #000000, 20px / 600'
    states: 'two tabs captured on recent products: the rest tab (capture 76) and the tab with class active (capture 77); no state frame in the bundle'
    use: Recent-products page tab (a.tab), surface-2::[data-omd-capture="76"]; NotoSansKR, line height 28px, tracking -0.036px; each tab is 453 px wide
  mylotte-menu-link:
    type: tab
    backgroundColor: transparent
    textColor: '#757575'
    rounded: 0px
    padding: 0px
    height: 21px
    typography: 14px / 400
    states: 19 captured at rest on recent products (captures 55-73); no state frame in the bundle
    use: Account-page menu link on recent products, surface-2::[data-omd-capture="55"]; NotoSansKR, line height 21px, tracking -0.42px
  mylotte-outline-link:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    border: '1px #dddddd'
    rounded: 6px
    padding: 0px
    size: 178px x 40px
    typography: 13px / 400
    states: two captured at rest on recent products (captures 74 and 75); no state frame in the bundle
    use: Outlined link on recent products, surface-2::[data-omd-capture="74"]; NotoSansKR, line height 38px, tracking -0.26px
  outline-pill-link:
    type: button
    backgroundColor: transparent
    border: '1px #000000'
    rounded: 24px
    size: 242px x 48px
    states: one captured at rest on recent products; no state frame in the bundle
    use: Outlined pill link (a.anchor) in the recent-products content, surface-2::[data-omd-capture="78"]. The anchor computes 16px / 400 with the 16px line height of the content area, which is inherited container type, so no label style is declared
  footer-menu-link:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 0px
    height: 15px
    typography: 13px / 400
    states: nine captured at rest on recent products (captures 80-88); capture 83 computes 700; no state frame in the bundle
    use: Footer menu link, surface-2::[data-omd-capture="80"]; NotoSansKR, line height 21.32px, tracking -0.3px
  footer-bordered-link:
    type: button
    backgroundColor: transparent
    textColor: '#757575'
    border: '1px #dddddd'
    rounded: 2px
    padding: 0px 6px
    height: 22px
    typography: 11px / 400
    states: four captured at rest on recent products (links 94-97 in bordered list items); no state frame in the bundle
    use: 'Small bordered footer link: the list item holds the border, radius, padding and 22px height, and the link inside it (surface-2::[data-omd-capture="94"]) holds the text; NotoSansKR, line height 22px, tracking -0.1px'
fonts:
  roles:
    commerce: Pretendard
    navigation: NotoSansKR
---

# Design System Inspiration of 롯데ON

## Overview

### Visual Theme & Atmosphere

롯데ON은 롯데 계열 상품과 오픈마켓 상품을 한 곳에서 검색·구매하도록 만든 통합 이커머스 플랫폼이며, 백화점·그로서리·전자제품·브랜드 상품을 발견하는 흐름을 함께 다룬다. 공식 기업 소개는 1996년 롯데닷컴에서 시작한 온라인 종합쇼핑의 계보와 2020년 4월 롯데ON 출범을 연결하고, 현재 서비스는 오프라인 유통 인프라와 온라인 경험을 결합한 쇼핑을 지향한다. 그 결과로 보이는 화면의 인상은 과장된 브랜드 색보다 상품·카테고리·혜택을 빠르게 읽게 하는 흰 바탕, 짙은 문자, 얇은 경계, 그리고 0px 또는 제한적인 pill 형상이다. 공식 Lotte ON Story가 말하는 ‘취향, 브랜드, 혜택을 발견하는 즐거움’과 버티컬·개인화 서비스의 확장은, 이 공용 쇼핑 셸이 탐색성과 비교 가능성을 우선하는 현재 방향을 설명한다.

두 제품 표면에서 `#ffffff` 캔버스와 `#333333` 전경색이 반복되고, `#000000`은 검색 아이콘·선택된 이미지 탭에 쓰였다. 보조 텍스트에는 `#757575`와 `#666666`, 얇은 경계에는 `#e5e5e5`·`#dddddd`·`#eeeeee`가 관찰됐다. 이는 전역 마케팅 팔레트의 선언이 아니라 2026-07-13에 캡처된 두 공개 제품 표면의 측정값이다.

서체도 한 덩어리로 취급하지 않는다. `Pretendard`는 상품 카드와 이미지 탭 등에서 432회, `NotoSansKR`은 내비게이션·검색·목록 등에서 339회 loaded 상태로 관찰됐다. 사각형 0px이 압도적이지만, 홈 이미지 탭은 23px radius의 pill이고 원형 쇼핑몰 버튼은 50% radius였다. 이 대비는 상품 단위의 평평한 정보 밀도와 선택 컨트롤의 명확한 경계를 함께 만든다.

**Observed characteristics:**
- 두 공개 제품 표면: 홈과 최근 본 상품
- `#ffffff` 캔버스, `#333333` 본문 전경, `#000000`의 제한적 강조
- loaded family: Pretendard와 NotoSansKR
- 0px product-card geometry와 23px 홈 이미지 탭
- 2px, 4px, 8px, 16px의 반복 간격 샘플
- 상호작용 확장은 홈 이미지 탭의 selected 상태 세 건만 안전하게 관찰됨

### Primary tasks

- Search and buy Lotte affiliate and open-market products in one place
- Explore beauty, luxury, fashion, or kids shopping areas
- Scan a personal history of recently viewed products
- Browse product categories from the home navigation

### Brand Narrative

롯데 e-commerce의 공식 기업 소개에 따르면, 롯데닷컴은 1996년 국내 온라인 종합 쇼핑몰로 출발했고 롯데e커머스는 2018년 롯데쇼핑 사업부로 출범했다. 롯데ON은 2020년 4월 롯데의 통합 온라인 쇼핑 플랫폼으로 선보였으며, 계열사 상품과 오픈마켓 상품을 한 번에 검색하고 구매하는 범위를 갖는다.

현재의 표현은 단순한 상품 나열보다 발견의 경험을 강조한다. 공식 Story는 해외직구·뷰티·그로서리·선물하기 같은 영역과 오프라인 매장 연계를 설명하고, 공식 기업 소개는 뷰티·명품·패션·키즈 버티컬과 멤버십 혜택을 현재 확장 방향으로 제시한다. 이 reference의 제품 UI 관찰은 그 방향과 일치하는 넓은 홈 탐색과 더 조밀한 개인 목록을 보여 준다.

공개 자료가 확인하지 않은 창업자 인용, 로고의 의미, 상세 리브랜딩 연혁, 내부 브랜드 원칙은 추가하지 않는다. 이 문서가 보존하는 범위는 공식적으로 설명된 통합·발견·온오프라인 연결의 서비스 맥락과, 지정된 두 표면에서 측정된 제품 표현이다.

### Principles

The following are official service directions paraphrased from first-party material, not an invented design manifesto.

1. **Make shopping discovery useful.** Official Story frames the service around discovering taste, brands, and benefits.
   *UI implication:* Make category, brand, benefit, and search affordances legible before adding decorative treatment.
2. **Connect online choice to offline retail strength.** Official sources describe the use of Lotte’s online know-how and offline infrastructure.
   *UI implication:* Keep a clear boundary between verified product information and any unmeasured fulfilment or store-integration pattern.
3. **Serve specialist shopping contexts.** The corporate profile identifies vertical areas including beauty, luxury, fashion, and kids.
   *UI implication:* Let surface density vary by task—for example, home discovery versus recent-product scanning—rather than imposing one card treatment.
4. **Support customers and participating brands.** Official material describes customer benefits and brand-oriented commerce support.
   *UI implication:* Treat customer-facing shopping controls and seller/brand operational flows as separate surfaces unless direct UI evidence links them.

### Personas

These are service-role archetypes grounded in first-party service descriptions, not demographic personas or user-research findings.

1. **Integrated-shopper customer.** Searches and buys across Lotte affiliate and open-market assortment; the public service description explicitly frames this as one platform.
2. **Vertical-service shopper.** Explores beauty, luxury, fashion, or kids-focused shopping areas and related benefits described by the corporate profile.
3. **Participating brand or seller.** Uses the broader e-commerce offering to reach customers; the official profile describes brand-store and commerce-support services, but this capture does not validate its operational UI.

No age, income, motivation, task-success rate, or behavioral preference is inferred beyond those stated service roles.

## Colors

### Core
- **Primary** — `#000000`: 관찰된 검색 아이콘 배경과 선택된 홈 이미지 탭.
- **Foreground** — `#333333`: 두 표면에서 반복된 기본 문자색.
- **Canvas** — `#ffffff`: 페이지와 탭·드롭다운의 관찰된 표면색.
- **Muted** — `#757575`: 상단 유틸리티와 보조 텍스트.
- **Secondary** — `#666666`: 선택되지 않은 홈 이미지 탭의 문자색.

### Boundaries
- **Hairline** — `#e5e5e5`: 원형 쇼핑몰 버튼의 1px 경계.
- **Field border** — `#dddddd`: 최근 본 상품 드롭다운의 1px 경계.
- **Tab border** — `#eeeeee`: 선택되지 않은 홈 이미지 탭의 1px 경계.

`#f3f3f3`과 `#f5f5f5`도 홈에서 제한적으로 관찰됐지만 한 표면의 낮은 빈도 배경이므로 canonical color token으로 올리지 않았다. 제품 표면에서 측정되지 않은 롯데 그룹 컬러·프로모션 컬러·오류 색은 이 reference에 없다.

## Typography

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | 공식 기업·서비스 소개는 서비스 방향을 설명하지만, 특정 UI family의 제품 적용을 선언하지 않는다. |
| Live computed surface-use | `Pretendard`와 `NotoSansKR` 모두 loaded FontFace가 뒷받침하는 computed family로 관찰됐다. |
| Official distributed brand asset | 이 조사에서는 제품 서체의 별도 공식 배포·라이선스 문서를 확인하지 못했다. |
| Declared-only | `Avenuel Didot`, `Roboto Condensed`는 `@font-face` 선언이 있었지만 visible usage는 0이었다. |
| Unresolved | 네이티브 앱·캠페인·로그인 후 표면의 서체는 이번 증거로 확정하지 않는다. |

- **Commerce family:** `Pretendard` — 상품 카드, 버튼, 탭 등에서 loaded 상태로 관찰.
- **Navigation family:** `NotoSansKR` — 내비게이션, 검색, 최근 본 상품 표면에서 loaded 상태로 관찰.
- **Declared-only:** `Avenuel Didot`, `Roboto Condensed` — 선언만으로 UI family나 specimen으로 승격하지 않는다.
- **Availability boundary:** 두 canonical family의 캡처된 파일 URL은 `.verification.md`에 보존했지만, 이 reference는 해당 파일의 재배포 권리나 라이선스를 주장하지 않는다.

### Captured hierarchy

| Role | Size | Weight | Line height | Captured surface |
|---|---:|---:|---:|---|
| Home body heading | 22px | 600 | 28px | Home |
| Home commerce body | 14px | 500 | 18px | Home |
| Home image-tab label | 16px | 500 | 21px | Home |
| Home search field | 16px | 400 | 30px | Home |
| Recent-products dropdown | 13px | 400 | normal | Recent products |

The three tokenized roles retain their measured sizes, weights, and line-height ratios. The remaining rows are useful measured siblings, not an invented universal type scale.

## Layout

The home surface combines a centered search field, horizontal category navigation, image-tab selection, and repeated product-card containers. The recent-products surface changes density: utility rows, list structures, tabs, and a 32px dropdown permit scanning a personal commerce history. Preserve this distinction rather than applying the large home product-card geometry to every commerce context.

Measured spacing samples recur at 2px, 4px, 8px, and 16px. They are observed values rather than an assertion of a complete mathematical scale. The home product-card contains a 220px-wide, 368px-tall outer container; its visual sub-area is 220px square, but that sub-area is not separately promoted as a component token.

### Responsive Behavior

The evidence bundle contains two desktop 1440px-wide product surfaces. It supports the measured component heights and list/card structure, not breakpoint rules or a mobile layout contract.

- Keep home product-card media and information grouping together when adapting width.
- Retain the 46px home tab and 30px search-input heights unless a measured responsive variant replaces them.
- Preserve the recent-products list hierarchy and its dropdown trigger as separate controls.
- Treat mobile columns, navigation collapse, touch-target expansion, sticky elements, tablet gutters, and image crop policy as unestablished until a controlled multi-viewport capture is made.

## Elevation & Depth

| Treatment | Captured use |
|---|---|
| Flat / no shadow | Page, product card, search field, tabs, and dropdown trigger |
| `1px solid #eeeeee` | Unselected home image tab |
| `1px solid #dddddd` | Recent-products dropdown trigger |
| `1px solid #e5e5e5` | Circular shopping-mall button |
| 23px radius | Home image-tab control |

The canonical shadow token is `none`. It reports the reusable box-shadow result in these two captures; it does not claim that overlays or uninspected transient product states have no elevation.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

No transition duration, easing curve, animation name, or reduced-motion behavior was present in the supplied evidence.

The evidence records static values and three tab selected-state interactions. Do not infer hover animation, carousel timing, modal transitions, skeleton motion, toast dismissal, or a generic ecommerce duration scale from this capture.

## Components

### Product Card

**Home product-card container**
- Type: card
- Background: transparent
- Radius: 0px
- Padding: 0px
- Height: 368px
- Use: repeated home product-card container
- Corrected 2026-09-30: the July text gave this card `#333333` text and 16px / 400 type. Those are the container's own values: the card anchor (`a.c-product-card__url`) computes a 16px line height, the inherited type of the content area, and the name, price and tags sit in child elements (the tags are described below as Product tag). No label colour or font is declared for the container.

### Home Image Tab

**Default and selected capture**
- Type: tab
- Background: `#ffffff`
- Text: `#666666`
- Border: 1px solid `#eeeeee`
- Radius: 23px
- Padding: 0px 16px 0px 4px
- Height: 46px
- Font: 16px at weight 500
- Selected: bg `#000000`, fg `#ffffff`, border 1px `#000000` (`aria-selected` "true" on capture 147 and on the three tab-interaction captures)
- States: default and selected captured; hover, focus, pressed, disabled and error were not sampled
- Use: home image-tab control

The selected sibling used `#000000` background and `#ffffff` text with the same 23px radius, 46px height, and padding. Only selected state changes were observed through three tab interactions.

### Search Input

**Home search field**
- Type: input
- Background: transparent
- Text: `#333333`
- Radius: 0px
- Padding: 0px 28px 0px 0px
- Height: 30px
- Font: 16px at weight 400
- States: default captured; hover, focus, pressed, disabled and error were not sampled
- Use: home search field

### Recent Products Dropdown

**Default trigger**
- Type: button
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dddddd`
- Radius: 0px
- Padding: 0px 38px 0px 16px
- Height: 32px
- Font: 13px at weight 400
- States: default captured; hover, focus, pressed, disabled and error were not sampled
- Use: dropdown trigger in the recent-products page footer row (captures 89 and 90, top 1690)
- Corrected 2026-09-30: the July text called this the recently viewed products dropdown. Both triggers sit at top 1690, below the page's content area (`main#content`, top 177, 1498 tall, ending at 1675) and beside the footer menu links (top 1698), so they belong to the footer. The key name is kept.

The supplied evidence contains 38 component variants across card, listItem, button, input, and tab classifications. Static default geometry is retained even where no interaction-specific values were observed; only unobserved interactive states are omitted.

The sections below were added on 2026-09-30 from the same 2026-07-13 bundle (bundle-only; no new capture).

### Header Navigation Link

**Default and pointer states**
- Type: tab
- Background: transparent
- Text: `#333333`
- Radius: 0px
- Height: 19px (inline link in a 50px row)
- Font: 16px at weight 400, NotoSansKR, line height 50px, tracking -0.32px
- Hover: fg `#000000`
- Pressed: fg `#000000`
- Use: header navigation links, 11 on home and 11 on recent products; `home::[data-omd-capture="10"]`
- Evidence: 21 of the 22 links carry hover, pressed and focus frames (63). Every hover and pressed frame (42) records colour `#333333` to `#000000` and nothing else; `#000000` is the primary colour of this reference. Focus frames exist but are not declared.

### Header Utility Link

**Default**
- Type: button
- Background: transparent
- Text: `#757575`
- Height: 14px
- Font: 12px at weight 400, NotoSansKR, line height 17px, tracking -0.2px
- Use: top utility links, three per route; `home::[data-omd-capture="0"]`

### Header Icon Link

**Default**
- Type: button
- Background: transparent
- Text: `#333333`
- Padding: 37px 0px 0px (the icon sits in the top padding)
- Size: 74px x 56px
- Font: 13px at weight 400, NotoSansKR, line height 18.98px, tracking -0.3px
- Use: header icon links with the label below the icon, three per route; `home::[data-omd-capture="6"]`

### Section More Link

**Default**
- Type: button
- Background: transparent
- Text: `#757575`
- Padding: 0px 12px 0px 0px
- Height: 20px
- Font: 14px at weight 400, Pretendard, line height 20px
- Use: more link beside a home section heading (`a.c-title__more`); `home::[data-omd-capture="146"]`

### Product Tag

**Default**
- Type: badge
- Background: `#f5f5f5`
- Text: `#333333`
- Radius: 0px
- Padding: 0px 4px
- Height: 21px
- Font: 12px at weight 400, Pretendard, line height 21px
- Use: 13 tags in the home product cards; each is a list item that holds its own text (`home::li`, top 1407)

### Recent Products Tab

**Default and selected**
- Type: tab
- Background: `#ffffff`
- Text: `#666666`
- Radius: 0px
- Padding: 12px 16px
- Height: 52px (453 px wide)
- Font: 20px at weight 500, NotoSansKR, line height 28px, tracking -0.036px
- Selected: fg `#000000`, 20px at weight 600 (the tab with class `active`, capture 77)
- Use: the two tabs of the recent-products page; `surface-2::[data-omd-capture="76"]`. This is a separate tab group from the home image tab.

### Account Menu Link

**Default**
- Type: tab
- Background: transparent
- Text: `#757575`
- Height: 21px
- Font: 14px at weight 400, NotoSansKR, line height 21px, tracking -0.42px
- Use: 19 account-page menu links on recent products; `surface-2::[data-omd-capture="55"]`

### Account Outlined Link

**Default**
- Type: button
- Background: transparent
- Text: `#333333`
- Border: 1px `#dddddd`
- Radius: 6px
- Size: 178px x 40px
- Font: 13px at weight 400, NotoSansKR, line height 38px, tracking -0.26px
- Use: two outlined links on recent products; `surface-2::[data-omd-capture="74"]`

### Outlined Pill Link

**Default**
- Type: button
- Background: transparent
- Border: 1px `#000000`
- Radius: 24px
- Size: 242px x 48px
- Use: outlined pill link in the recent-products content (`a.anchor`); `surface-2::[data-omd-capture="78"]`
- Label: not declared. The anchor computes 16px / 400 with the 16px line height of the content area, which is inherited container type.

### Footer Menu Link

**Default**
- Type: button
- Background: transparent
- Text: `#333333`
- Height: 15px
- Font: 13px at weight 400, NotoSansKR, line height 21.32px, tracking -0.3px
- Use: nine footer menu links on recent products; `surface-2::[data-omd-capture="80"]`. One of them (capture 83) computes weight 700.

### Footer Bordered Link

**Default**
- Type: button
- Background: transparent
- Text: `#757575`
- Border: 1px `#dddddd` (on the list item)
- Radius: 2px
- Padding: 0px 6px
- Height: 22px
- Font: 11px at weight 400, NotoSansKR, line height 22px, tracking -0.1px
- Use: four small bordered footer links on recent products; the list item holds the border, radius and padding, and the link inside it (`surface-2::[data-omd-capture="94"]`) holds the text

---
**Verified:** 2026-07-14
**Tier 1 sources:** https://www.lotteon.com/p/display/main/lotteon ; https://www.lotteon.com/p/mylotte/recent/product
**Tier 2 sources:** https://getdesign.md/lotteon attempted on 2026-07-14; no accessible brand-specific result was returned by the search environment. https://styles.refero.design/?q=lotteon attempted on 2026-07-14; no accessible brand-specific result was returned by the search environment.
**Conflicts unresolved:** none

Tier 2 supplied no component or token value; all promoted visual values come from the supplied Tier 1 evidence bundle.

### States

| State | Verified treatment |
|---|---|
| Tab default | Home image tab: `#ffffff` background, `#666666` text, 1px `#eeeeee` border, 23px radius |
| Tab selected | Home image tab: `#000000` background, `#ffffff` text; three selected-state interactions captured |
| Search input default | Transparent background, `#333333` text, 30px height, 0px radius |
| Dropdown default | `#ffffff` background, `#333333` text, 1px `#dddddd` border, 32px height |
| Product card default | Transparent container, 0px radius, 368px height; its text sits in child elements (corrected 2026-09-30) |
| Recent products tab selected | `#000000` text at weight 600 on the tab with class `active` (added 2026-09-30) |
| Hover | Header navigation link: fg `#000000` (corrected 2026-09-30; hover frames on 21 links across both routes) |
| Focus | Focus frames exist on the header navigation links but are not declared: bundle focus frames are not a reliable focus-visible sample |
| Pressed | Header navigation link: fg `#000000` (corrected 2026-09-30; pressed frames on the same 21 links) |
| Disabled | No disabled value captured |
| Error | No error value captured |
| Empty | No empty-state capture |
| Loading | No loading-state capture |
| Success | No success-state capture |

The interaction count of three covers the tab expansions only. The pointer-state frames are separate: 63 on the header navigation links, of which the 42 hover and pressed frames are declared (corrected 2026-09-30). Neither justifies filling state values for other buttons, inputs, or tabs.

Live state probe, 2026-10-16 (`https://www.lotteon.com/p/mylotte/recent/product`), `recent-products-dropdown`: pressed — no visible change (measured 2026-10-16); focus — outline #333333 solid 3px.

## Do's and Don'ts

### Do
- Use `#ffffff`, `#333333`, and thin neutral borders for the measured public commerce surfaces.
- Preserve `Pretendard` and `NotoSansKR` as separate loaded families where the observed surface calls for them.
- Use 23px pill geometry only for the observed home image-tab control; keep the product-card container square.
- Keep product-card, tab, input, and dropdown semantics distinct.
- Describe only the captured tab selected state; request a new capture before adding hover, focus, pressed, disabled, or error styling.

### Don't
- Don't substitute a system font for `Pretendard` or `NotoSansKR` and present it as the loaded family.
- Don't promote declared-only `Avenuel Didot` or `Roboto Condensed` as a UI font.
- Don't turn `#000000` into a universal filled CTA token; it was measured on the selected tab and search icon, not as a general button rule.
- Don't infer brand-wide red, success, error, campaign, or promotion colors from the absent evidence.
- Don't map a link or list row to button semantics without evidence.

## Voice & Tone

Official Lotte ON materials describe a discovery-oriented commerce service: the Story home uses phrases about discovering taste, brands, and benefits, while the corporate profile describes vertical shopping services and customer benefits. This supports a concise, practical, discovery-led interface voice. It is not a published comprehensive writing standard, so it does not authorize invented error, push, legal, or accessibility copy rules.

| Do | Don't |
|---|---|
| Name the shopping subject, benefit, or next action directly. | Turn a product label into an ungrounded lifestyle claim. |
| Keep utility labels short enough for dense navigation and product rows. | Add emotive sales language where no official product wording supports it. |
| Use discovery language where a browse surface actually presents brands, benefits, or categories. | Recast operational states as a brand promise without evidence. |

### Source-backed copy samples
- “취향을, 브랜드를, 혜택을 발견하는 즐거움” — official Lotte ON Story home.
- “고객이 원하고 만족하는 서비스를 만들어요” — official Lotte ON Story home.
- “쇼핑을 새롭게, 세상을 이롭게!” — official Lotte e-commerce corporate profile.

## Agent Prompt Guide

### Quick token reference
- Canvas: `#ffffff`
- Foreground: `#333333`
- Primary / selected tab: `#000000`
- Muted / secondary: `#757575`, `#666666`
- Borders: `#e5e5e5`, `#dddddd`, `#eeeeee`
- Families: Pretendard (commerce), NotoSansKR (navigation)
- Spacing samples: 2px, 4px, 8px, 16px
- Geometry: 0px square; 23px home image-tab pill

### Construction prompts
- “Build the observed home product-card container: transparent background, `#333333` text, 0px radius, 0px padding, 368px height, 16px/400 Pretendard.”
- “Build the observed home image tab: white `#ffffff` surface, `#666666` label, 1px `#eeeeee` border, 23px radius, 46px height, and 0px 16px 0px 4px padding. The selected capture uses black `#000000` with white `#ffffff` text.”
- “Build the observed home search input: transparent background, `#333333` text, 30px height, 0px radius, and 0px 28px 0px 0px padding.”
- “Build the recently viewed-products dropdown trigger: white background, `#333333` text, 1px `#dddddd` border, square corners, 32px height, and 0px 38px 0px 16px padding.”

If a requested state, component, viewport, product flow, or brand color is absent, leave that smallest field or group absent and obtain new evidence rather than using a generic ecommerce fallback.

## Governance

### Known Gaps

- **Contrast, `search-input`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-icon-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `mylotte-outline-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-menu-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

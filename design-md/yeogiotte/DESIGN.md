---
name: 여기어때
colors:
  primary: '#1d8bff'
  canvas: '#ffffff'
  foreground: '#222222'
  border: '#e6e6e6'
  red: '#f94239'
  red-tint: '#ffedea'
  blue-tint: '#e3f0ff'
  yellow: '#ffc83b'
  slate: '#49627a'
typography:
  display-large:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.1875
    use: Highest display hierarchy
  display-medium:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.1667
    use: Page-level display hierarchy
  title-large:
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.1111
    use: Large component or section title
  body-medium:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4286
    use: Multiline product body
  caption-large:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.3333
    use: Multiline caption
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  full: 9999px
spacing:
  xs: 2
  sm: 4
  md: 8
  base: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64
components:
  button:
    type: button
    backgroundColor: '#1d8bff'
    textColor: '#ffffff'
    rounded: 8px
    states: enabled, pressed, disabled
    use: YDS public Button family; exact variant geometry belongs to the component page
  search-bar:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#222222'
    rounded: 12px
    states: idle, focused, typing, populated
    use: YDS public search pattern and product destination/accommodation search
  price-marker:
    type: badge
    backgroundColor: '#ffffff'
    textColor: '#222222'
    rounded: 20px
    states: default, selected
    use: YDS public map price marker
  filter-chip:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#222222'
    border: '1px solid #e6e6e6'
    rounded: 100px
    padding: 0px 16px
    height: 32px
    typography: 13px / 600 / Pretendard
    hover: 'bg #f5f5f5'
    pressed: 'bg #f5f5f5'
    focus: 'border 1px #243b52 replaces the 1px #e6e6e6 border (authored; gone after blur) — measured 2026-09-29'
    states: rest, hover, pressed and keyboard focus measured 2026-09-29 on the results page's '5만원 이하' (real :hover, :active, and Tab to :focus-visible); instant (transition all 0s)
    use: Price and grade filters on the accommodation results page (gc-capsule-button)
  listing-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 12px
    padding: 0px 0px 24px
    size: 282px x 343px
    hover: 'photo only: image filter none → brightness(0.8) saturate(1.5), image bg rgba(0,0,0,0.16); the card itself unchanged'
    pressed: same as hover
    focus: no visible change (measured 2026-09-29)
    states: default captured 2026-07-11 (35 cards on the home carousels); hover and pressed measured 2026-09-29 in a run with this card alone, keyboard focus in the first run
    use: 'Home accommodation carousel card (gc-carousel-seller-card): photo, grade, name, location, rating, price'
  search-cta:
    type: button
    backgroundColor: '#1d8bff'
    textColor: '#ffffff'
    rounded: 10px
    padding: 0px 18px
    height: 48px
    typography: 15px / 700 / Pretendard
    hover: 'bg #006ce0'
    pressed: 'bg #006ce0'
    focus: 'no visible change: no outline is drawn and nothing else changes (measured 2026-09-29)'
    states: default captured 2026-07-11; hover, pressed and keyboard focus measured 2026-09-29; 0.15s transition
    use: Home search submit '검색' (yf-* family); 10px radius, not the 8px of the YDS Button
  box-button:
    type: button
    backgroundColor: '#1d8bff'
    textColor: '#ffffff'
    rounded: 8px
    padding: 9px 14px
    height: 40px
    typography: 14px / 600 / Pretendard
    hover: 'bg #006ce0'
    pressed: 'bg #006ce0'
    focus: 'border 1px #243b52 added (authored), widening the box 117.7px → 119.7px — measured 2026-09-29'
    states: default captured 2026-07-11; hover, pressed and keyboard focus measured 2026-09-29
    use: 'Filled product button (gc-box-button), e.g. ''로그인/회원가입'' in the page body; same #1d8bff fill and 8px radius as the YDS Button'
  outline-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#222222'
    border: '1px solid #e6e6e6'
    rounded: 8px
    padding: 0px 14px
    height: 40px
    typography: 14px / 600 / Pretendard
    hover: 'bg #f5f5f5'
    pressed: 'bg #f5f5f5'
    focus: 'no visible change: no outline is drawn and nothing else changes (measured 2026-09-29)'
    states: default captured 2026-07-11; hover, pressed and keyboard focus measured 2026-09-29; colour transitions 0.15s
    use: Header '비회원 예약조회'
  header-login-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1d8bff'
    border: '1px solid #1d8bff'
    rounded: 8px
    padding: 0px 14px
    height: 40px
    typography: 14px / 600 / Pretendard
    states: default captured 2026-07-11; no pointer-state sample
    use: Header '로그인/회원가입', outlined in the action blue
  menu-button:
    type: button
    backgroundColor: '#ffffff'
    rounded: 8px
    size: 40px x 40px
    hover: 'bg #e6e6e6'
    pressed: 'bg #e6e6e6'
    states: 'hover and pressed state samples captured 2026-07-11, both settling on #e6e6e6 (the Neutral 100 border colour); keyboard focus not measured'
    use: Header '메뉴 열기' icon button
  search-field:
    type: input
    backgroundColor: transparent
    textColor: '#222222'
    border: 1px solid transparent
    rounded: 16px
    padding: 16px 24px
    size: 351px x 72px
    typography: 16px / 600 / Pretendard (input text)
    hover: 'bg #e6e6e6 (field wrapper)'
    states: 'default captured 2026-07-11 (three fields: 여행지, 일정, 인원); hover measured 2026-09-29; a press or keyboard focus turns the wrapper #ffffff with a 1px #222222 border, but that look stayed after blur, so it may be script state and is not declared'
    use: Home search field wrapper, the live product's search bar; the YDS search-bar entry keeps its documented 12px radius
  section-tab-chip:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#222222'
    border: '1px solid #e6e6e6'
    rounded: 100px
    padding: 8px 16px
    height: 32px
    typography: 13px / 500 / Pretendard
    selected: 'bg #1d8bff, fg #ffffff, border 1px #ffffff, 13px / 700'
    states: unselected and aria-selected=true variants captured 2026-07-11 (7 and 10 samples; the collector's tab interactions selected each in turn); no pointer-state sample
    use: Home section tablist chip (role=tab)
fonts:
  roles:
    sans: Pretendard
---

# Design System Inspiration of 여기어때 (GoodChoice)

## Overview

### Visual Theme & Atmosphere

여기어때의 공개 디자인 체계는 숙소와 여행 상품을 빠르게 탐색·비교·예약하게 하는 제품 UI와 이를 지탱하는 YDS 6.0으로 나뉩니다. 실서비스는 목적지 사진이 주도하는 카드, 흰 배경, `#222222` 텍스트, Cyan 800 `#1D8BFF` 액션을 사용해 가격·평점·혜택·예약 가능성을 한 흐름에서 읽게 합니다. 공식 Design Library는 이 제품 관찰값보다 넓은 Lively Red, Cyan, Neutral, membership, multi-color 팔레트와 foundation 규칙을 제공합니다. 따라서 이 reference는 여행의 활기라는 브랜드 인상과 실제 예약 UI의 효율을 함께 설명하되, library token과 특정 live surface 측정값을 서로 대체하지 않습니다.

2026-07-11 수집은 홈·국내 숙소 결과·공식 Design Library 6개 route, 총 8 surfaces를 대상으로 했습니다. 37 colors, 21 font families, 30 component variants, 3 interactions, coverage 95/100을 확보했고, `Pretendard`는 560개 요소에서 loaded/high confidence로 확인됐습니다.

### Primary tasks

- Search for a stay after settling on a destination and dates
- Narrow the results down by price, grade, and amenities
- Compare photos, location, rating, and price across listings
- Scan prices on the map before choosing where to look
- Check the booking conditions, then move on to payment

### Imagery & Iconography

실서비스의 핵심 시각 자산은 숙소와 여행지 사진입니다. 아이콘은 장식보다 검색·필터·탐색 affordance를 보조해야 합니다. 공식 iconography를 확인할 수 없는 새 glyph나 임의 stroke 규칙은 추가하지 않습니다.

#### Do

- 숙소와 여행지 사진을 탐색 정보의 첫 단서로 사용합니다.
- 검색·필터 아이콘에는 텍스트 label이나 접근 가능한 이름을 제공합니다.

#### Don't

- 검증되지 않은 icon stroke나 brand illustration 규칙을 만들지 않습니다.
- 저대비 사진 위에 핵심 가격이나 행동 label을 직접 올리지 않습니다.

### Brand Narrative

공식 Design Library가 밝히는 범위에서 여기어때의 디자인 언어는 여행을 위한 시각 언어이며 app/web 일관성을 유지하는 데 목적이 있습니다. YDS는 색, typography, layout, component를 공통 언어로 제공하고, 실제 제품은 이를 사진 중심 탐색과 예약 결정에 적용합니다. 이 결합이 중요한 이유는 여행 서비스가 영감과 거래를 동시에 다루기 때문입니다: 이미지는 가고 싶은 마음을 만들고, 명확한 정보 위계와 CTA는 그 마음을 실행 가능한 예약으로 바꿉니다.

현재 공개 surface에서 확인되는 정체성은 활기만 강조하는 광고 브랜드가 아니라, 수많은 숙소 조건을 비교하는 사용자의 부담을 줄이는 제품입니다. 그래서 accent color는 행동과 선택 상태에 집중되고, typography는 장식보다 가격·평점·혜택의 스캔을 지원합니다. 창업·인수·시장순위 같은 제3자 기업 서사는 디자인 근거로 사용하지 않습니다.

YDS와 live product를 함께 읽으면 여기어때의 차별점은 특정 장식 하나보다 여행 결정의 리듬에 있습니다. 넓은 탐색에서는 사진과 카테고리가 관심을 만들고, 목록에서는 반복 가능한 metadata가 비교를 돕고, 상세와 예약에서는 행동과 조건이 선명해집니다. 이 reference는 그 리듬을 재현하되 공식 foundation에 없는 native pattern이나 campaign 표현을 전체 시스템 규칙으로 확대하지 않습니다.

### Design Principles

- 여행 선택에 필요한 정보 위계를 먼저 보여줍니다.
- app/web 간 foundation과 component 사용을 일관되게 유지합니다.
- 강조는 JTBD가 필요한 최상단 module에 제한합니다.
- 공식 token과 실서비스 관찰 패턴의 증거 수준을 구분합니다.
- 가격·혜택·취소 조건 같은 결정 정보를 이미지나 감성 문구 뒤에 숨기지 않습니다.
- 색만으로 선택·오류·할인을 구분하지 않고 텍스트와 구조를 함께 제공합니다.
- **사진과 정보가 역할을 나눕니다.** 사진은 장소의 성격을 전달하고, 텍스트는 비교와 거래 조건을 책임집니다.
- **surface 근거를 보존합니다.** YDS 규칙, 웹 관찰값, 확인되지 않은 앱 동작을 한 수준의 사실로 합치지 않습니다.

### Personas

공식 Design Library와 공개 제품 surface에는 검증 가능한 persona 정의가 없습니다. 확인 가능한 것은 작업 맥락입니다: 목적지와 날짜를 정해 숙소를 검색하는 사람, 가격·평점·혜택을 비교하는 사람, 예약 조건을 확인하고 결제 단계로 이동하는 사람, 그리고 app/web 사이에서 같은 여행을 이어가는 사람입니다. 이는 인구통계학적 persona가 아니며, 별도 사용자 조사 없이 이름·나이·동기·인용문을 만들어서는 안 됩니다.

## Colors

- **Cyan 800 `#1D8BFF`**: 현재 제품의 주요 탐색·행동 강조. 공식 palette token입니다.
- **Lively Red 800 `#F94239`**: 경고·할인 계열 의미에 쓰이는 공식 red scale의 핵심값입니다.
- **Lively Red 100 `#FFEDEA`**: red-tint soft surface.
- **White `#FFFFFF` / Neutral 900 `#222222`**: 기본 surface와 foreground.
- **Neutral 100 `#E6E6E6`**: 제품의 outline과 divider에서 관찰되는 light border.
- **Cyan 100 `#E3F0FF`**: blue soft surface.
- **Yellow 800 `#FFC83B`**: rating·multi-color emphasis.
- **Navy 500 `#49627A`**: member-price 계열 보조 강조.

채도가 있는 palette에는 임의 opacity를 적용하지 않는 것이 YDS 원칙입니다. 예외 opacity token은 공식 문서에 별도로 열거된 값만 사용합니다.

## Typography

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | YDS 6.0 typography foundation이 `Pretendard` 사용을 명시합니다. |
| Live surface-use | 홈·숙소 결과·Design Library에서 loaded Pretendard가 560개 요소에 관찰됐습니다. |
| Official distributed asset | 별도의 여기어때 전용 제품 서체 배포 근거는 확인되지 않았습니다. |
| Declared-only | 다른 family 선언은 visible usage 없이는 승격하지 않습니다. |
| Unresolved | 공개 foundation 밖의 native-app 전용 family는 검증 전까지 미확정입니다. |

Specimen availability is separate from family truth and requires a loadable, licensed source.

국문·영문·숫자 모두 **Pretendard**를 사용합니다. 공식 scale은 Display Large 32/38부터 Badge 9/11까지 이어지고, UI Typo는 16·15·14·13·12·11·10px의 Semibold 계층을 제공합니다. Letter spacing은 별도값을 지정하지 않으며, 두 줄 이상은 multiline role을 사용합니다. Underline은 링크, strikethrough는 가격 원가에 한정합니다.

## Layout

### Layout & Spacing

기본 화면 좌우 margin은 20px, JTBD module을 강조하는 화면은 10px입니다. module width는 screen width minus 20px, radius는 20px, module section bottom spacing은 12px입니다. 공식 spacing scale은 2, 4, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 96px입니다.

### Responsive Behavior

YDS layout은 모바일 screen margin을 20px로 두고, 강조 module에서 10px로 줄입니다. desktop web의 최대폭이나 breakpoint는 공개 foundation에서 확인되지 않았으므로 구현 환경의 content constraint를 따르되 토큰처럼 주장하지 않습니다.

제품 카피는 여행자가 지금 결정해야 하는 정보와 다음 행동을 짧게 연결합니다. 목적지·날짜·인원·가격·혜택처럼 비교에 필요한 명사는 먼저 보여주고, 검색·예약·확인 CTA는 동사형으로 유지합니다. 감성적인 여행 문구는 hero나 campaign에 둘 수 있지만 가격 조건, 취소 규정, 재고, 오류 상태를 덮어서는 안 됩니다. 확인되지 않은 push·오류 문구 규칙은 만들지 않으며, live surface에서 관찰된 용례만 예시로 사용합니다.

## Elevation & Depth

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `0 1px 2px rgba(0,0,0,.06)`
- `shadow.raised`: `0 2px 16px rgba(0,0,0,.08)`
- `shadow.sheet`: `0 4px 20px rgba(0,0,0,.32)`

## Shapes

### Shape, Border & Elevation

공식 radius tokens는 2, 3, 4, 8, 10, 12, 16, 20px와 50%입니다. Core sizes는 8, 12, 20px입니다. Shadow는 Flat, Header, Dock, Raised, Float, Sheet의 용도별 단계이며, 반복 card에는 Flat 또는 Raised, dialog에는 Raised, bottom sheet에는 Sheet를 사용합니다.

## Components

공개 YDS component catalog는 현재 Button, Price marker, Search bar를 명시합니다. 아래 숙소 filter와 card, 그리고 "라이브 제품 컴포넌트"는 제품 surface에서 측정한 패턴이며, 공개 YDS 명세와 혼동하지 않습니다.

### Buttons

**Primary Action**
- Type: button
- Background: `#1D8BFF`
- Text: `#FFFFFF`
- Radius: 8px
- States: enabled, pressed, disabled
- Use: 검색과 다음 단계로 이어지는 핵심 행동
- 라이브 대응(2026-09-29 확인): 제품의 `gc-box-button`(아래 Box Button)이 이 문서값과 같은 `#1d8bff` fill과 8px radius입니다. 홈의 '검색' 버튼은 10px radius의 다른 요소(`yf-*` 계열, 아래 Search CTA)이므로 이 YDS 문서값을 고치지 않습니다.

### Inputs

**Search Bar**
- Type: input
- Background: `#FFFFFF`
- Text: `#222222`
- Radius: 12px
- States: idle, focused, typing, populated
- Use: 여행지와 숙소 검색
- 라이브 대응: 제품 홈의 검색 필드 wrapper는 16px radius입니다(2026-07-11 캡처와 2026-09-29 측정이 같음, 아래 Search Field). 12px는 YDS 문서값으로 둡니다.

### Cards

**Accommodation Listing**
- Type: card
- Background: `#FFFFFF`
- Radius: 12px
- Padding: 0 0 24px, 282px × 343px
- Shadow: none
- Hover·Pressed: 카드 자체는 그대로이고, 사진에만 `filter: brightness(0.8) saturate(1.5)`와 rgba(0,0,0,0.16) 배경이 걸립니다(2026-09-29 측정)
- Focus: 보이는 변화 없음(2026-09-29 측정)
- Use: 홈 숙소 carousel 카드(`gc-carousel-seller-card`): 사진, 등급, 숙소명, 위치, 평점, 가격
- 근거 정정(2026-09-29): 이 12px 카드는 2026-07-11 캡처의 홈 surface에 있습니다(35개). 같은 캡처의 결과 페이지 surface는 Cloudflare 차단 화면이라 카드가 없었습니다. 결과 페이지의 목록 카드는 다른 레이아웃(880px 폭의 행, anchor radius 0, 아래쪽 1px `#e6e6e6` 구분선; 2026-09-29 survey)이며 측정하지 않았습니다.

### Badges

**Price Marker**
- Type: badge
- Background: `#FFFFFF`
- Text: `#222222`
- Radius: 20px
- States: default, selected
- Use: 지도 위 가격 탐색

**Filter Chip — observed product pattern**
- Type: button (`gc-capsule-button`)
- Background: `#FFFFFF`
- Text: `#222222`, 13px / 600
- Border: 1px solid `#E6E6E6`
- Radius: 100px (capsule), 높이 32px, padding 0 16px
- Hover·Pressed: 배경 `#f5f5f5`
- Focus: 테두리가 1px `#243b52`로 바뀝니다(작성된 스타일이며 blur 후 사라짐; 2026-09-29 측정)
- Use: 결과 페이지의 가격·등급 필터('5만원 이하' 등)
- 정정(2026-09-29): 이전의 1.5px 테두리와 50% radius는 측정값이 아니었습니다. 2026-07-11 캡처의 결과 surface는 Cloudflare 차단 화면이었고, 2026-09-29 같은 URL에서 1px와 100px가 측정됐습니다.

### 라이브 제품 컴포넌트 (2026-07-11 캡처, 상태는 2026-09-29 측정)

YDS 문서 컴포넌트와 별도로 제품 홈에서 측정한 컨트롤입니다. 검색 필드를 뺀 측정 컨트롤은 hover와 pressed가 같은 값입니다. 검색 필드는 hover에 래퍼가 `#e6e6e6`이 되고, 누르면 흰 바탕에 1px `#222222` 테두리가 됩니다. 이 누름 모양은 blur 뒤에도 남아 스크립트 상태일 수 있어 pressed 값으로 선언하지 않습니다.

**Search CTA** — 홈 검색 제출 '검색'
- `#1d8bff` 배경, `#ffffff` 텍스트, 10px radius, 높이 48px, padding 0 18px, 15px / 700
- Hover·Pressed: 배경 `#006ce0`
- Focus: 보이는 변화 없음(outline이 그려지지 않고 다른 속성도 그대로; 2026-09-29 측정)
- 0.15s 전환

**Box Button** — `gc-box-button`, 예: 본문의 '로그인/회원가입'
- `#1d8bff` 배경, `#ffffff` 텍스트, 8px radius, 높이 40px, padding 9px 14px, 14px / 600
- Hover·Pressed: 배경 `#006ce0`
- Focus: 1px `#243b52` 테두리가 추가되고 폭이 117.7px에서 119.7px로 늘어납니다(2026-09-29 측정)

**Outline Button** — 헤더 '비회원 예약조회'
- `#ffffff` 배경, `#222222` 텍스트, 1px solid `#e6e6e6`, 8px radius, 높이 40px, padding 0 14px, 14px / 600
- Hover·Pressed: 배경 `#f5f5f5`. Focus: 보이는 변화 없음(2026-09-29 측정)

**Header Login Button** — 헤더 '로그인/회원가입'
- `#ffffff` 배경, `#1d8bff` 텍스트와 1px 테두리, 8px radius, 높이 40px, 14px / 600
- 상태 샘플 없음

**Menu Button** — 헤더 '메뉴 열기'
- 40px × 40px, `#ffffff` 배경, 8px radius
- Hover·Pressed: 배경 `#e6e6e6`(2026-07-11 상태 샘플). 키보드 focus는 측정하지 않았습니다

**Search Field** — 홈 검색 필드 wrapper(여행지·일정·인원)
- 351px × 72px, 16px radius, padding 16px 24px, 투명 배경과 1px 투명 테두리. 입력 텍스트는 `#222222` 16px / 600
- Hover: wrapper 배경 `#e6e6e6`(2026-09-29 측정)
- 누르거나 키보드로 focus하면 wrapper가 `#ffffff` 배경과 1px `#222222` 테두리가 됩니다. 다만 focus가 떠난 뒤에도 남아 있어 스크립트 상태일 수 있으므로 상태값으로 선언하지 않습니다.

**Section Tab Chip** — 홈 섹션 tablist(role=tab)
- 미선택: `#ffffff` 배경, `#222222` 텍스트, 1px solid `#e6e6e6`, 100px radius, 높이 32px, padding 8px 16px, 13px / 500
- 선택(aria-selected=true): `#1d8bff` 배경, `#ffffff` 텍스트, 13px / 700
- pointer 상태 샘플 없음

**Verified:** 2026-07-11 (eight-surface deterministic capture plus official in-app inspection) · states re-measured 2026-09-29 (live probe of the home and results pages)
**Tier 1 sources:** https://www.yeogi.com/ , https://www.yeogi.com/domestic-accommodations , https://designlibrary.yeogi.com/ , https://designlibrary.yeogi.com/foudations/color/palette-color , https://designlibrary.yeogi.com/foudations/typography , https://designlibrary.yeogi.com/foudations/layout , https://designlibrary.yeogi.com/foudations/radius , https://designlibrary.yeogi.com/components/overview

제품 결과 화면의 반복 문법은 `photo → property metadata → name → location → rating → price`입니다. 검색은 하나의 명확한 query surface로 유지하고, 필터는 결과를 가리지 않는 compact chip으로 제공합니다. 공개 YDS component coverage가 세 family에 한정되므로 비공개 component anatomy를 추정해 채우지 않습니다.

### Interaction & Motion

확인된 상태는 버튼·검색바·price marker의 기본/선택/입력 흐름과 product filter interaction입니다. duration이나 easing은 공개 source에서 확인되지 않았으므로 고정 token을 만들지 않습니다. 상태 변화는 색상만이 아니라 label, border, focus affordance로도 구분합니다.

2026-09-29 라이브 측정: 검색 필드를 뺀 다섯 컨트롤은 hover와 pressed가 같은 값입니다(채운 `#1d8bff` 버튼은 `#006ce0`, 흰 outline 컨트롤은 `#f5f5f5`). 검색 필드는 hover(래퍼 `#e6e6e6`)와 누름(흰 바탕, 1px `#222222` 테두리)이 다릅니다. 키보드 focus는 outline으로 그려지지 않습니다. `gc-*` 컨트롤(Box Button, Filter Chip)은 1px `#243b52` 테두리를 그리고, `yf-*` 버튼(Search CTA, Outline Button)과 홈 숙소 카드는 보이는 변화가 없습니다. '검색' 버튼과 헤더 outline 버튼에만 0.15s 전환이 있고 나머지는 즉시 바뀝니다. 이 값들은 컴포넌트 측정값이며 motion token으로 만들지 않습니다.

## Governance

### Accessibility

작은 badge와 caption에서도 의미를 색상 하나에만 의존하지 않습니다. 사진 위 텍스트는 별도 contrast surface를 확보하고, search·filter·button은 visible focus와 명시적 label을 유지합니다. 정확한 contrast ratio나 target size는 별도 검증 전에는 주장하지 않습니다.

측정 결과(2026-09-29): focus 표시로 선언한 것은 `gc-*` 계열의 1px `#243b52` 테두리뿐입니다. 검색 필드도 키보드 focus에서 래퍼가 흰 바탕에 1px `#222222` 테두리로 바뀌지만, blur 뒤에도 남아 스크립트 상태일 수 있어 focus 스타일로 선언하지 않습니다. '검색' 버튼, 헤더 '비회원 예약조회', 홈 숙소 카드는 focus가 보이지 않고, 브라우저 기본 ring도 그려지지 않습니다.

### Implementation Checklist

- Pretendard를 국문·영문·숫자 공통 family로 사용합니다.
- Cyan 800을 product primary action에 사용하되 전체 브랜드를 단일 blue palette로 축약하지 않습니다.
- 20px 기본 screen margin과 공식 spacing/radius scale을 우선합니다.
- 공개 YDS components와 product-observed patterns를 코드·문서에서 구분합니다.
- 새로운 motion, persona, breakpoint, component state를 근거 없이 만들지 않습니다.

### Known Gaps

- **Contrast, `button`.** Text `#ffffff` on `#1d8bff` measures 3.39:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-cta`.** Text `#ffffff` on `#1d8bff` measures 3.39:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `box-button`.** Text `#ffffff` on `#1d8bff` measures 3.39:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-login-button`.** Text `#1d8bff` on `#ffffff` measures 3.39:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-field`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

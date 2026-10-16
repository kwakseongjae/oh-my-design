---
name: MEGABOX
colors:
  primary: '#503396'
  canvas: '#ffffff'
  foreground: '#444444'
  muted: '#666666'
  on-primary: '#ffffff'
typography:
  body:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22.5px
    use: Observed on the supplied public home, movie, and booking routes; no native or authenticated-app scope is claimed.
  section-title:
    fontSize: 27.999px
    fontWeight: 400
    lineHeight: 30.7989px
    letterSpacing: '-1px'
    use: Observed only on the supplied public movie-route h2.
rounded:
  compact-control: 4px
  theater-lookup: 30px
spacing:
  like-button-inline: 5
  search-input-inline: 10
components:
  movie-like-button:
    type: button
    backgroundColor: '#ffffff'
    text: '#503396'
    border: '1px solid #ebebeb'
    rounded: 4px
    padding: 0px 5px
    height: 36px
    typography: 13.0005px / 400 / NanumBarunGothic
    states: rest on 20 like buttons on the movie route (surface-2 capture 29 and siblings); the bundle holds no state frame for any MEGABOX element
    use: Movie route list action at surface-2::[data-omd-capture="29"].
    pressed: 'bg #f2f4f8, label #351f67, outline #000000 dotted 1px (+2 nested-layer changes) (:hover + :active)'
    focus: 'outline #000000 dotted 1px on :focus-visible'
  movie-like-button-on-dark:
    type: button
    backgroundColor: rgba(0, 0, 0, 0.4)
    textColor: '#ffffff'
    border: '1px #555555'
    rounded: 4px
    padding: 0px 5px
    size: 80px x 36px
    typography: 13.0005px / 400 / 34px NanumBarunGothic, tracking -0.5px
    states: rest on four home buttons (home capture 29, 32, 35, 38); no state frame
    use: Home like button (button.button.btn-like, the movie-route class) at home::[data-omd-capture="29"], under each home movie poster; translucent black fill
  booking-button:
    type: button
    backgroundColor: '#503396'
    textColor: '#ffffff'
    rounded: 4px
    padding: 0px
    size: 153px x 36px
    typography: 15px / 400 / 36px NanumBarunGothic
    states: rest on the movie-route booking links; no state frame
    use: Booking link (a.button.purple.bokdBtn; an a element with no button role) at surface-2::[data-omd-capture="35"], one per movie card beside the like button; it narrows to 74px x 36px where an icon-only a.button.purple.img.splBtn (capture 31, no text) sits beside it (capture 30, 39)
  home-teal-button:
    type: button
    backgroundColor: '#037b94'
    textColor: '#ffffff'
    rounded: 4px
    padding: 0px
    size: 160px x 36px
    typography: 15px / 400 / 36px NanumBarunGothic
    states: rest on four home links (home capture 30, 33, 36, 39); no state frame
    use: Link (a.button.gblue; no button role) beside each home like button at home::[data-omd-capture="30"]; a larger a.button.gblue (capture 58, 145px x 50px, 19.9995px / 400 / 48px) sits further down the home
  outline-link-on-dark:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '1px #ffffff'
    rounded: 4px
    padding: 0px
    size: 145px x 50px
    typography: 19.9995px / 400 / 48px NanumBarunGothic
    states: rest; one instance; no state frame
    use: White outline link (a.button; no button role) at home::[data-omd-capture="57"], beside the larger teal link (capture 58) below white 36px / 400 title text (p.tit); the fill behind them is not in the capture
  movie-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#222222'
    border: '1px #ebebeb on top and 1px #503396 at the bottom of the parent li; 1px #ebebeb side dividers on some'
    size: 220px x 41px
    typography: 16.0005px / 400 / 40px NanumBarunGothic
    selected: 'bg #ffffff, fg #503396; parent li border 1px #503396 on the top and sides, 0px at the bottom'
    states: rest on four tabs (surface-2 capture 20-23); the tab whose li has class on (capture 19) differs from them and is recorded as selected; no state frame
    use: Movie-route tab label (a) in div.tab-list.fixed at surface-2::[data-omd-capture="20"]; the borders sit on the parent li (220px x 42px)
  movie-search-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#444444'
    padding: 0px 10px
    size: 197px x 34px
    typography: 15px / 400 / 30px NanumBarunGothic
    states: rest, empty (textLength 0); no state frame
    use: 'Movie-route search field (input.input-text) at surface-2::[data-omd-capture="25"]; the input records no border of its own; its 30px x 32px search button (capture 26) has 0px type; the home input.input-text (capture 40) is transparent with #ffffff text, 170px x 29px'
  list-more-button:
    type: button
    backgroundColor: transparent
    textColor: '#666666'
    border: '1px #eaeaea'
    rounded: 0px
    padding: 0px
    size: 1100px x 40px
    typography: 15px / 400 / 17.25px NanumBarunGothic, tracking -0.5px
    states: rest; no state frame
    use: Full-width button (button.btn) below the movie list at surface-2::[data-omd-capture="109"]
  gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#444444'
    height: 38px
    typography: 15px / 400 / 22.5px NanumBarunGothic
    states: rest on six links on the movie and booking routes (surface-2 and surface-3 capture 11-16); no state frame
    use: 'Main navigation link (a.gnb-txt-movie, .gnb-txt-reserve, .gnb-txt-theater and siblings) at surface-2::[data-omd-capture="11"]; the same links are #ffffff on the home (capture 12-17)'
  header-utility-link:
    type: button
    backgroundColor: transparent
    textColor: '#444444'
    height: 20px
    typography: 13.0005px / 400 / 19.5007px NanumBarunGothic
    states: rest on six links per route (surface-2 capture 1-6); no state frame
    use: 'Header utility link (a; no button role) above the main navigation at surface-2::[data-omd-capture="1"]; #888888 on the home (capture 2-7)'
  footer-link:
    type: button
    backgroundColor: transparent
    textColor: '#666666'
    height: 30px
    typography: 13.0005px / 400 / 30px NanumBarunGothic
    states: rest on six links per route (home capture 83-87, 90); no state frame
    use: 'Footer link (a; no button role) on all three routes at home::[data-omd-capture="83"]; two links per route are #222222 at 700 (home capture 88, 89)'
  theater-lookup-pill:
    type: button
    backgroundColor: transparent
    textColor: '#666666'
    border: '1px #d8d9db'
    rounded: 30px
    size: 106px x 30px
    typography: 13.0005px / 400 / 28px NanumBarunGothic
    states: rest on all three routes (home capture 91, surface-2 capture 118, surface-3 capture 27); no state frame
    use: Footer link (a.btn-looking-theater; no button role) at home::[data-omd-capture="91"]; the element behind the theater-lookup 30px radius token
  special-hall-card:
    type: card
    rounded: 10px
    size: 170px x 170px
    shadow: rgba(0, 0, 0, 0.2) 5px 5px 10px 0px
    states: rest on ten cards (home capture 63-72); no state frame
    use: Special-hall link card (a.bg-dolby, .bg-dva, .bg-mx4d and siblings) on the home at home::[data-omd-capture="63"]; its background colour is transparent and its type is 0px, so neither a fill nor a label style is claimed
fonts:
  roles:
    ui: NanumBarunGothic
---

# 메가박스 — Design Reference

## Overview

### Visual Theme & Atmosphere

메가박스는 영화 상영을 중심에 두면서도 사람들이 이야기를 만나고, 함께 놀고, 경험을 공유하는 공간을 표방하는 한국의 멀티플렉스 브랜드다. 회사의 공식 연혁은 2000년 코엑스점을 출발점으로 삼고, 2011년 씨너스와의 합병을 거쳐 더 좋은 영화관을 향한 확장을 설명한다. 현재의 브랜드 표현은 2017년에 공개한 Life Theater BI에서 분명해진다. 일곱 개의 황금비율 박스와 보라 계열 인디고는 공간과 창의적 콘텐츠를 연결하는 공식 설명이다. 반면 공급된 공개 웹 캡처는 그 이야기를 좁은 범위에서만 구현한다. `#444444`의 실무적 본문, 흰 바탕, 영화 목록의 보라 액션과 얇은 회색 경계가 공존하며, 이것은 세 개의 데스크톱 공개 웹 경로에 대한 관찰이지 극장 현장, 모바일 앱, 로그인 후 예매 경험의 일반 규칙은 아니다.

**Key characteristics:**

- 공식 BI의 보라 계열 인디고 맥락과, 영화 목록에서 관찰된 `#503396` 액션
- `#444444` 본문 잉크와 `#666666` 보조 텍스트의 조용한 정보 밀도
- 네모난 4px 목록 제어와 30px 극장 찾기 칩이 함께 쓰이는 서로 다른 밀도의 형태
- 반복 로드된 NanumBarunGothic 기반의 공개 웹 타이포그래피

### Primary tasks

- Find a film, a theater, and a showtime
- Open a film’s reservation link from the movie list
- Search the movie route for a specific title

### Iconography & Imagery

The supplied routes use film imagery, poster-led movie listings, header utility controls, and carousel affordances. No named icon library, stroke width, asset aspect-ratio rule, or reusable media-card contract is established by the evidence; the special-hall card's 10px corner and shadow are measured on one home row only.

#### Do

- Keep the official purple/indigo brand story separate from the narrower selector-backed public-web color claims.
- Preserve the distinction between an observed HTML button and visually button-like links whose semantics were not captured.
- Use the loaded NanumBarunGothic family where the public-web scope is relevant; label unsupported contexts instead of substituting another font as Megabox typography.

#### Don't

- Convert poster links, booking links, or rows into generic buttons without evidence of button semantics. (§4 records such links by visual role and names the `a` element in each `use`.)
- Infer hover, focus, pressed, dialog, seat-selection, payment, or responsive states from default geometry.
- Treat Roboto or text-security-disc as a Megabox brand-family replacement.

### Brand Narrative

Megabox’s official company history places its public origin at the 2000 opening of its COEX site, followed by the 2011 Megabox–Cinus merger. The company describes that history as an effort to keep building a better cinema while carrying forward novelty and diversity in a shared entertainment space.

In 2017, the official introduction says the brand introduced a new BI and the Life Theater slogan. Its seven golden-ratio boxes, English Megabox type treatment, and purple-indigo expression are presented as a more flexible, extensible identity for spaces filled with creative content. That is the documented evolution used here; no later rebrand or unverified visual-system claim is added.

The stated mission is to create shareable spatial experiences and to deliver happy everyday life through valuable content and varied space-based experiences. This is company narrative, not proof of any product CSS value or booking-flow behavior.

### Principles

1. **Empathy / 공감** — understand and consider people.
   *UI implication:* Make public information legible before adding promotional density; no focus or error treatment is implied by this principle.
2. **Creation / 창조** — approach everyday life with challenge and passion.
   *UI implication:* Use content discovery as a reason for visual variety, while keeping unsupported component variants absent.
3. **Fun / 재미** — let the experience itself feel enjoyable.
   *UI implication:* Keep cinema discovery inviting without converting the company value into a measured animation or color rule.

### Personas

These are stakeholder groups stated or directly implied by Megabox’s official service and mission material, not synthetic research personas.

- **Cinema visitor:** a person using the public service to discover films, theaters, showtimes, and related benefits. The supplied capture supports only public-web browsing context, not their booked or logged-in journey.
- **Member:** a service participant for whom Megabox describes membership, points, tickets, and benefits. No member dashboard or benefit-control styling was captured here.
- **Employee or candidate:** a stakeholder addressed through the official recruiting material’s customer orientation, challenge, and communication values. This is culture context, not product-interface evidence.

## Colors

### Color & Typography

#### Color tokens

- `#503396` — `/movie`의 보라 예약 링크와 영화 목록 좋아요 버튼 텍스트에서 관찰된 색. 공식 회사 소개가 설명하는 보라 계열 인디고와 같은 맥락이지만, 공개 웹 전체의 단일 CTA 규칙으로 일반화하지 않는다.
- `#FFFFFF` — 영화 목록 항목과 좋아요 버튼의 관찰된 흰 배경, 보라 예약 링크의 텍스트.
- `#444444` — 세 공개 경로에 걸쳐 반복 관찰된 본문 잉크.
- `#666666` — 극장 찾기 제어 및 일부 보조 텍스트에 관찰된 보조 잉크.
- 컴포넌트 전용 색(§4에 기록, 팔레트 역할로 승격하지 않음): `#037b94`(홈 청록 링크), `#555555`(홈 좋아요 버튼 테두리), `#222222`(영화 탭 라벨과 굵은 푸터 링크), `#ebebeb`(영화 탭 구분선), `#eaeaea`(목록 더보기 버튼 테두리), `#d8d9db`(극장 찾기 칩 테두리), `#888888`(홈 헤더 유틸리티 링크), 반투명 `rgba(0, 0, 0, 0.4)`(홈 좋아요 버튼 채움).

#### Typography evidence classes

- **Live computed surface-use:** NanumBarunGothic은 세 공개 웹 경로에서 439회 관찰되었고, 8개의 Megabox-hosted WOFF/EOT/TTF 소스와 함께 `loaded`/high confidence로 기록됐다. 따라서 유일한 `tokens.typography.family.ui`로 남긴다.
- **Official distributed asset:** 공급된 번들은 Megabox 정적 폰트 경로에서 NanumBarunGothic subset을 로드한다. 네이버의 공식 글꼴 목록도 나눔바른고딕과 Ultra Light·Light·Regular·Bold 굵기를 별도로 안내한다. 이 배포 맥락은 폰트 자산의 정체를 보강할 뿐, Megabox UI 사용의 증거는 아니며 그 사용은 위의 computed/FontFaceSet 기록으로만 확정한다.
- **System:** Roboto는 25회 관찰됐지만 collector가 operating-system stack으로 분류했다. Megabox 브랜드 글꼴이나 NanumBarunGothic의 대체재로 다루지 않는다.
- **Declared-only:** text-security-disc는 `@font-face`가 선언됐으나 가시 사용은 0회다. 토큰이나 표본 폰트로 승격하지 않는다.

| Role | Size | Weight | Line height | Boundary |
|---|---:|---:|---:|---|
| Public-web body | 15px | 400 | 22.5px | Supplied home/movie/booking routes; NanumBarunGothic loaded |
| Movie section title | 27.999px | 400 | 30.7989px | `/movie` h2 only; -1px tracking |

## Layout

### Layout & Grid

- 공급된 캡처는 home, `/movie`, `/booking`의 `1440×900` 데스크톱 뷰포트 세 개다.
- 영화 목록에는 `230px × 450px`의 목록 항목이 관찰되지만, 열 수·거터·반응형 전환 규칙은 확인되지 않았다.
- home의 영화 정보 링크는 `245px × 352px`로 기록되었으며, 카드 그리드나 이미지 비율 토큰으로 승격하지 않았다.
- 로그인, 좌석 선택, 결제, 모바일 및 접근성 보조 흐름은 이 범위에 포함되지 않는다.

## Elevation & Depth

### Elevation

The selector-backed movie-list action has `box-shadow: none`. The supplied three-route capture does not establish a repeatable shadow scale, so only the explicit `none` value is tokenized. The ten home special-hall cards record `rgba(0, 0, 0, 0.2) 5px 5px 10px 0px` (§4); that shadow stays on the component and is not promoted to a scale.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Shapes

### Spacing & Shape

The most useful measured inline values are `5px` on the movie-list action and `10px` on a movie-route search input. They are retained as route-local spacing observations, not a global scale. Compact movie controls use 4px corners, while the home theater lookup link has a 30px radius; zero-radius text and navigation elements are also common. The capture does not justify a single universal corner rule.

## Motion & Easing

No duration, easing, animation, carousel transition, or reduced-motion value is recorded in the supplied evidence. Motion rules are intentionally omitted rather than inferred from the presence of a carousel control.

## Components

### Movie list action

**Default**
- Background: `#FFFFFF`
- Text: `#503396`
- Border: `1px solid #EBEBEB`
- Radius: `4px`
- Padding: `0px 5px`
- Height: `36px`
- Font: `13.0005px / 400 / NanumBarunGothic`
- States: rest on 20 like buttons on the movie route. The bundle holds no hover, pressed, or focus frame for any element, so none is declared. Corrected 2026-09-30: the July line gave zero interaction records as the reason; that counter covers opened dialogs, tabs, and menus, not pointer states.
- Use: Actual `button` element at `surface-2::[data-omd-capture="29"]` on the public movie route.

The home includes a disabled carousel-arrow button (`button.special-prev.swiper-button-disabled`). It documents only a static disabled element, not a transition or reusable disabled style, and stays out of the component set.

Updated 2026-09-30: the purple reservation link and the other button-like links below are now recorded as components. Their `type` records the visual role the catalog renders; each `use` names the element, so the links (`a`, no button role) stay distinguishable from the HTML `button` elements (the like buttons and the list-more button).

### Movie list action on the home

**Rest** (`movie-like-button-on-dark`): fill `rgba(0, 0, 0, 0.4)`, text `#ffffff`, border 1px `#555555`, radius `4px`, padding `0px 5px`, 80px × 36px, `13.0005px / 400 / 34px`, tracking -0.5px; `home::[data-omd-capture="29"]`, `"32"`, `"35"`, `"38"` (`button.button.btn-like`, the movie-route class), under each home movie poster.

### Booking link

**Rest** (`booking-button`): background `#503396`, text `#ffffff`, radius `4px`, padding `0px`, 153px × 36px, `15px / 400 / 36px`; `surface-2::[data-omd-capture="35"]` (`a.button.purple.bokdBtn`), one per movie card beside the like button. Where an icon-only `a.button.purple.img.splBtn` (`"31"`, no text) sits beside it, the booking link narrows to 74px × 36px (`"30"`, `"39"`).

### Home teal and outline links

**Teal link** (`home-teal-button`): background `#037b94`, text `#ffffff`, radius `4px`, 160px × 36px, `15px / 400 / 36px`; `home::[data-omd-capture="30"]`, `"33"`, `"36"`, `"39"` (`a.button.gblue`), beside each home like button. A larger `a.button.gblue` (`"58"`, 145px × 50px, `19.9995px / 400 / 48px`) sits further down the home.

**White outline link** (`outline-link-on-dark`): transparent fill, text and 1px border `#ffffff`, radius `4px`, 145px × 50px, `19.9995px / 400 / 48px`; `home::[data-omd-capture="57"]` (`a.button`), beside that larger teal link and below white `36px / 400` title text (`p.tit`). The fill behind them is not in the capture.

### Movie-route tabs

**Rest** (`movie-tab`): label `#222222`, `16.0005px / 400 / 40px`, 220px × 41px; `surface-2::[data-omd-capture="20"]` to `"23"` (`a` in `div.tab-list.fixed`). The borders sit on the parent `li` (220px × 42px): 1px `#ebebeb` on top, 1px `#503396` at the bottom, and 1px `#ebebeb` side dividers on some.

**Selected**: the label in `li.on` (`"19"`) is `#503396` on `#ffffff`; that `li` draws 1px `#503396` on the top and sides and 0px at the bottom, where its neighbours draw the purple line.

### Search field

**Rest** (`movie-search-input`): background `#ffffff`, text `#444444`, padding `0px 10px`, 197px × 34px, `15px / 400 / 30px`; `surface-2::[data-omd-capture="25"]` (`input.input-text`), empty in the capture. The input records no border of its own; its search button (`button.btn-search-input`, `"26"`, 30px × 32px) has 0px type. On the home, `input.input-text` (`"40"`) is transparent with `#ffffff` text, 170px × 29px.

### List more button

**Rest** (`list-more-button`): transparent fill, text `#666666`, border 1px `#eaeaea`, radius `0px`, 1100px × 40px, `15px / 400 / 17.25px`, tracking -0.5px; `surface-2::[data-omd-capture="109"]` (`button.btn`) below the movie list.

### Navigation and footer links

**Main navigation** (`gnb-link`): text `#444444`, `15px / 400 / 22.5px`, 38px high; `surface-2::[data-omd-capture="11"]` to `"16"` (`a.gnb-txt-movie`, `.gnb-txt-reserve`, `.gnb-txt-theater` and siblings), repeated on `/booking`; the same links are `#ffffff` on the home (`"12"` to `"17"`).

**Header utility link** (`header-utility-link`): text `#444444`, `13.0005px / 400 / 19.5007px`, 20px high; `surface-2::[data-omd-capture="1"]` to `"6"`; `#888888` on the home (`"2"` to `"7"`).

**Footer link** (`footer-link`): text `#666666`, `13.0005px / 400 / 30px`; six per route (`home::[data-omd-capture="83"]` to `"87"`, `"90"`); two per route are `#222222` at 700 (`"88"`, `"89"`).

**Theater lookup pill** (`theater-lookup-pill`): transparent fill, text `#666666`, border 1px `#d8d9db`, radius `30px`, 106px × 30px, `13.0005px / 400 / 28px`; `a.btn-looking-theater` in the footer of all three routes (`home::[data-omd-capture="91"]`, `surface-2` `"118"`, `surface-3` `"27"`), the element behind the `theater-lookup` 30px radius token.

### Special-hall card

**Rest** (`special-hall-card`): radius `10px`, 170px × 170px, shadow `rgba(0, 0, 0, 0.2) 5px 5px 10px 0px`; ten links on the home (`home::[data-omd-capture="63"]` to `"72"`, `a.bg-dolby`, `.bg-dva`, `.bg-mx4d` and siblings). The background colour is transparent and the type is 0px, so neither a fill nor a label style is claimed.

The `/booking` capture renders 48 elements, all header, navigation, and footer: no showtime, seat, or booking-flow control is in the bundle. A home `button.on` (`"26"`) has no unmarked sibling to compare against and is not recorded as a state.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.megabox.co.kr/` (public product home), `https://www.megabox.co.kr/movie` (public movie product surface), `https://www.megabox.co.kr/booking` (public booking product surface), `https://www.megabox.co.kr/megaboxinfo/` (official company, BI, history, mission, and values), `https://www.megabox.co.kr/recruit` (official culture and stakeholder context), `https://img.megabox.co.kr/static/pc/font/nanum/NanumBarunGothicSubset.woff` (first-party-hosted font asset), `https://hangeul.naver.com/fonts/search?f=nanum` (official Nanum font catalogue)
**Tier 2 sources:** `https://getdesign.md/megabox` (attempted; built-in web open returned Internal Error), `https://styles.refero.design/?q=megabox` (attempted; built-in web open returned Internal Error); built-in search returned no Megabox-specific record on either catalog
**Conflicts unresolved:** none

### States

Observed: one selected movie-route tab (`li.on`: `#503396` label on `#ffffff`, purple top and side borders, no bottom border) and one static disabled carousel-arrow element on the home. The bundle holds no `::state-hover`, `::state-pressed`, or `::state-focus` sample for any element (0 of 464), so no pointer or focus state is declared. Corrected 2026-09-30: the July text gave `interactionCount: 0` as the reason; that counter covers opened dialogs, tabs, and menus. A home `button.on` has no unmarked sibling to compare against and is not recorded as a state. No empty, loading, error, success, skeleton, or transition treatment is in the bundle, and no fabricated state specification is supplied.

Live state probe, 2026-10-16 (`https://www.megabox.co.kr/movie`), `movie-like-button`: pressed — bg #f2f4f8, label #351f67, outline #000000 dotted 1px (+2 nested-layer changes); focus — outline #000000 dotted 1px.

## Voice & Tone

### Content & Voice

Megabox’s official language is social and experiential: it frames the brand as a place to meet, play, and share, and as a provider of meaningful cultural experiences. Its company statement joins that hospitality with content and space, while its core values name empathy, creation, and fun. Public product copy can take this as an editorial direction—clear, welcoming, and activity-oriented—without claiming a measured UI copy system or reproducing slogans as generic labels.

- **Welcoming:** acknowledge the shared occasion around a film or venue.
- **Culturally curious:** leave room for discovery and new content.
- **Plainly helpful:** make operational choice and next steps easy to understand.

| Do | Don't |
|---|---|
| Use concise, hospitable guidance for a public cinema visit. | Turn every operational label into a brand slogan. |
| Connect content with a shared place or occasion when context warrants it. | Claim a particular seat, payment, or membership behavior was verified. |
| Keep selection language direct on dense movie lists. | Invent an observed conversational style for logged-in flows. |

Illustrative, not captured UI copy: “상영 시간 확인하기”, “함께 볼 영화 찾아보기”, “가까운 극장 보기”. These samples are editorial illustrations, not quotes or evidence of production microcopy.

## Governance

### Accessibility

- The promoted movie-list action uses `#503396` text on `#FFFFFF` with a 1px `#EBEBEB` border. This record does not certify contrast or focus compliance.
- A disabled carousel arrow is present in the supplied home snapshot, but its icon-like zero-size text treatment is not a reusable disabled-control pattern.
- No keyboard, focus-visible, error, modal, or assistive-technology behavior was captured. Implementations need explicit accessible states rather than extrapolating them from the observed defaults.

### Known Gaps

- **Contrast, `movie-tab`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `list-more-button`.** Text `#666666` on `#00000000` measures 3.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-link`.** Text `#444444` on `#00000000` measures 2.16:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-utility-link`.** Text `#444444` on `#00000000` measures 2.16:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-link`.** Text `#666666` on `#00000000` measures 3.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `theater-lookup-pill`.** Text `#666666` on `#00000000` measures 3.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.

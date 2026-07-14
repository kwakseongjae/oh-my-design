---
id: "lotteon"
name: "롯데ON"
country: KR
category: ecommerce
homepage: "https://www.lotteon.com/"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=lotteon.com&sz=128"
verified: "2026-07-14"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-14"
  surfaces:
    - { id: home, kind: storefront, url: "https://www.lotteon.com/p/display/main/lotteon", inspected: "2026-07-13" }
    - { id: recent-products, kind: account-history, url: "https://www.lotteon.com/p/mylotte/recent/product", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.lotteon.com/p/display/main/lotteon", captured: "2026-07-13" }
    - { id: recent-products-live, kind: product-surface, url: "https://www.lotteon.com/p/mylotte/recent/product", captured: "2026-07-13" }
    - { id: corporate-profile, kind: official-doc, url: "https://www.lotte.co.kr/business/compDetail.do?compCd=L207", captured: "2026-07-14" }
    - { id: lotteon-story, kind: official-doc, url: "https://story.lotteon.com/", captured: "2026-07-14" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-14" }
  claims:
    "tokens.colors.canvas": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.field-border": *home_evidence
    "tokens.colors.foreground": *home_evidence
    "tokens.colors.hairline": *home_evidence
    "tokens.colors.muted": *home_evidence
    "tokens.colors.primary": *home_evidence
    "tokens.colors.secondary": *home_evidence
    "tokens.colors.tab-border": *home_evidence
    "tokens.components.home-image-tab.bg": *home_evidence
    "tokens.components.home-image-tab.border": *home_evidence
    "tokens.components.home-image-tab.fg": *home_evidence
    "tokens.components.home-image-tab.font": *home_evidence
    "tokens.components.home-image-tab.height": *home_evidence
    "tokens.components.home-image-tab.padding": *home_evidence
    "tokens.components.home-image-tab.radius": *home_evidence
    "tokens.components.home-image-tab.states": *home_evidence
    "tokens.components.home-image-tab.type": *home_evidence
    "tokens.components.home-image-tab.use": *home_evidence
    "tokens.components.product-card.bg": *home_evidence
    "tokens.components.product-card.fg": *home_evidence
    "tokens.components.product-card.font": *home_evidence
    "tokens.components.product-card.height": *home_evidence
    "tokens.components.product-card.padding": *home_evidence
    "tokens.components.product-card.radius": *home_evidence
    "tokens.components.product-card.type": *home_evidence
    "tokens.components.product-card.use": *home_evidence
    "tokens.components.recent-products-dropdown.bg": &recent_evidence { surface_id: recent-products, source_id: recent-products-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.recent-products-dropdown.border": *recent_evidence
    "tokens.components.recent-products-dropdown.fg": *recent_evidence
    "tokens.components.recent-products-dropdown.font": *recent_evidence
    "tokens.components.recent-products-dropdown.height": *recent_evidence
    "tokens.components.recent-products-dropdown.padding": *recent_evidence
    "tokens.components.recent-products-dropdown.radius": *recent_evidence
    "tokens.components.recent-products-dropdown.states": *recent_evidence
    "tokens.components.recent-products-dropdown.type": *recent_evidence
    "tokens.components.recent-products-dropdown.use": *recent_evidence
    "tokens.components.search-input.bg": *home_evidence
    "tokens.components.search-input.fg": *home_evidence
    "tokens.components.search-input.font": *home_evidence
    "tokens.components.search-input.height": *home_evidence
    "tokens.components.search-input.padding": *home_evidence
    "tokens.components.search-input.radius": *home_evidence
    "tokens.components.search-input.states": *home_evidence
    "tokens.components.search-input.type": *home_evidence
    "tokens.components.search-input.use": *home_evidence
    "tokens.rounded.pill": *home_evidence
    "tokens.rounded.square": *home_evidence
    "tokens.shadow.flat": *home_evidence
    "tokens.spacing.base": *home_evidence
    "tokens.spacing.md": *home_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.xs": *home_evidence
    "tokens.typography.body.lineHeight": *home_evidence
    "tokens.typography.body.size": *home_evidence
    "tokens.typography.body.use": *home_evidence
    "tokens.typography.body.weight": *home_evidence
    "tokens.typography.family.commerce": *home_evidence
    "tokens.typography.family.navigation": *home_evidence
    "tokens.typography.home-heading.lineHeight": *home_evidence
    "tokens.typography.home-heading.size": *home_evidence
    "tokens.typography.home-heading.use": *home_evidence
    "tokens.typography.home-heading.weight": *home_evidence
    "tokens.typography.tab-label.lineHeight": *home_evidence
    "tokens.typography.tab-label.size": *home_evidence
    "tokens.typography.tab-label.use": *home_evidence
    "tokens.typography.tab-label.weight": *home_evidence

tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Two public product surfaces; values are limited to measured computed styles. Pretendard and NotoSansKR were loaded; Avenuel Didot and Roboto Condensed were declared-only."
  colors:
    primary: "#000000"
    foreground: "#333333"
    canvas: "#ffffff"
    muted: "#757575"
    secondary: "#666666"
    hairline: "#e5e5e5"
    field-border: "#dddddd"
    tab-border: "#eeeeee"
  typography:
    family: { commerce: "Pretendard", navigation: "NotoSansKR" }
    home-heading: { size: 22, weight: 600, lineHeight: 1.27, use: "Observed home body-heading text" }
    body: { size: 14, weight: 500, lineHeight: 1.29, use: "Observed home commerce body text" }
    tab-label: { size: 16, weight: 500, lineHeight: 1.31, use: "Home image-tab label" }
  spacing: { xs: 2, sm: 4, md: 8, base: 16 }
  rounded: { square: 0, pill: 23 }
  shadow:
    flat: "none"
  components_harvested: true
  components:
    product-card: { type: card, bg: "transparent", fg: "#333333", radius: "0px", padding: "0px", height: "368px", font: "16px / 400", use: "Repeated home product-card container" }
    home-image-tab: { type: tab, bg: "#ffffff", fg: "#666666", border: "1px solid #eeeeee", radius: "23px", padding: "0px 16px 0px 4px", height: "46px", font: "16px / 500", states: "default and selected captured; no hover, focus, pressed, disabled, or error values captured", use: "Home image-tab control" }
    search-input: { type: input, bg: "transparent", fg: "#333333", radius: "0px", padding: "0px 28px 0px 0px", height: "30px", font: "16px / 400", states: "default captured; no hover, focus, pressed, disabled, or error values captured", use: "Home search field" }
    recent-products-dropdown: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #dddddd", radius: "0px", padding: "0px 38px 0px 16px", height: "32px", font: "13px / 400", states: "default captured; no hover, focus, pressed, disabled, or error values captured", use: "Recently viewed products dropdown trigger" }
---

# Design System Inspiration of 롯데ON

## 1. Visual Theme & Atmosphere

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

## 2. Color Palette & Roles

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

## 3. Typography Rules

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

## 4. Component Stylings

### Product Card

**Home product-card container**
- Type: card
- Background: transparent
- Text: `#333333`
- Radius: 0px
- Padding: 0px
- Height: 368px
- Font: 16px at weight 400
- Use: repeated home product-card container

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
- States: default and selected captured; no hover, focus, pressed, disabled, or error values captured
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
- States: default captured; no hover, focus, pressed, disabled, or error values captured
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
- States: default captured; no hover, focus, pressed, disabled, or error values captured
- Use: recently viewed products dropdown trigger

The supplied evidence contains 38 component variants across card, listItem, button, input, and tab classifications. Static default geometry is retained even where no interaction-specific values were observed; only unobserved interactive states are omitted.

---
**Verified:** 2026-07-14
**Tier 1 sources:** https://www.lotteon.com/p/display/main/lotteon ; https://www.lotteon.com/p/mylotte/recent/product
**Tier 2 sources:** https://getdesign.md/lotteon attempted on 2026-07-14; no accessible brand-specific result was returned by the search environment. https://styles.refero.design/?q=lotteon attempted on 2026-07-14; no accessible brand-specific result was returned by the search environment.
**Conflicts unresolved:** none

Tier 2 supplied no component or token value; all promoted visual values come from the supplied Tier 1 evidence bundle.

## 5. Layout Principles

The home surface combines a centered search field, horizontal category navigation, image-tab selection, and repeated product-card containers. The recent-products surface changes density: utility rows, list structures, tabs, and a 32px dropdown permit scanning a personal commerce history. Preserve this distinction rather than applying the large home product-card geometry to every commerce context.

Measured spacing samples recur at 2px, 4px, 8px, and 16px. They are observed values rather than an assertion of a complete mathematical scale. The home product-card contains a 220px-wide, 368px-tall outer container; its visual sub-area is 220px square, but that sub-area is not separately promoted as a component token.

## 6. Depth & Elevation

| Treatment | Captured use |
|---|---|
| Flat / no shadow | Page, product card, search field, tabs, and dropdown trigger |
| `1px solid #eeeeee` | Unselected home image tab |
| `1px solid #dddddd` | Recent-products dropdown trigger |
| `1px solid #e5e5e5` | Circular shopping-mall button |
| 23px radius | Home image-tab control |

The canonical shadow token is `none`. It reports the reusable box-shadow result in these two captures; it does not claim that overlays or uninspected transient product states have no elevation.

## 7. Do's and Don'ts

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

## 8. Responsive Behavior

The evidence bundle contains two desktop 1440px-wide product surfaces. It supports the measured component heights and list/card structure, not breakpoint rules or a mobile layout contract.

- Keep home product-card media and information grouping together when adapting width.
- Retain the 46px home tab and 30px search-input heights unless a measured responsive variant replaces them.
- Preserve the recent-products list hierarchy and its dropdown trigger as separate controls.
- Treat mobile columns, navigation collapse, touch-target expansion, sticky elements, tablet gutters, and image crop policy as `[FILL IN: controlled multi-viewport capture required]`.

## 9. Agent Prompt Guide

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

## 10. Voice & Tone

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

## 11. Brand Narrative

롯데 e-commerce의 공식 기업 소개에 따르면, 롯데닷컴은 1996년 국내 온라인 종합 쇼핑몰로 출발했고 롯데e커머스는 2018년 롯데쇼핑 사업부로 출범했다. 롯데ON은 2020년 4월 롯데의 통합 온라인 쇼핑 플랫폼으로 선보였으며, 계열사 상품과 오픈마켓 상품을 한 번에 검색하고 구매하는 범위를 갖는다.

현재의 표현은 단순한 상품 나열보다 발견의 경험을 강조한다. 공식 Story는 해외직구·뷰티·그로서리·선물하기 같은 영역과 오프라인 매장 연계를 설명하고, 공식 기업 소개는 뷰티·명품·패션·키즈 버티컬과 멤버십 혜택을 현재 확장 방향으로 제시한다. 이 reference의 제품 UI 관찰은 그 방향과 일치하는 넓은 홈 탐색과 더 조밀한 개인 목록을 보여 준다.

공개 자료가 확인하지 않은 창업자 인용, 로고의 의미, 상세 리브랜딩 연혁, 내부 브랜드 원칙은 추가하지 않는다. 이 문서가 보존하는 범위는 공식적으로 설명된 통합·발견·온오프라인 연결의 서비스 맥락과, 지정된 두 표면에서 측정된 제품 표현이다.

## 12. Principles

The following are official service directions paraphrased from first-party material, not an invented design manifesto.

1. **Make shopping discovery useful.** Official Story frames the service around discovering taste, brands, and benefits.
   *UI implication:* Make category, brand, benefit, and search affordances legible before adding decorative treatment.
2. **Connect online choice to offline retail strength.** Official sources describe the use of Lotte’s online know-how and offline infrastructure.
   *UI implication:* Keep a clear boundary between verified product information and any unmeasured fulfilment or store-integration pattern.
3. **Serve specialist shopping contexts.** The corporate profile identifies vertical areas including beauty, luxury, fashion, and kids.
   *UI implication:* Let surface density vary by task—for example, home discovery versus recent-product scanning—rather than imposing one card treatment.
4. **Support customers and participating brands.** Official material describes customer benefits and brand-oriented commerce support.
   *UI implication:* Treat customer-facing shopping controls and seller/brand operational flows as separate surfaces unless direct UI evidence links them.

## 13. Personas

These are service-role archetypes grounded in first-party service descriptions, not demographic personas or user-research findings.

1. **Integrated-shopper customer.** Searches and buys across Lotte affiliate and open-market assortment; the public service description explicitly frames this as one platform.
2. **Vertical-service shopper.** Explores beauty, luxury, fashion, or kids-focused shopping areas and related benefits described by the corporate profile.
3. **Participating brand or seller.** Uses the broader e-commerce offering to reach customers; the official profile describes brand-store and commerce-support services, but this capture does not validate its operational UI.

No age, income, motivation, task-success rate, or behavioral preference is inferred beyond those stated service roles.

## 14. States

| State | Verified treatment |
|---|---|
| Tab default | Home image tab: `#ffffff` background, `#666666` text, 1px `#eeeeee` border, 23px radius |
| Tab selected | Home image tab: `#000000` background, `#ffffff` text; three selected-state interactions captured |
| Search input default | Transparent background, `#333333` text, 30px height, 0px radius |
| Dropdown default | `#ffffff` background, `#333333` text, 1px `#dddddd` border, 32px height |
| Product card default | Transparent `#333333` information container, 0px radius, 368px height |
| Hover | `[FILL IN: no hover value captured]` |
| Focus | `[FILL IN: no focus value captured]` |
| Pressed | `[FILL IN: no pressed value captured]` |
| Disabled | `[FILL IN: no disabled value captured]` |
| Error | `[FILL IN: no error value captured]` |
| Empty | `[FILL IN: no empty-state capture]` |
| Loading | `[FILL IN: no loading-state capture]` |
| Success | `[FILL IN: no success-state capture]` |

The interaction count of three supports the selected tab state only. It does not justify filling interactive-state values for buttons, inputs, or other tabs.

## 15. Motion & Easing

`[FILL IN: no transition duration, easing curve, animation name, or reduced-motion behavior was present in the supplied evidence.]`

The evidence records static values and three tab selected-state interactions. Do not infer hover animation, carousel timing, modal transitions, skeleton motion, toast dismissal, or a generic ecommerce duration scale from this capture.

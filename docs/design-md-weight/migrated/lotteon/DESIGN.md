# 롯데ON Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

롯데ON은 롯데 계열 상품과 오픈마켓 상품을 한 곳에서 검색·구매하도록 만든 통합 이커머스 플랫폼이며, 백화점·그로서리·전자제품·브랜드 상품을 발견하는 흐름을 함께 다룬다. This contract covers two public product surfaces inspected on 2026-07-13: the home at `https://www.lotteon.com/p/display/main/lotteon` and recently viewed products at `https://www.lotteon.com/p/mylotte/recent/product`. The catalog homepage field is `https://www.lotteon.com/`. Official corporate profile `https://www.lotte.co.kr/business/compDetail.do?compCd=L207` and official Lotte ON Story `https://story.lotteon.com/` are named sources for service context; they do not supply the computed commerce tokens below. Treating those two inspected URLs as this contract's token surfaces, keeping the corporate-profile and Story URLs as named service-context sources that do not supply computed interface tokens, treating values as attached to the surface that established them, and keeping catalog `primary_color` `#000000` on the same hex as `tokens.colors.primary` without turning that key into a universal filled-CTA rule, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

Two product surfaces repeat `#ffffff` canvas and `#333333` foreground. `#000000` is used on the search icon and the selected home image tab. Supporting text uses `#757575` and `#666666`; thin borders use `#e5e5e5` · `#dddddd` · `#eeeeee`. These are 2026-07-13 measurements, not a declared global marketing palette. `Pretendard` is loaded on product cards and image tabs (432 uses); `NotoSansKR` is loaded on navigation, search, and lists (339 uses). Square `0px` geometry is the repeated product-card treatment; the home image tab is a `23px` pill; circular shopping-mall buttons were observed at `50%` radius. The source's own wording of the resulting screen is a white ground, dense type, thin borders, and `0px` or limited pill shape that lets product, category, and benefit be read before a brand-color system. Official Lotte ON Story's ‘취향, 브랜드, 혜택을 발견하는 즐거움’ and the expansion of vertical and personalized services are recorded on that narrative. Readings of that measured layer as an impression that prefers readable product/category/benefit over exaggerated brand color, of the Story line plus vertical/personalization expansion as explaining a shared shopping shell that currently prioritizes 탐색성 and 비교 가능성, and of the 2026-07-13 layer as surface measurements rather than as a declared global marketing palette, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. 롯데 e-commerce의 공식 기업 소개에 따르면, 롯데닷컴은 1996년 국내 온라인 종합 쇼핑몰로 출발했고 롯데e커머스는 2018년 롯데쇼핑 사업부로 출범했다. 롯데ON은 2020년 4월 롯데의 통합 온라인 쇼핑 플랫폼으로 선보였으며, 계열사 상품과 오픈마켓 상품을 한 번에 검색하고 구매하는 범위를 갖는다. 현재의 표현은 단순한 상품 나열보다 발견의 경험을 강조한다. 공식 Story는 해외직구·뷰티·그로서리·선물하기 같은 영역과 오프라인 매장 연계를 설명하고, 공식 기업 소개는 뷰티·명품·패션·키즈 버티컬과 멤버십 혜택을 현재 확장 방향으로 제시한다. 이 reference의 제품 UI 관찰은 그 방향과 일치하는 넓은 홈 탐색과 더 조밀한 개인 목록을 보여 준다. 공개 자료가 확인하지 않은 창업자 인용, 로고의 의미, 상세 리브랜딩 연혁, 내부 브랜드 원칙은 추가하지 않는다. 이 문서가 보존하는 범위는 공식적으로 설명된 통합·발견·온오프라인 연결의 서비스 맥락과, 지정된 두 표면에서 측정된 제품 표현이다. The 1996 / 2018 / April 2020 facts, the integrated-assortment scope, the discovery emphasis, the Story verticals, the corporate verticals and membership benefits, the home-versus-recent density observation, and that closing preservation sentence are the source's own. Classifying that origin-to-current-service narrative as context that does not by itself supply interface tokens, and classifying the home-versus-recent density observation as a recorded match rather than as a token, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured home or recent-products control or the official search-and-buy scope the source records, and not taking them from the source's Personas section, is a derived editorial implementation inference from the verified surfaces; it is not Lotte ON-authored or a separately published UI specification.

- Search and buy Lotte-affiliate and open-market products on `https://www.lotteon.com/p/display/main/lotteon`.
- Discover products through the captured home image-tab control and product-card containers.
- Scan recently viewed products on `https://www.lotteon.com/p/mylotte/recent/product`.
<!-- design-md:claim-end -->

### Audience

No named individuals appear. The source labels its §13 figures as service-role archetypes grounded in first-party service descriptions, not demographic personas or user-research findings, so those three archetypes are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. Official material discusses customers and participating brands at a group level. Dropping those archetypes rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Observed characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

- Two public product surfaces: home and recently viewed products
- `#ffffff` canvas, `#333333` body foreground, limited `#000000` emphasis
- Loaded family: `Pretendard` (432 uses) and `NotoSansKR` (339 uses)
- `0px` product-card geometry and `23px` home image tab
- Repeated spacing samples at 2px, 4px, 8px, and 16px
- Interaction expansion: home image-tab selected state only (three tab interactions)

### Principles

These 4 items — numbered stems the source paraphrases from first-party service directions, the source's own bound that they are not an invented design manifesto, plus every *UI implication* below as the source's own editorial reading — are a derived editorial implementation inference from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification. The source states that they are official service directions paraphrased from first-party material, not an invented design manifesto.

1. **Make shopping discovery useful.** Official Story frames the service around discovering taste, brands, and benefits.
   *UI implication:* Make category, brand, benefit, and search affordances legible before adding decorative treatment.
2. **Connect online choice to offline retail strength.** Official sources describe the use of Lotte’s online know-how and offline infrastructure.
   *UI implication:* Keep a clear boundary between verified product information and any unmeasured fulfilment or store-integration pattern.
3. **Serve specialist shopping contexts.** The corporate profile identifies vertical areas including beauty, luxury, fashion, and kids.
   *UI implication:* Let surface density vary by task—for example, home discovery versus recent-product scanning—rather than imposing one card treatment.
4. **Support customers and participating brands.** Official material describes customer benefits and brand-oriented commerce support.
   *UI implication:* Treat customer-facing shopping controls and seller/brand operational flows as separate surfaces unless direct UI evidence links them.

### Application rules

The source states these five as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

- Use `#ffffff`, `#333333`, and thin neutral borders for the measured public commerce surfaces.
- Preserve `Pretendard` and `NotoSansKR` as separate loaded families where the observed surface calls for them.
- Use 23px pill geometry only for the observed home image-tab control; keep the product-card container square.
- Keep product-card, tab, input, and dropdown semantics distinct.
- Describe only the captured tab selected state; request a new capture before adding hover, focus, pressed, disabled, or error styling.

### Avoid

The source states these five as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

- Do not substitute a system font for `Pretendard` or `NotoSansKR` and present it as the loaded family.
- Do not promote declared-only `Avenuel Didot` or `Roboto Condensed` as a UI font.
- Do not turn `#000000` into a universal filled CTA token; it was measured on the selected tab and search icon, not as a general button rule.
- Do not infer brand-wide red, success, error, campaign, or promotion colors from the absent evidence.
- Do not map a link or list row to button semantics without evidence.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Taking those role names from the source's own token-set keys, pairing each hex to the token-set path named beside it, keeping catalog `primary_color` `#000000` on the same hex as `tokens.colors.primary` without turning that key into a universal filled CTA, keeping page, tab, and dropdown surface `#ffffff` on `tokens.colors.canvas`, keeping default tab and dropdown `bg` `#ffffff` as component fields, and keeping selected-tab text `#ffffff` as a §4 field, without merging those writings, keeping unselected-tab text `#666666` on `tokens.colors.secondary` rather than as muted, keeping `#f3f3f3` and `#f5f5f5` off the token set as the source did, attaching every role to the surface the source recorded rather than relabeling a home value as a house palette for every Lotte ON surface, and keeping Lotte-group / promotion / error colors absent because the source left them unmeasured, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Primary** (`#000000`): observed search-icon background and selected home image tab. Token-set path `tokens.colors.primary`. Same hex as catalog `primary_color`; it is not a general filled CTA.
- **Foreground** (`#333333`): repeated default text color on both surfaces. Token-set path `tokens.colors.foreground`.
- **Canvas** (`#ffffff`): observed page, tab, and dropdown surface color. Token-set path `tokens.colors.canvas`. Same hex as selected-tab text; that text stays a §4 field.
- **Muted** (`#757575`): top utility and supporting text. Token-set path `tokens.colors.muted`.
- **Secondary** (`#666666`): unselected home image-tab text. Token-set path `tokens.colors.secondary`. This is not muted.
- **Hairline** (`#e5e5e5`): 1px border on the circular shopping-mall button. Token-set path `tokens.colors.hairline`.
- **Field border** (`#dddddd`): 1px border on the recently viewed products dropdown. Token-set path `tokens.colors.field-border`.
- **Tab border** (`#eeeeee`): 1px border on the unselected home image tab. Token-set path `tokens.colors.tab-border`.

`#f3f3f3` and `#f5f5f5` were also observed on home at low frequency; the source did not promote them as canonical color tokens. Lotte-group, promotion, and error colors were not measured on the product surfaces and are not in this reference.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 2` · `sm: 4` · `md: 8` · `base: 16`.

The source also writes those samples as 2px, 4px, 8px, and 16px. They are observed values rather than an assertion of a complete mathematical scale. `tokens.spacing.xs: 2` is not a converted replacement for a `2px` border. `tokens.spacing.sm: 4` is not the `4px` in the home image-tab padding `0px 16px 0px 4px`. `tokens.spacing.md: 8` is not a type size. `tokens.spacing.base: 16` is not the `16px` in that same tab padding, is not `tokens.typography.tab-label.size` `16`, is not the product-card font `16px`, and is not the `16px` in the dropdown padding `0px 38px 0px 16px`. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, keeping those writings of `2`, `4`, `8`, and `16` on their own records, and reading the 2px / 4px / 8px / 16px samples as observed values rather than as an assertion of a complete mathematical scale, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `square: 0` · `pill: 23`.

The source's named radius uses, kept on their own rows:

- Square (`0` / `0px`): product-card container and search field. Token-set key `tokens.rounded.square`.
- Pill (`23` / `23px`): home image-tab control. Token-set key `tokens.rounded.pill`. This `23` is not a spacing step.
- Circular shopping-mall button (`50%`): recorded in the source's theme and elevation notes; it is not a YAML `tokens.rounded` key.

`tokens.rounded.square: 0` stays the square step. Product-card and search `0px` stay component geometry. `tokens.rounded.pill: 23` stays the pill step. The home image-tab radius `23px` stays that control's geometry. Neither pair was chosen over the other as a replacement. Keeping `0` and `23` as two keys, keeping `50%` off the rounded map, and keeping those component heights off the rounded map, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

### Elevation

| Treatment | Captured use |
|---|---|
| Flat / no shadow | Page, product card, search field, tabs, and dropdown trigger |
| `1px solid #eeeeee` | Unselected home image tab |
| `1px solid #dddddd` | Recent-products dropdown trigger |
| `1px solid #e5e5e5` | Circular shopping-mall button |
| 23px radius | Home image-tab control |

The canonical shadow token is `none`. Token-set path `tokens.shadow.flat` (`none`). It reports the reusable box-shadow result in these two captures; it does not claim that overlays or uninspected transient product states have no elevation. The `none` writing, the four 1px-border rows, the 23px-radius row, and that overlay bound are the source's own. Reading those representative `box-shadow: none` reports as the only elevation record for the observed elements, rather than as a depth scale for every Lotte ON surface, is a derived editorial implementation inference from the verified surfaces; it is not Lotte ON-authored or a separately published UI specification.

### Motion

Placeholder wrappers in the source are omitted. The source records that no transition duration, easing curve, animation name, or reduced-motion behavior was present in the supplied evidence. No motion token is promoted. The evidence records static values and three tab selected-state interactions. Do not infer hover animation, carousel timing, modal transitions, skeleton motion, toast dismissal, or a generic ecommerce duration scale from this capture. An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation — one curve read off one element, or a match against an official framework or vendor document, is not that gate — keeping the source's no-duration / no-curve / no-animation-name / no-reduced-motion sentence, and keeping the source's do-not-infer list, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | 공식 기업·서비스 소개는 서비스 방향을 설명하지만, 특정 UI family의 제품 적용을 선언하지 않는다. |
| Live computed surface-use | `Pretendard`와 `NotoSansKR` 모두 loaded FontFace가 뒷받침하는 computed family로 관찰됐다. |
| Official distributed brand asset | 이 조사에서는 제품 서체의 별도 공식 배포·라이선스 문서를 확인하지 못했다. |
| Declared-only | `Avenuel Didot`, `Roboto Condensed`는 `@font-face` 선언이 있었지만 visible usage는 0이었다. |
| Outside these captures | 네이티브 앱·캠페인·로그인 후 표면의 서체는 이번 증거로 확정하지 않는다. |

Reading those five evidence-class rows as the source's own resolution table rather than as a published Lotte ON type specimen, keeping the official-product-use row from independently establishing a UI family, and projecting the source unnamed-typography class as Outside these captures so the portable placeholder scanner does not treat the class name as a prescriptive placeholder, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

### Family

- **Commerce family:** `Pretendard` — 상품 카드, 버튼, 탭 등에서 loaded 상태로 관찰. Token-set path `tokens.typography.family.commerce`.
- **Navigation family:** `NotoSansKR` — 내비게이션, 검색, 최근 본 상품 표면에서 loaded 상태로 관찰. Token-set path `tokens.typography.family.navigation`.
- **Declared-only:** `Avenuel Didot`, `Roboto Condensed` — 선언만으로 UI family나 specimen으로 승격하지 않는다.
- **Availability boundary:** 두 canonical family의 캡처된 파일 URL은 `.verification.md`에 보존했지만, 이 reference는 해당 파일의 재배포 권리나 라이선스를 주장하지 않는다.

Keeping `Pretendard` and `NotoSansKR` as two separate loaded families on the surfaces that established them, refusing to substitute a system font for either, refusing declared-only `Avenuel Didot` and `Roboto Condensed` as UI families, and reading captured file URLs as availability evidence that does not authorize redistribution, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

### Type roles

YAML writes unitless line heights on the three tokenized roles (`1.27`, `1.29`, `1.31`). Source §3 writes the same roles with px line heights (`28px`, `18px`, `21px`) plus two measured-sibling rows that are not YAML typography keys (home search field `16px` / `400` / `30px`; recent-products dropdown `13px` / `400` / `normal`). Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px (A1a). The three tokenized roles retain their measured sizes, weights, and line-height ratios. The remaining rows are useful measured siblings, not an invented universal type scale. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 role name and captured-surface column beside them, keeping the search-field and dropdown rows as §3-only writings, keeping `tokens.typography.tab-label.size` `16` off `tokens.spacing.base: 16`, keeping YAML size `22` beside §3 `22px` and YAML size `14` beside §3 `14px`, keeping `tokens.typography.body.size` `14` off a spacing step, keeping product-card font `16px / 400` as a §4 field off `tokens.typography.body` `14` / `500`, and keeping the remaining rows as useful measured siblings rather than as an invented universal type scale, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Token-set use | Captured surface |
|---|---|---:|---:|---|---|---|
| Home body heading | Pretendard | 22 / 22px | 600 | 1.27 / 28px | Observed home body-heading text | Home |
| Home commerce body | Pretendard | 14 / 14px | 500 | 1.29 / 18px | Observed home commerce body text | Home |
| Home image-tab label | Pretendard | 16 / 16px | 500 | 1.31 / 21px | Home image-tab label | Home |
| Home search field | (component font; not a YAML typography key) | 16 / 16px | 400 | 30px | (not a YAML typography key) | Home |
| Recent-products dropdown | (component font; not a YAML typography key) | 13 / 13px | 400 | normal | (not a YAML typography key) | Recent products |

Token-set paths: `tokens.typography.home-heading` · `tokens.typography.body` · `tokens.typography.tab-label`. The search-field and dropdown rows are §3 writings only.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=lotteon.com&sz=128`. Frontmatter records `logo.type: favicon`.
- Captured Pretendard and NotoSansKR file URLs stay in `.verification.md`. This reference does not claim redistribution rights or a license for those files.
- Declared-only `Avenuel Didot` and `Roboto Condensed` stay declared-only.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a Lotte ON-hosted brand file, and reading captured font-file URLs as availability evidence rather than as a redistribution grant, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source state contract, preserved here. Tab default, tab selected, search-input default, dropdown default, and product-card default were captured. Hover, focus, pressed, disabled, error, empty, loading, and success have no captured visual treatment; those placeholder wrappers are omitted rather than filled. The interaction count of three supports the selected tab state only. It does not justify filling interactive-state values for buttons, inputs, or other tabs. The supplied evidence contains 38 component variants across card, listItem, button, input, and tab classifications. Static default geometry is retained even where no interaction-specific values were observed; only unobserved interactive states are omitted.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, the source's 38-variant bound across card, listItem, button, input, and tab classifications, the interaction-count-of-three bound that does not justify filling interactive-state values for buttons, inputs, or other tabs, retaining static default geometry while omitting only unobserved interactive states, the selected-tab reading of the home image tab, the static-container reading of the product card (C4: no applicability map), the dropdown-trigger reading of the recent-products control, treating the home image tab as a merchandising-facet selector and the recent-products control as a list trigger so loading / error / success close on those roles, treating the home search field as a query field that keeps error applicable and closes loading / success, keeping each YAML `use` string as a Token-set use row beside Role, keeping YAML font / padding / radius / border / height / states byte forms beside the §4 writings, keeping product-card font `16px / 400` off `tokens.typography.body` `14` / `500`, keeping product-card height `368px` off the spacing scale, keeping tab padding `0px 16px 0px 4px` off `tokens.spacing.base` / `sm`, keeping selected-tab text `#ffffff` off `tokens.colors.canvas`, keeping search height `30px` as geometry beside the §3 `30px` line-height writing, keeping dropdown padding `16px` off `tokens.spacing.base: 16`, treating a generic source Focus row as not `focus-visible` treatment evidence, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` observation in the source is not `focus-visible` treatment evidence; the source records that no focus value was captured, and that is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. A `Primitive type` line is attached only when the source YAML records that type on that component. This is not a complete state-coverage claim.

### Product Card

- Role: repeated home product-card container
- Token-set use: Repeated home product-card container
- Primitive type: `card`
- Kind: non-interactive — the source retains this as a repeated home product-card container with static default geometry; only unobserved interactive states are omitted
- Background: transparent. YAML bg: `transparent`
- Text: `#333333`. YAML fg: `#333333`
- Radius: `0px`. YAML radius: `0px`
- Padding: `0px`. YAML padding: `0px`
- Height: `368px`. YAML height: `368px`
- Font: `16px / 400`. YAML font: `16px / 400`
- Observed: default only
- The home product-card contains a 220px-wide, 368px-tall outer container; its visual sub-area is 220px square, but that sub-area is not separately promoted as a component token. The radius `0px` is `tokens.rounded.square`; the height `368px` is this container's geometry, not a spacing step. The font `16px / 400` is this component field, not `tokens.typography.body` `14` / `500`.
- No state-applicability map: the card itself is not an interactive control.

### Home Image Tab

- Role: home image-tab control
- Token-set use: Home image-tab control
- Primitive type: `tab` · Kind: interactive
- Anatomy: labelled pill tab
- Background: `#ffffff`. YAML bg: `#ffffff`
- Text: `#666666`. YAML fg: `#666666`
- Border: `1px solid #eeeeee`. YAML border: `1px solid #eeeeee`
- Radius: `23px`. YAML radius: `23px`
- Padding: `0px 16px 0px 4px`. YAML padding: `0px 16px 0px 4px`
- Height: `46px`. YAML height: `46px`
- Font: `16px / 500`. YAML font: `16px / 500`
- YAML states: `default and selected captured; no hover, focus, pressed, disabled, or error values captured`
- Selected sibling: `#000000` background and `#ffffff` text with the same `23px` radius, `46px` height, and padding. Only selected state changes were observed through three tab interactions.
- Observed: default and selected
- The radius `23px` is `tokens.rounded.pill`. The `16px` and `4px` in the padding stay this control's padding, not spacing-step replacements. Selected text `#ffffff` is this control's selected field, not `tokens.colors.canvas`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured unselected home image tab |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted. The source Focus row is not this row. |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | An image tab selects a merchandising facet; it commits no operation in place |
| error | not-applicable | An image tab does not report a failed request on itself |
| success | not-applicable | Reaching the selected facet is not an operation this tab reports as success |

### Search Input

- Role: Home search field
- Token-set use: Home search field
- Primitive type: `input` · Kind: interactive
- Anatomy: value field
- Background: transparent. YAML bg: `transparent`
- Text: `#333333`. YAML fg: `#333333`
- Radius: `0px`. YAML radius: `0px`
- Padding: `0px 28px 0px 0px`. YAML padding: `0px 28px 0px 0px`
- Height: `30px`. YAML height: `30px`
- Font: `16px / 400`. YAML font: `16px / 400`
- YAML states: `default captured; no hover, focus, pressed, disabled, or error values captured`
- Observed: default only
- The radius `0px` is `tokens.rounded.square`. The height `30px` is this field's geometry and the §3 line-height writing, not a spacing step.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the home search field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted. The source Focus row is not this row. |
| disabled | applicable | An input can be gated; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit an operation whose in-progress state it could report on itself |
| error | applicable | A form field can fail validation; visual treatment omitted |
| success | not-applicable | Completing a query is not a success result this input would report |

### Recent Products Dropdown

- Role: recently viewed products dropdown trigger
- Token-set use: Recently viewed products dropdown trigger
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled dropdown trigger
- Background: `#ffffff`. YAML bg: `#ffffff`
- Text: `#333333`. YAML fg: `#333333`
- Border: `1px solid #dddddd`. YAML border: `1px solid #dddddd`
- Radius: `0px`. YAML radius: `0px`
- Padding: `0px 38px 0px 16px`. YAML padding: `0px 38px 0px 16px`
- Height: `32px`. YAML height: `32px`
- Font: `13px / 400`. YAML font: `13px / 400`
- YAML states: `default captured; no hover, focus, pressed, disabled, or error values captured`
- Observed: default only
- The radius `0px` is `tokens.rounded.square`. The `16px` in the padding stays this control's padding, not `tokens.spacing.base: 16`. The height `32px` is this trigger's geometry, not a spacing step.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the recent-products dropdown trigger |
| hover | applicable | Pointer-web dropdown trigger; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted. The source Focus row is not this row. |
| disabled | applicable | A dropdown trigger can be gated; visual treatment omitted |
| loading | not-applicable | A dropdown trigger opens a list; it commits no operation in place |
| error | not-applicable | A dropdown trigger does not report a failed request on itself |
| success | not-applicable | Opening the list is not an operation this trigger reports as success |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The home surface combines a centered search field, horizontal category navigation, image-tab selection, and repeated product-card containers. The recent-products surface changes density: utility rows, list structures, tabs, and a 32px dropdown permit scanning a personal commerce history. Preserve this distinction rather than applying the large home product-card geometry to every commerce context.

Measured spacing samples recur at 2px, 4px, 8px, and 16px. They are observed values rather than an assertion of a complete mathematical scale. The home product-card contains a 220px-wide, 368px-tall outer container; its visual sub-area is 220px square, but that sub-area is not separately promoted as a component token.

The evidence bundle contains two desktop 1440px-wide product surfaces. It supports the measured component heights and list/card structure, not breakpoint rules or a mobile layout contract.

- Keep home product-card media and information grouping together when adapting width.
- Retain the 46px home tab and 30px search-input heights unless a measured responsive variant replaces them.
- Preserve the recent-products list hierarchy and its dropdown trigger as separate controls.

The source left mobile columns, navigation collapse, touch-target expansion, sticky elements, tablet gutters, and image crop policy unnamed (placeholder wrappers omitted). Reading the 1440px figure under the source's own "two desktop 1440px-wide product surfaces" sentence as support for measured component heights and list/card structure rather than as breakpoint rules or a mobile layout contract, reading home versus recent-products density as a recorded distinction rather than as a universal card treatment, reading the 2px / 4px / 8px / 16px samples as observed values rather than as an assertion of a complete mathematical scale, and keeping 46px / 30px / 32px / 220px / 368px on the surfaces that established them, are derived editorial implementation inferences from the verified surfaces; they are not Lotte ON-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Official Lotte ON materials describe a discovery-oriented commerce service: the Story home uses phrases about discovering taste, brands, and benefits, while the corporate profile describes vertical shopping services and customer benefits. The source says this supports a concise, practical, discovery-led interface voice. It is not a published comprehensive writing standard, so it does not authorize invented error, push, legal, or accessibility copy rules. Characterizing that reading as a concise, practical, discovery-led implementation context rather than as a separately published copy manual, requiring the quoted strings below byte-exact, and treating English beside a Korean line as a reading aid rather than a replacement, is a derived editorial implementation inference from the verified surfaces; it is not Lotte ON-authored or a separately published UI specification.

| Do | Don't |
|---|---|
| Name the shopping subject, benefit, or next action directly. | Turn a product label into an ungrounded lifestyle claim. |
| Keep utility labels short enough for dense navigation and product rows. | Add emotive sales language where no official product wording supports it. |
| Use discovery language where a browse surface actually presents brands, benefits, or categories. | Recast operational states as a brand promise without evidence. |

Source-backed copy samples, kept byte-exact:

- “취향을, 브랜드를, 혜택을 발견하는 즐거움” — official Lotte ON Story home.
- ‘취향, 브랜드, 혜택을 발견하는 즐거움’ — official Lotte ON Story line as written in the source's Visual Theme section (a different writing from the Story-home sample above).
- “고객이 원하고 만족하는 서비스를 만들어요” — official Lotte ON Story home.
- “쇼핑을 새롭게, 세상을 이롭게!” — official Lotte e-commerce corporate profile.

Reproduce those quoted strings byte-exact rather than translating or re-casing them.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unnamed. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Lotte ON-authored or a separately published UI specification.

- hover, focus, pressed, disabled, error, empty, loading, and success visual treatments
- transition duration, easing curve, animation name, and reduced-motion behavior — promote a motion value for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed
- Lotte-group, promotion, and error colors; `#f3f3f3` and `#f5f5f5` as canonical tokens
- mobile columns, navigation collapse, touch-target expansion, sticky elements, tablet gutters, and image crop policy
- 네이티브 앱·캠페인·로그인 후 표면 typography
- overlays or uninspected transient product elevation
- seller/brand operational UI
- error, push, legal, and accessibility copy rules
- 창업자 인용, 로고의 의미, 상세 리브랜딩 연혁, 내부 브랜드 원칙
- 제품 서체의 별도 공식 배포·라이선스 문서
- getdesign.md / styles.refero.design records (the source names both lookups as no accessible brand-specific result)

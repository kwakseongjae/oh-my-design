# MEGABOX Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

MEGABOX (메가박스)는 영화 상영을 중심에 두면서도 사람들이 이야기를 만나고, 함께 놀고, 경험을 공유하는 공간을 표방하는 한국의 멀티플렉스 브랜드다. Catalog homepage is `https://www.megabox.co.kr/`. Catalog `primary_color` is `#503396`. This contract covers three supplied public-product-web captures from 2026-07-13: home `https://www.megabox.co.kr/`, `https://www.megabox.co.kr/movie`, and `https://www.megabox.co.kr/booking`, each recorded at a `1440×900` desktop viewport. YAML token note, kept as the source wrote it: Machine tokens are limited to selector-backed public-web values in the supplied three-surface capture. Company, font-asset, and licence sources provide narrative or asset context only unless a claim explicitly cites a product surface.

Treating those three URLs as this contract’s token surfaces, keeping company / font-asset / licence sources as narrative or asset context unless a claim cites a product surface, keeping catalog `primary_color` `#503396` on the same hex as `tokens.colors.primary` without turning that key into a universal filled-CTA rule, and reading the captured layer as 세 개의 데스크톱 공개 웹 경로에 대한 관찰이지 극장 현장, 모바일 앱, 로그인 후 예매 경험의 일반 규칙은 아니다, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

회사의 공식 연혁은 2000년 코엑스점을 출발점으로 삼고, 2011년 씨너스와의 합병을 거쳐 더 좋은 영화관을 향한 확장을 설명한다. 현재의 브랜드 표현은 2017년에 공개한 Life Theater BI에서 분명해진다. 일곱 개의 황금비율 박스와 보라 계열 인디고는 공간과 창의적 콘텐츠를 연결하는 공식 설명이다. 반면 공급된 공개 웹 캡처는 그 이야기를 좁은 범위에서만 구현한다. `#444444`의 실무적 본문, 흰 바탕, 영화 목록의 보라 액션과 얇은 회색 경계가 공존하며, 이것은 세 개의 데스크톱 공개 웹 경로에 대한 관찰이지 극장 현장, 모바일 앱, 로그인 후 예매 경험의 일반 규칙은 아니다. Calling the 2017 Life Theater BI the current brand expression, calling the seven golden-ratio boxes and purple-series indigo the official explanation that connects space and creative content, and reading the public-web capture as implementing that story only in a narrow range (`#444444`의 실무적 본문, 흰 바탕, 영화 목록의 보라 액션과 얇은 회색 경계가 공존하며), are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification. The 2000 코엑스점, 2011 씨너스 합병, 2017 Life Theater, 일곱 개의 황금비율 박스, and 보라 계열 인디고 facts are the source’s record of official material.

Brand narrative recorded by the source, kept as narrative context. Megabox’s official company history places its public origin at the 2000 opening of its COEX site, followed by the 2011 Megabox–Cinus merger. The company describes that history as an effort to keep building a better cinema while carrying forward novelty and diversity in a shared entertainment space. In 2017, the official introduction says the brand introduced a new BI and the Life Theater slogan. Its seven golden-ratio boxes, English Megabox type treatment, and purple-indigo expression are presented as a more flexible, extensible identity for spaces filled with creative content. That is the documented evolution used here; no later rebrand or unverified visual-system claim is added. The stated mission is to create shareable spatial experiences and to deliver happy everyday life through valuable content and varied space-based experiences. This is company narrative, not proof of any product CSS value or booking-flow behavior. Classifying that 2000–2017 Life Theater narrative and the stated mission as company narrative that does not by itself supply interface tokens, is a derived editorial implementation inference from the verified surfaces; it is not Megabox-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product’s primary tasks, each naming captured public-web work on home, `/movie`, or `/booking` rather than lifting source §13 stakeholder groups into this list, is a derived editorial implementation inference from the verified surfaces; it is not Megabox-authored or a separately published UI specification.

- Discover films on the public movie listing at `https://www.megabox.co.kr/movie` (YAML use: Movie route list action at `surface-2::[data-omd-capture="29"]`).
- Use the home 극장 찾기 control as public theater lookup on `https://www.megabox.co.kr/`.
- Enter the public booking route at `https://www.megabox.co.kr/booking` (public booking-entry typography and shared header only; not a completed booking or payment flow).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels these as stakeholder groups stated or directly implied by Megabox’s official service and mission material, not synthetic research personas. Use those groups only, with the capture bounds the source already wrote. Reading the three groups as this product’s audience, keeping them out of `primary-tasks`, and carrying no name, age, city, or biography, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

- **Cinema visitor:** a person using the public service to discover films, theaters, showtimes, and related benefits. The supplied capture supports only public-web browsing context, not their booked or logged-in journey.
- **Member:** a service participant for whom Megabox describes membership, points, tickets, and benefits. No member dashboard or benefit-control styling was captured here.
- **Employee or candidate:** a stakeholder addressed through the official recruiting material’s customer orientation, challenge, and communication values. This is culture context, not product-interface evidence.

### Distinctive traits

The list restates the source’s Key characteristics. The values are recorded; classifying the list as that restatement, the atmosphere readings inside it (조용한 정보 밀도, 서로 다른 밀도의 형태), and carrying the source’s `interactionCount: 0` / default-enabled movie-list `button` bound as a capture bound on this list rather than as a fifth Key characteristic from §1, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

- 공식 BI의 보라 계열 인디고 맥락과, 영화 목록에서 관찰된 `#503396` 액션
- `#444444` 본문 잉크와 `#666666` 보조 텍스트의 조용한 정보 밀도
- 네모난 4px 목록 제어와 30px 극장 찾기 칩이 함께 쓰이는 서로 다른 밀도의 형태
- 반복 로드된 NanumBarunGothic 기반의 공개 웹 타이포그래피
- `interactionCount: 0`; default enabled movie-list `button` only; no hover, focus, pressed, or error styling is claimed for that control

### Principles

These 3 items — numbered stems the source records from Megabox’s official core values (Empathy / 공감, Creation / 창조, Fun / 재미), plus every *UI implication* below as the source’s own editorial reading — are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification. Megabox publishes no first-party design-system documentation in the source, so the toss-form close is used (the official introduction and recruiting pages are company narrative and culture context, not a UI specification). The value names 공감, 창조, and 재미 are the source’s record of official material.

1. **Empathy / 공감** — understand and consider people.
   *UI implication:* Make public information legible before adding promotional density; no focus or error treatment is implied by this principle.
2. **Creation / 창조** — approach everyday life with challenge and passion.
   *UI implication:* Use content discovery as a reason for visual variety, while keeping unsupported component variants absent.
3. **Fun / 재미** — let the experience itself feel enjoyable.
   *UI implication:* Keep cinema discovery inviting without converting the company value into a measured animation or color rule.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

- Keep the official purple/indigo brand story separate from the narrower selector-backed public-web color claims.
- Preserve the distinction between an observed HTML button and visually button-like links whose semantics were not captured.
- Use the loaded NanumBarunGothic family where the public-web scope is relevant; label unsupported contexts instead of substituting another font as Megabox typography.

### Avoid

The source states these as its Don’t list, plus the Accessibility bound that implementations need explicit accessible states rather than extrapolating them from the observed defaults. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

- Convert poster links, booking links, or rows into generic buttons without evidence of button semantics.
- Infer hover, focus, pressed, dialog, seat-selection, payment, or responsive states from default geometry.
- Treat Roboto or text-security-disc as a Megabox brand-family replacement.
- Extrapolate keyboard, focus-visible, error, modal, or assistive-technology behavior from the observed defaults.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source’s token-set keys. Taking those role names from the token-set keys, pairing each hex to the path named beside it, keeping catalog `primary_color` `#503396` on the same hex as `tokens.colors.primary` without turning that key into 공개 웹 전체의 단일 CTA 규칙, keeping canvas `#ffffff` unmerged from `tokens.colors.on-primary` `#ffffff` and from the movie-list action Background `#FFFFFF`, keeping YAML `tokens.components.movie-like-button.bg` `#ffffff` beside that source-body Background `#FFFFFF` rather than collapsing the two writings, and reading `#503396` as 공식 회사 소개가 설명하는 보라 계열 인디고와 같은 맥락이지만 그 공식 설명이 CSS hex를 공급하지는 않는다, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification. The hex values and recorded uses are the source’s own.

- **Primary** (`#503396`): `/movie`의 보라 예약 링크와 영화 목록 좋아요 버튼 텍스트에서 관찰된 색. Token-set path `tokens.colors.primary`. Same hex as catalog `primary_color`. 공식 회사 소개가 설명하는 보라 계열 인디고와 같은 맥락이지만, 공개 웹 전체의 단일 CTA 규칙으로 일반화하지 않는다.
- **Canvas** (`#ffffff`): 영화 목록 항목과 좋아요 버튼의 관찰된 흰 배경. Token-set path `tokens.colors.canvas`. YAML writes `#ffffff`; the movie-list action Background is written `#FFFFFF` as a component field and is not this role.
- **On-primary** (`#ffffff`): 보라 예약 링크의 텍스트. Token-set path `tokens.colors.on-primary`. Same hex as canvas; named jobs stay unmerged.
- **Foreground** (`#444444`): 세 공개 경로에 걸쳐 반복 관찰된 본문 잉크. Token-set path `tokens.colors.foreground`.
- **Muted** (`#666666`): 극장 찾기 제어 및 일부 보조 텍스트에 관찰된 보조 잉크. Token-set path `tokens.colors.muted`.

The movie-list action border `1px solid #EBEBEB` stays a component field, not a general Ink or Line token. Keeping YAML `tokens.components.movie-like-button.border` `1px solid #ebebeb` beside that source-body `#EBEBEB` writing, and keeping that hex on the control rather than promoting it as a color-role token, is a derived editorial implementation inference from the verified surfaces; it is not Megabox-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `like-button-inline: 5` · `search-input-inline: 10`.

The most useful measured inline values are `5px` on the movie-list action and `10px` on a movie-route search input. They are retained as route-local spacing observations, not a global scale. `tokens.spacing.like-button-inline: 5` is not a converted replacement for the component padding `0px 5px`. `tokens.spacing.search-input-inline: 10` is not a converted replacement for that `10px` writing. Keeping those unitless steps on their own keys rather than rewriting them as a grid, and reading the `5px` / `10px` samples as route-local observations rather than as a complete mathematical scale, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `compact-control: 4` · `theater-lookup: 30`.

- Compact movie controls (`4` / `4px`): 네모난 4px 목록 제어. Token-set key `tokens.rounded.compact-control`. The movie-list action Radius `4px` stays that control’s geometry. Compact movie controls use 4px corners, while the home theater lookup link has a 30px radius.
- Home theater lookup (`30` / `30px`): 30px 극장 찾기 칩; the home theater lookup link has a 30px radius. Token-set key `tokens.rounded.theater-lookup`.
- zero-radius text and navigation elements are also common.

The capture does not justify a single universal corner rule. Keeping `4` and `30` as two keys, keeping component `4px` / `30px` on their own records, and reading zero-radius text and navigation as common rather than as a third rounded token, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

### Elevation

The selector-backed movie-list action has `box-shadow: none`. Token-set path `tokens.shadow.none`: `none`. The supplied three-route capture does not establish a repeatable shadow scale, so only the explicit `none` value is tokenized. That bound is the source’s own; classifying `none` as a token for this observed control rather than as a house elevation system is a derived editorial implementation inference from the verified surfaces; it is not Megabox-authored or a separately published UI specification.

### Motion

No duration, easing, animation, carousel transition, or reduced-motion value is recorded in the supplied evidence. Motion rules are intentionally omitted rather than inferred from the presence of a carousel control. No motion token is promoted. Reading that absence as a prohibition on inferring motion from the carousel control, rather than as a Megabox-authored motion specification, is a derived editorial implementation inference from the verified surfaces; it is not Megabox-authored or a separately published UI specification.

A motion token may be promoted only after component-level computed observation of transition properties, animation name, duration, easing, and reduced-motion behavior. Partial confirmation of one of those five kinds is not enough.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Treating the source’s Live computed / Official distributed / System / Declared-only classes as the resolution of `tokens.typography.family.ui`, keeping Roboto as System rather than as a NanumBarunGothic substitute, and keeping text-security-disc as Declared-only rather than as a specimen, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification. The counts, family names, and class labels are the source’s own.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | NanumBarunGothic은 세 공개 웹 경로에서 439회 관찰되었고, 8개의 Megabox-hosted WOFF/EOT/TTF 소스와 함께 `loaded`/high confidence로 기록됐다. 따라서 유일한 `tokens.typography.family.ui`로 남긴다. |
| Official distributed asset | 공급된 번들은 Megabox 정적 폰트 경로에서 NanumBarunGothic subset을 로드한다. 네이버의 공식 글꼴 목록도 나눔바른고딕과 Ultra Light·Light·Regular·Bold 굵기를 별도로 안내한다. 이 배포 맥락은 폰트 자산의 정체를 보강할 뿐, Megabox UI 사용의 증거는 아니며 그 사용은 위의 computed/FontFaceSet 기록으로만 확정한다. |
| System | Roboto는 25회 관찰됐지만 collector가 operating-system stack으로 분류했다. Megabox 브랜드 글꼴이나 NanumBarunGothic의 대체재로 다루지 않는다. |
| Declared-only | text-security-disc는 `@font-face`가 선언됐으나 가시 사용은 0회다. 토큰이나 표본 폰트로 승격하지 않는다. |
| Outside these captures | YAML body use: Observed on the supplied public home, movie, and booking routes; no native or authenticated-app scope is claimed. |

### Family

Keeping `NanumBarunGothic` as the current visible UI family inside the supplied public-web scope, and restating the source Don’t as a prohibition on replacing unobserved type outside that scope or presenting Roboto / text-security-disc as that family, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

- **Current visible UI family:** `NanumBarunGothic` (`tokens.typography.family.ui`)
- **Loaded source boundary:** Megabox-hosted subset including `https://img.megabox.co.kr/static/pc/font/nanum/NanumBarunGothicSubset.woff`
- Do not replace unavailable or unobserved brand type with NanumBarunGothic outside the public-web scope, and do not present Roboto or text-security-disc as that family.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Boundary |
|---|---|---:|---:|---:|---:|---|
| Public-web body | NanumBarunGothic | 15px | 400 | 22.5px | | Supplied home/movie/booking routes; NanumBarunGothic loaded. YAML `tokens.typography.body`: size 15, weight 400, lineHeight `22.5px`. YAML use: Observed on the supplied public home, movie, and booking routes; no native or authenticated-app scope is claimed. |
| Movie section title | NanumBarunGothic | 27.999px | 400 | 30.7989px | -1px | `/movie` h2 only; -1px tracking. YAML `tokens.typography.section-title`: size 27.999, weight 400, lineHeight `30.7989px`, tracking `-1px`. YAML use: Observed only on the supplied public movie-route h2. |

Line heights stay in the source’s px form (`22.5px`, `30.7989px`); they are not rewritten as unitless ratios. Size `27.999` and movie-list action font `13.0005px` stay in that form. Keeping those writings in the source’s px / decimal form rather than converting them, is a derived editorial implementation inference from the verified surfaces; it is not Megabox-authored or a separately published UI specification.

### Assets

- Catalog logo field: favicon `https://www.google.com/s2/favicons?domain=megabox.co.kr&sz=128`. Classing this slug as a favicon-service URL keyed to the domain rather than as a captured first-party Megabox mark is a derived editorial implementation inference from the verified surfaces; it is not Megabox-authored or a separately published UI specification.
- First-party-hosted font asset: `https://img.megabox.co.kr/static/pc/font/nanum/NanumBarunGothicSubset.woff`
- The supplied routes use film imagery, poster-led movie listings, header utility controls, and carousel affordances. No named icon library, stroke width, asset aspect-ratio rule, or reusable media-card contract is established by the evidence. Treating that imagery as captured surface content rather than as a reusable media-card token is a derived editorial implementation inference from the verified surfaces; it is not Megabox-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The supplied evidence records `interactionCount: 0` and no interaction kinds. It includes one static disabled carousel-arrow element, but no observable empty, loading, error, success, skeleton, focus, pressed, or transition treatment. No state tokens or fabricated state specifications are supplied. YAML `tokens.components.movie-like-button.states`: Default enabled button observed; the supplied bundle records no hover, focus, pressed, error, or interaction-expanded state for this control.

The public movie route also contains a 36px-high purple reservation **link** (`a.button.purple.bokdBtn`) and the home includes a disabled carousel-arrow button. The former is not promoted as a button token because the supplied selector does not evidence button semantics; the latter documents only a static disabled element, not a transition or reusable disabled style. Their measured defaults remain in the proof record rather than being erased.

The promoted movie-list action uses `#503396` text on `#FFFFFF` with a 1px `#EBEBEB` border. This record does not certify contrast or focus compliance. A disabled carousel arrow is present in the supplied home snapshot, but its icon-like zero-size text treatment is not a reusable disabled-control pattern. No keyboard, focus-visible, error, modal, or assistive-technology behavior was captured. Implementations need explicit accessible states rather than extrapolating them from the observed defaults.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. This is not a complete state-coverage claim. Graph adoption has not happened; these rows stay in this file.

Treating the reservation link as proof-record geometry rather than as a button token, treating the carousel-arrow as a static disabled observation rather than as a reusable disabled pattern, and closing the movie-list action’s seven-state map by role rather than by capture completeness, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

### Movie list action

- Role: movie-list like/list action on the public movie route
- Kind: interactive
- Primitive type: `button` (YAML `type: button`)
- Token-set path: `tokens.components.movie-like-button`
- Anatomy: label on an actual `button` element
- Background: `#FFFFFF` / token-set `bg` `#ffffff`
- Text: `#503396`
- Border: `1px solid #EBEBEB` / token-set `border` `1px solid #ebebeb`
- Radius: `4px`
- Padding: `0px 5px`
- Height: `36px`
- Font: `13.0005px / 400 / NanumBarunGothic`
- Token-set font record: `13.0005px / 400 / NanumBarunGothic`
- YAML use: Movie route list action at `surface-2::[data-omd-capture="29"]`.
- Use: Actual `button` element at `surface-2::[data-omd-capture="29"]` on the public movie route.
- YAML states: Default enabled button observed; the supplied bundle records no hover, focus, pressed, error, or interaction-expanded state for this control.
- Observed: Default enabled control observed. The supplied bundle has zero interaction records, so no hover, focus, pressed, or error styling is claimed.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default enabled button observed on `/movie` |
| hover | applicable | Pointer-web `button`; visual treatment omitted |
| focus-visible | applicable | Interactive `button`; visual treatment omitted |
| disabled | applicable | `button` control; visual treatment omitted. The home carousel-arrow is a different element’s static `disabled` observation, not this control’s treatment |
| loading | applicable | Like/list action can be pending; visual treatment omitted |
| error | applicable | Like/list action can fail; visual treatment omitted |
| success | applicable | Like/list action can confirm; visual treatment omitted |

Treating the reservation link as proof-record geometry rather than as a second button token, retaining the home theater lookup as `tokens.rounded.theater-lookup` proof without a component token, and retaining the carousel previous control as a static disabled observation without a component token or a reusable disabled style, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

### Movie reservation link (proof record, not a button token)

Measured default on the public movie route, retained because the source says measured defaults remain in the proof record rather than being erased. No `kind` and no state-applicability map: the supplied selector does not evidence button semantics, and the source omitted this control from `tokens.components`.

- Element: `a.button.purple.bokdBtn`
- Height: 36px
- Purple fill uses `#503396`; text uses on-primary `#ffffff`
- Recorded as a 36px-high purple reservation **link**; not a second button token

### Theater lookup link (shape/spacing proof only)

No component token. Home theater lookup link: 30px radius; muted `#666666` text. Retained as `tokens.rounded.theater-lookup` proof only.

### Carousel previous control (static disabled observation)

No component token and no reusable disabled style. Home snapshot: actual disabled button; icon-like zero-size text treatment; not a transition.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied capture is home, `/movie`, `/booking`의 `1440×900` 데스크톱 뷰포트 세 개다. 영화 목록에는 `230px × 450px`의 목록 항목이 관찰되지만, 열 수·거터·반응형 전환 규칙은 확인되지 않았다. home의 영화 정보 링크는 `245px × 352px`로 기록되었으며, 카드 그리드나 이미지 비율 토큰으로 승격하지 않았다. 로그인, 좌석 선택, 결제, 모바일 및 접근성 보조 흐름은 이 범위에 포함되지 않는다.

Spacing and shape used on these routes stay the route-local values in Foundations: `5px` / `10px` inline observations, 4px compact controls, 30px theater lookup, and common zero-radius text and navigation. The 36px movie-list action, 36px-high purple reservation link, and desktop `1440×900` measurements are desktop-capture measurements, not cross-viewport specifications. Reading those list-item and movie-info sizes as captured geometry rather than as a grid or image-ratio token, reading `1440×900` as the supplied viewport rather than as a breakpoint system, and reading those control heights as desktop-capture measurements rather than as cross-viewport specifications, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Megabox’s official language is social and experiential: it frames the brand as a place to meet, play, and share, and as a provider of meaningful cultural experiences. Its company statement joins that hospitality with content and space, while its core values name empathy, creation, and fun. Public product copy can take this as an editorial direction—clear, welcoming, and activity-oriented—without claiming a measured UI copy system or reproducing slogans as generic labels. Calling that official language an editorial direction for public product copy (clear, welcoming, and activity-oriented), without claiming a measured UI copy system, is a derived editorial implementation inference from the verified surfaces; it is not Megabox-authored or a separately published UI specification. The official framing (meet, play, and share; meaningful cultural experiences; empathy, creation, and fun) is the source’s record of company material.

The source’s Voice & Tone labels, kept as written. Grouping them as this reconstruction’s voice table, and keeping the Korean lines as editorial illustrations rather than as captured microcopy, are a derived editorial implementation inference from the verified surfaces; they are not Megabox-authored or a separately published UI specification.

- **Welcoming:** acknowledge the shared occasion around a film or venue.
- **Culturally curious:** leave room for discovery and new content.
- **Plainly helpful:** make operational choice and next steps easy to understand.

| Do | Don't |
|---|---|
| Use concise, hospitable guidance for a public cinema visit. | Turn every operational label into a brand slogan. |
| Connect content with a shared place or occasion when context warrants it. | Claim a particular seat, payment, or membership behavior was verified. |
| Keep selection language direct on dense movie lists. | Invent an observed conversational style for logged-in flows. |

Illustrative, not captured UI copy: “상영 시간 확인하기”, “함께 볼 영화 찾아보기”, “가까운 극장 보기”. These samples are editorial illustrations, not quotes or evidence of production microcopy.

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

These decisions are unnamed values, not permissions to invent. Framing the list as source-opened values rather than as a licence to invent, is a derived editorial implementation inference from the verified surfaces; it is not Megabox-authored or a separately published UI specification.

- hover, focus, pressed, error, empty, loading, success, skeleton, transition, and dialog visual treatments
- duration, easing, animation, carousel transition, and reduced-motion values
- 열 수·거터·반응형 전환 규칙
- 카드 그리드나 이미지 비율 토큰
- named icon library, stroke width, asset aspect-ratio rule, or reusable media-card contract
- reusable disabled-control pattern (the home carousel-arrow is not that pattern)
- contrast or focus compliance certification
- 공개 웹 전체의 단일 CTA 규칙
- a single universal corner rule
- a repeatable shadow scale beyond `box-shadow: none`
- 극장 현장, 모바일 앱, 로그인 후 예매, 로그인, 좌석 선택, 결제, member dashboard, keyboard, modal, and assistive-technology behavior
- later rebrand or unverified visual-system claim
- native or authenticated-app typography (YAML: no native or authenticated-app scope is claimed)

# LikeLion migration log

- Source: `web/references/likelion/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/likelion/.verification.md` — **채택**(증거 등급). 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/likelion/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/likelion/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: education (KR 프로그래밍 교육). 토큰 표면은 공개 코스 마케팅/카탈로그 `https://likelion.net/`. `https://designsystem.likelion.net/` 는 공식 문서 표면(YAML `ds.type: system`)이나 이번 캡처는 Storybook documentation chrome이지 component-story 토큰이 아님. sibling 전용 측정(score 79, docs chrome `6px`/`8px`/`14px / 400`, `Pretendard-Regular.subset.woff2`, `rgb()` 읽기)은 portable 토큰으로 올리지 않았다. sibling 문장 `No LikeLion-authored font licence` 는 portable 토큰이 아니나 Font evidence Official product-use 칸에 쓰여 DESIGN dest 1 (F3 원장 예외). 게이트 copy-loss `compared` 2 / `candidates` 102. A5a 손 대조 발행 카피 6 / 미생존 0.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 산출 파일을 `grep`한 뒤에 썼다(F2).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`) | 분리 → provenance · `name` 옮김 → DESIGN.md H1 · `display_name_kr` 옮김 → Experience Scope | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# LikeLion Design System`. `멋쟁이사자처럼` DESIGN dest 1 · provenance dest 1. `id`/`country`/`category`/`homepage`는 provenance Identity 표. |
| YAML `primary_color: "#ff6000"` | 옮김 → Foundations Semantic color · 분리 → provenance Identity | 이중 목적지. DESIGN.md `#ff6000` dest 9, provenance dest 5. |
| YAML `logo.type: favicon` / `https://likelion.net/img/favicon.png` | 분리 → provenance · 옮김 → DESIGN.md Assets (identity metadata) | 이중 목적지. 1차 파비콘. `https://likelion.net/img/favicon.png` DESIGN dest 1 · provenance dest 1. |
| YAML `ds.name` / `ds.url` / `ds.type: system` / `ds.description` | 분리 → provenance · 공개 문서 URL·이름은 옮김 → Experience Scope | 이중 목적지(URL·이름). `ds.type` / `ds.description` 전문은 provenance only (`ds.type` DESIGN dest 0 · provenance dest 3). `https://designsystem.likelion.net/` DESIGN dest 2 · provenance dest 5. A1c: `ds.type: system` 누락하지 않음. |
| YAML `verified` / `added` / `omd` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested` / `verification_v2` | 분리 → provenance | freshness·증거 등급 원장(E1). `live-extract` DESIGN dest 0 · provenance dest 2. `components_harvested` DESIGN dest 0 · provenance dest 2. |
| YAML `tokens.colors` (**7키** — `primary` `foreground` `muted` `muted-secondary` `hairline` `promo` `nav-border`) | 옮김 → Foundations `Semantic color` | 7키 전부. 산출 hex: `#ff6000` `#222222` `#a3a3a3` `#737373` `#e5e5e5` `#fcf4ee` `#d4d4d4`. `primary`는 attention/search이지 filled orange CTA가 아님. promo `#fcf4ee`를 canvas로 합치지 않음. hairline `#e5e5e5`와 nav-border `#d4d4d4`를 합치지 않음(A4). muted `#a3a3a3`와 muted-secondary `#737373`를 합치지 않음. |
| YAML `tokens.typography` body / section-heading / search (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표 | 옮김 → Typography & Assets `Type roles` | A1a: YAML `1.5` · `1.2`를 px로 바꾸지 않고 비율 그대로. 원본이 적은 24px / 48px / 24px는 괄호로 병기. Course-card title 30px는 YAML 키가 아니라 §3 행 — 비율 변환 없음. YAML use 착지 DESIGN dest 각 1 — `Observed home body copy; the computed Pretendard Variable face is unresolved, so no UI-family token is assigned.` · `Observed home course-section heading.` · `Observed home course-search input.` |
| YAML `tokens.spacing: {}` | 옮김 → Foundations `Spacing` (빈 스케일로) | 스케일 발명 없음. 40px / `10px 16px`는 컴포넌트 padding. `tokens.spacing` DESIGN dest 1 (empty-object 서술). |
| YAML `tokens.rounded.promo: 16` | 옮김 → Foundations `Shape` (+ Components) | 이중 목적지. `tokens.rounded.promo: 16` DESIGN dest 1 · provenance dest 1. 9999px는 `account-pill.radius` 필드이지 rounded 키가 아님. |
| YAML `tokens.shadow.none: "none"` | 옮김 → Foundations `Elevation` | `box-shadow: none` DESIGN dest 1 · provenance dest 1. |
| YAML `tokens.components` 3개 (`type: button` ×2, `type: input` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 보존. 산출 `Primitive type: \`button\`` 2 · `input` 1 = YAML과 동수. YAML `use`를 각 블록 `Token-set use:` 행으로 병기. YAML padding `40px` / `10px 16px`, font `16px / 400 / unresolved computed stack` / `20px / 600 / unresolved computed stack`, border `1px solid #d4d4d4`, states `default observed only` / `default plus focus and pressed pseudo-state samples only`는 §4 표기 옆에 병기. |
| §4 Promotional tile / Navigation account / Course search 본문 | 옮김 → Components & States | 세 harvested 컴포넌트. Focus `#2563eb` + `0px` border width는 관측 `focus` 의사상태 샘플이지 `focus-visible` treatment가 아님(B1). |
| §5 Layout Principles | 옮김 → Layout & Platforms | 1440×900, 731px, 310px/40px, 43px. course-grid / carousel / sticky header / breakpoint 생략. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | `box-shadow: none`. promo는 `#fcf4ee`·type·16px이지 elevation 값이 아님. |
| §7 Do 4항 | 옮김 → Experience `Application rules` | 산출 4항. 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음. B2a 완전형 한정을 절 머리에 배치. |
| §7 Don't 4항 | 옮김 → Experience `Avoid` | 산출 4항. B2a 완전형 한정을 절 머리에 배치. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms `Responsive behavior` | `1440×900` DESIGN dest 2. 모바일 뷰포트·터치·grid·menu-collapse·carousel-scroll·breakpoint는 원본대로 승격하지 않음. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. 그 안의 `#222222` / `#e5e5e5` / `#ff6000` 20px/600 / `#fcf4ee` 16px·40px / outlined login pill / no orange CTA / no Pretendard substitution 은 이미 Foundations/Components/Typography에 있음. 슬롯 없는 위임 없음(A3). |
| §10 Voice & Tone — 공식 서술 + Do/Don't 표 + 소스 샘플 3건 | 옮김 → Content & Locales | 표 3행 그대로. “HACK YOUR LIFE!” · “문제 해결 반복 및 경험 공유” · “AI = 동료” 바이트 그대로(A5). “not homepage microcopy rules” 유지. B2a 완전형 한정을 표 앞에 붙였다. |
| §11 Brand Narrative | 옮김 → Experience `Scope` (브랜드 서사 문단) · 출처 URL은 분리 → provenance `Narrative` | 2013, “HACK YOUR LIFE!”, commercial corporation, courses/bootcamps/AI/business, AX learning. 마지막 문장 “It should not be read as proof of a single interface across the learner product, business program, or documentation site.”까지 보존. URL `k-digital.likelion.net` / `likelion.net/b2b` 는 provenance only (DESIGN dest 0). |
| §12 Principles 4항 (+ 각 UI implication) | 옮김 → Experience `Principles` | 산출 4항. B2a 완전형 한정을 머리에 배치. 제목은 공식 history/business에 기대고, UI implication은 원본의 편집 읽기. 발행 DS 문서에서 가져온 것이 아님을 published-spec form으로 닫음. |
| §13 Personas 3 미완 그룹 슬롯 (Individual learners / Organisation learning teams / Documentation readers labels) | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 §13 머리글이 invented demographic archetypes를 지지할 persona research가 없다고 명시. 식별자(이름·나이·도시)는 원본에도 없음. Experience `Audience`는 미완 슬롯을 그룹 청중으로 올리지 않는다. `public documentation visitors` DESIGN dest 0. `public course and bootcamp visitors` DESIGN dest 0. `business/AX education` DESIGN dest 0. `public Storybook/documentation visitors` DESIGN dest 0. |
| §14 States 6행 | 옮김 → Components & States `Capture record` + 컴포넌트별 applicability | 이중 목적지(둘 다 portable 본문). Empty · Loading · Error · Success · Skeleton · Disabled 경계 그대로. placeholder 래퍼는 생략(A1). graph 위임 없음. documentation form-error는 코스 표면으로 승격하지 않음. |
| §15 Motion & Easing | 옮김 → Foundations `Motion` | 원문 부재 보존. placeholder 래퍼는 생략. 삭제할 무출처 커브 없음(`cubic-bezier` DESIGN dest 0 · provenance dest 0). |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance Named gaps | 원본에는 승격 조건 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: 이 전문이 산출 DESIGN.md에 실제로 2회 존재함을 확인한 뒤 이 행을 적었다 (`transition properties` DESIGN dest 2). |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하 | 옮김 → Experience `Scope` | `https://likelion.net/` 를 토큰 표면으로, DS URL을 공식 문서(chrome 캡처)로 분리 명시. |
| §1 인과·해석 문장(restrained field, `#ff6000` concentrated, docs Pretendard not homepage family) | 옮김 → Experience `Scope`, 한정 부착 | B2a 완전형 인접 배치. 원본 측정 문장은 사실 인용으로 같은 절에 남김. |
| §1 Key Characteristics 5항 | 옮김 → Experience `Distinctive traits` | 산출 5항. B2a 완전형 한정을 머리에 배치. |
| §2 Boundary (filled orange CTA 없음, docs chrome hex 4종) | 옮김 → Foundations Semantic color | `#6b7583` `#4e5967` `#f3f4f6` `#e5e7ea` DESIGN dest 각 2 — 제품 토큰이 아니라는 원본 경계. |
| §3 Font evidence classes | 옮김 → Typography & Assets `Font evidence` / `Family` | Pretendard Variable unresolved (193). docs Pretendard loaded (34, 22 source URLs). Declared-only Gotham / HeirofLight / Noto Sans Mono / Nunito Sans / slick. SIL OFL 1.1. |
| §3 Pretendard license URL | 분리 → provenance | 라이선스 원장. 본문은 OFL 1.1과 “Pretendard 업스트림이지 Gotham 등 재사용 허가가 아님”을 유지. URL DESIGN dest 0 · provenance dest 2. |
| §4 하단 footer 블록 (**Verified** / Tier 1 4개 URL / Tier 2 attempts / Conflicts unresolved) | 분리 → provenance | freshness·출처 원장(E1). Tier 2 `getdesign.md/likelion` DESIGN dest 0 · provenance dest 1. |
| Sibling `.verification.md` — Proof 머리말·raw samples·Tier 2·Conflict matrix | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건.** sibling 전용 구조 라벨 `surface-2` / score 79 / docs 단독 `6px` / `Pretendard-Regular.subset.woff2` / `rgb(37, 99, 235)` 는 산출 DESIGN.md에서 각각 0회(단독 `6px`; `16px` 부분문자열 제외). 예외: sibling 문장 `No LikeLion-authored font licence` 는 DESIGN dest 1 (Font evidence Official product-use). 토큰이 아님. |

## 최종 패스 기록

**패스 1 — B2a 스캔.** 완성본을 처음부터 다시 읽고 인과·해석·판단 문장마다 근거 class를 자문했다. 이관 시점 색인은 22곳이었다. F3가 Font evidence Official product-use · Official distributed brand asset 칸에 인접 완전형을 붙여 **24곳**. provenance `Derived editorial inventory` 24 = 본문 24, 177–200. 본문 완전형 `"derived editorial implementation inference from the verified surfaces"` + `"not LikeLion-authored or taken from a separately published UI specification"` 짝 24. Principles 안팎: Scope 표면 귀속 · Scope 레이어 읽기 · Scope 서사 비토큰 · Primary tasks 선정 · Audience drop · Distinctive traits 분류 · Principles · Application rules · Avoid · Semantic color 비해합 · Spacing 빈 스케일 · Shape 로컬 기하 · Elevation 플랫 · Motion 부재+B3 · Font evidence 분류 · Font Official product-use · Font Official distributed · Family unresolved · Type roles keep-both · Assets 파비콘 · Capture record 역할 판정/YAML keep-both · Layout 클러스터 · Responsive 뷰포트 · Content 큐 해석. 발행 1차 DS 문서 표면은 있으나 이번 캡처는 documentation chrome — published-spec 닫힘(`not LikeLion-authored or taken from a separately published UI specification, including the published LikeLion Design System documentation`).

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `str.count` / `grep -oF`로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(identity name, `#ff6000`, favicon URL, DS URL, rounded promo, §14 상태, B3). §11 출처 URL·`live-extract`·`ds.type`는 provenance only(DESIGN dest 0)이므로 이름만의 이중 목적지로 적지 않음. 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 전문 2회(`transition properties`+`animation name`+`duration`+`easing`+`reduced-motion behavior` 같은 줄, Motion · Named gaps), primitive type 2종 동수, lineHeight 비율 `1.5` / `1.2`, YAML `use` 3/3, §14 6행, voice sample 3건, cubic-bezier DESIGN.md 0회.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| legacy 고유 hex 12종 (`#ff6000` `#222222` `#a3a3a3` `#737373` `#e5e5e5` `#fcf4ee` `#d4d4d4` `#6b7583` `#4e5967` `#f3f4f6` `#e5e7ea` `#2563eb`) | 12/12 이 산출 `DESIGN.md` 본문에 존재 — 손실 0. |
| portable 본문의 hex 발명 | 0건. 본문의 모든 `#rrggbb`가 legacy 토큰 집합의 부분집합. |
| unitless lineHeight (A1a) | YAML `1.5` dest 3 · `1.2` dest 2 비율로 생존. 카드 타이틀 `30px`는 원본 형태 유지(비율 변환 0). |
| primitive type (A1b) | button 2 · input 1 — legacy YAML 실측과 동수. |
| `[FILL IN]` | legacy 10건(§13×3, §14×6, §15×1), 산출 DESIGN.md 0건. 신규 작성 없음. provenance Omission은 클래스 이름만 언급. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | 0건. `not-applicable` 행은 전부 역할 사유(promo tile destination · account pill destination · course-search query field). 머리의 "Absence of a capture is not a `not-applicable` reason" 1회는 금지 사유가 아님. |
| C2 | Promotional tile·account pill의 loading/error/success는 destination 역할로 `not-applicable`. Course search의 error는 form field로 `applicable`(treatment 생략), loading/success는 query-field 역할로 `not-applicable`. primitive 일괄 개방 아님. `loading \| applicable` dest 0 · `loading \| not-applicable` dest 3 · `error \| applicable` dest 1 · `error \| not-applicable` dest 2. |
| C3 | "This is not a complete state-coverage claim." 를 Components Capture record에 명시. 완료 주장 0건. |
| C4 | 세 harvested 컴포넌트 모두 interactive-kind 근거 있음(button tile / button pill / input). kind·map 생략 대상 없음. |
| D2 / D2a | §13 식별자 본문 0 · provenance 0. 로그 삭제 행은 원형 라벨만 명명. Audience에 미완 슬롯 조각을 올리지 않음. `public documentation visitors` DESIGN dest 0 · `public course and bootcamp visitors` DESIGN dest 0 · `business/AX education` DESIGN dest 0 · `public Storybook/documentation visitors` DESIGN dest 0. |
| D1 | `native-client` / `storefront` / `authenticated-account` / `product application` / `mobile app` DESIGN dest 0. 원본이 세운 documentation chrome / component-story / mobile viewport 만 유지. |
| A5 발행 문자열 전수 대조 (게이트 바늘 밖까지) | legacy 본문과 sibling에서 발행 문자열 **6건**을 추출해 산출 3파일에 대조 — 미생존 **0건**. 분모는 아래 목록. |

### A5a 손 스윕 목록 (추출 6 / 미생존 0)

발행 카피만. 설명문·점 경로·폰트 스택·제3자 매체명·declared-only 페이스 이름은 바늘이 아니다.

Legacy 본문 (6): `멋쟁이사자처럼` · `HACK YOUR LIFE!` · `문제 해결 반복 및 경험 공유` · `AI = 동료` · `로그인` · `회원가입`

Sibling 전용 발행 라벨: 0건 (sibling raw samples는 computed CSS이며 추가 발행 카피가 없다).

재대조: 위 6건은 DESIGN.md에서 각 ≥1회. 미생존 0.

### F2 dest 재실측 (`str.count` / `grep -oF`)

이 절을 쓴 뒤 세 파일을 다시 센 값. DESIGN dest가 본문 생존이다.

| 바늘 | DESIGN dest | provenance dest |
|---|---:|---:|
| `#ff6000` | 9 | 5 |
| `#222222` | 6 | 3 |
| `#fcf4ee` | 8 | 3 |
| `#2563eb` | 2 | 1 |
| `#d4d4d4` | 4 | 1 |
| `1.5` | 3 | 3 |
| `1.2` | 2 | 2 |
| `Observed home body copy` | 1 | 1 |
| `Observed home course-section heading.` | 1 | 1 |
| `Observed home course-search input.` | 1 | 1 |
| `16px / 400 / unresolved computed stack` | 4 | 0 |
| `20px / 600 / unresolved computed stack` | 2 | 0 |
| `https://likelion.net/img/favicon.png` | 1 | 1 |
| `HACK YOUR LIFE!` | 4 | 4 |
| `문제 해결 반복 및 경험 공유` | 1 | 1 |
| `AI = 동료` | 1 | 1 |
| `멋쟁이사자처럼` | 1 | 1 |
| `transition properties` | 2 | 0 |
| `derived editorial implementation inference` | 24 | 1 |
| `not LikeLion-authored` | 24 | 2 |
| `No LikeLion-authored font licence` | 1 | 1 |
| `Official product-use` | 1 | 2 |
| `Official distributed brand asset` | 1 | 1 |
| `live-extract` | 0 | 2 |
| `ds.type` | 0 | 3 |
| `score 79` | 0 | 2 |
| `Pretendard-Regular.subset.woff2` | 0 | 1 |
| `cubic-bezier` | 0 | 0 |
| `https://k-digital.likelion.net/364c521d-31d4-425e-a281-7d056ce3f8a6` | 0 | 3 |
| `public documentation visitors` | 0 | 0 |
| `public Storybook/documentation visitors` | 0 | 0 |
| `public course and bootcamp visitors` | 0 | 0 |
| `business/AX education` | 0 | 0 |

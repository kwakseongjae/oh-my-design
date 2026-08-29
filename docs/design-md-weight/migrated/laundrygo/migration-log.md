# LaundryGo migration log

- Source: `web/references/laundrygo/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/laundrygo/.verification.md` — **채택**(증거 등급). 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/laundrygo/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/laundrygo/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: consumer-tech (KR 비대면 모바일 세탁). 법인 브랜드 사이트와 B2B `호텔&비즈니스` 표면은 함께 검사된 1차 웹이고, sibling 전용 측정(49px/71px business hero, 30px/85px "문의하기")은 portable 토큰으로 올리지 않았다.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 산출 파일을 `grep`한 뒤에 썼다(F2).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`) | 분리 → provenance · `name` 옮김 → DESIGN.md H1 | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# LaundryGo Design System`. `id`/`country`/`category`/`homepage`는 provenance Identity 표. |
| YAML `display_name_kr: 런드리고` | 옮김 → Experience Scope · 분리 → provenance Identity | 이중 목적지. A5: 한글 원문을 H1 영문 이름 옆에 병기(대체 아님). DESIGN.md `런드리고` 다수, provenance Identity `display_name_kr` 1행. |
| YAML `primary_color: "#0ac290"` | 옮김 → Foundations Semantic color · 분리 → provenance Identity | 이중 목적지. DESIGN.md `#0ac290` 16회, provenance Identity `primary_color` 행. |
| YAML `logo.type: favicon` / `logo.slug` | 분리 → provenance · 옮김 → DESIGN.md Assets | 이중 목적지. 브랜드 도메인 1차 파비콘이라 portable Assets에 URL을 남겼다. `favicon_web.png` DESIGN.md 1회 · provenance 2회. |
| YAML `verified` / `added` / `omd` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested` | 분리 → provenance | freshness·증거 등급 원장(E1). `live-extract`는 DESIGN.md 0회 · provenance 2회. 단, live-extract가 덮는 범위(computed colour·type·spacing·radius·border·shadow)는 standalone 해석에 필요해 DESIGN.md Foundations `Motion` 머리에 문장으로 남겼다 — 그 범위 문장은 이중 목적지. |
| YAML `tokens.note` (긴 문자열) | 분리 → provenance | 원문 그대로 인용 블록. 안의 값(`#0ac290` `#0170b9` `#dfdfdf` `#ecebdc`, Pretendard, `런드리고딕체`)은 DESIGN.md Scope·Foundations·Typography에 별도로 실려 있다. |
| YAML `tokens.colors` (**14키** — `primary` `blue-accent` `ink` `ink-soft` `body` `muted` `muted-alt` `faint` `canvas` `surface` `beige` `hairline` `near-black` `on-primary`) | 옮김 → Foundations `Semantic color` | 14키 전부. 산출 hex: `#0ac290` `#0170b9` `#000000` `#3a3a3a` `#4b4b4b` `#60646a` `#888c8e` `#b5bcc0` `#ffffff` `#f8f9fa` `#ecebdc` `#dfdfdf` `#181b1e` (on-primary는 `#ffffff`와 같은 값으로 canvas/on-primary 행에 보존). §2 role 이름과 사용처는 Recorded use 열. Pure Black Recorded use는 원본 `:84` `Used directly (not a softened navy) for maximum-contrast headlines and body`를 사실 인용으로 보존. |
| YAML `tokens.typography.family` (`display: "런드리고딕체"`, `body: "Pretendard"`) + §3 Font Family | 옮김 → Typography & Assets `Family` | 라이브 웹 페이스는 Pretendard; `런드리고딕체`는 declared proprietary display. 대체를 금지하는 경계를 `Font evidence`에 행으로 남김. 원본 §1 `the de-facto Korean product font optimized for dense hangul legibility`는 Family 현재 가시 페이스 행에 사실 인용. |
| YAML `tokens.typography` 9역할 (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표의 Stat Block 행 | 옮김 → Typography & Assets `Type roles` | A1a: `1.00` `1.44` `1.67` `1.40` `1.50`을 px로 바꾸지 않고 비율 그대로. 원본이 적은 px 등가(`62px` `65px` `35px` `40px` `23px` `18px` `22.4px`)와 rem 등가(`3.88rem` … `0.88rem`)만 괄호로 병기. 항목 11: YAML `use`가 표 Notes와 다르면 둘 다. 착지 DESIGN dest 각 1 — `Dark-hero headline, Pretendard SemiBold` · `Section titles, Pretendard SemiBold` · `Sub-headline / statement, Pretendard Bold` · `Green section eyebrow label (Vision, Growth, Quality)` · `Service/card titles` · `Top-level nav item` · `Primary CTA label` · `Standard reading text, Pretendard` · `Sub-nav / footer link`. |
| §3 Principles 4항 | 옮김 → Typography & Assets `Typography rules` | B2a 완전형 한정 인접 배치. |
| YAML `tokens.spacing` 8키 (`xs: 4` `sm: 8` `md: 15` `base: 16` `lg: 30` `xl: 40` `xxl: 72` `section: 96`) + §5 Spacing System | 옮김 → Foundations `Spacing` (+ Layout & Platforms) | 이중 목적지. 스케일은 단위 없이 `xs: 4` … `section: 96`. 원본이 단위를 붙인 캡처만 px로 적음: `8px` `15px` `16px` `30px` `40px` `72px`. 원본에 없는 `96px`는 DESIGN dest 0. Layout은 원본 §5 표기 `4/8/15/16/30/40/72px`·`72px+`를 유지. |
| YAML `tokens.rounded` 4키 (`sm: 10` `md: 14` `lg: 20` `full: 9999`) + §5 Border Radius Scale | 옮김 → Foundations `Shape` | 10px / 14px / ~20px / 9999px. 로컬 기본값이지 전 표면 보편 스케일이 아니라는 경계를 같은 절에 남김. |
| YAML `tokens.shadow.cta` `rgba(0,0,0,0.15) 0px 14px 29px 0px` | 옮김 → Foundations Elevation (+ Components Emphasis CTA) | 이중 목적지. `rgba(0,0,0,0.15)` DESIGN.md 3회. |
| YAML `tokens.components` 7개 (`type: button` ×3, `tab` ×1, `badge` ×1, `card` ×1, `listItem` ×1 — 원본 YAML `type:` 실측; `type: favicon`은 `logo.type`) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 보존. 산출 `Primitive type: \`button\`` 3 · `tab` 1 · `badge` 1 · `card` 1 · `listItem` 1 = YAML과 동수. 항목 11: 7레코드 YAML `use`를 각 블록 `Token-set use:` 행으로 병기(§4 Role과 다를 때 둘 다). YAML padding `0 40px`는 Primary CTA에서 §4 `0px 40px` 옆에 병기(DESIGN dest 1). YAML font 바이트(`17px / 700 Pretendard` 등)는 §4 슬래시 표기 옆에 병기. YAML active `green #0ac290 text on active`는 Nav Link에서 §4 표기 옆에 병기(DESIGN dest 1). |
| §4 Buttons / Badges / Cards / Navigation / Stat Blocks | 옮김 → Components & States | 7개 harvested 레코드 + Beige Surface. CTA 라벨·nav 라벨·서비스명·메트릭 라벨은 바이트 그대로. |
| §4 Inputs & Forms | 옮김 → Components & States `Inquiry Form Field` | YAML primitive type 없음. Kind: interactive는 폼 필드라는 역할 판단(섹션 머리 B2a). 값: `#ffffff` / `1px solid #dfdfdf` / 10px / `#000000` / placeholder `#b5bcc0`. |
| §5 Layout Principles (Grid & Container, Whitespace Philosophy) | 옮김 → Layout & Platforms | 밴드 교차, 히어로, 서비스 카드 행, 성장 스탯 행, 8px 베이스. 해석 3건("breathing room over density", 밴드가 보더를 대신함, 그린이 "the brand / the action")에는 B2a 완전형 한정을 인접 배치. |
| §6 Depth & Elevation 4행 표 + Shadow Philosophy | 옮김 → Foundations `Elevation` | 4행 그대로. `box-shadow: none` 관측은 본문 2회. Philosophy의 인과(near-flat, 강조는 그린 또는 다크 밴드)는 B2a 완전형 한정 인접. |
| §7 Do 8항 | 옮김 → Experience `Application rules` | 산출 8항. 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음. B2a 완전형 한정을 절 머리에 배치. |
| §7 Don't 7항 | 옮김 → Experience `Avoid` | 산출 7항. B2a 완전형 한정을 절 머리에 배치. |
| §8 Responsive Behavior (Breakpoints 3행, Touch Targets, Collapsing Strategy, Image Behavior) | 옮김 → Layout & Platforms `Responsive behavior` | 3행 그대로(`<640px` / `640-1024px` / `1024-1440px`). 터치 타깃 `52px` · `76–85px` · 접힘·이미지 거동 보존. 라이브 교차-뷰포트 캡처가 아니라는 경계를 절 머리에 적음. |
| §9 Agent Prompt Guide — Quick Color Reference · Example Component Prompts 5개 · Iteration Guide 7항 | 삭제 | 도구별 명령·프롬프트. hex 11개는 모두 §2에 이미 있음(`hex in §9 not in rest: []`). `10px`/`14px` radius 문구도 §4·§5에 값으로 존재. A3: §9 전용 렌더 값 0건, 이동 없음. 슬롯 없는 위임 없음. |
| §10 Voice & Tone — 성격 규정 문단 + Context/Tone 5행 표 | 옮김 → Content & Locales | 표 5행 그대로. voice 해석("confident, mission-framed, and reassuring")은 원본 주석이 editorial reading이라 밝힌 계열이라 B2a 완전형 한정을 표 앞에 붙였다. |
| §10 Voice samples 3건 (verbatim) + 서비스 메커니즘 문장 + forbidden register | 옮김 → Content & Locales | A5: 3건 전부 바이트 그대로. 원본이 붙인 영문 대역 "We are building the innovation of clothing-food-housing life"도 verbatim. `*(verified live 2026-06-11)*` 표기는 provenance Freshness로 분리. |
| §11 Brand Narrative | 옮김 → Experience `Scope` (브랜드 서사 문단) · 출처 URL은 분리 → provenance `Narrative sources` | 창업 2018, 조성우 / Cho Sung-woo, a former corporate-comms professional, ex-배민프레시 대표, 배민프레시 / Baemin Fresh, 우아한형제들, 2019 런칭, 런드렛 / Laundrette, 10pm→정오, 2022 리브랜드, G+arrow, 런드리고딕체, The values the system encodes, The vision extends globally까지 보존. 증거 등급은 원본 주석대로 3분할해 본문에 적었다 — 라이브 검증 카피 / 3자 보강 회사·리브랜드 사실 / 1차 페이지에서 직접 인용되지 않은 미션 문장. 출처 URL·매체명(`kyeongin.com` `techm.kr` `forbeskorea` `sisajournal` `design.co.kr` `designcompass.org`)은 provenance only — DESIGN dest 0 / P dest ≥1. 서사 사실과 URL을 한 덩어리의 이중 목적지로 적지 않음. |
| §11 HTML 주석의 미션 영문·한글 ("innovating laundry will in turn innovate living space" / "세탁이 혁신되면 주거 공간이 혁신될 것" / "make the lives of busy modern people simpler and more abundant" / "삶을 단순하고 윤택하게") | 옮김 → Experience `Scope` | A5: 원문과 원본이 붙인 영문을 병기. |
| §12 Principles 5항 (+ 각 UI implication) | 옮김 → Experience `Principles` | 산출 5항. B2a 완전형 한정을 머리에 배치하고, 원본 주석이 editorial이라 지목한 "laundry is infrastructure" / "trust over attention"을 그 한정 문장에서 이름으로 지목. |
| §13 Personas 3인 (이름·나이·도시·전기) | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 §13 머리글과 닫는 주석이 둘 다 fictional archetypes이며 이름은 illustrative라고 명시. 식별자(이름·나이·도시)는 portable 본문 0회 · provenance 0회 — 처분은 원본 절과 필드 종류로만 적음. Experience `Audience`에는 라이브 표면이 독립적으로 세우는 이해관계자 그룹만 남겼다. |
| §14 States 9행 | 옮김 → Components & States `State record` + 컴포넌트별 applicability 사유 | 이중 목적지(둘 다 portable 본문). 9행 값·카피 그대로(Empty 2 · Loading 2 · Error 2 · Success 1 · Skeleton 1 · Disabled 1). graph 위임 없음. 라이브 검사 밖 시스템 진술이라는 경계를 State record 머리에 적음. |
| §14 Empty / Loading / Error / Success / Skeleton / Disabled의 **값 없는 서술**(flat pulse, green-action fade, reduced-opacity) | 옮김 → State record · 이름만 → Governance `Named gaps` | 이중 목적지. 서술은 본문에 남기고, 값이 없다는 사실만 Governance에 값 없이 이름으로. 그럴듯한 값으로 채우지 않음. |
| §15 Durations 3행 (`motion-fast` 120ms / `motion-standard` 200ms / `motion-slow` 320ms) | 옮김 → Foundations `Motion` | 3행 그대로. 규칙집 제약 5의 삭제 범위는 **무출처 커브뿐**이고 duration은 브랜드마다 다르므로 보존. sibling이 transition/animation/duration/easing 샘플을 0건 기록했으므로 증거 등급 한정(B2a 완전형)을 이 절 머리에 붙였다. |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations `Motion` | `ease-enter` / `ease-exit` / `ease-standard`와 각 용도 보존. |
| §15 Easings — 커브 값 3개 (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. sibling method·raw samples 어디에도 transition·animation·duration·easing 관측이 없다. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`은 추가로 `spec/omd-v0.1.md` 예시 표와 동일. DESIGN.md `cubic-bezier` 0회 · provenance 3회. |
| §15 Motion rules (functional/steady, in-app G-arrow, no bounce/spring on marketing, `prefers-reduced-motion: reduce`) | 옮김 → Foundations `Motion` | reduced-motion 계약 포함. `prefers-reduced-motion` DESIGN.md 1회. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance Named gaps | 원본에는 승격 조건 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: 이 전문이 산출 DESIGN.md에 실제로 2회 존재함을 확인한 뒤 이 행을 적었다. |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하 기술 | 옮김 → Experience `Scope` | 두 표면 URL을 분리 명시하고 값은 그 페이지에 붙였다. |
| §1 인과·해석 문장(infrastructure-grade, trustworthy rather than hard-sell, laundry as logistics platform) | 옮김 → Experience `Scope`, 한정 부착 | B2a 완전형 인접 배치. 원본 닫는 주석이 "laundry is infrastructure" / "trust over attention"을 스스로 editorial reading으로 지목한 사실도 본문에 적었다. |
| §1 Key Characteristics 8항 | 옮김 → Experience `Distinctive traits` | 산출 8항. B2a 완전형 한정을 머리에 배치. |
| §4 하단 footer 블록 (**Verified** / Tier 1 2개 URL / Tier 2 attempts / Conflicts unresolved) | 분리 → provenance | freshness·출처 원장(E1). Tier 1 2개 URL, Tier 2 두 시도의 결과 문자열("No designs found for 'laundrygo'")까지 provenance `Sources`에 보존. |
| Sibling `.verification.md` — Proof 머리말·method·raw samples·Country sources·Tier 2 attempts·Conflict matrix | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건, 구조 분류 승격 0건**(B1). sibling 전용 `49px` `71px` `32px`은 산출 DESIGN.md에서 각각 0회. `30px`은 legacy spacing·muted-button padding으로만 등장(타입 사이즈 30px는 0회). `85px`는 legacy §8 범위 `76–85px`로만. |
| Sibling 전용 발행 라벨 `"일상에 여유와 가치를 더합니다."` · `"모바일 세탁 & 수선 서비스 런드리고"` | 분리 → provenance (바이트 그대로) | A5는 sibling이 측정 대상으로 명기한 문자열에도 걸리므로 2건 모두 provenance Raw samples에 바이트 그대로. DESIGN.md 각 0회. |

## 최종 패스 기록

**패스 1 — B2a 스캔.** 완성본을 처음부터 다시 읽고 인과·해석·판단 문장마다 근거 class를 자문했다. 한정을 붙인 자리 **22곳**을 provenance `Derived editorial inventory`에 색인했다(본문 완전형 `"derived editorial implementation inference from the verified surfaces"` + `"not LaundryGo-authored or a separately published UI specification"` 짝 22 = 원장 22, 184–205). 기존 13 + 신설 9(Semantic color · Spacing · Shape · Font evidence · Family · Type roles · Assets · State record · Responsive). 기존 확장 4(Scope 부착/서사분리 · Audience drop · Motion 커브 생략 · How-to-read YAML use/font/padding keep-both).

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `grep -oF -- | wc -l`로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(identity name, `런드리고`, `#0ac290`, favicon URL, live-extract 범위 문장, spacing, shadow, §14 상태). §11 출처 URL은 provenance only(DESIGN dest 0)이므로 이중 목적지로 적지 않음. 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 전문 2회(`transition properties`+`animation name`+`duration`+`easing`+`reduced-motion behavior` 같은 줄, `:172` `:494`), primitive type 5종 동수, lineHeight 비율 5종, YAML `use` 16/16, §14 9행, voice sample 3건, cubic-bezier DESIGN.md 0회.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| legacy 고유 hex 13종 (on-primary는 `#ffffff`와 동일) | 13/13 이 산출 `DESIGN.md` 본문에 존재 — 손실 0. |
| portable 본문의 hex 발명 | 0건. 본문의 모든 `#rrggbb`가 legacy 토큰 집합의 부분집합. |
| unitless lineHeight (A1a) | `1.00` `1.44` `1.67` `1.40` `1.50` 5종 전부 비율로 생존. px 변환 0건. |
| primitive type (A1b) | button 3 · tab 1 · badge 1 · card 1 · listItem 1 — legacy YAML 실측과 동수. |
| durations | `120ms` `200ms` `320ms` 각 DESIGN.md 1회. |
| `[FILL IN]` | legacy 0건, 산출 0건. 신규 작성 없음. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | 0건. `not-applicable` 행 6개는 전부 역할 사유(destination "웹사이트" / nav 목적지 변경). 머리의 "Absence of a capture is not a `not-applicable` reason" 1회는 금지 사유가 아님. |
| C3 | "This is not a claim that state coverage is finished." 를 Components 머리에 명시. 완료 주장 0건. |
| C4 | `service-card`와 Beige Surface는 kind·applicability map 생략. `eyebrow-badge`·`stat-block`은 `kind: non-interactive` + 이유. |
| D2 / D2a | 페르소나 이름 3종이 DESIGN.md 0 · provenance 0. |
| A5 발행 문자열 전수 대조 (게이트 바늘 밖까지) | legacy 본문·주석과 sibling에서 발행 문자열 **52건**을 추출해 산출 3파일에 대조 — 미생존 **0건**. 분모는 아래 목록. `verdict`를 이 표에 쓰지 않음: A5 준수는 이 52/52이다. |

### A5a 손 스윕 목록 (추출 52 / 미생존 0)

발행 카피만. 설명문·점 경로·폰트 스택·제3자 매체명은 바늘이 아니다.

Legacy 본문·주석 (50): `런드리고` · `의식주컴퍼니` · `Uisikju Company` · `런드리고딕체` · `런드렛` · `Laundrette` · `채용공고 보러가기` · `문의하기` · `B2B·대량세탁 문의` · `상담 문의하기` · `웹사이트` · `Vision` · `Our Business` · `Growth` · `Quality` · `Infra` · `회사소개` · `비즈니스` · `컬쳐` · `채용` · `비전` · `성장` · `언론` · `런드리24` · `호텔&비즈니스` · `EPC` · `회원 수` · `누적 세탁량` · `누적 주문수` · `누적 투자액` · `의식주 생활의 혁신을 만들어 갑니다.` · `세탁 산업의 혁신을 시작으로 의식주 산업 전반의 문제를 찾고 해결합니다.` · `국내 최대 호텔 전문 세탁 서비스, 런드리고 호텔&비즈니스` · `국내 유수의 프리미엄 호텔에서 이미 경험하고 있습니다.` · `저녁 10시 전 런드렛에 넣으면 다음 날 정오 전 수령` · `세탁이 혁신되면 주거 공간이 혁신될 것` · `삶을 단순하고 윤택하게` · `오류가 발생했습니다` · `런드리고 - 모바일 세탁 서비스` · `웜그레이` · `배민프레시` · `배민프레시 대표` · `Baemin Fresh` · `우아한형제들` · `조성우` · `Cho Sung-woo` · `We are building the innovation of clothing-food-housing life` · `make the lives of busy modern people simpler and more abundant` · `innovating laundry will in turn innovate living space` · `필수`

Sibling 전용 (2, provenance Raw samples에만): `일상에 여유와 가치를 더합니다.` · `모바일 세탁 & 수선 서비스 런드리고`

재대조: 위 50건은 DESIGN.md에서 각 ≥1회, sibling 전용 2건은 DESIGN.md 0회 · provenance ≥1회. 미생존 0.

## 개정 — 기계 게이트 MIGRATION_BLOCKED 2결함 (2026-08-29)

토큰 값·컴포넌트 표 구조·상태 applicability·원본 미수정. provenance 파생-편집 원장은 같은 13항을 불릿에서 표 13행으로만 바꿈(`check-limiter-ledger.mjs` 본문 13 = 원장 13, 184–196). 한정 문장·토큰 값은 그대로.

### 결함 1 — token-invention `96px`

원본 YAML `tokens.spacing`는 단위 없는 스케일 (`xxl: 72`, `section: 96`). 원본 본문이 px로 적은 간격은 `~8px` / `4/8/15/16/30/40/72px` / `72px+` / `30–40px`뿐이고, `96px`는 원본 0회. Foundations Spacing이 스케일 값에 단위를 붙여 관측값으로 승격한 문장을 분리: 스케일은 단위 없이, 원본이 단위를 붙인 캡처만 px. 같은 기준으로 `72px`는 원본 dest 2회라 px 유지. `4px`는 원본에 단독 토큰이 없어 스케일 `xs: 4`와 `4/8/…` 표기만 유지.

### 결함 2 — copy-loss `배민프레시 대표`

원본 `:418` `조성우 (Cho Sung-woo, ex-배민프레시 대표)`를 Scope 서사에 복원. 영문 병기 `Baemin Fresh`는 유지하고 한국어 직함을 지우지 않음.

### F2 dest 재실측 (`grep -oF -e '<패턴>' <파일> | wc -l`)

이 절을 쓴 뒤 세 파일을 다시 센 값. 표의 L 칸은 이 로그가 바늘을 담으므로 0이 아닐 수 있다. DESIGN dest가 본문 생존이다.

| 바늘 | 옛 DESIGN dest | 새 DESIGN dest | provenance dest | migration-log dest |
|---|---:|---:|---:|---:|
| `96px` | 1 | 0 | 0 | 4 |
| `72px` | 4 | 5 | 0 | 7 |
| `배민프레시 대표` | 0 | 1 | 1 | 8 |
| `배민프레시` | 1 | 2 | 1 | 14 |

## F3 감사 dest 재실측 (2026-08-29)

본문 한정 확장·YAML `use` 병기 뒤 `grep -oF -- | wc -l` 파일별. 표의 L 칸은 이 로그가 바늘을 담으므로 0이 아닐 수 있다. DESIGN dest가 본문 생존이다. `check-limiter-ledger.mjs` 본문 22 = 원장 22 (184–205). `check-yaml-use-landing.mjs laundrygo` 16/16.

| 바늘 | DESIGN dest | provenance dest | migration-log dest |
|---|---:|---:|---:|
| `#0ac290` | 16 | 13 | 8 |
| `0 40px` | 1 | 0 | 2 |
| `0px 40px` | 1 | 4 | 2 |
| `Token-set use` | 8 | 1 | 2 |
| `Dark-hero headline, Pretendard SemiBold` | 1 | 0 | 2 |
| `kyeongin.com` | 0 | 1 | 2 |
| `derived editorial implementation inference` | 22 | 1 | 2 |
| `not LaundryGo-authored` | 22 | 1 | 2 |
| `96px` | 0 | 0 | 5 |
| `72px` | 5 | 0 | 8 |
| `배민프레시 대표` | 1 | 1 | 8 |
| `배민프레시` | 2 | 1 | 14 |
| `favicon_web.png` | 1 | 2 | 2 |
| `live-extract` | 0 | 2 | 5 |
| `rgba(0,0,0,0.15)` | 3 | 1 | 3 |
| `cubic-bezier` | 0 | 3 | 7 |
| `green #0ac290 text on active` | 1 | 0 | 2 |

## 개정 — 의미 검토 FAIL 4 (2026-08-29)

의미 검토가 소실로 지목한 네 결함만 고침. 토큰 값·컴포넌트 표 구조·상태 applicability·원본 미수정. 한정·원장 행 추가 없음 (22=22 유지). `on-demand logistics product`는 판정문이 별도 결함으로 세지 않아 추가하지 않음.

### 결함 1 — §11 글로벌 비전 문장 (A1)

원본 `:344` `The vision extends globally — laundry being a universal problem, LaundryGo aims to grow into a global service.` 와 같은 문단 `the change to clothing-food-housing life begins with laundry` 를 Experience Scope 미션·비전 불릿에 사실 인용으로 복원.

### 결함 2 — §11 시스템이 인코딩한 가치 목록 (A1)

원본 `:346` `The values the system encodes: convenient, considerate service; reliability proven through laundry quality; and practicality.` 를 Experience Scope 회사·리브랜드 불릿에 사실 인용으로 복원. Principles `Considerate simplicity`(원본 §12)와 합치지 않음.

### 결함 3 — §1 Pretendard hangul 근거 (A1, genie형)

원본 `:66` `the de-facto Korean product font optimized for dense hangul legibility` 를 Typography Family 현재 가시 페이스 행에 사실 인용으로 복원.

### 결함 4 — §11 창업 문장의 고유 직업 표기 (A1)

원본 `:342` `a former corporate-comms professional who had previously led 배민프레시` 를 Scope 창업 문장에 복원. 기존 `ex-배민프레시 대표`(원본 `:418`)와 병기.

### F2 dest 재실측 (`grep -oF -e '<패턴>' <파일> | wc -l`)

이 절을 쓴 뒤 세 파일을 다시 센 값. DESIGN dest가 본문 생존이다.

| 바늘 | DESIGN dest | provenance dest | migration-log dest |
|---|---:|---:|---:|
| `The vision extends globally` | 1 | 1 | 3 |
| `universal problem` | 1 | 1 | 2 |
| `global service` | 1 | 1 | 2 |
| `begins with laundry` | 1 | 1 | 2 |
| `The values the system encodes` | 1 | 1 | 3 |
| `convenient, considerate service` | 1 | 1 | 2 |
| `reliability proven through laundry quality` | 1 | 1 | 2 |
| `practicality` | 1 | 1 | 2 |
| `de-facto Korean product font optimized for dense hangul legibility` | 1 | 1 | 3 |
| `hangul` | 1 | 1 | 5 |
| `de-facto` | 1 | 1 | 4 |
| `Korean product font` | 1 | 1 | 4 |
| `former corporate-comms professional` | 1 | 2 | 3 |
| `corporate-comms` | 1 | 2 | 4 |
| `배민프레시 대표` | 1 | 1 | 8 |
| `배민프레시` | 2 | 1 | 14 |

## 개정 — 의미 검토 FAIL 1 (2026-08-29)

의미 검토가 소실로 지목한 한 결함만 고침. 토큰 값·컴포넌트 표 구조·상태 applicability·원본 미수정. 한정·원장 행 추가 없음 (22=22 유지).

### 결함 1 — §2 Pure Black 제약 (A1 · 항목 3)

원본 `:84` `Used directly (not a softened navy) for maximum-contrast headlines and body` 를 Foundations Semantic color Pure Black Recorded use에 복원. 기존 `Primary text and heading color on white sections; nav.` 는 유지(첫 문장은 원본 같은 줄, `; nav` 는 Text Hierarchy Ink 행 keep-both). provenance Claim ledger ink 행에 같은 원문 색인.

판정: **사실 인용**, 한정 불필요. 원본이 적은 사용 제약·의도를 그대로 옮긴 것이지, 값을 쓰는 규칙을 새로 읽은 것이 아니다. 원장 행 추가 없음.

### A5a dest 재실측

발행 카피 50건 DESIGN dest 각 ≥1, sibling 전용 2건 DESIGN dest 0 / provenance dest ≥1. 본문 추가 문장은 발행 바늘을 포함하지 않음. dest 횟수 불변.

### F2 dest 재실측 (`grep -oF -e '<패턴>' <파일> | wc -l`)

이 절을 쓴 뒤 세 파일을 다시 센 값. DESIGN dest가 본문 생존이다. 기존 FAIL 4 표 바늘 dest 횟수는 불변.

| 바늘 | DESIGN dest | provenance dest | migration-log dest |
|---|---:|---:|---:|
| `not a softened navy` | 1 | 1 | 3 |
| `maximum-contrast` | 1 | 1 | 3 |
| `Used directly` | 1 | 1 | 3 |

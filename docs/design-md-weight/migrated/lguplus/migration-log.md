# LG유플러스 migration log

- Source: `web/references/lguplus/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/lguplus/.verification.md` — **채택**(증거 등급). 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/lguplus/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/lguplus/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: consumer-tech (KR 통신). 토큰 표면은 공개 서비스 홈과 공개 구독 상품 상세 두 캡처. corporate About는 맥락. sibling 전용 측정(구독 구매 CTA `90px`/`15.5px`/`55px`, `Pretendard Variable`, `rgb(34, 23, 28)`)은 portable 토큰으로 올리지 않았다.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 산출 파일을 `grep`한 뒤에 썼다(F2).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`) | 분리 → provenance · `name` 옮김 → DESIGN.md H1 | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# LG유플러스 Design System`. `id`/`country`/`category`/`homepage`는 provenance Identity 표. `LG유플러스` DESIGN dest 4 · provenance dest 2. |
| YAML `primary_color: "#e6007e"` | 옮김 → Foundations Semantic color · 분리 → provenance Identity | 이중 목적지. DESIGN.md `#e6007e` 5회, provenance Identity `primary_color` 행 포함 dest 2. |
| YAML `logo.type: favicon` / Google `s2/favicons` slug | 분리 → provenance · 옮김 → DESIGN.md Assets (identity metadata only) | 이중 목적지. 3자 프록시라 1차 마크 파일이 아님. `s2/favicons` DESIGN dest 1 · provenance dest 2. |
| YAML `verified` / `omd` / `tokens.source: reconciled` / `tokens.extracted` / `components_harvested` / `verification_v2` | 분리 → provenance | freshness·증거 등급 원장(E1). `reconciled` DESIGN dest 0 · provenance dest 2. `components_harvested` DESIGN dest 0 · provenance dest 2. `ds.type` 원본 없음 — 발명 없음(A1c). |
| YAML `tokens.note` (긴 문자열) | 분리 → provenance | 원문 그대로 인용 블록. 안의 범위 문장(Home·subscription만 토큰화, corporate/newsroom/declared-only/license는 별도 스코프)은 DESIGN.md Scope·Font evidence에 별도로 실려 있다. |
| YAML `tokens.colors` (**6키** — `primary` `ink` `canvas` `muted` `soft` `border`) | 옮김 → Foundations `Semantic color` | 6키 전부. 산출 hex: `#e6007e` `#000000` `#ffffff` `#888888` `#f5f5f5` `#ebebeb`. `#222222`는 YAML 색 키가 아니라 컴포넌트 `fg` — Semantic color에서 일반 foreground로 합치지 않음(A4). canvas `#ffffff`와 CTA `fg` `#ffffff`도 합치지 않음. |
| YAML `tokens.typography.family` (`home: Pretendard`, `subscription: nskr`) + §3 Font evidence | 옮김 → Typography & Assets `Family` / `Font evidence` | 라이브 홈 페이스는 Pretendard; 구독 상세는 계산 패밀리 `nskr`(파일명은 NotoSansKR). 대체를 금지하는 경계를 `Font evidence`와 Family에 남김. |
| YAML `tokens.typography.body` / `subscription-action` (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표 | 옮김 → Typography & Assets `Type roles` | A1a: YAML `1.5`를 px로 바꾸지 않고 비율 그대로. 원본이 적은 24px는 괄호로 병기. 정보 행 21px는 원본이 px로만 적어 비율로 바꾸지 않음. YAML use 착지 DESIGN dest 각 1 — `Observed public Home body` · `Observed public subscription purchase action`. |
| YAML `tokens.spacing` 4키 (`xs: 4` `sm: 8` `md: 12` `lg: 16`) + §5 | 옮김 → Foundations `Spacing` (+ Layout & Platforms) | 이중 목적지. 스케일은 단위 없이 `xs: 4` … `lg: 16`. 원본이 단위를 붙인 캡처만 px: `4px` `8px` `12px` `16px`. `tokens.spacing.lg: 16` ≠ body 16px. Layout은 원본 `4px, 8px, 12px, and 16px` 표기를 유지. |
| YAML `tokens.rounded` 3키 (`none: 0` `row: 8` `primary-cta: 20`) | 옮김 → Foundations `Shape` (+ Components) | 이중 목적지. `none: 0` / `row: 8` / `primary-cta: 20` DESIGN dest 각 1. 로컬 수확 기하이지 전 표면 보편 스케일이 아니라는 경계를 같은 절에 남김. |
| YAML `tokens.components` 2개 (`type: button` ×1, `type: listItem` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 보존. 산출 `Primitive type: \`button\`` 1 · `listItem` 1 = YAML과 동수. YAML `use`를 각 블록 `Token-set use:` 행으로 병기(셀렉터 포함 비이스케이프 형태 DESIGN dest 각 1). YAML padding `0px 30px` / `19px`, font `16px / 400 / Pretendard` / `14px / 500 / nskr`, border `0px solid #ffffff` / `1px solid #ebebeb`는 §4 표기 옆에 병기. YAML states 문자열 DESIGN dest 1. |
| §4 Button / List item 본문 | 옮김 → Components & States | Home primary CTA · Subscription information row. `listItem` 분류와 “observed link/row, not as a button” 보존. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 4/8/12/16 로컬 클러스터, 40px/20px vs 65px/8px 평균 금지, column count / max width / authenticated checkout layout 생략. |
| §6 Responsive Behavior | 옮김 → Layout & Platforms `Responsive behavior` | `1440×900` DESIGN dest 2. 모바일 브레이크포인트·터치·safe-area·reflow는 원본대로 승격하지 않음. |
| §7 Do 4항 | 옮김 → Experience `Application rules` | 산출 4항. 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음. B2a 완전형 한정을 절 머리에 배치. |
| §7 Don't 4항 | 옮김 → Experience `Avoid` | 산출 4항. B2a 완전형 한정을 절 머리에 배치. |
| §8 Reference Implementation Notes | 옮김 → Components & States `Capture record` | A3: claim-path만 쓰라는 지시와 두 컴포넌트의 default/zero-interaction 요약은 §4에만 있는 고유 경계. 슬롯 있는 Components로 옮김. 도구 프롬프트 아님. |
| §9 Verification Scope | 분리 → provenance · 본문 경계는 Experience Scope에 이미 있음 | 패킷 경로 `artifacts/reference-evidence/lguplus.json` DESIGN dest 0 · provenance dest 2. 뉴스룸 URL은 provenance only (`news.lguplus.com/?p=19596` DESIGN dest 0 / P dest 1). 원본 §9 서술 경계의 바이트 원문은 DESIGN dest 0. Scope가 보존하는 문장은 `It does not create colors, components, states, or motion tokens` (DESIGN dest 1)와 `not evidence that all legacy pages already share a new visual system` (DESIGN dest 1). |
| §10 Voice & Tone — 공식 Simply. U+ 서술 + 파생 큐 3개 + Do/Don't 표 | 옮김 → Content & Locales | 표 3행 그대로. 큐 **plain** / **reassuring** / **next-step oriented**는 원본이 “not an approved LG U+ copy manual”이라 밝힌 계열이라 B2a 완전형 한정을 표 앞에 붙였다. |
| §10 예시 문자열 3건 | 옮김 → Content & Locales | A5: `요금제 확인하기` · `내게 맞는 혜택 보기` · `필요한 정보부터 확인하세요.` 바이트 그대로. 원본 머리말 “Illustrative, not LG U+ copy” 유지. |
| §11 Brand Narrative | 옮김 → Experience `Scope` (브랜드 서사 문단) · 출처 URL은 분리 → provenance `Narrative` | 1996, personal mobile / home internet and IPTV / smart-home / AI / enterprise, connection and practical service value, Simply. U+ 2025 (reducing customers’ complexity and discomfort, leaving the essential, trustworthy easier experiences), Simple Lab. 마지막 문장 “not evidence that all legacy pages already share a new visual system”까지 보존. URL은 provenance only. |
| §12 Principles 4항 (+ 각 UI implication) | 옮김 → Experience `Principles` | 산출 4항. B2a 완전형 한정을 머리에 배치. 제목은 공식 Simply. U+ 방향에 기대고, UI implication은 원본의 편집 읽기. |
| §13 Personas 3인 (추론 아키타입) | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 §13 머리글이 inferred service-domain archetypes이며 surveyed personas가 아니라고 명시. 식별자는 portable 본문 0회 · provenance 0회 — 처분은 원본 절과 필드 종류로만 적음. Experience `Audience`에는 공식 회사 소개가 독립적으로 세우는 서비스 범주만 남겼다. |
| §14 States 7행 | 옮김 → Components & States `Capture record` + 컴포넌트별 applicability | 이중 목적지(둘 다 portable 본문). 7행 경계 그대로(Empty · Loading · Error validation · Error service · Success · Skeleton · Disabled). graph 위임 없음. `interactionCount: 0` DESIGN dest 2. |
| §15 Motion & Easing | 옮김 → Foundations `Motion` | 원문 제약 보존: named LG U+ motion token 금지, 새 구현은 local extension. 삭제할 무출처 커브 없음(`cubic-bezier` DESIGN dest 0 · provenance dest 0). |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance Named gaps | 원본에는 승격 조건 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: 이 전문이 산출 DESIGN.md에 실제로 2회 존재함을 확인한 뒤 이 행을 적었다 (`transition properties` DESIGN dest 2). |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하 | 옮김 → Experience `Scope` | 두 공개 제품 URL을 분리 명시하고 값은 그 페이지에 붙였다. corporate About는 토큰 소스가 아님. |
| §1 인과·해석 문장(white/near-black + magenta, Simply. U+ framing) | 옮김 → Experience `Scope`, 한정 부착 | B2a 완전형 인접 배치. 원본 문장(“recognizable public expression…”, “frames the brand around reducing the complexity…”)은 사실 인용으로 같은 절에 남김. |
| §1 Observed characteristics 5항 | 옮김 → Experience `Distinctive traits` | 산출 5항. B2a 완전형 한정을 머리에 배치. |
| §4 하단 footer 블록 (**Verified** / Tier 1 3개 URL / Tier 2 attempts / Conflicts unresolved) | 분리 → provenance | freshness·출처 원장(E1). Tier 2 `getdesign.md/lguplus` DESIGN dest 0 · provenance dest 1. |
| Sibling `.verification.md` — Proof 머리말·raw samples·Tier 2·Conflict matrix | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건, 구조 분류 승격 0건**(B1). sibling 전용 `90px` `55px` `15.5px` `Pretendard Variable` `c-btn-solid-1-m`은 산출 DESIGN.md에서 각각 0회. |
| YAML Pretendard asset URL | 옮김 → Typography Family · 분리 → provenance Sources | 이중 목적지. `Pretendard-Regular.subset.woff2` DESIGN dest 1 · provenance dest 1. |

## 최종 패스 기록

**패스 1 — B2a 스캔.** 완성본을 처음부터 다시 읽고 인과·해석·판단 문장마다 근거 class를 자문했다. 한정을 붙인 자리 **22곳**을 provenance `Derived editorial inventory`에 색인했다(본문 완전형 `"derived editorial implementation inference from the verified surfaces"` + `"not LG U+-authored or a separately published UI specification"` 짝 22 = 원장 22, 170–191). F3가 같은 22자리에 이름만 넓힘: Principles stems/UI-implication 불완전 닫힘을 완전형 한 문장으로 접음 · Semantic color CTA border `#ffffff` 비합침과 Corporate About 비병합 · Spacing 로컬 클러스터 · Shape 평균 금지 · Motion 단일 커브≠게이트 · Font official-use/delivery≠ownership/OFL≠상표 · Type roles Home body≠universal scale · Capture default-geometry/zero-interaction과 `focus`≠`focus-visible`. Principles 안팎 자리 목록은 그대로: Scope 표면 귀속 · Scope 레이어 읽기 · Scope 서사 비토큰 · Primary tasks 선정 · Audience drop · Distinctive traits 분류 · Principles · Application rules · Avoid · Semantic color 비해합 · Spacing 단위/키 분리 · Shape 로컬 기하 · Motion 부재+B3 · Font evidence 분류 · Family canonical-because · Type roles keep-both · Assets 프록시 · Capture record 역할 판정/YAML keep-both · Layout 클러스터 · Responsive 뷰포트 · Content 큐 해석 · Content 한글 바이트. 1차 발행 UI 사양은 수집되지 않음 — toss형 닫힘(`not LG U+-authored or a separately published UI specification`).

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `grep -oF -- | wc -l`로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(identity name, `#e6007e`, favicon URL, spacing, rounded, woff2 URL, §14 상태). §11 출처 URL·패킷 경로·`reconciled`는 provenance only(DESIGN dest 0)이므로 이중 목적지로 적지 않음. 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 전문 2회(`transition properties`+`animation name`+`duration`+`easing`+`reduced-motion behavior` 같은 줄, Motion · Named gaps), primitive type 2종 동수, lineHeight 비율 `1.5`, YAML `use` 2/2, §14 7행, voice sample 3건, cubic-bezier DESIGN.md 0회.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| legacy 고유 hex 7종 (`#e6007e` `#000000` `#ffffff` `#888888` `#f5f5f5` `#ebebeb` `#222222`) | 7/7 이 산출 `DESIGN.md` 본문에 존재 — 손실 0. |
| portable 본문의 hex 발명 | 0건. 본문의 모든 `#rrggbb`가 legacy 토큰 집합의 부분집합. |
| unitless lineHeight (A1a) | YAML `1.5` 비율로 생존. 정보 행 `21px`는 원본 형태 유지(비율 변환 0). |
| primitive type (A1b) | button 1 · listItem 1 — legacy YAML 실측과 동수. |
| `[FILL IN]` | legacy 0건, 산출 DESIGN.md 0건. 신규 작성 없음. provenance Omission은 클래스 이름만 언급. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | 0건. `not-applicable` 행 3개는 전부 역할 사유(정보 행 destination link/row). 머리의 "Absence of a capture is not a `not-applicable` reason" 1회는 금지 사유가 아님. |
| C2 | Home primary CTA의 loading/error/success는 공개 홈 solid CTA 역할로 `applicable`(treatment 생략). 정보 행은 관측 link/row라 L/E/S `not-applicable`. primitive 일괄 개방 아님. |
| C3 | "This is not a claim that state coverage is finished." 를 Components Capture record에 명시. 완료 주장 0건. |
| C4 | 두 harvested 컴포넌트 모두 interactive-kind 근거 있음(button CTA / observed link/row). kind·map 생략 대상 없음. |
| D2 / D2a | §13 식별자 본문 0 · provenance 0. 로그에도 역할 표제를 재수록하지 않음. |
| D1 | `native-client` / `storefront` / `authenticated-account` / `product application` DESIGN dest 0. 원본이 세운 `authenticated, native-app, checkout, or support flows`만 Scope에 유지. |
| A5 발행 문자열 전수 대조 (게이트 바늘 밖까지) | legacy 본문과 sibling에서 발행 문자열 **9건**을 추출해 산출 3파일에 대조 — 미생존 **0건**. 분모는 아래 목록. |

### A5a 손 스윕 목록 (추출 9 / 미생존 0)

발행 카피만. 설명문·점 경로·폰트 스택·제3자 매체명·declared-only 페이스 이름은 바늘이 아니다.

Legacy 본문 (9): `LG유플러스` · `Simply. U+` · `Simple Lab` · `요금제 확인하기` · `내게 맞는 혜택 보기` · `필요한 정보부터 확인하세요.` · `LG U+` · `people-centred AI` · `pr-btne add`

Sibling 전용 발행 라벨: 0건 (sibling raw samples는 computed CSS이며 추가 발행 카피가 없다).

재대조: 위 9건은 DESIGN.md에서 각 ≥1회. 미생존 0.

### F2 dest 재실측 (`grep -oF -- | wc -l`)

이 절을 쓴 뒤 세 파일을 다시 센 값. DESIGN dest가 본문 생존이다.

| 바늘 | DESIGN dest | provenance dest |
|---|---:|---:|
| `#e6007e` | 5 | 2 |
| `#222222` | 4 | 4 |
| `xs: 4` | 1 | 0 |
| `1.5` | 3 | 4 |
| `Observed public Home body` | 1 | 1 |
| `Observed public subscription purchase action` | 1 | 1 |
| `16px / 400 / Pretendard` | 2 | 0 |
| `14px / 500 / nskr` | 2 | 0 |
| `s2/favicons` | 1 | 2 |
| `Pretendard-Regular.subset.woff2` | 1 | 1 |
| `요금제 확인하기` | 1 | 0 |
| `Simple Lab` | 2 | 5 |
| `transition properties` | 2 | 0 |
| `derived editorial implementation inference` | 22 | 1 |
| `not LG U+-authored` | 22 | 1 |
| `90px` | 0 | 3 |
| `Pretendard Variable` | 0 | 3 |
| `reconciled` | 0 | 2 |
| `cubic-bezier` | 0 | 0 |
| `artifacts/reference-evidence/lguplus.json` | 0 | 2 |
| `separately published UI specification` | 22 | 1 |
| `#ffffff` | 9 | 4 |
| `0px solid #ffffff` | 2 | 1 |

F3 재실측 (`grep -oF -- | wc -l`, 파일별). 본문 한정 확장 뒤: 기존 바늘 dest는 위 표와 동일하게 유지. `separately published UI specification` DESIGN dest 22 (착수 시 23 — Principles 불완전 닫힘 1회를 완전형에 접어 22=22). `#ffffff` DESIGN dest 9 / provenance dest 4 (Semantic 한정에 CTA border 귀속을 이름하면서 +1). `0px solid #ffffff` DESIGN dest 2. A5a 9바늘 DESIGN dest 각 ≥1 불변. §9 원본 서술 경계 바이트 원문은 DESIGN dest 0; Scope 실재 문장 `It does not create colors, components, states, or motion tokens` DESIGN dest 1 · `not evidence that all legacy pages already share a new visual system` DESIGN dest 2.

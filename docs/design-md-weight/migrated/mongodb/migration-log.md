# MongoDB migration log

- Source: `web/references/mongodb/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/mongodb/.verification.md` — **존재함** (`find web/references/mongodb -type f`로 확인), 전문 판독, **증거 등급으로만 채택**. 상세는 provenance `Sibling handling`.
- Destination: `docs/design-md-weight/migrated/mongodb/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/mongodb/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, claim `lang` 모두 `en`
- 도메인: backend-devops. **증거 영역이 셋**이다 — 퍼블릭 마케팅(`https://www.mongodb.com/`), 발행 디자인 시스템 LeafyGreen(`https://www.mongodb.design/`), 퍼블릭 문서 chrome(`https://www.mongodb.com/ko-kr/docs/`). 원본이 세 영역을 분리했고, 이관본도 값마다 도메인을 붙여 병합하지 않았다. LeafyGreen은 발행 1차 UI 사양이므로 B2a는 그 사양을 이름 붙여 닫는다.

Source SHA-256 `050b4ffb40b741b5c05028199d3945c593d9cfd6d48833beb6b6d1ebb6216c2f`. Sibling SHA-256 `2a2c1f5fd128de72f036c24a178ca193515b6bdd09ac8c8362d0b93b40bc3e71`. Worker-close portable DESIGN SHA-256 `29a67efeaa47e741a6fde8d2c0f8b259cea74be01eb022de87b7f07ed68c61df`. Provenance SHA-256 `9244b5b7ba14130b442a9361067e10f6610c2b4279703608a16b1729ede73b5e`.

Every destination line below was checked with `grep -oF` against the output files before it was written (F2). Counts use `grep -oF … | wc -l`, never `grep -c`.

## A5a — 발행 카피 손 대조 (규칙집 v11)

`node test-v2/tools/latin-copy-audit.mjs --brand mongodb`: candidates **35**, lost **2** (medium): `interactions[]`, `omd:add-reference UPDATE`. 둘 다 브랜드 발행 카피가 아니다 — sibling 파이프라인/메서드 문자열. 처분: portable 본문에 승격하지 않음; sibling 원장에만 남김.

손 스윕 (원본 본문 인용 + sibling 인용 중 브랜드 발행 문자열):

| 단계 | 수치 |
|---|---|
| 추출 (원본 본문 인용 문자열) | **10** (`Get Started` ×2, `Our journey`, North Star 문장, YAML use 3종, 기타 URL/hex는 바늘 아님) |
| 그중 브랜드 발행 문자열 | **4** 인용 + 손 추가 패밀리/사명/미션/창립자/색 이름 **17** = **21** 바늘 |
| 미생존 | **0** |
| 처리 | 21건 전부 산출 `DESIGN.md`에 바이트 생존 (`Get Started` dest **3**, `Our journey` dest **1**, North Star 문장 dest **1**, `Empower innovators by unleashing the power of software and data.` dest **1**). latin-audit 2건은 바늘이 아님. |

`verdict` 분모: 손 스윕 21/21 생존. latin-audit 35 후보는 카피 바늘이 아니다.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# MongoDB Design System` (`DESIGN.md` 1). `homepage` / `primary_color` `#00ed64`는 provenance Identity와 DESIGN.md Scope·Foundations 양쪽 (`#00ed64` dest **7**). `logo.type: simpleicons` / `slug: mongodb`는 DESIGN.md Assets 174와 provenance Identity (E2a). |
| YAML `omd` / `verified` / `verification_v2` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). A1c: `components_harvested: true`, `tokens.source: live-extract`를 Identity 표에 둠. |
| YAML `ds.name` LeafyGreen / `ds.url` / `ds.type: system` / `ds.description` | 분리 → provenance · 사실 옮김 → Scope | 이중 목적지. `ds.type` dest DESIGN.md **1** (`ds.type` is `system`) · provenance **2**. YAML description “MongoDB's open-source design system and React component library” dest DESIGN.md Scope 9. |
| YAML `tokens.colors` (11키) | 옮김 → Foundations Semantic color | 11 경로 전부 DESIGN.md에 1회 이상: `tokens.colors.primary` `navy` `forest-chrome` `link` `canvas` `ink` `feature-border` `docs-canvas` `docs-border` `docs-muted` `docs-inverse` 각 dest **1**. Hex (`grep -oF` / `wc -l`, 파일별): `#00ed64` dest **7**, `#001e2b` dest **10**, `#00684a` dest **6**, `#006cfa` dest **1**, `#ffffff` dest **5**, `#000000` dest **4**, `#e7eeec` dest **4**, `#f9fbfa` dest **2**, `#889397` dest **3**, `#3d4f58` dest **4**, `#112733` dest **5**. `#e8edeb`은 YAML color 키가 아니고 dest **3** (Semantic color B2a 73 · Feature border 88 · icon-control Border 270). 병합하지 않음 (A4). |
| YAML `tokens.typography.family` 3키 | 옮김 → Typography Family | `tokens.typography.family.ui` / `display` / `mono` 각 dest **1**. `Euclid Circular A` dest **12**, `MongoDB Value Serif` dest **7**, `Source Code Pro` dest **16**. |
| YAML `tokens.typography.hero` / `primary-action` / `docs-control` + §3 표 6행 | 옮김 → Typography Type roles | YAML use 3종 바이트 보존: `Public home marketing H1` dest **1**, `Public home and documentation primary action` dest **1**, `Small documentation control` dest **1**. A1a: YAML lineHeight `72` / `16` / `20` 단위 없이 경로 줄에 보존, 표는 `72px` / `16px` / `20px`. tracking `0.16` dest **4** 옆 `0.16px` dest **2**. §3 표가 긴 쪽: Public section heading `36px` dest **1**, code/value `400–500` / `16–24px` / `1–2px` 각 dest **2**. `48px` dest **4** — LeafyGreen page title size **1** (167), Public section heading line-height **1** (165), feature-panel padding `40px 48px` **2** (224, 226). page-title `48px`만 dest **4**가 아니다. |
| YAML `tokens.spacing` 4키 + §5 Measured spacing | 옮김 → Foundations Spacing (+ Layout) | 이중 목적지. `primary-action-y: 15` dest **2**, `primary-action-x: 24` dest **2**, `docs-side-y: 16` dest **2**, `docs-side-x: 24` dest **2**. `15px 24px` dest **3**, `16px 32px` dest **2**, `16px 24px` dest **2**, `8px 16px` dest **2**. 15≠16, 24≠32, spacing 16 ≠ type 16. |
| YAML `tokens.rounded` 3키 + §5 Shape boundary | 옮김 → Foundations Shape | `primary-action: 4` dest **1**, `docs-control: 6` dest **1**, `docs-icon: 9999` dest **1**. 컴포넌트 `100%` dest **4**와 `9999`를 병합하지 않음. Feature panel `40px`는 `tokens.rounded` 키가 아님. LeafyGreen utility `50px` dest **4**도 `tokens.rounded` 키 아님. |
| YAML `tokens.components.marketing-feature-panel` (`type: card`) | 옮김 → Components Public marketing feature panel | A1b: `Primitive type: \`card\`` dest **1** at 218. 경로 `tokens.components.marketing-feature-panel` dest **3**. YAML use `Observed public-home feature panel` dest **1**. 다른 §4 컨트롤 4개는 `not in the token set` dest **5**. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope 9–13, traits 30–37. 세 표면, `authenticated Atlas UI` dest **1**, navy-and-spring-green dest **2**, strong rectangular actions dest **2**, mixed typographic voice dest **2**. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | DESIGN.md 71–90. Spring Green / MongoDB Navy / Forest Green chrome / Link Blue / Documentation canvas·border·muted / LeafyGreen inverse canvas. “complete application semantic palette” dest **3**. |
| §3 Typography Rules | 옮김 → Typography & Assets | Evidence classes 133–143 (표 135–141, B2a 143). `287 visible uses` dest **1**. `SIL Open Font License 1.1` dest **1** (139). `OFL 1.1` dest **1** (143 B2a). 로그가 쓰던 `SIL OFL 1.1`은 DESIGN.md dest **0** — 그 약칭은 본문에 없다. Akzidenz-Grotesk Std dest **3**, Noto CJK dest **3**, Times/Arial dest **3**. Family 145–151. Type roles 153–170. |
| §3 Source Code Pro license URL | 분리 → provenance · 라이선스 문장 옮김 → Font evidence | 이중 목적지. OFL 1.1 본문 dest **1**; URL은 provenance Sources. |
| §4 Component Stylings 5레코드 | 옮김 → Components & States | Public primary action 191–213 (`home::[data-omd-capture="11"]` dest **3**). Feature panel 215–238 (`home::[data-omd-capture="15"]` dest **1**). Docs compact 240–261 (`surface-3::[data-omd-capture="21"]` dest **1**). Docs icon 263–285 (`surface-3::[data-omd-capture="22"]` dest **1**, `#e8edeb` dest **3**, `1px 6px` dest **1**, icon shadow `rgba(0, 30, 43, 0.1) 0px 3px 4px 0px` dest **2**). LeafyGreen utility 287–309 (`surface-2::[data-omd-capture="48"]` dest **1**, `50px` dest **4**). Selectors dual: 본문 Use + provenance Capture selectors (E2a). |
| §4 `interactionCount: 0` 문장 | 옮김 → Capture record | dest **2** (Capture record + Named gaps). |
| §5 Layout Principles | 옮김 → Foundations Spacing/Shape + Layout | Layout 311–322. “source-domain contexts” 보존. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | 119–121. 두 그림자 로컬. `No general elevation ladder` dest **1**. |
| §7 Do's | 옮김 → Experience Application rules | 48–55, 4항. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience Avoid | 57–65. 원문 4항 + §9 고유 제약 1항 (marketing card geometry dest **2**). 발명 도메인 없음: `native application` / `mobile app` / `product application` / `back-office` / `measures 1440px` / `does not say` 전부 dest **0** / src **0**. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | 311–322. 원문 “The supplied evidence is a 1440×900 capture. It establishes no responsive breakpoint, mobile layout, touch-target, or collapse behavior claim.” 보존. `1440×900` dest **2**. 원본이 세운 네 이름을 부정 claim으로 새로 만들지 않았고, 원문 문장을 옮겼다. |
| §9 Agent Prompt Guide | 삭제 + 고유 제약 1건 이동 (A3) | 도구용 재진술 삭제. 고유 문장 “choose only the separately documented controls rather than importing marketing card geometry by default”는 Avoid 65. 나머지 값(`#00ed64`, `#001e2b`, 4px, Euclid 16px/500, Value Serif headline, Source Code Pro label)은 이미 Foundations/Typography/Components에 있음. provenance §9 deletion check. |
| §10 Voice & Tone | 옮김 → Content & Locales | 325–340 (340 `Reproduce those strings byte-exact rather than translating or re-casing them.`). 표 3행 + 샘플 3건 바이트 보존. `Get Started` dest **3**, `Our journey` dest **1**, North Star 문장 dest **1**. |
| §11 Brand Narrative | 옮김 → Experience Scope ¶3 | 13행. 문단 **마지막 문장까지**: “Its current account presents Atlas as the unified developer data platform that carries forward that developer-first direction across cloud providers and on-premises workloads.” dest **1**. 연도 2007/2009/2013 dest 각 **3**. Dwight Merriman / Eliot Horowitz / Kevin Ryan / DoubleClick / 10gen / 400,000 ads per second 각 dest **1** 이상. §1 서사도 같은 문단에: `origin story is equally developer-centred` dest **1**, `Today Atlas joins data services into a unified developer data platform` dest **1**. |
| §12 Principles | 옮김 → Experience Principles | 39–46. 4항 + UI implication. B2a 완전형 절 머리 41. |
| §13 Personas | 옮김 → Experience Audience (삭제·재수록 아님) | 원본 머리글이 “stakeholder groups named by MongoDB’s official company and story materials, not fictional user profiles”라고 명시. 그룹 라벨 원문 그대로: `Developers and builders` dest **1** / src **1**, `Innovators and application teams` dest **1** / src **1**, `Organizations operating across environments` dest **1** / src **1**. 이름·나이·도시 없음. 동기를 Primary tasks로 바꾸지 않음 (D2/D2a 해당 없음; 가상 전기 없음). |
| §14 States | 옮김 → Capture record + 컴포넌트별 applicability | “These states are intentionally omitted rather than reconstructed from public baseline screenshots.” dest **1** (183). Named gaps 377은 “They are intentionally omitted rather than reconstructed from public baseline screenshots.” dest **1** — 주어가 달라 같은 문자열이 아니다. 공통 어간 `intentionally omitted rather than reconstructed from public baseline screenshots` dest **2**. C1: `not captured`를 `not-applicable` 사유로 쓰지 않음. C2: loading/error/success는 destination header action / role-button panel / chrome control 역할 사유로 `not-applicable`. C3: “This is not a complete state-coverage claim.” dest **1**. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion | “No duration, easing curve, or reduced-motion behavior was captured. No motion token is asserted.” dest **1** (123). Named gaps 383은 두 문장 전문이 아니라 `No motion token is asserted`만. 그 부분문자열 dest **2**. 무출처 커브 없음 (삭제할 값 없음). |
| B3 승격 조건 | 본문 작성 → Foundations Motion (+ Named gaps) | E2c: 다섯 증거 종류 전문 “transition properties, animation name, duration, easing, and reduced-motion behavior” dest **2** (127, 383). 약화 문구 없음. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | Freshness·Sources. Tier 1 URL과 company/our-story는 Scope에도 있음 (E2a). |
| Sibling `.verification.md` | 분리 → provenance Sibling handling | 증거 등급만. portable 승격 0건. sibling-only: LeafyGreen h1 `rgb(232, 237, 235)` dest **0** / prov **3**; tab `data-omd-capture="23"` dest **0** / prov **1**; `ChartsIcons` dest **0** / prov **1**; Euclid `19 source URLs` dest **0** / prov **1**; Akzidenz `55`는 provenance 127만. |

## 규칙 대조 (본문 실재 확인 후에만 기재)

| 조항 | 이 이관에서의 처리 | 실측 근거 |
|---|---|---|
| A1 | 검증된 값 손실 0. `[FILL IN]` 0. | Portable Core placeholders 0. YAML 11색·3패밀리·3타입역할·4 spacing·3 rounded·1 컴포넌트 경로 dest≥1. |
| A1a | YAML lineHeight 단위 없이 보존. | `lineHeight \`72\`` dest **1**; 표 `72px` 병기. |
| A1b | `type: card`만 feature panel에. | `Primitive type: \`card\`` dest **1** at 218. 다른 4개 `not in the token set`. |
| A1c | `ds.type: system`, `components_harvested: true`, `tokens.source: live-extract` 원장. | provenance Identity. |
| A2 | §14 본문 보존. §9 도구 문장 삭제, 보편 규칙은 Governance 통제 문구만. | Capture record 183; Governance 통제 4문. |
| A3 | §9 고유 제약 이동. | Avoid 65 `marketing card geometry` dest **2**. |
| A4 | 컴포넌트 필드를 일반 역할로 합치지 않음. | `#3d4f58` muted vs utility bg; `#00684a` chrome vs icon text; `#e7eeec` ≠ `#e8edeb`. |
| A5 / A5a | 발행 카피 바이트 보존. | 손 스윕 21/21. |
| B1 | Generic Focus를 focus-visible treatment로 쓰지 않음. | Capture record 185. |
| B2 / B2a | 완전형 22건, LeafyGreen 사양 이름 포함. | dest inference **22** = not-authored **22** = provenance inventory **22**. |
| B3 | 다섯 증거 종류 + 컴포넌트별 computed 관측 게이트. | dest **2** at 127, 383. |
| C1–C4 | 미관측≠비적용. 역할 사유. coverage 완료 주장 없음. YAML type 없는 컴포넌트는 primitive type 생략. | Capture record 185–189; 상태 표 5개. |
| D1 / D1a | 원본에 없는 도메인 부정 claim 없음. | `native application` 등 dest **0**. |
| D2 / D2a | 가상 페르소나 없음. 공식 그룹 라벨만 Audience. | 세 라벨 src **1** / dest **1**. provenance Item에 이름·나이·도시 없음. |
| E1 | 원장·freshness·Proof는 provenance. 권위 한정은 본문. | 본문 B2a 22; provenance Identity/Freshness/Sibling. |
| E2 / E2a–d | 이중 목적지 병기. 부재 단언이 자기 나열을 분모에 넣지 않음. | 이 표. |
| E3 | 값 표기 왜곡 없음. | hex 원문 그대로. |

## Wave 43 unique-expression contrast

Pulled **96** unique source expressions (years, proper names, quotes, §11 causal last sentence, value qualifiers, §15/§5/§7 constraints). `grep -oF` dest **0** after first draft: **2** (`origin story is equally developer-centred`; `Today Atlas joins data services into a unified developer data platform`). Restored into Scope ¶3 before submit. Remaining dest **0** among the 96: **0**. Sibling-only strings (`rgb(232, 237, 235)`, `ChartsIcons`, `aria-selected`, `19 source URLs`) were not in the 96 and stay provenance-only.

Contrast line: **96 pulled / 2 restored / 0 remaining at 0**.

# Liner migration log

- Source: `web/references/liner/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/liner/.verification.md` — **채택**(증거 등급). 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/liner/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/liner/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: ai (KR AI search/research copilot). 토큰 표면은 공개 홈 `https://liner.com` + 가격 `https://liner.com/pricing`. `https://liner.com/blog` 은 브랜드 서사(「스타트업에서 제한된 리소스로 디자인 시스템 개발하기」). YAML `ds.type` 없음 — 발행 1차 DS 사양 없음. sibling 전용 측정(`3.35544e+07px`, `© 2026 Liner. All Rights Reserved.`, bgFreq/fgFreq `rgb()` 카운트)은 portable 토큰으로 올리지 않았다. 게이트 copy-loss `compared` 2 / `candidates` 167. A5a 손 대조 발행 카피 아래 목록 / 미생존 0.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 산출 파일을 `grep`한 뒤에 썼다(F2).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`) | 분리 → provenance · `name` 옮김 → DESIGN.md H1 · `display_name_kr` 옮김 → Experience Scope | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Liner Design System`. `라이너` DESIGN dest 1 · provenance dest 1. `id`/`country`/`category`/`homepage`는 provenance Identity 표. |
| YAML `primary_color: "#197b2e"` | 옮김 → Foundations Semantic color · 분리 → provenance Identity | 이중 목적지. DESIGN.md `#197b2e` dest **18**, provenance dest **7**. |
| YAML `logo.type: favicon` / `https://www.google.com/s2/favicons?domain=liner.com&sz=128` | 분리 → provenance · 옮김 → DESIGN.md Assets (identity metadata) | 이중 목적지. Google favicon-service URL이지 `liner.com` 1차 파일이 아님. 해당 URL DESIGN dest 1 · provenance dest 1. |
| YAML `verified` / `added` / `omd` / `tokens.source: live-extract` / `tokens.extracted` / `tokens.note` / `components_harvested` | 분리 → provenance | freshness·증거 등급 원장(E1). `live-extract` DESIGN dest 0 · provenance dest 2. `components_harvested` DESIGN dest 0 · provenance dest 2. |
| YAML `ds.*` | 없음 | 원본에 `ds.type` 필드 없음. A1c 대상 없음. provenance가 부재를 기록(`ds.type` DESIGN dest 0 · provenance dest 4, 부재 서술). |
| YAML `tokens.colors` (**10키** — `primary` `primary-dark` `primary-tint` `ink` `muted` `canvas` `surface` `surface-alt` `on-primary` `warning`) | 옮김 → Foundations `Semantic color` | 10키 전부. 산출 hex: `#197b2e` `#14371b` `#edf3ed` `#1e1e1f` `#6d6d70` `#ffffff` `#f9f9fa` `#f6f6f7` `#fe8f16`. canvas `#ffffff`와 on-primary `#ffffff`를 합치지 않음(A4). ink `#1e1e1f`와 본문 `#000000`을 합치지 않음. surface `#f9f9fa`와 surface-alt `#f6f6f7`를 합치지 않음. warning `#fe8f16`를 일반 error로 승격하지 않음. |
| §2 Pure Black `#000000` | 옮김 → Foundations Recorded body writings | YAML 키가 아님. DESIGN dest **10** · provenance dest **6**. Unique §9 `#000000` nav links DESIGN dest **3** · provenance dest **3** (Nav link role + Pure Black + Type roles limiter). |
| YAML `tokens.typography` family + 8 roles (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표 | 옮김 → Typography & Assets `Type roles` / `Family` | A1a: YAML `1.1` · `1.19` · `1.21` · `1.35` · `1.25` · `1.5` · `1.33` · `1.29`를 px로 바꾸지 않고 비율 그대로. YAML use 8/8 착지 DESIGN dest 각 1. Unique §9 Plan name 17px Pretendard JP Variable 400 DESIGN dest **3** · provenance dest **3** (Type roles limiter + Additional + Pricing plan card). `17px` DESIGN dest **4** (Feature H3 표 1 + Plan name 3). `#1e1e1f` DESIGN dest **12** · provenance dest **5**. |
| Hero subtitle 24px (HTML comment + §9 + sibling) | 옮김 → Typography & Assets Type roles | YAML 키 아님. A3: §9 전용 값이 아님(comment·sibling에도 있음). 24px DESIGN dest ≥1. |
| YAML `tokens.spacing` (xs 4 … xxl 40) | 옮김 → Foundations `Spacing` | 단위 없는 YAML 스텝을 §5 px 목록 옆에 병기. spacing 8을 rounded.sm 8과 합치지 않음(A4). |
| YAML `tokens.rounded` sm 8 / md 12 / lg 200 / full 9999 | 옮김 → Foundations `Shape` (+ Components) | 이중 목적지(값). 로컬 기하로 한정. |
| YAML `tokens.shadow.none` / `subtle` | 옮김 → Foundations `Elevation` | `box-shadow: none` DESIGN dest 2 · provenance dest 1. `0 1px 4px rgba(0,0,0,0.08)` DESIGN dest 4. |
| YAML `tokens.components` 10개 (`type: button` ×4, `tab` ×2, `toggle` ×1, `card` ×2, `badge` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 보존. 산출 `Primitive type: \`button\`` 4 · `tab` 2 · `toggle` 1 · `card` 2 · `badge` 1 = YAML과 동수. YAML `use`를 각 블록 Token-set use 행으로 병기. |
| §4 Default Search / Form input | 옮김 → Components & States | YAML 컴포넌트 키 없음. `#f9f9fa` / `rgba(109, 109, 112, 0.12)` / 8px. primitive type 발명 없음. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 4px base, 4-column pricing, 36px nav, 40px/48px heights, whitespace notes. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Flat / Surface `#f9f9fa` / Card shadow 표. |
| §7 Do 8항 | 옮김 → Experience `Application rules` | 산출 8항. 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음. B2a 완전형 한정을 절 머리에 배치. |
| §7 Don't 7항 | 옮김 → Experience `Avoid` | 산출 7항. B2a 완전형 한정을 절 머리에 배치. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms `Responsive behavior` | 원본 표 Mobile `<640px` / Tablet `640-1024px` / Desktop `1024px+`. 터치 40px/48px/36px. 원본 표이지 live computed breakpoint가 아님을 한정. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. 겹치는 `#197b2e` / Flare 54px / 200px pill / 24px subtitle 은 이미 Foundations/Components/Typography에 있음. Unique §9 Plan name 17px Pretendard JP Variable 400 DESIGN dest **3** · provenance dest **3** (Type roles Additional + Pricing plan card + limiter; Feature H3 17px와 합치지 않음). Unique §9 `#000000` nav links DESIGN dest **3** · provenance dest **3** (Nav link Notes + Pure Black + limiter; hero pill·product-tab `#000000`과 합치지 않음). |
| §10 Voice & Tone — 표 + 라이브 샘플 3건 + forbidden register | 옮김 → Content & Locales | “Accurate AI agents built for smarter work” · “Meet AI agents purpose-built for professionals to search smarter, research deeper, and write better” · “Why pro is built for serious research” 바이트 그대로(A5). “제한된 리소스로 디자인 시스템 개발하기” 바이트 그대로. B2a 완전형 한정을 표 앞에 붙였다. |
| §11 Brand Narrative | 옮김 → Experience `Scope` (브랜드 서사 문단) · 블로그 URL은 분리 → provenance `Narrative` | 2016, highlighter 이름, 11M+, Search/Research/Write, “Inside the AI Search Engine 11M+ People Trust”, “스타트업에서 제한된 리소스로 디자인 시스템 개발하기”, digital analog, yellow line, physical page, passive curation, active cognition assistance, anti-hallucination, chosen moat, epistemic trustworthiness. 고유 8바늘 DESIGN dest 각 **2** · provenance dest 각 **3**. `https://liner.com/blog` DESIGN dest 2 · provenance dest 5. |
| §12 Principles 5항 (+ 각 UI implication) | 옮김 → Experience `Principles` | 산출 5항. B2a 완전형 한정을 머리에 배치. |
| §13 Personas 4 가상 아키타입 (이름·나이·도시 포함) | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 §13 머리글이 fictional archetypes라고 명시. Experience `Audience`에는 원본이 독립적으로 세우는 그룹 수준 맥락(professionals, academics, knowledge workers)만 남겼다. 식별자는 DESIGN dest 0 · provenance dest 0 · 이 로그 dest 0. |
| §14 States 10행 | 옮김 → Components & States `Capture record` + 컴포넌트별 applicability | 이중 목적지(둘 다 portable 본문). Empty×2 · Loading×2 · Error×2 · Success · Skeleton · Disabled · Focus 경계 그대로. graph 위임 없음. generic Focus `2px` `#197b2e`는 `focus-visible`로 승격하지 않음(B1). |
| §15 Motion & Easing — durations / named roles / signature / reduced-motion | 옮김 → Foundations `Motion` | 100ms / 200ms / 300ms 유지(T1-3 제약 5). `prefers-reduced-motion: reduce` DESIGN dest 1. `motion-fast / ease-standard` · `motion-slow / ease-enter` 유지. |
| §15 무출처 cubic-bezier 3값 | 삭제(커브 값 경계) · 역할명·Use는 유지 · 원장은 생략 값을 보관 | `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` 은 템플릿 예시와 일치. 나머지 두 커브는 live computed 증거 없음. 세 값은 생략 표기로 DESIGN Motion에 남고 provenance Omission에도 있음. 승격 토큰 아님. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance Named gaps | 원본에는 다섯 증거 종류 게이트 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: 이 전문이 산출 DESIGN.md에 실제로 존재함을 확인한 뒤 이 행을 적었다 (`transition properties` DESIGN dest 2). |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하 | 옮김 → Experience `Scope` | `https://liner.com` / `https://liner.com/pricing` 를 토큰 표면으로, blog를 서사로 분리 명시. |
| §1 인과·해석 문장(quiet authority, one-action-one-color, serif/sans duality) | 옮김 → Experience `Scope`, 한정 부착 | B2a 완전형 인접 배치. 원본 측정 문장은 사실 인용으로 같은 절에 남김. |
| §1 Key Characteristics 8항 | 옮김 → Experience `Distinctive traits` | 산출 8항. B2a 완전형 한정을 머리에 배치. |
| §3 Typography principles 4항 | 옮김 → Typography & Assets Type roles 아래 | B2a 완전형 한정. |
| §4 하단 footer 블록 (**Verified** / Tier 1 3개 URL / Tier 2 attempts / Conflicts unresolved) | 분리 → provenance | freshness·출처 원장(E1). Tier 2 `getdesign.md/liner` DESIGN dest 0 · provenance dest 1. |
| Sibling `.verification.md` — Proof 머리말·raw samples·Tier 2·Conflict matrix | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건, 구조 분류 승격 0건**(B1). sibling 전용 `3.35544e+07px` DESIGN dest 0 · provenance dest 4. `© 2026 Liner. All Rights Reserved.` DESIGN dest 0 · provenance dest 1. |

## 최종 패스 기록

**패스 1 — B2a 스캔.** 완성본을 처음부터 다시 읽고 인과·해석·판단 문장마다 근거 class를 자문했다. 한정을 붙인 자리 **24곳**을 provenance `Derived editorial inventory`에 색인했다(본문 완전형 `"derived editorial implementation inference from the verified surfaces"` + `"not Liner-authored or a separately published UI specification"` 짝 24 = 원장 24). F3가 자리 수를 늘리지 않고 기존 완전형 8곳을 접어 넣음: Scope `:13` 홈헤드라인 `accurate` 비토큰 · Principles `:45` stems+UI implication 불완전 닫힘 접음 · Semantic `:84` Outline CTA / billing-toggle / badge `#ffffff` 비해합 · Spacing `:108` 36/40/48/44 로컬 기하≠스케일 · Motion `:155` 템플릿 `ease-exit`≠live-computed + 단일 커브≠게이트 · Font evidence `:165` official-use/FontFaceSet/`sans-serif` fallback · Family `:182` body≠ui 스택 · Capture `:226` YAML `active` + product-level 처리. Principles 안팎: Scope 표면 귀속 · Scope 레이어 읽기 · Scope 서사 비토큰 · Primary tasks 선정 · Audience drop · Distinctive traits 분류 · Principles · Application rules · Avoid · Semantic color 비해합 · Spacing keep-both · Shape 로컬 기하 · Elevation 플랫 · Motion 커브 생략+B3 · Font evidence 분류 · Family unresolved specimen URL · Type roles keep-both · Type principles · Assets 파비콘 · Capture record 역할 판정/YAML keep-both · Layout 클러스터 · Whitespace notes · Responsive 표 · Content 큐 해석. 발행 1차 DS 사양 없음 — 예문 형태 `not Liner-authored or a separately published UI specification`.

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `str.count`로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(identity name, `#197b2e`, favicon URL, blog URL, §14 상태, B3, 생략 커브). `live-extract` · `ds.type` 부재 서술 · `3.35544e+07px` 는 provenance only(DESIGN dest 0). 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 전문 2회(`transition properties`+`animation name`+`duration`+`easing`+`reduced-motion behavior`, Motion · Named gaps), primitive type 5종 동수, lineHeight 비율 8종, YAML `use` 10/10 + typography use 8/8, §14 10행, cubic-bezier는 생략 표기만.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| legacy 고유 hex 10종 (`#197b2e` `#14371b` `#edf3ed` `#1e1e1f` `#6d6d70` `#ffffff` `#f9f9fa` `#f6f6f7` `#fe8f16` `#000000`) | 10/10 이 산출 `DESIGN.md` 본문에 존재 — 손실 0. |
| portable 본문의 hex 발명 | 0건. 본문의 모든 `#rrggbb`가 legacy 토큰 집합의 부분집합. |
| unitless lineHeight (A1a) | YAML `1.1` dest 4 · `1.19` 2 · `1.21` 2 · `1.35` 2 · `1.25` 2 · `1.5` 2 · `1.33` 2 · `1.29` 2 비율로 생존. |
| primitive type (A1b) | button 4 · tab 2 · toggle 1 · card 2 · badge 1 — legacy YAML 실측과 동수. |
| `[FILL IN]` | 원본 0건, 산출 DESIGN.md 0건. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | 0건. `not-applicable` 행은 전부 역할 사유(destination CTA · tab · toggle · query field). 머리의 "Absence of a capture is not a `not-applicable` reason" 1회는 금지 사유가 아님. |
| C2 | Primary Get Pro / Get Max 의 loading/error/success는 upgrade commit으로 `applicable`. Outline/Ghost/Hero pill 의 L/E/S는 destination 역할로 `not-applicable`. 두 tab과 billing toggle의 L/E/S는 tab/toggle 역할로 `not-applicable`. Search input error는 form field로 `applicable`, loading/success는 query-field 역할로 `not-applicable`. primitive 일괄 개방 아님. `loading \| applicable` dest 1 · `loading \| not-applicable` dest 7 · `error \| applicable` dest 2 · `error \| not-applicable` dest 6. |
| C3 | "This is not a complete state-coverage claim." 를 Components Capture record에 명시. 완료 주장 0건. |
| C4 | Pricing card · Feature card · Promo badge 는 `Kind: non-interactive` dest 3, applicability map 없음. Search input은 YAML type이 없으나 §4가 입력 필드로 관측 — kind interactive, type 발명 없음. |
| D2 / D2a | §13 식별자·동기 스케치·소속 분류 본문 0 · provenance 0 · 이 로그 0. 삭제 행은 절·인원·필드 종류만. 발행 한국어 원형 라벨은 원본에 없음. |
| D1 | `native-client` / `storefront` / `authenticated` / `native-app` / `mobile app` DESIGN dest 0. 원본이 세운 homepage / pricing / blog / Mobile `<640px` 만 유지. |
| A5 발행 문자열 전수 대조 (게이트 바늘 밖까지) | legacy 본문과 sibling에서 발행 문자열을 추출해 산출 3파일에 대조 — 미생존 **0건**. 분모는 아래 목록. 게이트 compared 2 / candidates 167. |

### A5a 손 스윕 목록 (추출 23 / 미생존 0)

발행 카피만. 설명문·점 경로·폰트 스택·제3자 매체명·declared-only 페이스 이름은 바늘이 아니다.

Legacy 본문 (22): `라이너` · `스타트업에서 제한된 리소스로 디자인 시스템 개발하기` · `제한된 리소스로 디자인 시스템 개발하기` · `Get started` · `Get Pro` · `Get Max` · `Start for free` · `Contact us` · `Contact Liner` · `Save 20%` · `Accurate AI agents built for smarter work` · `Meet AI agents purpose-built for professionals to search smarter, research deeper, and write better` · `Why pro is built for serious research` · `Get accurate answers. Skip forward to relevant results.` · `Inside the AI Search Engine 11M+ People Trust` · `AI agents for professionals \| Search, academic research, write with Liner` · `Liner pricing plan` · `No results` · `Search.` · `Research.` · `Write.` · `Building a design system with limited startup resources`

Sibling 전용 발행 라벨 (1): `© 2026 Liner. All Rights Reserved.`

재대조: 위 레거시 22건은 DESIGN.md에서 각 ≥1회. sibling 전용 1건은 provenance dest 1. 미생존 0.

### F2 dest 재실측 (`grep -oF -- | wc -l`, 파일별)

본문 한정 확장 뒤 세 파일을 다시 센 값. DESIGN dest가 본문 생존이다. 로그 mention은 use가 아니다.

| 바늘 | DESIGN dest | provenance dest |
|---|---:|---:|
| `#197b2e` | 18 | 7 |
| `#14371b` | 8 | 9 |
| `#edf3ed` | 4 | 1 |
| `#1e1e1f` | 12 | 5 |
| `#000000` | 10 | 6 |
| `digital analog` | 2 | 3 |
| `yellow line` | 2 | 3 |
| `physical page` | 2 | 3 |
| `passive curation` | 2 | 3 |
| `active cognition assistance` | 2 | 3 |
| `anti-hallucination` | 2 | 3 |
| `chosen moat` | 2 | 3 |
| `epistemic trustworthiness` | 2 | 3 |
| `Plan name 17px Pretendard JP Variable 400` | 3 | 3 |
| `` `#000000` nav links `` | 3 | 3 |
| `#ffffff` | 13 | 5 |
| `#f9f9fa` | 13 | 1 |
| `#fe8f16` | 3 | 1 |
| `1.1` | 4 | 4 |
| `1.5` | 2 | 2 |
| `1.33` | 2 | 2 |
| `100ms` | 1 | 3 |
| `Primary CTA — Get started / Get Pro / Get Max` | 1 | 0 |
| `https://www.google.com/s2/favicons?domain=liner.com&sz=128` | 1 | 1 |
| `Accurate AI agents built for smarter work` | 3 | 2 |
| `스타트업에서 제한된 리소스로 디자인 시스템 개발하기` | 2 | 2 |
| `라이너` | 1 | 1 |
| `transition properties` | 2 | 0 |
| `derived editorial implementation inference` | 24 | 1 |
| `not Liner-authored` | 24 | 2 |
| `separately published UI specification` | 24 | 2 |
| `live-extract` | 0 | 2 |
| `3.35544e+07px` | 0 | 4 |
| `© 2026 Liner. All Rights Reserved.` | 0 | 1 |
| `cubic-bezier(0.4, 0.0, 1, 1)` | 2 | 1 |
| `loading \| applicable` | 1 | 0 |
| `loading \| not-applicable` | 7 | 0 |
| `36px` | 5 | 1 |
| `tokens.components.badge-warning` | 1 | 2 |

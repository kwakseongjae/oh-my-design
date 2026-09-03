# NRISE (WIPPY) migration log

- Source: `web/references/nrise/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/nrise/.verification.md` — **채택**(증거 등급). 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/nrise/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/nrise/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: consumer-tech (KR). 토큰 표면은 법인 홈 `https://www.nrise.net/` 과 WIPPY 커리어 `https://career.nrise.net/ko/wippy`. sibling 전용 측정(`line-height: normal`, logotype `rgba(0, 0, 0, 0.85)`, H3 `31.05px`, compound `0px 0px 20px 20px`, frequency counts)은 portable 토큰으로 올리지 않았다. sibling 발행 카피 `(주)엔라이즈` · `(주)엔라이즈 채용` 은 provenance A5 sibling-only. 게이트 copy-loss compared/candidates 미집계 — A5a 손 대조 발행 카피 29 / 미생존 0.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 산출 파일을 `grep -oF`한 뒤에 썼다(F2).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`) | 분리 → provenance · `name` 옮김 → DESIGN.md H1 · `display_name_kr` 옮김 → Experience Scope | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# NRISE (WIPPY) Design System`. `엔라이즈 (위피)` DESIGN dest 1 · provenance dest 1. `id`/`country`/`category`/`homepage`는 provenance Identity 표. |
| YAML `primary_color: "#ff0056"` | 옮김 → Foundations Semantic color · 분리 → provenance Identity | 이중 목적지. DESIGN.md `#ff0056` dest 10 · provenance dest 8. Token-set path `tokens.colors.primary` DESIGN dest 1 · provenance dest 1. |
| YAML `logo.type: favicon` / greetinghr launcher-icon URL | 분리 → provenance · 옮김 → DESIGN.md Assets (catalog pointer) | 이중 목적지. `https://opening-attachments.greetinghr.com/20230601/02c9543a-74ed-4592-853f-17b2adc07c5d/nrise_logo_launchericon2.png` DESIGN dest 1 · provenance dest 1. NRISE-hosted brand file로 승격하지 않음. |
| YAML `verified` / `added` / `omd` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested` | 분리 → provenance | freshness·증거 등급 원장(E1). `live-extract` DESIGN dest 0 · provenance dest 2. `components_harvested` DESIGN dest 0 · provenance dest 3. A1c. |
| YAML `tokens.note` | 옮김 → Foundations Elevation (`Near-shadowless flat surfaces`) · 분리 → provenance Identity (전문 인용) | 이중 목적지. `Near-shadowless flat surfaces` DESIGN dest 1 · provenance dest 1. 노트 안의 hex는 Semantic color에 이미 착지. |
| YAML `tokens.colors` (**12키** — `primary` `ink` `ink-pure` `ink-nav` `neutral-900` `neutral-850` `section-dark` `canvas` `surface` `muted` `muted-alt` `on-dark`) | 옮김 → Foundations `Semantic color` | 12키 전부 path dest ≥1. `#ffffff`는 `canvas`와 `on-dark` 두 키로 비해합(A4). |
| YAML `tokens.typography` family.sans + 8 roles (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표 | 옮김 → Typography & Assets `Type roles` / `Family` | A1a: YAML `1.50` · `1.35` · `1.33`을 px로 바꾸지 않음. 원본 72px / 51.3px / 31px / 30px / 28.5px / 24px / 21px 와 rem 8종은 괄호·Notes로 병기. YAML use와 §3 Notes 긴 쪽을 둘 다 옮김 (`CTA labels` 와 `button labels`; `WIPPY hero headline, Pretendard Bold` 와 `Product hero headline on the career surface`; `Corporate section titles (NRISE가 세상에 전하는 가치)`). |
| YAML `tokens.spacing` 8키 (xs 4 · sm 8 · md 12 · base 16 · lg 24 · xl 32 · xxl 48 · section 64) | 옮김 → Foundations `Spacing` | 키 경로별로 보존. `tokens.spacing.xxl: 48` ≠ `tokens.rounded.jumbo: 48` ≠ 48px 컨트롤 높이. `tokens.spacing.base: 16` ≠ 16px 타입. |
| YAML `tokens.rounded` 7키 (xs 4 · sm 8 · md 10 · lg 12 · xl 24 · pill 30 · jumbo 48) | 옮김 → Foundations `Shape` (+ Components) | 이중 목적지(스케일 + 해당 컴포넌트). `tokens.rounded.pill` DESIGN dest 2. jumbo는 스케일 행으로만 — 컨트롤 height 48과 합치지 않음. |
| YAML `tokens.shadow.none` / `tokens.shadow.floating` | 옮김 → Foundations Elevation (+ Floating Top Button) | 이중 목적지. YAML `rgba(0,0,0,0.04) 0px 1px 2px 0px, rgba(0,0,0,0.06) 0px 8px 24px` DESIGN dest 2 · §4/§6 짧은 표기(첫 레이어 trailing `0px` 없음) DESIGN dest 2. 둘 다 유지. |
| YAML `tokens.components` 8개 (`type: button` ×5, `type: card` ×2, `type: badge` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 보존. 산출 `Primitive type: \`button\`` 5 · `card` 2 · `badge` 1 = YAML과 동수. YAML `use`를 각 블록 Token-set use 행으로 병기. |
| §4 Buttons / Cards / Badges 본문 | 옮김 → Components & States | 표면 귀속: 핑크·다크 필은 corporate home, 솔리드·플로팅·다크 카드는 career/WIPPY. YAML font `16px / 700` DESIGN dest 2, `16px / 400` dest 1, `14px / 600` dest 1, `19px / 400` dest 1. `10.5px 24px` dest 2. `5.5px 12px` dest 1. `bg #222222 fg #ffffff` dest 1. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 8px base unit, 스케일, 단일 칼럼 editorial cadence, white ↔ `#fafafa` ↔ dark bands. Whitespace 원문 라벨 3종 복원: `Editorial spacing over density` · `Flat segmentation` · `Single-accent focus` (각 DESIGN dest 1). |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | 3행 표 + `box-shadow: none` + never elevation. |
| §7 Do 8항 | 옮김 → Experience `Application rules` | 산출 8항. 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음. B2a 완전형 한정을 절 머리에 배치. |
| §7 Don't 8항 | 옮김 → Experience `Avoid` | 산출 8항. `floating TOP button` 원문 유지. B2a 완전형 한정을 절 머리에 배치. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms `Responsive behavior` | Mobile `<640px` · Tablet `640-1024px` · Desktop `1024-1440px` 원문 유지. 1440을 부정 claim으로 닫지 않음(D1). 터치 40/48/32/48. collapsing·image 원문. B2a: desktop computed-style 패스이지 cross-viewport 측정이 아님. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. 그 안의 `#ff0056` 30px / `8px 16px` / 40px / 16px 700 `더 알아보기` · `#222222` · `#000000` · `#212429` · `#fafafa` · dark card 12px · Pretendard 700/400/600 · home pills vs 8px · dark ladder · 19px Latin-caps eyebrow 는 이미 Foundations/Components/Typography에 있음. 슬롯 없는 위임 없음(A3). |
| §10 Voice & Tone — 서술 + 5행 톤 표 + 라이브 샘플 3건 + forbidden register | 옮김 → Content & Locales | 표 5행 그대로. `편안한 만남을 통해 일상의 행복을 전달합니다` · `위피, 소셜 디스커버리 1위 서비스` · `더 나은 연결을 위해 안전을 최우선의 가치로` 바이트 그대로(A5). `verified live 2026-07-02` 유지. B2a 완전형 한정을 표 앞에 붙였다. |
| §11 Brand Narrative | 옮김 → Experience `Scope` (브랜드 서사 문단) · GitHub URL은 분리 → provenance | 문단 마지막까지: refuses/embraces 문장, `Company facts above beyond the live homepage/career surfaces`, founding year and leadership not asserted, press `콰트·위피 눈부신 활약…엔라이즈, 2년 연속 흑자 달성` / `2026.04.08`, `나를 표현하고 상대를 발견하는 공간`, `같은 관심사를 가진 동네 친구와의 만남`, `건강한 습관을 형성하여 삶의 변화를 제공합니다`, `NRISE가 세상에 전하는 가치`, two-consecutive-years profitability. URL `https://github.com/nrise` · `https://nrise.github.io/` 는 provenance only (DESIGN dest 0). |
| §12 Principles 5항 (+ 각 UI implication) | 옮김 → Experience `Principles` | 산출 5항. B2a 완전형 한정을 머리에 배치. 원본 HTML 주석이 interpretive readings라고 표시한 자리. |
| §13 Personas 3 가상 원형 | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 §13 머리글이 fictional archetypes라고 명시. 식별자(이름·나이·도시)는 본문 0 · provenance 0. Experience `Audience`는 머리글 원문 `young Korean adults seeking new connections` · `users building healthy routines` 만 사용 (각 SRC 1 / DESIGN dest 1). 직업·소속 재분류 없음. |
| §14 States 9행 | 옮김 → Components & States `State record` + 컴포넌트별 applicability | 이중 목적지(둘 다 portable 본문). Empty / Loading / Error / Success / Skeleton / Disabled 원문 보존. `오류가 발생했습니다` · `필수` DESIGN dest 각 1. graph 위임 없음. 마케팅 destination CTA에는 그 시각값을 붙이지 않음. |
| §15 Motion & Easing — durations / roles / rules / reduced-motion | 옮김 → Foundations `Motion` | `motion-fast` 120ms · `motion-standard` 200ms · `motion-slow` 320ms 유지. 역할 use 유지. `scale/opacity shift` · `fades in from below` · `No bounce or spring` · `prefers-reduced-motion: reduce` 유지. |
| §15 easing **curve values** 3종 | 삭제 (본문) · 분리 → provenance Omission ledger (바이트 보관) | 무출처 커브. sibling raw samples에 transition/easing 관측 없음. `cubic-bezier(0.4, 0.0, 1, 1)` 는 `spec/omd-v0.1.md` 예시. `cubic-bezier` DESIGN dest 0 · provenance dest 4. 역할 이름은 본문에 남김. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance Named gaps | 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: `transition properties` DESIGN dest 2 를 확인한 뒤 이 행을 적었다. |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하 | 옮김 → Experience `Scope` | 두 URL을 토큰 표면으로. `No.1-positioned social-discovery app` · `de-facto Korean product sans` · `magazine-like rhythm` · `young Korean app studio, not a legacy corporate site` 유지. |
| §1 인과·해석 문장 | 옮김 → Experience `Scope`, 한정 부착 | B2a 완전형 인접 배치. |
| §1 Key Characteristics 8항 | 옮김 → Experience `Distinctive traits` | 산출 8항. B2a 완전형 한정을 머리에 배치. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | 역할명·use 원문. `hot magenta-pink` · `premium weight` · `a hair cooler` 유지, 절 머리 B2a. |
| §3 Font Family fallbacks | 옮김 → Typography & Assets Family / Font evidence Declared-only | `-apple-system` · `system-ui` · `Apple SD Gothic Neo` · `Noto Sans KR` · `Malgun Gothic` 은 fallback이지 브랜드 페이스가 아님. |
| §3 Typography Principles 4항 | 옮김 → Typography & Assets `Typography rules` | One font two weights · Weight is the hierarchy · Comfortable leading · Latin eyebrows over hangul body. |
| §4 하단 footer 블록 (**Verified** / Tier 1 4개 URL / Tier 2 attempts / Conflicts unresolved) | 분리 → provenance | freshness·출처 원장(E1). Tier 2 `getdesign.md/nrise` DESIGN dest 0 · provenance dest 1. |
| Sibling `.verification.md` — Proof 머리말·raw samples·Tier 2·Conflict matrix·Logo decision | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건.** sibling 전용 `31.05px` / `rgba(0, 0, 0, 0.85)` / `line-height: normal` / `0px 0px 20px 20px` 는 산출 DESIGN.md에서 각각 0회. |

## 최종 패스 기록

**패스 1 — B2a 스캔.** 완성본을 처음부터 다시 읽고 인과·해석·판단 문장마다 근거 class를 자문했다. Principles 안팎: Scope 표면 귀속 · Scope 레이어 읽기 · Scope 서사 비토큰(emotional-benefit / deliberate stance / profitability narrative 포함) · Scope refuses/embraces · Primary tasks 선정 · Audience drop · Distinctive traits 분류 · Principles · Application rules · Avoid · Semantic color 비해합/수식 · Spacing 키 경로 · Shape 로컬 기하 · Elevation 플랫 + YAML/`0px` keep-both · Motion 철학층 · Motion 커브 생략+B3 · Font evidence 분류 · Font Official product-use · Font Official distributed · Font Declared-only · Font License · Family fallback · Type roles keep-both · Typography rules · Assets 파비콘 · Assets 스크린샷 장식 금지 · Capture record 역할 판정/YAML keep-both/C4 생략 · State record 철학층 · Layout cadence · Responsive 뷰포트 · Content 보이스 해석. 본문 완전형 `"derived editorial implementation inference from the verified surfaces"` + `"not NRISE-authored or a separately published UI specification"` 짝 **31**. provenance `Derived editorial inventory` 데이터행 **31** = 본문 31. 발행 1차 DS 문서 없음 — catalog default form. F3 감사가 Scope 서사 읽기·Elevation keep-both·Assets 스크린샷 금지·C4 생략을 본문 한정과 원장에 맞춰 31로 맞췄다.

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `grep -oF`로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(identity name, `#ff0056`, launcher-icon URL, shadow 두 표기, rounded steps, §14 상태, B3, token note). `live-extract`·`components_harvested`·GitHub URL·unsourced curves는 provenance only(DESIGN dest 0)이므로 이름만의 이중 목적지로 적지 않음. 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 전문 2회(`transition properties` DESIGN dest 2), primitive type 3종 동수, lineHeight 비율 `1.50` / `1.35` / `1.33`, YAML `use` 8/8, §14 9행, voice sample 3건, cubic-bezier DESIGN.md 0회.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| legacy 고유 hex 11종 (`#ff0056` `#222222` `#000000` `#212429` `#212529` `#212126` `#111111` `#ffffff` `#fafafa` `#767676` `#8c8c8c`) | 11/11 이 산출 `DESIGN.md` 본문에 존재 — 손실 0. 본문 hex 발명 0 (DES−SRC = ∅). |
| YAML `tokens.colors.*` 12 키 경로 | 12/12 DESIGN dest ≥1. `canvas`와 `on-dark`는 같은 `#ffffff`를 두 키로 유지. |
| YAML `tokens.spacing.*` 8 키 경로 | 8/8 DESIGN dest ≥1. 공유 숫자 16/24/48을 spacing≠rounded≠height로 구분. |
| YAML `tokens.rounded.*` 7 키 경로 | 7/7 DESIGN dest ≥1. |
| unitless lineHeight (A1a) | YAML `1.50` dest 6 · `1.35` dest 4 · `1.33` dest 3 비율로 생존. |
| primitive type (A1b) | button 5 · card 2 · badge 1 — legacy YAML 실측과 동수. Outline 등 YAML에 없는 컴포넌트에 `type: button`을 붙이지 않음. |
| `[FILL IN]` | 산출 DESIGN.md 0건. 신규 작성 없음. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | 0건. `not-applicable` 행은 전부 역할 사유(destination CTA · destination nav · scroll action). |
| C2 | 핑크/다크/솔리드 CTA와 내비의 loading/error/success는 destination 역할로 `not-applicable`. Floating TOP은 scroll 역할로 `not-applicable`. Disabled는 다섯 button 모두 `applicable`. primitive 일괄 개방 아님. |
| C3 | "This is not a complete state-coverage claim." 를 Components 머리에 명시. 완료 주장 0건. |
| C4 | News Card · Dark Feature Card는 interaction evidence 없어 kind·map 생략. Eyebrow Label은 `kind: non-interactive`. |
| D2 / D2a | §13 식별자 본문 0 · provenance 0. 로그 삭제 행은 원형 수와 필드 종류만 명명. Audience는 머리글 원문 세그먼트만. |
| D1 | `native application` / `mobile app` / `product application` / `storefront` / `authenticated` / `back-office` DESIGN dest 0. Desktop `1024-1440px`는 원본 브레이크포인트로 유지했고 「1440px를 잰다고 말하지 않는다」는 부정문을 만들지 않음. |
| A5 발행 문자열 전수 대조 (게이트 바늘 밖까지) | legacy 본문과 sibling에서 발행 문자열 **29건**을 추출해 산출 3파일에 대조 — 미생존 **0건**. 분모는 아래 목록. |

### A5a 손 스윕 목록 (추출 29 / 미생존 0)

발행 카피만. 설명문·점 경로·폰트 스택·제3자 매체명·declared-only 페이스 이름은 바늘이 아니다.

Legacy 본문 (27): `엔라이즈` · `위피` · `콰트` · `Quat` · `WIPPY` · `NRISE` · `엔라이즈 (위피)` · `더 알아보기` · `바로가기` · `HOME` · `PRODUCT` · `CULTURE` · `CAREER` · `MISSION` · `HISTORY` · `NEWS` · `편안한 만남을 통해 일상의 행복을 전달합니다` · `위피, 소셜 디스커버리 1위 서비스` · `더 나은 연결을 위해 안전을 최우선의 가치로` · `나를 표현하고 상대를 발견하는 공간` · `같은 관심사를 가진 동네 친구와의 만남` · `건강한 습관을 형성하여 삶의 변화를 제공합니다` · `NRISE가 세상에 전하는 가치` · `콰트·위피 눈부신 활약…엔라이즈, 2년 연속 흑자 달성` · `2026.04.08` · `오류가 발생했습니다` · `TOP`

Sibling 전용 발행 라벨 (2): `(주)엔라이즈` · `(주)엔라이즈 채용` — provenance dest ≥1, DESIGN dest 0 (레거시 본문에 없는 sibling 측정 카피; 토큰 승격 없음).

재대조: 위 27건은 DESIGN.md에서 각 ≥1회. sibling 전용 2건은 provenance에서 각 ≥1회. 미생존 0.

### F2 dest 재실측 (`grep -oF`)

이 절을 쓴 뒤 세 파일을 다시 센 값. DESIGN dest가 본문 생존이다.

| 바늘 | DESIGN dest | provenance dest |
|---|---:|---:|
| `#ff0056` | 10 | 8 |
| `#222222` | 11 | 14 |
| `#212126` | 7 | 4 |
| `tokens.colors.primary` | 1 | 1 |
| `tokens.rounded.pill` | 2 | 1 |
| `tokens.shadow.floating` | 1 | 1 |
| `1.50` | 6 | 12 |
| `1.35` | 4 | 6 |
| `1.33` | 3 | 3 |
| `10.5px 24px` | 2 | 1 |
| `16px / 700` | 2 | 1 |
| `WIPPY hero headline, Pretendard Bold` | 1 | 0 |
| `Corporate section titles (NRISE가 세상에 전하는 가치)` | 1 | 0 |
| `https://opening-attachments.greetinghr.com/20230601/02c9543a-74ed-4592-853f-17b2adc07c5d/nrise_logo_launchericon2.png` | 1 | 1 |
| `더 알아보기` | 7 | 5 |
| `바로가기` | 4 | 2 |
| `엔라이즈 (위피)` | 1 | 1 |
| `콰트·위피 눈부신 활약…엔라이즈, 2년 연속 흑자 달성` | 2 | 1 |
| `transition properties` | 2 | 0 |
| `derived editorial implementation inference from the verified surfaces` | 31 | 0 |
| `not NRISE-authored or a separately published UI specification` | 31 | 1 |
| `live-extract` | 0 | 2 |
| `components_harvested` | 0 | 3 |
| `cubic-bezier` | 0 | 4 |
| `(주)엔라이즈` | 0 | 4 |
| `https://github.com/nrise` | 0 | 2 |
| `young Korean adults seeking new connections` | 1 | 0 |

Unique-phrase contrast: extracted 102 / restored-from-0 6 (`de-facto Korean product sans`; `Near-shadowless flat surfaces`; `Editorial spacing over density`; `Flat segmentation`; `Single-accent focus`; `Company facts above beyond the live homepage/career surfaces`).

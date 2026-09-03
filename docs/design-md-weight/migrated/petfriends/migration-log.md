# Pet Friends migration log

- Source: `web/references/petfriends/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/petfriends/.verification.md` — **존재함**(dotfile, 경로 직접 확인). 전문 판독, **증거 등급으로만 채택**. portable 토큰 승격 0건.
- Destination: `docs/design-md-weight/migrated/petfriends/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/petfriends/provenance.md`
- Date: 2026-09-03
- Worker: grok-4.6 T2
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, claim `lang` 모두 `en`
- 도메인: ecommerce. 발행 1차 DS 없음 (getdesign 0 files; refero no genuine entry). B2a는 toss-form: `not Pet Friends-authored or a separately published UI specification` (28=28).

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 출현 수는 Python `str.count`이며 기억으로 쓰지 않았다.

Source SHA-256 `f5a4b4753d8d30bde85748b3723e9d23d7a5d0dbeca7a058c7beef9f654a4531`. Sibling SHA-256 `e854b7cf88ab6b14f3ae267fc7fe3b9d348e3555e68a99ec71741f8a030159b2`.

## A5a — 발행 카피 손 대조 (규칙집 v12 / A5a)

게이트 `copy-loss` 바늘은 이 브랜드에서 전수 커버를 주장하지 않는다. 원본 `DESIGN.md`와 sibling `.verification.md`에서 인용 문자열을 뽑고, 그중 브랜드가 발행한 라벨·CTA·포지셔닝·마이크로카피·sibling이 측정 대상으로 명기한 카피만 산출 3파일 생존과 대조했다.

| 단계 | 수치 |
|---|---|
| 추출 (원본 + sibling 인용·측정 대상 카피) | 원본 voice samples 4 + 헤드라인/칩/플레이스홀더/금지 카피 + sibling 측정 대상 (H2/H3/칩/필/카운터/title) |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | **26**개 |
| 바늘이 아니라고 판정해 제외 | hex·치수·CSS 선언·점 경로·폰트 스택·카피에 대한 서술·Tier 2 호스트 |
| 미생존 | **0**건 (산출 3파일에 26/26 생존, 실측) |

발행 바늘 26 (손 대조, 전부 생존): 반려동물 1등 쇼핑몰, 펫프렌즈; 반려동물 1등 쇼핑몰; 펫프렌즈; 어떤 상품을 찾으시나요?; 어떤 상품을 찾고 있개?; 배송지 입력; 강아지; 재구매율 89%; 최저가 도전 사료 모음!; 집사님을 위한 오늘 특가!; 육아비는 펫프랑 나눠요; 내새꾸 친구들에게 재구매율 89%를 보이는 영양/기능; 써봐야 아니까! 심쿵 체험단; 최저가 도전; 심쿵 체험단; 집사님; 내새꾸; 오류가 발생했습니다; 필수; 2/14; 맘마값 부담 DOWN…; 찾고 있개; 체험단; 사료샘플; 터키츄; 오리젠 독 오리지날 11.4kg.

sibling 전용 3건(사료샘플, 터키츄, 오리젠 독 오리지날 11.4kg)은 provenance Raw samples에만 두고 portable 본문으로 승격하지 않았다(B1). §13 가상 전기 안의 식별 문자열은 브랜드 발행 카피가 아니라 D2/D2a로 삭제했고 바늘 분모에 넣지 않았다.

A5 분모: 발행 바늘 26 추출 / 미생존 0.

감사 후 재실측(본문 한정 문장만 수정한 뒤, `str.count` 파일별): 발행 바늘 26 / 3파일 연합 미생존 0. sibling 전용 3건(`사료샘플`, `터키츄`, `오리젠 독 오리지날 11.4kg`) DESIGN dest 0 / provenance Raw samples dest 1. 본문 수정은 영어 한정 문장이라 발행 카피 dest는 변동 없음.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Pet Friends Design System` (`DESIGN.md` 1). `display_name_kr` 펫프렌즈는 `DESIGN.md` 9 + `provenance.md` Identity (E2a). `homepage` `https://www.pet-friends.co.kr/`는 Scope + Identity. `primary_color` `#ff4081`는 Foundations + Identity (E2a). favicon slug는 provenance Identity / Logo decision; portable Assets는 identity pointer로 두고 계약에서 제외 (`DESIGN.md` 239). 239 B2a는 그 pointer 처분과 `#f8f8f8` 상품 사진을 발명 장식으로 바꾸지 말라는 규칙을 함께 이름한다. |
| YAML `verified` / `added` / `omd` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). A1c: `tokens.source` live-extract는 Identity 표. `components_harvested: true`는 Proof notes. |
| YAML `tokens.note` (긴 문자열) | 분리 → provenance (인용 블록, 전문) · 값은 옮김 → DESIGN.md | 이중 목적지. note 전문 `provenance.md` Identity. 안의 값(`#ff4081` Material Pink A400, `#ea306f`, `#f33f46`, `#2d3035`, tint + `#e9ebec`)은 Scope ¶1과 Foundations에 별도로 실려 있다. |
| YAML `tokens.colors` (**15키**) | 옮김 → Foundations `Semantic color` | primary / primary-deep / discount / surface-pink / pink-soft / ink / ink-pure / muted / surface / surface-alt / hairline / overlay / accent-blue / canvas / on-primary. 키 경로를 각 행에 보존. A4: canvas `#ffffff`와 on-primary `#ffffff`를 한 Ink로 합치지 않음. chip YAML `fg: "#000000"`은 ink `#2d3035`와 합치지 않음. overlay `#1c1e21`은 ink-pure `#000000`과 합치지 않음. |
| §2 Color Palette & Roles | 옮김 → Foundations `Semantic color` | Primary / Text / Commerce Signals / Surface & Neutral / Accent 소제목 유지. "17%", "50%", "36%" markdown 용법 유지. |
| YAML `tokens.typography.family` (`brand: Lific`, `fallback: Noto Sans KR`) + §3 Font Family | 옮김 → Typography & Assets `Font evidence` · `Family` | `Lific` / `Noto Sans KR`. 폴백을 브랜드 페이스로 제시하지 않는다는 경계는 Font evidence B2a (`DESIGN.md` 202). Lific를 시스템 대체 서체로 바꾸지 말라는 금지는 Family B2a (`DESIGN.md` 208). |
| YAML `tokens.typography` 6역할 (size / weight / **unitless** lineHeight / tracking / use) + §3 Hierarchy 표 6행 | 옮김 → Typography & Assets `Type roles` | A1a: unitless `1.30` · `1.38` 비율 보존. 긴 쪽 keep-both: rem `1.13rem` / `1.00rem` / `0.88rem` / `0.81rem`, `~1.30`, `~1.48`, `22px` / `18px` line-height, YAML `use` + §3 notes (`맘마값 부담 DOWN…`, `배송지 입력`). YAML `emphasis` `use` verbatim dest **1** at Token-set use `DESIGN.md` 214; YAML `discount` `use` verbatim dest **1** at 215. Use-열 백틱 hex는 그 바이트열이 아님. Type roles B2a `DESIGN.md` 226. 20px / 500 Lific는 검색 필드 레코드이지 타입 역할이 아님. |
| §3 Principles 4항 | 옮김 → Typography & Assets `Typography rules` | 실측 4항. 인과는 `DESIGN.md` 230 B2a. |
| YAML `tokens.spacing` 6키 + §5 Spacing System | 옮김 → Foundations `Spacing` (+ Layout) | `{ xs: 4, sm: 8, md: 12, base: 15, lg: 16, gutter: 44 }`. §5 측정 목록 `4px, 8px, 12px, 15px, 16px, 44px` keep-both. 비대칭 칩 패딩 `4px 8px 4px 12px` · 검색 44px right gutter. `tokens.spacing.lg: 16` ≠ `tokens.rounded.lg: 16` ≠ discount 16px. |
| YAML `tokens.rounded` 5키 + §5 Border Radius Scale | 옮김 → Foundations `Shape` | sm 6 / md 8 / lg 16 / pill 36 / `full: 9999`. §5 Full (9999px / 50%)가 keyword pills를 포함하는 기록과 컴포넌트 `19px`와 원본 닫는 주석 `18.5px`를 셋 다 남김 (충돌을 해소하지 않음). `DESIGN.md` 144 B2a가 그 세 표기를 이름한다. |
| YAML `tokens.shadow.none` + §6 Depth & Elevation | 옮김 → Foundations `Elevation` | 4행 표 (Flat / Tint / Hairline / Overlay) + `box-shadow: none`. Philosophy의 목적 읽기는 `DESIGN.md` 155 B2a. |
| YAML `tokens.components` 7개 (`type: button` ×2, `badge` ×2, `input` ×1, `card` ×1, `avatar` ×1) | 옮김 → Components & States | A1b: `Primitive type: \`button\`` dest **2** = source `type: button` 2 (칩 + 프라이머리). `badge` dest 2=2. `input` dest 1=1. `card` dest 1=1. `avatar` dest 1=1. YAML `use` 7종은 각 레코드 + provenance `Token-block component strings` verbatim. |
| §4 Buttons / Inputs / Cards / Badges / Avatars | 옮김 → Components & States | Category / Delivery Chip · Primary Action (Pink) · Search Field · Search-Keyword Pill · Product Card · Image Counter Overlay · Circular Avatar. §4에만 있는 카피(`강아지`, `배송지 입력`, `2/14`)는 컴포넌트 레코드로. |
| §4 하단 footer 블록 (**Verified** / Tier 1 / Tier 2 / Conflicts unresolved: none) | 분리 → provenance | freshness·출처 원장(E1). |
| §5 Layout Principles (Spacing / Grid / Whitespace / Radius) | 옮김 → Layout & Platforms + Foundations | Grid 5불릿·Whitespace 3불릿은 Layout. Whitespace 목적 읽기는 `DESIGN.md` 390 B2a. |
| §6 Shadow Philosophy | 옮김 → Foundations `Elevation` | 본문 보존 + B2a. |
| §7 Do 8항 | 옮김 → Experience `Application rules` | 실측 8항. Governance 통제 문구에 넣지 않음(제약 3). `DESIGN.md` 55 B2a. |
| §7 Don't 8항 | 옮김 → Experience `Avoid` | 실측 8항. `DESIGN.md` 68 B2a. 원본에 없는 도메인(native application 등)을 Avoid에 세우지 않음(D1). |
| §8 Responsive Behavior (Breakpoints 3행 / Touch Targets / Collapsing / Image) | 옮김 → Layout & Platforms `Responsive behavior` | `<640px` / `640-1024px` / `>1024px`, `www` → `m.` redirect, app-width and centered. `DESIGN.md` 404 B2a: 원본이 진술한 의도이지 교차 뷰포트 캡처가 아님. 터치 타깃 읽기 "comfortably tappable"도 같은 한정이 이름한다. |
| §9 Agent Prompt Guide — Quick Color Reference · Example Component Prompts 4개 · Iteration Guide 7항 | 삭제 + 고유값 1건은 이동(A3) | 도구용 재진술. 열거 hex는 Foundations에 이미 있음. §9에만 더 풀어 쓴 렌더 값 1건 — product title 13px Lific weight 400 `#2d3035` + discount 16px weight 700 `#f33f46` — 은 Components `Product Card` (`DESIGN.md` 336). |
| §10 Voice & Tone | 옮김 → Content & Locales | 톤 표 5행·Forbidden register·voice samples 4종 바이트 보존. Hangul/English reading-aid는 `DESIGN.md` 411 B2a. Forbidden register 금지는 `DESIGN.md` 431 B2a. YAML 플레이스홀더와 개 말장난을 한 필드에 합치지 않음 (`DESIGN.md` 413 B2a). |
| §11 Brand Narrative | 옮김 → Experience `Scope` 3번째 문단 | **2015** 창업, 반려동물 1등 쇼핑몰, fragmented offline shops, same-day / dawn delivery, data-driven product curation, community of owners, 집사님 / 내새꾸, 재구매율 89% / 심쿵 체험단 / 최저가 도전, competes on trust, speed, and value, **문단 마지막 문장까지** refuses/embraces through "joyful and effortless". 원본 닫는 주석의 “general public knowledge” 증거 등급은 본문과 provenance Evidence class 양쪽(E2a). |
| §12 Principles 5항 (+ UI implication) | 옮김 → Experience `Principles` | 실측 5항. `DESIGN.md` 45 B2a (toss-form). 원본 닫는 주석이 지목한 "pink means love and action" / "flat and fast as a rejection of cold marketplace chrome" 해석 등급을 같은 머리에 남김. |
| §13 Personas 3인 | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. fictional archetypes 3인. 식별자 필드(이름·나이·도시·전기)와 동기·소속 분류는 본문·원장에 재수록하지 않음 — 이 행도 무식별. Audience는 원본이 그룹으로 남긴 `Korean dog and cat owners buying food and supplies online` (`DESIGN.md` 28) DESIGN dest 1 / source dest 1. 페르소나에서 유도한 재분류 없음. |
| §14 States 9행 | 옮김 → Components & States `State record` + 컴포넌트별 applicability 사유 | 이중 목적지(둘 다 portable 본문). 9행 값·카피 그대로 (`DESIGN.md` 363–373). 원본이 philosophy layer에 둔 계약임을 본문에 남김. graph 위임 없음. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Primary Action은 커밋 면이라 L/E/S 개방. Search는 필드라 loading/error 개방, success는 목록이 결과를 보고하므로 닫힘. Category / Delivery Chip은 선택자라 L/E/S 닫힘. Keyword Pill·Product Card는 kind/map 생략(C4). Overlay·Avatar는 `Kind: non-interactive`. 미관측을 `not-applicable` 사유로 쓰지 않음(C1). state coverage 완료 주장 없음. `DESIGN.md` 246 B2a가 kind/applicability, §14를 철학층 계약으로 보존, C4 열린 질문, 칩 `#000000`/`#2d3035` keep-both, 검색 20px 폰트, 필 `19px` vs `full: 9999`, 오버레이 `20px`를 이름한다. |
| §15 Durations 3행 (`motion-fast` 120ms / `motion-standard` 220ms / `motion-slow` 320ms) | 옮김 → Foundations `Motion` | 3행 그대로. 삭제 범위는 **무출처 커브뿐**. sibling method/raw sample에 transition 관측이 없으므로 B2a를 절 머리(`DESIGN.md` 159)에 붙이고 주어를 motion contract 자체로 둠. |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations `Motion` | `ease-enter` / `ease-exit` / `ease-standard`와 각 용도 보존. |
| §15 Easings — 커브 값 3개 (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. 산출 `DESIGN.md` **0회**. `cubic-bezier(0.4, 0.0, 1, 1)`은 `spec/omd-v0.1.md` 비브랜드 예시. 역할과 용도는 본문에 남김. 부재 단언의 분모는 DESIGN.md이지 원장 자신(E2d). |
| §15 Motion rules (friendly but quick, pill scale/opacity, carousel `motion-standard / ease-enter`, add-to-cart pop, no heavy bounce, `prefers-reduced-motion: reduce`) | 옮김 → Foundations `Motion` | 규칙 6항. scale/opacity 값은 미해상으로 Governance에 이름만. 인과 읽기(friendly but quick / consistent with bright, fast commerce / would slow browsing)는 `DESIGN.md` 181 B2a. `:159`는 system-level vs per-component만 이름하므로 규칙 블록을 덮지 않음. |
| B3 — 미해상 motion의 승격 조건 | 신규 작성 → Foundations `Motion` (+ Governance 재진술) | E2c 대조: 전문 “…transition properties, animation name, duration, easing, and reduced-motion behavior have been observed”가 산출 `DESIGN.md` **2회** (`DESIGN.md` 179, 467) 존재함을 확인한 뒤 이 행을 적는다. 약화 문구는 쓰지 않았다. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `Scope` 1·2문단 + Distinctive traits | 세 표면, 토큰 노트, 2015 서사와 분리된 현재 표현. `anxious-but-loving pet parents (집사님)`, `heavy-pink-emphasis-over-quiet-grey-body split`, `shout the deal, whisper the detail` 원문 보존. 성격 규정은 각 문단 끝 B2a. |
| §1 Key Characteristics 8항 | 옮김 → Experience `Distinctive traits` | 실측 8항. `DESIGN.md` 32 B2a. |
| 원본 H1 `# Design System Inspiration of Pet Friends` | 삭제 → provenance `Omission ledger` | Core v2 identity 라인 `# Pet Friends Design System`. |
| 원본 닫는 HTML 주석 | 분리 → provenance `Evidence class` · Raw samples | 증거 등급 배정(§1–9 live inspect / §10 verbatim / §11 public knowledge / §13 fictional / interpretive claims) 인용 보존. 18.5px · 14.5px 등 서브픽셀은 원장. |
| Sibling `.verification.md` — Proof·method·raw samples·Conflict matrix·Logo 판정 | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건**. sibling 전용(본문 비승격): 검색 padding 14.5px, overlay 4.5px / sibling height 20px, secondary search 38px, avatar `rgb(249, 249, 249)` / 40px, body `rgb(0,0,0)`, H3 표본 문자열, 레거시 본문에 없는 키워드 필 라벨, frequency counts. 본문 Shape의 `18.5px`는 원본 닫는 주석 표기(YAML/§4는 `19px`)이지 sibling 승격이 아님. |

## 규칙 대조 (본문 실재 확인 후에만 기재)

- **A1 / A1a / A1b / A1c.** 검증된 hex·unitless line-height `1.30`/`1.38`·primitive type 7건·`tokens.source: live-extract` / `components_harvested: true` 원장 보존. `[FILL IN]` 0.
- **A2.** §14 9행 본문 보존. §9 도구 프롬프트 삭제, 보편 규칙은 Governance 통제 문구.
- **A3.** §9 고유 페어링(카드 타이틀/할인)은 Product Card로 이동한 뒤에야 삭제했다고 적음.
- **A5 / A5a.** 발행 바늘 26 / 미생존 0. 한국어 원문 바이트 보존, 영어는 병기.
- **B1.** sibling 전용 값을 본문 토큰으로 승격하지 않음. `focus-visible` treatment 값 없음.
- **B2a.** 완전형 28회 / 원장 28행. Principles 안팎 스캔 후 인접 한정. 감사 후 신설 3자리: Motion rules `:181`, Family `:208`, Forbidden register `:431`.
- **B3.** 다섯 증거 종류 + 컴포넌트별 관측 게이트가 Foundations Motion에 실재 (`DESIGN.md` 179).
- **C1 / C2 / C3 / C4.** 미관측 ≠ not-applicable. 선택자 칩은 L/E/S를 역할 사유로 닫음. coverage 완료 주장 없음. 카드/필은 kind/map 생략.
- **D1 / D1a.** 원본이 세운 표면(세 모바일 커머스 라우트)으로만 범위. native application / back-office 등 신규 도메인 0.
- **D2 / D2a.** 페르소나 3인 삭제, 원장 무식별. Audience는 원본 공개 세그먼트 원문만.
- **E1 / E2 / E2a / E2c / E2d.** 원장 분리. 이중 목적지는 두 칸. B3 주장은 본문 실재 후. 부재 단언은 원장 자신을 분모에 넣지 않음.
- **E3.** hex 표기 왜곡 없음.

## 제출 전 고유 표현 대조 (웨이브 43)

원본 §별 고유 표현(연도·고유명사·인용구·서사 연결문·값 수식어·제약 문장)을 뽑아 산출 `DESIGN.md`에서 `str.count`로 대조했다.

- 뽑은 표현 수: **86**
- 0이었다가 복원한 수: **2** — `heavy-pink-emphasis-over-quiet-grey-body` (원본 §1 코어 텐션 문장), `anxious-but-loving pet parents` (원본 §1 분위기 원문). 둘 다 Scope ¶2에 원문 복원.

값 소실 자가 점검: YAML `tokens.colors` 15키, `tokens.spacing` 6키, `tokens.rounded` 5키, `tokens.shadow.none`, 컴포넌트 7개를 **키 경로별로** 확인. `tokens.spacing.lg: 16`을 `tokens.rounded.lg: 16` 또는 discount 16px로 대체한 흔적 없음.

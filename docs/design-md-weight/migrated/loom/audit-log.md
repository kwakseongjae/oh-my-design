# loom 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/loom/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/loom/DESIGN.md`
검증 sibling: `web/references/loom/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양은 수집되지 않음(`ds.type` 원본 부재). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Loom-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 `derived editorial implementation inference` 22 / `not Loom-authored` 22 / `separately published UI specification` 22. 원장 데이터 행 22 (`check-limiter-ledger.mjs` 본문 22 = 원장 22, 167–188). 행 수는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic `:84`는 canvas/on-primary `#ffffff`·primary/brand·foreground/ink 키 비해합만 이름하고, 같은 hex의 컴포넌트 귀속(icon-button/card fill, Primary/Compact/Dark text, Dark fill/Light text, Light/Footer fill)과 YAML hover ≠ `focus-visible`을 빠뜨렸다. Spacing `:115`는 비해합을 한정 **앞**에만 두고 닫힘 문장이 `those unitless steps`로만 받았다. Motion은 `ease-exit` 템플릿 일치≠live-computed와 공식 단일 커브≠게이트를, Font evidence는 foundry license URL 부재와 recordings-library/recorder-product 밖을, Type roles는 size `16`≠spacing·size `63`≠spacing을, Capture는 Compact를 YAML `16px / 700`에 오귀속하고 Navigation Kind·product-level Capture-record를 빠뜨렸다. Layout `:450`의 desktop-capture 분류와 Content `:457`의 copy-mirrors / knowing wink / never gated는 한정 **뒤**의 세 번째 부류였다.

문장 분류: 브랜드 발행 사실(2015·Opentest/OpenVid·발행 CTA/헤드라인 바이트·YAML 값) / 관측 기술(hex·px·Charlie 패밀리·캡처 기하) / 편집적 해석·인과 판단(표면 귀속, 같은-hex 키 분리, 로컬 기하≠스케일, 승격 게이트, 페르소나 삭제 읽기, 레지스터 성격). 세 번째 부류만 수정 대상.

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 8건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:84` — Semantic color | canvas/on-primary `#ffffff`, primary/brand, foreground/ink, body unmerged from nav-link, 일러스트 악센트 off, ink undertone만. 같은 hex의 컴포넌트 귀속과 YAML hover ≠ `focus-visible`은 세 번째 부류인데 한정 밖. | 기존 완전형에 `#ffffff` / `#1868db` / `#101214` / `#e9f2fe` / `#292a2e` 컴포넌트 귀속 분리와 `button-primary.hover` = hover/press not `focus-visible`을 접어 넣음. body는 원본 역할(body-and-nav-link)로 바로잡음. |
| 2 | `DESIGN.md:115` — Spacing | `md: 16` ≠ `base: 16` 등 비해합이 한정 **앞**. 닫힘은 `those unitless steps`만. | 비해합(`8`/`16`/`24` ≠ rounded, `base: 16` ≠ body 16 ≠ compact padding, `xxl: 48` ≠ Compact height, `16px 23px` not a scale step)을 한정 안에 넣음. |
| 3 | `DESIGN.md:149` — Motion | 다섯 종류 게이트와 커브 생략은 있으나 `ease-exit` 템플릿 일치≠live-computed와 `official documentation of a single curve or duration is not that gate`는 한정 밖. | 두 판단을 한정에 접어 넣음. B3 전문 문장(`:175`)은 유지. |
| 4 | `DESIGN.md:183` — Font evidence | live computed / FontFaceSet unnamed / no exclusive family / `sans-serif` fallback만. foundry license URL 부재와 recordings-library/recorder-product 밖은 표 안의 세 번째 부류. | 두 판단을 기존 완전형에 접어 넣음. |
| 5 | `DESIGN.md:204` — Type roles | YAML `use` verbatim, unitless sizes/px, line-height, tracking `0` beside `normal`만. YAML size `16` ≠ spacing, size `63` ≠ spacing은 세 번째 부류. | 두 비해합을 한정에 접어 넣음. |
| 6 | `DESIGN.md:245` — Capture record | YAML compact `font` `16px / 700` beside body 700이라고 적음. Compact는 YAML 컴포넌트가 아니고 본문 weight 400. Navigation Kind 생략과 product-level Capture-record는 세 번째 부류. | Compact 오귀속 제거. YAML `16px / 700`을 Primary/Light/Dark에 붙이고 Compact 400을 type-role `button-light`에 붙임. Navigation Kind와 product-level 쓰기를 한정에 접어 넣음. |
| 7 | `DESIGN.md:409` — Layout | §5/§8 as layout record, 8px-rhythm off spacing keys, 48–58px beside declared controls, breakpoints as source contract만. `:450` desktop-capture 분류는 한정 **뒤**. | 58/48/56/~63px = source-stated layout numbers also recorded as desktop-capture measurements를 한정에 접어 넣음. |
| 8 | `DESIGN.md:455` — Content voice | warm/direct/human과 tone table as reconstruction만. `:457` copy-mirrors / knowing wink / never gated or salesy는 세 번째 부류인데 한정 밖. | 세 레지스터 읽기를 기존 완전형에 접어 넣음. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 22, `not Loom-authored` 22, `separately published UI specification` 22. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 68, 84, 115, 126, 145, 149, 183, 200, 204, 223, 245, 409, 455, 504.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 헤더/데이터 행 수는 22=22로 유지하고 행 텍스트를 본문에 맞춤.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | Semantic color 행 | primary/brand, canvas/on-primary, foreground/ink, body unmerged from nav-link, accents off, ink undertone만. | 컴포넌트 귀속 분리 + hover ≠ `focus-visible`. body = body-and-nav-link. |
| 10 | Spacing 행 | unitless vs px, `md: 16` ≠ `base: 16`, spacing ≠ rounded, `16px 23px` not a step만. | `base: 16` ≠ body 16 ≠ compact padding; `xxl: 48` ≠ Compact height. |
| 11 | Motion 행 | 커브 생략 + five-kind gate만. | `ease-exit` catalog-template ≠ live-computed; official single curve/duration ≠ that gate. |
| 12 | Font evidence 행 | live computed / FontFaceSet / no exclusive family / `sans-serif` fallback만. | foundry license URL 부재; recordings-library/recorder-product outside. |
| 13 | Type roles 행 | YAML `use` / unitless / px/rem / tracking `0` beside `normal`만. | size `16` ≠ `tokens.spacing.base: 16`; size `63` ≠ spacing step. |
| 14 | Capture record 행 | Kind omit footer+Cards; L/E/S closures; YAML compact `16px / 700`; Compact not a YAML id; `#0052cc` not `focus-visible`. | Compact 오귀속 제거. YAML `16px / 700` = Primary/Light/Dark. Compact 400 beside `button-light`. Navigation Kind. product-level Capture-record. |
| 15 | Layout 행 | §5/§8 as layout; 8px-rhythm off keys; 48–58px beside controls; breakpoints as source contract만. | 58/48/56/~63px also recorded as desktop-capture measurements. |
| 16 | Content voice 행 | warm/direct/human; table as reconstruction만. | copy-mirrors / knowing wink / never gated or salesy. |

헤더 / 데이터 행 **22 = 22** at 167–188 (E1 1:1, 이름 범위 정렬). `check-limiter-ledger.mjs loom` → 1:1 OK.

### E2 / E2a / E2c — 로그 목적지 (4건)

본문이 아니라 로그(와 거짓 처분 주장)만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 17 | YAML `tokens.components` 행 | 「Compact YAML `font` `16px / 700` dest **3**」. Compact는 YAML id가 아니고 본문 weight 400. `grep -oF -- '16px / 700'` DESIGN dest **7** (착수부터 7; dest 3은 줄 수). | Primary/Light/Dark YAML `font` `16px / 700` dest **7**. Compact body `16px Charlie Text weight 400` dest **2** beside type-role `button-light`. |
| 18 | §5 / §8 dest | 「8px base unit dest **1**」 — `8px base unit` DESIGN dest **0** (fitpet형). 「Menu toggle dest **1**」 — `Menu toggle` DESIGN dest **0**; 실재는 `menu toggle`. 「Touch 48–58px dest **1**」 — `48–58px` DESIGN dest **2**. | `base unit of 8px` dest **1**. `menu toggle` dest **1**. `48–58px` dest **2**. |
| 19 | F1 패스 기록 | 22자리를 이름하나 F3가 접어 넣은 판단을 목록하지 않음. Compact `16px / 700` 오귀속을 그대로 둠. | 확장 8자리를 F1에 적음. Compact 오귀속 제거. 자리 수 22=22 유지. |
| 20 | F2 dest 표 | 본문 수정 뒤 재실측 없음(lablup). `wc -w` 5805가 한정 확장 뒤 **6142**. | `grep -oF -- \| wc -l` 재실측. `#ffffff` 12/4, `#0052cc` 12/5, `#e9f2fe` 9/7, Charlie Text 13, `tokens.spacing.base: 16` 4, `16px 23px` 5, `bg #0052cc` 4/2, `separately published UI specification` 22/2, `wc -w` 6142. A5a 12바늘 DESIGN dest 각 ≥1 불변. |

Destination SHA `b6375fee33f41311ec8664a4326b018b51c63cc006962a56a31f3f467e16bc79` → `e693b2ae50f38425c15065e87cf64e4cb0da50a19c33bc00604a213be1b4b943` (한정 확장 후). 줄 수 DESIGN `wc -l` **509** 불변. provenance 188 불변(행 텍스트만). migration-log 91→**93**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 22개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 문법 변형(복수 `are derived editorial implementation inferences`)은 완전형.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다. Named gaps의 커브 부재 목록은 Motion 한정과 같은 게이트의 재진술.
- E2c: B3 전문 `transition properties` dest 1 · `animation name` dest 1 · `reduced-motion behavior` dest 1 (Motion promotion 문장). primitive type `button` 5 = YAML `type: button` 4 + §4 Primary Compact. `Primitive type: \`card\`` dest 1 = YAML `type: card` 1. YAML use 12/12 (`check-yaml-use-landing.mjs`). unitless `1.03` dest 4 · `1.14` 2 · `1.27` 3 · `1.52` 3 · `1.5` 11 · `1.0` 9 · `1.00` 2.
- E2d: sibling-only 머리(`provenance.md` Sibling 절)는 DESIGN.md를 분모로 두고 부재를 적으며, 그 문장이 「세 파일 어디에도 없다」고 단언하지 않는다. `15.6154px` DESIGN dest 0 · provenance dest 4. Omission 행은 필드 종류만 이름하고 식별자를 열거하지 않는다.
- D2a 처분 행은 절·인원·필드 종류만. 이름·나이·도시·전기 없음. 동기 스케치·소속 분류 DESIGN dest 0. 원형 라벨 재수록을 D2a로 지목하지 않음(웨이브 41 — 이 브랜드는 발행 한국어 원형 라벨이 없음).
- A1 키 경로: YAML `tokens.components` 5레코드. `button-primary` 9필드(type/bg/fg/radius/padding/height/font/hover/use) Primary 블록 행. `button-light` 8필드 Light 블록. `button-dark` 8필드 Dark 블록. `icon-button` 7필드(type/bg/fg/radius/height/shadow/use) Icon Buttons 블록 — padding/font YAML 없음. `footer` 4필드(type/bg/fg/use) Footer 블록. icook형 타 블록 hex 차용 없음. 복원 0.
- 원본 §15 곡선 값은 Motion 생략 표기에 역할·Use만 남고 곡선은 provenance Proof notes. T2 관례(웨이브 39 kkday). 값 소실로 되돌리지 않음.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared **0** / candidates **137**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 카피 12 English (`One video is worth a thousand words` · `Get Loom for free` · `Download now` · `Learn more` · `Contact Sales` · `Install Chrome Extension` · `See all use cases` · `Explore our blog` · `Record your screen, voice, and face.` · `Request a demo gate` · `Opentest` · `OpenVid`) DESIGN dest 각 ≥1 / 미생존 0. YAML `use` 12/12. sibling 전용 `Millions of people across 400,000 companies` / `Next testimonial` DESIGN dest 0 / provenance dest 2(본문 미승격). 발행 라틴 손실은 안 보인다.
- **B1.** sibling 전용 `15.6154px` / `23.4231px` / `7.80769px` / `63.2692px` / `65.104px` / `44.1538px` / `50.4678px` / `rgb(0, 0, 0)` / h1·h2 구조 분류 / `Millions of people across 400,000 companies` / `Next testimonial` DESIGN dest 0. `portal H2` sibling 0, 본문 승격 0. 구조 분류 침투 없음. Sibling Secondary height `48px`는 Light `58px`로 승격되지 않음 — Compact `48px`는 원본 §4.
- **같은 hex 다른 역할.** `#ffffff`는 canvas / on-primary / icon-button·card fill / Primary·Compact·Dark text. `#101214`는 ink/foreground / Dark fill / Light text. `#e9f2fe`는 surface-blue / Light fill / Footer fill. `#292a2e`는 body / icon-button fg / Footer text. `#1868db`는 primary/brand / Primary·Compact fill / footer-link hover. 착수 원장은 색 키 비해합만 적었음 → E1·B2a로 원장·본문 한정을 실제에 맞춤(고침 #1·#9).
- **열 구조.** 원본 색은 이름·hex·use. 토큰명 열(`--loom-…`)은 원본에 없음. 산출 Semantic color는 YAML 경로를 병기. krds형 토큰명 열 삭제는 해당 없음. 충돌 없음(`Conflicts unresolved: none`); sibling 추가 기하(sub-pixel padding, Secondary `rgb(0, 0, 0)`)는 provenance-only로 일관.
- **A1 서사 (보고만).** 원본 §11 `The bold blue-and-white visual identity is the design expression of that ethos — bright, immediate, and unintimidating.` — `design expression` DESIGN dest **0** / provenance dest **0**. 컴포넌트 키 경로 소실이 아니므로 복원하지 않음.
- **모션 곡선.** 원본 §15 cubic-bezier 3개 DESIGN dest 0 / provenance dest 1 each. duration 0/120/220/320ms는 본문에 인용된 채 역할만 승격(웨이브 39 kkday). 합성을 유도하지 않음.

AUDIT_DONE fixes=20

## 개정 — 의미 검토 FAIL 3 (2026-08-29)

대상: `docs/design-md-weight/migrated/loom/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정 22=22.

### 결함 1 — §11 서사 소실 복원 (A1)

원본 `:335` `shaped everything` / `friendly consumer-grade` / `lowers the barrier` / `pressing record`와 `:337` `bold blue-and-white` / `design expression` / `bright, immediate, and unintimidating`를 Experience Scope `:13`에 원문대로 복원. provenance Proof notes에 같은 구를 서사 색인으로 병기(E2a). YAML `use`·토큰 값은 그대로. 페르소나 `:355` `unintimidating`은 D2 삭제 유지.

### 결함 2 — §3 Notes 긴 쪽 병기 (A1 item 11)

Type roles Additional `:216`에 원본 `:113–119` Notes `Hero headline, max size, declarative` / `Major section headlines` / `Primary/dark button label` / `Header CTA, lighter weight`를 YAML `use` 옆에 병기. YAML `Hero headline, bold confident statement` dest **1** · `Section headlines` dest **1** · `Primary button label` dest **1** · `Header CTA label` dest **3** 유지. `Section headlines`는 `Major section headlines`의 접두가 아님(대소문자).

### 결함 3 — tracking 원문 복원 (A1)

Additional Minimal tracking을 원본 `:125` `letter-spacing stays normal across the system — the warmth comes from the typeface, not from tracking manipulation`으로 복원. YAML tracking `0` dest **3** beside `normal` 유지.

`grep -oF -e` 실측:

| 문자열 | 원본 | sibling | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `shaped everything` | 1 | 0 | 1 | 1 | 2 |
| `friendly consumer-grade` | 1 | 0 | 1 | 1 | 2 |
| `lowers the barrier` | 1 | 0 | 1 | 1 | 2 |
| `pressing record` | 1 | 0 | 1 | 1 | 2 |
| `design expression` | 1 | 0 | 1 | 1 | 2 |
| `bold blue-and-white` | 1 | 0 | 1 | 1 | 2 |
| `bright, immediate, and unintimidating` | 1 | 0 | 1 | 1 | 2 |
| `unintimidating` | 3 | 0 | 1 | 1 | 4 |
| `Hero headline, max size, declarative` | 1 | 0 | 1 | 0 | 3 |
| `Major section headlines` | 1 | 0 | 1 | 0 | 4 |
| `Primary/dark button label` | 1 | 0 | 1 | 0 | 3 |
| `Header CTA, lighter weight` | 1 | 0 | 1 | 0 | 3 |
| `Hero headline, bold confident statement` | 1 | 0 | 1 | 0 | 2 |
| `Section headlines` | 1 | 0 | 1 | 0 | 3 |
| `Primary button label` | 1 | 0 | 1 | 0 | 2 |
| `Header CTA label` | 1 | 0 | 3 | 0 | 3 |
| `the warmth comes from the typeface` | 1 | 0 | 1 | 0 | 3 |
| `tracking manipulation` | 1 | 0 | 1 | 0 | 3 |
| `across the system` | 1 | 0 | 2 | 0 | 2 |

### 갱신한 dest 행

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §11 Brand Narrative | 고유 8바늘 DESIGN / P | 0 / 0 | **1** / **1** |
| YAML type-roles | `Hero headline, max size, declarative` DESIGN | 0 | **1** |
| YAML type-roles | `Major section headlines` DESIGN | 0 | **1** |
| YAML type-roles | `Primary/dark button label` DESIGN | 0 | **1** |
| YAML type-roles | `Header CTA, lighter weight` DESIGN | 0 | **1** |
| YAML type-roles | `the warmth comes from the typeface` DESIGN | 0 | **1** |
| YAML type-roles | `tracking manipulation` DESIGN | 0 | **1** |
| YAML type-roles | `across the system` DESIGN | 1 (미기록) | **2** |
| §3 Typography | Notes 4바늘 DESIGN | 0 | **1** |
| §3 Typography | warmth / tracking DESIGN | 0 | **1** |
| Deviations | `wc -w` | 6142 | **6197** |
| Header / Deviations | DESIGN SHA | `e693b2ae…` | `e568649e…` |
| F2 | 위 바늘 dual 목록 | 미수록 | E2a 수록 |

B2a `derived editorial implementation inference` DESIGN dest **22** 불변. `#1868db` dest **13**. `#ffffff` dest **12**. YAML `use` 12/12 dest 불변. `Header CTA label` dest **3**. `Section headlines` dest **1**.

`node scripts/check-limiter-ledger.mjs loom` → 본문 **22** / 원장 **22** (167–188) 1:1 OK.
`node test-v2/tools/migrate-reference.mjs --brand loom --gate-only` → PASS.

FIX_DONE loom fixed=3 logdest=13

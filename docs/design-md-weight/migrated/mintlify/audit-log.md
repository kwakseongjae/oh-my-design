# mintlify 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mintlify/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mintlify/DESIGN.md`
검증 sibling: `web/references/mintlify/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Mintlify-authored or a separately published UI specification`을 요구한다. 기존 25건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 25 / 원장 25. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic `:82`는 페어링·비병합·micro-softness·§7만 이름하고 Focus Ring ≠ `focus-visible`을 빠뜨렸다. Spacing `:145`는 YAML unitless 비병합만 이름하고 `:143`이 이미 적은 2px/5px/6px/7px/10px/96px 비YAML 읽기를 빠뜨렸다. Assets `:243`은 simpleicons만 이름하고 §4 Image Treatment를 Assets에 둔 배치·kind 생략을 빠뜨렸다. Capture record `:250`은 Featured Card / Logo/Trust / Atmospheric Hero / Trust Bar / Image Treatment / Pill / live-DOM만 이름하고 Feature Cards with Icons · CTA Footer Section · §9-only Title/Body on Standard Card를 빠뜨렸다. Live-DOM `:504`의 「YAML 키가 아니며 prose-derived 버튼을 대체하지 않는다」는 세 번째 부류인데 인접 완전형이 없었다.

## 수정 목록 (24건)

### B2a — 인접 한정 (본문 5건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:82` — Semantic color | Focus Ring `#18E299` is not a `focus-visible` token은 세 번째 부류. 기존 한정은 페어링·비병합·micro-softness·§7만. `:112`가 그 읽기를 적었으나 한정이 이름하지 않음. | 기존 완전형에 Focus Ring ≠ `focus-visible`을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:145` — Spacing | 2px / 5px / 6px / 7px / 10px / 96px를 §5/§1/§9/§12 기록으로 두고 추가 YAML 키로 쓰지 않기는 세 번째 부류. `:143`이 그 읽기를 적었으나 `:145` 한정이 YAML unitless·type/radius 비병합만. | 기존 완전형에 extra-step 비YAML 읽기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:243` — Assets | §4 Image Treatment를 Assets에 두고 kind/map을 생략하는 배치는 세 번째 부류. 기존 한정은 simpleicons만. `:250`이 Image Treatment를 이름했으나 Components 절이라 인접하지 않다. | 기존 완전형에 Image Treatment 배치·kind 생략을 접어 넣음. 주어를 복수로 맞춤. 발생 수 +0. |
| 4 | `DESIGN.md:250` — Capture record | Feature Cards with Icons / CTA Footer Section의 Kind:omitted, Standard Card의 §9-only Title/Body 배치는 세 번째 부류. 기존 한정 목록에 없음. | 기존 완전형에 세 읽기를 접어 넣고, Image Treatment는 Assets `:243`으로 옮긴 목록에서 뺌. 발생 수 +0. |
| 5 | `DESIGN.md:504` — Live-DOM footer | YAML `tokens.components.*`가 아니며 prose-derived 버튼을 대체하지 않는다는 분류, Cursor+Lovable 문장을 source-footer 기록으로 읽는 분류, kind 생략은 세 번째 부류. `:11`의 비병합 한정은 Scope 절이라 인접하지 않다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: 완전형 정규식 26(단수 25 + 복수 `inferences` 1 at `:198`). `not Mintlify-authored` 26, `separately published UI specification` 26. `grep -o` 단수 어간 `derived editorial implementation inference`도 26(복수 접두 1건 포함). `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 46, 56, 67, 82, 145, 159, 176, 180, 190, 198, 214, 218, 239, 243, 250, 462, 504, 518, 530, 560.

### E1 — provenance derived 범위 (6건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. Live-DOM 신설은 넓은 쪽이 아니라 본문 +1에 맞춘 것.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | 헤더 / 행 수 | 25 complete / 25 data rows. | **26** / **26**. |
| 7 | Semantic 행 | 페어링·비병합·micro-softness·§7만. 본문 `:82`가 이제 Focus Ring ≠ `focus-visible`도 이름한다. | 그 판단을 행에 추가. |
| 8 | Spacing 행 | YAML/§5/type·radius 비병합. 본문 `:145`가 이제 extra-step 비YAML도 이름한다. | 2px / 5px / 6px / 7px / 10px / 96px를 행에 추가. |
| 9 | Assets 행 | simpleicons만. 본문 `:243`이 이제 Image Treatment 배치·kind 생략도 이름한다. | 그 판단을 행에 추가. |
| 10 | Capture record 행 | Featured Card and §4-only compositions. 본문 `:250`이 이제 Feature Cards / CTA Footer / §9-only card copy를 이름한다. | 목록을 본문에 맞춤. |
| 11 | Live-DOM 행 | 없음. 본문 `:504` 신설. | 행 23 신설. |

헤더 / 데이터 행 **25 → 26** at 152–177 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (13건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다. 본문 한정 수정 뒤 A5a·F2 dest를 재실측했다(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 12 | YAML metadata 행 `tokens.source: prose-derived` | 로그가 exact 문자열 DESIGN dest 5 at 9/11/**82**/203. 실측 exact `tokens.source: prose-derived` DESIGN dest **2** at 9/203 (82 dest 0). 부분문자열 `prose-derived`는 착수 dest 5, 본문 수정 후 dest **6** at 9×2 / 11 / 203 / 504×2. provenance dest 14 → **15**. | exact dest 2와 부분문자열 dest 6을 분리해 적음. P dest **15**. |
| 13 | 같은 행 Footer **Verified:** | 로그가 DESIGN 9/502에 있다고 함. 실측 `Verified:` DESIGN dest **0** / provenance dest **1** at 30. | DESIGN dest 0. 날짜는 아래 행. |
| 14 | 같은 행 `2026-05-08` | 로그가 DESIGN 9/502 (2곳). 실측 dest **3** at 9/203/502. provenance dest **6**. | dest 3 / P dest 6, 줄 30/32/42/43/83/91. |
| 15 | 같은 행 `stripe` / `Apple-tier` | 로그가 provenance 35/28. 실측 stripe dest 1 at **36**, Apple-tier dest 1 at **30**. DESIGN dest 0 each. | 줄 번호를 실측에 맞춤. |
| 16 | 같은 행 `components_harvested` | 로그가 provenance 21/179. 실측 21/**181**. | 21/181. |
| 17 | YAML shadow 행 | `tokens.shadow.card` dest 3 / `tokens.shadow.button` dest 3. 실측 **경로** dest **2** each, **값** dest **3** each. | 경로 dest 2와 값 dest 3을 분리. |
| 18 | Footer live-DOM 행 Near-Black lab() | provenance dest ≥1. 실측 provenance dest **4**. | dest 4. |
| 19 | 같은 행 Conflicts | provenance.md 33. 실측 **34**. | 34. |
| 20 | §11 Brand Narrative | closing "Strong adoption among API-first SaaS companies" dest 2. 실측 대문자 dest **1** at 13. 소문자 dest 1 at 28은 다른 문자열. | dest 1 + 소문자 dest 1을 분리. fitpet형 2차 목적지 과대. |
| 21 | §12 / Deviations B2a 계수 | DESIGN 25 · inventory 25행 at 146–176. | **26** · inventory **152–177**. |
| 22 | Deviations 단어 수 | 7,364. 착수 `wc -w` 7,389, 본문 수정 후 **7,543**. | 7,543. |
| 23 | Pass 1 계수 | Count 25. Live-DOM 신설 후 **26**. | 26. 한정 목록에 Live-DOM / Focus Ring / extra-step / Image Treatment / Feature Cards를 반영. |
| 24 | Pass 2 / A5a dest 재실측 | 본문 수정 뒤 dest가 바뀐 문자열(`prose-derived` 5→6, `Cursor + Lovable` 1→2)을 로그가 옛 숫자로 들고 있음. 발행 카피 dest는 불변. | Pass 2를 재실측 뒤로 고침. A5a 표의 발행 라벨 dest는 재실측 불변(17 extracted / 0 missing). |

Destination SHA는 기록하지 않음. 줄 수 DESIGN **612** (한정은 기존 줄에 접힘·504에 신설 문장을 이어 붙임, 줄 수 불변). provenance 186→**187**.

A1 키 경로: YAML `tokens.components` 7레코드의 `type` / `bg` / `fg`(있는 것만) / `radius` / `padding` / `font`(있는 것만) / `use`가 대응 블록에 **행으로** 있다. 같은 hex가 다른 블록에 있어 grep만 통과하는 icook형은 없음. 복원 0.

## 범위 밖 관찰

- **D2a.** `migration-log.md` §13 삭제 행이 식별자 세 이름을 열거한 채 DESIGN dest 0 / provenance dest 0을 적는다. provenance Omission ledger `:140`은 `§13 페르소나 3인 (이름·나이·도시 포함)`으로 무식별. 본문 이름·나이·도시 dest 0. 동기·소속 분류(`OpenAPI` / `Series B` / `fintech` / `Indie SaaS` / `Free-tier`) DESIGN dest 0. `MDX` dest 1 · `AI search` dest 1은 원본 §14 상태 처리이지 페르소나 전기가 아니다. 원형 라벨 `DevRel engineers` / `technical writers` / `API documentation owners`는 원본 §13 머리 dest 1 / 산출 dest 1 — 게이트 copy-loss가 요구하는 원형 라벨이지 D2a 식별자가 아니다. 처분 행의 이름 열거는 D2a이나 본 감사 수정 범위(B2a·E2 목적지) 밖이라 로그만 보고한다.
- **E2d.** 부재 단언 행 전수. sibling-only 문자열의 DESIGN dest 0 주장은 DESIGN을 분모로 두고 참이다. 로그 mention은 use가 아니다. provenance sibling-only 목록은 「이 원장에 남긴다」이지 「이 파일에 없다」가 아니다. furiosaai `:183`형은 없음.
- **B1.** sibling 전용 값·분류의 본문 승격 없음. `Start for free` / `Contact sales` / `Try for free` / `Contact us` / `NEW · Workflows for self-updating docs` / `3.35544e+07px` / `dark canvas` / `Free/Pro/Enterprise` / `4×12` / `lab(… / 0.15)` / `lab(… / 0.03)` / `4×8×4×4` / `30px / 16px·400` / `#000` DESIGN dest 0. `32px` DESIGN dest 7은 원본 §5 스케일·카드 패딩·가로 패딩이지 sibling nav-height 분류가 아니다. `portal H2` dest 0.
- **A5a.** 게이트 `copy-loss` compared 0 / candidates 201 (`compared < candidates` → 손 대조 의무). 발행 라벨 손 스윕 17 extracted / 0 missing. YAML `use` 18 / 0. sibling 발행 카피 6종은 provenance에만 있고 본문 승격 없음. 설명문 라틴 손실 2건은 발행 카피가 아님: 원본 "carries the **entire** typographic load" → 산출 "carries the typographic load"; 원본 "creating containers that feel open rather than boxed" 산출 dest 0. 고치지 않음.
- **krafton hex 귀속.** `#ffffff`는 canvas · Card Background · `button-primary` fg. `#0d0d0d`는 ink · Gray 900 · `button-primary` bg · §7 Background. Semantic 한정은 canvas↔card↔`lab(100 0 0)`와 ink↔Gray 900↔`#0a0d10`를 이름한다. 컴포넌트 경로는 해당 블록 행으로 남아 있다. 원장 Semantic 행이 button fg/bg 귀속까지는 적지 않으나 키 경로가 다르므로 값 소실이 아니다. 고치지 않음.
- **충돌 처리 일관성.** YAML `#18e299` / §2 `#18E299` keep-both, catalog `#0d9373` 비병합, footer `lab()` vs prose hex 비병합 — 한 문서 안에서 같은 keep-both/비병합 정책. krds형 자리마다 다른 처리는 없음.
- **T2 모션 관례.** 0ms / 150ms / 250ms는 표에 인용된 채 역할만 남음. 미귀속 cubic-bezier 숫자는 합성하지 않고 생략(kmong형 모범).
- **원본 열 구조.** 색 역할명 + hex + Token-set path, 타입 롤 표의 Size/Weight/Line height/Tracking/`use` 열이 살아 있다. krds형 토큰명 열 삭제는 없음.

AUDIT_DONE fixes=24

## 개정 — 의미 검토 FAIL 3 (2026-09-02)

대상: `docs/design-md-weight/migrated/mintlify/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정. provenance 본문 무변경.

### 결함 1 — D2a — 삭제 처분 로그가 식별자를 재수록

`migration-log.md` §13 삭제 행이 dest 0을 보이려고 이름 세 개를 로그 행에 옮겨 적었다. 그 문장을 지우고 provenance Omission ledger `:140`과 같은 무식별 표기 `§13 페르소나 3인 (이름·나이·도시 포함)`만 남긴다. 식별 문자열 DESIGN dest 0 / provenance dest 0 / migration-log dest 0 / audit-log dest 0.

### 결함 2 — A1 · 항목 11 — Body Large §3 Notes를 짧은 YAML 쪽으로 절단

원본 YAML `:37` `use: "Hero descriptions, intros"` · §3 `:149` Notes `Hero descriptions, introductions`. 산출 Notes는 YAML 짧은 쪽만 두 번 적혀 있었다. Notes를 §3 긴 쪽으로 복원하고 YAML `use`는 `YAML use:`로 병기.

### 결함 3 — A1 · 항목 11 — Display Hero §3 Notes를 짧은 YAML 쪽으로 절단

원본 YAML `:33` `use: "Hero headlines"` · §3 `:144` Notes `Maximum impact, hero headlines`. 산출 Notes는 YAML 짧은 쪽만. Notes를 §3 긴 쪽으로 복원하고 YAML `use`는 `YAML use:`로 병기. 융합(`Maximum impact, Hero headlines`) 없음. 한정 신설 없음. 원장 행 수 26 불변.

`grep -oF -e` 실측 (파일별; 개정 후):

| 문자열 | SRC | SIB | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `Maximum impact, hero headlines` | 1 | 0 | **1** | 0 | 3 |
| `Hero headlines` | 1 | 0 | **1** | 0 | 3 |
| `Hero descriptions, introductions` | 1 | 0 | **1** | 0 | 3 |
| `Hero descriptions, intros` | 1 | 0 | **1** | 0 | 3 |

식별자 세 이름 SRC 1 / DESIGN 0 / provenance 0 / log 0 / audit-log 0.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML `tokens.typography` | `Hero headlines` DESIGN / P | (없음) | **1** / **0** |
| YAML `tokens.typography` | `Maximum impact, hero headlines` DESIGN / P | (없음) | **1** / **0** |
| YAML `tokens.typography` | `Hero descriptions, intros` DESIGN / P | (없음) | **1** / **0** |
| YAML `tokens.typography` | `Hero descriptions, introductions` DESIGN / P | (없음) | **1** / **0** |
| §3 Typography Rules | `Hero headlines` DESIGN | (없음) | **1** |
| §3 Typography Rules | `Maximum impact, hero headlines` DESIGN | (없음) | **1** |
| §3 Typography Rules | `Hero descriptions, intros` DESIGN | (없음) | **1** |
| §3 Typography Rules | `Hero descriptions, introductions` DESIGN | (없음) | **1** |
| A5a YAML use-strings | `Hero headlines` DESIGN / P | (없음) | **1** / **0** |
| A5a YAML use-strings | `Maximum impact, hero headlines` DESIGN / P | (없음) | **1** / **0** |
| A5a YAML use-strings | `Hero descriptions, intros` DESIGN / P | (없음) | **1** / **0** |
| A5a YAML use-strings | `Hero descriptions, introductions` DESIGN / P | (없음) | **1** / **0** |
| Deviations `wc -w` | DESIGN word count | 7,543 | **7,549** |

`node scripts/check-limiter-ledger.mjs mintlify` → 본문 **26** / 원장 **26** (152–177) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs mintlify` → use 18/18 (100%) 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand mintlify --gate-only` → PASS.

FIX_DONE mintlify fixed=3 logdest=13

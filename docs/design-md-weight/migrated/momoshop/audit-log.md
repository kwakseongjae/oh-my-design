# momoshop 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/momoshop/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/momoshop/DESIGN.md`
검증 sibling: `web/references/momoshop/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음 (source footer: getdesign.md/momoshop — NOT LISTED). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not momo購物網-authored or a separately published UI specification`을 요구한다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 복수 주어(`are derived editorial implementation inferences`)는 완전형.

착수 실측: 본문 완전형 24 / 원장 24. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic `:82`는 역할 페어링·키 비병합만 이름하고 칩 fill 이중 역할과 on-primary≠white-card-fill을 빠뜨렸다. Elevation `:137` 1px subtle shadow keep-both, Motion `:151` implicit hover≠duration token, Type roles `:195` 컴포넌트 font≠Heading/Body/Caption, Assets `:200` 사진 대체 거부, Search Chip `:283` / Primary CTA `:308` / Secondary `:357` / Trend Card `:378` 기하 비병합, Destructive `:333` confirm-delete hex≠button fill은 세 번째 부류인데 인접 완전형이 없었다. provenance는 sibling이 없다고 적었으나 `web/references/momoshop/.verification.md`가 존재한다. 로그는 `Primitive type: button` dest **3**을 주장했으나 본문 표기는 `` Primitive type: `button` `` dest **3**이고 unbackticked 문자열은 dest **0**(fitpet형 2차 목적지).

문장 분류: 브랜드 발행 사실(사명·태그라인·CTA·§10 표·§11 운영 사실) / 관측 기술(hex·스택·컴포넌트 기하·§14 상태 기록) / 편집적 해석·인과 판단(분위기, 역할 비병합, 기하≠spacing 키, kind/applicability 절차, 사진 대체 거부). 세 번째 부류와 원장 정확성만 수정. 토큰 값·컴포넌트 표·상태 applicability·구조는 그대로.

## 수정 목록 (31건)

### B2a — 인접 한정 (본문 10건, 발생 수 +9)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:82` — Semantic color | 칩 `#F2F2F2`를 canvas와 같은 hex의 다른 역할로 두는 것, on-primary text `#FFFFFF`를 white card fill과 비병합하는 것은 세 번째 부류. 기존 한정은 역할 페어링·키 비병합·canvas≠footer≠white card·white card≠surface만. | 기존 완전형에 두 읽기를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:137` — Elevation | §5 `1px subtle shadow` 철자를 Level 1/2 box-shadow 옆에 두고 대체하지 않는 것은 세 번째 부류. `:126`은 표 앞이라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:151` — Motion | §14 implicit hover를 duration token이 아니라고 읽는 것은 세 번째 부류. `:143`은 불릿 앞이라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:195` — Type roles | Header/CTA/Destructive/Tooltip font를 Heading/Body/Caption 행의 재기록이 아니라고 읽는 것은 세 번째 부류. `:178`은 표 앞. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:200` — Assets | 상품 사진을 발명한 브랜드색 장식으로 바꾸지 말라는 거부는 세 번째 부류. `:199`는 favicon pointer만. | 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:283` — Search Chip Tag | `16px` / `6px 8px`를 이 칩의 기하이지 `tokens.spacing` `6`/`8`/`16`이 아니라고 읽는 것은 세 번째 부류. Spacing `:109`는 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 7 | `DESIGN.md:308` — Primary CTA | §9 `38–44px`/`4–8px`를 harvested `38px`/`4px` 옆에 두는 것, 그 수치를 `tokens.spacing` `16`이 아니라고 읽는 것은 세 번째 부류. | 완전형 신설. 발생 수 +1. |
| 8 | `DESIGN.md:333` — Destructive Button | confirm-delete `#DD2726`를 이 다이얼로그의 confirm이지 이 버튼 default fill이 아니라고 읽는 것은 세 번째 부류. Semantic `:82`는 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 9 | `DESIGN.md:357` — Secondary Rules Button | `13px` / `3px 5px 3px 8px`를 로컬 기하이지 YAML rounded step 또는 `tokens.spacing` `3`/`5`/`8`이 아니라고 읽는 것은 세 번째 부류. | 완전형 신설. 발생 수 +1. |
| 10 | `DESIGN.md:378` — Search Trend Card | `15px`를 이 카드의 로컬 기하이지 YAML rounded step이 아니라고 읽는 것은 세 번째 부류. Shape `:122`는 인접하지 않다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 33, `not momo購物網-authored` 33, `separately published UI specification` 33. 완전형 33(단수 포함; 복수 `inferences` 9는 그 부분집합). `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 44, 54, 67, 82, 109, 122, 126, 137, 143, 151, 159, 174, 178, 195, 199, 200, 218, 259, 283, 308, 333, 357, 378, 431, 454, 470, 506.

### E1 — provenance derived 범위 (13건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. sibling 부재 단언은 실측보다 좁다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | Sibling handling | `find`가 `DESIGN.md`만 반환하고 `.verification.md`가 없다고 적음. 실측: `web/references/momoshop/.verification.md` 존재. | sibling 경로를 직접 적고, sibling-only 문자열은 본문에 사실·구조 분류로 승격하지 않았다고 원장을 맞춤. |
| 12 | Byte-form notes | `#ffffff` / `#f2f2f2` 역할 분리가 본문에 있는데 원장에 없음(krafton). | on-primary text ≠ white card fill ≠ control fill/text; canvas ≠ Search Chip Background를 Byte-form에 적음. 본문 역할은 고치지 않음. |
| 13 | 헤더 / 행 수 | 24 complete / 24 data rows. | **33** / **33**. |
| 14 | Semantic 행 | 역할·키 비병합만. 본문 `:82`가 이제 칩 dual-role과 on-primary≠card fill도 이름한다. | 그 판단을 행에 추가. |
| 15 | Elevation `:137` 행 | 없음. 본문 `:137` 신설. | 행 신설. |
| 16 | Motion `:151` 행 | 없음. 본문 `:151` 신설. | 행 신설. |
| 17 | Type roles `:195` 행 | 없음. 본문 `:195` 신설. | 행 신설. |
| 18 | Assets `:200` 행 | 없음. 본문 `:200` 신설. | 행 신설. |
| 19 | Search Chip Tag `:283` 행 | 없음. 본문 `:283` 신설. | 행 신설. |
| 20 | Primary CTA `:308` 행 | 없음. 본문 `:308` 신설. | 행 신설. |
| 21 | Destructive Button `:333` 행 | 없음. 본문 `:333` 신설. | 행 신설. |
| 22 | Secondary Rules `:357` 행 | 없음. 본문 `:357` 신설. | 행 신설. |
| 23 | Search Trend Card `:378` 행 | 없음. 본문 `:378` 신설. | 행 신설. |

헤더 / 데이터 행 **24 → 33** (E1 1:1).

### E2 / E2a / E2c / E2d — 로그 목적지 (8건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 24 | Portable Core SHA | 워커 SHA만. 본문 한정 추가 후 DESIGN 바이트가 바뀜. | 워커 SHA를 보존하고 auditor DESIGN SHA `f8241a7ff33cce8b77039a95b69271f7ee3070da7f135d417f1ea84098d6a612` · provenance SHA `74902cf5cb2a2fd4dce4c2b0f6200a031cf8983afac4ae33e689281f87810482`를 병기. `portable_core: true` 재평가 유지. |
| 25 | A5a 머리 | `(no sibling)`. 실측 sibling 존재. | 경로를 직접 적음. sibling은 live-inspect note이지 발행 카피 바늘이 아니라고 구분. |
| 26 | A5a gate 분모 | `Gate compared/candidates: no sibling`. 런 디렉터리에 게이트 숫자가 없고 sibling은 있다. | `compared`/`candidates`는 이 런 디르에 미기록; sibling 경로; 손 스윕 17이 분모. |
| 27 | A5a surviving 목록 | dest 수 없음. 본문 한정 추가 후 `momo購物網` DESIGN dest가 워커 33에서 **42**로 변함(각 B2a 닫힘이 발행명 사용). | 17바늘 DESIGN dest를 재실측해 적음. |
| 28 | C2 `Primitive type: button` | dest **3**. 실측 unbackticked DESIGN dest **0**. 본문은 `` Primitive type: `button` `` dest **3**. | 백틱 형태 dest를 적고, unbackticked는 2차 목적지가 아니라고 닫음. `input`/`card`/`badge`도 같은 형태. |
| 29 | F1 | DESIGN 24 · inventory 24행. | **33** · inventory **33**. 추가 9건과 `:82` fold를 적음. |
| 30 | Unique-phrase 행 | 페르소나 식별자(도시 포함)를 열거한 채 dest 0을 주장(D2a 재수록 + E2d 자기부정). | 식별자를 빼고 `Persona-only identifiers were dest 0 by D2`로만 적음. |
| 31 | F2 | 착수 dest를 재실측하지 않음. B3 줄은 맞지만 sibling 2차 목적지와 Primitive-type 2차 목적지가 비어 있음. | 감사 후 재실측, B3 dest **1** at `:151`, sibling은 provenance+log(본문 dest 0), unbackticked primitive type은 본문 dest 0. |

Homepage `https://www.momoshop.com.tw` DESIGN dest **6** · P dest **11**, `#D62872` DESIGN dest **19** · P dest **6**, `#d62872` DESIGN dest **6** · P dest **3**, favicon slug dest **1**/**1**, `prose-derived` dest **2**/**8**, `components_harvested` DESIGN dest **0** · P dest **3**, `讓你找到更多更多` dest **3**/**1**, `value in motion` dest **1**/**1**, `861796017` dest **1**/**1**, `tokens.rounded.full` dest **2**/**1** — 착수 숫자와 일치, 유지.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 역할 표, 컴포넌트 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 24개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다 (v12 전제 주석). 문법 변형(복수 주어)은 완전형.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 151 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1).
- 원본 §15 duration·easing이 본문 Motion에 인용된 채 역할 서술만 남는 것은 T2 관례. 값 소실로 되살리지 않음.
- 원본에 없는 custom cubic-bezier를 합성하지 않고 `none defined in inspected source`로 둔 것은 모범(kmong).
- YAML `tokens.components.<id>.<field>` 10레코드의 type/bg/fg/radius/padding/font/use/states는 대응 블록에 행으로 있음. icook형 키 경로 소실 없음. 복원하지 않음.
- Cart Badge width/height, Rank `0.29%`/`99.69%` stops, Tooltip title+body font는 YAML 옆에 §4 완전 기록이 남아 있음. 값 존재만으로 보존을 단정하지 않고 **그 블록의 행**으로 확인함.

## 범위 밖 관찰

- **A5a.** 게이트 `compared`/`candidates`는 이 런 디르에 없음. `verdict: PASS`를 이 파일이 주장하지 않는다. 손 대조 발행 카피 17바늘은 본문에 dest ≥1. 라틴 발행 카피 손실은 눈에 띄지 않음. source footer 인용 `No designs found for 'momoshop'` DESIGN dest **0** / P dest **1**, `refero` DESIGN dest **0** / P dest **2** — getdesign.md/refero 조회문이지 momo 발행 카피가 아니다. 고치지 않음.
- **B1.** sibling `web/references/momoshop/.verification.md` 존재(경로 직접). sibling 전용 `78f6a3915de2905b` / `theme-color` / `primary-pink` / `momo-color` / `momo-red` / `Myriad Pro` / `apple-system` / `BlinkMacSystemFont` / `Noto Sans TC` DESIGN dest **0** / 원본 dest **0**. 구조 분류(`portal H2`류) 승격 없음. 고치지 않음.
- **D2a.** 페르소나 이름·나이·도시는 단어경계로 DESIGN/P/log dest **0**. 동기·소속 분류의 페르소나 전용 표현도 본문 dest **0**. Audience `:28`는 원본 §11 그룹 문구 `each shopper` / `an endlessly expanding catalogue that surfaces exactly what each shopper needs`만. 로그 unique-phrase 열거는 수정 #30에서 제거. 원형 라벨 재수록을 D2a로 지목하지 않음.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. dest **0** 주장은 `DESIGN.md`와 provenance를 분모로 둔다(`components_harvested`, `native application` 묶음, unbackticked `Primitive type: button`). unique-phrase의 식별자 열거는 수정 #30에서 제거.
- **hex 귀속.** `#ffffff`는 on-primary text · white card fill · Search Input/Secondary fill · 여러 컨트롤 text. `#f2f2f2`는 canvas와 Search Chip Background. 분리를 원장 Byte-form에 적음(수정 #12). 본문 역할은 고치지 않음.
- **A1 열 구조.** Semantic color 행에 Token-set path 열이 있고 YAML 14키가 그 열에 있다. Rank `(30, bg)`류 단계 귀속 수식어는 원본에 없음. krds형 토큰명 열 삭제는 없음.

AUDIT_DONE fixes=31

---

## 개정 — 기계검사 limiter 1:1 (2026-09-02)

검사: `본문=0 원장=33 (164–196) MISMATCH Derived editorial inventory`. use 14/14 · gate PASS · `portable_core=true` — 이 세 항목은 불일치 아님.

원인: 원장 33행은 본문 33자리와 1:1로 대응한다. 각 자리는 `derived editorial implementation inference(s)` + `separately published` + `not …-authored`를 한 줄에 갖고 있었다. `-authored` 토큰이 `momo購物網`(CJK)이라 `check-limiter-ledger.mjs`의 `\bnot [A-Za-z0-9가-힣][A-Za-z0-9가-힣 .&'-]{0,58}-authored`가 0건으로 셌다. 완전형 한정이 기계적으로 빠진 자리이므로 본문 예외를 적용했다. 과잉 원장 행이 아니다 — 행을 지우거나 합치지 않음.

처방: 그 33곳의 닫힘만 `not momoshop-authored`로 바꿈 (gatefix `not {{brand}}-authored`). 발행명 `momo購物網`은 H1·서사·`momo購物網-hosted` 등에 유지. 원장 절 제목 `## Derived editorial inventory`, 헤더 `| Location in DESIGN.md | Qualified reading |`, 데이터행 33 유지.

### 행마다 판정 (원장 164–196)

| 원장 행 | Location | 본문 | 판정 |
|---|---|---|---|
| 164 | Experience Scope `:9` | `:9` 세 조각 있음, `-authored` CJK | 닫힘 토큰만 교체. 행 유지 |
| 165 | Experience Scope `:11` | `:11` 동일 | 동일 |
| 166 | Experience Scope `:13` | `:13` 동일 | 동일 |
| 167 | Primary tasks `:19` | `:19` 동일 | 동일 |
| 168 | Audience `:28` | `:28` 동일 | 동일 |
| 169 | Distinctive traits `:32` | `:32` 동일 | 동일 |
| 170 | Principles `:44` | `:44` 동일 | 동일 |
| 171 | Application rules `:54` | `:54` 동일 | 동일 |
| 172 | Avoid `:67` | `:67` 동일 | 동일 |
| 173 | Semantic color `:82` | `:82` 동일 | 동일 |
| 174 | Spacing `:109` | `:109` 동일 | 동일 |
| 175 | Shape `:122` | `:122` 동일 | 동일 |
| 176 | Elevation `:126` | `:126` 동일 | 동일 |
| 177 | Elevation `:137` | `:137` 동일 | 동일 |
| 178 | Motion `:143` | `:143` 동일 | 동일 |
| 179 | Motion `:151` | `:151` 동일 | 동일 |
| 180 | Font evidence `:159` | `:159` 동일 | 동일 |
| 181 | Family `:174` | `:174` 동일 | 동일 |
| 182 | Type roles `:178` | `:178` 동일 | 동일 |
| 183 | Type roles `:195` | `:195` 동일 | 동일 |
| 184 | Assets `:199` | `:199` 동일 | 동일 |
| 185 | Assets `:200` | `:200` 동일 | 동일 |
| 186 | Capture record `:218` | `:218` 동일 | 동일 |
| 187 | Search Input (Desktop) `:259` | `:259` 동일 | 동일 |
| 188 | Search Chip Tag `:283` | `:283` 동일 | 동일 |
| 189 | Primary CTA `:308` | `:308` 동일 | 동일 |
| 190 | Destructive Button `:333` | `:333` 동일 | 동일 |
| 191 | Secondary Rules Button `:357` | `:357` 동일 | 동일 |
| 192 | Search Trend Card `:378` | `:378` 동일 | 동일 |
| 193 | Layout & Platforms `:431` | `:431` 동일 | 동일 |
| 194 | Content & Locales `:454` | `:454` 동일 | 동일 |
| 195 | Content & Locales `:470` | `:470` 동일 | 동일 |
| 196 | Named gaps `:506` | `:506` 동일 | 동일 |

과잉 행 0. 본문 한정이 없는 자리 0. 원장 병합·삭제 0.

로그 dest 재실측 (split 비겹침): `momo購物網` DESIGN **9** (감사 42 → 9; B2a 닫힘 33건이 발행명 dest를 부풀렸던 분). `not momoshop-authored` DESIGN **33**. `not momo購物網-authored` DESIGN **0**. `derived editorial implementation inference` **33**. `separately published UI specification` **33**. provenance Proof-notes 닫힘 토큰을 본문과 맞춤.

검증:
- `node scripts/check-limiter-ledger.mjs momoshop` → 본문 33 = 원장 33 (164–196) 1:1 OK
- `node scripts/check-yaml-use-landing.mjs --list momoshop` → use 14/14 (100%) 미착지 0
- `node test-v2/tools/migrate-reference.mjs --brand momoshop --gate-only` → PASS
- `portable_core=true`

토큰 값·컴포넌트 표·상태 applicability·원본·CURRENT_STATE 미수정.

FIX_DONE momoshop mech

---

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/momoshop/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (33=33). provenance 본문 무변경.

### 결함 1 — A1 · `Traditional Chinese` / `body readability`

원본 §1 `:64` `Microsoft JhengHei UI and PingFang TC for body readability in Traditional Chinese`를 Experience Scope 타이포 문장에 복원. 같은 문장의 두 조각은 결함 1건. 편집 치환 `with PingFang TC in the body stack`은 원본 표기로 되돌림. 한정 신설 없음 — 원본이 세운 사실 인용.

`node scripts/check-limiter-ledger.mjs momoshop` → 본문 **33** / 원장 **33** (164–196) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs momoshop` → 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand momoshop --gate-only` → PASS.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용):

| 문자열 | SRC | SIB | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `Traditional Chinese` | 1 | 0 | **1** | 0 | 7 |
| `body readability` | 1 | 0 | **1** | 0 | 7 |
| `and PingFang TC` | 1 | 0 | **1** | 0 | 4 |
| `with Century Gothic` | 1 | 0 | **1** | 0 | 2 |
| `in the body stack` | 0 | 0 | **0** | 0 | 3 |
| `PingFang TC` | 3 | 3 | **3** | 1 | 7 |

로그 extra hits는 이 파일 분모가 아니라 migration-log 개정 절·§1/F2 dest 행 (E2d). provenance **0**은 원본 사실이므로 원장 행을 만들지 않음.

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §1 Visual Theme | `Traditional Chinese` DESIGN / P | 0 / 0 | **1** / **0** |
| §1 Visual Theme | `body readability` DESIGN / P | 0 / 0 | **1** / **0** |
| §1 Visual Theme | `and PingFang TC` DESIGN / P | 0 / 0 | **1** / **0** |
| §1 Visual Theme | `with Century Gothic` DESIGN / P | 0 / 0 | **1** / **0** |
| §1 Visual Theme | `in the body stack` DESIGN | 1 | **0** |
| Unique-phrase | Restored-from-zero | 0 | **1** |
| F2 | `Traditional Chinese` DESIGN / P | 없음 | **1** / **0** |
| F2 | `body readability` DESIGN / P | 없음 | **1** / **0** |
| Hashes | DESIGN.md SHA | `01551bb13579b7a15107a8bb23de8f85ed827b852b5cb512c5cfcc416bbe257d` | `d00c7e4f410d3b6317dca4cd8a23e0c3a2b395253ddb03fde90ba7ca05a44647` |

provenance SHA `c54131947e0de2d3301b26a80e3de1e2fc904907afb74db7576212d1f4c70846` 불변. `momo購物網` DESIGN dest **9** · `derived editorial implementation inference` **33** · `not momoshop-authored` **33** 불변.

FIX_DONE momoshop fixed=1 logdest=9

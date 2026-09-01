# Meta 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/meta/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/meta/DESIGN.md`
검증 sibling: `web/references/meta/.verification.md` — `find`로 경로 직접 확인. 파일 **존재**.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Meta-authored or a separately published UI specification`을 요구한다. 문법 변형 `none of them is Meta-authored`(복수 주어, Components how-to-read)는 완전형이다.

착수 실측: 본문 완전형 11 / 원장 Derived inventory **0행**. 숫자는 1:1이 아니다(fastcampus형 좁은 쪽). Scope·Distinctive 한정이 일부 읽기를 이름하지 않았고, Audience / Spacing / Shape / Font evidence / Type roles / Assets에 세 번째 부류인데 인접 완전형이 없었다. Shape·Elevation은 Spacing과 달리 YAML 키 행이 없었다. migration-log·provenance가 sibling을 **없음**으로 적었으나 `find web/references/meta/.verification.md`는 파일을 연다.

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **17**, `not Meta-authored` **16** + `none of them is Meta-authored` **1**, `separately published UI specification` **17**. `provenance.md` Derived editorial inventory **17**행. `migration-log.md` mention은 use가 아니다.

한정 줄: 19, 25, 34, 38, 50, 138, 142, 165, 174, 196, 211, 245, 260, 282, 505, 643, 690.

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 9건, 발생 수 +6)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:19` — Scope | 세 번째 부류인데 한정이 3차원·분위기·template·flex·scale만 이름함. 하드웨어 토큰 금지, “deliberately moved past” / heritage-blue 인과, non-identical 도메인은 빠져 있음. | 기존 완전형에 그 읽기들을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:34` — Audience | 제품군 이름을 group-level observable-actor로 읽는 것은 세 번째 부류. 인접 완전형 없음. | 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:38` — Distinctive traits | “values are recorded observations”가 3차원 bullet까지 관측으로 읽힘. 그 bullet의 “same editorial class as Scope”는 class를 끝까지 닫지 않음. | 3차원 bullet을 관측이 아닌 편집 읽기로 이름하고 절 머리 완전형에 접음. 발생 수 +0. |
| 4 | `DESIGN.md:138` — Spacing | YAML 키 목록과 §5 common values(20/64/96은 YAML 키가 아님)를 나란히 두는 비병합은 세 번째 부류. 인접 완전형 없음. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:142` — Shape | YAML `sm/md/lg/full` 키 행이 없고 Compact/Standard/… 라벨만 있음. Spacing은 키를 남겼다(웨이브 40 항목 5 동형). 비병합 판단에 한정 없음. | YAML 키 행 복원 + 완전형 신설. 발생 수 +1. `sm: 6` `md: 8` `lg: 16` `full: 9999` DESIGN dest **1** each. |
| 6 | `DESIGN.md:148–165` — Elevation | YAML `standard/featured/gradient/dialog` 키 경로가 Level 라벨 표에만 값으로 남음. toast-local ≠ YAML/Level 2는 세 번째 부류인데 `:165`가 3차원만 이름함. | YAML 키 행 복원. 기존 완전형에 키≠Level 라벨·toast-local 분류를 접음. 발생 수 +0. |
| 7 | `DESIGN.md:211` — Font evidence | evidence-class 정렬과 fallback≠Optimistic은 세 번째 부류. 인접 완전형 없음. | 완전형 신설. 발생 수 +1. |
| 8 | `DESIGN.md:245` — Type roles | YAML `use`를 Notes 옆에 두는 병기는 세 번째 부류. A1a 비율 문장만 있고 한정 없음. | 완전형 신설. 발생 수 +1. |
| 9 | `DESIGN.md:260` — Assets | 사진·하드웨어를 first-party로 두고 발명 장식 대체를 거부하는 것은 세 번째 부류. 인접 완전형 없음. | 완전형 신설. 발생 수 +1. |

수정 전 11 → 수정 후 **17**.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 착수 시 본문 11 · 원장 0행.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 10 | Derived editorial inventory | 절 없음. | **17**행 신설. 본문 한정 줄과 1:1. |
| 11 | Sibling verification file | “does not exist”. `find`는 파일을 연다. | 파일 실재 + live-DOM 샘플을 원장에만 기록. 부재를 단언하지 않음(E2d). 본문 승격 0(B1). |
| 12 | Same-hex role split | `#FFFFFF`·`#0064E0` 등이 자리마다 다른 역할인데 원장에 분리가 없음(krafton형). | 표 신설. `#0058C4`는 Foundations Semantic이 아님을 명시. |
| 13 | Claim ledger shadow 주 | YAML 키와 Level 라벨의 대응이 본문에 생겼는데 원장이 키 경로를 안 적음. | `standard`=Level 1 Subtle 등 비병합 대응을 한 줄로 보탬. |

### A1 — 키 경로 복원 (2건, B2a #5·#6과 동일 자리)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 14 | Shape | `tokens.rounded.sm/md/lg/full` 값이 Compact 6 / Standard 8 / Large 16 / Pill 9999에만 있고 키 행이 없음. | YAML 키 행. 해석(비병합)은 `:142` B2a. |
| 15 | Elevation | `tokens.shadow.standard/featured/gradient/dialog` 값이 Level 표·컴포넌트에만 있고 키 행이 없음. YAML `standard` ≠ 표 “Standard (Level 2)”. | YAML 키 행 + 키≠Level 대응. 해석은 `:165` B2a. |

`tokens.components.<id>.<field>` 13레코드: type/bg/fg/radius/padding/font/use는 대응 블록에 행으로 있음. `tab.active`·`segmented.active` 복합 문자열은 같은 블록의 Indicator/Text(active)·Active 행으로 쪼개져 있음(icook형 타 블록 hex가 아님). 값 복원 추가 없음.

### E2 / E2a / E2c — 로그 목적지 (7건)

본문이 아니라 로그만 고침. 2차 목적지는 DESIGN dest를 `grep -o | wc -l`로 재실측.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 16 | 헤더 Sibling | **없음** (`ls` only). 실측: 파일 존재. | **존재**. A5a에 sibling 추출 0 / 발행 카피 바늘 0. |
| 17 | A5a 표 | sibling을 분모에서 뺌. | 추출 334+**0** / 바늘 45 / 미생존 0. 본문 수정 후 바늘 45종 dest ≥1 재실측. |
| 18 | YAML `tokens.colors` | **17키**, “전부 Foundations”. 실측 19키. `#0058C4` Foundations Semantic **0** · DESIGN dest **4** (Capture Hover + Solid hover + Gradient pressed). | 19키. `#0058C4` 목적지를 컴포넌트/캡처로 고침. |
| 19 | YAML `tokens.rounded` | Compact/Standard/… 라벨만. 키 dest 0이었다. | `sm: 6` 등 DESIGN dest **1** each. |
| 20 | YAML `tokens.shadow` | 값 dest가 키 복원 전 수치. | `0 1px 2px…` **4** · `0 4px 16px…` **3** · `0 8px 32px…` **3** · `0 12px 28px…` **3**. Level 3 DESIGN **1** · provenance **1**. toast shadow DESIGN **2** · provenance **1**. |
| 21 | B2 / B2a 행 | DESIGN **11**. | **17**. provenance inventory **17**행. |
| 22 | C4 행 + E1/E2/F1/F2 | C4 grep 문자열이 백틱 없는 `Omitting kind…`(DESIGN dest 0에 해당). E1이 derived 범위를 안 적음. sibling 부재 주장이 E2와 불일치. | 실제 문자열 `Omitting \`kind\` and a state-applicability map` dest **1**. E1·E2·F1 줄을 재실측에 맞춤. |

## D2a / E2d / B1 (검사, 본문 수정 없음)

- D2a: §13 삭제 행은 절·인원·필드 종류만. `Maya` / `David` / `Priya` / `Austin` DESIGN 0 · provenance 0 · log 0. 동기·소속 분류가 Primary tasks/Audience에 페르소나 전기로 재구성되지 않음(Audience는 원본 §11 제품군).
- E2d: 착수 시 provenance `:40` “does not exist”는 파일 부재 허위이지 자기나열 부재 단언은 아님. 수정 후 `does not exist` provenance **0**. Sibling 원장은 “이 문자열이 세 파일에 없다”고 쓰지 않음.
- B1: sibling 전용 값 `#1c1e21` `#0457cb` `#768591` `Optimistic Display Medium` `100px` `getComputedStyle` `playwright` DESIGN dest **0**. 구조 분류(live heading / live primary button)도 본문에 사실로 승격되지 않음.

## 범위 밖 관찰

- **A5a.** 게이트 `compared < candidates`(전량 라틴). `verdict: PASS`를 카피 보존으로 읽지 않음. 손 대조 바늘 45 / 미생존 0. 라틴 발행 카피 손실은 이 표본에서 보이지 않음.
- **A5a 분모.** 워커 추출 334 vs 이 세션의 거친 따옴표+백틱 합 359. 추출기 차이로 보고만 함. 334를 바꾸지 않음.
- **A5a `beyond`.** DESIGN dest **5**. 그중 B3 게이트 문장 “beyond the source-stated rows”는 그리스 어원 인용(`The name derives from the Greek "beyond"`)이 아니라 mention. 바늘 목록의 2차 목적지로 세기 위험(fitpet형). 본문은 고치지 않음.
- **D1.** Content `:704` 근처 “No adjacent locale is claimed.” 원본에 locale 도메인이 없다. 부정 claim 신설 여부 — 범위 밖, 미수정.
- **A1 `active` 복합 문자열.** `tokens.components.tab.active` `"3px bottom border #0064e0 with #0064e0 text"` 전문은 Top Tab 블록에 한 행으로 없고, 같은 블록의 Indicator + Text (active)로 쪼개져 있다. hex가 다른 컴포넌트에만 있는 icook형은 아님.
- **sibling live-DOM vs 원본 토큰.** `#0457cb` / body Helvetica 12px / heading `#000000` 48px 400 / radius 100px 는 원본 DESIGN.md 0. 워커가 본문에 넣지 않은 것은 B1 준수. 충돌을 한쪽으로 고치지 않음(원본 토큰 유지).

AUDIT_DONE fixes=22

## 개정 — 의미 검토 FAIL 2 (2026-09-02)

대상: `docs/design-md-weight/migrated/meta/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. provenance 불변. 완전형 16 = 원장 16.

### 결함 1 — D1 locale 도메인 부정 claim 신설

원본에 locale 도메인이 없다. Content 끝의 `The source does not establish a locale profile beyond this English-language voice contract. No adjacent locale is claimed.`를 삭제. 미해상은 안 적는 것.

### 결함 2 — A1 §11 재브랜드 FROM·행위 소실

원본 `:517` `signaling a strategic pivot from a single social network`를 Experience Scope `:9` October 2021 문장에 복원. 도착점(social graph / devices / immersive web)은 기존 §1 문장.

`grep -oF -e` 실측 (파일별; 개정 후):

| 문자열 | ORIG | DEST | PROV |
|---|---:|---:|---:|
| `locale` | 0 | **1** (`content-locales` 마커만) | 0 |
| `locale profile` | 0 | **0** | 0 |
| `adjacent locale` | 0 | **0** | 0 |
| `No adjacent locale is claimed` | 0 | **0** | 0 |
| `strategic pivot` | 1 | **1** | 0 |
| `single social network` | 1 | **1** | 0 |
| `October 2021` | 1 | **2** (불변) | 0 |

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §11 Brand Narrative | `strategic pivot` DESIGN | (행에 없음 / 본문 0) | **1** |
| §11 Brand Narrative | `single social network` DESIGN | (행에 없음 / 본문 0) | **1** |
| Unique-expression | 뽑은 표현 수 | 226 | **228** |
| Unique-expression | 0이었다가 복원한 수 | 11 | **13** |
| D1 / D1a | `locale profile` DESIGN | (행에 없음 / 본문 1) | **0** |
| D1 / D1a | `adjacent locale` DESIGN | (행에 없음 / 본문 1) | **0** |
| D1 / D1a | `No adjacent locale is claimed` DESIGN | (행에 없음 / 본문 1) | **0** |
| D1 / D1a | `locale` DESIGN | (행에 없음 / 본문 3) | **1** |

`node scripts/check-limiter-ledger.mjs meta` → 본문 **16** = 원장 **16** (161–176).
`node test-v2/tools/migrate-reference.mjs --brand meta --gate-only` → PASS.

FIX_DONE meta fixed=2 logdest=8

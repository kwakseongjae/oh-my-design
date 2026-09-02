# moin 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/moin/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/moin/DESIGN.md`
검증 sibling: `web/references/moin/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음(getdesign.md no data; refero no Moin fintech match). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Moin-authored or a separately published UI specification`을 요구한다. 기존 32건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 32 / 원장 32. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic color `:111` 32px 비병합, Tinted/Cool/Eyebrow 기하, Top Navigation 동일시, State-record 비부착은 세 번째 부류인데 인접 완전형이 없었다. How-to-read `:234`는 kind/applicability만 이름하고 같은 문단의 Focus≠`focus-visible`을 한정이 말하지 않았다. Exchange/Nav/Dark/Carousel/Amount 기하는 자리마다 완전형이 있어, 같은 종류의 경로 유지를 카드·라벨에서만 빼 둔 것은 자리마다 다른 처리(항목 5)다.

## 수정 목록 (26건)

### B2a — 인접 한정 (본문 7건, 발생 수 +6)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:111` — Semantic color 32px unmerge | 섹션 타이틀 `#333333`≠Ink Navy, 두 32px 용도 비병합은 세 번째 부류. `:85`는 역할 페어링·azure/`#007bff`만 이름하고 이 문단과 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:234` — How to read | generic Focus≠`focus-visible`, amount 관측 active≠`focus-visible` 색은 세 번째 부류. 기존 한정은 kind/applicability만. | 기존 완전형에 두 판단을 접어 넣음. 주어를 복수로 맞춤. 발생 수 +0. |
| 3 | `DESIGN.md:368` — Tinted Surface Card | `16px`≠`tokens.spacing.base: 16`은 세 번째 부류. Exchange CTA 등 다른 컨트롤 기하는 완전형이 있는데 이 자리만 없었다. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:380` — Cool Feature Block | 이 블록의 16px≠Tinted Surface Card의 16px는 세 번째 부류. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:391` — Azure Eyebrow | 16px / 700≠spacing step, ≠Body type-role은 세 번째 부류. | 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:402` — Top Navigation | 바 CTA를 Nav Send와 같은 컨트롤로 읽는 것은 세 번째 부류. C4 생략은 how-to-read가 덮는다. | 완전형 신설. 발생 수 +1. |
| 7 | `DESIGN.md:420` — State record 비부착 | 시스템 레벨 처리를 destination header·carousel에 붙이지 않는다는 판단은 세 번째 부류. `:406`은 unattributed system-level만 이름하고 표 뒤 문단과 인접하지 않다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **38**, `not Moin-authored or a separately published UI specification` **38**. 완전형 38(단수 + 복수 `inferences`). `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived editorial` P 0 / `not Moin-authored` P 1 = mention). `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 68, 85, 111, 117, 129, 143, 147, 173, 184, 188, 196, 200, 213, 217, 226, 234, 249, 274, 298, 321, 346, 368, 380, 391, 402, 406, 420, 425, 427, 454.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. `#ffffff` canvas / on-primary 분리는 본문에 이미 두 경로로 있었고 원장 Byte-form notes에 없었다(krafton형).

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | 헤더 / 행 수 | 32 complete / 32 data rows. | **38** / **38**. |
| 9 | How-to-read 행 | Kind/applicability / not-complete. 본문 `:234`이 이제 Focus≠`focus-visible`·observed active도 이름한다. | 그 판단을 행에 추가. |
| 10 | Semantic color 32px unmerge 행 | 없음. 본문 `:111` 신설. | 행 신설. |
| 11 | Tinted Surface Card geometry 행 | 없음. 본문 `:368` 신설. | 행 신설. |
| 12 | Cool Feature Block geometry 행 | 없음. 본문 `:380` 신설. | 행 신설. |
| 13 | Azure Eyebrow geometry 행 | 없음. 본문 `:391` 신설. | 행 신설. |
| 14 | Top Navigation identity 행 | 없음. 본문 `:402` 신설. | 행 신설. |
| 15 | State record non-attachment 행 | 없음. 본문 `:420` 신설. | 행 신설. |

Byte-form notes `:113`: `tokens.colors.canvas`와 `tokens.colors.on-primary`가 `#ffffff`를 두 경로로 나눈다는 실측을 원장에 적음(E1, 발생 수 본문 한정과 별개).

헤더 / 데이터 행 **32 → 38** at provenance 151–192 (E1 1:1).

### E2 / E2a — 로그 목적지 (11건)

본문이 아니라 로그만 고침. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문 한정 추가 뒤 A5a·F2 dest 표를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 16 | YAML `tokens.colors` hex 표 | `#007bff` dest **7**. 실측 dest **8**. | dest **8**. |
| 17 | 같은 행 | `#efefef` dest **9**. 실측 dest **10**. | dest **10**. |
| 18 | 같은 행 | `#e0e0e0` dest **4**. 실측 dest **5**. | dest **5**. |
| 19 | YAML `live-extract` 행 | P dest **1**. 실측 P dest **2** (Identity 표 + dual 문장). | P dest **2**. |
| 20 | §11 행 | `licensed small-sum overseas-remittance` dest **1**. 실측 dest **2** (서술 + "provider status" 재명명, 같은 문단). | dest **2**. |
| 21 | spacing/rounded 행 | `full: 9999` dest **5**. 실측 `full: 9999` dest **2**; `9999` dest **5**. 패턴과 계수가 다른 바늘. | `full: 9999` dest **2** · `9999` dest **5**. |
| 22 | §15 durations 행 | `` `motion-fast` 120ms dest 1 ``. 실측 `motion-fast` dest **2** · `120ms` dest **1**. | 바늘 분리. |
| 23 | 같은 행 | `` `motion-standard` 200ms dest 1 ``. 실측 `motion-standard` dest **2** · `200ms` dest **1**. | 바늘 분리. |
| 24 | Deviations B2a 측정 | DESIGN 32 · inventory 32행. | **38** · inventory **151–192**. |
| 25 | Sibling handling | `MOIN 모인 기술 블로그`를 sibling-only로 적음. 실측 D **0** / P **2** / 원본 HTML 주석 **1** / sibling **2**. 원본 주석이 이미 이름한다. | sibling-only 목록에서 빼고 D 0 / P 2 + 원본 주석 출처를 적음. |
| 26 | Deviations 단어 수 | `7,646` words. 본문 한정 추가 후 `wc -w` **7,885**. | **7,885**. |

Destination SHA는 워커 마감 기록으로 남겨 두었다. 현재 DESIGN은 F3 한정 추가 후 그 SHA와 다르다.

## 범위 밖 관찰

- **A1 키 경로.** YAML `tokens.components.<id>.<field>` 8레코드 전 필드를 대응 블록 행으로 대조. 전부 `in_block=true` (Exchange CTA / Nav Send / Dark Secondary / Carousel / Currency Amount / Tinted Surface Card / Cool Feature Block / Azure Eyebrow). icook형 타 블록 hex 차용 없음. 복원 없음.
- **A5a.** 게이트 `coverage: copy-loss compared 0 / candidates 175`. `verdict: PASS`는 대조 바늘 0건의 손실 없음이지 카피 보존이 아니다. 발행 카피 손 대조: `Send money` D 14 / `More reviews` D 8 / `Speed` D 7 / `Easy to start` D 6 / `Lower fees` D 7 / `Why so many users choose MOIN` D 4 / 긴 hero D 6 / `Fast, direct remittances you can trust` D 5 / `Done in five minutes, right in the app` D 5 / `모인` D 3. 라틴 발행 카피 손실은 보이지 않았다. `great rates`는 §13 전기 인용이지 발행 UI 카피가 아니다(D 0 / P 0; 로그 mention).
- **B1.** sibling 전용 값: amount height `47px` D 0 / P 1; `Previous review`/`Next review` D 0 / P 1; `MOIN: Global Money Transfer` D 0 / P 1; `1440×900` D 0 / P 3; blog link `rgb(0,55,100)`/`rgb(0,91,153)` D 0 / P 1. 본문 승격 없음. dest `12px` 1회는 원본 §5 Scale `4px, 8px, 12px, …`이지 sibling radius frequency `12px` ×2가 아니다. dest `feature H3` 1회는 원본 HTML 주석 `Feature eyebrow H3`(ORIG 1)이지 sibling `h3 eyebrows`의 구조 분류 승격이 아니다.
- **D2a.** 식별자 원본 대조: `응웬` / `Nguyen Van` / `김서연` / `David Park` / `안산` / `판교` 세 파일 모두 0. 처분 행은 필드 종류(이름·나이·도시·전기·동기·소속 분류)만 적고 값을 재수록하지 않는다. Primary tasks는 위젯·nav·리뷰 표면이지 페르소나 동기가 아니다. Audience 그룹은 원본 §13 헤더 원형 라벨(`migrant workers` / `international students` / `Koreans sending money abroad`).
- **E2d.** `measures 1440px` D 0 / P 0 — 단언은 그 두 파일에 대한 것이고 참이다. 로그가 검사 바늘로 이름을 적는 것은 mention. `Named gaps` D 0 / P 0 역시 참. 「세 파일 어디에도 없다」고 쓰면서 그 문장이 항목을 나열하는 행은 없다.
- **Wave 40 귀속(미수정).** 원본 §2는 **On Primary** (`#ffffff`)를 독립 불릿으로 둔다(ORIG 1). 산출은 **Pure White** 불릿에 `tokens.colors.on-primary` 경로를 접어 넣었다. 값·키 경로는 살아 있고 역할 표제만 사라졌다. `tokens.components` 필드가 아니므로 복원하지 않고 보고만 한다. `tokens.colors.on-primary` D 1.
- **Wave 39 관례.** §15 곡선 세 값은 역할·use만 남고 곡선은 생략(T2; 값이 provenance omission ledger와 본문 인용 `cubic-bezier` D 4 / P 2에 있다). 원본에 없는 규칙을 합성하지 않은 것은 유지.
- **E2c.** Foundations Motion `:165`가 transition properties · animation name · duration · easing · reduced-motion과 per-component 게이트, `A partial confirmation` dest 1을 전문으로 담는다. 로그의 B3 유지는 본문 실재와 일치. 고치지 않음.

AUDIT_DONE fixes=26

# Mistral AI 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mistral.ai/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mistral.ai/DESIGN.md`
검증 sibling: `web/references/mistral.ai/.verification.md` — `find`로 경로 직접 확인. 파일 **존재**. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 선행 `-` 패턴은 `--`로 보호.
날짜: 2026-09-02

발행 1차 UI 사양은 없다. `ds.type: brand` / `https://mistral.ai/brand/`는 공식 브랜드-에셋 안내이지 Pajamas·Polaris류 UI specification이 아니다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘에 도메인 명사(`including the official brand-asset guidance`)를 붙인 형태는 완전형이다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 **23** / 원장 **23** (185–207). 숫자는 맞았으나 양쪽이 함께 좁거나 원장이 본문 한정보다 넓었다. Avoid `:59`는 Don't·Agent Prompt Guide만 이름하고 독립분석 배제를 빠뜨렸다. Type roles `:141`은 pairing·§3-only·16/56/11 off spacing만 이름하고 두 YAML size-16 type role 비병합을 빠뜨렸다. Capture `:169`는 kind/applicability/C4만 이름하고 generic Focus ≠ `focus-visible` · disabled-compact L/E/S unresolved-omit · catalog-graph 비채택 보관을 빠뜨렸다. Layout `:318`은 48px·`0px 16px`만 local geometry로 이름하고 segmented container를 빠뜨렸다. Content samples `:341`은 인용 3줄만 이름하고 `:343` packet surface naming을 빠뜨렸다. Audience 원장 행은 본문 한정이 이름하지 않은 §13 확장을 열거해 **넓은 쪽**이었다.

문장 분류: 브랜드 발행 사실(사명 라인·voice samples·YAML 값·§표 수치·April 2023) / 관측 기술(hex·oklch·radius·selector 전사) / 편집적 해석·인과 판단(비병합, keep-both, 분위기, 증거 종류 정렬, packet naming, 독립분석 배제 편입). 세 번째 부류만 수정 대상.

## 수정 목록 (17건)

### B2a — 인접 한정 (본문 5건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:59` — Avoid | 독립분석 배제를 Avoid에 둔 것은 세 번째 부류. 기존 한정은 Don't list + Agent Prompt Guide prohibition만. | 기존 완전형에 independent-analysis exclusion을 접어 넣음. `getdesign` 문자열을 반복하지 않음(dest 불변). 발생 수 +0. |
| 2 | `DESIGN.md:141` — Type roles | YAML `body.size` 16 ≠ `control.size` 16은 세 번째 부류. `:152`에 읽기가 있고 `:141` 한정이 그것을 이름하지 않음. | 기존 완전형에 two YAML size-16 type roles on their own paths를 접어 넣음. 키 경로를 반복하지 않음. 발생 수 +0. |
| 3 | `DESIGN.md:169` — Capture record | generic Focus ≠ `focus-visible`, disabled-compact L/E/S unresolved-omit, source state contract kept while catalog graph is not adopted는 세 번째 부류. 기존 한정은 kind/applicability/C4만. | 기존 완전형에 세 읽기를 접어 넣음. 발생 수 +0. `focus-visible` DESIGN dest 9→**10**. |
| 4 | `DESIGN.md:318` — Layout & Platforms | segmented container를 desktop-capture geometry이지 cross-viewport 사양이 아니라고 읽는 것은 세 번째 부류. `:322`에 읽기가 있고 `:318`은 48px·`0px 16px`만 이름함. | 기존 완전형에 segmented container as local captured geometry를 접어 넣음. `6px`를 반복하지 않음(`16px` 부분문자열 오염 방지). 발생 수 +0. |
| 5 | `DESIGN.md:341` — Content samples | `:343` “This packet names the public marketing home and the public commercial-pricing route”는 세 번째 부류. 기존 한정은 인용 3줄을 official wording으로 읽는 것만. | 기존 완전형에 packet surface naming을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **23**, `not Mistral-authored` **23**, `separately published UI specification` **23**. 완전형 정규식 23. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 40, 49, 59, 74, 89, 100, 104, 108, 118, 137, 141, 160, 169, 318, 327, 341, 377.

`node scripts/check-limiter-ledger.mjs mistral.ai` → 본문 23 / 원장 23 (185–207) 1:1 OK.

### E1 — provenance derived 범위 (6건)

좁은 쪽·넓은 쪽 모두 FAIL. 본문 한정이 이름하는 판단을 원장이 빼거나, 본문 한정이 이름하지 않은 확장을 원장이 넣으면 1:1이 아니다. 행 수 23 유지, 행 텍스트를 본문에 맞춤.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | Audience 행 | 본문 `:28`이 이름하지 않은 §13 확장(high-stakes industries 등)을 원장이 열거. 넓은 쪽. | 본문 한정과 같이 groups-as-audience / not-fictional-profiles만 남김. |
| 7 | Avoid 행 | getdesign exclusion. 본문 `:59`이 이제 independent-analysis exclusion. | 본문 용어에 맞춤. |
| 8 | Type roles 행 | pairing·size-16 비병합 없음. 본문 `:141`이 이제 둘 다 이름한다. | 그 판단을 행에 추가. |
| 9 | Capture 행 | Focus ≠ `focus-visible`만. 본문 `:169`이 이제 unresolved-omit과 catalog-graph 비채택 보관도 이름한다. | 그 판단을 행에 추가. |
| 10 | Layout 행 | 48px·`0px 16px`만. 본문 `:318`이 이제 segmented container도 이름한다. | 그 판단을 행에 추가. |
| 11 | Content samples 행 | 인용 3줄만. 본문 `:341`이 이제 packet surface naming도 이름한다. | 그 판단을 행에 추가. |

### E2d — 부재 단언 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 12 | `provenance.md` Placeholder omission | “No `[FILL IN]` placeholders exist in the source; none are emitted.” 그 문장이 `[FILL IN]`을 담고 있으면서 부재를 단언(furiosaai형). | portable DESIGN.md에 쓰지 않았다고 범위를 닫고, 이 원장의 문자열은 check label(mention, not use)이며 이 파일은 부재 분모가 아니라고 적음. |

### E2 / E2a / E2c — 로그 목적지 (5건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -oF -- | wc -l`로 확인했다. 본문 한정 확장 후 dest가 바뀐 바늘은 재실측했다(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | YAML `ds.*` 행 | `ds.type: brand` provenance dest **3**. 실측 dest **2** (`provenance.md:35`, `:220`). 표 행 `ds.type \| brand`는 다른 문자열. | dest **2**. |
| 14 | YAML disabled-compact 행 | `rgba(7, 7, 11, 0.1)` / `oklch(0.552 0.016 285.938)` P dest **≥1**. 실측 각 provenance dest **2**. | dest **2** / **2**. |
| 15 | §9 행 | “See Omission ledger in provenance”. 원장에 그 이름의 절 없음(P dest 0). unique constraints는 Application rules / Avoid, prompt-wrapper 삭제는 Proof notes. | 목적지를 Proof notes로 고침. |
| 16 | F1 목록 | Avoid/Type roles/Capture/Layout/Content samples가 이제 이름하는 읽기를 목록이 빼 둠. | 목록을 본문에 맞춤. Count **23** 유지. |
| 17 | F2 dest 표 + SHA | Worker SHA·`ds.type` dest 3·rgba/oklch ≥1. 본문 접힘 후 `focus-visible` dest 9→10. | 재실측 표. DESIGN SHA `38911facd9827cd38714fb9c9cff72d648339cefc0cfe538df1255ae9d63447f`. provenance SHA `23ecf00b283cd153ab3f6d979afc909f94ee0b31ba33c2da7bc4f12af944603f`. |

Hex dest는 접힘 전후 불변: `#000000` D9/P9 · `#e4e3de` D10/P3 · `#f5f4ef` D5/P1 · `#fbfbf8` D4/P1.

### A1 — 키 경로

YAML `tokens.components.<id>.<field>`를 대응 블록에서 **행으로** 대조. 값 grep 「어딘가에 있다」로 대체하지 않음.

| id | 필드 | 대응 행 |
|---|---|---|
| pricing-plan | type/bg/fg/border/radius/font/use | Primitive type `card` · Background `#fbfbf8` · YAML `fg` `#000000` · §4 text `oklch(0.21 0.006 285.885)` 별행(합치지 않음) · Border `1px solid #e4e3de` · Radius `0px` · Font `16px / 400 / Inter` · Use YAML `Pricing-plan shell` |
| disabled-compact-control | type/bg/fg/radius/padding/font/states/use | Primitive type `button` · Background `rgba(7, 7, 11, 0.1)` · Text `oklch(0.552 0.016 285.938)` · Radius `6px` · Padding `4px` · Font `16px / 400 / Inter` · YAML `states` `disabled DOM state observed` · Use YAML `Disabled compact pricing control` |

icook형 타 블록 hex 차용으로 가린 필드 소실 없음. 복원 없음. 원본 표에 토큰명 열(`--krds-…`류)은 없음.

Destination SHA DESIGN `38911facd9827cd38714fb9c9cff72d648339cefc0cfe538df1255ae9d63447f`. 줄 수 DESIGN **391** 불변. provenance **230** 불변(행 텍스트만). `wc -w` DESIGN 5637→**5719**. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정.

`node scripts/migrate-design-md-core.cjs --check --require-portable-core` → pass. `--gate-only` → PASS, problems `[]`.

## 범위 밖 관찰

- **A5a.** `--gate-only` copy-loss `compared` 0 / `candidates` 108. `verdict: PASS`는 대조한 바늘이 없어서이지 카피 보존이 아니다. 손 대조 발행 카피 3종(`Putting frontier AI in everyone's hands.` / `Mission-critical AI for enterprises and governments.` / `Build the future of frontier AI.`) DESIGN dest 각 **1**. YAML `use` 6종 본문 생존. 라틴 발행 카피 손실은 이 스윕에서 보이지 않음.
- **B1 sibling 전용 분류.** `web/references/mistral.ai/.verification.md`의 Inter role `h3` / `list-item` / `text`, selector `home::[data-omd-capture="18"]`, `fonts.axept.io`, `12 Mistral-hosted`, `4px 8px`, `1px 0px 1px 1px`, `rgb(…)` 전량은 DESIGN dest **0**. provenance Proof에만 있고 본문 사실로 승격되지 않음.
- **D2a.** 원본 §13은 증거 기반 그룹 라벨뿐이고 이름·나이·도시·전기가 없다. 처분 행은 무식별. Primary tasks는 표면/컨트롤이지 페르소나 동기가 아니다. 소속 분류의 원본-없는 재구성 없음.
- **같은 hex 다역할 (wave 39, 고치지 않음).** `#000000`은 catalog `primary_color` · `tokens.colors.foreground` · pricing-plan YAML `fg` · header/row/nav Text에 서로 다른 역할로 붙는다. `#fbfbf8`은 brand-primary surface이자 pricing-plan `bg`. `#f5f4ef`는 brand-secondary이자 secondary plan shell·nav container. Identity 원장이 `#000000` 목적지를 이미 적는다. Semantic 한정은 YAML `fg`↔oklch·divider↔quantity border·primary↔secondary 비병합만 이름한다.
- **충돌 처리 정책 (wave 40 항목 5).** YAML hex vs §4 oklch, unitless lineHeight vs §3 px, spacing 16 vs type 16 vs padding `16px`는 전부 keep-both. 자리마다 다른 정책 없음.
- **원본에 없는 모션 규칙.** Foundations Motion의 “intentionally omitted rather than inferred” 동형은 §14 상태 그룹에 있고, 모션은 다섯 증거 종류 게이트로 비워 둠. 합성 유도 없음(wave 39 kmong).

AUDIT_DONE fixes=17

# opencode.ai audit-log — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/opencode.ai/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/opencode.ai/DESIGN.md`
검증 sibling: `web/references/opencode.ai/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches`는 0이 아니라 미측정 — 계수 전 `find`로 파일 존재를 확인함.
날짜: 2026-09-02

발행 1차 컴포넌트-토큰 사양 없음(`ds.type: brand`는 logo/brand assets). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not OpenCode-authored or a separately published UI specification`을 요구한다. 기존 25건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 25 / 원장 25. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Type roles `:218`의 YAML Primary font / §4 line-height keep-both는 `:205` 한정(표 앞, use·Notes·spacing 비해합만)에 인접하지 않았다. Capture Hover `:253`은 Focus `:251`과 applicability `:255` 사이에 있고, 그 두 한정은 다른 판단이다. Light Link `:353` 장식 비해합은 Capture 역할 한정에 이름되어 있지 않다. Navigation / Terminal Hero / Feature List C4와 Email Capture 매핑은 대화형 컴포넌트 한정 `:255` 밖의 크롬 클러스터다.

문장 분류: 브랜드 발행 사실(사명·CTA·YAML 값·§표 수치) / 관측 기술(hex·padding·live-DOM 전사) / 편집적 해석·인과 판단(키 비병합, keep-both, 역할 판정, C4 크롬, 페르소나 삭제 읽기). 세 번째 부류만 수정 대상.

선행 게이트 정정(`#ffffff` dest 1 복원)은 이미 산출에 있다. 이 세션은 토큰 값·표·applicability·구조를 다시 열지 않았다.

## 수정 목록 (11건)

### B2a — 인접 한정 (본문 4건, 발생 수 +4)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:218` — Type roles | YAML Primary font와 §4 Primary line-height를 두 서식으로 두고 Body Medium / Body Tight를 그 버튼 메트릭에서 떼는 것은 세 번째 부류. `:205`는 표 앞이고 use·Notes·spacing 비해합만 가리킨다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:253` — Capture record Hover | hover 수열을 정성 color-key 서식으로 두고 per-control computed paint가 아니라고 읽는 것은 세 번째 부류. `:251`은 Focus 증거 class, `:255`는 역할 판정. | 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:353` — Light Link | 내비 underline 서식을 Navigation 처리로, Light Link decoration none을 이 행으로 두는 것은 세 번째 부류. `:255`는 YAML 병기·destination/tab/field 역할만. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:452` — Components chrome / Email Capture | Navigation·Terminal Hero·Feature List를 맵 없는 크롬/텍스트 목록으로 두고 Email Capture를 Email Input + Primary 행에 매핑하는 것은 세 번째 부류. `:255`는 대화형 컨트롤 한정. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `grep -o` 파일별:

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 29 | 1 | 1 |
| `not OpenCode-authored` | 29 | 2 | 2 |
| `separately published UI specification` | 29 | 2 | 2 |

같은 줄 완전형(세 조각 동시): DESIGN.md **29**. provenance·migration-log의 같은 절 인용은 mention이지 use가 아니다. `node scripts/check-limiter-ledger.mjs opencode.ai` → 본문 29 / 원장 29 1:1 OK.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | 헤더 `provenance.md:215` | 25 complete / 25 data rows. | **29** / **29**. |
| 6 | Type roles 행 | 없음. 본문 `:218` 신설. | 행 신설 (`provenance.md:202`). |
| 7 | Capture record Hover 행 | 없음. 본문 `:253` 신설. | 행 신설 (`provenance.md:206`). |
| 8 | Light Link 행 | 없음. 본문 `:353` 신설. | 행 신설 (`provenance.md:208`). |
| 9 | Components chrome 행 | 없음. 본문 `:452` 신설. | 행 신설 (`provenance.md:209`). |

헤더 / 데이터 행 **25 → 29** (`Derived editorial inventory`).

### E2 — 로그 목적지 (2건)

본문이 아니라 로그만 고침. dest 리터럴 표는 F3 재실측 후 불변이라 숫자를 바꾸지 않았다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 10 | 패스 1 | 한정을 붙인 자리 **25곳**, 짝 25 = 원장 25. 본문 신설 4건 이후 거짓. | **29곳**, 짝 29 = 원장 29. 목록에 Type roles Primary font 비해합 · Capture Hover 정성 · Light Link 장식 비해합 · Components chrome C4·Email Capture 매핑을 추가. |
| 11 | 패스 2 | 본문 한정 신설 후 dest 표를 재실측하지 않으면 E2(웨이브 40 lablup). | F3 재실측 문장 추가. dest 리터럴은 불변. B2a 짝 본문 29 = 원장 29. |

2차 목적지 행 재실측 (`grep -o`, 파일별; 로그 mention은 use가 아님):

| 문자열 | 로그 주장 | DESIGN.md | provenance.md |
|---|---|---:|---:|
| `#000000` | DESIGN dest **6** · provenance dest **6** | 6 | 6 |
| `opencode-ai` | DESIGN dest **1** · provenance dest **1** | 1 | 1 |
| `prose-derived` | DESIGN dest **2** · provenance dest **5** | 2 | 5 |
| `components_harvested` | DESIGN dest **0** · provenance dest **2** | 0 | 2 |
| `ds.type` | DESIGN dest **2** · provenance dest **6** | 2 | 6 |
| `social-share.png` | DESIGN dest **1** · provenance dest **1** | 1 | 1 |
| `#ffffff` | DESIGN dest **1** · provenance dest **1** | 1 | 1 |
| `8×12×8×20` | DESIGN dest **0** · provenance dest **1** | 0 | 1 |
| `Light Cream` | DESIGN dest **0** · provenance dest **1** | 0 | 1 |
| `stripe` | DESIGN dest **0** · provenance dest **1** | 0 | 1 |
| `100-150ms` | DESIGN dest **3** | 3 | 1 |
| `transition properties` | DESIGN dest **2** | 2 | 0 |
| `Not in the token set` | DESIGN dest **8** | 8 | 0 |
| `#f8f7f7` | DESIGN dest **11** | 11 | 5 |
| `8×16×8×10` | DESIGN dest **2** · provenance dest **3** | 2 | 3 |
| `40-42px` | DESIGN dest **2** · provenance dest **3** | 2 | 3 |
| `Coffee Charcoal` | DESIGN dest **4** | 4 | 3 |
| `June 19 2024` | DESIGN dest **1** · provenance dest **3** | 1 | 3 |
| `#d70015` | DESIGN dest **3** | 3 | 1 |
| `#6e6e73` | DESIGN dest **1** | 1 | 1 |
| `\| loading \| not-applicable \|` | dest **9** | 9 | 0 |
| `\| error \| applicable \|` | dest **1** | 1 | 0 |

E2c: B3 전문은 Motion 게이트 문단과 Named gaps에 실재 (`transition properties` DESIGN dest 2). 준수 주장 유지.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 25개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- Motion `:161–177` 클러스터는 절 끝 `:175` 완전형이 duration≠easing · 커브 미승격 · 다섯 증거 게이트를 이름한다. 절 끝 한정 패턴.
- Capture 머리 `:235` "not a complete state-coverage claim"은 같은 절 끝 `:255`가 같은 판단을 닫는다.
- 대화형 컴포넌트 applicability 표는 `:255` "every … verdict" 절 머리 한정이 가리킨다.
- E2d: 로그의 `DESIGN dest 0`은 DESIGN.md를 분모로 둔다. 「세 파일 어디에도 없다」고 단언하지 않는다. 부재 단언 행이 그 문자열을 나열해 스스로 거짓이 되는 형태 0.
- D2a: 삭제 처분 행은 절·인원·필드 종류만. 식별자 `grep -o` 파일별 — `Sergey`/`Volkov`/`Sofia`/`Russo`/`Marcus Chen`/`Berlin`/`Milan`/`San Francisco` 원본 각 1, sibling 0, DESIGN 0, provenance 0, 이 로그 0. 동기 스케치·소속 분류 본문 승격 0. 원형 그룹 라벨(`terminal-first developers` / `OSS-enthusiast engineers` / `indie SaaS`)은 원본 §13 머리글이며 Audience에 유지(게이트 copy-loss 경계).
- A1 키 경로: `button-primary`·`input-email`·`link-default`·`tab-nav`의 type/bg/fg/radius/padding/font/border/states/active/use 필드가 대응 블록에 행으로 있다. 값 grep이 아니라 블록 행 대조.
- 원본 §15 곡선은 튜플이 없고 `"Standard cubic-bezier; no bounce"`가 역할 서술로 남음(T2 관례, 값 소실 아님).
- 모션 규칙 합성 없음. B3 게이트 자기 진술은 모범.

## 범위 밖 관찰

- **B1 (sibling 전용 분류의 본문 승격).** `corporate home` 원본 0 / sibling 1 / DESIGN 1 / provenance 1. `Korean locale` 원본 0 / sibling 1 / DESIGN 1 / provenance 1. `sidebar nav` 원본 0 / sibling 1 / DESIGN 2 / provenance 1. 값 grep이 아니라 구조 분류다(finda·kyobobook 동형). sibling 전용 기하는 portable 승격 0(`8×12×8×20` DESIGN 0, `Light Cream` DESIGN 0, `60% Charcoal` DESIGN 0).
- **A1 키 경로 표지 불일치 (필드 소실은 아님).** YAML id `link-default` DESIGN dest 0 · `tab-nav` DESIGN dest 0. `button-primary` DESIGN dest 4 · `input-email` DESIGN dest 2. Default Link / Tab Navigation 블록에는 해당 필드가 행으로 있다. 같은 hex가 다른 블록에만 있는 icook형은 아니다. id 문자열 복원은 구조 표기라 이 감사 범위에서 고치지 않음.
- **A5a.** 발행 카피 바늘 16종 DESIGN dest ≥1. 라틴 카피 손실 눈에 띄지 않음. `verdict: PASS`를 이 세션에서 게이트 재실행하지 않음 — compared/candidates 분모는 로그 A5a 표(추출 16 / 미생존 0)에만 있다.
- **같은 hex 다른 역할.** `#fdfcfc`는 canvas / on-primary / Inverse Primary fill. `#201d1d`는 primary / foreground / Primary bg. `#9a9898`는 muted / Border Tab / Muted Link. `#f8f7f7`는 Email Input §4 / docs sidebar. Semantic color 한정과 원장이 비해합을 이름한다. 귀속 분리는 정상이고 E1 누락은 아님.
- **D2a 본문 잔존.** 식별자·동기(`Cursor alternative` / `Self-hosts OpenCode` / `Engineering manager`) DESIGN 0. Primary tasks는 홈/문서 표면 과제만.

AUDIT_DONE fixes=11

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/opencode.ai/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (29=29, 185–213).

### 결함 1 — sibling 전용 반지름을 portable Shape에 승격 (A1)

Foundations Shape `:138`에서 `Install-snippet tabs: 0px text-only.`를 뺀다. YAML `4 / 4 / 6 / 9999`와 source footer Header/Hero Primary 4px · Inverse 4px는 남긴다. 원본 footer 문장 `install-snippet text-only tabs color-state`는 컴포넌트 블록 `:405–406`에 유지. sibling `0px text-only`는 provenance sibling-only 표에만 둔다.

`grep -oF -e` 실측 (파일별; 개정 후; `grep -c` 미사용):

| 문자열 | SRC | SIB | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `0px text-only` | 0 | 3 | **0** | **2** | 8 |
| `text-only tabs color-state` | 1 | 0 | **1** | 1 | 1 |
| `install-snippet text-only tabs color-state` | 1 | 0 | **1** | 1 | 1 |
| `8×12×8×20` | 0 | 1 | **0** | 1 | 4 |
| `50px` | 0 | 1 | **0** | 1 | 2 |
| `14px·600` | 0 | 4 | **0** | 1 | 2 |
| `Light Cream` | 0 | 3 | **0** | 1 | 4 |

`node scripts/check-limiter-ledger.mjs opencode.ai` → 본문 **29** / 원장 **29** (185–213) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs opencode.ai` → use 10/10, 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand opencode.ai --gate-only` → PASS, `problems: []`.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| sibling-only header | `0px text-only` DESIGN / P | 1 / 0 | **0** / **2** |
| sibling-only dest row | `0px text-only` DESIGN / P | (없음) | **0** / **2** |
| Pass 2 provenance-only | `0px text-only` DESIGN / P | (없음) | **0** / **2** |
| 개정 dest | `0px text-only` DESIGN / P | 1 / 0 | **0** / **2** |

로그 표 행: sibling-only header · sibling-only dest row · Pass 2 · 개정 dest.

Destination SHA DESIGN `fd0f7c6998882d9b1dd7e57a069a14bf1d8f6a12193507818045761127f64dbf` → `6a2f8561009995d7459ec9342b92669abf0ff14c2715c15070a5e3c9b420e3db`. provenance SHA `05f7eaa73b368d7826ea2a01b197ea9177fb24ee69634d8f51bdc1ed0184e56f`. `wc -l` DESIGN **557** 불변.

FIX_DONE opencode.ai fixed=1 logdest=4

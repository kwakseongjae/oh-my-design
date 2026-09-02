# nike 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/nike/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/nike/DESIGN.md`
검증 sibling: `web/references/nike/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음(원본·sibling에 Nike Design System URL 없음). B2a 예문 전제(v12)가 성립하므로 toss형 `not Nike-authored or a separately published UI specification`을 완전형으로 인정한다.

착수 실측: 본문 완전형 24 / 원장 24. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion `:171`의 `600ms` keep-off(타입 사이즈·Grey 600이 아니다)는 세 번째 부류인데 `:159` 한정이 표 앞이고 생략·ease-power·five-kind만 이름한다(kkday `:150` 동형). Font evidence `:200`의 "does not publish a Nike-hosted type specimen URL"는 세 번째 부류인데 `:208`이 이름하지 않았다. 로그 dest는 `64-88px` dest 2(실측 3), `"one spark per view"` 44/51(실측 44/62), toast 값 dest 2(실측 5), HTTP 403 provenance dest 미기재, Verified date를 portable dual로 적음(DESIGN dest 0).

문장 분류: 브랜드 발행 사실(Just Do It·MEMBER ACCESS·YAML 값) / 관측 기술(hex·geometry·HTTP 403 기록) / 편집적 해석·인과 판단(키 비병합, 커브 생략, 600ms keep-off, specimen URL 부재 읽기, kind/applicability). 세 번째 부류만 수정 대상.

## 수정 목록 (17건)

### B2a — 인접 한정 (본문 2건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:171` — Motion duration keep-off | "`motion-hero` `600ms` is this named duration. It is not a type size and is not Grey 600."는 세 번째 부류. `:159`는 표 앞이고 이 keep-off를 이름하지 않음. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:208` — Font evidence | `:200` "It does not publish a Nike-hosted type specimen URL"는 세 번째 부류. 기존 한정은 Futura product-use / 403 live-surface / family unmerged / outside-contract만. | 기존 완전형에 source-body-without-specimen-URL을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **25**, `not Nike-authored` **25**, `separately published UI specification` **25**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived` P dest **0**). `migration-log.md` mention dest **2** / **3** / **2**는 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 44, 57, 69, 85, 129, 143, 155, 159, 171, 190, 208, 218, 222, 240, 254, 278, 706, 759, 805.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | 헤더 `:170` | 24 complete / 24 data rows. | **25** / **25**. |
| 4 | Motion duration keep-off 행 | 없음. 본문 `:171` 신설. | 행 15 신설 at 188. |
| 5 | Font evidence 행 | Futura / 403 / family unmerged / outside-contract만. 본문 `:208`이 이제 specimen-URL 부재 읽기도 이름한다. | 그 판단을 행에 추가 at 190. |
| 6 | Freshness Verified `:41` | "Dual: this freshness row + portable Scope 403 bound". `2026-06-06` DESIGN dest **0**. 날짜와 403을 한 dual로 붙인 거짓 E2a. | provenance-only로 고침. HTTP 403은 별 dual. |

헤더 / 데이터 행 **24 → 25** at 174–198 (E1 1:1). Header at 172는 그대로 `| Location in DESIGN.md | Qualified reading |`.

### E2 / E2a / E2c — 로그 목적지 (11건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 본문 한정 추가 후 dest를 재실측함(lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | YAML typography 행 | Hero `64-88px` dest 2 at 222 / 226. 실측 dest **3** (222×2 + 226). | dest **3** at 222×2 / 226. |
| 8 | HTML comment 행 | `"one spark per view"` dest 2 at 44 / 51. 실측 dest **2** at **44 / 62**. `:48`은 `"One spark per view"`(대문자). | dest **2** at 44 / 62. 대문자 표기는 dest 1 at 48로 분리. |
| 9 | YAML spacing/shadow 행 | `tokens.shadow.toast` 값 dest 2 at 155 / 673. 경로 dest **2** at 155 / 673. 값 `0 4px 16px rgba(0,0,0,0.12)` dest **5** at 151 / 155 / 271 / 664 / 666. | 경로와 값을 나눠 적음. |
| 10 | Footer 행 | HTTP 403 DESIGN dest 3만 적고 E2a. provenance에도 있음. `:41` 수정 후 P dest **4** at 39 / 41 / 59 / 99. | DESIGN dest 3 + provenance dest 4. |
| 11 | Footer 행 · Deviations F2 | footer Verified date를 dual로 적음. `Verified:` DESIGN dest **0** / provenance dest **1** at 41. | provenance-only. dual 목록에서 제거. |
| 12 | §12 행 · Deviations | B2a 24 = 24. inventory 174–197. | **25** = **25**. inventory 174–198. |
| 13 | §15 행 | 600ms keep-off 한정을 적지 않음. 본문 `:171` 신설. | `:171` 인접 완전형을 목적지에 적음. |
| 14 | Deviations 단어 수 | 9,281 words. 한정 추가 후 Python `split()` **9,338**. | 9,338. |
| 15 | Sibling 행 | conflict dest `provenance.md` 40 / 98. `:40`은 빈 줄, `:98`은 sibling-only 목록. 실측 39 / 99. | 39 / 99. |
| 16 | Footer 행 | Tier 1 list 61 · Tier 2 67–71. 실측 Tier 1 목록 59, Tier 2 URL 67–70. | 59 / 67–70. |
| 17 | Sibling 행 | sibling-only 값 dest 90–96. method는 85, 샘플은 90–95, 요약은 97. | 85 / 90–95 / 97. |

Destination SHA DESIGN `302fae656f35af977b4969bff67d4ef7a42997911d1529a810d9138adbdd6f43` → `6b872eb1b206837ea3820fee07a802df73829323e65693807549a8a88d5982b3` (한정 신설·확장 후). provenance `43e2661620b53e1876e515012dde973bb905e06ce4763de799a14914ddbe7281` → `8d7dbc166e271c0f54f9db748b52554df2e67d2985dbb6b4e3e884045ca22d84`. 줄 수 DESIGN `wc -l` **810** 불변. provenance 197→**198**.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles `:44` toss형. 공식 DS 없음. 전제 주석에 맞음.
- B3 `:190` 다섯 증거 종류 전문 실재. 로그 E2c 준수 주장 유지.
- 컴포넌트 keep-off는 Capture `:278`이 "every geometry-versus-token-path reading on the controls below"로 이름함.
- 세 template cubic-bezier는 DESIGN dest 0 / provenance dest 실재. 고의 생략(kmong 관례).
- YAML `tokens.components.<id>` type/bg/fg/radius/padding/font/active는 대응 블록에 경로 행으로 있음. `use` 값은 같은 블록 Token-set use 행에 바이트 보존. 경로 문자열 `tokens.components.<id>.use`는 카탈로그 T2 관례상 안 씀(inflearn/igaworks/instacart). 값 소실 아님.
- 원본 §15 곡선·duration은 Motion 표에 역할과 함께 남음(T2 인용 관례, 소실 아님).

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **0** < candidates **225**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아니다. 손 스윕 발행 라틴 카피(Just Do It / JUST DO IT / Dream Crazy / Find Your Greatness / Add to Bag / MEMBER ACCESS / SNKRS EXCLUSIVE / MOVE TO ZERO / Nike Air Max 270 / Select a size to continue. / Members get more. Join us. 등)는 DESIGN dest ≥1. 눈에 띄는 라틴 카피 손실은 없음. 고치지 않음.
- **A1 키 경로 (use).** 13개 컴포넌트 Token-set use 행은 YAML `use` 값을 해당 블록에 두지만 `tokens.components.<id>.use` 경로 문자열은 dest 0. type/bg/fg 행은 경로를 적는다. 카탈로그 관례로 보고 컴포넌트 표를 고치지 않음.
- **B1 sibling 전용.** `playwright` / `getComputedStyle` / `source of truth` / `root background` / `#000000` / `#1f1f21` / `30px` / `46px` / `Helvetica Now Display Medium` — DESIGN dest **0**, 원본 dest **0**, sibling dest ≥1. 값·구조 분류 모두 본문 미승격.
- **D2a.** 삭제 처분 행은 무식별(`§13 페르소나 3인`). 이름·나이·도시 DESIGN dest 0 / provenance dest 0. 동기(`Sneakerhead` / `Marathon trainer` / `High-school athlete`) DESIGN dest 0. 소속 분류 신규 표현 없음. 페르소나 전용 `Nike Run Club` DESIGN dest 0(§11 `Nike Run/Training Club` dest 2는 원본 본문).
- **E2d.** 「세 파일 어디에도 없다」형 부재 단언 없음. 로그 sibling dest 0은 DESIGN.md만 분모로 적음.
- **D1 (참고).** `:200` "It does not publish a Nike-hosted type specimen URL"는 원본 dest 0인 새 부정 claim. B2a class는 `:208`에서 닫았고 문장은 삭제하지 않음(삭제 권한 밖).
- **hex 귀속.** `#ffffff`는 canvas / inverted-button fill / product-card fill로 키가 갈라진다. Semantic color 한정과 원장 행 183이 storefront-value-not-house-palette를 이름한다.
- **B3.** `:190` transition properties · animation name · duration · easing · reduced-motion behavior + per-component gate 전문 실재.

AUDIT_DONE fixes=17

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/nike/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정. provenance 본문 무변경.

### 결함 1 — A1 / 웨이브 37 — YAML use ↔ §표 use 절단

원본 YAML `tokens.components.button-primary.use` = `Add to Bag, Checkout on white` (`web/references/nike/DESIGN.md:53`). 원본 §4 Primary Use = `"Add to Bag", "Checkout", primary CTAs on white surfaces` (`:167`). 같은 항목의 이중 기록인데 산출은 YAML 짧은 쪽만 남기고 Role을 `Primary CTA on white surfaces`(원본 0, 단수 의역)로 치환했다. inverted는 YAML `Primary CTA on dark sections` / §4 `Primary CTA on black / photographic / inverted sections`를 이미 병기한다.

Primary Role을 원본 §4 Use 표기로 되돌림: `"Add to Bag", "Checkout", primary CTAs on white surfaces`. Token-set use `Add to Bag, Checkout on white`는 유지. 줄 수 불변(`:282`). 융합(`Add to Bag, Checkout, primary CTAs on white`) 없음. 한정 신설 없음. 원장 행 수 25 불변.

`grep -oF -e` 실측 (파일별; 개정 후; `grep -c` 미사용):

| 문자열 | SRC | SIB | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `"Add to Bag", "Checkout", primary CTAs on white surfaces` | 1 | 0 | **1** | 0 | 4 |
| `primary CTAs on white surfaces` | 1 | 0 | **1** | 0 | 4 |
| `Add to Bag, Checkout on white` | 1 | 0 | **2** | 0 | 4 |
| `Primary CTA on white surfaces` | 0 | 0 | **0** | 0 | 0 |

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML `tokens.components` | `Add to Bag, Checkout on white` DESIGN / P | dest 2 (줄 미기재) | **2** at 23 / 300 / **0** |
| YAML `tokens.components` | `"Add to Bag", "Checkout", primary CTAs on white surfaces` DESIGN / P | (없음) | **1** at 282 / **0** |
| §4 Component Stylings | `"Add to Bag", "Checkout", primary CTAs on white surfaces` DESIGN / P | (없음) | **1** at 282 / **0** |
| A5a YAML `use` strings | YAML dest 2 + §4 dest 1 keep-both | YAML만 13/0/0 | YAML DESIGN **2** / P **0**; §4 DESIGN **1** / P **0** |
| Unique-phrase restore | `"Add to Bag", "Checkout", primary CTAs on white surfaces` DESIGN | restored-from-zero 0 | DESIGN dest **1**; restored-from-zero **1** |
| Deviations | Python `split()` words | 9,338 | **9,342** |

`node scripts/check-limiter-ledger.mjs nike` → 본문 **25** / 원장 **25** (174–198) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs nike` → use 24/24, 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand nike --gate-only` → PASS, `problems: []`.

`wc -l` DESIGN **810** 불변. SHA DESIGN `6b872eb1b206837ea3820fee07a802df73829323e65693807549a8a88d5982b3` → `76a5de23a3f5f3af177a17d23499e1e1ca401a4ba2cf61c617cae70c9d555ebc`. provenance SHA 불변 `8d7dbc166e271c0f54f9db748b52554df2e67d2985dbb6b4e3e884045ca22d84`.

FIX_DONE nike fixed=1 logdest=6

# mercari 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mercari/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mercari/DESIGN.md`
검증 sibling: `web/references/mercari/.verification.md` — `find web/references/mercari -name '.verification.md'`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음 (원본 YAML에 `ds.name` / `ds.url` / `ds.type` 없음; getdesign·refero silent). B2a 예문 전제(v12)가 성립하므로 toss-form close는 요구 형태다. 기존 23건은 `not Mercari-authored or a separately published UI specification`으로 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 23 / 원장 데이터 행 23. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic color `:79` 한정은 observed-public-web·skip/sell fill만 이름하고, 같은 목록 `:81`의 identity-field ≠ universal filled CTA를 빠뜨렸다. Family `:132` 한정은 substitution ban만 이름하고 같은 줄의 canonical-only-because를 빠뜨렸다. 원장 Scope ¶2 행은 values-attached를 빠뜨렸다. `#ffffff` / `#5356ee` / `#222222`의 역할 분리가 원장에 없었다(krafton·E1). 로그가 catalog homepage를 `DESIGN.md` 9/17로 적었으나 17은 listing-guide URL이다(fitpet형 2차 목적지). `#5356ee` DESIGN dest를 8줄로 적어 271/283을 빠뜨렸다. 공식 URL·Conflicts·logo prose·Tier 2·sibling·truste-button1 줄 번호가 인접 행을 가리켰다.

문장 분류: 브랜드 발행 사실(listing guide / marketplace principles / guidelines 인용, YAML 값, §7 Do/Don’t, §10 인용 세 줄) / 관측 기술(hex·Averta 로드·셀렉터 스냅샷·1440×900) / 편집적 해석·인과 판단(토큰 표면 지정, compact/type-led 읽기, narrative-not-token, kind/applicability, 한정이 이름하는 특성). 세 번째 부류와 원장 정확성만 수정. 토큰 값·컴포넌트 표·상태 applicability·구조는 그대로.

## 수정 목록 (17건)

### B2a — 인접 한정 (본문 2건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:79` — Semantic color | `:81` "Catalog `primary_color` is the same hex. The capture does not establish a universal filled CTA from that identity field"는 세 번째 부류. 기존 한정은 observed-public-web / skip/sell fill만. | 기존 완전형에 identity-field ≠ universal filled CTA를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:132` — Family | 같은 줄 "It is canonical here only because computed visible use and loaded FontFace/source evidence agree…"는 세 번째 부류. 기존 한정은 substitution ban만. | 기존 완전형에 canonical-only-because를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 23, `not Mercari-authored` 23, `separately published UI specification` 23. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다 (`derived editorial implementation inference` provenance 1 / log 3은 mention이지 use가 아니다).

한정 줄: 11, 13, 15, 23, 32, 36, 47, 57, 66, 79, 90, 101, 105, 126, 132, 142, 148, 149, 158, 311, 316, 330, 364.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 같은 hex의 역할 분리가 원장에 없으면 그것도 E1(krafton).

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | Scope ¶2 행 `provenance.md:191` | 세 URL을 토큰 표면으로 두고 chrome 도메인을 가르는 것만. 본문 `:11`은 values-attached도 이름한다. | 그 판단을 행에 추가. |
| 4 | Family 행 `provenance.md:205` | substitution ban만. 본문 `:132`이 이제 canonical-only-because도 이름한다. | 그 판단을 행에 추가. |
| 5 | 원장 말미 (신규 `:215–221`) | `#ffffff`는 Canvas / marketplace-sell Background / marketing-sell Text / skip-link Text. `#5356ee`는 public-action / 두 컨트롤 fill / header hover text. `#222222`는 Foreground / 두 컨트롤 Text. 분리가 원장에 없었다. | 역할 분리 절을 원장 끝에 추가. 본문 역할은 고치지 않음. 한정 행 수 23 불변. |

헤더 / 데이터 행 **23 = 23** (E1 1:1). 데이터 191–213.

### E2 / E2a / E2c — 로그 목적지 (12건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 줄 수가 아니라 출현 수. 본문을 고친 뒤 dest 표를 재실측함(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | YAML identity 행 | catalog homepage `https://www.mercari.com`(trailing path 없음)을 DESIGN 9/17로 적음. 17은 listing-guide URL(fitpet). 실측 DESIGN dest **1** at 9 · provenance dest **1** at 13. `#5356ee` dest 9/13/39/60/81/230/263/264 (8줄). 실측 DESIGN dest **10** at 9/13/39/60/81/230/263/264/271/283 · provenance dest **5** at 14/123/141/153/220. logo prose provenance 15/22 (22는 빈 줄). 실측 15/23. | dest를 출현 수로 고침. trailing-slash home route는 다른 문자열로 분리. hex 역할 분리는 provenance 215–221. |
| 7 | YAML metadata 행 | freshness 25–40 (40은 `## Surfaces`). Conflicts 40/177. 실측 Conflicts `provenance.md` 38/177. | 25–38. Conflicts **38/177**. |
| 8 | YAML colors 행 | 한정 `:79`가 이제 identity-field CTA도 이름함. hex 역할 분리가 원장에 생김. | 한정 범위와 provenance 215–221 포인터를 적음. |
| 9 | YAML spacing 행 | px cluster와 `0px 16px or 6px 16px`를 Layout 309에만 있다고 적음. 실측 90에도 있음. | dual inside DESIGN: **90 + 309**. |
| 10 | §1 공식 URL 행 | listing-guide provenance 55/68/84 (세 줄 모두 다른 URL). 실측 dest **3** at 56/67/85. principles 56/69/83. 실측 dest **3** at 57/68/83. | 실측 줄로 고침. DESIGN listing-guide dest **2** at 17/316, principles dest **1** at 17 유지. |
| 11 | §3 Foundry/EULA | provenance 57–58/70. 57은 principles PDF. 실측 Foundry5 dest **3** at 58/69/86; EULA dest **3** at 59/70/86. DESIGN dest **1** at 123 each. | 실측 줄로 고침. Family 한정 `:132` 확장을 적음. |
| 12 | Footer / live URLs | `https://www.mercari.com/` provenance 43/51/63 (43은 표 구분선). 실측 dest **5** at 44/52/63/72/178. about 44/52/64 → **45/53/64/72/178**. brand 45/53/65 → **46/54/65/72/178**. DESIGN dest **1** at 9 each (exact, not prefix). Conflicts 40 → **38**. Tier 2 74–76 (77 refero 누락) → **74–77**. Freshness 25–40 → **25–38**. | dest를 출현 수로 고침. |
| 13 | §10 행 | guidelines provenance 54/67/84 (54는 brand-live, 67은 listing-guide). 실측 dest **3** at 55/66/84. DESIGN dest **1** at 316. | 실측 줄로 고침. |
| 14 | Sibling 행 | transcription 89–121; sibling-only list 112–120 (112는 빈 줄). 실측 본문 90–121, 목록 **113–121**. DESIGN dest **0** for sibling-only strings 재실측 유지. | dest를 실측 줄로 고침. |
| 15 | A5a `truste-*` 행 | `truste-button1` provenance 96/117 (96은 All brands, 117은 RGB). 실측 **97/118**. glob `truste-*`는 provenance dest **0** (mention in log only). | dest **97/118**. glob은 sibling 인용이지 provenance use가 아님을 유지. |
| 16 | §4 Header hover | `#5356ee` hover/pressed dest 263–264만. 실측 표 셀 **271**도 같은 값. | **263–264/271**. |
| 17 | F1 / F2 | 23=23만 적고 `:79`/`:132` 확장·homepage dest 오기를 반영하지 않음. 본문 수정 후 dest 미재실측이면 E2(lablup). | F1에 두 확장(발생 수 +0)과 hex-split 비한정 절을 적음. F2에 실측 dest를 적음. |

Destination SHA DESIGN `387fec3646685fa259eef20681b51439148d1bc433fcca311c16e51be9c7c305` → `8e0f4bc651baaea31b35b3cd0fa917421eb8a9cd7d3692a5af673580bd27a5fe` (한정 확장 후). provenance → `24a5b2865e8a755b3b9facb21c7bb98f7249760e2d5304379cee51e04e31f41e`. migration-log → `582d0215dba8c0546ddaa8415ae75f8dc82b0470c8c3283c5ac42726521538ae`. 원본 SHA `7a16164be47ea9b4a73fd66e6d43d9ec5adcda18a845477d379be8d92d14ba56` · sibling SHA `4fa9bcc86b069949927dc0b8865662472ebfb172853114773386a1fa259d72b5` 불변.

수정 후 실측 (`grep -o … \| wc -l`, 파일별):

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 23 | 1 | 3 |
| `not Mercari-authored` | 23 | 2 | 3 |
| `separately published UI specification` | 23 | 2 | 3 |
| `#5356ee` | 10 | 5 | 8 |
| `#ffffff` | 4 | 2 | 3 |
| `#222222` | 4 | 3 | 3 |

provenance·log의 한정 구·hex는 mention이지 portable use가 아니다. B3 전문 dest 1 at `DESIGN.md` 111 (`transition properties` dest 2 at 111/370; `single curve` dest 1 at 111만 — E2c 유지).

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 섹션 구조.
- Principles 머리 toss-form (1차 UI DS 없음, v12 전제 성립).
- Motion "intentionally absent" / "No motion token is promoted" — 원본 §15에 곡선·duration이 없다. 합성하지 않은 것이 정답(wave 39 kmong).
- A1 키 경로: YAML `tokens.components.{marketplace-sell-action,marketing-sell-action,marketing-skip-link,listing-image}`의 각 필드가 대응 블록에 행으로 있다 (type/bg/fg/radius/padding/font/states/use; listing-image는 type/radius/use만 YAML에 있음). 값 grep이 아니라 블록 대조.
- D2a: 삭제 행은 `§13 Personas — two entries` + 필드 종류. 이름·나이·도시·전기 문구 없음. 본문에서 동기 문장(`short, ordered path` / `accurate item information` / `browsing behavior`) dest **0**.
- E2d: sibling-only 부재 단언은 `DESIGN.md` 0으로 범위를 닫았고, 그 문자열이 DESIGN에 없다. 세 파일 부재를 단언하며 그 행에 나열하지 않음.
- B1: sibling 전용 문자열 DESIGN dest **0** (`All brands available on Mercari` / `u-web-assets.mercdn.net` / `#ff333f` / `#0095ee` / `truste-button1` / `truste-*` / `95` coverage / `31` variants). 구조 분류(`portal H2`류) 승격 없음. `brand-directory`는 원본 YAML `kind`.

## 범위 밖 관찰

- **A5a.** 게이트 `compared: 0` / `candidates: 109` (`compared < candidates`). `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아니다. 손 대조에서 원본 표 Source boundary 라틴 카피 2종이 DESIGN dest **0**: `Repeated marketplace and corporate public text` SRC **1** / DES **0**; `Corporate-marketing route only` SRC **2** / DES **0**. 산출 Type roles 표는 YAML `use` 문자열을 넣었다. 발행 카피(Keep it neighborly. / Keep it safe. / Just take some photos…)는 dest **1**. 고치지 않음 — 범위는 B2a·E2.
- **D2a / 게이트 copy-loss 경계.** 원본 §13 원형 라벨 `A person listing a shippable household item` / `A person assessing a listing`은 삭제 행에 이름되어 있지 않다. 발행 한국어 문자열이 아니고 게이트 바늘도 아니다. 라벨 재수록을 D2a로 지목하지 않음.
- **Wave 40 열 구조.** 원본 Color는 토큰명 열이 있는 표가 아니다. Typography 표의 Source boundary 열이 Token-set use로 바뀌며 위의 라틴 두 줄이 빠졌다. 값 hex는 남는다. A5a로만 보고.
- **충돌 처리.** 구 적색 시스템 제거 / 현행 `#5356ee`를 observed public-web로 유지 / Truste 제외가 문서 전체에서 같다. 자리마다 다른 정책 없음.

AUDIT_DONE fixes=17

## 개정 — 의미 검토 FAIL 2 (2026-09-02)

대상: `docs/design-md-weight/migrated/mercari/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정 건수 23=23 (Avoid 한정은 기존 줄을 확장; 원장 199행이 그 확장을 이름함). Avoid에 불릿 1줄 추가로 이후 DESIGN dest 줄 번호 +1.

### 결함 1 — A3 / A2. §9 고유 생성 금지 목록이 portable Avoid에 없음

원본 `:251` `Do not generate a mobile marketplace flow, checkout, payment, seller workflow, status system, or Japanese-product design from this reference; the supplied evidence does not establish them`를 Experience Avoid `:72`에 복원. 한정 `:66`이 Agent Prompt Guide 출처를 이름함. provenance `:153`은 그 문장이 Avoid에 있다고 적었으나 본문에 없었음 — 이제 Avoid 불릿을 가리키도록 고침. Scope `:17`의 `For a public US Mercari web concept only`는 그대로.

### 결함 2 — D2. 삭제 페르소나 표기 토큰이 Primary tasks에 남음

Primary tasks `:25` `List a shippable item`을 §1 표현 `List items that can be shipped`로 바꿈. `shippable` DESIGN dest **0**. 동기 문장(`short, ordered path` / `accurate item information` / `browsing behavior`) dest **0** 유지.

`node scripts/check-limiter-ledger.mjs mercari` → 본문 23 = 원장 23. `migrate-reference.mjs --brand mercari --gate-only` → PASS.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §9 | `seller workflow` DESIGN / P | 0 / 1 | **1** at 72 / **1** at 153 |
| §9 | `status system` DESIGN / P | 0 / 1 | **1** at 72 / **1** at 153 |
| §9 | `mobile marketplace flow` DESIGN / P | 0 / 1 | **1** at 72 / **1** at 153 |
| §9 | `Japanese-product design` DESIGN / P | 0 / 1 | **1** at 72 / **1** at 153 |
| §9 | `Do not generate` DESIGN / P | 0 / 1 | **1** at 72 / **1** at 153 |
| §9 | `from this reference` DESIGN / P | 0 / 0 | **1** at 72 / **1** at 153 |
| §9 | `the supplied evidence does not establish them` DESIGN / P | 0 / 0 | **1** at 72 / **1** at 153 |
| §13 / F2 D2 | `shippable` DESIGN | 1 | **0** |
| §13 / F2 D2 | `items that can be shipped` DESIGN | 2 | **3** at 9/25/26 |
| §7 Don'ts | `Agent Prompt Guide` DESIGN | 0 | **1** at 66 |
| §9 | `For a public US Mercari web concept only` P | 0 | **1** at 153 (DESIGN dest **1** at 17 불변) |
| YAML identity / F2 | `#5356ee` DESIGN 줄 | 9/13/39/60/81/230/263/264/271/283 | **10** at 9/13/39/60/82/231/264/265/272/284 |
| Wave 45 / F1 | phrase-1 DESIGN 줄 | 11/13/15/23/32/36/47/57/66/79/90/101/105/126/132/142/148/149/158/311/316/330/364 | **23** at 11/13/15/23/32/36/47/57/66/80/91/102/106/127/133/143/149/150/159/312/317/331/365 |
| YAML family · type-roles · spacing · components · §1 URL · §2–§8 · §10 · §14 · §15 | DESIGN dest 줄 (본문 +1 시프트) | 72 이후 옛 줄 | 실측 줄 (family 131, type-roles 139–141/143/145, spacing 91/95/106/310, components 161–306, listing-guide 17/317, …) |
| unique-expression | missing-then-restored | 13 | **14** (Avoid `:72` 고유 생성 금지) |
| checkout / payment (발생 수, dest **N** 행은 없음) | DESIGN | 2 / 3 | **3** / **4** (SRC 3 / 4와 같음) |

B2a `derived editorial implementation inference` DESIGN dest **23** 불변. `loading \| applicable` DESIGN dest **0**. `native-client` / `parity` DESIGN dest **0**.

FIX_DONE mercari fixed=2 logdest=16

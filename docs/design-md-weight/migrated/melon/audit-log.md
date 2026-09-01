# melon 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/melon/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/melon/DESIGN.md`
검증 sibling: `web/references/melon/.verification.md` — `find web/references/melon -type f`와 `test -f web/references/melon/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Melon-authored or a separately published UI specification`을 요구한다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 24 / 원장 24. 숫자는 맞았으나 Semantic color `:90` 컴포넌트-로컬 유지 판단, Family `:133` sans=mono 보존, Capture `:176`이 위 문장을 "following"으로 가리키고 `:178` surface-level appearance를 이름하지 않음, Components `:239` 직각 재진술, Layout `:246` desktop-capture 경계가 한정의 이름 목록 밖이었다. 24는 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (16건)

### B2a — 인접 한정 (본문 5건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:90` — Semantic color | "kept there rather than promoted to a general role"는 세 번째 부류. `:77` 한정은 YAML/prose 병기와 역할 성격화만 이름한다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:135` — Family | "preserved rather than resolved into a separate monospace face"는 세 번째 부류. 같은 항목의 기존 한정은 밀도 읽기만 이름한다. | 기존 완전형에 sans=mono 보존을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:176` — Capture record | 한정 문구가 "the following applicability note"인데 해당 노트는 `:172` 위쪽이다. `:178` "surface-level named appearance" / nav·tab·player 미도입은 이름되지 않음. | "above"로 방향을 고치고 surface-level appearance와 미도입을 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:239` — Components 맺음 | "uniformly square … reinforcing the dense, grid-like streaming layout"는 세 번째 부류. Shape `:98` 한정은 다른 절이라 인접이 아니다. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:248` — Layout | "desktop-capture measurements, not cross-viewport specifications"는 세 번째 부류. 기존 한정은 density/wayfinding/tap-target만 이름한다. | 기존 완전형에 desktop-capture 경계를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 26, `not Melon-authored or a separately published UI specification` 26. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 43, 54, 64, 77, 90, 94, 98, 102, 108, 110, 118, 135, 139, 147, 154, 176, 239, 248, 255, 291.

### A1 — 키 경로 (본문 2건)

값 grep만으로는 통과했다. Search / List Text 행에 hex는 있었고, YAML 키 `fg`는 Login 블록에만 있었다(icook·krds형: 값 생존 ≠ 키 경로 보존).

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 6 | `DESIGN.md:210` — Search Input Text | 원본 `tokens.components.search-input.fg: "#999999"`. Text 행에 `#999999`만 있고 키 경로 없음. | `YAML \`tokens.components.search-input.fg\``를 그 블록 Text 행에 복원. hex는 중복 기입하지 않음. |
| 7 | `DESIGN.md:233` — Body / List Text | 원본 `tokens.components.list-row.fg: "#666666"`. Text 행에 `#666666`만 있고 키 경로 없음. | `YAML \`tokens.components.list-row.fg\``를 그 블록 Text 행에 복원. |

Login Button Text는 착수 시부터 `YAML \`fg\` \`#ffffff\``(대소문자 병기). 토큰 값·상태 표·구조는 바꾸지 않음.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼거나, 본문 신설을 행으로 안 세면 1:1이 아니다. `#ffffff` 네 역할 분리도 원장 서술 없이 claim 행만 있었다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | `provenance.md` inventory 헤더·행 수 | 24 행. 본문이 26 완전형. | 헤더 26 / 데이터 행 **26** (133–158). `node scripts/check-limiter-ledger.mjs melon` → 본문 26 = 원장 26. |
| 9 | Semantic color / Components 행 | `:90`·`:239` 한정이 원장에 없음. | 행 "Semantic color component-local", "Components square restatement" 신설. |
| 10 | Family / Capture / Layout 행 | sans=mono 보존, surface-level appearance, desktop-capture 경계가 행에 없음. | 세 행을 본문 한정이 이름하는 판단에 맞춰 확장. |
| 11 | Byte-form notes | `#ffffff`가 canvas / login `fg` / search YAML `bg` / list-row `bg`로 갈라지는데 그 분리가 서술되지 않음. | 네 역할을 병합하지 않는다고 원장에 적음. |

### E2 / E2a — 로그 목적지 (5건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김. 본문 수정 후 dest 표를 재실측함(lablup형).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 12 | §2 행 | `live body renders rgb(102,102,102)`를 DESIGN dest 2 / P dest 2 (E2a)로 적음. 정확 문구 DESIGN **2** / P **0**. P는 `body text computed rgb(102,102,102)`. | 정확 문구 P dest **0**. `rgb(102,102,102)` DESIGN dest 2 / P dest 2를 따로 적음. |
| 13 | YAML colors 행 | `canvas` `#ffffff` P dest 6. 원장 byte-form 추가 후 P dest **7**. | P dest **7**. 네 역할 분리를 로그에도 적음. |
| 14 | search-input / list-row 행 | `fg` 키 경로 dest가 없음. 복원 후 `tokens.components.search-input.fg` DESIGN dest **1** / P dest **0**, `tokens.components.list-row.fg` DESIGN dest **1** / P dest **0**. | 두 행에 키 경로 dest를 적음. |
| 15 | B2a · F1 · limiter · §4 · §8 | 본문 24 / 원장 24 (132–155). F1 목록에 신설 한정이 없음. `desktop-capture measurements` dest 미기재. | 본문 **26** / 원장 **26** (133–158). F1 목록에 component-local · sans=mono · surface-level appearance · square restatement · desktop-capture를 넣음. `desktop-capture measurements` DESIGN dest 2 / P dest 1. §4 직각 재진술에 인접 한정 있음을 적음. |
| 16 | Hashes | 워커 마감 DESIGN `e387b4ae…` / provenance `5ead06e9…`. | 감사 후 DESIGN `82d363aa47ef26278afe6630926472b8dccbb51411acb90bc4254d752d461f20` / provenance `766d5b22b8450f47df830b714dbef2d563541cc816a4c15198936a97ad7669e6`. 워커 마감 SHA는 로그에 보존. |

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 여섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 페르소나 동기·소속 분류를 재구성하지 않음. Primary tasks는 모듈/컨트롤에서 읽었다고 한정됨. 로그인 과제는 페르소나에 없음.
- Semantic `:77` — "Where a line also characterizes a value"가 `:88` only-saturated / grayscale-ladder를 이름함.
- Motion `:106` "No motion token is promoted" / `:170` undocumented rather than invented — 원본에 규칙이 없는 자리의 생략 진술(kmong형). 합성하지 않음.
- Motion `:110` B3 게이트 — `transition properties` · `animation name` · duration · easing · `reduced-motion behavior`와 per-component 게이트·partial-confirmation이 본문 전문(E2c 유지).
- Governance 일반 문구 — 대체물이 아님(B2a). 한정 미추가.
- 2차 목적지 전수: homepage URL DESIGN dest 1; `#00CD3C` dest 9; favicon URL dest 1; `Pretendard` dest 12; `맑은 고딕` dest 7; `Background: transparent` dest 1; `through the green, not through chatty copy` dest 2 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음). `getdesign.md/melon` / `NOT LISTED` / `prose-derived`는 원장만.
- YAML `use` 6/6 (`node scripts/check-yaml-use-landing.mjs melon`).
- 컴포넌트 상태 applicability 표, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/melon/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 멜론이 발행한 제품 마이크로카피·CTA는 원본에 없음. 사명 문자열도 없음.
- **관측 기술** — hex 8키(대소문자 병기), Pretendard / 맑은 고딕, unitless spacing·radius, `tokens.shadow.none`, 컴포넌트 YAML `type`/`bg`/`fg`/`radius`/`font`/`use`, 로그인 42px / 검색 40px, `rgb(102,102,102)`, `appears ~11x`.
- **편집적 해석·인과 판단** — melon.com을 토큰 표면으로 읽기, 분위기·서사, 과제 선정, 오디언스 그룹, 특성 성격화, 원칙·Do/Don't, 팔레트 성격화, 컴포넌트-로컬 유지, spacing 압축 읽기, 직각·flat·motion 함의, 폰트 증거 class, sans=mono 보존, type-role 병기, favicon 포인터, applicability, 직각 재진술, layout density/desktop-capture, voice through-the-green, Named gaps.

세 번째 부류 중 24곳은 착수 시 인접 완전형이 있었고, 그중 3곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 2곳은 한정이 없어 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---|
| `derived editorial implementation inference` | 26 | 1 | 1 |
| `not Melon-authored or a separately published UI specification` | 26 | 1 | 2 |
| inventory 데이터 행 | — | 26 (133–158) | — |
| `#00CD3C` | 9 | 4 | (mention) |
| `#ffffff` | 7 | 7 | (mention) |
| `live body renders rgb(102,102,102)` | 2 | 0 | (mention) |
| `rgb(102,102,102)` | 2 | 2 | (mention) |
| `tokens.components.search-input.fg` | 1 | 0 | (mention) |
| `tokens.components.list-row.fg` | 1 | 0 | (mention) |
| `desktop-capture measurements` | 2 | 1 | (mention) |
| `The daily listener` / `The chart watcher` / `The quick searcher` | 0 / 0 / 0 | 0 / 0 / 0 | 1 / 1 / 1 (삭제 처분 행, 원형 라벨) |
| B3 다섯 종류+게이트 (`DESIGN.md` 110) | 1 | 1 | 1 |

토큰·표·applicability·구조·원본 무변경. 키 경로 복원은 해당 블록 Text 행에 YAML 필드명을 붙인 것.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 2 / candidates 51. 기계가 안 본 차이는 49. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조: Hangul `맑은 고딕` DESIGN dest 7 / P dest 3; YAML `use` 6종 dest 1; 브랜드 발행 Latin CTA 0(원본에 제품 마이크로카피 없음). 눈에 띄는 라틴 발행 카피 손실은 없다. 고치지 않음.
- **B1.** sibling 전용 `https://static.melon.co.kr/static/web/resource/style/w1/jw/x/vcztjn3yp.css` / `playwright getComputedStyle` / `rgb(0,211,68)` / standalone `#666`·`#999` / `>= 2 non-Western` / 페이지가 Korean이라는 country-source gloss: DESIGN 0. provenance에만 전사. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. `desktop web`은 원본 §8에 이미 있음(원본 1 / DESIGN 8 / sibling 0).
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 절·인원·필드 종류만. 원본 페르소나에 이름·나이·도시가 없다. 원형 라벨 `The daily listener` / `The chart watcher` / `The quick searcher`는 로그 삭제 행에만(게이트 copy-loss 처분). DESIGN/provenance 0. 동기 `opens Melon to scan charts` / `rewarded by density` / `comes for the rankings` / `jump straight to a song` DESIGN/provenance 0. 소속 분류 발명 없음.
- **E2d.** 로그 "DESIGN dest 0 / provenance dest 0 for each label"는 DESIGN·provenance만 분모로 하고 실측 0(로그 mention은 use가 아님). "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음. `live body renders…` P dest 0 수정도 로그가 그 문구를 인용하는 mention이며 provenance 부재 단언의 분모에 로그를 넣지 않음.
- **충돌 처리 정책 (항목 5).** YAML 소문자 hex ↔ 프로즈 대문자, YAML `0` ↔ `0px`, `14px/400` ↔ `14px / 400`, 검색 배경 `#ffffff` ↔ `transparent`는 전 문서 keep-both. Primary Deep/Warning처럼 자리마다 다른 처리는 없음.
- **같은 hex 다른 역할.** `#ffffff`/`#FFFFFF`는 Ground canvas, 로그인 텍스트, 검색 YAML 배경, 리스트 행 배경. 귀속 분리는 정상. 원장 byte-form에 적어 E1로 맞췄다(위 #11).
- **원본 §15.** 곡선·duration 값 없음. T2 `:<n>` 인용 잔존 관례 해당 없음.

AUDIT_DONE fixes=16

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/melon/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (26=26). provenance 본문 무변경.

### 결함 1 — A1 · item 11 — §3 Controls 목적 절

원본 `:64` `interactive controls and inputs sit slightly larger than body for tap targets`를 Type roles Controls Notes에 복원. Token-set use는 YAML 짧은 쪽 `Interactive controls and inputs`를 유지. Body `:145` Notes와 같은 슬롯.

판정: **사실 인용**, 한정 불필요. 근거 — YAML `use`와 §3 본문이 같은 Controls 항목을 두 길이에 적고, 긴 쪽은 목적 절이다. 값은 이미 착지했다. 잘린 것은 목적 절뿐.

`node scripts/check-limiter-ledger.mjs melon` → 본문 **26** / 원장 **26** (133–158) 1:1 OK.
`node test-v2/tools/migrate-reference.mjs --brand melon --gate-only` → PASS, `problems: []`.
`node scripts/check-yaml-use-landing.mjs melon` → use 6/6.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용):

| 문자열 | SRC | SIB | DST | PROV | LOG | AUDIT |
|---|---:|---:|---:|---:|---:|---:|
| `sit slightly larger than body for tap targets` | 1 | 0 | **1** | 0 | 5 | 4 |
| `slightly larger` | 1 | 0 | **1** | 0 | 6 | 6 |
| `for tap targets` | 1 | 0 | **1** | 0 | 6 | 6 |
| `Interactive controls and inputs` | 1 | 0 | **1** | 1 | 5 | 3 |
| `interactive controls and inputs` | 1 | 0 | **1** | 0 | 2 | 2 |

`tap targets` DST **3** = Notes 목적 절 + Layout `comfortable tap targets` 2. YAML use dest **1** 불변.

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML heading/control/body | `sit slightly larger than body for tap targets` | 없음 0/0 | DESIGN **1** / P **0** |
| §3 Typography Rules | `sit slightly larger than body for tap targets` | 없음 0/0 | DESIGN **1** / P **0** |
| YAML heading/control/body | `Interactive controls and inputs` | DESIGN 1 / P 1 | DESIGN **1** / P **1** (불변) |
| Revision dest | `slightly larger` | 없음 | DESIGN **1** / P **0** |
| Revision dest | `for tap targets` | 없음 | DESIGN **1** / P **0** |
| Hashes | DESIGN.md SHA | `82d363aa47ef26278afe6630926472b8dccbb51411acb90bc4254d752d461f20` | `6ba7f160ffbae2f73f7b0744a1e0faa733afa58d6190f04037e1293190307ee7` |

provenance SHA `766d5b22b8450f47df830b714dbef2d563541cc816a4c15198936a97ad7669e6` 불변.

FIX_DONE melon fixed=1 logdest=6


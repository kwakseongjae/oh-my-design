# IBM 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/ibm/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/ibm/DESIGN.md`
검증 sibling: `web/references/ibm/.verification.md` — `find web/references/ibm -type f`와 `test -f web/references/ibm/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 있음(Carbon, `https://carbondesignsystem.com`, `ds.type: system`). B2a는 toss 예문을 그대로 요구하지 않음. 완전형은 `derived editorial implementation inference` / `not IBM-authored` / `taken from a separately published UI specification, including the published Carbon documentation`.

착수 실측: 본문 완전형 21 / 원장 21. 숫자는 맞았으나 Spacing `:91` 한정이 four-`16`s만 이름하고 rhythm-candidates·`48`-as-height를 빠뜨렸고, Font evidence `:124`는 official-use / OFL / Helvetica·`ibm_icons`만 이름하고 declared-only-not-UI-token을 빠뜨렸다. 21은 과소가 아니라 인접 한정의 범위가 좁았다.

## 수정 목록 (9건)

### B2a — 인접 한정 범위 확장 (본문 2건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:91` — Spacing | "Treat these as observed rhythm candidates, not a complete responsive grid specification"와 "`48` … is not a `tokens.spacing` key"는 세 번째 부류. 같은 단락의 기존 한정은 four writings of `16`만 가리킨다. | 기존 완전형에 rhythm-candidates-not-grid와 `48`-as-height-not-spacing-key를 접어 넣음. 주어를 복수로 맞춤. 발생 수 +0. |
| 2 | `DESIGN.md:124` — Font evidence | 표 Declared-only 칸 "not machine UI-family tokens here"는 세 번째 부류. 같은 절의 기존 한정은 official-use / OFL / Helvetica·`ibm_icons`만 가리킨다. | 기존 완전형에 declared-only Mono / Serif / locale faces not machine UI-family tokens를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 21, `not IBM-authored` 21, `including the published Carbon documentation` 21. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 38, 42, 51, 61, 75, 91, 100, 104, 108, 124, 132, 136, 156, 167, 289, 322, 356.

### E1 — provenance derived 범위 (2건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md` Spacing 행 | "`md: 16` stays a spacing step"만. 본문 `:91`이 이제 rhythm-candidates와 `48`-as-height도 이름한다. | 두 판단을 행에 추가. |
| 4 | `provenance.md` Font evidence 행 | official-use / OFL / Helvetica·`ibm_icons`만. 본문 `:124`가 이제 declared-only-not-UI-token도 이름한다. | declared-only Mono / Serif / locale faces를 행에 추가. |

헤더 `21` / 데이터 행 **21** 유지 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (5건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | §3 행 | `` `25` dest **1** at 119 ``. `25 elements` dest **1** at 119; `25 visible` dest **1** at 129. 같은 계수(IBM Plex Sans 25)가 두 줄. | dest **2** at 119/129. |
| 6 | Footer 행 | Resolution note를 Avoid 63 + Proof notes에 있다고 적음. `rolled back` / `earlier universal` / `fresh evidence` DESIGN **0** / provenance **0** (fitpet형). Developer typography·About URL을 dual 집합에 넣지 않았으나 Scope 9에 있고 provenance exact dest **0**. | Resolution-note 문자열 dest 0. Avoid 63은 source Don't. Developer/About는 Scope-only. |
| 7 | §4 행 | "Capture selectors are dual: body + provenance Sibling handling." `surface-3::[data-omd-capture="16"]` DESIGN **1** at 185 / provenance **0**. | `4`/`5`/`10`/`23`만 dual. capture 16은 DESIGN-only. |
| 8 | §14 행 | "Full source body preserved at 162–167." 162–167은 요약+§4.4 절차이지 원본 표 전문이 아님. 상태 값은 171–279. | 요약 163 · 값 171–279 · 절차 164–167로 교정. |
| 9 | Family·F1·Deviations·SHA | Spacing 91을 four-`16`s만, Font 124를 declared-only 없이 적음. `wc -w` 5305는 확장 전. | F1 21줄(확장만). `wc -w` 5351. worker-close SHA `e2e46b0e…` 유지, auditor `45ddf4460ef4382127222a3c087ed87d873a36cbdc0f51cd86a5ff1b5afd7fcb`. |

Destination SHA `e2e46b0e…` → `45ddf4460ef4382127222a3c087ed87d873a36cbdc0f51cd86a5ff1b5afd7fcb` (한정 범위 확장 후). 줄 수 DESIGN 366 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 비적용(v12 전제 주석; Carbon 발행 사양). 닫힘은 `including the published Carbon documentation`.
- Audience — 원본 §13의 no-research 문장을 다시 적음. 쇼핑 그룹을 만들지 않음. 한정 미추가.
- Scope ¶3 "helps explain a brand system…" — 원본 §11 문장. `:13` 한정이 narrative-as-context를 이름함.
- Content `:294` — 원본 §10 문단. 공식-guidance-not-complete-microcopy 읽기는 `:322`.
- Tabs `:217` "no universal pressed color is promoted because…" — 원본 §4 문장. Semantic `:75`가 route-local 색을 이미 한정함.
- Capture `:163` "Only the variants below are retained because…" — 원본 캡처 경계. 적용 절차 한정은 `:167`.
- B3 준수 주장 — `DESIGN.md` 108이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 363은 재진술).
- 2차 목적지 전수: 마케팅 URL `https://www.ibm.com/kr-ko` DESIGN 9/21 · `#0f62fe` dest 8 at 11/33/38/55/75/77/176/184 · `logo.type: github` 156 · `box-shadow: none` 104 · `IBM Plex Sans KR` dest 20 · 닫는 문장 `:13` — 각 DESIGN dest ≥ 1 (fitpet형 0회는 Resolution note뿐, 로그에서 철회).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/ibm/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — IBM, 1911 Computing-Tabulating-Recording, 1924 IBM name, Plex as corporate typeface, OFL, Carbon official system, About AI / cloud / quantum / sustainability, Gray 10 / Gray 100 / IBM Blue, published strings, §12 원칙·§7 Do/Don't·§10 보이스.
- **관측 기술** — hex · IBM Plex Sans KR / Sans · 485/25 · 53.6469/62.7669 · 48px/4px/0px · `box-shadow: none` · selectors · 1440×900 · Helvetica marketing-form.
- **편집적 해석·인과 판단** — 세 페이지를 계약 표면으로 읽기, 값의 표면 귀속, 서사≠토큰, 과제 선정, 특성 묶기, 원칙·Do/Don't, 팔레트 슬롯, 16/48 경로 분리, shape 키 분리, elevation/motion 게이트, 폰트 증거 class·declared-only, no-substitution·canonicity, type-role keep-both, github slug, applicability, desktop-capture·2x Grid, byte-exact, unresolved 목록.

세 번째 부류 중 21곳은 착수 시 인접 완전형이 있었고, 그중 2곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 21 | 1 | 2 |
| `not IBM-authored` | 21 | 2 | 2 |
| `including the published Carbon documentation` | 21 | 2 | 2 |
| inventory 데이터 행 | — | 21 | — |
| `25 elements` | 1 | 0 | 1 |
| `25 visible` | 1 | 0 | 1 |
| `data-omd-capture="16"` | 1 | 0 | 1 |
| `rolled back` | 0 | 0 | 1 |
| `loading \| applicable` | 0 | 0 | 0 |
| `loading \| not-applicable` | 4 | 0 | 0 |
| `rgb(15, 98, 254)` / `leadspaceSimpleTitle` / `mktoField` | 0 / 0 / 0 | 2 / 2 / 2 | 1 / 2 / 2 |
| B3 다섯 종류+게이트 (`DESIGN.md` 108) | 1 | 0 | 1 |

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 0 / candidates 124 (0%). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(IBM / IBM Plex / IBM Plex Sans KR dest 20 · Carbon · Computing-Tabulating-Recording dest 5 · Gray 10 dest 6 · Gray 100 dest 3 · IBM Blue dest 3 · Open Font License dest 2 · Plex Mono Light dest 2 · YAML `use` 6종 dest 1/1/2/1/2/3): DESIGN.md에서 생존. 눈에 띄는 라틴 **발행** 카피 손실은 없다. dest 0인 `Create a public-product CTA using the captured IBM pattern`은 §9 도구 프롬프트(삭제 처분), 발행 카피 아님. `Do not invent demographic personas`는 원본 §13 지시의 가까운 다시 쓰기(`not to invent demographic personas` dest 1). 고치지 않음.
- **B1.** sibling 전용 `rgb(15, 98, 254)` / `leadspaceSimpleTitle` / `mktoField` / `structured blue` / `C-T-R` / `coverage 100` / `7 uses` / artifact timestamp: DESIGN 0 / provenance mention. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. `h3`/`H3` DESIGN 0.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 절·필드 종류만. 원본 §13은 `[FILL IN]` — 이름·나이·도시 없음. 식별자 DESIGN/provenance/migration-log 0 as use. Audience는 원본 no-research 문장만. Primary tasks는 표면 라벨(kr-ko / Cloud Support CTA / Confluent tablist). 동기·소속 분류 발명 없음.
- **E2d.** 로그 "Measured DESIGN.md 0 for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). `ds.type: system` dest 0 · `tokens.rounded.full` dest 0 · `full: 9999` dest 0 · `loading \| applicable` dest 0 · `measures 1440px` dest 0도 DESIGN 분모. "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음.

AUDIT_DONE fixes=9

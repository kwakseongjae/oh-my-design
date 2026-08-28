# Hyundai 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/hyundai/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/hyundai/DESIGN.md`
검증 sibling: `web/references/hyundai/.verification.md` — `find web/references/hyundai -type f`와 `test -f web/references/hyundai/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 웹 UI 사양 없음(Sensuous Sportiness는 차량 철학, Hyundai Sans UI / Seon은 ccNC). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Hyundai-authored or a separately published UI specification`을 요구한다. 기존 21건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 21 / 원장 21. 숫자는 맞았으나 Family `:131` 한정이 no-substitution만 이름하고 canonicity-because-FontFaceSet를 빠뜨렸고, Assets `:155`는 simpleicons만 이름하고 photography-not-decoration을 빠뜨렸고, Layout `:322`는 desktop-capture / unnamed breakpoints만 이름하고 no-universal-card를 빠뜨렸다. 21은 과소가 아니라 인접 한정의 범위가 좁았다.

## 수정 목록 (9건)

### B2a — 인접 한정 범위 확장 (본문 3건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:131` — Family | "The loaded families are canonical here only because computed visible use and loaded FontFaceSet entries agree"는 세 번째 부류. 같은 단락의 기존 한정은 no-substitution rule만 가리킨다. | 기존 완전형에 canonicity-because-FontFaceSet 판단을 접어 넣음. 주어를 복수로 맞춤. 발생 수 +0. |
| 2 | `DESIGN.md:155` — Assets | "Product photography … is not replaced with invented brand-color decoration"는 세 번째 부류. 같은 줄의 기존 한정은 simpleicons-as-pointer만 가리킨다. | 기존 완전형에 photography-not-invented-decoration 판단을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:322` — Layout | "no universal card, spacing scale, or layout grid is promoted"는 세 번째 부류. 같은 단락의 기존 한정은 desktop-capture와 breakpoint / grid / touch / collapse unnamed만 가리킨다. | 기존 완전형에 no-universal-card 판단을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 21, `not Hyundai-authored` 21, `separately published UI specification` 21. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 40, 44, 52, 60, 73, 88, 98, 102, 106, 122, 131, 135, 155, 166, 322, 342, 376.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | `provenance.md` Family 행 | "No-substitution rule"만. 본문 `:131`이 이제 canonicity도 이름한다. | canonicity-because-FontFaceSet를 행에 추가. |
| 5 | `provenance.md` Assets 행 | simpleicons-as-pointer만. 본문 `:155`가 이제 photography도 이름한다. | photography-not-invented-decoration을 행에 추가. |
| 6 | `provenance.md` Layout 행 | desktop routes + unnamed breakpoints만. 본문 `:322`가 이제 no-universal-card도 이름한다. | no universal card / spacing / layout grid를 행에 추가. |

헤더 `21` / 데이터 행 **21** 유지 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (3건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | YAML typography 행 | `tokens.typography.body.size` / `action.size`를 `DESIGN.md` 151만 적음. `grep -oF` dest **2** at 135/151. | **135/151**. Qualifier 135 병기. |
| 8 | §3 행 | `287 / 84 / 43 / 35 FontFaceSet counts kept at 117`. `287` dest **2** — 9는 newsroom URL `0000000287`. | `84`/`43`/`35` dest 1 at 117. `287` dest 2 (9 URL + 117 count). |
| 9 | Family·§5·Deviations·F1·F2·SHA | Family 131을 no-substitution만, Layout 322를 desktop-capture만 적음. F1 목록이 세 확장 판단을 빠뜨림. | Family 131 canonicity · Layout 322 no-universal-card. F1 21줄(확장만). F2 dest 교정 두 줄. worker-close SHA `ab5f394d…` 유지, auditor `f715c0a7fd15032c47d6b0707b0bd7556aa65c31cd3720257ff8e709e7a062b9`. |

Destination SHA `ab5f394d…` → `f715c0a7fd15032c47d6b0707b0bd7556aa65c31cd3720257ff8e709e7a062b9` (한정 범위 확장 후). 줄 수 DESIGN 386 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 세 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 웹 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13의 no-segmentation 문장을 다시 적음. 쇼핑 그룹을 만들지 않음. 한정 미추가.
- Chatbot `:305` "single-surface, low-confidence … does not establish a general floating-action pattern" — 원본 §4 문장. 관측 기술에 가깝고 Avoid `:60`이 같은 일반-FAB 금지를 이미 한정함.
- Family Site Arial `:283` — 원본 §4 "retained as footer utility chrome". Font evidence `:122`가 Arial 분류를 한정함.
- Capture `:162` "Only the variants below are retained because…" — 원본 §4 문장. 적용 절차 한정은 `:166`.
- B3 준수 주장 — `DESIGN.md` 106이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 382는 재진술).
- 2차 목적지 전수: homepage URL · `#002c5f` · simpleicons · tokens.note · capture selectors · chatbot `:305` · "no verbatim voice samples" `:327` · §11 닫는 문장 `:13` — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/hyundai/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — Hyundai Motor Company, 1967, 1968, Pony, 1976, Ulsan, mobility solution provider, 2024 IONIQ, 2018 Sensuous Sportiness, Seon, Hyundai Sans UI, ccNC, Progress for Humanity, Family Site.
- **관측 기술** — hex · HyundaiSans* · unitless `1.32`/`1.15` · `58px`/`18.4px`/`30px` · `none: 0`/`pager: 6`/`100%` · `box-shadow: none` · selectors · `interactionCount: 0` · FontFaceSet 287/84/43/35.
- **편집적 해석·인과 판단** — 세 페이지를 계약 표면으로 읽기, 값의 표면 귀속, 서사≠토큰, 과제 선정, 특성 묶기, 원칙·Do/Don't, 팔레트 슬롯, 빈 spacing, shape 키 분리, elevation/motion 게이트, 폰트 증거 class, no-substitution·canonicity, type-role keep-both, simpleicons·photography, applicability, desktop-capture·no-universal-card, byte-exact, unresolved 목록.

세 번째 부류 중 21곳은 착수 시 인접 완전형이 있었고, 그중 3곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 21 | 1 | 2 |
| `not Hyundai-authored` | 21 | 2 | 2 |
| `separately published UI specification` | 21 | 2 | 2 |
| inventory 데이터 행 | — | 21 | — |
| `tokens.typography.body.size` | 2 | 1 | 2 |
| `287` | 2 | 2 | 3 |
| `loading \| applicable` | 0 | 0 | 1 |
| `loading \| not-applicable` | 7 | 0 | 2 |
| `Magul Gothic` / `width: 12px` / `aria-selected` | 0 / 0 / 0 | 2 / 2 / 2 | 3 / 2 / 2 |
| B3 다섯 종류+게이트 (`DESIGN.md` 106) | 1 | 0 | 1 |

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 0 / candidates 92 (0%). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(Progress for Humanity DESIGN 3 · Sensuous Sportiness 7 · Family Site 12 · Hyundai Sans UI 7 · Seon 4 · IONIQ 14 · Pony 3 · Hyundai Motor Company 4 · mobility solution provider 2 · YAML `use` 4종 dest 1/1/2/1): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. 고치지 않음.
- **B1.** sibling 전용 `Magul Gothic` / `width: 12px` / `aria-selected` / `12px` / `rgb(0, 44, 95)` / `85 coverage` / `six component types` / `54 component` / sustainability URL: DESIGN 0 / provenance mention. `sustainability` DESIGN 1은 원본 §12 "mobility and sustainability vision"이지 sibling URL이 아님. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. `h3`/`H3`/`playwright`/`getComputedStyle` DESIGN 0.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger)은 절·필드 종류만. 원본 §13은 `[FILL IN]` — 이름·나이·도시 없음. 식별자 DESIGN/provenance/migration-log 0 as use. Audience는 원본 no-segmentation 문장만. Primary tasks는 표면 라벨(`Family Site` / IONIQ 6 / catalogue). 동기·소속 분류 발명 없음.
- **E2d.** 로그 "Measured DESIGN.md 0 for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). `tokens.rounded.full` dest 0 · `full: 9999` dest 0 · `loading \| applicable` dest 0 · `measures 1440px` dest 0도 DESIGN 분모. "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음.

AUDIT_DONE fixes=9

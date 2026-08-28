# idus 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/idus/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/idus/DESIGN.md`
검증 sibling: `web/references/idus/.verification.md` — `find web/references/idus -type f`와 `test -f web/references/idus/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not idus-authored or a separately published UI specification`을 요구한다. 기존 33건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 33 / 원장 33. 숫자는 맞았으나 Scope ¶2 `:11` 한정이 네 가지 분위기만 이름하고 system-native·hierarchy-by-weight를 빠뜨렸고, Shape `:133`은 경로 분리만 이름하고 Sharp 2px workhorse 판단을 빠뜨렸고, Layout image `:487` consistent-with-flat와 Content voice-sample `:506` 괄호 해설에는 인접 한정이 없었다. 33은 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (17건)

### B2a — 인접 한정 (본문 4건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | "The typographic personality is deliberately system-native"와 "Hierarchy is carried by weight and size rather than typeface"는 세 번째 부류. 같은 단락의 기존 한정은 분위기 네 가지만 가리킨다. | 기존 완전형에 system-native typographic personality와 hierarchy-by-weight-and-size를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:133` — Shape | "the workhorse"는 세 번째 부류. 같은 단락의 기존 한정은 키 경로 분리만 가리킨다. | 기존 완전형에 Sharp 2px workhorse 판단을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:487` — Layout image | "consistent with the flat system"는 세 번째 부류. `:466`은 breakpoints / collapsing / target sizes만 이름한다. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:506` — Voice samples | "invites discovery, maker-first" / "warm momentum, no pressure" / "discovery-framed, taste-centric"는 세 번째 부류. `:492`는 characterization·register·tone table만 이름한다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not idus-authored` 35, `separately published UI specification` 35. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 47, 57, 70, 87, 115, 119, 133, 144, 148, 185, 187, 188, 189, 190, 196, 209, 218, 225, 236, 438, 452, 464, 466, 487, 492, 506, 544, 546, 580.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼거나, 본문 신설을 행으로 안 세면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | `provenance.md` Scope ¶2 행 | 분위기 네 가지만. 본문 `:11`이 이제 system-native·hierarchy도 이름한다. | system-native typographic personality / hierarchy-by-weight-and-size를 행에 추가. |
| 6 | `provenance.md` Shape 행 | `full: 100` 경로 분리만. 본문 `:133`이 이제 workhorse도 이름한다. | Sharp 2px workhorse를 행에 추가. |
| 7 | `provenance.md` inventory | 본문 `:487` image 한정이 원장에 없음. | 행 34 Layout image behavior 신설. |
| 8 | `provenance.md` inventory | 본문 `:506` voice-sample 괄호가 원장에 없음. | 행 35 Content voice-sample glosses 신설. |

헤더 `33` → `35` / 데이터 행 **35** (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | YAML identity 행 | `#ef7014` DESIGN을 12줄만 적음. `grep -oF` dest **14** at 11/35/50/59/91/144/243/259/295/296/379/394/442/445. | **442/445** 병기 (State empty/loading 행). |
| 10 | YAML identity 행 | `아이디어스` provenance를 11/73만 적음. dest **4** at 11/73/74/94. | **11/73/74/94**. |
| 11 | YAML spacing 행 | `tokens.spacing.base: 14` dest 2. dest **3** at 119/461 (119에 두 번). | dest **3**. |
| 12 | YAML components 행 | `16px / 400` dest 1. dest **2** at 11/420. | dest **2** (11 Scope + 420 font record). |
| 13 | §8 행 | 48px / 33px / ~67px targets at **473**. 실측 **474**. | **474**. |
| 14 | §13 행 | Disposition at `provenance.md` 142. 142는 §9 삭제 확인 문단. 페르소나 처분은 **136**. | **136**. |
| 15 | §14 applicability 행 | `kind: non-interactive`를 본문 선언처럼 적음. DESIGN dest **0**. 실측은 `Kind: non-interactive` dest **3**. | `Kind:` dest 3, lowercase DESIGN 0. |
| 16 | §15 curve 행 | Ledger at `provenance.md` 143–145. 곡선 생략 행은 **137–139**. | **137–139**. |
| 17 | Family·Layout·Voice·inventory·F1·Deviations·SHA | Layout 457–462를 image 한정 없이, Voice 492를 sample 괄호 없이 적음. inventory 150–182 (33). `components_harvested` 22/187 → 실측 22/**189**. official-history 189 → **191**. F1 33=33. | Layout 487 · Voice 506 · inventory 150–184 (35). F1 35=35. worker-close SHA `bade30e1…` 유지, auditor `5b781ac69c47265bb38e00019119e2496f39d79a1cee0c8cd31fdec82ff7dc82`. |

Destination SHA `bade30e1…` → `5b781ac69c47265bb38e00019119e2496f39d79a1cee0c8cd31fdec82ff7dc82` (한정 신설·범위 확장 후). 줄 수 DESIGN 584 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더의 그룹 세 개만. 페르소나 동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic `:87` — "Where a line also characterizes a value" 포괄절이 아래 역할 해설(barely-there / second-most-frequent / dominant-foreground / touch-heavier)을 덮음. 예시를 늘리지 않음.
- Motion `:166` B3 게이트 — 규칙집 승격 조건. 148 절 한정이 durations/roles/rules를 덮음.
- Governance 일반 문구 — 대체물이 아님(B2a). 한정 미추가.
- B3 준수 주장 — `DESIGN.md` 166이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 582는 재진술).
- 2차 목적지 전수: homepage URL 9/21 (standalone, `/v2/product/` 접두사 제외) · `#ef7014` dest 14 · favicon slug 222 · `아이디어스` dest 3 · product URL dest 4 · GitHub dest 1 · `Kind: non-interactive` dest 3 · "아직 담은 작품이 없어요" dest 2 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/idus/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 아이디어스, 백패커, 2014, 김동환, 클래스, 텀블벅, idea + us, 작가/작품/작가홈/팔로우, 구매하기/장바구니/선물하기, 찾으시는 작가, 작품이 있나요?, 최근 573건 더 많이 구매되었어요.
- **관측 기술** — hex · system-ui / Apple SD Gothic Neo / Malgun Gothic · unitless `1.4`/`1.5` · `2`/`4`/`12`/`100` · `box-shadow: none` · `0px` borders · selectors · YAML `use` · `48px`/`33px`/`~67px`.
- **편집적 해석·인과 판단** — 두 페이지를 계약 표면으로 읽기, 값의 표면 귀속, 서사≠토큰, 과제 선정, 특성 묶기, 원칙·Do/Don't, 팔레트 슬롯, spacing/shape 키 분리, elevation/motion 게이트, 폰트 증거 class, no-substitution, type-role keep-both, favicon·photography, applicability, layout titles·image-consistent-with-flat, voice 해설·sample 괄호, byte-exact, unresolved 목록.

세 번째 부류 중 33곳은 착수 시 인접 완전형이 있었고, 그중 2곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 2곳은 한정이 없어 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 35 | 0 | 3 |
| `not idus-authored` | 35 | 1 | 4 |
| `separately published UI specification` | 35 | 2 | 6 |
| inventory 데이터 행 | — | 35 | — |
| `#ef7014` | 14 | 12 | 4 |
| `아이디어스` | 3 | 4 | 6 |
| `tokens.spacing.base: 14` | 3 | 1 | 1 |
| `16px / 400` | 2 | 2 | 1 |
| `loading \| applicable` | 2 | 0 | 0 |
| `Kind: non-interactive` | 3 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 1 |
| `재구매 1위` / `ui-sans-serif` / `36px` / `26px` | 0 / 0 / 0 / 0 | 2 / 2 / 2 / 2 | 3 / 2 / 2 / 2 |
| B3 다섯 종류+게이트 (`DESIGN.md` 166) | 1 | 0 | 1 |

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 41 / candidates 210. 기계가 안 본 차이는 169. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(아이디어스 DESIGN 3 · 백패커 4 · 김동환 2 · 2014 1 · 텀블벅 3 · 클래스 3 · 작가홈 4 · 구매하기 11 · 찾으시는 작가, 작품이 있나요? 7 · 최근 573건 더 많이 구매되었어요 4 · hard-sell scarcity 1 · maker-first vocabulary 1 · idea + us 1 · YAML `use` 8종 dest 1): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. latin-copy-audit lost 4는 sibling/tool (`Browse 2,000+` provenance 0 / sibling 1, `1px solid #ef7014`, `curl -sL`, `No designs found for 'idus'.`). 고치지 않음.
- **B1.** sibling 전용 `재구매 1위` / `ui-sans-serif` / `36px` / ranking-flag height로서의 `30px` / `26px` / chip `font-size: 16px` / `medium.com/idus-tech` / product UUID: DESIGN 0 / provenance mention. DESIGN `30px` dest 1은 원본 §4 Top Utility height(원본 163)이지 sibling ranking-flag height가 아님. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. `h3`/`H3`/`playwright`/`getComputedStyle` DESIGN 0.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger `:136`)은 절·인원·필드 종류만. 식별자 `정유진`/`김도현`/`이서연`/`서울`/`경기`/`부산` DESIGN/provenance/migration-log 0 as use. 동기 `repeat buyer`/`ceramic and leather`/`family occasions`/`urgency banners`/`no-pressure`/`discovering a person`/`scrolling a warehouse`/`friend's birthday`/`mass-produced` DESIGN/provenance/migration-log 0. Audience는 원본 §13 헤더 그룹 세 개만. Primary tasks는 표면 라벨. 소속 분류 발명 없음.
- **E2d.** 로그 "Measured DESIGN.md 0 for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). provenance `:92`는 "kept here and not promoted"로 mention/use를 가른다. "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음.

AUDIT_DONE fixes=17

# Heydealer 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/heydealer/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/heydealer/DESIGN.md`
검증 sibling: `web/references/heydealer/.verification.md` — `find web/references/heydealer -type f`와 `test -f web/references/heydealer/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 없음(getdesign.md/heydealer not listed). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Heydealer-authored or a separately published UI specification`을 요구한다. 기존 30건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 30 / 원장 30. 숫자는 맞았으나 Scope ¶1 한정이 계약 범위를 이름하지 않았고, Font evidence Official distributed asset 칸은 세 번째 부류인데 인접 한정이 없었다. 30은 과소였다.

## 수정 목록 (12건)

### B2a — 인접 한정 신설·범위 확장 (본문 2건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:9` — Experience / Scope | "this contract covers the three first-party web surfaces…"는 계약 범위에 대한 편집적 인과. 같은 단락의 기존 한정은 표면 귀속과 PRND-not-tokens만 가리킨다. 브랜드·운영사·세 URL은 원본·푸터 사실. | 기존 완전형에 세 검사 페이지를 이 계약의 토큰 표면으로 읽는 판단을 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:186` — Font evidence / Official distributed asset | "No Heydealer-exclusive downloadable font package was verified in the source."는 증거 class 해상. 인접 칸 `:184`·`:187` 한정은 Official product-use / Declared-only만 가리킨다. | 같은 칸 끝에 완전형 한정 신설. 새 줄 아님. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 31, `not Heydealer-authored` 31, `separately published UI specification` 31. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 15, 21, 32, 36, 50, 60, 73, 90, 119, 133, 143, 147, 184, 186, 187, 188, 189, 194, 207, 216, 224, 235, 407, 421, 433, 435, 457, 498.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md` Derived editorial inventory | 착수 원장 30행 = 본문 30. 본문에 한정 1건을 신설하면 원장이 좁아진다(fastcampus형). 행 1은 계약-범위 읽기를 적지 않음. | 원장 30→**31**. 행 신설 1(Official distributed asset `:186`). 행 1 서술 확장. 헤더 `31 = 31`. |

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | YAML family 행 | Fallback dest `187/193`을 Family로 묶음 — 187은 Font evidence Declared-only. | Family **193** · Declared-only **187** · Live computed stack **185**. |
| 5 | YAML typography 행 | `` `1.40` dest 2 `` — `grep -o '1.40'` DESIGN **3**. 441 Desktop `1024-1440px`가 같은 숫자를 포함. | line-height `1.40` dest 2 (201/207)와 Desktop 441을 갈라 적음. |
| 6 | §3 행 | 186 한정을 적지 않음. 184/187–189/194/207/216만. | 186 dest 추가. |
| 7 | §5 행 | 52px CTA height `246/442` — 442는 표 다음 빈 줄. 실제 높이는 246/271/443. | 246/271/443. 441을 Desktop 폭으로 병기. |
| 8 | §7 Do 행 | `62–68` — Do 여덟 줄의 마지막(off-white `#f8f8f9`)이 69. | **62–69**. |
| 9 | §8 행 | `435–447`에 collapsing·외부/실내 tiles를 넣음. `외부/실내` DESIGN **2**(222/452). 447 안에 없음. 52px / ~36px는 443. | **435–452**. 437–441 브레이크포인트 · 443 타깃 · 445–450 collapsing · 452 외부/실내. |
| 10 | Sibling 절 | `~36px` dest `346/442` — 442는 빈 줄. | **346/443**. |
| 11 | §11 행 | narrative-not-token `provenance.md` 188 — inventory 삽입 후 Official-history 행이 **189**. | 189. |
| 12 | §12 · Deviations · F1 · F2 · SHA | B2a 30=30, inventory 152–181. 본문·원장 31. B3를 165와 534에 같이 "full text"로 읽힐 수 있게 적음 — 165는 다섯 종류+게이트+부분확인 배제, 534는 다섯 종류+게이트만. | inventory **152–182 (31)**. F1 31줄(186 추가, :9 접기). F2 `B2a 31=31`, 165를 전문·534를 부분으로 나눔 (E2c). worker-close SHA `5224d006…` 유지, auditor `65e31c5e95d7604e093e4e84a76c45afbe8d2f5216e22e44fc1a2e19566d3d45`. |

Destination SHA `5224d006…` → `65e31c5e95d7604e093e4e84a76c45afbe8d2f5216e22e44fc1a2e19566d3d45` (한정 신설·확장 후). 줄 수 DESIGN 537 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 DS 없음, v12 전제 주석).
- Elevation / Shape / Overlay Search / Nav-vs-nav-link의 "not merged" · "this §4 record is not the YAML nav-link row" · "16px corner is `tokens.rounded.lg`" — A1 값 보존, 브랜드 해석 아님.
- Text hierarchy "uses stay attached to the rows the source wrote" — 같은 A1.
- Official product-use "do not publish a universal current typography token" — 같은 칸에 완전형 있음.
- B3 준수 주장 — `DESIGN.md` 165가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 부분확인 배제를 전문으로 담음 (E2c 유지, 534는 축소).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/heydealer/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 헤이딜러, PRND, 피알앤디컴퍼니, 2015, 2016, 헤이딜러 방지법, 바로 구매예약, 인증 리포트, 내차사기, 내차팔기, YAML use/font 바이트.
- **관측 기술** — 라이브 hex·치수·`spoqaHanSansNeo`·`Primitive type`·unitless `1.38`/`1.40`/`1.44`/`1.47`/`1.50`·`full: 9999`·`box-shadow: none`.
- **편집적 해석·인과 판단** — 세 페이지를 계약 표면으로 읽기, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, 증거 class 해상, kind/applicability, 보이스 읽기.

세 번째 부류 중 30곳은 착수 시 인접 완전형이 있었고, Official distributed asset 1곳은 한정이 없어 그 자리에 붙였고, Scope 계약-범위는 기존 한정이 이름을 안 붙여 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 31 | 0 | 2 |
| `not Heydealer-authored` | 31 | 1 | 2 |
| `separately published UI specification` | 31 | 1 | 2 |
| inventory 데이터 행 | — | 31 | — |
| `Kind: non-interactive` | 2 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 1 |
| `Token-set use:` | 7 | 0 | 1 |
| `full: 9999` | 5 | 4 | 2 |
| `box-shadow: none` | 2 | 1 | 2 |
| `1.40` | 3 | 1 | 2 |
| `loading \| applicable` | 1 | 0 | 1 |
| `error \| applicable` | 2 | 0 | 1 |
| `success \| applicable` | 1 | 0 | 1 |
| `loading \| not-applicable` | 4 | 0 | 1 |
| `김민재` / `이서연` / `박준호` | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| `38px` / `외부 17` / `모든 차 1년 무료 보증` | 0 / 0 / 0 | 2 / 2 / 2 | 2 / 3 / 2 |
| B3 다섯 종류+게이트+부분확인 배제 (`DESIGN.md` 165) | 1 | 0 | 1 |

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 26 / candidates 175 (14.9%). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(`헤이딜러` DESIGN 10 · `바로 구매예약` 8 · `인증 리포트` 7 · `내차사기` 10 · `내차팔기` 12 · `폐차 견적받기` 5 · `중고차 숨은 이력` 5 · `모든 차량 1년 무료 보증` 5 · `단순 변심도 무료 환불 가능` 4 · `헤이딜러 방지법` 2 · `피알앤디컴퍼니` 2 · `2.0 가솔린` 2 · YAML `use` 7종 dest 각 1): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. 고치지 않음.
- **B1.** sibling 전용 `38px` / `외부 17` / `모든 차 1년 무료 보증` / `4px 4px 0px 0px` / `dealer's eye` / `apple-touch-icon`: DESIGN 0 / provenance mention. `48px` DESIGN 1은 원본 §5 spacing scale(`4px, 8px, 12px, 16px, 24px, 48px`)이지 sibling reassurance height가 아님. 본문에 sibling 구조 분류("h3다", "섹션 표제다")를 사실로 넣은 문장 없음. `h3`/`H3`/`playwright`/`getComputedStyle` DESIGN 0.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission ledger `:138`)은 인원·필드 종류만. 식별자(`김민재` / `이서연` / `박준호` / `서울` / `경기` / `부산`) 세 파일 0. Primary tasks는 표면 라벨(`바로 구매예약` / `인증 리포트` / `내차팔기` / `내차사기` / `폐차 견적받기` / `중고차 숨은 이력`). §13 전기·동기(`first car before an upgrade` / `Distrusts walking into a dealership` / `Buying a certified used car for the family` / `Comparison-shops trims`) DESIGN 0.
- **E2d.** 로그 "Measured DESIGN.md 0 for those sibling-only strings"는 DESIGN만 분모로 하고 DESIGN 실측 0(로그 mention은 use가 아님). F1 발명 도메인 dest 0도 DESIGN 분모. "세 파일 어디에도 없다"면서 그 행이 항목을 나열하는 단언은 없음. 곡선 세 값은 `DESIGN.md` 157에 생략으로 이름이 있고 「토큰으로 승격하지 않음」으로 닫혀 있다.

AUDIT_DONE fixes=12

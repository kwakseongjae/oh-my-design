# Mercury 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mercury/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mercury/DESIGN.md`
검증 sibling: `web/references/mercury/.verification.md` — `find`로 경로 직접 확인. 파일 **존재**. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. HTML comment가 “Mercury does not publish a formal public spec”이라고 적고, `shadcn.io/design/mercury`는 제3자 token export다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Mercury-authored or a separately published UI specification`을 요구한다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 도메인별 명사(`motion specification` `:201`, `voice specification` `:742`, `layout specification` `:701`)는 v12 완전형이다.

착수 실측: 본문 완전형 **23** / 원장 derived 절 **없음**(ferrari). 좁은 쪽 FAIL. Scope `:11` 두 레지스터 비프록시, `:17` 창립 사실을 narrative-not-tokens로 읽는 것, Spacing `:141` YAML/본문 비병합, Shape `:154` 9999/40px 비병합, Elevation `:174` YAML 3키/본문 5단/toast-local 비병합, Font evidence 분류, Family fallback≠brand face, Type roles keep-both, Layout `:737` not-complete viewport는 세 번째 부류인데 인접 완전형이 없었다. `:13`은 세 출처만 이름하고 class-split kept를 빠뜨렸다. `:96`은 공유 hex 역할 비병합만 이름하고 `#ffffff` 다역할 분리를 빠뜨렸다. `:276`은 표 성격화만 이름하고 Focus≠focus-visible / YAML·body keep-both / not-complete를 빠뜨렸다.

원장 Freshness/Proof와 로그 Footer/A5a는 sibling이 **없다**고 적었으나 `web/references/mercury/.verification.md`는 존재한다.

문장 분류: 브랜드 발행 사실(사명 라인·CTA·YAML 값·§표 수치·창립 연도) / 관측 기술(hex·duration·radius 전사) / 편집적 해석·인과 판단(비병합, keep-both, 분위기, 증거 종류 정렬, 페르소나 삭제 읽기). 세 번째 부류만 수정 대상.

## 수정 목록 (26건)

### B2a — 인접 한정 (본문 12건, 발생 수 +9)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | 두 레지스터를 이 계약의 coverage로 두고 마케팅 캔버스 값을 대시보드의 대리로 쓰지 않는 것은 세 번째 부류. 인접 완전형 없음. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:13` — Scope 세 출처 | HTML-comment class split(verified core vs reconstruction, not live-computed)은 세 번째 부류. 기존 한정은 세 출처 비병합만. | 기존 완전형에 class split을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:17` — Scope narrative | 창립·스택 사실을 narrative context, not interface tokens로 읽는 것은 세 번째 부류. `:13`과 `:19` 사이라 인접 완전형이 이 판단을 이름하지 않음. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:96` — Semantic color | `#ffffff`가 on-primary / `card.bg` / `dialog.bg` / Product Card / Centered Modal / toggle thumb / Top Nav link hover에 서로 다른 역할로 붙는 것은 세 번째 부류. 기존 한정은 surface/Ink 등 네 쌍과 button-primary `fg`만. | 기존 완전형에 `#ffffff` 역할 분리를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:141` — Spacing unmerged | YAML `lg` 18 / `xxl` 28 ≠ 본문 common-value, 본문 32/64/96 ≠ YAML scale은 세 번째 부류. Spacing 절에 한정 없음. | 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:154` — Shape | YAML `email-pill.radius` 9999 ≠ 본문 40px pill, `rounded.full` 9999 ≠ 그 40px, 4px workhorse ≠ 미열거 컨트롤 전칭은 세 번째 부류. | 완전형 신설. 발생 수 +1. |
| 7 | `DESIGN.md:174` — Elevation unmerge | YAML shadow 3키 / 본문 5단 / toast-local `0px 8px 24px rgba(0,0,0,0.3)` 비병합은 세 번째 부류. `:176`은 shadow-philosophy만. | 완전형 신설. 발생 수 +1. |
| 8 | `DESIGN.md:218` — Font evidence | 이름난 페이스를 evidence-class 행에 정렬하는 것은 세 번째 부류. 절에 한정 없음. | 완전형 신설. 발생 수 +1. |
| 9 | `DESIGN.md:235` — Family | fallback instruction ≠ brand-face substitution, Helvetica Neue를 Arcadia로 제시하지 않기는 세 번째 부류. | 완전형 신설. 발생 수 +1. |
| 10 | `DESIGN.md:241` — Type roles | YAML unitless `lineHeight` ≠ 고정 px, 본문 `1.1`/`1.3`/`1.4`/`1.5`는 치환이 아님, YAML `0.42` / 본문 `+0.42px` / Display Medium `+0.2px` keep-both는 세 번째 부류. | 완전형 신설. 발생 수 +1. |
| 11 | `DESIGN.md:276` — Capture record | generic Focus ≠ `focus-visible`, applicability는 컨트롤 의미, YAML 키와 본문 §4 dark-pair/extra field 비병합, kind/map 생략, not-complete는 세 번째 부류. 기존 한정은 표 성격화만. | 기존 완전형에 그 판단들을 접어 넣음. 발생 수 +0. |
| 12 | `DESIGN.md:737` — Layout viewport | ~40px / ~32px / ≥44px / 65px / 36px를 미열거 컨트롤의 완전한 cross-viewport 사양이 아니라고 읽는 것은 세 번째 부류. `:701`은 whitespace philosophy만이고 표 뒤라 인접하지 않다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **32**, `not Mercury-authored` **32**. `separately published` **33** (`:701`이 layout specification과 UI specification을 한 문장에 둠). `provenance.md`의 inventory 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 11, 13, 17, 19, 29, 38, 42, 54, 67, 80, 96, 125, 126, 133, 141, 154, 174, 176, 178, 182, 201, 218, 235, 237, 241, 257, 267, 276, 297, 701, 737, 742.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(ferrari: 원장 절 없음 / fastcampus: 본문보다 좁음). 본문 한정수와 1:1이어야 한다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 13 | Derived editorial inventory | 절 자체가 없음. 본문 완전형 23. | 헤더 “32 complete / 32 data rows” + 데이터 행 **32** at `:149–180`. |
| 14 | Freshness `:40` / Proof | “No `.verification.md` sibling exists” — `find`로 파일 존재. | sibling 실재 + Sibling 절(sibling-only 샘플은 원장, portable fact 아님). 「세 파일 어디에도 없다」고 단언하지 않음. |
| 15 | Omission ledger | 필드 종류가 이름·나이·도시만. | 동기·소속 분류를 필드 종류로 추가. 식별자는 적지 않음(D2a). |

헤더 / 데이터 행 **없음 → 32** at `:149–180` (E1 1:1). `#ffffff` 역할 분리는 inventory 행 11이 본문 `:96`과 같이 이름함.

### E2 / E2a / E2c — 로그 목적지 (11건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 준수 주장은 본문 실재 시에만. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 16 | YAML identity 행 | homepage / `#5266eb` dest를 줄 수 없이 “dual”만. 실측 `https://mercury.com` DESIGN **2** / P **6**. `#5266eb` DESIGN **23** / P **5**. `s2/favicons` DESIGN **1** / P **2**. | dest 수를 파일별로 적음. |
| 17 | YAML `tokens.colors` 행 | `#ffffff` 다역할 비병합이 로그 사유에 없음. 본문 `:96`이 이제 이름함. | 사유에 그 분리를 추가. |
| 18 | Footer 행 | “no `.verification.md`” / “Absence of a sibling sidecar”. 파일 존재. | 분리 → provenance Freshness / Sibling / Proof. DESIGN dest **0**은 DESIGN.md를 분모로 측정(로그 mention ≠ use). |
| 19 | A5a 머리 | “No `.verification.md` sibling.” | sibling 실재. sibling copy needle **0**. `compared: 0` / `candidates: 176`. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아님. A5a 표는 본문 한정 편집 후 재실측(14/14, 계수 불변). |
| 20 | E2a `https://mercury.com` | P dest를 Identity/Surfaces/Tier 1만. 실측 P **6** at `:13`/`:29`/`:40`/`:50`/`:77`/`:84`. | P dest **6**. DESIGN dest **2** at `:9`/`:13`. |
| 21 | E2a `#5266eb` | P dest를 Identity + HTML-comment만. 실측 P **5** at `:14`/`:29`/`:71`/`:90`/`:103`. | P dest **5**. DESIGN dest **23**. |
| 22 | §12 행 | 완전형 1건만 인용. 본문 32 / 원장 절 없음. | DESIGN dest **32** · inventory `:149–180` (32). Principles 예문 `:54` dest **1** 유지. |
| 23 | §13 행 | “Grep of given names and cities = 0” — 식별자 재열거는 아니나 dest-0 측정을 이름·도시로 분모 삼음. | 무식별 필드 종류만. 이름·나이·도시를 적지 않음. |
| 24 | §15 행 | B3 전문 dest를 “DESIGN.md”만. 실측 dest **1** at `:210`. | `:210` dest **1**. 준수 주장 유지(E2c). |
| 25 | F1 | 기존 23위치 목록. | **32** 위치를 실측 줄로 갱신. |
| 26 | Unique-expression 페르소나 줄 | “given names and cities: 0 in DESIGN.md, 0 in provenance.md” — 부재 단언이 분모를 로그에 두지 않으나 식별 종류를 dest-0로 되풀이. | 무식별 삭제만. 재열거하지 않음. |

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 23개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. shadcn export를 limiter에 1차 사양처럼 넣지 않은 것도 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md:210` dest **1**. Principles 형태 `:54` dest **1**. `Type: button` dest **5**.
- E2d: `prose-derived` 부재 단언은 분모가 portable body. DESIGN dest **0** / P dest **3**. 「세 파일 어디에도 없다」고 적으며 그 문자열을 같은 행에 나열한 행은 없음.
- D2a 처분 행은 절·인원·필드 종류만. 이름·나이·도시·전기 문구를 열거하지 않는다.
- T2 관례: `ease-exit` / `ease-standard` *이름*은 본문, 곡선 값은 provenance. 값 소실로 되살리지 않음.
- 원본에 없는 규칙을 합성하지 않음.

## 범위 밖 관찰

- **A5a.** 로그 `compared` **0** / `candidates` **176**. 이관본 130개 전수 평균 4.4%와 같고, `verdict: PASS`는 대조한 바늘 중 손실 없음이다. 손 스윕 발행 카피 14종 DESIGN dest: `Open Account` **7**, `Apply now` **3**, `Get started` **1**, `Learn more` **4**, `Banking for startups` **1**, `Transfer sent` **1**, `Account approved` **1**, `No transactions match these filters` **2**, `Oops` **1**, `Something went wrong` **1**, `New` **3**, `Active` **9**, `Failed` **2**, `Declined` **2**. 라틴 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값: `#000000` SIB **3** / SRC **0** / DESIGN **0**; `49.3472` SIB **1** / DESIGN **0**; `arcadiaDisplay` SIB **1** / DESIGN **0**; `border-radius 32px` SIB **1** / DESIGN **0**; `playwright` SIB **1** / DESIGN **0**. 본문에 사실로 승격되지 않음. `portal H2` 류 구조 분류 sibling **0**. `32px` / `16px` DESIGN 출현은 원본 shadow·spacing·padding과 동형이지 sibling 버튼 radius/font가 아님.
- **D2a.** 식별자 DESIGN/P/L dest **0**. 동기(`seed-stage` / `check runway` / `burn at a glance` / `Will evangelize` / `pre-seed` 등) DESIGN dest **0**. 소속 분류(`Founder and CEO` / `Operations lead` / `Solo technical founder` / `Solutions Partner`) DESIGN dest **0**. `branch visits` DESIGN dest **1** at Scope §11 원문(원본 §11에도 있음) — 페르소나 동기 승격이 아님. Audience는 그룹 레벨 founders and operators만.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. Sibling-only 목록은 “sibling에 있고 visible source body에는 없다 / portable fact가 아니다”이며 이 원장에 보관한다.
- **A1 키 경로.** YAML `tokens.components` 12레코드의 type/bg/fg/radius/padding/font/use/`active`(tab)가 각 대응 블록에 **행으로** 있다. icook형 소실 없음. 복원 없음. YAML `badge-accent`에 bg 없음 — 본문 body bg는 별도 기록. `email-pill.radius` 9999와 본문 40px는 같은 블록에 병기.
- **열 구조 / 귀속 (웨이브 40).** 원본 색 역할명·YAML 키명이 본문에 남아 있다. CSS custom-property 열은 원본에 없다. 충돌 처리는 문서 전체 keep-both(radius 9999/40px, spacing YAML/본문, shadow 3/5/toast-local, type roles/Display Medium, `card.bg` `#ffffff` vs `#ffffff`/`#ededf3`).
- **D1.** Content `:760` “No locale-specific product behavior beyond this English reconstruction is established. None is invented.” — 원본에 locale 절이 없다. Core v2 unknowns 보일러플레이트에 가깝다. 고치지 않음.
- **`#ffffff` 역할 분리 (웨이브 39 krafton).** on-primary 텍스트 / card·dialog 배경 / toggle thumb / Top Nav link hover. 정상 귀속 분리. 원장 inventory 행 11과 본문 `:96`에 맞춰 두었음(E1). 값을 고치지 않음.

AUDIT_DONE fixes=26

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/mercury/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정. provenance 본문 무변경.

### 결함 1 — A1 / 항목 11 — Display Hero §3 Notes를 버리고 YAML `use`만 골랐다

원본 YAML `tokens.typography.display-hero.use` = `Marketing hero, Arcadia Display` (`:36`). 원본 §3 표 Display Hero Notes = `Marketing hero headlines` (`:137`). 같은 역할의 이중 기록인데 산출 Type roles Notes는 YAML use만 남겼다. 같은 표 Body Large는 이미 `YAML use: \`Lead paragraphs\`. Body: lead paragraphs, descriptions`로 병기했다.

Type roles Display Hero Notes를 Body Large와 같은 형식으로 병기: `YAML use: \`Marketing hero, Arcadia Display\`. Body: Marketing hero headlines`. 원본 Notes 대소문자 그대로(고유 문자열 `Marketing hero headlines`). 융합(`Marketing hero headlines, Arcadia Display`) 없음. 한정 신설 없음. 원장 행 수 32 불변.

`grep -oF -e` 실측 (파일별; 개정 후):

| 문자열 | SRC | SIB | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `Marketing hero headlines` | 1 | 0 | **1** | 0 | 4 |
| `Marketing hero, Arcadia Display` | 1 | 0 | **1** | 1 | 4 |

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML `tokens.typography` | `Marketing hero headlines` DESIGN / P | (없음) | **1** / **0** |
| YAML `tokens.typography` | `Marketing hero, Arcadia Display` DESIGN / P | (없음) | **1** / **1** |
| §3 Typography Rules | `Marketing hero headlines` DESIGN | (없음) | **1** |
| §3 Typography Rules | `Marketing hero, Arcadia Display` DESIGN | (없음) | **1** |
| A5a YAML use-strings | `Marketing hero, Arcadia Display` DESIGN / P | (없음) | **1** / **1** |
| A5a YAML use-strings | `Marketing hero headlines` DESIGN / P | (없음) | **1** / **0** |
| uniqueness | `Marketing hero headlines` DESIGN | 104/104에 YAML use만 포함 | DESIGN dest **1** |

`node scripts/check-limiter-ledger.mjs mercury` → 본문 **32** / 원장 **32** (149–180) 1:1 OK.
`node test-v2/tools/migrate-reference.mjs --brand mercury --gate-only` → PASS.

FIX_DONE mercury fixed=1 logdest=7

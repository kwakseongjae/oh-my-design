# octopusenergy F3 audit (B2a · E2)

Auditor did not read a worker report. Inputs: `docs/design-md-weight/migrated/octopusenergy/{DESIGN.md, provenance.md, migration-log.md}`, source `web/references/octopusenergy/DESIGN.md`, sibling `web/references/octopusenergy/.verification.md` (dotfile — path written out; `find` confirmed). Counts: `grep -oF -- <pat> <file> | wc -l` per file. `grep -c` was not used. `no matches found` would have been unmeasured; files existed first.

Not touched: token values, component tables, state applicability, document structure. After body/ledger edits the dest table was remeasured.

발행 1차 UI 사양 없음(원본 YAML에 DS 필드 없음). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Octopus Energy-authored or a separately published UI specification`을 요구한다. 기존 30건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 30 / 원장 30. 숫자는 맞았으나 두 읽기가 한정이 없거나 인접 한정이 그 읽기를 이름하지 않았고, 로그 dest 6개가 grep과 달랐다.

## 문장 분류 (portable DESIGN.md)

브랜드 발행 사실(타이틀·라이브 카피·YAML 값·§4 필드)과 관측(computed hex·치수·셀렉터)은 한정 없이 두었다. 세 번째 부류(편집 해석·인과·유지 결정) 중 인접 완전형이 없거나 한정이 그 읽기를 이름하지 않은 것만 고쳤다. 기존 30곳의 완전형은 유지.

한정 줄 (수정 후 32): 9, 11, 13, 19, 29, 33, 46, 56, 76, 93, 127, 140, 150, 154, 174, 182, 199, 203, 222, 230, 241, 245, 260, **439**, **456**, 526, 528, 549, 554, 572, 596, 598.

`grep -oF -- 'derived editorial implementation inference' DESIGN.md | wc -l` = **32**. `grep -oF -- 'not Octopus Energy-authored or a separately published UI specification' DESIGN.md | wc -l` = **32**. 그중 1건은 복수 `inferences`(State non-attachment `:260`). provenance 원장 데이터 행 **32**. 1:1. provenance/migration-log의 같은 문자열은 mention이지 use가 아니다.

## 수정 목록

### B2a — 인접 한정

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:230` — Assets | `:227`의 "fills hero space that other brands give to photography — character, not whitespace"는 세 번째 부류. 기존 `:230` 한정은 favicon pointer와 Constantine-as-illustration만 이름했고 이 읽기를 빠뜨렸다. Layout `:526`은 다른 절이라 인접하지 않다. | 기존 완전형에 character-not-whitespace photography-replacement 읽기를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:439` — Product Feature Card | "recorded only in the source's agent-prompt example and kept here (A3)"는 값 유지 결정(세 번째 부류). `:241` How applicability는 kind/applicability만 이름하고 이 A3 유지를 이름하지 않으며, 200줄 떨어져 인접하지 않다. | 같은 불릿에 완전형 신설. 발생 수 +1. 토큰 값은 반복하지 않음. |
| 3 | `DESIGN.md:456` — Trust Indicator Pill | "is kept on this component rather than dropped"는 같은 A3 유지 결정. `:439`와 다른 컴포넌트 블록이라 한 문장으로 묶지 않음. | 같은 문단에 완전형 신설. 발생 수 +1. `4px 12px` 바이트는 원 문장에만 남김(DESIGN dest 2 유지). |

수정 후 본문 완전형 **32**.

### E1 — provenance derived 범위

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 같은 hex의 서로 다른 역할이 본문에 있고 원장에 없으면 그것도 E1(krafton).

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | 헤더 / 행 수 | 30 complete / 30 data rows. | **32** / **32**. |
| 5 | Assets 행 | favicon pointer + Constantine-as-illustration만. 본문 `:230`이 이제 character-not-whitespace도 이름한다. | 그 읽기를 행에 추가. |
| 6 | Product Feature Card A3 keep 행 | 없음. 본문 `:439` 신설. | 행 신설. |
| 7 | Trust Indicator Pill A3 keep 행 | 없음. 본문 `:456` 신설. | 행 신설. |
| 8 | Claim ledger 같은-hex 문단 `:125` | `primary`/`primary-border`와 `canvas`/`on-primary`만. 본문은 `#ffffff`를 히어로 필드 bg·금지 페이지 캔버스·금지 본문색으로, `#100030`를 카드 fg로도, `#f0ffff`·`#180048`를 여러 컴포넌트 역할로 쓴다. | 그 분리를 원장에 실측대로 추가. 추가 B2a 행은 아님(본문 한정이 이미 Application/Avoid/Semantic에 있음). |

### E2 / E2a / E2c — 로그 목적지

본문이 아니라 로그만 고침. 각 숫자는 `grep -oF --` 파일별. 2차 목적지 문자열은 DESIGN dest를 다시 셌다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | §3 행 `pigment cells` | 로그 DESIGN **3**. 실측 DESIGN **2** (`:186`, `:195`). | dest **2**. |
| 10 | §4 행 `#hero-quote-form-field-postcode` | 로그 DESIGN **2**. 실측 DESIGN **3** (`:21`, `:363`, `:386`). | dest **3**. |
| 11 | §4 행 button-primary-lg Height `56px` | 로그 DESIGN **4**. 실측 DESIGN **3** (`:295`, `:539`, `:549`). | dest **3**. |
| 12 | §14 행 `Please enter a valid UK postcode` | 로그 DESIGN **3**. 실측 DESIGN **4** (`:251`, `:379`, `:427`, `:591`). | dest **4**. |
| 13 | YAML typography 행 `Nav links, captions — foreground white` | 로그 DESIGN **1**. 실측 DESIGN **2** (Type roles 머리 `:203` + 표 행 `:211`). | dest **2**. |
| 14 | YAML typography 행 `Button label — Chromatophore medium` | 로그 DESIGN **1**. 실측 DESIGN **2** (`:203` + 표 행 `:212`). | dest **2**. |
| 15 | 규칙 대조 B2 / B2a 행 | DESIGN 30 · inventory 30행. | **32** · inventory **32행**. |
| 16 | F1 문단 | Assets를 favicon pointer만, A3 유지를 안 적음. 본문 한정이 늘어난 뒤에도 그 주장이 남으면 E2c. | character-not-whitespace와 Card/Pill A3 유지를 F1이 이름하게 고침. |

A5a 2차 목적지 `No thanks` / `Read more`: DESIGN dest **0** / provenance dest **1** — 로그와 일치. fitpet형 허위 2차 목적지 아님. mention(migration-log 3회)은 use가 아니다.

본문 편집이 `4px 12px`·hex·컴포넌트 필드 출현 수를 바꾸지 않았다. `4px 12px` DESIGN 2 · provenance 2 재실측.

## 범위 밖 관찰

- **A1 키 경로.** YAML `tokens.components` 11레코드의 type/bg/fg/radius/padding/font/border/height/use/active 각 필드가 대응 블록에 **행으로** 있다. 값 grep만으로 다른 블록 hex를 보존으로 읽지 않았다. 복원 없음. `button-ghost` YAML에 border 없음 — 본문 `Border: 2px solid transparent`는 §4 표기(추가이지 YAML 손실이 아님). `nav-link` YAML에 bg/radius/padding 없음 — 그 블록에도 없음.
- **B1 sibling 승격.** sibling-only 문자열 DESIGN dest 0: `No thanks`, `Read more`, `line-height: 24px`, `favicon.ico`, `1879`, `SimpleIcons`, `portal H2`. `46px`는 본문에 있으나 원본 §8 nav-button 일(That's cool height가 아님). 요금 페이지 large CTA sibling 전경 `#100030`으로 본문 `#f0ffff`를 덮어쓰지 않음. 구조 분류(`portal H2` 류) 승격 없음.
- **D2a.** 이름·도시·동기·소속 분류 DESIGN 0 · provenance 0. 삭제 행은 무식별(`three named fictional archetypes with ages and cities`). Audience는 원본 §13 머리글 그룹만. Primary tasks는 표면/컨트롤만 — 페르소나 동기를 과업으로 바꾸지 않음. 본문 `28`은 `28px` / favicon `sz=128`이지 나이가 아니다. 원형 라벨을 처분 행에서 지울 대상이 아님(원본 머리글 그룹은 발행 세그먼트 라벨로 Audience에 생존).
- **E2d.** 「세 파일 어디에도 없다」고 적으면서 그 문자열을 같은 행에 재수록한 단언 없음. Omission ledger는 곡선 세 값을 생략 대상으로 **지목**(T2 인용)하고 승격하지 않음. 페르소나 행은 식별자를 열거하지 않음.
- **A5a.** 게이트 `copy-loss`는 이 브랜드에서 안 돌림. 손 대조 바늘 23/23 생존(본문 21 + sibling-only provenance 2). `verdict: PASS`를 카피 보존의 증거로 쓰지 않음. 발행 카피 `Solar & batteries` / `Electric vehicles`는 바늘 목록 밖이나 DESIGN dest 3 each — 라틴 카피 손실로 보이는 것 없음. 설명문·use 라벨은 손 대조 대상이 아님.
- **Wave 39/40.** 원본 §15 곡선 세 값은 생략 문장 안에서 한 번씩 인용되고 역할만 남음(T2). 토큰명 열(`tokens.colors.*` / `tokens.spacing.*` / `tokens.rounded.*`)은 값 옆에 남아 있다. 충돌 처리: sibling tariffs CTA fg vs 원본 `#f0ffff`는 원본을 유지하고 sibling을 provenance에만 둠 — 이 문서에서 그 한 충돌에 일관. `#ffffff` canvas/text/hero-bg 분리는 이제 원장 `:125`에 있다(위 8).

AUDIT_DONE fixes=16

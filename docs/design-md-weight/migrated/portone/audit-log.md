# PortOne 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/portone/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/portone/DESIGN.md`
검증 sibling: `web/references/portone/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-03

발행 1차 UI 사양 없음(getdesign NOT FOUND; refero not listed). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not PortOne-authored or a separately published UI specification`을 요구한다. 기존 31건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 31 / 원장 31. 숫자는 맞았으나 양쪽이 함께 좁았다. Spacing `:115` YAML unitless ↔ §5 px keep-both, Content `:499` 영어 gloss 병기는 세 번째 부류인데 인접 완전형이 없었다. Capture `:249`는 한정이 위에 있는 적용 노트를 "following"으로 가리켰다. 원장 Byte-form은 `#ffffff`를 canvas/on-primary만 적고 White Feature Card·Navigation·Docs Search 배경 분리를 빼 좁았다. 로그는 `tokens.rounded.full: 999` dest 2, glow dest 2 at 147, Live computed 193, Family 201, Verified 40 등 실측과 다른 목적지를 적었다.

## 수정 목록 (15건)

### B2a — 인접 한정 (본문 3건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:115` — Spacing keep-both | YAML unitless steps와 §5 px 스케일을 둘 다 남긴다는 판단은 세 번째 부류. `:127`은 공유 숫자를 한 토큰으로 읽지 않기라 인접 완전형이 이 판단을 이름하지 않음. | 같은 문단에 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:499` — 영어 gloss 병기 | 발행 한국어 옆에 영어 gloss를 두고 대체하지 않기는 세 번째 부류. `:493`은 표본의 괄호 라벨(hero H1 / section H2 / page title meta)만 이름함. | 같은 문단에 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:249` — Capture / applicability | 한정이 적용 노트·kind 판정 **위**를 덮는데 주어가 "The following applicability note". 인접 지시가 반대. | `The applicability note above`로 고침. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 33, `not PortOne-authored` 33, `separately published UI specification` 33. 완전형 줄 33(단수 25 + 복수 `inferences` 8). `provenance.md`의 같은 절 인용 1 / `migration-log.md` mention 3은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 68, 84, 111, 115, 127, 141, 152, 156, 164, 172, 181, 189, 205, 209, 224, 236, 249, 253, 463, 465, 493, 499, 503, 515, 551.

### E1 — provenance derived 범위 (2건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 같은 hex의 서로 다른 역할 분리가 원장에 없으면 E1이다(krafton).

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Derived editorial inventory | 31 complete / 31 data rows. 본문 `:115`·`:499` 신설을 행이 없음. | 행 신설 2. **33** / **33** (P177–209). |
| 5 | Byte-form notes 같은 hex 귀속 | `#ffffff`를 canvas / on-primary만 적음. 본문은 같은 hex를 White Feature Card 배경, Navigation 배경, Docs Search Field 배경에도 붙인다. `#fc6b2d`·`#363a44`·`#f9fafb`·`#111827`의 토큰/컴포넌트 분기도 원장에 없었다. | 그 분기를 같은 불릿에 실측대로 추가. 값·표는 건드리지 않음. |

### E2 / E2a — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. mention(로그가 인용)은 use가 아니다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | YAML identity 행 | homepage DESIGN dest ≥5 (5줄만 나열). 실측 dest **11** at 9(×2)/21/22/86/198/282/308/357/379/392. docs dest ≥4, 실측 dest **5** (198 누락). `#fc6b2d` P dest 13 → 본문 수정 후 **14**. `logo.slug` `portone-io` dest 2 (Assets) — dest 2 중 1은 Scope GitHub URL 부분문자열, Assets `logo.slug`는 dest **1** at 233. identity table 9–23 (23은 빈 줄). | dest 11 / dest 5 / P dest 14. `portone-io` dest 2 at 9+233, `logo.slug` dest 1 at 233. 표 9–22. |
| 7 | YAML `omd` / freshness 행 | freshness table 33–38, Verified paragraph 40, token note P27. 실측 table 30–35, Verified **37**, token note **26**. | 그 줄 번호로 수정. `live-extract` dest 1/3 at 9 / 20/156/161, `components_harvested` D dest 0 / P dest 2 at 22/168은 맞았음. |
| 8 | `tokens.colors` 행 | canvas / on-primary를 `DESIGN.md` 84/89. 89는 Charcoal. 실측 84/91. | 84/91. |
| 9 | family / §3 행 | Family 201–203 (201은 빈 줄), Live computed 193 (193은 Official product-use), `tokens.typography.family.sans` dest 1 at 201. 실측 Family 202–203, Live computed **194**, dest 1 at **202**. | 202–203 / 194 / 202. |
| 10 | spacing / rounded / shadow 행 | `tokens.rounded.full: 999` dest 2 at 139. 139는 표 칸 `tokens.rounded.full`이지 `: 999` 연결 문자열이 아님. 실측 dest **1** at 141. glow dest 2 at 147/152 — 147은 Flat (Level 0). 실측 150/152. | dest 1 at 141; `tokens.rounded.full` dest 2 at 139/141; glow 150/152. keep-both 한정 115를 목적지에 추가. |
| 11 | components / §4 행 | `DESIGN.md` 267–442. 267은 State treatments 뒤 문장, Primary CTA는 **269**. | 269–442. |
| 12 | Footer **Verified** / Tier 행 | freshness 33–38, Verified 40, Tier 1 56–61, Tier 2 64–67, Conflicts 42. 실측 30–35 / **37** / **52–55** / **61–64** / **39**. | 그 줄 번호로 수정. |
| 13 | §9 삭제 행 | 점검 원장 `provenance.md` 148. 148은 Claim ledger 표제. 실측 §9 deletion check **146**. | 146. |
| 14 | §10 / §12 / deviations / F1 | inventory 31 rows, `inference` DESIGN = 31, wc-w 7,397. 본문 한정 +2 뒤 실측 33 / 33 / **7,465**. §10이 gloss 한정 499를 목적지로 안 적음. | 33 = 33, inventory 177–209, wc 7,465, gloss dest 499. |
| 15 | SHA | worker-close hash만 있고 감사 후 본문 hash가 없음. | Audit-remeasured DESIGN `198a24fab1fdb90ed5ad4aa669719632a60ff8d38cd48a063a40064fd8d298f6`, provenance `580b082a137d7226641c5a584230e9fa43c9e3ce8f402831727a6f47a577c49b`. |

맞았던 2차 목적지(재실측 후 유지): `포트원` D dest 5; `Pretendard Variable` D dest 25; `live-extract` D dest 1; `4.13px` D dest 0 / P dest 3; nav 라벨 5종 D dest 2 each; `box-shadow: none` D dest 3 (152에 2회 + 380); voice 표본 dest 4 / 2 / 1; `idxno=117887` D dest 0 / P dest 1; `2015` D dest 2 (13에 2회); `loading \| applicable` dest 1 at 416; B3 전문 dest 1 at 172; sibling-only `검색⌘K` / `API & SDK` / `릴리즈 노트` / `포트원 결제 연동 Doc` D dest 0.

## A1 키 경로 (복원 0)

원본 YAML `tokens.components.<id>.<field>` 8레코드를 대응 블록의 **행**으로 대조했다. 값 grep만으로 「어딘가에 있다」를 통과시키지 않음.

| 블록 | YAML 키 | 블록 안 행 |
|---|---|---|
| Primary CTA | type `button`, bg `#fc6b2d`, fg `#ffffff`, radius `999px`, padding `12px 20px`, font `15px / 700`, use `Primary CTA 도입문의 — orange gradient pill` | 있음 |
| Secondary CTA | type `button`, bg `#363a44`, fg `#ffffff`, radius `999px`, padding `12px 20px`, font `12px / 400`, use `Secondary CTA 시작하기 — charcoal gradient pill` | 있음 |
| Navigation | type `tab`, fg `#111827`, radius `64px`, padding `16px`, font `14px / 500`, active `orange #fc6b2d text on active`, use `Top navigation item pill` | 있음. YAML에 `bg` 키 없음 — §4 Background `#ffffff`는 본문 병기. |
| Tinted Surface Card | type `card`, bg `#f9fafb`, fg `#111827`, radius `30px`, padding `20px`, use `Tinted feature card on gray surface` | 있음 |
| White Feature Card | type `card`, bg `#ffffff`, fg `#111827`, radius `20px`, padding `24px`, use `White feature card, hairline-separated` | 있음 |
| Docs Search Field | type `input`, bg `#ffffff`, fg `#334155`, border `1px solid #d1d5db`, radius `6px`, padding `6px 12px`, use `Docs search field` | 있음 |
| Success Pill | type `badge`, bg `#dcfce7`, fg `#374151`, radius `8px`, font `12px / 500`, use `Success status pill` | 있음 |
| Error Pill | type `badge`, bg `#fef2f2`, fg `#df4c4c`, radius `8px`, font `12px / 500`, use `Error / alert pill` | 있음 |

icook형(같은 hex가 다른 블록에만 있고 해당 블록 Text 행이 빠짐) 없음. 토큰 값·표·applicability는 수정하지 않음.

## D2a · E2d (수정 0)

삭제 처분 행: provenance Omission ledger §13, migration-log §13. 이름·나이·도시·전기를 적지 않음. 필드 종류(name, age, city, motivation, affiliation classification)만. 본문에서 식별자·동기·소속 분류 실측: `이준호`/`박지은`/`Sanjay`/`Mehta`/`서울`/`경기`/`Singapore`/`D2C`/`Backend developer`/`Finance operations lead`/`Product manager` — DESIGN 0 / provenance 0 / log 0. Audience의 `Korean e-commerce developers, finance/operations teams, cross-border merchants`와 dual audience는 원본 §13 머리 / §11 문장(원본 ≥1). Primary tasks는 CTA·docs search 표면이지 페르소나 동기가 아님.

부재 단언: `9999` DESIGN dest 0, `measures 1440px` dest 0, cubic-bezier DESIGN dest 0, sibling-only DESIGN dest 0 — 모두 DESIGN을 분모로 적었고, 단언 문장이 「세 파일 어디에도 없다」고 하면서 그 문자열을 사실로 재수록하지 않음. E2d 해당 없음.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 21 / candidates 194 (`compared < candidates`, 이관본 평균 4.4% 계급). `verdict: PASS`는 대조한 바늘 21개에 손실이 없다는 뜻이지 카피 전수 보존이 아니다. 손 스윕 발행 라벨 18 / YAML use 16 / 영어 gloss·내러티브 5 — DESIGN+provenance 미생존 0. latin-copy-audit lost=`and philosophy` (원본 HTML 주석 접속어, 발행 카피 0). 라틴 발행 카피(`Free your payments and financial operations with AI`, `Contact sales`, `Get started`, `One Payment Infrastructure`) DESIGN dest ≥1. 복원·삭제 처분 추가 없음.
- **B1 sibling 전용 분류.** `eyebrow H2` sibling 1 / 원본 0 / 산출 0. `sub-section H3` sibling 1 / 원본 0 / 산출 0. 구조 분류가 본문에 사실로 승격되지 않음. sibling-only 발행 라벨 `검색⌘K` / `API & SDK` / `릴리즈 노트` / `포트원 결제 연동 Doc` DESIGN dest 0, provenance mention.
- **원본 편집 구 생략.** §2 Ink `for warmth and financial-grade trust` 원본 1 / 산출 0. 발행 카피가 아니라 원본의 편집 gloss. A5 바늘 아님. 되돌리지 않음.
- **§15 곡선.** `cubic-bezier(...)` DESIGN dest 0, 역할·use·duration은 남음. T2 관례(값이 `:<n>`에 인용되며 역할만 남는 것 / 무출처 곡선 생략). 되살리지 않음.
- **같은 hex 다른 역할.** `#ffffff` canvas / on-primary / White Feature Card 배경 / Navigation 배경 / Docs Search 배경. 분리는 정상이고, 원장이 좁아서 E1로 원장만 맞춤(#5). 본문 값을 합치지 않음.

AUDIT_DONE fixes=15

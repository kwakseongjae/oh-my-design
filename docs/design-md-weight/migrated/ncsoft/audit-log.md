# ncsoft 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/ncsoft/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/ncsoft/DESIGN.md`
검증 sibling: `web/references/ncsoft/.verification.md` — `find web/references/ncsoft -type f`와 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-09-02

원본 frontmatter에 `ds.name` / `ds.url` / `ds.type` 없음. 발행 1차 UI 사양이 없으므로 B2a 예문 전제(v12)가 성립하고 toss형 닫힘 `not NCSOFT-authored or a separately published UI specification`을 요구한다. 기존 32건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 32 / 원장 32. 숫자는 맞았으나 NC PLAY Dark Tile `:443`, Editorial Article Block `:458`, Avatar `:488`은 Game Card `:428`과 같은 omit-kind 판단인데 인접 완전형이 없었다. 원장도 그 세 자리를 빠뜨렸다 — 좁은 쪽(fastcampus형).

## 수정 목록 (19건)

### B2a — 인접 한정 (본문 3건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:443` — NC PLAY Dark Tile | "No kind and no applicability map … so neither is decided here"는 세 번째 부류. How-to-read `:280`과 Game Card `:428`의 "this card" 닫힘은 이 타일에 인접하지 않다. | 같은 줄에 Treating this tile as having no interactive-kind evidence for a §4.4 map … is a derived editorial implementation inference …; it is not NCSOFT-authored or a separately published UI specification. |
| 2 | `DESIGN.md:458` — Editorial Article Block | 4px = this block's radius (여섯 번째 rounded step이 아님) + omit-kind. Shape `:177`은 280줄 위. | 같은 줄에 Reading the 4px radius as this block's geometry rather than as a sixth rounded step, and treating this block as having no interactive-kind evidence … are derived editorial implementation inferences …; they are not NCSOFT-authored or a separately published UI specification. |
| 3 | `DESIGN.md:488` — Avatar | Dark Tile과 동형 omit-kind. 인접 닫힘 없음. | 같은 줄에 Treating this mark as having no interactive-kind evidence for a §4.4 map … is a derived editorial implementation inference …; it is not NCSOFT-authored or a separately published UI specification. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not NCSOFT-authored` 35, `separately published UI specification` 37. 여분 2는 Scope ¶1의 live-extract 읽기(`not a separately published UI specification document` + `rather than as a separately published UI specification`)이지 불완전 닫힘이 아니다. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 15, 21, 31, 35, 49, 60, 74, 91, 154, 177, 188, 192, 202, 212, 220, 237, 241, 259, 269, 280, 323, 354, 378, 428, 443, 458, 475, 488, 505, 509, 539, 593.

같은 줄에 붙였으므로 `DESIGN.md` `wc -l` **598** 불변.

### E1 — provenance derived 범위 (1건)

좁은 쪽 FAIL. 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Derived editorial inventory | 32 데이터 행. Dark Tile / Editorial Article Block / Avatar 없음. Proof notes도 32 = 32. | 문서 순서대로 3행 삽입 (197 Dark Tile, 198 Editorial Article Block, 200 Avatar). Proof notes `:215`를 35 / 35로. |

헤더 / 데이터 행 **35 = 35** (E1 1:1). 데이터 170–204.

### E2 / E2a / E2c — 로그 목적지 (15건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 본문 한정을 붙인 뒤 dest 표를 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | YAML identity 행 | `s2/favicons` DESIGN 267 / P 15. 실제 DESIGN 269 / P 17 (P 15는 `primary_color`). 엔씨소프트 P dest 1 at 9 — P 9는 `id`. 표 7–22는 `components_harvested` 행(23)을 자른다. | DESIGN dest 1 at **269** / P dest 1 at **17**. 엔씨소프트 DESIGN 1 at 9 / P 1 at **11**. 표 **7–23**. homepage `https://about.ncsoft.com/` DESIGN dest **2** at 9×2 / P dest **5** at 14/50/51/55/57. |
| 6 | YAML `omd` 행 | `live-extract` DESIGN dest 1 at 9. 줄 9에 두 번. P dest ≥1 at 19 — P 19는 `verified` 날짜, `live-extract` 없음. **Verified:** at 39 — 실제 41. freshness 33–37은 inspect 두 행을 자른다. `components_harvested` P dest at 21 — 21은 `tokens.source`. | DESIGN dest **2** at 9×2 / P dest **5** at 21/29/170/210/214. **Verified:** **41**. freshness **33–39**. omd…harvested **18–23**. `components_harvested` DESIGN 0 / P dest **2** at 23 / 209. |
| 7 | YAML family 행 | Family `227 / 231–235`. 227은 Font evidence 표. Family 본문은 231–237. | Family **231–237**; 227은 evidence 표 이중 목적지. |
| 8 | YAML spacing/rounded 행 | Editorial 4px at 168/177. 168은 도입문, 4px는 170. `tokens.rounded.full: 9999` dest 166/177만. | 4px **170/177**. full dest 166/177 **+ 175**. |
| 9 | §4 행 | Search Focus at 276/375/378. Focus 문자열은 278/376/378. | **278/376/378**. |
| 10 | Footer 행 | freshness 33–37; Verified 39; Tier 1 55–59 (59는 `### Tier 2`); Tier 2 63–65 (공백+문단); Conflicts 41 (Verified 문단). | freshness **33–39**; Verified **41**; Tier 1 **55–57**; Tier 2 **61–62**; Conflicts **43**. |
| 11 | §9 행 | `60% 할인` at `provenance.md` 160. 160은 §13 페르소나 삭제 행. | **161** (§9 삭제 행). |
| 12 | §12 행 | inventory 166–201 (32 data rows). | **166–204** (데이터 170–204, 35행). |
| 13 | §13 행 | Disposition at `provenance.md` 158 (표 머리). | **160**. |
| 14 | §14 States 행 | nine-row body at 284–294. Skeleton/Disabled는 295–296. | **284–296** (표 288–296). |
| 15 | §14 applicability 행 | Cards omit kind. Dark Tile/Editorial/Avatar 닫힘을 목적지로 안 적음. | Game Card 428, Dark Tile 443, Editorial 458, Avatar 488. `loading \| applicable` dest 1 at 331 유지. |
| 16 | §5 행 | Radius scale at 168–175. 목록은 170–175. | **170–175**. |
| 17 | Deviations | `wc -w` 8,257 · 본문/원장 32. | `wc -w` **8,401**. 본문 35 / 원장 35 (`separately published UI specification` 37 = 닫힘 35 + Scope ¶1 읽기 2). |
| 18 | Pass 1 | Count 32 / 32. Dark Tile 등 세 자리 없음. | **35 / 35**, 한정 줄 목록, 443/458/488 기록. |
| 19 | Pass 2 | dual dest 줄이 착수 실측과 불일치. | homepage / `live-extract` / favicon / 엔씨소프트 재실측 줄. B3는 `:212` 전문 실재 유지. |

`DESIGN.md` `wc -l` **598** 불변. provenance 212 → **215**.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 여섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 헤더의 그룹 원문(MMORPG players, global console gamers, design/brand-curious readers of NC PLAY). 이름·나이·도시·동기·소속 분류를 재구성하지 않음.
- Semantic 역할 행 — `:91`이 pairing / role-names / canvas·on-primary unmerge / Pure Black off YAML / NC Purple·NC BLUE 분리를 덮음.
- Motion `:212` B3 다섯 종류+게이트 — 본문 전문 실재 (E2c 유지). 곡선 값은 본문 0 / provenance 5 (verbatim keep, T2 관례).
- Type roles 표 — 원본 §3 + YAML `use` keep-both. `:241`이 unitless keep-both를 덮음.
- Layout `:505`/`:509` — 원본 §5/§8 문장. 관측·의도-행동 읽기를 덮음.
- 2차 목적지 전수: `https://about.ncsoft.com/` DESIGN dest 2 at 9×2 · `live-extract` DESIGN dest 2 at 9×2 · `s2/favicons` DESIGN dest 1 · 엔씨소프트 DESIGN dest 1 · `NC PLAY (엔씨 플레이)` DESIGN dest 1 at 552 · `not in the token set` DESIGN dest 2 at 276/377 · `loading \| applicable` dest 1 at 331 — fitpet형 0회 2차 목적지 없음.
- A1 키 경로: 원본 `tokens.components` 8레코드의 type/bg/fg/radius/padding/height/font/states/border/active/use가 각 블록에 행으로 있음. icook형 필드 소실 없음. 값 복원 없음. `Token-set use:` 행은 값을 블록에 두고 경로 문자열 `tokens.components.<id>.use`는 쓰지 않는 표기 — 값이 그 블록 행에 있다.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/ncsoft/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — NCSOFT / NC, 1997 김택진, Lineage / AION / Blade & Soul / Throne and Liberty, 2020 Pentagram, 2026 NC 리네임, CI 인용("NC's sincerity…", "a new world that is connected", "sharper, clearer visibility" / "sharper and clearer visibility"), "Welcome to a New world Connected Through Joy", "NC PLAY (엔씨 플레이)", "엔씨 공식 브랜드 미디어", "바로가기" / "사전예약" / "자세히 보기" / "여름 정기 세일", PLAY / NEWS / The Game Art / Behind The Story / Our Way / ALL / EDGE / INTERACTIVE / FEATURED / LATEST / CATEGORIES / GAME AI, YAML `use` 바이트, 원본 §12 원칙 · §7 Do/Don't · §10 보이스.
- **관측 기술** — hex · CSS 변수 · unitless `1.2`/`1.45`/`1.53`/`1.36`/`1.5`/`1.7` · 48/40/34/28/26/20/16 type · 6/10/12/16/9999 radius · `0 16px` / 44px / 40px · `Primitive type` · `box-shadow: none` · Focus `1px solid #7234e0`.
- **편집적 해석·인과 판단** — 두 URL을 토큰 표면으로 읽기, CI 기사를 narrative source로 두기, live-extract ≠ published UI spec, 대비를 시스템으로 읽기, 카탈로그/매거진/디자인 애뉴얼, 서사≠토큰, refuses/embraces를 현재-표면 지시로 읽기, 과제 선정·not-biography, 청중 그룹·개인 페르소나 거부, 특성 묶기, 원칙·Do/Don't, role names-from-labels, spacing/shape 키 분리, elevation 경계, motion 게이트·곡선 생략, 폰트 증거 class, fallback 금지, type-role keep-both, favicon pointer, applicability·omit-kind·not-complete-coverage, 보이스 레지스터, named-values-not-permissions, Dark Tile/Editorial/Avatar omit-kind, Editorial 4px ≠ rounded step.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 12 / candidates 271 (`compared < candidates`). 손 스윕 발행 라벨 28 extracted / 0 missing — 목록 전수 `DESIGN.md`에 실재. 라틴 카피 손실 없음. `verdict: PASS`는 바늘 12개에 대한 것.
- **B1 / sibling.** sibling 전용 문자열(`1440×900`, `AION2 Chapter 1. UPDATE`, `CI Renewal – An NCSOFT Change for A New Era`, `#007aff`, `266px`, `#0a0a0b`, `kr.ncsoft.com`, `font-weight: 500`, `58px`, `130px`, `4px 0px`, `portal H2`/`H2`, `getComputedStyle`) DESIGN dest 0. 구조 분류 승격 없음. NEWS inactive는 본문 700(원본 §4), sibling 500을 승격하지 않음.
- **D2a.** 삭제 행은 무식별(`§13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함)`). 식별자·동기 문구는 DESIGN/provenance/migration-log dest 0 (원본에만 있음). 원형 그룹 라벨은 원본 헤더 문장이라 유지. 처분 행에 이름을 열거하지 않음.
- **E2d.** 「세 파일 어디에도 없다」형 부재 단언 없음. `Measured DESIGN.md 0 for …`는 DESIGN 한정 실측이고, 그 문자열이 로그·provenance mention으로 있는 것과 충돌하지 않는다. `60% 할인` DESIGN dest 0 / provenance dest 1 (삭제 처분 행, 게이트 copy-loss가 요구하는 라벨 기록).
- **A1 키 경로.** YAML colors 29 · spacing 8 · rounded 5 · shadow.none · family 4 · type-role 9 · components 8레코드 필드가 대응 블록/표 행에 있음. 값만 다른 자리에 있는 icook형은 없음. CSS 변수명 열(`--core_primary_normal` 등) 유지. krds형 토큰명 열 삭제 없음.
- **`#ffffff` 귀속.** `tokens.colors.canvas`와 `tokens.colors.on-primary`는 두 키로 남고 원장 Semantic color 행이 unmerge를 이름한다. 컴포넌트 bg/fg의 같은 hex는 YAML 키 그대로.
- **충돌 처리.** NC BLUE vs NC Purple는 본문·원장 모두 print-vs-digital split로 일관. 자리마다 다른 처리 없음.

AUDIT_DONE fixes=19

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/ncsoft/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 수 35=35 불변. provenance 본문 무변경.

### 결함 1 — D1 / A1 — Layout `:509` collapsing 한정

원본 §8 Mobile 표(`web/references/ncsoft/DESIGN.md` 318)는 `nav collapses`이고, collapsing 불릿은 hero scale-down / game-card grid / Display Black scales down / genre reflow다. sibling `.verification.md`에도 해당 컨트롤명 없음. 한정 문장만 그 표를 `hamburger / grid collapse / Display Black scaling`으로 재기술해 source §8 collapsing strategy로 읽었다.

한정 문장의 발명 컨트롤명을 원본 표기 `nav collapses`로 되돌림. Layout 표 `:513`과 collapsing 불릿 `:523–528`은 불변. 한정 형태(derived editorial … not NCSOFT-authored)와 원장 Layout Responsive behavior 행은 불변.

판정: **융합·치환 복원**. 근거 — 원본 0 · sibling 0인 컨트롤명을 source §8로 귀속한 자리만 결함. 표 자체는 원본 복제였다.

`node scripts/check-limiter-ledger.mjs ncsoft` → 본문 **35** / 원장 **35** (170–204) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs ncsoft` → use 17/17, 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand ncsoft --gate-only` → PASS, `problems: []`.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용):

| 문자열 | SRC | SIB | DST | PROV | LOG | AUD |
|---|---:|---:|---:|---:|---:|---:|
| `hamburger` | 0 | 0 | **0** | 0 | 2 | 3 |
| `nav collapses` | 1 | 0 | **2** | 0 | 1 | 4 |
| `grid collapse` | 0 | 0 | **1** | 0 | 1 | 2 |
| `Display Black scaling` | 0 | 0 | **1** | 0 | 1 | 2 |
| `Display Black scales down` | 1 | 0 | **1** | 0 | 0 | 2 |

`wc -w` DESIGN **8402** (`wc -l` **598** 불변). 한정 수 35 / 원장 35.

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §8 Responsive Behavior | `nav collapses` DESIGN / P | (없음; 표 dest 1) | **2** / **0** |
| §8 Responsive Behavior | `hamburger` DESIGN / P | (없음; 한정 dest 1) | **0** / **0** |
| Deviations | `wc -w` | 8,401 | **8,402** |

FIX_DONE ncsoft fixed=1 logdest=3

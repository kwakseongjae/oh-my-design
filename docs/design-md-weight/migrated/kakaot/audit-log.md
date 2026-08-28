# kakaot 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kakaot/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kakaot/DESIGN.md`
검증 sibling: `web/references/kakaot/.verification.md` — `find web/references/kakaot/.verification.md` → `No such file`. `find web/references/kakaot -type f`는 `DESIGN.md`만. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음. sibling 없음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 대괄호 카피는 `grep -oF`. `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Kakao T-authored or a separately published UI specification`을 요구한다. 기존 35건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 35 / 원장 35. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:9`는 surface-attachment를 한정 절 밖에 두었고, Primary tasks `:19`는 persona-off를 한정 절 밖에 두었고, Motion `:157`은 duration-not-curve와 90% use-claim을 빠뜨렸고, Search `:338`은 Focus-not-focus-visible을 빠뜨렸고, Vehicle-Class `:384`는 §9 A3 착지를 빠뜨렸다.

## 수정 목록 (15건)

### B2a — 인접 한정 (본문 5건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:9` — Scope ¶1 | “Every value stays attached to the surface or evidence class that established it”는 세 번째 부류. 기존 한정은 corporate-URL / conventional-hex / not-a-trip-extract만 가리킨다. | 기존 완전형에 keeping every value attached to the surface or evidence class that established it를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:19` — Primary tasks | “They do not come from the source's persona section”는 세 번째 부류. 기존 한정은 과제 선정만 가리키고 그 문장은 한정 절 밖에 있었다. | 기존 완전형에 refusing to take them from the source's persona section을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:157` — Motion gate | “They are not easing curves”(`:145`)와 “it does not restore a curve”(`:153`의 90% use claim)는 세 번째 부류. 기존 한정은 omit-curves / keep-durations-and-signatures / five-kind gate만 가리킨다. | 기존 완전형에 keeping the five duration rows as duration tokens rather than easing curves와 keeping the 90% default-motion use claim as a use claim that does not restore a curve를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:338` — Search | “That observed Focus is not a `focus-visible` treatment”(`:337`)는 세 번째 부류. 기존 한정은 `14px 16px` ≠ `tokens.spacing.base: 16`만 가리킨다. | 기존 완전형에 recording the observed Focus as that observed Focus rather than as `focus-visible` treatment를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:384` — Vehicle-Class Card | “That pairing sat only in the source Agent Prompt Guide and is landed here (A3)”(`:383`)는 세 번째 부류. 기존 한정은 16px padding / 12px radius as this card's geometry만 가리킨다. | 기존 완전형에 landing the source Agent Prompt Guide's class-name / est-fare pairing on this card rather than dropping it를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 35, `not Kakao T-authored` 35, `separately published UI specification` 35. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 44, 55, 65, 79, 99, 115, 128, 139, 155, 157, 167, 184, 188, 204, 208, 232, 247, 338, 384, 406, 420, 443, 458, 503, 509, 519, 524, 544, 580.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | Scope ¶1 행 | corporate-URL / conventional-hex / not-a-trip-extract만. 본문 `:9`가 이제 surface-attachment도 이름한다. | keeping every value attached to the surface or evidence class that established it를 행에 추가. |
| 7 | Primary tasks 행 | 과제 선정 + persona-off를 세미콜론으로만 적음. 본문 `:19`가 이제 한정 절 안에 넣는다. | refusing to take them from the source's persona section. |
| 8 | Motion gate 행 | omit-curves / five-kind만. 본문 `:157`이 이제 duration-not-curve와 90% use-claim도 이름한다. | 두 판단을 행에 추가. |
| 9 | Search 행 | padding ≠ `tokens.spacing.base: 16`만. 본문 `:338`이 이제 Focus-not-focus-visible도 이름한다. | observed Focus is not `focus-visible` treatment를 행에 추가. |
| 10 | Vehicle-Class Card 행 | 16px / 12px geometry만. 본문 `:384`가 이제 A3 착지도 이름한다. | landing the source Agent Prompt Guide's class-name / est-fare pairing를 행에 추가. |

헤더 / 데이터 행 **35 = 35** at 144–178 (E1 1:1). 신설 행 없음.

### E2 / E2a / E2c — 로그 목적지 (5건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML identity 행 | Homepage를 Scope+Identity만으로 적음. `#FEE500` / slug dest 미기재. | Homepage DESIGN dest **2** at 9/23 · P dest **2** at 13/42. `#FEE500` DESIGN dest **13** · P dest **6** at 14/36/48×2/68/132. `#fee500` DESIGN dest **3** at 79/81/238. `카카오 T` DESIGN dest **3** at 9/13/546. slug DESIGN dest **1** at 208 · P dest **1** at 16. |
| 12 | YAML metadata 행 | `tokens.source: prose-derived` also remains in `DESIGN.md` Scope. Exact 문자열 DESIGN dest **0** (fitpet형 2차 목적지). | `prose-derived` DESIGN dest **1** at 9. Exact `tokens.source: prose-derived` DESIGN dest **0** / P dest **0**. `components_harvested` DESIGN dest **0** · P dest **3** at 21/60/121. |
| 13 | §11 행 | Dual만 적고 dest 줄 없음. | `2017` DESIGN dest **2** at 13×2 · P dest **3** at 112/124/146. `warm middle` DESIGN dest **1** at 13 · P dest **1** at 124. |
| 14 | C2 절 | L/E/S 개방만 적고 dest 줄 없음. | `loading \| applicable` DESIGN dest **3** at 255/277/321. |
| 15 | 헤더 SHA | worker SHA만. | Auditor SHA `5c521dda650fe43f6e840dc5c4f615ede6618724e0d58159fa2e0133b47e396c`. worker-close `2804c441…` 유지. |

Destination SHA `2804c441…` → `5c521dda650fe43f6e840dc5c4f615ede6618724e0d58159fa2e0133b47e396c` (한정 확장 후). 줄 수 DESIGN `wc -l` **589** 불변. provenance 178 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Dark / Outline / Danger / Error input / Bottom Tab 블록: `is not` 키경로 판단 문장이 없어 한정을 신설하지 않음. 값 행은 관측.
- Capture `:232`의 catalog-graph / not-complete-coverage / 모든 applicability 평결: 같은 절에서 이미 이름함.
- Audience `:28` / Distinctive `:32` / Named gaps `:580`: 기존 한정이 해당 판단 두 항을 이미 이름함.
- C4 한 줄(`:407` / `:444` / `:504`): Capture `:232`가 kind-omission을 이름함.
- B3 전문 `DESIGN.md` 159: `transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1. 로그 포인터 유지.
- D2a 삭제 행: 무식별(3인; 이름·나이·도시·동기·소속 분류). `진우` / `Jin-woo` / `박부장` / `소연` / `Seongnam` / `Busan` / `Seoul` DESIGN/P/L dest 0.
- E2d: 「세 파일 어디에도 없다」 자기부정 행 없음. provenance `:23`은 원본 frontmatter 필드 부재(A1c). `:64`는 sibling 파일 부재(`find` 확인).

## 범위 밖 관찰

- **A5a.** 로그 `compared` 29 / `candidates` 218. 발행 라틴(Kakao T / Kakao Taxi / Kakao Driver / Kakao Parking / transportation / friendly infrastructure / warm-middle 문장)은 Scope `:13`에 있다. 발행 라틴 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 파일 없음. 값·h3/섹션 표제 분류 침투 대상 없음.
- **D2a.** 식별·동기(`office worker` / `late night` / `auto-payment` / `business traveler` / `airport` / `one-handed`) / 소속 분류 DESIGN dest 0. Audience는 원본 그룹만.
- **E2d.** 이 브랜드 0.
- **A1 키 경로.** YAML `tokens.components` 13레코드의 type/bg/fg/radius/padding/font/use 및 기록된 height/states/disabled/border/focus/active/shadow가 각 대응 블록에 행으로 있다. icook형 소실 없음. 복원 없음.

AUDIT_DONE fixes=15

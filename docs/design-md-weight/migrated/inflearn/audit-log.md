# inflearn 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/inflearn/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/inflearn/DESIGN.md`
검증 sibling: `web/references/inflearn/.verification.md` — `find web/references/inflearn -type f`와 `test -f web/references/inflearn/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. Inflab 2024 retrospective는 공식 맥락이지 Pajamas/Carbon급 토큰 사양이 아니다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Inflearn-authored or a separately published UI specification`을 요구한다. 기존 21건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 21 / 원장 21. 숫자는 맞았으나 Scope ¶2 `:11`·¶3 `:13`에 한정이 없고, Motion `:112`·Observed states `:169`·Declared-only `:127`·Official distribution `:128`에도 없었다. Semantic `:71`은 shared-hex만 이름하고 `#25262b`/`#ADB5BD`를 빠뜨렸고, Spacing `:90`은 unmerge만, Shape `:104`는 경로 분리만, Type roles `:145`는 extra-key만, Content `:314`는 voice 두 판단만 이름했다. 21은 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (32건)

### B2a — 인접 한정 (본문 11건, 발생 수 +6)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | "organize that promise as a dense course catalogue"와 "practical rather than decorative"는 세 번째 부류. 이 단락에 한정이 없었다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:13` — Scope ¶3 | "should not be confused with every Inflearn-owned page", "useful evidence for the header’s product importance, not authorization", "only sources of product tokens"는 세 번째 부류. `:9`는 다른 단락이다. | 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:71` — Semantic | `#25262b` component-not-palette와 `#ADB5BD` selector-local은 세 번째 부류. 기존 한정은 shared-hex 분리만 가리킨다. | 기존 완전형에 두 분류를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:90` — Spacing | "conservative observed spacing set"는 세 번째 부류. 기존 한정은 키 경로 분리만 가리킨다. | 기존 완전형에 conservative-observed-set을 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:104` — Shape | "not a mandate to round unrelated interfaces"는 세 번째 부류. 기존 한정은 경로 분리만 가리킨다. | 기존 완전형에 distinct-shapes-not-a-mandate를 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:112` — Motion | "No motion token is therefore promoted"는 세 번째 부류. 이 절에 한정이 없었다. | 완전형 신설. 발생 수 +1. |
| 7 | `DESIGN.md:127` — Declared-only | "None are promoted to UI tokens"는 세 번째 부류. `:124`·`:129`는 다른 행이다. | 완전형 신설. 발생 수 +1. |
| 8 | `DESIGN.md:128` — Official distribution | "identify the asset and licence only"는 세 번째 부류. | 완전형 신설. 발생 수 +1. |
| 9 | `DESIGN.md:145` — Type roles | unitless-ratios-stay-ratios는 세 번째 부류. 기존 한정은 extra-key만 가리킨다. | 기존 완전형에 비율 유지를 접어 넣음. 발생 수 +0. |
| 10 | `DESIGN.md:169` — Observed interaction states | selector-local disabled, no general dialog-panel, reusable-claim boundary, no general menu token은 세 번째 부류. `:177`은 applicability 절차만 가리킨다. | 완전형 신설. 발생 수 +1. |
| 11 | `DESIGN.md:314` — Content voice | "Treat this as brand context" / "not a published UI copy manual"는 세 번째 부류. 기존 한정은 grounded·clarity만 가리킨다. | 기존 완전형에 brand-context-not-copy-manual을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 27, `not Inflearn-authored` 27, `separately published UI specification` 27. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 15, 21, 30, 34, 45, 53, 60, 71, 90, 104, 108, 112, 124, 127, 128, 129, 135, 145, 152, 169, 177, 303, 314, 369.

### E1 — provenance derived 범위 (6건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼거나, 본문 신설을 행으로 안 세면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 12 | `provenance.md` inventory 헤더 | **21**. 본문이 이제 27이다. | **27**. 데이터 행 173–199. 기존 "Scope ¶3 (narrative)"는 실제 ¶4(`:15`)라 ¶4로 고침. |
| 13 | `provenance.md` inventory | Scope ¶2·¶3 한정이 원장에 없음. | 행 신설 2. |
| 14 | `provenance.md` inventory | Motion·Declared-only·Official distribution·Observed states 한정이 원장에 없음. | 행 신설 4. |
| 15 | `provenance.md` Semantic·Spacing·Shape | shared-hex / unmerge / 경로 분리만. 본문이 이제 component-not-palette·conservative-set·mandate를 이름한다. | 세 행을 본문에 맞춤. |
| 16 | `provenance.md` Type roles | extra-key만. | unitless-ratios-stay-ratios를 행에 추가. |
| 17 | `provenance.md` Content | grounded·clarity만. | brand-context-not-copy-manual을 행에 추가. |

헤더 `21` → `27` / 데이터 행 **27** (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (15건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 18 | YAML identity | homepage provenance **53**은 표 구분선. home-capture는 **54**. `#00C471` 166은 Dialog 표 행. dest **4** at 37/79/169/183. favicon URL은 provenance **15**만(22는 URL 없이 dual을 이름함). `#00c471` DESIGN dest **5**(79×2). | 54 · 169/183 · URL 15 · dest 5. |
| 19 | YAML metadata | verification을 provenance 147–155에 있다고 적음. 그 구간은 Capture selectors. `documentation chrome` DESIGN dest **3** at 9/13×2. | metadata 17–20/31–38. chrome dest 3. |
| 20 | YAML colors | `#ADB5BD` 86/166. dest **3** at 71/86/169. `#25262b` 86/247. dest **3** at 71/86/247. | 71/86/169 · 71/86/247. |
| 21 | Family | `1,278` at 38/126. dest **2** at 38/**125**. | **125**. |
| 22 | Components | `Token-set font record:` 251. dest **5** at 187/212/235/**252**/281. | **252**. |
| 23 | §1/§9/§11 | narrative-not-token을 provenance **155**에 있다고 적음. 155는 menu-option 캡처 행(fitpet형 2차 dest). `historical systems coexisted` provenance dest **0**. `MFE/App Shell` dest **2** at 13/15. core services dest **4** at 13/15/30/328. | narrative **164–165**. MFE 13/15. core +328. |
| 24 | §3 Typography | Font-file 126/133/371 · Declared 128 · Arial/Roboto 127 · SIL 129/332. 실측 URL **125/134/371** · Declared **127** · system **126** · SIL **128/333**. | 실측 줄. |
| 25 | §4 | Capture selectors provenance 130–138. 130–144는 Claim ledger. 선택자는 **147–156**. | **147–156**. |
| 26 | Footer | Tier 1 61–69 · Tier 2 73–75 · rollback 112–114. 실측 64–70 · 74–75 · 114–116. | 실측 줄. |
| 27 | §7/§10 | strings 318–332. SIL는 **333**. | **318–333**. |
| 28 | §8 | a11y 본문을 166에 있다고 적음. 166은 Dialog 표 행. 본문은 **169**. | **169**. |
| 29 | §11 | year-form dual provenance 50–57, 155. Sources 표는 50–60. 155는 캡처 행. | **50–60 / 164–165**. |
| 30 | §12 | inventory 173–193 (21). | **173–199 (27)**. |
| 31 | §13 | Disposition provenance 118. 118은 Omission 절 제목. 행은 **122**. | **122**. |
| 32 | F1·Deviations·SHA | F1 21=21. `wc -w` 4,929는 확장 전. | F1 27=27. `wc -w` 5,273. worker-close SHA `a69d3f0f…` · gate-fix `14070e711f…` 유지, auditor `a9f65f7b6a326366161a00fcb38f9f29ad4ebf23813788863c3172a33a8b95d6`. |

Destination SHA `14070e711f…` → `a9f65f7b6a326366161a00fcb38f9f29ad4ebf23813788863c3172a33a8b95d6` (한정 신설·범위 확장 후). 줄 수 DESIGN 378 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 세 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §13 그룹만: learners seeking career development · experts who share knowledge · core services. 페르소나 동기·소속 분류를 재구성하지 않음.
- B3 준수 주장 — `DESIGN.md` 114가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트·partial-confirmation 배제를 전문으로 담음 (E2c 유지, 378은 재진술).
- 2차 목적지 전수: homepage URL DESIGN dest 4 · `#00c471` dest 5 · favicon URL dest 1 · `documentation chrome` dest 3 · `1,278` dest 2 · `historical systems coexisted` dest 1 · `founder history` dest 1 · `인프런` dest 3 — 각 DESIGN dest ≥ 1 (fitpet형 0회는 provenance 155의 narrative 주장뿐, 로그에서 철회).
- A1 키 경로: YAML `tokens.components` 5레코드의 type/bg/fg/radius/padding/font/states/use가 각 블록에 행으로 있음. icook형 소실 없음. 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/inflearn/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 인프런, Inflab, career-learning platform, learn-and-share 두 문장, 2024 retrospective / 2025 GNB redesign / 2026 GNB account, historical systems coexisted, courses/challenges/mentoring/clips/community, Pretendard, SIL OFL 1.1, §12 원칙·§7 Do/Don't.
- **관측 기술** — hex · Pretendard 1,278 · unitless `1.50`/`1.00`/`1.64` · `4`/`8`/`10`/`16` · `4`/`8`/`32`/`999` · `9999px` · `box-shadow: none` · selectors · YAML `use`.
- **편집적 해석·인과 판단** — 두 페이지를 계약 표면으로 읽기, 값의 표면 귀속, 서사≠토큰, catalogue/practical, shell-not-every-page, 과제 선정, 특성 묶기, 원칙·Do/Don't, 팔레트 슬롯·`#25262b`/`#ADB5BD` 분류, spacing/shape 키 분리·mandate, elevation/motion 게이트, 폰트 증거 class·declared-only·licence-only, no-substitution, type-role keep-both, favicon·imagery, state-boundary, applicability, conservative layout, voice 해설, unresolved 목록.

세 번째 부류 중 21곳은 착수 시 인접 완전형이 있었고, 그중 5곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 6곳은 한정이 없어 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 27 | 1 | mention |
| `not Inflearn-authored` | 27 | 2 | mention |
| `separately published UI specification` | 27 | 1 | mention |
| `#00c471` | 5 | 7 | mention |
| `#00C471` | 4 | 3 | mention |
| `11px` | 0 | 2 | mention |
| `인프런` | 3 | 0 | mention |

`provenance.md`의 한정 문자열은 색인이다. migration-log의 등장은 mention이지 use가 아니다.

## 범위 밖 관찰

- **A5a.** 게이트 `compared` 0 / `candidates` 156. 이관본 130개 전수 평균 4.4%와 같고, `verdict`는 「대조한 바늘 중 손실 없음」이지 「카피 보존」이 아니다. 손 대조: 발행 CJK `인프런` dest 3=로그 주장. 발행 라틴 `career-learning platform` dest 4 · learn-and-share 두 문장 dest 각 2 · `good content over inflated marketing` dest 2 · `content rather than inflated marketing` dest 2 · `learner counts and course evaluations without selection or manipulation` dest 2. 발행 라틴 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 `2024-03-04` / `2026-03-05` / `three design systems coexisted` / `open-source system infrastructure` / `0px 4px` / `11px/700/18px` / `ten component types` / `99 component` / `coverage score` / `transparent, black` / `rgb(0, 196, 113)` DESIGN dest 0. `H3`/`h3` 분류 침투 0. 고치지 않음.
- **D2a.** 원본 §13에 이름·나이·도시·전기 없음. 삭제 처분 행은 무식별. 본문 동기·소속 분류 재구성 0. 고치지 않음.
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣어 거짓이 되는 형태 0. sibling-only 「DESIGN.md 0」은 로그 mention이며 본문 dest 0과 일치.
- **A1 키 경로.** YAML `tokens.components` 5레코드 필드가 대응 블록에 행으로 있음. icook형 소실 없음.
- **A1 gloss (게이트 정정 잔여).** Type roles `:145` "The table Size column writes those steps with a px suffix"는 Course badge Size가 단위 없는 `11`인 뒤로는 거짓이다. 토큰·표는 손대지 않았고, 이 문장은 관측 기술이라 B2a 범위 밖. 고치지 않음.

AUDIT_DONE fixes=32

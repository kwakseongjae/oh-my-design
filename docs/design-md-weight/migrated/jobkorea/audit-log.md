# jobkorea 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/jobkorea/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/jobkorea/DESIGN.md`
검증 sibling: `web/references/jobkorea/.verification.md` — `find web/references/jobkorea/.verification.md`와 `test -f`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `1.5`와 발행 카피는 `grep -oF`. `--themeradius-xs`는 `grep -oF --`. `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not JobKorea-authored or a separately published UI specification`을 요구한다. 기존 31건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 31 / 원장 31. 숫자는 맞았으나 Font evidence License `:175`의 "No licence claim is invented"는 세 번째 부류이고, 같은 표 `:174`는 fallback classing만, `:178`은 Official / Live / fallbacks / named scale만 이름한다. 31은 과소였다(fastcampus형 좁은 쪽).

## 수정 목록 (27건)

### B2a — 인접 한정 (본문 5건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:175` — Font License | "No licence claim is invented"는 세 번째 부류. `:174`는 fallback, `:178`은 Official / Live / fallbacks / named scale만 이름한다. | 같은 셀에 완전형 신설. 발생 수 +1. 줄 수 불변. |
| 2 | `DESIGN.md:178` — Font evidence close | 그룹 닫힘이 License 부재 읽기를 이름하지 않음. | 같은 행에 missing-licence absence를 이름하도록 확장. |
| 3 | `DESIGN.md:451` — Surface state contract | 섹션 한정이 hover-row cubic-bezier 생략을 이름하지 않음. | 같은 행에 template / Material-standard re-injection 생략을 이름하도록 확장. |
| 4 | `DESIGN.md:467` — Layout breakpoints | 인접 한정이 20 / 40 배수 keep-both를 이름하지 않음. `:105`는 Foundations라 인접이 아님. | 같은 행에 20 / 40 multiples on this layout record를 이름하도록 확장. |
| 5 | `DESIGN.md:551` — Recorded unresolved | 한정이 getdesign.md / refero를 ledger-not-token으로 읽는 분류를 이름하지 않음. | 같은 행에 ledger facts rather than token sources를 이름하도록 확장. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 32, `not JobKorea-authored` 32, `separately published UI specification` 32. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 44, 54, 66, 81, 105, 120, 132, 136, 171, 173, 174, 175, 178, 186, 198, 205, 216, 371, 414, 451, 467, 469, 474, 483, 517, 551.

### E1 — provenance derived 범위 (6건)

좁은 쪽 FAIL(fastcampus형). 본문 신설을 행으로 안 세면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | `provenance.md` 헤더 | `31` complete / `31` data rows. | `32` / `32`. |
| 7 | inventory | 본문 `:175` License 한정이 원장에 없음. | 행 Typography — Font License 신설. |
| 8 | inventory Font evidence close | License 부재 읽기가 행 설명 밖. | missing-licence absence를 이름. |
| 9 | inventory Surface state | hover-row 커브 생략이 행 설명 밖. | template / Material-standard 생략을 이름. |
| 10 | inventory Breakpoints | 20 / 40 keep-both가 행 설명 밖. | layout-record multiples를 이름. |
| 11 | inventory Recorded unresolved | getdesign / refero ledger-not-token이 행 설명 밖. | ledger facts rather than token sources를 이름. |

헤더 `31` → `32` / 데이터 행 **32** at 161–192 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (16건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 줄은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 12 | Worker-close SHA | 감사 후 본문 SHA가 바뀜. | auditor-close `05d864ab107bd21fb08785994805e6dbc56817957b356db40175173b5812fe93`. |
| 13 | YAML identity 행 | `https://www.jobkorea.co.kr` DESIGN dest 12 / P dest 6. `grep -o` DESIGN dest **13** (9에 homepage+company prefix) / P dest **8**. | dest 13 at 9×2/21/202/222/249/271/292/313/341/364/387/409 · P dest 8 at 13/16/23/25/43/47/51/55. |
| 14 | YAML identity 행 | `#083ccc` P dest 5 at 14/23/37/76/99. dest **4**; 23은 hex 없음. | P dest 4 at 14/37/76/99. |
| 15 | YAML family 행 | stack를 172/182/184만. `Apple SD Gothic Neo` dest **5** at 36/172/174/183. 184는 그 문자열이 아님. License 175 누락. | dest 5 · License 175 병기. |
| 16 | YAML spacing/shape 행 | `full: 9999` dest 2 at 120/465. dest **3** (120에 두 번). | dest 3 at 120×2/465. |
| 17 | YAML spacing/shape 행 | `999px` dest 7. dest **9** at 11×2/38/58/117/120×2/344/366. | dest 9. |
| 18 | YAML components 행 | `not in the token set` dest 7. dest **8** at 212×2+248/270/291/340/363/408. | dest 8. |
| 19 | §4 행 | Secondary `#d5d8dc` at 251/237. dest **5** at 81/99/240/252/459. 237·251은 그 hex가 아님. Small 273–276은 Text부터. | dest 5 · Secondary 252 · Disabled 240 · Small 274–276. |
| 20 | Footer 행 | CSS 번들을 DESIGN 9 + P 44–46/52–54로 묶음. `ff9addcaa74e70a7` P dest **3** at 44/52/76. `fd29aacb4b8b02e0` P dest **3** at 45/53/85. `JOBKOREA Black` DESIGN dest **5** at 13×2/493/553×2 / P dest **3**. | 번들 분리 · Black dest 5/3. |
| 21 | §3 행 | 171/173/174/178/186/198만. 신설 175가 없음. | 175 License 한정 병기. |
| 22 | §12 행 | inventory 159–189 (31). 헤더를 데이터로 센 줄. | **161–192 (32)**. |
| 23 | §15 곡선 행 | cubic-bezier를 151/460/556. 151은 그 문자열 없음. dest **5** at 147×2/460/556×2. | **147**/460/556. |
| 24 | Sibling 절 | 전사 73–86. 73은 빈 줄. | **74–86**. |
| 25 | Deviations | B2a 31=31. `wc -w` 7,120. | 32=32. `wc -w` **7,204**. |
| 26 | F1 | 한정 목록에 175 없음. | 175 포함 (32). |
| 27 | F2 | "B2a 31=31". | **32=32**. |

Destination SHA `f01c616b…` → `05d864ab107bd21fb08785994805e6dbc56817957b356db40175173b5812fe93` (한정 신설·확장 후). 줄 수 DESIGN `wc -l` **557** 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 UI 사양 없음, v12 전제 주석).
- Audience — 원본 §11·§12가 독립 기록한 그룹(9+ million active job seekers / one million monthly active / employers across every industry and region / new graduates, mid-career transitioners, seniors, and part-timers). 페르소나 이름·동기·소속 분류를 재구성하지 않음. 한정 유지.
- Semantic 역할 행의 원본 use 문장 — `:81` 포괄절이 특성화를 덮음.
- Voice-sample 한글 원문 — 원본 §10 발행 카피. `:483`이 illustrative-not-complete-guide를 덮음.
- Badge `Kind: non-interactive` — `:216`이 every interactive-kind verdict와 사유를 이름함. 420/429/437/445는 그 절차의 적용.
- B3 준수 주장 — `DESIGN.md` 154가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지, 556은 재진술).
- 2차 목적지 전수: token-surface homepage DESIGN dest ≥1 · CSS bundle dest 1 each at 9 · company dest 1 at 9 · `#083ccc` dest 11 · favicon slug dest 1 at 202 · `Kind: non-interactive` dest 4 · `kind: non-interactive` DESIGN 0 · `N명 지원` dest 3 · `맞는 공고가 없어요` dest 2 · `지원 완료!` dest 3 · `LOOP AI` dest 4 — 각 DESIGN dest ≥ 1 (fitpet형 0회 없음).
- A1 키 경로: 원본 `tokens.components` 7레코드의 type/bg/fg/radius/padding/font/border/use가 대응 블록에 행으로 있음. `badge-urgent`/`badge-error`/`badge-success` YAML에 bg 없음(Background 행 불필요). `card` YAML에 fg 없음(Text 행 불필요). icook형 필드 소실 없음. 값 복원 없음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/jobkorea/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — JobKorea, Dreammark, JOBKOREA Black, Jobko, 1996, 1998, 2023, Sodiumpartners, 100 KRW, Worxphere, AlbaMon, GameJob, NineHire, JobPlanet, K-BPI 2023–2025, LOOP AI, people's dreams become jobs, N명 지원, 맞는 공고가 없어요, 지원 완료!, 지원완료, AI가 맞춤 공고 5개를 찾았어요, Pretendard, JK Blue 600, AM Orange 500, YAML use/font 바이트, §7 Do/Don't, §12 다섯 원칙 문장.
- **관측 기술** — hex · Pretendard · unitless `1.33`/`1.31`/`1.4`/`1.5`/`1.38` · `full: 9999` · search `999px` · Elevated Card `12px` · `0 16px` · 16px / 700 · `rgba(0,0,0,0.06) 0px 2px 8px` · `Primitive type` · token-set keys.
- **편집적 해석·인과 판단** — 검사 홈페이지·세 CSS 번들을 계약 토큰 표면으로 읽기, 회사 페이지≠토큰, 값의 표면 귀속, 서사≠토큰, 과제 선정, 청중 그룹 읽기, 특성 묶기, 원칙·Do/Don't, 팔레트 특성화, `#012ca2`/`#1b55f6` 미분합, spacing/shape 키 분리, elevation keep-both, motion 귀속·커브 생략, 폰트 증거 class, License 부재, no-substitution, type-role keep-both, favicon/Jobko 읽기, applicability, Standard Search reservation, Elevated Card C4, state-record 비부착, hover-row 커브 생략, layout 20/40 keep-both, breakpoint pair, voice/forbidden-register, voice-sample illustrative-not-complete-guide, byte-exact, unresolved 프레이밍, getdesign/refero ledger-not-token.

세 번째 부류 중 31곳은 착수 시 인접 완전형이 있었고, 1곳(License)은 한정이 없어 신설했다. 4곳은 인접 한정이 그 추론을 이름하지 않아 확장했다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

`find`로 5파일 확인 후 `grep -o <패턴> <파일> | wc -l` 파일별. `1.5`는 `grep -oF`. `--themeradius-xs`는 `grep -oF --`.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 32 | 0 | 2 |
| `not JobKorea-authored` | 32 | 2 | 3 |
| `separately published UI specification` | 32 | 3 | 2 |
| inventory 데이터 행 | — | 32 | — |
| `Primitive type: \`button\`` | 1 | 0 | 0 |
| `Kind: non-interactive` | 4 | 0 | 1 |
| `kind: non-interactive` | 0 | 0 | 0 |
| `#083ccc` | 11 | 4 | — |
| `1.5` (`-oF`) | 3 | 1 | 1 |
| `tokens.rounded.full: 9999` | 1 | 1 | 2 |
| `full: 9999` | 3 | 0 | 2 |
| `999px` | 9 | 2 | — |
| `not in the token set` | 8 | 1 | 2 |
| `loading \| applicable` (`-oF`) | 4 | 0 | 1 |
| `194 KB` | 0 | 2 | 2 |
| `N명 지원` (`-oF`) | 3 | 1 | 2 |
| B3 다섯 종류+게이트 (`DESIGN.md` 154) | 1 | 0 | 1 |

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **11** / candidates **146**. 발행 라벨 손 대조 28/0/0. latin-copy-audit lost 0. 발행 라틴 손실은 안 보임. 직접 고치지 않음.
- **B1.** sibling 전용 `194 KB` / `223 KB` / `#0000001f` / `--themeradius-xs` / `Worxphere LLC` / `No designs found for 'jobkorea'` DESIGN dest **0**. sibling에 h3·섹션 표제 분류 없음. 구조 관측 침투 없음.
- **D2a.** 삭제 처분 행은 무식별(`§13 personas (4 illustrative entries)`). 이름(`신입 취준생`/`경력 이직자`/`긱 워커`/`First-time Graduate`/`Mid-Career Switcher`/`HR Manager`)·동기(`application counters`/`salary benchmarking`/`employer dashboard`/`quick-apply shifts`/`AlbaMon integration`) DESIGN/provenance/migration-log dest **0**. `채용담당자` DESIGN dest **1** at 487은 원본 §10 발행 보이스 샘플이지 페르소나 소속 분류가 아님. Audience는 원본 그룹만.
- **E2d.** 부재 단언 행이 자기 분모에 그 문자열을 넣고 「세 파일 어디에도 없다」고 단언한 형태 없음. sibling-only 절은 mention≠use를 명시하고 DESIGN dest 0만 측정함.
- **A1.** 원본 YAML 컴포넌트 7레코드의 type/bg/fg/radius/padding/font/border/use가 대응 블록에 행으로 있음. `card` YAML에 fg 없음(Text 행 없음이 생략). 필드 소실 없음.

원본 `web/references/jobkorea/**` 미수정. 카탈로그 채택 아님.

AUDIT_DONE fixes=27

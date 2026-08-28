# kia 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kia/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kia/DESIGN.md`
검증 sibling: `web/references/kia/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Kia-authored or a separately published UI specification`을 요구한다. 기존 40건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 40 / 원장 40. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion B3 `:162` 다섯 종류 게이트가 인접 완전형 없이 세 번째 부류였다. Audience `:28`은 그룹 읽기만 이름하고 biography-drop을 빠뜨렸다. Font wrap `:188`은 official-use / licence / fallback만 이름하고 Outside-these-captures를 빠뜨렸다. Content `:553`은 발행 라벨만 이름하고 forbidden-register Don'ts를 빠뜨렸다.

## 수정 목록 (28건)

### B2a — 인접 한정 (본문 4건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:162` — Motion B3 | 다섯 증거 종류 게이트와 부분 확인 불충분은 세 번째 부류. `:143` 한정은 durations / roles / rules / signature / 곡선 생략만 가리킨다. | 완전형 신설. 발생 수 +1. |
| 2 | `DESIGN.md:28` — Audience | 전기 삭제·무식별 반입은 세 번째 부류. 기존 한정은 그룹 읽기만. | 기존 완전형에 biography-drop / no name·age·city·motivation·affiliation을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:188` — Font-evidence wrap | `:186` "Typography beyond the two inspected KR product surfaces stays outside this contract"는 세 번째 부류. 기존 한정은 official-use / licence-boundary / fallback만. | 기존 완전형에 outside-captures bound를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:553` — Content published-string | `:555` forbidden-register 목록을 이 계약의 Don'ts로 읽는 것은 세 번째 부류. 기존 한정은 `이 달의 구매 혜택` 발행 라벨만. `:534`는 여는 단락의 voice-register라 `:555`에 인접하지 않다. | 기존 완전형에 forbidden-register-as-source-Don'ts를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 41, `not Kia-authored` 41, `separately published UI specification` 41. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention 3 / 4는 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 67, 82, 115, 128, 139, 143, 162, 172, 182, 188, 196, 200, 218, 226, 237, 260, 293, 326, 355, 356, 373, 398, 426, 435, 463, 467, 482, 504, 529, 534, 551, 553, 589.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | 헤더 | 40 complete / 40 data rows. | **41** / **41**. |
| 6 | Audience 행 5 | 그룹만. 본문 `:28`이 이제 biography-drop도 이름한다. | 그 판단을 행에 추가. |
| 7 | Font wrap 행 17 | official-use / licence / fallback만. 본문 `:188`이 이제 outside-captures도 이름한다. | 그 판단을 행에 추가. |
| 8 | published-string 행 40 | 발행 라벨만. 본문 `:553`이 이제 forbidden-register Don'ts도 이름한다. | 그 판단을 행에 추가. |
| 9 | Motion B3 행 | 없음. 본문 `:162` 신설. | 행 41 신설. |

헤더 / 데이터 행 **40 → 41** (E1 1:1). 데이터 149–189.

### E2 / E2a / E2c — 로그 목적지 (19건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 10 | YAML identity 행 | homepage DESIGN dest 6 / P dest 4. `grep -o 'https://www.kia.com/kr/'`는 ev6·newsroom 접두까지 센다. | DESIGN dest **9** at 9/21/22/342/362/389 · P dest **9** at 14/47/48/50/54/55/57/74. |
| 11 | YAML identity 행 | `#05141f` P dest 9 at 15/28/75/76/78/79/81/108/141. 141에 4회. | P dest **12**. |
| 12 | YAML identity 행 | 기아 dest at 9/13/547/553 (줄만). | dest **7**. |
| 13 | YAML metadata 행 | freshness 31–36; **Verified:** 38; `live-extract` P dest 2 at 20/66. 66에 2회. | table **33–38**; Verified **40**; P dest **3**. |
| 14 | YAML colors 행 | `#010e18` dest 2 at 82/87/107 (3줄을 dest 2로 적음). | dest **3**. |
| 15 | YAML colors 행 | `#01141b` dest 3 at 82/88/107. 88에 2회. | dest **4**. |
| 16 | YAML colors 행 | `#79838b` dest 2 at 82/101/107 (3줄을 dest 2로 적음). | dest **3**. |
| 17 | YAML spacing/shape 행 | `tokens.rounded.lg: 15` dest 2 at 124/354/355. | dest **3**. |
| 18 | YAML components 행 | `not in the token set` dest 3 at 431/440/460. 237에 2회. | dest **5** at 237/431/440/460. |
| 19 | Footer 행 | Freshness 31–36 · Verified 38 · Tier 1 53–57 · Conflicts 40. | table **33–38** · Verified **40** · Tier 1 **54–57** · Conflicts **42**. |
| 20 | §11 행 | narrative-not-token P 187 (inventory 행 39). | **193** (HTML comment 문단). |
| 21 | §12 행 | inventory 147–188 (40). | **149–189** (41). |
| 22 | §13 행 | disposition P 133 (표 머리). | **135**. |
| 23 | §15 곡선 행 | ledger 134–136 (페르소나 행을 포함). | **136–138**. B3 한정은 같은 줄 `:162`. |
| 24 | HTML comment 행 | B2a closes 11/45/51/139/172. 51은 원칙 본문이지 한정 줄이 아님. | **11/45/139/162/172**. |
| 25 | Sibling 절 | sibling-only 100–107. | **99–106**. |
| 26 | Deviations | B2a 40=40 · `wc -w` 8,032 · worker SHA만. | 41=41. `wc -w` **8,117**. auditor SHA `be090778f037e16ba569c98da99294a0572b840a84595d480ef3bb4cef8d3140`. |
| 27 | F1 | 40 = 40. | 41 = 41. 신설 1 + 확장 3을 목록에 반영. |
| 28 | F2 | 40=40. dual dest를 착수 숫자로 적음. | 41=41. homepage / `#05141f` P / live-extract P / 곡선 136–138 / 페르소나 135를 실측으로 갱신. |

Destination SHA `7ca834169b5cd852053dcbdcad82ba4c28298c4234c3cc82f2447d9fb460a412` → `be090778f037e16ba569c98da99294a0572b840a84595d480ef3bb4cef8d3140` (한정 신설·확장 후). 줄 수 DESIGN `wc -l` **594** 불변. provenance 192→**193**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 40개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2d: sibling-only 머리(`provenance.md:97`)는 원장에 남기고 portable fact가 아니라고 적는다. 「이 파일에 없다」고 단언하지 않는다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a 처분 행(`provenance.md:135`)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다.
- `live-extract` DESIGN dest 2 / `components_harvested` DESIGN dest 0 / `tokens.source: live-extract` DESIGN dest 0 은 로그 주장과 맞다.
- Kia Signature dest 0 in `:9` (first at 11) 실측 일치.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 15 / candidates 159. `verdict: PASS`는 대조한 것 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 라벨: 기아 / 기아(起亞) / Movement that inspires / Opposites United / Best Kia / The 2026 EV6 / 견적 내기 / 자세히 보기 / 바로가기 / 렌터카 견적 내기 / 시승 신청 / 신청이 완료되었습니다. / rising from Asia / Rising from Asia / consumer app. — 원본·산출 모두 dest ≥1. 발행 라틴 손실은 안 보인다.
- **B1.** sibling 전용 `0px 24px` / `54.18px` / `840px` / `rgb(0, 0, 238)` / `rgb(210, 210, 210)` / `No designs found` DESIGN dest 0. `64px` DESIGN dest 4는 원본 §5 `64px+` 스케일이지 sibling H2 height `64px`가 아니다. sibling의 h2/섹션 표제 분류가 본문에 사실로 들어온 흔적 없음.
- **D2a.** 식별자(`이준혁`/`최수민`/`박지훈`/`수원`/`강남`/`대전`) · 동기(`compare trims`/`monthly payments`/`first EV`/`booking a test drive`/`recommending Kia`) · 소속(`software engineer`/`Kia fan`) DESIGN/P/L dest 0. Audience는 원본 그룹 `Korean car buyers, EV early adopters, family SUV buyers`만. `이 달의 구매 혜택`은 발행 라벨. gitlab형 동기 잔존·hubspot형 소속 신조어 없음.
- **A1.** 원본 YAML 컴포넌트 7레코드의 `type`/`bg`/`fg`/`radius`/`padding`/`font`/`border`/`use`/`active`가 각 대응 블록에 행으로 있다. button-primary·secondary·white-outlined 8필드, card-vehicle 6필드(padding/font 없음), nav-tab-active 5필드(`active` 포함; bg/radius/padding 없음), nav-tab-inactive 4필드, badge-model 6필드. icook형 키 경로 소실 없음 — 같은 hex가 다른 블록에만 있는 형태 없음.

AUDIT_DONE fixes=28

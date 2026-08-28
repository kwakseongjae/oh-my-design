# HP F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/hp/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/hp/DESIGN.md`
sibling: `web/references/hp/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -oF <pat> <file> | wc -l`. `grep -c` 미사용. 하이픈 선행 값은 `grep -oF --`.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.
날짜: 2026-08-28

발행 1차 UI DS 없음(Brand Central은 타입 가이드). toss형 닫힘 `not HP-authored or a separately published UI specification`을 요구한다. 기존 한정이 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 문법 변형(복수 주어 `are derived editorial implementation inferences`)은 완전형이다.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 1939 Palo Alto garage · Bill Hewlett · Dave Packard · audio oscillators · 2015 HP Inc./HPE 분할 · 2012 HP Blue · Eight Inc. circle mark · HP Simplified → Forma DJR · OMEN · Brand Central / Type Guidelines 2.0 문장 · 발행 카피(`Add to cart`, `Keep Reinventing`, `Let's create` 등).
- **관측 기술** — YAML hex·spacing·rounded·shadow·component type/use/font, §4 본문 치수, 이원 Body `16`/`1.5` vs `14px`/`1.57`, search `8`/`24px`/`9999px` 세 기록.
- **편집적 해석·인과 판단** — 표면 경계·양쪽 inspect 유지·sibling 비승격, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't, 역할명·간격 비그리드, kind/applicability, 보이스 읽기, 폴백≠브랜드 얼굴, 상태행 비부착, 카피 byte-exact/gloss, 카탈로그 로고를 HP 호스트 파일로 읽지 않음, search 두 반지름을 서로 대체하지 않음.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not HP-authored` + `separately published UI specification`)이 없던 자리, 또는 기존 한정이 그 읽기를 이름하지 않던 자리만 고쳤다.

감사 전 본문 완전형: 세 조각 각 **30**. provenance Derived editorial inventory **30행** — 숫자는 맞았으나, 한정이 없던 편집 문장 3건이 원장 밖이었다 (좁은 쪽, E1).

## 수정 목록

1. `DESIGN.md:11` Scope ¶2 — 기존 한정은 unmistakable / precise-approachable / humanist warmth / established-current만 이름했다. 본문에 남은 clean-confident · products-as-the-color · never-compete 읽기를 같은 한정에 접어 넣음(+0 발생).
2. `DESIGN.md:13` Scope ¶3 — 기존 한정은 「서사는 토큰이 아니다」만 이름했다. founder-myth · heritage-anchors · deliberately-stable · continuity-approachability · device-as-hero thesis를 같은 한정에 접어 넣음(+0 발생).
3. `DESIGN.md:200` Font evidence Live computed — 「Both statements are kept」는 증거 처리 판단인데 인접 완전형이 없었다. 같은 칸에 완전형 신설.
4. `DESIGN.md:249` Assets logo — 카탈로그 `simpleicons` 필드를 HP 호스트 파일로 제시하지 않는다는 읽기에 인접 완전형이 없었다. 같은 줄에 완전형 신설.
5. `DESIGN.md:446` Search Input — YAML `8`과 본문 `24px`를 둘 다 두고 서로 대체하지 않는다는 읽기는 Shape `:144`에만 있었고 여기와 인접하지 않았다. 같은 줄에 완전형 신설.
6. `provenance.md` Derived editorial inventory — **30행 → 33행**. Live computed · Assets logo · Search keep-both 3행 추가, Scope ¶2·¶3 서술 확장. 본문 33 = 원장 33.
7. `migration-log.md` YAML identity · colors — `#0096D6` dest **22→20** (실측 `grep -oF`; 한 줄 이중 출현 없음).
8. `migration-log.md` §2 — Semantic 범위 `87–122`→**87–124**, Color rules 포인터 `122`→**124** (122는 Overlay Scrim).
9. `migration-log.md` YAML family · §3 — Live computed 한정 `:200`을 목적지에 보탬.
10. `migration-log.md` YAML spacing/rounded · §4 — Search 기록 `432–450`→**432–456**, keep-both 한정 `:446`을 목적지에 보탬.
11. `migration-log.md` §7 Do's — `59–68`→**59–69** (마지막 항목 `Reserve #0073A8`이 69).
12. `migration-log.md` §8 — 브레이크포인트 `637–641`→**637–642**(Wide), touch `643`→**644**, collapsing `645–650`→**646–651**, image `652`→**653**.
13. `migration-log.md` §10 — register `660–667`→**660–668**, 추가문자열 `669–686`→**670–685**, forbidden `688`→**687**.
14. `migration-log.md` §14 — 11행 `605–618`→**605–619**(Hover가 619), 비부착 문장 `620`→**621**.
15. `migration-log.md` §15 — durations `164–170`→**164–172**(slow/page), easing `172–178`→**174–180**(172는 `motion-page`), signature `184–190`→**184–189**.
16. `migration-log.md` §1 — `:11`·`:13` 한정 확장을 목적지에 보탬.
17. `migration-log.md` identity Assets — `:249` 한정 존재를 보탬.
18. `migration-log.md` F1·F2·Deviations — 워커 30 / SHA `86ce74e4…`를 superseded로 두고 사후 **33** / SHA `ef586278…`.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 33 | 0 | 3 |
| `not HP-authored or a separately published UI specification` | 33 | 1 | 4 |
| inventory 데이터 행 | — | 33 | — |
| `#0096D6` | 20 | 5 | 4 |
| `#0096d6` | 2 | 1 | 2 |
| `https://www.hp.com` | 2 | 6 | 2 |
| `prose-derived` | 4 | 3 | 5 |
| `tokens.shadow.flat` | 2 | 2 | 5 |
| `full: 9999` | 2 | 0 | 6 |
| `9999px` | 6 | 1 | 3 |
| `Kind: non-interactive` | 5 | 0 | 1 |
| `Marcus` / `Priya` / `Robert` / `Austin` / `Toronto` / `Manchester` | 0 | 0 | 0 |
| `#191919` / `forma-djr-micro` / `#3d3d3d` / `43px` | 0 / 0 / 0 / 0 | 3 / 2 / 2 / 2 | 2 / 2 / 2 / 2 |
| `cubic-bezier` | 0 | 3 | 5 |
| `measures 1440px` | 0 | 0 | 2 |
| B3 다섯 종류+게이트+partial 배제 (`DESIGN.md` 182) | 1 | 0 | 1 |

한정 줄: 9, 11, 13, 15, 21, 32, 36, 48, 61, 73, 89, 132, 144, 158, 162, 199, 200, 202, 203, 204, 213, 235, 239, 248, 249, 257, 446, 605, 621, 633, 635, 658, 689.
DESIGN.md 728행 불변(제자리 문장 편집). SHA-256 `ef58627810c073cc37ad592db345d2a559131709ccd534df9823dd614673e89d`.
토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그 기재 `copy-loss` compared **0** / candidates **205**. `verdict: PASS`는 대조한 바늘이 0개라 「카피 보존됨」이 아니다. 발행 카피 손 대조: `Add to cart` DESIGN 6 · `Shop laptops` 4 · `Keep Reinventing` 2 · `Let's create` 2 · `Power through your day` 2 · `Let's get your printer connected` 2 · `Your order is confirmed` 3 · `Oops` 2. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값(`#191919`, `forma-djr-micro`, `#3d3d3d`, `43px`, `34px`) DESIGN.md **0**. `h3` / 섹션 표제 분류 승격 DESIGN **0**. 고치지 않음.
- **D2a.** §13 삭제 행·Omission ledger는 절·인원·필드 종류만. 이름·나이·도시 세 파일 0. Primary tasks는 발행 라벨/표면이지 페르소나 동기 승격이 아님. 다만 로그 A5a 칸이 삭제 대상 전기 문구 `just worked for six years.`를 다시 적음(DESIGN 0 / provenance 0 / migration-log 1) — 재수록. 고치지 않음.
- **E2d.** sibling-only 원장 `:58`은 「this file에 없다」고 단언하지 않는다. `measures 1440px` dest 0 / provenance 0은 그 두 파일에서 참이다. `cubic-bezier`는 DESIGN 0 / provenance 3(삭제 원장)으로 분모를 닫았다. 자기분모 거짓 단언 없음.
- **E2c.** B3 다섯 종류+퍼컴포넌트 게이트+partial-confirmation 배제 전문 DESIGN **182**. 「공식 출처로 검증될 때까지」 DESIGN **0**. 준수 주장 유지.

AUDIT_DONE fixes=18

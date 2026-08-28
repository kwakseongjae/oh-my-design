# Hana F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/hana/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/hana/DESIGN.md`
sibling: `web/references/hana/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -oF <pat> <file> | wc -l`. `grep -c` 미사용. 하이픈 선행 값은 `grep -oF --`.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.
날짜: 2026-08-28

발행 1차 DS 없음(getdesign.md/hana not found; refero no Hana match). toss형 닫힘 `not Hana Bank-authored or a separately published UI specification`을 요구한다. 기존 한정이 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 1971/1991/2015 · 한국투자금융주식회사 · 한국외환은행 · 주식회사 하나은행 · Hana1Q · "Together, we grow" · 라이브 홈 카피(조회/이체/공과금/외환/금융상품, 자세히보기, 하나의 정기예금 등).
- **관측 기술** — 두 표면의 라이브 hex·치수·family·`Primitive type`, YAML use/font/padding/active 바이트, `tokens.shadow.card`, 경로 분리(`spacing.lg: 20` ≠ `rounded.lg: 20`).
- **편집적 해석·인과 판단** — 두 표면 경계, 분위기/Toss·Kakao Pay 대비, 서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, 역할명·민트패밀리 인과·Ink 읽기, 간격 비그리드, kind/applicability, 보이스 읽기, 폴백≠브랜드 얼굴, 상태행 비부착, 카피 byte-exact/gloss.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not Hana Bank-authored` + `separately published UI specification`)이 없던 자리, 또는 기존 한정이 그 읽기를 이름하지 않던 자리만 고쳤다.

감사 전 본문 완전형: 세 조각 각 **27**. provenance Derived editorial inventory **27행** — 숫자는 맞았으나, 한정이 없던 편집 문장 3건이 원장 밖이었다 (좁은 쪽, E1).

## 수정 목록

1. `DESIGN.md:86` Semantic color — 기존 한정은 trust/accent/holding-company/`#f2f9f9`만 이름했다. Deep Teal의 documented mint-family 인과, Ink를 warm dark grey로 읽는 것, ink/dark 동일 hex 두 경로 유지를 같은 한정에 접어 넣음(+0 발생).
2. `DESIGN.md:121` Spacing — 기존 한정은 0px 40px generous tabs만 가리켰다. 단위 없는 스텝을 그리드로 다시 쓰지 않는 읽기와 spacing base ≠ radius를 같은 한정에 접어 넣음(+0 발생).
3. `DESIGN.md:132` Shape — 기존 한정은 conservative 6px / group-reserved 27px만 이름했다. newer-UI 20px · unitless full as future-direction · group-pill/badge/featured가 스케일에 합쳐지지 않는다는 읽기를 접어 넣음(+0 발생). `full: 9999` 바이트는 한정에 다시 넣지 않음(dest 3 유지).
4. `DESIGN.md:145` Elevation — 기존 한정은 flat/border-driven만 이름했다. YAML shadow를 관측된 flat treatment에 합치지 않고 자기 경로에 둔다는 읽기를 접어 넣음(+0 발생).
5. `DESIGN.md:188` Font evidence Declared-only — 「Those fallback members are not the brand face」는 증거 분류인데 인접 완전형이 없었다. 같은 칸에 완전형 신설.
6. `DESIGN.md:445` State record close — 「not attached as visual treatments to the destination controls」는 경계 판단인데 표 뒤라 `:430`과 인접하지 않았다. 같은 줄에 완전형 신설.
7. `DESIGN.md:514` Content close — byte-exact / gloss-beside 규칙은 `:478`이 가리키는 characterization·tone table이 아니다. 같은 줄에 완전형 신설.
8. `provenance.md` Derived editorial inventory — **27행 → 30행**. Declared-only · State-record close · Content gloss 3행 추가, Semantic·Spacing·Shape·Elevation 서술 확장. 본문 30 = 원장 30.
9. `migration-log.md` YAML spacing/rounded 행 — `full: 9999` 경로 `125/132/452` → **125/132/454**. Layout 재진술 `451–452` → **453–454**. Spacing `:121` · Shape `:132` 한정 확장을 보탬.
10. `migration-log.md` §15 durations — `151–156`은 `motion-slow`(`:157`)를 빠뜨렸다 → **151–157**. easing `158–165` → **159–165** (158은 빈 줄).
11. `migration-log.md` §10 — `476–512` / 추가문자열 `494–508` / forbidden `510` / 닫는 줄 `512` / 자세히보기 gloss `483` → **476–514 / 494–510 / 512 / 514 / 484**. `:514` 한정 존재를 보탬.
12. `migration-log.md` §15 B3 — Governance 포인터 `546`(절 제목) → **550**(다섯 종류+게이트 본문).
13. `migration-log.md` YAML family · §3 — Declared-only 한정 `:188`을 목적지에 보탬.
14. `migration-log.md` §14 — 비부착 문장 `:445`와 그 한정을 목적지에 보탬.
15. `migration-log.md` F1·F2·Deviations — 워커 27 / SHA `d970eb43…` / `wc -w` 6,568을 superseded로 두고 사후 **30** / SHA `8f582de4…` / `wc -w` **6758**.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 30 | 0 | 3 |
| `not Hana Bank-authored or a separately published UI specification` | 30 | 1 | 4 |
| inventory 데이터 행 | — | 30 | — |
| `#00a39f` | 13 | 5 | 3 |
| `#f2f9f9` | 4 | 0 | 3 |
| `#465e6f` | 2 | 3 | 4 |
| `full: 9999` | 3 | 0 | 4 |
| `0px 2px 8px rgba(0,0,0,0.08)` | 1 | 0 | 3 |
| `measures 1440px` | 0 | 0 | 1 |
| `Kind: non-interactive` | 1 | 0 | 1 |
| `이미영` / `박정훈` / `김상민` / `부산` | 0 | 0 | 0 |
| `내집마련 더블업` / `PDF/MP3/Annual Report` / `304px` | 0 / 0 / 0 | 2 / 3 / 2 | 2 / 2 / 1 |
| `cubic-bezier` | 0 | 3 | 5 |
| B3 다섯 종류+게이트+partial 배제 (`DESIGN.md` 167) | 1 | 0 | 1 |

한정 줄: 9, 11, 13, 15, 21, 31, 35, 47, 57, 70, 86, 121, 132, 145, 149, 185, 188, 189, 190, 198, 216, 224, 225, 232, 430, 445, 456, 458, 478, 514.
DESIGN.md 552행 불변(제자리 문장 편집). SHA-256 `8f582de439dcf2e2befc1c547914c197e25262bcf1779dd8919d6a29b0b96526`.
토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그 기재 `copy-loss` compared **31** / candidates **186**. `verdict: PASS`는 대조한 31개 바늘에 손실 없음. 발행 카피 손 대조: `자세히보기` DESIGN 2 · `Together, we grow` 3 · `Hana1Q` 2 · `하나의 정기예금` 3 · `페이지 요청 오류` 2 · `하나 민트색` 2. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값(`#009591`, `line-height: 18px`, `200px`, `304px`, `258px`, `내집마련 더블업`, `PDF/MP3/Annual Report`) DESIGN.md **0**. `h3` / `Feature H3` / 구조 관측 승격 DESIGN **0**. 고치지 않음.
- **D2a.** §13 삭제 행·Omission ledger는 절·인원·필드 종류만. 이름·나이·도시 세 파일 0. Primary tasks는 발행 라벨/표면이지 페르소나 동기(`하나원큐` / `unsales-y` / `overseas supplier` / `FX expertise`) 승격이 아님(DESIGN 0).
- **E2d.** `measures 1440px` dest 0 / provenance 0은 그 두 파일에서 참이다. 로그는 측정 mention만 담고 「세 파일 어디에도 없다」고 단언하지 않는다. `cubic-bezier`는 DESIGN 0 / provenance 3(삭제 원장)으로 분모를 닫았다. 자기분모 거짓 단언 없음.
- **E2c.** B3 다섯 종류+퍼컴포넌트 게이트+partial-confirmation 배제 전문 DESIGN **167**. 「공식 출처로 검증될 때까지」 DESIGN **0**. 준수 주장 유지.

AUDIT_DONE fixes=15

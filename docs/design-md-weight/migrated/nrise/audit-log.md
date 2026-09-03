# nrise 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/nrise/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/nrise/DESIGN.md`
검증 sibling: `web/references/nrise/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not NRISE-authored or a separately published UI specification`을 요구한다. 기존 30건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 30 / 원장 30. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:13`의 한정은 서사를 비토큰으로 분류하는 판단만 이름하고 emotional-benefit / deliberate stance / profitability narrative를 빠뜨렸다. Elevation `:155`의 YAML `0px` spread keep-both는 `:157` 한정(near-shadowless만)에 이름되지 않았다. Assets `:240`의 스크린샷 장식 금지는 `:239` 파비콘 한정에 인접하지 않았고 완전형이 없었다. Capture `:251`은 destination 역할은 이름하고 C4 컨테이너 kind/map 생략은 빠뜨렸다.

문장 분류: 브랜드 발행 사실(사명·제품명·라이브 카피·YAML 값·§표 수치) / 관측 기술(computed hex·Pretendard·`box-shadow: none`) / 편집적 해석·인과 판단(키 비병합, keep-both, 분위기, 승격 게이트, 페르소나 삭제 읽기, 장식 금지). 세 번째 부류만 수정 대상.

## 수정 목록 (11건)

### B2a — 인접 한정 (본문 4건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:13` — Scope ¶3 | emotional-benefit 프레이밍 · safety deliberate stance · 흑자 헤드라인의 두 제품 profitability 읽기는 세 번째 부류. 기존 한정은 서사=비토큰 분류만. | 기존 완전형에 세 읽기를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:157` — Elevation | YAML floating-shadow(첫 레이어 trailing `0px`)와 Level 2 / 컴포넌트 표기(그 `0px` 없음) keep-both는 세 번째 부류. `:157`은 near-shadowless만. | 기존 완전형에 keep-both를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:240` — Assets 스크린샷 | `Do not replace them with invented brand-color decoration`은 세 번째 부류. `:239`는 파비콘 pointer만. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:251` — How applicability | 컨테이너에 interaction evidence가 없을 때 kind·map을 생략하는 판단은 세 번째 부류. 기존 한정은 destination/scroll 역할과 YAML keep-both만. | 기존 완전형에 C4 생략을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference from the verified surfaces` 31, `not NRISE-authored or a separately published UI specification` 31. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 15, 21, 31, 35, 48, 58, 71, 88, 129, 145, 157, 161, 188, 196, 200, 202, 203, 204, 211, 215, 230, 239, 240, 251, 414, 446, 450, 477.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | Scope ¶3 행 | 비토큰 분류만. 본문 `:13`이 이제 세 읽기도 이름한다. | emotional-benefit / deliberate stance / profitability narrative를 행에 추가. |
| 6 | Elevation 행 | near-shadowless만. 본문 `:157`이 이제 shadow keep-both도 이름한다. | YAML `0px` / Level 2 표기 keep-both를 행에 추가. |
| 7 | Assets 스크린샷 행 | 없음. 본문 `:240` 신설. | 행 신설. |
| 8 | Capture 행 | destination/YAML keep-both만. 본문 `:251`이 이제 C4 생략도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **30 → 31**. 본문 31 = 원장 31 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (3건)

본문이 아니라 로그만 고침. 본문 수정 후 dest를 `grep -oF | wc -l`로 재실측했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | 패스 1 | 완전형 짝 **30** / 원장 **30**. 감사 후 본문·원장 31. | **31** / **31**. 목록에 서사 읽기 · Elevation keep-both · Assets 스크린샷 · C4를 반영. |
| 10 | F2 dest `derived editorial implementation inference from the verified surfaces` | DESIGN dest 30 (착수). 신설 1건 후 31. | DESIGN dest **31** · provenance dest **0**. |
| 11 | F2 dest `not NRISE-authored or a separately published UI specification` | DESIGN dest 30 (착수). 신설 1건 후 31. | DESIGN dest **31** · provenance dest **1**. |

나머지 F2 dest 표 바늘은 재실측 불변: `#ff0056` 10/8, `#222222` 11/14, `transition properties` 2/0, `live-extract` 0/2, `cubic-bezier` 0/4, `(주)엔라이즈` 0/4.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 30개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Principles / Application rules / Avoid / Motion rules / Typography rules 항목은 절 머리 완전형이 인접한다.
- 컴포넌트 블록의 `is not spacing` 재서술은 Shape 한정이 「local control radii on their components」를 이미 이름한다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` `transition properties` dest 2, `animation name` dest 2, `reduced-motion behavior` dest 2. 준수 주장 유지.
- E2d: sibling-only 머리(`provenance.md:163`)는 「portable body as tokens」를 분모로 둔다. 「세 파일 어디에도 없다」고 단언하지 않는다. 로그의 DESIGN dest 0 측정은 DESIGN.md를 분모로 둔다.
- D2a 처분 행(`provenance.md` Omission · 로그 §13)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다. 본문 `김하늘`/`정우진`/`이서연`/`서울`/`경기`/`부산` 각 0. `young professional` / `Safety-conscious` / `express and discover` 각 0. `numbers game`은 Forbidden register(원본 §10) dest 1 — 페르소나 동기 승격이 아니다.
- A1 키 경로: YAML `tokens.components.<id>.<field>` 8 블록 전 필드를 해당 컴포넌트 블록 행으로 대조. 소실 0. 값 grep이 아니라 블록 내부 행으로 확인.
- `live-extract` DESIGN dest 0 / `components_harvested` DESIGN dest 0 / `cubic-bezier` DESIGN dest 0 은 로그 주장과 맞다.

## 범위 밖 관찰

- **A5a.** 로그 머리: 게이트 copy-loss `compared`/`candidates` 미집계. 손 스윕 발행 카피 29 / 미생존 0. `verdict: PASS`를 이 산출에서 재실행하지 않음 — 분모 미집계를 카피 보존으로 읽지 말 것. 라틴 바늘 `HOME`/`PRODUCT`/`CULTURE`/`CAREER`/`MISSION`/`HISTORY`/`NEWS`/`WIPPY`/`NRISE`/`Quat`/`TOP` 는 DESIGN dest 각 ≥1. `콰트` SRC 5 / DES 4, `Quat` SRC 3 / DES 2 — 둘 다 ≥1이라 손실이 아니다. 라틴 카피 손실 눈에 띄지 않음.
- **B1.** sibling 전용 `31.05px` / `rgba(0, 0, 0, 0.85)` / `line-height: normal` / `0px 0px 20px 20px` / `(주)엔라이즈` / `(주)엔라이즈 채용` DESIGN dest 0. sibling `H3` 분류는 본문에 승격되지 않음. 본문 `H1/H2/H3` dest 1은 원본 §2 Ink 문장(`every headline (H1/H2/H3)`) SRC 1과 같다.
- **#ffffff 귀속 분리.** `tokens.colors.canvas`와 `tokens.colors.on-dark` 같은 hex·두 키. Semantic 한정과 claim ledger가 비해합을 적는다. 원장에 있으므로 E1 추가 수정 없음(웨이브 39 krafton형).
- **모션 커브.** 원본 §15 `cubic-bezier` 3종은 본문 0 / provenance 4. 역할·duration만 본문에 남김(웨이브 39 T2 관례). 합성하지 않음.
- **웨이브 40 열 구조.** 원본 색 절에 토큰명 열(`--*-color-*`)이 없다. 단계 귀속 수식어 소실 없음.

AUDIT_DONE fixes=11

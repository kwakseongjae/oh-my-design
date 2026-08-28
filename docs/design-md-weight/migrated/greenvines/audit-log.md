# greenvines F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/greenvines/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/greenvines/DESIGN.md`
sibling: `web/references/greenvines/.verification.md` (`find` + `test -f`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -o <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 브랜드스토리·clean-beliefs·benefit-report 원문, 창립·B Corp·FAITH 수치, 보이스 샘플 6건과 CTA/푸터 라벨.
- **관측 기술** — 라이브 hex·px·weight·unitless line-height·`box-shadow: none`·primitive type·패딩, 표면 귀속.
- **편집적 해석·인과 판단** — 분위기·역할 이름·슬롯 묶기·증거 class 분류·fallback 규칙·applicability 판정·레이아웃 읽기.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not Greenvines-authored` + `separately published UI specification`)이 없던 자리만 고쳤다. 발행 1차 DS가 없으므로 toss형 예문 전제가 성립한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

감사 전 본문 완전형: `derived editorial implementation inference` **22** / `not Greenvines-authored` **22** / `separately published UI specification` **22**.
provenance inventory **22행** — 본문 22와 숫자는 맞았으나, 한정이 없던 편집 문장 4건이 원장 밖이었다 (좁은 쪽).

## 수정 목록

1. `DESIGN.md` Scope ¶3 (`:13`) — 기존 한정 주어에 `most radical recorded statement` 편입. 새 인스턴스 없음.
2. `DESIGN.md` Scope ¶4 (`:15`) — 한정을 refuse/embrace 문장 뒤로 옮기고 주어에 narrative-not-token·refuse/embrace pairing을 편입. 새 인스턴스 없음.
3. `DESIGN.md` Semantic color `#e67600` (`:117`) — 두 번째 accent 역할 보류에 인접 완전형 신설.
4. `DESIGN.md` Spacing (`:121`) — 여덟 키를 radius scale로 읽지 않는 슬롯 구분에 인접 완전형 신설.
5. `DESIGN.md` Font evidence (`:170`) — 여섯 행 증거 class 분류에 인접 완전형 신설.
6. `DESIGN.md` Family (`:186`) — fallback을 브랜드 페이스로 제시하지 않는 규칙에 인접 완전형 신설.
7. `DESIGN.md` Layout (`:463`) — 기존 한정 주어에 `vertical rhythm of image, manifesto, image` 편입. 새 인스턴스 없음.
8. `provenance.md` Derived editorial inventory — **22행 → 26행**. `#e67600` · Spacing · Font evidence · Family 4행 추가, Scope ¶3·¶4·Layout 주어를 본문과 맞춤. boundary 표에서 B2a로 올린 narrative-not-token / Spacing / Font evidence 행을 제거. 본문 26 = 원장 26 (E1 1:1).
9. `migration-log.md` rounded — `grep -oF '9999'` DESIGN 2는 `9999px` 부분문자열. 목적지를 `full: 9999` **1** · `9999px` **1**로 교정 (키 경로 표 포함).
10. `migration-log.md` `box-shadow: none` — provenance 2차 목적지를 raw samples에서 Evidence class로 교정. raw samples는 콜론 없는 `box-shadow \`none\``이라 정확 문자열 0.
11. `migration-log.md` F1·E2c·SHA — 워커 22 / SHA `4a9e3b8d…` / 542행을 superseded로 두고 사후 26 / SHA `58baa2b7…` / 544행을 적음.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 26 | 2 | 1 |
| `not Greenvines-authored` | 26 | 1 | 1 |
| `separately published UI specification` | 26 | 1 | 2 |
| inventory 데이터 행 | — | 26 | — |
| `林佳穎` / `陳威廷` / `張雅婷` / `台北` / `新竹` / `台中` | 0 | 0 | 0 |
| `full: 9999` | 1 | 0 | 5 |
| `9999px` | 1 | 0 | 6 |
| `box-shadow: none` | 2 | 1 | 3 |
| `live-extract` | 0 | 1 | 3 |
| `1440×900` | 0 | 4 | 5 |
| `cubic-bezier` | 0 | 3 | 5 |
| `#002d18` | 28 | 8 | 5 |
| `#e67600` | 3 | 2 | 2 |
| B3 다섯 종류+게이트 (`transition properties`) | 2 | 0 | 1 |
| `partial confirmation` | 1 | 0 | 1 |

한정 줄: 9, 11, 13, 15, 21, 31, 35, 48, 58, 71, 88, 117, 121, 128, 138, 142, 170, 186, 209, 218, 226, 437, 463, 465, 480, 501.
DESIGN.md 542→544 (Font evidence 한정 삽입). SHA-256 `58baa2b7be56a0eb98de976fb3a3ea34e5d5dbcc6ad9fa2bbe752ed948fa8607`.
게이트 `--gate-only` `verdict: PASS`, `problems: []`, `copy-loss` coverage 33/181.

## 범위 밖 관찰

- **A5a.** `coverage` compared **33** / candidates **181**. `verdict: PASS`는 대조한 33개 바늘에 손실 없음. 발행 라틴 손 대조: `More is Less. 多，即是少。` DESIGN 1 · `The more we know, the less we need.` 1 · `Best for the World` 1 · `1% for the Planet` 2. 원본 §11 영어 괄호 gloss `If skin only needs water and oil…`는 DESIGN 0 — 원본이 브랜드스토리 원문을 중국어로 닫고 영어는 읽기 보조. 발행 라틴 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값(`46px`, `1px solid rgb(200, 70, 0)`, helper `15px`/`28px`, body `line-height 20px`, `1440×900`, frequency counts, `726 B`, 전체 `document.title`)과 구조 관측(`H3`)은 DESIGN.md **0**. 값·분류 침투 없음. 고치지 않음.
- **D2a.** 삭제 처분 행은 인원·필드 종류만 적고 이름·나이·도시를 재열거하지 않음. 세 파일 식별자 0. Primary tasks는 표면 라벨이지 페르소나 동기(`無乳液實驗` / `漢神洲際` / `10-step`) 승격이 아님.
- **E2d.** sibling-only 표의 부재 주장은 portable body를 분모로 하고 항목은 원장에 보관. `s2/favicons` / `live-extract` / `1440×900` 단언은 DESIGN.md에 대해 닫혀 있고 DESIGN 실측 0. 자기분모 거짓 없음.

AUDIT_DONE fixes=11

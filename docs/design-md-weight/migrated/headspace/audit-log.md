# headspace F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/headspace/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/headspace/DESIGN.md`
sibling: `web/references/headspace/.verification.md` (`find` + `test -f`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -o <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.

발행 1차 DS가 없으므로 toss형 예문 전제가 성립한다. 기존 25건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — 2010 창업·Puddicombe/Pierson·Ebb·4,000 organizations·2024 Italic Studio / Colophon, 라이브 라벨과 보이스 샘플, rebrand 인용.
- **관측 기술** — hex·px·weight·unitless line-height·`box-shadow: none`·primitive type·패딩·표면 귀속.
- **편집적 해석·인과 판단** — 분위기 읽기·역할 이름·슬롯 묶기·증거 class 분류·fallback·slug 포인터·ratio/px 병기·applicability 판정·레이아웃 읽기.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not Headspace-authored` + `separately published UI specification`)이 없던 자리만 고쳤다.

감사 전 본문 완전형: `derived editorial implementation inference` **25** / `not Headspace-authored` **25** / `separately published UI specification` **25**.
provenance inventory **25행** — 본문 25와 숫자는 맞았으나, 한정이 없던 편집 문장 2건(License · Type roles)과 주어가 좁은 기존 한정 2건(Family · Assets)이 원장 밖이거나 좁았다 (좁은 쪽).

## 수정 목록

1. `DESIGN.md` Font evidence License (`:190`) — 파운드리 관계 ≠ 배포 라이선스 부여 읽기에 인접 완전형 신설.
2. `DESIGN.md` Type roles (`:213`) — unitless 비와 괄호 px 환산을 서로 대체하지 않는 읽기에 인접 완전형 신설.
3. `DESIGN.md` Family (`:196`) — 기존 한정 주어에 Declared-only 행의 fallback 읽기를 편입. 새 인스턴스 없음.
4. `DESIGN.md` Assets (`:230`) — 기존 한정 주어에 simpleicons slug를 호스팅 파일이 아닌 identity pointer로 읽는 판단을 편입. 새 인스턴스 없음.
5. `provenance.md` Derived editorial inventory — **25행 → 27행**. License · Type roles 2행 추가, Family·Assets 주어를 본문과 맞춤. 본문 27 = 원장 27 (E1 1:1).
6. `migration-log.md` homepage URL — `DESIGN.md` 9/23은 `/subscriptions` 경로를 homepage로 센 것. 목적지를 `DESIGN.md` **9** + provenance 13/41/47로 교정.
7. `migration-log.md` `#ffffff` on-primary/surface — 95/101 → **95/100** (101은 Body Grey).
8. `migration-log.md` `ink-pure` `#000000` — 104(빈 줄) → **103**.
9. `migration-log.md` `full: 9999` — 125/131/136/529는 콜론 없는 `full 9999`와 다른 줄을 섞음. 콜론형 **132/134/331**, 스텝 `full 9999` **125/529**.
10. `migration-log.md` play `50%` — 129/325 → **131/326/331** (325는 `Text: #ffffff`).
11. `migration-log.md` License-row 한정 — 186/196은 Official product-use와 Family. 실측 186/190/213/196으로 교정.
12. `migration-log.md` Italic Studio URL — `DESIGN.md` 9만 적혀 2차 목적지 641과 provenance 76이 빠짐. **9/641 + 43/49/76**.
13. `migration-log.md` inventory — 175–199 (25) → **175–201 (27)**.
14. `migration-log.md` sibling 불일치 — provenance 128(spacing 키 문장) → **122**.
15. `migration-log.md` F1·F2·Deviations — 워커 25=25를 superseded로 두고 사후 27=27 / SHA `666273e5…` / 641행을 적음.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 27 | 1 | 2 |
| `not Headspace-authored` | 27 | 2 | 2 |
| `separately published UI specification` | 27 | 2 | 2 |
| inventory 데이터 행 | — | 27 | — |
| `Maya Robinson` / `David Okafor` / `Priya Nair` / `Janet Mills` | 0 | 0 | 0 |
| `full: 9999` | 3 | 3 | 2 |
| `full 9999` | 2 | 0 | 2 |
| `50%` | 5 | 2 | 2 |
| `box-shadow: none` | 2 | 3 | 2 |
| `https://italic-studio.com/projects/headspace-rebrand/` | 2 | 3 | 1 |
| `14.3px` | 0 | 2 | 2 |
| `AI guidance` | 0 | 2 | 3 |
| `transition properties` (B3 다섯 종류) | 2 | 0 | 1 |

한정 줄: 9, 11, 13, 15, 27, 32, 45, 49, 59, 72, 89, 121, 136, 147, 151, 186, 190, 196, 213, 222, 230, 241, 505, 537, 539, 561, 600.
DESIGN.md 641행 불변. SHA-256 `666273e5da6969f5cbdc204c0e3413db75ee112c83fe1bf6da44244468190660`.
게이트 `--gate-only` `verdict: PASS`, `problems: []`, `copy-loss` coverage 0/209.

## 범위 밖 관찰

- **A5a.** `coverage` compared **0** / candidates **209**. `verdict: PASS`는 대조한 바늘이 없어 기계가 본 손실이 없다는 뜻일 뿐이다. 발행 라틴 손 대조: `Try for free` DESIGN 7 · `Be kind to your mind` 3 · `The mental health app for every moment` 1 · `Headspace-ified` 1 · `We built on the foundation of the brand to evolve it, not re-invent it.` 2. 원본이 더 많은 `Be kind to your mind`(5) · `dreary sea of blues and greys`(4) · `flex from playful to clinical`(3) · `destigmatise seeking care`(4)의 초과분은 HTML comment. 발행 라틴 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 값(`14.3px`, `12.1px`, `78px`, `213px`, `175px`, `128px`, `AI guidance`, `Annual - 14 days free`, `Always-there support`, `Our content`, `Members are enjoying`)과 구조 관측(`hero H2`, `feature H3`, `footer H4`)은 DESIGN.md **0**. 본문 `some hero H3s`(`:103`)는 원본 §2 Pure Black 행의 원문이지 sibling 표제 분류가 아님. 값·분류 침투 없음. 고치지 않음.
- **D2a.** 삭제 처분 행은 인원·필드 종류만 적고 이름·나이·도시를 재열거하지 않음. 세 파일 식별자 0. Primary tasks는 표면 라벨이지 페르소나 동기(`Sleepcasts` / `online therapy pathway` / `Ebb AI companion` / `3,000-person`) 승격이 아님.
- **E2d.** sibling-only 표의 부재 주장은 portable body를 분모로 하고 항목은 원장에 보관. 곡선 세 값은 `DESIGN.md` 161에 생략으로 이름이 있고 「토큰으로 승격하지 않음」으로 닫혀 있다. 「세 파일 어디에도 없다」형 자기분모 단언 없음.

AUDIT_DONE fixes=15

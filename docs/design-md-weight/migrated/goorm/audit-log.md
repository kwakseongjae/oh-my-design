# goorm F3 audit — B2a · E2

대상: `docs/design-md-weight/migrated/goorm/{DESIGN.md,provenance.md,migration-log.md}`
원본: `web/references/goorm/DESIGN.md`
sibling: `web/references/goorm/.verification.md` (`find`로 존재 확인 후 전문 판독)
규칙: B2 · B2a · E1 · E2 · E2a–c (추가 조건 D2a · E2d · B1 보고 · A5a 보고)
계수: 파일별 `grep -o <pat> <file> | wc -l`. `grep -c` 미사용.
워커 보고는 입력으로 쓰지 않음. 토큰 값 · 컴포넌트 표 · applicability · 구조 · 원본 무변경.

## 문장 분류 (B2a)

portable `DESIGN.md` 전 문장을 세 부류로 읽었다.

- **브랜드 발행 사실** — goorm.co / Vapor UI 라이브 카피, TechBlog 미션 문장, 원본이 공공 사실로 닫은 2013·구독 수치, Vapor UI가 공급하는 컴포넌트 토큰.
- **관측 기술** — 측정값, 토큰 스텝, primitive type, 원본이 적은 use/font/padding 바이트, 표면 귀속.
- **편집적 해석·인과 판단** — 분위기·거부/포용 읽기, 역할 이름, 그룹핑, applicability 판정, 파비콘·서체 증거 분류, 브레이크포인트를 선언으로 읽는 문장.

세 번째 부류인데 인접 완전형 한정(`derived editorial implementation inference` + `not goorm-authored` + `separately published UI specification, including the published Vapor UI documentation`)이 없던 자리만 고쳤다. Vapor UI가 발행되어 있으므로 toss형 예문의 「발행 사양 부재」 주장을 요구하지 않았다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

감사 전 본문 완전형: `derived editorial implementation inference` **24** / `not goorm-authored` **24** / `including the published Vapor UI documentation` **24**.
provenance `Portable derived-editorial scope` **24행** — 본문 24와 숫자는 맞았으나, 한정이 없던 편집 문장 2건이 원장 밖이었다 (좁은 쪽).

## 수정 목록

1. `DESIGN.md` Scope ¶3 (`:13`) — 「Those sentences are narrative context」를 기존 한정의 주어에 `narrative-not-token classification`으로 편입. 새 인스턴스 없음.
2. `DESIGN.md` Font evidence · Official product-use (`:173`) — 라이브 문서를 별도 타이포 사양으로 읽지 않는 분류에 인접 완전형 한정 신설.
3. `DESIGN.md` How applicability is decided here (`:242`) — 기존 한정의 주어를 `role-based decision procedure`까지 넓힘. 새 인스턴스 없음.
4. `DESIGN.md` Layout & Platforms 브레이크포인트 머리 (`:434`) — 「declared behavior rather than an observation」에 인접 완전형 한정 신설.
5. `provenance.md` Portable derived-editorial scope — **24행 → 26행**. Official product-use · breakpoints 2행 추가, Scope ¶3·applicability 주어를 본문과 맞춤. 본문 26 = 원장 26 (E1 1:1).
6. `provenance.md` sibling-only 목록 — `100개 추가`를 「source에 없다」로 적은 것을 철회. 원본 HTML comment **1** (visible §4 **0**). mention/use를 문장에 적음.
7. `migration-log.md` YAML identity — `구름` 2차 목적지 `DESIGN.md` 467 → **466** (467은 빈 줄).
8. `migration-log.md` YAML identity — `#2a72e5` provenance 121 → **139** (121은 Claim 표 머리, hex 없음).
9. `migration-log.md` YAML metadata — producer string `provenance.md` 38 → **37** (38은 빈 줄). A1c 날짜 31–36 → **32–35**.
10. `migration-log.md` Footer — Freshness 28–38 → **28–37**; Tier 1 49–55 → **50–54**; Conflicts 40 → **39**.
11. `migration-log.md` §6 — `focus-visible` 원장 포인터 140 → **139**.
12. `migration-log.md` §11 — narrative-not-token 포인터 141 → **140**.
13. `migration-log.md` §14 C2 — 마케팅 CTA `not-applicable` 339–343 → **341–344** (339는 hover applicable).
14. `migration-log.md` sibling 절 — `100개 추가` 2차 목적지를 sibling-only에서 빼고 원본 comment 1 / DESIGN **0**으로 기록. 전사 범위 90–97 → **90–98**.
15. `migration-log.md` F1·SHA — 워커 24/SHA `f5124343…`를 superseded로 두고 사후 26 / SHA `28ce80b0…` / `wc -w` 6,689를 적음.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 26 | 1 | 3 |
| `not goorm-authored` | 26 | 1 | 4 |
| `including the published Vapor UI documentation` | 26 | 1 | 1 |
| inventory 데이터 행 | — | 26 | — |
| `한지우` / `박도현` / `이서연` / `대전` / `판교` / `서울` | 0 | 0 | 0 |
| standalone `999px` (9999 제외) | 0 | 3 | 3 |
| `100개 추가` | 0 | 2 | 2 |
| `cubic-bezier` | 0 | 3 | 3 |
| `live-extract` | 0 | 1 | 1 |
| B3 다섯 종류+게이트 전문 (`DESIGN.md` 160) | 1 | 0 | 1 |

한정 줄: 9, 11, 13, 19, 28, 32, 45, 56, 69, 87, 121, 133, 146, 150, 173, 178, 185, 210, 214, 222, 242, 418, 432, 434, 456, 468.
DESIGN.md 526행 불변. SHA-256 `28ce80b0200b9cc8efffb404f060981a7ce3f737563df21a9ca2308b01fca3bb`.

## 범위 밖 관찰

- **A5a.** 로그 기재 `coverage` compared **18** / candidates **219**. `verdict: PASS`는 대조한 18개 바늘에 손실 없음. 발행 라틴 손 대조: "Superpowers, for everyone" DESIGN 3 · "Start AX with goorm" 1 · "We are creating an ecosystem centered on developer growth" 3 · "anyone can become a developer" 1 (대소문자 다른 Principles 행 별도). 라틴 발행 카피 손실은 눈에 띄지 않음. 원본 §8 `comfortably tappable`은 DESIGN 0 / provenance 0 — 발행 카피가 아니라 원본 편집 gloss. 고치지 않음.
- **B1.** sibling 전용 값(`미션 완료`, `Kickstart your project`, `Instantly customize your theme`, `1.3.0`, standalone `999px`, `×191`, component-page URL, frequency rank)과 구조 관측(`h3`)은 DESIGN.md **0**. `100개 추가`는 sibling-only가 아니라 원본 HTML comment 1 — 본문 승격은 없음. 고치지 않음 (원장 분류만 위 14에서 교정).
- **D2a.** 삭제 처분 행은 필드 종류만 적고 이름·나이·도시를 재열거하지 않음. 세 파일 식별자 0. Primary tasks는 표면 모듈/라벨이지 페르소나 동기 승격이 아님.
- **E2d.** `focus-visible` 부재 단언은 원본 파일에 대해 닫혀 있고 원본 실측 0. `measures 1440px` 부재 단언은 DESIGN.md에 대해 닫혀 있고 DESIGN 실측 0. 자기분모 거짓 없음.
- **E2c.** B3 준수 주장은 `DESIGN.md` 160에 transition properties · animation name · duration · easing · reduced-motion + per-component 게이트 전문이 있어 유지.

AUDIT_DONE fixes=15

# Gogoro 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/gogoro/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/gogoro/DESIGN.md`
검증 sibling: `web/references/gogoro/.verification.md` — `find web/references/gogoro -type f`는 `DESIGN.md`만 반환. `test -f` 직접 경로도 부재. dotfile은 `ls`/`*`에 안 보이므로 `find`+직접 경로가 측정.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 없음. B2a는 toss 완전형(`derived editorial implementation inference` / `not Gogoro-authored` / `separately published UI specification`)으로 닫힌 문장만 인정.

## 수정 목록 (6건)

### B2a — 인접 한정 범위가 해당 해석을 못 덮음 (본문 1건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:134` — Foundations / Elevation | "Gogoro's depth philosophy… mostly flat, occasionally luminous"는 원본 문장(관측·출처 귀속). 그 다음 "binding elevation rule for uninspected overlays"만 한정이 가리켰다. 바로 아래 glow bullet(`:138`)의 "the only lighting in the system, reserved for energy moments"는 값 역할에 대한 **편집적 읽기**인데, 기존 한정이 그 읽기를 이름 붙이지 않았다. Semantic color 머리의 "characterizes a value" 부류 한정이 Elevation에는 없다. 토큰 값·표는 관측. | 기존 완전형 한정 문장에 glow 읽기를 접어 넣었다: "…and reading the electric-blue / cyan glows as the only lighting in the system and as reserved for energy moments…". 새 한정 문장 아님(발생 수 +0). `#000000` → `#141719` → `#323237` 값 불변. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 24, `not Gogoro-authored` 24, `separately published UI specification` 24. `provenance.md`의 같은 절 인용 1회는 색인이지 한정이 아니다.

### E1 — provenance derived 범위가 본문과 어긋남 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 2 | `provenance.md` Derived-inference ledger 행 15 (Elevation) | 원장 24행 = 본문 24(착수 때도 1:1, 좁은 쪽 아님). 다만 행 15가 본문이 이제 덮는 glow 읽기를 적지 않아 **실제보다 좁게** 서술됐다. | 행 15 Qualified material에 glow 읽기를 본문과 같이 적음. 실측 24 = 원장 24. |

### E2 / E2a / D2a — 로그 목적지·계수·삭제 표기 (4건)

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `migration-log.md` YAML spacing/rounded 행 | 로그가 `full: 9999` (DESIGN 2 / provenance 2)로 적음. 실측 `full: 9999`: DESIGN **1** / provenance **2**. bare `9999`: DESIGN 2 / provenance 2. 로그가 적은 문자열의 계수가 본문과 불일치. | `full: 9999` DESIGN 1 / provenance 2와 bare `9999` DESIGN 2 / provenance 2로 갈라 적음. 본문 값 불변. |
| 4 | `migration-log.md` Footer primary-color green correction 행 | 로그가 분리 → provenance 단일. 실측 `accent green`: DESIGN **1** / provenance **2**. 본문 Semantic color에 "That correction is ledger context, not a token"이 있다. 한 값이 두 곳인데 로그가 한 곳만 적음 (E2a). | 이중 목적지: DESIGN Semantic color + provenance Identity / Freshness. 초록 hex는 승격되지 않음(본문 유지). |
| 5 | `migration-log.md` Footer Verified / Tier 행 | 로그가 Verified를 provenance 단일처럼 적음. 실측 생산자 문자열 `Verified:` DESIGN **0** / provenance **1**(맞음). 그러나 달력일 `2026-05-19`는 DESIGN **1**(Scope 검사일) / provenance **11**. 날짜 값이 두 곳인데 2차 목적지가 없음 (E2a). | `Verified:`는 provenance-only로 유지하고, `2026-05-19`를 DESIGN Scope + provenance Freshness 이중으로 적음. |
| 6 | `migration-log.md` §13 삭제 행 | 삭제 처분 행이 `Jia-Hao` / `家豪` / `Wei-Lin` / `Taichung`을 식별자로 재수록 (D2a). "DESIGN 0 / provenance 0"만 단언해 로그 자신을 분모에 넣지 않음. 수정 전 실측: 네 문자열 DESIGN 0 / provenance 0 / log 1. 본문 Primary tasks는 모듈·라벨에서 왔고 §13 전기 승격은 없음. | 무식별 표기: "§13 three entries (names, ages, cities, biographies) dropped… this log row does not restate them." 수정 후 세 파일 각 0 (`Jia-Hao` / `家豪` / `Wei-Lin` / `Taichung` / `Taipei` / `Mr. Lin`). |

Destination SHA `e845778d…` → `6c4ac04b…` (Elevation 한정 확장 후). 줄 수 DESIGN 502 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 머리 "These six items…" — 발행 DS 없는 브랜드. toss 완전형. 문법 변형 아님, 그대로 유효.
- Motion 절 머리 한정 — durations·easing names/roles·spring stance·signature motions·reduced-motion을 이미 완전형으로 덮음. Charge pulse "only ambient motion"은 이 범위 안.
- Semantic color "calmer tone" / "clean-room" — `:87` "Where a line also characterizes a value" 부류 한정이 덮음.
- Family "Do not substitute a generic system sans" — 카탈로그 unknown-means-absent 규칙이지 브랜드 인과 판단이 아님. Avoid 쪽 동일 금지는 `:71` 한정 아래.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/gogoro/DESIGN.md` — 읽기만.
- B3 준수 주장 — DESIGN Motion이 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담음 (E2c 유지). `cubic-bezier` DESIGN 0 / provenance 6.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다. 세 번째 부류 24곳은 착수 시 이미 인접 완전형 한정이 있었고, Elevation glow 읽기만 기존 한정이 이름을 안 붙여 그 자리에서 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 1 / candidates 241 (0.4%). `verdict: PASS`는 대조한 1개에 대한 것이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(`Ride Smarter. Refuel in seconds.`, `A ride like no other.`, `Gogoro Smartscooter® — A ride like no other.`, `LEARN MORE`, `DISCOVER MORE`, `Find a GoStation`, `Work With Us`, `See Case Study`, `로그인 및 회원가입`, `網路`, `電池`, `里程`, `524,000+`, `7 billion km`, `Swap could not complete`, `Gogoro believes`): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. `charged.` / `cheap.` / `refuel in seconds`는 latin-copy-audit 후보이고 발행 라벨이 아니다.
- **B1.** sibling 파일 부재(`find` + `test -f web/references/gogoro/.verification.md`). sibling-only 값·분류("h3다", 섹션 표제)를 본문에 사실로 넣을 입력이 없다. 원본 `focus-visible` 0; 이관본 Focus 관측은 `focus-visible` 행에 붙지 않음.
- **D2a 본문.** Primary tasks 3항은 마케팅 모듈·라벨(`Ride Smarter…`, `LEARN MORE`, `Find a GoStation`). §13 동기 문장(nearest station before a long ride / spec comparisons as statement object / fleet TCO)의 승격 없음. 식별자 세 파일 0.
- **E2d.** 남은 부재 단언: provenance `focus-visible` zero times는 **원본 파일**을 분모로 하고, 원본 실측 0. DESIGN Audience "names… appear in neither output"은 식별자를 나열하지 않음. cubic-bezier 행은 DESIGN 0을 단언하고 로그 자신을 분모에 넣지 않으나 로그가 그 문자열을 처분 지목으로 적는다고 문장에 밝혀 두었다.

AUDIT_DONE fixes=6

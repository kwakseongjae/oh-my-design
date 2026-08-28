# Gaudio Lab 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/gaudiolab/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/gaudiolab/DESIGN.md`
검증 sibling: `web/references/gaudiolab/.verification.md` (`find`로 존재 확인, 6,119B, dotfile)
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-27

## 수정 목록 (12건)

### B2a — 인접 한정 누락 (본문 5건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:9` — Experience / Scope 1문단 | 세 표면 URL과 "values stay attached"는 관측·계약 범위. 그 다음 "these marketing surfaces are not treated as a proxy for the applications the company ships"는 증거 영역을 가르는 **편집적 판단**인데 인접 완전형 한정이 없었다. | 판단 문장만 분리해 완전형 한정을 붙였다: "Reading these marketing surfaces as not a proxy … is a derived editorial implementation inference from the verified surfaces; it is not Gaudio Lab-authored or a separately published UI specification." 회사명·URL·값 부착 규칙은 그대로. |
| 2 | `DESIGN.md:120` — Foundations / Semantic color, 두 CTA 라벨 노트 다음 | Recorded use 칸의 "single action color" · "softer than pure white … MUI convention" · "palest echo of the brand blue"는 역할에 대한 편집적 읽기. Principles·Avoid 머리의 한정이 이 표까지 인접하지 않는다. 표 값·행은 관측. | 표 뒤에 한 문장 신설: "Calling `#00b7ff` the single action color, calling `#fafafa` softer than pure white by an MUI convention, and calling `#f0f9ff` the palest echo of the brand blue, are derived editorial implementation inferences … not Gaudio Lab-authored or a separately published UI specification." 토큰·표 구조 불변. |
| 3 | `DESIGN.md:226` — Typography & Assets / Assets 첫 bullet | "emotional carrier"와 "do not replace it with invented brand-color decoration"은 원본 §12.4 UI implication을 옮긴 **구현 추론**. Assets 절에 evidence-class 표시가 없었다. | 같은 bullet 안에 완전형 한정을 붙였다. 1차 콘텐츠라는 사실 서술과 판단을 한 줄에서 갈랐다. |
| 4 | `DESIGN.md:408` — Layout & Platforms / responsive 머리 | 기존 한정이 breakpoints · collapsing · image behavior만 덮었다. 바로 아래 `:416` "The source describes these as comfortably tappable"는 크기 수치에 대한 **편집적 읽기**인데 한정 범위 밖이었다. | 기존 한정 문장에 "the source's \"comfortably tappable\" reading of the recorded target sizes"를 접어 넣었다. 새 한정 문장 아님(발생 수 +0). 높이·패딩 값 불변. |
| 5 | `DESIGN.md:439` — Content & Locales / Forbidden register | 금지 목록 자체는 원본 규칙. 뒤 문장 "sound is presented as science first and feeling second, never as a gimmick"은 성격 규정인데, `:423` 한정이 덮는 목록(voice · register · evidence reading · tone table)에 이 문장이 없다. | 그 성격 규정 뒤에 완전형 한정을 붙였다. `"magic"` 바이트와 금지 목록은 그대로. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 21, `not Gaudio Lab-authored` 21, `separately published UI specification` 21 (수정 전 17/17/17). `provenance.md`의 같은 절 인용 1회는 색인이지 한정이 아니다.

### E1 — provenance derived 범위가 본문보다 좁았다 (2건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | `provenance.md` Derived editorial inventory 머리 + 표 | 원장이 "Seventeen sentences" / 17행. 본문 완전형 한정은 감사 전 17, 감사 후 21. 좁은 쪽도 FAIL(fastcampus형). | 머리를 Twenty-one / 21로 맞추고 행 18–21을 본문 신설 4건에 1:1로 추가. 행 16 설명에 comfortably tappable을 반영(발생 수는 그대로 16번 행). 실측 21 = 원장 21. |
| 7 | `provenance.md` evidence-class 경계 표, Motion/Governance 행 | "B3 … with partial confirmation explicitly excluded. Present in full in both places." 실측: `transition properties` / `animation name` / `reduced-motion behavior` 각 DESIGN **2**, `partial confirmation` DESIGN **1**(Motion만). 전문이 양쪽 풀이라는 주장이 본문보다 강했다. | "five kinds + gate are present in both places. The partial-confirmation exclusion sentence is in Foundations `Motion` only"로 실측화. |

### E2 / E2a / E2c / E2d / D2a — 로그·원장 목적지와 표기 (5건)

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | `migration-log.md:28` — `tokens.source: live-extract` | 로그가 DESIGN.md Foundations `Motion`을 2차 목적지로 적음. 실측 `live-extract`: DESIGN.md **0** / provenance **1** / 이 로그(mention). fitpet형 허위 이중 목적지. Motion 머리는 인스펙트 범위를 적되 그 토큰을 쓰지 않는다. | 2차 목적지 철회. provenance `Identity` 단일, DESIGN 0을 행에 박음. 본문은 고치지 않음. |
| 9 | `migration-log.md:49` — B3 준수 주장 | "이 전문이 … 2회" (Motion + Governance). 실측은 게이트 2 · 부분확인 배제 1. E2c 과대. | 게이트 2회 / `partial confirmation` 1회로 갈라 적음. |
| 10 | `migration-log.md:62` — §13 삭제 행 | Item 칸이 이름·나이·도시를 삭제 식별자로 재수록(D2a). "이 로그 행에만 1회 남아 있다"고 자인. 실측(수정 전): `정민호`/`Sarah Nguyen`/`김하윤`/`Los Angeles`/`판교` = DESIGN 0 / provenance 0 / log 1. | 무식별 표기: "fictional personas 3인, §13, D2 삭제". 수정 후 세 파일 각 0. |
| 11 | `migration-log.md:88–90` — F1·F2 | 한정 17회, B3 전문 2회, `live-extract`를 이중 목적지 목록에 넣음. 본문·다른 행과 불일치. | F1 21회, F2에서 `live-extract`를 단일로, B3를 게이트 2 + 배제 1로 동기화. |
| 12 | `provenance.md:45` — sibling-only 부재 단언 | "appear in this ledger alone." 같은 문자열은 로그 `:65`에도 mention으로 있다. 자기 분모를 닫지 않은 배타 단언. | "records in this ledger; absent from the portable body. The same strings may appear in the migration log as disposition mentions, not as use." 로 구별을 문장에 적음. portable 부재 자체는 실측과 맞다(`rgb(238,238,238)` · `0.15008px` · `Suit` · `50%` · `studio.gaudiolab.io` 각 DESIGN 0). |

## 수정하지 않은 것 (검토 후 위반 아님)

- Motion 규칙 "flat, science-forward" / "signalling precision" — `:147` 절 머리가 durations·easing roles·motion rules를 이미 완전형으로 덮는다.
- Semantic "keep that split" · 두 CTA 라벨 병기 · Font evidence의 시스템 스택 귀속 — 증거 영역 경계이지 브랜드 인과 판단이 아니다.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/gaudiolab/DESIGN.md` — 읽기만.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 `copy-loss` = compared 6 / candidates 201 (3.0%). `verdict: PASS`는 대조한 6개에 대한 것이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(CTA `Contact us`/`문의하기`/`All products`/`Watch the Film`/`Open app launcher`, 내비 라벨, `The Science of Sound`/`Wherever Sound Goes`, 미션·태그라인 3건, `Over 40 audio experts including 9 Ph.D` 대소문자 양쪽): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. sibling 전용 표제 `Our Milestone`은 원본 본문 0 · DESIGN 0 · provenance 2(보관) — 레거시 본문이 안 실은 문자열이라 A5 손실로 보지 않는다.
- **B1.** sibling-only 값 DESIGN 0(`rgb(238,238,238)`, `rgba(255,255,255,0.2)`, `50%`, `0.15008px`, `Suit`, `studio.gaudiolab.io`, `Products/제품`). 분류: 본문 `h2` 0 · `h3` 0 · `Section heading` 0. `<h1>` 2회는 원본 §3이 스스로 적은 "Roboto `<h1>` stats"이지 sibling 구조 관측의 승격이 아니다. finda형 분류 침투 없음.
- **D2a 형제 4브랜드 (이 감사는 고치지 않음).** `gaudiy` `migration-log.md:46`과 provenance Omission ledger 한 행이 이름 3인을 삭제 식별자로 담음 — 확정 위반 형태. `gitlab` `migration-log.md:62`가 `Priya`/`Marcus`/`Ana Sousa`/`Bangalore`/`Berlin`/`Lisbon`을 열거한 채 "산출 3파일 어디에도 남기지 않았다"고 단언 — D2a + E2d(자기분모). `genie` §13 행은 무식별. `gangnamunni`는 원본에 가상 페르소나 없음, 삭제 식별자 없음.
- **E2d 이 브랜드.** 삭제 행을 무식별화한 뒤, 세 파일에서 이름·도시 식별자 0. 남은 부재 단언은 portable body를 분모로 하고 자기 나열을 mention으로 구분한다.

AUDIT_DONE fixes=12

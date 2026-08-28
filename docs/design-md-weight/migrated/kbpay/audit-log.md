# kbpay 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kbpay/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kbpay/DESIGN.md`
검증 sibling: `web/references/kbpay/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not KB Pay-authored or a separately published UI specification`을 요구한다. 기존 40건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 40 / 원장 40. 숫자는 맞았으나 세 블록에서 인접 한정이 그 자리의 세 번째 부류를 이름하지 않았고, 원장 세 행이 본문보다 좁았다. Primary CTA `:253`은 기하만 이름하고 `:251`의 §14 Disabled≠computed-hover를 빠뜨렸다. Notification Badge `:353`은 C4 생략만 이름하고 3px 기하 읽기를 빠뜨렸다(원장 행 29는 이미 3px를 적음 — 본문이 좁은 쪽). Feature Banner `:418`은 type/C4 생략만 이름하고 16px 기하 읽기를 빠뜨렸다(원장 행 33도 좁음). Elevation 원장 행 14는 본문 `:140`의 cognitive-load 읽기를 빼 좁았다.

로그는 줄 수(`grep -c`형)로 센 2차 목적지가 여럿이었다. `live-extract` DESIGN dest 4 at 9/83/144/189 — 실측 dest **7** (9×2 / 83×2 / 144 / 189×2). `national financial infrastructure product` dest 2 at 13/45 — 실측 dest **2 둘 다 13**; 45는 짧은 주석 문자열 `national infrastructure product` (fitpet형 2차 목적지). `1024-1440px` dest 1 at 465 — 실측 dest **2** at 465/471. Homepage URL DESIGN dest를 9만 적음 — 실측 dest **2** at 9/21.

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 3건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:253` — Primary CTA | `:251` §14 Disabled `opacity: 0.4` / `#FAEAAD`를 버튼 행에 붙이고 computed hover로 쓰지 않는다는 판단은 세 번째 부류. 기존 한정은 4px / 16px / 48px / 18px 기하만. | 기존 완전형에 §14-disabled≠computed-hover를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:353` — Notification Badge | `3px`를 이 badge의 기하로 읽고 `tokens.rounded.sm: 3`과 나누는 판단은 세 번째 부류. 기존 한정은 C4 생략만. 원장 행 29는 이미 3px를 이름함. | 기존 완전형에 3px 기하 읽기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:418` — Feature Banner | `16px`를 이 banner의 기하로 읽고 `tokens.rounded.lg: 16`과 나누는 판단은 세 번째 부류. 기존 한정은 type 생략 + C4만. | 기존 완전형에 16px 기하 읽기를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 40, `not KB Pay-authored` 40, `separately published UI specification` 40. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 67, 83, 100, 117, 130, 140, 144, 172, 185, 189, 202, 204, 213, 236, 238, 253, 277, 300, 321, 341, 353, 365, 378, 399, 418, 430, 445, 455, 457, 471, 476, 531.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Elevation 행 14 | 본문 `:140`은 minimal + clickable + cognitive-load 세 읽기. 원장은 앞 둘만. | cognitive-load 읽기를 행에 추가. |
| 5 | Primary CTA 행 24 | 기하만. 본문 `:253`이 이제 §14-disabled≠hover도 이름한다. | 그 판단을 행에 추가. |
| 6 | Feature Banner 행 33 | type/C4 생략만. 본문 `:418`이 이제 16px 기하도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **40 = 40** (E1 1:1). 데이터 194–233.

### E2 / E2a / E2c — 로그 목적지 (16건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | YAML identity 행 | homepage DESIGN dest를 9만. `KB페이` dest 2 at 9/496. 496은 빈 줄. | homepage dest **2** at **9/21**. `KB페이` dest 2 at **9/497**. |
| 8 | YAML metadata 행 | `live-extract` DESIGN dest 4 at 9/83/144/189; P dest 21/52/134/174; **Verified:** 42; freshness 36–43. | DESIGN dest **7** at 9×2 / 83×2 / 144 / 189×2. P use dest **4** at **20/52/156/239** (203은 inventory mention). Verified **41**. freshness **36–39**. |
| 9 | YAML rounded 행 | `tokens.rounded.full: 9999` dest 2 at 128/130. `9999px` dest 3 at 130/396/399. 128은 표 칸 `tokens.rounded.full`이지 `: 9999` 문자열이 아님. 130에 `9999px` 2회. | dest **2** at **130/399**. `9999px` dest **4** at 130×2 / 396 / 399. |
| 10 | §1 / footer URLs 행 | voice-sample P dest 52/62. 62는 표 헤더 아래 빈 칸. | P dest **52/60**. |
| 11 | §4 Component Stylings 행 | 확인 on Primary CTA at 249. 249는 YAML use. | **250**. |
| 12 | §8 행 | `1024-1440px` dest 1 at 465. | dest **2** at **465/471**. |
| 13 | §10 행 | 475–496 · table 479–484 · `마감 임박` 494 · published-names 496. 496은 빈 줄. 484는 Eligibility까지. | **476–497** · table **479–486** · `마감 임박` dest **2** at **495/497** · names **497**. |
| 14 | §11 행 | `national financial infrastructure product` dest 2 at 13/45. Year dest 1. 45는 `national infrastructure product`. | dest **2 둘 다 13**. Year `2020` dest **2** · `2022` dest **2**. |
| 15 | §13 행 | disposition P 153 (YAML metadata 행). | **148**. |
| 16 | §9 행 | check P 154 (곡선 행). | **149**. |
| 17 | Footer 행 | Freshness 36–44 · Tier 1 64–67 · Tier 2 69–71. | freshness **36–39** · Verified **41** · Conflicts **44** · Tier 1 **64–65** · Tier 2 **69–70**. |
| 18 | HTML comment 행 | interpretive 237 · persona 153 · voice-sample 52/62. | interpretive **242** · persona **148** · voice-sample **52/60**. |
| 19 | Sibling 절 | 전사 83–109 · sibling-only 111–122. | 전사 **83–101**. sibling-only **105–114**. |
| 20 | Deviations | `wc -w` 7,992 · worker-close SHA만. | `wc -w` **8,041**. auditor SHA `33294c15512b0b41d9472247a3feed54d8b5f83c510f91411fb346725d6d6ca3`. |
| 21 | F1 | 40항목 = 40. 확장 3을 목록에 없음. | 40=40 유지. 253 / 353 / 418 확장을 목록에 반영. |
| 22 | F2 + 헤더 SHA | dual dest를 착수 숫자로 적음. worker-close만. | homepage 9/21 · `live-extract` dest 7. auditor SHA를 헤더에 추가. |

Destination SHA `05a06c04ebeef24dd99bfe0202920baf31e89323d8ff402871fecb25a3310cfd` → `33294c15512b0b41d9472247a3feed54d8b5f83c510f91411fb346725d6d6ca3` (한정 확장 후). 줄 수 DESIGN `wc -l` **536** 불변. provenance 242 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 40개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Semantic `:83`의 역할 행 특징 문구(signature / faint-blue / near-black warmth / warm-brown)는 같은 문장이 "hex values and recorded uses are the source's own"으로 1·2류로 닫혀 있어 한정 신설 대상이 아니다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: `DESIGN.md:164`가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트를 전문으로 담는다.
- E2d: sibling-only 머리(`provenance.md:103`)는 부재를 단언하지 않고 field kind만 이름한다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 34 / candidates 213. `verdict: PASS`는 대조한 것 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 라벨(KB Pay / KB페이 / 로그인 / 신청하기 / 한번에, 한손에, 한눈에 KB Pay / 나에게 꼭 맞는 콘텐츠 추천 / 국민의 행복생활 파트너 KB국민카드 / My KB / Pantone 1235 C / at once, in one hand, at a glance) — 원본·산출 모두 dest ≥1. 발행 라틴 손실은 안 보인다.
- **B1.** sibling 전용 `#FFDF01` / `541px` / `1080px` / `#F2F2F2` / `rgb(249, 250, 252)` / `42–44px` DESIGN dest 0. sibling의 H3 "서비스 특징" 분류는 원본 HTML comment `:424`에 이미 있어 sibling-only 침투가 아니다.
- **D2a.** 식별자·동기·소속 분류 DESIGN dest 0. Audience/Primary tasks는 원본 그룹 네 개(Korean cardholders, students, families, financial product shoppers)와 소개 페이지 과제만. gitlab형 동기 잔존·hubspot형 소속 신조어 없음. 다만 로그 §13 행과 A5a 표가 삭제 처분 행에 `카드이용정보`·`믿을 수 있는 앱` 전기 문구를 다시 적음 — 본문 승격은 아니나 원장 재수록(D2a). 이 감사의 수정 범위(B2a·E2 목적지) 밖이라 고치지 않음.
- **A1.** 원본 YAML `tokens.components` 9레코드 필드가 각 블록에 행으로 있다: button-primary type/bg/fg/radius/height/padding/font/use → Primary CTA 243–250; button-outlined → Secondary 268–275; input-text → Text Input 292–298; card-standard → Standard Card 315–319; card-surface → Surface Card 336–339; badge-yellow → Notification Badge 346–351; badge-accent → Breadcrumb 358–363 (YAML `4px`와 §4 `0px` 병기); nav-tab type/fg/active/font/use → Main Nav 370–376; toggle-switch → Toggle 393–397. icook형 키 경로 소실 없음.

AUDIT_DONE fixes=22

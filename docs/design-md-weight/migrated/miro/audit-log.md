# Miro 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/miro/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/miro/DESIGN.md`
검증 sibling: `web/references/miro/.verification.md` — `find web/references/miro -type f`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 있음 (Mirotone, `ds.type: system`). B2a 예문 전제 주석(v12)에 따라 toss형 닫힘 복사를 요구하지 않음. 기존 닫힘은 `not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation`로 class를 끝까지 명시함. 형태만으로 FAIL하지 않음.

착수 실측: 본문 완전형 22 / 원장 22. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Capture record ¶1(`type: toggle`만 Pricing-period toggle에 붙임 / 나머지 §4는 토큰셋 밖)은 표 앞 문장인데 한정이 표 뒤 `:190`에만 있었다. Type roles 표 뒤 `:163`(display-hero `lineHeight` `56` ≠ `size` `56`)은 `:147` 한정이 이름하지 않고 표 뒤라 인접하지 않았다. Pricing dialog `:330` C4 재진술은 `:190`에서 140줄. Semantic color `:81`은 canvas/oklch/transparent 비병합만 이름하고, 같은 hex `#ffffff`의 canvas fill / Blue pricing action text / Email input background 귀속 분리를 이름하지 않았다. Spacing 원장은 `xs: 4` off type size를 빼 본문보다 좁았다.

## 수정 목록 (15건)

### B2a — 인접 한정 (본문 4건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:81` — Semantic color | canvas fill / Blue pricing action text / Email input background는 세 번째 부류(같은 hex, 다른 역할). 기존 한정은 yellow/blue/borders/canvas-vs-oklch만. | 기존 완전형에 그 귀속 분리를 접어 넣음. hex를 다시 쓰지 않음(`#ffffff` dest **5** 유지). 발생 수 +0. |
| 2 | `DESIGN.md:163` — Type roles after tables | display-hero `lineHeight` `56` is not a replacement for `size` `56`은 세 번째 부류. `:147`은 YAML/px keep-both·900행·action `16`이고 표 앞이라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:174` — Capture record ¶1 | YAML primitive type을 Pricing-period toggle에만 붙이고 나머지 §4를 토큰셋 밖으로 두는 것은 세 번째 부류. `:190`이 그 읽기를 이름하나 상태 표 뒤라 인접하지 않다. | 완전형 신설. `not in the token set` 문자열은 재사용하지 않음(dest **6** 유지). 발생 수 +1. |
| 4 | `DESIGN.md:330` — Pricing dialog | kind·applicability map 생략(C4)은 세 번째 부류. `:190`은 Capture record 머리라 인접하지 않다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 25, `not Miro-authored` 25, `including the published Mirotone documentation` 25. `provenance.md`의 Proof notes 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 34, 38, 50, 59, 68, 81, 99, 109, 113, 119, 135, 143, 147, 163, 167, 174, 190, 330, 337, 350, 384.

### E1 — provenance derived 범위 (6건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | 헤더 / 행 수 | 22 complete / 22 data rows. | **25** / **25**. |
| 6 | Semantic color 행 | 역할·비병합만. 본문 `:81`이 이제 canvas fill / Blue-action text / Email background 분리를 이름한다. | 그 판단을 행에 추가. |
| 7 | Spacing 행 | `lg`/`sm`/`xl`만. 본문 `:99`이 이미 `xs: 4` is not a type size를 이름한다. | 그 판단을 행에 추가. |
| 8 | Type roles after tables 행 | 없음. 본문 `:163` 신설. | 행 신설. |
| 9 | Capture record ¶1 행 | 없음. 본문 `:174` 신설. | 행 신설. |
| 10 | Pricing dialog 행 | 없음. 본문 `:330` 신설. | 행 신설. |

헤더 / 데이터 행 **22 → 25**. 본문 완전형 25와 1:1.

### E2 / E2a — 로그 목적지 (5건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 본문 수정 뒤 dest 표를 `grep -o | wc -l`로 재실측함(lablup형 누락 방지).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML `ds.og_image` | P dest **1**. 실측 키 P dest **3** (Identity 표 + dual-destination 문단 + Omission ledger). Cover URL P dest **2**. | 키 P dest **3**. URL DESIGN dest **0** / P dest **2**. |
| 12 | §3 Displaay URLs | DESIGN dest **1** only. 실측 foundry DES **1** / P **2**, licence DES **1** / P **2**. | 이중 목적지 (E2a). |
| 13 | §4 `oklch(1 0 0)` | dest **2** only. 실측 DES **2** / P **1**. | DESIGN dest **2** / provenance dest **1** (E2a). |
| 14 | §6 `public buttons are largely flat` | dest **1**. 실측 DES **2** (Elevation + Named gaps). | dest **2**. |
| 15 | §12 / Deviations / F1 / F2 inventory | DESIGN 22 · inventory 22행. 본문 한정 +3 뒤 불일치. | **25** · inventory **25** data rows. F1이 신설 세 자리와 Semantic hex 분리를 이름하게 갱신. |

재실측 (파일별 `grep -oF | wc -l`): `#fde050` DES 7 / P 2; `#ffffff` DES 5; `not in the token set` DES 6; `https://miro.com/ko/` DES 2; B3 `transition properties` DES 2 · `animation name` DES 2 · `reduced-motion behavior` DES 3.

## 범위 밖 관찰

- **A5a.** 게이트 `coverage: [{ check: "copy-loss", compared: 0, candidates: 128 }]`. `compared < candidates`이므로 손 스윕이 분모다. 워커 손 스윕 발행 카피 22 + YAML `use` 5 / 미생존 0. 원본 인용 사명·원칙 줄기·페르소나 원형 라벨·`yellow should be the protagonist rather than paint every surface`는 본문에 바이트 생존. 라틴 카피 손실은 이 스윕에서 보이지 않음. `verdict: PASS`는 대조 바늘 0건에 대한 것이다.
- **A1 키 경로.** `tokens.components.pricing-period-toggle` 필드 `type` / `radius` / `height` / `padding` / `states` / `use`는 Pricing-period toggle 블록에 행으로 있다(Primitive type, Radius, Height, Padding, Checked/Unchecked, Token-set use + path 행). icook형 필드 소실 없음. YAML `tokens.typography.display-hero.weight` 등 점 경로 문자열 자체는 본문 dest 0이나, Type roles 표가 Size/Weight/Line height/Tracking/`use` 열로 값을 들고 있다(웨이브 39 T2 관례·표 열 보존). 점 경로 문자열을 행으로 되살리지 않음.
- **B1 sibling.** `web/references/miro/.verification.md` 전용: `460px` DES 0 / P 2; `AI Innovation Workspace` DES 0 / P 1; `rgb(253, 224, 80)` DES 0 / P 0 / LOG mention; `authenticated` DES 0 / P 0 / LOG mention; `https://miro.com/newsroom/miro-puts-ai-where-teams-work/` DES 0 / P 1; `Roobert PRO SemiBold` DES 0 / P 2. 구조 분류(`not an authenticated board/product UI`, `portal H2`) 본문 승격 0. Outlined 배경은 원본 `transparent`를 유지하고 sibling white fill은 원장-only(로그가 이미 적음).
- **D2a.** 삭제 처분 행은 무식별(`§13` 그룹 3 / 이름·나이·도시 필드 종류만). 원형 라벨(`Cross-functional innovation teams` 등)은 Audience에 있고 로그 삭제 행에 식별자를 재수록하지 않음. Primary tasks는 캡처된 공개 컨트롤 세 개이며 페르소나 동기를 옮기지 않음. 소속 분류 신조어 0.
- **E2d.** 부재 단언은 DESIGN dest **0** / provenance dest **N** 형태. 「세 파일 어디에도 없다」고 적으며 그 문장이 문자열을 담는 행은 없음. `cubic-bezier(0.4, 0.0, 1, 1)` dest **0** / P dest **1**은 원장 mention과 일치.
- **같은 hex 다른 역할 (웨이브 39 krafton).** `#ffffff` DES 5: Scope canvas 관측, Semantic canvas 슬롯, Canvas 토큰, Blue pricing action Text, Email input Background. 귀속 분리는 정상. 착수 시 원장이 이름하지 않아 E1로 본문 한정·원장 행을 실제에 맞춤(#1, #6). 고친 것은 한정 문장뿐, 토큰 값·컴포넌트 표는 그대로.
- **충돌 처리 일관성 (웨이브 40 항목 5).** sibling outlined fill `#ffffff` vs 원본 `transparent`는 전 문서에서 원본 `transparent`를 유지. Primary Deep/Warning/radius처럼 자리마다 다른 충돌 정책은 없음.

AUDIT_DONE fixes=15

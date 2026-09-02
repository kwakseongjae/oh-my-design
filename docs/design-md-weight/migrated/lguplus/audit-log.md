# lguplus 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/lguplus/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/lguplus/DESIGN.md`
검증 sibling: `web/references/lguplus/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양은 수집되지 않음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not LG U+-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 `derived editorial implementation inference` 22 / `not LG U+-authored` 22 / `separately published UI specification` **23**. 원장 데이터 행 22. 숫자는 거의 맞았으나 양쪽이 함께 좁았다(fastcampus). Principles `:42`가 완전형 뒤에 불완전 닫힘(`not a separately published UI specification`만)을 한 번 더 썼다. Semantic `:73`은 canvas/CTA `fg` 비해합만 이름하고 CTA border `#ffffff` 제3 귀속과 Corporate About 비병합을 빠뜨렸다. Spacing `:86`은 클러스터≠그리드 문장을 한정 **뒤**에 두었다. Shape는 평균 금지를, Motion은 단일 커브≠게이트를, Font evidence는 official-use/delivery≠ownership/OFL≠상표를, Type roles는 Home body≠universal scale을, Capture record는 default-geometry/zero-interaction과 `focus`≠`focus-visible`을 본문 한정이 이름하지 않았다(원장 Capture 행은 이미 `focus`≠`focus-visible`을 이름함 — 본문 한정이 좁음).

문장 분류: 브랜드 발행 사실(1996·Simply. U+·Simple Lab·공식 서비스 범주·YAML 값) / 관측 기술(hex·px·셀렉터·loaded family) / 편집적 해석·인과 판단(표면 귀속, 비해합, 클러스터≠그리드, 평균 금지, 승격 게이트, 페르소나 삭제 읽기). 세 번째 부류만 수정 대상.

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 8건, 발생 수 +0 / `separately published` 23→22)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:42` — Principles | 완전형 다음 문장이 UI implication을 `not a separately published UI specification`만으로 닫음. 불완전 한정. | stems + UI implication을 완전형 한 문장에 접음. 불완전 닫힘 제거. `separately published UI specification` 23→22. |
| 2 | `DESIGN.md:73` — Semantic color | canvas `#ffffff` ≠ CTA `fg` `#ffffff`만. CTA border `0px solid #ffffff` 제3 귀속과 Corporate About ink 비병합은 세 번째 부류인데 한정 밖. | 기존 완전형에 CTA border 귀속 분리와 Corporate About / page-specific 비병합을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:86` — Spacing | `Treat this as a measured local cluster, not a complete grid declaration`가 한정 **뒤**. | 클러스터≠그리드 판단을 한정 안에 넣음. 원 명령문은 뒤에 재진술로 남김. |
| 4 | `DESIGN.md:94` — Shape | 평균 금지 문장은 앞에 있고 한정은 0/8/20 로컬 기하만. | 한정에 Home CTA vs subscription-row 평균 거부를 접어 넣음. |
| 5 | `DESIGN.md:98` — Motion | 다섯 종류 게이트는 있으나 `Official documentation of a single curve or duration is not that gate`는 한정 밖. | 그 판단을 한정에 접어 넣음. |
| 6 | `DESIGN.md:106` — Font evidence | surface-specific / NotoSansKR delivery name / declared-only / no-substitution만. official-use 부재, delivery≠ownership, OFL≠상표는 표 안의 세 번째 부류. | 세 판단을 기존 완전형에 접어 넣음. |
| 7 | `DESIGN.md:124` — Type roles | YAML `1.5` keep-both와 use 병기만. 표 Notes의 Home body ≠ universal product scale은 세 번째 부류. | 그 경계를 한정에 접어 넣음. |
| 8 | `DESIGN.md:156` — Capture record | YAML keep-both와 `listItem` 의미만. `:142` default-geometry / zero-interaction without fabricating states와 `focus`≠`focus-visible`은 세 번째 부류. 원장은 이미 후자를 이름함. | 두 판단을 기존 완전형에 접어 넣음. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 22, `not LG U+-authored` 22, `separately published UI specification` 22. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 42, 51, 60, 73, 86, 94, 98, 106, 120, 124, 135, 156, 212, 216, 221, 231.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 헤더/데이터 행 수는 22=22로 유지하고 행 텍스트를 본문에 맞춤.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | Principles 행 | stems/UI-implication pairing만. | numbered stems rest on official direction; UI implication = source editorial reading. |
| 10 | Semantic color 행 | canvas≠CTA fg, ink≠`#222222`, muted/soft scoped만. | CTA border `#ffffff` 제3 귀속 + Corporate About 비병합. |
| 11 | Spacing 행 | unitless vs captured-px, spacing≠type/radius만. | 4/8/12/16 = local cluster not complete grid. |
| 12 | Shape 행 | 0/8/20 local geometry만. | averaging 거부. |
| 13 | Motion 행 | 부재 + five-kind gate만. | official single curve/duration ≠ that gate. |
| 14 | Font evidence 행 | sorting / surface-specific / NotoSansKR / declared-only / no-substitution만. | official-use 부재, delivery≠ownership, OFL≠상표. |
| 15 | Type roles 행 | `1.5` keep-both / 21px / YAML use만. | Home body ≠ universal product scale. |
| 16 | Capture record 행 | applicability / YAML keep-both / listItem / focus≠focus-visible. 후자는 이미 있었음. | default-geometry / zero-interaction without fabricating states를 행에 추가. |

헤더 / 데이터 행 **22 = 22** at 170–191 (E1 1:1, 이름 범위 정렬).

### E2 / E2a / E2c — 로그 목적지 (4건)

본문이 아니라 로그(와 거짓 목적지 원장 행)만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 17 | provenance Omission §9 | 「원본 서술 경계가 Experience Scope에 이미 있다」고 바이트 원문을 적음. 그 원문 DESIGN dest **0**. | Scope 실재 문장 두 개(`It does not create colors, components, states, or motion tokens` DESIGN dest 1 · `not evidence that all legacy pages already share a new visual system` DESIGN dest 2)만 목적지로 적음. |
| 18 | migration-log §9 행 | 같은 바이트 원문을 「Scope에 보존」이라 적음. DESIGN dest 0 — fitpet형 2차 목적지. | 바이트 원문 DESIGN dest 0. Scope 실재 문장 dest를 적음. |
| 19 | F1 패스 기록 | 22자리를 이름하나 F3가 접어 넣은 판단을 목록하지 않음. | 확장 8자리를 F1에 적음. 자리 수 22=22 유지. |
| 20 | F2 dest 표 | 본문 수정 뒤 재실측 없음(lablup). `separately published` 착수 23이 표에 없음. `#ffffff` dest가 한정 확장으로 8→9. | `grep -oF -- \| wc -l` 재실측. 기존 바늘 dest 유지. 표에 `separately published UI specification` 22/1, `#ffffff` 9/4, `0px solid #ffffff` 2/1 추가. A5a 9바늘 DESIGN dest 각 ≥1 불변. |

Destination SHA `38b3665685bc85d32ed7b8cb267aefaf6ea8ade42fe6a2581faec9dc8b39b1c9` → `268ab3f5e2bb0ea8375fe4c11677bf3c447941a6afa267c0b7282c47d3e1fe44` (한정 확장·불완전 닫힘 제거 후). 줄 수 DESIGN `wc -l` **274** 불변. provenance 211 불변(행 텍스트만). migration-log 109→**114**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 22개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 문법 변형(복수 `are derived editorial implementation inferences`)은 완전형.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다. Named gaps의 B3 다섯 종류는 Motion 한정과 같은 게이트의 재진술.
- E2c: B3 전문 `transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest 2 (Motion · Named gaps). primitive type `button` 1 / `listItem` 1. YAML use 2/2. `1.5` dest 3.
- E2d: sibling-only 머리(`provenance.md` Sibling 절)는 DESIGN.md를 분모로 두고 부재를 적으며, 그 문장 안에 `90px` 등을 열거하지 않는다. `cubic-bezier` DESIGN dest 0 · provenance dest 0 — 로그 mention은 분모가 아니다.
- D2a 처분 행은 절·인원·필드 종류만. 이름·나이·도시·전기 없음(원본 §13에도 식별자 없음).
- A1 키 경로: `home-primary-cta` 10필드(type/bg/fg/border/radius/padding/height/font/states/use)가 Home primary CTA 블록 행으로 존재. `subscription-information-row` 9필드(YAML states 없음)가 Subscription information row 블록 행으로 존재. icook형 타 블록 hex 차용 없음. 복원 0.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared **3** / candidates **93**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 카피 9 (`LG유플러스` · `Simply. U+` · `Simple Lab` · `요금제 확인하기` · `내게 맞는 혜택 보기` · `필요한 정보부터 확인하세요.` · `LG U+` · `people-centred AI` · `pr-btne add`) DESIGN dest 각 ≥1, 미생존 0. 발행 라틴 손실은 안 보인다. `pr-btne add`는 캡처 셀렉터이지 마케팅 카피가 아니다(워커 분모 과포함, 손실 아님). `LG유플러스` SRC 5 / DESIGN 4 — 차이는 YAML `name`이 provenance Identity로 분리된 것.
- **B1.** sibling 전용 `90px` / `55px` / `15.5px` / `Pretendard Variable` / `c-btn-solid-1-m` / `list-item_before` / `genuine CTA treatment` / `coverage 92` / `pg-button-prod_detail-cart_add` / `rgb(34, 23, 28)` DESIGN dest 0. `portal H2` / `h2` sibling 0, 본문 승격 0. 구조 분류 침투 없음.
- **D2a.** 식별자·동기 스케치·소속 신조어 DESIGN dest 0. Primary tasks는 캡처 표면 세 개. Audience는 공식 서비스 범주. 로그 삭제 행은 원형 라벨을 적지 않음 — 이 브랜드는 영어 추론 아키타입이고 발행 한국어 원형 라벨이 아님. 라벨 재수록을 D2a로 지목하지 않음(웨이브 41).
- **같은 hex 다른 역할.** `#ffffff`는 canvas / CTA `fg` / CTA border(`0px solid #ffffff`) 세 귀속. 착수 원장은 canvas≠fg만 적었음 → E1로 원장·본문 한정을 실제에 맞춤(고침 #2·#10). `#e6007e`는 primary fill과 CTA bg로 같은 역할의 두 키.
- **열 구조.** 원본 색 표는 이름·hex·use. 토큰명 열(`--lguplus-…`)은 원본에 없음. 산출 Semantic color는 YAML 경로를 병기. krds형 토큰명 열 삭제는 해당 없음. 충돌 없음(`conflicts: []`); sibling 추가 기하(구독 구매 CTA `90px`)는 provenance-only로 일관.
- **모션 규칙 원본 부재.** 원본 §15에 커브·duration 없음. 본문 `intentionally` 합성 없음. 부재를 합성하지 않은 것은 모범(웨이브 39 kmong). `cubic-bezier` DESIGN dest 0 · provenance dest 0.
- **YAML 그룹 키 경로.** `tokens.spacing.xs` DESIGN dest 0, 값 `xs: 4` dest 1(그룹 접두 `YAML tokens.spacing steps`). 컴포넌트 필드 키 경로 소실 아님.

AUDIT_DONE fixes=20

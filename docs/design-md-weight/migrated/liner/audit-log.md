# liner 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/liner/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/liner/DESIGN.md`
검증 sibling: `web/references/liner/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양은 수집되지 않음(`ds.type` 원본 부재). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Liner-authored or a separately published UI specification`을 요구한다. 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 `derived editorial implementation inference` 24 / `not Liner-authored` 24 / `separately published UI specification` **25**. 원장 데이터 행 24 (`check-limiter-ledger.mjs` 본문 24 = 원장 24, 211–234). 행 수는 맞았으나 양쪽이 함께 좁았다(fastcampus). Principles `:45`가 완전형 뒤에 불완전 닫힘(`not a separately published UI specification`만)을 한 번 더 썼다. Scope `:13`은 서사 비토큰 목록에 홈헤드라인 `accurate` 포지셔닝을 빠뜨렸다. Semantic `:84`는 canvas/on-primary `#ffffff`만 이름하고 Outline CTA bg · billing-toggle bg · promo-badge fg 귀속을 빠뜨렸다. Spacing `:110`은 로컬 기하≠스케일 문장을 한정 **뒤**에 두었다. Motion은 템플릿 `ease-exit`≠live-computed와 단일 커브≠게이트를, Font evidence는 official-use/FontFaceSet/`sans-serif` fallback을, Family는 body≠ui 스택을, Capture는 YAML `active`와 product-level 처리≠per-control 토큰을 본문 한정이 이름하지 않았다.

문장 분류: 브랜드 발행 사실(2016·11M+·발행 CTA/헤드라인 바이트·YAML 값) / 관측 기술(hex·px·computed family·캡처 기하) / 편집적 해석·인과 판단(표면 귀속, 비해합, 로컬 기하≠스케일, 승격 게이트, 페르소나 삭제 읽기). 세 번째 부류만 수정 대상.

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 8건, 발생 수 +0 / `separately published UI specification` 25→24)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:45` — Principles | 완전형 다음 문장이 UI implication을 `not a separately published UI specification`만으로 닫음. 불완전 한정. | stems + UI implication을 완전형 한 문장에 접음. 불완전 닫힘 제거. `separately published UI specification` 25→24. |
| 2 | `DESIGN.md:84` — Semantic color | canvas `#ffffff` ≠ on-primary `#ffffff`만. Outline CTA bg · billing-toggle bg · promo-badge fg는 세 번째 부류인데 한정 밖. | 기존 완전형에 세 `#ffffff` 귀속 분리를 접어 넣음. |
| 3 | `DESIGN.md:108` — Spacing | `Local captured geometry that is not a spacing-scale step`가 한정 **뒤** (`:110`). | 36/40/48/44 로컬 기하≠스케일 판단을 한정 안에 넣음. 측정 목록은 뒤에 관측으로 남김. |
| 4 | `DESIGN.md:155` — Motion | 다섯 종류 게이트는 있으나 `ease-exit` 템플릿 일치≠live-computed와 `Official documentation of a single curve or duration is not that gate`는 한정 밖. | 두 판단을 한정에 접어 넣음. B3 전문 문장(`:157`)은 유지. |
| 5 | `DESIGN.md:165` — Font evidence | surface-use / no-substitution만. official-use 부재, FontFaceSet≠family 삭제, `sans-serif` fallback≠브랜드 페이스는 표 안의 세 번째 부류. | 세 판단을 기존 완전형에 접어 넣음. |
| 6 | `DESIGN.md:182` — Family | FontFaceSet≠specimen URL만. YAML `family.body` vs `family.ui` 스택 비해합은 세 번째 부류. | body `Pretendard Variable` ≠ ui Pretendard JP 스택을 한정에 접어 넣음. |
| 7 | `DESIGN.md:226` — Capture record | YAML use/font/padding/radius/border/height/states와 역할 판정만. YAML `active`와 Capture-record 행=product-level 처리는 세 번째 부류. | 두 판단을 기존 완전형에 접어 넣음. |
| 8 | `DESIGN.md:13` — Scope 서사 | 2016 / highlighter / 11M+ / 제품 분할 / 태그라인 / 블로그 제목만 비토큰. 같은 문단의 `accurate` 포지셔닝은 세 번째 부류인데 목록 밖. | 홈헤드라인 `accurate` 포지셔닝을 비토큰 목록에 접어 넣음. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 24, `not Liner-authored` 24, `separately published UI specification` 24. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 68, 84, 108, 121, 133, 155, 165, 182, 186, 200, 204, 226, 455, 457, 461, 474.

### E1 — provenance derived 범위 (9건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 헤더/데이터 행 수는 24=24로 유지하고 행 텍스트를 본문에 맞춤.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | Experience Scope 서사 행 | 2016/highlighter/11M+/분할/태그라인/블로그 제목만. | 홈헤드라인 `accurate` 포지셔닝 비토큰. |
| 10 | Principles 행 | stems/UI-implication pairing만. | stems = official homepage/blog; UI implication = source editorial reading; pairing = one reconstruction. |
| 11 | Semantic color 행 | canvas≠on-primary, ink≠`#000000`, surface/primary/warning만. | Outline CTA / billing-toggle / badge `#ffffff` 비해합. |
| 12 | Spacing 행 | unitless vs px, spacing≠type/radius/padding/height만. | 36/40/48/44 = local geometry not spacing-scale. |
| 13 | Motion 행 | 커브 생략 + five-kind gate만. | 템플릿 `ease-exit` ≠ live-computed; official single curve/duration ≠ that gate. |
| 14 | Font evidence 행 | sorting / Flare / Pretendard JP / no-substitution만. | official-use 부재, FontFaceSet≠삭제, `sans-serif` fallback. |
| 15 | Family 행 | FontFaceSet≠specimen만. | `family.body` ≠ `family.ui` 스택. |
| 16 | Capture record 행 | applicability / YAML keep-both / 역할 판정 / Focus≠focus-visible. | YAML `active`; product-level Capture-record ≠ per-control computed tokens. |
| 17 | Evidence-class boundary (Semantic) | canvas≠on-primary; ink≠`#000000`; warning=Annual badge만. | Outline CTA / billing-toggle / badge `#ffffff` 제3·4·5 귀속. |

헤더 / 데이터 행 **24 = 24** at 211–234 (E1 1:1, 이름 범위 정렬). `check-limiter-ledger.mjs liner` → 1:1 OK.

### E2 / E2a / E2c — 로그 목적지 (3건)

본문이 아니라 로그(와 거짓 처분 주장)만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 18 | 값 보존 표 D2 / D2a | 「삭제 행은 원형 라벨만 명명」. 실제 삭제 행은 절·인원·필드 종류만이고 원형 라벨 문자열이 없다. | 절·인원·필드 종류만. 발행 한국어 원형 라벨은 원본에 없음. 식별자를 처분 행에 재수록하지 않음. |
| 19 | F1 패스 기록 | 24자리를 이름하나 F3가 접어 넣은 판단을 목록하지 않음. | 확장 8자리를 F1에 적음. 자리 수 24=24 유지. |
| 20 | F2 dest 표 | 본문 수정 뒤 재실측 없음(lablup). `separately published UI specification` 착수 25가 표에 없음. `#ffffff` dest가 한정 확장으로 10/0→13/5. | `grep -oF -- \| wc -l` 재실측. `#ffffff` 13/5, `separately published UI specification` 24/2, `36px` 5/1, `tokens.components.badge-warning` 1/2. A5a 22바늘 DESIGN dest 각 ≥1 불변. |

Destination SHA `dc1b0b348c6d4cdb23462ef13964697d56c07794d155ec1825e394254ede629e` → `202003b8619c723f3e24b538cb8d0a1ab146cc9935b33169b62de3affe56f0ae` (한정 확장·불완전 닫힘 제거 후). 줄 수 DESIGN `wc -l` **536** 불변. provenance 253 불변(행 텍스트만). migration-log 116→**119**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 24개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 문법 변형(복수 `are derived editorial implementation inferences`, 도메인 명사 type/layout/copy specification)은 완전형.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다. Named gaps의 B3 다섯 종류는 Motion 한정과 같은 게이트의 재진술.
- E2c: B3 전문 `transition properties` + `animation name` + `duration` + `easing` + `reduced-motion behavior` DESIGN dest 2 (Motion · Named gaps). primitive type `button` 4 / `tab` 2 / `toggle` 1 / `card` 2 / `badge` 1. YAML use 18/18 (`check-yaml-use-landing.mjs`). unitless `1.1` dest 4 · `1.19` 2 · `1.21` 2 · `1.35` 2 · `1.25` 2 · `1.5` 2 · `1.33` 2 · `1.29` 2.
- E2d: sibling-only 머리(`provenance.md` Sibling 절)는 DESIGN.md를 분모로 두고 부재를 적으며, 그 문장 안에 식별자를 열거하지 않는다. `3.35544e+07px` DESIGN dest 0 · provenance dest 4. 저작권 문자열 DESIGN dest 0 · provenance dest 1. Audience 부재 문장은 필드 종류(이름·나이·도시)만.
- D2a 처분 행은 절·인원·필드 종류만. 이름·나이·도시·전기 없음. 동기 스케치·소속 분류 DESIGN dest 0. 라벨 재수록을 D2a로 지목하지 않음(웨이브 41 — 이 브랜드는 발행 한국어 원형 라벨이 없음).
- A1 키 경로: YAML `tokens.components` 10레코드. `button-primary` 7필드(type/bg/fg/radius/height/font/use) Primary CTA 블록 행. `button-outline` 8필드(+border) Outline CTA. `button-ghost-green` 8필드 Ghost green CTA. `button-get-started-pill` 8필드 Hero Get-Started pill. `tab-product-active` 7필드(+padding/`active`) Product selector tab (active) — `Token-set active:` 행. `tab-product-inactive` 6필드 inactive 블록. `toggle-billing` 6필드 Billing toggle (`fg` → Text active). `card-pricing` 5필드 Pricing plan card. `card-surface` 5필드 Feature card. `badge-warning` 6필드(+font) Promo badge. icook형 타 블록 hex 차용 없음. 복원 0.
- 원본 §15 곡선 값은 Motion 생략 표기에 인용된 채 역할·Use만 승격. T2 관례(웨이브 39 kkday). 값 소실로 되돌리지 않음.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared **2** / candidates **167**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 카피 22 + sibling 저작권 1 / 미생존 0. 레거시 22건 DESIGN dest 각 ≥1. sibling 저작권 문자열 DESIGN dest 0 / provenance dest 1(본문 미승격). 발행 라틴 손실은 안 보인다.
- **B1.** sibling 전용 `3.35544e+07px` / 저작권 라인 / `H3 "Get accurate answers` / `rgba(109, 109, 112, 0)` / `bgFreq` / `fgFreq` DESIGN dest 0. `portal H2` sibling 0, 본문 승격 0. Type roles `Feature H3`는 원본 §3 역할명이지 sibling 구조 분류 승격이 아님. 구조 분류 침투 없음.
- **같은 hex 다른 역할.** `#ffffff`는 canvas / on-primary / Outline CTA bg / billing-toggle bg / promo-badge fg / pricing-card bg. 착수 원장은 canvas≠on-primary만 적었음 → E1·B2a로 원장·본문 한정을 실제에 맞춤(고침 #2·#11·#17). `#000000`는 recorded Pure Black ≠ ink `#1e1e1f` ≠ tab/pill fg — 착수 한정에 ink≠`#000000`이 이미 있음.
- **열 구조.** 원본 색 표는 이름·hex·use. 토큰명 열(`--liner-…`)은 원본에 없음. 산출 Semantic color는 YAML 경로를 병기. krds형 토큰명 열 삭제는 해당 없음. Conflicts unresolved: none. 무출처 커브 3개는 생략 표기로 일관(한 자리만 병기·한 자리만 삭제하는 충돌 정책 분열 없음).
- **모션 규칙.** 원본 §15에 duration 3·named role 3·reduced-motion이 있다. 본문이 `intentionally omitted rather than synthesized`로 없는 규칙을 지어내지 않음. 커브 값 생략은 원본에 값은 있으나 live-computed 증거가 없는 경계(T2 인용 관례).

AUDIT_DONE fixes=20

## 개정 — 의미 검토 FAIL 3 (2026-08-29)

대상: `docs/design-md-weight/migrated/liner/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정 24=24.

### 결함 1 — §11 고유 사실 복원 (A1)

원본 `:377` / `:381`의 `digital analog` · `yellow line` · `physical page` · `passive curation` · `active cognition assistance` · `anti-hallucination` · `chosen moat` · `epistemic trustworthiness`를 Experience Scope 서사 문단에 원문 표기로 복원. 같은 문단 한정 목록에도 이름해 비토큰 분류를 좁히지 않음. Feature H3/2016/11M+로 대체하지 않음.

### 결함 2 — §9 전용 Plan name 17px 착지 (A3)

원본 `:340` `Plan name 17px Pretendard JP Variable 400`를 Type roles Additional와 Pricing plan card에 병기. Feature H3 17px와 합치지 않음. ink `plan names`는 색 역할로 유지.

### 결함 3 — §9 전용 nav links `#000000` 착지 (A3)

원본 `:342` `` `#000000` nav links ``를 Type roles Nav link Notes와 Pure Black에 병기. hero pill·product-tab `#000000`과 합치지 않음.

`grep -oF -e` 실측 (파일별; 이 절 기록 후):

| 문자열 | 원본 | sibling | DESIGN | provenance | log | AUD |
|---|---:|---:|---:|---:|---:|---:|
| `digital analog` | 1 | 0 | 2 | 3 | 2 | 2 |
| `yellow line` | 1 | 0 | 2 | 3 | 2 | 2 |
| `physical page` | 1 | 0 | 2 | 3 | 2 | 2 |
| `passive curation` | 1 | 0 | 2 | 3 | 2 | 2 |
| `active cognition assistance` | 1 | 0 | 2 | 3 | 2 | 2 |
| `anti-hallucination` | 1 | 0 | 2 | 3 | 2 | 2 |
| `chosen moat` | 1 | 0 | 2 | 3 | 2 | 2 |
| `epistemic trustworthiness` | 1 | 0 | 2 | 3 | 2 | 2 |
| `Plan name 17px Pretendard JP Variable 400` | 1 | 0 | 3 | 3 | 3 | 5 |
| `` `#000000` nav links `` | 1 | 0 | 3 | 3 | 3 | 5 |
| `17px` | 2 | 1 | 4 | 4 | 5 | 9 |
| `#000000` | 12 | 0 | 10 | 6 | 8 | 14 |
| `#1e1e1f` | 20 | 3 | 12 | 5 | 5 | 4 |

### 갱신한 dest 행

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §2 Pure Black | `#000000` DESIGN / P | 7 / 3 | **10** / **6** |
| YAML type-roles | `Plan name 17px Pretendard JP Variable 400` DESIGN / P | 0 / 0 | **3** / **3** |
| YAML type-roles | `` `#000000` nav links `` DESIGN / P | 0 / 0 | **3** / **3** |
| YAML type-roles | `17px` DESIGN | 1 | **4** |
| YAML type-roles | `#1e1e1f` DESIGN / P | 10 / 3 | **12** / **5** |
| §9 | `Plan name 17px Pretendard JP Variable 400` DESIGN / P | 0 / 0 | **3** / **3** |
| §9 | `` `#000000` nav links `` DESIGN / P | 0 / 0 | **3** / **3** |
| §11 | 고유 8바늘 DESIGN / P | 0 / 0 | **2** / **3** |
| F2 | `#1e1e1f` | 10 / 3 | **12** / **5** |
| F2 | `#000000` | 미수록 7 / 3 | **10** / **6** |
| F2 | 고유 8바늘 | 미수록 | **2** / **3** |
| F2 | `Plan name 17px Pretendard JP Variable 400` | 미수록 | **3** / **3** |
| F2 | `` `#000000` nav links `` | 미수록 | **3** / **3** |

B2a `derived editorial implementation inference` DESIGN dest **24** 불변. `#197b2e` dest **18**. `#ffffff` dest **13**. YAML `use` 18/18 dest 불변.

`node scripts/check-limiter-ledger.mjs liner` → 본문 **24** / 원장 **24** (213–236) 1:1 OK.
`node test-v2/tools/migrate-reference.mjs --brand liner --gate-only` → PASS.

FIX_DONE liner fixed=3 logdest=13

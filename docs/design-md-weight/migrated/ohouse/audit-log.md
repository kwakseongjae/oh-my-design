# ohouse 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/ohouse/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/ohouse/DESIGN.md`
검증 sibling: `web/references/ohouse/.verification.md` — `find`와 `test -f`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음(getdesign Internal Error; refero Internal Error). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Ohouse-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 22 / 원장 22 (137–158). 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Audience `:28` 전기 삭제·occupation/motivation 비재수록은 세 번째 부류인데 인접 완전형이 `:34`(그룹을 audience로 읽기)뿐이었다. Compact blue `:199`의 `0px 16px`/`4px` 비병합과 Circular `:227`의 `24px`/48×48px 비병합은 Foundations 한정이 인접하지 않다. Spacing `:103`·Shape `:115`·Elevation `:119`는 인접하나 원장이 이름하는 비병합을 한정 문장이 끝까지 안 닫았다. provenance Sibling handling은 `web/references/ohouse/.verification.md`가 있는데 「없다」고 적었고, 로그 A5a도 동형. Proof notes `#ffffff` 역할 분리가 circular-control text를 빠뜨렸다. 로그는 `tokens.source`를 DESIGN 키 경로로 묶고, `home::article.today-deal-item` 2차 목적지(Primary tasks)와 “Do not infer hover or mobile behavior” 2차 목적지(Capture record)를 안 적었다.

문장 분류: 브랜드 발행 사실(오늘의집·Ohouse Store·Customer’s O! Moment·YAML `use` 바이트·About/Team culture 문장) / 관측 기술(hex·geometry·`type: card`·셀렉터) / 편집적 해석·인과 판단(토큰 표면 읽기, 과제/청중 선정, 전기 삭제, 숫자 비병합, kind 생략, Named gaps 프레이밍). 세 번째 부류와 원장 정확성만 수정. 토큰 값·컴포넌트 표·applicability·구조는 그대로.

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 6건, 발생 수 +3)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:28` — Audience 머리 | 전기 삭제·occupation classification/motivation 비재수록은 세 번째 부류. `:34`는 그룹을 audience로 읽기만. | 완전형 신설(같은 줄에 접어 넣음). 발생 수 +1. |
| 2 | `DESIGN.md:103` — Spacing | 원장은 occurrence clusters / compact-action padding / type sizes 비병합을 이름하는데 한정은 「each number on its own key path」만. | 기존 완전형에 그 세 비병합을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:115` — Shape | 원장은 `full: 24` unmerged from 48×48px를 이름하는데 한정은 universal scale만. | 기존 완전형에 48×48px 비병합을 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:119` — Elevation | 원장은 YAML `0 2px 5px` beside body `0px 2px 5px`를 이름하는데 한정은 multi-level scale만. | 기존 완전형에 keep-both를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:199` — Compact blue action | `0px 16px` off `tokens.spacing.md: 16`, `4px` not a universal scale는 세 번째 부류. `:103`/`:115`는 Foundations라 인접이 아니다. | 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:227` — Circular floating control | `24px` on `tokens.rounded.full: 24`, 48×48px not that radius step는 세 번째 부류. `:115`는 Foundations라 인접이 아니다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **25**, `not Ohouse-authored` **25**, `separately published UI specification` **25**. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived` P dest **1**). `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 34, 38, 49, 57, 65, 77, 103, 115, 119, 131, 147, 151, 169, 180, 199, 227, 326, 335, 342, 376.

### E1 — provenance derived 범위 (7건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 넓은 쪽(원장이 본문 한정보다 많이 이름)도 본문 한정을 맞추거나 행을 나눈다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | Sibling handling | `No web/references/ohouse/.verification.md is present.` — 파일은 `test -f`로 존재. | 존재한다고 고치고, sibling 전용 값은 본문에 승격하지 않았다고 적음. 부재를 세 파일 분모로 단언하지 않음(E2d). |
| 8 | Audience 행 | `:34` 한 행이 전기 삭제와 audience 읽기를 같이 이름. 본문 `:34`는 후자만. | `:28` 행 신설(전기 삭제). `:34`는 그룹 읽기만. |
| 9 | Compact blue 행 | 없음. 본문 `:199` 신설. | 행 157 신설. |
| 10 | Circular floating 행 | 없음. 본문 `:227` 신설. | 행 158 신설. |
| 11 | 헤더 | 22 complete / 22 data rows. | **25** / **25** (137–161). |
| 12 | Omission ledger §9 | snapshot bound를 Avoid만. 본문은 Capture record `:178`에도 있음. | Avoid + Capture record. |
| 13 | Proof notes hex 분리 | `#ffffff` 역할에서 circular-control text 누락. DESIGN dest **8** at 11/40/77/80/190/216/217. | circular-control text를 분리에 추가. |

헤더 / 데이터 행 **22 → 25** at 137–161 (E1 1:1). `node scripts/check-limiter-ledger.mjs ohouse` 본문 25=원장 25.

### E2 / E2a / E2c — 로그 목적지 (9건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 줄 수가 아니라 출현 수. 본문을 고친 뒤 A5a·F2 dest를 재실측했다(lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 14 | YAML identity 행 | homepage / `#00a1ff` / favicon dest를 줄 목록 없이 Dual만. | homepage DESIGN dest **4** at **9×3**/166 · P dest **12**. `#00a1ff` DESIGN dest **6** / P dest **4**. favicon DESIGN dest **1** / P dest **2**. `오늘의집` DESIGN dest **1** / P dest **1**. |
| 15 | YAML `tokens.source` 행 | 「All YAML `tokens.*` key paths grep-present in DESIGN.md」. `tokens.source` DESIGN dest **0** / P dest **3**. `live-extract` DESIGN dest **0**. | value paths는 DESIGN. `tokens.source` / `extracted` / `live-extract` / `components_harvested: true`는 provenance-only (DESIGN dest **0**). `tokens.spacing.md: 16` dest **5**. `0px 16px` dest **5**. `tokens.rounded.full: 24` dest **4**. 48×48px dest **7**. |
| 16 | shadow 행 | Dual writings. 본문 한정 확장 후 dest가 늘음. | YAML writing DESIGN dest **4** / P dest **1**. body writing DESIGN dest **4** / P dest **1**. |
| 17 | §2 색 행 | hex dest 미기재. | `#00a1ff` **6** · `#ffffff` **8** · `#2f3438` **4** · `#424242` **5** · `#828c94` **1** · `#e0e0e0` **2** · `#35c5f0` **2** · `#141414` **3**. |
| 18 | §4 셀렉터 행 | Selectors dual with provenance. `home::article.today-deal-item` DESIGN dest **2** at 21/324 — Primary tasks가 빠져 있음(fitpet형 2차 목적지). | Primary tasks `:21` + Product-list Use `:324` + provenance Capture selectors. `not in the token set` DESIGN dest **6**. |
| 19 | §9 행 | hover/mobile bound를 Avoid만. DESIGN dest **2** at 65/178. | Avoid `:65` + Capture record `:178`. complete-Ohouse-system bound는 Avoid dest **1**만. |
| 20 | F1 | 22/22/22. | **25/25/25**. 한정 줄 목록을 실측으로 교체. |
| 21 | F2 | dest를 착수 Dual 나열로 적음. 본문 수정 후 재실측 없음. | 출현 수·줄 다중도를 재실측. B2a DESIGN dest **25** / P dest **1** (색인). B3 비주장: `transition properties` DESIGN dest **0** · `animation name` DESIGN dest **0**. |
| 22 | A5a | `No .verification.md sibling.` — 파일 존재. Gate compared/candidates 「not run」. | sibling 경로 직접. Gate compared **1** / candidates **130**. 손 대조 8종 DESIGN dest >0, 미생존 0. Sibling-only Team-culture labels 본문 미승격. |

Destination SHA DESIGN `46c0fa5d734479eb657eb917655b1e572e5639d70a9c3f5d3adc50097825d30c` → `77372792105a8c1d0b819fc4fc503f3cad8c0d43cddba152009b7f85533fb1d5`. provenance `a0474166aca2b64683825d66a34eb36ffb8f38c11df96d1f78adc31321b38ab5` → `85dd7f0bd403dc9b9091387691bfa5e9ae2bc74bd4bd38c35e928030d14e42f3`. 줄 수 DESIGN `wc -l` **386** 불변. provenance 183→**185**. `wc -w` DESIGN 4855→**5025**.

E2c: B3 전문을 본문이 담지 않음. 로그가 「B3 유지」를 주장하지 않음. Principles 형태 `:49` dest 1.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 역할 표, 컴포넌트 상태 applicability, 절 구조. 원본·sibling 미수정.
- 기존 22개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다 (v12 전제 주석).
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- Motion 「No motion token is promoted」는 원본 §15 unresolved의 생략 진술(kmong). 합성을 유도하지 않음. 곡선·duration 원본에 없음(kkday T2 관례 해당 없음).
- YAML `type: card` dest 2 at 315/326. Kind omitted on product-list (C4).
- `focus-visible` 행에 hex 없음 (B1 treatment 미해상).
- A1 `tokens.components.product-list-article` 7필드: type/bg/fg/radius/padding/use는 블록 행+YAML 주석. Font 값은 Font 행 `15px / 400 / Pretendard Variable`, 키 경로는 YAML fields 행. icook형 값 소실 아님 — 복원하지 않음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 오늘의집 / Ohouse Store / Bukchon / Kitchen / Pangyo Lounge / Customer’s O! Moment / About·Team culture 문장 / YAML `use` 바이트.
- **관측 기술** — `#00a1ff` `#ffffff` `#2f3438` `#424242` `#828c94` `#e0e0e0` `#141414` / `91×40px` `48×48px` / `type: card` / `home::[data-omd-capture="9"]`.
- **편집적 해석·인과 판단** — 세 URL을 토큰 표면으로 읽기, 과제/청중 선정, 전기 삭제, 숫자 비병합, kind 생략, Named gaps 프레이밍, favicon identity-pointer.

세 번째 부류 중 22곳은 착수 시 인접 완전형이 있었고, 이름되지 않은 판단 3곳은 기존 한정에 접어 넣었으며, 인접하지 않은 3곳은 그 자리에 신설했다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **1** / candidates **130**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 전수 보존이 아니다. 손 대조 발행 카피(오늘의집 dest 1 · Bucketplace dest 5 · Customer’s O! Moment dest 2 · Ohouse Store dest 2 · Ohouse Bukchon dest 1 · Ohouse Kitchen dest 1 · Ohouse Interior Pangyo Lounge dest 1) 미생존 0. 라틴 링크 라벨 `Bucketplace About` SRC **2** / SIB **1** / DESIGN dest **0** / P dest **1** / L dest **2** — 원본 §1·§11 링크 텍스트. 본문 Principles/Content는 `About`으로 착지. 고치지 않음(A5, 범위 밖).
- **B1.** sibling `web/references/ohouse/.verification.md` 존재(경로 직접). sibling 전용 값 `coverage score 76` / `22 captured component fingerprints` / `2026-07-13T12:03:43.121Z` / `playwright_cli` / `rgb(0, 161, 255)` / `Apple SD Gothic Neo` / `맑은 고딕` / `v1.3.8` / `home::li` / `Growth Mindset` / `Striving for Excellence` / `Ohouship` / `Bucketplace, Co., Ltd.` / `2019 O2O` / `0px 2px 5px 0px` / `form-error` DESIGN dest **0**. 구조 분류 `portal H2` dest 0. 고치지 않음(B1 보고).
- **D2a.** 식별자·나이·도시 원본에 없음. Audience는 원본 §13 그룹 세 줄. 처분 행은 필드 종류만(이름·나이·도시를 처분 행에 열거하지 않음). gitlab형 동기 잔존·hubspot형 소속 신조어 없음. `occupation classification` / `motivation`은 비재수록 필드 종류 문장(DESIGN dest **2** / P dest 1·2)이지 원형 라벨 삭제가 아니다.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 고친 Sibling handling은 파일 존재를 적고 본문 미승격만 말한다. 로그 dest 0은 DESIGN.md를 분모로 둔다(`tokens.source` DESIGN dest 0 / P dest 3).
- **hex 귀속.** `#ffffff`는 canvas (`:80`) · compact-action text (`:190`) · circular background (`:216`) · circular text (`:217`) · control surfaces (`:11`/`:40`). `#00a1ff`는 action fill (`:79`/`:189`) · text-action (`:270`) · primary_color. 분리를 Proof notes에 맞춤. 본문 역할은 고치지 않음.
- **충돌 처리 (항목 5).** YAML shadow `0 2px 5px`와 본문 `0px 2px 5px`는 전 문서 keep-both. radius `0` / `0px` 병기. `#35c5f0`는 전 자리 비재수록. 자리마다 다른 충돌 정책 없음.
- **A1 키 경로.** `product-list-article` type/bg/fg/radius/padding/font/use 블록 보존. 복원 0.

`--gate-only` PASS, `problems []`. use 6/6.

AUDIT_DONE fixes=22

---

## 기계검사 정정 (2026-09-02)

검사 출력: limiter 25=25 1:1 OK · use 6/6 OK · gate PASS · `portable_core=false failed=no_prescriptive_placeholders`.

원장 1:1·YAML `use:` 착지·7앵커·governance claim 정본 문안은 이미 맞았다. 헤더 `## Derived editorial inventory` / `| Location in DESIGN.md | Qualified reading |` 25행 유지. Authority / Application priority / Unknowns / Changes 본문은 정본 바이트 그대로 — 되돌릴 자리 없음. 본문 한정이 빠진 자리 0.

### 원인

`scripts/design-md-core-conformance.cjs` `BARE_PLACEHOLDER`가 Font evidence 표 첫 칸 전체가 `Unresolved`인 행을 처방 placeholder로 읽음 (expo evidence-class 표 동형). `prescriptivePlaceholderLines` 실측: `:138` `| Unresolved | \`Times\` appeared… |`. 원본 §3 Font evidence classes는 `- **Unresolved:** \`Times\` appeared…` 불릿이다.

### 정정 (1건)

| # | 위치 | 무엇이었나 | 어떻게 고쳤나 | 근거 |
|---|---|---|---|---|
| 1 | `DESIGN.md` Font evidence 표 | 클래스명 칸 `Unresolved` → `no_prescriptive_placeholders` FAIL | 원본 §3 불릿 형식으로 환원 (`- **Live computed…:**` / `- **Official font…:**` / `- **Declared-only…:**` / `- **Unresolved:**`). 클래스 내용·Times 문장 바이트 유지. 토큰 값·YAML `use`·컴포넌트 표·상태 applicability 불변 | expo `BARE_PLACEHOLDER` 선례. 원본 dest: `**Unresolved:**` SRC 1 |

표 헤더+구분행 삭제(−2줄)로 `:138` 이후 한정 줄이 이동. provenance inventory 10행 줄 번호를 재실측 값으로 맞춤 (한정이 빠진 자리 0, 행 병합/삭제 0). migration-log dest 줄 번호 재실측.

### dest 재실측 (`indexOf` 전수, `grep -c` 미사용)

| 문자열 | SRC | DESIGN | provenance | log |
|---|---:|---:|---:|---:|
| `**Unresolved:**` | 1 | **1** | 0 | 3 |
| `\| Unresolved \|` | 0 | **0** | 0 | 0 |
| `` `Times` appeared on two text elements without a matching loaded FontFace or system mapping; it is not a UI-family token. `` | 1 | **1** | 0 | 0 |
| `https://ohou.se/` | 11 | **4** at 9×3/164 | 12 | 2 |
| `home::article.today-deal-item` | 1 | **2** at 21/322 | 1 | 2 |
| `Do not infer hover or mobile behavior` | 1 | **2** at 65/176 | 2 | 1 |
| `Reading the favicon URL as an identity pointer on the captured host` | 0 | **1** at `:167` | 0 | 1 |
| `derived editorial implementation inference` | 0 | **25** | 1 | 1 |
| `not Ohouse-authored or a separately published UI specification` | 0 | **25** | 1 | 1 |

YAML `use` 6/6 문자 그대로 착지. 한정 줄: 9, 11, 13, 19, 28, 34, 38, 49, 57, 65, 77, 103, 115, 119, 131, 145, 149, 167, 178, 197, 225, 324, 333, 340, 374.

### 검증

- `node scripts/check-limiter-ledger.mjs ohouse` → 본문 25 = 원장 25 (137–161) 1:1 OK
- `node scripts/check-yaml-use-landing.mjs --list ohouse` → use 6/6 (100%) 미착지 0
- `node test-v2/tools/migrate-reference.mjs --brand ohouse --gate-only` → PASS, problems []
- `inspectDesignMd` → `portable_core: true`, placeholders []

Destination SHA DESIGN `77372792105a8c1d0b819fc4fc503f3cad8c0d43cddba152009b7f85533fb1d5` → `abea346ad7cca4da9deb665fd4baca247cdbc44bb4abc5155e2d5f8e7a8b89c3`. provenance `85dd7f0bd403dc9b9091387691bfa5e9ae2bc74bd4bd38c35e928030d14e42f3` → `ed5d32edfa1fbc604089be44129d7eeb6663cc91396495319cf67487f0d2a12d`. 줄 수 DESIGN `wc -l` 386→**384**. provenance **185** 불변.

토큰 값·컴포넌트 표·상태 applicability·원본·CURRENT_STATE 미수정.

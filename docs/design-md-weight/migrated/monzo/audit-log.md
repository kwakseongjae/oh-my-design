# monzo 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/monzo/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/monzo/DESIGN.md`
검증 sibling: `web/references/monzo/.verification.md` — `find`로 경로 직접 확인. 파일 **존재**. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. 톤오브보이스는 콘텐츠 가이드이지 UI 사양이 아니다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Monzo-authored or a separately published UI specification`을 요구한다. 기존 36건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. Font-evidence 표 셀의 추가 `separately published` 1건은 닫힘이 아니다.

착수 실측: 본문 완전형 **36** / 원장 **36** (156–191). 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Distinctive traits `:44`는 비병합만 이름하고 불릿의 warm-rounded-distinctly-non-banking / 500px-as-the-brand's-most-recognisable-gesture를 빠뜨렸다. Semantic color `:94`는 역할 비병합만 이름하고 95%-achromatic-so-coral-retains-maximum-attention / warmer-than-pure-black / fresh-and-clean / slightly-deeper-than-mint / slightly-lighter-than-midnight / teal-complements-coral-without-competing을 빠뜨렸다. Family `:204`는 다섯 type-rule만 이름하고 `:212`의 not-presenting-sans-serif-as-either-commissioned-family를 빠뜨렸다.

문장 분류: 브랜드 발행 사실(톤오브보이스 원칙명·라이브 스트링·YAML 값·사명) / 관측 기술(hex·height·clamp·HTML comment) / 편집적 해석·인과 판단(비병합, 분위기, 성격화, 재구성 금지). 세 번째 부류만 수정 대상.

## 수정 목록 (20건)

### B2a — 인접 한정 (본문 3건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:44` — Distinctive traits | 불릿의 “warm, rounded, distinctly non-banking” / “the brand's most recognisable gesture”는 세 번째 부류. 기존 한정은 비병합만. | 기존 완전형에 두 성격화를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:94` — Semantic color | 95% achromatic 인과, warmer than pure black, fresh and clean, slightly deeper than mint, slightly lighter than midnight, complements without competing은 세 번째 부류. 기존 한정은 역할 비병합만. | 기존 완전형에 그 성격화를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:204` — Family | `:212` “Do not present `sans-serif` as …” / system-font 치환 금지 / display-as-body 금지는 세 번째 부류. 기존 한정은 다섯 type-rule만. | 기존 완전형에 세 재구성 금지를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **36**, `not Monzo-authored` **36**, `separately published UI specification` **36**, `separately published` **37**. `provenance.md`의 inventory 인용은 색인이지 한정이 아니다 (`derived editorial implementation inference` provenance dest **1**). `migration-log.md` mention dest **1**은 use가 아니다.

한정 줄: 11, 13, 15, 21, 25, 31, 40, 44, 56, 64, 77, 94, 129, 131, 137, 145, 149, 162, 189, 204, 216, 233, 235, 242, 244, 260, 491, 495, 505, 517, 530, 541, 568, 575, 579, 625.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 행 수는 36 유지.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Distinctive traits 행 | 비병합만. 본문 `:44`가 이제 불릿 성격화도 이름한다. | 그 판단을 행에 추가. |
| 5 | Semantic color 행 | 역할 비병합만. 본문 `:94`가 이제 소스 성격화도 이름한다. | 그 판단을 행에 추가. |
| 6 | Family 행 | type-rule만. 본문 `:204`가 이제 sans-serif/system-font/display-as-body 금지도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **36 = 36** at 156–191 (E1 1:1). `node scripts/check-limiter-ledger.mjs monzo` 1:1 OK.

### E2 / E2a / E2c — 로그 목적지 (14건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 준수 주장은 본문 실재 시에만. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다. 본문 한정 수정 뒤 dest를 재실측했다(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | YAML identity `https://monzo.com/` | 로그가 provenance dest 4+. 실측 P dest **12**. DESIGN dest 3은 맞음. | P dest **12**. |
| 8 | 같은 행 Country UK / category fintech | 로그가 DESIGN dest 1. 실측 bare `UK` DESIGN dest **8** / P dest **1**. `fintech` DESIGN dest **3** / P dest **1**. 카탈로그 문장 `Country in the source catalog is UK` dest **1**, `category is fintech` dest **1**. | 문장 dest와 bare dest를 분리. |
| 9 | YAML `tokens.colors` | `#091723` P dest many → 실측 **8**. `#112231` P dest 1 → 실측 **2**. `teal` / `canvas` / `mint` / `soft-mint` / `body` / `muted` / on-fill paths / `hairline` / `#3b4c54`가 DESIGN만 적혀 있고 P에도 있음(E2a). | P dest를 파일별로 적음. |
| 10 | YAML family | `MonzoSansDisplay` P dest 4 → 실측 **6**. `MonzoSansText` P dest 4 → 실측 **8**. DESIGN dest 30 / 44는 맞음. | P dest **6** / **8**. |
| 11 | YAML typography metrics | `48.8288px` P dest 1 → 실측 **3**. `tokens.typography.heading` / `body` dest 1 each → `grep -oF` dest **2** (heading-lg / body-sm 접두). | P dest **3**. 접두 dest 2와 unique path dest 1을 분리. |
| 12 | §1 Distinctive traits | 한정 at 11/13/15만. `:44`가 이제 불릿 성격화도 이름한다. | `:44` 성격화를 행에 추가. |
| 13 | §2 `95% achromatic` | 로그가 DESIGN dest 2. 실측 exact dest **1**. `95% of the UI achromatic` dest **1**. 한정 접힘 후 substring `95%` dest **3**. | exact dest 1 + 다른 문자열 dest 1 + substring dest 3. |
| 14 | §3 Family | 한정 at 189/204/216. `:204`가 이제 재구성 금지도 이름한다. `-0.05em` dest 6은 맞음. | `:204` 접힘을 행에 추가. |
| 15 | §7 Don'ts | 로그가 `DESIGN.md` 75–83. 실측 항목은 79–86 (표제 75, 한정 77). | 75–86. |
| 16 | §9 `rgba(255,255,255,0.7)` | 로그가 DESIGN dest 2만. 실측 P dest **2**. | DESIGN dest 2 / P dest 2 (E2a). |
| 17 | §11 Starling Bank | 로그가 DESIGN dest 1 / P dest 0. 실측 P dest **1** (inventory `:159`, mention). | P dest **1** (E2a). 창립자 식별자를 처분 행에 재열거하지 않음. |
| 18 | §12 Principles dest | 로그가 `Transparency, always.` / `Restraint earns attention.` dest 2. 실측 마침표 포함 dest **1** each. 마침표 없이 dest **2** (한정 목록이 추가). `A bank in your pocket` dest **2**는 맞음. `Warm but precise.` dest **1**. | 마침표 유무를 분리. inventory 156–191. |
| 19 | B2a / Pass 1 | 36 위치 목록이 접힌 성격화·재구성 금지를 이름하지 않음. | `:44` / `:94` / `:204` 접힘을 목록에 반영. 계수 **36** 유지. |
| 20 | Pass 2 dest 재실측 | 본문 수정 뒤 `95%` dest 2→**3**. 이중 목적지 목록이 P dest를 빠뜨린 행이 있었음. | 재실측 뒤로 고침. 발행 카피 dest는 불변. |

E2c: B3 전문 `transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest **1**. `Official documentation of a single curve or duration is not that gate` dest **1**. 준수 주장 유지.

Destination SHA는 기록하지 않음. 줄 수 DESIGN **634** (`wc -l`; 한정은 기존 줄에 접힘, 줄 수 불변). provenance 205. `wc -w` DESIGN **8103**.

A1 키 경로: YAML `tokens.components` 10레코드의 `type` / `bg` / `fg`(있는 것만) / `radius` / `padding` / `font`(있는 것만) / `border` / `shadow` / `use`가 대응 블록에 **행으로** 있다. 같은 hex가 다른 블록에 있어 grep만 통과하는 icook형은 없음. 복원 0.

## 범위 밖 관찰

- **D2a.** 처분 행(로그 §13, provenance Omission ledger)은 `§13 fictional archetypes (4 people; names, ages, and cities included)`로 무식별. 이름 dest DESIGN **0** / provenance **0** / log **0**. `Manchester` / `Birmingham` / `Leeds` dest 0. `London` DESIGN dest 3은 원본 §11 창립·밀레니얼 서술이지 페르소나 도시가 아니다. 원형 라벨 `UK millennials` / `Gen Z first-time bankers` / `small business owners` / `families`는 원본 §13 머리 dest 1 / 산출 dest 1 — 게이트 copy-loss가 요구하는 원형 라벨. `tax pot` DESIGN dest 1 · `freelancer` dest 2는 원본 §1 분위기 문장(`precise enough for a freelancer checking their tax pot`)의 카피이지 §13 동기 승격이 아니다. 소속 분류 신조어 dest 0. 고치지 않음.
- **E2d.** 부재 단언 행 전수. sibling-only `Manage your money today` / `39.0624px`의 DESIGN dest 0 주장은 DESIGN을 분모로 두고 참이다. 로그 mention은 use가 아니다. provenance Sibling file은 「이 원장에 남긴다」이지 「세 파일 어디에도 없다」가 아니다. furiosaai `:183`형은 없음.
- **B1.** sibling 전용 값·분류의 본문 승격 없음. `Manage your money today` / `39.0624px` / `rgba(9, 23, 35, 0.3)` / `border-radius: 100%` / `height 43px` / `border-radius: 100px` / `8px 12px` / `height 40px` / `rgba(9,23,35,0.3)` ×20 / current-account frequency / text frequency ×619 / Refero tagline / `portal H2` / `Carousel nav` DESIGN dest **0**. `48.8288px` DESIGN dest 5는 원본 HTML comment·YAML heading-lg 동반이지 sibling H2 `39.0624px`가 아니다.
- **A5a.** 게이트 `copy-loss` compared **0** / candidates **176** (`compared < candidates` → 손 대조 의무). 발행 라벨 손 스윕 21 extracted / 0 missing. YAML `use` 18 / 0. sibling 발행 카피 1종(`Manage your money today`)은 provenance에만 있고 본문 승격 없음. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아님. 설명문·use 라벨 차이: 원본 §4 `16px / 600 / MonzoSansText` SRC 5 / DESIGN dest **0** (YAML형 `16px / 600 MonzoSansText` dest 5); `Search bar on light background` SRC 1 / dest 0 (YAML `Search field on light background` dest 2); `Content card on page mint background` / `White card on mint background` / `Accent badge — the one context` / `Primary nav CTA ("Sign up")` / `Active state tab/filter ("Free features")` SRC 1 / dest 0 — use 라벨·글래스이지 발행 카피가 아니다. 고치지 않음.
- **krafton hex 귀속.** `#ffffff`는 canvas · on-primary/on-dark/on-midnight · Inverse 버튼 bg · card-white bg · 배지/칩/버튼 Text. `#091723`는 midnight · ink · homepage CTA · card-dark · Inverse Text. Semantic `:94`와 Scope `:13`이 그 분리를 이름한다. 원장 Semantic 행이 컴포넌트 fg/bg까지 열거하지는 않으나 키 경로가 블록 행으로 남아 있다. 고치지 않음.
- **충돌 처리 일관성.** YAML `#ff4f40` / `#f64d3f` keep-both, midnight/ink 동 hex 비병합, canvas/on-fill 동 hex 비병합 — 한 문서 안에서 같은 keep-both/비병합 정책. krds형 자리마다 다른 처리는 없음.
- **T2 모션 관례.** 0ms / 100ms / 200ms / 300ms는 표에 인용된 채 역할만 남음. 미귀속 cubic-bezier 숫자는 합성하지 않고 생략(kmong형 모범). `ease-exit` 이름이 spec-template 예와 같다는 한정은 Motion `:162`에 있다.
- **원본 열 구조.** 색 역할명 + hex + Token-set path, 타입 롤 표의 Size/Weight/Line height/`use` 열이 살아 있다. krds형 토큰명 열 삭제는 없음.
- **A1 키 경로.** YAML search `shadow` compact `rgba(0,0,0,0.1) 0px 0px 10px 0px`는 Search 블록에 공백형 `rgba(0, 0, 0, 0.1) 0px 0px 10px 0px`로 행이 있다. Elevation에 YAML float 경로 dest 1. 값 소실이 아니라 공백 keep-both. 되살리지 않음.

`--gate-only` PASS, problems `[]`. coverage copy-loss compared 0 / candidates 176.

AUDIT_DONE fixes=20

---

## 기계검사 정정 — portable_core product_surface_scope (2026-09-02)

검사 출력: limiter 36=36 1:1 OK · use 18/18 OK · gate PASS · `portable_core=false failed=product_surface_scope`.

원인: Scope `:11` 문장 `A homepage Midnight Ink CTA is not a proxy for the product-page Teal CTA.` 가 `explicitlyNegatesClaim('scope')`에 걸림. `not` 뒤 32자 안에 `\bproduct\b`(`product-page`). 같은 문장에 evidence-boundary 어휘(`verified` / `This contract does not treat … as a proxy`)가 없어 ATTRIBUTED 가드가 못 막음. 한정이 빠진 자리가 아님 — 본문 완전형 36 / 원장 36 유지. 7앵커·governance 정본 문안(authority / application-priority / unknowns / changes)은 이미 바이트 동일. 토큰 값·컴포넌트 표·상태 applicability·원본·provenance 원장 행 미수정.

정정: 그 한 문장만 Core v2 정본 경계 문안으로 되돌림. `This contract does not treat a homepage Midnight Ink CTA as a proxy for the product-page Teal CTA.` 의미 동일. 하이픈 한정 `homepage-value-not-a-proxy-for-the-product-page`와 stand-in 문장은 그대로(전자는 `verified surfaces` 문장이라 ATTRIBUTED, 후자는 `not` 뒤에 product/surface/scope 없음).

판정 근거 (행): Experience Scope `:11` — 계약 범위 자기부정 FP. 정본 `does not treat … as a proxy` 복원. 원장 병합·삭제 0. 본문 한정 신설 0.

실측 (`python` substring count, 파일별; `grep -c` 미사용):

| 문자열 | DESIGN | provenance | log |
|---|---:|---:|---:|
| `This contract does not treat a homepage Midnight Ink CTA as a proxy for the product-page Teal CTA.` | **1** | 0 | 2 |
| `A homepage Midnight Ink CTA is not a proxy for the product-page Teal CTA.` | **0** | 0 | 2 |
| `homepage-value-not-a-proxy-for-the-product-page` | **1** | 0 | 1 |
| `derived editorial implementation inference` | **36** | 1 | 2 |

검증:
- `node scripts/check-limiter-ledger.mjs monzo` → 본문 36 = 원장 36 (156–191) 1:1 OK
- `node scripts/check-yaml-use-landing.mjs --list monzo` → use 18/18 (100%) 미착지 0
- `node test-v2/tools/migrate-reference.mjs --brand monzo --gate-only` → PASS, problems `[]`
- `inspectDesignMd` → `portable_core: true`, failed `[]`

줄 수 DESIGN **634**. `wc -w` DESIGN **8107**. 원본·CURRENT_STATE 미수정.

FIX_DONE monzo mech

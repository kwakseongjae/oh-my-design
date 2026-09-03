# PatternFly 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/patternfly/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/patternfly/DESIGN.md`
검증 sibling: `web/references/patternfly/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 DS 있음(PatternFly, `https://www.patternfly.org/`, `ds.type: system`). B2a는 toss 예문을 그대로 요구하지 않음(v12 전제 주석). 완전형은 `derived editorial implementation inference` / `not PatternFly-authored` / `taken from a separately published UI specification, including the published PatternFly documentation`.

착수 실측: 본문 완전형 25 / 원장 25행. 숫자는 맞았으나 Capture record `:166` 한정이 graph-not-adopted / §14 notes / applicability-by-meaning / Primitive type / not-complete만 이름하고, 같은 절 `:172`의 generic `Focus` ≠ `focus-visible`(B1)과 absence ≠ `not-applicable`(C1)을 빠뜨렸다. YAML `tokens.components.primary-action.states` 전문은 Capture record `:170`에만 있고 Public-home action 블록에 행이 없었다(icook형: 값은 다른 자리에 있어 grep「어딘가에 있다」는 통과). 로그는 본문에 없는 문자열을 2차 목적지로 적었다.

## 수정 목록 (15건)

### B2a — 인접 한정 범위 확장 (본문 1건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:166` — Capture record | `:172`의 generic `Focus` ≠ `focus-visible`, absence of a capture ≠ `not-applicable`은 세 번째 부류. 같은 절의 기존 한정은 graph-not-adopted / §14 notes / applicability-by-meaning / Primitive type / not-complete만 가리킨다. | 기존 완전형에 두 판단을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 25, `not PatternFly-authored` 25, `including the published PatternFly documentation` 25. 단수 24 + 복수 `inferences` 1. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 13, 15, 17, 23, 32, 36, 46, 59, 66, 70, 83, 96, 106, 110, 114, 122, 138, 142, 159, 166, 217, 244, 251, 256, 300.

### A1 — 키 경로 복원 (1건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 2 | Public-home action 블록 | YAML `tokens.components.primary-action.states` 전문이 대응 블록에 행으로 없음. Capture record `:170`에만 있음. 블록의 `Observed: default only`는 요약이지 키 경로가 아니다. | `- States:` 행으로 YAML 문자열 바이트 복원 at 203. DESIGN dest **2** (170 + 203). 해석 없음 — 값 복원. |

시각 필드(type/bg/fg/radius/padding/font/use)는 착수 시 이미 대응 블록에 행으로 있었다. featured-card YAML에는 `states` 키가 없어 만들지 않음.

### E1 — provenance derived 범위 (5건)

좁은 쪽도 FAIL. 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 같은 hex의 역할 분리가 원장에 없으면 원장을 실제에 맞춘다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | Capture record 행 | graph-not-adopted / §14 / applicability / Primitive type / not-complete만. 본문 `:166`이 이제 Focus≠focus-visible · absence≠not-applicable도 이름한다. | 두 판단을 행에 추가. |
| 4 | inventory 줄 번호 | `:216` `:243` `:250` `:255` `:299`. States 행 삽입 후 실제는 `:217` `:244` `:251` `:256` `:300`. | 줄 번호를 실측에 맞춤. |
| 5 | Proof notes | `#ffffff` canvas / primary-action text / featured-card bg, `#151515` foreground / featured-card text 분리가 원장에 없음. | Proof에 same-hex role split 1행 추가 (본문 색 배정은 고치지 않음). |
| 6 | Surfaces 단락 | 세 token-capture URL을 Scope + Primary tasks dual로 적음. 홈 URL은 Primary tasks 25에 없음 (fitpet형). | 홈 URL은 Scope dual, Primary tasks는 이름만. button/color URL만 Scope + Primary tasks 26–27. |
| 7 | Omission ledger §13 | 역할 라벨을 「role labels」로만 적음. 원형 라벨은 처분 행에 적어야 copy-loss와 구분된다(wave 41). | `Enterprise front-end developer`, `Product designer`, `Open-source contributor`를 처분 행에 명명. 동기는 재수록하지 않음. |

헤더 / 데이터 행 **25 → 25** (E1 1:1). 한정 수 +0.

### E2 / E2a / E2c — 로그 목적지 (8건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | YAML identity 행 | `primary_color` provenance **140**. 140은 로고 URL 노트. 실제 `#0066cc` P dest 14/25/**142**. Primary tasks를 homepage URL dest로 적음. Primary tasks 25 DESIGN dest of exact homepage URL **0**. | P dest **14/25/142**. Homepage URL dest는 Scope 9/11 + provenance. Primary tasks 25는 이름만. |
| 9 | YAML `omd`/`ds` 행 | Packet dates `2026-07-13` / `2026-07-14` dual Scope 11. `2026-07-14` DESIGN dest **0**. Verification URLs dual Primary tasks 25–27. 25에 홈 URL 없음. `tokens.source` P dest **143** → 삽입 후 **144**. | `2026-07-13` dual Scope 11. `2026-07-14` provenance-only. Home URL not Primary tasks. `tokens.source` 17/27/138/**144**. |
| 10 | YAML tokens/components · §4 | 로그 문자열 `Primitive type: button` DESIGN dest **0**. 실제는 `Primitive type: \`button\`` dest **1** at 194. card 동형 dest **0** / 실제 224. `states`를 170 only. | 백틱 형태 dest 1. `states` dual 170 + 203. |
| 11 | §1/§11 URL 행 | About URL dual Scope **9/17**. About URL DESIGN dest 9/264/266, **17 dest 0** (fitpet형). 로그 문자열 `no named executive quotation` DESIGN dest **0**. 실제 `does not provide a named executive quotation` dest **1** at 17. | About URL Scope 9 + Content 264/266. 실제 인용문으로 교체. |
| 12 | §11 Brand Narrative 행 | Unique propositions를 Dual Scope + provenance Narrative로 적음. `PatternFly 6` P dest **0**. Narrative 절은 URL만. | 고유 명제는 Scope-only. provenance Narrative는 URL dual. |
| 13 | §14 행 | handling-boundary table dual provenance Proof. 표 본문은 DESIGN 174–185 only. Proof는 생략 정책이지 표 행이 아님. | 표는 DESIGN-only. Proof dual 철회. |
| 14 | §4/§5/§8/§10/§15 줄 번호 | States 행 삽입 전 번호(Use 203/230, B2a 216/243/250/255, Layout 248/250, Content 263–265, Named gaps 308). | Use 204/231, B2a 217/244/251/256, Layout 249/251, Content 264–266, Named gaps 309. |
| 15 | §13 · F1/F2 | 처분 행에 원형 라벨 없음. F2가 §14 table·B3 Named gaps 308·Primary tasks URL을 dual로 주장. | 라벨 3종을 처분 행에 명명(본문 dest 0). F1/F2를 감사 재실측으로 교체. |

Destination SHA `a2562b1876543e075f48ee5f9f00f3b1c1bb9fc26bdd3387d163fbfdc8a8d056` (DESIGN). 줄 수 DESIGN **312** (착수 311 → States 행 +1, 한정은 기존 줄에 접힘). provenance **193**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 25개 완전형은 evidence class를 끝까지 닫음. 발행 DS 있음 — toss형 닫힘 비적용. 닫힘은 `including the published PatternFly documentation`.
- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음.
- Scope 원문 About/Theming/Release 문장, Distinctive hex/geometry, Content 공식 paraphrases — 원본. 인접 한정이 편집 읽기만 이름함.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 114 (`transition properties, animation name, duration, easing, and reduced-motion behavior` — `transition properties` dest **1**). Named gaps 309는 단축. 준수 주장 유지.
- `This is not a complete state-coverage claim` dest **1** at 172. `loading` `not-applicable` dest **2** (PA/FC). `Kind: interactive` dest **2**.
- `tokens.source: reconciled` DESIGN dest **0** / P dest **2**. `components_harvested` DESIGN dest **0** / P dest **2**. `FILL IN` dest **0**.
- 무출처 커브 없음. duration/easing 값은 원본에도 없음 — 합성하지 않음(wave 39 kmong). T2 관례로 되살릴 값 없음.
- E2d: 「세 파일 어디에도 없다」 단언 0. 처분 행은 mention이며 부재를 그 문자열로 단언하지 않음.
- D2a: 이름·나이·도시 본문 0 / 원장 처분 행에 식별자 재수록 없음. 동기 문구(`Looks for production-ready` 등) DESIGN dest **0**. 소속 분류 신규 표현 없음. Audience는 About 원문 `designers and developers` / `users and contributors beyond Red Hat`만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — PatternFly, Red Hat sponsorship, About purpose, PatternFly 6 / Default / Project Felt / high-contrast, designers and developers, users and contributors beyond Red Hat, About PatternFly, Download PatternFly’s fonts from GitHub, §12 원칙 제목·UI implication, §7 Do/Don't, §10 Do/Don't 표, Official stance paraphrases, YAML `ds.description`.
- **관측 기술** — `#0066cc` `#151515` `#4d4d4d` `#ffffff` · Red Hat Text/Display · 349/12 · unitless `1.5`/`1.3` · `46.8px`/`21px` · spacing 4/8/16/24 · rounded 0/6/16 · pill 999 · `8px 24px` · 37px · `box-shadow: none` · selectors · `Primitive type` · `interactionCount: 0` · 1440×900 · `ds.type: system`.
- **편집적 해석·인과 판단** — 세 라우트를 계약 표면으로 읽기, 제품/콘솔 비병합, Default≠Project Felt, practical-interface-language, 서사≠토큰 / shared-infrastructure / controlled-evolution, 과제 선정, 페르소나 비승격, 특성 묶기, 원칙·Do/Don't, hex 경로 페어링·문서 예제 비승격, spacing/shape 비병합, elevation/motion 게이트, 폰트 evidence class·canonicity, YAML/표 keep-both, favicon≠portable mark, applicability·Focus≠focus-visible, desktop-capture≠breakpoint, voice register, Named gaps 목록.

세 번째 부류 중 25곳은 착수 시 인접 완전형이 있었고, 그중 1곳은 같은 절의 다른 판단을 이름하지 않아 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 25 | 1 | 1 |
| `not PatternFly-authored` | 25 | 1 | 1 |
| `including the published PatternFly documentation` | 25 | 1 | 1 |
| `Observed default only; the supplied artifact has interactionCount: 0` | 2 | 0 | 0 |
| `does not provide a named executive quotation` | 1 | 0 | 2 |
| `no named executive quotation` | 0 | 0 | 0 |
| `Primitive type: \`button\`` | 1 | 0 | 0 |
| `2026-07-14` | 0 | 10 | 3 |
| `Enterprise front-end developer` | 0 | 1 | 1 |
| `transition properties` | 1 | 0 | 1 |

`migration-log`의 한정 문자열은 mention이지 use가 아니다.

## 범위 밖 관찰

- **A5a.** Gate `compared: 0` / `candidates: 67` (`compared < candidates`). `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아니다. 손 스윕 발행 카피(원칙 제목 4, Do/Don't 표, Official stance 3, About PatternFly, 가족명, 클래스명)는 DESIGN dest ≥ 1. 라틴 카피 손실은 이 스윕에서 안 보임. 원형 라벨 3종은 원본 1 / 본문 0 — 처분 행에 명명해 copy-loss와 구분함.
- **B1 sibling.** sibling-only selector `home::[data-omd-capture="10"]` / `surface-2::[data-omd-capture="45"]` / `surface-2::[data-omd-capture="43"]` / `surface-3::[data-omd-capture="32"]` DESIGN dest **0**. `score 66` DESIGN dest **0**. `portal H2` 0. `navigation/AI` DESIGN dest **0** / P dest 1 (ledger mention). YAML `kind: marketing`은 sibling 전용 분류가 아니라 원본 YAML.
- **hex 역할 분리 (wave 39 krafton).** `#ffffff`는 canvas · primary-action text · featured-card bg, `#151515`는 foreground · featured-card text, `#0066cc`는 catalog/primary · primary-action fill. 배정은 고치지 않음. 원장 Proof에 분리를 적음.
- **충돌 처리 (wave 40 항목 5).** YAML `999` / §4 `999px`, YAML `14/400 Red Hat Text` / §4 `14px / 400 / Red Hat Text`, unitless `1.5`/`1.3` vs px `46.8px`/`21px`, writings of `16` — 문서 전체가 keep-both. 자리마다 다른 정책 없음.
- **열 구조.** 원본 색 역할명·타이포 표 열(Role/Size/Weight/Line height/Surface boundary) 유지. 토큰명 열 삭제 없음.
- **`box-shadow: none`.** DESIGN dest **1** at 110. 원본 본문은 `use no box shadow`. sibling은 `box-shadow none`(콜론 없음). CSS 철자는 sibling 관측의 구두점 정규화. 값 소실로 읽지 않음.
- **A1 나머지 키.** `primary-action` type/bg/fg/radius/padding/font/use, `featured-card` type/bg/fg/radius/font/use, colors/typography/spacing/rounded 경로는 대응 블록·표에 행으로 있음. icook형 hex-elsewhere는 `states`뿐이었다.

AUDIT_DONE fixes=15

## Mechanical correction (use-landing)

Gate already PASS; limiter already 1:1 (본문 25 / 원장 25, heading `## Derived editorial inventory`, header `| Location in DESIGN.md | Qualified reading |`, rows 155–179). `portable_core` already true. Body claim sentences not rewritten. No limiter was missing; no DESIGN.md qualifier attached. Tokens / component tables / applicability / source / CURRENT_STATE / JOURNAL not edited.

Cause: YAML `tokens.components.featured-card.use` (`home::#featured-blog-post-1 — selector-backed pf-v6-c-card pf-m-clickable default geometry on the public home.`) was not a contiguous byte match in portable DESIGN.md. Existing Use line wrapped the selector in backticks (`` `home::#featured-blog-post-1` — … ``), so `includes()` missed the YAML form. Typography YAML `use` two (`Repeated body, list-item, and default control text on all three supplied PatternFly.org surfaces.`; `Observed H1 on the supplied public PatternFly.org surfaces.`) already dest 1. YAML `primary-action.use` is a truncated extract (`\"` inside quotes) and is not counted by the landing checker.

### Fixes

1. **DESIGN.md Featured card `:231` (착지).** Class: YAML `use` landing, not a new limiter. Inserted `Token-set use: home::#featured-blog-post-1 — selector-backed pf-v6-c-card pf-m-clickable default geometry on the public home.` immediately above the keep-both Use line. Dual-form Use line at 232 kept (backticked selector). Token values / applicability table untouched. `grep -oF --` DESIGN dest **1** (was 0). Selector `home::#featured-blog-post-1` DESIGN dest **2** / P dest **1**; verbatim YAML use P dest **0**.

2. **provenance.md Derived editorial inventory Locations (원장, 줄만).** One insertion sits after Public-home action `:217` and before Featured-card qualifier. Data-row count unchanged (25). Location pointers after the insert remapped to the same qualifier sentences: Featured card `:244`→`:245`; Layout `:251`→`:252`; Content `:256`→`:257`; Named gaps `:300`→`:301`. Heading remains `## Derived editorial inventory`; header remains `| Location in DESIGN.md | Qualified reading |`. No extra/missing row.

3. **migration-log.md dest 재실측 (E2a).** YAML featured-card `use` verbatim dest 1 at 231 (backticked Use 232 is not that byte string). Capture selectors Use 204/232. Layout 249/251 → 250/252. Content table 258–262 → 259–263; Official stance 264–266 → 265–267; About URL Content 264/266 → 265/267; Components overview URL 265 → 266. Named gaps danger 305 → 306; unresolved colors 304 → 305; B3 shortened 309 → 310; family forbid 310 → 311. F1 qualifier list 217, 245, 252, 257, 301. Body/display-title YAML `use` Type roles 146–147 dest 1 each.

Limiter still 25:25. No governance claim rewrite. DESIGN SHA `b0ec6079dbd79c03e852e5de4c4aeb45d95d357eae024c5e7d0cf3058273ba81`. 줄 수 DESIGN **313** (착수 312 → Token-set use 행 +1). provenance **193**.

검증:
- `node scripts/check-limiter-ledger.mjs patternfly` → 본문= 25 원장= 25 (155–179) 1:1 OK
- `node scripts/check-yaml-use-landing.mjs --list patternfly` → use 3/3 (100%) 미착지 0
- `node test-v2/tools/migrate-reference.mjs --brand patternfly --gate-only` → PASS, problems []

FIX_DONE patternfly mech


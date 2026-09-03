# Perplexity migration log

- Source: `web/references/perplexity/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/perplexity/.verification.md` — **채택하지 않음**(sibling-only 측정은 portable 토큰이 아님). 상세는 provenance `Sibling handling`.
- Destination: `docs/design-md-weight/migrated/perplexity/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/perplexity/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: ai (US answer engine). 토큰 표면은 원본이 이름 붙인 프로덕션 `https://www.perplexity.ai`. YAML `ds.type` 없음 — 발행 1차 DS 사양 없음. sibling 전용 측정(`pplxSans`, `#000000` body/page, `#016a71`, `11px`, `88px`)은 portable 토큰으로 올리지 않았다.

`provenance.md`의 `Claim ledger`가 YAML 키 경로를 색인한다. 아래 표의 각 행은 **portable 목적지**와, provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 산출 파일을 `grep`한 뒤에 썼다(F2).

Source SHA-256 `27c0bf27a61b74b086ebb4a634a05ac563cf66860a393894917226edb6662bf1` (`web/references/perplexity/DESIGN.md`). Sibling SHA-256 `37e5dc7947772ffcafa21b3ad5b6e5b2cdb70287cf614558714d7afd745a1cb3` (`web/references/perplexity/.verification.md`).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`) | 분리 → provenance; `name` 옮김 → DESIGN.md H1; `homepage` 옮김 → Experience Scope | 이중 목적지. Portable 파일에 frontmatter 없음. H1 `# Perplexity Design System` (`DESIGN.md` 1). Identity 표 `provenance.md` 9–22. `https://www.perplexity.ai` DESIGN dest 3 at 9 / 216 / 290 + provenance dest 8 at 13 / 35 / 43 / 47 / 59 / 83 / 86 / 102 (E2a). Line 51 has no URL. |
| YAML `primary_color: "#20808D"` | 옮김 → Foundations Semantic color · 분리 → provenance Identity | 이중 목적지. Catalog `#20808D`는 YAML `tokens.colors.primary` `#20808d`와 같은 색이되 카탈로그 필드를 토큰 키로 접지 않음. `#20808D` DESIGN dest 29 · provenance dest 6 at 14 / 24 / 131 / 146. `#20808d` DESIGN dest 9 · provenance dest 2 at 24 / 146 (E2a). |
| YAML `logo.type: simpleicons` / slug `perplexity` | 분리 → provenance · 옮김 → Typography & Assets Assets | 이중 목적지. Simple Icons identity이지 1차 마크 파일이 아님. `simpleicons` DESIGN dest 1 at 260 · provenance dest 1 at 15 (E2a). |
| YAML `verified` / `added` / `omd: "0.1"` / `tokens.source: prose-derived` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance; `prose-derived`는 Font evidence에도 증거 등급으로 이름 | `prose-derived` DESIGN dest 1 at 216 · provenance dest 4 at 20 / 35 / 55 / 164 (E2a). `components_harvested` DESIGN dest 0 · provenance dest 3 at 22 / 55 / 165 — 원장 메타, portable 슬롯 없음 (A1c). `ds.type` 필드 없음; 부재는 provenance 24에서 기록하고 채우지 않음. |
| YAML `tokens.colors` (22키) | 옮김 → Foundations Semantic color | 22키 전부. `primary` `#20808d` · `primary-hover` `#1a6873` · `primary-deep` `#13343b` · `primary-tint` `#e5f2f2` · `teal-on-dark` `#34b4c4` · `ink` `#091717` · `canvas` `#fbfaf4` · `surface` `#fcfcf9` · `surface-white` `#ffffff` · `body` `#2e3a3a` · `muted` `#5c6a6a` · `placeholder` `#8a9494` · `hairline` `#e4e4dc` · `hairline-soft` `#efefe9` · `dark-canvas` `#0d1117` · `dark-surface` `#161b22` · `dark-line` `#2a2f37` · `ink-inverse` `#f2f2ed` · `success` `#1f9d6b` · `error` `#e0524a` · `warning` `#d9923a` · `on-primary` `#ffffff`. YAML 소문자와 §2 혼합 대소를 병기. `surface-white`와 `on-primary`를 합치지 않음(A4). `canvas` / `surface` / `surface-white`를 합치지 않음. `teal-on-dark`를 `primary`와 합치지 않음. `tokens.colors.primary` DESIGN dest 8 (`grep -o`; includes the `primary-hover` / `primary-deep` / `primary-tint` prefixes). |
| §2 body-only colors (YAML 키 아님) | 옮김 → Foundations Semantic color as body writings | Surface Raised `#1C2128` DESIGN dest 3 at 86 / 112 / 282 · provenance dest 2 at 75 / 146 (E2a). Ink Inverse 500 `#9BA1A6` DESIGN dest ≥1. Source Slate `#4B5A66` / Source Plum `#6E5A86` / Source Clay `#A86A4B` DESIGN dest ≥1 each. Info `#20808D`는 같은 teal 위의 §2 역할이지 새 YAML 키가 아님. |
| YAML `tokens.typography.family` (`sans` FK Grotesk / `mono` Berkeley Mono) + §3 FK Display / FK Grotesk Neue | 옮김 → Typography & Assets Family + Font evidence | `tokens.typography.family.sans`와 FK Display / FK Grotesk Neue를 합치지 않음. `tokens.typography.family.mono`와 JetBrains Mono fallback을 합치지 않음. Inter / Georgia / system stack은 fallback. FontFaceSet URL 없음. |
| YAML `tokens.typography` 10 roles (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표 | 옮김 → Typography & Assets Type roles | A1a: `1.08` · `1.17` · `1.29` · `1.36` · `1.44` · `1.63` · `1.60` · `1.43` · `1.38` · `1.54`를 px로 바꾸지 않고 비율로 보존하고 §3 `52px (1.08)` 등을 병기. YAML use 10/10 착지. 긴 쪽 §3 Notes: Display Hero `"Where knowledge begins"` DESIGN dest 4; Mono `` `sonar-pro` `` DESIGN dest 3 (wave 37). Heading size YAML `22` beside §3 `22px` DESIGN dest 3 at 233 / 240. `tokens.typography.answer-body.size` `16`을 `tokens.spacing.base: 16`과 합치지 않음. `tokens.typography.caption.size` `13`을 mono `13`과 합치지 않음. |
| YAML `tokens.spacing` (xs 4 … section 64) | 옮김 → Foundations Spacing | 단위 없는 YAML 스텝을 §5 px 목록 옆에 병기. §5-only `20` / `40`은 YAML 키가 아님. `tokens.spacing.base: 16` DESIGN dest 5 at 133 / 147 / 233 / 242 / 635. |
| YAML `tokens.rounded` sm 6 / md 10 / lg 16 / full 9999 | 옮김 → Foundations Shape (+ Components) | `tokens.rounded.full` DESIGN dest 1 at 145. `9999` DESIGN dest 7 · provenance dest 2 (E2a). Answer-card / feed `12`와 ghost `8`은 YAML rounded 키가 아님. |
| YAML `tokens.shadow` ambient / standard / elevated | 옮김 → Foundations Elevation | YAML 문자열 3개 보존. §6 Subtle `0 1px 2px rgba(9,23,23,0.05)` · Elevated (3) `0 4px 16px rgba(9,23,23,0.12)` · toast `0.18`을 YAML 키와 합치지 않음. `tokens.shadow.ambient` DESIGN dest 3. `blur(8px)` DESIGN dest 1. |
| YAML `tokens.components` 15개 (`type: button` ×3, `badge` ×4, `input` ×2, `card` ×2, `tab` ×1, `toast` ×1, `dialog` ×1, `toggle` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 보존. 산출 `Primitive type: \`button\`` 3 · `badge` 4 · `input` 2 · `card` 2 · `tab` 1 · `toast` 1 · `dialog` 1 · `toggle` 1 = YAML과 동수. YAML `use`를 각 블록 Token-set use 행으로 병기. |
| YAML vs §4 rest-fill 충돌 (secondary / ghost) | 옮김 → 두 기록 모두 (충돌을 고르지 않음) | `button-secondary.bg` `#fcfcf9`와 §4 rest `transparent` 병기. `button-ghost.bg` `#efefe9`와 §4 rest `transparent` 병기. `button-secondary.bg` DESIGN dest 2 at 86 / 288 · provenance dest 2 at 146 / 157 (E2a). |
| §4 Discover / Feed Card | 옮김 → Components & States | YAML 컴포넌트 키 없음. `not in the token set` DESIGN dest 2 at 288 / 493 · provenance dest 1 at 157 (E2a). kind/applicability map 생략 (C4). |
| §4 footer **Tier 1** `https://www.perplexity.ai` | 분리 → provenance; URL 옮김 → Experience Scope + Capture record | 이중 목적지. Capture record `DESIGN.md` 290. Freshness / Tier 1 `provenance.md` 35 / 51. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 4px base, ~768px / ~68ch, 1200px marketing, three-zone shell, 1–3 column masonry. `68ch` DESIGN dest 2 at 63 / 649. `1200px` DESIGN dest 1 at 643. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Flat / Subtle / Standard / Elevated / Modal 표 + paper-flat 철학 + `blur(8px)`. |
| §7 Do 8항 | 옮김 → Experience Application rules | 산출 8항. Governance 통제 문구에 넣지 않음. B2a 완전형 한정 절 머리 `DESIGN.md` 57. |
| §7 Don't 7항 | 옮김 → Experience Avoid | 산출 7항. 원본이 세운 금지뿐. native application 등 원본에 없는 도메인을 만들지 않음 (D1). B2a at 70. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms Responsive behavior | 원본 표 Mobile `<640px` / Tablet `640–1024px` / Desktop `1024–1440px` / Wide `>1440px`. 터치 44px / 36px / 40px. 원본 표이지 live computed breakpoint가 아님을 한정. `measures 1440px`를 쓰지 않음 (D1). |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. 겹치는 값은 이미 Foundations/Components/Typography에 있음. Unique 값 점검(A3)은 provenance 131. 슬롯 없는 위임 없음. |
| §10 Voice & Tone — 표 + forbidden phrases | 옮김 → Content & Locales | `Ask anything…` · `Ask` / `Search` / `Sources` / `Rewrite` / `Share` · `Start a thread to see it here.` · `Couldn't reach that source. Try again.` · `Couldn't complete that. Try again.` · `Pro gives you more sources and stronger models.` · `Based on available sources…` · `Where knowledge begins` 바이트 그대로 (A5). B2a at 686. |
| §11 Brand Narrative | 옮김 → Experience Scope (브랜드 서사 문단) | 2022, Aravind Srinivas / Denis Yarats / Johnny Ho / Andy Konwinski, answer engine, ten blue links, **answers with citations** drives every design decision (문단 마지막 문장까지), Smith & Diction, Philadelphia, `"an invisible brand."` / `"creating an invisible brand"`, reading and thinking tool, teal-not-saturated-cyan, refusal list, closing article / paper / ink 문장. `Aravind Srinivas` DESIGN dest 1 at 13. `Smith & Diction` DESIGN dest 2 at 13 · provenance dest 2 at 139 / 168 (E2a). |
| §12 Principles 8항 | 옮김 → Experience Principles | 산출 8항. B2a toss-form at 44. 발행 1차 DS 없음. |
| §13 Personas 3 가상 아키타입 (이름·나이·도시 포함) | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 §13 머리글이 fictional archetypes라고 명시. Experience Audience는 Ask box / generated answer block / Cited source card / Focus mode / filter selector만. 식별자는 DESIGN dest 0 · provenance dest 0 · 이 로그 dest 0. 페르소나 동기·소속 분류를 Audience나 Primary tasks로 옮기지 않음. |
| §14 States 11행 | 옮김 → Components & States Capture record + 컴포넌트별 applicability | 이중 목적지(둘 다 portable 본문). B2a at 270 (graph-not-adopted) · 288. Empty×2 · Loading · Streaming · Error×2 · Success · Focus mode active · Skeleton · Disabled · Hover (source card) 경계 그대로. graph 위임 없음. generic Focus ring은 `focus-visible`로 승격하지 않음 (B1). `Start a thread to see it here.` DESIGN dest 2. `Copied to clipboard` DESIGN dest 2. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Interactive controls declare the seven canonical states. Pill / Tab / Toggle / Source card / Citation chip close loading/error/success with a role reason (C2 v10). Primary / Secondary / Ghost / Dialog keep them as in-place commits. Composer / Text Field keep error as form fields and close loading/success except as noted. Cards / badges / toast are non-interactive or omit the map. `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1). State coverage 완료를 주장하지 않음 (C3). |
| §15 Motion — durations / named roles / signature / reduced-motion / `ease-cursor` | 옮김 → Foundations Motion | `0ms` / `120ms` / `220ms` / `360ms` / `per-token` 유지 (T1-3 제약 5). `ease-cursor` DESIGN dest 3 at 190 / 192 / 201; `steps / linear` DESIGN dest 2 at 192 / 201 · provenance dest 2 at 127 / 150 (E2a). `prefers-reduced-motion: reduce` DESIGN dest 1 at 199. Signature 4항 유지. |
| §15 무출처 cubic-bezier 3값 | 삭제(커브 값 경계) · 역할명·Use는 유지 · 원장은 생략 값을 보관 | `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)` · `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` · `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)` 전부 템플릿 예시와 일치. 세 값 DESIGN dest 1 at 183 (생략 표기) · provenance dest 1 at 127 (E2a). 승격 토큰 아님. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations Motion + Governance Named gaps | 원본에는 다섯 증거 종류 게이트 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: `transition properties` DESIGN dest 2 at 203 / 738. 로그에 「B3 유지」만 적고 전문이 없는 형태가 아님. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Key Characteristics 7항 Distinctive traits. 인과·해석은 B2a at 11. |
| §1 / §11 연도·창업·스튜디오 | 옮김 → Experience Scope 서사 | 2022 창업과 네 창업자, Smith & Diction / Philadelphia를 서사라는 이유로 버리지 않음. |

## Sibling handling (`web/references/perplexity/.verification.md`)

The sibling exists — confirmed with `find web/references/perplexity -type f`. It is a separate canonical file, not the migration input.

- Full record transcribed at `provenance.md` 79–98. **Not** promoted into `DESIGN.md`.
- Sibling-only strings (ledger only): `pplxSans` DESIGN dest 0 · provenance dest 3 at 84 / 92; `#016a71` DESIGN dest 0 · provenance dest 2 at 84 / 95; live `#000000` body/page; sibling border-radius `11px` (source badge font `11px` is a different role, DESIGN dest 6 at 512 / 535 / 549); `88px` DESIGN dest 0 · provenance dest 2; `playwright getComputedStyle` DESIGN dest 0 · provenance dest 3.
- Shared with source body (corroboration): root `#fcfcf9`; URL `https://www.perplexity.ai`; date 2026-06-06.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs. Perplexity copy is Latin, so A5a hand sweep is mandatory.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published labels, slogans, microcopy in the source body (excluding §13) | 34 distinct | 0 | 0 | `Ask anything…` / `Ask` / `Search` / `Sources` / `Rewrite` / `Share` / `Copy` / `More` / `Start a thread to see it here.` / `Couldn't reach that source. Try again.` / `Couldn't complete that. Try again.` / `Pro gives you more sources and stronger models.` / `Copied` / `Shared` / `Copied to clipboard` / `PRO` / `New` / `Beta` / `Home` / `Discover` / `Spaces` / `Library` / `Web` / `Academic` / `Writing` / `Sonar` / `GPT-5` / `Claude` / `sonar-pro` / `Where knowledge begins` / `creating an invisible brand` / `an invisible brand.` / `Based on available sources…` / `Unavailable`. |
| YAML `use` strings | 15 distinct | 0 | 0 | All 15 Token-set use lines restore the YAML `use` byte-exact. |
| `node test-v2/tools/latin-copy-audit.mjs --brand perplexity --candidate docs/design-md-weight/migrated/perplexity/DESIGN.md` | 2 lost / 66 candidates | 2 not published | 0 published | Lost=`AI magic` and `feels like a magazine that answers back.` — both source §13 persona strings; not published copy; not restored (D2). `"an invisible brand."` was restored before this count. |
| Sibling published strings | 0 sibling-only issued labels | 0 | 0 | Sibling raw samples are CSS; no additional issued CTA or slogan. |

Sub-needle labels confirmed present in `DESIGN.md`: Ask anything…, Where knowledge begins, creating an invisible brand, an invisible brand., Start a thread to see it here., Copied to clipboard, sonar-pro, PRO, Unavailable.

A5 분모: hand sweep of source published labels 34 extracted / 0 missing; YAML use 15 / 0; latin-copy-audit 2 lost / 66 candidates (persona-only `AI magic` and `feels like a magazine that answers back.` — not restored, D2); `"an invisible brand."` restored. Gate `copy-loss` compared 0 / candidates 259.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand perplexity --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 0, candidates: 259 }]`. A5a was mandatory because `compared` 0 < `candidates` 259. Separately, `scripts/design-md-core.cjs` `evaluatePortableCore` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses and semantic defects, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are.

## Deviations recorded

- `DESIGN.md` is 9,636 words by Python `split()`, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: 22 color keys, 10 YAML type roles plus §3 longer notes, 15 YAML components plus one §4-only card, seven-state applicability matrices, YAML unitless and §3 px line-height keep-both, YAML/§4 rest-fill conflicts kept as conflicts, the full §11 founding-and-identity narrative including closing sentences, and 24 B2a qualifications. Recorded rather than silently accepted.
- No separately published Perplexity UI specification is named in the source, so every derived-editorial close uses the toss-form `not Perplexity-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석). Measure: `derived editorial implementation inference` DESIGN = `not Perplexity-authored` DESIGN = 24. Provenance derived ledger 24 data rows at 137–160 (E1 1:1).
- F1 B2a scan: the finished portable body was re-read from the title down. Causal and interpretive sentences in Scope, Principles, Application rules, Avoid, Semantic color, Spacing, Shape, Elevation, Motion, Font evidence, Family, Type roles, Assets, Capture record (including graph-not-adopted at 270), Capture/applicability, Layout, Content, and Named gaps received adjacent complete qualifiers. Principles use the toss-form.
- F2 E2: dests in this table were re-grepped with `grep -o` per file after the F3 B2a expansions (wave 40 lablup). Dual destinations named both files (E2a). Compliance claims such as the B3 five-kind gate were written only after the full wording was present in `DESIGN.md` (E2c). Absence assertions were not written in the same sentence that reprints the dropped string (E2d).
- Unique-phrase self-check (wave 43): extracted 72 source-unique expressions (years, proper names, quoted copy, YAML `use` strings, §11 causal closers, value modifiers, §15 constraints). `grep -oF` against `DESIGN.md` returned 0 missing after restoring `"an invisible brand."` (period form). Restored count: 1.

## Unique-phrase self-check (wave 43)

Extracted 72 / restored 1 (`"an invisible brand."`). Remaining latin-copy-audit losses are source §13 persona strings and are not published copy.

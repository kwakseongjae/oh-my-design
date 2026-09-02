# kbpay migration log

Source: `web/references/kbpay/DESIGN.md`
Sibling read (not the migration input): `web/references/kbpay/.verification.md`
Destination: `docs/design-md-weight/migrated/kbpay/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/kbpay/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use ripgrep match lists per file, never a remembered count.

Source SHA-256 `712038f89ca9232e5714c37935713b01c6454fe32b3449098674df51e6963cd7` (`web/references/kbpay/DESIGN.md`). Sibling SHA-256 `4bf446e8cf4f9bf1dcaacf41b4d29d4cfd332049bbbf64073bcdabcb298084ce` (`web/references/kbpay/.verification.md`). Worker-close portable DESIGN SHA-256 `05a06c04ebeef24dd99bfe0202920baf31e89323d8ff402871fecb25a3310cfd`. Auditor DESIGN SHA-256 `33294c15512b0b41d9472247a3feed54d8b5f83c510f91411fb346725d6d6ca3`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `display_name_kr` 옮김 → Experience Scope; `logo.type` / `slug` 옮김 → Typography & Assets Assets | Portable file has no frontmatter. H1 is `# KB Pay Design System` (`DESIGN.md` 1). Identity table `provenance.md` 9–22. Homepage is dual (E2a): YAML `https://card.kbcard.com/CXPRISVC0127.cms` at `provenance.md` 15 and `DESIGN.md` dest 2 at 9/21. `KB페이` DESIGN dest 2 at 9/497. Catalog `primary_color` `#FFCC00` is dual: identity `provenance.md` 16 + portable primary role `DESIGN.md` 85 (E2a). Favicon URL is dual: `DESIGN.md` 213 + `provenance.md` 18 (E2a). |
| YAML `omd: "0.1"`, `verified`, `tokens.source: live-extract`, `tokens.extracted`, `tokens.note`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 19–22, freshness 36–39, token note at 24. `live-extract` DESIGN dest 7 at 9×2 / 83×2 / 144 / 189×2 + provenance use dest 4 at 20/52/156/239 (203 is inventory mention). The source footer's **Verified:** 2026-06-22 is at `provenance.md` 41. `components_harvested` DESIGN dest 0 / provenance dest 3 (`provenance.md` 22/152/238). These are ledger keys with no portable slot. |
| YAML `tokens.colors` (13 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 85–97. All thirteen roles kept with names, values, token-set keys, and kbpay-intro claim surfaces: primary `#FFCC00`, primary-light `#FFE066`, primary-tint `#FAEAAD`, canvas `#FFFFFF`, surface `#F9F9F9`, surface-alt `#F9FAFE`, ink `#151515`, body `#333333`, muted `#444444`, faint `#666666`, divider `#AAAAAA`, on-primary `#000000`, accent-purple `#614CC2`. |
| §2 **KB Brown** `#776C61` | 옮김 → Foundations semantic color | Source §2 body only; not a YAML path. `DESIGN.md` 98. Qualifier at 83 names that attachment. |
| YAML `tokens.typography.family.display` / `body` | 옮김 → Typography & Assets Family | `KBFGDisplayM` at `DESIGN.md` 181 (`tokens.typography.family.display`). `KBFGText` at `DESIGN.md` 182 (`tokens.typography.family.body`). |
| YAML `tokens.typography.display-hero` / `section` / `nav-main` / `body` / `nav-util` / `button-lg` / `label` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 193–199. Unitless line heights stay ratios and are never converted to a replacement px (A1a): `1.3` / `1.4` / `1.5` / `1.6` / `1.0` / `1.0`. YAML `use` strings restored verbatim in the Token-set use column (A1, A3). Where §3 is the longer record, that longer use sits beside the YAML use (wave 37): Editorial Label `in accent purple` at 197; CTA Label `Primary button labels` at 198. |
| §3 Tag/Badge 14px / 400 | 옮김 → Typography & Assets Type roles | `DESIGN.md` 200. Source §3 hierarchy only; not a YAML `tokens.typography.*` path. |
| YAML `tokens.spacing` (8 steps) | 옮김 → Foundations spacing | Unitless: `DESIGN.md` 108–115 (`xs 4` · `sm 8` · `md 16` · `base 20` · `lg 24` · `xl 32` · `xxl 48` · `section 64`). All claim kbpay-intro. Key-path disambiguation at `DESIGN.md` 117: `tokens.spacing.md: 16` ≠ `tokens.rounded.lg: 16` ≠ button padding; `tokens.spacing.xxl: 48` ≠ button height 48px; `tokens.spacing.base: 20` ≠ utility-nav `20px 0px`. |
| YAML `tokens.rounded` (4 steps) | 옮김 → Foundations shape | `DESIGN.md` 125–128 (`sm 3` · `md 4` · `lg 16` · `full 9999`). Claim surface kbpay-intro. `tokens.rounded.full: 9999` dest 2 at `DESIGN.md` 130/399. `9999px` dest 4 at 130×2 / 396 / 399. Breadcrumb §4 `0px` is component-local, not a YAML rounded step (`DESIGN.md` 130/361). |
| YAML `tokens.shadow.card` / `none` | 옮김 → Foundations elevation | Three-level table `DESIGN.md` 136–138. `tokens.shadow.card` and `tokens.shadow.none` at 140. |
| YAML `tokens.components` (9 records) | 옮김 → Components & States | `DESIGN.md` 241–410. Verified primitive types preserved per component, not flattened to `Kind` (A1b): `Primitive type: \`button\`` ×2 (243/268 = YAML button-primary + button-outlined), `input` ×1 (292), `card` ×2 (315/336), `badge` ×2 (346/358), `tab` ×1 (370), `toggle` ×1 (393). All nine YAML `use` strings restored; §4 longer uses sit beside them where they add 확인 / 대출 / 신용점수 / companion wording. No §4-only component borrowed a `Primitive type`. `Not in the token set` dest 2 at 417/428 (Feature Banner, Utility Nav Links). |
| YAML badge-accent radius `4px` vs §4 Breadcrumb `0px` | 옮김 → Components & States Breadcrumb Highlight | Conflict preserved; a migrator does not choose (`DESIGN.md` 361). |
| YAML nav-tab `fg: #333333` + active `text #614CC2 + yellow #FFE066 underline bar` vs §4 text `rgba(0,0,0,0.87)` + underline only | 옮김 → Components & States Main Nav Item | Both records kept (`DESIGN.md` 371–373). |
| §4 Feature Banner · Utility Nav Links | 옮김 → Components & States | Feature Banner `DESIGN.md` 411–418; Utility Nav Links 420–440. Neither has a YAML `type` key, so no `Primitive type` is attached. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 34–41. Key Characteristics restated at 34–41 under the qualifier at 32. |
| §1 / footer URLs · 404 domain | 분리 → provenance; URL·정체 경계 옮김 → Scope | Identity/source URLs at `provenance.md` 49–67. `kbpay.kbcard.com` 404 at `DESIGN.md` 9/533 and `provenance.md` 74. Voice-sample URL at `DESIGN.md` 9 and `provenance.md` 52/60. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `DESIGN.md` 85–100. Pantone 1235 C at 85. Characterizing phrases covered by the adjacent qualifier at 83 (B2/B2a). |
| §3 Typography Rules — family, hierarchy, principles | 옮김 → Typography & Assets | Family 181–185; hierarchy table 193–200; §3 Principles as type rules 204–210 under the qualifier at 204. |
| §4 Component Stylings | 옮김 → Components & States | `DESIGN.md` 241–440. Unique §4 values land: 확인 on Primary CTA at 250; 대출 / 신용점수 on Standard Card at 319; Feature Banner transparent/image at 413; Utility Nav 상품공시실 at 427; breadcrumb radius conflict at 361. |
| §5 Layout Principles | 옮김 → Layout & Platforms | `DESIGN.md` 443–471. Spacing scale, `27px 0px` / `20px 0px`, feature tabs (홈, 카드(듀얼홈), 혜택, 결제, 금융, 쇼핑/여행) at 450, dual-row nav, alternating bands, whitespace philosophy at 457. Feature-tab labels kept off the main-nav set at 455. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `DESIGN.md` 136–140. Three levels + two shadow tokens. Minimal-shadow reading carries the adjacent qualifier at 140 (B2/B2a). |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 57–63 (seven Do rules), under the grouping qualifier at 55. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 69–75, under the qualifier at 67. The seven prohibitions are the source's own list. No invented domain is added. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `DESIGN.md` 459–471. Breakpoints Mobile <640 / Tablet 640-1024 / Desktop 1024-1440 at 463–465. Touch 48 / 80 / 176px+ / 60 at 467. Collapsing strategy at 469. Source `1024-1440px` dest 2 at 465/471. `native application` / `back-office` / `product application` / `does not say that` / `measures 1440px` DESIGN dest 0. |
| §9 Agent Prompt Guide | 삭제 | Tool-facing construction prompts and iteration list; no receiving slot and no dedicated adapter file. Every value §9 names was checked against the portable body before deletion and each was already present (A2, A3): `#FFCC00`, `#000000`, 4px, 48px, `0 16px`, 18px / 600 KBFGText, 신청하기, card 16px + shadow, 인기 메뉴 `#614CC2`, nav 80px, outlined login 3px / 44px. The check is itemised at `provenance.md` 149. |
| §10 Voice & Tone | 옮김 → Content & Locales | `DESIGN.md` 476–497. Voice table 479–486. Four verbatim §10 samples at 488–491. Forbidden register including `마감 임박` dest 2 at 495/497. Published-names sweep at 497 (A5). Qualifier at 476 covers the voice reading (B2/B2a). |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: 2020 launch; 2022 consolidation of "KB국민카드 모바일홈"; KB금융그룹; Yeongdeungpo; star-b and `#FFCC00` carry-through; founding-logic paragraph; 듀얼홈; "국민"; 48px / yellow-contrast / proprietary-font / plain-language list; and the closing sentence `KB Pay is not a startup designing for a demographic niche — it is a national financial infrastructure product`. The source paragraph's last sentence is kept as one unit (`national financial infrastructure product` DESIGN dest 2, both on line 13). Line 45 names the shorter comment string `national infrastructure product` (dest 1), not the full financial-infrastructure sentence. Marked there as narrative context that supplies no interface tokens; the classification carries an adjacent complete qualifier in the same paragraph (B2/B2a). Year `2020` DESIGN dest 2 at 13. Year `2022` DESIGN dest 2 at 13. |
| §12 Principles — 5 numbered | 옮김 → Experience principles | `DESIGN.md` 47–51 under the B2a form at 45. Every *UI implication* is qualified. Source comment's editorial-reading note on "one action, one color" and the national-infrastructure framing stays at 45. No published UI specification is named, so the close uses the toss-form (rulebook v12 B2a 전제 주석). Portable derived-editorial inventory: `provenance.md` 194–233 (40 data rows). |
| §13 Personas — 4 fictional archetypes | 삭제; Audience에는 원본이 부른 publicly observable segments만 | The four source-named groups land at `DESIGN.md` 28: Korean cardholders, students, families, financial product shoppers. No name, motivation, or affiliation classification is invented or re-hosted (D2, D2a). Disposition at `provenance.md` 148. Selecting introduction-page outcomes as primary tasks is qualified at `DESIGN.md` 19. Quoted persona-only strings 삭제 — "카드이용정보"는 가상 페르소나 인용이라 D2로 제거; "믿을 수 있는 앱"는 가상 페르소나 인용이라 D2로 제거. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Full source body preserved at `DESIGN.md` 223–234 (ten rows: two Empty, two Loading, two Error, two Success, Skeleton, Disabled) including `카드 등록하기`, `카드 확인하기`, `고객센터 연결`, `결제 완료`, `opacity: 0.4`, yellow → `#FAEAAD`, 1.5s pulse, auto-advance 2s (A2; the catalog graph is still 0/440, so nothing is delegated). Section attachment (not a transfer onto `.btn.btn--primary` as a computed capture) is qualified at 236. The applicability rule is at 238, whose qualifier covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). A generic Focus capture is not `focus-visible` treatment (B1) — `DESIGN.md` 238. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Interactive controls declare the seven canonical states. Primary CTA, Secondary Outlined, and Text Input keep loading/error/success applicable (committing actions / form field) — `loading \| applicable` dest 3 at 261/285/308. Standard Card, Main Nav Item, Toggle Switch, and Utility Nav Links close loading/error/success with a role reason (C2 v10) — destination finance tile / tab / toggle / destination utility link commits no operation in place (`loading \| not-applicable` dest 4 at 329/386/407/438). Surface Card, Notification Badge, Breadcrumb Highlight, and Feature Banner get no `kind` and no map because the source supplies no interaction evidence — C4. This is not a complete state-coverage claim (`DESIGN.md` 238). |
| §15 Motion & Easing | 옮김 → Foundations motion | Durations kept at `DESIGN.md` 150–152: `motion-fast` 120ms, `motion-standard` 200ms, `motion-slow` 320ms. Easing *roles* and uses kept at 158–160. Three cubic-bezier values omitted at the curve-value boundary (`DESIGN.md` 154); `cubic-bezier(0.4, 0.0, 1, 1)` matches the documented template `ease-exit`. Signature motion (CTA opacity at `motion-fast`, no spring, bottom sheet at `motion-slow/ease-enter`) and `prefers-reduced-motion: reduce` stay at 162. B3 is held: the promotion condition at `DESIGN.md` 164 names all five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text (E2c). |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance | Freshness `provenance.md` 36–39; **Verified:** 41; Conflicts 44; Tier 1 list 64–65; Tier 2 69–70. |
| HTML comment — philosophy-layer sources, interpretive-claim note, persona fictional note | 분리 → provenance; page title 옮김 → Content | Interpretive-claim note at `provenance.md` 242. Persona fictional note absorbed into the unidentified §13 disposition at `provenance.md` 148. Voice-sample URL at `provenance.md` 52/60. Page title `KB Pay 소개>KB Pay>결제서비스>서비스 \| 국민의 행복생활 파트너 KB국민카드` at `DESIGN.md` 493/497. |

## Sibling handling (`web/references/kbpay/.verification.md`)

The sibling exists — confirmed with a path listing of `web/references/kbpay`. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at `provenance.md` 83–101 and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: notification badge `#FFDF01`; badge text rgb(51,51,51); secondary height range `42–44px`; depth1-bar `14px` × `60px`; `.recom-card` `541px` × `1080px`; `.braille-card` computed `rgb(249, 250, 252)` against YAML `#F9FAFE`; braille height `105px`; guide-area `20px 32px` / `106px`; bg `#F2F2F2`; `m.kbpay.kbcard.com` DNS note. Recorded at `provenance.md` 105–114.
- Measured `DESIGN.md` 0 for those sibling-only strings: `#FFDF01` 0 · `541px` 0 · `1080px` 0 · `#F2F2F2` 0 · `rgb(249, 250, 252)` 0.
- `#FFCC00` / `#FFFFFF` / 4px / 48px / `0 16px` / 18px / 600 / 16px card / card shadow / 80px / 60px / 176px / KBFGDisplayM / KBFGText are already in the source body and are corroboration.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. KB Pay's published lines are Korean, so a hand sweep of published labels is mandatory even when the needle set is thin.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published names and identity strings in the source body | 37 distinct | 0 | 0 | KB Pay / KB페이 / 서비스 특징 / 이용전 유의사항 / 인기 메뉴 / 인기 신용카드 / 인기 체크카드 / 로그인 / 신청하기 / 확인 / 다운받기 / 회원가입 / 고객센터 / 상품공시실 / My KB / 혜택 / 금융 / 카드 / 서비스 / 라이프 / 홈 / 카드(듀얼홈) / 결제 / 쇼핑/여행 / 한번에, 한손에, 한눈에 KB Pay / 나에게 꼭 맞는 콘텐츠 추천 / 매일 새로운 혜택과 이벤트 / 국민의 행복생활 파트너 / 국민의 행복생활 파트너 KB국민카드 / KB Pay 소개>KB Pay>결제서비스>서비스 / 만 7세 이상 개인 고객 / 카드 등록하기 / 결제 완료 / 카드 확인하기 / 고객센터 연결 / 듀얼홈 / KB국민카드 모바일홈 / KB금융그룹 / 국민 / 마감 임박 / 대출 / 신용점수. Persona-only quoted strings 카드이용정보 and 믿을 수 있는 앱 are D2-deleted in the §13 row. |
| YAML `use` strings (7 type-role + 9 component) | 16 | 0 | 0 | Restored verbatim at `DESIGN.md` 193–199 and on each YAML component's Token-set use line. |
| Sibling published strings | 0 distinct sibling-only CTAs | 0 | 0 | Sibling records measurements and a conflict matrix, not additional published CTAs. Persona-section strings were not extracted as published copy. |

Sub-needle labels confirmed present individually in `DESIGN.md`: KB페이, 인기 메뉴, 로그인, 신청하기, 한번에, 한손에, 한눈에 KB Pay, 나에게 꼭 맞는 콘텐츠 추천, 매일 새로운 혜택과 이벤트, 국민의 행복생활 파트너 KB국민카드, 카드 등록하기, 결제 완료, 듀얼홈, KB국민카드 모바일홈.

A5 분모: hand sweep of source published labels 37 extracted / 0 missing + YAML use 16 / 0 missing; latin-copy-audit 0 lost / 20 candidates (0 published remaining); gate `copy-loss` compared 34 / candidates 213. A5a was mandatory because `compared` 34 < `candidates` 213.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand kbpay --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 34, candidates: 213, detail: "인용 문자열 213개 중 34개만 비교했다 — 나머지는 라틴이라 바늘이 되지 않는다. 라틴 전수 대조는 손으로 하라." }]`. Separately, `scripts/design-md-core.cjs` `evaluatePortableCore` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 34 < `candidates` 213.

## Deviations recorded

- `DESIGN.md` is 8,041 words by `wc -w`, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: thirteen color roles plus `#776C61`, eight spacing steps and four rounded steps kept on separate key paths, nine YAML component records plus two §4-only rows, a ten-row source §14 body plus seven-state applicability on six interactive controls, three duration tokens, the full §11 narrative including its last sentence, surface-attached token-set paths, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- No `ds.type` is in the source, so every derived-editorial close uses the toss-form `not KB Pay-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석). Measure: `derived editorial implementation inference` DESIGN = `not KB Pay-authored` DESIGN = 40. Provenance derived ledger 40 rows at 194–233 (E1 1:1). Auditor expanded three existing closes in place (Primary CTA §14-disabled≠hover, Notification Badge 3px geometry, Feature Banner 16px geometry) and widened three inventory rows to match; occurrence count stayed 40=40.
- Three unsourced cubic-bezier values omitted at the curve-value boundary. Duration tokens and easing *roles* stay. Recorded as the T1-3 constraint-5 treatment, not as a motion-token deletion.
- Worker-close portable DESIGN SHA-256 `05a06c04ebeef24dd99bfe0202920baf31e89323d8ff402871fecb25a3310cfd`. Auditor DESIGN SHA-256 `33294c15512b0b41d9472247a3feed54d8b5f83c510f91411fb346725d6d6ca3`.

## Mandatory final passes

### Pass 1 — B2a scan

The portable body was re-read from H1 through Named gaps. Every sentence that names a cause, reading, grouping, selection, or authority close is adjacent to a complete-form qualifier (`derived editorial implementation inference` + `not KB Pay-authored or a separately published UI specification`). Source-authored facts (tagline, YAML hexes, YAML `use` strings, §11 last sentence, §14 ten rows, voice samples) are not treated as derived. Scope, Content voice reading, and the narrative-citation character are included in the 40. Auditor folded three unnamed third-class readings into existing adjacent closes at 253 / 353 / 418. Inventory 1:1 at `provenance.md` 194–233.

### Pass 2 — E2 contrast

Each log row was written only after a ripgrep check of the named file and line. Dual destinations (homepage dest 2 at 9/21, `#FFCC00` as identity-and-token, favicon URL, `live-extract` DESIGN dest 7, `kbpay.kbcard.com` 404) list both files. “B3 유지” is claimed only because `DESIGN.md` 164 names transition properties, animation name, duration, easing, reduced-motion behavior, and the per-component gate. Persona disposition is unidentified (D2a): four source-named groups only; no name, motivation, or affiliation classification is re-hosted. Auditor corrected line pointers that had used line-count (`grep -c`) instead of occurrence-count.

## Key-path self-check (A1)

| YAML path | Portable landing |
|---|---|
| `tokens.colors.primary` `#FFCC00` | `DESIGN.md` 85 |
| `tokens.colors.primary-light` `#FFE066` | `DESIGN.md` 86 |
| `tokens.colors.primary-tint` `#FAEAAD` | `DESIGN.md` 87 |
| `tokens.colors.canvas` `#FFFFFF` | `DESIGN.md` 88 |
| `tokens.colors.surface` `#F9F9F9` | `DESIGN.md` 89 |
| `tokens.colors.surface-alt` `#F9FAFE` | `DESIGN.md` 90 |
| `tokens.colors.ink` `#151515` | `DESIGN.md` 91 |
| `tokens.colors.body` `#333333` | `DESIGN.md` 92 |
| `tokens.colors.muted` `#444444` | `DESIGN.md` 93 |
| `tokens.colors.faint` `#666666` | `DESIGN.md` 94 |
| `tokens.colors.divider` `#AAAAAA` | `DESIGN.md` 95 |
| `tokens.colors.on-primary` `#000000` | `DESIGN.md` 96 |
| `tokens.colors.accent-purple` `#614CC2` | `DESIGN.md` 97 |
| `tokens.typography.family.display` KBFGDisplayM | `DESIGN.md` 181 |
| `tokens.typography.family.body` KBFGText | `DESIGN.md` 182 |
| `tokens.typography.display-hero` 32 / 400 / 1.3 | `DESIGN.md` 193 |
| `tokens.typography.section` 24 / 400 / 1.4 | `DESIGN.md` 194 |
| `tokens.typography.nav-main` 15 / 400 / 1.5 | `DESIGN.md` 195 |
| `tokens.typography.body` 15 / 400 / 1.6 | `DESIGN.md` 196 |
| `tokens.typography.label` 18 / 600 / 1.0 | `DESIGN.md` 197 |
| `tokens.typography.button-lg` 18 / 600 / 1.0 | `DESIGN.md` 198 |
| `tokens.typography.nav-util` 13 / 400 / 1.5 | `DESIGN.md` 199 |
| `tokens.spacing.xs: 4` | `DESIGN.md` 108 ≠ `tokens.rounded.md: 4` |
| `tokens.spacing.sm: 8` | `DESIGN.md` 109 |
| `tokens.spacing.md: 16` | `DESIGN.md` 110 ≠ `tokens.rounded.lg: 16` |
| `tokens.spacing.base: 20` | `DESIGN.md` 111 ≠ utility `20px 0px` |
| `tokens.spacing.lg: 24` | `DESIGN.md` 112 ≠ section heading 24 |
| `tokens.spacing.xl: 32` | `DESIGN.md` 113 ≠ display 32 |
| `tokens.spacing.xxl: 48` | `DESIGN.md` 114 ≠ button height 48 |
| `tokens.spacing.section: 64` | `DESIGN.md` 115 |
| `tokens.rounded.sm: 3` | `DESIGN.md` 125 |
| `tokens.rounded.md: 4` | `DESIGN.md` 126 |
| `tokens.rounded.lg: 16` | `DESIGN.md` 127 |
| `tokens.rounded.full: 9999` | `DESIGN.md` 128 |
| `tokens.shadow.card` | `DESIGN.md` 140 |
| `tokens.shadow.none` | `DESIGN.md` 140 |
| `tokens.components.button-primary` type/bg/fg/radius/height/padding/font/use | `DESIGN.md` 241–249 |
| `tokens.components.button-outlined` type/bg/fg/border/radius/height/font/use | `DESIGN.md` 266–275 |
| `tokens.components.input-text` type/bg/border/radius/fg/font/use | `DESIGN.md` 290–298 |
| `tokens.components.card-standard` type/bg/radius/shadow/use | `DESIGN.md` 313–319 |
| `tokens.components.card-surface` type/bg/radius/use | `DESIGN.md` 334–340 |
| `tokens.components.badge-yellow` type/bg/fg/radius/font/use | `DESIGN.md` 344–351 |
| `tokens.components.badge-accent` type/bg/fg/radius/font/use | `DESIGN.md` 356–363 |
| `tokens.components.nav-tab` type/fg/active/font/use | `DESIGN.md` 368–375 |
| `tokens.components.toggle-switch` type/bg/fg/radius/use | `DESIGN.md` 391–397 |

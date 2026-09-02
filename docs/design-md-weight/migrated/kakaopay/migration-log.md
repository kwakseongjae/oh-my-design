# kakaopay migration log

Source: `web/references/kakaopay/DESIGN.md`
Sibling read (not the migration input): `web/references/kakaopay/.verification.md`
Destination: `docs/design-md-weight/migrated/kakaopay/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/kakaopay/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use ripgrep match lists per file, never a remembered count.

Source SHA-256 `3067d6ac24ee2792e2404f01ef7ec0d50e12447031a4302076fdd433624f169c` (`web/references/kakaopay/DESIGN.md`). Sibling SHA-256 `16dc550458111d50b1cda0c9146272dfa84de23034a4216bb7d0de3c6b22ba9e` (`web/references/kakaopay/.verification.md`). Worker-close portable DESIGN SHA-256 `af2028eecbc07e347065f2182fd6329051d2e39e51efa2e6fba944c7dab2c602`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `logo.type` / `slug` 옮김 → Typography & Assets Assets | Portable file has no frontmatter. H1 is `# KakaoPay Design System` (`DESIGN.md` 1). Identity table `provenance.md` 9–25. Homepage is dual (E2a): YAML `https://www.kakaopay.com` at `provenance.md` 13; inspected main `https://www.kakaopay.com/main` at `DESIGN.md` 9/21. Catalog `primary_color` `#ffeb00` is dual as identity-not-token: `DESIGN.md` dest 2 at 73/310 + `provenance.md` dest 5 at 14/27×2/149/191 (E2a). Favicon URL is dual: `DESIGN.md` dest 1 at 158 + `provenance.md` dest 1 at 16 (E2a). Host `t1.kakaocdn.net` dest 2 at `provenance.md` 16/29. |
| YAML `omd: "0.1"`, `verified`, `verification_v2`, `tokens.source: reconciled`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 17–21, 37–43. `omd` format is at 17; `tokens.source \| reconciled` at 19; `verification_v2` surfaces/sources at 47–71. The source footer's **Verified:** 2026-07-13 is at `provenance.md` 43. `components_harvested` DESIGN dest 0 / provenance dest 3 (`provenance.md` 21/148/214). These are ledger keys with no portable slot. |
| YAML `ds.name` / `ds.url` / `ds.type: brand` / `ds.description` | 분리 → provenance; description 옮김 → Experience Scope | A1c: table cell `ds.type \| brand` at `provenance.md` 24; exact `ds.type: brand` dest 1 at `provenance.md` 31. Full description transcribed at `provenance.md` 25. The source fact that the article is graphic-accessibility work and not a public component library is dual: `DESIGN.md` dest 1 at 9 + `provenance.md` `graphic-accessibility work` dest 2 at 25/31 · `public component library` dest 3 at 25/31/218 (E2a). |
| YAML `tokens.colors` (7 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 75–81. All seven roles kept with names, values, token-set keys, and corporate-service claim surfaces: ink `#000000`, text `#333333`, muted `#666666`, subtle `#888888`, canvas `#ffffff`, surface `#f3f3f3`, surface-soft `#eeeeee`. Catalog `#ffeb00` is not a color role. Official-article “no hexadecimal values for a general KakaoPay product palette” stays at `DESIGN.md` 83. |
| YAML `tokens.typography.family.sans` / `display` | 옮김 → Typography & Assets Family | `KakaoSmall` at `DESIGN.md` 139 (`tokens.typography.family.sans`). `KakaoBig` at `DESIGN.md` 140 (`tokens.typography.family.display`). Live 156 / 45 counts at `DESIGN.md` 129. |
| YAML `tokens.typography.card-title` / `public-body` / `utility` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 150–152. Unitless line heights stay ratios and are never converted to a replacement px (A1a): `1.38` / `1.5` / `1.5`. Parenthetical px (`36px` / `21px` / `18px`) is the source §3 spelling. YAML tracking `-0.6` / `0` / `-0.2` kept. All three YAML `use` strings restored verbatim in the Token-set use column (A1, A3). Claim surface for all three: corporate-service. The 17px menu font and 13px tag font are those controls, not YAML type-role rows (`DESIGN.md` 154). |
| YAML `tokens.spacing` (3 steps) | 옮김 → Foundations spacing | Unitless: `DESIGN.md` 91–93 (`compact 4` · `control 16` · `card 32`). All claim corporate-service. `tokens.spacing.compact: 4` is disambiguated from menu padding `4px` at `DESIGN.md` 95/188. `tokens.spacing.control: 16` DESIGN dest 5 at 95/109/188/235×2. `tokens.spacing.card: 32` sits beside the source's `32px` inner-card spelling at `DESIGN.md` 95/265. |
| YAML `tokens.rounded` (5 steps) | 옮김 → Foundations shape | `DESIGN.md` 103–107 (`none 0` · `card 16` · `search 18` · `action 24` · `pill 999`). Claim surface for all five: corporate-service. `tokens.rounded.action: 24` dest 1 at `DESIGN.md` 109 — YAML step with no matching component radius. `tokens.rounded.pill: 999` dest 2 at `DESIGN.md` 107/109. `999px` DESIGN dest 4 at 109/182/188/267. Tag `34` / `34px` is component-local, not a YAML rounded step (`DESIGN.md` 109/250). |
| YAML `tokens.shadow.none` | 옮김 → Foundations elevation | `box-shadow: none` and `tokens.shadow.none` with value `none` at `DESIGN.md` 113. |
| YAML `tokens.components` (4 records) | 옮김 → Components & States | `DESIGN.md` 177–260. Verified primitive types preserved per component, not flattened to `Kind` (A1b): `Primitive type: \`button\`` ×2 (179/203 = YAML corporate-menu + corporate-search), `card` ×1 (227), `badge` ×1 (241). All four YAML `use` strings restored verbatim as `Token-set use:` lines (185/209/233/247). YAML `states` strings (`hover and pressed labels observed on .item_menu` / `.btn_search`) DESIGN dest 0; §4 hover/pressed collector labels land at 186/210 (E2c). No §4-only component borrowed a `Primitive type`. `not in the token set` DESIGN dest 0. Card has no YAML `states` — kind and map omitted at 236 (C4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 34–38. Everyday-finance framing, 2024 article, 3:1, filled forms, icon/2D/3D, warm/soft/rounded wording, and the capture-boundary sentence land at 9/11. Key Characteristics restated at 34–38 under the qualifier at 32. |
| §1 공식 URL·design story | 분리 → provenance; URL·정체 경계 옮김 → Scope | Identity/source URLs at `provenance.md` 47–81. The source's own sentence that the 2024 article is graphic-accessibility work and not a public component library stays in `DESIGN.md` 9. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `DESIGN.md` 75–83. Characterizing phrases covered by the adjacent qualifier at 73 (B2/B2a). `#ffeb00` not promoted as a role. |
| §3 Typography Rules — evidence classes, family, hierarchy | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 127–133 (source header `Unresolved` rewritten as `Unresolved class` so the table cell is not a bare placeholder word; the resolution text is unchanged). Family 139–142; hierarchy table 150–152. Official-distributed / Declared-only / Unresolved-class readings carry the adjacent complete qualifier at 135 (B2/B2a). |
| §4 Component Stylings | 옮김 → Components & States | `DESIGN.md` 177–260. §4 body values and YAML `use` / radius / padding forms are both kept. Unique §4 values land: menu hover `#f3f3f3` collector label at 186/193; search hover `#eeeeee` collector label at 210/217; pressed labels observed with no separate snapshot at 186/210; no selector-backed payment-app button / input / receipt / account card / transaction row / toast / sheet / error / success / mobile navigation at 169 (A3). All four controls stay on corporate-service. Search YAML `bg: #eeeeee` is this control's default (`DESIGN.md` 204/212); it is not a transfer from `tokens.colors.surface-soft`. |
| §5 Layout Principles | 옮김 → Layout & Platforms | `DESIGN.md` 265: corporate service page / story home / design article; 32px horizontal inner-card padding; observed 4px and 16px in public controls. Official product and partner pages establish PC, mobile web, and mobile app contexts and name the missing public responsive specification, in the source's own wording. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `DESIGN.md` 113: `box-shadow: none`; no KakaoPay elevation scale, modal shadow, bottom sheet, or floating action treatment. Flat-layering reading carries the adjacent qualifier on the same line (B2/B2a). |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 53–56 (four Do rules), under the grouping qualifier at 51. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 62–65, under the qualifier at 60. The four prohibitions are the source's own list. No invented domain is added. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `DESIGN.md` 265: the official product and partner pages establish that payment is offered across PC, mobile web, and mobile app contexts, but they do not provide a public responsive component specification. Surface-measurement reading at 267 (B2/B2a). Source `mobile app` dest 1 at 265. `native application` / `back-office` / `product application` / `measures 1440px` DESIGN dest 0. |
| §9 Agent Prompt Guide | 삭제 | Tool-facing construction prompt; no receiving slot and no dedicated adapter file. Every value §9 names was checked against the portable body before deletion and each was already present (A2, A3): white `#ffffff` pill, black `#000000` text, 999px radius, `4px 16px 6px`, 17px KakaoBig, graphic principles (clarity, warm/soft color, rounded/soft lines, graphic contrast). The check is itemised at `provenance.md` 145. |
| §10 Voice & Tone | 옮김 → Content & Locales | `DESIGN.md` 272. Published names at 274: KakaoPay, 마음 놓고 금융하다, KakaoSmall, KakaoBig, Kakao Big, Kakao Small, KakaoDigitLatin, Apple SD Gothic Neo, Malgun Gothic, 맑은 고딕. The qualifier at 272 covers the voice reading (B2/B2a, A5). Byte-exact slogan. |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: everyday-life positioning; official payment page on immediate payment and biometric verification; partner page four-step online-payment journey from a merchant checkout click to completion; design-story accessibility and operational-efficiency redesign that continues as the service evolves; and the closing pair — that evidence supports the narrative of accessible, reusable graphic communication; it does not substantiate historical, market-share, or user-persona claims not present in these sources. The source paragraph's last sentence is kept as one unit (`does not substantiate historical, market-share, or user-persona claims` DESIGN dest 1 at 13). Marked there as narrative context that supplies no interface tokens; the classification carries an adjacent complete qualifier in the same paragraph (B2/B2a). Also noted as narrative-not-token-source at `provenance.md` 219. Year `2024` DESIGN dest 4 at 9/11×2/42. |
| §12 Principles — 4 numbered | 옮김 → Experience principles | `DESIGN.md` 44–47 under the B2a form at 42. Official-article names stay first-party graphic-system material; every *UI implication* is qualified. `ds.type` is `brand`, not a published UI specification, so the close uses the toss-form (rulebook v12 B2a 전제 주석). Portable derived-editorial inventory: `provenance.md` 176–209 (28 data rows at 182–209). Service card row 23 names the 16px ≠ `tokens.spacing.control: 16` reading and the 14px ≠ public-body type-role reading. |
| §13 Personas — no official research; two public groups | 옮김 → Experience Audience; 가상 biography 없음 | The source already leaves named, demographic, and behavioral personas unfilled. The two source-named groups land at `DESIGN.md` 28: people using KakaoPay for everyday payments, and merchants integrating online payments. No name, motivation, or affiliation classification is invented or re-hosted (D2, D2a). Disposition at `provenance.md` 144. Selecting surface-or-control outcomes as primary tasks is qualified at `DESIGN.md` 19. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Full source body preserved at `DESIGN.md` 170/172: collector `interactionCount: 0` at 170; hover/pressed labels not expanded at 170; developer reference documents API error responses and error codes at 172; this supports neither a visual error-state specification nor payment success/loading/empty-state components (A2; the catalog graph is still 0/440, so nothing is delegated). The applicability rule is at 174, whose qualifier covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). A generic hover/pressed collector label is not `focus-visible` treatment (B1) — `DESIGN.md` 174/186/210. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Interactive controls declare the seven canonical states. Menu action, Search action, and Topic tag close loading/error/success with a role reason (C2 v10) — destination navigation item / search trigger / destination topic link commits no operation in place (`loading \| not-applicable` dest 3 at 196/220/258). `loading \| applicable` DESIGN dest 0. Service card gets no `kind` and no map because the source supplies no interaction evidence for the card — `DESIGN.md` 236 (C4). This is not a complete state-coverage claim (`DESIGN.md` 174). |
| §15 Motion & Easing | 옮김 → Foundations motion | `DESIGN.md` 117: "No motion durations, easing curves, reduced-motion behavior, or animated payment-state evidence was captured. Motion tokens are omitted." No curve was present to delete. B3 is held: the promotion condition at `DESIGN.md` 119 names all five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text (E2c). |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance | Freshness `provenance.md` 37–45; Tier 1 list 73–81; Tier 2 83–85. Conflicts unresolved: none — `provenance.md` 45. |

## Sibling handling (`web/references/kakaopay/.verification.md`)

The sibling exists — confirmed with `find web/references/kakaopay -type f`. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at `provenance.md` 94–102 and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: coverage score `83`; 27 component variants; three observed state labels; `playwright_cli`; `2026-07-13T11:02:53.360Z`; `artifacts/reference-evidence/kakaopay.json`; rgb() spellings; menu line-height `27px`; tag line-height `34px` (the source's `34px` is the tag radius); tit_card padding shorthand `0px 32px`. Recorded at `provenance.md` 106–115.
- Measured `DESIGN.md` 0 for those sibling-only strings: `83` as a coverage score 0 · `27px` 0 · tag line-height `34px` as a type metric 0 · `rgb(` 0 · `playwright_cli` 0.
- `#ffffff` / `#000000` / `#f3f3f3` / `#eeeeee` / `#333333` / 999px / `4px 16px 6px` / 17px / 18px / 14px / 16px / 34px radius / 26px / 700 / 36px / KakaoSmall 156 / KakaoBig 45 are already in the source body and are corroboration.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. KakaoPay's published slogan is Korean, so a hand sweep of published labels is mandatory even when the needle set is thin.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published names and identity strings in the source body | 13 distinct | 0 | 0 | KakaoPay / 마음 놓고 금융하다 / KakaoSmall / KakaoBig / Kakao Big / Kakao Small / KakaoDigitLatin / Apple SD Gothic Neo / Malgun Gothic / 맑은 고딕 / Helvetica Neue / OFL / 3:1. |
| YAML `use` strings (3 type-role + 4 component) | 7 | 0 | 0 | Restored verbatim at `DESIGN.md` 150–152 and 185/209/233/247. |
| `node test-v2/tools/latin-copy-audit.mjs --brand kakaopay` | 1 lost / 1 brand scanned | 0 published | 0 | `omd:add-reference` is sibling/tool metadata, not published copy. |
| Sibling published strings | 0 distinct sibling-only CTAs | 0 | 0 | Sibling records measurements and a conflict matrix, not additional published CTAs. |

Sub-needle labels confirmed present individually in `DESIGN.md`: KakaoPay, 마음 놓고 금융하다, KakaoSmall, KakaoBig, Kakao Big, Kakao Small, KakaoDigitLatin, Apple SD Gothic Neo, Malgun Gothic, 맑은 고딕, Helvetica Neue, OFL, 3:1.

A5 분모: hand sweep of source published labels 13 extracted / 0 missing + YAML use 7 / 0 missing; latin-copy-audit 1 lost / 18 candidates (0 published); gate `copy-loss` compared 2 / candidates 123.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand kakaopay --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 2, candidates: 123, detail: "인용 문자열 123개 중 2개만 비교했다 — 나머지는 라틴이라 바늘이 되지 않는다. 라틴 전수 대조는 손으로 하라." }]`. Separately, `scripts/design-md-core.cjs` `evaluatePortableCore` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 2 < `candidates` 123.

## Deviations recorded

- `DESIGN.md` is 4,603 words by `wc -w`, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: four declared component records, a source §14 body plus seven-state applicability on three interactive controls, `tokens.rounded.action: 24` and `tokens.rounded.pill: 999` kept off matching spacing keys, the full §11 narrative including its last sentence, surface-attached token-set paths, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- `ds.type` is `brand`, not a published UI specification, so every derived-editorial close uses the toss-form `not KakaoPay-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석). Measure: `derived editorial implementation inference` DESIGN = `not KakaoPay-authored` DESIGN = 28. Provenance derived ledger 28 rows at 182–209 (E1 1:1). Service card `:235` names both the 16px ≠ `tokens.spacing.control: 16` reading and the 14px ≠ public-body type-role reading.
- Font-evidence table header `Unresolved` was rewritten as `Unresolved class` (`DESIGN.md` 133) so a table cell is not a bare Core placeholder word. The resolution text is the source's own. First Portable Core inspect failed on `contains-prescriptive-placeholder`; this rewrite is what closed it. Recorded rather than left as a Portable Core fail.
- Worker-close portable DESIGN SHA-256 `af2028eecbc07e347065f2182fd6329051d2e39e51efa2e6fba944c7dab2c602`. Auditor-close portable DESIGN SHA-256 `b365e99e55a35f3a4c9fa7810ddad4e80ad680f1f2b233792239d8cb11105217`.

## Mandatory final passes

### Pass 1 — B2a scan

The portable body was re-read from H1 through Named gaps. Every sentence that names a cause, reading, grouping, selection, or authority close is adjacent to a complete-form qualifier (`derived editorial implementation inference` + `not KakaoPay-authored or a separately published UI specification`). Source-authored facts (slogan, 2024 article contrast and filled-form and icon/2D/3D wording, YAML hexes, YAML `use` strings, §11 closing pair, §14 API-error paragraph) are not treated as derived. Scope, Content voice reading, and the design-story citation character are included in the 28. Service card `:235` names both geometry readings. Inventory 1:1 at `provenance.md` 182–209.

### Pass 2 — E2 contrast

Each log row was written only after a ripgrep check of the named file and line. Dual destinations (homepage, `#ffeb00` as identity-not-token DESIGN dest 2 / provenance dest 5, favicon URL DESIGN dest 1 / provenance dest 1, `ds.description` library-boundary `public component library` DESIGN dest 1 / provenance dest 3) list both files. “B3 유지” is claimed only because `DESIGN.md` 119 names transition properties, animation name, duration, easing, reduced-motion behavior, and the per-component gate. Persona disposition is unidentified (D2a): two source-named groups only; no name, motivation, or affiliation classification is re-hosted. YAML `states` strings DESIGN dest 0.

## Key-path self-check (A1)

| YAML path | Portable landing |
|---|---|
| `tokens.colors.ink` `#000000` | `DESIGN.md` 75 |
| `tokens.colors.text` `#333333` | `DESIGN.md` 76 |
| `tokens.colors.muted` `#666666` | `DESIGN.md` 77 |
| `tokens.colors.subtle` `#888888` | `DESIGN.md` 78 |
| `tokens.colors.canvas` `#ffffff` | `DESIGN.md` 79 |
| `tokens.colors.surface` `#f3f3f3` | `DESIGN.md` 80 |
| `tokens.colors.surface-soft` `#eeeeee` | `DESIGN.md` 81 |
| `tokens.typography.family.sans` KakaoSmall | `DESIGN.md` 139 |
| `tokens.typography.family.display` KakaoBig | `DESIGN.md` 140 |
| `tokens.typography.card-title` 26 / 700 / 1.38 / -0.6 | `DESIGN.md` 150 |
| `tokens.typography.public-body` 14 / 400 / 1.5 / 0 | `DESIGN.md` 151 |
| `tokens.typography.utility` 12 / 400 / 1.5 / -0.2 | `DESIGN.md` 152 |
| `tokens.spacing.compact: 4` | `DESIGN.md` 91 ≠ menu `4px` |
| `tokens.spacing.control: 16` | `DESIGN.md` 92 ≠ `tokens.rounded.card: 16` |
| `tokens.spacing.card: 32` | `DESIGN.md` 93 |
| `tokens.rounded.none: 0` | `DESIGN.md` 103 |
| `tokens.rounded.card: 16` | `DESIGN.md` 104 |
| `tokens.rounded.search: 18` | `DESIGN.md` 105 |
| `tokens.rounded.action: 24` | `DESIGN.md` 106 |
| `tokens.rounded.pill: 999` | `DESIGN.md` 107 |
| `tokens.shadow.none` | `DESIGN.md` 113 |
| `tokens.components.corporate-menu` type/bg/fg/radius/padding/font/states/use | `DESIGN.md` 177–186 |
| `tokens.components.corporate-search` type/bg/fg/radius/padding/font/states/use | `DESIGN.md` 201–210 |
| `tokens.components.corporate-card` type/bg/fg/radius/padding/font/use | `DESIGN.md` 225–233 |
| `tokens.components.corporate-tag` type/bg/fg/radius/padding/font/use | `DESIGN.md` 239–247 |

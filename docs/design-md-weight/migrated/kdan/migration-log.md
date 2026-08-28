# kdan migration log

Source: `web/references/kdan/DESIGN.md`
Sibling read (not the migration input): `web/references/kdan/.verification.md`
Destination: `docs/design-md-weight/migrated/kdan/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/kdan/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with ripgrep against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use ripgrep match lists per file, never a remembered count.

Source SHA-256 `f32bccf00b10f8a9d2e7f1267fefc83765b3315732d2e85f7976993604ca42c3` (`web/references/kdan/DESIGN.md`). Sibling SHA-256 `6b42d22b7ee38a4b91021f2719065cfc1b0b6208c5a073374118de5d3ec0dcd2` (`web/references/kdan/.verification.md`). Worker-close portable DESIGN SHA-256 `7ab6ad140fbfd471711afb483d6c6a65ec761edd98f90e46e090ce82ee1ab70d`. Auditor DESIGN SHA-256 `f1d091895645c04ebd67714a79ca2e1a8f26f5cfab611a996ca1c4d83236e4ed`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `logo.type` / `slug` 옮김 → Typography & Assets Assets | Portable file has no frontmatter. H1 is `# Kdan Mobile Design System` (`DESIGN.md` 1). Identity table `provenance.md` 9–25. Homepage is dual (E2a): YAML `https://www.kdan.com` at `provenance.md` 13/52/62/68; inspected live URL at `DESIGN.md` 9. Catalog `primary_color` `#00DC87` is dual: `DESIGN.md` dest at 11/35/57/76/78 + `provenance.md` dest at 14/27/77/87/104/134/175 (E2a). Favicon URL is dual: `DESIGN.md` dest 1 at 170 + `provenance.md` dest 1 at 16 (E2a). Line 29 names the field kind (`apple-touch-icon` URL) and is not the slug string. |
| YAML `omd: "0.1"`, `verified`, `tokens.source: prose-derived`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance; `prose-derived` 옮김 → Experience Scope | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 17–21, 39–44. `omd` format is at 17; `tokens.source` `prose-derived` at 19/196. Exact `prose-derived` is dual (E2a): `DESIGN.md` dest 1 at 9 + `provenance.md` dest 2 at 19/196. `components_harvested` DESIGN dest 0 / provenance dest 3 (`provenance.md` 21/137/197). The source footer's **Verified:** 2026-06-01 is at `provenance.md` 44. |
| YAML `ds.name` / `ds.url` / `ds.type: system` / `ds.description` | 분리 → provenance; description 옮김 → Experience Scope | A1c: table cell `ds.type` `system` at `provenance.md` 24; exact `ds.type: system` dest 2 at `provenance.md` 31/198. Full description transcribed at `provenance.md` 25. The source fact that kdan-ui is an open-source UI token library (kdanGreen + neutrals + semantic colors) is dual: `DESIGN.md` dest 1 at 9 + `provenance.md` dest at 25/31 (E2a). `ds.type` is `system`, so every derived-editorial close uses the published-spec form including kdan-ui-revamp (rulebook v12 B2a 전제 주석). |
| YAML `tokens.note` | 분리 → provenance; 역할 구분 옮김 → Semantic color | Token note at `provenance.md` 33. Catalog-primary / structural-surface / loud-accent split lands at `DESIGN.md` 76–80. |
| YAML `tokens.colors` (12 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 78–88. All twelve roles kept with names, values, and token-set keys: primary `#002d37`, brand `#00dc87`, accent-lime `#caff00`, canvas `#ffffff`, foreground `#191919`, muted `#4b4b4b`, on-primary `#ffffff`, surface `#fafafa`, body `#191919`, link `#007aff`, error `#f25858`, disabled `#afafaf`. Keep-both hex cases sit beside the YAML lowercase. `foreground` and `body` are two keys on the same hex (`DESIGN.md` 83). `canvas` and `on-primary` are two keys on the same hex (`DESIGN.md` 87). `#000000` is `tokens.components.button-hero.fg`, not a YAML color key (`DESIGN.md` 88). |
| YAML `tokens.typography.family.sans` / `mono` | 옮김 → Typography & Assets Family | `Clear Sans` at `DESIGN.md` 150 (`tokens.typography.family.sans`). `SF Mono` at `DESIGN.md` 145/151 (`tokens.typography.family.mono`). Declared-only; no invented use. |
| YAML `tokens.typography.hero` / `hero-cta` / `body` / `button` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 161–164. YAML sizes 56 / 22 / 16 / 16 and weights 700 / 500 / 400 / 500 kept. All four YAML `use` strings restored verbatim in the Token-set use column (A1, A3, wave37 긴 쪽): `Hero heading, steep declarative top` / `Hero CTA label` / `Standard body, document-heavy reading` / `Standard button label, medium weight`. §3 longer spellings sit in the next column; neither was chosen as a replacement. No line-height ratio was invented. |
| YAML `tokens.spacing` (6 steps) | 옮김 → Foundations spacing | Unitless: `DESIGN.md` 98–103 (`xs 4` · `sm 8` · `md 12` · `base 16` · `lg 24` · `xl 32`). `tokens.spacing.xs: 4` is disambiguated from the three `tokens.rounded.*: 4` steps and from component `4px` at `DESIGN.md` 105/118. `tokens.spacing.base: 16` is disambiguated from the 16px type roles and `16px / 500` control font at `DESIGN.md` 105/204. |
| YAML `tokens.rounded` (4 steps) | 옮김 → Foundations shape | `DESIGN.md` 113–116 (`sm 4` · `md 4` · `lg 4` · `full 9999`). Exact `tokens.rounded.full: 9999` dest 1 at `DESIGN.md` 118. Table cell `9999` + path `tokens.rounded.full` sit on 116; they are not the colon-joined string. No component writes `9999`. Component `4px` stays on the controls. |
| YAML `tokens.shadow.hover` | 옮김 → Foundations elevation | Full YAML writing `rgba(0,0,0,0.2) overlay token — darkens surface on hover; depth via contrast + borders, not Z-axis` at `DESIGN.md` 122. Path `tokens.shadow.hover` at 85/122. |
| YAML `tokens.components` (4 records) | 옮김 → Components & States | `DESIGN.md` 194–285. Verified primitive types preserved per component, not flattened to `Kind` (A1b): `Primitive type: \`button\`` ×4 (195/219/243/267 = YAML button-primary + button-outline + button-hero + button-disabled). All four YAML `use` strings restored verbatim as `Token-set use:` lines (203/226/250/272). YAML `disabled: non-interactive` at 273. §4 longer uses kept beside YAML: `paired alongside` at 218/227; `hero call-to-action` at 242/251; `non-interactive disabled state` at 266/274. Hero `Border: none` and Disabled `Border: none` from §4 at 246/270. No §4-only component borrowed a `Primitive type`. `not in the token set` DESIGN dest 0. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 34–39. Bold/modern/developer-credible wording, teal-black, lime, kdanGreen, Clear Sans, 4px, Tainan, Taiwan land at 9/11/13. "the signer and the integrating engineer" DESIGN dest 2 at 11/28. Key characteristics restated at 34–39 under the qualifier at 32. |
| §1 공식 URL·kdan-ui | 분리 → provenance; URL·정체 경계 옮김 → Scope | Identity/source URLs at `provenance.md` 50–70. kdan.com as live token surface and kdan-ui-revamp as named token-library source stay in `DESIGN.md` 9. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `DESIGN.md` 78–90. Role sentences (kdanGreen anchors identity; teal-black does structural work; lime is the single loud accent) at 90. Characterizing phrases covered by the adjacent qualifier at 76 (B2/B2a). |
| §3 Typography Rules — family, hierarchy, longer use | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 140–146. Family 150–153; hierarchy table 161–164. Humanist-sans and steep-hierarchy sentences at 166 under the qualifier on the same line (B2/B2a). |
| §4 Component Stylings | 옮김 → Components & States | `DESIGN.md` 194–285. §4 body values and YAML `use` / radius / height / font forms are both kept. Unique §4 values land: outline "paired alongside" at 218/227; hero "call-to-action" and `Border: none` at 242/246/251; disabled "non-interactive disabled state" and `Border: none` at 266/270/274 (A3, wave37 긴 쪽). All four controls stay on kdan.com. |
| §5 Layout Principles | 옮김 → Layout & Platforms | `DESIGN.md` 290: teal-black base, gray100 `#FAFAFA`, 56px/700 to 16px body, shared 38px height, 53px hero, consistent 4px. Surface-measurement reading at 294 (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `DESIGN.md` 122: hover-layer overlay; 1.5px solid `#002D37` border; contrast over drop shadows; YAML "not Z-axis" writing. Contrast-and-overlay reading carries the adjacent qualifier on the same line (B2/B2a). |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 55–59 (five Do rules), under the grouping qualifier at 53. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 65–68, under the qualifier at 63. The four prohibitions are the source's own list. No invented domain is added. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `DESIGN.md` 292: the source does not capture explicit breakpoints, fluid grids, or per-viewport measurements, so specific responsive numbers are not asserted; qualitative 38px / 53px / 4px / 56px/700 / 16px hold. `native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` DESIGN dest 0. |
| §9 Agent Prompt Guide | 삭제 | Tool-facing construction prompt; no receiving slot and no dedicated adapter file. Every value §9 names was checked against the portable body before deletion and each was already present (A2, A3): teal-black `#002D37`, white `#FFFFFF`, gray100 `#FAFAFA`, kdanGreen `#00DC87`, lime `#CAFF00` with black `#000000`, 53px / 22px/500, 38px / 16px/500 / 4px / 1.5px, `#AFAFAF` / `#4B4B4B`, Clear Sans, 56px/700, `rgba(0,0,0,0.2)`, `#007AFF`, `#F25858`. The check is itemised at `provenance.md` 134. |
| §10 Voice & Tone | 옮김 → Content & Locales | `DESIGN.md` 299. Issued names at 301: Kdan Mobile, kdanGreen, kdan-ui, kdan-ui-revamp, Clear Sans, SF Mono, Gray 1000, Gray 100. The qualifier at 299 covers the voice reading (B2/B2a, A5). |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: Tainan, Taiwan; PDF productivity; e-signature; document SDKs; dual story of signed documents and developer tooling; kdanGreen from kdan-ui; Clear Sans; 4px corners; and the closing sentence — software that handles real contracts and real integrations while still feeling charged with momentum. The source paragraph's last sentence is kept as one unit (`charged with momentum` DESIGN dest 1 at 13). Marked there as narrative context that supplies no interface tokens; the classification carries an adjacent complete qualifier in the same paragraph (B2/B2a). Also noted as narrative-not-token-source at `provenance.md` 201. `Tainan` DESIGN dest 6 at 9/11/13. |
| §12 Principles — 5 items | 옮김 → Experience principles | `DESIGN.md` 45–49 under the B2a form at 43. `ds.type` is `system`, so the close uses the published-spec form including kdan-ui-revamp (rulebook v12 B2a 전제 주석). Portable derived-editorial inventory: `provenance.md` 166–192 (27 data rows). |
| §13 Personas — 3 role-archetype entries | 삭제; Audience는 원본 그룹만 | The three persona entries are dropped. No name, motivation, or affiliation classification is invented or re-hosted (D2, D2a). The two source-named groups from §1 / §10 land at `DESIGN.md` 28: the signer and the integrating engineer. Disposition at `provenance.md` 133. Selecting surface-or-control outcomes as primary tasks is qualified at `DESIGN.md` 19. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Full source body preserved at `DESIGN.md` 180–184: Default solid primary at 180; Hover overlay at 181; Disabled pairing at 182; Error semantic `#F25858` reserved for error messaging and validation at 183; Link semantic `#007AFF` at 184 (A2; the catalog graph is still 0/440, so nothing is delegated). Error and Link stay semantic roles, not a button error treatment and not a declared link component (`DESIGN.md` 188). The applicability rule is at 190, whose qualifier covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Interactive controls declare the seven canonical states. Solid primary, Outline, Lime hero CTA, and Disabled close loading/error/success with a role reason (C2 v10) — destination primary / paired secondary / destination hero / non-interactive disabled (`loading \| not-applicable` dest 4 at 212/236/260/283). `loading \| applicable` DESIGN dest 0. Disabled hover is `not-applicable` with the meaning reason that the record is the non-interactive disabled state (`DESIGN.md` 280). This is not a complete state-coverage claim (`DESIGN.md` 190). |
| §15 Motion & Easing | 옮김 → Foundations motion | `DESIGN.md` 126: "The source does not capture explicit animation durations, easing curves, or transition timing for Kdan, so no specific motion values are asserted." No curve was present to delete. Qualitative overlay line kept at 128 as that qualitative claim; it does not restore a duration or a curve. B3 is held: the promotion condition at `DESIGN.md` 130 names all five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text (E2c). |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance | Freshness `provenance.md` 37–46; Tier 1 list 66–70; Tier 2 72–75. Conflicts unresolved: none — `provenance.md` 46. |

## Sibling handling (`web/references/kdan/.verification.md`)

The sibling exists — confirmed with `find web/references/kdan -type f`. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at `provenance.md` 85–93 and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: `playwright getComputedStyle`; rgb(0,45,55); rgb(202,255,0); raw source-file fetch. Recorded at `provenance.md` 97–100.
- Measured `DESIGN.md` 0 for those sibling-only strings: `playwright` 0 · `rgb(0,45,55)` 0 · `rgb(202,255,0)` 0.
- `#00DC87` / `#002D37` / `#CAFF00` / `#007AFF` / `#F25858` / `#191919` / `#FAFAFA` / `rgba(0,0,0,0.2)` / `#FFFFFF` / `#000000` / `#AFAFAF` / `#4B4B4B` / 1.5px / 4px / 38px / 53px / 16px / 22px / 56px/700 / Clear Sans / Tainan, Taiwan are already in the source body and are corroboration.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. Kdan's issued names are Latin, so a hand sweep of published labels is mandatory even when the needle set is thin.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published names and identity strings in the source body | 8 distinct | 0 | 0 | Kdan Mobile / kdanGreen / kdan-ui / kdan-ui-revamp / Clear Sans / SF Mono / Gray 1000 / Gray 100. |
| YAML `use` strings (4 type-role + 4 component) | 8 | 0 | 0 | Restored verbatim at `DESIGN.md` 161–164 and 203/226/250/272. |
| `node test-v2/tools/latin-copy-audit.mjs --brand kdan` | 0 lost / 1 brand scanned | 0 published | 0 | Clean. |
| Sibling published strings | 0 distinct sibling-only CTAs | 0 | 0 | Sibling records measurements and rgb() spellings, not additional published CTAs. |

Sub-needle labels confirmed present individually in `DESIGN.md`: Kdan Mobile, kdanGreen, kdan-ui, kdan-ui-revamp, Clear Sans, SF Mono, Gray 1000, Gray 100.

A5 분모: hand sweep of source published labels 8 extracted / 0 missing + YAML use 8 / 0 missing; latin-copy-audit 0 lost / 0 candidates published; gate `copy-loss` compared 0 / candidates 64.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand kdan --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 0, candidates: 64, detail: "바늘 0개 — 이 브랜드에서 A5는 기계 검사되지 않았다. 발행 라틴 문자열을 손으로 전수 대조하라." }]`. Separately, `scripts/design-md-core.cjs` `evaluatePortableCore` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 0 < `candidates` 64.

First gate run blocked on `token-invention: px:999px` — Shape said "no component record writes `9999` or `999px`". The source has `full: 9999` only; `999px` is an invented measurement frame (wave29 greeting / D1 over-defense). Removed `999px` from the portable body (E3: the value was not distorted to evade the gate; the invented negation was deleted). Second run PASS.

## Deviations recorded

- `DESIGN.md` is 5,065 words by `wc -w` after auditor B2a expansions (worker-close was 4,932). The file is above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: four declared component records, a source §14 body plus seven-state applicability on four interactive controls, `tokens.rounded.full: 9999` and the three `4` rounded steps kept off matching spacing keys, the full §11 narrative including its last sentence, surface-attached token-set paths, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- `ds.type` is `system`, so every derived-editorial close uses `not Kdan-authored or taken from a separately published UI specification, including the published kdan-ui-revamp token library` (rulebook v12 B2a 전제 주석). Measure: `derived editorial implementation inference` DESIGN = `not Kdan-authored` DESIGN = 27. Provenance derived ledger 27 rows at 166–192 (E1 1:1).
- First gate `token-invention: px:999px` was a portable negation that invented `999px`. Deleted that string. Worker-close portable DESIGN SHA-256 `7ab6ad140fbfd471711afb483d6c6a65ec761edd98f90e46e090ce82ee1ab70d`. Auditor DESIGN SHA-256 `f1d091895645c04ebd67714a79ca2e1a8f26f5cfab611a996ca1c4d83236e4ed`.

## Mandatory final passes

### Pass 1 — B2a scan

The portable body was re-read from H1 through Named gaps. Every sentence that names a cause, reading, grouping, selection, or authority close is adjacent to a complete-form qualifier (`derived editorial implementation inference` + `not Kdan-authored or taken from a separately published UI specification, including the published kdan-ui-revamp token library`). Source-authored facts (Tainan, Taiwan, PDF / e-signature / document SDKs, YAML hexes, YAML `use` strings, §11 closing charged-with-momentum sentence, §14 semantic Error/Link rows as source text) are not treated as derived; classifying Error/Link as semantic roles rather than a button treatment is derived and is named on `:190`. Scope, Content voice reading, the kdan-ui-revamp citation character, Primary-tasks persona-section bound, Motion qualitative-claim and five-kind-gate-in-full, and Font evidence-class cell readings are included in the 27. Inventory 1:1 at `provenance.md` 166–192.

### Pass 2 — E2 contrast

Each log row was written only after a ripgrep check of the named file and line. Dual destinations (homepage, `#00DC87` as identity-and-brand, favicon URL DESIGN dest 1 / P dest 1 at 16, `prose-derived`, `ds.description` library-boundary) list both files. “B3 유지” is claimed only because `DESIGN.md` 130 names transition properties, animation name, duration, easing, reduced-motion behavior, and the per-component gate. Persona disposition is unidentified (D2a) at `provenance.md` 133: two source-named groups only; no name, motivation, or affiliation classification is re-hosted.

## Key-path self-check (A1)

| YAML path | Portable landing |
|---|---|
| `tokens.colors.primary` `#002d37` | `DESIGN.md` 79 |
| `tokens.colors.brand` `#00dc87` | `DESIGN.md` 78 |
| `tokens.colors.accent-lime` `#caff00` | `DESIGN.md` 80 |
| `tokens.colors.canvas` `#ffffff` | `DESIGN.md` 87 |
| `tokens.colors.foreground` `#191919` | `DESIGN.md` 83 |
| `tokens.colors.muted` `#4b4b4b` | `DESIGN.md` 86 |
| `tokens.colors.on-primary` `#ffffff` | `DESIGN.md` 87 |
| `tokens.colors.surface` `#fafafa` | `DESIGN.md` 84 |
| `tokens.colors.body` `#191919` | `DESIGN.md` 83 |
| `tokens.colors.link` `#007aff` | `DESIGN.md` 81 |
| `tokens.colors.error` `#f25858` | `DESIGN.md` 82 |
| `tokens.colors.disabled` `#afafaf` | `DESIGN.md` 86 |
| `tokens.typography.family.sans` Clear Sans | `DESIGN.md` 150 |
| `tokens.typography.family.mono` SF Mono | `DESIGN.md` 151 |
| `tokens.typography.hero` 56 / 700 / use | `DESIGN.md` 161 |
| `tokens.typography.hero-cta` 22 / 500 / use | `DESIGN.md` 162 |
| `tokens.typography.body` 16 / 400 / use | `DESIGN.md` 163 |
| `tokens.typography.button` 16 / 500 / use | `DESIGN.md` 164 |
| `tokens.spacing.xs: 4` | `DESIGN.md` 98 ≠ `tokens.rounded.sm: 4` |
| `tokens.spacing.sm: 8` | `DESIGN.md` 99 |
| `tokens.spacing.md: 12` | `DESIGN.md` 100 |
| `tokens.spacing.base: 16` | `DESIGN.md` 101 ≠ type 16 |
| `tokens.spacing.lg: 24` | `DESIGN.md` 102 |
| `tokens.spacing.xl: 32` | `DESIGN.md` 103 |
| `tokens.rounded.sm: 4` | `DESIGN.md` 113 |
| `tokens.rounded.md: 4` | `DESIGN.md` 114 |
| `tokens.rounded.lg: 4` | `DESIGN.md` 115 |
| `tokens.rounded.full: 9999` | `DESIGN.md` 116 |
| `tokens.shadow.hover` | `DESIGN.md` 85/122 |
| `tokens.components.button-primary` type/bg/fg/border/radius/height/font/hover/use | `DESIGN.md` 194–203 |
| `tokens.components.button-outline` type/bg/fg/border/radius/height/font/use | `DESIGN.md` 217–226 |
| `tokens.components.button-hero` type/bg/fg/radius/height/font/use | `DESIGN.md` 241–250 |
| `tokens.components.button-disabled` type/bg/fg/radius/disabled/use | `DESIGN.md` 265–273 |

# makinarocks migration log

Source: `web/references/makinarocks/DESIGN.md`
Sibling read (not the migration input): `web/references/makinarocks/.verification.md`
Destination: `docs/design-md-weight/migrated/makinarocks/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/makinarocks/provenance.md`
Date: 2026-09-01
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with a Python substring scan / `grep -oF --` against the three output files before it was written (F2). Counts use per-file match lists, never a remembered count.

Source SHA-256 `7b298d736b4f5a627a921005393d29110c465bb523f53e211a9a3567cf8ca147` (`web/references/makinarocks/DESIGN.md`). Sibling SHA-256 `aee3970400f874a5d4abf81b3dc80d1b134a5acc1bc3aac996558930cb1bc1a0` (`web/references/makinarocks/.verification.md`).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; catalog `primary_color` 옮김 → Semantic color; `logo.type` / `slug` 옮김 → Typography & Assets; `마키나락스` 옮김 → Scope + Content | Portable file has no frontmatter. H1 is `# MakinaRocks Design System` (`DESIGN.md` 1). Identity table `provenance.md` 9–20. YAML homepage substring `https://www.makinarocks.ai` DESIGN dest 5 / provenance dest 13 (includes path URLs; E2a). Exact no-path homepage DESIGN dest 1 / provenance dest 1. Homepage with trailing slash substring `https://www.makinarocks.ai/` DESIGN dest 4 / provenance dest 12. About URL `https://www.makinarocks.ai/en/about/` DESIGN dest 1 / provenance dest 3 (E2a). Blog URL substring `https://www.makinarocks.ai/en/blog/` DESIGN dest 2 / provenance dest 5 (the extra hit is the rebrand path). Rebrand URL `https://www.makinarocks.ai/en/blog/makinarocks-rebranding-meet-our-new-logo/` DESIGN dest 1 / provenance dest 2 (E2a). Catalog `#2b2b3b` DESIGN dest 4 / provenance dest 3 (E2a). Favicon URL `https://www.google.com/s2/favicons?domain=makinarocks.ai&sz=128` DESIGN dest 1 / provenance dest 1 (E2a). Exact `logo.type: favicon` DESIGN dest 1. `마키나락스` DESIGN dest 3 / provenance dest 2 (A5, E2a). |
| YAML `omd: "0.1"`, `verified`, `added`, `tokens.source: reconciled`, `tokens.extracted`, `components_harvested: true`, `verification_v2` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): identity rows `provenance.md` 17–20, freshness table 26–34, surfaces 40–44, sources 48–55. Exact `tokens.source` reconciled DESIGN dest 0 / provenance dest 1. `components_harvested` DESIGN dest 0 / provenance dest 2. Conflicts unresolved: none — `provenance.md` 36. |
| YAML `tokens.colors` (5 keys) | 옮김 → Foundations semantic color · 분리 → provenance claim ledger | `DESIGN.md` 79–85. `tokens.colors.primary` `#2b2b3b` DESIGN dest 4 / P dest 3. `canvas` `#ffffff` DESIGN dest 3 / P dest 1. `ink` `#000000` DESIGN dest 5 / P dest 3. `slate` `#5a5a72` DESIGN dest 2 / P dest 2. `muted` `#8d8da5` DESIGN dest 2 / P dest 2. Same-hex keys not invented. Fluorescent yellow-green stays outside the token sheet (`DESIGN.md` 87–89). |
| YAML `tokens.typography.family.display` / `body` | 옮김 → Typography Family | `KmrApparat` DESIGN dest 16 / P dest 4. `Pretendard` DESIGN dest 18 / P dest 10. Display vs body kept as two keys. |
| YAML `tokens.typography.display-hero` / `body` metrics + `use` | 옮김 → Type roles table | YAML numbers kept beside §3 px (A1a): `83.2` DESIGN dest 6 / P dest 2 beside `83.2px` DESIGN dest 3; `25.6` DESIGN dest 6 / P dest 2 beside `25.6px` DESIGN dest 3; `-1.6` kept beside `-1.6px` DESIGN dest 3; `-0.16` kept beside `-0.16px` DESIGN dest 3. YAML `use` verbatim dual dest: `Public-home marketing hero` DESIGN dest 1 / P dest 1; `Public marketing and corporate reading text` DESIGN dest 1 / P dest 1 (E2a). Not converted to unitless ratios 1.3 / 1.6. |
| YAML `tokens.spacing.nav-control: 16` | 옮김 → Foundations Spacing + Components padding | Exact `tokens.spacing.nav-control: 16` DESIGN dest 3. Kept off prose `16px` (DESIGN dest 18) and off body/nav type `16px`. |
| YAML `tokens.rounded.nav-control: 0` / `disabled-control: 28` | 옮김 → Foundations Shape + Components radius | Exact `tokens.rounded.nav-control: 0` DESIGN dest 2. Exact `tokens.rounded.disabled-control: 28` DESIGN dest 2. Kept off prose `0px` (DESIGN dest 6) and `28px` (DESIGN dest 4). |
| YAML `tokens.components.disabled-home-control` `type: button` | 옮김 → Components Disabled public-home control | `Primitive type: \`button\`` DESIGN dest 1 (A1b). Exact `type: button` DESIGN dest 1 (Capture record names the YAML field). `rgba(196, 196, 212, 0.5)` DESIGN dest 1 / P dest 1 (E2a). `13.3333px` DESIGN dest 3 / P dest 2. `disabled computed snapshot only` DESIGN dest 1 / P dest 1. Use string unescaped in the portable body: `Disabled public-home control at home::[data-omd-capture="19"]` DESIGN dest 2 / P dest 1. Selector dual dest DESIGN dest 6 / P dest 2 (E2a). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 38–43. Product/surface bound is homepage, About, and Blog — not an authenticated product application or documentation chrome. May 2026 rebrand, fluorescent yellow-green signature against a deep-black foundation, intentionally not promoted to a color token, cool indigo / black / white / muted-grey vocabulary kept as written. Characterizations (restrained, type-led; measured muted-text ladder; public design in transition) carry an adjacent complete qualifier at 11 (B2/B2a). Token-surface reading qualified at 9. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color + Brand asset outside the token sheet | `DESIGN.md` 79–89. High-confidence computed text/border wording and “not evidence for authenticated-product semantics” kept. “do not manufacture a token from the logo asset or use the old indigo as a substitute” DESIGN dest 1. Qualified at 79 and 89. |
| §3 Typography Rules | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 115–124; Family 127–131; Type roles 133–144. `206 visible uses` DESIGN dest 1. `seven MakinaRocks-hosted WOFF2 sources including regular, medium, bold, heavy, and black` DESIGN dest 1. `285 visible uses` DESIGN dest 1. `jsDelivr-hosted dynamic-subset` DESIGN dest 1. `SIL Open Font License 1.1` DESIGN dest 1 / P dest 1. `www.makinarocks.ai/fonts/` DESIGN dest 2 / P dest 1. `Pretendard JP` DESIGN dest 6 / P dest 3. Exact `zero visible uses` DESIGN dest 1 (`DESIGN.md` 123). Substring `zero visible use` DESIGN dest 2 (Avoid `:70` singular + Declared-only `:123` plural). Header-nav `32px` line height DESIGN dest 1 (not a YAML typography key). |
| §4 Component Stylings | 옮김 → Components & States | Header control `DESIGN.md` 165–185; disabled control 187–209. Selectors dual dest as above. `interactionCount: 0` DESIGN dest 2 / P dest 1. Older card, CTA, mega-menu, category-label, and carousel variants not retained — capture record `DESIGN.md` 157. Footer **Verified** / Tier 1 / Tier 2 / Conflicts at legacy 151–154 are provenance. |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance; URL 옮김 → Experience Scope | Freshness `provenance.md` 26–34; Conflicts 36; Tier 1 list 59–63; Tier 2 67–68; lookup-query prose 70. Conflicts unresolved: none. `getdesign` DESIGN dest 0 / provenance dest 3 (Tier 2 URL + site-search needle + Omission ledger mention). `refero` DESIGN dest 0 / provenance dest 2 (two `styles.refero.design` hits on the Tier 2 row; capital `Refero` on the Omission row is a different string). Ledger only — not portable copy. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing | `DESIGN.md` 213–223. `product grid, app spacing scale, responsive breakpoint system, content-card geometry` DESIGN dest 2. `visual expression of the physical world and an expanding AI core` DESIGN dest 2. `broader design system was rebuilt around the identity` DESIGN dest 2. Qualified at 223. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `DESIGN.md` 99–101. “No reusable shadow or elevation token is promoted.” `older inferred shadow ladder` DESIGN dest 2. No `box-shadow: none` invented as a token. Qualified at 101. |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 53–61, under the grouping qualifier at 55. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 63–72, under the qualifier at 65. `logged-in AI OS` DESIGN dest 1. `guessed hex token` DESIGN dest 1 (`guessed hex value` is the Distinctive-traits wording). `redistributable public font` DESIGN dest 2. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `DESIGN.md` 221. `1440×900` DESIGN dest 2 / P dest 1 (E2a). `mobile breakpoints, stacking behavior, touch-target policy, and image treatment` DESIGN dest 2. |
| §9 Agent Prompt Guide | 삭제; unique constraints already in Foundations/Typography/Components | Tool-facing prompt. Color hexes, 64px / 700 / 83.2px / -1.6px KmrApparat hero lawful-load rule, Pretendard 16px / 400 / 25.6px / -0.16px reading example, and “Do not synthesize a component library from them” (DESIGN dest 1, Capture record) already have receiving slots (A2, A3). No skill/adapter delegation. |
| §10 Voice & Tone | 옮김 → Content & Locales | `DESIGN.md` 227–243. Voice samples byte-exact: `Transforming Industries with Specialized AI` DESIGN dest 2; `Deploying AI, Delivering Reality` DESIGN dest 2; `The Physical AI Leader — Built for the Field, Powered by Enterprise AI OS` DESIGN dest 2; `Delivering Reality` DESIGN dest 3. `industrial, concrete, and outcome-led` DESIGN dest 2 / P dest 1 (E2a; inventory row restates the Content `:241` reading). `AI core breaking through the constraints of industrial reality` DESIGN dest 1. Register table kept. Qualified at 241, including `마키나락스` beside `MakinaRocks`. |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13. `founded in 2017` DESIGN dest 1. `research-and-development workforce share above 70%` DESIGN dest 2. `more than 6,000 models applied in industrial fields` DESIGN dest 1. `company-stated figures, not independently audited metrics` DESIGN dest 1. `dense, grounded outer form` DESIGN dest 2. `energy breaking outward` DESIGN dest 2. `stability/precision alongside energy/acceleration` DESIGN dest 2. `business, digital, event, and product touchpoints` DESIGN dest 2. `from manufacturing to defense` DESIGN dest 1. Qualified as brand-context-not-tokens at 13. |
| §12 Principles — 3 numbered | 옮김 → Experience principles | `DESIGN.md` 45–51 under the B2a form at 47. `Physical environments are the reference point` DESIGN dest 1. `Specialization precedes generalization` DESIGN dest 1. `The rebrand pairs stability with energy` DESIGN dest 1. UI implications kept. Portable derived-editorial inventory: `provenance.md` 137–159 (23 data rows). |
| §13 Personas | 옮김 → Experience audience (groups only) | Source names stakeholder groups, not fictional individuals. Audience `DESIGN.md` 26–34 keeps the three group wordings. `Runway as an enterprise AI operating system` DESIGN dest 1. `no authenticated workflow, role permissions, or individual task evidence` DESIGN dest 1. No name, age, city, or affiliation classification is carried (D2, D2a). Disposition `provenance.md` Omission ledger. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Source body preserved at `DESIGN.md` 157: `interactions: []` DESIGN dest 1 / P dest 1; `interactionCount: 0` DESIGN dest 2 / P dest 1; `unresolved rather than inferred from marketing copy` DESIGN dest 4. Graph not used (A2). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Two interactive controls declare the seven canonical states. Header navigation closes loading/error/success with a destination-control role reason (C2). Disabled public-home control (`Primitive type: \`button\``) closes loading/error/success because a public-home marketing control does not report an in-place operation (C2); disabled remains applicable (captured snapshot). Non-observation is never used as a `not-applicable` reason (C1). `loading \| not-applicable` DESIGN dest 2. `error \| not-applicable` dest 2. `success \| not-applicable` dest 2. `loading \| applicable` dest 0. Table rows: applicable 8 / not-applicable 6. Capture-record qualifier at 161. This is not a complete state-coverage claim. B1: no focus-visible row carries a hex. |
| §15 Motion & Easing | 옮김 → Foundations motion | `DESIGN.md` 103–107. `language of expansion and momentum is narrative context only` DESIGN dest 1. `it is not evidence for interface animation` DESIGN dest 1. Exact `do not attribute a motion system to MakinaRocks without a selector-provenanced observation` DESIGN dest 1 (`DESIGN.md` 105). Qualifier restates as `refusing to attribute a motion system to MakinaRocks without a selector-provenanced observation` DESIGN dest 1 (`DESIGN.md` 107) — not the same string. `Respect reduced-motion requirements in any implementation` DESIGN dest 1. No duration/easing/transition token invented. No unattributed cubic-bezier in the source; nothing to delete. B3 is held: `DESIGN.md` 107 names computed transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component gate and the partial-confirmation clause, in full text (E2c). `transition properties` dest 1. `animation name` dest 1. `reduced-motion` dest 3. The five-kind gate itself carries an adjacent complete B2a close on the same line. |

## Sibling handling (`web/references/makinarocks/.verification.md`)

The sibling exists — confirmed with `find web/references/makinarocks -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at `provenance.md` Sibling file and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: bundle timestamp `2026-07-13T11:52:21.879Z`; score 65; 38 variants; `rgb(249, 249, 251)`; about-list `24px` radius/padding/size; `31.2px` line height; FontFace labels light and book; Pretendard source-count `1,656`; `Pretendard JP` declared `2,142` URLs; rolled-back inventory extras (contact CTA, product cards, industry tiles, blog card, shadow ladder). Recorded in provenance, not promoted.
- Measured `DESIGN.md` 0 for those sibling-only strings: `31.2px` 0 · `rgb(249, 249, 251)` 0 · `1,656` 0 · `2,142` 0 · `2026-07-13T11:52:21.879Z` 0. `24px` as an about-list token is not in the portable body (the word `24px` DESIGN dest 0).
- Hexes, families, selectors, `13.3333px`, `rgba(196, 196, 212, 0.5)`, `1440×900`, and the three voice samples are already in the source body and are corroboration.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. `마키나락스` is unquoted in YAML, so the machine needle set is empty. A hand sweep of published labels is mandatory.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published labels and slogans in the source body | 12 distinct | 0 | 0 | Transforming Industries with Specialized AI / Deploying AI, Delivering Reality / The Physical AI Leader — Built for the Field, Powered by Enterprise AI OS / Delivering Reality / 마키나락스 / Runway / Physical AI / KmrApparat / Pretendard / Pretendard JP / SIL Open Font License 1.1 / fluorescent yellow-green |
| YAML `use` strings | 2 extractable (`Public-home marketing hero`, `Public marketing and corporate reading text`) | 0 | 0 | Both land verbatim. The disabled-control `use` contains escaped quotes in YAML and is skipped by the extractor as a truncated selector; the unescaped form lands in the portable body anyway |
| Sibling published strings | 0 sibling-only issued labels that the source body lacked | 0 | 0 | Sibling adds collector metadata and extra computed samples, not new brand-issued copy |

A5 분모: hand sweep of source published labels 12 extracted / 0 missing; YAML use 2 / 0 extractable; sibling published 0 additional issued labels; gate `copy-loss` compared 0 / candidates 71.

## State applicability (C2)

Judged by role meaning, not by primitive name and not by capture completeness.

| Component | loading / error / success | Reason class |
|---|---|---|
| Public header navigation control | not-applicable | Destination header control; commits no operation in place |
| Disabled public-home control | not-applicable | Public-home marketing control does not report an in-place operation; source leaves those states unresolved rather than inferred from marketing copy |

Absence of an observation is not a `not-applicable` reason. This is not a complete state-coverage claim.

## B2a

Portable body: `derived editorial implementation inference` **23** · `not MakinaRocks-authored or a separately published UI specification` **23** · `separately published` **24** (the extra 1 is the Font-evidence table cell “No separately published MakinaRocks type specification”, not a close). Inventory is provenance `## Derived editorial inventory` (23 data rows, 137–159). No published first-party UI specification; the example form is used as-is.

Pass 1 (F1) re-read the finished body from the title down. Causal/interpretive sentences outside Principles (Scope token-surface bound, captured-layer characterizations, narrative-as-context, Primary-task selection, Audience grouping, Distinctive-traits restatement, Do/Don't grouping, color pairing, green-not-hex, spacing/shape keep-both, elevation unresolved bound, B3 gate, font-class sorting, Family substitutes, type-role keep-both, favicon pointer, capture/applicability, layout 1440×900, voice industrial/concrete/outcome-led + rebrand-not-overstate + `마키나락스` beside Latin, Named gaps) each have an adjacent full-form bound. Company-stated About/rebrand facts and the three voice samples are first-party strings and were not qualified as derived.

## D1 / D2

- `native-client` DESIGN dest 0 / P dest 0. `storefront` 0 / 0. `mobile app` 0 / 0. `back-office` 0 / 0. `200%` 0 / 0.
- No personas to promote or re-host. §13 was stakeholder groups; drop of invented individuals is unidentifying.

## Uniqueness self-check (wave 43 follow-up)

Phrases pulled from source §1/§11 narrative connectors, value modifiers, and §15/§5/§7 constraint sentences: **72**. `grep -oF` dest counts of 0 before restoration: **0**. Restored after a 0: **0**. All 72 landed on the first write.

## Deviations recorded

- `DESIGN.md` is 4,624 words by Python `split()`, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: five color keys, four type roles with YAML/px keep-both, two declared components with seven-state applicability, the full §11 narrative, the full §14 sentence, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- MakinaRocks publishes no first-party UI component specification (the rebrand article is brand context), so every derived-editorial close uses the toss-form `not MakinaRocks-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석).

## Gate run

- `inspectDesignMd` on the migrated `DESIGN.md` → `conformance.portable_core: true`, `level: portable-core`, `reasons: []`, `structurally_valid: true`, `cleanTop: true`, placeholders 0
- `findProcessLeaks()` on the migrated body → `[]`
- `node test-v2/tools/latin-copy-audit.mjs --brand makinarocks` → `withLoss: 0` (after recording the sibling search `site:styles.refero.design MakinaRocks` in provenance as a lookup query)
- `node scripts/check-limiter-ledger.mjs makinarocks` → 본문 23 = 원장 23 (137–159)
- `node scripts/check-yaml-use-landing.mjs makinarocks` → use 2/2 (100%) OK
- `node test-v2/tools/migrate-reference.mjs --brand makinarocks --gate-only` → **PASS**, `problems: []`, copy-loss `compared` 0 / `candidates` 71

All are run results only. A5a was mandatory because `compared` 0 < `candidates` 71.

## Hashes

| File | SHA-256 |
|---|---|
| `web/references/makinarocks/DESIGN.md` (source, unmodified) | `7b298d736b4f5a627a921005393d29110c465bb523f53e211a9a3567cf8ca147` |
| `web/references/makinarocks/.verification.md` | `aee3970400f874a5d4abf81b3dc80d1b134a5acc1bc3aac996558930cb1bc1a0` |
| `docs/design-md-weight/migrated/makinarocks/DESIGN.md` | `3a1a534c8f3a8efa9536c10150360de8ae36ccec5aaac4cfceaf306bab50e2c8` |
| `docs/design-md-weight/migrated/makinarocks/provenance.md` | `e5c93a4c96715ec65ef9691fb2230c9d03924829474f6b537198ec79684b2ed4` |

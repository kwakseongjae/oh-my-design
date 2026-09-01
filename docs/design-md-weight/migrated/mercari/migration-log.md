# mercari migration log

Source: `web/references/mercari/DESIGN.md`
Sibling read (not the migration input): `web/references/mercari/.verification.md`
Destination: `docs/design-md-weight/migrated/mercari/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/mercari/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use `grep -o … | wc -l` per file, never `grep -c`, which counts lines.

Source SHA-256 `7a16164be47ea9b4a73fd66e6d43d9ec5adcda18a845477d379be8d92d14ba56` (`web/references/mercari/DESIGN.md`). Sibling SHA-256 `4fa9bcc86b069949927dc0b8865662472ebfb172853114773386a1fa259d72b5` (`web/references/mercari/.verification.md`).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations; `logo` 옮김 → Typography & Assets Assets | Portable file has no frontmatter. H1 is `# Mercari Design System` (`DESIGN.md` 1). Identity table `provenance.md` 7–21. Exact catalog homepage `https://www.mercari.com` (no trailing path) is dual: `DESIGN.md` dest **1** at 9 + `provenance.md` dest **1** at 13 (E2a). Trailing-slash home route `https://www.mercari.com/` is a different string: `DESIGN.md` dest **1** at 9 + `provenance.md` dest **5** at 44/52/63/72/178. Frontmatter `primary_color` `#5356ee` is dual: `DESIGN.md` dest **10** at 9/13/39/60/82/231/264/265/272/284 + `provenance.md` dest **5** at 14/123/141/153/220 (E2a). Hex role splits (same byte, different roles) are ledgered at `provenance.md` 215–221, not rewritten in the body. Logo `type: github`, `slug: mercari` is dual: `DESIGN.md` 149 + `provenance.md` 15/23 (E2a). `consumer-tech` stays ledger-only: `DESIGN.md` 0 / `provenance.md` 12. |
| YAML `omd: "0.1"`, `verified`, `verification_v2` (schema, checked, surfaces, sources, conflicts, claims), `tokens.source: reconciled`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 16–21, 25–38, 176–177. `verification_v2.schema` `2` at `provenance.md` 18. `tokens.source` `reconciled` at `provenance.md` 19. `components_harvested: true` at `provenance.md` 21/179. Footer **Verified:** 2026-07-13 at `provenance.md` 36. Conflicts unresolved: none — `provenance.md` 38/177. No `ds.name` / `ds.url` / `ds.type` fields exist in the source YAML. |
| YAML `tokens.colors` (`public-action` `#5356ee`, `canvas` `#ffffff`, `foreground` `#222222`, `muted` `#6b6b6b`) | 옮김 → Foundations semantic color | `DESIGN.md` 82–85. Role names follow token-set keys. Characterizing phrases covered by the adjacent qualifier at 80, which names observed-public-web vs global brand token, fill of skip/sell controls, catalog `primary_color` as the same hex, and the capture not establishing a universal filled CTA from that identity field (B2/B2a). Truste `#ecedf1` / `#dcdde0` exclusion at 87. Same-hex role splits (`#ffffff` canvas vs control fill vs on-indigo text; `#5356ee` public-action vs fills vs header hover text; `#222222` foreground vs control text) are indexed at `provenance.md` 215–221. |
| YAML `tokens.typography.family.sans` (`Averta`) | 옮김 → Typography & Assets Family | `DESIGN.md` 131. Token-set key `tokens.typography.family.sans` on the same line. |
| YAML `tokens.typography.body` / `header-action` / `marketing-display` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 139–141. Unitless line heights stay ratios and are never converted to a single px form (A1a): `1.43` at 139/143; `1.38` at 140/143; `1.2` at 141/143. YAML tracking `-0.16px` at 139. Source also writes 20px / 22px / 57.6px; both forms stay (`57.6px` at 141/143). All three YAML `use` strings restored verbatim at 139–141 and restated at 145 (A1, A3). The form-keeping decision carries an adjacent complete qualifier at 143 (B2/B2a). |
| YAML `tokens.spacing` (5 steps) / `tokens.rounded` (4 steps) / `tokens.shadow.none` | 옮김 → Foundations spacing + shape + elevation; also Layout | Unitless steps kept: `DESIGN.md` 91 (`xs 4 · sm 6 · md 12 · lg 16 · xl 20`). The same line also records the px cluster and `0px 16px or 6px 16px`. Shape at 95 (`none 0 · compact 4 · image 8 · circular 50`). `tokens.shadow.none: none` and `box-shadow: none` at 106. Px cluster and `0px 16px or 6px 16px` restated at Layout 310 (dual inside DESIGN: 91 + 310). |
| YAML `tokens.components` (4 records) | 옮김 → Components & States | `DESIGN.md` 161–306. Verified primitive types preserved per component, not flattened to `Kind` (A1b): YAML `type: button` ×3 at 164/229/282; YAML `type: card` ×1 at 216. YAML font shorthands `14px/600 Averta` at 171/236 and `16px/600 Averta` at 289. All four YAML `use` strings restored as `Token-set use:` lines (175/222/240/294). YAML `states` strings restored as `Token-set states:` (174/239/293). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim + Distinctive traits | Scope `DESIGN.md` 9–17; Distinctive traits 38–43. Compact / type-led / former Japanese marketplace system at 13. `#5356ee` as observed public-web value, not an asserted global brand token, at 39. Qualifiers at 11/13/15 (B2/B2a). |
| §1 공식 listing-guide · marketplace-principles URL | 옮김 → Experience Scope; 분리 → provenance | Dual (E2a): listing-guide `DESIGN.md` dest **2** at 17/317 + `provenance.md` dest **3** at 56/67/85; principles PDF `DESIGN.md` dest **1** at 17 + `provenance.md` dest **3** at 57/68/83. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `DESIGN.md` 82–87. Earlier red/blue, success/error, universal filled CTA, global product color architecture omitted as unnamed values. Truste `#ecedf1` `#dcdde0` excluded at 87. |
| §3 Typography Rules — evidence classes, hierarchy | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 122–127; family 131–133; hierarchy table 139–141. 902 captured elements at 122. Averta PE + Foundry5/EULA at 124 (URLs dual: Foundry5 `DESIGN.md` dest **1** at 124 + `provenance.md` dest **3** at 58/69/86; EULA `DESIGN.md` dest **1** at 124 + `provenance.md` dest **3** at 59/70/86). `averta-bold` / `averta-semibold` / `averta-regular` at 125. Arial fallback + substitution ban at 126/133. Family qualifier at 133 names canonical-only-because and the substitution ban (B2/B2a). |
| §4 Component Stylings | 옮김 → Components & States | Six controls: Marketplace sell action 161–186; Circular icon action 188–211 (A3: §4-only, not in YAML `tokens.components`); Listing image shell 213–224 (C4: no kind, no map, at 224); Marketing sell action 226–251; Header text action 253–277 (A3: §4-only; hover/pressed `#5356ee` at 264–265/272); Skip link 279–306. Capture selectors dual: DESIGN Use lines + `provenance.md` 129–134 (E2a). |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance; live URLs 옮김 → Experience Scope | Freshness `provenance.md` 25–38; Tier 1 list 61–70; Tier 2 74–77. Exact `https://www.mercari.com/` dual: `DESIGN.md` dest **1** at 9 + `provenance.md` dest **5** at 44/52/63/72/178. Exact `https://www.mercari.com/about/` dual: `DESIGN.md` dest **1** at 9 + `provenance.md` dest **5** at 45/53/64/72/178. Exact `https://www.mercari.com/us/brand/` dual: `DESIGN.md` dest **1** at 9 + `provenance.md` dest **5** at 46/54/65/72/178. Conflicts unresolved: none — `provenance.md` 38. |
| §5 Layout Principles | 옮김 → Layout & Platforms | `DESIGN.md` 310. 1440×900; clusters 4, 6, 12, 16, and 20px; `0px 16px or 6px 16px`; product grid / page-width / breakpoint / mobile navigation / authenticated listing layout omitted as the source omitted them. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `DESIGN.md` 106. `box-shadow: none`; no card elevation, menu, sheet, modal, tooltip, or z-index scale; Truste dialogs excluded from Mercari depth guidance. Qualifier at 106 (B2/B2a). |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 59–62, under the grouping qualifier at 57. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 68–71 are the four source Don’ts, under the qualifier at 66. The fifth bullet at 72 is the unique §9 generation bound (A3), not a fifth Don’t. The qualifier at 66 names that Agent Prompt Guide constraint. `Agent Prompt Guide` DESIGN dest **1** at 66. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `DESIGN.md` 312: Only a 1440×900 viewport was supplied. No mobile viewport, breakpoint, layout transition, touch-target policy, or safe-area behavior. Responsive behavior is therefore not specified. Heights as desktop-capture measurements — qualifier at 312 (B2/B2a). |
| §9 Agent Prompt Guide | 삭제 | Tool-facing copy-paste prompt and restatements; the copy-paste prompt has no receiving slot and is not delegated. Unique generation bound moved to Experience Avoid (`DESIGN.md` 72) (A2, A3): `Do not generate` DESIGN dest **1** at 72 · `seller workflow` DESIGN dest **1** at 72 · `status system` DESIGN dest **1** at 72 · `mobile marketplace flow` DESIGN dest **1** at 72 · `Japanese-product design` DESIGN dest **1** at 72 · `from this reference` DESIGN dest **1** at 72 · `the supplied evidence does not establish them` DESIGN dest **1** at 72. Dual with `provenance.md` dest **1** at 153 for the phrases that check quotes. Unique scope bound `For a public US Mercari web concept only` remains at Experience Scope (`DESIGN.md` dest **1** at 17) + `provenance.md` dest **1** at 153. The check is itemised at `provenance.md` 153. |
| §10 Voice & Tone | 옮김 → Content & Locales | Quoted lines `DESIGN.md` 327–329; tone table 321–323. Qualifier at 317 covers the voice reading (B2/B2a, A5). Marketplace-guidelines URL dual: `DESIGN.md` dest **1** at 317 + `provenance.md` dest **3** at 55/66/84 (E2a). |
| §11 Brand Narrative | 옮김 → Experience `scope` | `DESIGN.md` 15: circulating forms of value to unleash people’s potential; diverse, free, safe, trustworthy, and humane; reuse of dormant value and a circular economy; photograph an item, describe it, price it, and choose shipping. Founding dates / expansion history / Japanese app not added — `DESIGN.md` 17. Classing that narrative as not a token source carries an adjacent complete qualifier in the same paragraph (B2/B2a). Also noted as narrative-not-token-source at `provenance.md` 80–86. |
| §12 Principles — 3 numbered | 옮김 → Experience principles | `DESIGN.md` 49–53 under the B2a form at 47: stems rest on Mercari-authored marketplace principles and US guidelines; each *UI implication* is a derived editorial implementation inference and is not Mercari-authored or a separately published UI specification. Mercari publishes no first-party UI design-system documentation in the source, so the toss-form close is used for the implications (rulebook v12 B2a 전제 주석). Derived editorial inventory: `provenance.md` 191–213 (23 data rows). |
| §13 Personas — 2 entries | 삭제 | Fictional archetypes. Not promoted to Audience or to `primary-tasks`, and not re-hosted in the sidecar: no name, age, city, or biography appears in either output (D2, D2a). Disposition at `provenance.md` 149 names field kinds only. Audience at `DESIGN.md` 32 carries only the official buyer/seller group framing the source’s own disclaimer establishes, under an adjacent qualifier. The three `primary-tasks` at 25–27 come from the listing guide and captured listing-image work; 23 says so and qualifies the step. Listing work uses the §1 phrase `items that can be shipped` (DESIGN dest **3** at 9/25/26). The §13 title token `shippable` is not used as a task label (DESIGN dest **0**). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Full source body preserved at `DESIGN.md` 157 (A2; the catalog graph is still 0/440, so nothing is delegated). Applicability rule at 159, whose qualifier covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | 5 interactive controls × 7 states. Destination / skip-link / unnamed-purpose roles close loading / error / success with a role reason (C2 v10). Skip-link `disabled` is `not-applicable` with a skip-to-content role reason at 302. Listing image shell declares no `kind` and no map because the source supplies no interaction evidence — `DESIGN.md` 224 (C4). Generic skip-link `state-focus` is not promoted as a `focus-visible` treatment (B1) at 295. |
| §15 Motion & Easing | 옮김 → Foundations motion | Source promotes no duration, curve, or reduced-motion token. `DESIGN.md` 110 keeps “No Mercari motion duration, easing curve, transition, or reduced-motion treatment was captured… Motion guidance is intentionally absent pending product-surface evidence. No motion token is promoted.” There is no template cubic-bezier to omit (T1-3 제약 5). B3 is held at `DESIGN.md` 112 in full text: five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — the per-component gate, and the partial-confirmation exclusion. `DESIGN.md` 371 names the five kinds and the per-component gate; it does not repeat the partial-confirmation sentence (E2c). |

## Sibling handling (`web/references/mercari/.verification.md`)

The sibling exists — confirmed with `find web/references/mercari -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at `provenance.md` 90–121 and is **not** promoted into `DESIGN.md` as a new fact.
- Forms it carries that the visible source body does not: brand-directory subtitle “All brands available on Mercari”; coverage 95 / variants 31 / interactions 3; font CDN path `https://u-web-assets.mercdn.net/assets/fonts/averta/`; alias visible-use counts 27 and 3; RGB writings; selector `truste-button1`; artifact path `artifacts/reference-evidence/mercari.json`; removed-history hexes `#ff333f` / `#0095ee`. Recorded at `provenance.md` 113–121.
- Measured `DESIGN.md` 0 for those sibling-only strings: `All brands available on Mercari` 0 · `u-web-assets.mercdn.net` 0 · `#ff333f` 0 · `#0095ee` 0 · `truste-button1` 0 · `truste-*` 0.
- Hex values those RGB samples convert to (`#5356ee`, `#222222`, `#ffffff`, `#000000`) are already in the source body and remain there.

## A5 / A5a verification

The gate’s `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. `compared < candidates` is expected, so the A5a hand sweep is mandatory and was run.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| All CJK runs in the source, any length | 0 distinct | 0 | 0 published | Source body is Latin. |
| Published Latin / English strings from the source body | 12 | 0 | 0 | See sub-needles below. |
| Sibling-only published fragments | 1 (`All brands available on Mercari`) | 0 from DESIGN (intentionally) | 0 promoted | Kept as sibling corroboration at `provenance.md` 96/113. |
| latin-copy-audit `truste-*` (medium) | 1 | 0 from DESIGN (intentionally) | 0 published | Selector glob in the sibling, not issued product copy. Kept as `truste-button1` at `provenance.md` 97/118. The glob form `truste-*` is the audit’s quoted fragment of that same sibling sentence. |

Sub-needle labels confirmed present individually in `DESIGN.md`: Keep it neighborly.; Keep it safe.; Just take some photos, add a description, and set the price.; circulating forms of value to unleash people’s potential; diverse, free, safe, trustworthy, and humane; reuse of dormant value and a circular economy; taking photos, adding a description, and setting a price; Averta; Averta PE; Mercari.

A5 분모: CJK hand sweep 0 extracted / 0 missing; published Latin hand sweep 12 extracted / 0 missing. `node test-v2/tools/latin-copy-audit.mjs --brand mercari` reported `candidates: 20`, `lost: 1` (`medium: 1`, text `truste-*`). Disposition of that one, not treated as unrestored published copy, is the sibling-selector row above.

## F1 B2a 스캔 (mandatory pass 1)

`DESIGN.md` was re-read from line 1 after the body was complete. Every causal / interpretive / judgment sentence was classified. Editorial readings carry an adjacent complete qualifier (`derived editorial implementation inference` + `not Mercari-authored or a separately published UI specification`). Official marketplace-principle stems stay Mercari-authored; only the *UI implication* attached to each stem is qualified. F3 expanded two already-qualified lines so the named material matches the paragraph: Semantic color 80 (identity-field ≠ universal filled CTA) and Family 133 (canonical-only-because). Occurrence count unchanged. Measured `grep -o 'derived editorial implementation inference' DESIGN.md | wc -l` = **23**. Provenance inventory data rows = **23** (E1 1:1). The same 23 lines also carry `not Mercari-authored` and `separately published UI specification`. Hex role splits are ledgered after the inventory (not a 24th qualifier).

No additional unqualified judgment sentence was left adjacent-less after this scan.

## F2 E2 대조 (mandatory pass 2)

Each log row’s destination was grepped before writing, then remeasured after the F3 body/ledger edits (wave 40). Dual destinations (homepage, `#5356ee`, github slug, official-doc URLs, capture selectors) name both files. Compliance claims:

- "B3 유지" only because Foundations Motion `DESIGN.md` 112 contains the five evidence kinds and the per-component computed-observation gate in full, plus the partial-confirmation exclusion. `transition properties` DESIGN dest **2** at 112/371.
- "B2a 23=23" only because DESIGN dest **23** = provenance Derived editorial inventory **23** data rows (`provenance.md` 191–213). Family row 205 and Scope ¶2 row 191 name the expanded judgments. Hex role splits sit after the inventory and are not a 24th qualifier. The previous header `| Portable location | Qualified material |` was a counted 24th row; it is not a data site.
- "D2 삭제" only because persona identifiers are DESIGN 0 / provenance 0; the omission row uses the unidentifying form `§13 Personas — two entries` (D2a) and does not re-host role-need biographies (E2d: this log names the count and field kinds, not the identifiers). `shippable` DESIGN dest **0**. `items that can be shipped` DESIGN dest **3** at 9/25/26. `short, ordered path` / `accurate item information` / `browsing behavior` DESIGN dest **0**.
- Catalog homepage without path is DESIGN dest **1** at 9, not 17 (17 is the listing-guide URL). `#5356ee` DESIGN dest **10** at 9/13/39/60/82/231/264/265/272/284 + provenance dest **5** at 14/123/141/153/220.

## Unique-expression losslessness check (wave-43 follow-up)

Source §-by-§ unique strings (years, proper names, quotations, (a) §11/§1 connective sentences, (b) value modifiers, (c) §15/§5/§7/§8 constraint sentences) were extracted and counted with `grep -oF -- '<expr>' DESIGN.md | wc -l`.

- Extracted unique expressions: 118.
- Counted 0, then restored: 14 — (1) `it is not a standard primary action`, (2) YAML `type: button`, (3) YAML `type: card`, (4) YAML font `14px/600 Averta`, (5) YAML font `16px/600 Averta`, (6) `a 32px-high public marketplace-home action only`, (7) `a 32px-high corporate-marketing action only`, (8) `a 40px-high public-home icon control`, (9) `a 22px-high corporate-marketing header control`, (10) `a 44px-high public-route accessibility control`, (11) `the image element of the anonymous public-home listing cards`, (12) `For a public US Mercari web concept only`, (13) official-doc URLs (listing guide, marketplace principles, marketplace guidelines, Foundry5, EULA) restored into the portable body as dual destinations, (14) `Do not generate a mobile marketplace flow, checkout, payment, seller workflow, status system, or Japanese-product design from this reference` — Experience Avoid 72 (A3).
- Left unrestored on purpose: sibling-only strings (`All brands available on Mercari`, `#ff333f`, `#0095ee`, `u-web-assets.mercdn.net`, `truste-*`) — not in the visible source body; kept in provenance and not promoted (B1). §13 archetype sentences — fictional, dropped (D2, D2a). YAML metadata `tokens.source` / `components_harvested` / `consumer-tech` — provenance only (A1c).

Result line: unique-expression check extracted=118 missing-then-restored=14 unrestored-on-purpose=sibling-only+§13+YAML-metadata.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand mercari --gate-only` → `verdict: PASS`, `problems: []`, copy-loss `compared: 0` / `candidates: 109`. Separately, `scripts/design-md-core.cjs` `inspectDesignMd` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 0 < `candidates` 109.

## Deviations recorded

- No unsourced easing curve was present to omit (T1-3 제약 5). Duration / signature-motion were not deleted. B3 full text at `DESIGN.md` 112.
- §13 two fictional archetypes omitted (D2, D2a). Audience keeps only the source’s own official buyer/seller group framing.
- Sibling-only measurements and removed-history hexes not promoted (B1).
- No invented out-of-scope domain (`native-client` / `parity` DESIGN 0). Named unresolved decisions list only values the source already opened (D1, D1a).
- `Primitive type` / YAML `type:` attached only to the YAML component that holds that type. Circular icon action and header text action have no YAML primitive type; none is invented. Listing image shell keeps YAML `type: card` and omits kind/map (C4).

## Wave 45 E1 — derived-editorial ledger 24→23

Checker counted provenance 24 vs DESIGN complete sites 23. Each ledger data row was matched to a body line that carries all three complete-form fragments (`derived editorial implementation inference` + `not Mercari-authored` + `separately published`). Heading renamed to `## Derived editorial inventory` (provenance dest 1 at 185). Header set to `| Location in DESIGN.md | Qualified reading |` so it is skipped. Old heading dest 0. DESIGN.md body not edited. Data rows kept 23 at provenance 191–213. Hex role splits remain after the table and are not a 24th qualifier.

| Ledger row (provenance) | Body complete site | Verdict |
|---|---|---|
| 191 Experience — Scope ¶2 | DESIGN 11 | KEEP — three fragments on the same line |
| 192 Experience — Scope ¶3 | DESIGN 13 | KEEP |
| 193 Experience — Scope ¶4 | DESIGN 15 | KEEP |
| 194 Experience — Primary tasks | DESIGN 23 | KEEP |
| 195 Experience — Audience | DESIGN 32 | KEEP |
| 196 Experience — Distinctive traits | DESIGN 36 | KEEP |
| 197 Experience — Principles | DESIGN 47 | KEEP |
| 198 Experience — Application rules | DESIGN 57 | KEEP |
| 199 Experience — Avoid | DESIGN 66 | KEEP |
| 200 Foundations — Semantic color | DESIGN 80 | KEEP |
| 201 Foundations — Spacing | DESIGN 91 | KEEP |
| 202 Foundations — Shape | DESIGN 102 | KEEP |
| 203 Foundations — Elevation | DESIGN 106 | KEEP |
| 204 Typography — Font evidence / Outside these captures | DESIGN 127 | KEEP |
| 205 Typography — Family | DESIGN 133 | KEEP |
| 206 Typography — Type roles | DESIGN 143 | KEEP |
| 207 Typography — Assets / logo | DESIGN 149 | KEEP |
| 208 Typography — Assets / Foundry5 | DESIGN 150 | KEEP |
| 209 Components — Capture record | DESIGN 159 | KEEP |
| 210 Layout & Platforms | DESIGN 312 | KEEP |
| 211 Content & Locales (voice / tone table) | DESIGN 317 | KEEP |
| 212 Content & Locales (quoted-line bound) | DESIGN 331 | KEEP |
| 213 Governance — Recorded unresolved decisions | DESIGN 365 | KEEP |
| former header `Portable location` | (none) | NOT A SITE — first cell was not a skipped header token, so the checker counted it as row 24. Header rewritten; no data row merged or deleted; no body limiter added |

Remeasured: phrase-1 DESIGN dest 23 at 11/13/15/23/32/36/47/57/66/80/91/102/106/127/133/143/149/150/159/312/317/331/365. `not Mercari-authored` DESIGN dest 23 (same lines). `separately published UI specification` DESIGN dest 23 (same lines). `node scripts/check-limiter-ledger.mjs mercari` → 본문 23 = 원장 23. `--gate-only` PASS.

## Wave 45 개정 — A3 Avoid 복원 · D2 shippable 제거

Independent review FAIL 2. Portable body gained one Avoid bullet (DESIGN 72); later dest line numbers shifted +1 from old 72. Token values, component tables, and state applicability were not edited. Limiter count stays 23=23.

- A3/A2: unique §9 generation bound restored as Experience Avoid 72. Qualifier 66 names the Agent Prompt Guide source of that fifth prohibition. Provenance §9 check 153 now points at Avoid, not at a bound that was not there.
- D2: Primary tasks 25 uses the §1 phrase `items that can be shipped`. `shippable` DESIGN dest **0**.

Dest remasure (`grep -oF -e '<pattern>' <file> | wc -l`): `seller workflow` DESIGN **1** at 72 / provenance **1** at 153 · `status system` DESIGN **1** at 72 / provenance **1** at 153 · `mobile marketplace flow` DESIGN **1** at 72 / provenance **1** at 153 · `Japanese-product design` DESIGN **1** at 72 / provenance **1** at 153 · `Do not generate` DESIGN **1** at 72 / provenance **1** at 153 · `from this reference` DESIGN **1** at 72 / provenance **1** at 153 · `the supplied evidence does not establish them` DESIGN **1** at 72 / provenance **1** at 153 · `shippable` DESIGN **0** · `items that can be shipped` DESIGN **3** at 9/25/26 · `Agent Prompt Guide` DESIGN **1** at 66 · `For a public US Mercari web concept only` DESIGN **1** at 17 / provenance **1** at 153 · `#5356ee` DESIGN dest **10** at 9/13/39/60/82/231/264/265/272/284.

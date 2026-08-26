# Gangnamunni migration log

Source: `web/references/gangnamunni/DESIGN.md` (unmodified)
Destination: `docs/design-md-weight/migrated/gangnamunni/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/gangnamunni/provenance.md`
Rulebook version: **v11** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-08-26

Every row below was checked by grepping the three output files before it was written; line numbers are grep results taken after the final edit, not recollection (F2). Bare numbers are `DESIGN.md` lines; provenance lines are marked `prov`. Counts are `grep -oF … | wc -l`, per file.

## Frontmatter

| Legacy | Disposition | Destination / reason |
|---|---|---|
| `id`, `country`, `category`, `verified`, `omd: "0.1"` | 분리 → provenance | Identity table (prov 7–21) and Freshness (prov 55–61). The portable body has no frontmatter. `consumer-tech` counts 0 in `DESIGN.md`, 2 in provenance. |
| `name: 강남언니` | 옮김 → H1 + Experience Scope + Content Terminology · 분리 → provenance | Byte-exact Korean at line 1, line 9, and line 235; also prov 10. Counted: 5 in `DESIGN.md` (three of them inside `Gangnamunni (강남언니)`), 6 in provenance. |
| `display_name_kr: Gangnamunni (강남언니)` | 옮김 → H1 + Scope + Terminology · 분리 → provenance | Byte-exact at lines 1, 9, 235 and prov 11. The Latin form sits beside the Korean name and never replaces it (A5). Counted: 3 in `DESIGN.md`, 3 in provenance. |
| `homepage` | 옮김 → Experience Scope · 분리 → provenance | Line 11 names the two read routes; prov 14 carries the bare homepage. Counted on the bare prefix: 2 in `DESIGN.md`, 11 in provenance. |
| `primary_color: "#d54300"` | 분리 → provenance only | prov 15. The portable body carries the constraint (line 83, "no orange value is offered as a reusable UI token") and deliberately not the hex — `grep -oF '#d54300' DESIGN.md \| wc -l` = **0**, provenance = 4. This is the source's own rule, not a new one. |
| `logo.type: favicon` / `logo.slug` | 분리 → provenance | prov 16. Line 137 records that a favicon logo entry exists and states the URL stays in the ledger. `favicon` counts 1 in `DESIGN.md` (the word, no URL), 4 in provenance. |
| `ds.name` / `ds.url` / `ds.type: brand` / `ds.description` | 분리 → provenance | prov 25–30, with the A1c note at prov 32 explaining why `ds.type: brand` is kept as a value. The two names inside `ds.description`, `Cell` and `Welchis`, also stand in the portable body — 14 and 15 occurrences in `DESIGN.md` — so those two carry two destinations (E2a). The description sentence itself is 0 in `DESIGN.md`, 1 in provenance. |
| `verification_v2.schema` / `.checked` / `.surfaces` / `.sources` / `.conflicts` | 분리 → provenance | Freshness (prov 55–63), Surfaces (prov 67–71), Sources (prov 75–81). `verification_v2` counts 0 in `DESIGN.md`, 3 in provenance. |
| `verification_v2.claims` (37 dotted paths, 5 YAML anchors) | 분리 → provenance | Claim ledger (prov 85–137), each path written out in full rather than compressed (prov 97–133), and the five anchors with their `computed-style` method and selectors at prov 89–93. Dotted paths and DOM selectors are collector metadata: `grep -cE 'tokens\.(colors\|typography\|spacing\|rounded\|components)' DESIGN.md` = **0**, `data-omd-capture` 0 in `DESIGN.md` / 11 in provenance, `home::` 0 / 13. |
| `tokens.source: reconciled`, `tokens.extracted` | 분리 → provenance | prov 19–20 and Freshness. `reconciled` counts 0 in `DESIGN.md`, 3 in provenance (A1c — a verification-ledger field is a value). |
| `tokens.note` | 분리 → provenance (verbatim) · 내용은 옮김 → Foundations | Quoted verbatim at prov 36. Both clauses reach the body at line 83: "Only current computed consumer-product values are tokens here." and the catalog-identity-metadata sentence. Two destinations recorded (E2a). |
| `tokens.colors` (5 values) | 옮김 → Foundations Semantic color (lines 77–81) · Experience Scope + Distinctive traits (lines 15, 36) · 분리 → provenance claim ledger (prov 97–101) | Each hex kept with its role name and the element it was read from. |
| `tokens.typography.family.sans: PretendardVariable` | 옮김 → Typography & Assets (lines 114, 122) + Distinctive traits (line 37) | `PretendardVariable` counts 11 in `DESIGN.md`. |
| `tokens.typography.body` / `.label` / `.title` metrics | 옮김 → Typography & Assets Type roles (lines 131–133) | 16px/400/24px, 14px/500/19.6px, 20px/700/28px. All three legacy line heights are px strings, not unitless ratios, so nothing was converted (A1a); the gate's ratio check has no candidate here. |
| `tokens.spacing.sm: 8` / `.md: 12` | 옮김 → Foundations Spacing (line 87) · Layout (line 214) | Named steps 8px and 12px, with the two captured paddings that contain them. Both destinations recorded (E2a). |
| `tokens.rounded.cta: 6` / `.card: 20` / `.full: 9999` | 옮김 → Foundations Shape (lines 91–93) · Components (lines 163, 185, 206) · Layout (line 214) | Each radius kept with the component it belongs to. |
| `components_harvested: true` | 분리 → provenance | prov 21 and Proof notes (A1c). Counts 0 in `DESIGN.md`, 4 in provenance; the portable Capture record states the same fact as prose at line 144. |
| `tokens.components.outline-cta` (8 fields, incl. `type: button`) | 옮김 → Components & States (lines 156–176) · `.states` / `.use` / `.border` byte forms 분리 → provenance verbatim table (prov 145–153) | `Type: button` survives per component — 2 occurrences in `DESIGN.md` (A1b). `.use` is byte-exact as the Role line (line 158), so it carries two destinations. `.border` byte form `1px solid #b5bfc9` is contiguous at line 162 and at prov 149 (A1a). |
| `tokens.components.filter-chip` (9 fields, incl. `type: button`) | 옮김 → Components & States (lines 178–199) · `.states` / `.use` byte forms 분리 → provenance (prov 147, 148) | `.use` byte-exact as the Role line (line 180), two destinations. The 78-character `.states` string is reproduced verbatim at prov 147 because the body restates it in its own words. |

## Body sections

| Legacy | Disposition | Destination / reason |
|---|---|---|
| H1 `# Design System Inspiration of Gangnamunni (강남언니)` | 옮김 → H1 (line 1) | Rewritten to the Core v2 form `# Gangnamunni (강남언니) Design System`. The identity string is preserved byte-exact inside it; only the surrounding "Design System Inspiration of" wrapper changes, which Core v2 §3 fixes. |
| §1 Visual Theme & Atmosphere — product description | 옮김 → Experience Scope (line 9) | The service description with its evidence class stated adjacently: widely documented public knowledge about the service rather than a quoted Gangnamunni statement (B2a). |
| §1 — Cell/Welchis platform split, mission, customer perspective | 옮김 → Experience Scope (line 13) · Layout (line 216) · Terminology (line 236) | Kept as the official team's published statements. The transfer rule drawn from them is qualified at line 216. |
| §1 — interpretive framing ("puts this research task ahead of ornamental branding", "scanned quickly", "confidence in a choice", "connects that confidence to clear, understandable information", "must not be blended") | 옮김 → Experience Scope (lines 15, 17) | Values at line 15; every one of those five readings named inside the adjacent qualification at line 17 as a derived editorial implementation inference, not Gangnamunni-authored (B2a). |
| §1 Key Characteristics (4 bullets) | 옮김 → Experience Distinctive traits (lines 36–39) | Values verbatim; the characterizing word *compact* and the evidence-domain reading qualified adjacently at line 41 (B2a). |
| §2 Color Palette & Roles (5 entries) | 옮김 → Foundations Semantic color (lines 77–81) | Role, value, and captured element preserved. Line 75 separates the observations from this contract's role naming. |
| §2 catalog-identity-orange note | 옮김 → Foundations (line 83) | Kept as the constraint that prevents the hex from becoming a token. |
| §3 Typography table (3 roles) | 옮김 → Typography & Assets Type roles (lines 131–133) | Metrics and the source's own Evidence column preserved. |
| §3 Evidence-class table (6 rows) | 옮김 → Typography & Assets Font evidence (lines 113–118) | All six rows kept with their status text. The `**Unresolved**` row **label** was expanded to `**Unresolved evidence class**`; the row's value text is untouched. Reason: the Core conformance checker reads a bare `UNRESOLVED` cell as a prescriptive placeholder. The defect is the bare token acting as a placeholder, and naming the class fixes it — the same correction acer, apple, dabang and kakao took. No value was reworded to satisfy a checker (E3). |
| §3 Pretendard licence and upstream project | 옮김 → Font evidence (line 115) · 분리 → provenance | SIL Open Font License 1.1 kept in the body with the "not a Gangnamunni distribution claim" boundary; the LICENSE URL is at prov 81. |
| §4 Outline CTA (5 values + Pressed + Use) | 옮김 → Components & States (lines 156–176) | Anatomy, geometry, the pressed capture with no changed value, and the same-fingerprint note. Selector moved to provenance. |
| §4 Procedure filter (6 values + Selected + Use) | 옮김 → Components & States (lines 178–199) | Including the selected-true DOM variant with its `#131517` background and `#ffffff` text. Selector moved to provenance. |
| §4 Media card action (4 values + Use) | 옮김 → Components & States (lines 201–209) | Values kept; the 303px context note at line 208. No `kind` and no applicability map, because the source assigns this record no `type` and no other interactive-kind evidence (C4). |
| Mid-file footer — **Verified** / Tier 1 / Tier 2 / Surface split / Conflicts | 분리 → provenance | Transcribed at prov 167–179. The Tier 2 line is quoted whole, including `https://styles.refero.design/?q=%EA%B0%95%EB%82%A8%EC%96%B8%EB%8B%88`; that percent-encoded URL is the only place the source's `95%`, `82%` and `96%` token strings occur, so the transcription is what keeps them from being a token loss. The **Surface split** sentence also reaches the body at line 216, so it carries two destinations (E2a). |
| §5 Layout Principles (3 bullets) | 옮김 → Layout & Platforms (lines 214, 216) | Retained geometry list and the Cell/Welchis separation rule, the latter qualified adjacently at line 216 (B2a). |
| §6 Depth & Elevation | 옮김 → Foundations Elevation (line 97) | `box-shadow: none` with the source's own "those components only" boundary. |
| §7 Do's (4) | 옮김 → Experience Application rules (lines 55–58) | Qualified at line 53. Not folded into the controlled Governance copy. |
| §7 Don'ts (4) | 옮김 → Experience Avoid (lines 64–67) | Qualified at line 62. `Don't invent hover, focus, disabled, error, toast, or changed pressed values.` byte-exact at line 66. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms (line 218) | The whole statement, including "Treat responsive behavior as unresolved". No breakpoint, minimum width, or reflow percentage was introduced. |
| §9 Agent Prompt Guide | 삭제 | A copy-paste construction prompt with no receiving slot. Before writing this row, every token value and every quoted string inside §9 was extracted and diffed against the rest of the source: **0** token values and **0** quoted strings occur only there. Its one constraint sentence ("Do not add an unobserved primary-orange CTA, shadows, or interaction states") is carried in substance by §7 Don'ts (orange promotion, invented interaction values) at lines 64 and 66 and by §6 (no global shadow contract) at line 97. Deletion, not delegation to a skill or adapter (A3). |
| §10 Voice & Tone — guideline principles and the exclamation-mark permission | 옮김 → Content & Locales (line 223) | Attributed to the official UI-text guideline. |
| §10 Apply / Avoid table (3 rows) | 옮김 → Content & Locales (lines 227–229) | Rows verbatim; the restatement's evidence class qualified adjacently at line 231 (B2a). |
| §10 "the earlier legacy claim banning exclamation marks has been removed" | 분리 → provenance | prov 191–193. It is a note about this catalog record's own revision history, not about product behavior, and a standalone reader has no earlier revision to compare against. The rule it protects is stated positively at line 223. Recorded here as a separation with its reason, not as a deletion. |
| §11 Brand Narrative | 옮김 → Experience Scope (lines 9, 13) | Confidence-in-choice framing (qualified at line 17), the mission and customer-perspective statements, and the Cell/Welchis platform reason, all attributed to the official design writing. |
| §12 Principles (3, with UI implications) | 옮김 → Experience Principles (lines 47–49) | Qualified at line 45, which distinguishes the guideline-published headlines from the derived UI implications (B2a). |
| §13 Personas | 옮김 → Experience Audience (line 32) · `[FILL IN]` 분리 → provenance omission ledger | No named synthetic personas exist in the source, none was created, and none is re-hosted in the sidecar (D2). The two substantiated groups are at line 32. The placeholder's instruction sentence is recorded at prov 187 and its subject is named without a value in Named gaps (line 277). |
| §14 States | 옮김 → Components & States (lines 144–154) · `[FILL IN]` 분리 → provenance | The §14 sentence is preserved in full at line 152 (A2); the marker itself is dropped and recorded at prov 188. Per-component §4.4 applicability is closed at lines 168–176 and 191–199 by control meaning, never by capture completeness. |
| §15 Motion & Easing | 옮김 → Foundations Motion (lines 101–103) · `[FILL IN]` 분리 → provenance | The §15 sentence is preserved at line 101; the marker is dropped and recorded at prov 189. The source states no curve, so there was no unattributed curve to remove. Line 103 states the B3 promotion gate in full — this row claims only what line 103 actually contains (E2c): transition properties, animation name, duration, easing, reduced-motion behavior, the per-component computed-observation gate, and the clause that a single named curve or duration is not that gate. |
| Governance controlled copy (authority / priority / unknowns / changes) | 신설 → Governance (lines 241–266) | Core v2 controlled `en` copy, byte-identical to `spec/design-md-core-v2.md`. `kind=evidence-backed-reconstruction`, because this record reconstructs another company's system from live captures and official articles. No brand-specific rule was placed inside the controlled copy. |
| Named gaps | 신설 → Governance (lines 272–278) | Seven rows, each naming an unresolved subject the source itself establishes: §7/§14 state treatments, §14's contract sentence, §15 motion, §8 responsive, §3's own Unresolved row, §13's placeholder subject, and §2's orange constraint. No domain the source never establishes is enumerated (D1a). |

## Sibling file (E2 / B1)

`web/references/gangnamunni/.verification.md` **exists** — confirmed with `find web/references/gangnamunni/ -type f`, not with `ls` or a `*` glob, since a dotfile is invisible to both. **It was not adopted.** No value, count, DOM selector, structural classification, or published string was taken from it into any output unless it independently stands in the source `DESIGN.md`.

Twelve sibling-only items are named as not adopted at prov 203–214 so the non-adoption is visible rather than silent. Each appears once in that table and nowhere in `DESIGN.md`. The four that mattered most, because a value gate would never have caught them:

| Sibling-only item | What adopting it would have asserted | Status |
|---|---|---|
| `surface-2::[data-omd-capture="4"]` outline chip — `#697683` text, 1px `#b5bfc9` border, 32px, 9999px, `0px 10px` | A fifth component the source never declares. Every one of its values already exists in the source under other components, so the token gate would have stayed green either way | Not declared; named at prov 204 |
| `13px/400 · 20px line-height` on the events tertiary label | A fourth type role beyond the source's three-role table | Not added; named at prov 205 |
| "no separate public marketing page was retained" | A marketing evidence domain the source never establishes (D1a) | Not written; named at prov 210 |
| "dialog" in the uncaptured-state list, and "official documentation chrome" as a structural classification | A state name and a surface classification in sibling wording rather than the source's. The body's uncaptured-state list at line 144 uses the source's own §7 list — hover, focus, disabled, error, toast, changed pressed — with no `dialog`; the documentation-context boundary comes from the source's **Surface split** footer, transcribed at prov 175 | Not adopted; named at prov 211, 216 |

## State applicability decisions (C2)

Judged by role meaning, not by primitive name and not by capture completeness. Counted in `DESIGN.md`: **11** `| applicable |` rows and **3** `| not-applicable |` rows. `focus-visible` occurs **3** times — one row per declared interactive component plus the policy sentence at line 146 — and no `focus-visible` row carries a treatment value (B1; the source never writes `focus-visible` at all).

| Component | loading / error / success | Reason class |
|---|---|---|
| Outline CTA | applicable | The source types the control `button` and names it a call to action. A CTA commits the action it names, and that action can pend, fail, and confirm. The source does not name the action, so the row states the role and promotes no treatment. |
| Procedure Filter Chip | not-applicable | The chip switches between its two captured appearances, selected-false and selected-true. That switch is the control's whole meaning; it commits no operation of its own that pends, fails, or needs separate confirmation — the selected appearance is itself the result. Semantic reason, never absence of an observation (C1). |
| Home Feature-card Action | map omitted entirely | No `type` and no other interactive-kind evidence, so the kind is not confirmed either way (C4). |

`disabled` stays `applicable` on both declared controls: either can be made unavailable, and only the visual treatment is unresolved.

## A5a — full published-string sweep (manual, because the machine check compared 1 of 91)

`--gate-only` reports `coverage: {check: "copy-loss", compared: 1, candidates: 91}`. The single needle is `강남언니`, the only contiguous non-Latin run in the source, so a green `copy-loss` says nothing about the other 90 quoted strings. The sweep was therefore run by hand over the source **and** the verification sibling.

- **Extracted:** **91** distinct quoted strings from `web/references/gangnamunni/DESIGN.md` and **38** from `web/references/gangnamunni/.verification.md`, using the gate's own quotation shapes (backtick, straight-double, curly-double, CJK bracket, parenthesis pairs, 2–60 chars).
- **Survival measured against `DESIGN.md` ∪ `provenance.md` only** — the two artifacts a consumer receives. A string that appears solely in this log counts as dispositioned, not preserved, so quoting it here cannot make the number look better.
- **Non-surviving after the final edit:** **1 of 91** from the source and **10 of 38** from the sibling.
- **`node test-v2/tools/latin-copy-audit.mjs --brand gangnamunni`** reports 20 candidates, 1 lost, medium confidence: `omd:add-reference`. That is the sibling's pipeline name, which A5a excludes from the needle set — a candidate, not a verdict. Confirmed against the classification above rather than accepted or dismissed on the tool's word.
- **Brand-published strings among the non-survivors: 0.** The published set in this source is small and entirely present: `강남언니` (5 occurrences in `DESIGN.md`), `Gangnamunni (강남언니)` (3), `Cell` (14), `Welchis` (15), and `Gangnamunni Blog` (prov 27). This source quotes **no** UI label, CTA text, error string, or slogan for any component — the collector recorded geometry and color only — so there is no published microcopy to lose. That absence is itself recorded at line 231.
- **Non-surviving in the first draft: 23 of 91. Restored: 22.** Twenty-one were `tokens.typography.*` and `tokens.components.*` claim paths that the first draft had compressed into slashed groups (`…body.size` / `.weight` / `.lineHeight`), which destroys the full path string; the claim ledger now writes all 37 out in full (prov 97–133). The twenty-second was `1px solid #b5bfc9`: the body had split it as ``1px solid `#b5bfc9` ``, breaking the byte run. It is now contiguous at line 162 and also at prov 149 (A1a).
- **Byte-equality repairs found by the E2 count pass, not by the sweep: 2.** Both component `use:` strings survived in provenance but were lowercased in the portable Role lines (`current small outline CTA…`), so the log's two-destination claim would have been false at byte level. Both Role lines now carry the source's capitalization at lines 158 and 180, and each measures `DESIGN.md` = 1.
- **Dispositioned, not restored: 1 (source).** `, use:` is an extractor artifact: the filter-chip `states` value is 78 characters, so the 2–60 char quotation branch skipped it and instead matched from that value's closing quote to the next opening quote. It is not a published or source-authored string, and the skipped `states` value itself is preserved verbatim at prov 147.
- **Dispositioned, not restored: 10 (sibling).** None is a brand-published string, and none is adopted: `omd:add-reference` (pipeline name), `artifacts/reference-evidence/gangnamunni.json` (raw-bundle path, named at prov 212), `supplied; no browser recapture run` and `current retained observation` (the sibling's own method wording and a table column header), `@font-face` (a CSS at-rule), and the six `rgb(…)` forms of hexes the outputs already carry in hex notation, named as an alternate notation at prov 209.
- **Final state:** 90/91 source quotations present in `DESIGN.md` or `provenance.md`; the single remainder is the extractor artifact above. Sibling quotations are deliberately at 28/38, because adopting the other ten would be the B1 defect, not a fix.

## Checks run

| Check | Result |
|---|---|
| `node test-v2/tools/migrate-reference.mjs --brand gangnamunni --gate-only` | `PASS`, problems 0; `coverage.copy-loss` `compared: 1 / candidates: 91` |
| `inspectDesignMd` on the migrated `DESIGN.md` | `level: portable-core`, `portable_core: true`, failed checks 0, reasons 0 |
| Token bag diff (hex / px / rem / ms / pct), legacy → three outputs | loss 0, invention 0 in the portable body |
| Unitless line-height survival (A1a) | no candidate — all three legacy line heights are px strings, carried as px |
| Primitive type survival (A1b) | `type: button` ×2 in the source → `Type: button` ×2 in `DESIGN.md` |
| §9 uniqueness diff before deletion (A3) | 0 token values and 0 quoted strings occur only in §9 |
| A5a hand sweep (source + sibling), measured against `DESIGN.md` ∪ `provenance.md` | 91 + 38 extracted; 1 + 10 non-surviving; 0 brand-published strings lost |
| `node test-v2/tools/latin-copy-audit.mjs --brand gangnamunni` | 20 candidates, 1 flagged (`omd:add-reference`) — a sibling pipeline name, excluded from the needle set by A5a |
| Placeholder emission | `[FILL IN` 0 in `DESIGN.md`; the source's three bare `[FILL IN]` markers ledgered at prov 183–189 |

Gate PASS is recorded here as a fact about the run, not as evidence of fitness: this gate has previously passed A5 losses, narrow ledgers, false log destinations, and B1 classification promotions. The 22 A5a restorations, the two byte-equality repairs, the sibling non-adoption list, and the `#d54300` ledger-only decision above were all settled by reading, under a green gate — the gate reported `PASS` before and after every one of them.

DONE migrated=1

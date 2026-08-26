# FriendliAI migration log

Source: `web/references/friendliai/DESIGN.md` (unmodified)
Destination: `docs/design-md-weight/migrated/friendliai/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/friendliai/provenance.md`
Rulebook version: **v10** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-08-26

Every row below was checked by grepping the three output files before it was written; the line numbers are the grep results, not recollection. Bare numbers are DESIGN.md lines; provenance lines are marked `prov`.

## Frontmatter

| Legacy | Disposition | Destination / reason |
|---|---|---|
| `id`, `country`, `category`, `homepage`, `added`, `verified`, `omd: "0.1"` | 분리 → provenance | provenance Identity (prov 7–21) and Freshness (prov 27–34). The portable file carries no frontmatter and no source URL: `friendli.ai` appears 7× in provenance and 0× in DESIGN.md. |
| `name: FriendliAI` | 옮김 → DESIGN.md H1 · 분리 → provenance | H1 `# FriendliAI Design System` (line 1) and provenance Identity (prov 9). |
| `display_name_kr: 프렌들리에이아이` | 옮김 → Experience Scope + Content Locale · 분리 → provenance | Byte-exact Korean at lines 9 and 453, with the Latin name alongside rather than replacing it (A5); also prov 11. Counted: 2 in DESIGN.md, 1 in provenance. |
| `primary_color: "#2a62db"` | 옮김 → Foundations · 분리 → provenance | Semantic color `Friendli Blue` (line 89) and provenance Identity + claim ledger. |
| `logo.type: favicon` / `logo.slug` | 분리 → provenance | prov 16, with the reason at prov 23: the slug is a third-party favicon-proxy URL, not a FriendliAI-published asset, so it is not presented as a brand asset in the body. `favicon` count: 0 in DESIGN.md, 3 in provenance. |
| `tokens.source: live-extract`, `tokens.extracted` | 분리 → provenance | prov Identity + Freshness. `live-extract` count: 0 in DESIGN.md, 1 in provenance. |
| `tokens.note` | 분리 → provenance | Quoted verbatim at prov 25. Its four values (`#2a62db`, `#2453ba`, `#0a101a`, `#f7f8fa`) and the 530 / 650 weight pair all stand independently in the body. |
| `tokens.colors` (15 values) | 옮김 → Foundations Semantic color (lines 89–104) · 분리 → provenance claim ledger | Every hex kept with its role name and use, in both destinations. `#e5ebf2` (hairline-soft) is at line 103, its only role statement anywhere in the source. |
| `tokens.typography.family.sans: Saans` | 옮김 → Typography & Assets Family (line 174) · 분리 → provenance claim ledger | Kept with the `SaansLocalFont` serving detail from §3 (2× in DESIGN.md, 2× in provenance). |
| `tokens.typography.*` role metrics (7 roles) | 옮김 → Typography & Assets Type roles (table lines 182–188) | Sizes, weights, and the unitless line heights `1.10` / `1.20` / `1.30` / `1.40` / `1.55` preserved as ratios rather than converted to px (A1a), each verified present. The rem equivalents from §3 sit in the same cells. |
| `tokens.spacing` (7 named steps) | 옮김 → Foundations Spacing (line 108) · Layout (line 397) | Named steps `xs`…`section` in Foundations; the §5 scale, including the 30px that only §5 records, in Layout. Both destinations carry it. |
| `tokens.rounded` (5 steps) | 옮김 → Foundations Shape (lines 112–116) | Named steps merged with the §5 usage notes. The out-of-scale 5px card radius is called out at line 118. |
| `tokens.shadow.elevated` / `.none` | 옮김 → Foundations Elevation (table lines 124–127, token line 129) | Both tokens named at line 129; `elevated` also appears on the Elevated Spotlight Card (line 366). |
| `tokens.components.*` (8 records, each with a `type:`) | 옮김 → Components & States (lines 225–390) | One entry per record. Each `type:` survives verbatim as a `Type:` field — counted in DESIGN.md: `Type: button` 2, `Type: card` 2, `Type: badge` 2, `Type: input` 1, `Type: tab` 1 (A1b). |
| `nav-link.active: "text #2453ba"` | 옮김 → Components Top Navigation Item (lines 332 and 344) | Recorded as the observed `active` state, the record's only interaction expansion. |
| `components_harvested: true` | 분리 → provenance | prov 21 (A1c — a verification-ledger field is a value). Count: 0 in DESIGN.md, 1 in provenance. |

## Body sections

| Legacy | Disposition | Destination / reason |
|---|---|---|
| §1 Visual Theme & Atmosphere — identity, canvas/ink/blue description | 옮김 → Experience Scope (lines 9–11) | Product scope, the two captured surfaces, and the observed interface layer. |
| §1 interpretive framing ("technical, exact, quietly confident", "engineered rather than decorated") | 옮김 → Experience Scope (line 15) + Distinctive traits (line 44) | Kept as a derived editorial implementation inference with the adjacent qualification, not as a FriendliAI statement (B2a). |
| §1 Key Characteristics (8 bullets) | 옮김 → Experience Distinctive traits (lines 35–42) | Values verbatim; the characterizing adjectives qualified adjacently at line 44. |
| §2 Color Palette & Roles (4 groups, 15 entries) | 옮김 → Foundations Semantic color (lines 89–104) | All values and role prose. Line 87 separates the observed uses from the editorial role naming rather than qualifying both alike. |
| §3 Font Family and serving detail | 옮김 → Typography & Assets Family (lines 174–176) | `Saans` served as `SaansLocalFont` with a local fallback; the one-family observation kept as an observation. |
| §3 Hierarchy table (7 roles) | 옮김 → Typography & Assets Type roles (table lines 182–188) | Includes `24.8px` for the 1.55 body line height (1× in DESIGN.md, 2× in provenance). |
| §3 Principles (4 items) | 옮김 → Typography & Assets (line 190) | Condensed into one paragraph and qualified there as a derived editorial reading. |
| §4 Buttons — Get Started / Talk to an Engineer / Log in | 옮김 → Components (lines 225, 250, 275) | The Log in (Quiet) control exists only in §4 prose, never in frontmatter; its five values are in the body and its origin is noted at prov 110. |
| §4 Search (Pill), Feature Card, Elevated Spotlight Card, Topic Tag Pill, HIGHLIGHTS Badge, Navigation | 옮김 → Components (lines 298, 346, 358, 368, 380, 322) | Anatomy, geometry, and labels preserved. Nav item labels `Product`…`Pricing` are byte-exact at line 331 and again at line 25 as a primary task (A5). |
| §5 Spacing System, Grid & Container | 옮김 → Layout & Platforms (line 397) | Scale, hero column, feature grid, announcement banner, dark sections. |
| §5 Whitespace Philosophy | 옮김 → Layout & Platforms (line 399) | Qualified adjacently as a derived editorial reading (B2a). |
| §5 Border Radius Scale | 옮김 → Foundations Shape (lines 112–116) | Merged with `tokens.rounded`: same meaning, same authority, so merged rather than restated twice. |
| §6 Depth & Elevation table + Shadow Philosophy | 옮김 → Foundations Elevation (table lines 124–127, qualification line 131) | The four levels verbatim; the philosophy paragraph qualified adjacently at line 131. |
| §7 Do's (8 rules) | 옮김 → Experience Application rules (lines 60–67) | Qualified at line 58. Deliberately not folded into the controlled Governance copy. |
| §7 Don'ts (7 rules) | 옮김 → Experience Avoid (lines 73–79) | Qualified at line 71. |
| §8 Breakpoints, Touch Targets, Collapsing Strategy | 옮김 → Layout & Platforms (lines 403–419) | Qualified at line 403 as derived, because the inspections behind every value in this contract were single-viewport. |
| §8 Image Behavior | 옮김 → Typography & Assets Assets (line 194) · Layout (line 415) | The diagram-in-card rule is an asset rule and landed in Assets; the "32px radius across breakpoints" half is a responsive claim and sits under the Layout qualification instead. Both destinations recorded. |
| §9 Quick Color Reference | 삭제 | A prompt-form restatement of §2. All 15 hexes were grepped against DESIGN.md before this row was written; every one is present in Foundations, so nothing unique was lost. |
| §9 Example Component Prompts — Feature Card `Title in #0a101a, body in #6e7a84`; `Right-aligned` primary button | 옮김 → Components (line 356) + Layout (line 397) | The only two values that existed nowhere but §9, so they were moved rather than deleted (A3). Also recorded at prov 110 and prov 125. |
| §9 Example Component Prompts — remainder, and §9 Iteration Guide | 삭제 | Tool-facing prompt wrappers and a restatement of rules already carried by Foundations, Components, and Experience. No delegation to a skill or adapter. |
| §10 Voice & Tone prose + tone table | 옮김 → Content & Locales (lines 437–445) | The register reading is qualified at line 437, which names the table explicitly so the rows fall inside the qualification. |
| §10 Voice samples (4, verbatim) | 옮김 → Content & Locales Voice samples (lines 428–431) · 분리 → provenance | Byte-exact (A5), and quoted again in the provenance raw live-inspect record and claim ledger. The per-sample verification dates went to provenance Freshness only. |
| §10 Forbidden register | 옮김 → Content & Locales (line 449) | `revolutionary`, `game-changing`, and `Request a demo` byte-exact, under an adjacent qualification because the exclusion list is the record's editorial rule. |
| §11 Brand Narrative — product thesis and structure | 옮김 → Experience Scope (line 9) | Dedicated endpoints, serverless endpoints, self-hosted containers, carried with the source's own note that the structure is read from the site navigation. |
| §11 founding / heritage framing | 옮김 → Experience Scope (line 13) · 분리 → provenance | Carried with the source's own evidence class: general public background about the company, not a quoted FriendliAI statement. Also at prov "Evidence-class boundaries". |
| §11 "what it refuses / what it embraces" reading | 옮김 → Experience Scope (line 15) + Application rules (lines 60–67) | Qualified in both places (B2a). |
| §12 Principles (5, with UI implications) | 옮김 → Experience Principles (lines 50–54) | Qualified at line 48 with the full evidence-class limitation. The source itself labels three of these as editorial readings; that is recorded in provenance. |
| §13 Personas (3 named archetypes) | 삭제 | Fictional biography (D2). Not promoted and not re-recorded in provenance, not even as names — grepped for all three names across the three files, 0 hits. The group-level segments survive at line 31. The string "Book a demo" went with them; it occurs in the source only inside persona reasoning and is attributed to other vendors, while the FriendliAI-attributed contrast "Request a demo" survives at line 449. Both facts are at prov 123. |
| §14 States (9 rows) | 옮김 → Components & States State treatments (table rows 215–223) | Body preserved in full (A2), qualified at line 211 as derived editorial inference composing values established elsewhere. The `Something went wrong` and `Required` negative examples are byte-exact. |
| §15 Durations (3 tokens) | 옮김 → Foundations Motion (table rows 139–141) | `120ms` / `200ms` / `320ms` with their uses, each verified present, framed as stated by the record rather than computed. |
| §15 Easings — three exact `cubic-bezier` curves | 삭제 (값) · 분리 → provenance omission ledger | The curves carry no attribution in the source, whose motion section is part of an unsourced philosophy layer, and `ease-exit` repeats the value carried by the legacy authoring template. All three curve strings are recorded at prov 124; the token names and uses stay in the body (table rows 147–149), so only the unattributed value is dropped. |
| §15 Motion rules + reduced motion | 옮김 → Foundations Motion (line 151) | Both the reduced-motion rule and the motion character sit inside one adjacent qualification, which names both so neither escapes it. |
| §15 promotion condition | 신설 근거 규칙 → Foundations Motion (line 153) | B3 is written out in full at line 153, verified by reading the line: transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component computed-observation gate and the "official documentation of a single curve is not that gate" clause. This row claims only what line 153 actually contains (E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | provenance Freshness and Sources; "Conflicts unresolved: none" quoted verbatim at prov 36. |
| Trailing HTML sources comment (live-inspect record, evidence-class notes) | 분리 → provenance | provenance "Raw live-inspect record" and "Evidence-class boundaries carried into the body". The evidence-class limits themselves are also written into the body beside the sentences they qualify — the ledger moves out, the qualification stays portable (E1). |

## Sibling files (E2)

`web/references/friendliai/` contains exactly one file, `DESIGN.md` (checked with `ls`). The source's trailing comment points at a sibling `.verification.md` for raw samples; that file does not exist in the repository. **No sibling was adopted, and the single non-adopted item is that absent `.verification.md`.** No value in these three outputs comes from a sibling file, and no sibling promotion occurred. The pointer itself is recorded in provenance so the gap is visible rather than silent.

## State applicability decisions (C2)

Judged by role meaning, not by primitive name and not by capture completeness.

| Component | loading / error / success | Reason class |
|---|---|---|
| Get Started (Primary), Talk to an Engineer (Secondary) | applicable | The control commits a step that can pend, fail, and confirm. |
| Search (Pill) | applicable | A field that submits a query, and a form field for error/success. |
| Log in (Quiet) | not-applicable | The source calls it a text link in the header: a destination link commits no operation of its own. Semantic reason, never absence of observation. |
| Top Navigation Item | not-applicable | Active versus inactive is the item's whole meaning; navigation is not an action outcome. Semantic reason, never absence of observation. |
| Feature Card, Elevated Spotlight Card, Topic Tag Pill, HIGHLIGHTS Badge | map omitted entirely | No interactive-kind evidence, so kind is not confirmed either way (C4). |

Counted in DESIGN.md: 30 `applicable` rows, 6 `not-applicable` rows, plus one prose use of each term in the capture record.

## Checks run

- `node test-v2/tools/migrate-reference.mjs --brand friendliai --gate-only` → `PASS`, problems 0
- `inspectDesignMd` portable-core conformance on the migrated `DESIGN.md` → `portable_core: true`, `level: portable-core`, reasons 0
- `node test-v2/tools/process-leak-check.mjs` (E1) over the migrated body → 0 hits

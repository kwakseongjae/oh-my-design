# maum.ai migration log

Source: `web/references/maum-ai/DESIGN.md` (unmodified)
Destination: `docs/design-md-weight/migrated/maum-ai/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/maum-ai/provenance.md`
Rulebook version: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-09-01
Worker: grok-4.6 T2

Every row below was checked by grepping the three output files before it was written; the counts are `str.count` / `grep -oF`, not recollection. Bare numbers are DESIGN.md counts; provenance counts are marked `P`.

Source SHA-256: `f9e3aace7f635c8463529b877785f626b374d2543d48ebd0f08c3d1e4a2631f1`

## Frontmatter

| Legacy | Disposition | Destination / reason |
|---|---|---|
| `id`, `country`, `category`, `homepage`, `added`, `verified`, `omd: "0.1"` | 분리 → provenance | Identity data rows (P 8–21; table header P 7) and Freshness (P 29–36). Portable file has no frontmatter. `https://maum.ai/` DESIGN dest 1 (Scope `:9`) / P dest 5. |
| `name: maum.ai (ex-MindsLab)` | 옮김 → DESIGN.md H1 + Scope · 분리 → provenance | H1 `# maum.ai Design System` (line 1). `ex-MindsLab` DESIGN 0 as the YAML parenthetical; the former name is carried as `MindsLab` DESIGN 3 / P 2 and `마인즈랩` DESIGN 3 / P 2. |
| `display_name_kr: 마음AI (구 마인즈랩)` | 옮김 → Experience Scope + Content Locale · 분리 → provenance | Byte-exact `마음AI` DESIGN 3 / P 4; `구 마인즈랩` DESIGN 2 / P 2 (A5). Latin name sits beside it. |
| `primary_color: "#4262ff"` | 옮김 → Foundations · 분리 → provenance | `#4262ff` DESIGN 8 / P 6. |
| `logo.type: favicon` / `logo.slug` | 분리 → provenance | P 16. Third-party favicon-proxy URL, not a maum.ai-published asset, so not presented as a brand asset in the body. Word `favicon` DESIGN 2 / P 9 (body mentions the pointer only to decline it; P 9 includes the derived-inventory mention). |
| `tokens.source: live-extract`, `tokens.extracted` | 분리 → provenance | P Identity + Freshness. `live-extract` DESIGN 0 / P 1. |
| `tokens.note` | 분리 → provenance | Quoted verbatim at P 25. Its values (`#4262ff`, `#3652d8`, `#343434`, `#111111`, `#ff4d4d`) stand independently in the body. |
| `tokens.colors` (15 keys; `#ffffff` is canvas and on-primary) | 옮김 → Foundations Semantic color (lines 89–103) · 분리 → provenance claim ledger | Every hex kept with its role name and use, in both destinations. Same-hex keys not merged. |
| `tokens.typography.family` display Jamsil / body Pretendard / techno Orbitron | 옮김 → Typography Family (lines 171–173) · 분리 → provenance claim ledger | `Pretendard` DESIGN 33 / P 12; `Jamsil` DESIGN 16 / P 8; `Orbitron` DESIGN 16 / P 5. `잠실체` DESIGN 2 / P 0 (body-only Korean name beside Jamsil). Counts are `grep -oF` occurrences, not line hits. |
| `tokens.typography.*` role metrics (7 roles) | 옮김 → Typography Type roles (table lines 183–189) | Unitless line heights preserved as ratios (A1a): `1.01` DESIGN 1 / P 3; `1.25` in table cells; `1.40` DESIGN 1 / P 1; `1.19` DESIGN 1 / P 1. Rem equivalents from §3 in the same cells: `7.20rem` DESIGN 2 / P 3; `2.25rem` DESIGN 1; `1.13rem` DESIGN 1; `1.25rem` DESIGN 1; `1.00rem` DESIGN 3. |
| `tokens.spacing` (7 named steps) | 옮김 → Foundations Spacing (line 107) · Layout (line 376) | Named steps `xs`…`xxl` in Foundations; the §5 scale, including `~4px` and the dominant `8/16/20/32` rhythm, in Layout. Both destinations recorded (E2a). |
| `tokens.rounded` sm 6 / md 8 / lg 20 / full 9999 | 옮김 → Foundations Shape (lines 111–116) | `9999px` DESIGN 5 / P 3. |
| `tokens.shadow.none: "none"` | 옮김 → Foundations Elevation (line 126) | `box-shadow: none` DESIGN 4 / P 3. Line 127 is blank; the Shadow token sentence is 126. |
| `tokens.components.*` (7 records, each with a `type:`) | 옮김 → Components & States | One entry per record. Each `type:` survives as a `Type:` field — counted in DESIGN.md: `Type: button` 2, `Type: card` 2, `Type: badge` 1, `Type: input` 1, `Type: tab` 1 (A1b). Provenance claim ledger writes `type: button` / `type: card` / `type: tab` / `type: input` / `type: badge`. |
| `nav-link.active: "ink #111111 text on active"` | 옮김 → Components Top Navigation Item (lines 354 and 369) | Recorded as the observed `active` state, the record's only interaction expansion. |
| `components_harvested: true` | 분리 → provenance | P 21 (A1c). DESIGN 0 / P 1. |

## Body sections

| Legacy | Disposition | Destination / reason |
|---|---|---|
| §1 Visual Theme & Atmosphere — identity, canvas/ink/indigo, three-font system, two-track buttons | 옮김 → Experience Scope (lines 9–15), Distinctive traits (lines 35–42) | Product/surface scope, the two captured surfaces, and the observed interface layer. Unique modifiers restored in Scope: `airy, breathable bands`; `the eye is trained`; `de-facto Korean product font`; `heavier, more editorial Korean voice`; `deliberate sci-fi flourish`; `looks built, not decorated`. |
| §1 interpretive framing ("engineered confidence", "built, not decorated") | 옮김 → Experience Scope (line 15) + Distinctive traits (line 44) | Kept as a derived editorial implementation inference with the adjacent qualification, not as a maum.ai statement (B2a). |
| §1 Key Characteristics (8 bullets) | 옮김 → Experience Distinctive traits (lines 35–42) | Values verbatim; the characterizing adjectives qualified adjacently at line 44. |
| §2 Color Palette & Roles (4 groups, 15 entries) | 옮김 → Foundations Semantic color (lines 89–103) | All values and role prose. Line 87 separates the observed uses from the editorial role naming. |
| §3 Font Family | 옮김 → Typography & Assets Family (lines 171–175) | Pretendard / Jamsil (잠실체) / Orbitron; three-jobs rule; no substitution. Family characterizations qualified at line 175. |
| §3 Hierarchy table (7 roles) | 옮김 → Typography Type roles (table lines 183–189) | Includes `115px (7.20rem)`, `1.25 (45px)`, `1.25 (20px)`. YAML `use` beside §3 Notes keep-both: `"MAIED" oversized wordmark` DESIGN 1; `Feature section titles` DESIGN 1; `Charcoal round CTA labels` DESIGN 1; `Top navigation items` DESIGN 1. |
| §3 Principles (4 items) | 옮김 → Typography (lines 193–196) | Qualified at line 191 as a derived editorial reading. |
| §4 Buttons — Primary CTA / Charcoal Round | 옮김 → Components (lines 235, 262) | Anatomy, geometry, and labels `시작하기` / `Contact Us` / `Chatbot Inquiry` byte-exact (A5). Charcoal Use YAML beside §4 `Secondary actions —` DESIGN 1. Font keep-both: YAML `16px / 700 Pretendard` DESIGN 3 / `20px / 600 Pretendard` DESIGN 1 beside §4 `16px Pretendard weight 700` DESIGN 3 / `20px Pretendard weight 600` DESIGN 1. Invented slash-inserted `16px / 700 / Pretendard` DESIGN 0 / `20px / 600 / Pretendard` DESIGN 0. |
| §4 Contact Field, Product Showcase Card, Tinted Surface Card, Accent Highlight, Navigation | 옮김 → Components (lines 288, 313, 325, 335, 345) | Anatomy and geometry preserved. Nav item labels `Physical AI`, `Defense`, `MAIED`, `Company` are byte-exact at line 355. YAML `use:` strings restored on each component and kept beside the §3 Notes / §4 Use writings rather than replacing them. `Top navigation item` DESIGN 2. |
| §5 Spacing System, Grid & Container | 옮김 → Layout & Platforms (line 376) · Foundations Spacing (line 107) | Scale, hero column, carousel, alternating bands. Both destinations recorded (E2a). Line 374 is the heading; the scale sentence is 376. |
| §5 Whitespace Philosophy | 옮김 → Layout (lines 378–382) | Qualified adjacently at line 378 as a derived editorial reading (B2a). `Engineered breathing room` / `Two-track button rhythm` kept. |
| §5 Border Radius Scale | 옮김 → Foundations Shape (lines 111–116) | Merged with `tokens.rounded`: same meaning, so merged rather than restated twice. Line 117 is blank. Workhorse reading qualified at line 116. |
| §6 Depth & Elevation table + Shadow Philosophy | 옮김 → Foundations Elevation (table lines 122–124, Shadow token line 126, qualification line 128) | The three levels verbatim; the philosophy paragraph qualified adjacently at line 128. Lines 127 and 129 are blank. |
| §7 Do's (8 rules) | 옮김 → Experience Application rules (lines 60–67) | Qualified at line 58. Deliberately not folded into the controlled Governance copy. |
| §7 Don'ts (7 rules) | 옮김 → Experience Avoid (lines 73–79) | Qualified at line 71. Includes `the indigo button is sharp 8px; only the charcoal action is a pill` and `never a surface or CTA fill`. |
| §8 Breakpoints, Touch Targets, Collapsing Strategy | 옮김 → Layout & Platforms (lines 384–406) | Qualified at line 386 as derived; inspections were desktop. `<640px` / `640-1024px` / `1024-1440px` kept. Touch-target adjectives qualified at line 406. |
| §8 Image Behavior | 옮김 → Layout Image behavior (lines 410–413) · Assets (line 200) | No shadow at any size; 20px radius and translucent white outline across breakpoints. Both destinations recorded. Image reading qualified at line 413. |
| §9 Quick Color Reference | 삭제 | A prompt-form restatement of §2. All 15 hexes were grepped against DESIGN.md before this row was written; every one is present in Foundations, so nothing unique was lost. |
| §9 Example Component Prompts — Product card `Title in Jamsil weight 700, #111111`. `Body 16px Pretendard weight 500, #5b636d` | 옮김 → Components Product Showcase Card (line 323) | The only value pair that existed nowhere but §9, so it was moved rather than deleted (A3). Also recorded at P claim-ledger note. |
| §9 Example Component Prompts — remainder, and §9 Iteration Guide | 삭제 | Tool-facing prompt wrappers and a restatement of rules already carried by Foundations, Components, and Experience. No delegation to a skill or adapter. |
| §10 Voice & Tone prose + tone table | 옮김 → Content & Locales (lines 426–436) | The register reading is qualified at line 428, which names the table so the rows fall inside the qualification. |
| §10 Voice samples (3, verbatim) | 옮김 → Content Voice samples (lines 422–424) · 분리 → provenance claim-ledger group (P 182) | Byte-exact in DESIGN (A5): `마음AI - Physical AI 플랫폼` DESIGN 1 / P 0 (the string itself is not in provenance; provenance records the group as "Voice samples (3, §10)", not this byte string — not a second DESIGN dest). `MAUM.AI Foundation Model` DESIGN 5 / P 1; `maum.ai BRAIN Team` DESIGN 2 / P 8. Parenthetical captions qualified at line 420. |
| §10 Forbidden register | 옮김 → Content (line 440) | `revolutionary` / `game-changing` byte-exact in DESIGN (1 / 1), under an adjacent qualification. P dest 1 / 1 is the derived-inventory mention of those refused strings, not a second portable use. |
| §11 Brand Narrative — founding, rebrand, Physical AI thesis, product lineup | 옮김 → Experience Scope (lines 13–15) | `2014`, `유태준 (Taejun Yoo)`, `KOSDAQ`, `AI Human`, speech-to-text / text-to-speech / virtual-human, `agricultural spraying robots`, `JINDO BOT` / `AIden` / `MAIED` / `Defense`, BRAIN Team, GitHub organization. Carried with the source's own evidence class: public facts, not a quoted maum.ai statement. |
| §11 "what it refuses / what it embraces" reading | 옮김 → Experience Scope (line 13) | Original strings `What maum.ai's design refuses` and `What it embraces` restored; qualified at line 15 (B2a). |
| §12 Principles (5, with UI implications) | 옮김 → Experience Principles (lines 50–54) | Qualified at line 48 with the full evidence-class limitation. |
| §13 Personas (3 named archetypes) | 삭제 | Fictional biography (D2 / D2a). Not promoted and not re-recorded in provenance, not even as names or cities. Disposition is unidentifying: source §13, three fictional archetypes (name · age · city). The group-level segments survive at line 31. This log does not re-list identifiers. |
| §14 States (9 rows) | 옮김 → Components & States State treatments (table rows 225–233) | Body preserved in full (A2), qualified at line 221 as derived editorial inference composing values established elsewhere. `오류` and `필수` negative examples are byte-exact. `No illustration clutter`, `Flat pulse — no shadow shimmer`, `Inline progress within the charcoal button`, `No celebratory emoji`, `indigo actions fade rather than turn grey` kept. |
| §15 Durations (3 tokens) | 옮김 → Foundations Motion (table rows 136–138) | `120ms` / `240ms` / `360ms` with their uses, each verified present, framed as stated by the record rather than computed. |
| §15 Easings — three exact `cubic-bezier` curves | 삭제 (값) · 분리 → provenance omission ledger | The curves carry no attribution in the source, whose motion section is part of an unsourced philosophy layer, and `ease-exit` repeats the value carried by the legacy authoring template. All three curve strings are recorded at P 234; the token names and uses stay in the body (table rows 144–146), so only the unattributed value is dropped. |
| §15 Motion rules + reduced motion | 옮김 → Foundations Motion (line 148) | Duration roles, easing-use assignments, the reduced-motion rule, and the motion character sit inside one adjacent qualification at line 148, which names all four so none escapes it. `motion-standard / ease-enter`, `No bounce or spring`, `prefers-reduced-motion: reduce`, `carousel becomes a static scroll` kept. |
| §15 promotion condition | 신설 근거 규칙 → Foundations Motion (line 150) | B3 is written out in full at line 150, verified by reading the line: transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component computed-observation gate and the "Official documentation of a single curve or duration is not that gate" clause. This row claims only what line 150 actually contains (E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | provenance Freshness and Sources; "Conflicts unresolved: none" quoted verbatim at P 36. |
| Trailing HTML sources comment (live-inspect record, evidence-class notes) | 분리 → provenance | provenance "Raw live-inspect record" and "Evidence-class boundaries carried into the body". The evidence-class limits themselves are also written into the body beside the sentences they qualify — the ledger moves out, the qualification stays portable (E1). |

## Sibling files (E2)

`ls -a` / `find web/references/maum-ai -name '.verification.md'`: sibling exists.

| Field | Value |
|---|---|
| path | `web/references/maum-ai/.verification.md` |
| bytes | 5741 |
| lines | 63 |
| SHA-256 | `8c16ab1f4f9dd538fdc86487aabfe59552645d0c46945126f77ec525ee30fb3c` |

Adopted into provenance § Canonical proof. Nothing from the sibling was promoted into the portable body as a token. Sibling-only values (Chatbot Inquiry height 90px, header buttons `Contact`/`Guide`/`Log in` at 56px, `MAIED` 115.2px / 116.64px, BRAIN Team H1 48px, `Roboto` ×42, radius `10px` ×4) stay in the provenance sibling-only table. Portable-body counts: `90px` 0, `115.2px` 0, `116.64px` 0, `48px` 0, `56px` 0, `10px` 0, `Roboto` 0.

## State applicability decisions (C2)

Judged by role meaning, not by primitive name and not by capture completeness.

| Component | loading / error / success | Reason class |
|---|---|---|
| Primary CTA (시작하기), Charcoal Round (Contact / Chatbot) | applicable | The control commits a funnel or contact/chatbot step that can pend, fail, and confirm. The source itself names inline progress inside the charcoal button on form submit. |
| Contact Field | applicable | A field that belongs to a submitting form; the source names a field-level validation message. |
| Top Navigation Item | not-applicable | The item moves the reader to another area; active versus inactive is its whole meaning. Semantic reason, never absence of observation. |
| Product Showcase Card, Tinted Surface Card, Accent Highlight | map omitted entirely | No interactive-kind evidence, so kind is not confirmed either way (C4). |

Counted in DESIGN.md with `^\| [a-z-]+ \| applicable \|` / `not-applicable`: **25** `applicable` rows, **3** `not-applicable` rows. Word totals are higher because the Capture record uses both words in prose (`applicable` 30 / `not-applicable` 4 as word totals). Absence of an observation is not a `not-applicable` reason. This is not a complete state-coverage claim.

## A5 / A5a

Gate `copy-loss` needles are contiguous non-Latin runs of length ≥4 inside quotations. Expected needles from the source: `시작하기`, `마인즈랩`, `구 마인즈랩`. `compared` will be far below `candidates` because most quotations are Latin, so A5a hand sweep is mandatory.

Hand sweep of brand-issued or source-quoted published strings (labels, CTAs, product names, Korean identity, voice samples, refused generics):

| String | DESIGN | P | Disposition |
|---|---:|---:|---|
| `시작하기` | 11 | 3 | kept |
| `Contact Us` | 10 | 3 | kept |
| `Chatbot Inquiry` | 10 | 3 | kept |
| `Physical AI` | 6 | 2 | kept |
| `Physical AI 플랫폼` | 4 | 1 | kept |
| `마음AI - Physical AI 플랫폼` | 1 | 0 | kept |
| `MAUM.AI Foundation Model` | 5 | 1 | kept |
| `maum.ai BRAIN Team` | 2 | 8 | kept |
| `MAIED` | 11 | 5 | kept |
| `AIden` | 5 | 1 | kept |
| `JINDO BOT` | 5 | 1 | kept |
| `Defense` | 4 | 2 | kept |
| `Company` | 2 | 1 | kept |
| `마음AI` | 3 | 4 | kept |
| `마인즈랩` | 3 | 2 | kept |
| `구 마인즈랩` | 2 | 2 | kept |
| `MindsLab` | 3 | 2 | kept |
| `유태준` | 1 | 1 | kept |
| `Taejun Yoo` | 1 | 1 | kept |
| `잠실체` | 2 | 0 | kept |
| `오류` | 1 | 0 | kept as refused generic |
| `필수` | 1 | 0 | kept as refused generic |
| `revolutionary` / `game-changing` | 1 / 1 | 1 / 1 | kept as refused register in DESIGN; P dest is the derived-inventory mention, not a second portable use |

Denominator for the A5a claim: the 23 published/quoted rows above, 0 unaccounted losses. `verdict` here is “those needles survived”, not “every quotation in the file is copy”. Editorial glosses (`engineered, not decorated`) are B2a-qualified characterizations, not A5 needles.

Sibling-only published strings (`Guide`, header `Log in`, `Blog | maum.ai BRAIN Team`) are recorded in provenance and not promoted (0 in DESIGN.md for `Guide` as a header-button label; `Log in` 0).

## B2a

Portable body: `derived editorial implementation inference` **25** · `not maum.ai-authored or a separately published UI specification` **25** (`grep -oF`, not line hits). No published first-party UI specification; the example form is used as-is. Provenance derived inventory is 25 data rows (P 203–227), 1:1 with the body. Heading P 197.

Pass 1 (F1) re-read the finished body. Causal/interpretive sentences outside Principles (Scope characterizations and the refuses/embraces reading, Distinctive traits adjectives, primary-task selection, Audience drop, color role naming, Spacing ~4px/dominant-rhythm reading, Shape "workhorse", elevation philosophy, motion duration roles + easing uses + character, font-class sorting and resolution cells, Family three-job characterizations, type-hierarchy readings, assets, capture/applicability, state treatments, layout whitespace, breakpoint table, touch-target adjectives including "easy", image no-shadow reading, voice-sample parentheticals, voice table, forbidden register) each have an adjacent full-form bound. “No native-app / dashboard / 200% reflow” sentences were not written (D1).

Auditor (F3) added 5 complete bounds (Spacing `:107`, Shape `:116` converted from incomplete "source's own wording", Family `:175`, Image `:413`, Voice-sample captions `:420`) and expanded 5 existing bounds (Motion `:148`, Font evidence `:158`, Capture `:217`, Layout whitespace `:378`, Touch `:406`) without adding a 26th occurrence. Worker-close 20 is the pre-audit measurement; current 25 is the live count.

## D1 / D2

- `native app` DESIGN 0 / P 0. `console` 0 / 0. `200%` 0 / 0.
- Personas: three named fictional archetypes deleted; drop is unidentifying (D2a). Source §13 only; this log does not re-list the names, ages, or cities.

## Checks run

- `inspectDesignMd` / `evaluatePortableCore` on the migrated `DESIGN.md` → `format: core-v2`, `structurally_valid: true`, `portable_core: true`, `level: portable-core`, `reasons: []`
- `findProcessLeaks()` on the migrated body → `[]`
- `node test-v2/tools/migrate-reference.mjs --brand maum-ai --gate-only` → **PASS**, `problems: []`, copy-loss `compared` 8 / `candidates` 170
- `node test-v2/tools/latin-copy-audit.mjs --brand maum-ai` → `withLoss: 0` after the sibling `document.title` `Blog | maum.ai BRAIN Team` was recorded unescaped in provenance (not promoted to the body)

The gate is not evidence of semantic conformance. `compared` 8 < `candidates` 170 is the A5a trigger; the hand sweep above is the A5 check.

## Hashes

| File | SHA-256 |
|---|---|
| `web/references/maum-ai/DESIGN.md` (source, unmodified) | `f9e3aace7f635c8463529b877785f626b374d2543d48ebd0f08c3d1e4a2631f1` |
| `web/references/maum-ai/.verification.md` (sibling, unmodified) | `8c16ab1f4f9dd538fdc86487aabfe59552645d0c46945126f77ec525ee30fb3c` |
| `docs/design-md-weight/migrated/maum-ai/DESIGN.md` | `18bbe35c4389099cbb9a54d87cec472d68fc985a7446704296cc0d1da6e1ee76` |
| `docs/design-md-weight/migrated/maum-ai/provenance.md` | `c5a078b32cb3e923159d9f57410e4b75a09127bfe8b6c2fb9e30f1e6525f3620` |

## 고유 표현 대조

뽑은 129 / 0이었다가 복원한 20. First pass missed 12 Scope/§11 unique strings (`de-facto Korean product font`; `heavier, more editorial Korean voice`; `deliberate sci-fi flourish`; `the eye is trained`; `looks built, not decorated`; `What maum.ai's design refuses`; `What it embraces`; `build-in-the-open`; `research-forward posture`; `airy, breathable bands`; `broader, more ambitious thesis`; `generous breathing room`) plus 8 YAML `use:` / border-byte strings (`Oversized MAIED techno wordmark, Orbitron`; `1px solid #3652d8`; and the remaining YAML `use:` labels). Post-restore `grep -oF` counts on DESIGN.md are ≥1 for every restored string except sibling-only `Blog | maum.ai BRAIN Team` (provenance, unescaped).

개정 (의미 검토 FAIL 2): Type roles Notes keep YAML `use` beside §3 Notes. Charcoal Use keeps YAML `use` beside §4 Use. Component Font fields keep YAML `font` beside §4 Font. Slash-inserted third font form removed. Dest rows above recounted with `grep -oF -e`.

# FuriosaAI migration log

Source: `web/references/furiosaai/DESIGN.md` (unmodified)
Destination: `docs/design-md-weight/migrated/furiosaai/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/furiosaai/provenance.md`
Rulebook version: **v10** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-08-26

Every row below was checked by grepping the three output files before it was written; the line numbers are grep results taken after the final edit, not recollection (F2). Bare numbers are `DESIGN.md` lines; provenance lines are marked `prov`.

## Frontmatter

| Legacy | Disposition | Destination / reason |
|---|---|---|
| `id`, `country`, `category`, `homepage`, `added`, `verified`, `omd: "0.1"` | 분리 → provenance | provenance Identity (prov 5–22) and Freshness (prov 28–36). The portable body carries no frontmatter and no source URL: `furiosa.ai` counts 17 in provenance, 0 in DESIGN.md. |
| `name: FuriosaAI` | 옮김 → DESIGN.md H1 · 분리 → provenance | H1 `# FuriosaAI Design System` (line 1) and provenance Identity (prov 10). |
| `display_name_kr: 퓨리오사AI` | 옮김 → Experience Scope + Content Locale · 분리 → provenance | Byte-exact Korean at lines 9 and 488, with the Latin name alongside rather than replacing it (A5); also prov 11. Counted: 2 in DESIGN.md, 1 in provenance. |
| `primary_color: "#e21500"` | 옮김 → Foundations · 분리 → provenance | Semantic color **Renegade Red** (line 92) and provenance Identity (prov 15) + claim ledger (prov 124). |
| `logo.type: favicon` / `logo.slug` | 분리 → provenance | prov 16, with the reason at prov 24: the source classifies it only as `type: favicon` and states nothing about ownership or license, so the URL stays in the ledger. The body records the existence of a favicon logo entry at line 206 without the URL. `favicon` count: 1 in DESIGN.md (no URL), 5 in provenance. |
| `tokens.source: live-extract`, `tokens.extracted` | 분리 → provenance | prov 20 and prov 34. `live-extract` count: 0 in DESIGN.md, 1 in provenance. |
| `tokens.note` | 분리 → provenance | Quoted verbatim at prov 26. Every value inside it (`#e21500`, `#000000`, `#ffffff`, `#70e697`, `#fffa82`, `#cdbbff`, ABC Favorit / ABC Favorit Mono, `News`, `Technical Updates`) stands independently in the body. |
| `tokens.colors` (13 values) | 옮김 → Foundations Semantic color (lines 90–113) · 분리 → provenance claim ledger (prov 124–136) | Every hex kept with its role name and use, in both destinations. |
| `tokens.typography.family` (sans + mono) | 옮김 → Typography & Assets Family (lines 180–181) · 분리 → provenance claim ledger (prov 137–138) | Both families kept with the `Arial, sans-serif` fallback recorded in §3. |
| `tokens.typography.*` role metrics (9 roles) | 옮김 → Typography & Assets Type roles (table lines 190–198) | Sizes, weights, tracking, and the unitless line heights `1.00` / `1.10` / `1.20` / `1.30` / `1.17` / `1.60` / `1.50` preserved as ratios rather than converted to px (A1a). The computed px equivalents and the rem equivalents from the §3 table sit in the same cells. |
| `typography.*.use` strings (9) | 분리 → provenance verbatim table (prov 87–95) | The §3 Notes column restates them in slightly different words, so the frontmatter byte form is reproduced verbatim in provenance rather than lost to a near-duplicate paraphrase (A5). |
| `tokens.spacing` (7 named steps) | 옮김 → Foundations Spacing (line 117) · Layout (line 433) | Named steps `xs`…`section` in Foundations; the §5 scale prose in Layout. Both destinations carry the values. |
| `tokens.rounded` (5 steps) | 옮김 → Foundations Shape (lines 121–125) | Merged with the §5 Border Radius Scale: same meaning, same authority, so merged rather than restated twice. Each step keeps its §5 usage note. |
| `tokens.shadow.card` / `.none` | 옮김 → Foundations Elevation (table line 133, token line 135) | Both tokens named at line 135; `card` also appears on the Featured Card (line 396) and in Distinctive traits (line 41). |
| `tokens.components.*` (9 records, each with a `type:`) | 옮김 → Components & States (lines 233–424) | One entry per record. Each `type:` survives verbatim as a `Type:` field — counted in DESIGN.md with `grep -o … \| wc -l`: `Type: button` 3, `Type: card` 2, `Type: badge` 2, `Type: input` 1, `Type: tab` 1 (A1b). |
| `components.input-text.padding: "0 15px"` and `.border: "1px solid #c0d0de"` | 옮김 → Components (lines 340, 338) · 분리 → provenance verbatim table (prov 100, 99) | The §4 prose writes the same padding as `0px 15px`, which is what the body carries at lines 117 and 340; the frontmatter byte form `0 15px` is reproduced in provenance so both source forms survive (A1a / A5). |
| `components.nav-link.active: "#151515 on light scrolled header"` | 옮김 → Components Top Navigation Item (line 368) · 분리 → provenance (prov 106, 160) | Recorded as the observed `active` state, one of the record's two interaction expansions. |
| `components.*.use` strings (9) | 분리 → provenance verbatim table (prov 96–107) | Same treatment as the typography `use` strings: the Role lines in Components paraphrase them, so the byte form is preserved in provenance. |
| `components_harvested: true` | 분리 → provenance | prov 22 (A1c — a verification-ledger field is a value). Count: 0 in DESIGN.md, 1 in provenance. |

## Body sections

| Legacy | Disposition | Destination / reason |
|---|---|---|
| §1 Visual Theme & Atmosphere — palette, band cadence, type description | 옮김 → Experience Scope (line 13) | The observed interface layer, with every hex and metric it names. |
| §1 interpretive framing ("industrial, high-contrast, and confident", "like silicon", "engineering tell", `"the action."`) | 옮김 → Experience Scope (line 15) | Kept as a derived editorial implementation inference with the adjacent qualification, not as a FuriosaAI statement (B2a). `"the action."` is byte-exact including the period the source put inside the quotation. |
| §1 Key Characteristics (8 bullets) | 옮김 → Experience Distinctive traits (lines 36–43) | Values verbatim; the characterizing adjectives qualified adjacently at line 45. |
| §2 Color Palette & Roles (4 groups, 13 entries) | 옮김 → Foundations Semantic color (lines 90–113) | All values and role prose, with the group headings Primary / Text & ink / Accent / Form preserved. Line 88 separates the observed uses from the editorial role naming rather than qualifying both alike. The lavender parenthetical `(e.g. the "Blog" heading, "See all posts")` is byte-exact at line 107. |
| §3 Font Family, fallbacks, and character reading | 옮김 → Typography & Assets Family (lines 180–184) | Both families with `Arial, sans-serif`; the substitution ban kept as a rule at line 182, and the "precise grotesque … slightly mechanical character" reading qualified adjacently at line 184 (B2a). |
| §3 Hierarchy table (9 roles) | 옮김 → Typography & Assets Type roles (table lines 190–198) | Includes the computed px line heights `84px`, `79.2px`, `57.6px`, `46.8px`, `28px`, `25.6px` and the rem equivalents `5.25rem` … `0.75rem`. |
| §3 Principles (4 items) | 옮김 → Typography & Assets (line 200) | Condensed into one paragraph and qualified there as a derived editorial reading (B2a). |
| §4 Buttons — Primary CTA, Modal Close, Skip-to-Content, Tertiary Link (on dark) | 옮김 → Components (lines 233, 258, 282, 308) | The Modal Close height `39px` (line 268), the Skip-to-Content height `36px` (line 292), and the whole Tertiary Link record exist only in §4 prose, never in frontmatter; all are in the body, and their §4-only origin is recorded at prov 169. |
| §4 Inputs — Text Field | 옮김 → Components Access Program Text Field (line 330) | Anatomy, geometry, and the `name, email, company` field list. |
| §4 Cards & Containers — Blog Card, Featured Card, Subtle Tile | 옮김 → Components (lines 380, 389, 398) | Geometry preserved; the Blog Card "no border, no shadow" note at line 387 and the Subtle Tile `rgba(0,0,0,0.02)` / `rgba(0,0,0,0.08)` values at lines 402 and 403 exist only in §4 prose. |
| §4 Badges — News (Mint), Technical Updates (Yellow) | 옮김 → Components (lines 406, 417) | Chip labels `News` and `Technical Updates` byte-exact, and again at line 27 as a primary task and lines 105–106 as color uses (A5). |
| §4 Navigation | 옮김 → Components Top Navigation Item (line 357) | Background, text, font, padding, the `active` switch, and all eight item labels `Architecture` … `Contact`, byte-exact at line 367 and again at line 26 as a primary task. |
| §5 Spacing System, Grid & Container | 옮김 → Layout & Platforms (line 433) | Scale, alternating bands, centered hero column, `≈384px–420px` card widths as the grid range the source states, product-page stacking. |
| §5 Whitespace Philosophy | 옮김 → Layout & Platforms (line 435) | Qualified adjacently as a derived editorial reading (B2a). The parenthetical `` `#000000` vs `#ffffff` `` is byte-exact at line 435. |
| §5 Border Radius Scale | 옮김 → Foundations Shape (lines 121–125) | Merged with `tokens.rounded` — same meaning, same authority — so it is stated once rather than twice. |
| §6 Depth & Elevation table + Shadow Philosophy | 옮김 → Foundations Elevation (table lines 131–133, qualification line 137) | The three levels verbatim, including `box-shadow: none` at line 135; the philosophy paragraph qualified adjacently at line 137, with `"this one matters."` byte-exact including the period the source put inside the quotation. |
| §7 Do's (8 rules) | 옮김 → Experience Application rules (lines 61–68) | Qualified at line 59. Deliberately not folded into the controlled Governance copy. |
| §7 Don'ts (7 rules) | 옮김 → Experience Avoid (lines 74–80) | Qualified at line 72. `700+` byte-exact at line 75. |
| §8 Breakpoints, Touch Targets, Collapsing Strategy, Image Behavior | 옮김 → Layout & Platforms (lines 439–457) | The breakpoint table verbatim (`<640px`, `640-1024px`, `1024-1440px`) under the qualification at line 439, which states that this record attributes no computed measurement to a breakpoint. Image Behavior joins the same collapsing list because both of its clauses are responsive claims. |
| §9 Quick Color Reference | 삭제 | A prompt-form restatement of §2. All 13 hexes were extracted and diffed against the rest of the source before this row was written; each already stands in §2, so nothing unique was lost (A3). |
| §9 Example Component Prompts (4) and Iteration Guide (7 steps) | 삭제 | Tool-facing prompt packaging with no receiving slot. Every hex, size, radius, padding, and quoted label inside §9 was extracted and diffed against the rest of the source: **0** token values and **0** quoted strings occur only there, so this deletion moves nothing and loses nothing (A3). No delegation to a skill or adapter. |
| Mid-file footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | provenance Freshness (prov 28–40) and Sources (prov 59–79). The Tier 2 verdicts `"not listed (SPA shell, no FuriosaAI entry)"` and `"not listed (KR AI-hardware brand not catalogued)"` are quoted verbatim at prov 78–79, and `"**Conflicts unresolved:** none"` at prov 38. |
| Footer/comment surface-count disagreement | 분리 → provenance, 미해소 보존 | prov 55: the footer says "5 brand surfaces" and lists five Tier 1 URLs including GitHub; the trailing comment says "5 brand-owned surfaces" and then lists six, without GitHub. Both lists are recorded and neither is picked as the winner. |
| §10 Voice & Tone prose + tone table (5 rows) | 옮김 → Content & Locales (lines 472–480) | The register reading is qualified at line 472, which names the table explicitly so its rows fall inside the qualification. `"Tensor Contraction Processor"`, `"Inference without constraints."`, `"Get started"`, `"Watch the sessions"`, `"See the specs"` byte-exact in the rows. |
| §10 Voice samples (3, verbatim) | 옮김 → Content & Locales Voice samples (lines 466–468) · 분리 → provenance | Byte-exact (A5), under the source's own header phrase "verbatim from live surfaces" at line 464. The per-sample `(verified live 2026-06-26)` annotations went to provenance Freshness (prov 36) and the claim ledger (prov 161). |
| §10 Forbidden register | 옮김 → Content & Locales (line 484) | `"revolutionary"`, `"game-changing"` byte-exact on the same line, under an adjacent qualification because the exclusion list is the record's editorial rule. |
| §11 Brand Narrative — company facts | 옮김 → Experience Scope (line 9) · 분리 → provenance | Founded 2017, Seoul, June Paik (백준호, CEO), Warboy (Gen 1, vision), RNGD ("Renegade") as a Tensor Contraction Processor. Carried with the source's own evidence class — widely documented public knowledge, not a quoted FuriosaAI statement — which is also at prov 115 and prov 167. |
| §11 interpretive reading ("industrial monochrome (black and white bands)", refuses/embraces, the 2026 "Renegade" summit posture) | 옮김 → Experience Scope (line 15) | Qualified adjacently (B2a). |
| §12 Principles (5, with UI implications) | 옮김 → Experience Principles (lines 51–55) | Qualified at line 49 with the full evidence-class limitation. The source itself labels "one red means action" as an editorial reading; that is at prov 116 and prov 174. |
| §13 Personas (3 named fictional archetypes) | 삭제 | Fictional biography (D2). Not promoted and not re-recorded in provenance, not even as names or cities — grepped for all three names across the three files, 0 hits. The source's own disclaimer names group-level audiences (ML infrastructure engineers, data-center architects, Korean deep-tech investors and recruits); those survive at line 32 because the source states them as publicly observable groups rather than as biography. The disposition and the two strings that went with the personas are at prov 189. |
| §14 States (7 rows) | 옮김 → Components & States State treatments (table rows 225–231) | Body preserved in full (A2), qualified at line 221 as derived editorial inference composing values established elsewhere. The negative example `"required"` is byte-exact at line 229. The `Form (focus)` row keeps its `#e21500` treatment as a generic-focus observation and is not promoted into any `focus-visible` row (B1) — the per-component note is at line 345. |
| §15 Durations (3 tokens) | 옮김 → Foundations Motion (table rows 145–147) | `120ms` / `220ms` / `360ms` with their uses, each verified present, framed at line 141 as stated by the record rather than computed. |
| §15 Easings — three exact `cubic-bezier` curves | 삭제 (값) · 분리 → provenance omission ledger | The curves carry no attribution in the source, whose §15 sits inside the layer the source itself titles "OmD v0.1 Sources — Philosophy Layer (sections 10–15)", and `ease-exit` repeats the value in the legacy authoring template at `spec/omd-v0.1.md:262`. All three curve strings are recorded verbatim at prov 190; the token names and uses stay in the body (table rows 153–155), so only the unattributed value is dropped. |
| §15 Motion rules + reduced motion | 옮김 → Foundations Motion (line 157) | Both the reduced-motion rule and the motion character sit inside one adjacent qualification that names both, so neither escapes it. `prefers-reduced-motion: reduce` and `motion-standard / ease-enter` byte-exact. |
| §15 promotion condition | 신설 근거 규칙 → Foundations Motion (line 159) | B3 is written out in full at line 159, verified by reading the line: transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component computed-observation gate and the "official documentation of a single curve or duration is not that gate" clause. This row claims only what line 159 actually contains (E2c). |
| Trailing HTML sources comment (surface list, token-claim attribution, voice-sample attribution, narrative class, persona class, interpretive class) | 분리 → provenance · 한정은 본문 유지 | provenance Raw live-inspect record (prov 109–116) and Evidence-class boundaries (prov 171–177). The evidence-class limits themselves are also written into the body beside the sentences they qualify — the ledger moves out, the qualification stays portable (E1). |

## Sibling file (E2 / B1)

`web/references/furiosaai/.verification.md` **exists** — confirmed with `find web/references/furiosaai/ -type f`, not with `ls` or a `*` glob, since a dotfile is invisible to both. **It was not adopted.** No value, count, DOM selector, structural classification, or published string was taken from it into any output.

Four sibling-derived leaks were present in the first draft and were removed before submission. All four were value-neutral to the token gate, which is exactly why they had to be caught by reading:

| Leak | What it asserted | Fix |
|---|---|---|
| `Width: ≈384px` on Blog Card, `Width: ≈420px` on Featured Card | The source states only a grid **range** ("≈384px–420px card widths", §5); the per-component split is a sibling measurement | Per-component width lines removed; the range stays in Layout (line 433) |
| "Computed on the RNGD product page" as the Modal Close default reason | The source never places the modal close on a surface; only the sibling does ("Modal Close button (rngd page)") | Reason changed to "Recorded as a default observation in this record" |
| "the official GitHub organization" in Scope | "official GitHub org" is sibling wording; the source lists the URL without describing it | Clause removed from the body; the URL and its zero-token status stay at prov 74 |
| "Access Program landing page" | "landing page" is sibling wording; the source's own term is "the Access Program surface" (§2) | Replaced with the source's term at lines 11, 25, 349 |

Measured after the fix — sibling-only items and their occurrence counts across the three outputs (`grep -o … | wc -l`, per file):

| Sibling-only item | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `Renegade 2026 Keynote` | 0 | 1 (named as not adopted) | 1 (this table) |
| `Tensor contraction, not matmul` | 0 | 1 (named as not adopted) | 1 (this table) |
| `FuriosaAI and Broadcom partner` | 0 | 1 (named as not adopted) | 1 (this table) |
| `div.category-label` | 0 | 1 (named as not adopted) | 1 (this table) |
| `section.cc-blogs` | 0 | 1 (named as not adopted) | 1 (this table) |
| `1440×900` | 0 | 1 (named as not adopted) | 1 (this table) |
| `54px` (nav-link height) | 0 | 1 (named as not adopted) | 1 (this table) |
| `×1255` / `×116` (font frequency scan) | 0 | 1 (named as not adopted) | 1 (this table) |
| `document.title` strings | 0 | 1 (named as not adopted) | 1 (this table) |
| "official GitHub org" | 0 | 0 | 3 (the leak table above) |
| "landing page" | 0 | 0 | 3 (the leak table above) |

Each `1` in the provenance column is a single mention inside the "Sibling verification file (not adopted)" section (prov 179–183), which exists to make the non-adoption visible rather than silent. No sibling item appears as a body fact, and none is used to classify a heading level, an element type, or a section role in `DESIGN.md` (B1).

The same reasoning was applied to the provenance claim ledger. The first draft carried a per-claim `Surface` column (home / rngd / blog / access) that the source does not support — the source attributes its token claims **collectively** to the live inspection and names a surface for only a handful of values. The column was rebuilt (prov 118–120): each row now carries the evidence class plus, in a separate column, only a surface the source itself names in §1, §2, or §4, with `—` everywhere else. The invented surface ids in the Surfaces table were likewise replaced by the source's own parenthetical descriptors (prov 44).

## D1a corrections

Two enumerations in the first draft named domains the source never establishes. Both were removed rather than reworded, because the defect was the claim, not its phrasing:

| Removed | Measured evidence |
|---|---|
| Scope sentence "No surface below stands as a proxy for a native app, an authenticated account area, or an offline or campaign context." | `authenticated` 0×, `offline` 0×, `campaign` 0×, `account` 0× in the source; the two `native` hits are both inside the word "alternative". Enumerating them asserted those domains exist but are unresolved (D1a) |
| Named-gaps bullet "license or distribution terms for `ABC Favorit` and `ABC Favorit Mono`" | `licen` 0×, `distribut` 0× in the source. The Font-evidence License row (line 175) stays, because it states what **this record** contains rather than asserting a brand domain |
| Assets sentence "No illustration or icon library is established." | `icon` and `illustration` appear in the source only as `type: favicon`; neither an icon nor an illustration domain is established |

Note on the removal path: the first of these was surfaced by the Core conformance checker, whose scope-claim negation guard fired on the sentence. The sentence was **deleted for the D1a defect**, not reworded around the checker (E3). Once the defective claim was gone the check passed on its own; no wording was tuned to satisfy it.

## State applicability decisions (C2)

Judged by role meaning, not by primitive name and not by capture completeness.

| Component | loading / error / success | Reason class |
|---|---|---|
| Primary CTA | applicable | The control commits the get-started step, which pends, can fail, and can confirm. |
| Access Program Text Field | applicable | A form field that submits and validates; the source's own §14 records `Form (error)` and `Success (form submitted)` for this flow. |
| Modal Close | not-applicable | Dismissing an overlay resolves in place; the control commits no operation that pends. Semantic reason, never absence of observation. |
| Skip-to-Content | not-applicable | The link moves reading position inside the same page; it commits no operation of its own. Semantic reason, never absence of observation. |
| Tertiary Link (on dark) | not-applicable | A destination link to the post index; navigation is not an action outcome. Semantic reason, never absence of observation. |
| Top Navigation Item | not-applicable | Active versus inactive is the item's whole meaning; navigation is not an action outcome. Semantic reason, never absence of observation. |
| Blog Card, Featured Card, Subtle Tile, News Badge, Technical Updates Badge | map omitted entirely | No interactive-kind evidence, so kind is not confirmed either way (C4). |

Counted in DESIGN.md with `grep -o … | wc -l`: 30 `| applicable |` rows and 12 `| not-applicable |` rows. `focus-visible` occurs 9 times — seven `applicable` rows and the two prose notes (lines 296, 345) that keep a generic-focus observation distinct from it. No `focus-visible` row carries a treatment value (B1).

## A5 — full published-string sweep (manual, because the machine check is nearly blind here)

The gate's `copy-loss` check builds needles only from contiguous non-Latin runs of 4+ characters. This source yields exactly **one** such needle (`퓨리오사`), so a gate PASS on that check says almost nothing about the 180 Latin strings. The sweep was therefore run by hand:

- **Extracted:** 181 distinct quoted strings from the source (backtick, straight-double, curly-double, and parenthesis pairs, 2–60 chars).
- **First pass:** 27 did not survive into any output.
- **Fixed: 26.** Twenty-one frontmatter `use:`/value strings were restored verbatim to a new provenance table (prov 81–107); five prose strings were restored byte-exact in the body — `"the action."` (line 15), `(e.g. the "Blog" heading, "See all posts")` (line 107), `` `#000000` vs `#ffffff` `` (line 435), `"this one matters."` (line 137), and "verbatim from live surfaces" (line 464) — and `백준호, CEO` (line 9) had its backticks removed so the source's byte sequence is intact.
- **Dispositioned, not restored: 1.** `") reserved for the featured story. Muted greys ("` is an extractor artifact: the parenthesis branch matched from the close paren of one §1 aside to the open paren of the next. It is not a published or source-authored string. Its actual content — the featured-story shadow and the muted greys — survives at lines 41, 133, 135, 100 and 101.
- **Final state:** 180/181 present in `DESIGN.md` or `provenance.md`; the single remainder is the artifact above.

## Checks run

| Check | Result |
|---|---|
| `node test-v2/tools/migrate-reference.mjs --brand furiosaai --gate-only` | `PASS`, problems 0, no `unchecked` entry |
| `inspectDesignMd` on the migrated `DESIGN.md` | `level: portable-core`, `portable_core: true`, reasons 0, failed checks 0 |
| Token bag diff (hex / px / rem / ms / pct), legacy → outputs | loss 0, invention 0 |
| Unitless line-height survival (A1a) | 7/7 present as ratios |
| §9 uniqueness diff before deletion (A3) | 0 token values and 0 quoted strings occur only in §9 |
| A5 Latin + non-Latin sweep | 181 extracted, 180 surviving, 1 dispositioned artifact |

Gate PASS is recorded here as a fact about the run, not as evidence of fitness: this gate has previously passed A5 losses, narrow ledgers, false log destinations, and B1 classification promotions. The four sibling leaks and three D1a defects above were all found by reading, under a green gate.

DONE migrated=1

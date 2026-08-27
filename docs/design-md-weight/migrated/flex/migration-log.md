# flex migration log

Source: `web/references/flex/DESIGN.md`
Destination: `docs/design-md-weight/migrated/flex/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/flex/provenance.md`
Date: 2026-08-26
Worker: opus5 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v10**
Gate: `node test-v2/tools/migrate-reference.mjs --brand flex --gate-only` — result at the end of this file, with the reason it is not conformance evidence.

## A5 — brand-published strings

**The source `DESIGN.md` contains no non-Latin character.** Measured: the contiguous CJK/Hangul/Kana scan over `web/references/flex/DESIGN.md` returns 0 runs. The gate's `copy-loss` check only builds needles from non-Latin runs, so it is inert for this reference and **every A5 judgment below was made by hand.**

(The sibling research file `web/references/flex/_research.md` does hold Korean voice samples — `근본부터 해결`, `한 곳에 모아 연결`, `효율을 넘어 더 큰 성장`. That file is not the migration source and states on its own terms that the catalog does not transcribe verbatim taglines. Nothing from it is carried, and nothing from it was lost by this migration.)

### The company name

The catalog `name` is the lowercase `flex`, so the H1 is `# flex Design System` and the lowercase form opens Experience → Scope. The source itself writes the capitalized `Flex` in modifier position (`Flex webfont`, `Flex-hosted`, `Flex components`, `Flex says it was established in 2019`); the portable body follows the same split rather than normalising either way, and Scope says so in one sentence so a standalone reader is not left guessing. `grep -oF 'flex Design System' DESIGN.md | wc -l` = 1. The published service name `flex service` is carried lowercase, byte-for-byte: `grep -oF 'flex service' DESIGN.md | wc -l` = 1.

### Latin published strings

Every quoted or bolded Latin string in the source was extracted programmatically (133 distinct) and searched across the two outputs. Counts are `grep -oF '<string>' <file> | wc -l` — occurrences, not lines; `grep -c` would report matching lines and is not used anywhere in this log.

| String | Body count | Body lines | Note |
|---|---:|---|---|
| `Relations Driven AX` | 5 | 13, 15, 99, 309, 319 | The brand thesis. The source's blockquote form `Relations Driven AX.` carries a sentence period; the blockquote is quoted in full in `provenance.md` |
| `Human Relations` | 4 | 13, 99, 310, 317 | |
| `Human Resources` | 1 | 310 | The term the reframing redefines; kept beside `Human Relations`, not replaced by it |
| `flex` (service name) | 1 | 319 | `launched its flex service in 2020` |
| `new` (badge label) | 6 | 87, 121, 263, 265, 273, 311 | Component `Label:` field, Role line, heading, Shape table, colour role, Content & Locales |
| `one ink / graphite card` | 1 | 13 | The source's own name for the earlier expression |
| `Pretendard Variable` | 5 | 73, 145 ×2, 153, 154 | |
| `Pretendard` (the declared static fallback) | 9 total for the token `Pretendard`, of which 5 are inside `Pretendard Variable` | 73 ×2, 145 ×3, 147, 153, 154, 155 | Declared-only face; never rendered as the verified family. The four standalone occurrences are the declared stack (145), the declared-but-unused row (147), and the two rules at 155 and in Avoid item 3 (73) |
| `system-ui` | 2 | 145, 147 | |
| `static.flex.team` | 1 | 146 | |
| `guide.flex.team` | 4 | 11, 101, 149, 378 | One of the four is the full `https://guide.flex.team/en/` |
| `AI transformation` | 1 | 329 | The source's own quoted phrase inside its Don't row |

The extraction was run twice. On the first pass **42** of the 133 did not survive verbatim in either output; each was classified, and the classification turned 22 of them into fixes rather than justifications. After the fixes **20** remain, and both remaining classes are recorded rather than lost.

| Class | First pass | After fixes | Disposition |
|---|---:|---:|---|
| YAML claim-ledger key paths (`tokens.colors.ink`, `tokens.rounded.cta`, `tokens.components.relationship-story-card.bg`, …) | 24 | 19 | 분리 → `provenance.md` → Claim ledger, in the grouped form the approved musinsa ledger uses (`tokens.colors.canvas / ink / on-dark / action-lime / announcement-orange`). Every path and its anchor is recoverable from the group. None is a brand-published string. The five `…use` paths left this class when the `use` strings were quoted verbatim in the ledger |
| Punctuation-bearing duplicates (`Relations Driven AX.`, `Human Relations,`) | 2 | 1 | The strings themselves survive 5× and 4× in the body; only a trailing sentence period or comma differs. The blockquote carrying `Relations Driven AX.` is now quoted in full in `provenance.md`, so only `Human Relations,` remains, and it differs from a surviving string by one comma |
| Component `use` and variant strings | 5 | 0 | **Fixed, not justified.** The four `Variant:` labels (`Light-surface secondary action`, `Light-surface primary action`, `Primary conversion`, `Default`) are now verbatim fields on their components, and the story card's `Role` line is now its source `use` string verbatim. All nine `use` strings are also quoted in `provenance.md` |
| Uppercase hex forms `#00FF44`, `#FF4D00` | 2 | 0 | Normalised to the YAML record's lowercase in the portable body, and both forms now recorded in `provenance.md` → Hex letter-case so the normalisation is visible rather than silent. No digit changed. E3: this is not gate evasion — the gate lowercases hex and never saw either form |
| Source §3 bold sub-labels (`Live loaded Flex webfont:`, `Declared but unused fallback:`, `Measured public hierarchy:`, `Documentation chrome:`) | 4 | 0 | 옮김 → Typography & Assets Font evidence table, whose first column carries the evidence class instead of the bolded label; the label forms are now quoted in `provenance.md` |
| Footer labels (`Verified:`, `Tier 1 sources:`, `Tier 2 sources:`, `Pipeline:`, `Catalog position:`) | 5 | 0 | 분리 → `provenance.md`, now quoted in full including the pipeline string `omd:add-reference UPDATE (3-tier reconcile)` and the position string `KR · saas · HR-data/AI platform` |

Re-measured after the fixes: 133 distinct strings, **20** absent from both outputs, all in the two classes above.

### Multi-destination published strings and values (E2a)

Line numbers in `DESIGN.md`, measured with `grep -noF`.

| Value | Portable locations | Also in provenance |
|---|---|---|
| `Relations Driven AX` | Scope (13), Scope's qualified characterization (15), Evidence-domain boundary (99), Brand-published lines (309), Recorded narrative (319) | yes — blockquote quoted in full |
| `Human Relations` | Scope (13), Evidence-domain boundary (99), Brand-published lines (310), Recorded narrative (317) | no |
| `new` | Semantic color (87), Shape (121), component heading (263), Role (265), `Label:` (273), Brand-published lines (311) | yes — `use` string table |
| `#000000` | Semantic color Black field (83), Announcement Badge text (269) | yes — Identity `primary_color` |
| `#ffffff` | Capture-bound application (61), Semantic color (85), contrast pairings (93 ×2), outline nav background (200), solid nav text (224) | no |
| `#111111` | Distinctive traits (43), Capture-bound application (61), Semantic color (84), contrast pairings (93 ×3), outline nav text (201), outline nav border (202), solid nav background (223), lime CTA text (247) | no |
| `#00ff44` | Scope characterization (15), Distinctive traits (43), Principle 3 (53), Capture-bound application (62), Semantic color (86), contrast pairings (93), lime CTA background (246) | no |
| `#ff4d00` | Semantic color (87), badge background (268) | no |
| `guide.flex.team` | Scope (11, as the full `/en/` URL), Evidence-domain boundary (101), Font evidence (149), Named gaps (378) | yes — Tier 1 list |
| `2026-07-13` | Scope (11), Avoid item 1 (71), Evidence-domain boundary (97), Capture record (189), Brand-published lines (307) | yes — Identity, Freshness, Surfaces, Sources |
| `8px` | Distinctive traits (45), Capture-bound application (63), Spacing (109 ×3), Shape (120), Capture record focus rule (193), both nav actions' radius (203, 225) and padding (204, 226), badge padding (271), Layout (295 ×3). 15 occurrences, counted with a preceding-digit guard so that the `18px` badge radius (121, 270) and the `48px` strip height (267, 294) are not miscounted as `8px` | no |
| `24px` | Distinctive traits (45), Capture-bound application (63), Shape (122), Capture record focus rule (193), lime CTA radius (248), story card padding (286), Layout (297) | no |
| `96px` | Scope (13), Distinctive traits (44), Principle 4 (54), Capture-bound application (64), Type roles (163 ×2, 164), the surface-local note (171), Layout (296 ×3) | no |
| `1440` | Layout (294, 298), Named gaps (374) | no |
| Favicon slug | Typography & Assets → Imagery and assets (179) | yes — Identity |

## Section-by-section disposition

The source uses a 16-section layout, not the 15-section legacy order, so each row names the source's own heading.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML `id` / `name` / `country` / `category` | 분리 → provenance Identity | Portable file carries no frontmatter. `name` `flex` is dual (E2a): the ledger + the H1 and Scope. `id`, `country`, `category` are ledger-only. The category value `saas` never appears as a field value in the body; the one case-insensitive hit at line 42 is the source's own §1 phrase "generic SaaS decoration", which is prose, not the field |
| YAML `homepage` `https://flex.team` | 옮김 → Scope + Evidence-domain boundary; 분리 → provenance Identity / Surfaces / Sources | Dual (E2a). Scope names the inspected route `https://flex.team/`; the boundary section names the site `flex.team` |
| YAML `primary_color` `#000000` | 옮김 → Foundations Semantic color (83) + Announcement Badge text (265); 분리 → provenance Identity | Dual (E2a). The badge text value and the primary-colour entry are the same hex recorded for two purposes; both are stated |
| YAML `logo` (`type: favicon`, Google s2 slug, `sz=256`) | 옮김 → Typography & Assets Imagery and assets (179); 분리 → provenance Identity | Dual (E2a). The portable line records it as a third-party favicon proxy rather than a captured first-party mark. No Named-gaps row was invented for a first-party logo-file absence |
| YAML `verified` `2026-07-13`, `omd: "0.1"` | 분리 → provenance Identity / Freshness | `omd: "0.1"` is ledger-only (`grep -oF 'omd' DESIGN.md \| wc -l` = 0). The date is multi-destination — five portable locations, listed above |
| YAML `verification_v2` (schema, checked, surfaces, sources, conflicts, claims, anchors) | 분리 → provenance Freshness / Surfaces / Sources / Claim ledger | Evidence ledger. All 33 claim keys and both anchors are transcribed; `method: live-inspect` reaches no portable line (`grep -oF 'live-inspect' DESIGN.md \| wc -l` = 0) |
| YAML `tokens.source: reconciled`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance Identity / Proof notes | `reconciled` is ledger-only. `components_harvested` is dual: the ledger + the portable Capture record, which states the fact as prose rather than as a field name |
| YAML `tokens.colors` (5) | 옮김 → Foundations Semantic color | All five, with the source's role names. `canvas` and `on-dark` share `#ffffff` and are kept as two roles, not merged (A4) |
| YAML `tokens.typography.family.ui` | 옮김 → Typography & Assets Family (153–154) | `Pretendard Variable` as the sole family token, on the source's own evidence reasoning |
| YAML `tokens.typography.*` (4 roles × size/weight/lineHeight/use) | 옮김 → Typography & Assets Type roles table | All four roles. Unitless line heights preserved as ratios (A1a): `1.00`, `1.20`, `1.55` appear byte-for-byte at lines 163/166, 164, 165 |
| YAML `tokens.spacing` (4) | 옮김 → Foundations Spacing table | `compact` 8, `nav-action-x` 14, `cta-y` 30, `cta-x` 44, each with the element it was measured on |
| YAML `tokens.rounded` (3) | 옮김 → Foundations Shape table | `nav` 8, `badge` 18, `cta` 24 |
| YAML `tokens.components.relationship-story-card` (6 fields) | 옮김 → Components & States Relationship Story Card (278–289) | **A3.** This component exists only in the YAML record — the source has no `##` body entry for it — and would have been lost with the frontmatter. Its `type: card` is preserved as a `Type:` field (A1b), its `use` string is its `Role` line verbatim, and its `bg` / `border` / `radius` / `padding` are its component fields. The border and fill are also named in Foundations → Elevation as the only surface treatment in the record |
| Opening blockquote (`**Relations Driven AX.**`, observation marker, platform summary) | 옮김 → Experience Scope; 분리 → provenance | Dual. The thesis and the marker are facts in Scope; the black-and-white / acid-lime characterization is carried under the qualification at line 15. The blockquote is also quoted in full in the ledger |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Product description, surface scope, and the `one ink / graphite card` boundary are facts (9–13). The register/palette reading and the four trait bullets carry the qualification (15, 40) |
| §2 Layout & Grid | 옮김 → Layout & Platforms (292–300); values also → Foundations Spacing / Shape | Multi-destination. The five bullets are carried as written. The 8px / 14px / 24px / 30px / 44px values are also token rows in Foundations; the 48px strip height, 60px strip padding, and 1440px viewport live only in Layout, and Foundations → Spacing says so at line 114 |
| §3 Color tokens | 옮김 → Foundations Semantic color (81–93) | All seven entries including the three `rgba()` opacity tones. The "observed marketing accents … neither is promoted as a product-app status color" constraint is kept verbatim in meaning |
| §3 Typography evidence classes | 옮김 → Typography & Assets Font evidence + Family + Type roles | The four evidence classes become table rows; 351 uses, 92 subset URLs, `static.flex.team`, the full declared stack, and the declared-but-unused resolution for static `Pretendard` and `system-ui` all survive |
| §4 Components (4 records) | 옮김 → Components & States | Each with background, text, border, radius, padding, font, variant label, and role. Capture selectors 분리 → provenance Capture selectors (`grep -oF 'data-omd-capture' DESIGN.md \| wc -l` = 0) |
| §4 closing note (only defaults; hover/pressed/focus/disabled/menu/dialog/form omitted) | 옮김 → Components & States Capture record (189) | Preserved as the capture boundary, and its state list is the basis for the first Named-gaps row |
| Mid-file footer (**Verified**, **Tier 1 sources**, **Tier 2 sources**, **Conflicts unresolved: none**) | 분리 → provenance Freshness / Sources / Tier 1 / Tier 2 | Grading vocabulary is ledger-only; the URLs and the date are dual and reach the portable body as prose |
| Mid-file note on the removed `#1D1D1F` / graphite / pill-service-card claims | 분리 → provenance Deletions + Canonical proof; 옮김 (rule only) → Experience Avoid item 1 | Dual disposition. `grep -oiF '#1d1d1f' DESIGN.md \| wc -l` = **0**; `grep -oiF '#1d1d1f' provenance.md \| wc -l` = **6**. The operative rule — do not reintroduce those components — survives at line 71 without the pipeline framing |
| §5 Iconography | 옮김 → Typography & Assets Icons (173–175) | "No icon token is promoted", with the source's own reason |
| §6 Imagery & Illustration | 옮김 → Typography & Assets Imagery and assets (177–182) | Three bullets; the marketing-illustration and story-framing readings carry the qualification at 182 |
| §7 Motion | 옮김 → Foundations Motion (130–134) | Merged with §15 — see below |
| §8 Accessibility | 옮김 → Foundations Semantic color (93) + Components & States Capture record (193) + Typography & Assets Family (155) | Split three ways by meaning. The two contrast pairings and the lime pairing go to colour; the focus-indicator rule goes to the capture record beside the state tables; the "static `Pretendard` / system fallback is not a Flex font role" rule goes to Family and to Avoid item 3 |
| §9 Content & Voice | 옮김 → Content & Locales Recorded narrative (317) + Voice reading (323) | The page-content description is fact; the "starts from organizational context rather than generic AI capability" and "direct and operational / declarative and explanatory" readings moved under the qualification during pass 1 |
| §10 Voice & Tone (adjectives + Do/Don't table) | 옮김 → Content & Locales Voice reading (321–334) | All four Do/Don't rows verbatim. The source's own "source-derived style description, not a license to reproduce Flex copy verbatim" boundary is kept at line 334 |
| §11 Brand Narrative | 옮김 → Content & Locales Recorded narrative (319) + Experience Scope (13) | Dual. The 2019 establishment, the 2020 `flex service` launch, the 2019–2021 / 2022–2024 / 2025–2027 progression, the HR redefinition, and the mission statement are all Flex-attributed and carry no qualification |
| §12 Principles (5) | 옮김 → Experience Principles (47–55) | All five with their UI implications, under the qualification at 49 plus an extra product-stance disclaimer on item 1 |
| §13 Personas | 옮김 → Experience Audience (28–36) | The source invents no fictional persona, so D2 removes nothing. The three official stakeholder groups are carried; their need statements carry the qualification at 32 |
| §14 States | 옮김 → Components & States Capture record (189–191) + the three state tables | **A2.** The full §14 content is preserved: no loading/error/empty/disabled/success observation for a Flex product workflow, zero interaction coverage, surface-theme variants as the only state-like observation, and the rule that they are not promoted as behavioural state specifications |
| §15 Motion & Easing | 옮김 → Foundations Motion (130–134) | Merged with §7, whose content it repeats. The merged text keeps both sentences' operative content and adds the B3 promotion gate — see the compliance note below |
| §16 Do's (5) | 옮김 → Experience Capture-bound application (57–65) | All five, under the qualification at 59 |
| §16 Don'ts (5) | 옮김 → Experience Avoid (67–75) | All five, under the qualification at 69 |
| Final footer (**Verified**, **Pipeline**, **Catalog position**) | 분리 → provenance | Quoted in full there. `grep -oF 'Pipeline' DESIGN.md \| wc -l` = 0, `Catalog position` = 0 |
| Sibling `web/references/flex/.verification.md` | **채택 (adopted)** → provenance Canonical proof; **승격 없음** | E2 sibling. Adopted as the ledger's proof section — method, artifact, bundle shape, seven raw samples, font-resolution table, component-provenance table, Tier 2 outcomes, and reconciliation notes are all transcribed. **No sibling-only value is promoted to a portable token**; the non-promoted list is explicit in `provenance.md` → *Sibling-only values, recorded here and not promoted*, with a 0-count grep for each |

## Named gaps check (D1a)

Every noun in Governance → Named gaps names a domain the source itself establishes. Verified by grep against `web/references/flex/DESIGN.md`.

| Named gap | Source basis |
|---|---|
| hover, pressed, focus, disabled, menu, dialog, form state treatments | §4 closing note: "The evidence bundle reports no interaction coverage, so hover, pressed, focus, disabled, menu, dialog, and form states are intentionally omitted" |
| loading, error, empty, success treatments for a Flex product workflow | §14: "No loading, error, empty, disabled, or success state was captured for a Flex product workflow"; §16 Don't names `loading` |
| an accessible focus indicator treatment | §8: "provide an accessible focus indicator in an implementation" |
| motion duration, easing, transition, scroll-trigger values | §7: "No duration, easing, transition, or scroll-trigger state was recorded"; §15 |
| container maximum, page section height, responsive breakpoint | §2 **Boundary**: "no container maximum, page section height, or responsive breakpoint is promoted" |
| a named icon library and any reusable icon size or weight rule | §5: "no named icon library or reusable icon-size/weight rule" |
| imagery crop ratio, overlay treatment, product-screen frame | §6: "No imagery crop ratio, overlay treatment, or product-screen frame is promoted" |
| a family token for each role in the measured public hierarchy | §3: "These sizes are retained as measured styles without assigning a family token" |
| values on the `guide.flex.team` Help Center | §3 **Documentation chrome**; §16 Do "Keep help-center chrome … out of this public-surface reference" |
| values for any logged-in Flex application surface | §16 Do "any unobserved logged-in application UI"; §12 principle 5 "unverified app surfaces" |

**No domain the source leaves unmentioned is listed.** In particular the list names no authenticated-account, native-client, campaign, parity, mobile-app, help-search, or locale domain, because the source establishes none of them as an existing-but-unresolved domain. Measured in the source: `native-client` = 0, `parity` = 0, `authenticated` = 0, `campaign` = 2 (§1 "campaign CTAs use 24px pills" and §16 "24px campaign CTA radii" — an observed treatment, not a gap, and it is not listed as one).

Also checked in the reverse direction: the portable body contains **0** sentences carrying a D1 trigger phrase (`not captured` / `were not` / `없었` / `않았다` / `미기록`), so no negative coverage sentence exists that could introduce source-absent vocabulary.

## C2 — state applicability by role

Five components are declared: three interactive with a full seven-state map, two non-interactive with a reason and no map. Measured: `grep -c '^| State | Applicability | Reason |' DESIGN.md` = **3** tables, `grep -c '^- Kind:' DESIGN.md` = **5** components, `grep -oF 'not-applicable' DESIGN.md` = 11 occurrences (9 table cells + 2 in the Capture record's applicability rule).

| Component | Kind | loading | error | success | Basis |
|---|---|---|---|---|---|
| Global Navigation Action — outline | interactive | not-applicable | not-applicable | not-applicable | A conversion action that hands off to another surface; the record shows no operation running on the control |
| Global Navigation Action — solid | interactive | not-applicable | not-applicable | not-applicable | Same role, primary variant |
| Marketing CTA — lime | interactive | not-applicable | not-applicable | not-applicable | The source names it a **link** twice (§2 "the observed lime action is a 24px-radius link"; §4 use "conversion link"), and C2 names a destination link as a role with no committing operation |
| Announcement Badge — new | non-interactive | — | — | — | No map. The source calls it a "label" and captures it on a `span`; the strip around it is the 48px-high link |
| Relationship Story Card | non-interactive | — | — | — | No map. The source's own `use` string declares it "Non-interactive" |

`default`, `hover`, `focus-visible`, and `disabled` are `applicable` on all three declared maps, with visual treatments omitted, because the source records defaults only. **Every `not-applicable` cell gives a semantic role reason and none cites absence of observation** — measured: rows matching a `not-applicable` cell followed by a non-observation reason = **0**. No `focus-visible` row carries a colour value: `grep -icE '^\|[^|]*focus-visible[^|]*\|[^|]*#[0-9a-f]{6}' DESIGN.md` = 0 (B1). The one occurrence of `focus-visible` in the source is §8's statement that the collector recorded no such state, so nothing was available to promote.

The C2 v10 reading was applied in both directions. The three interactive controls were **not** opened to loading/error/success just because they are controls; each was judged by its recorded role, and all three turned out to be hand-off roles, which is why the verdict is the same on all three rather than a blanket opening. The two non-interactive components were **not** closed by primitive shape either: each has the source's own word for its kind.

## E1 process-leak check

`node test-v2/tools/process-leak-check.mjs` → **flex absent from `detail`, 0 hits** (123 bodies scanned, 96 leaking; flex is not among them). Grep-verified at 0 occurrences in `DESIGN.md`: `Tier`, `provenance`, `source ledger`, `sidecar`, `golden`, `migration-log`, `catalog graph`, `omd-apply`, `Conflicts unresolved`, `Pipeline`, `Catalog position`, `reconciled`, `verification_v2`, `live-inspect`, `data-omd-capture`, `surface-2`. The only specification reference in the body is `Core §4.4`, which is the approved idiom. The brand's own URLs — `flex.team`, `guide.flex.team`, `static.flex.team` — are brand facts and stay in the body.

## Final passes

**Pass 1 (B2a).** The body was re-read from the top and every causal, interpretive, evaluative, or judgment sentence was classified as brand-published fact, recorded observation, or editorial reading. The source's own author-side evaluations count as readings. **Seven sentences failed that classification on the first read and were corrected before submission:**

| # | Location | Was | Now |
|---|---|---|---|
| 1 | Scope ¶3 (13) | "gives the brand's **Human Relations** reinterpretation of HR room to breathe in 80–96px type" | "sets the brand's **Human Relations** reinterpretation of HR in 80–96px type" — the measured fact without the author's flourish |
| 2 | Primary tasks (25) | "the company narrative it introduces" | "the company narrative on that page" — the source records both on `/about`; it records no introducing relation between them |
| 3 | Foundations → Semantic color (93) | "The reviewed material calls the first two high-contrast … it is not Flex-authored." | Qualification completed to the full form: "a derived editorial reading of the verified surfaces rather than a measured contrast ratio, and it is not Flex-authored or a separately published accessibility specification." B2a requires the evidence class to be closed, not merely named |
| 4 | Foundations → Spacing (109) | `compact` described as "the vertical half of the navigation action padding" | "The two conversion actions' `8px 14px` padding carries the same 8px vertically" — states the two numbers rather than asserting a token-to-element mapping the source never makes |
| 5 | Foundations → Elevation (128) | "The one captured depth treatment is on the relationship story card, which separates itself with a translucent fill …" | "One component carries a surface fill and border of its own: the relationship story card, at a translucent … fill with a … border" — the fill and border are measured; reading them as a separation strategy is not recorded |
| 6 | Content & Locales → Recorded narrative (317) | Opened with "The public narrative starts from organizational context rather than generic AI capability." | That comparative reading moved into the qualified Voice reading paragraph (323), where it now sits inside "In that reading …". Nothing was deleted |
| 7 | Content & Locales → Voice reading (323) | Framed "direct and operational" and "declarative and explanatory" as "the observed facts they rest on" | Those two characterizations moved inside the qualified clause, and the sentence now names the published lines and component values as the measured parts |

An eighth edit came out of the same pass but is a wording repair rather than a qualification: Typography & Assets → Type roles (159) said "the family column is filled only where the record assigns one" while no row assigns one; it now states plainly that the column stays empty on every row because the record assigns no family to these roles.

No token value, component-table value, or state applicability verdict was changed by any of the eight; all eight are sentence-level.

After the fixes, **nine** readings remain and each carries an adjacent complete qualification — `grep -o 'derived editorial' DESIGN.md | wc -l` = **9** and `grep -o 'not Flex-authored' DESIGN.md | wc -l` = **9**, on nine distinct lines: 15, 32, 40, 49, 59, 69, 93, 182, 323. The 1:1 map of occurrence to portable location is the *Portable derived-editorial scope* table in `provenance.md`.

The opposite error was checked too: no measured value or documentary fact was demoted by attaching a qualification to it. The colour roles, the spacing and radius scales, the type metrics and the three unitless ratios, the component fields, the capture selectors' measurements, the published strings, the surface URLs, the dated inspection, and the source-internal 14px/700-versus-13px/700 divergence all stand unqualified, because they are recorded values and document facts rather than readings. The divergence in particular is stated flatly ("both are preserved and neither is selected over the other") — that two source statements differ is a document fact, not an interpretation.

**Pass 2 (E2 cross-check).** Every row above was written after grepping the three output files, not from memory. Dual and multi-destination values name every destination. Counts are `grep -o … | wc -l` with the counted unit stated — occurrences, not lines. Two counts asserted in `provenance.md` were wrong on first write and were corrected against the measurement: `About-page relationship statement` is 2 in the body (Type roles and Primary tasks), not 1, and `Global navigation controls` is 1, not 2.

The pass also found the five paraphrased component `use` and variant strings recorded in the A5 table above, which were then made verbatim in the body rather than merely logged.

| Claim | Re-measured |
|---|---|
| Unitless line-height ratios `1.00` / `1.20` / `1.55` in the body (A1a) | 2 / 1 / 1 — at lines 163 and 166, 164, 165; present as ratios, with the px product beside them where the source gives one |
| `24.65` and `26.35px` (the body-emphasis measured range) | 1 / 1 in the body, both on line 165 |
| `15px` supporting copy, `1440px` viewport, `48px` strip, `60px` strip padding | 2 / 1 / 2 / 2 in the body — at lines 44 and 167; 294; 267 and 294; 114 and 294 — each was single-occurrence in the source and had no other slot (A3) |
| `type: card` (A1b) | Preserved as `Type: card` on the Relationship Story Card at line 282; `card` = 7 occurrences in the body (13, 45, 71, 124 ×2, 128, 282 — four of them are the source's own "card-radius"/"graphite card" phrases) |
| `link` as the Marketing CTA primitive | The source names it twice; the body carries `Type: link` at line 245 |
| `#1D1D1F` in the body / in the ledger | 0 / 6 |
| `Tier`, `provenance`, `live-inspect`, `data-omd-capture`, `surface-2`, `reconciled` in the body | 0 each |
| Sibling-only values in the body (`352`, `27 component variants`, `coverage score`, `interactionCount`, `artifacts/reference-evidence`, `state-hover`, `state-pressed`, `pretendard-variable/`, `OFL`, `#2D3338`, `52px`, `rgb(`, `Terra`) | 0 each |
| D1 trigger phrases in the body | 0 |
| coverage sentences in the body | 1 — "State coverage is not complete here" (191), negated, as required (C3) |
| `not-applicable` cells citing non-observation | 0 |
| Portable Core claim markers | 7, one each |

**B3 compliance, claimed only because the body carries it (E2c).** Foundations → Motion line 134 states all five evidence kinds — transition properties, animation name, duration, easing, reduced-motion behavior — plus the per-component computed-observation gate and the "a single named curve or duration is not that gate" clause. Verified by reading line 134, not from memory. There was no unattributed easing curve in this source to remove: `grep -oF 'cubic-bezier' web/references/flex/DESIGN.md | wc -l` = 0.

**D2.** Nothing to remove. The source explicitly declines to invent personas and names only official stakeholder groups; those groups are carried into Experience → Audience and no biography, demographic, or synthetic metric exists anywhere in the three outputs.

## Gate

`node test-v2/tools/migrate-reference.mjs --brand flex --gate-only` → **PASS**, `problems: []`.

Portable Core: `inspectDesignMd(...).conformance` from `scripts/design-md-core.cjs` → `portable_core: true`, `reasons: []`. Run separately from the gate, because the gate does not compare canonical claim bytes.

**The gate is not evidence of conformance for most of the above.** A5 is invisible to it here — the source has no non-Latin run, so `copy-loss` built zero needles and would have returned the same PASS if every Latin label had been paraphrased. D1a, C2, B2a, and E2 are sentence-level judgments the gate does not evaluate, and it returns the same PASS whether the qualifications are adjacent and complete or absent.

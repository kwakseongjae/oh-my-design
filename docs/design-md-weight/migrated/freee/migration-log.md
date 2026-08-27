# freee migration log

Source: `web/references/freee/DESIGN.md`
Destination: `docs/design-md-weight/migrated/freee/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/freee/provenance.md`
Date: 2026-08-26
Worker: opus5 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v10**
Gate: `node test-v2/tools/migrate-reference.mjs --brand freee --gate-only` — result recorded at the end of this file, with the reason it is not conformance evidence.

## A5 — brand-published strings

The catalog `name` is the lower-case Latin `freee`, so the H1 is `# freee Design System` and `freee` is the form the body uses in running prose, exactly as the source does. It is never title-cased. `grep -o 'Freee' DESIGN.md | wc -l` = 0.

### Japanese runs

The source publishes three Japanese lines and nothing else in Japanese — `grep -n '[ぁ-んァ-ヶ一-龥]' web/references/freee/DESIGN.md` returns 4 lines (§1 once, §10 three times), and the §1 occurrence is the mission line repeated. All three are carried into the portable body byte-for-byte, brackets included. Counts are occurrences, measured with `grep -oF '<string>' DESIGN.md | wc -l` — not `grep -c`, which reports matching lines.

| String | Body count | Note |
|---|---:|---|
| `スモールビジネスを、世界の主役に。` | 2 | Experience → Scope ¶1; Content & Locales → Brand-published lines |
| `だれもが自由に自然体で経営できる環境` | 1 | Content & Locales → Brand-published lines |
| `だれもが自由に経営できる統合型経営プラットフォーム` | 1 | Content & Locales → Brand-published lines |
| `スモールビジネスを` | 2 | substring of the mission line only; no standalone use |
| `世界の主役に` | 2 | substring of the mission line only; no standalone use |

The corner brackets `「` and `」` are preserved on all three lines; the Japanese is never unwrapped into a Latin gloss.

The one English rendering the source supplies alongside a published line — “Empower Small Businesses to Take Center Stage” for `スモールビジネスを、世界の主役に。` — is placed **beside** the Japanese in both of its portable locations and labelled a reading aid. Its curly quotation marks are preserved. `grep -oF 'Empower Small Businesses to Take Center Stage' DESIGN.md | wc -l` = 2, and every occurrence sits in the same sentence as the Japanese it renders. No published Japanese string is replaced by a translation.

### Latin-side check

The gate's `copy-loss` needle set sees contiguous non-Latin runs only, so the Latin side was checked by hand. Every Latin string the source quotes with backticks, straight quotes, or curly quotes was extracted (104 distinct strings) and searched across `DESIGN.md` and `provenance.md`. **Missing count: 0.** The strings that needed attention:

| String class | Where it survives |
|---|---|
| Font and face names — `Noto Sans JP` (16×), `Cherry Bomb One` (2×), `Coiny` (2×), `myfont` (2×), `swiper-icons` (2×) | portable Font evidence, Family, Measured public hierarchy, Avoid, and every component `Font` line |
| Selector strings — `home::[data-omd-capture="8"]`, `pricing::[data-omd-capture="17"]`, `pricing::[data-omd-capture="70"]`, `products::[data-omd-capture="37"]`, `home::div.fr-3ezzk7z2_kv_card`, and the three `::state-hover` / `::state-pressed` / `::state-focus` suffixes | portable component records, byte-for-byte; also in the provenance observation ledger |
| CSS class names — `.c-btn-primary` (2×) | portable Measured public hierarchy, both action rows |
| Collector strings — `interactionCount: 0` (1×), `@font-face` (2×), `FontFaceSet` (1×), `box-shadow: none` (2×), `1,371` (2×) | portable Capture record, Font evidence, Elevation, Distinctive traits |
| Licence and system names — `Apache-2.0` (4×), `Vibes` (14×) | portable Scope, Evidence-domain boundary, Historical system boundary, Font evidence, Principles, Avoid |
| Token `use` strings — "Observed public-site body text.", "Observed public primary and outline action.", "Observed public-site heading.", "Public header sign-up action only.", "Public pricing-page primary action only.", "Public home segment-selection card only." | portable Measured public hierarchy rows and component `Use` lines, verbatim |
| The 47 YAML claim keys (`tokens.colors.primary` … `tokens.components.segment-card.use`) | `provenance.md` → Claim ledger, transcribed literally rather than in brace shorthand. These are field names, not published copy; they were expanded to full literal strings so the ledger is byte-complete. |
| Personal name `Daisuke Sasaki` (1×) | portable Scope ¶1 |

## Sibling files — adoption decision (E2)

Three files sit beside the source in `web/references/freee/` in addition to `.verification.md`. Every one is named with an explicit decision; none is passed over in silence. The full decision table and the non-promotion inventory are in `provenance.md` → *Other siblings — adoption decision* and *Not promoted from README.md and _research.md*.

| Sibling | Decision | One-line reason |
|---|---|---|
| `.verification.md` (7,707 B, SHA-256 `26dfecab…551719c`) | **Adopted** into `provenance.md` | It is the proof record for the same 2026-07-13 pass that produced the source. Adoption stops at the ledger — no sibling-only value is promoted to a portable token. |
| `README.md` | **Not adopted** | It documents a superseded 2026-04-17 extraction whose Vibes-SCSS values the current pass explicitly removed. |
| `_research.md` | **Not adopted** | Same superseded extraction plus a 2026-04-20 Philosophy Layer the current source no longer carries; its own text marks parts of it inferred or illustrative. |
| `_research/vibes-storybook-1440px.png` | **Not adopted** | A screenshot from the same superseded pass; nothing was transcribed from it. |

**Promotion: none.** Every sibling-only value is ledger-only, and each is grep-verified at 0 occurrences in `DESIGN.md`. The eleven checked strings: `0px 12px`, `29px`, `g-headerNav_listItem`, `surface-2`, `surface-3`, `_noto_fonts`, `sans-serif`, `playwright_cli`, `score 83`, `84 component variants`, `reference-evidence`. The non-adopted-sibling strings checked at 0: `a11y-guidelines`, `brand.freee.co.jp`, `speakerdeck`, `developers.freee.co.jp`, `@freee_jp/vibes`, `vbPrimaryColor`, `vbCardShadow`, `4dp`, `1120dp`, `768dp`, `freee-logo`.

One value needs a distinction rather than a flat count. `#285ac8` **is** in the portable body (2 occurrences, lines 13 and 60) — but it arrives from the **source**, whose §1 and §7 both name it as the historic Vibes value that must not be substituted for the live `#2864f0`. It is not promoted from `README.md`, which uses the same hex as a *current* brand colour. Same bytes, opposite claim; the source's claim is the one carried.

Likewise `スモールビジネスを、世界の主役に。` appears in `_research.md` and in the portable body, but it crosses from the current source's §10, which carries it with a verification marker. Its presence is source-backed, not sibling-backed.

## Section-by-section disposition

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML `id` / `name` / `country` / `category` | 분리 → provenance Identity | Portable file has no frontmatter. `name` `freee` is dual (E2a): the ledger + the H1 and every portable sentence naming the company. |
| YAML `homepage` `https://www.freee.co.jp` | 옮김 → Experience Scope + Foundations Evidence-domain boundary; 분리 → provenance Identity / Surfaces / Sources | Dual-destination (E2a). Scope names the three inspected routes in full; the boundary list names the site as `www.freee.co.jp`. |
| YAML `primary_color` `#2864f0` | 옮김 → Experience Scope, Distinctive traits, Avoid, Foundations Semantic color, and four component records; 분리 → provenance Identity | Multi-destination, grep-verified at 11 occurrences on 11 lines: 13, 35, 60, 70, 173, 175, 200, 202, 229, 230, 254 (E2a). |
| YAML `logo` (`type: github`, `slug: freee`) | 옮김 → Typography & Assets Assets; 분리 → provenance Identity | Dual (E2a). Both field values appear in the portable Assets line, recorded as an organization-account reference rather than a captured first-party mark. No Named-gaps row was invented for a first-party logo-file absence (D1a). |
| YAML `verified: 2026-07-13`, `omd: "0.1"` | 분리 → provenance Identity / Freshness | Ledger-only. `grep -oF '2026-07-13' DESIGN.md | wc -l` = 0. |
| YAML `ds:` block (`name` / `url` / `type: system` / `description`) | 분리 → provenance Identity; 옮김(부분) → Experience Scope, Foundations Evidence-domain boundary, Historical system boundary, Font evidence | Ledger metadata kept as values (A1c). `Vibes` and `https://vibes.freee.co.jp` are dual (E2a) — the official design system's own published address is allowed in the body. `type: system` and the `description` string stay ledger-side; their substance ("official open-source design system", accessibility-focused frontend-development materials) is in the body. |
| YAML `verification_v2` (schema, checked, surfaces, sources, conflicts, 47 claims) | 분리 → provenance verification_v2 block + Claim ledger + Surfaces + Sources + Freshness | Source ledger and freshness (E1). The single `&live` anchor and its consequence — `surface_id: home` on all 47 claims, including ones the prose attributes to pricing and products — are recorded without rewriting either side. |
| YAML `tokens.source` / `extracted` / `components_harvested` | 분리 → provenance Identity + Freshness + Proof notes | Ledger fields kept as values (A1c). `components_harvested` is dual (E2a): Identity + Proof notes; the portable Capture record states the same fact as prose. `live-extract` is 0 in the portable body. |
| YAML `tokens.colors` (8 roles) | 옮김 → Foundations Semantic color; 분리(원장) → provenance Token record | Dual (E2a). All eight roles, values, and role descriptions land in Foundations; the ledger table restates each with its portable destination. |
| YAML `tokens.typography` (family + 3 roles with `lineHeight: 1.5`) | 옮김 → Typography & Assets Family + Measured public hierarchy; 분리(원장) → provenance Token record | The unitless `1.5` is preserved as a ratio (A1a) beside the source's own px figures: `21px (1.5)`, `24px (1.5)`, `60px (1.5)`. `grep -oF '1.5' DESIGN.md | wc -l` = 4 — three role rows plus the sentence naming the ratio. The three `use` strings are carried verbatim into the same rows. |
| YAML `tokens.spacing` (4 / 20 / 10 / 16) | 옮김 → Foundations Spacing + Layout & Platforms; 분리(원장) → provenance Token record | Kept as unitless pairs beside the measured `4px 20px` and `10px 16px`, so the token form and the measured form both survive. |
| YAML `tokens.rounded` (5 / 8) | 옮김 → Foundations Shape + Layout & Platforms; 분리(원장) → provenance Token record | Stated as 5px and 8px with the source's own "not a universal radius scale" limiter. |
| YAML `tokens.components` (3 components) | 옮김 → Components & States, field for field; 분리(원장) → provenance Token record | `type: button` ×2 and `type: card` ×1 are preserved per component (A1b): `grep -o 'Type: button' DESIGN.md | wc -l` = 2, `grep -o 'Type: card' DESIGN.md | wc -l` = 1. Every `bg` / `fg` / `radius` / `padding` / `font` / `hover` / `use` value lands in its component record. |
| §1 Visual Theme & Atmosphere ¶1 | 옮김 → Experience Scope ¶1 | Mission, founding date, CEO, integrated-platform framing, and the Japanese mission line with its English rendering beside it. |
| §1 ¶1 inline Mission / Company URLs | 분리 → provenance Sources / Tier 1 | Narrative source ledger (E1). `corp.freee.co.jp` is 0 in the portable body. |
| §1 ¶2 (Vibes boundary) | 옮김 → Experience Scope ¶3 + Foundations Historical system boundary | The `#285ac8`-is-not-`#2864f0` rule and the no-generalization rule. The two Vibes URLs are dual: body + ledger. |
| §1 four-bullet trait list | 옮김 → Experience Distinctive traits | The source's own four bullets, with the hexes attached. |
| §2 Observed public-site roles | 옮김 → Foundations Semantic color | All eight bullets including the two "snapshot… not a motion contract / not a universal state token" limiters. |
| §2 Historical system boundary | 옮김 → Foundations Historical system boundary | Apache-2.0, "historical and design-system source", and the omit-rather-than-infer rule. |
| §3 Evidence classes (4 classes) | 옮김 → Typography & Assets Font evidence | Four-row table. The "Official product-use" row is absent because the source has no such class; nothing was invented to fill a fifth row. |
| §3 Measured public hierarchy | 옮김 → Typography & Assets Measured public hierarchy | Four roles with sizes, weights, line heights, and evidence boundaries, plus `.c-btn-primary` on both action rows. |
| §3 anti-substitution rule | 옮김 → Typography & Assets Family | "Do not render a declared Google font, an icon face, or a system fallback as though it were Noto Sans JP." |
| §4 preamble (`interactionCount: 0`, three pseudo-state kinds) | 옮김 → Components & States Capture record | Including "visual samples, not proof of transition timing, keyboard behavior, or a complete state model". |
| §4 Header action / Page actions / Segment card / Product-category card | 옮김 → Components & States, five component records | Four with a Core §4.4 applicability map, one (Segment-selection Card) with `Kind: omitted` under C4. Hover / pressed / focus snapshots are kept as component fields with their `::state-*` selectors. |
| §4 closing paragraph | 옮김 → Components & States "Outside these records" | The unspecified-component list, verbatim in substance. |
| §5 Layout Principles | 옮김 → Layout & Platforms | Both paddings, the 5px/8px limiter, and the desktop-only limiter. Rendered heights (31px, 48px ×2, 103px, 186px) are collected there with an explicit measurement boundary. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | `box-shadow: none` scope and the Vibes-shadow-recipes boundary. |
| §7 Do (3 items) | 옮김 → Experience Capture-bound application | Application rules, with the B2a qualification on the list head. |
| §7 Don't (3 items) | 옮김 → Experience Avoid | Boundary prohibitions, with the B2a qualification on the list head. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms, final paragraph | The no-breakpoint record plus the collect-before-adding rule, reworded to drop the pipeline noun "re-verification" (E1) without changing the rule. |
| §9 Agent Prompt Guide | **삭제** — with one A3 rescue | The three prompt strings are tool-shaped copy-and-paste wrappers with no receiving slot. Grep-checked value by value: `#2864f0`, `#323232`, `#595959`, `#ebf3ff`, `16px`, `700`, `8px`, `10px 16px`, `2px`, and `Noto Sans JP` all exist independently in Foundations, the Measured public hierarchy, or a component record. **The one rule that existed only in §9** — use `#ebf3ff` only in the observed segment-card context, and add no unobserved status colour — was **moved to Foundations → Semantic color** (line 81) with a B2a qualification, not deleted. The accounting-app boundary in §9's first prompt ("not an accounting-app control") is carried in the Foundations evidence-domain boundary and in the Capture record. |
| §10 intro paragraph | 옮김 → Content & Locales Voice reading | Including the source's own limiter that this is an editorial application of the mission and not a captured product copy guide, completed to the B2a form. |
| §10 Do / Don't table | 옮김 → Content & Locales Voice reading | All three rows, verbatim, with an added domain boundary (not a freee-published policy; asserts nothing about accounting or tax guidance). |
| §10 three voice samples | 옮김 → Content & Locales Brand-published lines | Byte-for-byte, brackets included (A5). |
| §10 `<!-- verified: … -->` markers | 분리 → provenance Sources / Freshness | Verification-record markers (E1). The body says the reviewed material marks the first two as mission-page lines and the third as a vision framing, without the marker syntax, URLs, or dates. The `corp.freee.co.jp/vision/` marker's absence from the source's own `sources` list is recorded in provenance as an evidence note. |
| §11 Brand Narrative | 옮김 → Experience Scope ¶1 and ¶3 | Founding date, CEO, integrated-platform framing, the live-surface-versus-private-application boundary, and the 2023 Vibes release with its "not authority to reclassify" limiter. Its four URLs → provenance. |
| §12 Principles (3, each with a UI implication) | 옮김 → Experience Principles | All three with their `*UI implication:*` labels, under the B2a qualification, plus an added clause that item 1 says nothing about how freee's accounting, HR, payroll, or approval product behaves. |
| §13 Personas | 옮김 → Experience Audience | The `[FILL IN]` token is dropped; the prose beside it is preserved — no persona research, no product-user interviews, and the instruction that synthetic users are never created as evidence (D2). No fictional persona is promoted here or re-hosted in provenance. |
| §14 States | 옮김 → Components & States Capture record + per-component applicability | Body preserved (A2): the pseudo-state-snapshots-but-no-state-model sentence and the add-a-state-only-after-recording-its-selector-and-surface rule. Four declared controls close the Core §4.4 seven-state map; the fifth declares no map under C4. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Body preserved: no interaction event, no timing data, and hover/focus/pressed images not establishing duration, easing, or reduced-motion behavior. The B3 five-kind promotion gate is stated in full — see the compliance note below. The source carries no cubic-bezier value, so there was no unattributed curve to omit. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts unresolved | 분리 → provenance Freshness / Sources ledger | Freshness and source ledger (E1). `Tier 1`, `Tier 2`, `getdesign`, and `refero` are each 0 in the portable body. |
| Legacy H1 `# Design System Inspiration of freee` | 삭제 → replaced | Core requires `# <name> Design System`; the published lower-case `freee` is kept. |

## Conflict preserved, not resolved

The source's footer says "Conflicts unresolved: none" and `verification_v2.conflicts` is `[]`, but the source assigns the pricing primary action's hover and pressed snapshots two different value pairs:

| Source location | Hover | Pressed |
|---|---|---|
| §2 Color Palette + YAML `tokens.colors.primary-hover` / `primary-pressed` | `#2863ef` | `#245ad9` |
| §4 Page actions → Primary + YAML `tokens.components.primary-action.hover` | `#2863ee` | `#2762ec` |

Both pairs are carried in the portable body — `#2863ef` and `#245ad9` in Foundations → Semantic color, `#2863ee` and `#2762ec` in the Page Action — Primary record — the disagreement is stated below that component's field list, and it is named in Governance → Named gaps. Neither side is selected (Core v2 §10: conflicts are preserved as conflicts). The header action has no such disagreement; both source locations give `#2761e8`.

## C2 — state applicability by role meaning

Four controls declare a Core §4.4 map; one declares none. No `not-applicable` cell anywhere cites a missing capture — `grep -n "not-applicable" DESIGN.md | grep -icE "not captured|not observed|미관측|no capture"` = 0.

| Component | loading | error | success | Role reason |
|---|---|---|---|---|
| Header Action — Primary | not-applicable | not-applicable | not-applicable | A public marketing entry action; it opens the sign-up path rather than running an operation in place |
| Page Action — Primary | not-applicable | not-applicable | not-applicable | A public marketing page action; it leads onward, and nothing resolves on the control |
| Page Action — Outline | not-applicable | not-applicable | not-applicable | Same role, secondary weight |
| Product-category Card — Outline | not-applicable | not-applicable | not-applicable | The source names it a category **link**; a destination role, which C2 lists by name |
| Segment-selection Card — Tinted | — | — | — | No map declared: the source records `type: card` with no interactive-kind evidence (C4). It is not recast as a control, and the primary-tasks list correspondingly does not claim a segment-selection task. |

`default`, `hover`, `focus-visible`, and `disabled` are `applicable` on all four maps. `focus-visible` carries no value on any of them: the source contains no `focus-visible` string (`grep -o 'focus-visible' web/references/freee/DESIGN.md | wc -l` = 0), so the three recorded focus snapshots stay in the component field lists as generic focus captures and never enter a `focus-visible` row (B1). Machine-checked: 0 focus-visible table rows carry a hex.

The uniformity of the three `not-applicable` columns is itself explained in the body rather than left as an unexplained pattern: every control this capture harvested is a public marketing entry or destination control, which is why the same role reason recurs. That reading, and the verdicts built on it, carry an adjacent B2a qualification at line 162, and a domain boundary at line 164 stating that none of the verdicts describes a control inside freee's accounting, HR, payroll, or approval product.

## D1a — Named gaps checked against the source

Each of the eight Named-gaps rows names a domain the source itself establishes. Grep-verified against `web/references/freee/DESIGN.md`:

| Named gap | Source establishes it at |
|---|---|
| authenticated accounting / HR / payroll / approval product screens and documentation chrome | §1 ("authenticated accounting, payroll, or documentation product UI"), §3 ("no authenticated product screen or documentation chrome was included"), §4 ("No authenticated-app fields…"), §9 ("not an accounting-app control") |
| error / loading / success / empty / disabled / dialog state treatments | §14, and §4's closing list |
| status colors, product-dashboard tables, status badges, form states | §4 closing list, §7 Don't, §2 ("Values not computed on those pages are omitted") |
| motion duration, easing curve, reduced-motion behavior | §15 |
| responsive tokens, breakpoints, mobile-viewport values | §8, §5 |
| shadow and elevation tokens beyond `box-shadow: none` | §6 |
| persona research and product-user interviews | §13 |
| which recorded hover / pressed pair applies to the pricing primary action | §2 versus §4, both present in the source |

No row names a domain the source never raises. In particular the gaps list contains no `native-client`, no help-centre, no campaign, no global-store, no mobile-app, and no offline domain — the four vocabulary classes that produced the D1a failures this clause exists for. `grep -oiF 'native-client' DESIGN.md | wc -l` = 0, `help cent` = 0, `campaign` = 0, `global store` = 0.

## E1 process-leak check

`node test-v2/tools/process-leak-check.mjs` → 125 bodies scanned; **freee absent from `detail`, 0 hits**. The body carries no clause id, wave number, ledger pointer, Tier grading, or sidecar reference. Grep-verified at 0 in `DESIGN.md`: `provenance`, `Tier 1`, `Tier 2`, `live-extract`, `getdesign`, `refero`, `omd-apply`, `npx omd`, `verification_v2`. The only specification reference in the body is `Core §4.4`, which is the approved idiom. The one pipeline noun the source itself used, "re-verification" in §8, was reworded to "a future capture" without changing the rule it states.

The URLs that do appear in the body are the brand's own public routes (`https://www.freee.co.jp/`, `/pricing/`, `/products/`) and the official design system's own addresses (`https://vibes.freee.co.jp`, `https://github.com/freee/vibes`), which E1 permits. Every verification-record and narrative URL — the three `corp.freee.co.jp` pages and the two Tier 2 attempts — is ledger-side only.

## Final passes

**Pass 1 (B2a).** The body was re-read from the top and every causal, interpretive, evaluative, or judgment-bearing sentence was classified as brand-published fact, observation, or editorial reading — inside Principles and outside it. The original author's evaluations were treated as derived, not as source facts. **Four sentences failed that classification on the first read and were corrected before submission:**

| # | Location | Was | Now |
|---|---|---|---|
| 1 | Scope ¶3 (13) | "Vibes is design and accessibility context of its own" | "Vibes is a separately published freee system and its own evidence domain". The evaluative half is dropped; the boundary it carried survives, and the accessibility framing survives where the source states it, in the same paragraph's 2023-release sentence. |
| 2 | Foundations → Semantic color (81) | The `#ebf3ff`-only and no-status-colour application rule stated flat, as if it were a measured fact | Restated as "The application guidance that accompanies these roles … is a derived editorial implementation inference from the verified surfaces; it is not freee-authored or a separately published UI specification", with the eight role names and values named separately as the measured parts. This is the A3 rescue from §9, and it was the only unqualified prescriptive rule in Foundations. |
| 3 | Capture record (162) | "That is why the same three role reasons recur: none of the four opens an operation that commits or resolves on the control itself." — a causal reading of control roles, standing unqualified and carrying twelve applicability verdicts | The same sentence, followed immediately by "That reading of the four control roles, and every applicability verdict built on it, is a derived editorial implementation inference from the verified surfaces; it is not freee-authored or a separately published state specification", with the selectors, surfaces, geometry, and snapshots named as the measured parts. |
| 4 | Content & Locales → Locale (323) | "The type system is Japanese-first" | Dropped. The facts around it stayed — Noto Sans JP as the only promoted family, the body and heading metrics, the source's own "high-contrast Japanese text" — and a keep-the-published-strings-in-Japanese rule was added in its place. |

No token value, component-table value, or state applicability verdict was changed by any of the four; all four are sentence-level.

The opposite error was checked too. Document facts were not demoted by attaching a qualification to them. Sentences deliberately left **un**qualified, with the reason:

- Scope ¶1's mission, founding date, and CEO — freee-published facts reported with attribution ("its official company profile identifies…"), not readings.
- Scope ¶1's "are framed as a way to let owners manage freely" — an attributive report of freee's own framing, which the verb already marks.
- Foundations → Evidence-domain boundary and Historical system boundary — statements about this document's evidence and where it stops, not interpretations of freee.
- The accounting-and-tax boundary paragraph — a limit on what the values in this document mean.
- Every colour role, type metric, spacing and radius record, component field, pseudo-state snapshot, and the three published Japanese lines — recorded values.
- The Family anti-substitution rule and the Assets logo classification — evidence-boundary rules, in the same form the approved samples use.

After the four fixes, seven readings remain and each carries an adjacent qualification that closes its evidence class: `grep -o 'derived editorial' DESIGN.md | wc -l` = **7** and `grep -o 'not freee-authored' DESIGN.md | wc -l` = **7**, on 7 distinct lines — 15, 42, 50, 58, 81, 162, 313. Two further readings close by anaphora plus their own domain boundary (lines 164 and 321) and are named as such rather than counted. The 1:1 map of occurrence to portable location is the *Portable derived-editorial scope* table in `provenance.md`.

**Pass 2 (E2 cross-check).** Every row above was written after grepping the three output files, not from memory. Counts are `grep -o … | wc -l` with the counted unit stated — occurrences, not lines — and the per-file destination is named for each. Two claims failed the cross-check and were corrected rather than left standing:

| # | Claim as first written | Correction |
|---|---|---|
| 1 | `provenance.md`: "`grep -o 'ds.type' web/references/freee/DESIGN.md \| wc -l` = 1 in the source" | Measured 0. The source writes the block nested (`ds:` → `type: system`), so the dotted form is this ledger's shorthand, not a source string. The claim now says so and the nested block is reproduced line for line. |
| 2 | `provenance.md`: "44 token claims" / "All 44 claim keys" | Measured 47 (`sed -n '/^  claims:/,/^tokens:/p' … \| grep -c '^    "'` = 47). Corrected to 47 in both places, and every one of the 47 keys was then verified present in the ledger by a per-key grep loop — 0 missing. |

| Claim | Re-measured |
|---|---|
| three Japanese runs, occurrence counts in the portable body | 2 / 1 / 1, matching the A5 table |
| `#2864f0` 11 occurrences with the per-location breakdown | 11, at lines 13 / 35 / 60 / 70 / 173 / 175 / 200 / 202 / 229 / 230 / 254 |
| all 15 source hexes present in the portable body | 15 / 15; the gate reports token-loss 0 and token-invention 0 |
| unitless `1.5` in the portable body | 4 — three role rows plus the sentence naming the ratio (A1a) |
| `Type: button` / `Type: card` in the portable body | 2 / 1 (A1b) |
| 104 quoted Latin source strings across `DESIGN.md` + `provenance.md` | 0 missing |
| 47 YAML claim keys in `provenance.md` | 47 present, 0 missing |
| `Tier 1`, `Tier 2`, `provenance`, `live-extract`, `getdesign`, `refero`, `corp.freee.co.jp`, `omd-apply`, `npx omd` in the portable body | 0 each |
| eleven sibling-only values in the portable body | 0 each |
| eleven non-adopted-sibling strings in the portable body | 0 each |
| `[FILL IN` in the portable body | 0 |
| D1 trigger phrases in the body (`not captured`, `were not`, `없었`, `않았다`, `미기록`) | 0 — one draft sentence used "were not measured" and introduced `plans` / `prices` / `terms` / `printed`, four words the source never uses; the gate blocked it, the sentence was rewritten to a positive form using source vocabulary, and no negative coverage sentence remains |
| `not-applicable` cells citing non-observation | 0 — every one gives a role reason |
| coverage sentences in the body | 1, "State coverage is not complete here." (line 160) — negated, as required (C3) |
| `focus-visible` table rows carrying a hex | 0 (B1); `focus-visible` in the source: 0 |
| `Freee` (title-cased) anywhere in the three files | 0 |

**Compliance claims, made only where the body carries the text (E2c).** B3 is claimed because Foundations → Motion states all five evidence kinds verbatim — "the transition properties, the animation name, the duration, the easing, and the reduced-motion behavior" — plus the per-component computed-observation gate and the "Official documentation of a single curve or a single duration is not that gate" clause. C3 is claimed because the Capture record says "State coverage is not complete here." A2 is claimed because §14's and §15's prose both survive in the body, not merely their headings. No claim is made about a catalog adoption, a sol meaning-lane verdict, or a graph binding; none of those happened here.

## Gate

`node test-v2/tools/migrate-reference.mjs --brand freee --gate-only` → **PASS**, `problems: []`.

Portable Core, run separately from the gate because the gate does not compare canonical claim bytes:

- `inspectDesignMd(...).conformance` from `scripts/design-md-core.cjs` → `level: portable-core`, `structurally_valid: true`, `portable_core: true`, `reasons: []`.
- `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/freee/DESIGN.md --check --require-portable-core --json` → exit 0, `status: pass`, `portable_core: true`, `reasons: []`, `dropped: []`, `unmapped_segments: 0`, `projection_roundtrip_equal: true`, `source_reconstruction_equal: true`. `design_md_sha256` `aff4bc173a10f729b0be03e9ce1aa18b7150a16470b86f86d3d564efc79ea8cc`. (A prior run of the same command on the pre-correction body returned `b8bf329b09…acd1bd6f`; that SHA is superseded by the Do/Don't row-count correction recorded in pass 2, E2c.)

That SHA is of this file set as submitted. `adoption_status` is `staged-non-authoritative` and `authoritative_adoption_ready` is `false`, which is the expected staged result — the canonical source remains `web/references/freee/DESIGN.md`.

**The gate is not evidence of conformance for any of this.** A5's Latin side, D1a, C2, B2a, and E2 are sentence-level judgments the gate does not evaluate; the gate returns the same PASS whether the qualifications are adjacent and complete or absent, and whether a Named gap names a real source domain or an invented one.

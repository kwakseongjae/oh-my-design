# Fubon migration log

Source: `web/references/fubon/DESIGN.md`
Sibling read (not the migration input): `web/references/fubon/.verification.md`
Destination: `docs/design-md-weight/migrated/fubon/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/fubon/provenance.md`
Date: 2026-08-26
Worker: opus5 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v10**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as committed in this directory.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations + components; `logo.slug` 옮김 → Typography & Assets | Portable file has no frontmatter; H1 is `# Fubon Design System`. Identity table `provenance.md` 9–20. `https://www.fubon.com/banking/` is dual: `DESIGN.md` 9 + `provenance.md` 13/40/45 (E2a). `#0093c1` is dual: `DESIGN.md` 11/35/51/56/70/85/109/223/231/282/288/356 + `provenance.md` 23/65/67/68/69/125 (E2a). Favicon URL is dual: `DESIGN.md` 191 + `provenance.md` 15/107 (E2a). |
| YAML `omd: "0.1"`, `verified`, `tokens.source: live-extract`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 16–19, 29–32, 143. These are ledger keys with no portable slot. |
| YAML `tokens.note` | 분리 → provenance; 내용 옮김 → Experience Scope | Verbatim note at `provenance.md` 23. Its substance — bank `#0093c1` vs group `#008fc7`, ink `#0c0e1f`, secondary `#494a57`, "Fubon blue is the anchor across bank and holding group" — is at `DESIGN.md` 11 (E2a). |
| YAML `tokens.colors` (15 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 85–107. `sky-light` byte form `"#3cbeE7"` vs visible `#3cbee7` recorded at `provenance.md` 111 (E3: the ledger keeps the source spelling rather than normalising it away). `#eef0f0` is not given a palette role; it stays on the cancel control at `DESIGN.md` 243 (A4). `#aeafb4` (Neutral) and `#7d7f87` (Text) stay unmerged — `DESIGN.md` 101/107/109. |
| YAML `tokens.typography.family` (`sans`, `tc`, `fallback`) | 옮김 → Typography & Assets Family | `DESIGN.md` 161–166. The token-set fallback `Microsoft JhengHei` and the visible-section stack `Arial, Helvetica, 微軟正黑體, Microsoft JhengHei, Apple LiGothic, 蘋果儷中黑` are both kept as separate records (A1, A5). |
| YAML `tokens.typography.h1 / h2-title / h2-small / body / nav / cta-link / label / button` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 170–181. Unitless line heights 1.4 / 1.33 / 1.5 / 1.25 stay ratios, never converted to px (A1a) — `DESIGN.md` 172–179, `provenance.md` 113. All eight YAML `use` strings are restored verbatim at `DESIGN.md` 181, alongside the §3 table's own Use column at 172–179 (A1, A3). |
| YAML `tokens.spacing` / `tokens.rounded` | 옮김 → Foundations spacing + shape; also Layout | Unitless steps and px forms both kept: `DESIGN.md` 113 (spacing), 117 (`sm 4 · md 12 · lg 16 · full 9999`), 370 (Layout). `full: 9999` is kept as the YAML step and is not converted to a px value. The `lg` step (16) has no named surface in the visible sections; that is stated at `DESIGN.md` 124 and named as an unresolved item at 453. |
| YAML `tokens.shadow.card` / `soft` | 옮김 → Foundations elevation | `DESIGN.md` 135. Also on White Content Card 335 and the Floating Digital-service Button 318 (E2a). |
| YAML `tokens.components` (10 records) | 옮김 → Components & States | `DESIGN.md` 218–365. Verified primitive types preserved per component, not flattened to `Kind` (A1b): `Type: button` ×3 (220/240/260), `Type: tab` (278), `Type: card` ×3 (333/341/348), `Type: badge` ×2 (355/362), `Type: input` (297). All ten YAML `use` strings restored verbatim (`Token-set use:` lines at 225/245/264/282/302/336/343/350/357/364). `nav-link.active` verbatim record `text #0093c1 underline on hover` at 282. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; Key Characteristics as Distinctive traits 35–42. The atmosphere readings ("clear, accessible, dependably institutional", the motto as optimism) carry an adjacent complete qualifier at 11; the trait list carries one at 33 (B2/B2a). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `DESIGN.md` 83–109. All 15 named roles kept, including `#aeafb4` which the YAML block does not carry. |
| §3 Typography Rules (family, hierarchy) | 옮김 → Typography & Assets | Family 159–166; hierarchy 170–179; evidence classes 151–157. |
| §3 Principles (bilingual first, 700 ceiling, functional sizing, no negative tracking) | 옮김 → Typography & Assets Type rules | `DESIGN.md` 187, under an adjacent complete qualifier. The observable half (default tracking, no negative letter-spacing, 700 as the heaviest weight in the scale) is stated plainly at 183; the interpretive half (equal visual weight, comfort/accessibility rationale, "no 800 or 900 display weight in this system") sits inside the qualified sentence at 187 (B2/B2a). |
| §4 Component Stylings (buttons, cards, nav, badges, inputs) | 옮김 → Components & States | `DESIGN.md` 218–365. §4 body Use text and YAML `use` strings are both kept where they differ. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | `DESIGN.md` 370–372 (spacing, container, 2×4 icon grid, footer grid), 113 (spacing scale), 117–123 (radius scale). The whitespace-philosophy reading and the 8-icon-affordance reading carry an adjacent complete qualifier at 382 (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Four-level table `DESIGN.md` 128–133; token values 135. The Shadow Philosophy paragraph is carried as a qualified reading in the same sentence as the values at 135 (B2/B2a). |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | `DESIGN.md` 56–63, with the grouping qualifier at 54. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 67–75. Eight source Don'ts plus one scope-boundary line at 75 that restates the Scope limit at 9 rather than adding a new brand rule. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoint table `DESIGN.md` 374–378; touch and collapsing 380. The thumb-target / distinct-from-content reading moved into the qualified sentence at 382, and 384 records that the two inspects are desktop web surfaces and the breakpoint table is the source's stated contract rather than measurements at those widths (B2/B2a). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | 삭제 | Tool-facing copy-paste prompts and restatements; no receiving slot and no delegation. Deletion and its check are recorded at `provenance.md` 123/125: every hex, radius, size, weight, family, and height §9 names was verified present elsewhere in the portable body before deleting (A2, A3). |
| §10 Voice & Tone | 옮김 → Content & Locales | Observed strings `DESIGN.md` 393–397; register table 405–411; forbidden register 413. The qualifier precedes the derived material at 401 rather than following it, so the table and the forbidden-register list are inside its scope (B2/B2a). English glosses are marked as reader aids that never replace the label at 399 (A5). |
| §11 Brand Narrative | 옮김 → Experience Scope; 서사 성격 → provenance | Public history at `DESIGN.md` 13, marked as narrative context that supplies no interface tokens; the civic-professional reading carries an adjacent complete qualifier in the same paragraph. The source's own "widely documented public facts" statement is at `provenance.md` 78, and the narrative-not-token-source note at 145 (E2a). |
| §12 Principles (5 numbered + UI implications) | 옮김 → Experience principles | `DESIGN.md` 48–52 under the fixed B2a form at 46: "These five items are a derived editorial implementation inference from the verified surfaces; they are not Fubon-authored or a separately published UI specification." |
| §13 Personas (4 entries) | 삭제 | Self-declared illustrative archetypes. Not promoted to Audience or to `primary-tasks`, and not re-hosted in the sidecar: no name, age, city, occupation, or segment appears in either output (D2). Disposition recorded at `provenance.md` 122. Audience at `DESIGN.md` 29 carries only the group-level references the source narrative states, under an adjacent qualifier. The four `primary-tasks` at 21–24 come from observed CTA labels and modules, and 19 says so explicitly. |
| §14 States (10 rows) | 옮김 → Components & States surface state contract + per-component applicability | Full ten-row body preserved at `DESIGN.md` 201–212 (A2; graph is still 0/440, so nothing is delegated). The applicability rule is stated at 216 and the per-component tables follow. Non-observation is never used as a `not-applicable` reason (C1); `not-applicable` appears only with a role reason — the cancel button 254–256, the large group CTA 272–274, and the nav link 291–293 commit no operation. The primary button 234–236 and the input 310–312 keep loading/error/success `applicable` with treatments omitted, and the floating button 327–329 stays open because the source names the control but not what it commits (C2 v10). Cards and badges get no `kind` and no map because the source supplies no interaction evidence for them — 337/344/351/358/365 (C4). |
| §15 Motion & Easing — durations, easing token names, motion rules, reduced-motion | 옮김 → Foundations motion | `DESIGN.md` 139 (150ms / 250ms / 400ms with their uses), 141 (three easing token names and roles), 143 (motion rules, sub-100ms press feedback, `prefers-reduced-motion: reduce` → instant cut). |
| §15 Motion & Easing — three `cubic-bezier` values | 삭제 → provenance omission ledger | No observation stands behind them: the method captured computed style on two static pages and recorded no transition, animation, or easing sample. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` is byte-identical to the example table in `spec/omd-v0.1.md`, the documented re-injection path. Ledger at `provenance.md` 119–121; `grep -c cubic-bezier` → `DESIGN.md` 0, `provenance.md` 3. B3 is held: the promotion condition at `DESIGN.md` 141 names all five evidence kinds (transition properties, animation name, duration, easing, reduced-motion behavior) and the per-component computed-observation gate, in full text (E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts unresolved (`web/references/fubon/DESIGN.md` 213–216) | 분리 → provenance | Freshness `provenance.md` 27–34; Tier 1 43–48; Tier 2 50–53; conflict resolution 34. |
| Philosophy-layer HTML comment (source lines 406–438) | 분리 → provenance; 고유 컴포넌트 값 옮김 → Components & States | Raw computed observations at `provenance.md` 59–78. Three values in that block had a receiving slot and were moved as well (A3): the popup confirm's `border-radius: 0px 0px 12px`, the popup cancel's `0px 0px 0px 12px`, and the cookie CTA's `12px` at 16px / 500 are on the component entries at `DESIGN.md` 226 and 246; the digital FAB's `#ffffff` / 50% / `rgba(0, 0, 0, 0.11) 5px 5px 30px 0px` became the Floating Digital-service Button at 314–319; the 112px header height is at 372 (E2a — all also remain in the provenance raw list). |

## Sibling handling (`web/references/fubon/.verification.md`)

The sibling exists — confirmed with `find web/references/fubon -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

- Its values are recorded at `provenance.md` 82–105 and are **not** promoted into `DESIGN.md`. Values it carries that the migration source does not: `#eef0ef`, `#156b9b`, `#2a2a2a`, `#009e9c`, `rgb(114,114,114)`, 34px button heights, `border-radius: 0px 0px 16px 16px`.
- Its structural classifications (H1, `H2.title-primary`, selector names) were likewise not promoted (B1). The same classifications that do appear in the portable provenance come from the source's own philosophy-layer comment, not from the sibling.
- One earlier draft of the Font-evidence row stated the bank body font stack as `Roboto, "Noto Sans TC", sans-serif, Arial, Helvetica, 微軟正黑體`. That full stack exists only in the sibling. It was corrected to the source comment's own record (`DESIGN.md` 154) and the sibling form stays in `provenance.md` 88.
- Three published strings appear only in the sibling — `金控成員`, `台北富邦銀行官網`, `富邦人壽官網`. They are preserved byte-for-byte at `provenance.md` 94–96 (A5).

## A5 verification

The gate's copy-loss needles come only from contiguous non-Latin runs of four characters or more, so it produced 20 needles here and no `unchecked` entry. That machine check is narrower than A5, so both a wider non-Latin sweep and a quoted-string sweep were run by hand.

| Sweep | Extracted | Missing from all outputs | Handling |
|---|---|---|---|
| All CJK runs in the source, any length | 39 distinct | 6 | `陳小美`, `林建國`, `吳麗華`, `台北.`, `新竹.`, `台中.` — persona names and cities, deleted under D2 and deliberately not re-hosted. |
| All CJK runs in the sibling | 14 distinct | 0 | — |
| All backtick- and quote-delimited strings in the source, 2–120 chars | 90 | 1 | `正向力量 成就可能.` — the tagline followed by a sentence period inside the source's quotation marks. The label itself survives in four places in `DESIGN.md` (11, 393, 401, 407) and once in `provenance.md` (138); only the trailing punctuation differs. |

Sub-needle labels the machine check could not see were confirmed present individually: `確認`, `同意`, `取消`, `信用卡`, `富邦人壽`, `蔡`, `蔡明忠`, `必填`, `微軟正黑體`, `蘋果儷中黑`.

## Gate run

`gateTexts(legacy, DESIGN.md, provenance.md, migration-log.md)` → `PASS`, `problems: []`, no `unchecked` entry. This is a run result only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so it is not cited here as evidence that the migration is correct; the three sweeps above and the two mandatory passes are.

## Deviations recorded

- `DESIGN.md` is 4,963 words by `wc -w`, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: ten declared components, a ten-row state contract, and dual `use` records cannot be compressed without dropping verified values. Recorded rather than silently accepted.
- The source's own `#008fc7`/`#0093c1` and 12px/0px radius differences are kept as two surfaces rather than reconciled, matching the source's stated resolution (`provenance.md` 34 and the sibling conflict matrix at 100–105).

## Mandatory passes

- **F1 (B2a scan).** `DESIGN.md` was re-read from line 1 and every causal, interpretive, or judgement sentence was classified. Eleven edits followed. Line numbers are post-edit positions in `DESIGN.md`.
  1. Scope proxy boundary (9) — gained an adjacent complete qualifier; the boundary is a derived reading, not a Fubon statement.
  2. Font-evidence live-computed row (154) — the draft stated the full body font stack, which exists only in the sibling. Corrected to the source comment's own record (B1).
  3. Distributed-asset row (155) — the "both families are third-party faces" judgement was removed; the source makes no such statement.
  4. Type roles (183) and Type rules (187) — the "no 800 or 900 display weight in this system" reading moved out of the plain sentence into the qualified one; 183 now carries only what the type scale shows.
  5. Assets — a noun-phrase list naming illustration-set, photography-direction, and logo-file domains the source never establishes was deleted (D1a). Nothing replaced it; Assets is now the favicon line plus the circular icon containers (191–192).
  6. Foundations semantic color (109) — a `No dark-surface palette is established` sentence was deleted for the same D1a reason.
  7. Shape (117) — the workhorse-radius and authoritative-CTA readings gained a qualifier that precedes the labelled list.
  8. Primary-button hover reason (231) — now reports what the source names rather than attributing `#005c7a` to that control.
  9. Input loading reason (310) — now names the surface state contract behind the inference.
  10. Layout (380–384) — the touch reading joined the qualified sentence, and the capture-class sentence was split so the breakpoint table is described as the source's stated contract rather than a measurement at those widths.
  11. Content & Locales (399–413) — the qualifier was moved to precede the register table and the forbidden-register list instead of trailing them, and the label/gloss boundary was stated at 399 (A5).
- **F2 (E2 collation).** Every row above was grepped against the three files before it was written. Dual destinations are recorded on both sides. The only compliance claim made in this log is B3, and it is made because `DESIGN.md` 141 carries the five evidence kinds and the per-component gate in full text (E2c).

DONE migrated=1

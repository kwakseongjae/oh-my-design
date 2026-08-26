# Fugle migration log

Source: `web/references/fugle/DESIGN.md`
Destination: `docs/design-md-weight/migrated/fugle/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/fugle/provenance.md`
Date: 2026-08-26
Worker: opus5 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v10**
Gate: `node test-v2/tools/migrate-reference.mjs --brand fugle --gate-only` — result at the end of this file, with the reason it is not conformance evidence.

## A5 — brand-published strings

The source **does** carry non-Latin runs, so `copy-loss` is machine-checked for this reference and did not report `unchecked`. Measured: 13 contiguous Traditional-Chinese runs exist in the file, 12 of which are long enough and quoted such that the gate builds a needle from them. The one run the gate cannot see is `富果` — two characters, below the four-character needle floor — and it is carried anyway, twice, at portable lines 9 and 387.

### Traditional Chinese, string by string

Counts are `grep -noF -e '<string>' <file>` — occurrences with their line numbers, not matching lines. `grep -c` is not used anywhere in this log.

| String | Class | Portable body | Lines |
|---|---|---:|---|
| `認真的投資人值得更好的工具` | published — the belief §11 says Fugle frames its mission around; corroborated by sibling raw sample 14 | 3 | 32, 384, 403 |
| `開始交易` | published — the amber CTA label §4 gives as its example | 2 | 246, 385 |
| `新增自選股` | published — the single amber action in §14's empty watchlist | 3 | 22, 236, 386 |
| `富果` | published — the brand's Chinese name, §11 | 2 | 9, 387 |
| `告別密密麻麻數字的傳統看盤軟體。` | illustrative — §10 marks it a sample modelled on App Store copy tone | 1 | 395 |
| `認真的投資人，值得更好的工具。` | illustrative — same marker; it is the mission line with a comma and full stop added | 1 | 396 |
| `把時間花在決策，而非整理資料。` | illustrative — same marker | 1 | 397 |
| `個人投資者` | fictional persona label — **삭제 (D2)**, deleted with §13 and not re-hosted in `provenance.md` | 0 | — |
| `開發者投資人` | fictional persona label — **삭제 (D2)**, deleted with §13 and not re-hosted in `provenance.md` | 0 | — |
| `短線交易者` | fictional persona label — **삭제 (D2)**, deleted with §13 and not re-hosted in `provenance.md` | 0 | — |
| `學習型投資人` | fictional persona label — **삭제 (D2)**, deleted with §13 and not re-hosted in `provenance.md` | 0 | — |

The four deleted labels are named on the four rows above and nowhere else in the three outputs. That is the whole of their record: no age band, occupation, city, habit, motivation or archetype title travels with them. Measured with `grep -oF -e '<label>' <file> | wc -l` for each of the four: 0 in `DESIGN.md` and 0 in `provenance.md`.

The three illustrative lines follow the approved handling for a source that marks its own voice samples: they are kept **byte-exact** under the source's own illustrative marker rather than dropped, because dropping them would lose published-adjacent text and promoting them would assert copy Fugle never published. Their English glosses are the source's own and never replace the Chinese.

### Latin strings — hand sweep, not machine-checked

The gate's `copy-loss` needles are non-Latin only, so nothing in this class was mechanically compared. All 174 distinct backticked, bolded and double-quoted strings in the source were extracted programmatically and searched across the two outputs.

- **153 of 174** survive verbatim in the portable body.
- **170 of 174** survive verbatim in the portable body or `provenance.md`.
- **4 of 174** are absent from both: the four persona headings above, deleted under D2.

The first pass put **26** in the absent column. Twenty-two of those became fixes rather than justifications:

| Class | First pass | After fixes | Disposition |
|---|---:|---:|---|
| §2 role labels with their trailing colon (`Brand Amber:`, `Amber Dark:`, `Rise (Light):`, `Error:`, …) | 15 | 0 | **Fixed, not justified.** The first draft rewrote Foundations → Semantic color into a `**Brand Amber** (\`#f4af1c\`)` house form, which dropped the colon from all fifteen labels and re-ordered the record's own custom-property attributions. The section was rewritten to carry the record's exact line form, so all fifteen are now byte-exact |
| §9 property-declaration shorthand (`background #f4af1c`, `min-height 55px`, `border-bottom 1px solid #eaeaea`, `border-radius 4px`, `box-shadow 0 2px 2px 0 rgba(0,0,0,.08), 0 2px 7px 0 rgba(0,0,0,.1)`, `height 32px`, `font-size 16px`) | 7 | 0 | 분리 → `provenance.md` → *§9 property-declaration forms*, quoted verbatim. Every value inside them already survives in the portable body in the record's own §4 / §6 / §15 notation; only the colon-less shorthand of the deleted §9 is recorded rather than carried |
| Fictional persona headings | 4 | 4 | 삭제 (D2). Recorded on the four rows above |

Re-measured after the fixes: 174 distinct strings, **4** absent from both outputs, all four in the D2 class.

### Multi-destination values (E2a)

Line numbers in `DESIGN.md`, measured with `grep -noF`.

| Value | Portable locations | Also in provenance |
|---|---|---|
| `#f4af1c` | Scope characterization (15), Distinctive traits (38), application rules (58), Semantic color (84), primary-declaration note (100), Surface states loading dots (237), Primary Button background (249), Recorded conflicts (448 ×2) | yes — Identity, claim ledger, raw samples 1/2/10/11 |
| `#e49b00` | Semantic color (85), Primary Button use string (254), hover variant (255), hover row (260) | yes — claim ledger, raw samples 10/11 |
| `#131313` | Scope (15), Distinctive traits (40), application rules (60), Semantic color (95), Recorded conflicts (449 ×2) | yes — claim ledger, raw sample 4 |
| `#323232` | Scope (15), Semantic color (94), Recorded conflicts (449 ×2) | yes — claim ledger, raw sample 4 |
| `#222222` | Recorded conflicts (449) only — its single source occurrence is in §9, and this is the A3 rescue of that section's one unique value | yes — claim ledger, Deletions |
| `#fbcc67` | Recorded conflicts (448) | yes — Freshness, raw sample 3 |
| `#f3746d` / `#6c9c46` | Distinctive traits (39), application rules (59), Semantic color (96, 97), Locale (411); `#6c9c46` additionally in Surface states success (240) | yes — claim ledger, raw sample 8 |
| `#d12a2a` | Semantic color (98), Surface states form validation (239), Input error row (288) | yes — claim ledger |
| `#eaeaea` | application rules (60), Semantic color (91), Surface states skeleton (241), Input background (272) and labelled variant (279), Stock Row border (297) and use string (301), Info Card background (330) | yes — claim ledger, raw samples 6/7 |
| `cubic-bezier(.4,.6,.2,1)` | Principle 5 (52), Foundations → Motion (161) | yes — claim ledger, raw sample 13 |
| `cubic-bezier(0,1,1,0)` | Foundations → Motion (165), Surface states loading dots (237) | yes — claim ledger, raw sample 1 |
| `認真的投資人值得更好的工具` | Audience (32), Brand-published lines (384), Recorded narrative (403) | yes — raw sample 14 |
| `2026-06-03` | Scope (11), Evidence-domain boundary (106) | yes — Identity, Freshness, Surfaces |
| `2026-06-09` | Scope (13), Evidence-domain boundary (106) | yes — Identity, Freshness |
| `1542310263` | Scope (11), Layout & Platforms (362) | yes — Surfaces, Sources |
| `55px` | Distinctive traits (41), Stock Row height (299) and use string (301) | yes — claim ledger, raw sample 6 |
| `Lato` | application rules (61), Font evidence (186, 190), Family (194, 195), all five Type-role rows (202–206), Locale (412) | yes — claim ledger |
| Favicon slug | Typography & Assets → Imagery and assets | yes — Identity |
| `9999` | Shape table (132), the note beneath it (134), Named gaps (458) | yes — claim ledger |

## Section-by-section disposition

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML `id` / `name` / `country` / `category` | 분리 → provenance Identity | Portable file carries no frontmatter. `name` `Fugle` is dual (E2a): the ledger + the H1 `# Fugle Design System` and the body throughout. `id`, `country`, `category` are ledger-only as fields. The category value `fintech` does return **1** from `grep -oF -e 'fintech' DESIGN.md \| wc -l`, at line 403 — that hit is the source's own §11 phrase "positioning itself at the intersection of fintech and developer tooling", which is prose, not the field |
| YAML `homepage` `https://www.fugle.tw` | 옮김 → Experience Scope (as `www.fugle.tw`); 분리 → provenance Identity / Surfaces / Sources | Dual (E2a) |
| YAML `primary_color` `#f4af1c` | 옮김 → Foundations Semantic color (84) and eight further portable locations; 분리 → provenance Identity | Dual (E2a), listed in full above |
| YAML `logo` (`type: favicon`, `https://www.fugle.tw/images/favicon.ico`) | 옮김 → Typography & Assets Imagery and assets; 분리 → provenance Identity | Dual (E2a) |
| YAML `verified` `2026-06-03`, `omd: "0.1"` | 분리 → provenance Identity / Freshness | The date is dual — two portable locations. `omd: "0.1"` is ledger-only: `grep -oF -e 'omd' DESIGN.md \| wc -l` = 0 |
| YAML `tokens.source: prose-derived`, `tokens.extracted: 2026-06-09` | 분리 → provenance Identity / Freshness; **meaning** 옮김 → Scope (13) + Evidence-domain boundary (106) | The field name stays in the ledger (`grep -oF -e 'prose-derived' DESIGN.md \| wc -l` = 0) but its meaning is an evidence-class qualification a standalone reader needs, so the body states in plain language that the machine-readable value set was drawn from the record's own prose six days after the inspection (E1) |
| YAML `tokens.colors` (15) | 옮김 → Foundations Semantic color (84–98) | All fifteen, in the record's own line form with its role names, uses and custom-property attributions. `canvas` / `bg-secondary` / `border` / `border-heavy` / `text` / `text-muted` / `dark-surface` map to the §2 role names the record itself uses for the same hexes; no two roles were merged (A4) |
| YAML `tokens.typography.family` (`sans: Lato`, `mono: Lato`) | 옮김 → Typography & Assets Family (194–196) | Both slots stated. The record naming Lato for `mono` as well is preserved rather than swapped for a plausible monospace face |
| YAML `tokens.typography.*` (5 roles × size/weight/lineHeight/use) | 옮김 → Typography & Assets Type roles table (200–206) | All five roles, all five `use` strings verbatim. Unitless line heights preserved as ratios (A1a): `1.4` and `1.5` are present as ratios, never converted to px |
| YAML `tokens.spacing` (6) | 옮김 → Foundations Spacing table (114–121) | Stated as the bare numbers `5 / 8 / 16 / 20 / 32 / 50` because the record states them unitless (A1a). Adding `px` would also have invented a `50px` the source never carries — its `50 px` header height is a separate, space-separated value in §5 |
| YAML `tokens.rounded` (4) | 옮김 → Foundations Shape table (127–132) | `sm` 4px, `md` 4px, `lg` 8px, `full` 9999. `full` is stated as the bare `9999` for the same reason |
| YAML `tokens.shadow` (3) | 옮김 → Foundations Elevation (140–144) | Merged with §6, which states the same three plus two more — see the §6 row |
| YAML `tokens.components` (6, each with `type`) | 옮김 → Components & States (244–346) | All six, each with a `Type:` field preserving its verified primitive (A1b): `button`, `input`, `listItem`, `card` ×2, `dialog`. All six `use` strings are verbatim `Use:` fields |
| YAML `components_harvested: true` | 분리 → provenance Proof notes; **fact** 옮김 → Components & States Record boundary | Dual. The field name does not reach the body (`grep -oF -e 'components_harvested' DESIGN.md \| wc -l` = 0); the Record boundary states the same fact as prose |
| Subtitle line ("Taiwan's visual-first stock research and trading platform, built by investors for serious investors") | 옮김 → Experience Scope (9) + Audience (32) | The product category and the "serious investors" stakeholder framing survive; the editorial adjective "visual-first" is not carried as a fact |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope (15) + Distinctive traits | The whole paragraph is a characterization, so it sits under the qualification at line 15. Its embedded values — `#f5f5f5`, `#ffffff`, `#f4af1c`, `#131313`, `#323232`, the 4 px / 8 px radii and the 12–14 px body type — are also token rows in Foundations and Typography |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | Carried in the record's exact line form after the first draft's rewrite was reverted (see the A5 fix table) |
| §3 Typography Rules | 옮김 → Typography & Assets Font evidence / Family / Type roles | Lato via Google Fonts on the main platform; Noto Sans TC and Microsoft JhengHei on the developer portal; Material Icons; "No custom variable fonts detected"; the px restatement of the scale and the 18–24 px highlight range, which conflicts with the YAML's single `24` and is carried as a conflict rather than resolved |
| §4 Component Stylings | 옮김 → Components & States | Six components plus three prose-only variant blocks — `Amber CTA Hover`, `Input Group (with label)`, `Hovered Stock Row` — that exist in §4 and not in the YAML. All three are carried as named variants on their components (A3) |
| Mid-file footer **Verified** / Tier 1 / Tier 2 | 분리 → provenance Freshness / Sources | Grading vocabulary is ledger-only. `grep -oF -e 'Tier 1 sources' DESIGN.md \| wc -l` = 0. The date and the two brand domains are dual and reach the body as prose |
| Mid-file footer **Conflicts unresolved** (`#f4af1c` vs manifest `#fbcc67`) | 옮김 → Governance Recorded conflicts (448); 분리 → provenance Freshness | Dual. Both hexes are carried in the body. The record's own "likely a PWA splash-screen approximation" reading is attributed to the record rather than asserted |
| §5 Layout Principles | 옮김 → Layout & Platforms (351–358) | 50 px header, `--watchListWidth`, `--tradingWidth`, 1508 px cap, `max-width: initial`, the five Bootstrap breakpoints, `repeat(N, 1fr)` and the 2→5 column scaling |
| §6 Depth & Elevation | 옮김 → Foundations Elevation (136–148) | Merged with the YAML `tokens.shadow`, which holds three of the five. The two the YAML lacks — **Focus / active ring** and **Side panel frame**, including `--color-component-web-frame-shadow-default` and its light/dark `rgba` resolutions — exist only in §6 and are carried (A3). The "signals interactive hierarchy" and "inverse glow" readings sit under the qualification at 138 |
| §7 Do's (6) | 옮김 → Experience Recorded application rules (54–63) | All six, under the qualification at 56 |
| §7 Don'ts (6) | 옮김 → Experience Avoid (65–74) | All six, under the qualification at 67 |
| §8 Responsive Behavior | 옮김 → Layout & Platforms (360–362) | Desktop-first 1024 px, tablet degradation, sidebar collapse, the trading panel slide-in, the by-breakpoint column counts, and the native-app statement. The last, at line 362, carries its own qualification, because the only first-party iOS artifact in the record is a store listing |
| §9 Agent Prompt Guide | **삭제** | Tool-facing construction prompt. Its rules restate values carried elsewhere — the canvas pair, `#f4af1c` with `#e49b00` hover and `4px`, the `55px` row with its `1px #eaeaea` border and `rgba(0,0,0,0.04)` hover, red-rise/green-fall, the card shadow, the `32px` / `4px` / `#eaeaea` / `16px` input, and `0.2s cubic-bezier(.4,.6,.2,1)`. Its **one unique value**, the dark-mode `#222222` surface, was **not** deleted: it is carried into Governance → Recorded conflicts at line 449 (A3). The seven colon-less declaration forms are quoted in provenance. No slot-less delegation |
| §10 Voice & Tone (adjectives + 4-row table) | 옮김 → Content & Locales Voice reading (367–378) | Three adjectives and all four Do/Don't rows verbatim, including the quoted `we research too` and `our platform provides`, under the qualification at 369 |
| §10 Voice samples (3, illustrative) | 옮김 → Content & Locales Illustrative samples (391–399) | Byte-exact under the source's own illustrative marker, with its own glosses |
| §11 Brand Narrative | 옮김 → Content & Locales Recorded narrative (403) + Experience Scope (9) + Audience (32) | Multi-destination. The company facts — Fortuna Intelligence, the self-description, the web-app-plus-API launch, the developer portal's REST and WebSocket APIs, the Fubon / Taishin / E.Sun partnerships, `富果` and its "rich harvest" gloss, and the mission line — are unqualified. The frustration, dual-strategy and middle-ground readings sit under the qualification at 405 |
| §12 Principles (5) | 옮김 → Experience Principles (44–52) | All five with their UI implications, under the qualification at 46 |
| §13 Personas (4) | **삭제** | Fictional; the section marks itself so. Nothing is carried to the body **or** to provenance (D2). The four Chinese labels are named only on the A5 rows above |
| §14 States (7) | 옮김 → Components & States Surface states (232–242) + the three per-component tables | **A2.** All seven carried verbatim in meaning, with their values: the `新增自選股` empty state, the amber `50%` / 11 px `lds-ellipsis` dots at 0.6 s, the inline `#8b8a8a` no-data message, the `#d12a2a` field border with its 12 px message, the `#6c9c46` order-submitted confirmation with its 3 s auto-dismiss, the `placeHolderShimmer` / `loadingDelay` 500 ms skeleton, and the four disabled-button `rgba` values. No graph delegation |
| §15 Motion & Easing | 옮김 → Foundations Motion (150–176) | Six duration steps, three curves, four rules. **No unattributed curve was removed, because there is none to remove** — see the curve note below |

## Curve provenance (T1-3 constraint 5)

The deletion scope is unattributed curves only. Fugle has none.

| Curve | Corroboration | Catalog frequency | Disposition |
|---|---|---:|---|
| `cubic-bezier(.4,.6,.2,1)` | sibling raw sample 13, from the platform stylesheet | 1 file | carried |
| `cubic-bezier(0,1,1,0)` | sibling raw sample 1, from the site's inline style | 1 file | carried |
| `cubic-bezier(0,1,.5,1)` | none — §15 prose only | 1 file | carried, with its single-source status recorded in provenance |

Measured across `web/references/*/DESIGN.md` with `grep -rlF`: each of Fugle's three curves appears in exactly **1** file, while the spec-template curve `cubic-bezier(0.4, 0.0, 1, 1)` appears in **218**. Fugle carries none of the recurring template values, so the boilerplate ruling does not reach this reference. The third curve is single-source but the record's own footer names the platform stylesheet bundles as its evidence, so it is a thin attribution rather than no attribution.

## B3 — what the body actually carries (E2c)

**B3's originating case does not apply here, and this log does not claim it does.** The 29CM clause exists to preserve a source's own evidence condition for promoting *unresolved* motion. Fugle's motion is resolved: the record states a six-step duration scale, three curves and four rules, and carries no such condition to preserve.

What the body does carry, at line 176, is a promotion gate for motion values **beyond** the recorded ones. It names all five evidence kinds — transition properties, animation name, duration, easing, reduced-motion behavior — plus the per-component computed-observation requirement and the "a single named curve or duration is not that gate" clause. Verified by reading line 176, not from memory.

Reduced-motion appears there and nowhere else. It is deliberately **not** listed under Named gaps: the source uses the term zero times (`grep -oiF -e 'reduced-motion' web/references/fugle/DESIGN.md | wc -l` = 0, and `reduced motion` = 0), so listing it as a Fugle domain that exists but is unresolved would be a D1a violation. Naming it inside a promotion rule states a condition on future work rather than a claim about Fugle's coverage.

## Named gaps check (D1a)

Every noun in Governance → Named gaps names a domain the source itself establishes. Verified by grep against `web/references/fugle/DESIGN.md`.

| Named gap | Source basis |
|---|---|
| dark-theme rise and fall colors | §2 labels the two roles `**Rise (Light):**` and `**Fall (Light):**` (1 occurrence each), and §1 describes the dark theme "letting red and green trading signals pop with strong luminance contrast" (1) — the domain exists in the record without a value |
| the widths behind `--watchListWidth` (1) and `--tradingWidth` (2), and the duration behind `--layoutDuration` (1) | §5 and §15 name all three as configurable custom properties and state no value for any |
| the control the `Focus / active ring` shadow attaches to | §6 names the entry (1) as an elevation value with no component beside it |
| the component that uses the `full` corner | YAML `full: 9999` (1); no §4 component states a `9999` or pill radius |
| the per-feature-area column count inside 3–5 | §8: "3–5 at xl depending on feature area" (1) |
| measured interface values for the native iOS and Android app | §8: "native iOS/Android app" (1) which "shares the brand's color and typography tokens" (1), with no measured value |

**No domain the source leaves unmentioned is listed.** In particular the list names no reduced-motion, contrast-ratio, reflow, touch-target, accessibility, locale-expansion, authenticated-account, help-center or font-license domain. Measured in the source: `reduced-motion` = 0, `reduced motion` = 0, `reflow` = 0, `touch` = 0, `pressed` = 0, `locale` = 0. `accessib` returns 1 and `contrast` returns 1, but both are ordinary prose — "made real-time Taiwan stock data accessible" in §11 and "strong luminance contrast" in §1 — not a coverage domain, and neither is listed as a gap. `aria` returns 4, all of them inside `variable` and `variants`.

Checked in the reverse direction as well: the portable body contains **0** sentences carrying a D1 trigger phrase (`not captured` / `were not` / `없었` / `않았다` / `미기록`), so no negative coverage sentence exists that could introduce source-absent vocabulary.

## C2 — state applicability by role

Six components are declared: three interactive with a full seven-state map, three with no kind and no map. Measured: `grep -c '^| State | Applicability | Reason |' DESIGN.md` = **3** tables, `grep -c '^- Kind:' DESIGN.md` = **3**, `grep -c '^- Type:' DESIGN.md` = **6**, `grep -oF -e 'not-applicable' DESIGN.md | wc -l` = **4** (2 table cells + 2 in the Record boundary rule), `grep -oE '^\| [a-z-]+ \| applicable \|' DESIGN.md | wc -l` = **19**.

| Component | Kind | loading | error | success | Basis |
|---|---|---|---|---|---|
| Primary Button | interactive (`type: button`) | applicable | applicable | applicable | The record's primary action control, and §14 documents a submitted-order outcome for the platform. An action committed here can be pending, fail or confirm; the record places all three outcome treatments in the panel or field, so the control-level treatment is omitted, not denied |
| Search / Trade Input | interactive (`type: input`) | applicable | applicable | applicable | `error` is **recorded**: §14 states the `#d12a2a` border and the 12 px message. The field feeds a data fetch the record documents, so pending is meaningful; a validated field can confirm |
| Watchlist Stock Row | interactive (`type: listItem`) | applicable | **not-applicable** | **not-applicable** | `loading` stays applicable because §14 names skeleton rows as the watchlist's own pending representation. `error` and `success` close on the role: the row is a selection target for one quoted stock and commits no operation in place, so no failure or confirmation resolves on it — the record's data-failure outcome resolves in the card or panel that owns the fetch |
| Trade Box Card | none declared (`type: card`) | — | — | — | **C4.** Surface values only; the record establishes no control role, so kind and map are omitted rather than fixed |
| Info Card | none declared (`type: card`) | — | — | — | **C4.** Same |
| Modal Dialog Container | none declared (`type: dialog`) | — | — | — | **C4.** Same |

The v10 reading was applied in both directions. The three interactive controls were **not** opened wholesale by primitive: the row's `error` and `success` are closed on a role argument, and each of the two both-directions verdicts states why. Nor were the three surfaces closed by primitive shape: they carry no kind at all, because inventing `non-interactive` for a dialog container the record never describes as inert would be the opposite invention. **Every `not-applicable` cell gives a semantic role reason and none cites absence of observation** — measured: rows matching a `not-applicable` cell followed by a non-observation phrase = **0**.

`disabled` is `applicable` on all three maps: the Primary Button's is **recorded** (§14 states the four `rgba` values for buttons), and the input and row carry it as a meaningful control state with the treatment omitted.

No `focus-visible` row carries a colour value (B1): `grep -icE '^\|[^|]*focus-visible[^|]*\|[^|]*#[0-9a-f]{6}' DESIGN.md` = 0. The source uses `focus-visible` zero times; its §6 `Focus / active ring` shadow is a differently-typed observation and stays in Foundations → Elevation under its own name, with a sentence at line 148 and again at 228 saying so explicitly.

## B1 — sibling adoption without promotion

`web/references/fugle/.verification.md` exists (a dotfile; it is invisible to `ls` and to a `*` glob, and the path was written out directly). It is **adopted** into `provenance.md` as the *Canonical proof* section: method, seven source URLs with byte sizes, all fourteen raw samples, the Tier 2 outcomes, and the country/regional source list.

**No sibling-only value is promoted to the portable body**, and this check found three that had been. All three were in the first draft and all three were removed:

| Sibling-only string | Where it had leaked | Fix |
|---|---|---|
| `transition:all .2s cubic-bezier(.4,.6,.2,1)` (raw sample 13) | Foundations → Motion, as a stylesheet quotation | Removed. The source states the curve and the 0.2 s duration separately and never as one declaration |
| `.lds-ellipsis div` (raw sample 1) | Foundations → Motion, as "the site's inline style on `.lds-ellipsis div`" | Removed. The source names `lds-ellipsis` as an animation in §14 and never the selector |
| `--ifm-color-primary-dark` (raw sample 11) | Foundations → Semantic color, on the Amber Dark role | Removed. The source's §2 assigns `#e49b00` that role under `--p60`; the extra property name is a sibling observation |

Two further attributions were sibling-derived without being sibling-only strings, and both were rewritten: Audience said the mission line is an "App Store line" that "addresses" serious investors, and Brand-published lines attributed it "to Fugle and to the Taiwan App Store listing". The source's §11 attributes it to Fugle's mission framing and does not tie it to the store listing; only the sibling does. Both now say what §11 says.

Classification observations from the sibling are not promoted either: that it numbers its samples, that it groups sources under a `Proof — Tier 1 live inspect` heading, and that it lists three regional sources against a `≥2` requirement are facts about the verification file, not about Fugle's interface, and none appears in the body.

The dark-theme trading pair `#ff3737` / `#6fda1a` is the sharpest case: it sits in sibling raw sample 9 and would close the first Named gap. It is **not** used to close it. The gap is named without a value and the pair is recorded in provenance under *Sibling-only values*. `grep -oF -e '#ff3737' DESIGN.md | wc -l` = 0, `#6fda1a` = 0.

## E1 process-leak check

`node test-v2/tools/process-leak-check.mjs` → `findProcessLeaks()` on the fugle body returns **`[]`**. Grep-verified at 0 occurrences in `DESIGN.md`: `Tier`, `provenance`, `sidecar`, `source ledger`, `golden`, `migration-log`, `catalog graph`, `omd-apply`, `Conflicts unresolved`, `prose-derived`, `verification`, `legacy`, `data-omd-capture`, `components_harvested`, `omd`. The only specification reference in the body is `Core §4.4`, which is the approved idiom. The brand's own domains — `www.fugle.tw`, `developer.fugle.tw` — are brand facts and stay in the body.

## Final passes

**Pass 1 (B2a).** The body was re-read from the top and every causal, interpretive, evaluative or judgment sentence was classified as brand-published fact, recorded observation, or editorial reading. The source's own author-side evaluations count as readings. **Seventeen corrections came out of that read**, all sentence-level; three of them are the B1 removals tabled above and two are the attribution rewrites beside them. The remaining twelve:

| # | Location | Was | Now |
|---|---|---|---|
| 1 | Scope (13) | "The App Store listing supplies published copy, not interface values." | "The App Store listing is where the record takes its published Traditional Chinese copy." — the original was my judgment and it sat against §8, which does read a token claim off that same artifact |
| 2 | Foundations → Evidence-domain boundary (108) | "Two color values … disagree" | "Two pairs of color values … disagree … all four values are carried" — there are two pairs, not two values |
| 3 | Foundations → Shape (134) | "`4px` is the uniform corner for buttons, inputs and cards; `8px` is reserved for highlighted info boxes." | Named the four components the `4px` corner is recorded on and the one the `8px` is. The original restated a §7 Do — a derived rule — as a bare Foundations fact |
| 4 | Foundations → Elevation (138, 146) | The qualification covered only the "signals interactive hierarchy" reading; "Dark mode shadows use white-alpha variants to create the inverse glow effect" then stood unqualified below it | Both readings moved inside one qualification; the sentence below now states only the measured fact, that the dark variants are white-alpha |
| 5 | Foundations → Motion (161, 167) | "the record's signature curve" stood on the primary-easing line, six lines above its qualification | "signature curve" moved into the qualified sentence at 167, where the other three curve characterizations already sat |
| 6 | Typography → Font evidence (186–187) | Evidence classes labelled "Live surface-use, main platform" and "Live surface-use, documentation portal" | "Recorded family, …". The 2026-06-03 inspection was a static source-file fetch; grading it as live surface-use promotes the evidence kind |
| 7 | Typography → Family (194) | "**Current visible UI family:** `Lato`." | "**Current UI family:** `Lato`, recorded as the Latin character family across the main web trading platform." — "visible" implies a rendering observation the record does not make |
| 8 | Typography → Icons (212) | "states no icon size, weight or grid rule" | "The record names the Material Icons font as handling iconography throughout." — the original was a negative coverage claim about an icon-sizing domain the source never establishes |
| 9 | Typography → Imagery (217) | "establishes no illustration set, photography rule or gradient treatment" | dropped "photography rule"; the source establishes illustration and gradient as concepts in its own §7 Don't, and photography nowhere |
| 10 | Components → Record boundary (224) | "each carrying the default values its stylesheet states" | "…the record states for it" — narrating the evidence artifact rather than the record |
| 11 | Components → Surface states (234) | "seven states at the panel, card and field level" | "most of them at the panel, card or field level …; the last is stated for buttons" — one of the seven is control-level |
| 12 | Layout (360), Voice reading (369) | "The platform targets desktop-first…" stated flatly; the voice adjectives attributed to App Store copy tone | Layout now attributes the desktop-first and "degrades gracefully" characterization to the record. §10 ties only its *samples* to App Store tone, not its adjectives, so the adjectives are now presented as the material's own voice guidance |

After the fixes, **ten** readings remain and each carries an adjacent complete qualification. `grep -o 'derived editorial' DESIGN.md | wc -l` = **10** and `grep -o 'not Fugle-authored' DESIGN.md | wc -l` = **10**, on ten distinct lines: 15, 36, 46, 56, 67, 138, 167, 362, 369, 405. The 1:1 map of occurrence to portable location is the *Portable derived-editorial scope* table in `provenance.md`.

The opposite error was checked too: no measured value or documentary fact was demoted by attaching a qualification to it. The fifteen colour roles and their custom-property names, the spacing and radius scales, the five shadow values, the six duration steps and the three curves, every component field and variant, the type metrics and the two unitless ratios, the layout frame measurements, the seven state treatments, the four source artifacts and both dates, and the published Traditional Chinese strings all stand unqualified, because they are recorded values and document facts rather than readings. The two carried conflicts are stated flatly as well — that two passages of the same document give different values is a document fact, not an interpretation.

**Pass 2 (E2 cross-check).** Every row above was written after grepping the three output files, not from memory. Dual and multi-destination values name every destination. Counts are `grep -o … | wc -l` or `grep -noF` with the counted unit stated — occurrences, not lines.

Three assertions were wrong on first write and were corrected against the measurement rather than kept:

| Claim as first written | Measured | Correction |
|---|---|---|
| `.lds-ellipsis div` is sibling-only, 0 in the body | 1, at line 163 | The phrase was removed from the body; the claim then held |
| `--ifm-color-primary-dark` = 1 in the body, "the single deliberate exception" | 1 | The exception was withdrawn and the property removed; provenance now lists it as sibling-only at 0 |
| `rich harvest` is carried once, in Scope | 2, at lines 9 and 387 | Provenance corrected to say twice, beside each occurrence of `富果` |

| Claim | Re-measured |
|---|---|
| Unitless line-height ratios `1.4` / `1.5` in the outputs (A1a) | present as ratios in the Type roles table and again in the prose restatement; never converted to px |
| Primitive types (A1b) | `Type:` present on all 6 components; `button` and `card` — the two the gate tracks — both present |
| Verified metadata (A1c) | `tokens.source`, `tokens.extracted`, `components_harvested`, `omd`, `verified` all transcribed into provenance Identity; the absence of a `verification_v2` block recorded there with its 0-count |
| Sibling-only values in the body | 0 each for `#ff3737`, `#6fda1a`, `#545454`, `--t20`, `.lds-ellipsis div`, `transition:all`, `--ifm-color-primary-dark`, `156,854`, `manifest.json`, `富果股份有限公司`, `zh-Hant-TW`, `tw.fugle.flutter.app`, `NOT LISTED`, `source-file fetch` |
| D1 trigger phrases in the body | 0 |
| coverage sentences in the body | 1 — "State coverage is not complete here" (line 226), negated, as required (C3) |
| `not-applicable` cells citing non-observation | 0 |
| Portable Core claim markers | 7, one each, each closed with `design-md:claim-end`; 7 section anchors in order |
| Token loss / invention against the portable body alone | 0 / 0 — every hex, px, rem, ms and pct value in the source appears in the body, and the body introduces none the source lacks |

**E3.** No gate finding was worked around by changing notation. The one place where notation mattered — the unitless `50` and `9999` — was decided on A1a grounds before the gate ran: writing them as `50px` and `9999px` would have been both a form change and a token invention, and the record states them without units. Nothing in `provenance.md` was altered to dodge a scanner; the ledger quotes hexes and byte sizes in their exact form.

## Gate

`node test-v2/tools/migrate-reference.mjs --brand fugle --gate-only` → **PASS**, `problems: []`, and **no `unchecked` key**: the source has non-Latin runs, so `copy-loss` built needles and actually compared something for this reference.

Portable Core: `inspectDesignMd(...).conformance` from `scripts/design-md-core.cjs` → `level: "portable-core"`, `portable_core: true`, `reasons: []`, all 13 checks passing. Run separately from the gate, because the gate does not evaluate canonical claim bytes.

**The gate is not conformance evidence for most of the above.** It did check A5 here — 12 non-Latin needles, unlike the Latin-only references where it silently checks nothing — but it built no needle for the 2-character `富果` and none at all for the 174 Latin strings, so the Latin sweep above is hand work that the gate would have passed either way. B1 sibling promotion, D1a noun lists, C2 role reasoning, B2a adjacency and E2 log accuracy are all judgments it does not evaluate, and it returns the same verdict whether the qualifications are adjacent and complete or absent.

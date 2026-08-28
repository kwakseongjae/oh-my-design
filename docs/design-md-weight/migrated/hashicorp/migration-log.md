# HashiCorp migration log

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**

Source: `web/references/hashicorp/DESIGN.md`
Sibling read (not the migration input): `web/references/hashicorp/.verification.md`
Destination: `docs/design-md-weight/migrated/hashicorp/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/hashicorp/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use `grep -oF … | wc -l` per file, never `grep -c`.

Source SHA-256 `53df11016738daa9a9cb16b50b49d990ade7c3e9a9c6325521169845ddf40514` (`web/references/hashicorp/DESIGN.md`). Sibling SHA-256 `6f3896651b25a2889c3ccbe086eb806eeca3bfe6223f8c7c0b5fee3ce1f32609` (`web/references/hashicorp/.verification.md`). Worker-close portable DESIGN SHA-256 `1db2a856694b5c5245a5a8fe1decfaf2e0433d9f06b38a67597af0c42e5eefd8`.

Portable Core: `scripts/design-md-core.cjs` `inspectDesignMd` → `level: portable-core`, `portable_core: true`, `reasons: []`, placeholders 0. Run result only.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations + components | Portable file has no frontmatter. H1 is `# HashiCorp Design System` (`DESIGN.md` 1). Identity table `provenance.md` 7–23. Bare homepage `https://www.hashicorp.com` is provenance-only at Identity `provenance.md` 13 (`DESIGN.md` 9 dest 0 — fitpet-type false dual withdrawn). DESIGN 169 contains the host only as the webfont source prefix, not the identity homepage landing. `#1060ff` is dual: `DESIGN.md` 11/35/74/187 + `provenance.md` 14 (E2a). `type: simpleicons` / `slug: hashicorp` is provenance-only (`provenance.md` 15). |
| YAML `omd: "0.1"`, `verified`, `tokens.source: live-extract`, `tokens.extracted`, `components_harvested: true`, `verification_v2` | 분리 → provenance | A1c metadata. Table form `tokens.source` / `live-extract` `provenance.md` 17; colon-form `tokens.source: live-extract` Proof `222` only. Table `components_harvested` / `true` `19`; colon-form `components_harvested: true` `223` only. Table `ds.type` / `system` `22`; colon-form `ds.type: system` `224` only. DESIGN.md 0 for those ledger keys. |
| YAML `ds` (`name: Helios`, `url`, `type: system`, `description`) | 분리 → provenance · 이름·경계는 옮김 → DESIGN.md | 이중 목적지. `Helios` DESIGN.md Scope 9 + Assets 170; `ds.type: system` provenance only. Description phrase `product foundations, content, components, and patterns` at `DESIGN.md` 9 and `provenance.md` 23. `https://helios.hashicorp.design` DESIGN.md 9/170 + provenance 21/89/100/181 (21/83 withdrawn — 83 is the blank after `## Sources`). |
| YAML `tokens.note` (전문) | 분리 → provenance (인용 블록) · 경계는 옮김 → DESIGN.md | 이중 목적지. Note 전문 `provenance.md` 27. Portable Scope restates the three-route machine-token sentence at `DESIGN.md` 9 (`grep -oF "Only values observed in the supplied three-route capture are machine tokens"` provenance 1 · DESIGN 0; DESIGN uses the same clause without the display/system second half, which is restated at Family 149–151). |
| YAML `tokens.colors` 16 keys | 옮김 → Foundations Semantic color | `DESIGN.md` 74–89. Each role keeps its name, hex, and token-set key. Exact keys grepped: `tokens.colors.primary` (role line 74), `primary-border` 75, `primary-bright` 76, `canvas` 77, `surface` 78, `surface-muted` 79, `surface-dark`/`surface-deep` 80, `foreground` 81, `foreground-dark`/`on-dark` 82, `on-primary` 83, `muted`/`hairline` 84, `terraform` 88, `boundary` 89. Hexes `#1060ff` `#0c56e9` `#2b89ff` `#ffffff` `#fafafa` `#f1f2f3` `#15181e` `#0d0e12` `#3b3d45` `#d5d7db` `#efeff1` `#656a76` `#b2b6bd` `#7b42bc` `#f24c53` all ≥1 in DESIGN.md. |
| YAML `tokens.typography.family` (`ui: system-ui`, `display: HashiCorp Sans`) | 옮김 → Typography Family | `DESIGN.md` 149–150 with token-set keys. |
| YAML `tokens.typography` roles + §3 observed-hierarchy table | 옮김 → Typography Type roles | `DESIGN.md` 159–165. Unitless ratios stay ratios (A1a): `1.17` `1.19` `1.63` `1.69` at 159–164. Observed px line heights 96/62/50/22/26/26–27/24.013 stay beside them. Heading variant 42px/700/50px at 161 (prose-only). Navigation `15.008px` / `24.013px` at 165. All six YAML `use` strings verbatim at 159–164 and card use at 374. Tracking keeps both forms at 162: YAML `1.3` and observed `1.3px`. |
| YAML `tokens.spacing` 7 steps | 옮김 → Foundations Spacing · also Layout | 이중 목적지. Keys at `DESIGN.md` 97–103 (`xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48`). `md: 12` is not `base: 16`. Rhythm restated at 105 and 393. |
| YAML `tokens.rounded` 5 steps | 옮김 → Foundations Shape | `DESIGN.md` 111–115 (`square: 0` · `sm: 2` · `nav: 4` · `control: 5` · `card: 6`). `nav: 4` is not `control: 5`. Source sentence that the only captured 8px radius is not the card standard at 117 and 393. |
| YAML `tokens.shadow.control` + §4/§6 shadow variants | 옮김 → Foundations Elevation · Components | 이중 목적지. §6 “two-layer 5% shadow” at `DESIGN.md` 121. Token-set `rgba(101,104,118,0.05)…` at 123 (`tokens.shadow.control`). §4 primary/medium `rgba(101, 106, 118, 0.05)` at 124/192/216. §4 large/Terraform/Boundary `rgba(97, 104, 117, 0.05)` at 125/239/262/285. Card outline both byte forms at 126/372/374. Dark-input inset at 127/350. Not merged. |
| YAML `tokens.components.card` (`type: card`) | 옮김 → Components Light content card | `DESIGN.md` 365–376. A1b: `Primitive type: \`card\`` at 368. YAML `use` at 374. Kind+map omitted (C4) at 376. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; traits 34–37. Sober/division-of-labor reading qualified at 11 (B2/B2a). |
| §1 / §11 연혁 (2008 UW, November 2012, 2013, April 2024, February 2025, IBM) | 옮김 → Experience Scope | `DESIGN.md` 13. Also noted as narrative-not-token at 13 and `provenance.md` 69/227. Years grepped in DESIGN.md: `2008` 1 · `November 2012` 1 · `2013` 1 · `April 2024` 1 · `February 2025` 1. |
| §1 / footer Helios·font·terms URL | 분리 → provenance · 경계는 본문 유지 | Narrative list `provenance.md` 175–181. Helios URL dual: DESIGN 9/170 + provenance 21/89/100/181 (E2a). |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | `DESIGN.md` 72–91 including “No other product-color variant is included”. |
| §3 Typography Rules | 옮김 → Typography & Assets | Evidence classes 141–145; Family 149–151; Type roles 159–165. Metro Sans Book at 141. `__hashicorpSans_96f0ca` / 21 / WOFF2 / 713 / DejaVu declared-only / Brand Studio+terms license at 142–145. |
| §4 Component Stylings 10 records | 옮김 → Components & States | `DESIGN.md` 183–388. A1b: `Primitive type: \`button\`` ×5 (186/210/233/256/279). Selectors kept on each Use line and in `provenance.md` Capture selectors (E2a). Disabled primary `#fafafa` / `#8c909c` / `rgba(101, 106, 118, 0.2)` at 195. Boundary text `#0c0c0e` at 281. Email `#616875` / Arial at 347–351. |
| §4 캡처 한계 문장 | 옮김 → Components Capture record | `DESIGN.md` 177 (zero interaction events; hover/focus/pressed/modal/menu/error omitted). |
| §5 Layout Principles | 옮김 → Layout & Platforms | `DESIGN.md` 393. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | `DESIGN.md` 119–127. |
| §7 Do's | 옮김 → Experience Application rules | `DESIGN.md` 52–54. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | `DESIGN.md` 60–62. Source's own three Don'ts only. No invented out-of-scope domains. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `DESIGN.md` 395. Source sentence kept: do not infer breakpoint values or mobile transformations from the desktop-route evidence. |
| §9 Agent Prompt Guide | 삭제 | Tool-facing restatement. Values it names are already in Foundations/Components (`#1060ff`, `#fafafa`, 5px, 16px/500 system-ui, control shadow, Terraform `#7b42bc`, Boundary `#f24c53`). No slot-less delegation. Check itemised at `provenance.md` 190. |
| §10 Voice & Tone | 옮김 → Content & Locales | Official terms at `DESIGN.md` 400. Voice samples byte-preserved at 404–406: “Get started”, “Contact us”, “The Infrastructure Cloud”. Short-imperative reading qualified at 400 (B2/B2a). |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: Mitchell Hashimoto, Armon Dadgar, University of Washington 2008, November 2012, 2013, The Infrastructure Cloud, April 2024, February 2025 IBM. Source's own “should not be read as a claim about the captured public UI’s runtime tokens” kept in the same paragraph. |
| §12 Principles — 4 numbered | 옮김 → Experience Principles | `DESIGN.md` 43–46 under the B2a form at 41, closed with Helios (rulebook v12 B2a 전제 주석). “beauty works better” at 46. |
| §13 Personas | 옮김 → Experience Audience | `DESIGN.md` 28. Official stakeholder groups only. Source invents no named or demographic personas; none are re-hosted (D2, D2a). Disposition at `provenance.md` 189. |
| §14 States | 옮김 → Components Capture record + per-component applicability | Full §14 body at `DESIGN.md` 179 (A2). Applicability maps on 7 interactive controls (183–363). Absence is never a `not-applicable` reason (C1). Marketing CTAs, nav trigger, and tabs close loading/error/success with destination/tab role reasons (C2). Email field: loading/success not-applicable (field does not commit); error applicable. Card and badge omit kind+map (C4) at 376/388. No complete-coverage claim (C3) at 181. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Source sentences at `DESIGN.md` 131. B3 is held: the same line names transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component computed-observation gate (E2c). No unsourced curve was present to delete. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts / Refero | 분리 → provenance | Freshness `provenance.md` 31–39. Tier 1 `95–106` · Tier 2 `108–111` (90–108 withdrawn — 90 is Sources font-announcement, 108 is the Tier 2 heading only). Conflict matrix `161–171` (160 is blank before the heading; 174 is blank after the Narrative heading). Portable Layout keeps the source's 8px-not-card-standard sentence at 117/393; it does not promote Refero 4px/8px. |

## Sibling handling (`web/references/hashicorp/.verification.md`)

The sibling exists — confirmed with `find web/references/hashicorp -type f`. It is a separate canonical file, not the migration input.

- Full record summarised at `provenance.md` 41–60 and is **not** promoted into `DESIGN.md`.
- Sibling-only strings kept in provenance and measured 0 in DESIGN.md: `2026-07-13T11:18:27.319Z` · `Official design-system context only` · `Infrastructure automation` · `Enterprise-clean` · `834ce97f-61f2-4b12-bf5c-e9fad2544456` · `data-omd-capture="10"` · `rgb(16, 96, 255)`.
- Pricing-tab sibling line-height `24px` is not used as the control token; portable body keeps §3 `26–27px` and YAML `1.69`.

## A5 / A5a verification

The gate's `copy-loss` needles come from contiguous non-Latin runs. This brand is Latin, so `compared < candidates` is expected and the A5a hand sweep is mandatory.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Quoted strings in the source (same quote regex) | 124 | — | — | Most are dates, hex, selectors, YAML keys. |
| Quoted strings in the sibling | 8 | — | — | Directory gloss and RGB samples stay in provenance. |
| Brand-issued needles (CTA, positioning, font announcement, YAML `use`, principle title, family names) | 15 | 0 | 0 | All fifteen survive in `DESIGN.md` (token note full text in provenance). |

Needles confirmed present in `DESIGN.md`: Get started, Contact us, The Infrastructure Cloud, beauty works better, Workflows, not technologies, HashiCorp Sans, Metro Sans Book, Helios, and the six YAML `use` strings.

A5 분모: hand-sweep published needles 15 / 미생존 0. Gate `copy-loss` `compared: 0` / `candidates: 155` — A5a was mandatory. `verdict: PASS` is not cited as copy-preservation evidence.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand hashicorp --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 0, candidates: 155 }]`. First run after the log existed blocked on `token-loss` `px:1.3px` and `pct:5%`; both source forms were restored (`DESIGN.md` 162 and 121) and the gate was re-run. `inspectDesignMd` reports `portable_core: true`. Neither result is cited as semantic adequacy (E2c).

## Deviations recorded

- `DESIGN.md` is 4,553 words by `wc -w` at worker-close, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: ten component records, dual shadow byte forms, YAML unitless line-heights beside observed px, the full §11 founding narrative, and B2a qualifications. Auditor F3 added three complete-form qualifications in place (line count 447 unchanged).
- HashiCorp publishes Helios, so every derived-editorial close uses `including the published Helios documentation` (rulebook v12 B2a 전제 주석). Measure `grep -oF 'derived editorial implementation inference' DESIGN.md | wc -l` = 16 = `not HashiCorp-authored` 16 = `including the published Helios documentation` 16. Provenance derived ledger 16 rows (E1 1:1). Worker-close 13 is the pre-audit count.

## F1 B2a rescan (mandatory final pass)

The finished `DESIGN.md` was re-read from line 1. Every causal, interpretive, or judgment sentence — including Scope's Helios-separation sentence, Content's short-imperative reading, and Docs-citation characterizations — was asked whether it is a HashiCorp-issued fact or an observation-derived reading. Sixteen complete-form qualifications listed in `provenance.md` Derived-editorial inventory cover those readings (worker-close 13; auditor added Scope-domain/non-promotion fold-in at 9, Shape 8px at 117, Evidence-class resolutions at 146, Layout restated-rhythm at 393). Source-stated narrative (2008 / November 2012 / 2013 / April 2024 / February 2025) and published copy were left unqualified. Sibling-only Helios treatment (“Official design-system context only; no values promoted from it without raw capture evidence”) was removed from the portable body and kept in provenance.

## F2 E2 contrast (mandatory final pass)

Each log row was written only after `grep -oF` against `DESIGN.md` and `provenance.md`. Dual destinations name both files. “B3 is held” is used only because `DESIGN.md` 131 contains the five evidence kinds and the per-component gate in full text. “B2a 16=16” is used only because both counts grep to 16. Auditor F3 corrected false destinations (homepage DESIGN 9; Helios P 83; Tier 90–108; Narrative 177–184; Conflict 160–174; §9 P 188; §13 P 187) to the measured lines.

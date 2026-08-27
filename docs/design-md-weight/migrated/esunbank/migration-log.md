# E.SUN Bank migration log

Source: `web/references/esunbank/DESIGN.md`
Destination: `docs/design-md-weight/migrated/esunbank/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/esunbank/provenance.md`
Date: 2026-08-26
Worker: opus5 T2
Revisions: F3 separate-session audit (`audit-log.md`, 20 fixes) → wave-23 revision session after grok-4.6 semantic review (3 FAILs, recorded below)
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9**
Gate: `node test-v2/tools/migrate-reference.mjs --brand esunbank --gate-only` — result recorded at the end of this file, with the reason it is not conformance evidence.

## A5 — brand-published strings

The catalog `name` is the Latin `E.SUN Bank`, so the H1 is `# E.SUN Bank Design System` and the Latin form is the one the body uses in running prose, exactly as the source does. The Traditional Chinese company name `玉山銀行` is carried byte-for-byte into Experience Scope at first mention (`E.SUN Bank (玉山銀行)`), beside the Latin form rather than replaced by it, and `玉山` alone survives in the Jade Mountain sentence.

Every 繁體 run the source publishes is present in the portable body byte-for-byte. Counts below are occurrences, measured per string with `grep -oF '<string>' DESIGN.md | wc -l` — not `grep -c`, which would report matching lines: `玉山銀行` ×1, `玉山Wallet` ×8, `線上開戶` ×10, `登入` ×9, `返回首頁` ×6, `外幣匯率` ×4, `最新消息` ×3, `探索數位服務` ×7, `個人金融` ×7, `企業/商家` ×6, `私銀/亞資` ×6, `ESG 永續金融` ×6, `產品與服務` ×3, `生活金融` ×3, `申辦/繳費` ×3, `信用卡/支付` ×3, `信用卡介紹` ×3, `一個好的ESG策略就是一個好的企業發展策略` ×3, `便利支付，交給玉山Wallet` ×3, `便利你的生活日常` ×1, `很抱歉，找不到您所查詢的頁面` ×3, `限時優惠` ×1, `微軟正黑體` ×6, `新細明體` ×3, `非图形` ×1. `非图形` is written with the source's simplified characters, not normalised to 非圖形.

The English renderings the source supplies alongside three of those strings ("A good ESG strategy is a good business development strategy", "Explore digital services", "making your everyday life more convenient") are placed **beside** the published strings and labelled as reading aids. No published string is replaced by a translation, and the ESG headline keeps its embedded Latin `ESG` and the Wallet sub-head its embedded `Wallet`.

Latin-side check (the gate's `copy-loss` sees non-Latin runs only, so this was done by hand). Every quoted Latin string in the source was extracted and searched across the three outputs. The strings that do not survive verbatim are the token-record `use:` descriptions and the §9 prompt fragments; each was checked individually and its content lands in a Role/Use line or a Foundations rule — the audit is the table below. No brand-published Latin label was lost.

## Section-by-section disposition

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity `id` / `name` / `country` / `category` | 분리 → provenance Identity | Portable file has no frontmatter. `name` `E.SUN Bank` is dual (E2a): the ledger + the H1 and the portable prose. |
| YAML `homepage` `https://www.esunbank.com` | 분리 → provenance Identity | The bare homepage value lands in the identity ledger only; the Surfaces / Sources / Tier 1 tables carry the two route URLs, not it. The portable Scope names the site as `esunbank.com` without repeating the bare URL. The two inspected route URLs `https://www.esunbank.com/zh-tw/personal` and `.../personal/credit-card` are dual (E2a): portable Scope + the provenance Surfaces/Sources/Tier 1 tables. |
| YAML `primary_color` `#00a19b` | 옮김 → Foundations Semantic color + Experience Distinctive traits + Capture-bound application + Typography & Assets Type roles + the state contract Active-nav row + seven component records + Governance Named gaps; 분리 → provenance Identity | Multi-destination, grep-verified: 18 hex occurrences in the portable body plus the identity ledger (E2a) — Distinctive traits 1, Capture-bound application 1, Semantic color 1, Type roles 2 (Section Heading, Feature Sub-head), state contract Active-nav 1, Primary CTA 2, Large Return CTA 1, Hero Ghost Link 2, Login Link 1, Top-tier Navigation 3, Content Service Card 1, Section Heading Badge 1, Named gaps 1. Experience Avoid carries the color by role ("beyond teal", "teal for structural headings") and not as the hex, so it is not a destination for the value. |
| YAML `logo` (`type: favicon`, apple-touch-icon slug) | 옮김 → Typography & Assets; 분리 → provenance Identity | Dual (E2a). The same URL appears in both; the portable line names it as the site icon and as the catalog logo entry of type favicon. |
| YAML `verified: 2026-06-22`, `omd: "0.1"` | 분리 → provenance Identity / Freshness | `omd: "0.1"` is ledger-only. The date `2026-06-22` is dual (E2a): the ledger + the portable Scope, Font evidence, Capture record, and Brand-published lines, all of which date the inspection. |
| YAML `tokens.source: live-extract`, `tokens.extracted: 2026-06-22`, `components_harvested: true` | 분리 → provenance Identity (three fields) + Freshness (`tokens.extracted`) + Proof notes (`components_harvested`) | Ledger fields kept as values (A1c). Grep-verified: `live-extract` and `bgFreq`/`fgFreq` reach provenance only, 0 hits in the portable body. `components_harvested` is dual (E2a): Identity + Proof notes; the portable Capture record states the same fact as prose ("harvested the components below"). |
| YAML `tokens.note` | 옮김 → Foundations Semantic color; 원문 분리 → provenance Identity | Dual (E2a). The note's four operative facts — primary as the live interactive teal, deep teal for hero headlines, white canvas, soft teal shadow surface — are the Primary / Deep Teal / Canvas / Teal Tint bullets. The ledger quotes the note in full. |
| YAML `tokens.colors` (12 keys) | 옮김 → Foundations Semantic color | All twelve hexes preserved at field granularity, each as its own named role. `on-primary` `#ffffff` keeps a separate bullet from `canvas` `#ffffff` rather than being merged (A4), and `muted-alt` `#999999` stays tertiary text rather than being folded into `muted` `#7c7c7c`. |
| YAML `tokens.typography.family` (display / ui / fallback) | 옮김 → Typography & Assets Family | Three keys, three bullets: `Noto Sans TC`, `Microsoft JhengHei`, `Arial, sans-serif`. |
| YAML `tokens.typography` 7 roles + §3's Sub-nav row | 옮김 → Typography & Assets Type roles | Eight rows: display-hero 38/700/1.4, page-title 36/500/1.5, section 32/500/48px (1.5), subsection 20/500/30px (1.5), sub-nav 18/400/1.4, body 16/400/1.5, button 16/400/1.0, nav 14/400–500/1.4. Unitless ratios stay ratios (A1a); the two px line heights the source states exactly (48px, 30px) are kept next to their ratio. Every `use:` string lands in the Use column. |
| YAML `tokens.spacing` (8 keys) | 옮김 → Foundations Spacing + Layout & Platforms | Each key named with its value: `xs` 4px, `sm` 8px, `md` 16px, `base` 20px, `lg` 24px, `xl` 30px, `xxl` 48px, `section` 64px. Layout repeats the scale as the page rhythm. |
| YAML `tokens.rounded` (4 keys) | 옮김 → Foundations Shape | Each key named: `sm` 4px, `md` 8px, `lg` 16px, `full` 9999px. `lg` and `full` are the two that a value-level check would miss — 16 also appears as the body font size and 4/8 appear in the spacing scale — so both carry an explicit named line with the source's own limits ("not observed in primary surfaces / reserved for special UI", "not the primary pattern"). |
| YAML `tokens.shadow.teal` / `.none` | 옮김 → Foundations Elevation (+ Distinctive traits, Capture-bound application, two card records, two state rows) | `rgb(208, 230, 230) 0px 0px 12px 0px` is multi-destination (E2a), grep-verified at 5 value occurrences: Elevation, Distinctive traits, Feature Card and Exchange Rate Table Card in full, and Capture-bound application in the bare `rgb(208, 230, 230)` form. The Loading (data fetch) and Skeleton state rows carry the same shadow as the source's prose ("teal-tinted ambient shadow", "teal-shadow glow") rather than as the value. `none` is the Flat (Level 0) treatment. |
| YAML `tokens.components` (9 records) | 옮김 → Components & States | Verified `type:` values preserved per component as an explicit `Type:` line — button ×3, tab ×1, card ×3, badge ×1, input ×1 — rather than flattened into `Kind: interactive` (A1b). Every bg / fg / radius / padding / height / font / border / use field lands on its component. |
| §1 Visual Theme & Atmosphere — narrative and scope | 옮김 → Experience Scope | Bank identity, the esunbank.com surface, and the two-route scope boundary. The source's evaluative framing of the bank itself — "Taiwan's most digital-forward commercial bank", and the "gravitas" and "workhorse" asides in the same section — is not carried; the factual half is (a Taiwanese commercial bank, esunbank.com, deep teal on campaign headlines, and the two Traditional Chinese families as the computed stack). |
| §1 — "clean, credentialed, warmly approachable without feeling corporate-cold", "not aggressive: it carries a natural, ESG-conscious warmth", "responsible finance without the stiffness of traditional banking navy", "teal means important, navigational, or actionable", "depth comes not from shadows per se", "even the depth signal reads as E.SUN", "genuinely invested in its digital product", "everyday consumers navigating credit cards, savings, and investments" | 옮김 → Experience Scope, under an adjacent complete qualification | These are the source author's evaluative readings. The adjacent sentence reads "a derived editorial implementation inference from the verified surfaces; it is not E.SUN-authored or a separately published UI specification" (B2, B2a). |
| §1 Key Characteristics (8 bullets) | 옮김 → Experience Distinctive traits | Token facts kept as observations. The two evaluative halves ("brand-colored depth", "product and values aligned") were restated as what was observed — the teal ambient shadow value, and the ESG hero campaign plus the 探索數位服務 section. The third evaluative half, "Traditional Chinese web font standard for legibility", was kept as the source wrote it and carries an adjacent complete qualification below the list, with the computed stack named as the measured part (B2a). |
| §2 Color Palette & Roles (Primary / Surface & Neutral / Text / On-Color) | 옮김 → Foundations Semantic color | All four groups; every role description preserved. The `#1c1c1c` rationale ("for maximum legibility without harsh pure-black contrast") was reduced to the factual half ("a near-black rather than pure black") rather than kept as an unqualified reading (B2a). |
| §3 Font Family + System Fallback | 옮김 → Typography & Assets Font evidence + Family | The five evidence classes are kept distinct: official product-use, live computed surface-use, declared fallback chain, official distributed asset, unresolved claim. The label is written `Unresolved claim` rather than a bare `Unresolved`, which the conformance checker reads as an unfilled placeholder; the catalog convention qualifies the label the same way. The source's assertion that Noto Sans TC is "loaded for all Traditional Chinese content" is attributed to the source rather than asserted, because the observation record carries the computed font-family only. |
| §3 Hierarchy table (8 rows) + Principles | 옮김 → Type roles + Experience Capture-bound application | The four §3 principles land as application rules: teal for structure and ink for content; weight 500 as the section voice; the 32px / 48px H2 rhythm; Traditional Chinese first (which also lands in Content & Locales Locale as a locale rule). |
| §3 Principles #2 comparative aside | 삭제 | "Unlike Korean peers that use ExtraBold for sections" is a comparison to other reference entries, not an E.SUN fact. Deleted and recorded in provenance Deletions. Its operative half — Medium (500) is the deliberate section voice, confident but approachable, not loud — is retained in Capture-bound application and Avoid, so no value or rule is lost. |
| §4 Component Stylings (12 components) | 옮김 → Components & States | All twelve: Primary CTA 線上開戶, Large Return CTA 返回首頁, Hero Ghost Link, Login Link 登入, Top-tier Navigation, Sub-navigation, Text Input / Form Field, Feature / Activity Card, Exchange Rate Table Card, Hero Service Item Cards, Content Service Card, Section Heading Badge. Three of them (Login Link, Sub-navigation, Content Service Card) exist only in the §4 body and not in the token record; they are preserved with their measured values, and their `Type:` comes from the source's own noun for each rather than from an inference — "Login text-link" → `link`, "Secondary nav tabs on product pages" → `tab`, and the §4 "Cards & Containers" grouping plus "Product introduction card" → `card`. |
| §4 Hero Ghost Link foreground | 옮김 → Components & States as an unresolved conflict + Governance Named gaps | The token record says `fg: "#00a19b"` and the §4 body says `Text: #007a7a` for the same field. Both values are recorded, neither is chosen (Core: conflicts stay conflicts). Also recorded in provenance Freshness, because the source footer says "Conflicts unresolved: none". |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness / Tier 1 / Tier 2 | The footer string is quoted verbatim in provenance. Both Tier 2 lookups are recorded with their zero-result outcome. |
| §5 Layout Principles (spacing, grid, whitespace, radius scale) | 옮김 → Layout & Platforms + Foundations Spacing / Shape | Base unit and scale, the full-width centred structure, both page orders, the 3–4 column desktop grid collapsing to one column, and the 24px / 30px / 20px placements. The radius scale with its two limits lands in Foundations Shape. The whitespace reading carries an adjacent qualification; the 24px, 30px, and 20px paddings are named as the measured parts. The single-column mobile collapse restated in Spacing and grid carries its own adjacent complete qualification there, since the collapsing-strategy qualification under Touch targets sits three subsections away (B2a). |
| §6 Depth & Elevation (3 levels + philosophy) | 옮김 → Foundations Elevation | All three levels including `rgba(0,0,0,0.51)`. The "even the depth signal reads as E.SUN" philosophy paragraph is kept under an adjacent complete qualification (B2a). The overlay level is noted as attached to the source's elevation table rather than to a named captured element. |
| §7 Do's (8 items) | 옮김 → Experience Capture-bound application | Kept as application rules under an adjacent complete qualification, since they are the source author's prescriptions rather than published doctrine (B2, B2a). Two further rules from §3 Principles join the same list, making 10. |
| §7 Don'ts (8 items) | 옮김 → Experience Avoid | All eight boundary prohibitions, under an adjacent complete qualification on the list head — they are the source author's prescriptions read off the captured surfaces, not published doctrine, exactly as the §7 Do's are. The three intent attributions inside them ("structured and precise", "deliberate section voice", "trust signal in the banking context") carry a second adjacent complete qualification below the list, with the measured parts named separately (B2a). The red/orange/purple prohibition is reconciled with `#c92e34` in the same bullet: the validation red is a form-error color, not an accent. |
| §8 Responsive Behavior (breakpoints, touch targets, collapsing) | 옮김 → Layout & Platforms | The full breakpoint table (768px, 1024px), all three touch-target heights, and all four collapsing rules. The observation record covers two desktop routes and no breakpoint measurement, so the table, the collapsing strategy, and the tap-comfort reading carry an adjacent complete qualification, and the three heights are named as desktop measurements rather than accessibility-target rules (B2a). |
| §9 Agent Prompt Guide — Quick Color Reference | 삭제 | Nine colour restatements, each already a named Foundations role. Grep-verified: `#00a19b` `#007a7a` `#ffffff` `#f4f8fa` `#d0e6e6` `#1c1c1c` `#7c7c7c` `#d9d9d9` all present in Foundations Semantic color, and the `rgb(208, 230, 230)` ambient form in Foundations Elevation. Nothing unique to §9 in this block. |
| §9 Example Component Prompts (4) + Iteration Guide (7) | 삭제, 두 값만 옮김 → Components & States Top-tier Navigation | Tool-facing packaging. Every value they restate lands elsewhere, grep-verified: 46px / 10px / 16px Noto Sans TC 400 / `1px solid #00a19b` → Primary CTA; 8px radius + teal shadow + 32px/500 + 16px/400 → Feature Card, Type roles, Foundations; 48px line-height → Type roles Section Heading and the Capture-bound application rhythm rule; 4px vs 8px radius → Foundations Shape. One fact existed **only** in §9 and was therefore moved rather than deleted (A3): the `#ffffff` header background, now on the Top-tier Navigation record. The 70px header height that sits beside it in the same §9 prompt is not §9-only — §4 Top-tier Navigation already states "in 70px header" — and it lands on the same record from there. |
| §10 Voice & Tone — three verbatim voice samples | 옮김 → Content & Locales Brand-published lines | `一個好的ESG策略就是一個好的企業發展策略`, `探索數位服務`, `便利支付，交給玉山Wallet` byte-exact, under the "marked verbatim from the live homepage, 2026-06-22" heading the source's own markers establish (A5). The source's role notes beside them ("principled declaration", "invitation to digital tools", "benefit + brand product") are its editorial reading and carry an adjacent complete qualification after the list, with the published strings and their live markers named as the measured parts (B2a). |
| §10 Voice & Tone — characterisation + 5-row context table | 옮김 → Content & Locales Voice reading, under an adjacent complete qualification | The "trustworthy, progressive, accessible" characterisation and all five context rows are the source author's editorial reading (B2, B2a). |
| §10 Forbidden register | 옮김 → Content & Locales Forbidden register | `限時優惠` byte-exact. Explicitly labelled an authoring rule for this style, not an E.SUN-published policy, and stated to assert nothing about the bank's products, lending practice, or compliance position — the financial-domain separation this reference requires. |
| §10 marketing line `便利你的生活日常` | 옮김 → Content & Locales Brand-published lines, at its own evidence class | The source quotes it in §10 prose without the *(verified live)* marker the three voice samples carry, so it is listed separately rather than promoted into the verbatim set. |
| §11 Brand Narrative | 옮김 → Experience Scope | 1992 founding and the liberalization context, the 玉山 / Jade Mountain namesake, three decades of growth, the digital-transformation evidence (探索數位服務, 玉山Wallet and mobile banking, the ESG campaign headline), and ESG 永續金融 sitting at the same navigation tier. The two readings the source itself flags as editorial — the jade colour tying the digital identity to the namesake and to public ESG values, and ESG as core rather than PR — are carried under the adjacent complete qualification with that flag stated (B2a). The namesake metaphor and the "most respected … consistently recognized for" reputation line are kept in reduced form and now carry their own adjacent complete qualification in the same paragraph. **삭제:** §11's closing design-language sentence ("clean enough to feel modern, trustworthy enough to feel like a bank, and warm enough in its teal palette to feel like a partner rather than a creditor") is a pure evaluative reading with no value or rule in it, and its partner-not-transactional half already reaches Content & Locales from §10; grep-verified: `creditor` 0 hits in the portable body (it survives only here and in the provenance deletion record). |
| §12 Principles (5 numbered items with UI implications) | 옮김 → Experience Principles, under an adjacent complete qualification | All five kept with their UI implications, using the approved wording (B2a). |
| §13 Personas | 삭제; 경계 문장만 옮김 → Experience Audience | The source itself marks the four archetypes as fictional. Portable Audience keeps that boundary; the four names, ages, cities, and biographies are deleted and are not re-hosted in provenance (D2). The segment labels quoted inside the source's own persona disclaimer are not re-hosted either — grep-verified: 0 hits for every persona name, every city, and the disclaimer's segment phrase across all three outputs. Primary tasks (`count=5`) come from §1/§4/§5/§11 surface evidence, not from §13. |
| §14 States (11 rows) | 옮김 → Components & States Source state contract + per-component applicability | 본문 보존: the full eleven-row table survives verbatim, including `很抱歉，找不到您所查詢的頁面`, `返回首頁`, `#c92e34`, `#f4f8fa`, `#7c7c7c`, `#00a19b`, the 65px CTA, and the 30px / weight 500 heading that exists in this table alone (A2, A5). Only the two rows the source marks *(verified live)* are presented as observed; the other nine carry an adjacent complete derived-editorial qualification (B2a). Rows feed applicability where they name a control: Disabled → the `disabled` reason on the four records that cite the contract (Primary CTA, Large Return CTA, Hero Ghost Link, Text Input); the other four declared maps (Login Link, Top-tier Navigation, Sub-navigation, Hero Service Item Cards) give a role reason and omit the treatment instead. Error (form validation) → the Text Input `error` reason; Active nav → the Top-tier Navigation observed-active line. `not captured` is never used as a `not-applicable` ground (C1); every `not-applicable` cell gives a role reason (C2); coverage is stated as not complete (C3); the three containers with no interactive-kind evidence declare no map at all (C4). No graph delegation. |
| §15 Motion & Easing | 옮김 → Foundations Motion; 무출처 커브 3개만 삭제 → provenance 원장 | The duration table (100ms / 200ms / 350ms) with its uses, the three easing token names with their uses, and the reduced-motion contract stay in the portable body. Only the three unattributed `cubic-bezier` strings are deleted; the source's observation record contains no motion measurement. Grep-verified: 0 curve values in the portable body, 3 in the provenance omission ledger (E2b). Foundations Motion states the promotion gate in full — transition properties, animation name, duration, easing, and reduced-motion behavior, observed per component, with the explicit note that a single named curve or duration is not that gate (B3). |
| HTML comment "OmD v0.1 Sources — Philosophy Layer" | mixed: 관측 원장 분리 → provenance; 한정 문장 옮김 → portable | The Tier 1 route list, the playwright method, the nine computed observations, and the two bgFreq/fgFreq count lines — eleven bullets in all — go to the provenance observation ledger. The comment's three evidence-class statements are dual (E2a): quoted in provenance and carried in the portable body — the fictional-persona flag in Audience, the verbatim-voice-sample status in Content & Locales, and the two named interpretive claims in Scope. |
| Sibling `web/references/esunbank/.verification.md` (5,690 bytes) | 분리 → provenance Canonical proof; 값은 승격하지 않음 | Adopted as ledger evidence, not as portable authority. It supplies the full inspection method, the inspection date, the two inspected URLs, 20 raw computed samples, the 16 strings it names as measurement targets, the logo decision (apple-touch-icon 3,208 bytes over the Google proxy 726 bytes), the TW brand-owned source statement, and the conflict matrix. Ten of its samples are sibling-only, carrying between them four element labels the source never names (`玉山銀行官方網站`, `玉山特匯日`, `信用卡 / 支付`, `常用服務`), three CSS selectors, and eight element heights. None reaches the portable body; each of those values returns 0 from a literal grep of `DESIGN.md`. Live-DOM measurement and the source `DESIGN.md` reconstruction are separate evidence domains, so adoption stops at the ledger. |

## Named gaps check (D1a)

Every noun enumerated in Governance → Named gaps names a domain the source itself establishes, grep-verified against `web/references/esunbank/DESIGN.md`:

| Named gap | Source basis |
|---|---|
| exact cubic-bezier curves for the three easing roles | §15 Easings table names all three roles and carries the three curves |
| transition properties behind the recorded durations | §15 "all transitions collapse to instant" |
| hover appearance of any control | §15 duration table, "Nav hover, button hover feedback" |
| Hero Ghost Link text color | §4 `Text: #007a7a` versus YAML `fg: "#00a19b"` |
| the surface carrying the 16px `lg` radius | §5 "Large (16px): not observed in primary surfaces (reserved for special UI)" |
| the captured element behind the `rgba(0,0,0,0.51)` overlay level | §6 Overlay (Level 2) row |
| corroboration for the "loaded for all Traditional Chinese content" statement | §3 Font Family makes the claim; the source's observation list records the computed family only |
| 企業/商家, 私銀/亞資, ESG 永續金融 values; 玉山Wallet and mobile banking | §4 Top-tier Navigation use string; §10 and §11 name 玉山Wallet and mobile banking |
| any value on whatever the header's 登入 link opens | §4 Login Link (登入) — the source records the link and its measured fields; it records nothing about a destination, so the gap is written about the link, not about a named surface |

No domain the source leaves unmentioned is listed, and no gap is written as a negative sentence about an unestablished domain.

## E1 process-leak check

`node test-v2/tools/process-leak-check.mjs` → esunbank absent from `detail`, 0 hits, re-run after the wave-23 revision below. The body carries no clause id, wave number, ledger pointer, Tier grading, or sidecar reference; the only specification reference is `Core §4.4`, which is the approved idiom. `Tier 1` / `Tier 2`, `bgFreq` / `fgFreq`, `live-extract`, and the omitted curve strings appear in provenance only, grep-verified at 0 hits in `DESIGN.md`.

## Wave 23 revision — grok-4.6 semantic review, 3 FAILs

Revision session, separate from both the migration worker and the F3 auditor. The F3 auditor's 20 fixes
were left intact; nothing in this pass reverts one. No token value, component-table value, state
applicability verdict, section structure, or byte of `web/references/esunbank/DESIGN.md` was changed.

### 1. D1 — a domain the source never establishes

Measured first: `grep -o 'signed-in' web/references/esunbank/DESIGN.md | wc -l` = 0 and
`grep -o 'sign-in' … | wc -l` = 0. The source records the control as "**Login Link (登入)** … Use:
Login text-link in the global nav header" and records nothing about where it goes. The portable body
nonetheless built two claims on a destination domain: Foundations → Evidence-domain boundary excluded
"a signed-in surface" from coverage, and the Login Link `error` row placed authentication failure on
"the sign-in surface, which is outside this contract". Writing "that domain is outside this contract"
asserts the domain exists; the source does not establish it.

Fixed by rewriting all three occurrences around the observed link instead of an invented surface. A
third occurrence was found in the same table and fixed with them: the `loading` row said "This link
opens the sign-in route", naming a route the source never records.

| Location | Was | Now |
|---|---|---|
| Foundations → Evidence-domain boundary | "…or to a signed-in surface" | "The header's 登入 link was measured on those two routes as a link — text color, radius, padding, and type — and nothing it opens was measured." Those four are exactly the fields the source's §4 record carries; the sibling's `height: 45px` was deliberately not borrowed. |
| Login Link → `loading` | "This link opens the sign-in route; the link itself does not enter a loading state" | "The measured control is a navigational text link; it hands off rather than running an operation in place, so it has no loading state of its own" |
| Login Link → `error` | "Authentication failure belongs to the sign-in surface, which is outside this contract, not to this header link" | "Nothing resolves on this link — it hands off to whatever it opens — so no failure outcome can render on it" |

Both `not-applicable` verdicts are unchanged; only the grounds are, from an unestablished domain to the
observed role of the measured control. `applicable` rows were not touched. Governance → Named gaps was
rewritten in the same terms: "any surface reached through 登入" became "any value on whatever the
header's 登入 link opens — the link itself was measured, its destination was not", and the D1a table
row above now states that basis. After the fix, `grep -o 'signed-in' DESIGN.md | wc -l` = 0 and `grep -o 'sign-in'
DESIGN.md | wc -l` = 0 as well. The `disabled` row, which had read "A sign-in entry point can be
unavailable", was rewritten to the source's own noun — "The reviewed material calls it a login
text-link, and a login entry point can be unavailable" — so the whole table is now grounded in the
link the source records rather than in a domain it does not. The row stays `applicable`.

### 2. E1 — the derived-provenance ledger was narrower than the body

The provenance file recorded a derived-editorial boundary for three things only: Motion (under the
omitted-curves section) and §14 States and §8 Responsive (under source-side gaps). The portable body
carries far more. Measured: `grep -o 'derived editorial' DESIGN.md | wc -l` = **17** occurrences of the
phrase — not `grep -c`, which reports lines — and `grep -o 'not E.SUN-authored' DESIGN.md | wc -l` =
**17**, so every one closes its evidence class. A ledger covering 3 of 17 is a false ledger in the
narrow direction, which fails E1 the same way an overstated one does.

Added `## Portable derived-editorial scope (E1)` to `provenance.md`: a 17-row table, one row per
occurrence, in body order, naming the portable location and what each qualification covers. Verified
1:1 by walking the body and emitting `(line, ## section, ### subsection)` for each hit; the emitted
sequence matches the table row for row. The two sections that carry none — §3 Typography & Assets and
§7 Governance — are stated as measured absences with the reason, so the table cannot be read as an
oversight. The three narrower records that already existed are kept and cross-referenced: they are
omission and inheritance ledgers for Motion, §14, and §8, and the new table is the qualification
ledger.

### 3. E1 / E2c — the sibling verification file was neither adopted nor declined

`provenance.md` said "The source carries no `verification_v2` block…", which is true —
`grep -o 'verification_v2' web/references/esunbank/DESIGN.md | wc -l` = 0. The defect was elsewhere: a
sibling `web/references/esunbank/.verification.md` exists (5,690 bytes,
SHA-256 `1738f98b…`), carries the Tier 1 live-inspect record, and the migrated provenance did not
mention it at all while defining the evidence record as "the footer plus the trailing HTML comment".
Neither adoption nor a declared non-adoption. Siblings are referenced 5× each in `dcard` and `drdiary`.

Adopted, option (a). Added `## Canonical proof — sibling verification file` to `provenance.md` with the
file path, byte size, SHA-256, heading, grade, inspection date 2026-06-22, the method quoted verbatim
(playwright `getComputedStyle` on the live DOM, headless chromium, `domcontentloaded`, 3500ms wait,
modal/overlay dismiss pass, then computed style on body / H1–H3 / nav links / buttons / cards, plus a
full-DOM colour frequency scan), both inspected URLs with the roles the sibling assigns them, and the
count of raw samples (20 bullets in its `### Raw samples` block). Also recorded: the 16 published
strings the sibling names as measurement targets — counted as
`grep -oE '"[^"]*[一-龥][^"]*"' .verification.md | sort -u | wc -l` = 17 quoted CJK runs, minus the one
font-family fragment, which is a stack fragment and not an element label — the logo decision behind the
Identity `logo` field, the TW brand-owned source statement, and the conflict matrix. The Tier 1 and
Tier 2 sections now name the sibling as the method and lookup-detail authority instead of implying the
footer is all there is; `.verification.md` is now referenced 5× in `provenance.md`.

Adoption stops at the ledger, per the evidence-domain rule. Ten sibling samples have no counterpart in
the source `DESIGN.md` — four element labels (`玉山銀行官方網站`, `玉山特匯日`, `信用卡 / 支付` in its
spaced form, `常用服務`), three CSS selectors, and eight element heights — and none was promoted to a
portable token. Each value returns 0 from a literal grep of the portable body, re-measured after the
edit. The A5 count line above was re-measured for all 25 strings after every edit in this pass; only
`登入` moved, 8 → 9, from the two rewrites in fix 1.

### Ledger pointers re-verified

Every count and negative claim in this log and in `provenance.md` was re-measured after the edits with
`grep -o … | wc -l`, never `grep -c`:

| Claim | Re-measured |
|---|---|
| 25 A5 繁體 runs, occurrence counts in the portable body | all 25 match after the edits; `登入` updated 8 → 9, the other 24 unchanged |
| `#00a19b` 18 occurrences with the per-section breakdown | 18 |
| `rgb(208, 230, 230)` value occurrences | 5 — 4 in the full `0px 0px 12px 0px` form, 1 bare |
| easing curve values in the portable body / in the provenance ledger | `grep -oE 'cubic-bezier\([0-9. ,]+\)'` → 0 / 3. The bare word `cubic-bezier` is 4 in the body, all omission labels and the Named-gaps line |
| `live-extract`, `bgFreq`, `fgFreq`, `Tier 1`, `Tier 2` in the portable body | 0 each |
| `creditor`, `gravitas`, `workhorse`, `most respected`, `most digital-forward` in the portable body | 0 each |
| four persona names, four cities, the disclaimer's segment phrase | 0 across all three outputs |
| `signed-in` in the source; `signed-in` in the portable body after the fix | 0 / 0 |
| `verification_v2` in the source | 0 |
| ten sibling-only values in the portable body | 0 each |

## Gate

`node test-v2/tools/migrate-reference.mjs --brand esunbank --gate-only` → **PASS**, `problems: []`.

Portable Core: `node -e` on `scripts/design-md-core.cjs` `inspectDesignMd(...).conformance` →
`portable_core: true`, `reasons: []`. Run separately from the gate, because the gate does not compare
canonical claim bytes.

**The gate is not evidence of conformance for any of this.** It returned the same PASS before the F3
auditor's 20 fixes, after them, before this revision's 3 fixes, and after them. D1, E1, E2c, and B2a
are sentence-level judgments the gate does not evaluate.

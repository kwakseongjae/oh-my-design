# E.SUN Bank provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/esunbank/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | esunbank |
| name | E.SUN Bank |
| name (Traditional Chinese, from the body) | 玉山銀行 |
| country | TW |
| category | fintech |
| homepage | https://www.esunbank.com |
| primary_color | `#00a19b` |
| logo | type `favicon`, slug `https://www.esunbank.com/zh-tw/-/media/New-ESUNBANK/icon/apple-touch-icon/esun-icon.png` |
| verified | 2026-06-22 |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note from source, quoted in full: "primary = live interactive teal (#00a19b); deep teal (#007a7a) used for hero headlines. Canvas white (#ffffff) with soft teal shadow surface (#d0e6e6)."

The source `DESIGN.md` carries no `verification_v2` block, no per-claim `method` field, and no `ds.name` / `ds.url` / `ds.type` / `ds.description` field. None is invented here. Inside that one file the evidence record is the footer (**Verified** / Tier 1 / Tier 2 / Conflicts) plus the trailing HTML comment "OmD v0.1 Sources — Philosophy Layer (sections 10–15)", both transcribed below.

The source `DESIGN.md` is not the whole evidence record, however. A sibling verification file sits beside it in the same directory and **is adopted into this ledger**: `web/references/esunbank/.verification.md`. It carries the Tier 1 live-inspection record that the footer's one-line **Verified** string abbreviates, and it is the authority below for the inspection method, the inspection date, the inspected URLs, the raw computed samples, and the logo decision. Its record is the **Canonical proof** section immediately below.

### Dual and multiple destinations (E2a)

- `name` `E.SUN Bank` is dual: this identity ledger + the portable H1 `# E.SUN Bank Design System` and every portable sentence that names the bank. `玉山銀行` is likewise dual: this ledger + portable Experience Scope, byte-for-byte. The Latin form never replaces the 繁體 form; it sits beside it at first mention.
- `primary_color` `#00a19b` has many destinations, 18 hex occurrences in the portable body: this ledger + Foundations Semantic color + Experience Distinctive traits + Experience Capture-bound application + Typography & Assets Type roles (Section Heading and Feature Sub-head) + the component records for the Primary CTA, Large Return CTA, Hero Ghost Link, Login Link, Top-tier Navigation, Content Service Card, and Section Heading Badge + the state contract's Active nav row + Governance Named gaps. Experience Avoid names the color by role rather than by hex, so it holds the role and not the value.
- `homepage` `https://www.esunbank.com` stays in this ledger; the portable Scope names the site as `esunbank.com` without repeating the bare URL. The two inspected route URLs are dual: portable Scope + the Surfaces/Sources/Tier 1 tables below.
- `logo` slug is dual: this ledger + portable Typography & Assets, which carries the same URL as the site icon.
- `verified` `2026-06-22` is dual: this ledger/Freshness + portable Scope, Typography & Assets font evidence, Components capture record, and Content & Locales brand-published lines, all of which date the inspection.
- `tokens.extracted` `2026-06-22` and `tokens.source: live-extract` stay in this ledger only.
- `components_harvested: true` is dual: this ledger + Proof notes below. It does not reach the portable body as a field name; the portable Components capture record states the same fact as prose ("harvested the components below").
- `tokens.note` is dual: quoted in full above + its operative content in portable Foundations Semantic color (the primary/deep-teal/canvas/teal-tint roles).
- `tokens.shadow.teal` `rgb(208, 230, 230) 0px 0px 12px 0px` is multiple: portable Foundations Elevation + Experience Distinctive traits + Experience Capture-bound application (as `rgb(208, 230, 230)`) + the Feature Card and Exchange Rate Table Card records. The state contract's Loading and Skeleton rows carry the same shadow as the source's prose ("teal-tinted ambient shadow", "teal-shadow glow") rather than as the value.

## Canonical proof — sibling verification file

Adopted, not merely noted. Every field in this section is transcribed from the sibling file. Two of them — the 2026-06-22 date and the two Tier 1 routes — the source `DESIGN.md` footer also states in short form, and they agree; everything else here exists only in the sibling.

| Field | Value |
|---|---|
| sibling | `web/references/esunbank/.verification.md` |
| bytes | 5,690 |
| SHA-256 | `1738f98b4c8cb2b706e9844dbc73dc11d4650a84d9b77ff69c4cce141ca016aa` |
| heading | `# E.SUN Bank (玉山銀行) — Verification Notes (2026-06-22)` |
| grade | Tier 1 live inspect |
| inspected | 2026-06-22 |
| raw samples | 20 — bullet lines matching `^- ` inside the sibling's `### Raw samples` block, counted with `awk` over that block; the block has no wrapped bullets, so bullets and lines coincide there |

**Method, quoted from the sibling:** "playwright getComputedStyle (live DOM) — global playwright (chromium, headless, domcontentloaded), waitForTimeout 3500ms, modal/overlay dismiss pass, then getComputedStyle on body, headings (H1/H2/H3), navigation links, buttons, cards; full-DOM bg/text color frequency scan."

**Inspected URLs, from the sibling's `**Sources:**` list:**

- https://www.esunbank.com/zh-tw/personal — personal banking homepage, named there as the primary surface
- https://www.esunbank.com/zh-tw/personal/credit-card — credit card product page, named there as the secondary surface

Both are the same two routes the source footer lists as Tier 1, so the sibling corroborates the footer rather than widening it.

### Strings the sibling names as measurement targets (A5 class)

The sibling identifies each measured element by the published string it carries. 16 such 繁體 runs appear in it, counted as `grep -oE '"[^"]*[一-龥][^"]*"' .verification.md | sort -u | wc -l` = 17 quoted CJK runs minus the one font-family fragment `", Arial, 微軟正黑體, "`, which is a stack fragment and not an element label:

`玉山銀行官方網站` · `一個好的ESG策略就是一個好的企業發展策略` · `外幣匯率` · `最新消息` · `探索數位服務` · `玉山特匯日` · `便利支付，交給玉山Wallet` · `線上開戶` · `登入` · `個人金融` · `企業/商家` · `私銀/亞資` · `ESG 永續金融` · `信用卡 / 支付` · `常用服務` · `信用卡介紹`

Four of the sixteen exist **only** in the sibling and nowhere in the source `DESIGN.md` (counted per string with `grep -oF … | wc -l` against `web/references/esunbank/DESIGN.md`, all four = 0): `玉山銀行官方網站`, `玉山特匯日`, `信用卡 / 支付` in its spaced form, and `常用服務`. They stay in this ledger. They are not written into the portable body, and the portable body's count for each is 0.

### Sibling-only values, recorded here and not promoted

The sibling measures the live DOM; the portable contract reconstructs the source `DESIGN.md`. Those are different evidence domains, so a value present only in the sibling is a ledger entry and never a portable token. The values in this class:

- H1 logo/a11y `玉山銀行官方網站`: `font-size: 16px`; `font-weight: 400`; `color: rgb(28, 28, 28)`
- H1 campaign height `110px`
- H3 `玉山特匯日`: `font-size: 20px`; `font-weight: 400`; `color: rgb(0, 161, 155)` — note the weight 400, where the source's H3 feature row carries weight 500
- Login link `登入` height `45px`
- Card selector `.l-activities__card`, height `494px`
- Card selector `.rwd-table.l-exchangeRate__card`, height `381px`
- Hero service item selector `.landing__CTA--item`, height `62px`
- Credit card page H1 `信用卡 / 支付`: `font-size: 36px`; `font-weight: 500`; `color: rgb(28, 28, 28)`; height `108px`
- Credit card H2 `常用服務`: `font-size: 32px`; `font-weight: 500`; `color: rgb(0, 161, 155)`; `padding: 24px 0px`; height `96px`
- Credit card service card `信用卡介紹`: height `427px`

Ten entries. Each measured value listed above returns 0 from `grep -oF '<value>' DESIGN.md | wc -l` against the portable body. Two of them sit beside a value that is *not* sibling-only and is therefore excluded from the list: the 常用服務 sample's `padding: 24px 0px` restates the 24px H2 top padding the source already carries, and the 信用卡介紹 sample's `border-radius: 4px`, `padding: 30px`, and `border: 1px solid rgb(0, 161, 155)` restate the source's Content Service Card record. Only the heights and the two absent strings in those samples are sibling-only.

### Logo decision, from the sibling

The sibling records the choice behind the `logo` field in Identity above: the apple-touch-icon `https://www.esunbank.com/zh-tw/-/media/New-ESUNBANK/icon/apple-touch-icon/esun-icon.png` (3,208 bytes, valid PNG) was chosen over the Google favicon proxy `https://www.google.com/s2/favicons?domain=esunbank.com&sz=128` (726 bytes, valid, above the 450B threshold) "for higher resolution and direct brand asset". The source `DESIGN.md` carries the chosen slug with no record of the alternative.

### TW regional requirement, from the sibling

The sibling states the two brand-owned Taiwanese sources that satisfy the TW ≥2 requirement — the two Tier 1 routes above — and adds that the getdesign and refero lookups "are Tier-2 cross-check attempts only and do NOT count toward the TW brand-owned requirement". The sibling's conflict matrix resolves all six compared fields as "Tier 1 only" and records no conflict, matching the source footer's "Conflicts unresolved: none" and leaving the migration-found Hero Ghost Link conflict below still unrecorded by either source-side file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| surfaces inspected | 2026-06-22 |
| sources captured | 2026-06-22 |
| tokens.extracted | 2026-06-22 |

Conflicts unresolved, as recorded in the source footer: none.

**Conflict found during migration, not recorded by the source footer.** `tokens.components.button-ghost.fg` is `#00a19b` while the same component's body description gives `Text: #007a7a`. Both values are preserved; neither is selected. The portable body records the field as unresolved and names it in Governance → Named gaps. This is the one place where the migrated document disagrees with the source's "Conflicts unresolved: none".

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| personal | product-surface (personal banking homepage) | https://www.esunbank.com/zh-tw/personal | 2026-06-22 |
| credit-card | product-surface (credit card category page) | https://www.esunbank.com/zh-tw/personal/credit-card | 2026-06-22 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| personal-live | product-surface | https://www.esunbank.com/zh-tw/personal | 2026-06-22 |
| credit-card-live | product-surface | https://www.esunbank.com/zh-tw/personal/credit-card | 2026-06-22 |

### Tier 1

- https://www.esunbank.com/zh-tw/personal (personal banking homepage)
- https://www.esunbank.com/zh-tw/personal/credit-card (credit card page)

Method recorded in the source footer, quoted: "**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)". The trailing comment adds the mechanism in short form: live inspect via playwright `getComputedStyle` on both routes, 2026-06-22. The full method — headless chromium, `domcontentloaded`, the 3500ms wait, the modal/overlay dismiss pass, the element set, and the full-DOM frequency scan — comes from the adopted sibling `web/references/esunbank/.verification.md` and is quoted in Canonical proof above. The two files agree on the date and on both routes.

### Tier 2 (no usable record)

- getdesign.md/esunbank — 0 results (not listed). The sibling adds the page title it saw, quoted: "esunbank — 0 DESIGN.md files | getdesign.md", fetched 2026-06-22.
- styles.refero.design/?q=e.sun+bank — no matching results found. The sibling adds that the query returned generic trending styles and that the lookup was playwright-navigated on 2026-06-22.

The sibling also states that neither Tier 2 lookup counts toward the TW brand-owned source requirement; both Tier 1 routes above do.

## Observation ledger

Transcribed from the source's trailing comment. These are the computed observations the reconstruction rests on.

| Observation | Value |
|---|---|
| Body | font-family `"Noto Sans TC", Arial, 微軟正黑體`; color `rgb(28,28,28)` `#1c1c1c`; size 16px |
| H1 hero 一個好的ESG策略... | 38px / weight 700 / color `rgb(0,122,122)` `#007a7a` |
| H2 sections 外幣匯率, 探索數位服務, 最新消息 | 32px / weight 500 / `rgb(0,161,155)` `#00a19b` |
| H3 features 便利支付，交給玉山Wallet | 20px / weight 500 / `rgb(0,161,155)` `#00a19b` |
| Primary CTA 線上開戶 | bg `rgb(0,161,155)` `#00a19b` / white text / radius 4px / height 46px |
| Login 登入 | color `rgb(0,161,155)` `#00a19b` / transparent bg |
| Nav items (inactive) | `rgb(124,124,124)` `#7c7c7c` / weight 400 |
| Nav item (active 個人金融) | `rgb(0,161,155)` `#00a19b` / weight 500 |
| Card shadows | `rgb(208,230,230) 0px 0px 12px 0px` — teal-tinted ambient |
| bgFreq | white ×45, `#00a19b` ×18, `#d9d9d9` ×12, `#f4f8fa` ×6 |
| fgFreq | `rgb(28,28,28)` ×1094, `rgb(0,161,155)` ×57, `rgb(255,255,255)` ×35, `rgb(0,122,122)` ×25, `rgb(124,124,124)` ×23 |

The frequency counts stay in this ledger; the portable body carries the roles they support, not the counts.

The source's own evidence-class statement, quoted: "Brand narrative: E.SUN (玉山銀行) founded 1992, named after Jade Mountain. ESG positioning and digital-first strategy are publicly communicated on the homepage. Voice samples are verbatim from the live homepage. Personas are fictional archetypes." And: "Interpretive claims (teal as 'jade' color for the mountain namesake, ESG as core not PR) are editorial readings connecting observable design to public brand positioning, not directly sourced E.SUN statements."

Both of those boundaries are dual (E2a): they are quoted here and carried in the portable body — the two named interpretive claims are qualified in Scope, the persona boundary is stated in Audience, and the verbatim status of the voice samples is stated in Content & Locales.

## Portable derived-editorial scope (E1)

This ledger is 1:1 with the portable body: every B2a qualification the body carries is listed here,
and nothing is listed that the body does not carry. Counted, not estimated —
`grep -o 'derived editorial' DESIGN.md | wc -l` = **17** occurrences (occurrences of the phrase, not
lines; they fall on 17 distinct lines), and `grep -o 'not E.SUN-authored' DESIGN.md | wc -l` = **17**,
so every occurrence closes its evidence class rather than stopping at "derived from the verified
surfaces". 16 use the fixed form *derived editorial implementation inference … not E.SUN-authored or
a separately published UI / motion / responsive / voice / locale / state specification*; the
seventeenth (Scope ¶1) is a brand-history reading rather than an interface reading and closes as
*derived editorial interpretation … not E.SUN-authored or a separately published brand statement*.

| # | Portable location | What carries the qualification |
|---|---|---|
| 1 | §1 Experience → Scope, brand-narrative paragraph | The 玉山 namesake read as a metaphor for aspiration, stability, and the Taiwanese spirit, and the "recognized for digital innovation, ESG leadership, and customer-centric service" reputation line. The 1992 founding, the name, and esunbank.com are named as the factual parts. |
| 2 | §1 Experience → Scope, characterization paragraph | The whole reading of the captured layer (clean/credentialed/warm, teal as important-navigational-actionable, depth-as-glow, the consumer orientation) plus the two readings the source itself flags: jade teal tying the digital identity to the namesake and to public ESG values, and ESG as a core operating principle rather than a PR signal. |
| 3 | §1 Experience → Audience | Reading the personal-banking surface as oriented toward everyday consumers navigating credit cards, savings, and investments. |
| 4 | §1 Experience → Distinctive traits | Calling Noto Sans TC with Microsoft JhengHei the Traditional Chinese web-font standard for legibility. The computed stack is named as the measured part. |
| 5 | §1 Experience → Principles | The five numbered principles, list head. |
| 6 | §1 Experience → Capture-bound application | The ten application rules, list head. |
| 7 | §1 Experience → Avoid, list head | The eight boundary prohibitions. |
| 8 | §1 Experience → Avoid, rationale clauses | The three intent attributions inside them — structured-and-precise, deliberate section voice, 4px radius as a trust signal. The observed 4px/8px radii, the observed 500 weight, and the observed color roles are named as the measured parts. |
| 9 | §2 Foundations → Elevation | Reading the teal shadow as a deliberate on-brand depth signal, the absence of black/grey drop shadows on the primary layout, and the belonging-to-the-same-language conclusion. |
| 10 | §2 Foundations → Motion | The duration values and their assignments, the reduced-motion rule, and the functional-and-calm characterization; carries the B3 promotion gate in full (transition properties, animation name, duration, easing, reduced-motion behavior, per component). |
| 11 | §4 Components & States → Source state contract | Nine of the eleven rows; the two marked *(verified live)* are excluded from the qualification and presented as observed. |
| 12 | §5 Layout & Platforms → Spacing and grid | The single-column mobile collapse. The desktop grid is named as the measured part. |
| 13 | §5 Layout & Platforms → Whitespace | The reading of the whitespace intent. The 24px heading padding and the 30px / 20px paddings are named as the measured parts. |
| 14 | §5 Layout & Platforms → Touch targets and collapsing | The breakpoint table, the collapsing strategy, and the tap-comfort reading of the 46px / 65px / 42px heights, which are named as desktop measurements rather than accessibility-target rules. |
| 15 | §6 Content & Locales → Brand-published lines | The three role notes beside the verbatim lines. The published strings and their live markers are named as the measured parts. |
| 16 | §6 Content & Locales → Voice reading | The trustworthy/progressive/accessible characterization and the five context rows. |
| 17 | §6 Content & Locales → Locale | The reading that sizing and layout density are calibrated for CJK character density rather than adapted from a Latin-first template. |

Two sections carry none, by measurement rather than by omission. §3 Typography & Assets holds
evidence classes and measured values only — its one interpretive claim, the web-font-standard
reading, sits in §1 Distinctive traits at row 4 and is qualified there. §7 Governance is the fixed
claim block: authority, application priority, unknowns policy, changes policy, and the Named gaps
list, none of which is an interpretation of the surfaces.

Three of these rows have a second record elsewhere in this file, and those records are narrower
than the row on purpose: Motion (row 10) also appears under *Omitted unattributed easing curves*
because three curve values were removed from it, and the state contract (row 11) and the responsive
material (row 14) also appear under *Source-side gaps inherited, not repaired* because their
evidence gap originates in the source. Those three sections are omission and inheritance ledgers;
this table is the qualification ledger, and it is the one that must match the body 1:1.

## Omitted unattributed easing curves (E2b)

The portable Foundations Motion section keeps the token names `ease-enter` / `ease-exit` / `ease-standard` and their uses, and marks each curve cell "omitted (unattributed cubic-bezier; no E.SUN-published source for the curve)". The curve strings themselves are omitted from the portable body and stored here as the omission ledger. The source's observation record covers computed color, type, and component geometry only; it records no motion measurement, and neither Tier 1 route contributes a duration, curve, or transition observation.

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` — matches neither the legacy 0.1 spec example table nor a CSS keyword; unattributed.
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — byte-identical to the `ease-exit` example in `spec/omd-v0.1.md`, the known re-injection path for this value.
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` — the curve equivalent of the CSS `ease` keyword, i.e. an engine default rather than a measured E.SUN token.

The duration tokens `100ms` / `200ms` / `350ms` differ from the legacy spec example ladder and are recorded as brand-specific, so they stay in the portable Motion table under the derived-editorial qualification that covers the whole motion section.

## Deletions

- **§13 Personas.** The four archetypes are deleted, and no name, age, city, occupation, motivation, or behavior from them is re-hosted here. The source's own statement that they are fictional archetypes is preserved in portable Experience Audience. The segment labels used inside the source's persona disclaimer are likewise not re-hosted as an audience finding.
- **§9 Agent Prompt Guide.** The quick colour reference, the four example component prompts, and the seven-step iteration guide are deleted as tool-facing packaging. Every value they restate lands elsewhere; the audit of that is in `migration-log.md`. One §9-only fact was kept rather than deleted: the `#ffffff` header background, which landed on the Top-tier Navigation component record. The 70px header height that sits beside it in the same §9 prompt is not §9-only — §4 Top-tier Navigation already states "in 70px header" — and it reaches the same record from there.
- **§1 and §11 evaluative framing of the bank.** "Taiwan's most digital-forward commercial bank", "one of Taiwan's most respected private banks", the "gravitas" and "workhorse" asides, and §11's closing sentence ("clean enough to feel modern, trustworthy enough to feel like a bank, and warm enough in its teal palette to feel like a partner rather than a creditor") are evaluative readings carrying no value or rule. The factual halves survive in portable Experience Scope, and the namesake metaphor and the recognition characterization that do survive carry an adjacent complete qualification there. Grep-verified: `most digital-forward`, `most respected`, `gravitas`, `workhorse`, `creditor` — 0 hits in the portable body; they survive only in this deletion record and the matching migration-log row.
- **§3 Principles, comparative aside.** "Unlike Korean peers that use ExtraBold for sections" is a comparison to other catalog entries rather than a fact about E.SUN; deleted. Its operative half — Medium (500) is the deliberate section voice, confident but approachable, not loud — is retained in portable Experience Capture-bound application and Avoid.

## Source-side gaps inherited, not repaired

- **§3 Principles, "Traditional Chinese first".** The source writes that "spacing and sizing are calibrated for hangul/CJK character density". `hangul` is the Korean script and has no bearing on a Traditional Chinese surface; it appears to be carried over from another entry. The portable Content & Locales body states the rule as CJK character density only. No value is affected, and the discrepancy is recorded here rather than silently propagated.
- **§14 States.** Nine of the eleven rows carry no verification marker and no observation backs them in the ledger above. They are preserved in full (the state contract must survive migration) under an explicit derived-editorial boundary. The two rows marked *(verified live)* — Error (page not found) and Active nav — are the only observed appearances, and only the Active nav row is corroborated by the observation table above; the 404 heading's 30px / weight 500 / teal values appear in the state row alone.
- **§8 Responsive Behavior.** The breakpoint table, collapsing strategy, and touch-target readings have no counterpart in the observation ledger, which covers two desktop routes. They are preserved with a derived-editorial boundary rather than deleted or promoted.

## Proof notes

- `components_harvested: true`; nine components in the token record, twelve in the body. The three body-only components (Login Link, Sub-navigation, Content Service Card) are preserved with their measured values and are marked in the portable body without a token-record `type` where the source supplies none.
- The observation list records default appearances only. No interaction event, hover transition, focus treatment, or pressed treatment appears in it. The adopted sibling `web/references/esunbank/.verification.md` does not widen this: its 20 raw samples are computed styles of resting elements, and it records no interaction, hover, focus, pressed, or motion measurement either. So the derived-editorial boundary on the state contract and on Motion stands after adoption, not merely before it.
- Uncaptured hover, disabled, loading, error, and success treatments are omitted. They are not `not-applicable`; applicability follows control meaning, and every `not-applicable` cell in the portable body gives a role reason rather than an absence of observation. State coverage is not claimed complete.
- The source never records a `focus-visible` observation, and no `focus-visible` row in the portable body carries a colour or treatment value.
- Adoption of the sibling stops at this ledger. No sibling-only value, string, or selector was written into the portable body; the ten sibling-only values are listed in Canonical proof and each returns 0 from a literal grep of `DESIGN.md`. The reason is evidence domain, not doubt: the sibling measures the live DOM at a moment in time, while the portable contract is the reconstruction of the source `DESIGN.md`, and a live-DOM measurement is not authority for a token in that reconstruction unless the source establishes it too.
- The three container components (Feature / Activity Card, Exchange Rate Table Card, Content Service Card) keep their verified `type: card` while their interactive kind and state-applicability map are omitted, because no interactive-kind evidence exists for them. The Hero Service Item Cards keep `type: card` and do declare an interactive kind, because the source describes them as hero CTA service items and as link tiles.
- The Section Heading Badge keeps `type: badge` and declares `kind: non-interactive` with the reason that it is a heading text label.
- No fictional persona, demographic, journey, spending pattern, or conversion behaviour is recorded here.
- Financial-domain separation: the brand-published financial strings (線上開戶, 登入, 外幣匯率, 信用卡, 玉山Wallet, the ESG campaign headline) are published copy recorded as copy. No measured UI value in the portable body describes a product, a rate, an eligibility condition, or a term, and the forbidden-register rule is labelled an authoring rule rather than an E.SUN policy statement.

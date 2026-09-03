# PayPay provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/paypay/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | paypay |
| name | PayPay |
| country | JP |
| category | fintech |
| homepage | `https://paypay.ne.jp` |
| primary_color | `#FF0033` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=paypay.ne.jp&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google s2 favicon URL for `paypay.ne.jp`, not a first-party hosted mark file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| HTML-comment WebFetch | 2026-06-06 |
| Sibling live inspect | 2026-06-06 |

The source HTML comment records Direct verification via WebFetch (2026-06-06). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as recorded in the sibling handling section: the source-body token set and a sibling live-DOM pass on `https://paypay.ne.jp` disagree on marketing-site button fill, heading size, and radius. The portable body keeps the source-body token set. Sibling measurements stay on this page.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| app | live PayPay app, reconstructed | named in the source §4 reconstruction note | 2026-06-06 |
| marketing | production marketing site | `https://paypay.ne.jp` | 2026-06-06 |

### Tier 1 (as listed in the source body)

- `https://paypay.ne.jp` (live production site, verified via live DOM getComputedStyle)

### HTML-comment sources (narrative / reconstruction, not extra token keys)

- `https://paypay.ne.jp` — confirms mobile-payment positioning, white surfaces with red CTAs, app-download focus, and casual-friendly Japanese voice. Exact CSS hex not exposed in that WebFetch.
- Wikipedia: PayPay — named by the source comment as a widely documented public-facts pointer for the October 2018 launch, the 100億円あげちゃうキャンペーン, and LY Corporation parentage. Narrative context, not interface tokens.

### Tier 2

- getdesign.md / refero — not listed in the source footer.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: prose-derived` and `tokens.extracted: 2026-06-09`. That producer string is ledger metadata. The portable body names `prose-derived` as the token-set source in Experience Scope `:9`, Motion `:167`, and the Font evidence Live computed row `:208`; it does not promote the reconstruction as a live computed-style harvest of every app screen.

## Sibling handling (`web/references/paypay/.verification.md`)

The sibling exists — confirmed with `find web/references/paypay -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-06. Method: playwright getComputedStyle (live DOM) on the production site.
- Source: `https://paypay.ne.jp`
- live paypay.ne.jp body text: color `#242323`, font 16px, family Hiragino Kaku Gothic ProN
- live paypay.ne.jp page background: color `#ffffff`
- live paypay.ne.jp root background: color `#000000`
- live paypay.ne.jp heading: color `#ffffff`, font 55px, / 700, family Noto Sans JP
- live paypay.ne.jp primary button: color `#ffffff`, background `#3895ff`, border-radius 6px, height 58px, font 16px, / 700
- live paypay.ne.jp link: color `#3895ff`
- Country: JP; brand-owned live source: `https://paypay.ne.jp`

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- body text `#242323`
- root background `#000000`
- heading `55px`
- primary-button / link fill `#3895ff`
- primary-button radius `6px`
- primary-button height `58px`
- method string `playwright getComputedStyle`

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): page background `#ffffff`, heading / button text `#ffffff`, family names Hiragino Kaku Gothic ProN and Noto Sans JP, button font 16px / 700.

Conflict kept unresolved: source-body brand / CTA red is `#FF0033` / `#ff0033`; the sibling live-DOM pass on the same marketing host records a primary-button fill `#3895ff`. The portable body does not choose between them by promoting the sibling measurement.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-pressed / primary-deep / primary-tint / primary-disabled / canvas / ink / success / error / warning / info / point-gold / gray-50 / gray-100 / gray-200 / gray-300 / gray-400 / gray-500 / gray-700 | reconstructed app + paypay.ne.jp (prose-derived) |
| tokens.typography.family.sans / family.mono | reconstructed app + paypay.ne.jp |
| tokens.typography.display-hero / balance / display-lg / heading-lg / heading / subtitle / body-lg / body / body-sm / caption / amount-hero | reconstructed app + paypay.ne.jp |
| tokens.spacing.sm / base / lg | reconstructed app + paypay.ne.jp |
| tokens.rounded.sm / md / lg / xl / full | reconstructed app + paypay.ne.jp |
| tokens.shadow.card / toast / dialog | reconstructed app + paypay.ne.jp |
| tokens.components.button-primary / button-secondary / button-neutral / button-text / input-box / input-filled / card / balance-card / promo-card / list-item / badge-red / badge-gold / badge-green / badge-weak / bottom-tab / segmented / toast / dialog / bottom-sheet / toggle | reconstructed app + paypay.ne.jp |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header labels them fictional archetypes informed by publicly described Japanese mobile-payment user segments, not individual people. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). Audience restates only the source's own §13 header wording. |
| §15 `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)` | Deleted as a promoted numeric curve. Unattributed; byte-identical to `spec/omd-v0.1.md` `ease-enter`. Role name and use kept. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted as a promoted numeric curve. Unattributed; byte-identical to `spec/omd-v0.1.md` `ease-exit`. Role name and use kept. |
| §15 `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)` | Deleted as a promoted numeric curve. Unattributed; byte-identical to `spec/omd-v0.1.md` `ease-standard`. Role name and use kept. |
| §15 `ease-bounce` `cubic-bezier(0.34, 1.56, 0.64, 1)` | Deleted as a promoted numeric curve. Unattributed; byte-identical to `spec/omd-v0.1.md` `ease-spring` (source renamed the token `ease-bounce`). Role name, celebration use, and the source's overshoot sentence kept; the curve is omitted. |
| §9 Agent Prompt Guide — construction prompts and iteration restatements | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components / Experience. §9-only values that had a receiving slot (PayPay残高 13px / 400 / white 80% opacity; transaction-row 36px circle merchant icon + 48px min-height anatomy; center pay button `60px`) were moved to Balance Card, Compact (List Item), Bottom Tab, and Layout touch targets. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped, except the three §9-only writings named above, which land on Balance Card, Compact (List Item), Bottom Tab, and Layout touch targets. Quick Color Reference hexes — Foundations semantic color. System Japanese font stack — Family + Application rules. Pill / 24px-radius full-width CTAs — Primary button + Application rules. Payment success as a full red screen — Payment-Complete Screen + Avoid + Success (payment). Gold = points, green = success, orange = warning — Semantic color + Application rules. Geometry 8px inputs / 12px cards / 16px dialogs / 24px CTAs — Shape + components. Surfaces white / `#f5f5f5`; text `#222222` / `#555555` — Semantic color. The four template curves are omitted with §15, not promoted.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience — Scope `:9` | Two named surfaces as this contract's token surfaces; values stay attached; reconstruction as representative geometry rather than a published specification |
| Experience — Scope `:11` | Loud-where-quiet / red-is-the-brand / retail-not-bank / fun-rewarding-instant characterizations; hex values, type-stack names, wordmark, and 375px baseline beside them are the source's own |
| Experience — Scope `:13` | Founding-and-campaign narrative as context that does not by itself supply interface tokens; last-sentence refuses / closer-to-retail pairing kept as one unit |
| Experience — Primary tasks `:19` | Selecting the four recorded labels as primary tasks; they do not come from the persona section |
| Experience — Audience `:29` | Dropping fictional archetypes; carrying no name, age, city, motivation, or affiliation classification; reading the source-named Japanese mobile-payment user segments as audience |
| Experience — Distinctive traits `:33` | Classifying the Key Characteristics list as a restatement, and the groupings and the readings inside them |
| Experience — Principles `:45` | Eight numbered items as derived editorial implementation inference |
| Experience — Application rules `:58` | Seven Do rules and the reasons attached to them |
| Experience — Avoid `:70` | Seven Don't rules and the reasons inside them |
| Foundations — Semantic color `:86` | Role pairings; `#e0002e` pressed unmerged from error; `#222222` ink unmerged from Gray 900; catalog `primary_color` `#FF0033` beside token-set `#ff0033`; LINE-green echo |
| Foundations — Spacing `:130` | YAML unitless steps unmerged from matching radius keys, type sizes, and padding halves; §5 4/8/12/16/20/24/32/40 band kept beside the three YAML keys |
| Foundations — Shape `:144` | `full: 9999` unmerged from 10px badge and from type size; `md: 12` / `lg: 16` / `xl: 24` unmerged from spacing; §5 `20–24px` band beside YAML `xl: 24` |
| Foundations — Elevation `:163` | Six-level table plus three extra local shadows; energy from color and motion rather than dramatic depth; YAML card/toast/dialog unmerged from §6-only Level 2 / 2r / bottom-sheet / thumb |
| Foundations — Motion `:167` | Durations, roles, signature motions, and reduced-motion as this record; four template curves omitted |
| Typography — Official product-use `:207` | No published type token |
| Typography — Live computed surface-use `:208` | Prose-derived YAML sans family on the live-computed row, not promoted as a computed-style harvest of every app screen |
| Typography — Official distributed asset `:209` | No exclusive downloadable font package |
| Typography — Declared-only `:210` | Fallback stack members and rare mono are not the brand UI face |
| Typography — License `:211` | OS Japanese stack without a PayPay-issued license notice |
| Typography — Outside these captures `:212` | Typography beyond the named reconstruction stays outside this contract |
| Typography — Family `:221` | First-face restatement; fallback prohibition |
| Typography — Type roles `:225` | YAML unitless line heights unconverted; YAML `use` verbatim; Amount Hero without an invented line-height; §3 px spellings beside YAML sizes |
| Typography — Type principles `:243` | Five type principles as current-surface type rules |
| Typography — Assets `:259` | Google s2 favicon as identity pointer rather than a PayPay-hosted brand file; wordmark reverse as named logo treatment rather than a third color |
| Components — How applicability is decided `:272` | Every interactive-kind verdict and applicability verdict; omission of kind/map for containers; `Primitive type` only on YAML components; not a complete state-coverage claim |
| Components — YAML / §4 keep-both `:274` | YAML `use` unmerged from longer §4 Use; YAML lowercase hex unmerged from §4 mixed-case; YAML radii unmerged from §4 size-scale radii |
| Components — Primary radius `:296` | YAML radius `24` unmerged from §4 `24px` pill CTAs / `12px` inline actions |
| Components — Balance Card `:496` | YAML fill `#ff0033` unmerged from §4 gradient; kind and map withheld |
| Components — Bottom Tab `:604` | YAML `fg: #767676` unmerged from §4 inactive `#999999` icon + `#767676` label; §8 `60–64px` unmerged from §9 example `60px` |
| Components — Segmented `:630` | YAML radius `10` unmerged from §4 track `10px` / thumb `8px` |
| Components — Bottom Sheet `:683` | YAML radius `20` unmerged from §4 `20px (top corners only)`; kind and map withheld |
| Components — Payment-Complete Screen `:715` | "the celebration, not a quiet receipt" as the source's own register; kind withheld |
| Components — Surface state contract `:738` | System-level treatments without attaching every row to destination or dismiss controls |
| Layout — Whitespace `:751` | Money as given a stage; home density as a lively retail surface; payment/charge funnel as one amount and one button |
| Layout — Responsive `:761` | Breakpoint table and collapsing rules stated at system level rather than measured across viewports; §8 `60–64px` unmerged from §9 example `60px` |
| Content & Locales `:782` | Shop-clerk voice characterization, register reading, and tone table |
| Content — Forbidden moves `:795` | Premise-to-register causal |
| Content — Byte-exact close `:849` | Byte-exact published strings; a gloss may sit beside a line and never replaces it |
| Governance — Recorded unresolved `:883` | Named values, not a license to invent |

## Proof notes

- tokens.source: prose-derived
- components_harvested: true
- Uncaptured hover/disabled/loading/error/success treatments on controls that lack a recorded paint are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. Destination / dismiss / tab / toggle roles close loading/error/success with a role reason (C2). State coverage is not claimed complete.
- Source never records the token `focus-visible`. Observed input Focus (2px `#FF0033`) stays recorded as generic focus. `focus-visible` rows are applicable with visual treatment omitted (B1).
- Official history (October 2018, SoftBank × Yahoo! Japan, Paytm, 100億円あげちゃうキャンペーン, LY Corporation, PayPayポイント / 銀行 / カード / 証券) is narrative context, not a token source. Those source-owned strings are kept as narrative facts in Experience Scope; they do not by themselves supply interface tokens.
- `#ffffff` is `tokens.colors.canvas` (page background, card surfaces, text on red), Background Float, and component fg on red fills. Same hex, different paths; the attachments stay unmerged.
- PayPay publishes no public design-system documentation in the source. Derived-editorial qualifications therefore close with the toss-form: not PayPay-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- `tokens.source: prose-derived` is ledger metadata
- Four template cubic-bezier values are omitted; durations, signature motions, and the reduced-motion rule stay. B3 five-kind gate stays in DESIGN.md.

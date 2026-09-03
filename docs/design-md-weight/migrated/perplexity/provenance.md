# Perplexity provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, sibling file, and omission record for the T2 migration. The canonical source remains `web/references/perplexity/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | perplexity |
| name | Perplexity |
| country | US |
| category | ai |
| homepage | `https://www.perplexity.ai` |
| primary_color | `#20808D` |
| logo.type | simpleicons |
| logo.slug | `perplexity` |
| omd format (source) | 0.1 |
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#20808D` is dual: identity here, and a keep-beside record in `DESIGN.md` Semantic color next to YAML `tokens.colors.primary` `#20808d`. The Simple Icons slug is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled). No separately published Perplexity UI specification is named, so portable B2a closes use the toss-form.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| sibling inspected | 2026-06-06 |

Source §4 footer records **Tier 1 sources:** `https://www.perplexity.ai` (live production site, verified via live DOM getComputedStyle). YAML `tokens.source` is `prose-derived`. Those two producer strings stay on this ledger; the portable body names the URL and the footer sentence as an evidence boundary.

Conflicts unresolved: none recorded in the source footer. The sibling file records live-DOM samples that do not match several source DESIGN.md token roles; that mismatch is a sibling-versus-source conflict kept on this ledger, not resolved into a portable token.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| production | product-surface | `https://www.perplexity.ai` | 2026-06-06 |

### Tier 1 (as listed in the source footer)

- `https://www.perplexity.ai` (live production site, verified via live DOM getComputedStyle)

### Sibling method

- playwright getComputedStyle (live DOM) on the production site, 2026-06-06

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: prose-derived` and `tokens.extracted: 2026-06-09`. `components_harvested: true` is ledger metadata. The sibling file says live-DOM computed values were the source of truth for hex/px tokens and that DESIGN.md token roles were reconciled against those measurements. That sibling sentence is ledger metadata. Portable family names and hex roles follow the source DESIGN.md, not sibling-only computed samples.

## Claim ledger

Single named token surface: production / `https://www.perplexity.ai` / live DOM getComputedStyle (source footer) / 2026-06-06. YAML does not attach per-key surface anchors.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-hover / primary-deep / primary-tint | production |
| tokens.colors.teal-on-dark | production |
| tokens.colors.ink / canvas / surface / surface-white / body / muted / placeholder / hairline / hairline-soft | production |
| tokens.colors.dark-canvas / dark-surface / dark-line / ink-inverse | production |
| tokens.colors.success / error / warning / on-primary | production |
| tokens.typography.family.sans / family.mono | production |
| tokens.typography.display-hero / display / heading-lg / heading / subtitle / answer-body / body / label / caption / mono | production |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | production |
| tokens.rounded.sm / md / lg / full | production |
| tokens.shadow.ambient / standard / elevated | production |
| tokens.components.button-primary / button-secondary / button-ghost / pill / composer / text-field / answer-card / source-card / citation-chip / badge-pro / badge-status / tab / toast / dialog / toggle | production |

§2 Source Slate / Source Plum / Source Clay, Surface Raised `#1C2128`, and Ink Inverse 500 `#9BA1A6` are body writings, not claim-ledger YAML color keys. Discover / Feed Card is a §4 writing, not a YAML component key.

## Sibling handling (`web/references/perplexity/.verification.md`)

The sibling exists — confirmed with `find web/references/perplexity -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-06. Method: playwright getComputedStyle (live DOM) on the production site. Source: `https://www.perplexity.ai`.
- Raw samples: live www.perplexity.ai body text: color `#000000`, font 16px, family `pplxSans`; page background: color `#000000`; root background: color `#fcfcf9`; heading: color `#000000`, font 16px, / 400, family `pplxSans`; primary button: color `#000000`, background `#016a71`, border-radius 11px, height 88px, font 16px, / 400; link: color `#000000`.
- Tier 2 note: live-DOM computed values above are the source of truth for this reference's hex/px tokens. DESIGN.md token roles were reconciled against these measurements.
- Country sources: country US; brand-owned live source `https://www.perplexity.ai`.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts. This paragraph names the dropped field kind; it does not assert that the strings are absent from this file (E2d).

- computed family `pplxSans`
- live body / heading / link / primary-button label color `#000000`
- live page background `#000000`
- live primary-button background `#016a71`
- live primary-button border-radius `11px`
- live primary-button height `88px`
- live primary-button / heading font 16px / 400
- sibling method label `playwright getComputedStyle`
- sibling sentence that live-DOM computed values are the source of truth for hex/px tokens

Values the sibling shares with the source body (corroboration, not new portable facts): root background `#fcfcf9` (YAML `tokens.colors.surface` / Paper Raised); production URL `https://www.perplexity.ai`; inspect date 2026-06-06.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-hover / primary-deep / primary-tint / teal-on-dark | production |
| tokens.colors.ink / canvas / surface / surface-white / body / muted / placeholder / hairline / hairline-soft | production |
| tokens.colors.dark-canvas / dark-surface / dark-line / ink-inverse | production |
| tokens.colors.success / error / warning / on-primary | production |
| tokens.typography.family.sans / family.mono | production |
| tokens.typography.display-hero / display / heading-lg / heading / subtitle / answer-body / body / label / caption / mono | production |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | production |
| tokens.rounded.sm / md / lg / full | production |
| tokens.shadow.ambient / standard / elevated | production |
| tokens.components (15 keys, each with YAML `type`) | production |

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas, 3 slots (fictional archetypes; name, age, city, motivation, affiliation classification) | Deleted. Not promoted as individuals, tasks, or Audience groups. Affiliation classification and motivation are not re-hosted. Portable Audience follows the Ask box, generated answer block, cited source card, and Focus mode / filter selector. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Values it restated already live in Experience / Foundations / Typography / Components. No receiving slot and no delegation (A2, A3). |
| Unattributed cubic-bezier curves for `ease-enter`, `ease-exit`, `ease-standard` | Omitted at the curve-value boundary. Exact omitted values: `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`; `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`. Token names and Use writings stay in portable Motion. All three curves match the legacy template example table. Duration tokens, `ease-cursor` `steps / linear`, signature motions, and reduced-motion stay. B3 promotion gate stays in Foundations Motion. |
| Sibling-only computed values listed under Sibling file | Ledger only |
| YAML `[FILL IN]` placeholders | None in the source. Nothing to omit at that boundary. |

§9 deletion check (A3). Every value the construction prompts name was confirmed present elsewhere in the portable body before the section was dropped. Ask composer white well / 16px radius / 1px `#E4E4DC` / 16/18 padding / `Ask anything…` / `#8A9494` / 16px FK Grotesk Neue / `#20808D` border + 3px `rgba(32,128,141,0.12)` ring / focus-mode pills left, teal submit right — Composer. Primary button `#20808D` / white / 14px/500 FK Grotesk / 44px / 10px / 18px / hover `#1A6873` / pressed `#13343B` — Primary. Source card white / 10px / 1px `#E4E4DC` / 16px favicon / domain 13px `#5C6A6A` / title 14px `#091717` 2-line clamp / hover teal border / `0 2px 8px rgba(9,23,23,0.08)` — Source Card. Answer block `#FCFCF9` / 12px / 1px `#EFEFE9` / no shadow / 20/24 / FK Grotesk Neue 16px line-height 1.63 / `#091717` / 68ch / `[1]` `#13343B` on `#E5F2F2` — Answer Card + Type roles + Layout. Focus-mode pill white / 9999px / 1px `#E4E4DC` / 13px/500 / 6/14 / active `#E5F2F2` / `#20808D` / `#13343B` — Pill.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Production URL and named surfaces (Ask composer, thread/answer column, Home / Discover / Spaces / Library, marketing/landing including Display Hero, settings/sign-in/share/upgrade dialogs, first-class dark mode) as this contract's scope; values stay attached to the surface that established them |
| Experience Scope `:11` | Atmosphere characterizations (quiet and literary; editorial low-glare reading surface; print-like rather than `#000`; confident but never loud; subway-signage neutrality with quiet character; invisible brand whose chrome recedes so the answer is the hero). Hex values, type family names, "get out of the way of the answer," "Peacock / True Turquoise," "answer cursor," "terminal phosphor," and "well-set magazine that happens to think" beside them are the source's own |
| Experience Scope `:13` | Founding-and-identity narrative (2022 / four named founders / answer engine / ten blue links / answers with citations drives every design decision / Smith & Diction / Philadelphia / both invisible-brand wordings / reading and thinking tool / teal-not-saturated-cyan / refusal list / closing article-paper-ink sentence) classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three primary tasks from recorded controls and surfaces; not from the source's persona section |
| Audience `:28` | Dropping the persona section rather than promoting it; carrying no name, age, city, motivation, or affiliation classification; reading audience only from the Ask box, generated answer block, cited source card, and Focus mode / filter selector |
| Distinctive traits `:32` | Classifying the list as a restatement of the source's Key Characteristics, and the groupings and readings inside it |
| Principles `:44` | Eight numbered items as derived editorial implementation inference; toss-form close |
| Application rules `:57` | Eight Do rules and the reasons attached to them |
| Avoid `:70` | Seven Don't prohibitions and the reasons inside them |
| Semantic color `:86` | Pairing each hex to its token-set path; YAML lowercase beside §2 mixed-case; `surface-white` unmerged from `on-primary` and off the light-mode page background; catalog `#20808D` beside YAML `#20808d` without collapsing the catalog field; Info as a §2 role on that teal rather than a new YAML key; canvas unmerged from surface and surface-white; ink unmerged from body / muted / placeholder; hairline unmerged from hairline-soft; dark-mode keys unmerged from light-mode keys; teal-on-dark unmerged from primary; Source Slate / Plum / Clay and Surface Raised `#1C2128` and Ink Inverse 500 `#9BA1A6` as body writings not YAML color keys; `button-secondary.bg` `#fcfcf9` and `button-ghost.bg` `#efefe9` as component fields rather than general Ink or Paper |
| Spacing `:133` | Eight YAML spacing keys kept unitless beside the §5 px list; `20` and `40` off the YAML map; spacing steps unmerged from type size, radius, padding, and control height |
| Shape `:147` | Distinctive-traits Generous radii (8–12px) as that source range rather than a replacement for the YAML map; four YAML rounded keys (`6` / `10` / `16` / `9999`); `12` and `8` as component/§5 writings off that map; local harvested geometry rather than a universal radius |
| Elevation `:169` | YAML shadow strings unmerged from the §6 table; toast `0.18` unmerged from Elevated (3) `0.12`; paper-flat default with reserved floating layers rather than a global shadow scale |
| Motion `:201` | Three unsourced template cubic-bezier values omitted; five duration rows kept as duration tokens; four easing-role Use writings kept; `ease-cursor` `steps / linear` kept; signature pairings and reduced-motion kept; five-kind per-component promotion gate; official documentation of a single curve or duration is not that gate |
| Font evidence `:211` | Evidence-class sorting; this packet records no Perplexity-authored font licence or public type specimen assigning a general product role; FK Grotesk / FK Display / FK Grotesk Neue / Berkeley Mono as the families the source names without a FontFaceSet source URL; Inter / Georgia / JetBrains Mono / system stack refused as substitutes; YAML `family.sans` unmerged from FK Display and FK Grotesk Neue; YAML `family.mono` unmerged from JetBrains Mono |
| Family `:229` | YAML `family.sans` `FK Grotesk` unmerged from FK Display and FK Grotesk Neue; YAML `family.mono` `Berkeley Mono` unmerged from JetBrains Mono; computed-family metadata without a FontFaceSet source URL as family metadata rather than a loadable specimen |
| Type roles `:233` | Pairing each YAML role to its token-set path; unitless ratios kept as ratios beside §3 px; YAML `use` verbatim; longer §3 Notes column beside them; Display Hero `"Where knowledge begins"` and Mono `` `sonar-pro` `` as the longer §3 writings; heading size `22` beside §3 `22px`; answer-body size `16` off spacing `base: 16`; body size `15` off a spacing step; label `14` off caption `13`; caption `13` unmerged from mono `13` |
| Type roles `:256` | Five source typography principles as type-role rules from the source's typography section rather than as a separately published type specification |
| Assets `:263` | Simple Icons slug as catalog identity metadata rather than as a Perplexity-hosted mark |
| Capture record `:270` | Preserving the source state table in full while the catalog graph is not adopted |
| Capture / applicability `:288` | Interactive-kind and applicability verdicts and the reason for either; YAML `Primitive type` only when the token set records that type; Discover / Feed Card labelled `not in the token set`; YAML `button-secondary.bg` `#fcfcf9` and §4 Secondary rest `transparent` as two rest writings; YAML `button-ghost.bg` `#efefe9` and §4 Ghost rest `transparent` as two rest writings; Ask / Rewrite / Copy / Share as in-place commits; Home / Discover / Spaces / Library and Web / Academic / Writing as selectors; cited source cards as destination links; citation chips as disclosure; Composer and Text Field Focus is a captured Focus treatment, not a `focus-visible` treatment; Streaming / Focus mode active / Hover (source card) / Pressed as additional named observed states rather than Core applicability rows; §4 footer production URL as an evidence boundary rather than a token; absence of an observation is not `not-applicable`; loading/error/success follow product role not primitive kind; Core §4.4 by control meaning; not a complete state-coverage claim |
| Layout `:635` | Source layout notes rather than a complete published grid; `tokens.spacing.base: 16` not answer-body `16`; breakpoint names Mobile / Tablet / Desktop / Wide as the source's responsive writing rather than live computed mobile captures |
| Content `:686` | Voice characterized as a sharp, well-read research assistant rather than as a separately published copy manual; quoted strings required byte-exact; table as the source's own context/tone record |
| Named gaps `:736` | List as unnamed values rather than as coverage of domains the source never named |

## Proof notes

- tokens.source: prose-derived; tokens.extracted: 2026-06-09
- components_harvested: true
- No `ds.type` field. Portable B2a closes use the toss-form (not Perplexity-authored or a separately published UI specification)
- Uncaptured `focus-visible` treatment is omitted. Composer/text-field Focus is a different evidence class and is not copied onto a `focus-visible` row. Applicability follows control meaning. State coverage is not claimed complete
- Official founding narrative and Smith & Diction "invisible brand" wordings are narrative context, not a token sheet
- Sibling live-DOM samples listed under Sibling file stay on this ledger and are not portable tokens

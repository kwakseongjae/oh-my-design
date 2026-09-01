# MakinaRocks provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the MakinaRocks migration. Canonical source remains `web/references/makinarocks/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | makinarocks |
| name | MakinaRocks |
| name_ko | 마키나락스 |
| country | KR |
| category | ai |
| homepage | https://www.makinarocks.ai |
| primary_color | `#2b2b3b` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=makinarocks.ai&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The logo slug is a third-party favicon-proxy URL, not a MakinaRocks-published asset file. The portable Assets section names it as a catalog pointer.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| added | 2026-06-26 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| sibling bundle timestamp | 2026-07-13T11:52:21.879Z |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://www.makinarocks.ai/ | 2026-07-13 |
| about | corporate-marketing | https://www.makinarocks.ai/en/about/ | 2026-07-13 |
| blog | editorial-marketing | https://www.makinarocks.ai/en/blog/ | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-capture | product-surface | https://www.makinarocks.ai/ | 2026-07-13 |
| about-capture | product-surface | https://www.makinarocks.ai/en/about/ | 2026-07-13 |
| blog-capture | product-surface | https://www.makinarocks.ai/en/blog/ | 2026-07-13 |
| rebrand-context | brand-asset | https://www.makinarocks.ai/en/blog/makinarocks-rebranding-meet-our-new-logo/ | 2026-07-13 |
| kmr-apparat-assets | brand-asset | https://www.makinarocks.ai/fonts/kmr-apparat-regular.woff2 | 2026-07-13 |
| pretendard-license | license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | 2026-07-13 |

### Tier 1

- https://www.makinarocks.ai/
- https://www.makinarocks.ai/en/about/
- https://www.makinarocks.ai/en/blog/
- https://www.makinarocks.ai/en/blog/makinarocks-rebranding-meet-our-new-logo/
- https://github.com/orioncactus/pretendard/blob/main/LICENSE

### Tier 2 (no usable record)

- https://getdesign.md/makinarocks (built-in web open failed; no matching result in site search). Sibling also names the search `site:getdesign.md/makinarocks`.
- https://styles.refero.design/?q=makinarocks (built-in web open failed; no matching result in site search). Sibling also names the search `site:styles.refero.design MakinaRocks`.

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-capture / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary `#2b2b3b` | home |
| tokens.colors.canvas `#ffffff` | home |
| tokens.colors.ink `#000000` | home |
| tokens.colors.slate `#5a5a72` | home |
| tokens.colors.muted `#8d8da5` | home |
| tokens.typography.family.display `KmrApparat` | home |
| tokens.typography.family.body `Pretendard` | home |
| tokens.typography.display-hero.size / weight / lineHeight / tracking / use `Public-home marketing hero` | home |
| tokens.typography.body.size / weight / lineHeight / tracking / use `Public marketing and corporate reading text` | home |
| tokens.spacing.nav-control `16` | home |
| tokens.rounded.nav-control `0` | home |
| tokens.rounded.disabled-control `28` | home |
| tokens.components.disabled-home-control.type `button` | home |
| tokens.components.disabled-home-control.bg `rgba(196, 196, 212, 0.5)` | home |
| tokens.components.disabled-home-control.fg `#000000` | home |
| tokens.components.disabled-home-control.radius `28px` | home |
| tokens.components.disabled-home-control.font `13.3333px / 400 / Pretendard` | home |
| tokens.components.disabled-home-control.states `disabled computed snapshot only` | home |
| tokens.components.disabled-home-control.use `Disabled public-home control at home::[data-omd-capture="19"]` | home |

## Capture selectors

| Component | Pointer |
|---|---|
| Public header navigation control | `home::[data-omd-capture="1"]` |
| Disabled public-home control | `home::[data-omd-capture="19"]` |

## Sibling file

`web/references/makinarocks/.verification.md` exists. Method: supplied deterministic collector evidence at `artifacts/reference-evidence/makinarocks.json`; no browser capture rerun; no MCP tool. SHA-256 of the sibling file is recorded in the migration log after hashing.

Values that exist in the sibling and not in the source `DESIGN.md` stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- Bundle metadata: captured at `2026-07-13T11:52:21.879Z`; score 65; two component types; 38 variants; one static observed state; zero interaction expansions.
- Raw sample `home::body`: color `rgb(0, 0, 0)` / `#000000`; font `Pretendard, sans-serif`; `16px / 400 / 25.6px`; tracking `-0.16px`. Hex and px that also stand in the source DESIGN.md are portable there; the `rgb()` writing and the `sans-serif` stack stay here.
- Raw sample `home::li`: color `rgb(141, 141, 165)` / `#8d8da5`; `KmrApparat, sans-serif` `16px / 400 / 25.6px`; tracking `-0.16px`. The muted hex is portable; this list-item geometry is sibling-only.
- Raw sample `about` · `surface-2::li`: background `rgb(249, 249, 251)`; color `rgb(90, 90, 114)` / `#5a5a72`; radius `24px`; padding `24px`; `Pretendard, sans-serif` `24px / 400 / 31.2px`. The slate hex is portable; the about-list background, `24px` radius/padding/size, and `31.2px` line height are sibling-only.
- FontFace list names light and book in addition to the five weights the source DESIGN.md names (regular, medium, bold, heavy, and black). Those two extra face labels stay here as sibling FontFace names.
- Pretendard source-count writing `1,656` dynamic-subset URLs, and `Pretendard JP` declared with `2,142` source URLs.
- Rolled-back prior-reference inventory the sibling names beyond the source §4 list: contact CTA, product cards, industry tiles, blog card, shadow ladder, and responsive rules. Source §4 already names card, CTA, mega-menu, category-label, and carousel variants as not retained.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction expansions: 0; `interactions: []`; `interactionCount: 0`
- Uncaptured hover/disabled/loading/error/success treatments on the header control, and uncaptured default/hover/focus-visible/loading/error/success treatments on the disabled control aside from the disabled snapshot, are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official About, homepage, and 2026 rebrand article are narrative context, not token sources, except where the source DESIGN.md itself records a computed value
- Pretendard SIL Open Font License 1.1 is upstream licence context, not a MakinaRocks brand-asset licence
- No published first-party UI specification was found; the B2a example form is used as-is

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not MakinaRocks-authored or a separately published UI specification." This is an index of the derived-reading sites, not a completeness claim. Portable `DESIGN.md` carries 23 complete B2a qualifications. This table is 23 data rows. Preamble sentences on this page are not portable qualifications.

| Location | Qualified reading |
|---|---|
| Experience Scope `:9` | Three public homepage/About/Blog routes as this contract's token surfaces; rebrand article as brand-asset context that does not supply computed interface tokens; marketing surfaces recorded without treating them as an application-wide design system |
| Experience Scope `:11` | Characterizations (restrained, type-led marketing system; measured muted-text ladder; public design in transition; cool indigo / black / white / muted-grey vocabulary retained on the captured pages) as source readings, not a published UI specification; hex values and May 2026 rebrand facts beside them are the source's own |
| Experience Scope `:13` | Physical AI / industrial-operations narrative, company-stated 2017 / above 70% / more than 6,000 models figures, and rebrand article as brand context while keeping exact UI tokens restricted to the supplied computed-style evidence |
| Primary tasks `:19` | Selecting the three primary tasks from recorded public surfaces and controls; not from the stakeholder-group list |
| Audience `:34` | Dropping invented individuals; carrying no name, age, city, motivation, or affiliation classification; reading the three source-named groups as audience |
| Distinctive traits `:38` | Classifying the list as a restatement of source §1 bullets, and the groupings and the readings inside it |
| Principles `:47` | Three numbered stems resting on first-party About and rebrand sentences the source attributes to the company, plus every UI implication as the source's own editorial reading |
| Application rules `:55` | Five Do rules and the reasons attached to them |
| Avoid `:65` | Don't list and the reasons inside them |
| Semantic color `:79` | Role names from token-set keys; pairing each hex to its token-set path; `#2b2b3b` as public marketing title/brand-weight rather than authenticated-product semantics; canvas off ink off slate off muted; fluorescent yellow-green outside the token sheet |
| Brand asset `:89` | Fluorescent yellow-green as qualitative rebrand context rather than a guessed hex; old indigo refused as a substitute |
| Spacing `:93` | YAML `16` off prose `16px`; 16px public-navigation padding off body/nav type `16px`; single spacing key as the recorded nav-control step rather than a complete scale |
| Shape `:97` | YAML `0` off prose `0px`; YAML `28` off prose `28px`; two keys as local control radii rather than a universal radius scale |
| Elevation `:101` | Unresolved bound on flatness, depth, and card elevation; refusal to carry forward an older inferred shadow ladder |
| Motion `:107` | Five-kind promotion gate; refusal of a partial confirmation; a match against an official framework or vendor document is not that gate; rebrand expansion/momentum as narrative context only; no motion system attributed without a selector-provenanced observation |
| Font evidence `:115` | Evidence-class sorting; official-product-use row as a negative lookup; live KmrApparat/Pretendard surface-use; `Pretendard JP` declared-only; License row as upstream terms rather than a MakinaRocks brand asset; unobserved-domain row as a bound rather than a font claim |
| Family `:131` | Display versus body on the two families; system-font substitute refused for KmrApparat; `Pretendard JP` declared-only rather than live |
| Type roles `:135` | YAML numbers kept beside §3 px; YAML `use` verbatim; `64` / `83.2` / `-1.6` off `64px` / `83.2px` / `-1.6px`; body `16` off spacing `16` and nav padding `16px`; header-navigation and disabled-control rows as §3-only; disabled `13.3333px` off hero `64` |
| Assets `:152` | Google s2 favicon as catalog identity pointer rather than a MakinaRocks-hosted brand file; fluorescent yellow-green as brand-asset context rather than a type or color token |
| Capture record `:161` | Applicability note; interactive-kind and applicability verdicts and the reason for either; YAML primitive type attached only when recorded; header control labelled `not in the token set`; YAML `type: button` on the disabled control; static default-only geometry plus the one recorded disabled snapshot; not a complete state-coverage claim |
| Layout `:223` | Patterns as public-marketing/corporate/editorial recordings rather than a product-grid or app-spacing specification; rebrand article as image-direction and brand-narrative context that supplies no exact layout token; 1440×900 as the collector's capture size rather than a breakpoint system |
| Content `:241` | First-party public language called industrial, concrete, and outcome-led; rebrand energetic metaphor as brand expression rather than an instruction to overstate product capability; three-row register table as observed public-context notes rather than a complete product-microcopy guide; `마키나락스` kept beside `MakinaRocks` rather than as a replacement |
| Named gaps `:277` | List as unnamed values rather than as coverage of domains the source never named |

No published first-party UI specification was found; the B2a example form is used as-is.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 stakeholder groups as named end-user personas | Not promoted as individuals. Audience in the portable body is the three group wordings only. No persona biographies existed to delete. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Brand constraints already live in Foundations, Typography, and Components. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. Duration and signature-motion statements were not deleted because the source names none to keep; the no-token constraint and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |

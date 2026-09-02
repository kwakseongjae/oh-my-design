# 롯데ON provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/lotteon/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | lotteon |
| name | 롯데ON |
| country | KR |
| category | ecommerce |
| homepage | `https://www.lotteon.com/` |
| primary_color | `#000000` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=lotteon.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-14 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| tokens.note | Two public product surfaces; values are limited to measured computed styles. Pretendard and NotoSansKR were loaded; Avenuel Didot and Roboto Condensed were declared-only. |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#000000` is dual: identity here, and a keep-off-as-universal-CTA record in `DESIGN.md` Scope / Semantic color / Home Image Tab selected — it shares the hex with `tokens.colors.primary` and is not a general button rule. The favicon URL is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-14 |
| verification_v2.checked | 2026-07-14 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 (product surfaces); 2026-07-14 (corporate profile, Story, Pretendard license) |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-14. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer and YAML `verification_v2` record.

## Surfaces and sources

| id | kind | url | inspected / captured |
|---|---|---|---|
| home | storefront | `https://www.lotteon.com/p/display/main/lotteon` | 2026-07-13 |
| recent-products | account-history | `https://www.lotteon.com/p/mylotte/recent/product` | 2026-07-13 |
| home-live | product-surface | `https://www.lotteon.com/p/display/main/lotteon` | 2026-07-13 |
| recent-products-live | product-surface | `https://www.lotteon.com/p/mylotte/recent/product` | 2026-07-13 |
| corporate-profile | official-doc | `https://www.lotte.co.kr/business/compDetail.do?compCd=L207` | 2026-07-14 |
| lotteon-story | official-doc | `https://story.lotteon.com/` | 2026-07-14 |
| pretendard-license | license | `https://github.com/orioncactus/pretendard/blob/main/LICENSE` | 2026-07-14 |

YAML `homepage` is `https://www.lotteon.com/` (catalog identity; not a token-surface claim by itself).

### Tier 1 (as listed in the source footer)

- `https://www.lotteon.com/p/display/main/lotteon`
- `https://www.lotteon.com/p/mylotte/recent/product`

### Tier 2

- `https://getdesign.md/lotteon` — attempted on 2026-07-14; no accessible brand-specific result was returned by the search environment
- `https://styles.refero.design/?q=lotteon` — attempted on 2026-07-14; no accessible brand-specific result was returned by the search environment

These are cross-check attempts, not `verification_v2` source entries or claim evidence.

### Narrative (not interface tokens)

- Official corporate profile: `https://www.lotte.co.kr/business/compDetail.do?compCd=L207`
- Official Lotte ON Story: `https://story.lotteon.com/`
- Upstream Pretendard license: `https://github.com/orioncactus/pretendard/blob/main/LICENSE`

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: live-extract` and `tokens.extracted: 2026-07-13`. That producer string is ledger metadata. `components_harvested: true` is ledger metadata.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-13; `recent` = recent-products / recent-products-live / live-inspect / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas / field-border / foreground / hairline / muted / primary / secondary / tab-border | home |
| tokens.components.home-image-tab.* | home |
| tokens.components.product-card.* | home |
| tokens.components.search-input.* | home |
| tokens.components.recent-products-dropdown.* | recent-products |
| tokens.rounded.pill / square | home |
| tokens.shadow.flat | home |
| tokens.spacing.base / md / sm / xs | home |
| tokens.typography.body.* / family.commerce / family.navigation / home-heading.* / tab-label.* | home |

## Capture selectors

| Component | Pointer |
|---|---|
| Product Card | `home::div.c-product-card` |
| Home Image Tab (default) | `home::[data-omd-capture="148"]` |
| Home Image Tab (selected) | `home::[data-omd-capture="147"]` |
| Search Input | `home::[data-omd-capture="4"]` |
| Recent Products Dropdown | `surface-2::[data-omd-capture="89"]` |

## Sibling handling (`web/references/lotteon/.verification.md`)

The sibling exists — confirmed with `find web/references/lotteon -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Checked 2026-07-14. Method: supplied deterministic computed-style evidence bundle (`artifacts/reference-evidence/lotteon.json`); no browser recapture or MCP run in this CREATE pass.
- Artifact captured `2026-07-13T14:53:34.804Z` with `playwright_cli`.
- Coverage score 80/100. Component variants 38 across card, listItem, button, input, and tab. Interaction evidence: 3 tab selections; no hover, focus, pressed, disabled, error, dialog, toast, or toggle interaction evidence.
- Loaded fonts: Pretendard (432 uses), NotoSansKR (339 uses). Declared-only: Avenuel Didot, Roboto Condensed (0 visible uses).
- Surfaces: `https://www.lotteon.com/p/display/main/lotteon` home; `https://www.lotteon.com/p/mylotte/recent/product` recently viewed products.
- Raw samples: `home::body` color `rgb(51, 51, 51)` / background `rgb(255, 255, 255)` / `16px` / 400 / `0px`; `home::[data-omd-capture="4"]` search `30px` / padding `0px 28px 0px 0px` / `16px` / 400; `home::[data-omd-capture="148"]` tab white / `rgb(102, 102, 102)` / `1px` `rgb(238, 238, 238)` / `23px` / `46px`; `home::[data-omd-capture="147"]` selected tab `rgb(0, 0, 0)` / white / `23px` / `46px`; `home::div.c-product-card` `#333333` / transparent / `0px` / `220px × 368px`; `home::[data-omd-capture="54"]` circular button `1px` `rgb(229, 229, 229)` / `50%` / `34px`; `surface-2::[data-omd-capture="89"]` dropdown white / `#333333` / `1px` `rgb(221, 221, 221)` / `32px`; `surface-2::[data-omd-capture="77"]` recent-products active tab white / black / padding `12px 16px` / `52px`.
- Pretendard upstream SIL Open Font License 1.1 is recorded as an upstream licence boundary, not a Lotte ON redistribution term.
- getdesign / Refero: direct open returned an internal error; site search returned no brand-specific result.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts. This paragraph names the dropped field kind; it does not assert that the strings are absent from this file (E2d).

- coverage score 80
- artifact path `artifacts/reference-evidence/lotteon.json`
- artifact timestamp `2026-07-13T14:53:34.804Z`
- `playwright_cli`
- `rgb(51, 51, 51)` / `rgb(255, 255, 255)` / `rgb(102, 102, 102)` / `rgb(238, 238, 238)` / `rgb(0, 0, 0)` / `rgb(229, 229, 229)` / `rgb(221, 221, 221)`
- circular-button height `34px`
- recent-products active tab height `52px` and padding `12px 16px`
- sibling `home::body` `16px` / 400 reading (source YAML body is `14` / `500`; the `16px` / `400` writings in the source are the search field and product-card font)
- `home::[data-omd-capture="54"]` as a selector
- `surface-2::[data-omd-capture="77"]` as a selector

Values the sibling shares with the source body (corroboration, not new portable facts): `#ffffff`, `#333333`, `#000000`, `#eeeeee`, `#dddddd`, `#e5e5e5`, Pretendard 432 uses, NotoSansKR 339 uses, 23px / 46px tab, 30px search, 0px / 368px / 220px product-card, 50% circular radius, 32px dropdown, SIL OFL 1.1 as an upstream boundary, declared-only Avenuel Didot / Roboto Condensed, three tab selections, getdesign/refero no accessible brand-specific result.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / foreground / canvas / muted / secondary / hairline / field-border / tab-border | home |
| tokens.typography.family.commerce / navigation | home |
| tokens.typography.home-heading / body / tab-label | home |
| tokens.spacing.xs / sm / md / base | home |
| tokens.rounded.square / pill | home |
| tokens.shadow.flat | home |
| tokens.components.product-card / home-image-tab / search-input | home |
| tokens.components.recent-products-dropdown | recent-products |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompts and quick token reference | Deleted. Tool-facing recreate-the-control prompts. Values they restated are already in Foundations / Typography / Components. No receiving slot and no delegation (A2, A3). |
| §13 Personas — 3 service-role archetypes (no name, age, or city fields) | Deleted. The source's own §13 header states they are service-role archetypes grounded in first-party service descriptions, not demographic personas or user-research findings. Not promoted into the portable body, and not re-listed here as identifiers (D2, D2a). Experience `Audience` carries only the group-level contexts the source independently records (customers and participating brands). |
| §8 / §14 / §15 placeholder wrappers | Placeholder wrappers omitted; the evidence-status meanings (no hover / focus / pressed / disabled / error / empty / loading / success treatment; no motion duration / curve / animation name / reduced-motion; unnamed mobile columns / navigation collapse / touch-target expansion / sticky elements / tablet gutters / image crop policy) land in the Capture record, Foundations Motion, Layout, and Named gaps without a placeholder token. |
| §15 unattributed curves | Not present in the source. No curve value to delete. Duration and signature-motion fields are also unnamed. B3 promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value the construction prompts name was confirmed present elsewhere in the portable body before the section was dropped. Home product-card transparent / `#333333` / `0px` / `0px` / `368px` / `16px/400` — Product Card. Home image tab `#ffffff` / `#666666` / `1px` `#eeeeee` / `23px` / `46px` / `0px 16px 0px 4px` and selected `#000000` / `#ffffff` — Home Image Tab. Home search transparent / `#333333` / `30px` / `0px` / `0px 28px 0px 0px` — Search Input. Recently viewed-products dropdown white / `#333333` / `1px` `#dddddd` / square / `32px` / `0px 38px 0px 16px` — Recent Products Dropdown. Quick-token colors, families, spacing samples, and 0px / 23px geometry — Foundations.

## Derived editorial inventory

Portable `DESIGN.md` carries 22 complete B2a qualifications. This table is 22 data rows. Preamble sentences on this page are not portable qualifications.

| Location | Qualified reading |
|---|---|
| Experience Scope ¶1 `:9` | Two inspected product URLs as this contract's token surfaces; corporate-profile and Story URLs as named service-context sources that do not supply computed tokens; values stay attached; catalog `primary_color` `#000000` kept on the same hex as `tokens.colors.primary` without becoming a universal filled-CTA rule |
| Experience Scope ¶2 `:11` | Impression that prefers readable product/category/benefit over exaggerated brand color; Story line plus vertical/personalization expansion as explaining a shared shopping shell that currently prioritizes 탐색성 and 비교 가능성; 2026-07-13 layer as surface measurements rather than a declared global marketing palette |
| Experience Scope ¶3 `:13` | Origin-to-current-service narrative (1996 / 2018 / April 2020, integrated assortment, discovery emphasis, Story verticals, corporate verticals and membership benefits, closing preservation sentence) classified as context that does not by itself supply interface tokens; home-versus-recent density observation classified as a recorded match rather than as a token |
| Primary tasks `:19` | Selecting the three surface-or-official-scope outcomes as primary tasks; not from the Personas section |
| Audience `:28` | Dropping the three archetypes rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading source-named customer/participating-brand groups as audience |
| Distinctive traits `:32` | Classifying the Observed characteristics list as that restatement; groupings and readings inside the list |
| Principles `:43` | Four numbered items as derived editorial implementation inference; stems paraphrased from first-party service directions; source's own bound that they are not an invented design manifesto; every UI implication as the source's own editorial reading; toss-form close |
| Application rules `:56` | Five Do rules and the reasons attached to them |
| Avoid `:66` | Five Don't prohibitions and the reasons inside them |
| Semantic color `:80` | Role names from token-set keys; pairing each hex to its token-set path; catalog `#000000` on the same hex as primary without a universal filled CTA; page/tab/dropdown surface `#ffffff` on canvas; default tab and dropdown `bg` `#ffffff` as component fields; selected-tab text `#ffffff` as a §4 field — those writings not merged; unselected-tab `#666666` on secondary rather than muted; `#f3f3f3`/`#f5f5f5` off the token set; home values not a house palette; Lotte-group / promotion / error colors left unmeasured |
| Spacing `:97` | Unitless steps kept on their own keys rather than rewritten as a grid; `2`/`4`/`8`/`16` unmerged from border, tab padding `0px 16px 0px 4px`, type size, tab-label size, product-card font, and dropdown padding; 2px / 4px / 8px / 16px samples as observed values rather than a complete mathematical scale |
| Shape `:109` | Two rounded keys kept (`0`/`23`); square `0` off product-card/search `0px`; pill `23` off tab `23px`; `50%` circular radius off the rounded map; component heights off the rounded map; neither pair chosen as a replacement |
| Elevation `:121` | Representative `box-shadow: none` as the only elevation record for the observed elements, not a depth scale for every surface |
| Motion `:125` | Five-kind promotion gate; refusal of a partial confirmation — one curve read off one element, or a match against an official framework or vendor document, is not that gate; source no-duration / no-curve / no-animation-name / no-reduced-motion sentence kept; source do-not-infer list kept |
| Font evidence `:141` | Five evidence-class rows as the source's resolution table, not a published Lotte ON type specimen; official-product-use row not independently establishing a UI family; source class column for unnamed native-app / campaign / post-login typography projected as Outside these captures so the portable placeholder scanner does not treat the class name as a prescriptive placeholder |
| Family `:150` | Pretendard and NotoSansKR as two separate loaded families on the surfaces that established them; refusing system-font substitution; declared-only Avenuel Didot and Roboto Condensed refused as UI families; captured file URLs as availability evidence that does not authorize redistribution |
| Type roles `:154` | Pairing each YAML role to its token-set path; unitless `1.27`/`1.29`/`1.31` kept as ratios beside §3 `28px`/`18px`/`21px`; YAML size `22` beside §3 `22px` and YAML size `14` beside §3 `14px`; YAML `use` verbatim; longer §3 role name and captured-surface column beside them; search-field and dropdown rows as §3-only writings; tab-label size `16` kept off spacing `base: 16`; body size `14` off a spacing step; product-card font `16px / 400` as a §4 field off body `14` / `500`; remaining rows as useful measured siblings rather than an invented universal type scale |
| Assets `:172` | Google s2 favicon as catalog identity pointer; captured font-file URLs as availability evidence rather than a redistribution grant |
| Capture / How to read `:181` | Interactive-kind and applicability verdicts and the reason for either; 38-variant bound across card, listItem, button, input, and tab classifications; interaction-count-of-three bound that does not justify filling interactive-state values for buttons, inputs, or other tabs; static default geometry retained while only unobserved interactive states are omitted; selected-tab reading; static-container reading of the product card (C4: no map); dropdown-trigger reading; image tab as merchandising-facet selector and recent-products control as list trigger so loading/error/success close; search field keeps error applicable and closes loading/success; YAML `use` / font / padding / radius / border / height / states byte forms; product-card font `16px / 400` off body `14` / `500`; product-card height `368px` off spacing; tab padding off spacing.base/sm; selected-tab text `#ffffff` off canvas; search `30px` geometry beside §3 `30px`; dropdown padding `16px` off spacing.base; generic Focus is not `focus-visible`; absence of an observation is not `not-applicable`; loading/error/success follow product role not primitive kind; Core §4.4 by control meaning; not a complete state-coverage claim |
| Layout `:293` | 1440px figure read under the source's own "two desktop 1440px-wide product surfaces" sentence as support for measured component heights and list/card structure rather than as breakpoint rules or a mobile layout contract; home versus recent-products density as a recorded distinction rather than a universal card treatment; 2px / 4px / 8px / 16px samples as observed values rather than a complete mathematical scale; 46px / 30px / 32px / 220px / 368px kept on the surfaces that established them |
| Content `:298` | Official materials classified as a concise, practical, discovery-led implementation context rather than as a separately published copy manual; quoted strings required byte-exact; English beside a Korean line as a reading aid rather than a replacement |
| Named gaps `:347` | List as a catalog of source-unnamed values, not coverage of domains the source never named |

## Proof notes

- verification_v2 schema 2; conflicts: none
- `tokens.source: live-extract`
- `components_harvested: true`
- Interaction expansions: 3 tab selections; only default component observations plus the selected home image tab promoted
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Product card is `kind: non-interactive` with no applicability map (C4). Home image tab and recent-products dropdown close loading / error / success on facet-selector and list-trigger roles (C2). Search input keeps error `applicable` as a form field and closes loading / success on the query-field role. Disabled stays `applicable` on interactive controls.
- No focus-visible treatment is asserted anywhere: the source records no focus value. The observed-state name Focus is not promoted as `focus-visible` (B1).
- Official corporate profile and Lotte ON Story are narrative sources, not interface-token sources
- `tokens.source: live-extract` is ledger metadata
- No YAML `ds.type`. No published component-token specification is named. B2a uses the no-published-spec form (`not Lotte ON-authored or a separately published UI specification`).
- Upstream Pretendard SIL Open Font License 1.1 is recorded on this ledger and in the sibling; the portable body keeps the source's own "this reference does not claim redistribution rights or a license" bound and does not promote the upstream OFL string as a Lotte ON brand-asset claim

# マイナビ provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the mynavi migration. Canonical source remains `web/references/mynavi/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | mynavi |
| name | マイナビ |
| country | JP |
| category | productivity |
| homepage | https://www.mynavi.jp/ |
| primary_color | `#0071bb` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=mynavi.jp&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The logo slug is a third-party favicon-proxy URL, not a Mynavi-published asset file. The portable Assets section names it as a catalog pointer.

Token note from source: Machine tokens contain only selector-backed values from three public mynavi.jp corporate/service routes. No authenticated service, marketing-adjacent asset, or system fallback is promoted as a shared product token.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.schema | 2 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| sibling bundle timestamp | 2026-07-13T15:03:04.431Z |

Conflicts unresolved: none (source `conflicts: []`, and the source footer records "Conflicts unresolved: none").

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| corporate-home | corporate-home | https://www.mynavi.jp/ | 2026-07-13 |
| service-directory | service-directory | https://www.mynavi.jp/service/ | 2026-07-13 |
| corporate-information | corporate-information | https://www.mynavi.jp/company/ | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.mynavi.jp/ | 2026-07-13 |
| service-live | product-surface | https://www.mynavi.jp/service/ | 2026-07-13 |
| company-live | product-surface | https://www.mynavi.jp/company/ | 2026-07-13 |
| history-doc | official-doc | https://www.mynavi.jp/company/history/ | 2026-07-13 |
| purpose-doc | official-doc | https://www.mynavi.jp/recruit/career/company/purpose/ | 2026-07-13 |
| message-doc | official-doc | https://www.mynavi.jp/company/message/ | 2026-07-13 |
| logo-story | brand-asset | https://news.mynavi.jp/article/font_quiz-2/ | 2026-07-13 |

### Tier 1 (source footer)

- https://www.mynavi.jp/
- https://www.mynavi.jp/service/
- https://www.mynavi.jp/company/
- https://www.mynavi.jp/company/history/
- https://www.mynavi.jp/recruit/career/company/purpose/
- https://www.mynavi.jp/company/message/
- https://news.mynavi.jp/article/font_quiz-2/

### Tier 2 (attempted; no usable record)

- https://getdesign.md/mynavi (attempted; built-in web open returned no usable record)
- https://styles.refero.design/?q=mynavi (attempted; built-in web open returned no usable record)

Tier 2 records are not interface-token sources. No value was used.

### Narrative (not interface tokens)

- Official history: https://www.mynavi.jp/company/history/ — 2007 portal-brand unification; 2011 rename from Mainichi Communications. Company/product context only. The portable body keeps that substance; the URL stays here.
- Official purpose: https://www.mynavi.jp/recruit/career/company/purpose/ — purpose and values. Voice/principle context only.
- Official top message: https://www.mynavi.jp/company/message/ — social-innovator evolution through people and technology. Narrative context only.
- Mynavi News logo feature: https://news.mynavi.jp/article/font_quiz-2/ — custom logo lettering. Brand-asset context only.

## Claim ledger

Claims use YAML anchors from the source. `corporate-home` = corporate-home / home-live / computed-style / 2026-07-13; `service-directory` = service-directory / service-live / computed-style / 2026-07-13; `corporate-information` = corporate-information / company-live / computed-style / 2026-07-13. `tokens.typography.family.display` uses method `font-face-set`. `tokens.components.service-filter-tab.states` uses method `supplied-capture-summary`. `tokens.components.service-filter-tab.use` uses method `selector-provenance`.

| claim | surface |
|---|---|
| tokens.colors.body `#323746` | corporate-home |
| tokens.colors.heading `#000000` | service-directory |
| tokens.colors.corporate-heading `#0071bb` | corporate-information |
| tokens.colors.tab-fill `#dddddd` | service-directory |
| tokens.colors.info-surface `#e7f6fd` | corporate-information |
| tokens.typography.family.display `Noto Sans JP` | service-directory (font-face-set) |
| tokens.typography.body.size / weight / lineHeight / use `Observed public corporate-home body baseline only.` | corporate-home |
| tokens.typography.display.size / weight / lineHeight / use `Observed service-directory and corporate-information page title only.` | service-directory |
| tokens.spacing.list-indent `39` | corporate-home |
| tokens.spacing.tab-y `2` | service-directory |
| tokens.spacing.tab-x `3` | service-directory |
| tokens.rounded.tab `4` | service-directory |
| tokens.shadow.flat `none` | service-directory |
| tokens.components.service-filter-tab.type `tab` | service-directory |
| tokens.components.service-filter-tab.bg `#dddddd` | service-directory |
| tokens.components.service-filter-tab.fg `#000000` | service-directory |
| tokens.components.service-filter-tab.radius `4px` | service-directory |
| tokens.components.service-filter-tab.padding `2px 3px` | service-directory |
| tokens.components.service-filter-tab.height `38px` | service-directory |
| tokens.components.service-filter-tab.states | service-directory (supplied-capture-summary) |
| tokens.components.service-filter-tab.use | service-directory (selector-provenance) |

## Capture selectors

| Component | Pointer |
|---|---|
| Service filter tab | `surface-2::[data-omd-capture="14"]`, class `tab-show-item` |

## Sibling file

`web/references/mynavi/.verification.md` exists. Method: supplied deterministic collector evidence at `artifacts/reference-evidence/mynavi.json`; no browser capture rerun; no MCP tool. SHA-256 of the sibling file is recorded in the migration log after hashing.

Values that exist in the sibling and not in the source `DESIGN.md` stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- Bundle metadata: captured at `2026-07-13T15:03:04.431Z`; 0 interaction kinds; packet source class `product-surface`.
- Raw sample `home::li`: padding `0px 10px 0px 39px`; `15px / 400 / 26.25px`; 52px height. The source DESIGN.md keeps the `39px` left inset; the remaining list-item geometry stays here.
- Raw sample RGB writings: `rgb(50, 55, 70)`, `rgb(0, 0, 0)`, `rgb(0, 113, 187)`, `rgb(231, 246, 253)`. Matching hex values that also stand in the source DESIGN.md are portable there; the `rgb()` writings stay here.
- FontFace corroboration count: 124 Google Fonts WOFF2 source URLs for `Noto Sans JP`.
- Selector writing `a.tab-show-item` (source body writes class `tab-show-item`).
- OneTrust named as the cookie-consent UI. The source body writes cookie-consent controls without that vendor name.
- Purpose page “five values” list as foresight/imagination, gratitude/respect, challenge/practice, wellbeing, and connecting/involving. The source DESIGN.md writes gratitude, respect, acceptance of diverse viewpoints, and the ability to connect and involve people; the sibling’s five-label list stays here.
- Sibling boundary wording “signed-in service” and “mobile-app visual system”. The source DESIGN.md writes logged-in product interface, career-search or account-flow UI, and mobile variant; those sibling wordings stay here.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: live-extract
- Interaction records: 0; only default tab geometry promoted
- Uncaptured hover/focus/pressed/selected/disabled/validation/toast/dialog/mobile-variant treatments are omitted. They are not `not-applicable`; applicability follows control meaning. Filter-tab loading/error/success are `not-applicable` for the semantic reason that filter-tab selection does not itself present those results. State coverage is not claimed complete.
- Official history, purpose, top message, and the News logo feature are narrative or brand-asset context, not token sources, except where the source DESIGN.md itself records a computed value
- No published first-party UI specification was found; the B2a example form is used as-is

## Derived editorial inventory

Portable `DESIGN.md` carries 26 complete B2a qualifications. This table is 26 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Three public corporate-home / service-directory / company-information routes as this contract's token surfaces; history/purpose/message pages as narrative that does not supply computed visual tokens; News feature as logo-lettering context that does not establish a downloadable or licensed UI font; three public source domains kept distinct from unobserved service flows |
| Experience Scope `:11` | Characterizations (restrained and information-led; large areas left unfilled; concise blue section emphasis rather than a broad decorative palette; a directory for a many-service group rather than a single logged-in product interface) as source readings, not a published UI specification; hex values, isolated black/blue heading roles, captured tab `4px`, no-shadow samples, and loaded `Noto Sans JP` title family beside them are the source's own |
| Experience Scope `:13` | Publishing roots, 2007 unification, 2011 rename from Mainichi Communications, many forms of “me”, public purpose, social-innovator direction, and the closing narrative constraint as official context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three primary tasks from recorded public surfaces and controls; not from the persona section |
| Audience `:28` | Dropping the source's stakeholder archetypes; carrying no name, motivation, or affiliation classification; refusing to treat the dropped figures as this product's audience |
| Distinctive traits `:32` | Classifying the list as a restatement of source §1 bullets, and the groupings and the readings inside it |
| Principles `:42` | Four numbered stems the source states in its own Principles section, plus every UI implication as the source's own editorial reading |
| Application rules `:55` | Four Do rules and the reasons attached to them |
| Avoid `:64` | Don't list and the reasons inside them |
| Semantic color `:77` | Role names from token-set keys; pairing each hex to its token-set path; YAML `#0071bb` beside `#0071BB` as a local heading rather than a universal product CTA; `#dddddd` beside `#DDDDDD`; `#e7f6fd` beside `#E7F6FD`; catalog `primary_color` on the identity pointer; orange/green heading rules, `#3D3D3D`, and cookie-consent left out of the shared palette |
| Spacing `:93` | YAML `list-indent: 39` / `tab-y: 2` / `tab-x: 3` unmerged from matching type sizes; `39px` / `2px 3px` prose kept beside the unitless keys; not a universal spacing scale |
| Shape `:99` | YAML `tab: 4` beside prose `4px`; local service-directory tab radius rather than a universal radius scale |
| Elevation `:103` | `none` / `box-shadow: none` as a flat public-surface observation rather than a complete elevation system |
| Motion `:107` | Five-kind promotion gate; refusal of a partial confirmation; a match against an official framework or vendor document is not that gate |
| Font evidence `:124` | Evidence-class sorting; official-product-use as a negative lookup; live `Noto Sans JP` title role; Yu Gothic stack unresolved rather than a substitute; News feature brand-asset context; `swiper-icons` declared-only; missing licence line as a recorded absence |
| Family `:132` | Title-only `Noto Sans JP` versus unresolved Yu Gothic stack; refusal to substitute |
| Type roles `:142` | YAML unitless `1.75` kept beside §3 `24.5px` / `70px`; YAML `use` verbatim; §3-only `34px` / 500 / `59.5px` heading off the token-set keys |
| Assets `:149` | Google s2 favicon as catalog identity pointer rather than a Mynavi-hosted brand file; News feature as logo-lettering context rather than a UI-family token |
| Capture record `:156` | Promoting only the selector-backed tab; leaving remaining controls as raw evidence rather than inferred components |
| Capture record `:158` | Reading the static default geometry as remaining useful and retaining it on that ground |
| Capture record `:175` | Illustrative §14 rows as the source's own prompts rather than measured treatments |
| Service filter tab `:193` | Keeping the measured radius and height bound to the captured service-directory context |
| Layout `:212` | `1440×900` as the collector's capture size rather than a breakpoint system; `39px` inset and `2px 3px` padding as selector-local rather than a spacing scale; three source-domain rows as the source's own boundary table rather than a new domain inventory |
| Content voice `:217` | Register called individual-facing, respectful, and future-oriented; table as the source's own recommended register rather than a complete product-microcopy guide |
| Content strings `:241` | Byte-exact / gloss-beside rule; three illustrative lines as “Illustrative, not verified live copy” rather than official UI copy; `マイナビ` kept beside `Mynavi` rather than as a replacement |
| Named gaps `:275` | List as unnamed values rather than as coverage of domains the source never named |

No published first-party UI specification was found; the B2a example form is used as-is.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 stakeholder archetypes (four role labels; the source supplies no names, ages, or cities) | Deleted. The source's own header labels them archetypes derived only from publicly named service areas, not research personas. Not promoted to Audience or primary-tasks, and not re-hosted here as role labels, motivations, or affiliation classifications (D2, D2a). |
| Source §9 Agent Prompt Guide | None in the source. §9 is a source-domain / verification-boundary table; its unique rows land in Experience Scope and Layout. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. Duration and signature-motion statements were not deleted because the source names none to keep; the no-token constraint and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |

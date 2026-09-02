# Panasonic provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/panasonic/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | panasonic |
| name | パナソニック |
| country | JP |
| category | consumer-tech |
| homepage | https://holdings.panasonic/global/ |
| primary_color | `#0041c0` |
| logo | favicon `https://www.google.com/s2/favicons?domain=holdings.panasonic&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

Token note from source, kept as written: Only the three supplied Panasonic Holdings public-web surfaces ground these tokens. Corporate narrative, official design philosophy, and declared-only font observations remain separate where the evidence does not connect them.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none. verification_v2 schema 2.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | https://holdings.panasonic/global/ | 2026-07-13 |
| about | product-surface | https://holdings.panasonic/global/corporate/about.html | 2026-07-13 |
| technology | product-surface | https://holdings.panasonic/global/corporate/technology.html | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-capture | product-surface | https://holdings.panasonic/global/ | 2026-07-13 |
| about-capture | product-surface | https://holdings.panasonic/global/corporate/about.html | 2026-07-13 |
| technology-capture | product-surface | https://holdings.panasonic/global/corporate/technology.html | 2026-07-13 |
| noto-license | license | https://github.com/googlefonts/noto-cjk/blob/main/Sans/LICENSE | 2026-07-13 |

### Tier 1

- https://holdings.panasonic/global/
- https://holdings.panasonic/global/corporate/about.html
- https://holdings.panasonic/global/corporate/technology.html

### Tier 2 (no usable record)

- https://getdesign.md/panasonic — direct detail attempt returned an internal retrieval error.
- https://styles.refero.design/?q=Panasonic — direct search attempt returned an internal retrieval error.

No value imported from Tier 2.

### Narrative (not interface tokens)

- Official history: https://holdings.panasonic/global/corporate/about/history.html
- Official brand: https://holdings.panasonic/global/corporate/brand.html
- Official design: https://holdings.panasonic/global/corporate/design.html
- Panasonic GREEN IMPACT mission: https://holdings.panasonic/global/corporate/panasonic-green-impact/mission.html
- Noto CJK license: https://github.com/googlefonts/noto-cjk/blob/main/Sans/LICENSE

Source DESIGN.md §1 / §11 facts recorded on those pages, kept here as narrative rather than as tokens: 1918 founding by Konosuke Matsushita of Matsushita Electric Housewares Manufacturing Works; 1955 first Panasonic use for a speaker intended for export markets; Panasonic Design philosophy “Future Craft”; Panasonic GREEN IMPACT formulated in 2022; Group CCO description creating with care, consideration, and attention to future generations. Those strings also live in portable Experience Scope. They do not by themselves supply interface tokens.

Sibling-only narrative URLs (not in the source DESIGN.md body; kept here, not promoted into the portable contract):

- https://holdings.panasonic/global/corporate/design/philosophy.html
- https://holdings.panasonic/global/corporate/about/philosophy.html

## Claim ledger

Claims use YAML anchors from the source. `body_capture` = home / home-capture / computed-style; `home::#page-29286b2519` / 2026-07-13. `footer_capture` = home / home-capture / computed-style; `home::li` (class: holdings-footer__sns__list__item) / 2026-07-13. `nav_capture` = home / home-capture / computed-style; `home::li` (class: holdings-header__nav__list__item l2) / 2026-07-13. `link_capture` = home / home-capture / computed-style; `home::[data-omd-capture=115]` / 2026-07-13. `cookie_capture` = home / home-capture / computed-style; `home::[data-omd-capture=118]` / 2026-07-13. `search_capture` = home / home-capture / computed-style; `home::[data-omd-capture=10]` (class: holdings-header__search__tglbtn) / 2026-07-13.

| claim | surface / source |
|---|---|
| tokens.colors.canvas | body_capture |
| tokens.colors.foreground | body_capture |
| tokens.colors.muted | footer_capture |
| tokens.colors.navigation | nav_capture |
| tokens.colors.link | link_capture |
| tokens.typography.family.ui | home / noto-license / visible computed family backed by loaded FontFace; Noto Sans SIL Open Font License |
| tokens.typography.body.size / weight / lineHeight / use | body_capture |
| tokens.typography.navigation.size / weight / lineHeight / use | nav_capture |
| tokens.spacing.xs | footer_capture |
| tokens.spacing.sm | link_capture |
| tokens.spacing.md | body_capture |
| tokens.spacing.nav-gap | nav_capture |
| tokens.rounded.square | body_capture |
| tokens.rounded.cookie-control | cookie_capture |
| tokens.components.header-navigation-item.type / fg / radius / margin / size / font / use | nav_capture |
| tokens.components.search-toggle.type / bg / fg / border / radius / padding / size / font / states / use | search_capture |

Portable destinations for those values: Foundations Semantic color / Spacing / Shape; Typography & Assets Family and Type roles; Components & States Header Navigation Item and Search Toggle. Selectors and capture methods stay in this ledger.

## Capture selectors

| Component | Pointer |
|---|---|
| Header Navigation Item | `home::li` (class `holdings-header__nav__list__item l2`) |
| Search Toggle | `home::[data-omd-capture=10]` (class `holdings-header__search__tglbtn`) |
| Body / canvas / foreground | `home::#page-29286b2519` |
| Muted / footer social | `home::li` (class `holdings-footer__sns__list__item`) |
| Link | `home::[data-omd-capture=115]` |
| Cookie-control radius | `home::[data-omd-capture=118]` |

## Token-block component strings

| Component key | Verbatim token-block fields |
|---|---|
| `header-navigation-item` | `type: listItem`, `fg: "#4d4d4d"`, `radius: "0px"`, `margin: "0px 26px 0px 0px"`, `size: "167px x 23px"`, `font: "15px / 400 / Noto Sans"`, `use: "Public Holdings header .holdings-header__nav__list__item.l2 row"` |
| `search-toggle` | `type: button`, `bg: "transparent"`, `fg: "#1a1a1a"`, `border: "0px"`, `radius: "0px"`, `padding: "0px"`, `size: "16px x 16px"`, `font: "16px / 400 / Noto Sans"`, `states: "Default static baseline observed; no interactive state was captured."`, `use: "Public Holdings header .holdings-header__search__tglbtn button"` |

The typography token block uses: `family.ui: "Noto Sans"`; body `use: "Observed default body treatment on the captured Panasonic Holdings home surface"`; navigation `use: "Observed top-level header navigation treatment across the supplied public surfaces"`.

## Sibling file

`web/references/panasonic/.verification.md` exists (dotfile). Read in full. Evidence-class only; no sibling-only computed value is promoted into the portable body.

Raw samples recorded by the sibling and not present as token-set fields in the source DESIGN.md:

- `home::[data-omd-capture="115"]` — 12.992px / 400 / 19.488px beside the promoted link color `#0041c0`. Family not promoted because the packet reports unresolved `Noto Sands`.
- `home::[data-omd-capture="118"]` — background `#f2f2f2`; border `rgb(204, 204, 204)`; 1px border; padding 12px 30px; 122px x 40px beside the promoted `tokens.rounded.cookie-control: 2`.
- Footer `home::li` (class `holdings-footer__sns__list__item`) — margin 4px 12px 0px 0px; 12px / 400 / 18px / `Noto Sans` beside the promoted muted color `#666666` and `tokens.spacing.xs: 4`.
- Search toggle sibling line-height 24px on the 16px / 400 / `Noto Sans` sample. YAML font is `16px / 400 / Noto Sans` without a line-height field.
- `Noto Sands` visible first-family use count 10. The source DESIGN.md records low-confidence computed appearances without a matching loaded FontFace and excludes the family; it does not record the count 10.
- Collector packet metadata: captured 2026-07-13T15:09:21.985Z · coverage 71 · 40 component variants · interaction count 0.
- Sibling quote “ambient solutions”; Basic Management Objective; Seven Principles. Those strings are sibling/research narrative, not source DESIGN.md body.

Conflict matrix (sibling): Canvas and foreground, Header navigation item, Search toggle, Visible UI family, Interactive states — all Retain Tier 1 / Do not promote any interactive value. Unresolved: none.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: live-extract
- Interaction count: 0. Uncaptured hover/focus/pressed/disabled/loading/error/success treatments are omitted. They are not `not-applicable` solely for that reason. Applicability follows control meaning. State coverage is not claimed complete.
- Official history, brand, design, and GREEN IMPACT pages are narrative context, not token sources.
- Noto CJK SIL Open Font License 1.1 is a font-license boundary, not a Panasonic brand-font claim.
- Catalog `primary_color` `#0041c0` is the limited home-surface link; the source does not promote it to a semantic product action. The same hex on two paths is not one role: `#1a1a1a` is `tokens.colors.foreground` and separately `tokens.components.search-toggle.fg`; `#4d4d4d` is `tokens.colors.navigation` and separately `tokens.components.header-navigation-item.fg`.
- `ds.type` is not a source field. No published Panasonic UI component specification is in the packet.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Three URLs as this contract's surfaces; corporate narrative / official design philosophy / declared-only font observations kept separate where the evidence does not connect them; three pages as distinct public corporate-web evidence rather than as one shared product UI system |
| Experience Scope `:11` | Characterizations (quiet, document-like public-web language; pale-gray canvas; charcoal reading text; small regular-weight type; restrained blue link treatment) as source readings, not a published UI specification; hex values, loaded face, square geometry, cookie-control exception, and home-surface link limit beside them are the source's own |
| Experience Scope `:13` | Official-history, brand, design, and GREEN IMPACT narrative as brand context that does not by itself supply interface tokens; “that reserve fits a brand that began in 1918” as the source's own atmosphere-to-history join rather than as a published UI rule |
| Primary tasks `:19` | Selecting the three primary tasks from captured Holdings public-web surfaces or controls; not from the source's persona section |
| Audience `:28` | Dropping the persona section rather than promoting it; carrying no affiliation classification or motivation; using only the source wording building lasting customer connections |
| Distinctive traits `:32` | Classifying the list as a restatement of Key Characteristics, and the groupings inside it |
| Principles `:42` | Four items as application principles derived from official brand, design, and business-philosophy material; numbered stems resting on that official material; every *UI implication* as the source's own editorial reading, not a published Panasonic UI component specification |
| Application rules `:55` | Three Do rules and the reasons attached to them |
| Avoid `:63` | Three Don'ts and the reasons inside them |
| Semantic color `:75` | Pairing each hex to its token-set path; `tokens.colors.link` `#0041c0` unmerged from catalog `primary_color` as a semantic product action; foreground unmerged from navigation and muted; `tokens.colors.foreground` `#1a1a1a` unmerged from `tokens.components.search-toggle.fg` `#1a1a1a`; `tokens.colors.navigation` `#4d4d4d` unmerged from `tokens.components.header-navigation-item.fg` `#4d4d4d`; canvas on the home body background |
| Spacing `:85` | Four YAML spacing keys unmerged, unitless beside the source's px list; `nav-gap: 26` as the observed header-navigation right margin |
| Shape `:91` | Two rounded keys unmerged; `2px` cookie-control radius as that observed exception rather than as a general scale |
| Elevation `:95` | `box-shadow: none` kept on the body, navigation item, and search-toggle samples |
| Motion `:101` | Five-kind promotion gate restated beside the source's no-token sentence |
| Font evidence `:118` | Evidence-class sorting; loaded `Noto Sans` as the canonical visible public-web UI family rather than as a proprietary Panasonic text typeface; `swiper-icons` and `Noto Sands` off the text-family token |
| Family `:126` | `Noto Sans` as that live public-web-use family; a system-font substitute refused for an unavailable Panasonic-owned face |
| Type roles `:135` | YAML `use` beside table evidence-boundary spellings; body `16` off the search-toggle `16px` records |
| Assets `:144` | Google s2 favicon as a catalog identity pointer rather than as a Panasonic-hosted brand file; source Not included list as that packet boundary rather than as a new domain taxonomy |
| Capture record `:166` | Applicability note; every interactive-kind and applicability verdict and the reason for either; YAML `Primitive type` only when the token set records that type; not a complete state-coverage claim |
| Header Navigation Item `:181` | YAML `type: listItem` read as a public-header destination list item so that loading, error, and success are not-applicable on it |
| Search Toggle `:209` | Control read as a search-open toggle so that loading, error, and success are not-applicable on it |
| Layout `:230` | Home page as that broad corporate-information surface with compact global chrome and long editorial regions; about and technology pages as preserving this public-information rhythm; navigation density and editorial content kept distinct on the source's own instruction |
| Content `:247` | Voice named considerate, clear, and future-facing; brand-statement and Future Craft sentences classified as narrative principles rather than as a captured UI-copy specification; three voice samples kept as the source's own illustrative samples rather than as official Panasonic copy |
| Named gaps `:281` | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 24 complete B2a qualifications. This table is 24 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Panasonic-authored or a separately published UI specification."

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas, 3 slots (role labels and motivations; no name, age, or city existed) | Deleted. Not promoted as individuals, tasks, or Audience groups. Affiliation classification and motivation are not re-hosted. Portable Audience uses only source wording the brand page already uses. |
| Source §8 AI Design Prompts remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Unique constraints (`#f2f2f2` canvas, `#1a1a1a` body text, 16px Noto Sans, compact square navigation, 15px regular Noto Sans navigation in `#4d4d4d`, 26px right-gap, 16px square search trigger, limited `#0041c0` inline link, do not invent state styling) already live in Experience / Foundations / Components. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. The no-token constraint and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
| Bare evidence-class cell spelling `Unresolved` | Portable table cell writes `Unresolved in this pass` so a Core placeholder detector does not treat a lone evidence-class name as an unresolved value. The exclusion of `Noto Sands` is unchanged. |

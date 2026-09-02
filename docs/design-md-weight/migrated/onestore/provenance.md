# 원스토어 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the One Store migration. Canonical source remains `web/references/onestore/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | onestore |
| name | 원스토어 |
| country | KR |
| category | ecommerce |
| homepage | https://m.onestore.co.kr/ |
| primary_color | `#2a1f60` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=onestore.co.kr&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

Token note from the source, quoted in full:

> Machine tokens are limited to selector-backed values from the supplied One Store storefront and developer-portal capture. Corporate brand, font, and developer-support material remain separate evidence domains.

The logo slug is a third-party favicon-proxy URL, not a One Store-hosted brand file. The portable Assets section names it as a catalog pointer.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| sibling bundle timestamp | 2026-07-13T15:05:32.262Z |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| store-home | product-storefront | https://m.onestore.co.kr/ | 2026-07-13 |
| game-catalog | product-storefront | https://m.onestore.co.kr/v2/ko-kr/game | 2026-07-13 |
| oneplay-information | product-information | https://m.onestore.co.kr/v2/ko-kr/about/oneplay | 2026-07-13 |
| app-detail | product-storefront | https://m.onestore.co.kr/v2/ko-kr/app/0000117501/about | 2026-07-13 |
| developer-portal | developer-product | https://dev.onestore.net/dev | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| store-home-live | product-surface | https://m.onestore.co.kr/ | 2026-07-13 |
| game-catalog-live | product-surface | https://m.onestore.co.kr/v2/ko-kr/game | 2026-07-13 |
| oneplay-live | product-surface | https://m.onestore.co.kr/v2/ko-kr/about/oneplay | 2026-07-13 |
| app-detail-live | product-surface | https://m.onestore.co.kr/v2/ko-kr/app/0000117501/about | 2026-07-13 |
| developer-portal-live | product-surface | https://dev.onestore.net/dev | 2026-07-13 |
| company-about | official-doc | https://www.onestorecorp.com/about/corp/ | 2026-07-13 |
| customer-commitment | official-doc | https://onestorecorp.com/sv/ccm/ | 2026-07-13 |
| developer-support | official-doc | https://onestorecorp.com/sv/fordev/ | 2026-07-13 |
| brand-gallery | brand-asset | https://www.onestorecorp.com/brand/ | 2026-07-13 |
| mobile-font-assets | brand-asset | https://www.onestorecorp.com/sv/fordev_font/ | 2026-07-13 |
| mobile-font-commercial-use | license | https://onestorecorp.com/news/presskit/2021/2021-05-17.html | 2026-07-13 |

### Tier 1

- https://m.onestore.co.kr/
- https://m.onestore.co.kr/v2/ko-kr/game
- https://m.onestore.co.kr/v2/ko-kr/about/oneplay
- https://m.onestore.co.kr/v2/ko-kr/app/0000117501/about
- https://dev.onestore.net/dev
- https://www.onestorecorp.com/about/corp/
- https://onestorecorp.com/sv/ccm/
- https://www.onestorecorp.com/sv/fordev_font/

Source footer also names https://onestorecorp.com/sv/fordev/ as a developer-support URL and https://www.onestorecorp.com/brand/ as the brand gallery. Those stay here with the YAML source table.

### Tier 2 (no usable record)

- https://getdesign.md/onestore — attempted; endpoint returned an internal error/no usable record.
- https://styles.refero.design/?q=onestore — attempted; endpoint returned an internal error/no usable record.

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

### Narrative (not interface tokens)

- Official company history: https://www.onestorecorp.com/about/corp/
- Customer commitment / mission: https://onestorecorp.com/sv/ccm/
- Developer support: https://onestorecorp.com/sv/fordev/
- Brand gallery: https://www.onestorecorp.com/brand/
- Official font page: https://www.onestorecorp.com/sv/fordev_font/
- 2021 font announcement: https://onestorecorp.com/news/presskit/2021/2021-05-17.html

Voice-sample verification comments from source §10, kept here rather than in the portable file:

- “더 쏠쏠하게 앱하다” — verified: onestorecorp.com/about/corp 2026-07-13
- “슬기로운 게임생활을 만듭니다” — verified: onestorecorp.com/about/corp 2026-07-13
- “To provide compelling choices to make creators and consumers happier on our digital content platform” — verified: onestorecorp.com/sv/ccm 2026-07-13

## Claim ledger

Claims use YAML anchors from the source: `store_home` = store-home / store-home-live / computed-style / 2026-07-13; `developer` = developer-portal / developer-portal-live / computed-style / 2026-07-13; `developer_input` = developer-portal / developer-portal-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.brand-surface | store-home (computed-style-aggregate) |
| tokens.colors.canvas | store-home · selector `home::body` |
| tokens.colors.foreground | store-home · selector `home::body` |
| tokens.colors.secondary-foreground | store-home · selector `home::li` |
| tokens.typography.body.size / weight / lineHeight / use | store-home · selector `home::body` |
| tokens.colors.developer-surface | developer-portal · `surface-5::[data-omd-capture=10]` |
| tokens.colors.developer-border | developer-portal · `surface-5::[data-omd-capture=12]` |
| tokens.typography.developer-control.size / weight / use | developer-portal · `surface-5::[data-omd-capture=10]` |
| tokens.spacing.developer-button-x | developer-portal · `surface-5::[data-omd-capture=10]` |
| tokens.spacing.developer-input-y / developer-input-x | developer-portal · `surface-5::[data-omd-capture=12]` |
| tokens.rounded.square | store-home · selector `home::body` |
| tokens.components.developer-basic-button.* | developer-portal · `surface-5::[data-omd-capture=10]` |
| tokens.components.developer-login-input.* | developer-portal · `surface-5::[data-omd-capture=12]` |

## Capture selectors

| Component | Pointer |
|---|---|
| Developer portal GeneralButton | `surface-5::[data-omd-capture=10]` / `surface-5::[data-omd-capture="10"]`; class `GeneralButton-module__box___leAwc.large` |
| Developer portal LoginField | `surface-5::[data-omd-capture=12]` / `surface-5::[data-omd-capture="12"]`; class `LoginField-module__loginField___7ReTE` |

## Sibling file

`web/references/onestore/.verification.md` exists and was read in full. It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish.

- **Inspected:** 2026-07-13
- **Method (verbatim):** supplied deterministic collector evidence (`artifacts/reference-evidence/onestore.json`) plus first-party, official-font/licence, and Tier 2 web checks. Browser capture was not rerun and MCP was not used.

Values that exist in the sibling and not in the source `DESIGN.md` stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- Bundle metadata: captured at `2026-07-13T15:05:32.262Z` with `playwright_cli`; five routes; coverage score 76; 53 component variants; 0 observed states; 0 interaction kinds; 0 interaction snapshots.
- Raw RGB writings: `home::body` `rgb(0, 0, 0)` / `rgb(255, 255, 255)`; `home::li` `rgb(69, 69, 69)`; home background `rgb(42, 31, 96)`; GeneralButton `rgb(239, 239, 239)`; LoginField border `rgb(118, 118, 118)`.
- Collector occurrence count `2` for the home-route `#2a1f60` background (the source body already says observed twice).
- Font-use counts: storefront system stack classified `system / high` (110 uses); developer `Arial` classified `system / high` (12 uses); `Times` 112 computed uses in the bundle. The source body does not record those counts.
- Brand-gallery inventory wording in the sibling (BI, CI, app icons, badges, splash, promotional/offline work). The source DESIGN.md names the gallery as a distinct domain without that inventory list.
- Sibling mention of privacy principles on the customer-commitment page. The source DESIGN.md does not record that phrase.
- Conflict-matrix wording that consumer cards, tabs, toasts, dialogs, and toggles had no sufficiently specific selector-backed component token. The source already omits those as unobserved; the sibling list is not copied into the portable body as a named-gap domain inventory.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: live-extract
- Uncaptured hover/focus/pressed/disabled/error/success/empty/loading/skeleton treatments are omitted. They are not `not-applicable` solely for that reason. Applicability follows control meaning. State coverage is not claimed complete.
- Official company history, customer commitment, developer-support material, brand gallery, and the 2021 font announcement are narrative, stakeholder, or licence context, not storefront token sources, except where the source DESIGN.md itself records a computed value.
- Same-hex / same-number splits in the portable body, kept unmerged: catalog `primary_color` `#2a1f60` beside `tokens.colors.brand-surface` `#2a1f60` and body `#2A1F60`; YAML `#ffffff` beside body `#FFFFFF` (canvas and LoginField fill); YAML `#efefef` beside body `#EFEFEF` (developer-surface and GeneralButton fill); YAML `#000000` as `tokens.colors.foreground` (storefront text and border), as GeneralButton `fg` and `border`, and as LoginField `fg`; YAML unitless `tokens.typography.body.lineHeight` `1.46` beside §3 `21.9px`; `tokens.spacing.developer-button-x` 20 beside padding `0px 20px`; `tokens.spacing.developer-input-y` 1 and `developer-input-x` 2 beside padding `1px 2px`; height `50px` unmerged from the §5 box `180×50px`; height `21px` unmerged from the §5 box `153×21px`.
- `#0000EE` is recorded as appearing on the developer portal and is not promoted as a One Store brand value.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Five inspected routes as this contract's surfaces; machine tokens limited to the storefront and developer-portal capture; corporate brand, font, and developer-support material as separate evidence domains that do not supply the interface tokens |
| Experience Scope `:11` | Characterizations (deliberately split public ecosystem; mostly white, black-text surface with a sparse dark-purple background occurrence; conventional square system controls; four domains related but distinct) as source readings, not a published UI specification; URLs, token note, white/black baseline, sparse dark-purple observation, and square developer controls beside them are the source's own |
| Experience Scope `:13` | Official-history narrative (2016 T Store / SK Planet / One store Co., Ltd. / three mobile-carrier app markets / Naver App Store; 2024 Digital Turbine; 2021 fonts; each paragraph's last sentence) as brand context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three primary tasks from captured surfaces and controls; not from the source's persona section |
| Audience `:28` | Dropping the persona section rather than promoting it; carrying no affiliation classification or motivation; using only the source wordings creators, consumers, developers, and content partners |
| Distinctive traits `:32` | Classifying the list as a restatement of measured values, and the groupings inside it |
| Principles `:43` | Four items; numbered stems resting on first-party company sentences; every *UI implication* as the source's own editorial reading |
| Application rules `:52` | Four Do rules and the reasons attached to them |
| Application rules `:59` | Keeping the Agent Prompt Guide unique constraint on this page rather than as a tool prompt |
| Avoid `:63` | Four Don'ts and the reasons inside them |
| Avoid `:70` | Keeping the Agent Prompt Guide unique prohibition here rather than as a tool prompt |
| Semantic color `:78` | Pairing each hex to its token-set path; YAML lowercase beside body uppercase; `tokens.colors.brand-surface` as a narrow home-route observation rather than a universal action color; developer-surface and developer-border kept on `dev.onestore.net`; `#0000EE` not promoted |
| Spacing `:96` | Three YAML spacing keys unmerged; not a consumer-marketplace spacing scale |
| Shape `:100` | `tokens.rounded.square` 0 as a store-home / `home::body` observation rather than as the developer-control radius keys, not a universal radius scale |
| Elevation `:104` | `box-shadow: none` as the retained samples only, rather than as a card-elevation ladder |
| Motion `:108` | Five-kind promotion gate; a partial confirmation is not that gate; source prohibition on inferring motion from static illustrations, corporate videos, or generic platform behaviour kept |
| Font evidence `:116` | Evidence-class sorting; storefront stack as a high-confidence operating-system stack rather than a One Store-owned UI family; developer-portal Arial as a system font; geistSans / geistMono / notoSansKr declared-only; Mobile Gothic as official distributed assets rather than captured storefront webfonts; Times omitted |
| Family `:132` | Storefront stack as not a One Store-owned UI family; developer-portal Arial as a system font; those substitutes refused |
| Type roles `:144` | Three roles unmerged; YAML `use` verbatim; unitless `1.46` beside `21.9px`; 14px list-text row off the YAML typography keys |
| Assets `:148` | Google s2 favicon as a catalog identity pointer rather than as a One Store-hosted brand file |
| Assets `:150` | Official distributed type in the preceding bullet as not a verified storefront webfont; corporate brand gallery as a named brand-asset source that does not supply the marketplace palette or component tokens |
| Capture record `:170` | Applicability note; every interactive-kind and applicability verdict and the reason for either; YAML `Primitive type` only when the token set records that type; not a complete state-coverage claim |
| Developer portal GeneralButton `:192` | Padding `0px 20px` as this control together with `tokens.spacing.developer-button-x` 20; 180×50px as this control's measured box rather than as a marketplace grid |
| Developer portal LoginField `:222` | Padding `1px 2px` as this control together with `tokens.spacing.developer-input-y` 1 and `tokens.spacing.developer-input-x` 2; 153×21px as this control's measured box rather than as a marketplace grid |
| Layout `:241` | Capture as not a single cross-domain layout system; storefront URL's mobile hostname as not itself a responsive-implementation rule; 1440×900 as the supplied capture size rather than as a breakpoint system; 180×50px and 153×21px as individual control measurements rather than as a consumer-marketplace grid |
| Content `:260` | Naming the official corporate voice open, benefit-aware, and playfully mobile-native; keeping that language as corporate and service-principle context rather than as unobserved store labels or flows; refusing to treat corporate slogan language as a UI token |
| Named gaps `:294` | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 27 complete B2a qualifications. This table is 27 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification."

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas, 3 slots (role labels `Consumer of mobile content` / `Creator or developer`, and one unresolved placeholder slot; no name, age, or city existed) | Deleted. Not promoted as individuals, tasks, or Audience groups. Affiliation classification and motivation are not re-hosted. Portable Audience uses only source wordings first-party pages already use. |
| Source §9 Agent Prompt Guide remaining after unique constraints were moved | Deleted as tool-facing prompt. Unique constraints (Korean mobile-content marketplace with separate storefront, developer, corporate-brand, and font-asset evidence; square #EFEFEF button with 2px black border, 0px 20px padding, 50px height, and system Arial metrics, paired only with the measured square white login input; white/black baseline and narrow #2A1F60; do not synthesize a consumer CTA, card, brand webfont, interaction state, responsive pattern, or elevation system) already live in Experience / Foundations / Components. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. The no-token constraint and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
